import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DyK7C5H7.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as KeyRound, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Screen, o as ScreenHeader } from "./app-chrome-Bb5PuQcw.mjs";
import { n as Button } from "./ui-bits-DCyB6evP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-Dc5aQUMr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResetPasswordScreen() {
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(false);
	async function submit(e) {
		e.preventDefault();
		setError(null);
		if (password !== confirm) {
			setError("Both passwords must match.");
			return;
		}
		setBusy(true);
		const { error: err } = await supabase.auth.updateUser({ password });
		setBusy(false);
		if (err) {
			setError(err.message);
			return;
		}
		setDone(true);
		setTimeout(() => navigate({
			to: "/dashboard",
			replace: true
		}), 1200);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, {
		title: "New password",
		back: false
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 flex flex-col items-center text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-7" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-4 font-display text-2xl font-bold",
			children: "Set a new password"
		})]
	}), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-6 rounded-xl bg-primary-soft px-3 py-3 text-center text-sm text-primary",
		children: "Password updated. Taking you back to the app…"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "mt-6 grid gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold",
					children: "New password"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "h-12 rounded-xl border border-border bg-card px-3 text-base outline-none focus-visible:border-primary",
					type: "password",
					value: password,
					required: true,
					autoComplete: "new-password",
					onChange: (e) => setPassword(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold",
					children: "Confirm password"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "h-12 rounded-xl border border-border bg-card px-3 text-base outline-none focus-visible:border-primary",
					type: "password",
					value: confirm,
					required: true,
					autoComplete: "new-password",
					onChange: (e) => setConfirm(e.target.value)
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl bg-destructive/10 px-3 py-2 text-sm text-destructive",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				size: "lg",
				className: "mt-1 w-full",
				disabled: busy,
				children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Update password"]
			})
		]
	})] })] });
}
//#endregion
export { ResetPasswordScreen as component };
