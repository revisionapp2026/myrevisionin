import json

with open('scripts/sem3_life_complete_data.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

data = {}
for k, v in raw.items():
    sub, num = k.split(":::")
    data[(sub, int(num))] = v

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    for s in hl + kp:
        assert '$' not in s, f"Dollar sign found in {sub} U{num}: {s}"
    data[(sub, num)] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 12. BOTANY III / ZOOLOGY III (B.Sc)
# =========================================================================
add("Botany III / Zoology III", 1, "Plant Systematics", [
    "Taxonomic Hierarchy & Binomial Nomenclature: Linnaean hierarchy: Kingdom, Division, Class, Order, Family, Genus, Species; International Code of Nomenclature for algae, fungi, and plants (ICN); Principles of priority, typification (holotype, isotype, lectotype), and valid author citation.",
    "Major Classification Systems Overview: Artificial systems (Linnaeus sexual system based on stamen number); Natural systems (Bentham and Hooker's Genera Plantarum; based on pre-evolutionary overall morphological affinity); Phylogenetic systems (Engler and Prantl, Hutchinson, Takhtajan, APG IV).",
    "Bentham & Hooker System Architecture: Classification of seed plants (Dicotyledones, Gymnospermae, Monocotyledones); Dicotyledones divided into Polypetalae (Thalamiflorae, Disciflorae, Calyciflorae), Gamopetalae (Inferae, Heteromerae, Bicarpellatae), and Monochlamydeae (8 series); Practical merits in British herbaria.",
    "Angiosperm Phylogeny Group (APG IV) System: Modern cladistic classification based on molecular phylogenetic evidence (chloroplast genes rbcL, matK; nuclear 18S rDNA); Eliminates traditional artificial taxa; Recognizes monophyletic clades: Basal angiosperms (ANA grade), Magnoliids, Monocots, and Eudicots.",
    "Taxonomic Keys & Diagnostic Floras: Dichotomous keys (indented and bracketed formats); Couplets and leads; Diagnostic vegetative and floral characters; Construction of botanical keys to identify unknown specimens down to family and genus.",
    "Herbarium Techniques & International Collections: Specimen field collection in vasculum, pressing in wooden herbarium press between blotters, drying, poisoning with mercuric chloride, mounting on standard herbarium sheets (42 x 29 cm), and labeling; Role of Kew Gardens and Central National Herbarium (CAL).",
    "Chemotaxonomy & Molecular Systematics: Utilization of secondary phytoconstituents (alkaloids, betalains, glucosinolates, flavonoids) as taxonomic markers; DNA barcoding using universal plant markers (rbcL and matK); Construction of cladograms based on synapomorphies.",
    "Comparative Diagnostic Characters of Selected Families: Fabaceae (papilionaceous corolla, diadelphous stamens 9+1, marginal placentation, legume fruit); Solanaceae (oblique ovary, epipetalous stamens, persistent accrescent calyx, berry/capsule fruit); Asteraceae (capitulum head inflorescence, ray and disc florets, syngenesious anthers, cypsela fruit with pappus).",
    "Monocot Family Diagnostic Characters: Poaceae (Gramineae: hollow culms, ligulate leaves, spikelet inflorescence, lemma and palea, lodicules, feathery stigmas, caryopsis fruit); Liliaceae (trimerous perianth of 6 tepals in two whorls, epiphyllous stamens, tricarpellary syncarpous superior ovary).",
    "University Examination Strategy: Detail the Bentham and Hooker system with outline flowchart, explain dichotomous key construction with a botanical example, and state distinguishing diagnostic floral features of Fabaceae and Asteraceae."
], [
    "ICN Typification: Holotype is the single specimen designated by the original author as the nomenclatural type in the original publication.",
    "Bentham & Hooker Anomaly: Placement of Gymnospermae between Dicotyledones and Monocotyledones is the primary recognized flaw of the system.",
    "APG Cladistic Basis: Classifies flowering plants strictly into monophyletic groups based on DNA sequence phylogenies rather than single traits.",
    "Herbarium Standard Dimensions: International standard herbarium mounting sheet measures exactly 29 cm by 42 cm (11.5 x 16.5 inches).",
    "Fabaceae Stamen Pattern: Diadelphous condition where filaments of nine stamens fuse into a tube and the tenth posterior stamen remains free.",
    "Asteraceae Syngenesious Anthers: Anthers fuse laterally into a hollow tube around the style while filaments remain completely free.",
    "Solanaceae Oblique Ovary: The bicarpellary syncarpous ovary is oriented obliquely at an angle of 45 degrees to the median sagittal plane.",
    "Poaceae Fruit Type: Caryopsis: A dry, indehiscent single-seeded fruit in which the pericarp is completely fused with the seed coat.",
    "DNA Barcode Loci: Chloroplast genes rbcL and matK serve as the standard two-locus universal plant barcode for species identification.",
    "Botanical Viva Tip: Distinguish carefully between brackets and indented dichotomous keys: bracketed keys keep paired contrasting leads adjacent."
])

add("Botany III / Zoology III", 2, "Economic Botany", [
    "Origin & Domestication of Cultivated Crops: Nikolai Vavilov's eight primary centers of crop origin and genetic diversity; Concept of micro-centers and gene pools (primary, secondary, tertiary); Modern germplasm conservation in seed banks.",
    "Cereals: Botanical Origin & Processing: Rice (Oryza sativa; Poaceae): Indica, Japonica, Javanica varieties; Polishing, parboiling (retention of thiamine / Vitamin B1); Wheat (Triticum aestivum; hexaploid bread wheat 2n=42): Gluten proteins (gliadin, glutenin) conferring dough elasticity.",
    "Millets: Nutritional Value & Climate Resilience: Pearl millet (Pennisetum glaucum / Bajra), Finger millet (Eleusine coracana / Ragi; rich in calcium and dietary fiber), Sorghum (Sorghum bicolor / Jowar); C4 photosynthetic efficiency and drought tolerance.",
    "Legumes / Pulses: Protein Nutrition: Chickpea (Cicer arietinum), Pigeon pea (Cajanus cajan / Arhar), Black gram (Vigna mungo); High lysine content complementing cereal methionine deficiency; Symbiotic nitrogen fixation in sustainable crop rotation.",
    "Major Spice Crops of India: Black Pepper (Piper nigrum; Piperaceae; 'King of Spices', piperine active compound), Cardamom (Elettaria cardamomum; Zingiberaceae; 'Queen of Spices', cineole), Clove (Syzygium aromaticum; Myrtaceae; dried flower buds, eugenol), Ginger (Zingiber officinale; gingerols).",
    "Beverage Crops & Bioactive Stimulants: Tea (Camellia sinensis; Theaceae): CTC and orthodox processing, polyphenols, theine (caffeine), L-theanine; Coffee (Coffea arabica and C. canephora / robusta; Rubiaceae): Wet and dry processing, roasting, caffeine stimulant mechanism.",
    "Vegetable Oil & Fat Crops: Groundnut (Arachis hypogaea; subterranean geocarpy fruit development); Mustard (Brassica juncea; glucosinolates and erucic acid); Coconut (Cocos nucifera; endosperm yielding copra oil); Sunflower (Helianthus annuus; high polyunsaturated linoleic acid).",
    "Commercial Fiber Crops: Cotton (Gossypium hirsutum; Malvaceae): Epidermal seed hairs consisting of pure crystalline cellulose (lint and linters); Jute (Corchorus capsularis, C. olitorius; Malvaceae / Tiliaceae): Bast phloem fibers obtained via biological retting.",
    "Timber, Rubber & Resin Yielding Plants: Teak (Tectona grandis; Lamiaceae; termite-resistant timber), Sal (Shorea robusta; Dipterocarpaceae); Natural rubber (Hevea brasiliensis; Euphorbiaceae): Latex tapping from laticifer vessels, cis-1,4-polyisoprene, sulfur vulcanization.",
    "University Examination Strategy: Detail Vavilov's centers of crop diversity, trace the processing of black tea from plucking to oxidation, explain the biological retting of jute, and tabulate botanical names and bioactive principles of 5 major Indian spices."
], [
    "Vavilov Diversity Centers: Formulated that geographic regions displaying highest phenotypic diversity represent original sites of domestication.",
    "Rice Parboiling Value: Hydrothermal treatment drives water-soluble B-complex vitamins from bran into starchy endosperm, preventing beriberi.",
    "Wheat Gluten Elasticity: Gliadin confers dough extensibility, while high-molecular-weight glutenin subunits provide elastic recoil.",
    "Finger Millet Calcium Richness: Ragi grain contains exceptional calcium levels (over 340 mg/100 g), critical for bone mineralization.",
    "Clove Floral Morphology: Commercial cloves are the unopened aromatic dried flower buds of Syzygium aromaticum.",
    "Geocarpy in Groundnut: Following fertilization, the floral peg elongates downward positively geotropically, driving the ovary underground.",
    "Jute Retting Microbial Action: Anaerobic pectinolytic bacteria (Clostridium) ferment intercellular pectin lamellae, freeing bast fiber bundles.",
    "Hevea Rubber Chemistry: Natural rubber consists predominantly of cis-1,4-polyisoprene polymer suspended in colloidal laticifer fluid.",
    "Cotton Lint Purity: Cotton fibers represent single-celled epidermal trichomes of seed coat containing over 90 percent pure cellulose.",
    "Viva Question: What is the difference between green tea and black tea? Green tea is steamed to inactivate polyphenol oxidase; black tea undergoes full enzymatic oxidation."
])

add("Botany III / Zoology III", 3, "Animal Physiology", [
    "Circulatory System Mechanics & Cardiac Cycle: Human four-chambered heart anatomy; Specialized conducting system: Sinoatrial (SA) node (cardiac pacemaker, 72 bpm), Atrioventricular (AV) node (AV delay 0.1 sec), Bundle of His, and Purkinje fibers; Phases of cardiac cycle: Atrial systole, Isovolumetric contraction, Ventricular ejection, Isovolumetric relaxation, and Ventricular filling (total duration 0.8 sec).",
    "Electrocardiogram (ECG) Waveforms: P wave (atrial depolarization), PR interval (AV conduction transit time: 0.12-0.20 sec), QRS complex (ventricular depolarization: under 0.10 sec), ST segment, and T wave (ventricular repolarization); Clinical diagnosis of myocardial infarction and arrhythmias.",
    "Blood Pressure Regulation: Systolic (120 mmHg) and Diastolic (80 mmHg) pressure; Mean Arterial Pressure (MAP = Diastolic + 1/3 Pulse Pressure); Baroreceptor reflex (carotid sinus and aortic arch baroreceptors); Renin-Angiotensin-Aldosterone System (RAAS) regulating blood volume and vascular tone.",
    "Respiratory Gas Transport Mechanics: Pulmonary ventilation and alveolar gas exchange; Partial pressures: Alveolar pO2 = 104 mmHg, pCO2 = 40 mmHg; Systemic arterial pO2 = 95 mmHg; Fick's law of gas diffusion across alveolar-capillary respiratory membrane.",
    "Oxygen-Hemoglobin Dissociation Curve: Sigmoidal cooperativity curve (P50 = 26-28 mmHg); Bohr Effect: Right shift (decreased O2 affinity, enhanced unloading in tissues) triggered by elevated pCO2, low pH (acidosis), elevated temperature, and increased 2,3-Bisphosphoglycerate (2,3-BPG).",
    "Carbon Dioxide Transport in Blood: CO2 carried in three forms: Dissolved in plasma (7 percent), Carbaminohemoglobin bound to globin amino groups (23 percent), and Bicarbonate ions in plasma (70 percent); Erythrocyte Carbonic Anhydrase catalysis; Chloride shift (Hamburger phenomenon) via AE1 anion exchanger.",
    "Renal Architecture & Nephron Ultrastructure: Cortical and Juxtamedullary nephrons; Renal corpuscle (Glomerulus, Bowman's capsule with podocyte pedicels and filtration slits); Proximal Convoluted Tubule (PCT), Loop of Henle (descending and ascending limbs), Distal Convoluted Tubule (DCT), and Collecting Duct.",
    "Urine Formation: Glomerular Filtration: Glomerular Filtration Rate (GFR = 125 mL/min or 180 L/day); Net Filtration Pressure (NFP = Glomerular capillary hydrostatic pressure - Bowman capsule hydrostatic pressure - Colloid osmotic pressure = 55 - 15 - 30 = 10 mmHg); Glomerular autoregulation (myogenic mechanism and tubuloglomerular feedback via macula densa).",
    "Tubular Reabsorption, Secretion & Counter-Current Mechanism: PCT reabsorbs 65-70 percent water, Na+, and 100 percent glucose and amino acids; Counter-current multiplier in Loop of Henle and counter-current exchanger in Vasa Recta generate medullary osmotic gradient (300 to 1200 mOsm/kg); Antidiuretic Hormone (ADH / Vasopressin) inserts Aquaporin-2 water channels into collecting duct.",
    "University Examination Strategy: Draw and label the ECG waveform with physiological intervals, explain the oxygen-hemoglobin dissociation curve and Bohr effect, and diagram the renal counter-current multiplier mechanism in the loop of Henle."
], [
    "SA Node Pacemaker Rhythm: Possesses spontaneous diastolic depolarization driven by funny sodium channels (If) and T-type Ca2+ channels.",
    "Bohr Effect Physiological Value: Ensures active metabolizing tissues generating acid and CO2 automatically stimulate increased O2 release.",
    "Carbonic Anhydrase Turnover: One of the fastest enzymes, converting CO2 and water to carbonic acid in red blood cells within milliseconds.",
    "Chloride Shift Mechanism: Bicarbonate exits red cell into plasma in exchange for inward chloride ion influx via AE1 transport protein.",
    "Glomerular Net Filtration Pressure: NFP = 55 mmHg (capillary pressure) - 15 mmHg (capsular) - 30 mmHg (oncotic) = 10 mmHg.",
    "Podocyte Filtration Slits: Foot processes of visceral epithelial podocytes wrap around glomerular capillaries, leaving 25-30 nm slit diaphragms.",
    "Counter-Current Multiplier: Descending limb permeable to water; thick ascending limb actively pumps Na+ and Cl- but is impermeable to water.",
    "Vasopressin Aquaporin Action: ADH binds V2 basolateral receptors, triggering cAMP phosphorylation and apical insertion of Aquaporin-2 vesicles.",
    "Renin Release Site: Juxtaglomerular (JG) cells of afferent arteriole secrete renin in response to decreased renal perfusion pressure.",
    "Exam Gold Tip: Always distinguish between the counter-current multiplier (Loop of Henle, creates gradient) and the counter-current exchanger (Vasa Recta, preserves gradient)."
])

add("Botany III / Zoology III", 4, "Endocrinology", [
    "Endocrine Glands & Chemical Classification of Hormones: Ductless endocrine secretions delivered directly into bloodstream; Classification: Peptide/Protein hormones (Insulin, Glucagon, GH, TSH; cell-surface receptors), Steroid hormones (Cortisol, Aldosterone, Estrogen, Testosterone; intracellular receptors), and Amino acid derivatives (Thyroxine, Epinephrine).",
    "Cellular Mechanisms of Hormone Action: Hydrophilic hormones: G-protein coupled receptors (GPCRs), Adenylyl cyclase - cAMP - Protein Kinase A (PKA) cascade, and Phospholipase C - IP3/DAG - Ca2+ pathway; Lipophilic hormones: Cytosolic/nuclear receptors, hormone-receptor dimer binding to Hormone Response Elements (HRE) on DNA.",
    "Hypothalamus-Pituitary Axis (Master Control): Hypothalamic releasing and inhibiting hormones (GnRH, TRH, CRH, GHRH, Somatostatin, Dopamine); Delivered to Anterior Pituitary (Adenohypophysis) via Hypophyseal Portal System; Posterior Pituitary (Neurohypophysis) stores and releases Oxytocin and Vasopressin (ADH).",
    "Anterior Pituitary Hormones: Growth Hormone (GH; stimulates liver IGF-1 synthesis; gigantism and acromegaly), Thyroid-Stimulating Hormone (TSH), Adrenocorticotropic Hormone (ACTH), Follicle-Stimulating Hormone (FSH), Luteinizing Hormone (LH), and Prolactin.",
    "Thyroid Gland Function & Regulation: Follicular cells synthesize Thyroglobulin; Iodine uptake via Na+/I- symporter, oxidation by thyroid peroxidase (TPO), organification into monoiodotyrosine (MIT) and diiodotyrosine (DIT), and coupling into Triiodothyronine (T3) and Thyroxine (T4); Metabolic rate regulation; Graves' disease and Hashimoto's thyroiditis.",
    "Calcium Homeostasis & Parathyroid Glands: Parathyroid Hormone (PTH): Increases serum Ca2+ by stimulating osteoclast bone resorption, renal distal tubule Ca2+ reabsorption, and renal 1-alpha-hydroxylase synthesis of active Vitamin D (Calcitriol); Calcitonin (thyroid C-cells): Decreases serum Ca2+.",
    "Adrenal Gland Dual Organization: Adrenal Cortex (derived from mesoderm; three concentric zones): Zona glomerulosa (Aldosterone; mineralocorticoid), Zona fasciculata (Cortisol; glucocorticoid), Zona reticularis (Androgens); Adrenal Medulla (derived from neural crest; chromaffin cells secrete Epinephrine and Norepinephrine in fight-or-flight).",
    "Endocrine Pancreas & Glucose Homeostasis: Islets of Langerhans: Alpha cells (Glucagon; stimulates hepatic glycogenolysis and gluconeogenesis), Beta cells (Insulin; stimulates GLUT4 translocation, glycogenesis, and lipogenesis), Delta cells (Somatostatin); Pathophysiology of Type 1 vs Type 2 Diabetes Mellitus.",
    "Feedback Control Mechanisms: Negative feedback loops dominating endocrine regulation (e.g. TRH-TSH-T3/T4 axis; elevated T3/T4 inhibits hypothalamic TRH and anterior pituitary TSH); Rare positive feedback loops (e.g. estrogen surge triggering LH surge during ovulation).",
    "University Examination Strategy: Diagram the hypothalamic-hypophyseal portal axis, compare peptide vs steroid hormone signaling mechanisms, explain the synthesis and regulation of thyroid hormones, and detail blood glucose homeostasis by insulin and glucagon."
], [
    "Hypophyseal Portal System: Vascular network transporting hypothalamic releasing hormones directly to anterior pituitary without systemic dilution.",
    "T3 vs T4 Potency: T3 is 4 to 5 times more biologically potent than T4; target tissue deiodinase enzymes convert prohormone T4 into active T3.",
    "Thyroid Peroxidase (TPO) Role: Catalyzes both the oxidation of iodide to iodine and the iodination of tyrosyl residues on thyroglobulin.",
    "PTH Bone Resorption Target: PTH binds receptors on osteoblasts, which upregulate RANKL to activate osteoclast-mediated bone breakdown.",
    "Calcitriol Activation: Kidney 1-alpha-hydroxylase converts 25-hydroxyvitamin D into active 1,25-dihydroxyvitamin D (calcitriol).",
    "Aldosterone Renal Action: Upregulates epithelial sodium channels (ENaC) and Na+/K+ pumps in principal cells of late distal tubule and collecting duct.",
    "Insulin GLUT4 Translocation: Stimulates exocytosis of intracellular GLUT4 glucose transporter vesicles to skeletal muscle and adipocyte plasma membranes.",
    "Chromaffin Cell Secretion: Adrenal medullary cells secrete 80 percent Epinephrine and 20 percent Norepinephrine upon sympathetic preganglionic stimulation.",
    "Graves' Disease Autoantibody: Thyroid-stimulating immunoglobulins (TSI) bind and constitutively activate TSH receptors, causing hyperthyroidism.",
    "Exam Gold Tip: Always note that the posterior pituitary does not synthesize hormones; it merely stores and releases oxytocin and vasopressin produced in the hypothalamus."
])

add("Botany III / Zoology III", 5, "Reproductive Biology", [
    "Spermatogenesis & Male Reproductive Physiology: Testicular architecture: Seminiferous tubules, Leydig cells (secrete testosterone under LH control), and Sertoli cells (nursing cells, blood-testis barrier, androgen-binding protein under FSH control).",
    "Phases of Spermatogenesis: Spermatocytogenesis: Spermatogonia (2n) undergo mitosis; Primary spermatocytes (4n DNA) undergo Meiosis I to form secondary spermatocytes (2n DNA); Meiosis II produces haploid Spermatids (1n); Spermiogenesis: Morphological metamorphosis into flagellated Spermatozoa.",
    "Ultrastructure of Human Spermatozoon: Head (condensed chromatin nucleus capped by acrosome containing hyaluronidase and acrosin enzymes), Neck (centrioles), Middle piece (spiral mitochondrial sheath providing ATP for motility), and Principal flagellar tail (9+2 axoneme arrangement).",
    "Oogenesis & Folliculogenesis in Female Ovary: Oogonia (2n) enter Meiosis I during fetal development, arresting at prophase I (diplotene stage) as primary oocytes within primordial follicles; Follicular recruitment during menstrual cycle: Primary, Secondary, and Graafian follicle.",
    "Ovulation & Meiotic Resumption: LH surge triggers resumption of Meiosis I; Extrusion of first polar body; Arrest at metaphase II as secondary oocyte; Ovulation: Follicle wall ruptures releasing oocyte-cumulus complex into peritoneal cavity; Meiosis II completes only upon fertilization.",
    "Ovarian & Uterine Menstrual Cycles: Ovarian cycle: Follicular phase (estrogen dominant, days 1-14), Ovulation (day 14), and Luteal phase (progesterone secreted by Corpus Luteum, days 15-28); Uterine cycle: Menstrual phase, Proliferative phase (endometrial thickening), and Secretory phase.",
    "Fertilization Mechanics & Acrosome Reaction: Capacitation of sperm in female reproductive tract; Binding to zona pellucida protein ZP3; Acrosome exocytosis releasing proteolytic enzymes; Sperm-egg membrane fusion (Izumo1 on sperm binds Juno on oocyte).",
    "Blocks to Polyspermy: Fast block: Rapid depolarization of oocyte plasma membrane (-70 mV to +20 mV via Na+ influx within 2-3 seconds); Slow block (Cortical reaction): Intracellular Ca2+ wave triggers exocytosis of cortical granules; Cleaves ZP proteins and hardens zona pellucida.",
    "Blastocyst Implantation & Placental Endocrinology: Cleavage divisions form morula; Cavitation produces Blastocyst (Inner Cell Mass / embryoblast and outer Trophoblast); Apposition and invasion into decidualized endometrium (days 6-8); Syncytiotrophoblast secretes human Chorionic Gonadotropin (hCG) to maintain corpus luteum.",
    "University Examination Strategy: Compare spermatogenesis vs oogenesis detailing meiotic arrest stages, explain hormonal regulation across the 28-day menstrual cycle, and detail the cortical reaction blocking polyspermy during fertilization."
], [
    "Blood-Testis Barrier: Tight junctions between adjacent Sertoli cells isolate post-meiotic germ cells from autoimmune attack by systemic antibodies.",
    "Diplotene Arrest Duration: Female primary oocytes remain arrested at prophase I diplotene stage from embryonic life until puberty or ovulation.",
    "Metaphase II Arrest: The ovulated secondary oocyte remains arrested at metaphase II until fertilization by a penetrating sperm activates egg.",
    "Corpus Luteum Endocrine Role: Secretes abundant progesterone and estrogen to transform endometrium into a receptive, vascular secretory tissue.",
    "hCG Pregnancy Test Landmark: Human chorionic gonadotropin secreted by syncytiotrophoblast rescues corpus luteum; forms basis of urine pregnancy tests.",
    "Cortical Granule Exocytosis: Cortical enzymes cleave ZP3 receptors and crosslink ZP2, rendering the zona pellucida permanently impenetrable to additional sperm.",
    "Sperm Capacitation Process: Removal of seminal plasma glycoproteins and cholesterol efflux in female tract primes acrosome reaction.",
    "Spermiogenesis vs Spermatogenesis: Spermatogenesis is the total cellular process from spermatogonia to sperm; Spermiogenesis is merely maturation of round spermatids into flagellated sperm.",
    "Inhibin Selective Feedback: Sertoli cells secrete protein hormone inhibin, which acts on anterior pituitary to selectively suppress FSH secretion.",
    "Exam Scoring Tip: Draw a timeline correlating pituitary LH/FSH peaks, ovarian estrogen/progesterone fluctuations, and endometrial thickness across the 28-day cycle."
])

# =========================================================================
# 13. BIOINFORMATICS BASICS (B.Sc)
# =========================================================================
add("Bioinformatics Basics", 1, "Biological Databases", [
    "Foundational Scope of Bioinformatics & In Silico Biology: Convergence of computational sciences and molecular biology; High-throughput genomics, transcriptomics, and proteomics; Structural and functional annotation of biological macromolecules.",
    "Primary Nucleotide Sequence Databases (INSDC Alliance): International Nucleotide Sequence Database Collaboration: NCBI GenBank (USA), EMBL-EBI European Nucleotide Archive (ENA, Europe), and DNA Data Bank of Japan (DDBJ); Daily automated data synchronization; Accession number system.",
    "GenBank Flatfile Format Organization: Header section (Locus name, sequence length, molecule type, GenBank division, modification date); Definition line; Accession and version numbers (e.g. NM_000518.5); Source organism and taxonomy; Features table (CDS, exons, introns, translations); Sequence origin block.",
    "FASTA Data Format Standard: Universally accepted sequence representation; Single-line header beginning with greater-than symbol '>' followed by unique identifier and description; Subsequent lines containing single-letter nucleotide (IUPAC) or amino acid sequence without spaces or numbers.",
    "Protein Sequence Databases: UniProt Knowledgebase: UniProtKB/Swiss-Prot (manually curated, reviewed, high quality, non-redundant with literature citations) and UniProtKB/TrEMBL (computationally translated from EMBL CDS, unreviewed); PIR (Protein Information Resource).",
    "Macromolecular Structural Databases: Protein Data Bank (PDB): Worldwide repository for three-dimensional structural data of proteins and nucleic acids determined by X-ray crystallography, NMR spectroscopy, and Cryo-Electron Microscopy; PDB coordinate file format (ATOM, HETATM, CONECT records).",
    "Secondary & Derived Biological Databases: Conserved protein families and domain databases: Pfam (hidden Markov models of protein domains), PROSITE (protein motifs and functional pattern fingerprints), SMART (modular domain architecture), and CDD (Conserved Domain Database).",
    "Pathway & Metabolic Databases: Kyoto Encyclopedia of Genes and Genomes (KEGG): Pathway maps linking genomic data to cellular metabolic networks, biological pathways, and drug targets; Reactome: Curated human biological pathways and molecular reactions.",
    "Literature & Biomedical Retrieval Systems: PubMed: NCBI search engine for biomedical literature; PubMed Central (PMC: free full-text archive); Entrez Cross-Database Search: Integrated federated querying across 40 NCBI databases (nucleotide, protein, gene, structure, pubmed).",
    "University Examination Strategy: Explain the INSDC consortium database architecture and data synchronization, compare Swiss-Prot vs TrEMBL, dissect a GenBank flatfile record highlighting key fields, and write a valid FASTA sequence."
], [
    "INSDC Three-Way Synchronization: GenBank, ENA, and DDBJ synchronize daily updates, ensuring identical sequence data worldwide.",
    "GenBank Accession System: Permanent, unique sequence identifier; Version number increment (e.g. .1 to .2) indicates sequence update.",
    "Swiss-Prot Manual Curation: Swiss-Prot records undergo expert manual review, literature curation, and function verification.",
    "PDB ATOM Record: Specifies orthogonal coordinate positions (X, Y, Z in Angstroms), occupancy, and temperature factor (B-factor) for each atom.",
    "FASTA Header Syntax: Must begin with '>' character in column 1 followed immediately by identifier without intervening blank lines.",
    "Pfam HMM Profiles: Uses profile Hidden Markov Models to classify unknown protein sequences into conserved functional domain families.",
    "KEGG Orthology (KO): Functional ortholog identifiers that link specific genes across multiple species directly to shared pathway maps.",
    "Entrez Indexing Engine: NCBI's interconnected search system that queries multiple biological databases simultaneously via unified boolean syntax.",
    "TrEMBL Automated Entry: Unreviewed translations of nucleotide coding sequences awaiting manual Swiss-Prot biocurator validation.",
    "Bioinformatics Gold Tip: In exams, always distinguish between primary databases (experimental data, e.g. GenBank, PDB) and secondary databases (curated derivations, e.g. Pfam, KEGG)."
])

add("Bioinformatics Basics", 2, "Sequence Alignment", [
    "Biological Rationale of Sequence Alignment: Identifying regions of sequence similarity that indicate functional, structural, and evolutionary relationships; Homology concept: Divergence from common ancestor; Orthologs (speciation) vs Paralogs (gene duplication).",
    "Dot Matrix Method for Sequence Comparison: Two-dimensional matrix comparing two sequences along X and Y axes; Dot placed at intersecting cell when characters match; Diagonal lines indicate regions of sequence identity; Diagonals offset from main indicate insertions/deletions; Inverted repeats indicate hairpins.",
    "Global Alignment: Needleman-Wunsch Dynamic Programming: Aligns entire length of both sequences from end to end; Optimal for closely related sequences of similar length; Dynamic programming score matrix initialization, fill step using recurrence relation: S(i,j) = max[S(i-1,j-1)+score, S(i-1,j)+gap, S(i,j-1)+gap], and traceback from bottom-right corner.",
    "Local Alignment: Smith-Waterman Algorithm: Identifies optimal highly conserved local motifs or domains within divergent sequences; Dynamic programming matrix with non-negative boundary condition: S(i,j) = max[0, S(i-1,j-1)+score, S(i-1,j)+gap, S(i,j-1)+gap]; Traceback begins at highest positive score and terminates at zero.",
    "Scoring Schemes & Gap Penalty Models: Simple scoring: Match bonus, mismatch penalty; Affine gap penalty model: W = gamma + delta x (k-1), where gamma is high gap-opening penalty and delta is lower gap-extension penalty; Reflects biological fact that one multi-residue insertion is more probable than multiple single indels.",
    "Amino Acid Substitution Matrices: PAM (Point Accepted Mutation): Derived by Margaret Dayhoff based on closely related proteins (1 PAM = 1 percent amino acid change); PAM250 corresponds to greater evolutionary distance; PAM matrices extrapolate from close homolog data.",
    "BLOSUM (Blocks Substitution Matrix): Henikoff & Henikoff (1992); Derived from ungapped conserved sequence blocks in BLOCKS database; BLOSUM62: Sequences clustered at 62 percent identity; Standard default matrix for protein alignment (higher BLOSUM numbers like BLOSUM80 for closely related sequences; lower numbers like BLOSUM45 for distant homologs).",
    "PAM vs BLOSUM Matrix Comparison: PAM numbers increase with increasing evolutionary divergence (PAM250 for distant relatives); BLOSUM numbers decrease with increasing divergence (BLOSUM45 for distant relatives; BLOSUM62 is optimal intermediate default).",
    "Heuristic Alignment Fundamentals: Dynamic programming algorithms guarantee optimal mathematical alignment but are computationally expensive (O(m x n)); Heuristic algorithms (BLAST, FASTA) sacrifice guaranteed optimality for high computational speed.",
    "University Examination Strategy: Step-by-step hand calculation of a 4x4 Needleman-Wunsch or Smith-Waterman alignment grid showing dynamic programming fill and traceback, explain affine gap penalties, and contrast PAM vs BLOSUM substitution matrices."
], [
    "Dynamic Programming Optimality: Guarantees finding mathematically optimal alignment score according to the chosen scoring scheme.",
    "Smith-Waterman Zero Floor: Matrix values cannot drop below zero; prevents negative scores from accumulating across divergent flanking regions.",
    "Affine Gap Penalty Equation: Total penalty = Gap opening penalty + (Length - 1) x Gap extension penalty.",
    "PAM1 Definition: Unit of evolutionary divergence wherein 1 percent of amino acids have undergone accepted mutations.",
    "BLOSUM62 Design Target: Sequences sharing more than 62 percent sequence identity are clustered to reduce sampling bias.",
    "Traceback Termination SW: Smith-Waterman traceback starts at highest score in entire matrix and terminates as soon as a cell with zero is reached.",
    "Traceback Path NW: Needleman-Wunsch traceback begins strictly at lower-right cell (m,n) and traces back to upper-left origin (0,0).",
    "Ortholog vs Paralog: Orthologs arise from speciation and retain identical function; Paralogs arise from gene duplication and often diverge in function.",
    "Match Mismatch Logic: Matches receive positive rewards; conservative amino acid substitutions receive small positive/neutral scores in BLOSUM.",
    "Exam Gold Tip: Never confuse PAM and BLOSUM numbers: High PAM = distant homologs, but Low BLOSUM = distant homologs."
])

add("Bioinformatics Basics", 3, "Phylogenetics", [
    "Evolutionary Trees & Phylogenetic Terminology: Diagrammatic representation of evolutionary relationships among biological entities; Topology components: Root (common ancestor of all taxa), Internal nodes (hypothetical taxonomic units / speciation events), Terminal nodes / Leaves (extant operational taxonomic units OTUs), and Branches (evolutionary lineage).",
    "Rooted vs Unrooted Phylogenetic Trees: Rooted tree: Indicates direction of evolutionary time and identifies ancestral node; Requires an outgroup (distantly related taxon); Unrooted tree: Illustrates genetic distance and relationships among taxa without specifying evolutionary direction or ancestor.",
    "Cladogram, Phylogram & Chronogram Distinctions: Cladogram: Branch lengths are arbitrary, showing only branching order and topology; Phylogram: Branch lengths are proportional to the amount of evolutionary sequence divergence; Chronogram: Branch lengths represent absolute geological time calibrated via fossil record.",
    "Phylogenetic Analysis Workflow: Selection of homologous molecular sequences, Multiple sequence alignment (MSA) curation, Masking ambiguous alignment positions, Selection of appropriate evolutionary substitution models (Jukes-Cantor, Kimura 2-parameter, WAG, JTT), and Tree reconstruction.",
    "Distance-Based Methods: UPGMA & Neighbor-Joining (NJ): Calculation of pairwise genetic distance matrix; UPGMA (Unweighted Pair Group Method with Arithmetic Mean): Assumes constant molecular clock rate; Produces ultrametric rooted trees; Sensitive to unequal evolutionary rates.",
    "Neighbor-Joining (NJ) Algorithm: Saitou and Nei (1987); Star decomposition method; Does not assume a molecular clock; Calculates rate-corrected net divergence (Q-matrix) to pair neighbors; Robust, computationally fast, and universally applied for large datasets.",
    "Character-Based Methods: Maximum Parsimony (MP): Evaluates each aligned column independently; Identifies informative sites (minimum two character states, each present in at least two taxa); Selects the tree topology that minimizes the total number of evolutionary changes (Occam's razor).",
    "Probabilistic Methods: Maximum Likelihood (ML) & Bayesian Inference: Maximum Likelihood: Evaluates probability of observing sequence data given a tree topology and substitution model (P(Data|Tree)); Computationally intensive; Bayesian inference (MrBayes): Calculates posterior probability of tree (P(Tree|Data)) using Markov Chain Monte Carlo (MCMC).",
    "Statistical Reliability & Bootstrap Resampling: Bootstrap analysis (Felsenstein 1985): Pseudoreplicate datasets generated by random sampling with replacement from original alignment columns; Tree reconstructed for each replicate (typically 1000 iterations); Bootstrap support percentage (greater than 70-80 percent indicates robust clade confidence).",
    "University Examination Strategy: Construct a small phylogenetic tree using UPGMA algorithm from a 4x4 distance matrix showing calculations, contrast distance-based vs character-based phylogenetic methods, and explain the biological meaning of bootstrap support values."
], [
    "Molecular Clock Hypothesis: Proposes that nucleotide and amino acid substitutions accumulate at an approximately constant rate over evolutionary time.",
    "Outgroup Selection Rule: Outgroup must be clearly related to ingroup taxa but branched off prior to the radiation of the ingroup clade.",
    "UPGMA Ultrametric Flaw: Erroneously forces equal evolutionary rates across lineages; fails when evolutionary rates vary among branches.",
    "Neighbor-Joining Advantage: Handles lineage-specific evolutionary rate heterogeneity without distorting true branch length distances.",
    "Parsimony Informative Site: A position where at least two different character states are each present in at least two different taxa.",
    "Bootstrap Resampling Protocol: Random sampling with replacement across alignment columns assesses topological sensitivity to sampling noise.",
    "Clade Definition: A monophyletic group consisting of a common ancestor and all of its evolutionary descendants.",
    "Maximum Likelihood Criterion: Finds the tree topology and branch lengths that maximize the statistical likelihood of observing the input alignment data.",
    "Homoplasy Evolutionary Trap: Convergent evolution or character reversals that create misleading shared traits not derived from common ancestry.",
    "Exam Gold Tip: State that a bootstrap value of 95 percent on an internal node means that node appeared in 950 out of 1000 pseudoreplicate trees."
])

add("Bioinformatics Basics", 4, "Structural Bioinformatics", [
    "Protein Structural Hierarchy: Primary structure (amino acid covalent sequence), Secondary structure (alpha-helices, beta-pleated sheets, beta-turns, random coils stabilized by hydrogen bonds), Tertiary structure (three-dimensional spatial conformation stabilized by hydrophobic, disulfide, ionic, and van der Waals interactions), and Quaternary structure (multi-subunit oligomeric assembly).",
    "Ramachandran Plot & Backbone Dihedral Angles: Peptide bond planar geometry (partial double bond character, trans conformation, omega = 180 degrees); Torsion angles: Phi (rotation around N-C_alpha bond) and Psi (rotation around C_alpha-C bond); Steric hindrance restricts allowed conformational space; Ramachandran plot quadrants identify allowed regions for right-handed alpha-helix (Phi ~ -57, Psi ~ -47), beta-sheets (Phi ~ -120 to -140, Psi ~ +130 to +150), and left-handed alpha-helix.",
    "Secondary Structure Prediction Algorithms: Chou-Fasman method: Empirical statistical conformational parameters based on amino acid propensities for alpha-helices and beta-sheets; GOR method (Garnier-Osguthorpe-Robson): Information theory utilizing sliding window of 17 residues; Neural network methods (PSIPRED) incorporating evolutionary profiles (PSI-BLAST checkpoint matrices) achieving greater than 80 percent accuracy.",
    "Protein Tertiary Structure Determination Techniques: X-ray Crystallography (requires high-purity protein crystals; electron density maps; atomic resolution under 1.5 Angstroms; phase problem); Nuclear Magnetic Resonance (NMR; proteins in aqueous solution; NOESY interproton distances; suited for smaller proteins under 30 kDa); Cryo-Electron Microscopy (Cryo-EM; rapid vitrification; single-particle reconstruction; solves large multi-protein complexes without crystallization).",
    "Protein Structure Validation: ProCheck, WhatCheck, and MolProbity; Assessing stereochemical quality: Ramachandran plot outliers (core/favorable regions should exceed 90 percent), bond length and angle deviations, planarity of peptide bonds, bad non-bonded atomic contacts (clashscore), and rotamer distribution.",
    "Homology (Comparative) Protein Modeling: Applicable when target sequence has greater than 30 percent identity to homologous experimental template; Stepwise workflow: Template identification via BLAST against PDB, Target-Template alignment, Backbone generation, Loop modeling, Side-chain rotamer placement, Energy minimization (force fields: AMBER, CHARMM), and Model validation (ProSA, ERRAT).",
    "Fold Recognition (Threading) & Ab Initio Modeling: Threading: Fitting target sequence against library of known structural folds using empirical energy potentials when sequence similarity is low (twilight zone: 20-30 percent identity); Ab initio / De novo modeling (Rosetta): Thermodynamic conformational search guided by physical and statistical potentials without template; Machine learning revolution (AlphaFold2, ESMFold).",
    "Molecular Docking & Virtual Screening: Computational simulation of non-covalent binding between macromolecular receptor (protein) and small-molecule ligand; Search algorithms: Genetic algorithms (AutoDock), Monte Carlo simulations; Scoring functions: Estimating binding free energy (Delta-G); Identification of binding pockets (active site residues); Lead compound discovery in rational drug design.",
    "Molecular Dynamics (MD) Simulations: Integrating Newton's classical equations of motion: F = m x a over time; Simulating atomic trajectories in explicit water boxes with physiological ions (NaCl) using molecular mechanics force fields (GROMACS, NAMD, AMBER); Picosecond to microsecond conformational dynamics and protein folding.",
    "University Examination Strategy: Draw a Ramachandran plot marking the favored conformational zones for alpha-helices and beta-sheets, detail the 6 steps of homology modeling from template selection to validation, and compare X-ray crystallography vs Cryo-EM."
], [
    "Planar Peptide Bond: Delocalized pi electrons across O-C-N create 40 percent double bond character, preventing free rotation around omega axis.",
    "Ramachandran Core Quadrants: Right-handed alpha-helices locate in lower-left quadrant (Phi negative, Psi negative); Beta-sheets in upper-left quadrant.",
    "Glycine & Proline Conformational Exceptions: Glycine lacks beta-carbon, allowing wide conformational freedom; Proline's rigid pyrrolidine ring restricts Phi to -60.",
    "Twilight Zone of Homology: Below 25 to 30 percent sequence identity, homology modeling accuracy drops drastically due to template alignment errors.",
    "AutoDock Scoring Function: Estimates binding free energy by summing van der Waals, electrostatic, hydrogen bonding, and torsional entropy terms.",
    "PSIPRED Evolutionary Profiles: Position-Specific Scoring Matrices (PSSM) from PSI-BLAST provide evolutionary context that elevates prediction accuracy past 80 percent.",
    "Cryo-EM Vitrification: Plunging sample into liquid ethane (-183 degrees C) vitrifies water into amorphous non-crystalline ice, preserving native state.",
    "Energy Minimization Goal: Relieves severe steric clashes and bad bond geometries in homology models using steepest descent or conjugate gradient algorithms.",
    "AlphaFold2 Deep Learning: Utilizes Evoformer transformer networks and structural modules to predict 3D coordinates directly from MSAs with experimental accuracy.",
    "Structural Biology Exam Tip: Always verify that over 90 percent of non-glycine/proline residues reside within the most favored regions of the Ramachandran plot for acceptable models."
])

add("Bioinformatics Basics", 5, "Tools", [
    "BLAST (Basic Local Alignment Search Tool) Architecture: Altschul et al. (1990); Heuristic local alignment search engine querying biological databases; Algorithm: Word generation (k-tuples; k=3 for protein, k=11 for nucleotide), Word matching against database (filtering via neighborhood score threshold T), Ungapped High-Scoring Segment Pair (HSP) extension, and Gapped extension (dynamic programming above cutoff score S).",
    "BLAST Statistical Significance: E-value (Expect value): Number of alignments with score S or better expected to occur by chance alone in a database of size N; E = K x m x n x exp(-lambda x S); Lower E-value indicates higher statistical significance (E-value below 10^-5 indicates highly reliable homology); P-value relationship: P = 1 - exp(-E).",
    "BLAST Program Variants: BLASTN (nucleotide query vs nucleotide database); BLASTP (protein query vs protein database); BLASTX (translated six-frame nucleotide query vs protein database; identifies coding potential in genomic DNA); TBLASTN (protein query vs translated six-frame nucleotide database); TBLASTX (translated nucleotide query vs translated nucleotide database).",
    "Specialized BLAST Variants: PSI-BLAST (Position-Specific Iterated BLAST: Constructs PSSM profile from initial matches; highly sensitive in detecting distant protein homologs); PHI-BLAST (Pattern-Hit Initiated BLAST: Restricts search to sequences matching defined PROSITE pattern); MegaBLAST (rapid search for highly similar nucleotide sequences using word size k=28).",
    "Multiple Sequence Alignment (MSA) Principles: Aligning three or more biological sequences simultaneously; Essential for identifying evolutionary conserved active sites, predicting secondary/tertiary structures, and constructing phylogenetic trees; NP-hard computational problem necessitating heuristic algorithms.",
    "Progressive MSA Algorithms: ClustalW & Clustal Omega: Progressive alignment approach; Workflow: All-against-all pairwise alignment calculation, Construction of guide tree via neighbor-joining or UPGMA, and Progressive alignment along the guide tree adding sequences in order of similarity; ClustalW gap penalty rules (residue-specific, position-specific gap penalties).",
    "Iterative MSA Algorithms: MUSCLE & T-Coffee: MUSCLE (Multiple Sequence Comparison by Log-Expectation): Iterative refinement; Evaluates tree distance, modifies alignment, and recalculates guide tree; Significantly faster and more accurate than ClustalW; T-Coffee: Combines global and local pairwise alignments into consistent library before progressive tree alignment.",
    "Bioinformatics Visualization Tools: Jalview (interactive MSA editor and viewer; color coding by physicochemical properties, secondary structure, and conservation consensus); PyMOL & Chimera (3D molecular graphics visualization, surface electrostatic rendering, ligand-protein interactions); IGV (Integrative Genomics Viewer: NGS read mapping and variant inspection).",
    "EMBOSS Suite & Primer Design Software: European Molecular Biology Open Software Suite (EMBOSS): Needle (global NW), Water (local SW), Transeq (six-frame translation), Primer3 (automated PCR primer design: calculates Tm, GC content, avoids self-complementarity and hairpins).",
    "University Examination Strategy: Explain the step-by-step BLAST algorithmic search strategy with word hashing and HSP extension, detail the statistical meaning and calculation of the E-value, and compare progressive (Clustal) vs iterative (MUSCLE) MSA methods."
], [
    "BLAST Word Size Defaults: Standard word size k is 11 or 28 for nucleotides (MegaBLAST), and 3 for amino acid protein alignments.",
    "E-Value Sensitivity to Database: E-value is directly proportional to database size; searching larger databases increases chance expectation.",
    "BLASTX Six-Frame Translation: Translates unknown DNA sequence in all three forward and three reverse reading frames to detect protein homolog matches.",
    "PSI-BLAST PSSM Profile: Position-Specific Scoring Matrix captures residue conservation frequencies across multiple iterations, detecting remote homologs.",
    "Progressive Alignment Frozen Error: 'Once a gap, always a gap' rule: Early misaligned gaps cannot be corrected as new sequences are added down the guide tree.",
    "MUSCLE Iterative Refinement: Successive rounds of tree reconstruction and profile-profile realignment rectify frozen errors inherent in simple progressive algorithms.",
    "PyMOL Electrostatic Surface: Generates Poisson-Boltzmann electrostatic potential surfaces, illustrating basic cationic (blue) and acidic anionic (red) binding pockets.",
    "Primer3 Complementarity Filters: Filters out primer sequences with high self-complementarity (hairpins) or 3' end primer-pair cross-complementarity (primer-dimers).",
    "IUPAC Ambiguity Codes: Single-letter nucleic acid representations: R (A or G), Y (C or T), M (A or C), K (G or T), S (G or C), W (A or T), N (any nucleotide).",
    "Exam Gold Tip: Always state that BLAST is a heuristic algorithm that sacrifices theoretical optimality for exponential computational speed in massive sequence databases."
])

with open('scripts/sem3_life_complete_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
