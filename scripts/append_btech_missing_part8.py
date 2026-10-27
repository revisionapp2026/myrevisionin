import json

with open('scripts/sem3_btech_missing_data.json', 'r', encoding='utf-8') as f:
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
# 8. CHEMICAL ENGINEERING THERMODYNAMICS — I
# =========================================================================
add("Chemical Engineering Thermodynamics — I", 1, "Laws of Thermodynamics", [
    "First Law of Thermodynamics for Closed Systems: Conservation of energy: $\\Delta U = Q - W$; State function internal energy $U$ depends only on initial and final thermodynamic equilibrium states; Reversible work $W = \\int P dV$.",
    "Open System First Law & Steady-State Flow Energy Equation (SFEE): Control volume energy balance: $\\Delta \\left[H + \\frac{v^2}{2} + g z\\right] = Q - W_s$; Enthalpy defined as $H = U + P V$; Shaft work $W_s$ and rate of heat transfer $Q$.",
    "Reversible vs Irreversible Processes: Reversible process (proceeds through continuous quasi-static equilibrium states without dissipation, yielding maximum work output $W_{rev}$); Irreversible processes involve finite temperature gradients, fluid turbulence, unresisted expansion, and chemical reactions.",
    "Heat Capacity Relations: Heat capacity at constant volume $C_v = \\left(\\frac{\\partial U}{\\partial T}\\right)_v$; Heat capacity at constant pressure $C_p = \\left(\\frac{\\partial H}{\\partial T}\\right)_p$; For ideal gas: $C_p - C_v = R$; Ratio of heat capacities $\\gamma = C_p / C_v$.",
    "Ideal Gas Reversible Processes: Isothermal ($T = C, W = R T \\ln(V_2 / V_1) = R T \\ln(P_1 / P_2), \\Delta U = 0$); Isobaric ($P = C, W = P \\Delta V, Q = \\Delta H$); Isochoric ($V = C, W = 0, Q = \\Delta U$); Adiabatic ($Q = 0, P V^\\gamma = C, W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$).",
    "Polytropic Process Analysis: General reversible expansion $P V^n = C$; Polytropic work $W = \\frac{P_1 V_1 - P_2 V_2}{n - 1}$; Polytropic heat capacity $C_n = C_v \\frac{n - \\gamma}{n - 1}$; Spans all standard thermodynamic paths ($n = 0$ isobaric, $n = 1$ isothermal, $n = \\gamma$ adiabatic, $n = \\infty$ isochoric).",
    "Joule-Thomson Expansion & Porous Plug Experiment: Isenthalpic throttling process ($H_1 = H_2$); Joule-Thomson coefficient $\\mu_{JT} = \\left(\\frac{\\partial T}{\\partial P}\\right)_H = \\frac{1}{C_p}\\left[T\\left(\\frac{\\partial V}{\\partial T}\\right)_P - V\\right]$; Inversion temperature where $\\mu_{JT} = 0$; For ideal gas, $\\mu_{JT} = 0$ identically.",
    "Compressibility Factor ($Z$): Departure from ideal gas behavior: $Z = \\frac{P V}{R T}$; $Z = 1$ for ideal gas; Theorem of corresponding states: $Z = f(P_r, T_r)$, where reduced parameters are $P_r = P / P_c$ and $T_r = T / T_c$.",
    "Second Law Formulations & Carnot Cycle: Kelvin-Planck statement (impossible to construct cyclic engine whose sole effect is absorption of heat from single reservoir and performance of equal work) vs Clausius statement (impossible to transfer heat from cold to hot body without external work); Carnot efficiency $\\eta_c = 1 - \\frac{T_C}{T_H}$.",
    "University Examination Strategy: Formulate the First Law SFEE for a nozzle and compressor, derive $C_p - C_v = R$ for an ideal gas, calculate work and heat in polytropic processes, and derive the Joule-Thomson coefficient."
], [
    "First Law Differential: $dU = dQ - dW = dQ - P dV$.",
    "Enthalpy Definition: $H = U + P V$.",
    "SFEE Open System Equation: $\\Delta H + \\frac{\\Delta v^2}{2} + g \\Delta z = Q - W_s$.",
    "Ideal Gas Heat Capacity Difference: $C_p - C_v = R$.",
    "Reversible Isothermal Work: $W = R T \\ln\\left(\\frac{V_2}{V_1}\\right) = R T \\ln\\left(\\frac{P_1}{P_2}\\right)$.",
    "Reversible Adiabatic Work: $W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{R (T_1 - T_2)}{\\gamma - 1}$.",
    "Joule-Thomson Coefficient: $\\mu_{JT} = \\left(\\frac{\\partial T}{\\partial P}\\right)_H = \\frac{1}{C_p} \\left[T\\left(\\frac{\\partial V}{\\partial T}\\right)_P - V\\right]$.",
    "Carnot Thermal Efficiency: $\\eta = 1 - \\frac{T_L}{T_H}$.",
    "Compressibility Factor: $Z = \\frac{P V}{R T}$.",
    "Exam Scoring Tip: For an isenthalpic throttling expansion, a real gas cools only if initial temperature is below its maximum Joule-Thomson inversion temperature ($T < T_{inv}$)."
])

add("Chemical Engineering Thermodynamics — I", 2, "PVT Behavior", [
    "Equations of State (EOS) for Pure Fluids: Mathematical relations connecting state variables $P, V, T$; Ideal gas law $P V = R T$ valid only at low pressures ($P \\to 0$) and elevated temperatures ($T \\gg T_c$).",
    "Van der Waals Equation of State: $\\left(P + \\frac{a}{V^2}\\right)(V - b) = R T$; Accounts for intermolecular attractive forces (internal pressure correction $a/V^2$) and finite molecular co-volume ($b$); Cubic polynomial in molar volume $V$.",
    "Critical Point Conditions: Critical isotherm exhibits horizontal inflection point on $P-V$ diagram: $\\left(\\frac{\\partial P}{\\partial V}\\right)_{T_c} = 0$ and $\\left(\\frac{\\partial^2 P}{\\partial V^2}\\right)_{T_c} = 0$; Van der Waals parameters: $a = \\frac{27 R^2 T_c^2}{64 P_c}, b = \\frac{R T_c}{8 P_c}$; Critical compressibility $Z_c = \\frac{P_c V_c}{R T_c} = \\frac{3}{8} = 0.375$.",
    "Redlich-Kwong (RK) Equation of State: $P = \\frac{R T}{V - b} - \\frac{a}{\\sqrt{T} V (V + b)}$; Substantially improves vapor-phase density predictions; Critical parameters: $a = 0.42748 \\frac{R^2 T_c^{2.5}}{P_c}$ and $b = 0.08664 \\frac{R T_c}{P_c}$ with $Z_c = 1/3 = 0.333$.",
    "Soave-Redlich-Kwong (SRK) & Peng-Robinson (PR) EOS: Modern cubic EOS incorporating Pitzer's acentric factor $\\omega$; Peng-Robinson: $P = \\frac{R T}{V - b} - \\frac{a(T)}{V(V + b) + b(V - b)}$; Widely used in petrochemical simulation for vapor-liquid equilibria (VLE) of non-polar hydrocarbons ($Z_c = 0.307$).",
    "Virial Equation of State: Power series expansion in pressure or molar density: $Z = 1 + B' P + C' P^2 + \\dots = 1 + \\frac{B}{V} + \\frac{C}{V^2} + \\dots$; Second virial coefficient $B(T)$ accounts for two-body intermolecular interactions; Third coefficient $C(T)$ accounts for three-body interactions.",
    "Boyle Temperature ($T_B$): Temperature at which second virial coefficient vanishes ($B(T_B) = 0$); Fluid obeys ideal gas law over wide pressure range up to several atmospheres ($Z \\approx 1.0$).",
    "Generalized Compressibility Charts: Nelson-Obert charts expressing $Z$ as universal function of reduced pressure $P_r = P / P_c$ and reduced temperature $T_r = T / T_c$; Three-parameter corresponding states: $Z = Z^{(0)} + \\omega Z^{(1)}$.",
    "Acentric Factor ($\\omega$): Pitzer's metric for molecular non-sphericity: $\\omega = -\\log_{10}(P_r^{\\text{sat}})_{T_r = 0.7} - 1.000$; $\\omega = 0$ for noble gases (argon, krypton, xenon); Increases for complex, elongated, or polar molecules.",
    "University Examination Strategy: Derive Van der Waals constants $a, b$ and critical compressibility factor $Z_c = 3/8$ from critical inflection criteria, and calculate molar volume of real gas using the Virial equation."
], [
    "Van der Waals EOS: $\\left(P + \\frac{a}{V^2}\\right)(V - b) = R T$.",
    "Critical Point Conditions: $\\left(\\frac{\\partial P}{\\partial V}\\right)_{T_c} = 0, \\quad \\left(\\frac{\\partial^2 P}{\\partial V^2}\\right)_{T_c} = 0$.",
    "Van der Waals Constant $a$: $a = \\frac{27 R^2 T_c^2}{64 P_c}$.",
    "Van der Waals Constant $b$: $b = \\frac{R T_c}{8 P_c}$.",
    "Van der Waals Critical Compressibility: $Z_c = \\frac{P_c V_c}{R T_c} = \\frac{3}{8} = 0.375$.",
    "Redlich-Kwong EOS: $P = \\frac{R T}{V - b} - \\frac{a}{\\sqrt{T} V (V + b)}$.",
    "Redlich-Kwong Critical Compressibility: $Z_c = \\frac{1}{3} \\approx 0.333$.",
    "Virial Expansion (Volume): $Z = 1 + \\frac{B(T)}{V} + \\frac{C(T)}{V^2} + \\dots$.",
    "Acentric Factor Formula: $\\omega = -\\log_{10}(P_r^{\\text{sat}})_{T_r = 0.7} - 1.000$.",
    "Exam Scoring Tip: Modern cubic equations of state (SRK, Peng-Robinson) replace the constant $a$ with a temperature-dependent parameter $a(T) = a_c \\alpha(T_r, \\omega)$ to match vapor pressures accurately."
])

add("Chemical Engineering Thermodynamics — I", 3, "Heat Effects", [
    "Sensible Heat Effects: Heat transferred causing temperature change without phase transformation; Molar heat capacity temperature dependency modeled via empirical polynomial: $C_p = A + B T + C T^2 + D T^{-2}$; Sensible heat $\\Delta H = \\int_{T_1}^{T_2} C_p dT$.",
    "Mean Heat Capacity ($C_{p,m}$): Defined such that $\\Delta H = C_{p,m} (T_2 - T_1)$; $C_{p,m} = \\frac{1}{T_2 - T_1} \\int_{T_1}^{T_2} C_p dT = A + \\frac{B}{2}(T_1 + T_2) + \\frac{C}{3}(T_1^2 + T_1 T_2 + T_2^2) + \\frac{D}{T_1 T_2}$.",
    "Latent Heat of Phase Transitions: Enthalpy change during constant-temperature phase change (fusion $\\Delta H_{fus}$, vaporization $\\Delta H_{vap}$, sublimation $\\Delta H_{sub}$); Clapeyron equation: $\\frac{dP^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{T \\Delta V}$.",
    "Clausius-Clapeyron Equation: Neglecting liquid volume ($V_L \\ll V_V$) and assuming ideal gas vapor ($V_V = R T / P^{\\text{sat}}$): $\\frac{d \\ln P^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{R T^2}$; Integrated form: $\\ln\\left(\\frac{P_2^{\\text{sat}}}{P_1^{\\text{sat}}}\\right) = -\\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.",
    "Trouton's & Riedel's Vaporization Rules: Trouton's rule: Entropy of vaporization at normal boiling point is approximately constant for non-polar liquids: $\\Delta S_{vap} = \\frac{\\Delta H_{vap}}{T_b} \\approx 88\\text{ J/(mol}\\cdot\\text{K)}$; Riedel's high-precision correlation incorporating critical properties.",
    "Standard Heat of Reaction ($\\Delta H_R^\\circ$): Enthalpy change when stoichiometric reactants in standard state ($1\\text{ bar}$, $298.15\\text{ K}$) convert completely to products in standard state: $\\Delta H_R^\\circ = \\sum \\nu_i \\Delta H_{f, i}^\\circ$, where $\\nu_i$ is stoichiometric coefficient ($+$ for products, $-$ for reactants).",
    "Hess's Law of Constant Heat Summation: Overall enthalpy change for chemical reaction sequence equals algebraic sum of enthalpy changes of individual reaction steps, independent of pathway.",
    "Kirchhoff's Law for Temperature Dependency: Variation of reaction enthalpy with temperature: $\\frac{d(\\Delta H_R^\\circ)}{dT} = \\Delta C_p^\\circ$; Integrated form: $\\Delta H_R^\\circ(T) = \\Delta H_R^\\circ(T_0) + \\int_{T_0}^T \\Delta C_p^\\circ dT$, where $\\Delta C_p^\\circ = \\sum \\nu_i C_{p, i}^\\circ$.",
    "Standard Heat of Combustion ($\\Delta H_c^\\circ$) & Heating Values: Higher Heating Value (HHV, liquid water product) vs Lower Heating Value (LHV, water vapor product); Adiabatic flame temperature $T_{ad}$ (maximum temperature attained in combustion chamber without heat loss, solved by $\\Delta H_R^\\circ(T_0) + \\int_{T_0}^{T_{ad}} \\sum n_{\\text{prod}} C_{p, \\text{prod}} dT = 0$).",
    "University Examination Strategy: Calculate standard enthalpy of reaction using standard heats of formation, integrate Kirchhoff's equation to find $\\Delta H_R$ at $800\\text{ K}$, and calculate the adiabatic flame temperature of a fuel gas."
], [
    "Sensible Enthalpy Integral: $\\Delta H = \\int_{T_1}^{T_2} C_p dT$.",
    "Clapeyron Phase Boundary Equation: $\\frac{dP^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{T (V_V - V_L)}$.",
    "Clausius-Clapeyron Formula: $\\frac{d\\ln P^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{R T^2}$.",
    "Integrated Clausius-Clapeyron: $\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{vap}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.",
    "Trouton's Empirical Ratio: $\\frac{\\Delta H_{vap}}{T_b} \\approx 88\\text{ J/(mol}\\cdot\\text{K)}$.",
    "Standard Reaction Enthalpy: $\\Delta H_R^\\circ = \\sum \\nu_i \\Delta H_{f, i}^\\circ$.",
    "Kirchhoff's Law Differential: $\\frac{d(\\Delta H_R^\\circ)}{dT} = \\Delta C_p^\\circ = \\sum \\nu_i C_{p, i}^\\circ$.",
    "Integrated Kirchhoff Equation: $\\Delta H_R(T) = \\Delta H_R(T_0) + \\int_{T_0}^T \\Delta C_p dT$.",
    "Adiabatic Flame Temperature Balance: $\\Delta H_R(T_0) + \\int_{T_0}^{T_{ad}} \\sum n_p C_{p, p} dT = 0$.",
    "Exam Scoring Tip: In calculating adiabatic flame temperature, nitrogen present in air must be included in the product heat capacity integral even though it does not participate chemically."
])

add("Chemical Engineering Thermodynamics — I", 4, "Entropy", [
    "Mathematical Definition of Entropy ($S$): State variable defined by Clausius for reversible differential heat transfer: $dS = \\frac{\\delta Q_{rev}}{T}$; Unit $\\text{J/(mol}\\cdot\\text{K)}$; Line integral of $dS$ around any reversible closed cycle is identically zero: $\\oint \\frac{\\delta Q_{rev}}{T} = 0$.",
    "Clausius Inequality: For any real (irreversible) thermodynamic cycle: $\\oint \\frac{\\delta Q}{T} \\le 0$; Equality holds strictly for reversible cycles; Inequality holds for irreversible cycles.",
    "Principle of Entropy Generation / Increase of Entropy: For isolated system, total entropy change $\\Delta S_{\\text{total}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} = S_{gen} \\ge 0$; Entropy generation $S_{gen} > 0$ for all real spontaneous natural processes; $S_{gen} = 0$ for reversible processes.",
    "Entropy Changes for Ideal Gas: $dS = C_v \\frac{dT}{T} + R \\frac{dV}{V} = C_p \\frac{dT}{T} - R \\frac{dP}{P}$; Integrated expressions: $\\Delta S = C_p \\ln(T_2 / T_1) - R \\ln(P_2 / P_1) = C_v \\ln(T_2 / T_1) + R \\ln(V_2 / V_1)$.",
    "Entropy of Phase Transitions: Reversible isothermal phase transformation at constant temperature and pressure: $\\Delta S = \\frac{\\Delta H}{T}$; e.g. melting of ice $\\Delta S_{fus} = \\Delta H_{fus} / T_m$.",
    "Third Law of Thermodynamics & Absolute Entropy: Nernst Heat Theorem; The entropy of every pure crystalline substance in complete internal thermodynamic equilibrium is zero at absolute zero temperature ($S \\to 0$ as $T \\to 0\\text{ K}$); Enables determination of absolute entropy $S_T^\\circ = \\int_0^T \\frac{C_p}{T} dT$.",
    "Lost Work & Gouy-Stodola Theorem: Irreversibility and exergy destruction rate in steady-flow processes: $W_{\\text{lost}} = T_0 S_{gen} = T_0 \\Delta S_{\\text{total}}$, where $T_0$ is surroundings ambient temperature; Direct link between entropy generation and lost useful work.",
    "Isentropic Efficiencies in Industrial Turbomachinery: Compressor isentropic efficiency $\\eta_c = \\frac{W_s^{\\text{rev}}}{W_s^{\\text{actual}}} = \\frac{H_{2s} - H_1}{H_2 - H_1}$; Turbine isentropic efficiency $\\eta_t = \\frac{W_s^{\\text{actual}}}{W_s^{\\text{rev}}} = \\frac{H_1 - H_2}{H_1 - H_{2s}}$.",
    "Temperature-Entropy ($T-S$) Diagrams: Area under reversible process path represents heat transferred: $Q_{rev} = \\int T dS$; Carnot cycle appears as neat rectangle on $T-S$ plot.",
    "University Examination Strategy: Prove the Clausius inequality using an auxiliary Carnot engine, calculate entropy change for mixing two fluids at different temperatures, and determine lost work using the Gouy-Stodola theorem."
], [
    "Entropy Differential Definition: $dS = \\frac{\\delta Q_{rev}}{T}$.",
    "Clausius Inequality: $\\oint \\frac{\\delta Q}{T} \\le 0$.",
    "Total Entropy Generation: $\\Delta S_{\\text{total}} = \\Delta S_{sys} + \\Delta S_{surr} = S_{gen} \\ge 0$.",
    "Ideal Gas Entropy ($T$ and $P$): $\\Delta S = C_p \\ln\\left(\\frac{T_2}{T_1}\\right) - R \\ln\\left(\\frac{P_2}{P_1}\\right)$.",
    "Ideal Gas Entropy ($T$ and $V$): $\\Delta S = C_v \\ln\\left(\\frac{T_2}{T_1}\\right) + R \\ln\\left(\\frac{V_2}{V_1}\\right)$.",
    "Phase Change Entropy: $\\Delta S_{tr} = \\frac{\\Delta H_{tr}}{T_{tr}}$.",
    "Third Law Axiom: $\\lim_{T \\to 0\\text{ K}} S = 0$ for perfect crystalline solids.",
    "Gouy-Stodola Lost Work: $W_{\\text{lost}} = T_0 S_{gen}$.",
    "Turbine Isentropic Efficiency: $\\eta_t = \\frac{H_1 - H_2}{H_1 - H_{2s}}$.",
    "Exam Scoring Tip: Heat addition to an isothermal reservoir alters surroundings entropy by $\\Delta S_{surr} = -Q / T_{surr}$ regardless of whether the internal system process was reversible or irreversible."
])

add("Chemical Engineering Thermodynamics — I", 5, "Gibbs Free Energy", [
    "Thermodynamic Potentials & Fundamental Property Relations: Internal energy $dU = T dS - P dV$; Enthalpy $dH = T dS + V dP$; Helmholtz free energy $A = U - T S \\implies dA = -S dT - P dV$; Gibbs free energy $G = H - T S \\implies dG = -S dT + V dP$.",
    "Maxwell's Thermodynamic Relations: Derived from exact differentials of $U, H, A, G$: (1) $\\left(\\frac{\\partial T}{\\partial V}\\right)_S = -\\left(\\frac{\\partial P}{\\partial S}\\right)_V$; (2) $\\left(\\frac{\\partial T}{\\partial P}\\right)_S = \\left(\\frac{\\partial V}{\\partial S}\\right)_P$; (3) $\\left(\\frac{\\partial P}{\\partial T}\\right)_V = \\left(\\frac{\\partial S}{\\partial V}\\right)_T$; (4) $\\left(\\frac{\\partial V}{\\partial T}\\right)_P = -\\left(\\frac{\\partial S}{\\partial P}\\right)_T$.",
    "Gibbs Energy as Spontaneity & Equilibrium Criterion: At constant temperature and pressure ($T, P$), differential $dG_{T, P} \\le 0$; $dG < 0$ denotes spontaneous natural process; $dG = 0$ defines thermodynamic equilibrium; Gibbs energy is minimized at equilibrium.",
    "Helmholtz Free Energy Criterion: At constant temperature and volume ($T, V$), differential $dA_{T, V} \\le 0$; Equilibrium attained when Helmholtz energy is minimized; $dA = -dW_{max}$ represents maximum work obtainable.",
    "Residual Properties ($M^R$): Difference between real fluid molar property and ideal gas property at same $T$ and $P$: $M^R(T, P) = M(T, P) - M^{ig}(T, P)$; Residual Gibbs energy $\\frac{G^R}{R T} = \\int_0^P (Z - 1) \\frac{dP}{P}$; Residual enthalpy $\\frac{H^R}{R T} = -T \\int_0^P \\left(\\frac{\\partial Z}{\\partial T}\\right)_P \\frac{dP}{P}$.",
    "Fugacity & Fugacity Coefficient of Pure Species: Fugacity $f$ has pressure units, replacing pressure in real fluids: $dG = R T d\\ln f$ at constant $T$; Fugacity coefficient $\\phi = f / P$; $\\lim_{P \\to 0} \\phi = 1.0$; Evaluated from equation of state: $\\ln\\phi = \\int_0^P (Z - 1) \\frac{dP}{P}$.",
    "Fugacity of Pure Liquids & Poynting Correction: At saturation vapor-liquid equilibrium: $f^L(T, P^{\\text{sat}}) = f^V(T, P^{\\text{sat}}) = \\phi^{\\text{sat}} P^{\\text{sat}}$; Compressed liquid fugacity at pressure $P > P^{\\text{sat}}$: $f^L(T, P) = \\phi^{\\text{sat}} P^{\\text{sat}} \\exp\\left[\\frac{V_L (P - P^{\\text{sat}})}{R T}\\right]$.",
    "Chemical Potential ($\\mu_i$): Partial molar Gibbs energy: $\\mu_i = \\left(\\frac{\\partial G}{\\partial n_i}\\right)_{T, P, n_{j \\ne i}}$; Fundamental criterion for phase equilibrium: chemical potential of each component must be identical across all coexisting phases: $\\mu_i^\\alpha = \\mu_i^\\beta = \\dots = \\mu_i^\\pi$.",
    "Gibbs-Helmholtz Equation: Temperature dependency of Gibbs free energy: $\\left[\\frac{\\partial(G/T)}{\\partial T}\\right]_P = -\\frac{H}{T^2}$ or $\\left[\\frac{\\partial(\\Delta G^\\circ / T)}{\\partial T}\\right]_P = -\\frac{\\Delta H^\\circ}{T^2}$; Links equilibrium constant temperature variation (van 't Hoff equation) to reaction enthalpy.",
    "University Examination Strategy: Derive the four Maxwell relations using cross-differentiation of state functions, calculate the fugacity coefficient using a given EOS, and formulate the Poynting correction factor."
], [
    "Fundamental Property Relation for $G$: $dG = -S dT + V dP$.",
    "Fourth Maxwell Relation: $\\left(\\frac{\\partial V}{\\partial T}\\right)_P = -\\left(\\frac{\\partial S}{\\partial P}\\right)_T$.",
    "Third Maxwell Relation: $\\left(\\frac{\\partial P}{\\partial T}\\right)_V = \\left(\\frac{\\partial S}{\\partial V}\\right)_T$.",
    "Gibbs Spontaneity Criterion: $dG_{T, P} \\le 0$ ($dG = 0$ at equilibrium).",
    "Residual Gibbs Free Energy: $\\frac{G^R}{R T} = \\int_0^P (Z - 1) \\frac{dP}{P}$.",
    "Fugacity Coefficient Integral: $\\ln\\phi = \\int_0^P (Z - 1) \\frac{dP}{P}$.",
    "Poynting Correction Factor: $\\exp\\left[\\frac{V_L(P - P^{\\text{sat}})}{R T}\\right]$.",
    "Phase Equilibrium Criterion: $\\mu_i^\\alpha = \\mu_i^\\beta$ for all components $i$.",
    "Gibbs-Helmholtz Equation: $\\left[\\frac{\\partial(G/T)}{\\partial T}\\right]_P = -\\frac{H}{T^2}$.",
    "Exam Scoring Tip: The Poynting factor accounts for the effect of total pressure exceeding saturation pressure on liquid fugacity and is significant only at high pressures ($>20\\text{ bar}$)."
])

# Save updated dataset
with open('scripts/sem3_btech_missing_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
