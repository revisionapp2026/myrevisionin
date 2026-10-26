import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
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
  Sigma,
} from "lucide-react";
import { getUnit } from "@/lib/mock-data";
import { unitPointsQuery } from "@/lib/content";
import { useAppState, type HighlightColor } from "@/lib/app-state";
import { EmptyState, Screen, ScreenHeader } from "@/components/app-chrome";
import { cn } from "@/lib/utils";
import {
  MathFormula,
  FormulaCard,
  parseFormulaText,
  hasMathematicalFormula,
  RichMathText,
} from "@/components/math-formula";

export const Route = createFileRoute("/unit/$unitId")({
  head: () => ({
    meta: [
      { title: "Chapter Highlights & Formulas — REVISION" },
      { name: "description", content: "Bullet-point revision highlights, formulas, and bookmarks." },
      { property: "og:title", content: "Chapter Highlights & Formulas — REVISION" },
      { property: "og:description", content: "Bullet-point revision highlights, formulas, and bookmarks." },
    ],
  }),
  component: UnitScreen,
});

type Tab = "highlights" | "key points" | "formulas" | "saved";
const tabs: Tab[] = ["highlights", "key points", "formulas", "saved"];

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
    toggleUnitBookmark,
    isUnitBookmarked,
    removeUnitBookmarks,
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
  const formulaPoints = useMemo(() => {
    return points.filter((p) => {
      const parsed = parseFormulaText(p.content);
      return Boolean(parsed && parsed.formula.length <= 140);
    });
  }, [points]);

  const hasFormulas = formulaPoints.length > 0;
  const activeTabs = useMemo<Tab[]>(() => {
    const list: Tab[] = ["highlights", "key points"];
    if (hasFormulas) {
      list.push("formulas");
    }
    list.push("saved");
    return list;
  }, [hasFormulas]);

  useEffect(() => {
    if (tab === "formulas" && !hasFormulas) {
      setTab("highlights");
    }
  }, [tab, hasFormulas]);

  const isUnitSaved = isUnitBookmarked(unit.id);
  const saved = bookmarksForUnit(unit.id);
  const marks = highlightsForUnit(unit.id);
  const active = tab === "highlights" ? highlights : keyPoints;
  const allSaved = (active.length > 0 && active.every((p) => isBookmarked(unit.id, p.content))) || isUnitSaved;

  const toggleAllOrUnit = () => {
    if (allSaved) {
      for (const p of active) {
        if (isBookmarked(unit.id, p.content)) toggleBookmark(unit.id, p.content);
      }
      if (isUnitSaved) toggleUnitBookmark(unit.id, `Unit ${unit.unit_number}: ${unit.title}`);
    } else {
      for (const p of active.slice(0, 20)) {
        if (!isBookmarked(unit.id, p.content)) toggleBookmark(unit.id, p.content);
      }
      toggleUnitBookmark(unit.id, `Unit ${unit.unit_number}: ${unit.title}`);
    }
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
            onClick={toggleAllOrUnit}
            aria-label={allSaved ? "Remove unit bookmarks" : "Bookmark this unit and points"}
            title={allSaved ? "Remove bookmarks for this unit" : "Bookmark unit"}
            className="press grid size-9 place-items-center rounded-full text-white hover:bg-white/15"
          >
            {allSaved ? (
              <BookmarkCheck className="size-[19px] text-accent" />
            ) : (
              <Bookmark className="size-[19px]" />
            )}
          </button>
        }
      />

      <div className="sticky top-0 z-10 border-b border-border bg-card">
        <div className="mx-auto flex max-w-xl">
          {activeTabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              aria-pressed={tab === t}
              className={cn(
                "flex-1 py-3 text-[12.5px] font-semibold capitalize transition-colors",
                tab === t
                  ? "border-b-2 border-accent text-accent"
                  : "border-b-2 border-transparent text-muted-foreground",
              )}
            >
              {t}
              {t === "formulas" && ` (${formulaPoints.length})`}
              {t === "saved" && saved.length > 0 && ` (${saved.length})`}
            </button>
          ))}
        </div>
      </div>

      <Screen nav className="pb-24">
        <div style={{ fontSize: `${textScale}rem` }}>
          {tab === "formulas" ? (
            formulaPoints.length === 0 ? (
              <div className="grid gap-3">
                <EmptyState
                  icon={Sigma}
                  title="Formulas are integrated in Key Points"
                  description={`All mathematical relationships for "${unit.title}" are highlighted in the Key Points and Highlights tabs.`}
                />
                <button
                  type="button"
                  onClick={() => setTab("key points")}
                  className="press mx-auto flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[14px] font-bold text-accent-foreground"
                >
                  <Sparkles className="size-[18px]" />
                  View Key Points
                </button>
              </div>
            ) : (
              <div className="space-y-5 sm:space-y-6">
                {/* Virtual Book Chapter Reference Header */}
                <div className="rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-[#fdfbf7] dark:bg-[#16171b] p-4 sm:p-5 shadow-xs border-l-[5px] border-l-primary flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                      <Sigma className="size-5" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-primary font-mono bg-primary/10 px-2 py-0.5 rounded-md">
                          Virtual Book
                        </span>
                        <span className="text-[11.5px] font-semibold text-muted-foreground">
                          {formulaPoints.length} Core Equations
                        </span>
                      </div>
                      <h3 className="text-[15px] font-extrabold text-foreground mt-0.5">
                        {unit.title} • Formula Reference
                      </h3>
                    </div>
                  </div>
                  <p className="text-[12px] text-muted-foreground leading-snug sm:text-right max-w-xs">
                    Clean mathematical formulations with parameters, derivations &amp; exam notes.
                  </p>
                </div>

                {/* Individual Virtual Book Formula Cards - Ample spacing, never congested */}
                <div className="space-y-5 sm:space-y-6">
                  {formulaPoints.map((p, idx) => {
                    const parsed = parseFormulaText(p.content);
                    const title = parsed ? parsed.title : "Governing Mathematical Formulation";
                    const formula = parsed ? parsed.formula : p.content;
                    const explanation = parsed ? parsed.explanation : undefined;
                    const variables = parsed ? parsed.variables : undefined;
                    const bookmarked = isBookmarked(unit.id, p.content);

                    return (
                      <FormulaCard
                        key={p.id}
                        index={idx + 1}
                        title={title}
                        formula={formula}
                        explanation={explanation}
                        variables={variables}
                        isBookmarked={bookmarked}
                        onBookmark={() => toggleBookmark(unit.id, p.content)}
                      />
                    );
                  })}
                </div>
              </div>
            )
          ) : tab === "saved" ? (
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
                        <li key={h.id} className="flex items-start gap-3 px-3.5 py-3 min-w-0 w-full max-w-full overflow-hidden">
                          <Highlighter className="mt-0.5 size-[18px] shrink-0 text-accent" />
                          <div className="min-w-0 flex-1 text-justify text-[1.02em] leading-relaxed break-words">
                            <span className={hlClass(h.color)}>
                              <RichMathText text={h.text} />
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeHighlight(h.id)}
                            aria-label="Remove highlight"
                            className="press shrink-0 text-muted-foreground hover:text-destructive"
                          >
                            <MoreVertical className="size-[18px]" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
                <ul className="surface-card divide-y divide-border min-w-0 w-full max-w-full overflow-hidden">
                  {saved.map((b) => (
                    <li key={b.id} className="flex items-start gap-3 px-3.5 py-3 min-w-0 w-full max-w-full overflow-hidden">
                      <Bookmark className="mt-0.5 size-[18px] shrink-0 text-primary" />
                      <span className="min-w-0 flex-1 break-words">
                        <div className="text-justify text-[1.02em] leading-relaxed break-words font-medium">
                          <RichMathText text={b.text} />
                        </div>
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
            <ul className="surface-card divide-y divide-border min-w-0 w-full max-w-full overflow-hidden">
              {active.map((p) => (
                <li key={p.id} className="flex items-start gap-2.5 sm:gap-3 px-3 sm:px-3.5 py-3 min-w-0 w-full max-w-full overflow-hidden">
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] size-2 shrink-0 rounded-full bg-accent"
                  />
                  <div
                    onDoubleClick={() => cycleHighlight(unit.id, p.content)}
                    className="min-w-0 flex-1 break-words text-left text-[1.02em] leading-relaxed overflow-hidden"
                  >
                    <RenderPointContent content={p.content} hlColor={hlClass(highlightColor(unit.id, p.content))} />
                  </div>
                  <div className="flex items-center gap-1 shrink-0 mt-0.5">
                    <button
                      type="button"
                      onClick={() => cycleHighlight(unit.id, p.content)}
                      aria-label="Highlight this point"
                      className={cn(
                        "press p-1 rounded-md text-muted-foreground transition-colors",
                        highlightColor(unit.id, p.content) ? "text-accent bg-accent/10" : "hover:text-accent hover:bg-muted",
                      )}
                    >
                      <Highlighter className="size-[17px]" />
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleBookmark(unit.id, p.content)}
                      aria-label={
                        isBookmarked(unit.id, p.content) ? "Remove bookmark" : "Add bookmark"
                      }
                      className="press p-1 rounded-md text-muted-foreground hover:bg-muted transition-colors"
                    >
                      {isBookmarked(unit.id, p.content) ? (
                        <BookmarkCheck className="size-[17px] text-primary" />
                      ) : (
                        <Bookmark className="size-[17px]" />
                      )}
                    </button>
                  </div>
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
            onClick={toggleAllOrUnit}
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

function RenderPointContent({ content, hlColor }: { content: string; hlColor: string }) {
  const colonIdx = content.indexOf(":");
  if (colonIdx > 2 && colonIdx < 70) {
    const title = content.slice(0, colonIdx).trim();
    const rest = content.slice(colonIdx + 1).trim();
    return (
      <div className={cn("min-w-0 break-words leading-relaxed text-left", hlColor)}>
        <span className="font-bold text-foreground inline mr-1.5">{title}:</span>
        <RichMathText text={rest} />
      </div>
    );
  }

  return (
    <div className={cn("min-w-0 break-words leading-relaxed text-left", hlColor)}>
      <RichMathText text={content} />
    </div>
  );
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
