import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { n as useAuth } from "./auth-DJPsMw-X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/entitlements-C3Ks-eX8.js
/**
* Single place that decides what a Free student can do versus a Premium member.
* Premium is trusted from the account (profiles.is_premium) and, for the demo
* checkout, from the on-device flag.
*/
var PLAN_LIMITS = {
	FREE: {
		label: "Free",
		bookmarksPerUnit: 20,
		highlightsPerUnit: 10,
		aiQuestionsPerDay: 100,
		paidPapers: false,
		progressTracker: false
	},
	premium: {
		label: "Premium",
		bookmarksPerUnit: 20,
		highlightsPerUnit: 10,
		aiQuestionsPerDay: 100,
		paidPapers: true,
		progressTracker: true
	}
};
var AI_KEY = "revision-ai-usage";
function today() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
/** How many Ask & Revise questions the student has used today (per device). */
function readAiUsage() {
	if (typeof window === "undefined") return 0;
	try {
		const raw = window.localStorage.getItem(AI_KEY);
		if (!raw) return 0;
		const parsed = JSON.parse(raw);
		return parsed.date === today() ? Number(parsed.count) || 0 : 0;
	} catch {
		return 0;
	}
}
function recordAiUsage() {
	const next = readAiUsage() + 1;
	try {
		window.localStorage.setItem(AI_KEY, JSON.stringify({
			date: today(),
			count: next
		}));
	} catch {}
	return next;
}
/** Account (database) is the source of truth; the device flag only covers signed-out demo use. */
function useEntitlements() {
	const { isPremium: localPremium } = useAppState();
	const { user, profile } = useAuth();
	let subscription = "FREE";
	if (profile?.is_premium) if ((profile.plan ?? "").toLowerCase().startsWith("lifetime")) subscription = "LIFETIME";
	else {
		const since = profile.premium_since ? new Date(profile.premium_since).getTime() : Date.now();
		subscription = Date.now() - since < 31536e6 ? "YEARLY" : "FREE";
	}
	else if (!user && localPremium) subscription = "YEARLY";
	const isPremium = subscription !== "FREE";
	const plan = isPremium ? "premium" : "free";
	return {
		isPremium,
		subscription,
		isLifetime: subscription === "LIFETIME",
		plan,
		limits: PLAN_LIMITS[plan],
		planName: subscription === "LIFETIME" ? "Lifetime" : subscription === "YEARLY" ? "Yearly" : "Free"
	};
}
//#endregion
export { recordAiUsage as n, useEntitlements as r, readAiUsage as t };
