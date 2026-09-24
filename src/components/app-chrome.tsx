import logo from "@/assets/revision-logo.png";
import { Link, useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  GraduationCap,
  BarChart3,
  Bookmark,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Home,
  Landmark,
  Megaphone,
  Scale,
  Search,
  Sigma,
  User,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { SubjectIcon } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function ScreenHeader({
  title,
  subtitle,
  back = true,
  action,
  leading,
  home = true,
}: {
  title: ReactNode;
  subtitle?: string;
  back?: boolean;
  action?: ReactNode;
  leading?: ReactNode;
  home?: boolean;
}) {
  const router = useRouter();
  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
      return;
    }
    void router.navigate({ to: "/dashboard" });
  };
  return (
    <header className="brand-header sticky top-0 z-20 px-4 pb-4 pt-[max(0.85rem,env(safe-area-inset-top))]">
      <div className="mx-auto flex max-w-xl items-center gap-3">
        {back && (
          <button
            type="button"
            onClick={goBack}
            aria-label="Go back"
            className="press grid size-9 shrink-0 place-items-center rounded-full text-white/95 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronLeft className="size-[22px]" />
          </button>
        )}
        {leading}
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-[17px] font-bold leading-tight text-white">{title}</h1>
          {subtitle && <p className="truncate text-[13px] text-white/75">{subtitle}</p>}
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {action}
          {home && (
            <Link
              to="/dashboard"
              aria-label="Go to home"
              className="press grid size-9 place-items-center rounded-full text-white/95 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Home className="size-[19px]" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export function Screen({
  children,
  nav = false,
  className,
}: {
  children: ReactNode;
  nav?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("min-h-dvh bg-background", nav ? "pb-[5.75rem]" : "pb-10")}>
      <div className={cn("screen-enter mx-auto max-w-xl px-4 py-4", className)}>{children}</div>
    </div>
  );
}

export function IconTile({
  children,
  tone = "primary",
  size = "md",
}: {
  children: ReactNode;
  tone?: "primary" | "accent" | "muted" | "success" | "premium" | "danger";
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-[10px]",
        size === "sm" ? "size-8" : "size-10",
        tone === "primary" && "bg-primary-soft text-primary",
        tone === "accent" && "bg-accent-soft text-accent",
        tone === "muted" && "bg-muted text-muted-foreground",
        tone === "success" && "bg-success/10 text-success",
        tone === "premium" && "bg-premium/15 text-premium",
        tone === "danger" && "bg-destructive/10 text-destructive",
      )}
    >
      {children}
    </span>
  );
}

const subjectIcons: Record<SubjectIcon, LucideIcon> = {
  accounting: Landmark,
  economics: BarChart3,
  law: Scale,
  marketing: Megaphone,
  hr: Users,
  stats: Sigma,
  management: Briefcase,
  finance: Wallet,
};

export function SubjectGlyph({ icon }: { icon: SubjectIcon }) {
  const Icon = subjectIcons[icon];
  return (
    <IconTile tone="primary">
      <Icon className="size-[19px]" />
    </IconTile>
  );
}

export function ListRow({
  leading,
  title,
  meta,
  trailing = true,
  to,
  params,
  onClick,
  className,
}: {
  leading?: ReactNode;
  title: ReactNode;
  meta?: ReactNode;
  trailing?: boolean;
  to?: string | undefined;
  params?: Record<string, string> | undefined;
  onClick?: () => void;
  className?: string;
}) {
  const inner = (
    <>
      {leading}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-semibold">{title}</span>
        {meta && <span className="block truncate text-[13px] text-muted-foreground">{meta}</span>}
      </span>
      {trailing && <ChevronRight className="size-[18px] shrink-0 text-muted-foreground" />}
    </>
  );

  const cls = cn(
    "surface-card press flex w-full items-center gap-3 px-3.5 py-3 text-left hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    className,
  );

  if (to) {
    return (
      <Link to={to} {...(params ? { params } : {})} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="surface-card mt-6 flex flex-col items-center px-6 py-12 text-center">
      <span className="grid size-14 place-items-center rounded-full bg-primary-soft text-primary">
        <Icon className="size-7" />
      </span>
      <h2 className="mt-4 text-base font-semibold">{title}</h2>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

const tabs = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/bookmarks", label: "Bookmarks", icon: Bookmark },
  { to: "/search", label: "Search", icon: Search },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function BottomNav() {
  return (
    <nav className="safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 pt-2 backdrop-blur">
      <ul className="mx-auto flex max-w-xl">
        {tabs.map(({ to, label, icon: Icon }) => (
          <li key={to} className="flex-1">
            <Link
              to={to}
              activeOptions={{ exact: true }}
              preload="intent"
              className="flex flex-col items-center gap-1 py-1 text-[11px] font-medium text-muted-foreground transition-colors"
              activeProps={{ className: "!text-primary !font-semibold" }}
            >
              <Icon className="size-[21px]" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function BrandMark({ label = true }: { label?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <img src={logo} alt="REVISION" className="h-6 w-auto object-contain" />
      {label && (
        <span className="text-[15px] font-extrabold tracking-tight text-white">REVISION</span>
      )}
    </span>
  );
}
