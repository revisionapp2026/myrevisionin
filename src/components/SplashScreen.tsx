import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import splashAsset from "@/assets/splash.jpg";

const SPLASH_DURATION_MS = 3000;

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate({ to: "/auth", replace: true });
    }, SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, [navigate]);

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
