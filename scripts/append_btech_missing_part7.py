import json

with open('scripts/sem3_btech_missing_data.json', 'r', encoding='utf-8') as f:
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
# 7. FLUID MECHANICS (MOMENTUM TRANSFER)
# =========================================================================
add("Fluid Mechanics (Momentum Transfer)", 1, "Fluid Properties", [
    "Continuum Hypothesis in Chemical Engineering: Knudsen number criterion $Kn = \\lambda / L < 0.01$; Macroscopic fluid properties defined at a mathematical point as continuous field variables without statistical molecular fluctuations.",
    "Newton's Law of Viscosity & Momentum Flux: Molecular shear stress $\\tau_{yx} = -\\mu \\frac{dv_x}{dy}$, representing the negative molecular flux of $x$-momentum in the $y$-direction; Dynamic viscosity $\\mu$ in $\\text{Pa}\\cdot\\text{s}$ or Poise ($1\\text{ P} = 0.1\\text{ Pa}\\cdot\\text{s}$).",
    "Non-Newtonian Fluid Rheology: Ostwald-de Waele Power-Law model: $\\tau = K \\left|\\frac{dv}{dy}\\right|^{n-1} \\frac{dv}{dy}$; Pseudoplastic / shear-thinning ($n < 1$, polymer solutions, paint), Dilatant / shear-thickening ($n > 1$, cornstarch suspension), and Bingham plastics (yield stress $\\tau_0$, drilling muds, slurries).",
    "Time-Dependent Rheology: Thixotropic fluids (apparent viscosity decreases with sustained shearing time under constant shear rate, e.g. printing inks) vs Rheopectic fluids (viscosity increases with shearing time, e.g. gypsum pastes); Viscoelastic polymers exhibiting Weissenberg effect.",
    "Kinematic Viscosity & Momentum Diffusivity: $\\nu = \\mu / \\rho$ in $\\text{m}^2/\\text{s}$ or Stokes ($1\\text{ St} = 10^{-4}\\text{ m}^2/\\text{s}$); Represents molecular diffusivity of momentum in Navier-Stokes equations analogous to thermal diffusivity $\\alpha$ and mass diffusivity $D_{AB}$.",
    "Surface Tension & Capillary Phenomena: Interfacial free energy $\\sigma$ ($\\\\text{N/m}$); Young-Laplace equation for pressure difference across curved fluid interface: $\\Delta P = \\sigma \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$; Capillary rise in circular tubes: $h = \\frac{4\\sigma\\cos\\theta}{\\rho g d}$.",
    "Vapor Pressure & Cavitation in Chemical Process Equipment: Liquid boils when local absolute static pressure drops to saturation vapor pressure $P_v(T)$; Bubble collapse causes high-frequency pressure shocks ($>1000\\text{ MPa}$) eroding pump impellers and control valves.",
    "Fluid Compressibility & Bulk Modulus: Isothermal compressibility $\\beta_T = -\\frac{1}{V}\\left(\\frac{\\partial V}{\\partial P}\\right)_T$; Bulk modulus of elasticity $K = 1/\\beta = \\rho \\frac{dP}{d\\rho}$; Incompressible flow assumption valid when Mach number $Ma = v / c < 0.3$.",
    "Viscosity Temperature Dependency: Liquid viscosity decreases exponentially with temperature according to Andrade equation: $\\mu(T) = A e^{B/T}$; Gas viscosity increases with temperature according to Chapman-Enskog / Sutherland equation: $\\mu \\propto T^{3/2} / (T + S)$.",
    "University Examination Strategy: Derive the Young-Laplace equation across a spherical bubble, classify rheological curves on a shear stress vs shear rate plot, and calculate capillary rise in narrow vertical tubes."
], [
    "Newton's Viscosity Law: $\\tau_{yx} = -\\mu \\frac{dv_x}{dy}$.",
    "Power Law Model: $\\tau = K \\dot{\\gamma}^n$ (Pseudoplastic for $n < 1$, Dilatant for $n > 1$).",
    "Bingham Plastic Equation: $\\tau = \\tau_0 + \\mu_p \\dot{\\gamma}$ (valid for $\\tau \\ge \\tau_0$).",
    "Kinematic Viscosity Definition: $\\nu = \\frac{\\mu}{\\rho}$ ($\\\\text{m}^2/\\text{s}$).",
    "Young-Laplace Bubble Formula: $\\Delta P = \\frac{4\\sigma}{R}$ (two air-liquid interfaces).",
    "Droplet Pressure Jump: $\\Delta P = \\frac{2\\sigma}{R}$.",
    "Capillary Rise Formula: $h = \\frac{4\\sigma\\cos\\theta}{\\rho g d}$.",
    "Bulk Modulus Formula: $K = -V \\frac{dP}{dV} = \\rho \\frac{dP}{d\\rho}$.",
    "Incompressible Flow Criterion: $Ma = \\frac{v}{c} < 0.3$.",
    "Exam Scoring Tip: Viscosity of liquids decreases with temperature due to weakening intermolecular cohesion, whereas gas viscosity increases due to greater molecular collision frequency."
])

add("Fluid Mechanics (Momentum Transfer)", 2, "Fluid Statics", [
    "Pascal's Law of Hydrostatic Pressure: Pressure at any point in a stationary fluid is equal in all directions: $P_x = P_y = P_z$; Foundation of hydraulic press mechanical advantage: $F_2 = F_1 (A_2 / A_1)$.",
    "Hydrostatic Equation in Differential Form: Balance of gravity and pressure gradient: $\\frac{dP}{dz} = -\\rho g$; For constant density liquid, linear pressure depth profile: $P = P_0 + \\rho g h$; Absolute vs gauge pressure: $P_{\\text{abs}} = P_{\\text{gauge}} + P_{\\text{atm}}$.",
    "Atmospheric Pressure Variation in Barometric Field: Isothermal ideal gas atmosphere: $P(z) = P_0 \\exp\\left(-\\frac{M g z}{R T}\\right)$; Adiabatic atmosphere with constant lapse rate: $T(z) = T_0 - \\Gamma z$.",
    "Manometry in Chemical Plants: U-tube manometer reading differential pressure: $\\Delta P = (\\rho_m - \\rho) g h$; Inverted U-tube manometers for liquid-liquid systems; Inclined manometers for high-sensitivity gas draft measurements ($\\\\Delta P = \\rho_m g L \\sin\\theta$).",
    "Hydrostatic Forces on Submerged Flat Surfaces: Resultant compressive force $F = \\rho g \\bar{h} A$; Line of action passes through Center of Pressure (CP): $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2\\theta}{A \\bar{h}}$, which always lies strictly below the centroid $\\bar{h}$.",
    "Hydrostatic Forces on Curved Surfaces: Decomposed into orthogonal components: Horizontal force $F_x = \\rho g \\bar{h} A_{\\text{proj}}$ acting on vertical projection; Vertical force $F_y = \\text{Weight of fluid column directly above curved surface}$; Resultant $F_R = \\sqrt{F_x^2 + F_y^2}$.",
    "Buoyancy & Archimedes Principle: Net upward buoyant force $F_b = \\rho_f g V_{\\text{disp}}$ equals weight of displaced fluid; Line of action passes through Center of Buoyancy $B$ (centroid of displaced fluid volume).",
    "Stability of Submerged & Floating Bodies: Submerged body: Stable iff center of buoyancy $B$ lies vertically above center of gravity $G$; Floating body: Rotational stability governed by Metacenter $M$; Stable iff Metacentric Height $GM = BM - BG > 0$, where $BM = I / V_{\\text{disp}}$.",
    "Fluids Under Rigid-Body Acceleration: Uniform linear acceleration $a_x, a_z$: Free surface tilts at angle $\\tan\\theta = -\\frac{a_x}{g + a_z}$; Rigid-body rotation around vertical axis: Free surface forms paraboloid of revolution: $z = \\frac{\\omega^2 r^2}{2g}$.",
    "University Examination Strategy: Derive the center of pressure formula $h_{cp} = \\bar{h} + \\frac{I_G\\sin^2\\theta}{A\\bar{h}}$, calculate metacentric height $GM$ for a floating industrial decanter, and solve differential manometer equations."
], [
    "Hydrostatic Gradient: $\\frac{dP}{dz} = -\\rho g$.",
    "Linear Depth Pressure: $P = P_0 + \\rho g h$.",
    "Differential Manometer: $\\Delta P = (\\rho_m - \\rho) g h$.",
    "Center of Pressure on Inclined Plane: $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2\\theta}{A \\bar{h}}$.",
    "Archimedes Buoyant Force: $F_B = \\rho_f g V_{\\text{disp}}$.",
    "Metacentric Radius Formula: $BM = \\frac{I}{V_{\\text{disp}}}$.",
    "Metacentric Height Stability Criterion: Stable iff $GM = BM - BG > 0$.",
    "Linear Acceleration Surface Slope: $\\tan\\theta = -\\frac{a_x}{g + a_z}$.",
    "Rotating Fluid Paraboloid: $z(r) - z(0) = \\frac{\\omega^2 r^2}{2g}$.",
    "Exam Scoring Tip: The center of pressure always lies below the centroid because the hydrostatic pressure increases with depth."
])

add("Fluid Mechanics (Momentum Transfer)", 3, "Fluid Dynamics", [
    "Eulerian vs Lagrangian Flow Descriptions: Lagrangian tracks individual tagged fluid parcels $\\vec{x}(t)$; Eulerian observes velocity field $\\vec{v}(\\vec{x}, t)$ at fixed spatial coordinates; Material / Substantial derivative $\\frac{D}{Dt} = \\frac{\\partial}{\\partial t} + \\vec{v} \\cdot \\nabla$.",
    "Continuity Equation (Conservation of Mass): General differential continuity: $\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\vec{v}) = 0$; For incompressible fluid: $\\nabla \\cdot \\vec{v} = \\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} + \\frac{\\partial w}{\\partial z} = 0$; 1D pipe flow: $A_1 v_1 = A_2 v_2$.",
    "Navier-Stokes Equations (Conservation of Momentum): $\\rho \\frac{D\\vec{v}}{Dt} = -\\nabla P + \\mu \\nabla^2 \\vec{v} + \\rho \\vec{g}$; Balance of inertia, pressure gradient, viscous diffusion, and gravity body forces in incompressible Newtonian flow.",
    "Euler's Equation of Motion: Neglecting viscous friction ($\\mu = 0$ along streamline): $\\frac{dP}{\\rho} + v dv + g dz = 0$; Valid for frictionless inviscid streamlines.",
    "Bernoulli's Energy Theorem: Integrating Euler's equation along streamline for steady, incompressible, frictionless flow: $\\frac{P}{\\rho g} + \\frac{v^2}{2g} + z = \\text{Constant} = H$; Terms represent static pressure head, velocity / dynamic head, and datum potential head.",
    "Bernoulli Modifications for Real Viscous Flow: Engineering Bernoulli equation including frictional head loss $h_L$ and pump shaft work $w_p$: $\\frac{P_1}{\\rho g} + \\frac{\\alpha_1 v_1^2}{2g} + z_1 + h_p = \\frac{P_2}{\\rho g} + \\frac{\\alpha_2 v_2^2}{2g} + z_2 + h_L$; Kinetic energy correction factor $\\alpha = 2$ for laminar, $\\alpha \\approx 1.05$ for turbulent.",
    "Venturimeter & Flow Rate Metering: Converging inlet, cylindrical throat, and gradual diverging diffuser ($5-7^\\circ$ to prevent boundary layer separation); Theoretical flow rate $Q_{th} = \\frac{A_1 A_2}{\\sqrt{A_1^2 - A_2^2}} \\sqrt{\\frac{2\\Delta P}{\\rho}}$; Actual flow $Q = C_d Q_{th}$ with discharge coefficient $C_d \\approx 0.96 - 0.98$.",
    "Orifice Meter & Pitot Tube: Orifice meter ($C_d \\approx 0.60-0.65$, vena contracta formation, high permanent pressure loss); Pitot-static tube measuring stagnation pressure: $P_{\\text{stag}} = P_0 + \\frac{1}{2}\\rho v^2 \\implies v = \\sqrt{\\frac{2(P_{\\text{stag}} - P_0)}{\\rho}}$.",
    "Vorticity & Stream Functions: Vorticity vector $\\vec{\\omega} = \\nabla \\times \\vec{v}$; Irrotational flow condition $\\nabla \\times \\vec{v} = 0 \\implies \\vec{v} = \\nabla \\phi$; Stream function $\\psi(x, y)$ satisfies $u = \\frac{\\partial\\psi}{\\partial y}, v = -\\frac{\\partial\\psi}{\\partial x}$; Laplace equation $\\nabla^2 \\phi = \\nabla^2 \\psi = 0$.",
    "University Examination Strategy: Derive the Bernoulli equation by integrating Euler's equation along a streamline, calculate volumetric flow rate through a Venturimeter, and evaluate velocity potential $\\phi$ from stream function $\\psi$."
], [
    "Material Derivative: $\\frac{Df}{Dt} = \\frac{\\partial f}{\\partial t} + u\\frac{\\partial f}{\\partial x} + v\\frac{\\partial f}{\\partial y} + w\\frac{\\partial f}{\\partial z}$.",
    "Incompressible Continuity Equation: $\\nabla \\cdot \\vec{v} = 0$.",
    "Navier-Stokes Equation (Vector): $\\rho \\left(\\frac{\\partial\\vec{v}}{\\partial t} + \\vec{v}\\cdot\\nabla\\vec{v}\\right) = -\\nabla P + \\mu \\nabla^2 \\vec{v} + \\rho\\vec{g}$.",
    "Bernoulli's Equation: $\\frac{P}{\\rho g} + \\frac{v^2}{2g} + z = H$ (Constant along streamline).",
    "Venturi Flow Formula: $Q = C_d \\frac{A_1 A_2}{\\sqrt{A_1^2 - A_2^2}} \\sqrt{\\frac{2\\Delta P}{\\rho}}$.",
    "Pitot Tube Velocity: $v = \\sqrt{\\frac{2\\Delta P}{\\rho}}$.",
    "Kinetic Energy Factor $\\alpha$: $\\alpha = 2.0$ for laminar pipe flow; $\\alpha \\approx 1.05$ for turbulent pipe flow.",
    "Stream Function Velocities: $u = \\frac{\\partial\\psi}{\\partial y}, \\quad v = -\\frac{\\partial\\psi}{\\partial x}$.",
    "Irrotational Flow Condition: $\\nabla \\times \\vec{v} = 0$.",
    "Exam Scoring Tip: The diverging cone of a Venturimeter is designed with a small angle ($5-7^\\circ$) over a longer length to prevent boundary layer separation and eddy head loss."
])

add("Fluid Mechanics (Momentum Transfer)", 4, "Flow Through Pipes", [
    "Reynolds Number & Flow Regimes: Dimensionless ratio of inertial to viscous forces: $Re = \\frac{\\rho v D}{\\mu} = \\frac{v D}{\\nu}$; Laminar flow ($Re < 2100$), Transition ($2100 < Re < 4000$), and Fully developed turbulent flow ($Re > 4000$).",
    "Hagen-Poiseuille Law for Laminar Flow: Fully developed laminar pipe flow; Parabolic velocity profile $v(r) = v_{max} \\left(1 - \\frac{r^2}{R^2}\\right)$, where $v_{max} = 2 v_{avg}$; Wall shear stress $\\tau_w = \\frac{\\Delta P \\cdot R}{2L}$; Pressure drop: $\\Delta P = \\frac{32 \\mu v L}{D^2} = \\frac{128 \\mu Q L}{\\pi D^4}$.",
    "Darcy-Weisbach Friction Equation: Head loss due to pipe friction: $h_f = f \\frac{L}{D} \\frac{v^2}{2g}$ (where $f$ is Darcy friction factor; Fanning friction factor $f_F = f / 4$); For laminar flow, $f = \\frac{64}{Re}$ ($f_F = \\frac{16}{Re}$).",
    "Turbulent Pipe Flow & Moody Diagram: Universal velocity profile: Viscous sublayer ($y^+ < 5, u^+ = y^+$), Buffer zone ($5 < y^+ < 30$), and Logarithmic overlap layer ($u^+ = \\frac{1}{\\kappa} \\ln y^+ + B$); Friction factor depends on $Re$ and relative surface roughness $\\varepsilon / D$ as plotted on the Moody chart.",
    "Colebrook-White & Haaland Equations: Implicit Colebrook equation: $\\frac{1}{\\sqrt{f}} = -2.0 \\log_{10}\\left(\\frac{\\varepsilon / D}{3.7} + \\frac{2.51}{Re \\sqrt{f}}\\right)$; Explicit Haaland approximation: $\\frac{1}{\\sqrt{f}} \\approx -1.8 \\log_{10}\\left[\\left(\\frac{\\varepsilon / D}{3.7}\\right)^{1.11} + \\frac{6.9}{Re}\\right]$.",
    "Hydrodynamic Entrance Length ($L_h$): Distance required for boundary layer to merge at pipe centerline: Laminar flow entrance length $L_h \\approx 0.05 Re \\cdot D$; Turbulent entrance length $L_h \\approx 10-50 D$ (much shorter due to rapid turbulent eddy diffusion).",
    "Minor Losses in Pipe Networks: Head losses in fittings, valves, contractions, and bends: $h_m = K_L \\frac{v^2}{2g}$; Sudden enlargement loss (Borda-Carnot formula): $h_e = \\frac{(v_1 - v_2)^2}{2g}$; Sudden contraction loss: $h_c = K_c \\frac{v_2^2}{2g} = \\left(\\frac{1}{C_c} - 1\\right)^2 \\frac{v_2^2}{2g}$.",
    "Pipes in Series & Parallel: Pipes in series: $Q = Q_1 = Q_2$ and $h_L = h_{L1} + h_{L2}$; Equivalent pipe length (Dupuit's equation): $\\frac{L_e}{D_e^5} = \\frac{L_1}{D_1^5} + \\frac{L_2}{D_2^5}$; Pipes in parallel: $h_L = h_{L1} = h_{L2}$ and total flow $Q = Q_1 + Q_2$.",
    "Flow Through Packed Beds (Ergun Equation): Flow through porous catalyst beds; Void fraction / porosity $\\varepsilon$; Ergun equation combines laminar Kozeny-Carman and turbulent Burke-Plummer terms: $\\frac{\\Delta P}{L} = 150 \\frac{\\mu v_0 (1 - \\varepsilon)^2}{d_p^2 \\varepsilon^3} + 1.75 \\frac{\\rho v_0^2 (1 - \\varepsilon)}{d_p \\varepsilon^3}$.",
    "University Examination Strategy: Derive Hagen-Poiseuille equation starting from cylindrical momentum shell balance, solve parallel pipe network discharge divisions, and calculate pressure drop across a packed bed using Ergun's equation."
], [
    "Hagen-Poiseuille Pressure Drop: $\\Delta P = \\frac{32 \\mu v L}{D^2} = \\frac{128 \\mu Q L}{\\pi D^4}$.",
    "Darcy Friction Factor (Laminar): $f = \\frac{64}{Re}$.",
    "Fanning Friction Factor (Laminar): $f_F = \\frac{16}{Re}$.",
    "Darcy-Weisbach Equation: $h_f = f \\frac{L}{D} \\frac{v^2}{2g}$.",
    "Sudden Enlargement Head Loss: $h_e = \\frac{(v_1 - v_2)^2}{2g}$.",
    "Sudden Contraction Head Loss: $h_c = \\left(\\frac{1}{C_c} - 1\\right)^2 \\frac{v_2^2}{2g}$.",
    "Dupuit Equivalent Pipe Formula: $\\frac{L_e}{D_e^5} = \\sum_{i=1}^n \\frac{L_i}{D_i^5}$.",
    "Ergun Packed Bed Equation: $\\frac{\\Delta P}{L} = 150\\frac{\\mu v_0(1-\\varepsilon)^2}{d_p^2 \\varepsilon^3} + 1.75\\frac{\\rho v_0^2(1-\\varepsilon)}{d_p \\varepsilon^3}$.",
    "Kozeny-Carman Constant: Valid for laminar packed bed flow ($Re_p < 10$).",
    "Exam Scoring Tip: The friction factor $f$ in chemical engineering literature is often Fanning's ($f_F$), which is strictly one-fourth of the Darcy friction factor ($f = 4 f_F$)."
])

add("Fluid Mechanics (Momentum Transfer)", 5, "Pumps & Compressors", [
    "Classification of Fluid Machinery: Positive displacement pumps (reciprocating piston/plunger, rotary gear, lobe, screw, peristaltic; constant volume delivery independent of discharge pressure) vs Dynamic / Turbomachinery (centrifugal pumps, axial flow pumps; head decreases with flow rate).",
    "Centrifugal Pump Architecture & Velocity Triangles: Impeller vanes (backward-curved vanes $\\beta_2 < 90^\\circ$ yield stable drooping $H-Q$ curve), volute casing, and diffuser; Euler's pump equation: Theoretical head $H_e = \\frac{u_2 v_{w2} - u_1 v_{w1}}{g}$; For radial inlet ($v_{w1} = 0$), $H_e = \\frac{u_2 v_{w2}}{g}$.",
    "Centrifugal Pump Efficiencies: Manometric efficiency $\\eta_m = \\frac{g H_m}{u_2 v_{w2}}$; Volumetric efficiency $\\eta_v = \\frac{Q}{Q + q_L}$; Mechanical efficiency $\\eta_{mech} = \\frac{\\text{Hydraulic Power}}{\\text{Brake Power}}$; Overall efficiency $\\eta_o = \\eta_m \\times \\eta_v \\times \\eta_{mech} = \\frac{\\rho g Q H_m}{P_{\\text{shaft}}}$.",
    "Net Positive Suction Head (NPSH) & Cavitation Prevention: Available NPSH: $NPSH_A = \\frac{P_{atm}}{\\rho g} - h_s - h_{fs} - \\frac{P_v}{\\rho g}$; Required NPSH: $NPSH_R$ specified by pump manufacturer; Cavitation-free operation strictly requires $NPSH_A > NPSH_R + 0.5\\text{ m}$.",
    "Specific Speed ($N_s$) & Impeller Selection: $N_s = \\frac{N \\sqrt{Q}}{H^{3/4}}$ in rpm; Low $N_s$ ($500-1500$, narrow radial impellers for high head and low discharge); Medium $N_s$ ($1500-4000$, Francis type); High $N_s$ ($>4000$, axial flow propeller pumps for high flow and low head).",
    "Centrifugal Pump Operating Point & System Characteristic: System head curve: $H_{sys} = H_{stat} + K Q^2$; Operating duty point is the intersection of the pump manufacturer's $H-Q$ curve with the pipeline system curve; Throttling valve control vs Variable Frequency Drive (VFD).",
    "Pumps in Series & Parallel Configurations: Series (impellers on common shaft or multi-stage pumps): $Q = Q_1$, Total head $H = H_1 + H_2$; Parallel (multiple pumps discharging into common manifold): $H = H_1 = H_2$, Total flow $Q = Q_1 + Q_2$.",
    "Reciprocating Pumps & Indicator Diagrams: Double-acting piston pump discharge $Q_{th} = \\frac{2 A L N}{60}$; Slip $= \\frac{Q_{th} - Q_{act}}{Q_{th}}$; Negative slip occurs in long suction pipes at high speeds; Acceleration head $h_a = \\frac{l}{g}\\frac{A}{a}\\omega^2 r \\cos\\theta$; Air vessels installed near cylinder to equalize flow and eliminate inertia head.",
    "Gas Compressors & Multi-Stage Compression: Reciprocating vs Centrifugal compressors; Work of single-stage compression; Multi-stage compression with intercooling reduces work to minimum; Optimum interstage pressure for two-stage: $P_i = \\sqrt{P_1 P_2}$.",
    "University Examination Strategy: Construct inlet and outlet velocity triangles for a centrifugal pump with backward-curved vanes, calculate manometric head and overall efficiency, solve NPSH available problems, and prove optimum intercooling pressure $P_i = \\sqrt{P_1 P_2}$."
], [
    "Euler's Pump Head Equation: $H_{e} = \\frac{u_2 v_{w2}}{g}$ (assuming radial entry $v_{w1} = 0$).",
    "Manometric Efficiency: $\\eta_m = \\frac{g H_m}{u_2 v_{w2}}$.",
    "Overall Pump Efficiency: $\\eta_o = \\frac{\\rho g Q H_m}{P_{\\text{brake}}}$.",
    "NPSH Available Formula: $NPSH_A = \\frac{P_0 - P_v}{\\rho g} - z_s - h_{fs}$.",
    "Cavitation Avoidance Criterion: $NPSH_A > NPSH_R$ (minimum margin $0.5\\text{ m}$).",
    "Pump Specific Speed: $N_s = \\frac{N \\sqrt{Q}}{H_m^{3/4}}$.",
    "Affinity Laws (Speed $N$ Variation): $\\frac{Q_1}{Q_2} = \\frac{N_1}{N_2}, \\quad \\frac{H_1}{H_2} = \\left(\\frac{N_1}{N_2}\\right)^2, \\quad \\frac{P_1}{P_2} = \\left(\\frac{N_1}{N_2}\\right)^3$.",
    "Two-Stage Compressor Optimum Interstage: $P_i = \\sqrt{P_1 P_2}$.",
    "Reciprocating Pump Slip: $\\%\\text{Slip} = \\frac{Q_{th} - Q_{act}}{Q_{th}} \\times 100\\%$.",
    "Exam Scoring Tip: Backward-curved vanes ($\\beta_2 < 90^\\circ$) are universally used in centrifugal pumps because they produce a self-limiting power curve and higher efficiency than forward vanes."
])

# Save updated dataset
with open('scripts/sem3_btech_missing_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
