import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { getSubject } from "@/lib/mock-data";
import { EmptyState, Screen, ScreenHeader } from "@/components/app-chrome";
import { SectionTitle } from "@/components/ui-bits";

export const Route = createFileRoute("/subject/$subjectId")({
  head: () => ({
    meta: [
      { title: "Units — REVISION" },
      { name: "description", content: "Unit-wise chapter list with revision highlights." },
      { property: "og:title", content: "Units — REVISION" },
      { property: "og:description", content: "Unit-wise chapter list with revision highlights." },
    ],
  }),
  component: SubjectScreen,
});

const unitTones = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-success text-white",
  "bg-destructive text-white",
  "bg-premium text-white",
  "bg-[var(--color-primary-blue)] text-white",
];

function SubjectScreen() {
  const { subjectId } = Route.useParams();
  const subject = getSubject(subjectId);

  if (!subject) {
    return (
      <>
        <ScreenHeader title="Subject" />
        <Screen>
          <EmptyState
            icon={FileText}
            title="Subject not found"
            description="This subject is no longer available in your semester."
          />
        </Screen>
      </>
    );
  }

  return (
    <>
      <ScreenHeader
        title={subject.name}
        subtitle={
          subject.electiveGroup
            ? `${subject.electiveGroup} Elective`
            : `Semester ${subject.semester}`
        }
      />
      <Screen>
        <div className="grid gap-2.5">
          {subject.units.map((u, i) => (
            <Link
              key={u.id}
              to="/unit/$unitId"
              params={{ unitId: u.id }}
              className="surface-card press flex items-center gap-3 px-3.5 py-3 hover:shadow-lift"
            >
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-full text-[13px] font-bold ${unitTones[i % unitTones.length]}`}
              >
                {u.unit_number}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold">Unit {u.unit_number}</span>
                <span className="block truncate text-[13px] text-muted-foreground">{u.title}</span>
              </span>
              <span className="text-muted-foreground" aria-hidden="true">
                ›
              </span>
            </Link>
          ))}
        </div>

        <SectionTitle title="Exam Practice" />
        <Link
          to="/model-papers/$subjectId"
          params={{ subjectId: subject.id }}
          className="surface-card press flex items-center gap-3 px-3.5 py-3.5 hover:shadow-lift"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-accent-soft text-accent">
            <FileText className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[15px] font-semibold">Model Papers</span>
            <span className="block text-[13px] text-muted-foreground">
              Solved answers & previous year paper
            </span>
          </span>
          <span className="text-muted-foreground" aria-hidden="true">
            ›
          </span>
        </Link>
      </Screen>
    </>
  );
}
