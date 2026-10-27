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
# 6. BOTANY LAB III (B.Sc)
# =========================================================================
add("Botany Lab III", 1, "Botany  III: Laboratory Safety Protocols & Instrumentation", [
    "Botanical Laboratory Safety Guidelines: Personal protective equipment (PPE: lab coat, nitrile gloves, chemical splash goggles); Safe handling of hazardous histological fixatives (formaldehyde, glacial acetic acid, FAA solution) and toxic clearing agents (xylene, clove oil) in dedicated fume hoods.",
    "Compound Microscope Setup & Kohler Illumination: Aligning light source, field diaphragm, substage Abbe condenser, and iris diaphragm; Adjusting interpupillary distance and diopter collar; Achieving glare-free, uniform field illumination with maximum optical resolving power.",
    "Rotary & Hand Microtomy Equipment: Hand microtome operation for fresh plant sectioning using razor blades; Rotary microtome (Spencer type) operation for paraffin wax-embedded botanical blocks; Knife tilt clearance angle (3-5 degrees) and cutting speed.",
    "Fixation Chemistry in Plant Histology: Chemical stabilization of cellular morphology and protoplasmic contents; FAA fixative (Formalin-Aceto-Alcohol: 90 mL 70 percent ethanol, 5 mL glacial acetic acid, 5 mL 40 percent formaldehyde); Carnoy's fluid (6:3:1 absolute ethanol, chloroform, glacial acetic acid for rapid nuclear fixation).",
    "Tissue Dehydration & Clearing Protocols: Graded ethanol series (30, 50, 70, 80, 90, 95, 100 percent) to displace cellular water without plasmolysis shrinkage; Clearing in graded alcohol-xylene mixtures (3:1, 1:1, 1:3, pure xylene) to impart optical transparency before paraffin infiltration.",
    "Paraffin Wax Infiltration & Embedding: Paraplast infiltration (melting point 56-58 degrees Celsius) in constant-temperature embedding oven; Casting wax blocks using L-shaped Leuckhart brass embedding molds; Rapid chilling in ice water bath to prevent wax crystallization.",
    "Differential Histological Staining Solutions: Preparation of Safranin O (1 percent aqueous/alcoholic, stains lignified xylem, suberized periderm, and cutinized walls brilliant red) and Fast Green FCF (0.5 percent in clove oil-ethanol, stains cellulosic primary parenchyma walls bright green).",
    "Specialized Botanical Reagents: Iodine-potassium iodide (IKI / Lugol's solution, stains starch grains dark blue-black); Phloroglucinol-HCl test (Wiesner reaction, generates bright magenta color specifically with coniferyl aldehyde units in lignified walls); Ruthenium red for pectins and mucilage.",
    "Stage and Ocular Micrometers: Ocular micrometer (eyepiece disc with arbitrary 100 divisions) and Stage micrometer (precision slide engraved with true 1 millimeter divided into 100 parts, each division exactly equal to 10 micrometers); Microscope magnification calibration.",
    "University Examination Strategy: Detail the preparation and function of FAA fixative, outline the complete graded dehydration and paraffin embedding sequence, and calibrate an ocular micrometer using a stage micrometer."
], [
    "FAA Formulation: 90 mL 70 percent Ethanol + 5 mL Glacial Acetic Acid + 5 mL 40 percent Formaldehyde.",
    "Stage Micrometer Standard Scale: Exactly 1.0 millimeter divided into 100 units (1 unit = 10 micrometers).",
    "Calibration Factor Formula: Micrometer Factor = (Stage Divisions * 10 micrometers) / (Ocular Divisions).",
    "Phloroglucinol Lignin Test: Phloroglucinol in concentrated HCl yields vivid cherry-red/magenta coloration.",
    "Safranin Target Component: Selectively stains lignified, suberized, and cutinized cell walls red.",
    "Fast Green Target Component: Counterstains cellulosic primary cell walls and cytoplasm brilliant green.",
    "Xylene Histological Function: Clearing agent miscible with both absolute alcohol and molten paraffin wax.",
    "Paraffin Infiltration Temperature: Maintained strictly at 58 to 60 degrees Celsius in laboratory oven.",
    "Microtome Clearance Angle: Optimum knife angle is 3 to 5 degrees to prevent tissue compression.",
    "Exam Scoring Tip: When calculating the micrometer calibration factor, always choose coincident lines that span as large an ocular distance as possible to minimize random reading error."
])

add("Botany Lab III", 2, "Botany  III: Standard Preparations & Calibration Methods", [
    "Free-Hand Sectioning Technique: Pith support technique using carrot or elderberry pith cylinder to hold soft botanical specimens; Using fine double-edged razor blade lubricated with water; Pulling blade smoothly across tissue to produce ultra-thin, uniform transverse sections.",
    "Selection & Transfer of Thin Sections: Transferring sections from water watch glass using fine camel hair brush (never forceps or needles); Selecting thinnest, completely transparent sections under dissection stereomicroscope; Discarding wedge-shaped or thick sections.",
    "Double Staining Procedure for Plant Sections: (1) Stain sections in 1 percent Safranin for 3-5 minutes; (2) Wash thoroughly with distilled water to remove excess dye; (3) Destain with acidified 50 percent alcohol if overstained; (4) Dehydrate through 70 and 90 percent ethanol; (5) Counterstain in 0.5 percent Fast Green for 30-60 seconds; (6) Differentiate in absolute ethanol; (7) Clear in xylene.",
    "Mounting Media & Permanent Slide Preparation: Canada balsam (natural resin dissolved in xylene, refractive index n = 1.535 matching glass slide) or DPX mountant (distyrene, plasticizer, xylene); Lowering coverslip slowly at 45-degree angle with dissecting needle to prevent air bubble entrapment.",
    "Epidermal Peeling for Stomatal Studies: Stripping abaxial epidermis from Tradescantia, Rhoeo, or Bryophyllum leaves; Mounting in glycerin; Calculating stomatal frequency (number of stomata per square millimeter of leaf area) and Stomatal Index (I = [S / (E + S)] * 100).",
    "Maceration Technique for Wood Elements: Jeffrey's method (equal parts 10 percent chromic acid and 10 percent nitric acid at room temperature) or Schulze's method (potassium chlorate with concentrated nitric acid); Dissolves middle lamella pectin, isolating intact individual xylem vessels, tracheids, and fibers.",
    "Pollen Viability & Germination Assays: In vitro pollen tube germination in Brewbaker and Kwack liquid medium (10 percent sucrose, boric acid, calcium nitrate); Acetocarmine / FDA (fluorescein diacetate) staining test for assessing pollen fertility and viability percentage under microscope.",
    "Histochemical Localization of Starch, Proteins & Lipids: Lugol's iodine for amyloplast starch granules; Mercuric bromophenol blue for intracellular protein bodies in aleurone layers; Sudan IV or Sudan Black B for cuticular lipid waxes and seed oil drops.",
    "Microscopic Measurement of Cell Dimensions: Measuring length and width of parenchyma cells, xylem vessel diameters, and fiber lengths using calibrated ocular micrometer; Statistical sampling across minimum 30 representative cells per tissue zone.",
    "University Examination Strategy: Execute double staining with Safranin and Fast Green, prepare a bubble-free permanent slide mount in DPX, calculate the Stomatal Index formula step-by-step, and identify macerated wood elements."
], [
    "Stomatal Index Formula: Stomatal Index I = [S / (E + S)] * 100 (where S is stomata count, E is epidermal cell count).",
    "DPX Mountant Composition: Distyrene, Plasticizer (tricresyl phosphate), and Xylene (refractive index 1.52).",
    "Canada Balsam Refractive Index: Exactly 1.535 (matches standard optical soda-lime microscope glass slides).",
    "Coverslip Placement Rule: Lowered gently at 45-degree angle using fine needle to exclude all air bubbles.",
    "Jeffrey's Maceration Fluid: Equal parts 10 percent Nitric Acid (HNO3) and 10 percent Chromic Acid (H2CrO4).",
    "Boric Acid Pollen Role: Essential micro-nutrient promoting rapid in vitro pollen tube germination and elongation.",
    "Sudan IV Reaction: Selectively stains neutral lipids, cutin, and suberin lamellae bright red-orange.",
    "Stomatal Density Unit: Expressed as total stomata count per square millimeter of foliar surface.",
    "Acetocarmine Stain: 1 percent carmine dissolved in 45 percent boiling glacial acetic acid for nuclear staining.",
    "Exam Scoring Tip: The Stomatal Index is a constant taxonomic parameter for a given plant species, independent of leaf size or environmental growing conditions, unlike stomatal frequency."
])

add("Botany Lab III", 3, "Botany  III: Core Experimental Procedures & Synthesis", [
    "Transverse Section (T.S.) of Anomalous Dicot Stem: Bignonia: Preparing double-stained T.S.; Identifying four deep wedges of secondary phloem grooved into secondary xylem; Uniseriate to multiseriate medullary rays; Pitted xylem vessels and thick-walled fibers; Distinguishing primary eustele.",
    "Transverse Section of Boerhavia diffusa Stem: Preparing double-stained T.S.; Identifying anomalous accessory rings of vascular bundles; Inner pair of large medullary bundles, middle intermediate ring, and outer continuous ring of secondary bundles embedded in conjunctive tissue.",
    "Transverse Section of Monocot Stem with Anomalous Thickening (Dracaena): Identifying primary scattered atactostele bundles; Demonstrating secondary meristem arising in outer pericyclic cortex, producing closed amphivasal (leptocentric) secondary vascular bundles surrounded by lignified conjunctive tissue.",
    "Comparative Histology of Primary Dicot vs Monocot Roots: Sunflower root (diarch/tetrarch exarch xylem, small pith) vs Maize root (polyarch exarch xylem with >8 bundles, prominent central parenchymatous pith, thick endodermis with U-shaped wall thickenings).",
    "Comparative Foliar Histology (Dicot vs Monocot): Mango / Ficus leaf (dorsiventral, upper palisade and lower spongy mesophyll, hypostomatic) vs Maize leaf (isobilateral, undifferentiated mesophyll, amphistomatic, large bulliform cells in adaxial epidermis, Kranz anatomy bundle sheath).",
    "Xerophytic Leaf Adaptations in Nerium: Multilayered upper and lower epidermis covered with heavy cuticular wax; Biseriate to triseriate palisade parenchyma on both surfaces; Stomata sunken within deep abaxial stomatal crypts lined with protective epidermal trichomes.",
    "Aquatic Hydrophyte Anatomy in Hydrilla / Eichhornia: Extreme reduction of protective cuticle and mechanical sclerenchyma; Immense development of interconnected aerenchyma air lacunae providing buoyancy and gas diffusion; Vestigial, poorly lignified central vascular strand.",
    "Dissection & Whole Mount of Plant Embryos: Dissecting developing seeds of Crotalaria, Brassica, or Capsella under stereomicroscope; Isolating globular, heart-shaped, and torpedo embryo stages; Mounting in glycerin; Identifying suspensor, cotyledons, and shoot apical meristem.",
    "Ovule Whole Mounts & Embryo Sac Demonstration: Dissecting ovules from fresh ovaries of Lilium, Hibiscus, or Tridax; Demonstrating anatropous ovule orientation, micropyle, chalaza, and embryo sac under high-power microscope.",
    "University Examination Strategy: Section, stain, and mount Bignonia or Boerhavia stem showing anomalous secondary growth, draw clear sectorial and ground plan diagrams with pencil, and state three diagnostic anatomical reasons for identification."
], [
    "Bignonia Diagnostic Feature: Secondary xylem traversed by four prominent equidistant wedges of secondary phloem.",
    "Boerhavia Diagnostic Feature: Presence of two prominent medullary vascular bundles in the central core.",
    "Dracaena Vascular Bundle Type: Amphivasal (leptocentric) bundles where xylem completely rings central phloem.",
    "Nerium Diagnostic Feature: Sunken stomata enclosed within hairy cavities called stomatal crypts on lower epidermis.",
    "Maize Leaf Diagnostic Feature: Large motor / bulliform cells on upper epidermis and Kranz bundle sheath cells.",
    "Hydrilla Stem Diagnostic Feature: Immense continuous aerenchymatous air chambers with vestigial vascular strand.",
    "Capsella Embryo Heart Stage: Bilobed apex corresponding to the initiation of two cotyledonary primordia.",
    "Amphivasal Bundle Definition: Xylem tissue completely encircles the central phloem core.",
    "Amphicribral Bundle Definition: Phloem tissue completely encircles the central xylem core (e.g. fern rhizomes).",
    "Exam Scoring Tip: In practical exams, always provide both a low-power ground plan diagram showing tissue boundaries and a detailed high-power sectorial diagram showing cellular wall details."
])

add("Botany Lab III", 4, "Botany  III: Quantitative Data Verification & Error Analysis", [
    "Statistical Sampling in Botanical Microscopy: Random field selection protocols; Sample size determination; Measuring minimum 30 independent cell diameters per tissue to satisfy Central Limit Theorem; Computing sample mean, standard deviation, and standard error of the mean.",
    "Quantitative Stomatal Analysis: Counting stomata (S) and epidermal cells (E) across 10 random microscopic fields at 400x magnification; Calculating Stomatal Index: I = [S / (E + S)] * 100; Computing coefficient of variation (CV = [standard deviation / mean] * 100 percent).",
    "Vascular Bundle Frequency & Dimension Metrics: Measuring xylem vessel lumen diameters (inner minor and major axes) using calibrated ocular micrometer; Calculating hydraulic mean diameter: Dh = sum(d to the fifth power) / sum(d to the fourth power) according to Hagen-Poiseuille conductometric theory.",
    "Pollen Grain Size & Viability Quantification: Measuring polar (P) and equatorial (E) diameters of pollen grains (P/E ratio); Evaluating percentage viability: Viability = (Count of stained fertile pollen / Total pollen counted) * 100 percent across minimum 200 grains.",
    "Aerenchyma Void Fraction in Hydrophytes: Point-counting grid method on transverse sections of petiole/stem; Calculating volumetric air space porosity: Porosity = (Grid points falling on air lacunae / Total tissue grid points) * 100 percent.",
    "Sources of Systematic & Random Errors: Systematic: Ocular calibration offset, coverslip thickness refraction bias, non-perpendicular sectioning angle (oblique slicing overestimates cell diameter); Random: Operator visual acuity, focus drift, biological tissue variability.",
    "Measurement of Wood Fiber Dimensions: Macerated wood fiber length (L), fiber diameter (D), and lumen diameter (d); Calculating Runkel ratio: Runkel = 2 * w / d (where w is cell wall thickness); Crucial pulp and paper manufacturing index.",
    "Growth Ring Width Measurements in Dendrochronology: Microscopic measurement of annual ring widths; Distinguishing earlywood vs latewood boundaries; Cross-dating cores and constructing tree-ring index series.",
    "Data Presentation & Error Reporting: Tabulating raw microscopic counts; Reporting metrics as Mean plus/minus Standard Error with confidence intervals; Plotting frequency histograms of cell size distributions.",
    "University Examination Strategy: Calculate the Stomatal Index and standard error from raw microscope counting data, evaluate the hydraulic vessel diameter Dh, and determine the Runkel ratio of macerated fibers."
], [
    "Sample Standard Deviation Formula: s = sqrt([sum(x - mean) squared] / [n - 1]).",
    "Standard Error of the Mean: SEM = s / sqrt(n).",
    "Hydraulic Vessel Diameter: Dh = sum(d to the 5th power) / sum(d to the 4th power) (Sperry hydraulic conductance).",
    "Runkel Paper Fiber Ratio: Runkel Ratio = (2 * Wall Thickness) / (Lumen Diameter).",
    "Flexibility Coefficient: (Lumen Diameter / Fiber Diameter) * 100 percent (paper tensile strength index).",
    "Pollen P/E Shape Classification: Oblate (<0.75), Spheroidal (0.75-1.33), Prolate (>1.33).",
    "Oblique Sectioning Distortion: An oblique section falsely exaggerates cell diameter by factor of 1 / cos(theta).",
    "Minimum Sample Size Rule: Minimum n = 30 measurements required for valid parametric normal statistics.",
    "Coefficient of Variation: CV = (Standard Deviation / Mean) * 100 percent.",
    "Exam Scoring Tip: In microscopic morphometry, always report calculated cell dimensions in micrometers (not ocular divisions or millimeters)."
])

add("Botany Lab III", 5, "Botany  III: Comprehensive Practical Record & Viva Voce", [
    "Practical Laboratory Notebook Standards: Maintenance of accurate, dated records; Ground plan diagrams drawn with hard pencil (2H); Cellular sectorial details illustrating precise wall thickness, cell junctions, and lumen shapes; No artistic shading; Clear ruled label leader lines.",
    "Taxonomic Herbarium Record Preparation: Standard herbarium sheet dimensions: 29 x 41.5 centimeters (11.5 x 16.5 inches); Plant pressing, drying under pressure, poisoning with 2 percent mercuric chloride, mounting, and standard label at bottom right corner.",
    "Preparation of Botanical Museum Wet Specimens: Preserving morphological specimens in glass museum jars; Formalin-glycerol preservative fluid (5 percent formalin, 5 percent glycerol in distilled water); Retention of natural green chlorophyll using copper acetate solution.",
    "Viva Voce: Primary vs Secondary Plant Body: Primary body derived from apical meristems (procambium, protoderm, ground meristem); Secondary body derived from lateral meristems (vascular cambium producing wood and bast, phellogen producing periderm).",
    "Viva Voce: Endarch vs Exarch Xylem: Endarch (protoxylem develops toward center, metaxylem toward periphery, found in stems); Exarch (protoxylem develops toward periphery, metaxylem toward center, found in roots).",
    "Viva Voce: Significance of Casparian Strips: Blocks apoplastic diffusion of soil solution across root endodermis; Forces all water and dissolved mineral ions through selective plasma membrane of endodermal cells into stele.",
    "Viva Voce: Role of Tapetum in Anther: Provides nutrition to developing microspore mother cells and microspores; Synthesizes callase enzyme to dissolve tetrads; Secretes Ubisch bodies / orbicules for sporopollenin exine deposition.",
    "Viva Voce: Biological Difference: Pollen Grain vs Microspore: Microspore is single haploid cell produced by meiosis; Pollen grain is mature male gametophyte containing vegetative cell and generative cell / two sperm cells.",
    "Viva Voce: Tyloses in Wood: Balloon-like parenchymatous protoplasmic protrusions extending through pit pairs into lumen of xylem vessels in heartwood; Plugs vessel lumen, preventing water transport and fungal invasion.",
    "University Examination Strategy: Review all 10 diagnostic viva voce questions on stele evolution, anomalous cambial growth, and double fertilization, and maintain a pristine practical record book."
], [
    "Standard Herbarium Sheet Dimensions: Strictly 29 x 41.5 centimeters (11.5 x 16.5 inches).",
    "Herbarium Poisoning Agent: 2 percent Mercuric chloride (HgCl2) in ethanol to prevent insect attack.",
    "Botanical Museum Fluid: 5 percent Formalin + 5 percent Glycerol in distilled water.",
    "Copper Acetate Treatment: Preserves green chlorophyll coloration in wet museum jars.",
    "Tyloses Anatomical Nature: Outgrowths of xylem parenchyma protruding through pits into vessel lumens.",
    "Ubisch Bodies (Orbicules): Granules produced by tapetum that transport sporopollenin to pollen wall.",
    "Stele Definition: Central cylinder of root or stem comprising pericycle, vascular tissues, and pith.",
    "Eustele Definition: Stele with vascular bundles arranged in a distinct circle around central pith (dicot stems).",
    "Atactostele Definition: Stele with vascular bundles scattered throughout ground tissue (monocot stems).",
    "Exam Scoring Tip: In viva voce examinations, always define whether a structure is primary or secondary in origin and identify its specific meristematic source."
])

# Save updated dataset
with open('scripts/sem3_life_complete_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
