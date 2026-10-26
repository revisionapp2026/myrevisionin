import { createFileRoute } from "@tanstack/react-router";
import { createHmac } from "node:crypto";

export const Route = createFileRoute("/api/cashfree/webhook")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const secretKey =
          process.env["CASHFREE_SECRET_KEY"] || process.env["VITE_CASHFREE_SECRET_KEY"];

        if (!secretKey) {
          return new Response("Cashfree secret key not configured", { status: 500 });
        }

        try {
          const rawBody = await request.text();
          const signature = request.headers.get("x-webhook-signature");
          const timestamp = request.headers.get("x-webhook-timestamp");

          if (!signature) {
            return new Response("Missing signature", { status: 400 });
          }

          // Verify webhook signature (Cashfree: HMAC-SHA256(timestamp + rawBody, secretKey) in base64)
          const signedPayload = timestamp ? `${timestamp}${rawBody}` : rawBody;
          const expectedSignatureBase64 = createHmac("sha256", secretKey)
            .update(signedPayload)
            .digest("base64");
          const expectedSignatureHex = createHmac("sha256", secretKey)
            .update(signedPayload)
            .digest("hex");

          const isValid =
            signature === expectedSignatureBase64 || signature === expectedSignatureHex;

          if (!isValid) {
            console.error("Invalid Cashfree webhook signature", {
              hasTimestamp: Boolean(timestamp),
            });
            return new Response("Invalid signature", { status: 401 });
          }

          // Dynamic import of supabaseAdmin with ensured admin auth
          const { ensureAdminAuth } = await import("@/integrations/supabase/client.server");
          const sb = await ensureAdminAuth();

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const body = JSON.parse(rawBody) as any;
          const order = body?.data?.order;
          const payment = body?.data?.payment;

          const isPaid =
            order?.order_status === "PAID" ||
            payment?.payment_status === "SUCCESS" ||
            body?.type === "PAYMENT_SUCCESS_WEBHOOK" ||
            body?.type === "ORDER_PAID_SUCCESS";

          if (isPaid && (order || payment)) {
            const planId = "lifetime";
            const orderAmount = Number(order?.order_amount || payment?.payment_amount) || 199;
            const orderId = String(order?.order_id || payment?.order_id || `ORDER_${Date.now()}`);
            const userIdFromTags = order?.order_tags?.user_id;
            const customerEmail = String(
              order?.customer_details?.customer_email || payment?.customer_email || "",
            ).trim();

            let targetProfile: { id: string; is_premium?: boolean; email?: string | null } | null =
              null;

            // 1. Try finding by user_id from order_tags
            if (userIdFromTags) {
              const { data: pById } = await sb
                .from("profiles")
                .select("id, is_premium, email")
                .eq("id", userIdFromTags)
                .maybeSingle();
              if (pById) targetProfile = pById;
            }

            // 2. Fall back to finding by email (case-insensitive)
            if (!targetProfile && customerEmail) {
              const { data: pByEmail } = await sb
                .from("profiles")
                .select("id, is_premium, email")
                .ilike("email", customerEmail)
                .maybeSingle();
              if (pByEmail) targetProfile = pByEmail;
            }

            if (targetProfile) {
              // 1. Update profile to lifetime premium
              await sb
                .from("profiles")
                .update({
                  is_premium: true,
                  plan: "lifetime",
                  premium_since: new Date().toISOString(),
                })
                .eq("id", targetProfile.id);

              // 2. Record payment via SECURITY DEFINER RPC
              try {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                await (sb.rpc as any)("record_payment", {
                  p_user_id: targetProfile.id,
                  p_plan: "lifetime",
                  p_amount: orderAmount,
                  p_method: "cashfree",
                  p_status: "paid",
                  p_reference: orderId,
                });
              } catch (rpcErr) {
                console.warn("RPC record_payment failed in webhook, using direct insert:", rpcErr);
                await sb.from("payments").upsert(
                  {
                    user_id: targetProfile.id,
                    plan: "lifetime",
                    amount: orderAmount,
                    method: "cashfree",
                    status: "paid",
                    reference: orderId,
                    is_demo: false,
                  },
                  { onConflict: "reference" },
                );
              }

              console.log(
                `Successfully upgraded user ${targetProfile.id} (${customerEmail}) to Lifetime Premium via webhook`,
              );
            } else {
              console.warn(
                `Cashfree payment received for order ${orderId} but could not match user by tags (${userIdFromTags}) or email (${customerEmail})`,
              );
            }
          }

          return new Response("OK", { status: 200 });
        } catch (error) {
          console.error("Cashfree webhook error:", error);
          return new Response("Internal server error", { status: 500 });
        }
      },
    },
  },
});
