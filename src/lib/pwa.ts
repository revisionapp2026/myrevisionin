/**
 * Guarded service-worker registration.
 * Never registers in dev, inside an iframe, in Lovable preview hosts, or with ?sw=off —
 * in those cases any existing /sw.js registration is removed instead.
 */
const SW_URL = "/sw.js";

function isPreviewHost(hostname: string) {
  return (
    hostname.startsWith("id-preview--") ||
    hostname.startsWith("preview--") ||
    hostname === "lovableproject.com" ||
    hostname.endsWith(".lovableproject.com") ||
    hostname === "lovableproject-dev.com" ||
    hostname.endsWith(".lovableproject-dev.com") ||
    hostname === "beta.lovable.dev" ||
    hostname.endsWith(".beta.lovable.dev")
  );
}

async function unregisterAppWorkers() {
  if (!("serviceWorker" in navigator)) return;
  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.allSettled(
    registrations
      .filter((registration) => (registration.active?.scriptURL ?? "").includes(SW_URL))
      .map((registration) => registration.unregister()),
  );
}

export function registerServiceWorker() {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  const inIframe = window.self !== window.top;
  const swOff = new URL(window.location.href).searchParams.get("sw") === "off";
  const isLocalhost =
    window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  const refused =
    (!import.meta.env.PROD && !isLocalhost) || inIframe || swOff || isPreviewHost(window.location.hostname);

  if (refused) {
    void unregisterAppWorkers();
    return;
  }

  const register = () => {
    let refreshing = false;
    const hadController = Boolean(navigator.serviceWorker.controller);
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (hadController && !refreshing) {
        if (
          window.location.pathname.startsWith("/auth") ||
          window.location.search.includes("code=") ||
          window.location.hash.includes("access_token")
        ) {
          return;
        }
        refreshing = true;
        window.location.reload();
      }
    });

    // Auto-purge outdated client cache versions on boot
    try {
      const CURRENT_VER = "v7-20261027-authfix";
      if (localStorage.getItem("revision_pwa_cache_ver") !== CURRENT_VER) {
        localStorage.setItem("revision_pwa_cache_ver", CURRENT_VER);
        if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({ type: "CLEAR_ALL_CACHES" });
        }
      }
    } catch {
      /* ignore */
    }

    navigator.serviceWorker
      .register(SW_URL, { scope: "/" })
      .then((registration) => {
        void registration.update().catch(() => {});
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                newWorker.postMessage({ type: "SKIP_WAITING" });
              }
            });
          }
        });
      })
      .catch(() => {
        /* registration is best-effort */
      });
  };

  if (document.readyState === "complete") {
    register();
  } else {
    window.addEventListener("load", register);
  }
}
