import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, C as Search, J as Highlighter, W as Landmark, n as X } from "../_libs/lucide-react.mjs";
import { a as Screen, n as EmptyState, o as ScreenHeader, t as BottomNav } from "./app-chrome-Bb5PuQcw.mjs";
import { r as Chip } from "./ui-bits-DCyB6evP.mjs";
import { c as searchAll } from "./mock-data-CcD4brPZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-CgU1wP7t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"All",
	"Subjects",
	"Units",
	"Content"
];
var kindOf = {
	Subjects: "subject",
	Units: "unit",
	Content: "content"
};
var icons = {
	subject: Landmark,
	unit: FileText,
	content: Highlighter,
	paper: FileText
};
function SearchScreen() {
	const { program, semester } = useAppState();
	const [query, setQuery] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("All");
	const results = (0, import_react.useMemo)(() => {
		const hits = searchAll(query, program, semester);
		if (filter === "All") return hits;
		const kind = kindOf[filter];
		return hits.filter((h) => h.kind === kind);
	}, [
		query,
		filter,
		program,
		semester
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Search" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
			nav: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card flex items-center gap-2.5 px-3.5 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-[18px] shrink-0 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoFocus: true,
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Trial Balance",
							"aria-label": "Search",
							className: "w-full bg-transparent text-[14px] outline-none placeholder:text-muted-foreground"
						}),
						query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setQuery(""),
							"aria-label": "Clear search",
							className: "press text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-[17px]" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-2 overflow-x-auto pb-1",
					children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: filter === f,
						onClick: () => setFilter(f),
						children: f
					}, f))
				}),
				query.trim() === "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: Search,
					title: "Search your syllabus",
					description: "Type a subject, unit or topic — for example “Trial Balance”."
				}) : results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: Search,
					title: "No results",
					description: `Nothing matched “${query}” in your semester.`
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-2.5",
					children: results.map((r, i) => {
						const Icon = icons[r.kind];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: r.to,
							params: r.params,
							className: "surface-card press flex items-center gap-3 px-3.5 py-3 hover:shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 shrink-0 place-items-center rounded-[10px] bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[19px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-[14.5px] font-semibold",
										children: r.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-[12.5px] text-muted-foreground",
										children: r.context
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									"aria-hidden": "true",
									children: "›"
								})
							]
						}) }, `${r.title}-${i}`);
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
	] });
}
//#endregion
export { SearchScreen as component };
