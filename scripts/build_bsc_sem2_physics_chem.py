import json
import os

data = {}

def add_unit(key, highlights, keypoints):
    assert len(highlights) == 10, f"Unit {key} highlights count is {len(highlights)}"
    assert len(keypoints) == 10, f"Unit {key} keypoints count is {len(keypoints)}"
    data[key] = {
        "highlights": highlights,
        "keyPoints": keypoints
    }

# =========================================================================
# 1. WAVES & OPTICS (B.Sc Physics Sem 2)
# =========================================================================

add_unit(
    "bsc-ph-wo: wave equation",
    [
        "Classical Wave Equation in 1D: Second-order PDE $\\frac{\\partial^2 y}{\\partial t^2} = v^2 \\frac{\\partial^2 y}{\\partial x^2}$; Derived from Newton's second law on elastic string with tension $T$ and linear mass density $\\mu$: $v = \\sqrt{T/\\mu}$.",
        "D'Alembert's Traveling Wave Solution: General solution $y(x, t) = f(x - v t) + g(x + v t)$; $f(x - v t)$ represents right-propagating forward wave, $g(x + v t)$ represents left-propagating backward wave.",
        "Harmonic Plane Waves: Sinusoidal wave profile $y(x, t) = A \\sin(k x - \\omega t + \\phi)$; Wave number $k = 2\\pi/\\lambda$, angular frequency $\\omega = 2\\pi f$; Phase velocity $v_p = \\omega/k$.",
        "Energy Density in Traveling Waves: Kinetic energy density $u_k = \\frac{1}{2}\\mu \\left(\\frac{\\partial y}{\\partial t}\\right)^2$; Potential energy density $u_p = \\frac{1}{2}T \\left(\\frac{\\partial y}{\\partial x}\\right)^2$; Total average energy density $\\langle u \\rangle = \\frac{1}{2}\\mu \\omega^2 A^2$.",
        "Acoustic Waves in Fluid Media: Governing wave equation $\\frac{\\partial^2 s}{\\partial t^2} = \\frac{B}{\\rho} \\frac{\\partial^2 s}{\\partial x^2}$; Bulk modulus $B = -V \\frac{dP}{dV}$; Laplace adiabatic correction $v = \\sqrt{\\frac{\\gamma P}{\\rho}}$ where $\\gamma = C_p/C_v$.",
        "Characteristic Wave Impedance: Ratio of driving force to particle velocity: $Z_0 = \\rho v$; Lossless mechanical impedance for string $Z_0 = \\sqrt{T \\mu}$; Determines reflection at boundary interfaces.",
        "Boundary Reflection & Transmission: Amplitude reflection coefficient $r = \\frac{Z_1 - Z_2}{Z_1 + Z_2}$; Transmission coefficient $t = \\frac{2 Z_1}{Z_1 + Z_2}$; Fixed boundary ($Z_2 \\to \\infty$) produces $180^\\circ$ ($\\pi$ radians) phase inversion.",
        "Standing Waves & Normal Modes: Superposition of counter-propagating equal waves: $y(x, t) = 2 A \\sin(k x) \\cos(\\omega t)$; Nodes at $x = n \\frac{\\lambda}{2}$ (zero motion); Antinodes at $x = (2n + 1)\\frac{\\lambda}{4}$ (maximum excursion).",
        "Wave Packets & Group Velocity: Superposition of frequencies across bandwidth $\\Delta \\omega$; Group velocity $v_g = \\frac{d\\omega}{dk} = v_p + k \\frac{dv_p}{dk}$ (Rayleigh equation); Normal dispersion ($dv_p/d\\lambda > 0 \\implies v_g < v_p$) vs anomalous dispersion.",
        "Doppler Effect in Acoustic Waves: Observed frequency $f' = f_0 \\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)$; Upper signs indicate mutual approach, lower signs indicate mutual recession."
    ],
    [
        "Wave Speed on String: $v = \\sqrt{T/\\mu}$.",
        "Phase Velocity Formula: $v_p = \\frac{\\omega}{k}$.",
        "Group Velocity Formula: $v_g = \\frac{d\\omega}{dk}$.",
        "Adiabatic Sound Speed: $v = \\sqrt{\\frac{\\gamma P}{\\rho}}$ (Laplace corrected).",
        "Reflection at Fixed End: $\\pi$ phase reversal ($r = -1$).",
        "Standing Wave Node Spacing: Consecutive nodes separated by $\\lambda/2$.",
        "Average Wave Power: $\\langle P \\rangle = \\frac{1}{2}\\mu v \\omega^2 A^2$.",
        "Rayleigh Dispersion Relation: $v_g = v_p - \\lambda \\frac{dv_p}{d\\lambda}$.",
        "Doppler Shift Formula: $f' = f_0 \\frac{v \\pm v_o}{v \\mp v_s}$.",
        "Exam Tip: In sound speed calculations, Newton's isothermal formula underestimated speed by $\\approx 15\\%$; always apply Laplace's adiabatic factor $\\gamma = 1.4$ for air."
    ]
)

add_unit(
    "bsc-ph-wo: superposition",
    [
        "Principle of Linear Superposition: When two or more waves traverse a linear medium simultaneously, the resultant displacement is the algebraic sum of individual wave displacements: $y(x, t) = \\sum y_i(x, t)$.",
        "Superposition of Collinear Waves with Equal Frequency: Resultant amplitude $R = \\sqrt{a_1^2 + a_2^2 + 2 a_1 a_2 \\cos\\delta}$; Phase angle $\\tan\\theta = \\frac{a_1 \\sin\\phi_1 + a_2 \\sin\\phi_2}{a_1 \\cos\\phi_1 + a_2 \\cos\\phi_2}$; Constructive when $\\delta = 2n\\pi$, destructive when $\\delta = (2n+1)\\pi$.",
        "Beats Phenomenon (Slightly Differing Frequencies): Superposition of $y_1 = a \\sin(\\omega_1 t)$ and $y_2 = a \\sin(\\omega_2 t)$; Modulated waveform $y(t) = 2 a \\cos\\left(\\frac{\\omega_1 - \\omega_2}{2} t\\right) \\sin\\left(\\frac{\\omega_1 + \\omega_2}{2} t\\right)$; Beat frequency $f_{beat} = |f_1 - f_2|$.",
        "Lissajous Figures (Mutually Orthogonal Oscillations): Particle subjected to perpendicular SHMs $x = a \\sin(\\omega_1 t + \\delta)$ and $y = b \\sin(\\omega_2 t)$; Frequency ratio $1:1$ yields ellipse $\\frac{x^2}{a^2} - \\frac{2 x y}{a b}\\cos\\delta + \\frac{y^2}{b^2} = \\sin^2\\delta$.",
        "Special Cases of 1:1 Lissajous Figures: $\\delta = 0$ yields straight line $y = (b/a) x$; $\\delta = \\pi$ yields straight line $y = -(b/a) x$; $\\delta = \\pi/2$ with $a = b$ yields circle $x^2 + y^2 = a^2$.",
        "Lissajous Frequency Ratio Determinations: Tangent counting method: $\\frac{\\omega_x}{\\omega_y} = \\frac{\\text{Tangents to vertical boundary}}{\\text{Tangents to horizontal boundary}}$; Used in CRO oscilloscopes for frequency calibration.",
        "Fourier Synthesis of Complex Waveforms: Any periodic wave $f(t) = f(t + T)$ decomposed into harmonic Fourier series: $f(t) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty [a_n \\cos(n \\omega t) + b_n \\sin(n \\omega t)]$.",
        "Fourier Coefficients Evaluation: $a_n = \\frac{2}{T}\\int_0^T f(t) \\cos(n \\omega t) dt$; $b_n = \\frac{2}{T}\\int_0^T f(t) \\sin(n \\omega t) dt$; Square wave contains only odd harmonics ($1/n$).",
        "Gibbs Phenomenon at Discontinuities: Truncated Fourier series overshoots sharp jump discontinuity by approximately $8.95\\%$ (Wilbraham-Gibbs overshoot), regardless of number of harmonic terms summed.",
        "Plancherel / Parseval Theorem in Superposition: Total energy of wave equals sum of energies of its individual Fourier components: $\\frac{1}{T}\\int_0^T [f(t)]^2 dt = \\frac{a_0^2}{4} + \\frac{1}{2}\\sum (a_n^2 + b_n^2)$."
    ],
    [
        "Resultant Amplitude Formula: $R^2 = a_1^2 + a_2^2 + 2 a_1 a_2 \\cos\\delta$.",
        "Beat Frequency: $f_{beat} = |f_1 - f_2|$.",
        "Orthogonal Ellipse Equation: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{2 x y}{a b}\\cos\\delta = \\sin^2\\delta$.",
        "Circular Motion Condition: $\\delta = \\pi/2$ and $a = b$ in orthogonal SHM.",
        "Lissajous Frequency Rule: $\\frac{f_x}{f_y} = \\frac{\\text{Number of horizontal tangencies}}{\\text{Number of vertical tangencies}}$.",
        "Constructive Interference Condition: $\\delta = 2 n \\pi \\implies I_{max} = (a_1 + a_2)^2$.",
        "Destructive Interference Condition: $\\delta = (2n + 1)\\pi \\implies I_{min} = (a_1 - a_2)^2$.",
        "Square Wave Harmonics: $f(t) = \\frac{4 A}{\\pi} \\sum_{n=1,3,5} \\frac{\\sin(n \\omega t)}{n}$.",
        "Gibbs Overshoot Magnitude: Approximately $9\\%$ overshoot at step discontinuities.",
        "Exam Tip: In CRO Lissajous figure questions, count the points where the curve touches the top edge and the right edge to find the frequency ratio."
    ]
)

add_unit(
    "bsc-ph-wo: interference",
    [
        "Optical Coherence Criteria: Sustained observable interference requires: (1) Monochromatic sources (equal $\\lambda$); (2) Constant phase difference (temporal and spatial coherence); (3) Close proximity; (4) Equal or comparable amplitudes ($a_1 \\approx a_2$).",
        "Young's Double Slit Experiment (YDSE): Wavefront splitting; Path difference $\\Delta x = \\frac{x d}{D}$; Fringe width $\\beta = \\frac{\\lambda D}{d}$; Equal spacing for bright and dark fringes.",
        "Fresnel's Biprism Experiment: Wavefront division using obtuse prism ($179^\\circ$ angle); Produces two coherent virtual slit sources separated by $d = 2 d_1 (\\mu - 1) \\alpha$; Wavelength $\\lambda = \\frac{\\beta d}{D}$; Slit separation $d$ measured via displacement method $d = \\sqrt{d_1 d_2}$.",
        "Lloyd's Mirror Single-Mirror Interference: Produces interference between direct wave and reflected wave; Reflection introduces $\\pi$ phase shift (half-wave $\\lambda/2$ path difference); Central fringe is dark instead of bright.",
        "Interference in Thin Dielectric Films: Division of amplitude; Reflected light path difference $\\Delta = 2 \\mu t \\cos r - \\frac{\\lambda}{2}$ (Stokes' treatment for phase change on reflection); Constructive condition $2 \\mu t \\cos r = (2n + 1)\\frac{\\lambda}{2}$.",
        "Transmitted Light Interference in Films: Path difference $\\Delta = 2 \\mu t \\cos r$; Constructive condition $2 \\mu t \\cos r = n \\lambda$; Strictly complementary to reflected fringe pattern.",
        "Wedge-Shaped Thin Films: Film of linearly increasing thickness with angle $\\theta$; Straight parallel localized fringes; Fringe width $\\beta = \\frac{\\lambda}{2 \\mu \\theta}$; Testing optical surface flatness.",
        "Newton's Rings by Reflected Light: Interference in air film between plano-convex lens of radius $R$ and flat glass plate; Circular concentric fringes; Diameter of $n$-th dark ring: $D_n^2 = 4 n R \\lambda$; Central spot is dark.",
        "Determination of Wavelength & Refractive Index: Wavelength $\\lambda = \\frac{D_{n+m}^2 - D_n^2}{4 m R}$; Liquid film introduced between lens and plate shrinks ring diameters: $\\mu = \\frac{(D_{n+m}^2 - D_n^2)_{air}}{(D_{n+m}^2 - D_n^2)_{liquid}}$.",
        "Michelson Interferometer: Amplitude-splitting device using semi-silvered beam splitter and two perpendicular mirrors ($M_1, M_2$); Mirror displacement $d$ shifts $N$ fringes: $\\lambda = \\frac{2 d}{N}$; Resolving doublet spectral lines $\\Delta \\lambda = \\frac{\\lambda^2}{2 \\Delta d}$."
    ],
    [
        "YDSE Fringe Width: $\\beta = \\frac{\\lambda D}{d}$.",
        "Fresnel Biprism Separation: $d = \\sqrt{d_1 d_2}$ (displacement method using convex lens).",
        "Thin Film Reflected Condition: $2 \\mu t \\cos r = (2n - 1) \\frac{\\lambda}{2}$ for bright fringes.",
        "Newton's Rings Dark Diameter: $D_n^2 = 4 n R \\lambda$.",
        "Newton's Rings Bright Diameter: $D_n^2 = 2(2n - 1) R \\lambda$.",
        "Liquid Refractive Index Formula: $\\mu = \\frac{[D_{n+p}^2 - D_n^2]_{air}}{[D_{n+p}^2 - D_n^2]_{liquid}}$.",
        "Wedge Fringe Width: $\\beta = \\frac{\\lambda}{2 \\mu \\alpha}$ (radians).",
        "Michelson Wavelength Equation: $\\lambda = \\frac{2 d}{N}$.",
        "Stokes' Phase Shift: $\\pi$ phase jump (path change $\\lambda/2$) occurs on reflection from optically denser medium.",
        "Exam Tip: In Newton's rings, the ring diameters grow closer together as $n$ increases because $D_n \\propto \\sqrt{n}$."
    ]
)

add_unit(
    "bsc-ph-wo: diffraction",
    [
        "Diffraction Phenomenon & Huygens-Fresnel Principle: Bending of light around edges of obstacles; Every unobstructed point of a wavefront acts as secondary spherical wavelet source; Wavelet envelope and obliquity factor $K(\\theta) = \\frac{1 + \\cos\\theta}{2}$.",
        "Fresnel vs Fraunhofer Diffraction: Fresnel: source and screen at finite distances, spherical/cylindrical wavefronts, no lenses required; Fraunhofer: source and screen effectively at infinity, plane wavefronts, requires converging lenses.",
        "Fresnel Half-Period Zones: Dividing plane wavefront into concentric circular zones differing by path $\\lambda/2$; Zone radii $r_n = \\sqrt{n b \\lambda}$; Area of each zone is approximately constant $A = \\pi b \\lambda$; Resultant amplitude at pole $R = a_1/2$.",
        "Zone Plate Optics: Optical screen blocking alternate half-period zones (opaque even or odd zones); Acts as converging lens with multiple focal lengths: $f_m = \\frac{r_n^2}{m n \\lambda}$ ($m = 1, 3, 5, \\dots$); Extremely intense focal spot.",
        "Fraunhofer Diffraction at a Single Slit: Slit width $a$; Intensity distribution $I(\\theta) = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2$ where phase parameter $\\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}$; Minima condition $a \\sin\\theta = m \\lambda$ ($m = \\pm 1, \\pm 2, \\dots$).",
        "Central Diffraction Maximum: Angular half-width $\\theta_0 = \\frac{\\lambda}{a}$; Linear width on screen $2 y = \\frac{2 \\lambda D}{a}$; Contains $85\\%$ of total transmitted light intensity.",
        "Fraunhofer Diffraction at a Double Slit: Combines single-slit diffraction with two-slit interference: $I(\\theta) = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\cos^2\\beta$ where $\\beta = \\frac{\\pi d \\sin\\theta}{\\lambda}$; Missing orders (absent spectra) occur when $\\frac{d}{a} = \\frac{n}{m}$.",
        "Plane Transmission Diffraction Grating: Array of $N$ parallel equally-spaced slits; Grating element $e = a + b$ (slit width $a$ + opaque space $b$); Principal maxima condition $(a + b) \\sin\\theta = n \\lambda$; Number of lines per inch $N' = 1/(a + b)$.",
        "Grating Dispersive Power & Maximum Spectra: Angular dispersion $\\frac{d\\theta}{d\\lambda} = \\frac{n}{(a + b) \\cos\\theta}$; Increases with spectral order $n$; Maximum observable order $n_{max} = \\frac{a + b}{\\lambda}$.",
        "Rayleigh's Criterion for Resolving Power: Two spectral lines are just resolved when principal maximum of one line coincides with first minimum of the other; Resolving power of grating $R = \\frac{\\lambda}{\\Delta \\lambda} = n N$ where $N$ is total illuminated lines."
    ],
    [
        "Single Slit Minima: $a \\sin\\theta = m \\lambda$ ($m = \\pm 1, \\pm 2, \\dots$).",
        "Central Maximum Width: $2 \\theta = \\frac{2 \\lambda}{a}$.",
        "Grating Equation: $(a + b) \\sin\\theta = n \\lambda$.",
        "Grating Element: $d = a + b = 1/N$ (lines per unit length).",
        "Missing Orders Ratio: $\\frac{a + b}{a} = \\frac{n}{m}$.",
        "Grating Resolving Power: $\\frac{\\lambda}{\\Delta \\lambda} = n N$.",
        "Grating Dispersive Power: $\\frac{d\\theta}{d\\lambda} = \\frac{n}{(a + b) \\cos\\theta}$.",
        "Fresnel Zone Radius: $r_n = \\sqrt{n b \\lambda}$.",
        "Zone Plate Focal Length: $f_1 = \\frac{r_1^2}{\\lambda}$.",
        "Exam Tip: In single slit diffraction, $a \\sin\\theta = 0$ is the CENTRAL MAXIMUM, not a minimum; minima strictly start at $m = \\pm 1$."
    ]
)

add_unit(
    "bsc-ph-wo: polarization",
    [
        "Transverse Nature of Light Waves: Unpolarized light consists of random transverse electromagnetic field oscillations; Linear polarization restricts electric field $\\vec{E}$ to a single plane; Plane of vibration vs plane of polarization (mutually perpendicular).",
        "Polarization by Reflection & Brewster's Law: When light is reflected at Brewster angle $\\theta_p$, reflected ray is completely plane-polarized perpendicular to plane of incidence; Brewster's Law: $\\mu = \\tan\\theta_p$; Reflected and refracted rays are mutually orthogonal ($\\theta_p + r = 90^\\circ$).",
        "Polarization by Double Refraction (Birefringence): Anisotropic crystals (calcite, quartz) split incident beam into Ordinary ray (O-ray, obeys Snell's law, spherical wavefront) and Extraordinary ray (E-ray, direction-dependent velocity, ellipsoidal wavefront).",
        "Optic Axis & Crystal Classification: Direction along which O-ray and E-ray propagate with identical speeds; Positive uniaxial crystal ($v_o > v_e \\implies \\mu_e > \\mu_o$, e.g. quartz); Negative uniaxial crystal ($v_e > v_o \\implies \\mu_o > \\mu_e$, e.g. calcite).",
        "Nicol Prism Construction & Operation: Calcite rhomb cut along shorter diagonal and cemented with Canada balsam ($\\mu_{CB} = 1.55$); O-ray ($\\mu_o = 1.658$) undergoes Total Internal Reflection at cement boundary; E-ray ($\\mu_e = 1.486$) transmits freely.",
        "Quarter-Wave Plate (QWP): Birefringent retarder of thickness $t = \\frac{\\lambda}{4(\\mu_o - \\mu_e)}$ introducing path difference $\\lambda/4$ (phase shift $\\pi/2$) between O-ray and E-ray; Converts linearly polarized light into circularly polarized light.",
        "Half-Wave Plate (HWP): Retarder plate of thickness $t = \\frac{\\lambda}{2(\\mu_o - \\mu_e)}$ introducing path difference $\\lambda/2$ (phase shift $\\pi$); Rotates plane of vibration of linearly polarized light by $2\\theta$.",
        "Circular and Elliptical Polarization: Superposition of orthogonal linear waves with phase difference $\\delta$: $\\delta = \\pi/2$ with equal amplitudes yields circular polarization; Arbitrary $\\delta$ or unequal amplitudes yields elliptical polarization.",
        "Optical Activity & Specific Rotation: Ability of chiral molecules/crystals to rotate plane of polarization; Biot's Law; Specific rotation $[\\alpha]_\\lambda^T = \\frac{\\theta}{l \\cdot c}$ where $\\theta$ is rotation angle, $l$ is tube length in decimeters, and $c$ is concentration in g/cm$^3$.",
        "Laurent's Half-Shade Polarimeter: Employs half-disc semi-circular quartz plate to split field of view into two halves; Enhances visual sensitivity by balancing luminous intensities of both fields to determine optical rotation precisely."
    ],
    [
        "Brewster's Law Formula: $\\mu = \\tan\\theta_p$.",
        "Brewster Angle Geometry: $\\theta_p + r = 90^\\circ$ (reflected and refracted rays orthogonal).",
        "Malus's Law: $I = I_0 \\cos^2\\theta$.",
        "Quarter-Wave Thickness: $t = \\frac{\\lambda}{4 |\\mu_o - \\mu_e|}$.",
        "Half-Wave Thickness: $t = \\frac{\\lambda}{2 |\\mu_o - \\mu_e|}$.",
        "Positive Crystal Relation: $\\mu_e > \\mu_o$ (e.g. Quartz).",
        "Negative Crystal Relation: $\\mu_o > \\mu_e$ (e.g. Calcite).",
        "Specific Rotation Equation: $[\\alpha] = \\frac{\\theta}{l \\cdot c}$ (deg / (dm $\\cdot$ g/cm$^3$)).",
        "Circular Polarization Phase: $\\delta = \\pi/2$ with $a = b$.",
        "Exam Tip: In polarimeter calculations, verify that tube length $l$ is converted to decimeters ($1\\text{ dm} = 10\\text{ cm}$)."
    ]
)

# Output intermediate progress


# =========================================================================
# 2. PHYSICS II: WAVES & OPTICS / STATISTICS II (B.Sc CS Sem 2)
# =========================================================================

add_unit(
    "bsc-phcs: oscillations",
    [
        "Simple Harmonic Motion (SHM) in Computing Systems: Linear dynamical systems; Differential equation $\\frac{d^2 x}{dt^2} + \\omega_0^2 x = 0$; State variable representation $\\dot{\\mathbf{x}} = A \\mathbf{x}$; Natural resonant frequency $\\omega_0 = \\sqrt{k/m}$.",
        "Damped Oscillations & Dissipation: Dissipative viscous friction model: $m \\ddot{x} + c \\dot{x} + k x = 0$; Damping factor $\\gamma = c/(2m)$; Three operational regimes: Overdamped ($\\gamma > \\omega_0$), Critically damped ($\\gamma = \\omega_0$), Underdamped ($\\gamma < \\omega_0$).",
        "Quality Factor ($Q$) & Energy Loss: Quality factor $Q = \\frac{\\omega_0}{2 \\gamma} = 2 \\pi \\frac{\\text{Energy Stored}}{\\text{Energy Dissipated per Cycle}}$; Measures frequency selectivity in RF clock circuitry and crystal oscillators.",
        "Forced Harmonic Oscillations & Resonance: Driven oscillator equation $\\ddot{x} + 2 \\gamma \\dot{x} + \\omega_0^2 x = \\frac{F_0}{m} \\cos(\\omega t)$; Steady-state amplitude $A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + 4 \\gamma^2 \\omega^2}}$.",
        "Amplitude Resonance vs Velocity Resonance: Amplitude resonance occurs at excitation frequency $\\omega_r = \\sqrt{\\omega_0^2 - 2 \\gamma^2}$; Velocity resonance occurs at natural frequency $\\omega = \\omega_0$ where mechanical impedance is purely real.",
        "Coupled Oscillators & Normal Modes: Coupled equations $m \\ddot{x}_1 = -k x_1 - k_c(x_1 - x_2)$ and $m \\ddot{x}_2 = -k x_2 - k_c(x_2 - x_1)$; Normal coordinates $q_1 = x_1 + x_2$ (in-phase mode $\\omega_1 = \\sqrt{k/m}$) and $q_2 = x_1 - x_2$ (anti-phase mode $\\omega_2 = \\sqrt{(k + 2k_c)/m}$).",
        "Energy Transfer in Coupled Oscillators: Periodic exchange of kinetic and potential energy between oscillators with beat period $T_b = \\frac{2 \\pi}{\\omega_2 - \\omega_1}$; Physical basis for directional waveguide couplers.",
        "Electrical Analogies to Mechanical Oscillations: LCR series circuit $L \\frac{d^2 q}{dt^2} + R \\frac{dq}{dt} + \\frac{1}{C} q = E(t)$; Mass $m \\leftrightarrow L$, damping $c \\leftrightarrow R$, spring compliance $1/k \\leftrightarrow C$, velocity $\\dot{x} \\leftrightarrow I$.",
        "Transient and Steady-State Numerical Modeling: Simulating oscillatory state transitions using Runge-Kutta 4th order integration in software simulation engines.",
        "Phase Space Trajectories: Trajectories plotted in displacement-velocity space $(x, \\dot{x})$; Undamped oscillator traces invariant ellipse; Damped system converges inward to stable attractor spiral at origin $(0, 0)$."
    ],
    [
        "SHM Equation: $\\ddot{x} + \\omega_0^2 x = 0$.",
        "Natural Frequency: $\\omega_0 = \\sqrt{k/m}$.",
        "Critical Damping Condition: $\\gamma = \\omega_0 \\implies c = 2 \\sqrt{k m}$.",
        "Quality Factor Formula: $Q = \\frac{\\omega_0}{2 \\gamma}$.",
        "Amplitude Resonance Frequency: $\\omega_r = \\sqrt{\\omega_0^2 - 2 \\gamma^2}$.",
        "Electrical Inductance Analogy: Inductance $L$ corresponds to mechanical mass $m$.",
        "Electrical Resistance Analogy: Resistance $R$ corresponds to viscous damping coefficient $c$.",
        "Normal Mode Definition: Independent motion where all parts of the system vibrate with identical frequency and phase.",
        "Phase Plane Damped Orbit: Inward spiraling trajectory toward origin.",
        "Exam Tip: In forced resonance questions, velocity resonance always occurs exactly at $\\omega = \\omega_0$, while amplitude resonance occurs slightly below $\\omega_0$."
    ]
)

add_unit(
    "bsc-phcs: wave optics",
    [
        "Electromagnetic Wave Nature of Light in Computing: Light as transverse electromagnetic wave satisfying Maxwell\'s equations; Propagation velocity $c = 1/\\sqrt{\\mu_0 \\varepsilon_0} \\approx 3 \\times 10^8\\text{ m/s}$; High bandwidth carrier for optical fiber communications.",
        "Wavefronts & Ray Tracing: Definition of wavefront as locus of points possessing constant phase; Huygens\' principle constructing future wavefronts via envelope of secondary wavelets.",
        "Spatial and Temporal Coherence in Telecommunications: Temporal coherence quantified by coherence time $\\tau_c$ and coherence length $L_c = c \\tau_c = \\frac{\\lambda^2}{\\Delta \\lambda}$; Spatial coherence across transverse beam cross-section.",
        "Semiconductor Laser Diode Light Sources: Stimulated emission in GaAs/InP p-n junctions; Optical cavity mirrors providing feedback; Narrow spectral linewidth $\\Delta \\lambda < 0.1\\text{ nm}$ yielding coherence length $L_c > 1\\text{ m}$.",
        "Light Emitting Diodes (LED) vs Lasers: Spontaneous emission in LEDs yields broad spectral width $\\Delta \\lambda \\approx 30\\text{ nm}$ and short coherence length; Laser diodes provide monochromatic, phase-coherent, directional emission.",
        "Optical Waveguide Fundamentals: Core-cladding index step $n_1 > n_2$; Critical angle for Total Internal Reflection (TIR): $\\theta_c = \\arcsin(n_2/n_1)$; Acceptance angle $\\theta_a$ and Numerical Aperture $NA = \\sqrt{n_1^2 - n_2^2}$.",
        "Single-Mode vs Multi-Mode Optical Fibers: Normalized frequency parameter $V = \\frac{2 \\pi a}{\\lambda} NA$; Single-mode propagation condition $V < 2.405$; Eliminates intermodal dispersion in long-haul high-speed networks.",
        "Attenuation and Signal Losses in Optical Fibers: Rayleigh scattering losses $\\propto 1/\\lambda^4$; Infrared absorption bands; Minimum attenuation optical telecom window at $\\lambda = 1550\\text{ nm}$ ($0.2\\text{ dB/km}$).",
        "Pulse Broadening & Dispersion: Chromatic dispersion $D = -\\frac{\\lambda}{c} \\frac{d^2 n}{d\\lambda^2}$; Limits maximum transmission bit-rate $B \\cdot L \\le \\text{constant}$ in fiber optic communication channels.",
        "Optical Computing & Photonic Interconnects: Replacing electrical copper interconnects with on-chip optical waveguides to overcome RC delay limits and power dissipation in modern multi-core processors."
    ],
    [
        "Coherence Length Equation: $L_c = \\frac{\\lambda^2}{\\Delta \\lambda} = c \\tau_c$.",
        "Numerical Aperture Formula: $NA = \\sqrt{n_1^2 - n_2^2}$.",
        "Acceptance Angle: $\\sin\\theta_{max} = NA$.",
        "Critical Angle for TIR: $\\sin\\theta_c = n_2 / n_1$.",
        "V-Number Single Mode Limit: $V < 2.405$.",
        "Rayleigh Scattering Wavelength Dependency: Losses scale as $1/\\lambda^4$.",
        "Telecom Wavelength Window: $1550\\text{ nm}$ offers lowest attenuation ($0.2\\text{ dB/km}$).",
        "Fiber Core Condition: Core refractive index $n_1$ must strictly exceed cladding index $n_2$.",
        "Laser Diode Advantage: High spatial coherence enables efficient coupling into single-mode fiber.",
        "Exam Tip: In numerical aperture questions, remember $NA$ is dimensionless and represents the light-gathering capacity of the optical fiber."
    ]
)

add_unit(
    "bsc-phcs: interference",
    [
        "Division of Wavefront in Optical Sensing: Young\'s double slit interferometer as an optical phase sensor; Relative phase shift $\\Delta \\phi = \\frac{2 \\pi}{\\lambda} (n - 1) L$ when transparent gas cell of length $L$ and index $n$ is introduced.",
        "Fringe Shift Measurement: Introducing thin transparent plate of thickness $t$ and refractive index $\\mu$ into one path shifts fringe pattern by $N$ fringes: $t = \\frac{N \\lambda}{\\mu - 1}$.",
        "Mach-Zehnder Interferometer Architecture: Two beam splitters and two mirrors; Separates reference arm from sample arm; Widely used in high-speed optical telecommunications modulators (electro-optic $\\text{LiNbO}_3$).",
        "Electro-Optic Phase Modulation (Pockels Effect): Linear electro-optic index change $\\Delta n = \\frac{1}{2} n^3 r_{13} E$; Phase shift $\\Delta \\phi = \\pi V / V_\\pi$; Converts voltage signals into optical amplitude modulation.",
        "Division of Amplitude in Dielectric Coatings: Anti-reflection coatings on computer display glass; Destructive interference in reflected beam requires refractive index $n_{film} = \\sqrt{n_{air} n_{glass}}$ and optical thickness $n_{film} t = \\lambda/4$.",
        "High-Reflectance Dielectric Mirrors (Bragg Mirrors): Alternating quarter-wave layers of high and low refractive index ($n_H, n_L$); Constructive interference in reflection produces $> 99.9\\%$ reflectivity for laser cavities.",
        "Fabry-Perot Interferometer / Etalon: Multiple beam interference between two parallel partially transmitting mirrors with reflectance $R$; Transmitted intensity described by Airy formula: $I_T = \\frac{I_0}{1 + F \\sin^2(\\delta/2)}$.",
        "Coefficient of Finesse ($F$) & Free Spectral Range (FSR): Finesse coefficient $F = \\frac{4 R}{(1 - R)^2}$; Free Spectral Range $FSR = \\frac{c}{2 n d}$; Sharp narrow transmission peaks used as tunable optical filter channels in WDM networks.",
        "Wavelength Division Multiplexing (WDM): Multiplexing dozens of discrete laser wavelengths (e.g. 100 GHz channel grid) through single fiber utilizing interference optical filters.",
        "Optical Surface Profilometry: Non-contact optical inspection of microelectronic silicon chip wafer surface topography using white-light scanning interferometry."
    ],
    [
        "Fringe Shift Thickness Formula: $t = \\frac{N \\lambda}{\\mu - 1}$.",
        "Anti-Reflection Index Rule: $n_{film} = \\sqrt{n_{air} n_{glass}}$.",
        "Quarter-Wave Coating Thickness: $t = \\frac{\\lambda}{4 n_{film}}$.",
        "Airy Distribution Formula: $I_T = \\frac{I_0}{1 + F \\sin^2(\\delta/2)}$.",
        "Coefficient of Finesse: $F = \\frac{4 R}{(1 - R)^2}$.",
        "Fabry-Perot Peak Transmission: $2 n d \\cos \\theta = m \\lambda$.",
        "Half-Wave Voltage $V_\\pi$: Voltage required to introduce a $\\pi$ phase shift in electro-optic modulator.",
        "Free Spectral Range: $FSR = \\frac{c}{2 d}$ (in frequency domain).",
        "Mach-Zehnder Application: Modulates continuous wave laser light up to $40\\text{ Gbps}$ via RF voltage.",
        "Exam Tip: In anti-reflection coating problems, phase changes on reflection occur at BOTH boundaries (air-to-film and film-to-glass), requiring path difference $2 n t = \\lambda/2$."
    ]
)

add_unit(
    "bsc-phcs: diffraction",
    [
        "Fraunhofer Diffraction & Fourier Optics: Fraunhofer diffraction pattern is mathematically the 2D spatial Fourier transform of aperture transmission function: $U(u, v) = \\iint t(x, y) e^{-j 2 \\pi (u x + v y)} dx dy$.",
        "Rectangular Aperture Diffraction: Aperture dimensions $a \\times b$; 2D intensity pattern $I(x, y) = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2$ where $\\alpha = \\frac{\\pi a x}{\\lambda D}$ and $\\beta = \\frac{\\pi b y}{\\lambda D}$.",
        "Circular Aperture Diffraction & Airy Disc: Lens pupil of diameter $D$; Diffraction amplitude given by first-order Bessel function $J_1(x)$; Intensity $I(\\theta) = I_0 \\left(\\frac{2 J_1(k a \\sin\\theta)}{k a \\sin\\theta}\\right)^2$.",
        "Angular Radius of First Airy Dark Ring: First zero of $J_1(u)$ occurs at $u = 3.832$; Angular resolution limit: $\\theta_1 = 1.22 \\frac{\\lambda}{D}$; Sets absolute optical resolution limit for cameras, telescopes, and lithographic scanners.",
        "Rayleigh Resolution Criterion: Two point sources are just resolved when central maximum of one Airy disc falls on the first minimum of the other: $\\Delta \\theta \ge 1.22 \\frac{\\lambda}{D}$.",
        "Diffraction Limits in Semiconductor Lithography: Minimum printable semiconductor feature size (half-pitch): $HP = k_1 \\frac{\\lambda}{NA}$; Explains transition from DUV ($193\\text{ nm}$) to Extreme Ultraviolet (EUV, $\\lambda = 13.5\\text{ nm}$) lithography.",
        "Diffraction Gratings in Spectrometers: Grating equation $d \\sin\\theta = m \\lambda$; Resolving power $\\mathcal{R} = \\frac{\\lambda}{\\Delta \\lambda} = m N$; Emitted optical spectrum separated into discrete wavelength channels on CCD line sensor.",
        "Arrayed Waveguide Gratings (AWG): Integrated planar lightwave circuit grating multiplexing and demultiplexing optical channels in fiber communications.",
        "Spatial Filtering & 4f Optical Processing: 2-lens optical system executing optical Fourier transform; Inserting physical spatial frequency mask at Fourier plane executes real-time 2D convolution, edge enhancement, and noise filtering.",
        "Holography & Wavefront Reconstruction: 3D imaging recording both amplitude and phase via reference beam interference on photographic emulsion; Reconstructed by illuminating with conjugate laser beam."
    ],
    [
        "Airy Disc Angular Radius: $\\theta = 1.22 \\frac{\\lambda}{D}$.",
        "Rayleigh Resolution Limit: $\\Delta \\theta = 1.22 \\frac{\\lambda}{D}$.",
        "Photolithography Feature Resolution: $CD = k_1 \\frac{\\lambda}{NA}$.",
        "Fourier Optical Relation: Fraunhofer field is the spatial 2D Fourier transform of the aperture.",
        "Bessel Function Zero: First zero of $J_1(x)$ occurs at $x = 3.832$.",
        "EUV Lithography Wavelength: $13.5\\text{ nm}$ used in cutting-edge semiconductor fabs.",
        "Grating Resolving Power: $\\mathcal{R} = m N$.",
        "Rectangular Aperture Intensity: Product of independent sinc-squared functions along orthogonal axes.",
        "4f System Spatial Filter: Lens 1 transforms to frequency space; Filter modifies spectrum; Lens 2 inverts back to image.",
        "Exam Tip: In the Airy disc resolution equation, remember the factor 1.22 arises strictly from the circular geometry Bessel function zero $3.832 / \\pi \\approx 1.22$."
    ]
)

add_unit(
    "bsc-phcs: polarization",
    [
        "Polarization States in Optical Computing: Vector description of electric field $\\vec{E}(z, t) = \\text{Re}[(E_{0x} \\hat{x} + E_{0y} e^{j \\delta} \\hat{y}) e^{j(k z - \\omega t)}]$; Linear, circular, and elliptical polarization states as physical qubits in quantum key distribution.",
        "Jones Vectors for Pure Polarization States: Horizontal linear: $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$; Vertical linear: $\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$; Right-circular: $\\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ -j \\end{pmatrix}$; Left-circular: $\\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ j \\end{pmatrix}$.",
        "Jones Matrices for Optical Elements: Linear polarizer with transmission axis at angle $\\theta$: $M_P(\\theta) = \\begin{pmatrix} \\cos^2\\theta & \\sin\\theta\\cos\\theta \\\\ \\sin\\theta\\cos\\theta & \\sin^2\\theta \\end{pmatrix}$; Quarter-wave plate: $\\begin{pmatrix} 1 & 0 \\\\ 0 & -j \\end{pmatrix}$.",
        "Stokes Parameters & Poincaré Sphere: Stokes vector $\\mathbf{S} = (S_0, S_1, S_2, S_3)^T$; $S_0$ is total intensity, $S_1$ is linear horizontal/vertical, $S_2$ is linear $\\pm 45^\\circ$, $S_3$ is circular handedness; Geometrical representation on Poincaré sphere surface.",
        "Degree of Polarization (DOP): Quantifies unpolarized noise: $DOP = \\frac{\\sqrt{S_1^2 + S_2^2 + S_3^2}}{S_0}$; $DOP = 1$ for fully polarized light, $DOP = 0$ for unpolarized thermal noise.",
        "Liquid Crystal Display (LCD) Operation: Twisted Nematic (TN) liquid crystal cells; Applied electric field untwists nematic director, rotating polarization by $90^\\circ$ between crossed polarizers; Controls pixel transmission in digital flat panels.",
        "Polarization Mode Dispersion (PMD) in Fiber: Asymmetric fiber core birefringence causes orthogonal polarization modes to travel at different group velocities; Differential Group Delay (DGD) causes pulse broadening limiting 100G transmission.",
        "Optical Isolators & Faraday Rotators: Non-reciprocal optical diode protecting laser cavities from back-reflections; Utilizes magneto-optic Faraday effect rotating polarization by $45^\\circ$ independent of propagation direction.",
        "Quantum Cryptography & BB84 Protocol: Quantum Key Distribution (QKD) encoding cryptographic bits into photon polarization bases: Rectilinear ($0^\\circ, 90^\\circ$) and Diagonal ($45^\\circ, 135^\\circ$); Eavesdropping collapses quantum wavefunction.",
        "Polarization Multiplexed Optical Transmission: Polarization Division Multiplexing (PDM-QPSK) doubling data capacity by transmitting two independent optical data streams simultaneously on orthogonal polarization states."
    ],
    [
        "Jones Vector Horizontal: $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$.",
        "Jones Vector Vertical: $\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$.",
        "Malus\'s Law: $I = I_0 \\cos^2\\theta$.",
        "Degree of Polarization: $DOP = \\frac{\\sqrt{S_1^2 + S_2^2 + S_3^2}}{S_0}$.",
        "Poincaré Sphere Poles: North pole represents right-circular; South pole represents left-circular polarization.",
        "Faraday Rotation: $\\theta = V B L$ (non-reciprocal magneto-optic rotation).",
        "Liquid Crystal Mechanism: Voltage rotates optical axis, modulating light transmission through analyzer.",
        "Optical Isolator Purpose: Prevents back-reflected light from entering laser and generating noise.",
        "BB84 Basis Sets: Rectilinear ($\\leftrightarrow, \\updownarrow$) and Diagonal ($\\nearrow, \\nwarrow$).",
        "Exam Tip: In Jones calculus, remember the Jones vector must be normalized to unit intensity: $|E_x|^2 + |E_y|^2 = 1$."
    ]
)

# =========================================================================
# 3. PHYSICS II / STATISTICS II (B.Sc Math Sem 2)
# =========================================================================

add_unit(
    "bsc-phm: oscillations",
    [
        "Sturm-Liouville Formulation of Oscillations: Self-adjoint differential equation $\\frac{d}{dx}\\left[p(x)\\frac{dy}{dx}\\right] + [\\lambda w(x) - q(x)] y = 0$; Boundary conditions generate real eigenvalues $\\lambda_1 < \\lambda_2 < \\dots$ and mutually orthogonal eigenfunctions with respect to weight $w(x)$.",
        "Linear Operator Formulation in Function Spaces: Harmonic oscillator Hamiltonian $\\mathcal{H} = -\\frac{d^2}{dx^2} + \\omega_0^2 x^2$; Hermite differential equation and orthogonal Hermite polynomials $H_n(x)$ spanning $L^2(\\mathbb{R})$.",
        "Damped Oscillator Characteristic Polynomial: Quadratic operator equation $D^2 + 2 \\gamma D + \\omega_0^2 = 0$; Roots $m_{1,2} = -\\gamma \\pm \\sqrt{\\gamma^2 - \\omega_0^2}$; Degenerate root at critical damping ($\\gamma = \\omega_0$) yields secular polynomial factor $(c_1 + c_2 t) e^{-\\gamma t}$.",
        "Green\'s Function for Inhomogeneous Oscillations: Impulse response solving $\\ddot{x} + 2 \\gamma \\dot{x} + \\omega_0^2 x = \\delta(t - \\tau)$; Causal Green\'s function $G(t, \\tau) = \\frac{1}{\\omega_d} e^{-\\gamma(t - \\tau)} \\sin(\\omega_d(t - \\tau)) \\Theta(t - \\tau)$; General solution $x(t) = \\int_0^t G(t, \\tau) F(\\tau) d\\tau$.",
        "Anharmonic Oscillators & Perturbation Theory: Non-linear Duffing equation $\\ddot{x} + \\omega_0^2 x + \\varepsilon x^3 = 0$; Naive perturbation expansion generates resonant secular terms $t \\cos(\\omega_0 t)$ destroying long-term validity.",
        "Lindstedt-Poincaré Method: Eliminating secular terms by expanding frequency eigenvalue $\\omega = \\omega_0 + \\varepsilon \\omega_1 + \\dots$; Amplitude-dependent frequency shift: $\\omega = \\omega_0 \\left(1 + \\frac{3 \\varepsilon A^2}{8 \\omega_0^2}\\right)$.",
        "Phase Plane & Limit Cycles: Autonomous 2D dynamical system $\\dot{x} = y, \\dot{y} = -\\omega_0^2 x - f(x, y)$; Poincaré-Bendixson Theorem; Van der Pol oscillator $\\ddot{x} - \\mu(1 - x^2)\\dot{x} + x = 0$ exhibiting isolated stable closed orbit (limit cycle).",
        "Parametric Resonance & Mathieu Equation: Time-dependent parameter modulation $\\ddot{x} + [\\delta + \\varepsilon \\cos(2 t)] x = 0$; Ince-Strutt stability chart mapping tongue-shaped zones of parametric instability and exponential amplification.",
        "Coupled Linear Systems & Matrix Diagonalization: Matrix equation $M \\ddot{\\mathbf{x}} + K \\mathbf{x} = 0$; Generalized eigenvalue problem $\\det(K - \\omega^2 M) = 0$; Orthogonality of eigenvectors with respect to mass matrix: $\\mathbf{v}_i^T M \\mathbf{v}_j = \\delta_{ij}$.",
        "Liouville\'s Theorem in Statistical Mechanics: Conservation of phase space volume $d\\Gamma = dx dp$ under Hamiltonian flow: $\\frac{\\partial \\rho}{\\partial t} + \\{\\rho, H\\} = 0$; Phase fluid incompressibility for conservative oscillatory ensembles."
    ],
    [
        "Sturm-Liouville Equation: $[p(x) y\']\' + [\\lambda w(x) - q(x)] y = 0$.",
        "Eigenfunction Orthogonality: $\\int_a^b y_m(x) y_n(x) w(x) dx = 0$ for $m \\ne n$.",
        "Green\'s Function Response: $x(t) = \\int G(t, \\tau) f(\\tau) d\\tau$.",
        "Duffing Frequency Shift: $\\Delta \\omega = \\frac{3 \\varepsilon A^2}{8 \\omega_0}$.",
        "Van der Pol Equation: $\\ddot{x} - \\mu(1 - x^2)\\dot{x} + x = 0$.",
        "Mathieu Equation: $\\ddot{x} + [\\delta + \\varepsilon \\cos(2t)] x = 0$.",
        "Generalized Eigenvalue Problem: $\\det(K - \\omega^2 M) = 0$.",
        "Critical Damping Factor: $\\gamma = \\omega_0$.",
        "Liouville Theorem Statement: Phase space volume is conserved during Hamiltonian time evolution.",
        "Exam Tip: In Lindstedt-Poincaré perturbation, choose $\\omega_1$ specifically to cancel terms with $\\cos(\\omega t)$ to eliminate secular growth."
    ]
)

add_unit(
    "bsc-phm: wave optics",
    [
        "Helmholtz Equation from Maxwell Field Equations: Time-harmonic spatial field $E(x, y, z) e^{-i \\omega t}$; Vector wave equation reduces to scalar Helmholtz PDE: $\\nabla^2 U + k^2 U = 0$ where wave number $k = \\omega/c = 2\\pi/\\lambda$.",
        "Sommerfeld Radiation Condition: Physical boundary condition at infinity: $\\lim_{r \\to \\infty} r \\left(\\frac{\\partial U}{\\partial r} - i k U\\right) = 0$; Guarantees that only outgoing radiating waves exist at boundary, ensuring uniqueness of solutions.",
        "Green\'s Theorem in Helmholtz Field Theory: Boundary value formulation $U(P) = \\frac{1}{4 \\pi} \\oint_S \\left[U \\frac{\\partial G}{\\partial n} - G \\frac{\\partial U}{\\partial n}\\right] dS$ where free-space Green\'s function is $G = \\frac{e^{i k r}}{r}$.",
        "Kirchhoff Integral Formulation of Diffraction: Mathematical derivation of diffraction through opaque aperture $S$: $U(P) = -\\frac{i A}{2 \\lambda} \\iint_S \\frac{e^{i k(r + r\')}}{r r\'} [\\cos(\\vec{n}, \\vec{r}) - \\cos(\\vec{n}, \\vec{r}\\')] dS$.",
        "Paraxial Helmholtz Equation & Gaussian Beams: Under paraxial approximation $\\partial^2 A / \\partial z^2 \\ll 2 k \\partial A / \\partial z$; Paraxial equation $\\nabla_\\perp^2 A + 2 i k \\frac{\\partial A}{\\partial z} = 0$; Exact analytical solution is the fundamental TEM$_{00}$ Gaussian beam.",
        "Gaussian Beam Waist & Rayleigh Range: Beam radius $w(z) = w_0 \\sqrt{1 + (z/z_R)^2}$ where Rayleigh range $z_R = \\frac{\\pi w_0^2}{\\lambda}$; Confocal parameter $b = 2 z_R$; Radius of wavefront curvature $R(z) = z \\left[1 + (z_R/z)^2\\right]$.",
        "Gouy Phase Shift Phenomenon: Phase advance $\\zeta(z) = \\arctan(z/z_R)$ acquired by focused Gaussian beam passing through beam waist; Total on-axis phase shift across focus is $\\pi$ radians.",
        "ABCD Matrix Formalism for Optical Beam Propagation: Complex beam parameter $\\frac{1}{q(z)} = \\frac{1}{R(z)} - i \\frac{\\lambda}{\\pi w^2(z)}$; Transformation through paraxial optical system characterized by ray matrix: $q_2 = \\frac{A q_1 + B}{C q_1 + D}$.",
        "Fourier Transformation Property of Ideal Lens: Coherent optical field $U(x, y)$ placed at front focal plane of thin convex lens of focal length $f$ produces exact spatial Fourier transform at back focal plane: $U_f(u, v) = \\frac{1}{i \\lambda f} \\iint U(x, y) e^{-i \\frac{2\\pi}{\\lambda f}(x u + y v)} dx dy$.",
        "Optical Transfer Function (OTF) & Modulation Transfer Function (MTF): Frequency response of imaging system: $OTF(f_x, f_y) = MTF \\cdot e^{i PTF}$; Autocorrelation of exit pupil function; Cutoff spatial frequency $f_c = \\frac{2 NA}{\\lambda}$."
    ],
    [
        "Helmholtz Equation: $\\nabla^2 U + k^2 U = 0$.",
        "Free-Space Green\'s Function: $G(\vec{r}, \vec{r}\') = \\frac{e^{i k |\\vec{r} - \\vec{r}\'|}}{4 \\pi |\\vec{r} - \\vec{r}\'|}$.",
        "Sommerfeld Condition: $\\lim_{r \to \\infty} r (\\partial U / \\partial r - i k U) = 0$.",
        "Rayleigh Range Formula: $z_R = \\frac{\\pi w_0^2}{\\lambda}$.",
        "Gaussian Beam Radius: $w(z) = w_0 \\sqrt{1 + (z/z_R)^2}$.",
        "Gouy Phase Shift: $\\zeta(z) = \\arctan(z/z_R)$.",
        "Complex q-Parameter: $\\frac{1}{q} = \\frac{1}{R} - i \\frac{\\lambda}{\\pi w^2}$.",
        "ABCD Law for Gaussian Beams: $q_2 = \\frac{A q_1 + B}{C q_1 + D}$.",
        "Lens Fourier Transform Factor: Spatial scaling is $u = x/(\\lambda f)$.",
        "Exam Tip: In Gaussian beam calculations, at $z = z_R$, the beam cross-sectional area doubles and beam radius increases by factor of $\\sqrt{2}$."
    ]
)

add_unit(
    "bsc-phm: interference",
    [
        "Statistical Theory of Optical Coherence: Complex analytic signal $V(t)$; Mutual coherence function $\\Gamma_{12}(\\tau) = \\langle V_1(t + \\tau) V_2^*(t) \\rangle$; Cross-correlation function of stochastic optical fields.",
        "Complex Degree of Coherence (Normalized): $\\gamma_{12}(\\tau) = \\frac{\\Gamma_{12}(\\tau)}{\\sqrt{\\Gamma_{11}(0) \\Gamma_{22}(0)}} = \\frac{\\Gamma_{12}(\\tau)}{\\sqrt{I_1 I_2}}$; Bounded mathematically by $0 \le |\\gamma_{12}(\\tau)| \le 1$; Strict Schwarz inequality proof.",
        "General Interference Law for Partially Coherent Light: Total observed intensity $I = I_1 + I_2 + 2 \\sqrt{I_1 I_2} |\\gamma_{12}(\\tau)| \\cos[\\alpha_{12}(\\tau) - \\delta]$; Visibility of interference fringes $V = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}} = \\frac{2 \\sqrt{I_1 I_2}}{I_1 + I_2} |\\gamma_{12}(\\tau)|$.",
        "Van Cittert-Zernike Theorem: Fundamental theorem of optical interferometry; Complex degree of spatial coherence between two pinholes illuminated by distant quasi-monochromatic incoherent source equals the normalized Fourier transform of the source intensity distribution.",
        "Application to Stellar Diameter Measurement: Michelson Stellar Interferometer; Disappearance of fringe visibility occurs at baseline separation $d = 1.22 \\frac{\\lambda}{\\theta}$, where $\\theta$ is angular diameter of the star.",
        "Wiener-Khinchin Theorem in Temporal Coherence: The temporal autocorrelation function $\\Gamma(\\tau)$ and the optical power spectral density $S(\\omega)$ form a Fourier transform pair: $S(\\omega) = \\frac{1}{2 \\pi} \\int_{-\\infty}^\\infty \\Gamma(\\tau) e^{i \\omega \\tau} d\\tau$.",
        "Multilayer Thin-Film Matrix Formalism (Abelès Matrix): Characteristic transfer matrix for layered dielectric media: $M = \\prod_{j} \\begin{pmatrix} \\cos\\delta_j & -\\frac{i}{p_j}\\sin\\delta_j \\\\ -i p_j \\sin\\delta_j & \\cos\\delta_j \\end{pmatrix}$ where $\\delta_j = \\frac{2 \\pi}{\\lambda} n_j d_j \\cos\\theta_j$.",
        "Photonic Bandgap in Periodic Multilayers: Eigenvalue analysis of 1D periodic dielectric lattice (Bloch theorem); Bloch wave vector $K$; Condition $\\cos(K \\Lambda) = \\frac{1}{2}\\text{Tr}(M) > 1$ defines forbidden photonic bandgap (total Bragg reflection).",
        "Ring Resonator S-Matrix Formulation: Scattering matrix representation of integrated optical ring resonators; Transmission spectrum $T = \\left|\\frac{r - a e^{i \\phi}}{1 - r a e^{i \\phi}}\\right|^2$; Critical coupling condition $r = a$ producing zero transmission at resonance.",
        "Sagnac Effect & Optical Gyroscopes: Phase difference between counter-propagating waves in rotating interferometer: $\\Delta \\Phi = \\frac{8 \\pi A \\Omega}{\\lambda c}$ where $A$ is enclosed loop area and $\\Omega$ is angular rotation rate; Fiber Optic Gyroscopes (FOG) in inertial guidance."
    ],
    [
        "Complex Degree of Coherence: $\\gamma_{12}(\\tau) = \\frac{\\Gamma_{12}(\\tau)}{\\sqrt{I_1 I_2}}$.",
        "Fringe Visibility Formula: $V = \\frac{2 \\sqrt{I_1 I_2}}{I_1 + I_2} |\\gamma_{12}|$.",
        "General Interference Law: $I = I_1 + I_2 + 2 \\sqrt{I_1 I_2} |\\gamma_{12}| \\cos\\phi$.",
        "Van Cittert-Zernike: Spatial coherence equals normalized 2D Fourier transform of source brightness.",
        "Wiener-Khinchin Relation: Coherence function and spectral density are Fourier duals.",
        "Michelson Stellar Baseline: First fringe null at $d = 1.22 \\lambda / \\theta$.",
        "Abelès Matrix Determinant: $\\det(M_j) = 1$ (unimodular for lossless layers).",
        "Photonic Bandgap Condition: $|\\text{Trace}(M)| > 2$.",
        "Sagnac Phase Shift: $\\Delta \\Phi = \\frac{8 \\pi A \\Omega}{\\lambda c}$.",
        "Exam Tip: In visibility calculations with equal beam intensities ($I_1 = I_2$), fringe visibility simplifies directly to $V = |\\gamma_{12}|$, providing a direct physical probe of coherence."
    ]
)

add_unit(
    "bsc-phm: diffraction",
    [
        "Asymptotic Evaluation of Diffraction Integrals: Method of Stationary Phase for high-frequency asymptotics ($k \\to \\infty$); Major contributions to integral $\\int g(t) e^{i k f(t)} dt$ arise exclusively from critical points where $f\'(t_s) = 0$.",
        "Fresnel Diffraction Integral Formulation: Quadratic approximation of path distance in Kirchhoff integral: $U(x, y) = \\frac{e^{i k z}}{i \\lambda z} \\iint U_0(x_0, y_0) e^{i \\frac{\\pi}{\\lambda z}[(x - x_0)^2 + (y - y_0)^2]} dx_0 dy_0$.",
        "Dimensionless Fresnel Parameters: Coordinate scaling: $u = (x - x_0)\\sqrt{\\frac{2}{\\lambda z}}$ and $v = (y - y_0)\\sqrt{\\frac{2}{\\lambda z}}$; Decomposes 2D aperture integral into product of independent 1D Fresnel integrals.",
        "Cornu Spiral Mathematical Geometry: Parametric curve in complex plane $Z(w) = C(w) + i S(w)$ where $C(w) = \\int_0^w \\cos(\\pi t^2/2) dt$ and $S(w) = \\int_0^w \\sin(\\pi t^2/2) dt$; Arc length equals parameter $w$; Curvature $\\kappa = \\pi w$.",
        "Diffraction at a Straight Edge using Cornu Spiral: Amplitude represented by chord vector connecting asymptotic eye $(-1/2, -1/2)$ to point on spiral $w = x \\sqrt{2/(\\lambda z)}$; Asymptotic intensity oscillations into illuminated zone, monotonic exponential decay into shadow.",
        "Fraunhofer Diffraction as Spatial Fourier Transform: Limiting case when Fresnel number $N_F = \\frac{a^2}{\\lambda z} \\ll 1$; Quadratic phase factor inside aperture approaches unity; Far-field pattern is exact scaled Fourier transform of aperture function.",
        "Babinet\'s Principle in Wave Optics: For two complementary screens $S_1$ and $S_2$ where $S_1 + S_2 = \\text{complete plane}$, diffracted field amplitudes satisfy $U_1(P) + U_2(P) = U_{unobstructed}(P)$; At points where unobstructed beam is zero, diffracted intensities are identical: $I_1 = I_2$.",
        "Airy Function & Asymptotic Edge Diffraction: Uniform asymptotic approximation near optical caustics and shadow boundaries expressed via Airy function $\\text{Ai}(x) = \\frac{1}{\\pi}\\int_0^\\infty \\cos(t^3/3 + x t) dt$.",
        "Diffraction Tomography & Inverse Scattering: Reconstruction of 3D refractive index distributions $n(x, y, z)$ from 2D forward-scattered fields; Fourier Diffraction Theorem: 2D Fourier transform of scattered field maps onto circular arc in 3D Fourier space.",
        "Talbot Effect (Self-Imaging of Periodic Gratings): Monochromatic plane wave incident on periodic grating of pitch $p$ reproduces exact grating image at periodic longitudinal Talbot distances $z_T = \\frac{2 p^2}{\\lambda}$; Fractional Talbot sub-images at fractional multiples."
    ],
    [
        "Fresnel Number Definition: $N_F = \\frac{a^2}{\\lambda z}$.",
        "Fraunhofer Condition: $N_F \\ll 1$ (source/screen far-field).",
        "Cornu Spiral Arc Length: Arc length $s = w$.",
        "Cornu Curvature Formula: $\\kappa(w) = \\pi w$.",
        "Straight Edge Shadow Boundary Intensity: Exactly $1/4$ ($25\\%$) of unobstructed intensity.",
        "Babinet\'s Principle: $U_1 + U_2 = U_0$; $I_1 = I_2$ off-axis.",
        "Talbot Distance Equation: $z_T = \\frac{2 p^2}{\\lambda}$.",
        "Stationary Phase Contribution: Proportional to $1/\\sqrt{|f\'\'(t_s)|}$.",
        "Fresnel Asymptotic Eyes: Spiral centers at $(1/2, 1/2)$ and $(-1/2, -1/2)$.",
        "Exam Tip: In Cornu spiral straight-edge diffraction, intensity at the geometric shadow boundary is ALWAYS $I_0 / 4$, regardless of wavelength or distance."
    ]
)

add_unit(
    "bsc-phm: polarization",
    [
        "Lie Group Theory of Polarization (SU(2) and SO(3)): Isomorphism between 2-state complex Jones space $SU(2)$ and 3-state real rotation space $SO(3)$ on the Poincaré sphere; 2-to-1 homomorphism generated by Pauli spin matrices.",
        "Pauli Matrices as Polarization Generators: $\\sigma_0 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$, $\\sigma_1 = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$, $\\sigma_2 = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$, $\\sigma_3 = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}$; Stokes vector parameters evaluate to expectations $S_k = \\text{Tr}(\\rho \\sigma_k)$.",
        "Mueller-Stokes Matrix Calculus: $4 \\times 4$ real matrix transformation $\\mathbf{S}_{out} = M \\mathbf{S}_{in}$ describing propagation of fully, partially, or unpolarized light through arbitrary optical media; Treats depolarization and diattenuation rigorously.",
        "Pancharatnam-Berry Geometric Phase: Phase acquired by polarized wave undergoing closed cyclical trajectory $C$ on the Poincaré sphere: $\\gamma(C) = -\\frac{1}{2} \\Omega(C)$ where $\\Omega(C)$ is the solid angle enclosed by path on sphere; Topological in origin.",
        "Electromagnetic Wave Propagation in Anisotropic Media: Dielectric permittivity tensor $\\boldsymbol{\\varepsilon} = \\text{diag}(\\varepsilon_x, \\varepsilon_y, \\varepsilon_z)$; Optical indicatrix ellipsoid $\\frac{x^2}{n_x^2} + \\frac{y^2}{n_y^2} + \\frac{z^2}{n_z^2} = 1$; Normal surface and ray velocity surface.",
        "Fresnel Equation of Wave Normals: Biquadratic equation determining two permitted phase velocities $v_1, v_2$ for given wave normal unit vector $\\vec{s}$: $\\frac{s_x^2}{v^2 - v_x^2} + \\frac{s_y^2}{v^2 - v_y^2} + \\frac{s_z^2}{v^2 - v_z^2} = 0$.",
        "Optical Conical Refraction in Biaxial Crystals: Hamilton\'s theoretical prediction of internal and external conical refraction; When wave normal aligns with binormal optical axis of biaxial crystal, single ray refracts into hollow cone of rays.",
        "Kerr Electro-Optic Effect: Quadratic non-linear electro-optic phase modulation: $\\Delta n = \\lambda K E^2$; Induced birefringence proportional to square of applied electric field; Kerr cell shutter operating at picosecond speeds.",
        "Liquid Crystal Director Elasticity (Frank-Oseen Theory): Free energy density of nematic liquid crystals: $F = \\frac{1}{2} K_1 (\\nabla \\cdot \\vec{n})^2 + \\frac{1}{2} K_2 (\\vec{n} \\cdot \\nabla \\times \\vec{n})^2 + \\frac{1}{2} K_3 (\\vec{n} \\times \\nabla \\times \\vec{n})^2$ (Splay, Twist, Bend deformations).",
        "Freedericksz Transition in Liquid Crystals: Threshold voltage $V_{th} = \\pi \\sqrt{\\frac{K_1}{\\varepsilon_0 \\Delta \\varepsilon}}$; Reorientation of nematic director above $V_{th}$ serves as the mathematical physics basis for modern flat panel LCD displays."
    ],
    [
        "Pauli Matrices Identity: $\\sigma_i \\sigma_j = \\delta_{ij} I + i \\varepsilon_{ijk} \\sigma_k$.",
        "Stokes Vector Expectation: $S_k = \\text{Tr}(\\rho \\sigma_k)$.",
        "Mueller Matrix Dimension: $4 \\times 4$ real matrix operating on Stokes vectors.",
        "Geometric Phase Formula: $\\gamma = -\\frac{1}{2} \\Omega$ (half the enclosed solid angle).",
        "Fresnel Wave Normal Equation: $\\sum \\frac{s_i^2}{v^2 - v_i^2} = 0$.",
        "Optical Indicatrix: $\\frac{x^2}{n_x^2} + \\frac{y^2}{n_y^2} + \\frac{z^2}{n_z^2} = 1$.",
        "Kerr Effect Equation: $\\Delta n = \\lambda K E^2$ (quadratic electro-optic effect).",
        "Frank-Oseen Constants: $K_1$ (splay), $K_2$ (twist), $K_3$ (bend).",
        "Freedericksz Critical Voltage: $V_{th} = \\pi \\sqrt{K_1 / (\\varepsilon_0 \\Delta \\varepsilon)}$.",
        "Exam Tip: In Berry phase calculations, remember solid angle of entire sphere is $4\\pi$; a path traversing a hemisphere encloses $2\\pi$ solid angle, giving geometric phase shift $\\gamma = -\\pi$."
    ]
)

# =========================================================================
# 4. PHYSICS LAB II (B.Sc Physics Sem 2)
# =========================================================================

add_unit(
    "bsc-phlab: safety & instrumentation",
    [
        "Optical Laboratory Safety Protocols: Laser safety standards (ANSI Z136.1); Laser hazard classifications (Class 1 to Class 4); Eye protection optical density $OD = \\log_{10}(I_0/I)$ matched to laser wavelengths (e.g. He-Ne $632.8\\text{ nm}$); High-voltage safety on mercury vapor lamps.",
        "Precision Optical Spectrometer Architecture: Collimator (slit + achromatic objective), rotating circular prism table with leveling thumbscrews, telescope with crosswire eyepiece, circular angular vernier scales ($V_1, V_2$).",
        "Spectrometer Alignment Protocols (Schuster\'s Method): Methodical optical leveling using mercury green line; Leveling collimator axis and telescope axis perpendicular to rotation axis; Focusing crosswires and objective for parallel light without parallax.",
        "Vernier Scale Least Count Derivation: Main scale divided into half-degrees ($30\' = 1800\'$); Vernier scale contains 30 divisions matching 29 main scale divisions; Least Count $LC = 1\\text{ MSD} - 1\\text{ VSD} = 30\' - 29\' = 1\' = 60\\text{ arcseconds}$.",
        "Sodium Vapor & Mercury Discharge Lamps: Low-pressure sodium lamp emitting intense yellow doublet ($D_1 = 589.6\\text{ nm}, D_2 = 589.0\\text{ nm}$); Mercury vapor arc lamp providing discrete calibration wavelengths: Yellow ($579.0\\text{ nm}, 577.0\\text{ nm}$), Green ($546.1\\text{ nm}$), Blue ($435.8\\text{ nm}$), Violet ($404.7\\text{ nm}$).",
        "Traveling Microscope Instrumentation: Precision optical microscope mounted on dual-axis lead-screws; Horizontal and vertical vernier scales with least count $LC = 0.001\\text{ cm}$ ($10\\text{ }\\mu\\text{m}$); Parallax elimination in focal image planes.",
        "Spherometer Precision Radius of Curvature Measurement: Three outer legs forming equilateral triangle of side $l$; Central micrometer screw measuring sagitta $h$; Radius of curvature calculation: $R = \\frac{l^2}{6 h} + \\frac{h}{2}$.",
        "Optical Flatness & Monochromatic Fringes: Optical flats made of fused quartz calibrated to $\\lambda/20$ flatness; Visual inspection of air-wedge interference fringe linearity under monochromatic sodium illumination.",
        "Digital Luxmeter & Photodetector Instrumentation: Silicon PIN photodiode sensor measuring illuminance in Lux ($1\\text{ lx} = 1\\text{ lm/m}^2$); Calibrating inverse-square distance law and cosine response.",
        "Laboratory Record Keeping & Data Hygiene: Direct pen entry in bound notebook; Recording duplicate vernier readings ($V_1, V_2$ separated by $180^\\circ$) to eliminate eccentric axis errors; Calculating mean, standard deviation, and fractional errors."
    ],
    [
        "Laser Optical Density Formula: $OD = \\log_{10}(I_{incident} / I_{transmitted})$.",
        "Spectrometer Least Count: $LC = 1\'$ ($1\\text{ arcminute} = 60\\text{ arcseconds}$).",
        "Dual Vernier Purpose: Reading $V_1$ and $V_2$ eliminates circular scale eccentricity error.",
        "Sodium Doublet Wavelengths: $589.0\\text{ nm}$ and $589.6\\text{ nm}$ (mean $589.3\\text{ nm}$).",
        "Traveling Microscope Precision: Least count is typically $0.001\\text{ cm}$ ($10\\text{ }\\mu\\text{m}$).",
        "Spherometer Formula: $R = \\frac{l^2}{6 h} + \\frac{h}{2}$ ($h$ is sagitta).",
        "Schuster\'s Method Purpose: Focuses collimator and telescope for parallel rays without removing prism.",
        "Parallax Removal Check: Crosswire and image must not move relative to each other when eye shifts.",
        "Mercury Green Reference Line: $\\lambda = 546.1\\text{ nm}$ widely used as primary photometric standard.",
        "Exam Tip: In spectrometer viva, always state that two verniers $180^\\circ$ apart are provided specifically to eliminate eccentricity of the graduated circle."
    ]
)

add_unit(
    "bsc-phlab: standard preparations",
    [
        "Standard Solutions for Polarimetry: Preparing high-purity sucrose ($C_{12}H_{22}O_{11}$) stock solutions in distilled water ($10\\%, 15\\%, 20\\%\\text{ w/v}$); Analytical balance weighing to $\\pm 0.1\\text{ mg}$; Temperature equilibration at $20^\\circ\\text{C}$.",
        "Cleaning Optical Components: Dust-free lens cleaning using spectrophotometric-grade optical lens tissue and isopropyl alcohol (IPA); Avoiding scratches on delicate front-surface aluminized mirrors and plane diffraction gratings.",
        "Mercury Lamp Warm-up & Calibration: 15-minute thermal stabilization period to establish constant mercury vapor pressure and sharp emission spectral line profiles; Checking collimator slit width to balance optical flux against diffraction broadening.",
        "Prism Table Leveling Calibration: Adjusting three leveling screws ($T_1, T_2, T_3$) so that reflected image of slit from both polished prism faces appears at identical vertical crosswire heights in telescope.",
        "Diffraction Grating Normal Incidence Adjustment: Aligning plane transmission grating normal to collimated beam; Setting telescope to zero-order beam; Rotating grating until reflected beam from front face coincides with crosswires; Turning table by exactly $45^\\circ$ and locking.",
        "Plano-Convex Lens Cleaning for Newton\'s Rings: Thorough cleaning of convex lens face and glass plate; Checking for dust specks under low-power magnification to guarantee perfect central circular contact spot.",
        "Optical Wedge Glass Slide Preparation: Two clean optical glass slides clamped at one end with thin spacer (tissue paper or wire of diameter $d \\approx 20\\text{ }\\mu\\text{m}$) at distance $L$ to produce straight parallel localized air fringes.",
        "Polarimeter Zero Calibration: Filling polarimeter tube with pure distilled water; Verifying that field of view exhibits uniform equal illumination tint across both halves of half-shade disc at $0.0^\\circ$ reading.",
        "Determination of Spectrometer Slit Width: Calibrating micrometric slit jaws; Selecting optimal slit width $w \\approx \\lambda f / D$ preventing overlapping spectral lines while transmitting sufficient luminous intensity.",
        "Environmental Temperature & Pressure Tracking: Recording ambient room temperature and barometric pressure during experimental trials; Temperature compensation for liquid refractive index $dn/dT \\approx -4 \\times 10^{-4}\\text{ K}^{-1}$."
    ],
    [
        "Sucrose Stock Concentration: $c = \\frac{\\text{mass in grams}}{\\text{volume in mL}} \\times 100\\%$ (w/v).",
        "Normal Incidence Grating Rule: Grating surface must be perpendicular to collimated optical axis.",
        "Grating Cleaning Warning: NEVER touch or wipe ruled grating surface; clean solely with dry air.",
        "Polarimeter Water Blank: Distilled water must exhibit zero optical rotation at $0.0^\\circ$.",
        "Slit Optimization: Narrow slit gives high resolution; wide slit gives high brightness.",
        "Newton\'s Rings Zero Spot: Dust-free center produces dark spot at central contact point.",
        "Temperature Coeff of Refraction: Refractive index drops as temperature increases ($dn/dT < 0$).",
        "Prism Polished Faces: Only 2 faces are polished optical refractors; base face is ground/frosted.",
        "Canada Balsam Refractive Index: $\\mu = 1.55$ perfectly matches calcite ordinary ray critical angle.",
        "Exam Tip: In normal incidence adjustment of grating, explain why turning the table by $45^\\circ$ aligns the grating surface perpendicular to the incident beam."
    ]
)

add_unit(
    "bsc-phlab: experimental procedures",
    [
        "Experiment 1: Wavelength Determination via Newton\'s Rings: Setting up sodium light and glass plate at $45^\\circ$; Focusing traveling microscope on reflected circular rings; Measuring diameters of dark rings $D_{n+m}$ and $D_n$; Calculating $\\lambda = \\frac{D_{n+m}^2 - D_n^2}{4 m R}$.",
        "Experiment 2: Refractive Index of Liquid via Newton\'s Rings: Repeating diameter measurements with drop of water or transparent liquid in air gap; Calculating liquid refractive index $\\mu = \\frac{(D_{n+m}^2 - D_n^2)_{air}}{(D_{n+m}^2 - D_n^2)_{liquid}}$.",
        "Experiment 3: Angle of Minimum Deviation of Prism: Measuring angle of prism $A$ by reflection; Finding angle of minimum deviation $D_m$ for mercury lines; Calculating refractive index via prism formula $\\mu = \\frac{\\sin\\frac{A + D_m}{2}}{\\sin\\frac{A}{2}}$.",
        "Experiment 4: Dispersive Power of Prism Material: Measuring refractive indices for mercury blue ($F$), yellow ($D$), and red/violet ($C$) spectral lines; Calculating dispersive power $\\omega = \\frac{\\mu_F - \\mu_C}{\\mu_D - 1}$.",
        "Experiment 5: Diffraction Grating Wavelength Calibration: Normal incidence setup with mercury arc; Measuring diffraction angles $\\theta$ for spectral lines across order $m = 1$ and $m = 2$; Calculating wavelengths $\\lambda = \\frac{(a + b) \\sin\\theta}{m}$.",
        "Experiment 6: Grating Resolving Power & Sodium Doublet: Measuring minimum angular separation $\\Delta \\theta$ resolving sodium doublet ($589.0\\text{ nm}, 589.6\\text{ nm}$); Calculating experimental resolving power $\\mathcal{R} = \\lambda / \\Delta \\lambda \\approx 982$.",
        "Experiment 7: Thickness of Thin Wire via Air Wedge: Placing thin wire between glass plates; Counting fringe count $N$ across length $L$ under sodium illumination; Calculating wire thickness $t = \\frac{N \\lambda L}{2 x}$.",
        "Experiment 8: Specific Rotation of Sugar Solution: Measuring optical rotation $\\theta$ across varying sucrose concentrations ($5\\%, 10\\%, 15\\%, 20\\%$) in polarimeter; Plotting $\\theta$ vs concentration to determine specific rotation $[\\alpha]$.",
        "Experiment 9: Verification of Brewster\'s Law: Reflecting unpolarized light from polished glass plate at varying angles of incidence $\\theta_i$; Detecting extinction angle through rotating analyzer; Verifying $\\mu = \\tan\\theta_p$.",
        "Experiment 10: Verification of Malus\'s Law: Transmitting polarized laser beam through rotating analyzer; Measuring photodetector optical power $I(\\theta)$ at $10^\\circ$ angular increments; Confirming linear regression of $I$ vs $\\cos^2\\theta$."
    ],
    [
        "Prism Formula: $\\mu = \\frac{\\sin[(A + D_m)/2]}{\\sin(A/2)}$.",
        "Newton\'s Rings Wavelength: $\\lambda = \\frac{D_{n+m}^2 - D_n^2}{4 m R}$.",
        "Dispersive Power Equation: $\\omega = \\frac{\\mu_V - \\mu_R}{\\mu_Y - 1}$.",
        "Grating Equation: $(a + b) \\sin\\theta = m \\lambda$.",
        "Air Wedge Thickness: $t = \\frac{\\lambda L}{2 \\beta}$ (where $\\beta$ is fringe width).",
        "Specific Rotation Slope: $[\\alpha] = \\frac{\\text{Slope}}{l}$ from $\\theta$ vs $c$ plot.",
        "Brewster Equation: $\\tan\\theta_p = \\mu$.",
        "Malus Law Verification: Plot of $I$ against $\\cos^2\\theta$ must be a straight line passing through origin.",
        "Sodium Doublet Resolving Power: $\\mathcal{R} = \\frac{589.3}{0.6} \\approx 982$.",
        "Exam Tip: In Newton\'s rings measurements, always approach ring boundaries from ONE direction with the traveling microscope screw to eliminate backlash error."
    ]
)

add_unit(
    "bsc-phlab: data verification",
    [
        "Backlash Error Elimination Protocol: Lead-screw mechanical backlash error; Rule: always advance traveling microscope screw in a single continuous forward direction when traversing ring edges; Never reverse screw mid-measurement.",
        "Difference of Squares Linear Regression: In Newton\'s rings, plotting $D_n^2$ against ring number $n$; Linear equation $D_n^2 = 4 \\lambda R n + c$; Slope $S = 4 \\lambda R$; Slope calculation averages out individual measurement errors.",
        "Spherometer Radius Calculation & Propagation: Error propagation formula for lens radius $R = \\frac{l^2}{6 h} + \\frac{h}{2}$: $\\frac{\\Delta R}{R} = 2 \\frac{\\Delta l}{l} + \\frac{\\Delta h}{h}$; Ensuring lens curvature is determined to $\\pm 0.5\\%$ precision.",
        "Vernier Scale Eccentricity Correction: Calculating angle of deviation as $\\theta = \\frac{|V_{1,L} - V_{1,R}| + |V_{2,L} - V_{2,R}|}{4}$; Eliminates mechanical off-center mounting errors of spectrometer circular plate.",
        "Grating Line Density Verification: Verifying manufacturer grating specification (e.g. 15000 lines/inch $= 590.55\\text{ lines/mm}$); Calculating grating element $(a + b) = 1.693 \\times 10^{-6}\\text{ m}$.",
        "Air Wedge Uniform Linearity Audit: Measuring consecutive fringe widths $\\beta_1, \\beta_2, \\dots, \\beta_{10}$; Standard deviation $< 2\\%$ confirms perfect optical slide flatness and uniform wedge slope.",
        "Polarimeter Sugar Inversion Control: Verifying that fresh sucrose exhibits constant dextrorotatory angle; Ensuring non-acidic water to prevent spontaneous inversion into levorotatory equimolar glucose-fructose mixture.",
        "Photodetector Dark Current Subtraction: In Malus\'s law experiment, recording ambient background voltage $V_{dark}$ with laser blocked; Subtracting $V_{dark}$ from all measurements: $I_{corrected} = V_{measured} - V_{dark}$.",
        "Spectrometer Minimum Deviation Verification: Observing that moving prism table in either direction causes spectral line image to reverse its motion at $D_m$; Confirming true stationary turning point.",
        "Fractional Experimental Error Calculation: Percentage error calculation: $\\text{Error} = \\frac{|\\lambda_{experimental} - \\lambda_{literature}|}{\\lambda_{literature}} \\times 100\\%$; Target experimental accuracy $< 1.0\\%$."
    ],
    [
        "Backlash Avoidance Rule: Drive micrometer strictly in one direction.",
        "Newton Ring Slope: Slope of $D_n^2$ vs $n$ equals $4 \\lambda R$.",
        "Eccentricity Cancellation: Average readings across both opposite verniers $V_1, V_2$.",
        "Grating Element Conversion: 15000 lines/inch $\\implies (a+b) = 2.54 / 15000 = 1.693\\text{ }\\mu\\text{m}$.",
        "Air Wedge Linearity: Constant $\\beta$ indicates uniform flat glass plates.",
        "Minimum Deviation Stationary Point: $d\\theta/dt = 0$ at exact turning point.",
        "Dark Current Correction: $V_{true} = V_{observed} - V_{dark}$.",
        "Malus Law Linearity Criterion: $R^2 > 0.99$ for $I$ vs $\\cos^2\\theta$.",
        "Polarimeter Zero Point: Subtracted from observed rotation angle.",
        "Exam Tip: In prism experiments, always prove that $r_1 = r_2 = A/2$ and $i = e = (A + D_m)/2$ at minimum deviation before substituting into formula."
    ]
)

add_unit(
    "bsc-phlab: record & viva",
    [
        "Physics Laboratory Record Standards: Formal write-up: Aim, Apparatus Schematic, Optical Ray Diagram, Mathematical Formulae & Symbols, Tabulated Observations with Units, Sample Calculations, Error Analysis, Result with Standard Units.",
        "Viva Voce Core Question: Why Central Ring is Dark in Newton\'s Rings: At center, air film thickness $t \\to 0$; Path difference is solely due to $\\lambda/2$ phase shift on reflection from lower glass plate, causing destructive interference ($I = 0$).",
        "Viva Voce Core Question: What Happens if White Light is Used in Newton\'s Rings: Central ring remains dark; Surrounding rings become colored because different wavelengths satisfy constructive condition at different radii ($r \\propto \\sqrt{\\lambda}$).",
        "Viva Voce Core Question: Resolving Power vs Dispersive Power of Grating: Dispersive power $\\frac{d\\theta}{d\\lambda} = \\frac{m}{(a+b)\\cos\\theta}$ measures angular separation of wavelengths; Resolving power $\\frac{\\lambda}{\\Delta \\lambda} = m N$ measures ability to distinguish two closely adjacent spectral lines.",
        "Viva Voce Core Question: Why Grating Spectra are Pure Compared to Prism: Grating dispersion is linear ($d\\theta/d\\lambda \\propto m$), whereas prism dispersion is non-linear ($dn/d\\lambda \\propto 1/\\lambda^3$), spreading violet far more than red.",
        "Viva Voce Core Question: Brewster\'s Law Physical Mechanism: At Brewster angle $\\theta_p$, refracted ray dipole oscillations align parallel to the reflected ray; Since oscillating dipoles emit zero radiation along their axis, reflected beam has zero parallel polarization.",
        "Viva Voce Core Question: Function of Laurent Half-Shade Device: Divides circular optical field into two halves with $\\pi/2$ phase difference; Enhances human eye sensitivity by matching equal darkness rather than estimating maximum brightness.",
        "Viva Voce Core Question: Condition of Missing Orders in Grating: Occurs when diffraction minimum coincides with interference maximum: $\\frac{a+b}{a} = \\frac{n}{m}$ where $n$ is interference order and $m$ is diffraction order.",
        "Viva Voce Core Question: Schuster\'s Method Advantages: Allows focusing spectrometer collimator and telescope for infinity using only the prism and spectral lamp, without requiring distant outdoor objects.",
        "Laboratory Practical Marking Scheme: Assessment components: Experimental arrangement & optical leveling ($20\\%$), Procedural skill & measurement accuracy ($30\\%$), Graph plotting & slope calculation ($15\\%$), Lab manual notebook ($15\\%$), Oral viva voce ($20\\%$)."
    ],
    [
        "Dark Center Reason: $\\pi$ phase inversion on reflection from denser glass plate.",
        "White Light Newton Rings: Few colored concentric rings around a dark center.",
        "Dispersive vs Resolving Power: Dispersion separates wavelengths; resolving power distinguishes adjacent lines.",
        "Grating Linear Dispersion: Equal wavelength differences produce equal angular separations.",
        "Brewster Dipole Zero Radiation: Dipoles do not radiate along their oscillation axis.",
        "Half-Shade Advantage: Human eye detects brightness balance far more accurately than absolute intensity.",
        "Missing Orders Equation: $\\frac{a+b}{a} = \\frac{n}{m}$.",
        "Schuster Method Utility: Eliminates need for external distant target to focus telescope.",
        "Prism Minimum Deviation Symmetry: Angle of incidence equals angle of emergence ($i = e$).",
        "Exam Tip: In oral viva, never say that the central Newton ring is dark because light is blocked; explain that destructive interference occurs due to the $\\lambda/2$ phase shift on reflection."
    ]
)

# =========================================================================
# 5. PHYSICAL & GENERAL CHEMISTRY – II (B.Sc Life Sciences Sem 2)
# =========================================================================

add_unit(
    "bsc-chls: thermodynamics",
    [
        "Bio-Thermodynamics & Living Systems: Living cells as thermodynamic open systems exchanging matter and energy with environment; Maintenance of non-equilibrium steady states through continuous dissipation of free energy.",
        "First Law of Thermodynamics in Biology: Conservation of energy $\\Delta U = q - w$; Biological metabolic energy transformations converting nutrient enthalpy into mechanical work and heat.",
        "Gibbs Free Energy & Spontaneity in Biochemical Systems: Free energy state function $G = H - T S$; Reaction spontaneity criterion at constant temperature and pressure: $\\Delta G < 0$ (exergonic); Non-spontaneous reactions have $\\Delta G > 0$ (endergonic).",
        "Standard Biochemical Free Energy ($\\Delta G^{\\circ\\prime}$): Standard biochemical state defined at physiological $pH = 7.0$, $[H_2O] = 55.5\\text{ M}$, $[Mg^{2+}] = 1\\text{ mM}$, $T = 298.15\\text{ K}$, $P = 1\\text{ atm}$; Relationship $\\Delta G = \\Delta G^{\\circ\\prime} + R T \\ln Q$.",
        "Thermodynamic Coupling & ATP Hydrolysis: Endergonic reactions ($+ \\Delta G$) driven by coupling to exergonic hydrolysis of Adenosine Triphosphate (ATP): $\\text{ATP} + \\text{H}_2\\text{O} \\to \\text{ADP} + \\text{P}_i$ (standard $\\Delta G^{\\circ\\prime} \\approx -30.5\\text{ kJ/mol}$).",
        "Chemical Affinity & Equilibrium Constant: At chemical equilibrium $\\Delta G = 0 \\implies \\Delta G^{\\circ\\prime} = -R T \\ln K_{eq}'$; Large equilibrium constant indicates exergonic reaction running far toward product completion.",
        "Enthalpy vs Entropy Driven Biochemical Processes: Protein folding thermodynamics: Hydrophobic effect drives positive conformational entropy $\\Delta S > 0$ by releasing ordered clathrate water cages; Enthalpic hydrogen bonding $\\Delta H < 0$.",
        "van \'t Hoff Isochore in Biochemistry: Temperature dependence of equilibrium constants: $\\frac{d \\ln K_{eq}}{dT} = \\frac{\\Delta H^\\circ}{R T^2}$; Integrated form $\\ln \\frac{K_2}{K_1} = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$; Distinguishes endothermic from exothermic enzymatic transitions.",
        "Second Law & Cellular Entropy: Organisms maintain low internal entropy (high structural organization) by exporting high entropy (heat, degraded metabolites) into surroundings; Total universe entropy strictly increases $\\Delta S_{total} > 0$.",
        "High-Energy Phosphate Compounds: Phosphate transfer potential ranking: Phosphoenolpyruvate (PEP, $\\Delta G^{\\circ\\prime} = -61.9\\text{ kJ/mol}$) > 1,3-Bisphosphoglycerate > Phosphocreatine > ATP > Glucose-6-Phosphate; Thermodynamic basis for substrate-level phosphorylation."
    ],
    [
        "Gibbs Criterion: $\\Delta G < 0$ indicates spontaneous (exergonic) reaction.",
        "Biochemical Free Energy Relation: $\\Delta G = \\Delta G^{\\circ\\prime} + R T \\ln Q$.",
        "Equilibrium Link: $\\Delta G^{\\circ\\prime} = -R T \\ln K_{eq}'$.",
        "ATP Hydrolysis Energy: $\\Delta G^{\\circ\\prime} = -30.5\\text{ kJ/mol}$.",
        "Coupled Reaction Principle: Additive free energies: $\\Delta G_{total} = \\Delta G_1 + \\Delta G_2 < 0$.",
        "van \'t Hoff Equation: $\\ln(K_2/K_1) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.",
        "Biochemical Standard State: $pH = 7.0$ ($[H^+] = 10^{-7}\\text{ M}$).",
        "Hydrophobic Effect Thermodynamics: Driven by increase in water entropy ($\\Delta S > 0$).",
        "Open System Character: Living cells exchange both matter and energy continuously.",
        "Exam Tip: In bio-thermodynamics, distinguish between standard chemical $\\Delta G^\\circ$ ($pH = 0$) and standard biological $\\Delta G^{\\circ\\prime}$ ($pH = 7.0$)."
    ]
)

# =========================================================================
# 5. PHYSICAL & GENERAL CHEMISTRY – II (Continuation: Units 2-5)
# =========================================================================

add_unit(
    "bsc-chls: chemical equilibrium",
    [
        "Dynamic Equilibrium & Law of Mass Action: Reversible chemical processes attain dynamic equilibrium when forward and reverse rates are equal: $r_f = r_r$; Thermodynamic equilibrium constant $K = \prod a_i^{\nu_i}$ formulated in activities.",
        "Relationship Between $K_p$ and $K_c$: For gas-phase equilibria: $K_p = K_c (R T)^{\Delta n_g}$ where $\Delta n_g = \sum \nu_{products} - \sum \nu_{reactants}$; When $\Delta n_g = 0$, $K_p = K_c$ dimensionally independent of pressure.",
        "Le Chatelier's Principle & Physiological Homeostasis: Any disturbance applied to system in equilibrium induces shift countering the disturbance; Physiological blood gas equilibrium: $\text{CO}_2 + \text{H}_2\text{O} \rightleftharpoons \text{H}_2\text{CO}_3 \rightleftharpoons \text{H}^+ + \text{HCO}_3^-$.",
        "Acid-Base Equilibria & Autoprotolysis of Water: Self-ionization $2 \text{H}_2\text{O} \rightleftharpoons \text{H}_3\text{O}^+ + \text{OH}^-$; Ionic product $K_w = [\text{H}^+][\text{OH}^-] = 1.0 \times 10^{-14}$ at $25^\circ\text{C}$; pH scale defined as $\text{pH} = -\log_{10}[\text{H}^+]$.",
        "Weak Acid Dissociation Constant ($K_a$) & Ostwald's Dilution Law: Monoprotic dissociation $\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^-$; Dissociation degree $\alpha = \sqrt{K_a/C}$ for $\alpha \ll 1$; Dilution increases degree of ionization asymptotically to unity.",
        "Henderson-Hasselbalch Formulation for Biological Buffers: Buffer pH governing conjugate acid-base pairs: $\text{pH} = \text{p}K_a + \log_{10}\left(\frac{[\text{A}^-]}{[\text{HA}]}\right)$; Buffer capacity $\beta = \frac{dB}{d\text{pH}}$ reaches maximum at $\text{pH} = \text{p}K_a$.",
        "Physiological Bicarbonate & Phosphate Buffer Systems: Bicarbonate buffer ($\text{p}K_a = 6.1$) regulates blood plasma at $\text{pH} = 7.40 \pm 0.05$ via pulmonary expiration of volatile $\text{CO}_2$; Intracellular phosphate buffer ($\text{H}_2\text{PO}_4^- / \text{HPO}_4^{2-}$, $\text{p}K_a = 6.86$).",
        "Solubility Product ($K_{sp}$) & Common Ion Effect: Heterogeneous dissolution $\text{M}_m \text{A}_n(s) \rightleftharpoons m \text{M}^{n+} + n \text{A}^{m-}$; Ionic product $Q_{sp} > K_{sp}$ causes precipitation; Precipitation of calcium oxalate kidney stones.",
        "Salt Hydrolysis & Hydrolysis Constant ($K_h$): Salt of weak acid and strong base yields alkaline solution: $\text{pH} = 7 + \frac{1}{2}\text{p}K_a + \frac{1}{2}\log C$; Salt of weak acid and weak base: $\text{pH} = 7 + \frac{1}{2}\text{p}K_a - \frac{1}{2}\text{p}K_b$, independent of concentration.",
        "Coupled Biochemical Equilibria & Free Energy Additivity: Interconnected biochemical pathways driven by common intermediate; Pyruvate kinase reaction coupled to phosphoenolpyruvate hydrolysis drives overall reaction equilibrium toward completion."
    ],
    [
        "Mass Action Relation: $K_p = K_c (R T)^{\Delta n_g}$.",
        "Water Autoprotolysis: $K_w = [\text{H}^+][\text{OH}^-] = 10^{-14}$ at $298\text{ K}$.",
        "Ostwald Dilution Formula: $\alpha = \sqrt{K_a/C}$.",
        "Henderson-Hasselbalch Equation: $\text{pH} = \text{p}K_a + \log\left(\frac{[\text{Conjugate Base}]}{[\text{Acid}]}\right)$.",
        "Maximum Buffer Capacity: Occurs at $\text{pH} = \text{p}K_a$.",
        "Blood Plasma pH Norm: Maintained strictly between $7.35$ and $7.45$.",
        "Precipitation Criterion: Precipitation occurs when ionic product $Q > K_{sp}$.",
        "Salt Hydrolysis Formula: $\text{pH} = 7 + \frac{1}{2}\text{p}K_a + \frac{1}{2}\log C$ for weak acid-strong base salt.",
        "Le Chatelier Pressure Effect: Increasing pressure shifts equilibrium toward side with fewer gas moles.",
        "Exam Tip: In Henderson-Hasselbalch buffer calculations, the ratio $[\text{A}^-]/[\text{HA}]$ remains constant upon moderate dilution because volume cancels from numerator and denominator."
    ]
)

add_unit(
    "bsc-chls: solutions",
    [
        "Thermodynamic Definition of Ideal Solutions: Ideal solutions obey Raoult's law across all concentrations: $P_i = x_i P_i^\circ$; Enthalpy of mixing $\Delta H_{mix} = 0$, volume change on mixing $\Delta V_{mix} = 0$, entropy of mixing $\Delta S_{mix} = -R \sum x_i \ln x_i > 0$.",
        "Non-Ideal Solutions & Activity Coefficients: Real liquid mixtures deviate from ideality; Chemical potential $\mu_i = \mu_i^\circ + R T \ln a_i = \mu_i^\circ + R T \ln(\gamma_i x_i)$; Positive deviations (e.g. ethanol-water) vs negative deviations (acetone-chloroform).",
        "Colligative Properties in Biological Media: Properties depending strictly on number of solute particles per unit volume: Vapor pressure lowering $\frac{\Delta P}{P_1^\circ} = x_2$, Boiling point elevation $\Delta T_b = K_b m$, Freezing point depression $\Delta T_f = K_f m$, Osmotic pressure $\Pi = i C R T$.",
        "van 't Hoff Factor ($i$): Ratio of observed colligative effect to theoretical non-electrolyte value: $i = 1 + (n - 1)\alpha$ for electrolyte dissociating into $n$ ions with degree of dissociation $\alpha$; Association yields $i = 1 - (1 - 1/n)\beta$.",
        "Osmotic Pressure & Living Cells: van 't Hoff equation $\Pi = i C R T$; Osmolarity ($\text{Osm/L}$) vs Osmolality ($\text{Osm/kg}$); Isotonic saline ($0.9\% \text{ w/v NaCl}$, $\approx 308\text{ mOsm/L}$); Hypotonic media cause erythrocyte hemolysis; Hypertonic media cause crenation.",
        "Gibbs-Donnan Membrane Equilibrium: Unequal distribution of diffusible ions across semipermeable membrane containing non-diffusible macromolecular polyion (e.g., intracellular proteins $\text{Pr}^{z-}$): $\frac{[\text{K}^+]_{in}}{[\text{K}^+]_{out}} = \frac{[\text{Cl}^-]_{out}}{[\text{Cl}^-]_{in}}$; Produces Donnan osmotic pressure and membrane electrical potential.",
        "Reverse Osmosis & Desalination: Applying hydrostatic pressure exceeding osmotic pressure ($\Delta P > \Pi$) forces pure solvent backward through asymmetric cellulose acetate or polyamide membrane; Industrial water purification.",
        "Dialysis & Hemodialysis in Artificial Kidneys: Diffusion of low-molecular-weight metabolic wastes (urea, creatinine) across semipermeable cellophane membrane down concentration gradient while retaining plasma proteins and cellular blood components.",
        "Colloids & Tyndall Effect in Bio-Fluids: Lyophilic vs lyophobic colloids; Cytoplasm as complex colloidal sol-gel network; Light scattering by dispersed macromolecular particles (Tyndall cone); Brownian motion preventing gravitational sedimentation.",
        "Surfactants, Micelles & Membrane Lipids: Amphiphilic molecules with polar head and non-polar aliphatic tail; Critical Micelle Concentration (CMC); Self-assembly into spherical micelles, liposomes, and phospholipid lipid bilayers."
    ],
    [
        "Raoult's Law Equation: $P_1 = x_1 P_1^\circ$.",
        "Vapor Pressure Lowering: $\frac{P_1^\circ - P_1}{P_1^\circ} = \frac{n_2}{n_1 + n_2} \approx x_2$.",
        "van 't Hoff Dissociation Factor: $i = 1 + (n - 1)\alpha$.",
        "Osmotic Pressure Formula: $\Pi = i C R T$.",
        "Freezing Point Depression: $\Delta T_f = i K_f m$.",
        "Isotonic Normal Saline: $0.9\% \text{ NaCl}$ ($154\text{ mM NaCl}$, $\approx 308\text{ mOsm/L}$).",
        "Donnan Equilibrium Relation: $[\text{K}^+]_{in} [\text{Cl}^-]_{in} = [\text{K}^+]_{out} [\text{Cl}^-]_{out}$.",
        "Reverse Osmosis Driving Condition: Applied pressure $\Delta P > \Pi$.",
        "Ideal Solution Mixing Enthalpy: $\Delta H_{mix} = 0$.",
        "Exam Tip: In molecular weight determinations of proteins and macromolecules, osmotic pressure is preferred over freezing point depression because it yields large, easily measurable pressure signals even at millimolar concentrations."
    ]
)

add_unit(
    "bsc-chls: electrochemistry",
    [
        "Electrolytic vs Galvanic Conduction: Electrolytic cells consume electrical energy to drive non-spontaneous redox reactions; Galvanic (voltaic) cells convert spontaneous chemical free energy into electrical work: $\Delta G = -n F E_{cell}$.",
        "Electrochemical Cell Potential & Sign Conventions: Standard cell potential $E_{cell}^\circ = E_{cathode}^\circ - E_{anode}^\circ$ using IUPAC standard reduction potentials; Standard Hydrogen Electrode (SHE, $\text{Pt}|\text{H}_2(1\text{ atm})|\text{H}^+(1\text{ M})$ assigned $E^\circ = 0.00\text{ V}$).",
        "Nernst Equation for Bio-Redox Half-Cells: Half-cell reduction potential: $E = E^\circ - \frac{R T}{n F}\ln\left(\frac{[\text{Red}]}{[\text{Ox}]}\right)$; At $25^\circ\text{C}$ ($298\text{ K}$), $E = E^\circ - \frac{0.0591}{n}\log_{10}\left(\frac{[\text{Red}]}{[\text{Ox}]}\right)$.",
        "Standard Biochemical Reduction Potential ($E^{\circ\prime}$): Measured at physiological $\text{pH} = 7.0$; Free energy link: $\Delta G^{\circ\prime} = -n F \Delta E^{\circ\prime}$; Conversion from chemical $E^\circ$ at $\text{pH} = 0$: $E^{\circ\prime} = E^\circ - \frac{m}{n}(0.0591 \times 7)$.",
        "Mitochondrial Electron Transport Chain Redox Cascade: Electrons flow down thermodynamic redox gradient: $\text{NAD}^+/\text{NADH}$ ($E^{\circ\prime} = -0.32\text{ V}$) $\to$ Flavin FMN $\to$ Coenzyme Q $\to$ Cytochrome b $\to$ Cytochrome c ($+0.25\text{ V}$) $\to$ $\frac{1}{2}\text{O}_2/\text{H}_2\text{O}$ ($E^{\circ\prime} = +0.82\text{ V}$).",
        "Cellular Resting Membrane Potential & Nernst Potential: Equilibrium potential for single permeant ion: $V_m = \frac{R T}{z F}\ln\left(\frac{[\text{Ion}]_{out}}{[\text{Ion}]_{in}}\right)$; For potassium ($\text{K}^+$): $E_K \approx -90\text{ mV}$; For sodium ($\text{Na}^+$): $E_{Na} \approx +60\text{ mV}$.",
        "Goldman-Hodgkin-Katz (GHK) Voltage Equation: Multi-ion resting potential accounting for relative membrane permeabilities ($P_K : P_{Na} : P_{Cl}$): $V_m = \frac{R T}{F}\ln\left(\frac{P_K[\text{K}^+]_{out} + P_{Na}[\text{Na}^+]_{out} + P_{Cl}[\text{Cl}^-]_{in}}{P_K[\text{K}^+]_{in} + P_{Na}[\text{Na}^+]_{in} + P_{Cl}[\text{Cl}^-]_{out}}\right)$.",
        "Glass Membrane pH Electrode: Ion-selective glass membrane developing phase-boundary potential dependent on hydrogen ion activity gradient: $E = \text{constant} - \frac{2.303 R T}{F}\text{pH}$; Internal $\text{Ag/AgCl}$ reference half-cell.",
        "Amperometric & Potentiometric Biosensors: Enzymatic biosensors; Clark oxygen electrode measuring $\text{O}_2$ reduction current; Glucose oxidase sensor converting glucose to gluconolactone and $\text{H}_2\text{O}_2$, detected electrochemically via anodic oxidation of $\text{H}_2\text{O}_2$ at $+0.6\text{ V}$.",
        "Conductometric Titrations of Biological Electrolytes: Molar conductance $\Lambda_m = \kappa / C$; High ionic mobility of $\text{H}^+$ ($349.8\text{ S cm}^2/\text{mol}$) and $\text{OH}^-$ ($198.6\text{ S cm}^2/\text{mol}$) via Grotthuss proton-hopping mechanism."
    ],
    [
        "Free Energy Electrical Link: $\Delta G = -n F E_{cell}$.",
        "Standard Cell Potential: $E_{cell}^\circ = E_{cathode}^\circ - E_{anode}^\circ$.",
        "Nernst Equation at 298 K: $E = E^\circ - \frac{0.0591}{n}\log Q$.",
        "Faraday Constant: $F \approx 96485\text{ C/mol}$.",
        "Nernst Ion Equilibrium Potential: $E_{ion} = \frac{R T}{z F}\ln\left(\frac{[\text{Ion}]_{out}}{[\text{Ion}]_{in}}\right)$.",
        "Oxygen Terminal Potential: $\frac{1}{2}\text{O}_2 + 2\text{H}^+ + 2e^- \to \text{H}_2\text{O}$ has $E^{\circ\prime} = +0.82\text{ V}$.",
        "NADH Oxidation Potential: $\text{NAD}^+ + \text{H}^+ + 2e^- \to \text{NADH}$ has $E^{\circ\prime} = -0.32\text{ V}$.",
        "Glass Electrode Slope: $59.16\text{ mV}$ potential change per unit pH change at $25^\circ\text{C}$.",
        "Grotthuss Mechanism: Exceptionally rapid proton mobility in water via hydrogen-bond hopping.",
        "Exam Tip: In bio-energetics, a positive cell voltage difference ($\Delta E^{\circ\prime} > 0$) strictly corresponds to an exergonic spontaneous reaction ($\Delta G^{\circ\prime} < 0$)."
    ]
)

add_unit(
    "bsc-chls: reaction kinetics",
    [
        "Reaction Rates & Differential Rate Laws: Reaction velocity $v = -\frac{1}{a}\frac{d[\text{A}]}{dt} = k [\text{A}]^m [\text{B}]^n$; Order of reaction $m + n$ determined experimentally; Molecularity defined as number of reacting species in elementary step.",
        "Integrated Rate Laws for Zero, First, and Second Order: Zero order: $[\text{A}]_t = [\text{A}]_0 - k t$, $t_{1/2} = [\text{A}]_0 / (2k)$; First order: $\ln[\text{A}]_t = \ln[\text{A}]_0 - k t$, $t_{1/2} = \frac{\ln 2}{k}$; Second order ($2\text{A} \to \text{P}$): $\frac{1}{[\text{A}]_t} = \frac{1}{[\text{A}]_0} + k t$, $t_{1/2} = \frac{1}{k [\text{A}]_0}$.",
        "Half-Life ($t_{1/2}$) Independence in First-Order Kinetics: First-order radioactive decay and biological drug clearance (pharmacokinetics) exhibit constant half-life independent of initial dose: $t_{1/2} = 0.693/k$.",
        "Temperature Dependence & Arrhenius Equation: Rate constant increases exponentially with temperature: $k = A e^{-E_a/(R T)}$; Linearized logarithmic form $\ln k = \ln A - \frac{E_a}{R T}$; Two-temperature formula $\ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$.",
        "Activation Energy ($E_a$) & Transition State Theory: Reactants overcome Gibbs activation energy barrier $\Delta G^\ddagger = \Delta H^\ddagger - T \Delta S^\ddagger$ to form activated complex; Biological enzymes accelerate reaction rates by lowering $E_a$ by $20\text{--}80\text{ kJ/mol}$.",
        "Michaelis-Menten Enzyme Kinetics: Enzymatic mechanism $\text{E} + \text{S} \rightleftharpoons \text{ES} \to \text{E} + \text{P}$; Steady-state assumption $\frac{d[\text{ES}]}{dt} = 0$; Rate velocity equation $v = \frac{V_{max}[\text{S}]}{K_m + [\text{S}]}$ where $K_m = \frac{k_{-1} + k_2}{k_1}$.",
        "Significance of Kinetic Constants $K_m$ and $k_{cat}$: Michaelis constant $K_m$ equals substrate concentration producing half-maximal velocity ($v = V_{max}/2$); Measures substrate affinity; Catalytic constant (turnover number) $k_{cat} = V_{max}/[\text{E}]_t$; Specificity constant $k_{cat}/K_m$.",
        "Lineweaver-Burk Double Reciprocal Analysis: Linear transformation $\frac{1}{v} = \frac{K_m}{V_{max}}\frac{1}{[\text{S}]} + \frac{1}{V_{max}}$; Y-intercept yields $1/V_{max}$; X-intercept yields $-1/K_m$; Slope equals $K_m / V_{max}$.",
        "Reversible Enzyme Inhibition Kinetics: Competitive inhibition increases apparent $K_m^{app} = \alpha K_m$ with unchanged $V_{max}$; Non-competitive inhibition decreases $V_{max}^{app} = V_{max}/\alpha$ with unchanged $K_m$; Uncompetitive inhibition reduces both $K_m$ and $V_{max}$ in equal proportion.",
        "Temperature Coefficient ($Q_{10}$) & Enzyme Denaturation: Physiological rate ratio for $10^\circ\text{C}$ rise: $Q_{10} = \frac{k_{T+10}}{k_T} \approx 2\text{--}3$ for enzymatic reactions up to optimum temperature; Thermal unfolding of tertiary protein structure destroys catalytic activity above $50^\circ\text{C}$."
    ],
    [
        "First-Order Integrated Equation: $\ln([\text{A}]_0 / [\text{A}]_t) = k t$.",
        "First-Order Half-Life: $t_{1/2} = \frac{\ln 2}{k} \approx \frac{0.693}{k}$.",
        "Arrhenius Rate Equation: $k = A e^{-E_a/(R T)}$.",
        "Arrhenius Two-Point Form: $\ln(k_2/k_1) = \frac{E_a}{R}\left(\frac{T_2 - T_1}{T_1 T_2}\right)$.",
        "Michaelis-Menten Equation: $v = \frac{V_{max}[\text{S}]}{K_m + [\text{S}]}$.",
        "Lineweaver-Burk Equation: $\frac{1}{v} = \frac{K_m}{V_{max}}\frac{1}{[\text{S}]} + \frac{1}{V_{max}}$.",
        "Competitive Inhibition Impact: Apparent $K_m$ increases, $V_{max}$ stays constant.",
        "Non-Competitive Inhibition Impact: $V_{max}$ decreases, $K_m$ stays constant.",
        "Catalytic Efficiency Metric: Ratio $k_{cat} / K_m$ (diffusion limit $\approx 10^8\text{--}10^9\text{ M}^{-1}\text{s}^{-1}$).",
        "Exam Tip: In Lineweaver-Burk plots, competitive inhibitors yield lines intersecting at the same point on the vertical y-axis ($1/V_{max}$), while non-competitive inhibitors intersect at the horizontal x-axis ($-1/K_m$)."
    ]
)

# =========================================================================
# 6. PHYSICAL CHEMISTRY – II (B.Sc Biotech / Microbiology Sem 2)
# =========================================================================

add_unit(
    "bsc-chbt: thermodynamics",
    [
        "Biopolymer Conformational Thermodynamics: Conformational stability of native globular proteins and duplex DNA; Native-to-denatured transition modeled as two-state cooperative equilibrium: $\text{N} \rightleftharpoons \text{D}$ with equilibrium constant $K_D = [\text{D}]/[\text{N}]$.",
        "Differential Scanning Calorimetry (DSC): Direct thermal measurement of macromolecular heat capacity $C_p(T)$; Excess heat capacity peak $\Delta C_p^{ex}$; Area under DSC thermogram yields calorimetric enthalpy of denaturation: $\Delta H_{cal} = \int \Delta C_p dT$.",
        "van 't Hoff Enthalpy vs Calorimetric Enthalpy: van 't Hoff enthalpy evaluated from temperature slope of equilibrium constant: $\Delta H_{vH} = 4 R T_m^2 \frac{\Delta C_{p,max}}{\Delta H_{cal}}$; Ratio $\Delta H_{cal} / \Delta H_{vH} = 1$ demonstrates strict two-state cooperativity.",
        "DNA Thermal Melting ($T_m$) Thermodynamics: Helix-to-random coil phase transition; Melting temperature $T_m$ where $50\%$ of double-stranded DNA duplex is unstacked: $T_m = \frac{\Delta H^\circ}{\Delta S^\circ + R \ln(C_T/4)}$ for non-self-complementary duplexes.",
        "Nearest-Neighbor Base Stacking Model: Enthalpic contribution dominated by vertical $\pi\text{--}\pi$ aromatic orbital stacking between adjacent nucleotide base pairs rather than horizontal Watson-Crick hydrogen bonds; High GC content elevates $T_m$ due to stronger stacking interactions.",
        "Hydrophobic Effect & Solvent Reorganization: Non-polar aliphatic side chains (leucine, isoleucine, valine) buried in hydrophobic core; Positive entropy gain $\Delta S_{solv} > 0$ upon folding due to release of structured cage-like clathrate water molecules into bulk solvent.",
        "Heat Capacity Discontinuity ($\Delta C_p$): Folding transition accompanied by large negative heat capacity change $\Delta C_p = C_{p,N} - C_{p,D} < 0$; Dictates parabolic temperature curvature of free energy: $\Delta G(T) = \Delta H_m(1 - T/T_m) - \Delta C_p[(T_m - T) + T \ln(T/T_m)]$.",
        "Cold Denaturation of Globular Proteins: Because $\Delta C_p$ is non-zero and positive for unfolding, $\Delta G_{unfold}(T)$ curve is parabolic and crosses zero at low temperatures ($T_c < 0^\circ\text{C}$); Spontaneous protein unfolding induced by low temperature chilling.",
        "Statistical Mechanics of Helix-Coil Transitions: Zimm-Bragg statistical mechanics model; Nucleation parameter $\sigma \approx 10^{-4}$ (energetically unfavorable initiation); Propagation parameter $s$ (favorable chain extension); Explains sharp, cooperative all-or-none structural transitions.",
        "Thermodynamics of Ligand-Macromolecule Binding: Isothermal Titration Calorimetry (ITC); Single binding experiment simultaneously determines binding association constant $K_a$, binding stoichiometry $n$, binding enthalpy $\Delta H^\circ$, and binding entropy $\Delta S^\circ$."
    ],
    [
        "Calorimetric Enthalpy Equation: $\Delta H_{cal} = \int \Delta C_p dT$.",
        "Two-State Cooperativity Criterion: $\Delta H_{cal} / \Delta H_{vH} = 1.0$.",
        "DNA Melting Condition: $\Delta G^\circ(T_m) = 0 \implies T_m = \frac{\Delta H^\circ}{\Delta S^\circ}$.",
        "GC Content Rule of Thumb: Each $1\%$ increase in GC content elevates duplex $T_m$ by approximately $0.41^\circ\text{C}$.",
        "Hydrophobic Effect Driver: Release of structured water clathrate cages increases solvent entropy ($\Delta S > 0$).",
        "Heat Capacity Unfolding Sign: $\Delta C_{p,unfold} > 0$ (exposing hydrophobic surface).",
        "Cold Denaturation Mechanism: Parabolic $\Delta G(T)$ profile dipping below zero at sub-ambient temperatures.",
        "Zimm-Bragg Parameters: $\sigma$ (nucleation cooperativity) and $s$ (helix propagation).",
        "ITC Measurement Capability: Simultaneously resolves $\Delta H$, $K_a$, $n$, and $\Delta S$ in a single titration.",
        "Exam Tip: In protein stability questions, remember that aromatic base-pair stacking enthalpy in DNA and hydrophobic water entropy in proteins dominate stability, rather than simple hydrogen bonding alone."
    ]
)

add_unit(
    "bsc-chbt: equilibrium",
    [
        "Phase Rule in Multi-Component Bioprocesses: Gibbs Phase Rule $F = C - P + 2$; Degrees of freedom $F$ for multi-phase multi-component fermentation broths containing gas, aqueous liquid, and suspended biomass phases.",
        "Aqueous Two-Phase Systems (ATPS): Liquid-liquid phase separation occurring above critical concentration in incompatible water-soluble polymer mixtures (e.g. Polyethylene glycol PEG / Dextran or PEG / potassium phosphate salt).",
        "Partition Thermodynamics in ATPS: Protein partitioning between top (PEG-rich) and bottom (salt/dextran-rich) phases governed by partition coefficient $K = C_{top} / C_{bottom}$; Thermodynamic link: $\ln K = -\frac{\Delta G_{transfer}^\circ}{R T}$.",
        "Factors Influencing ATPS Protein Partitioning: Target protein surface hydrophobicity, molecular weight, system ionic strength, tie-line length (TLL), phase volume ratio $V_R = V_{top}/V_{bottom}$, and polymer molecular weight.",
        "Binary Liquid Vapor-Liquid Equilibrium (VLE): Raoult's law for ideal mixtures; Non-ideal azeotropes in downstream processing; Minimum boiling azeotrope of bioethanol-water mixture ($95.6\%\text{ ethanol}$ at $78.15^\circ\text{C}$); Overcome by pressure-swing or extractive distillation.",
        "Adsorption Equilibria & Isotherm Models: Heterogeneous binding of proteins onto chromatography resins; Langmuir adsorption isotherm $q = \frac{q_{max} K_L C}{1 + K_L C}$; Assumptions: Monolayer adsorption on finite uniform energetically equivalent sites with no lateral interaction.",
        "Freundlich & BET Adsorption Isotherms: Empirical Freundlich model for heterogeneous surfaces: $q = K_F C^{1/n}$; Brunauer-Emmett-Teller (BET) multi-layer gas adsorption model measuring specific surface area of porous bio-adsorbents and catalyst supports.",
        "Immobilized Metal Affinity Chromatography (IMAC) Equilibrium: Coordination equilibrium between polyhistidine-tagged recombinant proteins (6xHis) and chelated transition metal ions ($\text{Ni}^{2+}, \text{Co}^{2+}$) immobilized on nitrilotriacetic acid (NTA) matrices.",
        "Equilibrium Dialysis for Macromolecule-Ligand Binding: Quantitative determination of free ligand concentration $[L]$ and bound fraction $[PL]$; Scatchard plot equation: $\frac{\bar{\nu}}{[L]} = K_a n - K_a \bar{\nu}$; Reveals binding stoichiometry $n$ and association constant $K_a$.",
        "Cooperativity & Hill Coefficient in Binding Equilibria: Multi-subunit allosteric protein binding; Hill equation fractional saturation $Y = \frac{[L]^{n_H}}{K_d + [L]^{n_H}}$; Hill coefficient $n_H > 1$ represents positive cooperativity (e.g. oxygen binding to hemoglobin, $n_H \approx 2.8$)."
    ],
    [
        "Gibbs Phase Rule: $F = C - P + 2$.",
        "ATPS Partition Coefficient: $K = C_{top} / C_{bottom}$.",
        "Transfer Free Energy: $\ln K = -\frac{\Delta G_{transfer}^\circ}{R T}$.",
        "Langmuir Isotherm Equation: $q = \frac{q_{max} K_L C}{1 + K_L C}$.",
        "Freundlich Equation: $q = K_F C^{1/n}$.",
        "Ethanol-Water Azeotrope: $95.6\% \text{ w/w ethanol}$ boiling at $78.15^\circ\text{C}$.",
        "Scatchard Plot Equation: $\frac{\bar{\nu}}{[L]} = n K_a - K_a \bar{\nu}$.",
        "Hill Equation: $Y = \frac{[L]^{n_H}}{K_{0.5}^{n_H} + [L]^{n_H}}$.",
        "Positive Cooperativity Condition: Hill coefficient $n_H > 1.0$.",
        "Exam Tip: In Scatchard plots, a straight line indicates independent identical binding sites, while downward concave curvature reveals negative cooperativity or multiple classes of non-equivalent sites."
    ]
)

add_unit(
    "bsc-chbt: solutions",
    [
        "Colloidal State of Matter & Biopolymer Dispersions: Classification by physical state of continuous and dispersed phases; Macromolecular colloidal solutions of globular proteins, polysaccharides, and nucleic acids; High specific surface area ($> 100\text{ m}^2/\text{g}$).",
        "Electrical Double Layer & Stern-Gouy-Chapman Model: Charged biopolymer surface attracts counter-ions; Inner immobile Stern layer with rigidly bound ions; Outer diffuse Gouy-Chapman layer with decaying electrostatic potential $\psi(x) = \psi_0 e^{-\kappa x}$.",
        "Debye Screening Length ($\kappa^{-1}$) in Bioprocess Fluids: Characteristic thickness of diffuse electrical double layer: $\kappa^{-1} = \sqrt{\frac{\varepsilon_0 \varepsilon_r R T}{2 F^2 I}}$; Inversely proportional to square root of ionic strength $\sqrt{I}$; High salt compresses double layer.",
        "Zeta Potential ($\zeta$) & Colloidal Flocculation: Electrokinetic potential at hydrodynamic shear slip plane; Measured via electrophoretic light scattering; Dispersions with $|\zeta| > 30\text{ mV}$ remain electrostatically stable; $|\zeta| < 15\text{ mV}$ triggers rapid aggregation and flocculation.",
        "DLVO Theory of Colloidal Stability: Derjaguin-Landau-Verwey-Overbeek (DLVO) potential energy curve: $V_{total} = V_{vdW} + V_{EDL}$; Competition between long-range van der Waals London dispersion attraction and short-range electrostatic double-layer repulsion.",
        "Salting-Out & Hofmeister Lyotropic Series: High concentrations of neutral salts precipitate proteins by competing for hydration water; Hofmeister series ordering kosmotropic (water-structuring) anions: $\text{SO}_4^{2-} > \text{HPO}_4^{2-} > \text{CH}_3\text{COO}^- > \text{Cl}^- > \text{NO}_3^- > \text{SCN}^-$; Ammonium sulfate $(\text{NH}_4)_2\text{SO}_4$ fractional precipitation.",
        "Dynamic Light Scattering (DLS) & Photon Correlation: Time-dependent fluctuations in Rayleigh scattered light intensity caused by Brownian diffusion; Autocorrelation function yields translational diffusion coefficient $D$; Stokes-Einstein relation: $D = \frac{k_B T}{6 \pi \eta R_h}$.",
        "Hydrodynamic Radius ($R_h$) vs Gyration Radius ($R_g$): Stokes hydrodynamic radius $R_h$ reflects equivalent hard sphere diffusing with identical friction; Radius of gyration $R_g$ measured by Static Light Scattering (SLS) Zimm plot; Ratio $R_g/R_h$ indicates molecular shape (sphere $= 0.778$, random coil $\approx 1.5$, rod $> 2$).",
        "Analytical Ultracentrifugation (AUC) & Svedberg Equation: Centrifugal sedimentation velocity: $s = \frac{v}{\omega^2 r} = \frac{M(1 - \bar{v}\rho)}{N_A f}$; Svedberg unit ($1\text{ S} = 10^{-13}\text{ s}$); Directly calculates native molecular weight $M$ without calibration standards.",
        "Micellization Thermodynamics of Amphiphilic Bio-Surfactants: Critical Micelle Concentration (CMC); Aggregation number $N_{agg}$; Gibbs free energy of micellization: $\Delta G_{mic}^\circ = R T \ln(CMC)$; Hydrophobic expulsion of aliphatic tails drives self-assembly into detergent micelles used to solubilize membrane proteins."
    ],
    [
        "Debye Length Proportionality: $\kappa^{-1} \propto 1/\sqrt{I}$.",
        "Zeta Potential Stability Threshold: $|\zeta| \ge 30\text{ mV}$ ensures stable suspension.",
        "Stokes-Einstein Relation: $R_h = \frac{k_B T}{6 \pi \eta D}$.",
        "Svedberg Sedimentation Equation: $s = \frac{M(1 - \bar{v}\rho)}{N_A f}$.",
        "Svedberg Unit Value: $1\text{ S} = 10^{-13}\text{ seconds}$.",
        "Hofmeister Kosmotrope Leader: Sulfate ion ($\text{SO}_4^{2-}$) is premier precipitating anion.",
        "Micellization Free Energy: $\Delta G_{mic}^\circ = R T \ln(CMC)$.",
        "DLVO Total Potential: $V_{total} = V_{attraction} + V_{repulsion}$.",
        "Sphere Shape Factor: $R_g / R_h \approx 0.778$ for compact globular proteins.",
        "Exam Tip: In protein salting-out, ammonium sulfate is universally selected in biotechnology because of its exceptionally high aqueous solubility ($> 4\text{ M}$), low temperature coefficient, and kosmotropic stabilization of tertiary protein folds."
    ]
)

add_unit(
    "bsc-chbt: electrochemistry",
    [
        "Electrochemical Potential & Overpotential: Real electrochemical cell overpotential $\eta = E(I) - E_{rev}$; Activation overpotential $\eta_{act}$, ohmic resistance overpotential $\eta_\Omega = I R$, and mass transfer concentration overpotential $\eta_{conc}$.",
        "Butler-Volmer Equation of Electrode Kinetics: Current density as function of activation overpotential: $j = j_0 \left[ \exp\left(\frac{\alpha_a n F \eta}{R T}\right) - \exp\left(-\frac{\alpha_c n F \eta}{R T}\right) \right]$; Exchange current density $j_0$ reflects intrinsic catalytic speed; Transfer coefficients $\alpha_a + \alpha_c = 1$.",
        "Tafel Approximation at High Overpotentials: For high positive overpotentials ($\eta > 100\text{ mV}$), cathodic term vanishes: $\eta = a + b \log_{10} j$ where Tafel slope $b = \frac{2.303 R T}{\alpha_a n F}$; Measures kinetic mechanism of electrode reaction.",
        "Cyclic Voltammetry (CV) of Metalloenzymes: Triangular potential waveform applied to working electrode; Diagnostic criteria for reversible Nernstian redox couple: Peak-to-peak separation $\Delta E_p = E_{pa} - E_{pc} = \frac{59\text{ mV}}{n}$ at $25^\circ\text{C}$; Peak current $i_p \propto \sqrt{\nu}$ (Randles-Sevcik equation).",
        "Direct Electron Transfer (DET) vs Mediated Electron Transfer (MET): DET requires direct tunneling of electrons between electrode surface and enzyme cofactor buried within insulating protein shell ($< 1.5\text{ nm}$); MET utilizes diffusible synthetic redox mediators (ferrocene, methylene blue, ferricyanide).",
        "Microbial Fuel Cells (MFC) Fundamentals: Bio-electrochemical conversion of organic chemical energy directly into electricity via living electroactive bacteria (exoelectrogens); Anode oxidation: $\text{CH}_3\text{COOH} + 2\text{H}_2\text{O} \to 2\text{CO}_2 + 8\text{H}^+ + 8e^-$; Cathode reduction: $\text{O}_2 + 4\text{H}^+ + 4e^- \to 2\text{H}_2\text{O}$.",
        "Exoelectrogenic Mechanisms in Bacteria: Extracellular electron transfer (EET) pathways in *Geobacter sulfurreducens* and *Shewanella oneidensis*: Outer-membrane multi-heme c-type cytochromes (OmcZ, MtrC), electrically conductive protein pili (microbial nanowires), and endogenous flavin electron shuttles.",
        "Coulombic Efficiency (CE) & Power Density in MFCs: Coulombic efficiency $CE = \frac{M \int I dt}{n F v \Delta COD} \times 100\%$; Power curve $P = I V_{cell}$; Maximum power point transfer theorem: Maximum power occurs when internal cell resistance equals external load resistance ($R_{ext} = R_{int}$).",
        "Microbial Electrolysis Cells (MEC) for Bio-Hydrogen: Thermodynamically non-spontaneous bio-electrochemical reaction requiring small external voltage bias ($E_{ext} > 0.2\text{ V}$); Produces pure renewable molecular hydrogen gas $\text{H}_2$ at cathode from organic wastewater.",
        "Impedance Spectroscopy (EIS) of Biological Interfaces: Application of small AC sinusoidal potential perturbation across wide frequency range ($100\text{ kHz}\text{ to }10\text{ mHz}$); Nyquist plot ($-Z''$ vs $Z'$); Randles equivalent circuit: Solution resistance $R_s$, double-layer capacitance $C_{dl}$, charge-transfer resistance $R_{ct}$, and Warburg diffusion impedance $Z_W$."
    ],
    [
        "Butler-Volmer Equation: $j = j_0 [e^{\alpha_a n F \eta / RT} - e^{-\alpha_c n F \eta / RT}]$.",
        "Tafel Equation: $\eta = a + b \log j$.",
        "Tafel Slope Value: $b = \frac{2.303 R T}{\alpha n F} \approx 118\text{ mV/decade}$ for $\alpha = 0.5, n = 1$.",
        "Randles-Sevcik Equation: $i_p = 2.69 \times 10^5 n^{3/2} A D^{1/2} C \nu^{1/2}$.",
        "Reversible CV Peak Separation: $\Delta E_p = \frac{59\text{ mV}}{n}$ at $298\text{ K}$.",
        "MFC Maximum Power Condition: $R_{external} = R_{internal}$.",
        "MFC Voltage Loss Types: Activation, Ohmic ($IR$), and Concentration overpotentials.",
        "MEC Applied Bias: Minimum $\approx 0.2\text{--}0.4\text{ V}$ to drive cathodic hydrogen evolution.",
        "Randles Circuit Components: $R_s + C_{dl} \parallel (R_{ct} + Z_W)$.",
        "Exam Tip: In cyclic voltammetry of reversible redox enzymes, the formal reduction potential $E^{\circ\prime}$ is precisely calculated as the midpoint between anodic and cathodic peaks: $E^{\circ\prime} = (E_{pa} + E_{pc})/2$."
    ]
)

add_unit(
    "bsc-chbt: kinetics",
    [
        "Microbial Growth Kinetics & Monod Model: Unstructured microbial population growth rate: $\mu = \frac{\mu_{max} S}{K_s + S}$; Specific growth rate $\mu = \frac{1}{X}\frac{dX}{dt}$; Substrate saturation constant $K_s$ equals concentration supporting $\mu = \mu_{max}/2$; Biomass yield coefficient $Y_{X/S} = \Delta X / \Delta S$.",
        "Substrate Inhibition Kinetics (Haldane Model): High substrate concentrations inhibit cellular enzyme machinery: $\mu = \frac{\mu_{max} S}{K_s + S + S^2/K_i}$; Critical substrate concentration yielding peak growth rate: $S_{crit} = \sqrt{K_s K_i}$.",
        "Product Inhibition Kinetics: Toxic accumulated metabolic products (e.g. ethanol in fermentation) reduce specific growth: Linear model $\mu = \mu_0(1 - P/P_{crit})$ or exponential model $\mu = \mu_0 e^{-k_p P}$; Dictates fed-batch and continuous chemostat dilution strategies.",
        "Luedeking-Piret Model for Product Formation: Differentiates growth-associated from non-growth-associated bioproduction: $q_p = \frac{1}{X}\frac{dP}{dt} = \alpha \mu + \beta$; $\alpha$ is growth-associated coefficient (e.g. ethanol, lactic acid); $\beta$ is non-growth maintenance coefficient (e.g. secondary antibiotics).",
        "Continuous Chemostat Culture Dynamics: Continuous stirred tank bioreactor (CSTR); Dilution rate $D = F/V$; Mass balance at steady state $\frac{dX}{dt} = (\mu - D)X = 0 \implies \mu = D$; Biomass washout condition occurs when dilution rate exceeds maximum growth rate ($D \ge D_{crit} = \frac{\mu_{max} S_0}{K_s + S_0}$).",
        "Gas-Liquid Mass Transfer & Volumetric Oxygen Transfer Coefficient ($k_L a$): Oxygen Transfer Rate from sparged air bubbles to liquid medium: $OTR = k_L a (C^* - C_L)$; Liquid-side mass transfer coefficient $k_L$; Interfacial bubble area per unit liquid volume $a$; Dissolved oxygen saturation concentration $C^*$.",
        "Oxygen Uptake Rate (OUR) & Critical Dissolved Oxygen: Metabolic oxygen demand of aerobic culture: $OUR = q_{O_2} X$; Steady-state dissolved oxygen balance: $OTR = OUR \implies k_L a (C^* - C_L) = q_{O_2} X$; Critical dissolved oxygen tension $C_{crit}$ ($10\text{--}20\%$ air saturation) below which growth becomes oxygen-limited.",
        "Experimental Determination of $k_L a$ (Dynamic Method): Sparging stopped to measure biological oxygen uptake rate slope: $\frac{dC_L}{dt} = -OUR$; Aeration resumed to record dissolved oxygen re-oxygenation trajectory: $\frac{dC_L}{dt} = k_L a (C^* - C_L) - OUR$; Slope of $\ln(C^* - C_L)$ versus time yields $k_L a$.",
        "Immobilized Biocatalyst Kinetics & Internal Mass Transfer: Substrate diffusion through porous alginate or polyacrylamide bead matrix; Thiele modulus $\Phi = R \sqrt{\frac{k_v}{D_{eff}}}$; Effectiveness factor $\eta = \frac{\text{Actual Rate}}{\text{Rate without Diffusion Limitation}} = \frac{3}{\Phi}\left(\frac{1}{\tanh\Phi} - \frac{1}{\Phi}\right)$; $\Phi \gg 1$ indicates strong internal diffusion resistance.",
        "External Film Diffusion & Sherwood Number ($Sh$): Mass transfer across stagnant liquid boundary film surrounding immobilized biocatalyst: $r = k_s A (S_b - S_s)$; Dimensionless Sherwood number $Sh = \frac{k_s d_p}{D} = 2 + 0.6 Re^{1/2} Sc^{1/3}$ (Ranz-Marshall correlation); Elevated fluid agitation diminishes boundary film thickness."
    ],
    [
        "Monod Growth Equation: $\mu = \frac{\mu_{max} S}{K_s + S}$.",
        "Haldane Inhibition Model: $\mu = \frac{\mu_{max} S}{K_s + S + S^2/K_i}$.",
        "Haldane Optimum Substrate: $S_{opt} = \sqrt{K_s K_i}$.",
        "Luedeking-Piret Relation: $q_p = \alpha \mu + \beta$.",
        "Chemostat Steady State: $\mu = D = F/V$.",
        "Chemostat Washout Dilution: $D_{crit} = \frac{\mu_{max} S_{in}}{K_s + S_{in}}$.",
        "Oxygen Transfer Rate: $OTR = k_L a (C^* - C_L)$.",
        "Thiele Modulus Formula: $\Phi = R \sqrt{\frac{k}{D_{eff}}}$.",
        "Immobilization Effectiveness: $\eta < 1.0$ indicates internal diffusion limitation.",
        "Exam Tip: In continuous chemostats, the steady-state specific growth rate $\mu$ is dictated entirely by the operator-set dilution rate $D$, completely independent of feed substrate concentration."
    ]
)

# =========================================================================
# 7. CHEMISTRY II / PROGRAMMING (B.Sc Physics Sem 2)
# =========================================================================

add_unit(
    "bsc-chph: thermodynamics",
    [
        "Statistical Molecular Thermodynamics & Microstates: Ensembles in statistical mechanics; Boltzmann entropy postulate $S = k_B \ln \Omega$; Microcanonical, canonical, and grand canonical ensembles; Thermodynamic weight and probability distribution.",
        "Molecular Partition Function ($q$): Sum over all accessible quantum energy states: $q = \sum_i g_i e^{-\varepsilon_i / (k_B T)}$; Factorization of independent degrees of freedom: $q = q_{trans} q_{rot} q_{vib} q_{elec}$.",
        "Translational Partition Function & Sackur-Tetrode Equation: Particle in a 3D box energy quantization: $q_{trans} = \left(\frac{2 \pi m k_B T}{h^2}\right)^{3/2} V$; Sackur-Tetrode absolute entropy of monatomic ideal gas: $S = n R \left[ \ln\left(\frac{e^{5/2} V}{N_A \Lambda^3}\right) \right]$ where thermal de Broglie wavelength $\Lambda = \frac{h}{\sqrt{2 \pi m k_B T}}$.",
        "Rotational Partition Function of Diatomic Molecules: Rigid rotor approximation: energy levels $\varepsilon_J = J(J+1)\frac{\hbar^2}{2 I}$; High temperature limit ($T \gg \Theta_{rot}$): $q_{rot} = \frac{k_B T}{\sigma h c B} = \frac{T}{\sigma \Theta_{rot}}$; Symmetry number $\sigma = 1$ for heteronuclear (HCl), $\sigma = 2$ for homonuclear ($\text{N}_2$).",
        "Vibrational Partition Function: Quantum harmonic oscillator eigenvalues $\varepsilon_v = (v + 1/2)h \nu$; Zero-point vibrational energy (ZPVE) $E_0 = \frac{1}{2}h \nu$; Partition function relative to ground state: $q_{vib} = \frac{1}{1 - e^{-\Theta_{vib}/T}}$ where vibrational temperature $\Theta_{vib} = \frac{h \nu}{k_B}$.",
        "Electronic & Nuclear Partition Functions: Electronic states separated by large energy gaps; Ground state degeneracy $g_0$: $q_{elec} \approx g_0$; Singlet ground states have $q_{elec} = 1$; Triplet oxygen ground state $^3\Sigma_g^-$ has $g_0 = 3$.",
        "Statistical Evaluation of Thermodynamic Functions: Internal energy $U - U(0) = k_B T^2 \left(\frac{\partial \ln Q}{\partial T}\right)_V$; Helmholtz free energy $A - U(0) = -k_B T \ln Q$; Pressure $P = k_B T \left(\frac{\partial \ln Q}{\partial V}\right)_T$; Heat capacity $C_v = \left(\frac{\partial U}{\partial T}\right)_V$.",
        "Equipartition Theorem & Heat Capacity of Gases: Classical equipartition theorem: each quadratic degree of freedom contributes $\frac{1}{2}k_B T$ to internal energy; Monatomic gas $C_{v,m} = \frac{3}{2}R$; Linear diatomic gas $C_{v,m} = \frac{5}{2}R$ (translational + rotational, vibration frozen at room temperature); High-temperature vibrational limit $C_{v,m} = \frac{7}{2}R$.",
        "Residual Entropy & Third Law of Thermodynamics: Nernst Heat Theorem; Planck postulate: Absolute entropy approaches zero as $T \to 0\text{ K}$ for perfectly ordered crystalline substances; Residual zero-point entropy caused by frozen orientational disorder: $S_0 = k_B \ln(W_0)$ (e.g. ice $S_0 = R \ln(3/2)$, CO $S_0 = R \ln 2$).",
        "Computational Thermochemistry & State Algorithms: Numerical algorithm calculating molecular partition functions from DFT (Density Functional Theory) quantum chemical vibrational frequencies and optimized geometric coordinates."
    ],
    [
        "Boltzmann Entropy Formula: $S = k_B \ln \Omega$.",
        "Total Partition Function Product: $q = q_{trans} q_{rot} q_{vib} q_{elec}$.",
        "Thermal de Broglie Wavelength: $\Lambda = \frac{h}{\sqrt{2 \pi m k_B T}}$.",
        "Rotational Partition Function: $q_{rot} = \frac{k_B T}{\sigma B h c}$.",
        "Vibrational Partition Function: $q_{vib} = \frac{1}{1 - e^{-h \nu / k_B T}}$.",
        "Helmholtz Free Energy Link: $A = -k_B T \ln Q$.",
        "Monatomic Gas Heat Capacity: $C_{v,m} = \frac{3}{2}R$.",
        "Diatomic Gas Rigid Heat Capacity: $C_{v,m} = \frac{5}{2}R$.",
        "Residual Entropy of Ice: $S_0 = R \ln(3/2) \approx 3.37\text{ J/(mol K)}$.",
        "Exam Tip: In rotational partition function calculations, never forget the symmetry number $\sigma$ in the denominator: $\sigma = 2$ for homonuclear diatomic molecules like $\text{O}_2, \text{N}_2, \text{H}_2$ to prevent double-counting indistinguishable orientations."
    ]
)

add_unit(
    "bsc-chph: equilibrium",
    [
        "Chemical Potential ($\mu_i$) in Open Systems: Partial molar Gibbs free energy: $\mu_i = \left(\frac{\partial G}{\partial n_i}\right)_{T, P, n_{j \ne i}}$; Fundamental thermodynamic relation for multi-component open systems: $dG = -S dT + V dP + \sum \mu_i dn_i$.",
        "Gibbs-Duhem Equation: Fundamental constraint linking intensive thermodynamic variables at constant $T$ and $P$: $\sum n_i d\mu_i = 0$; For binary mixtures: $x_1 d\mu_1 + x_2 d\mu_2 = 0$; Shows that chemical potentials cannot vary independently.",
        "Fugacity ($f$) & Fugacity Coefficient ($\phi$): Real gas chemical potential formulated via fugacity: $\mu_i = \mu_i^\circ(T) + R T \ln\left(\frac{f_i}{P^\circ}\right)$; Fugacity coefficient $\phi_i = f_i / P_i$; Integrable from PVT equations of state: $\ln \phi = \int_0^P \left(\frac{Z - 1}{P}\right) dP$.",
        "Fugacity from Virial & van der Waals Equations: For van der Waals gas: $\ln \phi = \frac{b - a/(R T)}{R T} P$; Demonstrates attractive intermolecular forces ($a$) suppress fugacity ($\phi < 1$) while repulsive molecular core volume ($b$) elevates fugacity ($\phi > 1$).",
        "Chemical Affinity ($\mathcal{A}$) & de Donder Extent of Reaction ($\\xi$): Reaction progress coordinate $dn_i = \nu_i d\\xi$; Chemical affinity defined as negative driving potential: $\mathcal{A} = -\sum \nu_i \mu_i = -\left(\frac{\partial G}{\partial \\xi}\right)_{T,P}$; Reaction proceeds spontaneously if $\mathcal{A} > 0$.",
        "General Criterion for Multi-Phase Equilibrium: For closed system with $P$ phases and $C$ components, thermodynamic equilibrium requires uniformity of $T$, $P$, and chemical potential across every phase: $\mu_i^{(\alpha)} = \mu_i^{(\beta)} = \dots = \mu_i^{(P)}$ for each component $i = 1, \dots, C$.",
        "Derivation of the Gibbs Phase Rule: Total variables: $T, P$, and $(C - 1)$ independent mole fractions per phase $= 2 + P(C - 1)$; Total equilibrium constraint equations: $C(P - 1)$; Variance or degrees of freedom: $F = [2 + P(C - 1)] - C(P - 1) = C - P + 2$.",
        "Clapeyron & Clausius-Clapeyron Equations: Phase boundary slope on $P\text{--}T$ diagram: $\frac{dP}{dT} = \frac{\Delta H_{tr}}{T \Delta V_{tr}}$; For liquid-vapor transitions neglecting liquid volume and assuming ideal vapor: $\frac{d \ln P}{dT} = \frac{\Delta H_{vap}}{R T^2}$.",
        "Integrated Clausius-Clapeyron Two-Point Equation: $\ln\left(\frac{P_2}{P_1}\right) = -\frac{\Delta H_{vap}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$; Predicts vapor pressure elevation with temperature; Critical role in vacuum distillation and refrigeration cycles.",
        "Computational Phase Equilibrium Algorithms: Flash calculation algorithms; Rachford-Rice objective function solving vapor-liquid equilibrium (VLE) compositions iteratively for multi-component hydrocarbon mixtures using Newton-Raphson method."
    ],
    [
        "Chemical Potential Definition: $\mu_i = \left(\frac{\partial G}{\partial n_i}\right)_{T, P, n_{j \ne i}}$.",
        "Gibbs-Duhem Relation: $\sum x_i d\mu_i = 0$ at constant $T, P$.",
        "Fugacity Definition: $\mu = \mu^\circ + R T \ln(f / P^\circ)$.",
        "Fugacity from Compressibility: $\ln \phi = \int_0^P \frac{Z - 1}{P} dP$.",
        "Chemical Affinity: $\mathcal{A} = -\sum \nu_i \mu_i$.",
        "Spontaneity Condition: $\mathcal{A} d\\xi > 0$ for irreversible progress.",
        "Phase Equilibrium Condition: $\mu_i^\alpha = \mu_i^\beta$.",
        "Clapeyron Equation: $\frac{dP}{dT} = \frac{\Delta H}{T \Delta V}$.",
        "Clausius-Clapeyron Form: $\ln\left(\frac{P_2}{P_1}\right) = -\frac{\Delta H_{vap}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$.",
        "Exam Tip: In Clapeyron phase transitions, remember that water is an anomaly because $\Delta V_{fusion} < 0$ (ice is less dense than liquid water), resulting in a negative $dP/dT$ slope for the solid-liquid boundary."
    ]
)

add_unit(
    "bsc-chph: solutions",
    [
        "Debye-Hückel Theory of Strong Electrolytes: Assumption of complete dissociation of strong electrolytes in polar solvents; Deviations from ideality arise entirely from long-range Coulombic electrostatic interactions between hydrated ions.",
        "Ionic Atmosphere & Charge Density Distribution: Central reference ion of charge $z_j e$ surrounded by spherically symmetric cloud of counter-ions; Local electrical potential $\psi(r)$ governed by linearized Poisson-Boltzmann equation: $\nabla^2 \psi = \frac{1}{r^2}\frac{d}{dr}\left(r^2 \frac{d\psi}{dr}\right) = \kappa^2 \psi$.",
        "Debye Screening Parameter ($\kappa$) & Debye Length: Inverse Debye screening length: $\kappa = \sqrt{\frac{8 \pi e^2 N_A I}{1000 \varepsilon k_B T}}$; Screening radius $r_D = \kappa^{-1}$; Measures thickness of surrounding ionic shielding cloud; Decreases with increasing ionic strength.",
        "Ionic Strength ($I$) of Electrolyte Solutions: Quantifies electrical charge environment: $I = \frac{1}{2}\sum_i c_i z_i^2$; For 1:1 electrolyte ($\text{NaCl}$), $I = C$; For 2:1 electrolyte ($\text{CaCl}_2$), $I = 3 C$; For 2:2 electrolyte ($\text{CuSO}_4$), $I = 4 C$.",
        "Debye-Hückel Limiting Law (DHLL): Activity coefficient of single ion: $\log_{10} \gamma_i = -A z_i^2 \sqrt{I}$; Mean ionic activity coefficient: $\log_{10} \gamma_\pm = -A |z_+ z_-| \sqrt{I}$; Universal constant $A = 0.509\text{ mol}^{-1/2}\text{L}^{1/2}$ for water at $298\text{ K}$.",
        "Extended Debye-Hückel Equation for Finite Ion Size: Incorporates finite effective hydrated ionic diameter $a$: $\log_{10} \gamma_\pm = -\frac{A |z_+ z_-| \sqrt{I}}{1 + B a \sqrt{I}}$; Valid up to moderate ionic strengths ($I \approx 0.1\text{ M}$).",
        "Conductance of Electrolytes & Kohlrausch's Laws: Specific conductance $\kappa$; Molar conductance $\Lambda_m = 1000 \kappa / C$; Kohlrausch's law of independent ionic migration: $\Lambda_m^\circ = \nu_+ \lambda_+^\circ + \nu_- \lambda_-^\circ$; Empirical square-root law for strong electrolytes: $\Lambda_m = \Lambda_m^\circ - B \sqrt{C}$.",
        "Debye-Hückel-Onsager (DHO) Conductance Equation: Quantifies conductance retardation in strong electrolytes: $\Lambda_m = \Lambda_m^\circ - (A' + B' \Lambda_m^\circ)\sqrt{C}$; Explains two physical deceleration effects: Asymmetry (relaxation) effect and Electrophoretic drag effect.",
        "Transport (Transference) Numbers: Fraction of total electric current carried by specific ionic species: $t_+ = \frac{u_+}{u_+ + u_-} = \frac{\lambda_+^\circ}{\Lambda_m^\circ}$ and $t_- = 1 - t_+$; Absolute ionic mobility $u_i = \lambda_i / F$; Determined experimentally via Hittorf method or Moving Boundary method.",
        "Computational Simulation of Solution Conductivity: Python algorithms simulating ionic conductivity, Debye-Hückel activity coefficients, and buffer equilibrium curves via non-linear least squares parameter fitting."
    ],
    [
        "Ionic Strength Formula: $I = \frac{1}{2}\sum c_i z_i^2$.",
        "Debye-Hückel Limiting Law: $\log_{10}\gamma_\pm = -0.509 |z_+ z_-|\sqrt{I}$.",
        "Debye Length Scale: $\kappa^{-1} \propto 1/\sqrt{I}$.",
        "Kohlrausch's Law: $\Lambda_m^\circ = \nu_+ \lambda_+^\circ + \nu_- \lambda_-^\circ$.",
        "Kohlrausch Concentration Law: $\Lambda_m = \Lambda_m^\circ - b\sqrt{C}$.",
        "DHO Conductance Factors: Relaxation drag and electrophoretic retardation.",
        "Transport Number Relation: $t_+ + t_- = 1.0$.",
        "Transport Number & Mobility: $t_i = \frac{u_i}{\sum u_j}$.",
        "Water Solvent Constant $A$: $0.509\text{ mol}^{-1/2}\text{kg}^{1/2}$ at $25^\circ\text{C}$.",
        "Exam Tip: In Debye-Hückel limiting law problems, make sure to compute the ionic strength $I$ correctly: a $0.01\text{ M CaCl}_2$ solution has $I = \frac{1}{2}[(0.01 \times 2^2) + (0.02 \times 1^2)] = 0.03\text{ M}$."
    ]
)

add_unit(
    "bsc-chph: electrochemistry",
    [
        "Electrochemical Potential ($\tilde{\mu}_i$) & Phase Boundary Potentials: Total free energy of charged particle in electrostatic potential $\phi$: $\tilde{\mu}_i = \mu_i + z_i F \phi$; Equilibrium of charged species between two phases $\alpha$ and $\beta$: $\tilde{\mu}_i^\alpha = \tilde{\mu}_i^\beta$.",
        "Galvani & Volta Potential Differences: Galvani internal electrical potential $\phi$; Outer Volta potential $\psi$; Surface dipole layer potential $\chi$ where $\phi = \psi + \chi$; Galvani potential difference across liquid-metal interface $\Delta \phi$ is fundamentally non-measurable directly.",
        "Concentration Cells Without Transference: Two identical half-cells with electrodes reversible to one of the ions, operating at different electrolyte activities $a_1$ and $a_2$; Cell potential: $E = \frac{R T}{n F}\ln\left(\frac{a_2}{a_1}\right)$; Driven purely by entropy of dilution.",
        "Concentration Cells With Transference & Liquid Junction Potential ($E_{lj}$): Direct liquid junction between two electrolyte solutions of different concentrations; Unequal ionic mobilities ($u_+ \ne u_-$) establish interfacial charge separation: $E_{lj} = (t_- - t_+)\frac{R T}{F}\ln\left(\frac{a_2}{a_1}\right)$.",
        "Elimination of Liquid Junction Potential: Insertion of saturated potassium chloride ($\text{KCl}$) or ammonium nitrate ($\text{NH}_4\text{NO}_3$) salt bridge; Mobilities of $\text{K}^+$ ($u = 7.62 \times 10^{-4}$) and $\text{Cl}^-$ ($u = 7.91 \times 10^{-4}$) are nearly equal ($t_+ \approx t_- \approx 0.50$), reducing $E_{lj}$ to $< 1\text{ mV}$.",
        "Butler-Volmer Equation for Charge Transfer Kinetics: $i = i_0 \left[ \exp\left(\frac{(1 - \alpha) F \eta}{R T}\right) - \exp\left(-\frac{\alpha F \eta}{R T}\right) \right]$; Symmetry factor $\alpha \approx 0.5$; Exchange current density $i_0$ reflects electrocatalytic activity.",
        "Low Overpotential Approximation (Linear Polarizability): For small perturbations ($\eta \ll \frac{R T}{F} \approx 25\text{ mV}$), exponential terms linearize via Taylor expansion: $i = i_0 \frac{F \eta}{R T}$; Charge transfer resistance $R_{ct} = \frac{\eta}{i} = \frac{R T}{F i_0}$.",
        "Tafel Behavior & Corrosion Kinetics: High overpotentials yield linear $\eta$ vs $\log i$ Tafel lines; Mixed Potential Theory: Spontaneous metal corrosion occurs at mixed corrosion potential $E_{corr}$ where total anodic oxidation rate equals total cathodic reduction rate: $i_a = |i_c| = i_{corr}$.",
        "Stern-Geary Equation & Polarization Resistance: Non-destructive determination of corrosion rate: $i_{corr} = \frac{B}{R_p}$ where $R_p = \left(\frac{d\eta}{di}\right)_{\eta \to 0}$ and Stern-Geary constant $B = \frac{b_a b_c}{2.303(b_a + b_c)}$; Used extensively in industrial pipeline corrosion monitoring.",
        "Computational Potentiometry & Instrumentation: Digital potentiostat architecture; Operational amplifier virtual ground circuit; Precision current-to-voltage converter (transimpedance amplifier) and computerized cyclic voltammetry digital acquisition."
    ],
    [
        "Electrochemical Potential: $\tilde{\mu}_i = \mu_i + z_i F \phi$.",
        "Concentration Cell Potential: $E = \frac{R T}{n F}\ln(a_2 / a_1)$.",
        "Liquid Junction Potential: $E_{lj} = (t_- - t_+)\frac{R T}{F}\ln(a_2 / a_1)$.",
        "Salt Bridge Criterion: Near-identical cation and anion mobilities ($t_+ \approx t_-$).",
        "Butler-Volmer Equation: $i = i_0 [e^{(1-\alpha) F \eta / RT} - e^{-\alpha F \eta / RT}]$.",
        "Charge Transfer Resistance: $R_{ct} = \frac{R T}{F i_0}$.",
        "Stern-Geary Equation: $i_{corr} = \frac{B}{R_p}$.",
        "Corrosion Steady State: Total anodic current equals total cathodic current ($i_a = |i_c|$).",
        "Galvani Potential Equation: $\phi = \psi + \chi$.",
        "Exam Tip: In concentration cell calculations, remember that the spontaneous direction always transfers solute from higher activity $a_2$ to lower activity $a_1$, so $E > 0$ requires $\ln(a_2 / a_1) > 0$."
    ]
)

add_unit(
    "bsc-chph: kinetics",
    [
        "Collision Theory of Bimolecular Gas Reactions: Hard sphere collision frequency $Z_{AB} = n_A n_B \sigma_{AB}^2 \sqrt{\frac{8 \pi k_B T}{\mu_{AB}}}$; Reaction rate $v = Z_{AB} e^{-E_0 / (R T)}$; Introduction of steric factor $P$: $k = P Z_{AB} e^{-E_0 / (R T)}$; Explains orientation requirements for non-spherical molecules.",
        "Transition State Theory (Eyring-Polanyi Formulation): Elementary reaction proceeds through quasi-equilibrium activated complex: $\text{A} + \text{B} \rightleftharpoons \text{AB}^\ddagger \to \text{Products}$; Reaction velocity $v = \kappa \nu^\ddagger [\text{AB}^\ddagger]$ where transmission coefficient $\kappa \approx 1$.",
        "Eyring Equation & Thermodynamic Activation Parameters: Rate constant formulation: $k = \kappa \frac{k_B T}{h} \frac{q^\ddagger}{q_A q_B} e^{-E_0 / (R T)} = \frac{k_B T}{h} e^{-\Delta G^\ddagger / (R T)}$; Decomposition into enthalpy and entropy of activation: $k = \frac{k_B T}{h} e^{\Delta S^\ddagger / R} e^{-\Delta H^\ddagger / (R T)}$.",
        "Relationship Between Arrhenius $E_a$ and Eyring $\Delta H^\ddagger$: For unimolecular gas reaction: $E_a = \Delta H^\ddagger + R T$; For bimolecular gas-phase reaction: $E_a = \Delta H^\ddagger + 2 R T$; For reactions in condensed liquid solution: $E_a = \Delta H^\ddagger + R T$.",
        "Physical Significance of Activation Entropy ($\Delta S^\ddagger$): Positive $\Delta S^\ddagger$ indicates loose, dissociative activated complex with increased rotational/vibrational freedom; Large negative $\Delta S^\ddagger$ reflects rigid, highly ordered associative transition state (e.g. Diels-Alder cycloaddition).",
        "Potential Energy Surfaces (PES) & Reaction Coordinates: Born-Oppenheimer potential energy plotted against nuclear coordinates; Collinear reaction $\text{H} + \text{H}_2 \to \text{H}_2 + \text{H}$; London-Eyring-Polanyi-Sato (LEPS) semi-empirical surface; Transition state identified as saddle point (first-order saddle point with exactly one imaginary vibrational frequency).",
        "Unimolecular Reactions & Lindemann-Hinshelwood Mechanism: Collision activation: $\text{A} + \text{M} \\underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} \text{A}^* + \text{M}$; Unimolecular decay: $\text{A}^* \\xrightarrow{k_2} \text{Products}$; Overall rate $v = \frac{k_1 k_2 [\text{A}][\text{M}]}{k_{-1}[\text{M}] + k_2}$; High pressure limit yields first order: $k_\infty = \frac{k_1 k_2}{k_{-1}}$; Low pressure limit yields second order: $k_{low} = k_1 [\text{M}]$.",
        "Hinshelwood & RRKM Refinements of Unimolecular Theory: Hinshelwood distribution of energy across $s$ internal vibrational modes: $k = \frac{k_1 k_2}{k_{-1}}\left(\frac{E^*}{k_B T}\right)^{s-1}$; Rice-Ramsperger-Kassel-Marcus (RRKM) quantum microcanonical transition state formulation calculating energy-dependent rate constant $k(E) = \frac{N^\ddagger(E - E_0)}{h \rho(E)}$.",
        "Femtochemistry & Pump-Probe Spectroscopy: Ahmed Zewail's femtosecond laser spectroscopy ($10^{-15}\text{ s}$); Real-time observation of transition state bond breaking and formation in sodium iodide ($\text{NaI} \to \text{Na} + \text{I}$) crossing avoided curve crossings.",
        "Numerical Algorithms for Stiff Kinetic ODE Systems: Multi-step chemical reaction networks; Stiff differential equations caused by vastly disparate rate constants; Explicit Euler fails due to numerical instability; Implicit Gear's method and Rosenbrock solvers in computational chemical kinetics."
    ],
    [
        "Eyring Rate Equation: $k = \frac{k_B T}{h} e^{\Delta S^\ddagger / R} e^{-\Delta H^\ddagger / RT}$.",
        "Arrhenius to Eyring Link: $E_a = \Delta H^\ddagger + 2 R T$ (bimolecular gas).",
        "Associative Transition State Sign: $\Delta S^\ddagger < 0$ (loss of translational entropy).",
        "Transition State Saddle Point: Point of maximum energy along reaction path, minimum along all transverse coordinates.",
        "Lindemann High Pressure Limit: First-order kinetics ($v = k_\infty [\text{A}]$).",
        "Lindemann Low Pressure Limit: Second-order kinetics ($v = k_1 [\text{A}][\text{M}]$).",
        "Steric Factor Definition: $P = \sigma_{reactive} / \sigma_{geometric}$.",
        "RRKM Microcanonical Rate: $k(E) = \frac{N^\ddagger(E - E_0)}{h \rho(E)}$.",
        "Femtosecond Time Scale: $1\text{ fs} = 10^{-15}\text{ seconds}$.",
        "Exam Tip: In unimolecular kinetics, remember that at high pressures collisions are so frequent that collisional deactivation dominates unimolecular decay ($k_{-1}[\text{M}] \gg k_2$), causing the reaction order to collapse from second-order to first-order."
    ]
)

# =========================================================================
# 8. CHEMISTRY LAB II (QUALITATIVE ANALYSIS) (B.Sc Life Sciences Sem 2)
# =========================================================================

add_unit(
    "bsc-chlab-qa: safety & instrumentation",
    [
        "Semi-Micro Analytical Safety Protocols: Personal protective equipment (PPE) requirements: chemical-resistant nitrile gloves, safety goggles, lab coats, and closed-toe footwear; Fume hood operations for volatile and toxic acid vapors.",
        "Chemical Hazard Management & Toxic Reagents: Toxic heavy metal ion handling (lead, mercury, cadmium, arsenic); Controlled disposal of heavy metal wastes into designated non-chlorinated hazardous waste collection carboys.",
        "Management of Hydrogen Sulfide Gas ($H_2S$): Hazards of toxic hydrogen sulfide; Traditional Kipp's apparatus generating gaseous $H_2S$ replaced by safer aqueous thioacetamide ($CH_3CSNH_2$) hydrolysis in hot acidic or alkaline solutions.",
        "Semi-Micro Glassware & Apparatus: Semi-micro test tubes ($75 \times 10\text{ mm}$), capillary droppers, centrifuge tubes, stirring glass rods, micro-spatulas, porcelain spot plates, and water baths.",
        "Centrifugation Technique in Qualitative Analysis: Separation of precipitate from supernatant solution using benchtop electrical angle centrifuge; Symmetric rotor tube balancing with equal-volume water counterweights.",
        "Precipitate Washing & Peptization Prevention: Washing centrifuged precipitate with small aliquots ($0.5\text{ mL}$) of dilute electrolyte washing solution rather than pure distilled water to avoid colloidal peptization.",
        "Reagent Dropper Delivery & Contamination Control: Proper vertical dropper alignment without touching inside wall of test tubes to prevent cross-contamination of analytical stock reagent bottles.",
        "Heating Protocols for Semi-Micro Tubes: Use of boiling water baths instead of direct open Bunsen burner flame to prevent hazardous thermal bumping and ejection of corrosive chemical reagents.",
        "Platinum Wire Maintenance & Flame Testing: Cleaning platinum flame test wire by repeated dipping into concentrated $HCl$ and heating in non-luminous Bunsen flame until no residual yellow sodium flame coloration persists.",
        "Emergency Neutralization Protocols: Eye-wash station and safety shower procedures; First-aid management of mineral acid spills (sodium bicarbonate slurry neutralization) and caustic alkali splashes (dilute boric acid rinse)."
    ],
    [
        "PPE Mandate: Eye goggles, lab coat, and chemical-resistant gloves compulsory at all times.",
        "Heavy Metal Waste Rule: Lead, mercury, and cadmium residues must never be dumped down laboratory sinks.",
        "Hydrogen Sulfide Alternative: Safe hydrolysis of thioacetamide replaces hazardous Kipp's $H_2S$ gas.",
        "Centrifuge Balancing: Opposing rotor tubes must be filled with identical liquid volumes.",
        "Peptization Prevention: Wash precipitates with dilute electrolyte rather than pure water.",
        "Dropper Hygiene: Reagent droppers must never contact test tube walls.",
        "Bumping Hazard Prevention: Always heat semi-micro reaction tubes in a boiling water bath.",
        "Flame Wire Cleaning Reagent: Concentrated hydrochloric acid ($HCl$) on platinum wire loop.",
        "Acid Spill Neutralizer: Saturated sodium bicarbonate ($NaHCO_3$) slurry.",
        "Exam Tip: In viva voce, explain that centrifuging reaction mixtures for 60 seconds replaces 15 minutes of slow gravity filtration, yielding compact precipitates with minimal loss."
    ]
)

add_unit(
    "bsc-chlab-qa: standard preparations",
    [
        "Preparation of Group I Reagents: Preparation and standardization of dilute hydrochloric acid ($2\text{ M } HCl$); Calculation of concentrated reagent dilution: $V_1 = (M_2 V_2)/M_1$ from $37\%\text{ w/w } HCl$ ($12\text{ M}$).",
        "Group II Reagent Solution: Saturated hydrogen sulfide aqueous solution or $0.5\text{ M}$ thioacetamide solution; Adjusting solution acidity to strictly $0.3\text{ M } H^+$ using methyl violet indicator.",
        "Group III Buffer Reagent Preparation: Preparation of solid ammonium chloride ($NH_4Cl$) and concentrated aqueous ammonia solution ($NH_4OH$, specific gravity $0.90$, $\approx 15\text{ M}$); Buffering at $\text{pH} \approx 9.2$.",
        "Group IV Reagents Formulation: Alkaline hydrogen sulfide medium established by adding $NH_4OH$ followed by thioacetamide or $H_2S$ gas in presence of $NH_4Cl$ buffer.",
        "Group V Carbonate Reagent Preparation: Preparation of saturated ammonium carbonate $((NH_4)_2CO_3)$ solution in dilute aqueous ammonia; Thermal instability requires cold storage below $20^\circ\text{C}$.",
        "Preparation of Specific Confirmatory Reagents: Dimethylglyoxime (DMG) $1\%\text{ w/v}$ solution in $95\%$ ethanol; Fresh preparation of Nessler's alkaline potassium tetraiodomercurate(II) reagent ($K_2[HgI_4]$ in $NaOH$).",
        "Preparation of Sodium Carbonate Extract (Soda Extract): Boiling water-insoluble salt mixture with excess anhydrous sodium carbonate ($Na_2CO_3$, $1:3$ ratio) to convert heavy metal cations into insoluble carbonates and anions into soluble sodium salts.",
        "Ammonium Molybdate Reagent Preparation: Dissolving ammonium heptamolybdate $((NH_4)_6Mo_7O_{24} \cdot 4H_2O)$ in dilute nitric acid ($HNO_3$); Freshly prepared for sensitive phosphate and silicate identification.",
        "Potassium Pyroantimonate Reagent Preparation: Boiling potassium pyroantimonate ($K_2H_2Sb_2O_7$) in distilled water to form clear reagent for selective precipitation of sodium ions as crystalline white $Na_2H_2Sb_2O_7$.",
        "Standard Shelf Life & Reagent Preservation: Storage of photo-sensitive reagents (silver nitrate $AgNO_3$, potassium ferrocyanide) in amber glass bottles away from direct sunlight; Fresh preparation of ferrous sulfate ($FeSO_4$) solution."
    ],
    [
        "Group I Reagent: Dilute $2\text{ M } HCl$.",
        "Group II Acidity Target: Strictly $0.3\text{ M } H^+$ (methyl violet indicator bluish-green).",
        "Group III Buffer: Solid $NH_4Cl$ followed by concentrated $NH_4OH$ ($\text{pH} \approx 9.2$).",
        "Group V Reagent: Ammonium carbonate in presence of $NH_4Cl$ and $NH_4OH$.",
        "DMG Reagent Composition: $1\%\text{ w/v}$ dimethylglyoxime in absolute or $95\%$ ethanol.",
        "Nessler's Reagent Composition: Alkaline solution of potassium tetraiodomercurate(II) ($K_2[HgI_4]$).",
        "Soda Extract Ratio: 1 part salt mixture to 3 parts anhydrous $Na_2CO_3$.",
        "Reagent Bottle Type: Amber colored glass bottles for light-sensitive $AgNO_3$ solutions.",
        "Fresh Preparation Mandate: Ferrous sulfate ($FeSO_4$) must be freshly prepared to prevent atmospheric oxidation to $Fe^{3+}$.",
        "Exam Tip: In viva, state that soda extract is prepared to eliminate interfering heavy metal cations that would otherwise precipitate with anion reagents and obscure confirmatory color tests."
    ]
)

add_unit(
    "bsc-chlab-qa: experimental procedures",
    [
        "Preliminary Dry Testing: Physical examination (color, crystalline state, odor); Dry heating in glass ignition tube (sublimation, gas evolution, decrepitation); Charcoal cavity reduction test with anhydrous $Na_2CO_3$ producing metallic beads.",
        "Flame Photometric Coloration Tests: Platinum loop flame tests: Persistent golden yellow ($\text{Na}^+$), lilac violet viewed through cobalt glass ($\text{K}^+$), brick red ($\text{Ca}^{2+}$), crimson red ($\text{Sr}^{2+}$), apple green ($\text{Ba}^{2+}$).",
        "Systematic Anion Wet Analysis: Testing with dilute $H_2SO_4$ (carbonate $\text{CO}_3^{2-}$ effervescence, nitrite $\text{NO}_2^-$, sulfide $\text{S}^{2-}$); Testing with concentrated $H_2SO_4$ (chloride $Cl^-$, bromide $Br^-$, iodide $I^-$, nitrate $\text{NO}_3^-$, oxalate $\text{C}_2\text{O}_4^{2-}$).",
        "Elimination of Interfering Anions: Removal of interfering anions (fluoride, borate, oxalate, phosphate) prior to Group III cation precipitation; Repeated evaporation to dryness with concentrated nitric acid ($HNO_3$) or ferric chloride treatment.",
        "Group I Cation Separation: Addition of dilute $HCl$ precipitates white chlorides: $AgCl$ (soluble in $NH_4OH$), $PbCl_2$ (soluble in hot water), and $Hg_2Cl_2$ (turns black with $NH_4OH$ forming mercury metal and amidomercuric chloride).",
        "Group II Cation Separation: Passing $H_2S$ into $0.3\text{ M } H^+$ acidic solution separates sulfides: Group IIA insoluble in yellow ammonium sulfide ($PbS, CuS, Bi_2S_3, CdS$); Group IIB soluble in yellow ammonium sulfide ($As_2S_3, Sb_2S_3, SnS_2$).",
        "Group III Cation Separation: Boiling filtrate from Group II to expel $H_2S$; Oxidation of $Fe^{2+}$ with concentrated $HNO_3$; Addition of excess solid $NH_4Cl$ and $NH_4OH$ precipitates hydroxides: $Fe(OH)_3$ (reddish-brown), $Al(OH)_3$ (gelatinous white), $Cr(OH)_3$ (greenish).",
        "Group IV Cation Separation: Passing $H_2S$ into ammoniacal Group III filtrate precipitates sulfides: $ZnS$ (white), $MnS$ (flesh pink), $NiS$ (black), $CoS$ (black); Dissolution and confirmatory analysis.",
        "Group V Cation Separation: Adding $(NH_4)_2CO_3$ to ammoniacal filtrate precipitates carbonates: $BaCO_3, SrCO_3, CaCO_3$; Separation by selective dissolution in acetic acid and fractional precipitation with potassium chromate ($K_2CrO_4$).",
        "Group VI Cation Identification: Testing residual filtrate for magnesium ($\text{Mg}^{2+}$) by precipitation as white crystalline magnesium ammonium phosphate ($MgNH_4PO_4 \cdot 6H_2O$) with disodium hydrogen phosphate ($Na_2HPO_4$)."
    ],
    [
        "Flame Test Sodium Color: Intense persistent golden yellow flame.",
        "Flame Test Potassium Color: Lilac/violet visible through blue cobalt glass.",
        "Flame Test Barium Color: Characteristic apple green flame.",
        "Group I Chloride Solubility: $PbCl_2$ is soluble in boiling hot water; $AgCl$ dissolves in $NH_4OH$.",
        "Group IIA Sulfides: Insoluble in yellow ammonium sulfide ($CuS, CdS, Bi_2S_3$).",
        "Group IIB Sulfides: Soluble in yellow ammonium sulfide ($As_2S_3, Sb_2S_3, SnS_2$).",
        "Group III Hydroxide Colors: $Fe(OH)_3$ reddish-brown, $Al(OH)_3$ white gelatinous, $Cr(OH)_3$ grayish-green.",
        "Group IV Sulfide Colors: $ZnS$ white, $MnS$ flesh-colored, $NiS$ and $CoS$ black.",
        "Group V Carbonate Separation: $BaCrO_4$ precipitates selectively upon adding potassium chromate in acetic acid.",
        "Exam Tip: In the Group III separation, boiling off all dissolved $H_2S$ gas completely before adding concentrated $HNO_3$ is crucial; failure to do so results in oxidation of sulfide to colloidal sulfur, masking hydroxide precipitates."
    ]
)

add_unit(
    "bsc-chlab-qa: data verification",
    [
        "Solubility Product ($K_{sp}$) Principles in Qualitative Separation: Selective precipitation dictated by ionic product exceeding $K_{sp}$; Low $K_{sp}$ of Group II sulfides ($CuS: 6 \times 10^{-36}$) allows precipitation at very low $[S^{2-}]$, while Group IV sulfides ($ZnS: 1.6 \times 10^{-24}$) remain dissolved.",
        "Common Ion Effect in Group Separation: In Group II, $0.3\text{ M } HCl$ provides excess $H^+$, suppressing $H_2S$ ionization: $[S^{2-}] = \frac{K_{a1} K_{a2} [H_2S]}{[H^+]^2} \approx 10^{-22}\text{ M}$, selectively precipitating only Group II cations.",
        "Group III Common Ion Suppression: Solid $NH_4Cl$ provides high $[NH_4^+]$, shifting $NH_4OH \rightleftharpoons NH_4^+ + OH^-$ to the left; Suppresses $[OH^-]$ to $\approx 10^{-5}\text{ M}$, precipitating trivalent hydroxides while keeping divalent $Mg(OH)_2$ and $Mn(OH)_2$ dissolved.",
        "Confirmatory Chemistry of Nickel: Addition of dimethylglyoxime (DMG) in ammoniacal medium forms voluminous scarlet-red bis(dimethylglyoximato)nickel(II) chelate $[Ni(C_4H_7N_2O_2)_2]$ stabilized by intramolecular hydrogen bonds.",
        "Confirmatory Chemistry of Iron: Reaction of ferric ions ($Fe^{3+}$) with potassium ferrocyanide ($K_4[Fe(CN)_6]$) produces intense Prussian blue precipitate: $4 Fe^{3+} + 3 [Fe(CN)_6]^{4-} \to Fe_4[Fe(CN)_6]_3$; Reaction with potassium thiocyanate ($KSCN$) yields blood-red $[Fe(SCN)(H_2O)_5]^{2+}$.",
        "Chromyl Chloride Test for Chloride Anions: Heating solid chloride salt with solid potassium dichromate ($K_2Cr_2O_7$) and concentrated $H_2SO_4$ generates deep reddish-brown vapors of chromyl chloride ($CrO_2Cl_2$); Vapors passed into $NaOH$ yield yellow sodium chromate, confirmed with lead acetate.",
        "Brown Ring Test for Nitrate Anions: Concentrated $H_2SO_4$ slowly poured along inner wall of test tube containing nitrate and freshly prepared $FeSO_4$; Forms brown ring of pentaaquanitrosyliron(II) sulfate $[Fe(H_2O)_5(NO)]SO_4$ at liquid interface.",
        "Ammonium Molybdate Test for Phosphate: Reaction of phosphate solution with excess ammonium molybdate in concentrated $HNO_3$ yields canary-yellow crystalline precipitate of ammonium phosphomolybdate: $(NH_4)_3[PMo_{12}O_{40}] \cdot xH_2O$.",
        "Confirmatory Test for Ammonium Ion ($\text{NH}_4^+$): Heating with aqueous $NaOH$ releases pungent ammonia gas ($NH_3$), turning moist red litmus blue; Addition of Nessler's reagent ($K_2[HgI_4]$) produces characteristic brown precipitate of iodide of Millon's base.",
        "Quality Control & Cross-Contamination Verification: Running procedural blank tests with deionized water; Verification of reagent purity; Systematic troubleshooting of false positive tests caused by trace cation cross-contamination."
    ],
    [
        "Group II vs IV Sulfide Principle: $K_{sp}$ of Group II is vastly lower than Group IV.",
        "Group II Sulfide Ion Concentration: $[S^{2-}] \approx 10^{-22}\text{ M}$ controlled by $0.3\text{ M } HCl$.",
        "Group III Hydroxide Control: $NH_4Cl$ suppresses $[OH^-]$ to prevent $Mg(OH)_2$ precipitation.",
        "Nickel DMG Complex Color: Brilliant scarlet-red coordination precipitate.",
        "Prussian Blue Formula: $Fe_4[Fe(CN)_6]_3$ formed by $Fe^{3+}$ and ferrocyanide.",
        "Iron Thiocyanate Color: Characteristic blood-red $[Fe(SCN)]^{2+}$ complex.",
        "Chromyl Chloride Formula: Volatile reddish-brown vapor $CrO_2Cl_2$.",
        "Brown Ring Complex Formula: $[Fe(H_2O)_5(NO)]^{2+}$.",
        "Phosphate Test Precipitate: Canary yellow ammonium phosphomolybdate $(NH_4)_3[PMo_{12}O_{40}]$.",
        "Exam Tip: In the brown ring test, make sure the test tube is held inclined at $45^\circ$ and concentrated $H_2SO_4$ is trickled slowly down the side without shaking, so it forms a distinct, undisturbed dense lower layer."
    ]
)

add_unit(
    "bsc-chlab-qa: record & viva",
    [
        "Standard Practical Record Format: Structured documentation: Date, Experiment Title, Qualitative Sample Code, Physical Examination, Systematic Dry Tests, Anion Analysis Tabular Scheme, Group Separation Table, Confirmatory Reactions, Final Reported Ions with Balanced Chemical Equations.",
        "Chemical Equations Integrity: Every observed identification and confirmatory test must be supported by stoichiometric, balanced ionic and molecular equations.",
        "Laboratory Evaluation Rubric: Practical examination marking scheme: Physical examination & dry tests ($15\%$), Anion systematic identification ($25\%$), Cation group separation & confirmation ($30\%$), Practical record journal ($15\%$), Viva voce performance ($15\%$).",
        "Core Viva Voce Concept: Role of $NH_4Cl$ in Group III: Explaining the common ion effect; Why $NH_4Cl$ must be added in substantial excess before $NH_4OH$ to suppress hydroxide concentration.",
        "Core Viva Voce Concept: Nitric Acid in Group III: Explaining why $Fe^{2+}$ must be oxidized to $Fe^{3+}$ with boiling concentrated $HNO_3$ ($K_{sp}$ of $Fe(OH)_3$ is $10^{-38}$, whereas $Fe(OH)_2$ is $10^{-15}$ and would not precipitate quantitatively).",
        "Core Viva Voce Concept: Failure of Chromyl Chloride Test: Bromides and iodides evolve elemental halogens ($Br_2, I_2$) instead of chromyl halides; Heavy metal chlorides like $HgCl_2, AgCl, PbCl_2$ are covalent or insoluble and do not react.",
        "Core Viva Voce Concept: Difference between Group IIA and IIB: Separation mechanism using yellow ammonium sulfide $(NH_4)_2S_x$; Group IIB elements ($As, Sb, Sn$) possess higher oxidation states and form soluble thio-salts (e.g. $(NH_4)_3AsS_4$).",
        "Core Viva Voce Concept: Mechanism of the Borax Bead Test: Thermal dehydration of borax $Na_2B_4O_7 \cdot 10H_2O$ to form glassy transparent bead of $NaBO_2 + B_2O_3$; Reaction with metal oxides forms colored metaborates (e.g. cobalt metaborate $Co(BO_2)_2$ deep blue).",
        "Core Viva Voce Concept: Nessler's Reaction Chemistry: Alkaline reaction with ammonium ion produces orange-brown precipitate of iodide of Millon's base: $2 K_2[HgI_4] + NH_3 + 3 KOH \to [HgO \cdot Hg(NH_2)]I \\downarrow + 7 KI + 2 H_2O$.",
        "Good Laboratory Practice (GLP) & Waste Minimization: Microscale reaction volume implementation reducing hazardous chemical waste generation by $90\%$; Segregation of heavy metal precipitates from neutral aqueous washings."
    ],
    [
        "Report Structure: Dry tests $\to$ Anion analysis $\to$ Cation group separation $\to$ Confirmatory equations $\to$ Final result.",
        "Iron Oxidation Viva Fact: $K_{sp}$ of $Fe(OH)_3$ ($10^{-38}$) is 23 orders of magnitude lower than $Fe(OH)_2$ ($10^{-15}$).",
        "Borax Bead Composition: Anhydrous mixture of sodium metaborate ($NaBO_2$) and boric anhydride ($B_2O_3$).",
        "Cobalt Bead Color: Characteristic deep sapphire blue bead in both oxidizing and reducing flames.",
        "Copper Bead Color: Sky blue in oxidizing flame, opaque ruby red in reducing flame.",
        "Millon's Base Formula: $[HgO \cdot Hg(NH_2)]I$ (brown precipitate in Nessler's test).",
        "Chromyl Chloride Limitation: Fails with covalent and insoluble chlorides ($HgCl_2, AgCl, PbCl_2$).",
        "Group IIB Thio-Salts: Form soluble complexes like $(NH_4)_3AsS_4$ with yellow ammonium sulfide.",
        "Waste Minimization Strategy: Adoption of semi-micro techniques reduces chemical footprint tenfold.",
        "Exam Tip: In the oral viva, when asked why $HCl$ is used instead of $H_2SO_4$ to acidify the solution before $H_2S$ in Group II, answer that $H_2SO_4$ would cause premature precipitation of insoluble sulfates of Group V cations ($PbSO_4, BaSO_4, SrSO_4$)."
    ]
)

# =========================================================================
# 9. CHEMISTRY LAB II (B.Sc Biotech / Microbiology Sem 2)
# =========================================================================

add_unit(
    "bsc-chlab-bt: safety & instrumentation",
    [
        "Analytical Volumetric Laboratory Safety: Handling concentrated mineral acids ($H_2SO_4, HCl, HNO_3$) and corrosive alkaline titrants ($NaOH, KOH$); Eye protection, nitrile gloves, acid-resistant aprons, and immediate eyewash response.",
        "Chemical Hygiene for Strong Oxidizing Agents: Safety protocols for handling solid potassium permanganate ($KMnO_4$) and potassium dichromate ($K_2Cr_2O_7$); Carcinogenicity and environmental toxicity of hexavalent chromium ($\text{Cr}^{VI}$); Safe reduction of residual dichromate wastes to trivalent chromium ($\text{Cr}^{III}$) before neutralization and disposal.",
        "Analytical Balance Operation & Precision Weighing: Dual-range analytical electronic balances ($0.1\text{ mg} = 0.0001\text{ g}$ sensitivity); Draft shield closure, leveling bubble verification, zero tare calibration; Weighing by difference using glass weighing bottles; Temperature equilibration preventing convection buoyancy errors.",
        "Volumetric Glassware Calibration & Tolerances: Class A vs Class B volumetric glassware (burettes, volumetric pipettes, volumetric flasks); Reading meniscus: Bottom of concave meniscus for clear aqueous solutions, top of convex liquid boundary for intensely colored solutions ($KMnO_4$).",
        "Parallax Error Elimination in Titrimetry: Proper eye-level positioning perpendicular to graduated markings on burettes and pipettes to eliminate parallax viewing errors.",
        "Primary Standard Requirements in Quantitative Analysis: High chemical purity ($> 99.9\%$), known stoichiometry, stability in air (non-hygroscopic, non-efflorescent), high equivalent weight to minimize weighing errors; Examples: Anhydrous sodium carbonate ($Na_2CO_3$), potassium hydrogen phthalate (KHP), sodium oxalate ($Na_2C_2O_4$).",
        "Secondary Standards & Standardization Necessity: Solutions whose concentrations cannot be determined by direct weighing due to atmospheric absorption, volatilization, or instability; Examples: $NaOH$ (absorbs atmospheric $\text{CO}_2$ and moisture), $HCl$ (volatile gas), $KMnO_4$ (photochemical and auto-decomposition); Require periodic titration against primary standards.",
        "Cleaning & Degreasing of Volumetric Glassware: Cleaning glassware with chromic acid cleaning mixture ($K_2Cr_2O_7 + H_2SO_4$) or alkaline detergent solutions; Distilled water rinse testing for uniform water film drainage without droplet formation.",
        "Pipetting Safety & Automatic Pipette Fillers: Strict prohibition of mouth pipetting; Use of rubber bulb pipette fillers (three-valve Peleus bulbs) and calibrated mechanical pipettors.",
        "Instrumentation for Instrumental Titrations: Setup and electrode maintenance for pH meters (glass combination electrode calibration with standard $\text{pH } 4.01, 7.00, 9.21$ buffers) and conductivity meters (dip-type cell constant determination using standard $0.01\text{ M } KCl$)."
    ],
    [
        "Chromium Waste Treatment: Hexavalent $\text{Cr}^{VI}$ must be reduced to $\text{Cr}^{III}$ using sodium bisulfite before disposal.",
        "Analytical Balance Precision: Accuracy to four decimal places ($0.1\text{ mg} / 0.0001\text{ g}$).",
        "Meniscus Rule Clear Liquids: Read horizontal tangent to bottom of concave meniscus.",
        "Meniscus Rule Colored Liquids: Read upper liquid boundary line for opaque $KMnO_4$ solutions.",
        "Parallax Error Prevention: Eye must be strictly horizontal with calibration graduation line.",
        "Primary Standard Criterion: Exceptionally high purity, air stability, and high equivalent weight.",
        "Secondary Standard Trait: Variable concentration requiring standardization against primary standard.",
        "Mouth Pipetting Rule: Strictly prohibited under all circumstances; use mechanical bulb fillers.",
        "Clean Glassware Indicator: Continuous unbroken film of distilled water on interior glass walls.",
        "Exam Tip: In the viva, when asked why potassium permanganate ($KMnO_4$) cannot serve as a primary standard, explain that it always contains traces of manganese dioxide ($MnO_2$) impurity and undergoes slow photochemical decomposition."
    ]
)

add_unit(
    "bsc-chlab-bt: standard preparations",
    [
        "Preparation of Standard Primary Solutions: Weighing primary standard sodium oxalate ($Na_2C_2O_4$, molecular weight $134.00\text{ g/mol}$, equivalent weight $67.00\text{ g/mol}$) to prepare $0.1\text{ N}$ standard reducing solution; Weighing potassium dichromate ($K_2Cr_2O_7$, MW $294.18\text{ g/mol}$, EW $49.03\text{ g/mol}$) to prepare $0.1\text{ N}$ standard oxidant.",
        "Preparation of Primary Standard Hard Water: Dissolving accurately weighed analytical grade calcium carbonate ($CaCO_3$, MW $100.09\text{ g/mol}$) in minimum dilute $HCl$, evaporating to dryness to expel excess acid, and diluting to mark in volumetric flask to prepare $1\text{ mg/mL}$ standard ($1000\text{ ppm } CaCO_3$ equivalent).",
        "Preparation & Standardization of Permanganate Solution: Preparing approximate $0.02\text{ M}$ ($0.1\text{ N}$) $KMnO_4$; Boiling and filtering through sintered glass crucible to remove catalytic $MnO_2$ particles; Storing in dark amber bottle; Standardizing against hot ($70^\circ\text{C}$) acidified sodium oxalate solution.",
        "Preparation & Standardization of Sodium Thiosulfate: Preparing approximate $0.1\text{ N}$ sodium thiosulfate pentahydrate ($Na_2S_2O_3 \cdot 5H_2O$); Adding $0.1\text{ g/L}$ sodium carbonate ($Na_2CO_3$) as preservative to prevent bacterial decomposition; Standardizing against primary standard potassium dichromate in presence of excess $KI$ and dilute $HCl$.",
        "Preparation & Standardization of Disodium EDTA: Preparing approximate $0.01\text{ M}$ disodium ethylenediaminetetraacetate dihydrate ($Na_2H_2Y \cdot 2H_2O$, MW $372.24\text{ g/mol}$); Standardizing against standard $CaCO_3$ hard water solution in presence of ammonia-ammonium chloride buffer ($\text{pH } 10$).",
        "Formulation of Buffer Solutions for Titrimetry: Ammonia buffer solution ($\text{pH } 10.0$): Dissolving $67.5\text{ g}$ ammonium chloride ($NH_4Cl$) in $570\text{ mL}$ concentrated aqueous ammonia and diluting to $1000\text{ mL}$ with distilled water.",
        "Indicator Solution Preparations: Eriochrome Black T (EBT): $0.5\%\text{ w/w}$ ground mixture in solid sodium chloride ($NaCl$) to prevent aqueous degradation; Starch indicator solution: $1\%\text{ w/v}$ soluble starch paste prepared in boiling distilled water; Sodium diphenylamine sulfonate: $0.2\%\text{ w/v}$ solution in distilled water.",
        "Zimmermann-Reinhardt (Z-R) Reagent Preparation: Dissolving $50\text{ g}$ manganous sulfate tetrahydrate ($MnSO_4 \cdot 4H_2O$) in water, adding $100\text{ mL}$ concentrated $H_2SO_4$ and $100\text{ mL}$ concentrated phosphoric acid ($H_3PO_4$), diluting to $1000\text{ mL}$; Used to suppress chloride oxidation in iron permanganometry.",
        "Preparation of Standard Alkali and Acid Titrants: Preparing $0.1\text{ M } NaOH$ (standardized against primary standard potassium hydrogen phthalate KHP) and $0.1\text{ M } HCl$ (standardized against anhydrous $Na_2CO_3$ using methyl orange indicator).",
        "Shelf-Life Monitoring & Titrant Re-Standardization: Tracking normality changes over time; Re-standardizing volumetric titrants weekly to ensure analytical accuracy within $\pm 0.1\%$ relative error."
    ],
    [
        "Sodium Oxalate Equivalent Weight: $EW = MW/2 = 134.00 / 2 = 67.00\text{ g/equiv}$.",
        "Potassium Dichromate Equivalent Weight: $EW = MW/6 = 294.18 / 6 = 49.03\text{ g/equiv}$.",
        "Disodium EDTA Molecular Weight: $372.24\text{ g/mol}$ (dihydrate salt).",
        "Standard Hard Water Basis: $1.0\text{ mg } CaCO_3$ per $\text{mL}$ corresponds to $1000\text{ ppm}$ hardness.",
        "Thiosulfate Preservative: Sodium carbonate ($Na_2CO_3$) added to inhibit bacterial decomposition.",
        "Permanganate Filtration: Filtered through sintered glass crucible; filter paper must never be used.",
        "Ammonia Buffer pH: Maintained at exactly $\text{pH } 10.0$ for EDTA titrations.",
        "Solid Indicator Form: EBT ground in dry $NaCl$ salt matrix prevents solution auto-oxidation.",
        "Starch Indicator Freshness: Starch indicator paste must be freshly boiled and cooled before use.",
        "Exam Tip: In viva, state that filter paper cannot be used to filter $KMnO_4$ solutions because organic cellulose fibers reduce permanganate to manganese dioxide ($MnO_2$)."
    ]
)

add_unit(
    "bsc-chlab-bt: experimental procedures",
    [
        "Permanganometric Estimation of Ferrous Iron ($Fe^{2+}$): Acidifying ferrous ammonium sulfate (Mohr's salt) sample with dilute $H_2SO_4$; Titrating with standard $KMnO_4$ solution until pale permanent pink endpoint persists for 30 seconds; $KMnO_4$ acts as self-indicator: $MnO_4^- + 5 Fe^{2+} + 8 H^+ \to Mn^{2+} + 5 Fe^{3+} + 4 H_2O$.",
        "Permanganometric Titration of Oxalic Acid: Heating oxalic acid solution to $70\text{--}80^\circ\text{C}$ in dilute $H_2SO_4$; Reaction is slow initially, then auto-catalyzed by generated $Mn^{2+}$ ions: $2 MnO_4^- + 5 C_2O_4^{2-} + 16 H^+ \to 2 Mn^{2+} + 10 CO_2 \\uparrow + 8 H_2O$.",
        "Dichromatometric Estimation of Ferrous Iron: Titrating acidified $Fe^{2+}$ solution against standard $K_2Cr_2O_7$ in presence of Zimmermann-Reinhardt reagent or dilute $H_2SO_4 + H_3PO_4$; Using sodium diphenylamine sulfonate indicator; Sharp color change from pale green to deep violet-blue.",
        "Role of Phosphoric Acid ($H_3PO_4$) in Dichromatometry: Phosphoric acid complexes ferric ions to form colorless $[Fe(PO_4)_2]^{3-}$; Lowers formal potential of $Fe^{3+}/Fe^{2+}$ system from $+0.77\text{ V}$ to $+0.61\text{ V}$, ensuring diphenylamine indicator ($E^\circ = +0.76\text{ V}$) oxidizes sharply at true equivalence point.",
        "Iodometric Estimation of Copper in Brass / Cupric Sulfate: Neutralizing cupric solution, adding excess potassium iodide ($KI$); Cuprous iodide precipitates, releasing equivalent iodine: $2 Cu^{2+} + 4 I^- \to 2 CuI \\downarrow + I_2$; Titrating liberated $I_2$ against standard sodium thiosulfate ($Na_2S_2O_3$).",
        "Starch-Iodine Reaction & Potassium Thiocyanate Addition: Starch indicator added near endpoint when solution turns pale straw yellow; Adding potassium thiocyanate ($KSCN$) just before final endpoint releases strongly adsorbed iodine molecules from $CuI$ precipitate surface, yielding razor-sharp milk-white endpoint.",
        "Complexometric Determination of Total Hardness: Titrating water sample against standard $0.01\text{ M}$ EDTA at $\text{pH } 10$ (ammonia buffer) using Eriochrome Black T indicator; Color transition from wine-red ($Ca\text{--}EBT / Mg\text{--}EBT$ chelate) to pure sky-blue (free uncomplexed $EBT$ indicator).",
        "Determination of Permanent and Temporary Hardness: Boiling water sample for 15 minutes precipitates temporary hardness as carbonates: $Ca(HCO_3)_2 \\xrightarrow{\Delta} CaCO_3 \\downarrow + H_2O + CO_2 \\uparrow$; Filtering, cooling, and titrating filtrate against EDTA yields permanent hardness; Temporary hardness calculated by difference: $\text{Total} - \text{Permanent}$.",
        "Conductometric Acid-Base Titrations: Titrating strong acid ($HCl$) with strong base ($NaOH$); Initial high conductance decreases sharply due to replacement of fast $H^+$ ($350\text{ S cm}^2/\text{mol}$) with slower $Na^+$ ($50\text{ S cm}^2/\text{mol}$); Minimum at equivalence point; Post-equivalence conductance rises sharply due to excess fast $OH^-$ ($198\text{ S cm}^2/\text{mol}$).",
        "Potentiometric Redox Titration ($Fe^{2+}$ with $K_2Cr_2O_7$): Platinum working electrode paired with saturated calomel reference electrode (SCE); Recording cell EMF after each titrant addition; Constructing first derivative curve $\frac{\Delta E}{\Delta V}$ vs $V$; Equivalence volume determined precisely at peak maximum."
    ],
    [
        "Permanganate Self-Indicator Endpoint: Permanent faint pink coloration persisting for $\ge 30\text{ seconds}$.",
        "Oxalate Heating Requirement: Heated to $70\text{--}80^\circ\text{C}$ to overcome high kinetic activation barrier.",
        "Auto-Catalysis in Permanganometry: Generated $Mn^{2+}$ ions catalyze subsequent reaction speed.",
        "Dichromate Indicator Transition: Colorless / green $\to$ permanent deep violet-blue.",
        "Phosphoric Acid Role: Complexes $Fe^{3+}$ to lower its redox potential and sharpen the endpoint.",
        "Iodometry Endpoint Transition: Dark blue starch-iodine complex $\to$ pure milk-white precipitate.",
        "Thiocyanate Addition Rationale: Displaces adsorbed iodine molecules from cuprous iodide ($CuI$).",
        "EDTA Hardness Endpoint: Wine-red to clear sky-blue at $\text{pH } 10.0$.",
        "Conductometric Strong Acid-Base V-Shape: Minimum conductance occurs exactly at neutral equivalence point.",
        "Exam Tip: In iodometric copper titrations, never add starch indicator at the beginning when iodine concentration is high; high iodine concentrations decompose starch irreversibly, ruining endpoint sharpness."
    ]
)

add_unit(
    "bsc-chlab-bt: data verification",
    [
        "Concordant Titre Verification: Titrations must be repeated until at least two consecutive runs yield identical titre volumes agreeing within $\pm 0.05\text{ mL}$; Eliminates random operational errors.",
        "Normality & Molarity Stoichiometric Calculations: Volumetric equivalency formula $N_1 V_1 = N_2 V_2$ for normalities; Molar stoichiometric relationship: $\frac{M_1 V_1}{n_1} = \frac{M_2 V_2}{n_2}$ where $n_1, n_2$ represent stoichiometric coefficients in balanced reaction.",
        "Calculation of Hardness in Parts Per Million (ppm): Total hardness expressed in $\text{mg/L}$ ($\text{ppm}$) of $CaCO_3$ equivalent: $\text{Hardness (ppm)} = \frac{V_{EDTA} \times M_{EDTA} \times 100.09 \times 1000}{V_{sample}}$; $1\text{ mL of } 0.01\text{ M EDTA} \equiv 1.0009\text{ mg } CaCO_3$.",
        "Metal-EDTA Chelate Stability Constants: 1:1 hexadentate chelate ring formation; Conditional formation constant $K'_{MY} = \alpha_{Y^{4-}} K_{MY}$; $\log K_{CaY} = 10.7$, $\log K_{MgY} = 8.7$; Calcium complexes preferentially over magnesium; Eriochrome Black T forms weaker complex ($K_{Mg-In} < K_{MgY}$), enabling displacement by EDTA.",
        "Calculation of Copper Content in Brass: Percentage copper in alloy: $\%Cu = \frac{V_{thiosulfate} \times N_{thiosulfate} \times 63.54 \times 100}{1000 \times \text{Weight of Brass Sample}}$; Verified against theoretical composition of brass ($60\text{--}70\% Cu, 30\text{--}40\% Zn$).",
        "Statistical Propagation of Measurement Errors: Cumulative error in volumetric analysis: Relative error $\frac{\delta V}{V} = \sqrt{\left(\frac{\delta V_{pipette}}{V_{pipette}}\right)^2 + \left(\frac{\delta V_{burette}}{V_{burette}}\right)^2 + \left(\frac{\delta m}{m}\right)^2}$; Calculation of standard deviation and $95\%$ confidence intervals.",
        "Conductometric Titration Curve Mathematical Analysis: Linear regression of pre-equivalence and post-equivalence data points; Equivalence point obtained mathematically by intersecting regression lines $y_1 = m_1 x + c_1$ and $y_2 = m_2 x + c_2$: $x_{eq} = \frac{c_2 - c_1}{m_1 - m_2}$.",
        "Potentiometric First and Second Derivative Methods: Identifying inflection point on titration curve: Maximum of first derivative $\left(\frac{\Delta E}{\Delta V}\right)_{max}$ or zero-crossing of second derivative $\frac{\Delta^2 E}{\Delta V^2} = 0$; Eliminates subjective visual endpoint bias.",
        "Blank Titration Determinations: Running solvent blank titrations (distilled water without analyte) to determine indicator blank correction volume; Subtracting blank volume $V_{blank}$ from raw titre volume $V_{raw}$.",
        "Quality Assurance & Traceability: Standard reference materials (SRM) comparison; Calibration verification with standard solutions traceable to national metrology standards."
    ],
    [
        "Concordance Standard: Consecutive titre volumes must match within $\pm 0.05\text{ mL}$.",
        "Equivalency Equation: $N_1 V_1 = N_2 V_2$.",
        "Hardness Formula: $\text{ppm Hardness} = \frac{V_{EDTA} \times M_{EDTA} \times 100.09 \times 1000}{V_{water}}$.",
        "EDTA Stoichiometry: Strictly 1:1 complexation regardless of metal cation valence.",
        "Copper Equivalent Weight: $63.54\text{ g/equiv}$ in iodometric redox titration.",
        "First Derivative Titration Peak: Maximum in $\Delta E / \Delta V$ corresponds to exact equivalence volume.",
        "Conductometric Intersection: Intersection of two linear conductivity trend lines defines endpoint.",
        "Indicator Blank Correction: $V_{corrected} = V_{observed} - V_{blank}$.",
        "Hexadentate Ligand: EDTA coordinates through 2 amine nitrogens and 4 carboxylate oxygens.",
        "Exam Tip: In water hardness calculations, always express the final result in terms of equivalent $\text{mg/L of } CaCO_3$ (molecular weight $100.09\text{ g/mol}$), which is defined universally as parts per million (ppm)."
    ]
)

add_unit(
    "bsc-chlab-bt: record & viva",
    [
        "Volumetric Practical Report Structure: Objective / Aim, Underlying Theoretical Principle, Chemical Reactions & Balanced Equations, Tabular Formats for Standardization and Titration, Concordant Value Selection, Step-by-Step Stoichiometric Calculations, Final Reported Result with SI Units and Uncertainty.",
        "Marking Rubric for Practical Examination: Procedural glassware handling & pipetting technique ($20\%$), Concordance & volumetric precision within $\pm 1\%$ of true value ($30\%$), Practical record journal & calculations ($20\%$), Viva voce oral examination ($30\%$).",
        "Core Viva Voce Concept: Why Hydrochloric Acid is Prohibited in Permanganometry: Hydrochloric acid ($HCl$) is oxidized by permanganate into chlorine gas ($2 MnO_4^- + 10 Cl^- + 16 H^+ \to 2 Mn^{2+} + 5 Cl_2 \\uparrow + 8 H_2O$), consuming excess $KMnO_4$ and yielding falsely elevated results.",
        "Core Viva Voce Concept: Role of Zimmermann-Reinhardt Reagent: Explaining how $MnSO_4$ lowers the reduction potential of $MnO_4^-$, $H_3PO_4$ complexes $Fe^{3+}$, and $H_2SO_4$ maintains necessary acidity, preventing oxidation of $Cl^-$ in presence of iron.",
        "Core Viva Voce Concept: Starch Indicator Chemistry: Starch contains amylose (linear $\alpha\text{--}1,4\text{-glucan}$ helical polymer) that forms an intense deep blue charge-transfer inclusion complex with polyiodide ions ($I_3^-, I_5^-$); Triiodide slips inside the hydrophobic helical core.",
        "Core Viva Voce Concept: Action of Potassium Thiocyanate in Iodometry: Adsorption of iodine onto the surface of cuprous iodide ($CuI$) precipitate gives a premature diffuse endpoint; Thiocyanate ($SCN^-$) has higher affinity for $Cu^+$ and displaces the adsorbed iodine into solution, ensuring sharp endpoint.",
        "Core Viva Voce Concept: Why EDTA Titrations Require Buffer $\text{pH } 10$: Below $\text{pH } 10$, EDTA ($H_4Y$) is protonated into $HY^{3-}$ and $H_2Y^{2-}$, drastically lowering conditional stability constant; Above $\text{pH } 12$, magnesium and calcium precipitate out as insoluble hydroxides $Mg(OH)_2$ and $Ca(OH)_2$.",
        "Core Viva Voce Concept: Role of Magnesium in EDTA Endpoint Sharpening: $Ca\text{--}EBT$ complex is too weak to produce sharp endpoint; Traces of $Mg\text{--}EDTA$ added to buffer exchange with $Ca^{2+}$: $Ca^{2+} + MgY^{2-} \to CaY^{2-} + Mg^{2+}$; The liberated $Mg^{2+}$ binds $EBT$ forming wine-red complex, which EDTA titrates last, giving distinct wine-red to blue change.",
        "Core Viva Voce Concept: Principle of Conductometric Titrations: Electrical conductance is additive ($\kappa = \sum c_i \lambda_i$); Sharp inflection points arise from the vast difference between proton mobility ($\lambda_{H^+} = 350$) and metal cations ($\lambda_{Na^+} = 50$).",
        "Laboratory Cleanliness & Safe Chemical Disposal: Neutralizing waste acids and bases before drain disposal; Segregation of heavy metal titrates; Triple-rinsing volumetric glassware with deionized water before storage."
    ],
    [
        "Viva Question $HCl$ Permanganate: $KMnO_4$ oxidizes $HCl$ to chlorine gas, ruining accuracy.",
        "Viva Question Amylose Iodine: Starch amylose forms blue inclusion complex with triiodide ($I_3^-$).",
        "Viva Question Thiocyanate: Displaces adsorbed iodine from $CuI$ precipitate surface.",
        "Viva Question Buffer pH 10: Optimizes EDTA deprotonation without precipitating metal hydroxides.",
        "Viva Question Magnesium Spike: $Mg^{2+}$ ensures crisp wine-red to sky-blue EBT endpoint.",
        "Viva Question Proton Mobility: High mobility of $H^+$ ($350\text{ S cm}^2/\text{mol}$) drives conductometric V-curve.",
        "Permanganate Primary Standard Status: False; requires standardization against sodium oxalate.",
        "EDTA Chelate Ratio: Always 1:1 regardless of whether cation is $Ca^{2+}, Fe^{3+}$, or $Zr^{4+}$.",
        "Dichromate Primary Standard Status: True; stable, non-hygroscopic, $> 99.9\%$ pure.",
        "Exam Tip: In the viva, when asked why nitric acid ($HNO_3$) cannot be used to acidify solutions in permanganometry, explain that $HNO_3$ is itself an oxidizing agent that would compete with $KMnO_4$ and oxidize the reducing analyte."
    ]
)

# =========================================================================
# 10. MATHEMATICS II / BOTANY II (B.Sc Chemistry Sem 2)
# =========================================================================

add_unit(
    "bsc-chm: odes",
    [
        "Linear Ordinary Differential Equations with Constant Coefficients: General $n$-th order linear differential equation: $a_n \frac{d^n y}{dx^n} + a_{n-1}\frac{d^{n-1}y}{dx^{n-1}} + \dots + a_0 y = X(x)$; Operator notation $f(D)y = X$ where differential operator $D = \frac{d}{dx}$.",
        "Complementary Function (CF) & Auxiliary Equation: Auxiliary polynomial $f(m) = a_n m^n + \dots + a_0 = 0$; Real distinct roots ($m_1 \ne m_2 \implies c_1 e^{m_1 x} + c_2 e^{m_2 x}$); Repeated roots ($m_1 = m_2 \implies (c_1 + c_2 x)e^{m_1 x}$); Complex conjugate roots ($\alpha \pm i \beta \implies e^{\alpha x}(c_1 \cos \beta x + c_2 \sin \beta x)$).",
        "Particular Integral (PI) for Exponential Forcing Functions: For $X = e^{a x}$: $PI = \frac{1}{f(D)}e^{a x} = \frac{e^{a x}}{f(a)}$ provided $f(a) \ne 0$; Resonance case when $f(a) = 0$: $PI = x \frac{e^{a x}}{f'(a)}$.",
        "Particular Integral for Trigonometric Functions: For $X = \sin(a x)$ or $\cos(a x)$: $PI = \frac{1}{f(D^2)}\sin(a x) = \frac{\sin(a x)}{f(-a^2)}$ provided $f(-a^2) \ne 0$; Resonance case when $f(-a^2) = 0$: $PI = x \frac{\sin(a x)}{f'(-a^2)}$.",
        "Particular Integral for Polynomial Functions: For $X = x^m$: $PI = [f(D)]^{-1} x^m$; Expanding $[f(D)]^{-1}$ as ascending power series in $D$ via binomial theorem and operating successively on $x^m$ until $D^{m+1} x^m = 0$.",
        "Particular Integral for Product Forcing Functions: Exponential shift rule: $\frac{1}{f(D)} [e^{a x} V(x)] = e^{a x} \frac{1}{f(D + a)} V(x)$; Allows factorizing exponential term out of inverse operator.",
        "Cauchy-Euler Homogeneous Linear Differential Equations: Form $a_n x^n \frac{d^n y}{dx^n} + \dots + a_1 x \frac{dy}{dx} + a_0 y = X(x)$; Transformed to linear ODE with constant coefficients via substitution $x = e^z$ ($z = \ln x$) and $x D = \theta$, $x^2 D^2 = \theta(\theta - 1)$ where $\theta = \frac{d}{dz}$.",
        "Legendre's Linear Differential Equations: Generalized Cauchy equation: $a_n (a x + b)^n \frac{d^n y}{dx^n} + \dots + a_0 y = X(x)$; Transformed via substitution $a x + b = e^z$ ($z = \ln(a x + b)$) and $(a x + b)D = a \theta$.",
        "Method of Variation of Parameters: General method for non-homogeneous second-order ODE $y'' + P(x)y' + Q(x)y = R(x)$; Complementary function $y_c = c_1 y_1 + c_2 y_2$; Particular integral $y_p = u(x) y_1 + v(x) y_2$; Wronskian determinant $W = y_1 y_2' - y_2 y_1' \ne 0$; Formulas $u(x) = -\int \frac{y_2 R}{W} dx$ and $v(x) = \int \frac{y_1 R}{W} dx$.",
        "Chemical Kinetics Applications of Linear ODEs: Consecutive irreversible first-order reactions $A \\xrightarrow{k_1} B \\xrightarrow{k_2} C$; System of differential equations $\frac{d[A]}{dt} = -k_1 [A]$ and $\frac{d[B]}{dt} = k_1 [A] - k_2 [B]$; Solution for intermediate: $[B](t) = [A]_0 \frac{k_1}{k_2 - k_1}(e^{-k_1 t} - e^{-k_2 t})$."
    ],
    [
        "Auxiliary Equation: $f(m) = 0$ obtained by replacing $D \to m$.",
        "Exponential PI Rule: $\frac{1}{f(D)}e^{ax} = \frac{e^{ax}}{f(a)}$ if $f(a) \ne 0$.",
        "Trigonometric PI Substitution: Replace $D^2 \to -a^2$.",
        "Exponential Shift Formula: $\frac{1}{f(D)}[e^{ax} V] = e^{ax} \frac{1}{f(D+a)}V$.",
        "Cauchy-Euler Transformation: $x = e^z \implies x D = \theta, x^2 D^2 = \theta(\theta - 1)$.",
        "Wronskian Determinant: $W(y_1, y_2) = y_1 y_2' - y_2 y_1'$.",
        "Variation of Parameters PI: $y_p = -y_1 \int \frac{y_2 R}{W} dx + y_2 \int \frac{y_1 R}{W} dx$.",
        "Repeated Root Solution: $y = (c_1 + c_2 x)e^{mx}$.",
        "Complex Conjugate Solution: $y = e^{\alpha x}(c_1 \cos \beta x + c_2 \sin \beta x)$.",
        "Exam Tip: In variation of parameters, ensure the differential equation is normalized so the coefficient of $y''$ is strictly 1 before identifying the forcing function $R(x)$."
    ]
)

add_unit(
    "bsc-chm: laplace transforms",
    [
        "Definition of Laplace Transform & Existence Conditions: Unilateral Laplace transform $\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-s t} f(t) dt$; Sufficient conditions for existence: $f(t)$ must be piecewise continuous on $[0, \infty)$ and of exponential order $\gamma$ ($|f(t)| \le M e^{\gamma t}$ for $t > T$).",
        "Linearity Property & Standard Elementary Transforms: Linearity: $\mathcal{L}\{a f(t) + b g(t)\} = a F(s) + b G(s)$; Standard transforms: $\mathcal{L}\{1\} = \frac{1}{s}$, $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$, $\mathcal{L}\{e^{a t}\} = \frac{1}{s - a}$, $\mathcal{L}\{\sin(a t)\} = \frac{a}{s^2 + a^2}$, $\mathcal{L}\{\cos(a t)\} = \frac{s}{s^2 + a^2}$, $\mathcal{L}\{\sinh(a t)\} = \frac{a}{s^2 - a^2}$, $\mathcal{L}\{\cosh(a t)\} = \frac{s}{s^2 - a^2}$.",
        "First Shifting Property (Frequency Translation): If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{e^{a t} f(t)\} = F(s - a)$; Transforms modulated sinusoids: $\mathcal{L}\{e^{a t} \sin(b t)\} = \frac{b}{(s - a)^2 + b^2}$, $\mathcal{L}\{e^{a t} \cos(b t)\} = \frac{s - a}{(s - a)^2 + b^2}$.",
        "Second Shifting Property (Time Delay & Heaviside Step Function): Unit step function $u(t - a) = 0$ for $t < a$, $1$ for $t \ge a$; If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{f(t - a) u(t - a)\} = e^{-a s} F(s)$; Modeling discontinuous chemical feed pulses and sudden heating.",
        "Laplace Transform of Derivatives: Transform of first derivative: $\mathcal{L}\{f'(t)\} = s F(s) - f(0)$; Second derivative: $\mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0) - f'(0)$; $n$-th derivative: $\mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - \sum_{i=1}^n s^{n-i} f^{(i-1)}(0)$; Converts differential equations into algebraic equations.",
        "Transform of Integrals & Multiplication by $t$: Transform of definite integral: $\mathcal{L}\left\{\int_0^t f(\tau) d\tau\right\} = \frac{F(s)}{s}$; Multiplication by power of $t$: $\mathcal{L}\{t^n f(t)\} = (-1)^n \frac{d^n}{ds^n} F(s)$; Division by $t$: $\mathcal{L}\left\{\frac{f(t)}{t}\right\} = \int_s^\infty F(\sigma) d\sigma$ provided limit exists.",
        "Inverse Laplace Transforms via Partial Fractions: Linear operator $\mathcal{L}^{-1}\{F(s)\} = f(t)$; Decomposing rational transfer functions $F(s) = \frac{P(s)}{Q(s)}$ into partial fractions with linear factors $\frac{A}{s - a}$, repeated factors $\frac{B}{(s - a)^k}$, and irreducible quadratic factors $\frac{C s + D}{(s - a)^2 + b^2}$.",
        "Convolution Theorem: Convolution integral defined as $(f * g)(t) = \int_0^t f(\tau) g(t - \tau) d\tau$; Convolution property: $\mathcal{L}\{(f * g)(t)\} = F(s) G(s)$; Inverse transform formulation: $\mathcal{L}^{-1}\{F(s) G(s)\} = \int_0^t f(\tau) g(t - \tau) d\tau$.",
        "Dirac Delta Function & Impulse Responses: Unit impulse function $\delta(t - a)$; Sifting property $\int_0^\infty f(t) \delta(t - a) dt = f(a)$; Laplace transform: $\mathcal{L}\{\delta(t - a)\} = e^{-a s}$; $\mathcal{L}\{\delta(t)\} = 1$; Impulse response of chemical CSTR reactors to instantaneous tracer injection.",
        "Solving Initial Value Problems for ODEs: Complete algorithmic workflow: Apply Laplace transform to both sides of ODE incorporating initial conditions $y(0) = y_0, y'(0) = y_1$; Solve algebraically for $Y(s)$; Apply inverse Laplace transform to obtain unique time-domain analytical solution $y(t)$."
    ],
    [
        "Laplace Integral Definition: $\mathcal{L}\{f(t)\} = \int_0^\infty e^{-st} f(t) dt$.",
        "Standard Transform $t^n$: $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$ (for positive integer $n$).",
        "First Shifting Theorem: $\mathcal{L}\{e^{at} f(t)\} = F(s - a)$.",
        "Second Shifting Theorem: $\mathcal{L}\{f(t-a) u(t-a)\} = e^{-as} F(s)$.",
        "First Derivative Transform: $\mathcal{L}\{f'(t)\} = s F(s) - f(0)$.",
        "Second Derivative Transform: $\mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0) - f'(0)$.",
        "Multiplication by $t$: $\mathcal{L}\{t f(t)\} = -\frac{d}{ds} F(s)$.",
        "Integral Transform: $\mathcal{L}\{\int_0^t f(\tau)d\tau\} = \frac{F(s)}{s}$.",
        "Convolution Theorem: $\mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t) = \int_0^t f(\tau)g(t-\tau)d\tau$.",
        "Exam Tip: In solving differential equations via Laplace transforms, remember that initial conditions $y(0)$ and $y'(0)$ are incorporated directly in the first algebraic step, eliminating the need to solve separately for arbitrary constants."
    ]
)

add_unit(
    "bsc-chm: 3d geometry",
    [
        "Direction Cosines & Direction Ratios: Directed line in 3D Euclidean space making angles $\alpha, \beta, \gamma$ with coordinate axes; Direction cosines $l = \cos\alpha, m = \cos\beta, n = \cos\gamma$; Fundamental identity: $l^2 + m^2 + n^2 = 1$; Direction ratios $a, b, c$ proportional to direction cosines: $l = \frac{a}{\sqrt{a^2 + b^2 + c^2}}$.",
        "Angle Between Two Directed Lines: Angle $\theta$ between lines with direction cosines $(l_1, m_1, n_1)$ and $(l_2, m_2, n_2)$: $\cos\theta = l_1 l_2 + m_1 m_2 + n_1 n_2$; Perpendicularity condition: $l_1 l_2 + m_1 m_2 + n_1 n_2 = 0$ ($a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$); Parallelism condition: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$.",
        "Equations of a Plane in 3D Space: General linear equation $A x + B y + C z + D = 0$ with normal vector $(A, B, C)$; Normal form $l x + m y + n z = p$ where $p$ is perpendicular distance from origin; Intercept form $\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1$; Plane passing through $(x_1, y_1, z_1)$: $A(x - x_1) + B(y - y_1) + C(z - z_1) = 0$.",
        "Perpendicular Distance & Angle Between Planes: Distance from point $(x_1, y_1, z_1)$ to plane $A x + B y + C z + D = 0$: $d = \frac{|A x_1 + B y_1 + C z_1 + D|}{\sqrt{A^2 + B^2 + C^2}}$; Angle between two planes: $\cos\theta = \frac{A_1 A_2 + B_1 B_2 + C_1 C_2}{\sqrt{A_1^2 + B_1^2 + C_1^2}\sqrt{A_2^2 + B_2^2 + C_2^2}}$.",
        "Symmetrical Equations of a Straight Line: Straight line passing through point $(x_1, y_1, z_1)$ with direction cosines $(l, m, n)$: $\frac{x - x_1}{l} = \frac{y - y_1}{m} = \frac{z - z_1}{n} = r$; Any arbitrary point on line has parametric coordinates $(x_1 + l r, y_1 + m r, z_1 + n r)$.",
        "Two-Point Form & Non-Symmetrical Equations of a Line: Line passing through $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$: $\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1} = \frac{z - z_1}{z_2 - z_1}$; Line defined as intersection of two non-parallel planes: $A_1 x + B_1 y + C_1 z + D_1 = 0$ and $A_2 x + B_2 y + C_2 z + D_2 = 0$.",
        "Coplanarity of Two Straight Lines: Condition for lines $\frac{x - x_1}{l_1} = \frac{y - y_1}{m_1} = \frac{z - z_1}{n_1}$ and $\frac{x - x_2}{l_2} = \frac{y - y_2}{m_2} = \frac{z - z_2}{n_2}$ to be coplanar: Determinant $\begin{vmatrix} x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ l_1 & m_1 & n_1 \\ l_2 & m_2 & n_2 \end{vmatrix} = 0$.",
        "Shortest Distance Between Two Skew Lines: Non-parallel, non-intersecting lines in 3D; Shortest distance vector lies along common perpendicular: $SD = \frac{\begin{vmatrix} x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{vmatrix}}{\sqrt{(b_1 c_2 - b_2 c_1)^2 + (c_1 a_2 - c_2 a_1)^2 + (a_1 b_2 - a_2 b_1)^2}}$; In vector form: $SD = \frac{|(\vec{a}_2 - \vec{a}_1) \cdot (\vec{b}_1 \times \vec{b}_2)|}{|\vec{b}_1 \times \vec{b}_2|}$.",
        "General Equation of a Sphere in 3D Space: Second-degree equation $x^2 + y^2 + z^2 + 2 u x + 2 v y + 2 w z + d = 0$; Center at $(-u, -v, -w)$; Radius $R = \sqrt{u^2 + v^2 + w^2 - d}$; Real sphere condition: $u^2 + v^2 + w^2 - d > 0$; Point sphere when radius equals zero.",
        "Sphere-Plane Intersections & Tangent Planes: Intersection of sphere with plane yields a circle in 3D space; Tangent plane to sphere at point $(x_1, y_1, z_1)$: $x x_1 + y y_1 + z z_1 + u(x + x_1) + v(y + y_1) + w(z + z_1) + d = 0$; Condition of tangency: perpendicular distance from center to plane equals sphere radius $R$."
    ],
    [
        "Direction Cosine Sum: $l^2 + m^2 + n^2 = 1$.",
        "Perpendicularity Condition: $l_1 l_2 + m_1 m_2 + n_1 n_2 = 0$.",
        "Parallelism Condition: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$.",
        "Point-to-Plane Distance: $d = \frac{|A x_1 + B y_1 + C z_1 + D|}{\sqrt{A^2 + B^2 + C^2}}$.",
        "Symmetric Line Form: $\frac{x - x_1}{l} = \frac{y - y_1}{m} = \frac{z - z_1}{n} = r$.",
        "Coplanarity Condition: Vanishing $3 \times 3$ determinant of displacement and direction ratios.",
        "Skew Line Shortest Distance: $SD = \frac{|(\vec{a}_2 - \vec{a}_1) \cdot (\vec{b}_1 \times \vec{b}_2)|}{|\vec{b}_1 \times \vec{b}_2|}$.",
        "Sphere Center: Coordinates $(-u, -v, -w)$.",
        "Sphere Radius Formula: $R = \sqrt{u^2 + v^2 + w^2 - d}$.",
        "Exam Tip: In shortest distance calculations between skew lines, if the determinant in the numerator evaluates to zero, the two lines are coplanar and intersect at a single point."
    ]
)

add_unit(
    "bsc-chm: plant anatomy",
    [
        "Meristematic Tissues and Classification: Characteristics of meristematic cells: thin cellulosic walls, dense cytoplasm, prominent nuclei, no vacuole or small vacuoles, continuous active mitotic cell division; Classification by position: Apical meristems (terminal growth in length), Intercalary meristems (internode elongation in monocots), Lateral meristems (cambium, secondary growth in girth).",
        "Theories of Shoot and Root Apical Organization: Tunica-Corpus theory of Schmidt: Tunica (outer peripheral layers dividing anticlinally for surface growth) and Corpus (central core dividing in all planes for volume growth); Histogen theory of Hanstein: Dermatogen (epidermis), Periblem (cortex), and Plerome (stele and vascular system).",
        "Simple Permanent Tissues Structure and Function: Parenchyma: isodiametric, living thin-walled cells functioning in photosynthesis (chlorenchyma) and storage; Collenchyma: living cells with uneven pectin-cellulose wall thickenings at corners providing flexible tensile mechanical support; Sclerenchyma: dead cells with thick lignified secondary walls comprising elongated fibers and stone cells (sclereids).",
        "Complex Vascular Tissues (Xylem and Phloem): Xylem: water and mineral conduction comprising dead tracheids (imperforate tapering cells), vessels (perforated continuous tubular conduits), xylem parenchyma, and xylem fibers; Phloem: organic assimilate translocation comprising enucleated sieve tube elements, nucleated companion cells, phloem parenchyma, and phloem fibers (bast fibers).",
        "Classification of Vascular Bundles: Radial (xylem and phloem on separate alternating radii, found in roots); Conjoint collateral (xylem and phloem on same radius, phloem external); Conjoint bicollateral (phloem on both outer and inner sides of xylem separated by cambium bands, Cucurbitaceae); Concentric amphicribral (xylem surrounded by phloem, ferns) and amphivasal (phloem surrounded by xylem, Dracaena).",
        "Primary Anatomical Organization of Dicot and Monocot Organs: Dicot stem: epidermis with trichomes, multicellular hypodermis (collenchymatous), parenchymatous cortex, endodermis with starch sheath, pericycle, open vascular bundles arranged in broken ring around central pith; Monocot stem: sclerenchymatous hypodermis, ground tissue not differentiated into cortex and pith, closed vascular bundles scattered throughout ground tissue; Dicot root: radial bundles with exarch xylem (protoxylem towards periphery), few xylem strands (diarch to tetrarch); Monocot root: polyarch exarch xylem with large conspicuous central pith.",
        "Normal Secondary Growth in Dicotyledonous Stems: Initiation of vascular cambium: intra-fascicular cambium unites with newly dedifferentiated inter-fascicular cambium to form continuous meristematic ring; Cambium produces secondary xylem towards interior and secondary phloem towards exterior; Ray initials form uniseriate and multiseriate vascular rays for radial conduction.",
        "Wood Anatomy and Periderm Formation: Annual rings composed of early wood (spring wood: wide lumens, thin walls, rapid water conduction) and late wood (autumn wood: narrow lumens, thick walls); Heartwood (duramen: central non-functional dark wood plugged with tyloses and impregnated with tannins and resins) versus sapwood (alburnum: peripheral living functional wood); Cork cambium (phellogen) arising in cortex produces cork (phellem) outwards and secondary cortex (phelloderm) inwards; Periderm replaces broken epidermis; Lenticels provide aeration.",
        "Anomalous Secondary Growth in Dicot Stems: Variations from normal secondary growth: Formation of accessory or successive concentric rings of vascular cambium (Boerhavia, Achyranthes); Abnormal behavior of single normal cambium producing unequal amounts of secondary tissues or fissured xylem wedges (Bignonia); Presence of medullary vascular bundles in pith (Nyctanthes) or cortical bundles in cortex (Casuarina).",
        "Anomalous Secondary Growth in Monocotyledonous Stems: Monocots normally lack secondary growth due to closed bundles; Anomalous secondary thickening in arborescent monocots (Dracaena, Yucca, Aloe); Secondary cambium arises in outer cortex and produces secondary closed amphivasal vascular bundles embedded in lignified conjunctive ground parenchyma."
    ],
    [
        "Meristem Classification: Apical (length), Intercalary (internode), Lateral (girth).",
        "Schmidt Theory: Tunica (anticlinal divisions) and Corpus (multi-plane divisions).",
        "Collenchyma Wall Chemistry: Uneven thickening of cellulose, hemicellulose, and pectin at cell corners.",
        "Xylem Vessel Traits: Perforated end plates forming continuous tubes; dead at maturity.",
        "Phloem Sieve Elements: Living enucleated cells supported by nucleated companion cells.",
        "Bicollateral Bundle Pattern: Outer phloem, outer cambium, xylem, inner cambium, inner phloem.",
        "Exarch vs Endarch Xylem: Exarch (protoxylem outside, in roots); Endarch (protoxylem inside, in stems).",
        "Annual Ring Composition: One spring wood ring plus one autumn wood ring equals one year.",
        "Heartwood vs Sapwood: Heartwood is non-conducting, dark, durable; Sapwood conducts sap.",
        "Exam Tip: In plant anatomy viva, remember that monocot stems never undergo normal secondary growth because their vascular bundles are closed, lacking intra-fascicular cambium between xylem and phloem."
    ]
)

add_unit(
    "bsc-chm: physiology",
    [
        "Plant Water Relations and Water Potential: Diffusion, osmosis, and imbibition; Concept of water potential: thermodynamic chemical potential of water per unit volume; Water potential components: osmotic (solute) potential, pressure (turgor) potential, and matric potential; Water potential of pure water at atmospheric pressure equals zero; Addition of solutes strictly lowers water potential; Mechanism of plasmolysis and deplasmolysis.",
        "Absorption of Water and Ascent of Sap: Root hair water uptake via apoplastic (extracellular porous cell wall and intercellular spaces) and symplastic (intracellular cytoplasmic continuum via plasmodesmata) pathways; Casparian strip in endodermis blocks apoplast, forcing water across selective plasma membrane; Ascent of sap: Transpiration-Cohesion-Tension theory of Dixon and Joly: Evaporative water loss generates negative tension gradient pulled through continuous water column stabilized by high cohesive hydrogen bonding and adhesive xylem wall forces.",
        "Stomatal Physiology and Transpiration: Structure of stomatal apparatus: Guard cells with differential wall thickening and radial cellulose microfibrils surrounded by subsidiary cells; Mechanism of stomatal movement: Active proton extrusion by plasma membrane proton-ATPase generates electrical gradient driving inward potassium ion uptake and chloride/malate counter-ion accumulation; Elevated osmotic pressure causes water inflow, turgor expansion, and pore opening; Environmental factors affecting transpiration: light, atmospheric humidity, temperature, wind velocity, and carbon dioxide concentration; Guttation and hydathode structure.",
        "Mineral Nutrition and Ion Transport: Classification of essential elements into macronutrients (nitrogen, phosphorus, potassium, calcium, magnesium, sulfur) and micronutrients (iron, manganese, zinc, copper, boron, molybdenum, chlorine); Classical deficiency symptoms: chlorosis, necrosis, stunted growth, premature leaf fall; Ion uptake mechanisms: passive transport (diffusion, ion channels) and active transport (carrier proteins, proton-coupled secondary active symport and antiport).",
        "Photosynthetic Pigments and Photochemical Light Reactions: Chloroplast ultrastructure (thylakoids, grana stacks, stroma); Absorption spectrum and action spectrum; Red drop effect and Emerson enhancement effect demonstrating existence of two cooperating pigment systems: Photosystem I (reaction center P700) and Photosystem II (reaction center P680); Z-scheme non-cyclic electron transport from water to NADP+; Oxygen-evolving complex (manganese cluster photolysis of water); Cyclic photophosphorylation generating ATP without NADPH.",
        "Carbon Assimilation Dark Reactions (C3, C4, and CAM): Calvin cycle (C3 pathway) in stroma: Carboxylation of ribulose-1,5-bisphosphate (RuBP) by RuBisCO generating 3-phosphoglycerate, reduction to triose phosphates consuming ATP and NADPH, regeneration of RuBP; C4 pathway (Hatch-Slack) in plants with Kranz anatomy (mesophyll and bundle sheath cells): Primary carboxylation of phosphoenolpyruvate (PEP) by PEP carboxylase forming oxaloacetate, transport of C4 dicarboxylic acids, decarboxylation in bundle sheath elevating carbon dioxide around RuBisCO, eliminating photorespiration; Crassulacean Acid Metabolism (CAM): Nocturnal stomatal opening, nighttime carbon dioxide fixation into vacuolar malic acid, daytime decarboxylation and Calvin cycle with closed stomata to conserve water.",
        "Photorespiration (C2 Oxidative Photosynthetic Carbon Cycle): Oxygenase activity of RuBisCO at high temperatures or low carbon dioxide levels: Oxygenation of RuBP yields 3-phosphoglycerate and 2-phosphoglycolate; Coordinated salvage pathway traversing three organelles: Chloroplast (glycolate synthesis), Peroxisome (oxidation to glyoxylate and transamination to glycine), and Mitochondrion (two glycine molecules condense into serine, releasing carbon dioxide and ammonia); Consumes metabolic energy without producing ATP or NADPH.",
        "Nitrogen Metabolism and Biological Nitrogen Fixation: Biological nitrogen cycle; Symbiotic nitrogen fixation in legume root nodules (*Rhizobium*): Infection thread formation, bacteroids, nodule organogenesis, leghemoglobin acting as oxygen scavenger; Nitrogenase enzyme complex (dinitrogenase Fe-Mo protein and dinitrogenase reductase Fe protein); Reduction of atmospheric dinitrogen to ammonia requiring 16 ATP molecules per dinitrogen fixed; Ammonia assimilation via GS-GOGAT (glutamine synthetase and glutamate synthase) and glutamate dehydrogenase pathways.",
        "Plant Growth Regulators (Phytohormones): Biosynthesis, transport, physiological actions, and commercial agricultural applications of major hormones: Auxins (indole-3-acetic acid IAA: apical dominance, cell elongation, root initiation, parthenocarpy); Gibberellins (gibberellic acid GA3: stem bolting, internode elongation, seed germination via alpha-amylase synthesis, breaking dormancy); Cytokinins (kinetin, zeatin: cell division, shoot organogenesis, delay of leaf senescence by Richmond-Lang effect); Ethylene (gaseous hormone: fruit ripening, triple response, abscission); Abscisic acid (ABA: stress hormone, stomatal closure under drought stress, seed dormancy).",
        "Photoperiodism, Vernalization, and Senescence: Photoperiodic control of flowering: Classification into Short-Day Plants (SDP, require dark period exceeding critical night length), Long-Day Plants (LDP), and Day-Neutral Plants (DNP); Phytochrome pigment system: Interconvertible red light absorbing form (Pr, inactive) and far-red light absorbing form (Pfr, active form); Florigen concept (FT protein mobile flowering signal); Vernalization: Promotion of flowering by prolonged exposure to low chilling temperatures (1 to 7 degrees Celsius); Senescence and programmed cell death in plants."
    ],
    [
        "Water Potential Rule: Pure water has water potential of 0; Solute addition lowers water potential.",
        "Ascent of Sap Theory: Dixon and Joly Transpiration-Cohesion-Tension theory.",
        "Stomatal Opening Trigger: Influx of potassium ions driven by proton-ATPase pumps.",
        "Casparian Strip Barrier: Suberin band in endodermis forcing water into symplastic path.",
        "Primary C3 Carboxylation: RuBisCO catalyzes RuBP plus carbon dioxide to two molecules of 3-PGA.",
        "Primary C4 Carboxylation: PEP carboxylase fixes carbon dioxide into oxaloacetate in mesophyll cells.",
        "Kranz Anatomy Feature: Distinct wreath-like bundle sheath cells surrounding vascular bundles in C4 leaves.",
        "Nitrogenase Oxygen Sensitivity: Protected by leghemoglobin oxygen scavenger in legume nodules.",
        "Triple Response of Ethylene: Stem thickening, apical hook curvature, reduced elongation.",
        "Exam Tip: In plant physiology viva, emphasize that photorespiration is energetically wasteful because it consumes ATP and releases previously fixed carbon dioxide without generating any sugars or energy."
    ]
)
