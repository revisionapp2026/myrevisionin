import json
import os

with open("scripts/build_bsc_sem2_physics_chem.py", "r", encoding="utf-8") as f:
    content = f.read()

part4 = r'''
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
'''

content += part4

with open("scripts/build_bsc_sem2_physics_chem.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Units 2-5 of Subject 5 (Physical & General Chemistry II).")
