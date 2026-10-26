import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAppState } from "@/lib/app-state";

export const Route = createFileRoute("/auth/callback")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      code: typeof search["code"] === "string" ? search["code"] : undefined,
      error: typeof search["error"] === "string" ? search["error"] : undefined,
      error_description:
        typeof search["error_description"] === "string" ? search["error_description"] : undefined,
    };
  },
  component: AuthCallbackScreen,
});

function AuthCallbackScreen() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { program, semester } = useAppState();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function handleCallback() {
      if (typeof window === "undefined") return;

      const urlParams = new URLSearchParams(window.location.search);
      const code = search.code || urlParams.get("code");
      const err =
        search.error_description ||
        search.error ||
        urlParams.get("error_description") ||
        urlParams.get("error");

      if (err) {
        if (active) setErrorMsg(decodeURIComponent(err));
        return;
      }

      try {
        if (code) {
          const { data, error: exchangeErr } = await supabase.auth.exchangeCodeForSession(code);
          if (exchangeErr) {
            console.warn("[AuthCallback] Exchange warning:", exchangeErr);
          }
          const sessionUser =
            data?.session?.user ?? (await supabase.auth.getSession()).data.session?.user;
          if (sessionUser && active) {
            const { data: userProfile } = await supabase
              .from("profiles")
              .select("program_id, semester")
              .eq("id", sessionUser.id)
              .maybeSingle();

            const targetProg = userProfile?.program_id || program;
            const targetSem = userProfile?.semester || semester;

            const target =
              targetProg && targetSem
                ? "/dashboard"
                : targetProg
                  ? "/semester-selection"
                  : "/program-selection";

            window.location.href = target;
            return;
          }
        } else {
          // Check for implicit hash session
          const { data } = await supabase.auth.getSession();
          if (data?.session?.user && active) {
            const { data: userProfile } = await supabase
              .from("profiles")
              .select("program_id, semester")
              .eq("id", data.session.user.id)
              .maybeSingle();

            const targetProg = userProfile?.program_id || program;
            const targetSem = userProfile?.semester || semester;

            const target =
              targetProg && targetSem
                ? "/dashboard"
                : targetProg
                  ? "/semester-selection"
                  : "/program-selection";

            window.location.href = target;
            return;
          }
        }
        // Fallback
        navigate({ to: "/dashboard", replace: true });
      } catch (e) {
        console.error("[AuthCallback] Error processing callback:", e);
        navigate({ to: "/auth", replace: true });
      }
    }

    void handleCallback();

    return () => {
      active = false;
    };
  }, [search.code, search.error, search.error_description, navigate, program, semester]);

  if (errorMsg) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 text-center">
        <h2 className="text-[20px] font-bold text-destructive">Sign-in Notice</h2>
        <p className="mt-2 text-[14px] text-muted-foreground max-w-sm">{errorMsg}</p>
        <button
          onClick={() => navigate({ to: "/auth", replace: true })}
          className="mt-5 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
        >
          Return to Sign in
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 text-center">
      <div className="grid size-16 place-items-center rounded-2xl bg-primary-soft text-primary shadow-sm">
        <Loader2 className="size-8 animate-spin" />
      </div>
      <h2 className="mt-5 text-[20px] font-bold text-foreground">Completing authentication...</h2>
      <p className="mt-2 text-[13.5px] text-muted-foreground max-w-xs">
        Redirecting you to your revision dashboard.
      </p>
    </div>
  );
}
