import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAppState } from "./app-state-BlNF1lSi.mjs";
import { n as useAuth } from "./auth-fa8YZUgE.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { C as Search, F as Menu, S as Settings, U as Layers, g as SlidersHorizontal, ht as Bookmark, it as Crown, m as Sparkles, n as X, q as House, s as User, yt as Bell } from "../_libs/lucide-react.mjs";
import { a as Screen, s as SubjectGlyph, t as BottomNav } from "./app-chrome-Bb5PuQcw.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as revision_logo_default } from "./revision-logo-BPpcyIP8.mjs";
import { i as SectionTitle } from "./ui-bits-DCyB6evP.mjs";
import { r as useEntitlements } from "./entitlements-vXk3OsoG.mjs";
import { o as programLabel, t as electivesFor, u as subjectsFor } from "./mock-data-CcD4brPZ.mjs";
import { t as notificationsQuery } from "./content-CFMTJWpr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-CCjzZwxu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var OPEN_KEY = "revision.opens";
var SESSION_KEY = "revision.opened";
/** Catchy header CTA next to the bell; hidden for Lifetime accounts (account status is the source of truth). */
function PromoBanner() {
	const { isLifetime } = useEntitlements();
	const { loading } = useAuth();
	if (loading || isLifetime) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/payment",
		search: { promo: "lifetime" },
		"aria-label": "Get Lifetime Access at just ₹399",
		className: "press group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-3 py-1.5 shadow-card ring-1 ring-white/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-3.5 animate-pulse text-white drop-shadow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[11.5px] font-extrabold leading-tight text-white drop-shadow-sm",
				children: ["Lifetime Access ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded bg-white/25 px-1 py-px",
					children: "₹399"
				})]
			})
		]
	});
}
/** Shows the Lifetime offer about once every 10 app opens for non-Lifetime students. */
function PromoPopup() {
	const { isLifetime } = useEntitlements();
	const { loading } = useAuth();
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (loading || isLifetime) return;
		try {
			if (sessionStorage.getItem(SESSION_KEY)) return;
			sessionStorage.setItem(SESSION_KEY, "1");
			const count = (Number(localStorage.getItem(OPEN_KEY)) || 0) + 1;
			localStorage.setItem(OPEN_KEY, String(count));
			if (count % 10 === 0) {
				const t = setTimeout(() => setOpen(true), 1200);
				return () => clearTimeout(t);
			}
		} catch {}
	}, [loading, isLifetime]);
	if (!open || isLifetime) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center bg-black/50 px-6",
		role: "dialog",
		"aria-label": "Lifetime offer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "screen-enter relative w-full max-w-sm rounded-2xl bg-card px-5 pb-5 pt-6 text-center shadow-lift",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close offer",
					onClick: () => setOpen(false),
					className: "press absolute right-3 top-3 grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-auto grid size-14 place-items-center rounded-full bg-premium/15 text-premium",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[12px] font-bold uppercase tracking-wide text-accent",
					children: "Limited offer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-[20px] font-extrabold",
					children: "Get Lifetime Access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-[14px] text-muted-foreground",
					children: [
						"Only ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "text-foreground",
							children: "₹399"
						}),
						" — every paper, answer and the study buddy, forever."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/payment",
					search: { promo: "lifetime" },
					onClick: () => setOpen(false),
					className: "press mt-4 block rounded-xl bg-accent py-3 text-[15px] font-bold text-accent-foreground",
					children: "Get Lifetime"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					className: "mt-3 text-[13px] font-semibold text-muted-foreground",
					children: "Maybe later"
				})
			]
		})
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var items = [
	{
		to: "/dashboard",
		label: "Home",
		icon: House
	},
	{
		to: "/ai-help",
		label: "Ask & Revise",
		icon: Sparkles
	},
	{
		to: "/search",
		label: "Search",
		icon: Search
	},
	{
		to: "/bookmarks",
		label: "Bookmarks",
		icon: Bookmark
	},
	{
		to: "/electives",
		label: "Electives",
		icon: Layers
	},
	{
		to: "/notifications",
		label: "Notifications",
		icon: Bell
	},
	{
		to: "/payment",
		label: "Premium",
		icon: Crown
	},
	{
		to: "/profile",
		label: "Profile",
		icon: User
	},
	{
		to: "/settings",
		label: "Settings",
		icon: Settings
	}
];
function SideMenu() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
			"aria-label": "Open menu",
			className: "press grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: "left",
			className: "w-[78vw] max-w-xs p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
				className: "brand-header px-5 py-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
					className: "flex items-center gap-2 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: revision_logo_default,
						alt: "",
						className: "h-10 w-auto object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "REVISION menu"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "grid gap-0.5 p-2",
				children: items.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					onClick: () => setOpen(false),
					activeOptions: { exact: true },
					activeProps: { className: "bg-primary-soft !text-primary" },
					className: "press flex items-center gap-3 rounded-lg px-3 py-3 text-[14.5px] font-semibold text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[18px]" }), label]
				}, to))
			})]
		})]
	});
}
function Dashboard() {
	const navigate = useNavigate();
	const { program, semester, ready, readNotifications, setProgram, setSemester } = useAppState();
	const { isPremium, planName } = useEntitlements();
	const { user, profile } = useAuth();
	const [query, setQuery] = (0, import_react.useState)("");
	const { data: notifications = [] } = useQuery(notificationsQuery(program, semester));
	const unreadCount = notifications.filter((n) => !readNotifications.includes(n.id)).length;
	const list = (0, import_react.useMemo)(() => subjectsFor(program, semester), [program, semester]);
	const electives = (0, import_react.useMemo)(() => electivesFor(program), [program]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return q ? list.filter((s) => s.name.toLowerCase().includes(q)) : list;
	}, [list, query]);
	const name = profile?.full_name?.split(" ")[0] || user?.email?.split("@")[0] || "Student";
	(0, import_react.useEffect)(() => {
		if (ready && (!program || !semester)) navigate({
			to: "/program-selection",
			replace: true
		});
	}, [
		ready,
		program,
		semester,
		navigate
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "brand-header sticky top-0 z-20 px-4 pb-5 pt-[max(0.85rem,env(safe-area-inset-top))]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideMenu, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: revision_logo_default,
								alt: "REVISION",
								className: "h-9 w-auto object-contain"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoBanner, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/notifications",
								"aria-label": "Notifications",
								className: "press relative grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-[19px]" }), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-1 top-1 grid min-w-[16px] place-items-center rounded-full bg-accent px-1 text-[10px] font-bold leading-4 text-accent-foreground",
									children: unreadCount > 9 ? "9+" : unreadCount
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 text-[21px] font-extrabold text-white",
						children: [
							"Hi ",
							name,
							" 👋"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 text-[13px] text-white/80",
						children: [
							programLabel(program),
							" • Semester ",
							semester ?? 1
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, {
			nav: true,
			className: "pt-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "-mt-9 rounded-xl border border-border bg-card px-3.5 shadow-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2.5 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-[18px] shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search subjects...",
							"aria-label": "Search subjects",
							className: "w-full bg-transparent text-[14px] outline-none placeholder:text-muted-foreground"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "surface-card mt-3 px-3.5 py-3",
					"aria-label": "Change course and semester",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-2 text-[12px] font-bold text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4 text-primary" }), "Change my selection"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[1fr_1.15fr] gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Program"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							"aria-label": "Program",
							value: program ?? "bcom",
							onChange: (event) => setProgram(event.target.value),
							className: "h-10 w-full rounded-lg border border-border bg-background px-3 text-[13.5px] font-semibold outline-none focus:border-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "bcom",
								children: "B.Com"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "bba",
								children: "BBA"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Semester"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							"aria-label": "Semester",
							value: semester ?? 1,
							onChange: (event) => setSemester(Number(event.target.value)),
							className: "h-10 w-full rounded-lg border border-border bg-background px-3 text-[13.5px] font-semibold outline-none focus:border-primary",
							children: [
								1,
								2,
								3,
								4,
								5,
								6
							].map((number) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: number,
								children: ["Semester ", number]
							}, number))
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ai-help",
					className: "press mt-4 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 shrink-0 place-items-center rounded-[10px] bg-primary-soft text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[15px] font-bold",
								children: "Ask & Revise"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[13px] text-muted-foreground",
								children: "Any topic explained with practice questions"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							"aria-hidden": "true",
							children: "›"
						})
					]
				}),
				electives.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/electives",
					className: "press mt-2.5 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 shrink-0 place-items-center rounded-[10px] bg-accent-soft text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[15px] font-bold",
								children: "Electives"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[13px] text-muted-foreground",
								children: "Finance, Marketing, HR & E-Commerce"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							"aria-hidden": "true",
							children: "›"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					title: "Your Subjects",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/search",
						className: "text-[13px] font-semibold text-primary",
						children: "View All"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2.5",
					children: [filtered.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/subject/$subjectId",
						params: { subjectId: s.id },
						className: "surface-card press flex items-center gap-3 px-3.5 py-3 hover:shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubjectGlyph, { icon: s.icon }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-[15px] font-semibold",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block text-[13px] text-muted-foreground",
									children: [s.units.length, " Units"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								"aria-hidden": "true",
								children: "›"
							})
						]
					}, s.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "py-8 text-center text-sm text-muted-foreground",
						children: [
							"No subjects match “",
							query,
							"”."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: isPremium ? "/premium" : "/payment",
					className: "press mt-5 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 shrink-0 place-items-center rounded-[10px] bg-premium/15 text-premium",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[15px] font-bold",
								children: isPremium ? "Premium Dashboard" : "Unlock Premium"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[13px] text-muted-foreground",
								children: isPremium ? "Unlocked content, papers & progress" : "Model papers, solved answers & more"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-lg bg-accent px-3 py-1.5 text-[12px] font-bold text-accent-foreground",
							children: isPremium ? "Open" : "View"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromoPopup, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
	] });
}
//#endregion
export { Dashboard as component };
