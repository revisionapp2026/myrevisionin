import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DyK7C5H7.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { n as useAuth } from "./auth-fa8YZUgE.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { et as Eye, ht as Bookmark, it as Crown, lt as ChevronLeft, tt as EyeOff, vt as BookOpenCheck, y as ShieldCheck, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Screen } from "./app-chrome-Bb5PuQcw.mjs";
import { t as revision_logo_default } from "./revision-logo-BPpcyIP8.mjs";
import { n as Button } from "./ui-bits-DCyB6evP.mjs";
import { t as Route } from "./auth-JZ45_9HQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DFIUOONz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ADMIN_EMAIL = "admin@revisionapp.com";
var perks = [
	{
		icon: BookOpenCheck,
		text: "Full B.Com & BBA revision material"
	},
	{
		icon: Bookmark,
		text: "Bookmarks synced on every device"
	},
	{
		icon: Crown,
		text: "Model papers with solved answers"
	}
];
function AuthScreen() {
	const { signIn, signUp, sendReset, user, loading } = useAuth();
	const searchMode = Route.useSearch().mode;
	const { program } = useAppState();
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)(searchMode === "admin" ? "admin" : "signin");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [google, setGoogle] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)(null);
	async function handleResetPassword() {
		if (!email.trim()) {
			setError("Please enter your email address first.");
			return;
		}
		setBusy(true);
		setError(null);
		setNotice(null);
		try {
			await sendReset(email.trim());
			setNotice("Password reset link sent! Check your email inbox.");
		} catch (err) {
			setError(err instanceof Error ? err.message : "Could not send reset email.");
		} finally {
			setBusy(false);
		}
	}
	(0, import_react.useEffect)(() => {
		if (loading || !user) return;
		let active = true;
		(async () => {
			const { data } = await supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin");
			if (!active) return;
			const target = (data?.length ?? 0) > 0 ? "/admin" : program ? "/dashboard" : "/program-selection";
			navigate({
				to: target,
				replace: true
			});
		})();
		return () => {
			active = false;
		};
	}, [
		loading,
		user,
		navigate,
		program
	]);
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		setError(null);
		setNotice(null);
		try {
			if (mode === "admin") await signIn(ADMIN_EMAIL, password);
			else if (mode === "signin") await signIn(email.trim(), password);
			else {
				const { needsConfirmation } = await signUp(name.trim(), email.trim(), password);
				if (needsConfirmation) setNotice("Almost done — check your inbox and tap the confirmation link to finish.");
			}
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
		} finally {
			setBusy(false);
		}
	}
	async function withGoogle() {
		setGoogle(true);
		setError(null);
		const framed = typeof window !== "undefined" && window.top !== window.self;
		const appUrl = {
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/"
		}["VITE_APP_URL"] || window.location.origin;
		const { data, error: err } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: `${appUrl}/auth`,
				skipBrowserRedirect: framed,
				queryParams: { prompt: "select_account" }
			}
		});
		if (err) {
			setError(/provider is not enabled|unsupported/i.test(err.message) ? "Google sign-in is not switched on for this app yet. Use your email and password for now." : err.message);
			setGoogle(false);
			return;
		}
		if (framed && data?.url) {
			if (!window.open(data.url, "_blank", "noopener,noreferrer")) setError("Please allow pop-ups, or open the app in its own browser tab to use Google.");
			else setNotice("Finish signing in with Google in the new tab, then come back here.");
			setGoogle(false);
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
				children: "Study Anytime. Succeed Everywhere."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
		className: "-mt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card px-5 py-5",
				children: [
					mode !== "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-1 rounded-xl bg-muted p-1",
						children: ["signin", "signup"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setMode(m);
								setError(null);
								setNotice(null);
							},
							className: cn("rounded-lg py-2 text-[12.5px] font-bold transition-colors", mode === m ? "bg-card text-primary shadow-sm" : "text-muted-foreground"),
							children: m === "signin" ? "Sign in" : "Create"
						}, m))
					}),
					mode === "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setMode("signin");
							setError(null);
							setNotice(null);
						},
						className: "mb-3 flex items-center gap-1 text-[13px] font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Back to sign in"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 rounded-xl bg-primary-soft px-3 py-2.5 text-[12.5px] font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 shrink-0" }), "Admin access — enter the admin password to manage subjects, units, papers and students."]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "mt-4 grid gap-3",
						children: [
							mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full name",
								value: name,
								onChange: setName,
								type: "text",
								placeholder: "Your name",
								required: true
							}),
							mode !== "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								value: email,
								onChange: setEmail,
								type: "email",
								placeholder: "you@example.com",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: mode === "admin" ? "Admin password" : "Password",
								value: password,
								onChange: setPassword,
								type: "password",
								placeholder: mode === "admin" ? "Enter admin password" : "At least 6 characters",
								required: true
							}),
							mode === "signin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "-mt-1 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleResetPassword,
									className: "text-[12.5px] font-semibold text-primary hover:underline",
									children: "Forgot password?"
								})
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-xl bg-destructive/10 px-3 py-2 text-[13px] font-medium text-destructive",
								children: error
							}),
							notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rounded-xl bg-primary-soft px-3 py-2 text-[13px] font-medium text-primary",
								children: notice
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								size: "lg",
								variant: mode === "admin" ? "primary" : "accent",
								className: "mt-1 w-full",
								disabled: busy,
								children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), mode === "signup" ? "Create my account" : mode === "admin" ? "Open admin panel" : "Sign in"]
							})
						]
					}),
					mode !== "admin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-4 flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11.5px] font-bold uppercase tracking-wide text-muted-foreground",
								children: "or"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: withGoogle,
						disabled: google,
						className: "press flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-card text-[14.5px] font-bold text-foreground",
						children: [google ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleMark, {}), "Continue with Google"]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 grid gap-2.5",
				children: perks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2.5 text-[13.5px] font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-[17px]" })
					}), p.text]
				}, p.text))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-center text-[12px] leading-relaxed text-muted-foreground",
				children: "By continuing you agree to keep your revision notes to yourself. We only use your email to sign you in."
			})
		]
	})] });
}
function GoogleMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 18 18",
		className: "size-[18px]",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4285F4",
				d: "M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#34A853",
				d: "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34A9 9 0 0 0 9 18Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FBBC05",
				d: "M3.97 10.71a5.4 5.4 0 0 1 0-3.42V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.34Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58Z"
			})
		]
	});
}
function Field({ label, value, onChange, type, placeholder, required }) {
	const [show, setShow] = (0, import_react.useState)(false);
	const isPw = type === "password";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "grid gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[13px] font-bold text-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "h-12 rounded-xl border border-border bg-card px-3.5 text-[15px] text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-primary" + (isPw ? " pr-12" : ""),
				value,
				type: isPw && show ? "text" : type,
				placeholder,
				required,
				autoComplete: type === "password" ? "current-password" : type,
				onChange: (e) => onChange(e.target.value)
			})]
		}), isPw && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setShow((v) => !v),
			"aria-label": show ? "Hide password" : "Show password",
			className: "press absolute bottom-0 right-1 grid size-12 place-items-center text-muted-foreground",
			children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-[18px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-[18px]" })
		})]
	});
}
//#endregion
export { AuthScreen as component };
