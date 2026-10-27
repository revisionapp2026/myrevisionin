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
    const code = search.code || urlParams.get("code");
    const rawHash = window.location.hash.replace(/^#/, "");
    const hashParams = new URLSearchParams(rawHash);
    const accessToken = hashParams.get("access_token");
    const refreshToken = hashParams.get("refresh_token");
    const err =
      search.error_description ||
      search.error ||
      urlParams.get("error_description") ||
      urlParams.get("error") ||
      hashParams.get("error_description") ||
      hashParams.get("error");

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

      // Direct local storage persistence of program and semester before navigation
      try {
        const raw = localStorage.getItem("revision.state.v2");
        const state = raw ? JSON.parse(raw) : {};
        if (targetProg) state.program = targetProg;
        if (targetSem) state.semester = targetSem;
        localStorage.setItem("revision.state.v2", JSON.stringify(state));
      } catch {
        /* ignore */
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

    // 1. If authorization code is present (PKCE), explicitly exchange it!
    if (code) {
      supabase.auth
        .exchangeCodeForSession(code)
        .then(({ data }) => {
          if (data?.session?.user) {
            void completeRedirect(data.session.user.id);
          }
        })
        .catch(() => {});
    }

    // 2. If access_token and refresh_token are present in hash (Implicit flow)
    if (accessToken && refreshToken) {
      supabase.auth
        .setSession({ access_token: accessToken, refresh_token: refreshToken })
        .then(({ data }) => {
          if (data?.session?.user) {
            void completeRedirect(data.session.user.id);
          }
        })
        .catch(() => {});
    }

    // 3. Check existing session immediately (or if Supabase already resolved it)
    void supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user) {
        void completeRedirect(data.session.user.id);
      }
    });

    // 4. Listen to Supabase's automatic URL session detection
    const { data: authSub } = supabase.auth.onAuthStateChange((event, session) => {
      if ((event === "SIGNED_IN" || event === "INITIAL_SESSION") && session?.user) {
        void completeRedirect(session.user.id);
      }
    });

    // 5. Safety timeout: never leave the user spinning forever
    const timer = setTimeout(async () => {
      if (handled) return;
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        void completeRedirect(data.session.user.id);
      } else {
        setErrorMsg("Sign-in session could not be established. Please tap below to try again.");
      }
    }, 5000);

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
