import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-help-BPsOmJUX.js
var $$splitComponentImporter = () => import("./ai-help-DZKQAUBh.mjs");
var Route = createFileRoute("/ai-help")({
	validateSearch: (search) => {
		const topic = search["topic"];
		const unitId = search["unitId"];
		const mode = search["mode"];
		const subjectId = search["subjectId"];
		return {
			...mode === "explain" || mode === "flashcards" || mode === "quiz" || mode === "audio-script" ? { mode } : {},
			...typeof subjectId === "string" && subjectId ? { subjectId } : {},
			...typeof topic === "string" && topic.length > 0 ? { topic } : {},
			...typeof unitId === "string" && unitId.length > 0 ? { unitId } : {}
		};
	},
	head: () => ({ meta: [
		{ title: "Ask & Revise — your AI study buddy | REVISION" },
		{
			name: "description",
			content: "Your personal B.Com and BBA study buddy: explanations, swipeable flashcards, practice quizzes and audio revision built from your own syllabus material."
		},
		{
			property: "og:title",
			content: "Ask & Revise — your AI study buddy | REVISION"
		},
		{
			property: "og:description",
			content: "Explanations, flashcards, quizzes and audio revision for your semester."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
