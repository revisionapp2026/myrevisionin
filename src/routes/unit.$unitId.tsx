import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Bookmark,
  BookmarkCheck,
  Check,
  FileText,
  Loader2,
  MoreVertical,
  Moon,
  Share2,
  Highlighter,
  Sparkles,
  Type,
} from "lucide-react";
import { getUnit } from "@/lib/mock-data";
import { unitPointsQuery } from "@/lib/content";
import { useAppState, type HighlightColor } from "@/lib/app-state";
import { EmptyState, Screen, ScreenHeader } from "@/components/app-chrome";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/unit/$unitId")({
  head: () => ({
    meta: [
      { title: "Chapter Highlights — REVISION" },
      { name: "description", content: "Bullet-point revision highlights and your bookmarks." },
      { property: "og:title", content: "Chapter Highlights — REVISION" },
      { property: "og:description", content: "Bullet-point revision highlights and bookmarks." },
    ],
  }),
  component: UnitScreen,
});

type Tab = "highlights" | "key points" | "saved";
const tabs: Tab[] = ["highlights", "key points", "saved"];

function UnitScreen() {
  const { unitId } = Route.useParams();
  const found = getUnit(unitId);
  const [tab, setTab] = useState<Tab>("highlights");
  const [copied, setCopied] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const {
    theme,
    toggleTheme,
    textScale,
    cycleTextScale,
    toggleBookmark,
    removeBookmark,
    isBookmarked,
    bookmarksForUnit,
    cycleHighlight,
    removeHighlight,
    highlightColor,
    highlightsForUnit,
    markUnitStudied,
  } = useAppState();

  useEffect(() => {
    markUnitStudied(unitId);
  }, [unitId, markUnitStudied]);

  const { data: points = [], isLoading } = useQuery({
    ...unitPointsQuery(unitId),
    enabled: Boolean(found),
  });

  if (!found) {
    return (
      <>
        <ScreenHeader title="Unit" />
        <Screen>
          <EmptyState
            icon={FileText}
            title="Unit not found"
            description="This chapter is not part of your current semester."
          />
        </Screen>
      </>
    );
  }

  const { unit, subject } = found;
  const highlights = points.filter((p) => p.kind === "highlight");
  const keyPoints = points.filter((p) => p.kind === "bookmark");
  const saved = bookmarksForUnit(unit.id);
  const marks = highlightsForUnit(unit.id);
  const active = tab === "highlights" ? highlights : keyPoints;
  const allSaved = active.length > 0 && active.every((p) => isBookmarked(unit.id, p.content));

  const saveAll = () => {
    for (const p of active.slice(0, 20))
      if (!isBookmarked(unit.id, p.content)) toggleBookmark(unit.id, p.content);
  };

  const share = async () => {
    const text = `${subject.name} — Unit ${unit.unit_number}: ${unit.title}\n\n${highlights
      .map((p) => `• ${p.content}`)
      .join("\n")}`;
    try {
      if (navigator.share) await navigator.share({ title: unit.title, text });
      else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }
    } catch {
      /* dismissed */
    }
  };

  return (
    <>
      <ScreenHeader
        title={`Unit ${unit.unit_number}`}
        subtitle={unit.title}
        action={
          <button
            type="button"
            onClick={saveAll}
            aria-label="Bookmark all points"
            className="press grid size-9 place-items-center rounded-full text-white hover:bg-white/15"
          >
            {allSaved ? (
              <BookmarkCheck className="size-[19px]" />
            ) : (
              <Bookmark className="size-[19px]" />
            )}
          </button>
        }
      />

      <div className="sticky top-0 z-10 border-b border-border bg-card">
        <div className="mx-auto flex max-w-xl">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              aria-pressed={tab === t}
              className={cn(
                "flex-1 py-3 text-[13.5px] font-semibold capitalize transition-colors",
                tab === t
                  ? "border-b-2 border-accent text-accent"
                  : "border-b-2 border-transparent text-muted-foreground",
              )}
            >
              {t}
              {t === "saved" && saved.length > 0 && ` (${saved.length})`}
            </button>
          ))}
        </div>
      </div>

      <Screen nav className="pb-24">
        <div style={{ fontSize: `${textScale}rem` }}>
          {tab === "saved" ? (
            saved.length === 0 && marks.length === 0 ? (
              <EmptyState
                icon={Bookmark}
                title="No bookmarks yet"
                description="Tap the bookmark icon next to any point to save it here."
              />
            ) : (
              <div className="grid gap-4">
                {marks.length > 0 && (
                  <section>
                    <h2 className="mb-2 text-[0.85em] font-bold text-muted-foreground">
                      Highlighted ({marks.length})
                    </h2>
                    <ul className="surface-card divide-y divide-border">
                      {marks.map((h) => (
                        <li key={h.id} className="flex items-start gap-3 px-3.5 py-3">
                          <Highlighter className="mt-0.5 size-[18px] shrink-0 text-accent" />
                          <p className="min-w-0 flex-1 text-justify text-[1.02em] leading-relaxed">
                            <span className={hlClass(h.color)}>{h.text}</span>
                          </p>
                          <button
                            type="button"
                            onClick={() => removeHighlight(h.id)}
                            aria-label="Remove highlight"
                            className="press shrink-0 text-muted-foreground"
                          >
                            <MoreVertical className="size-[18px]" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
                <ul className="surface-card divide-y divide-border">
                  {saved.map((b) => (
                    <li key={b.id} className="flex items-start gap-3 px-3.5 py-3">
                      <Bookmark className="mt-0.5 size-[18px] shrink-0 text-primary" />
                      <span className="min-w-0 flex-1">
                        <p className="text-justify text-[1.02em] leading-relaxed">{b.text}</p>
                        <p className="mt-1 text-[0.78em] text-muted-foreground">
                          {new Date(b.createdAt).toLocaleDateString()}
                        </p>
                      </span>
                      <span className="relative shrink-0">
                        <button
                          type="button"
                          onClick={() => setMenu(menu === b.id ? null : b.id)}
                          aria-label="Bookmark options"
                          className="press text-muted-foreground"
                        >
                          <MoreVertical className="size-[18px]" />
                        </button>
                        {menu === b.id && (
                          <span className="absolute right-0 top-6 z-10 w-36 overflow-hidden rounded-xl border border-border bg-card text-left shadow-lift">
                            <button
                              type="button"
                              onClick={() => {
                                removeBookmark(b.id);
                                setMenu(null);
                              }}
                              className="block w-full px-3 py-2.5 text-left text-[13px] font-medium text-destructive"
                            >
                              Remove
                            </button>
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ) : isLoading ? (
            <div className="mt-10 flex justify-center text-muted-foreground">
              <Loader2 className="size-6 animate-spin" />
            </div>
          ) : active.length === 0 ? (
            <div className="grid gap-3">
              <EmptyState
                icon={FileText}
                title="Revision points coming soon"
                description={`Key points for "${unit.title}" are being added. Meanwhile, get an instant explanation.`}
              />
              <Link
                to="/ai-help"
                search={{ topic: `${unit.title} (${subject.name})` }}
                className="press mx-auto flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[14px] font-bold text-accent-foreground"
              >
                <Sparkles className="size-[18px]" />
                Explain this unit
              </Link>
            </div>
          ) : (
            <ul className="surface-card divide-y divide-border">
              {active.map((p) => (
                <li key={p.id} className="flex items-start gap-3 px-3.5 py-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.45em] size-2 shrink-0 rounded-full bg-accent"
                  />
                  <p
                    onDoubleClick={() => cycleHighlight(unit.id, p.content)}
                    className="flex-1 text-justify text-[1.02em] leading-relaxed"
                  >
                    <span className={hlClass(highlightColor(unit.id, p.content))}>{p.content}</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => cycleHighlight(unit.id, p.content)}
                    aria-label="Highlight this point"
                    className={cn(
                      "press mt-0.5 shrink-0",
                      highlightColor(unit.id, p.content) ? "text-accent" : "text-muted-foreground",
                    )}
                  >
                    <Highlighter className="size-[18px]" />
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleBookmark(unit.id, p.content)}
                    aria-label={
                      isBookmarked(unit.id, p.content) ? "Remove bookmark" : "Add bookmark"
                    }
                    className="press mt-0.5 shrink-0 text-muted-foreground"
                  >
                    {isBookmarked(unit.id, p.content) ? (
                      <BookmarkCheck className="size-[18px] text-primary" />
                    ) : (
                      <Bookmark className="size-[18px]" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Screen>

      <div className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 pt-2 backdrop-blur">
        <div className="mx-auto flex max-w-xl">
          <ToolButton icon={Type} label="Text Size" onClick={cycleTextScale} />
          <ToolButton
            icon={Moon}
            label="Dark Mode"
            onClick={toggleTheme}
            active={theme === "dark"}
          />
          <ToolButton
            icon={copied ? Check : Share2}
            label={copied ? "Copied" : "Share"}
            onClick={() => void share()}
          />
          <ToolButton
            icon={allSaved ? BookmarkCheck : Bookmark}
            label="Save"
            onClick={saveAll}
            active={allSaved}
          />
        </div>
      </div>
    </>
  );
}

function hlClass(color: HighlightColor | null) {
  if (color === "yellow") return "hl-yellow";
  if (color === "green") return "hl-green";
  if (color === "pink") return "hl-pink";
  return "";
}

function ToolButton({
  icon: Icon,
  label,
  onClick,
  active,
}: {
  icon: typeof Bookmark;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "press flex flex-1 flex-col items-center gap-1 py-1 text-[11px] font-medium",
        active ? "text-primary" : "text-muted-foreground",
      )}
    >
      <Icon className="size-[20px]" />
      {label}
    </button>
  );
}
