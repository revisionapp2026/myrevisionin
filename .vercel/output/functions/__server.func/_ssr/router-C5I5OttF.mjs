import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-BGeRLurA.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as AppStateProvider } from "./app-state-BlNF1lSi.mjs";
import { t as AuthProvider } from "./auth-vcfMoL4C.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, k as redirect, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as RefreshCw, b as Share, n as X, ot as CloudOff, p as SquarePlus, rt as Download } from "../_libs/lucide-react.mjs";
import { a as useQueryClient, i as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { a as dehydrate, o as hydrate, t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Route$24 } from "./ai-help-BkJRqhoR.mjs";
import { t as Route$25 } from "./auth-BG7YDhZ3.mjs";
import { t as Route$26 } from "./model-paper._paperId-DBGDU0oL.mjs";
import { t as Route$27 } from "./model-papers._subjectId-CzTJGx0k.mjs";
import { t as Route$28 } from "./payment-CQ1z_Kwu.mjs";
import { t as Route$29 } from "./subject._subjectId-CnEnUlZC.mjs";
import { t as Route$30 } from "./unit._unitId-Dh3Jw838.mjs";
import { createHmac } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C5I5OttF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Keeps study material the student has already opened on the device, so
* chapters and model papers stay readable when the connection drops.
* Browser only — the saved copy lives in localStorage.
*/
var STORAGE_KEY = "revision-study-cache";
/** A month of offline reading. */
var MAX_AGE = 2592e6;
var SAVE_EVERY_MS = 2e3;
function OfflineCacheProvider({ client, children }) {
	const restored = (0, import_react.useRef)(false);
	if (typeof window !== "undefined" && !restored.current) {
		restored.current = true;
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const saved = JSON.parse(raw);
				if (Date.now() - saved.savedAt < MAX_AGE && saved.state) hydrate(client, saved.state);
				else window.localStorage.removeItem(STORAGE_KEY);
			}
		} catch {}
	}
	(0, import_react.useEffect)(() => {
		const save = () => {
			try {
				const state = dehydrate(client, { shouldDehydrateQuery: (q) => q.state.status === "success" });
				window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
					savedAt: Date.now(),
					state
				}));
			} catch {}
		};
		const timer = window.setInterval(save, SAVE_EVERY_MS);
		window.addEventListener("pagehide", save);
		return () => {
			window.clearInterval(timer);
			window.removeEventListener("pagehide", save);
			save();
		};
	}, [client]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client,
		children
	});
}
var styles_default = "/assets/styles-B9Z6PhM0.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var DISMISS_KEY = "revision.install.dismissed";
function isStandalone() {
	return window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
}
function isIosSafari() {
	const ua = navigator.userAgent;
	return (/iPad|iPhone|iPod/.test(ua) || ua.includes("Mac") && navigator.maxTouchPoints > 1) && !/CriOS|FxiOS|EdgiOS/.test(ua);
}
function InstallPrompt() {
	const [event, setEvent] = (0, import_react.useState)(null);
	const [ios, setIos] = (0, import_react.useState)(false);
	const [guide, setGuide] = (0, import_react.useState)(false);
	const [hidden, setHidden] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (window.self !== window.top || isStandalone()) return;
		if (localStorage.getItem(DISMISS_KEY) === "1") return;
		if (isIosSafari()) {
			setIos(true);
			setHidden(false);
			return;
		}
		const onPrompt = (e) => {
			e.preventDefault();
			setEvent(e);
			setHidden(false);
		};
		const onInstalled = () => setHidden(true);
		window.addEventListener("beforeinstallprompt", onPrompt);
		window.addEventListener("appinstalled", onInstalled);
		return () => {
			window.removeEventListener("beforeinstallprompt", onPrompt);
			window.removeEventListener("appinstalled", onInstalled);
		};
	}, []);
	const dismiss = () => {
		localStorage.setItem(DISMISS_KEY, "1");
		setHidden(true);
		setGuide(false);
	};
	if (hidden || !event && !ios) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-x-3 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-40 mx-auto flex max-w-xl items-center gap-3 rounded-xl border border-border bg-card px-3.5 py-3 shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-9 shrink-0 place-items-center rounded-[10px] bg-primary-soft text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-[18px]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[14px] font-bold",
					children: "Install REVISION"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[12.5px] text-muted-foreground",
					children: "Add it to your home screen for quick revision"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: async () => {
					if (ios) return setGuide(true);
					try {
						await event?.prompt();
					} finally {
						dismiss();
					}
				},
				className: "press rounded-lg bg-accent px-3 py-1.5 text-[12.5px] font-bold text-accent-foreground",
				children: "Install"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: dismiss,
				"aria-label": "Dismiss install prompt",
				className: "press grid size-7 place-items-center rounded-full text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})
		]
	}), guide && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end bg-black/50",
		role: "dialog",
		"aria-label": "Install on iPhone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "screen-enter w-full rounded-t-3xl bg-card px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-4 h-1.5 w-12 rounded-full bg-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[17px] font-extrabold",
					children: "Add REVISION to your Home Screen"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-4 grid gap-3 text-[14.5px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-9 place-items-center rounded-lg bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share, { className: "size-[18px]" })
								}),
								"1. Tap the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Share" }),
								" button in Safari's toolbar"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-9 place-items-center rounded-lg bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePlus, { className: "size-[18px]" })
								}),
								"2. Choose ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Add to Home Screen" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-9 place-items-center rounded-lg bg-primary-soft text-primary font-bold",
									children: "✓"
								}),
								"3. Tap ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Add" }),
								" — REVISION opens like an app"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: dismiss,
					className: "press mt-5 w-full rounded-xl bg-primary py-3 text-[15px] font-bold text-primary-foreground",
					children: "Got it"
				})
			]
		})
	})] });
}
/**
* Guarded service-worker registration.
* Never registers in dev, inside an iframe, in Lovable preview hosts, or with ?sw=off —
* in those cases any existing /sw.js registration is removed instead.
*/
var SW_URL = "/sw.js";
function isPreviewHost(hostname) {
	return hostname.startsWith("id-preview--") || hostname.startsWith("preview--") || hostname === "lovableproject.com" || hostname.endsWith(".lovableproject.com") || hostname === "lovableproject-dev.com" || hostname.endsWith(".lovableproject-dev.com") || hostname === "beta.lovable.dev" || hostname.endsWith(".beta.lovable.dev");
}
async function unregisterAppWorkers() {
	if (!("serviceWorker" in navigator)) return;
	const registrations = await navigator.serviceWorker.getRegistrations();
	await Promise.allSettled(registrations.filter((registration) => (registration.active?.scriptURL ?? "").includes(SW_URL)).map((registration) => registration.unregister()));
}
function registerServiceWorker() {
	if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
	const inIframe = window.self !== window.top;
	const swOff = new URL(window.location.href).searchParams.get("sw") === "off";
	if (inIframe || swOff || isPreviewHost(window.location.hostname)) {
		unregisterAppWorkers();
		return;
	}
	window.addEventListener("load", () => {
		navigator.serviceWorker.register(SW_URL, { scope: "/" }).catch(() => {});
	});
}
/**
* Shows a small banner when the device loses its connection, and refetches
* cached study data automatically once the connection is back.
*/
function OfflineIndicator() {
	const qc = useQueryClient();
	const [offline, setOffline] = (0, import_react.useState)(false);
	const [syncing, setSyncing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof navigator === "undefined") return;
		setOffline(!navigator.onLine);
		const goOffline = () => setOffline(true);
		const goOnline = () => {
			setOffline(false);
			setSyncing(true);
			qc.refetchQueries({ type: "active" }).finally(() => {
				window.setTimeout(() => setSyncing(false), 1200);
			});
		};
		window.addEventListener("offline", goOffline);
		window.addEventListener("online", goOnline);
		return () => {
			window.removeEventListener("offline", goOffline);
			window.removeEventListener("online", goOnline);
		};
	}, [qc]);
	if (!offline && !syncing) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "status",
			className: offline ? "flex items-center gap-2 rounded-full bg-foreground px-3.5 py-1.5 text-[12.5px] font-semibold text-background shadow-lift" : "flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 text-[12.5px] font-semibold text-primary-foreground shadow-lift",
			children: offline ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudOff, { className: "size-3.5" }), " Offline — showing saved material"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5 animate-spin" }), " Back online — syncing"] })
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$23 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "google-site-verification",
				content: "Qhv9zV3dgLFbpiYOyadw9L4G6ty4UefQFmyrhlebDgU"
			},
			{ title: "REVISION — Last Minute Revision That Actually Works" },
			{
				name: "description",
				content: "REVISION is a study app for B.Com and BBA students: unit highlights, bookmarks and solved model papers."
			},
			{
				name: "theme-color",
				content: "#062B8F"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@600;700&display=swap"
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$23.useRouteContext();
	(0, import_react.useEffect)(() => {
		registerServiceWorker();
	}, []);
	(0, import_react.useEffect)(() => {
		const script1 = document.createElement("script");
		script1.async = true;
		script1.src = "https://www.googletagmanager.com/gtag/js?id=G-8ELX5TW41X";
		document.head.appendChild(script1);
		const script2 = document.createElement("script");
		script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8ELX5TW41X');
    `;
		document.head.appendChild(script2);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfflineCacheProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppStateProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfflineIndicator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallPrompt, {})
		] }) })
	});
}
var $$splitComponentImporter$18 = () => import("./routes-ChtHnZ0X.mjs");
var Route$22 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "REVISION — Learn. Revise. Succeed." },
		{
			name: "description",
			content: "REVISION is a smart revision platform for B.Com and BBA students. Your B.Com, BBA syllabus — anytime, anywhere."
		},
		{
			property: "og:title",
			content: "REVISION — Learn. Revise. Succeed."
		},
		{
			property: "og:description",
			content: "A smart revision platform for B.Com and BBA students. Your B.Com, BBA syllabus — anytime, anywhere."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./route-Di7iQBCH.mjs");
var Route$21 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./adminlogin-Diu2BXxf.mjs");
var Route$20 = createFileRoute("/adminlogin")({
	head: () => ({ meta: [{ title: "Admin Login — REVISION" }, {
		name: "description",
		content: "Admin access for REVISION platform management."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./bookmarks-DuPh7bVx.mjs");
var Route$19 = createFileRoute("/bookmarks")({
	head: () => ({ meta: [
		{ title: "Bookmarks — REVISION" },
		{
			name: "description",
			content: "Every revision point you saved, grouped by unit."
		},
		{
			property: "og:title",
			content: "Bookmarks — REVISION"
		},
		{
			property: "og:description",
			content: "Every revision point you saved."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./dashboard-B0fphhSb.mjs");
var Route$18 = createFileRoute("/dashboard")({
	head: () => ({ meta: [
		{ title: "Your Subjects — REVISION" },
		{
			name: "description",
			content: "All subjects for your selected program and semester, with unit-wise revision."
		},
		{
			property: "og:title",
			content: "Your Subjects — REVISION"
		},
		{
			property: "og:description",
			content: "Unit-wise revision for your semester."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./electives-sFPfYnwj.mjs");
var Route$17 = createFileRoute("/electives")({
	head: () => ({ meta: [
		{ title: "Electives — REVISION" },
		{
			name: "description",
			content: "Finance, Marketing, HR and E-Commerce elective subjects with unit-wise revision."
		},
		{
			property: "og:title",
			content: "Electives — REVISION"
		},
		{
			property: "og:description",
			content: "Elective subjects grouped by specialisation."
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
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./landing-D_JbhKsB.mjs");
var Route$16 = createFileRoute("/landing")({
	head: () => ({ meta: [
		{ title: "REVISION — Last-minute revision for BBA & B.Com" },
		{
			name: "description",
			content: "REVISION turns the BBA and B.Com syllabus into crisp unit highlights, solved model papers and previous-year papers. 274 units, 6,000+ revision points, works offline."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:title",
			content: "REVISION — Last-minute revision for BBA & B.Com"
		},
		{
			property: "og:description",
			content: "Unit highlights, solved model papers, previous-year papers and AI explanations for BBA & B.Com students."
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./notifications-DYAumtnU.mjs");
var Route$15 = createFileRoute("/notifications")({
	head: () => ({ meta: [
		{ title: "Notifications — REVISION" },
		{
			name: "description",
			content: "Updates about new study material, model papers and premium benefits."
		},
		{
			property: "og:title",
			content: "Notifications — REVISION"
		},
		{
			property: "og:description",
			content: "New study material and model paper updates."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./premium-DJIH8gTc.mjs");
var Route$14 = createFileRoute("/premium")({
	head: () => ({ meta: [
		{ title: "Premium Dashboard — REVISION" },
		{
			name: "description",
			content: "Your unlocked syllabus, solved model papers and revision progress tracker in one place."
		},
		{
			property: "og:title",
			content: "Premium Dashboard — REVISION"
		},
		{
			property: "og:description",
			content: "Unlocked syllabus, solved papers and a revision progress tracker."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./privacy-DWCbFoo4.mjs");
var Route$13 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy — REVISION study app" },
		{
			name: "description",
			content: "How REVISION collects, uses and protects B.Com and BBA students' account, study and payment information."
		},
		{
			property: "og:title",
			content: "Privacy Policy — REVISION study app"
		},
		{
			property: "og:description",
			content: "What data REVISION collects, how it is used, and your rights over it."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./profile-BxoFiaD5.mjs");
var Route$12 = createFileRoute("/profile")({
	head: () => ({ meta: [
		{ title: "My Profile — REVISION" },
		{
			name: "description",
			content: "Manage your membership, subscriptions, bookmarks, highlights and app settings."
		},
		{
			property: "og:title",
			content: "My Profile — REVISION"
		},
		{
			property: "og:description",
			content: "Your membership, saved content and settings."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./program-selection-DFmgeIh0.mjs");
var Route$11 = createFileRoute("/program-selection")({
	head: () => ({ meta: [
		{ title: "Select Your Program — REVISION" },
		{
			name: "description",
			content: "Choose BBA or B.Com to start last minute revision with REVISION."
		},
		{
			property: "og:title",
			content: "Select Your Program — REVISION"
		},
		{
			property: "og:description",
			content: "Choose BBA or B.Com to start revising."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./refund-Cbo8Q7fN.mjs");
var Route$10 = createFileRoute("/refund")({
	head: () => ({ meta: [
		{ title: "Refund & Cancellation Policy — REVISION" },
		{
			name: "description",
			content: "When REVISION premium purchases can be refunded, how to request a refund, and how cancellation works."
		},
		{
			property: "og:title",
			content: "Refund & Cancellation Policy — REVISION"
		},
		{
			property: "og:description",
			content: "Refund eligibility, request steps, processing time and cancellation for premium plans."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./reset-password-BpP3H_m2.mjs");
var Route$9 = createFileRoute("/reset-password")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Set a new password — REVISION" },
		{
			name: "description",
			content: "Choose a new password for your REVISION account."
		},
		{
			property: "og:title",
			content: "Set a new password — REVISION"
		},
		{
			property: "og:description",
			content: "Choose a new password for your REVISION account."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./search-CgU1wP7t.mjs");
var Route$8 = createFileRoute("/search")({
	head: () => ({ meta: [
		{ title: "Search — REVISION" },
		{
			name: "description",
			content: "Search subjects, units, revision content and model papers in your semester."
		},
		{
			property: "og:title",
			content: "Search — REVISION"
		},
		{
			property: "og:description",
			content: "Find any subject, unit or highlight instantly."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./semester-selection-B9TTO50N.mjs");
var Route$7 = createFileRoute("/semester-selection")({
	head: () => ({ meta: [
		{ title: "Select Your Semester — REVISION" },
		{
			name: "description",
			content: "Pick your current semester from 1 to 6 and start revising."
		},
		{
			property: "og:title",
			content: "Select Your Semester — REVISION"
		},
		{
			property: "og:description",
			content: "Pick your current semester, 1 to 6."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./settings-Dvso89qY.mjs");
var Route$6 = createFileRoute("/settings")({
	head: () => ({ meta: [
		{ title: "Settings — REVISION" },
		{
			name: "description",
			content: "Switch dark mode, choose your language, share the app and read our policies."
		},
		{
			property: "og:title",
			content: "Settings — REVISION"
		},
		{
			property: "og:description",
			content: "Dark mode, language, feedback and app policies."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./terms-C7uRVWyC.mjs");
var Route$5 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Terms of Use — REVISION study app" },
		{
			name: "description",
			content: "The rules for using REVISION: accounts, acceptable use, study material rights, premium plans and liability."
		},
		{
			property: "og:title",
			content: "Terms of Use — REVISION study app"
		},
		{
			property: "og:description",
			content: "Accounts, acceptable use, content rights and premium plan terms for REVISION."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin-D3oUs-6W.mjs");
var Route$4 = createFileRoute("/_authenticated/admin")({
	head: () => ({ meta: [
		{ title: "Admin Panel — REVISION" },
		{
			name: "description",
			content: "Manage subjects, units, revision points, model papers and notifications."
		},
		{
			property: "og:title",
			content: "Admin Panel — REVISION"
		},
		{
			property: "og:description",
			content: "Manage REVISION study content."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
/**
* Turns a short revision summary into spoken audio (WAV) using Lovable AI.
*/
var Route$3 = createFileRoute("/api/study-audio")({ server: { handlers: { POST: async ({ request }) => {
	const apiKey = process.env["LOVABLE_API_KEY"] || process.env["VITE_LOVABLE_API_KEY"];
	if (!apiKey) return new Response("The study buddy is temporarily unavailable on this server. Please try again later.", { status: 500 });
	let body;
	try {
		body = await request.json();
	} catch {
		return new Response("Invalid request.", { status: 400 });
	}
	const text = typeof body.text === "string" ? body.text.trim().slice(0, 1800) : "";
	if (text.length < 20) return new Response("Nothing to read out yet.", { status: 400 });
	const upstream = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Lovable-API-Key": apiKey,
			"X-Lovable-AIG-SDK": "fetch"
		},
		body: JSON.stringify({
			model: "google/gemini-3.1-flash-tts-preview",
			contents: [{
				role: "user",
				parts: [{ text: `Read this revision summary clearly and calmly:\n${text}` }]
			}],
			generationConfig: {
				responseModalities: ["AUDIO"],
				speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } } }
			}
		})
	});
	if (!upstream.ok) {
		const detail = await upstream.text().catch(() => "");
		const message = upstream.status === 402 ? "Audio explanations are unavailable — the workspace is out of AI credits." : upstream.status === 429 ? "Too many requests right now. Please try again in a moment." : `Could not create the audio (${upstream.status}). ${detail.slice(0, 160)}`;
		return new Response(message, { status: upstream.status || 500 });
	}
	const audio = await upstream.arrayBuffer();
	return new Response(audio, { headers: {
		"Content-Type": "audio/wav",
		"Cache-Control": "no-store"
	} });
} } } });
function env(name) {
	return process.env[name] ?? "";
}
async function rest(path) {
	const url = env("SUPABASE_URL");
	const key = env("SUPABASE_PUBLISHABLE_KEY");
	if (!url || !key) return [];
	const res = await fetch(`${url}/rest/v1/${path}`, { headers: {
		apikey: key,
		Accept: "application/json"
	} });
	if (!res.ok) return [];
	return await res.json();
}
var enc = (v) => encodeURIComponent(v);
/** Keywords worth searching for (drops tiny/stop words). */
function keywords(topic) {
	const stop = /* @__PURE__ */ new Set([
		"what",
		"explain",
		"with",
		"from",
		"that",
		"this",
		"about",
		"give",
		"please",
		"does",
		"their",
		"there",
		"which",
		"into",
		"between",
		"meaning",
		"short"
	]);
	return [...new Set(topic.toLowerCase().match(/[a-z]{4,}/g) ?? [])].filter((w) => !stop.has(w)).slice(0, 4);
}
async function buildGrounding(input) {
	const sources = [];
	const chunks = [];
	if (input.unitId) {
		const points = await rest(`revision_points?unit_id=eq.${enc(input.unitId)}&select=content,unit_id&order=display_order&limit=24`);
		if (points.length) {
			sources.push(input.unitId);
			chunks.push(points.map((p) => `- ${p.content}`).join("\n"));
		}
	}
	if (!chunks.length && input.subjectId) {
		const units = await rest(`units?subject_id=eq.${enc(input.subjectId)}&select=id&order=unit_number&limit=8`);
		if (units.length) {
			const points = await rest(`revision_points?unit_id=in.(${units.map((u) => u.id).map(enc).join(",")})&select=content,unit_id&limit=40`);
			if (points.length) {
				sources.push(input.subjectId);
				chunks.push(points.slice(0, 30).map((p) => `- ${p.content}`).join("\n"));
			}
		}
	}
	if (!chunks.length) {
		const words = keywords(input.topic);
		if (words.length) {
			const subjects = await rest(`subjects?program=eq.${enc(input.program)}&semester=eq.${input.semester}&select=id&limit=30`);
			if (subjects.length) {
				const units = await rest(`units?subject_id=in.(${subjects.map((s) => enc(s.id)).join(",")})&select=id&limit=300`);
				if (units.length) {
					const or = words.map((w) => `content.ilike.*${w}*`).join(",");
					const points = await rest(`revision_points?unit_id=in.(${units.map((u) => enc(u.id)).join(",")})&or=(${enc(or)})&select=content,unit_id&limit=24`);
					if (points.length) {
						for (const p of points) if (!sources.includes(p.unit_id)) sources.push(p.unit_id);
						chunks.push(points.map((p) => `- ${p.content}`).join("\n"));
					}
				}
			}
		}
	}
	return {
		context: chunks.join("\n").slice(0, 4e3),
		sources: sources.slice(0, 6)
	};
}
var MODE_INSTRUCTIONS = {
	explain: [
		"Answer with plain text using this exact structure and headings:",
		"EXPLANATION",
		"4 to 7 short bullet points starting with '- ', exam-ready, simple English.",
		"KEY POINTS TO REMEMBER",
		"3 to 5 one-line bullet points starting with '- '.",
		"PRACTICE QUESTIONS",
		"4 numbered questions a student may get in the exam, mixing short and long answer types.",
		"Keep the whole answer under 400 words."
	].join("\n"),
	flashcards: [
		"Produce exactly 8 revision flashcards and nothing else.",
		"Output one card per line in this exact format:",
		"question :: answer",
		"The question is under 15 words. The answer is one or two short sentences a student can recall in the exam.",
		"No numbering, no headings, no blank lines."
	].join("\n"),
	quiz: [
		"Produce exactly 6 multiple-choice practice questions and nothing else.",
		"Output one question per line in this exact format:",
		"question :: option A | option B | option C | option D :: correct option letter :: one line reason",
		"No numbering, no headings, no blank lines."
	].join("\n"),
	"audio-script": [
		"Write a spoken revision summary the student can listen to.",
		"Plain flowing sentences only, no headings, no bullet points, no numbers lists.",
		"Start with the topic name, then the core idea, then the points most likely asked in the exam.",
		"Keep it between 90 and 140 words, calm and clear for an Indian college student."
	].join("\n")
};
var Route$2 = createFileRoute("/api/study-help")({ server: { handlers: { POST: async ({ request }) => {
	let body;
	try {
		body = await request.json();
	} catch {
		return new Response("Invalid request.", { status: 400 });
	}
	const topic = typeof body["topic"] === "string" ? body["topic"].trim().slice(0, 400) : "";
	if (topic.length < 3) return new Response("Please type a topic or question first.", { status: 400 });
	const modeRaw = String(body["mode"] ?? "explain");
	const mode = [
		"explain",
		"flashcards",
		"quiz",
		"audio-script"
	].includes(modeRaw) ? modeRaw : "explain";
	const programId = body["program"] === "bba" ? "bba" : "bcom";
	const programLabel = programId === "bba" ? "BBA" : "B.Com";
	const semester = Number(body["semester"]) >= 1 && Number(body["semester"]) <= 6 ? Number(body["semester"]) : 1;
	const subjectId = typeof body["subjectId"] === "string" ? body["subjectId"] : void 0;
	const unitId = typeof body["unitId"] === "string" ? body["unitId"] : void 0;
	const subjectName = typeof body["subjectName"] === "string" ? body["subjectName"].slice(0, 120) : "";
	const unitName = typeof body["unitName"] === "string" ? body["unitName"].slice(0, 160) : "";
	const grounding = await buildGrounding({
		topic,
		program: programId,
		semester,
		...subjectId ? { subjectId } : {},
		...unitId ? { unitId } : {}
	}).catch(() => ({
		context: "",
		sources: []
	}));
	const fullPrompt = `${[
		`You are REVISION Buddy, a personal revision tutor for an Indian ${programLabel} student in Semester ${semester}.`,
		subjectName ? `The student is revising the subject: ${subjectName}.` : "",
		unitName ? `Current chapter: ${unitName}.` : "",
		grounding.context ? "Use the STUDY MATERIAL below as your main source. Follow its wording and terminology; add your own explanation only to fill gaps." : "No stored material matched, so answer from your own knowledge of this syllabus.",
		MODE_INSTRUCTIONS[mode],
		"Do not use markdown symbols such as #, * or **."
	].filter(Boolean).join("\n")}\n\nTopic: ${topic}${grounding.context ? `\n\nContext:\n${grounding.context}` : ""}`;
	const geminiKey = process.env["GEMINI_API_KEY"] || process.env["VITE_GEMINI_API_KEY"];
	if (geminiKey) try {
		console.log("[study] Trying Gemini AI...");
		const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${geminiKey}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ contents: [{ parts: [{ text: fullPrompt }] }] })
		});
		if (response.ok) {
			const text = (await response.json()).candidates?.[0]?.content?.parts?.[0]?.text || "";
			return new Response(text, { headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Cache-Control": "no-store",
				"X-Grounded-Sources": String(grounding.sources.length)
			} });
		}
		console.log("[study] Gemini failed:", response.status);
	} catch (error) {
		console.log("[study] Gemini error:", error);
	}
	const deepseekKey = process.env["DEEPSEEK_API_KEY"] || process.env["VITE_DEEPSEEK_API_KEY"];
	if (deepseekKey) try {
		console.log("[study] Trying DeepSeek AI...");
		const response = await fetch("https://deepseek-v31.p.rapidapi.com/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-rapidapi-host": "deepseek-v31.p.rapidapi.com",
				"x-rapidapi-key": deepseekKey
			},
			body: JSON.stringify({
				messages: [{
					role: "user",
					content: fullPrompt
				}],
				model: "DeepSeek-V3.2"
			})
		});
		if (response.ok) {
			const text = (await response.json()).choices?.[0]?.message?.content || "";
			return new Response(text, { headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Cache-Control": "no-store",
				"X-Grounded-Sources": String(grounding.sources.length)
			} });
		}
		console.log("[study] DeepSeek failed:", response.status);
	} catch (error) {
		console.log("[study] DeepSeek error:", error);
	}
	const bazarKey = process.env["BAZAR_API_KEY"] || process.env["VITE_BAZAR_API_KEY"];
	if (bazarKey) try {
		console.log("[study] Trying Bazar AI...");
		const response = await fetch("https://api.bazar.ai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${bazarKey}`
			},
			body: JSON.stringify({
				model: "gpt-4o-mini",
				messages: [{
					role: "user",
					content: fullPrompt
				}]
			})
		});
		if (response.ok) {
			const text = (await response.json()).choices?.[0]?.message?.content || "";
			return new Response(text, { headers: {
				"Content-Type": "text/plain; charset=utf-8",
				"Cache-Control": "no-store",
				"X-Grounded-Sources": String(grounding.sources.length)
			} });
		}
		console.log("[study] Bazar failed:", response.status);
	} catch (error) {
		console.log("[study] Bazar error:", error);
	}
	console.error("[study] All AI providers failed");
	return new Response("Study buddy temporarily unavailable. Please try again.", { status: 500 });
} } } });
var Route$1 = createFileRoute("/api/cashfree/create-order")({ server: { handlers: { POST: async ({ request }) => {
	const appId = process.env["CASHFREE_APP_ID"] || process.env["VITE_CASHFREE_APP_ID"];
	const secretKey = process.env["CASHFREE_SECRET_KEY"] || process.env["VITE_CASHFREE_SECRET_KEY"];
	if (!appId || !secretKey) return new Response("Cashfree credentials not configured", { status: 500 });
	try {
		const { planId, amount, customerEmail, customerName, customerPhone } = await request.json();
		if (!customerEmail || !amount || Number(amount) <= 0) return new Response("Invalid payment request", { status: 400 });
		const orderId = `ORDER_${Date.now()}_${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
		const sanitizedPhone = String(customerPhone ?? "").replace(/\D/g, "").slice(0, 10);
		const customerId = (customerEmail || "user").replace(/[^a-zA-Z0-9]/g, "") || "user";
		const baseUrl = process.env["VITE_APP_URL"] || "https://myrevision.in";
		const orderPayload = {
			order_id: orderId,
			order_amount: amount,
			order_currency: "INR",
			customer_details: {
				customer_id: customerId,
				customer_email: customerEmail,
				customer_name: customerName || "REVISION User",
				customer_phone: sanitizedPhone.length === 10 ? sanitizedPhone : "9999999999"
			},
			order_meta: {
				return_url: `${baseUrl}/payment?cf_success=true`,
				notify_url: `${baseUrl}/api/cashfree/webhook`
			},
			order_note: `REVISION Premium - ${planId}`
		};
		console.log("[cashfree] Creating payment order", {
			orderId,
			amount,
			customerEmail,
			planId,
			baseUrl
		});
		const cashfreeResponse = await fetch("https://api.cashfree.com/pg/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-api-version": "2023-08-01",
				"x-client-id": appId,
				"x-client-secret": secretKey
			},
			body: JSON.stringify(orderPayload)
		});
		const responseText = await cashfreeResponse.text();
		if (!cashfreeResponse.ok) {
			console.error("Cashfree order creation failed:", responseText);
			return new Response(JSON.stringify({
				error: "Failed to create payment order",
				details: responseText
			}), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		let orderData;
		try {
			orderData = JSON.parse(responseText);
		} catch {
			console.error("Cashfree responded with a non-JSON body:", responseText);
			return new Response(JSON.stringify({ error: "Cashfree returned an unexpected response" }), {
				status: 502,
				headers: { "Content-Type": "application/json" }
			});
		}
		return new Response(JSON.stringify({
			order_id: orderId,
			payment_session_id: orderData.payment_session_id,
			order_token: orderData.order_token,
			order_amount: amount
		}), { headers: { "Content-Type": "application/json" } });
	} catch (error) {
		console.error("Cashfree order creation error:", error);
		return new Response("Internal server error", { status: 500 });
	}
} } } });
var Route = createFileRoute("/api/cashfree/webhook")({ server: { handlers: { POST: async ({ request }) => {
	const secretKey = process.env["CASHFREE_SECRET_KEY"] || process.env["VITE_CASHFREE_SECRET_KEY"];
	if (!secretKey) return new Response("Cashfree secret key not configured", { status: 500 });
	try {
		const body = await request.json();
		const { order } = body.data;
		const signature = request.headers.get("x-webhook-signature");
		if (!signature) return new Response("Missing signature", { status: 400 });
		if (signature !== createHmac("sha256", secretKey).update(JSON.stringify(body.data)).digest("hex")) {
			console.error("Invalid webhook signature");
			return new Response("Invalid signature", { status: 401 });
		}
		if (order.order_status === "PAID") {
			const { data: profileData } = await supabase.from("profiles").select("id").eq("email", order.customer_details.customer_email).maybeSingle();
			if (profileData) {
				await supabase.from("profiles").update({
					is_premium: true,
					premium_since: (/* @__PURE__ */ new Date()).toISOString()
				}).eq("id", profileData.id);
				await supabase.from("payments").insert({
					user_id: profileData.id,
					plan: "premium",
					amount: order.order_amount,
					method: "cashfree",
					status: "paid",
					reference: order.order_id,
					is_demo: false
				});
				console.log(`Payment successful for user ${profileData.id}, order ${order.order_id}`);
			}
		}
		return new Response("OK", { status: 200 });
	} catch (error) {
		console.error("Cashfree webhook error:", error);
		return new Response("Internal server error", { status: 500 });
	}
} } } });
var IndexRoute = Route$22.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$23
});
var AuthenticatedRouteRoute = Route$21.update({
	id: "/_authenticated",
	getParentRoute: () => Route$23
});
var AdminloginRoute = Route$20.update({
	id: "/adminlogin",
	path: "/adminlogin",
	getParentRoute: () => Route$23
});
var AiHelpRoute = Route$24.update({
	id: "/ai-help",
	path: "/ai-help",
	getParentRoute: () => Route$23
});
var AuthRoute = Route$25.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$23
});
var BookmarksRoute = Route$19.update({
	id: "/bookmarks",
	path: "/bookmarks",
	getParentRoute: () => Route$23
});
var DashboardRoute = Route$18.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$23
});
var ElectivesRoute = Route$17.update({
	id: "/electives",
	path: "/electives",
	getParentRoute: () => Route$23
});
var LandingRoute = Route$16.update({
	id: "/landing",
	path: "/landing",
	getParentRoute: () => Route$23
});
var NotificationsRoute = Route$15.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => Route$23
});
var PaymentRoute = Route$28.update({
	id: "/payment",
	path: "/payment",
	getParentRoute: () => Route$23
});
var PremiumRoute = Route$14.update({
	id: "/premium",
	path: "/premium",
	getParentRoute: () => Route$23
});
var PrivacyRoute = Route$13.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$23
});
var ProfileRoute = Route$12.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$23
});
var ProgramSelectionRoute = Route$11.update({
	id: "/program-selection",
	path: "/program-selection",
	getParentRoute: () => Route$23
});
var RefundRoute = Route$10.update({
	id: "/refund",
	path: "/refund",
	getParentRoute: () => Route$23
});
var ResetPasswordRoute = Route$9.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$23
});
var SearchRoute = Route$8.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$23
});
var SemesterSelectionRoute = Route$7.update({
	id: "/semester-selection",
	path: "/semester-selection",
	getParentRoute: () => Route$23
});
var SettingsRoute = Route$6.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$23
});
var TermsRoute = Route$5.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$23
});
var AuthenticatedAdminRoute = Route$4.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
});
var ApiStudyAudioRoute = Route$3.update({
	id: "/api/study-audio",
	path: "/api/study-audio",
	getParentRoute: () => Route$23
});
var ApiStudyHelpRoute = Route$2.update({
	id: "/api/study-help",
	path: "/api/study-help",
	getParentRoute: () => Route$23
});
var ModelPaperPaperIdRoute = Route$26.update({
	id: "/model-paper/$paperId",
	path: "/model-paper/$paperId",
	getParentRoute: () => Route$23
});
var ModelPapersSubjectIdRoute = Route$27.update({
	id: "/model-papers/$subjectId",
	path: "/model-papers/$subjectId",
	getParentRoute: () => Route$23
});
var SubjectSubjectIdRoute = Route$29.update({
	id: "/subject/$subjectId",
	path: "/subject/$subjectId",
	getParentRoute: () => Route$23
});
var UnitUnitIdRoute = Route$30.update({
	id: "/unit/$unitId",
	path: "/unit/$unitId",
	getParentRoute: () => Route$23
});
var ApiCashfreeCreateOrderRoute = Route$1.update({
	id: "/api/cashfree/create-order",
	path: "/api/cashfree/create-order",
	getParentRoute: () => Route$23
});
var ApiCashfreeWebhookRoute = Route.update({
	id: "/api/cashfree/webhook",
	path: "/api/cashfree/webhook",
	getParentRoute: () => Route$23
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AdminloginRoute,
	AiHelpRoute,
	AuthRoute,
	BookmarksRoute,
	DashboardRoute,
	ElectivesRoute,
	LandingRoute,
	NotificationsRoute,
	PaymentRoute,
	PremiumRoute,
	PrivacyRoute,
	ProfileRoute,
	ProgramSelectionRoute,
	RefundRoute,
	ResetPasswordRoute,
	SearchRoute,
	SemesterSelectionRoute,
	SettingsRoute,
	TermsRoute,
	ApiStudyAudioRoute,
	ApiStudyHelpRoute,
	ModelPaperPaperIdRoute,
	ModelPapersSubjectIdRoute,
	SubjectSubjectIdRoute,
	UnitUnitIdRoute,
	ApiCashfreeCreateOrderRoute,
	ApiCashfreeWebhookRoute
};
var routeTree = Route$23._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
