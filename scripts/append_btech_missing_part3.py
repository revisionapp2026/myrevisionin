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
# 3. MANUFACTURING TECHNOLOGY — I
# =========================================================================
add("Manufacturing Technology — I", 1, "Casting Processes", [
    "Sand Casting Fundamentals: Pouring molten metal into refractory sand mold cavity; Pattern allowances: shrinkage allowance ($1-2\\%$ for steel/aluminum), draft allowance ($1-2^\\circ$), machining allowance, distortion allowance, and shake allowance.",
    "Gating System Design & Hydraulics: Pouring basin, sprue, runner, and ingate; Choke area $A_c = \\frac{m}{\\rho t_p c_d \\sqrt{2 g h}}$; Pressurized gating ($A_s > A_r > A_g$, maintains full liquid stream, prevents aspiration) vs Unpressurized gating ($A_s < A_r < A_g$, minimizes turbulence and erosion).",
    "Chvorinov's Rule for Solidification: Total solidification time $t_s = B \\left(\\frac{V}{A}\\right)^n$, where $V/A$ is modulus (volume-to-surface-area ratio), $B$ is mold constant, and exponent $n \\approx 2.0$.",
    "Riser Design & Placement (Caine's & Modulus Methods): Riser must solidify after the casting ($t_{s,\\text{riser}} > t_{s,\\text{casting}} \\implies (V/A)_{riser} \\ge 1.2 (V/A)_{casting}$); Feeding distance of risers; Use of insulating sleeves and exothermic toppings.",
    "Specialized Casting Techniques: Shell molding (phenolic resin-bonded sand, high dimensional accuracy), Investment / Lost-Wax casting (ceramic slurry shell around wax pattern, net-shape gas turbine blades), and Die casting (high-pressure hot/cold chamber die casting).",
    "Centrifugal Casting: True centrifugal (rotating mold around horizontal/vertical axis, pipes without cores; G-factor $G = \\frac{\\omega^2 r}{g} \\approx 60-80$), Semi-centrifugal (wheels/pulleys), and Centrifuging.",
    "Casting Defects & Prevention: Gas porosity (pinholes, blowholes due to trapped air/steam, prevented by venting and dry sand), Shrinkage cavities (improper risering), Hot tears (restrained contraction at sharp corners), Cold shuts and Misruns (insufficient pouring temperature or fluidity).",
    "Melting Furnaces in Foundries: Cupola furnace (coke-fired for gray iron), Electric arc furnace (EAF, scrap steel melting), and Coreless induction furnace (precise metallurgical control and clean melting for non-ferrous alloys).",
    "Molding Sand Testing: Permeability test (gas venting rate under pressure), green compressive strength, dry strength, moisture content ($3-8\\%$), and clay content (determined by AFS clay wash test).",
    "University Examination Strategy: Derive Chvorinov's solidification equation, calculate choke area for a given mold filling time, and draw comparative sketches of pressurized vs unpressurized gating systems."
], [
    "Chvorinov's Solidification Law: $t_s = B \\left(\\frac{V}{A}\\right)^2$.",
    "Choke Area Formula: $A_c = \\frac{W}{\\rho t_p C_d \\sqrt{2 g H}}$.",
    "Unpressurized Gating Ratio: $A_s : A_r : A_g = 1 : 2 : 2$ or $1 : 4 : 4$ (reduces stream velocity and turbulence).",
    "Pressurized Gating Ratio: $A_s : A_r : A_g = 4 : 2 : 1$ (choke located at the ingate).",
    "Riser Modulus Condition: $M_{\\text{riser}} \\ge 1.2 M_{\\text{casting}}$, where $M = V / A$.",
    "Centrifugal Casting G-Factor: $G = \\frac{v^2}{r g} = \\frac{r \\omega^2}{g} \\ge 60$.",
    "Hot Tear Cause: Non-uniform cooling and high mechanical restraint during solid contraction.",
    "Investment Casting Tolerance: Achieves $\\pm 0.05\\text{ mm}$ dimensional precision and $0.8\\,\\mu\\text{m}$ surface finish.",
    "Core Sand Binder: Sodium silicate ($Na_2SiO_3$) hardened instantly by gassing with $CO_2$.",
    "Exam Scoring Tip: The sprue must be designed as a downward-converging paraboloid or truncated cone to prevent atmospheric aspiration into the falling liquid."
])

add("Manufacturing Technology — I", 2, "Welding", [
    "Arc Welding Physics & V-I Characteristics: Power source linear characteristic: $V = V_{oc} - \\left(\\frac{V_{oc}}{I_{sc}}\\right) I$, where $V_{oc}$ is open-circuit voltage and $I_{sc}$ is short-circuit current; Arc characteristic: $V = a + b L$; Optimum arc power $P_{max} = \\frac{V_{oc} I_{sc}}{4}$.",
    "Shielded Metal Arc Welding (SMAW / Stick): Consumable coated electrode; Flux decomposition produces protective shielding gas ($CO_2, CO$), deoxidizers, and slag cover; Cellulosic, rutile, and basic low-hydrogen flux formulations.",
    "Gas Tungsten Arc Welding (GTAW / TIG): Non-consumable tungsten electrode (pure W, thoriated, or zirconiated) shielded by inert argon/helium; DCEN (straight polarity, $70\\%$ heat at workpiece, deep penetration), DCEP (reverse polarity, $70\\%$ at electrode, cathodic cleaning), and AC for aluminum.",
    "Gas Metal Arc Welding (GMAW / MIG/MAG): Continuous consumable wire spool; Shielding gas (Argon for non-ferrous, $Ar + CO_2$ for steels); Metal transfer modes: short-circuiting (dip transfer), globular, spray transfer (above transition current), and pulsed spray.",
    "Submerged Arc Welding (SAW): High-deposition arc submerged under blanket of granular fusible flux; Extremely high currents ($>1000\\text{ A}$); Deep penetration, high travel speed, zero spatter, and high deposition rate for thick plates.",
    "Resistance Welding (RSW / Seam / Projection): Heat generated by Joule effect: $H = I^2 R t$; Contact resistance between sheets dominates; Water-cooled copper alloy electrodes; Nugget diameter $d_n \\approx 5\\sqrt{t}$, where $t$ is sheet thickness.",
    "Oxy-Acetylene Gas Welding: Combustion stages: primary inner cone ($C_2H_2 + O_2 \\to 2CO + H_2$, $3100^\\circ\\text{C}$) and outer envelope ($2CO + H_2 + 1.5O_2 \\to 2CO_2 + H_2O$); Flame types: Neutral ($O_2:C_2H_2 = 1:1$), Oxidizing ($>1.1:1$, brass/bronze), and Carburizing ($<1:1$, hardfacing).",
    "Welding Heat Affected Zone (HAZ) & Solidification: Peak temperature distribution $T(r, t)$; Microstructural zones: fusion zone, grain growth zone (coarse grain HAZ), normalized zone, and intercritical zone; Hydrogen-induced cold cracking in hard martensitic HAZ.",
    "Solid-State Welding Processes: Friction welding, Friction Stir Welding (FSW, non-consumable rotating pin tool plasticizing joint without melting), Explosive welding, and Ultrasonic welding for electronic micro-wires.",
    "University Examination Strategy: Solve for optimum arc length and maximum power in electric arc welding, calculate heat generation in resistance spot welding, and sketch the microstructural zones of the HAZ."
], [
    "Linear Power Source Equation: $V = V_{oc} - \\frac{V_{oc}}{I_{sc}} I$.",
    "Maximum Arc Power Formula: $P_{max} = \\frac{V_{oc} I_{sc}}{4}$ (occurs when $V = V_{oc}/2$ and $I = I_{sc}/2$).",
    "Resistance Spot Welding Heat: $H = I^2 R t$ Joules.",
    "Spot Weld Nugget Diameter: $d = 6\\sqrt{t}$ mm (or $5\\sqrt{t}$).",
    "Welding Heat Input per Unit Length: $H_{net} = \\eta \\frac{V I}{v}$ (where $\\eta$ is arc thermal efficiency and $v$ is welding speed).",
    "Neutral Flame Temperature: Peak temperature $3100-3200^\\circ\\text{C}$ at the tip of the inner white cone.",
    "DCEN Polarity Distribution: $70\\%$ heat generated at the anode (workpiece), producing deep, narrow penetration.",
    "DCEP Polarity Application: Provides cathodic cleaning action to blast refractory aluminum oxide ($Al_2O_3$) films.",
    "FSW Operating Mechanism: Non-consumable rotating tool generates frictional and plastic shear heating below melting point.",
    "Exam Scoring Tip: For resistance spot welding, the total resistance $R$ is the sum of bulk sheet resistances, electrode-sheet contact, and the dominant sheet-sheet interface resistance."
])

add("Manufacturing Technology — I", 3, "Forming Processes", [
    "Hot Working vs Cold Working: Hot working performed above recrystallization temperature ($T > 0.5 T_m$, low flow stress, dynamic recrystallization, no work hardening, poor surface finish); Cold working performed below ($T < 0.3 T_m$, high strength, strain hardening, close tolerances).",
    "True Stress & True Strain in Metal Forming: True stress $\\sigma_t = F/A$; True strain $\\varepsilon_t = \\ln(L/L_0) = \\ln(A_0/A)$; Plastic flow stress modeled via Hollomon law $\\sigma_f = K \\varepsilon^n$; Average flow stress $\\bar{\\sigma}_0 = \\frac{K \\varepsilon^n}{n + 1}$.",
    "Metal Rolling Fundamentals: Flat rolling of strip; Angle of bite $\\alpha$; Maximum draft per pass $\\Delta h_{max} = \\mu^2 R$, where $\\mu$ is coefficient of friction and $R$ is roll radius; Neutral point where strip velocity equals roll surface velocity ($v = v_r$).",
    "Rolling Mill Architectures: Two-high, three-high reversing, four-high (large backup rolls support small work rolls to reduce roll deflection), and cluster / Sendzimir mills for rolling ultra-thin foil.",
    "Forging Operations & Mechanics: Open-die forging (upsetting, drawing out), Closed-die / Impression-die forging with flash gutter (flash creates high hydrostatic pressure forcing metal into intricate cavity corners); Forging force $F = \\sigma_f A (1 + \\frac{2\\mu r}{3h})$.",
    "Extrusion Processes: Direct / Forward extrusion (billet moves in same direction as ram, high container friction) vs Indirect / Backward extrusion (billet stationary relative to container, zero wall friction, lower ram force); Hydrostatic extrusion.",
    "Wire & Tube Drawing: Pulling wire through converging carbide die; Reduction in area $r = 1 - (A_f / A_0)$; Drawing stress $\\sigma_d = \\bar{\\sigma}_0 \\ln\\left(\\frac{A_0}{A_f}\\right) \\left(1 + \\frac{\\mu}{\\alpha}\\right)$; Maximum theoretical reduction per pass for ideal plastic material is $63.2\\%$ ($r_{max} = 1 - 1/e$).",
    "Sheet Metal Forming Operations: Shearing, blanking (slug is part, die size = nominal, punch smaller by $2c$), punching/piercing (sheet is part, punch size = nominal), bending (bend allowance $BA = \\frac{\\pi}{180} R_b + K t$), and deep drawing.",
    "Deep Drawing & Limiting Drawing Ratio (LDR): Cup drawing using punch and blank holder; Limiting Drawing Ratio $LDR = D_{\\text{blank, max}} / d_{\\text{punch}} \\approx 2.0 - 2.2$; Defects: wrinkling in flange (insufficient blank holder force) and tearing at cup radius (excessive holder force).",
    "University Examination Strategy: Derive the maximum draft expression $\\Delta h_{max} = \\mu^2 R$ in flat rolling, calculate the drawing force for a wire reduction pass, and determine clearance allocation in blanking vs punching."
], [
    "Maximum Rolling Draft: $\\Delta h_{max} = h_0 - h_f = \\mu^2 R$.",
    "Roll Bite Condition without Assistance: $\\tan\\alpha \\le \\mu$.",
    "Average Flow Stress Formula: $\\bar{\\sigma}_0 = \\frac{K \\varepsilon^n}{n + 1}$.",
    "Ideal Extrusion Pressure: $p = \\bar{\\sigma}_0 \\ln\\left(\\frac{A_0}{A_f}\\right)$.",
    "Maximum Single-Pass Wire Drawing Reduction: $r_{max} = 1 - e^{-1} = 63.2\\%$.",
    "Blanking Tool Clearance Allocation: Die opening equals blank diameter $D$; Punch diameter $d = D - 2c$.",
    "Punching Tool Clearance Allocation: Punch diameter equals hole diameter $d_h$; Die opening $D = d_h + 2c$.",
    "Blanking Force Formula: $F = P \\cdot t \\cdot \\tau_s = \\pi D t \\tau_s$.",
    "Limiting Drawing Ratio: $LDR = \\frac{D_0}{d_p} \\approx 2.0$.",
    "Exam Scoring Tip: For blanking, die size is exact and clearance is subtracted from punch; for punching, punch size is exact and clearance is added to die."
])

add("Manufacturing Technology — I", 4, "Machining Basics", [
    "Orthogonal vs Oblique Cutting: Orthogonal cutting (cutting edge perpendicular to tool feed direction, 2D chip flow) vs Oblique cutting (cutting edge inclined at inclination angle $i$, 3D helical chip flow).",
    "Merchant's Cutting Force Circle: Relations between cutting force $F_c$, thrust force $F_t$, shear force $F_s$, normal shear force $F_n$, friction force $F$, and normal force $N$; Shear angle equation: $\\phi = 45^\\circ + \\frac{\\alpha}{2} - \\frac{\\beta}{2}$, where $\\alpha$ is rake angle and $\\beta = \\arctan(\\mu)$ is friction angle.",
    "Chip Formation Mechanics: Primary shear zone (shear strain $\\gamma = \\cot\\phi + \\tan(\\phi - \\alpha)$), secondary shear zone along tool-chip interface, and tertiary friction zone at tool flank; Continuous chips (ductile metals, high speed), BUE chips (built-up edge at medium speeds), and Discontinuous chips (brittle metals, e.g. cast iron).",
    "Chip Thickness Ratio ($r$): $r = \\frac{t_1}{t_2} = \\frac{l_2}{l_1} = \\frac{\\sin\\phi}{\\cos(\\phi - \\alpha)}$; Since uncut chip thickness $t_1 < t_2$, chip ratio is strictly $r < 1$; Shear angle determined from chip ratio: $\\tan\\phi = \\frac{r\\cos\\alpha}{1 - r\\sin\\alpha}$.",
    "Tool Geometry (ASA & Orthogonal Rake Systems): American Standards Association (ASA) tool signature: Back rake, Side rake, End relief, Side relief, End cutting edge, Side cutting edge angles, and Nose radius ($R$ in mm/inches).",
    "Taylor's Tool Life Equation: $V T^n = C$, where $V$ is cutting speed (m/min), $T$ is tool life (min), $n$ is Taylor exponent ($n \\approx 0.1-0.15$ for HSS, $0.2-0.4$ for carbides, $0.4-0.6$ for ceramics), and $C$ is machining constant.",
    "Cutting Tool Materials Hierarchy: High Speed Steel (HSS 18-4-1: $18\\%\\text{ W}, 4\\%\\text{ Cr}, 1\\%\\text{ V}$), Tungsten Carbide (WC-Co cermets), Coated carbides ($TiN, TiCN, Al_2O_3$), Ceramic inserts ($Si_3N_4, Al_2O_3$), Cubic Boron Nitride (CBN), and Polycrystalline Diamond (PCD).",
    "Cutting Tool Wear Mechanisms: Flank wear (abrasive/adhesive rubbing against finished surface, measured by width $VB$ in mm; Taylor tool life criterion $VB = 0.3\\text{ mm}$) and Crater wear (chemical diffusion on rake face at point of maximum temperature).",
    "Cutting Fluids & Heat Dissipation: Heat generated: $Q_{\\text{shear}} (70-80\\%) + Q_{\\text{friction}} (15-20\\%) + Q_{\\text{flank}} (5\\%)$; Water-soluble emulsion oils (cooling), straight mineral oils (lubrication), and cryogenic Minimum Quantity Lubrication (MQL) using liquid nitrogen.",
    "University Examination Strategy: Construct Merchant's force circle from measured dynamometer forces ($F_c, F_t$), calculate shear strain and cutting power, and solve Taylor's tool life equations for varying speeds."
], [
    "Merchant's Shear Angle Relation: $\\phi = 45^\\circ + \\frac{\\alpha}{2} - \\frac{\\beta}{2}$.",
    "Chip Thickness Ratio Formula: $r = \\frac{t_1}{t_2} = \\frac{\\sin\\phi}{\\cos(\\phi - \\alpha)}$.",
    "Shear Angle from Chip Ratio: $\\tan\\phi = \\frac{r\\cos\\alpha}{1 - r\\sin\\alpha}$.",
    "Shear Strain in Chip: $\\gamma = \\cot\\phi + \\tan(\\phi - \\alpha)$.",
    "Friction Force on Rake Face: $F = F_c\\sin\\alpha + F_t\\cos\\alpha$.",
    "Normal Force on Rake Face: $N = F_c\\cos\\alpha - F_t\\sin\\alpha$.",
    "Coefficient of Friction on Tool: $\\mu = \\tan\\beta = \\frac{F}{N} = \\frac{F_t + F_c\\tan\\alpha}{F_c - F_t\\tan\\alpha}$.",
    "Taylor's Tool Life Formula: $V T^n = C$.",
    "Cutting Power Consumption: $P_c = F_c \\times V$ Watts.",
    "Exam Scoring Tip: HSS tools lose hardness rapidly above $600^\\circ\\text{C}$ due to over-aging, whereas sintered carbide tools maintain red hardness up to $1000^\\circ\\text{C}$."
])

add("Manufacturing Technology — I", 5, "Metrology", [
    "Engineering Metrology & Inspection Principles: Precision (repeatability of measurement) vs Accuracy (closeness of measured value to true standard value); Systematic errors (controllable, calibration, environmental) vs Random errors (uncontrollable, statistical Gaussian distribution).",
    "Linear Measuring Instruments: Vernier caliper (least count $LC = 1\\text{ MSD} - 1\\text{ VSD} = 0.02\\text{ mm}$), Micrometer screw gauge ($LC = \\frac{\\text{Pitch}}{\\text{Number of circular divisions}} = 0.01\\text{ mm}$), and Slip gauges (gauge blocks, Grade 00, 0, I, II, joined via molecular wringing).",
    "Abbe's Principle of Alignment: Maximum measurement accuracy is attained only when the standard scale and the measured line of dimension are collinearly aligned on the same axis (satisfied by micrometer, violated by vernier caliper).",
    "Angular Metrology & Sine Bar: Angle measurement using precision rollers: $\\sin\\theta = \\frac{h}{L}$, where $h$ is slip gauge pack height and $L$ is distance between roller centers ($100\\text{ mm}$ or $200\\text{ mm}$); Errors become excessive for angles $\\theta > 45^\\circ$; Autocollimators and angle gauges.",
    "Limits, Fits & Tolerances (ISO & BIS Systems): Basic size, Upper deviation ($ES$), Lower deviation ($EI$), Fundamental tolerance ($IT$ grades $IT01$ to $IT16$, where tolerance unit $i = 0.45\\sqrt[3]{D} + 0.001 D$); Hole-basis system ($EI = 0$, 'H' hole) vs Shaft-basis system.",
    "Classification of Engineering Fits: Clearance fit (hole always larger than shaft, positive minimum clearance), Interference fit (shaft always larger than hole, negative maximum clearance), and Transition fit (tolerances overlap).",
    "Taylor's Principle of Limit Gauge Design: GO gauge must check maximum material condition (MMC) and all dimensions simultaneously; NO-GO gauge must check least material condition (LMC) and inspect only one dimension at a time.",
    "Surface Roughness & Texture Parameters: Surface profile $y(x)$; Center Line Average ($R_a = \\frac{1}{L}\\int_0^L |y| dx$), Root Mean Square roughness ($R_q = \\sqrt{\\frac{1}{L}\\int_0^L y^2 dx}$), and Ten-point height ($R_z$); Measured using stylus profilometers (Talysurf).",
    "Coordinate Measuring Machines (CMM): 3D touch-trigger and optical scanning probes moving along orthogonal $X, Y, Z$ guide ways; Software computes geometric features, circularity, flatness, parallelism, and true position tolerances.",
    "University Examination Strategy: Calculate tolerance unit $i$ and fundamental tolerance for a given diameter step, design GO and NO-GO plug gauges according to Taylor's principle, and solve sine bar angular setups."
], [
    "Sine Bar Formula: $\\sin\\theta = \\frac{h}{L}$ (accurate strictly for $\\theta \\le 45^\\circ$).",
    "Tolerance Unit Formula: $i = 0.45 \\sqrt[3]{D} + 0.001 D$ $\\mu\\text{m}$ (where $D = \\sqrt{D_1 D_2}$).",
    "IT6 Grade Tolerance: $10 i$.",
    "IT7 Grade Tolerance: $16 i$.",
    "IT8 Grade Tolerance: $25 i$.",
    "Average Surface Roughness $R_a$: $R_a = \\frac{1}{L}\\int_0^L |y| dx \\approx \\frac{\\sum |y_i|}{N}$.",
    "Peak-to-Valley Roughness in Turning: $h_{\\text{max}} = \\frac{f^2}{8 R}$ (where $f$ is feed and $R$ is tool nose radius).",
    "Taylor's Gauge Rule: GO gauge checks MMC and multiple features; NO-GO gauge checks LMC and isolated elements.",
    "Hole Basis Standard: Lower deviation of basic hole 'H' is identically zero ($EI = 0$).",
    "Exam Scoring Tip: Abbe's alignment error is avoided in micrometers because the spindle axis coincides directly with the measured anvil axis."
])

# Save updated dataset
with open('scripts/sem3_btech_missing_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
