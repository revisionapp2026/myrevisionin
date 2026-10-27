import json
import os

with open("scripts/build_bsc_sem2_physics_chem.py", "r", encoding="utf-8") as f:
    content = f.read()

part3 = '''
# =========================================================================
# 3. PHYSICS II / STATISTICS II (B.Sc Math Sem 2)
# =========================================================================

add_unit(
    "bsc-phm: oscillations",
    [
        "Sturm-Liouville Formulation of Oscillations: Self-adjoint differential equation $\\\\frac{d}{dx}\\\\left[p(x)\\\\frac{dy}{dx}\\\\right] + [\\\\lambda w(x) - q(x)] y = 0$; Boundary conditions generate real eigenvalues $\\\\lambda_1 < \\\\lambda_2 < \\\\dots$ and mutually orthogonal eigenfunctions with respect to weight $w(x)$.",
        "Linear Operator Formulation in Function Spaces: Harmonic oscillator Hamiltonian $\\\\mathcal{H} = -\\\\frac{d^2}{dx^2} + \\\\omega_0^2 x^2$; Hermite differential equation and orthogonal Hermite polynomials $H_n(x)$ spanning $L^2(\\\\mathbb{R})$.",
        "Damped Oscillator Characteristic Polynomial: Quadratic operator equation $D^2 + 2 \\\\gamma D + \\\\omega_0^2 = 0$; Roots $m_{1,2} = -\\\\gamma \\\\pm \\\\sqrt{\\\\gamma^2 - \\\\omega_0^2}$; Degenerate root at critical damping ($\\\\gamma = \\\\omega_0$) yields secular polynomial factor $(c_1 + c_2 t) e^{-\\\\gamma t}$.",
        "Green\\'s Function for Inhomogeneous Oscillations: Impulse response solving $\\\\ddot{x} + 2 \\\\gamma \\\\dot{x} + \\\\omega_0^2 x = \\\\delta(t - \\\\tau)$; Causal Green\\'s function $G(t, \\\\tau) = \\\\frac{1}{\\\\omega_d} e^{-\\\\gamma(t - \\\\tau)} \\\\sin(\\\\omega_d(t - \\\\tau)) \\\\Theta(t - \\\\tau)$; General solution $x(t) = \\\\int_0^t G(t, \\\\tau) F(\\\\tau) d\\\\tau$.",
        "Anharmonic Oscillators & Perturbation Theory: Non-linear Duffing equation $\\\\ddot{x} + \\\\omega_0^2 x + \\\\varepsilon x^3 = 0$; Naive perturbation expansion generates resonant secular terms $t \\\\cos(\\\\omega_0 t)$ destroying long-term validity.",
        "Lindstedt-Poincaré Method: Eliminating secular terms by expanding frequency eigenvalue $\\\\omega = \\\\omega_0 + \\\\varepsilon \\\\omega_1 + \\\\dots$; Amplitude-dependent frequency shift: $\\\\omega = \\\\omega_0 \\\\left(1 + \\\\frac{3 \\\\varepsilon A^2}{8 \\\\omega_0^2}\\\\right)$.",
        "Phase Plane & Limit Cycles: Autonomous 2D dynamical system $\\\\dot{x} = y, \\\\dot{y} = -\\\\omega_0^2 x - f(x, y)$; Poincaré-Bendixson Theorem; Van der Pol oscillator $\\\\ddot{x} - \\\\mu(1 - x^2)\\\\dot{x} + x = 0$ exhibiting isolated stable closed orbit (limit cycle).",
        "Parametric Resonance & Mathieu Equation: Time-dependent parameter modulation $\\\\ddot{x} + [\\\\delta + \\\\varepsilon \\\\cos(2 t)] x = 0$; Ince-Strutt stability chart mapping tongue-shaped zones of parametric instability and exponential amplification.",
        "Coupled Linear Systems & Matrix Diagonalization: Matrix equation $M \\\\ddot{\\\\mathbf{x}} + K \\\\mathbf{x} = 0$; Generalized eigenvalue problem $\\\\det(K - \\\\omega^2 M) = 0$; Orthogonality of eigenvectors with respect to mass matrix: $\\\\mathbf{v}_i^T M \\\\mathbf{v}_j = \\\\delta_{ij}$.",
        "Liouville\\'s Theorem in Statistical Mechanics: Conservation of phase space volume $d\\\\Gamma = dx dp$ under Hamiltonian flow: $\\\\frac{\\\\partial \\\\rho}{\\\\partial t} + \\\\{\\\\rho, H\\\\} = 0$; Phase fluid incompressibility for conservative oscillatory ensembles."
    ],
    [
        "Sturm-Liouville Equation: $[p(x) y\\']\\' + [\\\\lambda w(x) - q(x)] y = 0$.",
        "Eigenfunction Orthogonality: $\\\\int_a^b y_m(x) y_n(x) w(x) dx = 0$ for $m \\\\ne n$.",
        "Green\\'s Function Response: $x(t) = \\\\int G(t, \\\\tau) f(\\\\tau) d\\\\tau$.",
        "Duffing Frequency Shift: $\\\\Delta \\\\omega = \\\\frac{3 \\\\varepsilon A^2}{8 \\\\omega_0}$.",
        "Van der Pol Equation: $\\\\ddot{x} - \\\\mu(1 - x^2)\\\\dot{x} + x = 0$.",
        "Mathieu Equation: $\\\\ddot{x} + [\\\\delta + \\\\varepsilon \\\\cos(2t)] x = 0$.",
        "Generalized Eigenvalue Problem: $\\\\det(K - \\\\omega^2 M) = 0$.",
        "Critical Damping Factor: $\\\\gamma = \\\\omega_0$.",
        "Liouville Theorem Statement: Phase space volume is conserved during Hamiltonian time evolution.",
        "Exam Tip: In Lindstedt-Poincaré perturbation, choose $\\\\omega_1$ specifically to cancel terms with $\\\\cos(\\\\omega t)$ to eliminate secular growth."
    ]
)

add_unit(
    "bsc-phm: wave optics",
    [
        "Helmholtz Equation from Maxwell Field Equations: Time-harmonic spatial field $E(x, y, z) e^{-i \\\\omega t}$; Vector wave equation reduces to scalar Helmholtz PDE: $\\\\nabla^2 U + k^2 U = 0$ where wave number $k = \\\\omega/c = 2\\\\pi/\\\\lambda$.",
        "Sommerfeld Radiation Condition: Physical boundary condition at infinity: $\\\\lim_{r \\\\to \\\\infty} r \\\\left(\\\\frac{\\\\partial U}{\\\\partial r} - i k U\\\\right) = 0$; Guarantees that only outgoing radiating waves exist at boundary, ensuring uniqueness of solutions.",
        "Green\\'s Theorem in Helmholtz Field Theory: Boundary value formulation $U(P) = \\\\frac{1}{4 \\\\pi} \\\\oint_S \\\\left[U \\\\frac{\\\\partial G}{\\\\partial n} - G \\\\frac{\\\\partial U}{\\\\partial n}\\\\right] dS$ where free-space Green\\'s function is $G = \\\\frac{e^{i k r}}{r}$.",
        "Kirchhoff Integral Formulation of Diffraction: Mathematical derivation of diffraction through opaque aperture $S$: $U(P) = -\\\\frac{i A}{2 \\\\lambda} \\\\iint_S \\\\frac{e^{i k(r + r\\')}}{r r\\'} [\\\\cos(\\\\vec{n}, \\\\vec{r}) - \\\\cos(\\\\vec{n}, \\\\vec{r}\\\\')] dS$.",
        "Paraxial Helmholtz Equation & Gaussian Beams: Under paraxial approximation $\\\\partial^2 A / \\\\partial z^2 \\\\ll 2 k \\\\partial A / \\\\partial z$; Paraxial equation $\\\\nabla_\\\\perp^2 A + 2 i k \\\\frac{\\\\partial A}{\\\\partial z} = 0$; Exact analytical solution is the fundamental TEM$_{00}$ Gaussian beam.",
        "Gaussian Beam Waist & Rayleigh Range: Beam radius $w(z) = w_0 \\\\sqrt{1 + (z/z_R)^2}$ where Rayleigh range $z_R = \\\\frac{\\\\pi w_0^2}{\\\\lambda}$; Confocal parameter $b = 2 z_R$; Radius of wavefront curvature $R(z) = z \\\\left[1 + (z_R/z)^2\\\\right]$.",
        "Gouy Phase Shift Phenomenon: Phase advance $\\\\zeta(z) = \\\\arctan(z/z_R)$ acquired by focused Gaussian beam passing through beam waist; Total on-axis phase shift across focus is $\\\\pi$ radians.",
        "ABCD Matrix Formalism for Optical Beam Propagation: Complex beam parameter $\\\\frac{1}{q(z)} = \\\\frac{1}{R(z)} - i \\\\frac{\\\\lambda}{\\\\pi w^2(z)}$; Transformation through paraxial optical system characterized by ray matrix: $q_2 = \\\\frac{A q_1 + B}{C q_1 + D}$.",
        "Fourier Transformation Property of Ideal Lens: Coherent optical field $U(x, y)$ placed at front focal plane of thin convex lens of focal length $f$ produces exact spatial Fourier transform at back focal plane: $U_f(u, v) = \\\\frac{1}{i \\\\lambda f} \\\\iint U(x, y) e^{-i \\\\frac{2\\\\pi}{\\\\lambda f}(x u + y v)} dx dy$.",
        "Optical Transfer Function (OTF) & Modulation Transfer Function (MTF): Frequency response of imaging system: $OTF(f_x, f_y) = MTF \\\\cdot e^{i PTF}$; Autocorrelation of exit pupil function; Cutoff spatial frequency $f_c = \\\\frac{2 NA}{\\\\lambda}$."
    ],
    [
        "Helmholtz Equation: $\\\\nabla^2 U + k^2 U = 0$.",
        "Free-Space Green\\'s Function: $G(\\vec{r}, \\vec{r}\\') = \\\\frac{e^{i k |\\\\vec{r} - \\\\vec{r}\\'|}}{4 \\\\pi |\\\\vec{r} - \\\\vec{r}\\'|}$.",
        "Sommerfeld Condition: $\\\\lim_{r \\to \\\\infty} r (\\\\partial U / \\\\partial r - i k U) = 0$.",
        "Rayleigh Range Formula: $z_R = \\\\frac{\\\\pi w_0^2}{\\\\lambda}$.",
        "Gaussian Beam Radius: $w(z) = w_0 \\\\sqrt{1 + (z/z_R)^2}$.",
        "Gouy Phase Shift: $\\\\zeta(z) = \\\\arctan(z/z_R)$.",
        "Complex q-Parameter: $\\\\frac{1}{q} = \\\\frac{1}{R} - i \\\\frac{\\\\lambda}{\\\\pi w^2}$.",
        "ABCD Law for Gaussian Beams: $q_2 = \\\\frac{A q_1 + B}{C q_1 + D}$.",
        "Lens Fourier Transform Factor: Spatial scaling is $u = x/(\\\\lambda f)$.",
        "Exam Tip: In Gaussian beam calculations, at $z = z_R$, the beam cross-sectional area doubles and beam radius increases by factor of $\\\\sqrt{2}$."
    ]
)

add_unit(
    "bsc-phm: interference",
    [
        "Statistical Theory of Optical Coherence: Complex analytic signal $V(t)$; Mutual coherence function $\\\\Gamma_{12}(\\\\tau) = \\\\langle V_1(t + \\\\tau) V_2^*(t) \\\\rangle$; Cross-correlation function of stochastic optical fields.",
        "Complex Degree of Coherence (Normalized): $\\\\gamma_{12}(\\\\tau) = \\\\frac{\\\\Gamma_{12}(\\\\tau)}{\\\\sqrt{\\\\Gamma_{11}(0) \\\\Gamma_{22}(0)}} = \\\\frac{\\\\Gamma_{12}(\\\\tau)}{\\\\sqrt{I_1 I_2}}$; Bounded mathematically by $0 \\le |\\\\gamma_{12}(\\\\tau)| \\le 1$; Strict Schwarz inequality proof.",
        "General Interference Law for Partially Coherent Light: Total observed intensity $I = I_1 + I_2 + 2 \\\\sqrt{I_1 I_2} |\\\\gamma_{12}(\\\\tau)| \\\\cos[\\\\alpha_{12}(\\\\tau) - \\\\delta]$; Visibility of interference fringes $V = \\\\frac{I_{max} - I_{min}}{I_{max} + I_{min}} = \\\\frac{2 \\\\sqrt{I_1 I_2}}{I_1 + I_2} |\\\\gamma_{12}(\\\\tau)|$.",
        "Van Cittert-Zernike Theorem: Fundamental theorem of optical interferometry; Complex degree of spatial coherence between two pinholes illuminated by distant quasi-monochromatic incoherent source equals the normalized Fourier transform of the source intensity distribution.",
        "Application to Stellar Diameter Measurement: Michelson Stellar Interferometer; Disappearance of fringe visibility occurs at baseline separation $d = 1.22 \\\\frac{\\\\lambda}{\\\\theta}$, where $\\\\theta$ is angular diameter of the star.",
        "Wiener-Khinchin Theorem in Temporal Coherence: The temporal autocorrelation function $\\\\Gamma(\\\\tau)$ and the optical power spectral density $S(\\\\omega)$ form a Fourier transform pair: $S(\\\\omega) = \\\\frac{1}{2 \\\\pi} \\\\int_{-\\\\infty}^\\\\infty \\\\Gamma(\\\\tau) e^{i \\\\omega \\\\tau} d\\\\tau$.",
        "Multilayer Thin-Film Matrix Formalism (Abelès Matrix): Characteristic transfer matrix for layered dielectric media: $M = \\\\prod_{j} \\\\begin{pmatrix} \\\\cos\\\\delta_j & -\\\\frac{i}{p_j}\\\\sin\\\\delta_j \\\\\\\\ -i p_j \\\\sin\\\\delta_j & \\\\cos\\\\delta_j \\\\end{pmatrix}$ where $\\\\delta_j = \\\\frac{2 \\\\pi}{\\\\lambda} n_j d_j \\\\cos\\\\theta_j$.",
        "Photonic Bandgap in Periodic Multilayers: Eigenvalue analysis of 1D periodic dielectric lattice (Bloch theorem); Bloch wave vector $K$; Condition $\\\\cos(K \\\\Lambda) = \\\\frac{1}{2}\\\\text{Tr}(M) > 1$ defines forbidden photonic bandgap (total Bragg reflection).",
        "Ring Resonator S-Matrix Formulation: Scattering matrix representation of integrated optical ring resonators; Transmission spectrum $T = \\\\left|\\\\frac{r - a e^{i \\\\phi}}{1 - r a e^{i \\\\phi}}\\\\right|^2$; Critical coupling condition $r = a$ producing zero transmission at resonance.",
        "Sagnac Effect & Optical Gyroscopes: Phase difference between counter-propagating waves in rotating interferometer: $\\\\Delta \\\\Phi = \\\\frac{8 \\\\pi A \\\\Omega}{\\\\lambda c}$ where $A$ is enclosed loop area and $\\\\Omega$ is angular rotation rate; Fiber Optic Gyroscopes (FOG) in inertial guidance."
    ],
    [
        "Complex Degree of Coherence: $\\\\gamma_{12}(\\\\tau) = \\\\frac{\\\\Gamma_{12}(\\\\tau)}{\\\\sqrt{I_1 I_2}}$.",
        "Fringe Visibility Formula: $V = \\\\frac{2 \\\\sqrt{I_1 I_2}}{I_1 + I_2} |\\\\gamma_{12}|$.",
        "General Interference Law: $I = I_1 + I_2 + 2 \\\\sqrt{I_1 I_2} |\\\\gamma_{12}| \\\\cos\\\\phi$.",
        "Van Cittert-Zernike: Spatial coherence equals normalized 2D Fourier transform of source brightness.",
        "Wiener-Khinchin Relation: Coherence function and spectral density are Fourier duals.",
        "Michelson Stellar Baseline: First fringe null at $d = 1.22 \\\\lambda / \\\\theta$.",
        "Abelès Matrix Determinant: $\\\\det(M_j) = 1$ (unimodular for lossless layers).",
        "Photonic Bandgap Condition: $|\\\\text{Trace}(M)| > 2$.",
        "Sagnac Phase Shift: $\\\\Delta \\\\Phi = \\\\frac{8 \\\\pi A \\\\Omega}{\\\\lambda c}$.",
        "Exam Tip: In visibility calculations with equal beam intensities ($I_1 = I_2$), fringe visibility simplifies directly to $V = |\\\\gamma_{12}|$, providing a direct physical probe of coherence."
    ]
)

add_unit(
    "bsc-phm: diffraction",
    [
        "Asymptotic Evaluation of Diffraction Integrals: Method of Stationary Phase for high-frequency asymptotics ($k \\\\to \\\\infty$); Major contributions to integral $\\\\int g(t) e^{i k f(t)} dt$ arise exclusively from critical points where $f\\'(t_s) = 0$.",
        "Fresnel Diffraction Integral Formulation: Quadratic approximation of path distance in Kirchhoff integral: $U(x, y) = \\\\frac{e^{i k z}}{i \\\\lambda z} \\\\iint U_0(\\xi, \\\\eta) e^{i \\\\frac{\\\\pi}{\\\\lambda z}[(x - \\xi)^2 + (y - \\eta)^2]} d\\\\xi d\\\\eta$.",
        "Dimensionless Fresnel Parameters: Coordinate scaling: $u = (x - \\xi)\\\\sqrt{\\\\frac{2}{\\\\lambda z}}$ and $v = (y - \\eta)\\\\sqrt{\\\\frac{2}{\\\\lambda z}}$; Decomposes 2D aperture integral into product of independent 1D Fresnel integrals.",
        "Cornu Spiral Mathematical Geometry: Parametric curve in complex plane $Z(w) = C(w) + i S(w)$ where $C(w) = \\\\int_0^w \\\\cos(\\\\pi t^2/2) dt$ and $S(w) = \\\\int_0^w \\\\sin(\\\\pi t^2/2) dt$; Arc length equals parameter $w$; Curvature $\\\\kappa = \\\\pi w$.",
        "Diffraction at a Straight Edge using Cornu Spiral: Amplitude represented by chord vector connecting asymptotic eye $(-1/2, -1/2)$ to point on spiral $w = x \\\\sqrt{2/(\\\\lambda z)}$; Asymptotic intensity oscillations into illuminated zone, monotonic exponential decay into shadow.",
        "Fraunhofer Diffraction as Spatial Fourier Transform: Limiting case when Fresnel number $N_F = \\\\frac{a^2}{\\\\lambda z} \\\\ll 1$; Quadratic phase factor inside aperture approaches unity; Far-field pattern is exact scaled Fourier transform of aperture function.",
        "Babinet\\'s Principle in Wave Optics: For two complementary screens $S_1$ and $S_2$ where $S_1 + S_2 = \\\\text{complete plane}$, diffracted field amplitudes satisfy $U_1(P) + U_2(P) = U_{unobstructed}(P)$; At points where unobstructed beam is zero, diffracted intensities are identical: $I_1 = I_2$.",
        "Airy Function & Asymptotic Edge Diffraction: Uniform asymptotic approximation near optical caustics and shadow boundaries expressed via Airy function $\\\\text{Ai}(x) = \\\\frac{1}{\\\\pi}\\\\int_0^\\\\infty \\\\cos(t^3/3 + x t) dt$.",
        "Diffraction Tomography & Inverse Scattering: Reconstruction of 3D refractive index distributions $n(x, y, z)$ from 2D forward-scattered fields; Fourier Diffraction Theorem: 2D Fourier transform of scattered field maps onto circular arc in 3D Fourier space.",
        "Talbot Effect (Self-Imaging of Periodic Gratings): Monochromatic plane wave incident on periodic grating of pitch $p$ reproduces exact grating image at periodic longitudinal Talbot distances $z_T = \\\\frac{2 p^2}{\\\\lambda}$; Fractional Talbot sub-images at fractional multiples."
    ],
    [
        "Fresnel Number Definition: $N_F = \\\\frac{a^2}{\\\\lambda z}$.",
        "Fraunhofer Condition: $N_F \\\\ll 1$ (source/screen far-field).",
        "Cornu Spiral Arc Length: Arc length $s = w$.",
        "Cornu Curvature Formula: $\\\\kappa(w) = \\\\pi w$.",
        "Straight Edge Shadow Boundary Intensity: Exactly $1/4$ ($25\\\\%$) of unobstructed intensity.",
        "Babinet\\'s Principle: $U_1 + U_2 = U_0$; $I_1 = I_2$ off-axis.",
        "Talbot Distance Equation: $z_T = \\\\frac{2 p^2}{\\\\lambda}$.",
        "Stationary Phase Contribution: Proportional to $1/\\\\sqrt{|f\\\'\\\'(t_s)|}$.",
        "Fresnel Asymptotic Eyes: Spiral centers at $(1/2, 1/2)$ and $(-1/2, -1/2)$.",
        "Exam Tip: In Cornu spiral straight-edge diffraction, intensity at the geometric shadow boundary is ALWAYS $I_0 / 4$, regardless of wavelength or distance."
    ]
)

add_unit(
    "bsc-phm: polarization",
    [
        "Lie Group Theory of Polarization (SU(2) and SO(3)): Isomorphism between 2-state complex Jones space $SU(2)$ and 3-state real rotation space $SO(3)$ on the Poincaré sphere; 2-to-1 homomorphism generated by Pauli spin matrices.",
        "Pauli Matrices as Polarization Generators: $\\\\sigma_0 = \\\\begin{pmatrix} 1 & 0 \\\\\\\\ 0 & 1 \\\\end{pmatrix}$, $\\\\sigma_1 = \\\\begin{pmatrix} 1 & 0 \\\\\\\\ 0 & -1 \\\\end{pmatrix}$, $\\\\sigma_2 = \\\\begin{pmatrix} 0 & 1 \\\\\\\\ 1 & 0 \\\\end{pmatrix}$, $\\\\sigma_3 = \\\\begin{pmatrix} 0 & -i \\\\\\\\ i & 0 \\\\end{pmatrix}$; Stokes vector parameters evaluate to expectations $S_k = \\\\text{Tr}(\\\\rho \\\\sigma_k)$.",
        "Mueller-Stokes Matrix Calculus: $4 \\\\times 4$ real matrix transformation $\\\\mathbf{S}_{out} = M \\\\mathbf{S}_{in}$ describing propagation of fully, partially, or unpolarized light through arbitrary optical media; Treats depolarization and diattenuation rigorously.",
        "Pancharatnam-Berry Geometric Phase: Phase acquired by polarized wave undergoing closed cyclical trajectory $C$ on the Poincaré sphere: $\\\\gamma(C) = -\\\\frac{1}{2} \\\\Omega(C)$ where $\\\\Omega(C)$ is the solid angle enclosed by path on sphere; Topological in origin.",
        "Electromagnetic Wave Propagation in Anisotropic Media: Dielectric permittivity tensor $\\\\boldsymbol{\\\\varepsilon} = \\\\text{diag}(\\\\varepsilon_x, \\\\varepsilon_y, \\\\varepsilon_z)$; Optical indicatrix ellipsoid $\\\\frac{x^2}{n_x^2} + \\\\frac{y^2}{n_y^2} + \\\\frac{z^2}{n_z^2} = 1$; Normal surface and ray velocity surface.",
        "Fresnel Equation of Wave Normals: Biquadratic equation determining two permitted phase velocities $v_1, v_2$ for given wave normal unit vector $\\\\vec{s}$: $\\\\frac{s_x^2}{v^2 - v_x^2} + \\\\frac{s_y^2}{v^2 - v_y^2} + \\\\frac{s_z^2}{v^2 - v_z^2} = 0$.",
        "Optical Conical Refraction in Biaxial Crystals: Hamilton\\'s theoretical prediction of internal and external conical refraction; When wave normal aligns with binormal optical axis of biaxial crystal, single ray refracts into hollow cone of rays.",
        "Kerr Electro-Optic Effect: Quadratic non-linear electro-optic phase modulation: $\\\\Delta n = \\\\lambda K E^2$; Induced birefringence proportional to square of applied electric field; Kerr cell shutter operating at picosecond speeds.",
        "Liquid Crystal Director Elasticity (Frank-Oseen Theory): Free energy density of nematic liquid crystals: $F = \\\\frac{1}{2} K_1 (\\\\nabla \\\\cdot \\\\vec{n})^2 + \\\\frac{1}{2} K_2 (\\\\vec{n} \\\\cdot \\\\nabla \\\\times \\\\vec{n})^2 + \\\\frac{1}{2} K_3 (\\\\vec{n} \\\\times \\\\nabla \\\\times \\\\vec{n})^2$ (Splay, Twist, Bend deformations).",
        "Freedericksz Transition in Liquid Crystals: Threshold voltage $V_{th} = \\\\pi \\\\sqrt{\\\\frac{K_1}{\\\\varepsilon_0 \\\\Delta \\\\varepsilon}}$; Reorientation of nematic director above $V_{th}$ serves as the mathematical physics basis for modern flat panel LCD displays."
    ],
    [
        "Pauli Matrices Identity: $\\\\sigma_i \\\\sigma_j = \\\\delta_{ij} I + i \\\\varepsilon_{ijk} \\\\sigma_k$.",
        "Stokes Vector Expectation: $S_k = \\\\text{Tr}(\\\\rho \\\\sigma_k)$.",
        "Mueller Matrix Dimension: $4 \\\\times 4$ real matrix operating on Stokes vectors.",
        "Geometric Phase Formula: $\\\\gamma = -\\\\frac{1}{2} \\\\Omega$ (half the enclosed solid angle).",
        "Fresnel Wave Normal Equation: $\\\\sum \\\\frac{s_i^2}{v^2 - v_i^2} = 0$.",
        "Optical Indicatrix: $\\\\frac{x^2}{n_x^2} + \\\\frac{y^2}{n_y^2} + \\\\frac{z^2}{n_z^2} = 1$.",
        "Kerr Effect Equation: $\\\\Delta n = \\\\lambda K E^2$ (quadratic electro-optic effect).",
        "Frank-Oseen Constants: $K_1$ (splay), $K_2$ (twist), $K_3$ (bend).",
        "Freedericksz Critical Voltage: $V_{th} = \\\\pi \\\\sqrt{K_1 / (\\\\varepsilon_0 \\\\Delta \\\\varepsilon)}$.",
        "Exam Tip: In Berry phase calculations, remember solid angle of entire sphere is $4\\\\pi$; a path traversing a hemisphere encloses $2\\\\pi$ solid angle, giving geometric phase shift $\\\\gamma = -\\\\pi$."
    ]
)

# =========================================================================
# 4. PHYSICS LAB II (B.Sc Physics Sem 2)
# =========================================================================

add_unit(
    "bsc-phlab: safety & instrumentation",
    [
        "Optical Laboratory Safety Protocols: Laser safety standards (ANSI Z136.1); Laser hazard classifications (Class 1 to Class 4); Eye protection optical density $OD = \\\\log_{10}(I_0/I)$ matched to laser wavelengths (e.g. He-Ne $632.8\\\\text{ nm}$); High-voltage safety on mercury vapor lamps.",
        "Precision Optical Spectrometer Architecture: Collimator (slit + achromatic objective), rotating circular prism table with leveling thumbscrews, telescope with crosswire eyepiece, circular angular vernier scales ($V_1, V_2$).",
        "Spectrometer Alignment Protocols (Schuster\\'s Method): Methodical optical leveling using mercury green line; Leveling collimator axis and telescope axis perpendicular to rotation axis; Focusing crosswires and objective for parallel light without parallax.",
        "Vernier Scale Least Count Derivation: Main scale divided into half-degrees ($30\\' = 1800\\'$); Vernier scale contains 30 divisions matching 29 main scale divisions; Least Count $LC = 1\\\\text{ MSD} - 1\\\\text{ VSD} = 30\\' - 29\\' = 1\\' = 60\\\\text{ arcseconds}$.",
        "Sodium Vapor & Mercury Discharge Lamps: Low-pressure sodium lamp emitting intense yellow doublet ($D_1 = 589.6\\\\text{ nm}, D_2 = 589.0\\\\text{ nm}$); Mercury vapor arc lamp providing discrete calibration wavelengths: Yellow ($579.0\\\\text{ nm}, 577.0\\\\text{ nm}$), Green ($546.1\\\\text{ nm}$), Blue ($435.8\\\\text{ nm}$), Violet ($404.7\\\\text{ nm}$).",
        "Traveling Microscope Instrumentation: Precision optical microscope mounted on dual-axis lead-screws; Horizontal and vertical vernier scales with least count $LC = 0.001\\\\text{ cm}$ ($10\\\\text{ }\\\\mu\\\\text{m}$); Parallax elimination in focal image planes.",
        "Spherometer Precision Radius of Curvature Measurement: Three outer legs forming equilateral triangle of side $l$; Central micrometer screw measuring sagitta $h$; Radius of curvature calculation: $R = \\\\frac{l^2}{6 h} + \\\\frac{h}{2}$.",
        "Optical Flatness & Monochromatic Fringes: Optical flats made of fused quartz calibrated to $\\\\lambda/20$ flatness; Visual inspection of air-wedge interference fringe linearity under monochromatic sodium illumination.",
        "Digital Luxmeter & Photodetector Instrumentation: Silicon PIN photodiode sensor measuring illuminance in Lux ($1\\\\text{ lx} = 1\\\\text{ lm/m}^2$); Calibrating inverse-square distance law and cosine response.",
        "Laboratory Record Keeping & Data Hygiene: Direct pen entry in bound notebook; Recording duplicate vernier readings ($V_1, V_2$ separated by $180^\\\\circ$) to eliminate eccentric axis errors; Calculating mean, standard deviation, and fractional errors."
    ],
    [
        "Laser Optical Density Formula: $OD = \\\\log_{10}(I_{incident} / I_{transmitted})$.",
        "Spectrometer Least Count: $LC = 1\\'$ ($1\\\\text{ arcminute} = 60\\\\text{ arcseconds}$).",
        "Dual Vernier Purpose: Reading $V_1$ and $V_2$ eliminates circular scale eccentricity error.",
        "Sodium Doublet Wavelengths: $589.0\\\\text{ nm}$ and $589.6\\\\text{ nm}$ (mean $589.3\\\\text{ nm}$).",
        "Traveling Microscope Precision: Least count is typically $0.001\\\\text{ cm}$ ($10\\\\text{ }\\\\mu\\\\text{m}$).",
        "Spherometer Formula: $R = \\\\frac{l^2}{6 h} + \\\\frac{h}{2}$ ($h$ is sagitta).",
        "Schuster\\'s Method Purpose: Focuses collimator and telescope for parallel rays without removing prism.",
        "Parallax Removal Check: Crosswire and image must not move relative to each other when eye shifts.",
        "Mercury Green Reference Line: $\\\\lambda = 546.1\\\\text{ nm}$ widely used as primary photometric standard.",
        "Exam Tip: In spectrometer viva, always state that two verniers $180^\\\\circ$ apart are provided specifically to eliminate eccentricity of the graduated circle."
    ]
)

add_unit(
    "bsc-phlab: standard preparations",
    [
        "Standard Solutions for Polarimetry: Preparing high-purity sucrose ($C_{12}H_{22}O_{11}$) stock solutions in distilled water ($10\\\\%, 15\\\\%, 20\\\\%\\\\text{ w/v}$); Analytical balance weighing to $\\\\pm 0.1\\\\text{ mg}$; Temperature equilibration at $20^\\\\circ\\\\text{C}$.",
        "Cleaning Optical Components: Dust-free lens cleaning using spectrophotometric-grade optical lens tissue and isopropyl alcohol (IPA); Avoiding scratches on delicate front-surface aluminized mirrors and plane diffraction gratings.",
        "Mercury Lamp Warm-up & Calibration: 15-minute thermal stabilization period to establish constant mercury vapor pressure and sharp emission spectral line profiles; Checking collimator slit width to balance optical flux against diffraction broadening.",
        "Prism Table Leveling Calibration: Adjusting three leveling screws ($T_1, T_2, T_3$) so that reflected image of slit from both polished prism faces appears at identical vertical crosswire heights in telescope.",
        "Diffraction Grating Normal Incidence Adjustment: Aligning plane transmission grating normal to collimated beam; Setting telescope to zero-order beam; Rotating grating until reflected beam from front face coincides with crosswires; Turning table by exactly $45^\\\\circ$ and locking.",
        "Plano-Convex Lens Cleaning for Newton\\'s Rings: Thorough cleaning of convex lens face and glass plate; Checking for dust specks under low-power magnification to guarantee perfect central circular contact spot.",
        "Optical Wedge Glass Slide Preparation: Two clean optical glass slides clamped at one end with thin spacer (tissue paper or wire of diameter $d \\\\approx 20\\\\text{ }\\\\mu\\\\text{m}$) at distance $L$ to produce straight parallel localized air fringes.",
        "Polarimeter Zero Calibration: Filling polarimeter tube with pure distilled water; Verifying that field of view exhibits uniform equal illumination tint across both halves of half-shade disc at $0.0^\\\\circ$ reading.",
        "Determination of Spectrometer Slit Width: Calibrating micrometric slit jaws; Selecting optimal slit width $w \\\\approx \\\\lambda f / D$ preventing overlapping spectral lines while transmitting sufficient luminous intensity.",
        "Environmental Temperature & Pressure Tracking: Recording ambient room temperature and barometric pressure during experimental trials; Temperature compensation for liquid refractive index $dn/dT \\\\approx -4 \\\\times 10^{-4}\\\\text{ K}^{-1}$."
    ],
    [
        "Sucrose Stock Concentration: $c = \\\\frac{\\\\text{mass in grams}}{\\\\text{volume in mL}} \\\\times 100\\\\%$ (w/v).",
        "Normal Incidence Grating Rule: Grating surface must be perpendicular to collimated optical axis.",
        "Grating Cleaning Warning: NEVER touch or wipe ruled grating surface; clean solely with dry air.",
        "Polarimeter Water Blank: Distilled water must exhibit zero optical rotation at $0.0^\\\\circ$.",
        "Slit Optimization: Narrow slit gives high resolution; wide slit gives high brightness.",
        "Newton\\'s Rings Zero Spot: Dust-free center produces dark spot at central contact point.",
        "Temperature Coeff of Refraction: Refractive index drops as temperature increases ($dn/dT < 0$).",
        "Prism Polished Faces: Only 2 faces are polished optical refractors; base face is ground/frosted.",
        "Canada Balsam Refractive Index: $\\\\mu = 1.55$ perfectly matches calcite ordinary ray critical angle.",
        "Exam Tip: In normal incidence adjustment of grating, explain why turning the table by $45^\\\\circ$ aligns the grating surface perpendicular to the incident beam."
    ]
)

add_unit(
    "bsc-phlab: experimental procedures",
    [
        "Experiment 1: Wavelength Determination via Newton\\'s Rings: Setting up sodium light and glass plate at $45^\\\\circ$; Focusing traveling microscope on reflected circular rings; Measuring diameters of dark rings $D_{n+m}$ and $D_n$; Calculating $\\\\lambda = \\\\frac{D_{n+m}^2 - D_n^2}{4 m R}$.",
        "Experiment 2: Refractive Index of Liquid via Newton\\'s Rings: Repeating diameter measurements with drop of water or transparent liquid in air gap; Calculating liquid refractive index $\\\\mu = \\\\frac{(D_{n+m}^2 - D_n^2)_{air}}{(D_{n+m}^2 - D_n^2)_{liquid}}$.",
        "Experiment 3: Angle of Minimum Deviation of Prism: Measuring angle of prism $A$ by reflection; Finding angle of minimum deviation $D_m$ for mercury lines; Calculating refractive index via prism formula $\\\\mu = \\\\frac{\\\\sin\\\\frac{A + D_m}{2}}{\\\\sin\\\\frac{A}{2}}$.",
        "Experiment 4: Dispersive Power of Prism Material: Measuring refractive indices for mercury blue ($F$), yellow ($D$), and red/violet ($C$) spectral lines; Calculating dispersive power $\\\\omega = \\\\frac{\\\\mu_F - \\\\mu_C}{\\\\mu_D - 1}$.",
        "Experiment 5: Diffraction Grating Wavelength Calibration: Normal incidence setup with mercury arc; Measuring diffraction angles $\\\\theta$ for spectral lines across order $m = 1$ and $m = 2$; Calculating wavelengths $\\\\lambda = \\\\frac{(a + b) \\\\sin\\\\theta}{m}$.",
        "Experiment 6: Grating Resolving Power & Sodium Doublet: Measuring minimum angular separation $\\\\Delta \\\\theta$ resolving sodium doublet ($589.0\\\\text{ nm}, 589.6\\\\text{ nm}$); Calculating experimental resolving power $\\\\mathcal{R} = \\\\lambda / \\\\Delta \\\\lambda \\\\approx 982$.",
        "Experiment 7: Thickness of Thin Wire via Air Wedge: Placing thin wire between glass plates; Counting fringe count $N$ across length $L$ under sodium illumination; Calculating wire thickness $t = \\\\frac{N \\\\lambda L}{2 x}$.",
        "Experiment 8: Specific Rotation of Sugar Solution: Measuring optical rotation $\\\\theta$ across varying sucrose concentrations ($5\\\\%, 10\\\\%, 15\\\\%, 20\\\\%$) in polarimeter; Plotting $\\\\theta$ vs concentration to determine specific rotation $[\\\\alpha]$.",
        "Experiment 9: Verification of Brewster\\'s Law: Reflecting unpolarized light from polished glass plate at varying angles of incidence $\\\\theta_i$; Detecting extinction angle through rotating analyzer; Verifying $\\\\mu = \\\\tan\\\\theta_p$.",
        "Experiment 10: Verification of Malus\\'s Law: Transmitting polarized laser beam through rotating analyzer; Measuring photodetector optical power $I(\\\\theta)$ at $10^\\\\circ$ angular increments; Confirming linear regression of $I$ vs $\\\\cos^2\\\\theta$."
    ],
    [
        "Prism Formula: $\\\\mu = \\\\frac{\\\\sin[(A + D_m)/2]}{\\\\sin(A/2)}$.",
        "Newton\\'s Rings Wavelength: $\\\\lambda = \\\\frac{D_{n+m}^2 - D_n^2}{4 m R}$.",
        "Dispersive Power Equation: $\\\\omega = \\\\frac{\\\\mu_V - \\\\mu_R}{\\\\mu_Y - 1}$.",
        "Grating Equation: $(a + b) \\\\sin\\\\theta = m \\\\lambda$.",
        "Air Wedge Thickness: $t = \\\\frac{\\\\lambda L}{2 \\\\beta}$ (where $\\\\beta$ is fringe width).",
        "Specific Rotation Slope: $[\\\\alpha] = \\\\frac{\\\\text{Slope}}{l}$ from $\\\\theta$ vs $c$ plot.",
        "Brewster Equation: $\\\\tan\\\\theta_p = \\\\mu$.",
        "Malus Law Verification: Plot of $I$ against $\\\\cos^2\\\\theta$ must be a straight line passing through origin.",
        "Sodium Doublet Resolving Power: $\\\\mathcal{R} = \\\\frac{589.3}{0.6} \\\\approx 982$.",
        "Exam Tip: In Newton\\'s rings measurements, always approach ring boundaries from ONE direction with the traveling microscope screw to eliminate backlash error."
    ]
)

add_unit(
    "bsc-phlab: data verification",
    [
        "Backlash Error Elimination Protocol: Lead-screw mechanical backlash error; Rule: always advance traveling microscope screw in a single continuous forward direction when traversing ring edges; Never reverse screw mid-measurement.",
        "Difference of Squares Linear Regression: In Newton\\'s rings, plotting $D_n^2$ against ring number $n$; Linear equation $D_n^2 = 4 \\\\lambda R n + c$; Slope $S = 4 \\\\lambda R$; Slope calculation averages out individual measurement errors.",
        "Spherometer Radius Calculation & Propagation: Error propagation formula for lens radius $R = \\\\frac{l^2}{6 h} + \\\\frac{h}{2}$: $\\\\frac{\\\\Delta R}{R} = 2 \\\\frac{\\\\Delta l}{l} + \\\\frac{\\\\Delta h}{h}$; Ensuring lens curvature is determined to $\\\\pm 0.5\\\\%$ precision.",
        "Vernier Scale Eccentricity Correction: Calculating angle of deviation as $\\\\theta = \\\\frac{|V_{1,L} - V_{1,R}| + |V_{2,L} - V_{2,R}|}{4}$; Eliminates mechanical off-center mounting errors of spectrometer circular plate.",
        "Grating Line Density Verification: Verifying manufacturer grating specification (e.g. 15000 lines/inch $= 590.55\\\\text{ lines/mm}$); Calculating grating element $(a + b) = 1.693 \\\\times 10^{-6}\\\\text{ m}$.",
        "Air Wedge Uniform Linearity Audit: Measuring consecutive fringe widths $\\\\beta_1, \\\\beta_2, \\\\dots, \\\\beta_{10}$; Standard deviation $< 2\\\\%$ confirms perfect optical slide flatness and uniform wedge slope.",
        "Polarimeter Sugar Inversion Control: Verifying that fresh sucrose exhibits constant dextrorotatory angle; Ensuring non-acidic water to prevent spontaneous inversion into levorotatory equimolar glucose-fructose mixture.",
        "Photodetector Dark Current Subtraction: In Malus\\'s law experiment, recording ambient background voltage $V_{dark}$ with laser blocked; Subtracting $V_{dark}$ from all measurements: $I_{corrected} = V_{measured} - V_{dark}$.",
        "Spectrometer Minimum Deviation Verification: Observing that moving prism table in either direction causes spectral line image to reverse its motion at $D_m$; Confirming true stationary turning point.",
        "Fractional Experimental Error Calculation: Percentage error calculation: $\\\\text{Error} = \\\\frac{|\\\\lambda_{experimental} - \\\\lambda_{literature}|}{\\\\lambda_{literature}} \\\\times 100\\\\%$; Target experimental accuracy $< 1.0\\\\%$."
    ],
    [
        "Backlash Avoidance Rule: Drive micrometer strictly in one direction.",
        "Newton Ring Slope: Slope of $D_n^2$ vs $n$ equals $4 \\\\lambda R$.",
        "Eccentricity Cancellation: Average readings across both opposite verniers $V_1, V_2$.",
        "Grating Element Conversion: 15000 lines/inch $\\\\implies (a+b) = 2.54 / 15000 = 1.693\\\\text{ }\\\\mu\\\\text{m}$.",
        "Air Wedge Linearity: Constant $\\\\beta$ indicates uniform flat glass plates.",
        "Minimum Deviation Stationary Point: $d\\\\theta/dt = 0$ at exact turning point.",
        "Dark Current Correction: $V_{true} = V_{observed} - V_{dark}$.",
        "Malus Law Linearity Criterion: $R^2 > 0.99$ for $I$ vs $\\\\cos^2\\\\theta$.",
        "Polarimeter Zero Point: Subtracted from observed rotation angle.",
        "Exam Tip: In prism experiments, always prove that $r_1 = r_2 = A/2$ and $i = e = (A + D_m)/2$ at minimum deviation before substituting into formula."
    ]
)

add_unit(
    "bsc-phlab: record & viva",
    [
        "Physics Laboratory Record Standards: Formal write-up: Aim, Apparatus Schematic, Optical Ray Diagram, Mathematical Formulae & Symbols, Tabulated Observations with Units, Sample Calculations, Error Analysis, Result with Standard Units.",
        "Viva Voce Core Question: Why Central Ring is Dark in Newton\\'s Rings: At center, air film thickness $t \\\\to 0$; Path difference is solely due to $\\\\lambda/2$ phase shift on reflection from lower glass plate, causing destructive interference ($I = 0$).",
        "Viva Voce Core Question: What Happens if White Light is Used in Newton\\'s Rings: Central ring remains dark; Surrounding rings become colored because different wavelengths satisfy constructive condition at different radii ($r \\\\propto \\\\sqrt{\\\\lambda}$).",
        "Viva Voce Core Question: Resolving Power vs Dispersive Power of Grating: Dispersive power $\\\\frac{d\\\\theta}{d\\\\lambda} = \\\\frac{m}{(a+b)\\\\cos\\\\theta}$ measures angular separation of wavelengths; Resolving power $\\\\frac{\\\\lambda}{\\\\Delta \\\\lambda} = m N$ measures ability to distinguish two closely adjacent spectral lines.",
        "Viva Voce Core Question: Why Grating Spectra are Pure Compared to Prism: Grating dispersion is linear ($d\\\\theta/d\\\\lambda \\\\propto m$), whereas prism dispersion is non-linear ($dn/d\\\\lambda \\\\propto 1/\\\\lambda^3$), spreading violet far more than red.",
        "Viva Voce Core Question: Brewster\\'s Law Physical Mechanism: At Brewster angle $\\\\theta_p$, refracted ray dipole oscillations align parallel to the reflected ray; Since oscillating dipoles emit zero radiation along their axis, reflected beam has zero parallel polarization.",
        "Viva Voce Core Question: Function of Laurent Half-Shade Device: Divides circular optical field into two halves with $\\\\pi/2$ phase difference; Enhances human eye sensitivity by matching equal darkness rather than estimating maximum brightness.",
        "Viva Voce Core Question: Condition of Missing Orders in Grating: Occurs when diffraction minimum coincides with interference maximum: $\\\\frac{a+b}{a} = \\\\frac{n}{m}$ where $n$ is interference order and $m$ is diffraction order.",
        "Viva Voce Core Question: Schuster\\'s Method Advantages: Allows focusing spectrometer collimator and telescope for infinity using only the prism and spectral lamp, without requiring distant outdoor objects.",
        "Laboratory Practical Marking Scheme: Assessment components: Experimental arrangement & optical leveling ($20\\\\%$), Procedural skill & measurement accuracy ($30\\\\%$), Graph plotting & slope calculation ($15\\\\%$), Lab manual notebook ($15\\\\%$), Oral viva voce ($20\\\\%$)."
    ],
    [
        "Dark Center Reason: $\\\\pi$ phase inversion on reflection from denser glass plate.",
        "White Light Newton Rings: Few colored concentric rings around a dark center.",
        "Dispersive vs Resolving Power: Dispersion separates wavelengths; resolving power distinguishes adjacent lines.",
        "Grating Linear Dispersion: Equal wavelength differences produce equal angular separations.",
        "Brewster Dipole Zero Radiation: Dipoles do not radiate along their oscillation axis.",
        "Half-Shade Advantage: Human eye detects brightness balance far more accurately than absolute intensity.",
        "Missing Orders Equation: $\\\\frac{a+b}{a} = \\\\frac{n}{m}$.",
        "Schuster Method Utility: Eliminates need for external distant target to focus telescope.",
        "Prism Minimum Deviation Symmetry: Angle of incidence equals angle of emergence ($i = e$).",
        "Exam Tip: In oral viva, never say that the central Newton ring is dark because light is blocked; explain that destructive interference occurs due to the $\\\\lambda/2$ phase shift on reflection."
    ]
)

# =========================================================================
# 5. PHYSICAL & GENERAL CHEMISTRY – II (B.Sc Life Sciences Sem 2)
# =========================================================================

add_unit(
    "bsc-chls: thermodynamics",
    [
        "Bio-Thermodynamics & Living Systems: Living cells as thermodynamic open systems exchanging matter and energy with environment; Maintenance of non-equilibrium steady states through continuous dissipation of free energy.",
        "First Law of Thermodynamics in Biology: Conservation of energy $\\\\Delta U = q - w$; Biological metabolic energy transformations converting nutrient enthalpy into mechanical work and heat.",
        "Gibbs Free Energy & Spontaneity in Biochemical Systems: Free energy state function $G = H - T S$; Reaction spontaneity criterion at constant temperature and pressure: $\\\\Delta G < 0$ (exergonic); Non-spontaneous reactions have $\\\\Delta G > 0$ (endergonic).",
        "Standard Biochemical Free Energy ($\\\\Delta G^{\\\\circ\\\\prime}$): Standard biochemical state defined at physiological $pH = 7.0$, $[H_2O] = 55.5\\\\text{ M}$, $[Mg^{2+}] = 1\\\\text{ mM}$, $T = 298.15\\\\text{ K}$, $P = 1\\\\text{ atm}$; Relationship $\\\\Delta G = \\\\Delta G^{\\\\circ\\\\prime} + R T \\\\ln Q$.",
        "Thermodynamic Coupling & ATP Hydrolysis: Endergonic reactions ($+ \\\\Delta G$) driven by coupling to exergonic hydrolysis of Adenosine Triphosphate (ATP): $\\\\text{ATP} + \\\\text{H}_2\\\\text{O} \\\\to \\\\text{ADP} + \\\\text{P}_i$ (standard $\\\\Delta G^{\\\\circ\\\\prime} \\\\approx -30.5\\\\text{ kJ/mol}$).",
        "Chemical Affinity & Equilibrium Constant: At chemical equilibrium $\\\\Delta G = 0 \\\\implies \\\\Delta G^{\\\\circ\\\\prime} = -R T \\\\ln K_{eq}'$; Large equilibrium constant indicates exergonic reaction running far toward product completion.",
        "Enthalpy vs Entropy Driven Biochemical Processes: Protein folding thermodynamics: Hydrophobic effect drives positive conformational entropy $\\\\Delta S > 0$ by releasing ordered clathrate water cages; Enthalpic hydrogen bonding $\\\\Delta H < 0$.",
        "van \\'t Hoff Isochore in Biochemistry: Temperature dependence of equilibrium constants: $\\\\frac{d \\\\ln K_{eq}}{dT} = \\\\frac{\\\\Delta H^\\\\circ}{R T^2}$; Integrated form $\\\\ln \\\\frac{K_2}{K_1} = -\\\\frac{\\\\Delta H^\\\\circ}{R}\\\\left(\\\\frac{1}{T_2} - \\\\frac{1}{T_1}\\\\right)$; Distinguishes endothermic from exothermic enzymatic transitions.",
        "Second Law & Cellular Entropy: Organisms maintain low internal entropy (high structural organization) by exporting high entropy (heat, degraded metabolites) into surroundings; Total universe entropy strictly increases $\\\\Delta S_{total} > 0$.",
        "High-Energy Phosphate Compounds: Phosphate transfer potential ranking: Phosphoenolpyruvate (PEP, $\\\\Delta G^{\\\\circ\\\\prime} = -61.9\\\\text{ kJ/mol}$) > 1,3-Bisphosphoglycerate > Phosphocreatine > ATP > Glucose-6-Phosphate; Thermodynamic basis for substrate-level phosphorylation."
    ],
    [
        "Gibbs Criterion: $\\\\Delta G < 0$ indicates spontaneous (exergonic) reaction.",
        "Biochemical Free Energy Relation: $\\\\Delta G = \\\\Delta G^{\\\\circ\\\\prime} + R T \\\\ln Q$.",
        "Equilibrium Link: $\\\\Delta G^{\\\\circ\\\\prime} = -R T \\\\ln K_{eq}'$.",
        "ATP Hydrolysis Energy: $\\\\Delta G^{\\\\circ\\\\prime} = -30.5\\\\text{ kJ/mol}$.",
        "Coupled Reaction Principle: Additive free energies: $\\\\Delta G_{total} = \\\\Delta G_1 + \\\\Delta G_2 < 0$.",
        "van \\'t Hoff Equation: $\\\\ln(K_2/K_1) = -\\\\frac{\\\\Delta H^\\\\circ}{R}\\\\left(\\\\frac{1}{T_2} - \\\\frac{1}{T_1}\\\\right)$.",
        "Biochemical Standard State: $pH = 7.0$ ($[H^+] = 10^{-7}\\\\text{ M}$).",
        "Hydrophobic Effect Thermodynamics: Driven by increase in water entropy ($\\\\Delta S > 0$).",
        "Open System Character: Living cells exchange both matter and energy continuously.",
        "Exam Tip: In bio-thermodynamics, distinguish between standard chemical $\\\\Delta G^\\\\circ$ ($pH = 0$) and standard biological $\\\\Delta G^{\\\\circ\\\\prime}$ ($pH = 7.0$)."
    ]
)
'''

content += part3

with open("scripts/build_bsc_sem2_physics_chem.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subjects 3, 4, and 5 (part 1).")
