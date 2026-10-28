import json, os

with open('scripts/sem3_btech_batch4_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    data[f"{sub}:::{num}"] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 15. STRENGTH OF MATERIALS (contd.)
# =========================================================================
add("Strength of Materials", 3, "Stresses in Beams", [
    "Theory of Pure Bending (Euler-Bernoulli): Assumptions: beam is initially straight, transverse plane sections remain plane and normal to neutral axis after bending (Bernoulli hypothesis), material is homogeneous, isotropic, obeys Hooke's law, radius of curvature $R$ is large compared to cross-sectional dimensions, elastic modulus in tension equals that in compression.",
    "Bending Equation Derivation: Strain variation: $\\epsilon(y) = y / R$; Stress variation: $\\sigma(y) = E y / R$; Neutral axis passes through centroid of cross-section ($\\int y dA = 0$); Resisting moment: $M = \\int y \\sigma dA = \\frac{E}{R} \\int y^2 dA = \\frac{E I}{R}$; Unified Flexure Formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$.",
    "Section Modulus & Beam Economy: Section modulus $Z = I / y_{max}$; Maximum bending stress: $\\sigma_{max} = M / Z$; Rectangular section ($Z = b d^2 / 6$); Circular solid section ($Z = \\pi D^3 / 32$); Hollow circular tube ($Z = \\frac{\\pi(D^4 - d^4)}{32 D}$); I-section and wide-flange beams (flanges resist majority of bending moment, providing superior strength-to-weight ratio).",
    "Beams of Composite / Flitched Sections: Beams composed of two materials bonded together (e.g. timber flitched with steel plates); Strain compatibility at interface: $\\epsilon_1 = \\epsilon_2$; Modular ratio $m = E_1 / E_2$; Equivalent transformed section method: replacing material 1 with equivalent width $m b_1$ of material 2.",
    "Shear Stresses in Transverse Beams: Existence of horizontal shear stresses accompanying transverse shear force $V$; Derivation of shear stress formula: $\\tau = \\frac{V Q}{I b}$ where $Q = A \\bar{y}$ is first moment of area above the level of interest, $I$ moment of inertia of entire section, $b$ width of beam at that level.",
    "Shear Stress Distribution Across Cross-Sections: (1) Rectangular section: parabolic distribution, zero at top/bottom fibers, maximum at neutral axis: $\\tau_{max} = 1.5 \\tau_{avg} = \\frac{3 V}{2 A}$; (2) Circular solid section: parabolic distribution: $\\tau_{max} = \\frac{4}{3} \\tau_{avg} = \\frac{4 V}{3 A}$; (3) Triangular section: maximum shear stress occurs at mid-height $h/2$ ($\\tau_{max} = 1.5 \\tau_{avg}$), while stress at neutral axis $h/3$ is $\\tau_{NA} = \\frac{4}{3} \\tau_{avg}$.",
    "Shear Stress in Flanged Sections (I and T Beams): Flanges carry negligible shear stress (abrupt width expansion drops $\\tau$); Web carries almost entire transverse shear force ($>90\\%$); Parabolic distribution in web with steep step increase at flange-web junctions; Maximum shear stress occurs at neutral axis in web: $\\tau_{max} = \\frac{V}{I b_w} [Q_{flange} + Q_{web,half}]$.",
    "Shear Flow & Fastener Spacing: Shear flow $q = \\tau b = \\frac{V Q}{I}$ (shear force per unit length); Application in built-up beams (welded plates, glued timber, bolted girders); Pitch / spacing of bolts/rivets resisting horizontal shear: $p = \\frac{n F_v}{q} = \\frac{n F_v I}{V Q}$ (where $F_v$ is shear capacity per fastener, $n$ number of fasteners across section).",
    "Combined Direct and Bending Stresses: Short columns subjected to eccentric axial load $P$ with eccentricity $e$; Total stress: $\\sigma = \\frac{P}{A} \\pm \\frac{P e y}{I} = \\frac{P}{A}\\left(1 \\pm \\frac{e y}{r^2}\\right)$; Core / Kern of section: region within which axial load can be applied without causing tensile stress; Middle-third rule for rectangular sections ($e \\le d/6$); Middle-fourth rule for solid circular shafts ($e \\le D/8$).",
    "University Examination Strategy: Apply the bending equation $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ to compute maximum fiber stresses in flitched beams, sketch shear stress distributions across I and T sections calculating values at all junction interfaces, and determine the kern boundary for structural masonry piers."
], [
    "Flexure Formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$.",
    "Section Modulus Definition: $Z = \\frac{I}{y_{max}}$ with $\\sigma_{max} = \\frac{M}{Z}$.",
    "Rectangular Beam Section Modulus: $Z = \\frac{b d^2}{6}$.",
    "Shear Stress in Beams: $\\tau = \\frac{V Q}{I b}$ where $Q = A \\bar{y}$.",
    "Rectangular Max Shear Stress: $\\tau_{max} = 1.5 \\tau_{avg} = \\frac{3V}{2bd}$ at neutral axis.",
    "Circular Max Shear Stress: $\\tau_{max} = \\frac{4}{3} \\tau_{avg} = \\frac{4V}{3\\pi R^2}$ at neutral axis.",
    "Shear Flow Equation: $q = \\tau b = \\frac{V Q}{I}$ N/m.",
    "Fastener Pitch Formula: $p = \\frac{n R_{shear} I}{V Q}$.",
    "Kern Middle-Third Rule: Rectangular column load must lie within middle third ($e_x \\le b/6, e_y \\le d/6$) to avoid tension.",
    "Exam Gold Tip: In I-beams, the flanges carry almost all of the bending moment (normal stress), while the thin web carries almost all of the transverse shear force (shear stress)."
])

add("Strength of Materials", 4, "Deflection of Beams", [
    "Governing Differential Equation of Elastic Curve: Curvature relation $\\frac{1}{R} \\approx \\frac{d^2 y}{dx^2}$; Combining with flexure formula yields: $E I \\frac{d^2 y}{dx^2} = M(x)$; Bending stiffness / Flexural rigidity $E I$; Sign conventions: upward deflection positive $+y$, counterclockwise slope positive $\\theta = \\frac{dy}{dx}$.",
    "Double Integration Method: Successive analytical integration of governing equation: $E I \\frac{dy}{dx} = \\int M(x) dx + C_1$; $E I y(x) = \\int\\left(\\int M(x) dx\\right) dx + C_1 x + C_2$; Determination of integration constants $C_1, C_2$ from kinematic boundary conditions (Simply supported: $y(0)=0, y(L)=0$; Cantilever: $y(0)=0, \\theta(0)=0$).",
    "Macaulay's Bracket Method: Discontinuous loading formulation using single comprehensive moment equation; Macaulay brackets $[x - a]^n$ evaluated as $(x - a)^n$ for $x > a$ and identically $0$ for $x \\le a$; Integration rule: $\\int [x - a]^n dx = \\frac{[x - a]^{n+1}}{n+1}$; Eliminates multiple piecewise constants of integration for multiple point loads, partial UDLs, and concentrated moments.",
    "Moment-Area Theorems (Mohr's Theorems): (1) Mohr's First Theorem: change in slope between two points $A$ and $B$ equals the area of the $M / (E I)$ diagram between them: $\\theta_B - \\theta_A = \\int_A^B \\frac{M}{E I} dx$; (2) Mohr's Second Theorem: vertical tangential deviation $t_{B/A}$ of point $B$ on elastic curve from tangent drawn at $A$ equals first moment of $M / (E I)$ area about point $B$: $t_{B/A} = \\int_A^B \\frac{M}{E I} x_B dx = \\frac{A \\bar{x}_B}{E I}$.",
    "Conjugate Beam Method: Imaginary beam of identical length; Principles: (1) Deflection in real beam = Bending moment in conjugate beam ($y = M_{conj}$); (2) Slope in real beam = Shear force in conjugate beam ($\\theta = V_{conj}$); Loading on conjugate beam is the real beam's $M / (E I)$ diagram; Conjugate support translations (Real Simple Pin $\\to$ Conjugate Pin; Real Fixed $\\to$ Conjugate Free; Real Free $\\to$ Conjugate Fixed; Real Internal Hinge $\\to$ Conjugate Internal Roller).",
    "Strain Energy & Castigliano's Theorem: Bending strain energy: $U = \\int_0^L \\frac{M^2(x) dx}{2 E I}$; Castigliano's First Theorem: $\\frac{\\partial U}{\\partial \\Delta_i} = P_i$; Castigliano's Second Theorem: deflection at point of applied concentrated force equals partial derivative of total strain energy with respect to that force: $\\Delta_i = \\frac{\\partial U}{\\partial P_i} = \\int_0^L \\frac{M(x)}{E I}\\left(\\frac{\\partial M}{\\partial P_i}\\right) dx$; Fictitious dummy load method.",
    "Principle of Virtual Work / Unit Load Method: External virtual work equals internal virtual strain energy: $1 \\cdot \\Delta = \\int_0^L \\frac{M(x) m(x)}{E I} dx$ where $M(x)$ is real bending moment and $m(x)$ is bending moment caused by unit virtual load applied at point of interest in direction of desired deflection.",
    "Standard Deflection and Slope Formulas: (1) Cantilever with end load $P$: $\\theta_{max} = \\frac{P L^2}{2 E I}, y_{max} = \\frac{P L^3}{3 E I}$; (2) Cantilever with full UDL $w$: $\\theta_{max} = \\frac{w L^3}{6 E I}, y_{max} = \\frac{w L^4}{8 E I}$; (3) Simply supported with central load $P$: $\\theta = \\frac{P L^2}{16 E I}, y_{max} = \\frac{P L^3}{48 E I}$; (4) Simply supported with full UDL $w$: $\\theta = \\frac{w L^3}{24 E I}, y_{max} = \\frac{5 w L^4}{384 E I}$.",
    "Deflections in Statically Indeterminate Beams: Propped cantilevers (fixed at one end, roller support at other end); Redundant reaction determination via deflection compatibility; Fixed-end beams: fixed-end moments $M_{FA} = M_{FB} = -wL^2/12$ under UDL, maximum midspan deflection $y_{max} = \\frac{w L^4}{384 E I}$ (one-fifth of simply supported deflection).",
    "University Examination Strategy: Solve beam slopes and midspan deflections using Macaulay's method for asymmetric loads, apply Mohr's moment-area theorems to stepped cross-section beams, and calculate propped cantilever redundant reactions using deflection compatibility."
], [
    "Governing Differential Equation: $E I \\frac{d^2 y}{dx^2} = M(x)$.",
    "Mohr's First Theorem (Slope): $\\theta_{B/A} = \\text{Area of } \\frac{M}{EI} \\text{ diagram between } A \\text{ and } B$.",
    "Mohr's Second Theorem (Deflection): $t_{B/A} = \\frac{A \\bar{x}_B}{EI}$.",
    "Conjugate Beam Principles: Slope $\\theta = V_{conj}$, Deflection $y = M_{conj}$.",
    "Castigliano Deflection Theorem: $\\Delta_i = \\frac{\\partial U}{\\partial P_i} = \\int \\frac{M}{EI} \\frac{\\partial M}{\\partial P_i} dx$.",
    "Cantilever End Point Load Deflection: $y_{max} = \\frac{P L^3}{3 E I}$.",
    "Cantilever Full UDL Deflection: $y_{max} = \\frac{w L^4}{8 E I}$.",
    "Simply Supported Point Load Deflection: $y_{max} = \\frac{P L^3}{48 E I}$.",
    "Simply Supported Full UDL Deflection: $y_{max} = \\frac{5 w L^4}{384 E I}$.",
    "Exam Gold Tip: When using Macaulay's method, always extend partial UDLs to the extreme right end of the beam and add an equal and opposite upward UDL to maintain mathematical equilibrium."
])

add("Strength of Materials", 5, "Torsion & Columns", [
    "Theory of Pure Torsion in Circular Shafts: Assumptions: shaft is straight and uniform circular cross-section, plane cross-sections remain plane and do not warp, radii remain straight, material obeys Hooke's law in shear; Shear strain variation: $\\gamma(r) = r \\frac{\\theta}{L}$; Shear stress variation: $\\tau(r) = G \\gamma = \\frac{G r \\theta}{L}$.",
    "Torsion Equation Derivation: Internal torque $T = \\int r \\tau dA = \\frac{G \\theta}{L} \\int r^2 dA = \\frac{G \\theta}{L} J$ where $J$ is polar moment of inertia; Unified Torsion Formula: $\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G \\theta}{L}$; Polar section modulus $Z_p = J / R = \\pi D^3 / 16$ (solid shaft); Torsional rigidity $G J$; Torsional stiffness $k_t = G J / L$.",
    "Hollow Shafts vs Solid Shafts: Polar moment of inertia for hollow shaft: $J = \\frac{\\pi(D^4 - d^4)}{32}$; Weight and strength comparison: hollow shafts possess significantly higher torsional strength-to-weight ratio because material is positioned at large radii where shear stresses are highest; Percentage weight reduction.",
    "Power Transmission and Shaft Design: Power transmitted: $P = \\frac{2\\pi N T}{60}$ Watts ($T$ in N-m, $N$ in rpm); Design criteria: (1) Strength criterion (limiting maximum shear stress $\\tau_{max} \\le \\tau_{allow}$); (2) Rigidity criterion (limiting maximum angle of twist $\\theta \\le \\theta_{allow}$, typically $1^\\circ$ per meter length).",
    "Shafts in Series and Parallel: Series connection (equal torque $T_1 = T_2 = T$, total angle of twist $\\theta = \\theta_1 + \\theta_2$); Parallel connection (common angle of twist $\\theta_1 = \\theta_2 = \\theta$, load sharing $T = T_1 + T_2$); Statically indeterminate stepped shafts fixed at both ends.",
    "Combined Bending and Torsion: Circular shaft subjected simultaneously to bending moment $M$ and torque $T$; Principal stresses: $\\sigma_{1,2} = \\frac{16}{\\pi D^3} (M \\pm \\sqrt{M^2 + T^2})$; Equivalent Bending Moment: $M_e = \\frac{1}{2} (M + \\sqrt{M^2 + T^2})$; Equivalent Twisting Moment: $T_e = \\sqrt{M^2 + T^2}$; Maximum shear stress: $\\tau_{max} = \\frac{16 T_e}{\\pi D^3}$.",
    "Theory of Columns & Elastic Buckling: Columns subjected to axial compressive loads; Stable, neutral, and unstable equilibrium states; Buckling vs crushing failure; Slenderness ratio $\\lambda = L_e / k_{min}$ (where radius of gyration $k = \\sqrt{I / A}$).",
    "Euler's Buckling Theory: Differential equation of buckled column: $E I \\frac{d^2 y}{dx^2} = -P y$; Critical Euler Buckling Load: $P_{cr} = \\frac{\\pi^2 E I}{L_e^2}$; Critical buckling stress: $\\sigma_{cr} = \\frac{\\pi^2 E}{(L_e / k)^2} = \\frac{\\pi^2 E}{\\lambda^2}$; Limitations of Euler's formula: valid only for long slender columns where $\\sigma_{cr} \\le \\sigma_{yield}$ (slenderness ratio $\\lambda \\ge \\lambda_{critical}$).",
    "Effective Length ($L_e$) for Different End Conditions: (1) Both ends hinged/pinned: $L_e = L$ ($P_{cr} = \\frac{\\pi^2 E I}{L^2}$); (2) Both ends fixed: $L_e = L/2$ ($P_{cr} = \\frac{4\\pi^2 E I}{L^2}$); (3) One end fixed, other pinned: $L_e = L/\\sqrt{2} \\approx 0.707 L$ ($P_{cr} = \\frac{2\\pi^2 E I}{L^2}$); (4) One end fixed, other free: $L_e = 2L$ ($P_{cr} = \\frac{\\pi^2 E I}{4 L^2}$).",
    "Rankine-Gordon Empirical Formula: Unified formula for both short and intermediate columns: $\\frac{1}{P_R} = \\frac{1}{P_c} + \\frac{1}{P_E}$ (where $P_c = \\sigma_c A$ crushing load, $P_E$ Euler load); Rankine Buckling Load: $P_R = \\frac{\\sigma_c A}{1 + a (L_e / k)^2}$ where $a = \\frac{\\sigma_c}{\\pi^2 E}$ is Rankine's empirical constant."
], [
    "Torsion Formula: $\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G \\theta}{L}$.",
    "Solid Shaft Polar Modulus: $Z_p = \\frac{\\pi D^3}{16}$.",
    "Power Transmitted by Shaft: $P = \\frac{2\\pi N T}{60}$ Watts.",
    "Equivalent Twisting Moment: $T_e = \\sqrt{M^2 + T^2}$.",
    "Equivalent Bending Moment: $M_e = \\frac{1}{2}(M + \\sqrt{M^2 + T^2})$.",
    "Euler Critical Buckling Load: $P_{cr} = \\frac{\\pi^2 E I}{L_e^2}$.",
    "Effective Length Conditions: Hinged-Hinged: $L$, Fixed-Fixed: $0.5L$, Fixed-Hinged: $0.707L$, Fixed-Free: $2L$.",
    "Column Slenderness Ratio: $\\lambda = \\frac{L_e}{k_{min}} = \\frac{L_e}{\\sqrt{I/A}}$.",
    "Rankine-Gordon Formula: $P_R = \\frac{\\sigma_c A}{1 + a(L_e/k)^2}$.",
    "Exam Gold Tip: Always calculate radius of gyration using the minimum moment of inertia ($I_{min}$), because a column will always buckle about its weakest principal axis."
])

# Save updated batch 4
with open('scripts/sem3_btech_batch4_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 4 part 2 complete: total units now: {len(data)}")
