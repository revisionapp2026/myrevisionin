import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bookmark,
  CreditCard,
  Download,
  Highlighter,
  LifeBuoy,
  LogOut,
  Receipt,
  RefreshCw,
  Settings as SettingsIcon,
  Shield,
} from "lucide-react";
import { useAppState } from "@/lib/app-state";
import { useEntitlements } from "@/lib/entitlements";
import { usePricing } from "@/lib/pricing";
import { useAuth } from "@/lib/auth";
import { subjectsFor } from "@/lib/mock-data";
import { BottomNav, IconTile, ListRow, Screen, ScreenHeader } from "@/components/app-chrome";
import { Badge } from "@/components/ui-bits";
import { VerifyPaymentModal } from "@/components/verify-payment-modal";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Profile — REVISION" },
      {
        name: "description",
        content: "Manage your membership, subscriptions, bookmarks, highlights and app settings.",
      },
      { property: "og:title", content: "My Profile — REVISION" },
      { property: "og:description", content: "Your membership, saved content and settings." },
    ],
  }),
  component: ProfileScreen,
});

function ProfileScreen() {
  const { bookmarks, program, branch, semester, reset } = useAppState();
  const { isPremium, planName } = useEntitlements();
  const { priceFormatted, isOfferActive, countdown } = usePricing();
  const { user, profile, isAdmin, signOut } = useAuth();
  const [verifyOpen, setVerifyOpen] = useState(false);
  const navigate = useNavigate();

  const highlightCount = subjectsFor(program, semester, branch).reduce(
    (sum, s) => sum + s.units.reduce((n, u) => n + u.highlights.length, 0),
    0,
  );
  const name = profile?.full_name || user?.email?.split("@")[0] || "Student";
  const email = user?.email ?? "student@gmail.com";

  return (
    <>
      <ScreenHeader title="My Profile" back={false} />
      <Screen nav>
        <div className="surface-card flex items-center gap-3.5 px-4 py-4">
          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-primary text-[20px] font-bold text-primary-foreground">
            {name.charAt(0).toUpperCase()}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[16px] font-bold">{name}</p>
            <p className="truncate text-[13px] text-muted-foreground">{email}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              <Badge tone={isPremium ? "premium" : "accent"}>
                {isPremium ? `★ ${planName} Member` : "Free Member"}
              </Badge>
              {!isPremium && (
                <button
                  type="button"
                  onClick={() => setVerifyOpen(true)}
                  className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-accent underline hover:text-accent/80"
                >
                  <RefreshCw className="size-3" /> Restore Payment
                </button>
              )}
            </div>
          </div>
        </div>

        {!user && (
          <Link to="/auth" className="surface-card press mt-3 flex items-center gap-3 px-4 py-3.5">
            <span className="min-w-0 flex-1">
              <span className="block text-[14.5px] font-semibold">
                Sign in or create an account
              </span>
              <span className="block text-[12.5px] text-muted-foreground">
                Keep your bookmarks safe on every device
              </span>
            </span>
            <span className="text-[13px] font-semibold text-primary">Go</span>
          </Link>
        )}

        {!isPremium && (
          <Link
            to="/payment"
            className="surface-card press mt-3 flex items-center justify-between border border-accent/30 bg-accent/10 px-4 py-3.5"
          >
            <div className="min-w-0 flex-1 pr-2">
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-extrabold text-foreground">
                  Upgrade to Lifetime
                </span>
                <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-bold text-accent-foreground">
                  {priceFormatted}
                </span>
              </div>
              <p className="mt-0.5 text-[12px] text-muted-foreground">
                One-time payment · Full access forever
              </p>
            </div>
            <span className="shrink-0 text-[13px] font-bold text-accent">Unlock ›</span>
          </Link>
        )}

        <div className="mt-4 grid gap-2.5">
          {isPremium && (
            <>
              <ListRow
                to="/payment"
                title="My Subscriptions"
                leading={
                  <IconTile>
                    <CreditCard className="size-[19px]" />
                  </IconTile>
                }
              />
              <ListRow
                to="/payment"
                title="Payment History"
                meta="Lifetime Plan"
                leading={
                  <IconTile>
                    <Receipt className="size-[19px]" />
                  </IconTile>
                }
              />
            </>
          )}
          <ListRow
            to="/bookmarks"
            title="Bookmarks"
            meta={`${bookmarks.length} saved`}
            leading={
              <IconTile>
                <Bookmark className="size-[19px]" />
              </IconTile>
            }
          />
          <ListRow
            to="/dashboard"
            title="Highlights"
            meta={`${highlightCount} available`}
            leading={
              <IconTile>
                <Highlighter className="size-[19px]" />
              </IconTile>
            }
          />
          <ListRow
            title="Download App"
            trailing={false}
            meta="Install REVISION for offline study"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("trigger-pwa-install"));
            }}
            leading={
              <IconTile tone="accent">
                <Download className="size-[19px]" />
              </IconTile>
            }
          />
          <ListRow
            title="Restore / Verify Payment"
            trailing={false}
            meta="Unlock completed purchase"
            onClick={() => setVerifyOpen(true)}
            leading={
              <IconTile tone="accent">
                <RefreshCw className="size-[19px]" />
              </IconTile>
            }
          />
          <ListRow
            to="/settings"
            title="Settings"
            leading={
              <IconTile>
                <SettingsIcon className="size-[19px]" />
              </IconTile>
            }
          />
          <ListRow
            title="Help & Support"
            trailing={false}
            meta="reachout.revision@gmail.com"
            leading={
              <IconTile tone="muted">
                <LifeBuoy className="size-[19px]" />
              </IconTile>
            }
          />
          {isAdmin && (
            <ListRow
              to="/admin"
              title="Admin Panel"
              meta="Manage content"
              leading={
                <IconTile tone="accent">
                  <Shield className="size-[19px]" />
                </IconTile>
              }
            />
          )}
          <ListRow
            title={user ? "Logout" : "Sign in"}
            trailing={false}
            onClick={() => {
              if (!user) {
                navigate({ to: "/auth" });
                return;
              }
              void signOut().then(() => {
                reset();
                navigate({ to: "/auth", replace: true });
              });
            }}
            leading={
              <IconTile tone="danger">
                <LogOut className="size-[19px]" />
              </IconTile>
            }
            className="text-destructive"
          />
        </div>
      </Screen>
      <BottomNav />
      <VerifyPaymentModal
        open={verifyOpen}
        onClose={() => setVerifyOpen(false)}
        onSuccess={() => window.location.reload()}
      />
    </>
  );
}
