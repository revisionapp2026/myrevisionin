import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/admin/clean-demo-payments")({
  server: {
    handlers: {
      POST: async () => {
        try {
          const { ensureAdminAuth } = await import("@/integrations/supabase/client.server");
          const sb = await ensureAdminAuth();

          // Fetch all payments to identify demo records accurately
          const { data: allPayments, error: fetchErr } = await sb
            .from("payments")
            .select("id, is_demo, method, reference, user_id");

          if (fetchErr) throw fetchErr;

          const isDemoRow = (p: {
            is_demo?: boolean | null;
            method?: string | null;
            reference?: string | null;
            plan?: string | null;
          }) => {
            if (p.is_demo === true) return true;
            const m = String(p.method || "").toLowerCase();
            if (
              m.includes("demo") ||
              m.includes("simulated") ||
              m.includes("test") ||
              m.includes("sandbox") ||
              m.includes("mock")
            ) {
              return true;
            }
            const ref = String(p.reference || "").toLowerCase();
            if (
              ref.includes("demo") ||
              ref.includes("test_") ||
              ref.includes("simulated") ||
              ref.includes("mock") ||
              ref.startsWith("order_test_") ||
              ref.startsWith("admin_grant_") ||
              ref.includes("sandbox")
            ) {
              return true;
            }
            const pl = String(p.plan || "").toLowerCase();
            if (pl.includes("demo") || pl.includes("test")) {
              return true;
            }
            return false;
          };

          const demoIds = (allPayments || []).filter(isDemoRow).map((p) => p.id);

          let deletedCount = 0;
          if (demoIds.length > 0) {
            const { error: delErr } = await sb.from("payments").delete().in("id", demoIds);
            if (delErr) throw delErr;
            deletedCount = demoIds.length;
          }

          return new Response(
            JSON.stringify({
              success: true,
              deletedCount,
              message: `Successfully removed ${deletedCount} demo payment record(s).`,
            }),
            { status: 200, headers: { "Content-Type": "application/json" } },
          );
        } catch (error) {
          console.error("Clean demo payments error:", error);
          return new Response(JSON.stringify({ error: String(error) }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
