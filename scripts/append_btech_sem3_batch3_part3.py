import json, os

with open('scripts/sem3_btech_batch3_data.json', 'r', encoding='utf-8') as f:
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
# 13. ELECTROMAGNETIC FIELDS (B.Tech)
# =========================================================================
add("Electromagnetic Fields", 1, "Static Electric Fields", [
    "Vector Calculus in Coordinate Systems: Cartesian $(x,y,z)$, Cylindrical $(\\rho, \\phi, z)$, and Spherical $(r, \\theta, \\phi)$ coordinates; Differential length, surface, and volume elements; Del operator $\\nabla$; Gradient of scalar field ($\\nabla V$), Divergence of vector field ($\\nabla \\cdot \\mathbf{D}$), Curl of vector field ($\\nabla \\times \\mathbf{E}$); Divergence Theorem (Gauss-Ostrogradsky) and Stokes' Theorem.",
    "Coulomb's Law and Electric Field Intensity: Coulomb's inverse square law: $\\mathbf{F}_{12} = \\frac{q_1 q_2}{4\\pi \\epsilon_0 R^2} \\hat{\\mathbf{a}}_R$; Permittivity of free space $\\epsilon_0 \\approx 8.854 \\times 10^{-12}\\text{ F/m}$; Electric field intensity $\\mathbf{E} = \\mathbf{F}/q$; Field due to discrete point charges and continuous charge distributions (line charge $\\rho_L$, surface charge $\\rho_S$, volume charge $\\rho_v$).",
    "Electric Flux Density and Gauss's Law: Electric flux $\\Psi = Q$; Electric flux density vector $\\mathbf{D} = \\epsilon_0 \\mathbf{E}$; Gauss's Law in integral form: $\\oint_S \\mathbf{D} \\cdot d\\mathbf{S} = Q_{enclosed}$; Gauss's Law in point/differential form: $\\nabla \\cdot \\mathbf{D} = \\rho_v$ (Maxwell's First Equation for electrostatics).",
    "Applications of Gauss's Law: Analytical field determination for symmetric charge geometries: (1) Infinite line charge: $\\mathbf{E} = \\frac{\\rho_L}{2\\pi \\epsilon_0 \\rho} \\hat{\\mathbf{a}}_\\rho$; (2) Infinite planar surface charge: $\\mathbf{E} = \\frac{\\rho_S}{2 \\epsilon_0} \\hat{\\mathbf{a}}_n$; (3) Uniformly charged spherical shell and solid sphere.",
    "Electric Potential and Potential Gradient: Work done moving test charge against electric field: $W = -q \\int_A^B \\mathbf{E} \\cdot d\\mathbf{L}$; Electric potential $V = \\frac{q}{4\\pi \\epsilon_0 R}$; Conservative nature of electrostatic field: $\\oint \\mathbf{E} \\cdot d\\mathbf{L} = 0 \\implies \\nabla \\times \\mathbf{E} = 0$; Electric field as negative gradient of electric potential: $\\mathbf{E} = -\\nabla V$.",
    "Electric Dipole and Dipole Moment: Pair of equal and opposite charges $\\pm q$ separated by small distance $d$; Electric dipole moment $\\mathbf{p} = q \\mathbf{d}$; Dipole potential: $V = \\frac{\\mathbf{p} \\cdot \\hat{\\mathbf{a}}_r}{4\\pi \\epsilon_0 r^2} = \\frac{p \\cos\\theta}{4\\pi \\epsilon_0 r^2}$; Dipole electric field: $\\mathbf{E} = \\frac{p}{4\\pi \\epsilon_0 r^3} (2\\cos\\theta \\hat{\\mathbf{a}}_r + \\sin\\theta \\hat{\\mathbf{a}}_\\theta)$ ($1/r^3$ distance decay).",
    "Electrostatic Energy and Energy Density: Potential energy stored in discrete charge assembly: $W_E = \\frac{1}{2} \\sum_{i=1}^n q_i V_i$; Continuous electrostatic energy integral: $W_E = \\frac{1}{2} \\int_{vol} \\mathbf{D} \\cdot \\mathbf{E} dv = \\frac{1}{2} \\int_{vol} \\epsilon |\\mathbf{E}|^2 dv$; Electrostatic energy density: $w_E = \\frac{1}{2} \\mathbf{D} \\cdot \\mathbf{E} = \\frac{1}{2} \\epsilon E^2$ in Joules per cubic meter ($J/m^3$).",
    "Poisson's and Laplace's Equations: Derivation from Gauss's differential law and potential gradient: $\\nabla \\cdot (\\epsilon \\nabla V) = -\\rho_v$; Poisson's Equation: $\\nabla^2 V = -\\frac{\\rho_v}{\\epsilon}$; Laplace's Equation (in charge-free regions $\\rho_v = 0$): $\\nabla^2 V = 0$; Laplacian operator $\\nabla^2$ expressions across rectangular, cylindrical, and spherical coordinates.",
    "Uniqueness Theorem: Proof that any solution to Laplace's or Poisson's equation satisfying specified boundary conditions (Dirichlet, Neumann, or mixed boundary conditions) is the unique physical solution; Applications in electrostatic boundary value problem solutions.",
    "University Examination Strategy: Apply Gauss's law to evaluate $\\mathbf{D}$ and $\\mathbf{E}$ for cylindrical coaxial and spherical geometries, derive $\\mathbf{E} = -\\nabla V$ and prove $\\nabla \\times \\mathbf{E} = 0$, calculate electrostatic energy stored in capacitor configurations, and solve one-dimensional Laplace equations."
], [
    "Coulomb's Force Law: $\\mathbf{F} = \\frac{q_1 q_2}{4\\pi \\epsilon_0 R^2} \\hat{\\mathbf{a}}_R$.",
    "Gauss's Law (Differential Form): $\\nabla \\cdot \\mathbf{D} = \\rho_v$.",
    "Gauss's Law (Integral Form): $\\oint_S \\mathbf{D} \\cdot d\\mathbf{S} = Q_{enc}$.",
    "Infinite Line Charge Field: $\\mathbf{E} = \\frac{\\rho_L}{2\\pi \\epsilon_0 \\rho} \\hat{\\mathbf{a}}_\\rho$.",
    "Infinite Sheet Charge Field: $\\mathbf{E} = \\frac{\\rho_S}{2 \\epsilon_0} \\hat{\\mathbf{a}}_n$.",
    "Electric Potential Gradient: $\\mathbf{E} = -\\nabla V$.",
    "Dipole Electric Field: $\\mathbf{E} = \\frac{p}{4\\pi \\epsilon_0 r^3}(2\\cos\\theta \\hat{\\mathbf{a}}_r + \\sin\\theta \\hat{\\mathbf{a}}_\\theta)$.",
    "Electrostatic Energy Density: $w_E = \\frac{1}{2} \\mathbf{D} \\cdot \\mathbf{E} = \\frac{1}{2} \\epsilon E^2$ $\\text{J/m}^3$.",
    "Poisson's Differential Equation: $\\nabla^2 V = -\\frac{\\rho_v}{\\epsilon}$.",
    "Exam Gold Tip: In electrostatic fields, the curl of $\\mathbf{E}$ is identically zero ($\\nabla \\times \\mathbf{E} = 0$), which proves the electrostatic field is strictly conservative."
])

add("Electromagnetic Fields", 2, "Conductors & Dielectrics", [
    "Conductors in Electrostatic Fields: Conduction mechanisms; Drift velocity and Ohm's law in point form: $\\mathbf{J} = \\sigma \\mathbf{E}$; Internal electric field within static perfect conductor is identically zero ($\\mathbf{E} = 0$ inside conductor); Conductor surface is an equipotential surface; Excess charges reside exclusively on external conductor boundary.",
    "Dielectric Materials and Polarization: Non-polar vs polar dielectric molecules; Electric polarization vector $\\mathbf{P} = \\lim_{\\Delta v \\to 0} \\frac{\\sum \\mathbf{p}_i}{\\Delta v}$; Bound surface charge density $\\rho_{sb} = \\mathbf{P} \\cdot \\hat{\\mathbf{a}}_n$; Bound volume charge density $\\rho_{vb} = -\\nabla \\cdot \\mathbf{P}$; Total electric flux density: $\\mathbf{D} = \\epsilon_0 \\mathbf{E} + \\mathbf{P} = \\epsilon_0 (1 + \\chi_e) \\mathbf{E} = \\epsilon_0 \\epsilon_r \\mathbf{E}$.",
    "Dielectric Properties and Breakdown: Relative permittivity / dielectric constant $\\epsilon_r$; Electric susceptibility $\\chi_e = \\epsilon_r - 1$; Dielectric strength (critical electric field intensity causing avalanche dielectric breakdown, e.g. $3\\text{ MV/m}$ for air); Corona discharge and dielectric losses.",
    "Continuity Equation and Relaxation Time: Conservation of electric charge: $\\nabla \\cdot \\mathbf{J} = -\\frac{\\partial \\rho_v}{\\partial t}$; Combining with Ohm's law and Gauss's law yields: $\\frac{\\partial \\rho_v}{\\partial t} + \\frac{\\sigma}{\\epsilon} \\rho_v = 0$; Solution: $\\rho_v(t) = \\rho_{v0} e^{-t / T_r}$; Dielectric relaxation time constant $T_r = \\frac{\\epsilon}{\\sigma}$ (extremely small $\\sim 10^{-19}\\text{ s}$ for copper).",
    "Electrostatic Boundary Conditions: (1) Dielectric-Dielectric Interface: Tangential $\\mathbf{E}$ continuity: $E_{t1} = E_{t2}$ ($\\frac{D_{t1}}{\\epsilon_1} = \\frac{D_{t2}}{\\epsilon_2}$); Normal $\\mathbf{D}$ jump discontinuity: $D_{n1} - D_{n2} = \\rho_s$ (if interface is charge-free $\\rho_s = 0 \\implies D_{n1} = D_{n2}$); Law of Refraction of electric flux lines: $\\frac{\\tan\\theta_1}{\\tan\\theta_2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}$.",
    "Conductor-Dielectric Boundary Conditions: Since $\\mathbf{E}=0$ inside conductor: Tangential electric field at surface is zero: $E_t = 0$; Normal flux density equals free surface charge density: $D_n = \\rho_s$ ($E_n = \\rho_s / \\epsilon$); Electric field lines always terminate perpendicular to conductor surfaces.",
    "Capacitance Derivation: Definition $C = Q / V$; Step-by-step capacitance derivation flow: Assume $Q \\to$ find $\\mathbf{E}$ via Gauss $\\to$ integrate potential $V = -\\int \\mathbf{E} \\cdot d\\mathbf{L} \\to$ evaluate ratio $C = Q / V$; Parallel-plate capacitor ($C = \\frac{\\epsilon A}{d}$); Coaxial cylindrical cable ($C = \\frac{2\\pi \\epsilon L}{\\ln(b/a)}$); Concentric spherical capacitor ($C = \\frac{4\\pi \\epsilon}{\\frac{1}{a} - \\frac{1}{b}}$); Isolated conducting sphere ($C = 4\\pi \\epsilon R$).",
    "Multi-Dielectric Capacitors: Capacitors with composite dielectric layers; Dielectrics in series (boundary parallel to plates: $C_{eq} = \\frac{C_1 C_2}{C_1 + C_2}$); Dielectrics in parallel (boundary perpendicular to plates: $C_{eq} = C_1 + C_2$).",
    "Method of Images: Solution of electrostatic boundary value problems without solving partial differential equations; Point charge $+q$ near infinite grounded conducting plane replaced by original charge $+q$ at $z=d$ and fictitious mirror image charge $-q$ at $z=-d$; Point charge near grounded conducting sphere; Line charge near grounded cylindrical conductor.",
    "University Examination Strategy: Derive boundary conditions across dielectric interfaces with complete pillbox and rectangular loop sketches, calculate capacitance of composite coaxial transmission lines, and solve method of images for point charges near planar conductors evaluating surface charge distribution."
], [
    "Point Form Ohm's Law: $\\mathbf{J} = \\sigma \\mathbf{E}$.",
    "Dielectric Flux Density: $\\mathbf{D} = \\epsilon_0 \\mathbf{E} + \\mathbf{P} = \\epsilon_0 \\epsilon_r \\mathbf{E}$.",
    "Bound Surface Charge: $\\rho_{sb} = \\mathbf{P} \\cdot \\hat{\\mathbf{a}}_n$.",
    "Bound Volume Charge: $\\rho_{vb} = -\\nabla \\cdot \\mathbf{P}$.",
    "Dielectric Relaxation Time: $T_r = \\frac{\\epsilon}{\\sigma}$.",
    "Tangential Field Continuity: $E_{t1} = E_{t2}$.",
    "Normal Flux Discontinuity: $D_{n1} - D_{n2} = \\rho_s$ ($D_{n1} = D_{n2}$ if $\\rho_s = 0$).",
    "Refraction of Field Lines: $\\frac{\\tan\\theta_1}{\\tan\\theta_2} = \\frac{\\epsilon_1}{\\epsilon_2}$.",
    "Coaxial Cable Capacitance: $C = \\frac{2\\pi \\epsilon L}{\\ln(b/a)}$.",
    "Exam Gold Tip: Under electrostatic equilibrium, electric field lines must intersect any conducting surface at strictly right angles ($90^\\circ$)."
])

add("Electromagnetic Fields", 3, "Static Magnetic Fields", [
    "Biot-Savart Law: Magnetic field generated by steady electric current element: $d\\mathbf{B} = \\frac{\\mu_0 I d\\mathbf{L} \\times \\hat{\\mathbf{a}}_R}{4\\pi R^2} = \\frac{\\mu_0 I d\\mathbf{L} \\times \\mathbf{R}}{4\\pi R^3}$; Permeability of free space $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ H/m}$; Magnetic field intensity $\\mathbf{H} = \\mathbf{B} / \\mu_0$; Biot-Savart law for surface current $\\mathbf{K}$ and volume current $\\mathbf{J}$.",
    "Applications of Biot-Savart Law: (1) Straight filamentary current of finite length: $H = \\frac{I}{4\\pi \\rho} (\\sin\\alpha_2 - \\sin\\alpha_1)$; Infinite straight wire: $H = \\frac{I}{2\\pi \\rho} \\hat{\\mathbf{a}}_\\phi$; (2) Circular current loop on axis: $H_z = \\frac{I R^2}{2 (R^2 + z^2)^{3/2}}$; (3) Solenoid of finite length and infinite length ($H = n I$).",
    "Ampere's Circuital Law (ACL): Line integral of magnetic field intensity around any closed contour equals total enclosed conduction current: $\\oint_C \\mathbf{H} \\cdot d\\mathbf{L} = I_{enclosed} = \\int_S \\mathbf{J} \\cdot d\\mathbf{S}$; Differential / point form via Stokes' theorem: $\\nabla \\times \\mathbf{H} = \\mathbf{J}$ (Maxwell's Third Equation for magnetostatics).",
    "Applications of Ampere's Circuital Law: (1) Infinite coaxial cable carrying forward current $I$ in inner conductor and return current $I$ in outer cylindrical sheath (evaluation of $\\mathbf{H}$ across all 4 radial zones); (2) Infinite current sheet carrying surface current $\\mathbf{K} = K_y \\hat{\\mathbf{a}}_y \\implies \\mathbf{H} = \\pm \\frac{1}{2} K_y \\hat{\\mathbf{a}}_z$; (3) Toroidal coil with rectangular and circular cross-sections.",
    "Magnetic Flux and Gauss's Law for Magnetism: Total magnetic flux $\\Phi = \\int_S \\mathbf{B} \\cdot d\\mathbf{S}$ in Webers ($Wb$); Non-existence of isolated magnetic monopoles (magnetic flux lines are continuous closed loops); Integral form: $\\oint_S \\mathbf{B} \\cdot d\\mathbf{S} = 0$; Point / differential form via Divergence theorem: $\\nabla \\cdot \\mathbf{B} = 0$ (Maxwell's Second Equation).",
    "Magnetic Vector Potential (A): Since $\\nabla \\cdot \\mathbf{B} = 0$ and divergence of curl is identically zero, magnetic flux density can be defined as curl of vector potential: $\\mathbf{B} = \\nabla \\times \\mathbf{A}$; Units of $\\mathbf{A}$ in $\\text{Wb/m}$ or $\\text{V}\\cdot\\text{s/m}$; Vector Poisson's Equation: $\\nabla^2 \\mathbf{A} = -\\mu_0 \\mathbf{J}$ (under Coulomb gauge $\\nabla \\cdot \\mathbf{A} = 0$); Integral expression: $\\mathbf{A} = \\frac{\\mu_0}{4\\pi} \\int_{vol} \\frac{\\mathbf{J} dv}{R}$.",
    "Evaluation of Magnetic Flux via Vector Potential: Application of Stokes' Theorem: $\\Phi = \\int_S \\mathbf{B} \\cdot d\\mathbf{S} = \\int_S (\\nabla \\times \\mathbf{A}) \\cdot d\\mathbf{S} = \\oint_C \\mathbf{A} \\cdot d\\mathbf{L}$; Eliminates area surface integration in complex boundary problems.",
    "Magnetic Scalar Potential ($V_m$): Defined strictly in current-free regions where $\\mathbf{J} = 0$: $\\nabla \\times \\mathbf{H} = 0 \\implies \\mathbf{H} = -\\nabla V_m$; Satisfies Laplace's equation $\\nabla^2 V_m = 0$; Multi-valued nature when encircling closed paths enclosing currents.",
    "Magnetic Dipole and Dipole Moment: Small planar closed loop of area $S$ carrying current $I$; Magnetic dipole moment vector: $\\mathbf{m} = I S \\hat{\\mathbf{a}}_n$; Vector potential of dipole: $\\mathbf{A} = \\frac{\\mu_0 m \\sin\\theta}{4\\pi r^2} \\hat{\\mathbf{a}}_\\phi$; Magnetic flux density: $\\mathbf{B} = \\frac{\\mu_0 m}{4\\pi r^3} (2\\cos\\theta \\hat{\\mathbf{a}}_r + \\sin\\theta \\hat{\\mathbf{a}}_\\theta)$ (formal duality with electric dipole).",
    "University Examination Strategy: Apply Biot-Savart law to derive magnetic field intensity along the axis of circular current loops, use Ampere's circuital law to compute field distribution across coaxial transmission lines, verify $\\nabla \\cdot \\mathbf{B} = 0$, and evaluate vector potential $\\mathbf{A}$ for symmetrical currents."
], [
    "Biot-Savart Differential Formula: $d\\mathbf{H} = \\frac{I d\\mathbf{L} \\times \\hat{\\mathbf{a}}_R}{4\\pi R^2}$.",
    "Ampere's Circuital Law (Integral): $\\oint_C \\mathbf{H} \\cdot d\\mathbf{L} = I_{enc}$.",
    "Ampere's Law (Point Form): $\\nabla \\times \\mathbf{H} = \\mathbf{J}$.",
    "Gauss's Law for Magnetism: $\\nabla \\cdot \\mathbf{B} = 0$ (no magnetic monopoles).",
    "Infinite Wire Magnetic Field: $H_\\phi = \\frac{I}{2\\pi \\rho}$.",
    "Solenoid Axial Magnetic Field: $H_z = n I = \\frac{N I}{L}$.",
    "Magnetic Vector Potential Definition: $\\mathbf{B} = \\nabla \\times \\mathbf{A}$.",
    "Vector Poisson Equation: $\\nabla^2 \\mathbf{A} = -\\mu \\mathbf{J}$ (under Coulomb gauge $\\nabla \\cdot \\mathbf{A} = 0$).",
    "Magnetic Flux via Line Integral: $\\Phi = \\oint_C \\mathbf{A} \\cdot d\\mathbf{L}$.",
    "Exam Gold Tip: Always specify the Coulomb gauge condition $\\nabla \\cdot \\mathbf{A} = 0$ when reducing the magnetic vector wave equation to Poisson's equation."
])

add("Electromagnetic Fields", 4, "Magnetic Forces & Materials", [
    "Lorentz Force Equation: Total electromagnetic force acting on moving charged particle: $\\mathbf{F} = q (\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})$; Magnetic force $\\mathbf{F}_m = q (\\mathbf{v} \\times \\mathbf{B})$ does zero mechanical work since $\\mathbf{F}_m \\perp \\mathbf{v}$; Causes circular cyclotron motion with radius $r = \\frac{m v}{q B}$ and cyclotron frequency $\\omega_c = \\frac{q B}{m}$.",
    "Magnetic Force on Current Elements: Force on differential line current: $d\\mathbf{F} = I d\\mathbf{L} \\times \\mathbf{B}$; Force on surface current: $d\\mathbf{F} = \\mathbf{K} \\times \\mathbf{B} dS$; Force on volume current: $d\\mathbf{F} = \\mathbf{J} \\times \\mathbf{B} dv$; Force between two parallel infinite current-carrying wires: $F/L = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$ (attractive for parallel currents, repulsive for anti-parallel currents; SI definition of Ampere).",
    "Magnetic Torque on Closed Planar Loops: Torque on planar current loop in uniform magnetic field: $\\mathbf{T} = \\mathbf{m} \\times \\mathbf{B}$ (where magnetic dipole moment $\\mathbf{m} = I A \\hat{\\mathbf{a}}_n$); Tends to align magnetic dipole with external magnetic field; Basis of galvanometer and electric motor operations.",
    "Magnetization in Materials: Atomic magnetic dipoles (orbital electron motion and electron spin); Magnetization vector $\\mathbf{M} = \\lim_{\\Delta v \\to 0} \\frac{\\sum \\mathbf{m}_i}{\\Delta v}$ in $\\text{A/m}$; Bound volume current density $\\mathbf{J}_b = \\nabla \\times \\mathbf{M}$; Bound surface current density $\\mathbf{K}_b = \\mathbf{M} \\times \\hat{\\mathbf{a}}_n$; Total magnetic flux density: $\\mathbf{B} = \\mu_0 (\\mathbf{H} + \\mathbf{M}) = \\mu_0 (1 + \\chi_m) \\mathbf{H} = \\mu_0 \\mu_r \\mathbf{H}$.",
    "Classification of Magnetic Materials: (1) Diamagnetic ($\\mu_r \\lesssim 1, \\chi_m < 0$, weak repulsion, e.g. Cu, Bi); (2) Paramagnetic ($\\mu_r \\gtrsim 1, \\chi_m > 0$, weak attraction, e.g. Al, Pt); (3) Ferromagnetic ($\\mu_r \\gg 1$, domain alignment, spontaneous magnetization, non-linear $B-H$ curve, Curie temperature $T_c$, e.g. Fe, Ni, Co); Antiferromagnetic and Ferrimagnetic (ferrites).",
    "Magnetic Boundary Conditions: (1) Normal components: continuity of magnetic flux density: $B_{n1} = B_{n2}$ ($\\mu_1 H_{n1} = \\mu_2 H_{n2}$); (2) Tangential components: jump discontinuity due to surface current: $(\\mathbf{H}_1 - \\mathbf{H}_2) \\times \\hat{\\mathbf{a}}_{n12} = \\mathbf{K}$ (if interface has no surface current $\\mathbf{K}=0 \\implies H_{t1} = H_{t2}$); Law of Refraction for magnetic field lines: $\\frac{\\tan\\theta_1}{\\tan\\theta_2} = \\frac{\\mu_{r1}}{\\mu_{r2}}$.",
    "Inductance and Mutual Inductance: Self-inductance $L = \\frac{\\Lambda}{I} = \\frac{N \\Phi}{I}$; Energy formulation: $L = \\frac{2 W_H}{I^2}$; Mutual inductance between two coupled circuits: $M_{12} = \\frac{\\Lambda_{12}}{I_2} = \\frac{N_1 \\Phi_{12}}{I_2}$; Neumann's formula: $M_{12} = \\frac{\\mu_0}{4\\pi} \\oint_{C1} \\oint_{C2} \\frac{d\\mathbf{L}_1 \\cdot d\\mathbf{L}_2}{R}$; Inductance of coaxial cable ($L = \\frac{\\mu L}{2\\pi}\\ln(b/a)$) and toroid.",
    "Magnetic Energy and Energy Density: Energy stored in magnetic field: $W_H = \\frac{1}{2} L I^2$; Continuous field formulation: $W_H = \\frac{1}{2} \\int_{vol} \\mathbf{B} \\cdot \\mathbf{H} dv = \\frac{1}{2} \\int_{vol} \\mu |\\mathbf{H}|^2 dv$; Magnetic energy density: $w_H = \\frac{1}{2} \\mathbf{B} \\cdot \\mathbf{H} = \\frac{1}{2} \\mu H^2$ in $\\text{J/m}^3$.",
    "Magnetic Circuits and Reluctance: Analogy between electric and magnetic circuits: MMF $\\mathcal{F} = N I$ (analogous to EMF $V$), Magnetic flux $\\Phi$ (analogous to current $I$), Reluctance $\\mathcal{R} = \\frac{l}{\\mu A}$ (analogous to resistance $R$); Hopkinson's Law: $\\mathcal{F} = \\Phi \\mathcal{R}$; Air gap reluctance and fringing effects; Lifting power of electromagnets: $F = \\frac{B^2 A}{2\\mu_0}$.",
    "University Examination Strategy: Calculate forces and torques on arbitrary loop conductors in uniform magnetic fields, derive magnetic boundary conditions across media interfaces, calculate self-inductance and stored magnetic energy of coaxial cables, and solve magnetic circuits with air gaps."
], [
    "Lorentz Force Equation: $\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})$.",
    "Magnetic Force on Conductor: $\\mathbf{F} = I \\int d\\mathbf{L} \\times \\mathbf{B}$.",
    "Parallel Wires Mutual Force: $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$ (attracts for parallel currents).",
    "Magnetic Dipole Torque: $\\mathbf{T} = \\mathbf{m} \\times \\mathbf{B}$, where $\\mathbf{m} = I S \\hat{\\mathbf{a}}_n$.",
    "Bound Surface Current: $\\mathbf{K}_b = \\mathbf{M} \\times \\hat{\\mathbf{a}}_n$.",
    "Bound Volume Current: $\\mathbf{J}_b = \\nabla \\times \\mathbf{M}$.",
    "Normal Magnetic Boundary: $B_{n1} = B_{n2}$.",
    "Tangential Magnetic Boundary: $H_{t1} - H_{t2} = K$ ($H_{t1} = H_{t2}$ if $K = 0$).",
    "Magnetic Energy Density: $w_H = \\frac{1}{2} \\mathbf{B} \\cdot \\mathbf{H} = \\frac{1}{2} \\mu H^2$ $\\text{J/m}^3$.",
    "Exam Gold Tip: Magnetic forces do zero work on moving point charges because magnetic force is always perpendicular to instantaneous velocity ($\\mathbf{F}_m \\cdot \\mathbf{v} = 0$)."
])

add("Electromagnetic Fields", 5, "Time-Varying Fields & Maxwell's Equations", [
    "Faraday's Law of Electromagnetic Induction: Time-varying magnetic fields induce electric fields; Lenz's Law; Induced EMF in closed circuit: $\\mathcal{E} = -\\frac{d\\lambda}{dt} = -N \\frac{d\\Phi}{dt}$; Integral form: $\\oint_C \\mathbf{E} \\cdot d\\mathbf{L} = -\\int_S \\frac{\\partial \\mathbf{B}}{\\partial t} \\cdot d\\mathbf{S}$; Differential / point form: $\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}$.",
    "Transformer EMF and Motional EMF: Total induced EMF: $\\mathcal{E} = \\oint_C \\mathbf{E} \\cdot d\\mathbf{L} = -\\int_S \\frac{\\partial \\mathbf{B}}{\\partial t} \\cdot d\\mathbf{S} + \\oint_C (\\mathbf{v} \\times \\mathbf{B}) \\cdot d\\mathbf{L}$; Transformer EMF (stationary circuit in time-varying magnetic field); Motional / Generator EMF (moving conductor in static magnetic field); Combined EMF in rotating machine windings.",
    "Maxwell's Inconsistency & Displacement Current: Inadequacy of Ampere's circuital law $\\nabla \\times \\mathbf{H} = \\mathbf{J}$ for time-varying fields: divergence of curl is identically zero ($\\nabla \\cdot (\\nabla \\times \\mathbf{H}) = 0$), but continuity equation requires $\\nabla \\cdot \\mathbf{J} = -\\frac{\\partial \\rho_v}{\\partial t} \\ne 0$; Maxwell's resolution: addition of Displacement Current Density $\\mathbf{J}_d = \\frac{\\partial \\mathbf{D}}{\\partial t}$.",
    "Total Current Density in Ampere-Maxwell Law: $\\mathbf{J}_{total} = \\mathbf{J}_{c} + \\mathbf{J}_{d} = \\sigma \\mathbf{E} + \\frac{\\partial \\mathbf{D}}{\\partial t}$; Conduction current vs displacement current in parallel-plate capacitor dielectric; Displacement current ensures continuity of total current across capacitor plates.",
    "Maxwell's Four Equations: Complete formulation in Differential Form: (1) $\\nabla \\cdot \\mathbf{D} = \\rho_v$, (2) $\\nabla \\cdot \\mathbf{B} = 0$, (3) $\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}$, (4) $\\nabla \\times \\mathbf{H} = \\mathbf{J} + \\frac{\\partial \\mathbf{D}}{\\partial t}$; Integral Form via Divergence and Stokes' theorems; Time-harmonic phasor form ($\partial / \\partial t \\to j\\omega$).",
    "Retarded Potentials and Wave Equations: Electromagnetic potentials in dynamic fields; Lorentz Gauge Condition: $\\nabla \\cdot \\mathbf{A} = -\\mu \\epsilon \\frac{\\partial V}{\\partial t}$; Decoupled Inhomogeneous Wave Equations: $\\nabla^2 V - \\mu \\epsilon \\frac{\\partial^2 V}{\\partial t^2} = -\\frac{\\rho_v}{\\epsilon}$ and $\\nabla^2 \\mathbf{A} - \\mu \\epsilon \\frac{\\partial^2 \\mathbf{A}}{\\partial t^2} = -\\mu \\mathbf{J}$; Retarded potential solutions accounting for propagation delay $t' = t - R/u$.",
    "Poynting's Theorem & Electromagnetic Power Flow: Derivation from Maxwell's curl equations: $-\\nabla \\cdot (\\mathbf{E} \\times \\mathbf{H}) = \\mathbf{J} \\cdot \\mathbf{E} + \\frac{\\partial}{\\partial t}\\left(\\frac{1}{2}\\epsilon E^2 + \\frac{1}{2}\\mu H^2\\right)$; Poynting Vector $\\mathbf{S} = \\mathbf{E} \\times \\mathbf{H}$ representing instantaneous directional power density in $\\text{W/m}^2$; Time-average Poynting vector: $\\mathbf{S}_{avg} = \\frac{1}{2} \\text{Re}\\{\\mathbf{E} \\times \\mathbf{H}^*\\}$.",
    "Electromagnetic Plane Waves in Lossless Media: Helmholtz wave equations in source-free lossless dielectric: $\\nabla^2 \\mathbf{E} - \\mu \\epsilon \\frac{\\partial^2 \\mathbf{E}}{\\partial t^2} = 0$; Uniform Plane Wave (UPW) propagating in $+z$ direction: $\\mathbf{E}(z,t) = E_0 \\cos(\\omega t - \\beta z) \\hat{\\mathbf{a}}_x$; Phase velocity $u_p = \\frac{1}{\\sqrt{\\mu \\epsilon}} = c / \\sqrt{\\mu_r \\epsilon_r}$; Phase constant $\\beta = \\omega \\sqrt{\\mu \\epsilon} = \\frac{2\\pi}{\\lambda}$; Intrinsic / Wave Impedance $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}}$ ($377\\ \\Omega$ in free space); Transverse Electromagnetic (TEM) wave nature ($\\mathbf{E} \\perp \\mathbf{H} \\perp \\hat{\\mathbf{a}}_k$).",
    "Wave Propagation in Lossy Media and Conductors: Complex permittivity and loss tangent $\\tan\\theta = \\frac{\\sigma}{\\omega \\epsilon}$; Propagation constant $\\gamma = \\alpha + j\\beta = \\sqrt{j\\omega\\mu(\\sigma + j\\omega\\epsilon)}$; Attenuation constant $\\alpha$ (nepers/m); Good dielectrics ($\\sigma \\ll \\omega \\epsilon$) vs Good conductors ($\\sigma \\gg \\omega \\epsilon$); Skin depth / penetration depth in conductors: $\\delta = \\sqrt{\\frac{2}{\\omega \\mu \\sigma}} = \\frac{1}{\\alpha}$; Surface resistance $R_s = \\frac{1}{\\sigma \\delta}$.",
    "University Examination Strategy: State and prove Maxwell's equations in both point and integral forms, derive the wave equation for electric and magnetic fields in dielectric media, compute displacement current density in capacitors, and calculate skin depth, wave impedance, and average power density."
], [
    "Faraday's Law (Point Form): $\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}$.",
    "Maxwell-Ampere Law: $\\nabla \\times \\mathbf{H} = \\mathbf{J} + \\frac{\\partial \\mathbf{D}}{\\partial t}$.",
    "Displacement Current Density: $\\mathbf{J}_d = \\frac{\\partial \\mathbf{D}}{\\partial t} = \\epsilon \\frac{\\partial \\mathbf{E}}{\\partial t}$.",
    "Lorentz Gauge Condition: $\\nabla \\cdot \\mathbf{A} = -\\mu \\epsilon \\frac{\\partial V}{\\partial t}$.",
    "Poynting Vector: $\\mathbf{S} = \\mathbf{E} \\times \\mathbf{H}$ (in $\\text{W/m}^2$).",
    "Average Poynting Vector: $\\mathbf{S}_{avg} = \\frac{1}{2} \\text{Re}\\{\\mathbf{E} \\times \\mathbf{H}^*\\}$.",
    "Free Space Intrinsic Impedance: $\\eta_0 = \\sqrt{\\frac{\\mu_0}{\\epsilon_0}} \\approx 120\\pi \\approx 377\\ \\Omega$.",
    "Speed of Light in Free Space: $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} \\approx 3 \\times 10^8\\text{ m/s}$.",
    "Conductor Skin Depth: $\\delta = \\sqrt{\\frac{2}{\\omega \\mu \\sigma}} = \\frac{1}{\\sqrt{\\pi f \\mu \\sigma}}$.",
    "Exam Gold Tip: In a good conductor, the magnetic field lags the electric field by exactly $45^\\circ$ ($j\\omega\\mu/(\\sigma + j\\omega\\epsilon) \\approx \\sqrt{\\omega\\mu/\\sigma} \\angle 45^\\circ$)."
])

# Save updated batch 3
with open('scripts/sem3_btech_batch3_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 3 part 3 complete: total units now: {len(data)}")
