import json

data = {}

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    # Check zero dollar signs strictly
    for s in hl + kp:
        assert '$' not in s, f"Dollar sign found in {sub} U{num}: {s}"
    data[(sub, num)] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 1. BIOCHEMISTRY (B.Tech)
# =========================================================================
add("Biochemistry", 1, "Biomolecules", [
    "Carbohydrate Structural Classification: Monosaccharides (aldoses like glucose, ketoses like fructose), disaccharides with glycosidic bonds (maltose alpha-1,4, lactose beta-1,4, sucrose alpha-1,beta-2 non-reducing), and polysaccharides (starch amylose alpha-1,4 and amylopectin alpha-1,6 branches, glycogen, cellulose beta-1,4).",
    "Amino Acid Stereochemistry & Zwitterions: Standard proteinogenic amino acids with chiral alpha-carbon (except achiral glycine); Exist as dipolar zwitterions at physiological pH 7.4; Isoelectric point (pI) where net charge is zero: pI = (pK1 + pK2) / 2 for neutral amino acids.",
    "Protein Structural Hierarchy: Primary structure (covalent linear peptide bonds between alpha-amino and alpha-carboxyl groups); Secondary structure (alpha-helix with 3.6 residues per turn and beta-pleated sheets stabilized by intrachain hydrogen bonds); Tertiary 3D folded conformation; Quaternary multi-subunit oligomers (e.g. tetrameric hemoglobin).",
    "Lipids & Biological Membrane Architecture: Saponifiable lipids (triacylglycerols for energy storage, glycerophospholipids, sphingolipids); Amphipathic lipid bilayer driven by hydrophobic effect; Fluid mosaic model with integral and peripheral membrane proteins.",
    "Nucleic Acid Molecular Anatomy: Nucleotides comprising nitrogenous base (purines adenine/guanine, pyrimidines cytosine/thymine/uracil), pentose sugar (beta-D-ribose or 2-deoxyribose), and phosphate ester; Linked via 3-prime to 5-prime phosphodiester bonds.",
    "B-DNA Double Helix Geometry: Watson-Crick antiparallel right-handed double helix; Complementary base pairing via hydrogen bonds (A pairs with T through 2 bonds, G pairs with C through 3 bonds); Pitch is 3.4 nanometers with 10.5 base pairs per helical turn; Major and minor grooves facilitate protein recognition.",
    "RNA Diversity & Functions: Messenger RNA (encodes amino acid sequence), transfer RNA (cloverleaf secondary structure with anticodon loop and CCA-3-prime amino acid attachment stem), ribosomal RNA (catalytic peptidyl transferase ribozyme in ribosome), and small non-coding regulatory microRNAs.",
    "Forces Stabilizing Biomolecular Conformations: Hydrophobic interactions (clustering of non-polar side chains in core to maximize solvent entropy), electrostatic salt bridges between Lys/Arg and Asp/Glu, hydrogen bonds, and covalent disulfide cross-links (-S-S-) between cysteine residues.",
    "Biochemical Separation & Electrophoresis: Polyacrylamide gel electrophoresis (SDS-PAGE) separates denatured polypeptide chains strictly by molecular mass; Isoelectric focusing (IEF) separates proteins along continuous immobilized pH gradients; Combined 2D gel electrophoresis.",
    "University Examination Strategy: Draw the zwitterion form of alanine, compare B-DNA vs A-DNA and Z-DNA geometric parameters, and detail the four structural levels of proteins with stabilizing chemical bonds."
], [
    "Isoelectric Point Formula: pI = (pKa1 + pKa2) / 2 for monoamino monocarboxylic amino acids.",
    "Peptide Bond Geometry: Rigid planar partial double bond character due to resonance delocalization.",
    "Alpha-Helix Parameters: 3.6 residues per complete helical turn with vertical rise of 0.54 nanometers.",
    "Watson-Crick Base Pairing: Adenine pairs with Thymine (2 H-bonds); Guanine pairs with Cytosine (3 H-bonds).",
    "Cellulose Linkage: Beta-1,4-glycosidic bonds forming linear rigid microfibrils resistant to human amylase.",
    "Reducing Sugar Criterion: Requires free anomeric hemiacetal or hemiketal hydroxyl group.",
    "Disulfide Bond Cross-link: Formed by oxidation of two cysteine thiol (-SH) side chains.",
    "SDS-PAGE Principle: Sodium dodecyl sulfate imparts uniform negative charge-to-mass ratio to proteins.",
    "DNA Denaturation (Tm): Melting temperature where 50 percent of double-stranded DNA unwinds to single strands.",
    "Exam Scoring Tip: Glycine is the only standard amino acid lacking an asymmetric chiral center and is therefore optically inactive."
])

add("Biochemistry", 2, "Enzymes", [
    "Enzymatic Catalysis Principles: Biocatalysts increase reaction rates by factors of 10 to the power 6 to 10 to the power 12 without altering overall thermodynamic chemical equilibrium; Lower Gibbs activation energy barrier (delta G double dagger) by stabilizing transition state complexes.",
    "Enzyme Active Site Architecture: Catalytic cleft lined by specific functional groups forming lock-and-key (Fischer) or induced-fit (Koshland) complementary binding with substrate; Catalytic mechanisms: acid-base catalysis, covalent catalysis, and metal ion cofactor catalysis.",
    "IUBMB Enzyme Nomenclature: Six systematic enzyme classes: 1-Oxidoreductases (redox transfers), 2-Transferases (functional group transfers), 3-Hydrolases (hydrolytic cleavage), 4-Lyases (non-hydrolytic addition/cleavage with double bonds), 5-Isomerases (structural rearrangements), 6-Ligases (condensation coupled to ATP hydrolysis).",
    "Michaelis-Menten Steady-State Kinetics: Rate of single-substrate reaction: v = (Vmax * [S]) / (Km + [S]), where Vmax is maximum catalytic velocity and Km is Michaelis constant; Km represents substrate concentration at half-maximal velocity (v = Vmax / 2) reflecting enzyme affinity.",
    "Lineweaver-Burk Double-Reciprocal Linearization: 1/v = (Km / Vmax) * (1/[S]) + (1 / Vmax); Plotted as 1/v vs 1/[S]; Slope equals Km/Vmax; Y-intercept equals 1/Vmax; X-intercept equals -1/Km.",
    "Catalytic Turnover Number (kcat): Catalytic constant kcat = Vmax / [E]total, representing maximum catalytic conversions per active site per second; Catalytic efficiency given by specificity constant kcat / Km, bounded by aqueous diffusion limit (10 to the power 8 to 10 to the power 9 per molar second).",
    "Competitive Enzyme Inhibition: Inhibitor structurally resembles substrate and binds reversibly to active site; Increases apparent Km without changing Vmax; Overcome by excess substrate; Lines in Lineweaver-Burk plot intersect at identical 1/Vmax on y-axis.",
    "Non-Competitive & Uncompetitive Inhibition: Non-competitive inhibition (inhibitor binds allosteric site on both free enzyme and ES complex, decreases Vmax while Km remains unchanged); Uncompetitive inhibition (inhibitor binds exclusively to ES complex, decreases both Vmax and Km proportionally, parallel Lineweaver-Burk lines).",
    "Allosteric Enzyme Regulation & Hill Equation: Non-Michaelis sigmoidal cooperative kinetics; Regulated by allosteric effectors binding regulatory subunits; Hill coefficient nH > 1 indicates positive cooperativity; Concerted (MWC) vs Sequential (KNF) allosteric transition models.",
    "University Examination Strategy: Derive the Michaelis-Menten rate equation using the Briggs-Haldane steady-state assumption, construct Lineweaver-Burk plots for competitive vs non-competitive inhibition, and define catalytic turnover kcat."
], [
    "Michaelis-Menten Equation: v = (Vmax * [S]) / (Km + [S]).",
    "Lineweaver-Burk Equation: 1/v = (Km / Vmax) * (1 / [S]) + (1 / Vmax).",
    "Michaelis Constant Km Meaning: Substrate concentration at which initial reaction velocity equals half of Vmax.",
    "Catalytic Turnover Number: kcat = Vmax / [E]total (measured in reciprocal seconds).",
    "Catalytic Efficiency Metric: Ratio kcat / Km (measures enzyme specificity and speed).",
    "Competitive Inhibition Signature: Km increases, Vmax remains strictly constant.",
    "Non-Competitive Inhibition Signature: Km remains constant, Vmax decreases.",
    "Uncompetitive Inhibition Signature: Both Km and Vmax decrease by the exact same ratio.",
    "Enzyme Cofactor Classification: Coenzymes (organic carriers e.g. NAD+, FAD) vs Prosthetic groups (tightly bound e.g. heme).",
    "Exam Scoring Tip: The lower the Michaelis constant Km, the higher the affinity of the enzyme for its substrate."
])

add("Biochemistry", 3, "Metabolism", [
    "Bioenergetics & ATP High-Energy Bonds: Adenosine triphosphate (ATP) acts as universal biochemical energy currency; Standard Gibbs free energy of hydrolysis: ATP + H2O -> ADP + Pi yields delta G zero prime = -30.5 kilojoules per mole due to electrostatic charge repulsion and resonance stabilization of products.",
    "Glycolysis (Embden-Meyerhof-Parnas Pathway): Cytosolic catabolism of 1 mole glucose to 2 moles pyruvate; Preparatory energy-investment phase (2 ATP consumed, catalyzed by hexokinase and phosphofructokinase-1 PFK-1); Payoff phase (4 ATP generated via substrate-level phosphorylation, 2 NADH produced); Net yield: 2 ATP + 2 NADH per glucose.",
    "Pyruvate Dehydrogenase Multi-Enzyme Complex (PDH): Oxidative decarboxylation of pyruvate to acetyl-CoA in mitochondrial matrix: Pyruvate + CoA + NAD+ -> Acetyl-CoA + CO2 + NADH; Requires 5 cofactors: TPP, lipoate, FAD, NAD+, and CoA-SH; Irreversible link between glycolysis and TCA cycle.",
    "Citric Acid Cycle (Krebs / TCA Cycle): Mitochondrial cyclic oxidation of acetyl-CoA; 8 enzymatic steps; Condensation with oxaloacetate yields citrate; Generates 3 NADH, 1 FADH2, 1 GTP (ATP), and releases 2 CO2 per turn; Regulated by isocitrate dehydrogenase and alpha-ketoglutarate dehydrogenase.",
    "Mitochondrial Electron Transport Chain (ETC): Inner mitochondrial membrane multi-protein complexes: Complex I (NADH dehydrogenase), Complex II (succinate dehydrogenase), Complex III (cytochrome bc1 complex), and Complex IV (cytochrome c oxidase); Sequential electron transfer driven by standard reduction potentials toward terminal electron acceptor O2.",
    "Chemiosmotic Coupling & ATP Synthase: Mitchell's chemiosmotic hypothesis; Complexes I, III, and IV pump protons from matrix into intermembrane space, generating proton-motive force (delta p = delta psi + 59 * delta pH); Protons flow back into matrix through F0-F1 ATP synthase rotor, driving conformational rotation that synthesizes ATP.",
    "P/O Ratios & Net Cellular Respiration Yield: Oxidation of 1 NADH yields approximately 2.5 ATP; Oxidation of 1 FADH2 yields 1.5 ATP; Complete aerobic catabolism of 1 mole glucose yields 30 to 32 ATP depending on glycerol-3-phosphate or malate-aspartate shuttle.",
    "Gluconeogenesis & Cori Cycle: Biosynthesis of glucose from non-carbohydrate precursors (pyruvate, lactate, glycerol, amino acids); Bypasses irreversible glycolytic steps using pyruvate carboxylase, PEP carboxykinase, fructose-1,6-bisphosphatase, and glucose-6-phosphatase; Cori cycle cycles lactate between muscle and liver.",
    "Beta-Oxidation of Saturated Fatty Acids: Mitochondrial spiral degradation of acyl-CoA; Repetitive 4-step sequence: Oxidation (acyl-CoA dehydrogenase, FAD), Hydration (enoyl-CoA hydratase), Oxidation (hydroxyacyl-CoA dehydrogenase, NAD+), and Thiolysis (thiolase, CoA-SH); Palmitate (C16) yields 8 acetyl-CoA, 7 FADH2, 7 NADH (106 net ATP).",
    "University Examination Strategy: Detail the individual reactions of the citric acid cycle showing carbon counts and cofactors, explain Mitchell's chemiosmotic hypothesis for ATP synthesis, and calculate net ATP yield from palmitic acid."
], [
    "ATP Hydrolysis Energy: Delta G zero prime equals -30.5 kilojoules per mole.",
    "Glycolysis Net Output: Glucose + 2 NAD+ + 2 ADP + 2 Pi -> 2 Pyruvate + 2 NADH + 2 ATP + 2 H2O.",
    "Key Glycolysis Committed Step: Phosphofructokinase-1 (PFK-1) converting Fructose-6-P to Fructose-1,6-BP.",
    "TCA Cycle One-Turn Yield: 3 NADH + 1 FADH2 + 1 GTP + 2 CO2 per molecule of acetyl-CoA.",
    "Chemiosmotic Proton Pumping: Complex I pumps 4 H+, Complex III pumps 4 H+, Complex IV pumps 2 H+ per electron pair.",
    "NADH ATP Equivalent: 1 NADH yields approximately 2.5 ATP molecules via oxidative phosphorylation.",
    "FADH2 ATP Equivalent: 1 FADH2 yields approximately 1.5 ATP molecules via Complex II.",
    "Palmitic Acid Net ATP: 16-carbon palmitate yields net 106 ATP upon complete aerobic oxidation.",
    "Cori Cycle Inter-organ Link: Transports muscle lactate to liver for gluconeogenesis and returns glucose to muscle.",
    "Exam Scoring Tip: In the electron transport chain, Complex II (succinate dehydrogenase) does not pump any protons across the inner mitochondrial membrane."
])

add("Biochemistry", 4, "Molecular Biology", [
    "Central Dogma of Molecular Biology: Directional flow of genetic information: DNA replication -> DNA transcription -> Messenger RNA translation -> Functional polypeptide protein; Exceptions include reverse transcription in retroviruses (RNA -> DNA via reverse transcriptase).",
    "Semi-Conservative DNA Replication: Meselson-Stahl experiment using 15-N isotope density gradient centrifugation confirmed semi-conservative replication; Bidirectional replication forks initiate at defined origin of replication (oriC in E. coli).",
    "Replication Fork Enzymes & Machinery: Helicase (unwinds parental duplex), Single-Strand DNA-Binding proteins (SSB, prevents reannealing), DNA topoisomerase / gyrase (relieves torsional supercoiling), Primase (synthesizes short RNA primers), and DNA Polymerase III (synthesizes nascent DNA strictly in 5-prime to 3-prime direction).",
    "Leading vs Lagging Strand Synthesis: Leading strand synthesized continuously toward moving replication fork; Lagging strand synthesized discontinuously away from fork as discrete Okazaki fragments (1000-2000 nucleotides in prokaryotes); DNA Polymerase I removes RNA primers via 5-prime to 3-prime exonuclease activity and fills gaps; DNA ligase seals phosphodiester nicks.",
    "Prokaryotic Transcription Mechanism: Catalyzed by DNA-dependent RNA polymerase; Core enzyme (alpha2-beta-beta_prime-omega) associates with sigma factor to form holoenzyme that recognizes -10 (Pribnow box TATAAT) and -35 promoter consensus sequences; Chain elongation in 5-prime to 3-prime direction; Termination via Rho-dependent or intrinsic Rho-independent (hairpin stem-loop) mechanisms.",
    "Eukaryotic Transcription & Pre-mRNA Processing: Three distinct RNA polymerases (Pol I for rRNA, Pol II for protein-encoding mRNA, Pol III for tRNA); Co-transcriptional mRNA processing: 5-prime 7-methylguanosine cap addition, 3-prime cleavage and polyadenylation (poly-A tail of 200-250 adenines), and spliceosomal removal of non-coding introns with exon ligation.",
    "Genetic Code Universal Properties: Triplet codon organization (64 codons); Degenerate / redundant (61 codons specify 20 standard amino acids, multiple codons for single amino acid); Non-overlapping, comma-less, and nearly universal; Start codon AUG (methionine); Stop nonsense codons: UAA (ochre), UAG (amber), UGA (opal).",
    "Crick's Wobble Hypothesis: Non-standard base pairing allowed at third 3-prime base position of mRNA codon and first 5-prime base position of tRNA anticodon; Inosine (I) at wobble position pairs with U, C, or A; Explains why 31 tRNA species suffice to read all 61 sense codons.",
    "Ribosomal Translation Stages: Activation of amino acids by aminoacyl-tRNA synthetases; Initiation (assembly of small and large ribosomal subunits around AUG with initiation factors and fMet-tRNA); Elongation (decoding at A-site, peptide bond synthesis at P-site by peptidyl transferase, translocation driven by EF-G); Termination (release factors bind stop codons, releasing polypeptide).",
    "University Examination Strategy: Draw a detailed diagram of the DNA replication fork labeling leading and lagging strands and Okazaki fragments, summarize the Meselson-Stahl experiment, and list the three post-transcriptional modifications of eukaryotic mRNA."
], [
    "Meselson-Stahl Proof: Proved semi-conservative DNA replication using 15-N/14-N density gradient centrifugation.",
    "DNA Polymerase III Direction: Polymerizes dNTPs strictly in 5-prime to 3-prime direction.",
    "Okazaki Fragments Length: Discontinuous 1000 to 2000 nucleotide segments on lagging strand in bacteria.",
    "Prokaryotic Promoter Consensus: -10 Pribnow box (TATAAT) and -35 region (TTGACA).",
    "Stop Nonsense Codons: UAA, UAG, and UGA specify chain termination (no matching tRNAs).",
    "Start Initiation Codon: AUG codes for N-formylmethionine in prokaryotes and methionine in eukaryotes.",
    "Wobble Base Position: Non-standard pairing allowed at 3-prime end of codon and 5-prime end of anticodon.",
    "Eukaryotic Splicing Core: Spliceosome made of small nuclear ribonucleoproteins (snRNPs U1, U2, U4, U5, U6).",
    "Polyadenylation Function: Poly-A tail at 3-prime end protects mRNA from enzymatic exonucleolytic degradation.",
    "Exam Scoring Tip: DNA polymerase requires a pre-existing 3-prime hydroxyl (-OH) primer to initiate synthesis, whereas RNA polymerase can initiate de novo transcription without primers."
])

add("Biochemistry", 5, "Clinical Biochemistry", [
    "Diagnostic Clinical Enzymology: Measurement of intracellular enzyme levels released into serum following tissue necrosis or altered membrane permeability; Key markers: Creatine Kinase (CK-MB for myocardial infarction), Aspartate Aminotransferase (AST / SGOT) and Alanine Aminotransferase (ALT / SGPT for liver parenchymal damage).",
    "Cardiac Biomarkers in Myocardial Infarction: Sequential elevation profiles: Cardiac troponins (cTnI and cTnT, highly sensitive gold standard, elevated within 3-6 hours, peaks at 24 hours, persists 10-14 days), CK-MB isoenzyme (peaks at 18-24 hours, returns to baseline by 48-72 hours, useful for detecting re-infarction), and Myoglobin (earliest non-specific marker).",
    "Liver Function Tests (LFT): Synthetic capacity markers (serum albumin, prothrombin time PT / INR); Excretory and cholestatic markers (Total and conjugated direct bilirubin, Alkaline Phosphatase ALP, Gamma-Glutamyl Transferase GGT); Hepatocellular necrosis markers (ALT, AST; De Ritis ratio AST/ALT > 2 indicates alcoholic liver disease).",
    "Kidney Function Tests (KFT) & Renal Clearance: Blood Urea Nitrogen (BUN), serum creatinine, and estimated Glomerular Filtration Rate (eGFR); Creatinine clearance test: Ccr = (Ucr * V) / Pcr; Jaffe reaction (creatinine reacts with alkaline picrate to form orange-red Janovski complex); Normal GFR 90 to 120 mL per minute.",
    "Blood Glucose Homeostasis & Diabetes Mellitus: Diagnostic criteria: Fasting plasma glucose (FPG >= 126 mg/dL), 2-hour post-load Oral Glucose Tolerance Test (OGTT >= 200 mg/dL), and Glycated Hemoglobin (HbA1c >= 6.5 percent); HbA1c reflects average retrospective glycemic control over preceding 8 to 12 weeks.",
    "Serum Lipid Profile & Cardiovascular Risk: Total cholesterol, High-Density Lipoprotein (HDL-C, protective anti-atherogenic), Low-Density Lipoprotein (LDL-C, primary atherogenic target), and Triacylglycerols; Friedewald calculation: LDL = Total Cholesterol - HDL - (Triglycerides / 5), valid for triglycerides < 400 mg/dL.",
    "Plasma Proteins & Serum Protein Electrophoresis (SPEP): Cellulose acetate or agarose electrophoresis separating serum into 5 distinct bands: Albumin (fastest, largest peak), Alpha-1, Alpha-2, Beta, and Gamma-globulins; Monoclonal gammopathy (paraprotein M-spike in multiple myeloma).",
    "Acid-Base Balance & Arterial Blood Gases (ABG): Henderson-Hasselbalch equation: pH = 6.1 + log([HCO3-] / (0.03 * PaCO2)); Normal arterial parameters: pH 7.35-7.45, PaCO2 35-45 mmHg, HCO3- 22-26 mEq/L; Classifications: Metabolic acidosis, Metabolic alkalosis, Respiratory acidosis, and Respiratory alkalosis.",
    "Urinalysis & Pathological Constituents: Physical (color, specific gravity 1.005-1.030, pH 4.5-8.0); Chemical Dipstick: Proteinuria (microalbuminuria in diabetic nephropathy), Glucosuria (exceeding renal glucose threshold 180 mg/dL), Ketonuria (diabetic ketoacidosis), and Bilirubin/Urobilinogen.",
    "University Examination Strategy: Construct a comparative time-course graph of cardiac biomarkers (Troponin, CK-MB, LDH) post-myocardial infarction, apply the Henderson-Hasselbalch equation to calculate blood pH, and state the diagnostic criteria for diabetes mellitus."
], [
    "Henderson-Hasselbalch Blood Formula: pH = 6.1 + log([HCO3-] / [0.03 * PaCO2]).",
    "Creatinine Clearance Equation: Ccr = (Ucr * V) / (Pcr * 1440) in mL per minute.",
    "Friedewald LDL Equation: LDL = Total Cholesterol - HDL - (Triglycerides / 5).",
    "Normal Fasting Blood Glucose: 70 to 99 mg/dL (Diabetes diagnosed at >= 126 mg/dL).",
    "Diabetes HbA1c Benchmark: HbA1c >= 6.5 percent diagnostic of Diabetes Mellitus.",
    "Gold Standard Cardiac Marker: Cardiac Troponin I (cTnI) and Troponin T (cTnT).",
    "Renal Glucosuria Threshold: Blood glucose exceeding 180 mg/dL spills into urine.",
    "Jaffe Creatinine Reaction: Alkaline picrate reacts with creatinine producing yellow-orange color.",
    "De Ritis Ratio Diagnostic: AST / ALT ratio > 2.0 strongly indicates alcoholic hepatitis.",
    "Exam Scoring Tip: Glycated hemoglobin (HbA1c) requires no patient fasting and reflects erythrocyte glucose exposure over their 120-day mean lifespan."
])

# =========================================================================
# 2. HUMAN ANATOMY & PHYSIOLOGY (B.Tech)
# =========================================================================
add("Human Anatomy & Physiology", 1, "Cell & Tissue", [
    "Structural Organization of the Human Body: Chemical level -> Cellular -> Tissue -> Organ -> Organ system -> Organism; Homeostasis: Dynamic maintenance of constant internal physiological environment (milieu interieur) via negative and positive biological feedback loops.",
    "Cellular Membrane & Transport Mechanics: Amphipathic lipid bilayer with embedded ion channels and carrier proteins; Simple passive diffusion (Fick's law), Facilitated diffusion via carrier permeases, Primary active transport (Na+/K+ ATPase electrogenic pump), Secondary active transport (symport and antiport), and Endocytosis/Exocytosis.",
    "Cellular Organelles & Functional Roles: Mitochondria (oxidative phosphorylation and apoptosis), Rough endoplasmic reticulum (ribosomal protein synthesis), Smooth ER (lipid/steroid synthesis and calcium sequestration), Golgi apparatus (post-translational sorting and packaging), Lysosomes, and Peroxisomes.",
    "Classification of Primary Human Tissues: Four fundamental tissue types: (1) Epithelial tissue; (2) Connective tissue; (3) Muscular tissue; (4) Nervous tissue.",
    "Epithelial Tissue Morphological Architecture: Classified by cell layers (simple vs stratified) and shape (squamous, cuboidal, columnar); Simple squamous epithelium (vascular endothelium, lung alveoli for diffusion); Stratified squamous keratinized epithelium (skin epidermis for abrasion barrier); Pseudostratified ciliated columnar (trachea).",
    "Intercellular Cell Junctions: Tight junctions (zonula occludens, impermeable barrier sealing epithelial sheets), Desmosomes (macula adherens, intermediate filament anchor resisting shear stress), Hemidesmosomes, and Gap junctions (connexon hexamers allowing direct metabolic and electrical ionic coupling).",
    "Connective Tissue Proper & Specialized Varieties: Composed of cells (fibroblasts, macrophages, mast cells) and extracellular matrix (collagen, elastin, proteoglycans); Loose areolar, Adipose (white and brown), Dense regular (tendons, ligaments); Specialized: Cartilage (hyaline, elastic, fibrocartilage), Bone (osseous), and Blood.",
    "Muscle Tissue Types: Skeletal muscle (striated, multinucleated, voluntary, somatic motor control), Cardiac muscle (striated, single central nucleus, involuntary, intercalated discs with gap junctions, autorhythmic pacemaker), and Smooth muscle (non-striated, spindle-shaped, single nucleus, involuntary, autonomic control in blood vessels and viscera).",
    "Nervous Tissue Anatomy: Neurons (excitable signaling cells: soma cell body, dendrites, axon hillock, myelin sheath, synaptic terminals) and Neuroglia / Glial cells: Astrocytes (blood-brain barrier, potassium buffering), Oligodendrocytes (CNS myelination), Schwann cells (PNS myelination), and Microglia (resident phagocytes).",
    "University Examination Strategy: Draw a high-magnification diagram of the four primary tissue classes with histological features, explain the working mechanism of the Na+/K+ ATPase pump, and contrast skeletal vs cardiac muscle."
], [
    "Sodium-Potassium ATPase Stoichiometry: Pumps 3 Na+ out of cell and 2 K+ into cell per ATP hydrolyzed.",
    "Resting Membrane Potential: Approximately -70 mV in neurons and -90 mV in cardiac ventricular myocytes.",
    "Simple Squamous Site: Lines capillary walls and alveolar air sacs for minimal diffusion resistance.",
    "Dense Regular Connective Tissue: Parallel collagen bundles in tendons linking skeletal muscle to bone.",
    "Hyaline Cartilage Distribution: Articular joint surfaces, costal cartilage, tracheal rings, and embryonic skeleton.",
    "Intercalated Discs Component: Desmosomes for mechanical linkage plus gap junctions for electrical syncytium.",
    "Schwann Cell Function: Synthesizes lipid-rich myelin sheath surrounding peripheral nervous system axons.",
    "Oligodendrocyte Function: Myelinates multiple central nervous system axons in brain and spinal cord.",
    "Fick's Diffusion Law: Rate of diffusion is proportional to surface area and concentration gradient over membrane thickness.",
    "Exam Scoring Tip: Skeletal muscle fibers are true anatomical syncytia formed by embryonic fusion of hundreds of individual myoblast cells."
])

add("Human Anatomy & Physiology", 2, "Skeletal System", [
    "Functions of the Skeletal Framework: Structural support, mechanical protection of vital organs (cranium, ribcage), dynamic lever system for locomotion, mineral homeostasis (calcium and phosphate reservoir), and hematopoiesis (blood cell generation in red bone marrow).",
    "Gross Bone Morphology & Classification: Long bones (femur, humerus; diaphysis tubular shaft, epiphysis expanded ends, metaphysis, epiphyseal growth plate), Short bones (carpals, tarsals), Flat bones (skull, sternum), Irregular bones (vertebrae), and Sesamoid bones (patella, embedded in quadriceps tendon).",
    "Microscopic Bone Anatomy (Haversian System / Osteon): Compact cortical bone structured into concentric cylindrical osteons; Central Haversian canal containing neurovascular bundle; Concentric lamellae; Lacunae housing osteocytes; Interconnecting canaliculi for nutrient diffusion; Volkmann's perforating transverse canals.",
    "Cellular Population of Bone: Osteoprogenitor cells (mesenchymal stem cells), Osteoblasts (bone-forming cells synthesizing organic osteoid matrix and alkaline phosphatase), Osteocytes (mature mechanosensory cells maintaining matrix), and Osteoclasts (multinucleated giant cells derived from monocyte lineage that resorb bone via acid and cathepsin K).",
    "Endochondral vs Intramembranous Ossification: Intramembranous ossification (direct mineralization of embryonic mesenchymal membrane; forms flat bones of cranial vault, clavicle); Endochondral ossification (hyaline cartilage model replaced by bone; forms long bones via primary diaphyseal and secondary epiphyseal ossification centers).",
    "Axial Skeleton Anatomy: 80 bones; Cranial and facial skull bones, vertebral column (7 cervical, 12 thoracic, 5 lumbar, 1 sacrum, 1 coccyx), sternum, and 12 pairs of ribs (true ribs 1-7, false ribs 8-10, floating ribs 11-12).",
    "Appendicular Skeleton Anatomy: 126 bones; Pectoral girdle (clavicle and scapula) and upper limbs (humerus, radius, ulna, carpals, metacarpals, phalanges); Pelvic girdle (os coxae: ilium, ischium, pubis) and lower limbs (femur, patella, tibia, fibula, tarsals, metatarsals, phalanges).",
    "Joint Classifications (Arthrology): Fibrous joints (synarthroses, immovable: cranial sutures, syndesmoses, gomphoses), Cartilaginous joints (amphiarthroses, slightly movable: synchondroses e.g. epiphyseal plate, symphyses e.g. pubic symphysis, intervertebral discs), and Synovial joints (diarthroses, freely movable).",
    "Synovial Joint Architecture: Articular hyaline cartilage, joint cavity filled with viscous synovial fluid (hyaluronic acid lubricant), fibrous articular capsule lined by inner synovial membrane, and reinforcing intracapsular/extracapsular ligaments; Types: Ball-and-socket, Hinge, Pivot, Condyloid, Saddle, and Gliding plane joints.",
    "University Examination Strategy: Draw a cross-section of compact bone detailing the Haversian osteon system, describe endochondral ossification stages from embryonic cartilage to adulthood, and classify synovial joints with anatomical examples."
], [
    "Haversian System Component: Central canal surrounded by concentric lamellae, lacunae, and radiating canaliculi.",
    "Osteoblast Secretion: Type I collagen fibers and alkaline phosphatase for calcium hydroxyapatite deposition.",
    "Osteoclast Resorption: Secretes hydrochloric acid and cathepsin K to dissolve mineral and protein matrix.",
    "Bone Mineral Phase: Calcium hydroxyapatite crystal formula Ca10(PO4)6(OH)2.",
    "Vertebral Formula in Human: 7 Cervical, 12 Thoracic, 5 Lumbar, 5 Sacral (fused), 4 Coccygeal (fused).",
    "True Ribs Definition: Rib pairs 1 through 7 connect directly to the sternum via costal cartilages.",
    "Synovial Joint Hallmark: Presence of a fluid-filled joint cavity enclosed by an articular synovial capsule.",
    "Ball-and-Socket Joint Examples: Glenohumeral shoulder joint and acetabulofemoral hip joint (multiaxial triaxial motion).",
    "Hinge Joint Examples: Humeroulnar elbow joint and interphalangeal finger joints (uniaxial flexion-extension).",
    "Exam Scoring Tip: Blood calcium homeostasis is regulated by Parathyroid Hormone (PTH, stimulates osteoclasts to raise calcium) and Calcitonin (inhibits osteoclasts to lower calcium)."
])

# Save partial build to file
with open('scripts/sem3_life_complete_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Added {len(data)} life science units in part 1 (all verified strictly zero dollar signs)!")
