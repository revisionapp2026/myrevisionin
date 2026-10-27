import json, os

with open('scripts/sem3_bsc_computing_math_data.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

data = {}
for k, v in raw.items():
    sub, num = k.split(":::")
    data[(sub, int(num))] = v

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    data[(sub, num)] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 5. NUMERICAL METHODS & OPTIMIZATION (B.Sc)
# =========================================================================
add("Numerical Methods & Optimization", 1, "Error Analysis", [
    "Foundational Scope of Numerical Computation: Approximating analytical mathematical operations on discrete computing architectures; Mathematical modeling errors, data truncation, and algorithm stability.",
    "Classification of Computational Errors: Inherent / Data error (experimental measuring uncertainty), Truncation error (replacing infinite mathematical series with finite approximations), and Round-off error (finite binary machine precision).",
    "Quantitative Error Metrics: Absolute error $E_a = |x - x^*|$; Relative error $E_r = \\frac{|x - x^*|}{|x|}$ (for $x \\ne 0$); Percentage error $E_p = E_r \\times 100\\%$; Significant digits: $x^*$ approximates $x$ to $m$ significant figures if $E_r < \\frac{1}{2} \\times 10^{-m+1}$.",
    "Floating-Point Representation (IEEE 754): Representation of real numbers in normalized scientific form: $x = (-1)^s \\times (1.m)_2 \\times 2^{e - \text{bias}}$; Single precision (32-bit: 1 sign, 8 exponent, 23 mantissa) vs Double precision (64-bit: 1 sign, 11 exponent, 52 mantissa); Machine epsilon $\\epsilon_{\\text{mach}}$.",
    "Error Propagation in Arithmetic Operations: Addition / Subtraction: $E_a(x \\pm y) \\le E_a(x) + E_a(y)$; Multiplication / Division: $E_r(x \\cdot y) \\approx E_r(x) + E_r(y)$ and $E_r(x / y) \\approx E_r(x) + E_r(y)$; General function propagation via Taylor expansion: $E_a(f(x)) \\approx |f'(x)| E_a(x)$.",
    "Loss of Significance & Catastrophic Cancellation: Severe cancellation error when subtracting two nearly equal numbers ($x - y$ where $x \\approx y$); Reformulation techniques (algebraic rationalization, trigonometric identities, Taylor expansions) to avoid catastrophic cancellation.",
    "Conditioning & Stability Concepts: Condition number of a problem: Measure of sensitivity of output solution to small perturbations in input data ($K = \\frac{|x \\cdot f'(x)|}{|f(x)|}$); Well-conditioned ($K \\approx 1$) vs Ill-conditioned ($K \\gg 1$); Numerical stability of algorithms.",
    "Taylor Series & Truncation Error Bounds: Expansion $f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(x_0)}{k!} (x - x_0)^k + R_n(x)$; Lagrange remainder form $R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} (x - x_0)^{n+1}$ where $\\xi \\in (x_0, x)$; Order of convergence $O(h^p)$.",
    "Forward & Backward Error Analysis: Forward error: Distance between computed solution and exact solution ($|\\hat{y} - y|$); Backward error (Wilkinson): Size of smallest input perturbation for which computed solution is exact; Stable algorithm produces small backward error.",
    "University Examination Strategy: Calculate absolute, relative, and percentage errors, analyze loss of significance in algebraic expressions with reformulation solutions, and derive error propagation formulas for multi-variable functions."
], [
    "Absolute Error Formula: $E_a = |x - x^*|$, where $x$ is exact value and $x^*$ is approximation.",
    "Relative Error Formula: $E_r = \\frac{|x - x^*|}{|x|}$, providing a dimensionless scale-independent metric.",
    "Significant Figures Criterion: If $E_r \\le \\frac{1}{2} \\times 10^{-m}$, then $x^*$ is accurate to $m$ significant digits.",
    "Catastrophic Cancellation Hazard: Subtracting nearly equal numbers destroys high-order precision bits, magnifying relative error.",
    "Condition Number Expression: $K = \\left| \\frac{x \\cdot f'(x)}{f(x)} \\right|$; if $K \\gg 1$, the mathematical problem is ill-conditioned.",
    "Machine Epsilon Bound: Smallest positive number $\\epsilon$ such that $1 + \\epsilon > 1$; $\\epsilon_{\\text{mach}} \\approx 2^{-52} \\approx 2.22 \\times 10^{-16}$ in double precision.",
    "Taylor Series Remainder: $R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} (x - x_0)^{n+1}$, establishing truncation error upper bounds.",
    "Function Error Propagation: $E_r(f(x)) \\approx \\left| \\frac{x f'(x)}{f(x)} \\right| E_r(x) = K \\cdot E_r(x)$.",
    "Wilkinson Backward Stability: An algorithm is backward stable if it delivers the exact answer to a nearby problem.",
    "Exam Scoring Tip: When evaluating $f(x) = \\sqrt{x+1} - \\sqrt{x}$ for large $x$, always rewrite as $\\frac{1}{\\sqrt{x+1} + \\sqrt{x}}$ to avoid catastrophic cancellation."
])

add("Numerical Methods & Optimization", 2, "Root Finding", [
    "Nonlinear Root-Finding Fundamentals: Determining real roots of algebraic and transcendental equations $f(x) = 0$; Intermediate Value Theorem: If continuous $f(x)$ satisfies $f(a) \\cdot f(b) < 0$, then at least one root lies within $(a, b)$.",
    "Bisection (Interval Halving) Method: Bracketing method; Midpoint computation $c = \\frac{a + b}{2}$; Replacing bracket based on sign of $f(c)$; Linear convergence; Absolute error bounded strictly by $|x_n - \\alpha| \\le \\frac{b - a}{2^n}$; Number of iterations required: $n \\ge \\frac{\\ln(b - a) - \\ln(\\epsilon)}{\\ln 2}$.",
    "Regula Falsi (False Position) Method: Linear interpolation bracketing method; Root approximation via chord intercept: $c = \\frac{a f(b) - b f(a)}{f(b) - f(a)}$; Guaranteed convergence; Often one endpoint remains stagnant (slow one-sided convergence); Modified Illinois algorithm.",
    "Fixed-Point Iteration Method: Reformulating $f(x) = 0$ into equivalent fixed-point form $x = g(x)$; Banach Fixed-Point Theorem: Convergence guaranteed if $g(x)$ maps $[a, b] \\to [a, b]$ and $|g'(x)| \\le k < 1$ for all $x \\in [a, b]$ (contraction mapping); Error bound: $|x_n - \\alpha| \\le \\frac{k^n}{1 - k} |x_1 - x_0|$.",
    "Newton-Raphson Method Formulation: Tangent-line iteration derived via truncated Taylor series: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$; Quadratic order of convergence ($p = 2$); Rapid convergence near simple root; Failure modes: $f'(x_n) = 0$, inflection points, cycle oscillation.",
    "Order of Convergence Formulation: General sequence $e_{n+1} \\approx C \\cdot e_n^p$ as $n \\to \\infty$; Linear ($p = 1$), Superlinear ($1 < p < 2$), and Quadratic ($p = 2$); Proving quadratic convergence of Newton-Raphson for simple root ($f'(\\alpha) \\ne 0$): $e_{n+1} = \\frac{f''(\\alpha)}{2 f'(\\alpha)} e_n^2$.",
    "Multiple Roots & Modified Newton Methods: Simple roots vs multiple roots (multiplicity $m \\ge 2$ where $f(\\alpha) = f'(\\alpha) = \\dots = f^{(m-1)}(\\alpha) = 0$); Standard Newton drops to linear convergence for multiple roots; Modified Newton restoring quadratic convergence: $x_{n+1} = x_n - m \\frac{f(x_n)}{f'(x_n)}$.",
    "Secant Method & Quasi-Newton Approach: Eliminating derivative evaluations by approximating $f'(x_n)$ via finite differences: $x_{n+1} = x_n - f(x_n) \\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$; Superlinear convergence rate $p = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$ (Golden Ratio).",
    "Muller's Method & Complex Roots: Parabolic interpolation passing through three points $(x_0, x_1, x_2)$; Solving quadratic polynomial for vertex intercept; Capable of discovering complex roots of polynomials; Convergence order $p \\approx 1.84$.",
    "University Examination Strategy: Solve a transcendental equation to 4 decimal places using Newton-Raphson, prove quadratic convergence analytically, determine required iterations in Bisection method for given tolerance, and compare Secant vs Newton-Raphson."
], [
    "Bisection Error Bound: $|e_n| \\le \\frac{b - a}{2^n}$, guaranteeing monotonic linear reduction in bracket width.",
    "Bisection Iteration Count: Minimum iterations $n = \\left\\lceil \\frac{\\log_{10}(b-a) - \\log_{10}(\\epsilon)}{\\log_{10}(2)} \\right\\rceil$.",
    "Newton-Raphson Recurrence: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$, computing tangent x-intercept.",
    "Newton Quadratic Proof: $e_{n+1} = \\frac{f''(\\xi)}{2 f'(x_n)} e_n^2$, establishing asymptotic error exponent $p = 2$.",
    "Secant Convergence Order: Order of convergence equals the Golden Ratio $\\phi = \\frac{1+\\sqrt{5}}{2} \\approx 1.618$.",
    "Fixed-Point Contraction: Fixed-point iteration $x_{n+1} = g(x_n)$ converges if $|g'(x)| < 1$ in neighborhood of root.",
    "Newton-Raphson Multiple Root: At root with multiplicity $m$, standard Newton converges linearly with rate $1 - 1/m$.",
    "Newton Division Hazard: Diverges or crashes if $f'(x_n) = 0$; requires switching to bracketing method.",
    "False Position Chords: $x = \\frac{a f(b) - b f(a)}{f(b) - f(a)}$, combining bracketing security with linear slope.",
    "Exam Gold Tip: Always verify that $f'(x_0) \\ne 0$ and $f(x_0) f''(x_0) > 0$ for rapid monotonic convergence in Newton's method."
])

add("Numerical Methods & Optimization", 3, "Linear Systems", [
    "Linear Systems in Science & Engineering: Formulating systems of $n$ linear equations in $n$ unknowns: $A x = b$; Coefficient matrix $A \\in \\mathbb{R}^{n \\times n}$, unknown vector $x$, right-hand side vector $b$; Existence and uniqueness (invertible $A$, $\\det(A) \\ne 0$).",
    "Gauss Elimination with Back Substitution: Forward elimination transforming augmented matrix $[A \\mid b]$ into upper triangular form via row operations: $R_i \\leftarrow R_i - m_{ij} R_j$ where $m_{ij} = a_{ij} / a_{jj}$; Back substitution solving unknowns in reverse order; Computational complexity: $\\frac{2}{3} n^3$ FLOPs.",
    "Pivoting Strategies for Numerical Stability: Partial pivoting: Searching column $j$ for element with maximum absolute value $|a_{kj}|$ and swapping rows $R_j \\leftrightarrow R_k$ before elimination; Prevents division by zero and suppresses error amplification; Complete pivoting (row and column swaps).",
    "Gauss-Jordan Elimination Method: Transforming augmented matrix into reduced row echelon form (identity matrix $I$); Eliminates back substitution step; Requires $\\frac{4}{3} n^3$ operations; Efficient for matrix inversion $[A \\mid I] \\to [I \\mid A^{-1}]$.",
    "LU Matrix Decomposition (Factorization): Factoring $A = L U$ where $L$ is unit lower triangular and $U$ is upper triangular; Doolittle's method ($L$ has unit diagonal); Crout's method ($U$ has unit diagonal); Solving $A x = b$ in two fast $O(n^2)$ steps: Forward solve $L y = b$, then back solve $U x = y$.",
    "Cholesky Factorization for Symmetric Positive-Definite (SPD): If $A = A^T$ and $x^T A x > 0$ for all $x \\ne 0$, then $A = L L^T$ where $L$ is lower triangular with positive diagonal elements; Requires only $\\frac{1}{3} n^3$ FLOPs (half the work of standard LU); Numerically stable without pivoting.",
    "Iterative Methods: Jacobi Iteration: Splitting $A = D + L + U$; Diagonal inversion formulation: $x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j \\ne i} a_{ij} x_j^{(k)} \\right)$; Requires updating all components simultaneously using previous iterate values.",
    "Gauss-Seidel Iteration Method: Successive displacement: Utilizing newly computed components immediately within the same iteration: $x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j < i} a_{ij} x_j^{(k+1)} - \\sum_{j > i} a_{ij} x_j^{(k)} \\right)$; Converges twice as fast as Jacobi for diagonally dominant systems.",
    "Convergence Criteria & Successive Over-Relaxation (SOR): Strict diagonal dominance: $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i$ guarantees convergence; Spectral radius criterion: $\\rho(T) < 1$; SOR method accelerating convergence via relaxation parameter $\\omega \\in (1, 2)$: $x_i^{(k+1)} = (1 - \\omega) x_i^{(k)} + \\frac{\\omega}{a_{ii}} (\\dots)$.",
    "University Examination Strategy: Solve a 3x3 system using Gauss elimination with partial pivoting, factor a matrix using Doolittle LU decomposition, perform 3 iterations of Gauss-Seidel method, and verify diagonal dominance."
], [
    "Gauss Elimination Complexity: Forward elimination requires $\\frac{2}{3} n^3$ floating-point operations; back substitution requires $n^2$ operations.",
    "Partial Pivoting Necessity: Prevents division by near-zero pivots, suppressing exponential growth of rounding errors during elimination.",
    "LU Forward-Backward Solution: Solves $A x = b$ by first solving $L y = b$ (forward), followed by $U x = y$ (backward) in $O(n^2)$ time.",
    "Cholesky SPD Efficiency: Cholesky factorization $A = L L^T$ runs in $\\frac{1}{3} n^3$ operations, utilizing symmetry and positive-definiteness.",
    "Strict Diagonal Dominance: $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all rows guarantees both Jacobi and Gauss-Seidel convergence.",
    "Gauss-Seidel In-Place Update: Overwrites variables immediately upon calculation, reducing memory and accelerating convergence.",
    "Spectral Radius Criterion: Iterative scheme $x^{(k+1)} = T x^{(k)} + c$ converges for any initial guess iff spectral radius $\\rho(T) < 1$.",
    "SOR Parameter Range: Relaxation factor must satisfy $0 < \\omega < 2$ for convergence; $\\omega > 1$ accelerates slow convergent systems.",
    "Condition Number of Matrix: $\\kappa(A) = \\|A\\| \\cdot \\|A^{-1}\\|$; large condition number implies sensitive ill-conditioned system.",
    "Exam Gold Tip: Before applying Gauss-Seidel iteration, always rearrange the equations so that the largest coefficient in each row lies on the main diagonal."
])

add("Numerical Methods & Optimization", 4, "Interpolation", [
    "Interpolation Mathematical Framework: Given $n+1$ distinct data points $(x_0, y_0), (x_1, y_1), \\dots, (x_n, y_n)$, construct a polynomial $P_n(x)$ of degree at most $n$ such that $P_n(x_i) = y_i$ for all $i = 0, 1, \\dots, n$; Uniqueness via Vandermonde determinant.",
    "Lagrange Form of Interpolating Polynomial: Expressed as linear combination of cardinal basis polynomials: $P_n(x) = \\sum_{i=0}^n y_i L_i(x)$; Lagrange basis polynomials: $L_i(x) = \\prod_{j=0, j \\ne i}^n \\frac{x - x_j}{x_i - x_j}$; Satisfies Kronecker delta property $L_i(x_j) = \\delta_{ij}$.",
    "Barycentric Lagrange Interpolation: Computationally efficient reformulation: $P_n(x) = \\frac{\\sum_{i=0}^n \\frac{w_i}{x - x_i} y_i}{\\sum_{i=0}^n \\frac{w_i}{x - x_i}}$ where weights $w_i = \\frac{1}{\\prod_{j \\ne i} (x_i - x_j)}$; Allows $O(n)$ evaluation and incremental node addition.",
    "Newton Divided Difference Interpolation: Divided differences: $f[x_i, x_{i+1}] = \\frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i}$; General recurrence: $f[x_i, \\dots, x_{i+k}] = \\frac{f[x_{i+1}, \\dots, x_{i+k}] - f[x_i, \\dots, x_{i+k-1}]}{x_{i+k} - x_i}$; Polynomial: $P_n(x) = f[x_0] + \\sum_{k=1}^n f[x_0, \\dots, x_k] \\prod_{j=0}^{k-1} (x - x_j)$.",
    "Equispaced Finite Difference Operators: Forward difference $\\Delta y_i = y_{i+1} - y_i$; Backward difference $\\nabla y_i = y_i - y_{i-1}$; Central difference $\\delta y_i = y_{i+1/2} - y_{i-1/2}$; Shift operator $E y_i = y_{i+1}$; Relationships: $E = 1 + \\Delta = (1 - \\nabla)^{-1} = e^{h D}$.",
    "Newton Forward & Backward Interpolation Formulas: For equispaced nodes $x_i = x_0 + i h$; Forward formula (near start of table): $P_n(x_0 + u h) = y_0 + u \\Delta y_0 + \\frac{u(u-1)}{2!} \\Delta^2 y_0 + \\dots$; Backward formula (near end of table): $P_n(x_n + v h) = y_n + v \\nabla y_n + \\frac{v(v+1)}{2!} \\nabla^2 y_n + \\dots$.",
    "Interpolation Error & Remainder Theorem: Error formula: $E_n(x) = f(x) - P_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} \\prod_{i=0}^n (x - x_i)$ for some $\\xi \\in (\\min(x_i), \\max(x_i))$; Error increases drastically outside the interval (extrapolation hazard).",
    "Runge's Phenomenon & Chebyshev Nodes: High-degree polynomial interpolation on equispaced nodes exhibits wild oscillations near interval boundaries (e.g. for Runge function $f(x) = \\frac{1}{1 + 25 x^2}$ on $[-1, 1]$); Suppressing oscillations using Chebyshev nodes: $x_k = \\cos\\left( \\frac{2k+1}{2n+2} \\pi \\right)$.",
    "Cubic Spline Interpolation: Piecewise polynomial interpolation overcoming Runge's phenomenon; Constructing cubic polynomial $S_i(x)$ on each subinterval $[x_i, x_{i+1}]$; Enforcing $C^2$ continuity: matching values, first derivatives $S'_i(x)$, and second derivatives $S''_i(x)$ at interior knots; Natural spline boundary conditions ($S''(x_0) = S''(x_n) = 0$).",
    "University Examination Strategy: Construct a divided difference table to evaluate an interpolated value, apply Newton's forward/backward formula to tabulated data, derive the Lagrange interpolation error bound, and explain Runge's phenomenon."
], [
    "Lagrange Basis Property: $L_i(x_j) = 1$ when $i = j$, and $L_i(x_j) = 0$ when $i \\ne j$, satisfying the Kronecker delta property.",
    "Newton Divided Difference: $f[x_0, x_1, x_2] = \\frac{f[x_1, x_2] - f[x_0, x_1]}{x_2 - x_0}$, building interpolation table sequentially.",
    "Forward Parameter Variable: $u = \\frac{x - x_0}{h}$, expressing fractional distance from initial base node.",
    "Backward Parameter Variable: $v = \\frac{x - x_n}{h}$, expressing fractional distance from terminal base node.",
    "Operator Relation: $E = 1 + \\Delta$, and differential operator relation $h D = \\ln(1 + \\Delta) = \\Delta - \\frac{\\Delta^2}{2} + \\frac{\\Delta^3}{3} - \\dots$.",
    "Interpolation Error Expression: $f(x) - P_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} (x - x_0)(x - x_1)\\dots(x - x_n)$.",
    "Runge's Phenomenon Root Cause: Equispaced node polynomial product $\\prod (x - x_i)$ grows exponentially large near interval endpoints.",
    "Chebyshev Node Distribution: Dense spacing near interval endpoints minimizes the maximum value of the nodal product polynomial.",
    "Cubic Spline Smoothness: Maintains continuous position, slope, and curvature ($C^2$ continuity) across all internal knots.",
    "Exam Gold Tip: Use Newton forward formula when interpolating near the beginning of a data table, and Newton backward formula near the end."
])

add("Numerical Methods & Optimization", 5, "Optimization Basics", [
    "Mathematical Optimization Problem Formulation: Standard form: Minimize $f(x)$ subject to inequality constraints $g_i(x) \\le 0$ ($i = 1, \\dots, m$) and equality constraints $h_j(x) = 0$ ($j = 1, \\dots, p$), where $x \\in \\mathbb{R}^n$; Feasible region $\\Omega$; Local vs global minima.",
    "Unconstrained Optimization & Optimality Conditions: First-Order Necessary Condition (FONC): $\\nabla f(x^*) = 0$ (stationary point); Second-Order Necessary Condition (SONC): Hessian matrix $H(x^*) = \\nabla^2 f(x^*)$ is positive semidefinite; Second-Order Sufficient Condition (SOSC): $H(x^*)$ is positive definite ($H \\succ 0$).",
    "Univariate Optimization: Golden Section Search: Derivative-free bracketing method for strictly unimodal functions on $[a, b]$; Golden ratio spacing: $\\tau = \\frac{\\sqrt{5} - 1}{2} \\approx 0.618$; Reduces bracket by constant factor $0.618$ per iteration reusing one interior evaluation.",
    "Gradient Descent (Steepest Descent) Method: Iterative first-order algorithm: $x_{k+1} = x_k - \\alpha_k \\nabla f(x_k)$; Moving in direction of maximum rate of decrease ($d_k = -\\nabla f(x_k)$); Step length $\\alpha_k$ determined via backtracking line search (Armijo condition); Orthogonal zig-zag path on ill-conditioned quadratics.",
    "Newton's Optimization Method: Second-order algorithm incorporating curvature: $x_{k+1} = x_k - [H(x_k)]^{-1} \\nabla f(x_k)$; Quadratic convergence near strict local minimum; Computationally expensive Hessian inversion ($O(n^3)$); May diverge if Hessian is not positive definite.",
    "Quasi-Newton Algorithms (BFGS): Approximating inverse Hessian $B_k \\approx H^{-1}$ using gradient differences: $s_k = x_{k+1} - x_k$, $y_k = \\nabla f(x_{k+1}) - \\nabla f(x_k)$; Secant equation $B_{k+1} y_k = s_k$; BFGS rank-2 update maintaining positive definiteness and superlinear convergence.",
    "Constrained Optimization & Karush-Kuhn-Tucker (KKT) Conditions: Lagrangian function: $\\mathcal{L}(x, \\lambda, \\mu) = f(x) + \\sum_{i=1}^m \\lambda_i g_i(x) + \\sum_{j=1}^p \\mu_j h_j(x)$; KKT necessary conditions for local optimum $x^*$: Stationarity $\\nabla_x \\mathcal{L} = 0$, Primal feasibility ($g_i \\le 0, h_j = 0$), Dual feasibility ($\\lambda_i \\ge 0$), and Complementary slackness ($\\lambda_i g_i(x^*) = 0$).",
    "Linear Programming & Simplex Method: Linear objective and linear constraints: $\\min c^T x$ subject to $A x = b, x \\ge 0$; Fundamental Theorem of Linear Programming: If an optimal solution exists, it occurs at an extreme point (basic feasible solution); Simplex algorithm pivoting along edges of polytope.",
    "Duality Theory in Linear Programming: Primal problem: $\\max c^T x$ s.t. $A x \\le b, x \\ge 0$; Dual problem: $\\min b^T y$ s.t. $A^T y \\ge c, y \\ge 0$; Weak Duality ($c^T x \\le b^T y$); Strong Duality ($c^T x^* = b^T y^*$ at optimality); Economic interpretation of shadow prices.",
    "University Examination Strategy: Formulate KKT conditions for a constrained optimization problem and solve for optimal multipliers, execute 2 steps of Gradient Descent with given step size, and solve a Linear Programming problem using the Simplex method."
], [
    "Stationary Point Criterion: $\\nabla f(x^*) = 0$; must be accompanied by positive definite Hessian $\\nabla^2 f(x^*) \\succ 0$ for local minimum.",
    "Golden Section Ratio: $\\tau = \\frac{\\sqrt{5}-1}{2} \\approx 0.618033$, maintaining symmetric interval reduction with single evaluation.",
    "Steepest Descent Update: $x_{k+1} = x_k - \\alpha_k \\nabla f(x_k)$, moving along negative gradient vector.",
    "Newton Multidimensional Step: $x_{k+1} = x_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k)$, achieving quadratic convergence near minimum.",
    "Complementary Slackness: $\\lambda_i g_i(x^*) = 0$; either the constraint is active ($g_i = 0$) or the Lagrange multiplier vanishes ($\\lambda_i = 0$).",
    "Dual Feasibility Sign: Multipliers for inequality constraints must be non-negative: $\\lambda_i \\ge 0$ for minimization problems.",
    "Simplex Pivot Rule: Entering variable chosen by most negative reduced cost; Leaving variable determined by minimum ratio test.",
    "Strong Duality Theorem: Optimal objective value of primal equals optimal objective value of dual with zero duality gap.",
    "BFGS Secant Equation: Inverse Hessian approximation satisfies $B_{k+1} y_k = s_k$, incorporating curvature without exact second derivatives.",
    "Exam Scoring Tip: In KKT problems, analyze cases systematically by assuming each inequality constraint is either active ($g_i = 0$) or inactive ($\\lambda_i = 0$)."
])

# =========================================================================
# 6. STATISTICAL INFERENCE / OOP (B.Sc)
# =========================================================================
add("Statistical Inference / OOP", 1, "Point Estimation", [
    "Statistical Inference Foundational Framework: Inferring population parameters $\\theta$ from sample observations $X_1, X_2, \\dots, X_n$; Random sample definition (independent and identically distributed i.i.d. random variables); Statistic as a function of sample data containing no unknown parameters.",
    "Point Estimators vs Point Estimates: Point estimator: A statistic $\\hat{\\theta} = T(X_1, \\dots, X_n)$ (a random variable); Point estimate: The specific numerical value computed from realized sample data $t(x_1, \\dots, x_n)$.",
    "Unbiasedness Criterion: An estimator $\\hat{\\theta}$ is unbiased for $\\theta$ if its mathematical expectation equals the true parameter: $E[\\hat{\\theta}] = \\theta$; Bias defined as $\\text{Bias}(\\hat{\\theta}) = E[\\hat{\\theta}] - \\theta$; Sample mean $\\bar{X}$ is always unbiased for population mean $\\mu$.",
    "Sample Variance & Bessel's Correction: Unadjusted sample variance $S_n^2 = \\frac{1}{n} \\sum (X_i - \\bar{X})^2$ is biased: $E[S_n^2] = \\frac{n-1}{n} \\sigma^2$; Unbiased sample variance with Bessel's correction: $S^2 = \\frac{1}{n-1} \\sum_{i=1}^n (X_i - \\bar{X})^2$, ensuring $E[S^2] = \\sigma^2$.",
    "Consistency Criterion (Asymptotic Convergence): An estimator $\\hat{\\theta}_n$ is consistent if it converges in probability to $\\theta$ as sample size $n \\to \\infty$: $\\lim_{n \\to \\infty} P(|\\hat{\\theta}_n - \\theta| > \\epsilon) = 0$; Sufficient condition: $\\lim_{n \\to \\infty} E[\\hat{\\theta}_n] = \\theta$ and $\\lim_{n \\to \\infty} \\text{Var}(\\hat{\\theta}_n) = 0$.",
    "Efficiency & Minimum Variance Unbiased Estimators (MVUE): Relative efficiency of two unbiased estimators: $\\text{eff}(\\hat{\\theta}_1, \\hat{\\theta}_2) = \\frac{\\text{Var}(\\hat{\\theta}_2)}{\\text{Var}(\\hat{\\theta}_1)}$; MVUE: An unbiased estimator achieving lowest possible variance among all unbiased estimators.",
    "Cramér-Rao Lower Bound (CRLB): For any unbiased estimator $\\hat{\\theta}$, its variance is bounded by the reciprocal of Fisher Information: $\\text{Var}(\\hat{\\theta}) \\ge \\frac{1}{I_n(\\theta)}$; Fisher Information: $I_n(\\theta) = n \\cdot E\\left[ \\left( \\frac{\\partial \\ln f(X; \\theta)}{\\partial \\theta} \\right)^2 \\right] = -n \\cdot E\\left[ \\frac{\\partial^2 \\ln f(X; \\theta)}{\\partial \\theta^2} \\right]$.",
    "Method of Moments (MoM) Estimation: Equating sample raw moments $m_k = \\frac{1}{n} \\sum X_i^k$ to theoretical population moments $\\mu_k = E[X^k]$; Solving system of equations for parameters; Simple to compute, consistent, but often not statistically efficient.",
    "Maximum Likelihood Estimation (MLE): Likelihood function $L(\\theta) = \\prod_{i=1}^n f(x_i; \\theta)$; Log-likelihood $\\ell(\\theta) = \\ln L(\\theta)$; Setting score function to zero: $\\frac{\\partial \\ell}{\\partial \\theta} = 0$; Properties: Asymptotically unbiased, consistent, asymptotically normal $\\hat{\\theta}_{\\text{MLE}} \\sim N(\\theta, I_n(\\theta)^{-1})$, and invariant under functional transformations.",
    "University Examination Strategy: Derive MLE and Method of Moments estimators for Normal and Poisson distributions, prove sample variance $S^2$ with $n-1$ denominator is unbiased, and compute Fisher Information and verify CRLB."
], [
    "Unbiasedness Expectation: $E[\\hat{\\theta}] = \\theta$; estimator neither systematically overestimates nor underestimates parameter.",
    "Bessel's Correction Rationale: Division by $n-1$ compensates for degree of freedom lost when substituting sample mean $\\bar{X}$ for $\\mu$.",
    "Consistency Condition: If estimator is asymptotically unbiased and its variance approaches zero as $n \\to \\infty$, it is consistent.",
    "Cramér-Rao Bound: $\\text{Var}(\\hat{\\theta}) \\ge \\frac{1}{I_n(\\theta)}$, establishing theoretical minimum variance floor.",
    "Fisher Information Expression: $I(\\theta) = -E\\left[ \\frac{\\partial^2 \\ln f(X;\\theta)}{\\partial \\theta^2} \\right]$, measuring sensitivity of log-likelihood.",
    "MLE Invariance Property: If $\\hat{\\theta}$ is MLE of $\\theta$, then $g(\\hat{\\theta})$ is the MLE of $g(\\theta)$ for any function $g$.",
    "Mean Squared Error (MSE): $\\text{MSE}(\\hat{\\theta}) = E[(\\hat{\\theta} - \\theta)^2] = \\text{Var}(\\hat{\\theta}) + [\\text{Bias}(\\hat{\\theta})]^2$.",
    "Normal Distribution MLE: For $N(\\mu, \\sigma^2)$, $\\hat{\\mu}_{\\text{MLE}} = \\bar{X}$ and $\\hat{\\sigma}^2_{\\text{MLE}} = \\frac{1}{n} \\sum (X_i - \\bar{X})^2$ (biased by factor $\\frac{n-1}{n}$).",
    "Sufficiency & Factorization: By Neyman-Fisher Theorem, $T$ is sufficient for $\\theta$ iff $f(x; \\theta) = g(T(x), \\theta) h(x)$.",
    "Exam Gold Tip: Always remember that the MLE for variance in a normal distribution divides by $n$ (making it biased), whereas the MVUE divides by $n-1$."
])

add("Statistical Inference / OOP", 2, "Interval Estimation", [
    "Confidence Interval Conceptual Foundations: Moving beyond single-point estimates to quantify uncertainty; Confidence level $(1 - \\alpha)$ (e.g. 95%, 99%); Frequentist interpretation: If sampling is repeated infinitely, $(1 - \\alpha) \\times 100\\%$ of calculated intervals contain true parameter $\\theta$.",
    "Pivotal Quantity Method: Constructing a random variable $Q(X_1, \\dots, X_n; \\theta)$ whose probability distribution is completely known and independent of unknown parameter $\\theta$; Inverting inequalities $P(q_{\\alpha/2} \\le Q \\le q_{1 - \\alpha/2}) = 1 - \\alpha$ to isolate $\\theta$.",
    "Confidence Interval for Mean (Known Variance): For random sample from $N(\\mu, \\sigma^2)$ with known $\\sigma$: Pivot $Z = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\sim N(0, 1)$; Two-sided interval: $\\bar{X} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$; Margin of error $E = z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$.",
    "Sample Size Determination for Target Margin: Calculating required sample size to estimate mean within margin $E$ with confidence $(1 - \\alpha)$: $n = \\left( \\frac{z_{\\alpha/2} \\cdot \\sigma}{E} \\right)^2$; Sample size for population proportion: $n = \\frac{z_{\\alpha/2}^2 \\cdot p^*(1 - p^*)}{E^2}$ (conservative maximum at $p^* = 0.5$).",
    "Confidence Interval for Mean (Unknown Variance): For normal population with unknown $\\sigma$: Estimating $\\sigma$ by sample standard deviation $S$; Pivot $T = \\frac{\\bar{X} - \\mu}{S / \\sqrt{n}} \\sim t_{n-1}$ (Student's t-distribution with $n-1$ degrees of freedom); Confidence interval: $\\bar{X} \\pm t_{\\alpha/2, n-1} \\frac{S}{\\sqrt{n}}$.",
    "Confidence Interval for Population Proportion: Large sample approximation via Central Limit Theorem; Sample proportion $\\hat{p} = X / n$; Standard error $\\text{SE} = \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}$; Wald interval: $\\hat{p} \\pm z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}(1 - \\hat{p})}{n}}$; Wilson score interval overcoming zero-boundary flaws.",
    "Confidence Interval for Variance & Standard Deviation: For normal population: Pivot $Q = \\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$ (Chi-square distribution with $n-1$ degrees of freedom); Non-symmetric confidence interval for $\\sigma^2$: $\\left[ \\frac{(n-1)S^2}{\\chi^2_{\\alpha/2, n-1}}, \\frac{(n-1)S^2}{\\chi^2_{1 - \\alpha/2, n-1}} \\right]$.",
    "Difference Between Two Population Means: Independent samples: Known variances: $(\\bar{X}_1 - \\bar{X}_2) \\pm z_{\\alpha/2} \\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}$; Unknown equal variances (pooled variance $S_p^2$): $(\\bar{X}_1 - \\bar{X}_2) \\pm t_{\\alpha/2, n_1+n_2-2} S_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}$; Welch-Satterthwaite approximation for unequal variances.",
    "Paired Samples Interval Estimation: Dependent / matched pairs data $(X_i, Y_i)$; Difference variable $D_i = X_i - Y_i$; Calculating sample mean difference $\\bar{D}$ and standard deviation $S_d$; Interval: $\\bar{D} \\pm t_{\\alpha/2, n-1} \\frac{S_d}{\\sqrt{n}}$.",
    "University Examination Strategy: Construct 95% and 99% confidence intervals for mean with known and unknown variance, calculate sample size required for given precision, and construct a confidence interval for population variance using chi-square distribution."
], [
    "Confidence Level Interpretation: The probability applies to the random interval enclosing the fixed parameter, not the parameter moving.",
    "Z-Interval for Normal Mean: $\\bar{X} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$, applied when population standard deviation $\\sigma$ is known.",
    "t-Interval Unknown Variance: $\\bar{X} \\pm t_{\\alpha/2, n-1} \\frac{S}{\\sqrt{n}}$, accounting for extra sampling variation from estimated $S$.",
    "Sample Size Formula: $n = \\left( \\frac{z_{\\alpha/2} \\sigma}{E} \\right)^2$; rounding up to nearest whole integer.",
    "Chi-Square Variance Interval: Asymmetric boundaries: $\\left[ \\frac{(n-1)S^2}{\\chi^2_{\\alpha/2}}, \\frac{(n-1)S^2}{\\chi^2_{1 - \\alpha/2}} \\right]$ due to non-symmetric chi-square distribution.",
    "Pooled Variance Expression: $S_p^2 = \\frac{(n_1 - 1)S_1^2 + (n_2 - 1)S_2^2}{n_1 + n_2 - 2}$, combining variance estimates when $\\sigma_1 = \\sigma_2$.",
    "Student's t Heavy Tails: Possesses heavier tails than standard normal, approaching normal distribution as degrees of freedom $n \\to \\infty$.",
    "Proportion Standard Error: $\\text{SE}(\\hat{p}) = \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$, valid when $n \\hat{p} \\ge 10$ and $n(1-\\hat{p}) \\ge 10$.",
    "Margin of Error Half-Width: $E = \\text{Critical Value} \\times \\text{Standard Error}$; doubling sample size reduces margin by $\\sqrt{2}$.",
    "Exam Scoring Tip: For 95% confidence, $z_{0.025} = 1.96$; for 99% confidence, $z_{0.005} = 2.576$; for 90% confidence, $z_{0.05} = 1.645$."
])

add("Statistical Inference / OOP", 3, "Hypothesis Testing", [
    "Hypothesis Testing Philosophical Paradigm: Statistical decision-making framework (Neyman-Pearson); Formulating Null Hypothesis $H_0$ (baseline status quo / equality) vs Alternative Hypothesis $H_1$ (research claim / divergence); One-tailed vs Two-tailed tests.",
    "Type I & Type II Decision Errors: Type I Error ($\\alpha$): Rejecting true null hypothesis $H_0$ (false positive; significance level); Type II Error ($\\beta$): Failing to reject false null hypothesis $H_0$ (false negative); Statistical Power of test = $1 - \\beta$.",
    "Test Statistics & Critical Value Approach: Standardized test statistic $T(X)$; Partitioning sample space into Acceptance Region and Rejection / Critical Region $C$; Reject $H_0$ if calculated test statistic falls within critical region bounded by critical values.",
    "The p-Value Decision Framework: p-value: Probability, under the assumption that $H_0$ is true, of obtaining a test statistic at least as extreme as observed; Decision rule: If $\\text{p-value} \\le \\alpha$, reject $H_0$; if $\\text{p-value} > \\alpha$, fail to reject $H_0$.",
    "Z-Test for Single Population Mean: One-sample Z-test: $Z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}} \\sim N(0, 1)$; Applicable when population variance $\\sigma^2$ is known or sample size is large ($n \\ge 30$) via Central Limit Theorem.",
    "One-Sample Student's t-Test: Applicable for normal population with unknown variance: $t = \\frac{\\bar{X} - \\mu_0}{S / \\sqrt{n}} \\sim t_{n-1}$; Robustness against moderate departures from normality; Comparing test statistic against t-distribution tables.",
    "Two-Sample Independent t-Test: Testing $H_0: \\mu_1 - \\mu_2 = 0$; Pooled t-test (equal variances $\\sigma_1^2 = \\sigma_2^2$): $t = \\frac{\\bar{X}_1 - \\bar{X}_2}{S_p \\sqrt{1/n_1 + 1/n_2}} \\sim t_{n_1+n_2-2}$; Welch's t-test for unequal variances adjusting degrees of freedom.",
    "Paired Samples t-Test for Dependent Data: Testing before-after treatments on same subjects; Differences $D_i = X_i - Y_i$; $H_0: \\mu_D = 0$; Test statistic: $t = \\frac{\\bar{D} - 0}{S_D / \\sqrt{n}} \\sim t_{n-1}$; Eliminates subject-to-subject confounding variability.",
    "Testing Population Proportions & Variances: Large-sample Z-test for proportion: $Z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}$; Chi-square test for population variance: $\\chi^2 = \\frac{(n-1)S^2}{\\sigma_0^2} \\sim \\chi^2_{n-1}$; Two-sample F-test for equality of variances: $F = S_1^2 / S_2^2 \\sim F_{n_1-1, n_2-1}$.",
    "University Examination Strategy: Execute complete 5-step hypothesis tests for single mean, difference of two means, and proportions; interpret p-values; and calculate Type I and Type II error probabilities."
], [
    "Type I Error (Alpha): $\\alpha = P(\\text{Reject } H_0 \\mid H_0 \\text{ is true})$; pre-set threshold determining significance level.",
    "Type II Error (Beta): $\\beta = P(\\text{Fail to reject } H_0 \\mid H_0 \\text{ is false})$; depends on true alternative parameter value.",
    "Statistical Power: Power $= 1 - \\beta = P(\\text{Reject } H_0 \\mid H_0 \\text{ is false})$; probability of correctly detecting real effect.",
    "p-Value Decision Rule: If $\\text{p-value} \\le \\alpha$, reject $H_0$ with statistical significance; never accept null, merely fail to reject.",
    "Z-Test Statistic: $Z = \\frac{\\bar{X} - \\mu_0}{\\sigma / \\sqrt{n}}$, measuring number of standard errors sample mean deviates from $\\mu_0$.",
    "Two-Tailed Critical Boundaries: For $\\alpha = 0.05$, reject $H_0$ if $|Z| > 1.96$; for $\\alpha = 0.01$, reject if $|Z| > 2.576$.",
    "Paired Difference Transform: Reduces two dependent paired samples into single univariate difference sample $D = X - Y$.",
    "Chi-Square Variance Test: $\\chi^2 = \\frac{(n-1)S^2}{\\sigma_0^2}$ tested against chi-square distribution with $n-1$ degrees of freedom.",
    "F-Test Variance Ratio: $F = \\frac{S_1^2}{S_2^2}$ with $S_1^2 > S_2^2$, tested against $F$ distribution with $(n_1-1, n_2-1)$ degrees of freedom.",
    "Exam Gold Tip: Always state the null and alternative hypotheses explicitly in symbols and words before performing any calculations."
])

add("Statistical Inference / OOP", 4, "ANOVA", [
    "Analysis of Variance (ANOVA) Foundational Scope: Ronald A. Fisher; Statistical methodology testing equality of three or more population means simultaneously: $H_0: \\mu_1 = \\mu_2 = \\dots = \\mu_k$; Overcoming inflated Type I error rate of pairwise t-tests.",
    "Type I Error Inflation in Multiple Testing: Conducting $m = \\binom{k}{2}$ pairwise t-tests at level $\\alpha$ inflates family-wise error rate: $\\alpha_{\\text{FWER}} = 1 - (1 - \\alpha)^m$; For $k = 5$ groups ($m = 10$ pairs), $\\alpha_{\\text{FWER}} = 1 - (0.95)^{10} \\approx 40.1\\%$.",
    "Underlying Assumptions of ANOVA: (1) Independence of observations across and within groups; (2) Normality: Residual errors within each treatment group are normally distributed; (3) Homoscedasticity: Homogeneity of variance ($\\sigma_1^2 = \\dots = \\sigma_k^2 = \\sigma^2$).",
    "Total Sum of Squares Partitioning: Total variation partitioned orthogonally: $SST = SSB + SSW$ (Total = Between-Groups / Treatment + Within-Groups / Error); Mathematical identity: $\\sum_{i=1}^k \\sum_{j=1}^{n_i} (X_{ij} - \\bar{X}_{\\bullet\\bullet})^2 = \\sum_{i=1}^k n_i (\\bar{X}_{i\\bullet} - \\bar{X}_{\\bullet\\bullet})^2 + \\sum_{i=1}^k \\sum_{j=1}^{n_i} (X_{ij} - \\bar{X}_{i\\bullet})^2$.",
    "Degrees of Freedom & Mean Squares: Total degrees of freedom: $N - 1$; Between groups: $k - 1$; Within groups: $N - k$; Mean Square Between: $MSB = \\frac{SSB}{k - 1}$; Mean Square Within: $MSW = \\frac{SSW}{N - k}$ (unbiased pooled estimator of $\\sigma^2$).",
    "The F-Test Statistic & Decision Rule: Under $H_0$, ratio follows Snedecor's F-distribution: $F = \\frac{MSB}{MSW} \\sim F_{k-1, N-k}$; If $H_0$ is false, $E[MSB] = \\sigma^2 + \\frac{\\sum n_i (\\mu_i - \\bar{\\mu})^2}{k-1} > \\sigma^2$, driving $F > 1$; Reject $H_0$ if $F > F_{\\alpha, k-1, N-k}$.",
    "Standard One-Way ANOVA Table Layout: Tabulating Source of Variation, Sum of Squares ($SS$), Degrees of Freedom ($df$), Mean Square ($MS$), $F$-statistic, and critical $p$-value; Comprehensive bookkeeping of sample statistics.",
    "Two-Way ANOVA with & Without Replication: Evaluating two independent factors simultaneously (Factor A with $a$ levels, Factor B with $b$ levels); Two-way without replication: $SST = SSA + SSB + SSE$; Two-way with replication: Incorporating interaction term: $SST = SSA + SSB + SSAB + SSE$.",
    "Post-Hoc Multiple Comparison Tests: Following significant ANOVA ($F > F_{\\text{crit}}$), identifying which specific pairs of means differ; Tukey's Honestly Significant Difference (HSD): $HSD = q_{\\alpha, k, N-k} \\sqrt{\\frac{MSW}{n}}$; Bonferroni correction: Adjusting per-test threshold $\\alpha^* = \\alpha / m$.",
    "University Examination Strategy: Construct a complete One-Way ANOVA table from raw group data, perform hypothesis testing at $\\alpha = 0.05$, compute Tukey's HSD to separate significantly different groups, and explain why multiple t-tests are invalid."
], [
    "FWER Inflation Hazard: Running multiple pairwise t-tests causes uncontrolled explosion of false positive error rate across comparisons.",
    "Fundamental ANOVA Partition: $SST = SSB + SSW$, decomposing total variance into treatment effect and unexplained random error.",
    "F-Ratio Formula: $F = \\frac{MSB}{MSW}$, comparing between-group variance against within-group baseline error variance.",
    "MSW Unbiased Property: $E[MSW] = \\sigma^2$ whether the null hypothesis is true or false, providing stable variance benchmark.",
    "ANOVA Degrees of Freedom: Between groups has $k-1$ df; Within groups has $N-k$ df; Total variation has $N-1$ df.",
    "Tukey's HSD Criterion: Declares two treatment means significantly different if $|\\bar{X}_i - \\bar{X}_j| > q \\sqrt{\\frac{MSW}{n}}$.",
    "Bonferroni Conservative Bound: Divides desired family-wise error $\\alpha$ by total number of comparisons $m$ to guarantee strict error cap.",
    "Interaction Effect in Two-Way: Occurs when the effect of Factor A changes depending on the specific level of Factor B ($SSAB$).",
    "Homoscedasticity Test: Levene's test or Bartlett's test validates equality of variances prior to interpreting standard ANOVA tables.",
    "Exam Gold Tip: In One-Way ANOVA calculations, compute correction factor $CF = T^2 / N$ first to simplify computation of $SST$ and $SSB$."
])

add("Statistical Inference / OOP", 5, "Non-Parametric Tests", [
    "Parametric vs Non-Parametric Inference: Parametric tests assume underlying continuous probability distribution (normality) and specific parameters; Non-parametric (distribution-free) tests make zero distributional assumptions; Operating on ranks and ordinal data.",
    "When to Use Non-Parametric Methods: Severe violations of normality, heavy skewness, extreme outliers, small sample sizes ($n < 15$) where normality cannot be verified, and ordinal / ranked survey data (Likert scales).",
    "The Sign Test for Median: Non-parametric counterpart to one-sample t-test; Tests population median $H_0: M = M_0$; Replaces observations with signs ($+$ if $X_i > M_0$, $-$ if $X_i < M_0$); Test statistic follows Binomial distribution $B(n, 0.5)$; Discards tied zeros.",
    "Wilcoxon Signed-Rank Test: Superior to Sign test by incorporating magnitude of deviations; Steps: Compute differences $D_i = X_i - M_0$, discard zeros, rank absolute differences $|D_i|$, attach original signs, sum positive ranks ($W^+$) and negative ranks ($W^-$); Test statistic $T = \\min(W^+, W^-)$.",
    "Mann-Whitney U Test (Wilcoxon Rank-Sum): Non-parametric alternative to independent two-sample t-test; Tests whether two independent distributions are identical; Steps: Pool all observations, assign ranks 1 to $N$, compute rank sum $R_1$; Calculate $U_1 = n_1 n_2 + \\frac{n_1(n_1+1)}{2} - R_1$; Test statistic $U = \\min(U_1, U_2)$.",
    "Kruskal-Wallis One-Way ANOVA by Ranks: Non-parametric counterpart to One-Way ANOVA for $k \\ge 3$ groups; Steps: Rank all $N$ pooled observations, calculate rank sums $R_i$; Test statistic: $H = \\frac{12}{N(N+1)} \\sum_{i=1}^k \\frac{R_i^2}{n_i} - 3(N+1) \\sim \\chi^2_{k-1}$.",
    "Friedman Test for Repeated Measures: Non-parametric equivalent of Two-Way repeated measures ANOVA; Ranks assigned within each subject/block across $k$ conditions; Test statistic $Q = \\frac{12 n}{k(k+1)} \\sum_{j=1}^k \\bar{R}_j^2 - 3 n (k+1) \\sim \\chi^2_{k-1}$.",
    "Chi-Square Goodness-of-Fit Test: Testing whether observed frequency distribution conforms to theoretical distribution; Test statistic: $\\chi^2 = \\sum_{i=1}^k \\frac{(O_i - E_i)^2}{E_i} \\sim \\chi^2_{k - 1 - p}$; Expected frequency $E_i = n p_i \\ge 5$ requirement.",
    "Chi-Square Test of Independence in Contingency Tables: Testing association between two categorical variables in an $r \\times c$ contingency table; $H_0$: Row and column variables are independent; Expected frequencies $E_{ij} = \\frac{R_i \\cdot C_j}{N}$; Degrees of freedom $df = (r-1)(c-1)$.",
    "University Examination Strategy: Perform a Mann-Whitney U test step-by-step from raw sample data, execute a Chi-square test of independence on a 2x2 contingency table with Yates' correction, and compute the Kruskal-Wallis H statistic."
], [
    "Distribution-Free Advantage: Non-parametric tests remain valid without requiring the population to follow a Gaussian normal distribution.",
    "Efficiency Loss on Normal Data: When normality holds, non-parametric tests have approximately 95% asymptotic efficiency compared to t-tests.",
    "Sign Test Binomial Model: Under $H_0: M = M_0$, the number of positive signs follows Binomial distribution $B(n, 0.5)$.",
    "Wilcoxon Signed-Rank Power: Ranks absolute differences, giving greater weight to data points situated far from the hypothesized median.",
    "Mann-Whitney U Relationship: $U_1 + U_2 = n_1 n_2$; if $U$ is smaller than critical table value, reject null of equal distributions.",
    "Kruskal-Wallis Chi-Square Limit: As group sample sizes $n_i \\ge 5$, the $H$ test statistic closely follows chi-square distribution with $k-1$ df.",
    "Chi-Square Expected Cell Rule: All expected frequencies $E_i$ should exceed 5; small cells must be combined with adjacent categories.",
    "Yates' Continuity Correction: In $2 \\times 2$ contingency tables, subtracting 0.5 from $|O - E|$ adjusts for discrete-to-continuous approximation.",
    "Contingency Degrees of Freedom: $df = (r - 1)(c - 1)$, reflecting independent cell choices after row and column marginal totals are fixed.",
    "Exam Scoring Tip: In Mann-Whitney and Kruskal-Wallis tests, when identical data values occur, always assign the average (mid-rank) of the tied positions."
])

# Save to sem3_bsc_computing_math_data.json
with open('scripts/sem3_bsc_computing_math_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in computing_math dataset now: {len(data)}")
