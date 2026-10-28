import json, os

with open('scripts/sem3_btech_batch2_data.json', 'r', encoding='utf-8') as f:
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
# SIGNALS & SYSTEMS (Units 3, 4, 5)
# =========================================================================
add("Signals & Systems", 3, "Fourier Series & Transform", [
    "Continuous-Time Fourier Series (CTFS): Representation of periodic signals $x(t) = \\sum_{k=-\\infty}^\\infty a_k e^{j k \\omega_0 t}$; Analysis equation $a_k = \\frac{1}{T} \\int_T x(t) e^{-j k \\omega_0 t} dt$; Trigonometric Fourier series ($a_0, a_n, b_n$) vs Exponential Fourier series; Dirichlet conditions for convergence.",
    "Properties of Fourier Series: Linearity, Time shifting ($x(t - t_0) \\leftrightarrow a_k e^{-j k \\omega_0 t_0}$), Time reversal ($x(-t) \\leftrightarrow a_{-k}$), Conjugation ($x^*(t) \\leftrightarrow a_{-k}^*$); Parseval's theorem for periodic signals: $P = \\frac{1}{T}\\int_T |x(t)|^2 dt = \\sum_{k=-\\infty}^\\infty |a_k|^2$.",
    "Continuous-Time Fourier Transform (CTFT): Extension of Fourier series to aperiodic signals as $T \\to \\infty$; Analysis equation $X(j\\omega) = \\int_{-\\infty}^\\infty x(t) e^{-j\\omega t} dt$; Synthesis / Inverse Fourier transform $x(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty X(j\\omega) e^{j\\omega t} d\\omega$.",
    "CTFT Transform Pairs of Common Signals: Impulse $\\delta(t) \\leftrightarrow 1$; DC signal $1 \\leftrightarrow 2\\pi \\delta(\\omega)$; Rectangular pulse $\\text{rect}(t/\\tau) \\leftrightarrow \\tau \\text{sinc}(\\omega \\tau / (2\\pi))$; Signum $\\text{sgn}(t) \\leftrightarrow \\frac{2}{j\\omega}$; Step $u(t) \\leftrightarrow \\frac{1}{j\\omega} + \\pi \\delta(\\omega)$; Complex exponential $e^{j \\omega_0 t} \\leftrightarrow 2\\pi \\delta(\\omega - \\omega_0)$.",
    "Key Properties of CTFT: Linearity, Time scaling ($x(a t) \\leftrightarrow \\frac{1}{|a|} X(j\\omega / a)$), Duality ($X(t) \\leftrightarrow 2\\pi x(-\\omega)$), Frequency shifting / Modulation ($x(t) e^{j \\omega_0 t} \\leftrightarrow X(j(\\omega - \\omega_0))$), Differentiation in time ($\\frac{dx(t)}{dt} \\leftrightarrow j\\omega X(j\\omega)$), Integration in time.",
    "Convolution and Multiplication Theorems: Time convolution maps to frequency multiplication ($x(t) * h(t) \\leftrightarrow X(j\\omega) H(j\\omega)$); Frequency convolution maps to time multiplication ($x(t) p(t) \\leftrightarrow \\frac{1}{2\\pi} [X(j\\omega) * P(j\\omega)]$); System frequency response $H(j\\omega) = Y(j\\omega) / X(j\\omega)$.",
    "Parseval's Energy Theorem: Total energy in time domain equals total energy in frequency domain: $E = \\int_{-\\infty}^\\infty |x(t)|^2 dt = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty |X(j\\omega)|^2 d\\omega$; Energy Spectral Density (ESD) $S_{xx}(\\omega) = |X(j\\omega)|^2$.",
    "Ideal Frequency-Selective Filters: Frequency response of ideal lowpass, highpass, bandpass, and bandstop filters; Non-causality of ideal brick-wall filters (sinc impulse response extending to $t = -\\infty$, violating Paley-Wiener criterion); Distortionless transmission requirements (constant magnitude gain $|H(\\omega)| = K$, linear phase $\\theta(\\omega) = -\\omega t_d$).",
    "Sampling Theorem and Aliasing: Nyquist-Shannon Sampling Theorem; Minimum sampling rate (Nyquist rate) $\\omega_s \\ge 2 \\omega_m$ ($f_s \\ge 2 f_m$); Nyquist interval $T_s = 1 / (2 f_m)$; Spectral replication $X_p(j\\omega) = \\frac{1}{T_s} \\sum_{k=-\\infty}^\\infty X(j(\\omega - k \\omega_s))$; Aliasing distortion when $f_s < 2 f_m$; Reconstruction via ideal lowpass interpolation filter with cutoff $\\omega_c = \\omega_s / 2$.",
    "University Examination Strategy: Compute exponential Fourier series coefficients for symmetrical square and sawtooth waveforms, evaluate CTFT using transform properties without direct integration, and calculate Nyquist sampling rates and intervals for composite multi-tone signals."
], [
    "CTFS Exponential Analysis: $a_k = \\frac{1}{T_0} \\int_{T_0} x(t) e^{-j k \\omega_0 t} dt$.",
    "CTFT Forward Analysis: $X(j\\omega) = \\int_{-\\infty}^{\\infty} x(t) e^{-j\\omega t} dt$.",
    "Parseval's CTFT Energy Formula: $\\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi} \\int_{-\\infty}^{\\infty} |X(j\\omega)|^2 d\\omega$.",
    "CTFT Duality Property: If $x(t) \\leftrightarrow X(j\\omega)$, then $X(t) \\leftrightarrow 2\\pi x(-\\omega)$.",
    "Modulation (Frequency Shift): $x(t) e^{j\\omega_0 t} \\leftrightarrow X(j(\\omega - \\omega_0))$.",
    "Time Differentiation Property: $\\frac{d^n x(t)}{dt^n} \\leftrightarrow (j\\omega)^n X(j\\omega)$.",
    "Unit Step Fourier Transform: $\\mathcal{F}\\{u(t)\\} = \\frac{1}{j\\omega} + \\pi \\delta(\\omega)$.",
    "Distortionless Transmission Conditions: $|H(j\\omega)| = K$ (flat amplitude) and $\\angle H(j\\omega) = -\\omega t_d$ (linear phase).",
    "Nyquist Sampling Criterion: $f_s \\ge 2 f_{max}$ to ensure spectral copies do not overlap in frequency domain.",
    "Exam Gold Tip: For signals expressed as products (e.g. $m(t) \\cos(\\omega_c t)$), apply the modulation theorem: the spectrum splits into two halves shifted to $\\pm \\omega_c$."
])

add("Signals & Systems", 4, "Laplace Transform", [
    "Unilateral and Bilateral Laplace Transform: Bilateral Laplace Transform $X(s) = \\int_{-\\infty}^\\infty x(t) e^{-s t} dt$ where complex frequency $s = \\sigma + j\\omega$; Unilateral Laplace Transform $X(s) = \\int_0^\\infty x(t) e^{-s t} dt$; Relationship to CTFT ($X(j\\omega) = X(s)|_{s = j\\omega}$ if ROC includes $j\\omega$-axis).",
    "Region of Convergence (ROC) Characteristics: Set of complex values of $s$ for which the Laplace integral converges; ROC consists of strips parallel to $j\\omega$-axis; ROC contains no poles; ROC of right-sided signal is $\\text{Re}(s) > \\sigma_{max}$; ROC of left-sided signal is $\\text{Re}(s) < \\sigma_{min}$; ROC of two-sided signal is a strip $\\sigma_1 < \\text{Re}(s) < \\sigma_2$.",
    "Properties of Laplace Transform: Linearity, Time shifting ($x(t - t_0) u(t - t_0) \\leftrightarrow e^{-s t_0} X(s)$), Frequency shifting ($e^{s_0 t} x(t) \\leftrightarrow X(s - s_0)$), Time scaling ($x(a t) \\leftrightarrow \\frac{1}{|a|} X(s/a)$), Time differentiation ($x'(t) \\leftrightarrow s X(s) - x(0^-)$ for unilateral transform), Time integration ($\\int_0^t x(\\tau) d\\tau \\leftrightarrow \\frac{1}{s} X(s)$).",
    "Convolution Property in s-Domain: Time-domain convolution transforms into s-domain algebraic multiplication: $x(t) * h(t) \\leftrightarrow X(s) H(s)$; System transfer function $H(s) = \\frac{Y(s)}{X(s)}$.",
    "Initial and Final Value Theorems: Initial Value Theorem: $\\lim_{t \\to 0^+} x(t) = \\lim_{s \\to \\infty} s X(s)$ (valid if $x(t)$ contains no impulse at $t=0$); Final Value Theorem: $\\lim_{t \\to \\infty} x(t) = \\lim_{s \\to 0} s X(s)$ (valid if and only if all poles of $s X(s)$ lie strictly in the open left-half s-plane).",
    "Inverse Laplace Transform: Computation via Partial Fraction Expansion (PFE); Simple poles, repeated poles of multiplicity $m$, complex conjugate pole pairs; Contour inversion integral (Bromwich integral).",
    "Poles and Zeros Analysis: Transfer function $H(s) = \\frac{N(s)}{D(s)}$; Pole-zero plot in complex s-plane; Geometric evaluation of frequency response magnitude and phase from pole-zero vectors.",
    "System Causality and Stability in s-Domain: LTI system is causal if and only if its ROC is a right-half plane to the right of the rightmost pole; LTI system is BIBO stable if and only if the ROC includes the $j\\omega$-axis (all poles lie strictly in open left-half plane $\\text{Re}(s) < 0$ for causal systems).",
    "Solution of LCCDE with Initial Conditions: Transforming $n$-th order linear differential equations with initial values $y(0^-), y'(0^-)$ using unilateral Laplace transform; Decomposition into Zero-Input Response (ZIR) and Zero-State Response (ZSR).",
    "University Examination Strategy: Determine ROC and sketch pole-zero constellation diagrams, compute inverse Laplace transforms using partial fraction decomposition, apply initial and final value theorems with validity checks, and solve second-order RLC circuit differential equations."
], [
    "Bilateral Laplace Transform: $X(s) = \\int_{-\\infty}^{\\infty} x(t) e^{-s t} dt$.",
    "Unilateral Differentiation: $\\mathcal{L}\\left\\{\\frac{dx(t)}{dt}\\right\\} = s X(s) - x(0^-)$.",
    "Unilateral Second Derivative: $\\mathcal{L}\\left\\{\\frac{d^2 x(t)}{dt^2}\\right\\} = s^2 X(s) - s x(0^-) - x'(0^-)$.",
    "Initial Value Theorem: $\\lim_{t \\to 0^+} x(t) = \\lim_{s \\to \\infty} s X(s)$.",
    "Final Value Theorem: $\\lim_{t \\to \\infty} x(t) = \\lim_{s \\to 0} s X(s)$ (requires all poles of $s X(s)$ in left-half plane).",
    "Causal Stability Criterion: A causal LTI system is BIBO stable $\\iff$ all poles of $H(s)$ have negative real parts (LHP).",
    "ROC Right-Sided Rule: Right-sided signal $e^{-a t} u(t)$ has $\\text{ROC}: \\text{Re}(s) > -a$.",
    "ROC Left-Sided Rule: Left-sided signal $-e^{-a t} u(-t)$ has $\\text{ROC}: \\text{Re}(s) < -a$.",
    "Frequency Shift Relation: $\\mathcal{L}\\{e^{a t} x(t)\\} = X(s - a)$ with ROC shifted by $\\text{Re}(a)$.",
    "Exam Gold Tip: Always verify that all poles of $s X(s)$ reside strictly in the left half of the s-plane before invoking the Final Value Theorem."
])

add("Signals & Systems", 5, "Z-Transform", [
    "Discrete-Time Z-Transform: Bilateral Z-Transform $X(z) = \\sum_{n=-\\infty}^\\infty x[n] z^{-n}$ where complex variable $z = r e^{j\\Omega}$; Unilateral Z-Transform $X(z) = \\sum_{n=0}^\\infty x[n] z^{-n}$; Relationship to DTFT ($X(e^{j\\Omega}) = X(z)|_{z = e^{j\\Omega}}$ if ROC includes unit circle $|z|=1$).",
    "Region of Convergence (ROC) in Z-Domain: Annular ring in complex $z$-plane ($r_1 < |z| < r_2$); ROC contains no poles; ROC of finite-duration sequence is entire $z$-plane except possibly $z=0$ and/or $z=\\infty$; ROC of right-sided sequence is exterior of circle ($|z| > r_{max}$); ROC of left-sided sequence is interior of circle ($|z| < r_{min}$).",
    "Z-Transform Properties: Linearity, Time shifting ($x[n - k] \\leftrightarrow z^{-k} X(z)$ for bilateral; unilateral includes initial conditions), Scaling in z-domain ($a^n x[n] \\leftrightarrow X(z/a)$), Time reversal ($x[-n] \\leftrightarrow X(z^{-1})$), Differentiation in z-domain ($n x[n] \\leftrightarrow -z \\frac{dX(z)}{dz}$), Convolution in time ($x[n] * h[n] \\leftrightarrow X(z) H(z)$).",
    "Initial and Final Value Theorems for DT Signals: Initial Value Theorem: $x[0] = \\lim_{z \\to \\infty} X(z)$ for causal sequence; Final Value Theorem: $\\lim_{n \\to \\infty} x[n] = \\lim_{z \\to 1} (1 - z^{-1}) X(z)$ (valid if all poles of $(1 - z^{-1}) X(z)$ lie strictly inside the open unit disk $|z| < 1$).",
    "Inverse Z-Transform Methods: (1) Partial Fraction Expansion (expanding $X(z)/z$ in terms of simple poles); (2) Power Series / Long Division method (expanding in descending powers of $z$ for causal sequences); (3) Cauchy Contour Residue method: $x[n] = \\frac{1}{2\\pi j} \\oint_C X(z) z^{n-1} dz$.",
    "LTI System Analysis in Z-Domain: Transfer function $H(z) = \\frac{Y(z)}{X(z)} = \\frac{\\sum_{k=0}^M b_k z^{-k}}{\\sum_{k=0}^N a_k z^{-k}}$; Pole-zero constellations; Frequency response computation along the unit circle $z = e^{j\\Omega}$.",
    "Causality and Stability of Discrete LTI Systems: Discrete LTI system is causal if and only if ROC is the exterior of a circle including $z = \\infty$; Causal LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle ($|p_i| < 1$).",
    "Solution of Linear Difference Equations: Solving $N$-th order linear constant-coefficient difference equations with initial conditions $y[-1], y[-2]$ using unilateral Z-transform; Complete response partitioned into Zero-Input Response (ZIR) and Zero-State Response (ZSR).",
    "Interconnection of Discrete LTI Systems: Cascade connection ($H(z) = H_1(z) H_2(z)$), Parallel connection ($H(z) = H_1(z) + H_2(z)$), Feedback connection ($H(z) = \\frac{H_1(z)}{1 + H_1(z) H_2(z)}$); Direct Form I and Direct Form II realization structures.",
    "University Examination Strategy: Determine ROCs for right-sided, left-sided, and two-sided sequences from identical algebraic $X(z)$ expressions, compute inverse Z-transforms using $X(z)/z$ partial fractions, and solve difference equations representing digital filters."
], [
    "Forward Z-Transform Definition: $X(z) = \\sum_{n=-\\infty}^{\\infty} x[n] z^{-n}$.",
    "Right-Sided Geometric Sequence: $\\mathcal{Z}\\{a^n u[n]\\} = \\frac{1}{1 - a z^{-1}} = \\frac{z}{z - a}$, with $\\text{ROC}: |z| > |a|$.",
    "Left-Sided Geometric Sequence: $\\mathcal{Z}\\{-a^n u[-n-1]\\} = \\frac{1}{1 - a z^{-1}}$, with $\\text{ROC}: |z| < |a|$.",
    "Time Shifting in Z-Domain: $\\mathcal{Z}\\{x[n - k]\\} = z^{-k} X(z)$.",
    "Z-Domain Differentiation Property: $\\mathcal{Z}\\{n x[n]\\} = -z \\frac{d X(z)}{dz}$.",
    "Initial Value Theorem (Discrete): $x[0] = \\lim_{z \\to \\infty} X(z)$ (for causal $x[n]$).",
    "Final Value Theorem (Discrete): $\\lim_{n \\to \\infty} x[n] = \\lim_{z \\to 1} (1 - z^{-1}) X(z)$ (poles inside $|z|<1$).",
    "Discrete Causal Stability Rule: A causal discrete-time system is BIBO stable $\\iff$ all poles of $H(z)$ lie strictly inside the unit circle ($|z| < 1$).",
    "Unit Circle Frequency Mapping: Setting $z = e^{j\\Omega}$ maps the unit circle to the DTFT discrete angular frequency $\\Omega \\in [-\\pi, \\pi]$.",
    "Exam Gold Tip: When calculating inverse Z-transform using partial fractions, always decompose $\\frac{X(z)}{z}$ rather than $X(z)$ directly."
])

# =========================================================================
# 9. CIRCUIT ANALYSIS & SYNTHESIS (B.Tech)
# =========================================================================
add("Circuit Analysis & Synthesis", 1, "Network Theorems", [
    "Fundamental Network Concepts & Graph Theory: Graph, nodes ($n$), branches ($b$); Tree (contains all nodes, no loops, $n-1$ branches), Co-tree (links $l = b - n + 1$); Incidence matrix $A$, Fundamental cut-set matrix $Q_f$, Fundamental tie-set / loop matrix $B_f$; Orthogonality relations ($A B_f^T = 0, Q_f B_f^T = 0$); KCL and KVL formulation.",
    "Mesh and Nodal Analysis: Systematic node voltage method with matrix conductance formulation $[G][V] = [I]$; Supernode analysis for floating independent/dependent voltage sources; Systematic mesh current method $[R][I] = [V]$; Supermesh analysis for shared current sources.",
    "Superposition Theorem: In any linear bilateral active network containing multiple independent sources, the response in any branch is the algebraic sum of the responses caused by each independent source acting alone with all other independent sources deactivated (voltage sources shorted, current sources opened); Dependent sources must NEVER be deactivated.",
    "Thevenin's and Norton's Theorems: Any linear two-terminal active resistive network can be replaced by an equivalent circuit consisting of an open-circuit voltage source $V_{th}$ in series with equivalent resistance $R_{th}$, or a short-circuit current source $I_N$ in parallel with $R_N = R_{th}$; Evaluation of $R_{th}$ with dependent sources using test voltage/current source method ($V_{test} / I_{test}$).",
    "Maximum Power Transfer Theorem: Maximum power delivered to load resistor: $R_L = R_{th}$ for DC circuits ($P_{max} = V_{th}^2 / (4 R_{th})$, efficiency $\\eta = 50\\%$); For AC circuits with variable complex load: $Z_L = Z_{th}^* = R_{th} - j X_{th}$ (complex conjugate match, $P_{max} = \\frac{|V_{th}|^2}{4 R_{th}}$); Load with variable resistance only: $R_L = |Z_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}$.",
    "Reciprocity Theorem: In any linear bilateral passive network, the ratio of excitation to response is constant when positions of excitation and response are interchanged: $\\frac{I_2}{V_1} = \\frac{I_1}{V_2}$ (transfer admittance) or $\\frac{V_2}{I_1} = \\frac{V_1}{I_2}$ (transfer impedance); Invalid in circuits containing dependent sources.",
    "Millman's Theorem: Parallel combination of $n$ voltage sources with internal impedances ($V_1, Y_1; V_2, Y_2; \\dots$) reduces to single equivalent voltage source $V_{eq} = \\frac{\\sum V_k Y_k}{\\sum Y_k}$ in series with $Z_{eq} = 1 / \\sum Y_k$; Dual formulation for series current sources.",
    "Tellegen's Theorem: In any lumped network with arbitrary linear or non-linear, time-invariant or time-varying, passive or active elements, the algebraic sum of powers delivered to all branches is zero at every instant of time: $\\sum_{k=1}^b v_k(t) i_k(t) = 0$; Quasi-Tellegen theorem across two networks with identical topology.",
    "Substitution and Compensation Theorems: Substitution Theorem: Any branch in an active network carrying known current $I$ and voltage $V$ can be replaced by an independent source of value $V$ or $I$ without altering branch variables elsewhere; Compensation Theorem: If resistance of a branch changes by $\\Delta R$, change in current in any branch equals current produced by compensating voltage source $V_c = -I \\Delta R$.",
    "University Examination Strategy: Solve networks with multiple dependent sources using test-source method for $R_{th}$, calculate maximum power transferred to complex load impedances, apply Tellegen's theorem to verify conservation of energy, and formulate tie-set schedule matrices."
], [
    "Network Tree Branch Count: Number of tree branches (twigs) is exactly $n - 1$, where $n$ is node count.",
    "Network Link Count: Number of chords (links) is $l = b - n + 1$, where $b$ is branch count.",
    "Thevenin Equivalent Resistance with Dependent Sources: $R_{th} = \\frac{V_{test}}{I_{test}}$ with all independent sources set to zero.",
    "Norton Current Formula: $I_N = I_{sc} = \\frac{V_{th}}{R_{th}}$.",
    "Maximum Power Transfer (Complex Conjugate): $Z_L = Z_{th}^* = R_{th} - j X_{th}$.",
    "Maximum Power Delivered: $P_{max} = \\frac{|V_{th}|^2}{4 R_{th}}$.",
    "Pure Resistive Load AC Match: $R_L = |Z_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}$.",
    "Tellegen's Theorem Invariant: $\\sum_{k=1}^b v_k i_k = 0$ (holds for ANY element types).",
    "Millman's Equivalent Voltage: $V_{eq} = \\frac{\\sum_{k=1}^m V_k G_k}{\\sum_{k=1}^m G_k}$.",
    "Exam Gold Tip: In Superposition theorem, never deactivate dependent sources; leave them fully intact while cycling through independent sources."
])

add("Circuit Analysis & Synthesis", 2, "Transient Analysis", [
    "Initial and Final Conditions in Circuit Elements: Continuity of state variables: Capacitor voltage cannot change instantaneously ($v_C(0^+) = v_C(0^-)$, equivalent to independent voltage source or short circuit at $t=0^+$ if uncharged); Inductor current cannot change instantaneously ($i_L(0^+) = i_L(0^-)$, equivalent to independent current source or open circuit at $t=0^+$ if uncharged); Steady-state DC behavior: capacitor acts as open circuit, inductor acts as short circuit.",
    "First-Order RC and RL Transients: Source-free natural response and step forced response; Time constant $\\tau$: for $RC$ circuits $\\tau = R_{eq} C$, for $RL$ circuits $\\tau = L / R_{eq}$; General transient response equation: $x(t) = x(\\infty) + [x(0^+) - x(\\infty)] e^{-t / \\tau}$; Rise time and settling time.",
    "Second-Order Series and Parallel RLC Circuits: Characteristic equation $s^2 + 2\\alpha s + \\omega_0^2 = 0$; Series RLC: attenuation $\\alpha = \\frac{R}{2L}$, undamped natural frequency $\\omega_0 = \\frac{1}{\\sqrt{LC}}$; Parallel RLC: $\\alpha = \\frac{1}{2RC}$, $\\omega_0 = \\frac{1}{\\sqrt{LC}}$; Damping ratio $\\zeta = \\frac{\\alpha}{\\omega_0}$.",
    "Transient Response Regimes in RLC Circuits: (1) Overdamped ($\\zeta > 1, \\alpha > \\omega_0$): two distinct negative real roots, sluggish exponential decay without oscillation; (2) Critically Damped ($\\zeta = 1, \\alpha = \\omega_0$): repeated real roots, fastest return to equilibrium without overshoot; (3) Underdamped ($\\zeta < 1, \\alpha < \\omega_0$): complex conjugate roots, decaying sinusoidal oscillation at damped frequency $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$.",
    "Laplace Transform in Transient Circuit Analysis: Transformation of circuit elements into s-domain: Resistor ($R$), Inductor ($s L$ in series with initial condition voltage source $L i_L(0^-)$ or parallel current source $i_L(0^-)/s$), Capacitor ($1/(s C)$ in series with initial condition voltage source $v_C(0^-)/s$ or parallel current source $C v_C(0^-)$).",
    "Transient Solutions via s-Domain Impedances: Formulation of mesh and nodal algebraic equations directly in s-domain; Evaluation of complete response including initial conditions; Separation into zero-input response (ZIR) and zero-state response (ZSR).",
    "Impulse and Step Response of Second-Order Systems: Unit impulse response $h(t)$ as time derivative of step response; Transient specifications: Delay time $t_d$, Rise time $t_r = \\frac{\\pi - \\beta}{\\omega_d}$, Peak time $t_p = \\frac{\\pi}{\\omega_d}$, Maximum percentage overshoot $M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$, Settling time $t_s = \\frac{4}{\\alpha} = \\frac{4}{\\zeta \\omega_0}$ (2% tolerance band).",
    "State Variable Analysis of Electrical Networks: Selection of state variables (capacitor voltages and inductor currents); Formulation of standard state-space equations: $\\dot{x}(t) = A x(t) + B u(t)$, $y(t) = C x(t) + D u(t)$; State transition matrix $\\Phi(t) = e^{A t} = \\mathcal{L}^{-1}\\{(s I - A)^{-1}\\}$.",
    "Pulse and Periodic Waveform Excitation: Response of $RC$ and $RL$ circuits to rectangular pulses; Pulse integrator circuit condition ($R C \\gg T_p$) and differentiator circuit condition ($R C \\ll T_p$); Response to square, triangular, and periodic ramp inputs using Laplace transform.",
    "University Examination Strategy: Determine initial conditions $v_C(0^+), i_L(0^+), \\frac{dv_C}{dt}(0^+), \\frac{di_L}{dt}(0^+)$ across sudden switching operations, solve underdamped series RLC second-order differential equations, and evaluate state transition matrices $\\Phi(t)$."
], [
    "Capacitor Instantaneous Invariant: $v_C(0^+) = v_C(0^-)$ (charge cannot jump without infinite current).",
    "Inductor Instantaneous Invariant: $i_L(0^+) = i_L(0^-)$ (flux linkage cannot jump without infinite voltage).",
    "Universal First-Order Formula: $x(t) = x(\\infty) + [x(0^+) - x(\\infty)] e^{-t/\\tau}$.",
    "Series RLC Characteristic Roots: $s_{1, 2} = -\\alpha \\pm \\sqrt{\\alpha^2 - \\omega_0^2}$, where $\\alpha = \\frac{R}{2L}, \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
    "Damped Natural Frequency: $\\omega_d = \\omega_0 \\sqrt{1 - \\zeta^2}$.",
    "Percentage Maximum Overshoot: $M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
    "Settling Time (2% Criterion): $t_s = \\frac{4}{\\zeta \\omega_0} = \\frac{4}{\\alpha}$.",
    "Inductor s-Domain Model: Impedance $s L$ with series opposing voltage source $L i_L(0^-)$.",
    "Capacitor s-Domain Model: Impedance $\\frac{1}{s C}$ with series aiding voltage source $\\frac{v_C(0^-)}{s}$.",
    "Exam Gold Tip: At $t = 0^+$, replace capacitors with dc voltage sources of value $v_C(0^-)$ and inductors with dc current sources of value $i_L(0^-)$ to solve immediate initial derivatives."
])

add("Circuit Analysis & Synthesis", 3, "AC Analysis", [
    "Sinusoidal Steady-State Concepts & Phasors: Sinusoidal excitation $v(t) = V_m \\cos(\\omega t + \\phi)$; Phasor representation $\\mathbf{V} = V_{rms} \\angle \\phi$; Frequency domain circuit analysis; Impedance $\\mathbf{Z} = R + j X$ and Admittance $\\mathbf{Y} = G + j B$; Element phasor relationships: Resistor (in-phase), Inductor (current lags voltage by $90^\\circ$), Capacitor (current leads voltage by $90^\\circ$).",
    "AC Power Analysis: Instantaneous power $p(t) = v(t) i(t) = P [1 + \\cos(2\\omega t)] - Q \\sin(2\\omega t)$; Real / Active Power $P = V_{rms} I_{rms} \\cos\\theta$ in Watts ($W$); Reactive Power $Q = V_{rms} I_{rms} \\sin\\theta$ in Volt-Amperes Reactive ($VAR$); Apparent Power $S = V_{rms} I_{rms}$ in Volt-Amperes ($VA$); Complex Power $\\mathbf{S} = \\mathbf{V} \\mathbf{I}^* = P + j Q$.",
    "Power Factor & Power Factor Correction: Power Factor $PF = \\cos\\theta = P / S$ (lagging for inductive load, leading for capacitive load); Economic and operational consequences of low PF; Power factor improvement using parallel shunt capacitor banks: $Q_C = P [\\tan\\theta_1 - \\tan\\theta_2]$, $C = \\frac{P [\\tan\\theta_1 - \\tan\\theta_2]}{\\omega V_{rms}^2}$.",
    "Series Resonance: Condition of zero net reactance ($X_L = X_C$); Resonant frequency $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ ($f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$); Minimum impedance $\\mathbf{Z}(\\omega_0) = R$; Maximum current $I_0 = V / R$; Voltage magnification across $L$ and $C$: $V_L = V_C = Q V$; Quality factor $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.",
    "Series Resonance Selectivity & Bandwidth: Half-power frequencies $\\omega_1, \\omega_2 = \\omega_0 \\pm \\frac{R}{2L}$; Bandwidth $BW = \\Delta\\omega = \\omega_2 - \\omega_1 = \\frac{R}{L}$; Quality factor relation: $Q = \\frac{\\omega_0}{BW}$; Geometric symmetry: $\\omega_0 = \\sqrt{\\omega_1 \\omega_2}$.",
    "Parallel Resonance (Anti-Resonance): Practical tank circuit (inductor with winding resistance $R$ in parallel with ideal capacitor $C$); Resonant frequency $\\omega_r = \\sqrt{\\frac{1}{LC} - \\frac{R^2}{L^2}}$; Maximum dynamic impedance at resonance $Z_{dyn} = \\frac{L}{C R}$; Quality factor $Q_p = \\frac{\\omega_0 L}{R}$; Current magnification across reactive branches ($I_C = I_L \\approx Q I$).",
    "Coupled Circuits & Mutual Inductance: Self-inductance ($L_1, L_2$) and Mutual inductance ($M = k\\sqrt{L_1 L_2}$); Coupling coefficient $k$ ($0 \\le k \\le 1$); Dot convention rules for establishing mutual voltage polarity; Dot-rule: when currents enter dotted terminals of both coils, mutual voltage terms have positive sign aiding self-induced voltages.",
    "Analysis of Magnetically Coupled Coils: Series aiding ($L_{eq} = L_1 + L_2 + 2M$) and Series opposing ($L_{eq} = L_1 + L_2 - 2M$); Measurement of mutual inductance: $M = \\frac{L_{aiding} - L_{opposing}}{4}$; Parallel aiding and parallel opposing connections; Conductively coupled equivalent T-networks.",
    "Linear and Ideal Transformers: Reflected impedance from secondary to primary in linear transformer: $Z_{in} = Z_1 + \\frac{\\omega^2 M^2}{Z_2 + Z_L}$; Ideal transformer equations: $\\frac{V_2}{V_1} = \\frac{N_2}{N_1} = n$, $\\frac{I_1}{I_2} = \\frac{N_2}{N_1} = n$, input impedance $Z_{in} = \\frac{Z_L}{n^2}$.",
    "University Examination Strategy: Solve AC mesh circuits in phasor domain with coupled inductors using dot convention, design power factor correction capacitor values, and derive bandwidth and quality factor relations for series and practical parallel resonant circuits."
], [
    "Complex Power Equation: $\\mathbf{S} = \\mathbf{V}_{rms} \\mathbf{I}_{rms}^* = P + j Q$.",
    "Power Factor Angle: $\\theta = \\phi_v - \\phi_i$; $PF = \\cos\\theta$.",
    "PF Correction Capacitance: $C = \\frac{P(\\tan\\theta_1 - \\tan\\theta_2)}{\\omega V_{rms}^2}$.",
    "Series Resonant Frequency: $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ rad/s.",
    "Series Quality Factor: $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.",
    "Series Resonant Bandwidth: $BW = \\frac{\\omega_0}{Q} = \\frac{R}{L}$ rad/s.",
    "Dynamic Impedance (Tank Circuit): $Z_{dyn} = \\frac{L}{C R}$ (purely resistive at resonance).",
    "Series Aiding vs Opposing Inductance: $L_{aid} = L_1 + L_2 + 2M$, $L_{opp} = L_1 + L_2 - 2M$.",
    "Mutual Inductance Determination: $M = \\frac{L_{aid} - L_{opp}}{4}$.",
    "Exam Gold Tip: In mutual inductance, if a current enters a dotted terminal of one coil, it induces an open-circuit voltage on the other coil that is positive at its dotted terminal."
])

add("Circuit Analysis & Synthesis", 4, "Two-Port Networks", [
    "Two-Port Network Fundamentals: Port convention (Port 1: $V_1, I_1$ entering; Port 2: $V_2, I_2$ entering); Linear passive bilateral networks without internal independent sources; Four terminal vs two-port restrictions ($I_1 = I_1', I_2 = I_2'$).",
    "Impedance ($Z$) Parameters: Open-circuit parameters: $V_1 = Z_{11} I_1 + Z_{12} I_2$, $V_2 = Z_{21} I_1 + Z_{22} I_2$; Evaluation under open-circuit conditions ($I_2 = 0$ or $I_1 = 0$); Reciprocity condition: $Z_{12} = Z_{21}$; Symmetry condition: $Z_{11} = Z_{22}$; T-equivalent circuit representation.",
    "Admittance ($Y$) Parameters: Short-circuit parameters: $I_1 = Y_{11} V_1 + Y_{12} V_2$, $I_2 = Y_{21} V_1 + Y_{22} V_2$; Evaluation under short-circuit conditions ($V_2 = 0$ or $V_1 = 0$); Reciprocity condition: $Y_{12} = Y_{21}$; Symmetry condition: $Y_{11} = Y_{22}$; $\\pi$-equivalent circuit representation; Relationship: $[Y] = [Z]^{-1}$.",
    "Transmission ($ABCD$) Parameters: Cascade / Chain parameters relating input variables to inverted output variables: $V_1 = A V_2 - B I_2$, $I_1 = C V_2 - D I_2$; Evaluation: $A = \\left.\\frac{V_1}{V_2}\\right|_{I_2 = 0}$, $B = \\left.\\frac{-V_1}{I_2}\\right|_{V_2 = 0}$, $C = \\left.\\frac{I_1}{V_2}\\right|_{I_2 = 0}$, $D = \\left.\\frac{-I_1}{I_2}\\right|_{V_2 = 0}$; Reciprocity condition: $A D - B C = 1$; Symmetry condition: $A = D$.",
    "Hybrid ($h$) Parameters: Mixed terminal variables commonly used for transistors: $V_1 = h_{11} I_1 + h_{12} V_2$, $I_2 = h_{21} I_1 + h_{22} V_2$; Reciprocity condition: $h_{12} = -h_{21}$; Symmetry condition: $\\Delta h = h_{11} h_{22} - h_{12} h_{21} = 1$; Inverse hybrid ($g$) parameters.",
    "Inter-Parameter Conversions: Mathematical transformation matrix between $[Z], [Y], [ABCD]$, and $[h]$ parameter sets (e.g. $Z_{11} = A/C, Z_{12} = (AD - BC)/C, Z_{21} = 1/C, Z_{22} = D/C$).",
    "Interconnection of Two-Port Networks: (1) Series-Series connection: overall impedance matrix adds: $[Z] = [Z_A] + [Z_B]$; (2) Parallel-Parallel connection: overall admittance matrix adds: $[Y] = [Y_A] + [Y_B]$; (3) Cascade connection: overall transmission matrix multiplies: $[T] = [T_A] [T_B]$; Brune's test for validity of interconnections.",
    "Terminated Two-Port Networks: Input impedance with load $Z_L$: $Z_{in} = Z_{11} - \\frac{Z_{12} Z_{21}}{Z_{22} + Z_L} = \\frac{A Z_L + B}{C Z_L + D}$; Output impedance with source impedance $Z_s$: $Z_{out} = Z_{22} - \\frac{Z_{12} Z_{21}}{Z_{11} + Z_s} = \\frac{D Z_s + B}{C Z_s + A}$; Voltage gain $A_v = V_2 / V_1$; Current gain $A_i = -I_2 / I_1$.",
    "Image Parameters & Characteristic Impedance: Image impedances $Z_{i1}, Z_{i2}$ such that port is matched to input/output terminations; For symmetrical networks ($A=D$), characteristic impedance $Z_0 = \\sqrt{B / C} = \\sqrt{Z_{oc} Z_{sc}}$; Image propagation constant $\\gamma = \\alpha + j\\beta = \\cosh^{-1}\\sqrt{A D}$.",
    "University Examination Strategy: Determine $Z, Y, ABCD$, and $h$ parameters for resistive bridge and ladder networks, verify reciprocity ($Z_{12}=Z_{21}, AD-BC=1$), compute overall parameters for cascaded networks via matrix multiplication, and calculate input impedance of terminated networks."
], [
    "Z-Parameter Equations: $V_1 = Z_{11} I_1 + Z_{12} I_2$ and $V_2 = Z_{21} I_1 + Z_{22} I_2$.",
    "Y-Parameter Equations: $I_1 = Y_{11} V_1 + Y_{12} V_2$ and $I_2 = Y_{21} V_1 + Y_{22} V_2$.",
    "ABCD Transmission Equations: $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
    "ABCD Reciprocity Condition: $A D - B C = 1$.",
    "ABCD Symmetry Condition: $A = D$.",
    "h-Parameter Reciprocity: $h_{12} = -h_{21}$.",
    "Cascade Connection Rule: $[T]_{total} = [T_A] \\times [T_B]$ (matrix multiplication).",
    "Terminated Input Impedance: $Z_{in} = \\frac{A Z_L + B}{C Z_L + D}$.",
    "Symmetrical Characteristic Impedance: $Z_0 = \\sqrt{Z_{oc} Z_{sc}} = \\sqrt{\\frac{B}{C}}$.",
    "Exam Gold Tip: In ABCD parameters, notice the negative sign in front of $I_2$, because $I_2$ is defined as leaving Port 2 into the load."
])

add("Circuit Analysis & Synthesis", 5, "Network Synthesis", [
    "Positive Real (PR) Functions: Definition: A complex function $F(s)$ is Positive Real if: (1) $F(s)$ is real when $s$ is real ($F(\\sigma) \\in \\mathbb{R}$); (2) $\\text{Re}\\{F(s)\\} \\ge 0$ whenever $\\text{Re}\\{s\\} \\ge 0$; Necessary and sufficient testing criteria: (a) $F(s)$ has no poles or zeros in right-half $s$-plane; (b) Poles on $j\\omega$-axis are simple with real and positive residues; (c) $\\text{Re}\\{F(j\\omega)\\} \\ge 0$ for all $\\omega \\in [0, \\infty)$.",
    "Hurwitz Polynomials: Polynomial $P(s)$ is Hurwitz if all its roots have negative real parts ($\\{s \\mid P(s)=0\\} \\subset \\text{LHP}$); Continued fraction expansion of $M(s)/N(s)$ (even and odd parts) must yield all positive quotient coefficients; Removal of common factors for strictly Hurwitz testing.",
    "Properties of LC Immittance Functions: Driving-point functions of lossless $LC$ networks; $Z(s)$ or $Y(s)$ is the ratio of odd-to-even or even-to-odd polynomials; All poles and zeros are simple, lie strictly on $j\\omega$-axis, and alternate (interlace property); $\\frac{dZ(j\\omega)}{d\\omega} > 0$ (Foster's Reactance Theorem: slope of reactance curve is strictly positive everywhere).",
    "LC Synthesis — Foster Forms: (1) Foster I Form: Partial fraction expansion of $Z_{LC}(s)$: $Z(s) = \\frac{k_0}{s} + \\sum \\frac{2 k_i s}{s^2 + \\omega_i^2} + k_\\infty s$, realized as series connection of capacitor $C_0 = 1/k_0$, inductor $L_\\infty = k_\\infty$, and parallel $L_i-C_i$ antiresonant tanks; (2) Foster II Form: Partial fraction expansion of $Y_{LC}(s)$, realized as parallel connection of inductor $L_0$, capacitor $C_\\infty$, and series $L_i-C_i$ resonant branches.",
    "LC Synthesis — Cauer Forms: Continued fraction expansion of $Z_{LC}(s)$; (1) Cauer I Form: Repeated removal of poles at $s = \\infty$ by dividing polynomials in descending powers of $s$; Ladder network of alternating series inductors and shunt capacitors; (2) Cauer II Form: Repeated removal of poles at $s = 0$ by dividing polynomials in ascending powers of $s$; Ladder network of series capacitors and shunt inductors.",
    "Properties of RC Impedance and RL Admittance Functions: Poles and zeros lie strictly on negative real axis, are simple, and alternate; For $Z_{RC}(s)$: singularity nearest origin is a pole, singularity nearest $-\\infty$ is a zero, $Z(0) > Z(\\infty)$; Residues of poles of $Z_{RC}(s)$ are real and positive.",
    "RC and RL Synthesis — Foster Forms: Foster I RC: Partial fraction expansion of $Z_{RC}(s) = \\frac{k_0}{s} + k_\\infty + \\sum \\frac{k_i}{s + \\sigma_i}$ (series combination of capacitor $C_0$, resistor $R_\\infty$, and parallel $R_i-C_i$ blocks); Foster II RC: Partial fraction expansion of $\\frac{Y_{RC}(s)}{s}$, realized as parallel combination of conductance $G_0$, capacitor $C_\\infty$, and series $R_i-C_i$ branches.",
    "RC and RL Synthesis — Cauer Forms: Cauer I RC: Continued fraction expansion in descending powers of $s$; Ladder network of alternating series resistors and shunt capacitors; Cauer II RC: Continued fraction expansion in ascending powers of $s$; Ladder network of alternating series capacitors and shunt resistors.",
    "Two-Port Network Synthesis Basics: Transfer function synthesis; Zeroes of transmission (ZOT); Synthesis of constant-resistance lattices and symmetrical bridged-T networks; Darlington's synthesis method (realizing arbitrary PR function as resistively terminated lossless LC two-port network).",
    "University Examination Strategy: Test whether rational functions are Positive Real, synthesize driving point immittances into Foster I, Foster II, Cauer I, and Cauer II canonical forms with exact component value labeling, and expand Hurwitz polynomials using continued fractions."
], [
    "Positive Real Core Criterion: $\\text{Re}\\{F(s)\\} \\ge 0$ for all $\\text{Re}\\{s\\} \\ge 0$.",
    "Foster Reactance Theorem: $\\frac{dX(\\omega)}{d\\omega} > 0$ (reactance strictly increases with frequency).",
    "LC Singularity Alternation: Poles and zeros strictly alternate along the $j\\omega$-axis.",
    "Foster I LC Network: Series connection of $C_0$, $L_\\infty$, and parallel $L_i C_i$ tanks.",
    "Foster II LC Network: Parallel connection of $L_0$, $C_\\infty$, and series $L_i C_i$ branches.",
    "Cauer I Ladder: Continued fraction expansion around $s = \\infty$ (descending powers of $s$).",
    "Cauer II Ladder: Continued fraction expansion around $s = 0$ (ascending powers of $s$).",
    "RC Impedance Singularity Order: Origin $\\to$ Pole $\\to$ Zero $\\to$ Pole $\\to$ Zero $\\dots$ on negative real axis.",
    "RL Impedance Singularity Order: Origin $\\to$ Zero $\\to$ Pole $\\to$ Zero $\\to$ Pole $\\dots$ on negative real axis.",
    "Exam Gold Tip: For Cauer I synthesis, write polynomials in descending powers of $s$; for Cauer II, write polynomials in ascending powers of $s$."
])

# Save updated batch 2
with open('scripts/sem3_btech_batch2_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 2 part 3 complete: total units now: {len(data)}")
