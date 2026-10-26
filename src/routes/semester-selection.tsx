import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronRight, GraduationCap } from "lucide-react";
import { bscStreams, engineeringBranches, semestersForProgram } from "@/lib/mock-data";
import { useAppState } from "@/lib/app-state";
import { StepIndicator } from "@/components/ui-bits";
import { cn } from "@/lib/utils";

import { useEffect } from "react";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/semester-selection")({
  head: () => ({
    meta: [
      { title: "Select Your Semester — REVISION" },
      {
        name: "description",
        content: "Pick your current semester and start revising.",
      },
      { property: "og:title", content: "Select Your Semester — REVISION" },
      { property: "og:description", content: "Pick your current semester to begin." },
    ],
  }),
  component: SemesterSelection,
});

function SemesterSelection() {
  const navigate = useNavigate();
  const { program, branch, setBranch, semester, setSemester, ready } = useAppState();
  const { user, saveProfile } = useAuth();

  useEffect(() => {
    if (ready && !program) {
      navigate({ to: "/program-selection", replace: true });
    }
  }, [ready, program, navigate]);

  const isEngineering = program === "btech";
  const isBsc = program === "bsc";
  const semesterList = semestersForProgram(program);

  const choose = (n: number) => {
    setSemester(n);
    if (user && saveProfile) {
      void saveProfile({
        program_id: program ?? undefined,
        semester: n,
      }).catch(() => {});
    }
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
        {isEngineering && (
          <div className="surface-card mb-3.5 p-3.5">
            <label className="block text-xs font-bold text-muted-foreground mb-1.5">
              Engineering Branch
            </label>
            <select
              aria-label="Engineering Branch"
              value={branch ?? "civil"}
              onChange={(e) => setBranch(e.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-background px-3 text-[13.5px] font-semibold outline-none focus:border-primary"
            >
              {engineeringBranches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {isBsc && (
          <div className="surface-card mb-3.5 p-3.5">
            <label className="block text-xs font-bold text-muted-foreground mb-1.5">
              B.Sc Stream / Specialization
            </label>
            <select
              aria-label="B.Sc Stream"
              value={branch ?? "cs"}
              onChange={(e) => setBranch(e.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-background px-3 text-[13.5px] font-semibold outline-none focus:border-primary"
            >
              {bscStreams.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="grid gap-2.5">
          {semesterList.map((n) => {
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
