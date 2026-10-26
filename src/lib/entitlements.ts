/**
 * Single place that decides what a Free student can do versus a Premium member.
 * Premium is trusted from the account (profiles.is_premium) and, for the demo
 * checkout, from the on-device flag.
 */
import { useAppState } from "@/lib/app-state";
import { useAuth } from "@/lib/auth";

export const PLAN_LIMITS = {
  FREE: {
    label: "Free",
    bookmarksPerUnit: 20,
    highlightsPerUnit: 10,
    aiQuestionsPerDay: 100,
    paidPapers: false,
    progressTracker: false,
  },
  premium: {
    label: "Premium",
    bookmarksPerUnit: 20,
    highlightsPerUnit: 10,
    aiQuestionsPerDay: 100,
    paidPapers: true,
    progressTracker: true,
  },
} as const;

export type PlanKey = keyof typeof PLAN_LIMITS;

const AI_KEY = "revision-ai-usage";

function today() {
  return new Date().toISOString().slice(0, 10);
}

/** How many Ask & Revise questions the student has used today (per device). */
export function readAiUsage(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem(AI_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw) as { date?: string; count?: number };
    return parsed.date === today() ? Number(parsed.count) || 0 : 0;
  } catch {
    return 0;
  }
}

export function recordAiUsage(): number {
  const next = readAiUsage() + 1;
  try {
    window.localStorage.setItem(AI_KEY, JSON.stringify({ date: today(), count: next }));
  } catch {
    /* storage unavailable */
  }
  return next;
}

export type Subscription = "FREE" | "YEARLY" | "LIFETIME";

/** Account (database) is the absolute source of truth. Unpaid accounts are always Free. */
export function useEntitlements() {
  const { isPremium: localPremium, setPremium } = useAppState();
  const { user, profile } = useAuth();

  let subscription: Subscription = "FREE";

  if (user) {
    if (profile?.is_premium === true) {
      subscription = profile.plan === "yearly" ? "YEARLY" : "LIFETIME";
    } else {
      subscription = "FREE";
      // Purge any stale demo/test unlock flags from browser storage
      if (typeof window !== "undefined") {
        try {
          if (window.localStorage.getItem("revision_lifetime_unlocked")) {
            window.localStorage.removeItem("revision_lifetime_unlocked");
          }
          if (window.sessionStorage.getItem("revision_lifetime_unlocked")) {
            window.sessionStorage.removeItem("revision_lifetime_unlocked");
          }
        } catch {
          /* ignore */
        }
      }
      if (localPremium) {
        setPremium(false);
      }
    }
  } else {
    subscription = "FREE";
  }

  const isPremium = subscription !== "FREE";
  const plan: PlanKey = isPremium ? "premium" : "FREE";
  return {
    isPremium,
    subscription,
    isLifetime: subscription === "LIFETIME",
    plan,
    limits: PLAN_LIMITS[plan],
    planName:
      subscription === "LIFETIME" ? "Lifetime" : subscription === "YEARLY" ? "Yearly" : "Free",
  };
}
