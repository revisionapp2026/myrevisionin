import { QueryClient } from "@tanstack/react-query";
import { OfflineCacheProvider } from "@/components/offline-cache";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AppStateProvider } from "@/lib/app-state";
import { AuthProvider } from "@/lib/auth";
import { InstallPrompt } from "@/components/install-prompt";
import { registerServiceWorker } from "@/lib/pwa";
import { OfflineIndicator } from "@/components/offline-indicator";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import { PromoPopup } from "@/components/promo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { httpEquiv: "Cache-Control", content: "no-cache, no-store, must-revalidate" },
      { httpEquiv: "Pragma", content: "no-cache" },
      { httpEquiv: "Expires", content: "0" },
      { name: "google-site-verification", content: "Qhv9zV3dgLFbpiYOyadw9L4G6ty4UefQFmyrhlebDgU" },
      { title: "REVISION — Best B.Com, BBA, B.Tech & B.Sc Exam Notes, Syllabus & Solved Papers | myrevision.in" },
      {
        name: "description",
        content:
          "India's leading last-minute exam revision platform for B.Com, BBA, Engineering (B.Tech), and B.Sc students. Get high-yield unit summaries, previous year solved papers, model papers, and AI exam tutor at myrevision.in.",
      },
      {
        name: "keywords",
        content:
          "myrevision, myrevision.in, revision app, bcom revision, bba revision, btech revision, bsc revision, science exam notes, engineering exam notes, bcom question papers, bba solved papers, bsc model papers, calicut university, bangalore university, delhi university, bcom exam notes, last minute revision",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "theme-color", content: "#062B8F" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "myrevision.in" },
      { property: "og:url", content: "https://myrevision.in" },
      { property: "og:title", content: "REVISION — Best B.Com, BBA, B.Tech & B.Sc Exam Notes & Solved Papers" },
      {
        property: "og:description",
        content:
          "Ace your B.Com, BBA, B.Tech, and B.Sc exams with solved model papers, important questions, and quick revision notes at myrevision.in.",
      },
      { property: "og:image", content: "https://myrevision.in/icon-512.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@myrevision_in" },
      { name: "twitter:title", content: "REVISION — Last-Minute Revision for B.Com, BBA, B.Tech & B.Sc" },
      {
        name: "twitter:description",
        content:
          "Ace your B.Com, BBA, B.Tech, and B.Sc exams with solved model papers, important questions, and quick revision notes at myrevision.in.",
      },
      { property: "og:image", content: "https://myrevision.in/icon-512.png" },
    ],
    links: [
      { rel: "canonical", href: "https://myrevision.in" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Sora:wght@600;700&display=swap",
      },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://myrevision.in/#website",
        url: "https://myrevision.in",
        name: "REVISION",
        description: "Last-Minute Revision for B.Com and BBA Students",
        publisher: {
          "@type": "Organization",
          name: "REVISION",
          url: "https://myrevision.in",
          logo: "https://myrevision.in/icon-512.png",
        },
      },
      {
        "@type": "WebApplication",
        "@id": "https://myrevision.in/#app",
        name: "REVISION Study App",
        url: "https://myrevision.in",
        applicationCategory: "EducationalApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "199",
          priceCurrency: "INR",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    registerServiceWorker();

    // Auto-invalidate old promo & pricing cached values so returning accounts reflect flat 199 immediately
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem("revision_account_created_at");
        window.localStorage.removeItem("revision_promo_window_start");
      } catch {
        /* ignore */
      }
    }
  }, []);

  useEffect(() => {
    // Google Analytics - only runs on client
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-8ELX5TW41X";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8ELX5TW41X');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <OfflineCacheProvider client={queryClient}>
      <AppStateProvider>
        <AuthProvider>
          <AnalyticsTracker />
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
          <OfflineIndicator />
          <InstallPrompt />
          <PromoPopup />
        </AuthProvider>
      </AppStateProvider>
    </OfflineCacheProvider>
  );
}
