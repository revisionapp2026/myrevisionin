import json
import os

with open("scripts/build_bsc_sem2_life.py", "r", encoding="utf-8") as f:
    content = f.read()

part3 = '''
# =========================================================================
# 5. MICROBIAL PHYSIOLOGY & GENETICS (B.Sc Biotech / Microbiology Sem 2)
# =========================================================================

add_unit(
    "bsc-micro-mpg: microbial growth",
    [
        "Bacterial Binary Fission and Cell Division: Asexual transverse binary fission: FtsZ ring assembly at mid-cell (divisome machinery), peptidoglycan synthesis via transpeptidases (penicillin-binding proteins PBPs) and transglycosylases, septum formation, and daughter cell separation.",
        "Phases of Microbial Batch Growth Curve: Four distinct physiological phases in closed batch culture: Lag phase (physiological adaptation, enzyme synthesis, no cell number increase), Log (exponential) phase (constant maximum specific growth rate, balanced growth), Stationary phase (nutrient depletion, toxic byproduct accumulation, cryptic growth, endospore/secondary metabolite synthesis), and Death (decline) phase (exponential loss of viability).",
        "Mathematics of Microbial Growth: Exponential kinetics: Number of cells after n generations given by N equals N0 multiplied by two to the power n; Number of generations n equals (log N minus log N0) divided by 0.301; Mean generation time (doubling time) g equals total time t divided by n; Mean growth rate constant k equals 1 divided by g.",
        "Diauxic Growth and Carbon Catabolite Repression: Biphasic growth curve observed when bacteria grow on mixture of two sugars (e.g., glucose and lactose); Glucose utilized first with higher growth rate; Lactose operon repressed via catabolite repression (low cyclic AMP levels and inactive CAP/CRP protein); Intermediate lag phase occurs while cells synthesize beta-galactosidase and lactose permease.",
        "Synchronous Growth Techniques: Methods for bringing entire bacterial population into identical cell cycle stage: Physical separation techniques (Helmstetter-Cummings membrane elution technique releasing newborn cells) and Environmental manipulation methods (temperature shifting, starvation and re-feeding cycles).",
        "Continuous Culture Systems (Chemostats and Turbidostats): Open continuous bioreactor cultures: Chemostat maintains constant chemical environment and cell density by continuous inflow of limiting nutrient at set dilution rate D; Turbidostat maintains constant biomass turbidity using photoelectric cell regulating feed pump.",
        "Temperature Adaptations of Microorganisms: Cardinal temperatures (minimum, optimum, maximum): Psychrophiles (optimum below 15 degrees Celsius, polyunsaturated membrane lipids, flexible cold-active enzymes), Mesophiles (optimum 20 to 45 degrees Celsius), Thermophiles (optimum 55 to 65 degrees Celsius), and Hyperthermophiles (optimum above 80 degrees Celsius, ether lipids, DNA gyrase, heat-stable Taq polymerase).",
        "pH and Osmotic Adaptations in Microbes: Acidophiles (growing at pH 1 to 5, e.g., Acidithiobacillus ferrooxidans pumping protons outward), Alkaliphiles (growing at pH 9 to 11, using sodium-motive force instead of proton-motive force), and Halophiles (requiring high NaCl, e.g., Halobacterium salinarum accumulating compatible solutes or potassium ions).",
        "Oxygen Requirements and Toxic Oxygen Detoxification: Classification by oxygen tolerance: Obligate aerobes, Facultative anaerobes, Microaerophiles, Aerotolerant anaerobes, and Obligate anaerobes; Enzymes detoxifying reactive oxygen species (ROS): Superoxide dismutase (SOD) converting superoxide radicals to hydrogen peroxide, Catalase converting hydrogen peroxide to water and oxygen, and Peroxidase.",
        "Direct and Indirect Measurement of Microbial Growth: Direct enumerations: Petroff-Hausser counting chamber under phase contrast microscope, viable colony forming unit (CFU) counts on agar plates; Indirect methods: Spectrophotometric optical density (OD 600 nm), dry cell weight measurement, and cellular ATP quantification via luciferin-luciferase bioluminescence."
    ],
    [
        "FtsZ Ring Function: Tubulin-like GTPase that polymerizes at the division plane to constrict dividing bacterial cells.",
        "Generation Time Formula: Doubling time g equals elapsed time t divided by number of generations n.",
        "Diauxic Growth Cause: Preferential utilization of glucose triggers catabolite repression of secondary sugar operons.",
        "Chemostat Dilution Rate: Dilution rate D equals volumetric flow rate F divided by culture volume V.",
        "Taq Polymerase Source: Thermus aquaticus, a thermophilic bacterium thriving in hot springs.",
        "Superoxide Dismutase Role: Destroys highly toxic superoxide radicals generating hydrogen peroxide and oxygen.",
        "Halobacterium Salt Adaptation: Accumulates up to 4 M intracellular potassium chloride to prevent osmotic collapse.",
        "Viable Count Limitation: Colony counting enumerates only culturable living cells capable of division.",
        "Spectrophotometer OD 600: Measures light scattering by bacterial suspension proportional to cell biomass.",
        "Exam Tip: In microbial growth viva, explain that during exponential phase cells are in balanced growth where all cellular components (RNA, DNA, protein) increase by the exact same geometric factor."
    ]
)

add_unit(
    "bsc-micro-mpg: metabolism",
    [
        "Aerobic and Anaerobic Respiratory Chains: Catabolic ATP synthesis via oxidative phosphorylation: Aerobic respiration using molecular oxygen as terminal electron acceptor yielding high ATP; Anaerobic respiration using alternative inorganic terminal electron acceptors: Nitrate reduced to nitrogen gas (denitrification by Pseudomonas), Sulfate reduced to hydrogen sulfide (Desulfovibrio), and Carbon dioxide reduced to methane (methanogens).",
        "Embden-Meyerhof-Parnas (EMP) Glycolytic Pathway: Universal ten-step pathway converting one glucose molecule into two pyruvate molecules; Preparatory phosphorylation phase consuming 2 ATP (hexokinase and phosphofructokinase-1); Energy payoff phase generating 4 ATP via substrate-level phosphorylation and 2 NADH; Net yield: 2 ATP and 2 NADH per glucose.",
        "Entner-Doudoroff (ED) Pathway in Bacteria: Alternative glycolytic route present in Gram-negative bacteria lacking phosphofructokinase (e.g., Pseudomonas, Zymomonas mobilis, Rhizobium); Key intermediate 2-keto-3-deoxy-6-phosphogluconate (KDPG) cleaved by KDPG aldolase; Net yield: 1 ATP, 1 NADH, and 1 NADPH per glucose.",
        "Pentose Phosphate Pathway (PPP / Hexose Monophosphate Shunt): Parallel glucose oxidation pathway operating simultaneously with glycolysis; Oxidative branch generating essential NADPH for reductive biosynthetic pathways (fatty acids, steroids); Non-oxidative reversible branch producing ribose-5-phosphate for nucleotide and nucleic acid synthesis and erythrose-4-phosphate for aromatic amino acids.",
        "Lactic Acid Fermentation (Homo- vs Heterolactic): Anaerobic regeneration of NAD+ from pyruvate: Homolactic fermentation (Lactobacillus acidophilus, Streptococcus lactis) utilizes EMP pathway and lactate dehydrogenase, producing lactic acid as the sole product with net 2 ATP; Heterolactic fermentation (Leuconostoc mesenteroides) utilizes phosphoketolase pathway, producing equimolar lactic acid, ethanol, and carbon dioxide with net 1 ATP.",
        "Alcoholic and Other Fermentations: Alcoholic fermentation in yeast (Saccharomyces cerevisiae) and Zymomonas: Pyruvate decarboxylase generates acetaldehyde and CO2, followed by alcohol dehydrogenase reduction to ethanol; Mixed acid fermentation in Escherichia coli producing lactate, acetate, succinate, formate, ethanol, H2, and CO2; 2,3-Butanediol fermentation in Enterobacter aerogenes detected by Voges-Proskauer reaction.",
        "Chemolithotrophic Energy Generation: Oxidation of inorganic electron donors by autotrophic bacteria: Nitrifying bacteria: Ammonia oxidizers (Nitrosomonas oxidizing ammonia to nitrite) and Nitrite oxidizers (Nitrobacter oxidizing nitrite to nitrate); Colorless sulfur bacteria (Thiobacillus) oxidizing hydrogen sulfide and thiosulfate to sulfate; Iron bacteria (Acidithiobacillus ferrooxidans) oxidizing ferrous to ferric iron.",
        "Methanogenesis and Carbon Cycle: Archaea belonging to Methanobacteriales: Strict obligate anaerobes carrying out anaerobic respiration using carbon dioxide or acetate as terminal electron acceptor, generating methane gas (CH4); Essential specialized coenzymes: Coenzyme M, methanofuran, tetrahydromethanopterin, and Coenzyme F420.",
        "Anaplerotic Reactions and Glyoxylate Cycle: Replenishing tricarboxylic acid (TCA) cycle intermediates: Phosphoenolpyruvate carboxylase and pyruvate carboxylase; Glyoxylate bypass in bacteria growing on two-carbon acetate substrates: Isocitrate lyase cleaves isocitrate to succinate and glyoxylate, and malate synthase condenses glyoxylate with acetyl-CoA to form malate, bypassing two decarboxylation steps.",
        "Bacterial Photosynthesis (Anoxygenic vs Oxygenic): Cyanobacteria perform oxygenic photosynthesis using water as electron donor with Photosystem I and II, producing oxygen; Green and purple sulfur bacteria (Chlorobium, Chromatium) perform anoxygenic photosynthesis using reduced sulfur compounds (H2S, thiosulfate) or hydrogen gas as electron donors with single photosystem containing bacteriochlorophyll, never evolving oxygen."
    ],
    [
        "EMP Net Yield: Exactly 2 ATP and 2 NADH produced per molecule of glucose oxidized to pyruvate.",
        "KDPG Marker: Unique diagnostic chemical intermediate of the Entner-Doudoroff bacterial pathway.",
        "NADPH Function: Reducing power synthesized by pentose phosphate pathway for anabolic biosynthesis.",
        "Homolactic Pathway: Converts pyruvate strictly to lactic acid without carbon dioxide gas evolution.",
        "Heterolactic Pathway: Uses phosphoketolase enzyme yielding lactic acid, ethanol, and carbon dioxide.",
        "Nitrification Stage 1: Nitrosomonas converts ammonia into toxic nitrite.",
        "Nitrification Stage 2: Nitrobacter oxidizes nitrite into plant-available nitrate.",
        "Glyoxylate Bypass Enzymes: Isocitrate lyase and malate synthase enable growth on acetate.",
        "Anoxygenic Photosynthesis: Green and purple bacteria use hydrogen sulfide instead of water, avoiding oxygen production.",
        "Exam Tip: In viva voce, distinguish aerobic respiration (oxygen is terminal acceptor), anaerobic respiration (nitrate/sulfate is terminal acceptor), and fermentation (endogenous organic molecule like pyruvate is terminal acceptor)."
    ]
)

add_unit(
    "bsc-micro-mpg: bacterial genetics",
    [
        "Architecture of the Bacterial Nucleoid: Bacterial chromosome: Single closed-circular, double-stranded DNA molecule packed into irregularly shaped nucleoid region without nuclear membrane; Negative supercoiling maintained by DNA topoisomerase I and DNA gyrase (topoisomerase II); Scaffolded by nucleoid-associated proteins (H-NS, HU, IHF).",
        "Biology and Classes of Bacterial Plasmids: Extrachromosomal, autonomously replicating circular double-stranded DNA molecules: Fertility (F) plasmids encoding sex pili and transfer genes; Resistance (R) plasmids carrying transposons with multi-drug antibiotic resistance genes; Col plasmids encoding antibacterial bacteriocins (colicins); Virulence plasmids encoding enterotoxins and hemolysins; Ti-plasmid of Agrobacterium tumefaciens transferring T-DNA into plant genomes.",
        "Replication Modes of Bacterial Plasmids: Autonomous replication initiating at oriV: Theta replication (bidirectional or unidirectional replication bubble forming theta-shaped intermediate, e.g., ColE1, F plasmid) versus Rolling circle replication (sigma replication initiated by Rep protein nicking single strand at double-strand origin DSO, e.g., pT181 in staphylococci).",
        "Molecular Mechanisms of Spontaneous Mutations: Errors during DNA replication: Tautomeric shifts of nitrogenous bases (transient shift of adenine from amino to imino form pairing with cytosine, or keto to enol form of thymine pairing with guanine, inducing transition mutations); Replication slippage in repetitive homopolymer runs causing insertion or deletion frameshifts; Spontaneous hydrolytic deamination of cytosine to uracil.",
        "Mechanisms of Induced Chemical and Physical Mutagenesis: Chemical mutagens: Base analogs (5-bromouracil incorporated in place of thymine, 2-aminopurine); Alkylating agents (ethyl methane sulfonate EMS, nitrosoguanidine adding methyl or ethyl groups); Deaminating agents (nitrous acid); Intercalating agents (ethidium bromide, acridine orange inserting between stacked base pairs inducing frameshifts); Physical mutagens: Ultraviolet (UV) radiation (wavelength 260 nm) forming cyclobutane pyrimidine dimers (thymine dimers).",
        "DNA Repair Systems in Bacteria: Reversal and excision repair: Photoreactivation (DNA photolyase enzyme splitting thymine dimers using visible blue light energy); Nucleotide excision repair (UvrABC excinuclease complex cutting damaged oligonucleotide strand); Base excision repair (DNA glycosylase removing damaged base, AP endonuclease creating nick); Mismatch repair (MutS, MutL, MutH complex recognizing unmethylated daughter strand at GATC sites).",
        "SOS Inducible Error-Prone Repair Pathway: Global emergency response to extensive DNA replication-blocking damage: RecA protein activated by single-stranded DNA acquires co-protease activity; RecA stimulates auto-cleavage of LexA repressor protein; Derepression of over 40 SOS genes, including error-prone translesion DNA polymerases (DinB / Pol IV and UmuCD / Pol V) that synthesize DNA across lesions with high error frequency.",
        "Classification of Point Mutations and Phenotypic Effects: Base pair substitutions: Transitions (purine to purine, or pyrimidine to pyrimidine) versus Transversions (purine to pyrimidine, or vice versa); Phenotypic consequences: Silent (synonymous) mutations (degeneracy of genetic code produces identical amino acid), Missense mutations (altered codon codes for different amino acid, e.g., sickle hemoglobin), Nonsense mutations (creation of premature UAA, UAG, or UGA stop codon yielding truncated non-functional polypeptide).",
        "The Ames Test for Chemical Carcinogenicity and Mutagenicity: Quantitative bacterial reverse mutation assay developed by Bruce Ames: Uses mutant Salmonella enterica serovar Typhimurium strains (histidine auxotrophs his-); Bacteria plated on minimal agar containing trace histidine in presence of liver microsomal extract (S9 fraction providing mammalian metabolic activation); Elevated frequency of his+ prototrophic revertant colonies proves mutagenic potency.",
        "Bacterial Transposable Elements (Transposons): Mobile genetic elements capable of moving between genomic loci: Insertion Sequences (IS elements: simplest transposons encoding transposase gene flanked by inverted terminal repeats ITR); Composite transposons (two flanking IS elements mobilizing intervening antibiotic resistance genes, e.g., Tn10 carrying tetracycline resistance); Replicative versus non-replicative (cut-and-paste) transposition."
    ],
    [
        "DNA Gyrase Function: Bacterial type II topoisomerase introducing negative supercoils into chromosome; inhibited by ciprofloxacin.",
        "R-Plasmid Threat: Transmissible circular DNA carrying multiple antibiotic resistance determinants across clinical pathogen strains.",
        "Rolling Circle Replication: Asymmetric replication mode initiating with a site-specific single-strand nick at DSO.",
        "Tautomeric Shift: Rare structural isomer of nitrogenous base that forms anomalous hydrogen bonding pairings.",
        "Thymine Dimer Lesion: Covalent cyclobutane linkage formed between adjacent thymine bases upon UV irradiation.",
        "Photoreactivation Repair: Light-dependent cleavage of thymine dimers catalyzed by DNA photolyase.",
        "LexA Repressor: Master transcriptional repressor holding the bacterial SOS DNA repair regulon in an off state.",
        "Nonsense Mutation: Single nucleotide substitution converting a sense codon into a premature translation stop codon.",
        "Ames Test S9 Fraction: Rat liver homogenate providing mammalian cytochrome P450 enzymes for metabolic activation.",
        "Exam Tip: In the Ames test viva, explain why trace histidine is included in the agar: it allows the his- bacteria to undergo a few rounds of cell division, which is required for mutations to become fixed into the genome."
    ]
)

add_unit(
    "bsc-micro-mpg: transformation",
    [
        "Historical Landmark of Transformation (Griffith 1928 Experiment): First demonstration of bacterial genetic transfer: Frederick Griffith experimented with Streptococcus pneumoniae; Virulent smooth (S) encapsulated strain killed mice; Avirulent rough (R) non-encapsulated strain was harmless; Heat-killed S strain was harmless; Mixture of live R strain and heat-killed S strain killed mice, and live virulent S bacteria were recovered; Demonstrated transforming principle.",
        "Avery, MacLeod, and McCarty (1944) Landmark Experiment: Biochemical identification of the transforming principle: Heat-killed smooth Streptococcus extract treated systematically with specific enzymes; Protease treatment (trypsin, chymotrypsin) did not destroy transforming activity; Ribonuclease (RNase) treatment did not destroy transforming activity; Deoxyribonuclease (DNase) completely abolished transforming activity; Proved conclusively that DNA is the genetic material.",
        "Natural Bacterial Competence and Physiological State: Competence defined as transient physiological state enabling bacteria to take up high-molecular-weight extracellular DNA from the environment; Developed during late exponential or early stationary phase in response to high cell density and nutrient limitation; Regulated by quorum sensing two-component signaling cascades (ComX, ComP, ComA in Bacillus subtilis).",
        "Molecular Mechanism of Natural Transformation in Gram-Positive Bacteria: In Streptococcus pneumoniae and Bacillus subtilis: Double-stranded extracellular donor DNA binds to surface ComEA receptor proteins; ComEC membrane channel protein complex; Cell-surface endonuclease nicks and degrades one strand; Exactly one intact single strand of DNA is translocated through membrane into cytoplasm; Translocated single strand is coated and protected by single-stranded DNA-binding proteins (SsbA).",
        "Homologous Recombination and Heteroduplex Formation: Cytoplasmic single-stranded donor DNA bound by RecA recombinase; RecA searches homologous recipient chromosome for matching sequence; Invades recipient duplex forming displacement D-loop; Donor strand replaces recipient strand by homologous branch migration; Creates heteroduplex region containing mismatch base pairs; Resolvase cuts and seals junctions; Subsequent DNA replication or mismatch repair yields recombinant daughter cells.",
        "Natural Transformation in Gram-Negative Bacteria (Haemophilus and Neisseria): Gram-negative bacteria require DNA to cross both outer membrane (secretin channel PilQ) and inner membrane (ComEC); Presence of specific DNA uptake sequence (DUS in Neisseria, USS in Haemophilus, 9 to 11 base pair consensus sequence); Sequence-dependent uptake restricts transformation exclusively to homospecific DNA of identical genus.",
        "Artificial Induction of Competence via Calcium Chloride Treatment: Physical-chemical method for species not naturally competent (e.g., Escherichia coli): Bacterial cells chilled on ice and treated with ice-cold 50 to 100 mM calcium chloride (CaCl2); Divalent Ca2+ cations shield negatively charged phosphate groups on DNA and outer membrane lipopolysaccharides (LPS), promoting DNA adhesion to cell surface.",
        "Heat Shock Mediated Transformation: Following calcium chloride chilling, cells subjected to sudden heat pulse at 42 degrees Celsius for 45 to 90 seconds, followed by rapid return to ice; Thermal shock creates transient physical pores in outer and inner membranes through which calcium-complexed DNA enters cell; Cells incubated in rich SOC broth at 37 degrees Celsius for phenotypic expression of antibiotic resistance marker before plating.",
        "Electroporation (Electro-Transformation): High-efficiency modern artificial transformation technique: Bacterial suspension in non-ionic low-conductivity medium (10% glycerol) mixed with plasmid DNA in electroporation cuvette; Subjected to high-voltage electric pulse (1.8 to 2.5 kV, pulse duration 4 to 5 milliseconds); High electric field temporarily depolarizes membrane and induces reversible nano-pore formation, allowing rapid plasmid entry; Yields transformation efficiencies exceeding 10 to the power 9 transformants per microgram plasmid DNA.",
        "Applications of Transformation in Molecular Cloning: Recombinant DNA technology: Introducing ligated recombinant plasmid vectors (containing foreign passenger gene and antibiotic selection marker) into chemically competent E. coli host cells; Blue-white screening on agar containing ampicillin and X-gal via alpha-complementation of beta-galactosidase; Genomic library construction."
    ],
    [
        "Griffith Discovery: Transforming principle transferred genetic capsule-producing virulence from dead to live cells.",
        "Avery Proof: DNase uniquely and completely abolished transformation, demonstrating that DNA is the genetic substance.",
        "Single-Strand Uptake: Natural transformation translocates exactly one single strand of DNA into the cytoplasm.",
        "RecA Recombinase Role: Mediates strand invasion, homology search, and heteroduplex formation during recombination.",
        "Gram-Negative Uptake Sequence: Highly specific 9 to 11 bp uptake sequence required for recognition in Haemophilus and Neisseria.",
        "Calcium Chloride Function: Divalent calcium ions neutralize electrostatic repulsion between DNA and cell membrane.",
        "Heat Shock Parameters: 42 degrees Celsius for 45 to 90 seconds, creating transient membrane entry pores.",
        "Electroporation Principle: High-voltage electric field pulses induce transient reversible membrane nano-pores.",
        "Phenotypic Expression Step: Incubation in rich broth without antibiotic allows newly transformed cells to synthesize resistance enzymes.",
        "Exam Tip: In transformation viva, emphasize that during natural transformation in Bacillus, double-stranded extracellular DNA is cleaved by an external nuclease so that only a single strand enters the cell."
    ]
)

add_unit(
    "bsc-micro-mpg: conjugation",
    [
        "Historical Discovery of Bacterial Conjugation: Joshua Lederberg and Edward Tatum (1946) demonstrated sexual genetic recombination in Escherichia coli using two auxotrophic triple-mutant strains (Strain A: met- bio- thr+ leu+ thi+ and Strain B: met+ bio+ thr- leu- thi-); Plating mixed culture on minimal agar yielded prototrophic wild-type colonies (met+ bio+ thr+ leu+ thi+); Physical cell contact proven essential by Bernard Davis U-tube experiment with sintered glass filter.",
        "Molecular Architecture of the Fertility (F) Factor: F-factor is a 100 kilobase pair conjugative plasmid encoding over 30 transfer (tra) genes: Tra genes encode components of the sex pilus (F-pilus composed of pilin subunits), type IV secretion system (T4SS), and relaxosome complex; Origin of transfer (oriT) where conjugative nicking occurs; Insertion sequences (IS2, IS3, Tn1000) mediating chromosomal integration.",
        "The F-Plus by F-Minus Conjugative Mating Process: F+ donor cell possesses F-plasmid; F- recipient cell lacks plasmid; F-pilus contacts F- recipient, retracts by depolymerization, drawing donor and recipient into close wall-to-wall contact; Formation of stable mating junction and relaxosome assembly at oriT.",
        "Relaxosome Cleavage and Rolling Circle Transfer: Relaxase enzyme (TraI) creates a site-specific single-strand nick in phosphodiester backbone at oriT and covalently attaches to 5-prime end of nicked strand; Relaxase and single-stranded DNA translocated through T4SS pore into recipient; TraI helicase unrolls donor strand while rolling circle replication synthesizes replacement strand in donor; Single strand in recipient is converted into double-stranded circular plasmid by discontinuous lagging-strand synthesis; Both donor and recipient become F+.",
        "High Frequency of Recombination (Hfr) Strains: Formation of Hfr cells: Episomal F-plasmid integrates into circular bacterial chromosome via single reciprocal crossover homologous recombination between matching insertion sequences (IS elements); When Hfr cell conjugates with F- recipient, chromosome transfer initiates at integrated oriT; High frequency of chromosomal gene transfer (1000 times higher than F+).",
        "Mechanism of Hfr Conjugation and Incomplete Transfer: Conjugative transfer initiates at integrated oriT, transferring a small portion of F-plasmid followed by linear bacterial chromosomal genes; Complete transfer of entire 4.6 million base pair E. coli chromosome requires approximately 100 minutes at 37 degrees Celsius; Spontaneous mechanical breakage of fragile mating bridge usually occurs prematurely; Recipient receives chromosomal fragments but rarely receives the terminal tra genes, thus remaining F-.",
        "Interrupted Mating Technique of Wollman and Jacob (1957): Chromosome mapping methodology: Hfr and F- strains mixed and agitated in a kitchen blender at timed intervals (1, 2, 5, 10, 20 minutes) to mechanically shear mating pairs; Cells plated on selective media to detect transfer of specific donor alleles; Demonstrated that chromosomal markers enter recipient in strict linear sequence determined by entry time; Standard genetic map of E. coli calibrated in 100 minutes.",
        "F-Prime (F-prime) Formation and Sexduction: Aberrant, imprecise excision of integrated F-factor from Hfr chromosome: Excised circular plasmid carries adjacent host chromosomal genes along with F-DNA (termed F-prime plasmid, e.g., F-prime-lac); Transfer of F-prime to F- recipient transfers chromosomal genes at high frequency; Recipient becomes partially diploid (merodiploid) for transferred genes; Process termed sexduction.",
        "Comparison of Generalized and Specialized Transduction: Bacteriophage-mediated horizontal gene transfer: Generalized transduction (bacteriophage P1 or P22 lytic cycle: Random fragments of host bacterial chromosome packaged mistakenly into phage capsids during assembly; Any bacterial gene can be transferred); Specialized transduction (temperate bacteriophage lambda lysogenic cycle: Prophage integrates into chromosome at specific attB site; Imprecise excision packages adjacent gal or bio genes exclusively).",
        "Evolutionary Significance and Antibiotic Resistance Spread: Horizontal gene transfer (HGT) via conjugative R-plasmids and conjugative transposons (e.g., Tn916); Rapid dissemination of multi-drug resistance cassettes (encoding beta-lactamases, aminoglycoside-modifying enzymes, efflux pumps) across diverse pathogenic bacterial species in hospital intensive care environments."
    ],
    [
        "Davis U-Tube Experiment: Proved that physical, direct cell-to-cell contact is strictly required for bacterial conjugation.",
        "TraI Relaxase Enzyme: Performs site-specific single-strand nick at oriT and guides 5-prime end through T4SS pore.",
        "F+ by F- Mating Outcome: Both donor and recipient emerge as fertile F+ cells containing circularized plasmids.",
        "Hfr Formation Mechanism: Homologous integration of circular F-plasmid into circular bacterial chromosome via IS elements.",
        "Hfr Mating Recipient Status: Recipient receives chromosomal markers but almost always remains F- due to premature bridge breakage.",
        "Wollman-Jacob Mapping: Time-of-entry interrupted mating mapping calibrated the E. coli chromosome into 100 minutes.",
        "Sexduction Phenomenon: Conjugative transfer of host chromosomal genes mediated by an aberrant F-prime plasmid.",
        "Merodiploid Definition: Partial diploid bacterium possessing two copies of specific genes (one chromosomal, one on F-prime).",
        "Generalized vs Specialized: Generalized packages random DNA via headful packaging; specialized transfers genes adjacent to attB site.",
        "Exam Tip: In conjugation viva, explain that the donor chromosome is transferred as single-stranded linear DNA, and rolling circle DNA synthesis occurs simultaneously in both donor and recipient to reconstitute double-stranded duplexes."
    ]
)

# =========================================================================
# 6. MICROBIOLOGY LAB II (B.Sc Biotech / Microbiology Sem 2)
# =========================================================================

add_unit(
    "bsc-microlab: safety & instrumentation",
    [
        "Microbiological Biosafety Levels (BSL-1 to BSL-4): International biosafety classifications: BSL-1 (well-characterized agents not causing disease in healthy adults, e.g., non-pathogenic E. coli, Bacillus subtilis); BSL-2 (moderate-risk indigenous agents causing mild human disease, e.g., Staphylococcus aureus, Salmonella); BSL-3 (serious aerosol transmitted pathogens, e.g., Mycobacterium tuberculosis); BSL-4 (lethal aerosol viral agents without cure, e.g., Ebola, Marburg virus).",
        "Personal Protective Equipment (PPE) and Laboratory Behavior: Mandatory lab coats with closed cuffs, protective safety goggles, disposable nitrile gloves, closed-toe footwear; Prohibition of eating, drinking, smoking, mouth pipetting, and applying cosmetics in microbiological workspaces; Strict hand washing with antiseptic soap before and after handling microbial cultures.",
        "Laminar Air Flow (LAF) Clean Bench Architecture: Vertical and horizontal laminar airflow cabinets: Air drawn through pre-filters and forced through High-Efficiency Particulate Air (HEPA) filters at uniform velocity (90 feet per minute) in parallel streamlines; HEPA filters trap 99.97 percent of airborne particles, spores, and bacteria down to 0.3 micrometers; Germicidal ultraviolet (UV) lamp (254 nm wavelength) operated for 20 minutes prior to work.",
        "Autoclave Operation and Saturated Steam Sterilization: Moist heat under pressure: Standard operating cycle at 121 degrees Celsius and 15 pounds per square inch (psi) gauge pressure for 15 to 20 minutes; Latent heat of steam condensation rapidly penetrates and coagulates microbial proteins and resistant bacterial endospores; Biological validation using heat-resistant endospores of Geobacillus stearothermophilus.",
        "Hot Air Oven Dry Heat Sterilization: High-temperature dry heat oxidation: Standard operating cycle at 160 to 180 degrees Celsius for 2 hours; Sterilization of anhydrous materials, powders, dry glassware (Petri plates, pipettes in metal canisters), and metallic forceps; Biological validation using endospores of Bacillus atrophaeus.",
        "Membrane Filtration of Heat-Labile Biological Solutions: Sterilization of heat-sensitive laboratory reagents: Antibiotic solutions, amino acids, enzyme solutions, and serum; Vacuum or syringe-driven filtration through cellulose nitrate or cellulose acetate membrane filters with 0.22 micrometer nominal pore size to physically trap bacterial cells.",
        "Inoculation Loops and Bunsen Burner Aseptic Technique: Heating nichrome or platinum inoculation loop wire to glowing red-hot in non-luminous Bunsen flame; Cooling loop for 10 seconds before touching culture; Flaming test tube mouths before and after opening; Disinfecting bench surfaces with 70% ethanol or 1% sodium hypochlorite before and after daily operations.",
        "Microbiological Centrifuges and Aerosol Containment: Operating benchtop microcentrifuges with sealed safety aerosol containment cups; Balancing opposing rotor tubes to within 0.01 gram; Preventing aerosol dissemination when harvesting concentrated bacterial cell pellets.",
        "Disposal of Biohazardous Infectious Wastes: All contaminated bacterial cultures, inoculated Petri plates, and swabs must be collected in autoclavable biohazard bags (red/yellow biohazard marked) and autoclaved at 121 degrees Celsius for 30 minutes prior to municipal disposal; Used disposable tips and pipettes soaked in 1% sodium hypochlorite disinfectant.",
        "Emergency Management of Spills and Accidental Exposures: Standard operating procedure for live culture spills: Cover spill immediately with absorbent paper towels soaked in freshly prepared disinfectant (1% sodium hypochlorite or 5% phenol); Allow 20 minutes contact time for complete microbial deactivation; Wipe up using forceps and dispose in biohazard bin; Report accidental needle sticks or splashes immediately."
    ],
    [
        "HEPA Filter Rating: Traps 99.97 percent of all particulate matter and airborne microbes down to 0.3 micrometers.",
        "Autoclave Standard Parameters: Exactly 121 degrees Celsius at 15 psi pressure for 15 to 20 minutes.",
        "Autoclave Indicator Organism: Geobacillus stearothermophilus endospores, possessing highest moist heat resistance.",
        "Hot Air Oven Standard: 160 to 180 degrees Celsius for 2 hours, utilizing dry oxidative heat.",
        "Membrane Filter Pore Size: 0.22 micrometers, retaining all vegetative bacterial cells from heat-sensitive fluids.",
        "Inoculation Loop Red Heat: Flaming until glowing red ensures instantaneous incineration of residual microbes.",
        "70 Percent Ethanol Superiority: 70% ethanol penetrates cell walls better than 100% absolute alcohol, which coagulates surface proteins prematurely.",
        "UV Germicidal Wavelength: 254 nm wavelength absorbed maximally by nucleic acid pyrimidine bases, forming thymine dimers.",
        "Biohazard Bag Decontamination: All live bacterial culture plates must be autoclaved before discard.",
        "Exam Tip: In sterilization viva, explain why moist heat in an autoclave is vastly more efficient than dry heat in an oven: steam possesses high latent heat of vaporization, which transfers massive thermal energy rapidly upon condensation."
    ]
)

add_unit(
    "bsc-microlab: standard preparations",
    [
        "Preparation of General Purpose Basal Media: Preparation of Nutrient Broth: Dissolving 5.0 grams peptone, 3.0 grams beef extract, and 5.0 grams sodium chloride in 1000 mL distilled water; Adjusting pH to 7.0 using 1 N NaOH; Preparation of Nutrient Agar: Adding 1.5% to 2.0% w/v agar powder to nutrient broth and heating with stirring to dissolve before autoclaving.",
        "Formulation of Selective and Differential Media (MacConkey Agar): Preparation of MacConkey Agar: Peptone, bile salts (inhibiting Gram-positive bacteria), lactose (differential carbohydrate), neutral red pH indicator, and crystal violet; Lactose fermenters (E. coli) form pink colonies with precipitated bile; Non-lactose fermenters (Salmonella, Shigella) form pale translucent colonies.",
        "Formulation of Mannitol Salt Agar (MSA) and EMB Agar: Mannitol Salt Agar: Contains 7.5% NaCl (selective for halotolerant staphylococci), mannitol, and phenol red indicator (Staphylococcus aureus ferments mannitol turning medium yellow); Eosin Methylene Blue (EMB) Agar: Contains eosin Y and methylene blue dyes inhibiting Gram-positives; E. coli forms distinctive colonies with brilliant green metallic sheen.",
        "Preparation of Reagents for Gram Staining: Four-component staining series: Primary stain: Crystal Violet (2% w/v solution in 20% ethanol with ammonium oxalate); Mordant: Gram Iodine (1 gram iodine crystals and 2 grams KI dissolved in 300 mL distilled water); Decolorizer: 95% ethyl alcohol; Counterstain: Safranin O (0.25% w/v aqueous solution).",
        "Preparation of Endospore Stains (Schaeffer-Fulton Method): Primary stain: 5% w/v aqueous Malachite Green solution; Decolorizer: Distilled water; Counterstain: 0.5% w/v aqueous Safranin solution; Endospores retain malachite green upon steaming, while vegetative cells stain pink.",
        "Preparation of Negative Capsule Staining Reagents: India Ink suspension or 10% w/v Nigrosin aqueous solution; Acidic colloidal dyes containing negative electrical charges repelled by bacterial surface; Bacterial capsules appear as clear, unstained halos against dark carbon particle background.",
        "Preparation of Biochemical Test Media (IMViC Series): Tryptone Broth (for indole test, 1% tryptone); Methyl Red and Voges-Proskauer (MR-VP) Broth: Buffered peptone-glucose broth; Simmons Citrate Agar: Sodium citrate as sole carbon source, ammonium dihydrogen phosphate as nitrogen source, and bromothymol blue pH indicator (green at neutral, royal blue when alkaline).",
        "Preparation of Catalase and Oxidase Reagents: Catalase reagent: Freshly prepared 3% v/v hydrogen peroxide (H2O2) stored in refrigerated amber bottle; Oxidase reagent: 1% w/v aqueous tetramethyl-p-phenylenediamine dihydrochloride (Kovacs oxidase reagent), freshly prepared and stored in dark to avoid photo-oxidation.",
        "Preparation of Phosphate Buffered Saline (PBS Dilution Blanks): Preparation of 0.01 M PBS buffer: 8.0 grams NaCl, 0.2 gram KCl, 1.44 grams Na2HPO4, and 0.24 gram KH2PO4 per 1000 mL distilled water; Dispensed into 9.0 mL tubes and autoclaved for serial tenfold dilution series.",
        "Storage and Quality Control of Microbiological Media: Autoclaved culture media stored at 4 degrees Celsius in sealed bags to prevent dehydration; Sterility checking by un-inoculated 24-hour incubation at 37 degrees Celsius; Performance testing using ATCC reference bacterial strains."
    ],
    [
        "Agar Solidification Properties: Melts at 95 degrees Celsius and remains liquid until cooling to 42 degrees Celsius.",
        "MacConkey Bile Salts: Selectively suppresses Gram-positive bacteria, allowing only Gram-negative enterics to grow.",
        "EMB Green Metallic Sheen: Diagnostic for Escherichia coli due to vigorous lactose fermentation and acid precipitation.",
        "Gram Iodine Mordant Function: Forms large, insoluble Crystal Violet-Iodine (CV-I) complex inside bacterial cell walls.",
        "Malachite Green Endospore Stain: Forced into resistant spore coats by application of vigorous steam heat.",
        "Simmons Citrate Positive Color: Royal Prussian blue color caused by alkaline pH change from citrate metabolism.",
        "Catalase Reagent Formula: 3% hydrogen peroxide solution releasing brisk oxygen bubbles with catalase.",
        "Oxidase Reagent Formula: 1% tetramethyl-p-phenylenediamine dihydrochloride producing deep purple color in 15 seconds.",
        "Serial Dilution Tube Volume: Standard 9.0 mL sterile PBS blanks for 1.0 mL aliquot transfers (tenfold 1:10 dilution).",
        "Exam Tip: In preparing microbiological agar, remember that agar itself provides zero nutritional value; it acts strictly as an inert, non-biodegradable gelling agent that virtually no human pathogens can liquefy."
    ]
)

add_unit(
    "bsc-microlab: experimental procedures",
    [
        "Aseptic Streak Plate Technique for Pure Culture Isolation: Quadrant streaking method: Flame-sterilized wire loop touched to bacterial culture; Streaked across first quadrant of nutrient agar plate; Loop flamed, cooled, and rotated 90 degrees to drag bacteria into second quadrant; Repeated for third and fourth quadrants; Incubated inverted at 37 degrees Celsius for 24 hours to yield isolated single colonies.",
        "Standard Gram Staining Procedure: Heat-fixed bacterial smear prepared on clean glass slide; Flooded with crystal violet for 60 seconds; Rinsed with water; Flooded with Gram iodine mordant for 60 seconds; Rinsed with water; Decolorized with 95% ethanol dropwise for 10 to 15 seconds until runoff is clear; Rinsed immediately with water; Counterstained with safranin for 45 seconds; Blot dried; Examined under 100x oil immersion lens.",
        "Gram Reaction Microscopic Interpretation: Gram-positive bacteria (Staphylococcus aureus, Bacillus subtilis) retain primary crystal violet-iodine complex and appear deep purple-violet due to thick peptidoglycan mesh (20 to 80 nm); Gram-negative bacteria (Escherichia coli, Pseudomonas aeruginosa) lose dye during ethanol lipid extraction and stain bright pink-red with safranin counterstain.",
        "Schaeffer-Fulton Endospore Staining Technique: Bacterial smear of aged Bacillus subtilis culture heat-fixed; Covered with blotting paper and flooded with 5% malachite green; Steamed over boiling water bath for 5 minutes, preventing dye desiccation; Paper removed and slide washed with water; Counterstained with safranin for 60 seconds; Spores appear bright green within pink vegetative sporangia.",
        "Negative Capsule Staining Method (Anthony and Nigrosin Methods): Drop of nigrosin or India ink placed on clean slide; Mixed with culture of Klebsiella pneumoniae; Spread into thin film using edge of second spreader slide; Air dried without heat fixing (heat shrinks capsules); Counterstained with 1% crystal violet; Capsule appears as clear transparent halo surrounding colored bacterial body against dark carbon background.",
        "Bacterial Motility Testing (Hanging Drop and Semi-Solid Agar): Hanging drop preparation: Drop of culture placed on cover slip ringed with petroleum jelly; Inverted over depression cavity slide; Observed under 40x objective to distinguish true directional motility from Brownian motion; Semi-solid agar stab (0.4% agar): Motile bacteria migrate radially away from stab line creating diffuse cloudiness.",
        "Performance of IMViC Biochemical Test Battery: Indole test: Tryptone broth incubated, tested with Kovacs reagent (cherry red surface ring indicates tryptophanase activity); Methyl Red (MR) test: MR-VP broth tested with methyl red indicator (stable red color indicates mixed acid fermentation, pH < 4.4); Voges-Proskauer (VP) test: MR-VP broth tested with Barritt reagents A and B (pink-red color indicates acetoin production); Citrate test: Simmons citrate agar slant (growth and royal blue color indicates citrate permease utilization).",
        "Catalase and Cytochrome Oxidase Assays: Catalase assay: Bacterial colony picked with glass rod and emulsified in drop of 3% H2O2 on clean glass slide; Immediate vigorous effervescence of oxygen gas bubbles indicates catalase positive (Staphylococcus); Oxidase assay: Bacterial colony rubbed onto filter paper soaked in Kovacs oxidase reagent; Rapid development of dark purple indophenol blue color within 10 to 15 seconds indicates positive (Pseudomonas).",
        "Carbohydrate Fermentation Broth Assays: Inoculation of phenol red carbohydrate broths (glucose, lactose, sucrose) containing inverted Durham fermentation tubes; Acid production turns phenol red from red to yellow (pH < 6.8); Gas production (H2 and CO2) forms trapped gas bubble inside inverted Durham tube.",
        "Kirby-Bauer Antibiotic Disc Diffusion Susceptibility Assay: Turbidity of bacterial suspension adjusted to 0.5 McFarland standard; Swabbed evenly in three planes over surface of Mueller-Hinton agar (MHA) plate; Standard paper antibiotic discs (ampicillin, ciprofloxacin, tetracycline, streptomycin) dispensed onto surface; Incubated at 37 degrees Celsius for 18 hours; Diameters of circular clear inhibition zones measured in millimeters with calipers.",
        "Determination of Bacterial Growth Curve via Turbidimetry: Inoculating 100 mL nutrient broth with 1 mL fresh overnight bacterial culture; Incubating in shaking water bath at 37 degrees Celsius; Aliquots withdrawn every 30 minutes for 4 hours; Measuring optical density at 600 nm using spectrophotometer against un-inoculated broth blank; Plotting log OD versus incubation time."
    ],
    [
        "Quadrant Streaking Purpose: Progressively dilutes bacterial cells across four sectors to obtain pure isolated single colonies.",
        "Decolorization Time Window: Decolorizing with 95% ethanol must not exceed 15 seconds to prevent false Gram-negative results.",
        "Gram-Positive Wall Basis: Multi-layered thick peptidoglycan dehydrates in alcohol, trapping large crystal violet-iodine complexes.",
        "Endospore Steaming Purpose: Heat softens resistant keratin-like protein spore coat, allowing malachite green penetration.",
        "No Heat-Fixing in Capsule Staining: Heat fixing melts and dehydrates delicate gelatinous polysaccharide capsules.",
        "Brownian vs True Motility: Brownian motion is random vibrational jiggling; true motility shows purposeful directional translation.",
        "Indole Test Positive Indicator: Formation of a bright cherry-red organic ring at the top meniscus with Kovacs reagent.",
        "Durham Tube Function: Inverted miniature glass vial that traps evolved gas bubbles during carbohydrate fermentation.",
        "Mueller-Hinton Agar Standard: Non-selective, low-thymidine agar standardized universally for antibiotic disc diffusion tests.",
        "Exam Tip: In antibiotic sensitivity testing, never report a bacterium as simply sensitive without consulting standard CLSI interpretive tables, because zone diameter breakpoints vary dramatically between different antibiotics."
    ]
)

add_unit(
    "bsc-microlab: data verification",
    [
        "Calculation of Viable Colony Forming Units (CFU/mL): Formula for viable bacterial count: CFU per mL equals (Number of colonies counted on plate multiplied by Dilution factor) divided by the Volume of sample plated in mL; Only plates with statistically valid counts between 30 and 300 colonies are evaluated.",
        "Serial Dilution Verification Calculations: Tenfold serial dilution series: 1.0 mL transferred into 9.0 mL sterile PBS blank represents 10 to the power minus 1 dilution; Consecutive five tube transfers produce dilutions down to 10 to the power minus 6; Plating 0.1 mL from 10 to the power minus 5 tube with 150 colonies yields 150 multiplied by 10 to the power 5 divided by 0.1, equaling 1.5 times 10 to the power 8 CFU/mL.",
        "Specific Growth Rate Constant (mu) Calculation: Mathematical derivation from exponential growth phase: mu equals (natural logarithm of OD2 minus natural logarithm of OD1) divided by (t2 minus t1); Generation time g calculated directly as natural logarithm of 2 divided by mu (0.693 divided by mu); Expressed in hours or minutes.",
        "McFarland Nephelometer Turbidity Calibration: Preparation and calibration of 0.5 McFarland standard: Mixing 0.05 mL of 1.175% barium chloride (BaCl2.2H2O) with 9.95 mL of 1% sulfuric acid (H2SO4); Forms fine barium sulfate precipitate producing optical density matching approximately 1.5 times 10 to the power 8 bacterial cells per mL.",
        "Measurement and Interpretation of Antibiotic Inhibition Zones: Measuring clear zone of inhibition diameter in millimeters including 6 mm disc diameter using precision Vernier calipers; Comparing measured zone diameters against Clinical and Laboratory Standards Institute (CLSI) breakpoint criteria to categorize pathogen as Susceptible (S), Intermediate (I), or Resistant (R).",
        "Verification of Gram Staining Controls: Concurrent staining of known positive (Staphylococcus aureus) and negative (Escherichia coli) reference control smears on the same slide; Verifies that decolorization step was neither over-extended nor under-extended.",
        "Verification of Indole Production Chemistry: Indole derived from enzymatic cleavage of amino acid tryptophan by tryptophanase enzyme; Reaction with p-dimethylaminobenzaldehyde in Kovacs reagent produces quinoid rosindole cherry-red dye complex.",
        "Verification of Methyl Red vs Voges-Proskauer Mutual Exclusivity: Physiological distinction in enteric bacteria: E. coli produces mixed organic acids dropping pH below 4.4 (MR positive, VP negative); Enterobacter aerogenes converts pyruvate to neutral acetoin (acetylmethylcarbinol) maintaining pH above 6.0 (MR negative, VP positive).",
        "Spectrophotometric Linearity and Dilution Verification: Verification of Beer-Lambert law adherence during turbidimetric growth monitoring; Bacterial suspensions with optical density exceeding 0.8 must be diluted twofold with sterile broth and re-measured to remain within linear instrument response range.",
        "Replicate Precision and Statistical Standard Deviation: Performing plate counts in triplicate; Calculating arithmetic mean, variance, and standard deviation; Eliminating statistical outlier plates resulting from pipetting bubbles or agar cracks."
    ],
    [
        "Valid Plate Counting Range: Standard countable plate must display between 30 and 300 colonies for statistical accuracy.",
        "CFU per mL Formula: CFU/mL equals (Colony count multiplied by Dilution factor) divided by Volume plated.",
        "Generation Time from Growth Rate: Doubling time g equals 0.693 divided by specific growth rate mu.",
        "McFarland 0.5 Cell Density: Standardized suspension containing approximately 1.5 times 10 to the power 8 bacterial cells/mL.",
        "CLSI Guideline Function: Publishes standardized millimeter zone diameter interpretive criteria for clinical antibiotics.",
        "Gram Control Slide Practice: Dual smear of known positive and negative bacteria ensures staining quality control.",
        "Kovacs Active Reagent: p-Dimethylaminobenzaldehyde reacting with indole to produce red rosindole dye.",
        "Acetoin Detection in VP: Alpha-naphthol and 40% KOH oxidize acetoin to diacetyl, reacting with guanidine to form red color.",
        "Beer-Lambert OD Limit: Optical density measurements become non-linear above 0.8 due to multiple light scattering.",
        "Exam Tip: In CFU calculations, remember that plating 0.1 mL of a 10 to the minus 4 dilution is mathematically equivalent to plating from a 10 to the minus 5 dilution, requiring multiplication by an extra factor of 10."
    ]
)

add_unit(
    "bsc-microlab: record & viva",
    [
        "Microbiological Practical Journal Standards: Comprehensive documentation: Date, Experiment Title, Underlying Biological Principle, Flowchart of Aseptic Protocol, Observation Tables with Raw Data, Calculation Steps with Units, Microscopic Sketches with True Color Representations, and Final Scientific Interpretation.",
        "Microscopic Illustration Standards: Illustrating bacterial morphology: Accurate circular field of view, correct relative cell size under 100x oil immersion lens, uniform cell shape (cocci, bacilli, spirilla), distinct spatial arrangements (clusters, chains, pairs), and realistic staining coloration.",
        "University Practical Examination Rubric: Marking distribution: Aseptic streak plate and Gram staining technique (25%), Biochemical test identification and interpretation (25%), Quantitative CFU calculation and growth problem (20%), Practical journal record (15%), and Oral viva voce (15%).",
        "Core Viva Voce Question: Why is 95% Ethanol the Critical Step in Gram Staining: Explaining that 95% ethanol dehydrates the thick peptidoglycan of Gram-positive cells, shrinking pores and trapping the CV-I complex; In Gram-negative cells, ethanol dissolves the thin outer lipid membrane and washes out the dye through porous thin peptidoglycan; Over-decolorization yields false negatives, while under-decolorization yields false positives.",
        "Core Viva Voce Question: What is the Purpose of Steaming in Endospore Staining: Stating that bacterial endospores possess a thick, highly cross-linked proteinaceous coat containing keratin-like dipicolinic acid-calcium complexes that is impermeable to cold stains; Steaming forces malachite green through the loosened coat matrix.",
        "Core Viva Voce Question: Why Does Starch Indicator Give Blue Color in Iodometry: Amylose forms a linear helical inclusion complex that accommodates polyiodide ions inside its hydrophobic core, producing intense charge-transfer blue coloration.",
        "Core Viva Voce Question: Why Can an Autoclave Achieve 121 Degrees Celsius: Explaining that pure water boils at 100 degrees Celsius under normal atmospheric pressure; In a sealed pressure chamber, increasing pressure by 15 psi elevates the boiling temperature of water to 121 degrees Celsius according to the Clausius-Clapeyron thermodynamic relationship.",
        "Core Viva Voce Question: What is the Biochemical Principle of the Catalase Test: Catalase enzyme breaks down cytotoxic metabolic hydrogen peroxide into non-toxic water and molecular oxygen gas; Immediate bubbling verifies catalase activity, distinguishing aerobic staphylococci from catalase-negative streptococci.",
        "Core Viva Voce Question: What is the Function of Bromothymol Blue in Simmons Citrate Agar: Bromothymol blue is a pH indicator that is green at neutral pH 6.8; When bacteria utilize sodium citrate and ammonium phosphate, they release alkaline sodium carbonate and ammonia, elevating pH above 7.6 and turning the medium deep Prussian blue.",
        "Laboratory Cleanliness and Stewardship: Aseptic disinfection of workbench before and after daily sessions; Proper disposal of used slides in disinfectant jars; Cleaning microscope oil immersion lens with soft tissue; Safe autoclaving of all bacterial waste bags."
    ],
    [
        "Record Book Structure: Principle, procedure flowchart, observation data, microscopic drawing, calculations, and conclusion.",
        "Viva Fact Alcohol Decolorization: Critical differential step exploiting structural differences in peptidoglycan wall thickness.",
        "Viva Fact Spore Heat Resistance: Bacterial endospores survive boiling at 100 degrees Celsius due to dipicolinic acid and calcium.",
        "Viva Fact Autoclave Pressure: 15 psi gauge pressure raises steam saturation temperature to 121 degrees Celsius.",
        "Viva Fact Catalase Bubbles: Catalase splits toxic hydrogen peroxide into water and molecular oxygen gas bubbles.",
        "Viva Fact Simmons Citrate Blue: Alkaline ammonia and carbonate byproduct elevates pH turning bromothymol blue royal blue.",
        "Viva Fact McFarland Standard: Barium sulfate suspension standardizing bacterial cell density for antibiotic disc testing.",
        "Viva Fact Immersion Oil Index: Refractive index 1.51 matching optical glass, preventing resolution loss from light refraction.",
        "Viva Fact Colony Forming Unit: A single living bacterial cell or clump that divides to form a visible distinct colony.",
        "Exam Tip: In the viva, when asked why bacterial smear slides must be passed through a flame to heat-fix them, state that heat-fixing kills the bacteria, adheres the cells firmly to the glass, and coagulates proteins to enhance dye absorption."
    ]
)
'''

content += part3

with open("scripts/build_bsc_sem2_life.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subjects 5 and 6 to build_bsc_sem2_life.py.")
