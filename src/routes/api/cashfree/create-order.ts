import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/cashfree/create-order")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const appId = process.env["CASHFREE_APP_ID"] || process.env["VITE_CASHFREE_APP_ID"];
        const secretKey =
          process.env["CASHFREE_SECRET_KEY"] || process.env["VITE_CASHFREE_SECRET_KEY"];

        if (!appId || !secretKey) {
          return new Response("Cashfree credentials not configured", { status: 500 });
        }

        try {
          const body = (await request.json()) as {
            planId: string;
            amount: number;
            customerEmail: string;
            customerName: string;
            customerPhone: string;
            userId?: string;
            origin?: string;
          };

          const customerEmail = String(body.customerEmail ?? "").trim();
          const customerName = String(body.customerName ?? "REVISION User").trim();
          const customerPhone = String(body.customerPhone ?? "");
          const userId = body.userId ? String(body.userId).trim() : undefined;
          const origin = body.origin;

          // Lifetime plan is flat ₹199 permanently with no price hike after 7 days
          const planId = "lifetime";
          const amount = 199;

          if (!customerEmail) {
            return new Response("Customer email is required", { status: 400 });
          }

          const orderId = `ORDER_${Date.now()}_${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
          const sanitizedPhone = customerPhone.replace(/\D/g, "").slice(0, 10);
          const customerId =
            customerEmail.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 45) || `user_${Date.now()}`;

          let headerOrigin = "";
          try {
            const reqOrigin = request.headers.get("origin");
            const reqReferer = request.headers.get("referer");
            if (reqOrigin) {
              headerOrigin = reqOrigin;
            } else if (reqReferer) {
              headerOrigin = new URL(reqReferer).origin;
            }
          } catch {
            /* ignore url parse error */
          }

          const baseUrl =
            origin || headerOrigin || process.env["VITE_APP_URL"] || "https://myrevision.in";

          const isSandbox =
            (process.env["CASHFREE_MODE"] || process.env["VITE_CASHFREE_MODE"]) === "sandbox";
          const pgEndpoint = isSandbox
            ? "https://sandbox.cashfree.com/pg/orders"
            : "https://api.cashfree.com/pg/orders";

          const orderPayload = {
            order_id: orderId,
            order_amount: amount,
            order_currency: "INR",
            customer_details: {
              customer_id: customerId,
              customer_email: customerEmail,
              customer_name: customerName,
              customer_phone: sanitizedPhone.length === 10 ? sanitizedPhone : "9999999999",
            },
            order_tags: {
              user_id: userId || "",
              plan_id: "lifetime",
            },
            order_meta: {
              return_url: `${baseUrl}/payment?cf_success=true&order_id={order_id}&plan=lifetime`,
              notify_url: `${baseUrl}/api/cashfree/webhook`,
            },
            order_note: `REVISION Lifetime Access - ₹${amount}`,
          };

          // Create order via Cashfree API
          console.log("[cashfree] Creating payment order", {
            orderId,
            amount,
            customerEmail,
            planId,
            baseUrl,
            isSandbox,
          });

          const cashfreeResponse = await fetch(pgEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-version": "2023-08-01",
              "x-client-id": appId,
              "x-client-secret": secretKey,
            },
            body: JSON.stringify(orderPayload),
          });

          const responseText = await cashfreeResponse.text();

          if (!cashfreeResponse.ok) {
            console.error("Cashfree order creation failed:", responseText);
            return new Response(
              JSON.stringify({
                error: "Failed to create payment order",
                details: responseText,
              }),
              {
                status: 500,
                headers: { "Content-Type": "application/json" },
              },
            );
          }

          let orderData: Record<string, unknown>;
          try {
            orderData = JSON.parse(responseText) as Record<string, unknown>;
          } catch {
            console.error("Cashfree responded with a non-JSON body:", responseText);
            return new Response(
              JSON.stringify({ error: "Cashfree returned an unexpected response" }),
              { status: 502, headers: { "Content-Type": "application/json" } },
            );
          }

          // Track pending order in Supabase so auto-recovery works effortlessly
          if (userId) {
            try {
              const { ensureAdminAuth } = await import("@/integrations/supabase/client.server");
              const sb = await ensureAdminAuth();
              await sb.from("payments").insert({
                user_id: userId,
                plan: "lifetime",
                amount,
                method: "cashfree",
                status: "pending",
                reference: orderId,
                is_demo: false,
              });
            } catch (trackErr) {
              console.warn("Could not insert pending payment record:", trackErr);
            }
          }

          return new Response(
            JSON.stringify({
              order_id: orderId,
              payment_session_id: orderData["payment_session_id"],
              order_token: orderData["order_token"],
              order_amount: amount,
            }),
            {
              headers: { "Content-Type": "application/json" },
            },
          );
        } catch (error) {
          console.error("Cashfree order creation error:", error);
          return new Response("Internal server error", { status: 500 });
        }
      },
    },
  },
});
