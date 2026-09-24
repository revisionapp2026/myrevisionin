import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, Crown, FileText, Loader2 } from "lucide-react";
import { getSubject } from "@/lib/mock-data";
import { paperQuery } from "@/lib/content";
import { useEntitlements } from "@/lib/entitlements";
import { EmptyState, Screen, ScreenHeader } from "@/components/app-chrome";
import { cn } from "@/lib/utils";

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

  if (paper.is_paid && !isPremium) {
    return (
      <>
        <ScreenHeader title={paper.title} subtitle={subject?.name ?? ""} />
        <Screen>
          <EmptyState
            icon={Crown}
            title="Premium paper"
            description="Unlock all model papers, previous year papers and solved answers."
            action={
              <Link
                to="/payment"
                className="press rounded-full bg-accent px-6 py-3 text-[14px] font-bold text-accent-foreground"
              >
                Unlock Premium
              </Link>
            }
          />
        </Screen>
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
              <div key={q.id} className="surface-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : q.question_no)}
                  aria-expanded={expanded}
                  className="press flex w-full items-start gap-3 px-3.5 py-3.5 text-left"
                >
                  <span className="min-w-0 flex-1 text-[15px] font-bold leading-snug">
                    Q{q.question_no}. {q.question}
                    {q.prompt && <span className="block font-bold">{q.prompt}</span>}
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
                  <div className="border-t border-border px-3.5 pb-4 pt-3">
                    <p className="text-[13px] font-bold text-accent">Answer</p>
                    <div className="mt-1.5 space-y-1.5">
                      {q.answer_lines.filter((l) => l.trim() && l.trim().toUpperCase() !== "OR")
                        .length === 0 ? (
                        <p className="text-[14.5px] text-muted-foreground">
                          Answer is being added.
                        </p>
                      ) : (
                        q.answer_lines
                          .filter((l) => l.trim() && l.trim().toUpperCase() !== "OR")
                          .map((line, i) => (
                            <p
                              key={`${q.id}-${i}`}
                              className="text-justify text-[14.5px] leading-relaxed text-muted-foreground"
                            >
                              {line}
                            </p>
                          ))
                      )}
                    </div>
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
