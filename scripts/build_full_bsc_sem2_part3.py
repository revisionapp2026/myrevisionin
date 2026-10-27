import json

papers = {}

def add_paper(key, q_list):
    papers[key] = q_list

# =========================================================================
# 5. PHYSICAL CHEMISTRY II (B.Sc Chemistry / Life Sciences)
# =========================================================================
add_paper("chem_set1", [
    {"id": "bsc-pc-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the Second Law of Thermodynamics in terms of entropy.",
     "answer_lines": ["In any spontaneous / irreversible process, the total entropy of an isolated system (system + surroundings) always increases: $\\Delta S_{univ} > 0$."]},
    {"id": "bsc-pc-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State Raoult's Law for ideal solutions.",
     "answer_lines": ["The partial vapor pressure of any volatile component in an ideal solution is equal to the vapor pressure of the pure component multiplied by its mole fraction: $p_A = x_A p_A^\\circ$."]},
    {"id": "bsc-pc-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Write the Gibbs Phase Rule equation and define degrees of freedom.",
     "answer_lines": ["$$F = C - P + 2$$ where $F$ is degrees of freedom (independent intensive variables needed to define equilibrium state), $C$ is number of components, and $P$ is number of phases."]},
    {"id": "bsc-pc-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State Kohlrausch's Law of Independent Migration of Ions.",
     "answer_lines": ["At infinite dilution, the molar conductivity of an electrolyte is equal to the sum of the individual ionic molar conductivities: $\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$."]},
    {"id": "bsc-pc-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the Nernst Equation for a single electrode potential.",
     "answer_lines": ["$$E = E^\\circ - \\frac{2.303 R T}{n F} \\log_{10} Q = E^\\circ - \\frac{0.0591}{n} \\log_{10}\\left(\\frac{[\\text{Red}]}{[\\text{Ox}]}\\right) \\quad \\text{at } 298\\text{ K}$$"]},
    {"id": "bsc-pc-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Derive the efficiency of a Carnot heat engine. Show that thermodynamic entropy is a state function: $\\oint \\frac{dQ_{rev}}{T} = 0$.",
     "answer_lines": [
         "**1. Carnot Cycle**: Consists of: (1) Reversible isothermal expansion at $T_H$, (2) Reversible adiabatic expansion from $T_H$ to $T_C$, (3) Reversible isothermal compression at $T_C$, (4) Reversible adiabatic compression back to $T_H$.",
         "**2. Efficiency**: Work done $W = Q_H - Q_C$.",
         "$$\\eta = \\frac{W}{Q_H} = \\frac{Q_H - Q_C}{Q_H} = 1 - \\frac{Q_C}{Q_H} = 1 - \\frac{T_C}{T_H}$$",
         "**3. Clausius Theorem**: $\\frac{Q_H}{T_H} = \\frac{Q_C}{T_C} \\implies \\frac{Q_H}{T_H} - \\frac{Q_C}{T_C} = 0 \\implies \\sum \\frac{Q_i}{T_i} = 0$. In infinitesimal limit for any reversible cycle:",
         "$$\\oint \\frac{dQ_{rev}}{T} = 0$$",
         "Since the closed contour integral vanishes, $\\int_A^B \\frac{dQ_{rev}}{T}$ is independent of path, defining the state function Entropy ($dS = \\frac{dQ_{rev}}{T}$)."
     ]},
    {"id": "bsc-pc-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain the Phase Diagram of the one-component Water System. Discuss areas, curves, and the Triple Point.",
     "answer_lines": [
         "**1. Phase Rule for 1-component**: $F = 1 - P + 2 = 3 - P$.",
         "**2. Three Univariant Curves ($P = 2 \\implies F = 1$)**:",
         "• **Curve OA (Vaporization curve)**: Liquid $\\rightleftharpoons$ Vapor equilibrium ending at critical point ($374^\\circ\\text{C}, 218\\text{ atm}$).",
         "• **Curve OB (Sublimation curve)**: Solid (Ice) $\\rightleftharpoons$ Vapor down to absolute zero.",
         "• **Curve OC (Fusion curve)**: Ice $\\rightleftharpoons$ Liquid. Uniquely has a negative slope ($dP/dT < 0$) because ice contracts upon melting (liquid density > ice density).",
         "**3. Triple Point O ($P = 3 \\implies F = 0$, Invariant)**:",
         "All three phases (Ice, Water, Vapor) coexist in equilibrium at $T = 0.0098^\\circ\\text{C} (273.16\\text{ K})$ and $P = 4.58\\text{ mmHg}$ ($0.006\\text{ atm}$)."
     ]},
    {"id": "bsc-pc-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Derive the thermodynamic relation for Elevation of Boiling Point (Ebullioscopy) and relate it to the molecular weight of a non-volatile solute.",
     "answer_lines": [
         "**1. Thermodynamic Equilibrium**: At boiling point, chemical potential of solvent in solution equals chemical potential of pure solvent vapor: $\\mu_A(soln) = \\mu_A^*(g)$.",
         "$$\\mu_A^*(l) + R T \\ln x_A = \\mu_A^*(g) \\implies \\ln x_A = \\frac{\\mu_A^*(g) - \\mu_A^*(l)}{R T} = \\frac{\\Delta G_{vap}}{R T}$$",
         "**2. Differentiating with respect to $T$** (Gibbs-Helmholtz):",
         "$$\\frac{d\\ln x_A}{dT} = -\\frac{\\Delta H_{vap}}{R T^2}$$",
         "For dilute solution, $x_A = 1 - x_B \\implies \\ln x_A \\approx -x_B = -\\frac{n_B}{n_A + n_B} \\approx -\\frac{w_B / M_B}{w_A / M_A}$.",
         "Integrating between $T_0$ and $T_b$: $\\Delta T_b = T_b - T_0 = \\frac{R T_0^2 M_A}{\\Delta H_{vap} 1000} m = K_b m$.",
         "**3. Molecular Weight**: $M_B = \\frac{1000 K_b w_B}{\\Delta T_b w_A}$."
     ]},
    {"id": "bsc-pc-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Conductometric Titrations. Discuss the titration curves for: (i) Strong Acid vs Strong Base, (ii) Weak Acid vs Strong Base, (iii) Strong Acid vs Weak Base.",
     "answer_lines": [
         "**1. Principle**: Electrical conductance depends on concentration and mobility of ions. Hydrogen ion ($H^+$: $349.8\\text{ S}\\cdot\\text{cm}^2/\\text{mol}$) and hydroxyl ion ($OH^-$: $198.6\\text{ S}\\cdot\\text{cm}^2/\\text{mol}$) have exceptionally high mobilities via Grotthuss proton hopping.",
         "**2. Titration Curves**:",
         "• **Strong Acid (HCl) vs Strong Base (NaOH)**: Conductance drops steeply as fast $H^+$ are replaced by slower $Na^+$. Beyond equivalence point, excess $OH^-$ causes steep rise. V-shaped curve with sharp minimum.",
         "• **Weak Acid ($CH_3COOH$) vs Strong Base (NaOH)**: Initial slight dip, then slight rise due to common ion effect of acetate buffer, followed by sharp upward break beyond equivalence point due to free $OH^-$.",
         "• **Strong Acid (HCl) vs Weak Base ($NH_4OH$)**: Initial sharp drop due to consumption of $H^+$. Beyond equivalence point, conductance remains nearly constant because $NH_4OH$ is weakly dissociated."
     ]},
    {"id": "bsc-pc-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Derive the Van 't Hoff reaction isobar equation $\\frac{d\\ln K_p}{dT} = \\frac{\\Delta H^\\circ}{R T^2}$ and explain the temperature dependence of equilibrium constants for exothermic and endothermic reactions.",
     "answer_lines": [
         "**1. Thermodynamic Derivation**: We know $\\Delta G^\\circ = -R T \\ln K_p \\implies \\ln K_p = -\\frac{\\Delta G^\\circ}{R T}$.",
         "Differentiating with respect to $T$:",
         "$$\\frac{d\\ln K_p}{dT} = -\\frac{1}{R}\\frac{d(\\Delta G^\\circ / T)}{dT}$$",
         "Using Gibbs-Helmholtz equation $\\left[\\frac{\\partial(\\Delta G/T)}{\\partial T}\\right]_P = -\\frac{\\Delta H}{T^2}$:",
         "$$\\frac{d\\ln K_p}{dT} = -\\frac{1}{R}\\left( -\\frac{\\Delta H^\\circ}{T^2} \\right) = \\frac{\\Delta H^\\circ}{R T^2}$$",
         "**2. Analysis**:",
         "• **Endothermic ($\\Delta H^\\circ > 0$)**: $\\frac{d\\ln K_p}{dT} > 0$. Increasing temperature increases $K_p$, shifting equilibrium toward products (Le Chatelier's principle).",
         "• **Exothermic ($\\Delta H^\\circ < 0$)**: $\\frac{d\\ln K_p}{dT} < 0$. Increasing temperature decreases $K_p$, shifting equilibrium toward reactants."
     ]}
])

add_paper("chem_set2", [
    {"id": "bsc-pc-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define chemical potential $\\mu_i$ of a component in a mixture.",
     "answer_lines": ["$$\\mu_i = \\left(\\frac{\\partial G}{\\partial n_i}\\right)_{T, P, n_{j \\ne i}}$$ It represents the rate of change of Gibbs free energy with respect to moles of component $i$ at constant $T, P$, and other amounts."]},
    {"id": "bsc-pc-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the condition of spontaneity in terms of Gibbs free energy $\\Delta G$.",
     "answer_lines": ["At constant temperature and pressure, a process is spontaneous if $\\Delta G < 0$, at equilibrium if $\\Delta G = 0$, and non-spontaneous if $\\Delta G > 0$."]},
    {"id": "bsc-pc-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is an azeotropic mixture?",
     "answer_lines": ["A constant-boiling liquid mixture that boils at a characteristic temperature without change in composition; vapor and liquid phases have identical molar fractions."]},
    {"id": "bsc-pc-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define ionic mobility and write its units.",
     "answer_lines": ["The distance traveled by an ion per second under a potential gradient of $1\\text{ V/cm}$: $u = \\frac{v}{E}$ with units $\\text{cm}^2\\cdot\\text{V}^{-1}\\cdot\\text{s}^{-1}$."]},
    {"id": "bsc-pc-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is transport number of an ion?",
     "answer_lines": ["The fraction of total electrical current carried by that specific ion: $t_+ = \\frac{u_+}{u_+ + u_-}$ and $t_- = \\frac{u_-}{u_+ + u_-}$, with $t_+ + t_- = 1$."]},
    {"id": "bsc-pc-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Derive the integrated Van 't Hoff equation and calculate equilibrium constant $K_2$ at $350\\text{ K}$ given $K_1 = 1.8 \\times 10^{-4}$ at $298\\text{ K}$ and $\\Delta H^\\circ = +54.0\\text{ kJ/mol}$.",
     "answer_lines": [
         "**1. Integration**: $\\int_{K_1}^{K_2} d\\ln K = \\frac{\\Delta H^\\circ}{R}\\int_{T_1}^{T_2} \\frac{dT}{T^2}$:",
         "$$\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left( \\frac{1}{T_2} - \\frac{1}{T_1} \\right) = \\frac{\\Delta H^\\circ}{R}\\left( \\frac{T_2 - T_1}{T_1 T_2} \\right)$$",
         "**2. Numerical Substitution**:",
         "• $\\Delta H^\\circ = 54,000\\text{ J/mol}, R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K}), T_1 = 298\\text{ K}, T_2 = 350\\text{ K}$.",
         "$$\\ln\\left(\\frac{K_2}{K_1}\\right) = \\frac{54000}{8.314}\\left( \\frac{350 - 298}{298 \\times 350} \\right) = 6495.07 \\times \\frac{52}{104300} = 6495.07 \\times 0.00049856 = 3.238$$",
         "$$\\frac{K_2}{K_1} = e^{3.238} = 25.48$$",
         "$$K_2 = 25.48 \\times 1.8 \\times 10^{-4} = 4.59 \\times 10^{-3}$$"
     ]},
    {"id": "bsc-pc-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain the Lead-Silver system phase diagram and its application in Pattinson's process for desilverization of lead.",
     "answer_lines": [
         "**1. System Type**: Two-component condensed system ($P + F = C + 1 = 3$).",
         "**2. Key Curves**:",
         "• Pure Lead melting point ($327^\\circ\\text{C}$): addition of silver lowers melting point along curve AC.",
         "• Pure Silver melting point ($961^\\circ\\text{C}$): addition of lead lowers melting point along curve BC.",
         "• **Eutectic Point C**: Curves AC and BC meet at $303^\\circ\\text{C}$ with $2.6\\% \\text{ Ag}$ ($97.4\\% \\text{ Pb}$). Invariant point ($F = 0$).",
         "**3. Pattinson's Process**: Argentiferous lead ore containing trace Ag ($0.1\\%$) is melted and cooled along liquid composition line. Pure lead crystals separate out first and are removed with ladles, concentrating silver in remaining liquid until eutectic composition ($2.6\\% \\text{ Ag}$) is reached for cupellation."
     ]},
    {"id": "bsc-pc-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain the determination of transport numbers by Hittorf's method and Moving Boundary method.",
     "answer_lines": [
         "**1. Hittorf's Principle**: Loss in amount of electrolyte around an electrode is proportional to speed of ion moving away from it.",
         "• Transport number $t_+ = \\frac{\\text{Fall in conc. around anode}}{\\text{Total fall in conc. around both electrodes}}$ (measured with silver coulometer).",
         "**2. Moving Boundary Method**: Direct optical measurement of velocity of boundary between two solutions having a common ion (e.g. $HCl$ principal and $CdCl_2$ indicator electrolyte).",
         "• In time $t$ under current $I$, boundary moves distance $l$ in tube of cross-section $A$:",
         "$$t_+ = \\frac{l A c F}{1000 I t}$$",
         "Provides higher precision and eliminates electrode reaction interferences."
     ]},
    {"id": "bsc-pc-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Derive the relation between EMF of a reversible electrochemical cell and thermodynamic quantities $\\Delta G, \\Delta H$, and $\\Delta S$.",
     "answer_lines": [
         "**1. Gibbs Free Energy**: Electrical work done is $W_{elec} = n F E$. At constant $T$ and $P$:",
         "$$\\Delta G = -n F E$$",
         "**2. Entropy**: From fundamental thermodynamic relation $\\left(\\frac{\\partial \\Delta G}{\\partial T}\\right)_P = -\\Delta S$:",
         "$$\\Delta S = -\\left[\\frac{\\partial(-n F E)}{\\partial T}\\right]_P = n F \\left(\\frac{\\partial E}{\\partial T}\\right)_P$$",
         "Where $\\left(\\frac{\\partial E}{\\partial T}\\right)_P$ is the temperature coefficient of cell EMF.",
         "**3. Enthalpy**: Using Gibbs-Helmholtz $\\Delta H = \\Delta G + T \\Delta S$:",
         "$$\\Delta H = -n F E + n F T \\left(\\frac{\\partial E}{\\partial T}\\right)_P = -n F \\left[ E - T \\left(\\frac{\\partial E}{\\partial T}\\right)_P \\right]$$"
     ]},
    {"id": "bsc-pc-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain the Van der Waals equation of state for real gases: $\\left(P + \\frac{a n^2}{V^2}\\right)(V - n b) = n R T$. Discuss critical constants $P_c, V_c, T_c$.",
     "answer_lines": [
         "**1. Corrections**: (1) Volume correction: Molecules occupy finite volume $b$ ($V_{eff} = V - b$). (2) Pressure correction: Intermolecular attractive forces reduce wall pressure by internal pressure $P_{int} = \\frac{a}{V^2}$.",
         "**2. Critical Constants**: At the critical point, the isotherm has an inflection point: $\\left(\\frac{\\partial P}{\\partial V}\\right)_{T_c} = 0$ and $\\left(\\frac{\\partial^2 P}{\\partial V^2}\\right)_{T_c} = 0$.",
         "Solving cubic in $V$: $(V - V_c)^3 = V^3 - 3V_c V^2 + 3V_c^2 V - V_c^3 = 0$.",
         "Comparing with Van der Waals equation gives:",
         "$$V_c = 3b, \\quad P_c = \\frac{a}{27b^2}, \\quad T_c = \\frac{8a}{27Rb}$$",
         "Critical compressibility factor: $Z_c = \\frac{P_c V_c}{R T_c} = \\frac{3}{8} = 0.375$."
     ]}
])

with open("scripts/bsc_sem2_part3.json", "w", encoding="utf-8") as f:
    json.dump(papers, f, indent=2)

print("Part 3 written.")
