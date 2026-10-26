import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Check, Clock, Crown, Sparkles, X, Zap } from "lucide-react";
import { useEntitlements } from "@/lib/entitlements";
import { useAuth } from "@/lib/auth";
import { usePricing } from "@/lib/pricing";

/** Catchy header CTA next to the bell; hidden for Lifetime accounts */
export function PromoBanner() {
  const { isLifetime } = useEntitlements();
  const { loading } = useAuth();
  const { priceFormatted, isOfferActive } = usePricing();

  if (loading || isLifetime) return null;

  return (
    <Link
      to="/payment"
      search={{ promo: "lifetime" }}
      aria-label={`Get Lifetime Access at just ${priceFormatted}`}
      className="press group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-3 py-1.5 shadow-card ring-1 ring-white/40"
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <Crown className="size-3.5 animate-pulse text-white drop-shadow" />
      <span className="text-[11.5px] font-extrabold leading-tight text-white drop-shadow-sm flex items-center gap-1.5">
        Lifetime Access
        <span className="rounded bg-white/25 px-1.5 py-0.5 font-bold">{priceFormatted}</span>
      </span>
    </Link>
  );
}

/**
 * Catchy Pop-up that appears 2 times per 3 minutes (e.g. at 45s and 135s of every 180s cycle)
 * after the app is opened, highlighting Lifetime Access at just ₹199.
 */
export function PromoPopup() {
  const { isLifetime } = useEntitlements();
  const { loading, isAdmin } = useAuth();
  const { priceFormatted, originalPriceFormatted, isOfferActive, countdown } = usePricing();
  const routerState = useRouterState();
  const pathname = routerState?.location?.pathname ?? "";

  const isAdminRoute =
    pathname.startsWith("/admin") ||
    pathname.includes("admin") ||
    (typeof window !== "undefined" && window.location.pathname.includes("admin"));

  const [open, setOpen] = useState(false);
  const openTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    if (loading || isLifetime || isAdmin || isAdminRoute) return;

    // Record open timestamp when this component mounts on app open
    const appOpenTime = Date.now();
    openTimeRef.current = appOpenTime;

    // Schedule 2 popups per 3-minute cycle (180 seconds):
    // Slot 1: at 45 seconds (0:45)
    // Slot 2: at 135 seconds (2:15, which is 90 seconds after slot 1)
    // Repeating every 180 seconds
    const interval = setInterval(() => {
      const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
      if (currentPath.includes("/payment") || currentPath.includes("/admin") || isAdmin) {
        return;
      }

      const elapsedSeconds = Math.floor((Date.now() - openTimeRef.current) / 1000);
      const cycleSecond = elapsedSeconds % 180;

      // Trigger around 45s or 135s of the 180s window
      if (cycleSecond === 45 || cycleSecond === 135) {
        setOpen(true);
      }
    }, 1000);

    // Initial first trigger at 45s if timer just started
    const firstTimeout = setTimeout(() => {
      const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
      if (!currentPath.includes("/payment") && !currentPath.includes("/admin") && !isAdmin) {
        setOpen(true);
      }
    }, 45 * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, [loading, isLifetime, isAdmin, isAdminRoute]);

  // Don't show if already lifetime, or not opened, or user is on payment/admin page
  if (!open || isLifetime || isAdmin || isAdminRoute || pathname === "/payment") return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-xs px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Special Lifetime Offer"
    >
      <div className="screen-enter relative w-full max-w-sm overflow-hidden rounded-3xl border border-amber-500/30 bg-card p-5 text-center shadow-2xl">
        {/* Glow ambient background */}
        <div className="pointer-events-none absolute -top-20 left-1/2 size-48 -translate-x-1/2 rounded-full bg-gradient-to-br from-amber-400/25 via-orange-500/20 to-rose-500/0 blur-2xl" />

        {/* Close button */}
        <button
          type="button"
          aria-label="Close offer"
          onClick={() => setOpen(false)}
          className="press absolute right-3.5 top-3.5 z-10 grid size-8 place-items-center rounded-full bg-muted/80 text-muted-foreground hover:bg-muted"
        >
          <X className="size-4" />
        </button>

        {/* Badge */}
        <div className="relative mx-auto inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
          <Zap className="size-3 fill-white text-white" />
          ✨ Lifetime Access Deal
        </div>

        {/* Icon */}
        <div className="relative mx-auto mt-3 grid size-14 place-items-center rounded-2xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 ring-1 ring-amber-500/30">
          <Crown className="size-7 text-amber-500 drop-shadow-sm" />
        </div>

        {/* Headline */}
        <h2 className="mt-3 text-[22px] font-black tracking-tight text-foreground">
          Lifetime Access at just ₹199
        </h2>
        <p className="mt-1 text-[13px] font-medium text-muted-foreground">
          Unlock all model papers, answered questions &amp; AI study buddy!
        </p>

        {/* Price display */}
        <div className="mt-4 flex items-baseline justify-center gap-1.5">
          <span className="text-[40px] font-black tracking-tight text-foreground">
            {priceFormatted}
          </span>
          <span className="text-[14px] font-bold text-muted-foreground">/ one-time</span>
        </div>
        <p className="mt-1 text-[12px] font-semibold text-amber-600 dark:text-amber-400">
          ⚡ One-Time Payment · Full Access Forever
        </p>

        {/* Value Checklist */}
        <ul className="mt-4 grid gap-1.5 text-left text-[12.5px] font-medium">
          <li className="flex items-center gap-2">
            <span className="grid size-4 place-items-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <Check className="size-3 stroke-[3]" />
            </span>
            <span>2 Solved Model Papers per subject</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="grid size-4 place-items-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <Check className="size-3 stroke-[3]" />
            </span>
            <span>Previous year question papers solved</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="grid size-4 place-items-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <Check className="size-3 stroke-[3]" />
            </span>
            <span>Unlimited AI Doubt Solver &amp; revision help</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="grid size-4 place-items-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <Check className="size-3 stroke-[3]" />
            </span>
            <span>One-time payment · Lifetime offline access</span>
          </li>
        </ul>

        {/* Action Button */}
        <Link
          to="/payment"
          search={{ promo: "lifetime" }}
          onClick={() => setOpen(false)}
          className="press mt-4.5 block w-full rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 py-3.5 text-[15px] font-extrabold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-105"
        >
          Claim Lifetime Access for {priceFormatted}
        </Link>

        {/* Dismiss */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="press mt-2.5 text-[12.5px] font-semibold text-muted-foreground hover:text-foreground"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
