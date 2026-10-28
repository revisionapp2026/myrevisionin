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
# 15. STRENGTH OF MATERIALS (B.Tech)
# =========================================================================
add("Strength of Materials", 1, "Stress & Strain", [
    "Stress and Strain Concepts: Concept of stress as internal resistive force per unit area; Normal stress (tensile, compressive: $\\sigma = P/A$) and Shear stress ($\\tau = P_s/A$); Engineering strain vs True strain: $\\epsilon_{eng} = \\frac{\\Delta L}{L_0}$, $\\epsilon_{true} = \\ln\\left(1 + \\epsilon_{eng}\\right)$; Stress-strain diagram for mild steel (proportional limit, elastic limit, upper and lower yield points, plastic plateau, strain hardening, necking, ultimate tensile strength, fracture point).",
    "Generalized Hooke's Law & Elastic Constants: Hooke's law in 3D for isotropic materials; Modulus of Elasticity ($E$), Shear Modulus ($G$), Bulk Modulus ($K$), Poisson's ratio ($\\nu = -\\frac{\\epsilon_{lateral}}{\\epsilon_{axial}}$); Fundamental interrelationships: $E = 2G(1 + \\nu) = 3K(1 - 2\\nu) = \\frac{9KG}{3K + G}$; Limits of Poisson's ratio ($0 \\le \\nu \\le 0.5$ for isotropic materials, $\\nu = 0.5$ for incompressible materials).",
    "Axially Loaded Members & Stepped Bars: Elongation of prismatic bar: $\\delta = \\frac{P L}{A E}$; Compound and stepped bars subjected to multiple axial forces; Self-weight elongation: uniform prismatic bar hanging under gravity ($\\delta_{sw} = \\frac{\\rho g L^2}{2E} = \\frac{W L}{2 A E}$, exactly half the elongation caused by end load $W$); Bar of uniform strength (exponentially tapering cross-section $A(x) = A_0 e^{\\frac{\\rho g x}{\\sigma}}$).",
    "Statically Indeterminate Axially Loaded Structures: Degree of static indeterminacy; Compatibility of deformations; Bars connected in parallel (equal strain $\\delta_1 = \\delta_2$, load sharing $P = P_1 + P_2$); Bars connected in series between rigid fixed supports ($P_1 = P_2$, total elongation $\\delta_1 + \\delta_2 = 0$).",
    "Thermal Stresses & Temperature Effects: Free thermal strain $\\epsilon_{th} = \\alpha \\Delta T$; Thermal stress in fully constrained bar: $\\sigma_{th} = -E \\alpha \\Delta T$ (compressive on heating, tensile on cooling); Thermal stress in bar with yieldable support with gap $\\Delta$: $\\sigma_{th} = -E\\left(\\alpha \\Delta T - \\frac{\\Delta}{L}\\right)$; Thermal stresses in composite bars (differential thermal expansion).",
    "Strain Energy and Impact Loading: Strain energy stored in elastic deformation: $U = \\int_0^L \\frac{P^2 dx}{2 A E} = \\frac{1}{2} P \\delta = \\frac{\\sigma^2}{2E} \\times \\text{Volume}$; Modulus of resilience (maximum elastic strain energy density); Modulus of toughness (total energy absorption up to fracture); Impact loading and dynamic load factor: $n = 1 + \\sqrt{1 + \\frac{2 h}{\\delta_{st}}}$; Instantaneous maximum stress: $\\sigma_{max} = \\sigma_{st} \\left(1 + \\sqrt{1 + \\frac{2 h}{\\delta_{st}}}\\right)$.",
    "Two-Dimensional Plane Stress Analysis: Stresses on inclined plane oriented at angle $\\theta$ from vertical: Normal stress $\\sigma_\\theta = \\frac{\\sigma_x + \\sigma_y}{2} + \\frac{\\sigma_x - \\sigma_y}{2}\\cos(2\\theta) + \\tau_{xy}\\sin(2\\theta)$; Shear stress $\\tau_\\theta = -\\frac{\\sigma_x - \\sigma_y}{2}\\sin(2\\theta) + \\tau_{xy}\\cos(2\\theta)$; Maximum shear stress: $\\tau_{max} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.",
    "Principal Stresses and Principal Planes: Planes of zero shear stress; Principal plane orientation: $\\tan(2\\theta_p) = \\frac{2\\tau_{xy}}{\\sigma_x - \\sigma_y}$; Principal stresses: $\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$; Planes of maximum shear stress are inclined at $45^\\circ$ to principal planes.",
    "Mohr's Circle of Plane Stress: Graphical representation of 2D stress transformation; Center coordinates $(C, 0) = \\left(\\frac{\\sigma_x + \\sigma_y}{2}, 0\\right)$; Radius $R = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$; Graphical determination of principal stresses, principal directions, and stresses on arbitrary oblique planes; Mohr's circle for pure shear and hydrostatic stress.",
    "University Examination Strategy: Calculate composite bar load sharing and thermal stresses with yieldable supports, compute instantaneous dynamic stresses under falling impact loads, derive normal and shear transformation formulas for oblique planes, and construct Mohr's circle to determine principal stresses."
], [
    "Hooke's Moduli Relationship: $E = 2G(1 + \\nu) = 3K(1 - 2\\nu) = \\frac{9KG}{3K + G}$.",
    "Bar Elongation Under Axial Load: $\\delta = \\frac{P L}{A E}$.",
    "Self-Weight Elongation of Bar: $\\delta_{sw} = \\frac{W L}{2 A E}$ (half that of equivalent end load).",
    "Thermal Stress in Constrained Bar: $\\sigma_{th} = E \\alpha \\Delta T$.",
    "Dynamic Impact Load Factor: $n = 1 + \\sqrt{1 + \\frac{2h}{\\delta_{st}}}$.",
    "Principal Stresses Equation: $\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.",
    "Principal Angle Formula: $\\tan(2\\theta_p) = \\frac{2\\tau_{xy}}{\\sigma_x - \\sigma_y}$.",
    "Max In-Plane Shear Stress: $\\tau_{max} = \\frac{\\sigma_1 - \\sigma_2}{2} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.",
    "Mohr's Circle Center and Radius: Center at $\\left(\\frac{\\sigma_x + \\sigma_y}{2}, 0\\right)$ and radius $R = \\tau_{max}$.",
    "Exam Gold Tip: On principal planes, the shear stress is identically zero; on planes of maximum shear stress, the normal stress is equal to the average normal stress $\\sigma_{avg} = (\\sigma_x + \\sigma_y)/2$."
])

add("Strength of Materials", 2, "Shear Force & Bending Moment", [
    "Classification of Beams and Supports: Structural beam types (Cantilever, Simply Supported, Overhanging, Fixed, Continuous); Support varieties (Roller: 1 reaction force normal to support; Pin/Hinge: 2 reaction forces $R_x, R_y$; Fixed/Built-in: 3 reactions $R_x, R_y, M_z$); Static determinacy criteria ($3$ equilibrium equations for 2D beams: $\\sum F_x = 0, \\sum F_y = 0, \\sum M = 0$).",
    "Types of Loading on Beams: Concentrated point loads, Uniformly Distributed Loads (UDL, $w\\text{ kN/m}$), Uniformly Varying Loads (UVL, triangular and trapezoidal loads), Applied concentrated couples / bending moments.",
    "Internal Force Resultants: Shear Force ($V$ or $F$): algebraic sum of all vertical external forces acting on either left or right portion of beam cut section; Bending Moment ($M$): algebraic sum of moments of all external forces acting about the section.",
    "Sign Conventions for SF and BM: Shear Force: positive when upward forces to the left or downward forces to the right create clockwise shearing couple; Bending Moment: positive sagging (concave upward, compression in top fiber, tension in bottom fiber) and negative hogging (convex upward, tension in top fiber, compression in bottom fiber).",
    "Fundamental Differential Relationships: Differential balance of beam element: $\\frac{dV}{dx} = -w(x)$ (slope of shear force diagram equals negative load intensity); $\\frac{dM}{dx} = V(x)$ (slope of bending moment diagram equals shear force); Integrating yields: $V(x_2) - V(x_1) = -\\int_{x_1}^{x_2} w(x) dx$ and $M(x_2) - M(x_1) = \\int_{x_1}^{x_2} V(x) dx$ (change in bending moment equals area under shear force diagram).",
    "Maximum Bending Moment Location: Since $\\frac{dM}{dx} = V$, bending moment reaches local mathematical extremum (maximum or minimum) at sections where shear force passes through zero ($V = 0$) or changes sign abruptly under a concentrated point load.",
    "Point of Contraflexure (Inflection Point): Section along beam where bending moment changes sign (passes through zero: $M = 0$); Physical transition point between sagging and hogging curvature; Crucial for positioning reinforcement lap splices in reinforced concrete structures.",
    "SFD and BMD for Standard Load Cases: (1) Cantilever with end point load: triangular SFD, triangular BMD; (2) Cantilever with full UDL: triangular SFD ($V_{max} = wL$), parabolic BMD ($M_{max} = -wL^2/2$); (3) Simply supported beam with central point load: rectangular SFD, triangular BMD ($M_{max} = PL/4$); (4) Simply supported beam with full UDL: linear SFD ($V_{max} = wL/2$), quadratic parabolic BMD ($M_{max} = wL^2/8$).",
    "Beams with Overhangs & UVL: Simply supported beam with overhangs subjected to combined UDL and concentrated loads; Occurrence of multiple points of contraflexure; Triangular UVL on simply supported beam: parabolic SFD, cubic parabolic BMD ($M_{max} = \\frac{w_0 L^2}{9\\sqrt{3}}$ at $x = L/\\sqrt{3}$).",
    "University Examination Strategy: Construct complete Shear Force and Bending Moment diagrams for overhanging beams with combined UDL, point loads, and applied concentrated couples, calculate the exact locations of maximum bending moments, and determine all points of contraflexure."
], [
    "Load-Shear Differential Relation: $\\frac{dV}{dx} = -w(x)$.",
    "Shear-Moment Differential Relation: $\\frac{dM}{dx} = V(x)$.",
    "Moment Area Relation: $M(b) - M(a) = \\int_a^b V(x) dx$ (area under SFD).",
    "Max Bending Moment Criterion: Occurs where shear force is zero ($V = 0$) or crosses zero.",
    "Point of Contraflexure Definition: Section where bending moment changes sign ($M = 0$).",
    "Simply Supported UDL Max Moment: $M_{max} = \\frac{w L^2}{8}$ at midspan.",
    "Simply Supported Point Load Max Moment: $M_{max} = \\frac{P L}{4}$ at midspan.",
    "Cantilever End Load Max Moment: $M_{max} = -P L$ at fixed support.",
    "Cantilever UDL Max Moment: $M_{max} = -\\frac{w L^2}{2}$ at fixed support.",
    "Exam Gold Tip: A concentrated couple produces an abrupt vertical jump discontinuity in the bending moment diagram equal to the magnitude of the couple, without affecting the shear force diagram."
])

# Save batch 4 initial
with open('scripts/sem3_btech_batch4_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 4 initial complete: {len(data)} units.")
