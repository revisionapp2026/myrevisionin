import { useState, type FormEvent, type ChangeEvent } from "react";
import { Check, Loader2, RefreshCw, X, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui-bits";
import { useAuth } from "@/lib/auth";
import { useAppState } from "@/lib/app-state";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
};

export function VerifyPaymentModal({ open, onClose, onSuccess }: Props) {
  const { user, profile, saveProfile, refreshProfile } = useAuth();
  const { setPremium } = useAppState();
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!open) return null;

  async function handleVerify(e?: FormEvent) {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Retrieve pending order from localStorage if available
    let fallbackOrderId = orderId.trim();
    if (!fallbackOrderId && typeof window !== "undefined") {
      try {
        const stored = window.localStorage.getItem("revision_pending_order");
        if (stored) {
          const parsed = JSON.parse(stored) as { orderId?: string };
          if (parsed.orderId) fallbackOrderId = parsed.orderId;
        }
      } catch {
        /* ignore */
      }
    }

    try {
      const res = await fetch("/api/cashfree/verify-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: fallbackOrderId || undefined,
          userId: user?.id,
          email: profile?.email || user?.email,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        verified?: boolean;
        message?: string;
        plan?: string;
      };

      if (data.verified || data.success) {
        setPremium(true);
        if (typeof window !== "undefined") {
          window.localStorage.removeItem("revision_pending_order");
          window.localStorage.setItem("revision_lifetime_unlocked", "true");
        }
        if (user && saveProfile) {
          void saveProfile({
            is_premium: true,
            plan: "lifetime",
            premium_since: new Date().toISOString(),
          }).then(() => {
            void refreshProfile();
          });
        } else {
          void refreshProfile();
        }
        setSuccess(data.message || "Lifetime Access restored! All model papers unlocked.");
        if (onSuccess) {
          setTimeout(onSuccess, 1000);
        }
      } else {
        setError(
          data.message ||
            "Could not find an active transaction. If you have the Order ID from your Cashfree SMS/email, please enter it below.",
        );
      }
    } catch (err) {
      console.error("Verification failed:", err);
      setError("Network error. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-5 shadow-2xl animate-in fade-in zoom-in-95">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-accent-soft text-accent">
              <RefreshCw className="size-4" />
            </span>
            <h3 className="text-[16px] font-bold">Restore Lifetime Access</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-8 place-items-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        {success ? (
          <div className="py-6 text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-full bg-success/15 text-success">
              <Check className="size-6" />
            </span>
            <p className="mt-3 text-[16px] font-bold text-foreground">Lifetime Access Unlocked!</p>
            <p className="mt-1 text-[13px] text-muted-foreground">{success}</p>
            <Button
              size="lg"
              variant="accent"
              className="mt-5 w-full"
              onClick={() => {
                onClose();
                window.location.reload();
              }}
            >
              Start Studying
            </Button>
          </div>
        ) : (
          <div className="pt-4">
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              If you have already paid for Lifetime Access via UPI/Cashfree, tap below to
              automatically restore your access.
            </p>

            {user && (
              <div className="mt-3.5 rounded-xl border border-border/80 bg-muted/40 p-3.5">
                <p className="text-[11.5px] text-muted-foreground">Signed in as</p>
                <p className="text-[14px] font-bold text-foreground truncate">
                  {user.email || profile?.full_name || "User"}
                </p>
                <Button
                  size="md"
                  variant="accent"
                  className="mt-3 w-full text-[13px] h-10 font-bold"
                  disabled={loading}
                  onClick={() => void handleVerify()}
                >
                  {loading && !orderId ? (
                    <>
                      <Loader2 className="size-3.5 animate-spin mr-1.5" /> Checking your payment…
                    </>
                  ) : (
                    "Restore My Lifetime Access"
                  )}
                </Button>
              </div>
            )}

            <div className="relative my-4 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <span className="relative bg-card px-2.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Or with Order / Payment ID
              </span>
            </div>

            <form onSubmit={(e: FormEvent) => void handleVerify(e)} className="grid gap-3">
              <div>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setOrderId(e.target.value)}
                  placeholder="e.g. ORDER_... or Payment ID from SMS"
                  className="w-full rounded-xl border border-input bg-background px-3.5 py-2 text-[13px] placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {error && (
                <div className="flex items-start gap-2 rounded-xl bg-destructive/10 p-3 text-[12px] text-destructive">
                  <ShieldAlert className="size-4 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <Button
                type="submit"
                size="md"
                variant="outline"
                className="w-full text-[12.5px]"
                disabled={loading || !orderId.trim()}
              >
                {loading && orderId ? (
                  <>
                    <Loader2 className="size-3.5 animate-spin mr-1.5" /> Verifying…
                  </>
                ) : (
                  "Verify Order ID"
                )}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
