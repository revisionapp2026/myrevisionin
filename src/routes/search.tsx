import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FileText, Highlighter, Landmark, Search as SearchIcon, X } from "lucide-react";
import { searchAll, type SearchHit } from "@/lib/mock-data";
import { useAppState } from "@/lib/app-state";
import { BottomNav, EmptyState, Screen, ScreenHeader } from "@/components/app-chrome";
import { Chip } from "@/components/ui-bits";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — REVISION" },
      {
        name: "description",
        content: "Search subjects, units, revision content and model papers in your semester.",
      },
      { property: "og:title", content: "Search — REVISION" },
      { property: "og:description", content: "Find any subject, unit or highlight instantly." },
    ],
  }),
  component: SearchScreen,
});

const filters = ["All", "Subjects", "Units", "Content"] as const;
const kindOf = { Subjects: "subject", Units: "unit", Content: "content" } as const;

const icons = {
  subject: Landmark,
  unit: FileText,
  content: Highlighter,
  paper: FileText,
};

function SearchScreen() {
  const { program, semester } = useAppState();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const results = useMemo(() => {
    const hits = searchAll(query, program, semester);
    if (filter === "All") return hits;
    const kind = kindOf[filter];
    return hits.filter((h: SearchHit) => h.kind === kind);
  }, [query, filter, program, semester]);

  return (
    <>
      <ScreenHeader title="Search" />
      <Screen nav>
        <div className="surface-card flex items-center gap-2.5 px-3.5 py-3">
          <SearchIcon className="size-[18px] shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Trial Balance"
            aria-label="Search"
            className="w-full bg-transparent text-[14px] outline-none placeholder:text-muted-foreground"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="press text-muted-foreground"
            >
              <X className="size-[17px]" />
            </button>
          )}
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {filters.map((f) => (
            <Chip key={f} active={filter === f} onClick={() => setFilter(f)}>
              {f}
            </Chip>
          ))}
        </div>

        {query.trim() === "" ? (
          <EmptyState
            icon={SearchIcon}
            title="Search your syllabus"
            description="Type a subject, unit or topic — for example “Trial Balance”."
          />
        ) : results.length === 0 ? (
          <EmptyState
            icon={SearchIcon}
            title="No results"
            description={`Nothing matched “${query}” in your semester.`}
          />
        ) : (
          <ul className="mt-3 grid gap-2.5">
            {results.map((r, i) => {
              const Icon = icons[r.kind];
              return (
                <li key={`${r.title}-${i}`}>
                  <Link
                    to={r.to}
                    params={r.params}
                    className="surface-card press flex items-center gap-3 px-3.5 py-3 hover:shadow-lift"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-primary-soft text-primary">
                      <Icon className="size-[19px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[14.5px] font-semibold">{r.title}</span>
                      <span className="block truncate text-[12.5px] text-muted-foreground">
                        {r.context}
                      </span>
                    </span>
                    <span className="text-muted-foreground" aria-hidden="true">
                      ›
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </Screen>
      <BottomNav />
    </>
  );
}
