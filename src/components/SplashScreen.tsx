import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useAppState } from "@/lib/app-state";
import splashAsset from "@/assets/splash.jpg";

export function SplashScreen() {
  const navigate = useNavigate();
  const { program, semester } = useAppState();
  const handledRef = useRef(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let active = true;
    const startTime = Date.now();

    // Detect if this is an incoming OAuth callback landing on root /
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const rawHash = window.location.hash.replace(/^#/, "");
    const hashParams = new URLSearchParams(rawHash);
    const accessToken = hashParams.get("access_token");
    const refreshToken = hashParams.get("refresh_token");
    const isOAuthReturn = Boolean(code || accessToken || rawHash.length > 1);

    // Min splash display: 0ms for OAuth returns (instant), 550ms for normal launch
    const MIN_SPLASH_MS = isOAuthReturn ? 0 : 550;

    const smoothNavigate = (target: string) => {
      if (handledRef.current || !active) return;
      handledRef.current = true;

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_SPLASH_MS - elapsed);

      setTimeout(() => {
        if (!active) return;
        setFading(true);
        setTimeout(() => {
          if (!active) return;
          navigate({ to: target as any, replace: true });
        }, 120);
      }, remaining);
    };

    const completeRedirect = async (userId: string) => {
      // Clean URL params cleanly
      try {
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch {
        /* ignore */
      }

      // Fast check: look at local state & localStorage first
      let activeProg = program;
      let activeSem = semester;

      try {
        const raw = localStorage.getItem("revision.state.v2");
        if (raw) {
          const state = JSON.parse(raw);
          if (state.program) activeProg = state.program;
          if (state.semester) activeSem = state.semester;
        }
      } catch {
        /* ignore */
      }

      // If this screen was opened explicitly as a popup from another window, notify opener and close popup
      const isPopup =
        window.name === "revision_google_auth" ||
        window.location.search.includes("popup=1");

      const deliver = (target: string) => {
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
        smoothNavigate(target);
      };

      // If program & semester are already known, navigate immediately with ZERO wait!
      if (activeProg && activeSem) {
        deliver("/dashboard");
        return;
      }

      // Quick profile check with 450ms race timeout
      try {
        const { data: userProfile } = await Promise.race([
          supabase
            .from("profiles")
            .select("program_id, semester")
            .eq("id", userId)
            .maybeSingle(),
          new Promise<{ data: null }>((resolve) => setTimeout(() => resolve({ data: null }), 450)),
        ]);

        if (userProfile?.program_id) activeProg = userProfile.program_id;
        if (userProfile?.semester) activeSem = userProfile.semester;

        if (activeProg || activeSem) {
          try {
            const raw = localStorage.getItem("revision.state.v2");
            const state = raw ? JSON.parse(raw) : {};
            if (activeProg) state.program = activeProg;
            if (activeSem) state.semester = activeSem;
            localStorage.setItem("revision.state.v2", JSON.stringify(state));
          } catch {
            /* ignore */
          }
        }
      } catch {
        /* fallback */
      }

      const target =
        activeProg && activeSem
          ? "/dashboard"
          : activeProg
            ? "/semester-selection"
            : "/program-selection";

      deliver(target);
    };

    // 1. If authorization code is present (PKCE), explicitly exchange it immediately!
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
      } else if (!isOAuthReturn && active) {
        // No session found on regular launch -> smoothly take user to /auth
        smoothNavigate("/auth");
      }
    });

    // 4. Listen to Supabase's automatic URL session extraction & auth changes
    const { data: authSub } = supabase.auth.onAuthStateChange((event, s) => {
      if ((event === "SIGNED_IN" || event === "INITIAL_SESSION") && s?.user && active) {
        void completeRedirect(s.user.id);
      }
    });

    // 5. Fallback timer: 4s for OAuth network exchange, 1.2s safety for regular visits
    const maxWait = isOAuthReturn ? 4000 : 1200;
    const safetyTimer = setTimeout(async () => {
      if (handledRef.current || !active) return;
      try {
        const { data } = await supabase.auth.getSession();
        const sessionUser = data?.session?.user;
        if (sessionUser) {
          void completeRedirect(sessionUser.id);
        } else {
          smoothNavigate("/auth");
        }
      } catch {
        smoothNavigate("/auth");
      }
    }, maxWait);

    return () => {
      active = false;
      clearTimeout(safetyTimer);
      authSub.subscription.unsubscribe();
    };
  }, [navigate, program, semester]);

  return (
    <main
      aria-label="REVISION splash screen"
      className={`relative min-h-dvh w-full overflow-hidden bg-[#FAFEFE] transition-opacity duration-150 ease-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
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
