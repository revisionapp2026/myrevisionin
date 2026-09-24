import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Bell, BookOpen, Crown, FileText, Loader2, Megaphone } from "lucide-react";
import { notificationsQuery, type DbNotification } from "@/lib/content";
import { useAppState } from "@/lib/app-state";
import { EmptyState, Screen, ScreenHeader } from "@/components/app-chrome";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — REVISION" },
      {
        name: "description",
        content: "Updates about new study material, model papers and premium benefits.",
      },
      { property: "og:title", content: "Notifications — REVISION" },
      { property: "og:description", content: "New study material and model paper updates." },
    ],
  }),
  component: NotificationsScreen,
});

const icons = { general: Megaphone, material: BookOpen, paper: FileText, premium: Crown } as const;

function NotificationsScreen() {
  const { program, semester, readNotifications, markNotificationsRead } = useAppState();
  const { data: items = [], isLoading } = useQuery(notificationsQuery(program, semester));

  useEffect(() => {
    if (items.length > 0) markNotificationsRead(items.map((n) => n.id));
  }, [items, markNotificationsRead]);

  return (
    <>
      <ScreenHeader title="Notifications" />
      <Screen nav>
        {isLoading ? (
          <div className="mt-10 flex justify-center text-muted-foreground">
            <Loader2 className="size-6 animate-spin" />
          </div>
        ) : items.length === 0 ? (
          <EmptyState
            icon={Bell}
            title="No updates yet"
            description="You'll see new study material, model papers and offers here."
          />
        ) : (
          <ul className="grid gap-2.5">
            {items.map((n) => (
              <li key={n.id}>
                <Card item={n} unread={!readNotifications.includes(n.id)} />
              </li>
            ))}
          </ul>
        )}
      </Screen>
    </>
  );
}

function Card({ item, unread }: { item: DbNotification; unread: boolean }) {
  const Icon = icons[item.category] ?? Megaphone;
  const body = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-primary-soft text-primary">
        <Icon className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="text-[15px] font-bold leading-snug">{item.title}</span>
          {unread && (
            <span className="size-2 shrink-0 rounded-full bg-accent" aria-label="Unread" />
          )}
        </span>
        <span className="mt-0.5 block text-[13px] leading-relaxed text-muted-foreground">
          {item.body}
        </span>
        <span className="mt-1.5 block text-[11.5px] text-muted-foreground">
          {new Date(item.created_at).toLocaleDateString()}
        </span>
      </span>
    </>
  );

  const cls = "surface-card press flex w-full items-start gap-3 px-3.5 py-3.5 text-left";

  if (item.link?.startsWith("/")) {
    return (
      <Link to={item.link} className={cls}>
        {body}
      </Link>
    );
  }
  return <div className={cls}>{body}</div>;
}
