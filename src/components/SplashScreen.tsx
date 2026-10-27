import { useEffect, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useAppState } from "@/lib/app-state";
import splashAsset from "@/assets/splash.jpg";

const SPLASH_DURATION_MS = 2400;

export function SplashScreen() {
  const navigate = useNavigate();
  const { program, semester } = useAppState();

  const handledRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let active = true;

    // Detect if this is an incoming OAuth callback landing on root /
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const rawHash = window.location.hash.replace(/^#/, "");
    const hashParams = new URLSearchParams(rawHash);
    const accessToken = hashParams.get("access_token");
    const refreshToken = hashParams.get("refresh_token");
    const isOAuthReturn = Boolean(code || accessToken || rawHash.length > 1);

    const completeRedirect = async (userId: string) => {
      if (handledRef.current || !active) return;
      handledRef.current = true;

      // Clean URL params cleanly
      try {
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch {
        /* ignore */
      }

      let activeProg = program;
      let activeSem = semester;

      try {
        const { data: userProfile } = await supabase
          .from("profiles")
          .select("program_id, semester")
          .eq("id", userId)
          .maybeSingle();

        if (userProfile?.program_id) activeProg = userProfile.program_id;
        if (userProfile?.semester) activeSem = userProfile.semester;
      } catch {
        /* fallback */
      }

      // Direct local storage persistence of program and semester before navigation
      try {
        const raw = localStorage.getItem("revision.state.v2");
        const state = raw ? JSON.parse(raw) : {};
        if (activeProg) state.program = activeProg;
        if (activeSem) state.semester = activeSem;
        localStorage.setItem("revision.state.v2", JSON.stringify(state));
      } catch {
        /* ignore */
      }

      const target =
        activeProg && activeSem
          ? "/dashboard"
          : activeProg
            ? "/semester-selection"
            : "/program-selection";

      // If this screen was opened explicitly as a popup from another window, notify opener and close popup
      const isPopup =
        window.name === "revision_google_auth" ||
        window.location.search.includes("popup=1");

      if (isPopup && window.opener && window.opener !== window) {
        try {
          window.opener.postMessage({ type: "REVISION_AUTH_SUCCESS", target }, "*");
          window.opener.location.href = target;
        } catch {
          /* ignore cross-origin */
        }
        try {
          window.close();
        } catch {
          /* ignore */
        }
      }

      navigate({ to: target as any, replace: true });
    };

    // 1. If authorization code is present (PKCE), explicitly exchange it!
    if (code) {
      supabase.auth
        .exchangeCodeForSession(code)
        .then(({ data }) => {
          if (data?.session?.user && active) {
            void completeRedirect(data.session.user.id);
          }
        })
        .catch(() => {});
    }

    // 2. If access_token is present in hash (Implicit flow)
    if (accessToken && refreshToken) {
      supabase.auth
        .setSession({ access_token: accessToken, refresh_token: refreshToken })
        .then(({ data }) => {
          if (data?.session?.user && active) {
            void completeRedirect(data.session.user.id);
          }
        })
        .catch(() => {});
    }

    // 3. Immediately check if a session exists
    void supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user && active) {
        void completeRedirect(data.session.user.id);
      }
    });

    // 4. Unconditionally listen to Supabase's automatic URL session extraction & auth changes
    const { data: authSub } = supabase.auth.onAuthStateChange((event, s) => {
      if ((event === "SIGNED_IN" || event === "INITIAL_SESSION") && s?.user && active) {
        void completeRedirect(s.user.id);
      }
    });

    // 5. Fallback timer: for OAuth return give 4.5s for network, otherwise 1.8s for splash experience
    const waitDuration = isOAuthReturn ? 4500 : 1800;
    const timer = setTimeout(async () => {
      if (handledRef.current || !active) return;

      try {
        const { data } = await supabase.auth.getSession();
        const sessionUser = data?.session?.user;

        if (sessionUser) {
          void completeRedirect(sessionUser.id);
          return;
        }

        // Guest returning user with chosen program & semester
        if (program && semester) {
          navigate({ to: "/dashboard", replace: true });
          return;
        }

        // New student / visitor
        navigate({ to: "/auth", replace: true });
      } catch (err) {
        console.warn("[SplashScreen] Session check error:", err);
        navigate({ to: "/auth", replace: true });
      }
    }, waitDuration);

    return () => {
      active = false;
      clearTimeout(timer);
      authSub.subscription.unsubscribe();
    };
  }, [navigate, program, semester]);

  return (
    <main
      aria-label="REVISION splash screen"
      className="relative min-h-dvh w-full overflow-hidden bg-[#FAFEFE]"
    >
      <img
        src={splashAsset}
        alt="REVISION — Learn. Revise. Succeed. Engineering, Science & Commerce Syllabus. Anytime. Anywhere."
        className="absolute inset-0 h-full w-full object-contain"
        draggable={false}
      />
    </main>
  );
}
