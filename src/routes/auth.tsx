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
  validateSearch: (search: Record<string, unknown>) => {
    return {
      mode:
        typeof search["mode"] === "string" &&
        (search["mode"] === "signin" || search["mode"] === "signup" || search["mode"] === "admin")
          ? (search["mode"] as "signin" | "signup" | "admin")
          : undefined,
      code: typeof search["code"] === "string" ? search["code"] : undefined,
      error: typeof search["error"] === "string" ? search["error"] : undefined,
      error_description:
        typeof search["error_description"] === "string" ? search["error_description"] : undefined,
    };
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
const ADMIN_PASSWORD = "revision2026";

const perks = [
  { icon: BookOpenCheck, text: "Full B.Com & BBA revision material" },
  { icon: Bookmark, text: "Bookmarks synced on every device" },
  { icon: Crown, text: "Model papers with solved answers" },
];

function AuthScreen() {
  const { signIn, signUp, sendReset, user, profile, loading } = useAuth();
  const search = Route.useSearch();
  const searchMode = search.mode as Mode | undefined;
  const { program, semester, clearSelection } = useAppState();
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>(searchMode === "admin" ? "admin" : "signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [google, setGoogle] = useState(false);
  const [oauthResolving, setOauthResolving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  // Handle incoming OAuth callback (detect session safely with explicit PKCE exchange and hash support)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const urlParams = new URLSearchParams(window.location.search);
    const code = search.code || urlParams.get("code");
    const rawHash = window.location.hash.replace(/^#/, "");
    const hashParams = new URLSearchParams(rawHash);
    const accessToken = hashParams.get("access_token");
    const refreshToken = hashParams.get("refresh_token");
    const hasHash = Boolean(accessToken || (rawHash && rawHash.length > 1));
    const errParam =
      search.error_description ||
      search.error ||
      urlParams.get("error_description") ||
      urlParams.get("error") ||
      hashParams.get("error_description") ||
      hashParams.get("error");

    if (errParam) {
      setError(decodeURIComponent(errParam));
      return;
    }

    if (code || hasHash) {
      setOauthResolving(true);
      let handled = false;

      const finishOAuth = async (userId: string) => {
        if (handled) return;
        handled = true;

        try {
          window.history.replaceState({}, document.title, window.location.pathname);
        } catch {
          /* ignore */
        }

        let targetProg = program;
        let targetSem = semester;

        try {
          const { data: dbProfile } = await supabase
            .from("profiles")
            .select("program_id, semester")
            .eq("id", userId)
            .maybeSingle();

          if (dbProfile?.program_id) targetProg = dbProfile.program_id;
          if (dbProfile?.semester) targetSem = dbProfile.semester;
        } catch {
          /* fallback */
        }

        // Direct local storage persistence of program and semester before navigation
        try {
          const raw = localStorage.getItem("revision.state.v2");
          const state = raw ? JSON.parse(raw) : {};
          if (targetProg) state.program = targetProg;
          if (targetSem) state.semester = targetSem;
          localStorage.setItem("revision.state.v2", JSON.stringify(state));
        } catch {
          /* ignore */
        }

        const target =
          targetProg && targetSem
            ? "/dashboard"
            : targetProg
              ? "/semester-selection"
              : "/program-selection";

        // If this window was explicitly opened as a popup from another window, notify opener and close
        const isPopup =
          window.name === "revision_google_auth" ||
          window.location.search.includes("popup=1");

        if (isPopup && window.opener && window.opener !== window) {
          try {
            window.opener.postMessage({ type: "REVISION_AUTH_SUCCESS", target }, "*");
            window.opener.location.href = target;
          } catch {
            /* ignore cross-origin */
          }
          try {
            window.close();
          } catch {
            /* ignore */
          }
        }

        // Always navigate the current window directly
        navigate({ to: target as any, replace: true });
      };

      // 1. Listen to Supabase's automatic URL session extraction
      const { data: authSub } = supabase.auth.onAuthStateChange((event, s) => {
        if ((event === "SIGNED_IN" || event === "INITIAL_SESSION") && s?.user) {
          void finishOAuth(s.user.id);
        }
      });

      // 2. Check existing session immediately
      void supabase.auth.getSession().then(({ data }) => {
        if (data?.session?.user) {
          void finishOAuth(data.session.user.id);
        }
      });

      // 3. If access_token and refresh_token are present in hash (Implicit flow)
      if (accessToken && refreshToken) {
        supabase.auth
          .setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          })
          .then(({ data, error }) => {
            if (error) {
              console.warn("[Auth] setSession warning:", error.message);
            }
            if (data?.session?.user) {
              void finishOAuth(data.session.user.id);
            }
          })
          .catch((err) => {
            console.warn("[Auth] setSession failed:", err);
          });
      }

      // 4. If authorization code is present (PKCE) and session hasn't finished, exchange after brief delay
      if (code) {
        const pkceTimer = setTimeout(() => {
          if (handled) return;
          supabase.auth
            .exchangeCodeForSession(code)
            .then(({ data, error }) => {
              if (error) {
                console.warn("[Auth] exchangeCodeForSession fallback:", error.message);
              }
              if (data?.session?.user) {
                void finishOAuth(data.session.user.id);
              }
            })
            .catch((err) => {
              console.warn("[Auth] exchangeCodeForSession failed:", err);
            });
        }, 400);

        return () => {
          clearTimeout(pkceTimer);
          authSub.subscription.unsubscribe();
        };
      }

      // 5. Fallback safety timer: give enough time for network exchange
      const safetyTimer = setTimeout(async () => {
        if (handled) return;
        const { data } = await supabase.auth.getSession();
        if (data?.session?.user) {
          void finishOAuth(data.session.user.id);
        } else {
          setOauthResolving(false);
          setError("Sign-in session could not be completed automatically. Please tap 'Continue with Google' again.");
        }
      }, 6000);

      return () => {
        clearTimeout(safetyTimer);
        authSub.subscription.unsubscribe();
      };
    }
  }, [search.code, search.error, search.error_description, program, semester, navigate]);

  // Listen for window focus & visibility change when user returns to PWA from external browser
  useEffect(() => {
    if (typeof window === "undefined") return;

    let checkTimer: ReturnType<typeof setTimeout> | null = null;

    const checkSessionOnReturn = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (data?.session?.user) {
          setGoogle(false);
          setOauthResolving(false);
          const userId = data.session.user.id;
          let targetProg = program;
          let targetSem = semester;
          try {
            const { data: dbProfile } = await supabase
              .from("profiles")
              .select("program_id, semester")
              .eq("id", userId)
              .maybeSingle();
            if (dbProfile?.program_id) targetProg = dbProfile.program_id;
            if (dbProfile?.semester) targetSem = dbProfile.semester;
          } catch {
            /* ignore */
          }
          try {
            const raw = localStorage.getItem("revision.state.v2");
            const state = raw ? JSON.parse(raw) : {};
            if (targetProg) state.program = targetProg;
            if (targetSem) state.semester = targetSem;
            localStorage.setItem("revision.state.v2", JSON.stringify(state));
          } catch {
            /* ignore */
          }
          const target =
            targetProg && targetSem
              ? "/dashboard"
              : targetProg
                ? "/semester-selection"
                : "/program-selection";
          navigate({ to: target as any, replace: true });
        } else if (google) {
          checkTimer = setTimeout(async () => {
            const { data: retryData } = await supabase.auth.getSession();
            if (retryData?.session?.user) {
              setGoogle(false);
            }
          }, 1500);
        }
      } catch {
        /* ignore */
      }
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void checkSessionOnReturn();
      }
    };

    window.addEventListener("focus", checkSessionOnReturn);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      if (checkTimer) clearTimeout(checkTimer);
      window.removeEventListener("focus", checkSessionOnReturn);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [google, program, semester, navigate]);

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

  // Admins land in the admin panel; students pick their program, then semester, then dashboard.
  useEffect(() => {
    if (loading || !user) return;
    let active = true;
    void (async () => {
      try {
        const [{ data: userRoles }, { data: dbProfile }] = await Promise.all([
          supabase
            .from("user_roles")
            .select("role")
            .eq("user_id", user.id)
            .eq("role", "admin"),
          supabase
            .from("profiles")
            .select("program_id, semester")
            .eq("id", user.id)
            .maybeSingle(),
        ]);

        if (!active) return;
        const isAdminUser =
          (userRoles?.length ?? 0) > 0 || user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
        if (isAdminUser && typeof window !== "undefined") {
          window.sessionStorage.setItem("revision_admin_unlocked", "true");
          window.localStorage.setItem("revision_admin_unlocked", "true");
          navigate({ to: "/admin", replace: true });
          return;
        }

        // Check if this is a newly created account or signup flow
        const justSignedUp =
          mode === "signup" ||
          (typeof window !== "undefined" &&
            window.sessionStorage.getItem("revision_new_signup") === "true");

        if (justSignedUp) {
          if (typeof window !== "undefined") {
            window.sessionStorage.removeItem("revision_new_signup");
          }
          navigate({ to: "/program-selection", replace: true });
          return;
        }

        // For existing student sign in: check saved selections in database profile first
        const activeProgram = dbProfile?.program_id || profile?.program_id || program;
        const activeSemester = dbProfile?.semester || profile?.semester || semester;

        // Persist selection directly into localStorage
        if (typeof window !== "undefined") {
          try {
            const raw = localStorage.getItem("revision.state.v2");
            const state = raw ? JSON.parse(raw) : {};
            if (activeProgram) state.program = activeProgram;
            if (activeSemester) state.semester = activeSemester;
            localStorage.setItem("revision.state.v2", JSON.stringify(state));
          } catch {
            /* ignore */
          }
        }

        const target = !activeProgram
          ? "/program-selection"
          : !activeSemester
            ? "/semester-selection"
            : "/dashboard";

        const isPopup =
          typeof window !== "undefined" &&
          (window.name === "revision_google_auth" || window.location.search.includes("popup=1"));
        if (isPopup && typeof window !== "undefined" && window.opener && window.opener !== window) {
          try {
            window.opener.postMessage({ type: "REVISION_AUTH_SUCCESS", target }, "*");
            window.opener.location.href = target;
          } catch {
            /* ignore cross-origin */
          }
          try {
            window.close();
          } catch {
            /* ignore */
          }
        }

        navigate({ to: target as any, replace: true });
      } catch (err) {
        console.warn("[Auth] Redirect check error:", err);
        navigate({ to: "/dashboard", replace: true });
      }
    })();
    return () => {
      active = false;
    };
  }, [loading, user, navigate, program, semester, profile, mode]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      if (mode === "admin") {
        if (password !== ADMIN_PASSWORD) {
          setError("Invalid admin password");
          setBusy(false);
          return;
        }
        if (typeof window !== "undefined") {
          window.sessionStorage.setItem("revision_admin_unlocked", "true");
          window.localStorage.setItem("revision_admin_unlocked", "true");
        }
        try {
          await signIn(ADMIN_EMAIL, ADMIN_PASSWORD);
        } catch (err) {
          console.warn("Supabase signIn warning for admin, continuing with local unlock:", err);
        }
        navigate({ to: "/admin", replace: true });
        return;
      } else if (mode === "signin") {
        await signIn(email.trim(), password);
        // Instant authoritative redirect upon successful sign in!
        const { data: sessionData } = await supabase.auth.getSession();
        const currentUserId = sessionData.session?.user?.id;
        if (currentUserId) {
          const [{ data: userRole }, { data: userProfile }] = await Promise.all([
            supabase
              .from("user_roles")
              .select("role")
              .eq("user_id", currentUserId)
              .eq("role", "admin")
              .maybeSingle(),
            supabase
              .from("profiles")
              .select("program_id, semester")
              .eq("id", currentUserId)
              .maybeSingle(),
          ]);

          const isAdminUser =
            Boolean(userRole) || email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
          if (isAdminUser) {
            if (typeof window !== "undefined") {
              window.sessionStorage.setItem("revision_admin_unlocked", "true");
              window.localStorage.setItem("revision_admin_unlocked", "true");
            }
            navigate({ to: "/admin", replace: true });
            return;
          }

          const targetProgram = userProfile?.program_id || program;
          const targetSemester = userProfile?.semester || semester;

          // Directly persist program and semester to localStorage so dashboard never sees null!
          if (typeof window !== "undefined") {
            try {
              const raw = localStorage.getItem("revision.state.v2");
              const state = raw ? JSON.parse(raw) : {};
              if (targetProgram) state.program = targetProgram;
              if (targetSemester) state.semester = targetSemester;
              localStorage.setItem("revision.state.v2", JSON.stringify(state));
            } catch {
              /* ignore */
            }
          }

          const target =
            targetProgram && targetSemester
              ? "/dashboard"
              : targetProgram
                ? "/semester-selection"
                : "/program-selection";

          navigate({ to: target as any, replace: true });
          return;
        } else {
          navigate({ to: "/dashboard", replace: true });
          return;
        }
      } else {
        if (typeof window !== "undefined") {
          window.sessionStorage.setItem("revision_new_signup", "true");
        }
        clearSelection();
        const { needsConfirmation } = await signUp(name.trim(), email.trim(), password);
        if (needsConfirmation) {
          setNotice("Almost done — check your inbox and tap the confirmation link to finish.");
        } else {
          navigate({ to: "/program-selection", replace: true });
          return;
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      if (/invalid login credentials/i.test(msg)) {
        setError(
          "Invalid email or password. If you registered using Google, tap 'Continue with Google' below. Or switch to 'Create' to make a new account."
        );
      } else {
        setError(msg);
      }
    } finally {
      setBusy(false);
    }
  }

  async function withGoogle() {
    setGoogle(true);
    setError(null);
    setNotice(null);

    // Auto-reset loading spinner after 15 seconds if canceled or delayed
    const timeout = setTimeout(() => {
      setGoogle(false);
    }, 15000);

    const framed = typeof window !== "undefined" && window.top !== window.self;
    const isLocal =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
    const callbackUrl = isLocal
      ? `${window.location.origin}/auth`
      : `${import.meta.env["VITE_APP_URL"] || "https://myrevision.in"}/auth`;

    // Listen for postMessage from popup if one is opened
    const handleAuthMessage = (e: MessageEvent) => {
      if (e.data?.type === "REVISION_AUTH_SUCCESS") {
        clearTimeout(timeout);
        window.removeEventListener("message", handleAuthMessage);
        const target = e.data.target || "/dashboard";
        navigate({ to: target as any, replace: true });
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("message", handleAuthMessage);
    }

    const { data, error: err } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: callbackUrl,
        skipBrowserRedirect: framed,
        queryParams: { prompt: "select_account" },
      },
    });

    if (err) {
      clearTimeout(timeout);
      setError(
        /provider is not enabled|unsupported/i.test(err.message)
          ? "Google sign-in is not switched on for this app yet. Use your email and password for now."
          : err.message,
      );
      setGoogle(false);
      if (typeof window !== "undefined") {
        window.removeEventListener("message", handleAuthMessage);
      }
      return;
    }

    if (framed && data?.url) {
      // Open without "noopener,noreferrer" so window.opener is retained and popup can auto-close
      const opened = window.open(
        data.url,
        "revision_google_auth",
        "width=520,height=680,left=100,top=100,scrollbars=yes,resizable=yes",
      );
      if (!opened) {
        window.top!.location.href = data.url;
      } else {
        setNotice("Select your Google account in the popup. This window will sync automatically.");
        const pollTimer = setInterval(async () => {
          if (opened.closed) {
            clearInterval(pollTimer);
            clearTimeout(timeout);
            if (typeof window !== "undefined") {
              window.removeEventListener("message", handleAuthMessage);
            }
            const { data: s } = await supabase.auth.getSession();
            if (s?.session?.user) {
              navigate({ to: "/dashboard", replace: true });
            } else {
              setGoogle(false);
            }
          }
        }, 1000);
      }
    }
  }

  if (oauthResolving) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 text-center">
        <div className="grid size-16 place-items-center rounded-2xl bg-primary-soft text-primary shadow-sm">
          <Loader2 className="size-8 animate-spin" />
        </div>
        <h2 className="mt-5 text-[20px] font-bold text-foreground">Completing sign in...</h2>
        <p className="mt-2 text-[13.5px] text-muted-foreground max-w-xs">
          Authenticating with Google and syncing your revision dashboard.
        </p>
      </div>
    );
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
