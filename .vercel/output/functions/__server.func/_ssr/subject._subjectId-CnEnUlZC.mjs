import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/subject._subjectId-CnEnUlZC.js
var $$splitComponentImporter = () => import("./subject._subjectId-D-8JVIcD.mjs");
var Route = createFileRoute("/subject/$subjectId")({
	head: () => ({ meta: [
		{ title: "Units — REVISION" },
		{
			name: "description",
			content: "Unit-wise chapter list with revision highlights."
		},
		{
			property: "og:title",
			content: "Units — REVISION"
		},
		{
			property: "og:description",
			content: "Unit-wise chapter list with revision highlights."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
