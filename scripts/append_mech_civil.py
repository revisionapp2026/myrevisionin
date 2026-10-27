import json

with open('scripts/data_btech_sem3_mech_civil_full.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Additional data to append
additional_code = '''
    # -------------------------------------------------------------------------
    # THERMODYNAMICS
    # -------------------------------------------------------------------------
    ("Thermodynamics", 1): {
        "title": "Basic Concepts & Laws",
        "highlights": [
            "Macroscopic vs Microscopic Thermodynamics: Classical continuum approach using state coordinates ($P, V, T$) vs statistical molecular kinematics.",
            "Thermodynamic Systems & Boundaries: Open systems (mass and energy transfer across control surface, e.g. turbine), Closed systems (energy transfer only, e.g. piston-cylinder), Isolated systems (neither mass nor energy, e.g. universe).",
            "State Postulate & Properties: State of simple compressible substance completely specified by two independent intensive properties; Intensive (pressure, temperature, density) vs Extensive (mass, total volume, total internal energy).",
            "Zeroth Law of Thermodynamics: If body A and body B are each in thermal equilibrium with third body C, they are in thermal equilibrium with each other; Establishes temperature as unique empirical state variable.",
            "Quasi-Static Reversible Processes: Successive states infinitesimally close to thermodynamic equilibrium; Maximum work output during expansion and minimum work input during compression.",
            "Work and Heat Interactions: Path functions represented by inexact differentials ($\\delta W = P dV, \\delta Q$); Area under $P-V$ diagram represents boundary work $\\int P dV$; Area under $T-S$ diagram represents reversible heat transfer $\\int T dS$.",
            "First Law for Closed System Cycles: Net cyclic work equals net cyclic heat transfer: $\\oint \\delta Q = \\oint \\delta W$; Proves internal energy $U$ is a property: $dQ - dW = dU$.",
            "First Law for Steady Flow (SFEE): Steady flow energy equation across control volume: $\\dot{m}\\left(h_1 + \\frac{v_1^2}{2} + g z_1\\right) + \\dot{Q} = \\dot{m}\\left(h_2 + \\frac{v_2^2}{2} + g z_2\\right) + \\dot{W}_s$; Applied to nozzles ($v_2 = \\sqrt{2(h_1 - h_2)}$), compressors, and boilers.",
            "Specific Heats & Enthalpy of Ideal Gas: Enthalpy definition $H = U + P V$; For ideal gas, $du = c_v dT$ and $dh = c_p dT$ strictly (Joule's law); Mayer's relation $c_p - c_v = R$; Specific heat ratio $\\gamma = c_p / c_v$.",
            "University Examination Strategy: State Kelvin-Planck and Clausius formulations of the Second Law, derive SFEE from Reynolds transport theorem, and sketch $P-V$ diagrams for isothermal vs adiabatic processes."
        ],
        "keyPoints": [
            "Zeroth Law Basis: Thermal equilibrium basis for all temperature measurement scales.",
            "Boundary Work Formula: $W = \\int_{V_1}^{V_2} P dV$ (valid strictly for reversible processes).",
            "Polytropic Work Formula: $W = \\frac{P_1 V_1 - P_2 V_2}{n - 1}$ for process $P V^n = C$.",
            "Isothermal Work of Ideal Gas: $W = P_1 V_1 \\ln\\left(\\frac{V_2}{V_1}\\right) = m R T \\ln\\left(\\frac{P_1}{P_2}\\right)$.",
            "First Law for Closed System: $dQ = dU + dW$.",
            "SFEE Nozzle Velocity: $v_2 = \\sqrt{2(h_1 - h_2)}$ assuming negligible inlet velocity.",
            "Enthalpy Definition: $H = U + P V$ (and $h = u + P v$).",
            "Ideal Gas Characteristic Equation: $P v = R T$, where $R = \\bar{R} / M$.",
            "Mayer's Equation: $c_p - c_v = R$.",
            "Exam Scoring Tip: For throttling processes (e.g. porous plug or expansion valve), enthalpy remains constant ($h_1 = h_2$) with zero work output and negligible heat transfer."
        ]
    },
    ("Thermodynamics", 2): {
        "title": "Entropy",
        "highlights": [
            "Clausius Inequality: For any thermodynamic cycle, cyclic integral of $\\delta Q / T \\le 0$; Equals zero for reversible cycle ($\\oint \\frac{\\delta Q_{rev}}{T} = 0$), proving entropy $S$ is a true thermodynamic property ($dS = \\frac{\\delta Q_{rev}}{T}$).",
            "Principle of Increase of Entropy: For any isolated system, entropy never decreases: $dS_{iso} \\ge 0$; Entropy change of universe $\\Delta S_{univ} = \\Delta S_{sys} + \\Delta S_{surr} \\ge 0$; Dictates spontaneous arrow of time.",
            "T-ds Equations for Pure Substances: First relation $T dS = dU + P dV$; Second relation $T dS = dH - V dP$; Fundamental relations expressing entropy differential in terms of state coordinates.",
            "Entropy Change of Ideal Gases: $\\Delta S = c_v \\ln(T_2/T_1) + R \\ln(v_2/v_1) = c_p \\ln(T_2/T_1) - R \\ln(P_2/P_1)$; For isentropic process ($dS = 0$), derives $P v^\\gamma = \\text{constant}$.",
            "Entropy Change During Phase Transformations: Latent heat transfer at constant saturation temperature: $\\Delta S = \\frac{L}{T_{sat}} = \\frac{h_{fg}}{T_{sat}}$.",
            "Isentropic Efficiencies of Turbines and Compressors: Turbine efficiency $\\eta_t = \\frac{h_1 - h_{2a}}{h_1 - h_{2s}}$ (actual to isentropic work); Compressor efficiency $\\eta_c = \\frac{h_{2s} - h_1}{h_{2a} - h_1}$ (isentropic to actual input).",
            "Third Law of Thermodynamics: Nernst heat theorem: The entropy of a pure crystalline substance approaches absolute zero ($S = 0$) as thermodynamic temperature approaches absolute zero ($T \\to 0\\text{ K}$).",
            "Entropy Generation ($\\Delta S_{gen}$): Quantifies thermodynamic irreversibilities (friction, unrestrained expansion, mixing, finite temperature heat transfer); $\\Delta S_{sys} = \\int \\frac{\\delta Q}{T} + S_{gen}$ where $S_{gen} > 0$ for real processes.",
            "Temperature-Entropy ($T-S$) Diagram: Area under reversible process path represents heat transfer $Q = \\int T dS$; Vertical line represents reversible adiabatic (isentropic) process.",
            "University Examination Strategy: Prove that entropy is a state property using Clausius inequality, calculate entropy change of ideal gas, and evaluate isentropic efficiency of steam turbines."
        ],
        "keyPoints": [
            "Entropy Definition: $dS = \\left(\\frac{\\delta Q}{T}\\right)_{rev}$.",
            "Clausius Theorem: $\\oint \\frac{\\delta Q}{T} = 0$ (Reversible), $\\oint \\frac{\\delta Q}{T} < 0$ (Irreversible).",
            "First T-ds Equation: $T dS = dU + P dV$.",
            "Second T-ds Equation: $T dS = dH - V dP$.",
            "Gas Entropy from P and T: $\\Delta S = c_p \\ln\\left(\\frac{T_2}{T_1}\\right) - R \\ln\\left(\\frac{P_2}{P_1}\\right)$.",
            "Gas Entropy from V and T: $\\Delta S = c_v \\ln\\left(\\frac{T_2}{T_1}\\right) + R \\ln\\left(\\frac{v_2}{v_1}\\right)$.",
            "Turbine Isentropic Efficiency: $\\eta_t = \\frac{h_1 - h_{2a}}{h_1 - h_{2s}}$.",
            "Compressor Isentropic Efficiency: $\\eta_c = \\frac{h_{2s} - h_1}{h_{2a} - h_1}$.",
            "Phase Change Entropy: $\\Delta S_{vap} = \\frac{h_{fg}}{T_{sat}}$.",
            "Exam Tip: In reversible adiabatic processes, entropy is constant ($S_1 = S_2$), but in irreversible adiabatic processes (e.g. throttling), entropy strictly increases ($S_2 > S_1$)."
        ]
    },
    ("Thermodynamics", 3): {
        "title": "Availability",
        "highlights": [
            "Availability (Exergy) Concept: Maximum theoretical useful work obtainable from a system as it comes into complete thermodynamic dead state equilibrium with ambient surroundings ($P_0, T_0$).",
            "Dead State Definition: System is at resting ambient pressure $P_0$, temperature $T_0$, velocity $v = 0$, and elevation $z = 0$, incapable of producing further spontaneous work.",
            "Exergy of a Closed System: Non-flow exergy $\\Phi = (U - U_0) + P_0(V - V_0) - T_0(S - S_0) + \\frac{m v^2}{2} + m g z$; Specific non-flow exergy $\\phi = (u - u_0) + P_0(v - v_0) - T_0(s - s_0)$.",
            "Exergy of a Steady Flow Stream: Flow exergy $\\psi = (h - h_0) - T_0(s - s_0) + \\frac{v^2}{2} + g z$; Reversible work between two states $W_{rev} = \\psi_1 - \\psi_2$.",
            "Gouy-Stodola Theorem of Irreversibility: Lost work (irreversibility $I$) is directly proportional to total entropy generation: $I = W_{rev} - W_{act} = T_0 S_{gen}$; Quantifies destruction of available energy.",
            "Second Law Efficiency (Exergetic Efficiency): $\\eta_{II} = \\frac{\\text{Exergy Recovered}}{\\text{Exergy Supplied}} = \\frac{W_{act}}{W_{rev}} = \\frac{\\eta_I}{\\eta_{rev}}$; Measures performance against thermodynamic optimum rather than energy quantity.",
            "Exergy Destruction in Heat Exchangers: Heat transfer across finite temperature difference $\\Delta T = T_H - T_C$ produces irreversible exergy destruction: $I = T_0 Q \\left(\\frac{1}{T_C} - \\frac{1}{T_H}\\right)$.",
            "Exergy Balance Equation: $\\sum \\text{Exergy}_{in} - \\sum \\text{Exergy}_{out} - \\text{Exergy Destruction} = \\Delta \\text{Exergy}_{sys}$.",
            "Decreasing Available Energy: As high-temperature heat transfers to lower temperature reservoirs, total thermal energy is conserved (First Law), but quality and work capability are irreversibly degraded (Second Law).",
            "University Examination Strategy: Calculate maximum work obtainable from finite thermal reservoirs, determine exergy destruction via Gouy-Stodola theorem, and compare First Law vs Second Law efficiencies."
        ],
        "keyPoints": [
            "Dead State Standards: Typically $T_0 = 298.15\\text{ K}$ ($25^\\circ\\text{C}$) and $P_0 = 101.325\\text{ kPa}$ (1 atm).",
            "Closed System Exergy: $\\Phi = (U - U_0) + P_0(V - V_0) - T_0(S - S_0)$.",
            "Flow Stream Exergy: $\\psi = (h - h_0) - T_0(s - s_0) + \\frac{v^2}{2} + g z$.",
            "Gouy-Stodola Irreversibility Law: $I = T_0 S_{gen}$.",
            "Second Law Efficiency: $\\eta_{II} = \\frac{\\text{Exergy Output}}{\\text{Exergy Input}} = 1 - \\frac{I}{\\text{Exergy Input}}$.",
            "Exergy of Heat Transfer: $\\text{Ex}_Q = Q\\left(1 - \\frac{T_0}{T}\\right)$.",
            "Exergy Destruction Rate: $\\dot{I} = T_0 \\dot{S}_{gen} \\ge 0$.",
            "Available Energy Fraction: Carnot factor $(1 - T_0/T)$ represents the maximum convertible fraction of heat.",
            "Unavailable Energy: Portion of heat rejected to environment: $UE = T_0 \\Delta S$.",
            "Exam Scoring Tip: Work possesses 100% exergy ($\text{Ex}_W = W$), whereas heat possesses exergy limited strictly by the Carnot factor."
        ]
    },
    ("Thermodynamics", 4): {
        "title": "Properties of Steam",
        "highlights": [
            "Pure Substance Phase Diagrams: $P-v$, $T-s$, and $h-s$ (Mollier diagram) phase spaces; Saturation dome enclosing vapor-liquid coexistence region; Liquid saturation line ($x=0$) and vapor saturation line ($x=1$) meeting at critical point.",
            "Critical Point Parameters for Water: Critical temperature $T_c = 373.95^\\circ\\text{C}$ ($647.1\\text{ K}$), critical pressure $P_c = 22.064\\text{ MPa}$ ($220.64\\text{ bar}$), critical volume $v_c = 0.003106\\text{ m}^3/\\text{kg}$; Latent heat of vaporization drops to strictly zero at critical point.",
            "Dryness Fraction (Quality $x$): Ratio of mass of dry saturated steam to total mass of wet steam mixture: $x = \\frac{m_g}{m_f + m_g}$; Varies from $x = 0$ (saturated liquid) to $x = 1$ (dry saturated vapor).",
            "Thermodynamic Properties in Wet Region: Specific volume $v = v_f + x v_{fg} \\approx x v_g$; Specific enthalpy $h = h_f + x h_{fg}$; Specific internal energy $u = u_f + x u_{fg}$; Specific entropy $s = s_f + x s_{fg}$.",
            "Superheated Steam Region: Vapor heated above saturation temperature at given pressure ($T > T_{sat}$); Degree of superheat $\\Delta T = T - T_{sat}$; Enthalpy $h = h_g + c_{ps}(T - T_{sat})$ where $c_{ps} \\approx 2.1\\text{ kJ/(kg}\\cdot\\text{K)}$.",
            "Subcooled (Compressed) Liquid Region: Liquid at temperature below saturation temperature at given pressure ($T < T_{sat}$); Properties approximated closely by saturated liquid values at local temperature: $h \\approx h_f(T)$.",
            "Mollier Chart ($h-s$ Diagram): Enthalpy vs entropy representation; Constant pressure lines slope upward with slope $(\\partial h / \\partial s)_P = T$; Isentropic expansion across steam turbine appears as vertical downward drop.",
            "Measurement of Steam Quality (Calorimetry): Barrel calorimeter, Separating calorimeter (mechanical droplet removal), Throttling calorimeter (expansion into superheated region where $h_1 = h_2$), and Combined Separating & Throttling calorimeter for wet steam.",
            "Clapeyron-Clausius Equation for Phase Change: Relates saturation pressure slope to latent heat: $\\left(\\frac{dP}{dT}\\right)_{sat} = \\frac{h_{fg}}{T_{sat} v_{fg}}$.",
            "University Examination Strategy: Look up properties from steam tables at specified pressure and temperature, determine dryness fraction using throttling enthalpy balance, and plot isentropic expansion on Mollier chart."
        ],
        "keyPoints": [
            "Critical Point of Water: $P_c = 22.064\\text{ MPa}, \\; T_c = 373.95^\\circ\\text{C}$.",
            "Dryness Fraction Formula: $x = \\frac{m_v}{m_v + m_l}$.",
            "Wet Steam Enthalpy: $h = h_f + x h_{fg}$.",
            "Wet Steam Specific Volume: $v = (1 - x)v_f + x v_g \\approx x v_g$.",
            "Wet Steam Entropy: $s = s_f + x s_{fg}$.",
            "Superheated Steam Enthalpy: $h = h_g + c_p(T_{sup} - T_{sat})$.",
            "Slope of Isobars on Mollier Chart: $\\left(\\frac{\\partial h}{\\partial s}\\right)_P = T$.",
            "Throttling Calorimeter Quality: $h_f + x h_{fg} = h_{g2} + c_{ps}(T_{sup2} - T_{sat2})$.",
            "Separating & Throttling Combined Quality: $x_{net} = x_1 \\times x_2$.",
            "Exam Scoring Tip: For throttled steam, $h_1 = h_2$ strictly; never use ideal gas formulas when evaluating properties inside the steam saturation dome."
        ]
    },
    ("Thermodynamics", 5): {
        "title": "Power Cycles",
        "highlights": [
            "Carnot Vapor Cycle & Practical Limitations: Ideal cycle between two temperatures; Impractical due to liquid droplet erosion during isentropic expansion and extreme difficulty of pumping wet two-phase mixture into boiler.",
            "Simple Rankine Vapor Power Cycle: Standard steam power plant cycle: 1-2 Isentropic pumping of water, 2-3 Constant-pressure heat addition in boiler, 3-4 Isentropic expansion in turbine, 4-1 Constant-pressure heat rejection in condenser.",
            "Rankine Cycle Thermal Efficiency: $\\eta_{th} = \\frac{W_{net}}{Q_{in}} = \\frac{(h_3 - h_4) - (h_2 - h_1)}{h_3 - h_2}$; Pump work $w_p = h_2 - h_1 = v_f(P_2 - P_1)$ is small ($<1-2\\%$ of turbine work).",
            "Rankine Cycle with Reheat: Steam expanded partially in High Pressure (HP) turbine, returned to boiler reheater at intermediate pressure, and expanded through Low Pressure (LP) turbine; Increases cycle thermal efficiency and raises turbine exhaust dryness fraction ($x_4 > 0.88$).",
            "Regenerative Rankine Cycle: Steam bled from intermediate turbine stages to preheat boiler feedwater in Open or Closed Feedwater Heaters (FWH); Reduces irreversibilities during boiler heat addition.",
            "Air Standard Otto Cycle (Spark Ignition / Petrol): Two isochoric and two isentropic processes; Thermal efficiency $\\eta_{Otto} = 1 - \\frac{1}{r^{\\gamma-1}}$ where compression ratio $r = V_1/V_2$; Limited by auto-ignition knock.",
            "Air Standard Diesel Cycle (Compression Ignition): Heat addition at constant pressure; Efficiency $\\eta_{Diesel} = 1 - \\frac{1}{r^{\\gamma-1}}\\left[\\frac{r_c^\\gamma - 1}{\\gamma(r_c - 1)}\\right]$ where cutoff ratio $r_c = V_3/V_2$; For same compression ratio, $\\eta_{Otto} > \\eta_{Diesel}$.",
            "Dual Combustion (Sabathe) Cycle: Compromise cycle; Heat added partly at constant volume and partly at constant pressure; Accurately models modern high-speed diesel engines.",
            "Brayton (Joule) Gas Turbine Cycle: Open/closed gas turbine cycle comprising isentropic compression, constant-pressure combustion, isentropic expansion, and constant-pressure exhaust/cooling; Efficiency $\\eta = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$ where pressure ratio $r_p = P_2/P_1$.",
            "University Examination Strategy: Draw $T-s$ and $P-v$ diagrams for Rankine, Otto, and Diesel cycles, derive efficiency formulas in terms of compression ratio, and compute reheat steam cycle efficiencies."
        ],
        "keyPoints": [
            "Rankine Efficiency Formula: $\\eta = \\frac{W_t - W_p}{Q_{in}} = \\frac{(h_1 - h_2) - v_f(P_{boiler} - P_{cond})}{h_1 - h_4}$.",
            "Pump Work Formula: $w_p = v_f(P_2 - P_1) \\times 10^2$ kJ/kg (with $P$ in bar).",
            "Otto Cycle Efficiency: $\\eta = 1 - \\frac{1}{r^{\\gamma - 1}}$.",
            "Diesel Cycle Efficiency: $\\eta = 1 - \\frac{1}{r^{\\gamma - 1}}\\left[\\frac{r_c^\\gamma - 1}{\\gamma(r_c - 1)}\\right]$.",
            "Brayton Cycle Efficiency: $\\eta = 1 - \\frac{1}{r_p^{(\\gamma - 1)/\\gamma}}$.",
            "Maximum Work in Brayton Cycle: Occurs at optimum pressure ratio $r_{p, opt} = (T_{max}/T_{min})^{\\gamma/[2(\\gamma-1)]}$.",
            "Comparison for Same Peak P & T: $\\eta_{Diesel} > \\eta_{Dual} > \\eta_{Otto}$.",
            "Comparison for Same Compression Ratio: $\\eta_{Otto} > \\eta_{Dual} > \\eta_{Diesel}$.",
            "Reheat Primary Benefit: Prevents condensation moisture erosion in LP turbine blade tips.",
            "Exam Scoring Tip: In Rankine cycle problems, always check turbine exhaust steam quality; if $x_4 < 0.88$, state that excessive moisture will erode turbine blading."
        ]
    }
'''

# Find the insertion point before the closing brace
idx = content.rfind('}')
if idx != -1:
    new_content = content[:idx] + additional_code + '\n}\n'
    with open('scripts/data_btech_sem3_mech_civil_full.py', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Appended Thermodynamics units successfully!")
else:
    print("Could not find closing brace in data_btech_sem3_mech_civil_full.py")
