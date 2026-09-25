import { createFileRoute } from "@tanstack/react-router";
import crypto from "crypto";

export const Route = createFileRoute("/api/cashfree/create-order")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const appId = process.env["CASHFREE_APP_ID"] || process.env["VITE_CASHFREE_APP_ID"];
        const secretKey = process.env["CASHFREE_SECRET_KEY"] || process.env["VITE_CASHFREE_SECRET_KEY"];
        
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
          };

          const { planId, amount, customerEmail, customerName, customerPhone } = body;

          if (!customerEmail || !amount || Number(amount) <= 0) {
            return new Response("Invalid payment request", { status: 400 });
          }

          const orderId = `ORDER_${Date.now()}_${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
          const sanitizedPhone = String(customerPhone ?? "").replace(/\D/g, "").slice(0, 10);
          const customerId = (customerEmail || "user").replace(/[^a-zA-Z0-9]/g, "") || "user";
          const baseUrl = process.env["VITE_APP_URL"] || "https://myrevision.in";

          const orderPayload = {
            order_id: orderId,
            order_amount: amount,
            order_currency: "INR",
            customer_details: {
              customer_id: customerId,
              customer_email: customerEmail,
              customer_name: customerName || "REVISION User",
              customer_phone: sanitizedPhone.length === 10 ? sanitizedPhone : "9999999999",
            },
            order_meta: {
              return_url: `${baseUrl}/payment?cf_success=true`,
              notify_url: `${baseUrl}/api/cashfree/webhook`,
            },
            order_note: `REVISION Premium - ${planId}`,
          };

          // Create order via Cashfree API (production)
          const cashfreeResponse = await fetch(
            "https://api.cashfree.com/pg/orders",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-version": "2023-08-01",
                "x-client-id": appId,
                "x-client-secret": secretKey,
              },
              body: JSON.stringify(orderPayload),
            }
          );

          if (!cashfreeResponse.ok) {
            const error = await cashfreeResponse.text();
            console.error("Cashfree order creation failed:", error);
            return new Response(`Failed to create order: ${error}`, { status: 500 });
          }

          const orderData = await cashfreeResponse.json();

          return new Response(
            JSON.stringify({
              order_id: orderId,
              payment_session_id: orderData.payment_session_id,
              order_token: orderData.order_token,
              order_amount: amount,
            }),
            {
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (error) {
          console.error("Cashfree order creation error:", error);
          return new Response("Internal server error", { status: 500 });
        }
      },
    },
  },
});
