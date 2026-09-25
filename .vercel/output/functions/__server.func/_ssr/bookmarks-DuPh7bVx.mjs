import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as Highlighter, ht as Bookmark, u as Trash2 } from "../_libs/lucide-react.mjs";
import { a as Screen, n as EmptyState, o as ScreenHeader, t as BottomNav } from "./app-chrome-Bb5PuQcw.mjs";
import { n as Button } from "./ui-bits-DCyB6evP.mjs";
import { r as getUnit } from "./mock-data-CcD4brPZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bookmarks-DuPh7bVx.js
var import_jsx_runtime = require_jsx_runtime();
function BookmarksScreen() {
	const { bookmarks, removeBookmark, highlights, removeHighlight } = useAppState();
	const groups = /* @__PURE__ */ new Map();
	for (const b of bookmarks) {
		const list = groups.get(b.unitId) ?? [];
		list.push(b);
		groups.set(b.unitId, list);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, {
			title: "Bookmarks",
			back: false,
			subtitle: `${bookmarks.length} saved · ${highlights.length} highlighted`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
			nav: true,
			children: bookmarks.length === 0 && highlights.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: Bookmark,
				title: "No bookmarks yet",
				description: "Save any revision highlight and it will appear here for quick review.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dashboard",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Browse subjects" })
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mb-2 flex items-center gap-2 text-[14px] font-bold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlighter, { className: "size-[16px] text-accent" }),
						" Highlighted (",
						highlights.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "surface-card divide-y divide-border",
					children: highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 px-3.5 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13.5px] leading-relaxed",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: h.color === "yellow" ? "hl-yellow" : h.color === "green" ? "hl-green" : "hl-pink",
									children: h.text
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/unit/$unitId",
								params: { unitId: h.unitId },
								className: "mt-1 inline-block text-[11.5px] font-semibold text-primary",
								children: "Open unit"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => removeHighlight(h.id),
							"aria-label": "Remove highlight",
							className: "press shrink-0 text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-[17px]" })
						})]
					}, h.id))
				})] }), [...groups.entries()].map(([unitId, items]) => {
					const found = getUnit(unitId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[14px] font-bold",
							children: found ? `Unit ${found.unit.unit_number} · ${found.unit.title}` : "Saved"
						}), found && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/unit/$unitId",
							params: { unitId },
							className: "text-[12.5px] font-semibold text-primary",
							children: "Open"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "surface-card divide-y divide-border",
						children: items.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 px-3.5 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "mt-0.5 size-[17px] shrink-0 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13.5px] leading-relaxed",
										children: b.text
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11.5px] text-muted-foreground",
										children: new Date(b.createdAt).toLocaleDateString()
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => removeBookmark(b.id),
									"aria-label": "Remove bookmark",
									className: "press shrink-0 text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-[17px]" })
								})
							]
						}, b.id))
					})] }, unitId);
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
	] });
}
//#endregion
export { BookmarksScreen as component };
