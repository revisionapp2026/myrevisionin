import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, R as Lock, d as Target, it as Crown, m as Sparkles, vt as BookOpenCheck } from "../_libs/lucide-react.mjs";
import { a as Screen, o as ScreenHeader, s as SubjectGlyph, t as BottomNav } from "./app-chrome-Bb5PuQcw.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { i as SectionTitle, n as Button } from "./ui-bits-DCyB6evP.mjs";
import { r as useEntitlements } from "./entitlements-vXk3OsoG.mjs";
import { o as programLabel, u as subjectsFor } from "./mock-data-CcD4brPZ.mjs";
import { i as pointsCountQuery, r as papersForSubjectsQuery } from "./content-CFMTJWpr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/premium-CZ5eIUl8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Stat({ icon, value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card px-3 py-3 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto grid size-8 place-items-center rounded-full bg-primary-soft text-primary",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-[17px] font-extrabold leading-tight",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground",
				children: label
			})
		]
	});
}
function PremiumDashboard() {
	const { program, semester, studiedUnits, clearProgress } = useAppState();
	const { isPremium, planName } = useEntitlements();
	const subjects = (0, import_react.useMemo)(() => subjectsFor(program, semester), [program, semester]);
	const subjectIds = (0, import_react.useMemo)(() => subjects.map((s) => s.id), [subjects]);
	const unitIds = (0, import_react.useMemo)(() => subjects.flatMap((s) => s.units.map((u) => u.id)), [subjects]);
	const { data: papers = [] } = useQuery({
		...papersForSubjectsQuery(subjectIds),
		enabled: isPremium && subjectIds.length > 0
	});
	const { data: counts = {} } = useQuery({
		...pointsCountQuery(unitIds),
		enabled: isPremium && unitIds.length > 0
	});
	if (!isPremium) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Premium Dashboard" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
			nav: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card px-5 py-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto grid size-14 place-items-center rounded-full bg-premium/15 text-premium",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-[17px] font-extrabold",
						children: "Premium members only"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-1.5 max-w-[17rem] text-[13px] text-muted-foreground",
						children: "Unlock every unit’s revision points, all solved model papers and previous-year papers, plus your progress tracker."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/payment",
						className: "mt-5 block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							children: "Unlock Premium"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
	] });
	const studied = studiedUnits.filter((id) => unitIds.includes(id));
	const percent = unitIds.length ? Math.round(studied.length / unitIds.length * 100) : 0;
	const totalPoints = Object.values(counts).reduce((a, b) => a + b, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Premium Dashboard" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
			nav: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card flex items-center gap-3 px-4 py-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 shrink-0 place-items-center rounded-[10px] bg-premium/15 text-premium",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[15px] font-bold",
							children: "Premium active"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block text-[13px] text-muted-foreground",
							children: [
								programLabel(program),
								" • Semester ",
								semester ?? 1,
								" fully unlocked"
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					title: "Revision progress",
					action: studied.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: clearProgress,
						className: "text-[13px] font-semibold text-primary",
						children: "Reset"
					}) : void 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[13px] text-muted-foreground",
								children: [
									studied.length,
									" of ",
									unitIds.length,
									" units revised"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[20px] font-extrabold text-primary",
								children: [percent, "%"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "progressbar",
							"aria-valuenow": percent,
							"aria-valuemin": 0,
							"aria-valuemax": 100,
							className: "mt-2.5 h-2.5 overflow-hidden rounded-full bg-primary-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-accent transition-[width] duration-500",
								style: { width: `${percent}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[12px] text-muted-foreground",
							children: "A unit counts as revised once you open it."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-3 gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpenCheck, { className: "size-4" }),
							value: String(subjects.length),
							label: "Subjects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }),
							value: String(totalPoints),
							label: "Revision points"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }),
							value: String(papers.length),
							label: "Solved papers"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Unlocked syllabus" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2.5",
					children: subjects.map((s) => {
						const unitsDone = s.units.filter((u) => studiedUnits.includes(u.id)).length;
						const points = s.units.reduce((sum, u) => sum + (counts[u.id] ?? 0), 0);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/subject/$subjectId",
							params: { subjectId: s.id },
							className: "surface-card press flex items-center gap-3 px-3.5 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubjectGlyph, { icon: s.icon }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-[15px] font-semibold",
										children: s.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-[12px] text-muted-foreground",
										children: [
											unitsDone,
											"/",
											s.units.length,
											" units revised • ",
											points,
											" points"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									"aria-hidden": "true",
									children: "›"
								})
							]
						}, s.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Solved model papers" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2.5",
					children: [papers.map((p) => {
						const subject = subjects.find((s) => s.id === p.subject_id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/model-paper/$paperId",
							params: { paperId: p.id },
							className: "surface-card press flex items-center gap-3 px-3.5 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 shrink-0 place-items-center rounded-[10px] bg-accent-soft text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-[15px] font-semibold",
										children: p.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-[12px] text-muted-foreground",
										children: subject?.name ?? p.subject_id
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									"aria-hidden": "true",
									children: "›"
								})
							]
						}, p.id);
					}), papers.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-6 text-center text-[13px] text-muted-foreground",
						children: "Papers for this semester are being added."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ai-help",
					className: "press mt-4 block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "mr-1.5 inline size-4" }), " Practice with Ask & Revise"]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
	] });
}
//#endregion
export { PremiumDashboard as component };
