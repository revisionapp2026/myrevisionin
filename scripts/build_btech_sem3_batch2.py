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
# 6. ELECTRONIC DEVICES & CIRCUITS (B.Tech)
# =========================================================================
add("Electronic Devices & Circuits", 1, "Semiconductor Physics", [
    "Energy Band Theory in Solids: Valence band, Conduction band, and Forbidden energy gap ($E_g$); Insulators ($E_g > 5\\text{ eV}$), Semiconductors ($E_g \\approx 1.1\\text{ eV}$ for Si, $0.67\\text{ eV}$ for Ge), and Conductors ($E_g = 0\\text{ eV}$, overlapping bands); Direct vs Indirect bandgap semiconductors.",
    "Intrinsic Semiconductors: Pure tetravalent lattice; Thermal generation of electron-hole pairs; Intrinsic carrier concentration $n_i = \\sqrt{N_c N_v} e^{-E_g / (2 k_B T)}$; Law of Mass Action: $n \\cdot p = n_i^2$; Intrinsic Fermi level $E_{Fi}$ located near middle of bandgap.",
    "Extrinsic Semiconductors: Doping with pentavalent donors (P, As, Sb $\\implies$ n-type, $n \\approx N_D$) and trivalent acceptors (B, Al, Ga $\\implies$ p-type, $p \\approx N_A$); Temperature dependence of carrier concentration (freeze-out, extrinsic saturation, and intrinsic breakdown regimes).",
    "Fermi-Dirac Distribution & Fermi Level: Probability of electron occupancy $f(E) = \\frac{1}{1 + e^{(E - E_F) / (k_B T)}}$; Movement of Fermi level toward conduction band in n-type ($E_F - E_{Fi} = k_B T \\ln(N_D / n_i)$) and toward valence band in p-type ($E_{Fi} - E_F = k_B T \\ln(N_A / n_i)$).",
    "Carrier Transport Phenomena: (1) Drift current governed by electric field $\\mathcal{E}$: $J_{drift} = q (n \\mu_n + p \\mu_p) \\mathcal{E}$; Velocity saturation at high fields; (2) Diffusion current driven by carrier concentration gradients: $J_{diff} = q D_n \\frac{dn}{dx} - q D_p \\frac{dp}{dx}$.",
    "Einstein Relation: Fundamental thermodynamic linkage between carrier diffusivity and mobility: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = \\frac{k_B T}{q} = V_t$ (thermal voltage $V_t \\approx 25.9\\text{ mV}$ at $300\\text{ K}$).",
    "Continuity Equation & Carrier Lifetime: Conservation of charge carriers: $\\frac{\\partial p}{\\partial t} = -\\frac{1}{q} \\nabla \\cdot J_p + (G_p - R_p)$; Excess carrier lifetime $\\tau_p$; Minority carrier diffusion length $L_p = \\sqrt{D_p \\tau_p}$.",
    "Hall Effect in Semiconductors: Magnetic deflection of moving charge carriers in transverse magnetic field $B_z$; Hall voltage $V_H = \\frac{I B}{q n t} = \\frac{R_H I B}{t}$; Hall coefficient $R_H = -\\frac{1}{q n}$ (n-type) or $+\\frac{1}{q p}$ (p-type); Determination of carrier type, density, and mobility $\\mu_H = |R_H| \\sigma$.",
    "Degenerate Semiconductors: Very high doping levels ($N_D > 10^{19}\\text{ cm}^{-3}$) causing Fermi level to penetrate into conduction or valence band; Incomplete ionization and bandgap narrowing effects.",
    "University Examination Strategy: Derive the intrinsic carrier concentration formula, calculate Hall voltage and carrier mobility from experimental hall-probe data, and state the continuity equation under steady-state injection conditions."
], [
    "Law of Mass Action: $n \\cdot p = n_i^2$ (independent of doping level under thermal equilibrium).",
    "Einstein Relation: $\\frac{D}{\\mu} = \\frac{k_B T}{q} = V_t$ (where $V_t = 25.86\\text{ mV}$ at room temperature).",
    "Total Current Density: $J_{total} = q(n \\mu_n + p \\mu_p) \\mathcal{E} + q D_n \\frac{dn}{dx} - q D_p \\frac{dp}{dx}$.",
    "Hall Coefficient Formula: $R_H = \\frac{1}{q p}$ (p-type) or $-\\frac{1}{q n}$ (n-type).",
    "Hall Voltage: $V_H = \\frac{R_H I B}{w}$, where $w$ is semiconductor sample thickness along magnetic field.",
    "Diffusion Length: $L_n = \\sqrt{D_n \\tau_n}$ and $L_p = \\sqrt{D_p \\tau_p}$.",
    "Intrinsic Fermi Level: $E_{Fi} = \\frac{E_c + E_v}{2} + \\frac{3}{4} k_B T \\ln\\left(\\frac{m_p^*}{m_n^*}\\right)$.",
    "Direct Bandgap Semiconductor: Minimum of conduction band aligns with maximum of valence band in $k$-space (e.g. GaAs, ideal for LEDs).",
    "Indirect Bandgap Semiconductor: Band extrema misaligned in $k$-space; recombination requires phonon emission (e.g. Si, Ge).",
    "Exam Gold Tip: Hall effect sign indicates semiconductor polarity: positive Hall coefficient indicates p-type, negative indicates n-type."
])

add("Electronic Devices & Circuits", 2, "Diodes & Applications", [
    "p-n Junction in Equilibrium: Metallurgical junction; Space Charge Region (depletion width $W$); Built-in contact potential: $V_{bi} = V_t \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)$; Depletion width: $W = \\sqrt{\\frac{2 \\epsilon_s}{q} \\left(\\frac{1}{N_A} + \\frac{1}{N_D}\\right) V_{bi}}$.",
    "p-n Junction under Bias: Forward bias (decreases barrier height to $V_{bi} - V_a$, exponential minority carrier injection); Reverse bias (increases barrier to $V_{bi} + V_R$, widens depletion layer); Shockley Diode Equation: $I = I_s \\left( e^{V / (\\eta V_t)} - 1 \\right)$, where $\\eta = 1$ for Ge, $\\eta = 2$ for Si at low currents.",
    "Diode Capacitance: (1) Junction / Transition Capacitance $C_j = \\frac{\\epsilon A}{W} \\propto (V_{bi} + V_R)^{-1/2}$ (dominant in reverse bias); (2) Diffusion Capacitance $C_d = \\frac{\\tau_T I_D}{\\eta V_t}$ (proportional to forward current, dominant in forward bias).",
    "Reverse Breakdown Mechanisms: (1) Zener Breakdown (tunneling of electrons across ultra-thin depletion layer at high doping, $V_Z < 5.6\\text{ V}$, negative temperature coefficient); (2) Avalanche Breakdown (impact ionization in lightly doped junctions at high reverse field, $V_{BR} > 6\\text{ V}$, positive temperature coefficient).",
    "Rectifier Circuits: Half-Wave Rectifier ($V_{dc} = V_m / \\pi$, ripple factor $\\gamma = 1.21$, efficiency $\\eta = 40.6\\%$); Full-Wave Center-Tapped and Bridge Rectifiers ($V_{dc} = 2 V_m / \\pi$, ripple factor $\\gamma = 0.482$, efficiency $\\eta = 81.2\\%$, PIV $= 2 V_m$ for center-tapped, PIV $= V_m$ for bridge).",
    "Smoothing Filters for Rectifiers: Shunt Capacitor Filter (ripple factor $\\gamma = \\frac{1}{4\\sqrt{3} f C R_L}$), Series Inductor Filter ($\\gamma = \\frac{R_L}{3\\sqrt{2} \\omega L}$), L-section (Choke input) and $\\pi$-section (CLC) filters.",
    "Zener Diode Voltage Regulator: Operates in reverse breakdown; Load regulation and line regulation; Design equations: $R_s = \\frac{V_{in(min)} - V_Z}{I_{L(max)} + I_{Z(min)}}$; Minimum and maximum allowable load resistance.",
    "Diode Waveform Shaping Circuits: Clippers (positive, negative, biased clippers limiting signal excursions without distorting remaining wave); Clampers (dc restorers adding dc level to AC signal using capacitor and diode, $\\Delta V = V_m$).",
    "Special Purpose Diodes: Varactor diode (voltage-variable capacitor); Light Emitting Diode (LED, forward-biased electroluminescence in direct-gap GaAsP); Photodiode (reverse-biased optical photon detection); Solar cell (photovoltaic mode); Tunnel Diode (degenerate doping, negative differential resistance).",
    "University Examination Strategy: Derive rectifier ripple factor and efficiency expressions, design Zener shunt regulator resistor values under specified line/load variations, and trace clipper/clamper output waveforms step-by-step."
], [
    "Built-in Potential Formula: $V_{bi} = \\frac{k_B T}{q} \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)$.",
    "Shockley Diode Current Equation: $I = I_0 \\left( e^{\\frac{V}{\\eta V_t}} - 1 \\right)$.",
    "Full-Wave Rectifier Ripple Factor: $\\gamma = \\sqrt{\\left(\\frac{V_{rms}}{V_{dc}}\\right)^2 - 1} = \\sqrt{\\left(\\frac{\\pi}{2\\sqrt{2}}\\right)^2 - 1} \\approx 0.482$.",
    "Capacitor Filter Ripple Formula: $\\gamma = \\frac{1}{4 \\sqrt{3} f C R_L}$ for full-wave rectifier.",
    "Zener Series Resistor Formula: $R_s = \\frac{V_{in,min} - V_Z}{I_{L,max} + I_{Z,min}}$.",
    "Transition Capacitance Relation: $C_T = \\frac{\\epsilon_s A}{W} \\propto (V_{bi} + V_R)^{-1/2}$.",
    "Diffusion Capacitance Formula: $C_D = \\left(\\frac{\\tau_T}{\\eta V_t}\\right) I_D$.",
    "PIV Comparison: Bridge Rectifier $\\text{PIV} = V_m$; Center-Tapped Full-Wave $\\text{PIV} = 2 V_m$.",
    "Tunnel Diode Negative Resistance: Occurs between peak point $(V_p, I_p)$ and valley point $(V_v, I_v)$ due to quantum mechanical tunneling.",
    "Exam Gold Tip: In clamper analysis, total peak-to-peak output swing ($2V_m$) is strictly preserved; only the dc baseline shifts."
])

add("Electronic Devices & Circuits", 3, "BJT & FET", [
    "Bipolar Junction Transistor (BJT) Physics: NPN and PNP structures; Active, Saturation, Cutoff, and Inverted operating regions; Forward-active operation: forward-biased emitter-base junction injecting minority carriers into thin neutral base, reverse-biased collector-base junction sweeping carriers into collector.",
    "BJT Currents & Amplification Factors: Current components: $I_E = I_B + I_C$; Common Base current gain $\\alpha = I_C / I_E$; Common Emitter current gain $\\beta = I_C / I_B$; Exact relations: $\\beta = \\frac{\\alpha}{1 - \\alpha}$ and $\\alpha = \\frac{\\beta}{1 + \\beta}$; Collector reverse saturation currents: $I_{CEO} = (1 + \\beta) I_{CBO}$.",
    "BJT Configurations & Characteristics: Common Base (CB: low $R_{in}$, high $R_{out}$, voltage gain $>1$, current gain $\\alpha < 1$); Common Emitter (CE: moderate $R_{in}, R_{out}$, high voltage and current gain, $180^\\circ$ phase inversion); Common Collector (CC / Emitter Follower: high $R_{in}$, low $R_{out}$, unity voltage gain).",
    "Early Effect & Base-Width Modulation: Reverse bias on collector-base junction widens depletion region, narrowing neutral base width $W_B$; Collector current increases with $V_{CE}$; Output resistance $r_o = \\frac{V_A + V_{CE}}{I_C} \\approx \\frac{V_A}{I_C}$, where $V_A$ is the Early voltage.",
    "Junction Field-Effect Transistor (JFET): Structure (n-channel and p-channel); Operation governed by reverse-biased gate-channel depletion width; Pinch-off voltage $V_P$; Shockley's JFET Equation: $I_D = I_{DSS} \\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$ in saturation region; Transconductance $g_m = \\frac{2 I_{DSS}}{|V_P|} \\left(1 - \\frac{V_{GS}}{V_P}\\right)$.",
    "Metal-Oxide-Semiconductor FET (MOSFET): Depletion MOSFET (normally-on, operates in depletion and enhancement modes) vs Enhancement MOSFET (normally-off, threshold voltage $V_{th}$); Drain current equations: Triode / Linear region ($V_{DS} < V_{GS} - V_{th}$): $I_D = \\mu_n C_{ox} \\frac{W}{L} \\left[(V_{GS} - V_{th})V_{DS} - \\frac{V_{DS}^2}{2}\\right]$; Saturation region ($V_{DS} \\ge V_{GS} - V_{th}$): $I_D = \\frac{1}{2} \\mu_n C_{ox} \\frac{W}{L} (V_{GS} - V_{th})^2 (1 + \\lambda V_{DS})$.",
    "MOSFET Channel-Length Modulation: Shortening of effective channel length in saturation due to pinch-off region expansion; Parameterized by channel-length modulation coefficient $\\lambda = 1 / V_A$; Small-signal output resistance $r_o = 1 / (\\lambda I_D)$.",
    "Comparison Between BJT and FET: BJT is bipolar, current-controlled ($I_C = \\beta I_B$), lower input impedance ($k\\Omega$), higher transconductance; FET is unipolar (majority carriers), voltage-controlled ($I_D = f(V_{GS})$), ultra-high input impedance ($10^{12} \\Omega$), lower noise figure.",
    "Sub-Threshold Conduction in MOSFETs: Weak inversion current flowing when $V_{GS} < V_{th}$; Exponential dependency on $V_{GS}$; Subthreshold swing $S = (\\ln 10) \\frac{k_B T}{q} \\left(1 + \\frac{C_{dep}}{C_{ox}}\\right) \\approx 60-90\\text{ mV/decade}$; Critical in low-power VLSI design.",
    "University Examination Strategy: Derive $\\beta = \\alpha / (1 - \\alpha)$, plot and analyze CE input and output characteristics with Early voltage extrapolation, derive JFET transconductance $g_m$, and compute operating point coordinates for MOSFET saturation."
], [
    "BJT Alpha-Beta Relation: $\\beta = \\frac{\\alpha}{1 - \\alpha}, \\quad \\alpha = \\frac{\\beta}{1 + \\beta}$.",
    "Collector Saturation Leakage: $I_{CEO} = (\\beta + 1) I_{CBO}$.",
    "BJT Small-Signal Transconductance: $g_m = \\frac{I_C}{V_t}$.",
    "Early Effect Output Resistance: $r_o = \\frac{V_A}{I_C}$.",
    "JFET Shockley Drain Current: $I_D = I_{DSS} \\left( 1 - \\frac{V_{GS}}{V_P} \\right)^2$ for $V_{DS} \\ge V_{GS} - V_P$.",
    "JFET Transconductance Expression: $g_m = g_{m0} \\left( 1 - \\frac{V_{GS}}{V_P} \\right)$, where $g_{m0} = \\frac{2 I_{DSS}}{|V_P|}$.",
    "MOSFET Saturation Current: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{th})^2 (1 + \\lambda V_{DS})$.",
    "MOSFET Pinch-Off Boundary: $V_{DS,sat} = V_{GS} - V_{th}$.",
    "Emitter Follower Impedance: Exhibits high input impedance $R_{in} \\approx r_\\pi + (1 + \\beta) R_E$ and low output impedance.",
    "Exam Gold Tip: For MOSFET saturation, both conditions must hold: $V_{GS} > V_{th}$ (channel exists) and $V_{DS} \\ge V_{GS} - V_{th}$ (pinched off)."
])

add("Electronic Devices & Circuits", 4, "Amplifier Design", [
    "BJT Biasing & Q-Point Stability: Need for stable Operating Point ($Q$: $V_{CEQ}, I_{CQ}$); Thermal runaway ($T \\uparrow \\implies I_{CBO} \\uparrow \\implies I_C \\uparrow \\implies P_D \\uparrow \\implies T \\uparrow$); Stability factors: $S = \\frac{\\partial I_C}{\\partial I_{CBO}}$, $S' = \\frac{\\partial I_C}{\\partial V_{BE}}$, $S'' = \\frac{\\partial I_C}{\\partial \\beta}$.",
    "Biasing Circuits Comparison: Fixed bias ($S = 1 + \\beta$, poor thermal stability); Collector-to-base feedback bias; Voltage Divider Bias (Self-bias: $R_{th} = R_1 \\parallel R_2, V_{th} = V_{CC} \\frac{R_2}{R_1 + R_2}$, stability factor $S \\approx 1 + \\frac{R_{th}}{R_E}$, superior thermal stability independent of $\\beta$).",
    "DC and AC Load Lines: DC load line: $V_{CE} = V_{CC} - I_C(R_C + R_E)$; AC load line: $v_{ce} = -i_c (R_C \\parallel R_L)$; Q-point placement for symmetrical unclipped output voltage swing ($V_{CEQ} = I_{CQ} r_{ac}$).",
    "BJT Small-Signal Low-Frequency Models: (1) Hybrid $h$-parameter model ($h_{ie}, h_{re}, h_{fe}, h_{oe}$); (2) Hybrid-$\\pi$ model: transconductance $g_m = I_C / V_t$, input resistance $r_\\pi = \\beta / g_m$, output resistance $r_o = V_A / I_C$; $r_e$ model: $r_e = V_t / I_E$.",
    "Small-Signal Analysis of CE Amplifier: Voltage gain $A_v = -g_m (R_C \\parallel R_L \\parallel r_o)$; Input resistance $R_{in} = R_1 \\parallel R_2 \\parallel r_\\pi$; Output resistance $R_{out} = R_C \\parallel r_o$; Current gain $A_i$; Impact of unbypassed emitter resistor $R_E$ (gain reduction $A_v \\approx -R_C / R_E$, input resistance expansion $r_\\pi + (1+\\beta)R_E$).",
    "Small-Signal Analysis of CB and CC Amplifiers: Common Collector (Emitter Follower): $A_v \\approx \\frac{R_E}{r_e + R_E} \\approx 1$, $R_{in} \\approx R_1 \\parallel R_2 \\parallel [r_\\pi + (1+\\beta)(R_E \\parallel R_L)]$, $R_{out} \\approx R_E \\parallel \\left(r_e + \\frac{R_s \\parallel R_B}{1+\\beta}\\right)$; Common Base: $A_v = +g_m(R_C \\parallel R_L)$, $R_{in} \\approx r_e$ (non-inverting).",
    "FET Small-Signal Amplifiers: Common Source (CS) amplifier ($A_v = -g_m (R_D \\parallel R_L \\parallel r_o)$, $R_{in} = R_G$); Common Drain (CD / Source Follower) amplifier ($A_v = \\frac{g_m R_S}{1 + g_m R_S} \\approx 1$, low $R_{out}$); Common Gate (CG) amplifier.",
    "Frequency Response of Amplifiers: Bode magnitude and phase plots; Low-frequency response dominated by coupling capacitors ($C_C1, C_C2$) and emitter bypass capacitor ($C_E$); Lower cutoff frequency $f_L = \\frac{1}{2\\pi R_{eq} C}$; Mid-band gain $A_{mid}$; Bandwidth $BW = f_H - f_L \\approx f_H$.",
    "High-Frequency Response & Miller's Theorem: Internal junction capacitances: BJT ($C_\\pi, C_\\mu$), MOSFET ($C_{gs}, C_{gd}, C_{db}$); Miller's Theorem: bridging capacitance $C_f$ between inverting amplifier nodes with gain $-K$ transforms into input capacitance $C_{in(M)} = C_f (1 + K)$ and output capacitance $C_{out(M)} = C_f (1 + 1/K)$; Gain-Bandwidth Product (GBW) constancy.",
    "University Examination Strategy: Calculate Q-point and stability factor $S$ for voltage divider bias, derive small-signal voltage gain and input impedance for CE amplifier using hybrid-$\\pi$ model, and compute upper cutoff frequency $f_H$ using Miller approximation."
], [
    "Voltage Divider Bias Stability Factor: $S = \\frac{1 + \\beta}{1 + \\beta \\frac{R_E}{R_E + R_{th}}}$.",
    "CE Voltage Gain Formula: $A_v = -\\frac{g_m (R_C \\parallel R_L)}{1 + g_m R_E}$ (for unbypassed $R_E$).",
    "Hybrid-$\\pi$ Input Resistance: $r_\\pi = \\frac{\\beta V_t}{I_C} = (\\beta + 1) r_e$.",
    "Miller Input Capacitance: $C_{M,in} = C_f (1 - A_v) = C_f (1 + |A_v|)$ for inverting amplifier.",
    "Miller Output Capacitance: $C_{M,out} = C_f \\left(1 - \\frac{1}{A_v}\\right) \\approx C_f$.",
    "Emitter Bypass Cutoff Frequency: $f_{L(E)} = \\frac{1}{2\\pi R_e' C_E}$, where $R_e' = R_E \\parallel \\left(r_e + \\frac{R_s \\parallel R_B}{\\beta + 1}\\right)$.",
    "Gain-Bandwidth Product Rule: $A_{v0} \\times BW = \\text{Constant} = f_T$ (unity gain bandwidth).",
    "Source Follower Gain: $A_v = \\frac{g_m (R_S \\parallel R_L)}{1 + g_m (R_S \\parallel R_L)} < 1$.",
    "AC Symmetrical Swing Placement: Optimum $V_{CEQ} = \\frac{V_{CC} + I_{CQ}(R_E - r_{ac})}{2}$.",
    "Exam Gold Tip: An unbypassed emitter resistor $R_E$ provides negative feedback, stabilizing gain against temperature variations at the expense of lower mid-band gain."
])

add("Electronic Devices & Circuits", 5, "Feedback & Oscillators", [
    "Negative Feedback Concepts & Topologies: Closed-loop gain $A_f = \\frac{A}{1 + A \\beta}$; Feedback factor $\\beta$; Loop gain $T = A \\beta$; Desensitivity of gain: $\\frac{dA_f}{A_f} = \\frac{1}{1 + A \\beta} \\frac{dA}{A}$; Topologies: (1) Voltage-Series (Series-Shunt: increases $R_{in}$, decreases $R_{out}$); (2) Voltage-Shunt (Shunt-Shunt: decreases $R_{in}, R_{out}$); (3) Current-Series (Series-Series: increases $R_{in}, R_{out}$); (4) Current-Shunt (Shunt-Series: decreases $R_{in}$, increases $R_{out}$).",
    "Effects of Negative Feedback: Stabilizes gain, reduces non-linear harmonic distortion ($D_f = D / (1 + A \\beta)$), suppresses power supply noise, expands bandwidth ($BW_f = BW \\cdot (1 + A \\beta)$), modifies terminal impedances.",
    "Positive Feedback & Barkhausen Criterion for Oscillation: Closed-loop gain diverges when $1 - A \\beta = 0$; Barkhausen Conditions: (1) Magnitude condition: $|A \\beta| = 1$; (2) Phase condition: $\\angle A \\beta = 0^\\circ$ or $360^\\circ$ (total loop phase shift must be zero or integer multiple of $2\\pi$).",
    "RC Phase Shift Oscillator: Uses 3-section $RC$ ladder network; Each $RC$ section provides $60^\\circ$ phase shift, total feedback phase shift $180^\\circ$; Inverting CE/Op-Amp stage provides remaining $180^\\circ$; Frequency of oscillation $f_0 = \\frac{1}{2\\pi R C \\sqrt{6}}$; Minimum amplifier gain requirement: $|A| \\ge 29$ (BJT requires $h_{fe} \\ge 44.5$ or $56$).",
    "Wien Bridge Oscillator: Lead-lag $RC$ network; Zero phase shift at resonance; Resonance frequency $f_0 = \\frac{1}{2\\pi R C}$; Feedback attenuation $\\beta = 1/3$; Amplifier must provide non-inverting gain $A_v = 1 + \\frac{R_f}{R_1} \\ge 3$; Amplitude stabilization using thermistors or back-to-back Zener diodes.",
    "LC Tuned Oscillators: High-frequency sinusoidal signal generation; Tank circuit ($L-C$) resonance $f_0 \\approx \\frac{1}{2\\pi \\sqrt{L C}}$; (1) Hartley Oscillator: Tapped inductor ($L_1 + L_2 + 2M$), feedback ratio $\\beta = L_1 / L_2$, $f_0 = \\frac{1}{2\\pi \\sqrt{L_{eq} C}}$; (2) Colpitts Oscillator: Tapped capacitive divider ($C_1, C_2$), feedback ratio $\\beta = C_2 / C_1$, equivalent capacitance $C_{eq} = \\frac{C_1 C_2}{C_1 + C_2}$, $f_0 = \\frac{1}{2\\pi \\sqrt{L C_{eq}}}$.",
    "Clapp Oscillator: Modification of Colpitts oscillator; Adds small capacitor $C_3$ in series with inductor $L$ ($C_3 \\ll C_1, C_2$); Frequency determined primarily by $C_3$: $f_0 = \\frac{1}{2\\pi \\sqrt{L C_3}}$; Eliminates frequency drift caused by transistor stray junction capacitances.",
    "Crystal Oscillators: Piezoelectric quartz crystal; Equivalent electrical circuit: Series RLC arm ($R, L, C_s$) shunted by parallel mounting capacitance $C_p$; Extremely high Quality factor $Q > 10^4$; Series resonance frequency $f_s = \\frac{1}{2\\pi \\sqrt{L C_s}}$; Parallel anti-resonance frequency $f_p = \\frac{1}{2\\pi \\sqrt{L C_{eq}}}$ where $C_{eq} = \\frac{C_s C_p}{C_s + C_p}$; Pierce crystal oscillator.",
    "Multivibrators: Non-sinusoidal waveform generators; (1) Astable Multivibrator (free-running square wave generator, $T = 1.386 R C$); (2) Monostable Multivibrator (one stable state, generates fixed-width pulse upon trigger, $T = 0.693 R C$); (3) Bistable Multivibrator (two stable states, basic flip-flop memory element).",
    "University Examination Strategy: Derive the closed-loop gain and impedance relations for Voltage-Series feedback, derive the oscillation frequency and gain condition for the RC Phase Shift oscillator, and calculate component values for Hartley vs Colpitts oscillators."
], [
    "Feedback Gain Formula: $A_f = \\frac{A}{1 + A \\beta}$.",
    "Gain Desensitivity: $\\frac{dA_f}{A_f} = \\frac{1}{1 + A \\beta} \\frac{dA}{A}$.",
    "Barkhausen Criteria: $|A \\beta| = 1$ and $\\angle A \\beta = 0^\\circ$ (or $2\\pi n$).",
    "RC Phase Shift Frequency: $f_0 = \\frac{1}{2\\pi R C \\sqrt{6}}$ with minimum required gain $|A_v| \\ge 29$.",
    "Wien Bridge Frequency & Gain: $f_0 = \\frac{1}{2\\pi R C}$ with non-inverting gain $A_v = 1 + \\frac{R_f}{R_1} \\ge 3$.",
    "Colpitts Equivalent Capacitance: $C_{eq} = \\frac{C_1 C_2}{C_1 + C_2}$ and $f_0 = \\frac{1}{2\\pi \\sqrt{L C_{eq}}}$.",
    "Hartley Equivalent Inductance: $L_{eq} = L_1 + L_2 + 2M$ and $f_0 = \\frac{1}{2\\pi \\sqrt{L_{eq} C}}$.",
    "Crystal Piezoelectric Resonance: Operates in inductive region between $f_s$ and $f_p$ ($f_s < f < f_p$).",
    "Voltage-Series Terminal Impedances: $R_{in,f} = R_{in}(1 + A\\beta)$ and $R_{out,f} = \\frac{R_{out}}{1 + A\\beta}$.",
    "Exam Gold Tip: Colpitts oscillators provide superior high-frequency spectral purity compared to Hartley oscillators because the split capacitors shunt high-frequency harmonics to ground."
])

# Save batch 2 initial
with open('scripts/sem3_btech_batch2_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 2 initial complete: {len(data)} units.")
