import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, R as Lock, l as Trophy, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Screen, n as EmptyState, o as ScreenHeader } from "./app-chrome-Bb5PuQcw.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { r as useEntitlements } from "./entitlements-C3Ks-eX8.mjs";
import { n as getSubject } from "./mock-data-CcD4brPZ.mjs";
import { a as subjectPapersQuery } from "./content-FUGNj7pd.mjs";
import { t as Route } from "./model-papers._subjectId-cc_Ctknu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/model-papers._subjectId-CCBS0Qh-.js
var import_jsx_runtime = require_jsx_runtime();
function ModelPapersScreen() {
	const { subjectId } = Route.useParams();
	const subject = getSubject(subjectId);
	const { isPremium } = useEntitlements();
	const { data: papers = [], isLoading } = useQuery({
		...subjectPapersQuery(subjectId),
		enabled: Boolean(subject)
	});
	if (!subject) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Model Papers" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: FileText,
		title: "Not available",
		description: "Model papers for this subject could not be found."
	}) })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, {
		title: subject.name,
		subtitle: "Quick Exam Revision"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, { children: [isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 flex justify-center text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-6 animate-spin" })
	}) : papers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: FileText,
		title: "Papers coming soon",
		description: `Solved model papers for ${subject.name} are being added. Check back shortly.`
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2.5",
		children: papers.map((p) => {
			if (p.is_paid && !isPremium) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/payment",
				className: "surface-card press flex items-center gap-3 px-3.5 py-3.5 hover:shadow-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid size-10 shrink-0 place-items-center rounded-[10px] ${p.paper_type === "previous_year" ? "bg-accent-soft text-accent" : "bg-primary-soft text-primary"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[15px] font-semibold leading-snug",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[13px] text-muted-foreground",
							children: p.subtitle
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1 rounded-lg bg-premium/15 px-2.5 py-1.5 text-[12px] font-bold text-premium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-[13px]" }), "Premium"]
					})
				]
			}, p.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/model-paper/$paperId",
				params: { paperId: p.id },
				className: "surface-card press flex items-center gap-3 px-3.5 py-3.5 hover:shadow-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid size-10 shrink-0 place-items-center rounded-[10px] ${p.paper_type === "previous_year" ? "bg-accent-soft text-accent" : "bg-primary-soft text-primary"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[15px] font-semibold leading-snug",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[13px] text-muted-foreground",
							children: p.subtitle
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						"aria-hidden": "true",
						children: "›"
					})
				]
			}, p.id);
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/ai-help",
		search: {
			topic: `Important exam questions from ${subject?.name ?? "this subject"}`,
			mode: "quiz",
			subjectId
		},
		className: "press mt-5 flex items-center gap-3 rounded-xl border border-border bg-accent-soft px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-11 shrink-0 place-items-center rounded-full bg-card text-premium",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-[22px]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[15px] font-bold leading-snug text-brand-text",
				children: [
					"Practice More",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Score Higher"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-auto text-[12.5px] font-bold text-primary",
				children: "Practice quiz ›"
			})
		]
	})] })] });
}
//#endregion
export { ModelPapersScreen as component };
