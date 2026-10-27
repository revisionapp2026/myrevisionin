"""
EDC, Signals & Systems, Electrical Machines, and EMF Units for B.Tech Semester 3.
"""

edc_signals_units = {
    # 9. ELECTRONIC DEVICES & CIRCUITS
    "btech-edc: semiconductor physics": {
        "highlights": [
            "Energy Band Theory: Valence band, conduction band, and forbidden energy band gap $E_g$; conductors ($E_g \\approx 0$), semiconductors ($E_g \\approx 1.1\\text{ eV}$ for Si, $0.72\\text{ eV}$ for Ge), and insulators ($E_g > 5\\text{ eV}$).",
            "Intrinsic Semiconductors: Chemically pure crystalline silicon; thermal agitation generates electron-hole pairs; intrinsic carrier concentration $n_i = p_i = A T^{3/2} e^{-E_g / (2 k T)}$.",
            "Extrinsic Semiconductors: Doping with pentavalent donors (P, As, Sb) creates n-type semiconductor ($n \\approx N_D$); Doping with trivalent acceptors (B, Al, Ga) creates p-type semiconductor ($p \\approx N_A$).",
            "Mass Action Law: Under thermodynamic equilibrium, the product of electron and hole concentrations is invariant: $n \\cdot p = n_i^2$, regardless of doping concentrations.",
            "Fermi-Dirac Distribution & Fermi Level: Probability of electron occupancy $f(E) = \\frac{1}{1 + e^{(E - E_F)/kT}}$; Fermi level $E_F$ lies near mid-gap in intrinsic material, near conduction band in n-type, and near valence band in p-type.",
            "Carrier Drift Mechanics: Movement of charge carriers under electric field $\\vec{E}$; drift velocity $v_d = \\mu E$; drift current density $J_{drift} = q(n \\mu_n + p \\mu_p) E = \\sigma E$, where $\\sigma$ is electrical conductivity.",
            "Carrier Diffusion Mechanics: Movement of carriers driven by spatial concentration gradients; Fick's law yields diffusion current densities $J_{n,diff} = q D_n \\frac{dn}{dx}$ and $J_{p,diff} = -q D_p \\frac{dp}{dx}$.",
            "Einstein Relation: Connects carrier mobility $\\mu$ and diffusion coefficient $D$ via thermal voltage: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = \\frac{k T}{q} = V_T \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
            "Continuity Equation: Formulates dynamic carrier conservation: $\\frac{\\partial p}{\\partial t} = -\\frac{1}{q} \\nabla \\cdot \\vec{J}_p + G_p - \\frac{p - p_0}{\\tau_p}$, balancing generation, recombination, and transport.",
            "Hall Effect: Magnetic deflection of transverse moving carriers generates Hall voltage $V_H = \\frac{I B}{q n d}$; evaluates carrier type (electrons vs holes), carrier concentration $n$, and Hall mobility $\\mu_H$."
        ],
        "keyPoints": [
            "Mass Action Law: $n \\cdot p = n_i^2$ valid under thermal equilibrium.",
            "Einstein Relation: $\\frac{D}{\\mu} = V_T = \\frac{k T}{q} \\approx 25.86\\text{ mV}$ at $T = 300\\text{ K}$.",
            "Electrical Conductivity: $\\sigma = q(n \\mu_n + p \\mu_p)$; for n-type $\\sigma \\approx q N_D \\mu_n$.",
            "Hall Coefficient: $R_H = -\\frac{1}{n q}$ (for electrons) and $R_H = +\\frac{1}{p q}$ (for holes); sign determines majority carrier polarity.",
            "Bandgap Temperature Dependency: Varshni's equation shows $E_g(T)$ decreases monotonically as temperature increases.",
            "Carrier Drift Velocity Saturation: At high electric fields ($E > 10^4\\text{ V/cm}$), carrier velocity saturates at $v_{sat} \\approx 10^7\\text{ cm/s}$ in silicon.",
            "Diffusion Length: $L_n = \\sqrt{D_n \\tau_n}$ and $L_p = \\sqrt{D_p \\tau_p}$; average distance a minority carrier diffuses before recombining.",
            "Intrinsic Carrier Concentration: $n_i \\propto T^{3/2} e^{-E_g / (2 k T)}$ doubles approximately every $8-10^\\circ\\text{C}$ rise in temperature.",
            "Direct vs Indirect Bandgap: GaAs is direct bandgap (efficient photon emitter for LEDs/lasers); Si and Ge are indirect bandgap (phonons required, inefficient light emitters).",
            "Exam Hall Effect Formula: $V_H = \\frac{B I}{\\rho t}$ where $\\rho = n q$ is charge density and $t$ is semiconductor specimen thickness."
        ]
    },
    "btech-edc: diodes & applications": {
        "highlights": [
            "PN Junction Formation & Built-In Potential: Carrier diffusion across junction leaves behind uncompensated ionized donor/acceptor ions, creating depletion region; contact potential $V_0 = V_T \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)$.",
            "Shockley Ideal Diode Equation: Governs forward and reverse I-V characteristics: $I = I_s (e^{V / (\\eta V_T)} - 1)$, where $I_s$ is reverse saturation current, $\\eta$ is ideality factor (1 for Ge, 1-2 for Si), and $V_T \\approx 26\\text{ mV}$.",
            "Depletion vs Diffusion Capacitance: Reverse bias creates junction depletion capacitance $C_T = \\frac{\\varepsilon A}{W} \\propto (V_0 + V_R)^{-1/2}$; Forward bias creates minority carrier diffusion capacitance $C_D = \\frac{\\tau_T I_D}{\\eta V_T}$.",
            "Breakdown Mechanisms: Zener Breakdown (occurs in heavily doped junctions at $V_z < 6\\text{ V}$ due to direct quantum mechanical tunneling, negative temperature coefficient); Avalanche Breakdown (lightly doped junctions at $V_{br} > 6\\text{ V}$ via impact ionization).",
            "Zener Diode Voltage Regulation: Operates in reverse breakdown maintaining constant voltage $V_z$; circuit analysis evaluates minimum and maximum load currents and series limiting resistor $R_s = \\frac{V_{in} - V_z}{I_{z(max)} + I_L}$.",
            "Half-Wave & Full-Wave Rectifiers: Half-Wave efficiency $\\eta = 40.6\\%$, ripple factor $r = 1.21$, PIV $= V_m$; Full-Wave center-tapped and bridge rectifiers achieve $\\eta = 81.2\\%$, ripple factor $r = 0.482$, bridge PIV $= V_m$.",
            "Filter Circuits: Capacitor filter reduces ripple factor to $r = \\frac{1}{4\\sqrt{3} f R_L C}$ for full-wave; Inductor filter and $\\pi$-section (CLC) filters provide high smoothing for heavy load currents.",
            "Diode Clippers & Clampers: Clippers (limiters) clip off portions of an input signal above or below reference voltage levels; Clampers (DC restorers) shift the entire AC waveform positively or negatively using a diode, capacitor, and resistor.",
            "Varactor & Schottky Diodes: Varactor diode operates as voltage-variable capacitor under reverse bias; Schottky barrier diode (metal-semiconductor junction) features low forward drop ($0.3\\text{ V}$), zero minority carrier storage, and ultra-fast switching.",
            "University Examination Strategy: Draw complete circuit schematics for bridge rectifiers, derive ripple factor and efficiency expressions, and sketch input/output waveforms with labeled peak values."
        ],
        "keyPoints": [
            "Built-In Contact Potential: $V_0 = V_T \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right) \\approx 0.7\\text{ V}$ for Silicon and $0.3\\text{ V}$ for Germanium.",
            "Shockley Diode Equation: $I = I_s(e^{V / \\eta V_T} - 1)$; In reverse bias ($V < -4 V_T$), current saturates at $-I_s$.",
            "Rectifier Efficiency: Half-Wave $\\eta = \\frac{0.406 R_L}{r_f + R_L} \\approx 40.6\\%$; Full-Wave $\\eta = \\frac{0.812 R_L}{r_f + R_L} \\approx 81.2\\%$.",
            "Ripple Factor Equations: $r = \\sqrt{\\left(\\frac{I_{rms}}{I_{dc}}\\right)^2 - 1}$; Half-Wave $r = 1.21$; Full-Wave $r = 0.482$.",
            "Peak Inverse Voltage (PIV): Half-Wave: $V_m$; Full-Wave Center-Tapped: $2V_m$; Full-Wave Bridge: $V_m$.",
            "Zener Voltage Regulation: Operates in reverse breakdown where dynamic resistance $r_z = \\frac{\\Delta V_z}{\\Delta I_z} \\approx 0$.",
            "Temperature Sensitivity of $I_s$: Reverse saturation current $I_s$ doubles for every $10^\\circ\\text{C}$ rise in junction temperature.",
            "Clamper Theorem: Total peak-to-peak swing of clamped output waveform strictly equals peak-to-peak swing of input signal ($V_{p-p,out} = V_{p-p,in}$).",
            "Schottky Barrier: Majority carrier device with zero reverse recovery time ($t_{rr} \\approx 0$), ideal for high-speed RF switching.",
            "Exam Rectifier Derivation Step: State $I_{dc} = \\frac{2 I_m}{\\pi}$ and $I_{rms} = \\frac{I_m}{\\sqrt{2}}$ for full-wave before substituting into efficiency formula."
        ]
    },
    "btech-edc: bjt & fet": {
        "highlights": [
            "BJT Physical Construction & Operating Regions: NPN and PNP bipolar junction transistors; Emitter heavily doped, Base narrow and lightly doped, Collector large area for heat dissipation; active, saturation, and cutoff regions.",
            "BJT Current Relations & Amplification: Emitter current $I_E = I_B + I_C$; Collector current $I_C = \\beta I_B + (1+\\beta)I_{CBO}$; Common-Base current gain $\\alpha = \\frac{I_C}{I_E}$; Common-Emitter current gain $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
            "Transistor Configurations: Common-Base (CB: low $R_{in}$, high $R_{out}$, voltage gain $>1$, current gain $\\alpha < 1$); Common-Emitter (CE: moderate $R_{in}$ and $R_{out}$, high voltage and current gains, $180^\\circ$ phase inversion); Common-Collector (CC: high $R_{in}$, low $R_{out}$, voltage buffer).",
            "Early Effect & Base-Width Modulation: Reverse bias on collector-base junction widens depletion region, narrowing effective metallurgical base width $W_B$; causes collector current $I_C$ to increase with $V_{CE}$ and finite output resistance $r_o = \\frac{V_A + V_{CE}}{I_C}$.",
            "Junction Field-Effect Transistor (JFET): Unipolar voltage-controlled device; drain current governed by Shockley's equation $I_D = I_{DSS}\\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$ in saturation region; pinch-off voltage $V_P$ and transconductance $g_m = \\frac{2 I_{DSS}}{|V_P|}\\left(1 - \\frac{V_{GS}}{V_P}\\right)$.",
            "Metal-Oxide-Semiconductor FET (MOSFET): Depletion MOSFET (normally-on channel) and Enhancement MOSFET (normally-off channel requiring gate-source threshold voltage $V_{GS} > V_{th}$ to create inversion layer).",
            "MOSFET I-V Characteristic Regions: Cutoff ($V_{GS} < V_{th}, I_D = 0$), Triode / Linear ($V_{DS} < V_{GS} - V_{th}$, $I_D = \\mu_n C_{ox} \\frac{W}{L}[(V_{GS} - V_{th})V_{DS} - \\frac{1}{2}V_{DS}^2]$), and Saturation ($V_{DS} \\ge V_{GS} - V_{th}$, $I_D = \\frac{1}{2}\\mu_n C_{ox} \\frac{W}{L}(V_{GS} - V_{th})^2$).",
            "Channel Length Modulation: In MOSFET saturation, increasing $V_{DS}$ pinches off channel earlier, shortening effective channel length: $I_D = \\frac{1}{2} k_n' \\frac{W}{L}(V_{GS}-V_{th})^2(1 + \\lambda V_{DS})$ with channel length parameter $\\lambda$.",
            "CMOS Technology: Pairs n-channel MOSFET and p-channel MOSFET; consumes virtually zero static power, possesses symmetric switching thresholds, and forms the foundation of modern VLSI processors.",
            "University Examination Strategy: Draw labeled family of input and output characteristic curves for CE BJT and n-channel enhancement MOSFET, showing active, saturation, and cutoff boundaries."
        ],
        "keyPoints": [
            "Current Gain Relationship: $\\beta = \\frac{\\alpha}{1 - \\alpha}$ and $\\alpha = \\frac{\\beta}{1 + \\beta}$; Typically $\\alpha \\approx 0.98 - 0.998$ and $\\beta \\approx 50 - 500$.",
            "BJT Active Mode Bias: Emitter-Base junction Forward Biased; Collector-Base junction Reverse Biased.",
            "BJT Saturation Mode Bias: Both Emitter-Base and Collector-Base junctions Forward Biased ($V_{CE(sat)} \\approx 0.2\\text{ V}$).",
            "BJT Cutoff Mode Bias: Both Emitter-Base and Collector-Base junctions Reverse Biased ($I_C \\approx 0$).",
            "JFET Shockley Equation: $I_D = I_{DSS}\\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$ valid strictly in saturation ($V_{DS} \\ge V_{GS} - V_P$).",
            "MOSFET Saturation Condition: $V_{DS} \\ge V_{GS} - V_{th}$; drain current becomes independent of $V_{DS}$ (ignoring channel length modulation).",
            "MOSFET Transconductance: $g_m = \\frac{\\partial I_D}{\\partial V_{GS}} = \\mu_n C_{ox} \\frac{W}{L}(V_{GS} - V_{th}) = \\sqrt{2 \\mu_n C_{ox} \\frac{W}{L} I_D}$.",
            "BJT vs FET Comparison: BJT is bipolar and current-controlled ($I_C = \\beta I_B$); FET is unipolar and voltage-controlled ($I_D = f(V_{GS})$) with near-infinite input impedance.",
            "Early Voltage ($V_A$): Extrapolation of output characteristics in active region intersect negative $V_{CE}$ axis at $-V_A$.",
            "Exam Curve Checklist: In CE output characteristics, clearly label Cutoff Region ($I_B = 0$), Saturation Region ($V_{CE} < 0.2\\text{ V}$), and Active Linear Region."
        ]
    },

    # 10. SIGNALS & SYSTEMS
    "btech-signals: signal classification & lti systems": {
        "highlights": [
            "Continuous-Time vs Discrete-Time Signals: Continuous signals $x(t)$ defined for continuous time $t \\in \\mathbb{R}$; Discrete signals $x[n]$ defined at integer index $n \\in \\mathbb{Z}$; generated via sampling $x[n] = x(n T_s)$.",
            "Even & Odd Signal Decomposition: Any arbitrary signal can be uniquely decomposed as $x(t) = x_e(t) + x_o(t)$, where even component $x_e(t) = \\frac{x(t) + x(-t)}{2}$ and odd component $x_o(t) = \\frac{x(t) - x(-t)}{2}$.",
            "Periodic Signals & Fundamental Frequency: Signal is periodic iff $x(t) = x(t + T_0)$ for all $t$; fundamental frequency $\\omega_0 = 2\\pi / T_0$; discrete signal $x[n] = \\cos(\\omega_0 n)$ is periodic iff $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number.",
            "Energy & Power Signals: Energy $E = \\int_{-\\infty}^\\infty |x(t)|^2 dt$; Power $P = \\lim_{T \\to \\infty} \\frac{1}{T} \\int_{-T/2}^{T/2} |x(t)|^2 dt$; Energy signal has $0 < E < \\infty$ and $P = 0$; Power signal has $0 < P < \\infty$ and $E = \\infty$.",
            "Singularity Functions: Dirac Delta $\\delta(t)$ defined by $\\int_{-\\infty}^\\infty \\delta(t)dt = 1$ and sifting property $\\int_{-\\infty}^\\infty x(t)\\delta(t-t_0)dt = x(t_0)$; Unit step $u(t) = \\int_{-\\infty}^t \\delta(\\tau)d\\tau$; Unit ramp $r(t) = t \\cdot u(t)$.",
            "System Properties Classification: Linearity (homogeneity + additivity), Time-Invariance ($x(t-t_0) \\to y(t-t_0)$), Causality (output depends only on present and past inputs), and Memory (static vs dynamic).",
            "BIBO Stability: Bounded-Input Bounded-Output stability; system is BIBO stable iff every bounded input $|x(t)| \\le M_x < \\infty$ produces a bounded output $|y(t)| \\le M_y < \\infty$.",
            "Continuous-Time Convolution Integral: Output of an LTI system to arbitrary input $x(t)$ is the convolution with its impulse response $h(t)$: $y(t) = x(t) * h(t) = \\int_{-\\infty}^\\infty x(\\tau) h(t - \\tau) d\\tau$.",
            "Discrete-Time Convolution Sum: $y[n] = x[n] * h[n] = \\sum_{k=-\\infty}^\\infty x[k] h[n - k]$; commutative ($x * h = h * x$), associative, and distributive over addition.",
            "LTI Causality & Stability Criteria: Continuous LTI system is causal iff $h(t) = 0$ for all $t < 0$; BIBO stable iff impulse response is absolutely integrable: $\\int_{-\\infty}^\\infty |h(t)| dt < \\infty$ (or $\\sum |h[n]| < \\infty$)."
        ],
        "keyPoints": [
            "Even and Odd Parts: $x_e(t) = \\frac{x(t) + x(-t)}{2}$ and $x_o(t) = \\frac{x(t) - x(-t)}{2}$.",
            "Impulse Sifting Property: $\\int_{-\\infty}^\\infty x(t) \\delta(t - t_0) dt = x(t_0)$; Scaling: $\\delta(a t) = \\frac{1}{|a|} \\delta(t)$.",
            "Unit Step Derivative: $\\frac{d}{dt}[u(t)] = \\delta(t)$; $\\frac{d}{dt}[r(t)] = u(t)$.",
            "Discrete Periodicity Condition: $x[n] = e^{j \\omega_0 n}$ is periodic iff $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N} \\in \\mathbb{Q}$; Fundamental period $N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)$.",
            "Continuous Convolution: $y(t) = \\int_{-\\infty}^\\infty x(\\tau) h(t - \\tau) d\\tau$.",
            "Discrete Convolution: $y[n] = \\sum_{k=-\\infty}^\\infty x[k] h[n - k]$.",
            "LTI Stability Condition: $\\int_{-\\infty}^\\infty |h(t)| dt < \\infty$; discrete: $\\sum_{n=-\\infty}^\\infty |h[n]| < \\infty$.",
            "LTI Causality Condition: $h(t) = 0$ for all $t < 0$; discrete: $h[n] = 0$ for all $n < 0$.",
            "Width of Convolved Signal: If $x(t)$ has duration $T_1$ and $h(t)$ has duration $T_2$, convolved output $y(t)$ has total duration $T_1 + T_2$.",
            "Exam Convolution Steps: (1) Fold: $h(\\tau) \\to h(-\\tau)$, (2) Shift: $h(t - \\tau)$, (3) Multiply: $x(\\tau) h(t - \\tau)$, (4) Integrate over overlapping intervals."
        ]
    },
    "btech-signals: fourier & laplace transforms": {
        "highlights": [
            "Continuous-Time Fourier Series (CTFS): Any periodic signal $x(t)$ satisfying Dirichlet's conditions can be expanded as exponential series $x(t) = \\sum_{k=-\\infty}^\\infty c_k e^{j k \\omega_0 t}$; Fourier coefficients $c_k = \\frac{1}{T_0} \\int_{T_0} x(t) e^{-j k \\omega_0 t} dt$.",
            "Continuous-Time Fourier Transform (CTFT): Analysis equation $X(\\omega) = \\mathcal{F}\\{x(t)\\} = \\int_{-\\infty}^\\infty x(t) e^{-j \\omega t} dt$; Synthesis (inverse) equation $x(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty X(\\omega) e^{j \\omega t} d\\omega$.",
            "Fourier Transform Properties: Linearity, Time Shifting ($x(t - t_0) \\leftrightarrow X(\\omega)e^{-j\\omega t_0}$), Frequency Shifting ($x(t)e^{j\\omega_0 t} \\leftrightarrow X(\\omega - \\omega_0)$), Time Scaling ($x(a t) \\leftrightarrow \\frac{1}{|a|} X(\\omega / a)$), and Duality.",
            "Convolution & Parseval's Theorems: Time convolution maps to frequency multiplication: $x(t) * h(t) \\leftrightarrow X(\\omega) H(\\omega)$; Parseval's energy theorem: $E = \\int_{-\\infty}^\\infty |x(t)|^2 dt = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty |X(\\omega)|^2 d\\omega$.",
            "Laplace Transform & Region of Convergence: Bilateral transform $X(s) = \\int_{-\\infty}^\\infty x(t) e^{-s t} dt$ where complex frequency $s = \\sigma + j\\omega$; ROC defines s-plane strip where integral converges absolutely; ROC never contains any poles.",
            "Unilateral Laplace Transform: $X(s) = \\int_0^-^\\infty x(t) e^{-s t} dt$; ideal for solving initial-value linear differential equations with non-zero initial state conditions.",
            "Laplace Properties: Time differentiation $\\mathcal{L}\\{\\frac{dx}{dt}\\} = s X(s) - x(0^-)$; Integration $\\mathcal{L}\\{\\int x(\\tau)d\\tau\\} = \\frac{X(s)}{s}$; Initial Value Theorem $\\lim_{t \\to 0^+} x(t) = \\lim_{s \\to \\infty} s X(s)$; Final Value Theorem $\\lim_{t \\to \\infty} x(t) = \\lim_{s \\to 0} s X(s)$.",
            "Transfer Function & Pole-Zero Analysis: System transfer function $H(s) = \\frac{Y(s)}{X(s)} = \\mathcal{L}\\{h(t)\\}$; LTI system is causal and stable iff all poles of $H(s)$ lie strictly in the open left-half s-plane ($\\text{Re}(s) < 0$).",
            "Z-Transform for Discrete Signals: Discrete counterpart of Laplace transform: $X(z) = \\sum_{n=-\\infty}^\\infty x[n] z^{-n}$ where $z = r e^{j\\Omega}$; ROC is an annular ring in complex z-plane; ROC never contains poles.",
            "Z-Domain Stability & Unit Circle: Discrete LTI system is causal and stable iff all poles of transfer function $H(z)$ lie strictly INSIDE the unit circle ($|z| < 1$); unit circle evaluation ($z = e^{j\\Omega}$) yields DTFT."
        ],
        "keyPoints": [
            "Fourier Transform Pair: $X(\\omega) = \\int_{-\\infty}^\\infty x(t) e^{-j\\omega t} dt$ and $x(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^\\infty X(\\omega) e^{j\\omega t} d\\omega$.",
            "Parseval's Energy Theorem: $\\int_{-\\infty}^\\infty |x(t)|^2 dt = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty |X(\\omega)|^2 d\\omega$.",
            "Duality Property: If $x(t) \\leftrightarrow X(\\omega)$, then $X(t) \\leftrightarrow 2\\pi x(-\\omega)$.",
            "Laplace Differentiation: $\\mathcal{L}\\left\\{\\frac{d x}{dt}\\right\\} = s X(s) - x(0^-)$; $\\mathcal{L}\\left\\{\\frac{d^2 x}{dt^2}\\right\\} = s^2 X(s) - s x(0^-) - x'(0^-)$.",
            "Continuous LTI Stability Rule: System is stable iff all poles of $H(s)$ lie strictly in the Left Half of the s-plane ($\\text{Re}(p_i) < 0$).",
            "Discrete LTI Stability Rule: System is stable iff all poles of $H(z)$ lie strictly INSIDE the unit circle ($|p_i| < 1$).",
            "Z-Transform Shifting: $\\mathcal{Z}\\{x[n - k]\\} = z^{-k} X(z)$.",
            "Z-Transform Step Function: $\\mathcal{Z}\\{u[n]\\} = \\frac{1}{1 - z^{-1}} = \\frac{z}{z - 1}$ with $\\text{ROC}: |z| > 1$.",
            "Z-Transform Exponential: $\\mathcal{Z}\\{a^n u[n]\\} = \\frac{1}{1 - a z^{-1}} = \\frac{z}{z - a}$ with $\\text{ROC}: |z| > |a|$.",
            "Exam Laplace Checklist: Always specify the Region of Convergence (ROC) when writing any Laplace or Z-transform expression."
        ]
    }
}

print("EDC and Signals units loaded.")
