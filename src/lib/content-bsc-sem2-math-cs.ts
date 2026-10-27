/**
 * B.Sc Semester 2: Mathematical Sciences, Computer Science & Data Science
 * Curricula: UGC CBCS / NEP 2020 Model Curriculum.
 *
 * Covers 10 Subjects (50 Units total):
 * 1. Real Analysis (Math)
 * 2. Differential Equations & Geometry (CS)
 * 3. Differential Equations & Probability (DS-AI)
 * 4. Problem Solving (Math)
 * 5. Data Structures using C (CS)
 * 6. Data Structures & Algorithms (DS-AI)
 * 7. Data Structures (Math)
 * 8. Statistics II / Database Basics (DS-AI)
 * 9. Data Structures Lab (CS)
 * 10. DSA Lab (DS-AI)
 *
 * All STEM units contain authentic mathematical KaTeX formulas and algorithmic complexities.
 */

import type { TopicKnowledge } from "./content-bsc-sem1";

export const bscSem2MathCsKnowledge: Record<string, TopicKnowledge> = {
  "bsc-ra: sequences": {
    "highlights": [
      "Real Sequence Definition: Formal mapping $a: \\mathbb{N} \\to \\mathbb{R}$ denoted $\\{a_n\\}_{n=1}^\\infty$; Bounded above if $\\exists M \\in \\mathbb{R}$ such that $a_n \\le M, \\forall n$; Bounded below if $\\exists m \\in \\mathbb{R}$ such that $a_n \\ge m$.",
      "Epsilon-N Limit Formulation: Sequence $a_n \\to L$ as $n \\to \\infty$ iff $\\forall \\varepsilon > 0$, $\\exists N \\in \\mathbb{N}$ such that $|a_n - L| < \\varepsilon$ for all $n \\ge N$.",
      "Monotone Convergence Theorem: Every bounded monotonic sequence in $\\mathbb{R}$ converges; If $\\{a_n\\}$ is monotonically increasing and bounded above, then $\\lim_{n \\to \\infty} a_n = \\sup\\{a_n\\}$; If decreasing and bounded below, $\\lim a_n = \\inf\\{a_n\\}$.",
      "Subsequences & Bolzano-Weierstrass Theorem: Subsequence $\\{a_{n_k}\\}$ indexed by strictly increasing positive integers $n_1 < n_2 < \\dots$; Bolzano-Weierstrass: Every bounded real sequence possesses at least one convergent subsequence.",
      "Cauchy Convergence Criterion: Sequence $\\{a_n\\}$ is Cauchy iff $\\forall \\varepsilon > 0$, $\\exists N \\in \\mathbb{N}$ such that $|a_n - a_m| < \\varepsilon$ for all $n, m \\ge N$; In $\\mathbb{R}$, a sequence converges iff it is a Cauchy sequence (Completeness of $\\mathbb{R}$).",
      "Squeeze (Sandwich) Theorem: If $x_n \\le y_n \\le z_n$ for all $n \\ge N_0$, and $\\lim x_n = \\lim z_n = L$, then the intermediate sequence converges with $\\lim_{n \\to \\infty} y_n = L$.",
      "Limit Superior and Limit Inferior: Defined for any sequence as $\\limsup_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} (\\sup_{k \\ge n} a_k)$ and $\\liminf_{n\\to\\infty} a_n = \\lim_{n\\to\\infty} (\\inf_{k \\ge n} a_k)$; Limit exists iff $\\limsup = \\liminf$.",
      "Algebra of Convergent Sequences: If $a_n \\to A$ and $b_n \\to B$, then $a_n \\pm b_n \\to A \\pm B$, $a_n b_n \\to A B$, and $a_n / b_n \\to A / B$ provided $b_n \\ne 0$ and $B \\ne 0$.",
      "Cesaro Mean Theorem: If $\\lim_{n \\to \\infty} a_n = L$, then the sequence of arithmetic averages $\\sigma_n = \\frac{a_1 + a_2 + \\dots + a_n}{n} \\to L$; The converse does not hold in general (e.g., oscillating sequences).",
      "Contractive Sequences: If $|a_{n+2} - a_{n+1}| \\le k |a_{n+1} - a_n|$ with $0 < k < 1$, then $\\{a_n\\}$ is Cauchy and hence converges to a unique limit in $\\mathbb{R}$."
    ],
    "keyPoints": [
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
  },
  "bsc-ra: series": {
    "highlights": [
      "Infinite Series Definition: Formal summation $\\sum_{n=1}^\\infty a_n = \\lim_{k \\to \\infty} S_k$ where $S_k = \\sum_{n=1}^k a_n$ is the sequence of partial sums; Series converges iff sequence $\\{S_k\\}$ converges.",
      "Necessary Divergence Condition ($n$-th Term Test): If $\\sum a_n$ converges, then $\\lim_{n \\to \\infty} a_n = 0$; If $\\lim a_n \\ne 0$ or does not exist, the series diverges; The converse is false (Harmonic series $\\sum \\frac{1}{n}$ diverges despite $\\frac{1}{n} \\to 0$).",
      "Geometric Series Summation: $\\sum_{n=0}^\\infty a r^n = \\frac{a}{1 - r}$ for $|r| < 1$; Strictly diverges for $|r| \\ge 1$.",
      "$p$-Series Test: The hyperharmonic series $\\sum_{n=1}^\\infty \\frac{1}{n^p}$ converges if $p > 1$ and diverges if $p \\le 1$ (demonstrated via integral test or Cauchy condensation).",
      "Comparison Tests: Direct comparison: If $0 \\le a_n \\le b_n$, $\\sum b_n < \\infty \\implies \\sum a_n < \\infty$; Limit comparison: If $\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = c \\in (0, \\infty)$, both series converge or diverge together.",
      "D'Alembert's Ratio Test: Let $L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$; Converges absolutely if $L < 1$, diverges if $L > 1$, and test is inconclusive if $L = 1$.",
      "Cauchy's Root Test: Let $L = \\limsup_{n \\to \\infty} \\sqrt[n]{|a_n|}$; Converges absolutely if $L < 1$, diverges if $L > 1$, inconclusive if $L = 1$; Structurally stronger than ratio test.",
      "Alternating Series & Leibniz Rule: Series $\\sum (-1)^{n-1} b_n$ with $b_n > 0$ converges if $\\{b_n\\}$ is monotonically decreasing and $\\lim b_n = 0$; Alternating series truncation error $|R_n| \\le b_{n+1}$.",
      "Absolute vs Conditional Convergence: $\\sum a_n$ converges absolutely if $\\sum |a_n|$ converges; Converges conditionally if $\\sum a_n$ converges but $\\sum |a_n|$ diverges (Riemann Rearrangement Theorem applies to conditionally convergent series).",
      "Power Series & Radius of Convergence: $\\sum_{n=0}^\\infty c_n (x - x_0)^n$; Radius of convergence $R = \\frac{1}{\\limsup \\sqrt[n]{|c_n|}}$ via Cauchy-Hadamard formula; Interval of convergence $(x_0 - R, x_0 + R)$ with endpoints checked individually."
    ],
    "keyPoints": [
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
  },
  "bsc-ra: limits & continuity": {
    "highlights": [
      "Epsilon-Delta Definition of Limit: $\\lim_{x \\to c} f(x) = L$ iff $\\forall \\varepsilon > 0, \\exists \\delta > 0$ such that $0 < |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon$.",
      "Sequential Characterization of Limits: $\\lim_{x \\to c} f(x) = L$ iff for every sequence $\\{x_n\\}$ converging to $c$ with $x_n \\ne c$, the sequence of image points satisfies $f(x_n) \\to L$.",
      "Continuity at a Point: Function $f: D \\to \\mathbb{R}$ is continuous at $c \\in D$ iff $\\lim_{x \\to c} f(x) = f(c)$; Equivalently, $\\forall \\varepsilon > 0, \\exists \\delta > 0$ such that $|x - c| < \\delta \\implies |f(x) - f(c)| < \\varepsilon$.",
      "Discontinuity Classification: Removable discontinuity ($\\lim f(x)$ exists but $\\ne f(c)$), Jump discontinuity (left and right hand limits exist but differ: $\\lim_{x\\to c^-} f(x) \\ne \\lim_{x\\to c^+} f(x)$), Essential / Infinite discontinuity (limit does not exist).",
      "Intermediate Value Theorem (Bolzano): If $f: [a, b] \\to \\mathbb{R}$ is continuous and $u$ is any real value between $f(a)$ and $f(b)$, then $\\exists c \\in (a, b)$ such that $f(c) = u$; Vital for proving existence of roots.",
      "Extreme Value Theorem (Weierstrass): If $K \\subset \\mathbb{R}$ is compact (closed and bounded) and $f: K \\to \\mathbb{R}$ is continuous, then $f$ is bounded on $K$ and attains its maximum and minimum values on $K$.",
      "Uniform Continuity Definition: $f: D \\to \\mathbb{R}$ is uniformly continuous iff $\\forall \\varepsilon > 0, \\exists \\delta > 0$ (depending solely on $\\varepsilon$) such that $|x - y| < \\delta \\implies |f(x) - f(y)| < \\varepsilon$ for all $x, y \\in D$.",
      "Heine-Cantor Theorem: Every continuous function on a closed and bounded interval $[a, b]$ is uniformly continuous.",
      "Lipschitz Continuity: Function satisfies $|f(x) - f(y)| \\le L |x - y|$ for some constant $L \\ge 0$; Lipschitz continuity on interval $I$ implies uniform continuity on $I$.",
      "Algebra of Continuous Functions: If $f, g$ are continuous at $c$, then $f + g, f - g, f \\cdot g$, and $f/g$ (for $g(c) \\ne 0$) are continuous at $c$; Composition of continuous functions is continuous."
    ],
    "keyPoints": [
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
  },
  "bsc-ra: differentiation": {
    "highlights": [
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
    "keyPoints": [
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
  },
  "bsc-ra: integration": {
    "highlights": [
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
    "keyPoints": [
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
  },
  "bsc-deg: first order odes": {
    "highlights": [
      "First-Order ODE Formulation: Standard explicit form $\\frac{dy}{dx} = f(x, y)$ or differential form $M(x, y) dx + N(x, y) dy = 0$; Solution satisfies differential relation across continuous interval $I$.",
      "Variable Separable Equations: Expressed as $g(y) dy = f(x) dx$; Solved by direct integration: $\\int g(y) dy = \\int f(x) dx + C$; Equations reducible to separable form via substitution $v = a x + b y + c$.",
      "Homogeneous Differential Equations: $\\frac{dy}{dx} = f(x, y)$ where $f(t x, t y) = f(x, y)$ (degree zero); Solved by substitution $y = v x \\implies \\frac{dy}{dx} = v + x \\frac{dv}{dx}$, transforming into separable form in variables $v$ and $x$.",
      "Exact Differential Equations: $M dx + N dy = 0$ is exact iff $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$; Solution given by $F(x, y) = \\int M dx \\; (y\\text{ const}) + \\int (\\text{terms of } N \\text{ free from } x) dy = C$.",
      "Integrating Factors (IF): When equation is non-exact, multiply by $\\mu(x, y)$ to enforce exactness; If $\\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}\\right) = f(x)$, then $\\text{IF} = e^{\\int f(x) dx}$; If $\\frac{1}{M}\\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right) = g(y)$, then $\\text{IF} = e^{\\int g(y) dy}$.",
      "Linear First-Order Differential Equations (Leibniz Form): Standard equation $\\frac{dy}{dx} + P(x) y = Q(x)$; Integrating factor $\\text{IF} = e^{\\int P(x) dx}$; General closed-form solution: $y \\cdot e^{\\int P(x) dx} = \\int Q(x) e^{\\int P(x) dx} dx + C$.",
      "Bernoulli's Non-Linear Differential Equation: Form $\\frac{dy}{dx} + P(x) y = Q(x) y^n$ ($n \\ne 0, 1$); Linearized by dividing by $y^n$ and substituting $v = y^{1-n} \\implies \\frac{dv}{dx} = (1-n) y^{-n} \\frac{dy}{dx}$, yielding linear ODE in $v$.",
      "Orthogonal Trajectories: A curve family cutting another family $F(x, y, c) = 0$ at right angles; In Cartesian coordinates, replace $\\frac{dy}{dx} \\to -\\frac{dx}{dy}$; In polar coordinates $f(r, \\theta, c) = 0$, replace $\\frac{dr}{d\\theta} \\to -r^2 \\frac{d\\theta}{dr}$.",
      "Picard's Existence and Uniqueness Theorem: For IVP $\\frac{dy}{dx} = f(x, y), y(x_0) = y_0$, if $f$ and $\\frac{\\partial f}{\\partial y}$ are continuous on rectangle $R$, there exists a unique solution in an interval $|x - x_0| \\le h$.",
      "Applications in Growth, Decay, and Cooling: Newton's Law of Cooling: $\\frac{dT}{dt} = -k(T - T_m)$; Radioactive decay $\\frac{dN}{dt} = -\\lambda N$; Population growth modeled by logistic ODE $\\frac{dP}{dt} = r P (1 - P/K)$."
    ],
    "keyPoints": [
      "Exactness Condition: $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$.",
      "Exact Solution Formula: $\\int M dx \\; (y\\text{ constant}) + \\int (\\text{terms in } N \\text{ without } x) dy = C$.",
      "Leibniz Linear IF: $\\text{IF} = e^{\\int P(x) dx}$; Solution: $y \\cdot \\text{IF} = \\int Q \\cdot \\text{IF} dx + C$.",
      "Bernoulli Substitution: For $y' + P y = Q y^n$, substitute $v = y^{1-n}$.",
      "Homogeneous Substitution: $y = v x \\implies y' = v + x v'$.",
      "Cartesian Orthogonal Trajectory: Replace $\\frac{dy}{dx}$ with $-\\frac{dx}{dy}$.",
      "Polar Orthogonal Trajectory: Replace $\\frac{dr}{d\\theta}$ with $-r^2 \\frac{d\\theta}{dr}$.",
      "Newton's Cooling Solution: $T(t) = T_m + (T_0 - T_m) e^{-k t}$.",
      "Picard Iteration: $y_{n+1}(x) = y_0 + \\int_{x_0}^x f(t, y_n(t)) dt$.",
      "Exam Trap: Ensure the coefficient of $\\frac{dy}{dx}$ in Leibniz form is strictly unity before extracting $P(x)$ and $Q(x)$."
    ]
  },
  "bsc-deg: higher order odes": {
    "highlights": [
      "General Linear ODE with Constant Coefficients: $a_n \\frac{d^n y}{dx^n} + \\dots + a_1 \\frac{dy}{dx} + a_0 y = X(x)$; General solution $y = y_c + y_p$ where $y_c$ is Complementary Function and $y_p$ is Particular Integral.",
      "Auxiliary Equation Roots: $f(m) = a_n m^n + \\dots + a_0 = 0$; Distinct real roots: $c_1 e^{m_1 x} + c_2 e^{m_2 x}$; Repeated roots: $(c_1 + c_2 x) e^{m x}$; Complex conjugate $\\alpha \\pm i\\beta$: $e^{\\alpha x}(c_1 \\cos\\beta x + c_2 \\sin\\beta x)$.",
      "Inverse Operator Method for $y_p$: $y_p = \\frac{1}{f(D)} X(x)$; For $X = e^{a x}$, $y_p = \\frac{e^{a x}}{f(a)}$ if $f(a) \\ne 0$; If $f(a) = 0$, $y_p = x \\frac{e^{a x}}{f'(a)}$.",
      "Trigonometric Particular Integrals: For $X = \\sin(a x)$ or $\\cos(a x)$, evaluate $y_p = \\frac{1}{f(D^2)} \\sin(a x) = \\frac{\\sin(a x)}{f(-a^2)}$; Case of failure: $y_p = x \\frac{1}{f'(D^2)} \\sin(a x)$.",
      "Polynomial Particular Integrals: For $X = x^m$, expand inverse operator in ascending powers of $D$ via binomial series: $y_p = [f(D)]^{-1} x^m = (1 + a_1 D + a_2 D^2 + \\dots) x^m$.",
      "Exponential Shift Theorem: $\\frac{1}{f(D)} [e^{a x} V(x)] = e^{a x} \\frac{1}{f(D + a)} V(x)$; Allows decoupling exponential modulation from arbitrary function $V(x)$.",
      "Method of Variation of Parameters: For $y'' + P(x) y' + Q(x) y = R(x)$, let $y_c = c_1 y_1 + c_2 y_2$; Solution $y_p = u y_1 + v y_2$ with $u = -\\int \\frac{y_2 R}{W} dx$ and $v = \\int \\frac{y_1 R}{W} dx$ where Wronskian $W = y_1 y_2' - y_1' y_2 \\ne 0$.",
      "Cauchy-Euler Equidimensional Equations: $x^2 \\frac{d^2 y}{dx^2} + a x \\frac{dy}{dx} + b y = f(x)$; Transformed to linear ODE with constant coefficients using $x = e^z \\implies z = \\ln x$, with $x D = \\theta$ and $x^2 D^2 = \\theta(\\theta - 1)$.",
      "Legendre's Linear Differential Equations: $(a x + b)^2 \\frac{d^2 y}{dx^2} + a_1 (a x + b) \\frac{dy}{dx} + a_2 y = f(x)$; Transformed via substitution $a x + b = e^z$ with $(a x + b) D = a \\theta$.",
      "Simultaneous Coupled Linear ODEs: Systems like $\\frac{dx}{dt} + a_1 x + b_1 y = f_1(t)$ and $\\frac{dy}{dt} + a_2 x + b_2 y = f_2(t)$; Solved systematically by algebraic elimination of one variable via operator $D = d/dt$."
    ],
    "keyPoints": [
      "Wronskian Determinant: $W(y_1, y_2) = \\left|\\begin{matrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{matrix}\\right| = y_1 y_2' - y_1' y_2 \\ne 0$.",
      "Variation of Parameters Formula: $u = -\\int \\frac{y_2 R}{W} dx, \\quad v = \\int \\frac{y_1 R}{W} dx$.",
      "Cauchy-Euler Substitution: $x = e^z, \\; x D = \\theta, \\; x^2 D^2 = \\theta(\\theta - 1)$ where $\\theta = d/dz$.",
      "Trigonometric Rule: Substitute $D^2 \\to -a^2$ strictly (never substitute $D \\to -a$).",
      "Failure Rule: Multiply by $x$ and differentiate operator denominator: $y_p = x \\frac{1}{f'(D)} X$.",
      "Exponential Shift: $\\frac{1}{f(D)}[e^{a x} V] = e^{a x} \\frac{1}{f(D+a)} V$.",
      "Annihilator Method: Differential operator $L$ such that $L[X(x)] = 0$; converts non-homogeneous ODE into higher-order homogeneous ODE.",
      "RLC Circuit Modeling: $L \\frac{d^2 q}{dt^2} + R \\frac{dq}{dt} + \\frac{1}{C} q = E(t)$; mechanical analogy to spring-mass-damper system.",
      "Natural Frequency: $\\omega_0 = 1/\\sqrt{L C}$ rad/s.",
      "Exam Technique: Check linear independence of complementary solutions $y_1, y_2$ via Wronskian before proceeding with variation of parameters."
    ]
  },
  "bsc-deg: laplace transforms": {
    "highlights": [
      "Definition of Laplace Transform: Integral operator $\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty e^{-s t} f(t) dt$ defined for $\\text{Re}(s) > a$ where $|f(t)| \\le M e^{a t}$ (exponential order condition).",
      "Transforms of Elementary Functions: $\\mathcal{L}\\{1\\} = \\frac{1}{s}$, $\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{e^{a t}\\} = \\frac{1}{s - a}$, $\\mathcal{L}\\{\\sin(a t)\\} = \\frac{a}{s^2 + a^2}$, $\\mathcal{L}\\{\\cos(a t)\\} = \\frac{s}{s^2 + a^2}$, $\\mathcal{L}\\{\\sinh(a t)\\} = \\frac{a}{s^2 - a^2}$.",
      "First Shifting Property (Frequency Translation): If $\\mathcal{L}\\{f(t)\\} = F(s)$, then $\\mathcal{L}\\{e^{a t} f(t)\\} = F(s - a)$; Fundamental for exponentially damped signals.",
      "Second Shifting Property (Time Translation): $\\mathcal{L}\\{f(t - a) u(t - a)\\} = e^{-a s} F(s)$ where $u(t - a)$ is the Heaviside unit step function; Vital for switching circuit analysis.",
      "Transform of Derivatives: $\\mathcal{L}\\{f'(t)\\} = s F(s) - f(0)$; Higher orders: $\\mathcal{L}\\{f''(t)\\} = s^2 F(s) - s f(0) - f'(0)$; Converts initial value differential problems into algebraic polynomials.",
      "Transform of Integrals: $\\mathcal{L}\\left\\{\\int_0^t f(\\tau) d\\tau\\right\\} = \\frac{F(s)}{s}$; Division by complex frequency variable $s$ corresponds directly to time-domain integration.",
      "Multiplication by $t^n$ & Division by $t$: $\\mathcal{L}\\{t^n f(t)\\} = (-1)^n \\frac{d^n}{ds^n} F(s)$; $\\mathcal{L}\\left\\{\\frac{f(t)}{t}\\right\\} = \\int_s^\\infty F(\\sigma) d\\sigma$ provided $\\lim_{t \\to 0} \\frac{f(t)}{t}$ exists.",
      "Convolution Theorem: $(f * g)(t) = \\int_0^t f(\\tau) g(t - \\tau) d\\tau$; Laplace transform maps time convolution into algebraic frequency multiplication: $\\mathcal{L}\\{(f * g)(t)\\} = F(s) \\cdot G(s)$.",
      "Periodic Function Transform: If $f(t + T) = f(t)$ with period $T$, then $\\mathcal{L}\\{f(t)\\} = \\frac{1}{1 - e^{-s T}} \\int_0^T e^{-s t} f(t) dt$; Applied to square, sawtooth, and full-wave rectified signals.",
      "Solving Differential Equations via Laplace: Take transform on both sides incorporating initial conditions $y(0) = y_0, y'(0) = y_1$; Solve algebraically for $Y(s)$; Decompose via partial fractions and apply inverse Laplace transform $\\mathcal{L}^{-1}$."
    ],
    "keyPoints": [
      "Definition Formula: $F(s) = \\int_0^\\infty e^{-s t} f(t) dt$.",
      "First Shift Rule: $\\mathcal{L}\\{e^{a t} f(t)\\} = F(s - a)$.",
      "Second Shift Rule: $\\mathcal{L}\\{f(t - a) u(t - a)\\} = e^{-a s} F(s)$.",
      "Derivative Transform: $\\mathcal{L}\\{y''\\} = s^2 Y(s) - s y(0) - y'(0)$.",
      "Convolution Property: $\\mathcal{L}^{-1}\\{F(s) G(s)\\} = \\int_0^t f(\\tau) g(t - \\tau) d\\tau$.",
      "Multiplication by $t$: $\\mathcal{L}\\{t f(t)\\} = -\\frac{d}{ds} F(s)$.",
      "Division by $t$: $\\mathcal{L}\\{f(t)/t\\} = \\int_s^\\infty F(\\sigma) d\\sigma$.",
      "Dirac Delta Function: $\\mathcal{L}\\{\\delta(t - a)\\} = e^{-a s}$; unit impulse representation.",
      "Periodic Transform Formula: $\\mathcal{L}\\{f\\} = \\frac{\\int_0^T e^{-s t} f(t) dt}{1 - e^{-s T}}$.",
      "Exam Tip: Always factor $s^2 + a s + b$ into complete square $(s + a/2)^2 + (b - a^2/4)$ before applying first shifting inverse."
    ]
  },
  "bsc-deg: 2d geometry": {
    "highlights": [
      "General Conic Cartesian Equation: $a x^2 + 2 h x y + b y^2 + 2 g x + 2 f y + c = 0$; Degenerate pair of lines iff discriminant determinant $\\Delta = a b c + 2 f g h - a f^2 - b g^2 - c h^2 = 0$.",
      "Conic Classification ($\\Delta \\ne 0$): Nature governed by $h^2 - a b$: Ellipse if $h^2 - a b < 0$ (Circle if $a = b, h = 0$); Parabola if $h^2 - a b = 0$; Hyperbola if $h^2 - a b > 0$ (Rectangular hyperbola if $a + b = 0$).",
      "Center of Conic: Center coordinates $(\\bar{x}, \\bar{y})$ obtained by solving linear gradient system: $\\frac{\\partial F}{\\partial x} = 2(a x + h y + g) = 0$ and $\\frac{\\partial F}{\\partial y} = 2(h x + b y + f) = 0$; Center exists uniquely if $a b - h^2 \\ne 0$.",
      "Ellipse Standard Metric Properties: Equation $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$; Eccentricity $e = \\sqrt{1 - b^2/a^2} < 1$; Foci at $(\\pm a e, 0)$; Directrices $x = \\pm a/e$; Latus rectum $2 b^2/a$.",
      "Hyperbola Metric Properties: Equation $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$; Eccentricity $e = \\sqrt{1 + b^2/a^2} > 1$; Foci at $(\\pm a e, 0)$; Directrices $x = \\pm a/e$; Asymptotes $y = \\pm \\frac{b}{a} x$.",
      "Parabola Metric Properties: Equation $y^2 = 4 a x$; Eccentricity $e = 1$; Focus $(a, 0)$; Directrix $x = -a$; Tangent at vertex $x = 0$; Latus rectum length $4 a$.",
      "Polar Form with Focus as Origin: $\\frac{l}{r} = 1 + e \\cos(\\theta - \\alpha)$ where $l$ is semi-latus rectum and $e$ is eccentricity; Represents ellipse ($e < 1$), parabola ($e = 1$), hyperbola ($e > 1$).",
      "Tangent Formulations: Point form for parabola $y y_1 = 2 a (x + x_1)$; Slope form $y = m x + a/m$; Tangent to central conic $\\frac{x x_1}{a^2} + \\frac{y y_1}{b^2} = 1$; Director circle locus $x^2 + y^2 = a^2 + b^2$.",
      "Conjugate Diameters in Central Conics: Chords bisecting parallel family; For ellipse, product of slopes of conjugate diameters satisfies $m_1 m_2 = -b^2/a^2$; Apollonius theorem: $C P^2 + C D^2 = a^2 + b^2$.",
      "Asymptotes of Hyperbola: Combined asymptote equation differs from hyperbola by constant $\\frac{\\Delta}{a b - h^2}$; Angle between asymptotes $2 \\theta = 2 \\tan^{-1}(b/a)$."
    ],
    "keyPoints": [
      "Conic Discriminant: $\\Delta = a b c + 2 f g h - a f^2 - b g^2 - c h^2$; $\\Delta = 0$ indicates line pair.",
      "Conic Classification Rule: $h^2 < a b$ (Ellipse), $h^2 = a b$ (Parabola), $h^2 > a b$ (Hyperbola).",
      "Rectangular Hyperbola: $h^2 > a b$ with $a + b = 0$; eccentricity $e = \\sqrt{2}$.",
      "Polar Conic Equation: $\\frac{l}{r} = 1 + e \\cos\\theta$.",
      "Director Circle (Ellipse): $x^2 + y^2 = a^2 + b^2$.",
      "Director Circle (Hyperbola): $x^2 + y^2 = a^2 - b^2$ ($a > b$).",
      "Parabola Perpendicular Tangents: Meet strictly along directrix $x = -a$.",
      "Conjugate Slope Product: $m_1 m_2 = -b^2/a^2$.",
      "Center System: $a x + h y + g = 0$ and $h x + b y + f = 0$.",
      "Exam Tip: Parabola tangency condition in slope form is $c = a/m$; ellipse is $c^2 = a^2 m^2 + b^2$."
    ]
  },
  "bsc-deg: 3d geometry": {
    "highlights": [
      "Direction Cosines & Ratios: Direction cosines $(l, m, n)$ satisfy $l^2 + m^2 + n^2 = 1$; Direction ratios $(a, b, c)$ relate via $l = \\frac{a}{\\sqrt{a^2 + b^2 + c^2}}$; Cosine angle $\\cos\\theta = l_1 l_2 + m_1 m_2 + n_1 n_2$.",
      "Standard Sphere Equation: General form $x^2 + y^2 + z^2 + 2 u x + 2 v y + 2 w z + d = 0$; Center coordinates $(-u, -v, -w)$; Radius $R = \\sqrt{u^2 + v^2 + w^2 - d}$; Real sphere iff $u^2 + v^2 + w^2 - d > 0$.",
      "Diameter Form of Sphere: Sphere having segment joining points $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$ as diameter: $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) + (z - z_1)(z - z_2) = 0$.",
      "Plane Section of Sphere (3D Circle): Intersection of sphere $S = 0$ with plane $P = 0$ is a circle; Center is foot of perpendicular from sphere center to plane; Circle radius $r_c = \\sqrt{R^2 - p^2}$ where $p$ is normal distance.",
      "Tangent Plane to Sphere: Tangent plane at $(x_1, y_1, z_1)$ on general sphere: $x x_1 + y y_1 + z z_1 + u(x + x_1) + v(y + y_1) + w(z + z_1) + d = 0$; Condition of tangency: perpendicular distance from center equals $R$.",
      "Orthogonal Intersection of Spheres: Spheres $S_1 = 0$ and $S_2 = 0$ intersect at right angles iff $2 u_1 u_2 + 2 v_1 v_2 + 2 w_1 w_2 = d_1 + d_2$; Matches condition $d^2 = R_1^2 + R_2^2$.",
      "Cone Definition & Homogeneous Form: Surface generated by a moving line through fixed vertex; Second-degree equation $a x^2 + b y^2 + c z^2 + 2 f y z + 2 g z x + 2 h x y = 0$ represents cone with vertex at origin iff homogeneous.",
      "Right Circular Cone: Generated by line rotating at fixed angle $\\alpha$ around axis $(l, m, n)$; Equation with vertex at origin: $[l x + m y + n z]^2 = (x^2 + y^2 + z^2) \\cos^2\\alpha$.",
      "Enveloping Cone of Sphere: Tangent lines drawn from external point $P(x_1, y_1, z_1)$ to sphere $S = 0$; Expressed compactly via $S S_1 = T^2$.",
      "Right Circular Cylinder: Surface generated by lines parallel to fixed line at constant radius $r$; Enveloping cylinder of sphere $S = 0$ parallel to line with direction ratios $(l, m, n)$."
    ],
    "keyPoints": [
      "Direction Cosines Identity: $l^2 + m^2 + n^2 = 1$.",
      "Sphere Center and Radius: Center $(-u, -v, -w)$, radius $R = \\sqrt{u^2 + v^2 + w^2 - d}$.",
      "Diameter Form: $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) + (z - z_1)(z - z_2) = 0$.",
      "Orthogonality Condition: $2 u_1 u_2 + 2 v_1 v_2 + 2 w_1 w_2 = d_1 + d_2$.",
      "Plane Section Circle Radius: $r_c = \\sqrt{R^2 - p^2}$.",
      "Homogeneous Cone Theorem: Every homogeneous second-degree equation represents a cone with vertex at $(0, 0, 0)$.",
      "Right Circular Cone Equation: Axis projection squared equals distance squared times $\\cos^2\\alpha$.",
      "Enveloping Cone Condition: $S S_1 = T^2$.",
      "Tangent Plane Equation: Substitute $x^2 \\to x x_1, \\; 2 x \\to x + x_1$ in general sphere.",
      "Exam Note: Divide through by leading coefficient if $x^2, y^2, z^2$ have coefficients other than 1 before calculating center and radius."
    ]
  },
  "bsc-dep: odes": {
    "highlights": [
      "First-Order Modeling Framework: Mathematical formulation of rate laws in computational systems; Model differential equation $\\frac{dy}{dt} = k y(1 - y/K)$ describing sigmoidal saturation in resource-constrained algorithms.",
      "Exactness Verification in Differential 1-Forms: $M(x, y)dx + N(x, y)dy = 0$ verified via exact differential test $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$; Exactness guarantees potential function $\\Phi(x, y)$ such that $\\nabla \\Phi = (M, N)$.",
      "Integrating Factors for Stochastic Transitions: Inhomogeneous rate equations normalized via $\\mu(x) = \\exp\\left(\\int \\frac{M_y - N_x}{N} dx\\right)$, stabilizing numerical integration schemes.",
      "Linear Time-Invariant Systems: First-order state equation $\\dot{x}(t) + a x(t) = b u(t)$; Analytical solution via impulse response convolution $x(t) = x(0)e^{-at} + \\int_0^t b e^{-a(t-\\tau)} u(\\tau) d\\tau$.",
      "Orthogonal Trajectories in Computational Fields: Locus of steepest descent trajectories orthogonal to equipotential lines $U(x, y) = c$; Derived by replacing derivative $y' \\to -1/y'$.",
      "Picard-Lindelof Fixed Point Iteration: Successive approximation sequence $y_{k+1}(t) = y_0 + \\int_{t_0}^t f(s, y_k(s)) ds$; Uniform convergence guaranteed by Banach contraction mapping principle under Lipschitz bound.",
      "Homogeneous Rational Differential Systems: Transformations $y = v x$ for scale-invariant differential equations $\\frac{dy}{dx} = F(y/x)$, reducing 2D state dynamics to separable 1D quadrature.",
      "Bernoulli Power Law Equations: Non-linear differential dynamics $y' + P(x) y = Q(x) y^n$ transformed into linear state variables via power substitution $u = y^{1-n}$.",
      "Numerical Stiff ODE Challenges: Explicit forward Euler integration $\\Delta t < 2/\\lambda$ stability limits for rapid exponential decay modes; Transition to implicit backward Euler formulations for stiff dynamical models.",
      "University Examination Blueprint: When proving exactness, write both partial derivatives explicitly, integrate $\\int M dx$ treating $y$ as constant, and include only non-$x$ terms from $\\int N dy$."
    ],
    "keyPoints": [
      "Exactness Test: $\\partial M / \\partial y = \\partial N / \\partial x$.",
      "Integrating Factor Formula: $\\mu(x) = \\exp\\left(\\int \\frac{\\partial M / \\partial y - \\partial N / \\partial x}{N} dx\\right)$.",
      "Linear ODE General Solution: $y \\cdot \\mu(x) = \\int Q(x) \\mu(x) dx + C$.",
      "Bernoulli Variable Transform: $v = y^{1-n} \\implies v' + (1-n) P v = (1-n) Q$.",
      "Orthogonal Trajectory Rule: Invert and negate derivative: $\\frac{dy}{dx} \\to -\\frac{dx}{dy}$.",
      "Picard Recurrence: $y_{n+1}(x) = y_0 + \\int_{x_0}^x f(t, y_n(t)) dt$.",
      "Logistic Differential Model: $\\frac{dy}{dt} = r y (1 - y/K)$; steady-state carrying capacity $K$.",
      "Euler Explicit Stability Threshold: Step size $h < \\frac{2}{|\\lambda|}$ for decay rate $\\lambda$.",
      "Separation of Variables Rule: Group all $y$-terms with $dy$ and all $x$-terms with $dx$ before integrating.",
      "Exam Tip: Always check whether the differential equation is homogeneous before attempting integrating factors."
    ]
  },
  "bsc-dep: laplace transforms": {
    "highlights": [
      "Unilateral Laplace Operator: Continuous integral transformation $\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty f(t) e^{-s t} dt$ mapping real-time functions into complex frequency domain $s = \\sigma + j \\omega$.",
      "Region of Convergence (ROC): Defined as right half-plane $\\text{Re}(s) > \\sigma_0$ ensuring exponential convergence of improper integral for signals of exponential order $|f(t)| \\le M e^{\\sigma_0 t}$.",
      "Elementary Kernel Transforms: $\\mathcal{L}\\{e^{a t}\\} = \\frac{1}{s - a}$, $\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}$, $\\mathcal{L}\\{\\cos(\\omega t)\\} = \\frac{s}{s^2 + \\omega^2}$, $\\mathcal{L}\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2 + \\omega^2}$.",
      "First Shifting (Damping) Property: Multiplication by exponential factor in time induces translation in frequency: $\\mathcal{L}\\{e^{-\\alpha t} f(t)\\} = F(s + \\alpha)$; Fundamental in analyzing underdamped transients.",
      "Second Shifting (Propagation Delay) Property: Delayed switching signals represented by Heaviside step: $\\mathcal{L}\\{f(t - T) u(t - T)\\} = e^{-s T} F(s)$.",
      "Operational Derivative Properties: First derivative: $\\mathcal{L}\\{f'(t)\\} = s F(s) - f(0^-)$; Second derivative: $\\mathcal{L}\\{f''(t)\\} = s^2 F(s) - s f(0^-) - f'(0^-)$, converting differential equations into linear algebra.",
      "Time Integration Mapping: Cumulative historical integration $\\mathcal{L}\\left\\{\\int_0^t f(\\tau) d\\tau\\right\\} = \\frac{F(s)}{s}$; Division by $s$ acts as pure integrator in control systems.",
      "Frequency Convolution Theorem: Time-domain convolution maps to algebraic product: $\\mathcal{L}\\{(f * g)(t)\\} = F(s) G(s)$ where $(f * g)(t) = \\int_0^t f(\\tau) g(t - \\tau) d\\tau$.",
      "Periodic Waveform Analysis: For repeating wave $f(t + T) = f(t)$, transform over single period evaluates to $F(s) = \\frac{1}{1 - e^{-s T}} \\int_0^T f(t) e^{-s t} dt$.",
      "Inverse Laplace via Heaviside Expansion: Decomposition of rational transfer function $F(s) = P(s)/Q(s)$ into partial fractions; Inverse residue formula $f(t) = \\sum \\text{Res}[F(s) e^{s t}, s_k]$."
    ],
    "keyPoints": [
      "Laplace Integral Definition: $F(s) = \\int_0^\\infty f(t) e^{-s t} dt$.",
      "First Shifting Rule: $\\mathcal{L}\\{e^{a t} f(t)\\} = F(s - a)$.",
      "Second Shifting Rule: $\\mathcal{L}\\{f(t - c) u(t - c)\\} = e^{-c s} F(s)$.",
      "Second Derivative Transform: $\\mathcal{L}\\{y''\\} = s^2 Y(s) - s y(0) - y'(0)$.",
      "Convolution Identity: $\\mathcal{L}^{-1}\\{F(s) G(s)\\} = \\int_0^t f(\\tau) g(t - \\tau) d\\tau$.",
      "Multiplication by $t$: $\\mathcal{L}\\{t f(t)\\} = -F'(s)$.",
      "Division by $t$: $\\mathcal{L}\\{f(t)/t\\} = \\int_s^\\infty F(\\sigma) d\\sigma$.",
      "Unit Impulse (Dirac): $\\mathcal{L}\\{\\delta(t)\\} = 1$.",
      "Periodic Transform Formula: $\\mathcal{L}\\{f\\} = \\frac{\\int_0^T e^{-s t} f(t) dt}{1 - e^{-s T}}$.",
      "Exam Tip: In partial fractions, if denominator contains $(s^2 + \\omega^2)$, assign numerator $A s + B$."
    ]
  },
  "bsc-dep: probability": {
    "highlights": [
      "Axiomatic Foundations of Probability: Probability space triplet $(\\Omega, \\mathcal{F}, P)$; Kolmogorov axioms: (1) Non-negativity $P(A) \\ge 0$; (2) Unit measure $P(\\Omega) = 1$; (3) Countable additivity $P(\\bigcup A_i) = \\sum P(A_i)$ for mutually exclusive events.",
      "Conditional Probability & Information Updating: Conditional likelihood $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ defined for $P(B) > 0$; Quantifies probabilistic belief adjustment under observed evidence $B$.",
      "Multiplication Rule & Chain Rule: Joint probability decomposition: $P(A_1 \\cap A_2 \\dots \\cap A_n) = P(A_1) P(A_2|A_1) P(A_3|A_1 \\cap A_2) \\dots P(A_n|\\bigcap_{i=1}^{n-1} A_i)$.",
      "Partition & Law of Total Probability: For exhaustive mutually exclusive partition $\\sum B_i = \\Omega$, probability of arbitrary event $A$ is $P(A) = \\sum_{i=1}^n P(A|B_i) P(B_i)$.",
      "Bayes' Theorem for Hypothesis Inversion: Posterior probability formulation: $P(B_k|A) = \\frac{P(A|B_k) P(B_k)}{\\sum_{i=1}^n P(A|B_i) P(B_i)}$; Core mathematical engine of Bayesian machine learning and diagnostic testing.",
      "Statistical Independence Criteria: Events $A$ and $B$ are statistically independent iff $P(A \\cap B) = P(A) P(B)$; Equivalent to $P(A|B) = P(A)$; Distinction between pairwise independence and mutual independence.",
      "Combinatorial Probability & Urn Models: Hypergeometric and sampling models; Counting permutations $P(n, r) = \\frac{n!}{(n-r)!}$ and combinations $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$ without replacement.",
      "Inclusion-Exclusion Principle: $P(A \\cup B \\cup C) = \\sum P(A) - \\sum P(A \\cap B) + P(A \\cap B \\cap C)$; Corrects double-counting across overlapping event boundaries.",
      "Geometric & Continuous Probability: Probability measured via geometric measure ratios $P(A) = \\frac{\\text{Length}(A)}{\\text{Length}(\\Omega)}$ or $\\frac{\\text{Area}(A)}{\\text{Area}(\\Omega)}$; Resolves Bertrand's paradox by strictly defining measure generation protocols.",
      "University Exam Strategies: In Bayes' theorem questions, clearly define the partition events $B_i$ (hypotheses) and observed event $A$ (symptom/test) before substituting numerical probabilities."
    ],
    "keyPoints": [
      "Kolmogorov Axioms: $P(A) \\ge 0, \\; P(\\Omega) = 1, \\; P(A \\cup B) = P(A) + P(B)$ for $A \\cap B = \\emptyset$.",
      "Conditional Formula: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.",
      "Bayes' Theorem: $P(B_k|A) = \\frac{P(A|B_k) P(B_k)}{\\sum P(A|B_i) P(B_i)}$.",
      "Total Probability: $P(A) = \\sum_{i=1}^n P(A|B_i) P(B_i)$.",
      "Independence Test: $P(A \\cap B) = P(A) \\cdot P(B)$.",
      "Complementary Rule: $P(A^c) = 1 - P(A)$.",
      "Union Bound: $P(A \\cup B) \\le P(A) + P(B)$ (Boole's inequality).",
      "Mutual Exclusivity: $A \\cap B = \\emptyset \\implies P(A \\cap B) = 0$; not identical to independence.",
      "Odds vs Probability: $\\text{Odds}(A) = \\frac{P(A)}{1 - P(A)}$.",
      "Exam Tip: In diagnostic test problems, remember false positives occur due to low baseline base rates even with high test sensitivity."
    ]
  },
  "bsc-dep: random variables": {
    "highlights": [
      "Formal Definition of Random Variable: Measurable function $X: \\Omega \\to \\mathbb{R}$ assigning real numerical values to sample space outcomes; Induces probability measure on Borel sets of $\\mathbb{R}$.",
      "Discrete vs Continuous Classification: Discrete random variables take countable values characterized by PMF $p(x_i) = P(X = x_i)$; Continuous random variables take continuum values characterized by PDF $f(x) \\ge 0$.",
      "Cumulative Distribution Function (CDF): $F(x) = P(X \\le x)$; Fundamental properties: (1) Monotonically non-decreasing; (2) Right-continuous $\\lim_{h \\to 0^+} F(x+h) = F(x)$; (3) Asymptotic limits $\\lim_{x \\to -\\infty} F(x) = 0$ and $\\lim_{x \\to \\infty} F(x) = 1$.",
      "Probability Density Function (PDF) Integration: Probability across interval $P(a \\le X \\le b) = \\int_a^b f(x) dx$; For continuous variables, probability at exact single point is identically zero: $P(X = c) = 0$.",
      "Mathematical Expectation (Mean): Expected value $E[X] = \\sum x_i p(x_i)$ for discrete, and $E[X] = \\int_{-\\infty}^\\infty x f(x) dx$ for continuous; Represents probability-weighted center of gravity.",
      "Variance & Standard Deviation: Dispersion measure $\\text{Var}(X) = \\sigma^2 = E[(X - \\mu)^2] = E[X^2] - (E[X])^2$; Invariance under shifts $\\text{Var}(X + c) = \\text{Var}(X)$, quadratic scaling $\\text{Var}(a X) = a^2 \\text{Var}(X)$.",
      "Moments & Moment Generating Functions (MGF): $M_X(t) = E[e^{t X}] = \\int e^{t x} f(x) dx$; Generates raw moments via series expansion: $E[X^k] = \\left.\\frac{d^k M_X(t)}{dt^k}\\right|_{t=0}$.",
      "Characteristic Function Formulation: $\\phi_X(t) = E[e^{i t X}]$; Always exists for all real $t$ since $|e^{i t x}| = 1$; Uniquely determines probability distribution via Fourier inversion.",
      "Chebyshev's Inequality: Non-parametric dispersion bound: $P(|X - \\mu| \\ge k \\sigma) \\le \\frac{1}{k^2}$; Guarantees that at least $1 - 1/k^2$ of probability mass lies within $k$ standard deviations of the mean.",
      "Functions of a Random Variable: Transformation $Y = g(X)$; For monotonic differentiable $g$, PDF transforms via Jacobian determinant rule: $f_Y(y) = f_X(g^{-1}(y)) \\left|\\frac{d}{dy} g^{-1}(y)\\right|$."
    ],
    "keyPoints": [
      "CDF Definition: $F(x) = P(X \\le x)$; $P(a < X \\le b) = F(b) - F(a)$.",
      "PDF Normalization: $\\int_{-\\infty}^\\infty f(x) dx = 1$; $f(x) = F'(x)$.",
      "Expectation Linearity: $E[a X + b Y] = a E[X] + b E[Y]$ (holds always, even for dependent variables).",
      "Variance Identity: $\\text{Var}(X) = E[X^2] - (E[X])^2$.",
      "Variance Scaling: $\\text{Var}(a X + b) = a^2 \\text{Var}(X)$.",
      "MGF Moment Rule: $E[X^n] = M_X^{(n)}(0)$.",
      "Chebyshev Bound: $P(|X - \\mu| \\ge k \\sigma) \\le 1/k^2$.",
      "Markov Inequality: For non-negative $X$, $P(X \\ge a) \\le E[X]/a$.",
      "Point Probability in Continuous: $P(X = c) = 0$ for continuous distributions.",
      "Exam Tip: To compute $E[X^2]$, integrate $x^2 f(x) dx$ across support boundaries and subtract $\\mu^2$ to find variance."
    ]
  },
  "bsc-dep: distributions": {
    "highlights": [
      "Bernoulli & Binomial Models: Bernoulli trial: success probability $p$, failure $q = 1-p$; Binomial distribution $B(n, p)$: $P(X = k) = \\binom{n}{k} p^k q^{n-k}$; Expectation $E[X] = n p$, variance $\\text{Var}(X) = n p q$.",
      "Poisson Distribution (Law of Rare Events): PMF $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ ($k = 0, 1, 2, \\dots$); Arises as limiting form of Binomial as $n \\to \\infty, p \\to 0$ with $n p = \\lambda$; Mean and variance are identical: $E[X] = \\text{Var}(X) = \\lambda$.",
      "Geometric Distribution: Number of trials until first success: $P(X = k) = q^{k-1} p$; Unique memoryless discrete distribution: $P(X > s + t | X > s) = P(X > t)$; Expectation $E[X] = 1/p$.",
      "Uniform Continuous Distribution: Constant probability density $f(x) = \\frac{1}{b - a}$ on interval $[a, b]$; Mean $\\mu = \\frac{a+b}{2}$, variance $\\sigma^2 = \\frac{(b - a)^2}{12}$.",
      "Exponential Distribution: Continuous waiting-time model $f(x) = \\lambda e^{-\\lambda x}$ ($x \\ge 0$); CDF $F(x) = 1 - e^{-\\lambda x}$; Continuous memoryless property; Mean $\\mu = 1/\\lambda$, variance $\\sigma^2 = 1/\\lambda^2$.",
      "Normal (Gaussian) Distribution $\\mathcal{N}(\\mu, \\sigma^2)$: PDF $f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left(-\\frac{(x - \\mu)^2}{2\\sigma^2}\\right)$; Symmetric bell curve centered at $\\mu$; Inflection points at $x = \\mu \\pm \\sigma$.",
      "Standard Normal Transformation: Standard score $Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$; Evaluated using cumulative error function $\\Phi(z) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^z e^{-u^2/2} du$; Empirical rule: $68.27\\%$ within $\\pm 1\\sigma$, $95.45\\%$ within $\\pm 2\\sigma$, $99.73\\%$ within $\\pm 3\\sigma$.",
      "Gamma & Chi-Square Distributions: Gamma function $\\Gamma(\\alpha) = \\int_0^\\infty x^{\\alpha-1} e^{-x} dx$; Chi-square distribution $\\chi^2_k$ with $k$ degrees of freedom is sum of squares of $k$ independent standard normal variables.",
      "Central Limit Theorem (Lindeberg-Levy CLT): Let $X_1, X_2, \\dots, X_n$ be i.i.d. random variables with mean $\\mu$ and variance $\\sigma^2 < \\infty$; As $n \\to \\infty$, sample mean $\\bar{X}_n$ satisfies $\\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)$.",
      "Approximations Across Distributions: Normal approximation to Binomial: $B(n, p) \\approx \\mathcal{N}(n p, n p q)$ when $n p \\ge 10$ and $n q \\ge 10$, using continuity correction factor $\\pm 0.5$."
    ],
    "keyPoints": [
      "Binomial Moments: Mean $= n p$, Variance $= n p q$ ($q = 1 - p$).",
      "Poisson Property: Mean $=$ Variance $=\\lambda$.",
      "Poisson PMF: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$.",
      "Exponential CDF: $F(x) = 1 - e^{-\\lambda x}$ for $x \\ge 0$.",
      "Exponential Mean and Variance: $E[X] = 1/\\lambda, \\; \\text{Var}(X) = 1/\\lambda^2$.",
      "Standard Normal Z-Score: $Z = \\frac{X - \\mu}{\\sigma}$.",
      "Empirical Normal Rule: $68\\% \\in (\\mu \\pm \\sigma), \\; 95.4\\% \\in (\\mu \\pm 2\\sigma), \\; 99.7\\% \\in (\\mu \\pm 3\\sigma)$.",
      "Central Limit Theorem: $\\bar{X} \\sim \\mathcal{N}(\\mu, \\sigma^2/n)$ as $n \\to \\infty$.",
      "Continuity Correction: Replace $P(X \\le k)$ with $P(Y \\le k + 0.5)$ when approximating discrete distributions by normal.",
      "Exam Tip: Check if $E[X] = \\text{Var}(X)$ in exam questions to quickly recognize Poisson modeling scenarios."
    ]
  },
  "bsc-ps: core concepts & principles": {
    "highlights": [
      "Problem Solving Algorithmic Paradigms: Structured decomposition of computational tasks; Problem definition, inputs/outputs specification, invariant identification, and state-space formulation.",
      "Asymptotic Complexity & Big-O Notation: Mathematical bounds $f(n) = \\mathcal{O}(g(n))$ iff $\\exists c > 0, n_0$ such that $0 \\le f(n) \\le c g(n)$ for all $n \\ge n_0$; Lower bound $\\Omega(g(n))$, tight bound $\\Theta(g(n))$.",
      "Divide and Conquer Framework: Decomposition into subproblems, recursive conquest, and optimal recombination; Modeled via recurrence relation $T(n) = a T(n/b) + f(n)$.",
      "Master Theorem for Divide & Conquer: Three fundamental cases comparing $f(n)$ to $n^{\\log_b a}$: Case 1 ($f(n) = \\mathcal{O}(n^{\\log_b a - \u000barepsilon}) \\implies \\Theta(n^{\\log_b a})$); Case 2 ($f(n) = \\Theta(n^{\\log_b a}) \\implies \\Theta(n^{\\log_b a} \\log n)$); Case 3 ($f(n) = \\Omega(n^{\\log_b a + \u000barepsilon}) \\implies \\Theta(f(n))$).",
      "Greedy Choice Property & Optimal Substructure: Locally optimal choices yielding globally optimal solutions; Proof of correctness via exchange argument (e.g. Huffman coding, Fractional Knapsack).",
      "Dynamic Programming (DP) Paradigm: Overlapping subproblems and optimal substructure; Memoization (top-down caching) vs Tabulation (bottom-up table filling); Resolves exponential recursion $\\mathcal{O}(2^n) \to \\mathcal{O}(n)$.",
      "Backtracking & State Space Tree Exploration: Systematic depth-first traversal of decision state trees with bounding functions; Pruning infeasible branches (e.g. $N$-Queens, Subset Sum).",
      "Branch and Bound Methodology: Breadth-first or best-first state exploration utilizing heuristic lower/upper bounding functions for combinatorial optimization (e.g. Traveling Salesperson Problem).",
      "Heuristic Search & A* Algorithm: Path evaluation function $f(n) = g(n) + h(n)$ where $g(n)$ is path cost and $h(n)$ is admissible heuristic ($h(n) \\le h^*(n)$ never overestimating true cost).",
      "Correctness & Loop Invariants: Formal verification: (1) Initialization (true prior to first iteration); (2) Maintenance (if true before step $k$, remains true before $k+1$); (3) Termination (provides useful property upon loop completion)."
    ],
    "keyPoints": [
      "Big-O Formal Definition: $|f(n)| \\le c |g(n)|$ for all $n \\ge n_0$.",
      "Master Theorem Formula: Solves $T(n) = a T(n/b) + \\mathcal{O}(n^d)$; if $d < \\log_b a \\implies \\mathcal{O}(n^{\\log_b a})$.",
      "Dynamic Programming Criteria: Requires overlapping subproblems + optimal substructure.",
      "Greedy Paradigm Requirement: Greedy choice property + optimal substructure without backtracking.",
      "Loop Invariant Three Stages: Initialization, Maintenance, Termination.",
      "Admissible Heuristic: $h(n) \\le h^*(n)$ guarantees A* optimality.",
      "Memoization vs Tabulation: Top-down recursion with cache vs bottom-up iterative table.",
      "Space-Time Trade-off: Hashing uses $\\mathcal{O}(n)$ extra space to achieve $\\mathcal{O}(1)$ average access.",
      "Recursion Tree Depth: For $T(n) = 2 T(n/2) + c n$, tree height is $\\log_2 n$, total work is $\\mathcal{O}(n \\log n)$.",
      "Exam Tip: In Master Theorem applications, always state values of $a, b, d$ and compute critical exponent $\\log_b a$ explicitly."
    ]
  },
  "bsc-ps: theoretical formulations & modeling": {
    "highlights": [
      "Mathematical Modeling of Computational Problems: Translating informal human constraints into formal objective functions $\\min f(x)$ or $\\max f(x)$ subject to linear inequalities $A x \\le b, x \\ge 0$.",
      "Graph Theoretic Formulations: System modeling using graphs $G = (V, E)$; Adjacency matrix $A \\in \\{0, 1\\}^{|V| \times |V|}$ vs adjacency list; Degree sum formula $\\sum_{v \\in V} \\deg(v) = 2 |E|$ (Handshaking Lemma).",
      "Shortest Path Formulations: Bellman-Ford recurrence: $d^{(k)}(v) = \\min(d^{(k-1)}(v), \\min_u(d^{(k-1)}(u) + w(u, v)))$; Detects negative weight cycles in $\\mathcal{O}(V E)$ time.",
      "All-Pairs Shortest Paths (Floyd-Warshall): Dynamic programming recurrence $D_{i j}^{(k)} = \\min(D_{i j}^{(k-1)}, D_{i k}^{(k-1)} + D_{k j}^{(k-1)})$ running in $\\mathcal{O}(V^3)$ time using intermediate vertex sets.",
      "Minimum Spanning Trees (MST): Cut property and Cycle property; Kruskal's algorithm ($\\mathcal{O}(E \\log E)$ using Disjoint Set Union-Find) vs Prim's algorithm ($\\mathcal{O}(E + V \\log V)$ using Fibonacci heap).",
      "Network Flow & Ford-Fulkerson Method: Flow conservation $\\sum f(u, v) = 0$ and capacity constraints $0 \\le f(u, v) \\le c(u, v)$; Max-Flow Min-Cut Theorem: Maximum network flow equals capacity of minimum cut $(S, T)$.",
      "Integer Linear Programming (ILP): Formulating NP-hard combinatorial choices via binary indicator variables $x_i \\in \\{0, 1\\}$; Linear programming relaxation provides fractional bounds.",
      "String Matching Models: Knuth-Morris-Pratt (KMP) failure function $\\pi[q]$ preprocessing pattern in $\\mathcal{O}(m)$ time to achieve deterministic linear search $\\mathcal{O}(n)$ without backward pointer resets.",
      "Probabilistic & Randomized Algorithms: Las Vegas algorithms (always correct, randomized runtime, e.g. Randomized Quicksort) vs Monte Carlo algorithms (deterministic runtime, bounded error probability, e.g. Miller-Rabin primality test).",
      "NP-Completeness & Reduction Proofs: Classes P, NP, NP-Complete, and NP-Hard; Cook-Levin Theorem proving SAT is NP-Complete; Polynomial-time Karp reduction $A \\le_P B$ proving computational intractability."
    ],
    "keyPoints": [
      "Handshaking Lemma: $\\sum_{v \\in V} \text{deg}(v) = 2 |E|$.",
      "Floyd-Warshall Recurrence: $D_{ij}^{(k)} = \\min(D_{ij}^{(k-1)}, D_{ik}^{(k-1)} + D_{kj}^{(k-1)})$.",
      "Max-Flow Min-Cut Equality: Value of max flow equals capacity of minimum $(S, T)$ cut.",
      "Kruskal Time Complexity: $\\mathcal{O}(E \\log E) = \\mathcal{O}(E \\log V)$ using disjoint set union with path compression.",
      "Dijkstra Condition: Requires non-negative edge weights $w(u, v) \\ge 0$.",
      "Bellman-Ford Utility: Handles negative edge weights and flags negative weight cycles.",
      "KMP Prefix Function: Computes longest proper prefix that is also a suffix: $\\pi[q] = \\max \\{k < q : P_k \\sqsupset P_q\\}$.",
      "Polynomial Reduction Rule: If $A \\le_P B$ and $A$ is NP-hard, then $B$ is NP-hard.",
      "Las Vegas vs Monte Carlo: Las Vegas guarantees correctness; Monte Carlo guarantees execution time.",
      "Exam Tip: In DP shortest path problems, define the state variable $D[i][j]$ clearly before writing the recursive minimization equation."
    ]
  },
  "bsc-ps: analytical & computational methods": {
    "highlights": [
      "Numerical Root Finding Methods: Bisection method (linear convergence, error halves $\u000barepsilon_{n+1} = \u000barepsilon_n/2$); Regula Falsi (False Position) using linear chord interpolation.",
      "Newton-Raphson Method: Quadratic convergence scheme $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$; Error relation $\u000barepsilon_{n+1} \u0007pprox \frac{f''(r)}{2 f'(r)} \u000barepsilon_n^2$; Fails when $f'(x_n) \u0007pprox 0$ or oscillation occurs around inflection points.",
      "Secant Method: Quasi-Newton approximation replacing analytic derivative with finite difference: $x_{n+1} = x_n - f(x_n) \frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$; Superlinear convergence order $\u0007lpha = \frac{1 + \\sqrt{5}}{2} \u0007pprox 1.618$.",
      "Iterative Linear Solvers: Gauss-Jacobi vs Gauss-Seidel relaxation for $A x = b$; Strictly diagonally dominant matrix condition $|a_{i i}| > \\sum_{j \ne i} |a_{i j}|$ guarantees global convergence independent of initial vector.",
      "Numerical Interpolation Polynomials: Lagrange interpolating polynomial $P_n(x) = \\sum_{i=0}^n y_i L_i(x)$ where $L_i(x) = \\prod_{j \ne i} \frac{x - x_j}{x_i - x_j}$; Newton's forward and backward divided difference formulations.",
      "Numerical Quadrature Rules: Trapezoidal rule: $\\int_a^b f(x) dx \u0007pprox \frac{h}{2}[y_0 + 2 \\sum y_i + y_n]$ with error $\\mathcal{O}(h^2)$; Simpson's 1/3 rule: $\frac{h}{3}[y_0 + 4 y_{odd} + 2 y_{even} + y_n]$ with error $\\mathcal{O}(h^4)$ exact for cubics.",
      "Simpson's 3/8 Rule & Romberg Integration: $\\int f dx \u0007pprox \frac{3h}{8}[y_0 + 3(y_1 + y_2) + 2 y_3 + \\dots + y_n]$; Romberg integration employs Richardson extrapolation to cancel lower-order discretization truncation errors.",
      "Numerical Ordinary Differential Equations: Single-step Runge-Kutta 4th order (RK4): $y_{n+1} = y_n + \frac{h}{6}(k_1 + 2 k_2 + 2 k_3 + k_4)$ with local truncation error $\\mathcal{O}(h^5)$ and global error $\\mathcal{O}(h^4)$.",
      "Predictor-Corrector Multi-Step Schemes: Milne-Simpson and Adams-Bashforth-Moulton methods; Computes provisional predictor value before refining iteratively with implicit corrector equations.",
      "Monte Carlo Numerical Integration: Approximating multidimensional integrals $I = \\int_\\Omega f(x) dx \u0007pprox \text{Vol}(\\Omega) \frac{1}{N} \\sum_{i=1}^N f(X_i)$; Error decays at rate $\\mathcal{O}(1/\\sqrt{N})$ independent of spatial dimension."
    ],
    "keyPoints": [
      "Newton-Raphson Formula: $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$; Order of convergence is 2.",
      "Secant Method Formula: Replaces $f'$ with slope between $(x_{n-1}, x_n)$; Convergence order $\u0007pprox 1.618$.",
      "Diagonal Dominance: $|a_{ii}| > \\sum_{j \ne i} |a_{ij}|$ ensures Gauss-Seidel converges.",
      "Trapezoidal Rule: $\\int_a^b f(x) dx = \frac{h}{2}[y_0 + 2(y_1 + \\dots + y_{n-1}) + y_n]$.",
      "Simpson 1/3 Rule: $\frac{h}{3}[\text{Ends} + 4(\text{Odd}) + 2(\text{Even})]$; requires even number of intervals.",
      "Simpson 3/8 Rule: Requires number of subintervals to be a multiple of 3.",
      "RK4 Slopes: $k_1 = f(x_n, y_n)$, $k_2 = f(x_n + h/2, y_n + h k_1/2)$, $k_3 = f(x_n + h/2, y_n + h k_2/2)$, $k_4 = f(x_n + h, y_n + h k_3)$.",
      "Lagrange Cardinal Basis: $L_i(x_j) = 1$ if $i = j$, and $0$ if $i \ne j$.",
      "Monte Carlo Convergence: Rate is $\\mathcal{O}(1/\\sqrt{N})$; immune to curse of dimensionality.",
      "Exam Tip: In Simpson's 1/3 rule, always verify that $n$ (the number of subintervals) is strictly even; if $n$ is odd, the formula cannot be used."
    ]
  },
  "bsc-ps: practical engineering & industrial applications": {
    "highlights": [
      "Resource Scheduling & Allocation: Task assignment models, bipartite matching, Kuhn-Munkres (Hungarian) algorithm running in $\\mathcal{O}(n^3)$ for minimum cost bipartite matching.",
      "Critical Path Method (CPM) & PERT: Project network scheduling; Earliest Start (ES), Latest Finish (LF), and Total Float $TF = LF - ES - t$; Critical path is longest path with zero total float.",
      "Inventory Optimization & EOQ Model: Economic Order Quantity formula $Q^* = \\sqrt{\frac{2 D S}{H}}$ balancing ordering costs $S$ against unit holding costs $H$; Safety stock modeling under lead-time demand variability.",
      "Supply Chain Network Optimization: Multi-echelon transportation linear programming; Initial basic feasible solutions via Vogel's Approximation Method (VAM), optimal testing via MODI (Modified Distribution) method.",
      "Database Indexing & B+ Trees: Disk-based indexing balancing search $T = \\mathcal{O}(\\log_B N)$; B+ tree keeps all records in leaves linked sequentially for efficient range queries.",
      "Cache Replacement Algorithms: Least Recently Used (LRU) implemented via doubly linked list + hash map in $\\mathcal{O}(1)$ time; Belady's optimal caching benchmark and Belady's anomaly in FIFO.",
      "Fast Fourier Transform (FFT) in Signal Processing: Cooley-Tukey radix-2 divide-and-conquer algorithm reducing Discrete Fourier Transform complexity from $\\mathcal{O}(N^2)$ to $\\mathcal{O}(N \\log N)$.",
      "Data Compression & Huffman Coding: Prefix-free variable length character encoding; Construction of optimal binary trie via min-priority queue yielding entropy-approaching compression.",
      "Cryptography & RSA Key Generation: Modular arithmetic, Fermat's Little Theorem $a^{p-1} \\equiv 1 \\pmod p$, Euler's totient function $\\phi(n) = (p-1)(q-1)$, public key exponent $e$, private decryption key $d \\equiv e^{-1} \\pmod{\\phi(n)}$.",
      "PageRank Matrix Eigenvector Algorithm: Random walk model of web hyperlink graph; Stationary probability distribution solved via Power Iteration: $p^{(k+1)} = d M p^{(k)} + \frac{1-d}{N} \\mathbf{1}$."
    ],
    "keyPoints": [
      "EOQ Equation: $Q^* = \\sqrt{\frac{2 D S}{H}}$.",
      "Critical Path Definition: Longest duration sequence through activity network; zero slack/float.",
      "Hungarian Algorithm Complexity: $\\mathcal{O}(V^3)$ for optimal bipartite assignment.",
      "LRU Implementation: Doubly linked list for order + hash map for $\\mathcal{O}(1)$ lookup and splice.",
      "Cooley-Tukey FFT Speedup: Reduces complexity from $\\mathcal{O}(N^2)$ to $\\mathcal{O}(N \\log N)$.",
      "Huffman Code Property: Prefix-free; no code word is a prefix of another code word.",
      "RSA Key Math: $e \\cdot d \\equiv 1 \\pmod{\\phi(n)}$ where $\\phi(n) = (p-1)(q-1)$.",
      "PageRank Formula: $R(u) = \frac{1-d}{N} + d \\sum_{v \\in B_u} \frac{R(v)}{L(v)}$ (damping factor $d \u0007pprox 0.85$).",
      "Vogel Approximation: Computes row/column penalties to construct initial transportation basis.",
      "Exam Tip: In CPM problems, forward pass computes Earliest Start (ES) using $\\max$, and backward pass computes Latest Finish (LF) using $\\min$."
    ]
  },
  "bsc-ps: modern trends, case studies & problem solving": {
    "highlights": [
      "Machine Learning Optimization Algorithms: Gradient descent updates $\theta_{t+1} = \theta_t - \\eta \nabla L(\theta_t)$; Stochastic Gradient Descent (SGD), Momentum, and Adam adaptive moment estimation ($m_t, v_t$).",
      "Distributed MapReduce Computing Paradigm: Distributed data processing primitives: Map $(k_1, v_1) \to \text{list}(k_2, v_2)$, Shuffle/Sort by key, and Reduce $(k_2, \text{list}(v_2)) \to \text{list}(v_3)$; Scalable over commodity clusters.",
      "MapReduce Matrix Multiplication: Two-phase MapReduce formulating dense matrix product $C = A B$ over petabyte datasets without single-node memory saturation.",
      "Consistent Hashing in Distributed Key-Value Stores: Distributed hash ring mapping keys and server nodes to circle $[0, 2^{32}-1]$; Node joins/leaves relocate only $K/N$ keys on average, preventing cache stampedes.",
      "Blockchain Consensus & Distributed Ledger Proof-of-Work: Nakamoto consensus requiring partial hash collision $H(\text{block} \\parallel \text{nonce}) < \text{Target}$; Byzantine Fault Tolerance under asynchronous networks.",
      "Deep Learning Backpropagation Algorithm: Efficient reverse-mode automatic differentiation applying chain rule across computational graphs to compute $\frac{\\partial L}{\\partial W^{[l]}}$.",
      "Natural Language Processing & Attention Mechanism: Scaled Dot-Product Attention: $\text{Attention}(Q, K, V) = \text{softmax}\\left(\frac{Q K^T}{\\sqrt{d_k}}\right) V$; Foundation of modern Transformer neural architectures.",
      "Reinforcement Learning Bellman Optimality: State-value recurrence $V^*(s) = \\max_a \\left[R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) V^*(s')\right]$; Q-learning off-policy temporal difference updates.",
      "Genetic Algorithms & Evolutionary Optimization: Metaheuristic population optimization: selection (roulette wheel, tournament), crossover (single-point, uniform), mutation, and elitist survival strategies.",
      "Case Study Synthesis & Exam Strategy: Answer case study questions by defining objective functions, explaining algorithmic trade-offs (space vs time vs scalability), and providing concrete pseudo-code."
    ],
    "keyPoints": [
      "Gradient Descent Step: $\theta_{t+1} = \theta_t - \\eta \nabla J(\theta_t)$.",
      "MapReduce Pipeline: Map $\to$ Shuffle & Sort $\to$ Reduce.",
      "Consistent Hashing Benefit: Only $1/N$ keys remapped when adding/removing a cluster node.",
      "Scaled Dot-Product Attention: $\text{Softmax}\\left(\frac{Q K^T}{\\sqrt{d_k}}\right) V$.",
      "Bellman Optimality Equation: $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$.",
      "Adam Optimizer Core: Tracks first moment (mean) and second moment (uncentered variance) of gradients.",
      "Proof-of-Work Condition: $\text{SHA256}(\text{Block} + \text{Nonce}) < \text{Target}$.",
      "Backpropagation Mechanism: Reverse topological evaluation of partial derivatives via chain rule.",
      "Exploration vs Exploitation: $\u000barepsilon$-greedy policy balances random search against current best action.",
      "Exam Tip: In transformer attention questions, explain that scaling factor $\\sqrt{d_k}$ prevents gradient vanishing in softmax for large dimensions."
    ]
  },
  "bsc-dsc: arrays & linked lists": {
    "highlights": [
      "Array Representation in Memory: Contiguous memory allocation; Base address $B$, element size $s$; 1D address formula $\\text{Addr}(A[i]) = B + (i - \\text{lower}) \\cdot s$; Row-major 2D offset $\\text{Addr}(A[i][j]) = B + [(i - l_1) C + (j - l_2)] s$.",
      "Column-Major Memory Mapping: Addressing column-by-column: $\\text{Addr}(A[i][j]) = B + [(j - l_2) R + (i - l_1)] s$; Used in numerical Fortran and low-level linear algebra kernels.",
      "Dynamic Memory Allocation in C: Functions `malloc(bytes)` (uninitialized heap allocation), `calloc(n, size)` (zero-initialized), `realloc(ptr, new_size)` (resizes block), and `free(ptr)` (prevents memory leaks).",
      "Singly Linked List Implementation: C struct definition `struct Node { int data; struct Node *next; };`; Insertion at head $\\mathcal{O}(1)$, insertion at tail $\\mathcal{O}(n)$ without tail pointer, traversal $\\mathcal{O}(n)$.",
      "Doubly Linked List Mechanics: Bidirectional navigation struct with `prev` and `next` pointers; Node deletion in $\\mathcal{O}(1)$ given direct pointer to node: `p->prev->next = p->next; p->next->prev = p->prev; free(p);`.",
      "Circular Linked List Architecture: Tail node points back to head node (`tail->next = head`); Simplifies round-robin process scheduling algorithms; Eliminates null-pointer checks during traversal.",
      "Header Linked Lists & Sentinel Nodes: Dummy header node eliminates special-case conditional logic when inserting or deleting at the list boundaries (head or tail).",
      "Polynomial Addition using Linked Lists: Representing polynomial terms as nodes `(coeff, exp, next)`; Merging sorted exponential exponents in linear time $\\mathcal{O}(m + n)$.",
      "Sparse Matrix Representation via Linked Lists: Coordinate lists storing non-zero triples `(row, col, value)`; Multi-linked structures with row and column header pointers saving space when sparsity $> 80\\%$.",
      "Memory Fragmentation & Dangling Pointers: Internal vs external fragmentation; Dangling pointer danger after `free(ptr)`; Best practice of immediately setting `ptr = NULL` post deallocation."
    ],
    "keyPoints": [
      "1D Address Calculation: $\\text{Loc}(A[i]) = \\text{Base} + i \\times \\text{sizeof}(\\text{type})$.",
      "Row-Major 2D Formula: $\\text{Loc}(A[i][j]) = B + (i \\cdot C + j) \\cdot s$.",
      "Column-Major 2D Formula: $\\text{Loc}(A[i][j]) = B + (j \\cdot R + i) \\cdot s$.",
      "Malloc vs Calloc: `malloc` leaves memory uninitialized; `calloc` zeros all allocated bytes.",
      "Free Function Rule: Always set pointer to `NULL` after calling `free()` to prevent dangling pointers.",
      "Singly List Insertion at Head: $\\mathcal{O}(1)$ time complexity.",
      "Doubly List Node Deletion: Requires updating both adjacent neighbors in $\\mathcal{O}(1)$ time.",
      "Circular List Condition: Traversal terminates when current pointer equals head again.",
      "Memory Leak Definition: Unreferenced allocated heap blocks failing to be returned via `free()`.",
      "Exam Trap: Never dereference a pointer returned by `malloc()` without first checking `if (ptr == NULL)`."
    ]
  },
  "bsc-dsc: stacks & queues": {
    "highlights": [
      "Stack Abstract Data Type (LIFO): Last-In First-Out data structure; Primitive operations `push(item)` (inserts at top), `pop()` (removes from top), `peek()` (inspects top), and `isEmpty()`; Constant time $\\mathcal{O}(1)$ performance.",
      "Array-Based Stack Implementation in C: Stack fixed array `stack[MAX]` with integer index `top = -1`; Stack Overflow condition `top == MAX - 1`; Stack Underflow condition `top == -1`.",
      "Linked List Implementation of Stack: Dynamic stack where `top` points to the head node of a singly linked list; Dynamic allocation eliminates stack overflow up to available virtual memory.",
      "Infix to Postfix Conversion (Shunting-Yard): Uses operator stack and precedence hierarchy: parentheses > exponents > multiplication/division > addition/subtraction; Outputs operands immediately, buffers operators.",
      "Postfix Expression Evaluation: Operands pushed onto operand stack; Operator pops top two operands, executes operation ($v_1 \\text{ op } v_2$), and pushes result back onto stack in $\\mathcal{O}(n)$ time.",
      "Queue Abstract Data Type (FIFO): First-In First-Out structure; `enqueue(item)` inserts at `rear`, `dequeue()` removes from `front`; Linear array implementation suffers from false overflow.",
      "Circular Queue Mechanics: Fixed array wrapping indices via modulo arithmetic: `rear = (rear + 1) % MAX`; Queue full condition `(rear + 1) % MAX == front`; Queue empty condition `front == rear == -1`.",
      "Double-Ended Queue (Deque): Data structure supporting insertion and deletion at both ends; Input-restricted deque vs output-restricted deque.",
      "Priority Queue using Arrays: Elements inserted with assigned priority; Higher priority items dequeued ahead of lower priority items; Unordered array gives $\\mathcal{O}(1)$ insertion and $\\mathcal{O}(n)$ deletion.",
      "System Call Stack & Recursion Simulation: Hardware call stack saving activation records (parameters, local variables, return address); Simulating recursive algorithms iteratively via explicit user-managed stack."
    ],
    "keyPoints": [
      "Stack Principle: LIFO (Last-In First-Out).",
      "Stack Overflow Condition: `top >= MAX - 1` in fixed array implementations.",
      "Stack Underflow Condition: `top < 0` when attempting a pop.",
      "Queue Principle: FIFO (First-In First-Out).",
      "Circular Queue Full Test: `(rear + 1) % MAX == front`.",
      "Circular Queue Next Position: `index = (index + 1) % MAX`.",
      "Infix to Postfix Precedence: Highest precedence operator pops lower or equal precedence operators.",
      "Postfix Evaluation Stack: Binary operator pops 2 operands: right operand first, then left operand.",
      "Recursion Stack Frame: Stores return address, parameters, and local scope state variables.",
      "Exam Tip: In circular queue problems, always maintain separate flags or use the modulo formula to avoid mixing up empty and full states."
    ]
  },
  "bsc-dsc: trees": {
    "highlights": [
      "Tree Terminology & Definitions: Hierarchical non-linear structure; Node, edge, root, parent, child, siblings, leaf (external node), internal node; Degree of a node; Height of a tree vs depth of a node.",
      "Binary Tree Properties: Each node has at most two children (`left` and `right`); Maximum nodes at level $i$ is $2^i$; Maximum nodes in tree of height $h$ is $2^{h+1} - 1$; In non-empty binary tree with $n_0$ leaves and $n_2$ nodes of degree 2, $n_0 = n_2 + 1$.",
      "Binary Tree Memory Representation: Sequential array representation (root at index 1; left child at $2i$, right child at $2i+1$, parent at $\\lfloor i/2 \\rfloor$); Linked representation using C struct with two child pointers.",
      "Binary Tree Traversal Algorithms: Preorder (Root-Left-Right), Inorder (Left-Root-Right), Postorder (Left-Right-Root); Level-order traversal implemented using FIFO queue in $\\mathcal{O}(n)$ time and space.",
      "Binary Search Tree (BST) Ordering Principle: For every node $X$, all keys in left subtree are strictly smaller than $X.key$, and all keys in right subtree are strictly greater; Inorder traversal of BST yields strictly sorted sequence.",
      "BST Search and Insertion in C: Recursive search executes in $\\mathcal{O}(h)$ time; Insertion locates appropriate null pointer leaf and links newly allocated node; Best case height $h = \\mathcal{O}(\\log n)$, worst case degenerate skewed tree $h = \\mathcal{O}(n)$.",
      "BST Deletion Algorithm: Three structural cases: (1) Leaf node (simply free and nullify pointer); (2) Node with one child (replace node with child); (3) Node with two children (replace with inorder successor or predecessor, then recursively delete successor).",
      "Threaded Binary Trees: Reuses null child pointers to store inorder predecessor (left thread) and inorder successor (right thread); Enables stackless and non-recursive inorder traversal.",
      "Expression Trees: Binary tree where internal nodes represent operators ($+, -, *, /$) and leaves represent operands; Inorder gives infix, postorder gives postfix expression.",
      "Binary Tree Reconstruction: A binary tree can be reconstructed uniquely given its Inorder traversal combined with either its Preorder or its Postorder traversal."
    ],
    "keyPoints": [
      "Leaf Node Relation: In any binary tree, leaves count $n_0 = n_2 + 1$ (where $n_2$ is count of nodes with 2 children).",
      "Array Tree Indices: Left child $= 2i$, Right child $= 2i + 1$, Parent $= \\lfloor i/2 \\rfloor$ (1-indexed).",
      "Inorder Traversal: Left $\\to$ Root $\\to$ Right; produces sorted order in BST.",
      "Preorder Traversal: Root $\\to$ Left $\\to$ Right.",
      "Postorder Traversal: Left $\\to$ Right $\\to$ Root.",
      "BST Two-Child Deletion: Replace target node's key with inorder successor (minimum element in right subtree).",
      "BST Worst-Case Height: $\\mathcal{O}(n)$ for sorted or reverse-sorted input sequences.",
      "Threaded Tree Benefit: Eliminates recursion and stack overhead during tree traversal.",
      "Level-Order Queue: Pushes root, then repeatedly dequeues node and enqueues its children.",
      "Exam Tip: Inorder ALONE cannot reconstruct a tree; you must pair Inorder with either Preorder or Postorder."
    ]
  },
  "bsc-dsc: sorting & searching": {
    "highlights": [
      "Linear Search Algorithm: Sequentially scans elements in array from index $0$ to $n-1$; Best-case time $\\mathcal{O}(1)$, worst-case and average-case time $\\mathcal{O}(n)$; Applicable to unsorted arrays and linked lists.",
      "Binary Search Algorithm: Operates on sorted array; Compares target against midpoint $mid = low + (high - low)/2$; Halves search interval each step; Recurrence $T(n) = T(n/2) + \\mathcal{O}(1)$ gives logarithmic time $\\mathcal{O}(\\log n)$.",
      "Bubble Sort Algorithm: Repeatedly steps through list, comparing adjacent elements and swapping them if out of order; $n-1$ passes; Worst-case $\\mathcal{O}(n^2)$; Optimized with boolean swap flag achieving $\\mathcal{O}(n)$ best-case for sorted input.",
      "Selection Sort Algorithm: Finds minimum element from unsorted subarray and swaps it to the beginning; Executes exactly $\\frac{n(n-1)}{2}$ comparisons in all cases; Total time $\\mathcal{O}(n^2)$; Unstable sort.",
      "Insertion Sort Algorithm: Builds sorted array one element at a time by shifting larger elements to the right; Best-case $\\mathcal{O}(n)$ for nearly-sorted data; Worst-case $\\mathcal{O}(n^2)$ for reverse-sorted data; Stable, in-place sort.",
      "Quicksort Partition Schemes: Divide-and-conquer sorting; Hoare partition vs Lomuto partition; Average-case time $\\mathcal{O}(n \\log n)$; Worst-case time $\\mathcal{O}(n^2)$ when pivot chosen is extreme element; Mitigated via randomized pivot.",
      "Merge Sort Implementation: Divides array into two halves, recursively sorts them, and merges sorted subarrays using temporary array; Recurrence $T(n) = 2 T(n/2) + \\mathcal{O}(n) \\implies \\mathcal{O}(n \\log n)$ in all cases; Stable, requires $\\mathcal{O}(n)$ auxiliary memory.",
      "Heap Sort Algorithm: Constructs max-heap in $\\mathcal{O}(n)$ time; Repeatedly swaps root with last element and calls `heapify` on reduced heap in $\\mathcal{O}(\\log n)$ time; Total time $\\mathcal{O}(n \\log n)$ in-place.",
      "Stability of Sorting Algorithms: A sort is stable if it preserves the relative order of elements with equal keys; Stable: Merge sort, Insertion sort, Bubble sort; Unstable: Quicksort, Heap sort, Selection sort.",
      "Comparison Sort Bound: Any comparison-based sorting algorithm requires at least $\\Omega(n \\log n)$ comparisons in the worst case (decision tree model height $\\log_2(n!) \\ge n \\log_2 n - n \\log_2 e$)."
    ],
    "keyPoints": [
      "Binary Search Mid Formula: $mid = low + \\frac{high - low}{2}$ avoids integer arithmetic overflow.",
      "Binary Search Complexity: $\\mathcal{O}(\\log n)$ worst case, requires sorted contiguous storage.",
      "Bubble Sort Optimization: Terminate early if inner loop executes zero swaps.",
      "Insertion Sort Best Case: $\\mathcal{O}(n)$ comparisons on pre-sorted array.",
      "Selection Sort Swap Count: Minimizes memory writes with at most $\\mathcal{O}(n)$ swaps.",
      "Merge Sort Time and Space: Always $\\mathcal{O}(n \\log n)$ time; requires $\\mathcal{O}(n)$ auxiliary space.",
      "Quicksort Worst Case: Occurs when input is sorted and first/last element is picked as pivot ($\\mathcal{O}(n^2)$).",
      "Heap Sort In-Place: Operates in $\\mathcal{O}(n \\log n)$ time using $\\mathcal{O}(1)$ auxiliary space.",
      "Stable Sort Definition: Preserves original relative order of duplicate key records.",
      "Exam Tip: Quicksort is fastest in practice due to excellent cache locality, but Merge sort is preferred for linked lists."
    ]
  },
  "bsc-dsc: hashing": {
    "highlights": [
      "Hash Table Concept & Direct Addressing: Direct address table maps universe of keys $U$ directly to indices; Impractical when $|U| \\gg m$; Hash function $h: U \\to \\{0, 1, \\dots, m-1\\}$ compresses keys into bounded array slots.",
      "Division Method for Hashing: $h(k) = k \\pmod m$; Choice of modulus $m$: prime number not close to powers of 2 or 10 to avoid biased clustering based on low-order bit patterns.",
      "Multiplication Method: $h(k) = \\lfloor m (k A \\pmod 1) \\rfloor$ where $0 < A < 1$; Knuth recommends golden ratio fractional conjugate $A = \\frac{\\sqrt{5}-1}{2} \\approx 0.6180339887$; Value of $m$ typically chosen as power of 2 ($m = 2^p$).",
      "Collision Phenomenon: Pigeonhole principle guarantees that collisions ($h(k_1) = h(k_2)$ for $k_1 \\ne k_2$) are inevitable when number of keys exceeds table capacity $m$.",
      "Collision Resolution by Separate Chaining: Each table slot contains pointer to head of linked list storing colliding keys; Load factor $\\alpha = n/m$; Average search time $\\mathcal{O}(1 + \\alpha)$; Worst-case $\\mathcal{O}(n)$ when all keys hash to single slot.",
      "Open Addressing (Closed Hashing): All elements stored directly inside table array ($n \\le m$); On collision, systematic probe sequence $h(k, i)$ is inspected until empty slot found.",
      "Linear Probing: Probe function $h(k, i) = (h'(k) + i) \\pmod m$ for probe step $i = 0, 1, \\dots, m-1$; Suffers from Primary Clustering (consecutive occupied slots merge into large blocks, increasing average probe length).",
      "Quadratic Probing: Probe function $h(k, i) = (h'(k) + c_1 i + c_2 i^2) \\pmod m$; Eliminates primary clustering but suffers from Secondary Clustering (keys hashing to identical initial slot follow identical probe paths).",
      "Double Hashing: Probe function $h(k, i) = (h_1(k) + i \\cdot h_2(k)) \\pmod m$; Employs two independent hash functions; Eliminates both primary and secondary clustering; $h_2(k)$ must be relatively prime to $m$.",
      "Rehashing & Dynamic Resizing: When load factor $\\alpha = n/m$ exceeds threshold (typically $\\alpha > 0.75$), allocate new table with $m' \\approx 2m$, recompute hash addresses for all existing keys, and free old table array."
    ],
    "keyPoints": [
      "Load Factor Definition: $\\alpha = \\frac{n}{m}$ (number of items $n$ divided by table slots $m$).",
      "Division Hash Formula: $h(k) = k \\pmod m$ (prefer prime $m$).",
      "Knuth Multiplication Constant: $A = (\\sqrt{5} - 1)/2 \\approx 0.6180339887$.",
      "Linear Probing Formula: $h(k, i) = (h'(k) + i) \\pmod m$.",
      "Double Hashing Formula: $h(k, i) = (h_1(k) + i \\cdot h_2(k)) \\pmod m$.",
      "Primary Clustering Cause: Long runs of occupied slots created by linear step increments.",
      "Separate Chaining Advantage: Can handle load factors $\\alpha > 1$ without table failure.",
      "Open Addressing Constraint: Strictly requires $\\alpha \\le 1$; degrades sharply when $\\alpha > 0.8$.",
      "Successful Search in Chaining: Average time is $1 + \\alpha / 2$ probe operations.",
      "Exam Tip: In open addressing deletion, never leave a deleted slot empty (`NULL`); mark it as `DELETED` so subsequent probe chains are not broken."
    ]
  },
  "bsc-dsa: lists & arrays": {
    "highlights": [
      "Dynamic Array Amortization Theory: Automatic resizing array strategy; When capacity $C$ is reached, allocate $2C$, copy elements, and deallocate old buffer; Amortized analysis proves $\\mathcal{O}(1)$ average append cost.",
      "The Potential Method in Amortized Analysis: Potential function $\\Phi(D_i) = 2i - 2^{\\lceil \\lg i \\rceil}$; Amortized cost $\\hat{c}_i = c_i + \\Phi(D_i) - \\Phi(D_{i-1}) = 3 = \\mathcal{O}(1)$ across any sequence of $n$ operations.",
      "Skip Lists Probabilistic Data Structure: Multi-level linked hierarchy providing logarithmic $\\mathcal{O}(\\log n)$ search, insert, and delete without complex tree rebalancing; Level promotion follows geometric coin flips with parameter $p = 1/2$.",
      "Cache-Oblivious Array Layouts: Van Emde Boas recursive layout of binary search trees in contiguous memory arrays; Minimizes cache line transfers to $\\mathcal{O}(\\log_B N)$ on two-level memory hierarchies.",
      "XOR Linked List Compact Memory Representation: Memory-efficient doubly linked list storing single pointer field $nptr = \\text{prev} \\oplus \\text{next}$; Traversal reconstructed via bitwise XOR operations: $\\text{next} = nptr \\oplus \\text{prev}$.",
      "Self-Organizing Lists & Heuristics: Dynamic linked list reorganizing on search to optimize for non-uniform access frequencies; Move-to-Front (MTF) heuristic is 2-competitive against offline optimal; Transpose heuristic.",
      "Static vs Dynamic Prefix Sums: Static array prefix sums $P[i] = \\sum_{k=0}^i A[k]$ answer range queries $\\sum_{k=l}^r A[k] = P[r] - P[l-1]$ in $\\mathcal{O}(1)$ time; Dynamic updates require Fenwick tree (Binary Indexed Tree).",
      "Fenwick Tree (Binary Indexed Tree): Array-based structure storing cumulative frequency sums; Queries and updates execute in $\\mathcal{O}(\\log n)$ using bitwise isolation of lowest set bit: `i & (-i)`.",
      "Segment Tree for Associative Range Queries: Complete binary tree answering range minimum/maximum/sum queries in $\\mathcal{O}(\\log n)$ and point updates in $\\mathcal{O}(\\log n)$; Lazy propagation enables $\\mathcal{O}(\\log n)$ range updates.",
      "Sparse Table for Static RMQ: Range Minimum Query table using dynamic programming: $M[i][j] = \\min(M[i][j-1], M[i + 2^{j-1}][j-1])$; Preprocessing in $\\mathcal{O}(n \\log n)$ answers RMQ queries in $\\mathcal{O}(1)$ time."
    ],
    "keyPoints": [
      "Amortized Append Cost: $\\mathcal{O}(1)$ despite $\\mathcal{O}(n)$ occasional doubling reallocation.",
      "Potential Method Formula: $\\hat{c}_i = c_i + \\Phi(D_i) - \\Phi(D_{i-1})$.",
      "Skip List Height: Expected height is $\\mathcal{O}(\\log_{1/p} n)$.",
      "XOR Linked List Identity: $A \\oplus (A \\oplus B) = B$.",
      "Prefix Sum Range Query: $\\text{Sum}(l, r) = P[r] - P[l-1]$.",
      "Fenwick Index Navigation: Lowest set bit extracted via expression `i & (-i)`.",
      "Segment Tree Space Bound: Requires at most $4n$ array nodes for array of length $n$.",
      "Sparse Table RMQ: $\\mathcal{O}(1)$ query time for idempotent operators (minimum, maximum, GCD).",
      "Move-to-Front Competitiveness: MTF is 2-competitive with static optimal ordering.",
      "Exam Tip: In dynamic arrays, shrinking should occur at 1/4 capacity to 1/2 capacity (not at 1/2 capacity) to avoid rapid re-allocation thrashing."
    ]
  },
  "bsc-dsa: stacks & queues": {
    "highlights": [
      "Monotonic Stack Paradigm: Stack maintaining elements in strictly increasing or decreasing order; Resolves Next Greater Element (NGE) and Previous Smaller Element for all $n$ array elements in linear $\\mathcal{O}(n)$ time.",
      "Largest Rectangle in Histogram: Monotonic increasing stack tracking indices; Pops bar when smaller bar is encountered, computing area width as $i - stack.top() - 1$; Total runtime $\\mathcal{O}(n)$.",
      "Monotonic Deque & Sliding Window Maximum: Double-ended queue maintaining indices of prospective maximum values in sliding window of size $k$; Amortized $\\mathcal{O}(1)$ per window slide, yielding global $\\mathcal{O}(n)$ time.",
      "Two-Stack Queue Implementation: Queue simulated using two stacks ($S_1$ for enqueue, $S_2$ for dequeue); Elements transferred only when $S_2$ is empty; Amortized cost per operation is $\\mathcal{O}(1)$.",
      "Circular Buffer Lock-Free Queues: Ring buffer using atomic head and tail pointers; Used extensively in high-frequency trading and Linux kernel ring buffers (`kfifo`) for single-producer single-consumer thread communication.",
      "Min-Stack / Max-Stack in $\\mathcal{O}(1)$: Auxiliary stack tracking running minimum, or storing difference values $2x - \\min$; Retrieves minimum element in constant $\\mathcal{O}(1)$ time and $\\mathcal{O}(n)$ extra space.",
      "Expression Syntax Parsing & Evaluation: Conversion between Infix, Prefix (Polish), and Postfix (Reverse Polish) representations; Abstract Syntax Tree (AST) construction via recursive descent or shunting-yard stack parsing.",
      "Parentheses & Bracket Balancing: Stack pushing opening brackets, popping on closing match; Failure modes: stack underflow on unmatched close, non-empty stack on completion, mismatched bracket types.",
      "Priority Deque & Double-Ended Priority Queue (DEPQ): Interval heap or min-max heap; Simultaneously retrieves both minimum and maximum elements in $\\mathcal{O}(1)$ and deletes in $\\mathcal{O}(\\log n)$ time.",
      "Queueing Discipline & Fair Queuing: FIFO vs LIFO vs Priority; Weighted Fair Queuing (WFQ) approximating Generalized Processor Sharing (GPS) in network packet schedulers."
    ],
    "keyPoints": [
      "Monotonic Stack Complexity: Each element pushed once and popped at most once $\\implies \\mathcal{O}(n)$ total time.",
      "Sliding Window Maximum Time: $\\mathcal{O}(n)$ using monotonic deque.",
      "Two-Stack Queue Amortization: Amortized cost of `dequeue()` is $\\mathcal{O}(1)$.",
      "Min-Stack Property: `getMin()` executes in $\\mathcal{O}(1)$ time.",
      "Lock-Free Ring Buffer: Requires no mutual exclusion mutexes for single-producer single-consumer.",
      "Shunting-Yard Precedence: Operator of lower precedence forces higher precedence operators off the stack.",
      "Histogram Max Area Complexity: Solved in linear $\\mathcal{O}(n)$ time via monotonic stack.",
      "Bracket Match Invariant: Balanced string of length $n$ must have non-negative prefix balance and zero final balance.",
      "Min-Max Heap Property: Levels alternate between min-levels and max-levels.",
      "Exam Tip: In monotonic stack questions, trace the exact index bounds ($i$ and current top) to verify rectangle width calculations."
    ]
  },
  "bsc-dsa: trees": {
    "highlights": [
      "Self-Balancing Binary Search Trees: Motivation: prevent degenerate $\\mathcal{O}(n)$ BST worst-case behavior; Invariant maintenance guarantees logarithmic height $h = \\mathcal{O}(\\log n)$ for all dynamic operations.",
      "AVL Trees & Balance Factors: For every node $X$, balance factor $BF(X) = \\text{height}(X.left) - \\text{height}(X.right) \\in \\{-1, 0, 1\\}$; Height bounded tightly by $h < 1.44 \\log_2(n + 2)$.",
      "AVL Rotations & Rebalancing: Four rebalancing cases following insertion: Left-Left (Single Right Rotation), Right-Right (Single Left Rotation), Left-Right (Double Rotation: Left then Right), Right-Left (Double Rotation: Right then Left); All rotations execute in $\\mathcal{O}(1)$ pointer operations.",
      "Red-Black Tree Structural Invariants: (1) Every node is red or black; (2) Root is black; (3) All leaf nodes (NIL) are black; (4) Red node cannot have red children (no two consecutive reds); (5) Black-height rule: every simple path from node to descendant leaf contains identical count of black nodes.",
      "Red-Black Tree Height Bound: Maximum tree height $h \\le 2 \\log_2(n + 1)$; Insertion requires at most 2 rotations; Deletion requires at most 3 rotations; Favored in standard library associative maps (`std::map`, Java `TreeMap`).",
      "Splay Trees & Self-Adjusting Heuristics: Binary search tree using amortized splaying heuristic; Every accessed node is rotated to root via zig, zig-zig, and zig-zag splay steps; Amortized complexity $\\mathcal{O}(\\log n)$ per operation without storing explicit balance metadata.",
      "B-Trees & Multi-Way Disk Search Trees: Balanced search tree designed for block-storage systems; Parameter $t$ (minimum degree); Every node except root contains between $t-1$ and $2t-1$ keys; All leaves reside at exact same depth; Height $h \\le \\log_t \\frac{n+1}{2}$.",
      "B+ Tree Architecture: B-tree modification where internal nodes act exclusively as index routers; All actual records/data pointers stored exclusively in leaves; Leaf nodes linked sequentially as doubly linked list for fast range scan queries.",
      "Trie (Prefix Tree) Data Structure: Multi-way tree storing strings where edges represent characters; Lookup and insertion run in $\\mathcal{O}(L)$ time where $L$ is string length, independent of total dictionary size $N$; Compressed Radix trie (Patricia tree).",
      "Fenwick Tree vs Segment Tree Comparison: Fenwick tree is simpler and more space-efficient ($n$ integers) for prefix sums; Segment tree is more versatile, supporting arbitrary non-invertible associative aggregations (minimum, GCD, matrix multiplication)."
    ],
    "keyPoints": [
      "AVL Balance Factor Rule: $|h_L - h_R| \\le 1$ at every node.",
      "AVL Max Height Bound: $h \u0007pprox 1.44 \\log_2 n$.",
      "AVL Rotation Time: Constant $\\mathcal{O}(1)$ time; at most 2 rotations per insertion.",
      "Red-Black Invariant 4: No two consecutive red nodes on any path.",
      "Red-Black Black Height Rule: All paths from root to NIL leaves contain identical black node count.",
      "Red-Black Max Height: $h \\le 2 \\log_2(n + 1)$.",
      "Splay Tree Amortization: Any sequence of $m$ operations takes $\\mathcal{O}(m \\log n)$ time.",
      "B-Tree Leaf Depth: All leaves are at the exact same depth (perfect balance).",
      "B+ Tree Range Advantage: Direct leaf-level horizontal linked list scan eliminates tree traversals.",
      "Exam Tip: When an insertion causes an AVL unbalance, identify the lowest unbalanced ancestor and determine whether it is an LL, RR, LR, or RL case."
    ]
  },
  "bsc-dsa: sorting": {
    "highlights": [
      "Comparison Sort Information-Theoretic Lower Bound: Binary decision tree model; $n!$ possible permutations requires tree height $h \\ge \\log_2(n!) = \\Omega(n \\log n)$ comparisons in the worst case; Proves optimality of Merge sort and Heap sort.",
      "Merge Sort Divide-and-Conquer Analysis: Recurrence $T(n) = 2 T(n/2) + \\Theta(n)$; By Master Theorem case 2, $T(n) = \\Theta(n \\log n)$ across worst, average, and best cases; External sorting algorithm of choice for magnetic disks.",
      "Quicksort Probabilistic Analysis: Average-case recurrence $T(n) = \frac{2}{n} \\sum_{k=1}^{n-1} T(k) + \\Theta(n) = 2 n \\ln n \u0007pprox 1.386 n \\log_2 n$; Randomized pivot selection guarantees expected time $\\mathcal{O}(n \\log n)$ independent of input ordering.",
      "Heap Sort & Priority Queue Sorting: Binary heap array layout; `BuildMaxHeap` runs in linear time $\\mathcal{O}(n)$ (sum of series $\\sum \frac{h}{2^h}$); Extraction of $n$ elements takes $n \times \\mathcal{O}(\\log n)$, yielding total time $\\mathcal{O}(n \\log n)$ in-place.",
      "Counting Sort (Non-Comparison Linear Sort): Counts frequencies of keys in range $[0, k]$; Computes prefix sums to place elements into output array in stable order; Time complexity $\\mathcal{O}(n + k)$; Requires $\\mathcal{O}(n + k)$ auxiliary space.",
      "Radix Sort (LSD & MSD): Sorts keys digit-by-digit from least significant digit (LSD) to most significant using stable subroutine (Counting sort); Time complexity $\\mathcal{O}(d(n + k))$ where $d$ is number of digits; Linear $\\mathcal{O}(n)$ when $k = \\mathcal{O}(n)$.",
      "Bucket Sort: Assumes uniform distribution across interval $[0, 1)$; Partitions input into $n$ equal-sized buckets, sorts buckets individually via insertion sort; Expected running time $\\mathcal{O}(n)$.",
      "Timsort Hybrid Sorting Algorithm: Modern hybrid of Merge sort and Insertion sort; Identifies existing natural runs in input; Employs Galloping mode during merging; Standard default sorting algorithm in Python (`list.sort`) and Java (`Arrays.sort`).",
      "Quickselect Algorithm: Hoare's selection algorithm finding $k$-th smallest element; Partitions around pivot and recurses into single subproblem; Average running time is linear $\\mathcal{O}(n)$; Worst-case $\\mathcal{O}(n^2)$ avoided via Median-of-Medians (BFPRT) algorithm.",
      "Median-of-Medians Deterministic Selection: Divides $n$ elements into groups of 5; Finds median of each group; Recurrence $T(n) \\le T(n/5) + T(7n/10) + \\mathcal{O}(n)$; Guarantees deterministic worst-case linear time $\\mathcal{O}(n)$ selection."
    ],
    "keyPoints": [
      "Comparison Sort Lower Bound: $\\Omega(n \\log n)$ comparisons required in worst case.",
      "Build-Max-Heap Complexity: Runs in strictly linear time $\\mathcal{O}(n)$ (not $\\mathcal{O}(n \\log n)$).",
      "Counting Sort Time: $\\mathcal{O}(n + k)$ where $k$ is the integer key range.",
      "Radix Sort Time: $\\mathcal{O}(d(n + k))$ using stable counting sort on each digit.",
      "Bucket Sort Assumption: Assumes input is generated by a uniform random distribution.",
      "Quickselect Average Time: Linear $\\mathcal{O}(n)$ time for finding order statistics.",
      "Median-of-Medians Recurrence: $T(n) = T(n/5) + T(7n/10) + \\mathcal{O}(n) \\implies \\mathcal{O}(n)$.",
      "Timsort Space Complexity: Requires $\\mathcal{O}(n)$ temporary buffer for merging runs.",
      "Randomized Quicksort Expectation: Expected comparison count is $2 n \\ln n$.",
      "Exam Tip: Counting sort is only efficient when range $k$ is not significantly larger than $n$ (i.e. $k = \\mathcal{O}(n)$)."
    ]
  },
  "bsc-dsa: searching & hashing": {
    "highlights": [
      "Cuckoo Hashing & Constant Worst-Case Lookup: Employs two independent hash functions $h_1(k)$ and $h_2(k)$ with two separate tables; Key inserted into $h_1(k)$; If occupied, displaced key kicked to its alternate position $h_2(k')$; Lookup takes worst-case $\\mathcal{O}(1)$ time.",
      "Robin Hood Hashing: Open addressing collision resolution prioritizing elements based on displacement distance (probe count) from home slot; Rich keys give up slots to poorer keys; Minimizes variance of search times.",
      "Universal Hashing Framework: Family of hash functions $\\mathcal{H}$ such that for any pair of distinct keys $x \ne y$, $P_{h \\in \\mathcal{H}}(h(x) = h(y)) \\le 1/m$; Linear congruential form $h_{a,b}(k) = ((a k + b) \\pmod p) \\pmod m$ guarantees expected search time $\\mathcal{O}(1)$.",
      "Perfect Hashing (Fredman-Komlos-Szemeredi FKS): Two-level hashing scheme for static sets; Level 1 hash table of size $m = n$; Level 2 table of size $s_i = n_i^2$ with zero collisions; Guarantees worst-case $\\mathcal{O}(1)$ lookup in $\\mathcal{O}(n)$ total space.",
      "Bloom Filters (Probabilistic Set Membership): Bit array of size $m$ with $k$ independent hash functions; Insertion sets $k$ hash bits to 1; Query returns 'possibly in set' or 'definitely not in set'; Zero false negatives ($0\\%$ false negative rate).",
      "Bloom Filter False Positive Derivation: Probability of false positive error: $p \u0007pprox \\left(1 - e^{-k n / m}\right)^k$; Optimal number of hash functions minimizing false positives is $k = \frac{m}{n} \\ln 2 \u0007pprox 0.693 \frac{m}{n}$.",
      "Count-Min Sketch (Streaming Frequency Estimation): 2D array of counters with $d$ hash functions; Updates increment counters; Point query computes minimum counter value across $d$ rows, providing biased upper bound with provable $(\\varepsilon, \\delta)$ guarantees.",
      "HyperLogLog for Cardinality Estimation: Probabilistic streaming algorithm estimating number of distinct elements (cardinality) in massive datasets; Observes maximum number of leading zeros in hashed bitstream; Uses $\\mathcal{O}(\\log \\log N)$ space with typical standard error $1.04/\\sqrt{m}$.",
      "Consistent Hashing in Distributed Caching: Distributed hash ring $0$ to $2^{32}-1$; Servers and keys mapped to ring; Key assigned to first clockwise server; Adding or removing server affects only $K/N$ keys on average; Virtual nodes eliminate hotspots.",
      "Locality-Sensitive Hashing (LSH): Hash functions designed so that similar items collide with high probability; Used for nearest-neighbor search, duplicate image detection, and high-dimensional document cosine similarity."
    ],
    "keyPoints": [
      "Cuckoo Lookup: Guaranteed worst-case $\\mathcal{O}(1)$ lookup (inspects at most 2 locations).",
      "Universal Hashing Collision Bound: $P(h(x) = h(y)) \\le 1/m$.",
      "FKS Perfect Hashing Space: Second level uses $s_i = n_i^2$ slots, total expected space is $\\mathcal{O}(n)$.",
      "Bloom Filter Invariant: Zero false negatives (if it says absent, it is definitely absent).",
      "Optimal Bloom Hash Count: $k = (m/n) \\ln 2$.",
      "HyperLogLog Memory Footprint: Requires only $\\mathcal{O}(\\log \\log N)$ memory bits.",
      "Consistent Hashing Benefit: Minimizes key re-distribution during cluster resizing.",
      "Count-Min Sketch Query: Returns $\\min_{1 \\le i \\le d} \\text{count}[i][h_i(x)]$.",
      "Robin Hood Rule: Displace existing key if its probe distance is smaller than current key's probe distance.",
      "Exam Tip: In Bloom filter calculations, always verify that the optimal hash count $k$ is rounded to the nearest integer."
    ]
  },
  "bsc-dsm: arrays & lists": {
    "highlights": [
      "Combinatorial Inversions in Linear Sequences: An inversion is a pair $(i, j)$ such that $i < j$ and $A[i] > A[j]$; Measures permutation disorder; Maximum inversions in sequence of length $n$ is $\\frac{n(n-1)}{2}$ (reverse sorted order).",
      "Counting Inversions via Divide-and-Conquer: Modified merge sort algorithm; When copying element from right subarray, increment inversion counter by remaining elements in left subarray; Computes inversion count in $\\mathcal{O}(n \\log n)$ time.",
      "Matrix Representations of Sparse Systems: Sparse matrix where non-zero entries $k \\ll m \times n$; Coordinate list format (COO: `row`, `col`, `val`); Compressed Sparse Row (CSR) format storing `values`, `column_indices`, and `row_pointers` of length $m+1$.",
      "Circular List Group Isomorphism: Circular list of length $n$ isomorphic to cyclic group $\\mathbb{Z}_n$ under pointer traversal operations; Shift operator acts as generator of the permutation group.",
      "Josephus Permutation Problem: $n$ people arranged in circle, eliminating every $k$-th person; Recurrence relation $J(n, k) = (J(n-1, k) + k) \\pmod n$ with base case $J(1, k) = 0$; Binary Josephus ($k=2$) closed form $J(2^m + l) = 2l + 1$.",
      "Array Rotation & Reversal Algorithm: Rotating array of size $n$ by $d$ positions; Algorithm: Reverse $A[0 \\dots d-1]$, reverse $A[d \\dots n-1]$, and reverse entire array $A[0 \\dots n-1]$; Linear time $\\mathcal{O}(n)$ using $\\mathcal{O}(1)$ space.",
      "Equivalence Relations on Disjoint Sets: Equivalence relation partitioning universe $U$ into disjoint equivalence classes; Modeled via Disjoint Set Union (DSU) forest.",
      "Disjoint Set Union (DSU / Union-Find): Operations `find(x)` and `union(x, y)`; Union by Rank / Size ensures tree height $\\mathcal{O}(\\log n)$; Path Compression flattens trees during lookups; Amortized time per operation $\\mathcal{O}(\\alpha(n))$ where $\\alpha$ is the Inverse Ackermann function.",
      "Ackermann Function & Inverse Ackermann: Ackermann function $A(m, n)$ grows faster than any primitive recursive function; Inverse Ackermann $\\alpha(n) < 5$ for all practical universe sizes ($n < 2^{65536}$), acting as practical constant time.",
      "Mathematical Memory Layout Analysis: Dimension mapping functions; Multi-dimensional index bijective projection $f: \\prod_{i=1}^d [0, N_i - 1] \\to [0, \\prod N_i - 1]$ ensuring zero collision across multi-index lattices."
    ],
    "keyPoints": [
      "Max Inversion Count: $\\frac{n(n-1)}{2}$ in reverse sorted permutation.",
      "Inversion Merge Sort Time: Computes total inversions in $\\mathcal{O}(n \\log n)$ time.",
      "CSR Row Pointer Length: Array length is exactly $m + 1$ for matrix with $m$ rows.",
      "Josephus Binary Closed Form: For $n = 2^m + l$, survivor position is $2l + 1$ (1-indexed).",
      "Array Rotation via 3 Reversals: $\\mathcal{O}(n)$ time and $\\mathcal{O}(1)$ auxiliary space.",
      "Union by Rank Max Height: Tree height bounded by $\\lfloor \\log_2 n \\rfloor$.",
      "DSU Path Compression: Sets `parent[x] = find(parent[x])` during recursive unwind.",
      "Inverse Ackermann Bound: $\\alpha(n) \\le 4$ for all computable input sizes.",
      "Cyclic List Structure: Isomorphic to quotient ring $\\mathbb{Z}/n\\mathbb{Z}$.",
      "Exam Tip: In Josephus recurrence $J(n) = (J(n-1) + k) \\pmod n$, remember the formula is 0-indexed; add 1 if the problem asks for 1-indexed position."
    ]
  },
  "bsc-dsm: stacks & queues": {
    "highlights": [
      "Combinatorics of Stack Permutations: Permutations reachable via stack push and pop operations; A permutation is stack-sortable iff it contains no 231-pattern (Knuth's Stack Sortability Theorem).",
      "Catalan Number Formulation: Number of valid stack permutation sequences of length $2n$ ($n$ pushes, $n$ pops) equals the $n$-th Catalan number: $C_n = \\frac{1}{n+1} \\binom{2n}{n} = \\frac{(2n)!}{(n+1)! n!}$.",
      "Catalan Recurrence Relation: Fundamental convolution recurrence: $C_{n+1} = \\sum_{i=0}^n C_i C_{n-i}$ with initial condition $C_0 = 1$; Generates sequence $1, 1, 2, 5, 14, 42, 132, 429, \\dots$.",
      "Dyck Paths & Balanced Parentheses: Dyck path of length $2n$ from $(0, 0)$ to $(2n, 0)$ moving up $(1, 1)$ or down $(1, -1)$ without crossing below $x$-axis; Bijection to balanced strings of $n$ pairs of parentheses.",
      "Queueing Theory Fundamentals: Mathematical analysis of waiting lines; Kendall's notation $A/S/c/K$ where $A$ is arrival process, $S$ is service distribution, $c$ is number of servers, $K$ is system capacity.",
      "$M/M/1$ Queue Mathematical Model: Poisson arrival rate $\\lambda$, exponential service rate $\\mu$; Traffic intensity $\\rho = \\lambda / \\mu < 1$ for system stability; Steady-state probability distribution $P_n = (1 - \\rho) \\rho^n$.",
      "Little's Law in Queueing Systems: Fundamental queueing invariance theorem: $L = \\lambda W$ where $L$ is average number of items in system, $\\lambda$ is arrival rate, and $W$ is average waiting time; Holds universally regardless of arrival distribution.",
      "Mean Performance Metrics in $M/M/1$: Expected number in system $L = \\frac{\\rho}{1 - \\rho} = \\frac{\\lambda}{\\mu - \\lambda}$; Average time in system $W = \\frac{1}{\\mu - \\lambda}$; Mean queue length $L_q = \\frac{\\rho^2}{1 - \\rho}$.",
      "Priority Queue Mathematical Model: Discrete priority classes; Non-preemptive priority queueing analysis; Conservation law of waiting times $\\sum \\rho_i W_{q,i} = \\text{constant}$.",
      "Double-Ended Queue Graph Isomorphism: Deque operations isomorphic to symmetric random walks along 1D finite lattices with reflecting boundary conditions."
    ],
    "keyPoints": [
      "Catalan Number Formula: $C_n = \\frac{1}{n+1} \\binom{2n}{n}$.",
      "Catalan Recurrence: $C_{n+1} = \\sum_{i=0}^n C_i C_{n-i}$.",
      "Stack Permutation Condition: A permutation is stack-sortable iff it contains no 231-pattern.",
      "Little's Law Identity: $L = \\lambda W$.",
      "$M/M/1$ Stability Requirement: Traffic intensity $\\rho = \\lambda / \\mu < 1$.",
      "$M/M/1$ State Probability: $P_n = (1 - \\rho) \\rho^n$.",
      "Mean System Count: $L = \\frac{\\lambda}{\\mu - \\lambda}$.",
      "Mean Waiting Time: $W = \\frac{1}{\\mu - \\lambda}$.",
      "Dyck Path Total Count: Number of non-negative paths of length $2n$ is $C_n$.",
      "Exam Tip: In Catalan number problems, recognize isomorphic problems: balanced parentheses, triangulation of convex polygons, full binary trees, and mountain ranges."
    ]
  },
  "bsc-dsm: trees": {
    "highlights": [
      "Graph-Theoretic Definition of Trees: A tree is a connected undirected graph containing no cycles; Equivalent properties for graph $G = (V, E)$ with $|V| = n$: (1) $G$ is connected and has $n-1$ edges; (2) $G$ is acyclic and has $n-1$ edges; (3) Unique simple path between every pair of vertices.",
      "Cayley's Tree Enumeration Formula: Total number of distinct labeled trees on $n$ vertices is $n^{n-2}$; Proved bijectively via Pr\u00fcfer sequences of length $n-2$.",
      "Pr\u00fcfer Sequence Encoding & Decoding: Bijective algorithm converting labeled tree to sequence of $n-2$ integers from $[1, n]$; Repeatedly deletes leaf with smallest label and writes parent's label; Decoded iteratively in $\\mathcal{O}(n \\log n)$ time.",
      "Binary Tree Enumeration via Catalan Numbers: Number of structurally distinct unlabeled binary trees with $n$ nodes is $C_n = \\frac{1}{n+1} \\binom{2n}{n}$; Number of labeled binary trees is $n! \\cdot C_n$.",
      "Kraft-McMillan Inequality for Prefix Trees: For any prefix code with codeword lengths $l_1, l_2, \\dots, l_n$ over $D$-ary alphabet: $\\sum_{i=1}^n D^{-l_i} \\le 1$; Guarantees existence of uniquely decodable prefix tree.",
      "Huffman Coding & Shannon's Source Coding Theorem: Huffman code constructs tree with minimal external path length $\\sum p_i l_i$; Average length satisfies $H(X) \\le L_{avg} < H(X) + 1$ where $H(X) = -\\sum p_i \\log_2 p_i$ is Shannon entropy.",
      "Path Length Theorems in Binary Trees: Internal path length $I$ (sum of depths of internal nodes) and External path length $E$ (sum of depths of leaves); In any full binary tree with $n$ internal nodes: $E = I + 2n$.",
      "Tree Center and Diameter: Eccentricity $\\epsilon(v) = \\max_{u} d(v, u)$; Center is vertex minimizing eccentricity; Every tree has either 1 center or 2 adjacent centers; Diameter is length of longest path.",
      "Spanning Trees & Matrix Tree Theorem (Kirchhoff): Laplacian matrix $L = D - A$; Number of spanning trees of graph $G$ equals any cofactor of $L$: $\\tau(G) = \\det(L_{i, i})$.",
      "Tree Automorphisms & Isomorphism Testing: Canonical tree representations via AHU (Aho-Hopcroft-Ullman) algorithm; Assigns canonical integer tuples level-by-level, testing tree isomorphism in deterministic linear time $\\mathcal{O}(n)$."
    ],
    "keyPoints": [
      "Tree Edge-Vertex Identity: $|E| = |V| - 1$ for every connected tree.",
      "Cayley's Formula: $n^{n-2}$ labeled trees on $n$ vertices.",
      "Pr\u00fcfer Sequence Length: Exactly $n - 2$ integers for tree with $n$ vertices.",
      "Kraft-McMillan Bound: $\\sum D^{-l_i} \\le 1$ for prefix codes.",
      "Path Length Theorem: $E = I + 2n$ for full binary tree with $n$ internal nodes.",
      "Unlabeled Binary Tree Count: $C_n = \\frac{1}{n+1} \\binom{2n}{n}$.",
      "Kirchhoff Matrix-Tree: Spanning trees count $\\tau(G) = \\text{cofactor}(L)$.",
      "Tree Center Count: A tree has either exactly 1 center or 2 adjacent centers.",
      "Shannon Entropy Bound: $H(X) \\le L_{Huffman} < H(X) + 1$.",
      "Exam Tip: To compute the Pr\u00fcfer code, always locate the leaf with the SMALLEST numeric label, record its neighbor, remove that leaf, and repeat."
    ]
  },
  "bsc-dsm: sorting": {
    "highlights": [
      "Information Theoretic Sorting Bounds: Minimum comparisons to sort $n$ items modeled as tree with $n!$ leaves; Height $h \\ge \\lceil \\log_2(n!) \rceil$; Stirling's approximation $\\ln(n!) \u0007pprox n \\ln n - n + \\mathcal{O}(\\ln n) \\implies \\log_2(n!) = n \\log_2 n - 1.4426 n + \\mathcal{O}(\\log n)$.",
      "Sorting Networks & Comparator Models: Data-independent sorting networks built from two-item comparator wires $(i, j)$ computing $(\\min(x_i, x_j), \\max(x_i, x_j))$; Parallel time equals network depth.",
      "Zero-One Principle for Sorting Networks: If a sorting network sorts all $2^n$ possible input sequences of 0s and 1s correctly, it correctly sorts any arbitrary input sequence of real numbers.",
      "Batcher's Bitonic Sorter Network: Bitonic sequence (first increases, then decreases); Bitonic merge network merges bitonic sequence in $\\mathcal{O}(\\log n)$ parallel depth; Complete Bitonic Sort network has depth $\\mathcal{O}(\\log^2 n)$ and $\\mathcal{O}(n \\log^2 n)$ comparators.",
      "Batcher's Odd-Even Mergesort Network: Recursive network merging two sorted sequences by separately merging odd-indexed and even-indexed elements; Depth $\\mathcal{O}(\\log^2 n)$; Perfectly suited for hardware GPU implementation.",
      "Poset Sorting & Partially Ordered Sets: Sorting elements under partial order relation $\\le$; Topological sorting of Directed Acyclic Graph (DAG) via Kahn's indegree algorithm or depth-first search in linear time $\\mathcal{O}(V + E)$.",
      "Linear Extensions of Posets: A linear extension is a total order compatible with partial order; Counting linear extensions is #P-complete; Algorithms generate linear extensions using backtracking generation.",
      "Entropy-Optimal Sorting: If input has known prior distribution with entropy $H$, minimum expected comparisons is $\\Omega(H)$; Information-theoretic optimality of adaptive sorting algorithms.",
      "Inversion Table & Permutation Recovery: Inversion vector $I = (d_1, d_2, \\dots, d_n)$ where $d_j$ is count of elements to the left of $j$ greater than $j$; Bijective correspondence between permutations and inversion tables.",
      "Permutation Parity & Transposition Count: Parity of permutation $\\text{sgn}(\\pi) = (-1)^k$ where $k$ is number of transpositions; Bubble sort executes parity-preserving adjacent swaps; Number of swaps equals total inversions."
    ],
    "keyPoints": [
      "Stirling Lower Bound: $\\log_2(n!) = n \\log_2 n - n \\log_2 e + \\mathcal{O}(\\log n) \\approx n \\log_2 n - 1.44 n$.",
      "Zero-One Principle: Network sorting all $\\{0, 1\\}^n$ sequences sorts all real sequences.",
      "Bitonic Sorter Depth: Parallel depth is $\\frac{\\log_2 n (\\log_2 n + 1)}{2} = \\mathcal{O}(\\log^2 n)$.",
      "Topological Sort Time: Linear $\\mathcal{O}(V + E)$ on Directed Acyclic Graphs.",
      "Permutation Sign Formula: $\\text{sgn}(\\pi) = (-1)^{\\text{inversions}(\\pi)}$.",
      "Odd-Even Mergesort Depth: Parallel time $\\mathcal{O}(\\log^2 n)$.",
      "Comparator Unit: Takes inputs $(a, b)$, outputs $(\\min(a, b), \\max(a, b))$.",
      "Inversion Table Property: Each $d_k$ satisfies $0 \\le d_k \\le n - k$.",
      "Stable Sort Inversion Decrement: Every adjacent swap reduces total inversion count by exactly 1.",
      "Exam Tip: In the Zero-One Principle, remember that there are $2^n$ binary input combinations to consider for an $n$-wire sorting network."
    ]
  },
  "bsc-dsm: searching": {
    "highlights": [
      "Information Theoretic Search Bounds: Searching for an item among $n$ sorted elements requires decision tree with at least $n+1$ outcomes (including element absent); Minimum comparisons in worst case is $\\lceil \\log_2(n+1) \rceil$.",
      "Binary Search Trees & Optima (OBST): Optimal Binary Search Tree minimizing expected search cost $\\sum p_i (1 + \\text{depth}(k_i)) + \\sum q_i \\text{depth}(d_i)$; Solved via dynamic programming in $\\mathcal{O}(n^3)$ time (Knuth's optimization reduces to $\\mathcal{O}(n^2)$).",
      "Knuth's Monotonicity Optimization: In OBST dynamic programming recurrence $e[i, j] = \\min_{i \\le r \\le j} \\{e[i, r-1] + e[r+1, j] + w(i, j)\\}$, root index satisfies $R[i, j-1] \\le R[i, j] \\le R[i+1, j]$, reducing candidate root evaluations.",
      "Fibonacci Search Technique: Comparison search algorithm dividing search space using Fibonacci numbers $F_k = F_{k-1} + F_{k-2}$; Operates strictly using addition and subtraction without costly division or multiplication; Ideal for hardware architectures lacking integer division.",
      "Birthday Paradox Analysis in Hashing: Probability of at least one collision among $k$ items hashed into $m$ slots: $P(\text{collision}) = 1 - \\prod_{i=1}^{k-1} \\left(1 - \frac{i}{m}\right) \u0007pprox 1 - e^{-k^2 / (2m)}$; Collision probability reaches $50\\%$ when $k \u0007pprox 1.177 \\sqrt{m}$.",
      "Poisson Approximation to Occupancy: Number of empty slots, singleton slots, and collisions modeled as Poisson processes in the asymptotic limit $n, m \to \\infty$ with fixed ratio $\u0007lpha = n/m$; Expected empty slots $m e^{-\u0007lpha}$.",
      "Uniform Hashing Collision Expectations: Under Simple Uniform Hashing Assumption (SUHA), expected length of collision chain in separate chaining is exactly load factor $\u0007lpha = n/m$; Expected comparisons in unsuccessful search is $1 + \u0007lpha$.",
      "Open Addressing Mean Probe Lengths: Under uniform hashing: Unsuccessful search expected probes $\frac{1}{1 - \u0007lpha}$; Successful search expected probes $\frac{1}{\u0007lpha} \\ln\frac{1}{1 - \u0007lpha}$; Proves performance collapses as $\u0007lpha \to 1$.",
      "Random Walk Models of Probing: Modeling secondary clustering and linear probing chains as one-dimensional Markov chains with absorbing states.",
      "Saddlepoint Approximations in Search Trees: Analytical combinatorics deriving asymptotic distributions of tree depth, leaf count, and search path variances using generating functions $f(z) = \\sum a_n z^n$."
    ],
    "keyPoints": [
      "Search Lower Bound: $\\lceil \\log_2(n+1) \rceil$ comparisons required in worst case.",
      "Birthday Paradox Collision Threshold: $k \u0007pprox \\sqrt{2 m \\ln 2} \u0007pprox 1.177 \\sqrt{m}$ for $50\\%$ collision chance.",
      "Expected Empty Slots: $m e^{-n/m} = m e^{-\u0007lpha}$.",
      "Knuth OBST Speedup: Reduces DP complexity from $\\mathcal{O}(n^3)$ to $\\mathcal{O}(n^2)$.",
      "Unsuccessful Search in Open Addressing: Expected probes $= \frac{1}{1 - \u0007lpha}$.",
      "Successful Search in Open Addressing: Expected probes $= \frac{1}{\u0007lpha} \\ln\frac{1}{1 - \u0007lpha}$.",
      "Fibonacci Search Operations: Uses only addition and subtraction operations.",
      "SUHA Search Cost: Unsuccessful search takes $1 + \u0007lpha$ expected operations.",
      "Markov Probing Absorption: Transition matrix computes absorption time into empty slot.",
      "Exam Tip: In birthday paradox questions, remember collision threshold scales with $\\sqrt{m}$ (e.g. for $m = 365$, $k \u0007pprox 23$ people yields $>50\\%$ collision chance)."
    ]
  },
  "bsc-sdb: sampling": {
    "highlights": [
      "Population vs Sample Concepts: Finite vs infinite populations; Parameter (fixed population quantity $\\mu, \\sigma^2$) vs Statistic (sample function $\\bar{X}, S^2$); Sampling frame and sampling bias.",
      "Simple Random Sampling (SRS): SRS with replacement (SRSWR) vs without replacement (SRSWOR); Total possible samples $\\binom{N}{n}$; Probability of selecting any specific unit is $n/N$.",
      "Sample Mean Unbiasedness: In SRSWOR, sample mean is an unbiased estimator of population mean: $E[\\bar{x}] = \\mu$; Sample variance of mean: $\\text{Var}(\\bar{x}) = \\frac{\\sigma^2}{n} \\left(\\frac{N - n}{N - 1}\\right)$.",
      "Finite Population Correction (FPC): Correction factor $FPC = \\frac{N - n}{N - 1}$; Negligible when sampling fraction $n/N < 0.05$; Standard error $\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}} \\sqrt{\\frac{N - n}{N - 1}}$.",
      "Stratified Random Sampling: Homogeneous strata partition; Reduces within-stratum variance $\\sigma_i^2$; Proportional allocation $n_i = n \\frac{N_i}{N}$; Neyman optimal allocation $n_i = n \\frac{N_i \\sigma_i}{\\sum N_j \\sigma_j}$.",
      "Systematic Sampling: Selection of every $k$-th unit following random start $r \\in [1, k]$ where $k = N/n$; Efficient execution; Vulnerable to periodic hidden cyclic variations.",
      "Cluster & Multi-Stage Sampling: Heterogeneous clusters sampled as primary units; Cost-effective when traveling to geographically dispersed elements; Intra-class correlation coefficient $\\rho$.",
      "Sampling Distribution of Mean & Variance: Sampling distribution of $\\bar{X}$ approaches normal $\\mathcal{N}(\\mu, \\sigma^2/n)$ by Central Limit Theorem; Distribution of $\\frac{(n-1) S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$.",
      "Standard Error (SE) Formulation: Precision metric: $SE(\\bar{x}) = \\sigma/\\sqrt{n}$; Measures standard deviation of sampling distribution of a statistic; Halving standard error requires quadrupling sample size ($4n$).",
      "Non-Sampling Errors & Survey Protocols: Response bias, non-response attrition, questionnaire framing bias; Mitigated through pilot surveys and post-stratification weighting adjustments."
    ],
    "keyPoints": [
      "SRSWOR Variance of Mean: $\\text{Var}(\\bar{x}) = \\frac{\\sigma^2}{n} \\frac{N - n}{N - 1}$.",
      "Finite Population Multiplier: $\\sqrt{\\frac{N - n}{N - 1}}$.",
      "Neyman Allocation Formula: $n_i \\propto N_i \\sigma_i$.",
      "Standard Error of Mean: $SE = \\frac{\\sigma}{\\sqrt{n}}$.",
      "Proportional Allocation: $n_i = n \\frac{N_i}{N}$.",
      "Chi-Square Sample Variance: $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$.",
      "Quadrupling Rule: To reduce standard error by $50\\%$, sample size must increase by factor of 4.",
      "Systematic Interval: $k = N/n$.",
      "Parameter vs Statistic: Parameters describe populations; statistics describe samples.",
      "Exam Tip: In Neyman allocation, allocate larger sample sizes to strata with larger size $N_i$ AND higher variability $\\sigma_i$."
    ]
  },
  "bsc-sdb: estimation": {
    "highlights": [
      "Statistical Estimation Foundations: Unknown population parameter $\\theta \\in \\Theta$; Point estimator $\\hat{\\theta} = T(X_1, \\dots, X_n)$ yields single estimate; Interval estimator provides bounded range $[L, U]$.",
      "Unbiasedness Criterion: Estimator $T_n$ is unbiased for $\\theta$ if $E[T_n] = \\theta$ for all $\\theta$; Bias defined as $\\text{Bias}(T) = E[T] - \\theta$; Sample mean $\\bar{X}$ is unbiased for $\\mu$; Sample variance $S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2$ is unbiased for $\\sigma^2$.",
      "Consistency Criterion: Estimator converges in probability to true parameter: $\\lim_{n \\to \\infty} P(|T_n - \\theta| < \\varepsilon) = 1$; Sufficient condition: $\\lim E[T_n] = \\theta$ and $\\lim \\text{Var}(T_n) = 0$.",
      "Efficiency & Mean Squared Error (MSE): $\\text{MSE}(T) = E[(T - \\theta)^2] = \\text{Var}(T) + [\\text{Bias}(T)]^2$; Relative efficiency of $T_1$ versus $T_2$ is $\\text{Var}(T_2)/\\text{Var}(T_1)$.",
      "Cramer-Rao Lower Bound (CRLB): Minimal variance bound for any unbiased estimator: $\\text{Var}(\\hat{\\theta}) \\ge \\frac{1}{I(\\theta)}$ where Fisher Information is $I(\\theta) = E\\left[\\left(\\frac{\\partial \\ln f(X; \\theta)}{\\partial \\theta}\\right)^2\\right]$; Uniformly Minimum Variance Unbiased Estimator (UMVUE).",
      "Sufficiency & Factorization Theorem: $T(X)$ captures all sample information regarding $\\theta$; Fisher-Neyman Factorization Criterion: Likelihood factors as $L(x; \\theta) = g(T(x); \\theta) \\cdot h(x)$.",
      "Maximum Likelihood Estimation (MLE): Maximizes log-likelihood function: $\\frac{\\partial \\ln L(\\theta)}{\\partial \\theta} = 0$; Invariance property: MLE of $g(\\theta)$ is $g(\\hat{\\theta}_{MLE})$; Asymptotically normal, consistent, and efficient.",
      "Method of Moments Estimation (MME): Equates population theoretical moments $\\mu_k'(\\theta)$ to sample moments $m_k' = \\frac{1}{n}\\sum X_i^k$; Solves resulting algebraic system for parameters.",
      "Confidence Intervals (CI): Interval $[L, U]$ capturing $\\theta$ with confidence level $1 - \\alpha$; For normal mean with known $\\sigma$: $\\bar{x} \\pm Z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$; With unknown $\\sigma$: $\\bar{x} \\pm t_{\\alpha/2, n-1} \\frac{S}{\\sqrt{n}}$.",
      "Confidence Interval for Variance: $(1 - \\alpha)$ confidence interval for $\\sigma^2$ derived from Chi-Square distribution: $\\left[\\frac{(n-1)S^2}{\\chi^2_{\\alpha/2, n-1}}, \\; \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2, n-1}}\\right]$."
    ],
    "keyPoints": [
      "Unbiased Condition: $E[\\hat{\\theta}] = \\theta$.",
      "MSE Decomposition: $\\text{MSE}(\\hat{\\theta}) = \\text{Var}(\\hat{\\theta}) + \\text{Bias}^2$.",
      "Fisher Information: $I(\\theta) = -E\\left[\\frac{\\partial^2 \\ln f}{\\partial \\theta^2}\\right]$.",
      "Cramer-Rao Lower Bound: $\\text{Var}(\\hat{\\theta}) \\ge 1/[n I(\\theta)]$.",
      "Factorization Criterion: $L(x; \\theta) = g(T(x), \\theta) \\cdot h(x)$ confirms sufficiency.",
      "MLE Invariance: $\\hat{g(\\theta)} = g(\\hat{\\theta})$.",
      "Z-Confidence Interval: $\\bar{x} \\pm 1.96 \\frac{\\sigma}{\\sqrt{n}}$ for $95\\%$ confidence.",
      "t-Confidence Interval: $\\bar{x} \\pm t_{\\alpha/2, n-1} \\frac{s}{\\sqrt{n}}$ when variance unknown.",
      "Sample Variance Denominator: Divided by $n-1$ (Bessel's correction) to ensure unbiasedness.",
      "Exam Tip: In MLE derivation, always verify that the second derivative $\\frac{\\partial^2 \\ln L}{\\partial \\theta^2} < 0$ at the critical point to confirm maximum."
    ]
  },
  "bsc-sdb: hypothesis testing": {
    "highlights": [
      "Hypothesis Testing Framework: Statistical decision making; Null hypothesis $H_0$ (status quo / no effect) vs Alternative hypothesis $H_1$ (research claim); Simple vs composite hypotheses; One-tailed vs two-tailed tests.",
      "Decision Errors & Power of Test: Type I error ($\u0007lpha$): Rejecting $H_0$ when $H_0$ is true (significance level); Type II error ($\beta$): Failing to reject $H_0$ when $H_0$ is false; Power of test: $1 - \beta = P(\text{Reject } H_0 | H_1 \text{ true})$.",
      "Neyman-Pearson Lemma: For testing simple $H_0: \theta = \theta_0$ versus simple $H_1: \theta = \theta_1$, the most powerful critical region is defined by likelihood ratio test: $\\Lambda(x) = \frac{L(x; \theta_0)}{L(x; \theta_1)} \\le k$.",
      "Large-Sample Tests ($Z$-Tests): Sample size $n \\ge 30$; Test for single mean: $Z = \frac{\\bar{X} - \\mu_0}{\\sigma/\\sqrt{n}}$; Test for difference of means: $Z = \frac{\\bar{X}_1 - \\bar{X}_2}{\\sqrt{\\sigma_1^2/n_1 + \\sigma_2^2/n_2}}$; Two-tailed critical values: $Z = \\pm 1.96$ at $\u0007lpha = 0.05$.",
      "Small-Sample $t$-Tests (Student's $t$): Normal population with unknown $\\sigma$; Single mean: $t = \frac{\\bar{X} - \\mu_0}{S/\\sqrt{n}}$ with $n-1$ degrees of freedom; Independent two-sample pooled $t$-test: $t = \frac{\\bar{X}_1 - \\bar{X}_2}{S_p \\sqrt{1/n_1 + 1/n_2}}$ with degrees of freedom $n_1 + n_2 - 2$.",
      "Paired $t$-Test for Dependent Samples: Pre-treatment vs post-treatment on identical subjects; Difference variable $d_i = x_{1i} - x_{2i}$; Test statistic: $t = \frac{\\bar{d} - 0}{s_d / \\sqrt{n}}$ with $n-1$ degrees of freedom.",
      "Snedecor's $F$-Test for Equality of Variances: Test $H_0: \\sigma_1^2 = \\sigma_2^2$; Test statistic: $F = \frac{S_1^2}{S_2^2} \\sim F_{(n_1-1, n_2-1)}$ where $S_1^2 > S_2^2$; Basis for Analysis of Variance (ANOVA).",
      "Chi-Square ($\\chi^2$) Goodness-of-Fit Test: Tests conformity of observed frequencies $O_i$ to theoretical distribution $E_i$: $\\chi^2 = \\sum_{i=1}^k \frac{(O_i - E_i)^2}{E_i} \\sim \\chi^2_{k - 1 - m}$; Requires expected frequencies $E_i \\ge 5$.",
      "Chi-Square Test of Independence in Contingency Tables: $r \times c$ contingency table; Expected frequency $E_{ij} = \frac{R_i C_j}{N}$; Degrees of freedom $df = (r - 1)(c - 1)$; Tests association between categorical attributes.",
      "$p$-Value Concept & Statistical Interpretation: Smallest significance level at which $H_0$ would be rejected; If $p \\le \u0007lpha$, reject $H_0$; If $p > \u0007lpha$, fail to reject $H_0$; Distinguish statistical significance from practical significance."
    ],
    "keyPoints": [
      "Type I Error ($\u0007lpha$): $P(\text{Reject } H_0 | H_0 \text{ true})$.",
      "Type II Error ($\beta$): $P(\text{Accept } H_0 | H_1 \text{ true})$.",
      "Power of Test: $1 - \beta$.",
      "Large-Sample Z Statistic: $Z = \frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}$.",
      "Student t Statistic: $t = \frac{\\bar{X} - \\mu_0}{s / \\sqrt{n}}$ ($df = n-1$).",
      "Pooled Sample Variance: $S_p^2 = \frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1 + n_2 - 2}$.",
      "Chi-Square Goodness-of-Fit: $\\chi^2 = \\sum \frac{(O - E)^2}{E}$.",
      "Contingency Table DF: $(r - 1)(c - 1)$.",
      "F-Test Ratio: $F = S_1^2 / S_2^2$ ($S_1^2 \\ge S_2^2$).",
      "Exam Tip: In Chi-square tests, if any cell has $E_i < 5$, pool it with an adjacent cell and decrease the degrees of freedom accordingly."
    ]
  },
  "bsc-sdb: correlation": {
    "highlights": [
      "Bivariate Data & Association: Simultaneous measurement of two quantitative variables $(X_i, Y_i)$; Scatter diagram visual inspection: positive, negative, linear, non-linear, or zero correlation.",
      "Covariance Formulation: Measure of joint linear variability: $\\text{Cov}(X, Y) = \\sigma_{xy} = \frac{1}{n}\\sum (X_i - \bar{X})(Y_i - \bar{Y}) = E[X Y] - E[X] E[Y]$; Dependent upon measurement units.",
      "Karl Pearson's Linear Correlation Coefficient ($r$): Normalized scale-free index: $r = \frac{\\text{Cov}(X, Y)}{\\sigma_x \\sigma_y} = \frac{\\sum (X - \bar{X})(Y - \bar{Y})}{\\sqrt{\\sum (X - \bar{X})^2 \\sum (Y - \bar{Y})^2}}$.",
      "Mathematical Properties of Correlation ($r$): Strictly bounded: $-1 \\le r \\le +1$; Cauchy-Schwarz inequality proof: $|\\sum a_i b_i| \\le \\sqrt{\\sum a_i^2} \\sqrt{\\sum b_i^2}$; Invariant under linear shifts and positive scale transformations: $r(aX + b, cY + d) = r(X, Y)$ for $a c > 0$.",
      "Interpretation of Extreme Values: $r = +1$ (perfect positive linear colinearity); $r = -1$ (perfect negative linear colinearity); $r = 0$ (absence of linear association; non-linear dependencies may still exist).",
      "Spearman's Rank Correlation Coefficient ($\rho$): Non-parametric measure of monotonic relationship for ranked data: $\rho = 1 - \frac{6 \\sum d_i^2}{n(n^2 - 1)}$ where $d_i = R_{x,i} - R_{y,i}$; Robust against outliers.",
      "Rank Ties Correction in Spearman: Tied ranks assigned average rank; Correction term $\frac{m(m^2 - 1)}{12}$ added to $\\sum d_i^2$ for each tie of length $m$.",
      "Kendall's Tau ($\tau$) Rank Correlation: Measures concordant and discordant pairs among $\binom{n}{2}$ observations: $\tau = \frac{C - D}{\frac{1}{2} n (n - 1)}$; Bounded between $-1$ and $+1$.",
      "Hypothesis Test for Significance of $r$: Testing $H_0: \rho = 0$; Test statistic: $t = r \\sqrt{\frac{n - 2}{1 - r^2}} \\sim t_{n-2}$; Standard error $SE(r) = \frac{1 - r^2}{\\sqrt{n}}$.",
      "Spurious (Nonsense) Correlation: High numerical correlation driven by a shared confounding third variable (lurking variable) without causal connection (e.g. ice cream sales and drowning incidents)."
    ],
    "keyPoints": [
      "Pearson Correlation Formula: $r = \frac{\\text{Cov}(X, Y)}{\\sigma_x \\sigma_y}$.",
      "Correlation Limits: $-1 \\le r \\le 1$.",
      "Spearman Rank Formula: $\rho = 1 - \frac{6 \\sum d_i^2}{n(n^2 - 1)}$.",
      "Invariance Property: $r$ is unchanged by changes of origin and scale.",
      "Significance Test for r: $t = \frac{r \\sqrt{n-2}}{\\sqrt{1 - r^2}}$ with $n-2$ df.",
      "Zero Correlation Note: $r = 0$ implies no LINEAR relationship (variables may be non-linearly dependent).",
      "Kendall Tau Formula: $\tau = \frac{C - D}{n(n-1)/2}$.",
      "Covariance Product Form: $\\text{Cov}(X, Y) = \frac{1}{n}\\sum X Y - \bar{X} \bar{Y}$.",
      "Coefficient of Determination: $r^2$ represents proportion of variance shared between variables.",
      "Exam Tip: In Spearman's formula, verify that $\\sum d_i = 0$; if the sum of rank differences is non-zero, an error occurred in ranking."
    ]
  },
  "bsc-sdb: regression": {
    "highlights": [
      "Linear Regression Mathematical Concept: Modeling functional dependency of dependent variable $Y$ on independent explanatory variable $X$; Principle of Ordinary Least Squares (OLS) minimizing sum of squared residuals $\\sum e_i^2 = \\sum (Y_i - \\hat{Y}_i)^2$.",
      "Regression Equations of Lines: Line of $Y$ on $X$: $Y - \bar{Y} = b_{yx}(X - \bar{X})$; Line of $X$ on $Y$: $X - \bar{X} = b_{xy}(Y - \bar{Y})$; Both regression lines intersect at the point of sample means $(\bar{X}, \bar{Y})$.",
      "Regression Coefficients ($b_{yx}, b_{xy}$): Slope coefficients: $b_{yx} = r \frac{\\sigma_y}{\\sigma_x} = \frac{\\sum (X - \bar{X})(Y - \bar{Y})}{\\sum (X - \bar{X})^2}$; $b_{xy} = r \frac{\\sigma_x}{\\sigma_y} = \frac{\\sum (X - \bar{X})(Y - \bar{Y})}{\\sum (Y - \bar{Y})^2}$.",
      "Properties of Regression Coefficients: (1) Geometric mean: $r = \\pm \\sqrt{b_{yx} \\cdot b_{xy}}$; (2) Identical signs: $b_{yx}, b_{xy}$, and $r$ must share the exact same sign; (3) If one coefficient exceeds unity ($|b_{yx}| > 1$), the other must be less than unity ($|b_{xy}| < 1$); (4) Arithmetic mean $\frac{b_{yx} + b_{xy}}{2} \\ge r$.",
      "Angle Between Regression Lines: Acute angle $\theta$ between regression lines: $\tan\theta = \\left|\frac{1 - r^2}{r}\right| \\left(\frac{\\sigma_x \\sigma_y}{\\sigma_x^2 + \\sigma_y^2}\right)$; If $r = \\pm 1$, $\tan\theta = 0 \\implies \theta = 0$ (coincident lines); If $r = 0$, $\tan\theta = \\infty \\implies \theta = 90^\\circ$ (perpendicular lines).",
      "Standard Error of Estimate: Residual variance metric: $S_{y.x} = \\sigma_y \\sqrt{1 - r^2}$; Quantifies dispersion of actual $Y$ values around predicted regression line $\\hat{Y}$.",
      "Decomposition of Sum of Squares (ANOVA in Regression): Total Sum of Squares $SST = \\sum (Y_i - \bar{Y})^2 = SSR + SSE$; Regression Sum of Squares $SSR = \\sum (\\hat{Y}_i - \bar{Y})^2$; Error Sum of Squares $SSE = \\sum (Y_i - \\hat{Y}_i)^2$.",
      "Coefficient of Determination ($R^2$): $R^2 = \frac{SSR}{SST} = r^2$; Represents fraction of variance in dependent variable explained by linear regression model; Adjusted $R^2$ penalizes addition of non-informative regressors.",
      "Multiple Linear Regression Overview: Model $Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \\dots + \beta_k X_k + \u000barepsilon$; Vector matrix OLS solution: $\\hat{\beta} = (X^T X)^{-1} X^T Y$; Gauss-Markov Theorem: OLS estimator is Best Linear Unbiased Estimator (BLUE).",
      "Residual Diagnostics & Assumptions: OLS assumptions: linearity, zero error mean $E[\u000barepsilon] = 0$, homoscedasticity (constant error variance $\text{Var}(\u000barepsilon) = \\sigma^2$), no autocorrelation $\text{Cov}(\u000barepsilon_i, \u000barepsilon_j) = 0$, and normal distribution of residuals."
    ],
    "keyPoints": [
      "Regression Line Y on X: $Y - \bar{Y} = b_{yx}(X - \bar{X})$.",
      "Slope Formula: $b_{yx} = r \frac{\\sigma_y}{\\sigma_x} = \frac{\\text{Cov}(X, Y)}{\\sigma_x^2}$.",
      "Geometric Mean Property: $r = \\pm \\sqrt{b_{yx} \\cdot b_{xy}}$.",
      "Point of Intersection: Regression lines always intersect at $(\bar{X}, \bar{Y})$.",
      "Same Sign Rule: $b_{yx}, b_{xy}$, and $r$ always possess the identical sign.",
      "Orthogonal Condition: If $r = 0$, lines are perpendicular ($\theta = 90^\\circ$).",
      "Coincident Condition: If $r = \\pm 1$, lines coincide ($\theta = 0^\\circ$).",
      "Standard Error of Estimate: $S_{y.x} = \\sigma_y \\sqrt{1 - r^2}$.",
      "Coefficient of Determination: $R^2 = r^2 = \frac{SSR}{SST}$.",
      "Exam Tip: If calculations yield $b_{yx} = 1.6$ and $b_{xy} = 0.8$, then $b_{yx} b_{xy} = 1.28 > 1$, which makes $r > 1$ (impossible!); check for arithmetic mistakes immediately."
    ]
  },
  "bsc-dslab: safety & instrumentation": {
    "highlights": [
      "Computer Laboratory Environmental Safety: Electrical safety standards, surge protection protocols, static electricity discharge (ESD) wristbands ($< 10^6\\,\\Omega$), uninterruptible power supply (UPS) systems.",
      "GNU C Compiler Toolchain (`gcc`): Compiler flags and optimization levels: `gcc -Wall -Wextra -pedantic -std=c11 -g -O2 main.c -o app`; `-Wall` enables standard warnings; `-g` generates DWARF debug symbol tables.",
      "Dynamic Memory Profiling with Valgrind: Memory leak detection via `valgrind --leak-check=full --track-origins=yes ./app`; Detects heap blocks not freed at exit, uninitialized value reads, and invalid pointer writes.",
      "GNU Debugger (`gdb`) Instrumentation: Terminal debugging commands: `break` (set breakpoint), `run` (launch program), `next` (step over line), `step` (step into function), `print` (inspect variable), `backtrace` (view call stack frames).",
      "Address Space Layout Randomization (ASLR) & Memory Protection: Virtual memory segmentation: text segment (code), data segment (initialized globals), BSS segment (uninitialized globals), heap (dynamically allocated, grows upward), stack (local scope, grows downward).",
      "Static Code Analysis Tools: Static verification using `cppcheck` and `clang-tidy`; Detects potential null-pointer dereferences, memory allocation mismatches, and boundary array overruns prior to compilation.",
      "Standard C Diagnostic Assertion Framework: Header `<assert.h>`; Macro `assert(condition)` aborts program execution with filename and line number if invariant fails; Suppressed in release builds via `#define NDEBUG`.",
      "Input Sanitization & Buffer Overflow Prevention: Replacing vulnerable functions (`gets`, `scanf(\"%s\")`) with memory-bounded alternatives (`fgets(buf, sizeof(buf), stdin)`, `snprintf`); Protecting against stack smashing.",
      "Code Formatting & Style Standards: Automated code formatting via `.clang-format`; Indentation rules, pointer alignment `int *ptr`, descriptive variable naming, and function header documentation.",
      "Version Control with Git in Practical Labs: Local repository setup: `git init`, `git add`, `git commit -m \"message\"`; Branching workflows, diff tracking, and clean laboratory submission repository hygiene."
    ],
    "keyPoints": [
      "GCC Debug Flag: `-g` embeds symbol tables required for GDB source line mapping.",
      "Valgrind Command: `valgrind --leak-check=full ./program` checks all heap blocks.",
      "GDB Backtrace: Command `bt` prints the complete call stack on segmentation faults.",
      "Virtual Memory Layout: Stack grows downward; Heap grows upward toward each other.",
      "Assert Macro: `#include <assert.h>`; aborts if condition evaluates to false.",
      "Safe String Input: `fgets(buf, sizeof(buf), stdin)` prevents buffer overrun.",
      "BSS Segment Role: Stores uninitialized global and static variables, zero-filled at launch.",
      "GCC Warning Flags: `-Wall -Wextra` flags suspicious syntax and implicit casts.",
      "Dangling Pointer Fix: Setting `ptr = NULL` post `free()` prevents use-after-free faults.",
      "Exam Tip: In lab viva, explain that `-Wall` does not fix errors automatically; it turns on compiler warnings for potential runtime bugs."
    ]
  },
  "bsc-dslab: standard preparations": {
    "highlights": [
      "Header File Architecture & Modular C Design: Separation of interface (`list.h`) and implementation (`list.c`); Include guards `#ifndef LIST_H #define LIST_H ... #endif` preventing circular redeclaration errors.",
      "Abstract Data Type (ADT) Encapsulation: Opaque pointer idiom in C: declaring incomplete struct `typedef struct Stack_t* Stack;` in header, hiding internal array/pointer fields within `.c` file to preserve strict encapsulation.",
      "Makefile Build Automation: Rule syntax: `target: dependencies <TAB> command`; Macro variables `CC=gcc`, `CFLAGS=-Wall -g`; Target automation: clean target `rm -f *.o app` for clean rebuilds.",
      "Benchmarking Time Measurement API: Header `<time.h>`; High-precision CPU timing via `clock_t start = clock(); ... clock_t end = clock(); double cpu_time = (double)(end - start) / CLOCKS_PER_SEC;`.",
      "Wall-Clock Time Measurement (`gettimeofday`): Header `<sys/time.h>`; Struct `timeval` recording seconds and microseconds for measuring wall-clock duration of concurrent or file I/O operations.",
      "Test Data Synthesis & Randomization: Generating uniform random sequences with `rand()` and `srand(time(NULL))`; Creating pre-sorted, reverse-sorted, and partially sorted integer benchmark arrays.",
      "File I/O for Large Datasets: Binary file stream access via `fopen`, `fread`, `fwrite`, and `fclose`; Benchmarking algorithm performance on $10^5$ to $10^6$ integer datasets stored on disk.",
      "Command-Line Argument Parsing: Function signature `int main(int argc, char *argv[])`; Converting string inputs via `atoi` and `strtol` with error validation to configure benchmark test sizes dynamically.",
      "Standard Macro Definitions & Utility Headers: Implementing macro definitions for `SWAP(a, b, type)`, `MIN(a, b)`, `MAX(a, b)`; Checking macro hygiene with outer and inner parentheses.",
      "Memory Allocation Wrappers: Writing safe memory helper functions `void *safe_malloc(size_t size)` that check for `NULL` return and terminate with diagnostic message to prevent unchecked null pointer faults."
    ],
    "keyPoints": [
      "Include Guard Syntax: `#ifndef FILENAME_H`, `#define FILENAME_H`, `#endif`.",
      "Makefile Rule Format: Target line followed by a TAB-indented recipe command.",
      "CPU Clock Timing: `(double)(end - start) / CLOCKS_PER_SEC` yields seconds.",
      "PRNG Seeding: `srand((unsigned)time(NULL))` initializes random sequence generator.",
      "Safe Malloc Pattern: Terminate with `perror()` immediately if `malloc` returns `NULL`.",
      "Opaque Struct Benefit: Prevents external client code from directly mutating internal struct attributes.",
      "Wall-Clock vs CPU Time: `clock()` tracks CPU cycles used; `gettimeofday()` tracks elapsed wall time.",
      "Binary I/O Speed: `fread()` and `fwrite()` are significantly faster than textual `fscanf()`/`fprintf()`.",
      "Command-Line Indexing: `argv[0]` holds executable name; `argv[1]` is first argument.",
      "Exam Tip: In Makefile writing, using spaces instead of a hard TAB character before the command triggers a syntax error."
    ]
  },
  "bsc-dslab: experimental procedures": {
    "highlights": [
      "Lab 1: Dynamic Array & Matrix Operations: Implementing dynamically allocated resizable array in C; Matrix addition and multiplication using double pointers `int **matrix`; Verifying row-major indexing formulas.",
      "Lab 2: Singly & Doubly Linked List Operations: Writing complete CRUD procedures: `insert_head`, `insert_tail`, `insert_after`, `delete_key`, `reverse_list`; Testing pointer updates using diagrams.",
      "Lab 3: Stack ADT & Shunting-Yard Parser: Implementing fixed array and linked list stack; Writing full infix-to-postfix conversion program; Evaluating postfix expression with integer operands and arithmetic operators.",
      "Lab 4: Circular Queue & Priority Queue: Coding circular queue with modulo indexing; Handling queue full and empty edge conditions; Implementing array-based priority queue ordered by numeric priority keys.",
      "Lab 5: Binary Search Tree (BST) Construction: Implementing recursive `insert`, `search`, and `delete` functions; Writing recursive and iterative inorder, preorder, and postorder traversals.",
      "Lab 6: Quicksort & Mergesort Comparative Study: Implementing Hoare partition Quicksort and standard Merge sort; Counting comparison and swap operations across random, sorted, and reverse-sorted arrays.",
      "Lab 7: Heap Sort & Max-Heap Implementation: Implementing `build_max_heap` and `heapify` procedures in 1D array; Demonstrating in-place extraction to sort an array of $n$ random integers.",
      "Lab 8: Hash Table with Separate Chaining: Writing hash function using division method; Creating linked list buckets for collision resolution; Implementing `insert_key`, `search_key`, and `delete_key`.",
      "Lab 9: Hash Table with Open Addressing: Implementing linear probing and double hashing collision schemes; Handling tombstone `DELETED` markers to preserve search continuity across subsequent deletions.",
      "Lab 10: Graph Traversals (BFS & DFS): Representing directed and undirected graphs via adjacency matrix and adjacency list; Implementing Breadth-First Search using queue and Depth-First Search using recursion."
    ],
    "keyPoints": [
      "List Reversal Pointer Step: Three pointers required: `prev = NULL`, `curr = head`, `next = NULL`.",
      "BST Inorder Successor Step: Locate smallest element in right subtree: `curr = node->right; while(curr->left) curr = curr->left;`.",
      "Quicksort Swap Step: Swaps out-of-order elements across pivot boundary.",
      "Merge Sort Merge Buffer: Allocates temporary array of size $R - L + 1$ to merge sorted halves.",
      "Queue Modulo Advance: `rear = (rear + 1) % capacity`.",
      "DFS Recursive Step: Mark vertex as visited, then iterate through all unvisited adjacent neighbors.",
      "BFS Queue Step: Enqueue start vertex and mark visited; dequeue vertex and enqueue all unvisited neighbors.",
      "Heapify Index Math: Left child index $= 2i + 1$, Right child $= 2i + 2$ (0-indexed).",
      "Hash Tombstone Marker: Marks deleted slot as available for insertions while preserving search traversal.",
      "Exam Tip: In linked list reversal, always draw the three-pointer pointer-swapping diagram (`next = curr->next; curr->next = prev; prev = curr; curr = next;`) step-by-step."
    ]
  },
  "bsc-dslab: data verification": {
    "highlights": [
      "Empirical Time Complexity Verification: Measuring execution time $T(n)$ for varying input sizes $n \\in [10^3, 10^6]$; Comparing observed time growth against theoretical asymptotic curves $\\mathcal{O}(n), \\mathcal{O}(n \\log n), \\mathcal{O}(n^2)$.",
      "Linear Regression Log-Log Analysis: Model $\\ln T(n) = c + k \\ln n$; Slope $k$ represents empirical growth exponent (e.g. $k \u0007pprox 1$ confirms linear time, $k \u0007pprox 2$ confirms quadratic time).",
      "Comparison & Operation Counter Tracking: Instrumenting sorting routines with comparison counter `comp_count++` and movement counter `swap_count++`; Verifying that Selection sort comparison count matches theoretical $\frac{n(n-1)}{2}$.",
      "Best, Average, and Worst-Case Input Stress Testing: Benchmarking Quicksort on: (1) Random permutation (average-case $\\mathcal{O}(n \\log n)$); (2) Sorted array (worst-case $\\mathcal{O}(n^2)$ for deterministic first-element pivot); (3) All-equal element array.",
      "Sorting Correctness Verification: Writing validation assertion function `bool is_sorted(int arr[], int n)` that confirms $A[i] \\le A[i+1]$ for all $0 \\le i < n-1$; Automated test harnesses validating output integrity.",
      "BST Invariant Integrity Checker: Writing recursive function `bool is_bst(Node *root, int min_val, int max_val)` validating that every node satisfies the strict inequality range $(min\\_val, max\\_val)$.",
      "Memory Leak Zero-Tolerance Audit: Running test suites under Valgrind; Ensuring output reports: `definitely lost: 0 bytes in 0 blocks`, `indirectly lost: 0 bytes`, `ERROR SUMMARY: 0 errors from 0 contexts`.",
      "Stack Overflow Guarding in Recursion: Determining recursion depth limit; Replacing deep recursion with explicit heap-allocated stack when $n > 10^5$ to prevent operating system stack overflow crash (segmentation fault).",
      "Hash Table Distribution Uniformity Audit: Calculating load factor $\u0007lpha = n/m$; Computing Chi-square goodness-of-fit test on bucket lengths: $\\chi^2 = \frac{m}{n}\\sum (n_i - n/m)^2$ to verify hash function uniformity.",
      "Statistical Confidence Intervals for Run Times: Repeating each benchmark $k = 10$ times; Discarding highest and lowest outliers; Reporting sample mean run time $\bar{x}$ and standard deviation $s$ with $95\\%$ confidence error bars."
    ],
    "keyPoints": [
      "Log-Log Slope Meaning: Slope of $\\log T$ vs $\\log n$ yields empirical algorithmic complexity degree.",
      "Selection Sort Invariant: Exactly $\frac{n(n-1)}{2}$ comparisons performed on any input of size $n$.",
      "Is-Sorted Validation: Single pass in $\\mathcal{O}(n)$ verifying $A[i] \\le A[i+1]$.",
      "BST Range Invariant: Root must satisfy $min < \text{key} < max$; children inherit updated bounds.",
      "Valgrind Success Standard: Zero bytes definitely lost; zero error contexts.",
      "Outlier Mitigation: Execute minimum 5 to 10 trials per input size to filter OS context-switching noise.",
      "Hash Bucket Chi-Square: Tests whether hash function distributes keys uniformly across slots.",
      "Quicksort Adversary Input: Pre-sorted array triggers worst-case $\\mathcal{O}(n^2)$ when first element is pivot.",
      "Recursion Stack Limit: Default Linux stack is 8 MB; unbounded recursion crashes with SIGSEGV.",
      "Exam Tip: In lab record tables, show input size $N$, theoretical operation count, observed time in milliseconds, and calculated ratio $T(n)/f(n)$."
    ]
  },
  "bsc-dslab: record & viva": {
    "highlights": [
      "Comprehensive Laboratory Manual Documentation: Professional report structure: Aim, Algorithm Theory, Flowchart, C Source Code, Input Test Cases, Formatted Output Tables, Complexity Analysis, Conclusions.",
      "Viva Voce Core Question: Array vs Linked List: Arrays have contiguous allocation and $\\mathcal{O}(1)$ random access, but fixed size and expensive $\\mathcal{O}(n)$ insertion; Linked lists have dynamic sizing and $\\mathcal{O}(1)$ insertion, but $\\mathcal{O}(n)$ sequential access and pointer overhead.",
      "Viva Voce Core Question: Stack vs Queue: Stack operates under Last-In First-Out (LIFO); Queue operates under First-In First-Out (FIFO); Real-world applications of each.",
      "Viva Voce Core Question: Quicksort vs Merge Sort: Quicksort is in-place and faster in practice ($\\mathcal{O}(1)$ auxiliary space), but worst-case $\\mathcal{O}(n^2)$; Merge sort is stable and guarantees $\\mathcal{O}(n \\log n)$ in all cases, but requires $\\mathcal{O}(n)$ extra memory.",
      "Viva Voce Core Question: BST vs Hash Table: BST maintains elements in sorted order supporting range queries ($\\mathcal{O}(\\log n)$); Hash table provides faster average search ($\\mathcal{O}(1)$), but does not maintain order and suffers from worst-case collisions.",
      "Viva Voce Core Question: Linear Probing vs Double Hashing: Linear probing suffers from primary clustering blocks; Double hashing eliminates primary and secondary clustering by utilizing second hash function as stride step.",
      "Viva Voce Core Question: Recursion Call Stack Mechanics: Explaining activation record pushed onto system stack (return address, parameters, local frame); Base case prevents infinite recursion stack overflow.",
      "Viva Voce Core Question: Time Complexity of Build-Heap: Explaining why `BuildMaxHeap` runs in $\\mathcal{O}(n)$ time rather than $\\mathcal{O}(n \\log n)$ using series summation $\\sum_{h=0}^{\\infty} \\frac{h}{2^h} = 2$.",
      "Viva Voce Core Question: Memory Management (`malloc` vs `calloc`): `malloc` allocates raw uninitialized bytes; `calloc` clears and zeros memory; `free` releases heap segment back to runtime memory allocator.",
      "Lab Examination Marking Rubric: Evaluation components: Written algorithm and logic ($20\\%$), Syntax-free compilable C code ($30\\%$), Execution and test case validation ($20\\%$), Lab record notebook ($10\\%$), Oral viva voce performance ($20\\%$)."
    ],
    "keyPoints": [
      "Array vs List Trade-Off: Contiguous $\\mathcal{O}(1)$ access vs dynamic $\\mathcal{O}(1)$ splicing.",
      "Stack vs Queue: LIFO (Stack) vs FIFO (Queue).",
      "Quicksort vs Merge Sort: In-place but conditional worst-case vs guaranteed $\\mathcal{O}(n \\log n)$ but $\\mathcal{O}(n)$ memory.",
      "BST Sorted Order: Inorder traversal visits keys in ascending order.",
      "Hash Average Time: $\\mathcal{O}(1)$ average lookup under Simple Uniform Hashing Assumption.",
      "Build-Heap Linearity: Summation of heights series yields $\\mathcal{O}(n)$ time bound.",
      "Stack Overflow Cause: Exceeding call stack memory due to missing base case in recursion.",
      "Calloc Cleared Memory: Initializes all allocated memory bytes to zero.",
      "Valgrind Clean Exit: Necessary proof that all dynamically allocated memory blocks were freed.",
      "Exam Tip: In oral viva, always open by stating the time complexity (Best, Average, Worst) and auxiliary space complexity before detailing the algorithm logic."
    ]
  },
  "bsc-dsalab: safety & instrumentation": {
    "highlights": [
      "Data Science & AI Laboratory Protocols: Computational hygiene, virtual environments (`venv`, `conda`), environment reproducibility (`requirements.txt`), GPU resource monitoring (`nvidia-smi`), cluster queue etiquette.",
      "Python Performance Profiling Suite (`cProfile`): Profiling function execution time and call counts via `python -m cProfile -s tottime script.py`; Identifies computational bottlenecks in algorithmic code.",
      "Micro-Benchmarking with `timeit`: Measuring sub-millisecond execution times: `timeit.timeit(stmt, setup, number=1000)`; Disables garbage collection during runs to yield consistent timing measurements.",
      "Memory Profiling (`memory_profiler`): Tracking per-line heap allocation via `@profile` decorator; Identifies memory leaks, unbounded object retention, and inefficient data copy operations in scientific pipelines.",
      "Automated Unit Testing with `pytest`: Writing unit test suites; Asserting algorithmic invariants (`assert sorted_arr == sorted(arr)`); Parametrized testing across edge cases: empty lists, singletons, reverse sorted, large arrays.",
      "Benchmarking Visualization via Matplotlib & Seaborn: Plotting empirical run times vs theoretical asymptotic curves; Using logarithmic axis scales (`plt.xscale('log')`, `plt.yscale('log')`) to reveal power-law growth exponents.",
      "Algorithmic Complexity Curve Fitting (`scipy.optimize`): Fitting empirical timing pairs $(n_i, t_i)$ to theoretical models $f(n) = c \\cdot n \\log_2 n$ using non-linear least squares (`curve_fit`); Computing $R^2$ goodness-of-fit.",
      "Reproducibility & Seed Setting: Enforcing deterministic pseudo-random benchmarks via `numpy.random.seed(42)` and `random.seed(42)`; Ensures peer verification of empirical benchmarking results.",
      "Vectorized vs Iterative Benchmarking: Profiling pure Python nested loops vs optimized NumPy C-backend vectorization; Quantifying 10x to 100x performance acceleration from SIMD instruction utilization.",
      "Interactive Notebook Best Practices: Jupyter notebook workflow: resetting runtime kernels, avoiding hidden global state variables, organizing reproducible pipelines from raw benchmark generation to plotted charts."
    ],
    "keyPoints": [
      "cProfile Usage: `python -m cProfile -s cumulative main.py` identifies slowest functions.",
      "Timeit Utility: Runs micro-benchmarks across thousands of iterations to eliminate clock noise.",
      "Memory Profiler Decorator: `@profile` displays line-by-line RAM consumption.",
      "Pytest Invariant: Automated test assertions fail visibly on edge case violations.",
      "Log-Log Plot Utility: Turns polynomial power curves $y = c n^k$ into straight lines with slope $k$.",
      "SciPy Curve Fit: `curve_fit(model_func, n_data, t_data)` computes empirical constants.",
      "Random Seed Setting: Guarantees reproducible random arrays across experimental trials.",
      "Vectorization Speedup: Replaces interpreted bytecode loops with native contiguous C buffers.",
      "Nvidia-SMI Monitoring: Tracks GPU compute utilization, memory allocation, and thermal limits.",
      "Exam Tip: In lab viva, explain that micro-benchmarking single iterations is noisy; you must average multiple runs using `timeit` for reliable data."
    ]
  },
  "bsc-dsalab: standard preparations": {
    "highlights": [
      "Data Generator Pipeline Architecture: Writing modular test data synthesis modules; Generating synthetic input distributions: uniform integer distributions, Gaussian distributions, Zipfian power-law distributions.",
      "Adversarial Input Case Preparation: Crafting adversarial input cases to stress-test algorithms: Median-of-3 Quicksort killer sequences, hash collision attacks generating identical bucket hash codes.",
      "Graph Dataset Generation: Generating synthetic graphs using NetworkX: Erdos-Renyi random graphs $G(n, p)$, Barabasi-Albert scale-free networks, complete graphs $K_n$, bipartite graphs, and sparse planar road maps.",
      "Benchmarking Harness Class: Creating Python benchmark harness tracking execution time, peak memory, and comparison operations across parameterized input lists $N = [10^2, 10^3, 10^4, 10^5]$.",
      "Data Structure Serialization: Exporting and importing large benchmark structures using `pickle`, JSON, and HDF5 binary storage for persistent reproducible test benches.",
      "Standard Algorithmic Interfaces: Designing abstract base classes (`abc.ABC`) defining unified method contracts (`insert`, `delete`, `search`) to benchmark disparate data structure implementations transparently.",
      "Garbage Collection Control: Temporarily disabling automatic generational garbage collection (`gc.disable()`) during performance measurement loops to prevent GC latency spikes from biasing benchmark timings.",
      "Warm-Up Iterations: Executing unrecorded preliminary warm-up passes to populate CPU instruction caches, TLB caches, and JIT caches prior to recording timing measurements.",
      "Statistical Metric Aggregation: Computing median, mean, interquartile range (IQR), and standard error of timing trials; Using median rather than mean to provide robust metrics resistant to OS background interrupts.",
      "Automated Markdown / LaTeX Table Generation: Formatting experimental results directly into publication-ready Markdown tables and LaTeX `tabular` source code for laboratory report documentation."
    ],
    "keyPoints": [
      "Zipfian Input Distribution: Models real-world non-uniform skewed query frequency patterns.",
      "Adversarial Inputs Purpose: Exposes worst-case algorithmic complexity in non-randomized implementations.",
      "NetworkX Random Graph: `nx.erdos_renyi_graph(n, p)` generates random graph with edge probability $p$.",
      "GC Disable Pattern: Call `gc.disable()` before benchmark and `gc.enable()` immediately after.",
      "Warm-Up Phase Need: Populates hardware L1/L2 caches and memory pages to prevent initial cold-start spikes.",
      "Median Runtime Benefit: Robust against CPU background task context-switching outliers.",
      "JSON vs Pickle: JSON is human-readable and secure; Pickle serializes arbitrary complex Python objects.",
      "Abstract Base Class: `from abc import ABC, abstractmethod` enforces standardized class interfaces.",
      "Benchmarking Input Array Sizes: Geometric progression (e.g. $1000, 2000, 4000, 8000$) provides even spacing on log plots.",
      "Exam Tip: In empirical benchmarks, explain why warm-up iterations are mandatory to eliminate operating system file caching and page fault artifacts."
    ]
  },
  "bsc-dsalab: experimental procedures": {
    "highlights": [
      "Lab 1: Empirical Verification of Master Theorem: Implementing divide-and-conquer algorithms representing all three Master Theorem cases; Benchmarking run time scaling against input size $n$.",
      "Lab 2: Dynamic Array Amortization Benchmarking: Instrumenting dynamic array appends; Measuring single-append time spikes at reallocation boundaries vs running average; Plotting potential function $\\Phi(D_i)$.",
      "Lab 3: AVL Tree vs Unbalanced BST Performance: Implementing AVL tree rotations; Comparing search and insertion times against standard BST on pre-sorted sequential inputs; Demonstrating $\\mathcal{O}(\\log n)$ vs $\\mathcal{O}(n)$ degradation.",
      "Lab 4: Sorting Benchmarking Suite: Implementing Randomized Quicksort, Merge Sort, Heap Sort, and Timsort; Plotting runtime vs input size $n$ across random, sorted, and reverse-sorted arrays.",
      "Lab 5: Linear-Time Sorting Implementation: Implementing Counting Sort and Radix Sort; Comparing runtime scaling against comparison-based Quick Sort on integer keys with bounded range $k$.",
      "Lab 6: Bloom Filter False Positive Analysis: Implementing Bloom Filter bit array; Measuring empirical false positive rates across varying filter capacities $m$, item counts $n$, and hash function counts $k$; Comparing with theoretical formula.",
      "Lab 7: Dijkstra vs Bellman-Ford Shortest Paths: Implementing Dijkstra's algorithm with binary heap priority queue vs Bellman-Ford; Benchmarking execution time on graphs with varying edge densities; Detecting negative cycles.",
      "Lab 8: Minimum Spanning Trees (Kruskal vs Prim): Implementing Kruskal's algorithm using Disjoint Set Union with path compression; Implementing Prim's algorithm; Benchmarking performance on sparse vs dense graphs.",
      "Lab 9: Dynamic Programming vs Memoized Recursion: Implementing 0/1 Knapsack and Longest Common Subsequence (LCS); Profiling memory footprint and execution speed of top-down memoization vs bottom-up tabulation.",
      "Lab 10: PageRank Power Iteration Algorithm: Constructing web graph transition matrix; Implementing power iteration to compute dominant eigenvector; Measuring iteration count to reach convergence threshold $\\varepsilon = 10^{-6}$."
    ],
    "keyPoints": [
      "Master Theorem Case 1 Test: Strassen's matrix multiplication $\\mathcal{O}(n^{\\log_2 7}) \\approx \\mathcal{O}(n^{2.81})$.",
      "Dynamic Array Spike Observation: Shows periodic $\\mathcal{O}(n)$ spikes at powers of 2, with flat $\\mathcal{O}(1)$ baseline.",
      "AVL Sorted Test: Proves AVL remains $\\mathcal{O}(\\log n)$ on sorted inputs while standard BST collapses to $\\mathcal{O}(n)$.",
      "Radix Sort Advantage: Outperforms comparison sorts when key bit-width $b \\ll \\log_2 n$.",
      "Bloom Filter Optimal Parameter: Experimental minimum error matches theoretical $k = (m/n) \\ln 2$.",
      "Dijkstra Heap Optimization: Achieves $\\mathcal{O}((V + E) \\log V)$ using min-priority queue.",
      "Bellman-Ford Utility: Detects negative weight cycles when $V$-th relaxation reduces distance.",
      "Kruskal DSU Speed: Nearly linear $\\mathcal{O}(E \\log V)$ using path compression.",
      "DP Tabulation Memory Advantage: Bottom-up DP eliminates call stack overhead and enables space reduction to $\\mathcal{O}(W)$.",
      "Exam Tip: In the Bloom filter experiment, verify that false negatives NEVER occur; even a single false negative indicates a code implementation bug."
    ]
  },
  "bsc-dsalab: data verification": {
    "highlights": [
      "Asymptotic Power-Law Regression Analysis: Fitting empirical run times to power model $T(n) = a \\cdot n^b$; Logarithmic linearization $\\ln T(n) = \\ln a + b \\ln n$; Extracted slope $b$ confirms empirical complexity degree ($b \u0007pprox 1$ for linear, $b \u0007pprox 2$ for quadratic).",
      "Coefficient of Determination ($R^2$) Goodness-of-Fit: Evaluating regression fit quality: $R^2 = 1 - \\frac{\\sum(t_i - \\hat{t}_i)^2}{\\sum(t_i - \\bar{t})^2}$; Values $R^2 > 0.98$ confirm that empirical timings conform tightly to theoretical complexity models.",
      "Residual Plot Analysis: Plotting residuals $e_i = t_i - \\hat{t}_i$ against input size $n$; Uniform random scatter confirms correct model specification; Systematic curvature indicates missing lower-order or logarithmic terms.",
      "Operation Count Ratio Tests: Calculating normalized ratio $R(n) = \\frac{\\text{Observed Operations}}{f(n)}$; As $n \to \\infty$, ratio converging to non-zero constant $c$ provides mathematical verification of $f(n)$ bound.",
      "Cache Hierarchy Footprint Thresholds: Identifying performance inflection points where dataset size exceeds CPU cache tiers: L1 cache ($32\\text{ KB}$), L2 cache ($512\\text{ KB}$), L3 cache ($16\\text{ MB}$); Explaining timing slope increases due to RAM latency.",
      "Automated Test Coverage Verification: Running `pytest --cov` to measure code line and branch coverage; Requiring $100\\%$ branch coverage across data structure methods before conducting performance benchmarks.",
      "Profiling Memory Allocations & Peak RSS: Measuring peak Resident Set Size (RSS) using `resource.getrusage(resource.RUSAGE_SELF).ru_maxrss`; Verifying that dynamic programming auxiliary space adheres to theoretical memory bounds.",
      "Cross-Language Benchmark Comparisons: Comparing Python implementation performance against compiled C++ implementations across identical input datasets; Quantifying interpreter overhead vs compiler optimization.",
      "Bloom Filter Empirical Error vs Theory Validation: Conducting two-sample Kolmogorov-Smirnov test comparing observed false positive rate distribution against theoretical binomial error probability.",
      "Statistical Significance of Performance Claims: Conducting paired Student's $t$-test ($p < 0.01$) to determine whether a newly optimized algorithm is statistically significantly faster than baseline implementations."
    ],
    "keyPoints": [
      "Power-Law Linearization: $\\ln T = \\ln a + b \\ln n$; slope $b$ indicates polynomial power.",
      "R-Squared Acceptance: $R^2 > 0.95$ validates model conformance.",
      "Residual Scatter Sign: Random scatter around zero validates model; curved residuals reveal incorrect model.",
      "Normalized Ratio Test: $\\lim_{n \to \\infty} T(n)/f(n) = c$ confirms tight asymptotic bound $\\Theta(f(n))$.",
      "Cache Miss Inflection: Run time per element spikes when dataset exceeds L3 cache capacity.",
      "Peak RSS Measurement: Tracks maximum physical RAM consumed during benchmark run.",
      "Test Coverage Standard: High branch coverage ensures edge cases are tested before timing.",
      "Cross-Language Factor: Compiled C++ typically runs 20x to 100x faster than interpreted pure Python.",
      "Paired T-Test in Benchmarks: Confirms algorithm speedups are statistically significant and not noise.",
      "Exam Tip: In presentation graphs, always plot both empirical measurement points AND the theoretical fitted line on the same axes."
    ]
  },
  "bsc-dsalab: record & viva": {
    "highlights": [
      "Professional Data Science Report Architecture: Documentation sections: Problem Statement, Theoretical Asymptotics, Experimental Setup, Benchmark Charts, Tabular Empirical Data, Curve Fitting Equations, Conclusions.",
      "Viva Voce Core Question: Amortized Analysis Methods: Aggregate method (averaging total cost over sequence), Accounting method (assigning credits to cheap operations to pay for expensive ones), Potential method (tracking state energy function $\\Phi$).",
      "Viva Voce Core Question: AVL Tree vs Red-Black Tree: AVL trees are more strictly balanced ($h \u0007pprox 1.44 \\log_2 n$), making them faster for lookup-intensive workloads; Red-Black trees are more loosely balanced ($h \\le 2 \\log_2 n$), requiring fewer rotations and running faster for insertion/deletion-heavy workloads.",
      "Viva Voce Core Question: Why Quicksort Outperforms Merge Sort in Practice: Quicksort exhibits superior spatial cache locality and operates in-place without dynamic memory allocation overhead; Merge sort requires $\\mathcal{O}(n)$ auxiliary array copies.",
      "Viva Voce Core Question: Bloom Filter Guarantees: Explaining why false positives are possible (unrelated keys can accidentally set all $k$ hash bits) but false negatives are impossible (if key was inserted, its $k$ bits were definitely set to 1).",
      "Viva Voce Core Question: Dijkstra vs Bellman-Ford: Dijkstra uses greedy exploration with priority queue in $\\mathcal{O}((V + E) \\log V)$, requiring non-negative weights; Bellman-Ford uses dynamic programming in $\\mathcal{O}(V E)$, handling negative weights and detecting negative cycles.",
      "Viva Voce Core Question: Dynamic Programming (Memoization vs Tabulation): Top-down memoization solves subproblems on-demand via recursion + cache; Bottom-up tabulation iteratively builds table, saving recursion stack space and enabling memory compression.",
      "Viva Voce Core Question: Caching & Cache-Oblivious Algorithms: Algorithms optimized to perform efficiently across all levels of memory hierarchy without knowing specific hardware cache line sizes $B$ or cache capacities $M$.",
      "Viva Voce Core Question: Master Theorem Limitations: Explaining cases where Master Theorem cannot be applied: non-polynomial difference between $f(n)$ and $n^{\\log_b a}$ (e.g. $T(n) = 2 T(n/2) + n \\log n$), non-constant $a$ or $b$.",
      "Comprehensive Examination Marking Rubric: Evaluation parameters: Algorithmic correctness ($25\\%$), Empirical benchmarking methodology and code quality ($25\\%$), Data visualization and regression analysis ($20\\%$), Laboratory record documentation ($15\\%$), Oral viva voce mastery ($15\\%$)."
    ],
    "keyPoints": [
      "Amortized Analysis Three Methods: Aggregate method, Accounting method, Potential method.",
      "AVL vs Red-Black Trade-Off: Faster lookups (AVL) vs faster insertions/deletions (Red-Black).",
      "Cache Locality Advantage: Sequential contiguous array access minimizes CPU cache misses.",
      "Bloom Filter Invariant: Zero false negatives guaranteed.",
      "Dijkstra Non-Negative Rule: Greedy choice fails with negative edge weights.",
      "Bellman-Ford Cycle Detection: If edge relaxation succeeds on $V$-th pass, negative cycle exists.",
      "Tabulation Space Optimization: Often allows reducing space from $\\mathcal{O}(n^2)$ to $\\mathcal{O}(n)$.",
      "Master Theorem Failure Case: Cannot solve recurrences where subproblems are not equal division (e.g. $T(n) = T(n-1) + 1$).",
      "Curve Fit R-Squared Interpretation: Measures proportion of runtime variation explained by asymptotic formula.",
      "Exam Tip: In oral viva, always lead with concrete big-O bounds, explain the trade-off axis (time vs space vs implementation complexity), and cite a real-world system application."
    ]
  }
};
