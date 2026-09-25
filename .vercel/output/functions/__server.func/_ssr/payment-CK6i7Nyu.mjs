import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { n as useAuth } from "./auth-fa8YZUgE.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as Lock, dt as Check, it as Crown, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Screen, o as ScreenHeader } from "./app-chrome-Bb5PuQcw.mjs";
import { n as Button } from "./ui-bits-DCyB6evP.mjs";
import { r as useEntitlements } from "./entitlements-vXk3OsoG.mjs";
import { a as premiumBenefits, i as plans } from "./mock-data-CcD4brPZ.mjs";
import { t as Route } from "./payment-CbXk4qkK.mjs";
import { t as load } from "../_libs/cashfreepayments__cashfree-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-CK6i7Nyu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PaymentScreen() {
	const { promo, cf_success, plan: planFromUrl } = Route.useSearch();
	const { user, profile, saveProfile } = useAuth();
	const { isLifetime } = useEntitlements();
	const [selected, setSelected] = (0, import_react.useState)(planFromUrl ? planFromUrl : promo ? "lifetime" : plans[0].id);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [sheet, setSheet] = (0, import_react.useState)(null);
	const { isPremium, setPremium } = useAppState();
	const basePlan = plans.find((p) => p.id === selected) ?? plans[0];
	const plan = promo && basePlan.id === "lifetime" ? {
		...basePlan,
		price: "₹399",
		note: "Limited offer"
	} : basePlan;
	(0, import_react.useEffect)(() => {
		if (cf_success === "true" && profile) {
			setPremium(true);
			setSheet("done");
			saveProfile({
				is_premium: true,
				plan: planFromUrl || selected,
				premium_since: (/* @__PURE__ */ new Date()).toISOString()
			}).catch((e) => console.error("Could not save premium to account", e));
		}
	}, [
		cf_success,
		profile,
		saveProfile,
		selected,
		planFromUrl,
		setPremium
	]);
	const pay = async () => {
		if (!user || !profile) {
			alert("Please sign in to continue");
			return;
		}
		const customerPhone = (user.phone || "9999999999").replace(/\D/g, "").slice(0, 10);
		const safePhone = customerPhone.length === 10 ? customerPhone : "9999999999";
		setPending(true);
		setSheet("processing");
		try {
			const amount = Number(plan.price.replace(/[^\d]/g, "")) || 0;
			const response = await fetch("/api/cashfree/create-order", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					planId: plan.id,
					amount,
					customerEmail: profile.email || user.email || "",
					customerName: profile.full_name || user.email?.split("@")[0] || "User",
					customerPhone: safePhone
				})
			});
			if (!response.ok) {
				const errorText = await response.text();
				console.error("Payment order creation failed:", errorText);
				throw new Error(`Failed to create payment order: ${errorText}`);
			}
			const paymentSessionId = (await response.json())?.payment_session_id;
			if (!paymentSessionId) throw new Error("Cashfree session id missing from payment response");
			const cashfree = await load({ mode: "production" });
			if (!cashfree) throw new Error("Cashfree SDK failed to initialize");
			const checkoutRes = await cashfree.checkout({
				paymentSessionId,
				redirectTarget: "_self"
			});
			if (checkoutRes?.error) {
				console.error("Cashfree checkout error:", checkoutRes.error);
				setSheet(null);
				setPending(false);
				alert(checkoutRes.error.message || "Failed to open payment gateway. Please try again.");
			}
			return;
		} catch (error) {
			console.error("Payment error:", error);
			setSheet(null);
			setPending(false);
			alert("Failed to initiate payment. Please try again.");
			return;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Unlock Premium" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card px-5 py-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto grid size-14 place-items-center rounded-full bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-[20px] font-extrabold",
						children: "Unlock Premium"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-1.5 max-w-[17rem] text-[13px] leading-relaxed text-muted-foreground",
						children: "Get model papers, important questions, solved answers & more!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 grid gap-2.5 text-left",
						children: premiumBenefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2.5 text-[14px] font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-[17px] shrink-0 text-success" }), b]
						}, b))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-2.5",
				children: plans.map((p) => {
					const active = selected === p.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setSelected(p.id),
						"aria-pressed": active,
						className: cn("surface-card press flex items-center gap-3 px-4 py-3.5 text-left", active && "border-primary bg-primary-soft"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("grid size-5 shrink-0 place-items-center rounded-full border-2", active ? "border-primary bg-primary text-white" : "border-border"),
								children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[15px] font-bold",
									children: promo && p.id === "lifetime" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["₹399 ", p.period] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										p.price,
										" ",
										p.period
									] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[12.5px] text-muted-foreground",
									children: p.note
								})]
							}),
							p.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-premium/15 px-2 py-1 text-[11px] font-bold text-premium",
								children: "Best value"
							})
						]
					}, p.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "lg",
				variant: "accent",
				className: "mt-4 w-full",
				disabled: pending || isLifetime || isPremium && selected === "yearly",
				onClick: () => void pay(),
				children: pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Processing…"] }) : isLifetime || isPremium && selected === "yearly" ? "Premium active" : `Pay ${plan.price}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 flex items-center justify-center gap-1.5 text-[12px] font-medium text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" }), "Secure payments powered by Cashfree"]
			})
		] }),
		sheet && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 flex items-end bg-black/50 px-0 pb-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "screen-enter w-full rounded-t-3xl bg-card px-5 pb-8 pt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-4 h-1.5 w-12 rounded-full bg-border" }),
					sheet === "processing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-auto block size-9 animate-spin rounded-full border-[3px] border-border border-t-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[15px] font-bold",
								children: "Processing payment…"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12.5px] text-muted-foreground",
								children: "via Cashfree"
							})
						]
					}),
					sheet === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-auto grid size-14 place-items-center rounded-full bg-success/15 text-success",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-7" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[17px] font-extrabold",
								children: "Payment successful"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12.5px] text-muted-foreground",
								children: "Premium unlocked — all model papers and answers are now open."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "accent",
								className: "mt-5 w-full",
								onClick: () => setSheet(null),
								children: "Start revising"
							})
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { PaymentScreen as component };
