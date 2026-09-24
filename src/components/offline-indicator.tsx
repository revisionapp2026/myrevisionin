import { useEffect, useState } from "react";
import { CloudOff, RefreshCw } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

/**
 * Shows a small banner when the device loses its connection, and refetches
 * cached study data automatically once the connection is back.
 */
export function OfflineIndicator() {
  const qc = useQueryClient();
  const [offline, setOffline] = useState(false);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    setOffline(!navigator.onLine);

    const goOffline = () => setOffline(true);
    const goOnline = () => {
      setOffline(false);
      setSyncing(true);
      void qc.refetchQueries({ type: "active" }).finally(() => {
        window.setTimeout(() => setSyncing(false), 1200);
      });
    };

    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, [qc]);

  if (!offline && !syncing) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-2">
      <div
        role="status"
        className={
          offline
            ? "flex items-center gap-2 rounded-full bg-foreground px-3.5 py-1.5 text-[12.5px] font-semibold text-background shadow-lift"
            : "flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 text-[12.5px] font-semibold text-primary-foreground shadow-lift"
        }
      >
        {offline ? (
          <>
            <CloudOff className="size-3.5" /> Offline — showing saved material
          </>
        ) : (
          <>
            <RefreshCw className="size-3.5 animate-spin" /> Back online — syncing
          </>
        )}
      </div>
    </div>
  );
}
