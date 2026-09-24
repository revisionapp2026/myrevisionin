import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalPage({
  title,
  intro,
  sections,
  updated,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  updated: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="brand-gradient px-5 pb-8 pt-[calc(env(safe-area-inset-top)+1.25rem)] text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/settings"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary-foreground/85 transition hover:text-primary-foreground"
          >
            <ArrowLeft className="size-4" />
            Back
          </Link>
          <h1 className="mt-3 font-display text-2xl font-extrabold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-primary-foreground/85 md:text-sm">
            {intro}
          </p>
          <p className="mt-3 text-[12px] text-primary-foreground/70">Last updated: {updated}</p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <div className="space-y-7">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-[17px] font-bold tracking-tight md:text-xl">
                {s.heading}
              </h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {s.bullets ? (
                <ul className="mt-2.5 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-[14px] leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <nav className="mt-12 flex flex-wrap gap-3 border-t border-border pt-6 text-[13px] font-semibold">
          <Link to="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-primary hover:underline">
            Terms of Use
          </Link>
          <Link to="/refund" className="text-primary hover:underline">
            Refund &amp; Cancellation
          </Link>
          <Link to="/landing" className="text-muted-foreground hover:underline">
            About REVISION
          </Link>
        </nav>
      </main>
    </div>
  );
}
