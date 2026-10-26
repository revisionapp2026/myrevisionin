import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/analytics/track-install")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        try {
          const body = (await request.json().catch(() => ({}))) as {
            userId?: string;
            platform?: string;
            userAgent?: string;
          };

          const record = {
            user_id: body.userId || null,
            platform: body.platform || null,
            user_agent: body.userAgent || null,
          };

          const { ensureAdminAuth } = await import("@/integrations/supabase/client.server");
          const sb = await ensureAdminAuth();

          const { error } = await sb.from("pwa_installs").insert(record);
          if (error) {
            console.error("Supabase admin insert error in track-install:", error);
            try {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              await (sb.rpc as any)("track_pwa_install", {
                p_user_id: record.user_id,
                p_platform: record.platform,
                p_user_agent: record.user_agent,
              });
            } catch (rpcErr) {
              console.error("RPC fallback also failed:", rpcErr);
            }
          }

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Error tracking install:", error);
          return new Response(JSON.stringify({ error: "Failed to track install" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
