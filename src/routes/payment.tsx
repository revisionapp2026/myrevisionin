import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Crown, Lock } from "lucide-react";
import { plans, premiumBenefits, upiMethods } from "@/lib/mock-data";
import { useAppState } from "@/lib/app-state";
import { Screen, ScreenHeader } from "@/components/app-chrome";
import { Button } from "@/components/ui-bits";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { useEntitlements } from "@/lib/entitlements";

/** Saves the demo purchase so it shows in the admin payment records. */
async function recordDemoPayment(p: {
  plan: string;
  amount: number;
  method: string;
  reference: string;
}) {
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  if (!user) return;
  await supabase.from("payments").insert({
    user_id: user.id,
    plan: p.plan,
    amount: p.amount,
    method: p.method,
    status: "paid",
    reference: p.reference,
    is_demo: true,
  });
}

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
  validateSearch: (s: Record<string, unknown>): { promo?: "lifetime" } =>
    s["promo"] === "lifetime" ? { promo: "lifetime" } : {},
  component: PaymentScreen,
});

function PaymentScreen() {
  const { promo } = Route.useSearch();
  const { saveProfile } = useAuth();
  const { isLifetime } = useEntitlements();
  const [selected, setSelected] = useState(promo ? "lifetime" : plans[0]!.id);
  const [pending, setPending] = useState(false);
  const [sheet, setSheet] = useState<null | "choose" | "processing" | "done">(null);
  const [method, setMethod] = useState(upiMethods[0]!);
  const { isPremium, setPremium } = useAppState();
  const basePlan = plans.find((p) => p.id === selected) ?? plans[0]!;
  // Promotional lifetime price (₹399) applies only when arriving from the promo banner/popup.
  const plan =
    promo && basePlan.id === "lifetime"
      ? { ...basePlan, price: "₹399", note: "Limited offer" }
      : basePlan;

  const pay = (m: string) => {
    setMethod(m);
    setSheet("processing");
    const amount = Number(plan.price.replace(/[^\d]/g, "")) || 0;
    const reference = `DEMO-${Date.now().toString(36).toUpperCase()}`;
    setTimeout(() => {
      setPremium(true);
      setSheet("done");
      void recordDemoPayment({ plan: plan.id, amount, method: m, reference });
      void saveProfile({
        is_premium: true,
        plan: plan.id,
        premium_since: new Date().toISOString(),
      }).catch((e) => console.error("Could not save premium to account", e));
    }, 1800);
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
          onClick={() => setSheet("choose")}
        >
          {isLifetime || (isPremium && selected === "yearly")
            ? "Premium active"
            : pending
              ? "Opening UPI…"
              : `Pay ${plan.price}`}
        </Button>

        {isPremium && (
          <button
            type="button"
            onClick={() => setPremium(false)}
            className="mt-2 w-full text-center text-[12px] font-semibold text-muted-foreground underline"
          >
            Reset demo premium
          </button>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {upiMethods.map((m) => (
            <span
              key={m}
              className="rounded-lg border border-border bg-card px-2.5 py-1.5 text-[11.5px] font-semibold text-muted-foreground"
            >
              {m}
            </span>
          ))}
        </div>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-[12px] font-medium text-muted-foreground">
          <Lock className="size-3.5" />
          Secure UPI Payments
        </p>
      </Screen>

      {sheet && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/50 px-0 pb-0">
          <div className="screen-enter w-full rounded-t-3xl bg-card px-5 pb-8 pt-5">
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-border" />

            {sheet === "choose" && (
              <>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[15px] font-extrabold">REVISION Premium</p>
                    <p className="text-[12.5px] text-muted-foreground">
                      {plan.price} {plan.period} · Demo checkout
                    </p>
                  </div>
                  <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-bold text-primary">
                    TEST MODE
                  </span>
                </div>
                <p className="mt-4 text-[12.5px] font-bold uppercase tracking-wide text-muted-foreground">
                  Pay using
                </p>
                <div className="mt-2 grid gap-2">
                  {upiMethods.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => pay(m)}
                      className="surface-card press flex items-center justify-between px-4 py-3.5 text-left text-[14px] font-semibold"
                    >
                      {m}
                      <span className="text-[12.5px] font-bold text-primary">Pay {plan.price}</span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSheet(null)}
                  className="mt-4 w-full text-center text-[13px] font-semibold text-muted-foreground"
                >
                  Cancel
                </button>
              </>
            )}

            {sheet === "processing" && (
              <div className="py-8 text-center">
                <span className="mx-auto block size-9 animate-spin rounded-full border-[3px] border-border border-t-primary" />
                <p className="mt-4 text-[15px] font-bold">Confirming payment…</p>
                <p className="mt-1 text-[12.5px] text-muted-foreground">via {method}</p>
              </div>
            )}

            {sheet === "done" && (
              <div className="py-6 text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-success/15 text-success">
                  <Check className="size-7" />
                </span>
                <p className="mt-3 text-[17px] font-extrabold">Payment successful</p>
                <p className="mt-1 text-[12.5px] text-muted-foreground">
                  Premium unlocked — all model papers and answers are now open. This is a demo
                  payment; no money was charged.
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
