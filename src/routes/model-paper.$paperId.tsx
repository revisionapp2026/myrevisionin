import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, Crown, FileText, Loader2, RefreshCw } from "lucide-react";
import { getSubject } from "@/lib/mock-data";
import { paperQuery } from "@/lib/content";
import { useEntitlements } from "@/lib/entitlements";
import { EmptyState, Screen, ScreenHeader } from "@/components/app-chrome";
import { cn } from "@/lib/utils";
import { VerifyPaymentModal } from "@/components/verify-payment-modal";
import { FormattedAnswer } from "@/components/formatted-answer";
import { RichMathText } from "@/components/math-formula";

export const Route = createFileRoute("/model-paper/$paperId")({
  head: () => ({
    meta: [
      { title: "Model Paper — REVISION" },
      { name: "description", content: "Exam questions with complete solved answers." },
      { property: "og:title", content: "Model Paper — REVISION" },
      { property: "og:description", content: "Exam questions with complete solved answers." },
    ],
  }),
  component: PaperScreen,
});

function PaperScreen() {
  const { paperId } = Route.useParams();
  const [open, setOpen] = useState<number | null>(1);
  const [verifyOpen, setVerifyOpen] = useState(false);
  const { isPremium } = useEntitlements();
  const { data, isLoading } = useQuery(paperQuery(paperId));

  if (isLoading) {
    return (
      <>
        <ScreenHeader title="Model Paper" />
        <Screen>
          <div className="mt-10 flex justify-center text-muted-foreground">
            <Loader2 className="size-6 animate-spin" />
          </div>
        </Screen>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <ScreenHeader title="Model Paper" />
        <Screen>
          <EmptyState
            icon={FileText}
            title="Paper not found"
            description="This paper is not available right now."
          />
        </Screen>
      </>
    );
  }

  const { paper, questions } = data;
  const subject = getSubject(paper.subject_id);

  if (!isPremium) {
    return (
      <>
        <ScreenHeader title={paper.title} subtitle={subject?.name ?? ""} />
        <Screen>
          <EmptyState
            icon={Crown}
            title="Premium paper"
            description="Unlock all model papers, previous year papers and solved answers."
            action={
              <div className="flex flex-col items-center gap-3">
                <Link
                  to="/payment"
                  className="press rounded-full bg-accent px-6 py-3 text-[14px] font-bold text-accent-foreground"
                >
                  Unlock Premium
                </Link>
                <button
                  type="button"
                  onClick={() => setVerifyOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-accent underline hover:text-accent/80"
                >
                  <RefreshCw className="size-3.5" /> Already paid? Restore / Verify Payment
                </button>
              </div>
            }
          />
        </Screen>
        <VerifyPaymentModal
          open={verifyOpen}
          onClose={() => setVerifyOpen(false)}
          onSuccess={() => window.location.reload()}
        />
      </>
    );
  }

  return (
    <>
      <ScreenHeader title={paper.title} subtitle={subject?.name ?? ""} />
      <Screen>
        <div className="grid gap-2.5">
          {questions.map((q) => {
            const expanded = open === q.question_no;
            return (
              <div key={q.id} className="surface-card min-w-0 w-full max-w-full overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : q.question_no)}
                  aria-expanded={expanded}
                  className="press flex w-full items-start gap-3 px-3.5 py-3.5 text-left min-w-0"
                >
                  <span className="min-w-0 flex-1 text-[15px] font-bold leading-snug break-words">
                    <span className="inline-block mr-1">Q{q.question_no}.</span>
                    <RichMathText text={q.question} />
                    {q.prompt && (
                      <span className="mt-1 block font-bold">
                        <RichMathText text={q.prompt} />
                      </span>
                    )}
                    {q.marks ? (
                      <span className="mt-1 block text-[12px] font-semibold text-muted-foreground">
                        {q.marks} Marks
                      </span>
                    ) : null}
                  </span>
                  <ChevronDown
                    className={cn(
                      "mt-0.5 size-[18px] shrink-0 text-muted-foreground transition-transform",
                      expanded && "rotate-180",
                    )}
                  />
                </button>
                {expanded && (
                  <div className="border-t border-border px-3.5 pb-4 pt-3 min-w-0 w-full max-w-full overflow-hidden">
                    <div className="flex items-center justify-between border-b border-border/60 pb-1.5 mb-2 min-w-0">
                      <span className="flex items-center gap-1.5 text-[12px] font-bold text-accent uppercase tracking-wider truncate">
                        Complete Solved Solution
                      </span>
                      {q.marks ? (
                        <span className="rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-bold text-accent shrink-0">
                          {q.marks} Marks
                        </span>
                      ) : null}
                    </div>
                    <FormattedAnswer lines={q.answer_lines} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Screen>
    </>
  );
}
