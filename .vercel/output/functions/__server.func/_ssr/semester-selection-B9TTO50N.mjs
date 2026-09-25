import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { X as GraduationCap, ct as ChevronRight } from "../_libs/lucide-react.mjs";
import { s as StepIndicator } from "./ui-bits-DCyB6evP.mjs";
import { l as semesters } from "./mock-data-CcD4brPZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/semester-selection-B9TTO50N.js
var import_jsx_runtime = require_jsx_runtime();
function SemesterSelection() {
	const navigate = useNavigate();
	const { semester, setSemester } = useAppState();
	const choose = (n) => {
		setSemester(n);
		navigate({ to: "/dashboard" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "brand-header px-4 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => navigate({ to: "/program-selection" }),
							"aria-label": "Go back",
							className: "press grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-[22px] rotate-180" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-center text-[26px] font-extrabold leading-tight text-white",
							children: "Select Your Semester"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-center text-[14px] text-white/80",
							children: "Choose your current semester"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "screen-enter mx-auto -mt-5 w-full max-w-xl flex-1 px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2.5",
					children: semesters.map((n) => {
						const selected = semester === n;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => choose(n),
							"aria-pressed": selected,
							className: cn("surface-card press flex items-center gap-3 px-3.5 py-3.5 text-left hover:shadow-lift", selected && "border-primary bg-primary-soft"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid size-10 shrink-0 place-items-center rounded-[10px]", selected ? "bg-primary text-primary-foreground" : "bg-primary-soft text-primary"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex-1 text-[15px] font-semibold",
									children: ["Semester ", n]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-[18px] text-muted-foreground" })
							]
						}, n);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIndicator, { step: 2 })
			})
		]
	});
}
//#endregion
export { SemesterSelection as component };
