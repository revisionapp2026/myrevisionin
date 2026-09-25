import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText } from "../_libs/lucide-react.mjs";
import { a as Screen, n as EmptyState, o as ScreenHeader } from "./app-chrome-Bb5PuQcw.mjs";
import { i as SectionTitle } from "./ui-bits-DCyB6evP.mjs";
import { n as getSubject } from "./mock-data-CcD4brPZ.mjs";
import { t as Route } from "./subject._subjectId-CnEnUlZC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/subject._subjectId-D-8JVIcD.js
var import_jsx_runtime = require_jsx_runtime();
var unitTones = [
	"bg-primary text-primary-foreground",
	"bg-accent text-accent-foreground",
	"bg-success text-white",
	"bg-destructive text-white",
	"bg-premium text-white",
	"bg-[var(--color-primary-blue)] text-white"
];
function SubjectScreen() {
	const { subjectId } = Route.useParams();
	const subject = getSubject(subjectId);
	if (!subject) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Subject" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		icon: FileText,
		title: "Subject not found",
		description: "This subject is no longer available in your semester."
	}) })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, {
		title: subject.name,
		subtitle: subject.electiveGroup ? `${subject.electiveGroup} Elective` : `Semester ${subject.semester}`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-2.5",
			children: subject.units.map((u, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/unit/$unitId",
				params: { unitId: u.id },
				className: "surface-card press flex items-center gap-3 px-3.5 py-3 hover:shadow-lift",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid size-8 shrink-0 place-items-center rounded-full text-[13px] font-bold ${unitTones[i % unitTones.length]}`,
						children: u.unit_number
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block text-[15px] font-semibold",
							children: ["Unit ", u.unit_number]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-[13px] text-muted-foreground",
							children: u.title
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						"aria-hidden": "true",
						children: "›"
					})
				]
			}, u.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: "Exam Practice" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/model-papers/$subjectId",
			params: { subjectId: subject.id },
			className: "surface-card press flex items-center gap-3 px-3.5 py-3.5 hover:shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-10 shrink-0 place-items-center rounded-[10px] bg-accent-soft text-accent",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-[15px] font-semibold",
						children: "Model Papers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-[13px] text-muted-foreground",
						children: "Solved answers & previous year paper"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					"aria-hidden": "true",
					children: "›"
				})
			]
		})
	] })] });
}
//#endregion
export { SubjectScreen as component };
