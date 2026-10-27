import json
import os

with open("scripts/build_bsc_sem2_physics_chem.py", "r", encoding="utf-8") as f:
    content = f.read()

part5 = r'''
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
'''

content += part5

with open("scripts/build_bsc_sem2_physics_chem.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subject 6 (Physical Chemistry II).")
