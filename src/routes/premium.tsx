import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { BookOpenCheck, Crown, FileText, Lock, Sparkles, Target } from "lucide-react";
import { programLabel, subjectsFor } from "@/lib/mock-data";
import { papersForSubjectsQuery, pointsCountQuery } from "@/lib/content";
import { useAppState } from "@/lib/app-state";
import { useEntitlements } from "@/lib/entitlements";
import { BottomNav, Screen, ScreenHeader, SubjectGlyph } from "@/components/app-chrome";
import { Button, SectionTitle } from "@/components/ui-bits";

export const Route = createFileRoute("/premium")({
  head: () => ({
    meta: [
      { title: "Premium Dashboard — REVISION" },
      {
        name: "description",
        content:
          "Your unlocked syllabus, solved model papers and revision progress tracker in one place.",
      },
      { property: "og:title", content: "Premium Dashboard — REVISION" },
      {
        property: "og:description",
        content: "Unlocked syllabus, solved papers and a revision progress tracker.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PremiumDashboard,
});

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="surface-card px-3 py-3 text-center">
      <span className="mx-auto grid size-8 place-items-center rounded-full bg-primary-soft text-primary">
        {icon}
      </span>
      <p className="mt-1.5 text-[17px] font-extrabold leading-tight">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}

function PremiumDashboard() {
  const { program, semester, studiedUnits, clearProgress } = useAppState();
  const { isPremium, planName } = useEntitlements();
  const subjects = useMemo(() => subjectsFor(program, semester), [program, semester]);
  const subjectIds = useMemo(() => subjects.map((s) => s.id), [subjects]);
  const unitIds = useMemo(() => subjects.flatMap((s) => s.units.map((u) => u.id)), [subjects]);

  const { data: papers = [] } = useQuery({
    ...papersForSubjectsQuery(subjectIds),
    enabled: isPremium && subjectIds.length > 0,
  });
  const { data: counts = {} } = useQuery({
    ...pointsCountQuery(unitIds),
    enabled: isPremium && unitIds.length > 0,
  });

  if (!isPremium) {
    return (
      <>
        <ScreenHeader title="Premium Dashboard" />
        <Screen nav>
          <div className="surface-card px-5 py-8 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-premium/15 text-premium">
              <Lock className="size-7" />
            </span>
            <h2 className="mt-3 text-[17px] font-extrabold">Premium members only</h2>
            <p className="mx-auto mt-1.5 max-w-[17rem] text-[13px] text-muted-foreground">
              Unlock every unit’s revision points, all solved model papers and previous-year papers,
              plus your progress tracker.
            </p>
            <Link to="/payment" className="mt-5 block">
              <Button className="w-full">Unlock Premium</Button>
            </Link>
          </div>
        </Screen>
        <BottomNav />
      </>
    );
  }

  const studied = studiedUnits.filter((id) => unitIds.includes(id));
  const percent = unitIds.length ? Math.round((studied.length / unitIds.length) * 100) : 0;
  const totalPoints = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <>
      <ScreenHeader title="Premium Dashboard" />
      <Screen nav>
        <div className="surface-card flex items-center gap-3 px-4 py-3.5">
          <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-premium/15 text-premium">
            <Crown className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[15px] font-bold">Premium active</span>
            <span className="block text-[13px] text-muted-foreground">
              {programLabel(program)} • Semester {semester ?? 1} fully unlocked
            </span>
          </span>
        </div>

        <SectionTitle
          title="Revision progress"
          action={
            studied.length > 0 ? (
              <button onClick={clearProgress} className="text-[13px] font-semibold text-primary">
                Reset
              </button>
            ) : undefined
          }
        />
        <div className="surface-card px-4 py-4">
          <div className="flex items-end justify-between">
            <p className="text-[13px] text-muted-foreground">
              {studied.length} of {unitIds.length} units revised
            </p>
            <p className="text-[20px] font-extrabold text-primary">{percent}%</p>
          </div>
          <div
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-primary-soft"
          >
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="mt-2 text-[12px] text-muted-foreground">
            A unit counts as revised once you open it.
          </p>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2.5">
          <Stat
            icon={<BookOpenCheck className="size-4" />}
            value={String(subjects.length)}
            label="Subjects"
          />
          <Stat
            icon={<Sparkles className="size-4" />}
            value={String(totalPoints)}
            label="Revision points"
          />
          <Stat
            icon={<FileText className="size-4" />}
            value={String(papers.length)}
            label="Solved papers"
          />
        </div>

        <SectionTitle title="Unlocked syllabus" />
        <div className="grid gap-2.5">
          {subjects.map((s) => {
            const unitsDone = s.units.filter((u) => studiedUnits.includes(u.id)).length;
            const points = s.units.reduce((sum, u) => sum + (counts[u.id] ?? 0), 0);
            return (
              <Link
                key={s.id}
                to="/subject/$subjectId"
                params={{ subjectId: s.id }}
                className="surface-card press flex items-center gap-3 px-3.5 py-3"
              >
                <SubjectGlyph icon={s.icon} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-semibold">{s.name}</span>
                  <span className="block text-[12px] text-muted-foreground">
                    {unitsDone}/{s.units.length} units revised • {points} points
                  </span>
                </span>
                <span className="text-muted-foreground" aria-hidden="true">
                  ›
                </span>
              </Link>
            );
          })}
        </div>

        <SectionTitle title="Solved model papers" />
        <div className="grid gap-2.5">
          {papers.map((p) => {
            const subject = subjects.find((s) => s.id === p.subject_id);
            return (
              <Link
                key={p.id}
                to="/model-paper/$paperId"
                params={{ paperId: p.id }}
                className="surface-card press flex items-center gap-3 px-3.5 py-3"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-accent-soft text-accent">
                  <FileText className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-semibold">{p.title}</span>
                  <span className="block truncate text-[12px] text-muted-foreground">
                    {subject?.name ?? p.subject_id}
                  </span>
                </span>
                <span className="text-muted-foreground" aria-hidden="true">
                  ›
                </span>
              </Link>
            );
          })}
          {papers.length === 0 && (
            <p className="py-6 text-center text-[13px] text-muted-foreground">
              Papers for this semester are being added.
            </p>
          )}
        </div>

        <Link to="/ai-help" className="press mt-4 block">
          <Button variant="outline" className="w-full">
            <Target className="mr-1.5 inline size-4" /> Practice with Ask &amp; Revise
          </Button>
        </Link>
      </Screen>
      <BottomNav />
    </>
  );
}
