"""
Complete, dedicated unit data for B.Tech Semester 3 Mechanical, Civil, Chemical & Aerospace Engineering.
Every single unit of every subject has dedicated, distinct, authentic 10 Highlights + 10 Bookmarks.
"""

mech_civil_data = {
    # -------------------------------------------------------------------------
    # FLUID MECHANICS
    # -------------------------------------------------------------------------
    ("Fluid Mechanics", 1): {
        "title": "Fluid Properties",
        "highlights": [
            "Fluid Continuum Hypothesis: Treats fluid as continuous matter distribution without molecular voids; Valid when Knudsen number $Kn = \\lambda / L < 0.01$.",
            "Newton's Law of Viscosity: Dynamic shear stress $\\tau = \\mu \\frac{du}{dy}$; Newtonian fluids exhibit linear relation; Non-Newtonian categorized into dilatant, pseudoplastic, Bingham plastic, and thixotropic.",
            "Kinematic Viscosity & Dimensions: Ratio of dynamic viscosity to density: $\\nu = \\mu / \\rho$; Expressed in $\\text{m}^2/\\text{s}$ or Stokes ($1\\text{ St} = 10^{-4}\\text{ m}^2/\\text{s}$).",
            "Surface Tension & Capillary Action: Surface energy per unit area $\\sigma$; Capillary rise or depression in glass tube: $h = \\frac{4\\sigma\\cos\\theta}{\\rho g d}$; Contact angle $\\theta < 90^\\circ$ for wetting liquids.",
            "Compressibility & Bulk Modulus: Resistance to volumetric compression $K = -V \\frac{dP}{dV} = \\rho \\frac{dP}{d\\rho}$; Speed of sound in fluid $c = \\sqrt{K/\\rho}$.",
            "Vapor Pressure & Cavitation Hazard: When local absolute fluid pressure drops below saturation vapor pressure $P_{sat}(T)$, boiling bubbles form and collapse violently against boundaries.",
            "Specific Gravity & Density Ratios: Dimensionless ratio $SG = \\rho_{\\text{fluid}} / \\rho_{\\text{water}}$ at $4^\\circ\\text{C}$ where $\\rho_{\\text{water}} = 1000\\text{ kg/m}^3$.",
            "Cohesion vs Adhesion Forces: Intermolecular attraction between like molecules (cohesion, causing drop formation) vs unlike molecules (adhesion, causing meniscus wetting).",
            "Pressure Droplet Equilibrium: Pressure jump across spherical droplet $\\Delta P = \\frac{2\\sigma}{R}$; Across soap bubble (two interfaces) $\\Delta P = \\frac{4\\sigma}{R}$; Across liquid jet $\\Delta P = \\frac{\\sigma}{R}$.",
            "University Examination Strategy: State definitions with precise SI units, derive the capillary rise equation by balancing vertical surface tension force against liquid weight, and classify non-Newtonian rheological curves."
        ],
        "keyPoints": [
            "Newtonian Shear Equation: $\\tau = \\mu \\frac{du}{dy}$ where $\\mu$ is dynamic viscosity ($\text{Pa}\\cdot\\text{s}$).",
            "Capillary Rise Formula: $h = \\frac{4\\sigma\\cos\\theta}{\\rho g d}$.",
            "Soap Bubble Pressure Jump: $\\Delta P = \\frac{4\\sigma}{R}$ (due to inner and outer air-liquid surfaces).",
            "Liquid Droplet Pressure Jump: $\\Delta P = \\frac{2\\sigma}{R}$.",
            "Bulk Modulus Formula: $K = \\rho \\frac{dP}{d\\rho}$.",
            "Sound Speed in Fluid: $c = \\sqrt{\\frac{K}{\\rho}}$.",
            "Cavitation Criterion: Occurs whenever static pressure drops to local vapor pressure: $P \\le P_v(T)$.",
            "Water Density Standard: Maximum density occurs at $3.98^\\circ\\text{C}$ ($1000\\text{ kg/m}^3$).",
            "Bingham Plastic Behavior: Requires minimum yield stress $\\tau_y$ before shear strain rate initiates (e.g. drilling mud, toothpaste).",
            "Exam Scoring Tip: Dynamic viscosity of liquids decreases with temperature ($d\\mu/dT < 0$), whereas viscosity of gases increases with temperature ($d\\mu/dT > 0$)."
        ]
    },
    ("Fluid Mechanics", 2): {
        "title": "Fluid Statics",
        "highlights": [
            "Pascal's Law of Hydrostatic Pressure: Fluid pressure at any point in a static fluid is equal in all directions: $P_x = P_y = P_z$; Principle behind hydraulic press mechanical advantage $F_2/F_1 = A_2/A_1$.",
            "Hydrostatic Pressure Distribution: Vertical pressure gradient $\\frac{dP}{dz} = -\\rho g = -\\gamma$; Pressure increases linearly with depth: $P = P_0 + \\rho g h$.",
            "Manometry for Pressure Measurement: Piezometer tubes, U-tube manometers, and inverted differential manometers: $\\Delta P = (\\rho_m - \\rho) g h$; Inclined manometers for high-sensitivity gas draft readings.",
            "Hydrostatic Force on Submerged Plane Surfaces: Total pressure force $F = \\rho g \\bar{h} A$ acting at center of pressure $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2\\theta}{A \\bar{h}}$, which always lies below the area centroid.",
            "Hydrostatic Force on Curved Surfaces: Resolved into horizontal force $F_x = \\rho g \\bar{h} A_{proj}$ and vertical force $F_y = \\text{Weight of fluid directly above curved surface}$; Resultant $F_R = \\sqrt{F_x^2 + F_y^2}$.",
            "Archimedes Principle of Buoyancy: Buoyant force $F_b = \\rho g V_{disp}$ acting vertically upward through the center of buoyancy $B$ (centroid of displaced fluid volume).",
            "Metacenter & Rotational Stability of Floating Bodies: Metacenter $M$ is intersection of vertical buoyant line of action with original vertical body centerline under small tilt angle $\\theta$.",
            "Metacentric Height ($GM$): $GM = BM - BG = \\frac{I}{V_{disp}} - BG$; Stable equilibrium if $GM > 0$ ($M$ above $G$); Unstable if $GM < 0$; Neutral if $GM = 0$.",
            "Time Period of Rolling Oscillation: Floating ship rolling period $T = 2\\pi \\sqrt{\\frac{k^2}{g \\cdot GM}}$ where $k$ is radius of gyration; Large $GM$ improves stability but causes uncomfortable jerky rolls.",
            "University Examination Strategy: Draw pressure prisms on submerged gates, calculate center of pressure using parallel axis theorem, and derive metacentric height formula $BM = I/V$."
        ],
        "keyPoints": [
            "Hydrostatic Equation: $\\frac{dP}{dz} = -\\rho g$.",
            "Center of Pressure on Plane Surface: $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2\\theta}{A \\bar{h}}$.",
            "Curved Surface Vertical Force: $F_y$ equals the weight of the fluid column supported above the surface.",
            "Archimedes Buoyancy Formula: $F_B = \\rho g V_{\\text{displaced}}$.",
            "Metacentric Radius Formula: $BM = \\frac{I}{V}$, where $I$ is moment of inertia of waterline plane.",
            "Stability Criterion for Floating Bodies: Stable iff Metacenter $M$ lies strictly above Center of Gravity $G$ ($GM > 0$).",
            "Submerged Body Stability: Stable iff Center of Buoyancy $B$ lies strictly above Center of Gravity $G$.",
            "Rolling Period of Ship: $T = 2\\pi \\sqrt{\\frac{k^2}{g \\cdot GM}}$.",
            "Absolute vs Gauge Pressure: $P_{\\text{abs}} = P_{\\text{gauge}} + P_{\\text{atm}}$.",
            "Exam Tip: In center of pressure calculations, remember that $I_G$ for a rectangle of width $b$ and depth $d$ is $\\frac{b d^3}{12}$ about its horizontal centroidal axis."
        ]
    },
    ("Fluid Mechanics", 3): {
        "title": "Fluid Kinematics",
        "highlights": [
            "Lagrangian vs Eulerian Flow Description: Lagrangian tracks individual moving fluid particles over time $\\vec{r}(t)$; Eulerian describes flow field velocity $\\vec{V}(x, y, z, t)$ at fixed spatial locations.",
            "Material (Substantial) Derivative: Total acceleration $\\frac{D\\vec{V}}{Dt} = \\frac{\\partial \\vec{V}}{\\partial t} + (\\vec{V} \\cdot \\nabla)\\vec{V}$; First term is local temporal acceleration; Second term is convective spatial acceleration.",
            "Flow Classification: Steady vs unsteady ($\\partial / \\partial t = 0$), uniform vs non-uniform ($\\partial / \\partial s = 0$), laminar vs turbulent (Reynolds number $Re$), rotational vs irrotational (curl $\\nabla \\times \\vec{V} = \\vec{0}$).",
            "Streamlines, Pathlines, and Streaklines: Streamline is instantaneous curve tangent everywhere to velocity vector ($dx/u = dy/v = dz/w$); Pathline is actual path traversed by single particle; Streakline is locus of particles passing through fixed injection point.",
            "Three-Dimensional Differential Continuity Equation: Conservation of mass $\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\vec{V}) = 0$; For incompressible flow: $\\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} + \\frac{\\partial w}{\\partial z} = 0$.",
            "Velocity Potential Function ($\\phi$): Defined strictly for irrotational flows ($\\nabla \\times \\vec{V} = 0$) such that $u = -\\frac{\\partial \\phi}{\\partial x}, v = -\\frac{\\partial \\phi}{\\partial y}$; Substituting into continuity yields Laplace equation $\\nabla^2 \\phi = 0$.",
            "Stream Function ($\\psi$): Defined for 2D incompressible flow such that $u = \\frac{\\partial \\psi}{\\partial y}, v = -\\frac{\\partial \\psi}{\\partial x}$; Automatically satisfies continuity equation; Difference $\\psi_2 - \\psi_1$ equals volumetric discharge.",
            "Orthogonality of Equipotential and Streamlines: Slopes of curves $\\phi = c_1$ and $\\psi = c_2$ satisfy $\\left(\\frac{dy}{dx}\\right)_\\phi \\cdot \\left(\\frac{dy}{dx}\\right)_\\psi = -1$; Forms orthogonal flow nets for 2D seepage and potential flow.",
            "Vorticity and Circulation: Vorticity vector $\\vec{\\omega} = \\nabla \\times \\vec{V} = 2\\vec{\\Omega}$; Circulation $\\Gamma = \\oint_C \\vec{V} \\cdot d\\vec{r} = \\iint_A \\vec{\\omega} \\cdot \\hat{n} dA$ (Stokes' theorem).",
            "University Examination Strategy: Verify whether a given 2D velocity field satisfies continuity, test for irrotationality by computing $\\omega_z$, and evaluate the conjugate stream or potential function."
        ],
        "keyPoints": [
            "Substantial Derivative: $\\frac{D}{Dt} = \\frac{\\partial}{\\partial t} + u\\frac{\\partial}{\\partial x} + v\\frac{\\partial}{\\partial y} + w\\frac{\\partial}{\\partial z}$.",
            "Incompressible Continuity: $\\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} + \\frac{\\partial w}{\\partial z} = 0$.",
            "Streamline Differential Equation: $\\frac{dx}{u} = \\frac{dy}{v} = \\frac{dz}{w}$.",
            "Potential Function Velocities: $u = -\\frac{\\partial \\phi}{\\partial x}, \\; v = -\\frac{\\partial \\phi}{\\partial y}$.",
            "Stream Function Velocities: $u = \\frac{\\partial \\psi}{\\partial y}, \\; v = -\\frac{\\partial \\psi}{\\partial x}$.",
            "Laplace Potential Equation: $\\nabla^2 \\phi = 0$ (harmonic function for potential flow).",
            "Flow Net Orthogonality: Lines of constant $\\phi$ intersect lines of constant $\\psi$ at strictly $90^\\circ$.",
            "Vorticity in 2D Flow: $\\omega_z = \\frac{\\partial v}{\\partial x} - \\frac{\\partial u}{\\partial y}$; Irrotational when $\\omega_z = 0$.",
            "Discharge between Streamlines: $q = \\psi_2 - \\psi_1$ ($\text{m}^3/(\\text{s}\\cdot\\text{m})$).",
            "Exam Tip: A stream function $\\psi$ exists for any 2D incompressible flow regardless of whether it is rotational or irrotational, but $\\phi$ exists ONLY if the flow is irrotational."
        ]
    },
    ("Fluid Mechanics", 4): {
        "title": "Fluid Dynamics",
        "highlights": [
            "Euler's Equation of Motion: Derived from Newton's second law along a streamline for frictionless, inviscid flow: $\\frac{dP}{\\rho} + v dv + g dz = 0$.",
            "Bernoulli's Equation Integration: Integrating Euler's equation along a streamline for incompressible, steady, inviscid flow: $\\frac{P}{\\rho g} + \\frac{v^2}{2g} + z = H = \\text{constant}$; Represents Pressure head, Velocity head, and Datum head.",
            "Assumptions and Limitations of Bernoulli's Equation: Strictly valid for steady, incompressible, frictionless (inviscid) flow along a streamline with no external energy transfer (shaft work or heat transfer).",
            "Energy Grade Line (EGL) & Hydraulic Grade Line (HGL): $\\text{EGL} = \\frac{P}{\\rho g} + \\frac{v^2}{2g} + z$; $\\text{HGL} = \\frac{P}{\\rho g} + z$; Vertical separation between EGL and HGL equals velocity head $\\frac{v^2}{2g}$; EGL always slopes downward in direction of flow due to frictional losses.",
            "Linear Momentum Equation in Fluid Flow: Derived from Reynolds Transport Theorem: $\\sum \\vec{F} = \\dot{m}(\\vec{v}_{out} - \\vec{v}_{in})$; Used to evaluate hydrodynamic impact forces on pipe bends, nozzles, and deflector vanes.",
            "Hydrodynamic Force on Reducing Pipe Bend: Resolving pressure and momentum forces along Cartesian axes: $F_x = P_1 A_1 - P_2 A_2 \\cos\\theta - \\rho Q (v_2 \\cos\\theta - v_1)$ and $F_y = -P_2 A_2 \\sin\\theta - \\rho Q (v_2 \\sin\\theta)$.",
            "Navier-Stokes Equations: Fundamental governing differential equations for viscous Newtonian fluid flow: $\\rho \\frac{D\\vec{V}}{Dt} = -\\nabla P + \\mu \\nabla^2 \\vec{V} + \\rho \\vec{g}$.",
            "Laminar Flow Between Parallel Plates (Couette & Poiseuille Flow): Plane Poiseuille flow driven by pressure gradient yields parabolic velocity profile $u(y) = \\frac{1}{2\\mu}\\left(-\\frac{dP}{dx}\\right)(b y - y^2)$ with maximum velocity $u_{max} = 1.5 \\bar{u}$.",
            "Hagen-Poiseuille Flow in Circular Pipes: Fully developed laminar pipe flow; Parabolic velocity $u(r) = u_{max}\\left(1 - \\frac{r^2}{R^2}\\right)$; Head loss $h_f = \\frac{32 \\mu \\bar{v} L}{\\rho g D^2}$; Maximum velocity $u_{max} = 2 \\bar{v}$.",
            "University Examination Strategy: Derive Bernoulli's equation from Euler's differential formulation along a streamline, draw EGL and HGL for converging-diverging pipes, and compute anchor forces on a pipe bend."
        ],
        "keyPoints": [
            "Euler's Differential Equation: $\\frac{dP}{\\rho} + v dv + g dz = 0$.",
            "Bernoulli's Total Head: $\\frac{P}{\\rho g} + \\frac{v^2}{2g} + z = H$.",
            "HGL Definition: Piezo-metric head: $\\text{HGL} = \\frac{P}{\\rho g} + z$.",
            "Velocity Head: $\\text{Distance between EGL and HGL} = \\frac{v^2}{2g}$.",
            "Momentum Equation on Pipe Bend: $\\vec{F} = \\rho Q (\\vec{v}_2 - \\vec{v}_1)$.",
            "Hagen-Poiseuille Pressure Drop: $\\Delta P = \\frac{32 \\mu \\bar{v} L}{D^2}$.",
            "Laminar Pipe Peak Velocity: $u_{max} = 2 \\bar{v}$ at pipe centerline.",
            "Laminar Friction Factor: $f = \\frac{64}{Re}$ (strictly for $Re < 2000$).",
            "Kinetic Energy Correction Factor ($\\alpha$): Ratio of actual kinetic energy flux to 1D average flux; $\\alpha = 2.0$ for laminar pipe flow, $\\alpha \\approx 1.05$ for turbulent.",
            "Exam Scoring Tip: If pump work $h_p$ is added or turbine work $h_t$ is extracted, modified Bernoulli equation reads: $\\frac{P_1}{\\rho g} + \\frac{v_1^2}{2g} + z_1 + h_p = \\frac{P_2}{\\rho g} + \\frac{v_2^2}{2g} + z_2 + h_t + h_L$."
        ]
    },
    ("Fluid Mechanics", 5): {
        "title": "Flow Measurement",
        "highlights": [
            "Venturi Meter Working Principle: Converging cone ($20-22^\\circ$), cylindrical throat, and diverging diffuser cone ($5-7^\\circ$ to prevent boundary layer separation); Theoretical discharge $Q_{th} = \\frac{A_1 A_2}{\\sqrt{A_1^2 - A_2^2}}\\sqrt{2g h}$; Actual discharge $Q = C_d Q_{th}$ with coefficient of discharge $C_d \\approx 0.96-0.98$.",
            "Orifice Meter Characteristics: Circular hole in thin plate clamped between pipe flanges; Flow contracts beyond orifice forming vena contracta (minimum area $A_c = C_c A_0$); $C_d = C_c \\cdot C_v \\approx 0.60-0.65$; High head loss compared to Venturi meter.",
            "Pitot Tube & Pitot-Static Tube: Measures stagnation pressure where kinetic velocity drops to zero ($P_{stag} = P_{stat} + \\frac{1}{2}\\rho v^2$); Stagnation head $h = \\frac{v^2}{2g}$; Local velocity $v = C_v \\sqrt{2g h}$ with $C_v \\approx 0.98-1.0$.",
            "Flow Over Notches and Weirs: Sharp-crested rectangular weir discharge $Q = \\frac{2}{3} C_d b \\sqrt{2g} H^{3/2}$; Triangular V-notch weir discharge $Q = \\frac{8}{15} C_d \\tan\\left(\\frac{\\theta}{2}\\right) \\sqrt{2g} H^{5/2}$; V-notches provide high precision at low discharges.",
            "Francis Formula for End Contractions: Rectangular weir with $n$ end contractions: effective crest width $L' = L - 0.1 n H$; Cipolletti trapezoidal weir with side slopes $1:4$ automatic end contraction compensation ($Q = \\frac{2}{3} C_d L \\sqrt{2g} H^{3/2}$).",
            "Rotameter (Variable Area Flowmeter): Tapered vertical glass tube containing free float; Upward fluid drag balances float net submerged weight; Float elevation is linear function of flow rate $Q$.",
            "Electromagnetic and Ultrasonic Flowmeters: Non-intrusive flow measurement; Faraday's electromagnetic induction law $E = B D v$ for conductive fluids; Ultrasonic transit-time difference $\\Delta t$ for clean liquids.",
            "Major Friction Losses in Pipes (Darcy-Weisbach): Head loss $h_f = \\frac{f L v^2}{2 g D}$; Darcy friction factor $f = 64/Re$ for laminar, determined from Colebrook equation or Moody diagram for turbulent flow.",
            "Minor Head Losses in Pipe Systems: Sudden expansion ($h_e = \\frac{(v_1 - v_2)^2}{2g}$), sudden contraction ($h_c = 0.5 \\frac{v_2^2}{2g}$), pipe entrance ($0.5 v^2/2g$), exit ($v^2/2g$), valves and bends ($k v^2/2g$).",
            "University Examination Strategy: Derive the Venturimeter theoretical and actual discharge formula, calculate V-notch flow rates, and evaluate total head loss in pipe networks."
        ],
        "keyPoints": [
            "Venturi Meter Formula: $Q = \\frac{C_d A_1 A_2}{\\sqrt{A_1^2 - A_2^2}}\\sqrt{2g h}$.",
            "Orifice Meter Discharge Coefficient: $C_d = C_c \\times C_v$ (typically $0.62$).",
            "Pitot Tube Velocity: $v = \\sqrt{2g h} = \\sqrt{\\frac{2(P_{\\text{stag}} - P_{\\text{stat}})}{\\rho}}$.",
            "Rectangular Weir Discharge: $Q = \\frac{2}{3} C_d L \\sqrt{2g} H^{3/2}$.",
            "Triangular V-Notch Discharge: $Q = \\frac{8}{15} C_d \\tan\\left(\\frac{\\theta}{2}\\right)\\sqrt{2g} H^{5/2}$.",
            "V-Notch $90^\\circ$ Special Case: For $\\theta = 90^\\circ$ and $C_d = 0.6$, $Q \\approx 1.417 H^{5/2}$.",
            "Darcy-Weisbach Loss: $h_f = \\frac{f L v^2}{2 g D}$.",
            "Sudden Expansion Loss: $h_L = \\frac{(v_1 - v_2)^2}{2g}$ (Borda-Carnot formula).",
            "Sudden Contraction Loss: $h_c = \\frac{v_2^2}{2g}\\left(\\frac{1}{C_c} - 1\\right)^2 \\approx 0.5 \\frac{v_2^2}{2g}$.",
            "Exam Scoring Tip: For manometric reading $x$ with manometric fluid of specific gravity $S_m$ and pipe fluid $S_0$, differential head is $h = x\\left(\\frac{S_m}{S_0} - 1\\right)$."
        ]
    },

    # -------------------------------------------------------------------------
    # STRENGTH OF MATERIALS
    # -------------------------------------------------------------------------
    ("Strength of Materials", 1): {
        "title": "Stress & Strain",
        "highlights": [
            "Stress & Strain Tensor Concepts: Normal stress $\\sigma = P/A$ and shear stress $\\tau = V/A$; Longitudinal strain $\\epsilon = \\Delta L / L$ and lateral strain $\\epsilon_{lat} = -\\nu \\epsilon$; Poisson's ratio $\\nu$ bounded between $0$ and $0.5$ for isotropic materials.",
            "Hooke's Law & Stress-Strain Curve for Mild Steel: Linear elastic proportionality limit, upper and lower yield points, plastic strain hardening plateau, ultimate tensile strength (UTS), and necking leading to cup-and-cone ductile fracture.",
            "Elastic Moduli & Fundamental Interrelations: Young's Modulus $E = \\sigma / \\epsilon$, Shear Modulus $G = \\tau / \\gamma$, Bulk Modulus $K = -P / (\\Delta V / V)$; Universal isotropic relations: $E = 2G(1+\\nu) = 3K(1-2\\nu) = \\frac{9KG}{3K+G}$.",
            "Volumetric Strain & Dilatation: $\\epsilon_v = \\frac{\\Delta V}{V} = \\epsilon_x + \\epsilon_y + \\epsilon_z$; Under triaxial stress: $\\epsilon_v = \\frac{\\sigma_x + \\sigma_y + \\sigma_z}{E}(1 - 2\\nu)$; For incompressible material ($\\nu = 0.5$), $\\epsilon_v = 0$.",
            "Elongation of Tapered and Stepped Bars: Axial deflection under load $P$: Uniform bar $\\delta = \\frac{P L}{A E}$; Circular tapered bar from $d_1$ to $d_2$: $\\delta = \\frac{4 P L}{\\pi E d_1 d_2}$; Self-weight elongation of vertical bar: $\\delta = \\frac{\\rho g L^2}{2E} = \\frac{W L}{2AE}$.",
            "Composite Bars & Statically Indeterminate Systems: Parallel bars sharing strain ($\\epsilon_1 = \\epsilon_2 \\implies \\frac{\\sigma_1}{E_1} = \\frac{\\sigma_2}{E_2}$); Total load $P = \\sigma_1 A_1 + \\sigma_2 A_2$; Modular ratio $m = E_1 / E_2$.",
            "Thermal Stresses and Strains: Free thermal expansion $\\delta_T = L \\alpha \\Delta T$; If expansion is completely prevented by rigid supports, compressive thermal stress induced is $\\sigma_T = E \\alpha \\Delta T$; If supports yield by $\\lambda$, stress is $\\sigma = E(\\alpha \\Delta T - \\lambda/L)$.",
            "Strain Energy and Resilience: Strain energy stored in linear elastic axial member $U = \\frac{P^2 L}{2AE} = \\frac{\\sigma^2}{2E} V$; Proof resilience (maximum strain energy up to elastic limit); Modulus of resilience $u_r = \\sigma_y^2 / (2E)$.",
            "Impact (Dynamic) Loading: Suddenly applied load produces instantaneous stress $\\sigma_{dyn} = 2 \\sigma_{stat}$; Falling weight $W$ from height $h$ produces impact factor $IF = 1 + \\sqrt{1 + \\frac{2h}{\\delta_{stat}}}$ and peak stress $\\sigma_{max} = \\sigma_{stat} \\cdot IF$.",
            "University Examination Strategy: Draw the complete stress-strain diagram for ductile mild steel labeling all six critical points, solve composite bar load sharing problems, and derive thermal stress equations under yielding boundaries."
        ],
        "keyPoints": [
            "Axial Deflection Formula: $\\delta = \\frac{P L}{A E}$.",
            "Circular Tapered Bar Deflection: $\\delta = \\frac{4 P L}{\\pi E d_1 d_2}$.",
            "Self-Weight Bar Deflection: $\\delta_{sw} = \\frac{\\rho g L^2}{2E} = \\frac{W L}{2AE}$ (exactly half of tip point load deflection).",
            "Elastic Constants Relation 1: $E = 2G(1 + \\nu)$.",
            "Elastic Constants Relation 2: $E = 3K(1 - 2\\nu)$.",
            "Elastic Constants Relation 3: $E = \\frac{9KG}{3K + G}$.",
            "Volumetric Strain Formula: $\\epsilon_v = \\frac{\\sigma_x + \\sigma_y + \\sigma_z}{E}(1 - 2\\nu)$.",
            "Thermal Stress Formula: $\\sigma_T = E \\alpha \\Delta T$ (independent of length $L$ for fully restrained bar).",
            "Strain Energy Formula: $U = \\frac{\\sigma^2}{2E} \\times \\text{Volume} = \\frac{P^2 L}{2AE}$.",
            "Exam Scoring Tip: Thermal stress is zero if a bar is completely free to expand without physical constraint; stress only develops when thermal strain is restrained."
        ]
    },
    ("Strength of Materials", 2): {
        "title": "Shear Force & Bending Moment",
        "highlights": [
            "Beam Types and Support Classifications: Cantilever, simply supported, overhanging, fixed-ended, and continuous beams; Support boundary reactions: Roller (1 vertical reaction), Pin/Hinge (vertical and horizontal), Fixed support (vertical, horizontal, and reaction moment $M_r$).",
            "Sign Conventions for Internal Loadings: Shear Force ($V$) positive if left portion moves upward relative to right; Bending Moment ($M$) positive for sagging (concave upward, compression on top fibers, tension on bottom fibers), negative for hogging.",
            "Differential Equilibrium Relationships: Rate of change of shear force equals distributed load intensity: $\\frac{dV}{dx} = -w(x)$; Rate of change of bending moment equals shear force: $\\frac{dM}{dx} = V(x)$; Second derivative $\\frac{d^2M}{dx^2} = -w(x)$.",
            "Shear Force Diagram (SFD) Characteristics: Concentrated point load creates instantaneous vertical jump in SFD equal to load magnitude; Uniformly distributed load (UDL) produces linear inclined slope; Linearly varying load (UVL) produces parabolic profile.",
            "Bending Moment Diagram (BMD) Characteristics: Area under SFD between two sections equals change in bending moment: $M_2 - M_1 = \\int V dx$; BMD is horizontal under zero shear, parabolic under UDL, and cubic under UVL.",
            "Maximum Bending Moment Location: Occurs at the exact section where shear force passes through zero or changes sign ($V = \\frac{dM}{dx} = 0$).",
            "Point of Contraflexure (Inflection Point): Section along beam where bending moment changes sign from sagging to hogging ($M = 0$); Curvature reverses, zero stress on all fibers.",
            "Simply Supported Beam with Central Point Load: Reactions $R_A = R_B = P/2$; SFD is constant $+P/2$ and $-P/2$; BMD is triangular with peak moment $M_{max} = \\frac{P L}{4}$ at midspan.",
            "Simply Supported Beam with Uniformly Distributed Load ($w$): Reactions $R_A = R_B = wL/2$; SFD is linear crossing zero at midspan; BMD is parabolic with peak moment $M_{max} = \\frac{w L^2}{8}$ at midspan.",
            "University Examination Strategy: Draw SFD and BMD directly beneath the beam loading diagram matching x-coordinates, state shear and moment values at all critical discontinuities, and calculate points of contraflexure."
        ],
        "keyPoints": [
            "Differential Load-Shear Relation: $\\frac{dV}{dx} = -w$.",
            "Differential Shear-Moment Relation: $\\frac{dM}{dx} = V$.",
            "Maximum Bending Moment Condition: Occurs strictly where $V = 0$ or changes sign.",
            "Simply Supported Beam with Point Load: $M_{max} = \\frac{P L}{4}$ at midspan.",
            "Simply Supported Beam with UDL: $M_{max} = \\frac{w L^2}{8}$ at midspan.",
            "Cantilever Beam with Point Load: $M_{max} = -P L$ (hogging) at fixed root.",
            "Cantilever Beam with UDL: $M_{max} = -\\frac{w L^2}{2}$ at fixed root.",
            "Point of Contraflexure: Section where $M = 0$ and changes curvature.",
            "Couple / Applied Moment Discontinuity: Concentrated moment creates vertical step jump in BMD without altering SFD.",
            "Exam Tip: In overhanging beams, always locate the point of contraflexure by setting the bending moment equation $M(x) = 0$ and solving for roots."
        ]
    },
    ("Strength of Materials", 3): {
        "title": "Torsion",
        "highlights": [
            "Pure Torsion of Circular Shafts: Assumptions of Euler-Coulomb torsion theory: Cross-sections remain plane and circular without warping, radii remain straight lines, twist angle is proportional to length, stresses within proportional limit.",
            "Fundamental Torsion Equation: $\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G \\theta}{L}$ where $T$ is twisting moment, $J$ is polar moment of inertia, $\\tau$ is shear stress at radius $r$, $G$ is shear modulus, $\\theta$ is angle of twist, and $L$ is shaft length.",
            "Shear Stress Distribution Across Shaft Cross-Section: Varies linearly from zero at central axis to maximum $\\tau_{max}$ at outermost perimeter surface $r = R$: $\\tau(r) = \\tau_{max} \\frac{r}{R}$.",
            "Polar Moment of Inertia ($J$): Solid circular shaft: $J = \\frac{\\pi D^4}{32}$; Hollow circular shaft with outer diameter $D$ and inner diameter $d$: $J = \\frac{\\pi(D^4 - d^4)}{32}$.",
            "Polar Section Modulus ($Z_p$): Defined as $Z_p = J / R$; Solid shaft: $Z_p = \\frac{\\pi D^3}{16}$; Hollow shaft: $Z_p = \\frac{\\pi(D^4 - d^4)}{16 D}$; Torsional strength capacity $T = \\tau_{max} Z_p$.",
            "Torsional Rigidity and Stiffness: Torsional rigidity $G J$ measures resistance to twisting; Torsional stiffness $k_t = \\frac{T}{\\theta} = \\frac{G J}{L}$; Angle of twist $\\theta = \\frac{T L}{G J}$ in radians.",
            "Hollow vs Solid Shaft Efficiency: For identical weight and material, hollow shaft transmits substantially higher torque than solid shaft because material is concentrated at larger radius where shear stress is maximized.",
            "Power Transmission by Rotating Shafts: Power $P = T \\omega = \\frac{2\\pi N T}{60}$ Watts; Torque required $T = \\frac{60 P}{2\\pi N}$; Shaft diameter designed based on allowable shear stress $\\tau_{allow}$ and maximum permissible twist angle per unit length.",
            "Shafts in Series and Parallel: Shafts in series transmit identical torque ($T_1 = T_2 = T$) with additive twist angles ($\\theta_{total} = \\theta_1 + \\theta_2$); Shafts in parallel share torque ($T = T_1 + T_2$) with equal twist angles ($\\theta_1 = \\theta_2$).",
            "University Examination Strategy: Derive the complete torsion equation $\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G\\theta}{L}$ using geometric shear strain on shaft surface, solve power transmission sizing problems, and compare hollow vs solid shaft weight efficiency."
        ],
        "keyPoints": [
            "Torsion Master Equation: $\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G\\theta}{L}$.",
            "Solid Shaft Polar Moment of Inertia: $J = \\frac{\\pi D^4}{32}$.",
            "Solid Shaft Polar Section Modulus: $Z_p = \\frac{\\pi D^3}{16}$.",
            "Hollow Shaft Polar Moment of Inertia: $J = \\frac{\\pi(D^4 - d^4)}{32}$.",
            "Angle of Twist Formula: $\\theta = \\frac{T L}{G J}$ (in radians).",
            "Shaft Power Equation: $P = \\frac{2\\pi N T}{60}$ Watts.",
            "Torque from Power: $T = \\frac{60 P}{2\\pi N}$ Newton-meters.",
            "Shafts in Series Condition: $T_1 = T_2 = T, \\quad \\theta = \\theta_1 + \\theta_2$.",
            "Shafts in Parallel Condition: $\\theta_1 = \\theta_2, \\quad T = T_1 + T_2$.",
            "Exam Scoring Tip: When calculating shaft diameter from stiffness criteria, always convert allowable angle of twist from degrees to radians by multiplying by $\\pi/180$."
        ]
    },
    ("Strength of Materials", 4): {
        "title": "Columns & Struts",
        "highlights": [
            "Column and Strut Classifications: Compression members; Short columns fail primarily by material crushing/yielding; Long slender columns fail by elastic lateral instability (buckling) well below material yield strength; Intermediate columns fail by combined inelastic crushing and buckling.",
            "Slenderness Ratio ($\\lambda$): Dimensionless geometric metric $\\lambda = \\frac{L_e}{k_{min}}$ where $L_e$ is effective buckling length and $k_{min} = \\sqrt{I_{min}/A}$ is minimum radius of gyration; Buckling occurs about axis of least moment of inertia $I_{min}$.",
            "Euler's Buckling Theory & Critical Crippling Load: Governing differential equation $E I \\frac{d^2y}{dx^2} = -P y$; Critical buckling load $P_{cr} = \\frac{\\pi^2 E I}{L_e^2}$; Critical compressive buckling stress $\\sigma_{cr} = \\frac{\\pi^2 E}{\\lambda^2}$.",
            "Effective Length ($L_e$) for Standard Boundary Conditions: (1) Both ends hinged: $L_e = L$; (2) One end fixed, other end free: $L_e = 2L$; (3) Both ends fixed: $L_e = L/2$; (4) One end fixed, other end hinged: $L_e = L/\\sqrt{2} \\approx 0.707 L$.",
            "Euler's Buckling Load Comparison: Fixed-fixed column carries 4 times the critical load of pinned-pinned column ($P_{cr} = 4\\pi^2 EI/L^2$); Fixed-free cantilever carries only $1/4$ the pinned-pinned load ($P_{cr} = \\pi^2 EI/(4L^2)$).",
            "Limitations of Euler's Formula: Valid only if critical buckling stress is less than proportional limit ($\\sigma_{cr} \\le \\sigma_p$); Requires slenderness ratio $\\lambda \\ge \\pi \\sqrt{E / \\sigma_p}$; For structural steel, Euler's formula valid only for $\\lambda \\ge 80-100$.",
            "Rankine-Gordon Empirical Formula: Unified formula for all slenderness ratios: $\\frac{1}{P_R} = \\frac{1}{P_c} + \\frac{1}{P_E}$ where $P_c = \\sigma_c A$ is crushing load; Solves to $P_R = \\frac{\\sigma_c A}{1 + a(L_e/k)^2}$ where Rankine constant $a = \\frac{\\sigma_c}{\\pi^2 E}$.",
            "Eccentric Loading & Secant Formula: Column subjected to compressive load with eccentricity $e$; Maximum compressive stress $\\sigma_{max} = \\frac{P}{A}\\left[1 + \\frac{e c}{k^2}\\sec\\left(\\frac{L_e}{2k}\\sqrt{\\frac{P}{E A}}\\right)\\right]$; Accounts for combined axial and bending stresses.",
            "Column Core (Kern) of a Section: Region within cross-section where compressive load can be applied without inducing tensile stress on any fiber; Circular section kern has diameter $D/4$; Rectangular section kern is diamond with diagonals $b/3$ and $d/3$ (middle-third rule).",
            "University Examination Strategy: Derive Euler's formula for both ends pinned, state effective length factors for all four boundary conditions, calculate Rankine load, and determine kern dimensions."
        ],
        "keyPoints": [
            "Euler's Critical Load Formula: $P_{cr} = \\frac{\\pi^2 E I_{min}}{L_e^2}$.",
            "Critical Buckling Stress: $\\sigma_{cr} = \\frac{\\pi^2 E}{(L_e/k)^2} = \\frac{\\pi^2 E}{\\lambda^2}$.",
            "Radius of Gyration: $k = \\sqrt{\\frac{I}{A}}$.",
            "Effective Length - Both Hinged: $L_e = L$.",
            "Effective Length - One Fixed, One Free: $L_e = 2L$.",
            "Effective Length - Both Fixed: $L_e = L/2$.",
            "Effective Length - One Fixed, One Hinged: $L_e = \\frac{L}{\\sqrt{2}} \\approx 0.707L$.",
            "Rankine-Gordon Formula: $P = \\frac{\\sigma_c A}{1 + a\\lambda^2}$.",
            "Rankine Constant: $a = \\frac{\\sigma_c}{\\pi^2 E}$.",
            "Exam Tip: In unsymmetrical sections (e.g. I-beams, unequal angles), always calculate $I_{xx}$ and $I_{yy}$ and evaluate buckling about the weaker axis ($I_{min}$)."
        ]
    },
    ("Strength of Materials", 5): {
        "title": "Combined Stresses",
        "highlights": [
            "General Biaxial State of Plane Stress: Element subjected to normal stresses $\\sigma_x, \\sigma_y$ and shear stress $\\tau_{xy}$; Equilibrium on inclined plane at angle $\\theta$: Normal stress $\\sigma_\\theta = \\frac{\\sigma_x + \\sigma_y}{2} + \\frac{\\sigma_x - \\sigma_y}{2}\\cos 2\\theta + \\tau_{xy}\\sin 2\\theta$; Shear stress $\\tau_\\theta = -\\frac{\\sigma_x - \\sigma_y}{2}\\sin 2\\theta + \\tau_{xy}\\cos 2\\theta$.",
            "Principal Planes and Principal Stresses: Principal planes are planes of zero shear stress ($\\tau = 0$); Orientation angle $\\tan 2\\theta_p = \\frac{2\\tau_{xy}}{\\sigma_x - \\sigma_y}$; Principal stresses $\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.",
            "Maximum In-Plane Shear Stress: Occurs on planes inclined at $45^\\circ$ to principal planes: $\\tan 2\\theta_s = -\\frac{\\sigma_x - \\sigma_y}{2\\tau_{xy}}$; Maximum shear stress $\\tau_{max} = \\frac{\\sigma_1 - \\sigma_2}{2} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$; Normal stress on maximum shear planes equals hydrostatic mean $\\sigma_{avg} = \\frac{\\sigma_x + \\sigma_y}{2}$.",
            "Mohr's Circle of Stress Construction: Center at $(\\sigma_{avg}, 0) = \\left(\\frac{\\sigma_x + \\sigma_y}{2}, 0\\right)$; Radius $R = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$; Graphical tool for evaluating normal and shear stresses on any arbitrary inclined cut plane.",
            "Maximum Principal Stress Theory (Rankine): Failure occurs when maximum tensile principal stress reaches yield strength: $\\sigma_1 = S_y$; Best for brittle materials (cast iron, concrete).",
            "Maximum Shear Stress Theory (Tresca / Guest): Yielding initiates when maximum absolute shear stress equals yield shear stress in uniaxial tension: $\\tau_{max} = \\frac{\\sigma_1 - \\sigma_3}{2} = \\frac{S_y}{2} \\implies \\sigma_1 - \\sigma_3 = S_y$; Conservative for ductile materials.",
            "Distortion Energy Theory (Von Mises / Hencky): Yielding occurs when shear strain energy of distortion reaches that of uniaxial tension: $\\sigma_v = \\frac{1}{\\sqrt{2}}\\sqrt{(\\sigma_1 - \\sigma_2)^2 + (\\sigma_2 - \\sigma_3)^2 + (\\sigma_3 - \\sigma_1)^2} = S_y$; Most accurate yield predictor for ductile metals.",
            "Combined Bending and Torsion on Circular Shafts: Bending stress $\\sigma_b = \\frac{32 M}{\\pi D^3}$ and torsional shear $\\tau = \\frac{16 T}{\\pi D^3}$; Equivalent bending moment $M_e = \\frac{1}{2}[M + \\sqrt{M^2 + T^2}]$; Equivalent twisting moment $T_e = \\sqrt{M^2 + T^2}$.",
            "Thin Cylindrical and Spherical Shells: Internal pressure $P$ on cylinder: Hoop (circumferential) stress $\\sigma_h = \\frac{P d}{2t}$; Longitudinal axial stress $\\sigma_L = \\frac{P d}{4t}$; Hoop stress is twice longitudinal stress; Spherical vessel $\\sigma = \\frac{P d}{4t}$.",
            "University Examination Strategy: Construct Mohr's circle neatly showing center, radius, principal stress points, and maximum shear stress, calculate equivalent torque $T_e = \\sqrt{M^2 + T^2}$, and apply Von Mises criterion."
        ],
        "keyPoints": [
            "Principal Stress Formula: $\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.",
            "Maximum Shear Stress: $\\tau_{max} = \\frac{\\sigma_1 - \\sigma_2}{2} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.",
            "Principal Plane Angle: $\\tan 2\\theta_p = \\frac{2\\tau_{xy}}{\\sigma_x - \\sigma_y}$.",
            "Mohr's Circle Center: $\\left(\\frac{\\sigma_x + \\sigma_y}{2}, 0\\right)$.",
            "Mohr's Circle Radius: $R = \\tau_{max} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.",
            "Equivalent Twisting Moment: $T_e = \\sqrt{M^2 + T^2} = \\frac{\\pi D^3}{16} \\tau_{max}$.",
            "Equivalent Bending Moment: $M_e = \\frac{1}{2}[M + \\sqrt{M^2 + T^2}] = \\frac{\\pi D^3}{32} \\sigma_b$.",
            "Thin Cylinder Hoop Stress: $\\sigma_h = \\frac{P d}{2t}$.",
            "Thin Cylinder Longitudinal Stress: $\\sigma_L = \\frac{P d}{4t}$.",
            "Thin Sphere Stress: $\\sigma = \\frac{P d}{4t}$ (identical in all tangential directions)."
        ]
    },

    # -------------------------------------------------------------------------
    # THERMODYNAMICS
    # -------------------------------------------------------------------------
    ("Thermodynamics", 1): {
        "title": "Basic Concepts & Laws",
        "highlights": [
            "Macroscopic vs Microscopic Thermodynamics: Classical continuum approach using state coordinates ($P, V, T$) vs statistical molecular kinematics.",
            "Thermodynamic Systems & Boundaries: Open systems (mass and energy transfer across control surface, e.g. turbine), Closed systems (energy transfer only, e.g. piston-cylinder), Isolated systems (neither mass nor energy, e.g. universe).",
            "State Postulate & Properties: State of simple compressible substance completely specified by two independent intensive properties; Intensive (pressure, temperature, density) vs Extensive (mass, total volume, total internal energy).",
            "Zeroth Law of Thermodynamics: If body A and body B are each in thermal equilibrium with third body C, they are in thermal equilibrium with each other; Establishes temperature as unique empirical state variable.",
            "Quasi-Static Reversible Processes: Successive states infinitesimally close to thermodynamic equilibrium; Maximum work output during expansion and minimum work input during compression.",
            "Work and Heat Interactions: Path functions represented by inexact differentials ($\delta W = P dV, \delta Q$); Area under $P-V$ diagram represents boundary work $\int P dV$; Area under $T-S$ diagram represents reversible heat transfer $\int T dS$.",
            "First Law for Closed System Cycles: Net cyclic work equals net cyclic heat transfer: $\oint \delta Q = \oint \delta W$; Proves internal energy $U$ is a property: $dQ - dW = dU$.",
            "First Law for Steady Flow (SFEE): Steady flow energy equation across control volume: $\dot{m}\left(h_1 + \frac{v_1^2}{2} + g z_1\right) + \dot{Q} = \dot{m}\left(h_2 + \frac{v_2^2}{2} + g z_2\right) + \dot{W}_s$; Applied to nozzles ($v_2 = \sqrt{2(h_1 - h_2)}$), compressors, and boilers.",
            "Specific Heats & Enthalpy of Ideal Gas: Enthalpy definition $H = U + P V$; For ideal gas, $du = c_v dT$ and $dh = c_p dT$ strictly (Joule's law); Mayer's relation $c_p - c_v = R$; Specific heat ratio $\gamma = c_p / c_v$.",
            "University Examination Strategy: State Kelvin-Planck and Clausius formulations of the Second Law, derive SFEE from Reynolds transport theorem, and sketch $P-V$ diagrams for isothermal vs adiabatic processes."
        ],
        "keyPoints": [
            "Zeroth Law Basis: Thermal equilibrium basis for all temperature measurement scales.",
            "Boundary Work Formula: $W = \int_{V_1}^{V_2} P dV$ (valid strictly for reversible processes).",
            "Polytropic Work Formula: $W = \frac{P_1 V_1 - P_2 V_2}{n - 1}$ for process $P V^n = C$.",
            "Isothermal Work of Ideal Gas: $W = P_1 V_1 \ln\left(\frac{V_2}{V_1}\right) = m R T \ln\left(\frac{P_1}{P_2}\right)$.",
            "First Law for Closed System: $dQ = dU + dW$.",
            "SFEE Nozzle Velocity: $v_2 = \sqrt{2(h_1 - h_2)}$ assuming negligible inlet velocity.",
            "Enthalpy Definition: $H = U + P V$ (and $h = u + P v$).",
            "Ideal Gas Characteristic Equation: $P v = R T$, where $R = \bar{R} / M$.",
            "Mayer's Equation: $c_p - c_v = R$.",
            "Exam Scoring Tip: For throttling processes (e.g. porous plug or expansion valve), enthalpy remains constant ($h_1 = h_2$) with zero work output and negligible heat transfer."
        ]
    },
    ("Thermodynamics", 2): {
        "title": "Entropy",
        "highlights": [
            "Clausius Inequality: For any thermodynamic cycle, cyclic integral of $\delta Q / T \le 0$; Equals zero for reversible cycle ($\oint \frac{\delta Q_{rev}}{T} = 0$), proving entropy $S$ is a true thermodynamic property ($dS = \frac{\delta Q_{rev}}{T}$).",
            "Principle of Increase of Entropy: For any isolated system, entropy never decreases: $dS_{iso} \ge 0$; Entropy change of universe $\Delta S_{univ} = \Delta S_{sys} + \Delta S_{surr} \ge 0$; Dictates spontaneous arrow of time.",
            "T-ds Equations for Pure Substances: First relation $T dS = dU + P dV$; Second relation $T dS = dH - V dP$; Fundamental relations expressing entropy differential in terms of state coordinates.",
            "Entropy Change of Ideal Gases: $\Delta S = c_v \ln(T_2/T_1) + R \ln(v_2/v_1) = c_p \ln(T_2/T_1) - R \ln(P_2/P_1)$; For isentropic process ($dS = 0$), derives $P v^\gamma = \text{constant}$.",
            "Entropy Change During Phase Transformations: Latent heat transfer at constant saturation temperature: $\Delta S = \frac{L}{T_{sat}} = \frac{h_{fg}}{T_{sat}}$.",
            "Isentropic Efficiencies of Turbines and Compressors: Turbine efficiency $\eta_t = \frac{h_1 - h_{2a}}{h_1 - h_{2s}}$ (actual to isentropic work); Compressor efficiency $\eta_c = \frac{h_{2s} - h_1}{h_{2a} - h_1}$ (isentropic to actual input).",
            "Third Law of Thermodynamics: Nernst heat theorem: The entropy of a pure crystalline substance approaches absolute zero ($S = 0$) as thermodynamic temperature approaches absolute zero ($T \to 0\text{ K}$).",
            "Entropy Generation ($\Delta S_{gen}$): Quantifies thermodynamic irreversibilities (friction, unrestrained expansion, mixing, finite temperature heat transfer); $\Delta S_{sys} = \int \frac{\delta Q}{T} + S_{gen}$ where $S_{gen} > 0$ for real processes.",
            "Temperature-Entropy ($T-S$) Diagram: Area under reversible process path represents heat transfer $Q = \int T dS$; Vertical line represents reversible adiabatic (isentropic) process.",
            "University Examination Strategy: Prove that entropy is a state property using Clausius inequality, calculate entropy change of ideal gas, and evaluate isentropic efficiency of steam turbines."
        ],
        "keyPoints": [
            "Entropy Definition: $dS = \left(\frac{\delta Q}{T}\right)_{rev}$.",
            "Clausius Theorem: $\oint \frac{\delta Q}{T} = 0$ (Reversible), $\oint \frac{\delta Q}{T} < 0$ (Irreversible).",
            "First T-ds Equation: $T dS = dU + P dV$.",
            "Second T-ds Equation: $T dS = dH - V dP$.",
            "Gas Entropy from P and T: $\Delta S = c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right)$.",
            "Gas Entropy from V and T: $\Delta S = c_v \ln\left(\frac{T_2}{T_1}\right) + R \ln\left(\frac{v_2}{v_1}\right)$.",
            "Turbine Isentropic Efficiency: $\eta_t = \frac{h_1 - h_{2a}}{h_1 - h_{2s}}$.",
            "Compressor Isentropic Efficiency: $\eta_c = \frac{h_{2s} - h_1}{h_{2a} - h_1}$.",
            "Phase Change Entropy: $\Delta S_{vap} = \frac{h_{fg}}{T_{sat}}$.",
            "Exam Tip: In reversible adiabatic processes, entropy is constant ($S_1 = S_2$), but in irreversible adiabatic processes (e.g. throttling), entropy strictly increases ($S_2 > S_1$)."
        ]
    },
    ("Thermodynamics", 3): {
        "title": "Availability",
        "highlights": [
            "Availability (Exergy) Concept: Maximum theoretical useful work obtainable from a system as it comes into complete thermodynamic dead state equilibrium with ambient surroundings ($P_0, T_0$).",
            "Dead State Definition: System is at resting ambient pressure $P_0$, temperature $T_0$, velocity $v = 0$, and elevation $z = 0$, incapable of producing further spontaneous work.",
            "Exergy of a Closed System: Non-flow exergy $\Phi = (U - U_0) + P_0(V - V_0) - T_0(S - S_0) + \frac{m v^2}{2} + m g z$; Specific non-flow exergy $\phi = (u - u_0) + P_0(v - v_0) - T_0(s - s_0)$.",
            "Exergy of a Steady Flow Stream: Flow exergy $\psi = (h - h_0) - T_0(s - s_0) + \frac{v^2}{2} + g z$; Reversible work between two states $W_{rev} = \psi_1 - \psi_2$.",
            "Gouy-Stodola Theorem of Irreversibility: Lost work (irreversibility $I$) is directly proportional to total entropy generation: $I = W_{rev} - W_{act} = T_0 S_{gen}$; Quantifies destruction of available energy.",
            "Second Law Efficiency (Exergetic Efficiency): $\eta_{II} = \frac{\text{Exergy Recovered}}{\text{Exergy Supplied}} = \frac{W_{act}}{W_{rev}} = \frac{\eta_I}{\eta_{rev}}$; Measures performance against thermodynamic optimum rather than energy quantity.",
            "Exergy Destruction in Heat Exchangers: Heat transfer across finite temperature difference $\Delta T = T_H - T_C$ produces irreversible exergy destruction: $I = T_0 Q \left(\frac{1}{T_C} - \frac{1}{T_H}\right)$.",
            "Exergy Balance Equation: $\sum \text{Exergy}_{in} - \sum \text{Exergy}_{out} - \text{Exergy Destruction} = \Delta \text{Exergy}_{sys}$.",
            "Decreasing Available Energy: As high-temperature heat transfers to lower temperature reservoirs, total thermal energy is conserved (First Law), but quality and work capability are irreversibly degraded (Second Law).",
            "University Examination Strategy: Calculate maximum work obtainable from finite thermal reservoirs, determine exergy destruction via Gouy-Stodola theorem, and compare First Law vs Second Law efficiencies."
        ],
        "keyPoints": [
            "Dead State Standards: Typically $T_0 = 298.15\text{ K}$ ($25^\circ\text{C}$) and $P_0 = 101.325\text{ kPa}$ (1 atm).",
            "Closed System Exergy: $\Phi = (U - U_0) + P_0(V - V_0) - T_0(S - S_0)$.",
            "Flow Stream Exergy: $\psi = (h - h_0) - T_0(s - s_0) + \frac{v^2}{2} + g z$.",
            "Gouy-Stodola Irreversibility Law: $I = T_0 S_{gen}$.",
            "Second Law Efficiency: $\eta_{II} = \frac{\text{Exergy Output}}{\text{Exergy Input}} = 1 - \frac{I}{\text{Exergy Input}}$.",
            "Exergy of Heat Transfer: $\text{Ex}_Q = Q\left(1 - \frac{T_0}{T}\right)$.",
            "Exergy Destruction Rate: $\dot{I} = T_0 \dot{S}_{gen} \ge 0$.",
            "Available Energy Fraction: Carnot factor $(1 - T_0/T)$ represents the maximum convertible fraction of heat.",
            "Unavailable Energy: Portion of heat rejected to environment: $UE = T_0 \Delta S$.",
            "Exam Scoring Tip: Work possesses 100% exergy ($	ext{Ex}_W = W$), whereas heat possesses exergy limited strictly by the Carnot factor."
        ]
    },
    ("Thermodynamics", 4): {
        "title": "Properties of Steam",
        "highlights": [
            "Pure Substance Phase Diagrams: $P-v$, $T-s$, and $h-s$ (Mollier diagram) phase spaces; Saturation dome enclosing vapor-liquid coexistence region; Liquid saturation line ($x=0$) and vapor saturation line ($x=1$) meeting at critical point.",
            "Critical Point Parameters for Water: Critical temperature $T_c = 373.95^\circ\text{C}$ ($647.1\text{ K}$), critical pressure $P_c = 22.064\text{ MPa}$ ($220.64\text{ bar}$), critical volume $v_c = 0.003106\text{ m}^3/\text{kg}$; Latent heat of vaporization drops to strictly zero at critical point.",
            "Dryness Fraction (Quality $x$): Ratio of mass of dry saturated steam to total mass of wet steam mixture: $x = \frac{m_g}{m_f + m_g}$; Varies from $x = 0$ (saturated liquid) to $x = 1$ (dry saturated vapor).",
            "Thermodynamic Properties in Wet Region: Specific volume $v = v_f + x v_{fg} \approx x v_g$; Specific enthalpy $h = h_f + x h_{fg}$; Specific internal energy $u = u_f + x u_{fg}$; Specific entropy $s = s_f + x s_{fg}$.",
            "Superheated Steam Region: Vapor heated above saturation temperature at given pressure ($T > T_{sat}$); Degree of superheat $\Delta T = T - T_{sat}$; Enthalpy $h = h_g + c_{ps}(T - T_{sat})$ where $c_{ps} \approx 2.1\text{ kJ/(kg}\cdot\text{K)}$.",
            "Subcooled (Compressed) Liquid Region: Liquid at temperature below saturation temperature at given pressure ($T < T_{sat}$); Properties approximated closely by saturated liquid values at local temperature: $h \approx h_f(T)$.",
            "Mollier Chart ($h-s$ Diagram): Enthalpy vs entropy representation; Constant pressure lines slope upward with slope $(\partial h / \partial s)_P = T$; Isentropic expansion across steam turbine appears as vertical downward drop.",
            "Measurement of Steam Quality (Calorimetry): Barrel calorimeter, Separating calorimeter (mechanical droplet removal), Throttling calorimeter (expansion into superheated region where $h_1 = h_2$), and Combined Separating & Throttling calorimeter for wet steam.",
            "Clapeyron-Clausius Equation for Phase Change: Relates saturation pressure slope to latent heat: $\left(\frac{dP}{dT}\right)_{sat} = \frac{h_{fg}}{T_{sat} v_{fg}}$.",
            "University Examination Strategy: Look up properties from steam tables at specified pressure and temperature, determine dryness fraction using throttling enthalpy balance, and plot isentropic expansion on Mollier chart."
        ],
        "keyPoints": [
            "Critical Point of Water: $P_c = 22.064\text{ MPa}, \; T_c = 373.95^\circ\text{C}$.",
            "Dryness Fraction Formula: $x = \frac{m_v}{m_v + m_l}$.",
            "Wet Steam Enthalpy: $h = h_f + x h_{fg}$.",
            "Wet Steam Specific Volume: $v = (1 - x)v_f + x v_g \approx x v_g$.",
            "Wet Steam Entropy: $s = s_f + x s_{fg}$.",
            "Superheated Steam Enthalpy: $h = h_g + c_p(T_{sup} - T_{sat})$.",
            "Slope of Isobars on Mollier Chart: $\left(\frac{\partial h}{\partial s}\right)_P = T$.",
            "Throttling Calorimeter Quality: $h_f + x h_{fg} = h_{g2} + c_{ps}(T_{sup2} - T_{sat2})$.",
            "Separating & Throttling Combined Quality: $x_{net} = x_1 \times x_2$.",
            "Exam Scoring Tip: For throttled steam, $h_1 = h_2$ strictly; never use ideal gas formulas when evaluating properties inside the steam saturation dome."
        ]
    },
    ("Thermodynamics", 5): {
        "title": "Power Cycles",
        "highlights": [
            "Carnot Vapor Cycle & Practical Limitations: Ideal cycle between two temperatures; Impractical due to liquid droplet erosion during isentropic expansion and extreme difficulty of pumping wet two-phase mixture into boiler.",
            "Simple Rankine Vapor Power Cycle: Standard steam power plant cycle: 1-2 Isentropic pumping of water, 2-3 Constant-pressure heat addition in boiler, 3-4 Isentropic expansion in turbine, 4-1 Constant-pressure heat rejection in condenser.",
            "Rankine Cycle Thermal Efficiency: $\eta_{th} = \frac{W_{net}}{Q_{in}} = \frac{(h_3 - h_4) - (h_2 - h_1)}{h_3 - h_2}$; Pump work $w_p = h_2 - h_1 = v_f(P_2 - P_1)$ is small ($<1-2\%$ of turbine work).",
            "Rankine Cycle with Reheat: Steam expanded partially in High Pressure (HP) turbine, returned to boiler reheater at intermediate pressure, and expanded through Low Pressure (LP) turbine; Increases cycle thermal efficiency and raises turbine exhaust dryness fraction ($x_4 > 0.88$).",
            "Regenerative Rankine Cycle: Steam bled from intermediate turbine stages to preheat boiler feedwater in Open or Closed Feedwater Heaters (FWH); Reduces irreversibilities during boiler heat addition.",
            "Air Standard Otto Cycle (Spark Ignition / Petrol): Two isochoric and two isentropic processes; Thermal efficiency $\eta_{Otto} = 1 - \frac{1}{r^{\gamma-1}}$ where compression ratio $r = V_1/V_2$; Limited by auto-ignition knock.",
            "Air Standard Diesel Cycle (Compression Ignition): Heat addition at constant pressure; Efficiency $\eta_{Diesel} = 1 - \frac{1}{r^{\gamma-1}}\left[\frac{r_c^\gamma - 1}{\gamma(r_c - 1)}\right]$ where cutoff ratio $r_c = V_3/V_2$; For same compression ratio, $\eta_{Otto} > \eta_{Diesel}$.",
            "Dual Combustion (Sabathe) Cycle: Compromise cycle; Heat added partly at constant volume and partly at constant pressure; Accurately models modern high-speed diesel engines.",
            "Brayton (Joule) Gas Turbine Cycle: Open/closed gas turbine cycle comprising isentropic compression, constant-pressure combustion, isentropic expansion, and constant-pressure exhaust/cooling; Efficiency $\eta = 1 - \frac{1}{r_p^{(\gamma-1)/\gamma}}$ where pressure ratio $r_p = P_2/P_1$.",
            "University Examination Strategy: Draw $T-s$ and $P-v$ diagrams for Rankine, Otto, and Diesel cycles, derive efficiency formulas in terms of compression ratio, and compute reheat steam cycle efficiencies."
        ],
        "keyPoints": [
            "Rankine Efficiency Formula: $\eta = \frac{W_t - W_p}{Q_{in}} = \frac{(h_1 - h_2) - v_f(P_{boiler} - P_{cond})}{h_1 - h_4}$.",
            "Pump Work Formula: $w_p = v_f(P_2 - P_1) \times 10^2$ kJ/kg (with $P$ in bar).",
            "Otto Cycle Efficiency: $\eta = 1 - \frac{1}{r^{\gamma - 1}}$.",
            "Diesel Cycle Efficiency: $\eta = 1 - \frac{1}{r^{\gamma - 1}}\left[\frac{r_c^\gamma - 1}{\gamma(r_c - 1)}\right]$.",
            "Brayton Cycle Efficiency: $\eta = 1 - \frac{1}{r_p^{(\gamma - 1)/\gamma}}$.",
            "Maximum Work in Brayton Cycle: Occurs at optimum pressure ratio $r_{p, opt} = (T_{max}/T_{min})^{\gamma/[2(\gamma-1)]}$.",
            "Comparison for Same Peak P & T: $\eta_{Diesel} > \eta_{Dual} > \eta_{Otto}$.",
            "Comparison for Same Compression Ratio: $\eta_{Otto} > \eta_{Dual} > \eta_{Diesel}$.",
            "Reheat Primary Benefit: Prevents condensation moisture erosion in LP turbine blade tips.",
            "Exam Scoring Tip: In Rankine cycle problems, always check turbine exhaust steam quality; if $x_4 < 0.88$, state that excessive moisture will erode turbine blading."
        ]
    }

}
