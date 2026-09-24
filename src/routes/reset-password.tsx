import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { KeyRound, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Screen, ScreenHeader } from "@/components/app-chrome";
import { Button } from "@/components/ui-bits";

export const Route = createFileRoute("/reset-password")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Set a new password — REVISION" },
      { name: "description", content: "Choose a new password for your REVISION account." },
      { property: "og:title", content: "Set a new password — REVISION" },
      { property: "og:description", content: "Choose a new password for your REVISION account." },
    ],
  }),
  component: ResetPasswordScreen,
});

function ResetPasswordScreen() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError("Both passwords must match.");
      return;
    }
    setBusy(true);
    const { error: err } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (err) {
      setError(err.message);
      return;
    }
    setDone(true);
    setTimeout(() => navigate({ to: "/dashboard", replace: true }), 1200);
  }

  return (
    <>
      <ScreenHeader title="New password" back={false} />
      <Screen>
        <div className="mt-2 flex flex-col items-center text-center">
          <span className="grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <KeyRound className="size-7" />
          </span>
          <h1 className="mt-4 font-display text-2xl font-bold">Set a new password</h1>
        </div>

        {done ? (
          <p className="mt-6 rounded-xl bg-primary-soft px-3 py-3 text-center text-sm text-primary">
            Password updated. Taking you back to the app…
          </p>
        ) : (
          <form onSubmit={submit} className="mt-6 grid gap-3">
            <label className="grid gap-1.5">
              <span className="text-sm font-semibold">New password</span>
              <input
                className="h-12 rounded-xl border border-border bg-card px-3 text-base outline-none focus-visible:border-primary"
                type="password"
                value={password}
                required
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className="grid gap-1.5">
              <span className="text-sm font-semibold">Confirm password</span>
              <input
                className="h-12 rounded-xl border border-border bg-card px-3 text-base outline-none focus-visible:border-primary"
                type="password"
                value={confirm}
                required
                autoComplete="new-password"
                onChange={(e) => setConfirm(e.target.value)}
              />
            </label>
            {error && (
              <p className="rounded-xl bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </p>
            )}
            <Button type="submit" size="lg" className="mt-1 w-full" disabled={busy}>
              {busy && <Loader2 className="size-4 animate-spin" />}
              Update password
            </Button>
          </form>
        )}
      </Screen>
    </>
  );
}
