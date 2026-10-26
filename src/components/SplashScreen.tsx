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
    const hasCode = Boolean(urlParams.get("code"));
    const hasHash = Boolean(
      window.location.hash &&
        (window.location.hash.includes("access_token") || window.location.hash.length > 1),
    );
    const isOAuthReturn = hasCode || hasHash;

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

      const target =
        activeProg && activeSem
          ? "/dashboard"
          : activeProg
            ? "/semester-selection"
            : "/program-selection";

      // If this screen was opened inside a popup from another window, notify opener and close popup
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

      navigate({ to: target as any, replace: true });
    };

    // 1. Immediately check if a session exists
    void supabase.auth.getSession().then(({ data }) => {
      if (data?.session?.user && active) {
        void completeRedirect(data.session.user.id);
      }
    });

    // 2. Unconditionally listen to Supabase's automatic URL session extraction & auth changes
    const { data: authSub } = supabase.auth.onAuthStateChange((event, s) => {
      if ((event === "SIGNED_IN" || event === "INITIAL_SESSION") && s?.user && active) {
        void completeRedirect(s.user.id);
      }
    });

    // 3. Fallback timer: for OAuth return give 4s for network, otherwise 1.8s for splash experience
    const waitDuration = isOAuthReturn ? 4000 : 1800;
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
        alt="REVISION — Learn. Revise. Succeed. Your B.Com, BBA Syllabus. Anytime. Anywhere."
        className="absolute inset-0 h-full w-full object-contain"
        draggable={false}
      />
    </main>
  );
}
