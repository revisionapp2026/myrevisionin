import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Layers } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAppState } from "@/lib/app-state";
import { BottomNav, EmptyState, Screen, ScreenHeader, SubjectGlyph } from "@/components/app-chrome";
import { SectionTitle, SkeletonList } from "@/components/ui-bits";

export const Route = createFileRoute("/electives")({
  head: () => ({
    meta: [
      { title: "Electives — REVISION" },
      {
        name: "description",
        content: "Finance, Marketing, HR and E-Commerce elective subjects with unit-wise revision.",
      },
      { property: "og:title", content: "Electives — REVISION" },
      { property: "og:description", content: "Elective subjects grouped by specialisation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ElectivesScreen,
});

const GROUP_ORDER = ["Finance", "Marketing", "HR", "E-Commerce"];

type ElectiveSubject = {
  id: string;
  name: string;
  icon: string;
  elective_group: string | null;
  units: { count: number }[];
};

function ElectivesScreen() {
  const { program } = useAppState();

  const { data: groups = [], isLoading } = useQuery({
    queryKey: ["electives", program],
    enabled: !!program,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("subjects")
        .select("id, name, icon, elective_group, units(count)")
        .eq("program", program!)
        .is("semester", null)
        .order("position");
      if (error) throw error;
      const rows = (data ?? []) as unknown as ElectiveSubject[];
      const names = Array.from(new Set(rows.map((r) => r.elective_group ?? "Other")));
      names.sort((a, b) => {
        const ia = GROUP_ORDER.indexOf(a);
        const ib = GROUP_ORDER.indexOf(b);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
      });
      return names.map((group) => ({
        group,
        subjects: rows.filter((r) => (r.elective_group ?? "Other") === group),
      }));
    },
  });

  return (
    <>
      <ScreenHeader title="Electives" subtitle="Choose your specialisation" />
      <Screen nav>
        {isLoading ? (
          <SkeletonList rows={6} />
        ) : groups.length === 0 ? (
          <EmptyState
            icon={Layers}
            title="No electives"
            description="Your program does not offer elective subjects."
          />
        ) : (
          groups.map(({ group, subjects }) => (
            <div key={group}>
              <SectionTitle title={group} />
              <div className="grid gap-2.5">
                {subjects.map((s) => {
                  const count = s.units?.[0]?.count ?? 0;
                  return (
                    <Link
                      key={s.id}
                      to="/subject/$subjectId"
                      params={{ subjectId: s.id }}
                      className="surface-card press flex items-center gap-3 px-3.5 py-3 hover:shadow-lift"
                    >
                      <SubjectGlyph icon={s.icon as never} />
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-semibold leading-snug">
                          {s.name}
                        </span>
                        <span className="block text-[13px] text-muted-foreground">
                          {count} {count === 1 ? "Unit" : "Units"}
                        </span>
                      </span>
                      <span className="text-muted-foreground" aria-hidden="true">
                        ›
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </Screen>
      <BottomNav />
    </>
  );
}
