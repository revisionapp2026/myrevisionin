import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BarChart3, GraduationCap } from "lucide-react";
import logo from "@/assets/revision-logo.png";
import { programs } from "@/lib/mock-data";
import { useAppState } from "@/lib/app-state";
import { StepIndicator } from "@/components/ui-bits";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/program-selection")({
  head: () => ({
    meta: [
      { title: "Select Your Program — REVISION" },
      {
        name: "description",
        content: "Choose BBA or B.Com to start last minute revision with REVISION.",
      },
      { property: "og:title", content: "Select Your Program — REVISION" },
      { property: "og:description", content: "Choose BBA or B.Com to start revising." },
    ],
  }),
  component: ProgramSelection,
});

const icons = { bba: GraduationCap, bcom: BarChart3 } as const;

function ProgramSelection() {
  const navigate = useNavigate();
  const { program, setProgram } = useAppState();

  const choose = (id: string) => {
    setProgram(id);
    navigate({ to: "/semester-selection" });
  };

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <header className="brand-header px-4 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))] text-center">
        <div className="mx-auto flex max-w-xl flex-col items-center">
          <span className="flex items-center gap-2">
            <img src={logo} alt="REVISION" className="h-12 w-auto object-contain" />
          </span>
          <h1 className="mt-5 text-[26px] font-extrabold leading-tight text-white">
            Select Your Program
          </h1>
          <p className="mx-auto mt-2 max-w-[19rem] text-[14px] leading-relaxed text-white/80">
            Choose your program to get started with revision
          </p>
        </div>
      </header>

      <main className="screen-enter mx-auto -mt-5 w-full max-w-xl flex-1 px-4">
        <div className="grid gap-3.5">
          {programs.map((p) => {
            const Icon = icons[p.id as keyof typeof icons];
            const selected = program === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => choose(p.id)}
                aria-pressed={selected}
                className={cn(
                  "surface-card press flex items-center gap-4 px-4 py-4 text-left hover:shadow-lift",
                  selected && "border-primary bg-primary-soft",
                )}
              >
                <span
                  className={cn(
                    "grid size-12 shrink-0 place-items-center rounded-xl",
                    selected
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary-soft text-primary",
                  )}
                >
                  <Icon className="size-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[17px] font-bold">{p.code}</span>
                  <span className="block text-[13px] text-muted-foreground">{p.description}</span>
                </span>
              </button>
            );
          })}
        </div>
      </main>

      <footer className="px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8">
        <StepIndicator step={1} />
      </footer>
    </div>
  );
}
