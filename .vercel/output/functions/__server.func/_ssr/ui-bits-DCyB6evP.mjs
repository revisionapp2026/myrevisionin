import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-bits-DCyB6evP.js
var import_jsx_runtime = require_jsx_runtime();
function Button({ variant = "primary", size = "md", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] active:opacity-95", size === "lg" ? "h-[52px] px-6 text-[15px]" : "h-10 px-4 text-sm", variant === "primary" && "bg-primary text-primary-foreground shadow-card hover:opacity-95", variant === "accent" && "bg-accent text-accent-foreground shadow-card hover:opacity-95", variant === "outline" && "border border-border bg-card text-foreground hover:bg-muted", variant === "ghost" && "text-primary hover:bg-primary-soft", variant === "ink" && "bg-ink text-ink-foreground shadow-lift hover:opacity-95", className),
		...props
	});
}
function Badge({ children, tone = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold", tone === "primary" && "bg-primary-soft text-primary", tone === "accent" && "bg-accent-soft text-accent", tone === "premium" && "bg-premium/15 text-premium", tone === "muted" && "bg-muted text-muted-foreground"),
		children
	});
}
function Chip({ active, children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring", active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"),
		children
	});
}
function StepIndicator({ step, total = 3 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-[13px] font-medium text-muted-foreground",
			children: [
				"Step ",
				step,
				" of 2"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-1.5",
			"aria-hidden": "true",
			children: Array.from({ length: total }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full transition-colors", i < step ? "bg-primary" : "bg-border") }, i))
		})]
	});
}
function SectionTitle({ title, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-2.5 mt-5 flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-[15px] font-bold",
			children: title
		}), action]
	});
}
/** Grey shimmer placeholders shown while study material loads. */
function Skeleton({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("skeleton block", className),
		"aria-hidden": "true"
	});
}
function SkeletonCard({ lines = 3 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card px-3.5 py-3.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-2/3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2.5 grid gap-2",
			children: Array.from({ length: lines }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: cn("h-3", i === lines - 1 ? "w-1/2" : "w-full") }, i))
		})]
	});
}
function SkeletonList({ rows = 5 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2.5",
		role: "status",
		"aria-label": "Loading",
		children: Array.from({ length: rows }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card flex items-center gap-3 px-3.5 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "size-10 rounded-[10px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3.5 w-3/5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-2 h-3 w-2/5" })]
			})]
		}, i))
	});
}
//#endregion
export { SkeletonCard as a, SectionTitle as i, Button as n, SkeletonList as o, Chip as r, StepIndicator as s, Badge as t };
