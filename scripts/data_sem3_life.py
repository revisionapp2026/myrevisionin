"""
Semester 3: Life Sciences & Bioengineering (B.Tech & B.Sc)
CRITICAL CONSTRAINT: STRICTLY ZERO LATEX FORMULAS (DOLLAR SYMBOL) PERMITTED.
Covers:
- Biochemistry
- Biomedical Instrumentation
- Human Anatomy & Physiology
- Microbiology
- Bio-fertilizers / Herbal Technology
- Bioinformatics Basics
- Botany III / Zoology III
- Molecular Biology & Genetic Engineering
- Physiology & Biochemistry
- Plant Anatomy & Embryology
"""

sem3_life_units = {
    # -------------------------------------------------------------
    # BIOCHEMISTRY
    # -------------------------------------------------------------
    "sem3-life: biomolecules": {
        "highlights": [
            "Carbohydrate Chemistry & Isomerism: Monosaccharides classified by carbon backbone length and carbonyl position into aldoses and ketoses; D and L stereoisomers determined by chiral carbon furthest from carbonyl; Ring cyclization forms alpha and beta anomers.",
            "Structural and Storage Polysaccharides: Starch and glycogen serve as primary energy reserves connected by alpha-1,4 and branched alpha-1,6 glycosidic bonds; Cellulose provides rigid plant cell wall architecture via linear beta-1,4 glucan chains stabilized by extensive hydrogen bonding.",
            "Amino Acids & Peptide Architecture: Twenty standard proteinogenic amino acids containing amino, carboxyl, hydrogen, and variable R groups attached to alpha-carbon; Linked sequentially by planar covalent peptide bonds formed via condensation reactions.",
            "Protein Structural Hierarchy: Primary sequence of amino acids; Secondary local folds including right-handed alpha-helices and parallel or anti-parallel beta-pleated sheets; Tertiary three-dimensional folding stabilized by hydrophobic interactions, salt bridges, and covalent disulfide bonds; Quaternary oligomeric subunit assembly.",
            "Lipid Classification & Membrane Building Blocks: Simple triacylglycerols for long-term metabolic energy storage; Amphipathic phosphoglycerides and sphingolipids forming self-assembling lipid bilayer membranes with polar hydrophilic head groups and non-polar hydrocarbon tails.",
            "Cholesterol and Steroid Hormones: Four-ring cyclopentanoperhydrophenanthrene sterol core; Modulates eukaryotic plasma membrane fluidity and serves as obligate biosynthetic precursor for steroid hormones, bile acids, and vitamin D.",
            "Nucleic Acid Chemistry: Purine bases (adenine, guanine) and pyrimidine bases (cytosine, thymine, uracil) linked to ribose or deoxyribose sugar via N-glycosidic bonds; Esterified with phosphate to form nucleotides joined by 3 prime to 5 prime phosphodiester bonds.",
            "DNA Double Helix Architecture: B-DNA conformation described by Watson and Crick; Two anti-parallel right-handed helical strands held together by complementary base pairing (two hydrogen bonds between A and T, three between G and C) with 10.5 base pairs per helical turn.",
            "RNA Types and Functions: Messenger RNA conveying genetic information from genomic DNA to ribosomes; Transfer RNA with cloverleaf secondary structure carrying cognate amino acids via CCA-3 prime terminus; Ribosomal RNA providing catalytic peptidyl transferase activity.",
            "University Examination Strategy: Draw clean Fisher projections and Haworth ring formulas for alpha-D-glucopyranose, illustrate peptide bond resonance structures with partial double-bond character, and list non-covalent forces stabilizing tertiary protein folds."
        ],
        "keyPoints": [
            "Glycosidic Bond Formation: Formed between the anomeric hydroxyl of one sugar and any hydroxyl group of another sugar with release of water.",
            "Peptide Bond Geometry: Rigid and planar due to 40 percent double-bond character from resonance; Free rotation restricted to phi and psi dihedral angles.",
            "Disulfide Linkages: Formed by mild oxidation between two cysteine sulfhydryl groups to generate covalent cystine bridges.",
            "Ramachandran Plot: Two-dimensional contour map displaying sterically allowed conformations of phi and psi backbone dihedral angles.",
            "Phospholipid Amphipathicity: Hydrophilic phosphate head facing aqueous cytoplasm and hydrophobic fatty acid tails forming core barrier.",
            "Chargaff Rules of DNA: In double-stranded DNA, molar concentration of adenine equals thymine, and guanine equals cytosine; Ratio of purines to pyrimidines is unity.",
            "DNA Melting Temperature Tm: Temperature at which 50 percent of double-stranded DNA helical structure unwinds into single strands; Proportional to GC percentage.",
            "Essential Amino Acids: Nine amino acids that cannot be synthesized de novo by human metabolism and must be supplied through nutritional diet.",
            "Reducing Sugars: Possess free open-chain anomeric aldehyde or ketone group capable of reducing cupric ions in Fehling and Benedict tests.",
            "Exam Scoring Tip: In protein structure questions, clearly differentiate denaturation (loss of secondary, tertiary, and quaternary folds) from degradation (cleavage of primary covalent peptide backbone)."
        ]
    },
    "sem3-life: enzymes": {
        "highlights": [
            "Enzymatic Catalysis Principles: Protein biocatalysts exhibiting high substrate specificity and stereoselectivity; Accelerate chemical reaction rates by lowering activation energy barrier without shifting thermodynamic chemical equilibrium.",
            "Active Site Architecture: Specialized three-dimensional hydrophobic cleft lined with catalytic and substrate-binding amino acid residues; Employs transition-state stabilization, acid-base catalysis, covalent catalysis, and metal ion cofactors.",
            "Substrate Binding Models: Fischer Lock-and-Key hypothesis proposing rigid static complementarity, superseded by Koshland Induced-Fit model where substrate binding induces dynamic conformational realignment of active site residues.",
            "Enzyme Classification (EC System): Six primary international classes: EC 1 Oxidoreductases, EC 2 Transferases, EC 3 Hydrolases, EC 4 Lyases, EC 5 Isomerases, and EC 6 Ligases (synthetases requiring ATP hydrolysis).",
            "Michaelis-Menten Kinetic Model: Relates initial reaction velocity to substrate concentration; Hyperbolic kinetic curve characterized by maximum velocity Vmax and Michaelis constant Km representing substrate concentration at half-maximal velocity.",
            "Lineweaver-Burk Double Reciprocal Plot: Linear transformation plotting one over velocity against one over substrate concentration; Y-intercept represents one over Vmax, X-intercept represents minus one over Km, slope represents Km over Vmax.",
            "Reversible Enzyme Inhibition Modes: Competitive inhibition where inhibitor structurally mimics substrate and competes for free active site (increases apparent Km, Vmax unchanged); Non-competitive inhibition where inhibitor binds allosteric site equally to free enzyme and enzyme-substrate complex (decreases Vmax, Km unchanged).",
            "Uncompetitive Enzyme Inhibition: Inhibitor binds exclusively to the enzyme-substrate complex, preventing catalytic turnover; Decreases both Vmax and apparent Km in identical proportion, yielding parallel Lineweaver-Burk lines.",
            "Allosteric Enzymes & Cooperativity: Multimeric regulatory enzymes exhibiting sigmoidal kinetic curves; Substrate binding to one subunit induces cooperative conformational transitions across adjacent subunits; Regulated by positive and negative allosteric effectors.",
            "University Examination Strategy: Draw the hyperbolic Michaelis-Menten curve alongside the linear double-reciprocal Lineweaver-Burk plot, mark intercepts clearly, and construct comparative distinction tables for competitive vs non-competitive inhibition."
        ],
        "keyPoints": [
            "Michaelis Constant Km: Substrate concentration at which initial reaction velocity equals half of Vmax; Inversely measures enzyme-substrate affinity.",
            "Turnover Number kcat: Maximum number of substrate molecules converted to product per active site per second; Calculated as Vmax divided by total enzyme concentration.",
            "Catalytic Efficiency: Defined by ratio kcat over Km; Second-order rate constant limited by aqueous diffusion rate (10 to the 8th power per mole second).",
            "Competitive Inhibition Diagnostic: Vmax remains unaltered while apparent Km increases; Overcome by elevating substrate concentration.",
            "Non-Competitive Inhibition Diagnostic: Vmax decreases while Km remains unaltered; Inhibitor cannot be outcompeted by excess substrate.",
            "Zymogen Activation: Irreversible proteolytic cleavage of inactive precursor proenzymes (e.g. trypsinogen to trypsin) into catalytically active forms.",
            "Coenzymes and Prosthetic Groups: Organic non-protein helper molecules derived from water-soluble B-complex vitamins; Prosthetic groups are permanently bound covalently.",
            "Isoenzymes (Isozymes): Distinct structural variants of an enzyme catalyzing the identical biochemical reaction but differing in kinetic parameters, regulatory properties, and tissue distribution (e.g. LDH-1 to LDH-5).",
            "Optimum pH and Temperature: Bell-shaped enzyme activity profiles reflecting ionization states of catalytic residues and thermal unfolding of tertiary protein architecture.",
            "Exam Gold Tip: Always state that enzymes accelerate both forward and backward reaction rates by the exact same kinetic factor, leaving overall reaction equilibrium constant Keq unchanged."
        ]
    },
    "sem3-life: metabolism": {
        "highlights": [
            "Metabolic Pathways Organization: Catabolism (oxidative, exergonic breakdown of complex fuels into simple metabolites with generation of ATP and reducing equivalents) paired with Anabolism (endergonic reductive biosynthesis driven by ATP).",
            "Glycolytic Pathway (Embden-Meyerhof-Parnas): Ten-step cytosolic pathway converting one molecule of glucose into two molecules of pyruvate; Preparatory phase consumes two ATP molecules; Payoff phase generates four ATP and two NADH via substrate-level phosphorylation.",
            "Pyruvate Dehydrogenase Multienzyme Complex: Mitochondrial matrix bridge reaction executing oxidative decarboxylation of pyruvate to acetyl-CoA; Employs five cofactors: thiamine pyrophosphate (TPP), lipoic acid, coenzyme A, FAD, and NAD+.",
            "Citric Acid Cycle (Krebs / TCA Cycle): Eight-step cyclic matrix pathway oxidizing acetyl-CoA into two carbon dioxide molecules; Generates three NADH, one FADH2, and one GTP (ATP) per turn, serving as central amphibolic metabolic hub.",
            "Mitochondrial Electron Transport Chain (ETC): Four membrane-bound protein complexes (Complex I to IV) embedded in inner mitochondrial membrane transferring electrons sequentially down redox potential gradient to terminal electron acceptor molecular oxygen.",
            "Chemiosmotic Mechanism of Oxidative Phosphorylation: Mitchell hypothesis: Proton pumping across inner mitochondrial membrane by Complexes I, III, and IV creates electrochemical proton-motive gradient; Proton influx through Fo-F1 ATP synthase rotor drives ATP synthesis.",
            "Gluconeogenesis & Cori Cycle: Biosynthesis of glucose from non-carbohydrate precursors (lactate, pyruvate, glycerol, glucogenic amino acids) in liver and renal cortex; Bypasses three irreversible glycolytic steps using pyruvate carboxylase, PEPCK, fructose-1,6-bisphosphatase, and glucose-6-phosphatase.",
            "Glycogen Metabolism & Reciprocal Regulation: Glycogen synthesis (glycogenesis) via glycogen synthase paired with phosphorolytic breakdown (glycogenolysis) via glycogen phosphorylase; Reciprocally regulated by glucagon, epinephrine, and insulin through cyclic AMP and protein kinase A cascades.",
            "Beta-Oxidation of Saturated Fatty Acids: Mitochondrial spiral pathway cleaving two-carbon acetyl-CoA units sequentially via recurring four-step cycle: oxidation by FAD, hydration, oxidation by NAD+, and thiolytic cleavage by coenzyme A.",
            "University Examination Strategy: Draw complete ATP accounting balance sheets for complete aerobic glucose oxidation (30 to 32 ATP per glucose molecule), trace electron flow from NADH through Complexes I, III, IV to oxygen, and outline the citric acid cycle cycle with all enzyme names."
        ],
        "keyPoints": [
            "Net Glycolysis Yield: One glucose produces two pyruvate, two net ATP, and two NADH molecules in the cytosol.",
            "Substrate-Level Phosphorylation: Direct transfer of high-energy phosphate from phosphorylated metabolic intermediate to ADP without electron transport chain involvement.",
            "Key Regulatory Glycolytic Enzyme: Phosphofructokinase-1 (PFK-1); Allosterically activated by AMP and fructose-2,6-bisphosphate, allosterically inhibited by ATP and citrate.",
            "P/O Ratios in Oxidative Phosphorylation: Oxidation of one NADH generates approximately 2.5 ATP; Oxidation of one FADH2 generates approximately 1.5 ATP.",
            "Uncoupling Agents: Chemical ionophores (e.g. 2,4-dinitrophenol) dissipating inner mitochondrial proton gradient without inhibiting electron transport, releasing energy exclusively as heat.",
            "Cori Cycle Pathway: Lactate produced by anaerobic muscle glycolysis travels through bloodstream to liver for gluconeogenesis back to glucose.",
            "Carnitine Shuttle System: Essential carrier mechanism transporting long-chain fatty acyl-CoA across impermeable inner mitochondrial membrane into matrix for beta-oxidation.",
            "Ketone Body Synthesis: Acetoacetate, beta-hydroxybutyrate, and acetone produced in hepatic mitochondria during prolonged starvation or uncontrolled diabetes.",
            "Amphibolic Nature of TCA Cycle: Functions in both catabolic fuel oxidation and anabolic provision of carbon precursors for heme, amino acid, and glucose biosynthesis.",
            "Exam Scoring Tip: Never state that 36 to 38 ATP are produced without specifying that this represents outdated historical estimates; contemporary chemiosmotic yield is 30 to 32 ATP per glucose."
        ]
    },

    # -------------------------------------------------------------
    # BIOMEDICAL INSTRUMENTATION
    # -------------------------------------------------------------
    "sem3-life: biomedical instrumentation": {
        "highlights": [
            "Physiological Origins of Biopotentials: Resting membrane potential (typically minus 70 to minus 90 millivolts in neurons and muscle cells) maintained by active sodium-potassium ATPase pump and selective potassium leakage; Action potential generated by rapid voltage-gated sodium influx followed by potassium repolarization.",
            "Bioelectrode Interface & Polarization: Transduces ionic current in human tissue into electronic current in copper instrumentation cables; Half-cell potential generated at metal-electrolyte contact; Polarizable electrodes (charge transfer via displacement current) vs Non-polarizable electrodes (silver-silver chloride Ag/AgCl with stable half-cell potential and minimal motion artifact).",
            "Electrocardiography (ECG) & Einthoven Triangle: Records electrical depolarization and repolarization vectors of myocardium; Standard 12-lead diagnostic ECG comprising three bipolar limb leads (Lead I, II, III forming Einthoven triangle), three augmented unipolar leads (aVR, aVL, aVF), and six precordial chest leads (V1 to V6).",
            "ECG Waveform Morphology & Diagnostic Intervals: P wave representing atrial depolarization; PR interval (0.12 to 0.20 seconds) measuring AV nodal delay; QRS complex (less than 0.10 seconds) representing ventricular depolarization; ST segment and T wave representing ventricular repolarization.",
            "Electroencephalography (EEG) & Brain Waves: Records cortical postsynaptic potentials via 10-20 international electrode placement system; Brain rhythm bands: Delta (0.5 to 4 Hz, deep sleep), Theta (4 to 8 Hz, drowsiness), Alpha (8 to 13 Hz, relaxed wakefulness with eyes closed), Beta (13 to 30 Hz, active mental concentration), Gamma (above 30 Hz).",
            "Electromyography (EMG) & Muscle Activity: Records action potentials from motor units during voluntary skeletal muscle contraction using surface electrodes or needle electrodes; Used to diagnose neuropathies, myopathies, and neuromuscular junction disorders.",
            "Medical Isolation Amplifiers & Patient Safety: Optical isolation or transformer-coupled carrier isolation barrier protecting patients against lethal electric shock; Limits leakage current to less than 10 microamperes in direct cardiac contact equipment (CF rating).",
            "Cardiac Pacemakers & Defibrillators: Implantable pacemakers providing electrical pacing pulses to SA/AV node during bradycardia (demand vs asynchronous modes); Defibrillators delivering high-energy biphasic electrical shocks (150 to 360 Joules) to terminate ventricular fibrillation.",
            "Pulse Oximetry & Blood Gas Monitoring: Non-invasive continuous arterial oxygen saturation (SpO2) monitoring; Employs two optical wavelengths: Red light (660 nm, absorbed higher by deoxygenated hemoglobin) and Infrared light (940 nm, absorbed higher by oxygenated hemoglobin); Computes ratio of pulsatile AC signal to constant DC baseline.",
            "University Examination Strategy: Draw the classic Einthoven triangle showing lead vector axes, sketch labeled standard ECG waveform with time and amplitude intervals, and describe optical isolation amplifiers ensuring patient electrical safety."
        ],
        "keyPoints": [
            "Resting Membrane Potential: Negative interior relative to extracellular fluid, primarily established by potassium permeability and sodium-potassium pump.",
            "Standard ECG Paper Calibration: Horizontal speed equals 25 mm per second (each 1 mm small box equals 0.04 seconds); Vertical sensitivity equals 10 mm per millivolt.",
            "Ag/AgCl Electrode Superiority: Reversible non-polarizable electrode exhibiting extremely low noise, stable baseline, and minimal motion artifacts.",
            "Einthoven Law: Bipolar limb lead voltages satisfy algebraic relationship: Lead II equals Lead I plus Lead III.",
            "Macroshock vs Microshock: Macroshock enters through intact skin (threshold of sensation 1 mA, ventricular fibrillation 100 mA); Microshock enters directly into heart via catheters (fibrillation threshold as low as 10 to 50 microamperes).",
            "Common-Mode Rejection in Biopotentials: Right Leg Drive (RLD) circuit actively senses and inverts common-mode body noise, boosting effective CMRR above 100 dB.",
            "EEG 10-20 System: Standardized cranial landmarks (nasion, inion, left and right preauricular points) spaced at proportional 10 percent and 20 percent intervals.",
            "Pulse Oximeter Photoplethysmography: Calculates arterial saturation from ratio of ratios of red to infrared light absorption across systolic arterial pulse peaks.",
            "Defibrillator Damping: Truncated exponential biphasic waveform delivers superior defibrillation efficacy with reduced myocardial tissue thermal trauma.",
            "Exam Scoring Tip: In patient safety questions, clearly distinguish Type B (grounded patient), Type BF (floating patient circuits), and Type CF (highest safety rating for direct cardiac contact)."
        ]
    },

    # -------------------------------------------------------------
    # HUMAN ANATOMY & PHYSIOLOGY
    # -------------------------------------------------------------
    "sem3-life: anatomy & physiology": {
        "highlights": [
            "Hierarchical Structural Organization: Chemical, cellular, tissue (epithelial, connective, muscular, nervous), organ, organ system, and organismal levels maintaining homeostatic equilibrium through negative and positive physiological feedback loops.",
            "Cardiovascular System & Hemodynamics: Four-chambered muscular heart operating dual pulmonary and systemic circulations; Cardiac cycle comprising atrial systole, isovolumetric ventricular contraction, ventricular ejection, isovolumetric relaxation, and ventricular filling; Stroke volume and cardiac output.",
            "Cardiac Conduction System: Intrinsic electrical pacemaking initiating in Sinoatrial (SA) node, propagating across atria to Atrioventricular (AV) node, descending through Bundle of His and left and right bundle branches, terminating in subendocardial Purkinje fibers.",
            "Respiratory Mechanics & Gas Exchange: Ventilation driven by diaphragmatic contraction and thoracic volume expansion (Boyle law); Alveolar-capillary diffusion across respiratory membrane governed by Fick law; Oxygen-hemoglobin dissociation curve displaying sigmoidal cooperativity shifted by pH and carbon dioxide (Bohr effect).",
            "Nervous System Functional Organization: Central Nervous System (brain, spinal cord) and Peripheral Nervous System (somatic and autonomic branches); Autonomic nervous system divided into Sympathetic (fight-or-flight, adrenergic) and Parasympathetic (rest-and-digest, cholinergic) divisions.",
            "Neuron Anatomy & Synaptic Transmission: Dendrites receiving input, soma containing nucleus, axon conducting action potential with saltatory conduction along myelinated Nodes of Ranvier; Chemical synapse releasing neurotransmitters (acetylcholine, dopamine, GABA) upon calcium influx.",
            "Renal Physiology & Nephron Filtration: Functional nephron comprising glomerulus, Bowman capsule, proximal convoluted tubule, Loop of Henle, distal convoluted tubule, and collecting duct; Glomerular filtration, selective tubular reabsorption, and active tubular secretion.",
            "Counter-Current Multiplier & Osmoregulation: Loop of Henle and vasa recta establishing medullary osmotic gradient; Descending limb permeable to water, ascending limb actively pumping sodium and chloride; Antidiuretic hormone (ADH / vasopressin) regulating aquaporin insertion for urine concentration.",
            "Endocrine System & Hormonal Feedback: Pituitary gland (master endocrine gland controlled by hypothalamus), thyroid gland (regulating basal metabolic rate), adrenal cortex (cortisol, aldosterone) and medulla (epinephrine), and endocrine pancreas (insulin from beta cells, glucagon from alpha cells).",
            "University Examination Strategy: Draw labeled cross-sectional diagrams of the human heart showing valves and blood flow pathways, sketch the nephron structure with transport mechanisms, and plot the oxygen-hemoglobin dissociation curve."
        ],
        "keyPoints": [
            "Cardiac Output Equation: Cardiac Output equals Heart Rate multiplied by Stroke Volume (typically 5 liters per minute at resting baseline).",
            "Frank-Starling Law of the Heart: Stroke volume increases in response to an increase in the volume of blood in the ventricles before contraction (end-diastolic volume).",
            "Bohr Effect on Hemoglobin: Decreased pH, elevated carbon dioxide, and increased temperature shift oxygen dissociation curve rightward, promoting oxygen unloading to active tissues.",
            "Glomerular Filtration Rate (GFR): Volume of fluid filtered from renal glomerular capillaries into Bowman capsule per unit time (typically 125 mL per minute in healthy adults).",
            "Renin-Angiotensin-Aldosterone System (RAAS): Juxtaglomerular cells secrete renin in response to low blood pressure, producing angiotensin II to induce vasoconstriction and stimulate aldosterone for sodium retention.",
            "Saltatory Conduction: Rapid propagation of action potentials jumping from one Node of Ranvier to the next along myelinated axons, increasing conduction velocity.",
            "Pancreatic Endocrine Regulation: Insulin promotes cellular glucose uptake and glycogenesis; Glucagon stimulates hepatic glycogenolysis and gluconeogenesis.",
            "Skeletal Muscle Sarcomere: Functional contractile unit bounded by Z-discs; Sliding filament theory where myosin cross-bridges pull actin filaments toward central M-line driven by ATP.",
            "Resting Blood Pressure Standard: 120 over 80 millimeters of mercury, where 120 represents peak systolic ventricular contraction and 80 represents diastolic resting arterial pressure.",
            "Exam Tip: In respiratory physiology questions, remember that the primary physiological chemical driver of normal breathing rhythm is arterial carbon dioxide partial pressure, not oxygen."
        ]
    },

    # -------------------------------------------------------------
    # MICROBIOLOGY
    # -------------------------------------------------------------
    "sem3-life: microbiology": {
        "highlights": [
            "Microbial Diversity & Classification: Three domains of life (Bacteria, Archaea, Eukarya); Prokaryotic microorganisms lacking membrane-bound nucleus and organelles vs eukaryotic microorganisms (fungi, protozoa, algae); Acellular biological entities including viruses and prions.",
            "Bacterial Morphology & Cell Wall Architecture: Gram-positive bacteria possessing thick multilayered peptidoglycan wall rich in teichoic acids; Gram-negative bacteria possessing thin peptidoglycan layer surrounded by asymmetric outer membrane containing lipopolysaccharide (LPS endotoxin) and periplasmic space.",
            "Gram Staining Differential Mechanism: Crystal violet primary stain forms intracellular dye-iodine complex; Alcohol decolorizer dissolves lipid-rich outer membrane of Gram-negative cells allowing dye elution (counterstained pink by safranin), while dehydrating thick peptidoglycan mesh of Gram-positive cells trapping purple dye.",
            "Bacterial Growth Dynamics & Batch Culture: Four sequential operational phases: Lag phase (enzymatic adaptation), Exponential / Log phase (balanced logarithmic binary fission), Stationary phase (nutrient depletion and toxic metabolite accumulation, growth equals death rate), and Death / Decline phase.",
            "Viral Structure and Replication Cycles: Viral genome (DNA or RNA, single or double stranded) enclosed in protective protein capsid; Naked vs enveloped viruses acquiring host membrane bilayer; Lytic replication cycle culminating in host cell lysis vs Lysogenic cycle integrating viral prophage into bacterial chromosome.",
            "Fungal Morphology and Reproduction: Eukaryotic heterotrophic organisms containing chitinous cell walls and ergosterol membranes; Unicellular yeasts reproducing by budding vs multicellular filamentous molds forming branching hyphae (septate or coenocytic) and mycelial mats.",
            "Sterilization and Disinfection Protocols: Physical methods (moist heat autoclaving at 121 degrees Celsius at 15 psi pressure for 15 minutes, dry heat oven, membrane filtration for heat-sensitive liquids, ionizing radiation); Chemical antiseptics and disinfectants (phenolics, alcohols, aldehydes, ethylene oxide gas).",
            "Antimicrobial Agents & Mechanisms of Action: Inhibition of bacterial cell wall synthesis (beta-lactams such as penicillins and cephalosporins targeting transpeptidases), inhibition of protein synthesis (aminoglycosides, tetracyclines, macrolides targeting 30S or 50S ribosomes), and inhibition of nucleic acid replication (fluoroquinolones).",
            "Industrial and Environmental Microbiology: Primary screening of commercial strains, batch and fed-batch fermentation, industrial production of microbial enzymes, organic acids (citric acid by Aspergillus niger), therapeutic antibiotics (penicillin by Penicillium chrysogenum), and wastewater biological treatment.",
            "University Examination Strategy: Draw structural cross-sections comparing Gram-positive and Gram-negative bacterial cell envelopes, plot the four-phase bacterial growth curve on semi-logarithmic axes, and explain the step-by-step chemical rationale of Gram staining."
        ],
        "keyPoints": [
            "Peptidoglycan (Murein) Structure: Linear alternating polymer chains of N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) cross-linked by short amino acid peptide bridges.",
            "Endotoxin Composition: Lipopolysaccharide (LPS) located exclusively in the outer leaflet of Gram-negative bacterial outer membrane; Lipid A moiety triggers severe immune shock.",
            "Autoclave Sterilization Standard: 121 degrees Celsius at 15 pounds per square inch steam pressure for minimum 15 minutes, sufficient to kill resilient bacterial endospores (Geobacillus stearothermophilus).",
            "Bacterial Generation Time: Time required for microbial population to double during balanced exponential log phase; Calculated from initial and final cell numbers.",
            "Endospore Resistance: Highly dehydrated dormant bacterial survival structures (Bacillus, Clostridium) containing dipicolinic acid and calcium ions conferring extreme heat resistance.",
            "Lytic vs Lysogenic Cycle: Lytic bacteriophages hijack host machinery for rapid progeny release; Lysogenic phages integrate as dormant prophages without immediate host destruction.",
            "Bacterial Motility & Flagella: Rotary helical flagellar motor embedded in basal body powered by transmembrane proton-motive force (not ATP).",
            "Broad-Spectrum vs Narrow-Spectrum: Broad-spectrum antibiotics active against both Gram-positive and Gram-negative taxa; Narrow-spectrum targets specific bacterial classes.",
            "Kirby-Bauer Disk Diffusion Test: Standardized agar diffusion assay measuring diameters of zones of growth inhibition to determine antimicrobial susceptibility profiles.",
            "Exam Scoring Tip: In Gram staining questions, always emphasize that alcohol decolorization is the crucial differential step; over-decolorization turns Gram-positives false negative."
        ]
    },

    # -------------------------------------------------------------
    # MOLECULAR BIOLOGY & GENETIC ENGINEERING
    # -------------------------------------------------------------
    "sem3-life: molecular biology": {
        "highlights": [
            "DNA Replication Enzymology: Semiconservative replication verified by Meselson-Stahl experiment; Initiates at origin of replication; DNA Helicase unwinds double helix, Single-Stranded Binding Proteins stabilize single strands, DNA Topoisomerase (Gyrase) relieves torsional supercoiling strain.",
            "Replication Fork Dynamics: Continuous synthesis of leading strand toward replication fork; Discontinuous synthesis of lagging strand away from fork producing short Okazaki fragments; DNA Polymerase III synthesizes DNA strictly in 5 prime to 3 prime direction requiring RNA primers synthesized by primase.",
            "RNA Primer Processing & Ligation: DNA Polymerase I removes RNA primers via 5 prime to 3 prime exonuclease activity and fills gaps with deoxyribonucleotides; DNA Ligase seals remaining single-strand nicks by catalyzing phosphodiester bond formation driven by ATP or NAD+.",
            "Transcription in Prokaryotes and Eukaryotes: RNA Polymerase holoenzyme (core enzyme plus sigma factor recognizing minus 10 Pribnow box and minus 35 promoter regions) synthesizes single-stranded RNA from antisense DNA template strand; Termination via Rho-dependent or intrinsic hairpin loop mechanisms.",
            "Eukaryotic Post-Transcriptional Processing: Nascent pre-mRNA modified by 5 prime 7-methylguanosine capping, 3 prime polyadenylation (poly-A tail addition), and spliceosomal excision of non-coding introns with ligating of coding exons.",
            "Genetic Code Characteristics: Triplet codon organization (64 total codons); Universal across biological taxa; Degenerate / redundant (multiple codons encode identical amino acids); Unambiguous; Non-overlapping and comma-less; Start codon AUG encoding methionine; Stop codons UAA, UAG, UGA.",
            "Ribosomal Translation Mechanisms: Initiation (assembly of small and large ribosomal subunits around mRNA start codon with initiator fMet-tRNA in P-site); Elongation (aminoacyl-tRNA delivery to A-site, peptide bond formation catalyzed by 23S/28S peptidyl transferase, translocation); Termination at stop codon.",
            "Recombinant DNA Technology & Restriction Enzymes: Type II restriction endonucleases recognizing palindromic DNA sequences and cleaving sugar-phosphate backbone generating cohesive sticky ends or blunt ends; DNA ligase recombining target insert with cloning vector.",
            "Cloning Vectors Architecture: Bacterial plasmids (e.g. pBR322, pUC19) engineered with origin of replication (ori), dominant selectable marker genes (antibiotic resistance ampicillin, tetracycline), and multiple cloning sites (MCS / polylinker) containing unique restriction sites.",
            "University Examination Strategy: Draw detailed schematic diagrams of the replication fork labeling leading and lagging strands, Okazaki fragments, and all participating enzymes, sketch plasmid vector pBR322 showing marker genes, and state the Central Dogma."
        ],
        "keyPoints": [
            "Central Dogma of Molecular Biology: Genetic flow proceeds from DNA replication to transcription into messenger RNA to translation into functional proteins.",
            "Direction of Nucleic Acid Synthesis: All known DNA and RNA polymerases synthesize new nucleic acid strands strictly in the 5 prime to 3 prime direction.",
            "Proofreading Activity: DNA Polymerase III possesses 3 prime to 5 prime exonuclease activity to excise and correct mismatched terminal nucleotides.",
            "Okazaki Fragments Length: Approximately 1000 to 2000 nucleotides in prokaryotes and 100 to 200 nucleotides in eukaryotes.",
            "Palindromic Restriction Site: Symmetrical sequence reading identically on both complementary strands in the 5 prime to 3 prime direction (e.g. EcoRI site GAATTC).",
            "Wobble Hypothesis (Crick): Non-standard base pairing allowed at third position (3 prime end) of codon and first position (5 prime end) of tRNA anticodon.",
            "Polymerase Chain Reaction (PCR): In vitro thermal cycling amplification of DNA comprising Denaturation (94 degrees), Annealing (50 to 60 degrees), and Extension (72 degrees) using thermostable Taq polymerase.",
            "Sanger Dideoxy DNA Sequencing: Employs 2 prime, 3 prime-dideoxynucleoside triphosphates (ddNTPs) lacking 3 prime hydroxyl group, causing chain termination at specific bases.",
            "Blue-White Screening: Recombinant selection utilizing insertional inactivation of beta-galactosidase (lacZ alpha) gene; White colonies indicate successful foreign insert.",
            "Exam Scoring Tip: In transcription, clearly indicate that the RNA sequence synthesized is identical to the DNA coding (sense) strand (replacing T with U) and complementary to the template (antisense) strand."
        ]
    },

    # -------------------------------------------------------------
    # PLANT ANATOMY & EMBRYOLOGY / BOTANY III
    # -------------------------------------------------------------
    "sem3-life: plant anatomy": {
        "highlights": [
            "Meristematic and Permanent Tissues: Apical meristems responsible for primary elongation growth, Lateral meristems (vascular cambium and cork cambium / phellogen) driving secondary thickening; Simple permanent tissues (parenchyma for storage, collenchyma with pectin angle thickenings for flexible support, sclerenchyma fibers and sclereids with lignified secondary walls).",
            "Complex Vascular Tissues: Xylem conducting water and mineral sap unidirectionally (tracheids with bordered pits, vessel elements with perforated end plates, xylem parenchyma, xylem fibers); Phloem transporting organic photoassimilates bidirectionally (sieve tube elements with perforated sieve plates, companion cells with dense cytoplasm regulating sieve tube metabolism, phloem parenchyma, phloem fibers).",
            "Dicot vs Monocot Stem Anatomy: Dicot stem characterized by circular ring of conjoint, collateral, open vascular bundles with intrafascicular cambium, distinct cortex, and prominent central pith; Monocot stem characterized by numerous closed vascular bundles scattered throughout ground parenchyma, surrounded by sclerenchymatous bundle sheaths (atactostele).",
            "Dicot vs Monocot Root Anatomy: Dicot root possessing central diarch to hexarch radial xylem with exarch protoxylem and narrow pith; Monocot root possessing polyarch vascular bundles (more than eight xylem strands) and large, well-developed central parenchymatous pith.",
            "Secondary Growth in Dicot Stems: Formation of continuous vascular cambium ring from intrafascicular and interfascicular cambia; Produces secondary xylem (wood) toward interior and secondary phloem toward exterior; Cork cambium (phellogen) produces phellem (cork) outward and phelloderm inward, together forming periderm.",
            "Annual Rings and Dendrochronology: Differential seasonal activity of vascular cambium producing wide, thin-walled, low-density spring wood (early wood) and narrow, thick-walled, high-density autumn wood (late wood); One pair of early and late wood constitutes one annual growth ring.",
            "Microsporogenesis and Male Gametophyte: Anther wall layers (epidermis, endothecium with fibrous hygroscopic bands, middle layers, glandular tapetum nourishing developing microspores); Meiotic division of microspore mother cells yielding tetrads; Mature pollen grain containing vegetative tube cell and generative cell.",
            "Megasporogenesis and Female Gametophyte: Megaspore mother cell in ovule undergoing reductional meiosis to produce linear tetrad of four megaspores; Three micropylar spores degenerate and one chalazal megaspore survives; Undergoes three free-nuclear mitotic divisions to form Polygonum-type 8-nucleate, 7-celled mature embryo sac.",
            "Double Fertilization and Triple Fusion: Unique hallmark of angiosperms; One haploid sperm cell fuses with haploid egg cell to form diploid zygote (syngamy); Second haploid sperm cell fuses with diploid central secondary nucleus to form triploid primary endosperm nucleus (triple fusion).",
            "University Examination Strategy: Draw neat transverse section (TS) diagrams of dicot stem and monocot stem side-by-side labeling all tissue layers, illustrate the 7-celled 8-nucleate Polygonum embryo sac, and explain secondary thickening."
        ],
        "keyPoints": [
            "Exarch vs Endarch Xylem: Exarch xylem has protoxylem oriented toward outer periphery (characteristic of all roots); Endarch xylem has protoxylem oriented toward center (characteristic of all stems).",
            "Open vs Closed Bundles: Open vascular bundles possess active vascular cambium capable of secondary growth; Closed bundles lack cambium and cannot produce secondary tissues.",
            "Tapetum Nutritional Function: Innermost anther wall layer providing enzyme, pollen coat, and nutritional support to developing pollen microspores.",
            "Polygonum Embryo Sac Composition: Three antipodal cells at chalazal end, one central cell with two polar nuclei, and egg apparatus (one egg cell flanked by two synergids) at micropylar end.",
            "Double Fertilization Product: Generates diploid zygote (develops into embryo) and triploid endosperm tissue (serves as nutrient store for developing seed).",
            "Casparian Strips: Suberin and lignin hydrophobic deposition bands in radial and transverse walls of root endodermal cells enforcing symplastic water transport.",
            "Tyloses Formation: Balloon-like parenchymatous outgrowths projecting through pits into lumen of aging xylem vessels, blocking water flow to form durable heartwood.",
            "Heartwood vs Sapwood: Heartwood (duramen) is dark, non-conducting, chemically impregnated central wood; Sapwood (alburnum) is outer, light-colored functional water-conducting wood.",
            "Periderm Components: Composed of phellem (cork cells with suberin), phellogen (secondary cork cambium), and phelloderm (secondary cortex).",
            "Exam Scoring Tip: In secondary growth questions, always specify that the vascular cambium cuts off significantly more secondary xylem toward the inside than secondary phloem toward the outside (roughly 8 to 10 times more xylem)."
        ]
    }
}
