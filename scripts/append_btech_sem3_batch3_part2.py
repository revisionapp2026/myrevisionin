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
# 12. ELECTRICAL MACHINES (B.Tech - General/Survey Course)
# =========================================================================
add("Electrical Machines", 1, "DC Machines", [
    "Electromechanical Energy Conversion: Energy balance principle: $d W_{elec} = d W_{mech} + d W_{fld} + d W_{loss}$; Field energy and co-energy concepts in singly and doubly excited magnetic systems; Force and torque formulation from magnetic co-energy: $T_e = \\frac{\\partial W_f'(i, \\theta)}{\\partial \\theta}$.",
    "DC Machine Structural Datapath: Magnetic frame / Yoke (cast iron or cast steel flux return path), Pole cores and laminated pole shoes, Armature core (slotted silicon steel laminations), Commutator (hard-drawn copper segments insulated with mica), Carbon brushes with phosphor-bronze tension springs.",
    "Unified EMF and Torque Equations: Generated EMF: $E = \\frac{\\Phi Z N P}{60 A}$; Electromagnetic torque: $T = \\frac{\\Phi Z I_a P}{2\\pi A}$; Interrelationship: $E I_a = T \\omega_m$ (internal mechanical power developed).",
    "Operational Topologies of DC Machines: Shunt, Series, Compound (Long-shunt and Short-shunt configurations); Cumulative vs Differential compounding; Operating as generator vs operating as motor.",
    "Torque-Speed Operating Envelopes: Shunt motor: linear slight speed droop ($\\% N_{reg} = \\frac{N_{NL} - N_{FL}}{N_{FL}} \\times 100\\% < 8\\%$); Series motor: inverse hyperbola ($N \\propto 1/\\sqrt{T}$), massive starting torque for traction; Compound motor: tailored droop.",
    "Speed Control Architectures: Armature resistance rheostat method (below base speed, low efficiency); Field flux control (above base speed, constant horsepower drive); Ward-Leonard variable voltage system for crane and hoist drives.",
    "Starting Mechanisms for DC Motors: Starting resistance necessity ($I_{st} = V / R_a$); Three-point starter internal schematic (Hold-in electromagnet No-Volt Coil in series with shunt field, Over-load trip relay); Four-point starter overcoming high-speed field weakening nuisance trips.",
    "Losses and Efficiency Formulations: Copper losses ($I_a^2 R_a, I_{sh}^2 R_{sh}, I_{se}^2 R_{se}$), Core losses (Hysteresis loss $\\propto f B_m^{1.6}$, Eddy current loss $\\propto f^2 B_m^2 t^2$), Mechanical losses (bearing friction, brush friction, windage); Efficiency curves as function of load; Peak efficiency condition: Variable copper losses equal Constant rotational losses.",
    "Braking Modes in Industrial Drives: Regenerative braking (feeding power back into DC supply grid when overhauling load drives motor above no-load speed); Dynamic braking (dissipating armature kinetic energy across dynamic resistor bank); Plugging (reversing armature polarity, generating heavy stopping torque).",
    "University Examination Strategy: Derive electromechanical torque from co-energy formulations, compare three-point vs four-point starters with complete wiring schematics, and calculate full-load efficiency and speed regulation for DC shunt and series motors."
], [
    "Co-Energy Torque Formula: $T_e = +\\left.\\frac{\\partial W_f'(i, \\theta)}{\\partial \\theta}\\right|_{i = \\text{const}}$.",
    "Unified DC Machine Torque: $T_e = \\frac{P \\Phi Z I_a}{2\\pi A}$ N-m.",
    "Internal Power Balance: $P_{mech} = E_b I_a = T_e \\omega_m$.",
    "Shunt Motor Speed Droop: Small speed drop ($5-8\\%$) with load due to low armature resistance $R_a$.",
    "Four-Point Starter Advantage: NVC current is independent of field rheostat adjustments, preventing unwanted trips.",
    "Core Loss Breakdown: Hysteresis loss $P_h = k_h f B_m^{1.6} V$ + Eddy current loss $P_e = k_e f^2 B_m^2 t^2 V$.",
    "Max Efficiency Loading Criterion: Occurs when $I_a^2 R_a = P_{constant}$.",
    "Traction Drive Choice: DC Series motor selected for electric trains due to extreme starting torque ($T \\propto I_a^2$).",
    "Plugging Current Surge: $I_{plug} = \\frac{V + E_b}{R_a + R_{ext}}$ (requires high external series resistance).",
    "Exam Gold Tip: Always remember that in DC motors, back EMF $E_b$ is always slightly smaller than terminal voltage $V$, whereas in DC generators, generated EMF $E_g$ is always slightly larger than terminal voltage $V$."
])

add("Electrical Machines", 2, "Transformers", [
    "Transformer Physics & Core Topologies: Magnetic circuit fundamentals; Magnetomotive force ($MMF = N I$), Reluctance ($\\mathcal{R} = l / (\\mu A)$); Core-type (two-legged core with concentric windings) vs Shell-type (three-legged core with sandwich / interleaved windings); Step-up, step-down, and isolation transformers.",
    "Faraday's Law & Unified EMF Formula: Sinusoidal core flux linkage; Primary and secondary induced voltages: $E_1 = 4.44 f N_1 \\Phi_m$, $E_2 = 4.44 f N_2 \\Phi_m$; Volts-per-turn equality: $\\frac{E_1}{N_1} = \\frac{E_2}{N_2} = 4.44 f \\Phi_m$; Flux density limits to prevent saturation ($B_m \\approx 1.5-1.7\\text{ T}$).",
    "Equivalent Circuit Representation: Primary resistance and leakage reactance ($R_1, X_1$); Shunt magnetizing branch ($R_c, X_m$); Referred secondary parameters ($R_2' = R_2 / K^2, X_2' = X_2 / K^2$); Phasor diagrams under resistive, inductive, and capacitive loading conditions.",
    "Performance Metrics — Regulation & Efficiency: Percentage voltage regulation: $VR = \\frac{V_{2,NL} - V_{2,FL}}{V_{2,FL}} \\times 100\\% \\approx \\frac{I_2(R_{eq2}\\cos\\phi_2 \\pm X_{eq2}\\sin\\phi_2)}{V_2} \\times 100\\%$; Efficiency calculation $\\eta = \\frac{\\text{Output}}{\\text{Output} + P_i + P_{cu}}$; Condition for maximum efficiency ($P_i = P_{cu}$).",
    "Open-Circuit & Short-Circuit Testing: OC test on LV side (measures no-load current $I_0$, core iron loss $P_i$, gives $R_c, X_m$); SC test on HV side (measures short-circuit current $I_{sc}$, full-load copper loss $P_{cu(FL)}$, gives $R_{eq}, X_{eq}$); Predetermination of performance curves.",
    "Three-Phase Transformer Connections: Three single-phase units vs Three-phase three-limb core unit; Standard connection topologies: Star-Star ($Y-Y$, neutral grounding), Delta-Delta ($\\Delta-\\Delta$, third harmonic circulation), Star-Delta ($Y-\\Delta$, step-down distribution), Delta-Star ($\\Delta-Y$, generation step-up and 4-wire distribution); Phase displacement and vector groups (Dyn11, Ynd1).",
    "Scott Connection (T-Connection): Conversion of three-phase to two-phase power using two single-phase transformers (Main transformer center-tapped at $50\\%$, Teaser transformer tapped at $86.6\\%$ / $\\frac{\\sqrt{3}}{2}$ of turns); Symmetrical balanced two-phase output under balanced three-phase input.",
    "Open-Delta ($V-V$) Connection: Operation of Delta-Delta bank with one single-phase transformer removed; Available bank capacity reduces to $\\frac{1}{\\sqrt{3}} = 57.7\\%$ of original delta bank rating (operates at $86.6\\%$ of combined rating of remaining two transformers).",
    "Auto-Transformer Comparisons: Operating mechanism combining conductive and inductive power transfer; Significant copper reduction: $\\text{Copper Saved} = k \\times W_{2-wdg}$; Increased kVA throughput; Lack of galvanic isolation limitation.",
    "University Examination Strategy: Calculate transformer equivalent circuit parameters from OC and SC test data, calculate voltage regulation and efficiency at various power factors, analyze phase shifts in three-phase vector groups, and solve Scott connection power delivery problems."
], [
    "Volts Per Turn Invariant: $\\frac{E_1}{N_1} = \\frac{E_2}{N_2} = 4.44 f \\Phi_m$.",
    "Max Efficiency Loading Point: $S_{max\\,\\eta} = S_{rated} \\times \\sqrt{\\frac{P_i}{P_{cu(FL)}}}$.",
    "Zero Voltage Regulation Power Factor: Leading PF with $\\cos\\phi_2 = \\frac{X_{eq}}{\\sqrt{R_{eq}^2 + X_{eq}^2}}$.",
    "Max Voltage Regulation Power Factor: Lagging PF with $\\cos\\phi_2 = \\frac{R_{eq}}{\\sqrt{R_{eq}^2 + X_{eq}^2}}$.",
    "Star-Delta Line Voltage Ratio: $K_{line} = \\frac{V_{L2}}{V_{L1}} = \\frac{K_{ph}}{\\sqrt{3}}$ for $Y-\\Delta$.",
    "Delta-Star Line Voltage Ratio: $K_{line} = \\sqrt{3} K_{ph}$ for $\\Delta-Y$.",
    "Scott Connection Teaser Turns: Teaser winding turns $N_T = \\frac{\\sqrt{3}}{2} N_M \\approx 0.866 N_M$.",
    "Open-Delta ($V-V$) Capacity Ratio: $\\frac{kVA_{V-V}}{kVA_{\\Delta-\\Delta}} = \\frac{1}{\\sqrt{3}} \\approx 57.7\\%$.",
    "CRGO Core Lamination Benefit: Reduces hysteresis loss through grain orientation and eddy current loss via thin insulating coating.",
    "Exam Gold Tip: In Open-Delta connection, the two transformers operate at a power factor of $\\cos(30^\\circ \\pm \\theta)$, meaning they do not share load at the load's nominal power factor."
])

add("Electrical Machines", 3, "Induction Motors", [
    "Three-Phase Rotating Magnetic Field (RMF): Principle of rotating stator MMF generated by 3-phase balanced spatial windings displaced by $120^\\circ$ carrying balanced 3-phase currents displaced by $120^\\circ$ in time; Constant magnitude of resultant magnetic flux: $\\Phi_{resultant} = 1.5 \\Phi_m$; Synchronous speed: $N_s = \\frac{120 f}{P}$ rpm.",
    "Operating Principle of Induction Motor: Asynchronous operation; Relative speed between rotating stator flux and stationary rotor conductors induces rotor EMF and currents; Rotor accelerates in direction of stator field according to Lenz's law; Slip definition: $s = \\frac{N_s - N}{N_s}$; Rotor frequency: $f_r = s f$.",
    "Rotor Construction Varieties: (1) Squirrel-Cage Rotor (uninsulated copper or aluminum bars short-circuited by end rings, rugged, brushless, maintenance-free, skewed slots reducing cogging and crawling); (2) Wound Rotor / Slip-Ring Rotor (3-phase insulated winding brought out to external slip rings, allows insertion of external starting resistances).",
    "Equivalent Circuit Modeling of Induction Motor: Stator impedance ($R_1, X_1$); Shunt magnetizing branch ($R_c, X_m$); Rotor impedance referred to stator ($R_2'/s, X_2'$); Electrical representation of mechanical load: variable resistance $R_L' = R_2' \\left(\\frac{1 - s}{s}\\right)$; Power flow stages: Stator input $\\to$ Stator copper/iron loss $\\to$ Air-gap power $P_g \\to$ Rotor copper loss $s P_g \\to$ Gross mechanical power $(1-s)P_g \\to$ Friction/windage $\\to$ Shaft output.",
    "Torque-Slip and Torque-Speed Characteristics: Torque equation: $T_e = \\frac{3}{\\omega_s} \\frac{V_{th}^2 (R_2'/s)}{(R_{th} + R_2'/s)^2 + (X_{th} + X_2')^2}$; Motoring region ($0 < s < 1$), Generating region ($s < 0$), Braking / Plugging region ($s > 1$); Stable vs unstable operating regions on torque-slip curve.",
    "Maximum Breakdown Torque & Starting Torque: Slip at maximum torque: $s_{max} \\approx \\frac{R_2'}{X_2'}$; Maximum torque value: $T_{max} = \\frac{3}{2\\omega_s} \\frac{V^2}{2 X_2'}$ (independent of rotor resistance $R_2$); Effect of adding external rotor resistance in slip-ring motor: shifts peak torque toward standstill ($s = 1$) without altering $T_{max}$ magnitude.",
    "Starting Methods of Three-Phase Induction Motors: High inrush current ($5-7$ times $I_{FL}$); Starting methods: (1) Direct-On-Line (DOL, limited to $<5\\text{ kW}$); (2) Star-Delta Starter (starting phase voltage reduced to $1/\\sqrt{3}$, starting current and torque reduced to $1/3$); (3) Auto-Transformer Starter ($I_{st} = x^2 I_{sc}$, $T_{st} = x^2 T_{sc}$); (4) Rotor Resistance Starter (slip-ring motors, maintains high starting torque).",
    "Speed Control of Three-Phase Induction Motors: (1) Stator Voltage Control; (2) Variable Voltage Variable Frequency (V/f Control: constant air-gap flux up to base speed, flux weakening above base speed); (3) Pole Changing (Dahlander winding); (4) Rotor Resistance Control; (5) Slip Power Recovery Schemes (Kramer and Scherbius drives).",
    "Parasitic Phenomena — Cogging and Crawling: Cogging (magnetic locking occurring when stator slots equal rotor slots $S_s = S_r$, prevented by choosing $S_s \\ne S_r$ and skewing rotor slots); Crawling (motor runs steadily at sub-synchronous speed $N_s/7$ due to 7th space harmonic harmonic torque).",
    "University Examination Strategy: Prove that a 3-phase winding produces an RMF of constant magnitude $1.5 \\Phi_m$, derive induction motor torque-slip equation and maximum torque expression, calculate power flow distribution ($P_g : P_{cu,rotor} : P_{mech} = 1 : s : 1-s$), and compare starting methods."
], [
    "Resultant RMF Amplitude: $\\Phi_{resultant} = \\frac{3}{2} \\Phi_m = 1.5 \\Phi_m$ (constant magnitude rotating at $N_s$).",
    "Synchronous Speed Equation: $N_s = \\frac{120 f}{P}$ rpm.",
    "Slip Frequency Relation: $f_r = s \\times f$.",
    "Power Flow Ratio: $P_g : P_{cu,rotor} : P_{mech} = 1 : s : (1 - s)$.",
    "Slip at Maximum Torque: $s_{mT} = \\frac{R_2'}{\\sqrt{R_{th}^2 + (X_{th} + X_2')^2}} \\approx \\frac{R_2'}{X_2'}$.",
    "Maximum Torque Invariant: $T_{max} \\propto \\frac{V^2}{2 X_{eq}}$ (strictly independent of rotor resistance $R_2$).",
    "Star-Delta Starter Reduction: Starting current and starting torque are both reduced to exactly $\\frac{1}{3}$ of DOL values.",
    "Auto-Transformer Starting Ratio: $T_{st} = x^2 T_{sc}$ and $I_{line,st} = x^2 I_{sc}$.",
    "Crawling Harmonic Speed: Motor crawls at $\\frac{1}{7} N_s$ caused by forward-rotating 7th stator space harmonic.",
    "Exam Gold Tip: Adding resistance to the rotor circuit increases starting torque and shifts the maximum torque point closer to $s=1$, but does NOT change the magnitude of maximum breakdown torque."
])

add("Electrical Machines", 4, "Synchronous Machines", [
    "Synchronous Generator (Alternator) Principle: Synchronous speed operation: rotor driven by prime mover at $N_s = \\frac{120 f}{P}$; Stationary armature 3-phase stator winding (eliminates heavy high-voltage slip rings), rotating DC-excited field electromagnet; Advantages of stationary armature design.",
    "Rotor Construction Varieties: (1) Salient-Pole Rotor (projecting poles, large diameter, short axial length, low-to-medium speed hydro-turbines $100-500\\text{ rpm}$, non-uniform air gap, damper windings in pole faces); (2) Cylindrical / Non-Salient Rotor (smooth round rotor, small diameter, long axial length, high-speed steam turbo-generators $1500-3000\\text{ rpm}$, uniform air gap).",
    "Alternator Induced EMF & Winding Factors: Pitch factor / Chording factor: $k_p = \\cos(\\alpha / 2)$ where $\\alpha$ is chording angle (eliminates specific slot harmonics, e.g. $\\alpha = 60^\\circ$ eliminates 3rd harmonic); Distribution / Breadth factor: $k_d = \\frac{\\sin(m \\beta / 2)}{m \\sin(\\beta / 2)}$; RMS generated EMF per phase: $E_{ph} = 4.44 k_p k_d f T_{ph} \\Phi$.",
    "Armature Reaction in Synchronous Machines: Effect of load power factor on main field flux: (1) Unity PF: purely cross-magnetizing (distorts field flux); (2) Zero PF lagging: purely demagnetizing (drastically reduces terminal voltage); (3) Zero PF leading: purely magnetizing (raises terminal voltage); Intermediate power factors produce combined cross and demagnetizing/magnetizing effects.",
    "Synchronous Impedance & Voltage Regulation: Synchronous impedance $Z_s = \\sqrt{R_a^2 + X_s^2}$ where synchronous reactance $X_s = X_l + X_a$ ($X_l$ leakage reactance, $X_a$ fictitious armature reaction reactance); Percentage Voltage Regulation: $VR = \\frac{E_0 - V}{V} \\times 100\\%$; Methods of predetermining regulation: (1) Synchronous Impedance / EMF method (pessimistic); (2) Ampere-Turn / MMF method (optimistic); (3) Zero Power Factor / Potier Triangle method (most accurate, separates $X_l$ and armature reaction MMF).",
    "Two-Reaction Theory of Salient-Pole Alternators: Blondel's two-reaction theory; Decomposition of armature MMF into direct axis ($d$-axis, minimum air-gap permeance) and quadrature axis ($q$-axis, maximum air-gap reluctance); Direct axis reactance $X_d$ and Quadrature axis reactance $X_q$ ($X_d > X_q$); Phasor diagram and power-angle relation: $P = \\frac{E V}{X_d} \\sin\\delta + \\frac{V^2}{2} \\left(\\frac{1}{X_q} - \\frac{1}{X_d}\\right) \\sin(2\\delta)$ (includes reluctance power component).",
    "Parallel Operation & Synchronization of Alternators: Conditions for paralleling: identical line voltage, identical frequency, identical phase sequence, phase coincidence; Synchronizing methods: Dark lamp method, Bright lamp method, Synchroscope; Synchronizing power and synchronizing torque coefficients.",
    "Synchronous Motor Operating Principle: Non-self-starting nature (stator field rotates at $N_s$, rotor inertia prevents instantaneous lock-on); Starting methods using amortisseur / damper windings as induction motor, or auxiliary pony motor; Pull-in torque and synchronous pull-out torque.",
    "V-Curves and Inverted V-Curves: Effect of varying DC field excitation at constant mechanical load; (1) Normal excitation ($\\text{PF} = 1$); (2) Under-excitation (draws lagging reactive power, operates at lagging PF); (3) Over-excitation (supplies reactive power, operates at leading PF); V-curves plot $I_a$ vs $I_f$; Inverted V-curves plot $\\cos\\phi$ vs $I_f$; Application as Synchronous Condenser (unloaded over-excited synchronous motor for power factor correction).",
    "University Examination Strategy: Calculate winding pitch and distribution factors, determine voltage regulation using EMF and Potier methods, derive the power-angle equation for salient-pole alternators showing reluctance power, and sketch synchronous motor V-curves indicating stability limits."
], [
    "Pitch Factor Formula: $k_p = \\cos\\left(\\frac{\\alpha}{2}\\right)$.",
    "Distribution Factor Formula: $k_d = \\frac{\\sin(m \\beta / 2)}{m \\sin(\\beta / 2)}$.",
    "Alternator Induced EMF: $E_{ph} = 4.44 k_p k_d f T_{ph} \\Phi$.",
    "Synchronous Reactance Definition: $X_s = X_l + X_a$ (leakage + armature reaction reactances).",
    "Zero PF Lagging Armature Reaction: Purely demagnetizing effect on main field flux.",
    "Zero PF Leading Armature Reaction: Purely magnetizing effect, boosting internal field flux.",
    "Salient Pole Power-Angle Formula: $P = \\frac{E_0 V}{X_d} \\sin\\delta + \\frac{V^2(X_d - X_q)}{2 X_d X_q} \\sin(2\\delta)$.",
    "Reluctance Power Term: $\\frac{V^2(X_d - X_q)}{2 X_d X_q} \\sin(2\\delta)$ (operates even if field excitation $E_0 = 0$).",
    "Synchronous Condenser Operation: Over-excited synchronous motor running at no-load with leading power factor.",
    "Exam Gold Tip: In synchronous motors, increasing DC field excitation causes the power factor to become more leading; in alternators, increasing field excitation causes the power factor to become more lagging."
])

add("Electrical Machines", 5, "Fractional Horsepower Motors", [
    "Single-Phase Induction Motors Fundamentals: Inability to self-start on single-phase AC supply; Pulsating stator magnetic field; Double-Revolving Field Theory (pulsating field decomposed into two counter-rotating fields of equal magnitude $\\Phi_m/2$ rotating at $\\pm N_s$); Forward slip $s_f = s$ and backward slip $s_b = 2 - s$; Resultant starting torque is strictly zero.",
    "Split-Phase Induction Motor: Stator provided with two windings displaced by $90^\\circ$ electrical: Main winding (low resistance, high inductive reactance) and Auxiliary / Starting winding (high resistance, low inductive reactance); Phase split $\\alpha \\approx 30^\\circ$; Centrifugal switch disconnects auxiliary winding at $75-80\\%$ synchronous speed; Moderate starting torque ($1.5-2 \\times T_{FL}$).",
    "Capacitor-Start Induction Motor: High-value electrolytic capacitor connected in series with auxiliary winding; Phase angle displacement between main and auxiliary currents increases to nearly $90^\\circ$; High starting torque ($3-4.5 \\times T_{FL}$); Centrifugal switch disconnects starting winding after run-up; Applications in compressors, pumps, and refrigerators.",
    "Capacitor-Run & Permanent Split Capacitor (PSC) Motors: Paper/polypropylene continuous-duty capacitor permanently connected in series with auxiliary winding; Centrifugal switch eliminated; Smooth, quiet, vibration-free operation; High running power factor and efficiency; Ideal for ceiling fans and blowers.",
    "Shaded-Pole Induction Motor: Extremely simple construction; Salient stator poles with one portion surrounded by a low-resistance copper shading band (shading coil); Induced currents in shading ring delay flux through shaded portion; Produces weak shifting magnetic field sweeping from unshaded to shaded pole section; Very low starting torque ($50\\%$ of $T_{FL}$), low efficiency ($20-30\\%$); Small cooling fans, hair dryers.",
    "Universal Motor (AC Series Motor): Operates on either DC or single-phase AC supply; Series connected armature and field windings; Modifications for AC operation: laminated stator and rotor frames reducing eddy current heating, fewer field turns minimizing inductive reactance, compensating winding neutralizing armature reaction reactance; High speed ($3000-20000\\text{ rpm}$); Vacuum cleaners, food blenders, portable power drills.",
    "Stepper Motors: Precise discrete incremental angular motion per input electrical pulse; Step angle $\\beta = \\frac{N_s - N_r}{N_s N_r} \\times 360^\\circ$; Topologies: (1) Variable Reluctance (VR) stepper motor; (2) Permanent Magnet (PM) stepper motor; (3) Hybrid stepper motor (combines PM rotor with toothed steel poles, high torque, fine step angles e.g. $1.8^\\circ$); Microstepping techniques.",
    "Brushless DC (BLDC) Motors: Permanent magnet rotor with electronically commutated 3-phase stator winding; Hall effect sensors or sensorless back-EMF sensing for rotor position tracking; Inverter bridge switching replaces mechanical commutator and carbon brushes; High power density, high reliability, zero sparking; Drones, electric vehicles, computer cooling fans.",
    "Switched Reluctance Motors (SRM): Doubly salient construction (salient poles on both stator and rotor); Concentrated stator phase windings, rotor has no windings or permanent magnets; Operates on principle of minimum reluctance alignment; Fault-tolerant, high-temperature capability, rugged.",
    "University Examination Strategy: Explain single-phase induction motor operation using double revolving field theory with complete torque-slip curves, compare capacitor-start vs capacitor-run motors, derive stepper motor step angle relations, and explain BLDC electronic commutation."
], [
    "Double Revolving Field Theorem: Pulsating field $\\Phi(t) = \\Phi_m \\cos(\\omega t)$ splits into two fields of magnitude $\\frac{\\Phi_m}{2}$ rotating in opposite directions.",
    "Backward Slip Formula: $s_b = 2 - s$ (where $s$ is forward slip).",
    "Capacitor Start Motor Phase Angle: Capacitor shifts auxiliary current phase leading main current by nearly $90^\\circ$.",
    "Shaded Pole Sweeping Flux: Flux shifts direction strictly from the unshaded segment toward the shaded segment.",
    "Universal Motor AC Speed: Runs faster on DC than AC for identical applied RMS voltage due to AC reactance drops.",
    "Stepper Motor Step Angle: $\\theta_s = \\frac{360^\\circ}{m N_r}$ where $m$ is phases and $N_r$ is rotor teeth.",
    "Hybrid Stepper Resolution: Standard hybrid stepper motor possesses 50 rotor teeth yielding $\\theta_s = 1.8^\\circ$ (200 steps/rev).",
    "BLDC Electronic Commutation: Employs 3 Hall sensors spaced at $120^\\circ$ to switch 6-transistor inverter bridge every $60^\\circ$ electrical.",
    "Centrifugal Switch Disconnect Speed: Trips open at approximately $75\\%$ to $80\\%$ of rated synchronous speed.",
    "Exam Gold Tip: Shaded-pole motors cannot have their direction of rotation reversed electrically because rotation direction is physically fixed from unshaded to shaded pole."
])

# Save updated batch 3
with open('scripts/sem3_btech_batch3_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 3 part 2 complete: total units now: {len(data)}")
