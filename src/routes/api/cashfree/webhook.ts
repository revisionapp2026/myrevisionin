import { createFileRoute } from "@tanstack/react-router";
import { createHmac } from "node:crypto";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/api/cashfree/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
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

          const body = JSON.parse(rawBody) as {
            data: {
              order: {
                order_id: string;
                order_amount: number;
                order_currency: string;
                order_status: string;
                order_note?: string;
                customer_details: {
                  customer_id: string;
                  customer_email: string;
                  customer_name: string;
                };
              };
            };
          };

          const { order } = body.data;

          // Process payment if successful
          if (order.order_status === "PAID") {
            const rawNote = (order as { order_note?: string }).order_note ?? "";
            const planId = rawNote.includes(" - ") ? rawNote.split(" - ")[1]! : "yearly";

            // Find user by email
            const { data: profileData } = await supabase
              .from("profiles")
              .select("id")
              .eq("email", order.customer_details.customer_email)
              .maybeSingle();

            if (profileData) {
              // Update user to premium
              await supabase
                .from("profiles")
                .update({
                  is_premium: true,
                  plan: planId,
                  premium_since: new Date().toISOString(),
                })
                .eq("id", profileData.id);

              // Record payment
              await supabase.from("payments").insert({
                user_id: profileData.id,
                plan: planId,
                amount: order.order_amount,
                method: "cashfree",
                status: "paid",
                reference: order.order_id,
                is_demo: false,
              });

              console.log(
                `Payment successful for user ${profileData.id}, order ${order.order_id}, plan ${planId}`,
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
