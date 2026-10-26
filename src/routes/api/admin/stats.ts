import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/admin/stats")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const { ensureAdminAuth } = await import("@/integrations/supabase/client.server");
          const sb = await ensureAdminAuth();

          const [{ count: pwaInstalls }, { count: siteVisits }] = await Promise.all([
            sb.from("pwa_installs").select("id", { count: "exact", head: true }),
            sb.from("site_visits").select("id", { count: "exact", head: true }),
          ]);

          return new Response(
            JSON.stringify({
              pwaInstalls: pwaInstalls ?? 0,
              siteVisits: siteVisits ?? 0,
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json" },
            },
          );
        } catch (error) {
          console.error("Admin stats fetch error:", error);
          return new Response(JSON.stringify({ error: "Failed to load stats" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
