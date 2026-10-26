import React, { useMemo } from "react";
import katex from "katex";
import { Sigma, Copy, Check, Bookmark, BookmarkCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Cleanly strips enclosing math delimiters ($$, $, \[, \], \(, \)) and trailing punctuation.
 */
export function cleanLatex(raw: string): string {
  if (!raw) return "";
  let s = raw.trim();

  // Strip enclosing $$ or $ or \[ \] or \( \)
  if (s.startsWith("$$") && s.endsWith("$$") && s.length >= 4) {
    s = s.slice(2, -2).trim();
  } else if (s.startsWith("\\[") && s.endsWith("\\]") && s.length >= 4) {
    s = s.slice(2, -2).trim();
  } else if (s.startsWith("$") && s.endsWith("$") && s.length >= 2) {
    s = s.slice(1, -1).trim();
  } else if (s.startsWith("\\(") && s.endsWith("\\)") && s.length >= 4) {
    s = s.slice(2, -2).trim();
  }

  // Remove trailing period/comma/semicolon if at the very end
  if (s.endsWith(".") || s.endsWith(",") || s.endsWith(";")) {
    s = s.slice(0, -1).trim();
  }

  return s;
}

/**
 * Unescapes HTML entities and normalizes JSON/DB encoded backslashes.
 */
export function unescapeHtmlAndEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#92;/g, "\\")
    // Fix double-escaped backslashes from JSON while preserving \\ in matrices/aligned
    .replace(/\\\\([a-zA-Z]+)/g, "\\$1");
}

/**
 * Transforms standard engineering / science math expressions into clean LaTeX notation.
 */
export function toLatex(raw: string): string {
  if (!raw) return "";
  let s = cleanLatex(raw);

  // If already contains LaTeX commands or environments, return cleaned
  if (s.includes("\\")) {
    return s;
  }

  // Greek letters (case-insensitive word boundary replacements where appropriate)
  const greek: Record<string, string> = {
    "\\blambda\\b": "\\lambda",
    "\\btheta\\b": "\\theta",
    "\\bomega\\b": "\\omega",
    "\\bkappa\\b": "\\kappa",
    "\\brho\\b": "\\rho",
    "\\bsigma\\b": "\\sigma",
    "\\btau\\b": "\\tau",
    "\\bgamma\\b": "\\gamma",
    "\\balpha\\b": "\\alpha",
    "\\bbeta\\b": "\\beta",
    "\\bdelta\\b": "\\delta",
    "\\bDelta\\b": "\\Delta",
    "\\bpsi\\b": "\\psi",
    "\\bphi\\b": "\\phi",
    "\\bepsilon\\b": "\\varepsilon",
    "\\bmu\\b": "\\mu",
    "\\bpi\\b": "\\pi",
    "\\bnabla\\b": "\\nabla",
    "\\binf\\b": "\\infty",
  };
  for (const [pattern, rep] of Object.entries(greek)) {
    s = s.replace(new RegExp(pattern, "g"), rep);
  }

  // Standard operators and arrows
  s = s.replace(/\s*!=\s*/g, " \\neq ");
  s = s.replace(/\s*<=\s*/g, " \\le ");
  s = s.replace(/\s*>=\s*/g, " \\ge ");
  s = s.replace(/\s*->\s*/g, " \\to ");
  s = s.replace(/\s*=>\s*/g, " \\implies ");
  s = s.replace(/\s*\+-\s*/g, " \\pm ");

  // Calculus differentials: d4w/dx4, d2y/dx2, dy/dx, d/dt, etc.
  s = s.replace(/\bd\^4\s*([a-zA-Z])\s*\/\s*dx\^4\b/g, "\\frac{d^4 $1}{dx^4}");
  s = s.replace(/\bd\^2\s*([a-zA-Z])\s*\/\s*dx\^2\b/g, "\\frac{d^2 $1}{dx^2}");
  s = s.replace(/\bd([a-zA-Z])\s*\/\s*d([a-zA-Z])\b/g, "\\frac{d$1}{d$2}");
  s = s.replace(/\b([a-zA-Z])\s*\/\s*d([a-zA-Z])\b/g, "\\frac{$1}{d$2}");

  // Standard fractions: A / B or [A] / [B] or (A) / (B)
  s = s.replace(/\[([^\]]+)\]\s*\/\s*\[([^\]]+)\]/g, "\\frac{$1}{$2}");
  s = s.replace(/\[([^\]]+)\]\s*\/\s*\|([^\|]+)\|/g, "\\frac{$1}{|$2|}");
  s = s.replace(/\(([^)]+)\)\s*\/\s*\(([^)]+)\)/g, "\\frac{$1}{$2}");

  // Square roots: sqrt(...) -> \sqrt{...}
  s = s.replace(/sqrt\(([^)]+)\)/g, "\\sqrt{$1}");

  // Exponents with powers: ^(3/2) -> ^{3/2}
  s = s.replace(/\^\(([^)]+)\)/g, "^{$1}");

  // Multiplication dot: * -> \cdot
  s = s.replace(/\s*\*\s*/g, " \\cdot ");

  // Trig / math functions without backslash
  s = s.replace(/\b(sin|cos|tan|cot|sec|csc|sinh|cosh|tanh|ln|log|det|trace|dim)\b/g, "\\$1 ");

  // Multi-variable partials
  s = s.replace(/\\partial\s*([a-zA-Z])\s*\/\s*\\partial\s*([a-zA-Z])/g, "\\frac{\\partial $1}{\\partial $2}");

  return s;
}

interface MathFormulaProps {
  math: string;
  displayMode?: boolean;
  className?: string;
}

/**
 * Renders mathematical typography using KaTeX with responsive overflow wrapping.
 */
export function MathFormula({ math, displayMode = false, className }: MathFormulaProps) {
  const renderedHtml = useMemo(() => {
    if (!math || !math.trim()) return "";
    const latex = toLatex(math);
    try {
      return katex.renderToString(latex, {
        throwOnError: false,
        displayMode,
        errorColor: "#cc0000",
        output: "htmlAndMathml",
        strict: false,
      });
    } catch {
      return null;
    }
  }, [math, displayMode]);

  if (!renderedHtml) {
    return <span className={cn("font-mono text-[13px] text-primary break-words", className)}>{cleanLatex(math)}</span>;
  }

  return (
    <span
      className={cn(
        displayMode
          ? "block my-1.5 w-full max-w-full overflow-x-auto overflow-y-hidden text-center py-1 math-scroll"
          : "inline-block max-w-full overflow-x-auto overflow-y-hidden align-middle px-0.5 math-inline-scroll",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
}

/**
 * Checks if a string contains mathematical equations, derivations, or LaTeX syntax.
 */
export function hasMathematicalFormula(text: string): boolean {
  if (!text) return false;
  return (
    text.includes("$$") ||
    text.includes("$") ||
    text.includes("\\[") ||
    text.includes("\\(") ||
    text.includes("\\begin{") ||
    /\\(frac|sqrt|int|sum|lim|partial|lambda|theta|rho|sigma|tau|kappa|omega|alpha|beta|psi|phi|Delta|Gamma|Beta|nabla|oiint|iiint|oint|matrix|aligned)/.test(
      text,
    ) ||
    /[a-zA-Z0-9_\(\)]+\s*=\s*[^=\n]+/.test(text)
  );
}

export type MathToken = {
  type: "text" | "inline" | "display";
  content: string;
};

const DISPLAY_ENV_REGEX = /^\\begin\{(aligned|matrix|bmatrix|pmatrix|vmatrix|cases|gather\*?|align\*?)\}[\s\S]*?\\end\{\1\}$/;

/**
 * Helper to split text containing $...$, $$...$$, \[...\], \(...\), \begin{...},
 * or unenclosed LaTeX into structured tokens.
 */
export function tokenizeMathText(rawInput: string): MathToken[] {
  if (!rawInput) return [];
  const text = unescapeHtmlAndEntities(rawInput);
  const trimmed = text.trim();

  // If the whole line is an explicit display formula
  if (
    (trimmed.startsWith("$$") && trimmed.endsWith("$$") && trimmed.length >= 4) ||
    (trimmed.startsWith("\\[") && trimmed.endsWith("\\]") && trimmed.length >= 4) ||
    DISPLAY_ENV_REGEX.test(trimmed)
  ) {
    return [{ type: "display", content: cleanLatex(trimmed) }];
  }

  const tokens: MathToken[] = [];
  const len = text.length;
  let i = 0;
  let lastTextIndex = 0;

  while (i < len) {
    // 1. $$...$$ (display math)
    if (text.startsWith("$$", i)) {
      const close = text.indexOf("$$", i + 2);
      if (close !== -1) {
        if (i > lastTextIndex) {
          tokens.push({ type: "text", content: text.slice(lastTextIndex, i) });
        }
        tokens.push({ type: "display", content: text.slice(i + 2, close).trim() });
        i = close + 2;
        lastTextIndex = i;
        continue;
      }
    }

    // 2. \[...\] (display math)
    if (text.startsWith("\\[", i)) {
      const close = text.indexOf("\\]", i + 2);
      if (close !== -1) {
        if (i > lastTextIndex) {
          tokens.push({ type: "text", content: text.slice(lastTextIndex, i) });
        }
        tokens.push({ type: "display", content: text.slice(i + 2, close).trim() });
        i = close + 2;
        lastTextIndex = i;
        continue;
      }
    }

    // 3. \begin{env}...\end{env} (display math)
    if (text.startsWith("\\begin{", i)) {
      const envMatch = text.slice(i).match(/^\\begin\{(aligned|matrix|bmatrix|pmatrix|vmatrix|cases|gather\*?|align\*?)\}/);
      if (envMatch) {
        const envName = envMatch[1];
        const endTag = `\\end{${envName}}`;
        const close = text.indexOf(endTag, i);
        if (close !== -1) {
          const endIdx = close + endTag.length;
          if (i > lastTextIndex) {
            tokens.push({ type: "text", content: text.slice(lastTextIndex, i) });
          }
          tokens.push({ type: "display", content: text.slice(i, endIdx).trim() });
          i = endIdx;
          lastTextIndex = i;
          continue;
        }
      }
    }

    // 4. $...$ (inline math)
    if (text[i] === "$" && (i === 0 || text[i - 1] !== "\\") && (i + 1 < len && text[i + 1] !== "$")) {
      const close = text.indexOf("$", i + 1);
      if (close !== -1 && !text.slice(i + 1, close).includes("\n")) {
        if (i > lastTextIndex) {
          tokens.push({ type: "text", content: text.slice(lastTextIndex, i) });
        }
        tokens.push({ type: "inline", content: text.slice(i + 1, close).trim() });
        i = close + 1;
        lastTextIndex = i;
        continue;
      }
    }

    // 5. \(...\) (inline math)
    if (text.startsWith("\\(", i)) {
      const close = text.indexOf("\\)", i + 2);
      if (close !== -1) {
        if (i > lastTextIndex) {
          tokens.push({ type: "text", content: text.slice(lastTextIndex, i) });
        }
        tokens.push({ type: "inline", content: text.slice(i + 2, close).trim() });
        i = close + 2;
        lastTextIndex = i;
        continue;
      }
    }

    // 6. Unenclosed LaTeX command or equation (starts with backslash command)
    if (text[i] === "\\" && i + 1 < len && /[a-zA-Z]/.test(text[i + 1])) {
      // Ignore C escape characters like \0, \n, \t
      if (text.startsWith("\\0", i) || text.startsWith("\\n", i) || text.startsWith("\\t", i)) {
        i += 2;
        continue;
      }

      // Check for preceding variable assignment e.g. "f'(c) = ", "\rho = ", "J = "
      let mathStart = i;
      const lookback = text.slice(Math.max(0, i - 35), i);
      const eqMatch = lookback.match(/(?:^|[\s,;:([\]])([a-zA-Z0-9_\(\)'\"^+\-\/\\]+\s*(?:=|\\approx|\\neq|\\le|\\ge|\\to)\s*)$/);
      if (eqMatch) {
        mathStart = i - eqMatch[1].length;
      }

      // Scan forward through balanced delimiters, operators, and math symbols
      let curr = i;
      while (curr < len) {
        if (text.startsWith("\\begin{", curr)) {
          const envMatch = text.slice(curr).match(/^\\begin\{(aligned|matrix|bmatrix|pmatrix|vmatrix|cases|gather\*?|align\*?)\}/);
          if (envMatch) {
            const endTag = `\\end{${envMatch[1]}}`;
            const close = text.indexOf(endTag, curr);
            if (close !== -1) {
              curr = close + endTag.length;
              continue;
            }
          }
        }

        if (text[curr] === "\\") {
          curr++;
          if (curr < len && ",;! :".includes(text[curr])) {
            curr++;
            continue;
          }
          while (curr < len && /[a-zA-Z]/.test(text[curr])) curr++;
          while (curr < len && text[curr] === " " && curr + 1 < len && "{([^_".includes(text[curr + 1])) curr++;
        } else if (text[curr] === "{" || text[curr] === "[" || text[curr] === "(") {
          const openChar = text[curr];
          const closeChar = openChar === "{" ? "}" : openChar === "[" ? "]" : ")";
          let depth = 1;
          curr++;
          while (curr < len && depth > 0) {
            if (text[curr] === openChar) depth++;
            else if (text[curr] === closeChar) depth--;
            else if (text[curr] === "\\") curr++;
            curr++;
          }
        } else if (text[curr] === "^" || text[curr] === "_") {
          curr++;
          if (curr < len && text[curr] === "{") {
            let depth = 1;
            curr++;
            while (curr < len && depth > 0) {
              if (text[curr] === "{") depth++;
              else if (text[curr] === "}") depth--;
              else if (text[curr] === "\\") curr++;
              curr++;
            }
          } else {
            if (curr < len && text[curr] === "\\") {
              curr++;
              while (curr < len && /[a-zA-Z]/.test(text[curr])) curr++;
            } else if (curr < len && /[a-zA-Z0-9+\-*]/.test(text[curr])) {
              curr++;
            }
          }
        } else if (/[a-zA-Z0-9+\-*\/=!<>|,;&\s]/.test(text[curr])) {
          if (text[curr] === "," || text[curr] === ";" || text[curr] === ".") {
            if (text[curr] === "." && curr + 1 < len && /\d/.test(text[curr + 1]) && curr > 0 && /\d/.test(text[curr - 1])) {
              curr++;
            } else {
              break;
            }
          } else if (text[curr] === " ") {
            const restOfWord = text.slice(curr + 1).match(/^[a-zA-Z]+/);
            if (restOfWord) {
              const word = restOfWord[0];
              const stopWords = new Set([
                "where", "and", "or", "for", "with", "is", "as", "such", "that", "which",
                "gives", "from", "when", "then", "if", "iff", "representing", "serving",
                "evaluated", "forms", "like", "expresses", "transforms", "holds", "only",
                "determines", "to", "the", "a", "an", "in", "by", "denoting", "equal", "must"
              ]);
              if (stopWords.has(word.toLowerCase())) {
                break;
              }
              if (word.length > 4) {
                break;
              }
              curr++;
            } else {
              curr++;
            }
          } else {
            curr++;
          }
        } else {
          break;
        }
      }

      let candidate = text.slice(mathStart, curr).trim();
      candidate = candidate.replace(/[.,;:]+$/, "").trim();
      candidate = candidate.replace(/\\+$/, "").trim();

      if (candidate && candidate.length >= 2) {
        if (mathStart > lastTextIndex) {
          tokens.push({ type: "text", content: text.slice(lastTextIndex, mathStart) });
        }
        const isBlockEnv =
          /^\\begin\{(aligned|matrix|bmatrix|pmatrix|vmatrix|cases|gather\*?|align\*?)\}/.test(candidate) ||
          (candidate.includes("=") && candidate.length > 22) ||
          (candidate.includes("\\frac") && candidate.length > 25) ||
          candidate.includes("\\iint") ||
          candidate.includes("\\iiint") ||
          candidate.includes("\\oiint") ||
          candidate.includes("\\oint") ||
          candidate.includes("\\sum_") ||
          candidate.includes("\\int_");
        tokens.push({ type: isBlockEnv ? "display" : "inline", content: candidate });
        i = curr;
        lastTextIndex = i;
        continue;
      }
    }

    i++;
  }

  if (lastTextIndex < len) {
    tokens.push({ type: "text", content: text.slice(lastTextIndex) });
  }

  return tokens;
}

/**
 * Renders mixed text with inline/display math seamlessly without breaking mobile layout.
 */
export function RichMathText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  if (!text) return null;

  const tokens = tokenizeMathText(text);

  return (
    <span className={cn("inline leading-relaxed break-words text-left min-w-0 w-full max-w-full", className)}>
      {tokens.map((token, idx) => {
        if (token.type === "display") {
          return (
            <span
              key={idx}
              className="my-2 block w-full max-w-full rounded-xl border border-primary/20 bg-muted/40 px-2.5 sm:px-3 py-2 text-center overflow-x-auto shadow-xs math-scroll"
            >
              <MathFormula math={token.content} displayMode={true} />
            </span>
          );
        }
        if (token.type === "inline") {
          return <MathFormula key={idx} math={token.content} displayMode={false} />;
        }
        return <span key={idx}>{token.content}</span>;
      })}
    </span>
  );
}

interface FormulaCardProps {
  title: string;
  formula: string;
  explanation?: string;
  variables?: { symbol: string; meaning: string }[];
  className?: string;
  isBookmarked?: boolean;
  onBookmark?: () => void;
}

/**
 * A responsive, clean Formula Card matching university formula sheets.
 */
export function FormulaCard({
  title,
  formula,
  explanation,
  variables,
  className,
  isBookmarked = false,
  onBookmark,
}: FormulaCardProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${title}:\n${formula}${explanation ? `\n${explanation}` : ""}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      className={cn(
        "group relative w-full max-w-full min-w-0 overflow-hidden rounded-xl border border-border bg-card p-3 sm:p-4 shadow-xs transition-all hover:border-primary/40 hover:shadow-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border/60 pb-2 mb-2.5 min-w-0 gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="grid size-6 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
            <Sigma className="size-3.5" />
          </span>
          <h4 className="text-[13.5px] sm:text-[14px] font-bold tracking-tight text-foreground leading-snug break-words">
            {title}
          </h4>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {onBookmark && (
            <button
              type="button"
              onClick={onBookmark}
              aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
              className="press flex items-center justify-center rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
            >
              {isBookmarked ? (
                <BookmarkCheck className="size-4 text-primary" />
              ) : (
                <Bookmark className="size-4" />
              )}
            </button>
          )}
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy formula"
            className="press flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-muted-foreground hover:bg-muted"
          >
            {copied ? (
              <>
                <Check className="size-3 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main mathematical formula display box - strictly responsive with horizontal scroll */}
      <div className="my-2.5 w-full max-w-full rounded-lg border border-primary/20 bg-muted/40 px-3 py-3 text-foreground transition-colors overflow-x-auto text-center">
        <MathFormula math={formula} displayMode={true} />
      </div>

      {explanation && (
        <div className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-foreground/85 font-medium break-words">
          <RichMathText text={explanation} />
        </div>
      )}

      {variables && variables.length > 0 && (
        <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 border-t border-border/40 text-[11.5px]">
          {variables.map((v, i) => (
            <div key={i} className="flex items-center gap-1.5 text-muted-foreground min-w-0">
              <span className="font-mono font-bold text-primary shrink-0">{v.symbol}:</span>
              <span className="truncate">{v.meaning}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Extract formula part and explanation part from a revision point or technical string.
 * Strictly guarantees that 'formula' is an authentic mathematical equation and not an entire English paragraph.
 */
export function parseFormulaText(text: string): {
  title: string;
  formula: string;
  explanation: string;
} | null {
  if (!text) return null;

  const colonIdx = text.indexOf(":");
  if (colonIdx === -1 || colonIdx > 70) return null;

  const title = text.slice(0, colonIdx).trim();
  const rest = text.slice(colonIdx + 1).trim();

  // Check if rest contains an equals sign or LaTeX commands
  const hasEquals = rest.includes("=");
  const hasLatex = /\\(frac|sqrt|int|sum|lim|partial|rho|kappa|lambda|Delta|Gamma)\b/.test(rest);
  if (!hasEquals && !hasLatex) return null;

  // Split formula from trailing explanation if words follow
  // Example: "\rho = \frac{[1 + (y')^2]^{3/2}}{|y''|} expresses the radius of curvature..."
  const matchDesc = rest.match(
    /\s+(expresses|relates|representing|where|serving|fundamental|used|with|and|governs|valid|in which|describes|dictated by)\s+/i,
  );

  let formula = rest;
  let explanation = "";

  if (matchDesc && matchDesc.index !== undefined) {
    formula = rest.slice(0, matchDesc.index).trim();
    explanation = rest.slice(matchDesc.index).trim();
  } else if (rest.includes(";")) {
    const semiIdx = rest.indexOf(";");
    formula = rest.slice(0, semiIdx).trim();
    explanation = rest.slice(semiIdx + 1).trim();
  }

  // Clean trailing punctuation from formula
  formula = formula.replace(/[.,;:]+$/, "").trim();

  // A genuine formula should be compact (<= 140 chars) and contain math symbols, not a 200-word paragraph
  if (
    formula.length >= 2 &&
    formula.length <= 140 &&
    (formula.includes("=") || formula.includes("\\") || formula.includes("^") || formula.includes("/"))
  ) {
    return { title, formula, explanation };
  }

  return null;
}
