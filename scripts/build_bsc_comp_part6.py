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
    if sub == "Mathematics III / Botany III" and num in (4, 5):
        for s in hl + kp:
            assert '$' not in s, f"Dollar sign found in Botany unit: {s}"
    data[(sub, num)] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 11. DIFFERENTIAL & INTEGRAL CALCULUS (B.Sc)
# =========================================================================
add("Differential & Integral Calculus", 1, "Partial Differentiation", [
    "Functions of Several Variables & Limits: Domain $D \\subseteq \\mathbb{R}^n$; Scalar fields $z = f(x, y)$; Simultaneous limits vs repeated / iterated limits; Path-dependent limit evaluation: demonstrating non-existence along $y = m x$ and $y = k x^2$.",
    "Partial Derivatives & Geometric Interpretation: First partial derivatives: $f_x = \\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h, y) - f(x, y)}{h}$ and $f_y = \\frac{\\partial f}{\\partial y}$; Slopes of tangent lines to cross-sectional surface curves; Higher-order partial derivatives ($f_{xx}, f_{yy}, f_{xy}, f_{yx}$).",
    "Clairaut's (Schwarz's) Theorem on Mixed Partials: Equality of mixed partial derivatives: $f_{xy} = f_{yx}$; Holds at $(a, b)$ if both mixed second partial derivatives are continuous on an open disk containing $(a, b)$.",
    "Total Differentials & Tangent Plane Equations: Total differential: $d z = \\frac{\\partial f}{\\partial x} dx + \\frac{\\partial f}{\\partial y} dy$; Linear approximation of surface $z = f(x, y)$ near $(x_0, y_0)$; Tangent plane equation: $z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)$; Normal line equations.",
    "Chain Rule for Multi-Variable Functions: Case 1: $z = f(x, y)$ where $x = x(t), y = y(t) \\implies \\frac{dz}{dt} = \\frac{\\partial z}{\\partial x} \\frac{dx}{dt} + \\frac{\\partial z}{\\partial y} \\frac{dy}{dt}$; Case 2: $z = f(x, y)$ with $x = x(u, v), y = y(u, v) \\implies \\frac{\\partial z}{\\partial u} = \\frac{\\partial z}{\\partial x} \\frac{\\partial x}{\\partial u} + \\frac{\\partial z}{\\partial y} \\frac{\\partial y}{\\partial u}$.",
    "Implicit Differentiation & Jacobians: For implicit relation $F(x, y, z) = 0$: $\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}$ and $\\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}$ (for $F_z \\ne 0$); Jacobian matrix and functional determinant: $J = \\frac{\\partial(u, v)}{\\partial(x, y)} = \\det \\begin{pmatrix} u_x & u_y \\\\ v_x & v_y \\end{pmatrix}$.",
    "Euler's Theorem on Homogeneous Functions: Function $f(x, y)$ is homogeneous of degree $n$ if $f(t x, t y) = t^n f(x, y)$; Euler's relation: $x \\frac{\\partial f}{\\partial x} + y \\frac{\\partial f}{\\partial y} = n f(x, y)$; Second-order generalization: $x^2 f_{xx} + 2 x y f_{xy} + y^2 f_{yy} = n(n - 1) f(x, y)$.",
    "Directional Derivatives & Gradient Vector: Gradient operator: $\\nabla f = \\left( \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\right)$; Directional derivative in unit direction $\\hat{u} = (u_1, u_2)$: $D_{\\hat{u}} f = \\nabla f \\cdot \\hat{u} = |\\nabla f| \\cos\\theta$; Maximum rate of increase occurs in the direction of $\\nabla f$ with magnitude $|\\nabla f|$.",
    "Extrema of Functions of Two Variables: Critical points: $\\nabla f(x_0, y_0) = (0, 0)$; Discriminant $D = f_{xx} f_{yy} - (f_{xy})^2$; Second Derivative Test: If $D > 0$ and $f_{xx} > 0 \\implies$ local minimum; If $D > 0$ and $f_{xx} < 0 \\implies$ local maximum; If $D < 0 \\implies$ saddle point; If $D = 0 \\implies$ test inconclusive.",
    "University Examination Strategy: Verify Euler's theorem for homogeneous expressions, find critical points and classify local extrema and saddle points using the Hessian discriminant, and compute directional derivatives."
], [
    "Clairaut Mixed Partials: Mixed second partial derivatives $f_{xy}$ and $f_{yx}$ are equal provided they are continuous on the domain.",
    "Total Differential Form: $dz = \\frac{\\partial f}{\\partial x} dx + \\frac{\\partial f}{\\partial y} dy$, approximating changes along tangent plane.",
    "Implicit Derivative Ratio: For $F(x, y) = 0$, $\\frac{dy}{dx} = -\\frac{F_x}{F_y}$, provided $F_y \\ne 0$.",
    "Euler Homogeneous Formula: $x \\frac{\\partial f}{\\partial x} + y \\frac{\\partial f}{\\partial y} = n f(x, y)$ for homogeneous functions of degree $n$.",
    "Gradient Maximum Growth: $\\nabla f$ points in the direction of steepest ascent; its Euclidean norm gives the maximum rate of increase.",
    "Directional Derivative: $D_{\\hat{u}} f = \\nabla f \\cdot \\hat{u}$, projecting gradient along unit vector direction.",
    "Hessian Discriminant: $D = f_{xx} f_{yy} - (f_{xy})^2$; positive $D$ indicates extreme value, negative $D$ indicates saddle point.",
    "Saddle Point Condition: Occurs at critical point where $D < 0$; surface curves upward in one direction and downward in another.",
    "Jacobian Transformation: Measures the local volume scaling factor between coordinate systems: $dx dy = |J| du dv$.",
    "Exam Gold Tip: Always remember that if $u = f(x, y)$ is not homogeneous, test whether an algebraic substitution $g(u)$ yields a homogeneous form."
])

add("Differential & Integral Calculus", 2, "Multiple Integrals", [
    "Double Integrals over Rectangular Regions: Partitioning rectangle $R = [a, b] \\times [c, d]$ into subrectangles $\\Delta A_{ij} = \\Delta x_i \\Delta y_j$; Double Riemann sum $\\iint_R f(x, y) dA = \\lim_{|P| \\to 0} \\sum \\sum f(x_{ij}^*, y_{ij}^*) \\Delta A_{ij}$; Volume under surface $z = f(x, y) \\ge 0$.",
    "Fubini's Theorem on Iterated Integrals: If $f(x, y)$ is continuous on $R = [a, b] \\times [c, d]$, then double integral equals iterated integrals in either order: $\\iint_R f(x, y) dA = \\int_a^b \\left( \\int_c^d f(x, y) dy \\right) dx = \\int_c^d \\left( \\int_a^b f(x, y) dx \\right) dy$.",
    "Double Integrals over General Bounded Regions: Type I region: $D = \\{(x, y) : a \\le x \\le b, g_1(x) \\le y \\le g_2(x)\\} \\implies \\int_a^b \\int_{g_1(x)}^{g_2(x)} f(x, y) dy dx$; Type II region: $c \\le y \\le d, h_1(y) \\le x \\le h_2(y) \\implies \\int_c^d \\int_{h_1(y)}^{h_2(y)} f(x, y) dx dy$.",
    "Reversal of Order of Integration: Sketching integration region $D$; Converting Type I limits to Type II limits (or vice versa); Essential technique when inner integral cannot be evaluated in elementary functions (e.g. $\\int_0^1 \\int_y^1 e^{x^2} dx dy$).",
    "Double Integrals in Polar Coordinates: Coordinate transformation: $x = r \\cos\\theta$, $y = r \\sin\\theta$; Jacobian determinant $J = r$; Area element $dA = r \\, dr \\, d\\theta$; Integral transformation: $\\iint_D f(x, y) dx dy = \\iint_D f(r\\cos\\theta, r\\sin\\theta) r \\, dr \\, d\\theta$; Evaluating Gaussian integral $\\int_{-\\infty}^\\infty e^{-x^2} dx = \\sqrt{\\pi}$.",
    "Triple Integrals in Cartesian Coordinates: Integrating scalar fields over 3D domain $E \\subset \\mathbb{R}^3$: $\\iiint_E f(x, y, z) dV = \\int_a^b \\int_{u_1(x)}^{u_2(x)} \\int_{v_1(x, y)}^{v_2(x, y)} f(x, y, z) dz dy dx$; Calculating volume $V = \\iiint_E 1 dV$, mass $M = \\iiint_E \\rho(x, y, z) dV$.",
    "Cylindrical Coordinates Transformation: Spatial coordinates: $x = r \\cos\\theta$, $y = r \\sin\\theta$, $z = z$; Jacobian determinant $J = r$; Volume element $dV = r \\, dr \\, d\\theta \\, dz$; Optimal for geometries displaying rotational symmetry about the z-axis (cylinders, cones, paraboloids).",
    "Spherical Polar Coordinates Transformation: Coordinate transformation: $x = \\rho \\sin\\phi \\cos\\theta$, $y = \\rho \\sin\\phi \\sin\\theta$, $z = \\rho \\cos\\phi$; Range: $\\rho \\ge 0$, $0 \\le \\phi \\le \\pi$ (colatitude), $0 \\le \\theta < 2\\pi$ (azimuth); Jacobian determinant $J = \\rho^2 \\sin\\phi$; Volume element $dV = \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$.",
    "Center of Mass & Moments of Inertia: Moments about coordinate planes: $M_{yz} = \\iiint x \\rho dV$; Center of mass coordinates: $\\bar{x} = M_{yz} / M, \\bar{y} = M_{xz} / M, \\bar{z} = M_{xy} / M$; Moments of inertia about coordinate axes: $I_z = \\iiint (x^2 + y^2) \\rho dV$.",
    "University Examination Strategy: Change the order of integration for a given double integral and evaluate, evaluate a multiple integral using polar or spherical coordinates, and compute the volume of a solid bounded by intersecting surfaces."
], [
    "Fubini Order Invariance: Double integration order across rectangular regions is interchangeable when integrand is continuous.",
    "Polar Area Element: $dA = r \\, dr \\, d\\theta$; the factor $r$ arises from the Jacobian determinant of polar transformation.",
    "Reversal of Order Necessity: Allows integrating non-elementary functions like $\\int \\int \\sin(x^2) dx dy$ by changing to $dy dx$.",
    "Gaussian Integral Proof: Evaluates $I^2 = \\int_0^\\infty \\int_0^\\infty e^{-(x^2+y^2)} dx dy = \\int_0^{\\pi/2} \\int_0^\\infty e^{-r^2} r dr d\\theta = \\pi/4$.",
    "Cylindrical Volume Element: $dV = r \\, dr \\, d\\theta \\, dz$, extending polar coordinates along the vertical $z$ axis.",
    "Spherical Volume Element: $dV = \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$, incorporating colatitude $\\phi$ and longitude $\\theta$.",
    "Spherical Angle Conventions: Azimuth $\\theta \\in [0, 2\\pi]$; Colatitude $\\phi \\in [0, \\pi]$ measured downward from positive z-axis.",
    "Centroid Coordinates: $\\bar{x} = \\frac{1}{V} \\iiint x dV$; represents geometric center for uniform constant density.",
    "Moment of Inertia Radius: $I_z = \\iiint r^2 dM = \\iiint (x^2 + y^2) \\rho dV$, measuring rotational inertia around z-axis.",
    "Exam Gold Tip: Always sketch the two-dimensional cross-section of the integration domain before reversing the order of integration."
])

add("Differential & Integral Calculus", 3, "Vector Calculus", [
    "Vector Differential Calculus Operators: Del vector differential operator: $\\nabla = \\mathbf{i} \\frac{\\partial}{\\partial x} + \\mathbf{j} \\frac{\\partial}{\\partial y} + \\mathbf{k} \\frac{\\partial}{\\partial z}$; Operating on scalar fields $\\phi(x, y, z)$ to produce gradient vector $\\nabla \\phi$; Operating on vector fields $\\mathbf{F} = (P, Q, R)$.",
    "Divergence & Flux Density: Divergence of vector field $\\mathbf{F}$: $\\text{div } \\mathbf{F} = \\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$; Scalar field measuring net volumetric source rate; Solenoidal vector field definition: $\\nabla \\cdot \\mathbf{F} = 0$.",
    "Curl & Rotational Circulation Density: Curl of vector field: $\\text{curl } \\mathbf{F} = \\nabla \\times \\mathbf{F} = \\det \\begin{pmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\partial/\\partial x & \\partial/\\partial y & \\partial/\\partial z \\\\ P & Q & R \\end{pmatrix}$; Vector field measuring microscopic rotational vorticity; Irrotational field definition: $\\nabla \\times \\mathbf{F} = \\mathbf{0}$.",
    "Vector Identities & Second-Order Operators: Laplacian operator: $\\nabla^2 \\phi = \\nabla \\cdot (\\nabla \\phi) = \\frac{\\partial^2 \\phi}{\\partial x^2} + \\frac{\\partial^2 \\phi}{\\partial y^2} + \\frac{\\partial^2 \\phi}{\\partial z^2}$; Fundamental null identities: (1) $\\nabla \\times (\\nabla \\phi) = \\mathbf{0}$ (curl of gradient is always zero); (2) $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$ (divergence of curl is always zero).",
    "Conservative Vector Fields & Potential Functions: $\\mathbf{F}$ is conservative if $\\mathbf{F} = \\nabla \\phi$ for scalar potential $\\phi$; Equivalent conditions: (1) $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ on simply connected domain; (2) Path independence of line integrals: $\\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\phi(B) - \\phi(A)$; (3) Closed loop work $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 0$.",
    "Line Integrals in Vector Fields: Work done by force $\\mathbf{F}$ along curve $C$: $W = \\int_C \\mathbf{F} \\cdot d\\mathbf{r} = \\int_a^b [P x'(t) + Q y'(t) + R z'(t)] dt$; Circulation of fluid along closed circuit.",
    "Green's Theorem in the Plane: Connects planar line integral around positively oriented simple closed curve $C$ to double integral over enclosed region $D$: $\\oint_C (P dx + Q dy) = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dA$; Area computation via line integral: $A = \\frac{1}{2} \\oint_C (x dy - y dx)$.",
    "Stokes' Theorem in Spatial Domains: Generalization of Green's theorem to 3D surfaces: Circulation of $\\mathbf{F}$ around boundary curve $C = \\partial S$ equals surface flux of $\\text{curl } \\mathbf{F}$: $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot \\hat{n} \\, dS$; Right-hand orientation rule.",
    "Gauss's Divergence Theorem: Relates outward flux of vector field across closed surface $S = \\partial E$ to volume integral of divergence: $\\iint_S \\mathbf{F} \\cdot \\hat{n} \\, dS = \\iiint_E (\\nabla \\cdot \\mathbf{F}) \\, dV$; Physical interpretation: Total surface outflow equals net internal source generation.",
    "University Examination Strategy: Verify Green's theorem in the plane for a circular or polynomial boundary, verify Stokes' theorem on an open paraboloid/hemisphere, and apply Gauss's divergence theorem to evaluate flux across a closed cylinder or sphere."
], [
    "Solenoidal Vector Field: Vector field $\\mathbf{F}$ having zero divergence everywhere: $\\nabla \\cdot \\mathbf{F} = 0$; represents incompressible flow.",
    "Irrotational Vector Field: Field having zero curl everywhere: $\\nabla \\times \\mathbf{F} = \\mathbf{0}$; guarantees existence of scalar potential $\\phi$.",
    "Curl of Gradient Null Identity: $\\nabla \\times (\\nabla \\phi) = \\mathbf{0}$ identically for all twice continuously differentiable scalar fields.",
    "Divergence of Curl Identity: $\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$ identically for all twice continuously differentiable vector fields.",
    "Green's Theorem Formula: $\\oint_C (P dx + Q dy) = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dA$, equating circulation to enclosed curl.",
    "Planar Area via Line Integral: $A = \\frac{1}{2} \\oint_C (x dy - y dx)$, applied in planimeter mechanical measuring devices.",
    "Stokes' Theorem Equality: $\\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$, connecting line and surface integrals.",
    "Gauss Divergence Theorem: $\\iint_{\\partial V} \\mathbf{F} \\cdot \\hat{n} dS = \\iiint_V (\\nabla \\cdot \\mathbf{F}) dV$, converting surface flux to volume integral.",
    "Scalar Potential Recovery: Find $\\phi$ such that $\\frac{\\partial \\phi}{\\partial x} = P, \\frac{\\partial \\phi}{\\partial y} = Q, \\frac{\\partial \\phi}{\\partial z} = R$ via successive partial integrations.",
    "Exam Scoring Tip: When evaluating surface integrals over closed boundaries, always check if Gauss's Divergence Theorem simplifies the calculation."
])

add("Differential & Integral Calculus", 4, "Applications", [
    "Curvature & Radius of Curvature of Plane Curves: Rate of change of tangent direction with arc length: $\\kappa = \\left| \\frac{d\\psi}{ds} \\right|$; Cartesian formulation for $y = f(x)$: $\\kappa = \\frac{|y''|}{(1 + y'^2)^{3/2}}$; Radius of curvature $\\rho = \\frac{1}{\\kappa} = \\frac{(1 + y'^2)^{3/2}}{|y''|}$; Center of curvature coordinates $(\\alpha, \\beta)$.",
    "Radius of Curvature in Parametric & Polar Forms: Parametric form $x = x(t), y = y(t)$: $\\rho = \\frac{(\\dot{x}^2 + \\dot{y}^2)^{3/2}}{|\\dot{x} \\ddot{y} - \\dot{y} \\ddot{x}|}$; Polar form $r = f(\\theta)$: $\\rho = \\frac{(r^2 + r'^2)^{3/2}}{|r^2 + 2 r'^2 - r r''|}$.",
    "Evolutes & Involutes: Evolute: Locus of centers of curvature of a given curve; Envelope of the family of normal lines to the curve; Involute: Curve traced by end of taut string unwound from evolute.",
    "Envelopes of Families of Curves: Family of curves $f(x, y, c) = 0$ with parameter $c$; Envelope obtained by eliminating parameter $c$ between equations: $f(x, y, c) = 0$ and $\\frac{\\partial f}{\\partial c}(x, y, c) = 0$.",
    "Asymptotes of Algebraic Curves: Rectilinear lines approached asymptotically by curves as point moves to infinity; Asymptotes parallel to coordinate axes (equating coefficients of highest powers of $x$ and $y$ to zero); Oblique asymptotes $y = m x + c$ via $\\phi_n(m) = 0$ and $c \\phi'_n(m) + \\phi_{n-1}(m) = 0$.",
    "Arc Length Rectification of Curves: Arc length differential: $ds = \\sqrt{dx^2 + dy^2}$; Cartesian form: $L = \\int_a^b \\sqrt{1 + (y')^2} dx$; Parametric form: $L = \\int_{t_1}^{t_2} \\sqrt{\\dot{x}^2 + \\dot{y}^2} dt$; Polar form: $L = \\int_{\\alpha}^\\beta \\sqrt{r^2 + (r')^2} d\\theta$.",
    "Areas of Surfaces of Revolution: Surface area generated by revolving curve $y = f(x)$ around x-axis: $S = 2\\pi \\int_a^b y \\, ds = 2\\pi \\int_a^b y \\sqrt{1 + (y')^2} dx$; Revolved around y-axis: $S = 2\\pi \\int x \\, ds$.",
    "Volumes of Solids of Revolution: Disk / Washer method: Revolved around x-axis: $V = \\pi \\int_a^b [f(x)]^2 dx$; Washer cross-section: $V = \\pi \\int (R^2 - r^2) dx$; Cylindrical Shell method: $V = 2\\pi \\int_a^b x f(x) dx$.",
    "Pappus-Guldinus Theorems on Revolution: Theorem 1: Area of surface of revolution equals arc length of generating curve multiplied by distance traveled by its centroid: $S = 2\\pi \\bar{y} L$; Theorem 2: Volume of solid of revolution equals cross-sectional generating area multiplied by distance traveled by its centroid: $V = 2\\pi \\bar{y} A$.",
    "University Examination Strategy: Find the radius of curvature for cycloid or catenary curves, find the envelope of a one-parameter family of straight lines, and compute the surface area and volume of an anchor ring (torus) using Pappus's theorems."
], [
    "Curvature Formula: $\\kappa = \\frac{|y''|}{(1 + y'^2)^{3/2}}$, measuring the instantaneous turning rate of the unit tangent vector.",
    "Radius of Curvature Reciprocal: $\\rho = 1/\\kappa$; approaches infinity for straight lines ($y'' = 0$) and equals radius $R$ for circles.",
    "Center of Curvature: $\\alpha = x - \\frac{y'(1 + y'^2)}{y''}$ and $\\beta = y + \\frac{1 + y'^2}{y''}$, defining the evolute locus.",
    "Envelope Elimination: Eliminate parameter $c$ between $f(x, y, c) = 0$ and $\\frac{\\partial f}{\\partial c} = 0$.",
    "Oblique Asymptote Slope: $m$ determined by solving highest degree homogeneous polynomial $\\phi_n(m) = 0$.",
    "Cartesian Arc Length: $L = \\int_a^b \\sqrt{1 + (y')^2} dx$, integrating the line element $ds$.",
    "Surface of Revolution Formula: $S = 2\\pi \\int y \\, ds$, rotating planar arc length around the coordinate axis.",
    "Disk Method Volume: $V = \\pi \\int_a^b y^2 dx$, summing infinitesimally thin circular cross-sectional disks.",
    "Pappus First Theorem: $S = 2\\pi \\bar{y} L$, computing surface area directly from curve centroid trajectory.",
    "Exam Gold Tip: For curves given in polar coordinates $r = f(\\theta)$, use $ds = \\sqrt{r^2 + (dr/d\\theta)^2} d\\theta$ for arc length."
])

add("Differential & Integral Calculus", 5, "Improper Integrals", [
    "Classification of Improper Integrals: Integrals violating standard Riemann boundedness; Type 1: Infinite integration intervals ($[a, \\infty)$, $(-\\infty, b]$, $(-\\infty, \\infty)$); Type 2: Integrand becomes unbounded (infinite discontinuities within domain); Mixed Type 3.",
    "Convergence Definition for Type 1 Integrals: $\\int_a^\\infty f(x) dx = \\lim_{t \\to \\infty} \\int_a^t f(x) dx$; Converges if limit exists and is finite; Diverges if limit is infinite or does not exist; Bilateral improper integral: $\\int_{-\\infty}^\\infty f(x) dx = \\int_{-\\infty}^c f dx + \\int_c^\\infty f dx$ (both must converge independently).",
    "Cauchy Principal Value (P.V.): Symmetric limit: $\\text{P.V.} \\int_{-\\infty}^\\infty f(x) dx = \\lim_{R \\to \\infty} \\int_{-R}^R f(x) dx$; Principal value may exist even when standard improper integral diverges (e.g. $\\text{P.V.} \\int_{-\\infty}^\\infty x \\, dx = 0$).",
    "Convergence Definition for Type 2 Integrals: Unbounded at upper limit $b$: $\\int_a^b f(x) dx = \\lim_{t \\to b^-} \\int_a^t f(x) dx$; Unbounded at lower limit $a$: $\\lim_{t \\to a^+} \\int_t^b f(x) dx$; Unbounded at interior point $c \\in (a, b)$: Summing limits approaching from left and right.",
    "Standard p-Integral Benchmarks: Type 1 benchmark: $\\int_1^\\infty \\frac{1}{x^p} dx$ converges iff $p > 1$; Type 2 benchmark: $\\int_0^1 \\frac{1}{x^p} dx$ converges iff $p < 1$; Contrast between infinite interval and singular origin behavior.",
    "Comparison Tests for Improper Integrals: Direct Comparison Test: If $0 \\le f(x) \\le g(x)$ on $[a, \\infty)$, convergence of $\\int g dx$ implies convergence of $\\int f dx$; Limit Comparison Test: If $\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = L \\in (0, \\infty)$, both integrals share identical convergence behavior.",
    "Absolute & Conditional Convergence & Dirichlet's Test: Absolute convergence $\\int_a^\\infty |f(x)| dx < \\infty$ implies convergence of $\\int_a^\\infty f(x) dx$; Dirichlet's Test for improper integrals: $\\int_a^\\infty f(x) g(x) dx$ converges if $\\int_a^t f(x) dx$ is bounded and $g(x)$ decreases monotonically to 0.",
    "Euler's Gamma Function Definition & Properties: Improper integral: $\\Gamma(n) = \\int_0^\\infty x^{n-1} e^{-x} dx$ (converges for $n > 0$); Recurrence relation: $\\Gamma(n+1) = n \\Gamma(n)$; Factorial identity for positive integers: $\\Gamma(n+1) = n!$; Special value: $\\Gamma(1/2) = \\sqrt{\\pi}$.",
    "Euler's Beta Function & Inter-Relationship: Beta function: $B(m, n) = \\int_0^1 x^{m-1} (1 - x)^{n-1} dx$ (converges for $m > 0, n > 0$); Trigonometric form: $B(m, n) = 2 \\int_0^{\\pi/2} \\sin^{2m-1}\\theta \\cos^{2n-1}\\theta \\, d\\theta$; Fundamental connecting relation: $B(m, n) = \\frac{\\Gamma(m) \\Gamma(n)}{\\Gamma(m + n)}$.",
    "University Examination Strategy: Test convergence of improper integrals using Limit Comparison and Dirichlet tests, prove that $\\Gamma(1/2) = \\sqrt{\\pi}$, derive the fundamental relation $B(m, n) = \\frac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}$, and evaluate definite integrals using Beta and Gamma functions."
], [
    "Type 1 Infinite Interval: Integral converges iff finite limit exists as upper or lower integration bound approaches infinity.",
    "Type 2 Unbounded Integrand: Evaluated as a one-sided limit approaching the singular point of infinite discontinuity.",
    "P-Integral Divergence Duality: $\\int_1^\\infty x^{-p} dx$ converges for $p > 1$; but $\\int_0^1 x^{-p} dx$ converges for $p < 1$.",
    "Cauchy Principal Value Trap: P.V. evaluates symmetric cancellations, but standard improper integral requires independent limit convergence.",
    "Gamma Function Recurrence: $\\Gamma(n+1) = n \\Gamma(n)$, generalizing the factorial function across continuous positive real numbers.",
    "Gamma Half-Integer Value: $\\Gamma(1/2) = \\sqrt{\\pi}$, evaluated via substitution into the Gaussian probability integral.",
    "Beta Trigonometric Form: $B(m, n) = 2 \\int_0^{\\pi/2} \\sin^{2m-1}\\theta \\cos^{2n-1}\\theta \\, d\\theta$, simplifying trigonometric evaluations.",
    "Beta-Gamma Identity: $B(m, n) = \\frac{\\Gamma(m) \\Gamma(n)}{\\Gamma(m + n)}$, linking single and double integral formulations.",
    "Dirichlet Improper Integral Test: Guarantees convergence of oscillatory integrals such as the Dirichlet integral $\\int_0^\\infty \\frac{\\sin x}{x} dx = \\frac{\\pi}{2}$.",
    "Exam Scoring Tip: Whenever evaluating $\\int_0^{\\pi/2} \\sin^p\\theta \\cos^q\\theta \\, d\\theta$, immediately apply $\\frac{1}{2} B\\left(\\frac{p+1}{2}, \\frac{q+1}{2}\\right) = \\frac{\\Gamma((p+1)/2)\\Gamma((q+1)/2)}{2\\Gamma((p+q+2)/2)}$."
])

# =========================================================================
# 12. MATHEMATICS III / BOTANY III (B.Sc)
# =========================================================================
add("Mathematics III / Botany III", 1, "Real Analysis", [
    "Foundations of Real Number System in Analysis: Algebraic and order completeness of the real field $\\mathbb{R}$; Infimum and supremum concepts; Upper bounds and the Least Upper Bound (LUB) property; Archimedean property ensuring natural numbers are unbounded in $\\mathbb{R}$.",
    "Neighborhoods & Point Set Topology of R: Open intervals and $\\epsilon$-neighborhoods $N_\\epsilon(c) = (c - \\epsilon, c + \\epsilon)$; Interior points and open sets; Limit points (accumulation points) of a set; Closed sets containing all their limit points; Bolzano-Weierstrass theorem for sets.",
    "Countability of Sets: One-to-one correspondence (bijection) with natural numbers $\\mathbb{N}$; Countable sets (integers $\\mathbb{Z}$, rationals $\\mathbb{Q}$); Uncountability of the set of real numbers $\\mathbb{R}$ via Cantor's diagonal argument; Open interval $(0, 1)$ is uncountably infinite.",
    "Functions & Bounded Variations: Total variation of function $f$ on $[a, b]$; Partition $P = \\{x_0, x_1, \\dots, x_n\\}$; $V(f, P) = \\sum |f(x_i) - f(x_{i-1})|$; Total variation $V_a^b(f) = \\sup_P V(f, P)$; Functions of bounded variation (BV) expressed as difference of two monotonic functions (Jordan decomposition).",
    "Uniform Convergence of Sequences of Functions: Pointwise convergence: $f_n(x) \\to f(x)$ for each $x \\in D$; Uniform convergence: $\\sup_{x \\in D} |f_n(x) - f(x)| \\to 0$ as $n \\to \\infty$; Cauchy criterion for uniform convergence.",
    "Weierstrass M-Test for Series of Functions: Let $\\sum f_n(x)$ be a series of functions on $D$; If $|f_n(x)| \\le M_n$ for all $x \\in D$ and $\\sum M_n$ converges, then $\\sum f_n(x)$ converges uniformly and absolutely on $D$.",
    "Preservation Theorems under Uniform Convergence: Uniform limit of continuous functions is continuous; Term-by-term integration: $\\lim_{n \\to \\infty} \\int_a^b f_n(x) dx = \\int_a^b (\\lim f_n(x)) dx$; Term-by-term differentiation conditions.",
    "Power Series & Radius of Convergence: Series $\\sum_{n=0}^\\infty a_n (x - c)^n$; Cauchy-Hadamard formula for radius of convergence $R$: $\\frac{1}{R} = \\limsup_{n \\to \\infty} \\sqrt[n]{|a_n|}$; Interval of convergence $(c - R, c + R)$; Uniform convergence on compact subintervals.",
    "Abel's & Tauberian Theorems for Power Series: Abel's limit theorem: If $\\sum a_n$ converges to $S$, then $\\lim_{x \\to 1^-} \\sum a_n x^n = S$; Continuity of power series up to interval endpoints.",
    "University Examination Strategy: Prove Cantor's diagonal argument showing $\\mathbb{R}$ is uncountable, apply the Weierstrass M-Test to prove uniform convergence of a trigonometric series, and compute the radius of convergence using the Cauchy-Hadamard formula."
], [
    "Cantor Diagonal Argument: Proves the real interval $[0, 1]$ cannot be put into one-to-one correspondence with the set of natural numbers.",
    "Weierstrass M-Test Power: Domination by convergent numeric series $\\sum M_n$ guarantees both uniform and absolute convergence on domain.",
    "Uniform Continuity Exchange: Uniform convergence allows safely interchanging limits with integrals: $\\lim \\int f_n = \\int \\lim f_n$.",
    "Cauchy-Hadamard Reciprocal: $\\frac{1}{R} = \\limsup_{n \\to \\infty} |a_n|^{1/n}$, determining exact radius of power series convergence.",
    "Jordan Decomposition Theorem: Any function of bounded variation can be written as the difference of two bounded monotonically increasing functions.",
    "Pointwise vs Uniform Gap: Pointwise limit of continuous functions can produce a discontinuous limit function (e.g. $x^n$ on $[0, 1]$).",
    "Abel Endpoint Theorem: Establishes continuity of power series sum functions at boundary endpoints where the series converges.",
    "Archimedean Density: Between any two distinct real numbers, there exists both a rational number and an irrational number.",
    "Accumulation Point Characterization: $p$ is a limit point of set $S$ iff every deleted neighborhood of $p$ contains at least one point of $S$.",
    "Exam Gold Tip: Always remember that the Weierstrass M-test is a sufficient condition, not a necessary condition, for uniform convergence."
])

add("Mathematics III / Botany III", 2, "Sequences", [
    "Metric Properties of Real Sequences: Real sequence as a mapping $x: \\mathbb{N} \\to \\mathbb{R}$; Convergence in Euclidean metric: $d(x_n, L) = |x_n - L| < \\epsilon$ for $n \\ge N$; Uniqueness of the limit in Hausdorff metric spaces.",
    "Algebraic Limit Laws for Sequences: Limit of linear combinations: $\\lim (\\alpha x_n + \\beta y_n) = \\alpha \\lim x_n + \\beta \\lim y_n$; Multiplicative and quotient limit properties; Preservation of non-strict inequalities: $x_n \\le y_n \\implies \\lim x_n \\le \\lim y_n$.",
    "Squeeze Principle & Magnitude Inequalities: Sandwich theorem: $u_n \\le x_n \\le v_n$ with $\\lim u_n = \\lim v_n = L \\implies \\lim x_n = L$; Product of bounded sequence and null sequence is a null sequence: $|x_n| \\le M$ and $y_n \\to 0 \\implies x_n y_n \\to 0$.",
    "Monotonicity & Boundedness Criteria: Non-decreasing sequences bounded above converge to their least upper bound; Non-increasing sequences bounded below converge to their greatest lower bound; Monotone sequence $(1 + 1/n)^n$ converging monotonically to Euler's constant $e$.",
    "Nested Interval Property (Cantor's Theorem): Let $I_n = [a_n, b_n]$ be a sequence of closed bounded intervals such that $I_{n+1} \\subseteq I_n$ for all $n$, and length $(b_n - a_n) \\to 0$; Then the intersection $\\bigcap_{n=1}^\\infty I_n$ contains exactly one unique real point $\\xi$.",
    "Bolzano-Weierstrass Theorem for Sequences: Every bounded infinite sequence in $\\mathbb{R}$ possesses at least one convergent subsequence; Proof via bisection and the nested interval property.",
    "Cauchy Sequences & Intrinsic Completeness: Definition: $\\forall \\epsilon > 0, \\exists N$ such that $|x_n - x_m| < \\epsilon$ for all $n, m \\ge N$; Every convergent sequence is Cauchy; In $\\mathbb{R}$, every Cauchy sequence converges (metric completeness of the real line).",
    "Cesàro Summability & Arithmetic Means: Cesàro mean sequence: $\\sigma_n = \\frac{x_1 + x_2 + \\dots + x_n}{n}$; Cauchy's First Theorem on Limits: If $x_n \\to L$, then $\\sigma_n \\to L$; Converse is false (e.g. oscillating sequence $(-1)^n$ has Cesàro mean 0 but no limit).",
    "Cauchy's Second Theorem on Limits: Let $x_n > 0$ for all $n$; If $\\lim_{n \\to \\infty} \\frac{x_{n+1}}{x_n} = L$, then $\\lim_{n \\to \\infty} \\sqrt[n]{x_n} = L$; Powerful tool for evaluating geometric and factorial root limits.",
    "University Examination Strategy: Prove that every Cauchy sequence in $\\mathbb{R}$ is bounded, prove Cauchy's First Theorem on arithmetic means, and evaluate limits of roots using Cauchy's Second Theorem."
], [
    "Null Sequence Multiplier: If sequence $(x_n)$ is bounded and sequence $(y_n)$ converges to 0, then $(x_n y_n)$ converges to 0.",
    "Nested Interval Property: Infinite sequence of shrinking closed nested intervals intersects at a non-empty point; fails for open intervals.",
    "Euler Number Limit: Sequence $e_n = (1 + 1/n)^n$ is strictly increasing and bounded above by 3, converging to irrational $e \\approx 2.71828$.",
    "Cesàro Arithmetic Mean: $\\lim x_n = L$ guarantees $\\lim \\frac{x_1 + \\dots + x_n}{n} = L$, smoothing out bounded oscillations.",
    "Cauchy Second Theorem: $\\lim \\sqrt[n]{x_n} = \\lim \\frac{x_{n+1}}{x_n}$ provided the ratio limit exists for positive sequences.",
    "Subsequential Limit Points: Set of all subsequential limits of a bounded sequence forms a closed, bounded subset of $\\mathbb{R}$.",
    "Completeness Equivalence: The Least Upper Bound property, Bolzano-Weierstrass theorem, and Cauchy completeness are mathematically equivalent in $\\mathbb{R}$.",
    "Strict Monotonicity Induction: Proving $x_{n+1} - x_n > 0$ via mathematical induction establishes strict increasing monotonicity.",
    "Epsilon Half Technique: Used in proving product rule: splitting $|x_n y_n - L M| \\le |x_n||y_n - M| + |M||x_n - L| < \\epsilon$.",
    "Exam Scoring Tip: When evaluating $\\lim \\sqrt[n]{n}$, apply Cauchy's Second Theorem to sequence $x_n = n$: ratio $\\frac{n+1}{n} \\to 1 \\implies \\sqrt[n]{n} \\to 1$."
])

add("Mathematics III / Botany III", 3, "Series", [
    "Infinite Series & Sequence of Partial Sums: Series $\\sum_{n=1}^\\infty u_n$; Partial sum sequence $s_n = u_1 + \\dots + u_n$; Series converges iff $(s_n)$ converges to finite limit; Cauchy criterion for series: $\\forall \\epsilon > 0, \\exists N$ such that $|\\sum_{k=m+1}^n u_k| < \\epsilon$ for all $n > m \\ge N$.",
    "Divergence Criterion & Linearity of Series: If $\\lim u_n \\ne 0$, series diverges; Linearity: $\\sum (a u_n + b v_n) = a \\sum u_n + b \\sum v_n$ for convergent series; Grouping and associativity in absolutely convergent series.",
    "Positive-Term Series & Comparison Tests: For $u_n \\ge 0$, partial sums $s_n$ are monotonically increasing; Converges iff $s_n$ is bounded above; Direct comparison with convergent geometric or $p$-series; Limit comparison quotient test.",
    "Cauchy's Condensation Test: Let $u_n$ be a non-negative, monotonically decreasing sequence; Then series $\\sum u_n$ converges if and only if condensed series $\\sum_{k=0}^\\infty 2^k u_{2^k}$ converges; Proving divergence of harmonic series and $p$-series convergence for $p > 1$.",
    "Raabe's Test for Critical Ratio Cases: Applied when standard D'Alembert ratio test yields $L = 1$; Raabe's limit: $\\lim_{n \\to \\infty} n \\left( \\frac{u_n}{u_{n+1}} - 1 \\right) = R$; Converges if $R > 1$; Diverges if $R < 1$; Inconclusive if $R = 1$.",
    "De Morgan and Bertrand's Higher Ratio Test: Applied when Raabe's test yields $R = 1$; Limit: $\\lim_{n \\to \\infty} \\left[ n \\left( \\frac{u_n}{u_{n+1}} - 1 \\right) - 1 \\right] \\ln n = B$; Converges if $B > 1$; Diverges if $B < 1$.",
    "Cauchy's Integral Test for Infinite Series: Integrand $f(x)$ non-negative, decreasing continuous function; Series $\\sum_{n=1}^\\infty f(n)$ and improper integral $\\int_1^\\infty f(x) dx$ converge or diverge together; Remainder estimation bounds.",
    "Alternating Series & Conditional Convergence: Leibniz test for alternating series; Absolute convergence implies convergence ($|\\sum u_n| \\le \\sum |u_n|$); Conditional convergence: Series converges as written, but diverges under absolute values (e.g. $\\sum \\frac{(-1)^n}{\\sqrt{n}}$).",
    "Abel's & Dirichlet's Tests for Arbitrary Series: Dirichlet test: $\\sum a_n b_n$ converges if partial sums of $a_n$ are bounded and $b_n \\searrow 0$; Abel's test: $\\sum a_n b_n$ converges if $\\sum a_n$ converges and $b_n$ is monotonic and bounded.",
    "University Examination Strategy: Test convergence of hypergeometric series using Raabe's test when the ratio test fails, apply Cauchy's condensation test to $p$-series, and distinguish absolute vs conditional convergence."
], [
    "Series Cauchy Criterion: Series converges iff tails satisfy $|\\sum_{k=m+1}^n u_k| < \\epsilon$ for sufficiently large $m$.",
    "Condensation Test Efficiency: $\\sum u_n$ converges iff $\\sum 2^k u_{2^k}$ converges, transforming polynomial terms into geometric ones.",
    "Raabe Test Threshold: $R = \\lim n \\left( \\frac{u_n}{u_{n+1}} - 1 \\right)$; resolves inconclusive $L=1$ ratio tests.",
    "De Morgan Bertrand Test: Second-order logarithmic test applied when both ratio and Raabe tests fail to resolve convergence.",
    "Harmonic Series Divergence: $\\sum 1/n$ diverges because partial sums grow logarithmically without bound: $s_{2^k} > 1 + k/2$.",
    "Alternating Series Error Bound: Absolute truncation error $|S - S_n|$ is strictly less than the magnitude of the first neglected term $u_{n+1}$.",
    "Abel Test Formulation: Preserves convergence when multiplying convergent series terms by monotonic, bounded sequence $b_n$.",
    "Dirichlet Test Scope: Handles conditionally convergent oscillatory series where terms alternate in complex trigonometric cycles.",
    "Positive Series Boundedness: A positive term series converges if and only if its sequence of partial sums is bounded above.",
    "Exam Gold Tip: Whenever a ratio $\\frac{u_n}{u_{n+1}}$ contains algebraic terms of the form $1 + \\frac{\\alpha}{n} + O(1/n^2)$, skip the ratio test and apply Raabe's test directly."
])

add("Mathematics III / Botany III", 4, "Plant Systematics", [
    "Taxonomic Hierarchy & Linnaean Principles: Foundational classification framework: Kingdom, Division, Class, Order, Family, Genus, Species; International Code of Nomenclature for algae, fungi, and plants guidelines; Typification protocols including holotype, isotype, syntype, and lectotype; Rules of priority and valid botanical author citations.",
    "Historical Classification Systems in Botany: Artificial systems based on numerical sexual organs (Linnaean stamen classes); Natural systems based on comprehensive morphological affinities (Bentham and Hooker's Genera Plantarum); Phylogenetic evolutionary systems (Engler and Prantl, Hutchinson, Takhtajan, and modern APG IV).",
    "Bentham and Hooker Classification Architecture: Outline division of Seed Plants: Dicotyledones, Gymnospermae, Monocotyledones; Dicotyledones organized into Polypetalae (Thalamiflorae, Disciflorae, Calyciflorae), Gamopetalae (Inferae, Heteromerae, Bicarpellatae), and Monochlamydeae; Widespread adoption in Indian and Commonwealth herbaria.",
    "Modern Cladistics & APG IV Classification: Modern Angiosperm Phylogeny Group system based on nucleotide sequences of chloroplast genes (rbcL, matK) and nuclear ribosomal DNA; Resolves monophyletic clades: Basal ANITA grade, Magnoliids, Monocots, and Eudicots; Eliminates polyphyletic traditional orders.",
    "Botanical Field Keys & Floras: Construction and interpretation of dichotomous keys; Bracketed keys keeping contrasting leads together vs indented keys using progressive margin indentation; Diagnostic floral formulas and floral diagrams illustrating calyx, corolla, androecium, and gynoecium.",
    "Herbarium Techniques & Major Repositories: Specimen collection using field vasculum, drying under heavy pressure in blotting paper, poisoning with chemical preservatives, mounting on standard archival herbarium sheets (29 cm by 42 cm), and scientific labeling; Major herbaria: Royal Botanic Gardens Kew, Central National Herbarium Kolkata.",
    "Chemotaxonomy & Numerical Taxonomy: Chemotaxonomic markers: Phenolics, betalains, glucosinolates, alkaloids, and flavonoids helping resolve taxonomic controversies; Numerical taxonomy (Phenetics): Adansonian principles, operational taxonomic units (OTUs), cluster analysis, and similarity matrices.",
    "Diagnostic Features of Key Angiosperm Families: Fabaceae (papilionaceous corolla, diadelphous stamens 9+1, marginal placentation, legume pod); Solanaceae (persistent calyx, epipetalous stamens, obliquely oriented bicarpellary ovary, swollen placenta with numerous ovules, berry fruit); Asteraceae (capitulum inflorescence, ray and disc florets, syngenesious stamens, cypsela fruit with pappus).",
    "Diagnostic Features of Monocot Families: Poaceae (Gramineae: hollow stems with nodes, ligule, spikelet inflorescence, lemma, palea, lodicules, versatile anthers, feathery stigmas, caryopsis fruit); Orchidaceae (zygomorphic flowers, labellum, gynostegium/column, pollinia, minute seeds lacking endosperm).",
    "University Examination Strategy: Draw and label the floral diagram and write the floral formula for Solanaceae and Fabaceae, explain the merits and demerits of Bentham and Hooker's classification, and construct a bracketed dichotomous identification key."
], [
    "Holotype Definition: The single physical specimen designated by the original author as the nomenclatural type in the original publication.",
    "Bentham and Hooker Flaw: Erroneous placement of Gymnospermae between Dicotyledones and Monocotyledones remains its main recognized defect.",
    "APG Monophyly: Modern cladistic system grouping flowering plants strictly into evolutionary monophyletic lineages using molecular DNA sequences.",
    "Standard Herbarium Sheet: International archival dimensions measure precisely 29 centimeters width by 42 centimeters length.",
    "Fabaceae Androecium: Diadelphous arrangement with nine stamen filaments united into an open sheath and one upper stamen free.",
    "Solanaceae Gynoecium: Bicarpellary syncarpous ovary placed obliquely at 45 degrees to the posterior-anterior median plane.",
    "Asteraceae Androecium: Syngenesious condition where anthers fuse laterally into a hollow cylinder surrounding the style while filaments remain free.",
    "Poaceae Fruit Type: Caryopsis: Indehiscent single-seeded grain with seed coat completely fused to surrounding pericarp wall.",
    "Lodicules Function: Two microscopic scale-like structures representing reduced perianth in grasses that swell to force bracts open.",
    "Botany Exam Tip: Never draw lines through floral diagrams; keep sepals with outward points, petals smooth, and show stamen orientations clearly."
])

add("Mathematics III / Botany III", 5, "Economic Botany", [
    "Centres of Crop Origin & Plant Domestication: Nikolai Vavilov's eight primary global geographical centres of crop origin and genetic diversity; Primary vs secondary gene pools; Modern ex-situ germplasm preservation in cryo-banks and seed vaults (Svalbard Global Seed Vault).",
    "Cereal Crops: Botany, Processing & Nutrition: Rice (Oryza sativa; Poaceae): Indica, Japonica, and Javanica subspecies; Milling, polishing, and nutritional value of parboiling; Wheat (Triticum aestivum): Hexaploid bread wheat genetics, gluten proteins (gliadin and glutenin) conferring dough viscoelastic properties.",
    "Millets: Climate Resilience & Nutritive Value: Pearl millet (Pennisetum glaucum / Bajra), Finger millet (Eleusine coracana / Ragi; exceptionally high calcium and iron content), Sorghum (Sorghum bicolor / Jowar); C4 photosynthetic water-use efficiency in arid agricultural lands.",
    "Pulse Crops & Nitrogen Fixation Value: Chickpea (Cicer arietinum), Pigeon pea (Cajanus cajan / Arhar), Green gram (Vigna radiata); High protein content rich in essential lysine; Symbiotic nitrogen fixation replenishing agricultural soil fertility.",
    "Major Indian Spices & Bioactive Principles: Black pepper (Piper nigrum; Piperaceae; dried berries yielding pungent piperine); Cardamom (Elettaria cardamomum; Zingiberaceae; seeds containing 1,8-cineole); Clove (Syzygium aromaticum; Myrtaceae; aromatic unopened flower buds rich in eugenol); Ginger and Turmeric (curcuminoids).",
    "Beverage Crops & Alkaloid Chemistry: Tea (Camellia sinensis; Theaceae): Plucking of tender two leaves and a bud, CTC processing, enzymatic polyphenol oxidation yielding theaflavins and thearubigins; Coffee (Coffea arabica, C. canephora; Rubiaceae): Wet and dry processing, roasting, caffeine stimulant action.",
    "Vegetable Oils & Industrial Fats: Groundnut (Arachis hypogaea; subterranean geocarpy fruit maturation); Mustard (Brassica juncea; sinigrin and erucic acid); Coconut (Cocos nucifera; solid and liquid cellular endosperm yielding lauric acid copra oil); Sunflower (linoleic acid richness).",
    "Commercial Fiber Crops & Processing: Cotton (Gossypium hirsutum; Malvaceae): Single-celled epidermal hairs of seed coat consisting of pure crystalline cellulose; Jute (Corchorus capsularis, C. olitorius; Malvaceae): Secondary phloem bast fibers extracted via microbial water retting.",
    "Timber, Rubber & Industrial Plant Resins: Teak (Tectona grandis; Lamiaceae; high tensile strength termite-resistant wood); Natural rubber (Hevea brasiliensis; Euphorbiaceae): Controlled tapping of trunk bark laticifers, latex colloidal emulsion containing cis-1,4-polyisoprene, sulfur vulcanization.",
    "University Examination Strategy: Detail Vavilov's centres of plant origin, explain the processing of black tea and coffee step-by-step, outline the biological retting of jute fibers, and tabulate botanical names, families, and parts used for five major spices."
], [
    "Vavilov Diversity Principle: Regions exhibiting highest genetic variation and wild ancestral relatives correspond to original sites of plant domestication.",
    "Rice Parboiling Rationale: Hydrothermal processing diffuses water-soluble thiamine (Vitamin B1) from aleurone into endosperm, preventing beriberi.",
    "Wheat Gluten Structure: Gliadin provides dough plasticity and extensibility, whereas glutenin polymers supply elasticity and dough strength.",
    "Ragi Calcium Mineralization: Finger millet grains contain over 340 mg calcium per 100 g, making it a critical weaning food.",
    "Clove Morphological Nature: Commercial cloves represent the unopened dried aromatic flower buds of Syzygium aromaticum.",
    "Groundnut Geocarpy: Following flower fertilization, the positively geotropic carpophore peg elongates downward to push developing pods into soil.",
    "Jute Microbial Retting: Anaerobic pectinolytic bacteria ferment and hydrolyze middle lamellae, liberating commercial bast fiber strands.",
    "Natural Rubber Polymer: Composed of cis-1,4-polyisoprene polymer chains suspended in cytoplasmic latex fluid of Hevea trees.",
    "Cotton Fiber Nature: Long, single-celled epidermal trichomes growing from outer seed coat containing over 90 percent pure cellulose.",
    "Economic Botany Tip: In exams, always provide the binomial scientific name (underlined or italicized) and the exact plant family for every crop."
])

# Save to sem3_bsc_computing_math_data.json
with open('scripts/sem3_bsc_computing_math_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in computing_math dataset now: {len(data)}")
