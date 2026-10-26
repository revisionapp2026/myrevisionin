import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FileText, Loader2, Lock, RefreshCw, Trophy } from "lucide-react";
import { getSubject } from "@/lib/mock-data";
import { subjectPapersQuery } from "@/lib/content";
import { useEntitlements } from "@/lib/entitlements";
import { EmptyState, Screen, ScreenHeader } from "@/components/app-chrome";
import { VerifyPaymentModal } from "@/components/verify-payment-modal";

export const Route = createFileRoute("/model-papers/$subjectId")({
  head: () => ({
    meta: [
      { title: "Model Papers — REVISION" },
      {
        name: "description",
        content: "Model papers and the previous year question paper with solved answers.",
      },
      { property: "og:title", content: "Model Papers — REVISION" },
      { property: "og:description", content: "Model papers with solved answers." },
    ],
  }),
  component: ModelPapersScreen,
});

function ModelPapersScreen() {
  const { subjectId } = Route.useParams();
  const subject = getSubject(subjectId);
  const [verifyOpen, setVerifyOpen] = useState(false);
  const { isPremium } = useEntitlements();
  const { data: papers = [], isLoading } = useQuery({
    ...subjectPapersQuery(subjectId),
    enabled: Boolean(subject),
  });

  if (!subject) {
    return (
      <>
        <ScreenHeader title="Model Papers" />
        <Screen>
          <EmptyState
            icon={FileText}
            title="Not available"
            description="Model papers for this subject could not be found."
          />
        </Screen>
      </>
    );
  }

  return (
    <>
      <ScreenHeader title={subject.name} subtitle="Quick Exam Revision" />
      <Screen>
        {!isPremium && (
          <div className="surface-card mb-3 border border-premium/30 bg-premium/10 p-3.5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-premium/20 text-premium">
                  <Lock className="size-4" />
                </span>
                <div>
                  <p className="text-[13.5px] font-bold text-foreground">All papers are locked</p>
                  <p className="text-[12px] text-muted-foreground">
                    Get Premium to unlock all solved model papers & questions
                  </p>
                </div>
              </div>
              <Link
                to="/payment"
                className="press shrink-0 rounded-lg bg-accent px-3 py-1.5 text-[12px] font-bold text-accent-foreground"
              >
                Unlock
              </Link>
            </div>
            <div className="mt-2.5 border-t border-premium/20 pt-2 text-center">
              <button
                type="button"
                onClick={() => setVerifyOpen(true)}
                className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-accent underline hover:text-accent/80"
              >
                <RefreshCw className="size-3" /> Already paid? Restore / Verify Payment
              </button>
            </div>
          </div>
        )}
        <VerifyPaymentModal
          open={verifyOpen}
          onClose={() => setVerifyOpen(false)}
          onSuccess={() => window.location.reload()}
        />
        {isLoading ? (
          <div className="mt-10 flex justify-center text-muted-foreground">
            <Loader2 className="size-6 animate-spin" />
          </div>
        ) : papers.length === 0 ? (
          <EmptyState
            icon={FileText}
            title="Papers coming soon"
            description={`Solved model papers for ${subject.name} are being added. Check back shortly.`}
          />
        ) : (
          <div className="grid gap-2.5">
            {papers.map((p) => {
              const locked = !isPremium;
              if (locked) {
                return (
                  <Link
                    key={p.id}
                    to="/payment"
                    className="surface-card press flex items-center gap-3 px-3.5 py-3.5 hover:shadow-lift"
                  >
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-[10px] ${
                        p.paper_type === "previous_year"
                          ? "bg-accent-soft text-accent"
                          : "bg-primary-soft text-primary"
                      }`}
                    >
                      <FileText className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-semibold leading-snug">
                        {p.title}
                      </span>
                      <span className="block text-[13px] text-muted-foreground">{p.subtitle}</span>
                    </span>
                    <span className="flex shrink-0 items-center gap-1 rounded-lg bg-premium/15 px-2.5 py-1.5 text-[12px] font-bold text-premium">
                      <Lock className="size-[13px]" />
                      Premium
                    </span>
                  </Link>
                );
              }
              return (
                <Link
                  key={p.id}
                  to="/model-paper/$paperId"
                  params={{ paperId: p.id }}
                  className="surface-card press flex items-center gap-3 px-3.5 py-3.5 hover:shadow-lift"
                >
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-[10px] ${
                      p.paper_type === "previous_year"
                        ? "bg-accent-soft text-accent"
                        : "bg-primary-soft text-primary"
                    }`}
                  >
                    <FileText className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-semibold leading-snug">{p.title}</span>
                    <span className="block text-[13px] text-muted-foreground">{p.subtitle}</span>
                  </span>
                  <span className="text-muted-foreground" aria-hidden="true">
                    ›
                  </span>
                </Link>
              );
            })}
          </div>
        )}

        <Link
          to="/ai-help"
          search={{
            topic: `Important exam questions from ${subject?.name ?? "this subject"}`,
            mode: "quiz",
            subjectId,
          }}
          className="press mt-5 flex items-center gap-3 rounded-xl border border-border bg-accent-soft px-4 py-4"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-card text-premium">
            <Trophy className="size-[22px]" />
          </span>
          <p className="text-[15px] font-bold leading-snug text-brand-text">
            Practice More
            <br />
            Score Higher
          </p>
          <span className="ml-auto text-[12.5px] font-bold text-primary">Practice quiz ›</span>
        </Link>
      </Screen>
    </>
  );
}
