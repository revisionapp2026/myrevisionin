import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-state-BlNF1lSi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var globalStore = globalThis;
var AppStateContext = globalStore.__revisionAppStateContext ?? (globalStore.__revisionAppStateContext = (0, import_react.createContext)(null));
var HIGHLIGHT_COLORS = [
	"yellow",
	"green",
	"pink"
];
var STORAGE_KEY = "revision.state.v2";
var MAX_BOOKMARKS_PER_UNIT = 20;
var initial = {
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
	highlights: []
};
var key = (unitId, text) => `${unitId}::${text}`;
function AppStateProvider({ children }) {
	const [state, setState] = (0, import_react.useState)(initial);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const saved = JSON.parse(raw);
				const arr = (v, fallback) => Array.isArray(v) ? v : fallback;
				setState({
					...initial,
					...saved,
					bookmarks: arr(saved.bookmarks, initial.bookmarks),
					readNotifications: arr(saved.readNotifications, initial.readNotifications),
					studiedUnits: arr(saved.studiedUnits, initial.studiedUnits),
					highlights: arr(saved.highlights, initial.highlights)
				});
			}
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	}, [state, ready]);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", state.theme === "dark");
	}, [state.theme]);
	const setProgram = (0, import_react.useCallback)((program) => setState((s) => ({
		...s,
		program,
		selectedSubject: null,
		selectedUnit: null
	})), []);
	const setSemester = (0, import_react.useCallback)((semester) => setState((s) => ({
		...s,
		semester,
		selectedSubject: null,
		selectedUnit: null
	})), []);
	const setSelectedSubject = (0, import_react.useCallback)((selectedSubject) => setState((s) => ({
		...s,
		selectedSubject
	})), []);
	const setSelectedUnit = (0, import_react.useCallback)((selectedUnit) => setState((s) => ({
		...s,
		selectedUnit
	})), []);
	const toggleTheme = (0, import_react.useCallback)(() => setState((s) => ({
		...s,
		theme: s.theme === "dark" ? "light" : "dark"
	})), []);
	const setLanguage = (0, import_react.useCallback)((language) => setState((s) => ({
		...s,
		language
	})), []);
	const setPremium = (0, import_react.useCallback)((isPremium) => setState((s) => ({
		...s,
		isPremium
	})), []);
	const cycleTextScale = (0, import_react.useCallback)(() => setState((s) => ({
		...s,
		textScale: s.textScale >= 1.2 ? .95 : Math.round((s.textScale + .125) * 1e3) / 1e3
	})), []);
	const toggleBookmark = (0, import_react.useCallback)((unitId, text) => {
		setState((s) => {
			const id = key(unitId, text);
			if (s.bookmarks.some((b) => b.id === id)) return {
				...s,
				bookmarks: s.bookmarks.filter((b) => b.id !== id)
			};
			if (s.bookmarks.filter((b) => b.unitId === unitId).length >= MAX_BOOKMARKS_PER_UNIT) return s;
			return {
				...s,
				bookmarks: [...s.bookmarks, {
					id,
					unitId,
					text,
					createdAt: Date.now()
				}]
			};
		});
	}, []);
	const cycleHighlight = (0, import_react.useCallback)((unitId, text) => {
		setState((s) => {
			const id = key(unitId, text);
			const current = s.highlights.find((h) => h.id === id);
			if (!current) {
				if (s.highlights.filter((h) => h.unitId === unitId).length >= 10) return s;
				return {
					...s,
					highlights: [...s.highlights, {
						id,
						unitId,
						text,
						color: HIGHLIGHT_COLORS[0],
						createdAt: Date.now()
					}].slice(-500)
				};
			}
			const next = HIGHLIGHT_COLORS[HIGHLIGHT_COLORS.indexOf(current.color) + 1];
			if (!next) return {
				...s,
				highlights: s.highlights.filter((h) => h.id !== id)
			};
			return {
				...s,
				highlights: s.highlights.map((h) => h.id === id ? {
					...h,
					color: next
				} : h)
			};
		});
	}, []);
	const removeHighlight = (0, import_react.useCallback)((id) => setState((s) => ({
		...s,
		highlights: s.highlights.filter((h) => h.id !== id)
	})), []);
	const removeBookmark = (0, import_react.useCallback)((id) => setState((s) => ({
		...s,
		bookmarks: s.bookmarks.filter((b) => b.id !== id)
	})), []);
	const markNotificationsRead = (0, import_react.useCallback)((ids) => {
		setState((s) => {
			const missing = ids.filter((id) => !s.readNotifications.includes(id));
			if (missing.length === 0) return s;
			return {
				...s,
				readNotifications: [...s.readNotifications, ...missing].slice(-200)
			};
		});
	}, []);
	const markUnitStudied = (0, import_react.useCallback)((unitId) => {
		setState((s) => s.studiedUnits.includes(unitId) ? s : {
			...s,
			studiedUnits: [...s.studiedUnits, unitId].slice(-2e3)
		});
	}, []);
	const clearProgress = (0, import_react.useCallback)(() => setState((s) => ({
		...s,
		studiedUnits: []
	})), []);
	const reset = (0, import_react.useCallback)(() => setState(initial), []);
	const value = (0, import_react.useMemo)(() => ({
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
		isBookmarked: (unitId, text) => state.bookmarks.some((b) => b.id === key(unitId, text)),
		bookmarksForUnit: (unitId) => state.bookmarks.filter((b) => b.unitId === unitId),
		cycleHighlight,
		removeHighlight,
		highlightColor: (unitId, text) => state.highlights.find((h) => h.id === key(unitId, text))?.color ?? null,
		highlightsForUnit: (unitId) => state.highlights.filter((h) => h.unitId === unitId),
		markNotificationsRead,
		markUnitStudied,
		clearProgress,
		reset
	}), [
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
		reset
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppStateContext.Provider, {
		value,
		children
	});
}
function useAppState() {
	const ctx = (0, import_react.useContext)(AppStateContext);
	if (!ctx) throw new Error("useAppState must be used inside AppStateProvider");
	return ctx;
}
//#endregion
export { useAppState as n, AppStateProvider as t };
