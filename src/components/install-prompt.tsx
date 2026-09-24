import { useEffect, useState } from "react";
import { Download, Share, SquarePlus, X } from "lucide-react";

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice?: Promise<unknown> };

const DISMISS_KEY = "revision.install.dismissed";

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

function isIosSafari() {
  const ua = navigator.userAgent;
  const ios = /iPad|iPhone|iPod/.test(ua) || (ua.includes("Mac") && navigator.maxTouchPoints > 1);
  return ios && !/CriOS|FxiOS|EdgiOS/.test(ua);
}

export function InstallPrompt() {
  const [event, setEvent] = useState<InstallEvent | null>(null);
  const [ios, setIos] = useState(false);
  const [guide, setGuide] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.self !== window.top || isStandalone()) return;
    if (localStorage.getItem(DISMISS_KEY) === "1") return;
    if (isIosSafari()) {
      setIos(true);
      setHidden(false);
      return;
    }
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setEvent(e as InstallEvent);
      setHidden(false);
    };
    const onInstalled = () => setHidden(true);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setHidden(true);
    setGuide(false);
  };

  if (hidden || (!event && !ios)) return null;

  return (
    <>
      <div className="fixed inset-x-3 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-40 mx-auto flex max-w-xl items-center gap-3 rounded-xl border border-border bg-card px-3.5 py-3 shadow-lift">
        <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-primary-soft text-primary">
          <Download className="size-[18px]" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[14px] font-bold">Install REVISION</span>
          <span className="block text-[12.5px] text-muted-foreground">
            Add it to your home screen for quick revision
          </span>
        </span>
        <button
          type="button"
          onClick={async () => {
            if (ios) return setGuide(true);
            try {
              await event?.prompt();
            } finally {
              dismiss();
            }
          }}
          className="press rounded-lg bg-accent px-3 py-1.5 text-[12.5px] font-bold text-accent-foreground"
        >
          Install
        </button>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss install prompt"
          className="press grid size-7 place-items-center rounded-full text-muted-foreground"
        >
          <X className="size-4" />
        </button>
      </div>

      {guide && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-black/50"
          role="dialog"
          aria-label="Install on iPhone"
        >
          <div className="screen-enter w-full rounded-t-3xl bg-card px-5 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-5">
            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-border" />
            <p className="text-[17px] font-extrabold">Add REVISION to your Home Screen</p>
            <ol className="mt-4 grid gap-3 text-[14.5px]">
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-primary-soft text-primary">
                  <Share className="size-[18px]" />
                </span>
                1. Tap the <b>Share</b> button in Safari's toolbar
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-primary-soft text-primary">
                  <SquarePlus className="size-[18px]" />
                </span>
                2. Choose <b>Add to Home Screen</b>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-primary-soft text-primary font-bold">
                  ✓
                </span>
                3. Tap <b>Add</b> — REVISION opens like an app
              </li>
            </ol>
            <button
              type="button"
              onClick={dismiss}
              className="press mt-5 w-full rounded-xl bg-primary py-3 text-[15px] font-bold text-primary-foreground"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
