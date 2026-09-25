import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, it as Crown, ut as ChevronDown, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Screen, n as EmptyState, o as ScreenHeader } from "./app-chrome-Bb5PuQcw.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { r as useEntitlements } from "./entitlements-V2w-FENW.mjs";
import { n as getSubject } from "./mock-data-CcD4brPZ.mjs";
import { n as paperQuery } from "./content-DMPcUEi2.mjs";
import { t as Route } from "./model-paper._paperId-DBGDU0oL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/model-paper._paperId-DibMuR_d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PaperScreen() {
	const { paperId } = Route.useParams();
	const [open, setOpen] = (0, import_react.useState)(1);
	const { isPremium } = useEntitlements();
	const { data, isLoading } = useQuery(paperQuery(paperId));
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Model Paper" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 flex justify-center text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-6 animate-spin" })
	}) })] });
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Model Paper" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: FileText,
		title: "Paper not found",
		description: "This paper is not available right now."
	}) })] });
	const { paper, questions } = data;
	const subject = getSubject(paper.subject_id);
	if (paper.is_paid && !isPremium) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, {
		title: paper.title,
		subtitle: subject?.name ?? ""
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: Crown,
		title: "Premium paper",
		description: "Unlock all model papers, previous year papers and solved answers.",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/payment",
			className: "press rounded-full bg-accent px-6 py-3 text-[14px] font-bold text-accent-foreground",
			children: "Unlock Premium"
		})
	}) })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, {
		title: paper.title,
		subtitle: subject?.name ?? ""
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2.5",
		children: questions.map((q) => {
			const expanded = open === q.question_no;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(expanded ? null : q.question_no),
					"aria-expanded": expanded,
					className: "press flex w-full items-start gap-3 px-3.5 py-3.5 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1 text-[15px] font-bold leading-snug",
						children: [
							"Q",
							q.question_no,
							". ",
							q.question,
							q.prompt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-bold",
								children: q.prompt
							}),
							q.marks ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block text-[12px] font-semibold text-muted-foreground",
								children: [q.marks, " Marks"]
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("mt-0.5 size-[18px] shrink-0 text-muted-foreground transition-transform", expanded && "rotate-180") })]
				}), expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border px-3.5 pb-4 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-bold text-accent",
						children: "Answer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 space-y-1.5",
						children: q.answer_lines.filter((l) => l.trim() && l.trim().toUpperCase() !== "OR").length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[14.5px] text-muted-foreground",
							children: "Answer is being added."
						}) : q.answer_lines.filter((l) => l.trim() && l.trim().toUpperCase() !== "OR").map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-justify text-[14.5px] leading-relaxed text-muted-foreground",
							children: line
						}, `${q.id}-${i}`))
					})]
				})]
			}, q.id);
		})
	}) })] });
}
//#endregion
export { PaperScreen as component };
