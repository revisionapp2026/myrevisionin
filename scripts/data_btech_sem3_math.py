"""
B.Tech Semester 3: Mathematics & Statistical Foundations
Covers:
- Engineering Mathematics III
- Linear Algebra & Probability
- Mathematics for ECE
- Numerical Methods
- Statistics & Probability
"""

btech_sem3_math_units = {
    # -------------------------------------------------------------
    # ENGINEERING MATHEMATICS III / MATH FOR ECE
    # -------------------------------------------------------------
    "btech-m3: partial differential equations": {
        "highlights": [
            "Formation of PDEs: Formed by eliminating arbitrary constants $\\phi(x, y, z, a, b) = 0$ yielding $F(x, y, z, p, q) = 0$ where $p = \\frac{\\partial z}{\\partial x}, q = \\frac{\\partial z}{\\partial y}$, or eliminating arbitrary functions.",
            "Lagrange's Linear First-Order PDE: Standard quasilinear form $P(x,y,z)p + Q(x,y,z)q = R(x,y,z)$; Solved via subsidiary auxiliary equations $\\frac{dx}{P} = \\frac{dy}{Q} = \\frac{dz}{R}$.",
            "Non-Linear First-Order PDEs (Charpit's Method): Complete integral for general form $f(x, y, z, p, q) = 0$; Auxiliary Charpit equations $\\frac{dp}{f_x + p f_z} = \\frac{dq}{f_y + q f_z} = \\frac{dz}{-p f_p - q f_q} = \\frac{dx}{-f_p} = \\frac{dy}{-f_q}$.",
            "Classification of Second-Order PDEs: $A u_{xx} + B u_{xy} + C u_{yy} + D = 0$; Classified by discriminant $\\Delta = B^2 - 4AC$: Parabolic ($\\Delta = 0$, Heat equation), Hyperbolic ($\\Delta > 0$, Wave equation), Elliptic ($\\Delta < 0$, Laplace equation).",
            "Method of Separation of Variables: Assumes product solution $u(x, t) = X(x) T(t)$; Reduces PDE into coupled uncoupled ODEs linked by separation constant $-k^2$ or $+k^2$.",
            "One-Dimensional Heat Conduction Equation: Governing parabolic PDE $\\frac{\\partial u}{\\partial t} = \\alpha^2 \\frac{\\partial^2 u}{\\partial x^2}$ where $\\alpha^2 = \\frac{k}{\\rho c_p}$ is thermal diffusivity; General series solution $u(x, t) = \\sum_{n=1}^\\infty b_n \\sin\\left(\\frac{n \\pi x}{L}\\right) e^{-\\alpha^2 (n\\pi/L)^2 t}$.",
            "One-Dimensional Wave Equation: Hyperbolic PDE $\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$ with $c = \\sqrt{T/\\mu}$; Fixed boundary conditions yield standing wave modes $u(x, t) = \\sum_{n=1}^\\infty \\left[A_n \\cos\\left(\\frac{n \\pi c t}{L}\\right) + B_n \\sin\\left(\\frac{n \\pi c t}{L}\\right)\\right] \\sin\\left(\\frac{n \\pi x}{L}\\right)$.",
            "Two-Dimensional Laplace Equation: Elliptic equilibrium equation $\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$; Governs steady-state temperature, electrostatic potential, and irrotational inviscid fluid velocity potential.",
            "Fourier Series Coefficient Matching: Initial spatial profile $u(x, 0) = f(x)$ decomposed via half-range Fourier sine series with coefficients $b_n = \\frac{2}{L}\\int_0^L f(x) \\sin\\left(\\frac{n \\pi x}{L}\\right) dx$.",
            "University Examination Strategy: State homogeneous boundary conditions explicitly, evaluate separation constant sign based on physical boundedness ($T \\to 0$ as $t \\to \\infty$), and show detailed Fourier integrals."
        ],
        "keyPoints": [
            "Lagrange Auxiliary System: $\\frac{dx}{P} = \\frac{dy}{Q} = \\frac{dz}{R}$; Solution is $f(u, v) = 0$ where $u(x,y,z)=c_1, v(x,y,z)=c_2$.",
            "PDE Discriminant: $\\Delta = B^2 - 4AC$; $<0$ Elliptic, $=0$ Parabolic, $>0$ Hyperbolic.",
            "1D Heat Equation: $\\frac{\\partial u}{\\partial t} = \\alpha^2 \\frac{\\partial^2 u}{\\partial x^2}$, where $\\alpha^2$ is thermal diffusivity.",
            "1D Wave Equation: $\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$, where $c = \\sqrt{T/\\mu}$ is wave velocity.",
            "2D Laplace Equation: $\\nabla^2 u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$.",
            "Charpit Auxiliary System: $\\frac{dp}{f_x + p f_z} = \\frac{dq}{f_y + q f_z} = \\frac{dz}{-p f_p - q f_q} = \\frac{dx}{-f_p} = \\frac{dy}{-f_q}$.",
            "Thermal Diffusivity: $\\alpha^2 = \\frac{k}{\\rho C_p}$ measuring rate of heat transfer through material.",
            "D'Alembert's Formula for Infinite Wave: $u(x, t) = \\frac{1}{2}[f(x - ct) + f(x + ct)] + \\frac{1}{2c}\\int_{x - ct}^{x + ct} g(s) ds$.",
            "Separation Constant Rule: Use negative constant $-p^2$ for decaying transient physical phenomena over time $t$.",
            "Exam Pitfall: Never choose a positive separation constant $+k^2$ for heat equation as it produces exponential divergence as $t \\to \\infty$."
        ]
    },
    "btech-m3: complex analysis": {
        "highlights": [
            "Cauchy-Riemann Equations in Cartesian Form: For analytic function $f(z) = u(x, y) + i v(x, y)$, partial derivatives must satisfy $u_x = v_y$ and $u_y = -v_x$, with continuous first partial derivatives.",
            "Cauchy-Riemann in Polar Form: For $z = r e^{i\\theta}$ and $f(z) = u(r, \\theta) + i v(r, \\theta)$: $\\frac{\\partial u}{\\partial r} = \\frac{1}{r}\\frac{\\partial v}{\\partial \\theta}$ and $\\frac{\\partial v}{\\partial r} = -\\frac{1}{r}\\frac{\\partial u}{\\partial \\theta}$.",
            "Harmonic Conjugates & Orthogonal Trajectories: Both $u$ and $v$ satisfy Laplace's equation $\\nabla^2 u = u_{xx} + u_{yy} = 0$; Curves $u(x, y) = c_1$ and $v(x, y) = c_2$ intersect orthogonally at all points where $f'(z) \\ne 0$.",
            "Milne-Thomson Method: Reconstructs analytic function $f'(z) = u_x(z, 0) - i u_y(z, 0)$ directly without evaluating partial integrations for harmonic conjugate $v(x, y)$.",
            "Cauchy-Goursat Integral Theorem: If $f(z)$ is holomorphic within and on a simple closed contour $C$, then $\\oint_C f(z) dz = 0$.",
            "Cauchy's Integral Formula: $f(z_0) = \\frac{1}{2\\pi i}\\oint_C \\frac{f(z)}{z - z_0} dz$; Higher derivatives evaluated via $f^{(n)}(z_0) = \\frac{n!}{2\\pi i}\\oint_C \\frac{f(z)}{(z - z_0)^{n+1}} dz$.",
            "Taylor and Laurent Series Expansions: Taylor expansion $f(z) = \\sum_{n=0}^\\infty a_n (z - z_0)^n$ inside circle of analyticity; Laurent expansion $f(z) = \\sum_{n=-\\infty}^\\infty c_n (z - z_0)^n$ in annular region $r < |z - z_0| < R$.",
            "Classification of Singularities: Removable singularity (no principal negative powers), Pole of order $m$ (finite $m$ negative terms), Essential singularity (infinite negative Laurent powers, e.g. $e^{1/z}$).",
            "Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2\\pi i \\sum \\text{Res}(f, z_k)$; Residue at simple pole $z_0$: $\\lim_{z \\to z_0} (z - z_0)f(z)$; At pole of order $m$: $\\frac{1}{(m-1)!}\\lim_{z \\to z_0} \\frac{d^{m-1}}{dz^{m-1}}[(z - z_0)^m f(z)]$.",
            "Contour Integration of Real Integrals: Evaluates infinite real integrals $\\int_{-\\infty}^\\infty \\frac{P(x)}{Q(x)} dx$ along semicircular upper half-plane contour, where degree $(Q) \\ge \\text{degree}(P) + 2$."
        ],
        "keyPoints": [
            "Cartesian C-R Equations: $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\quad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
            "Polar C-R Equations: $\\frac{\\partial u}{\\partial r} = \\frac{1}{r}\\frac{\\partial v}{\\partial \\theta}, \\quad \\frac{\\partial v}{\\partial r} = -\\frac{1}{r}\\frac{\\partial u}{\\partial \\theta}$.",
            "Milne-Thomson Formula: $f(z) = \\int [u_x(z, 0) - i u_y(z, 0)] dz + C$.",
            "Cauchy's Derivative Formula: $f^{(n)}(z_0) = \\frac{n!}{2\\pi i} \\oint_C \\frac{f(z)}{(z - z_0)^{n+1}} dz$.",
            "Residue at Simple Pole: $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0)f(z)$.",
            "Residue at Pole of Order $m$: $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!} \\lim_{z \\to z_0} \\frac{d^{m-1}}{dz^{m-1}} \\left[(z - z_0)^m f(z)\\right]$.",
            "Cauchy Residue Theorem: $\\oint_C f(z) dz = 2\\pi i \\sum_{k=1}^N \\text{Res}(f, z_k)$.",
            "Conformal Mapping Condition: A mapping $w = f(z)$ preserves angles in magnitude and sense at all points where $f'(z) \\ne 0$.",
            "Bilinear (Mobius) Transformation: $w = \\frac{az + b}{cz + d}$ where $ad - bc \\ne 0$; maps circles and lines into circles and lines.",
            "Exam Scoring Tip: Always state the pole locations and verify whether each pole lies strictly inside or outside the contour $C$ before calculating residues."
        ]
    },
    "btech-m3: random processes": {
        "highlights": [
            "Random Process Definition: Family of random variables $\\{X(t), t \\in T\\}$ indexed by continuous or discrete parameter $t$; Described by joint distribution functions of all orders.",
            "First and Second Order Moments: Mean function $\\mu_X(t) = E[X(t)]$; Autocorrelation function $R_{XX}(t_1, t_2) = E[X(t_1)X(t_2)]$; Autocovariance $C_{XX}(t_1, t_2) = R_{XX}(t_1, t_2) - \\mu_X(t_1)\\mu_X(t_2)$.",
            "Strict-Sense Stationary (SSS): Joint probability distribution of $X(t_1), \\dots, X(t_k)$ identical to shifted variables $X(t_1 + \\tau), \\dots, X(t_k + \\tau)$ for any arbitrary time shift $\\tau$.",
            "Wide-Sense Stationary (WSS): Mean is constant $\\mu_X(t) = \\mu$, and autocorrelation depends strictly on time lag $\\tau = t_1 - t_2$: $R_{XX}(\\tau) = E[X(t)X(t+\\tau)]$.",
            "Properties of Autocorrelation: Maximum at zero lag: $R_{XX}(0) \\ge |R_{XX}(\\tau)|$; Even function symmetry: $R_{XX}(-\\tau) = R_{XX}(\\tau)$; Zero-lag value equals total average power: $R_{XX}(0) = E[X^2(t)]$.",
            "Power Spectral Density (PSD): Fourier transform of autocorrelation function $S_{XX}(\\omega) = \\int_{-\\infty}^\\infty R_{XX}(\\tau) e^{-j\\omega\\tau} d\\tau$ (Wiener-Khinchin theorem).",
            "Cross-Correlation & Cross-Spectral Density: $R_{XY}(\\tau) = E[X(t)Y(t+\\tau)]$; Symmetry $R_{XY}(-\\tau) = R_{YX}(\\tau)$; Cross-PSD $S_{XY}(\\omega) = \\mathcal{F}\\{R_{XY}(\\tau)\\}$.",
            "Linear Time-Invariant Filtering of WSS: Output autocorrelation $R_{YY}(\\tau) = R_{XX}(\\tau) * h(\\tau) * h(-\\tau)$; Output PSD $S_{YY}(\\omega) = |H(\\omega)|^2 S_{XX}(\\omega)$ where $H(\\omega)$ is transfer function.",
            "Poisson Random Process: Counting process $N(t)$ with independent increments and parameter $\\lambda$: $P[N(t) = k] = \\frac{(\\lambda t)^k e^{-\\lambda t}}{k!}$; Mean $E[N(t)] = \\lambda t$ and variance $\\text{Var}[N(t)] = \\lambda t$.",
            "Gaussian Random Process: Any linear combination of process samples produces a multivariate Gaussian distribution; Completely characterized by mean vector and covariance matrix."
        ],
        "keyPoints": [
            "WSS Conditions: (1) $E[X(t)] = \\text{constant}$, (2) $E[X(t)X(t+\\tau)] = R_{XX}(\\tau)$ depends only on $\\tau$.",
            "Wiener-Khinchin Theorem: $S_{XX}(\\omega) = \\int_{-\\infty}^\\infty R_{XX}(\\tau) e^{-j\\omega\\tau} d\\tau$ and $R_{XX}(\\tau) = \\frac{1}{2\\pi}\\int_{-\\infty}^\\infty S_{XX}(\\omega) e^{j\\omega\\tau} d\\omega$.",
            "Total Process Power: Total Power $P = R_{XX}(0) = \\frac{1}{2\\pi}\\int_{-\\infty}^\\infty S_{XX}(\\omega) d\\omega$.",
            "Filter Output PSD: $S_{YY}(\\omega) = |H(\\omega)|^2 S_{XX}(\\omega)$.",
            "Autocorrelation Symmetry: $R_{XX}(\\tau) = R_{XX}(-\\tau)$ is real and even.",
            "White Noise Autocorrelation: $R_{NN}(\\tau) = \\frac{N_0}{2} \\delta(\\tau)$, yielding flat constant spectrum $S_{NN}(\\omega) = \\frac{N_0}{2}$.",
            "Ergodic Process: Time averages equal ensemble averages with probability 1: $\\lim_{T \\to \\infty} \\frac{1}{2T}\\int_{-T}^T X(t) dt = E[X(t)]$.",
            "Poisson Distribution: $P(k \\text{ events in } t) = \\frac{(\\lambda t)^k e^{-\\lambda t}}{k!}$.",
            "Markov Property: Future state depends solely on present state, conditionally independent of historical past states.",
            "Exam Scoring Tip: For filtering problems, always evaluate $|H(\\omega)|^2 = H(\\omega) H^*(\\omega)$ and verify that output PSD is strictly non-negative."
        ]
    },

    # -------------------------------------------------------------
    # NUMERICAL METHODS (B.Tech Sem 3)
    # -------------------------------------------------------------
    "btech-num: error analysis": {
        "highlights": [
            "Classification of Numerical Errors: Inherent/experimental errors, truncation errors arising from truncating infinite series, and round-off errors from finite register precision.",
            "Absolute, Relative, and Percentage Errors: Absolute error $E_a = |x - x^*|$; Relative error $E_r = \\frac{|x - x^*|}{|x|}$; Percentage error $E_p = E_r \\times 100\\%$.",
            "Significant Digits & Rounding Rules: Number $x^*$ is correct to $n$ significant digits if relative error $E_r < \\frac{1}{2} \\times 10^{1-n}$ or absolute error $E_a \\le \\frac{1}{2} \\times 10^{-m}$.",
            "Taylor Series Truncation Error: Remainder after $n$ terms $R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} (x - x_0)^{n+1}$; Order of accuracy expressed as $\\mathcal{O}(h^p)$ where $h$ is grid spacing.",
            "Error Propagation in Arithmetic Operations: Addition/Subtraction: $E_a(x \\pm y) = E_a(x) + E_a(y)$; Multiplication/Division: $E_r(x \\cdot y) \\approx E_r(x) + E_r(y)$ and $E_r(x/y) \\approx E_r(x) + E_r(y)$.",
            "General Formula for Error Propagation: For multivariable function $u = f(x_1, x_2, \\dots, x_n)$, absolute error bound is $E_a(u) = \\sum_{i=1}^n \\left|\\frac{\\partial f}{\\partial x_i}\\right| E_a(x_i)$.",
            "Catastrophic Cancellation: Severe loss of precision when subtracting two nearly equal numbers; mitigated by rationalization or trigonometric reformulation.",
            "Ill-Conditioned Systems: Numerical problem where small perturbation in input yields unbounded swing in output; Measured by condition number $\\kappa(A) = \\|A\\| \\cdot \\|A^{-1}\\|$.",
            "Numerical Stability of Algorithms: Algorithm is numerically stable if round-off errors introduced at intermediate steps remain bounded and do not grow exponentially.",
            "University Examination Strategy: Always maintain at least 4 to 6 decimal places during intermediate steps and state absolute vs relative bounds explicitly."
        ],
        "keyPoints": [
            "Absolute Error: $E_a = |\\text{True Value} - \\text{Approximate Value}|$.",
            "Relative Error: $E_r = \\frac{E_a}{|\\text{True Value}|}$.",
            "Percentage Error: $E_p = E_r \\times 100\\%$.",
            "General Error Propagation: $E_a(f) = \\sum \\left|\\frac{\\partial f}{\\partial x_i}\\right| \\Delta x_i$.",
            "Condition Number of Matrix: $\\kappa(A) = \\|A\\| \\cdot \\|A^{-1}\\|$; Well-conditioned if $\\kappa \\approx 1$, ill-conditioned if $\\kappa \\gg 1$.",
            "Order of Truncation: $\\mathcal{O}(h^2)$ means halving step size $h$ reduces truncation error by factor of 4.",
            "Catastrophic Cancellation Remedy: Use algebraic identity $\\sqrt{x+1} - \\sqrt{x} = \\frac{1}{\\sqrt{x+1} + \\sqrt{x}}$ instead of direct subtraction.",
            "Round-Off vs Truncation Trade-off: Decreasing step size $h$ reduces truncation error but increases cumulative round-off error.",
            "Significant Digits Rule: If $E_r < \\frac{1}{2} \\times 10^{-k}$, then $x^*$ is accurate to $k$ significant digits.",
            "Exam Tip: In floating point representation, verify whether chop or symmetric round is specified by the problem."
        ]
    },
    "btech-num: roots of equations": {
        "highlights": [
            "Bisection (Bolzano's) Method: Brackets root in $[a, b]$ where $f(a)f(b) < 0$; Next approximation $x_{n+1} = \\frac{a_n + b_n}{2}$; Guaranteed linear convergence with rate $\\frac{1}{2}$ per iteration.",
            "Regula Falsi (False Position) Method: Linear interpolation connecting $(a, f(a))$ and $(b, f(b))$; Iteration formula $x_r = \\frac{a f(b) - b f(a)}{f(b) - f(a)}$; Guarantees convergence but can be slow if one bracket stalls.",
            "Newton-Raphson Method: Tangent line extrapolation $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$; Quadratic convergence with order $p = 2$ ($e_{n+1} \\approx c e_n^2$) provided $f'(x^*) \\ne 0$.",
            "Secant Method: Approximates derivative with finite difference: $x_{n+1} = x_n - f(x_n)\\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$; Superlinear convergence with order $p \\approx 1.618$ (golden ratio).",
            "Fixed-Point Iteration (Successive Approximation): Reformulates $f(x) = 0$ as $x = g(x)$; Converges to root $x^*$ if $|g'(x)| < 1$ in neighborhood of root (Banach fixed-point theorem).",
            "Muller's Method: Fits quadratic parabola through three successive points $(x_0, x_1, x_2)$; Capable of determining complex conjugate roots with convergence rate $p \\approx 1.84$.",
            "Convergence Criteria & Stopping Rules: Terminate when absolute change $|x_{n+1} - x_n| < \\epsilon$ or residual value $|f(x_{n+1})| < \\delta$.",
            "Newton-Raphson Failure Modes: Diverges or cycles endlessly if $f'(x_n) \\approx 0$ (horizontal tangent), near inflection points, or when starting too far from root.",
            "Multiple Roots Acceleration: For root of multiplicity $m > 1$, standard Newton-Raphson drops to linear convergence; Modified formula $x_{n+1} = x_n - m \\frac{f(x_n)}{f'(x_n)}$ restores quadratic speed.",
            "University Examination Strategy: Tabulate iterations neatly with columns for $n$, $x_n$, $f(x_n)$, $f'(x_n)$, and $x_{n+1}$, carrying calculations to 5 significant decimal places."
        ],
        "keyPoints": [
            "Bisection Formula: $x_{n+1} = \\frac{a_n + b_n}{2}$; Iterations required for tolerance $\\epsilon$: $n > \\frac{\\ln(b - a) - \\ln\\epsilon}{\\ln 2}$.",
            "Regula Falsi Formula: $x = \\frac{a f(b) - b f(a)}{f(b) - f(a)}$.",
            "Newton-Raphson Formula: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$.",
            "Newton-Raphson Convergence Order: Quadratic ($p = 2$); Error relation $e_{n+1} \\approx \\frac{f''(x^*)}{2 f'(x^*)} e_n^2$.",
            "Secant Formula: $x_{n+1} = x_n - f(x_n) \\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$; Convergence order $p = 1.618$.",
            "Fixed-Point Convergence Condition: $|g'(x)| < 1$ for all $x$ in interval containing root.",
            "Square Root Evaluation by Newton's: To find $\\sqrt{N}$, solve $x^2 - N = 0$: $x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{N}{x_n}\\right)$.",
            "Reciprocal Evaluation by Newton's: To find $1/N$, solve $1/x - N = 0$: $x_{n+1} = x_n(2 - N x_n)$ (divisionless).",
            "Condition for Real Roots in Polynomial: Descartes' Rule of Signs: Number of positive roots $\\le$ sign changes in coefficients of $P(x)$.",
            "Exam Scoring Tip: Always show the substitution of values into formula for each iteration step before writing final rounded answer."
        ]
    },
    "btech-num: linear systems": {
        "highlights": [
            "Direct vs Iterative Methods: Direct methods (Gauss Elimination, LU Decomposition) yield exact solutions in finite $O(n^3)$ operations; Iterative methods (Jacobi, Gauss-Seidel) converge asymptotically, ideal for sparse matrices.",
            "Gaussian Elimination with Partial Pivoting: Eliminates subdiagonal entries via elementary row operations; Partial pivoting swaps rows so $|a_{kk}| = \\max_{i \\ge k} |a_{ik}|$, suppressing catastrophic division by small numbers.",
            "Gauss-Jordan Elimination: Reduces augmented matrix $[A|B]$ completely to reduced row echelon form $[I|X]$; Obtains solutions without back substitution and computes matrix inverse $A^{-1}$ directly.",
            "LU Decomposition (Doolittle and Crout): Factors $A = LU$; Doolittle sets unit diagonal on $L$ ($l_{ii} = 1$); Crout sets unit diagonal on $U$ ($u_{ii} = 1$); Solves $LY = B$ by forward substitution, then $UX = Y$ by backward substitution.",
            "Cholesky Decomposition: For symmetric positive-definite matrix ($A = A^T, x^T A x > 0$), factors into $A = L L^T$; Requires half the computational operations and storage ($n^3/6$).",
            "Jacobi Iterative Method: Solves $i$-th equation for $x_i^{(k+1)} = \\frac{1}{a_{ii}}\\left(b_i - \\sum_{j \\ne i} a_{ij} x_j^{(k)}\\right)$ simultaneously using only values from previous iteration $k$.",
            "Gauss-Seidel Iterative Method: Updates unknowns sequentially using newly computed values immediately: $x_i^{(k+1)} = \\frac{1}{a_{ii}}\\left(b_i - \\sum_{j < i} a_{ij} x_j^{(k+1)} - \\sum_{j > i} a_{ij} x_j^{(k)}\\right)$; Converges twice as fast as Jacobi.",
            "Strict Diagonal Dominance Criterion: Sufficient condition for convergence of Jacobi and Gauss-Seidel: $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all rows $i = 1, \\dots, n$.",
            "Successive Over-Relaxation (SOR): Accelerates Gauss-Seidel using relaxation factor $\\omega$: $x_i^{(k+1)} = (1 - \\omega) x_i^{(k)} + \\omega x_i^{\\text{GS}}$; Optimal acceleration occurs for $1 < \\omega < 2$.",
            "University Examination Strategy: Rearrange rows to enforce strict diagonal dominance prior to beginning Gauss-Seidel iterations, and tabulate values of $(x_1, x_2, x_3)$ across 4 to 5 iterations."
        ],
        "keyPoints": [
            "Gauss Elimination Complexity: Requires $\\approx \\frac{2}{3}n^3$ arithmetic operations for $n \\times n$ system.",
            "LU Decomposition Setup: Solve $LY = B$ (Forward Substitution) followed by $UX = Y$ (Backward Substitution).",
            "Doolittle Matrix Form: $L$ has 1s on main diagonal ($l_{ii} = 1$), $U$ has computed upper elements.",
            "Cholesky Factorization: $A = L L^T$ strictly for symmetric positive definite matrices; diagonal $l_{ii} = \\sqrt{a_{ii} - \\sum_{k=1}^{i-1} l_{ik}^2}$.",
            "Diagonal Dominance Condition: $|a_{ii}| \\ge \\sum_{j \\ne i} |a_{ij}|$ with strict inequality for at least one row.",
            "Gauss-Seidel vs Jacobi Rate: Gauss-Seidel generally converges roughly twice as fast as Jacobi for diagonally dominant systems.",
            "SOR Parameter Bound: Convergent strictly for $0 < \\omega < 2$; Over-relaxation occurs when $1 < \\omega < 2$.",
            "Matrix Inversion by Gauss-Jordan: Transform $[A | I] \\to [I | A^{-1}]$ using row operations.",
            "Ill-Conditioned System Detection: Small determinant $\\det(A) \\approx 0$ or condition number $\\|A\\| \\cdot \\|A^{-1}\\| \\gg 1$.",
            "Exam Gold Tip: Never start Gauss-Seidel without verifying diagonal dominance; if not dominant, reorder equations first."
        ]
    },
    "btech-num: interpolation & integration": {
        "highlights": [
            "Finite Difference Operators: Forward difference $\\Delta y_0 = y_1 - y_0$; Backward difference $\\nabla y_1 = y_1 - y_0$; Central difference $\\delta y_{1/2} = y_1 - y_0$; Shift operator $E y_0 = y_1 = (1 + \\Delta)y_0$; Differential operator $D = \\frac{1}{h}\\ln(1 + \\Delta)$.",
            "Newton's Forward Interpolation: For equispaced points near start of table: $P_n(x) = y_0 + u \\Delta y_0 + \\frac{u(u-1)}{2!} \\Delta^2 y_0 + \\dots$ where $u = \\frac{x - x_0}{h}$.",
            "Newton's Backward Interpolation: For equispaced points near end of table: $P_n(x) = y_n + v \\nabla y_n + \\frac{v(v+1)}{2!} \\nabla^2 y_n + \\dots$ where $v = \\frac{x - x_n}{h}$.",
            "Lagrange's Interpolation Formula: For unequispaced abscissas: $L(x) = \\sum_{i=0}^n y_i \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}$; Requires no differences table but costly to add additional data points.",
            "Newton's Divided Difference Formula: $f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$; Polynomial $P_n(x) = f[x_0] + (x - x_0)f[x_0, x_1] + (x - x_0)(x - x_1)f[x_0, x_1, x_2] + \\dots$; Applicable to unequally spaced data.",
            "Trapezoidal Rule for Numerical Quadrature: Approximates integrand with linear splines: $\\int_a^b f(x) dx \\approx \\frac{h}{2}[(y_0 + y_n) + 2(y_1 + y_2 + \\dots + y_{n-1})]$; Global truncation error $E_T = -\\frac{(b-a)h^2}{12} f''(\\xi)$, exact for polynomials of degree $\\le 1$.",
            "Simpson's 1/3rd Rule: Approximates integrand with parabolic arcs through 3 points (requires even number of intervals $n$): $\\int_a^b f(x) dx \\approx \\frac{h}{3}[(y_0 + y_n) + 4\\sum y_{\\text{odd}} + 2\\sum y_{\\text{even}}]$; Global error $E = -\\frac{(b-a)h^4}{180} f^{(4)}(\\xi)$, exact for polynomials up to degree 3.",
            "Simpson's 3/8th Rule: Approximates integrand with cubic curves through 4 points (intervals $n$ multiple of 3): $\\int_a^b f(x) dx \\approx \\frac{3h}{8}[(y_0 + y_n) + 3(y_1 + y_2 + y_4 + y_5 + \\dots) + 2(y_3 + y_6 + \\dots)]$.",
            "Boole's and Weddle's Rules: Higher-order Newton-Cotes formulas: Boole's rule ($n = 4$ steps, exact up to degree 5); Weddle's rule ($n = 6$ steps, coefficient vector $\\frac{3h}{10}[1, 5, 1, 6, 1, 5, 1]$).",
            "University Examination Strategy: Always write out the difference table clearly with heading columns $x, y, \\Delta y, \\Delta^2 y, \\Delta^3 y$, identify $u$ or $v$ explicitly, and state quadrature formula before substituting values."
        ],
        "keyPoints": [
            "Operator Equivalence: $E = 1 + \\Delta = (1 - \\nabla)^{-1} = e^{h D}$.",
            "Newton Forward Parameter: $u = \\frac{x - x_0}{h}$ with differences $\\Delta y_0, \\Delta^2 y_0$.",
            "Newton Backward Parameter: $v = \\frac{x - x_n}{h}$ with differences $\\nabla y_n, \\nabla^2 y_n$.",
            "Trapezoidal Formula: $I = \\frac{h}{2}[\\text{First} + \\text{Last} + 2(\\text{Remaining Sum})]$; Error $\\mathcal{O}(h^2)$.",
            "Simpson's 1/3rd Formula: $I = \\frac{h}{3}[(y_0 + y_n) + 4(\\sum y_{\\text{odd}}) + 2(\\sum y_{\\text{even}})]$; Error $\\mathcal{O}(h^4)$; Requires even $n$.",
            "Simpson's 3/8th Formula: $I = \\frac{3h}{8}[(y_0 + y_n) + 3(\\text{non-multiples of 3}) + 2(\\text{multiples of 3})]$; Requires $n$ multiple of 3.",
            "Lagrange Weight Function: $l_i(x) = \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}$ satisfying $l_i(x_j) = \\delta_{ij}$.",
            "Divided Difference Symmetry: $f[x_0, x_1, \\dots, x_k]$ is invariant under arbitrary permutations of its arguments.",
            "Degree of Exactness: Simpson's 1/3rd rule integrates cubic polynomials $ax^3 + bx^2 + cx + d$ exactly due to odd-order error cancellation.",
            "Exam Scoring Tip: State the total number of subintervals $n$ and verify that $n$ is even for Simpson's 1/3rd rule."
        ]
    },
    "btech-num: ode solutions": {
        "highlights": [
            "Initial Value Problem (IVP): First-order ODE $\\frac{dy}{dx} = f(x, y)$ with initial condition $y(x_0) = y_0$; Goal is evaluating $y(x_n)$ at grid points $x_n = x_0 + n h$.",
            "Taylor Series Method: Expands $y(x_0 + h) = y_0 + h y_0' + \\frac{h^2}{2!} y_0'' + \\frac{h^3}{3!} y_0''' + \\dots$; Requires analytical higher total derivatives $y'' = f_x + f_y f$, highly tedious for complex functions.",
            "Picard's Method of Successive Approximations: Integral iteration $y^{(k+1)}(x) = y_0 + \\int_{x_0}^x f(t, y^{(k)}(t)) dt$; Successive approximations converge uniformly to true solution by Picard-Lindelof theorem.",
            "Euler's Forward Method: First-order step along tangent slope: $y_{n+1} = y_n + h f(x_n, y_n)$; Local truncation error $\\mathcal{O}(h^2)$, global error $\\mathcal{O}(h)$; Slow convergence and poor stability.",
            "Modified Euler (Heun's) Method: Predictor-corrector scheme: Predictor $y_{n+1}^* = y_n + h f(x_n, y_n)$; Corrector $y_{n+1} = y_n + \\frac{h}{2}[f(x_n, y_n) + f(x_{n+1}, y_{n+1}^*)]$; Second-order accuracy $\\mathcal{O}(h^2)$.",
            "Runge-Kutta 2nd Order (RK2): Family of methods including midpoint and Heun's; Evaluates slopes at intermediate points to match Taylor expansion up to $h^2$ without computing derivatives.",
            "Runge-Kutta 4th Order (RK4): Standard workhorse: $k_1 = h f(x_n, y_n)$, $k_2 = h f(x_n + \\frac{h}{2}, y_n + \\frac{k_1}{2})$, $k_3 = h f(x_n + \\frac{h}{2}, y_n + \\frac{k_2}{2})$, $k_4 = h f(x_n + h, y_n + k_3)$; Incremental average $y_{n+1} = y_n + \\frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$; Fourth-order accuracy $\\mathcal{O}(h^4)$.",
            "Milne's Predictor-Corrector Method: Multi-step method requiring 4 prior starting values (from RK4): Predictor $y_{n+1}^P = y_{n-3} + \\frac{4h}{3}(2 f_{n-2} - f_{n-1} + 2 f_n)$; Corrector $y_{n+1}^C = y_{n-1} + \\frac{h}{3}(f_{n-1} + 4 f_n + f_{n+1}^P)$.",
            "Adams-Bashforth-Moulton Method: Predictor $y_{n+1}^P = y_n + \\frac{h}{24}(55 f_n - 59 f_{n-1} + 37 f_{n-2} - 9 f_{n-3})$; Corrector $y_{n+1}^C = y_n + \\frac{h}{24}(9 f_{n+1}^P + 19 f_n - 5 f_{n-1} + f_{n-2})$.",
            "University Examination Strategy: Always label $k_1, k_2, k_3, k_4$ distinctly in RK4 problems, evaluate intermediate arguments carefully, and show weighted sum step clearly."
        ],
        "keyPoints": [
            "Euler's Forward Iteration: $y_{n+1} = y_n + h f(x_n, y_n)$; Global error $\\mathcal{O}(h)$.",
            "Modified Euler Corrector: $y_{n+1} = y_n + \\frac{h}{2}[f(x_n, y_n) + f(x_{n+1}, y_{n+1}^*)]$; Global error $\\mathcal{O}(h^2)$.",
            "RK4 Slopes: $k_1 = h f(x_n, y_n), \\; k_2 = h f(x_n + \\frac{h}{2}, y_n + \\frac{k_1}{2}), \\; k_3 = h f(x_n + \\frac{h}{2}, y_n + \\frac{k_2}{2}), \\; k_4 = h f(x_n + h, y_n + k_3)$.",
            "RK4 Update Formula: $y_{n+1} = y_n + \\frac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4)$; Global error $\\mathcal{O}(h^4)$.",
            "Picard Successive Formula: $y^{(k+1)}(x) = y_0 + \\int_{x_0}^x f(t, y^{(k)}(t)) dt$.",
            "Milne's Predictor: $y_{n+1} = y_{n-3} + \\frac{4h}{3}(2f_{n-2} - f_{n-1} + 2f_n)$.",
            "Milne's Corrector: $y_{n+1} = y_{n-1} + \\frac{h}{3}(f_{n-1} + 4f_n + f_{n+1})$.",
            "Single-Step vs Multi-Step: Single-step (RK4) requires only $(x_n, y_n)$ to advance; Multi-step (Milne, Adams) requires multiple past history points.",
            "Stiff Differential Equations: Equations where numerical stability constraints force impractically tiny step sizes $h$; require implicit solvers (e.g. Backward Euler).",
            "Exam Scoring Tip: For Milne or Adams methods, obtain the first 3 starting values using RK4 before switching to multi-step formulas."
        ]
    },

    # -------------------------------------------------------------
    # STATISTICS & PROBABILITY
    # -------------------------------------------------------------
    "btech-stat: descriptive statistics": {
        "highlights": [
            "Measures of Central Tendency: Arithmetic Mean $\\bar{x} = \\frac{1}{n}\\sum x_i$; Median is 50th percentile (robust to extreme outliers); Mode is the highest frequency score.",
            "Measures of Dispersion: Range $R = x_{max} - x_{min}$; Interquartile Range $IQR = Q_3 - Q_1$; Standard deviation $\\sigma = \\sqrt{\\frac{1}{n}\\sum (x_i - \\bar{x})^2}$; Variance $\\sigma^2 = \\frac{1}{n}\\sum x_i^2 - \\bar{x}^2$.",
            "Coefficient of Variation (CV): Relative dispersion metric $CV = \\frac{\\sigma}{\\bar{x}} \\times 100\\%$; Dimensionless ratio used to compare consistency or variability across datasets with differing units or scales.",
            "Raw and Central Moments: $r$-th raw moment $\\mu_r' = \\frac{1}{n}\\sum x_i^r$; $r$-th central moment $\\mu_r = \\frac{1}{n}\\sum (x_i - \\bar{x})^r$; Fundamental relations: $\\mu_2 = \\mu_2' - (\\mu_1')^2 = \\sigma^2$, $\\mu_3 = \\mu_3' - 3\\mu_2'\\mu_1' + 2(\\mu_1')^3$.",
            "Skewness Measures: Quantifies asymmetry of frequency distribution; Karl Pearson's coefficient $S_k = \\frac{\\text{Mean} - \\text{Mode}}{\\sigma} = \\frac{3(\\text{Mean} - \\text{Median})}{\\sigma}$; Moment coefficient $\\beta_1 = \\frac{\\mu_3^2}{\\mu_2^3}$; Positively skewed if tail stretches right ($S_k > 0$).",
            "Kurtosis Measures: Quantifies peakedness and tail weight relative to normal distribution; $\\beta_2 = \\frac{\\mu_4}{\\mu_2^2}$; Excess kurtosis $\\gamma_2 = \\beta_2 - 3$; Mesokurtic ($\\beta_2 = 3$, normal), Leptokurtic ($\\beta_2 > 3$, heavy tails), Platykurtic ($\\beta_2 < 3$, flat peaked).",
            "Empirical Relationship: For moderately skewed unimodal frequency curves: $\\text{Mode} \\approx 3 \\times \\text{Median} - 2 \\times \\text{Mean}$.",
            "Grouped Data Computations: Assumes class midpoint $m_i$; Mean $\\bar{x} = \\frac{\\sum f_i m_i}{N}$; Median $M = L + \\left(\\frac{N/2 - CF}{f}\\right)h$; Mode $M_o = L + \\left(\\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\\right)h$.",
            "Box-and-Whisker Plots: Five-number summary visualization: Minimum, First Quartile ($Q_1$), Median ($Q_2$), Third Quartile ($Q_3$), Maximum; Outliers flagged beyond $Q_1 - 1.5 IQR$ and $Q_3 + 1.5 IQR$.",
            "University Examination Strategy: Construct systematic calculation tables for $x, f, f x, f x^2, f (x-\\bar{x})^3, f (x-\\bar{x})^4$, verifying intermediate sums before substituting into moment formulas."
        ],
        "keyPoints": [
            "Arithmetic Mean Formula: $\\bar{x} = \\frac{\\sum f_i x_i}{N}$.",
            "Standard Deviation Formula: $\\sigma = \\sqrt{\\frac{\\sum f_i x_i^2}{N} - \\bar{x}^2}$.",
            "Coefficient of Variation: $CV = \\frac{\\sigma}{\\bar{x}} \\times 100\\%$.",
            "Empirical Mode Relation: $\\text{Mode} = 3\\,\\text{Median} - 2\\,\\text{Mean}$.",
            "Second Central Moment: $\\mu_2 = \\sigma^2 = \\mu_2' - (\\mu_1')^2$.",
            "Third Central Moment: $\\mu_3 = \\mu_3' - 3\\mu_2'\\mu_1' + 2(\\mu_1')^3$.",
            "Skewness Coefficient: $\\beta_1 = \\frac{\\mu_3^2}{\\mu_2^3}, \\quad \\gamma_1 = \\sqrt{\\beta_1} = \\frac{\\mu_3}{\\sigma^3}$.",
            "Kurtosis Coefficient: $\\beta_2 = \\frac{\\mu_4}{\\mu_2^2}, \\quad \\text{Excess Kurtosis } \\gamma_2 = \\beta_2 - 3$.",
            "Quartile Deviation: $QD = \\frac{Q_3 - Q_1}{2}$.",
            "Exam Tip: Standard normal distribution has skewness $\\gamma_1 = 0$ and kurtosis $\\beta_2 = 3$."
        ]
    },
    "btech-stat: probability distributions": {
        "highlights": [
            "Random Variables and PMF/PDF: Discrete RV characterized by probability mass function $p(x) \\ge 0, \\sum p(x) = 1$; Continuous RV characterized by probability density function $f(x) \\ge 0, \\int_{-\\infty}^\\infty f(x) dx = 1$.",
            "Mathematical Expectation and Variance: Expected value $E[X] = \\sum x p(x)$ or $\\int x f(x) dx$; Variance $\\text{Var}(X) = E[X^2] - (E[X])^2$; Properties: $E[aX + b] = a E[X] + b$ and $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$.",
            "Binomial Distribution: Models $n$ independent Bernoulli trials with constant success probability $p$: $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$; Mean $\\mu = n p$, Variance $\\sigma^2 = n p q$; Strictly $\\text{Mean} > \\text{Variance}$.",
            "Poisson Distribution: Limiting form of Binomial distribution as $n \\to \\infty, p \\to 0$ with $\\lambda = n p$ finite: $P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$; Mean equals variance: $\\mu = \\sigma^2 = \\lambda$.",
            "Normal (Gaussian) Distribution: Continuous bell-shaped distribution $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$; Unimodal, symmetric about mean $\\mu$; Points of inflection at $x = \\mu \\pm \\sigma$.",
            "Standard Normal Variable (Z-Score): Transformation $Z = \\frac{X - \\mu}{\\sigma}$ yields standard normal distribution $N(0, 1)$ with mean 0 and variance 1; Empirical 68-95-99.7 rule.",
            "Exponential Distribution: Models waiting times between consecutive Poisson arrivals: $f(t) = \\lambda e^{-\\lambda t}$ for $t \\ge 0$; Memoryless property $P(T > s + t \\mid T > s) = P(T > t)$; Mean $\\mu = 1/\\lambda$, variance $\\sigma^2 = 1/\\lambda^2$.",
            "Uniform (Rectangular) Distribution: Constant probability over finite interval $[a, b]$: $f(x) = \\frac{1}{b - a}$; Mean $\\mu = \\frac{a + b}{2}$, variance $\\sigma^2 = \\frac{(b - a)^2}{12}$.",
            "Moment Generating Function (MGF): $M_X(t) = E[e^{t X}]$; Generates $r$-th raw moment via $\\mu_r' = \\left.\\frac{d^r M_X(t)}{dt^r}\\right|_{t=0}$; For sum of independent RVs, $M_{X+Y}(t) = M_X(t) \\cdot M_Y(t)$.",
            "University Examination Strategy: Convert normal distribution problems to standard $Z$ form, sketch standard normal bell curve showing shaded probability area, and read cumulative table values accurately."
        ],
        "keyPoints": [
            "Binomial PMF: $P(X = k) = \\binom{n}{k} p^k q^{n-k}$ with $\\mu = n p$ and $\\sigma^2 = n p q$.",
            "Poisson PMF: $P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$ with $\\mu = \\sigma^2 = \\lambda$.",
            "Standard Normal Transformation: $Z = \\frac{X - \\mu}{\\sigma} \\sim N(0, 1)$.",
            "Normal 68-95-99.7 Rule: $P(\\mu - \\sigma < X < \\mu + \\sigma) \\approx 68.27\\%$, $P(\\mu - 2\\sigma < X < \\mu + 2\\sigma) \\approx 95.45\\%$, $P(\\mu - 3\\sigma < X < \\mu + 3\\sigma) \\approx 99.73\\%$.",
            "Exponential PDF: $f(x) = \\lambda e^{-\\lambda x}$ with $\\mu = \\frac{1}{\\lambda}, \\; \\sigma^2 = \\frac{1}{\\lambda^2}$.",
            "Memoryless Property: $P(X > s + t \\mid X > s) = P(X > t)$, uniquely possessed by exponential distribution among continuous models.",
            "Binomial to Poisson Approximation: Valid when $n \\ge 30$ and $p \\le 0.05$ with $\\lambda = n p$.",
            "Binomial to Normal Approximation: Valid when $n p \\ge 5$ and $n(1-p) \\ge 5$ with continuity correction $\\pm 0.5$.",
            "MGF of Normal Distribution: $M_X(t) = e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2}$.",
            "Exam Gold Tip: Always remember continuity correction: for discrete $P(X \\le k)$, evaluate continuous $P(X \\le k + 0.5)$."
        ]
    },
    "btech-stat: hypothesis testing": {
        "highlights": [
            "Null and Alternative Hypotheses: Null hypothesis $H_0$ posits no significant difference or effect; Alternative hypothesis $H_1$ posits specific directional (one-tailed) or non-directional (two-tailed) effect.",
            "Type I and Type II Errors: Type I error ($\\alpha$, producer's risk) is rejecting true $H_0$; Type II error ($\\beta$, consumer's risk) is failing to reject false $H_0$; Power of statistical test is $1 - \\beta$.",
            "Level of Significance and Critical Regions: Significance level $\\alpha$ (typically $5\\%$ or $1\\%$) defines probability of Type I error; Rejection region where test statistic exceeds critical threshold $Z_{\\alpha}$ or $t_{\\alpha}$.",
            "Large Sample Tests for Means (Z-Test): For sample size $n \\ge 30$ from population with known $\\sigma$ or estimated $s$: Single mean $Z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}$; Difference of means $Z = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}}$.",
            "Large Sample Tests for Proportions: Single proportion $Z = \\frac{p - P_0}{\\sqrt{P_0 Q_0 / n}}$; Difference of two proportions $Z = \\frac{p_1 - p_2}{\\sqrt{\\hat{p}\\hat{q}\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}$ where pooled proportion $\\hat{p} = \\frac{n_1 p_1 + n_2 p_2}{n_1 + n_2}$.",
            "Small Sample Tests for Means (Student's t-Test): For $n < 30$ and unknown population variance, assuming normal parent population: $t = \\frac{\\bar{x} - \\mu}{s / \\sqrt{n}}$ with degrees of freedom $\\nu = n - 1$, where sample variance $s^2 = \\frac{1}{n-1}\\sum(x_i - \\bar{x})^2$.",
            "Paired t-Test for Dependent Samples: Evaluates before-and-after experimental treatments on identical subjects: $t = \\frac{\\bar{d}}{s_d / \\sqrt{n}}$ with $\\nu = n - 1$ degrees of freedom, where $d_i = x_i - y_i$.",
            "Snedecor's F-Test for Equality of Two Variances: Test statistic $F = \\frac{s_1^2}{s_2^2}$ with $s_1^2 > s_2^2$; Follows $F$-distribution with $(\\nu_1 = n_1 - 1, \\nu_2 = n_2 - 1)$ degrees of freedom.",
            "Chi-Square ($\\chi^2$) Goodness of Fit Test: Evaluates discrepancy between observed frequencies $O_i$ and expected frequencies $E_i$: $\\chi^2 = \\sum_{i=1}^k \\frac{(O_i - E_i)^2}{E_i}$ with $\\nu = k - 1 - p$ degrees of freedom.",
            "University Examination Strategy: State $H_0$ and $H_1$ clearly in words, calculate degrees of freedom, look up table critical value at specified $\\alpha$, compare $|Z_{\\text{cal}}| > Z_{\\text{tab}}$, and write an unambiguous conclusion."
        ],
        "keyPoints": [
            "Type I Error: $\\alpha = P(\\text{Reject } H_0 \\mid H_0 \\text{ is True})$.",
            "Type II Error: $\\beta = P(\\text{Fail to reject } H_0 \\mid H_0 \\text{ is False})$.",
            "Power of Test: $1 - \\beta = P(\\text{Reject } H_0 \\mid H_0 \\text{ is False})$.",
            "Critical Z Values (Two-Tailed): $Z_{0.05} = 1.96, \\quad Z_{0.01} = 2.576$.",
            "Critical Z Values (One-Tailed): $Z_{0.05} = 1.645, \\quad Z_{0.01} = 2.33$.",
            "Student's t-Statistic: $t = \\frac{\\bar{x} - \\mu}{s / \\sqrt{n}}$ with $\\nu = n - 1$.",
            "Sample Variance (Bessel Corrected): $s^2 = \\frac{1}{n - 1}\\sum (x_i - \\bar{x})^2$.",
            "Chi-Square Test Statistic: $\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}$ with $\\nu = (r - 1)(c - 1)$ for contingency tables.",
            "Yates Continuity Correction: $\\chi^2 = \\frac{N(|ad - bc| - N/2)^2}{(a+b)(c+d)(a+c)(b+d)}$ for $2 \\times 2$ table with small cell frequencies ($E_i < 5$).",
            "Exam Decision Rule: If $|\\text{Calculated Statistic}| > \\text{Critical Value}$, reject $H_0$ at significance level $\\alpha$."
        ]
    },
    "btech-stat: regression": {
        "highlights": [
            "Correlation vs Regression: Correlation evaluates strength and direction of linear association; Regression estimates numerical value of dependent response variable from independent predictor variable.",
            "Karl Pearson's Linear Correlation Coefficient: $r = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sqrt{\\sum(x - \\bar{x})^2 \\sum(y - \\bar{y})^2}} = \\frac{\\text{Cov}(X, Y)}{\\sigma_x \\sigma_y}$; Bounded strictly in range $-1 \\le r \\le +1$.",
            "Spearman's Rank Correlation Coefficient: Evaluates monotonic association on ranked ordinal data: $\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$ where $d_i = R_{xi} - R_{yi}$; Adjusted for tied ranks via tie-correction factors $\\frac{m(m^2-1)}{12}$.",
            "Principle of Least Squares: Fits regression curve by minimizing sum of squared vertical residuals: $S = \\sum_{i=1}^n [y_i - (a + b x_i)]^2 \\to \\text{minimum}$; Derives normal equations via partial derivatives $\\frac{\\partial S}{\\partial a} = 0, \\frac{\\partial S}{\\partial b} = 0$.",
            "Regression Line of Y on X: $y - \\bar{y} = b_{yx}(x - \\bar{x})$ where regression coefficient $b_{yx} = r \\frac{\\sigma_y}{\\sigma_x} = \\frac{n\\sum xy - \\sum x \\sum y}{n\\sum x^2 - (\\sum x)^2}$.",
            "Regression Line of X on Y: $x - \\bar{x} = b_{xy}(y - \\bar{y})$ where regression coefficient $b_{xy} = r \\frac{\\sigma_x}{\\sigma_y} = \\frac{n\\sum xy - \\sum x \\sum y}{n\\sum y^2 - (\\sum y)^2}$.",
            "Properties of Regression Coefficients: Both coefficients have same sign as $r$; Geometric mean equals correlation coefficient: $r = \\pm \\sqrt{b_{yx} b_{xy}}$; If one coefficient exceeds 1, other must be strictly less than 1.",
            "Angle Between Two Regression Lines: $\\tan\\theta = \\left|\\frac{1 - r^2}{r}\\right| \\cdot \\frac{\\sigma_x \\sigma_y}{\\sigma_x^2 + \\sigma_y^2}$; Lines coincide ($\\theta = 0$) when $r = \\pm 1$ (perfect correlation); Lines are perpendicular ($\\theta = 90^\\circ$) when $r = 0$.",
            "Coefficient of Determination ($R^2$): $R^2 = r^2$; Measures proportion of total variance in response variable explained by linear regression model; Unexplained variance is $1 - R^2$.",
            "University Examination Strategy: Always state both normal equations explicitly, solve for regression coefficients $b_{yx}$ and $b_{xy}$, verify $r = \\pm\\sqrt{b_{yx} b_{xy}}$, and substitute target $x$ or $y$ value neatly."
        ],
        "keyPoints": [
            "Pearson Correlation Formula: $r = \\frac{n\\sum xy - \\sum x \\sum y}{\\sqrt{[n\\sum x^2 - (\\sum x)^2][n\\sum y^2 - (\\sum y)^2]}}$.",
            "Spearman Rank Formula: $\\rho = 1 - \\frac{6\\sum d^2}{n(n^2 - 1)}$.",
            "Regression Coefficient $b_{yx}$: $b_{yx} = r \\frac{\\sigma_y}{\\sigma_x} = \\frac{\\text{Cov}(X,Y)}{\\sigma_x^2}$.",
            "Regression Coefficient $b_{xy}$: $b_{xy} = r \\frac{\\sigma_x}{\\sigma_y} = \\frac{\\text{Cov}(X,Y)}{\\sigma_y^2}$.",
            "Geometric Mean Property: $r = \\pm\\sqrt{b_{yx} \\cdot b_{xy}}$ (sign matches $b_{yx}$).",
            "Arithmetic Mean Property: $\\frac{b_{yx} + b_{xy}}{2} \\ge r$ (arithmetic mean exceeds geometric mean).",
            "Intersection Point: The two regression lines always intersect at the bivariate mean $(\\bar{x}, \\bar{y})$.",
            "Coefficient of Determination: $R^2 = r^2 = \\frac{\\text{Explained Variation}}{\\text{Total Variation}}$.",
            "Standard Error of Estimate: $S_{y.x} = \\sigma_y \\sqrt{1 - r^2}$.",
            "Exam Gold Tip: Never predict $x$ from $y$ using the $y$ on $x$ line; always use $x - \\bar{x} = b_{xy}(y - \\bar{y})$."
        ]
    }
}
