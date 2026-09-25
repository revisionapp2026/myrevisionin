import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-ZxCzTnFP.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as useAuth } from "./auth-DJPsMw-X.mjs";
import { t as slugify } from "./syllabus-BL3GhEHP.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as LayoutDashboard, Q as FileUp, _t as BookOpen, at as CreditCard, ft as ChartColumn, j as Pencil, k as Plus, lt as ChevronLeft, n as X, o as Users, q as House, u as Trash2, yt as Bell, z as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as Screen, o as ScreenHeader } from "./app-chrome-Bb5PuQcw.mjs";
import { a as useQueryClient, r as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DjtfOGui.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ICONS = [
	"management",
	"accounting",
	"economics",
	"law",
	"marketing",
	"hr",
	"stats",
	"finance"
];
var ELECTIVE_GROUPS = [
	"Finance",
	"Marketing",
	"HR",
	"E-Commerce"
];
var CATEGORIES = [
	"general",
	"material",
	"paper",
	"premium"
];
var TABS = [
	{
		id: "analytics",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		id: "content",
		label: "Syllabus",
		icon: BookOpen
	},
	{
		id: "papers",
		label: "Model papers",
		icon: ChartColumn
	},
	{
		id: "notifications",
		label: "Notifications",
		icon: Bell
	},
	{
		id: "users",
		label: "Students",
		icon: Users
	},
	{
		id: "payments",
		label: "Payments",
		icon: CreditCard
	},
	{
		id: "import",
		label: "Import content",
		icon: FileUp
	}
];
var SCOPED = ["content", "papers"];
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block text-[12px] font-semibold text-muted-foreground",
			children: label
		}), children]
	});
}
var inputCls = "w-full rounded-lg border border-border bg-card px-3 py-2 text-[14px] outline-none focus:border-primary";
function Card({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "surface-card grid gap-2.5 px-3.5 py-3.5",
		children
	});
}
function Row({ title, meta, onOpen, onEdit, onDelete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card flex items-center gap-2 px-3 py-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onOpen,
				disabled: !onOpen,
				className: "min-w-0 flex-1 text-left disabled:cursor-default",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-[14.5px] font-semibold",
					children: title
				}), meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-[12.5px] text-muted-foreground",
					children: meta
				})]
			}),
			onEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onEdit,
				"aria-label": "Edit",
				className: "press p-1.5 text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-[16px]" })
			}),
			onDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onDelete,
				"aria-label": "Delete",
				className: "press p-1.5 text-destructive",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-[16px]" })
			})
		]
	});
}
function Toggle({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-full px-3 py-1.5 text-[12.5px] font-semibold", active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"),
		children
	});
}
function useSave(keys) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: async (fn) => {
			const { error } = await fn();
			if (error) throw new Error(error.message);
		},
		onSuccess: () => keys.forEach((k) => void qc.invalidateQueries({ queryKey: k }))
	});
}
function Err({ error }) {
	if (!error) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[12.5px] font-medium text-destructive",
		children: error.message
	});
}
function AdminPanel() {
	const { isAdmin, loading } = useAuth();
	const [tab, setTab] = (0, import_react.useState)("analytics");
	const [program, setProgram] = (0, import_react.useState)("bba");
	const [semester, setSemester] = (0, import_react.useState)(1);
	const [group, setGroup] = (0, import_react.useState)(ELECTIVE_GROUPS[0]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Admin Panel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 flex justify-center text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-6 animate-spin" })
	}) })] });
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, { title: "Admin Panel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Screen, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "surface-card mt-6 px-5 py-6 text-center text-sm text-muted-foreground",
		children: "This area is for administrators only."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/dashboard",
		className: "mt-4 block text-center text-sm font-semibold text-primary",
		children: "Back to app"
	})] })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHeader, {
			title: "Admin Workspace",
			subtitle: "Live content management",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/dashboard",
				"aria-label": "Open student app",
				className: "press grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-[18px]" })
			}),
			home: false
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-[65px] z-10 border-b border-border bg-card lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-x-auto px-2 [scrollbar-width:none]",
				children: TABS.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTab(id),
					className: cn("flex shrink-0 items-center gap-1.5 px-3 py-3 text-[13px] font-semibold", tab === id ? "border-b-2 border-accent text-accent" : "border-b-2 border-transparent text-muted-foreground"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }),
						" ",
						label
					]
				}, id))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-[calc(100dvh-65px)] max-w-7xl lg:grid-cols-[264px_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebar, {
				tab,
				setTab
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0 px-4 py-5 lg:px-8 lg:py-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-xl font-extrabold",
							children: TABS.find((item) => item.id === tab)?.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] text-muted-foreground",
							children: "Manage your REVISION app from one place."
						})]
					}),
					SCOPED.includes(tab) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: ["bba", "bcom"].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									active: program === p,
									onClick: () => setProgram(p),
									children: p === "bba" ? "BBA" : "B.Com"
								}, p))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [[
									1,
									2,
									3,
									4,
									5,
									6
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toggle, {
									active: semester === s,
									onClick: () => setSemester(s),
									children: ["Sem ", s]
								}, s)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									active: semester === null,
									onClick: () => setSemester(null),
									children: "Electives"
								})]
							}),
							semester === null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: ELECTIVE_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									active: group === g,
									onClick: () => setGroup(g),
									children: g
								}, g))
							})
						]
					}),
					tab === "content" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentTab, {
						program,
						semester,
						group
					}),
					tab === "papers" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PapersTab, {
						program,
						semester,
						group
					}),
					tab === "notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsTab, {}),
					tab === "users" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersTab, {}),
					tab === "payments" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentsTab, {}),
					tab === "analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsTab, {}),
					tab === "import" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportTab, {})
				]
			})]
		})
	] });
}
function AdminSidebar({ tab, setTab }) {
	const { data: s } = useAdminStats();
	const badge = {
		analytics: void 0,
		content: s?.subjects,
		papers: s?.papers,
		notifications: s?.published,
		users: s?.students,
		payments: s?.paidPayments,
		import: void 0
	};
	const conversion = s && s.students ? Math.round(s.premium / s.students * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "hidden border-r border-border bg-card p-4 lg:block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-3 pb-3 text-[11px] font-bold uppercase text-muted-foreground",
				children: "Workspace"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "grid gap-1",
				children: TABS.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setTab(id),
					className: cn("press flex h-11 items-center gap-3 rounded-lg px-3 text-left text-[13.5px] font-semibold", tab === id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[18px]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate",
							children: label
						}),
						badge[id] !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("rounded-full px-2 py-0.5 text-[11px] font-bold", tab === id ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"),
							children: badge[id]
						})
					]
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-2.5 rounded-lg border border-border bg-muted/40 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-bold uppercase text-muted-foreground",
					children: "Live snapshot"
				}), [
					["Students", s?.students],
					["Premium", s?.premium],
					["Units", s?.units],
					["Revision points", s?.points],
					["Papers", s?.papers],
					["Solved questions", s?.questions],
					["Collected", s ? `₹${s.revenue}` : void 0],
					["Conversion", s ? `${conversion}%` : void 0]
				].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-2 text-[12.5px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold",
						children: value ?? "—"
					})]
				}, label))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-lg border border-border bg-muted/50 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] font-bold",
					children: "Live database"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[11.5px] text-muted-foreground",
					children: "Same database as the student app — edits appear for students instantly."
				})]
			})
		]
	});
}
function useSubjects(program, semester, group) {
	return useQuery({
		queryKey: [
			"admin-subjects",
			program,
			semester,
			semester === null ? group : null
		],
		queryFn: async () => {
			let q = supabase.from("subjects").select("id, name, icon, position, program, semester").eq("program", program);
			q = semester === null ? q.is("semester", null).eq("elective_group", group) : q.eq("semester", semester);
			const { data, error } = await q.order("position");
			if (error) throw error;
			return data ?? [];
		}
	});
}
function ContentTab({ program, semester, group }) {
	const [subjectId, setSubjectId] = (0, import_react.useState)(null);
	const [unitId, setUnitId] = (0, import_react.useState)(null);
	if (unitId && subjectId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PointsEditor, {
		unitId,
		onBack: () => setUnitId(null)
	});
	if (subjectId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitsEditor, {
		subjectId,
		onBack: () => setSubjectId(null),
		onOpenUnit: setUnitId
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubjectsEditor, {
		program,
		semester,
		group,
		onOpen: setSubjectId
	});
}
function BackBar({ label, onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onBack,
		className: "press mb-3 flex items-center gap-1 text-[13px] font-semibold text-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }),
			" ",
			label
		]
	});
}
function SubjectsEditor({ program, semester, group, onOpen }) {
	const { data: subjects = [], isLoading } = useSubjects(program, semester, group);
	const save = useSave([[
		"admin-subjects",
		program,
		semester,
		semester === null ? group : null
	], ["electives", program]]);
	const [form, setForm] = (0, import_react.useState)(null);
	const submit = () => {
		if (!form || !form.name.trim()) return;
		const name = form.name.trim();
		if (form.id) save.mutate(() => supabase.from("subjects").update({
			name,
			icon: form.icon
		}).eq("id", form.id).then((r) => ({ error: r.error })));
		else {
			const id = semester === null ? `${program}-el-${slugify(group)}-${slugify(name)}` : `${program}-s${semester}-${slugify(name)}`;
			save.mutate(() => supabase.from("subjects").insert({
				id,
				program,
				semester,
				elective_group: semester === null ? group : null,
				name,
				icon: form.icon,
				position: subjects.length + 1
			}).then((r) => ({ error: r.error })));
		}
		setForm(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2.5",
		children: [
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-5 animate-spin text-muted-foreground" }),
			subjects.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				title: s.name,
				meta: s.id,
				onOpen: () => onOpen(s.id),
				onEdit: () => setForm({
					id: s.id,
					name: s.name,
					icon: s.icon
				}),
				onDelete: () => {
					if (!confirm(`Delete "${s.name}" and all its units and points?`)) return;
					save.mutate(() => supabase.from("subjects").delete().eq("id", s.id).then((r) => ({ error: r.error })));
				}
			}, s.id)),
			form ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[14px] font-bold",
						children: form.id ? "Edit subject" : "New subject"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setForm(null),
						"aria-label": "Cancel",
						className: "press text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Subject name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputCls,
						value: form.name,
						onChange: (e) => setForm({
							...form,
							name: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Icon",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: inputCls,
						value: form.icon,
						onChange: (e) => setForm({
							...form,
							icon: e.target.value
						}),
						children: ICONS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: i,
							children: i
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { error: save.error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: submit,
					className: "press rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground",
					children: "Save subject"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setForm({
					name: "",
					icon: "management"
				}),
				className: "press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add subject"]
			})
		]
	});
}
function UnitsEditor({ subjectId, onBack, onOpenUnit }) {
	const key = ["admin-units", subjectId];
	const { data: units = [], isLoading } = useQuery({
		queryKey: key,
		queryFn: async () => {
			const { data, error } = await supabase.from("units").select("id, unit_number, title, subject_id").eq("subject_id", subjectId).order("unit_number");
			if (error) throw error;
			return data ?? [];
		}
	});
	const save = useSave([key]);
	const [form, setForm] = (0, import_react.useState)(null);
	const submit = () => {
		if (!form || !form.title.trim()) return;
		const title = form.title.trim();
		if (form.id) save.mutate(() => supabase.from("units").update({
			title,
			unit_number: form.unit_number
		}).eq("id", form.id).then((r) => ({ error: r.error })));
		else save.mutate(() => supabase.from("units").insert({
			id: `${subjectId}-u${form.unit_number}`,
			subject_id: subjectId,
			unit_number: form.unit_number,
			title
		}).then((r) => ({ error: r.error })));
		setForm(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackBar, {
				label: "All subjects",
				onBack
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-5 animate-spin text-muted-foreground" }),
			units.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				title: `Unit ${u.unit_number}: ${u.title}`,
				meta: "Tap to edit revision points",
				onOpen: () => onOpenUnit(u.id),
				onEdit: () => setForm({
					id: u.id,
					unit_number: u.unit_number,
					title: u.title
				}),
				onDelete: () => {
					if (!confirm(`Delete Unit ${u.unit_number} and its points?`)) return;
					save.mutate(() => supabase.from("units").delete().eq("id", u.id).then((r) => ({ error: r.error })));
				}
			}, u.id)),
			form ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[14px] font-bold",
						children: form.id ? "Edit unit" : "New unit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setForm(null),
						"aria-label": "Cancel",
						className: "press text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Unit number",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: 1,
						className: inputCls,
						value: form.unit_number,
						onChange: (e) => setForm({
							...form,
							unit_number: Number(e.target.value) || 1
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Unit title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputCls,
						value: form.title,
						onChange: (e) => setForm({
							...form,
							title: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { error: save.error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: submit,
					className: "press rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground",
					children: "Save unit"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setForm({
					unit_number: units.length + 1,
					title: ""
				}),
				className: "press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add unit"]
			})
		]
	});
}
function PointsEditor({ unitId, onBack }) {
	const key = ["admin-points", unitId];
	const { data: points = [], isLoading } = useQuery({
		queryKey: key,
		queryFn: async () => {
			const { data, error } = await supabase.from("revision_points").select("id, kind, content, display_order").eq("unit_id", unitId).order("display_order");
			if (error) throw error;
			return data ?? [];
		}
	});
	const save = useSave([key, ["revision-points", unitId]]);
	const [kind, setKind] = (0, import_react.useState)("highlight");
	const [form, setForm] = (0, import_react.useState)(null);
	const list = points.filter((p) => p.kind === kind);
	const submit = () => {
		if (!form || !form.content.trim()) return;
		const content = form.content.trim();
		if (form.id) save.mutate(() => supabase.from("revision_points").update({ content }).eq("id", form.id).then((r) => ({ error: r.error })));
		else save.mutate(() => supabase.from("revision_points").insert({
			unit_id: unitId,
			kind,
			content,
			point_number: list.length + 1,
			display_order: list.length + 1
		}).then((r) => ({ error: r.error })));
		setForm(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackBar, {
				label: "All units",
				onBack
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					active: kind === "highlight",
					onClick: () => setKind("highlight"),
					children: "Highlight points"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					active: kind === "bookmark",
					onClick: () => setKind("bookmark"),
					children: "Key points"
				})]
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-5 animate-spin text-muted-foreground" }),
			list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				title: `${i + 1}. ${p.content.slice(0, 90)}${p.content.length > 90 ? "…" : ""}`,
				onEdit: () => setForm({
					id: p.id,
					content: p.content
				}),
				onDelete: () => {
					if (!confirm("Delete this point?")) return;
					save.mutate(() => supabase.from("revision_points").delete().eq("id", p.id).then((r) => ({ error: r.error })));
				}
			}, p.id)),
			form ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Point text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 5,
						className: inputCls,
						value: form.content,
						onChange: (e) => setForm({
							...form,
							content: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { error: save.error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: submit,
						className: "press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground",
						children: "Save point"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setForm(null),
						className: "press rounded-lg border border-border px-4 text-[14px] font-semibold",
						children: "Cancel"
					})]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setForm({ content: "" }),
				className: "press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add point"]
			})
		]
	});
}
function PapersTab({ program, semester, group }) {
	const { data: subjects = [] } = useSubjects(program, semester, group);
	const [subjectId, setSubjectId] = (0, import_react.useState)(null);
	const [paperId, setPaperId] = (0, import_react.useState)(null);
	if (paperId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionsEditor, {
		paperId,
		onBack: () => setPaperId(null)
	});
	if (subjectId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PapersEditor, {
		subjectId,
		onBack: () => setSubjectId(null),
		onOpen: setPaperId
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2.5",
		children: subjects.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
			title: s.name,
			meta: "Manage papers",
			onOpen: () => setSubjectId(s.id)
		}, s.id))
	});
}
function PapersEditor({ subjectId, onBack, onOpen }) {
	const key = ["admin-papers", subjectId];
	const { data: papers = [], isLoading } = useQuery({
		queryKey: key,
		queryFn: async () => {
			const { data, error } = await supabase.from("model_papers").select("id, title, subtitle, paper_type, is_paid, position").eq("subject_id", subjectId).order("position");
			if (error) throw error;
			return data ?? [];
		}
	});
	const save = useSave([key, ["model-papers", subjectId]]);
	const [form, setForm] = (0, import_react.useState)(null);
	const submit = () => {
		if (!form || !form.title.trim()) return;
		const patch = {
			title: form.title.trim(),
			subtitle: form.subtitle.trim() || null,
			paper_type: form.paper_type,
			is_paid: form.is_paid
		};
		if (form.id) save.mutate(() => supabase.from("model_papers").update(patch).eq("id", form.id).then((r) => ({ error: r.error })));
		else save.mutate(() => supabase.from("model_papers").insert({
			id: `${subjectId}-${slugify(form.title)}`,
			subject_id: subjectId,
			position: papers.length + 1,
			...patch
		}).then((r) => ({ error: r.error })));
		setForm(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackBar, {
				label: "All subjects",
				onBack
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-5 animate-spin text-muted-foreground" }),
			papers.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				title: p.title,
				meta: `${p.paper_type === "previous_year" ? "Previous year" : "Model"} · ${p.is_paid ? "Premium" : "Free"}`,
				onOpen: () => onOpen(p.id),
				onEdit: () => setForm({
					id: p.id,
					title: p.title,
					subtitle: p.subtitle ?? "",
					paper_type: p.paper_type,
					is_paid: p.is_paid
				}),
				onDelete: () => {
					if (!confirm(`Delete "${p.title}" and its questions?`)) return;
					save.mutate(() => supabase.from("model_papers").delete().eq("id", p.id).then((r) => ({ error: r.error })));
				}
			}, p.id)),
			form ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Paper title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputCls,
						value: form.title,
						onChange: (e) => setForm({
							...form,
							title: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Subtitle",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputCls,
						value: form.subtitle,
						onChange: (e) => setForm({
							...form,
							subtitle: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Type",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: inputCls,
						value: form.paper_type,
						onChange: (e) => setForm({
							...form,
							paper_type: e.target.value
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "model",
							children: "Model paper"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "previous_year",
							children: "Previous year paper"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-[13.5px] font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: form.is_paid,
						onChange: (e) => setForm({
							...form,
							is_paid: e.target.checked
						})
					}), "Premium only"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { error: save.error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: submit,
						className: "press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground",
						children: "Save paper"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setForm(null),
						className: "press rounded-lg border border-border px-4 text-[14px] font-semibold",
						children: "Cancel"
					})]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setForm({
					title: "",
					subtitle: "",
					paper_type: "model",
					is_paid: true
				}),
				className: "press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add paper"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperUploader, {
				subjectId,
				existing: papers.length
			})] })
		]
	});
}
var QUESTION_START = /^(?:q(?:uestion)?\s*)?(\d{1,2})\s*[.):\]]\s*(.*)$/i;
var SKIP_LINE = /^(part\s+[abc]\b|section\s+[abc]\b|answer\s+(any|all)\b|time\s*:|max(imum)?\s*marks|total\s*marks)/i;
var ANSWER_PREFIX = /^(ans(wer)?|sol(ution)?)\s*[:.-]\s*/i;
function parsePaperText(raw) {
	const out = [];
	let current = null;
	for (const line of raw.split("\n")) {
		const text = line.trim();
		if (!text || SKIP_LINE.test(text)) continue;
		const match = QUESTION_START.exec(text);
		if (match && match[2] !== void 0) {
			let question = match[2].trim();
			let marks = null;
			const marksMatch = /[([](\d{1,2})\s*(?:marks?|m)?[)\]]\s*$/i.exec(question);
			if (marksMatch?.[1]) {
				marks = Number(marksMatch[1]);
				question = question.slice(0, marksMatch.index).trim();
			}
			current = {
				question_no: Number(match[1]),
				question,
				answer_lines: [],
				marks
			};
			out.push(current);
			continue;
		}
		if (!current) continue;
		if (!current.question) {
			current.question = text;
			continue;
		}
		current.answer_lines.push(text.replace(ANSWER_PREFIX, "").trim());
	}
	const merged = [];
	for (const q of out) {
		if (!q.question) continue;
		const prev = merged.find((m) => m.question_no === q.question_no);
		if (prev) {
			prev.question = `${prev.question}\nOR\n${q.question}`;
			prev.answer_lines = [...prev.answer_lines, ...q.answer_lines];
		} else merged.push(q);
	}
	return merged.sort((a, b) => a.question_no - b.question_no);
}
function PaperUploader({ subjectId, existing }) {
	const qc = useQueryClient();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [title, setTitle] = (0, import_react.useState)("Previous Year Question Paper");
	const [type, setType] = (0, import_react.useState)("previous_year");
	const [isPaid, setIsPaid] = (0, import_react.useState)(true);
	const [text, setText] = (0, import_react.useState)("");
	const [parsed, setParsed] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(null);
	const upload = useMutation({
		mutationFn: async () => {
			if (!title.trim()) throw new Error("Give the paper a title.");
			const questions = parsed ?? parsePaperText(text);
			if (!questions.length) throw new Error("No questions found — number each question like “1.” or “Q1.”");
			const paperId = `${subjectId}-${slugify(title)}`;
			const paper = await supabase.from("model_papers").upsert({
				id: paperId,
				subject_id: subjectId,
				title: title.trim(),
				subtitle: type === "previous_year" ? "Previous year paper" : "Model paper",
				paper_type: type,
				is_paid: isPaid,
				position: existing + 1
			});
			if (paper.error) throw new Error(paper.error.message);
			const del = await supabase.from("paper_questions").delete().eq("paper_id", paperId);
			if (del.error) throw new Error(del.error.message);
			const rows = questions.map((q, i) => ({
				paper_id: paperId,
				question_no: q.question_no || i + 1,
				question: q.question,
				answer_lines: q.answer_lines.length ? q.answer_lines : ["Answer is being added."],
				marks: q.marks,
				display_order: i + 1
			}));
			const ins = await supabase.from("paper_questions").insert(rows);
			if (ins.error) throw new Error(ins.error.message);
			return questions.length;
		},
		onSuccess: (count) => {
			setDone(`${count} questions are live in the app.`);
			setText("");
			setParsed(null);
			qc.invalidateQueries({ queryKey: ["admin-papers", subjectId] });
			qc.invalidateQueries({ queryKey: ["model-papers", subjectId] });
			qc.invalidateQueries({ queryKey: ["admin-stats"] });
		}
	});
	if (!open) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: "press flex items-center justify-center gap-2 rounded-lg bg-foreground py-3 text-[14px] font-bold text-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, { className: "size-4" }), " Upload a past paper"]
	});
	const answered = parsed?.filter((q) => q.answer_lines.length).length ?? 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[14.5px] font-bold",
				children: "Upload a past paper"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setOpen(false),
				"aria-label": "Close",
				className: "press p-1 text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[12.5px] text-muted-foreground",
			children: "Paste the paper text. Number every question like “1.” or “Q1.” and put the answer on the lines below it. Part A/B/C headings are ignored."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Paper title",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: inputCls,
				value: title,
				onChange: (e) => setTitle(e.target.value)
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Type",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: inputCls,
				value: type,
				onChange: (e) => setType(e.target.value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "previous_year",
					children: "Previous year paper"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "model",
					children: "Model paper"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "flex items-center gap-2 text-[13.5px] font-medium",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: isPaid,
					onChange: (e) => setIsPaid(e.target.checked)
				}),
				" ",
				"Premium only"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Paper text",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 10,
				className: inputCls,
				placeholder: "1. Define management. (5 marks)\nManagement is the art of getting things done through people.\n\n2. Explain the functions of management.\nPlanning, organising, staffing, directing and controlling.",
				value: text,
				onChange: (e) => {
					setText(e.target.value);
					setParsed(null);
					setDone(null);
				}
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "press inline-flex cursor-pointer items-center gap-2 text-[13px] font-semibold text-primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, { className: "size-4" }),
				" Choose a .txt file",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					accept: ".txt,text/plain",
					className: "hidden",
					onChange: async (e) => {
						const file = e.target.files?.[0];
						if (!file) return;
						setText(await file.text());
						setParsed(null);
						setDone(null);
					}
				})
			]
		}),
		parsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border border-border bg-muted/40 p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[13px] font-bold",
					children: [
						parsed.length,
						" questions found · ",
						answered,
						" with answers"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 grid gap-1.5",
					children: parsed.slice(0, 5).map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "text-[12.5px] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-foreground",
								children: [
									"Q",
									q.question_no,
									"."
								]
							}),
							" ",
							q.question.slice(0, 90),
							q.marks ? ` · ${q.marks} marks` : ""
						]
					}, q.question_no))
				}),
				parsed.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-[12px] text-muted-foreground",
					children: [
						"and ",
						parsed.length - 5,
						" more…"
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { error: upload.error }),
		done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[12.5px] font-semibold text-accent",
			children: done
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					setDone(null);
					setParsed(parsePaperText(text));
				},
				className: "press flex-1 rounded-lg border border-border py-2.5 text-[14px] font-bold",
				children: "Check paper"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: upload.isPending || !text.trim(),
				onClick: () => upload.mutate(),
				className: "press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground disabled:opacity-50",
				children: upload.isPending ? "Uploading…" : "Publish to app"
			})]
		})
	] });
}
function QuestionsEditor({ paperId, onBack }) {
	const key = ["admin-questions", paperId];
	const { data: questions = [], isLoading } = useQuery({
		queryKey: key,
		queryFn: async () => {
			const { data, error } = await supabase.from("paper_questions").select("id, question_no, question, answer_lines, marks").eq("paper_id", paperId).order("question_no");
			if (error) throw error;
			return data ?? [];
		}
	});
	const save = useSave([key, ["model-paper", paperId]]);
	const [form, setForm] = (0, import_react.useState)(null);
	const submit = () => {
		if (!form || !form.question.trim()) return;
		const patch = {
			question_no: form.question_no,
			question: form.question.trim(),
			answer_lines: form.answer.split("\n").map((l) => l.trim()).filter(Boolean),
			marks: form.marks ? Number(form.marks) : null,
			display_order: form.question_no
		};
		if (form.id) save.mutate(() => supabase.from("paper_questions").update(patch).eq("id", form.id).then((r) => ({ error: r.error })));
		else save.mutate(() => supabase.from("paper_questions").insert({
			paper_id: paperId,
			...patch
		}).then((r) => ({ error: r.error })));
		setForm(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackBar, {
				label: "All papers",
				onBack
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-5 animate-spin text-muted-foreground" }),
			questions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				title: `Q${q.question_no}. ${q.question.slice(0, 80)}`,
				meta: `${q.answer_lines.length} answer line(s)${q.marks ? ` · ${q.marks} marks` : ""}`,
				onEdit: () => setForm({
					id: q.id,
					question_no: q.question_no,
					question: q.question,
					answer: q.answer_lines.join("\n"),
					marks: q.marks ? String(q.marks) : ""
				}),
				onDelete: () => {
					if (!confirm("Delete this question?")) return;
					save.mutate(() => supabase.from("paper_questions").delete().eq("id", q.id).then((r) => ({ error: r.error })));
				}
			}, q.id)),
			form ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Question number",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: 1,
						className: inputCls,
						value: form.question_no,
						onChange: (e) => setForm({
							...form,
							question_no: Number(e.target.value) || 1
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Question",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 3,
						className: inputCls,
						value: form.question,
						onChange: (e) => setForm({
							...form,
							question: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Answer (one paragraph per line)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 7,
						className: inputCls,
						value: form.answer,
						onChange: (e) => setForm({
							...form,
							answer: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Marks (optional)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputCls,
						value: form.marks,
						onChange: (e) => setForm({
							...form,
							marks: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { error: save.error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: submit,
						className: "press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground",
						children: "Save question"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setForm(null),
						className: "press rounded-lg border border-border px-4 text-[14px] font-semibold",
						children: "Cancel"
					})]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setForm({
					question_no: questions.length + 1,
					question: "",
					answer: "",
					marks: ""
				}),
				className: "press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add question"]
			})
		]
	});
}
function NotificationsTab() {
	const key = ["admin-notifications"];
	const { data: items = [], isLoading } = useQuery({
		queryKey: key,
		queryFn: async () => {
			const { data, error } = await supabase.from("notifications").select("id, title, body, category, link, program, semester, is_published, created_at").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	const save = useSave([key, ["notifications"]]);
	const [form, setForm] = (0, import_react.useState)(null);
	const submit = () => {
		if (!form || !form.title.trim() || !form.body.trim()) return;
		const patch = {
			title: form.title.trim(),
			body: form.body.trim(),
			category: form.category,
			link: form.link.trim() || null,
			program: form.program || null,
			semester: form.semester ? Number(form.semester) : null,
			is_published: form.is_published
		};
		if (form.id) save.mutate(() => supabase.from("notifications").update(patch).eq("id", form.id).then((r) => ({ error: r.error })));
		else save.mutate(() => supabase.from("notifications").insert(patch).then((r) => ({ error: r.error })));
		setForm(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2.5",
		children: [
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-5 animate-spin text-muted-foreground" }),
			items.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
				title: n.title,
				meta: `${n.category} · ${n.is_published ? "published" : "draft"} · ${new Date(n.created_at).toLocaleDateString()}`,
				onEdit: () => setForm({
					id: n.id,
					title: n.title,
					body: n.body,
					category: n.category,
					link: n.link ?? "",
					program: n.program ?? "",
					semester: n.semester ? String(n.semester) : "",
					is_published: n.is_published
				}),
				onDelete: () => {
					if (!confirm("Delete this notification?")) return;
					save.mutate(() => supabase.from("notifications").delete().eq("id", n.id).then((r) => ({ error: r.error })));
				}
			}, n.id)),
			form ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Title",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputCls,
						value: form.title,
						onChange: (e) => setForm({
							...form,
							title: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Message",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 4,
						className: inputCls,
						value: form.body,
						onChange: (e) => setForm({
							...form,
							body: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Category",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: inputCls,
						value: form.category,
						onChange: (e) => setForm({
							...form,
							category: e.target.value
						}),
						children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: c === "material" ? "New study material" : c === "paper" ? "Model paper" : c
						}, c))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "In-app link (optional, e.g. /payment)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: inputCls,
						value: form.link,
						onChange: (e) => setForm({
							...form,
							link: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Program (optional)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: inputCls,
							value: form.program,
							onChange: (e) => setForm({
								...form,
								program: e.target.value
							}),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "All"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "bba",
									children: "BBA"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "bcom",
									children: "B.Com"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Semester (optional)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: inputCls,
							value: form.semester,
							onChange: (e) => setForm({
								...form,
								semester: e.target.value
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All"
							}), [
								1,
								2,
								3,
								4,
								5,
								6
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: s,
								children: ["Semester ", s]
							}, s))]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-[13.5px] font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: form.is_published,
						onChange: (e) => setForm({
							...form,
							is_published: e.target.checked
						})
					}), "Published (visible to students)"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { error: save.error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: submit,
						className: "press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground",
						children: "Save notification"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setForm(null),
						className: "press rounded-lg border border-border px-4 text-[14px] font-semibold",
						children: "Cancel"
					})]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setForm({
					title: "",
					body: "",
					category: "material",
					link: "",
					program: "",
					semester: "",
					is_published: true
				}),
				className: "press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " New notification"]
			})
		]
	});
}
function UsersTab() {
	const { data: users = [], isLoading, error } = useQuery({
		queryKey: ["admin-users"],
		queryFn: async () => {
			const { data, error } = await supabase.from("profiles").select("id, full_name, email, program_id, semester, is_premium, plan, created_at").order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2.5",
		children: [
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-5 animate-spin text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { error }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[12.5px] font-semibold text-muted-foreground",
				children: [
					users.length,
					" registered ",
					users.length === 1 ? "student" : "students"
				]
			}),
			users.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card px-3.5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[14.5px] font-bold",
							children: u.full_name || "No name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[12.5px] text-muted-foreground",
							children: u.email || u.id
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("shrink-0 rounded-full px-2.5 py-1 text-[11.5px] font-bold", u.is_premium ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"),
						children: u.is_premium ? u.plan ? `Premium · ${u.plan}` : "Premium" : "Free"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 text-[12px] text-muted-foreground",
					children: [
						u.program_id ? u.program_id.toUpperCase() : "Program not set",
						u.semester ? ` · Semester ${u.semester}` : "",
						" · joined",
						" ",
						new Date(u.created_at).toLocaleDateString()
					]
				})]
			}, u.id)),
			!isLoading && users.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "surface-card px-4 py-6 text-center text-[13px] text-muted-foreground",
				children: "No students have signed up yet."
			})
		]
	});
}
function PaymentsTab() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["admin-payments"],
		queryFn: async () => {
			const [pay, prof] = await Promise.all([supabase.from("payments").select("*").order("created_at", { ascending: false }).limit(200), supabase.from("profiles").select("id, full_name, email")]);
			if (pay.error) throw pay.error;
			if (prof.error) throw prof.error;
			const names = new Map((prof.data ?? []).map((p) => [p.id, p.email || p.full_name || p.id]));
			return (pay.data ?? []).map((p) => ({
				...p,
				who: names.get(p.user_id) ?? p.user_id
			}));
		}
	});
	const rows = data ?? [];
	const paid = rows.filter((r) => r.status === "paid");
	const total = paid.reduce((sum, r) => sum + r.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2.5",
		children: [
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-5 animate-spin text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { error }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card px-3.5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] font-semibold text-muted-foreground",
						children: "Successful"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[20px] font-extrabold",
						children: paid.length
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card px-3.5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] font-semibold text-muted-foreground",
						children: "Collected"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[20px] font-extrabold",
						children: ["₹", total]
					})]
				})]
			}),
			rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card px-3.5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-[14px] font-bold",
							children: [
								"₹",
								p.amount,
								" · ",
								p.plan
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[12.5px] text-muted-foreground",
							children: p.who
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("shrink-0 rounded-full px-2.5 py-1 text-[11.5px] font-bold capitalize", p.status === "paid" ? "bg-accent text-accent-foreground" : p.status === "failed" ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"),
						children: p.status
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 text-[12px] text-muted-foreground",
					children: [
						p.method ?? "—",
						" · ",
						p.reference ?? "no reference",
						" · ",
						p.is_demo ? "test mode" : "live",
						" ",
						"· ",
						new Date(p.created_at).toLocaleString()
					]
				})]
			}, p.id)),
			!isLoading && rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "surface-card px-4 py-6 text-center text-[13px] text-muted-foreground",
				children: "No payments recorded yet."
			})
		]
	});
}
function useAdminStats() {
	return useQuery({
		queryKey: ["admin-stats"],
		staleTime: 3e4,
		queryFn: async () => {
			const since = (/* @__PURE__ */ new Date(Date.now() - 6048e5)).toISOString();
			const head = (table) => supabase.from(table).select("id", {
				count: "exact",
				head: true
			});
			const [subjects, units, points, papers, questions, profiles, notifications] = await Promise.all([
				head("subjects"),
				head("units"),
				head("revision_points"),
				head("model_papers"),
				head("paper_questions"),
				head("profiles"),
				head("notifications")
			]);
			const [premium, newStudents, previousYear, freePapers, published] = await Promise.all([
				supabase.from("profiles").select("id", {
					count: "exact",
					head: true
				}).eq("is_premium", true),
				supabase.from("profiles").select("id", {
					count: "exact",
					head: true
				}).gte("created_at", since),
				supabase.from("model_papers").select("id", {
					count: "exact",
					head: true
				}).eq("paper_type", "previous_year"),
				supabase.from("model_papers").select("id", {
					count: "exact",
					head: true
				}).eq("is_paid", false),
				supabase.from("notifications").select("id", {
					count: "exact",
					head: true
				}).eq("is_published", true)
			]);
			const [pay, subjectRows] = await Promise.all([supabase.from("payments").select("amount, status, created_at").limit(1e3), supabase.from("subjects").select("program, semester, elective_group")]);
			const paid = (pay.data ?? []).filter((p) => p.status === "paid");
			const buckets = /* @__PURE__ */ new Map();
			for (const s of subjectRows.data ?? []) {
				const label = s.semester ? `${s.program === "bba" ? "BBA" : "B.Com"} Sem ${s.semester}` : `${s.program === "bba" ? "BBA" : "B.Com"} Electives`;
				buckets.set(label, (buckets.get(label) ?? 0) + 1);
			}
			return {
				subjects: subjects.count ?? 0,
				units: units.count ?? 0,
				points: points.count ?? 0,
				papers: papers.count ?? 0,
				previousYear: previousYear.count ?? 0,
				freePapers: freePapers.count ?? 0,
				questions: questions.count ?? 0,
				students: profiles.count ?? 0,
				premium: premium.count ?? 0,
				newStudents: newStudents.count ?? 0,
				notifications: notifications.count ?? 0,
				published: published.count ?? 0,
				paidPayments: paid.length,
				revenue: paid.reduce((n, p) => n + (p.amount ?? 0), 0),
				revenue7d: paid.filter((p) => p.created_at >= since).reduce((n, p) => n + (p.amount ?? 0), 0),
				coverage: [...buckets.entries()].map(([label, count]) => ({
					label,
					subjects: count
				})).sort((a, b) => a.label.localeCompare(b.label))
			};
		}
	});
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "surface-card px-3.5 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] font-semibold text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[20px] font-extrabold",
				children: value
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11.5px] text-muted-foreground",
				children: hint
			})
		]
	});
}
function Bar({ label, value, max }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between text-[12.5px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: value
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-2 overflow-hidden rounded-full bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-primary",
				style: { width: `${max ? Math.max(6, value / max * 100) : 0}%` }
			})
		})]
	});
}
function AnalyticsTab() {
	const { data, isLoading, error } = useAdminStats();
	const s = data;
	const conversion = s && s.students ? Math.round(s.premium / s.students * 100) : 0;
	const avgPoints = s && s.units ? Math.round(s.points / s.units) : 0;
	const avgQuestions = s && s.papers ? Math.round(s.questions / s.papers) : 0;
	const maxCoverage = s ? Math.max(1, ...s.coverage.map((c) => c.subjects)) : 1;
	if (isLoading || !s) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { error }), !error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-5 animate-spin text-muted-foreground" })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12.5px] font-bold uppercase tracking-wide text-muted-foreground",
					children: "Students"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2.5 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Registered",
							value: s.students,
							hint: `${s.newStudents} joined in 7 days`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Premium",
							value: s.premium,
							hint: `${conversion}% conversion`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Collected",
							value: `₹${s.revenue}`,
							hint: `₹${s.revenue7d} in 7 days`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Successful payments",
							value: s.paidPayments
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12.5px] font-bold uppercase tracking-wide text-muted-foreground",
					children: "Study library"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2.5 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Subjects",
							value: s.subjects
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Units",
							value: s.units,
							hint: `${avgPoints} points per unit`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Revision points",
							value: s.points
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Papers",
							value: s.papers,
							hint: `${avgQuestions} questions per paper`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Past-year papers",
							value: s.previousYear
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Free papers",
							value: s.freePapers,
							hint: `${s.papers - s.freePapers} premium`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Solved questions",
							value: s.questions
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Announcements",
							value: s.notifications,
							hint: `${s.published} live`
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "surface-card grid gap-3 px-3.5 py-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12.5px] font-bold uppercase tracking-wide text-muted-foreground",
					children: "Subjects by semester"
				}), s.coverage.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					label: c.label,
					value: c.subjects,
					max: maxCoverage
				}, c.label))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] leading-relaxed text-muted-foreground",
				children: "These numbers are read live from the same database the student app uses — anything you change here is visible to students straight away."
			})
		]
	});
}
var SAMPLE = `{
  "program": "bba",
  "semester": 1,
  "name": "Business Communication",
  "icon": "management",
  "units": [
    {
      "unit_number": 1,
      "title": "Introduction to Communication",
      "highlights": ["Communication is the exchange of meaning."],
      "key_points": ["Remember the 7 Cs of communication."]
    }
  ],
  "papers": [
    {
      "title": "Model Paper 1",
      "type": "model",
      "is_paid": false,
      "questions": [
        { "question": "Define communication.", "answer": "Communication is the process of sharing meaning.", "marks": 5 }
      ]
    }
  ]
}`;
function buildPreview(raw) {
	const payload = JSON.parse(raw);
	if (!payload.program || !payload.semester || !payload.name) throw new Error("program, semester and name are required");
	if (payload.program !== "bba" && payload.program !== "bcom") throw new Error("program must be \"bba\" or \"bcom\"");
	const units = payload.units ?? [];
	for (const u of units) if (!u.unit_number || !u.title) throw new Error("every unit needs unit_number and title");
	const papers = payload.papers ?? [];
	for (const p of papers) if (!p.title) throw new Error("every paper needs a title");
	return {
		payload,
		subjectId: `${payload.program}-s${payload.semester}-${slugify(payload.name)}`,
		units: units.length,
		points: units.reduce((n, u) => n + (u.highlights?.length ?? 0) + (u.key_points?.length ?? 0), 0),
		papers: papers.length,
		questions: papers.reduce((n, p) => n + (p.questions?.length ?? 0), 0)
	};
}
function ImportTab() {
	const qc = useQueryClient();
	const [text, setText] = (0, import_react.useState)("");
	const [log, setLog] = (0, import_react.useState)(null);
	const [replace, setReplace] = (0, import_react.useState)(true);
	const [preview, setPreview] = (0, import_react.useState)(null);
	const [parseError, setParseError] = (0, import_react.useState)(null);
	const check = () => {
		setLog(null);
		try {
			setPreview(buildPreview(text));
			setParseError(null);
		} catch (e) {
			setPreview(null);
			setParseError(e.message);
		}
	};
	const run = useMutation({
		mutationFn: async (p) => {
			const { payload, subjectId } = p;
			const subject = await supabase.from("subjects").upsert({
				id: subjectId,
				program: payload.program,
				semester: payload.semester,
				name: payload.name,
				icon: payload.icon ?? "management",
				position: payload.semester
			});
			if (subject.error) throw new Error(subject.error.message);
			let unitCount = 0;
			let pointCount = 0;
			for (const unit of payload.units ?? []) {
				const unitId = `${subjectId}-u${unit.unit_number}`;
				const u = await supabase.from("units").upsert({
					id: unitId,
					subject_id: subjectId,
					unit_number: unit.unit_number,
					title: unit.title
				});
				if (u.error) throw new Error(u.error.message);
				unitCount += 1;
				if (replace) {
					const del = await supabase.from("revision_points").delete().eq("unit_id", unitId);
					if (del.error) throw new Error(del.error.message);
				}
				const rows = [...(unit.highlights ?? []).map((content, i) => ({
					unit_id: unitId,
					kind: "highlight",
					content,
					point_number: i + 1,
					display_order: i + 1
				})), ...(unit.key_points ?? []).map((content, i) => ({
					unit_id: unitId,
					kind: "bookmark",
					content,
					point_number: i + 1,
					display_order: i + 1
				}))];
				if (rows.length) {
					const pts = await supabase.from("revision_points").insert(rows);
					if (pts.error) throw new Error(pts.error.message);
					pointCount += rows.length;
				}
			}
			let paperCount = 0;
			let questionCount = 0;
			const papers = payload.papers ?? [];
			for (let idx = 0; idx < papers.length; idx += 1) {
				const paper = papers[idx];
				const paperId = `${subjectId}-${slugify(paper.title)}`;
				const saved = await supabase.from("model_papers").upsert({
					id: paperId,
					subject_id: subjectId,
					title: paper.title,
					subtitle: "Quick Exam Revision",
					description: paper.description ?? null,
					paper_type: paper.type === "previous_year" ? "previous_year" : "model",
					is_paid: paper.is_paid ?? idx > 0,
					position: idx + 1
				});
				if (saved.error) throw new Error(saved.error.message);
				paperCount += 1;
				if (replace) {
					const del = await supabase.from("paper_questions").delete().eq("paper_id", paperId);
					if (del.error) throw new Error(del.error.message);
				}
				const questions = (paper.questions ?? []).map((q, i) => ({
					paper_id: paperId,
					question_no: q.question_no ?? i + 1,
					question: q.question,
					answer_lines: (q.answer ?? "Answer is being added.").split("\n").map((l) => l.trim()).filter(Boolean),
					marks: q.marks ?? null,
					display_order: i + 1
				}));
				if (questions.length) {
					const qs = await supabase.from("paper_questions").upsert(questions, { onConflict: "paper_id,question_no" });
					if (qs.error) throw new Error(qs.error.message);
					questionCount += questions.length;
				}
			}
			return `Imported "${payload.name}" — ${unitCount} units, ${pointCount} points, ${paperCount} papers, ${questionCount} questions.`;
		},
		onSuccess: (message) => {
			setLog(message);
			setText("");
			setPreview(null);
			qc.invalidateQueries();
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 place-items-center rounded-lg bg-primary-soft text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, { className: "size-[18px]" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[14px] font-bold",
					children: "Import a subject"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] text-muted-foreground",
					children: "Upload a JSON file or paste its contents"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12.5px] leading-relaxed text-muted-foreground",
				children: "Paste one subject with its units, revision points and model papers. Check it first, then apply. Subjects, units and papers with the same name are updated instead of duplicated."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
				label: "JSON",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "press mb-2 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-[13px] font-semibold hover:bg-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, { className: "size-4" }),
						" Choose JSON file",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "application/json,.json",
							className: "sr-only",
							onChange: (event) => {
								const file = event.target.files?.[0];
								if (!file) return;
								file.text().then((contents) => {
									setText(contents);
									setPreview(null);
									setParseError(null);
								});
							}
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 12,
					className: cn(inputCls, "font-mono text-[12px]"),
					placeholder: SAMPLE,
					value: text,
					onChange: (e) => {
						setText(e.target.value);
						setPreview(null);
						setParseError(null);
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-semibold",
						children: "Existing points and answers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] leading-relaxed text-muted-foreground",
						children: replace ? "Old points and questions for these units and papers are removed first." : "New points and questions are added on top of what is already there."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					active: replace,
					onClick: () => setReplace((v) => !v),
					children: replace ? "Replace" : "Add"
				})]
			}),
			parseError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12.5px] font-semibold text-destructive",
				children: parseError
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { error: run.error }),
			log && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12.5px] font-semibold text-primary",
				children: log
			}),
			preview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-muted/40 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13.5px] font-bold",
						children: preview.payload.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[12px] text-muted-foreground",
						children: [
							preview.payload.program === "bba" ? "BBA" : "B.Com",
							" • Semester",
							" ",
							preview.payload.semester,
							" • ",
							preview.subjectId
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-[12.5px]",
						children: [
							preview.units,
							" units, ",
							preview.points,
							" points, ",
							preview.papers,
							" papers,",
							" ",
							preview.questions,
							" questions"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-1.5 grid gap-0.5 text-[12px] text-muted-foreground",
						children: [(preview.payload.units ?? []).slice(0, 8).map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Unit ",
							u.unit_number,
							": ",
							u.title,
							" (",
							(u.highlights?.length ?? 0) + (u.key_points?.length ?? 0),
							" points)"
						] }, u.unit_number)), (preview.payload.papers ?? []).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							p.title,
							" (",
							p.questions?.length ?? 0,
							" questions)"
						] }, p.title))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: run.isPending,
					onClick: () => run.mutate(preview),
					className: "press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground disabled:opacity-50",
					children: run.isPending ? "Importing…" : "Apply to the app"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !text.trim(),
					onClick: check,
					className: "press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground disabled:opacity-50",
					children: "Check content"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setText(SAMPLE);
						setPreview(null);
						setParseError(null);
					},
					className: "press rounded-lg border border-border px-4 text-[13.5px] font-semibold",
					children: "Use sample"
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[12px] leading-relaxed text-muted-foreground",
			children: "Word documents: copy the unit text into the points field of the Content tab, or convert the document to this JSON shape and paste it here."
		})]
	});
}
//#endregion
export { AdminPanel as component };
