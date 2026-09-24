/**
 * Keeps study material the student has already opened on the device, so
 * chapters and model papers stay readable when the connection drops.
 * Browser only — the saved copy lives in localStorage.
 */
import { useEffect, useRef, type ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider,
  dehydrate,
  hydrate,
  type DehydratedState,
} from "@tanstack/react-query";

const STORAGE_KEY = "revision-study-cache";
/** A month of offline reading. */
const MAX_AGE = 1000 * 60 * 60 * 24 * 30;
const SAVE_EVERY_MS = 2000;

export function OfflineCacheProvider({
  client,
  children,
}: {
  client: QueryClient;
  children: ReactNode;
}) {
  const restored = useRef(false);

  if (typeof window !== "undefined" && !restored.current) {
    restored.current = true;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { savedAt: number; state: unknown };
        if (Date.now() - saved.savedAt < MAX_AGE && saved.state) {
          hydrate(client, saved.state as DehydratedState);
        } else {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      /* nothing saved, or storage unavailable */
    }
  }

  useEffect(() => {
    const save = () => {
      try {
        const state = dehydrate(client, {
          shouldDehydrateQuery: (q) => q.state.status === "success",
        });
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ savedAt: Date.now(), state }));
      } catch {
        /* storage full — offline copy is best effort */
      }
    };

    const timer = window.setInterval(save, SAVE_EVERY_MS);
    window.addEventListener("pagehide", save);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("pagehide", save);
      save();
    };
  }, [client]);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
