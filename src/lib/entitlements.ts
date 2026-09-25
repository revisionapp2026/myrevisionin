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

/** Account (database) is the source of truth; the device flag only covers signed-out demo use. */
export function useEntitlements() {
  const { isPremium: localPremium } = useAppState();
  const { user, profile } = useAuth();
  let subscription: Subscription = "FREE";
  if (profile?.is_premium) {
    const p = (profile.plan ?? "").toLowerCase();
    if (p.startsWith("lifetime")) subscription = "LIFETIME";
    else {
      const since = profile.premium_since ? new Date(profile.premium_since).getTime() : Date.now();
      subscription = Date.now() - since < 365 * 864e5 ? "YEARLY" : "FREE";
    }
  } else if (!user && localPremium) subscription = "YEARLY";
  const isPremium = subscription !== "FREE";
  const plan: PlanKey = isPremium ? "premium" : "free";
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
