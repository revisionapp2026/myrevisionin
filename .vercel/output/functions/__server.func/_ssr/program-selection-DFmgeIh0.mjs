import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { X as GraduationCap, ft as ChartColumn } from "../_libs/lucide-react.mjs";
import { t as revision_logo_default } from "./revision-logo-BPpcyIP8.mjs";
import { s as StepIndicator } from "./ui-bits-DCyB6evP.mjs";
import { s as programs } from "./mock-data-CcD4brPZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/program-selection-DFmgeIh0.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	bba: GraduationCap,
	bcom: ChartColumn
};
function ProgramSelection() {
	const navigate = useNavigate();
	const { program, setProgram } = useAppState();
	const choose = (id) => {
		setProgram(id);
		navigate({ to: "/semester-selection" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "brand-header px-4 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))] text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-xl flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: revision_logo_default,
								alt: "REVISION",
								className: "h-12 w-auto object-contain"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-[26px] font-extrabold leading-tight text-white",
							children: "Select Your Program"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-2 max-w-[19rem] text-[14px] leading-relaxed text-white/80",
							children: "Choose your program to get started with revision"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "screen-enter mx-auto -mt-5 w-full max-w-xl flex-1 px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3.5",
					children: programs.map((p) => {
						const Icon = icons[p.id];
						const selected = program === p.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => choose(p.id),
							"aria-pressed": selected,
							className: cn("surface-card press flex items-center gap-4 px-4 py-4 text-left hover:shadow-lift", selected && "border-primary bg-primary-soft"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("grid size-12 shrink-0 place-items-center rounded-xl", selected ? "bg-primary text-primary-foreground" : "bg-primary-soft text-primary"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[17px] font-bold",
									children: p.code
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[13px] text-muted-foreground",
									children: p.description
								})]
							})]
						}, p.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIndicator, { step: 1 })
			})
		]
	});
}
//#endregion
export { ProgramSelection as component };
