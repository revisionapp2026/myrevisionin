import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "accent" | "ghost" | "outline" | "ink";
  size?: "md" | "lg";
};

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] active:opacity-95",
        size === "lg" ? "h-[52px] px-6 text-[15px]" : "h-10 px-4 text-sm",
        variant === "primary" && "bg-primary text-primary-foreground shadow-card hover:opacity-95",
        variant === "accent" && "bg-accent text-accent-foreground shadow-card hover:opacity-95",
        variant === "outline" && "border border-border bg-card text-foreground hover:bg-muted",
        variant === "ghost" && "text-primary hover:bg-primary-soft",
        variant === "ink" && "bg-ink text-ink-foreground shadow-lift hover:opacity-95",
        className,
      )}
      {...props}
    />
  );
}

export function Badge({
  children,
  tone = "primary",
}: {
  children: ReactNode;
  tone?: "primary" | "accent" | "premium" | "muted";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold",
        tone === "primary" && "bg-primary-soft text-primary",
        tone === "accent" && "bg-accent-soft text-accent",
        tone === "premium" && "bg-premium/15 text-premium",
        tone === "muted" && "bg-muted text-muted-foreground",
      )}
    >
      {children}
    </span>
  );
}

export function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

export function StepIndicator({ step, total = 3 }: { step: number; total?: number }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <p className="text-[13px] font-medium text-muted-foreground">Step {step} of 2</p>
      <div className="flex gap-1.5" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={cn(
              "size-2 rounded-full transition-colors",
              i < step ? "bg-primary" : "bg-border",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function SectionTitle({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div className="mb-2.5 mt-5 flex items-center justify-between">
      <h2 className="text-[15px] font-bold">{title}</h2>
      {action}
    </div>
  );
}

/** Grey shimmer placeholders shown while study material loads. */
export function Skeleton({ className }: { className?: string }) {
  return <span className={cn("skeleton block", className)} aria-hidden="true" />;
}

export function SkeletonCard({ lines = 3 }: { lines?: number }) {
  return (
    <div className="surface-card px-3.5 py-3.5">
      <Skeleton className="h-4 w-2/3" />
      <div className="mt-2.5 grid gap-2">
        {Array.from({ length: lines }, (_, i) => (
          <Skeleton key={i} className={cn("h-3", i === lines - 1 ? "w-1/2" : "w-full")} />
        ))}
      </div>
    </div>
  );
}

export function SkeletonList({ rows = 5 }: { rows?: number }) {
  return (
    <div className="grid gap-2.5" role="status" aria-label="Loading">
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} className="surface-card flex items-center gap-3 px-3.5 py-3">
          <Skeleton className="size-10 rounded-[10px]" />
          <div className="flex-1">
            <Skeleton className="h-3.5 w-3/5" />
            <Skeleton className="mt-2 h-3 w-2/5" />
          </div>
        </div>
      ))}
    </div>
  );
}
