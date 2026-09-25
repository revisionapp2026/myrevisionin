import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, ChevronLeft, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Screen, ScreenHeader } from "@/components/app-chrome";
import { Button } from "@/components/ui-bits";
import logo from "@/assets/revision-logo.png";

const ADMIN_EMAIL = "admin@revisionapp.com";
const ADMIN_PASSWORD = "revision2026";

export const Route = createFileRoute("/adminlogin")({
  head: () => ({
    meta: [
      { title: "Admin Login — REVISION" },
      {
        name: "description",
        content: "Admin access for REVISION platform management.",
      },
    ],
  }),
  component: AdminLoginScreen,
});

function AdminLoginScreen() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);

    if (password !== ADMIN_PASSWORD) {
      setError("Invalid admin password");
      setBusy(false);
      return;
    }

    try {
      await signIn(ADMIN_EMAIL, ADMIN_PASSWORD);
    } catch (err) {
      setError("Admin user not found. Please create admin user in Supabase.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <div className="brand-header px-5 pb-10 pt-12 text-center text-primary-foreground">
        <span className="mx-auto grid size-[76px] place-items-center overflow-hidden rounded-3xl bg-white/10 backdrop-blur">
          <img src={logo} alt="REVISION" className="size-[76px] object-cover" />
        </span>
        <h1 className="mt-4 text-[26px] font-extrabold tracking-tight">REVISION</h1>
        <p className="mt-1 text-[13px] font-medium text-primary-foreground/80">Admin Access</p>
      </div>

      <Screen className="-mt-6">
        <div className="surface-card px-5 py-5">
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="mb-3 flex items-center gap-1 text-[13px] font-semibold text-primary"
          >
            <ChevronLeft className="size-4" /> Back to home
          </button>
          <p className="flex items-center gap-2 rounded-xl bg-primary-soft px-3 py-2.5 text-[12.5px] font-semibold text-primary">
            <ShieldCheck className="size-4 shrink-0" />
            Enter the admin password to manage subjects, units, papers and students.
          </p>

          <form onSubmit={submit} className="mt-4 grid gap-3">
            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-foreground">
                Admin password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-[14px] placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {error && (
              <p className="rounded-xl bg-destructive/10 px-3 py-2 text-[13px] font-medium text-destructive">
                {error}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              variant="primary"
              className="mt-1 w-full"
              disabled={busy}
            >
              {busy ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Signing in…
                </>
              ) : (
                "Open admin panel"
              )}
            </Button>
          </form>
        </div>

        <p className="mt-5 text-center text-[12px] leading-relaxed text-muted-foreground">
          This is a restricted area. Unauthorized access is prohibited.
        </p>
      </Screen>
    </>
  );
}
