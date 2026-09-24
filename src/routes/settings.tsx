import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  FileText,
  Globe,
  Info,
  MessageSquare,
  Moon,
  Share2,
  Shield,
  Star,
} from "lucide-react";
import { useAppState } from "@/lib/app-state";
import { IconTile, Screen, ScreenHeader } from "@/components/app-chrome";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — REVISION" },
      {
        name: "description",
        content: "Switch dark mode, choose your language, share the app and read our policies.",
      },
      { property: "og:title", content: "Settings — REVISION" },
      { property: "og:description", content: "Dark mode, language, feedback and app policies." },
    ],
  }),
  component: SettingsScreen,
});

function SettingsScreen() {
  const { theme, toggleTheme, language } = useAppState();

  const rows = [
    { icon: Globe, label: "Language", value: language },
    { icon: MessageSquare, label: "App Feedback" },
    { icon: Share2, label: "Share App" },
    { icon: Star, label: "Rate Us" },
  ];

  const legalRows = [
    { icon: Shield, label: "Privacy Policy", to: "/privacy" as const },
    { icon: FileText, label: "Terms of Use", to: "/terms" as const },
    { icon: FileText, label: "Refund & Cancellation", to: "/refund" as const },
    { icon: Info, label: "About REVISION", to: "/landing" as const },
  ];

  const share = () => {
    const data = { title: "REVISION", text: "Last Minute Revision That Actually Works", url: "/" };
    if (navigator.share) void navigator.share(data).catch(() => {});
  };

  return (
    <>
      <ScreenHeader title="Settings" />
      <Screen>
        <div className="surface-card divide-y divide-border overflow-hidden">
          <div className="flex items-center gap-3 px-3.5 py-3.5">
            <IconTile tone="primary">
              <Moon className="size-[19px]" />
            </IconTile>
            <span className="flex-1 text-[15px] font-semibold">Dark Mode</span>
            <button
              type="button"
              role="switch"
              aria-checked={theme === "dark"}
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className={cn(
                "h-6 w-11 rounded-full p-0.5 transition-colors",
                theme === "dark" ? "bg-primary" : "bg-border",
              )}
            >
              <span
                className={cn(
                  "block size-5 rounded-full bg-white shadow transition-transform",
                  theme === "dark" && "translate-x-5",
                )}
              />
            </button>
          </div>

          {rows.map(({ icon: Icon, label, value }) => (
            <button
              key={label}
              type="button"
              onClick={label === "Share App" ? share : undefined}
              className="flex w-full items-center gap-3 px-3.5 py-3.5 text-left transition-colors hover:bg-muted"
            >
              <IconTile tone="muted">
                <Icon className="size-[19px]" />
              </IconTile>
              <span className="flex-1 text-[15px] font-semibold">{label}</span>
              {value ? (
                <span className="text-[13px] text-muted-foreground">{value}</span>
              ) : (
                <ChevronRight className="size-[18px] text-muted-foreground" />
              )}
            </button>
          ))}
        </div>

        <div className="surface-card mt-4 divide-y divide-border overflow-hidden">
          {legalRows.map(({ icon: Icon, label, to }) => (
            <Link
              key={label}
              to={to}
              className="flex w-full items-center gap-3 px-3.5 py-3.5 text-left transition-colors hover:bg-muted"
            >
              <IconTile tone="muted">
                <Icon className="size-[19px]" />
              </IconTile>
              <span className="flex-1 text-[15px] font-semibold">{label}</span>
              <ChevronRight className="size-[18px] text-muted-foreground" />
            </Link>
          ))}
        </div>
        <p className="mt-3 text-center text-[12px] text-muted-foreground">REVISION v1.0.0</p>
      </Screen>
    </>
  );
}
