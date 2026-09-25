import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as useRouter, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Search, I as Megaphone, W as Landmark, _ as Sigma, a as Wallet, ct as ChevronRight, ft as ChartColumn, ht as Bookmark, lt as ChevronLeft, o as Users, pt as Briefcase, q as House, s as User, w as Scale } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-chrome-Bb5PuQcw.js
var import_jsx_runtime = require_jsx_runtime();
function ScreenHeader({ title, subtitle, back = true, action, leading, home = true }) {
	const router = useRouter();
	const goBack = () => {
		if (typeof window !== "undefined" && window.history.length > 1) {
			router.history.back();
			return;
		}
		router.navigate({ to: "/dashboard" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "brand-header sticky top-0 z-20 px-4 pb-4 pt-[max(0.85rem,env(safe-area-inset-top))]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-xl items-center gap-3",
			children: [
				back && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: goBack,
					"aria-label": "Go back",
					className: "press grid size-9 shrink-0 place-items-center rounded-full text-white/95 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-[22px]" })
				}),
				leading,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "truncate text-[17px] font-bold leading-tight text-white",
						children: title
					}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[13px] text-white/75",
						children: subtitle
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-1",
					children: [action, home && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/dashboard",
						"aria-label": "Go to home",
						className: "press grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-[19px]" })
					})]
				})
			]
		})
	});
}
function Screen({ children, nav = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("min-h-dvh bg-background", nav ? "pb-[5.75rem]" : "pb-10"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("screen-enter mx-auto max-w-xl px-4 py-4", className),
			children
		})
	});
}
function IconTile({ children, tone = "primary", size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid shrink-0 place-items-center rounded-[10px]", size === "sm" ? "size-8" : "size-10", tone === "primary" && "bg-primary-soft text-primary", tone === "accent" && "bg-accent-soft text-accent", tone === "muted" && "bg-muted text-muted-foreground", tone === "success" && "bg-success/10 text-success", tone === "premium" && "bg-premium/15 text-premium", tone === "danger" && "bg-destructive/10 text-destructive"),
		children
	});
}
var subjectIcons = {
	accounting: Landmark,
	economics: ChartColumn,
	law: Scale,
	marketing: Megaphone,
	hr: Users,
	stats: Sigma,
	management: Briefcase,
	finance: Wallet
};
function SubjectGlyph({ icon }) {
	const Icon = subjectIcons[icon];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
		tone: "primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[19px]" })
	});
}
function ListRow({ leading, title, meta, trailing = true, to, params, onClick, className }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		leading,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[15px] font-semibold",
				children: title
			}), meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[13px] text-muted-foreground",
				children: meta
			})]
		}),
		trailing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-[18px] shrink-0 text-muted-foreground" })
	] });
	const cls = cn("surface-card press flex w-full items-center gap-3 px-3.5 py-3 text-left hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring", className);
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		...params ? { params } : {},
		className: cls,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cls,
		children: inner
	});
}
function EmptyState({ icon: Icon, title, description, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card mt-6 flex flex-col items-center px-6 py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-14 place-items-center rounded-full bg-primary-soft text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-base font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-sm text-sm text-muted-foreground",
				children: description
			}),
			action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: action
			})
		]
	});
}
var tabs = [
	{
		to: "/dashboard",
		label: "Home",
		icon: House
	},
	{
		to: "/bookmarks",
		label: "Bookmarks",
		icon: Bookmark
	},
	{
		to: "/search",
		label: "Search",
		icon: Search
	},
	{
		to: "/profile",
		label: "Profile",
		icon: User
	}
];
function BottomNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 pt-2 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto flex max-w-xl",
			children: tabs.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					activeOptions: { exact: true },
					preload: "intent",
					className: "flex flex-col items-center gap-1 py-1 text-[11px] font-medium text-muted-foreground transition-colors",
					activeProps: { className: "!text-primary !font-semibold" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[21px]" }), label]
				})
			}, to))
		})
	});
}
//#endregion
export { Screen as a, ListRow as i, EmptyState as n, ScreenHeader as o, IconTile as r, SubjectGlyph as s, BottomNav as t };
