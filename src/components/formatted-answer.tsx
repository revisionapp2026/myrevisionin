import React from "react";
import { CheckCircle2, Sigma, Sparkles, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { MathFormula, RichMathText } from "@/components/math-formula";

interface FormattedAnswerProps {
  lines: string[];
}

export function FormattedAnswer({ lines }: FormattedAnswerProps) {
  const filtered = lines.filter((l) => l && l.trim() && l.trim().toUpperCase() !== "OR");

  if (filtered.length === 0) {
    return <p className="text-[14px] text-muted-foreground italic">Answer is being added.</p>;
  }

  return (
    <div className="space-y-2.5 pt-1 text-foreground min-w-0 w-full max-w-full overflow-hidden">
      {filtered.map((rawLine, idx) => {
        const line = rawLine.trim();

        // 1. Standalone LaTeX Display Equation: $$...$$
        if (line.startsWith("$$") && line.endsWith("$$") && line.length >= 4) {
          const eq = line.slice(2, -2).trim();
          return (
            <div
              key={idx}
              className="my-3 w-full max-w-full rounded-xl border border-primary/30 bg-muted/30 p-3 shadow-xs overflow-hidden text-center"
            >
              <div className="flex items-center justify-center gap-1.5 text-primary text-[11px] font-bold uppercase tracking-wider mb-1">
                <Sigma className="size-3.5 shrink-0 text-accent" />
                <span>Governing Mathematical Formulation</span>
              </div>
              <div className="py-1">
                <MathFormula math={eq} displayMode={true} />
              </div>
            </div>
          );
        }

        // 2. Major Section Headers (e.g., "1. Introduction & Overview:", "2. Detailed Mathematical Derivation:")
        const headerMatch = line.match(/^(\d+)\.\s+([^:]+):?$/);
        if (headerMatch && !line.toLowerCase().includes("step") && !line.toLowerCase().includes("phase")) {
          const num = headerMatch[1];
          const title = headerMatch[2].trim();
          const isConclusion = /conclusion|summary/i.test(title);

          return (
            <div
              key={idx}
              className={cn(
                "mt-4 mb-2 flex items-center gap-2 border-b border-border pb-1.5 first:mt-1 min-w-0",
                isConclusion ? "border-emerald-500/30 text-emerald-700 dark:text-emerald-400" : "text-foreground",
              )}
            >
              <span
                className={cn(
                  "grid size-6 shrink-0 place-items-center rounded-md text-[11.5px] font-bold shadow-xs",
                  isConclusion
                    ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                    : "bg-primary/10 text-primary",
                )}
              >
                {num}
              </span>
              <h4 className="text-[14.5px] font-bold tracking-tight leading-snug break-words">{title}</h4>
            </div>
          );
        }

        // 3. Derivation / Numerical Steps (e.g. "Step 1: ...", "Phase 1 — ...")
        const stepMatch = line.match(/^(Step\s+\d+|Phase\s+\d+)\s*[:—\-]\s*(.*)$/i);
        if (stepMatch) {
          const stepLabel = stepMatch[1];
          const stepContent = stepMatch[2];

          return (
            <div
              key={idx}
              className="my-2 rounded-xl border border-primary/20 bg-card p-3 shadow-xs hover:border-primary/40 transition-colors min-w-0 w-full max-w-full overflow-hidden"
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-accent px-2 py-0.5 font-mono text-[11px] font-bold text-accent-foreground uppercase tracking-wider shadow-xs">
                  <Terminal className="size-3" />
                  {stepLabel}
                </span>
                <div className="min-w-0 flex-1 break-words">
                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-foreground font-medium">
                    <RichMathText text={stepContent} />
                  </p>
                </div>
              </div>
            </div>
          );
        }

        // 4. Definitions & Technical Badges (e.g. "Definition:", "Significance:", "Governing Relationship:")
        const badgeMatch = line.match(
          /^(Definition|Significance|Governing Relationship|Key Formula|Static Characteristics|Dynamic Characteristics|Key Formula \/ Condition)\s*:\s*(.*)$/i,
        );
        if (badgeMatch) {
          const label = badgeMatch[1];
          const content = badgeMatch[2];
          return (
            <div
              key={idx}
              className="my-2 rounded-xl border border-border/80 bg-muted/40 p-3 shadow-xs min-w-0 w-full max-w-full overflow-hidden"
            >
              <span className="mb-1.5 inline-flex items-center gap-1 rounded-md bg-primary-soft px-2 py-0.5 text-[11px] font-bold text-primary uppercase tracking-wide">
                <Sparkles className="size-3" />
                {label}
              </span>
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-foreground font-medium break-words">
                <RichMathText text={content} />
              </p>
            </div>
          );
        }

        // 5. Conclusions & Final Results (e.g. "Engineering Conclusion:", "Conclusion:", "Summary:")
        const conclusionMatch = line.match(/^(Engineering Conclusion|Conclusion|Summary)\s*[:—\-]\s*(.*)$/i);
        if (conclusionMatch) {
          const title = conclusionMatch[1];
          const content = conclusionMatch[2];
          return (
            <div
              key={idx}
              className="my-3 rounded-xl border border-emerald-500/35 bg-emerald-500/10 p-3.5 text-foreground shadow-xs min-w-0 w-full max-w-full overflow-hidden"
            >
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-[12px] uppercase tracking-wider mb-1">
                <CheckCircle2 className="size-4 shrink-0" />
                {title}
              </div>
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed font-semibold text-foreground/95 break-words">
                <RichMathText text={content} />
              </p>
            </div>
          );
        }

        // 6. Bullet Points (e.g. "• High fidelity...", "- Parameter...")
        const isBullet = /^[-*•]\s+/.test(line);
        if (isBullet) {
          const text = line.replace(/^[-*•]\s+/, "");
          return (
            <div key={idx} className="flex items-start gap-2.5 py-1 px-1 min-w-0 w-full">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <p className="min-w-0 flex-1 text-[13.5px] sm:text-[14px] leading-relaxed text-foreground/90 font-medium break-words">
                <RichMathText text={text} />
              </p>
            </div>
          );
        }

        // 7. Pure Equation lines (compact equation without bullet or header)
        if (line.includes("=") && line.length < 100 && !/[a-z]{6,}/i.test(line)) {
          return (
            <div
              key={idx}
              className="my-3 w-full max-w-full rounded-xl border border-primary/30 bg-card p-3 shadow-xs overflow-hidden text-center"
            >
              <div className="flex items-center justify-center gap-1.5 text-primary text-[11px] font-bold uppercase tracking-wider mb-1">
                <Sigma className="size-3.5 shrink-0 text-accent" />
                <span>Equation</span>
              </div>
              <div className="py-1">
                <MathFormula math={line} displayMode={true} />
              </div>
            </div>
          );
        }

        // 8. Standard Paragraph
        return (
          <p key={idx} className="text-[13.5px] sm:text-[14px] leading-relaxed text-foreground/90 font-medium my-1 break-words min-w-0">
            <RichMathText text={line} />
          </p>
        );
      })}
    </div>
  );
}
