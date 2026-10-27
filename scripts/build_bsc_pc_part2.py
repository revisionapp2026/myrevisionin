import json, os

with open('scripts/sem3_bsc_physics_chem_data.json', 'r', encoding='utf-8') as f:
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
# 4. PHYSICS III / STATISTICS III (B.Sc)
# =========================================================================
add("Physics III / Statistics III", 1, "Thermal Physics", [
    "Macroscopic vs Microscopic Thermal State Description: Bridging macroscopic bulk thermodynamic observables ($P, V, T$) to microscopic statistical averages; Thermodynamic equilibrium conditions: Mechanical, Chemical, and Thermal equilibrium.",
    "Thermal Expansion & Elastic Moduli of Matter: Coefficient of linear expansion $\\alpha = \\frac{1}{L} \\frac{dL}{dT}$; Coefficient of volume expansion $\\beta = \\frac{1}{V} \\frac{dV}{dT} \\approx 3\\alpha$; Isothermal compressibility $\\kappa_T = -\\frac{1}{V} \\left( \\frac{\\partial V}{\\partial P} \\right)_T$; Adiabatic compressibility $\\kappa_S$; Ratio $\\kappa_T / \\kappa_S = \\gamma$.",
    "Heat Transfer Mechanisms: Conduction, Convection & Radiation: Fourier's law of heat conduction: $\\frac{dQ}{dt} = -K A \\frac{dT}{dx}$; Thermal diffusivity $\\alpha_d = K / (\\rho C_p)$; Newton's law of cooling for convective boundary layers: $\\frac{dT}{dt} = -k (T - T_{\\text{env}})$.",
    "Thermal Radiation & Cavity Equilibrium: Radiant energy density in isothermal enclosure; Emissive power $E_\\lambda$ and absorptive power $A_\\lambda$; Kirchhoff's law of thermal radiation: $\\frac{E_\\lambda}{A_\\lambda} = E_{b\\lambda}(T)$ (the ratio is independent of body nature and equals blackbody emittance).",
    "Blackbody Radiation Laws Overview: Prevost's theory of heat exchanges; Stefan-Boltzmann law $E = \\sigma T^4$; Wien's displacement law $\\lambda_{\\max} T = b$; Rayleigh-Jeans classical approximation ($u(\\lambda) = 8\\pi k_B T / \\lambda^4$) and its catastrophic failure in the ultraviolet spectrum.",
    "Thermal Diffusivity & Steady-State Conduction in Solids: 1D steady-state heat equation: $\\frac{\\partial^2 T}{\\partial x^2} = 0$; Temperature distribution through composite multi-layered walls; Radial heat conduction through thick hollow cylinders: $Q = \\frac{2\\pi K L (T_1 - T_2)}{\\ln(r_2 / r_1)}$.",
    "Thermometry & Temperature Standards: Principle of liquid-in-glass, constant volume gas thermometers ($T = 273.16 \\lim_{P_3 \\to 0} \\frac{P}{P_3}$), platinum resistance thermometers (Callendar-Griffiths bridge), and optical pyrometers based on Planck's radiation law.",
    "Specific Heat Capacities of Solids & Gases: Molar heat capacity at constant volume $C_v$ and constant pressure $C_p$; Temperature dependence of $C_v$ in non-metallic crystals; Classical Dulong-Petit value $3R \\approx 24.9\\text{ J}/(\\text{mol}\\cdot\\text{K})$ failing below room temperature.",
    "Thermodynamic Work in Diverse Physical Systems: General generalized work differential: $dW = \\sum Y_i dX_i$; Hydrostatic system ($dW = P dV$); Stretched elastic wire ($dW = -\\mathcal{T} dL$); Surface film bubble ($dW = -\\gamma dA$); Paramagnetic substance in magnetic field ($dW = -\\mu_0 H dM$).",
    "University Examination Strategy: State and prove Kirchhoff's law of thermal radiation using an isothermal cavity, derive the expression for radial heat flow through a cylindrical pipe, and calculate the ratio of isothermal to adiabatic compressibility."
], [
    "Kirchhoff's Radiation Law: $\\frac{E_\\lambda}{A_\\lambda} = E_{b\\lambda}$; a good absorber of radiation is necessarily an equally good emitter at thermal equilibrium.",
    "Fourier Conduction Formula: $\\frac{dQ}{dt} = -K A \\frac{dT}{dx}$, where heat flow is proportional to temperature gradient and cross-sectional area.",
    "Newton Cooling Approximation: $\\frac{dT}{dt} = -k(T - T_0)$; holds accurately when temperature difference $(T - T_0)$ is small.",
    "Radial Cylinder Heat Flow: $Q = \\frac{2\\pi K L (T_1 - T_2)}{\\ln(r_2 / r_1)}$; heat flux density drops inversely with radius $r$.",
    "Compressibility Ratio: $\\frac{\\kappa_T}{\\kappa_S} = \\frac{C_p}{C_v} = \\gamma$, connecting bulk mechanical compressibilities directly to heat capacities.",
    "Volume Expansivity Relation: $\\beta \\approx 3\\alpha$ for isotropic solids, scaling thermal volumetric dilation with linear strain.",
    "Triple Point of Water Standard: Fixed fundamental thermometric reference standard at precisely $273.16\\text{ K}$ and $611.65\\text{ Pa}$.",
    "Magnetic Work Expression: $dW = -\\mu_0 H dM$, representing mechanical work performed during magnetization alignment.",
    "Rayleigh-Jeans Divergence: Erroneously predicts infinite radiant energy at short wavelengths (Ultraviolet Catastrophe) due to classical equipartition.",
    "Exam Gold Tip: Always state that Prevost's theory asserts heat exchange is continuous and bidirectional between a body and its surroundings at all temperatures."
])

add("Physics III / Statistics III", 2, "Thermodynamics", [
    "First Law in Cyclic & Non-Cyclic Transformations: Cyclic process: $\\oint dQ = \\oint dW \\implies \\Delta U_{\\text{cycle}} = 0$; Non-cyclic expansion: $\\Delta U = Q - W$; Inexactness of $dQ$ and $dW$ vs exact differential property of state variables ($U, H, S, G$).",
    "Adiabatic Process Relations & Work Integrals: For ideal gas undergoing reversible adiabatic expansion: $P V^\\gamma = C_1, T V^{\\gamma-1} = C_2, T^\\gamma P^{1-\\gamma} = C_3$; Work performed: $W = \\int_{V_1}^{V_2} P dV = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{n R (T_1 - T_2)}{\\gamma - 1}$.",
    "Second Law & Irreversibility Indicators: Clausius statement and Kelvin-Planck formulation; Natural processes are inherently irreversible (heat dissipation, viscous friction, uncontrolled free expansion); Mathematical criterion for irreversibility: $dS > \\frac{dQ}{T}$.",
    "Entropy as an Exact Differential: Line integral $\\int_A^B \\frac{dQ_{\\text{rev}}}{T}$ is completely independent of the integration path; State function entropy $S$; Entropy change of an ideal gas: $\\Delta S = n C_v \\ln\\left(\\frac{T_2}{T_1}\\right) + n R \\ln\\left(\\frac{V_2}{V_1}\\right)$.",
    "Free Expansion of Gases (Joule Expansion): Unrestrained adiabatic expansion into vacuum ($W = 0, Q = 0 \\implies \\Delta U = 0$); For ideal gas: $\\Delta T = 0$; For real Van der Waals gas: Internal work performed against attractive intermolecular forces causes temperature drop: $\\Delta T = -\\frac{a}{C_v} \\left(\\frac{1}{V_1} - \\frac{1}{V_2}\\right)$.",
    "Thermodynamic Potentials & Equilibrium Conditions: Internal energy $U(S, V)$ (minimized at constant $S, V$); Enthalpy $H(S, P)$ (minimized at constant $S, P$); Helmholtz function $F(T, V)$ (minimized at constant $T, V$); Gibbs function $G(T, P)$ (minimized at constant $T, P$).",
    "Maxwell's Relations via Cross-Partial Derivatives: Deriving Maxwell's relations from Euler reciprocity relation on second partials: $\\frac{\\partial^2 U}{\\partial V \\partial S} = \\frac{\\partial^2 U}{\\partial S \\partial V} \\implies \\left(\\frac{\\partial T}{\\partial V}\\right)_S = -\\left(\\frac{\\partial P}{\\partial S}\\right)_V$.",
    "Applications of Maxwell's Relations to Real Gases: Evaluating energy equation $\\left(\\frac{\\partial U}{\\partial V}\\right)_T = T \\left(\\frac{\\partial P}{\\partial T}\\right)_V - P$; For Van der Waals gas: $\\left(\\frac{\\partial U}{\\partial V}\\right)_T = \\frac{a}{V^2}$; Calculating latent heat variations with pressure.",
    "Clausius-Clapeyron Equation for Phase Equilibrium: Coexistence of liquid and vapor phases in thermodynamic equilibrium; Derivation: $\\frac{dP}{dT} = \\frac{L}{T \\Delta V} = \\frac{L}{T (V_g - V_l)}$; Assuming ideal vapor ($V_g \\gg V_l$): Integrated form $\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{L}{R} \\left( \\frac{1}{T_2} - \\frac{1}{T_1} \\right)$.",
    "University Examination Strategy: Prove that the internal energy of a Van der Waals gas depends on volume, derive the integrated Clausius-Clapeyron equation, and calculate the work done during adiabatic expansion."
], [
    "First Law State Invariance: Cyclic integral $\\oint dU = 0$; internal energy returns to identical value after any closed thermodynamic loop.",
    "Free Expansion Irreversibility: Free expansion into vacuum does zero work ($W=0$), absorbs no heat ($Q=0$), but generates entropy $\\Delta S = n R \\ln(V_2/V_1) > 0$.",
    "Van der Waals Cooling in Free Expansion: $\\Delta T = -\\frac{a}{C_v} \\left(\\frac{1}{V_1} - \\frac{1}{V_2}\\right)$; gas cools as molecules do work against attractive forces.",
    "Maxwell Reciprocity Source: Derived directly from the equality of mixed second-order partial derivatives of thermodynamic potentials.",
    "Integrated Clapeyron Equation: $\\ln(P_2 / P_1) = -\\frac{L}{R} (1/T_2 - 1/T_1)$, predicting exponential increase of vapor pressure with temperature.",
    "Adiabatic Temperature Curve: $T V^{\\gamma-1} = \\text{const}$; temperature drops during reversible adiabatic volume expansion.",
    "Helmholtz Equilibrium Condition: For a closed system held at constant temperature and volume, equilibrium corresponds to minimum Helmholtz free energy $F$.",
    "Gibbs Equilibrium Criterion: Under constant temperature and pressure, spontaneous processes proceed toward the global minimum of Gibbs free energy $G$.",
    "Latent Heat Pressure Dependence: $\\frac{dL}{dT} = C_{p2} - C_{p1} + \\frac{L}{T} - L \\left(\\frac{\\partial \\ln \\Delta V}{\\partial T}\\right)_P$ (Kirchhoff's equation).",
    "Exam Scoring Tip: In questions on thermodynamic potentials, state both the mathematical definition and the operational physical meaning of each potential."
])

add("Physics III / Statistics III", 3, "Kinetic Theory", [
    "Statistical Foundations of Kinetic Theory: Gas viewed as a large statistical ensemble ($N \\sim 10^{23}$ particles); Phase space volume elements; Distribution functions in velocity and momentum space; Ergodic hypothesis.",
    "Maxwell's Velocity Distribution in Vector Form: Probability density: $f(\\mathbf{v}) d^3\\mathbf{v} = \\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2} \\exp\\left( -\\frac{m(v_x^2 + v_y^2 + v_z^2)}{2 k_B T} \\right) dv_x dv_y dv_z$; Deriving spherical shell speed distribution via Jacobian transformation $d^3\\mathbf{v} = 4\\pi v^2 dv$.",
    "Experimental Verification of Maxwell's Distribution: Stern's rotating cylinder experiment; Zartman and Ko beam chopper method; Estermann, Simpson, and Stern molecular beam gravitational deflection experiment; Direct experimental confirmation of $f(v)$.",
    "Mean Free Path Rigorous Derivation: Collision frequency: $z = \\sqrt{2} \\pi n d^2 \\bar{c}$; Mean free time: $\\tau = 1/z$; Mean free path: $\\lambda = \\bar{c} \\tau = \\frac{1}{\\sqrt{2} \\pi n d^2}$; Survival probability: Fraction of molecules traveling distance $x$ without collision $N(x) = N_0 e^{-x / \\lambda}$.",
    "Transport Phenomena Unified Theory: Flux of physical quantity $Q$: $J_Q = -\\frac{1}{3} n \\bar{c} \\lambda \\frac{dQ}{dz}$; Viscosity ($Q = m v_x \\implies \\eta = \\frac{1}{3} \\rho \\bar{c} \\lambda$); Thermal conductivity ($Q = E \\implies K = \\frac{1}{3} \\rho \\bar{c} \\lambda C_v$); Mass diffusion ($Q = m \\implies D = \\frac{1}{3} \\bar{c} \\lambda$).",
    "Real Gas Equations: Berthelot and Dieterici Models: Berthelot equation: $\\left(P + \\frac{a'}{T V^2}\\right)(V - b') = R T$; Dieterici equation of state: $P (V - b) e^{a / R T V} = R T$; Reduced equation of state and the Law of Corresponding States.",
    "Law of Corresponding States: Dimensionless reduced variables: $P_r = P / P_c, V_r = V / V_c, T_r = T / T_c$; Van der Waals equation in reduced coordinates: $\\left(P_r + \\frac{3}{V_r^2}\\right)(3 V_r - 1) = 8 T_r$; Independence of substance-specific constants $a$ and $b$.",
    "Brownian Motion & Perrin's Verification: Random zigzag motion of colloidal particles suspended in fluid; Langevin's equation: $m \\frac{dv}{dt} = -\\gamma v + F_{\\text{random}}(t)$; Einstein's diffusion relation: Mean square displacement $\\overline{x^2} = 2 D t = \\frac{2 k_B T}{\\gamma} t = \\frac{R T}{3\\pi \\eta a N_A} t$; Experimental determination of Avogadro's number $N_A$.",
    "Thermal Noise & Fluctuation-Dissipation Theorem: Spontaneous thermal fluctuations in macroscopic observables; Nyquist formula derived from equipartition theorem; General fluctuation-dissipation theorem: Dissipative response of a system to external perturbation is proportional to its spontaneous equilibrium fluctuations.",
    "University Examination Strategy: Derive the survival equation $N(x) = N_0 e^{-x/\\lambda}$ for molecular collisions, derive the reduced Van der Waals equation of state, and explain Einstein's theory of Brownian motion with the mean square displacement formula."
], [
    "Spherical Shell Volume Element: $d^3\\mathbf{v} = 4\\pi v^2 dv$, transforming 3D Cartesian velocity distribution into scalar speed distribution.",
    "Collision Survival Law: $N(x) = N_0 e^{-x/\\lambda}$; the probability of a molecule traversing distance $\\lambda$ without collision is $e^{-1} \\approx 36.8\\%$.",
    "Unified Transport Equation: $J_Q = -\\frac{1}{3} n \\bar{c} \\lambda \\frac{dQ}{dz}$, unifying molecular viscosity, heat conduction, and mass diffusion.",
    "Law of Corresponding States: Real gases behave identically when scaled by their critical parameters: $(P_r + 3/V_r^2)(3V_r - 1) = 8T_r$.",
    "Einstein Brownian Relation: $\\overline{x^2} = \\frac{R T}{3\\pi \\eta a N_A} t$; linking microscopic particle diffusion directly to Avogadro's number $N_A$.",
    "Perrin's Historic Experiment: Jean Perrin tracked colloidal gamboge particles under microscope, validating kinetic theory and winning the 1926 Nobel Prize.",
    "Langevin Friction Drag: Stokes' viscous drag force $\\gamma = 6\\pi \\eta a$ balances random thermal collisions in colloidal suspensions.",
    "Dieterici Equation Advantage: $P(V - b)e^{a/RTV} = RT$; predicts critical compressibility factor $Z_c = 2/e^2 \\approx 0.27$, matching real gas measurements better.",
    "Fluctuation-Dissipation Principle: Spontaneous thermal fluctuations and frictional dissipation share a common microscopic origin in thermal baths.",
    "Exam Gold Tip: Always remember that the mean free path $\\lambda$ depends strictly on number density $n$ and cross-sectional area $\\pi d^2$, independent of velocity."
])

add("Physics III / Statistics III", 4, "Statistical Distributions", [
    "Statistical Foundations of Many-Body Systems: Microscopic state specifications; Phase space volume and quantum state density; Macrostate probability and entropy: $S = k_B \\ln \\Omega$; Thermodynamic equilibrium as the state of maximum statistical weight.",
    "Maxwell-Boltzmann Distribution Formulation: Classical distinguishable particles; Volume of phase space: $d\\Gamma = \\prod dq_i dp_i$; Distribution: $f_{\\text{MB}}(E) = A e^{-E / k_B T}$; Normalization constant $A = N / Z$, where $Z$ is classical partition function; Average kinetic energy per particle $\\frac{3}{2} k_B T$.",
    "Bose-Einstein Distribution & Symmetry Requirements: Indistinguishable particles with integer spin ($s = 0, 1, 2$); Symmetric multi-particle wavefunctions $\\psi(1, 2) = +\\psi(2, 1)$; Mean occupation number: $\\langle n_i \\rangle = \\frac{1}{e^{(E_i - \\mu)/k_B T} - 1}$; Condensation phenomena.",
    "Fermi-Dirac Distribution & Antisymmetry Requirements: Indistinguishable particles with half-integer spin ($s = 1/2, 3/2$); Antisymmetric wavefunctions $\\psi(1, 2) = -\\psi(2, 1)$; Pauli exclusion principle; Mean occupation number: $\\langle n_i \\rangle = \\frac{1}{e^{(E_i - \\mu)/k_B T} + 1}$; Sharp step function at $T = 0\\text{ K}$.",
    "Comparison of M-B, B-E, and F-D Distributions: Unified distribution formula: $\\langle n_i \\rangle = \\frac{1}{e^{(E_i - \\mu)/k_B T} + a}$, where $a = 0$ (M-B), $a = -1$ (B-E), and $a = +1$ (F-D); Graphical comparison of occupation probabilities as a function of $(E - \\mu)/k_B T$.",
    "Photon Gas & Blackbody Radiation Spectrum: Photons as spin-1 relativistic bosons with zero rest mass and chemical potential $\\mu = 0$; Dispersion relation $E = h \\nu = p c$; Density of states $g(\\nu) d\\nu = \\frac{8\\pi V \\nu^2}{c^3} d\\nu$; Planck's radiation law derivation: $u(\\nu) d\\nu = g(\\nu) \\langle n(\\nu) \\rangle h\\nu d\\nu$.",
    "Phonon Gas & Lattice Vibrations in Solids: Quantized acoustic lattice vibrations modeled as non-conserved bosons (phonons, $\\mu = 0$); Debye approximation: Linear dispersion $\\omega = v_s k$ with cutoff frequency $\\omega_D$; Debye temperature $\\theta_D$; Derivation of Debye $T^3$ low-temperature specific heat.",
    "Free Electron Gas in Metals: Conduction electrons modeled as non-interacting Fermi gas; Fermi sphere in momentum space; Fermi momentum $p_F = \\hbar (3\\pi^2 n)^{1/3}$; Fermi temperature $T_F = E_F / k_B$ (typically $10^4$ to $10^5\\text{ K}$); Small fraction ($T/T_F$) of electrons contributing to thermal and electrical transport.",
    "Relativistic Fermi Gas & Chandrasekhar Limit: Extreme relativistic electron degeneracy in dense stellar cores ($E \\approx p c$); Degeneracy pressure scaling: $P \\propto n^{4/3}$; Gravitational collapse occurs when core mass exceeds Chandrasekhar mass limit: $M_{\\text{Ch}} \\approx 1.44 M_\\odot$; Formation of neutron stars.",
    "University Examination Strategy: Derive Planck's blackbody radiation formula using Bose-Einstein statistics, calculate the Fermi energy and Fermi velocity for metallic silver, and derive the Chandrasekhar limit scaling using relativistic degeneracy pressure."
], [
    "Unified Distribution Parameter: $\\langle n_i \\rangle = \\frac{1}{e^{\\beta(E_i - \\mu)} + a}$; $a = +1$ (Fermi-Dirac), $a = -1$ (Bose-Einstein), $a = 0$ (Maxwell-Boltzmann).",
    "Bose-Einstein Chemical Potential: Must satisfy $\\mu < E_0$; if $\\mu$ approached the lowest state energy, the ground state occupation would diverge to infinity.",
    "Photon Non-Conservation: Chemical potential of photons is identically zero ($\\mu = 0$) because photon absorption and emission change particle count freely.",
    "Fermi Sphere Geometry: In momentum space, Fermions at $T = 0\\text{ K}$ fill a solid sphere of radius $p_F = (3\\pi^2 \\hbar^3 n)^{1/3}$.",
    "Fermi Temperature Magnitude: $T_F = E_F / k_B \\approx 50,000\\text{ K}$; since room temperature $T \\ll T_F$, metallic electrons are in an extreme degenerate state.",
    "Debye Cutoff Frequency: $\\omega_D = v_s (6\\pi^2 N / V)^{1/3}$; ensures total number of vibrational normal modes equals $3N$.",
    "Chandrasekhar Mass Limit: $M_{\\text{Ch}} \\approx 1.44 M_\\odot$; above this threshold, relativistic electron degeneracy cannot prevent black hole/neutron star collapse.",
    "Pauli Suppression of Collisions: Scattering among conduction electrons is strongly suppressed because accessible final quantum states are already occupied.",
    "Bose Condensate Macroscopic Quantum State: Particles in BEC collapse into a single coherent ground-state wavefunction displaying quantum macroscopic effects.",
    "Exam Scoring Tip: Contrast the thermal behavior of Bosons vs Fermions: Bosons experience attractive effective statistical forces, while Fermions experience repulsive exclusion forces."
])

add("Physics III / Statistics III", 5, "Sampling", [
    "Statistical Sampling Foundations: Finite vs Infinite populations; Census enumeration vs Sample surveys; Random sampling, Parameter (population constant $\\mu, \\sigma$) vs Statistic (sample estimator $\\bar{X}, S$); Sampling error vs non-sampling error.",
    "Probability Sampling Techniques: Simple Random Sampling with Replacement (SRSWR) and without Replacement (SRSWOR); Stratified Random Sampling (proportional and Neyman allocation across heterogeneous strata); Systematic Sampling; Cluster Sampling; Multi-stage sampling.",
    "Sampling Distribution of Sample Mean: Probability distribution of sample means across all possible samples of size $n$; Unbiasedness: $E[\\bar{X}] = \\mu$; Standard Error of Mean: $\\text{SE}(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}$ (SRSWR) and $\\text{SE}(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}} \\sqrt{\\frac{N - n}{N - 1}}$ (SRSWOR with Finite Population Correction FPC).",
    "The Central Limit Theorem (CLT): Lindeberg-Lévy CLT: Let $X_1, \\dots, X_n$ be i.i.d. random variables with finite mean $\\mu$ and variance $\\sigma^2$; As sample size $n \\to \\infty$, the standardized sample mean converges in distribution to standard normal: $Z = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\xrightarrow{d} N(0, 1)$; Practical threshold ($n \\ge 30$).",
    "Sampling Distribution of Sample Variance: For normal population $N(\\mu, \\sigma^2)$: Sample variance $S^2 = \\frac{1}{n-1} \\sum (X_i - \\bar{X})^2$; The normalized statistic $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$ follows Chi-square distribution with $n-1$ degrees of freedom; Independence of $\\bar{X}$ and $S^2$ (Fisher's Theorem).",
    "Student's t-Distribution & Applications: Ratio of standard normal variable to square root of independent chi-square variable divided by its df: $T = \\frac{Z}{\\sqrt{\\chi_k^2 / k}} \\sim t_k$; Symmetric, bell-shaped distribution with heavier tails than normal; Applications in small sample tests ($n < 30$).",
    "Snedecor's F-Distribution: Ratio of two independent chi-square random variables divided by their respective degrees of freedom: $F = \\frac{\\chi_{k_1}^2 / k_1}{\\chi_{k_2}^2 / k_2} \\sim F_{k_1, k_2}$; Inversion property: $F_{1 - \\alpha, k_1, k_2} = \\frac{1}{F_{\\alpha, k_2, k_1}}$; Applied in ANOVA and variance ratio tests.",
    "Sampling Distribution of Proportions: Sample proportion $\\hat{p} = X / n$ from Binomial population $B(n, p)$; Mean $E[\\hat{p}] = p$; Standard Error $\\text{SE}(\\hat{p}) = \\sqrt{\\frac{p(1 - p)}{n}}$; Normal approximation to binomial when $n p \\ge 10$ and $n(1 - p) \\ge 10$.",
    "Order Statistics & Sample Quantiles: Arranging sample in ascending magnitude: $X_{(1)} \\le X_{(2)} \\le \\dots \\le X_{(n)}$; Sample minimum $X_{(1)}$ and maximum $X_{(n)}$ distributions; Distribution of sample median; Probability integral transform.",
    "University Examination Strategy: State and prove the Central Limit Theorem using moment-generating functions, derive the standard error of the mean under SRSWOR with finite population correction, and prove that sample mean $\\bar{X}$ and sample variance $S^2$ are independent for normal samples."
], [
    "Finite Population Correction (FPC): Factor $\\sqrt{\\frac{N - n}{N - 1}}$ shrinks the standard error when sample size $n$ exceeds 5% of population $N$.",
    "Standard Error of Mean: $\\text{SE}(\\bar{X}) = \\sigma / \\sqrt{n}$; quadrupling sample size cuts estimation uncertainty by half.",
    "Central Limit Theorem Scope: Guarantees sample mean approaches Gaussian normal distribution regardless of underlying population shape.",
    "Fisher's Independence Theorem: For samples drawn from a normal distribution, the sample mean $\\bar{X}$ and sample variance $S^2$ are statistically independent.",
    "Chi-Square Variance Model: $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$; provides the exact sampling distribution for sample variance.",
    "Student's t Tail Behavior: Exhibits wider tails than normal distribution, compensating for added variance introduced by estimating $\\sigma$ with $S$.",
    "F-Distribution Inversion: $F_{1-\\alpha, d_1, d_2} = 1 / F_{\\alpha, d_2, d_1}$; allows evaluating lower-tail critical values from standard upper-tail tables.",
    "Proportion Standard Error: $\\text{SE}(\\hat{p}) = \\sqrt{\\frac{p(1-p)}{n}}$; achieves maximum variance when true proportion $p = 0.5$.",
    "Sample Minimum Distribution: $P(X_{(1)} > x) = [1 - F(x)]^n$, governing extreme value reliability analysis in engineering physics.",
    "Exam Gold Tip: Always distinguish between the sample standard deviation $S$ (descriptive dispersion) and the standard error $\\text{SE}$ (inferential estimator uncertainty)."
])

# =========================================================================
# 5. PHYSICS LAB III (B.Sc)
# =========================================================================
add("Physics Lab III", 1, "Physics  III: Laboratory Safety Protocols & Instrumentation", [
    "Physics Laboratory Electrical & Thermal Safety: High-voltage safety protocols for power supplies and discharge tubes; Earthing and residual current circuit breakers (RCCB); Thermal safety handling steam boilers, oil baths, and liquid nitrogen dewars (cryogenic gloves, face shields).",
    "Optical Spectrometer Instrument Architecture: Heavy cast-iron base, leveling screws, collimator tube with adjustable bilateral slit and achromatic objective lens, central circular prism table with three leveling thumbscrews, telescope tube with cross-wire eyepiece and 10x rack-and-pinion focusing; Dual vernier scales (Vernier I and II separated by $180^\\circ$) graduated to 1 minute of arc.",
    "Carey Foster Bridge Electrical Architecture: Modified Wheatstone bridge apparatus for precision low-resistance measurements; Four-gap copper strip layout; Heavy uniform bridge wire (1 meter length, typically constantan or manganin, resistance $\\sim 1\\,\\Omega/\\text{m}$); Sliding knife-edge contact key; Reversible commutator.",
    "Lee's Disc Apparatus for Thermal Conductivity: Experimental assembly: Upper hollow cylindrical steam chamber, intermediate specimen thin disc of bad conductor (cardboard, ebonite, glass), and lower heavy brass/copper circular slab; Two calibrated sensitive mercury thermometers ($0.1^\\circ\\text{C}$ divisions) inserted into thermometer wells; Suspension via three silk strings.",
    "Thermocouple & Potentiometer Instrumentation: Calibrated copper-constantan thermocouple; Ice-bath cold junction reference ($0^\\circ\\text{C}$); High-precision DC slide-wire potentiometer (10-wire potentiometer); Standard Weston cadmium cell ($1.0186\\text{ V}$); Sensitive mirror galvanometer with lamp-and-scale arrangement.",
    "Optical Pyrometer & Radiation Detectors: Disappearing filament optical pyrometer: Monochromatic red filter ($\\lambda = 650\\text{ nm}$), objective lens, calibrated tungsten filament lamp, rheostat, ammeter, and eyepiece; Thermopile detector array converting radiant thermal flux to microvolts.",
    "Digital Multimeters & Electronic Oscilloscopes: 4.5-digit true-RMS digital multimeters measuring DC/AC voltages, currents, and component resistances; Digital storage oscilloscopes (DSO) capturing transient thermal time-constant response curves.",
    "Optical Alignment Procedures: Schuster's method of focusing spectrometer for parallel light without distant objects: Alternate adjustments of telescope and collimator at minimum deviation position; Eyepiece cross-wire parallax elimination.",
    "Cryogenic Liquid Handling Standards: Safe handling of liquid nitrogen (boiling point 77 K); Storage in vacuum-insulated stainless steel dewar flasks; Pressure relief safety valves preventing catastrophic cryogenic overpressure explosions.",
    "University Examination Strategy: Detail Schuster's method of focusing a spectrometer for parallel light step-by-step, explain the leveling procedure for the prism table using a spirit level, and calculate the least count of a circular spectrometer vernier."
], [
    "Spectrometer Least Count Formula: $\\text{Least Count} = \\frac{\\text{Value of 1 Main Scale Division}}{\\text{Total Number of Vernier Divisions}} = \\frac{0.5^\\circ}{30} = 1\\text{ minute of arc} = 1'$.",
    "Dual Vernier Purpose: Reading Verniers I and II separated by $180^\\circ$ eliminates eccentric errors caused by non-coincidence of center of rotation.",
    "Schuster's Method Criterion: Adjusts telescope at minimum deviation and collimator away from minimum deviation, achieving parallel rays inside dark room.",
    "Carey Foster Bridge Uniformity: Calibrated bridge wire must possess uniform cross-sectional resistance per unit length ($\\rho_w\\,\\Omega/\\text{cm}$).",
    "Lee's Disc Thin Specimen Rule: Bad conductor disc must be thin with large surface area to ensure 1D heat flow and minimize lateral heat loss.",
    "Cold Junction Fixed Reference: Keeping cold junction strictly in melting ice-water slurry ($0^\\circ\\text{C}$) ensures reproducible Seebeck EMF readings.",
    "Disappearing Filament Landmark: Temperature matched when lamp filament merges seamlessly with background blackbody image, vanishing from view.",
    "Parallax Elimination Technique: Adjust eyepiece until cross-wires are razor sharp, then move eye laterally to confirm zero relative displacement against image.",
    "Cryogenic Boil-Off Hazard: 1 liter of liquid nitrogen expands into 700 liters of gas, presenting severe asphyxiation risk in unventilated rooms.",
    "Lab Practice Rule: Always check that thermometer bulbs make tight thermal contact with wells in Lee's disc using liquid paraffin or mercury droplets."
])

add("Physics Lab III", 2, "Physics  III: Standard Preparations & Calibration Methods", [
    "Calibration of Carey Foster Bridge Wire: Determination of electrical resistance per unit length ($\\rho_w$ in $\\Omega/\\text{cm}$); Connecting equal standard fractional resistances ($R = 1\\,\\Omega$) in gaps 2 and 3; Placing thick copper strip in gap 1 and standard resistance in gap 4; Measuring balance point $l_1$; Interchanging gap 1 and 4, finding $l_2$; Calculating $\\rho_w = \\frac{R}{|l_1 - l_2|}$.",
    "Calibration of Copper-Constantan Thermocouple: Setting up thermo-electric circuit; Cold junction maintained at $0^\\circ\\text{C}$; Hot junction heated in oil bath from $30^\\circ\\text{C}$ to $150^\\circ\\text{C}$; Measuring thermo-EMF ($E$) with slide-wire potentiometer; Plotting calibration curve ($E$ vs $T$); Fitting empirical quadratic: $E = a T + b T^2$; Inversion temperature determination.",
    "Calibration of Platinum Resistance Thermometer (PRT): Determining ice point resistance $R_0$ in melting ice and steam point resistance $R_{100}$ in hypsometer; Resistance at temperature $t$: $R_t = R_0 (1 + A t + B t^2)$; Calculating temperature of oil bath via Callendar's formula: $t - t_p = \\delta \\left( \\frac{t}{100} - 1 \\right) \\frac{t}{100}$.",
    "Spectrometer Wavelength Calibration with Mercury Vapor Lamp: Aligning prism at minimum deviation for yellow doublet ($\\lambda = 579.0\\text{ nm}, 577.0\\text{ nm}$); Measuring angles of minimum deviation ($D_m$) for prominent spectral lines (violet $404.7\\text{ nm}$, blue $435.8\\text{ nm}$, green $546.1\\text{ nm}$); Constructing Hartmann / Cauchy calibration curve.",
    "Determination of Prism Angle ($A$): Direct optical reflection method: Parallel beam from collimator reflected from both polished faces of prism; Telescope rotated to capture reflected images; Difference in vernier angles $2\\theta = \\theta_1 - \\theta_2$; Prism angle $A = \\theta / 2 = \\frac{|\\theta_1 - \\theta_2|}{2}$.",
    "Standardization of Slide-Wire Potentiometer: Balancing potentiometer wire voltage drop against standard Weston cadmium cell ($E_s = 1.0186\\text{ V}$); Adjusting rheostat to obtain balance length $L_s$; Establishing precise voltage gradient $k = E_s / L_s\\text{ V/cm}$ across potentiometer.",
    "Mechanical Equivalent of Heat ($J$) Apparatus Calibration: Callendar and Barnes continuous flow calorimeter; Calibrating fluid flow rate ($m/t$), electrical power input ($V I$), and inlet/outlet temperature differential ($\\Delta T$); Eliminating ambient heat loss corrections via two different flow rates.",
    "Newton's Law of Cooling Calorimeter Calibration: Determining water equivalent ($w$) of copper calorimeter by method of mixtures; Measuring mass $m_c$ and specific heat capacity $s_c$; $w = m_c s_c$; Calibrating cooling curve timing using digital stopwatch.",
    "Optical Pyrometer Temperature Calibration: Calibrating pyrometer filament current against standard thermocouple inside variable-temperature tubular furnace; Constructing current-to-temperature calibration look-up charts.",
    "University Examination Strategy: Derive the formula for resistance per unit length of Carey Foster bridge wire $\\rho_w = \\frac{R}{|l_1 - l_2|}$, explain the determination of prism angle $A$ by reflection, and formulate Callendar's platinum resistance thermometry equations."
], [
    "Bridge Wire Resistance Formula: $\\rho_w = \\frac{R}{|l_1 - l_2|}$, where $R$ is known standard fractional resistance and $|l_1 - l_2|$ is shift in balance point.",
    "Thermocouple Quadratic Calibration: $E = a T + b T^2$; parabolic response where neutral temperature occurs at $T_n = -a / (2b)$.",
    "Prism Angle Reflection Relation: The angle between reflected beams equals twice the refracting angle of the prism: $\\Delta\\theta = 2A$.",
    "Potentiometer Voltage Gradient: $k = \\frac{E_{\\text{standard}}}{l_{\\text{balance}}}$, quantifying precise millivolts per centimeter of wire.",
    "PRT Callendar Constant Delta: $\\delta \\approx 1.50$ for pure platinum; calibrates deviations between linear platinum scale and true thermodynamic scale.",
    "Water Equivalent Definition: Mass of water requiring identical thermal energy to raise its temperature by one degree: $w = m_{\\text{metal}} \\cdot c_{\\text{metal}}$.",
    "Cauchy Dispersion Calibration: Refractive index fits empirical dispersion: $\\mu = A + \\frac{B}{\\lambda^2}$, mapping wavelength to deviation angle.",
    "Continuous Flow Heat Loss Elimination: Using two distinct flow rates at identical temperature rise cancels out ambient heat loss terms completely.",
    "Weston Cadmium Voltage Stability: Saturated cadmium cell delivers exceptionally stable $1.0186\\text{ V}$ with minimal temperature coefficient.",
    "Lab Practice Rule: In Carey Foster bridge measurements, always reverse the commutator battery current and average readings to cancel thermoelectric EMFs."
])

add("Physics Lab III", 3, "Physics  III: Core Experimental Procedures & Synthesis", [
    "Practical 1: Determination of Stefan's Constant ($\\sigma$): Utilizing vacuum blackened copper disc detector heated inside double-walled water vessel; Recording temperature rise rate ($dT/dt$) of detector upon opening radiation shutter; Formula: $\\sigma = \\frac{m c (dT/dt)}{A (T^4 - T_0^4)}$; Target value: $5.67 \\times 10^{-8}\\text{ W}/(\\text{m}^2\\cdot\\text{K}^4)$.",
    "Practical 2: Thermal Conductivity of Bad Conductor via Lee's Disc: Steady-state conduction: Steam passed through upper chamber until thermometers $T_1$ and $T_2$ stabilize; Removing specimen disc, heating lower brass slab to $T_2 + 10^\\circ\\text{C}$; Recording cooling curve ($dT/dt$ at $T_2$); Formula: $K = \\frac{m s d (dT/dt)_{T_2}}{\\pi r^2 (T_1 - T_2)} \\frac{r + 2h}{2r + 2h}$.",
    "Practical 3: Thermal Conductivity of Good Conductor via Searle's Bar: Copper bar heated at one end by steam, cooled at other end by circulating water; Measuring temperature gradient using four thermometers; Formula: $K = \\frac{m C_w (T_4 - T_3) d}{A (T_1 - T_2) t}$.",
    "Practical 4: Verification of Newton's Law of Cooling: Measuring cooling rate of hot water in copper calorimeter surrounded by constant-temperature water jacket; Plotting temperature $T$ vs time $t$; Plotting cooling rate $dT/dt$ vs temperature excess $(T - T_0)$ to verify linear relationship.",
    "Practical 5: Temperature Coefficient of Resistance via Carey Foster Bridge: Measuring unknown resistance $X$ of copper/platinum wire coil at room temperature $T_1$ and steam bath $T_2$; Formula: $X_2 - X_1 = \\rho_w (l_1 - l_2)$; Temperature coefficient: $\\alpha = \\frac{X_2 - X_1}{X_1 T_2 - X_2 T_1}$.",
    "Practical 6: Planck's Constant ($h$) via Photo-Electric Effect: Vacuum photocell illuminated by monochromatic mercury lines (404.7, 435.8, 546.1, 577.0 nm); Measuring stopping potential $V_0$ at each frequency $\\nu$; Plotting $V_0$ vs $\\nu$; Slope equals $h/e$; Calculating $h = e \\cdot \\text{slope}$; Target: $6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$.",
    "Practical 7: Mechanical Equivalent of Heat ($J$) by Electrical Method: Joule's calorimeter; Supplying voltage $V$ and current $I$ for time $t$; Measuring temperature rise of water $\\Delta T$; Formula: $J = \\frac{V I t}{(m_w + w) s_w \\Delta T}$; Target: $4.184\\text{ J/cal}$.",
    "Practical 8: Dispersive Power of Prism Material via Spectrometer: Measuring minimum deviation angles $D_V, D_Y, D_R$ for violet, yellow, and red spectral lines of mercury source; Refractive indices: $\\mu = \\frac{\\sin((A + D_m)/2)}{\\sin(A/2)}$; Dispersive power: $\\omega = \\frac{\\mu_V - \\mu_R}{\\mu_Y - 1}$.",
    "Practical 9: Thermoelectric Power of Thermocouple: Potentiometric measurement of thermo-EMF across wide temperature gradient ($0^\\circ\\text{C}$ to $200^\\circ\\text{C}$); Plotting $E$ vs $T$; Calculating thermoelectric power (Seebeck coefficient): $S = \\frac{dE}{dT}$; Determining neutral temperature $T_n$ where $dE/dT = 0$.",
    "University Examination Strategy: Write the complete experimental procedure for determination of thermal conductivity by Lee's disc method with formula derivation, detail the photoelectric determination of Planck's constant $h$, and explain the measurement of dispersive power of a prism."
], [
    "Stefan's Constant Formula: $\\sigma = \\frac{m c (dT/dt)}{A (T^4 - T_0^4)}$, equating net radiative heat absorption to internal thermal energy change rate.",
    "Lee's Disc Correction Factor: Factor $\\frac{r + 2h}{2r + 2h}$ accounts for convective and radiative heat loss from cylindrical sides and bottom surface.",
    "Searle's Bar Water Heat Flow: Heat conducted through bar equals heat absorbed by cooling water: $Q = m C_w (T_4 - T_3)$.",
    "Newton Cooling Linearity: Plot of cooling rate $\\frac{dT}{dt}$ against temperature excess $(T - T_0)$ yields a straight line passing through origin.",
    "Temperature Coefficient Formula: $\\alpha = \\frac{R_2 - R_1}{R_1 t_2 - R_2 t_1}$, quantifying fractional resistance increase per degree Celsius.",
    "Planck's Constant Photocell Slope: Einstein photoelectric equation $e V_0 = h\\nu - W_0 \\implies V_0 = (h/e)\\nu - W_0/e$; slope yields $h/e$.",
    "Prism Refractive Index Formula: $\\mu = \\frac{\\sin((A + D_m)/2)}{\\sin(A/2)}$, derived at the symmetrical minimum deviation path.",
    "Dispersive Power Expression: $\\omega = \\frac{\\mu_V - \\mu_R}{\\mu_Y - 1}$, measuring angular dispersion relative to mean yellow deviation.",
    "Thermocouple Neutral Point: $T_n = -a / (2b)$; the temperature where thermo-EMF reaches peak value and thermoelectric power vanishes ($S = 0$).",
    "Practical Exam Rule: When recording cooling curves in Lee's disc, take thermometer readings at strict 30-second intervals while stirring continuously."
])

add("Physics Lab III", 4, "Physics  III: Quantitative Data Verification & Error Analysis", [
    "Propagation of Experimental Errors in Thermal Physics: General error formula for $Q = f(x, y, z)$: Fractional error $\\frac{\\Delta Q}{Q} = \\sqrt{ \\left(\\frac{1}{Q} \\frac{\\partial f}{\\partial x} \\Delta x\\right)^2 + \\left(\\frac{1}{Q} \\frac{\\partial f}{\\partial y} \\Delta y\\right)^2 }$; Error propagation in Stefan's constant: Sensitivity to temperature difference term $(T^4 - T_0^4)$.",
    "Statistical Analysis of Repeated Determinations: Computing sample mean $\\bar{x}$, sample variance $s^2$, and Standard Error of the Mean $\\text{SE} = s / \\sqrt{n}$; Calculating 95 percent confidence limits; Identifying and discarding statistical outliers using Chauvenet's Criterion.",
    "Least Squares Linear Regression Analysis: Fitting experimental data $(x_i, y_i)$ to linear model $y = m x + c$; Calculating best-fit slope $m = \\frac{n \\sum x_i y_i - \\sum x_i \\sum y_i}{n \\sum x_i^2 - (\\sum x_i)^2}$ and intercept $c$; Standard error of slope $s_m$; Correlation coefficient $R^2$; Application to Planck's constant photocell graph.",
    "Cooling Rate Curve Numerical Differentiation: Calculating instantaneous cooling rate $(dT/dt)$ at steady-state temperature $T_2$ from discrete $(t, T)$ cooling data; Central difference approximation: $\\left(\\frac{dT}{dt}\\right)_i \\approx \\frac{T_{i+1} - T_{i-1}}{t_{i+1} - t_{i-1}}$; Tangent slope estimation errors.",
    "Carey Foster Bridge Sensitivity Analysis: Maximum bridge sensitivity condition: Null balance achieved when all four bridge arms have approximately equal resistance ($P \\approx Q \\approx R \\approx S$); Balance point reading uncertainty: $\\Delta l = \\pm 0.5\\text{ mm}$; Error propagation to $\\Delta X / X$.",
    "Thermometer Stem Exposure & Immersion Corrections: Mercury thread exposure error: Correction $\\Delta T = K n (T - t)$, where $K = 0.00016/^\\circ\\text{C}$ for mercury in glass, $n$ is length of emergent column in degrees, $T$ is reading, and $t$ is mean temperature of exposed stem.",
    "Instrumental Calibration & Systematic Error Rectification: Zero error of micrometer screw gauge and vernier callipers; End-correction of potentiometer and meter bridge wire; Correction for voltmeter internal resistance loading in Joule calorimeter.",
    "Radiation Heat Loss Modeling in Calorimetry: Rumford's cooling correction in calorimetry: Cooling before and during experiment; Corrected temperature rise: $\\Delta T_{\\text{corr}} = (T_2 - T_1) + \\frac{v_1 + v_2}{2} t$; Eliminating convective ambient drift.",
    "Percentage Discrepancy Against Standard Physical Benchmarks: Quantifying accuracy: $\\text{Discrepancy} = \\frac{|\\text{Experimental Value} - \\text{Accepted Value}|}{\\text{Accepted Value}} \\times 100\\%$; Verifying that experimental error margins enclose the accepted physical constants ($h, \\sigma, J$).",
    "University Examination Strategy: Solve a numerical problem on propagation of errors for thermal conductivity by Lee's disc, fit a straight line to photoelectric stopping potential data using least squares to calculate Planck's constant with standard error, and apply stem correction to a thermometer reading."
], [
    "Stefan Error Sensitivity: Because radiation scales as $T^4$, a 1% error in absolute temperature measurement propagates to a 4% error in Stefan's constant.",
    "Least Squares Slope Formula: $m = \\frac{N \\sum x y - \\sum x \\sum y}{N \\sum x^2 - (\\sum x)^2}$, determining optimal linear regression coefficient.",
    "Central Difference Derivative: $\\left(\\frac{dT}{dt}\\right)_i = \\frac{T_{i+1} - T_{i-1}}{2 \\Delta t}$, providing $O(\\Delta t^2)$ second-order accurate numerical derivative.",
    "Bridge Sensitivity Maxima: Carey Foster bridge sensitivity peaks when balance point is near center of wire ($l \\approx 50\\text{ cm}$).",
    "Thermometer Stem Correction: $\\Delta T = 0.00016 \\cdot n \\cdot (T_{\\text{measured}} - T_{\\text{ambient}})$, correcting for emergent non-immersed mercury thread.",
    "Rumford Cooling Correction: Adjusts measured calorimetric temperature rise by adding average heat loss rate during active heating.",
    "Correlation Coefficient Metric: $R^2$ approaching 1.0 confirms strong linear relationship between photoelectric stopping potential and frequency.",
    "Instrumental End Correction: Resistance of brass terminal strips at wire ends must be determined and accounted for in precision bridges.",
    "Voltmeter Loading Error: High-resistance voltmeters draw small finite current, causing measured potential to fall slightly below true EMF.",
    "Lab Viva Tip: Always express final experimental results with both appropriate significant figures and explicit confidence uncertainty: $X = \\bar{X} \\pm \\text{SE}$."
])

add("Physics Lab III", 5, "Physics  III: Comprehensive Practical Record & Viva Voce", [
    "Practical Notebook Documentation Standards: Systematic recording: Objective, apparatus list, theoretical principles with circuit/ray diagrams, observation tables with units, sample calculation steps, error analysis, and final conclusion with standard comparisons.",
    "Viva Voce High-Yield Questions on Heat Conduction: What is the difference between thermal conductivity and thermal diffusivity? Why cannot Lee's disc method be used for copper? Why must the specimen disc be thin in Lee's disc? What is a steady state?",
    "Viva Voce Questions on Thermal Radiation: What is a perfectly black body? How is Féry's blackbody constructed? What is Stefan-Boltzmann law and does it hold for non-blackbodies? What is Wien's displacement law?",
    "Viva Voce Questions on Thermometry & Thermocouples: What is the Seebeck effect, Peltier effect, and Thomson effect? What is neutral temperature and inversion temperature? Why is platinum preferred in resistance thermometers? What is the Callendar-Griffiths bridge?",
    "Viva Voce Questions on Electrical Bridges: What is the principle of the Carey Foster bridge? Why is it superior to the meter bridge? What are end corrections and how are they eliminated? What is the role of the commutator?",
    "Viva Voce Questions on Photoelectric Effect: What is stopping potential and does it depend on light intensity? What is threshold frequency? Why could classical wave theory not explain the photoelectric effect? What is work function?",
    "Viva Voce Questions on Optical Dispersion: What is the difference between dispersion and deviation? What is dispersive power of a prism? Why does violet deviate more than red? What are Fraunhofer absorption lines?",
    "Laboratory Quality Assurance & GLP: Periodic checking of electrical calibration certificates, cleaning optical prism surfaces with lens tissues, maintaining clean contacts in resistance boxes using emery paper, and proper zeroing of analog galvanometers.",
    "Emergency Procedures in Physics Laboratory: Electrical shock first aid, chemical burn emergency eye-wash protocols, fire extinguisher operation (CO2 / dry powder for electrical fires), and safe evacuation paths.",
    "University Examination Strategy: Review all viva questions on thermal conductivity, Carey Foster bridge, and photocell experiments, ensure the practical record book contains complete graphs and error calculations, and be prepared to perform any experiment independently."
], [
    "Thermal Diffusivity Definition: $\\alpha = K / (\\rho C_p)$; measures the rate of temperature spread through material during transient heat flow.",
    "Lee's Disc Thin Specimen: Bad conductors have low conductivity; a thin disc minimizes thermal resistance so measurable temperature differences develop.",
    "Steady State vs Thermal Equilibrium: Steady state: Temperature at each point is constant over time, but heat is actively flowing ($T_1 \\ne T_2$).",
    "Féry's Black Body Architecture: Double-walled hollow sphere with tiny aperture and conical pointed projection opposite to prevent direct specular reflection.",
    "Carey Foster Bridge Advantage: Interchanging resistances and taking difference $(l_1 - l_2)$ automatically cancels out unknown end-strip resistances.",
    "Stopping Potential Independence: Stopping potential $V_0$ is completely independent of light intensity; intensity governs only photocurrent magnitude.",
    "Work Function Definition: Minimum quantum energy required to liberate an electron from the Fermi level of a metal surface into vacuum ($W_0 = h\\nu_0$).",
    "Prism Dispersion Cause: Refractive index $\\mu$ decreases with increasing wavelength (Cauchy's law); shorter violet waves bend more sharply than red.",
    "Inversion Temperature Symmetry: $T_i - T_n = T_n - T_0$; neutral temperature lies precisely midway between cold junction and inversion temperature.",
    "Exam Gold Rule: In viva voce, answer with immediate technical precision: give the governing physical law, write the equation, and state the SI units."
])

# =========================================================================
# 6. INSTRUMENTATION & MEASUREMENT (B.Sc)
# =========================================================================
add("Instrumentation & Measurement", 1, "Measurement Basics", [
    "Measurement Systems Architecture & Generalized Configuration: Functional elements of instrumentation systems: Primary sensing element (transducer), Variable conversion element, Signal conditioning element, Data transmission element, and Data presentation / processing display.",
    "Static Performance Characteristics: Accuracy (closeness to true value) vs Precision (repeatability among independent readings); Sensitivity: Ratio of change in output to change in input ($S = \\Delta q_o / \\Delta q_i$); Resolution: Smallest detectable input change.",
    "Linearity, Threshold & Hysteresis: Linearity: Maximum deviation of calibration curve from ideal straight line; Threshold: Minimum input required to elicit a detectable output; Dead zone; Hysteresis: Difference in output readings when approaching a point from ascending vs descending input values.",
    "Dynamic Performance Characteristics: Speed of response, Lag, Fidelity (ability to reproduce waveform without distortion), and Dynamic error; Zero-order instruments (potentiometer, instant response), First-order instruments (thermocouple, exponential time constant $\\tau$), and Second-order instruments (accelerometer, damping ratio $\\zeta$, natural frequency $\\omega_n$).",
    "Measurement Errors Classification & Analysis: Systematic (determinate) errors: Instrumental errors (wear, friction, calibration drift), Environmental errors (temperature, magnetic fields), and Observational errors (parallax); Random (indeterminate) errors: Gaussian normal distribution modeling.",
    "Statistical Treatment of Experimental Data: Arithmetic mean $\\bar{x} = \\frac{1}{n} \\sum x_i$; Average deviation; Standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$; Variance; Probable error $r = 0.6745 s$; Standard error of the mean $\\text{SE} = s / \\sqrt{n}$.",
    "Measurement Standards & Calibration Hierarchies: International standards (BIPM), Primary standards (national metrology institutes like NPL India, NIST USA), Secondary standards (industrial calibration laboratories), and Working standards (daily laboratory bench instruments); Traceability chain.",
    "Loading Effects & Impedance Matching: Voltage loading: Connecting a voltmeter with finite input resistance $R_v$ in parallel with circuit resistance $R_1$ alters circuit conditions ($R_{\\text{parallel}} = R_1 \\parallel R_v < R_1$); Current loading in ammeters; Maximizing power transfer ($Z_{\\text{load}} = Z_{\\text{source}}^*$).",
    "Signals & Noise in Measurement Systems: Signal-to-Noise Ratio (SNR in dB: $\\text{SNR} = 10 \\log_{10}(P_{\\text{signal}} / P_{\\text{noise}})$); Common-Mode Rejection Ratio (CMRR) in differential instrumentation amplifiers; Noise reduction techniques: Shielding, grounding, filtering, and twisted-pair cabling.",
    "University Examination Strategy: Differentiate accuracy vs precision with target diagrams, derive the first-order response of a thermocouple to a step input, calculate the voltmeter loading error for a voltage divider circuit, and state the statistical probable error formula."
], [
    "Accuracy vs Precision: Accuracy is proximity to absolute true value; Precision is consistency and clustering among repeated measurements.",
    "Sensitivity Expression: $S = \\frac{d(\\text{Output})}{d(\\text{Input})}$; represented graphically by the local slope of the calibration curve.",
    "First-Order Step Response: $\\theta(t) = \\theta_f (1 - e^{-t/\\tau})$; reaches $63.2\\%$ of final value after one time constant $t = \\tau$.",
    "Second-Order Damping Regimes: $\\zeta > 1$ (overdamped), $\\zeta = 1$ (critically damped), $\\zeta < 1$ (underdamped with ringing overshoot).",
    "Voltmeter Loading Effect: Voltmeter draws current unless its input resistance $R_v \\gg R_{\\text{circuit}}$; causes measured voltage to drop.",
    "Ammeter Series Insertion: Ideal ammeter possesses zero internal resistance to prevent dropping voltage across its terminals.",
    "Probable Error Formula: $r = 0.6745 \\cdot s$; exactly 50 percent of random observations fall within $\\pm r$ of the mean.",
    "Hysteresis Cause: Internal magnetic domain pinning or mechanical elastic friction causing divergent loading vs unloading paths.",
    "CMRR Rejection Ratio: $\\text{CMRR} = 20 \\log_{10}(A_d / A_{cm})$; high CMRR rejects common-mode 50 Hz power line noise.",
    "Exam Gold Tip: Always remember that high precision does NOT guarantee accuracy; an uncalibrated instrument can produce highly precise yet inaccurate readings."
])

add("Instrumentation & Measurement", 2, "Transducers", [
    "Transducer Classification & Operational Principles: Transducers convert physical quantities (temperature, pressure, displacement) into electrical signals; Active (self-generating: thermocouple, piezoelectric, photovoltaic) vs Passive (requires external excitation: strain gauge, LVDT, RTD).",
    "Displacement Transducers: Potentiometric & Capacitive: Potentiometers (resistive voltage division proportional to linear/angular motion); Capacitive transducers: Varying plate separation ($C = \\frac{\\epsilon A}{d} \\implies \\Delta C \\propto \\Delta d$), varying overlapping area ($C \\propto A$), or varying dielectric permittivity.",
    "Linear Variable Differential Transformer (LVDT): Primary coil excited by AC voltage ($1-10\\text{ kHz}$); Two identical secondary coils connected in series opposition ($V_{\\text{out}} = V_{s1} - V_{s2}$); Movable ferromagnetic core; Zero output at null position; Linear range, infinite resolution, high sensitivity, and ruggedness.",
    "Strain Gauges & Gauge Factor: Piezoresistive effect in metallic foils and semiconductors; Resistance change under axial strain: $\\frac{\\Delta R}{R} = (1 + 2\\nu) \\epsilon + \\frac{\\Delta \\rho / \\rho}{\\epsilon} = G_f \\cdot \\epsilon$; Gauge factor $G_f \\approx 2.0$ for metallic foil gauges, $G_f \\approx 100-200$ for semiconductor silicon gauges.",
    "Wheatstone Bridge Signal Conditioning for Strain Gauges: Quarter-bridge (single active gauge; non-linear, temperature sensitive); Half-bridge (two active gauges, tension-compression compensation); Full-bridge (four active gauges): Output voltage $V_{\\text{out}} = \\frac{V_{\\text{in}}}{4} \\frac{\\Delta R}{R} = \\frac{V_{\\text{in}}}{4} G_f \\epsilon$ (linear, quadruples sensitivity, automatic temperature compensation).",
    "Temperature Transducers: RTD & Thermistors: Resistance Temperature Detector (RTD: Platinum PT100; $R_t = R_0(1 + A t + B t^2)$; highly linear, stable); Thermistors (metal oxide semiconductor NTC; exponential sensitivity $R = R_0 e^{\\beta(1/T - 1/T_0)}$; fast response, highly non-linear).",
    "Thermocouple Transducers: Seebeck effect; Standard thermocouple types: Type K (Chromel-Alumel: $-200$ to $1250^\\circ\\text{C}$), Type J (Iron-Constantan), Type T (Copper-Constantan); Cold-junction compensation (CJC) circuits using thermistors or IC sensors (AD595).",
    "Piezoelectric Transducers: Piezoelectric effect in asymmetric non-centrosymmetric crystals (Quartz, PZT ceramic, Rochelle salt); Mechanical stress generates electrical polarization charge: $q = d \\cdot F$; Voltage sensitivity $g = d / \\epsilon$; Suited strictly for dynamic pressure and acceleration measurements; Zero DC response.",
    "Optical & Photosensitive Transducers: Photodiodes (reverse-biased pn junction, photocurrent proportional to optical flux), Phototransistors, Light Dependent Resistors (LDR: Cadmium Sulfide CdS photoresistor), and Photovoltaic solar cells.",
    "University Examination Strategy: Detail the construction, working, and output voltage characteristics of an LVDT including phase reversal at null, derive the Gauge Factor formula for metallic strain gauges, and compare RTD vs Thermistor vs Thermocouple."
], [
    "LVDT Series Opposition: Secondary coils wired in series opposition: $V_{\\text{net}} = V_{s1} - V_{s2}$; yields zero volts at geometric null center.",
    "LVDT Phase Inversion: Moving the core past null reverses output phase by $180^\\circ$, enabling directional position sensing.",
    "Gauge Factor Formula: $G_f = \\frac{\\Delta R / R}{\\epsilon} = 1 + 2\\nu + \\frac{\\Delta \\rho / \\rho}{\\epsilon}$; represents fractional resistance change per unit strain.",
    "Full Bridge Strain Sensitivity: Full Wheatstone bridge with four active gauges yields $V_{\\text{out}} = \\frac{1}{4} V_{\\text{in}} G_f (\\epsilon_1 - \\epsilon_2 + \\epsilon_3 - \\epsilon_4) = V_{\\text{in}} G_f \\epsilon$.",
    "PT100 RTD Benchmark: Platinum resistance thermometer exhibiting precisely $100.0\\,\\Omega$ resistance at $0^\\circ\\text{C}$.",
    "Piezoelectric DC Limitation: Charge leaks across internal resistance and cable capacitance, making piezoelectric sensors useless for static DC forces.",
    "Piezoelectric Output Voltage: $V = g \\cdot t \\cdot P$, where $g$ is voltage sensitivity, $t$ is crystal thickness, and $P$ is applied pressure.",
    "Active vs Passive Sensor: Active transducers generate voltage without external power; Passive transducers require external excitation source.",
    "Cold Junction Compensation: Adds voltage equal and opposite to cold junction EMF, referencing thermocouple readings to virtual $0^\\circ\\text{C}$.",
    "Exam Gold Tip: Always explain that dummy strain gauges are mounted perpendicularly on unstrained metal to cancel out ambient thermal expansion errors."
])

add("Instrumentation & Measurement", 3, "Oscilloscopes", [
    "Cathode Ray Oscilloscope (CRO) Architecture: Foundational laboratory display instrument; Functional subsystems: Cathode Ray Tube (CRT), Vertical Deflection System, Horizontal Deflection System, Time-Base Generator, Trigger Circuit, and High/Low Voltage Power Supplies.",
    "Cathode Ray Tube (CRT) Internal Physics: Electron gun: Thermionic heated cathode emitting electrons, control grid modulating beam brightness/intensity, pre-accelerating and accelerating anodes (thousands of volts DC), and focusing anode (electrostatic focusing lens); Deflection plates (vertical and horizontal); Fluorescent phosphor screen.",
    "Vertical & Horizontal Deflection Systems: Vertical amplifier: Wideband linear amplifier with calibrated attenuator (Volts/Div knob); Horizontal amplifier: Amplifies horizontal input or linear time-base sweep ramp; Electrostatic deflection sensitivity: $S_d = \\frac{L l}{2 d V_a}\\text{ mm/V}$.",
    "Time-Base Generator & Sweep Synchronization: Generating linear sawtooth voltage ramp waveform ($V_h \\propto t$); Linear forward sweep drawing beam left-to-right across screen, followed by rapid flyback / blanking pulse returning beam to left; Trigger circuit synchronizing sweep start with input signal cycle to produce stable, stationary waveforms.",
    "CRO Triggering Modes: Auto mode (free-running sweep in absence of signal), Normal mode (sweep triggered strictly by qualifying signal edge), Single Sweep mode; Trigger controls: Trigger level (voltage threshold), Trigger slope (+ or - edge), and Trigger coupling (AC, DC, HF Reject, LF Reject).",
    "Lissajous Figures & Phase/Frequency Measurement: Applying sinusoidal voltages to both vertical and horizontal deflection plates simultaneously without internal time-base ($X-Y$ mode); Resulting closed elliptical Lissajous figures; Determining phase difference: $\\sin\\phi = Y_0 / Y_{\\max}$; Frequency ratio determination via tangential contact method: $f_y / f_x = N_x / N_y$.",
    "Digital Storage Oscilloscope (DSO) Architecture: Modern digital alternative to analog CRO; Subsystems: Input analog attenuator, Anti-aliasing low-pass filter, High-speed Analog-to-Digital Converter (ADC), Acquisition memory buffer, Microprocessor / DSP, and Digital LCD display.",
    "DSO Sampling Techniques & Nyquist Criterion: Real-Time Sampling (ADC samples waveform sequentially at rate $f_s \\ge 2 f_{\\max}$ to avoid aliasing); Equivalent-Time Sampling (Random Interleaved Sampling for repetitive high-frequency waveforms exceeding ADC conversion rate); Sampling rate (Gigasamples/sec GS/s) vs Bandwidth.",
    "Oscilloscope Probes & Compensation: 1x passive probe (direct connection, high capacitive loading $\\sim 100\\text{ pF}$) vs 10x attenuator probe ($10\\text{ M}\\Omega$ input impedance, low capacitance $\\sim 10-15\\text{ pF}$); Probe compensation adjustment: Trimmer capacitor adjusted against 1 kHz square wave calibrator to eliminate under-compensation or over-compensation rounding.",
    "University Examination Strategy: Draw the complete block diagram of a Cathode Ray Oscilloscope explaining vertical and horizontal deflection subsystems, explain Lissajous figures for phase measurement with diagrams, and contrast analog CRO vs Digital Storage Oscilloscope (DSO)."
], [
    "Electrostatic Deflection Formula: $D = \\frac{L l V_d}{2 d V_a}$, where $V_d$ is deflection plate voltage and $V_a$ is anode accelerating voltage.",
    "Deflection Factor Reciprocal: Deflection factor $G = 1/S_d = \\frac{2 d V_a}{L l}$ in Volts per centimeter (V/cm).",
    "Sawtooth Linear Sweep: Linear rising ramp voltage sweeps electron beam across horizontal axis at constant velocity, converting X-axis to time.",
    "Blanking Pulse Action: High negative potential applied to control grid during flyback extinguishes electron beam, preventing retracing lines.",
    "Lissajous Phase Difference: $\\sin\\phi = \\frac{y_{\\text{intercept}}}{y_{\\text{maximum}}}$; vertical ellipse corresponds to $\\phi = 90^\\circ$; straight line at $45^\\circ$ corresponds to $\\phi = 0^\\circ$.",
    "Lissajous Tangency Rule: $\\frac{f_y}{f_x} = \\frac{\\text{Number of horizontal tangencies}}{\\text{Number of vertical tangencies}}$, computing frequency ratios.",
    "DSO Flash ADC Sampling: High-speed flash ADC converts continuous analog voltage into 8-bit digital values at gigasample rates.",
    "Nyquist Sampling Barrier: Sampling frequency must exceed twice the highest signal frequency ($f_s \\ge 2 f_{\\max}$) to prevent aliasing foldback.",
    "10x Probe Compensation: Adjusted via variable trimmer capacitor; correctly compensated probe displays a perfectly flat, square 1 kHz test pulse.",
    "Exam Gold Tip: Always explain that 10x probes attenuate the signal voltage by a factor of 10, but boost input impedance to $10\\,\\text{M}\\Omega$, minimizing circuit loading."
])

add("Instrumentation & Measurement", 4, "Signal Generators", [
    "Signal Sources Classification & Spectrum: Audio Frequency (AF) generators ($20\\text{ Hz} - 20\\text{ kHz}$), Radio Frequency (RF) generators ($100\\text{ kHz} - 1\\text{ GHz}$), Function Generators (multiform waves), and Arbitrary Waveform Generators (AWG); Sine, square, triangular, pulse, and ramp generation.",
    "Audio Sine Wave Oscillators: RC Feedback Circuits: Wien Bridge Oscillator: Lead-lag RC network providing $\\beta_f = 1/3$ feedback ratio at resonance; Operational amplifier providing non-inverting gain $A_v = 1 + R_f / R_1 = 3$; Oscillation frequency: $f_0 = \\frac{1}{2\\pi R C}$; Low harmonic distortion audio source.",
    "RC Phase Shift Oscillator: Three-section cascaded high-pass RC ladder network; Each stage introduces $60^\\circ$ phase shift, providing cumulative $180^\\circ$ phase inversion; Inverting amplifier provides additional $180^\\circ$ inversion ($360^\\circ$ total); Oscillation frequency: $f_0 = \\frac{1}{2\\pi R C \\sqrt{6}}$; Minimum amplifier gain $|A_v| \\ge 29$.",
    "RF LC Tuned Oscillators: Hartley & Colpitts Oscillators: Barkhausen criterion ($|A \\beta| = 1, \\angle A \\beta = 0^\\circ$); Hartley oscillator: Tapped inductor tank ($f_0 = \\frac{1}{2\\pi \\sqrt{(L_1 + L_2) C}}$); Colpitts oscillator: Split capacitor tank ($f_0 = \\frac{1}{2\\pi \\sqrt{L C_{\\text{eq}}}}$, where $C_{\\text{eq}} = \\frac{C_1 C_2}{C_1 + C_2}$); Superior high-frequency stability.",
    "Crystal Oscillators & Piezoelectric Frequency Standards: Piezoelectric quartz crystal resonator acting as electromechanical resonant tank; Equivalent electrical circuit: Series $R-L-C$ branch in parallel with electrostatic capacitance $C_0$; Extremely high quality factor ($Q \\sim 10^4 - 10^6$); Pierce crystal oscillator circuit; Unsurpassed frequency stability ($\Delta f / f \\sim 10^{-6}$).",
    "Analog Function Generator Architecture: Integrator and Comparator (Schmitt Trigger) loop: Constant current charging capacitor generates linear triangle wave; Hysteresis comparator snaps states at threshold limits, generating clean square wave; Diaphragm diode shaping network converting triangle wave to low-distortion sine wave.",
    "Pulse Generators & Duty Cycle Modulation: Pulse width ($t_w$), rise time ($t_r$), fall time ($t_f$), and pulse repetition frequency (PRF); Duty cycle: $D = \\frac{t_w}{T} \\times 100\\%$; Astable multivibrators using 555 timer ICs; Adjustable duty cycle via diode steering networks.",
    "Direct Digital Synthesis (DDS) Technology: Modern digital waveform generation; Subsystems: Reference crystal clock, Phase Accumulator (frequency control word $M$), Phase-to-Amplitude Look-Up Table (Sine ROM), Digital-to-Analog Converter (DAC), and Low-Pass Reconstruction Filter; Output frequency: $f_{\\text{out}} = \\frac{M \\cdot f_{\\text{clk}}}{2^N}$.",
    "Sweep Frequency Generators & Spectrum Analysis: Voltage-Controlled Oscillator (VCO); Generating linear frequency-modulated chirps ($f(t) = f_0 + k t$); Sawtooth sweep voltage; Used for automated characterization of amplifier frequency response, filter bandpass attenuation, and antenna return loss.",
    "University Examination Strategy: Draw the circuit diagram of a Wien Bridge Oscillator and derive the oscillation frequency $f_0 = \\frac{1}{2\\pi R C}$ and required gain $A_v = 3$, explain the internal block diagram of a function generator generating triangle and square waves, and explain Direct Digital Synthesis."
], [
    "Wien Bridge Frequency: $f_0 = \\frac{1}{2\\pi R C}$; balance condition requires non-inverting amplifier gain of strictly 3 to sustain oscillations.",
    "RC Phase Shift Gain Requirement: Sustained oscillations require amplifier voltage gain $|A| \\ge 29$ to overcome attenuation in the 3-stage RC ladder.",
    "Colpitts Equivalent Capacitance: $C_{\\text{eq}} = \\frac{C_1 C_2}{C_1 + C_2}$; split capacitive divider sets feedback ratio without tapped inductors.",
    "Crystal Oscillator High Q: Mechanical quartz resonators achieve Quality Factor $Q > 10,000$, yielding ppm-level thermal frequency stability.",
    "Barkhausen Oscillation Criterion: Loop gain must equal unity ($|A\\beta| = 1$) and net phase shift around loop must be zero or $360^\\circ$.",
    "Function Generator Core: Integrator charges linearly to make triangle slopes; Schmitt trigger flips at peak thresholds to generate square pulses.",
    "Triangle-to-Sine Shaper: Multi-stage diode-resistor breakpoint ladder rounds triangular peaks into sinusoidal curves by progressive clipping.",
    "DDS Frequency Resolution: $\\Delta f = \\frac{f_{\\text{clk}}}{2^N}$; a 32-bit phase accumulator clocked at 100 MHz achieves micro-hertz tuning steps.",
    "Pulse Duty Cycle Ratio: Duty Cycle $\\% = \\frac{\\text{Pulse Width } t_w}{\\text{Period } T} \\times 100$; square waves have precisely 50% duty cycle.",
    "Exam Gold Tip: Always note that LC oscillators dominate at high radio frequencies (MHz), while RC oscillators dominate at low audio frequencies (Hz to kHz)."
])

add("Instrumentation & Measurement", 5, "Data Acquisition", [
    "Data Acquisition System (DAQ) Architecture: Comprehensive hardware/software pipeline capturing real-world physical analog phenomena and converting them into digital computer records; Subsystems: Sensors/Transducers, Signal Conditioning, Multiplexer (MUX), Sample-and-Hold (S/H), Analog-to-Digital Converter (ADC), and Computer Interface.",
    "Signal Conditioning Operations: Essential processing stages: Preamplification (instrumentation amplifiers boosting millivolts to volts), Electrical Isolation (optical isolators / optocouplers breaking ground loops), Level shifting, Filtering (anti-aliasing low-pass filters), and Bridge completion.",
    "Instrumentation Amplifier Architecture (Three-Op-Amp Topology): High-impedance differential amplifier: Two non-inverting input buffer op-amps with shared gain resistor $R_G$, feeding a differential output stage; Differential voltage gain: $A_v = \\left( 1 + \\frac{2 R_1}{R_G} \\right) \\frac{R_3}{R_2}$; Extremely high input impedance ($> 10^9\\,\\Omega$) and exceptional CMRR ($> 100\\text{ dB}$).",
    "Analog Multiplexing (MUX): Time-Division Multiplexing (TDM) enabling single ADC and signal processing chain to monitor multiple sensor channels sequentially; Solid-state CMOS analog switches (e.g. CD4051); Channel switching transients and settling time constraints.",
    "Sample-and-Hold (S/H) Amplifier Circuit: Holding analog voltage constant during ADC conversion interval; Fast acquisition phase (FET switch closes, charging precision hold capacitor $C_h$); Hold phase (switch opens, ultra-low leakage buffer amplifier maintains voltage); Aperture time, acquisition time, and capacitor droop rate ($dV/dt = I_{\\text{leak}} / C_h$).",
    "Analog-to-Digital Conversion (ADC) Architectures: Successive Approximation Register (SAR ADC: binary search algorithm, medium speed $1-5\\text{ MSPS}$, 12-16 bit resolution), Flash ADC (parallel comparators, ultra-fast $1-10\\text{ GSPS}$, lower resolution 8-bit, requires $2^n - 1$ comparators), and Dual-Slope Integrating ADC (slow, immune to 50 Hz power noise, high resolution 18-24 bit).",
    "ADC Quantization Error & Resolution Metrics: Resolution: Smallest distinguishable voltage step $V_{\\text{LSB}} = \\frac{V_{\\text{ref}}}{2^n}$; Quantization error bounded by $\\pm \\frac{1}{2} V_{\\text{LSB}}$; Theoretical Signal-to-Quantization-Noise Ratio: $\\text{SQNR} = 6.02 n + 1.76\\text{ dB}$ for $n$-bit converter.",
    "Digital-to-Analog Converters (DAC): Reconstructing analog waveforms from digital codes; Weighted-Resistor DAC (requires wide spread of high-precision resistor values; impractical for high bit counts) vs R-2R Ladder DAC (requires only two precision resistor values $R$ and $2R$; scalable to 16 bits).",
    "Industrial DAQ Communication Buses: Standard physical interfaces: RS-232 / RS-485 serial buses (differential signaling over long distances), USB, Ethernet (Modbus TCP/IP), GPIB (IEEE-488 instrumentation bus), and CAN bus in automotive testing.",
    "University Examination Strategy: Draw the functional block diagram of a multi-channel Data Acquisition System (DAQ), analyze the three-op-amp instrumentation amplifier deriving the differential gain formula, compare SAR ADC vs Flash ADC, and calculate the LSB voltage and SQNR for a 12-bit ADC."
], [
    "Instrumentation Amp Differential Gain: $A_v = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\frac{R_3}{R_2}$; single resistor $R_G$ sets gain without disturbing common-mode balance.",
    "Flash ADC Exponential Comparator Count: Requires $2^n - 1$ internal analog comparators; an 8-bit Flash ADC requires 255 parallel comparators.",
    "SAR ADC Binary Search: Requires exactly $n$ clock cycles for an $n$-bit conversion, testing bits sequentially from MSB to LSB.",
    "Dual-Slope Integrating Noise Immunity: Integrates input over exact multiple of 50 Hz line period, completely rejecting power-line hum noise.",
    "ADC LSB Resolution Voltage: $V_{\\text{LSB}} = \\frac{V_{\\text{FSR}}}{2^n}$; a 12-bit ADC with 5.0 V range resolves steps down to $1.22\\text{ mV}$.",
    "Theoretical SQNR Equation: $\\text{SQNR} = 6.02 n + 1.76\\text{ dB}$; each additional bit of ADC resolution delivers roughly 6 dB of dynamic range.",
    "R-2R Ladder Superiority: Employs strictly two resistor sizes ($R$ and $2R$), avoiding the impossible component tolerances of binary weighted ladders.",
    "Sample-and-Hold Droop Rate: $\\frac{dV}{dt} = \\frac{I_{\\text{leakage}}}{C_h}$; capacitor voltage must not drift more than $1/2\\text{ LSB}$ during conversion.",
    "Anti-Aliasing Filter Mandate: Low-pass filter placed before ADC attenuation removes frequencies above $f_s/2$ to prevent false alias signals.",
    "Exam Gold Tip: Always explain that optical isolation in industrial DAQ prevents dangerous high-voltage ground loops from destroying connected computers."
])

# Save to sem3_bsc_physics_chem_data.json
with open('scripts/sem3_bsc_physics_chem_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in physics_chem dataset now: {len(data)}")
