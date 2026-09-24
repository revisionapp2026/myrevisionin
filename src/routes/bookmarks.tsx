import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, Highlighter, Trash2 } from "lucide-react";
import { getUnit } from "@/lib/mock-data";
import { useAppState } from "@/lib/app-state";
import { BottomNav, EmptyState, Screen, ScreenHeader } from "@/components/app-chrome";
import { Button } from "@/components/ui-bits";

export const Route = createFileRoute("/bookmarks")({
  head: () => ({
    meta: [
      { title: "Bookmarks — REVISION" },
      { name: "description", content: "Every revision point you saved, grouped by unit." },
      { property: "og:title", content: "Bookmarks — REVISION" },
      { property: "og:description", content: "Every revision point you saved." },
    ],
  }),
  component: BookmarksScreen,
});

function BookmarksScreen() {
  const { bookmarks, removeBookmark, highlights, removeHighlight } = useAppState();

  const groups = new Map<string, typeof bookmarks>();
  for (const b of bookmarks) {
    const list = groups.get(b.unitId) ?? [];
    list.push(b);
    groups.set(b.unitId, list);
  }

  return (
    <>
      <ScreenHeader
        title="Bookmarks"
        back={false}
        subtitle={`${bookmarks.length} saved · ${highlights.length} highlighted`}
      />
      <Screen nav>
        {bookmarks.length === 0 && highlights.length === 0 ? (
          <EmptyState
            icon={Bookmark}
            title="No bookmarks yet"
            description="Save any revision highlight and it will appear here for quick review."
            action={
              <Link to="/dashboard">
                <Button>Browse subjects</Button>
              </Link>
            }
          />
        ) : (
          <div className="grid gap-4">
            {highlights.length > 0 && (
              <section>
                <h2 className="mb-2 flex items-center gap-2 text-[14px] font-bold">
                  <Highlighter className="size-[16px] text-accent" /> Highlighted (
                  {highlights.length})
                </h2>
                <ul className="surface-card divide-y divide-border">
                  {highlights.map((h) => (
                    <li key={h.id} className="flex items-start gap-3 px-3.5 py-3">
                      <span className="min-w-0 flex-1">
                        <p className="text-[13.5px] leading-relaxed">
                          <span
                            className={
                              h.color === "yellow"
                                ? "hl-yellow"
                                : h.color === "green"
                                  ? "hl-green"
                                  : "hl-pink"
                            }
                          >
                            {h.text}
                          </span>
                        </p>
                        <Link
                          to="/unit/$unitId"
                          params={{ unitId: h.unitId }}
                          className="mt-1 inline-block text-[11.5px] font-semibold text-primary"
                        >
                          Open unit
                        </Link>
                      </span>
                      <button
                        type="button"
                        onClick={() => removeHighlight(h.id)}
                        aria-label="Remove highlight"
                        className="press shrink-0 text-muted-foreground"
                      >
                        <Trash2 className="size-[17px]" />
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {[...groups.entries()].map(([unitId, items]) => {
              const found = getUnit(unitId);
              return (
                <section key={unitId}>
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-[14px] font-bold">
                      {found ? `Unit ${found.unit.unit_number} · ${found.unit.title}` : "Saved"}
                    </h2>
                    {found && (
                      <Link
                        to="/unit/$unitId"
                        params={{ unitId }}
                        className="text-[12.5px] font-semibold text-primary"
                      >
                        Open
                      </Link>
                    )}
                  </div>
                  <ul className="surface-card divide-y divide-border">
                    {items.map((b) => (
                      <li key={b.id} className="flex items-start gap-3 px-3.5 py-3">
                        <Bookmark className="mt-0.5 size-[17px] shrink-0 text-primary" />
                        <span className="min-w-0 flex-1">
                          <p className="text-[13.5px] leading-relaxed">{b.text}</p>
                          <p className="mt-1 text-[11.5px] text-muted-foreground">
                            {new Date(b.createdAt).toLocaleDateString()}
                          </p>
                        </span>
                        <button
                          type="button"
                          onClick={() => removeBookmark(b.id)}
                          aria-label="Remove bookmark"
                          className="press shrink-0 text-muted-foreground"
                        >
                          <Trash2 className="size-[17px]" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        )}
      </Screen>
      <BottomNav />
    </>
  );
}
