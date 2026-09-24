import { useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { AppStateContext } from "./app-state-context";

export type Bookmark = { id: string; unitId: string; text: string; createdAt: number };

export const HIGHLIGHT_COLORS = ["yellow", "green", "pink"] as const;
export type HighlightColor = (typeof HIGHLIGHT_COLORS)[number];
export type Highlight = {
  id: string;
  unitId: string;
  text: string;
  color: HighlightColor;
  createdAt: number;
};

type Persisted = {
  program: string | null;
  semester: number | null;
  selectedSubject: string | null;
  selectedUnit: string | null;
  theme: "light" | "dark";
  language: string;
  isPremium: boolean;
  textScale: number;
  bookmarks: Bookmark[];
  readNotifications: string[];
  studiedUnits: string[];
  highlights: Highlight[];
};

type AppState = Persisted & {
  ready: boolean;
  setProgram: (id: string) => void;
  setSemester: (n: number) => void;
  setSelectedSubject: (id: string | null) => void;
  setSelectedUnit: (id: string | null) => void;
  toggleTheme: () => void;
  setLanguage: (l: string) => void;
  setPremium: (v: boolean) => void;
  cycleTextScale: () => void;
  toggleBookmark: (unitId: string, text: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (unitId: string, text: string) => boolean;
  bookmarksForUnit: (unitId: string) => Bookmark[];
  cycleHighlight: (unitId: string, text: string) => void;
  removeHighlight: (id: string) => void;
  highlightColor: (unitId: string, text: string) => HighlightColor | null;
  highlightsForUnit: (unitId: string) => Highlight[];
  markNotificationsRead: (ids: string[]) => void;
  markUnitStudied: (unitId: string) => void;
  clearProgress: () => void;
  reset: () => void;
};

const STORAGE_KEY = "revision.state.v2";
export const MAX_HIGHLIGHTS_PER_UNIT = 10;
const MAX_BOOKMARKS_PER_UNIT = 20;

const initial: Persisted = {
  program: null,
  semester: null,
  selectedSubject: null,
  selectedUnit: null,
  theme: "light",
  language: "English",
  isPremium: false,
  textScale: 1,
  bookmarks: [],
  readNotifications: [],
  studiedUnits: [],
  highlights: [],
};

const key = (unitId: string, text: string) => `${unitId}::${text}`;

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Persisted>(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<Persisted>;
        const arr = <T,>(v: unknown, fallback: T[]) => (Array.isArray(v) ? (v as T[]) : fallback);
        setState({
          ...initial,
          ...saved,
          bookmarks: arr(saved.bookmarks, initial.bookmarks),
          readNotifications: arr(saved.readNotifications, initial.readNotifications),
          studiedUnits: arr(saved.studiedUnits, initial.studiedUnits),
          highlights: arr(saved.highlights, initial.highlights),
        });
      }
    } catch {
      /* ignore malformed storage */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, ready]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.theme === "dark");
  }, [state.theme]);

  const setProgram = useCallback(
    (program: string) =>
      setState((s) => ({ ...s, program, selectedSubject: null, selectedUnit: null })),
    [],
  );
  const setSemester = useCallback(
    (semester: number) =>
      setState((s) => ({ ...s, semester, selectedSubject: null, selectedUnit: null })),
    [],
  );
  const setSelectedSubject = useCallback(
    (selectedSubject: string | null) => setState((s) => ({ ...s, selectedSubject })),
    [],
  );
  const setSelectedUnit = useCallback(
    (selectedUnit: string | null) => setState((s) => ({ ...s, selectedUnit })),
    [],
  );
  const toggleTheme = useCallback(
    () => setState((s) => ({ ...s, theme: s.theme === "dark" ? "light" : "dark" })),
    [],
  );
  const setLanguage = useCallback((language: string) => setState((s) => ({ ...s, language })), []);
  const setPremium = useCallback(
    (isPremium: boolean) => setState((s) => ({ ...s, isPremium })),
    [],
  );
  const cycleTextScale = useCallback(
    () =>
      setState((s) => ({
        ...s,
        textScale: s.textScale >= 1.2 ? 0.95 : Math.round((s.textScale + 0.125) * 1000) / 1000,
      })),
    [],
  );

  const toggleBookmark = useCallback((unitId: string, text: string) => {
    setState((s) => {
      const id = key(unitId, text);
      const exists = s.bookmarks.some((b) => b.id === id);
      if (exists) return { ...s, bookmarks: s.bookmarks.filter((b) => b.id !== id) };
      const inUnit = s.bookmarks.filter((b) => b.unitId === unitId).length;
      if (inUnit >= MAX_BOOKMARKS_PER_UNIT) return s;
      return { ...s, bookmarks: [...s.bookmarks, { id, unitId, text, createdAt: Date.now() }] };
    });
  }, []);

  const cycleHighlight = useCallback((unitId: string, text: string) => {
    setState((s) => {
      const id = key(unitId, text);
      const current = s.highlights.find((h) => h.id === id);
      if (!current) {
        // Free and Premium both keep up to 10 highlights per chapter.
        if (s.highlights.filter((h) => h.unitId === unitId).length >= MAX_HIGHLIGHTS_PER_UNIT) {
          return s;
        }
        return {
          ...s,
          highlights: [
            ...s.highlights,
            { id, unitId, text, color: HIGHLIGHT_COLORS[0], createdAt: Date.now() },
          ].slice(-500),
        };
      }
      const next = HIGHLIGHT_COLORS[HIGHLIGHT_COLORS.indexOf(current.color) + 1];
      if (!next) return { ...s, highlights: s.highlights.filter((h) => h.id !== id) };
      return {
        ...s,
        highlights: s.highlights.map((h) => (h.id === id ? { ...h, color: next } : h)),
      };
    });
  }, []);

  const removeHighlight = useCallback(
    (id: string) =>
      setState((s) => ({ ...s, highlights: s.highlights.filter((h) => h.id !== id) })),
    [],
  );

  const removeBookmark = useCallback(
    (id: string) => setState((s) => ({ ...s, bookmarks: s.bookmarks.filter((b) => b.id !== id) })),
    [],
  );

  const markNotificationsRead = useCallback((ids: string[]) => {
    setState((s) => {
      const missing = ids.filter((id) => !s.readNotifications.includes(id));
      if (missing.length === 0) return s;
      return { ...s, readNotifications: [...s.readNotifications, ...missing].slice(-200) };
    });
  }, []);

  const markUnitStudied = useCallback((unitId: string) => {
    setState((s) =>
      s.studiedUnits.includes(unitId)
        ? s
        : { ...s, studiedUnits: [...s.studiedUnits, unitId].slice(-2000) },
    );
  }, []);

  const clearProgress = useCallback(() => setState((s) => ({ ...s, studiedUnits: [] })), []);

  const reset = useCallback(() => setState(initial), []);

  const value = useMemo<AppState>(
    () => ({
      ...state,
      ready,
      setProgram,
      setSemester,
      setSelectedSubject,
      setSelectedUnit,
      toggleTheme,
      setLanguage,
      setPremium,
      cycleTextScale,
      toggleBookmark,
      removeBookmark,
      isBookmarked: (unitId: string, text: string) =>
        state.bookmarks.some((b) => b.id === key(unitId, text)),
      bookmarksForUnit: (unitId: string) => state.bookmarks.filter((b) => b.unitId === unitId),
      cycleHighlight,
      removeHighlight,
      highlightColor: (unitId: string, text: string) =>
        state.highlights.find((h) => h.id === key(unitId, text))?.color ?? null,
      highlightsForUnit: (unitId: string) => state.highlights.filter((h) => h.unitId === unitId),
      markNotificationsRead,
      markUnitStudied,
      clearProgress,
      reset,
    }),
    [
      state,
      ready,
      setProgram,
      setSemester,
      setSelectedSubject,
      setSelectedUnit,
      toggleTheme,
      setLanguage,
      setPremium,
      cycleTextScale,
      toggleBookmark,
      removeBookmark,
      cycleHighlight,
      removeHighlight,
      markNotificationsRead,
      markUnitStudied,
      clearProgress,
      reset,
    ],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext) as AppState | null;
  if (!ctx) throw new Error("useAppState must be used inside AppStateProvider");
  return ctx;
}
