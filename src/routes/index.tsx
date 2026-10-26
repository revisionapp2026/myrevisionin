import { createFileRoute } from "@tanstack/react-router";
import { SplashScreen } from "@/components/SplashScreen";

export const Route = createFileRoute("/")({
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

