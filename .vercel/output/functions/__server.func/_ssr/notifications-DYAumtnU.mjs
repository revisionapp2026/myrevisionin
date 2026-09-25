import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, I as Megaphone, _t as BookOpen, it as Crown, yt as Bell, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Screen, n as EmptyState, o as ScreenHeader } from "./app-chrome-Bb5PuQcw.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as notificationsQuery } from "./content-DMPcUEi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-DYAumtnU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	general: Megaphone,
	material: BookOpen,
	paper: FileText,
	premium: Crown
};
function NotificationsScreen() {
	const { program, semester, readNotifications, markNotificationsRead } = useAppState();
	const { data: items = [], isLoading } = useQuery(notificationsQuery(program, semester));
	(0, import_react.useEffect)(() => {
		if (items.length > 0) markNotificationsRead(items.map((n) => n.id));
	}, [items, markNotificationsRead]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Notifications" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {
		nav: true,
		children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 flex justify-center text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-6 animate-spin" })
		}) : items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: Bell,
			title: "No updates yet",
			description: "You'll see new study material, model papers and offers here."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-2.5",
			children: items.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				item: n,
				unread: !readNotifications.includes(n.id)
			}) }, n.id))
		})
	})] });
}
function Card({ item, unread }) {
	const Icon = icons[item.category] ?? Megaphone;
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "grid size-10 shrink-0 place-items-center rounded-[10px] bg-primary-soft text-primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "min-w-0 flex-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[15px] font-bold leading-snug",
					children: item.title
				}), unread && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "size-2 shrink-0 rounded-full bg-accent",
					"aria-label": "Unread"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-[13px] leading-relaxed text-muted-foreground",
				children: item.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1.5 block text-[11.5px] text-muted-foreground",
				children: new Date(item.created_at).toLocaleDateString()
			})
		]
	})] });
	const cls = "surface-card press flex w-full items-start gap-3 px-3.5 py-3.5 text-left";
	if (item.link?.startsWith("/")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: item.link,
		className: cls,
		children: body
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cls,
		children: body
	});
}
//#endregion
export { NotificationsScreen as component };
