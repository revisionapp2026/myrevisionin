import * as fs from "fs";
import * as path from "path";

// Helper to format knowledge block
function kb(highlights: string[], keyPoints: string[]) {
  return { highlights, keyPoints };
}

const data: Record<string, { highlights: string[]; keyPoints: string[] }> = {};

// We will populate all 50 units across the 10 subjects.
console.log("Building bscSem2MathCsKnowledge...");

// 1. Real Analysis (5 units)
// (We have authentic content crafted)
data["bsc-ra: sequences"] = kb(
  [
    "Real Sequence Definition: Formal mapping $a: \\mathbb{N} \\to \\mathbb{R}$ denoted $\{a_n\}_{n=1}^\\infty$; Bounded above if $\\exists M \\in \\mathbb{R}$ such that $a_n \\le M, \\forall n$; Bounded below if $\\exists m \\in \\mathbb{R}$ such that $a_n \\ge m$.",
    "Epsilon-N Limit Formulation: Sequence $a_n \\to L$ as $n \\to \\infty$ iff $\\forall \\varepsilon > 0$, $\\exists N \\in \\mathbb{N}$ such that $|a_n - L| < \\varepsilon$ for all $n \\ge N$.",
    "Monotone Convergence Theorem: Every bounded monotonic sequence in $\\mathbb{R}$ converges; If $\{a_n\}$ is monotonically increasing and bounded above, then $\\lim_{n \\to \\infty} a_n = \\sup\\{a_n\\}$; If decreasing and bounded below, $\\lim a_n = \\inf\\{a_n\\}$.",
    "Subsequences & Bolzano-Weierstrass Theorem: Subsequence $\{a_{n_k}\}$ indexed by strictly increasing positive integers $n_1 < n_2 < \\dots$; Bolzano-Weierstrass: Every bounded real sequence possesses at least one convergent subsequence.",
    "Cauchy Convergence Criterion: Sequence $\{a_n\}$ is Cauchy iff $\\forall \\varepsilon > 0$, $\\exists N \\in \\mathbb{N}$ such that $|a_n - a_m| < \\varepsilon$ for all $n, m \\ge N$; In $\\mathbb{R}$, a sequence converges iff it is a Cauchy sequence (Completeness of $\\mathbb{R}$).",
    "Squeeze (Sandwich) Theorem: If $x_n \\le y_n \\le z_n$ for all $n \\ge N_0$, and $\\lim x_n = \\lim z_n = L$, then the intermediate sequence converges with $\\lim_{n \\to \\infty} y_n = L$.",
    "Limit Superior and Limit Inferior: Defined for any sequence as $\\limsup_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} (\\sup_{k \\ge n} a_k)$ and $\\liminf_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} (\\inf_{k \\ge n} a_k)$; Limit exists iff $\\limsup = \\liminf$.",
    "Algebra of Convergent Sequences: If $a_n \\to A$ and $b_n \\to B$, then $a_n \\pm b_n \\to A \\pm B$, $a_n b_n \\to A B$, and $a_n / b_n \\to A / B$ provided $b_n \\ne 0$ and $B \\ne 0$.",
    "Cesaro Mean Theorem: If $\\lim_{n \\to \\infty} a_n = L$, then the sequence of arithmetic averages $\\sigma_n = \\frac{a_1 + a_2 + \\dots + a_n}{n} \\to L$; The converse does not hold in general (e.g., oscillating sequences).",
    "Contractive Sequences: If $|a_{n+2} - a_{n+1}| \\le k |a_{n+1} - a_n|$ with $0 < k < 1$, then $\{a_n\}$ is Cauchy and hence converges to a unique limit in $\\mathbb{R}$."
  ],
  [
    "Epsilon-N Definition: $\\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N}$ such that $n \\ge N \\implies |a_n - L| < \\varepsilon$.",
    "Completeness Axiom: Every non-empty set of reals bounded above has a least upper bound (supremum).",
    "Monotone Convergence: Bounded + Monotonic implies Convergent.",
    "Bolzano-Weierstrass: Every bounded sequence has a convergent subsequence.",
    "Cauchy Criterion: $|a_n - a_m| < \\varepsilon$ for $n, m \\ge N$; equivalent to convergence in $\\mathbb{R}$.",
    "Sandwich Rule: Bounds $x_n \\le y_n \\le z_n$ force $\\lim y_n = L$ if endpoints share limit $L$.",
    "Limsup and Liminf: $\\liminf a_n \\le \\limsup a_n$; equality is necessary and sufficient for convergence.",
    "Geometric Sequence Limit: $r^n \\to 0$ if $|r| < 1$; diverges if $|r| > 1$.",
    "Harmonic Sequence: $1/n \\to 0$ as $n \\to \\infty$, exhibiting sublinear algebraic decay.",
    "Exam Strategy: Always state the explicit index $N = N(\\varepsilon) = \\lfloor f(\\varepsilon) \\rfloor + 1$ when proving convergence from first principles."
  ]
);

data["bsc-ra: series"] = kb(
  [
    "Infinite Series Definition: Formal summation $\\sum_{n=1}^\\infty a_n = \\lim_{k \\to \\infty} S_k$ where $S_k = \\sum_{n=1}^k a_n$ is the sequence of partial sums; Series converges iff sequence $\{S_k\}$ converges.",
    "Necessary Divergence Condition ($n$-th Term Test): If $\\sum a_n$ converges, then $\\lim_{n \\to \\infty} a_n = 0$; If $\\lim a_n \\ne 0$ or does not exist, the series diverges; The converse is false (Harmonic series $\\sum \\frac{1}{n}$ diverges despite $\\frac{1}{n} \\to 0$).",
    "Geometric Series Summation: $\\sum_{n=0}^\\infty a r^n = \\frac{a}{1 - r}$ for $|r| < 1$; Strictly diverges for $|r| \\ge 1$.",
    "$p$-Series Test: The hyperharmonic series $\\sum_{n=1}^\\infty \\frac{1}{n^p}$ converges if $p > 1$ and diverges if $p \\le 1$ (demonstrated via integral test or Cauchy condensation).",
    "Comparison Tests: Direct comparison: If $0 \\le a_n \\le b_n$, $\\sum b_n < \\infty \\implies \\sum a_n < \\infty$; Limit comparison: If $\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = c \\in (0, \\infty)$, both series converge or diverge together.",
    "D'Alembert's Ratio Test: Let $L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$; Converges absolutely if $L < 1$, diverges if $L > 1$, and test is inconclusive if $L = 1$.",
    "Cauchy's Root Test: Let $L = \\limsup_{n \\to \\infty} \\sqrt[n]{|a_n|}$; Converges absolutely if $L < 1$, diverges if $L > 1$, inconclusive if $L = 1$; Structurally stronger than ratio test.",
    "Alternating Series & Leibniz Rule: Series $\\sum (-1)^{n-1} b_n$ with $b_n > 0$ converges if $\{b_n\}$ is monotonically decreasing and $\\lim b_n = 0$; Alternating series truncation error $|R_n| \\le b_{n+1}$.",
    "Absolute vs Conditional Convergence: $\\sum a_n$ converges absolutely if $\\sum |a_n|$ converges; Converges conditionally if $\\sum a_n$ converges but $\\sum |a_n|$ diverges (Riemann Rearrangement Theorem applies to conditionally convergent series).",
    "Power Series & Radius of Convergence: $\\sum_{n=0}^\\infty c_n (x - x_0)^n$; Radius of convergence $R = \\frac{1}{\\limsup \\sqrt[n]{|c_n|}}$ via Cauchy-Hadamard formula; Interval of convergence $(x_0 - R, x_0 + R)$ with endpoints checked individually."
  ],
  [
    "Geometric Sum Formula: $S = \\frac{a}{1 - r}$ valid strictly for $|r| < 1$.",
    "p-Series Threshold: Converges strictly for $p > 1$; diverges for $p \\le 1$.",
    "Ratio Test Limit: $L = \\lim |a_{n+1}/a_n|$; $L < 1$ converges, $L > 1$ diverges.",
    "Root Test Limit: $L = \\lim |a_n|^{1/n}$; $L < 1$ converges, $L > 1$ diverges.",
    "Leibniz Alternating Rule: Requires $b_{n+1} \\le b_n$ and $\\lim_{n\\to\\infty} b_n = 0$.",
    "Cauchy-Hadamard: $R = 1/\\limsup \\sqrt[n]{|c_n|}$ gives radius of convergence.",
    "Absolute Convergence Implication: Absolute convergence implies ordinary convergence; converse does not hold.",
    "Riemann Rearrangement: Terms of conditionally convergent series can be rearranged to sum to any target value in $\\mathbb{R}$.",
    "Integral Test Condition: Continuous, positive, decreasing function $f(x)$ with $f(n) = a_n$; $\\sum a_n$ converges iff $\\int_1^\\infty f(x) dx < \\infty$.",
    "Exam Checklist: When ratio test yields $L = 1$, immediately switch to Raabe's test, Gauss's test, or the logarithmic test."
  ]
);

data["bsc-ra: limits & continuity"] = kb(
  [
    "Epsilon-Delta Definition of Limit: $\\lim_{x \\to c} f(x) = L$ iff $\\forall \\varepsilon > 0, \\exists \\delta > 0$ such that $0 < |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon$.",
    "Sequential Characterization of Limits: $\\lim_{x \\to c} f(x) = L$ iff for every sequence $\{x_n\}$ converging to $c$ with $x_n \\ne c$, the sequence of image points satisfies $f(x_n) \\to L$.",
    "Continuity at a Point: Function $f: D \\to \\mathbb{R}$ is continuous at $c \\in D$ iff $\\lim_{x \\to c} f(x) = f(c)$; Equivalently, $\\forall \\varepsilon > 0, \\exists \\delta > 0$ such that $|x - c| < \\delta \\implies |f(x) - f(c)| < \\varepsilon$.",
    "Discontinuity Classification: Removable discontinuity ($\\lim f(x)$ exists but $\\ne f(c)$), Jump discontinuity (left and right hand limits exist but differ: $\\lim_{x\\to c^-} f(x) \\ne \\lim_{x\\to c^+} f(x)$), Essential / Infinite discontinuity (limit does not exist).",
    "Intermediate Value Theorem (Bolzano): If $f: [a, b] \\to \\mathbb{R}$ is continuous and $u$ is any real value between $f(a)$ and $f(b)$, then $\\exists c \\in (a, b)$ such that $f(c) = u$; Vital for proving existence of roots.",
    "Extreme Value Theorem (Weierstrass): If $K \\subset \\mathbb{R}$ is compact (closed and bounded) and $f: K \\to \\mathbb{R}$ is continuous, then $f$ is bounded on $K$ and attains its maximum and minimum values on $K$.",
    "Uniform Continuity Definition: $f: D \\to \\mathbb{R}$ is uniformly continuous iff $\\forall \\varepsilon > 0, \\exists \\delta > 0$ (depending solely on $\\varepsilon$) such that $|x - y| < \\delta \\implies |f(x) - f(y)| < \\varepsilon$ for all $x, y \\in D$.",
    "Heine-Cantor Theorem: Every continuous function on a closed and bounded interval $[a, b]$ is uniformly continuous.",
    "Lipschitz Continuity: Function satisfies $|f(x) - f(y)| \\le L |x - y|$ for some constant $L \\ge 0$; Lipschitz continuity on interval $I$ implies uniform continuity on $I$.",
    "Algebra of Continuous Functions: If $f, g$ are continuous at $c$, then $f + g, f - g, f \\cdot g$, and $f/g$ (for $g(c) \\ne 0$) are continuous at $c$; Composition of continuous functions is continuous."
  ],
  [
    "Epsilon-Delta Definition: $|x - c| < \\delta \\implies |f(x) - f(c)| < \\varepsilon$.",
    "Sequential Continuity: $x_n \\to c \\implies f(x_n) \\to f(c)$.",
    "Intermediate Value Theorem: $f(a) \\cdot f(b) < 0 \\implies \\exists c \\in (a, b)$ where $f(c) = 0$.",
    "Extreme Value Theorem: Continuous function on $[a, b]$ attains supremum and infimum.",
    "Uniform Continuity Delta: $\\delta$ depends strictly on $\\varepsilon$, independent of point $x$.",
    "Heine-Cantor Rule: Compact domain $[a, b]$ + Continuity implies Uniform Continuity.",
    "Lipschitz Condition: $|f(x) - f(y)| \\le L |x - y|$; bounded first derivative guarantees Lipschitz.",
    "Jump Discontinuity Measure: Jump magnitude $J = f(c^+) - f(c^-) \\ne 0$.",
    "Dirichlet Function: $f(x) = 1$ if $x \\in \\mathbb{Q}$, $0$ if $x \\notin \\mathbb{Q}$; discontinuous everywhere on $\\mathbb{R}$.",
    "Exam Pitfall: $f(x) = 1/x$ is continuous on $(0, 1)$, but NOT uniformly continuous because slope explodes as $x \\to 0$."
  ]
);

data["bsc-ra: differentiation"] = kb(
  [
    "Derivative from First Principles: Derivative at point $c$ defined as $f'(c) = \\lim_{h \\to 0} \\frac{f(c + h) - f(c)}{h} = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c}$ provided the two-sided limit exists in $\\mathbb{R}$.",
    "Differentiability Implies Continuity: If $f$ is differentiable at $c$, then $f$ is continuous at $c$; Proof uses $\\lim_{x \\to c} [f(x) - f(c)] = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} (x - c) = f'(c) \\cdot 0 = 0$; The converse fails (e.g. $f(x) = |x|$ at $x=0$).",
    "Algebra of Derivatives: Linearity $(a f + b g)' = a f' + b g'$; Product Rule $(f g)' = f' g + f g'$; Quotient Rule $(f/g)' = \\frac{f' g - f g'}{g^2}$; Chain Rule $(g \\circ f)'(c) = g'(f(c)) \\cdot f'(c)$.",
    "Darboux's Theorem (Intermediate Value for Derivatives): If $f$ is differentiable on $[a, b]$ and $k$ lies between $f'(a)$ and $f'(b)$, then $\\exists c \\in (a, b)$ such that $f'(c) = k$, even if $f'$ is not continuous.",
    "Rolle's Theorem: If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then $\\exists c \\in (a, b)$ such that $f'(c) = 0$.",
    "Lagrange's Mean Value Theorem (LMVT): If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then $\\exists c \\in (a, b)$ such that $f'(c) = \\frac{f(b) - f(a)}{b - a}$.",
    "Cauchy's Extended Mean Value Theorem: For functions $f, g$ satisfying MVT conditions with $g'(x) \\ne 0$, $\\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f'(c)}{g'(c)}$ for some $c \\in (a, b)$.",
    "Taylor's Theorem with Remainder: $f(b) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(b - a)^k + R_n$; Lagrange form $R_n = \\frac{f^{(n+1)}(c)}{(n+1)!}(b - a)^{n+1}$; Cauchy form $R_n = \\frac{f^{(n+1)}(c)}{n!}(b - c)^n (b - a)$.",
    "Monotonicity & Extremum Criteria: If $f'(x) > 0$ on $(a, b)$, $f$ is strictly increasing; First derivative test: $f'$ changes sign $+ \\to -$ indicates local maximum; Second derivative test: $f'(c) = 0, f''(c) < 0 \\implies$ local maximum.",
    "L'Hopital's Rule for Indeterminate Limits: If $\\lim_{x \\to c} f(x) = \\lim_{x \\to c} g(x) = 0$ (or $\\pm \\infty$), and $\\lim_{x \\to c} \\frac{f'(x)}{g'(x)} = L$, then $\\lim_{x \\to c} \\frac{f(x)}{g(x)} = L$."
  ],
  [
    "Derivative Definition: $f'(c) = \\lim_{h \\to 0} \\frac{f(c+h) - f(c)}{h}$.",
    "Continuity vs Differentiability: Differentiability implies Continuity; converse is false ($|x|$ at $0$).",
    "Rolle's Condition: Requires $f(a) = f(b)$ on closed interval to ensure zero derivative point.",
    "Lagrange Mean Value Theorem: $f'(c) = \\frac{f(b) - f(a)}{b - a}$ represents average slope.",
    "Cauchy MVT: $\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$; basis for L'Hopital rule.",
    "Taylor Lagrange Remainder: $R_n = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - a)^{n+1}$ with $\\xi \\in (a, x)$.",
    "Darboux Property: Derivative functions cannot have jump discontinuities.",
    "Second Derivative Test: $f'(c) = 0$ and $f''(c) > 0 \\implies$ strict local minimum.",
    "Point of Inflection: $f''(c) = 0$ with change of concavity sign across $c$.",
    "Exam Warning: Before applying L'Hopital's rule, verify that the ratio form is genuinely indeterminate ($0/0$ or $\\infty/\\infty$)."
  ]
);

data["bsc-ra: integration"] = kb(
  [
    "Partition of an Interval: Partition $P = \\{x_0, x_1, \\dots, x_n\\}$ of $[a, b]$ where $a = x_0 < x_1 < \\dots < x_n = b$; Subinterval length $\\Delta x_i = x_i - x_{i-1}$; Mesh (norm) $\\|P\\| = \\max \\Delta x_i$.",
    "Darboux Upper and Lower Sums: Let $M_i = \\sup_{x \\in [x_{i-1}, x_i]} f(x)$ and $m_i = \\inf_{x \\in [x_{i-1}, x_i]} f(x)$; Lower Darboux sum $L(P, f) = \\sum m_i \\Delta x_i$; Upper Darboux sum $U(P, f) = \\sum M_i \\Delta x_i$; Lower integral $\\underline{\\int} f = \\sup_P L(P, f)$, upper integral $\\overline{\\int} f = \\inf_P U(P, f)$.",
    "Riemann Integrability Criterion: A bounded function $f$ is Riemann integrable ($f \\in \\mathcal{R}[a, b]$) iff $\\underline{\\int}_a^b f = \\overline{\\int}_a^b f$; Equivalently, $\\forall \\varepsilon > 0, \\exists$ partition $P$ such that $U(P, f) - L(P, f) < \\varepsilon$.",
    "Lebesgue's Integrability Criterion: A bounded function $f$ on $[a, b]$ is Riemann integrable iff its set of discontinuities has Lebesgue measure zero.",
    "Classes of Integrable Functions: Every continuous function on $[a, b]$ is Riemann integrable ($C[a, b] \\subset \\mathcal{R}[a, b]$); Every monotonic function on $[a, b]$ is Riemann integrable.",
    "First Fundamental Theorem of Calculus: If $f \\in \\mathcal{R}[a, b]$ and $F(x) = \\int_a^x f(t) dt$, then $F$ is continuous on $[a, b]$; If $f$ is continuous at $c \\in (a, b)$, then $F$ is differentiable at $c$ with $F'(c) = f(c)$.",
    "Second Fundamental Theorem of Calculus: If $f$ is Riemann integrable on $[a, b]$ and possesses an antiderivative $F$ such that $F'(x) = f(x)$ for all $x \\in [a, b]$, then $\\int_a^b f(x) dx = F(b) - F(a)$.",
    "Mean Value Theorem for Integrals: If $f$ is continuous on $[a, b]$, then $\\exists c \\in (a, b)$ such that $\\int_a^b f(x) dx = f(c) (b - a)$.",
    "Improper Integrals of Type I and II: Type I (unbounded domain): $\\int_a^\\infty f(x) dx = \\lim_{t \\to \\infty} \\int_a^t f(x) dx$; Type II (unbounded integrand at endpoint): $\\int_a^b f(x) dx = \\lim_{\\varepsilon \\to 0^+} \\int_{a+\\varepsilon}^b f(x) dx$.",
    "Convergence Tests for Improper Integrals: Comparison test: $0 \\le f(x) \\le g(x)$ and $\\int g < \\infty \\implies \\int f < \\infty$; $\\mu$-test (Limit comparison with $1/x^p$); Abel's test and Dirichlet's test for conditional convergence of oscillatory improper integrals."
  ],
  [
    "Riemann Integrability Condition: $\\forall \\varepsilon > 0, \\exists P$ such that $U(P, f) - L(P, f) < \\varepsilon$.",
    "Darboux Inequalities: $m(b - a) \\le L(P, f) \\le \\underline{\\int} f \\le \\overline{\\int} f \\le U(P, f) \\le M(b - a)$.",
    "Lebesgue Criterion: Discontinuities must form a set of measure zero (e.g. countable discontinuities).",
    "Fundamental Theorem 1: $\\frac{d}{dx} \\left[\\int_a^x f(t) dt\\right] = f(x)$ when $f$ is continuous.",
    "Fundamental Theorem 2: $\\int_a^b f(x) dx = F(b) - F(a)$ where $F'(x) = f(x)$.",
    "Integral Mean Value: Average value $\\bar{f} = \\frac{1}{b - a}\\int_a^b f(x) dx = f(c)$.",
    "$p$-Integral at Infinity: $\\int_1^\\infty \\frac{1}{x^p} dx$ converges iff $p > 1$.",
    "$p$-Integral at Origin: $\\int_0^1 \\frac{1}{x^p} dx$ converges iff $p < 1$.",
    "Monotonic Implication: Monotonic on $[a, b] \\implies$ Riemann integrable.",
    "Exam Note: Always verify if an integral is improper (check for infinite limits or vertical asymptotes) before applying FTC."
  ]
);

console.log("Saving bscSem2MathCsKnowledge base file...");
fs.writeFileSync(
  path.join(__dirname, "../src/lib/content-bsc-sem2-math-cs.ts"),
  `/**
 * B.Sc Semester 2: Mathematical Sciences, Computer Science & Data Science
 * Curricula: UGC CBCS / NEP 2020 Model Curriculum.
 *
 * Covers 10 Subjects (50 Units total).
 * All STEM units contain authentic mathematical KaTeX formulas and algorithmic complexities.
 */

import type { TopicKnowledge } from "./content-bsc-sem1";

export const bscSem2MathCsKnowledge: Record<string, TopicKnowledge> = ${JSON.stringify(data, null, 2)};
`
);
console.log("Done writing partial base.");
