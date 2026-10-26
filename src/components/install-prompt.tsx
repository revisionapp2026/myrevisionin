import { useCallback, useEffect, useState } from "react";
import { Download, Monitor, MoreVertical, Share, Smartphone, SquarePlus, X } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice?: Promise<unknown> };

const DISMISS_KEY = "revision.install.dismissed_session";

declare global {
  interface Window {
    __pwaInstallEvent?: InstallEvent | null;
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    window.__pwaInstallEvent = e as InstallEvent;
    window.dispatchEvent(new CustomEvent("pwa-ready"));
  });
}

function isStandalone() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

function getPlatformType(): "ios" | "android" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  const ua = navigator.userAgent;
  const isIos = /iPad|iPhone|iPod/.test(ua) || (ua.includes("Mac") && navigator.maxTouchPoints > 1);
  if (isIos && !/CriOS|FxiOS|EdgiOS/.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}

export function InstallPrompt() {
  const [event, setEvent] = useState<InstallEvent | null>(() => {
    if (typeof window !== "undefined" && window.__pwaInstallEvent) {
      return window.__pwaInstallEvent;
    }
    return null;
  });
  const [guide, setGuide] = useState(false);
  const [standalone, setStandalone] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const { user } = useAuth();
  const platform = getPlatformType();

  const trackInstall = useCallback(() => {
    const payload = {
      userId: user?.id,
      platform: navigator.platform,
      userAgent: navigator.userAgent,
    };

    fetch("/api/analytics/track-install", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (supabase.from as any)("pwa_installs")
        .insert({
          user_id: user?.id || null,
          platform: navigator.platform || null,
          user_agent: navigator.userAgent || null,
        })
        .then(() => {})
        .catch(() => {});
    } catch {
      /* ignore */
    }
  }, [user?.id]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.self !== window.top) return;

    if (isStandalone()) {
      setStandalone(true);
      return;
    }

    if (sessionStorage.getItem(DISMISS_KEY) === "1") {
      setBannerDismissed(true);
    }

    const onPrompt = (e: Event) => {
      e.preventDefault();
      const installEvent = e as InstallEvent;
      window.__pwaInstallEvent = installEvent;
      setEvent(installEvent);
    };

    const onInstalled = () => {
      setStandalone(true);
      setGuide(false);
    };

    const onPwaReady = () => {
      if (window.__pwaInstallEvent) {
        setEvent(window.__pwaInstallEvent);
      }
    };

    const onManualTrigger = () => {
      trackInstall();
      const currentEvt = event || window.__pwaInstallEvent;
      if (currentEvt) {
        try {
          void currentEvt.prompt();
          return;
        } catch {
          /* fallback to modal */
        }
      }
      setGuide(true);
    };

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    window.addEventListener("pwa-ready", onPwaReady);
    window.addEventListener("trigger-pwa-install", onManualTrigger);

    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      window.removeEventListener("pwa-ready", onPwaReady);
      window.removeEventListener("trigger-pwa-install", onManualTrigger);
    };
  }, [event, trackInstall]);

  const handleInstallClick = async () => {
    trackInstall();
    const currentEvt = event || window.__pwaInstallEvent;
    if (currentEvt) {
      try {
        await currentEvt.prompt();
        setEvent(null);
        window.__pwaInstallEvent = null;
        return;
      } catch (err) {
        console.warn("Native install prompt error:", err);
      }
    }
    setGuide(true);
  };

  const dismissBanner = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setBannerDismissed(true);
  };

  if (standalone) return null;

  return (
    <>
      {/* Floating Bottom Download Banner */}
      {!bannerDismissed && (
        <aside
          aria-label="Download REVISION App"
          className="fixed inset-x-3 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-40 mx-auto flex max-w-xl items-center gap-3 rounded-xl border border-primary/25 bg-card/95 px-3.5 py-3 shadow-lift backdrop-blur-md"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-primary-soft text-primary shadow-xs">
            <Download className="size-[18px]" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-bold leading-tight text-foreground">
              Download REVISION App
            </span>
            <span className="block text-[12px] text-muted-foreground">
              Fast, offline exam revision application
            </span>
          </span>
          <button
            type="button"
            onClick={handleInstallClick}
            className="press shrink-0 rounded-lg bg-accent px-3 py-1.5 text-[12.5px] font-bold text-accent-foreground shadow-xs transition hover:brightness-105"
          >
            Download App
          </button>
          <button
            type="button"
            onClick={dismissBanner}
            aria-label="Dismiss download banner"
            className="press grid size-7 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-muted"
          >
            <X className="size-4" />
          </button>
        </aside>
      )}

      {/* Download Dialog fallback */}
      {guide && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Download App"
        >
          <div className="screen-enter w-full max-w-md rounded-t-3xl bg-card px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-5 shadow-2xl sm:rounded-2xl">
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-border sm:hidden" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-primary-soft text-primary">
                  {platform === "ios" ? (
                    <Smartphone className="size-4" />
                  ) : platform === "android" ? (
                    <Download className="size-4" />
                  ) : (
                    <Monitor className="size-4" />
                  )}
                </span>
                <p className="text-[17px] font-extrabold text-foreground">
                  Download REVISION App
                </p>
              </div>
              <button
                type="button"
                onClick={() => setGuide(false)}
                className="grid size-7 place-items-center rounded-full text-muted-foreground hover:bg-muted"
              >
                <X className="size-4" />
              </button>
            </div>

            {platform === "ios" ? (
              <ol className="mt-4 grid gap-3 text-[14px]">
                <li className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                    <Share className="size-4" />
                  </span>
                  <span>1. Tap the <b>Share</b> button in Safari toolbar</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                    <SquarePlus className="size-4" />
                  </span>
                  <span>2. Tap <b>Add to Home Screen</b> to download</span>
                </li>
              </ol>
            ) : platform === "android" ? (
              <ol className="mt-4 grid gap-3 text-[14px]">
                <li className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                    <MoreVertical className="size-4" />
                  </span>
                  <span>1. Open your browser menu (<b>⋮</b>)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                    <Download className="size-4" />
                  </span>
                  <span>2. Tap <b>Install app</b> to download REVISION</span>
                </li>
              </ol>
            ) : (
              <ol className="mt-4 grid gap-3 text-[14px]">
                <li className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                    <Download className="size-4" />
                  </span>
                  <span>1. Click the <b>Install</b> icon in your address bar</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                    <MoreVertical className="size-4" />
                  </span>
                  <span>2. Or open menu (<b>⋮</b>) and choose <b>Install REVISION</b></span>
                </li>
              </ol>
            )}

            <button
              type="button"
              onClick={() => {
                setGuide(false);
                dismissBanner();
              }}
              className="press mt-5 w-full rounded-xl bg-primary py-3 text-[15px] font-bold text-primary-foreground shadow-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
