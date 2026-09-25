import { Eye, EyeOff, ChevronLeft } from "lucide-react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2, BookOpenCheck, Bookmark, Crown, ShieldCheck } from "lucide-react";
import logo from "@/assets/revision-logo.png";
import { useAuth } from "@/lib/auth";
import { useAppState } from "@/lib/app-state";
import { supabase } from "@/integrations/supabase/client";
import { Screen } from "@/components/app-chrome";
import { Button } from "@/components/ui-bits";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/auth")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>): { mode?: string } => {
    const mode = search["mode"];
    return typeof mode === "string" && (mode === "signin" || mode === "signup" || mode === "admin")
      ? { mode }
      : {};
  },
  head: () => ({
    meta: [
      { title: "Sign in — REVISION" },
      {
        name: "description",
        content:
          "Sign in or create your free REVISION account to save bookmarks and sync your program across devices.",
      },
      { property: "og:title", content: "Sign in — REVISION" },
      { property: "og:description", content: "Create your free REVISION student account." },
    ],
  }),
  component: AuthScreen,
});

type Mode = "signin" | "signup" | "admin";

const ADMIN_EMAIL = "admin@revisionapp.com";

const perks = [
  { icon: BookOpenCheck, text: "Full B.Com & BBA revision material" },
  { icon: Bookmark, text: "Bookmarks synced on every device" },
  { icon: Crown, text: "Model papers with solved answers" },
];

function AuthScreen() {
  const { signIn, signUp, sendReset, user, loading } = useAuth();
  const searchMode = Route.useSearch().mode as Mode | undefined;
  const { program } = useAppState();
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>(searchMode === "admin" ? "admin" : "signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [google, setGoogle] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

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

  // Admins land in the admin panel; students pick their program, then the dashboard.
  useEffect(() => {
    if (loading || !user) return;
    let active = true;
    void (async () => {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin");
      if (!active) return;
      const target =
        (data?.length ?? 0) > 0 ? "/admin" : program ? "/dashboard" : "/program-selection";
      navigate({ to: target, replace: true });
    })();
    return () => {
      active = false;
    };
  }, [loading, user, navigate, program]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      if (mode === "admin") {
        await signIn(ADMIN_EMAIL, password);
      } else if (mode === "signin") {
        await signIn(email.trim(), password);
      } else {
        const { needsConfirmation } = await signUp(name.trim(), email.trim(), password);
        if (needsConfirmation) {
          setNotice("Almost done — check your inbox and tap the confirmation link to finish.");
        }
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

    // Google blocks its sign-in page inside an embedded frame (that is the 403).
    // Inside the preview frame we open a real browser window instead.
    const framed = typeof window !== "undefined" && window.top !== window.self;
    const appUrl = import.meta.env["VITE_APP_URL"] || window.location.origin;
    const { data, error: err } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${appUrl}/auth`,
        skipBrowserRedirect: framed,
        queryParams: { prompt: "select_account" },
      },
    });

    if (err) {
      setError(
        /provider is not enabled|unsupported/i.test(err.message)
          ? "Google sign-in is not switched on for this app yet. Use your email and password for now."
          : err.message,
      );
      setGoogle(false);
      return;
    }

    if (framed && data?.url) {
      const opened = window.open(data.url, "_blank", "noopener,noreferrer");
      if (!opened) {
        setError("Please allow pop-ups, or open the app in its own browser tab to use Google.");
      } else {
        setNotice("Finish signing in with Google in the new tab, then come back here.");
      }
      setGoogle(false);
    }
  }

  return (
    <>
      <div className="brand-header px-5 pb-10 pt-12 text-center text-primary-foreground">
        <span className="mx-auto grid size-[76px] place-items-center overflow-hidden rounded-3xl bg-white/10 backdrop-blur">
          <img src={logo} alt="REVISION" className="size-[76px] object-cover" />
        </span>
        <h1 className="mt-4 text-[26px] font-extrabold tracking-tight">REVISION</h1>
        <p className="mt-1 text-[13px] font-medium text-primary-foreground/80">
          Study Anytime. Succeed Everywhere.
        </p>
      </div>

      <Screen className="-mt-6">
        <div className="surface-card px-5 py-5">
          {mode !== "admin" && (
            <div className="grid grid-cols-2 gap-1 rounded-xl bg-muted p-1">
              {(["signin", "signup"] as Mode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => {
                    setMode(m);
                    setError(null);
                    setNotice(null);
                  }}
                  className={cn(
                    "rounded-lg py-2 text-[12.5px] font-bold transition-colors",
                    mode === m ? "bg-card text-primary shadow-sm" : "text-muted-foreground",
                  )}
                >
                  {m === "signin" ? "Sign in" : "Create"}
                </button>
              ))}
            </div>
          )}

          {mode === "admin" && (
            <>
              <button
                type="button"
                onClick={() => {
                  setMode("signin");
                  setError(null);
                  setNotice(null);
                }}
                className="mb-3 flex items-center gap-1 text-[13px] font-semibold text-primary"
              >
                <ChevronLeft className="size-4" /> Back to sign in
              </button>
              <p className="flex items-center gap-2 rounded-xl bg-primary-soft px-3 py-2.5 text-[12.5px] font-semibold text-primary">
                <ShieldCheck className="size-4 shrink-0" />
                Admin access — enter the admin password to manage subjects, units, papers and
                students.
              </p>
            </>
          )}

          <form onSubmit={submit} className="mt-4 grid gap-3">
            {mode === "signup" && (
              <Field
                label="Full name"
                value={name}
                onChange={setName}
                type="text"
                placeholder="Your name"
                required
              />
            )}
            {mode !== "admin" && (
              <Field
                label="Email"
                value={email}
                onChange={setEmail}
                type="email"
                placeholder="you@example.com"
                required
              />
            )}
            <Field
              label={mode === "admin" ? "Admin password" : "Password"}
              value={password}
              onChange={setPassword}
              type="password"
              placeholder={mode === "admin" ? "Enter admin password" : "At least 6 characters"}
              required
            />

            {mode === "signin" && (
              <div className="-mt-1 text-right">
                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="text-[12.5px] font-semibold text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {error && (
              <p className="rounded-xl bg-destructive/10 px-3 py-2 text-[13px] font-medium text-destructive">
                {error}
              </p>
            )}
            {notice && (
              <p className="rounded-xl bg-primary-soft px-3 py-2 text-[13px] font-medium text-primary">
                {notice}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              variant={mode === "admin" ? "primary" : "accent"}
              className="mt-1 w-full"
              disabled={busy}
            >
              {busy && <Loader2 className="size-4 animate-spin" />}
              {mode === "signup"
                ? "Create my account"
                : mode === "admin"
                  ? "Open admin panel"
                  : "Sign in"}
            </Button>
          </form>

          {mode !== "admin" && (
            <>
              <div className="my-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-border" />
                <span className="text-[11.5px] font-bold uppercase tracking-wide text-muted-foreground">
                  or
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>

              <button
                type="button"
                onClick={withGoogle}
                disabled={google}
                className="press flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-card text-[14.5px] font-bold text-foreground"
              >
                {google ? <Loader2 className="size-4 animate-spin" /> : <GoogleMark />}
                Continue with Google
              </button>
            </>
          )}
        </div>

        <ul className="mt-5 grid gap-2.5">
          {perks.map((p) => (
            <li key={p.text} className="flex items-center gap-2.5 text-[13.5px] font-medium">
              <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <p.icon className="size-[17px]" />
              </span>
              {p.text}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-center text-[12px] leading-relaxed text-muted-foreground">
          By continuing you agree to keep your revision notes to yourself. We only use your email to
          sign you in.
        </p>
      </Screen>
    </>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 18 18" className="size-[18px]" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.34A9 9 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.97 10.71a5.4 5.4 0 0 1 0-3.42V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.34Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58Z"
      />
    </svg>
  );
}

function Field({
  label,
  value,
  onChange,
  type,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  const [show, setShow] = useState(false);
  const isPw = type === "password";
  return (
    <div className="relative">
      <label className="grid gap-1.5">
        <span className="text-[13px] font-bold text-foreground">{label}</span>
        <input
          className={
            "h-12 rounded-xl border border-border bg-card px-3.5 text-[15px] text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-primary" +
            (isPw ? " pr-12" : "")
          }
          value={value}
          type={isPw && show ? "text" : type}
          placeholder={placeholder}
          required={required}
          autoComplete={type === "password" ? "current-password" : type}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
      {isPw && (
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          aria-label={show ? "Hide password" : "Show password"}
          className="press absolute bottom-0 right-1 grid size-12 place-items-center text-muted-foreground"
        >
          {show ? <EyeOff className="size-[18px]" /> : <Eye className="size-[18px]" />}
        </button>
      )}
    </div>
  );
}
