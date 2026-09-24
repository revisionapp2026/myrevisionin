import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { LEGAL_UPDATED, privacySections } from "@/lib/legal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — REVISION study app" },
      {
        name: "description",
        content:
          "How REVISION collects, uses and protects B.Com and BBA students' account, study and payment information.",
      },
      { property: "og:title", content: "Privacy Policy — REVISION study app" },
      {
        property: "og:description",
        content: "What data REVISION collects, how it is used, and your rights over it.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what REVISION collects when you revise, how we use it, and the control you have over it."
      updated={LEGAL_UPDATED}
      sections={privacySections}
    />
  ),
});
