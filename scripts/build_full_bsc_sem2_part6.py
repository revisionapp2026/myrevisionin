import json

papers = {}

def add_paper(key, q_list):
    papers[key] = q_list

# =========================================================================
# 10. MICROBIAL PHYSIOLOGY & GENETICS (STRICTLY ZERO LATEX)
# =========================================================================
add_paper("micro_physio_set1", [
    {"id": "bsc-mpg-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Differentiate between phototrophs and chemotrophs based on energy source.",
     "answer_lines": ["Phototrophs utilize solar light radiant energy to drive biochemical synthesis (cyanobacteria, purple sulfur bacteria). Chemotrophs oxidize organic or inorganic chemical compounds to acquire cellular energy (heterotrophic and chemolithotrophic bacteria)."]},
    {"id": "bsc-mpg-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is the role of an F-plasmid in bacterial conjugation?",
     "answer_lines": ["The F-plasmid (fertility factor) encodes the synthesis of sex pili and conjugation machinery, facilitating directional horizontal transfer of genetic material from an F+ donor bacterium to an F- recipient cell."]},
    {"id": "bsc-mpg-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define the four distinct phases of a bacterial batch growth curve.",
     "answer_lines": ["1. Lag phase (physiochemical adaptation). 2. Exponential or Log phase (balanced logarithmic multiplication). 3. Stationary phase (growth rate equals death rate). 4. Death or Decline phase (exponential cell lysis due to toxic accumulation)."]},
    {"id": "bsc-mpg-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is diauxic growth in microorganisms?",
     "answer_lines": ["A biphasic growth pattern observed when bacteria are cultured in the presence of two sugars (such as glucose and lactose). The preferred substrate (glucose) is consumed first; following a short diauxic lag to induce new operon enzymes, the second sugar is utilized."]},
    {"id": "bsc-mpg-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define transformation in bacterial genetics.",
     "answer_lines": ["The uptake and stable genetic incorporation of exogenous naked foreign DNA fragments from the surrounding aqueous environment by competent bacterial cells."]},
    {"id": "bsc-mpg-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Bacterial Recombination mechanisms: Conjugation, Transformation, and Transduction. Detail the Griffith and Avery-MacLeod-McCarty experiments.",
     "answer_lines": [
         "1. Transformation: Demonstrated by Frederick Griffith (1928) using Streptococcus pneumoniae in mice (heat-killed virulent smooth S-strain transformed non-virulent rough R-strain into live deadly S-strain). Avery, MacLeod, and McCarty (1944) proved that only deoxyribonuclease (DNase) abolished transforming activity, establishing DNA as the chemical transforming agent.",
         "2. Conjugation: Unidirectional parasexual transfer of DNA mediated by physical cell-to-cell contact via conjugative sex pilus. Discovered by Lederberg and Tatum; integration of F plasmid into bacterial chromosome yields High Frequency of Recombination (Hfr) strains capable of transferring chromosomal markers in linear map order.",
         "3. Transduction: Bacteriophage-mediated horizontal gene transfer discovered by Zinder and Lederberg. Generalized transduction (lytic phages packaging random host chromosomal fragments) versus Specialized transduction (temperate phages like lambda carrying specific adjacent genes like gal or bio due to imprecise prophage excision)."
     ]},
    {"id": "bsc-mpg-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe Microbial Transport Mechanisms across bacterial cytoplasmic membranes: Simple Diffusion, Facilitated Diffusion, Active Transport, and Group Translocation.",
     "answer_lines": [
         "1. Passive Transport Mechanisms:",
         "• Simple Diffusion: Non-specific movement of small nonpolar molecules (O2, CO2, H2O) down a concentration gradient without transporter assistance.",
         "• Facilitated Diffusion: Protein carrier or channel-mediated movement down a concentration gradient without metabolic energy expenditure (e.g., glycerol uptake in Escherichia coli).",
         "2. Active Transport (Against Concentration Gradient):",
         "• Primary Active Transport (ABC Transporters): ATP-Binding Cassette systems using direct ATP hydrolysis to power periplasmic substrate capture and transmembrane translocation (histidine, maltose).",
         "• Secondary Active Transport: Driven by proton motive force or sodium ion gradients (Symport: lactose permease co-transporting lactose with H+; Antiport: sodium-proton exchangers).",
         "3. Group Translocation (Phosphotransferase System, PTS):",
         "Substrate is chemically modified (phosphorylated) as it is transported across membrane, preventing back-leakage. Phosphate cascade transfers high-energy phosphate from phosphoenolpyruvate (PEP) through Enzyme I, HPr, and Enzyme II complexes to glucose, yielding glucose-6-phosphate inside cytoplasm."
     ]},
    {"id": "bsc-mpg-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Chemolithotrophy and anaerobic respiration in bacteria. Detail microbial pathways for iron oxidation, sulfur oxidation, and methanogenesis.",
     "answer_lines": [
         "1. Concept of Chemolithotrophy: Acquisition of metabolic energy from the oxidation of reduced inorganic electron donors (H2, H2S, Fe2+, NH3) coupled to electron transport phosphorylation and autotrophic carbon dioxide fixation via the Calvin cycle or reverse TCA cycle.",
         "2. Iron-Oxidizing Bacteria (Acidithiobacillus ferrooxidans): Oxidize ferrous iron (Fe2+) to ferric iron (Fe3+) in extremely acidic mine drainage habitats (pH 1.5 to 2.5), generating proton gradients for ATP synthesis across the rusticyanin respiratory chain.",
         "3. Sulfur-Oxidizing Bacteria (Thiobacillus, Beggiatoa): Oxidize hydrogen sulfide (H2S), thiosulfate, and elemental sulfur to sulfuric acid, generating metabolic ATP and massive proton accumulation.",
         "4. Methanogenesis: Strictly anaerobic respiratory pathway carried out exclusively by Archaea (Methanobrevibacter, Methanosarcina). Carbon dioxide or acetate acts as terminal electron acceptor, reduced with hydrogen gas to methane (CH4) using unique coenzymes (Coenzyme M, Methanofuran, Coenzyme F420)."
     ]},
    {"id": "bsc-mpg-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Transposable Elements (Transposons) in bacteria. Differentiate between Insertion Sequences (IS), Composite Transposons, and Non-Composite Transposons.",
     "answer_lines": [
         "1. Definition: Discrete segments of mobile DNA that can jump from one genomic site to another within the same chromosome, plasmid, or phage genome, discovered by Barbara McClintock.",
         "2. Structural Classes in Bacteria:",
         "• Insertion Sequences (IS Elements): Simplest transposable elements (750 to 1500 base pairs). Consist of a central gene encoding Transposase flanked by short Inverted Terminal Repeats (ITRs).",
         "• Composite Transposons (e.g., Tn10, Tn5): Contain central structural genes conferring antibiotic resistance (tetracycline, kanamycin) flanked on both sides by two identical or related IS modules providing transposase machinery.",
         "• Non-Composite (Complex) Transposons (e.g., Tn3): Do not possess terminal IS elements; encode their own transposase and resolvase enzymes along with antibiotic resistance genes (such as beta-lactamase for ampicillin resistance).",
         "3. Medical Significance: Transposons drive the rapid dissemination of multi-drug resistance (MDR) plasmids across clinical bacterial pathogens."
     ]},
    {"id": "bsc-mpg-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain DNA Repair Mechanisms in bacteria: Photoreactivation, Nucleotide Excision Repair, Mismatch Repair, and the SOS Response.",
     "answer_lines": [
         "1. Photoreactivation (Light Repair): Photolyase enzyme binds to ultraviolet-induced cyclobutane pyrimidine dimers (thymine dimers). Absorption of blue light energy splits cyclobutane rings, restoring native monomeric nucleotides in situ.",
         "2. Nucleotide Excision Repair (Dark Repair, UvrABC Endonuclease): UvrA2B complex scans DNA for helix distortions; UvrC endonuclease cuts damaged strand 8 nucleotides upstream and 4-5 nucleotides downstream; UvrD helicase releases damaged 12-mer oligonucleotide; DNA Polymerase I fills gap and DNA Ligase seals nick.",
         "3. Methyl-Directed Mismatch Repair (MutS, MutL, MutH): Distinguishes parental template strand from nascent daughter strand based on adenine methylation at GATC sites by Dam methylase, removing mispaired bases from unmethylated daughter strand.",
         "4. SOS Response (Error-Prone Global Emergency Repair): Induced by severe widespread DNA damage. RecA protein becomes activated by single-stranded DNA, stimulating autocatalytic cleavage of LexA repressor protein, derepressing over 40 SOS repair genes including low-fidelity translesion DNA polymerases (DinB, UmuDC) that replicate across lesions with high mutagenesis."
     ]}
])

add_paper("micro_physio_set2", [
    {"id": "bsc-mpg-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define continuous culture and state the working principle of a chemostat.",
     "answer_lines": ["Continuous culture maintains microorganisms in steady-state exponential growth indefinitely by continuously pumping in fresh nutrient medium containing a limiting nutrient at a constant dilution rate while simultaneously removing spent culture effluent."]},
    {"id": "bsc-mpg-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is the function of the sigma factor in bacterial RNA polymerase?",
     "answer_lines": ["The sigma factor confers promoter recognition specificity upon the RNA polymerase core enzyme, directing the holoenzyme to bind specifically to -10 (Pribnow box) and -35 promoter consensus sequences to initiate transcription."]},
    {"id": "bsc-mpg-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is catabolite repression?",
     "answer_lines": ["A global regulatory mechanism in bacteria where the presence of a preferred rapidly metabolizable carbon source (glucose) represses the transcription of operons encoding enzymes for alternative secondary sugars (lactose, maltose)."]},
    {"id": "bsc-mpg-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define Ames test and state its primary mutagenicity testing principle.",
     "answer_lines": ["A biological assay utilizing a mutant histidine-auxotrophic strain of Salmonella typhimurium to determine whether a chemical compound is a mutagen/carcinogen by measuring the frequency of reverse mutations back to histidine prototrophy."]},
    {"id": "bsc-mpg-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is an auxotroph and a prototroph?",
     "answer_lines": ["Prototroph: Wild-type strain capable of synthesizing all essential organic compounds from minimal media. Auxotroph: Nutritional mutant that has lost the biochemical capacity to synthesize a specific nutrient and requires its dietary supplementation."]},
    {"id": "bsc-mpg-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain the Molecular Architecture and Regulation of the Tryptophan (trp) Operon in Escherichia coli. Detail the Attenuation Mechanism.",
     "answer_lines": [
         "1. Operon Organization: A repressible operon comprising regulatory gene trpR, promoter, operator, leader region (trpL) containing an attenuator, and five structural genes (trpE, trpD, trpC, trpB, trpA) synthesizing tryptophan biosynthetic enzymes.",
         "2. Repressor Control: When intracellular tryptophan is abundant, tryptophan acts as a corepressor, binding to inactive TrpR aporepressor to form an active complex that binds the operator, blocking transcription initiation.",
         "3. Attenuation Control (Fine-tuning via RNA Secondary Structure):",
         "• Leader mRNA has four complementary segments capable of forming alternative hairpin stems: 1-2 stem, 2-3 stem (antiterminator), and 3-4 stem (Rho-independent transcription terminator).",
         "• Low Tryptophan: Ribosome stalls at tandem tryptophan codons in leader peptide because charged tRNATrp is scarce. Segment 2 pairs with segment 3 to form the 2-3 antiterminator loop, allowing RNA polymerase to continue transcription of structural genes.",
         "• High Tryptophan: Ribosome translates leader rapidly without stalling, covering segment 2. Segment 3 pairs with segment 4, forming the 3-4 attenuator terminator hairpin followed by poly-U tract, which knocks RNA polymerase off the DNA template, prematurely aborting transcription."
     ]},
    {"id": "bsc-mpg-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe the Life Cycle of Bacteriophage Lambda. Detail the molecular genetic switch between the Lytic Cycle and Lysogenic Cycle.",
     "answer_lines": [
         "1. Structural Morphology: A temperate double-stranded DNA phage with an icosahedral capsid head and flexible non-contractile tail terminating in a single tail fiber.",
         "2. Circularization and Decision: Phage infects E. coli, injecting linear DNA; cohesive end sites (cos sites) circularize inside host cytoplasm.",
         "3. Molecular Genetic Switch:",
         "• CI Repressor Protein: Encoded by cI gene; dimers bind cooperatively to right operator (OR1, OR2, OR3), repressing lytic promoter PR while activating its own promoter PRM, maintaining the stable integrated Prophage state (Lysogeny).",
         "• Cro Protein: Product of lytic transcription; binds preferentially to OR3, repressing cI expression and driving lytic cascade (Lysis).",
         "4. Environmental Induction: Host cellular DNA damage activates RecA, stimulating CI repressor self-cleavage, derepressing lytic promoters to produce infectious virion progeny and host cell lysis."
     ]},
    {"id": "bsc-mpg-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Biological Nitrogen Fixation in detail. Describe Nitrogenase enzyme structure, sensitivity to oxygen, and protection mechanisms.",
     "answer_lines": [
         "1. Overall Biochemical Reaction: Reduction of atmospheric nitrogen gas to ammonia catalyzed by the multi-subunit enzyme complex nitrogenase:",
         "Nitrogen gas + 8 electrons + 8 protons + 16 ATP yields 2 ammonia + hydrogen gas + 16 ADP + 16 inorganic phosphate.",
         "2. Nitrogenase Enzyme Complex:",
         "• Dinitrogenase Reductase (Fe-protein): Homodimer containing a 4Fe-4S cluster that binds ATP and transfers high-potential electrons.",
         "• Dinitrogenase (MoFe-protein): Alpha-2-beta-2 tetramer harboring iron-molybdenum cofactors (FeMo-co) where N2 binds and is reduced.",
         "3. Oxygen Inactivation and Protective Adaptations:",
         "Nitrogenase is irreversibly destroyed by free molecular oxygen.",
         "• Leghemoglobin in Legume Nodules: Scavenges free oxygen, delivering it at high flux but vanishingly low free concentration to bacteroid respiration.",
         "• Heterocysts in Cyanobacteria (Anabaena): Specialized thick-walled cells lacking oxygen-evolving Photosystem II, containing active nitrogenase."
     ]},
    {"id": "bsc-mpg-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe Bacterial Cell Division and Peptidoglycan Cell Wall Biosynthesis. Detail the roles of FtsZ, Bactoprenol, Transglycosylase, and Transpeptidase.",
     "answer_lines": [
         "1. Divisome Assembly and FtsZ Ring: Tubulin homolog FtsZ polymerizes at midcell to form a contractile Z-ring guided by the MinCDE oscillatory system, coordinating invagination of the septum.",
         "2. Peptidoglycan Monomer Synthesis in Cytoplasm: UDP-N-acetylglucosamine (UDP-GlcNAc) and UDP-N-acetylmuramic acid (UDP-MurNAc) pentapeptide are synthesized in cytoplasm.",
         "3. Lipid Carrier Translocation (Bactoprenol / Undecaprenyl Phosphate): MurNAc-pentapeptide-GlcNAc disaccharide unit is linked to membrane lipid carrier bactoprenol (Lipid II) and flipped across inner membrane to periplasm.",
         "4. Transglycosylation and Transpeptidation:",
         "• Transglycosylase incorporates disaccharide units into growing linear glycan strands.",
         "• Transpeptidase (Penicillin-Binding Protein, PBP) catalyzes peptide cross-linking between adjacent stem peptides, conferring rigid mechanical tensile strength.",
         "• Beta-lactam antibiotics (penicillin) act as structural analogs of D-alanyl-D-alanine, irreversibly inactivating transpeptidases and causing osmotic bacterial lysis."
     ]},
    {"id": "bsc-mpg-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Spontaneous vs. Induced Mutations. Describe the molecular mechanisms of Base Analogs, Alkylating Agents, Intercalating Agents, and UV Radiation.",
     "answer_lines": [
         "1. Spontaneous Mutations: Arise from endogenous cellular processes, including DNA replication polymerase slippage errors, spontaneous deamination of cytosine to uracil, and rare tautomeric shifts (amino-imino, keto-enol) causing transition mispairings.",
         "2. Chemical Mutagens:",
         "• Base Analogs (5-Bromouracil, 2-Aminopurine): 5-BU resembles thymine but readily tautomerizes to enol form, mispairing with guanine, causing AT to GC transitions.",
         "• Alkylating Agents (Ethyl Methanesulfonate, EMS): Adds ethyl/methyl groups to guanine (forming O-6-ethylguanine), which mispairs with thymine.",
         "• Intercalating Dyes (Ethidium Bromide, Acridine Orange): Flat aromatic planar molecules that slip between stacked base pairs, distorting the helix and causing single base pair insertions or deletions (frameshift mutations).",
         "3. Physical Mutagens (UV Light and Ionizing Radiations): Non-ionizing UV light (260 nm) induces cross-linking between adjacent pyrimidines, creating cyclobutane pyrimidine dimers that halt replication."
     ]}
])

# =========================================================================
# 11. ENVIRONMENTAL SCIENCE (STRICTLY ZERO LATEX)
# =========================================================================
add_paper("env_sci_set1", [
    {"id": "bsc-es-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define an Ecosystem and name its two primary structural components.",
     "answer_lines": ["An ecosystem is a self-sustaining ecological unit comprising biotic community components (producers, consumers, decomposers) interacting dynamically with abiotic physical-chemical environmental factors (sunlight, temperature, soil, water)."]},
    {"id": "bsc-es-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is Biomagnification? Name one persistent pollutant that bioaccumulates.",
     "answer_lines": ["The progressive increase in the concentration of persistent, non-biodegradable, fat-soluble chemical toxins at successively higher trophic levels of a food web. Example: Dichlorodiphenyltrichloroethane (DDT) or polychlorinated biphenyls (PCBs)."]},
    {"id": "bsc-es-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the primary chemical causes of Acid Rain.",
     "answer_lines": ["Atmospheric emissions of sulfur dioxide (SO2) and nitrogen oxides (NOx) resulting from coal combustion and vehicle exhaust, which hydrolyze with rain moisture to form sulfuric acid (H2SO4) and nitric acid (HNO3), lowering rain pH below 5.6."]},
    {"id": "bsc-es-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is the difference between renewable and non-renewable energy resources?",
     "answer_lines": ["Renewable: Naturally replenished on a human timescale (solar, wind, hydroelectric, geothermal). Non-renewable: Finite geological reserves depleted permanently by consumption (coal, petroleum, natural gas, uranium)."]},
    {"id": "bsc-es-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define Eutrophication in aquatic freshwater bodies.",
     "answer_lines": ["Nutrient enrichment of water bodies by agricultural runoff of nitrogen and phosphorus fertilizers, triggering explosive algal blooms followed by microbial decomposition that severely depletes dissolved oxygen (hypoxia), suffocating fish fauna."]},
    {"id": "bsc-es-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Air Pollution. Detail criteria air pollutants, photochemical smog formation, health hazards, and electrostatic precipitators.",
     "answer_lines": [
         "1. Criteria Pollutants: Particulate matter (PM2.5 and PM10), sulfur dioxide, carbon monoxide, nitrogen dioxide, ground-level ozone, and lead.",
         "2. Photochemical Smog (Los Angeles Smog): Formed on warm sunny days through complex photochemical reactions between vehicle exhaust nitrogen oxides (NOx) and volatile organic compounds (VOCs). Solar UV radiation splits NO2 into NO and reactive atomic oxygen, which combines with O2 to form tropospheric ozone (O3) and peroxyacetyl nitrate (PAN), causing severe respiratory irritation, bronchial damage, and eye stinging.",
         "3. Industrial Control Equipment:",
         "• Electrostatic Precipitators (ESP): High-voltage ionization wires (-50 kV) discharge electrons to impart negative electrical charges onto passing dust particulates; grounded collecting plates attract and capture particles with over 99 percent removal efficiency.",
         "• Wet Scrubbers: Spray lime slurry into flue gas streams to neutralize acid gases (SO2), precipitating calcium sulfate sludge."
     ]},
    {"id": "bsc-es-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe Municipal Solid Waste Management (MSWM). Detail the hierarchy of waste reduction, composting, sanitary landfill engineering, and incineration.",
     "answer_lines": [
         "1. Waste Management Hierarchy: Source Reduction and Reuse > Recycling > Energy Recovery (Waste-to-Energy) > Treatment > Sanitary Landfilling.",
         "2. Sanitary Landfill Engineering: Engineered burial site lined with an impermeable composite barrier (compacted clay layer and high-density polyethylene HDPE geomembrane). Equipped with leachate collection pipes draining to wastewater treatment facilities, and vertical gas extraction wells capturing landfill methane for power generation, preventing groundwater pollution.",
         "3. Composting: Aerobic biological decomposition of segregated organic solid waste (food scraps, yard trimmings) by thermophilic bacteria and actinomycetes, converting organic matter into stabilized nutrient-rich humus fertilizer.",
         "4. Incineration (Waste-to-Energy): Controlled high-temperature combustion (850 to 1100 degrees Celsius) of dry combustible municipal solid waste, reducing volume by 90 percent while generating high-pressure steam for electrical turbine generation; equipped with baghouse filters to capture toxic dioxins."
     ]},
    {"id": "bsc-es-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Global Climate Change and the Greenhouse Effect. Detail greenhouse gases, global warming potentials, oceanic acidification, and sea-level rise.",
     "answer_lines": [
         "1. Mechanism of the Greenhouse Effect: Solar shortwave radiation passes through the atmosphere and warms the Earth's surface. The terrestrial surface re-radiates energy as longwave infrared thermal radiation. Greenhouse gases absorb and re-emit this thermal infrared radiation back to the surface, maintaining a habitable global average temperature of 15 degrees Celsius.",
         "2. Major Anthropogenic Greenhouse Gases:",
         "• Carbon Dioxide (CO2): Primary driver from fossil fuel combustion and tropical deforestation; baseline reference with Global Warming Potential (GWP) of 1.",
         "• Methane (CH4): Released from ruminant livestock enteric fermentation, flooded rice paddies, and natural gas leaks (GWP of 28 over 100 years).",
         "• Nitrous Oxide (N2O): Agricultural fertilizer application (GWP of 265).",
         "• Fluorinated Gases (HFCs, SF6): Industrial refrigerants and insulators (GWP up to 23,000).",
         "3. Environmental Consequences: Melting of polar ice sheets and thermal expansion of seawater driving global sea-level rise; elevated oceanic absorption of CO2 forming carbonic acid, driving ocean acidification that dissolves aragonite calcium carbonate shells of corals and shellfish."
     ]},
    {"id": "bsc-es-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe the Environmental Impact Assessment (EIA) process. Detail screening, scoping, baseline data collection, impact prediction, public hearing, and EMP.",
     "answer_lines": [
         "1. Purpose of EIA: A systematic anticipatory planning tool to identify, predict, and evaluate environmental and social impacts of proposed developmental projects prior to regulatory clearance.",
         "2. Sequential Stages of EIA:",
         "• Screening: Determines whether a project requires full comprehensive EIA, rapid EIA, or environmental exemption based on statutory project categories.",
         "• Scoping: Defines spatial boundaries, key issues, terms of reference (ToR), and significant environmental parameters to be analyzed.",
         "• Baseline Data Collection: Comprehensive monitoring of ambient air quality, water resources, noise levels, soil chemistry, terrestrial biodiversity, and socioeconomic profiles.",
         "• Impact Prediction and Evaluation: Modeling future environmental degradation during construction and operational phases.",
         "• Public Consultation and Hearing: Engaging local project-affected communities to voice grievances, socio-ecological concerns, and rehabilitation demands.",
         "• Environmental Management Plan (EMP): Outlines binding mitigation measures, effluent treatment targets, compensatory afforestation, and post-clearance compliance monitoring."
     ]},
    {"id": "bsc-es-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Discuss Water Pollution and its abatement. Detail physical, chemical, and biological water quality parameters (BOD, COD, DO), and industrial wastewater treatment.",
     "answer_lines": [
         "1. Water Quality Parameters:",
         "• Dissolved Oxygen (DO): Healthy freshwater supports 6 to 8 mg/L. Drop below 4 mg/L causes extensive fish mortality.",
         "• Biochemical Oxygen Demand (BOD): Milligrams of oxygen consumed per liter by aerobic microorganisms decomposing organic matter over 5 days at 20 degrees Celsius.",
         "• Chemical Oxygen Demand (COD): Milligrams of oxygen required to chemically oxidize all organic compounds using boiling potassium dichromate in acid; COD is always greater than BOD.",
         "2. Industrial Effluent Treatment Plant (ETP) Architecture:",
         "• Primary: Bar screens for solids, grit chambers, equalization tanks, and flash flocculation with alum/polyacrylamide.",
         "• Secondary Biological: Aerated activated sludge tanks or moving bed biofilm reactors (MBBR) where heterotrophic microbes degrade dissolved organic carbon.",
         "• Tertiary Advanced: Sand filtration, activated carbon adsorption to remove toxic color/phenols, and reverse osmosis for Zero Liquid Discharge (ZLD)."
     ]}
])

add_paper("env_sci_set2", [
    {"id": "bsc-es-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is the Montreal Protocol and what was its global environmental achievement?",
     "answer_lines": ["An international treaty adopted in 1987 that successfully phased out the production and consumption of ozone-depleting substances (chlorofluorocarbons, halons), enabling the progressive recovery of the stratospheric ozone layer."]},
    {"id": "bsc-es-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define carbon footprint and carbon offset.",
     "answer_lines": ["Carbon footprint is the total greenhouse gas emissions (in CO2 equivalents) caused directly and indirectly by an individual, organization, or product. Carbon offset is a reduction in emissions made elsewhere (reforestation, wind farms) to compensate for a footprint."]},
    {"id": "bsc-es-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What are Ramsar Sites?",
     "answer_lines": ["Wetlands of international ecological significance designated under the Ramsar Convention on Wetlands (1971) to ensure the conservation and sustainable utilization of aquatic habitats."]},
    {"id": "bsc-es-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Differentiate between point source and non-point source water pollution.",
     "answer_lines": ["Point source pollution enters water bodies from a single, identifiable, localized pipe or discharge outlet (industrial effluent pipe). Non-point source pollution enters diffusely over widespread geographic areas (agricultural pesticide and fertilizer runoff)."]},
    {"id": "bsc-es-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the primary objectives of the Water (Prevention and Control of Pollution) Act, 1974.",
     "answer_lines": ["To prevent and control water pollution, maintain or restore the wholesomeness of water bodies, and establish Central and State Pollution Control Boards with statutory enforcement powers."]},
    {"id": "bsc-es-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Solar Energy Technologies. Differentiate between Photovoltaic (PV) solar cells and Concentrated Solar Power (CSP) systems, and discuss energy storage.",
     "answer_lines": [
         "1. Solar Photovoltaic (PV) Technology: Exploits the photovoltaic effect in semiconductor silicon p-n junctions. Photons with energy greater than the bandgap excite valence electrons to the conduction band, generating electron-hole pairs separated by the built-in electric field, producing direct current (DC) electricity.",
         "2. Concentrated Solar Power (CSP): Utilizes parabolic trough mirrors or central receiver heliostat towers to focus direct beam sunlight onto a heat-absorbing fluid (synthetic oil or molten salts), generating high-temperature steam (400 to 600 degrees Celsius) that drives a conventional Rankine steam turbine generator.",
         "3. Thermal and Battery Energy Storage: Molten salt tanks (binary mixture of sodium and potassium nitrates) store high-temperature sensible heat during daylight hours, allowing CSP plants to dispatch electricity through nighttime peak demand hours; Lithium-ion battery packs provide rapid frequency stabilization."
     ]},
    {"id": "bsc-es-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe Electronic Waste (E-Waste) management. Detail hazardous heavy metal constituents, informal recycling hazards, and Extended Producer Responsibility (EPR).",
     "answer_lines": [
         "1. Composition of E-Waste: Discarded electronic devices containing valuable precious metals (gold, silver, copper, platinum) along with severe hazardous toxins: lead in CRT funnel glass and solder, mercury in cold-cathode fluorescent backlights, cadmium in rechargeable batteries, and brominated flame retardants (BFRs) in circuit boards.",
         "2. Informal Recycling Hazards: Unregulated crude recycling practices (acid chemical leaching over open fires, primitive solder desoldering, open burning of insulated copper wiring) release toxic polycyclic aromatic hydrocarbons, airborne lead fumes, and dioxins into surrounding air and soils.",
         "3. Extended Producer Responsibility (EPR): Environmental policy approach making electronic manufacturers legally and financially responsible for the post-consumer lifecycle collection, channelization, recycling, and safe disposal of their end-of-life electronic hardware."
     ]},
    {"id": "bsc-es-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Noise Pollution. Define decibel scale, noise limits in residential/industrial zones, physiological and psychological health impacts, and mitigation engineering.",
     "answer_lines": [
         "1. Decibel (dB) Scale: Logarithmic measurement of sound pressure level relative to the human hearing threshold of 20 micropascals: SPL = 20 * log10(P / P0).",
         "2. Permissible Ambient Noise Standards (CPCB India):",
         "• Industrial Area: 75 dB(A) daytime, 70 dB(A) nighttime.",
         "• Commercial Area: 65 dB(A) daytime, 55 dB(A) nighttime.",
         "• Residential Area: 55 dB(A) daytime, 45 dB(A) nighttime.",
         "• Silence Zone (around hospitals, schools): 50 dB(A) daytime, 40 dB(A) nighttime.",
         "3. Health Effects: Chronic exposure above 85 dB causes irreversible acoustic trauma, permanent sensorineural hearing loss, hypertension, cardiovascular vasoconstriction, sleep fragmentation, and elevated cortisol stress hormones.",
         "4. Mitigation Engineering: Acoustic dampening enclosures for industrial compressor generators, roadside vegetative green belt screens (planting dense foliage trees like neem and ashoka), and airport acoustic flight zoning."
     ]},
    {"id": "bsc-es-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Sustainable Development Goals (SDGs). Detail the concept of Circular Economy and resource recovery versus linear 'take-make-dispose' models.",
     "answer_lines": [
         "1. United Nations Sustainable Development Goals (SDGs): A collection of 17 global interlinked goals adopted in 2015 to be achieved by 2030, balancing socioeconomic prosperity with environmental protection (including SDG 6: Clean Water, SDG 7: Clean Energy, SDG 12: Responsible Consumption, SDG 13: Climate Action).",
         "2. Linear vs. Circular Economy Models:",
         "• Linear Economy ('Take-Make-Dispose'): Natural resources extracted, transformed into single-use consumer products, and dumped as toxic waste in landfills.",
         "• Circular Economy: Industrial restorative model engineered by design. Restructures material flows into closed-loop cycles where waste from one production process becomes feedstock for another.",
         "3. Core Principles of Circular Economy: Design out waste and toxic pollution; keep biological and technical materials in circulation at highest value through remanufacturing, refurbishing, and recycling; and regenerate living natural environmental systems."
     ]},
    {"id": "bsc-es-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe the Wildlife Protection Act, 1972 and the Forest Conservation Act, 1980 in India. Detail protected species schedules and forest land diversion regulations.",
     "answer_lines": [
         "1. Wildlife Protection Act, 1972: Primary statutory legislation for biodiversity conservation in India. Establishes legal framework for declaring National Parks and Wildlife Sanctuaries; regulates hunting, trade, and commercial possession of wild fauna and flora.",
         "• Scheduled Protection: Schedules I and II provide absolute statutory protection with stringent criminal penal sanctions for poaching (e.g., tiger, elephant, rhinoceros, blackbuck).",
         "2. Forest Conservation Act, 1980: Enacted to arrest widespread indiscriminate deforestation and diversion of pristine forest lands for non-forestry agricultural or commercial industrial projects.",
         "• Statutory Mandate: Strictly mandates that no State Government or local authority can de-reserve reserved forests or divert forest land for mining, hydro-dams, or highways without prior statutory clearance from the Central Ministry of Environment, Forest and Climate Change (MoEFCC), enforcing mandatory Compensatory Afforestation Fund (CAMPA) payments."
     ]}
])

with open("scripts/bsc_sem2_part6.json", "w", encoding="utf-8") as f:
    json.dump(papers, f, indent=2)

print("Part 6 written.")
