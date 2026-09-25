import crypto from "crypto";
import { supabase } from "@/integrations/supabase/client";

export async function POST({ request }: { request: Request }) {
  const secretKey = process.env["CASHFREE_SECRET_KEY"] || process.env["VITE_CASHFREE_SECRET_KEY"];
  
  if (!secretKey) {
    return new Response("Cashfree secret key not configured", { status: 500 });
  }

  try {
    const body = await request.json() as {
      data: {
        order: {
          order_id: string;
          order_amount: number;
          order_currency: string;
          order_status: string;
          customer_details: {
            customer_id: string;
            customer_email: string;
            customer_name: string;
          };
        };
      };
    };

    const { order } = body.data;
    
    // Verify webhook signature
    const signature = request.headers.get("x-webhook-signature");
    if (!signature) {
      return new Response("Missing signature", { status: 400 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", secretKey)
      .update(JSON.stringify(body.data))
      .digest("hex");

    if (signature !== expectedSignature) {
      console.error("Invalid webhook signature");
      return new Response("Invalid signature", { status: 401 });
    }

    // Process payment if successful
    if (order.order_status === "PAID") {
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
            premium_since: new Date().toISOString(),
          })
          .eq("id", profileData.id);

        // Record payment
        await supabase.from("payments").insert({
          user_id: profileData.id,
          plan: "premium",
          amount: order.order_amount,
          method: "cashfree",
          status: "paid",
          reference: order.order_id,
          is_demo: false,
        });

        console.log(`Payment successful for user ${profileData.id}, order ${order.order_id}`);
      }
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Cashfree webhook error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
