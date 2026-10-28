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
# 11. ELECTRICAL MACHINES — I (B.Tech)
# =========================================================================
add("Electrical Machines — I", 1, "DC Generators", [
    "Operating Principle and EMF Derivation: Faraday's law of electromagnetic induction; Fleming's right-hand rule; Derivation of generated EMF: $E_g = \\frac{\\Phi Z N P}{60 A}$ (where $\\Phi$ is flux per pole, $Z$ total conductors, $N$ speed in rpm, $P$ poles, $A$ parallel paths: $A=2$ for wave, $A=P$ for lap winding).",
    "Armature Winding Architectures: Simplex Lap winding ($A = P$, high current, low voltage applications; equalizer rings for circulating current suppression) vs Simplex Wave winding ($A = 2$, high voltage, low current applications; dummy coils for mechanical dynamic balance).",
    "Armature Reaction: Distortion and weakening of main magnetic flux due to MMF produced by armature conductors; Cross-magnetizing effect (shifts Magnetic Neutral Axis MNA in direction of rotation) and Demagnetizing effect; Demagnetizing AT per pole: $AT_d = \\frac{Z I_a}{2 P} \\left(\\frac{2\\theta_m}{180^\\circ}\\right)$; Cross-magnetizing AT per pole: $AT_c = \\frac{Z I_a}{2 P} \\left(1 - \\frac{2\\theta_m}{180^\\circ}\\right)$.",
    "Commutation Process & Sparking Mitigation: Reversal of current in coil undergoing commutation during time $T_c$; Reactance voltage $V_r = L \\frac{di}{dt}$; Delayed / Under-commutation causing sparking at trailing brush edge; Mitigation techniques: (1) Resistance commutation (high-resistance carbon brushes); (2) Voltage commutation using Interpoles / Commutating poles in series with armature.",
    "Compensating Windings: Conductors embedded in main pole shoes carrying armature current in opposing direction; Neutralizes armature cross-magnetizing MMF directly under pole faces; Prevents flashover between adjacent commutator segments under severe load surges; Turns per pole $Z_{cw} = \\frac{Z}{2 P} \\left(\\frac{\\text{Pole arc}}{\\text{Pole pitch}}\\right)$.",
    "Types of DC Generators: Separately excited generators; Self-excited generators (Shunt, Series, Cumulative Compound, Differential Compound); Voltage build-up criteria in self-excited shunt generator: residual magnetism, critical field resistance ($R_c$), and critical speed ($N_c$).",
    "DC Generator Characteristics: Open-Circuit Characteristic (OCC / Magnetization curve: $E_0$ vs $I_f$ at constant speed); Internal characteristic ($E$ vs $I_a$); External characteristic ($V$ vs $I_L$); Voltage regulation: $VR = \\frac{V_{NL} - V_{FL}}{V_{FL}} \\times 100\\%$.",
    "Compound Generator Behavior: Level-compounded (flat terminal voltage from no-load to full-load), Over-compounded (terminal voltage rises with load to compensate line drop), and Under-compounded; Differential compound generator (drooping terminal voltage, used in arc welding).",
    "Parallel Operation of DC Generators: Conditions for parallel operation of shunt generators; Stable load sharing governed by drooping external characteristics; Parallel operation of compound generators: necessity of Equalizer Bar connecting series field windings to prevent hunting and motorization.",
    "University Examination Strategy: Derive the generated EMF equation with parallel paths distinction, calculate demagnetizing and cross-magnetizing ampere-turns per pole, analyze voltage build-up failure modes in shunt generators, and solve load-sharing problems for parallel generators."
], [
    "DC Generator EMF Formula: $E_g = \\frac{\\Phi Z N P}{60 A}$ ($A=P$ lap, $A=2$ wave).",
    "Demagnetizing AT per Pole: $AT_d = \\frac{Z I_a}{2 P} \\left(\\frac{2\\theta_m}{180^\\circ}\\right)$.",
    "Cross-Magnetizing AT per Pole: $AT_c = \\frac{Z I_a}{2 P} \\left(1 - \\frac{2\\theta_m}{180^\\circ}\\right)$.",
    "Brush Shift Direction: Shift brushes forward in direction of rotation in generators to track shifted MNA.",
    "Reactance Voltage Formula: $V_r = L \\frac{2 I_c}{T_c}$ (for linear commutation).",
    "Compensating Windings Formula: $AT_{cw} = AT_a \\times \\left(\\frac{\\text{Pole Arc}}{\\text{Pole Pitch}}\\right)$.",
    "Voltage Build-up Condition: Shunt field resistance must be strictly LESS than critical field resistance ($R_f < R_c$).",
    "Equalizer Ring Purpose: Equalizes unequal induced EMFs in parallel paths of lap windings to prevent circulating currents.",
    "Equalizer Bar in Compound Generators: Low-resistance bus connecting series field inputs to enforce proportional load division.",
    "Exam Gold Tip: If a shunt generator fails to build up voltage, check for absence of residual magnetism, reversed field connections, or field resistance exceeding $R_c$."
])

add("Electrical Machines — I", 2, "DC Motors", [
    "Motor Operating Principle & Back EMF: Lorentz force equation ($\mathbf{F} = I (\mathbf{L} \times \mathbf{B})$); Fleming's left-hand rule; Back EMF / Counter EMF $E_b = \frac{\Phi Z N P}{60 A}$; Voltage balance equation: $V = E_b + I_a R_a$; Back EMF acts as self-regulating governor controlling armature current $I_a = \frac{V - E_b}{R_a}$.",
    "Electromagnetic Torque Derivation: Power balance: $V I_a = E_b I_a + I_a^2 R_a$; Internal mechanical power developed $P_{mech} = E_b I_a = T_e \omega_m$; Electromagnetic torque equation: $T_e = \frac{1}{2\pi} \left(\frac{P}{A}\right) \Phi Z I_a = 0.159 \Phi Z I_a \left(\frac{P}{A}\right)$ N-m; Shaft torque $T_{sh} = \frac{P_{out}}{\omega_m} = T_e - T_{lost}$.",
    "DC Motor Characteristics: (1) Torque vs Armature Current ($T_a$ vs $I_a$); (2) Speed vs Armature Current ($N$ vs $I_a$); (3) Speed vs Torque ($N$ vs $T_a$); Shunt motor: essentially constant speed ($\Delta N \approx 5-8\%$ drop from no load to full load); Series motor: high starting torque ($T_a \propto I_a^2$), dangerous dangerously high speed at no load ($N \propto 1/\Phi \to \infty$); Cumulative compound motor.",
    "Starting of DC Motors: High inrush starting current ($I_{start} = V / R_a$ since $E_b = 0$ at standstill); Necessity of external starting resistance; Three-Point Starter (schematic, No-Volt Coil NVC connected in series with shunt field, Over-Load Release OLR); Four-Point Starter (NVC connected directly across supply through protective resistor, overcoming field weakening tripping).",
    "Speed Control Methods of DC Motors: Fundamental speed equation: $N = \frac{V - I_a R_a}{k \Phi}$; (1) Armature Resistance Control (rheostatic control in armature circuit, below rated speed, low energy efficiency); (2) Field Flux Control (field rheostat weakening flux $\Phi$, above rated speed, constant power drive); (3) Armature Voltage Control (Ward-Leonard System: wide range, smooth bidirectional control from zero to full speed in both directions, high capital cost).",
    "Solid-State DC Motor Drives: Single-phase and three-phase thyristor phase-controlled converters for variable armature voltage; DC-DC Chopper drives (buck converters) for four-quadrant regenerative motoring and braking.",
    "Electric Braking of DC Motors: (1) Regenerative Braking ($E_b > V$, motor operates as generator feeding power back into AC/DC mains, energy conservation); (2) Dynamic / Rheostatic Braking (armature disconnected from mains and connected across external braking resistor $R_b$, kinetic energy dissipated as heat); (3) Plugging / Reverse Current Braking (armature terminal supply reversed, $I_a = \frac{V + E_b}{R_a + R_{ext}}$, rapid stop, high electrical stress).",
    "Losses and Efficiency in DC Machines: Copper losses ($I_a^2 R_a, I_f^2 R_f, I_{se}^2 R_{se}$, brush contact loss); Iron / Core losses (Hysteresis loss $P_h = \eta B_{max}^{1.6} f V$ and Eddy current loss $P_e = K_e B_{max}^2 f^2 t^2 V$ in rotating armature core); Mechanical losses (friction and windage); Stray load losses ($1\%$ of output); Condition for maximum efficiency: Constant losses = Variable losses ($W_c = I_a^2 R_a$).",
    "Testing of DC Machines — Direct & Indirect Methods: Brake test (direct loading, limited to small fractional HP motors); Swinburne's Test (indirect method, no-load test on shunt motor, calculates constant losses, predetermines efficiency at any load as generator or motor, cannot detect temperature rise under load).",
    "Regenerative Testing — Hopkinson's Test: Back-to-back regenerative test on two identical mechanically coupled and electrically interconnected shunt machines; One operates as motor driving second as generator feeding back power; Mains supply provides only lost power ($P_{mains} = \text{Total losses}$); Full-load temperature rise determination without enormous power dissipation; Field's test for series motors."
], [
    "DC Motor Torque Expression: $T_e = \frac{P \Phi Z I_a}{2\pi A}$ N-m.",
    "Motor Speed Formulation: $N = \frac{V - I_a R_a}{k \\Phi}$ rpm.",
    "Series Motor Starting Danger: At no load, $I_a \\to 0 \\implies \\Phi \\to 0$, causing speed $N \\to \\infty$ (runaway dangerous overspeed).",
    "Max Efficiency Condition: $I_a^2 R_a = W_{constant}$ (variable copper loss equals constant rotational and iron loss).",
    "Armature Resistance Control Profile: Constant torque drive, operating exclusively below base speed with poor efficiency.",
    "Field Weakening Profile: Constant power drive, operating exclusively above base speed.",
    "Plugging Armature Voltage: At moment of plugging, total effective driving voltage is $V + E_b \\approx 2 V$.",
    "Swinburne's Constant Losses: $W_c = V I_0 - I_{a0}^2 R_a$, where $I_0$ is no-load supply current.",
    "Hopkinson's Test Power Drawn: Power from mains equals strictly the total combined electrical and mechanical losses of both machines.",
    "Exam Gold Tip: Never start a DC series motor on no-load or with belt drives that could break, because runaway speed can mechanically destroy the armature."
])

add("Electrical Machines — I", 3, "Single Phase Transformers", [
    "Working Principle & Faraday's Law: Static electromagnetic device transferring AC electrical energy between circuits via mutual flux; Core type vs Shell type constructions; High-permeability Cold Rolled Grain Oriented (CRGO) silicon steel laminations ($0.27-0.35\\text{ mm}$ thickness) minimizing eddy currents.",
    "EMF Equation of a Transformer: Sinusoidal core flux $\\Phi(t) = \\Phi_m \\sin(\\omega t)$; Primary induced EMF $e_1 = -N_1 \\frac{d\\Phi}{dt} = -N_1 \\omega \\Phi_m \\cos(\\omega t)$; RMS induced EMF: $E_1 = 4.44 f N_1 \\Phi_m$ and $E_2 = 4.44 f N_2 \\Phi_m$; Transformation ratio $K = \\frac{E_2}{E_1} = \\frac{N_2}{N_1} = \\frac{I_1}{I_2}$.",
    "Ideal vs Practical Transformer: Ideal transformer (zero winding resistance, infinite core permeability $\\mu_r \\to \\infty$, zero leakage flux, zero iron loss); Practical transformer considerations (finite winding resistances $R_1, R_2$, leakage fluxes creating leakage reactances $X_1, X_2$, core hysteresis and eddy current losses).",
    "Transformer on No-Load & Magnetizing Inrush: No-load primary current $I_0 = \\sqrt{I_c^2 + I_m^2}$ ($3-5\\%$ of rated $I_1$); Core-loss component $I_c = I_0 \\cos\\phi_0$ (in phase with $V_1$), Magnetizing component $I_m = I_0 \\sin\\phi_0$ (in quadrature with $V_1$); Non-linear $B-H$ curve producing peaked magnetizing current with pronounced 3rd harmonic; Magnetizing inrush current phenomenon during sudden energization at voltage zero-crossing.",
    "Transformer on Load & Phasor Diagrams: Armature mmf balance: $N_1 I_1' = N_2 I_2$ where $I_1'$ is load component of primary current; Total primary current $\\mathbf{I}_1 = \\mathbf{I}_0 + \\mathbf{I}_1'$; Complete phasor diagrams for Unity, Lagging (inductive), and Leading (capacitive) power factor loads.",
    "Equivalent Circuit Modeling: Exact equivalent circuit containing primary parameters ($R_1, X_1$), core shunt parameters ($R_c, X_m$), and secondary parameters ($R_2, X_2$); Referring secondary parameters to primary: $R_2' = R_2 / K^2, X_2' = X_2 / K^2, V_2' = V_2 / K, I_2' = K I_2$; Approximate equivalent circuit shifting shunt branch to input terminals.",
    "Voltage Regulation of Transformer: Percentage voltage change from no-load to full-load: $VR = \\frac{E_2 - V_2}{E_2} \\times 100\\%$; Approximate regulation formula referred to secondary: $VR \\approx \\frac{I_2 (R_{eq2} \\cos\\phi_2 \\pm X_{eq2} \\sin\\phi_2)}{E_2} \\times 100\\%$ ($+$ for lagging, $-$ for leading); Zero voltage regulation condition: $\\tan\\phi_2 = -R_{eq2} / X_{eq2}$ (leading PF); Maximum voltage regulation condition: $\\tan\\phi_2 = X_{eq2} / R_{eq2}$ (lagging PF).",
    "Efficiency and Maximum Efficiency Condition: Efficiency $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_i + I_2^2 R_{eq2}}$; Core iron loss $P_i$ (constant) vs copper loss $P_{cu}$ (variable with load squared); Condition for maximum efficiency: $P_i = I_2^2 R_{eq2} = P_{cu}$; Fraction of full load for maximum efficiency: $x = \\sqrt{\\frac{P_i}{P_{cu(FL)}}}$.",
    "All-Day (Energy) Efficiency: Commercial distribution transformers energized 24 hours daily with fluctuating load cycles; All-Day Efficiency $\\eta_{all-day} = \\frac{\\text{Total Energy Output in } kWh \\text{ over 24 hours}}{\\text{Total Energy Input in } kWh \\text{ over 24 hours}}$; Design optimization: core loss minimized at expense of copper loss ($x \\approx 50-70\\%$ full load).",
    "University Examination Strategy: Derive the transformer EMF equation, construct complete phasor diagrams for lagging/leading loads, calculate primary and secondary equivalent circuit impedances, determine voltage regulation at specified power factors, and solve all-day energy efficiency problems."
], [
    "Transformer EMF Formula: $E = 4.44 f N \\Phi_m = 4.44 f N B_m A_c$.",
    "Transformation Ratio: $K = \\frac{E_2}{E_1} = \\frac{N_2}{N_1} = \\frac{I_1}{I_2}$.",
    "No-Load Current Components: $I_c = I_0 \\cos\\phi_0$ and $I_m = I_0 \\sin\\phi_0$.",
    "Secondary Impedance Referred to Primary: $R_2' = R_2 / K^2$ and $X_2' = X_2 / K^2$.",
    "Voltage Regulation Formula: $VR \\approx \\frac{I_2(R_{eq2}\\cos\\phi_2 \\pm X_{eq2}\\sin\\phi_2)}{V_2} \\times 100\\%$.",
    "Condition for Zero Voltage Regulation: Occurs at leading power factor with $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
    "Condition for Maximum Voltage Regulation: Occurs at lagging power factor with $\\tan\\phi_2 = \\frac{X_{eq}}{R_{eq}}$.",
    "Max Efficiency Loading Fraction: $x = \\sqrt{\\frac{P_{iron}}{P_{cu,FL}}}$.",
    "All-Day Efficiency Definition: $\\eta_{energy} = \\frac{\\text{Output in kWh (24h)}}{\\text{Input in kWh (24h)}} \\times 100\\%$.",
    "Exam Gold Tip: For voltage regulation, use a positive sign ($+$) for lagging power factor loads and a negative sign ($-$) for leading power factor loads."
])

add("Electrical Machines — I", 4, "Auto Transformers", [
    "Auto-Transformer Construction & Theory: Single continuous winding tapped at intermediate points, shared between primary and secondary circuits; Magnetic core; Conductive connection plus magnetic coupling between input and output.",
    "Step-Down and Step-Up Configurations: Step-down: full winding $N_1$ acts as primary, tapped section $N_2$ acts as secondary; Step-up: tapped section acts as primary, full winding acts as secondary; Turns ratio $k = V_2 / V_1 = N_2 / N_1$.",
    "Power Transfer Mechanism — Conductive vs Inductive: Total apparent power transferred $S_{total} = V_1 I_1 = V_2 I_2$; Inductively transferred power (transformed via core magnetic flux): $S_{ind} = V_1 I_1 (1 - k)$; Conductively transferred power (conducted directly via copper winding): $S_{cond} = V_1 I_1 k$; High efficiency when $k \\to 1$.",
    "Copper Saving in Auto-Transformers: Weight of copper is proportional to turns $\\times$ current ($W_{cu} \\propto N I$); Weight ratio: $\\frac{W_{auto}}{W_{2-winding}} = 1 - k$; Copper saved $= k \\times W_{2-winding}$; Maximum copper economy achieved when transformation ratio $k$ is close to unity (e.g. $k = 0.8-0.9$).",
    "Equivalent Circuit and Impedance Scaling: Internal leakage reactance and winding resistance of auto-transformer; Short-circuit impedance of auto-transformer is $(1 - k)$ times that of equivalent two-winding transformer; Higher short-circuit fault currents.",
    "Advantages and Operational Merits: Substantially higher efficiency (lower core and copper losses for identical kVA rating), superior voltage regulation (smaller internal percentage impedance drop), smaller physical footprint and weight, lower manufacturing capital cost.",
    "Disadvantages and Safety Hazards: Loss of electrical isolation between high-voltage (HV) and low-voltage (LV) systems; Direct hazard: an open circuit in common winding section subjects LV load terminals to full HV primary supply voltage; Higher fault current levels requiring high-breaking-capacity switchgear.",
    "Conversion Between Two-Winding and Auto-Transformer: Reconnecting standard two-winding transformer as an auto-transformer (Additive polarity vs Subtractive polarity); Significant increase in kVA rating: $kVA_{auto} = kVA_{2-wdg} \\times \\frac{1}{1 - k}$ (for additive step-up).",
    "Applications of Auto-Transformers: Variable AC voltage supply (Variac / Dimmerstat for laboratory voltage control); Induction motor starters (auto-transformer starting reducing starting current by factor $x^2$); Interconnecting transmission grids at similar voltage tiers (e.g. 400 kV to 220 kV); Booster transformers in electric railway traction.",
    "University Examination Strategy: Derive the copper saving ratio $1 - k$ step-by-step, calculate inductive and conductive power components for given ratings, and determine the enhanced kVA capacity and efficiency when reconnecting a two-winding transformer as an auto-transformer."
], [
    "Auto-Transformer Copper Saving: $\\text{Copper Saved} = k \\times W_{2-winding}$.",
    "Weight of Copper Ratio: $\\frac{W_{auto}}{W_{2-winding}} = 1 - k$, where $k = \\frac{N_2}{N_1} < 1$.",
    "Conductively Transferred Power: $P_{cond} = k \\times P_{total}$.",
    "Inductively Transformed Power: $P_{ind} = (1 - k) \\times P_{total}$.",
    "Enhanced kVA Rating (Additive): $kVA_{auto} = \\frac{V_1 + V_2}{V_1} \\times kVA_{2-wdg}$.",
    "Internal Impedance Reduction: $Z_{eq(auto)} = (1 - k)^2 Z_{eq(2-wdg)}$.",
    "Auto-Transformer Regulation: Substantially smaller percentage voltage drop compared to equivalent 2-winding unit.",
    "Variac Operating Principle: Toroidal core with continuously adjustable carbon brush sliding along uninsulated copper turns.",
    "Safety Isolation Warning: Auto-transformers lack electrical galvanic isolation; neutral grounding must be strictly verified.",
    "Exam Gold Tip: The closer the voltage ratio $k$ is to 1, the greater the copper savings and the higher the proportion of power transferred conductively."
])

add("Electrical Machines — I", 5, "Testing of Transformers", [
    "Open-Circuit (OC) Test / No-Load Test: High-Voltage (HV) winding left open-circuited; Low-Voltage (LV) winding supplied at rated voltage $V_1$ and rated frequency; Instruments on LV side: Voltmeter ($V_1$), Ammeter ($I_0$), Wattmeter ($W_0$, Low Power Factor LPF wattmeter); Wattmeter reading measures core iron loss $P_i = W_0$ (copper loss negligibly small).",
    "OC Test Parameter Calculations: No-load power factor $\\cos\\phi_0 = \\frac{W_0}{V_1 I_0}$; Core loss component $I_c = I_0 \\cos\\phi_0$; Magnetizing component $I_m = I_0 \\sin\\phi_0 = \\sqrt{I_0^2 - I_c^2}$; Shunt core resistance $R_c = \\frac{V_1}{I_c}$; Shunt magnetizing reactance $X_m = \\frac{V_1}{I_m}$.",
    "Short-Circuit (SC) Test / Impedance Test: Low-Voltage (LV) winding short-circuited with thick copper strip; High-Voltage (HV) winding supplied with reduced variable voltage ($5-10\\%$ of rated $V_{HV}$) to circulate rated full-load current $I_{sc} = I_{FL}$; Instruments on HV side: Voltmeter ($V_{sc}$), Ammeter ($I_{sc}$), Wattmeter ($W_{sc}$, Normal/Unity PF wattmeter); Wattmeter reading measures full-load copper loss $P_{cu(FL)} = W_{sc}$ (iron loss negligibly small at low flux density).",
    "SC Test Parameter Calculations: Equivalent series resistance referred to HV: $R_{eq} = \\frac{W_{sc}}{I_{sc}^2}$; Equivalent series impedance $Z_{eq} = \\frac{V_{sc}}{I_{sc}}$; Equivalent series leakage reactance $X_{eq} = \\sqrt{Z_{eq}^2 - R_{eq}^2}$; Short-circuit power factor $\\cos\\phi_{sc} = \\frac{R_{eq}}{Z_{eq}}$.",
    "Pre-determination of Efficiency and Regulation: Combining OC and SC test results to predetermine efficiency at any fraction of full load $x$ and any power factor $\\cos\\phi$: $\\eta = \\frac{x S_{rated} \\cos\\phi}{x S_{rated} \\cos\\phi + W_0 + x^2 W_{sc}}$; Predetermining percentage voltage regulation without ever loading the machine physically.",
    "Sumpner's Test (Back-to-Back Test): Regenerative thermal testing of two identical transformers; Primaries connected in parallel across rated voltage supply (draws combined core loss $W_1 = 2 P_i$); Secondaries connected in phase opposition (series opposing, zero net circulating voltage) and excited via auxiliary booster transformer (draws combined full-load copper loss $W_2 = 2 P_{cu}$); Full-load temperature rise determination with minimal energy consumption.",
    "Polarity Test on Transformers: Additive vs Subtractive polarity; Standard polarity markings ($H_1, H_2$ for HV; $X_1, X_2$ for LV); Voltmeter method: connect $H_1$ to $X_1$, measure $V_{32}$ between $H_2$ and $X_2$; If $V_{32} = V_{HV} - V_{LV} \\implies$ Subtractive polarity (standard Indian/IEEE convention); If $V_{32} = V_{HV} + V_{LV} \\implies$ Additive polarity.",
    "Parallel Operation of Single-Phase Transformers: Conditions for successful parallel operation: (1) Mandatory: identical voltage ratings and transformation ratios, identical polarities (prevent massive circulating currents); (2) Desirable: identical per-unit impedances (for proportional load sharing: $S_A = S_{total} \\frac{Z_B}{Z_A + Z_B}$), identical $X/R$ ratios (prevents phase angle differences between currents).",
    "Circulating Currents in Parallel Transformers: Circulating current caused by unequal voltage ratios: $I_c = \\frac{E_A - E_B}{Z_A + Z_B}$; Circulates even at zero external load, causing unnecessary heating and overloading.",
    "University Examination Strategy: Calculate shunt branch parameters ($R_c, X_m$) and series branch parameters ($R_{eq}, X_{eq}$) from raw OC/SC test meter readings, calculate efficiency and regulation at 0.8 PF lagging, draw Sumpner's test circuit schematic, and solve parallel load-sharing problems."
], [
    "OC Test Core Resistance: $R_c = \\frac{V_1^2}{W_0}$ (parameters on LV side).",
    "OC Test Magnetizing Reactance: $X_m = \\frac{V_1}{I_m} = \\frac{V_1}{\\sqrt{I_0^2 - (W_0/V_1)^2}}$.",
    "SC Test Series Resistance: $R_{eq} = \\frac{W_{sc}}{I_{sc}^2}$ (parameters on HV side).",
    "SC Test Series Reactance: $X_{eq} = \\sqrt{\\left(\\frac{V_{sc}}{I_{sc}}\\right)^2 - R_{eq}^2}$.",
    "Sumpner's Auxiliary Wattmeter Reading: $W_2 = 2 P_{cu(FL)}$ (total copper loss of both transformers).",
    "Sumpner's Main Wattmeter Reading: $W_1 = 2 P_i$ (total core iron loss of both transformers).",
    "Subtractive Polarity Test: $V = V_{HV} - V_{LV}$ (standard preferred convention).",
    "Parallel Load Sharing Formula: $S_A = S_{load} \\times \\frac{Z_B}{Z_A + Z_B}$.",
    "No-Load Circulating Current: $I_{circ} = \\frac{E_A - E_B}{Z_A + Z_B}$.",
    "Exam Gold Tip: Low-voltage side is chosen for OC test because rated LV voltage is safe and convenient; high-voltage side is chosen for SC test because rated HV current is smaller and easily measurable."
])

# Save batch 3 initial
with open('scripts/sem3_btech_batch3_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 3 initial complete: {len(data)} units.")
