import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/api/analytics/track-visit")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            userId?: string;
            sessionId: string;
            userAgent?: string;
            referrer?: string;
          };

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await (supabase.from as any)("site_visits").insert({
            user_id: body.userId || null,
            session_id: body.sessionId,
            user_agent: body.userAgent || null,
            referrer: body.referrer || null,
          });

          return new Response("OK", { status: 200 });
        } catch (error) {
          console.error("Error tracking visit:", error);
          return new Response("Internal server error", { status: 500 });
        }
      },
    },
  },
});
