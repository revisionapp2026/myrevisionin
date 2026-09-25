import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-CbXk4qkK.js
var $$splitComponentImporter = () => import("./payment-CK6i7Nyu.mjs");
var Route = createFileRoute("/payment")({
	head: () => ({ meta: [
		{ title: "Unlock Premium — REVISION" },
		{
			name: "description",
			content: "Get model papers, previous year question papers, important questions and solved answers."
		},
		{
			property: "og:title",
			content: "Unlock Premium — REVISION"
		},
		{
			property: "og:description",
			content: "₹199 / year or ₹399 lifetime. Secure UPI payments."
		}
	] }),
	validateSearch: (s) => {
		const promo = s["promo"] === "lifetime" ? "lifetime" : void 0;
		const cf_success = s["cf_success"] === "true" ? "true" : void 0;
		const plan = typeof s["plan"] === "string" ? s["plan"] : void 0;
		const order_id = typeof s["order_id"] === "string" ? s["order_id"] : void 0;
		return {
			...promo ? { promo } : {},
			...cf_success ? { cf_success } : {},
			...plan ? { plan } : {},
			...order_id ? { order_id } : {}
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
