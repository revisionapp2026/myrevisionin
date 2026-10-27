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
# 8. ZOOLOGY LAB III (B.Sc)
# =========================================================================
add("Zoology Lab III", 1, "Zoology  III: Laboratory Safety Protocols & Instrumentation", [
    "Biosafety Regulations in Animal Laboratory: Adherence to GLP guidelines and Institutional Animal Ethics Committee (IAEC) protocols; Safe disposal of biohazardous biological specimens, fixation waste, and sharp needles.",
    "Fixative Reagents & Chemical Precautions: Safe handling of formalin (neutral buffered formalin 10 percent), Bouin's fixative (picric acid, glacial acetic acid, formaldehyde), and Carnoy's fluid under fume hoods; Eye protection against corrosive vapors.",
    "Rotary Microtome Instrument Architecture: Precision mechanical microtome components: Knife holder, specimen clamp, micrometer feed screw mechanism, handwheel, and section thickness regulator graduated in microns (1-10 um).",
    "Microtome Knife Selection & Hone/Strop Maintenance: Steel microtome knives (wedge and biconcave profiles); Honing on Belgian yellow hone stone with liquid paraffin lubricant to restore true cutting edge; Stropping on leather strop for deburring.",
    "Paraffin Tissue Infiltration & Embedding: Tissue dehydration via ascending ethanol grades (70, 80, 90, 100 percent), dealcoholization clearing in xylene, and infiltration in molten paraffin wax (melting point 56-58 degrees C).",
    "Microtome Sectioning Mechanics: Ribbon formation of serial sections by mechanical contact between paraffin block face and razor edge; Thermal floating on warm water bath (45 degrees C) to stretch out wrinkles and folds.",
    "Slide Adhesion Techniques: Preparation of Mayer's albumin fixative (egg white and glycerin with thymol preservative); Mounting ribbon sections on clean glass slides and drying on warming plate at 40 degrees C.",
    "Ehrlich's Hematoxylin & Eosin (H&E) Staining Regimen: Progressive regressive staining principle: Basic dye hematoxylin stains acidic basophilic cell nuclei deep blue-purple; Acidic dye eosin stains basic eosinophilic cytoplasm and collagen pink-red.",
    "Slide Dehydration & DPX Mounting: Sequential dehydration through graded alcohols, clearing in pure xylene, and permanent mounting with DPX resin (distrene, plasticizer, xylene) bubble-free under glass coverslip.",
    "University Examination Strategy: Detail the progressive steps of paraffin block preparation and sectioning on a rotary microtome, explain the biochemical rationale of H&E differential staining, and list emergency first-aid protocols for xylene exposure."
], [
    "IAEC Ethic Mandate: Experimental animal procedures strictly monitored by Institutional Animal Ethics Committee.",
    "Neutral Buffered Formalin: 10 percent formalin buffered with phosphate salts at pH 7.0 prevents acid hematin pigment artifact.",
    "Rotary Microtome Feed: Micrometer screw mechanism advances paraffin specimen block in 1 to 10 micron increments per revolution.",
    "Bouin's Fluid Composition: Picric acid (saturated aqueous), 40 percent formaldehyde, and glacial acetic acid in 15:5:1 volume ratio.",
    "Mayer's Albumin Adhesive: Filtered egg white and pure glycerol in equal parts with thymol crystal to inhibit fungal growth.",
    "Water Bath Stretch Temperature: Warm water maintained at 45 degrees C softens paraffin wax to flatten ribbon wrinkles without melting.",
    "H&E Staining Specificity: Hematoxylin binds anionic nuclear nucleic acids; Eosin counterstains cationic cytoplasmic basic proteins.",
    "DPX Mounting Medium: Synthetic resin composed of Distrene, Plasticizer (tricresyl phosphate), and Xylene; refractive index 1.52 matches glass.",
    "Xylene Clearing Purpose: Replaces dehydrating ethanol and facilitates complete infiltration of molten hydrophobic paraffin wax.",
    "Lab Viva Tip: Always state that imperfect dehydration causes milky turbidity during xylene clearing and ruins paraffin block infiltration."
])

add("Zoology Lab III", 2, "Zoology  III: Standard Preparations & Calibration Methods", [
    "Improved Neubauer Hemocytometer Chamber Design: Precision glass slide with dual counting grids; Central platform recessed precisely 0.1 mm below coverslip; Heavy optically flat coverslip creating standard 0.1 mm depth liquid volume.",
    "Hemocytometer Grid Geometry & Volume Equations: Total ruled grid area 3 mm by 3 mm (9 mm2); Four corner large squares (1 mm2 each, subdivided into 16 smaller squares) for leukocyte counting; Central square (1 mm2, subdivided into 25 medium squares of 16 mini-squares each) for erythrocyte counting.",
    "Calculation Formulation for Blood Cell Densities: Cell count per microliter = (Cells counted x Dilution factor) / (Number of squares counted x Volume of one square); Volume of central RBC mini-square = 0.00025 microliter (0.2 x 0.2 x 0.1 mm).",
    "Preparation of Hayem's RBC Diluting Fluid: Composition: Sodium chloride (isotonicity), Sodium sulfate (prevents rouleaux formation), Mercuric chloride (preservative/bacteriostat), and distilled water; Prevents red cell lysis and maintains spherical morphology.",
    "Preparation of Turk's WBC Diluting Fluid: Composition: 1 percent Glacial acetic acid (lyses non-nucleated erythrocytes and clears background) and 1 percent Gentian violet or Methyl violet (selectively stains leukocyte nuclei purple).",
    "Sahli's Hemoglobinometer Pipette Calibration: Sahli's pipette calibrated to deliver precisely 20 microliters (0.02 mL) of blood capillary sample; Calibrated graduated comparator tube showing grams per deciliter (g/dL) and percentage hemoglobin.",
    "Physiological Salt Solutions Preparation: Formulation of Mammalian Ringer's solution, Frog Ringer's solution, and Phosphate Buffered Saline (PBS pH 7.4); Maintaining correct osmolarity (300 mOsm/L for mammals) and ionic balance (Na+, K+, Ca2+, Mg2+).",
    "Preparation of Leishman's & Giemsa Blood Stains: Leishman's powder dissolved in pure acetone-free methanol; Giemsa stain containing azure II-eosin and methylene blue; Critical role of absolute methanol in fixing uncoagulated blood films.",
    "Buffer Solutions for Differential Staining: Sørensen's phosphate buffer at pH 6.8 maintains optimal ionization of polychromatic methylene blue and eosin dye components during smear staining.",
    "University Examination Strategy: Derive the mathematical formula for total erythrocyte and leukocyte counts using Neubauer grid dimensions, explain the role of each constituent in Turk's and Hayem's fluids, and specify Sahli pipette calibration steps."
], [
    "Neubauer Chamber Depth: Exactly 0.1 millimeter depth between bottom grid platform and underside of flat optical coverslip.",
    "Central Counting Grid Area: Central 1 square millimeter divided into 25 squares; RBC count performed across five designated squares (80 mini-squares).",
    "Turk's Fluid Acetic Acid Action: Glacial acetic acid hemolyzes unnucleated erythrocytes to permit unobstructed counting of nucleated leukocytes.",
    "Hayem's Sodium Sulfate Role: Eliminates red cell rouleaux aggregation to ensure individual, dispersed erythrocyte suspensions.",
    "Sahli Capillary Pipette Volume: Precisely calibrated to draw 20 cubic millimeters (0.02 mL) of capillary peripheral blood.",
    "Erythrocyte Volume Metric: Volume of one small central square equals 0.05 mm x 0.05 mm x 0.1 mm = 0.00025 cubic millimeters.",
    "Acetone-Free Methanol Rule: Acetone contamination in Leishman's stain causes cellular artifact, protein denaturation, and erratic nuclear staining.",
    "Mammalian Ringer's Osmolarity: Approximately 300 mOsm/L; formulated with NaCl, KCl, CaCl2, NaHCO3, and glucose.",
    "WBC Dilution Standard: Capillary blood diluted 1:20 using Turk's fluid in white bead-containing WBC dilution pipette.",
    "Practical Exam Rule: Discard the initial two to three drops from the diluting pipette stem before charging the hemocytometer chamber."
])

add("Zoology Lab III", 3, "Zoology  III: Core Experimental Procedures & Synthesis", [
    "Capillary Puncture & Aseptic Protocol: Sterilization of fingertip with 70 percent isopropyl alcohol; Standardized lancet puncture (2 mm depth); Wiping away the first drop of blood to eliminate interstitial tissue fluid contamination.",
    "Total Erythrocyte (RBC) Count Procedure: Blood aspirated to 0.5 mark in red-bead pipette, diluted to 101 mark with Hayem's fluid (1:200 dilution); Mixing by rotary figure-eight motion; Discarding non-diluted stem volume; Charging hemocytometer without overflowing gutters.",
    "Hemocytometer Microscopic RBC Counting: High-power objective (40x); Count red cells in 80 mini-squares (four corner and one center medium square of central grid); Applying the inclusion rule (cells touching top and left boundaries counted, bottom and right excluded).",
    "Total Leukocyte (WBC) Count Procedure: Blood aspirated to 0.5 mark in white-bead pipette, diluted to 11 mark with Turk's fluid (1:20 dilution); Mixing for 3 minutes; Charging counting chamber; Counting all four large corner squares (64 small squares) under 10x objective.",
    "Hemoglobin Estimation by Sahli's Acid Hematin Method: Pipetting 0.1 N Hydrochloric Acid into Sahli tube to 2 g/dL mark; Adding 20 microliters blood; Converting hemoglobin to dark brown acid hematin complex (10 minutes incubation); Diluting with distilled water dropwise until color matches standard comparator prism.",
    "Preparation of Thin Blood Smears: Placing single drop of blood near end of clean glass slide; Smooth pusher slide held at 30-45 degree angle pulled back to touch drop; Smooth forward glide creating tongue-shaped monocellular layer with feathered edge.",
    "Leishman's Staining Protocol: Air-drying thin smear; Covering with Leishman stain for 1-2 minutes (methanol fixation); Adding double volume of distilled water (pH 6.8); Rocking gently to mix; Developing metallic scum (10 minutes); Rinsing under gentle stream.",
    "ABO & Rh Blood Grouping Agglutination: Placing three separate drops of blood on clean tile; Adding Anti-A, Anti-B, and Anti-D (Rh) monoclonal sera; Mixing with separate wooden toothpicks; Observing macro-agglutination clumping within 60 seconds.",
    "Erythrocyte Sedimentation Rate (ESR) Determination: Westergren method: Mixing 4 parts venous blood with 1 part 3.8 percent sodium citrate anticoagulant; Filling Westergren tube to 0 mm mark; Reading millimeters of clear plasma settled in 1 hour.",
    "University Examination Strategy: Write the step-by-step operating procedure for total RBC count and Sahli's hemoglobin measurement, outline the blood smear spreading technique to produce a feathered edge, and interpret ABO blood grouping results."
], [
    "RBC Inclusion Rule: Count cells touching upper and left borders; exclude cells touching lower and right boundaries to avoid double counting.",
    "Sahli Acid Hematin Reaction: Hemoglobin reacts with 0.1 N HCl to form brown acid hematin; reaction reaches 95 percent completion at 10 minutes.",
    "Blood Smear Pusher Angle: Angle maintained between 30 and 45 degrees; faster push or steeper angle creates excessively thick smears.",
    "Feathered Edge Importance: Monolayer zone where red blood cells lie flat without overlapping, ideal for differential leukocyte count.",
    "WBC Dilution Pipette Markings: Calibrated marks at 0.5, 1.0, and 11; contains white glass mixing bead in bulb chamber.",
    "RBC Dilution Pipette Markings: Calibrated marks at 0.5, 1.0, and 101; contains red glass mixing bead in bulb chamber.",
    "ABO Clumping Mechanism: IgM antibodies bind surface agglutinogens on red cells, creating visible macroscopic lattice agglutination.",
    "Anti-D Rh Positive Reaction: Agglutination in Anti-D serum indicates presence of Rh(D) antigen on red cell membrane surface.",
    "Westergren Normal Values: Adult males 0-15 mm/hr; Adult females 0-20 mm/hr; elevated significantly in active systemic inflammation.",
    "Viva Voce Check: Never shake blood diluting pipettes violently up and down; rotate horizontally in figure-eight to preserve red cell integrity."
])

add("Zoology Lab III", 4, "Zoology  III: Quantitative Data Verification & Error Analysis", [
    "Differential Leukocyte Count (DLC) Battlement Method: Microscopic scanning of stained feathered edge in zigzag / battlement pattern; Counting 100 consecutive white blood cells; Categorizing into neutrophils, lymphocytes, monocytes, eosinophils, and basophils.",
    "Morphological Identification of Leukocytes: Neutrophils (3-5 lobed nucleus, fine pink-lilac granules; 50-70 percent); Lymphocytes (large round nucleus occupying almost entire cell, sky-blue cytoplasm; 20-40 percent); Monocytes (kidney-shaped indented nucleus, abundant grey-blue cytoplasm; 2-8 percent).",
    "Granulocyte Distinctions: Eosinophils (bilobed spectacle-shaped nucleus, coarse bright orange-red refractive granules; 1-4 percent); Basophils (S-shaped or obscured nucleus, coarse dark purple-black granules rich in histamine and heparin; 0-1 percent).",
    "Statistical Variance & Standard Error in Hemocytometry: Poisson distribution modeling cell counts across grid squares; Standard error (SE) = square root of (N) / N, where N is total count; Counting more cells reduces relative counting error.",
    "Erythrocyte Osmotic Fragility Curve Determination: Exposing fresh blood to serial dilutions of buffered saline (0.9, 0.7, 0.6, 0.5, 0.45, 0.4, 0.35, 0.3, 0.2, 0.1 percent NaCl); Centrifuging and measuring supernatant optical density at 540 nm.",
    "Fragility Index Interpretation: Normal erythrocytes: Hemolysis begins at 0.45 percent NaCl (initial fragility) and is complete at 0.30 percent NaCl; Spherocytes show increased osmotic fragility (shift to right); Thalassemic cells show decreased fragility.",
    "Error Sources in Sahli's Method: Visual color matching subjectivity, illumination variations, incomplete conversion of carboxyhemoglobin or methemoglobin to acid hematin, and pipette volume meniscus error (plus or minus 5-10 percent).",
    "Hemocytometer Pipetting Artifacts: Bubbles in bulb, fluid residue in capillary stem, inadequate mixing, overfilling into moats, and coverslip slippage; Quantifying percentage deviation between duplicate chamber counts.",
    "Physiological Reference Ranges Verification: Adult Male RBC: 4.5-5.5 million/uL; Female RBC: 4.0-5.0 million/uL; Total WBC: 4,000-11,000/uL; Platelets: 150,000-450,000/uL; Hemoglobin: Male 13.5-17.5 g/dL, Female 12.0-15.5 g/dL.",
    "University Examination Strategy: Plot an erythrocyte osmotic fragility curve indicating initial and complete hemolysis points, tabulate morphological differences and normal percentages of 5 leukocyte types, and calculate counting error in hemocytometry."
], [
    "Battlement Scanning Method: Moving three fields along margin, three fields inwards, and three fields along to ensure unbiased leukocyte tally.",
    "Neutrophil Identification: Polymorphonuclear leukocyte possessing 2 to 5 lobes connected by delicate chromatin strands.",
    "Eosinophil Hallmark: Prominent bilobed nucleus and large, uniform spherical granules staining vivid red-orange with eosin.",
    "Monocyte Characteristic: Largest circulating leukocyte (15-20 um) with characteristic folded, kidney-bean indented euchromatic nucleus.",
    "Initial Hemolysis Threshold: Normal human erythrocytes begin lysing at approximately 0.45 to 0.48 percent NaCl concentration.",
    "Complete Hemolysis Threshold: All normal red blood cells completely hemolyze at or below 0.30 to 0.32 percent NaCl concentration.",
    "Hemocytometer Statistical Law: Standard deviation of hemocytometer count equals square root of counted cells (Poisson distribution).",
    "Hemocytometer Error Target: Counting at least 400 cells achieves a theoretical sampling error of less than 5 percent.",
    "Leishman Methanol Role: Dehydrates and fixes blood smear proteins to slide glass within the first minute of un-diluted stain application.",
    "Viva Question: Why is whole blood mixed with 0.1 N HCl in Sahli method? HCl cleaves globin and converts heme to colored acid hematin."
])

add("Zoology Lab III", 5, "Zoology  III: Comprehensive Practical Record & Viva Voce", [
    "Practical Record Book Documentation Standards: Clear recording of experiment objective, biological principle, apparatus specifications, step-by-step methodology, raw observation tables, calculation formulas, and final clinical conclusions.",
    "Histological Slide Identification Protocols: Systematic microscopic diagnosis: Epithelial tissues, dense regular connective tissue, hyaline cartilage, compact bone (Haversian systems), skeletal and cardiac muscle (striations, intercalated discs).",
    "Mammalian Organ Section Histology: Stomach (gastric pits, chief and parietal cells), Small intestine (villi, crypts of Lieberkuhn, goblet cells), Liver (hepatic lobules, central vein, portal triads), Kidney (renal corpuscles, Bowman's capsule, proximal/distal convoluted tubules).",
    "Endocrine Organ Histology: Thyroid (thyroid follicles lined by cuboidal epithelium, central colloid), Pancreas (exocrine acini and pale Islets of Langerhans), Adrenal gland (outer cortex: glomerulosa, fasciculata, reticularis; inner medulla).",
    "Optical Microscopy Alignment & Maintenance: Kohler illumination setup: Adjusting field iris diaphragm, centering condenser, optimizing numerical aperture (NA) with condenser iris, and cleaning oil immersion objective (100x) with lens paper.",
    "Viva Voce High-Yield Questions on Hematology: Principle of anticoagulant action (EDTA chelates Ca2+, Heparin activates antithrombin III, Sodium citrate binds calcium), Difference between serum and plasma, Mechanism of erythrocyte sedimentation.",
    "Viva Voce Questions on Tissue Processing: Purpose of clearing agents, Why xylene cannot be directly followed by water, Action of mordants in staining, Hematoxylin ripening by oxidation to hematein.",
    "Viva Voce Questions on Hemocytometry: Why Türk's fluid uses 1 percent glacial acetic acid, Why RBC pipette has larger bulb than WBC pipette, Why Hayem's fluid contains mercuric chloride.",
    "Quality Assurance in Practical Zoology: Replicate determinations, blind verification of blood group agglutination, proper disposal of glass lancets in sharps container, and disinfecting workbench with 1 percent sodium hypochlorite.",
    "University Examination Strategy: Structure the practical record neatly with labeled hand-drawn histological diagrams, memorize key identification points for liver, kidney, and intestine sections, and practice rapid mental calculation of blood cell counts."
], [
    "Haversian Canal Landmark: Central canal in compact bone transmitting neurovascular bundle, surrounded by concentric lamellae.",
    "Hepatic Portal Triad: Histological landmark containing branch of hepatic portal vein, hepatic artery, and interlobular bile ductule.",
    "Islet of Langerhans Appearance: Lightly staining endocrine cell clusters scattered among dark basophilic exocrine pancreatic acini.",
    "Kidney Proximal Tubule Landmark: Lined by simple cuboidal epithelium with prominent brush border microvilli and narrow lumen.",
    "EDTA Anticoagulant Mechanism: Ethylenediaminetetraacetic acid irreversibly chelates divalent calcium ions essential for blood clotting.",
    "Serum vs Plasma Difference: Plasma contains fibrinogen and clotting factors; Serum is the liquid remaining after blood has fully clotted.",
    "Hematein Ripening Action: Hematoxylin must be oxidized to hematein, which complexes with alum mordant to form cationic dye-metal lake.",
    "Oil Immersion Refractive Index: Cedarwood oil (refractive index 1.515) matches glass slide, eliminating light refraction and spherical aberration.",
    "RBC vs WBC Pipette Bulb: RBC pipette has a 100-volume bulb (1:200 dilution), whereas WBC pipette has a 10-volume bulb (1:20 dilution).",
    "Exam Gold Rule: In practical viva, always define both the normal clinical range and the diagnostic term for elevated/depleted cell levels."
])

# =========================================================================
# 9. BIO-FERTILIZERS / HERBAL TECHNOLOGY (B.Sc)
# =========================================================================
add("Bio-fertilizers / Herbal Technology", 1, "Bio-fertilizer Types", [
    "Taxonomic Classification of Bio-fertilizers: Biological preparations containing living or latent microbial cells; Grouped into symbiotic nitrogen fixers, free-living asymbiotic fixers, associative fixers, phosphate solubilizers, and mycorrhizae.",
    "Symbiotic Nitrogen Fixation by Rhizobium: Specific leguminous host-symbiont relationships (Rhizobium leguminosarum, Sinorhizobium, Bradyrhizobium); Root hair curling, infection thread formation, bacteroid differentiation, and root nodule organogenesis.",
    "Biochemistry of Nitrogenase Enzyme Complex: Dinitrogenase (Mo-Fe protein) and Dinitrogenase reductase (Fe protein); Catalyzes biological nitrogen fixation: N2 + 8H+ + 8e- + 16 ATP -> 2 NH3 + H2 + 16 ADP + 16 Pi; Inactivated irreversibly by molecular oxygen.",
    "Oxygen Protection via Leghemoglobin: Pink-red leghemoglobin synthesized jointly by legume plant (globin) and bacteroid (heme); Binds oxygen with high affinity, buffering oxygen concentration at microaerophilic levels (10-20 nM) to protect nitrogenase.",
    "Free-Living Nitrogen Fixers: Azotobacter: Heterotrophic aerobic bacterium (Azotobacter chroococcum); Protects nitrogenase through high respiratory protection rate and thick extracellular slime capsule; Synthesizes plant growth promoting auxins and gibberellins.",
    "Associative Symbiont: Azospirillum: Microaerophilic associative diazotroph (Azospirillum brasilense, A. lipoferum); Colonizes rhizoplane and intercellular root cortex of C4 cereals (maize, sorghum, sugarcane); Enhances mineral uptake and root elongation.",
    "Cyanobacterial Bio-fertilizers: Blue-green algae (Nostoc, Anabaena, Tolypothrix, Aulosira); Differentiated thick-walled specialized heterocysts lacking photosystem II; Fixes atmospheric nitrogen in waterlogged wetland paddy ecosystems.",
    "Azolla-Anabaena Symbiotic Alliance: Aquatic floating pteridophyte Azolla (Azolla pinnata); Harboring endophytic Anabaena azollae inside dorsal leaf cavities; Accumulates up to 30-50 kg N/ha in flooded rice cultivation fields.",
    "Phosphate Solubilizing Microorganisms (PSM): Bacteria (Bacillus megaterium, Pseudomonas putida) and fungi (Aspergillus niger, Penicillium bilaii); Solubilizes insoluble rock phosphate (Ca3(PO4)2) via secretion of low molecular weight organic acids (citric, gluconic, oxalic).",
    "University Examination Strategy: Draw and label the molecular infection cycle of Rhizobium in root hairs, detail the biochemical stoichiometry of the nitrogenase enzyme complex, and contrast symbiotic vs free-living diazotrophs."
], [
    "Nitrogenase Catalytic Core: Two-component metalloenzyme: Mo-Fe protein (dinitrogenase) and Fe protein (dinitrogenase reductase).",
    "ATP Energy Burden: Biological reduction of one single atmospheric dinitrogen molecule requires minimum of 16 ATP molecules.",
    "Leghemoglobin Buffering Role: Scavenges free O2 while delivering controlled flux to bacteroid electron transport chain.",
    "Azotobacter Respiratory Rate: Possesses one of the highest known cellular respiration rates, combusting O2 away from nitrogenase.",
    "Heterocyst Specialization: Cyanobacterial cell with thickened glycolipid wall, elevated photosystem I, and absent O2-evolving photosystem II.",
    "Azolla Green Manure: Aquatic fern containing symbiotic Anabaena azollae; multiplies rapidly on water surface in paddy fields.",
    "PSM Organic Acid Secretion: Microbes excrete gluconic and 2-ketogluconic acids, lowering soil pH and chelating calcium/iron ions.",
    "AMF Hyphal Network: Arbuscular mycorrhizal fungi penetrate cortical cells to form arbuscules for phosphorus transfer.",
    "Nif Gene Cluster: Operon encoding nitrogenase structural subunits (nifH, nifD, nifK) and electron transfer proteins.",
    "Exam Scoring Tip: Clarify that bio-fertilizers do not supply nutrients directly like chemical fertilizers, but mobilize them biologically."
])

add("Bio-fertilizers / Herbal Technology", 2, "Production", [
    "Mass Culture Production Flowsheet: Screening and isolation of elite microbial strains, maintenance on specific agar slants, starter culture flask fermentation, pilot-scale seed fermenter, and industrial production fermenter.",
    "Media Formulations for Industrial Fermentation: Yeast Extract Mannitol (YEM) broth for Rhizobium; Ashby's sucrose/mannitol broth for Azotobacter; Okon's malate broth for Azospirillum; Pikovskaya's broth for phosphate solubilizing bacteria.",
    "Industrial Fermenter Design & Aeration: Stainless steel (SS 316) stirred-tank bioreactors; Sparger ring for sterile air delivery; Impeller blades (Rushton turbines) for agitation; Dissolved oxygen (DO) and pH control loops; Temperature control jackets.",
    "Sterilization Protocols in Inoculant Manufacturing: In-situ steam sterilization of fermenter vessel and liquid culture medium at 121 degrees C, 15 psi for 30-45 minutes; Filter sterilization of heat-labile supplements (0.22 um PTFE filters).",
    "Downstream Processing & Broth Harvesting: Monitoring cell density via optical density (OD600) and viable cell counts; Harvesting at late logarithmic phase when viable titer reaches 10^9 to 10^10 CFU/mL; Centrifugation and cell slurry concentration.",
    "Carrier Material Selection & Properties: Qualities of ideal carrier: Non-toxic to microbes, high organic carbon content, high water holding capacity (greater than 50 percent), neutral pH (6.5-7.5), easily pulverizable; Peat, lignite, charcoal, vermiculite, and pressmud.",
    "Carrier Neutralization & Gamma Sterilization: Pulverizing raw peat or lignite to 200-300 mesh powder; Adding calcium carbonate (CaCO3) to neutralize natural acidity to pH 7.0; Pre-sterilization by autoclaving or gamma irradiation (25-50 kGy) in heat-sealed pouches.",
    "Inoculant Blending & Curing: Aseptic mixing of concentrated bacterial fermentation broth with sterile carrier powder (1:2 ratio); Moisture content adjusted to 30-40 percent; Curing at room temperature (25-28 degrees C) for 5-7 days for bacterial acclimation.",
    "Liquid Bio-fertilizer Formulations: Advanced alternative to carrier-based formulations; Aqueous formulations supplemented with cell protectants (glycerol, trehalose, PVP, gum arabica); Extends shelf life up to 12-24 months at ambient temperatures.",
    "University Examination Strategy: Detail the industrial fermentation flowsheet for Rhizobium bio-inoculant production, compare carrier-based vs liquid bio-fertilizer formulations, and explain sterilization protocols for commercial carriers."
], [
    "YEM Medium Composition: Yeast extract (nitrogen source), mannitol (carbon source), dipotassium phosphate, and magnesium sulfate.",
    "Viable Cell Titer Target: Fermentation broth harvested at late log phase must achieve minimum 10^9 CFU per milliliter.",
    "Carrier Sterilization Standard: Gamma irradiation (25 to 50 kiloGray) ensures zero microbial competitors without creating toxic pyrolysis products.",
    "Carrier Moisture Range: Optimum moisture content maintained between 35 and 40 percent to prevent microbial desiccation.",
    "Peat Carrier Superiority: High organic matter and porosity provide protective micro-habitats that sustain high viable bacterial populations.",
    "Liquid Formulation Protectants: Addition of 1 percent trehalose or polyvinylpyrrolidone (PVP) preserves cell membrane integrity upon storage.",
    "Bioreactor Agitation Control: Rushton turbine speed optimized to achieve high oxygen mass transfer coefficient without shearing bacterial cells.",
    "Shelf Life Differential: Carrier powders typically maintain viability for 6 months; liquid formulations remain stable for 12 to 24 months.",
    "Bureau of Indian Standards (BIS): Mandates minimum viable bacterial population of 5 x 10^7 CFU per gram of carrier at expiry.",
    "Viva Voce Point: Why is curing necessary? Curing allows bacteria to recover from mixing stress and adapt to carrier surface micro-pores."
])

add("Bio-fertilizers / Herbal Technology", 3, "Application", [
    "Seed Inoculation (Seed Coating) Technique: Suspending carrier-based bio-fertilizer in adhesive slurry; Adhesives: 10 percent jaggery / molasses solution or 2 percent gum acacia / carboxymethyl cellulose (CMC); Slurry ensures tight adhesion of 10^6 cells per seed coat.",
    "Seed Dressing Operation: Mixing seeds with bio-fertilizer slurry on clean polyethylene sheet in shaded area; Dosage: 200-250 g inoculant per 10-15 kg seeds; Drying in shade (never direct sunlight) for 30 minutes before immediate sowing.",
    "Seedling Root Dip Treatment: Preferred method for transplanted crops (paddy, vegetables, onion); Bio-fertilizer mixed with water in shallow pit or tub (1-2 kg in 40-50 L water); Root bundles of seedlings immersed for 30-45 minutes before transplantation.",
    "Soil Application & Enriched Compost: Mixing 3-5 kg bio-fertilizer with 200-500 kg farmyard manure (FYM) or vermicompost; Incubation for 7-10 days in shaded heap; Broadcasting evenly over field at the time of final land preparation or sowing.",
    "Application of Azolla in Wetland Rice: Green manuring before transplanting: Azolla inoculated at 1.0-2.0 tonnes/ha; Grown for 2-3 weeks to form thick green mat; Incorporated into soil by tractor puddling; Dual cropping: Inoculated 7 days after rice transplanting.",
    "Mycorrhizal Inoculation in Forestry & Horticulture: Soil placement of AM fungal spores and root segment inoculum (Glomus intraradices) in root zone furrow or planting hole; Establishes mutualistic hyphal network expanding phosphorus absorption root volume.",
    "Quality Control Standards & BIS Specifications: Indian Standards Institute (ISI/BIS) parameters: Minimum viable count of 5 x 10^7 cells/g carrier at 15 days and 10^7 cells/g at expiry; Absence of contamination at 10^-5 dilution; Permissible moisture 30-40 percent.",
    "Field Compatibility & Pesticide Interactions: Precaution against direct tank-mixing with chemical fungicides (carbendazim, thiram) or systemic bactericides; Sowing seeds at least 24-48 hours after chemical fungicide seed treatment.",
    "Agronomic Benefits & Cost-Benefit Economics: Bio-fertilizers replace 20-30 percent of synthetic chemical nitrogenous and phosphatic fertilizers; Improves soil organic matter, tilth, microbial diversity, and crop yield by 10-25 percent.",
    "University Examination Strategy: Describe seed dressing and seedling root dip methodologies step-by-step, discuss Azolla application protocols in paddy cultivation, and state BIS quality parameters for commercial bio-fertilizers."
], [
    "Jaggery Adhesive Rationale: Provides carbon nourishment to bacteria while creating sticky film binding inoculant firmly to seed testa.",
    "Shade Drying Imperative: Direct solar ultraviolet radiation rapidly kills desiccation-sensitive vegetative bacterial cells on seed coats.",
    "Seedling Dip Immersion Time: Roots submerged for 30 to 45 minutes enables bacterial cells to adhere firmly to the rhizoplane.",
    "Soil Application FYM Mixing: Farmyard manure provides protective organic substrate and moisture during initial bacterial soil colonization.",
    "Azolla Biomass Production: Can double its biomass within 3 to 5 days, fixing up to 30 to 50 kg nitrogen per hectare per season.",
    "AM Fungi Furrow Placement: Placed 2 to 3 cm below seeds so emerging radicle directly intersects mycorrhizal mycelial propagules.",
    "Fungicide Seed Precaution: Chemical seed treatment must be completed first; bio-fertilizer applied only after fungicide has dried completely.",
    "BIS Contamination Limit: Zero pathogenic or foreign bacterial colonies permitted at 10^-5 serial dilution on agar test plates.",
    "Phosphorus Efficiency Gain: Phosphate solubilizers convert fixed tricalcium phosphate into bioavailable monocalcium and dicalcium phosphates.",
    "Exam Gold Tip: Always mention that bio-fertilizers are eco-friendly, renewable, and enhance soil biological health without toxic residue."
])

add("Bio-fertilizers / Herbal Technology", 4, "Herbal Medicine", [
    "Historical Roots & Traditional Systems of Medicine: Philosophy of Ayurveda (Tridosha theory: Vata, Pitta, Kapha), Siddha (Trigunas), Unani (four humors: blood, phlegm, yellow bile, black bile), and Homeopathy; Integration with contemporary pharmacognosy.",
    "Primary Classes of Phytochemical Secondary Metabolites: Plants synthesize defensive secondary metabolites categorized into Alkaloids, Glycosides, Flavonoids, Terpenoids, Phenolic compounds, Saponins, and Tannins.",
    "Alkaloids: Pharmacological Activity & Sources: Nitrogenous basic organic compounds; Examples: Quinine (Cinchona bark; antimalarial), Morphine and Codeine (Papaver somniferum; analgesic), Reserpine (Rauvolfia serpentina; antihypertensive), Vincristine and Vinblastine (Catharanthus roseus; antineoplastic).",
    "Glycosides: Structure & Bioactive Properties: Aglycone linked to sugar moiety via glycosidic bond; Cardiac glycosides: Digoxin and Digitoxin (Digitalis purpurea; enhances myocardial contractility by inhibiting Na+/K+ ATPase); Anthraquinone glycosides: Sennoside (Senna; laxative).",
    "Flavonoids & Phenolic Antioxidants: Polyphenolic antioxidants scavenging reactive oxygen species (ROS); Quercetin, Kaempferol, Curcumin (Curcuma longa; anti-inflammatory via NF-kB inhibition), and Epigallocatechin gallate (EGCG in Camellia sinensis).",
    "Terpenoids & Essential Oils: Isoprene unit polymers (C5H8)n; Monoterpenes (Menthol, Camphor), Sesquiterpenes (Artemisinin from Artemisia annua; antimalarial), and Diterpenes (Taxol / Paclitaxel from Taxus brevifolia; microtubule stabilizer antineoplastic).",
    "Herbal Formulations & Delivery Forms: Traditional Ayurvedic dosage forms: Churna (pulverized dry powder), Kwatha / Decoctum (boiled herbal decoction), Asava and Arishta (self-generated fermented liquids), Taila (medicated oils), and Ghruta (medicated ghee).",
    "Standardization & Quality Assurance of Herbal Drugs: WHO guidelines for quality control of herbal materials: Botanical authentication, macroscopic/microscopic examination, foreign organic matter limit, moisture content, total ash and acid-insoluble ash.",
    "Screening for Toxic Contaminants: Quantification of heavy metals (lead, cadmium, arsenic, mercury via AAS/ICP-MS), pesticide residues via GC-MS, aflatoxins via HPLC, and microbial contamination limits.",
    "University Examination Strategy: Classify herbal secondary metabolites with therapeutic examples, describe the Ayurvedic Tridosha concept, and detail WHO standardization parameters for herbal raw materials."
], [
    "Tridosha Balance: Ayurveda posits physical and mental health depends on balance among Vata (air/space), Pitta (fire/water), and Kapha (water/earth).",
    "Catharanthus Alkaloids: Vincristine and Vinblastine bind tubulin dimers to inhibit mitotic spindle assembly in malignant cells.",
    "Digitalis Cardiac Action: Inactivates myocardial Na+/K+ ATPase, raising intracellular Ca2+ to exert positive inotropic cardiac effect.",
    "Curcumin Molecular Target: Downregulates inflammatory transcription factor NF-kappaB and suppresses COX-2 / 5-LOX enzymes.",
    "Taxol Mechanism of Action: Stabilizes GDP-bound microtubule polymers against depolymerization, arresting cell division at G2/M phase.",
    "Asava vs Arishta Distinction: Asavas prepared using cold herbal juices; Arishtas prepared using boiled aqueous herbal decoctions.",
    "Total Ash Value Parameter: Measures total inorganic mineral matter (both physiological ash from tissue and non-physiological sand/soil).",
    "Acid-Insoluble Ash Metric: Ash insoluble in 10 percent hydrochloric acid; specifically quantifies siliceous matter and earth contamination.",
    "Aflatoxin Contamination Limit: Toxic mycotoxins produced by Aspergillus flavus strictly restricted to parts-per-billion (ppb) levels.",
    "Pharmacognosy Exam Tip: Always link the herbal plant genus and species to the exact bioactive phytoconstituent and therapeutic application."
])

add("Bio-fertilizers / Herbal Technology", 5, "Cultivation", [
    "Good Agricultural & Collection Practices (GACP): WHO guidelines for medicinal plant cultivation: Land selection, soil and water testing, certified seed/propagule provenance, ecological sustainability, and avoidance of hazardous chemical residues.",
    "Agro-climatic Zones & Cultivation Requirements: Soil pH, annual rainfall, altitude, photoperiod, and temperature requirements for commercial medicinal crops: Ashwagandha (Withania somnifera), Senna (Cassia angustifolia), Isabgol (Plantago ovata), and Lemongrass.",
    "Propagation Techniques for Medicinal Plants: Sexual propagation via certified seed beds (Isabgol, Ashwagandha); Asexual vegetative propagation via stem cuttings, root division, rhizomes (Ginger, Turmeric), runners (Mint), and in vitro plant tissue culture micropropagation.",
    "Harvesting Protocols & Maturity Indicators: Optimal harvesting stages governed by diurnal and seasonal fluctuations in bioactive secondary metabolites; Examples: Digitalis leaves harvested in late afternoon when glycoside content peaks; Roots harvested in autumn dormancy.",
    "Post-Harvest Primary Processing: Cleaning, sorting, washing to eliminate soil residues; Controlled drying methods: Shade drying under well-ventilated sheds for heat-sensitive volatile oils (Mentha, Ocimum); Solar/oven drying (40-50 degrees C) for sturdy roots and barks.",
    "Extraction Methodologies for Herbal Actives: Maceration, Soxhlet continuous hot extraction, percolation, and decoction; Modern extraction technologies: Supercritical Fluid Extraction (SFE with CO2) and Ultrasonic-Assisted Extraction (UAE).",
    "Phytochemical Screening & Fingerprinting: Thin Layer Chromatography (TLC), High-Performance Thin Layer Chromatography (HPTLC), and HPLC fingerprinting for marker compound identification and batch-to-batch chemical profiling.",
    "Storage, Packaging & Shelf-Life Preservation: Moisture control (below 10-12 percent) to prevent fungal growth; Storing in airtight, light-resistant containers or vacuum-sealed bags; Temperature and humidity controlled warehousing.",
    "Intellectual Property Rights & Biodiversity Laws: Protection of traditional knowledge; National Biodiversity Authority (NBA) regulations; Patenting guidelines for herbal formulations; Traditional Knowledge Digital Library (TKDL) in preventing biopiracy.",
    "University Examination Strategy: Detail WHO Good Agricultural Practices for medicinal plants, compare Soxhlet extraction vs Supercritical CO2 extraction, and explain post-harvest drying and storage protocols."
], [
    "GACP Primary Goal: Ensures consistent quality, botanical authenticity, and safety of medicinal plant raw materials for therapeutics.",
    "Withania somnifera Cultivation: Requires well-drained sandy loam soil, dry tropical/subtropical climate, and 500-750 mm rainfall.",
    "Soxhlet Extraction Principle: Continuous automated recycling of volatile organic solvent through porous cellulose thimble containing plant drug.",
    "Supercritical CO2 Superiority: Non-toxic, non-flammable, leaves zero solvent residue, and operates at mild critical temperature (31.1 degrees C).",
    "Shade Drying Essentiality: Preserves volatile monoterpenes and prevents thermal degradation of heat-labile glycosides and alkaloids.",
    "HPTLC Chemical Fingerprint: High-resolution chromatographic profile providing reproducible visual and densitometric marker confirmation.",
    "Moisture Limit in Dry Herbs: Moisture maintained strictly below 10-12 percent to suppress Aspergillus molds and hydrolytic degradation.",
    "TKDL Defensive Database: Traditional Knowledge Digital Library prevents improper foreign patenting of indigenous traditional remedies.",
    "Micropropagation Advantage: Generates pathogen-free, genetically uniform clonal plantlets of endangered high-value medicinal species.",
    "Viva Question: Why is supercritical CO2 ideal for botanical extraction? Its liquid-like density and gas-like diffusivity enable rapid, solventless extraction."
])

with open('scripts/sem3_life_complete_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
