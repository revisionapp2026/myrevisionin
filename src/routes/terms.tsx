import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { LEGAL_UPDATED, termsSections } from "@/lib/legal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — REVISION study app" },
      {
        name: "description",
        content:
          "The rules for using REVISION: accounts, acceptable use, study material rights, premium plans and liability.",
      },
      { property: "og:title", content: "Terms of Use — REVISION study app" },
      {
        property: "og:description",
        content: "Accounts, acceptable use, content rights and premium plan terms for REVISION.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms of Use"
      intro="These terms cover your account, how the study material may be used, and what premium includes."
      updated={LEGAL_UPDATED}
      sections={termsSections}
    />
  ),
});
