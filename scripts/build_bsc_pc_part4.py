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
# 9. ANALYTICAL CHEMISTRY (B.Sc)
# =========================================================================
add("Analytical Chemistry", 1, "Titrimetry", [
    "Foundational Principles of Volumetric Analysis: Stoichiometric chemical equivalence; Equivalence point (theoretical stoichiometric completion) vs End point (detectable physical change by indicator); Titration error.",
    "Primary vs Secondary Chemical Standards: Primary standards (high chemical purity $>99.9\\%$, known stoichiometry, atmospheric stability, high equivalent weight to minimize weighing errors: potassium hydrogen phthalate KHP, sodium carbonate $\\text{Na}_2\\text{CO}_3$, anhydrous oxalic acid) vs Secondary standards (solutions standardized against primary standards: $\\text{NaOH}, \\text{HCl}, \\text{KMnO}_4$).",
    "Acid-Base Neutralization Titrations: Neutralization curves; Strong acid - Strong base ($\text{HCl}$ vs $\text{NaOH}$: sharp vertical pH jump from 4 to 10 at equivalence point $\\text{pH} = 7.0$); Weak acid - Strong base (acetic acid vs $\text{NaOH}$: equivalence $\\text{pH} > 7.0$ due to conjugate base hydrolysis; buffer region $pH = pK_a + \\log([A^-]/[HA])$); Weak base - Strong acid (equivalence $\\text{pH} < 7.0$).",
    "Theory of Acid-Base Indicators: Ostwald's theory (indicators as weak organic acids $\\text{HIn}$ or bases whose un-ionized form displays distinct color from conjugate base $\\text{In}^-$); Transition range: $\\text{pH} = pK_{\\text{In}} \\pm 1$; Phenolphthalein (colorless $\\text{pH} < 8.2$, pink $\\text{pH} > 10.0$) and Methyl Orange (red $\\text{pH} < 3.1$, yellow $\\text{pH} > 4.4$).",
    "Complexometric Titrations with EDTA: Ethylenediaminetetraacetic acid ($\text{H}_4\\text{Y}$); Hexadentate chelating ligand forming extremely stable $1:1$ octahedral chelate complexes with metal cations ($\text{Ca}^{2+}, \\text{Mg}^{2+}, \\text{Zn}^{2+}$); Formation constant $K_f$; Conditional formation constant $K'_f = \\alpha_{Y^{4-}} K_f$ governed by pH; Buffering with $\\text{NH}_4\\text{Cl}-\\text{NH}_4\\text{OH}$ (pH 10).",
    "Metallochromic Indicators in Complexometry: Eriochrome Black T (EBT) and Murexide; Metal-indicator complex must be significantly less stable than metal-EDTA complex: $K_{\\text{M-In}} \\ll K_{\\text{M-EDTA}}$; Free EBT is blue at pH 10; Wine-red $\\text{Mg-EBT}$ complex converts to pure blue upon displacement by EDTA at stoichiometric end point.",
    "Precipitation Titrations & Argentometry: Titrations involving formation of sparingly soluble precipitates; Argentometric titration of halides using standard silver nitrate ($\\text{AgNO}_3$); Solubility product ($K_{sp}$) governing precipitation sequence.",
    "Argentometric Indicator Methodologies: (1) Mohr's Method: Chromate indicator ($\\text{K}_2\\text{CrO}_4$); Red-brown silver chromate ($\\text{Ag}_2\\text{CrO}_4$) precipitates only after chloride is exhausted; Neutral pH 7-8 requirement; (2) Volhard's Method: Back-titration of excess $\\text{Ag}^+$ with standard $\\text{KSCN}$ in acidic medium using $\\text{Fe}^{3+}$ indicator (blood-red $[\text{Fe(SCN)}]^{2+}$); (3) Fajans' Method: Adsorption indicators (fluorescein).",
    "Oxidation-Reduction (Redox) Titrations: Nernst equation governing electrode potential: $E = E^0 - \\frac{0.0591}{n} \\log\\frac{[\\text{Red}]}{[\\text{Ox}]}$; Permanganometry: Potassium permanganate ($\\text{KMnO}_4$) acting as self-indicator in acidic medium ($E^0 = +1.51\\text{ V}$, reduced to colorless $\\text{Mn}^{2+}$); Dichromatometry: Potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$) using diphenylamine internal indicator; Iodometry vs Iodimetry.",
    "University Examination Strategy: Plot and explain the neutralization titration curve for a weak acid vs strong base, explain the mechanism of Eriochrome Black T indicator in EDTA titrations, and compare Mohr's vs Volhard's argentometric methods."
], [
    "Equivalence vs End Point: Equivalence point is theoretical stoichiometric completion; End point is observable experimental indicator color transition.",
    "Henderson-Hasselbalch Buffer Equation: $pH = pK_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Weak Acid}]}$, governing titration curve buffer plateaus.",
    "Indicator Transition Window: Visual color transition spans approximately two pH units: $\\text{pH} = pK_{\\text{In}} \\pm 1$.",
    "EDTA Hexadentate Chelation: Binds metal ions through two amine nitrogens and four carboxylate oxygens, forming five stable chelate rings.",
    "Conditional Formation Constant: $K'_f = \\alpha_4 K_f$; quantifies effective EDTA binding capacity under pH-dependent ionization constraints.",
    "Mohr Titration pH Constraint: pH maintained strictly between 7 and 10; acidic pH dissolves chromate; basic pH precipitates silver oxide.",
    "Volhard Acidic Superiority: Operates in highly acidic nitric acid medium, preventing interference from carbonate, oxalate, and phosphate ions.",
    "KMnO4 Self-Indicator Property: The first fractional drop of unreacted permanganate imparts a persistent faint pink color, requiring no external indicator.",
    "Iodometry vs Iodimetry: Iodimetry is direct titration with standard iodine solution; Iodometry is indirect titration of liberated $I_2$ using thiosulfate.",
    "Exam Gold Tip: Always write the Nernst equation and calculate the theoretical potential at 50%, 100%, and 200% equivalence in redox titration answers."
])

add("Analytical Chemistry", 2, "Gravimetry", [
    "Gravimetric Analysis Foundational Principles: Quantitative determination of analyte mass via selective precipitation, isolation, washing, thermal drying / ignition, and analytical weighing; High absolute accuracy; Direct primary measurement without empirical calibration curves.",
    "Precipitate Formation Mechanics & Von Weimarn Ratio: Nucleation (formation of initial microscopic sub-nanometer particle nuclei) vs Crystal Growth (deposition of dissolved ions onto existing nuclei); Von Weimarn Relative Supersaturation (RSS): $\\text{RSS} = \\frac{Q - S}{S}$, where $Q$ is instantaneous solute concentration and $S$ is thermodynamic equilibrium solubility.",
    "Controlling Particle Size & Colloid Prevention: Minimizing RSS to favor crystal growth over spontaneous nucleation, producing large filterable crystalline precipitates rather than colloidal suspensions; Conditions: (1) Dilute solutions; (2) Slow reagent addition with vigorous stirring; (3) Hot solutions (elevating solubility $S$); (4) Maintaining optimal acidic pH.",
    "Colloidal Precipitates & Coagulation: Colloidal particles ($1-100\\text{ nm}$) held in suspension by primary electric double layers; Coagulation / Agglomeration induced by heating, vigorous stirring, and addition of inert electrolyte (compressing the ionic diffuse double layer); Peptization hazard: Re-dispersion of coagulated precipitate during washing with pure water; Prevented by washing with volatile electrolyte wash solution (e.g. $\\text{NH}_4\\text{NO}_3$).",
    "Precipitate Contamination: Co-precipitation Mechanisms: Contamination of precipitate by otherwise soluble foreign substances during precipitation: (1) Surface adsorption (polar charges trapping counter-ions); (2) Mixed-crystal formation (isomorphous replacement in crystal lattice); (3) Occlusion (trapping solvent pockets during rapid crystal growth); (4) Mechanical entrapment.",
    "Post-Precipitation Phenomenon: Deposition of a second, sparingly soluble foreign compound on the surface of the primary precipitate after the primary precipitation is complete; Increases with time (e.g. precipitation of post-precipitated magnesium oxalate on calcium oxalate precipitates); Prevented by rapid filtration.",
    "Precipitate Digestion & Ostwald Ripening: Digestion (aging): Allowing precipitate to stand in contact with mother liquor at elevated temperature ($80-90^\\circ\\text{C}$) for 1-2 hours; Ostwald ripening: Dissolution of smaller high-energy particles and reprecipitation onto larger crystalline particles; Expels trapped occluded impurities and improves filterability.",
    "Thermal Processing: Drying vs Ignition: Filtering using ashless filter paper (Whatman 40, 41, 42) or sintered glass Gooch crucibles; Drying at $105-120^\\circ\\text{C}$ to remove surface moisture; Ignition at $800-1000^\\circ\\text{C}$ inside muffle furnace in porcelain crucible to convert precipitate into a stable stoichiometric weighing form (e.g. converting $\\text{Fe(OH)}_3$ to $\\text{Fe}_2\\text{O}_3$).",
    "Gravimetric Factor & Analytical Stoichiometry: Gravimetric Factor (GF): Ratio of formula weight of analyte to formula weight of weighed precipitate: $\\text{GF} = \\frac{a \\cdot \\text{FW}(\\text{Analyte})}{b \\cdot \\text{FW}(\\text{Precipitate})}$; Analyte percentage: $\\% \\text{ Analyte} = \\frac{\\text{Weight of Precipitate} \\times \\text{GF}}{\\text{Weight of Sample}} \\times 100\\%$.",
    "University Examination Strategy: Explain Von Weimarn's theory of relative supersaturation and how it guides experimental gravimetric procedures, compare co-precipitation vs post-precipitation with examples, and calculate the percentage of barium in a salt using the gravimetric factor for $\\text{BaSO}_4$."
], [
    "Von Weimarn Supersaturation: $\\text{RSS} = \\frac{Q - S}{S}$; high RSS yields fine colloidal precipitates; low RSS promotes large crystalline growth.",
    "Ostwald Ripening Mechanism: Small crystal faces dissolve preferentially due to high surface curvature, recrystallizing onto larger stable crystal faces.",
    "Peptization Danger: Washing precipitates with pure deionized water dilutes electrolyte barrier, causing coagulated colloids to redisperse and pass through filter.",
    "Volatile Wash Electrolyte: Using volatile salts like ammonium nitrate ($\\text{NH}_4\\text{NO}_3$) prevents peptization and volatilizes cleanly during ignition.",
    "Occlusion Contamination: Rapid crystal boundary growth traps pockets of liquid mother liquor and foreign ions within the internal crystal lattice.",
    "Ashless Filter Paper Metric: Whatman ashless paper leaves negligible inorganic residue ($< 0.0001\\text{ g}$) upon complete thermal muffle furnace ignition.",
    "Sintered Glass Crucible Advantage: Eliminates paper ash contamination; allows drying hydrated precipitates at lower controlled oven temperatures.",
    "Gravimetric Factor Formula: $\\text{GF} = \\frac{\\text{Formula Weight of Analyte}}{\\text{Formula Weight of Weighed Substance}} \\times \\frac{\\text{moles analyte}}{\\text{moles precipitate}}$.",
    "Barium Sulfate Determination: Barium precipitated as $\\text{BaSO}_4$ in hot dilute acidic solution; ignited at $800^\\circ\\text{C}$ to prevent reduction by carbon.",
    "Exam Scoring Tip: In gravimetric calculations, always show four decimal places for balance weighings and carry correct stoichiometric factor ratios."
])

add("Analytical Chemistry", 3, "Chromatography", [
    "Chromatographic Separation Fundamentals: Physical separation methodology based on differential partitioning of analyte components between a Stationary Phase and a Mobile Phase; Mikhail Tswett (1906); Classification by mobile phase state: Liquid Chromatography (LC), Gas Chromatography (GC), and Supercritical Fluid Chromatography (SFC).",
    "Chromatographic Retention Parameters: Retention time ($t_R$: time from injection to peak maximum), Dead time ($t_M$: transit time of un-retained mobile phase marker), Adjusted retention time ($t'_R = t_R - t_M$); Retention factor (capacity factor): $k' = \\frac{t_R - t_M}{t_M}$; Separation / Selectivity factor: $\\alpha = k'_2 / k'_1 > 1$.",
    "Peak Broadening & Column Efficiency: Theoretical Plate Model: Column efficiency expressed as number of theoretical plates: $N = 16 \\left(\\frac{t_R}{W}\\right)^2 = 5.545 \\left(\\frac{t_R}{W_{1/2}}\\right)^2$, where $W$ is baseline peak width and $W_{1/2}$ is width at half-height; Height Equivalent to a Theoretical Plate (HETP): $H = L / N$; Smaller $H$ indicates higher separation efficiency.",
    "Van Deemter Rate Theory of Band Broadening: Relates plate height $H$ to linear mobile phase velocity $u$: $H = A + \\frac{B}{u} + C \\cdot u$; Eddy diffusion term $A = 2 \\lambda d_p$ (multiple flow pathways); Longitudinal molecular diffusion term $B / u = 2 \\gamma D_m / u$; Mass transfer resistance term $C \\cdot u = (C_s + C_m) u$; Optimum mobile phase velocity $u_{\\text{opt}} = \\sqrt{B/C}$.",
    "Chromatographic Resolution ($R_s$): Quantitative measure of separation between two adjacent peaks: $R_s = \\frac{2(t_{R2} - t_{R1})}{W_1 + W_2} = \\frac{\\sqrt{N}}{4} \\left( \\frac{\\alpha - 1}{\\alpha} \\right) \\left( \\frac{k'_2}{1 + k'_2} \\right)$; Baseline resolution achieved when $R_s \\ge 1.5$.",
    "Planar Chromatography: Paper & Thin-Layer Chromatography (TLC): Stationary phase: Cellulose paper (partition) or silica gel coated on glass/aluminum plates (adsorption); Capillary mobile phase migration; Retardation factor: $R_f = \\frac{\\text{Distance traveled by solute}}{\\text{Distance traveled by solvent front}}$; Visualization via UV light (254 nm), iodine vapor, or ninhydrin spray.",
    "High-Performance Liquid Chromatography (HPLC) Instrumentation: High-pressure solvent delivery pumps (up to 400-600 bar), pulse dampers, autosampler injector loop ($10-50\\,\\mu\\text{L}$), analytical guard and separation column ($15-25\\text{ cm}$ length, $3-5\\,\\mu\\text{m}$ stationary phase particles), column thermostat, and detectors (UV-Vis photodiode array PDA, Refractive Index, Fluorescence).",
    "Reversed-Phase vs Normal-Phase HPLC: Normal-Phase: Polar stationary phase (silica) with non-polar mobile phase (hexane); Reversed-Phase HPLC (RP-HPLC: $>80\\%$ of analytical separations): Non-polar stationary phase (octadecylsilane C18 bonded to silica) with polar mobile phase (water-methanol or water-acetonitrile mixtures); Polar analytes elute first; Isocratic vs Gradient elution.",
    "Gas Chromatography (GC) Architecture & Detectors: Carrier gas mobile phase (He, $\\text{N}_2, \\text{H}_2$); Split/splitless heated injector ($250^\\circ\\text{C}$); Fused-silica capillary columns ($30\\text{ m} \\times 0.25\\text{ mm}$) coated with stationary liquid polysiloxane films; Temperature-programmed oven; Detectors: Flame Ionization Detector (FID: universal for hydrocarbons), Thermal Conductivity Detector (TCD), and Electron Capture Detector (ECD).",
    "University Examination Strategy: Derive the Van Deemter equation explaining terms A, B, and C with graphical plots, calculate theoretical plates $N$ and resolution $R_s$ from a chromatogram, and contrast Reversed-Phase vs Normal-Phase HPLC."
], [
    "Van Deemter Eddy Term A: $A = 2\\lambda d_p$; band broadening caused by multi-path wandering; minimized by packing small, uniform particles.",
    "Van Deemter B Term: $B/u$; molecular diffusion along the longitudinal axis; dominates at excessively low mobile phase flow velocities.",
    "Van Deemter C Term: $C \\cdot u$; kinetic resistance to mass transfer between phases; dominates at elevated flow rates.",
    "Baseline Resolution Value: $R_s = 1.5$ represents complete baseline separation with less than $0.1\\%$ mutual peak overlap.",
    "Theoretical Plate Count: $N = 16 (t_R / W)^2$; larger plate counts indicate sharper, narrower peaks and superior resolving power.",
    "Reversed-Phase C18 Chemistry: Hydrophobic non-polar stationary phase binds non-polar solutes tightly; polar analytes elute first.",
    "Retention Factor Capacity: $k' = (t_R - t_M) / t_M$; ideal chromatographic separations operate within $1 < k' < 10$.",
    "TLC Retardation Factor: $R_f = d_{\\text{solute}} / d_{\\text{solvent}}$; constant physical parameter under standardized temperature and solvent conditions.",
    "Flame Ionization Detector (FID): Pyrolyzes organic carbon in hydrogen-air flame to generate ions, providing sensitive linear detection for hydrocarbons.",
    "Exam Gold Tip: Always remember that increasing column length $L$ doubles plate count $N$, but improves resolution $R_s$ by only factor $\\sqrt{2} \\approx 1.414$."
])

add("Analytical Chemistry", 4, "Spectroscopy", [
    "Molecular & Atomic Spectroscopic Foundational Principles: Interaction of electromagnetic radiation with atomic/molecular matter; Absorption, emission, and fluorescence; Quantized transition energy: $\\Delta E = h \\nu = \\frac{h c}{\\lambda}$.",
    "The Beer-Lambert Absorption Law: Lambert's law: Absorbance is proportional to path length $l$; Beer's law: Absorbance is proportional to analyte concentration $c$; Combined expression: $A = \\log_{10}\\left(\\frac{I_0}{I}\\right) = \\epsilon \\cdot c \\cdot l$; Transmittance: $T = I / I_0 = 10^{-A}$; Molar absorptivity $\\epsilon$ in $\\text{L}/(\\text{mol}\\cdot\\text{cm})$.",
    "Deviations from Beer-Lambert Law: (1) Real deviations: High concentration ($c > 0.01\\text{ M}$) electrostatic solute interactions altering charge distribution; (2) Chemical deviations: Analyte association, dissociation (acid-base indicator shifts), or complexation; (3) Instrumental deviations: Polychromatic light, stray radiation leakage, and mismatched cuvettes.",
    "Ultraviolet-Visible (UV-Vis) Spectrophotometer Instrumentation: Light sources: Deuterium arc lamp (UV: $190-350\\text{ nm}$) and Tungsten-halogen lamp (Visible: $350-800\\text{ nm}$); Monochromator: Entrance slit, concave collimating mirrors, diffraction grating (1200 lines/mm), and exit slit; Quartz cuvettes (UV-transparent; glass absorbs below 320 nm); Photomultiplier Tube (PMT) / Photodiode Array detectors.",
    "Quantitative Analysis via Standard Addition Method: Overcoming sample matrix interference in complex biological/environmental samples; Adding known spiked volumes of pure standard to equal sample aliquots; Linear regression plotting absorbance vs added concentration; X-intercept magnitude gives endogenous analyte concentration.",
    "Atomic Absorption Spectroscopy (AAS) Principles: Alan Walsh (1955); Quantitative measurement of gaseous ground-state free atoms absorbing characteristic resonance radiation; Boltzmann distribution: High ground-state population at flame temperatures: $\\frac{N_j}{N_0} = \\frac{g_j}{g_0} e^{-\\Delta E / k_B T} \\approx 0$ (ground state $N_0$ dominates overwhelmingly over excited state).",
    "AAS Instrumentation Architecture: Hollow Cathode Lamp (HCL: cathode composed of target metal, emitting razor-sharp characteristic resonance spectral lines); Nebulizer and spray chamber generating aerosol; Flame atomizer (Air-Acetylene $2300^\\circ\\text{C}$ or Nitrous Oxide-Acetylene $3000^\\circ\\text{C}$); High-resolution monochromator; Photomultiplier detector; Optical chopper for background flame emission correction.",
    "Interferences in Atomic Absorption Spectroscopy: (1) Chemical interferences: Formation of refractory salts (e.g. phosphate binding calcium, preventing atomization; eliminated by adding lanthanum releasing agent); (2) Ionization interferences (suppressed by adding excess easily ionized potassium salt); (3) Spectral interferences (corrected via deuterium arc or Zeeman effect background correction).",
    "Atomic Emission Spectroscopy & Flame Photometry: Thermal excitation of alkali and alkaline earth metals (Na at 589 nm yellow, K at 766 nm violet, Ca at 622 nm orange); Free atoms in excited state emit characteristic photons upon relaxation to ground state; Photodetector measuring intensity; Clinical electrolyte profiling.",
    "University Examination Strategy: Derive the Beer-Lambert Law from calculus principles, explain the instrumentation and working of Atomic Absorption Spectroscopy with a labeled block diagram, and describe chemical interferences in AAS and their remediation using releasing agents."
], [
    "Beer-Lambert Integral Derivation: $-\\int_{I_0}^I \\frac{dI}{I} = k c \\int_0^l dx \\implies \\ln(I_0 / I) = k c l \\implies A = \\epsilon c l$.",
    "Absorbance-Transmittance Formula: $A = -\\log_{10}(T) = 2 - \\log_{10}(\\%T)$; zero absorbance corresponds to $100\\%$ transmittance.",
    "Quartz vs Glass Cuvettes: Standard borosilicate glass absorbs ultraviolet radiation strongly below 350 nm; quartz is mandatory for UV work.",
    "Hollow Cathode Lamp Necessity: Generates exceptionally narrow resonance emission lines ($\sim 0.002\\text{ nm}$) matching atomic absorption peaks.",
    "Lanthanum Releasing Agent: Lanthanum preferentially binds interfering phosphate anions, liberating free calcium cations for flame atomization.",
    "Ground State Boltzmann Dominance: At $2500\\text{ K}$, over $99.9\\%$ of sodium atoms occupy ground state, making absorption far more sensitive than emission.",
    "Zeeman Background Correction: Uses modulated magnetic field to split atomic energy levels, subtracting broadband background absorption precisely.",
    "Standard Addition Equation: Analyte concentration $C_x = \\frac{b \\cdot C_s}{m}$, determined directly from linear regression X-axis intercept.",
    "Flame Photometry Application: Rapid, low-cost clinical quantification of sodium and potassium ions in blood serum and urine samples.",
    "Exam Gold Tip: Always state that the Beer-Lambert law strictly requires monochromatic radiation; polychromatic light causes negative deviations."
])

add("Analytical Chemistry", 5, "Quality Control", [
    "Analytical Quality Assurance & GLP Framework: Good Laboratory Practice (GLP); Quality Control (QC: day-to-day operational testing) vs Quality Assurance (QA: systemic quality audits and management systems); Standard Operating Procedures (SOPs); Method validation.",
    "Method Validation Parameters (ICH Q2(R1) Guidelines): Essential validation criteria: Specificity / Selectivity, Linearity and Range, Accuracy (trueness), Precision (repeatability, intermediate precision, reproducibility), Limit of Detection (LOD), Limit of Quantitation (LOQ), and Robustness.",
    "Limit of Detection (LOD) & Limit of Quantitation (LOQ): LOD: Lowest concentration of analyte reliably distinguishable from background baseline noise: $\\text{LOD} = \\frac{3.3 \\cdot \\sigma}{S}$; LOQ: Lowest concentration quantifiable with acceptable precision and accuracy: $\\text{LOQ} = \\frac{10 \\cdot \\sigma}{S}$, where $\\sigma$ is standard deviation of blank response and $S$ is calibration curve slope.",
    "Accuracy & Recovery Quantification: Percentage analytical recovery: $\\% \\text{ Recovery} = \\frac{C_{\\text{measured}}}{C_{\\text{spiked}}} \\times 100\\%$; Assessing systematic method bias using Certified Reference Materials (CRMs); Spiked matrix recovery studies.",
    "Precision & Relative Standard Deviation (%RSD): Assessing random experimental variability; Relative Standard Deviation / Coefficient of Variation: $\\%\\text{RSD} = \\frac{s}{\\bar{x}} \\times 100\\%$; Intra-day precision (repeatability within single run) vs Inter-day precision (intermediate precision over multiple days).",
    "Statistical Significance Testing in Quality Control: Student's t-test: Comparing experimental sample mean against certified reference standard value ($t = \\frac{|\\bar{x} - \\mu_0|}{s / \\sqrt{n}}$); Paired t-test comparing two distinct analytical methods on identical samples; F-test comparing precision of two methods ($F = s_1^2 / s_2^2$).",
    "Quality Control Charts & Shewhart Control Charts: Graphical monitoring of analytical process stability over time; Central Line (CL at mean $\\mu$); Upper and Lower Warning Limits (UWL/LWL at $\\mu \\pm 2\\sigma$); Upper and Lower Action / Control Limits (UCL/LCL at $\\mu \\pm 3\\sigma$); Detecting systematic drift and out-of-control analytical runs.",
    "Westgard Multi-Rule System in Clinical QC: Quality decision algorithm: Rule $1_{3s}$ (run rejected if single QC point exceeds $3\\sigma$), Rule $2_{2s}$ (rejected if two consecutive points exceed $2\\sigma$), Rule $R_{4s}$ (rejected if range between points exceeds $4\\sigma$), Rule $4_{1s}$ (four consecutive points exceed $1\\sigma$), Rule $10_{\\bar{x}}$ (ten consecutive points on same side of mean).",
    "Traceability, Chain of Custody & Laboratory Safety: Metrological traceability to SI units; Chain of custody documentation for forensic and environmental samples; Proper disposal of hazardous chemical waste (heavy metals, organic solvents) conforming to environmental safety regulations.",
    "University Examination Strategy: Calculate LOD and LOQ from given calibration slope and blank standard deviation, evaluate method precision using %RSD, perform a t-test to determine if an analytical method contains systematic bias, and construct a Shewhart control chart."
], [
    "LOD Formula: $\\text{LOD} = \\frac{3.3 \\sigma}{S}$; signal-to-noise ratio $S/N = 3:1$ defining lowest detectable analyte boundary.",
    "LOQ Formula: $\\text{LOQ} = \\frac{10 \\sigma}{S}$; signal-to-noise ratio $S/N = 10:1$ defining lowest quantitative measurement limit.",
    "RSD Precision Formula: $\\%\\text{RSD} = \\frac{s}{\\bar{x}} \\times 100\\%$; acceptable analytical methods typically require $\\%\\text{RSD} < 2.0\\%$.",
    "Student t-Test Bias Evaluation: $t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}$; if $t_{\\text{calc}} > t_{\\text{crit}}$, the analytical method possesses significant systematic bias.",
    "Shewhart Action Limits: Control boundaries placed at $\\pm 3\\sigma$ from the mean; only $0.27\\%$ of normal in-control points fall outside.",
    "Westgard 1_3s Rule: A single control observation exceeding 3 standard deviations indicates a major random or systematic analytical failure.",
    "Certified Reference Material (CRM): Homogeneous, stable reference material with certified chemical values traceable to international SI standards.",
    "Linearity Correlation Metric: Calibration curve regression correlation coefficient $R^2$ must exceed 0.995 for acceptable quantitative assays.",
    "Matrix Effect Interference: Alteration of analytical signal caused by co-existing non-analyte substances present in the specimen matrix.",
    "Exam Gold Tip: Always explain that accuracy represents freedom from systematic error, whereas precision represents freedom from random error."
])

# =========================================================================
# 10. CHEMISTRY LAB III (B.Sc)
# =========================================================================
add("Chemistry Lab III", 1, "Chemistry  III: Laboratory Safety Protocols & Instrumentation", [
    "Chemical Laboratory Safety Standards & OSHA Compliance: Personal Protective Equipment (PPE: nitrile gloves, wrap-around splash goggles, chemical-resistant lab coat); Chemical fume hood face velocity standards (80-100 linear feet per minute); Emergency safety showers and eye-wash fountain stations.",
    "Chemical Reagents Segregation & Incompatibility: Segregating acids from bases, oxidizers (nitrates, permanganates, perchlorates) from organic reducers, and water-reactive chemicals from moisture; Flammable solvent storage in fire-rated safety cabinets.",
    "Analytical Balances & Precision Mass Measurement: Dual-pan analytical balances and modern electromagnetic force restoration digital balances (precision $0.1\\text{ mg} = 0.0001\\text{ g}$); Draft shields; Proper leveling via spirit bubble; Tare operation; Temperature equilibration avoiding air buoyancy convection.",
    "Volumetric Glassware Calibration & Tolerance: Class A vs Class B volumetric glassware; Volumetric flasks, transfer pipettes, and graduated burettes; Meniscus reading protocols (lower meniscus for clear liquids, upper meniscus for dark colored liquids like $\\text{KMnO}_4$); Parallax error elimination.",
    "Calibration of Transfer Pipettes & Volumetric Flasks: Gravimetric calibration method: Measuring mass of distilled water delivered at known ambient temperature; Correcting for water density and air buoyancy using calibration tables: $V_{20} = W \\times [1 + \\alpha(20 - t)] / (\\rho_w - \\rho_a)$.",
    "Laboratory Heating Instrumentation: Heating mantles, temperature-regulated magnetic stirrers with Teflon stir bars, oil baths, electric muffle furnaces ($1000^\\circ\\text{C}$), and drying ovens ($105-120^\\circ\\text{C}$); Elimination of open flame Bunsen burners near volatile organic solvents.",
    "Desiccators & Moisture Control: Heavy glass desiccator vessels with ground glass rims greased with silicone; Desiccant agents: Anhydrous calcium chloride ($\\text{CaCl}_2$), silica gel (blue indicator turning pink upon hydration), and phosphorus pentoxide ($\\text{P}_2\\text{O}_5$); Vacuum desiccators.",
    "Chemical Waste Disposal Protocols: Segregated liquid waste carboys: Halogenated organic solvents (dichloromethane, chloroform), Non-halogenated solvents (acetone, ethanol), Heavy metal waste (chromium, copper, barium), and Acid-base neutralization neutralization drums.",
    "First Aid for Chemical Spills & Burns: Acid spills on skin: Immediate flush with copious cold water for 15 minutes, followed by dilute sodium bicarbonate ($2\\%$); Alkali spills: Flush with water, followed by dilute acetic acid ($1\\%$); Bromine burns: Wash with water, swab with sodium thiosulfate.",
    "University Examination Strategy: Detail the gravimetric procedure for calibrating a 25 mL Class A transfer pipette, explain the proper reading of the meniscus for clear and colored solutions with parallax diagrams, and list the segregation rules for chemical storage."
], [
    "Volumetric Meniscus Rule: Read lower boundary of meniscus for colorless solutions; read upper meniscus for opaque liquids like $\\text{KMnO}_4$.",
    "Analytical Balance Sensitivity: Precision balances resolve down to $0.0001\\text{ g}$ ($0.1\\text{ mg}$); drafts or warm crucibles ruin mass accuracy.",
    "Parallax Error Prevention: Observer's eye must be positioned precisely level with the horizontal plane of the meniscus surface.",
    "Fume Hood Face Velocity: Maintained between 80 and 100 feet per minute; sash window kept at certified working height indicator.",
    "Silica Gel Desiccant Indicator: Anhydrous cobalt-doped silica gel is deep blue; changes to light pink upon moisture saturation.",
    "Class A Volumetric Tolerance: A Class A 25 mL transfer pipette maintains strict manufacturing tolerance within $\\pm 0.03\\text{ mL}$.",
    "Air Buoyancy Correction: True vacuum mass equals apparent air mass adjusted for displaced air density: $m = m_{\\text{app}} (1 - \\rho_a / \\rho_w)^{-1}$.",
    "Buret Drain Time: Allow 30 seconds for liquid drainage along internal glass walls before recording final volumetric titration reading.",
    "Acid-into-Water Rule: Always pour concentrated acid slowly into water with continuous stirring; never pour water into acid (exothermic boil-over).",
    "Lab Practice Rule: Hot ignited crucibles must be cooled in air for 1 minute, then transferred to a desiccator for 20 minutes before weighing."
])

add("Chemistry Lab III", 2, "Chemistry  III: Standard Preparations & Calibration Methods", [
    "Preparation & Standardization of Primary Standard Solutions: Preparing 0.1 N Sodium Carbonate ($\text{Na}_2\\text{CO}_3$): Anhydrous reagent heated at $270^\\circ\\text{C}$ for 1 hour to remove moisture; Preparing 0.1 N Potassium Hydrogen Phthalate (KHP, $\\text{KHC}_8\\text{H}_4\\text{O}_4$, MW $204.22\\text{ g/mol}$); Weighing on analytical balance; Quantitative transfer into volumetric flask.",
    "Standardization of Secondary Standard Sodium Hydroxide (0.1 N): $\\text{NaOH}$ absorbs atmospheric $\\text{CO}_2$ and moisture (deliquescent); Dissolving in carbon-dioxide-free boiled distilled water; Titrating against primary standard KHP using phenolphthalein indicator; Calculating normality: $N_1 V_1 = N_2 V_2$.",
    "Standardization of Hydrochloric Acid (0.1 N): Diluting concentrated $\\text{HCl}$; Titrating against standardized $0.1\\text{ N } \\text{Na}_2\\text{CO}_3$ using methyl orange indicator; Sharp end point from yellow to faint pink-orange; Boiling near end point to expel dissolved carbonic acid ($\text{H}_2\\text{CO}_3$).",
    "Preparation & Standardization of Potassium Permanganate (0.1 N): Dissolving $\\text{KMnO}_4$ in water, boiling gently for 15 minutes to oxidize organic impurities, aging in dark for 2 days, filtering through sintered glass crucible (never filter paper); Standardizing against primary standard oxalic acid in dilute $\\text{H}_2\\text{SO}_4$ at $70-80^\\circ\\text{C}$.",
    "Preparation & Standardization of Sodium Thiosulfate (0.1 N): Dissolving $\\text{Na}_2\\text{S}_2\\text{O}_3 \\cdot 5\\text{H}_2\\text{O}$ in boiled distilled water; Adding 0.1 g $\\text{Na}_2\\text{CO}_3$ preservative to prevent bacterial decomposition; Standardizing against primary standard potassium dichromate ($\\text{K}_2\\text{Cr}_2\\text{O}_7$) using iodometric titration with starch indicator.",
    "Preparation of 0.01 M Disodium EDTA Standard Solution: Dissolving analytical grade disodium dihydrogen ethylenediaminetetraacetate dihydrate ($\\text{Na}_2\\text{H}_2\\text{Y} \\cdot 2\\text{H}_2\\text{O}$, MW $372.24\\text{ g/mol}$) in deionized water; Standardizing against standard zinc solution ($0.01\\text{ M } \\text{ZnSO}_4$) at pH 10 buffer using Eriochrome Black T indicator.",
    "Preparation of Starch Indicator Solution: Pasting 1.0 g soluble starch with 5 mL cold water; Pouring into 100 mL boiling distilled water with continuous stirring; Boiling for 2 minutes until translucent; Adding salicylic acid preservative; Starch-iodine deep blue helical inclusion complex.",
    "Preparation of pH 10 Ammoniacal Buffer: Dissolving 67.5 g ammonium chloride ($\\text{NH}_4\\text{Cl}$) in 570 mL concentrated aqueous ammonia ($\text{NH}_4\\text{OH}$, sp. gr. 0.90); Diluting to 1000 mL with distilled water; Maintaining buffer capacity for EDTA titrations.",
    "Spectrophotometer Wavelength & Photometric Verification: Verifying wavelength accuracy using holmium oxide glass filter (peaks at 279.3, 360.8, 536.4 nm); Photometric linearity check using standard potassium dichromate in $0.005\\text{ M } \\text{H}_2\\text{SO}_4$.",
    "University Examination Strategy: Detail the preparation and standardization of 0.1 N KMnO4 against oxalic acid including temperature requirements, explain the iodometric standardization of sodium thiosulfate using K2Cr2O7, and write the recipe for starch indicator."
], [
    "KHP Primary Standard Advantage: Potassium hydrogen phthalate is non-hygroscopic, stable, and has a high equivalent weight of $204.22\\text{ g/mol}$.",
    "KMnO4 Sintered Glass Rule: Filter permanganate through sintered glass; cellulose filter paper reacts with and reduces permanganate to $\\text{MnO}_2$.",
    "Oxalic Acid Titration Heat: Permanganate titration with oxalic acid must be performed hot ($70-80^\\circ\\text{C}$); reaction is sluggish at room temperature.",
    "Thiosulfate Carbonate Preservative: Trace $\\text{Na}_2\\text{CO}_3$ maintains slightly alkaline pH, inhibiting sulfur precipitation by bacterial thiobacilli.",
    "Starch Addition Timing: Starch must be added near the end of titration (pale straw-yellow $I_2$) to prevent irreversible adsorption of iodine.",
    "EDTA Disodium Form: Free acid $\\text{H}_4\\text{Y}$ is poorly soluble; disodium dihydrate $\\text{Na}_2\\text{H}_2\\text{Y} \\cdot 2\\text{H}_2\\text{O}$ dissolves rapidly in water.",
    "Sodium Carbonate CO2 Expulsion: Boiling solution near methyl orange end point drives off dissolved carbonic acid, yielding sharper color flip.",
    "Zinc Metal Primary Standard: Pure analytical zinc granules dissolved in minimal $\\text{HCl}$ provide an exact primary standard for EDTA.",
    "Blank Titration Adjustment: Titrating reagent blank subtracts indicator consumption and trace water impurities from analytical titer volume.",
    "Lab Practice Rule: Always clean the burette tip to ensure zero air bubbles are trapped below the stopcock prior to starting any standardization."
])

add("Chemistry Lab III", 3, "Chemistry  III: Core Experimental Procedures & Synthesis", [
    "Practical 1: Determination of Copper in Brass Alloy via Iodometry: Dissolving brass sample in $1:1\\text{ HNO}_3$; Boiling to expel toxic nitrogen oxides; Neutralizing with aqueous $\\text{NH}_4\\text{OH}$ until blue cuprammonium complex forms, acidifying with dilute acetic acid; Adding excess $\\text{KI}$ (liberates $I_2$); Titrating against standard $0.1\\text{ N } \\text{Na}_2\\text{S}_2\\text{O}_3$; Adding potassium thiocyanate ($\\text{KSCN}$) near end point.",
    "Role of Potassium Thiocyanate in Copper Iodometry: Cuprous iodide ($\\text{Cu}_2\\text{I}_2$) precipitate strongly adsorbs iodine molecules on its surface; Adding $\\text{KSCN}$ converts surface to cuprous thiocyanate ($\\text{Cu}_2(\\text{SCN})_2$), displacing adsorbed iodine and yielding a razor-sharp, pure milk-white end point.",
    "Practical 2: Determination of Iron in Hematite Ore via Dichromatometry: Dissolving ore in concentrated $\\text{HCl}$; Reducing ferric ($\text{Fe}^{3+}$) to ferrous ($\text{Fe}^{2+}$) using stannous chloride ($\\text{SnCl}_2$) until yellow color disappears; Adding mercuric chloride ($\\text{HgCl}_2$) in one stroke to precipitate excess tin as silky white $\\text{Hg}_2\\text{Cl}_2$; Adding Zimmermann-Reinhardt reagent; Titrating against standard $\\text{K}_2\\text{Cr}_2\\text{O}_7$ with diphenylamine indicator.",
    "Practical 3: Determination of Total Hardness of Water by EDTA Titration: Pipetting 50 mL water sample; Adding 2 mL pH 10 ammoniacal buffer and 3 drops Eriochrome Black T indicator; Titrating against standardized $0.01\\text{ M}$ EDTA; Wine-red to pure sky-blue end point; Expressing total hardness as equivalent parts per million (ppm) $\\text{CaCO}_3$.",
    "Practical 4: Determination of Calcium & Magnesium Hardness Separately: Determining calcium hardness: Adjusting water sample to $\\text{pH} \\ge 12$ using $8\\%\\text{ NaOH}$ (magnesium precipitates quantitatively as $\\text{Mg(OH)}_2$); Titrating against EDTA using Patton and Reeder's indicator (or Murexide); Wine-red to pure blue; Magnesium hardness obtained by subtracting calcium from total hardness.",
    "Practical 5: Determination of Available Chlorine in Bleaching Powder: Slurring bleaching powder sample with water; Reacting with excess acetic acid and potassium iodide; Bleaching powder oxidizes iodide to free iodine ($\text{CaOCl}_2 + 2\\text{CH}_3\\text{COOH} + 2\\text{KI} \\to \\text{I}_2 + \\dots$); Titrating liberated iodine against standard $0.1\\text{ N } \\text{Na}_2\\text{S}_2\\text{O}_3$ with starch indicator.",
    "Practical 6: Gravimetric Estimation of Barium as Barium Sulfate: Diluting barium chloride solution with water; Acidifying with dilute $\\text{HCl}$; Heating to boiling; Adding hot dilute sulfuric acid ($\\text{H}_2\\text{SO}_4$) dropwise with continuous stirring; Digesting precipitate on steam bath for 1 hour; Filtering through Whatman 42; Igniting in weighed porcelain crucible at $800^\\circ\\text{C}$.",
    "Practical 7: Gravimetric Estimation of Iron as Ferric Oxide: Oxidizing ferrous ions with concentrated $\\text{HNO}_3$; Precipitating hydrous ferric oxide using aqueous ammonia ($\text{NH}_4\\text{OH}$) in the presence of $\\text{NH}_4\\text{Cl}$; Digesting gelatinous precipitate; Washing with hot $1\\%\\text{ NH}_4\\text{NO}_3$; Igniting ashless filter paper in crucible to constant mass as $\\text{Fe}_2\\text{O}_3$.",
    "Practical 8: Spectrophotometric Determination of Manganese in Steel: Dissolving steel alloy in nitric-phosphoric acid; Oxidizing $\\text{Mn}^{2+}$ to intensely purple permanganate ($\\text{MnO}_4^-$) using potassium periodate ($\\text{KIO}_4$) catalyst; Measuring optical absorbance at $\\lambda = 525\\text{ nm}$; Quantifying concentration from standard calibration curve.",
    "University Examination Strategy: Detail the step-by-step procedure for estimating copper in brass by iodometry explaining the role of KSCN, write the chemical reactions for iron reduction and titration with K2Cr2O7, and calculate water hardness in ppm CaCO3."
], [
    "Copper Iodometric Reaction: $2\\text{Cu}^{2+} + 4\\text{I}^- \\to \\text{Cu}_2\\text{I}_2\\downarrow + \\text{I}_2$; liberated iodine is titrated with thiosulfate.",
    "KSCN Iodine Release: $\\text{Cu}_2\\text{I}_2 + 2\\text{SCN}^- \\to \\text{Cu}_2(\\text{SCN})_2\\downarrow + 2\\text{I}^-$; releases surface-bound iodine for sharp end point.",
    "Stannous Chloride Reduction: $\\text{Sn}^{2+}$ reduces $\\text{Fe}^{3+}$ to $\\text{Fe}^{2+}$; excess tin must be scavenged by rapid addition of $\\text{HgCl}_2$.",
    "Mercuric Chloride Silky Precipitate: Excess $\\text{Sn}^{2+}$ precipitates silky white $\\text{Hg}_2\\text{Cl}_2$; black metallic mercury precipitate ruins the assay.",
    "Water Hardness Calcium Masking: Elevating pH to 12 precipitates $\\text{Mg(OH)}_2$, permitting selective titration of calcium ions alone.",
    "Water Hardness Unit PPM: Expressed as mg $\\text{CaCO}_3$ per liter of water: $\\text{Hardness} = \\frac{V_{\\text{EDTA}} \\times M \\times 100,000}{V_{\\text{sample}}}$.",
    "Bleaching Powder Active Chlorine: Quantifies hypochlorite oxidizing power: $1\\text{ mL of } 0.1\\text{ N thiosulfate} \\equiv 0.003545\\text{ g available chlorine}$.",
    "Barium Sulfate Acidic Medium: Precipitation performed in dilute $\\text{HCl}$ to prevent co-precipitation of barium carbonate and phosphate.",
    "Ferric Oxide Ignition Temperature: Ignited at $850-900^\\circ\\text{C}$ to completely dehydrate ferric hydroxide into stable stoichiometric $\\text{Fe}_2\\text{O}_3$.",
    "Practical Exam Rule: Always run triplicate volumetric titrations and verify that concordant titer values agree within $\\pm 0.05\\text{ mL}$."
])

add("Chemistry Lab III", 4, "Chemistry  III: Quantitative Data Verification & Error Analysis", [
    "Concordant Titration Values & Mean Titer Calculation: Criteria for volumetric concordance: Three successive burette readings agreeing within $\\pm 0.05\\text{ mL}$; Rejecting pilot trial titration runs; Calculating arithmetic mean titer volume; Eliminating outlier readings.",
    "Volumetric Error Propagation Formulation: Calculating compound error in concentration: For $N_1 = \\frac{N_2 V_2}{V_1}$: Relative uncertainty $\\frac{\\Delta N_1}{N_1} = \\sqrt{ \\left(\\frac{\\Delta N_2}{N_2}\\right)^2 + \\left(\\frac{\\Delta V_2}{V_2}\\right)^2 + \\left(\\frac{\\Delta V_1}{V_1}\\right)^2 }$; Identifying dominant error contributors (pipette vs burette tolerances).",
    "Burette Meniscus Parallax & Drainage Error Analysis: Quantifying systematic errors: Meniscus reading parallax (up to $\\pm 0.04\\text{ mL}$); Rapid drainage residue error (delivering liquid too fast leaves clinging droplets on burette barrel, artificially inflating titer volume by $0.05-0.10\\text{ mL}$).",
    "Indicator Blank Corrections: Determining indicator consumption: Titrating solvent and indicator in absence of analyte; Subtracting indicator blank volume ($V_{\\text{blank}} \\approx 0.02-0.05\\text{ mL}$) from experimental sample titer to obtain true net stoichiometric volume.",
    "Gravimetric Weighing to Constant Mass Verification: Definition of constant mass in gravimetry: Successive ignition and cooling cycles until two consecutive mass determinations differ by less than $0.2\\text{ mg}$ ($0.0002\\text{ g}$); Verifying complete dehydration of $\\text{BaSO}_4$ and $\\text{Fe}_2\\text{O}_3$.",
    "Spectrophotometric Calibration Curve Linearity & Regression: Linear least squares regression of absorbance $A$ vs concentration $c$: Calculating slope $m = \\epsilon l$, intercept $y_0$, and correlation coefficient $R^2$; Verifying $R^2 \\ge 0.998$; Calculating unknown concentration from regression equation.",
    "Statistical Precision Metrics (%RSD): Evaluating precision across replicate volumetric and gravimetric determinations; Relative Standard Deviation: $\\%\\text{RSD} = \\frac{s}{\\bar{x}} \\times 100\\%$; Enforcing student laboratory precision benchmark $\\%\\text{RSD} < 1.0\\%$ for volumetric titrations.",
    "Statistical Testing for Laboratory Bias: Student's t-test comparing experimental percentage of copper in brass against certified alloy standard ($70.0\\%\\text{ Cu}$); Calculating $t_{\\text{calculated}} = \\frac{|\\bar{x} - \\mu|}{s / \\sqrt{n}}$; Comparing with two-tailed critical value $t_{\\text{critical}}$ at 95 percent confidence.",
    "Reporting Analytical Results with Significant Figures: Rules for rounding based on measurement uncertainty: Final reported percentage must reflect experimental precision (e.g. $68.42 \\pm 0.15\\%\\text{ Cu}$); Tabulating raw observations, intermediate normality values, and final recovery percentages.",
    "University Examination Strategy: Solve a complete volumetric error propagation problem calculating percentage uncertainty in normality, verify constant mass data in a gravimetric experiment, and perform a Student's t-test to detect analytical bias."
], [
    "Concordant Volume Standard: Two or three successive titration readings must agree within $\\pm 0.05\\text{ mL}$ to be considered concordant.",
    "Burette Drainage Rate: Regulate stopcock flow to approximately 10 to 15 mL per minute to prevent liquid film clinging to internal glass walls.",
    "Indicator Blank Subtraction: $V_{\\text{corrected}} = V_{\\text{observed}} - V_{\\text{blank}}$; rectifies reagent and indicator acid consumption.",
    "Constant Mass Gravimetric Criterion: Two consecutive post-ignition weighings must agree within $0.0002\\text{ g}$ to ensure complete moisture loss.",
    "Volumetric Relative Uncertainty: Compound relative uncertainty is dominated by the smallest volume measurement (typically the 25 mL pipette).",
    "Photometric Calibration Linearity: $R^2 \\ge 0.998$ ensures rigorous adherence to Beer's law across the tested concentration dynamic range.",
    "Precision Acceptance Threshold: Analytical chemistry titrations must achieve relative standard deviation $\\%\\text{RSD} < 1.0\\%$ across replicates.",
    "Significant Figures in Titrimetry: Final volumetric concentrations are reported to four significant figures (e.g. $0.1024\\text{ N}$).",
    "Crucible Lid Protection: Keeping crucible partially covered during initial paper charring prevents aggressive flaming and mechanical ash loss.",
    "Lab Viva Tip: Always state that concordant readings should NEVER include the preliminary pilot titration value."
])

add("Chemistry Lab III", 5, "Chemistry  III: Comprehensive Practical Record & Viva Voce", [
    "Practical Laboratory Record Documentation Standards: Structured record keeping: Experiment title, date, chemical equations with oxidation numbers, apparatus and reagents, detailed stepwise protocol, raw observation tables, calculation formulas, and final clinical conclusions.",
    "Viva Voce High-Yield Questions on Titrimetry: What is the difference between normality and molarity? What is a primary standard and why cannot $\\text{NaOH}$ or $\\text{KMnO}_4$ act as primary standards? What is the role of phosphoric acid in dichromate titration of iron?",
    "Viva Voce Questions on Iodometry: What is the difference between iodometry and iodimetry? Why is starch added only near the end point? What is the function of potassium thiocyanate ($\\text{KSCN}$) in copper estimation? Why is acetic acid used instead of mineral acids?",
    "Viva Voce Questions on Water Hardness: What is temporary vs permanent hardness? What is the chemical structure of EDTA and why is the disodium salt used? Why is ammoniacal buffer maintained at pH 10? How does Eriochrome Black T indicate the end point?",
    "Viva Voce Questions on Gravimetric Analysis: What is co-precipitation and how does it differ from post-precipitation? What is Ostwald ripening and why is digestion performed? Why is ashless filter paper used? What is a gravimetric factor?",
    "Viva Voce Questions on Safety & Waste Disposal: What immediate first aid is administered for concentrated sulfuric acid spills? How are heavy metal wastes safely segregated? Why must ethers be tested for peroxides prior to distillation?",
    "Viva Voce Questions on Instrumental Techniques: What is the Beer-Lambert Law? Why are quartz cuvettes required for UV spectroscopy? What is the function of a hollow cathode lamp in atomic absorption spectroscopy?",
    "Quality Assurance in Practical Chemistry: Reagent blank checks, duplicate sample runs, proper storage of hygroscopic reagents in desiccators, and using analytical balances with closed draft shields.",
    "Cleaning & Maintenance of Volumetric Glassware: Cleaning protocols: Chromic acid wash (potassium dichromate in concentrated sulfuric acid), detergent washing, rinsing thoroughly with tap water, and final rinsing with distilled water; Verifying unbroken water film.",
    "University Examination Strategy: Review all viva voce question sets on redox, complexometric, and gravimetric mechanisms, verify that the practical record book contains complete calculations and signatures, and be prepared to perform any titration on demand."
], [
    "Normality vs Molarity: $\\text{Normality} = \\text{Molarity} \\times n\\text{-factor}$; $n$-factor is number of reacting protons, electrons, or valence charges.",
    "Phosphoric Acid Role in Iron Titration: Complexes colored yellow $\\text{Fe}^{3+}$ into colorless $[\\text{Fe(PO}_4)_2]^{3-}$, lowering reduction potential for sharp indicator flip.",
    "Zimmermann-Reinhardt Reagent: Contains $\\text{MnSO}_4, \\text{H}_2\\text{SO}_4, \\text{H}_3\\text{PO}_4$; prevents oxidation of chloride ions by $\\text{KMnO}_4$.",
    "Primary Standard Non-Hygroscopic Rule: Must not absorb moisture or atmospheric $\\text{CO}_2$; $\\text{NaOH}$ fails because it deliquesces rapidly.",
    "EDTA Hexadentate Chelate: Disodium EDTA coordinates with divalent cations through 2 nitrogens and 4 oxygens in stable 1:1 stoichiometry.",
    "Temporary vs Permanent Hardness: Temporary hardness is caused by bicarbonates of Ca/Mg (removed by boiling); Permanent is caused by chlorides and sulfates.",
    "Peroxide Explosion Hazard in Ethers: Diethyl ether reacts with air to form explosive organic peroxides; tested with starch-iodide paper.",
    "Chromic Acid Cleaning Solution: Strong oxidizing cleaning solution dissolving stubborn organic residues from analytical glassware.",
    "Unbroken Water Film Test: Clean glassware displays continuous sheeting of water; beaded droplets indicate residual grease contamination.",
    "Exam Gold Rule: In practical viva, always define the chemical reaction, state the exact color change at the end point, and explain the indicator chemistry."
])

# =========================================================================
# 11. CHEMISTRY LAB III (ORGANIC SYNTHESIS) (B.Sc)
# =========================================================================
add("Chemistry Lab III (Organic Synthesis)", 1, "Chemistry  III (Organic Synthesis): Laboratory Safety Protocols & Instrumentation", [
    "Organic Chemistry Laboratory Safety Protocols: Handling volatile, flammable, and toxic organic chemicals; Fire safety: Prohibition of open flames; Dry chemical powder and carbon dioxide ($\\text{CO}_2$) fire extinguishers; Personal protective equipment (chemical-resistant butyl/nitrile gloves, splash goggles, lab aprons).",
    "Hazardous Solvent Precautions & Peroxide Testing: Safe handling of flammable solvents: Diethyl ether (flash point $-45^\\circ\\text{C}$), Acetone, Petroleum ether, Benzene (carcinogen; substituted with toluene), and Chloroform; Testing ethers for explosive peroxides using acidified potassium iodide solution.",
    "Fume Hood Operations for Organic Vapors: Conducting hazardous operations under certified fume hoods: Brominations, diazotizations, acetylations, and reactions releasing toxic acid vapors ($\\text{HCl}, \\text{SO}_2, \\text{NO}_2$); Keeping sash window below regulatory line.",
    "Standard Organic Laboratory Glassware Setup: Ground-glass joint glassware (Quickfit standard taper joints 14/23, 19/26, 24/29); Round-bottom flasks (single-neck, two-neck, three-neck), Liebig condensers, Graham coil condensers, Claisen adapter heads, addition funnels, and separatory funnels.",
    "Reflux Apparatus Assembly & Operation: Heating reaction mixtures at boiling point without loss of solvent vapors; Vertical reflux condenser mounted on round-bottom flask; Water inlet at lower condenser nipple, water outlet at top; Adding boiling chips / anti-bumping granules to prevent violent superheating eruptive boiling.",
    "Laboratory Heating Mantles & Oil Baths: Electric heating mantles with variable autotransformer (Variac) voltage controllers; High-temperature silicone oil baths for uniform thermal distribution; Water baths for low-boiling solvents ($< 80^\\circ\\text{C}$); Elimination of thermal hotspots.",
    "Vacuum Filtration Instrumentation: Buchner funnel porcelain apparatus; Perforated plate lined with circular filter paper; Heavy-walled vacuum filtering flask with side-arm; Water aspirator / mechanical vacuum pump; Thick-walled vacuum rubber tubing; Safety trap preventing water suck-back.",
    "Melting Point Determination Apparatus: Thiele tube apparatus filled with liquid paraffin oil; Electrical digital melting point apparatus (Stuart / Gallenkamp); Capillary tubes sealed at one end; Temperature ramp rate ($1-2^\\circ\\text{C}/\\text{min}$ near melting point).",
    "Rotary Evaporator (Rotavap) Distillation: Rapid gentle removal of volatile reaction solvents under reduced vacuum pressure; Rotating flask in heated water bath expanding evaporation surface film; Diagonal coil condenser cooled by recirculating chiller; Vacuum pump and solvent collection flask.",
    "University Examination Strategy: Draw and label the complete glassware assembly for a reflux reaction under anhydrous conditions using a calcium chloride guard tube, explain the working of a Thiele tube for melting point determination, and outline peroxide testing for ethers."
], [
    "Condenser Cooling Water Direction: Cool water must enter the lower nipple and exit from the upper nipple to guarantee complete jacket filling.",
    "Boiling Chips Anti-Bumping Action: Porous ceramic chips release tiny trapped air bubbles, promoting smooth continuous boiling without eruptive bumping.",
    "Peroxide Test Reaction: Ethers containing peroxides oxidize iodide to free iodine, forming a blue color upon addition of starch indicator.",
    "Vacuum Safety Trap Necessity: Traps liquid and prevents water aspirator back-pressure from sucking water into the analytical filter flask.",
    "Melting Point Ramp Rate: Heating rate must not exceed 1 to 2 degrees Celsius per minute near melting point to avoid thermal lag errors.",
    "Calcium Chloride Guard Tube: Packed with anhydrous $\\text{CaCl}_2$ at top of reflux condenser to prevent atmospheric moisture entering anhydrous reactions.",
    "Ground Glass Joint Greasing: Light film of silicone grease on joint shoulders prevents frozen joints during prolonged basic reactions.",
    "Rotary Evaporator Thin Film: Motorized flask rotation coats internal glass wall with continuous thin liquid film, speeding evaporation tenfold.",
    "Solvent Flash Point Definition: Lowest temperature at which solvent vaporizes to form an ignitable flammable air mixture near surface.",
    "Lab Practice Rule: Never add fresh boiling chips to an already hot or boiling liquid; sudden violent eruptive vapor expansion can cause burns."
])

add("Chemistry Lab III (Organic Synthesis)", 2, "Chemistry  III (Organic Synthesis): Standard Preparations & Calibration Methods", [
    "Recrystallization Solvent Selection & Criteria: Foundational purification technique for crystalline organic solids; Ideal solvent properties: (1) Insoluble at room temperature, highly soluble at boiling point; (2) Impurities either completely insoluble or highly soluble at room temperature; (3) Chemically unreactive; (4) Moderate boiling point; Solvent pairs (e.g. ethanol-water).",
    "Recrystallization Stepwise Laboratory Protocol: Dissolving crude solid in minimal volume of boiling solvent; Adding activated decolorizing charcoal (decolorizing bone black) to adsorb colored resinous impurities; Hot gravity filtration using fluted filter paper to remove insoluble matter; Slow cooling to room temperature, followed by ice-bath crystallization; Vacuum filtration on Buchner funnel; Washing with ice-cold solvent.",
    "Distillation Techniques: Simple & Fractional Distillation: Simple distillation (separating liquids with boiling point differences $> 40-50^\\circ\\text{C}$); Fractional distillation (separating close-boiling liquids): Vigreux fractionating column packed with glass beads providing multiple vaporization-condensation equilibrium stages (theoretical plates).",
    "Steam Distillation for Thermally Labile Compounds: Isolating volatile water-immiscible organic compounds (aniline, nitrobenzene, essential oils) below their atmospheric decomposition boiling points; Total vapor pressure: $P_{\\text{total}} = P_w + P_{\\text{org}} = 1\\text{ atm}$; Mixture boils below $100^\\circ\\text{C}$; Mole ratio of distillates: $\\frac{w_{\\text{org}}}{w_w} = \\frac{M_{\\text{org}} P_{\\text{org}}}{M_w P_w}$.",
    "Vacuum (Reduced Pressure) Distillation: Distillation of high-boiling or heat-sensitive compounds; Water aspirator or mechanical oil pump reducing pressure; Boiling point nomograph: Estimating reduced-pressure boiling point from atmospheric data.",
    "Calibration of Melting Point Thermometer: Calibrating thermometer against certified pure reference standards: Ice point ($0.0^\\circ\\text{C}$), Naphthalene ($80.2^\\circ\\text{C}$), Benzoic acid ($122.4^\\circ\\text{C}$), and Anthracene ($216.0^\\circ\\text{C}$); Plotting temperature correction graph.",
    "Preparation of TLC Developing Chambers & Solvent Systems: Preparing cylindrical developing tanks lined with filter paper wicks for vapor saturation; Mobile phase solvent systems: Hexane-Ethyl Acetate mixtures ($9:1, 4:1, 1:1$); Spotting capillary tubes; Visualizing TLC plates under 254 nm UV light.",
    "Liquid-Liquid Extraction & Salting-Out Technique: Partition coefficient: $K = C_{\\text{org}} / C_{\\text{aq}}$; Multiple small-volume extractions are mathematically superior to single large-volume extraction; Salting-out effect: Adding inorganic salts ($\\text{NaCl}$) to aqueous phase reduces organic compound solubility, driving analyte into organic solvent.",
    "Drying of Organic Solvents & Extracts: Liquid extracts contain dissolved water; Drying with granular anhydrous drying agents: Anhydrous sodium sulfate ($\\text{Na}_2\\text{SO}_4$, high capacity), Magnesium sulfate ($\\text{MgSO}_4$, fast, slightly acidic), Calcium chloride ($\\text{CaCl}_2$, for hydrocarbons); Swirling until clear; Gravity filtration.",
    "University Examination Strategy: Detail the 7 steps of recrystallization including decolorization with charcoal, derive the mass ratio equation for steam distillation, and explain why multiple small-volume extractions are more efficient than a single large-volume extraction."
], [
    "Recrystallization Solubility Gradient: Ideal solvent exhibits steep temperature-dependent solubility curve: low cold solubility, high hot solubility.",
    "Decolorizing Charcoal Addition Precaution: Never add activated charcoal to boiling liquid; active pores trigger violent sudden boil-over eruptions.",
    "Steam Distillation Boiling Point: Mixture boils when combined vapor pressure equals atmospheric: $P_w + P_{\\text{org}} = 1\\text{ atm}$, boiling strictly below $100^\\circ\\text{C}$.",
    "Extraction Mathematical Law: Remaining fraction after $n$ extractions: $q = \\left(\\frac{V_{\\text{aq}}}{V_{\\text{aq}} + K V_{\\text{org}}}\\right)^n$; multiple small extractions maximize recovery.",
    "Vigreux Column Theoretical Plates: Indentations provide contact surface area for repeated liquid-vapor condensation cycles during fractional distillation.",
    "Salting-Out Mechanism: Highly hydrated electrolyte ions ($\\text{Na}^+, \\text{Cl}^-$) sequester water molecules, decreasing organic solute aqueous solubility.",
    "Drying Agent Clumping Indicator: When drying agent moves freely as individual granules like a snowstorm upon swirling, the extract is dry.",
    "TLC Vapor Chamber Saturation: Filter paper lining ensures uniform internal vapor pressure, preventing curved irregular solvent front progression.",
    "Thermometer Calibration Correction: Compensates for manufacturing capillary bore variations and thermal stem emergence errors.",
    "Lab Practice Rule: In liquid-liquid extractions, frequently invert and vent the separatory funnel stopcock to release internal vapor pressure buildup."
])

add("Chemistry Lab III (Organic Synthesis)", 3, "Chemistry  III (Organic Synthesis): Core Experimental Procedures & Synthesis", [
    "Preparation 1: Synthesis of Aspirin (Acetylsalicylic Acid): Acetylation of salicylic acid (2-hydroxybenzoic acid) using acetic anhydride in the presence of concentrated sulfuric acid ($\text{H}_2\\text{SO}_4$) catalyst; Heating in water bath at $50-60^\\circ\\text{C}$ for 15 minutes; Quenching with ice-water; Filtering crude aspirin; Recrystallization from ethanol-water; Reaction: $\\text{C}_7\\text{H}_6\\text{O}_3 + (\\text{CH}_3\\text{CO})_2\\text{O} \\to \\text{C}_9\\text{H}_8\\text{O}_4 + \\text{CH}_3\\text{COOH}$; Yield: $\\sim 85\\%$, m.p. $135^\\circ\\text{C}$.",
    "Preparation 2: Synthesis of Acetanilide from Aniline: Acetylation of primary aromatic amine; Aniline dissolved in dilute $\\text{HCl}$; Adding acetic anhydride followed immediately by sodium acetate buffer solution; Nucleophilic attack of free unprotonated aniline on acetic anhydride; Acetanilide precipitates as glistening white flakes; Recrystallization from boiling water; Yield: $\\sim 80\\%$, m.p. $114^\\circ\\text{C}$.",
    "Preparation 3: Nitration of Acetanilide to p-Nitroacetanilide: Controlled electrophilic aromatic substitution; Preparing nitrating mixture: Concentrated $\\text{HNO}_3$ and concentrated $\\text{H}_2\\text{SO}_4$; Cooling to $0-5^\\circ\\text{C}$; Adding acetanilide dissolved in glacial acetic acid dropwise, keeping temperature strictly below $10^\\circ\\text{C}$; Pouring onto crushed ice; $p$-Nitroacetanilide precipitates; Recrystallization from methylated spirit; Yield: $\\sim 70\\%$, m.p. $215^\\circ\\text{C}$.",
    "Preparation 4: Synthesis of Dibenzalacetone (Claisen-Schmidt Condensation): Crossed aldol condensation between aromatic aldehyde and ketone; Benzaldehyde reacts with acetone in 2:1 molar ratio in the presence of $10\\%\\text{ NaOH}$ aqueous ethanol at $20-25^\\circ\\text{C}$; Reaction: $2\\text{C}_6\\text{H}_5\\text{CHO} + \\text{CH}_3\\text{COCH}_3 \\to \\text{C}_6\\text{H}_5\\text{CH}=\\text{CH}-\\text{CO}-\\text{CH}=\\text{CH}-\\text{C}_6\\text{H}_5 + 2\\text{H}_2\\text{O}$; Bright yellow crystals; Recrystallization from ethyl acetate; Yield: $\\sim 75\\%$, m.p. $112^\\circ\\text{C}$.",
    "Preparation 5: Synthesis of Benzoic Acid from Benzamide via Alkaline Hydrolysis: Heating benzamide with $10\\%\\text{ NaOH}$ solution under reflux until ammonia odor ceases; Acidifying cooled solution with concentrated $\\text{HCl}$; Benzoic acid precipitates quantitatively; Recrystallization from hot water; Reaction: $\\text{C}_6\\text{H}_5\\text{CONH}_2 + \\text{NaOH} \\to \\text{C}_6\\text{H}_5\\text{COONa} + \\text{NH}_3\\uparrow$; Yield: $\\sim 80\\%$, m.p. $122^\\circ\\text{C}$.",
    "Preparation 6: Synthesis of m-Dinitrobenzene from Nitrobenzene: Secondary electrophilic nitration; Heating nitrobenzene with fuming nitric acid and concentrated sulfuric acid on boiling water bath for 30 minutes; Pouring into excess ice water; Solid yellow $m$-dinitrobenzene precipitates; Recrystallization from ethanol; Yield: $\\sim 70\\%$, m.p. $90^\\circ\\text{C}$.",
    "Preparation 7: Synthesis of Iodoform from Acetone: Haloform reaction; Dissolving acetone in aqueous $\\text{NaOH}$; Adding iodine-potassium iodide solution dropwise with continuous stirring until brown iodine color persists; Yellow crystals of iodoform ($\text{CHI}_3$) precipitate; Reaction: $\\text{CH}_3\\text{COCH}_3 + 3\\text{I}_2 + 4\\text{NaOH} \\to \\text{CHI}_3\\downarrow + \\text{CH}_3\\text{COONa} + 3\\text{NaI} + 3\\text{H}_2\\text{O}$; Recrystallization from alcohol; Yield: $\\sim 85\\%$, m.p. $119^\\circ\\text{C}$.",
    "Preparation 8: Synthesis of Methyl Orange Azo Dye: Diazotizing sulfanilic acid with $\\text{NaNO}_2 / \\text{HCl}$ at $0-5^\\circ\\text{C}$; Coupling diazonium salt with $N,N$-dimethylaniline dissolved in acetic acid; Making solution basic with $\\text{NaOH}$; Methyl orange precipitates as golden-orange crystalline plates; Yield: $\\sim 75\\%$.",
    "Preparation 9: Synthesis of Phthalimide from Phthalic Anhydride: Heating phthalic anhydride with urea or concentrated aqueous ammonia in a porcelain dish; Fusion at $130-140^\\circ\\text{C}$; Sublimation; Cooling and washing with cold water; Recrystallization from ethanol; Yield: $\\sim 80\\%$, m.p. $238^\\circ\\text{C}$.",
    "University Examination Strategy: Write the complete synthetic procedure, reaction mechanism, and calculation of theoretical yield for the synthesis of Aspirin from salicylic acid, detail the synthesis of p-nitroacetanilide, and write the mechanism of the Claisen-Schmidt condensation forming dibenzalacetone."
], [
    "Aspirin Acetic Anhydride Choice: Acetic anhydride is preferred over acetyl chloride because it produces non-corrosive acetic acid without choking $\\text{HCl}$ gas.",
    "Acetanilide Sodium Acetate Buffer: Neutralizes $\\text{HCl}$ formed during acetylation, maintaining aniline in free reactive unprotonated nucleophilic state.",
    "Nitration Temperature Boundary: Kept strictly below $10^\\circ\\text{C}$ to suppress unwanted dinitration and formation of ortho-isomer.",
    "Dibenzalacetone 2:1 Stoichiometry: Two molecules of benzaldehyde condense on both alpha-methyl groups of acetone through sequential aldol additions.",
    "Benzamide Hydrolysis Ammonia Indicator: Completion of hydrolysis confirmed when vapor exiting reflux condenser ceases turning moist red litmus blue.",
    "m-Dinitrobenzene Meta Directing: The strongly deactivating nitro group directs the incoming second nitronium ion exclusively to the meta position.",
    "Iodoform Characteristic Odor: Yellow hexagonal crystalline flakes of $\\text{CHI}_3$ displaying persistent hospital antiseptic odor.",
    "Methyl Orange Azo Linkage: Contains chromophoric $-\\text{N}=\\text{N}-$ azo bridge linking sulfanilic acid and dimethylaniline rings.",
    "Phthalic Anhydride Fusion: High-temperature reaction with urea generates ammonia in situ, driving nucleophilic imide ring cyclization.",
    "Practical Exam Rule: Always wash crude crystalline products thoroughly on the Buchner funnel with ice-cold solvent to remove adherent mother liquor."
])

add("Chemistry Lab III (Organic Synthesis)", 4, "Chemistry  III (Organic Synthesis): Quantitative Data Verification & Error Analysis", [
    "Stoichiometric Calculation of Limiting Reagent: Determining moles of all organic reactants: Moles $= \\text{Mass} / \\text{MW}$ or Moles $= (\\text{Volume} \\times \\text{Density}) / \\text{MW}$; Comparing mole ratios against stoichiometric coefficients; Identifying the limiting reactant that dictates maximum possible yield.",
    "Theoretical Yield Determination Formulation: Theoretical yield in grams: $\\text{Theoretical Yield} = \\text{Moles of Limiting Reagent} \\times \\text{MW of Target Product} \\times \\left(\\frac{\\text{Moles Product}}{\\text{Moles Reactant}}\\right)$; Calculating theoretical maximum yield for Aspirin, Acetanilide, and Dibenzalacetone syntheses.",
    "Percentage Practical Yield Calculation: Formula: $\\%\\text{ Yield} = \\frac{\\text{Actual Mass of Pure Dry Product}}{\\text{Theoretical Maximum Mass}} \\times 100\\%$; Assessing synthetic efficiency; Typical organic undergraduate synthesis yield range: $65-85\\%$; Documenting mass loss factors.",
    "Sources of Synthetic Yield Loss in Laboratory Operations: (1) Reversible equilibrium incompleteness; (2) Side reactions forming by-products (e.g. ortho-isomer in nitrations); (3) Incomplete precipitation; (4) Solubility retention in crystallization mother liquor; (5) Mechanical transfer losses on glassware, spatula, and filter paper.",
    "Purity Assessment via Melting Point Sharpness: Pure crystalline organic compounds exhibit sharp melting points spanning $0.5-1.0^\\circ\\text{C}$; Melting Point Depression: Insoluble or soluble impurities disrupt crystal lattice, depressing the melting point and widening the melting range ($\\Delta T_{\\text{range}} > 3-5^\\circ\\text{C}$).",
    "Mixed Melting Point Technique for Chemical Identification: Intimate $1:1$ physical mixture of synthesized product with authentic pure reference standard; If synthesized product is authentic: Mixture melts sharply at standard temperature; If product is distinct: Melting point exhibits severe depression ($10-20^\\circ\\text{C}$) and wide melting range.",
    "Thin-Layer Chromatography (TLC) Purity Verification: Assessing single vs multiple spots; Comparing $R_f$ value of crude product, recrystallized pure product, and authentic standard on single silica TLC plate; Single spot matching standard confirms chemical purity; Absence of starting material spot confirms complete reaction conversion.",
    "Colorimetric Ferric Chloride Test for Aspirin Purity: Salicylic acid starting material contains a free phenolic $-OH$ group, forming a deep purple complex with neutral $1\\%\\text{ FeCl}_3$; Pure aspirin has acetylated esterified $-OH$, giving a negative test (colorless/yellow); Developing purple color indicates unreacted salicylic acid contamination.",
    "Loss on Drying (LOD) & Moisture Content Analysis: Measuring mass loss of synthesized crystals upon drying in vacuum oven at $50^\\circ\\text{C}$ to constant mass; Ensuring reported percentage yields are not falsely inflated by residual crystallization solvent or water.",
    "University Examination Strategy: Solve a complete quantitative problem calculating the limiting reagent, theoretical yield, and percentage yield for an organic preparation, interpret melting point depression data, and explain the chemical principle of the mixed melting point technique."
], [
    "Limiting Reagent Mandate: The reactant present in smallest stoichiometric mole equivalent limits the maximum theoretical yield of product.",
    "Percentage Yield Formula: $\\% \\text{ Yield} = \\frac{\\text{Actual Dry Mass Obtained}}{\\text{Theoretical Maximum Mass}} \\times 100\\%$.",
    "Melting Range Sharpness: Pure organic compounds melt within a narrow $1^\\circ\\text{C}$ window; broad ranges indicate impurities or moisture.",
    "Melting Point Depression: Impurities disrupt crystalline packing lattice, lowering the melting point below literature benchmark values.",
    "Mixed Melting Point Identity Test: Mixing identical compounds produces zero melting depression; distinct compounds depress melting by $10-20^\\circ\\text{C}$.",
    "Ferric Chloride Aspirin Test: $1\\%\\text{ FeCl}_3$ forms violet coordination complex with unreacted salicylic acid phenol; pure aspirin gives zero purple color.",
    "TLC Reaction Monitoring: Disappearance of starting material spot and appearance of single product spot confirms reaction completion.",
    "Crystallization Solubility Loss: Saturated mother liquor retains finite dissolved product at ice bath temperatures, accounting for 10-15% unavoidable yield loss.",
    "Mechanical Transfer Loss: Adherence of crystals to filter paper fibers and beaker walls contributes measurable systematic yield reductions.",
    "Exam Scoring Tip: In yield calculations, always account for liquid reactant densities (e.g. aniline density $1.02\\text{ g/mL}$) when computing starting moles."
])

add("Chemistry Lab III (Organic Synthesis)", 5, "Chemistry  III (Organic Synthesis): Comprehensive Practical Record & Viva Voce", [
    "Practical Notebook Documentation Standards: Complete synthesis documentation: Experiment objective, balanced chemical equation, reaction mechanism with curved electron-pushing arrows, physical constants table (MW, density, m.p., b.p., hazards), limiting reagent calculations, raw yield weights, observed melting points, and sample submission vial.",
    "Viva Voce High-Yield Questions on Aspirin: Why is acetic anhydride used instead of acetyl chloride? What is the function of concentrated sulfuric acid? How do you test if synthesized aspirin is free from unreacted salicylic acid? What is the pharmacological action of aspirin?",
    "Viva Voce Questions on Acetanilide & Nitration: Why is sodium acetate added during acetanilide preparation? Why is aniline acetylated before nitration? Why must the temperature be kept below $10^\\circ\\text{C}$ during nitration? What is the major product and why?",
    "Viva Voce Questions on Carbonyl Condensations: What is the Claisen-Schmidt condensation? What is the molar ratio of benzaldehyde to acetone in dibenzalacetone synthesis? Why is aqueous $\\text{NaOH}$ used? What is the stereochemistry of dibenzalacetone (trans-trans)?",
    "Viva Voce Questions on Recrystallization: What are the criteria for selecting an ideal recrystallization solvent? Why should decolorizing charcoal not be added to boiling solution? What is a solvent pair and give an example? What is the function of fluted filter paper?",
    "Viva Voce Questions on Distillation: When is fractional distillation preferred over simple distillation? What is the principle of steam distillation? Under what conditions is vacuum distillation employed? What are boiling chips?",
    "Viva Voce Questions on Purification & Analysis: What is the principle of melting point determination? What is mixed melting point? How does thin-layer chromatography confirm purity? What is $R_f$ value?",
    "Quality Assurance & Safe Laboratory Conduct: Proper labeling of chemical product vials with compound name, student name, melting point, and tare weight; Returning hazardous reagents to ventilated storage; Disposing of organic capillary tubes in glass sharps containers.",
    "Emergency First Aid in Organic Chemistry: Managing bromine splashes (swabbing with sodium thiosulfate), phenol burns (swabbing with polyethylene glycol / glycerol), and organic solvent splashes in eyes (copious flushing for 15 minutes).",
    "University Examination Strategy: Review all viva questions on reaction mechanisms of synthesized compounds, ensure the practical record book contains complete calculations and yield percentages with teacher signatures, and submit pure dry crystalline samples in labeled vials."
], [
    "Aspirin Mechanism Catalyst: Concentrated $\\text{H}_2\\text{SO}_4$ protonates acetic anhydride carbonyl, generating electrophilic species for nucleophilic attack.",
    "Aniline Protection Rationale: Direct nitration of aniline with $\\text{HNO}_3/\\text{H}_2\\text{SO}_4$ oxidizes the amino group into tarry black quinones.",
    "Fluted Filter Paper Advantage: Multiple accordion folds maximize surface area and create air channels, accelerating hot gravity filtration.",
    "Dibenzalacetone Trans Geometry: Stable trans-trans configuration minimizes steric clash between phenyl rings across the conjugated dienone system.",
    "Steam Distillation Volatility Rule: Applicable only to organic substances possessing substantial vapor pressure ($\sim 5-10\\text{ mmHg}$) near $100^\\circ\\text{C}$.",
    "Mixed Melting Point Definitive Proof: The most reliable, rapid classical laboratory verification confirming synthesized crystal identity.",
    "Solvent Pair Recrystallization: Dissolve compound in minimal hot solvent A (high solubility); add hot solvent B (low solubility) dropwise until turbid.",
    "Bromine Burn Thiosulfate Swab: Sodium thiosulfate reduces corrosive elemental bromine ($Br_2$) to harmless bromide ions ($Br^-$).",
    "Yield Exceeding 100% Diagnosis: An actual yield exceeding theoretical yield indicates wet crystals retaining un-evaporated crystallization solvent.",
    "Exam Gold Rule: In organic viva voce, always write the structural formula of the product, state the limiting reagent, and give the literature melting point."
])

# Save to sem3_bsc_physics_chem_data.json
with open('scripts/sem3_bsc_physics_chem_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in physics_chem dataset now: {len(data)}")
