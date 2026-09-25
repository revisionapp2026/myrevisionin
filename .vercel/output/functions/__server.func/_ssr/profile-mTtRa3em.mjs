import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { n as useAuth } from "./auth-fa8YZUgE.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as Highlighter, L as LogOut, O as Receipt, S as Settings, V as LifeBuoy, at as CreditCard, ht as Bookmark, rt as Download, v as Shield } from "../_libs/lucide-react.mjs";
import { a as Screen, i as ListRow, o as ScreenHeader, r as IconTile, t as BottomNav } from "./app-chrome-Bb5PuQcw.mjs";
import { t as Badge } from "./ui-bits-DCyB6evP.mjs";
import { r as useEntitlements } from "./entitlements-vXk3OsoG.mjs";
import { u as subjectsFor } from "./mock-data-CcD4brPZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-mTtRa3em.js
var import_jsx_runtime = require_jsx_runtime();
function ProfileScreen() {
	const { bookmarks, program, semester, reset } = useAppState();
	const { isPremium, planName } = useEntitlements();
	const { user, profile, isAdmin, signOut } = useAuth();
	const navigate = useNavigate();
	const highlightCount = subjectsFor(program, semester).reduce((sum, s) => sum + s.units.reduce((n, u) => n + u.highlights.length, 0), 0);
	const name = profile?.full_name || user?.email?.split("@")[0] || "Student";
	const email = user?.email ?? "student@gmail.com";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, {
			title: "My Profile",
			back: false
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
			nav: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card flex items-center gap-3.5 px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-14 shrink-0 place-items-center rounded-full bg-primary text-[20px] font-bold text-primary-foreground",
						children: name.charAt(0).toUpperCase()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[16px] font-bold",
								children: name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[13px] text-muted-foreground",
								children: email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1.5 inline-block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: isPremium ? "premium" : "accent",
									children: isPremium ? "★ Premium Member" : "Free Member"
								})
							})
						]
					})]
				}),
				!user && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/auth",
					className: "surface-card press mt-3 flex items-center gap-3 px-4 py-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[14.5px] font-semibold",
							children: "Sign in or create an account"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[12.5px] text-muted-foreground",
							children: "Keep your bookmarks safe on every device"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[13px] font-semibold text-primary",
						children: "Go"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-2.5",
					children: [
						isPremium && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
							to: "/payment",
							title: "My Subscriptions",
							leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-[19px]" }) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
							to: "/payment",
							title: "Payment History",
							meta: "1 payment",
							leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, { className: "size-[19px]" }) })
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
							to: "/bookmarks",
							title: "Bookmarks",
							meta: `${bookmarks.length} saved`,
							leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-[19px]" }) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
							to: "/dashboard",
							title: "Highlights",
							meta: `${highlightCount} available`,
							leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlighter, { className: "size-[19px]" }) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
							title: "Download History",
							trailing: false,
							meta: "No downloads yet",
							leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
								tone: "muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-[19px]" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
							to: "/settings",
							title: "Settings",
							leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-[19px]" }) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
							title: "Help & Support",
							trailing: false,
							meta: "reachout.revision@gmail.com",
							leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
								tone: "muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "size-[19px]" })
							})
						}),
						isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
							to: "/admin",
							title: "Admin Panel",
							meta: "Manage content",
							leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
								tone: "accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-[19px]" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListRow, {
							title: user ? "Logout" : "Sign in",
							trailing: false,
							onClick: () => {
								if (!user) {
									navigate({ to: "/auth" });
									return;
								}
								signOut().then(() => {
									reset();
									navigate({
										to: "/auth",
										replace: true
									});
								});
							},
							leading: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTile, {
								tone: "danger",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-[19px]" })
							}),
							className: "text-destructive"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
	] });
}
//#endregion
export { ProfileScreen as component };
