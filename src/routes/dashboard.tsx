import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { notificationsQuery } from "@/lib/content";
import {
  Bell,
  Crown,
  Layers,
  Search as SearchIcon,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import { electivesFor, programLabel, subjectsFor } from "@/lib/mock-data";
import { useAppState } from "@/lib/app-state";
import { useEntitlements } from "@/lib/entitlements";
import { useAuth } from "@/lib/auth";
import logo from "@/assets/revision-logo.png";
import { PromoBanner, PromoPopup } from "@/components/promo";
import { SideMenu } from "@/components/side-menu";
import { BottomNav, Screen, SubjectGlyph } from "@/components/app-chrome";
import { SectionTitle } from "@/components/ui-bits";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Your Subjects — REVISION" },
      {
        name: "description",
        content: "All subjects for your selected program and semester, with unit-wise revision.",
      },
      { property: "og:title", content: "Your Subjects — REVISION" },
      { property: "og:description", content: "Unit-wise revision for your semester." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const { program, semester, ready, readNotifications, setProgram, setSemester } = useAppState();
  const { isPremium, planName } = useEntitlements();
  const { user, profile } = useAuth();
  const [query, setQuery] = useState("");
  const { data: notifications = [] } = useQuery(notificationsQuery(program, semester));
  const unreadCount = notifications.filter((n) => !readNotifications.includes(n.id)).length;

  const list = useMemo(() => subjectsFor(program, semester), [program, semester]);
  const electives = useMemo(() => electivesFor(program), [program]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? list.filter((s) => s.name.toLowerCase().includes(q)) : list;
  }, [list, query]);

  const name = profile?.full_name?.split(" ")[0] || user?.email?.split("@")[0] || "Student";

  useEffect(() => {
    if (ready && (!program || !semester)) navigate({ to: "/program-selection", replace: true });
  }, [ready, program, semester, navigate]);

  return (
    <>
      <header className="brand-header sticky top-0 z-20 px-4 pb-5 pt-[max(0.85rem,env(safe-area-inset-top))]">
        <div className="mx-auto max-w-xl">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <SideMenu />
              <img src={logo} alt="REVISION" className="h-9 w-auto object-contain" />
            </span>
            <span className="flex items-center gap-1.5">
              <PromoBanner />
              <Link
                to="/notifications"
                aria-label="Notifications"
                className="press relative grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15"
              >
                <Bell className="size-[19px]" />
                {unreadCount > 0 && (
                  <span className="absolute right-1 top-1 grid min-w-[16px] place-items-center rounded-full bg-accent px-1 text-[10px] font-bold leading-4 text-accent-foreground">
                    {unreadCount > 9 ? "9+" : unreadCount}
                  </span>
                )}
              </Link>
            </span>
          </div>
          <h1 className="mt-4 text-[21px] font-extrabold text-white">Hi {name} 👋</h1>
          <p className="mt-0.5 text-[13px] text-white/80">
            {programLabel(program)} • Semester {semester ?? 1}
          </p>
        </div>
      </header>

      <Screen nav className="pt-0">
        <div className="-mt-9 rounded-xl border border-border bg-card px-3.5 shadow-card">
          <label className="flex items-center gap-2.5 py-3">
            <SearchIcon className="size-[18px] shrink-0 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search subjects..."
              aria-label="Search subjects"
              className="w-full bg-transparent text-[14px] outline-none placeholder:text-muted-foreground"
            />
          </label>
        </div>

        <section className="surface-card mt-3 px-3.5 py-3" aria-label="Change course and semester">
          <div className="mb-2 flex items-center gap-2 text-[12px] font-bold text-muted-foreground">
            <SlidersHorizontal className="size-4 text-primary" />
            Change my selection
          </div>
          <div className="grid grid-cols-[1fr_1.15fr] gap-2">
            <label>
              <span className="sr-only">Program</span>
              <select
                aria-label="Program"
                value={program ?? "bcom"}
                onChange={(event) => setProgram(event.target.value)}
                className="h-10 w-full rounded-lg border border-border bg-background px-3 text-[13.5px] font-semibold outline-none focus:border-primary"
              >
                <option value="bcom">B.Com</option>
                <option value="bba">BBA</option>
              </select>
            </label>
            <label>
              <span className="sr-only">Semester</span>
              <select
                aria-label="Semester"
                value={semester ?? 1}
                onChange={(event) => setSemester(Number(event.target.value))}
                className="h-10 w-full rounded-lg border border-border bg-background px-3 text-[13.5px] font-semibold outline-none focus:border-primary"
              >
                {[1, 2, 3, 4, 5, 6].map((number) => (
                  <option key={number} value={number}>
                    Semester {number}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <Link
          to="/ai-help"
          className="press mt-4 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 shadow-card"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-primary-soft text-primary">
            <Sparkles className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[15px] font-bold">Ask &amp; Revise</span>
            <span className="block text-[13px] text-muted-foreground">
              Any topic explained with practice questions
            </span>
          </span>
          <span className="text-muted-foreground" aria-hidden="true">
            ›
          </span>
        </Link>

        {electives.length > 0 && (
          <Link
            to="/electives"
            className="press mt-2.5 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 shadow-card"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-accent-soft text-accent">
              <Layers className="size-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-bold">Electives</span>
              <span className="block text-[13px] text-muted-foreground">
                Finance, Marketing, HR &amp; E-Commerce
              </span>
            </span>
            <span className="text-muted-foreground" aria-hidden="true">
              ›
            </span>
          </Link>
        )}

        <SectionTitle
          title="Your Subjects"
          action={
            <Link to="/search" className="text-[13px] font-semibold text-primary">
              View All
            </Link>
          }
        />

        <div className="grid gap-2.5">
          {filtered.map((s) => (
            <Link
              key={s.id}
              to="/subject/$subjectId"
              params={{ subjectId: s.id }}
              className="surface-card press flex items-center gap-3 px-3.5 py-3 hover:shadow-lift"
            >
              <SubjectGlyph icon={s.icon} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-semibold">{s.name}</span>
                <span className="block text-[13px] text-muted-foreground">
                  {s.units.length} Units
                </span>
              </span>
              <span className="text-muted-foreground" aria-hidden="true">
                ›
              </span>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No subjects match “{query}”.
            </p>
          )}
        </div>

        <Link
          to={isPremium ? "/premium" : "/payment"}
          className="press mt-5 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 shadow-card"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-premium/15 text-premium">
            <Crown className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[15px] font-bold">
              {isPremium ? "Premium Dashboard" : "Unlock Premium"}
            </span>
            <span className="block text-[13px] text-muted-foreground">
              {isPremium
                ? "Unlocked content, papers & progress"
                : "Model papers, solved answers & more"}
            </span>
          </span>
          <span className="rounded-lg bg-accent px-3 py-1.5 text-[12px] font-bold text-accent-foreground">
            {isPremium ? "Open" : "View"}
          </span>
        </Link>
      </Screen>
      <PromoPopup />
      <BottomNav />
    </>
  );
}
