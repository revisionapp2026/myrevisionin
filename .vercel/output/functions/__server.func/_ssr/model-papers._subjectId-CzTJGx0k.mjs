import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/model-papers._subjectId-CzTJGx0k.js
var $$splitComponentImporter = () => import("./model-papers._subjectId-CSx4PY0d.mjs");
var Route = createFileRoute("/model-papers/$subjectId")({
	head: () => ({ meta: [
		{ title: "Model Papers — REVISION" },
		{
			name: "description",
			content: "Model papers and the previous year question paper with solved answers."
		},
		{
			property: "og:title",
			content: "Model Papers — REVISION"
		},
		{
			property: "og:description",
			content: "Model papers with solved answers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
