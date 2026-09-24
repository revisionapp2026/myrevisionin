import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronRight, GraduationCap } from "lucide-react";
import { semesters } from "@/lib/mock-data";
import { useAppState } from "@/lib/app-state";
import { StepIndicator } from "@/components/ui-bits";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/semester-selection")({
  head: () => ({
    meta: [
      { title: "Select Your Semester — REVISION" },
      {
        name: "description",
        content: "Pick your current semester from 1 to 6 and start revising.",
      },
      { property: "og:title", content: "Select Your Semester — REVISION" },
      { property: "og:description", content: "Pick your current semester, 1 to 6." },
    ],
  }),
  component: SemesterSelection,
});

function SemesterSelection() {
  const navigate = useNavigate();
  const { semester, setSemester } = useAppState();

  const choose = (n: number) => {
    setSemester(n);
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <header className="brand-header px-4 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))]">
        <div className="mx-auto max-w-xl">
          <button
            type="button"
            onClick={() => navigate({ to: "/program-selection" })}
            aria-label="Go back"
            className="press grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15"
          >
            <ChevronRight className="size-[22px] rotate-180" />
          </button>
          <h1 className="mt-3 text-center text-[26px] font-extrabold leading-tight text-white">
            Select Your Semester
          </h1>
          <p className="mt-2 text-center text-[14px] text-white/80">Choose your current semester</p>
        </div>
      </header>

      <main className="screen-enter mx-auto -mt-5 w-full max-w-xl flex-1 px-4">
        <div className="grid gap-2.5">
          {semesters.map((n) => {
            const selected = semester === n;
            return (
              <button
                key={n}
                type="button"
                onClick={() => choose(n)}
                aria-pressed={selected}
                className={cn(
                  "surface-card press flex items-center gap-3 px-3.5 py-3.5 text-left hover:shadow-lift",
                  selected && "border-primary bg-primary-soft",
                )}
              >
                <span
                  className={cn(
                    "grid size-10 shrink-0 place-items-center rounded-[10px]",
                    selected
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary-soft text-primary",
                  )}
                >
                  <GraduationCap className="size-5" />
                </span>
                <span className="flex-1 text-[15px] font-semibold">Semester {n}</span>
                <ChevronRight className="size-[18px] text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </main>

      <footer className="px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-7">
        <StepIndicator step={2} />
      </footer>
    </div>
  );
}
