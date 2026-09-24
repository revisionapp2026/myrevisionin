import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { LEGAL_UPDATED, refundSections } from "@/lib/legal";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — REVISION" },
      {
        name: "description",
        content:
          "When REVISION premium purchases can be refunded, how to request a refund, and how cancellation works.",
      },
      { property: "og:title", content: "Refund & Cancellation Policy — REVISION" },
      {
        property: "og:description",
        content:
          "Refund eligibility, request steps, processing time and cancellation for premium plans.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage
      title="Refund & Cancellation Policy"
      intro="What happens if a premium payment goes wrong, and how to ask for a refund."
      updated={LEGAL_UPDATED}
      sections={refundSections}
    />
  ),
});
