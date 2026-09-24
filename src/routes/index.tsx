import { createFileRoute } from "@tanstack/react-router";
import { SplashScreen } from "@/components/SplashScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "REVISION — Learn. Revise. Succeed." },
      {
        name: "description",
        content:
          "REVISION is a smart revision platform for B.Com and BBA students. Your B.Com, BBA syllabus — anytime, anywhere.",
      },
      { property: "og:title", content: "REVISION — Learn. Revise. Succeed." },
      {
        property: "og:description",
        content:
          "A smart revision platform for B.Com and BBA students. Your B.Com, BBA syllabus — anytime, anywhere.",
      },
    ],
  }),
  component: SplashScreen,
});
