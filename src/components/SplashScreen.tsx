import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useAppState } from "@/lib/app-state";
import splashAsset from "@/assets/splash.jpg";

const SPLASH_DURATION_MS = 2400;

export function SplashScreen() {
  const navigate = useNavigate();
  const { program, semester } = useAppState();

  useEffect(() => {
    let active = true;
    const timer = setTimeout(async () => {
      if (!active) return;
      try {
        const { data } = await supabase.auth.getSession();
        const sessionUser = data?.session?.user;

        if (sessionUser) {
          // Check database profile for saved selections
          const { data: userProfile } = await supabase
            .from("profiles")
            .select("program_id, semester")
            .eq("id", sessionUser.id)
            .maybeSingle();

          const activeProg = userProfile?.program_id || program;
          const activeSem = userProfile?.semester || semester;

          if (activeProg && activeSem) {
            navigate({ to: "/dashboard", replace: true });
            return;
          } else if (activeProg) {
            navigate({ to: "/semester-selection", replace: true });
            return;
          } else {
            navigate({ to: "/program-selection", replace: true });
            return;
          }
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
    }, SPLASH_DURATION_MS);

    return () => {
      active = false;
      clearTimeout(timer);
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
