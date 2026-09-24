import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  BarChart3,
  Bell,
  BookOpen,
  ChevronLeft,
  CreditCard,
  FileUp,
  Home,
  LayoutDashboard,
  Loader2,
  Pencil,
  Plus,
  Trash2,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import { slugify } from "@/lib/syllabus";
import { Screen, ScreenHeader } from "@/components/app-chrome";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel — REVISION" },
      {
        name: "description",
        content: "Manage subjects, units, revision points, model papers and notifications.",
      },
      { property: "og:title", content: "Admin Panel — REVISION" },
      { property: "og:description", content: "Manage REVISION study content." },
    ],
  }),
  component: AdminPanel,
});

const ICONS = [
  "management",
  "accounting",
  "economics",
  "law",
  "marketing",
  "hr",
  "stats",
  "finance",
] as const;
const ELECTIVE_GROUPS = ["Finance", "Marketing", "HR", "E-Commerce"] as const;
const CATEGORIES = ["general", "material", "paper", "premium"] as const;
type Tab = "content" | "papers" | "notifications" | "users" | "payments" | "analytics" | "import";
const TABS: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: "analytics", label: "Dashboard", icon: LayoutDashboard },
  { id: "content", label: "Syllabus", icon: BookOpen },
  { id: "papers", label: "Model papers", icon: BarChart3 },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "users", label: "Students", icon: Users },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "import", label: "Import content", icon: FileUp },
];
const SCOPED: Tab[] = ["content", "papers"];

/* ---------------- shared bits ---------------- */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] font-semibold text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-card px-3 py-2 text-[14px] outline-none focus:border-primary";

function Card({ children }: { children: React.ReactNode }) {
  return <div className="surface-card grid gap-2.5 px-3.5 py-3.5">{children}</div>;
}

function Row({
  title,
  meta,
  onOpen,
  onEdit,
  onDelete,
}: {
  title: string;
  meta?: string;
  onOpen?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}) {
  return (
    <div className="surface-card flex items-center gap-2 px-3 py-2.5">
      <button
        type="button"
        onClick={onOpen}
        disabled={!onOpen}
        className="min-w-0 flex-1 text-left disabled:cursor-default"
      >
        <span className="block truncate text-[14.5px] font-semibold">{title}</span>
        {meta && <span className="block truncate text-[12.5px] text-muted-foreground">{meta}</span>}
      </button>
      {onEdit && (
        <button
          type="button"
          onClick={onEdit}
          aria-label="Edit"
          className="press p-1.5 text-muted-foreground"
        >
          <Pencil className="size-[16px]" />
        </button>
      )}
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          aria-label="Delete"
          className="press p-1.5 text-destructive"
        >
          <Trash2 className="size-[16px]" />
        </button>
      )}
    </div>
  );
}

function Toggle({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1.5 text-[12.5px] font-semibold",
        active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
      )}
    >
      {children}
    </button>
  );
}

function useSave(keys: unknown[][]) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (fn: () => PromiseLike<{ error: { message: string } | null }>) => {
      const { error } = await fn();
      if (error) throw new Error(error.message);
    },
    onSuccess: () => keys.forEach((k) => void qc.invalidateQueries({ queryKey: k })),
  });
}

function Err({ error }: { error: unknown }) {
  if (!error) return null;
  return <p className="text-[12.5px] font-medium text-destructive">{(error as Error).message}</p>;
}

/* ---------------- panel ---------------- */

function AdminPanel() {
  const { isAdmin, loading } = useAuth();
  const [tab, setTab] = useState<Tab>("analytics");
  const [program, setProgram] = useState("bba");
  const [semester, setSemester] = useState<number | null>(1);
  const [group, setGroup] = useState<string>(ELECTIVE_GROUPS[0]);

  if (loading) {
    return (
      <>
        <ScreenHeader title="Admin Panel" />
        <Screen>
          <div className="mt-10 flex justify-center text-muted-foreground">
            <Loader2 className="size-6 animate-spin" />
          </div>
        </Screen>
      </>
    );
  }

  if (!isAdmin) {
    return (
      <>
        <ScreenHeader title="Admin Panel" />
        <Screen>
          <p className="surface-card mt-6 px-5 py-6 text-center text-sm text-muted-foreground">
            This area is for administrators only.
          </p>
          <Link
            to="/dashboard"
            className="mt-4 block text-center text-sm font-semibold text-primary"
          >
            Back to app
          </Link>
        </Screen>
      </>
    );
  }

  return (
    <>
      <ScreenHeader
        title="Admin Workspace"
        subtitle="Live content management"
        action={
          <Link
            to="/dashboard"
            aria-label="Open student app"
            className="press grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15"
          >
            <Home className="size-[18px]" />
          </Link>
        }
        home={false}
      />
      <div className="sticky top-[65px] z-10 border-b border-border bg-card lg:hidden">
        <div className="flex gap-1 overflow-x-auto px-2 [scrollbar-width:none]">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 px-3 py-3 text-[13px] font-semibold",
                tab === id
                  ? "border-b-2 border-accent text-accent"
                  : "border-b-2 border-transparent text-muted-foreground",
              )}
            >
              <Icon className="size-4" /> {label}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto grid min-h-[calc(100dvh-65px)] max-w-7xl lg:grid-cols-[264px_minmax(0,1fr)]">
        <AdminSidebar tab={tab} setTab={setTab} />
        <main className="min-w-0 px-4 py-5 lg:px-8 lg:py-7">
          <div className="mb-5">
            <h1 className="text-xl font-extrabold">
              {TABS.find((item) => item.id === tab)?.label}
            </h1>
            <p className="text-[13px] text-muted-foreground">
              Manage your REVISION app from one place.
            </p>
          </div>

          {SCOPED.includes(tab) && (
            <div className="mb-3 grid gap-2">
              <div className="flex gap-2">
                {["bba", "bcom"].map((p) => (
                  <Toggle key={p} active={program === p} onClick={() => setProgram(p)}>
                    {p === "bba" ? "BBA" : "B.Com"}
                  </Toggle>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((s) => (
                  <Toggle key={s} active={semester === s} onClick={() => setSemester(s)}>
                    Sem {s}
                  </Toggle>
                ))}
                <Toggle active={semester === null} onClick={() => setSemester(null)}>
                  Electives
                </Toggle>
              </div>
              {semester === null && (
                <div className="flex flex-wrap gap-2">
                  {ELECTIVE_GROUPS.map((g) => (
                    <Toggle key={g} active={group === g} onClick={() => setGroup(g)}>
                      {g}
                    </Toggle>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === "content" && <ContentTab program={program} semester={semester} group={group} />}
          {tab === "papers" && <PapersTab program={program} semester={semester} group={group} />}
          {tab === "notifications" && <NotificationsTab />}
          {tab === "users" && <UsersTab />}
          {tab === "payments" && <PaymentsTab />}
          {tab === "analytics" && <AnalyticsTab />}
          {tab === "import" && <ImportTab />}
        </main>
      </div>
    </>
  );
}

function AdminSidebar({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) {
  const { data: s } = useAdminStats();
  const badge: Record<Tab, number | undefined> = {
    analytics: undefined,
    content: s?.subjects,
    papers: s?.papers,
    notifications: s?.published,
    users: s?.students,
    payments: s?.paidPayments,
    import: undefined,
  };
  const conversion = s && s.students ? Math.round((s.premium / s.students) * 100) : 0;

  return (
    <aside className="hidden border-r border-border bg-card p-4 lg:block">
      <p className="px-3 pb-3 text-[11px] font-bold uppercase text-muted-foreground">Workspace</p>
      <nav className="grid gap-1">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "press flex h-11 items-center gap-3 rounded-lg px-3 text-left text-[13.5px] font-semibold",
              tab === id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Icon className="size-[18px]" />
            <span className="min-w-0 flex-1 truncate">{label}</span>
            {badge[id] !== undefined && (
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[11px] font-bold",
                  tab === id ? "bg-white/20 text-white" : "bg-muted text-muted-foreground",
                )}
              >
                {badge[id]}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-6 grid gap-2.5 rounded-lg border border-border bg-muted/40 p-3">
        <p className="text-[11px] font-bold uppercase text-muted-foreground">Live snapshot</p>
        {(
          [
            ["Students", s?.students],
            ["Premium", s?.premium],
            ["Units", s?.units],
            ["Revision points", s?.points],
            ["Papers", s?.papers],
            ["Solved questions", s?.questions],
            ["Collected", s ? `₹${s.revenue}` : undefined],
            ["Conversion", s ? `${conversion}%` : undefined],
          ] as [string, number | string | undefined][]
        ).map(([label, value]) => (
          <div key={label} className="flex items-baseline justify-between gap-2 text-[12.5px]">
            <span className="text-muted-foreground">{label}</span>
            <span className="font-bold">{value ?? "—"}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-border bg-muted/50 p-3">
        <p className="text-[12px] font-bold">Live database</p>
        <p className="mt-1 text-[11.5px] text-muted-foreground">
          Same database as the student app — edits appear for students instantly.
        </p>
      </div>
    </aside>
  );
}

/* ---------------- subjects / units / points ---------------- */

type DbSubject = {
  id: string;
  name: string;
  icon: string;
  position: number;
  program: string;
  semester: number | null;
};
type DbUnit = { id: string; unit_number: number; title: string; subject_id: string };
type DbPoint = { id: string; kind: string; content: string; display_order: number };

function useSubjects(program: string, semester: number | null, group?: string) {
  return useQuery({
    queryKey: ["admin-subjects", program, semester, semester === null ? group : null],
    queryFn: async () => {
      let q = supabase
        .from("subjects")
        .select("id, name, icon, position, program, semester")
        .eq("program", program);
      q =
        semester === null
          ? q.is("semester", null).eq("elective_group", group!)
          : q.eq("semester", semester);
      const { data, error } = await q.order("position");
      if (error) throw error;
      return (data ?? []) as DbSubject[];
    },
  });
}

function ContentTab({
  program,
  semester,
  group,
}: {
  program: string;
  semester: number | null;
  group: string;
}) {
  const [subjectId, setSubjectId] = useState<string | null>(null);
  const [unitId, setUnitId] = useState<string | null>(null);

  if (unitId && subjectId) {
    return <PointsEditor unitId={unitId} onBack={() => setUnitId(null)} />;
  }
  if (subjectId) {
    return (
      <UnitsEditor subjectId={subjectId} onBack={() => setSubjectId(null)} onOpenUnit={setUnitId} />
    );
  }
  return (
    <SubjectsEditor program={program} semester={semester} group={group} onOpen={setSubjectId} />
  );
}

function BackBar({ label, onBack }: { label: string; onBack: () => void }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="press mb-3 flex items-center gap-1 text-[13px] font-semibold text-primary"
    >
      <ChevronLeft className="size-4" /> {label}
    </button>
  );
}

function SubjectsEditor({
  program,
  semester,
  group,
  onOpen,
}: {
  program: string;
  semester: number | null;
  group: string;
  onOpen: (id: string) => void;
}) {
  const { data: subjects = [], isLoading } = useSubjects(program, semester, group);
  const save = useSave([
    ["admin-subjects", program, semester, semester === null ? group : null],
    ["electives", program],
  ]);
  const [form, setForm] = useState<{ id?: string; name: string; icon: string } | null>(null);

  const submit = () => {
    if (!form || !form.name.trim()) return;
    const name = form.name.trim();
    if (form.id) {
      save.mutate(() =>
        supabase
          .from("subjects")
          .update({ name, icon: form.icon })
          .eq("id", form.id!)
          .then((r) => ({ error: r.error })),
      );
    } else {
      const id =
        semester === null
          ? `${program}-el-${slugify(group)}-${slugify(name)}`
          : `${program}-s${semester}-${slugify(name)}`;
      save.mutate(() =>
        supabase
          .from("subjects")
          .insert({
            id,
            program,
            semester,
            elective_group: semester === null ? group : null,
            name,
            icon: form.icon,
            position: subjects.length + 1,
          })
          .then((r) => ({ error: r.error })),
      );
    }
    setForm(null);
  };

  return (
    <div className="grid gap-2.5">
      {isLoading && <Loader2 className="mx-auto size-5 animate-spin text-muted-foreground" />}
      {subjects.map((s) => (
        <Row
          key={s.id}
          title={s.name}
          meta={s.id}
          onOpen={() => onOpen(s.id)}
          onEdit={() => setForm({ id: s.id, name: s.name, icon: s.icon })}
          onDelete={() => {
            if (!confirm(`Delete "${s.name}" and all its units and points?`)) return;
            save.mutate(() =>
              supabase
                .from("subjects")
                .delete()
                .eq("id", s.id)
                .then((r) => ({ error: r.error })),
            );
          }}
        />
      ))}

      {form ? (
        <Card>
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-bold">{form.id ? "Edit subject" : "New subject"}</p>
            <button
              type="button"
              onClick={() => setForm(null)}
              aria-label="Cancel"
              className="press text-muted-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
          <Field label="Subject name">
            <input
              className={inputCls}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Field>
          <Field label="Icon">
            <select
              className={inputCls}
              value={form.icon}
              onChange={(e) => setForm({ ...form, icon: e.target.value })}
            >
              {ICONS.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </Field>
          <Err error={save.error} />
          <button
            type="button"
            onClick={submit}
            className="press rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground"
          >
            Save subject
          </button>
        </Card>
      ) : (
        <button
          type="button"
          onClick={() => setForm({ name: "", icon: "management" })}
          className="press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary"
        >
          <Plus className="size-4" /> Add subject
        </button>
      )}
    </div>
  );
}

function UnitsEditor({
  subjectId,
  onBack,
  onOpenUnit,
}: {
  subjectId: string;
  onBack: () => void;
  onOpenUnit: (id: string) => void;
}) {
  const key = ["admin-units", subjectId];
  const { data: units = [], isLoading } = useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("units")
        .select("id, unit_number, title, subject_id")
        .eq("subject_id", subjectId)
        .order("unit_number");
      if (error) throw error;
      return (data ?? []) as DbUnit[];
    },
  });
  const save = useSave([key]);
  const [form, setForm] = useState<{ id?: string; unit_number: number; title: string } | null>(
    null,
  );

  const submit = () => {
    if (!form || !form.title.trim()) return;
    const title = form.title.trim();
    if (form.id) {
      save.mutate(() =>
        supabase
          .from("units")
          .update({ title, unit_number: form.unit_number })
          .eq("id", form.id!)
          .then((r) => ({ error: r.error })),
      );
    } else {
      save.mutate(() =>
        supabase
          .from("units")
          .insert({
            id: `${subjectId}-u${form.unit_number}`,
            subject_id: subjectId,
            unit_number: form.unit_number,
            title,
          })
          .then((r) => ({ error: r.error })),
      );
    }
    setForm(null);
  };

  return (
    <div className="grid gap-2.5">
      <BackBar label="All subjects" onBack={onBack} />
      {isLoading && <Loader2 className="mx-auto size-5 animate-spin text-muted-foreground" />}
      {units.map((u) => (
        <Row
          key={u.id}
          title={`Unit ${u.unit_number}: ${u.title}`}
          meta="Tap to edit revision points"
          onOpen={() => onOpenUnit(u.id)}
          onEdit={() => setForm({ id: u.id, unit_number: u.unit_number, title: u.title })}
          onDelete={() => {
            if (!confirm(`Delete Unit ${u.unit_number} and its points?`)) return;
            save.mutate(() =>
              supabase
                .from("units")
                .delete()
                .eq("id", u.id)
                .then((r) => ({ error: r.error })),
            );
          }}
        />
      ))}

      {form ? (
        <Card>
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-bold">{form.id ? "Edit unit" : "New unit"}</p>
            <button
              type="button"
              onClick={() => setForm(null)}
              aria-label="Cancel"
              className="press text-muted-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
          <Field label="Unit number">
            <input
              type="number"
              min={1}
              className={inputCls}
              value={form.unit_number}
              onChange={(e) => setForm({ ...form, unit_number: Number(e.target.value) || 1 })}
            />
          </Field>
          <Field label="Unit title">
            <input
              className={inputCls}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </Field>
          <Err error={save.error} />
          <button
            type="button"
            onClick={submit}
            className="press rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground"
          >
            Save unit
          </button>
        </Card>
      ) : (
        <button
          type="button"
          onClick={() => setForm({ unit_number: units.length + 1, title: "" })}
          className="press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary"
        >
          <Plus className="size-4" /> Add unit
        </button>
      )}
    </div>
  );
}

function PointsEditor({ unitId, onBack }: { unitId: string; onBack: () => void }) {
  const key = ["admin-points", unitId];
  const { data: points = [], isLoading } = useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("revision_points")
        .select("id, kind, content, display_order")
        .eq("unit_id", unitId)
        .order("display_order");
      if (error) throw error;
      return (data ?? []) as DbPoint[];
    },
  });
  const save = useSave([key, ["revision-points", unitId]]);
  const [kind, setKind] = useState<"highlight" | "bookmark">("highlight");
  const [form, setForm] = useState<{ id?: string; content: string } | null>(null);

  const list = points.filter((p) => p.kind === kind);

  const submit = () => {
    if (!form || !form.content.trim()) return;
    const content = form.content.trim();
    if (form.id) {
      save.mutate(() =>
        supabase
          .from("revision_points")
          .update({ content })
          .eq("id", form.id!)
          .then((r) => ({ error: r.error })),
      );
    } else {
      save.mutate(() =>
        supabase
          .from("revision_points")
          .insert({
            unit_id: unitId,
            kind,
            content,
            point_number: list.length + 1,
            display_order: list.length + 1,
          })
          .then((r) => ({ error: r.error })),
      );
    }
    setForm(null);
  };

  return (
    <div className="grid gap-2.5">
      <BackBar label="All units" onBack={onBack} />
      <div className="flex gap-2">
        <Toggle active={kind === "highlight"} onClick={() => setKind("highlight")}>
          Highlight points
        </Toggle>
        <Toggle active={kind === "bookmark"} onClick={() => setKind("bookmark")}>
          Key points
        </Toggle>
      </div>
      {isLoading && <Loader2 className="mx-auto size-5 animate-spin text-muted-foreground" />}
      {list.map((p, i) => (
        <Row
          key={p.id}
          title={`${i + 1}. ${p.content.slice(0, 90)}${p.content.length > 90 ? "…" : ""}`}
          onEdit={() => setForm({ id: p.id, content: p.content })}
          onDelete={() => {
            if (!confirm("Delete this point?")) return;
            save.mutate(() =>
              supabase
                .from("revision_points")
                .delete()
                .eq("id", p.id)
                .then((r) => ({ error: r.error })),
            );
          }}
        />
      ))}

      {form ? (
        <Card>
          <Field label="Point text">
            <textarea
              rows={5}
              className={inputCls}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            />
          </Field>
          <Err error={save.error} />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={submit}
              className="press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground"
            >
              Save point
            </button>
            <button
              type="button"
              onClick={() => setForm(null)}
              className="press rounded-lg border border-border px-4 text-[14px] font-semibold"
            >
              Cancel
            </button>
          </div>
        </Card>
      ) : (
        <button
          type="button"
          onClick={() => setForm({ content: "" })}
          className="press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary"
        >
          <Plus className="size-4" /> Add point
        </button>
      )}
    </div>
  );
}

/* ---------------- papers ---------------- */

type DbPaperRow = {
  id: string;
  title: string;
  subtitle: string | null;
  paper_type: string;
  is_paid: boolean;
  position: number;
};

function PapersTab({
  program,
  semester,
  group,
}: {
  program: string;
  semester: number | null;
  group: string;
}) {
  const { data: subjects = [] } = useSubjects(program, semester, group);
  const [subjectId, setSubjectId] = useState<string | null>(null);
  const [paperId, setPaperId] = useState<string | null>(null);

  if (paperId) return <QuestionsEditor paperId={paperId} onBack={() => setPaperId(null)} />;
  if (subjectId)
    return (
      <PapersEditor subjectId={subjectId} onBack={() => setSubjectId(null)} onOpen={setPaperId} />
    );

  return (
    <div className="grid gap-2.5">
      {subjects.map((s) => (
        <Row key={s.id} title={s.name} meta="Manage papers" onOpen={() => setSubjectId(s.id)} />
      ))}
    </div>
  );
}

function PapersEditor({
  subjectId,
  onBack,
  onOpen,
}: {
  subjectId: string;
  onBack: () => void;
  onOpen: (id: string) => void;
}) {
  const key = ["admin-papers", subjectId];
  const { data: papers = [], isLoading } = useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("model_papers")
        .select("id, title, subtitle, paper_type, is_paid, position")
        .eq("subject_id", subjectId)
        .order("position");
      if (error) throw error;
      return (data ?? []) as DbPaperRow[];
    },
  });
  const save = useSave([key, ["model-papers", subjectId]]);
  const [form, setForm] = useState<{
    id?: string;
    title: string;
    subtitle: string;
    paper_type: string;
    is_paid: boolean;
  } | null>(null);

  const submit = () => {
    if (!form || !form.title.trim()) return;
    const patch = {
      title: form.title.trim(),
      subtitle: form.subtitle.trim() || null,
      paper_type: form.paper_type,
      is_paid: form.is_paid,
    };
    if (form.id) {
      save.mutate(() =>
        supabase
          .from("model_papers")
          .update(patch)
          .eq("id", form.id!)
          .then((r) => ({ error: r.error })),
      );
    } else {
      save.mutate(() =>
        supabase
          .from("model_papers")
          .insert({
            id: `${subjectId}-${slugify(form.title)}`,
            subject_id: subjectId,
            position: papers.length + 1,
            ...patch,
          })
          .then((r) => ({ error: r.error })),
      );
    }
    setForm(null);
  };

  return (
    <div className="grid gap-2.5">
      <BackBar label="All subjects" onBack={onBack} />
      {isLoading && <Loader2 className="mx-auto size-5 animate-spin text-muted-foreground" />}
      {papers.map((p) => (
        <Row
          key={p.id}
          title={p.title}
          meta={`${p.paper_type === "previous_year" ? "Previous year" : "Model"} · ${p.is_paid ? "Premium" : "Free"}`}
          onOpen={() => onOpen(p.id)}
          onEdit={() =>
            setForm({
              id: p.id,
              title: p.title,
              subtitle: p.subtitle ?? "",
              paper_type: p.paper_type,
              is_paid: p.is_paid,
            })
          }
          onDelete={() => {
            if (!confirm(`Delete "${p.title}" and its questions?`)) return;
            save.mutate(() =>
              supabase
                .from("model_papers")
                .delete()
                .eq("id", p.id)
                .then((r) => ({ error: r.error })),
            );
          }}
        />
      ))}

      {form ? (
        <Card>
          <Field label="Paper title">
            <input
              className={inputCls}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </Field>
          <Field label="Subtitle">
            <input
              className={inputCls}
              value={form.subtitle}
              onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
            />
          </Field>
          <Field label="Type">
            <select
              className={inputCls}
              value={form.paper_type}
              onChange={(e) => setForm({ ...form, paper_type: e.target.value })}
            >
              <option value="model">Model paper</option>
              <option value="previous_year">Previous year paper</option>
            </select>
          </Field>
          <label className="flex items-center gap-2 text-[13.5px] font-medium">
            <input
              type="checkbox"
              checked={form.is_paid}
              onChange={(e) => setForm({ ...form, is_paid: e.target.checked })}
            />
            Premium only
          </label>
          <Err error={save.error} />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={submit}
              className="press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground"
            >
              Save paper
            </button>
            <button
              type="button"
              onClick={() => setForm(null)}
              className="press rounded-lg border border-border px-4 text-[14px] font-semibold"
            >
              Cancel
            </button>
          </div>
        </Card>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setForm({ title: "", subtitle: "", paper_type: "model", is_paid: true })}
            className="press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary"
          >
            <Plus className="size-4" /> Add paper
          </button>
          <PaperUploader subjectId={subjectId} existing={papers.length} />
        </>
      )}
    </div>
  );
}

/* ---------------- paste a past paper ---------------- */

type ParsedQuestion = {
  question_no: number;
  question: string;
  answer_lines: string[];
  marks: number | null;
};

const QUESTION_START = /^(?:q(?:uestion)?\s*)?(\d{1,2})\s*[.):\]]\s*(.*)$/i;
const SKIP_LINE =
  /^(part\s+[abc]\b|section\s+[abc]\b|answer\s+(any|all)\b|time\s*:|max(imum)?\s*marks|total\s*marks)/i;
const ANSWER_PREFIX = /^(ans(wer)?|sol(ution)?)\s*[:.-]\s*/i;

function parsePaperText(raw: string): ParsedQuestion[] {
  const out: ParsedQuestion[] = [];
  let current: ParsedQuestion | null = null;

  for (const line of raw.split("\n")) {
    const text = line.trim();
    if (!text || SKIP_LINE.test(text)) continue;

    const match = QUESTION_START.exec(text);
    if (match && match[2] !== undefined) {
      let question = match[2].trim();
      let marks: number | null = null;
      const marksMatch = /[([](\d{1,2})\s*(?:marks?|m)?[)\]]\s*$/i.exec(question);
      if (marksMatch?.[1]) {
        marks = Number(marksMatch[1]);
        question = question.slice(0, marksMatch.index).trim();
      }
      current = { question_no: Number(match[1]), question, answer_lines: [], marks };
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

  // merge repeated numbers (OR choices) and drop empty questions
  const merged: ParsedQuestion[] = [];
  for (const q of out) {
    if (!q.question) continue;
    const prev = merged.find((m) => m.question_no === q.question_no);
    if (prev) {
      prev.question = `${prev.question}\nOR\n${q.question}`;
      prev.answer_lines = [...prev.answer_lines, ...q.answer_lines];
    } else {
      merged.push(q);
    }
  }
  return merged.sort((a, b) => a.question_no - b.question_no);
}

function PaperUploader({ subjectId, existing }: { subjectId: string; existing: number }) {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Previous Year Question Paper");
  const [type, setType] = useState("previous_year");
  const [isPaid, setIsPaid] = useState(true);
  const [text, setText] = useState("");
  const [parsed, setParsed] = useState<ParsedQuestion[] | null>(null);
  const [done, setDone] = useState<string | null>(null);

  const upload = useMutation({
    mutationFn: async () => {
      if (!title.trim()) throw new Error("Give the paper a title.");
      const questions = parsed ?? parsePaperText(text);
      if (!questions.length)
        throw new Error("No questions found — number each question like “1.” or “Q1.”");
      const paperId = `${subjectId}-${slugify(title)}`;
      const paper = await supabase.from("model_papers").upsert({
        id: paperId,
        subject_id: subjectId,
        title: title.trim(),
        subtitle: type === "previous_year" ? "Previous year paper" : "Model paper",
        paper_type: type,
        is_paid: isPaid,
        position: existing + 1,
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
        display_order: i + 1,
      }));
      const ins = await supabase.from("paper_questions").insert(rows);
      if (ins.error) throw new Error(ins.error.message);
      return questions.length;
    },
    onSuccess: (count) => {
      setDone(`${count} questions are live in the app.`);
      setText("");
      setParsed(null);
      void qc.invalidateQueries({ queryKey: ["admin-papers", subjectId] });
      void qc.invalidateQueries({ queryKey: ["model-papers", subjectId] });
      void qc.invalidateQueries({ queryKey: ["admin-stats"] });
    },
  });

  if (!open)
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="press flex items-center justify-center gap-2 rounded-lg bg-foreground py-3 text-[14px] font-bold text-background"
      >
        <FileUp className="size-4" /> Upload a past paper
      </button>
    );

  const answered = parsed?.filter((q) => q.answer_lines.length).length ?? 0;

  return (
    <Card>
      <div className="flex items-center justify-between">
        <p className="text-[14.5px] font-bold">Upload a past paper</p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="press p-1 text-muted-foreground"
        >
          <X className="size-4" />
        </button>
      </div>
      <p className="text-[12.5px] text-muted-foreground">
        Paste the paper text. Number every question like “1.” or “Q1.” and put the answer on the
        lines below it. Part A/B/C headings are ignored.
      </p>
      <Field label="Paper title">
        <input className={inputCls} value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field label="Type">
        <select className={inputCls} value={type} onChange={(e) => setType(e.target.value)}>
          <option value="previous_year">Previous year paper</option>
          <option value="model">Model paper</option>
        </select>
      </Field>
      <label className="flex items-center gap-2 text-[13.5px] font-medium">
        <input type="checkbox" checked={isPaid} onChange={(e) => setIsPaid(e.target.checked)} />{" "}
        Premium only
      </label>
      <Field label="Paper text">
        <textarea
          rows={10}
          className={inputCls}
          placeholder={
            "1. Define management. (5 marks)\nManagement is the art of getting things done through people.\n\n2. Explain the functions of management.\nPlanning, organising, staffing, directing and controlling."
          }
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setParsed(null);
            setDone(null);
          }}
        />
      </Field>
      <label className="press inline-flex cursor-pointer items-center gap-2 text-[13px] font-semibold text-primary">
        <FileUp className="size-4" /> Choose a .txt file
        <input
          type="file"
          accept=".txt,text/plain"
          className="hidden"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            setText(await file.text());
            setParsed(null);
            setDone(null);
          }}
        />
      </label>

      {parsed && (
        <div className="rounded-lg border border-border bg-muted/40 p-3">
          <p className="text-[13px] font-bold">
            {parsed.length} questions found · {answered} with answers
          </p>
          <ul className="mt-2 grid gap-1.5">
            {parsed.slice(0, 5).map((q) => (
              <li key={q.question_no} className="text-[12.5px] text-muted-foreground">
                <span className="font-semibold text-foreground">Q{q.question_no}.</span>{" "}
                {q.question.slice(0, 90)}
                {q.marks ? ` · ${q.marks} marks` : ""}
              </li>
            ))}
          </ul>
          {parsed.length > 5 && (
            <p className="mt-1 text-[12px] text-muted-foreground">and {parsed.length - 5} more…</p>
          )}
        </div>
      )}
      <Err error={upload.error} />
      {done && <p className="text-[12.5px] font-semibold text-accent">{done}</p>}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            setDone(null);
            setParsed(parsePaperText(text));
          }}
          className="press flex-1 rounded-lg border border-border py-2.5 text-[14px] font-bold"
        >
          Check paper
        </button>
        <button
          type="button"
          disabled={upload.isPending || !text.trim()}
          onClick={() => upload.mutate()}
          className="press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground disabled:opacity-50"
        >
          {upload.isPending ? "Uploading…" : "Publish to app"}
        </button>
      </div>
    </Card>
  );
}

type DbQuestionRow = {
  id: string;
  question_no: number;
  question: string;
  answer_lines: string[];
  marks: number | null;
};

function QuestionsEditor({ paperId, onBack }: { paperId: string; onBack: () => void }) {
  const key = ["admin-questions", paperId];
  const { data: questions = [], isLoading } = useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("paper_questions")
        .select("id, question_no, question, answer_lines, marks")
        .eq("paper_id", paperId)
        .order("question_no");
      if (error) throw error;
      return (data ?? []) as DbQuestionRow[];
    },
  });
  const save = useSave([key, ["model-paper", paperId]]);
  const [form, setForm] = useState<{
    id?: string;
    question_no: number;
    question: string;
    answer: string;
    marks: string;
  } | null>(null);

  const submit = () => {
    if (!form || !form.question.trim()) return;
    const patch = {
      question_no: form.question_no,
      question: form.question.trim(),
      answer_lines: form.answer
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean),
      marks: form.marks ? Number(form.marks) : null,
      display_order: form.question_no,
    };
    if (form.id) {
      save.mutate(() =>
        supabase
          .from("paper_questions")
          .update(patch)
          .eq("id", form.id!)
          .then((r) => ({ error: r.error })),
      );
    } else {
      save.mutate(() =>
        supabase
          .from("paper_questions")
          .insert({ paper_id: paperId, ...patch })
          .then((r) => ({ error: r.error })),
      );
    }
    setForm(null);
  };

  return (
    <div className="grid gap-2.5">
      <BackBar label="All papers" onBack={onBack} />
      {isLoading && <Loader2 className="mx-auto size-5 animate-spin text-muted-foreground" />}
      {questions.map((q) => (
        <Row
          key={q.id}
          title={`Q${q.question_no}. ${q.question.slice(0, 80)}`}
          meta={`${q.answer_lines.length} answer line(s)${q.marks ? ` · ${q.marks} marks` : ""}`}
          onEdit={() =>
            setForm({
              id: q.id,
              question_no: q.question_no,
              question: q.question,
              answer: q.answer_lines.join("\n"),
              marks: q.marks ? String(q.marks) : "",
            })
          }
          onDelete={() => {
            if (!confirm("Delete this question?")) return;
            save.mutate(() =>
              supabase
                .from("paper_questions")
                .delete()
                .eq("id", q.id)
                .then((r) => ({ error: r.error })),
            );
          }}
        />
      ))}

      {form ? (
        <Card>
          <Field label="Question number">
            <input
              type="number"
              min={1}
              className={inputCls}
              value={form.question_no}
              onChange={(e) => setForm({ ...form, question_no: Number(e.target.value) || 1 })}
            />
          </Field>
          <Field label="Question">
            <textarea
              rows={3}
              className={inputCls}
              value={form.question}
              onChange={(e) => setForm({ ...form, question: e.target.value })}
            />
          </Field>
          <Field label="Answer (one paragraph per line)">
            <textarea
              rows={7}
              className={inputCls}
              value={form.answer}
              onChange={(e) => setForm({ ...form, answer: e.target.value })}
            />
          </Field>
          <Field label="Marks (optional)">
            <input
              className={inputCls}
              value={form.marks}
              onChange={(e) => setForm({ ...form, marks: e.target.value })}
            />
          </Field>
          <Err error={save.error} />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={submit}
              className="press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground"
            >
              Save question
            </button>
            <button
              type="button"
              onClick={() => setForm(null)}
              className="press rounded-lg border border-border px-4 text-[14px] font-semibold"
            >
              Cancel
            </button>
          </div>
        </Card>
      ) : (
        <button
          type="button"
          onClick={() =>
            setForm({ question_no: questions.length + 1, question: "", answer: "", marks: "" })
          }
          className="press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary"
        >
          <Plus className="size-4" /> Add question
        </button>
      )}
    </div>
  );
}

/* ---------------- notifications ---------------- */

type DbNotificationRow = {
  id: string;
  title: string;
  body: string;
  category: string;
  link: string | null;
  program: string | null;
  semester: number | null;
  is_published: boolean;
  created_at: string;
};

function NotificationsTab() {
  const key = ["admin-notifications"];
  const { data: items = [], isLoading } = useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("notifications")
        .select("id, title, body, category, link, program, semester, is_published, created_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as DbNotificationRow[];
    },
  });
  const save = useSave([key, ["notifications"]]);
  const [form, setForm] = useState<{
    id?: string;
    title: string;
    body: string;
    category: string;
    link: string;
    program: string;
    semester: string;
    is_published: boolean;
  } | null>(null);

  const submit = () => {
    if (!form || !form.title.trim() || !form.body.trim()) return;
    const patch = {
      title: form.title.trim(),
      body: form.body.trim(),
      category: form.category,
      link: form.link.trim() || null,
      program: form.program || null,
      semester: form.semester ? Number(form.semester) : null,
      is_published: form.is_published,
    };
    if (form.id) {
      save.mutate(() =>
        supabase
          .from("notifications")
          .update(patch)
          .eq("id", form.id!)
          .then((r) => ({ error: r.error })),
      );
    } else {
      save.mutate(() =>
        supabase
          .from("notifications")
          .insert(patch)
          .then((r) => ({ error: r.error })),
      );
    }
    setForm(null);
  };

  return (
    <div className="grid gap-2.5">
      {isLoading && <Loader2 className="mx-auto size-5 animate-spin text-muted-foreground" />}
      {items.map((n) => (
        <Row
          key={n.id}
          title={n.title}
          meta={`${n.category} · ${n.is_published ? "published" : "draft"} · ${new Date(n.created_at).toLocaleDateString()}`}
          onEdit={() =>
            setForm({
              id: n.id,
              title: n.title,
              body: n.body,
              category: n.category,
              link: n.link ?? "",
              program: n.program ?? "",
              semester: n.semester ? String(n.semester) : "",
              is_published: n.is_published,
            })
          }
          onDelete={() => {
            if (!confirm("Delete this notification?")) return;
            save.mutate(() =>
              supabase
                .from("notifications")
                .delete()
                .eq("id", n.id)
                .then((r) => ({ error: r.error })),
            );
          }}
        />
      ))}

      {form ? (
        <Card>
          <Field label="Title">
            <input
              className={inputCls}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </Field>
          <Field label="Message">
            <textarea
              rows={4}
              className={inputCls}
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
            />
          </Field>
          <Field label="Category">
            <select
              className={inputCls}
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c === "material" ? "New study material" : c === "paper" ? "Model paper" : c}
                </option>
              ))}
            </select>
          </Field>
          <Field label="In-app link (optional, e.g. /payment)">
            <input
              className={inputCls}
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
            />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Program (optional)">
              <select
                className={inputCls}
                value={form.program}
                onChange={(e) => setForm({ ...form, program: e.target.value })}
              >
                <option value="">All</option>
                <option value="bba">BBA</option>
                <option value="bcom">B.Com</option>
              </select>
            </Field>
            <Field label="Semester (optional)">
              <select
                className={inputCls}
                value={form.semester}
                onChange={(e) => setForm({ ...form, semester: e.target.value })}
              >
                <option value="">All</option>
                {[1, 2, 3, 4, 5, 6].map((s) => (
                  <option key={s} value={s}>
                    Semester {s}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <label className="flex items-center gap-2 text-[13.5px] font-medium">
            <input
              type="checkbox"
              checked={form.is_published}
              onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
            />
            Published (visible to students)
          </label>
          <Err error={save.error} />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={submit}
              className="press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground"
            >
              Save notification
            </button>
            <button
              type="button"
              onClick={() => setForm(null)}
              className="press rounded-lg border border-border px-4 text-[14px] font-semibold"
            >
              Cancel
            </button>
          </div>
        </Card>
      ) : (
        <button
          type="button"
          onClick={() =>
            setForm({
              title: "",
              body: "",
              category: "material",
              link: "",
              program: "",
              semester: "",
              is_published: true,
            })
          }
          className="press flex items-center justify-center gap-2 rounded-lg border border-dashed border-border py-3 text-[14px] font-semibold text-primary"
        >
          <Plus className="size-4" /> New notification
        </button>
      )}
    </div>
  );
}

/* ---------------- users ---------------- */

type DbProfile = {
  id: string;
  full_name: string | null;
  email: string | null;
  program_id: string | null;
  semester: number | null;
  is_premium: boolean;
  plan: string | null;
  created_at: string;
};

function UsersTab() {
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, full_name, email, program_id, semester, is_premium, plan, created_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as DbProfile[];
    },
  });

  return (
    <div className="grid gap-2.5">
      {isLoading && <Loader2 className="mx-auto size-5 animate-spin text-muted-foreground" />}
      <Err error={error} />
      <p className="text-[12.5px] font-semibold text-muted-foreground">
        {users.length} registered {users.length === 1 ? "student" : "students"}
      </p>
      {users.map((u) => (
        <div key={u.id} className="surface-card px-3.5 py-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-[14.5px] font-bold">{u.full_name || "No name"}</p>
              <p className="truncate text-[12.5px] text-muted-foreground">{u.email || u.id}</p>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full px-2.5 py-1 text-[11.5px] font-bold",
                u.is_premium
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground",
              )}
            >
              {u.is_premium ? (u.plan ? `Premium · ${u.plan}` : "Premium") : "Free"}
            </span>
          </div>
          <p className="mt-1.5 text-[12px] text-muted-foreground">
            {u.program_id ? u.program_id.toUpperCase() : "Program not set"}
            {u.semester ? ` · Semester ${u.semester}` : ""} · joined{" "}
            {new Date(u.created_at).toLocaleDateString()}
          </p>
        </div>
      ))}
      {!isLoading && users.length === 0 && (
        <p className="surface-card px-4 py-6 text-center text-[13px] text-muted-foreground">
          No students have signed up yet.
        </p>
      )}
    </div>
  );
}

/* ---------------- payments ---------------- */

type DbPayment = {
  id: string;
  user_id: string;
  plan: string;
  amount: number;
  currency: string;
  method: string | null;
  status: string;
  reference: string | null;
  is_demo: boolean;
  created_at: string;
};

function PaymentsTab() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-payments"],
    queryFn: async () => {
      const [pay, prof] = await Promise.all([
        supabase.from("payments").select("*").order("created_at", { ascending: false }).limit(200),
        supabase.from("profiles").select("id, full_name, email"),
      ]);
      if (pay.error) throw pay.error;
      if (prof.error) throw prof.error;
      const names = new Map(
        (prof.data ?? []).map((p) => [p.id, p.email || p.full_name || p.id] as const),
      );
      return ((pay.data ?? []) as DbPayment[]).map((p) => ({
        ...p,
        who: names.get(p.user_id) ?? p.user_id,
      }));
    },
  });

  const rows = data ?? [];
  const paid = rows.filter((r) => r.status === "paid");
  const total = paid.reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="grid gap-2.5">
      {isLoading && <Loader2 className="mx-auto size-5 animate-spin text-muted-foreground" />}
      <Err error={error} />
      <div className="grid grid-cols-2 gap-2.5">
        <div className="surface-card px-3.5 py-3">
          <p className="text-[12px] font-semibold text-muted-foreground">Successful</p>
          <p className="text-[20px] font-extrabold">{paid.length}</p>
        </div>
        <div className="surface-card px-3.5 py-3">
          <p className="text-[12px] font-semibold text-muted-foreground">Collected</p>
          <p className="text-[20px] font-extrabold">₹{total}</p>
        </div>
      </div>
      {rows.map((p) => (
        <div key={p.id} className="surface-card px-3.5 py-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-[14px] font-bold">
                ₹{p.amount} · {p.plan}
              </p>
              <p className="truncate text-[12.5px] text-muted-foreground">{p.who}</p>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full px-2.5 py-1 text-[11.5px] font-bold capitalize",
                p.status === "paid"
                  ? "bg-accent text-accent-foreground"
                  : p.status === "failed"
                    ? "bg-destructive/10 text-destructive"
                    : "bg-muted text-muted-foreground",
              )}
            >
              {p.status}
            </span>
          </div>
          <p className="mt-1.5 text-[12px] text-muted-foreground">
            {p.method ?? "—"} · {p.reference ?? "no reference"} · {p.is_demo ? "test mode" : "live"}{" "}
            · {new Date(p.created_at).toLocaleString()}
          </p>
        </div>
      ))}
      {!isLoading && rows.length === 0 && (
        <p className="surface-card px-4 py-6 text-center text-[13px] text-muted-foreground">
          No payments recorded yet.
        </p>
      )}
    </div>
  );
}

/* ---------------- analytics ---------------- */

type AdminStats = {
  subjects: number;
  units: number;
  points: number;
  papers: number;
  previousYear: number;
  freePapers: number;
  questions: number;
  students: number;
  premium: number;
  newStudents: number;
  notifications: number;
  published: number;
  paidPayments: number;
  revenue: number;
  revenue7d: number;
  coverage: { label: string; subjects: number }[];
};

function useAdminStats() {
  return useQuery<AdminStats>({
    queryKey: ["admin-stats"],
    staleTime: 30_000,
    queryFn: async () => {
      const since = new Date(Date.now() - 7 * 864e5).toISOString();
      const head = (table: string) =>
        supabase.from(table as "subjects").select("id", { count: "exact", head: true });

      const [subjects, units, points, papers, questions, profiles, notifications] =
        await Promise.all([
          head("subjects"),
          head("units"),
          head("revision_points"),
          head("model_papers"),
          head("paper_questions"),
          head("profiles"),
          head("notifications"),
        ]);

      const [premium, newStudents, previousYear, freePapers, published] = await Promise.all([
        supabase
          .from("profiles")
          .select("id", { count: "exact", head: true })
          .eq("is_premium", true),
        supabase
          .from("profiles")
          .select("id", { count: "exact", head: true })
          .gte("created_at", since),
        supabase
          .from("model_papers")
          .select("id", { count: "exact", head: true })
          .eq("paper_type", "previous_year"),
        supabase
          .from("model_papers")
          .select("id", { count: "exact", head: true })
          .eq("is_paid", false),
        supabase
          .from("notifications")
          .select("id", { count: "exact", head: true })
          .eq("is_published", true),
      ]);

      const [pay, subjectRows] = await Promise.all([
        supabase.from("payments").select("amount, status, created_at").limit(1000),
        supabase.from("subjects").select("program, semester, elective_group"),
      ]);

      const paid = (pay.data ?? []).filter((p) => p.status === "paid");
      const buckets = new Map<string, number>();
      for (const s of subjectRows.data ?? []) {
        const label = s.semester
          ? `${s.program === "bba" ? "BBA" : "B.Com"} Sem ${s.semester}`
          : `${s.program === "bba" ? "BBA" : "B.Com"} Electives`;
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
        revenue7d: paid
          .filter((p) => p.created_at >= since)
          .reduce((n, p) => n + (p.amount ?? 0), 0),
        coverage: [...buckets.entries()]
          .map(([label, count]) => ({ label, subjects: count }))
          .sort((a, b) => a.label.localeCompare(b.label)),
      };
    },
  });
}

function Stat({ label, value, hint }: { label: string; value: number | string; hint?: string }) {
  return (
    <div className="surface-card px-3.5 py-3">
      <p className="text-[12px] font-semibold text-muted-foreground">{label}</p>
      <p className="text-[20px] font-extrabold">{value}</p>
      {hint && <p className="text-[11.5px] text-muted-foreground">{hint}</p>}
    </div>
  );
}

function Bar({ label, value, max }: { label: string; value: number; max: number }) {
  return (
    <div className="grid gap-1">
      <div className="flex items-baseline justify-between text-[12.5px]">
        <span className="font-semibold">{label}</span>
        <span className="text-muted-foreground">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${max ? Math.max(6, (value / max) * 100) : 0}%` }}
        />
      </div>
    </div>
  );
}

function AnalyticsTab() {
  const { data, isLoading, error } = useAdminStats();
  const s = data;
  const conversion = s && s.students ? Math.round((s.premium / s.students) * 100) : 0;
  const avgPoints = s && s.units ? Math.round(s.points / s.units) : 0;
  const avgQuestions = s && s.papers ? Math.round(s.questions / s.papers) : 0;
  const maxCoverage = s ? Math.max(1, ...s.coverage.map((c) => c.subjects)) : 1;

  if (isLoading || !s)
    return (
      <div className="grid gap-2.5">
        <Err error={error} />
        {!error && <Loader2 className="mx-auto size-5 animate-spin text-muted-foreground" />}
      </div>
    );

  return (
    <div className="grid gap-4">
      <section className="grid gap-2.5">
        <p className="text-[12.5px] font-bold uppercase tracking-wide text-muted-foreground">
          Students
        </p>
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          <Stat label="Registered" value={s.students} hint={`${s.newStudents} joined in 7 days`} />
          <Stat label="Premium" value={s.premium} hint={`${conversion}% conversion`} />
          <Stat label="Collected" value={`₹${s.revenue}`} hint={`₹${s.revenue7d} in 7 days`} />
          <Stat label="Successful payments" value={s.paidPayments} />
        </div>
      </section>

      <section className="grid gap-2.5">
        <p className="text-[12.5px] font-bold uppercase tracking-wide text-muted-foreground">
          Study library
        </p>
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          <Stat label="Subjects" value={s.subjects} />
          <Stat label="Units" value={s.units} hint={`${avgPoints} points per unit`} />
          <Stat label="Revision points" value={s.points} />
          <Stat label="Papers" value={s.papers} hint={`${avgQuestions} questions per paper`} />
          <Stat label="Past-year papers" value={s.previousYear} />
          <Stat
            label="Free papers"
            value={s.freePapers}
            hint={`${s.papers - s.freePapers} premium`}
          />
          <Stat label="Solved questions" value={s.questions} />
          <Stat label="Announcements" value={s.notifications} hint={`${s.published} live`} />
        </div>
      </section>

      <section className="surface-card grid gap-3 px-3.5 py-3.5">
        <p className="text-[12.5px] font-bold uppercase tracking-wide text-muted-foreground">
          Subjects by semester
        </p>
        {s.coverage.map((c) => (
          <Bar key={c.label} label={c.label} value={c.subjects} max={maxCoverage} />
        ))}
      </section>

      <p className="text-[12px] leading-relaxed text-muted-foreground">
        These numbers are read live from the same database the student app uses — anything you
        change here is visible to students straight away.
      </p>
    </div>
  );
}

/* ---------------- content import ---------------- */

type ImportPayload = {
  program: string;
  semester: number;
  name: string;
  icon?: string;
  units?: {
    unit_number: number;
    title: string;
    highlights?: string[];
    key_points?: string[];
  }[];
  papers?: {
    title: string;
    type?: "model" | "previous_year";
    description?: string;
    is_paid?: boolean;
    questions?: { question_no?: number; question: string; answer?: string; marks?: number }[];
  }[];
};

const SAMPLE = `{
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

type Preview = {
  payload: ImportPayload;
  subjectId: string;
  units: number;
  points: number;
  papers: number;
  questions: number;
};

function buildPreview(raw: string): Preview {
  const payload = JSON.parse(raw) as ImportPayload;
  if (!payload.program || !payload.semester || !payload.name)
    throw new Error("program, semester and name are required");
  if (payload.program !== "bba" && payload.program !== "bcom")
    throw new Error('program must be "bba" or "bcom"');
  const units = payload.units ?? [];
  for (const u of units) {
    if (!u.unit_number || !u.title) throw new Error("every unit needs unit_number and title");
  }
  const papers = payload.papers ?? [];
  for (const p of papers) if (!p.title) throw new Error("every paper needs a title");
  return {
    payload,
    subjectId: `${payload.program}-s${payload.semester}-${slugify(payload.name)}`,
    units: units.length,
    points: units.reduce(
      (n, u) => n + (u.highlights?.length ?? 0) + (u.key_points?.length ?? 0),
      0,
    ),
    papers: papers.length,
    questions: papers.reduce((n, p) => n + (p.questions?.length ?? 0), 0),
  };
}

function ImportTab() {
  const qc = useQueryClient();
  const [text, setText] = useState("");
  const [log, setLog] = useState<string | null>(null);
  const [replace, setReplace] = useState(true);
  const [preview, setPreview] = useState<Preview | null>(null);
  const [parseError, setParseError] = useState<string | null>(null);

  const check = () => {
    setLog(null);
    try {
      setPreview(buildPreview(text));
      setParseError(null);
    } catch (e) {
      setPreview(null);
      setParseError((e as Error).message);
    }
  };

  const run = useMutation({
    mutationFn: async (p: Preview) => {
      const { payload, subjectId } = p;

      const subject = await supabase.from("subjects").upsert({
        id: subjectId,
        program: payload.program,
        semester: payload.semester,
        name: payload.name,
        icon: payload.icon ?? "management",
        position: payload.semester,
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
          title: unit.title,
        });
        if (u.error) throw new Error(u.error.message);
        unitCount += 1;

        if (replace) {
          const del = await supabase.from("revision_points").delete().eq("unit_id", unitId);
          if (del.error) throw new Error(del.error.message);
        }

        const rows = [
          ...(unit.highlights ?? []).map((content, i) => ({
            unit_id: unitId,
            kind: "highlight",
            content,
            point_number: i + 1,
            display_order: i + 1,
          })),
          ...(unit.key_points ?? []).map((content, i) => ({
            unit_id: unitId,
            kind: "bookmark",
            content,
            point_number: i + 1,
            display_order: i + 1,
          })),
        ];
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
        const paper = papers[idx]!;
        const paperId = `${subjectId}-${slugify(paper.title)}`;
        const saved = await supabase.from("model_papers").upsert({
          id: paperId,
          subject_id: subjectId,
          title: paper.title,
          subtitle: "Quick Exam Revision",
          description: paper.description ?? null,
          paper_type: paper.type === "previous_year" ? "previous_year" : "model",
          is_paid: paper.is_paid ?? idx > 0,
          position: idx + 1,
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
          answer_lines: (q.answer ?? "Answer is being added.")
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean),
          marks: q.marks ?? null,
          display_order: i + 1,
        }));
        if (questions.length) {
          const qs = await supabase
            .from("paper_questions")
            .upsert(questions, { onConflict: "paper_id,question_no" });
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
      void qc.invalidateQueries();
    },
  });

  return (
    <div className="grid gap-2.5">
      <Card>
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-primary-soft text-primary">
            <FileUp className="size-[18px]" />
          </span>
          <div>
            <p className="text-[14px] font-bold">Import a subject</p>
            <p className="text-[12px] text-muted-foreground">
              Upload a JSON file or paste its contents
            </p>
          </div>
        </div>
        <p className="text-[12.5px] leading-relaxed text-muted-foreground">
          Paste one subject with its units, revision points and model papers. Check it first, then
          apply. Subjects, units and papers with the same name are updated instead of duplicated.
        </p>
        <Field label="JSON">
          <label className="press mb-2 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-[13px] font-semibold hover:bg-muted">
            <FileUp className="size-4" /> Choose JSON file
            <input
              type="file"
              accept="application/json,.json"
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) return;
                void file.text().then((contents) => {
                  setText(contents);
                  setPreview(null);
                  setParseError(null);
                });
              }}
            />
          </label>
          <textarea
            rows={12}
            className={cn(inputCls, "font-mono text-[12px]")}
            placeholder={SAMPLE}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setPreview(null);
              setParseError(null);
            }}
          />
        </Field>

        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[13px] font-semibold">Existing points and answers</p>
            <p className="text-[12px] leading-relaxed text-muted-foreground">
              {replace
                ? "Old points and questions for these units and papers are removed first."
                : "New points and questions are added on top of what is already there."}
            </p>
          </div>
          <Toggle active={replace} onClick={() => setReplace((v) => !v)}>
            {replace ? "Replace" : "Add"}
          </Toggle>
        </div>

        {parseError && <p className="text-[12.5px] font-semibold text-destructive">{parseError}</p>}
        <Err error={run.error} />
        {log && <p className="text-[12.5px] font-semibold text-primary">{log}</p>}

        {preview && (
          <div className="rounded-lg border border-border bg-muted/40 p-3">
            <p className="text-[13.5px] font-bold">{preview.payload.name}</p>
            <p className="text-[12px] text-muted-foreground">
              {preview.payload.program === "bba" ? "BBA" : "B.Com"} • Semester{" "}
              {preview.payload.semester} • {preview.subjectId}
            </p>
            <p className="mt-1.5 text-[12.5px]">
              {preview.units} units, {preview.points} points, {preview.papers} papers,{" "}
              {preview.questions} questions
            </p>
            <ul className="mt-1.5 grid gap-0.5 text-[12px] text-muted-foreground">
              {(preview.payload.units ?? []).slice(0, 8).map((u) => (
                <li key={u.unit_number}>
                  Unit {u.unit_number}: {u.title} (
                  {(u.highlights?.length ?? 0) + (u.key_points?.length ?? 0)} points)
                </li>
              ))}
              {(preview.payload.papers ?? []).map((p) => (
                <li key={p.title}>
                  {p.title} ({p.questions?.length ?? 0} questions)
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-2">
          {preview ? (
            <button
              type="button"
              disabled={run.isPending}
              onClick={() => run.mutate(preview)}
              className="press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground disabled:opacity-50"
            >
              {run.isPending ? "Importing…" : "Apply to the app"}
            </button>
          ) : (
            <button
              type="button"
              disabled={!text.trim()}
              onClick={check}
              className="press flex-1 rounded-lg bg-primary py-2.5 text-[14px] font-bold text-primary-foreground disabled:opacity-50"
            >
              Check content
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setText(SAMPLE);
              setPreview(null);
              setParseError(null);
            }}
            className="press rounded-lg border border-border px-4 text-[13.5px] font-semibold"
          >
            Use sample
          </button>
        </div>
      </Card>
      <p className="text-[12px] leading-relaxed text-muted-foreground">
        Word documents: copy the unit text into the points field of the Content tab, or convert the
        document to this JSON shape and paste it here.
      </p>
    </div>
  );
}
