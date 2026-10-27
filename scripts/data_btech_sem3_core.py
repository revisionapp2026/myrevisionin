"""
Core Engineering (Mechanical, Civil, Chemical, Materials) Units for B.Tech Semester 3.
"""

core_units = {
    # AEROSPACE MATERIALS & MATERIAL SCIENCE
    "btech-materials: crystal structure & properties": {
        "highlights": [
            "Crystalline Lattice Systems: Seven crystal systems and 14 Bravais lattices; unit cell parameters ($a, b, c, \\alpha, \\beta, \\gamma$); Miller indices $(h k l)$ for planes and $[u v w]$ for directions.",
            "Atomic Packing Factor (APF): Simple Cubic ($APF = 0.52$), Body-Centered Cubic (BCC: $\\text{APF} = 0.68$, coordination number 8), and Face-Centered Cubic (FCC: $\\text{APF} = 0.74$, coordination number 12, close-packed $\{111\}$ planes).",
            "X-Ray Diffraction & Bragg's Law: Constructive interference of X-rays from parallel lattice planes: $n \\lambda = 2 d_{hkl} \\sin \\theta$; interplanar spacing $d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$ for cubic crystals.",
            "Point & Line Lattice Defects: Point defects (vacancies, self-interstitials, Schottky defects in ionic crystals, Frenkel defect pairs); Line defects (Edge dislocations with Burgers vector $\\vec{b} \\perp \\vec{l}$; Screw dislocations with $\\vec{b} \\parallel \\vec{l}$).",
            "Dislocation Dynamics & Yielding: Peierls-Nabarro stress $\\tau_{PN} \\approx G e^{-2\\pi w / b}$; plastic deformation occurs via dislocation slip along close-packed planes and directions; Schmid's law: resolved shear stress $\\tau_{CRSS} = \\sigma \\cos \\phi \\cos \\lambda$.",
            "Grain Boundaries & Hall-Petch Strengthening: Grain boundaries block dislocation motion; Hall-Petch equation quantifies yield strength enhancement via grain refinement: $\\sigma_y = \\sigma_0 + k_y d^{-1/2}$.",
            "Solid Solutions & Hume-Rothery Rules: Conditions for extensive solid solubility: atomic size difference $< 15\\%$, same crystal structure, similar electronegativities, and identical valency.",
            "Phase Diagrams & Gibbs Phase Rule: Condensed phase rule $F = C - P + 1$; binary isomorphous system (Cu-Ni); Lever rule computes phase fraction $W_L = \\frac{C_\\alpha - C_0}{C_\\alpha - C_L}$ and $W_\\alpha = \\frac{C_0 - C_L}{C_\\alpha - C_L}$.",
            "Iron-Iron Carbide ($Fe-Fe_3C$) Invariant Reactions: Peritectic at $1495^\\circ\\text{C}$ ($L + \\delta \\rightleftharpoons \\gamma$); Eutectic at $1147^\\circ\\text{C}$ ($4.3\\%\\text{ C}$, Ledeburite); Eutectoid at $727^\\circ\\text{C}$ ($0.76\\%\\text{ C}$, Pearlite: $\\alpha\\text{-ferrite} + Fe_3C$).",
            "Heat Treatment Transformations: TTT (Time-Temperature-Transformation) curves; Austenitizing, Quenching, and Tempering of Martensite (BCT structure, highly stressed, hard and brittle); Normalizing, Full Annealing, and Spheroidizing."
        ],
        "keyPoints": [
            "Bragg's Diffraction Law: $n \\lambda = 2 d \\sin \\theta$; cubic spacing: $d = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$.",
            "Atomic Packing Factors: SC $= 0.52$; BCC $= 0.68$; FCC $= 0.74$; HCP $= 0.74$.",
            "Hall-Petch Equation: $\\sigma_y = \\sigma_0 + k_y d^{-1/2}$; yield strength increases with smaller grain diameter $d$.",
            "Schmid's Law: Resolved shear stress $\\tau = \\sigma \\cos \\phi \\cos \\lambda$; slip initiates when $\\tau \\ge \\tau_{CRSS}$.",
            "Lever Rule Formula: Fraction of liquid $W_L = \\frac{C_s - C_0}{C_s - C_L}$ and fraction of solid $W_s = \\frac{C_0 - C_L}{C_s - C_L}$.",
            "Iron-Carbon Eutectoid: At $727^\\circ\\text{C}$ with $0.76\\%\\text{ C}$: $\\gamma\\text{ (Austenite)} \\to \\alpha\\text{ (Ferrite)} + Fe_3C\\text{ (Cementite)}$.",
            "Burgers Vector Orientation: Edge dislocation: $\\vec{b} \\perp$ dislocation line; Screw dislocation: $\\vec{b} \\parallel$ dislocation line.",
            "Bravais Lattice Count: Exactly 14 space lattices distributed across 7 unique crystal systems.",
            "Martensite Transformation: Diffusionless, athermal shear transformation; converts FCC austenite directly to body-centered tetragonal (BCT) martensite.",
            "Exam Phase Diagram Tip: On the $Fe-Fe_3C$ diagram, clearly mark invariant temperatures ($727^\\circ\\text{C}, 1147^\\circ\\text{C}, 1495^\\circ\\text{C}$) and carbon percentages ($0.022\\%, 0.76\\%, 2.14\\%, 4.3\\%, 6.67\\%$)."
        ]
    },

    # THERMODYNAMICS
    "btech-thermo: basic concepts & laws": {
        "highlights": [
            "Thermodynamic Systems & State Postulate: System (open, closed, isolated) and surroundings; State Postulate states state of simple compressible system is completely specified by two independent intensive properties.",
            "Quasi-Static Processes & Work: Quasi-static path represents continuous succession of equilibrium states; boundary work in reversible processes: $W = \\int_{V_1}^{V_2} P dV$; path function (inexact differential $\\delta W$).",
            "First Law of Thermodynamics: Conservation of energy: $\\delta Q - \\delta W = dE$; for stationary closed system undergoing a cycle: $\\oint \\delta Q = \\oint \\delta W$; internal energy $U$ and enthalpy $H = U + P V$ are state properties.",
            "First Law for Steady Flow (SFEE): Open control volume energy balance: $\\dot{Q} - \\dot{W}_s = \\dot{m}\\left[(h_2 - h_1) + \\frac{v_2^2 - v_1^2}{2} + g(z_2 - z_1)\\right]$; applied to nozzles, diffusers, turbines, and compressors.",
            "Second Law Statements: Clausius Statement (heat cannot spontaneously pass from colder body to hotter body without external work); Kelvin-Planck Statement (impossible to construct engine converting all absorbed heat entirely into work).",
            "Carnot Theorem & Maximum Efficiency: No engine operating between two thermal reservoirs can be more efficient than a reversible Carnot engine: $\\eta_{Carnot} = 1 - \\frac{T_L}{T_H}$; efficiency is independent of working fluid.",
            "Clausius Inequality & Entropy: Clausius inequality states $\\oint \\frac{\\delta Q}{T} \\le 0$ ($=0$ for reversible, $<0$ for irreversible); defines entropy as state property: $dS = \\left(\\frac{\\delta Q}{T}\\right)_{rev}$.",
            "Principle of Increase of Entropy: For an isolated system or universe, entropy never decreases: $\\Delta S_{isolated} = S_{gen} \\ge 0$; entropy generation measures thermodynamic irreversibility.",
            "Exergy & Availability Analysis: Exergy is maximum theoretical useful work obtainable as system comes to equilibrium with environment ($P_0, T_0$); Gouy-Stodola theorem: irreversibility $I = T_0 S_{gen}$.",
            "Ideal Gas Relations: Equation of state $P v = R T$; specific heats relation $C_p - C_v = R$; polytropic process $P V^n = C$; reversible adiabatic isentropic process $P V^\\gamma = C$ where $\\gamma = C_p / C_v$."
        ],
        "keyPoints": [
            "First Law Closed System: $Q - W = \\Delta U$; for a complete cycle $\\oint \\delta Q = \\oint \\delta W$.",
            "SFEE Equation: $q - w_s = \\Delta h + \\frac{\\Delta v^2}{2} + g \\Delta z$.",
            "Carnot Cycle Efficiency: $\\eta_{th} = 1 - \\frac{T_L}{T_H}$; Temperatures must be in absolute Kelvin ($K$).",
            "Clausius Inequality: $\\oint \\frac{\\delta Q}{T} \\le 0$; equality holds strictly for reversible cycles.",
            "Entropy Change for Ideal Gas: $\\Delta s = C_v \\ln\\left(\\frac{T_2}{T_1}\\right) + R \\ln\\left(\\frac{v_2}{v_1}\\right) = C_p \\ln\\left(\\frac{T_2}{T_1}\\right) - R \\ln\\left(\\frac{P_2}{P_1}\\right)$.",
            "Reversible Boundary Work: Isobaric: $W = P(V_2 - V_1)$; Isothermal: $W = P_1 V_1 \\ln(V_2 / V_1)$; Polytropic: $W = \\frac{P_1 V_1 - P_2 V_2}{n - 1}$.",
            "Reversible Adiabatic Work: $W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{m R(T_1 - T_2)}{\\gamma - 1}$.",
            "Gouy-Stodola Theorem: Lost work due to irreversibility $I = T_0 S_{gen}$.",
            "Perpetual Motion Machines: PMM-1 violates First Law (creates energy); PMM-2 violates Second Law ($100\\%$ heat-to-work conversion).",
            "Exam Temperature Unit Rule: In all thermodynamic efficiency, Carnot, and entropy calculations, ALWAYS convert temperatures to Kelvin ($T(K) = T(^\\circ\\text{C}) + 273.15$)."
        ]
    },

    # FLUID MECHANICS
    "btech-fluid: properties & statics": {
        "highlights": [
            "Fluid Continuum Hypothesis: Fluid treated as continuous medium; Knudsen number $Kn = \\lambda / L < 0.01$ justifies continuum mechanics assumption.",
            "Viscosity & Newton's Law: Dynamic viscosity $\\mu$ relates shear stress to velocity gradient: $\\tau = \\mu \\frac{du}{dy}$; Kinematic viscosity $\\nu = \\mu / \\rho$; Newtonian vs non-Newtonian fluids (shear thinning, dilatant, Bingham plastic).",
            "Hydrostatic Pressure Equation: Pascal's law states pressure at a point in static fluid is isotropic; Hydrostatic differential equation: $\\frac{dP}{dz} = -\\rho g = -\\gamma$; pressure increases linearly with depth $P = P_0 + \\rho g h$.",
            "Manometry & Pressure Measurement: Piezometer tubes, U-tube manometers, differential manometers ($\\Delta P = (\\rho_m - \\rho) g h$), and inverted manometers; Bourdon pressure gauges measure gauge pressure.",
            "Hydrostatic Forces on Submerged Planes: Total pressure force $F = \\rho g \\bar{h} A$; Center of pressure depth $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2 \\theta}{A \\bar{h}}$, which lies strictly below the centroid of the plane surface.",
            "Hydrostatic Forces on Curved Surfaces: Horizontal component $F_x$ equals force on vertical projection of surface; Vertical component $F_y$ equals weight of imaginary fluid column above curved surface to free surface.",
            "Buoyancy & Archimedes' Principle: Net upward buoyant force equals weight of displaced fluid: $F_B = \\rho_{fluid} g V_{displaced}$; acts through center of buoyancy $B$ (centroid of displaced volume).",
            "Metacentric Height & Rotational Stability: Metacenter $M$ is intersection of vertical buoyant force axis with tilted center line; Metacentric height $GM = \\frac{I}{V} - BG$; Stable equilibrium if $GM > 0$ ($M$ above $G$).",
            "Fluid Kinematics - Descriptions: Lagrangian method tracks individual moving fluid particles; Eulerian method observes fixed spatial velocity field $\\vec{V}(x, y, z, t) = u\\hat{i} + v\\hat{j} + w\\hat{k}$.",
            "Streamlines & Continuity Equation: Streamline is curve tangent to velocity vectors ($dx/u = dy/v = dz/w$); Differential continuity equation for incompressible flow: $\\nabla \\cdot \\vec{V} = \\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} + \\frac{\\partial w}{\\partial z} = 0$."
        ],
        "keyPoints": [
            "Newton's Law of Viscosity: $\\tau = \\mu \\frac{du}{dy}$ [$\\text{N/m}^2$]; Dynamic viscosity unit: $\\text{Pa}\\cdot\\text{s} = 10\\text{ Poise}$.",
            "Center of Pressure Formula: $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2 \\theta}{A \\bar{h}}$; $h_{cp} > \\bar{h}$ always.",
            "Metacentric Height Equation: $GM = \\frac{I}{V} - BG$; Floating body is stable iff $GM > 0$.",
            "Buoyant Force: $F_B = \\rho g V_{displaced}$ directed vertically upward through center of buoyancy.",
            "Hydrostatic Equation: $\\frac{dP}{dz} = -\\rho g$; $P = \\rho g h$ for uniform density liquid.",
            "Differential Manometer Equation: $P_A - P_B = (\\rho_m - \\rho) g h$.",
            "Kinematic Viscosity: $\\nu = \\frac{\\mu}{\\rho}$ [$\\text{m}^2/\\text{s} = 10^4\\text{ Stokes}$].",
            "Incompressible Continuity Equation: $\\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} + \\frac{\\partial w}{\\partial z} = 0$.",
            "Stream Function ($\\psi$) & Velocity Potential ($\\phi$): For 2D flow: $u = \\frac{\\partial \\psi}{\\partial y} = -\\frac{\\partial \\phi}{\\partial x}$ and $v = -\\frac{\\partial \\psi}{\\partial x} = -\\frac{\\partial \\phi}{\\partial y}$; Cauchy-Riemann equations hold.",
            "Exam Submerged Surface Tip: For a vertical rectangle of height $h$ with top edge at liquid surface, center of pressure is exactly at $\\frac{2}{3} h$ depth."
        ]
    },

    # STRENGTH OF MATERIALS
    "btech-som: stress, strain & bending": {
        "highlights": [
            "Stress & Strain Tensor: Direct normal stress $\\sigma = P / A$; Shear stress $\\tau = V / A$; Linear strain $\\varepsilon = \\Delta L / L$; Shear strain $\\gamma = \\Delta x / h$; Hooke's law $\\sigma = E \\varepsilon$ and $\\tau = G \\gamma$.",
            "Elastic Constants & Interrelationships: Young's modulus $E$, Shear modulus $G$, Bulk modulus $K$, Poisson's ratio $\\nu = -\\varepsilon_{lat} / \\varepsilon_{long}$; relationships: $E = 2G(1 + \\nu) = 3K(1 - 2\\nu) = \\frac{9KG}{3K + G}$.",
            "Thermal Stresses & Composite Bars: Free thermal expansion $\\Delta L_{th} = L \\alpha \\Delta T$; if completely constrained, compressive thermal stress $\\sigma_{th} = E \\alpha \\Delta T$; in composite bars, strain compatibility $\\varepsilon_1 = \\varepsilon_2$ enforces load sharing.",
            "Shear Force & Bending Moment Diagrams (SFD & BMD): Differential relations: $\\frac{dV}{dx} = -w(x)$ (slope of SFD equals load intensity) and $\\frac{dM}{dx} = V(x)$ (slope of BMD equals shear force); maximum bending moment occurs where $V(x) = 0$.",
            "Euler-Bernoulli Beam Bending Theory: Pure bending equation: $\\frac{\\sigma}{y} = \\frac{M}{I} = \\frac{E}{R}$, where $M$ is bending moment, $I$ is area moment of inertia, $y$ is distance from neutral axis, and $R$ is radius of curvature.",
            "Section Modulus & Beam Design: Section modulus $Z = I / y_{max}$; maximum bending stress $\\sigma_{max} = M / Z$; rectangular section $Z = \\frac{b d^2}{6}$; solid circular section $Z = \\frac{\\pi d^3}{32}$.",
            "Shear Stress Distribution in Beams: Transverse shear stress $\\tau(y) = \\frac{V Q}{I b}$, where $Q = A' \\bar{y}$ is first moment of area; parabolic distribution in rectangular beams with maximum at neutral axis: $\\tau_{max} = 1.5 \\tau_{avg}$.",
            "Pure Torsion of Circular Shafts: Torsion equation: $\\frac{\\tau}{r} = \\frac{T}{J} = \\frac{G \\theta}{L}$, where $T$ is applied torque, $J$ is polar moment of inertia ($J = \\frac{\\pi d^4}{32}$), and $\\theta$ is angle of twist.",
            "Principal Stresses & Mohr's Circle: 2D stress transformation: Principal stresses $\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$; Maximum in-plane shear stress $\\tau_{max} = \\frac{\\sigma_1 - \\sigma_2}{2}$.",
            "Euler Column Buckling Theory: Critical buckling load for slender columns: $P_{cr} = \\frac{\\pi^2 E I}{L_e^2}$, where $L_e$ is effective length; Rankine formula $\\frac{1}{P_R} = \\frac{1}{P_c} + \\frac{1}{P_e}$ bridges short and slender column regimes."
        ],
        "keyPoints": [
            "Bending Equation: $\\frac{\\sigma}{y} = \\frac{M}{I} = \\frac{E}{R}$.",
            "Torsion Equation: $\\frac{\\tau}{r} = \\frac{T}{J} = \\frac{G \\theta}{L}$.",
            "Elastic Constants Formulas: $E = 2G(1 + \\nu)$ and $E = 3K(1 - 2\\nu)$; Theoretical limits: $-1 \\le \\nu \\le 0.5$ (metals $\\approx 0.3$).",
            "Beam Shear Stress Peak: Rectangular section: $\\tau_{max} = 1.5 \\tau_{avg} = \\frac{3 V}{2 b d}$; Circular section: $\\tau_{max} = \\frac{4}{3} \\tau_{avg}$.",
            "Euler Buckling Loads: Both ends pinned: $L_e = L$; Both ends fixed: $L_e = 0.5 L$; One fixed one free: $L_e = 2 L$; One fixed one pinned: $L_e = L / \\sqrt{2}$.",
            "Mohr's Circle Center & Radius: Center $= \\left(\\frac{\\sigma_x + \\sigma_y}{2}, 0\\right)$; Radius $R = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2} = \\tau_{max}$.",
            "Point of Contraflexure: Point along beam where bending moment changes sign ($M(x) = 0$); curvature reverses.",
            "Thermal Stress: $\\sigma = E \\alpha \\Delta T$ (independent of length $L$ if fully constrained).",
            "Thin Cylinder Hoop vs Longitudinal Stress: Hoop stress $\\sigma_h = \\frac{P d}{2 t}$; Longitudinal stress $\\sigma_l = \\frac{P d}{4 t} = \\frac{\\sigma_h}{2}$.",
            "Exam SFD/BMD Rule: Point load causes step jump in SFD; UDL causes linear slope in SFD and parabolic curve in BMD; point moment causes vertical step jump in BMD."
        ]
    },

    # BUILDING MATERIALS & SURVEYING
    "btech-civil: materials & surveying": {
        "highlights": [
            "Cement Chemistry & Hydration: Portland cement Bogue's compounds: Tricalcium silicate ($C_3S$, fast early strength), Dicalcium silicate ($C_2S$, progressive late strength), Tricalcium aluminate ($C_3A$, rapid initial setting and high heat), and Tetracalcium aluminoferrite ($C_4AF$).",
            "Concrete Workability & Strength: Abram's water-cement law ($f_c = A / B^{w/c}$); workability evaluated via Slump Cone test (true, zero, shear, collapse slump), Compacting Factor test, and Vee-Bee consistometer; compressive strength $f_{ck}$ tested at 28 days.",
            "Structural Steel & Timber: Mild steel Fe250 and high-yield deformed bars Fe415/Fe500; stress-strain yield plateau; timber seasoning methods (air vs kiln drying to $12\\%$ moisture), defects (shakes, knots), and preservation.",
            "Masonry & Foundation Design: English bond (alternate headers and stretchers, highest strength) vs Flemish bond; shallow foundations (isolated, combined, strap, raft footings) vs deep foundations (end-bearing and friction piles).",
            "Terzaghi's Bearing Capacity Theory: Ultimate bearing capacity for strip footing: $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$, where $N_c, N_q, N_\\gamma$ are bearing capacity factors dependent on internal friction angle $\\phi$.",
            "Surveying Fundamental Principles: Principle 1: Working from Whole to Part (prevents accumulation of measurement errors); Principle 2: Locating a new station by at least two independent measurements (angular and linear).",
            "Leveling & Height Computations: Differential spirit leveling; Collimation system (Height of Instrument $HI = \\text{BM} + BS$, Reduced Level $RL = HI - FS$) and Rise-and-Fall method (provides three arithmetic error checks: $\\sum BS - \\sum FS = \\sum \\text{Rise} - \\sum \\text{Fall} = RL_{last} - RL_{first}$).",
            "Earth Curvature & Refraction Corrections: Combined curvature and refraction correction: $C_{comb} = C_c - C_r = 0.0785 d^2 - 0.0112 d^2 = 0.0673 d^2\\text{ meters}$ (with distance $d$ in kilometers).",
            "Theodolite Traversing & Balancing: Measurement of horizontal and vertical angles; closed traverse latitude ($L = l \\cos \\theta$) and departure ($D = l \\sin \\theta$); closing error $e = \\sqrt{(\\sum L)^2 + (\\sum D)^2}$; balanced via Bowditch (compass) or Transit rule.",
            "Total Station & Global Navigation (GNSS): Electronic Distance Measurement (EDM via infrared phase shift), internal microprocessor coordinate computation; GPS satellite trilateration, pseudo-ranges, and Differential GPS (DGPS) achieving centimeter-level accuracy."
        ],
        "keyPoints": [
            "Bogue's Compounds Roles: $C_3S$: early strength (7-14 days); $C_2S$: ultimate long-term strength (after 28 days); $C_3A$: flash set; gypsum added to retard $C_3A$.",
            "Abram's Water-Cement Law: Compressive strength depends solely on water-cement ratio $w/c$, assuming fully compacted concrete.",
            "Combined Leveling Correction: $C_{comb} = 0.0673 d^2\\text{ m}$ (where $d$ is sight distance in km); always subtractive from staff reading.",
            "Rise and Fall Three-Point Check: $\\sum BS - \\sum FS = \\sum \\text{Rise} - \\sum \\text{Fall} = \\text{Last RL} - \\text{First RL}$.",
            "Bowditch's Rule for Traversing: Correction to latitude $= -\\sum L \\times \\frac{\\text{Length of line}}{\\text{Perimeter of traverse}}$.",
            "Terzaghi Bearing Capacity Factors: For pure clay ($\\phi = 0$): $N_c = 5.7, N_q = 1.0, N_\\gamma = 0$; $q_u = 5.7 c + \\gamma D_f$.",
            "Safe Bearing Capacity: $SBC = \\frac{q_{net,ult}}{SF} + \\gamma D_f$ with typical Factor of Safety $SF = 2.5 - 3.0$.",
            "Characteristic Concrete Strength ($f_{ck}$): Strength below which not more than $5\\%$ of test results are expected to fall.",
            "Total Station EDM Principle: Measures distance by emitting modulated infrared light and detecting phase shift of returned beam: $d = \\frac{c \\Delta t}{2}$.",
            "Exam Leveling Table Check: Always complete all three arithmetic difference checks at the base of the leveling field book table."
        ]
    }
}

print("Core Engineering units loaded.")
