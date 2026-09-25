// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  nitro: {
    preset: "vercel",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      VitePWA({
        strategies: "generateSW",
        registerType: "autoUpdate",
        injectRegister: null,
        filename: "sw.js",
        devOptions: { enabled: false },
        manifest: false,
        includeAssets: [
          "favicon.png",
          "apple-touch-icon.png",
          "icon-192.png",
          "icon-512.png",
          "icon-maskable-512.png",
          "offline.html",
        ],
        workbox: {
          globPatterns: ["**/*.{js,css,html,png,svg,webmanifest}"],
          navigateFallback: "/offline.html",
          navigateFallbackDenylist: [/^\/~oauth/, /^\/api\//],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: ({ request, sameOrigin }) => sameOrigin && request.mode === "navigate",
              handler: "NetworkFirst",
              options: {
                cacheName: "revision-pages",
                networkTimeoutSeconds: 3,
                expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 },
              },
            },
            {
              urlPattern: ({ url, sameOrigin }) =>
                sameOrigin && /\/(assets|images|__l5e)\//.test(url.pathname),
              handler: "CacheFirst",
              options: {
                cacheName: "revision-assets",
                expiration: { maxEntries: 150, maxAgeSeconds: 60 * 60 * 24 * 30 },
              },
            },
            {
              // Study material read from Supabase: serve from cache when offline.
              urlPattern: ({ url, request }) =>
                request.method === "GET" && url.pathname.startsWith("/rest/v1/"),
              handler: "NetworkFirst",
              options: {
                cacheName: "revision-study-data",
                networkTimeoutSeconds: 4,
                cacheableResponse: { statuses: [200] },
                expiration: { maxEntries: 300, maxAgeSeconds: 60 * 60 * 24 * 30 },
              },
            },
            {
              urlPattern: ({ url }) => url.origin === "https://fonts.gstatic.com",
              handler: "CacheFirst",
              options: {
                cacheName: "revision-fonts",
                expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              },
            },
            {
              urlPattern: ({ url }) => url.origin === "https://fonts.googleapis.com",
              handler: "CacheFirst",
              options: {
                cacheName: "revision-fonts-css",
                expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              },
            },
          ],
        },
      }),
    ],
  },
});
