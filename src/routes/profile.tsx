import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  Bookmark,
  CreditCard,
  Download,
  Highlighter,
  LifeBuoy,
  LogOut,
  Receipt,
  Settings as SettingsIcon,
  Shield,
} from "lucide-react";
import { useAppState } from "@/lib/app-state";
import { useEntitlements } from "@/lib/entitlements";
import { useAuth } from "@/lib/auth";
import { subjectsFor } from "@/lib/mock-data";
import { BottomNav, IconTile, ListRow, Screen, ScreenHeader } from "@/components/app-chrome";
import { Badge } from "@/components/ui-bits";

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
  const { bookmarks, program, semester, reset } = useAppState();
  const { isPremium, planName } = useEntitlements();
  const { user, profile, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const highlightCount = subjectsFor(program, semester).reduce(
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
            <span className="mt-1.5 inline-block">
              <Badge tone={isPremium ? "premium" : "accent"}>
                {isPremium ? "★ Premium Member" : "Free Member"}
              </Badge>
            </span>
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
                meta="1 payment"
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
            title="Download History"
            trailing={false}
            meta="No downloads yet"
            leading={
              <IconTile tone="muted">
                <Download className="size-[19px]" />
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
    </>
  );
}
