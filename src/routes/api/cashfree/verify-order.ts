import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/cashfree/verify-order")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const appId = process.env["CASHFREE_APP_ID"] || process.env["VITE_CASHFREE_APP_ID"];
        const secretKey =
          process.env["CASHFREE_SECRET_KEY"] || process.env["VITE_CASHFREE_SECRET_KEY"];

        try {
          const body = (await request.json().catch(() => ({}))) as {
            orderId?: string;
            userId?: string;
            email?: string;
            planId?: string;
          };

          const rawOrderId = String(body.orderId ?? "").trim();
          const targetUserId = String(body.userId ?? "").trim();
          const targetEmail = String(body.email ?? "").trim();

          const { ensureAdminAuth } = await import("@/integrations/supabase/client.server");
          const sb = await ensureAdminAuth();

          const resolvedPlan = "lifetime";
          const isSandbox =
            (process.env["CASHFREE_MODE"] || process.env["VITE_CASHFREE_MODE"]) === "sandbox";

          async function checkCashfreeOrder(orderIdentifier: string) {
            if (!orderIdentifier || !appId || !secretKey) return null;
            const cleanId = orderIdentifier.trim();
            const pgEndpoint = isSandbox
              ? `https://sandbox.cashfree.com/pg/orders/${encodeURIComponent(cleanId)}`
              : `https://api.cashfree.com/pg/orders/${encodeURIComponent(cleanId)}`;

            try {
              const cfRes = await fetch(pgEndpoint, {
                headers: {
                  "x-api-version": "2023-08-01",
                  "x-client-id": appId,
                  "x-client-secret": secretKey,
                },
              });

              if (cfRes.ok) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const order = (await cfRes.json()) as any;
                let isPaid = order?.order_status === "PAID";
                if (!isPaid) {
                  try {
                    const payRes = await fetch(`${pgEndpoint}/payments`, {
                      headers: {
                        "x-api-version": "2023-08-01",
                        "x-client-id": appId,
                        "x-client-secret": secretKey,
                      },
                    });
                    if (payRes.ok) {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      const paymentsList = (await payRes.json()) as any[];
                      if (
                        Array.isArray(paymentsList) &&
                        paymentsList.some((p) => p.payment_status === "SUCCESS")
                      ) {
                        isPaid = true;
                      }
                    }
                  } catch {
                    /* ignore */
                  }
                }
                return { order, isPaid };
              }

              // Also try payment id endpoint if order check failed
              if (/^\d+$/.test(cleanId)) {
                const payEndpoint = isSandbox
                  ? `https://sandbox.cashfree.com/pg/payments/${encodeURIComponent(cleanId)}`
                  : `https://api.cashfree.com/pg/payments/${encodeURIComponent(cleanId)}`;
                const pRes = await fetch(payEndpoint, {
                  headers: {
                    "x-api-version": "2023-08-01",
                    "x-client-id": appId,
                    "x-client-secret": secretKey,
                  },
                });
                if (pRes.ok) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const pData = (await pRes.json()) as any;
                  if (pData?.payment_status === "SUCCESS") {
                    return {
                      order: {
                        order_id: pData.order_id || cleanId,
                        order_amount: pData.payment_amount,
                      },
                      isPaid: true,
                    };
                  }
                }
              }
            } catch (err) {
              console.warn("Cashfree check error:", err);
            }
            return null;
          }

          async function grantLifetime(userIdToUnlock: string, refId: string, amt = 199) {
            await sb
              .from("profiles")
              .update({
                is_premium: true,
                plan: "lifetime",
                premium_since: new Date().toISOString(),
              })
              .eq("id", userIdToUnlock);

            try {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              await (sb.rpc as any)("record_payment", {
                p_user_id: userIdToUnlock,
                p_plan: "lifetime",
                p_amount: amt,
                p_method: "cashfree",
                p_status: "paid",
                p_reference: refId,
              });
            } catch {
              /* ignore rpc error */
            }
          }

          // 1. If an Order ID or Payment ID is provided, check with Cashfree
          if (rawOrderId) {
            const cfResult = await checkCashfreeOrder(rawOrderId);
            if (cfResult?.isPaid) {
              const customerEmail = String(
                cfResult.order?.customer_details?.customer_email || targetEmail,
              ).trim();
              const userIdFromTag = String(
                cfResult.order?.order_tags?.user_id || targetUserId,
              ).trim();

              // Find profile
              let profileId = userIdFromTag;
              if (!profileId && customerEmail) {
                const { data: prof } = await sb
                  .from("profiles")
                  .select("id")
                  .ilike("email", customerEmail)
                  .maybeSingle();
                if (prof) profileId = prof.id;
              }
              if (!profileId && targetUserId) {
                profileId = targetUserId;
              }

              if (profileId) {
                await grantLifetime(
                  profileId,
                  cfResult.order.order_id || rawOrderId,
                  Number(cfResult.order.order_amount) || 199,
                );
              }

              return new Response(
                JSON.stringify({
                  success: true,
                  verified: true,
                  plan: "lifetime",
                  isPremium: true,
                  message: "Payment verified successfully! Lifetime Premium is unlocked.",
                }),
                { status: 200, headers: { "Content-Type": "application/json" } },
              );
            }
          }

          // 2. If no valid orderId or not found directly, check database by userId / email
          if (targetUserId || targetEmail) {
            // Check if profile is already marked premium
            let profile: { id: string; is_premium: boolean; plan?: string | null } | null = null;
            if (targetUserId) {
              const { data: p } = await sb
                .from("profiles")
                .select("id, is_premium, plan")
                .eq("id", targetUserId)
                .maybeSingle();
              if (p) profile = p;
            }
            if (!profile && targetEmail) {
              const { data: p } = await sb
                .from("profiles")
                .select("id, is_premium, plan")
                .ilike("email", targetEmail)
                .maybeSingle();
              if (p) profile = p;
            }

            if (profile?.is_premium) {
              // Ensure marked lifetime
              if (profile.plan !== "lifetime") {
                await sb.from("profiles").update({ plan: "lifetime" }).eq("id", profile.id);
              }
              return new Response(
                JSON.stringify({
                  success: true,
                  verified: true,
                  plan: "lifetime",
                  isPremium: true,
                  message: "Lifetime Premium is active on your account.",
                }),
                { status: 200, headers: { "Content-Type": "application/json" } },
              );
            }

            // Check if user has any pending or paid real payments in payments table
            const { data: recentPayments } = await sb
              .from("payments")
              .select("id, reference, status, plan, amount, is_demo")
              .eq("user_id", profile?.id || targetUserId)
              .eq("is_demo", false)
              .order("created_at", { ascending: false })
              .limit(5);

            if (Array.isArray(recentPayments)) {
              for (const p of recentPayments) {
                if (p.status === "paid") {
                  if (profile?.id)
                    await grantLifetime(profile.id, p.reference || "RESTORED", p.amount || 199);
                  return new Response(
                    JSON.stringify({
                      success: true,
                      verified: true,
                      plan: "lifetime",
                      isPremium: true,
                      message: "Restored Lifetime Premium from your completed payment.",
                    }),
                    { status: 200, headers: { "Content-Type": "application/json" } },
                  );
                }

                // If pending, check with Cashfree directly
                if (p.reference) {
                  const cfCheck = await checkCashfreeOrder(p.reference);
                  if (cfCheck?.isPaid) {
                    if (profile?.id)
                      await grantLifetime(
                        profile.id,
                        p.reference,
                        Number(cfCheck.order.order_amount) || 199,
                      );
                    return new Response(
                      JSON.stringify({
                        success: true,
                        verified: true,
                        plan: "lifetime",
                        isPremium: true,
                        message: "Cashfree payment confirmed! Lifetime Premium is unlocked.",
                      }),
                      { status: 200, headers: { "Content-Type": "application/json" } },
                    );
                  }
                }
              }
            }
          }

          return new Response(
            JSON.stringify({
              success: false,
              verified: false,
              message:
                "Could not automatically detect payment. Please enter your Cashfree Order ID or Payment Reference from your SMS/receipt.",
            }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        } catch (error) {
          console.error("Order verification error:", error);
          return new Response(
            JSON.stringify({
              error: "Internal server error during verification",
              details: String(error),
            }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
      },
    },
  },
});
