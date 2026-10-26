import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/admin/diagnose")({
  server: {
    handlers: {
      POST: async () => {
        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const results: Record<string, any> = {};

          // Check profiles count
          const { count: profilesCount, error: profilesError } = await supabaseAdmin
            .from("profiles")
            .select("id", { count: "exact", head: true });
          results["profilesCount"] = profilesCount;
          results["profilesError"] = profilesError?.message;

          // Check payments count
          const { count: paymentsCount, error: paymentsError } = await supabaseAdmin
            .from("payments")
            .select("id", { count: "exact", head: true });
          results["paymentsCount"] = paymentsCount;
          results["paymentsError"] = paymentsError?.message;

          // Check pwa_installs count
          const { count: pwaInstallsCount, error: pwaInstallsError } = await supabaseAdmin
            .from("pwa_installs")
            .select("id", { count: "exact", head: true });
          results["pwaInstallsCount"] = pwaInstallsCount;
          results["pwaInstallsError"] = pwaInstallsError?.message;

          // Get sample profiles
          const { data: sampleProfiles } = await supabaseAdmin
            .from("profiles")
            .select("id, full_name, email, is_premium, created_at")
            .order("created_at", { ascending: false })
            .limit(10);
          results["sampleProfiles"] = sampleProfiles;

          // Get sample payments
          const { data: samplePayments } = await supabaseAdmin
            .from("payments")
            .select("id, plan, amount, status, reference, created_at")
            .order("created_at", { ascending: false })
            .limit(10);
          results["samplePayments"] = samplePayments;

          // Try to get auth.users count via RPC
          try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const { data: authCount } = await (supabaseAdmin.rpc as any)("get_auth_users_count");
            results["authUsersCount"] = authCount;
          } catch (rpcErr) {
            results["authUsersCountError"] = (rpcErr as Error).message;
          }

          return new Response(JSON.stringify(results), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Diagnostic error:", error);
          return new Response(JSON.stringify({ error: "Diagnostic failed" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
