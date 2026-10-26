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
  head: () => ({
    meta: [{ title: "Authenticating — REVISION" }],
  }),
  component: AuthCallbackScreen,
});

function AuthCallbackScreen() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { program, semester } = useAppState();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let handled = false;

    const urlParams = new URLSearchParams(window.location.search);
    const err =
      search.error_description ||
      search.error ||
      urlParams.get("error_description") ||
      urlParams.get("error");

    if (err) {
      setErrorMsg(decodeURIComponent(err));
      return;
    }

    const completeRedirect = async (userId: string) => {
      if (handled) return;
      handled = true;

      // Clean URL parameters from browser address bar
      try {
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch {
        /* ignore */
      }

      let targetProg = program;
      let targetSem = semester;

      try {
        const { data: dbProfile } = await supabase
          .from("profiles")
          .select("program_id, semester")
          .eq("id", userId)
          .maybeSingle();

        if (dbProfile?.program_id) targetProg = dbProfile.program_id;
        if (dbProfile?.semester) targetSem = dbProfile.semester;
      } catch {
        /* proceed with fallback target */
      }

      const target =
        targetProg && targetSem
          ? "/dashboard"
          : targetProg
            ? "/semester-selection"
            : "/program-selection";

      // If opened in a popup window, notify the opener and close this popup!
      if (window.opener && window.opener !== window) {
        try {
          window.opener.postMessage({ type: "REVISION_AUTH_SUCCESS", target }, "*");
          window.opener.location.href = target;
        } catch {
          /* ignore cross-origin */
        }
        try {
          window.close();
          return;
        } catch {
          /* ignore */
        }
      }

      window.location.href = target;
    };

    // 1. Check existing session immediately (or if Supabase already resolved it)
    void supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        void completeRedirect(data.session.user.id);
      }
    });

    // 2. Listen to Supabase's automatic URL session detection
    const { data: authSub } = supabase.auth.onAuthStateChange((event, session) => {
      if ((event === "SIGNED_IN" || event === "INITIAL_SESSION") && session?.user) {
        void completeRedirect(session.user.id);
      }
    });

    // 3. Safety timeout: never leave the user spinning forever
    const timer = setTimeout(async () => {
      if (handled) return;
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        void completeRedirect(data.session.user.id);
      } else {
        setErrorMsg("Sign-in session could not be established. Please tap below to try again.");
      }
    }, 4500);

    return () => {
      clearTimeout(timer);
      authSub.subscription.unsubscribe();
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
      <h2 className="mt-5 text-[20px] font-bold text-foreground">Completing sign in...</h2>
      <p className="mt-2 text-[13.5px] text-muted-foreground max-w-xs">
        Authenticating with Google and syncing your revision dashboard.
      </p>
    </div>
  );
}
