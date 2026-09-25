import { t as supabase } from "./client-BGeRLurA.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { U as Layers } from "../_libs/lucide-react.mjs";
import { a as Screen, n as EmptyState, o as ScreenHeader, s as SubjectGlyph, t as BottomNav } from "./app-chrome-Bb5PuQcw.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { i as SectionTitle, o as SkeletonList } from "./ui-bits-DCyB6evP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/electives-sFPfYnwj.js
var import_jsx_runtime = require_jsx_runtime();
var GROUP_ORDER = [
	"Finance",
	"Marketing",
	"HR",
	"E-Commerce"
];
function ElectivesScreen() {
	const { program } = useAppState();
	const { data: groups = [], isLoading } = useQuery({
		queryKey: ["electives", program],
		enabled: !!program,
		queryFn: async () => {
			const { data, error } = await supabase.from("subjects").select("id, name, icon, elective_group, units(count)").eq("program", program).is("semester", null).order("position");
			if (error) throw error;
			const rows = data ?? [];
			const names = Array.from(new Set(rows.map((r) => r.elective_group ?? "Other")));
			names.sort((a, b) => {
				const ia = GROUP_ORDER.indexOf(a);
				const ib = GROUP_ORDER.indexOf(b);
				return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
			});
			return names.map((group) => ({
				group,
				subjects: rows.filter((r) => (r.elective_group ?? "Other") === group)
			}));
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, {
			title: "Electives",
			subtitle: "Choose your specialisation"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
			nav: true,
			children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonList, { rows: 6 }) : groups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: Layers,
				title: "No electives",
				description: "Your program does not offer elective subjects."
			}) : groups.map(({ group, subjects }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: group }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2.5",
				children: subjects.map((s) => {
					const count = s.units?.[0]?.count ?? 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/subject/$subjectId",
						params: { subjectId: s.id },
						className: "surface-card press flex items-center gap-3 px-3.5 py-3 hover:shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubjectGlyph, { icon: s.icon }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[15px] font-semibold leading-snug",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-[13px] text-muted-foreground",
									children: [
										count,
										" ",
										count === 1 ? "Unit" : "Units"
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
			})] }, group))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
	] });
}
//#endregion
export { ElectivesScreen as component };
