import json
import os

with open("scripts/build_bsc_sem2_physics_chem.py", "r", encoding="utf-8") as f:
    content = f.read()

if 'print(f"Total units built so far: {len(data)}")' in content:
    content = content.replace('print(f"Total units built so far: {len(data)}")', "")

part2 = '''
# =========================================================================
# 2. PHYSICS II: WAVES & OPTICS / STATISTICS II (B.Sc CS Sem 2)
# =========================================================================

add_unit(
    "bsc-phcs: oscillations",
    [
        "Simple Harmonic Motion (SHM) in Computing Systems: Linear dynamical systems; Differential equation $\\\\frac{d^2 x}{dt^2} + \\\\omega_0^2 x = 0$; State variable representation $\\\\dot{\\\\mathbf{x}} = A \\\\mathbf{x}$; Natural resonant frequency $\\\\omega_0 = \\\\sqrt{k/m}$.",
        "Damped Oscillations & Dissipation: Dissipative viscous friction model: $m \\\\ddot{x} + c \\\\dot{x} + k x = 0$; Damping factor $\\\\gamma = c/(2m)$; Three operational regimes: Overdamped ($\\\\gamma > \\\\omega_0$), Critically damped ($\\\\gamma = \\\\omega_0$), Underdamped ($\\\\gamma < \\\\omega_0$).",
        "Quality Factor ($Q$) & Energy Loss: Quality factor $Q = \\\\frac{\\\\omega_0}{2 \\\\gamma} = 2 \\\\pi \\\\frac{\\\\text{Energy Stored}}{\\\\text{Energy Dissipated per Cycle}}$; Measures frequency selectivity in RF clock circuitry and crystal oscillators.",
        "Forced Harmonic Oscillations & Resonance: Driven oscillator equation $\\\\ddot{x} + 2 \\\\gamma \\\\dot{x} + \\\\omega_0^2 x = \\\\frac{F_0}{m} \\\\cos(\\\\omega t)$; Steady-state amplitude $A(\\\\omega) = \\\\frac{F_0/m}{\\\\sqrt{(\\\\omega_0^2 - \\\\omega^2)^2 + 4 \\\\gamma^2 \\\\omega^2}}$.",
        "Amplitude Resonance vs Velocity Resonance: Amplitude resonance occurs at excitation frequency $\\\\omega_r = \\\\sqrt{\\\\omega_0^2 - 2 \\\\gamma^2}$; Velocity resonance occurs at natural frequency $\\\\omega = \\\\omega_0$ where mechanical impedance is purely real.",
        "Coupled Oscillators & Normal Modes: Coupled equations $m \\\\ddot{x}_1 = -k x_1 - k_c(x_1 - x_2)$ and $m \\\\ddot{x}_2 = -k x_2 - k_c(x_2 - x_1)$; Normal coordinates $q_1 = x_1 + x_2$ (in-phase mode $\\\\omega_1 = \\\\sqrt{k/m}$) and $q_2 = x_1 - x_2$ (anti-phase mode $\\\\omega_2 = \\\\sqrt{(k + 2k_c)/m}$).",
        "Energy Transfer in Coupled Oscillators: Periodic exchange of kinetic and potential energy between oscillators with beat period $T_b = \\\\frac{2 \\\\pi}{\\\\omega_2 - \\\\omega_1}$; Physical basis for directional waveguide couplers.",
        "Electrical Analogies to Mechanical Oscillations: LCR series circuit $L \\\\frac{d^2 q}{dt^2} + R \\\\frac{dq}{dt} + \\\\frac{1}{C} q = E(t)$; Mass $m \\\\leftrightarrow L$, damping $c \\\\leftrightarrow R$, spring compliance $1/k \\\\leftrightarrow C$, velocity $\\\\dot{x} \\\\leftrightarrow I$.",
        "Transient and Steady-State Numerical Modeling: Simulating oscillatory state transitions using Runge-Kutta 4th order integration in software simulation engines.",
        "Phase Space Trajectories: Trajectories plotted in displacement-velocity space $(x, \\\\dot{x})$; Undamped oscillator traces invariant ellipse; Damped system converges inward to stable attractor spiral at origin $(0, 0)$."
    ],
    [
        "SHM Equation: $\\\\ddot{x} + \\\\omega_0^2 x = 0$.",
        "Natural Frequency: $\\\\omega_0 = \\\\sqrt{k/m}$.",
        "Critical Damping Condition: $\\\\gamma = \\\\omega_0 \\\\implies c = 2 \\\\sqrt{k m}$.",
        "Quality Factor Formula: $Q = \\\\frac{\\\\omega_0}{2 \\\\gamma}$.",
        "Amplitude Resonance Frequency: $\\\\omega_r = \\\\sqrt{\\\\omega_0^2 - 2 \\\\gamma^2}$.",
        "Electrical Inductance Analogy: Inductance $L$ corresponds to mechanical mass $m$.",
        "Electrical Resistance Analogy: Resistance $R$ corresponds to viscous damping coefficient $c$.",
        "Normal Mode Definition: Independent motion where all parts of the system vibrate with identical frequency and phase.",
        "Phase Plane Damped Orbit: Inward spiraling trajectory toward origin.",
        "Exam Tip: In forced resonance questions, velocity resonance always occurs exactly at $\\\\omega = \\\\omega_0$, while amplitude resonance occurs slightly below $\\\\omega_0$."
    ]
)

add_unit(
    "bsc-phcs: wave optics",
    [
        "Electromagnetic Wave Nature of Light in Computing: Light as transverse electromagnetic wave satisfying Maxwell\\'s equations; Propagation velocity $c = 1/\\\\sqrt{\\\\mu_0 \\\\varepsilon_0} \\\\approx 3 \\\\times 10^8\\\\text{ m/s}$; High bandwidth carrier for optical fiber communications.",
        "Wavefronts & Ray Tracing: Definition of wavefront as locus of points possessing constant phase; Huygens\\' principle constructing future wavefronts via envelope of secondary wavelets.",
        "Spatial and Temporal Coherence in Telecommunications: Temporal coherence quantified by coherence time $\\\\tau_c$ and coherence length $L_c = c \\\\tau_c = \\\\frac{\\\\lambda^2}{\\\\Delta \\\\lambda}$; Spatial coherence across transverse beam cross-section.",
        "Semiconductor Laser Diode Light Sources: Stimulated emission in GaAs/InP p-n junctions; Optical cavity mirrors providing feedback; Narrow spectral linewidth $\\\\Delta \\\\lambda < 0.1\\\\text{ nm}$ yielding coherence length $L_c > 1\\\\text{ m}$.",
        "Light Emitting Diodes (LED) vs Lasers: Spontaneous emission in LEDs yields broad spectral width $\\\\Delta \\\\lambda \\\\approx 30\\\\text{ nm}$ and short coherence length; Laser diodes provide monochromatic, phase-coherent, directional emission.",
        "Optical Waveguide Fundamentals: Core-cladding index step $n_1 > n_2$; Critical angle for Total Internal Reflection (TIR): $\\\\theta_c = \\\\arcsin(n_2/n_1)$; Acceptance angle $\\\\theta_a$ and Numerical Aperture $NA = \\\\sqrt{n_1^2 - n_2^2}$.",
        "Single-Mode vs Multi-Mode Optical Fibers: Normalized frequency parameter $V = \\\\frac{2 \\\\pi a}{\\\\lambda} NA$; Single-mode propagation condition $V < 2.405$; Eliminates intermodal dispersion in long-haul high-speed networks.",
        "Attenuation and Signal Losses in Optical Fibers: Rayleigh scattering losses $\\\\propto 1/\\\\lambda^4$; Infrared absorption bands; Minimum attenuation optical telecom window at $\\\\lambda = 1550\\\\text{ nm}$ ($0.2\\\\text{ dB/km}$).",
        "Pulse Broadening & Dispersion: Chromatic dispersion $D = -\\\\frac{\\\\lambda}{c} \\\\frac{d^2 n}{d\\\\lambda^2}$; Limits maximum transmission bit-rate $B \\\\cdot L \\\\le \\\\text{constant}$ in fiber optic communication channels.",
        "Optical Computing & Photonic Interconnects: Replacing electrical copper interconnects with on-chip optical waveguides to overcome RC delay limits and power dissipation in modern multi-core processors."
    ],
    [
        "Coherence Length Equation: $L_c = \\\\frac{\\\\lambda^2}{\\\\Delta \\\\lambda} = c \\\\tau_c$.",
        "Numerical Aperture Formula: $NA = \\\\sqrt{n_1^2 - n_2^2}$.",
        "Acceptance Angle: $\\\\sin\\\\theta_{max} = NA$.",
        "Critical Angle for TIR: $\\\\sin\\\\theta_c = n_2 / n_1$.",
        "V-Number Single Mode Limit: $V < 2.405$.",
        "Rayleigh Scattering Wavelength Dependency: Losses scale as $1/\\\\lambda^4$.",
        "Telecom Wavelength Window: $1550\\\\text{ nm}$ offers lowest attenuation ($0.2\\\\text{ dB/km}$).",
        "Fiber Core Condition: Core refractive index $n_1$ must strictly exceed cladding index $n_2$.",
        "Laser Diode Advantage: High spatial coherence enables efficient coupling into single-mode fiber.",
        "Exam Tip: In numerical aperture questions, remember $NA$ is dimensionless and represents the light-gathering capacity of the optical fiber."
    ]
)

add_unit(
    "bsc-phcs: interference",
    [
        "Division of Wavefront in Optical Sensing: Young\\'s double slit interferometer as an optical phase sensor; Relative phase shift $\\\\Delta \\\\phi = \\\\frac{2 \\\\pi}{\\\\lambda} (n - 1) L$ when transparent gas cell of length $L$ and index $n$ is introduced.",
        "Fringe Shift Measurement: Introducing thin transparent plate of thickness $t$ and refractive index $\\\\mu$ into one path shifts fringe pattern by $N$ fringes: $t = \\\\frac{N \\\\lambda}{\\\\mu - 1}$.",
        "Mach-Zehnder Interferometer Architecture: Two beam splitters and two mirrors; Separates reference arm from sample arm; Widely used in high-speed optical telecommunications modulators (electro-optic $\\\\text{LiNbO}_3$).",
        "Electro-Optic Phase Modulation (Pockels Effect): Linear electro-optic index change $\\\\Delta n = \\\\frac{1}{2} n^3 r_{13} E$; Phase shift $\\\\Delta \\\\phi = \\\\pi V / V_\\\\pi$; Converts voltage signals into optical amplitude modulation.",
        "Division of Amplitude in Dielectric Coatings: Anti-reflection coatings on computer display glass; Destructive interference in reflected beam requires refractive index $n_{film} = \\\\sqrt{n_{air} n_{glass}}$ and optical thickness $n_{film} t = \\\\lambda/4$.",
        "High-Reflectance Dielectric Mirrors (Bragg Mirrors): Alternating quarter-wave layers of high and low refractive index ($n_H, n_L$); Constructive interference in reflection produces $> 99.9\\\\%$ reflectivity for laser cavities.",
        "Fabry-Perot Interferometer / Etalon: Multiple beam interference between two parallel partially transmitting mirrors with reflectance $R$; Transmitted intensity described by Airy formula: $I_T = \\\\frac{I_0}{1 + F \\\\sin^2(\\\\delta/2)}$.",
        "Coefficient of Finesse ($F$) & Free Spectral Range (FSR): Finesse coefficient $F = \\\\frac{4 R}{(1 - R)^2}$; Free Spectral Range $FSR = \\\\frac{c}{2 n d}$; Sharp narrow transmission peaks used as tunable optical filter channels in WDM networks.",
        "Wavelength Division Multiplexing (WDM): Multiplexing dozens of discrete laser wavelengths (e.g. 100 GHz channel grid) through single fiber utilizing interference optical filters.",
        "Optical Surface Profilometry: Non-contact optical inspection of microelectronic silicon chip wafer surface topography using white-light scanning interferometry."
    ],
    [
        "Fringe Shift Thickness Formula: $t = \\\\frac{N \\\\lambda}{\\\\mu - 1}$.",
        "Anti-Reflection Index Rule: $n_{film} = \\\\sqrt{n_{air} n_{glass}}$.",
        "Quarter-Wave Coating Thickness: $t = \\\\frac{\\\\lambda}{4 n_{film}}$.",
        "Airy Distribution Formula: $I_T = \\\\frac{I_0}{1 + F \\\\sin^2(\\\\delta/2)}$.",
        "Coefficient of Finesse: $F = \\\\frac{4 R}{(1 - R)^2}$.",
        "Fabry-Perot Peak Transmission: $2 n d \\\\cos \\\\theta = m \\\\lambda$.",
        "Half-Wave Voltage $V_\\\\pi$: Voltage required to introduce a $\\\\pi$ phase shift in electro-optic modulator.",
        "Free Spectral Range: $FSR = \\\\frac{c}{2 d}$ (in frequency domain).",
        "Mach-Zehnder Application: Modulates continuous wave laser light up to $40\\\\text{ Gbps}$ via RF voltage.",
        "Exam Tip: In anti-reflection coating problems, phase changes on reflection occur at BOTH boundaries (air-to-film and film-to-glass), requiring path difference $2 n t = \\\\lambda/2$."
    ]
)

add_unit(
    "bsc-phcs: diffraction",
    [
        "Fraunhofer Diffraction & Fourier Optics: Fraunhofer diffraction pattern is mathematically the 2D spatial Fourier transform of aperture transmission function: $U(u, v) = \\\\iint t(x, y) e^{-j 2 \\\\pi (u x + v y)} dx dy$.",
        "Rectangular Aperture Diffraction: Aperture dimensions $a \\\\times b$; 2D intensity pattern $I(x, y) = I_0 \\\\left(\\\\frac{\\\\sin\\\\alpha}{\\\\alpha}\\\\right)^2 \\\\left(\\\\frac{\\\\sin\\\\beta}{\\\\beta}\\\\right)^2$ where $\\\\alpha = \\\\frac{\\\\pi a x}{\\\\lambda D}$ and $\\\\beta = \\\\frac{\\\\pi b y}{\\\\lambda D}$.",
        "Circular Aperture Diffraction & Airy Disc: Lens pupil of diameter $D$; Diffraction amplitude given by first-order Bessel function $J_1(x)$; Intensity $I(\\\\theta) = I_0 \\\\left(\\\\frac{2 J_1(k a \\\\sin\\\\theta)}{k a \\\\sin\\\\theta}\\\\right)^2$.",
        "Angular Radius of First Airy Dark Ring: First zero of $J_1(u)$ occurs at $u = 3.832$; Angular resolution limit: $\\\\theta_1 = 1.22 \\\\frac{\\\\lambda}{D}$; Sets absolute optical resolution limit for cameras, telescopes, and lithographic scanners.",
        "Rayleigh Resolution Criterion: Two point sources are just resolved when central maximum of one Airy disc falls on the first minimum of the other: $\\\\Delta \\\\theta \\ge 1.22 \\\\frac{\\\\lambda}{D}$.",
        "Diffraction Limits in Semiconductor Lithography: Minimum printable semiconductor feature size (half-pitch): $HP = k_1 \\\\frac{\\\\lambda}{NA}$; Explains transition from DUV ($193\\\\text{ nm}$) to Extreme Ultraviolet (EUV, $\\\\lambda = 13.5\\\\text{ nm}$) lithography.",
        "Diffraction Gratings in Spectrometers: Grating equation $d \\\\sin\\\\theta = m \\\\lambda$; Resolving power $\\\\mathcal{R} = \\\\frac{\\\\lambda}{\\\\Delta \\\\lambda} = m N$; Emitted optical spectrum separated into discrete wavelength channels on CCD line sensor.",
        "Arrayed Waveguide Gratings (AWG): Integrated planar lightwave circuit grating multiplexing and demultiplexing optical channels in fiber communications.",
        "Spatial Filtering & 4f Optical Processing: 2-lens optical system executing optical Fourier transform; Inserting physical spatial frequency mask at Fourier plane executes real-time 2D convolution, edge enhancement, and noise filtering.",
        "Holography & Wavefront Reconstruction: 3D imaging recording both amplitude and phase via reference beam interference on photographic emulsion; Reconstructed by illuminating with conjugate laser beam."
    ],
    [
        "Airy Disc Angular Radius: $\\\\theta = 1.22 \\\\frac{\\\\lambda}{D}$.",
        "Rayleigh Resolution Limit: $\\\\Delta \\\\theta = 1.22 \\\\frac{\\\\lambda}{D}$.",
        "Photolithography Feature Resolution: $CD = k_1 \\\\frac{\\\\lambda}{NA}$.",
        "Fourier Optical Relation: Fraunhofer field is the spatial 2D Fourier transform of the aperture.",
        "Bessel Function Zero: First zero of $J_1(x)$ occurs at $x = 3.832$.",
        "EUV Lithography Wavelength: $13.5\\\\text{ nm}$ used in cutting-edge semiconductor fabs.",
        "Grating Resolving Power: $\\\\mathcal{R} = m N$.",
        "Rectangular Aperture Intensity: Product of independent sinc-squared functions along orthogonal axes.",
        "4f System Spatial Filter: Lens 1 transforms to frequency space; Filter modifies spectrum; Lens 2 inverts back to image.",
        "Exam Tip: In the Airy disc resolution equation, remember the factor 1.22 arises strictly from the circular geometry Bessel function zero $3.832 / \\\\pi \\\\approx 1.22$."
    ]
)

add_unit(
    "bsc-phcs: polarization",
    [
        "Polarization States in Optical Computing: Vector description of electric field $\\\\vec{E}(z, t) = \\\\text{Re}[(E_{0x} \\\\hat{x} + E_{0y} e^{j \\\\delta} \\\\hat{y}) e^{j(k z - \\\\omega t)}]$; Linear, circular, and elliptical polarization states as physical qubits in quantum key distribution.",
        "Jones Vectors for Pure Polarization States: Horizontal linear: $\\\\begin{pmatrix} 1 \\\\\\\\ 0 \\\\end{pmatrix}$; Vertical linear: $\\\\begin{pmatrix} 0 \\\\\\\\ 1 \\\\end{pmatrix}$; Right-circular: $\\\\frac{1}{\\\\sqrt{2}}\\\\begin{pmatrix} 1 \\\\\\\\ -j \\\\end{pmatrix}$; Left-circular: $\\\\frac{1}{\\\\sqrt{2}}\\\\begin{pmatrix} 1 \\\\\\\\ j \\\\end{pmatrix}$.",
        "Jones Matrices for Optical Elements: Linear polarizer with transmission axis at angle $\\\\theta$: $M_P(\\\\theta) = \\\\begin{pmatrix} \\\\cos^2\\\\theta & \\\\sin\\\\theta\\\\cos\\\\theta \\\\\\\\ \\\\sin\\\\theta\\\\cos\\\\theta & \\\\sin^2\\\\theta \\\\end{pmatrix}$; Quarter-wave plate: $\\\\begin{pmatrix} 1 & 0 \\\\\\\\ 0 & -j \\\\end{pmatrix}$.",
        "Stokes Parameters & Poincaré Sphere: Stokes vector $\\\\mathbf{S} = (S_0, S_1, S_2, S_3)^T$; $S_0$ is total intensity, $S_1$ is linear horizontal/vertical, $S_2$ is linear $\\\\pm 45^\\\\circ$, $S_3$ is circular handedness; Geometrical representation on Poincaré sphere surface.",
        "Degree of Polarization (DOP): Quantifies unpolarized noise: $DOP = \\\\frac{\\\\sqrt{S_1^2 + S_2^2 + S_3^2}}{S_0}$; $DOP = 1$ for fully polarized light, $DOP = 0$ for unpolarized thermal noise.",
        "Liquid Crystal Display (LCD) Operation: Twisted Nematic (TN) liquid crystal cells; Applied electric field untwists nematic director, rotating polarization by $90^\\\\circ$ between crossed polarizers; Controls pixel transmission in digital flat panels.",
        "Polarization Mode Dispersion (PMD) in Fiber: Asymmetric fiber core birefringence causes orthogonal polarization modes to travel at different group velocities; Differential Group Delay (DGD) causes pulse broadening limiting 100G transmission.",
        "Optical Isolators & Faraday Rotators: Non-reciprocal optical diode protecting laser cavities from back-reflections; Utilizes magneto-optic Faraday effect rotating polarization by $45^\\\\circ$ independent of propagation direction.",
        "Quantum Cryptography & BB84 Protocol: Quantum Key Distribution (QKD) encoding cryptographic bits into photon polarization bases: Rectilinear ($0^\\\\circ, 90^\\\\circ$) and Diagonal ($45^\\\\circ, 135^\\\\circ$); Eavesdropping collapses quantum wavefunction.",
        "Polarization Multiplexed Optical Transmission: Polarization Division Multiplexing (PDM-QPSK) doubling data capacity by transmitting two independent optical data streams simultaneously on orthogonal polarization states."
    ],
    [
        "Jones Vector Horizontal: $\\\\begin{pmatrix} 1 \\\\\\\\ 0 \\\\end{pmatrix}$.",
        "Jones Vector Vertical: $\\\\begin{pmatrix} 0 \\\\\\\\ 1 \\\\end{pmatrix}$.",
        "Malus\\'s Law: $I = I_0 \\\\cos^2\\\\theta$.",
        "Degree of Polarization: $DOP = \\\\frac{\\\\sqrt{S_1^2 + S_2^2 + S_3^2}}{S_0}$.",
        "Poincaré Sphere Poles: North pole represents right-circular; South pole represents left-circular polarization.",
        "Faraday Rotation: $\\\\theta = V B L$ (non-reciprocal magneto-optic rotation).",
        "Liquid Crystal Mechanism: Voltage rotates optical axis, modulating light transmission through analyzer.",
        "Optical Isolator Purpose: Prevents back-reflected light from entering laser and generating noise.",
        "BB84 Basis Sets: Rectilinear ($\\\\leftrightarrow, \\\\updownarrow$) and Diagonal ($\\\\nearrow, \\\\nwarrow$).",
        "Exam Tip: In Jones calculus, remember the Jones vector must be normalized to unit intensity: $|E_x|^2 + |E_y|^2 = 1$."
    ]
)
'''

content += part2

with open("scripts/build_bsc_sem2_physics_chem.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subject 2 (Physics II: Waves & Optics for CS).")
