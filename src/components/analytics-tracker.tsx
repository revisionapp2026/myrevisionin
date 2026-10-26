import { useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";

export function AnalyticsTracker() {
  const { user } = useAuth();

  useEffect(() => {
    // Track site visits
    const sessionId =
      sessionStorage.getItem("revision_session_id") ||
      Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem("revision_session_id", sessionId);

    const lastVisit = localStorage.getItem("revision_last_visit");
    const now = new Date().toISOString();

    // Only track if last visit was more than 30 minutes ago or doesn't exist
    if (!lastVisit || new Date(now).getTime() - new Date(lastVisit).getTime() > 30 * 60 * 1000) {
      fetch("/api/analytics/track-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user?.id,
          sessionId,
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }),
      }).catch(() => {}); // Silently fail on tracking errors
      localStorage.setItem("revision_last_visit", now);
    }
  }, [user?.id]);

  return null;
}
