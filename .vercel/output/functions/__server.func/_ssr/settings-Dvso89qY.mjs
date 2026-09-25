import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, K as Info, N as Moon, P as MessageSquare, Z as Globe, ct as ChevronRight, f as Star, v as Shield, x as Share2 } from "../_libs/lucide-react.mjs";
import { a as Screen, o as ScreenHeader, r as IconTile } from "./app-chrome-Bb5PuQcw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-Dvso89qY.js
var import_jsx_runtime = require_jsx_runtime();
function SettingsScreen() {
	const { theme, toggleTheme, language } = useAppState();
	const rows = [
		{
			icon: Globe,
			label: "Language",
			value: language
		},
		{
			icon: MessageSquare,
			label: "App Feedback"
		},
		{
			icon: Share2,
			label: "Share App"
		},
		{
			icon: Star,
			label: "Rate Us"
		}
	];
	const legalRows = [
		{
			icon: Shield,
			label: "Privacy Policy",
			to: "/privacy"
		},
		{
			icon: FileText,
			label: "Terms of Use",
			to: "/terms"
		},
		{
			icon: FileText,
			label: "Refund & Cancellation",
			to: "/refund"
		},
		{
			icon: Info,
			label: "About REVISION",
			to: "/landing"
		}
	];
	const share = () => {
		const data = {
			title: "REVISION",
			text: "Last Minute Revision That Actually Works",
			url: "/"
		};
		if (navigator.share) navigator.share(data).catch(() => {});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Settings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card divide-y divide-border overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 px-3.5 py-3.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
						tone: "primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-[19px]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1 text-[15px] font-semibold",
						children: "Dark Mode"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "switch",
						"aria-checked": theme === "dark",
						"aria-label": "Toggle dark mode",
						onClick: toggleTheme,
						className: cn("h-6 w-11 rounded-full p-0.5 transition-colors", theme === "dark" ? "bg-primary" : "bg-border"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block size-5 rounded-full bg-white shadow transition-transform", theme === "dark" && "translate-x-5") })
					})
				]
			}), rows.map(({ icon: Icon, label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: label === "Share App" ? share : void 0,
				className: "flex w-full items-center gap-3 px-3.5 py-3.5 text-left transition-colors hover:bg-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
						tone: "muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[19px]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1 text-[15px] font-semibold",
						children: label
					}),
					value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[13px] text-muted-foreground",
						children: value
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-[18px] text-muted-foreground" })
				]
			}, label))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "surface-card mt-4 divide-y divide-border overflow-hidden",
			children: legalRows.map(({ icon: Icon, label, to }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to,
				className: "flex w-full items-center gap-3 px-3.5 py-3.5 text-left transition-colors hover:bg-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
						tone: "muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[19px]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1 text-[15px] font-semibold",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-[18px] text-muted-foreground" })
				]
			}, label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-center text-[12px] text-muted-foreground",
			children: "REVISION v1.0.0"
		})
	] })] });
}
//#endregion
export { SettingsScreen as component };
