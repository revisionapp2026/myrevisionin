import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAuth } from "./auth-DJPsMw-X.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { lt as ChevronLeft, y as ShieldCheck, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Screen } from "./app-chrome-Bb5PuQcw.mjs";
import { t as revision_logo_default } from "./revision-logo-BPpcyIP8.mjs";
import { n as Button } from "./ui-bits-DCyB6evP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/adminlogin-xz8VJpq-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ADMIN_EMAIL = "admin@revisionapp.com";
var ADMIN_PASSWORD = "revision2026";
function AdminLoginScreen() {
	const { signIn } = useAuth();
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		setError(null);
		if (password !== ADMIN_PASSWORD) {
			setError("Invalid admin password");
			setBusy(false);
			return;
		}
		try {
			await signIn(ADMIN_EMAIL, ADMIN_PASSWORD);
		} catch (err) {
			setError("Admin user not found. Please create admin user in Supabase.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "brand-header px-5 pb-10 pt-12 text-center text-primary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-auto grid size-[76px] place-items-center overflow-hidden rounded-3xl bg-white/10 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: revision_logo_default,
					alt: "REVISION",
					className: "size-[76px] object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-[26px] font-extrabold tracking-tight",
				children: "REVISION"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[13px] font-medium text-primary-foreground/80",
				children: "Admin Access"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		className: "-mt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card px-5 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => navigate({ to: "/" }),
					className: "mb-3 flex items-center gap-1 text-[13px] font-semibold text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Back to home"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 rounded-xl bg-primary-soft px-3 py-2.5 text-[12.5px] font-semibold text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 shrink-0" }), "Enter the admin password to manage subjects, units, papers and students."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-4 grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-[13px] font-semibold text-foreground",
							children: "Admin password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							placeholder: "Enter admin password",
							required: true,
							className: "w-full rounded-lg border border-input bg-background px-4 py-3 text-[14px] placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
						})] }),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl bg-destructive/10 px-3 py-2 text-[13px] font-medium text-destructive",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							variant: "primary",
							className: "mt-1 w-full",
							disabled: busy,
							children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Signing in…"] }) : "Open admin panel"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-5 text-center text-[12px] leading-relaxed text-muted-foreground",
			children: "This is a restricted area. Unauthorized access is prohibited."
		})]
	})] });
}
//#endregion
export { AdminLoginScreen as component };
