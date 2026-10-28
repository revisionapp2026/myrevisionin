import json, os

data = {}

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    data[f"{sub}:::{num}"] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 1. NUMERICAL METHODS (B.Tech)
# =========================================================================
add("Numerical Methods", 1, "Error Analysis", [
    "Numbers and Floating-Point Representation: Normalized floating-point representation of real numbers in base $\\beta$ with $t$ digits mantissa: $x = \\pm (.d_1 d_2 \\dots d_t)_\\beta \\times \\beta^e$ where $d_1 \\ne 0$; IEEE 754 standard for single (32-bit: 1 sign, 8 exponent, 23 fraction) and double precision (64-bit: 1 sign, 11 exponent, 52 fraction); Machine epsilon (unit roundoff) $\\epsilon_{mach} = \\frac{1}{2} \\beta^{1-t}$ representing upper bound on relative rounding error.",
    "Classification of Errors: Inherent/experimental errors in input data; Truncation errors resulting from replacing an infinite mathematical process with a finite approximation (e.g., truncating Taylor series); Round-off errors arising from finite machine precision during arithmetic operations; Total computational error as sum of truncation and round-off errors.",
    "Quantitative Error Measures: Absolute error: $E_a = |x_{true} - x_{approx}|$; Relative error: $E_r = \\frac{|x_{true} - x_{approx}|}{|x_{true}|}$ (for $x_{true} \\ne 0$); Percentage error: $E_p = E_r \\times 100\\%$; Significant digits and rule relating relative error to number of correct significant digits $k$: $E_r < \\frac{1}{2} \\times 10^{-k}$.",
    "Error Propagation in Arithmetic Operations: Addition and subtraction error bound: $\\Delta(x \\pm y) \\le \\Delta x + \\Delta y$; Multiplication relative error: $\\frac{\\Delta(xy)}{xy} \\approx \\frac{\\Delta x}{x} + \\frac{\\Delta y}{y}$; Division relative error: $\\frac{\\Delta(x/y)}{x/y} \\approx \\frac{\\Delta x}{x} + \\frac{\\Delta y}{y}$; Loss of significance / catastrophic cancellation when subtracting two nearly equal numbers.",
    "General Error Propagation Formula: For multivariable differentiable function $f(x_1, x_2, \\dots, x_n)$, absolute error bound is $\\Delta f \\approx \\sum_{i=1}^n \\left| \\frac{\\partial f}{\\partial x_i} \\right| \\Delta x_i$; Relative error formula: $\\frac{\\Delta f}{f} \\approx \\sum_{i=1}^n \\left| \\frac{x_i}{f} \\frac{\\partial f}{\\partial x_i} \\right| \\frac{\\Delta x_i}{x_i}$.",
    "Conditioning and Stability: Condition number of a mathematical problem: relative condition number $K = \\left| \\frac{x f'(x)}{f(x)} \\right|$; Well-conditioned problems ($K \\approx 1$) vs ill-conditioned problems ($K \\gg 1$) where small perturbations in inputs produce massive errors in outputs; Numerical stability of an algorithm: resistance to error accumulation across recursive execution steps.",
    "Taylor Series Approximations & Order of Convergence: Taylor theorem with Lagrange remainder: $f(x+h) = \\sum_{k=0}^n \\frac{h^k}{k!} f^{(k)}(x) + R_n(h)$ where $R_n(h) = \\frac{h^{n+1}}{(n+1)!} f^{(n+1)}(\\xi)$; Big-O notation $O(h^p)$ denoting error order; Rate of convergence of numerical sequences: $\\lim_{k\\to\\infty} \\frac{|e_{k+1}|}{|e_k|^p} = C$ where $p$ is order of convergence and $C$ is asymptotic error constant.",
    "Finite Difference Approximations of Derivatives: Forward difference: $f'(x) \\approx \\frac{f(x+h) - f(x)}{h}$ with truncation error $O(h)$; Backward difference: $f'(x) \\approx \\frac{f(x) - f(x-h)}{h}$ with error $O(h)$; Central difference: $f'(x) \\approx \\frac{f(x+h) - f(x-h)}{2h}$ with second-order error $O(h^2)$; Second derivative central difference: $f''(x) \\approx \\frac{f(x+h) - 2f(x) + f(x-h)}{h^2}$ ($O(h^2)$).",
    "Mitigation Strategies for Numerical Errors: Avoiding catastrophic cancellation via algebraic reformulation (e.g., $\\sqrt{x+1} - \\sqrt{x} = \\frac{1}{\\sqrt{x+1} + \\sqrt{x}}$); Pivoting strategies in matrix elimination; Scaling variables to comparable magnitudes; Using higher precision accumulators (Kahan summation algorithm).",
    "University Examination Strategy: Calculate absolute, relative, and percentage errors from truncated series expansions, determine the number of reliable significant figures, apply multivariable error propagation formulas to engineering formulas, and compute condition numbers to evaluate algorithmic stability."
], [
    "Absolute Error Formula: $E_a = |x - \\hat{x}|$.",
    "Relative Error Formula: $E_r = \\frac{|x - \\hat{x}|}{|x|}$.",
    "Significant Digits Condition: $E_r < \\frac{1}{2} \\times 10^{-k}$ guarantees $k$ significant digits.",
    "General Error Propagation: $\\Delta f \\approx \\sum_{i=1}^n \\left| \\frac{\\partial f}{\\partial x_i} \\right| \\Delta x_i$.",
    "Relative Condition Number: $K = \\left| \\frac{x f'(x)}{f(x)} \\right|$.",
    "Taylor Remainder Term: $R_n(h) = \\frac{h^{n+1}}{(n+1)!} f^{(n+1)}(\\xi)$.",
    "Central Difference Derivative: $f'(x) \\approx \\frac{f(x+h) - f(x-h)}{2h} + O(h^2)$.",
    "Second Derivative Central Difference: $f''(x) \\approx \\frac{f(x+h) - 2f(x) + f(x-h)}{h^2} + O(h^2)$.",
    "Machine Epsilon: $\\epsilon_{mach} = \\frac{1}{2} \\beta^{1-t}$.",
    "Exam Gold Tip: Always rewrite difference expressions that subtract nearly equal quantities into rationalized products or series to eliminate catastrophic cancellation."
])

add("Numerical Methods", 2, "Roots of Equations", [
    "Nonlinear Equations and Root Finding Fundamentals: Finding roots of scalar nonlinear equation $f(x) = 0$; Intermediate Value Theorem: if continuous function $f(x)$ satisfies $f(a) f(b) < 0$, at least one real root exists in $(a, b)$; Bracketing methods (guaranteed convergence) vs open methods (faster convergence but sensitive to initial guess).",
    "Bisection Method: Iterative interval halving: midpoint $c = \\frac{a+b}{2}$; If $f(a) f(c) < 0$, root lies in $[a, c]$, set $b = c$; else set $a = c$; Guaranteed linear convergence with rate $p = 1$ and asymptotic factor $C = 0.5$; Error bound after $n$ iterations: $|e_n| \\le \\frac{b-a}{2^n}$; Required iterations for tolerance $\\epsilon$: $n \\ge \\frac{\\ln(b-a) - \\ln(\\epsilon)}{\\ln(2)}$.",
    "Regula-Falsi (False Position) Method: Linear interpolation between endpoints: root approximation $c = \\frac{a f(b) - b f(a)}{f(b) - f(a)}$; Bracketing property retained by checking sign of $f(c)$; Faster than bisection for smooth functions, but one endpoint may remain stagnant; Modified Regula-Falsi (halving function value at stagnant endpoint to accelerate convergence).",
    "Secant Method: Open method replacing derivative with finite difference secant line: $x_{n+1} = x_n - f(x_n) \\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$; Requires two initial estimates without bracketing requirement; Superlinear order of convergence: $p = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$ (the Golden Ratio); Does not require analytic derivative evaluation.",
    "Newton-Raphson Method: Tangent line root approximation: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$; Derived from truncated first-order Taylor series $f(x_n) + f'(x_n)(x - x_n) \\approx 0$; Quadratic order of convergence ($p = 2$): error satisfies $e_{n+1} \\approx \\frac{f''(\\alpha)}{2 f'(\\alpha)} e_n^2$; Failure modes: inflection points ($f''(x) = 0$), local extrema ($f'(x_n) = 0$ division by zero), oscillations and divergence.",
    "Newton-Raphson Convergence Condition: Sufficient condition for convergence in interval $I$: $f(x) f''(x) > 0$ at the initial guess $x_0$, and $f'(x) \\ne 0$ throughout $I$; Generalized Newton-Raphson for roots with multiplicity $m$: $x_{n+1} = x_n - m \\frac{f(x_n)}{f'(x_n)}$ restoring quadratic convergence.",
    "Fixed-Point Iteration Method: Reformulation of $f(x) = 0$ into fixed-point form $x = g(x)$; Iteration sequence $x_{n+1} = g(x_n)$; Banach Fixed-Point Theorem: if $g(x)$ is continuous on $[a, b]$, maps $[a, b] \\to [a, b]$, and $|g'(x)| \\le k < 1$ (Lipschitz contraction), sequence converges uniquely to root $\\alpha$; Order of convergence is linear ($p = 1$) with error ratio $|g'(\\alpha)|$.",
    "Roots of Polynomials & Muller's Method: Muller's method: fits a parabola through three points $(x_0, x_1, x_2)$ using quadratic interpolation to find complex roots; Bairstow's method: extracts quadratic factors $x^2 - u x - v$ from high-degree polynomial $P(x)$ using synthetic division; Graeffe's root squaring method.",
    "System of Nonlinear Equations: Newton-Raphson method for multivariable systems $\\mathbf{F}(\\mathbf{x}) = \\mathbf{0}$: Jacobian matrix $J_{ij} = \\frac{\\partial F_i}{\\partial x_j}$; Linear system solve at each iteration: $J(\\mathbf{x}_k) \\Delta \\mathbf{x}_k = -\\mathbf{F}(\\mathbf{x}_k)$ followed by update $\\mathbf{x}_{k+1} = \\mathbf{x}_k + \\Delta \\mathbf{x}_k$.",
    "University Examination Strategy: Apply Newton-Raphson method to solve transcendental equations to 4 decimal places, derive the quadratic convergence formula $e_{n+1} \\propto e_n^2$, formulate fixed-point iterations $x = g(x)$ verifying $|g'(x)| < 1$, and compute iterations using Regula-Falsi and Secant methods."
], [
    "Bisection Error Bound: $|e_n| \\le \\frac{b-a}{2^n}$.",
    "Bisection Required Iterations: $n \\ge \\frac{\\ln(b-a) - \\ln(\\epsilon)}{\\ln(2)}$.",
    "Regula-Falsi Formula: $c = \\frac{a f(b) - b f(a)}{f(b) - f(a)}$.",
    "Secant Iteration Formula: $x_{n+1} = x_n - f(x_n) \\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$.",
    "Newton-Raphson Formula: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$.",
    "Newton-Raphson Error Relation: $e_{n+1} \\approx \\frac{f''(\\alpha)}{2 f'(\\alpha)} e_n^2$ (quadratic convergence, $p=2$).",
    "Secant Convergence Order: $p = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$.",
    "Fixed-Point Iteration Condition: $|g'(x)| \\le k < 1$ for convergence.",
    "Multiple Root Modified Newton: $x_{n+1} = x_n - m \\frac{f(x_n)}{f'(x_n)}$.",
    "Exam Gold Tip: If Newton-Raphson oscillates or diverges, check whether $f'(x_0) \\approx 0$ or choose an initial guess $x_0$ satisfying the Fourier condition $f(x_0) f''(x_0) > 0$."
])

add("Numerical Methods", 3, "Linear Systems", [
    "Systems of Linear Algebraic Equations: Matrix formulation $A \\mathbf{x} = \\mathbf{b}$ where $A \\in \\mathbb{R}^{n \\times n}$, $\\mathbf{x}, \\mathbf{b} \\in \\mathbb{R}^n$; Existence and uniqueness: $\\det(A) \\ne 0$ or $\\text{rank}(A) = \\text{rank}([A|\\mathbf{b}]) = n$; Direct methods (finite steps, exact in exact arithmetic) vs Iterative methods (asymptotic convergence for large sparse systems).",
    "Gauss Elimination Method: Forward elimination transforming augmented matrix $[A|\\mathbf{b}]$ to upper triangular form $U \\mathbf{x} = \\mathbf{c}$ using elementary row operations; Multipliers $m_{ik} = \\frac{a_{ik}^{(k)}}{a_{kk}^{(k)}}$; Back substitution: $x_i = \\frac{c_i - \\sum_{j=i+1}^n u_{ij} x_j}{u_{ii}}$; Operation count: $\\frac{2}{3} n^3$ flops for elimination, $n^2$ flops for substitution.",
    "Pivoting Strategies: Pitfalls of standard elimination: division by zero or very small pivot $a_{kk}^{(k)}$ producing huge multipliers and severe round-off error; Partial pivoting: search column $k$ for row $p$ with maximum absolute entry $|a_{pk}^{(k)}| = \\max_{k \\le i \\le n} |a_{ik}^{(k)}|$ and swap rows; Complete (full) pivoting: search submatrix for maximum entry and swap both rows and columns.",
    "Gauss-Jordan Elimination & Matrix Inversion: Transforms $[A|I]$ into $[I|A^{-1}]$ via row operations eliminating above and below diagonal; Requires $\\frac{n^3}{2}$ operations for linear solve (higher cost than Gauss elimination with back substitution), but highly efficient for finding explicit inverse $A^{-1}$.",
    "LU Decomposition Methods: Factoring $A = L U$ where $L$ is lower triangular and $U$ is upper triangular; System solution via two triangular systems: forward substitution $L \\mathbf{y} = \\mathbf{b}$ followed by back substitution $U \\mathbf{x} = \\mathbf{y}$; Doolittle's method ($L$ has unit diagonal $l_{ii} = 1$); Crout's method ($U$ has unit diagonal $u_{ii} = 1$); Cholesky decomposition for symmetric positive-definite matrices: $A = L L^T$ with $l_{ii} = \\sqrt{a_{ii} - \\sum_{k=1}^{i-1} l_{ik}^2}$ (halves computational storage and operations).",
    "Matrix Norms & Condition Number: Vector norms ($\\lVert \\mathbf{x} \\rVert_1, \\lVert \\mathbf{x} \\rVert_2, \\lVert \\mathbf{x} \\rVert_\\infty$); Induced matrix norms: $\\lVert A \\rVert_1 = \\max_j \\sum_i |a_{ij}|$ (maximum absolute column sum), $\\lVert A \\rVert_\\infty = \\max_i \\sum_j |a_{ij}|$ (maximum absolute row sum); Matrix condition number: $\\kappa(A) = \\lVert A \\rVert \\cdot \\lVert A^{-1} \\rVert \\ge 1$; Error amplification bound: $\\frac{\\lVert \\Delta \\mathbf{x} \\rVert}{\\lVert \\mathbf{x} \\rVert} \\le \\kappa(A) \\frac{\\lVert \\Delta \\mathbf{b} \\rVert}{\\lVert \\mathbf{b} \\rVert}$.",
    "Jacobi Iterative Method: Splitting $A = D + L + U$ where $D$ is diagonal, $L$ strictly lower, $U$ strictly upper triangular; Jacobi iteration formula: $\\mathbf{x}^{(k+1)} = D^{-1}(\\mathbf{b} - (L + U)\\mathbf{x}^{(k)})$; Component-wise: $x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j \\ne i} a_{ij} x_j^{(k)} \\right)$; Simultaneous displacement: all new values computed using only values from previous iteration.",
    "Gauss-Seidel Iterative Method: Successive displacement using newly computed values immediately: $(D + L) \\mathbf{x}^{(k+1)} = \\mathbf{b} - U \\mathbf{x}^{(k)}$; Component-wise: $x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j < i} a_{ij} x_j^{(k+1)} - \\sum_{j > i} a_{ij} x_j^{(k)} \\right)$; Generally converges twice as fast as Jacobi for diagonally dominant systems.",
    "Convergence Criteria & SOR Method: Strictly diagonally dominant matrix condition: $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i$ guarantees convergence for both Jacobi and Gauss-Seidel; Spectral radius criterion: iteration $\\mathbf{x}^{(k+1)} = B \\mathbf{x}^{(k)} + \\mathbf{c}$ converges if and only if spectral radius $\\rho(B) < 1$; Successive Over-Relaxation (SOR): $x_i^{(k+1)} = (1 - \\omega) x_i^{(k)} + \\omega x_i^{GS}$ with relaxation parameter $1 < \\omega < 2$ accelerating convergence.",
    "University Examination Strategy: Solve $3 \\times 3$ linear systems using Gauss elimination with partial pivoting, execute LU decomposition via Crout and Doolittle algorithms, perform Gauss-Seidel iterations checking diagonal dominance, and compute the condition number $\\kappa(A)$."
], [
    "Gauss Multiplier Formula: $m_{ik} = \\frac{a_{ik}^{(k)}}{a_{kk}^{(k)}}$.",
    "LU System Solution: Solve $L \\mathbf{y} = \\mathbf{b}$ then $U \\mathbf{x} = \\mathbf{y}$.",
    "Cholesky Factorization: $A = L L^T$ for symmetric positive definite $A$.",
    "Matrix Condition Number: $\\kappa(A) = \\lVert A \\rVert \\cdot \\lVert A^{-1} \\rVert$.",
    "Jacobi Iteration Form: $x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j \\ne i} a_{ij} x_j^{(k)} \\right)$.",
    "Gauss-Seidel Form: $x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j < i} a_{ij} x_j^{(k+1)} - \\sum_{j > i} a_{ij} x_j^{(k)} \\right)$.",
    "Strict Diagonal Dominance: $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i$.",
    "Spectral Radius Criterion: $\\rho(B) < 1$ guarantees iterative convergence.",
    "SOR Parameter Range: $1 < \\omega < 2$ for over-relaxation acceleration.",
    "Exam Gold Tip: Rearrange rows before starting Gauss-Seidel or Jacobi to make the coefficient matrix strictly diagonally dominant; otherwise, the iterations may diverge."
])

add("Numerical Methods", 4, "Interpolation & Integration", [
    "Polynomial Interpolation Theory: Given $n+1$ distinct points $(x_0, y_0), (x_1, y_1), \\dots, (x_n, y_n)$, Weierstrass approximation theorem and existence of unique polynomial $P_n(x)$ of degree $\\le n$ such that $P_n(x_i) = y_i$; Interpolation error formula: $E_n(x) = f(x) - P_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} \\prod_{i=0}^n (x - x_i)$ for $\\xi \\in [x_0, x_n]$.",
    "Finite Difference Operators: Forward difference $\\Delta f(x) = f(x+h) - f(x)$; Backward difference $\\nabla f(x) = f(x) - f(x-h)$; Central difference $\\delta f(x) = f(x+h/2) - f(x-h/2)$; Averaging operator $\\mu = \\frac{1}{2}\\left(E^{1/2} + E^{-1/2}\\right)$; Shift operator $E f(x) = f(x+h)$; Operator relationships: $E = 1 + \\Delta = (1 - \\nabla)^{-1} = e^{h D}$ where $D = d/dx$.",
    "Newton's Forward and Backward Interpolation: Newton's Forward Difference formula for equispaced points near beginning of table: $P_n(x) = y_0 + u \\Delta y_0 + \\frac{u(u-1)}{2!} \\Delta^2 y_0 + \\dots + \\frac{u(u-1)\\dots(u-n+1)}{n!} \\Delta^n y_0$ where $u = \\frac{x - x_0}{h}$; Newton's Backward Difference formula for points near end of table: $P_n(x) = y_n + v \\nabla y_n + \\frac{v(v+1)}{2!} \\nabla^2 y_n + \\dots$ where $v = \\frac{x - x_n}{h}$.",
    "Central Difference Interpolation Formulas: Stirling's formula (average of Gauss forward and backward, best for $-0.25 \\le u \\le 0.25$); Bessel's formula (best for $0.25 \\le u \\le 0.75$); Everett's formula using only even differences.",
    "Lagrange's Interpolation Formula: For arbitrarily spaced (unequal) node points: $P_n(x) = \\sum_{i=0}^n y_i L_i(x)$ where cardinal basis polynomials $L_i(x) = \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}$; Properties: $L_i(x_j) = \\delta_{ij}$; High evaluation complexity $O(n^2)$ when adding new points compared to divided differences.",
    "Newton's Divided Difference Formula: Divided differences: $f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$, higher order: $f[x_0, \\dots, x_k] = \\frac{f[x_1, \\dots, x_k] - f[x_0, \\dots, x_{k-1}]}{x_k - x_0}$; Interpolating polynomial: $P_n(x) = f[x_0] + (x-x_0)f[x_0, x_1] + \\dots + (x-x_0)(x-x_1)\\dots(x-x_{n-1}) f[x_0, \\dots, x_n]$; Efficient incremental updates.",
    "Newton-Cotes Numerical Quadrature: Approximation of definite integral $I = \\int_a^b f(x) dx$ by integrating interpolating polynomial; General quadrature formula: $I \\approx \\sum_{i=0}^n w_i f(x_i)$; Closed Newton-Cotes rules (endpoints included) vs open rules.",
    "Trapezoidal and Simpson's Rules: Composite Trapezoidal Rule ($n=1$ per panel): $\\int_a^b f(x) dx \\approx \\frac{h}{2} \\left[ f_0 + 2\\sum_{i=1}^{n-1} f_i + f_n \\right]$ with global error $E_T = -\\frac{(b-a) h^2}{12} f''(\\xi)$; Composite Simpson's 1/3 Rule ($n=2$ per panel, requires even number of intervals): $\\int_a^b f(x) dx \\approx \\frac{h}{3} \\left[ f_0 + 4\\sum_{\\text{odd}} f_i + 2\\sum_{\\text{even}} f_i + f_n \\right]$ with error $E_S = -\\frac{(b-a) h^4}{180} f^{(4)}(\\xi)$ (exact for cubics); Simpson's 3/8 Rule ($n=3$ per panel, multiple of 3 intervals): $\\frac{3h}{8} [f_0 + 3f_1 + 3f_2 + 2f_3 + \\dots + f_n]$.",
    "Gauss Quadrature & Romberg Integration: Romberg integration: applies Richardson extrapolation to trapezoidal estimates with step halving $R_{k,j} = R_{k, j-1} + \\frac{R_{k, j-1} - R_{k-1, j-1}}{4^j - 1}$; Gauss-Legendre Quadrature: optimizes node locations $x_i$ and weights $w_i$ over $[-1, 1]$: $\\int_{-1}^1 f(t) dt \\approx \\sum_{i=1}^n w_i f(t_i)$, exactly integrates polynomials up to degree $2n - 1$; 2-point Gauss formula: $t = \\pm \\frac{1}{\\sqrt{3}}$ with weights $w_1 = w_2 = 1$.",
    "University Examination Strategy: Construct finite difference tables to evaluate forward and backward Newton formulas, perform Lagrange interpolation for unequal intervals, evaluate definite integrals using composite Simpson's 1/3 and 3/8 rules with error bounds, and apply 2-point Gauss quadrature."
], [
    "Newton Forward Formula: $P_n(x) = y_0 + u \\Delta y_0 + \\frac{u(u-1)}{2!} \\Delta^2 y_0 + \\dots$ ($u = \\frac{x-x_0}{h}$).",
    "Newton Backward Formula: $P_n(x) = y_n + v \\nabla y_n + \\frac{v(v+1)}{2!} \\nabla^2 y_n + \\dots$ ($v = \\frac{x-x_n}{h}$).",
    "Lagrange Basis Polynomial: $L_i(x) = \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}$.",
    "Divided Difference Definition: $f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$.",
    "Composite Trapezoidal Rule: $\\int_a^b f(x) dx \\approx \\frac{h}{2} [f_0 + 2\\sum_{i=1}^{n-1} f_i + f_n]$.",
    "Trapezoidal Global Truncation Error: $E_T = -\\frac{(b-a) h^2}{12} f''(\\xi)$.",
    "Composite Simpson's 1/3 Rule: $\\frac{h}{3} [f_0 + 4\\sum_{\\text{odd}} f_i + 2\\sum_{\\text{even}} f_i + f_n]$.",
    "Simpson's 1/3 Truncation Error: $E_S = -\\frac{(b-a) h^4}{180} f^{(4)}(\\xi)$.",
    "Simpson's 3/8 Rule Formula: $\\frac{3h}{8} [f_0 + 3f_1 + 3f_2 + 2f_3 + 3f_4 + \\dots + f_n]$.",
    "Exam Gold Tip: Simpson's 1/3 rule requires an EVEN number of intervals (ODD number of points), whereas Simpson's 3/8 rule requires intervals to be a multiple of 3."
])

add("Numerical Methods", 5, "ODE Solutions", [
    "Initial Value Problems for ODEs: First-order IVP: $\\frac{dy}{dx} = f(x, y)$ subject to initial condition $y(x_0) = y_0$; Picard-Lindelöf theorem: existence and uniqueness under Lipschitz continuity $|f(x, y_1) - f(x, y_2)| \\le L |y_1 - y_2|$; Single-step methods (use only $y_n$ to find $y_{n+1}$) vs Multi-step methods (use multiple historical points $y_n, y_{n-1}, \\dots$).",
    "Taylor Series Method: Expansion about $x_n$: $y_{n+1} = y_n + h y'_n + \\frac{h^2}{2!} y''_n + \\frac{h^3}{3!} y'''_n + \\dots + \\frac{h^p}{p!} y_n^{(p)}$; Higher derivatives evaluated by total differentiation: $y'' = f_x + f_y f$, $y''' = f_{xx} + 2 f_{xy} f + f_{yy} f^2 + f_y(f_x + f_y f)$; High accuracy but analytically cumbersome for complex $f(x, y)$.",
    "Euler's Method: Simplest explicit single-step method: $y_{n+1} = y_n + h f(x_n, y_n)$; Derived from tangent line approximation or truncating Taylor series at first order; Local truncation error is $O(h^2)$, global error is $O(h)$ (first-order method); Numerical stability: for test equation $y' = \\lambda y$ ($\\lambda < 0$), stable only when step size satisfies $|1 + h \\lambda| < 1$, i.e., $h < \\frac{2}{|\\lambda|}$.",
    "Modified Euler's (Heun's) Method: Predictor-corrector concept: Predictor (standard Euler): $y_{n+1}^{(0)} = y_n + h f(x_n, y_n)$; Corrector (trapezoidal average of slopes): $y_{n+1} = y_n + \\frac{h}{2} \\left[ f(x_n, y_n) + f(x_{n+1}, y_{n+1}^{(0)}) \\right]$; Second-order accurate method with local truncation error $O(h^3)$ and global error $O(h^2)$.",
    "Runge-Kutta 2nd Order Methods: General 2-stage RK family: $y_{n+1} = y_n + (w_1 k_1 + w_2 k_2)$ where $k_1 = h f(x_n, y_n)$ and $k_2 = h f(x_n + c_2 h, y_n + a_{21} k_1)$; Matching Taylor series requires $w_1 + w_2 = 1$, $w_2 c_2 = 1/2$, $w_2 a_{21} = 1/2$; Special cases: Heun's method ($w_1 = w_2 = 1/2, c_2 = a_{21} = 1$), Midpoint method ($w_1 = 0, w_2 = 1, c_2 = a_{21} = 1/2$).",
    "Runge-Kutta 4th Order Method (RK4): Industry standard workhorse: $y_{n+1} = y_n + \\frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$ where $k_1 = h f(x_n, y_n)$, $k_2 = h f(x_n + \\frac{h}{2}, y_n + \\frac{k_1}{2})$, $k_3 = h f(x_n + \\frac{h}{2}, y_n + \\frac{k_2}{2})$, $k_4 = h f(x_n + h, y_n + k_3)$; Local truncation error is $O(h^5)$, global error is $O(h^4)$; Requires 4 function evaluations per step without computing analytical derivatives.",
    "Milne-Simpson Predictor-Corrector Method: Multi-step method requiring 4 starting values $(y_0, y_1, y_2, y_3)$ obtained via RK4; Milne's Predictor: $y_{n+1}^{(p)} = y_{n-3} + \\frac{4h}{3} [2 f_{n-2} - f_{n-1} + 2 f_n]$; Simpson's Corrector: $y_{n+1}^{(c)} = y_{n-1} + \\frac{h}{3} [f_{n-1} + 4 f_n + f_{n+1}^{(p)}]$; Both have local truncation error $O(h^5)$; Milne's method exhibits weak numerical instability.",
    "Adams-Bashforth-Moulton Method: Stable multi-step predictor-corrector: Adams-Bashforth 4-step explicit predictor: $y_{n+1}^{(p)} = y_n + \\frac{h}{24} [55 f_n - 59 f_{n-1} + 37 f_{n-2} - 9 f_{n-3}]$; Adams-Moulton 3-step implicit corrector: $y_{n+1}^{(c)} = y_n + \\frac{h}{24} [9 f_{n+1}^{(p)} + 19 f_n - 5 f_{n-1} + f_{n-2}]$; Highly robust and stable for non-stiff systems.",
    "Higher-Order ODEs and Systems of ODEs: Reduction of $n$-th order ODE $y^{(n)} = f(x, y, y', \\dots, y^{(n-1)})$ to a system of $n$ first-order ODEs by defining state variables $u_1 = y, u_2 = y', \\dots, u_n = y^{(n-1)}$; Simultaneous application of RK4 algorithm to vector state system $\\mathbf{u}' = \\mathbf{F}(x, \\mathbf{u})$; Boundary Value Problems (BVPs): Finite difference method converting $y'' = f(x, y, y')$ into tridiagonal linear system, and Shooting Method.",
    "University Examination Strategy: Solve initial value problems using Euler's and Modified Euler's methods across specified step sizes, compute precise numerical solutions using the classical 4th-order Runge-Kutta (RK4) formulas, and execute Milne's and Adams-Bashforth predictor-corrector iterations."
], [
    "Euler's Forward Formula: $y_{n+1} = y_n + h f(x_n, y_n)$.",
    "Modified Euler Predictor-Corrector: $y_{n+1} = y_n + \\frac{h}{2} [f(x_n, y_n) + f(x_{n+1}, y_{n+1}^{(p)})]$.",
    "RK4 Primary Equation: $y_{n+1} = y_n + \\frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.",
    "RK4 Stage Slopes: $k_1 = h f(x_n, y_n)$, $k_2 = h f(x_n + \\frac{h}{2}, y_n + \\frac{k_1}{2})$, $k_3 = h f(x_n + \\frac{h}{2}, y_n + \\frac{k_2}{2})$, $k_4 = h f(x_n + h, y_n + k_3)$.",
    "Milne Predictor: $y_{n+1}^{(p)} = y_{n-3} + \\frac{4h}{3} [2 f_{n-2} - f_{n-1} + 2 f_n]$.",
    "Simpson Corrector: $y_{n+1}^{(c)} = y_{n-1} + \\frac{h}{3} [f_{n-1} + 4 f_n + f_{n+1}^{(p)}]$.",
    "Adams-Bashforth 4-Step Predictor: $y_{n+1}^{(p)} = y_n + \\frac{h}{24} [55 f_n - 59 f_{n-1} + 37 f_{n-2} - 9 f_{n-3}]$.",
    "Adams-Moulton 3-Step Corrector: $y_{n+1}^{(c)} = y_n + \\frac{h}{24} [9 f_{n+1} + 19 f_n - 5 f_{n-1} + f_{n-2}]$.",
    "RK4 Convergence Order: Local error $O(h^5)$, global error $O(h^4)$.",
    "Exam Gold Tip: Always obtain the starting values $y_1, y_2, y_3$ using RK4 before applying Milne's or Adams-Bashforth multi-step predictor-corrector methods."
])

# Save partial
with open('scripts/sem3_btech_math_missing.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)
print("Saved Numerical Methods (5 units). Current count:", len(data))
