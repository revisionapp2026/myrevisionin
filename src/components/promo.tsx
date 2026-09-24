import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Crown, X } from "lucide-react";
import { useEntitlements } from "@/lib/entitlements";
import { useAuth } from "@/lib/auth";

const OPEN_KEY = "revision.opens";
const SESSION_KEY = "revision.opened";
export const POPUP_EVERY = 10;

/** Catchy header CTA next to the bell; hidden for Lifetime accounts (account status is the source of truth). */
export function PromoBanner() {
  const { isLifetime } = useEntitlements();
  const { loading } = useAuth();
  if (loading || isLifetime) return null;
  return (
    <Link
      to="/payment"
      search={{ promo: "lifetime" }}
      aria-label="Get Lifetime Access at just ₹399"
      className="press group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-3 py-1.5 shadow-card ring-1 ring-white/40"
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <Crown className="size-3.5 animate-pulse text-white drop-shadow" />
      <span className="text-[11.5px] font-extrabold leading-tight text-white drop-shadow-sm">
        Lifetime Access <span className="rounded bg-white/25 px-1 py-px">₹399</span>
      </span>
    </Link>
  );
}

/** Shows the Lifetime offer about once every 10 app opens for non-Lifetime students. */
export function PromoPopup() {
  const { isLifetime } = useEntitlements();
  const { loading } = useAuth();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (loading || isLifetime) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return; // count once per app open
      sessionStorage.setItem(SESSION_KEY, "1");
      const count = (Number(localStorage.getItem(OPEN_KEY)) || 0) + 1;
      localStorage.setItem(OPEN_KEY, String(count));
      if (count % POPUP_EVERY === 0) {
        const t = setTimeout(() => setOpen(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      /* storage unavailable */
    }
    return undefined;
  }, [loading, isLifetime]);

  if (!open || isLifetime) return null;
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-6"
      role="dialog"
      aria-label="Lifetime offer"
    >
      <div className="screen-enter relative w-full max-w-sm rounded-2xl bg-card px-5 pb-5 pt-6 text-center shadow-lift">
        <button
          type="button"
          aria-label="Close offer"
          onClick={() => setOpen(false)}
          className="press absolute right-3 top-3 grid size-8 place-items-center rounded-full text-muted-foreground hover:bg-muted"
        >
          <X className="size-4" />
        </button>
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-premium/15 text-premium">
          <Crown className="size-7" />
        </span>
        <p className="mt-3 text-[12px] font-bold uppercase tracking-wide text-accent">
          Limited offer
        </p>
        <h2 className="mt-1 text-[20px] font-extrabold">Get Lifetime Access</h2>
        <p className="mt-1 text-[14px] text-muted-foreground">
          Only <b className="text-foreground">₹399</b> — every paper, answer and the study buddy,
          forever.
        </p>
        <Link
          to="/payment"
          search={{ promo: "lifetime" }}
          onClick={() => setOpen(false)}
          className="press mt-4 block rounded-xl bg-accent py-3 text-[15px] font-bold text-accent-foreground"
        >
          Get Lifetime
        </Link>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="mt-3 text-[13px] font-semibold text-muted-foreground"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
