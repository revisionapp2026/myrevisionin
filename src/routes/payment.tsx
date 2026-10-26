import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Check, Crown, Lock, Loader2, RefreshCw } from "lucide-react";
import { load } from "@cashfreepayments/cashfree-js";
import { plans, premiumBenefits } from "@/lib/mock-data";
import { usePricing } from "@/lib/pricing";
import { useAppState } from "@/lib/app-state";
import { Screen, ScreenHeader } from "@/components/app-chrome";
import { Button } from "@/components/ui-bits";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth";
import { useEntitlements } from "@/lib/entitlements";
import { VerifyPaymentModal } from "@/components/verify-payment-modal";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Unlock Premium — REVISION" },
      {
        name: "description",
        content:
          "Get model papers, previous year question papers, important questions and solved answers.",
      },
      { property: "og:title", content: "Unlock Premium — REVISION" },
      {
        property: "og:description",
        content: "₹199 lifetime access. Secure UPI payments.",
      },
    ],
  }),
  validateSearch: (
    s: Record<string, unknown>,
  ): { promo?: "lifetime"; cf_success?: string; plan?: string; order_id?: string } => {
    const promo = s["promo"] === "lifetime" ? ("lifetime" as const) : undefined;
    const cf_success = s["cf_success"] === "true" ? "true" : undefined;
    const plan = typeof s["plan"] === "string" ? s["plan"] : undefined;
    const order_id = typeof s["order_id"] === "string" ? s["order_id"] : undefined;
    return {
      ...(promo ? { promo } : {}),
      ...(cf_success ? { cf_success } : {}),
      ...(plan ? { plan } : {}),
      ...(order_id ? { order_id } : {}),
    };
  },
  component: PaymentScreen,
});

function PaymentScreen() {
  const { cf_success, order_id } = Route.useSearch();
  const { user, profile, saveProfile, loading } = useAuth();
  const { isLifetime } = useEntitlements();
  const { price, originalPrice, priceFormatted, originalPriceFormatted, isOfferActive, countdown } =
    usePricing();
  const [pending, setPending] = useState(false);
  const [sheet, setSheet] = useState<null | "processing" | "done">(null);
  const [verifyOpen, setVerifyOpen] = useState(false);
  const { setPremium } = useAppState();

  const plan = {
    id: "lifetime",
    price: priceFormatted,
    period: "Lifetime",
    note: "Lifetime Access at just ₹199 · Full access forever",
  };

  // Track whether we have already processed verification for this session
  const unlockAttempted = useRef(false);

  // Handle Cashfree redirect callback and pending order verification
  useEffect(() => {
    let pendingOrderId: string | undefined = undefined;

    if (typeof window !== "undefined") {
      try {
        const raw = window.localStorage.getItem("revision_pending_order");
        if (raw) {
          const parsed = JSON.parse(raw) as { orderId?: string };
          pendingOrderId = parsed.orderId;
        }
      } catch {
        /* ignore */
      }
    }

    // Only verify when redirected back from Cashfree with explicit success/order_id
    const orderIdToVerify = order_id || (cf_success === "true" ? pendingOrderId : undefined);
    const isRedirectSuccess = cf_success === "true";

    if (!isRedirectSuccess && !order_id) return;
    if (unlockAttempted.current) return;
    if (loading) return;

    unlockAttempted.current = true;
    setPending(true);
    setSheet("processing");

    // Verify with backend before granting any premium status
    fetch("/api/cashfree/verify-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: orderIdToVerify,
        userId: user?.id,
        email: profile?.email || user?.email,
        planId: "lifetime",
      }),
    })
      .then(async (res) => {
        const data = (await res.json().catch(() => ({}))) as {
          verified?: boolean;
          success?: boolean;
        };
        if (data.verified || data.success) {
          setPremium(true);
          setSheet("done");
          if (typeof window !== "undefined") {
            window.localStorage.removeItem("revision_pending_order");
            window.localStorage.setItem("revision_lifetime_unlocked", "true");
          }
          if (user && saveProfile) {
            void saveProfile({
              is_premium: true,
              plan: "lifetime",
              premium_since: new Date().toISOString(),
            });
          }
        } else {
          setSheet(null);
          if (typeof window !== "undefined") {
            window.localStorage.removeItem("revision_pending_order");
          }
        }
      })
      .catch((err) => {
        console.warn("Cashfree verification error:", err);
        setSheet(null);
      })
      .finally(() => {
        setPending(false);
      });
  }, [cf_success, order_id, loading, user, profile, saveProfile, setPremium]);

  const pay = async () => {
    if (!user || !profile) {
      alert("Please sign in to continue");
      return;
    }

    const customerPhone = (user.phone || "9999999999").replace(/\D/g, "").slice(0, 10);
    const safePhone = customerPhone.length === 10 ? customerPhone : "9999999999";

    setPending(true);
    setSheet("processing");

    try {
      const amount = Number(plan.price.replace(/[^\d]/g, "")) || 0;

      const response = await fetch("/api/cashfree/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: plan.id,
          amount,
          customerEmail: profile.email || user.email || "",
          customerName: profile.full_name || user.email?.split("@")[0] || "User",
          customerPhone: safePhone,
          userId: user.id,
          origin: typeof window !== "undefined" ? window.location.origin : undefined,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Payment order creation failed:", errorText);
        throw new Error(`Failed to create payment order: ${errorText}`);
      }

      const orderData = await response.json();
      const paymentSessionId = orderData?.payment_session_id;
      if (!paymentSessionId) {
        throw new Error("Cashfree session id missing from payment response");
      }

      // Store pending order in localStorage for auto-recovery if user switches apps
      if (orderData?.order_id && typeof window !== "undefined") {
        try {
          window.localStorage.setItem(
            "revision_pending_order",
            JSON.stringify({
              orderId: orderData.order_id,
              planId: plan.id,
              userId: user.id,
              timestamp: Date.now(),
            }),
          );
        } catch {
          /* ignore */
        }
      }

      const mode =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((import.meta as any).env?.["VITE_CASHFREE_MODE"] as "sandbox" | "production") ||
        "production";
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let cashfree: any = null;

      try {
        cashfree = await load({ mode });
      } catch (sdkErr) {
        console.warn("Cashfree load() failed, falling back to window.Cashfree", sdkErr);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!cashfree && typeof window !== "undefined" && (window as any).Cashfree) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cashfree = (window as any).Cashfree({ mode });
      }

      if (!cashfree) {
        throw new Error("Cashfree SDK failed to initialize");
      }

      const checkoutRes = await cashfree.checkout({
        paymentSessionId,
        redirectTarget: "_self",
      });

      if (checkoutRes?.error) {
        console.error("Cashfree checkout error:", checkoutRes.error);
        setSheet(null);
        setPending(false);
        alert(checkoutRes.error.message || "Failed to open payment gateway. Please try again.");
      }
      return;
    } catch (error) {
      console.error("Payment error:", error);
      setSheet(null);
      setPending(false);
      alert("Failed to initiate payment. Please try again.");
      return;
    }
  };

  return (
    <>
      <ScreenHeader title="Unlock Premium" />
      <Screen>
        <div className="surface-card px-5 py-6 text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-primary text-primary-foreground">
            <Crown className="size-7" />
          </span>
          <h2 className="mt-3 text-[20px] font-extrabold">Unlock Premium</h2>
          <p className="mx-auto mt-1.5 max-w-[17rem] text-[13px] leading-relaxed text-muted-foreground">
            Get model papers, important questions, solved answers &amp; more!
          </p>

          <ul className="mt-5 grid gap-2.5 text-left">
            {premiumBenefits.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-[14px] font-medium">
                <Check className="size-[17px] shrink-0 text-success" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 surface-card relative overflow-hidden rounded-2xl border-2 border-primary bg-primary-soft/50 p-4.5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-primary px-3 py-1 text-[11.5px] font-extrabold uppercase tracking-wide text-primary-foreground shadow-sm">
              Lifetime Access
            </span>
            <span className="flex items-center gap-1 text-[12px] font-bold text-success">
              <Check className="size-3.5" /> Full Access Forever
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-[34px] font-extrabold tracking-tight text-foreground">
              {priceFormatted}
            </span>
            <span className="text-[13px] font-medium text-muted-foreground">one-time payment</span>
          </div>

          <p className="mt-2 text-[12.5px] text-muted-foreground">
            No recurring fees, no renewal hassle. Unlimited lifetime access to all solved model
            papers.
          </p>
        </div>

        <Button
          size="lg"
          variant="accent"
          className="mt-4.5 h-12 w-full text-[15px] font-bold shadow-lg shadow-accent/20"
          disabled={pending || isLifetime}
          onClick={() => void pay()}
        >
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin mr-2" /> Processing…
            </>
          ) : isLifetime ? (
            "Lifetime Access Active"
          ) : (
            `Pay ${priceFormatted} · Unlock Lifetime Access`
          )}
        </Button>

        <p className="mt-3.5 flex items-center justify-center gap-1.5 text-[12px] font-medium text-muted-foreground">
          <Lock className="size-3.5" />
          Secure 256-bit UPI payments powered by Cashfree
        </p>

        <div className="mt-5 border-t border-border/80 pt-4 text-center">
          <button
            type="button"
            onClick={() => setVerifyOpen(true)}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent hover:underline"
          >
            <RefreshCw className="size-3.5" />
            Already paid? Restore / Verify Payment
          </button>
        </div>
      </Screen>

      <VerifyPaymentModal
        open={verifyOpen}
        onClose={() => setVerifyOpen(false)}
        onSuccess={() => {
          setVerifyOpen(false);
          setPremium(true);
        }}
      />

      {sheet && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/50 px-0 pb-0">
          <div className="screen-enter w-full rounded-t-3xl bg-card px-5 pb-8 pt-5">
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-border" />

            {sheet === "processing" && (
              <div className="py-8 text-center">
                <span className="mx-auto block size-9 animate-spin rounded-full border-[3px] border-border border-t-primary" />
                <p className="mt-4 text-[15px] font-bold">Processing payment…</p>
                <p className="mt-1 text-[12.5px] text-muted-foreground">via Cashfree</p>
              </div>
            )}

            {sheet === "done" && (
              <div className="py-6 text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-success/15 text-success">
                  <Check className="size-7" />
                </span>
                <p className="mt-3 text-[17px] font-extrabold">Payment successful</p>
                <p className="mt-1 text-[12.5px] text-muted-foreground">
                  Premium unlocked — all model papers and answers are now open.
                </p>
                <Button
                  size="lg"
                  variant="accent"
                  className="mt-5 w-full h-11 text-[15px] font-bold"
                  onClick={() => {
                    setSheet(null);
                    window.location.href = "/dashboard";
                  }}
                >
                  Start Studying
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
