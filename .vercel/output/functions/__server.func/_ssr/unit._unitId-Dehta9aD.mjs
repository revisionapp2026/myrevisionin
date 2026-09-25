import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, J as Highlighter, N as Moon, c as Type, dt as Check, gt as BookmarkCheck, ht as Bookmark, m as Sparkles, nt as EllipsisVertical, x as Share2, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Screen, n as EmptyState, o as ScreenHeader } from "./app-chrome-Bb5PuQcw.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { r as getUnit } from "./mock-data-CcD4brPZ.mjs";
import { o as unitPointsQuery } from "./content-FUGNj7pd.mjs";
import { t as Route } from "./unit._unitId-D8LoWf2L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/unit._unitId-Dehta9aD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	"highlights",
	"key points",
	"saved"
];
function UnitScreen() {
	const { unitId } = Route.useParams();
	const found = getUnit(unitId);
	const [tab, setTab] = (0, import_react.useState)("highlights");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(null);
	const { theme, toggleTheme, textScale, cycleTextScale, toggleBookmark, removeBookmark, isBookmarked, bookmarksForUnit, cycleHighlight, removeHighlight, highlightColor, highlightsForUnit, markUnitStudied } = useAppState();
	(0, import_react.useEffect)(() => {
		markUnitStudied(unitId);
	}, [unitId, markUnitStudied]);
	const { data: points = [], isLoading } = useQuery({
		...unitPointsQuery(unitId),
		enabled: Boolean(found)
	});
	if (!found) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Unit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: FileText,
		title: "Unit not found",
		description: "This chapter is not part of your current semester."
	}) })] });
	const { unit, subject } = found;
	const highlights = points.filter((p) => p.kind === "highlight");
	const keyPoints = points.filter((p) => p.kind === "bookmark");
	const saved = bookmarksForUnit(unit.id);
	const marks = highlightsForUnit(unit.id);
	const active = tab === "highlights" ? highlights : keyPoints;
	const allSaved = active.length > 0 && active.every((p) => isBookmarked(unit.id, p.content));
	const saveAll = () => {
		for (const p of active.slice(0, 20)) if (!isBookmarked(unit.id, p.content)) toggleBookmark(unit.id, p.content);
	};
	const share = async () => {
		const text = `${subject.name} — Unit ${unit.unit_number}: ${unit.title}\n\n${highlights.map((p) => `• ${p.content}`).join("\n")}`;
		try {
			if (navigator.share) await navigator.share({
				title: unit.title,
				text
			});
			else {
				await navigator.clipboard.writeText(text);
				setCopied(true);
				setTimeout(() => setCopied(false), 1600);
			}
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, {
			title: `Unit ${unit.unit_number}`,
			subtitle: unit.title,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: saveAll,
				"aria-label": "Bookmark all points",
				className: "press grid size-9 place-items-center rounded-full text-white hover:bg-white/15",
				children: allSaved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-[19px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-[19px]" })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-0 z-10 border-b border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-xl",
				children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTab(t),
					"aria-pressed": tab === t,
					className: cn("flex-1 py-3 text-[13.5px] font-semibold capitalize transition-colors", tab === t ? "border-b-2 border-accent text-accent" : "border-b-2 border-transparent text-muted-foreground"),
					children: [t, t === "saved" && saved.length > 0 && ` (${saved.length})`]
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
			nav: true,
			className: "pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: { fontSize: `${textScale}rem` },
				children: tab === "saved" ? saved.length === 0 && marks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: Bookmark,
					title: "No bookmarks yet",
					description: "Tap the bookmark icon next to any point to save it here."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [marks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mb-2 text-[0.85em] font-bold text-muted-foreground",
						children: [
							"Highlighted (",
							marks.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "surface-card divide-y divide-border",
						children: marks.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 px-3.5 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlighter, { className: "mt-0.5 size-[18px] shrink-0 text-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "min-w-0 flex-1 text-justify text-[1.02em] leading-relaxed",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: hlClass(h.color),
										children: h.text
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => removeHighlight(h.id),
									"aria-label": "Remove highlight",
									className: "press shrink-0 text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "size-[18px]" })
								})
							]
						}, h.id))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "surface-card divide-y divide-border",
						children: saved.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 px-3.5 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "mt-0.5 size-[18px] shrink-0 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-justify text-[1.02em] leading-relaxed",
										children: b.text
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[0.78em] text-muted-foreground",
										children: new Date(b.createdAt).toLocaleDateString()
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setMenu(menu === b.id ? null : b.id),
										"aria-label": "Bookmark options",
										className: "press text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "size-[18px]" })
									}), menu === b.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute right-0 top-6 z-10 w-36 overflow-hidden rounded-xl border border-border bg-card text-left shadow-lift",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												removeBookmark(b.id);
												setMenu(null);
											},
											className: "block w-full px-3 py-2.5 text-left text-[13px] font-medium text-destructive",
											children: "Remove"
										})
									})]
								})
							]
						}, b.id))
					})]
				}) : isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex justify-center text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-6 animate-spin" })
				}) : active.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						icon: FileText,
						title: "Revision points coming soon",
						description: `Key points for "${unit.title}" are being added. Meanwhile, get an instant explanation.`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/ai-help",
						search: { topic: `${unit.title} (${subject.name})` },
						className: "press mx-auto flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[14px] font-bold text-accent-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-[18px]" }), "Explain this unit"]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "surface-card divide-y divide-border",
					children: active.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 px-3.5 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "mt-[0.45em] size-2 shrink-0 rounded-full bg-accent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								onDoubleClick: () => cycleHighlight(unit.id, p.content),
								className: "flex-1 text-justify text-[1.02em] leading-relaxed",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: hlClass(highlightColor(unit.id, p.content)),
									children: p.content
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => cycleHighlight(unit.id, p.content),
								"aria-label": "Highlight this point",
								className: cn("press mt-0.5 shrink-0", highlightColor(unit.id, p.content) ? "text-accent" : "text-muted-foreground"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlighter, { className: "size-[18px]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggleBookmark(unit.id, p.content),
								"aria-label": isBookmarked(unit.id, p.content) ? "Remove bookmark" : "Add bookmark",
								className: "press mt-0.5 shrink-0 text-muted-foreground",
								children: isBookmarked(unit.id, p.content) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-[18px] text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-[18px]" })
							})
						]
					}, p.id))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 pt-2 backdrop-blur",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolButton, {
						icon: Type,
						label: "Text Size",
						onClick: cycleTextScale
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolButton, {
						icon: Moon,
						label: "Dark Mode",
						onClick: toggleTheme,
						active: theme === "dark"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolButton, {
						icon: copied ? Check : Share2,
						label: copied ? "Copied" : "Share",
						onClick: () => void share()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolButton, {
						icon: allSaved ? BookmarkCheck : Bookmark,
						label: "Save",
						onClick: saveAll,
						active: allSaved
					})
				]
			})
		})
	] });
}
function hlClass(color) {
	if (color === "yellow") return "hl-yellow";
	if (color === "green") return "hl-green";
	if (color === "pink") return "hl-pink";
	return "";
}
function ToolButton({ icon: Icon, label, onClick, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("press flex flex-1 flex-col items-center gap-1 py-1 text-[11px] font-medium", active ? "text-primary" : "text-muted-foreground"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[20px]" }), label]
	});
}
//#endregion
export { UnitScreen as component };
