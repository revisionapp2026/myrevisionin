import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BG7YDhZ3.js
var $$splitComponentImporter = () => import("./auth-BSNAsQ9u.mjs");
var Route = createFileRoute("/auth")({
	ssr: false,
	validateSearch: (search) => {
		const mode = search["mode"];
		return typeof mode === "string" && (mode === "signin" || mode === "signup" || mode === "admin") ? { mode } : {};
	},
	head: () => ({ meta: [
		{ title: "Sign in — REVISION" },
		{
			name: "description",
			content: "Sign in or create your free REVISION account to save bookmarks and sync your program across devices."
		},
		{
			property: "og:title",
			content: "Sign in — REVISION"
		},
		{
			property: "og:description",
			content: "Create your free REVISION student account."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
