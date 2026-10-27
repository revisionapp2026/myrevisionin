import json, os

data = {}
if os.path.exists('scripts/sem3_bsc_physics_chem_data.json'):
    with open('scripts/sem3_bsc_physics_chem_data.json', 'r', encoding='utf-8') as f:
        raw = json.load(f)
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
# 1. PHYSICS III: THERMAL PHYSICS / STATISTICS III (B.Sc)
# =========================================================================
add("Physics III: Thermal Physics / Statistics III", 1, "Kinetic Theory", [
    "Postulates of Classical Kinetic Theory of Gases: Microscopic assumptions: Point particles, continuous random motion, negligible molecular volume compared to container volume ($V_{\\text{mol}} \\ll V$), elastic collisions, and zero inter-molecular forces except during impact.",
    "Pressure Derivation of an Ideal Gas: Deriving pressure from momentum transfer: $P = \\frac{1}{3} \\rho \\overline{c^2} = \\frac{1}{3} \\frac{m N}{V} \\overline{c^2}$; Kinetic interpretation of absolute temperature: Translational kinetic energy per molecule $E_k = \\frac{1}{2} m \\overline{c^2} = \\frac{3}{2} k_B T$.",
    "Maxwell-Boltzmann Molecular Speed Distribution: Distribution function: $f(c) dc = 4\\pi \\left( \\frac{m}{2\\pi k_B T} \\right)^{3/2} c^2 \\exp\\left( -\\frac{m c^2}{2 k_B T} \\right) dc$; Derivation of characteristic molecular velocities.",
    "Characteristic Molecular Speeds: Most Probable Speed: $c_p = \\sqrt{\\frac{2 k_B T}{m}} = \\sqrt{\\frac{2 R T}{M}}$; Average (Mean) Speed: $\\bar{c} = \\sqrt{\\frac{8 k_B T}{\\pi m}} = \\sqrt{\\frac{8 R T}{\\pi M}}$; Root-Mean-Square (RMS) Speed: $c_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}}$; Ratio comparison: $c_p : \\bar{c} : c_{\\text{rms}} = 1 : 1.128 : 1.224$.",
    "Degrees of Freedom & Equipartition of Energy: Law of Equipartition: Every quadratic degree of freedom contributes $\\frac{1}{2} k_B T$ to average thermal energy; Monoatomic gas ($f = 3$ translational $\\implies C_v = \\frac{3}{2} R, \\gamma = 1.67$); Diatomic gas ($f = 5$ at room temperature $\\implies C_v = \\frac{5}{2} R, \\gamma = 1.40$).",
    "Mean Free Path Dynamics: Definition of mean free path $\\lambda$: Average distance traveled by a molecule between successive collisions; Formulation accounting for relative velocities: $\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2}$, where $n$ is molecular number density and $d$ is collision diameter.",
    "Transport Phenomenon: Viscosity in Gases: Molecular momentum transfer between gas layers moving with velocity gradient: Coefficient of viscosity $\\eta = \\frac{1}{3} \\rho \\bar{c} \\lambda$; Independence of pressure over wide density ranges; Temperature dependence $\\eta \\propto \\sqrt{T}$.",
    "Transport Phenomenon: Thermal Conductivity: Conduction of thermal kinetic energy across temperature gradient: Thermal conductivity $K = \\frac{1}{3} \\rho \\bar{c} \\lambda C_v = \\eta C_v$; Relationship between viscosity and thermal conductivity (Eucken's formula).",
    "Transport Phenomenon: Diffusion in Gases: Mass transport driven by concentration gradients: Fick's first law $J = -D \\frac{dn}{dz}$; Diffusion coefficient: $D = \\frac{1}{3} \\bar{c} \\lambda = \\frac{\\eta}{\\rho}$; Inversely proportional to pressure ($D \\propto 1/P$) and scaling as $T^{3/2}$.",
    "University Examination Strategy: Derive the Maxwell-Boltzmann distribution of speeds from phase space, derive expressions for $c_p, \\bar{c}$, and $c_{\\text{rms}}$, and prove that the viscosity of a gas is independent of pressure using mean free path theory."
], [
    "Ideal Gas Pressure Expression: $P = \\frac{1}{3} n m \\overline{c^2}$, linking macroscopic pressure directly to microscopic mean square speed.",
    "Most Probable Speed: $c_p = \\sqrt{\\frac{2 k_B T}{m}}$, located at the peak of the Maxwell speed distribution curve.",
    "RMS Speed Formula: $c_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}} = \\sqrt{\\frac{3 P}{\\rho}}$, governing total kinetic pressure.",
    "Equipartition Principle: Thermal energy is partitioned equally: $\\frac{1}{2} k_B T$ per active thermodynamic degree of freedom.",
    "Mean Free Path Equation: $\\lambda = \\frac{1}{\\sqrt{2} \\pi n d^2}$; increases inversely with pressure and diameter squared.",
    "Viscosity Pressure Invariance: Gas viscosity $\\eta = \\frac{1}{3} \\rho \\bar{c} \\lambda$ is independent of pressure because $\\rho \\propto P$ cancels $\\lambda \\propto 1/P$.",
    "Thermal Conductivity Relation: $K = \\eta C_v$; thermal transport scales directly with gaseous shear viscosity and heat capacity.",
    "Diffusion Coefficient Scaling: $D = \\frac{1}{3} \\bar{c} \\lambda \\propto \\frac{T^{3/2}}{P}$, accelerating at elevated temperatures and low pressures.",
    "Diatomic Heat Capacity Ratio: $\\gamma = C_p / C_v = 7/5 = 1.40$ for rigid diatomic molecules at ambient temperatures.",
    "Exam Gold Tip: Always remember that Maxwell-Boltzmann distribution assumes classical distinguishability of non-interacting gas molecules."
])

add("Physics III: Thermal Physics / Statistics III", 2, "Laws of Thermodynamics", [
    "Thermodynamic Systems & State Boundaries: System classification: Isolated (zero exchange of mass/energy), Closed (energy exchange only), and Open (both mass and energy exchange); State variables: Intensive (independent of size: $P, T, \\rho$) vs Extensive (additive: $V, U, S$).",
    "Zeroth Law of Thermodynamics: If systems A and B are each in thermal equilibrium with a third system C, then A and B are in thermal equilibrium with each other; Establishes the physical existence of empirical temperature as a valid state function.",
    "First Law of Thermodynamics & Internal Energy: Energy conservation principle: $d Q = d U + d W$; State function internal energy $U$; Path functions heat $Q$ and work $W$; Work done in quasi-static reversible expansion: $d W = P d V$; Sign conventions.",
    "Isothermal & Adiabatic Thermodynamic Processes: Isothermal process ($T = \\text{const}$): $P V = \\text{const}$, $W = n R T \\ln(V_2 / V_1)$, $\\Delta U = 0$; Adiabatic process ($d Q = 0$): Reversible equation $P V^\\gamma = \\text{const}$, $T V^{\\gamma-1} = \\text{const}$, $T^\\gamma P^{1-\\gamma} = \\text{const}$; Adiabatic work $W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$.",
    "Isochoric & Isobaric Processes: Isochoric ($V = \\text{const}$): $d W = 0 \\implies d Q = d U = n C_v d T$; Isobaric ($P = \\text{const}$): $d W = P \\Delta V$, $d Q = d H = n C_p d T$; Mayer's relation for ideal gas: $C_p - C_v = R$.",
    "General Heat Capacity Relations: For any real substance: $C_p - C_v = T \\left( \\frac{\\partial P}{\\partial T} \\right)_V \\left( \\frac{\\partial V}{\\partial T} \\right)_P = \\frac{T V \\beta^2}{\\kappa_T}$, where $\\beta$ is isobaric volume expansivity and $\\kappa_T$ is isothermal compressibility; Proving $C_p > C_v$ always.",
    "Real Gases & Van der Waals Equation of State: Accounting for finite molecular size ($b$) and intermolecular attractive forces ($a$): $\\left( P + \\frac{a n^2}{V^2} \\right) (V - n b) = n R T$; Critical state constants: $V_c = 3b$, $P_c = \\frac{a}{27 b^2}$, $T_c = \\frac{8a}{27 R b}$; Critical compressibility factor $Z_c = \\frac{P_c V_c}{R T_c} = \\frac{3}{8} = 0.375$.",
    "Joule-Thomson Expansion & Porous Plug Experiment: Isoenthalpic throttle process ($H = \\text{const}$); Joule-Thomson coefficient: $\\mu_{JT} = \\left( \\frac{\\partial T}{\\partial P} \\right)_H = \\frac{1}{C_p} \\left[ T \\left( \\frac{\\partial V}{\\partial T} \\right)_P - V \\right]$; For Van der Waals gas: $\\mu_{JT} \\approx \\frac{1}{C_p} \\left( \\frac{2a}{R T} - b \\right)$.",
    "Inversion Temperature & Gas Liquefaction: Temperature of inversion $T_i = \\frac{2a}{R b}$; If $T < T_i \\implies \\mu_{JT} > 0$ (throttling produces cooling); If $T > T_i \\implies \\mu_{JT} < 0$ (throttling produces heating); Regenerative cooling in Linde and Claude liquefaction cycles.",
    "University Examination Strategy: Derive the adiabatic expansion equation $P V^\\gamma = \\text{const}$, derive the expression for $C_p - C_v = \\frac{T V \\beta^2}{\\kappa_T}$, calculate critical constants from Van der Waals equation, and derive the Joule-Thomson inversion temperature."
], [
    "First Law Energy Conservation: $dQ = dU + dW$; internal energy $U$ is an exact state differential, whereas $Q$ and $W$ are path-dependent.",
    "Adiabatic Work Equation: $W = \\frac{n R (T_1 - T_2)}{\\gamma - 1} = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$; work performed entirely at expense of internal energy.",
    "Mayer's Universal Relation: $C_p - C_v = R$ for ideal gas; reflects additional work performed against atmosphere during isobaric expansion.",
    "General Heat Capacity Difference: $C_p - C_v = \\frac{T V \\beta^2}{\\kappa_T}$; since $T, V, \\kappa_T > 0$ and $\\beta^2 \\ge 0$, $C_p$ cannot be less than $C_v$.",
    "Van der Waals Constants: Volume correction $b = 4 V_{\\text{actual}}$; pressure correction $a/V^2$ accounts for long-range attractive dipoles.",
    "Critical Compressibility Ratio: $\\frac{P_c V_c}{R T_c} = \\frac{3}{8} = 0.375$, universal theoretical constant across all Van der Waals fluids.",
    "Joule-Thomson Throttle: Isenthalpic process ($dH = 0$); porous plug pressure drop produces thermal changes without external shaft work.",
    "Inversion Temperature Threshold: $T_i = \\frac{2a}{Rb}$; gas must be pre-cooled below $T_i$ before throttle expansion can produce cooling.",
    "Ideal Gas Throttle Invariance: For an ideal gas, $\\mu_{JT} = 0$; throttling produces zero temperature change because enthalpy depends solely on $T$.",
    "Exam Gold Tip: Always note that adiabatic curves on an indicator $P-V$ diagram are steeper than isothermal curves by a factor of $\\gamma$."
])

add("Physics III: Thermal Physics / Statistics III", 3, "Entropy", [
    "Second Law of Thermodynamics Formulations: Kelvin-Planck statement: It is impossible to construct a heat engine operating in a cycle that absorbs heat from a single reservoir and produces an equivalent amount of work; Clausius statement: Heat cannot spontaneously flow from a colder body to a hotter body without external work.",
    "Equivalence of Kelvin-Planck and Clausius Statements: Logical proof of equivalence: A hypothetical machine violating the Kelvin-Planck statement can be coupled with a standard heat pump to violate the Clausius statement, and vice versa.",
    "Reversibility & Carnot's Theorem: Reversible process: System and surroundings can be restored to initial states without net entropy production; Carnot's Principle: (1) No engine operating between two reservoirs can be more efficient than a reversible Carnot engine; (2) All reversible engines operating between the same two temperatures possess identical efficiency.",
    "Clausius Theorem & Definition of Entropy: Cyclic integral of heat divided by temperature: $\\oint \\frac{d Q_{\\text{rev}}}{T} = 0$ for any reversible cycle; Establishes the existence of an exact differential state function Entropy $S$: $d S = \\frac{d Q_{\\text{rev}}}{T}$.",
    "Clausius Inequality for Irreversible Cycles: For any arbitrary cyclic process: $\\oint \\frac{d Q}{T} \\le 0$, with equality holding strictly for reversible cycles; For an isolated system ($d Q = 0$): $\\Delta S \\ge 0$ (Principle of Entropy Increase).",
    "Entropy Calculations in Thermodynamic Processes: Ideal gas entropy change: $\\Delta S = n C_v \\ln\\left(\\frac{T_2}{T_1}\\right) + n R \\ln\\left(\\frac{V_2}{V_1}\\right) = n C_p \\ln\\left(\\frac{T_2}{T_1}\\right) - n R \\ln\\left(\\frac{P_2}{P_1}\\right)$; Entropy of phase change $\\Delta S_{\\text{trans}} = \\frac{L}{T_{\\text{trans}}}$.",
    "Entropy of Mixing & Gibbs Paradox: Mixing two distinct ideal gases at identical temperature and pressure: $\\Delta S_{\\text{mix}} = -R \\sum n_i \\ln x_i > 0$; Gibbs Paradox: Classical kinetic theory erroneously predicts positive entropy increase when mixing identical gases; Resolution via quantum indistinguishability ($N!$ factor).",
    "Temperature-Entropy (T-S) Indicator Diagrams: Thermodynamic cycles mapped on $T-S$ coordinates; Area enclosed under reversible path represents net heat absorbed: $Q = \\int T d S$; Carnot cycle maps to a perfect rectangle; Cycle efficiency $\\eta = \\frac{\\text{Area of Rectangle}}{\\text{Total Area under Top Isotherm}}$.",
    "Statistical Interpretation of Entropy & Boltzmann's Formula: Ludwig Boltzmann relation linking macroscopic thermodynamic entropy to microscopic statistical disorder: $S = k_B \\ln \\Omega$; $\\Omega$ represents thermodynamic probability (number of accessible microstates corresponding to macroscopic macrostate).",
    "University Examination Strategy: State and prove Clausius's Theorem starting from Carnot cycles, derive the entropy change formula for an ideal gas, explain the Gibbs paradox and its quantum resolution, and state Boltzmann's entropy formula."
], [
    "Clausius Theorem Equation: $\\oint \\frac{dQ_{\\text{rev}}}{T} = 0$; establishes that entropy $S$ is a conserved thermodynamic state variable.",
    "Entropy Increase Principle: In any real spontaneous irreversible process, the entropy of the universe strictly increases: $\\Delta S_{\\text{univ}} > 0$.",
    "Carnot Thermal Efficiency: $\\eta = 1 - \\frac{T_C}{T_H}$; depends strictly on absolute reservoir temperatures, independent of working substance.",
    "Boltzmann Entropy Law: $S = k_B \\ln \\Omega$, connecting microscopic degeneracy of microstates $\\Omega$ to macroscopic entropy.",
    "Ideal Gas Volume Entropy: $\\Delta S = n R \\ln(V_2 / V_1)$ during isothermal expansion; entropy increases due to spatial dispersion.",
    "Phase Transition Entropy: $\\Delta S = \\frac{m L}{T}$, where latent heat $L$ is absorbed reversibly at constant transition temperature $T$.",
    "Gibbs Paradox Resolution: Dividing phase space volume by $N!$ accounts for quantum identicalness, eliminating artificial mixing entropy.",
    "T-S Diagram Enclosed Area: The net work performed per cycle by a reversible heat engine equals the closed area on its $T-S$ plot.",
    "Irreversible Heat Transfer Entropy: Conduction of heat $Q$ from $T_1$ to $T_2 < T_1$ yields positive entropy: $\\Delta S = Q(1/T_2 - 1/T_1) > 0$.",
    "Exam Gold Tip: Always emphasize that while the entropy of an open subsystem may decrease locally, the total entropy of system plus surroundings must increase."
])

add("Physics III: Thermal Physics / Statistics III", 4, "Heat Engines", [
    "Heat Engine Operational Fundamentals: Thermodynamic device converting absorbed thermal heat continuously into mechanical shaft work; Essential components: Hot reservoir (heat source at $T_H$), Working substance (gas or fluid undergoing cyclic process), and Cold reservoir (heat sink at $T_C$).",
    "Carnot Cycle Sequence & Operations: Ideal reversible four-stroke cycle: (1) Reversible isothermal expansion at $T_H$ ($Q_H = n R T_H \\ln(V_2 / V_1)$); (2) Reversible adiabatic expansion ($T_H \\to T_C$); (3) Reversible isothermal compression at $T_C$ ($Q_C = n R T_C \\ln(V_3 / V_4)$); (4) Reversible adiabatic compression ($T_C \\to T_H$).",
    "Thermal Efficiency of Carnot Engine: Work output $W = Q_H - Q_C$; Thermal efficiency $\\eta = \\frac{W}{Q_H} = 1 - \\frac{Q_C}{Q_H} = 1 - \\frac{T_C}{T_H}$; Proving that $\\eta < 1$ always (cannot reach 100% efficiency unless sink temperature $T_C = 0\\text{ K}$).",
    "Carnot Refrigerator & Heat Pump: Operating Carnot cycle in reverse by supplying mechanical shaft work $W$; Refrigerator Coefficient of Performance (COP): $\\beta = \\frac{Q_C}{W} = \\frac{T_C}{T_H - T_C}$; Heat Pump COP: $\\gamma = \\frac{Q_H}{W} = \\frac{T_H}{T_H - T_C} = \\beta + 1$.",
    "Otto Cycle (Spark-Ignition Internal Combustion): Ideal air-standard cycle for petrol engines: Two adiabatic and two isochoric (constant volume) processes; Compression ratio $r = V_1 / V_2$; Thermal efficiency: $\\eta_{\\text{Otto}} = 1 - \\frac{1}{r^{\\gamma - 1}}$; Practical limits of compression ratio ($r \\approx 7-10$) due to fuel auto-ignition knocking.",
    "Diesel Cycle (Compression-Ignition Engine): Ideal air-standard cycle: Constant pressure heat addition, adiabatic expansion, constant volume rejection, adiabatic compression; Cut-off ratio $r_c = V_3 / V_2$; Efficiency: $\\eta_{\\text{Diesel}} = 1 - \\frac{1}{r^{\\gamma-1}} \\left[ \\frac{r_c^\\gamma - 1}{\\gamma(r_c - 1)} \\right]$; Higher compression ratios ($r \\approx 15-22$).",
    "Rankine Steam Power Cycle: Working fluid undergoes phase change (water to superheated steam); Boiler, steam turbine, condenser, and feed pump; Reversible Rankine cycle efficiency; Improvements via reheating and regenerative feed water heaters.",
    "Stirling & Ericsson Regenerative Engines: Stirling cycle (two isotherms and two isochores with ideal regenerator); Ericsson cycle (two isotherms and two isobars); Both achieve theoretical Carnot efficiency $\\eta = 1 - T_C / T_H$ when utilizing perfect internal regeneration.",
    "Third Law of Thermodynamics (Nernst Heat Theorem): Nernst theorem: As absolute temperature approaches zero ($T \\to 0\\text{ K}$), the entropy change $\\Delta S$ for any isothermal physical or chemical process approaches zero; Planck's formulation: Entropy of all pure, perfectly crystalline substances at $T = 0\\text{ K}$ is zero ($S_0 = 0$); Unattainability of absolute zero.",
    "University Examination Strategy: Derive the efficiency of a Carnot engine from $P-V$ indicator diagrams, derive the efficiency of the Otto cycle in terms of compression ratio $r$, calculate the COP of a Carnot refrigerator, and state the Third Law of Thermodynamics."
], [
    "Carnot Efficiency Maximum: $\\eta = 1 - \\frac{T_C}{T_H}$; establishes the absolute upper thermodynamic limit for any heat engine.",
    "Refrigerator COP Expression: $\\text{COP} = \\frac{Q_C}{W} = \\frac{T_C}{T_H - T_C}$; decreases drastically as target temperature drops.",
    "Heat Pump COP Advantage: $\\text{COP}_{\\text{HP}} = \\text{COP}_{\\text{Ref}} + 1 = \\frac{T_H}{T_H - T_C}$; delivers more thermal heat than electrical work consumed.",
    "Otto Cycle Efficiency: $\\eta = 1 - \\frac{1}{r^{\\gamma-1}}$, scaling monotonically with volumetric compression ratio $r = V_{\\max} / V_{\\min}$.",
    "Diesel vs Otto Efficiency: For identical compression ratio $r$, Otto cycle is more efficient; however, Diesel engines achieve higher actual $r$.",
    "Rankine Steam Cycle: The baseline operational cycle for thermal and nuclear steam turbine power generation stations.",
    "Stirling Regenerator Value: Stores heat during isochoric cooling and returns it during isochoric heating, matching Carnot efficiency.",
    "Nernst Heat Theorem: $\\lim_{T \\to 0} \\Delta S = 0$, implying all reactions at absolute zero proceed with zero entropy change.",
    "Unattainability of Absolute Zero: Achieving $T = 0\\text{ K}$ requires an infinite sequence of adiabatic demagnetization steps.",
    "Exam Scoring Tip: Always show that the Carnot cycle consists of two isotherms and two adiabatics, and draw the closed loop clearly on both $P-V$ and $T-S$ planes."
])

add("Physics III: Thermal Physics / Statistics III", 5, "Statistical Distributions", [
    "Statistical Mechanics Foundational Philosophy: Bridging microscopic quantum/classical states of particles to macroscopic bulk thermodynamic properties; Concept of Phase Space: $6N$-dimensional hyperspace spanned by $3N$ generalized coordinates and $3N$ conjugate momenta.",
    "Phase Space Partitioning & Elementary Cells: Microscopic volume element: $d\\Gamma = \\prod_{i=1}^{3N} dq_i dp_i$; Partitioning into discrete quantum cells of volume $h^3$ ($h$ is Planck's constant); State of macrostate defined by total energy $E$, volume $V$, and particle number $N$.",
    "Microstates vs Macrostates & Ensembles: Macrostate: Defined by gross thermodynamic variables $(N, V, E)$; Microstate: Specific microscopic configuration of coordinates and momenta; Thermodynamic probability $\\Omega$: Total count of accessible microstates for given macrostate.",
    "Postulate of Equal A Priori Probabilities: Foundational axiom of statistical mechanics: In an isolated system in equilibrium, all accessible microstates corresponding to the same macrostate are equally likely to occur.",
    "Maxwell-Boltzmann (M-B) Classical Statistics: Applicable to identical, distinguishable particles with continuous energy levels; Zero quantum restrictions on cell occupancy; Thermodynamic probability: $\\Omega_{\\text{MB}} = N! \\prod \\frac{g_i^{n_i}}{n_i!}$; Distribution law: $n_i = g_i e^{-\\alpha - \\beta E_i} = g_i e^{-E_i / k_B T}$.",
    "Quantum Statistics: Indistinguishability & Symmetry: Identical quantum particles are fundamentally indistinguishable; Wavefunctions under particle exchange: Symmetric (Bosons, integer spin $0, 1, 2$) vs Anti-symmetric (Fermions, half-integer spin $1/2, 3/2$).",
    "Bose-Einstein (B-E) Quantum Statistics: Applicable to identical, indistinguishable Bosons; Obey symmetric wavefunctions; Zero occupancy restriction per quantum state; Thermodynamic probability: $\\Omega_{\\text{BE}} = \\prod \\frac{(n_i + g_i - 1)!}{n_i! (g_i - 1)!}$; Distribution law: $n_i = \\frac{g_i}{e^{(E_i - \\mu)/k_B T} - 1}$.",
    "Fermi-Dirac (F-D) Quantum Statistics: Applicable to identical, indistinguishable Fermions; Obey anti-symmetric wavefunctions and Pauli Exclusion Principle: Maximum of one particle per quantum state ($n_i \\le g_i$); Thermodynamic probability: $\\Omega_{\\text{FD}} = \\prod \\frac{g_i!}{n_i! (g_i - n_i)!}$; Distribution law: $n_i = \\frac{g_i}{e^{(E_i - \\mu)/k_B T} + 1}$.",
    "Classical Limit of Quantum Distributions: At high temperatures ($T \\gg 0$) and low particle densities ($n \\lambda_{\\text{thermal}}^3 \\ll 1$), fugacity $e^{\\mu / k_B T} \\ll 1$; The exponential term $e^{(E_i - \\mu)/k_B T} \\gg 1$; Both B-E and F-D distributions converge to classical Maxwell-Boltzmann statistics: $n_i \\to g_i e^{-(E_i - \\mu)/k_B T}$.",
    "University Examination Strategy: Derive the Maxwell-Boltzmann distribution using Lagrange multipliers, derive the Fermi-Dirac distribution function using Pauli exclusion constraints, and compare M-B, B-E, and F-D statistics in a summary table."
], [
    "Phase Space Dimension: Consists of $2f$ dimensions ($f$ position coordinates and $f$ conjugate momenta), with cell volume $h^f$.",
    "Equal A Priori Probability: In equilibrium, every accessible microscopic quantum state has exactly identical probability of occupation.",
    "Maxwell-Boltzmann Occupation: $n_i = g_i e^{-(E_i - \\mu)/k_B T}$; valid for dilute classical distinguishable particles.",
    "Bose-Einstein Occupation: $n_i = \\frac{g_i}{e^{(E_i - \\mu)/k_B T} - 1}$; denominator minus sign permits unlimited multi-particle condensation.",
    "Fermi-Dirac Occupation: $n_i = \\frac{g_i}{e^{(E_i - \\mu)/k_B T} + 1}$; denominator plus sign enforces Pauli exclusion ($n_i / g_i \\le 1$).",
    "Chemical Potential Sign in Bosons: For Bosons, chemical potential $\\mu$ must be strictly negative ($\\mu \\le 0$) to keep occupation non-negative.",
    "Fermi Energy Definition: Highest occupied single-particle energy level at absolute zero temperature ($T = 0\\text{ K}$): $E_F = \\mu(0)$.",
    "Classical Convergence Threshold: Quantum effects vanish when thermal de Broglie wavelength $\\lambda_{\\text{th}} = \\frac{h}{\\sqrt{2\\pi m k_B T}}$ is much smaller than interparticle spacing.",
    "Photon Gas Property: Photons are bosons with chemical potential identically zero ($\\mu = 0$) because particle number is not conserved.",
    "Exam Gold Tip: In statistical distribution derivations, always set the total particle constraint $\\sum n_i = N$ and total energy constraint $\\sum n_i E_i = E$."
])

# =========================================================================
# 2. THERMAL PHYSICS & STATISTICAL MECHANICS (B.Sc)
# =========================================================================
add("Thermal Physics & Statistical Mechanics", 1, "Kinetic Theory", [
    "Microscopic Foundations of Thermal Phenomena: Statistical description of macroscopic equilibrium states; Ensembles of weakly interacting particles; Phase space trajectory and Liouville's Theorem on phase space volume conservation ($d\\rho / dt = 0$).",
    "Intermolecular Potential Energy Models: Lennard-Jones (6-12) potential: $V(r) = 4\\epsilon \\left[ \\left( \\frac{\\sigma}{r} \\right)^{12} - \\left( \\frac{\\sigma}{r} \\right)^6 \\right]$; Steep short-range Pauli repulsive core ($r^{-12}$) and long-range attractive van der Waals dispersion ($r^{-6}$); Equilibrium intermolecular separation $r_0 = 2^{1/6} \\sigma$.",
    "Real Gas Deviations & Compressibility Factor: Compressibility factor: $Z = \\frac{P V}{n R T}$; Deviations from unity ($Z = 1$) under high pressure and low temperature; Boyle temperature $T_B = \\frac{a}{R b}$: Temperature at which real gas behaves as ideal gas over wide pressure range ($[dZ/dP]_{P \\to 0} = 0$).",
    "Virial Equation of State: Power series expansion in molar density: $\\frac{P V_m}{R T} = 1 + \\frac{B(T)}{V_m} + \\frac{C(T)}{V_m^2} + \\dots$; Second virial coefficient $B(T) = b - \\frac{a}{R T}$ capturing two-body molecular interactions; Temperature dependence and inversion.",
    "Maxwellian Velocity Space & Cartesian Coordinates: Component distribution: $f(v_x) dv_x = \\left( \\frac{m}{2\\pi k_B T} \\right)^{1/2} \\exp\\left( -\\frac{m v_x^2}{2 k_B T} \\right) dv_x$; Gaussian distribution centered at zero; Variance $\\sigma^2 = \\frac{k_B T}{m}$; Demonstrating mutual independence of velocity components: $f(v_x, v_y, v_z) = f(v_x) f(v_y) f(v_z)$.",
    "Molecular Effusion & Graham's Law: Effusion: Escape of gas molecules through a microscopic pinhole into vacuum without collisions; Molecular impingement rate: $\\Phi = \\frac{1}{4} n \\bar{c} = \\frac{P}{\\sqrt{2\\pi m k_B T}}$; Derivation of Graham's law: Rate of effusion is inversely proportional to square root of molecular mass.",
    "Thermal Transpiration & Knudsen Effect: Equilibrium state of two gas vessels connected by a fine capillary tube: When tube diameter $d \\ll \\lambda$ (molecular regime), equilibrium occurs when effusion fluxes balance: $\\frac{P_1}{\\sqrt{T_1}} = \\frac{P_2}{\\sqrt{T_2}}$; Contrast with hydrodynamic regime ($P_1 = P_2$).",
    "Rotational & Vibrational Heat Capacities: Quantum mechanical quantization of energy levels; Characteristic temperatures: Rotational temperature $\\theta_{\\text{rot}} = \\frac{\\hbar^2}{2 I k_B}$ (typically 1-10 K) and Vibrational temperature $\\theta_{\\text{vib}} = \\frac{\\hbar \\omega}{k_B}$ (typically 1000-3000 K); Stepwise freezing-out of degrees of freedom.",
    "Cryogenic Techniques & Adiabatic Demagnetization: Producing temperatures below 1 Kelvin; Paramagnetic salts (e.g. gadolinium sulfate, cerium magnesium nitrate); Aligning magnetic dipoles in strong field, removing heat of magnetization via liquid helium, followed by adiabatic isolation and magnetic field removal; Cooling via dipole disordering.",
    "University Examination Strategy: Derive the effusion rate formula $\\Phi = \\frac{1}{4} n \\bar{c}$ from the Maxwell distribution, calculate the Boyle temperature from the Virial equation of state, and explain the stepwise freezing-out of rotational and vibrational degrees of freedom."
], [
    "Liouville's Theorem: The density of representative points in phase space remains constant along any trajectory: $\\frac{d\\rho}{dt} = 0$.",
    "Lennard-Jones Minima: Equilibrium separation occurs at $r_0 = 2^{1/6} \\sigma \\approx 1.122 \\sigma$ with potential depth $-\\epsilon$.",
    "Boyle Temperature: $T_B = \\frac{a}{Rb}$; at this temperature, attractive and repulsive forces cancel, yielding $Z \\approx 1$ at low pressures.",
    "Effusion Flux Formula: $\\Phi = \\frac{P}{\\sqrt{2\\pi m k_B T}}$, measuring molecules striking unit area per second.",
    "Knudsen Thermal Transpiration: $\\frac{P_1}{\\sqrt{T_1}} = \\frac{P_2}{\\sqrt{T_2}}$ in molecular effusion regime, creating pressure differences across temperature gradients.",
    "Independent Velocity Components: Probability density in 3D velocity space factors into three independent 1D Gaussians.",
    "Rotational Quantum Threshold: Below $\\theta_{\\text{rot}}$, thermal energy $k_B T$ cannot excite first rotational quantum state, freezing out rotational $C_v$.",
    "Vibrational Freezing Point: Most diatomic molecules (like $N_2, O_2$) have inactive vibrational modes at room temperature because $\\theta_{\\text{vib}} \\gg 300\\text{ K}$.",
    "Adiabatic Demagnetization: Removes magnetic field from isolated paramagnetic salt, forcing entropy to shift from lattice to spin dipoles, causing extreme cooling.",
    "Exam Gold Tip: In questions on degrees of freedom, sketch the curve of $C_v$ vs temperature for molecular hydrogen ($H_2$) showing transitions from $3/2 R$ to $5/2 R$ to $7/2 R$."
])

add("Thermal Physics & Statistical Mechanics", 2, "Laws of Thermodynamics", [
    "Thermodynamic Potentials & Legendre Transformations: Systematically transforming state variables to obtain characteristic thermodynamic potentials: Internal Energy $U(S, V)$, Helmholtz Free Energy $F(T, V) = U - T S$, Enthalpy $H(S, P) = U + P V$, and Gibbs Free Energy $G(T, P) = H - T S$.",
    "Fundamental Differential Thermodynamic Equations: $d U = T d S - P d V$; $d H = T d S + V d P$; $d F = -S d T - P d V$; $d G = -S d T + V d P$; Utilizing exact differential properties to derive Maxwell relations.",
    "The Four Maxwell Thermodynamic Relations: (1) $\\left( \\frac{\\partial T}{\\partial V} \\right)_S = -\\left( \\frac{\\partial P}{\\partial S} \\right)_V$; (2) $\\left( \\frac{\\partial T}{\\partial P} \\right)_S = \\left( \\frac{\\partial V}{\\partial S} \\right)_P$; (3) $\\left( \\frac{\\partial S}{\\partial V} \\right)_T = \\left( \\frac{\\partial P}{\\partial T} \\right)_V$; (4) $\\left( \\frac{\\partial S}{\\partial P} \\right)_T = -\\left( \\frac{\\partial V}{\\partial T} \\right)_P$.",
    "Thermodynamic Equations of State (Energy Equations): First energy equation: $\\left( \\frac{\\partial U}{\\partial V} \\right)_T = T \\left( \\frac{\\partial P}{\\partial T} \\right)_V - P$; Proving that internal energy of an ideal gas depends solely on temperature: $\\left( \\frac{\\partial U}{\\partial V} \\right)_T = 0$; For Van der Waals gas: $\\left( \\frac{\\partial U}{\\partial V} \\right)_T = \\frac{a}{V^2}$.",
    "Second Energy Equation: Rate of enthalpy variation with pressure: $\\left( \\frac{\\partial H}{\\partial P} \\right)_T = V - T \\left( \\frac{\\partial V}{\\partial T} \\right)_P$; Proving that enthalpy of an ideal gas is independent of pressure.",
    "Phase Transitions: First-Order Transitions: Characterized by discontinuous first derivatives of Gibbs free energy (discontinuities in entropy $\\Delta S = L/T$ and volume $\\Delta V$); Latent heat absorption; Clausius-Clapeyron equation.",
    "Clausius-Clapeyron Equation Derivation: Equating chemical potentials across phase boundary: $d G_1 = d G_2 \\implies -S_1 d T + V_1 d P = -S_2 d T + V_2 d P$; Slope of coexistence curve: $\\frac{d P}{d T} = \\frac{\\Delta S}{\\Delta V} = \\frac{L}{T (V_2 - V_1)}$; Applications: Depression of freezing point under pressure for ice (where $V_{\\text{liquid}} < V_{\\text{solid}}$).",
    "Second-Order Phase Transitions & Ehrenfest Equations: Continuous first derivatives of Gibbs energy (zero latent heat, zero volume change); Discontinuous second derivatives: Discontinuities in heat capacity $\\Delta C_p$, expansivity $\\Delta \\beta$, and compressibility $\\Delta \\kappa_T$; Ehrenfest relations: $\\frac{d P}{d T} = \\frac{\\Delta C_p}{T V \\Delta \\beta} = \\frac{\\Delta \\beta}{\\Delta \\kappa_T}$.",
    "Chemical Potential & Multi-Component Open Systems: Gibbs-Duhem equation: $S d T - V d P + \\sum N_i d\\mu_i = 0$; Chemical potential $\\mu_i = \\left( \\frac{\\partial G}{\\partial N_i} \\right)_{T, P}$; Thermodynamic equilibrium across open boundaries requires equality of chemical potentials ($\\mu_1 = \\mu_2$).",
    "University Examination Strategy: Derive the four Maxwell thermodynamic relations using Legendre potentials, derive the Clausius-Clapeyron equation, prove the first energy equation $\\left( \\frac{\\partial U}{\\partial V} \\right)_T = T \\left( \\frac{\\partial P}{\\partial T} \\right)_V - P$, and state Ehrenfest's classification of phase transitions."
], [
    "Helmholtz Free Energy: $F = U - TS$; thermodynamic work function minimized at equilibrium under constant temperature and volume.",
    "Gibbs Free Energy: $G = H - TS$; minimized at thermodynamic equilibrium for processes occurring under constant temperature and pressure.",
    "Maxwell Third Relation: $\\left( \\frac{\\partial S}{\\partial V} \\right)_T = \\left( \\frac{\\partial P}{\\partial T} \\right)_V$, connecting thermal entropy to measurable macroscopic pressure variations.",
    "First Energy Equation: $\\left( \\frac{\\partial U}{\\partial V} \\right)_T = T \\left( \\frac{\\partial P}{\\partial T} \\right)_V - P$; proves ideal gas internal energy is pure function of temperature.",
    "Clausius-Clapeyron Formula: $\\frac{dP}{dT} = \\frac{L}{T(V_2 - V_1)}$, governing slopes of boiling and melting equilibrium curves.",
    "Ice Melting Under Pressure: Because ice expands upon freezing ($V_{\\text{solid}} > V_{\\text{liquid}}$), $\\frac{dP}{dT} < 0$, lowering ice melting point under pressure.",
    "Ehrenfest Second-Order Transition: Characterized by zero latent heat ($L = 0$) but sharp finite jumps in heat capacity $C_p$ (e.g. superconducting transition).",
    "Chemical Potential Invariance: At thermodynamic phase equilibrium, the chemical potential of a substance must be identical across all coexisting phases.",
    "Gibbs-Duhem Constraint: $\\sum N_i d\\mu_i = -S dT + V dP$; establishes that chemical potentials cannot vary independently.",
    "Exam Gold Tip: Always remember the natural variables for each potential: $U(S, V)$, $H(S, P)$, $F(T, V)$, and $G(T, P)$."
])

add("Thermal Physics & Statistical Mechanics", 3, "Entropy", [
    "Statistical Mechanical Definition of Entropy: Thermodynamic entropy formulated as logarithmic measure of statistical phase space volume: $S = k_B \\ln \\Omega(E, V, N)$; Invariance under canonical transformations; Additivity of entropy for weakly coupled subsystems: $S_{1+2} = S_1 + S_2$.",
    "Microcanonical Ensemble (N, V, E): Statistical ensemble of completely isolated systems having strictly fixed particle number $N$, volume $V$, and total energy in narrow shell $[E, E + \\delta E]$; Density of states $g(E)$; Partition function: $\\Omega(E) = \\int \\delta(E - H(q, p)) d\\Gamma$; Fundamental temperature relation: $\\frac{1}{T} = \\left( \\frac{\\partial S}{\\partial E} \\right)_{V, N}$.",
    "Canonical Ensemble (N, V, T): Statistical ensemble of closed systems in thermal equilibrium with a large heat reservoir at constant temperature $T$; Canonical Partition Function: $Z(T, V, N) = \\sum_i e^{-\\beta E_i} = \\frac{1}{N! h^{3N}} \\int e^{-\\beta H(q, p)} d\\Gamma$, where $\\beta = \\frac{1}{k_B T}$.",
    "Thermodynamic Connections from Canonical Partition Function: Helmholtz free energy: $F = -k_B T \\ln Z$; Internal energy: $U = -\\frac{\\partial \\ln Z}{\\partial \\beta} = k_B T^2 \\frac{\\partial \\ln Z}{\\partial T}$; Pressure: $P = k_B T \\left( \\frac{\\partial \\ln Z}{\\partial V} \\right)_T$; Entropy: $S = -\\left( \\frac{\\partial F}{\\partial T} \\right)_V = k_B \\ln Z + \\frac{U}{T}$.",
    "Ideal Gas in Canonical Ensemble: Single particle partition function: $z_1 = V \\left( \\frac{2\\pi m k_B T}{h^2} \\right)^{3/2} = \\frac{V}{\\lambda_{\\text{th}}^3}$; $N$-particle partition function with Gibbs correction: $Z_N = \\frac{z_1^N}{N!}$; Stirling's approximation: $\\ln N! \\approx N \\ln N - N$.",
    "Sackur-Tetrode Equation for Entropy: Deriving absolute entropy of a monoatomic ideal gas from first principles: $S = N k_B \\left[ \\ln\\left( \\frac{V}{N} \\left( \\frac{2\\pi m k_B T}{h^2} \\right)^{3/2} \\right) + \\frac{5}{2} \\right]$; Complete resolution of Gibbs paradox; Conforms to extensivity.",
    "Grand Canonical Ensemble (mu, V, T): Open systems exchanging both energy and particles with reservoir at temperature $T$ and chemical potential $\\mu$; Grand Canonical Partition Function: $\\Xi(T, V, \\mu) = \\sum_{N=0}^\\infty e^{\\beta \\mu N} Z_N = \\sum_{i} e^{-\\beta (E_i - \\mu N_i)}$; Grand potential: $\\Phi_G = -k_B T \\ln \\Xi = -P V$.",
    "Energy Fluctuations in Canonical Ensemble: Mean square energy fluctuation: $\\sigma_E^2 = \\langle E^2 \\rangle - \\langle E \\rangle^2 = k_B T^2 C_v$; Relative energy fluctuation: $\\frac{\\sigma_E}{\\langle E \\rangle} = \\frac{\\sqrt{k_B T^2 C_v}}{U} \\propto \\frac{1}{\\sqrt{N}}$; In macroscopic limit ($N \\to 10^{23}$), fluctuations vanish ($10^{-11}$), proving equivalence of ensembles.",
    "Information Theory & Shannon Entropy: Claude Shannon's statistical information entropy: $H = -\\sum p_i \\ln p_i$; Jaynes' Maximum Entropy Principle: Thermodynamic equilibrium distribution is the unique probability distribution that maximizes Shannon entropy subject to known macroscopic constraints.",
    "University Examination Strategy: Derive the Sackur-Tetrode formula for the entropy of an ideal gas starting from the canonical partition function, calculate mean square energy fluctuations in the canonical ensemble, and relate the grand potential to pressure."
], [
    "Statistical Temperature Definition: $\\frac{1}{T} = \\left( \\frac{\\partial S}{\\partial E} \\right)_{V, N}$, showing temperature regulates heat flow between coupled microcanonical systems.",
    "Canonical Partition Function: $Z = \\sum e^{-\\beta E_i}$; encapsulates all microscopic energy eigenvalues to generate thermodynamic potentials.",
    "Helmholtz Free Energy Bridge: $F = -k_B T \\ln Z$, providing the fundamental analytical bridge connecting microphysics to macrophysics.",
    "Sackur-Tetrode Absolute Entropy: $S = N k_B \\left[ \\ln\\left( \\frac{V}{N \\lambda_{\\text{th}}^3} \\right) + \\frac{5}{2} \\right]$; contains Planck's constant $h$ in a macroscopic thermodynamic formula.",
    "Gibbs Extensivity Factor: Dividing $Z_N$ by $N!$ ensures entropy is extensive ($S(\\lambda N, \\lambda V) = \\lambda S(N, V)$).",
    "Grand Potential Equation: $\\Phi_G = -k_B T \\ln \\Xi = -PV$; directly yields system pressure and equation of state.",
    "Ensemble Equivalence: Relative energy fluctuations scale as $O(1/\\sqrt{N})$; for macroscopic systems ($N \\sim 10^{23}$), microcanonical and canonical predictions are indistinguishable.",
    "Fluctuation-Dissipation Metric: $\\langle (E - \\langle E \\rangle)^2 \\rangle = k_B T^2 C_v$; variance in energy is directly proportional to heat capacity.",
    "Shannon Entropy Metric: $S = -k_B \\sum p_i \\ln p_i$; unifies statistical mechanics with mathematical communication theory.",
    "Exam Gold Tip: Always use Stirling's approximation $\\ln N! \\approx N \\ln N - N$ when simplifying the logarithm of canonical partition functions."
])

add("Thermal Physics & Statistical Mechanics", 4, "Heat Engines", [
    "Thermodynamic Availability & Exergy Concept: Maximum theoretical work extractable from a system as it comes into complete thermal and mechanical equilibrium with its ambient environment ($T_0, P_0$); Exergy (Availability function): $A = (U - T_0 S + P_0 V) - (U_0 - T_0 S_0 + P_0 V_0)$.",
    "Gouy-Stodola Theorem of Lost Work: Destroyed exergy (irreversibility) is directly proportional to total entropy generation: $W_{\\text{lost}} = T_0 \\Delta S_{\\text{univ}} = T_0 (\\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}})$; Quantifies irreversible thermodynamic friction and throttling losses.",
    "Finite-Time Thermodynamics & Curzon-Ahlborn Efficiency: Classical Carnot efficiency assumes infinitely slow reversible heat transfer (zero output power); Modeling heat engines with finite heat transfer rate: $\\dot{Q} = U A \\Delta T$; Maximum power output efficiency: $\\eta_{CA} = 1 - \\sqrt{\\frac{T_C}{T_H}}$; Provides realistic upper bound for real power plants.",
    "Brayton Gas Turbine Cycle: Open and closed gas turbine cycles; Two reversible isobars and two reversible isentropics; Pressure ratio $r_p = P_2 / P_1$; Ideal thermal efficiency: $\\eta_{\\text{Brayton}} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$; Aircraft jet propulsion and combined-cycle gas turbine (CCGT) power plants.",
    "Combined Cycle Power Plants (CCGT): Coupling a high-temperature Brayton gas turbine cycle (topping cycle) with a Rankine steam turbine cycle (bottoming cycle) utilizing exhaust waste heat; Reaching practical overall thermal efficiencies exceeding 60 percent.",
    "Thermomagnetic Engines & Pyromagnetic Generators: Utilizing temperature-dependent magnetization of ferromagnetic materials; Heating above Curie temperature $T_c$ causes loss of magnetization; Cooling restores ferromagnetism; Generating mechanical work or electrical voltage directly from cyclic thermal heating.",
    "Thermoelectric Generators & Seebeck Effect: Direct conversion of thermal temperature differentials into electrical energy: Seebeck coefficient $S = \\Delta V / \\Delta T$; Figure of merit $Z T = \\frac{S^2 \\sigma T}{\\kappa}$, where $\\sigma$ is electrical conductivity and $\\kappa$ is thermal conductivity; Peltier cooling effect.",
    "Cryogenic Refrigeration Cycles (Stirling & Gifford-McMahon): Cryocoolers producing liquid nitrogen (77 K) and liquid helium (4.2 K) temperatures; Closed regenerative displacement cycles; Helium gas as working medium; Pulse tube refrigerators eliminating moving cold parts.",
    "Negative Absolute Temperatures in Spin Systems: Isolated spin systems in strong magnetic fields with bounded upper energy levels; Population inversion where higher energy states have greater occupancy than lower states: $\\frac{1}{T} = \\frac{\\partial S}{\\partial E} < 0$; Negative absolute temperatures are hotter than $+\\infty$ K (heat flows from negative $T$ to positive $T$).",
    "University Examination Strategy: Derive the Curzon-Ahlborn efficiency $\\eta = 1 - \\sqrt{T_C/T_H}$ for a heat engine operating at maximum power, derive the efficiency of the Brayton cycle in terms of pressure ratio, and explain the concept of negative absolute temperature."
], [
    "Exergy Destruction Law: Irreversible thermodynamic processes destroy available work at rate $W_{\\text{lost}} = T_0 S_{\\text{gen}}$ (Gouy-Stodola).",
    "Curzon-Ahlborn Realism: $\\eta_{CA} = 1 - \\sqrt{\\frac{T_C}{T_H}}$; accurately predicts practical operating efficiencies of nuclear and coal power plants.",
    "Brayton Cycle Efficiency: $\\eta = 1 - r_p^{-(\\gamma-1)/\\gamma}$; efficiency governed entirely by pressure compression ratio across compressor.",
    "Combined Cycle High Efficiency: Merging Brayton gas turbine topping cycle with Rankine steam bottoming cycle pushes plant efficiency over 60%.",
    "Thermoelectric Figure of Merit: $ZT = \\frac{S^2 \\sigma T}{\\kappa}$; high electrical conductivity coupled with low thermal conductivity maximizes efficiency.",
    "Seebeck Voltage Generation: $\\Delta V = S \\Delta T$; thermal gradient drives diffusion of charge carriers across semiconductor junctions.",
    "Negative Temperature Physics: Requires an upper bound on energy spectrum; occurs in nuclear spin systems during population inversion.",
    "Negative Temperature Thermodynamics: $T < 0\\text{ K}$ is not colder than absolute zero; it is thermodynamically hotter than any positive temperature.",
    "Peltier Cooling Heat Absorption: Electric current driving through dissimilar conductor junctions absorbs or releases heat at rate $Q = \\Pi I$.",
    "Exam Scoring Tip: Clarify that finite-time thermodynamics bridges the gap between zero-power ideal Carnot limits and real-world engineering plants."
])

add("Thermal Physics & Statistical Mechanics", 5, "Statistical Distributions", [
    "Quantum Ideal Gases & Grand Partition Function: Formulating grand potential for non-interacting quantum gases: $\\Phi_G = \\mp k_B T \\sum_i \\ln\\left( 1 \\mp e^{-\\beta(E_i - \\mu)} \\right)$, where upper sign corresponds to Fermions and lower sign to Bosons; Thermodynamic pressure $P V = -\\Phi_G$.",
    "Density of States in Continuous Momentum Space: Number of quantum states in spatial volume $V$ with momentum between $p$ and $p + dp$: $g(p) dp = g_s \\frac{4\\pi V p^2 dp}{h^3}$; For non-relativistic particles ($E = p^2 / 2m$): Density of states $g(E) dE = g_s \\frac{2\\pi V}{h^3} (2m)^{3/2} \\sqrt{E} dE$, where $g_s = 2s + 1$ is spin degeneracy.",
    "Fermi Gas at Absolute Zero ($T = 0\\text{ K}$): Step-function Fermi distribution: $f(E) = 1$ for $E \\le E_F$, and $f(E) = 0$ for $E > E_F$; Fermi energy: $E_F = \\frac{\\hbar^2}{2m} (3\\pi^2 n)^{2/3}$; Total internal energy: $U_0 = \\frac{3}{5} N E_F$; Average energy per electron: $\\bar{E} = \\frac{3}{5} E_F$.",
    "Degeneracy Pressure of Free Electrons: Quantum kinetic pressure exerted by Fermions at $T = 0\\text{ K}$ due to Pauli exclusion: $P_0 = -\\left( \\frac{\\partial U_0}{\\partial V} \\right)_N = \\frac{2}{5} n E_F = \\frac{\\hbar^2}{5m} (3\\pi^2)^{2/3} n^{5/3}$; Independent of temperature; Stabilizes white dwarf stars against gravitational collapse.",
    "Electronic Heat Capacity of Metals: Only electrons within thermal energy $k_B T$ of the Fermi surface can be excited; Linear temperature dependence at low temperatures: $C_{\\text{el}} = \\gamma T = \\frac{\\pi^2}{2} N k_B \\left( \\frac{k_B T}{E_F} \\right)$; Contrast with classical prediction ($3/2 N k_B$) which caused historic anomaly.",
    "Bose-Einstein Condensation (BEC): Macroscopic occupation of ground state ($E = 0$) below critical transition temperature $T_c$; Transition temperature: $T_c = \\frac{h^2}{2\\pi m k_B} \\left( \\frac{n}{2.612} \\right)^{2/3}$; Condensed fraction for $T < T_c$: $\\frac{N_0}{N} = 1 - \\left( \\frac{T}{T_c} \\right)^{3/2}$; Superfluidity in liquid helium ($^4\\text{He}$) and atomic vapors ($^{87}\\text{Rb}$).",
    "Planck's Blackbody Radiation Law: Treating photon gas as ultra-relativistic bosons with zero chemical potential ($\\mu = 0$); Energy density spectral distribution: $u(\\nu) d\\nu = \\frac{8\\pi h \\nu^3}{c^3} \\frac{1}{e^{h\\nu / k_B T} - 1} d\\nu$; Resolving ultraviolet catastrophe of Rayleigh-Jeans classical law.",
    "Wien's Displacement Law & Stefan-Boltzmann Law: Wien's displacement: Wavelength of maximum emission is inversely proportional to absolute temperature: $\\lambda_{\\max} T = b = 2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$; Stefan-Boltzmann Law: Total radiant emittance: $E = \\sigma T^4 = \\frac{2\\pi^5 k_B^4}{15 c^2 h^3} T^4$; Stefan's constant $\\sigma = 5.67 \\times 10^{-8}\\text{ W}/(\\text{m}^2\\cdot\\text{K}^4)$.",
    "Specific Heat of Solids (Einstein & Debye Models): Classical Dulong-Petit law ($C_v = 3R$); Einstein model (independent harmonic oscillators of single frequency $\\omega_E$); Debye model (continuous phonon spectrum with cutoff frequency $\\omega_D$); Debye $T^3$ law at low temperatures: $C_v = \\frac{12\\pi^4}{5} N k_B \\left( \\frac{T}{\\theta_D} \\right)^3$.",
    "University Examination Strategy: Derive Planck's radiation law from Bose-Einstein statistics, derive the Fermi energy $E_F$ and degeneracy pressure for an electron gas at $T = 0\\text{ K}$, derive the BEC transition temperature $T_c$, and explain the Debye $T^3$ law."
], [
    "3D Quantum Density of States: $g(E) = g_s \\frac{2\\pi V}{h^3} (2m)^{3/2} \\sqrt{E}$; proportional to square root of kinetic energy.",
    "Fermi Energy Expression: $E_F = \\frac{\\hbar^2}{2m} (3\\pi^2 n)^{2/3}$, scaling strictly with electron concentration to the $2/3$ power.",
    "Electron Degeneracy Pressure: $P_0 = \\frac{2}{5} n E_F \\propto n^{5/3}$; quantum mechanical pressure supporting white dwarfs against gravity.",
    "Linear Electronic Heat Capacity: $C_{\\text{el}} = \\frac{\\pi^2}{2} N k_B \\frac{T}{T_F}$, explaining why valence electrons contribute negligibly at room temperature.",
    "BEC Transition Temperature: $T_c = \\frac{h^2}{2\\pi m k_B} \\left( \\frac{N}{2.612 V} \\right)^{2/3}$, marking onset of macroscopic ground-state condensation.",
    "Planck Radiation Spectrum: $u(\\nu) d\\nu = \\frac{8\\pi h \\nu^3}{c^3} \\frac{1}{e^{h\\nu / k_B T} - 1} d\\nu$; bridges Wien distribution at high frequencies and Rayleigh-Jeans at low.",
    "Wien's Displacement Product: $\\lambda_{\\max} T = 2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}$, shifting blackbody radiation peaks toward blue at higher temperatures.",
    "Stefan-Boltzmann Fourth Power: Total radiated power per unit area scales strictly as $T^4$: $E = \\sigma T^4$.",
    "Debye Low-Temperature $T^3$ Law: Lattice heat capacity drops as $T^3$ near absolute zero due to acoustic phonon acoustic modes.",
    "Exam Gold Tip: Always remember that photons have 2 polarization states ($g_s = 2$) and $\\mu = 0$, whereas electrons have spin degeneracy $g_s = 2$ and $\\mu > 0$."
])

# =========================================================================
# 3. THERMAL PHYSICS & ELECTRONICS (B.Sc)
# =========================================================================
add("Thermal Physics & Electronics", 1, "Kinetic Theory", [
    "Kinetic Gas Fundamentals in Electronics: Thermal motion of charge carriers (electrons and holes) modeled as classical/semiclassical electron gas; Drude model of electrical conduction; Mean free path and collision time $\\tau$.",
    "Drude Model & Electrical Conductivity: Current density: $J = n e v_d = n e \\left( \\frac{e E \\tau}{m} \\right) = \\sigma E$; Microscopic Ohm's law: Electrical conductivity $\\sigma = \\frac{n e^2 \\tau}{m}$; Drift velocity $v_d = \\mu E$, where carrier mobility $\\mu = \\frac{e \\tau}{m}$.",
    "Wiedemann-Franz Law & Lorentz Number: Empirical law: Ratio of thermal conductivity to electrical conductivity is directly proportional to absolute temperature: $\\frac{K}{\\sigma T} = L$; Lorentz number: $L = \\frac{\\pi^2}{3} \\left( \\frac{k_B}{e} \\right)^2 = 2.44 \\times 10^{-8}\\text{ W}\\cdot\\Omega/\\text{K}^2$; Valid for free electron metals.",
    "Thermal Noise (Johnson-Nyquist Noise) in Electronic Circuits: Random thermal agitation of charge carriers inside resistive conductors creating fluctuating voltage noise; Nyquist noise formula: Mean square noise voltage $\\overline{v_n^2} = 4 k_B T R \\Delta f$; White noise spectral density; Noise temperature and noise figure.",
    "Thermal Velocity & Mean Free Path of Conduction Electrons: Thermal velocity from Fermi energy: $v_F = \\sqrt{2 E_F / m} \\approx 10^6\\text{ m/s}$; Immense magnitude compared to slow drift velocities ($v_d \\approx 10^{-4}\\text{ m/s}$); Electron mean free path $\\lambda = v_F \\tau$ limited by phonon scattering.",
    "Temperature Dependence of Metallic Resistivity: Matthiessen's rule: Total resistivity $\\rho = \\rho_{\\text{phonon}}(T) + \\rho_{\\text{impurity}}$; Acoustic phonon scattering dominant at room temperature: $\\rho \\propto T$; Residual resistivity at $T \\to 0\\text{ K}$ governed by lattice defects.",
    "Thermionic Emission & Richardson-Dushman Equation: Thermal emission of electrons from heated metal surface over work function barrier $\\Phi$; Current density: $J = A T^2 \\exp\\left( -\\frac{\\Phi}{k_B T} \\right)$; Richardson constant $A = \\frac{4\\pi m k_B^2 e}{h^3} = 1.20 \\times 10^6\\text{ A}/(\\text{m}^2\\cdot\\text{K}^2)$.",
    "Schottky Effect in Field-Assisted Emission: Lowering of the work function barrier in the presence of an applied external electric field $E$: $\\Delta \\Phi = \\sqrt{\\frac{e^3 E}{4\\pi \\epsilon_0}}$; Causes enhanced thermionic emission current.",
    "Thermal Runaway in Semiconductor Devices: Positive feedback loop: Rising junction temperature increases reverse saturation leakage current ($I_0$ doubles every $10^\\circ\\text{C}$ in Silicon), increasing collector power dissipation ($P = V_{CE} I_C$), which further elevates junction temperature to destruction.",
    "University Examination Strategy: Derive the Drude electrical conductivity formula $\\sigma = \\frac{n e^2 \\tau}{m}$, derive the Richardson-Dushman equation for thermionic emission, calculate Johnson-Nyquist thermal noise voltage, and explain the mechanism of thermal runaway."
], [
    "Drude Conductivity Formula: $\\sigma = \\frac{n e^2 \\tau}{m}$, showing electrical conduction is governed by carrier density and relaxation time.",
    "Carrier Mobility Definition: $\\mu = \\frac{v_d}{E} = \\frac{e \\tau}{m}$, measuring ease of carrier drift per unit applied electric field.",
    "Wiedemann-Franz Ratio: $\\frac{K}{\\sigma} = L T$, confirming that heat and electricity in metals are transported primarily by identical free electrons.",
    "Johnson-Nyquist Noise Formula: $\\overline{v_n^2} = 4 k_B T R \\Delta f$; thermal noise is proportional to resistance, bandwidth, and absolute temperature.",
    "Richardson-Dushman Law: $J = A T^2 e^{-\\Phi / k_B T}$, governing electron emission from heated vacuum tube cathodes and filament sources.",
    "Schottky Barrier Lowering: Image charge force combined with applied electric field reduces effective work function by $\\sqrt{e^3 E / 4\\pi \\epsilon_0}$.",
    "Matthiessen's Additivity: $\\rho_{\\text{total}} = \\rho_{\\text{thermal}}(T) + \\rho_{\\text{residual}}$, separating temperature-dependent phonons from static defect scattering.",
    "Thermal Runaway Mechanism: $I_{CBO}$ doubling every $10^\\circ\\text{C}$ drives catastrophic self-reinforcing power dissipation if heat sinks are inadequate.",
    "Fermi Velocity Dominance: Conduction electrons travel at relativistic-like Fermi speeds ($10^6\\text{ m/s}$), whereas net drift velocity is under $1\\text{ mm/s}$.",
    "Exam Gold Tip: Always explain that Johnson noise is 'white noise' because its power spectral density is flat and uniform across all practical radio frequencies."
])

add("Thermal Physics & Electronics", 2, "Thermodynamics", [
    "Heat Sinks & Thermal Resistance in Power Electronics: Modeling conductive, convective, and radiative heat transfer in semiconductor packaging; Thermal resistance concept: $\\theta = \\frac{\\Delta T}{P}$ in degrees C per Watt ($^\\circ\\text{C}/\\text{W}$); Thermal circuit analogy to Ohm's Law.",
    "Junction Temperature Equilibrium Equations: Total thermal resistance from silicon junction to ambient air: $\\theta_{JA} = \\theta_{JC} + \\theta_{CS} + \\theta_{SA}$ (Junction-to-Case + Case-to-Sink + Sink-to-Ambient); Maximum power rating formula: $P_{\\max} = \\frac{T_{J,\\max} - T_A}{\\theta_{JA}}$.",
    "Thermoelectric Cooler (TEC) Thermodynamics: Solid-state heat pumping using Peltier semiconductor couples (bismuth telluride $Bi_2Te_3$); Heat absorbed at cold junction: $Q_c = \\Pi I - \\frac{1}{2} I^2 R - K \\Delta T$; Heat rejected at hot junction: $Q_h = \\Pi I + \\frac{1}{2} I^2 R - K \\Delta T$.",
    "Maximum Temperature Difference in Thermoelectrics: Maximum temperature span achievable by a single-stage Peltier cooler at zero heat load ($Q_c = 0$): $\\Delta T_{\\max} = \\frac{1}{2} Z T_c^2$; Cascaded multi-stage TEC modules achieving cryogenic temperatures.",
    "Entropy Production in Electronic Transport: Local entropy generation rate in conductors carrying electrical current and heat flux: $\\sigma_S = \\mathbf{J}_q \\cdot \\nabla(1/T) - \\frac{\\mathbf{J}}{T} \\cdot \\nabla(\\tilde{\\mu}/e) \\ge 0$; Onsager reciprocal relations.",
    "Onsager Reciprocal Relations in Thermoelectrics: Symmetry of cross-coupling phenomenological coefficients: Kelvin's first and second thermodynamic relations: $\\Pi = S T$ (Peltier coefficient equals Seebeck coefficient times absolute temperature) and $\\frac{d S}{d T} = \\frac{\\mu_{\\text{Thomson}}}{T}$.",
    "Phase Transitions in Smart Electronic Materials: Shape Memory Alloys (SMA: Nitinol martensite-austenite thermal transformation); Thermistors: Negative Temperature Coefficient (NTC: transition metal oxide ceramics) vs Positive Temperature Coefficient (PTC: barium titanate ferroelectric Curie transition).",
    "Thermal Stress & Packaging Reliability in ICs: Mismatch in Coefficient of Thermal Expansion (CTE: $\\alpha$) between silicon die ($\\alpha \\approx 2.6 \\times 10^{-6}/\\text{K}$) and copper heat spreaders ($\\alpha \\approx 16.5 \\times 10^{-6}/\\text{K}$); Thermal cycling fatigue leading to solder joint shear fracture (Coffin-Manson law).",
    "Energy Harvesting from Waste Heat: Thermoelectric generation (TEG) powering autonomous wireless IoT sensor nodes from industrial pipe gradients; Thermomagnetic energy harvesters; Pyroelectric generators producing current from temporal temperature fluctuations ($d T / dt$).",
    "University Examination Strategy: Calculate the maximum permissible power dissipation for a power transistor using thermal resistance networks, derive Kelvin's relations connecting Seebeck and Peltier coefficients, and explain the operating principle of a Peltier cooler."
], [
    "Thermal Resistance Network: $\\theta_{JA} = \\theta_{JC} + \\theta_{CS} + \\theta_{SA}$; operates analogous to electrical series resistors in voltage drops.",
    "Transistor Power Derating: Maximum allowed power decreases linearly above rated case temperature: $P = \\frac{T_{J,\\max} - T_A}{\\theta_{JA}}$.",
    "Peltier Heat Pumping: Heat moved from cold to hot junction equals $\\Pi I$ minus conductive back-leakage $K\\Delta T$ and half of Joule heat.",
    "Kelvin First Relation: $\\Pi = S T$; connects reversible Peltier heat absorption directly to the Seebeck thermoelectric voltage coefficient.",
    "Kelvin Second Relation: $\\frac{dS}{dT} = \\frac{\\mu_{Th}}{T}$; relates rate of change of Seebeck coefficient to the Thomson thermal coefficient.",
    "NTC Thermistor Equation: Resistance scales exponentially: $R(T) = R_0 \\exp\\left[ \\beta \\left( \\frac{1}{T} - \\frac{1}{T_0} \\right) \\right]$, used for precision temperature sensing.",
    "PTC Ferroelectric Transition: Resistance increases by several orders of magnitude above Curie temperature, acting as self-resetting overcurrent fuse.",
    "CTE Mismatch Strain: Differential expansion $\\Delta L = L (\\alpha_1 - \\alpha_2) \\Delta T$ induces severe mechanical shear fatigue in microchip solder balls.",
    "Coffin-Manson Fatigue Law: Predicts thermal cycling lifetime of microelectronic packages based on plastic shear strain amplitude.",
    "Exam Gold Tip: Always include the thermal resistance of the insulating mica washer / thermal grease ($\\theta_{CS}$) when mounting transistors to heat sinks."
])

add("Thermal Physics & Electronics", 3, "Semiconductors", [
    "Energy Band Theory in Solids: Formation of energy bands from atomic orbital overlap; Kronig-Penney model explaining periodic crystal potential; Valence Band (VB), Conduction Band (CB), and Forbidden Energy Gap ($E_g$); Direct bandgap (GaAs: $E_g = 1.42\\text{ eV}$, vertical optical recombination) vs Indirect bandgap (Si: $E_g = 1.12\\text{ eV}$, requiring phonon assistance).",
    "Intrinsic Semiconductors: Pure covalent crystalline silicon and germanium; Generation of electron-hole pairs via thermal rupture of covalent bonds; Intrinsic carrier concentration: $n_i = p_i = \\sqrt{N_c N_v} \\exp\\left( -\\frac{E_g}{2 k_B T} \\right)$; Fermi level lies precisely at center of forbidden gap ($E_F \\approx E_g / 2$).",
    "Extrinsic Semiconductors: Doping with donor pentavalent impurities (P, As, Sb $\\implies$ n-type: electron majority carriers, $n_n \\approx N_D$, Fermi level shifts upward near CB) and acceptor trivalent impurities (B, Al, Ga $\\implies$ p-type: hole majority carriers, $p_p \\approx N_A$, Fermi level shifts downward near VB).",
    "Mass Action Law & Charge Neutrality: Fundamental thermal equilibrium invariant: $n \\cdot p = n_i^2$; Charge neutrality condition: $n + N_A^- = p + N_D^+$; Calculation of minority carrier concentrations ($p_n = n_i^2 / N_D$).",
    "Carrier Transport: Drift & Diffusion: Total current density is sum of drift (field-driven) and diffusion (concentration gradient): $J_n = q n \\mu_n E + q D_n \\frac{dn}{dx}$ and $J_p = q p \\mu_p E - q D_p \\frac{dp}{dx}$; Einstein relation connecting mobility and diffusion: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = \\frac{k_B T}{q} = V_T$ ($26\\text{ mV}$ at 300 K).",
    "The pn Junction in Thermal Equilibrium: Metallurgical junction; Diffusion of electrons into p-side and holes into n-side creates uncompensated donor/acceptor ion core depletion region (space charge layer); Built-in contact potential: $V_0 = V_T \\ln\\left( \\frac{N_A N_D}{n_i^2} \\right)$; Electric field barrier halts further diffusion.",
    "Depletion Layer Width & Capacitance: Depletion width: $W = \\sqrt{\\frac{2 \\epsilon_s}{q} \\left( \\frac{1}{N_A} + \\frac{1}{N_D} \\right) (V_0 - V)}$; Junction (transition) capacitance under reverse bias: $C_j = \\frac{\\epsilon_s A}{W} \\propto (V_0 - V)^{-1/2}$; Varactor diode voltage-variable tuning; Diffusion capacitance under forward bias: $C_d = \\frac{\\tau I}{V_T}$.",
    "Shockley Ideal Diode Equation: Forward bias (lowers barrier, exponential diffusion current) vs Reverse bias (widens barrier, small reverse saturation current $I_0$): $I = I_0 \\left[ \\exp\\left( \\frac{q V}{\\eta k_B T} \\right) - 1 \\right]$; Ideality factor $\\eta = 1$ (diffusion dominated) or $\\eta = 2$ (recombination dominated).",
    "Junction Breakdown Mechanisms: Avalanche breakdown: Strong electric field ($E > 10^5\\text{ V/cm}$) accelerates carriers to kinetic energy sufficient to knock out valence electrons via impact ionization (positive temperature coefficient); Zener breakdown: Heavily doped narrow junction, direct quantum mechanical tunneling across thin barrier (negative temperature coefficient).",
    "University Examination Strategy: Derive the built-in potential $V_0 = \\frac{k_B T}{q} \\ln\\left( \\frac{N_A N_D}{n_i^2} \\right)$, derive the Einstein relation $\\frac{D}{\\mu} = \\frac{k_B T}{q}$, and contrast Avalanche vs Zener breakdown mechanisms."
], [
    "Law of Mass Action: $n \\cdot p = n_i^2$; product of electron and hole concentrations is constant at given temperature in thermal equilibrium.",
    "Built-in Potential Equation: $V_0 = V_T \\ln\\left( \\frac{N_A N_D}{n_i^2} \\right)$, establishing internal electrostatic barrier preventing free carrier diffusion.",
    "Einstein Relation: $\\frac{D}{\\mu} = V_T = \\frac{k_B T}{q} \\approx 26\\text{ mV}$ at room temperature, linking thermal diffusion to field drift mobility.",
    "Shockley Diode Formula: $I = I_0 (e^{V / \\eta V_T} - 1)$; exhibits exponential current growth in forward bias and saturates at $-I_0$ in reverse bias.",
    "Transition Capacitance Scaling: $C_j = \\frac{\\epsilon A}{W} \\propto (V_0 - V)^{-1/2}$; exploited in electronic varactor diode tuning circuits.",
    "Diffusion Capacitance Dominance: In forward bias, stored minority carrier charge creates large diffusion capacitance $C_d = \\frac{\\tau I}{V_T}$.",
    "Zener Tunneling Hallmark: Occurs in heavily doped junctions with breakdown voltage $< 5\\text{ V}$ via quantum field-assisted tunneling.",
    "Avalanche Impact Ionization: Dominates in lightly doped diodes with breakdown $> 6\\text{ V}$; accelerated carriers initiate multiplicative impact cascades.",
    "Direct vs Indirect Bandgap: Direct bandgap (GaAs) permits efficient radiative light emission in LEDs; Indirect (Si) dissipates energy as lattice phonons.",
    "Exam Scoring Tip: In breakdown questions, state that Zener has a negative temperature coefficient, whereas Avalanche has a positive temperature coefficient."
])

add("Thermal Physics & Electronics", 4, "Amplifiers", [
    "Bipolar Junction Transistor (BJT) Architecture: Three-terminal pnp and npn sandwich structures; Thin, lightly doped Base; Heavily doped Emitter (efficient carrier injection); Moderately doped, large area Collector (efficient heat collection); Operating modes: Cutoff, Active (amplification), Saturation (switching), and Inverted.",
    "BJT Circuit Configurations & Current Gains: Common Emitter (CE: high current and voltage gain, $180^\\circ$ phase inversion), Common Base (CB: unity current gain $\\alpha = I_C / I_E < 1$, high voltage gain, zero phase shift), and Common Collector (CC / Emitter Follower: high current gain $\\beta = I_C / I_B$, unity voltage gain, low output impedance).",
    "Mathematical Relations Between BJT Parameters: $\\beta = \\frac{\\alpha}{1 - \\alpha}$ and $\\alpha = \\frac{\\beta}{\\beta + 1}$; Base current $I_B = \\frac{I_C}{\\beta}$; Emitter current $I_E = I_C + I_B = (\\beta + 1) I_B$; Collector current with reverse leakage: $I_C = \\beta I_B + I_{CEO} = \\beta I_B + (\\beta + 1) I_{CBO}$.",
    "DC Biasing & Q-Point Thermal Stability: Selecting quiescent operating point ($Q$-point: $V_{CEQ}, I_{CQ}$) in active region; Instability from temperature variations ($\Delta V_{BE} = -2.5\\text{ mV}/^\\circ\\text{C}, \\beta$ increase, $I_{CBO}$ doubling); Stability factor $S = \\frac{\\partial I_C}{\\partial I_{CBO}}$.",
    "Voltage Divider Bias Circuit Analysis: Self-bias network ($R_1, R_2, R_C, R_E$); Thevenin equivalent: $V_{TH} = V_{CC} \\frac{R_2}{R_1 + R_2}$, $R_{TH} = R_1 \\parallel R_2$; Emitter degeneration resistor $R_E$ providing negative thermal feedback; Stability factor $S = \\frac{1 + \\beta}{1 + \\beta \\frac{R_E}{R_{TH} + R_E}} \\approx 1$ (optimal stability).",
    "Small-Signal AC Analysis & Hybrid ($h$) Parameters: Modeling CE amplifier: $h_{ie}$ (input impedance), $h_{re}$ (reverse voltage ratio), $h_{fe}$ (forward current gain $\\approx \\beta$), and $h_{oe}$ (output admittance); Voltage gain $A_v = -\\frac{h_{fe} R_L'}{h_{ie}}$, Current gain $A_i = \\frac{h_{fe}}{1 + h_{oe} R_L}$, Input resistance $R_{\\text{in}} = h_{ie}$.",
    "Field-Effect Transistors (JFET & MOSFET): Unipolar voltage-controlled devices; n-channel JFET: Shockley's equation $I_D = I_{DSS} \\left( 1 - \\frac{V_{GS}}{V_P} \\right)^2$; Enhancement MOSFET: Threshold voltage $V_{th}$, drain current in saturation $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$; Extremely high input impedance ($10^{12}\\,\\Omega$).",
    "Multistage Amplifiers & Frequency Response: Cascading amplifiers via RC-coupling; Overall gain $A = A_1 \\times A_2$; Frequency response curve: Low-frequency cutoff $f_L$ governed by coupling/bypass capacitors; High-frequency cutoff $f_H$ governed by parasitic transistor capacitances and Miller effect ($C_M = C_{bc} (1 - A_v)$); Gain-Bandwidth Product.",
    "Negative Feedback in Amplifiers: Topology types: Voltage-series, Voltage-shunt, Current-series, Current-shunt; Closed-loop gain: $A_f = \\frac{A}{1 + A \\beta_f}$; Desensitivity factor $1 + A \\beta_f$; Advantages: Stabilizes gain, reduces harmonic distortion, widens bandwidth ($B W_f = B W (1 + A \\beta_f)$), and controls terminal impedances.",
    "University Examination Strategy: Analyze a Voltage Divider Bias circuit to find the Q-point and stability factor $S$, derive expressions for voltage and current gain of a CE amplifier using $h$-parameters, and explain the advantages of negative feedback."
], [
    "Alpha-Beta Inter-Relation: $\\beta = \\frac{\\alpha}{1 - \\alpha}$; small changes in $\\alpha$ near 1 cause dramatic multiplication in $\\beta$.",
    "CE Phase Inversion Hallmark: The common-emitter amplifier inherently introduces an exact $180^\\circ$ phase inversion between input and output AC voltages.",
    "Voltage Divider Thermal Stability: $R_E$ provides negative feedback: rising $I_C$ increases $V_E$, dropping $V_{BE} = V_B - V_E$, which suppresses $I_B$ and stabilizes $I_C$.",
    "Stability Factor Minimum: Ideal bias stability factor is $S = 1$; fixed-bias circuits yield poor stability $S = 1 + \\beta$.",
    "JFET Shockley Equation: $I_D = I_{DSS} \\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$, operating in saturation pinch-off region.",
    "Miller Effect Multiplication: Inverting voltage gain magnifies input parasitic capacitance: $C_{\\text{Miller}} = C_{bc} (1 + |A_v|)$, suppressing high-frequency bandwidth.",
    "Negative Feedback Bandwidth Expansion: Bandwidth increases by $(1 + A\\beta)$ by precisely the same factor that closed-loop gain is reduced.",
    "Emitter Follower Buffer: Common Collector amplifier has $A_v \\approx 1$, high input impedance, and low output impedance, serving as impedance matching buffer.",
    "Gain-Bandwidth Product Invariant: The product of amplifier voltage gain and operational bandwidth remains constant for a given transistor architecture.",
    "Exam Gold Tip: Always remember that positive feedback causes oscillation ($A\\beta = 1$, Barkhausen criterion), whereas negative feedback ensures linear amplification."
])

add("Thermal Physics & Electronics", 5, "Digital Logic", [
    "Analog vs Digital Information Representation: Continuous voltage levels vs discrete binary logic levels (Logic 0 / Low: 0 to 0.8 V; Logic 1 / High: 2.0 to 5.0 V in standard TTL); Noise margin concepts: High noise margin $N M_H = V_{OH} - V_{IH}$ and Low noise margin $N M_L = V_{IL} - V_{OL}$.",
    "Number Systems & Binary Arithmetic: Decimal, Binary, Octal, and Hexadecimal representations; Base conversions; Signed numbers: Sign-magnitude, 1's complement, and 2's complement representation (range $-2^{n-1}$ to $+2^{n-1} - 1$); 2's complement binary addition and subtraction without borrowing.",
    "Boolean Algebra Laws & Axiomatic Theorems: George Boole (1854); Fundamental axioms: Identity ($A + 0 = A, A \\cdot 1 = A$), Null ($A + 1 = 1, A \\cdot 0 = 0$), Idempotence ($A + A = A, A \\cdot A = A$), Inverse ($A + \\bar{A} = 1, A \\cdot \\bar{A} = 0$), Commutative, Associative, and Distributive laws ($A + B C = (A + B)(A + C)$).",
    "De Morgan's Dual Theorems: Theorem 1: The complement of a logical sum equals the product of the complements: $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$; Theorem 2: The complement of a logical product equals the sum of the complements: $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$; Bubble pushing logic.",
    "Logic Gate Fundamentals & Universal Gates: Primary gates: AND, OR, NOT (Inverter); Derived gates: NAND, NOR, XOR (Exclusive-OR: $Y = A \\bar{B} + \\bar{A} B = A \\oplus B$), XNOR ($Y = A B + \\bar{A} \\bar{B}$); Universal logic gates: NAND and NOR (any digital boolean circuit can be constructed using NAND or NOR gates exclusively).",
    "Karnaugh Map (K-Map) Optimization: Graphical simplification of Boolean expressions eliminating redundant terms; Gray code coordinate labeling (adjacent cells differ by strictly one bit); 2, 3, and 4-variable K-maps; Grouping adjacent 1s into powers of two (singles, pairs, quads, octets); Prime Implicants and Essential Prime Implicants.",
    "Combinational Logic Circuits Design: Half Adder (Sum $S = A \\oplus B$, Carry $C = A \\cdot B$) vs Full Adder (incorporating carry-in: $S = A \\oplus B \\oplus C_{\\text{in}}$, $C_{\\text{out}} = A B + C_{\\text{in}}(A \\oplus B)$); Half Subtractor and Full Subtractor circuits; 4-bit parallel ripple-carry adders.",
    "Multiplexers, Demultiplexers & Decoders: Multiplexer (MUX: data selector): $2^n$ inputs, $n$ select lines, 1 output; Building arbitrary boolean functions using MUX without external gates; Demultiplexer (DEMUX: 1 input, $2^n$ outputs); 3-to-8 line decoders; Priority encoders.",
    "Sequential Logic: Latches & Flip-Flops: Memory elements holding binary state; SR Latch (NAND/NOR implementation, forbidden race condition $S=R=1$); Clocked SR, D (Data / transparent latch), JK (eliminates forbidden state via toggle $J=K=1$), and T (Toggle) flip-flops; Master-Slave JK flip-flop eliminating race-around condition.",
    "University Examination Strategy: Simplify a 4-variable Boolean expression using Karnaugh Mapping and draw the simplified circuit using NAND gates only, design a Full Adder using two Half Adders and an OR gate, and explain the race-around condition in JK flip-flops."
], [
    "De Morgan First Law: $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$; NOR gate is functionally equivalent to an active-low input bubbled AND gate.",
    "De Morgan Second Law: $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$; NAND gate is functionally equivalent to an active-low input bubbled OR gate.",
    "Universal Gate Definition: NAND and NOR are universal gates because they can emulate NOT, AND, and OR logic operations.",
    "K-Map Gray Code Ordering: Cell coordinates ordered as 00, 01, 11, 10; ensures single-bit Hamming distance between adjacent cells.",
    "Full Adder Logic: Sum $S = A \\oplus B \\oplus C_{\\text{in}}$ and Carry $C_{\\text{out}} = A B + C_{\\text{in}}(A \\oplus B)$.",
    "XOR Gate Parity Nature: Evaluates to True if and only if an odd number of input variables are True, serving as parity generator.",
    "Race-Around Condition: In JK flip-flop with $J=K=1$, output toggles uncontrollably during clock pulse if pulse width $t_p > \\Delta t_{\\text{propagation}}$.",
    "Master-Slave Solution: Isolates master latch triggering on clock leading edge from slave latch updating on trailing edge, eliminating race-around.",
    "2's Complement Negation: Formed by inverting all bits (1's complement) and adding 1 to the least significant bit.",
    "Exam Gold Tip: When grouping 1s in a K-Map, always identify Essential Prime Implicants first (cells covered by only one group) before covering remaining 1s."
])

# Save to sem3_bsc_physics_chem_data.json
with open('scripts/sem3_bsc_physics_chem_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in physics_chem dataset now: {len(data)}")
