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
# 10. MOLECULAR BIOLOGY & GENETIC ENGINEERING (B.Sc)
# =========================================================================
add("Molecular Biology & Genetic Engineering", 1, "DNA Replication", [
    "Semiconservative Replication Paradigm: Meselson-Stahl experiment (1958) demonstrating semiconservative replication utilizing 15N and 14N isotopic equilibrium density gradient centrifugation in CsCl.",
    "Prokaryotic Origin of Replication (oriC): 245 base-pair sequence in E. coli containing three 13-mer AT-rich repeats and four 9-mer DnaA binding motifs; DnaA oligomerization induces duplex melting.",
    "Replication Fork Helicase & Primase Assembly: DnaB helicase unwinds double helix (5' to 3' polarity, hexameric ring, ATP-dependent); Single-Strand DNA-Binding proteins (SSB) stabilize separated strands; DnaG primase synthesizes 10-12 nucleotide RNA primers.",
    "DNA Polymerase III Holoenzyme Architecture: Asymmetric dimeric core (alpha polymerase, epsilon 3'-5' proofreading exonuclease, theta); Beta sliding clamp dimer conferring high processivity; Gamma complex clamp loader (ATP-driven).",
    "Continuous & Discontinuous Strand Synthesis: Leading strand synthesized continuously toward moving fork (5' to 3'); Lagging strand synthesized discontinuously away from fork in Okazaki fragments (1000-2000 nt in bacteria, 100-200 nt in eukaryotes).",
    "Okazaki Fragment Maturation: DNA Polymerase I utilizes 5' to 3' exonuclease (nick translation) to degrade RNA primer while filling gap with dNTPs; DNA Ligase seals nick by forming phosphodiester bond via NAD+ (bacteria) or ATP (eukaryotes).",
    "Topological Strain & DNA Topoisomerases: Helicase advancement introduces positive supercoiling ahead of fork; Type I topoisomerase creates transient single-strand nick; Type II (DNA Gyrase in E. coli) introduces negative supercoils via double-strand breaks.",
    "Eukaryotic DNA Polymerases Specialization: Pol alpha (associated with primase; initiates replication); Pol delta (synthesizes lagging strand; PCNA sliding clamp); Pol epsilon (synthesizes leading strand with high fidelity); Pol gamma replicates mitochondrial DNA.",
    "End-Replication Problem & Telomerase Activity: Inability of linear eukaryotic chromosomes to replicate 3' terminal lagging end after RNA primer removal; Telomerase (ribonucleoprotein reverse transcriptase TERT + TERC RNA template) synthesizes tandem repetitive hexanucleotide repeats (TTAGGG in humans).",
    "University Examination Strategy: Detail the Meselson-Stahl experiment with CsCl banding patterns, draw and label the comprehensive replication fork detailing enzyme complexes, and explain the mechanism of telomerase in overcoming the end-replication crisis."
], [
    "Meselson-Stahl Centrifugation: CsCl equilibrium density gradient separates heavy 15N-15N, hybrid 15N-14N, and light 14N-14N DNA duplexes.",
    "DnaA Protein Role: Binds 9-mer motifs at oriC to induce local melting of 13-mer tandem repeats.",
    "Beta Clamp Processivity: Ring-shaped sliding clamp tethers DNA Pol III catalytic core to DNA, boosting processivity past 1,000 nucleotides/sec.",
    "Epsilon Proofreading Exonuclease: 3' to 5' exonuclease subunit of Pol III excises mispaired nucleotides, lowering replication error to 10^-7.",
    "DNA Gyrase Action: Bacterial type II topoisomerase that introduces negative supertwists into relaxed circular DNA at the expense of ATP.",
    "Okazaki Fragment Length: Approximately 1000 to 2000 nucleotides in prokaryotes, but only 100 to 200 nucleotides in eukaryotic systems.",
    "DNA Ligase Co-factor: Bacterial DNA ligase consumes NAD+; eukaryotic and bacteriophage T4 ligases require ATP to activate AMP intermediate.",
    "PCNA Eukaryotic Clamp: Proliferating Cell Nuclear Antigen forms trimeric ring analogous to bacterial beta-clamp dimer.",
    "Human Telomeric Repeat: Tandem repetitive motif 5'-TTAGGG-3' added to 3' overhang by telomerase reverse transcriptase.",
    "Viva Voce Question: Why does DNA synthesis proceed only in 5' to 3' direction? The 3' OH nucleophilic attack requires high-energy incoming 5' triphosphate."
])

add("Molecular Biology & Genetic Engineering", 2, "Transcription", [
    "Central Dogma & Transcription Fundamentals: Enzymatic synthesis of RNA from DNA template strand by DNA-dependent RNA polymerase; Non-template strand corresponds to sense/coding strand; No primer required for initiation.",
    "Bacterial RNA Polymerase Holoenzyme: Core enzyme (alpha2 beta beta-prime omega subunits; 400 kDa) capable of elongation; Sigma factor subunit (sigma-70) required for promoter recognition and open complex formation.",
    "Prokaryotic Promoter Architecture: Consensus sequences located at -10 region (Pribnow box: 5'-TATAAT-3') and -35 region (5'-TTGACA-3') upstream of transcription start site (+1); Spacer length 16-18 base pairs.",
    "Bacterial Transcription Stages: Promoter binding (closed complex), melting to open complex (transcription bubble 12-14 bp), abortive initiation, promoter clearance with sigma release, elongation (40-50 nt/sec), and termination.",
    "Prokaryotic Termination Pathways: Rho-independent (intrinsic): GC-rich inverted repeat forms stable hairpin stem-loop followed by oligo-U run causing dissociation; Rho-dependent: Hexameric ATP-dependent Rho helicase tracks along rut site on nascent RNA.",
    "Eukaryotic RNA Polymerases Specialization: RNA Pol I (synthesizes 28S, 18S, 5.8S pre-rRNA in nucleolus); RNA Pol II (synthesizes pre-mRNA and snRNAs; sensitive to alpha-amanitin); RNA Pol III (synthesizes tRNA and 5S rRNA).",
    "Eukaryotic Pol II Promoters & Basal Factors: Core promoter elements: TATA box (-25 to -30), Inr (initiator), DPE (downstream promoter element); Sequential assembly of Pre-Initiation Complex (PIC): TFIID (TBP), TFIIA, TFIIB, TFIIF, Pol II, TFIIE, and TFIIH (kinase/helicase).",
    "Post-Transcriptional 5' Capping & 3' Polyadenylation: 5' Capping: Addition of 7-methylguanosine via 5'-5' triphosphate bridge (guanylyltransferase, methyltransferase); 3' Cleavage & Polyadenylation: AAUAAA recognition signal, endonucleolytic cleavage, addition of 200-250 Adenine tail by Poly(A) Polymerase.",
    "Eukaryotic Pre-mRNA Splicing: Intron excision via two transesterification reactions; Conserved 5' splice site (GU), 3' splice site (AG), and branch-point Adenosine; Spliceosome machinery: snRNPs (U1, U2, U4, U5, U6) forming lariat intermediate; Alternative splicing generating proteomic diversity.",
    "University Examination Strategy: Diagram the prokaryotic promoter structure and holoenzyme cycle, detail the assembly of the eukaryotic PIC on Pol II promoters with TFIIH phosphorylation, and explain the biochemical mechanism of pre-mRNA splicing via lariat formation."
], [
    "Pribnow Box Sequence: Bacterial -10 consensus sequence 5'-TATAAT-3' facilitating unwinding due to AT base pairing.",
    "Sigma Factor Function: Directs RNA polymerase core enzyme specifically to promoter regions; dissociates upon elongation entry.",
    "Alpha-Amanitin Sensitivity: Toxin from Death Cap mushroom strongly inhibits RNA Pol II at low concentrations (10^-8 M).",
    "TFIIH Dual Enzymatic Activity: Contains ATP-dependent helicase to open transcription bubble and cyclin-dependent kinase to phosphorylate Pol II CTD.",
    "CTD Phosphorylation: Phosphorylation of RNA Pol II C-Terminal Domain heptapeptide repeats triggers promoter clearance and recruits processing factors.",
    "5' Cap Triphosphate Bridge: Unique 5'-to-5' triphosphate linkage protects nascent mRNA from 5' exonucleolytic degradation.",
    "Polyadenylation Signal: Conserved hexanucleotide sequence 5'-AAUAAA-3' located 10 to 30 nucleotides upstream of cleavage site.",
    "Spliceosome Lariat Linkage: Branch point Adenosine 2' OH executes nucleophilic attack on 5' splice junction forming 2'-5' phosphodiester bond.",
    "U1 snRNP Role: Base-pairs specifically with conserved 5' splice site GU dinucleotide sequence during spliceosome assembly.",
    "Exam Gold Tip: Emphasize that bacterial transcription and translation are coupled concurrently in the cytoplasm, whereas eukaryotic events are compartmentalized."
])

add("Molecular Biology & Genetic Engineering", 3, "Translation", [
    "Universal Genetic Code Characteristics: Triplet codon organization (64 codons); Degenerate / Redundant (multiple codons for same amino acid); Non-overlapping and comma-less; Universal (with rare mitochondrial exceptions); Start codon AUG (Methionine / N-formylmethionine); Stop codons: UAA (ochre), UAG (amber), UGA (opal).",
    "Wobble Hypothesis (Crick 1966): Non-standard base-pairing between 5' base of tRNA anticodon (position 1) and 3' base of mRNA codon (position 3); Inosine base pairing flexibility (pairs with U, C, or A), enabling fewer than 61 tRNAs to decode all 61 codons.",
    "tRNA Structure & Aminoacyl-tRNA Synthetase Fidelity: Cloverleaf secondary structure (acceptor stem with CCA-3', D-loop, anticodon loop, T-psi-C loop); Two-step aminoacylation: Amino Acid + ATP -> Aminoacyl-AMP + PPi, followed by transfer to 2'/3' OH of tRNA; Proofreading hydrolytic editing site.",
    "Ribosome Structural Organization: Prokaryotic 70S ribosome (50S large subunit with 23S and 5S rRNAs; 30S small subunit with 16S rRNA); Eukaryotic 80S ribosome (60S subunit with 28S, 5.8S, 5S rRNAs; 40S subunit with 18S rRNA); Three binding sites: A (aminoacyl), P (peptidyl), E (exit).",
    "Prokaryotic Translation Initiation: Shine-Dalgarno sequence (5'-AGGAGG-3') on mRNA base-pairs with 3' end of 16S rRNA; Initiation factors IF-1, IF-2-GTP, IF-3; Positioning of initiator N-formylmethionyl-tRNA (fMet-tRNA) directly into ribosomal P-site.",
    "Eukaryotic Translation Initiation: Cap-dependent scanning mechanism; eIF4F complex (eIF4E cap-binding, eIF4A helicase, eIF4G scaffold) binds 5' cap; 43S pre-initiation complex scans 5' UTR to identify Kozak consensus sequence (5'-ACCAUGG-3').",
    "Polypeptide Elongation Cycle: Elongation factors EF-Tu-GTP delivering cognate aminoacyl-tRNA to A-site; Peptidyl transferase center (ribozyme activity of 23S/28S rRNA) catalyzing peptide bond formation; EF-G-GTP driven translocation advancing ribosome by one codon.",
    "Translation Termination & Ribosome Recycling: Stop codon entry into A-site recognized by Release Factors (RF-1 for UAA/UAG; RF-2 for UAA/UGA in bacteria; eRF1 in eukaryotes); Hydrolysis of ester bond releasing nascent polypeptide; RRF (Ribosome Recycling Factor) and EF-G split subunits.",
    "Inhibitors of Protein Synthesis (Antibiotics): Tetracycline (blocks A-site aminoacyl-tRNA binding); Chloramphenicol (inhibits peptidyl transferase on 50S subunit); Streptomycin (binds 30S subunit, causes misreading); Puromycin (causes premature chain termination by mimicking tyrosyl-tRNA); Cycloheximide (inhibits eukaryotic 60S translocation).",
    "University Examination Strategy: Explain the Wobble Hypothesis with base-pairing tables, detail the three-stage elongation cycle catalyzed by EF-Tu, peptidyl transferase, and EF-G, and contrast bacterial vs eukaryotic translation initiation."
], [
    "Shine-Dalgarno Sequence: Bacterial ribosome-binding site located 8 base pairs upstream of AUG; binds anti-SD sequence of 16S rRNA.",
    "Aminoacyl-tRNA Synthetase Editing: Hydrolyzes incorrect amino acids at proofreading pocket, achieving error rate under 1 in 10,000.",
    "Peptidyl Transferase Ribozyme: 23S rRNA in bacteria and 28S rRNA in eukaryotes possess intrinsic peptidyl transferase catalytic activity.",
    "EF-Tu GTP Hydrolysis: Acts as kinetic proofreading timer; GTP hydrolysis occurs only upon correct codon-anticodon pairing.",
    "Puromycin Analogue Action: Structural analogue of aminoacyl-adenosine terminus of tRNA; enters A-site and induces premature peptidyl release.",
    "Wobble Inosine Pairing: Inosine at first anticodon base position can form non-Watson-Crick pairs with Uracil, Cytosine, or Adenine.",
    "Kozak Consensus Context: Optimal eukaryotic initiation context 5'-(gcc)gccRccAUGG-3' where R is purine (Adenine or Guanine).",
    "Polysome Complex: Multiple ribosomes translating single mRNA strand simultaneously, greatly accelerating protein production.",
    "Stop Codon Recognition: Stop codons are recognized directly by release factor proteins, not by any complementary suppressor tRNAs.",
    "Exam Gold Tip: Always note that the initiator tRNA enters the ribosomal P-site directly, while all subsequent aminoacyl-tRNAs enter the A-site."
])

add("Molecular Biology & Genetic Engineering", 4, "Cloning Vectors", [
    "Recombinant DNA Technology Foundational Tools: Type II Restriction Endonucleases (cleave palindromic sequences generating cohesive sticky or blunt ends; EcoRI, BamHI, HindIII); T4 DNA Ligase (catalyzes phosphodiester bond formation between 5'-phosphate and 3'-hydroxyl termini).",
    "Essential Structural Components of Cloning Vectors: Autonomous origin of replication (ori) ensuring high copy number, Multiple Cloning Site (MCS / polylinker) containing unique restriction sites, and Selectable Marker genes (antibiotic resistance).",
    "Plasmid Vector pBR322 Architecture: Standard circular plasmid (4,361 bp); ColE1 ori; Dual antibiotic selection markers: ampicillin resistance (ampR / bla) and tetracycline resistance (tetR); Insertional inactivation selection mechanism (e.g. cloning in BamHI site inactivates tetR).",
    "High-Copy Plasmid Vector pUC19: Compact plasmid (2,686 bp) with high copy number mutation in ori; Polylinker inserted inside beta-galactosidase alpha-peptide gene (lacZ'); Blue-white colony screening on agar containing X-gal and IPTG.",
    "Blue-White Selection Biochemistry: Recombinant insertion in MCS interrupts lacZ' reading frame, preventing alpha-complementation of host lacZ-DeltaM15; Non-recombinants produce functional beta-galactosidase, cleaving colorless X-gal to form deep blue 5,5'-dibromo-4,4'-dichloro-indigo colonies.",
    "Bacteriophage Lambda Vectors: Insertion vectors (lambda gt10, gt11) and Replacement vectors (lambda EMBL3, Charon 40); Accommodates larger genomic inserts (up to 20-25 kb); In vitro lambda phage head packaging mechanism utilizing cos sites.",
    "Cosmid Vectors for Large Genomic Inserts: Hybrid plasmids containing lambda phage cohesive end sites (cos sites) plus plasmid ori and antibiotic marker; Packaged into lambda heads; Accommodates foreign DNA fragments of 35-45 kb.",
    "Bacterial & Yeast Artificial Chromosomes (BACs & YACs): BAC vectors based on E. coli F-plasmid replicon (single copy, stable cloning of 100-300 kb); YAC vectors containing yeast centromere (CEN), autonomous replicating sequence (ARS), and telomeres (clones up to 1-2 Mb).",
    "Expression Vectors for Recombinant Protein Synthesis: Designed for transcription and translation in host; Incorporates strong regulated promoters (lac, trp, T7 promoter), ribosome binding site (Shine-Dalgarno), ATG start codon, transcription terminator, and affinity tags (6xHis tag, GST tag).",
    "University Examination Strategy: Compare pBR322 vs pUC19 vectors detailing selectable markers and insertional inactivation, explain the biochemical principle of blue-white colony screening with X-gal, and summarize vector insert size capacities."
], [
    "Type II Restriction Enzyme Hallmark: Cleaves within or immediately adjacent to symmetric palindromic recognition sequences without ATP.",
    "EcoRI Recognition Sequence: Palindromic hexanucleotide sequence 5'-GAATTC-3', producing 5' cohesive four-base sticky overhangs.",
    "Insertional Inactivation Rationale: Foreign gene ligation into marker gene disrupts coding sequence, causing loss of that specific phenotype.",
    "Alpha-Complementation Basis: Vector-encoded N-terminal peptide complements defective host-encoded C-terminal beta-galactosidase subunit.",
    "X-Gal Chromogenic Cleavage: Beta-galactosidase cleaves 5-bromo-4-chloro-3-indolyl-beta-D-galactoside into insoluble bright blue indigo dye.",
    "IPTG Non-Metabolizable Inducer: Isopropyl beta-D-1-thiogalactopyranoside binds Lac repressor, inducing transcription without being consumed.",
    "Cosmid Vector Size Limit: Accommodates genomic DNA inserts between 35 and 45 kilobase pairs, ideal for genomic library construction.",
    "BAC F-Factor Replicon: ParA and ParB partitioning proteins ensure strict single-copy maintenance, preventing chimeric rearrangements.",
    "6xHis-Tag Purification: Polyhistidine tag binds nickel-nitrilotriacetic acid (Ni-NTA) resin with high affinity in immobilized metal affinity chromatography.",
    "Exam Scoring Tip: State clearly that plasmid transformation produces low insert yields if vectors are not treated with alkaline phosphatase to prevent self-ligation."
])

add("Molecular Biology & Genetic Engineering", 5, "Gene Therapy", [
    "Conceptual Definition & Classification of Gene Therapy: Introduction, alteration, or replacement of therapeutic genes to correct genetic disorders or disease; Somatic gene therapy (modifications restricted to patient tissues, non-inheritable) vs Germline gene therapy (modifications in gametes, inheritable, strictly restricted).",
    "Ex Vivo vs In Vivo Gene Delivery Paradigms: Ex vivo: Patient cells (e.g. hematopoietic stem cells) harvested, genetically modified in culture, selected, and re-infused; In vivo: Therapeutic vector injected directly into patient bloodstream or target tissue (e.g. liver, retina, muscle).",
    "Viral Vectors: Retroviruses & Lentiviruses: Retroviral vectors (Moloney murine leukemia virus) integrate into dividing host cells; Lentiviral vectors (derived from HIV-1) efficiently transduce both dividing and non-dividing cells (neurons, hematopoietic stem cells) with long-term expression.",
    "Viral Vectors: Adenoviruses & Adeno-Associated Viruses (AAV): Adenoviral vectors (double-strand DNA, non-integrating episomal, high immunogenicity); Adeno-Associated Virus (AAV; single-strand DNA, non-pathogenic, long-term episomal persistence in post-mitotic tissues like retina and liver).",
    "Non-Viral Gene Delivery Strategies: Lipofection (cationic liposomes encapsulating anionic DNA), Polyethylenimine (PEI) polymer nanoparticles, Electroporation (pulsed electrical field creates transient membrane pores), Gene gun (gold microprojectiles), and Hydrodynamic injection.",
    "Clinical Case Study: SCID-X1 & ADA-SCID Therapy: First successful human gene therapy (1990) for Adenosine Deaminase Severe Combined Immunodeficiency (ADA-SCID) using ex vivo retroviral transduction of T-lymphocytes; SCID-X1 therapy and insertional oncogenesis complications.",
    "CRISPR-Cas9 Genome Editing Technology: Bacterial adaptive immune system adapted for targeted genome modification; Components: Cas9 endonuclease and single guide RNA (sgRNA); Target recognition via 20 nt guide sequence complementary to DNA adjacent to Protospacer Adjacent Motif (PAM: 5'-NGG-3').",
    "DNA Double-Strand Break Repair Pathways: Cas9 introduces blunt double-strand break (DSB) 3 bp upstream of PAM; Repaired via: Non-Homologous End Joining (NHEJ; error-prone, introduces indels causing gene knockout) or Homology-Directed Repair (HDR; precise template-directed gene correction).",
    "Safety Hazards, Immunogenicity & Ethical Frontiers: Insertional mutagenesis activating oncogenes (e.g. LMO2 activation leading to leukemia), off-target Cas9 cleavage mutations, neutralizing antibodies against viral capsids, and bioethical concerns surrounding human germline editing.",
    "University Examination Strategy: Contrast ex vivo vs in vivo gene therapy pathways, explain the molecular mechanism of CRISPR-Cas9 genome editing with PAM recognition, and discuss viral vs non-viral vector safety profiles."
], [
    "Somatic vs Germline Distinction: Somatic alterations cure individual patient without passing changes to progeny; Germline edits alter future generations.",
    "AAV Therapeutic Superiority: Recombinant AAV lacks rep/cap genes, displays minimal host immune reaction, and sustains long-term episomal expression.",
    "PAM Motif Criticality: Cas9 will strictly not cleave target DNA unless 5'-NGG-3' Protospacer Adjacent Motif is directly flanking target site.",
    "NHEJ Error-Prone Repair: Non-Homologous End Joining ligates broken DNA ends without template, frequently causing frameshift insertions/deletions.",
    "HDR Precision Editing: Homology-Directed Repair utilizes exogenous donor DNA template to achieve nucleotide-level gene replacement.",
    "Lipofection Complexation: Cationic polar heads of liposome electrostatically bind anionic phosphate backbone of DNA duplex.",
    "Insertional Oncogenesis Risk: Retroviral provirus integration near cellular proto-oncogenes can drive aberrant over-expression and malignancy.",
    "Adenoviral Vector Limitation: High innate immune response and transient non-integrating expression restrict repeat systemic administrations.",
    "ADA-SCID Historic Significance: Ashanti DeSilva treated successfully in 1990 by W. French Anderson via retroviral transduction of ADA cDNA.",
    "Bioethics Golden Rule: International regulatory consensus currently prohibits inheritable human germline gene editing due to off-target risks."
])

# =========================================================================
# 11. MOLECULAR BIOLOGY LAB (B.Sc)
# =========================================================================
add("Molecular Biology Lab", 1, "Molecular Biology: Laboratory Safety Protocols & Instrumentation", [
    "Molecular Biology Laboratory Biosafety (BSL-1 & BSL-2): Good laboratory practices, aerosol containment, personal protective equipment (PPE: lab coats, nitrile gloves, eye protection), and biosafety cabinets (Class II Type A2 laminar flow).",
    "Hazardous Chemical Handling & Waste Segregation: Protocols for Ethidium Bromide (potent mutagen/intercalator; decontamination via activated charcoal filtration or chemical inactivation), Acrylamide (neurotoxin; preparation in fume hood), and Phenol-Chloroform.",
    "Micropipette Calibration & Operation Precision: Air displacement micropipettes (P10, P20, P100, P200, P1000); Operating protocols: First stop for aspiration, second stop for dispensing; Gravimetric calibration checking volume accuracy with analytical balance and deionized water.",
    "High-Speed Microcentrifuges & Rotors: Fixed-angle and swinging-bucket microcentrifuges; Symmetric balancing of sample tubes to prevent rotor shaft deformation; Relative Centrifugal Force (RCF / g) vs RPM conversion formula: RCF = 1.118 x 10^-5 x r x (RPM)^2.",
    "Horizontal Agarose Gel Electrophoresis Apparatus: Acrylic buffer tank, platinum electrode terminals, gel casting tray, gasket dam casting system, and well-forming combs (8-well, 15-well); Regulated DC power supply (constant voltage / constant current modes).",
    "Thermal Cycler (PCR Machine) Instrumentation: Peltier-effect solid-state heating and cooling blocks (ramping rates 3-5 degrees C/sec); Heated lid technology (105 degrees C) preventing sample evaporation and condensation on tube caps.",
    "UV Transilluminator & Gel Documentation System: High-intensity ultraviolet light table (302 nm UV-B or 365 nm UV-A) excitation of intercalated fluorophores; Digital CCD darkroom camera and analysis software; Mandatory UV face shields.",
    "Autoclave Sterilization for Molecular Reagents: Wet steam sterilization cycle: 121 degrees C, 15 psi pressure for 20-30 minutes; Autoclaving pipette tips, microcentrifuge tubes, glass bottles, and buffers; Treatment of water with Diethyl Pyrocarbonate (DEPC) for RNase inactivation.",
    "Ultraviolet-Visible Spectrophotometer & Microvolume Analysis: Dual-beam UV-Vis spectrophotometers and microvolume systems (e.g. NanoDrop); Optical path length 10 mm (cuvettes) or 1 mm (pedestal capillary surface tension); Absorbance measurement at 260 nm and 280 nm.",
    "University Examination Strategy: Detail micropipette gravimetric calibration steps and error tolerance, explain the safety precautions and disposal protocols for Ethidium Bromide, and calculate RCF from centrifuge RPM and rotor radius."
], [
    "DEPC RNase Inactivation: Diethyl pyrocarbonate alkylates histidine residues in RNases; must be autoclaved to decompose into ethanol and CO2.",
    "Ethidium Bromide Mutagenicity: Planar phenanthridine ring intercalates between stacked base pairs, distorting double helix and inducing mutations.",
    "Micropipette Two-Stop Rule: Push to first stop to aspirate precise volume; push past first stop to second stop to blow out residual droplet.",
    "Centrifuge Tube Symmetric Balancing: Tubes placed opposite each other must possess identical mass (within 0.01 g) to avoid high-speed rotor damage.",
    "Heated Lid Temperature: Maintained at 105 degrees C to eliminate sample condensation onto tube tops without mineral oil overlays.",
    "RCF vs RPM Equation: Relative Centrifugal Force depends linearly on rotor radius and quadratically on revolutions per minute.",
    "UV Transilluminator Eye Safety: Exposure to 302 nm radiation causes severe corneal photokeratitis and burns; UV-blocking face shields mandatory.",
    "Peltier Thermoelectric Block: Direction of direct electric current through bismuth telluride junctions enables rapid thermal cycling.",
    "NanoDrop Surface Tension: Utilizes surface tension to hold 1-2 microliter droplet between optical pedestals without disposable cuvettes.",
    "Lab Safety Rule: Never wear laboratory gloves outside the molecular biology work zone to avoid cross-contaminating shared surfaces."
])

add("Molecular Biology Lab", 2, "Molecular Biology: Standard Preparations & Calibration Methods", [
    "Preparation of Electrophoresis Buffers (TAE & TBE): 50x TAE stock: Tris base, Glacial acetic acid, and 0.5 M EDTA (pH 8.0); 10x TBE stock: Tris base, Boric acid, and EDTA; Buffering capacity comparison (TBE provides higher buffering capacity for long runs).",
    "Agarose Gel Concentration Optimization: Preparing 0.8 percent (resolves 1-20 kb fragments), 1.0 percent (0.5-10 kb), 1.5 percent (0.2-3 kb), and 2.0 percent (100-1000 bp) agarose gels in 1x running buffer; Microwave melting without boil-over.",
    "DNA Gel Loading Dye Formulations: 6x Loading buffer composition: Bromophenol blue (migrates at approximately 300 bp in 1 percent gel), Xylene cyanol FF (migrates at ~4000 bp), and Ficoll 400 or Glycerol (30-40 percent w/v for sample density in wells).",
    "Fluorescent Intercalating Staining Reagents: Ethidium Bromide stock (10 mg/mL, stored in dark amber bottle); In-gel staining (0.5 ug/mL added to molten agarose at 55 degrees C); Post-staining in buffer tank; Safer alternative fluorophores (GelRed, SYBR Safe).",
    "Luria-Bertani (LB) Liquid & Solid Media Preparation: Formulation: 10 g Tryptone (peptides/amino acids), 5 g Yeast Extract (vitamins/cofactors), 10 g NaCl (osmotic balance) per liter; pH adjusted to 7.0 with NaOH; Addition of 1.5 percent bacteriological agar for plates.",
    "Antibiotic Stock Solutions Preparation & Filtration: Ampicillin (100 mg/mL in sterile water), Kanamycin (50 mg/mL in water), Chloramphenicol (34 mg/mL in ethanol), Tetracycline (12.5 mg/mL in 70 percent ethanol); Sterilization via 0.22 um syringe filter.",
    "Competent Cell Buffer Solutions: Preparation of ice-cold Calcium Chloride (CaCl2, 0.1 M) and Magnesium Chloride (MgCl2, 0.1 M) solutions for E. coli chemically competent cell preparation; Storing at 4 degrees C.",
    "Alkaline Lysis Solution Chemistry: Solution I (Resuspension: 50 mM glucose, 25 mM Tris-HCl pH 8.0, 10 mM EDTA); Solution II (Lysis: 0.2 N NaOH, 1 percent SDS; prepared fresh); Solution III (Neutralization: 3 M Potassium Acetate, pH 4.8).",
    "Spectrophotometer Wavelength Calibration: Verifying wavelength accuracy using holmium oxide filter (peaks at 279.3 nm, 360.8 nm); Photometric linearity check using potassium dichromate standards in acidic solution.",
    "University Examination Strategy: Provide full recipes and preparation procedures for 50x TAE buffer and 6x DNA loading dye, explain the biochemical rationale of Alkaline Lysis Solutions I, II, and III, and describe sterile filtration of antibiotic stocks."
], [
    "TAE vs TBE Buffer Resolution: TAE resolves supercoiled plasmid and high molecular weight DNA better; TBE resists overheating in extended runs.",
    "Glycerol Weighting Agent: Increases sample density relative to running buffer, ensuring DNA sinks to bottom of agarose well.",
    "Bromophenol Blue Migration: Tracking dye co-migrates with approximately 300 base pair double-stranded DNA fragments in 1 percent gel.",
    "Xylene Cyanol Migration: Co-migrates with approximately 4 kilobase double-stranded DNA fragments in 1 percent agarose.",
    "Ethidium Bromide Addition Temp: Added when agarose cools to 50-55 degrees C to prevent inhalation of volatile toxic fumes.",
    "Ampicillin Heat Sensitivity: Heat-labile antibiotic added only after autoclaved LB agar cools down to 50 degrees C before pouring plates.",
    "Alkaline Lysis Solution I (EDTA): Chelates Mg2+ ions to inactivate intracellular DNases and destabilizes bacterial outer cell wall.",
    "Alkaline Lysis Solution II (NaOH/SDS): SDS solubilizes phospholipid membrane; NaOH (pH 12.0-12.5) denatures chromosomal and plasmid DNA.",
    "Alkaline Lysis Solution III (Potassium Acetate): Lowers pH to 4.8; small plasmids reanneal rapidly, while tangled chromosomal DNA precipitates with SDS.",
    "Exam Gold Tip: Always state that Solution II must never be vortexed vigorously; gentle inversion prevents shearing genomic DNA into the plasmid extract."
])

add("Molecular Biology Lab", 3, "Molecular Biology: Core Experimental Procedures & Synthesis", [
    "Isolation of Bacterial Genomic DNA: Harvesting overnight E. coli culture; Enzymatic cell wall digestion with Lysozyme; Membrane lysis with 10 percent SDS and Proteinase K incubation (55 degrees C, 1 hour); Degradation of proteins and nucleases.",
    "Phenol-Chloroform Extraction & Phase Separation: Addition of equal volume of Tris-saturated Phenol:Chloroform:Isoamyl Alcohol (25:24:1, pH 8.0); Centrifugation (12,000 g, 10 min); Proteins denature at interphase; Nucleic acids partition into upper aqueous phase.",
    "Ethanol / Isopropanol Precipitation of Nucleic Acids: Adding 0.1 volume 3 M Sodium Acetate (pH 5.2) and 2-2.5 volumes ice-cold 100 percent ethanol (or 0.7 volume isopropanol); Incubation at -20 degrees C; Spooling or pelleting DNA; Washing pellet with 70 percent ethanol to remove salts.",
    "Plasmid DNA Isolation via Alkaline Lysis (Miniprep): Resuspending bacterial pellet in Solution I (RNase A); Adding Solution II, mixing by gentle inversion until clear/viscous; Adding ice-cold Solution III, white precipitate forms; High-speed centrifugation; Supernatant silica column binding.",
    "Agarose Gel Electrophoresis Protocol: Casting 1 percent agarose gel in 1x TAE; Placing gel into tank filled with 1x TAE; Loading 10 uL DNA mixed with 2 uL 6x loading dye; Loading 1 kb DNA ladder; Running at 5-8 V/cm field strength; Visualizing bands under UV transilluminator.",
    "Polymerase Chain Reaction (PCR) Amplification Setup: Assembly of 25 uL reaction on ice: Sterile water, 10x Taq buffer with MgCl2, 200 uM dNTP mix, 0.4 uM Forward primer, 0.4 uM Reverse primer, template DNA (10-50 ng), and 1 Unit Taq DNA Polymerase.",
    "Thermal Cycling Profile Execution: Initial denaturation (95 degrees C, 3 min); 30 cycles of: Denaturation (95 degrees C, 30 sec), Primer Annealing (Ta = Tm - 5 degrees C, 30 sec), Extension (72 degrees C, 1 min per kb); Final extension (72 degrees C, 5 min); Hold at 4 degrees C.",
    "Restriction Endonuclease Digestion of DNA: Setting up restriction digest: DNA (1 ug), 10x restriction enzyme buffer, 10-20 units restriction endonuclease (EcoRI, HindIII); Incubation at optimal temperature (37 degrees C) for 1-2 hours; Heat inactivation at 65 or 80 degrees C.",
    "Chemical Competent Cell Preparation & Heat-Shock Transformation: Harvesting early log-phase E. coli (OD600 = 0.4); Washing cells in ice-cold 0.1 M CaCl2; Adding 1-5 ng plasmid DNA to competent cells on ice (30 min); Heat shock at 42 degrees C for 45-60 seconds; Immediate chill on ice (2 min); LB outgrowth at 37 degrees C; Plating on selective antibiotic agar.",
    "University Examination Strategy: Detail the molecular steps of plasmid miniprep extraction with chemical equations, provide complete reaction mixtures and thermal cycles for PCR amplification, and explain the heat-shock transformation mechanism."
], [
    "Isoamyl Alcohol Antifoam: Prevents foaming during phase separation and ensures clean distinction between organic and aqueous layers.",
    "70 Percent Ethanol Wash: Dissolves and removes coprecipitated salts (sodium acetate) while keeping macromolecular DNA insoluble.",
    "RNase A Inclusion: Degrades cellular RNA during Miniprep resuspension, ensuring pure DNA without lower molecular weight RNA smear.",
    "Taq Polymerase Extension Rate: Thermostable Taq synthesizes approximately 1,000 base pairs per minute at optimal 72 degrees C.",
    "Primer Annealing Temperature (Ta): Calculated as 3 to 5 degrees C below melting temperature (Tm) of primer with lower Tm.",
    "Heat Shock Mechanism: Sudden temperature pulse (0 to 42 degrees C) alters membrane fluidity and creates transient pores for plasmid entry.",
    "Calcium Ion Shielding: Ca2+ cations neutralize electrostatic repulsion between negative phosphate backbone of DNA and negative bacterial LPS.",
    "Star Activity Precaution: High glycerol concentration (above 5 percent) or improper buffer causes restriction enzymes to cleave non-canonical sequences.",
    "PCR Primer Dimer Artifact: Short non-specific amplification products arising from 3' complementary base pairing between primers.",
    "Exam Gold Tip: Always mention that DNA migrates toward the positive anode (red electrode) because the sugar-phosphate backbone is negatively charged."
])

add("Molecular Biology Lab", 4, "Molecular Biology: Quantitative Data Verification & Error Analysis", [
    "Spectrophotometric Quantification of Nucleic Acids: Beer-Lambert Law application: Absorbance at 260 nm (A260); 1.0 A260 unit = 50 ug/mL double-stranded DNA = 40 ug/mL single-stranded RNA = 33 ug/mL single-stranded oligonucleotide; Concentration = A260 x Dilution Factor x 50 ug/mL.",
    "Purity Assessment via Absorbance Ratios: A260/A280 purity ratio: Pure double-stranded DNA exhibits ratio of 1.8 to 2.0; Ratio less than 1.7 indicates residual phenol or aromatic protein contamination (tryptophan, tyrosine absorbing at 280 nm); Ratio greater than 2.0 indicates RNA contamination.",
    "Secondary Purity Ratio A260/A230: Pure nucleic acids display A260/A230 ratio between 2.0 and 2.2; Ratio less than 1.8 indicates contamination by chaotropic thiocyanate salts, EDTA, carbohydrates, or residual organic solvents.",
    "Electrophoretic DNA Size & Mass Estimation: Comparison of unknown band migration against standard DNA ladder (1 kb or 100 bp ladder); Semi-logarithmic plot: Distance migrated (Rf value in mm) vs Log10 of base-pair size produces linear calibration curve.",
    "Quantitative Densitometry of Gel Bands: Band intensity proportional to total mass of DNA; Comparing band pixel intensity against calibrated ladder band mass (e.g. 50 ng standard band) using gel analysis software (ImageJ).",
    "PCR Amplification Efficiency & Primer Tm Calculation: Wallace formula for short primers: Tm = 2(A + T) + 4(G + C) degrees C; Nearest-Neighbor thermodynamic method for accurate Tm prediction; Quantification of PCR amplicon yield and primer-dimer formation.",
    "Transformation Efficiency Calculation: Formulated as: Colony Forming Units (CFU) obtained / Mass of plasmid DNA plated in micrograms; High-efficiency commercial competent cells achieve 10^7 to 10^9 CFU/ug DNA.",
    "Troubleshooting Restriction Enzyme Digestions: Partial digestion patterns (extra high molecular weight bands due to insufficient enzyme, star activity, or salt inhibition); Complete failure of digestion due to DNA methylation (Dam/Dcm methylases in E. coli).",
    "Pipetting & Dilution Error Propagation: Assessing systematic and random pipetting errors; Gravimetric coefficient of variation (CV) must be under 1-2 percent for 10-100 uL volumes; Effect of meniscus parallax and tip capillary retention on nucleic acid yield.",
    "University Examination Strategy: Solve numerical problems calculating DNA concentration and total yield from A260 and dilution factors, interpret A260/A280 ratio deviations, and calculate competent cell transformation efficiency."
], [
    "50 ug/mL Standard Metric: One absorbance unit at 260 nm pathlength corresponds to 50 micrograms per milliliter of double-stranded DNA.",
    "A260/A280 Purity Standard: Pure double-stranded DNA yields A260/A280 ratio of 1.8; pure RNA yields ratio of 2.0.",
    "Protein Contamination Hallmark: A260/A280 ratio dropping below 1.6 indicates significant aromatic protein or phenol carryover.",
    "A260/A230 Ratio Hallmark: Low A260/A230 ratio (under 1.5) indicates guanidine thiocyanate salts, ethanol, or polysaccharides.",
    "Semi-Log Linear Range: Log of DNA molecular weight is inversely proportional to migration distance through agarose matrix.",
    "Wallace Rule Formula: Simple estimation: Tm = 2*(A+T) + 4*(G+C) in degrees Celsius for oligonucleotide primers 14-20 nt long.",
    "Transformation Efficiency Formula: Efficiency (CFU/ug) = (Colonies on plate / ng DNA plated) x 1000 ng/ug.",
    "Dam Methylation Cleavage Block: Dam methylase adds methyl group to N6 of adenine in GATC; inhibits restriction enzymes like MboI and ClaI.",
    "Plasmid Conformation Migration: Supercoiled plasmid migrates fastest, followed by linear DNA, followed by open relaxed circular DNA.",
    "Exam Gold Tip: Always explain that RNA absorbs more at 260 nm per mass unit (40 ug/mL per OD) than dsDNA (50 ug/mL per OD) due to hypochromicity loss."
])

add("Molecular Biology Lab", 5, "Molecular Biology: Comprehensive Practical Record & Viva Voce", [
    "Practical Record Documentation Rigor: Complete documentation: Objective, experimental principle, reagent formulations, detailed stepwise protocol, raw gel photographs with labeled ladder lanes, spectrophotometric absorbance tables, and error analyses.",
    "Comprehensive Agarose Gel Interpretation: Diagnosing common gel artifacts: Smearing (nuclease degradation or overloaded DNA), smiley bands (voltage too high causing thermal gradient), faint bands (poor staining or low concentration), and trailing wells.",
    "Plasmid DNA Banding Pattern Analysis: Interpreting three distinct electrophoretic bands of undigested plasmid: Supercoiled (fastest migration, compact closed circular), Linear (intermediate, generated by single double-strand break), and Nicked / Relaxed open circular (slowest, single-strand nick).",
    "Viva Voce High-Yield Questions on Isolation: Why is 70 percent ethanol used instead of 100 percent for DNA washing? Why does RNA precipitate in high LiCl? What is the function of Proteinase K in cell lysis? Why is Tris-saturated phenol at pH 8.0 used for DNA rather than pH 4.5?",
    "Viva Voce Questions on Electrophoresis: Why does DNA migrate toward the positive anode? What is the role of EDTA in electrophoresis buffer? Why does high voltage cause band distortion? What is the physical basis of ethidium bromide fluorescence enhancement upon intercalating DNA?",
    "Viva Voce Questions on PCR: What are the three temperatures in a PCR cycle and their biochemical significance? Why is Taq polymerase used instead of E. coli DNA polymerase? What causes primer dimers? What is hot-start PCR and how does it reduce non-specific amplification?",
    "Viva Voce Questions on Cloning & Transformation: Why are competent cells kept strictly on ice before heat shock? What is the purpose of the 1-hour outgrowth step in SOC/LB broth after heat shock? How does blue-white selection work? What is alpha-complementation?",
    "Quality Assurance & Good Laboratory Practice (GLP): Dedicated pre-PCR clean areas and post-PCR analysis areas to prevent amplicon carryover contamination; Aerosol barrier filter tips; Negative control templates (NTC) in every PCR run.",
    "Equipment Maintenance Protocols: Periodic cleaning of electrophoresis tanks, checking platinum electrode continuity, inspecting UV transilluminator filters, and checking microcentrifuge rotor balance.",
    "University Examination Strategy: Review all viva voce question sets on DNA extraction, PCR, and transformation, draw neat diagrams showing plasmid conformational bands on agarose gels, and structure the practical record cleanly with all quantitative data."
], [
    "Supercoiled Fast Migration: Highly compact superhelical turns minimize steric friction, enabling faster migration through agarose pores.",
    "Nicked Open Circular DNA: Single-strand break relaxes supercoiling, creating large hydrodynamic diameter that retards gel migration.",
    "Phenol pH DNA Partitioning: Phenol at pH 8.0 partitions DNA into aqueous phase; at acidic pH 4.5, DNA partitions into organic phase.",
    "Proteinase K Resilient Enzyme: Active in presence of SDS and EDTA; digests native nucleases at elevated temperatures (55 degrees C).",
    "Hot-Start PCR Advantage: Polymerase remains inhibited by antibodies or chemical blocks until first 95 degrees C cycle, eliminating non-specific amplicons.",
    "Non-Template Control (NTC): PCR reaction lacking template DNA verifies absence of reagent contamination by foreign amplicon DNA.",
    "Outgrowth Period Necessity: 45 to 60 minute outgrowth at 37 degrees C allows transformed cells to express antibiotic resistance proteins before selection.",
    "Ethidium Fluorescence Boost: Intercalation into hydrophobic interior between base pairs shields fluorophore from water quenching, boosting emission 20-fold.",
    "Filter Tips Contamination Barrier: Polyethylene aerosol filter prevents liquid or aerosol droplets from entering pipette barrel.",
    "Viva Voce Golden Rule: Always articulate the precise chemical mechanism rather than giving superficial descriptive answers."
])

with open('scripts/sem3_life_complete_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
