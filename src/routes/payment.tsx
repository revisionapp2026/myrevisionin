import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Check, Crown, Lock, Loader2 } from "lucide-react";
import { plans, premiumBenefits } from "@/lib/mock-data";
import { useAppState } from "@/lib/app-state";
import { Screen, ScreenHeader } from "@/components/app-chrome";
import { Button } from "@/components/ui-bits";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth";
import { useEntitlements } from "@/lib/entitlements";

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
      { property: "og:description", content: "₹199 / year or ₹399 lifetime. Secure UPI payments." },
    ],
  }),
  validateSearch: (s: Record<string, unknown>): { promo?: "lifetime"; cf_success?: string } => {
    const promo = s["promo"] === "lifetime" ? "lifetime" : undefined;
    const cf_success = s["cf_success"] === "true" ? "true" : undefined;
    return { ...(promo ? { promo } : {}), ...(cf_success ? { cf_success } : {}) };
  },
  component: PaymentScreen,
});

function PaymentScreen() {
  const { promo, cf_success } = Route.useSearch();
  const { user, profile, saveProfile } = useAuth();
  const { isLifetime } = useEntitlements();
  const [selected, setSelected] = useState(promo ? "lifetime" : plans[0]!.id);
  const [pending, setPending] = useState(false);
  const [sheet, setSheet] = useState<null | "processing" | "done">(null);
  const { isPremium, setPremium } = useAppState();
  const basePlan = plans.find((p) => p.id === selected) ?? plans[0]!;
  // Promotional lifetime price (₹399) applies only when arriving from the promo banner/popup.
  const plan =
    promo && basePlan.id === "lifetime"
      ? { ...basePlan, price: "₹399", note: "Limited offer" }
      : basePlan;

  // Handle Cashfree success callback
  useEffect(() => {
    if (cf_success === "true" && !isPremium && profile) {
      setPremium(true);
      setSheet("done");
      void saveProfile({
        is_premium: true,
        plan: selected,
        premium_since: new Date().toISOString(),
      }).catch((e) => console.error("Could not save premium to account", e));
    }
  }, [cf_success, isPremium, profile, saveProfile, selected]);

  const pay = async () => {
    if (!user || !profile) {
      alert("Please sign in to continue");
      return;
    }

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
          customerName: profile.full_name || "User",
          customerPhone: "9999999999",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create payment order");
      }

      const orderData = await response.json();

      // Redirect to Cashfree hosted checkout
      const appUrl = import.meta.env["VITE_APP_URL"] || "https://myrevision.in";
      const checkoutUrl = `https://sandbox.cashfree.com/billpay/checkout/${orderData.payment_session_id}`;
      
      // Open in new tab
      window.open(checkoutUrl, "_blank");
      
      // Show success message (actual verification happens via webhook)
      setSheet("done");
      setPending(false);
    } catch (error) {
      console.error("Payment error:", error);
      setSheet(null);
      setPending(false);
      alert("Failed to initiate payment. Please try again.");
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

        <div className="mt-4 grid gap-2.5">
          {plans.map((p) => {
            const active = selected === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelected(p.id)}
                aria-pressed={active}
                className={cn(
                  "surface-card press flex items-center gap-3 px-4 py-3.5 text-left",
                  active && "border-primary bg-primary-soft",
                )}
              >
                <span
                  className={cn(
                    "grid size-5 shrink-0 place-items-center rounded-full border-2",
                    active ? "border-primary bg-primary text-white" : "border-border",
                  )}
                >
                  {active && <Check className="size-3" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-bold">
                    {promo && p.id === "lifetime" ? (
                      <>₹399 {p.period}</>
                    ) : (
                      <>
                        {p.price} {p.period}
                      </>
                    )}
                  </span>
                  <span className="block text-[12.5px] text-muted-foreground">{p.note}</span>
                </span>
                {p.highlight && (
                  <span className="rounded-full bg-premium/15 px-2 py-1 text-[11px] font-bold text-premium">
                    Best value
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <Button
          size="lg"
          variant="accent"
          className="mt-4 w-full"
          disabled={pending || isLifetime || (isPremium && selected === "yearly")}
          onClick={() => void pay()}
        >
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Processing…
            </>
          ) : isLifetime || (isPremium && selected === "yearly") ? (
            "Premium active"
          ) : (
            `Pay ${plan.price}`
          )}
        </Button>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-[12px] font-medium text-muted-foreground">
          <Lock className="size-3.5" />
          Secure payments powered by Cashfree
        </p>
      </Screen>

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
                  className="mt-5 w-full"
                  onClick={() => setSheet(null)}
                >
                  Start revising
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
