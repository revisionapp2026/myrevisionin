import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, C as Search, N as Moon, _t as BookOpen, bt as ArrowRight, dt as Check, h as Smartphone, ht as Bookmark, m as Sparkles, r as WifiOff, t as Zap, yt as Bell } from "../_libs/lucide-react.mjs";
import { t as revision_logo_default } from "./revision-logo-BPpcyIP8.mjs";
import { a as premiumBenefits, i as plans } from "./mock-data-CcD4brPZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landing-D_JbhKsB.js
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		icon: BookOpen,
		title: "Unit-wise highlights",
		text: "Every subject split into units with short, exam-ready points you can revise in minutes."
	},
	{
		icon: FileText,
		title: "Solved model papers",
		text: "Model Paper 1 & 2 plus a previous-year paper per subject, each question fully answered."
	},
	{
		icon: Sparkles,
		title: "Ask & Revise with AI",
		text: "Type any topic or doubt and get a clear explanation plus practice questions instantly."
	},
	{
		icon: Bookmark,
		title: "Smart bookmarks",
		text: "Save the points that matter and pull them all up in one place before the exam."
	},
	{
		icon: Search,
		title: "Instant search",
		text: "Jump to any subject, unit or concept across the whole syllabus in a keystroke."
	},
	{
		icon: WifiOff,
		title: "Reads offline",
		text: "Material you have opened stays readable without internet, and syncs when you reconnect."
	},
	{
		icon: Bell,
		title: "Updates in-app",
		text: "Get notified the moment new revision points or model papers are published."
	},
	{
		icon: Moon,
		title: "Comfortable dark mode",
		text: "Late-night sessions with adjustable text size and a calm dark theme."
	},
	{
		icon: Smartphone,
		title: "Installs like an app",
		text: "Add REVISION to your home screen and open it straight from your phone."
	}
];
var stats = [
	{
		value: "63",
		label: "Subjects"
	},
	{
		value: "274",
		label: "Units"
	},
	{
		value: "6,100+",
		label: "Revision points"
	},
	{
		value: "182",
		label: "Solved papers"
	}
];
var steps = [
	{
		n: "01",
		title: "Pick your program",
		text: "BBA or B.Com — your syllabus, structured."
	},
	{
		n: "02",
		title: "Choose your semester",
		text: "All six semesters, subject by subject."
	},
	{
		n: "03",
		title: "Revise the highlights",
		text: "Crisp points, solved papers, bookmarks."
	}
];
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 lg:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: revision_logo_default,
								alt: "REVISION",
								width: 40,
								height: 40,
								className: "size-10 shrink-0 rounded-xl object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-display text-lg font-extrabold tracking-tight",
								children: "REVISION"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-9 text-sm font-medium text-muted-foreground lg:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									className: "transition hover:text-foreground",
									children: "Features"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how",
									className: "transition hover:text-foreground",
									children: "How it works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#premium",
									className: "transition hover:text-foreground",
									children: "Premium"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "shrink-0 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition hover:shadow-lift",
							children: "Open the app"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_75%_0%,oklch(0.47_0.16_259/0.14),transparent)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5 text-accent" }), "Built for BBA & B.Com students"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight md:text-5xl xl:text-6xl",
							children: [
								"Revise your entire semester in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "days,"
								}),
								" not weeks"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground",
							children: "Long chapters turned into crisp, exam-ready highlights — with solved model papers, previous-year papers, bookmarks, instant search and an AI tutor for anything you get stuck on."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-card transition hover:shadow-lift",
								children: ["Start revising free", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#features",
								className: "rounded-xl border border-border bg-card px-7 py-3.5 font-semibold transition hover:bg-secondary",
								children: "See what's inside"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4",
							children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-2xl font-extrabold xl:text-3xl",
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground",
								children: s.label
							})] }, s.label))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto w-full max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "brand-gradient absolute -inset-8 rounded-[3rem] opacity-20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card relative rounded-[2rem] p-5 shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-2xl bg-secondary p-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: revision_logo_default,
										alt: "",
										className: "size-10 rounded-xl object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold",
										children: "Financial Accounting"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "5 units · 18 highlights"
									})] })]
								}),
								[
									"Double entry system ensures every transaction has two effects.",
									"Journal is the first book of entry.",
									"Ledger is the principal book of accounts.",
									"Trial balance checks arithmetical accuracy of the ledger."
								].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-snug",
										children: h
									})]
								}, h)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 rounded-2xl bg-primary-soft p-3.5 text-center text-xs font-semibold text-primary",
									children: "Bookmarked for exam day"
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "features",
				className: "border-t border-border/60 bg-card/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold tracking-tight md:text-4xl",
							children: "Everything you need, nothing you don't"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Designed around how students actually revise the week before exams."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6 transition hover:shadow-lift",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: f.text
								})
							]
						}, f.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "how",
				className: "mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold tracking-tight md:text-4xl",
					children: "Up and running in under a minute"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-3",
					children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl font-extrabold text-accent",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-bold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.text
							})
						]
					}, s.n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "premium",
				className: "border-t border-border/60 bg-card/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold tracking-tight md:text-4xl",
							children: "Simple, student-friendly pricing"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Core highlights are free forever. Premium unlocks every solved paper."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2",
						children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `surface-card relative p-7 ${plan.highlight ? "ring-2 ring-accent" : ""}`,
							children: [
								plan.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3.5 py-1 text-xs font-bold text-accent-foreground",
									children: "Best value"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-lg font-bold capitalize",
									children: [plan.id, " Premium"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-4xl font-extrabold",
										children: plan.price
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1.5 text-sm text-muted-foreground",
										children: plan.period
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs font-medium text-accent",
									children: plan.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2.5 text-sm",
									children: premiumBenefits.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), f]
									}, f))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/payment",
									className: "mt-6 block rounded-xl bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition hover:shadow-lift",
									children: ["Get ", plan.id === "yearly" ? "Yearly" : "Lifetime"]
								})
							]
						}, plan.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-6 py-20 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "brand-gradient relative overflow-hidden rounded-3xl px-8 py-16 text-center text-primary-foreground lg:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: revision_logo_default,
							alt: "",
							className: "mx-auto size-16 rounded-2xl object-cover shadow-lift"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-3xl font-extrabold tracking-tight md:text-4xl",
							children: "Your next exam starts with one tap"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-md text-primary-foreground/85",
							children: "Open REVISION, pick your program, and start revising — free."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-card px-8 py-3.5 font-semibold text-foreground shadow-lift transition hover:opacity-95",
							children: ["Open the app", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground lg:flex-row lg:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: revision_logo_default,
								alt: "",
								className: "size-7 rounded-lg object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-bold text-foreground",
								children: "REVISION"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Made for BBA & B.Com students." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap justify-center gap-x-6 gap-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/payment",
									className: "transition hover:text-foreground",
									children: "Premium"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "transition hover:text-foreground",
									children: "Open app"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "transition hover:text-foreground",
									children: "Privacy Policy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/terms",
									className: "transition hover:text-foreground",
									children: "Terms of Use"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/refund",
									className: "transition hover:text-foreground",
									children: "Refunds"
								})
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { LandingPage as component };
