import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Bookmark,
  FileText,
  Search,
  Smartphone,
  Sparkles,
  Moon,
  ArrowRight,
  Check,
  Zap,
  WifiOff,
  Bell,
} from "lucide-react";
import { plans, premiumBenefits } from "@/lib/mock-data";
import logo from "@/assets/revision-logo.png";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "REVISION — Last-minute revision for BBA & B.Com" },
      {
        name: "description",
        content:
          "REVISION turns the BBA and B.Com syllabus into crisp unit highlights, solved model papers and previous-year papers. 274 units, 6,000+ revision points, works offline.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "REVISION — Last-minute revision for BBA & B.Com" },
      {
        property: "og:description",
        content:
          "Unit highlights, solved model papers, previous-year papers and AI explanations for BBA & B.Com students.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const features = [
  {
    icon: BookOpen,
    title: "Unit-wise highlights",
    text: "Every subject split into units with short, exam-ready points you can revise in minutes.",
  },
  {
    icon: FileText,
    title: "Solved model papers",
    text: "Model Paper 1 & 2 plus a previous-year paper per subject, each question fully answered.",
  },
  {
    icon: Sparkles,
    title: "Ask & Revise with AI",
    text: "Type any topic or doubt and get a clear explanation plus practice questions instantly.",
  },
  {
    icon: Bookmark,
    title: "Smart bookmarks",
    text: "Save the points that matter and pull them all up in one place before the exam.",
  },
  {
    icon: Search,
    title: "Instant search",
    text: "Jump to any subject, unit or concept across the whole syllabus in a keystroke.",
  },
  {
    icon: WifiOff,
    title: "Reads offline",
    text: "Material you have opened stays readable without internet, and syncs when you reconnect.",
  },
  {
    icon: Bell,
    title: "Updates in-app",
    text: "Get notified the moment new revision points or model papers are published.",
  },
  {
    icon: Moon,
    title: "Comfortable dark mode",
    text: "Late-night sessions with adjustable text size and a calm dark theme.",
  },
  {
    icon: Smartphone,
    title: "Installs like an app",
    text: "Add REVISION to your home screen and open it straight from your phone.",
  },
];

const stats = [
  { value: "63", label: "Subjects" },
  { value: "274", label: "Units" },
  { value: "6,100+", label: "Revision points" },
  { value: "182", label: "Solved papers" },
];

const steps = [
  { n: "01", title: "Pick your program", text: "BBA or B.Com — your syllabus, structured." },
  { n: "02", title: "Choose your semester", text: "All six semesters, subject by subject." },
  { n: "03", title: "Revise the highlights", text: "Crisp points, solved papers, bookmarks." },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 lg:px-10">
          <div className="flex min-w-0 items-center gap-2.5">
            <img
              src={logo}
              alt="REVISION"
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-xl object-cover"
            />
            <span className="truncate font-display text-lg font-extrabold tracking-tight">
              REVISION
            </span>
          </div>
          <nav className="hidden items-center gap-9 text-sm font-medium text-muted-foreground lg:flex">
            <a href="#features" className="transition hover:text-foreground">
              Features
            </a>
            <a href="#how" className="transition hover:text-foreground">
              How it works
            </a>
            <a href="#premium" className="transition hover:text-foreground">
              Premium
            </a>
          </nav>
          <Link
            to="/"
            className="shrink-0 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition hover:shadow-lift"
          >
            Open the app
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_75%_0%,oklch(0.47_0.16_259/0.14),transparent)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-semibold">
              <Zap className="h-3.5 w-3.5 text-accent" />
              Built for BBA &amp; B.Com students
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight md:text-5xl xl:text-6xl">
              Revise your entire semester in <span className="text-primary">days,</span> not weeks
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Long chapters turned into crisp, exam-ready highlights — with solved model papers,
              previous-year papers, bookmarks, instant search and an AI tutor for anything you get
              stuck on.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-card transition hover:shadow-lift"
              >
                Start revising free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#features"
                className="rounded-xl border border-border bg-card px-7 py-3.5 font-semibold transition hover:bg-secondary"
              >
                See what's inside
              </a>
            </div>
            <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-extrabold xl:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* App preview */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="brand-gradient absolute -inset-8 rounded-[3rem] opacity-20 blur-3xl" />
            <div className="surface-card relative rounded-[2rem] p-5 shadow-lift">
              <div className="flex items-center gap-3 rounded-2xl bg-secondary p-3.5">
                <img src={logo} alt="" className="size-10 rounded-xl object-cover" />
                <div>
                  <p className="text-sm font-bold">Financial Accounting</p>
                  <p className="text-xs text-muted-foreground">5 units · 18 highlights</p>
                </div>
              </div>
              {[
                "Double entry system ensures every transaction has two effects.",
                "Journal is the first book of entry.",
                "Ledger is the principal book of accounts.",
                "Trial balance checks arithmetical accuracy of the ledger.",
              ].map((h) => (
                <div
                  key={h}
                  className="mt-3 flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm leading-snug">{h}</p>
                </div>
              ))}
              <div className="mt-4 rounded-2xl bg-primary-soft p-3.5 text-center text-xs font-semibold text-primary">
                Bookmarked for exam day
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Everything you need, nothing you don't
            </h2>
            <p className="mt-3 text-muted-foreground">
              Designed around how students actually revise the week before exams.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="surface-card p-6 transition hover:shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Up and running in under a minute
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-7">
              <span className="font-display text-4xl font-extrabold text-accent">{s.n}</span>
              <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium */}
      <section id="premium" className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Simple, student-friendly pricing
            </h2>
            <p className="mt-3 text-muted-foreground">
              Core highlights are free forever. Premium unlocks every solved paper.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`surface-card relative p-7 ${plan.highlight ? "ring-2 ring-accent" : ""}`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3.5 py-1 text-xs font-bold text-accent-foreground">
                    Best value
                  </span>
                )}
                <h3 className="font-display text-lg font-bold capitalize">{plan.id} Premium</h3>
                <p className="mt-2">
                  <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                  <span className="ml-1.5 text-sm text-muted-foreground">{plan.period}</span>
                </p>
                <p className="mt-1 text-xs font-medium text-accent">{plan.note}</p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {premiumBenefits.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/payment"
                  className="mt-6 block rounded-xl bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition hover:shadow-lift"
                >
                  Get {plan.id === "yearly" ? "Yearly" : "Lifetime"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="brand-gradient relative overflow-hidden rounded-3xl px-8 py-16 text-center text-primary-foreground lg:py-20">
          <img src={logo} alt="" className="mx-auto size-16 rounded-2xl object-cover shadow-lift" />
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Your next exam starts with one tap
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-foreground/85">
            Open REVISION, pick your program, and start revising — free.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-card px-8 py-3.5 font-semibold text-foreground shadow-lift transition hover:opacity-95"
          >
            Open the app
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground lg:flex-row lg:px-10">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="size-7 rounded-lg object-cover" />
            <span className="font-display font-bold text-foreground">REVISION</span>
          </div>
          <p>Made for BBA &amp; B.Com students.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/payment" className="transition hover:text-foreground">
              Premium
            </Link>
            <Link to="/" className="transition hover:text-foreground">
              Open app
            </Link>
            <Link to="/privacy" className="transition hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition hover:text-foreground">
              Terms of Use
            </Link>
            <Link to="/refund" className="transition hover:text-foreground">
              Refunds
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
