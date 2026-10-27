import json
import os

with open("scripts/build_bsc_sem2_life.py", "r", encoding="utf-8") as f:
    content = f.read()

part1 = '''
# =========================================================================
# 1. MICROBIAL DIVERSITY OF LOWER PLANTS – II (B.Sc Life Sciences Sem 2)
# =========================================================================

add_unit(
    "bsc-bot-mdlp: pteridophytes",
    [
        "General Characteristics of Pteridophytes: First terrestrial vascular cryptogams possessing differentiated roots, stems, and leaves; Independent alternating generations with dominant sporophyte (2n) and free-living photosynthetic prothallus (n); Tracheids present in xylem, sieve cells in phloem.",
        "Stelar Evolution in Vascular Cryptogams: Progressive evolutionary complexity: Protostele (solid central xylem core without pith, as in Lycopodium and Rhynia); Siphonostele (pith present, ectophloic or amphiphloic); Solenostele (perforated by leaf gaps); Dictyostele (broken into individual meristeles, as in Dryopteris); Eustele in higher seed plants.",
        "Heterospory and Evolution of Seed Habit: Differentiation of two distinct spore sizes: Small microspores developing into male gametophytes and large megaspores developing into female gametophytes inside megasporangium; Pioneer evolutionary step demonstrated in Selaginella and Marsilea.",
        "Morphology and Reproduction of Lycopodium (Club Moss): Sporophyte with dichotomously branched slender stem, microphyllous leaves with single unbranched vein; Reniform homosporous sporangia aggregated into terminal strobili; Subterranean mycorrhizal prothallus.",
        "Morphology and Reproduction of Selaginella (Spike Moss): Heterosporous lycopod featuring unique leafless geotropic cylindrical axes termed rhizophore; Trabecular endodermis in stem; Heterosporous strobilus containing microsporangia and megasporangia; Ligulate leaves with basal ligule.",
        "Morphology and Anatomy of Equisetum (Horsetail): Articulated ribbed stem with nodes, internodes, and whorled microphylls; Internal anatomical structure exhibiting central hollow canal, carinal canals aligned with ridges, and vallecular canals aligned with furrows; Silica encrusted epidermal cells.",
        "Reproductive Biology of Equisetum: Terminal sporangiferous spike composed of peltate sporangiophores; Homosporous green spherical spores bearing four hygroscopic ribbon-like elaters functioning in wind-dispersal under varying humidity.",
        "Morphology and Anatomy of Marsilea (Water Fern): Aquatic or amphibious creeping rhizome with solenostelic vascular anatomy; Long petiolate compound leaf with four clover-like leaflets exhibiting circinate vernation; Aerenchyma tissue aiding buoyancy.",
        "Reproduction in Marsilea Sporocarp: Hard, drought-resistant bivalved bean-shaped sporocarp containing multiple sori; Each sorus bears microsporangia and megasporangia surrounded by a gelatinous ring; Germinates in water by emergence of extruded gelatinous sorophore.",
        "Telome Theory of Zimmermann: Evolutionary morphogenetic synthesis: Complex vascular plant morphology derived from primitive Leafless dichotomous axis systems (telomes) through five elementary evolutionary processes: Overtopping, planation, syngenesis (webbing), reduction, and recurvation."
    ],
    [
        "Vascular Cryptogam Status: First land plants possessing xylem and phloem vascular systems.",
        "Protostele Character: Primitive central vascular cylinder completely devoid of pith.",
        "Heterospory Evolutionary Significance: Direct evolutionary precursor to the seed habit of gymnosperms and angiosperms.",
        "Selaginella Rhizophore: Unique organ sharing morphological attributes of both stem and root.",
        "Equisetum Canal Architecture: Vallecular canals in cortex plus carinal canals associated with protoxylem.",
        "Equisetum Spore Elaters: Four hygroscopic spoon-tipped bands assisting air dispersal.",
        "Marsilea Sporocarp: Specialized hard, bivalved reproductive organ enclosing heterosporous sori.",
        "Telome Theory Mechanism: Overtopping and webbing explain derivation of megaphyllous foliage leaves.",
        "Gametophyte Generation: Independent, photosynthetic, heart-shaped free-living prothallus in homosporous ferns.",
        "Exam Tip: In viva voce, distinguish between homospory in Lycopodium and heterospory in Selaginella, noting that heterospory is the decisive milestone for seed habit evolution."
    ]
)

add_unit(
    "bsc-bot-mdlp: gymnosperms",
    [
        "General Characteristics of Gymnosperms: Naked-seeded vascular plants lacking enclosed ovary wall; Ovules borne directly on open megasporophylls; Secondary growth common with pycnoxylic or manoxylic wood; Polyembryony and wind pollination (anemophily).",
        "Classification of Gymnosperms: Classic taxonomic divisions: Cycadales (palm-like habit, compound pinnate leaves, unbranched trunk), Coniferales (branched trees, needle leaves, resin canals), and Gnetales (advanced angiosperm-like features).",
        "Morphology and Anatomy of Cycas: Palm-like habit with crown of large pinnate compound leaves showing circinate vernation in young fronds; Normal tap roots and apogeotropic dichotomously branched coralloid roots harboring endophytic nitrogen-fixing cyanobacteria (Nostoc and Anabaena).",
        "Anatomy of Cycas Stem and Leaflet: Manoxylic wood (soft, loose, rich in parenchyma, non-compact); Leaflet transverse section displays thick cuticle, sunken stomata, sclerenchymatous hypodermis, and unique horizontal transfusion tissue aiding lateral conduction.",
        "Reproduction and Ovule of Cycas: Dioecious plant; Male plant produces single massive terminal male cone of spirally arranged microsporophylls bearing microsporangia; Female plant produces crown of loose leafy megasporophylls (no true female cone); Orthotropous, unitegmic ovule is the largest in the plant kingdom.",
        "Morphology and Anatomy of Pinus: Tall monopodial evergreen tree with dimorphic branches: Branches of unlimited growth (long shoots) and dwarf shoots (spur shoots) bearing acicular needle leaves in fascicles; Pycnoxylic wood (dense, compact, devoid of vessels, consisting of tracheids with bordered pits).",
        "Anatomy of Pinus Needle: Transverse section reveals extreme xerophytic adaptations: Thick cutinized epidermis, sunken stomata on all faces, sclerenchymatous hypodermis, peg-like infolded mesophyll cells, prominent resin ducts, and two vascular bundles flanked by transfusion tissue.",
        "Reproductive Cones and Pollination in Pinus: Monoecious habit; Male cones replace dwarf shoots and produce winged microspores (pollen grains with two air sacs); Female cones require two to three years for maturity; Winged anemophilous pollination.",
        "Morphology and Advanced Features of Gnetum: Climbing woody lianas or trees with opposite decussate broad leaves resembling dicot angiosperms; Reticulate venation; True vessels present in secondary xylem; Compound strobili (inflorescences) with collar-like cupules; Non-archegoniate female gametophyte in advanced species.",
        "Evolutionary Position of Gymnosperms: Intermediate evolutionary bridge linking heterosporous pteridophytes with flowering angiosperms; Living fossils (Cycas and Ginkgo biloba) exhibiting motile ciliated sperms and primitive reproductive morphologies."
    ],
    [
        "Gymnosperm Defining Trait: Naked ovules borne directly exposed on sporophylls without carpel enclosure.",
        "Pycnoxylic vs Manoxylic Wood: Pycnoxylic wood in Pinus is dense and durable; manoxylic wood in Cycas is parenchymatous and soft.",
        "Cycas Coralloid Roots: Symbiotic housing for nitrogen-fixing cyanobacteria (Nostoc and Anabaena).",
        "Pinus Needle Stomata: Deeply sunken stomatal cavities to drastically reduce water loss.",
        "Pinus Pollen Adaptation: Biporate winged pollen grains possessing two lateral air bladders for wind dispersal.",
        "Largest Plant Ovule: Cycas produces the largest ovules (up to 6 cm) and largest motile sperms in the plant kingdom.",
        "Gnetum Angiospermic Traits: Broad net-veined leaves and presence of true vessels in xylem.",
        "Resin Ducts: Epithelial-lined secretory canals running longitudinally and horizontally in Pinus wood.",
        "Polyembryony: Development of multiple embryos within a single fertilized gymnosperm ovule.",
        "Exam Tip: In examinations, emphasize that Gnetum represents the closest evolutionary gymnosperm relative to angiosperms because of its vessel-containing xylem and opposite leaves with reticulate venation."
    ]
)

add_unit(
    "bsc-bot-mdlp: paleobotany",
    [
        "Geological Time Scale and Plant Evolution: Historical sequence of eras, periods, and epochs: Precambrian (origin of life), Paleozoic (Silurian emergence of vascular plants, Devonian radiation, Carboniferous coal swamps), Mesozoic (Age of Cycads and Gymnosperms), and Cenozoic (Age of Angiosperms).",
        "Taphonomy and Process of Fossilization: Conditions facilitating fossil preservation: Rapid burial in fine-grained anaerobic lacustrine, deltaic, or volcanic ash sediments; Prevention of microbial enzymatic decay; Progressive mineralization of cellular frameworks.",
        "Major Morphological Types of Plant Fossils: Petrifactions (cellular internal anatomy preserved by infiltration of silica, calcium carbonate, or pyrite, as in coal balls); Compressions (flattened carbonaceous organic residues); Impressions (surface negative imprints without organic residue); Casts and molds (cavities filled with mineral sediment); Amber casts (resinous inclusions preserving delicate cellular details).",
        "Radiometric and Stratigraphic Dating Methods: Radiocarbon dating (carbon-14 decay, half-life 5730 years) for recent sub-fossils up to 50000 years; Potassium-argon and argon-argon isotope dating for Paleozoic and Mesozoic sedimentary strata; Index fossil biostratigraphy.",
        "Morphology and Anatomy of Rhynia (Psilophytales): Lower Devonian primitive vascular land plant discovered in Rhynie chert of Scotland; Leafless, rootless dichotomously branched axis; Subterranean creeping rhizome with rhizoids; Solid central protostele with endarch xylem; Terminal upright fusiform homosporous sporangia.",
        "Morphology of Cooksonia and Asteroxylon: Cooksonia: Oldest known Silurian vascular plant with terminal trumpet-shaped sporangia; Asteroxylon: Devonian lycopsid exhibiting emerging microphyll-like enations lacking vascular traces, representing the evolutionary genesis of microphylls.",
        "Morphology and Structure of Lepidodendron: Giant arborescent Carboniferous club moss reaching 30 meters height; Dichotomously branched crown; Characteristic diamond-shaped or rhomboidal leaf cushions (leaf scars) on trunk surface; Stigmaria subterranean rooting axes; Lepidostrobus heterosporous cones.",
        "Morphology and Structure of Calamites: Giant Carboniferous arborescent sphenopsid (horsetail relative) reaching 20 meters height; Vertically ribbed, jointed woody trunk with whorls of foliage leaves (Annularia); Complex internal siphonostele with secondary xylem; Calamostachys heterosporous cones.",
        "Contributions of Professor Birbal Sahni: Father of Indian Palaeobotany; Established the Birbal Sahni Institute of Palaeobotany (BSIP) in Lucknow; Discovered the Pentoxylales, an extinct group of Jurassic gymnosperms; Investigated fossil flora of the Rajmahal Hills and Deccan Intertrappean beds.",
        "Palaeobotanical Applications and Fossil Fuels: Reconstructing paleoclimates via fossil stomatal density and leaf margin analysis; Palynology (fossil pollen and spore analysis) in biostratigraphic correlation for petroleum and coal seam exploration."
    ],
    [
        "Petrifaction Definition: Mode of fossilization where mineral solutions infiltrate and preserve internal cellular anatomy.",
        "Rhynie Chert Significance: Devonian fossil deposit in Scotland preserving the earliest well-preserved land plants.",
        "Rhynia Structural Features: Simple leafless and rootless dichotomous axes with terminal sporangia.",
        "Lepidodendron Leaf Scars: Rhomboidal leaf cushions left on fossil tree trunks after leaf abscission.",
        "Stigmaria Identity: Fossil root systems of Carboniferous arborescent lycopods like Lepidodendron.",
        "Birbal Sahni Landmark: Discovery and morphological description of the fossil order Pentoxylales.",
        "Mesozoic Era Identity: Geologic era renowned as the dominant Age of Gymnosperms and Cycadophytes.",
        "Coal Ball Nature: Petrified calcareous or pyritic nodular masses containing exquisitely preserved plant cells.",
        "Index Fossil Utility: Fossils with narrow geological age range used to date and correlate rock strata.",
        "Exam Tip: In paleobotany diagrams, always clearly differentiate petrifactions (which preserve internal histology) from compressions and impressions (which preserve only external macromorphology)."
    ]
)

add_unit(
    "bsc-bot-mdlp: plant diversity",
    [
        "Ecological Adaptive Radiation of Lower Vascular Plants: Evolutionary conquest of land habitats: Development of waxy cuticles preventing desiccation, regulated stomata for gas exchange, lignified tracheids providing structural posture, and rhizoid/root systems for subterranean anchoring.",
        "Transition from Homospory to Heterospory: Critical evolutionary divergence: Homospory requires bisexual gametophytes dependent on external film of water for fertilization; Heterospory enables sexual division of labor, endosporic gametophytic development, and protective nutritional provisioning of embryonic sporophytes.",
        "Progressive Gametophytic Reduction: Clear evolutionary trend across land plants: Prominent dominant gametophyte in bryophytes reduced to subterranean or heart-shaped prothallus in pteridophytes, and further reduced to microscopic few-celled endosporic structures enclosed inside pollen grains and ovules of gymnosperms.",
        "Mycorrhizal Associations in Lower Vascular Taxa: Obligate and facultative fungal symbioses: Endotrophic arbuscular mycorrhizae in rhizomes of Psilotum and prothalli of Lycopodium; Ectotrophic mycorrhizal fungal mantles surrounding root tips of Pinus facilitating phosphorus and mineral uptake in nutrient-poor soils.",
        "Xerophytic Adaptations in Gymnosperm Foliage: Morphological and anatomical modifications for moisture conservation: Acicular needle leaves minimizing surface area-to-volume ratio, multi-layered cutinized epidermis, deeply sunken stomata in stomatal crypts, sclerenchymatous hypodermis, and transfusion tissue.",
        "Endangered Lower Plant Taxa of the Indian Subcontinent: Vulnerable and threatened species: Primitive lycopod Lycopodium clavatum, resurrection plant Selaginella bryopteris, epiphytic fern Ophioglossum reticulatum, and endemic gymnosperms Cycas beddomei and Gnetum ula in the Western Ghats and Eastern Ghats.",
        "In Situ and Ex Situ Conservation of Cryptogams: Preservation frameworks: In situ protection within Biosphere Reserves and National Parks; Ex situ germplasm conservation in specialized Fern Houses (ferneries), botanical gardens, spore cryopreservation banks, and in vitro gametophyte tissue culture repositories.",
        "Invasive Lower Vascular Weeds: Ecological disruption caused by alien invasive pteridophytes: Water velvet fern Salvinia molesta and mosquito fern Azolla forming dense floating mats over freshwater wetlands, obstructing sunlight, triggering hypoxia, and suffocating indigenous aquatic biodiversity.",
        "Bioindicator Roles of Lower Plants: Epiphytic ferns and gymnosperms as sensitive biological indicators: Lichen and bryophyte sensitivity to sulfur dioxide; Fern spore morphological abnormalities reflecting toxic heavy metal soil contamination in post-mining wastelands.",
        "Phylogenetic Placement of Seedless Vascular Taxa: Modern APG (Angiosperm Phylogeny Group) and PPG (Pteridophyte Phylogeny Group) classifications: Dividing seedless vascular plants into Lycophytes (microphyllous lineage) and Monilophytes (true ferns, horsetails, whisk ferns with megaphyllous ancestry)."
    ],
    [
        "Lignin Evolutionary Role: Complex polymer providing mechanical stiffness for vertical land plant posture.",
        "Endosporic Development: Gametophyte completes embryonic development entirely within the spore wall.",
        "Gametophyte Reduction Rule: Progressive reduction in size and autonomy from bryophytes to seed plants.",
        "Pinus Mycorrhizal Dependence: Seedlings cannot survive naturally without symbiotic ectomycorrhizal root fungi.",
        "Cycas beddomei Status: Endangered endemic cycad native to the dry hills of Andhra Pradesh.",
        "Salvinia molesta Threat: Aggressive invasive floating aquatic fern clogging tropical waterways.",
        "Fern House Purpose: Ex situ greenhouse facility providing regulated humidity for endangered pteridophytes.",
        "Lycophyte vs Monilophyte: Lycophytes bear microphylls; Monilophytes (ferns) bear megaphyllous fronds.",
        "Desiccation Tolerance: Resurrection plant Selaginella bryopteris curls up during drought and re-greens upon hydration.",
        "Exam Tip: In viva, explain that the transition to heterospory allowed the gametophyte to become endosporic, protecting the delicate egg and embryo from environmental desiccation."
    ]
)

add_unit(
    "bsc-bot-mdlp: economic importance",
    [
        "Ornamental Significance of Pteridophytes: Horticultural cultivation of ornamental ferns for aesthetic landscaping and indoor foliage: Boston fern (Nephrolepis exaltata), Maidenhair fern (Adiantum capillus-veneris), Bird nest fern (Asplenium nidus), and Staghorn fern (Platycerium bifurcatum).",
        "Agricultural Biofertilizer Role of Azolla: Aquatic heterosporous water fern Azolla forms symbiotic association with nitrogen-fixing cyanobacterium Anabaena azollae inside dorsal leaf cavities; Inoculated into lowland rice paddy fields, fixing 30 to 50 kg of atmospheric nitrogen per hectare annually.",
        "Medicinal Applications of Pteridophytes: Pharmacological uses: Lycopodium powder (microscopic spores used in pharmaceutical dusting powder and homeopathic medicine); Rhizomes of Dryopteris filix-mas (Male Fern) yield filicin used as anthelmintic agent against tapeworms; Equisetum arvense rich in soluble silica used as herbal diuretic.",
        "Culinary and Dietary Uses of Pteridophytes: Edible fern fiddleheads: Young coiled vegetative fronds of Diplazium esculentum consumed as green vegetables across South and Southeast Asia; Sporocarps of Marsilea (known as water clover) ground into starchy paste and consumed during seasonal food scarcity.",
        "Industrial Timber and Wood Pulp from Gymnosperms: Coniferous softwoods provide high-grade structural timber, plyboard, and long-fibered cellulose wood pulp for the paper industry: Himalayan cedar (Cedrus deodara), Chir pine (Pinus roxburghii), and blue pine (Pinus wallichiana).",
        "Edible Seeds and Food Products of Gymnosperms: Nutrient-rich seeds: Chilgoza pine nuts harvested from Pinus gerardiana in the northwestern Himalayas, rich in unsaturated fatty acids and proteins; Sago starch extracted from the trunk pith of Cycas revoluta and Cycas circinalis.",
        "Oleoresins, Turpentine, and Rosin: Tapping living trunks of Pinus species yields crude oleoresin; Fractional distillation separates volatile steam distillate oil of turpentine (industrial paint solvent) from solid non-volatile residue rosin (used in paper sizing, varnishes, and violin bows).",
        "Pharmaceutical Alkaloids from Gymnosperms: Ephedrine alkaloid extracted from dried green stems of Ephedra sinica and Ephedra gerardiana, clinically prescribed as bronchodilator for bronchial asthma and nasal decongestant; Taxol (paclitaxel) extracted from the bark of Taxus brevifolia and Taxus wallichiana, a premier chemotherapeutic drug inhibiting cancer cell mitosis.",
        "Living Fossils and Evolutionary Heritage: Ginkgo biloba (Maidenhair tree): Surviving monotypic gymnosperm order Ginkgoales, revered as living fossil preserved in Chinese temple gardens; Resilient to industrial atmospheric pollution; Extracts of Ginkgo leaves prescribed for enhancing peripheral vascular and cerebral microcirculation.",
        "Canada Balsam and Laboratory Mounting Media: High-refractive-index natural oleoresin tapped from resin blisters in the bark of Abies balsamea (Balsam fir); Optical clarity and refractive index matching optical crown glass (refractive index 1.52) makes it the standard mounting medium for permanent biological microscope slides."
    ],
    [
        "Azolla Biofertilizer: Fixes atmospheric nitrogen in rice paddies via symbiotic Anabaena azollae.",
        "Chilgoza Source: Edible roasted seeds harvested from the Western Himalayan conifer Pinus gerardiana.",
        "Ephedrine Drug: Bronchodilator alkaloid extracted from the gymnosperm shrub Ephedra.",
        "Taxol Origin: Renowned anti-cancer drug originally isolated from the bark of Taxus trees.",
        "Canada Balsam Origin: Oleoresin harvested from Abies balsamea with refractive index matching microscope glass.",
        "Turpentine Source: Distillation fraction of oleoresin tapped from Pinus roxburghii.",
        "Lycopodium Powder Use: Fine hydrophobic spores used as non-clumping dusting powder and in fireworks.",
        "Sago Starch Source: Edible starch harvested from the pith of Cycas stems.",
        "Nephrolepis Utility: Premier indoor ornamental fern commonly known as the Boston fern.",
        "Exam Tip: In examinations, highlight Taxus (source of paclitaxel) and Ephedra (source of ephedrine) as prime examples of high-value life-saving pharmaceuticals derived from gymnosperms."
    ]
)

# =========================================================================
# 2. BOTANY LAB II (B.Sc Life Sciences Sem 2)
# =========================================================================

add_unit(
    "bsc-botlab: safety & instrumentation",
    [
        "Botanical Laboratory Safety Protocols: Personal safety measures: Mandatory lab coats, safety spectacles, disposable gloves; Safe disposal of broken glassware, cover slips, and sharp razor blades into designated puncture-proof sharps containers.",
        "Safe Handling of Chemical Fixatives: Toxic properties of botanical fixatives: FAA (Formalin Aceto-Alcohol: formaldehyde, glacial acetic acid, ethyl alcohol) and Carnoy fluid; Operations involving concentrated formaldehyde must be conducted under mechanical fume exhaust hoods to avoid respiratory mucosal irritation.",
        "Hazard Management for Dehydrating and Clearing Solvents: Flammability and toxicity of industrial organic reagents: Absolute ethyl alcohol, acetone, xylene, and clove oil; Vapors are flammable and harmful; Storage in fire-rated flammables cabinets away from open flames and heating mantles.",
        "Microtome and Free-Hand Section Cutting Safety: Proper technique for holding pith blocks and sharp razor blades during free-hand botanical sectioning; Slicing horizontally away from fingers with smooth drawing stroke; Using pith or elderberry supports for delicate or thin specimens.",
        "Compound Light Microscope Optical Alignment: Principles of biological microscopy: Condenser adjustment, iris diaphragm opening for contrast optimization, coarse and fine focusing knobs; Maintenance of optical lenses using lens cleaning paper and specialized lens fluid.",
        "Kohler Illumination Alignment: Optical setup producing even, glare-free illumination across the field of view: Focusing the condenser lens, centering the field diaphragm, and adjusting numerical aperture to match the objective lens.",
        "Stage and Ocular Micrometer Calibration: Principle of microscopic calibration: Superimposing eyepiece reticle scale (ocular micrometer) with precision calibrated stage micrometer (where 1 small division strictly equals 10 micrometers); Determining calibration factor for each objective lens power.",
        "Stereo Dissecting Microscope Operation: Incident and transmitted illumination for macro-botanical inspection; Examination of intact fern sporangia, soral arrangements, and gymnosperm cone scales in three dimensions.",
        "Handling and Maintenance of Histological Stains: Preparation and storage of organic histological dyes (safranin, fast green, acetocarmine, cotton blue); Filtering stain solutions through Whatman filter paper before staining to eliminate particulate sediment.",
        "Chemical Waste Neutralization and Disposal: Segregation of biological plant tissues from hazardous chemical reagents; Safe collection and disposal of solvent wastes (xylene, alcohol) in accordance with environmental green chemistry standards."
    ],
    [
        "Sharps Disposal Rule: Used razor blades must strictly be deposited into puncture-resistant sharps bins.",
        "FAA Fixative Composition: Formalin, glacial acetic acid, and ethyl alcohol mixed in standard ratios.",
        "Free-Hand Section Technique: Cut horizontally with a smooth, continuous drawing motion keeping razor wet with water.",
        "Microscope Lens Care: Optical surfaces must be cleaned exclusively with soft lens cleaning paper.",
        "Stage Micrometer Standard: Each stage micrometer division equals exactly 10 micrometers (0.01 mm).",
        "Kohler Illumination Goal: Achieves uniform field illumination while eliminating filament glare.",
        "Xylene Solvent Hazard: Highly volatile and toxic aromatic solvent; keep bottles tightly sealed.",
        "Cover Slip Placement: Lower cover slip at a 45-degree angle with needle to avoid trapping air bubbles.",
        "Dissecting Microscope Utility: Low-magnification stereoscopic examination of 3D reproductive structures.",
        "Exam Tip: In practical viva, explain that stage micrometer calibration must be performed separately for each objective power (10x, 40x, 100x) because the optical magnification changes while ocular divisions remain constant."
    ]
)

add_unit(
    "bsc-botlab: standard preparations",
    [
        "Preparation of Formalin Aceto-Alcohol (FAA Fixative): Standard histological preservative: 5 mL commercial 40% formaldehyde, 5 mL glacial acetic acid, and 90 mL 70% ethyl alcohol; Fixes plant tissues by coagulating cellular proteins and preserving cellular anatomy without distortion.",
        "Preparation of Safranin Stain Solution: Preparation of 1% w/v safranin in 50% ethyl alcohol: Dissolving 1 gram safranin O powder in 50 mL distilled water and 50 mL 95% ethanol; Serves as premier basic dye binding acidic lignified and suberized cell walls.",
        "Preparation of Fast Green FCF Solution: Preparation of 0.5% w/v fast green in 95% ethyl alcohol: Dissolving 0.5 gram fast green powder in 100 mL 95% ethanol; Serves as acidic counterstain binding basic cytoplasmic proteins and non-lignified cellulosic cell walls.",
        "Preparation of Acetocarmine Stain for Cytology: Dissolving 1 gram carmine powder in 100 mL boiling 45% glacial acetic acid, refluxing for 15 minutes, cooling, and filtering; Stains nuclear chromatin and condensed chromosomes deep carmine red during root tip squashes.",
        "Preparation of Cotton Blue in Lactophenol: Mounting medium and fungal stain: Dissolving 0.05 gram cotton blue in 20 mL phenol crystals, 20 mL lactic acid, 40 mL glycerol, and 20 mL distilled water; Clears fungal mycelia and stains chitin deep blue.",
        "Preparation of Temporary Glycerol Mounting Medium: Formulation of 30% to 50% aqueous glycerol solution: Mixing pure analytical grade glycerol with distilled water; Prevents desiccation and shrinkage of temporary botanical slides during prolonged microscopic examination.",
        "Double Staining Protocol for Botanical Histology: Systematic staining sequence: Section placed in safranin for 3 to 5 minutes, washed with water to remove excess dye, dehydrated in graded alcohol series (30%, 50%, 70%, 90%), counterstained with fast green for 30 seconds, washed in absolute alcohol, cleared in xylene, and mounted in DPX or Canada balsam.",
        "Preparation of Maceration Fluids: Jeffrey's maceration method: Equal parts of 10% chromic acid and 10% nitric acid; Schultze's method: Potassium chlorate crystals in concentrated nitric acid; Dissolves middle lamella, isolating individual tracheids, fibers, and vessel elements.",
        "Preparation of Physiological Buffers for Plant Enzymes: Formulating 0.1 M potassium phosphate buffer across pH 6.0 to 7.5; Preparation of standard 0.05 M citrate buffer for enzyme kinetic assays.",
        "Quality Control and Shelf-Life of Staining Solutions: Storing biological dye solutions in light-resistant amber dropper bottles; Inspecting stain clarity and checking pH periodically to maintain consistent staining intensity across laboratory batches."
    ],
    [
        "FAA Fixative Action: Rapidly kills and coagulates protoplasm while preserving cellular histology.",
        "Safranin Target: Binds selectively to lignified xylem tracheids, vessels, and sclerenchyma fibers.",
        "Fast Green Target: Counterstains cellulosic parenchyma, collenchyma, and phloem sieve elements green.",
        "Acetocarmine Use: Nuclear and chromosomal squash staining in plant cytogenetics.",
        "Lactophenol Cotton Blue: Lactic acid preserves, phenol kills, glycerol prevents drying, cotton blue stains chitin.",
        "Double Staining Contrast: Lignified walls stain brilliant red; non-lignified cellulosic walls stain bright green.",
        "Jeffrey Maceration Fluid: Equal parts 10% nitric acid and 10% chromic acid for separating wood cells.",
        "Glycerol Mount Function: Prevents drying and plasmolysis of temporary leaf and stem sections.",
        "Grade Alcohol Sequence: Stepwise dehydration prevents osmotic shock and cellular distortion.",
        "Exam Tip: In double staining, never leave sections in fast green for more than 30 to 45 seconds, as fast green acts rapidly and will mask the red safranin stain in lignified tissues."
    ]
)

add_unit(
    "bsc-botlab: experimental procedures",
    [
        "Free-Hand Sectioning of Lycopodium Stem: Transverse sectioning of Lycopodium stem mounted in potato pith; Staining with safranin and fast green; Microscopic observation revealing circular outline, parenchymatous cortex, endodermis, and central plectostele with alternating parallel plates of xylem and phloem.",
        "Transverse Sectioning of Selaginella Stem: Free-hand sectioning of Selaginella stem; Observation of delicate trabecular endodermis with elongated radiating trabeculae crossing the air cavity; Rhizophore transverse section displaying monarch protostele.",
        "Sectioning and Anatomy of Equisetum Aerial Stem: Sectioning ribbed aerial internode of Equisetum; Demonstrating ridged wavy outline, thick cuticular ridges, sclerenchymatous hypodermis, photosynthetic chlorenchyma, vallecular canals in cortex, and carinal canals associated with collapsed protoxylem in vascular bundles.",
        "Transverse Sectioning of Marsilea Rhizome: Sectioning amphibious rhizome of Marsilea; Staining with safranin; Microscopic observation showing outer aerenchymatous cortex with radial air chambers, distinct outer and inner endodermis, and amphiphloic siphonostele with central parenchymatous pith.",
        "Anatomy of Cycas Coralloid Root: Transverse section of dichotomously branched coralloid root of Cycas; Demonstrating outer periderm, cortex divided into outer and inner regions by a prominent middle algal zone containing endophytic colonies of Nostoc and Anabaena.",
        "Transverse Sectioning of Cycas Leaflet: Microscopic examination of Cycas leaflet transverse section; Observation of thick cuticularized upper epidermis, sunken stomata, two layers of columnar palisade cells, horizontal transfusion tissue flanked by spongy parenchyma, and central diploxylic vascular bundle.",
        "Transverse Sectioning of Pinus Needle: Sectioning acicular Pinus needle; Observation of triangular or semi-circular outline, cutinized epidermis with sunken stomata, sclerenchymatous hypodermis, peg-like infolded mesophyll cells, resin ducts, and two vascular bundles enclosed by common transfusion tissue.",
        "Anatomy of Pinus Wood and Maceration: Examination of radial and tangential longitudinal sections of Pinus stem; Demonstrating uniseriate xylem rays, absence of vessels, tracheids with circular bordered pits exhibiting torus and pit aperture, and cross-field pitting with ray parenchyma.",
        "Dissection of Reproductive Cones and Sori: Dissecting mature fern sori of Adiantum or Nephrolepis; Mounting stalked leptosporangia with vertical annulus and stomium; Demonstrating explosive spore ejection upon water loss; Examining Cycas microsporophylls and Pinus winged pollen grains.",
        "Temporary Double-Stained Mount Assembly: Step-by-step mounting procedure: Dehydrated cleared sections placed on clean glass slide, single drop of DPX or glycerol added, cover slip lowered carefully with mounting needle, and excess mountant blotted with Whatman filter paper."
    ],
    [
        "Lycopodium Plectostele: Xylem plates arranged parallel to each other interleaved with phloem.",
        "Selaginella Trabeculae: Modified radiating endodermal cells bridging the vascular cylinder to the cortex.",
        "Equisetum Internode Canals: Alternating carinal canals at bundle positions and large vallecular canals in furrows.",
        "Marsilea Amphiphloic Siphonostele: Phloem present on both external and internal sides of the ring of xylem.",
        "Cycas Algal Zone: Conspicuous cortical layer packed with blue-green cyanobacteria in coralloid roots.",
        "Cycas Transfusion Tissue: Horizontally elongated cells with scalariform thickenings facilitating lateral transport.",
        "Pinus Infolded Mesophyll: Internal cellular wall infoldings greatly increase internal photosynthetic surface area.",
        "Pinus Bordered Pit Feature: Central impermeable torus surrounded by flexible margo membrane acting as valve.",
        "Fern Annulus Mechanism: Row of thick-walled cells that rupture the thin stomium to catapult mature spores.",
        "Exam Tip: In the examination hall, always sketch the low-power ground tissue diagram first to show general tissue distribution, followed by a high-power detailed cellular sector showing individual cell wall thickenings."
    ]
)

add_unit(
    "bsc-botlab: data verification",
    [
        "Microscopic Calibration Factor Calculation: Mathematical formula for ocular micrometer calibration: One ocular division equals (Number of stage micrometer divisions multiplied by 10) divided by the Number of overlapping ocular divisions; Calculated with high precision under 10x and 40x objectives.",
        "Quantitative Cell Dimension Measurements: Using calibrated ocular scale to measure radial diameter of tracheids, xylem vessel lumens, and cortical parenchyma cells; Recording minimum of ten random replicate measurements and calculating mean and standard error.",
        "Stomatal Index and Stomatal Frequency Determination: Peeling lower epidermis from gymnosperm or pteridophyte leaves; Counting stomata (S) and epidermal cells (E) per unit microscopic grid area; Stomatal Index calculated as [S / (E + S)] multiplied by 100; Verifies xerophytic adaptation consistency.",
        "Resin Duct and Secretory Canal Frequency: Counting number and mean diameter of resin canals in needle transverse sections; Verifying taxonomic divergence between two-needle pines (Pinus sylvestris) and three-needle pines (Pinus roxburghii).",
        "Pollen Grain Viability and Size Distribution: Measuring length, width, and air sac wing dimensions of Pinus microspores using calibrated ocular micrometer; Determining pollen viability percentage using 1% acetocarmine or iodine potassium iodide (IKI) staining.",
        "Spore Count and Sporangial Yield Estimation: Counting total spores per sporangium in homosporous vs heterosporous taxa using hemocytometer counting chamber; Lycopodium sporangia yield over 10000 spores per sporangium, while Marsilea megasporangium yields exactly one functional megaspore.",
        "Verification of Diploxylic Vascular Bundle in Cycas: High-power cellular verification of centripetal and centrifugal xylem in Cycas leaflet; Centripetal xylem forms prominent triangular patch, while centrifugal xylem consists of two small lateral arcs.",
        "Verification of Transfusion Tissue Architecture: Distinguishing transfusion tracheids (pitted cells) from transfusion parenchyma (storage cells) flanking the vascular bundle in Cycas and Pinus foliage.",
        "Histochemical Color Verification of Cell Walls: Verifying specific chemical wall constituents: Lignified walls stain deep red with phloroglucinol plus concentrated hydrochloric acid; Suberized cork walls stain red with Sudan IV; Cellulose walls stain purple-blue with chlor-zinc-iodine.",
        "Procedural Replication and Artifact Troubleshooting: Identifying and eliminating slide preparation artifacts: Air bubble refraction rings, tissue folding wrinkles, blade chatter marks, and excessive destaining of fast green."
    ],
    [
        "Calibration Factor Formula: Division factor equals (Stage divisions multiplied by 10) divided by Ocular divisions.",
        "Stomatal Index Equation: Stomatal Index equals [S divided by (E plus S)] multiplied by 100.",
        "Phloroglucinol Lignin Test: Turns bright cherry red in presence of concentrated hydrochloric acid and lignin.",
        "Sudan IV Reaction: Stains hydrophobic suberin and cutin layers intense red.",
        "Cycas Diploxylic Bundle: Coexistence of both centripetal xylem and centrifugal xylem within single bundle.",
        "Hemocytometer Spore Counting: Precision grid chamber used to quantify fungal and pteridophyte spore yields.",
        "Acetocarmine Viability Test: Fertile viable pollen grains absorb carmine stain into nucleus; abortive grains remain clear.",
        "Torus Role in Pinus: Torus shifts against pit aperture under pressure differential, sealing damaged tracheids.",
        "Air Bubble Artifact Diagnostic: Dark circular border with brilliant bright center under transmitted light.",
        "Exam Tip: In quantitative botany practicals, remember that stomatal index remains constant for a given species under varying environmental conditions, making it a reliable taxonomic marker unlike stomatal frequency."
    ]
)

add_unit(
    "bsc-botlab: record & viva",
    [
        "Botanical Journal Documentation Standards: Structured laboratory practical record: Date, Experiment Title, Taxonomic Hierarchy (Division, Class, Order, Family, Genus), Systematic Classification with diagnostic reasons, Morphological Description, Low-Power Ground Plan Diagram, High-Power Cellular Sector Diagram, and Labeled Annotations.",
        "Biological Drawing Conventions: Standard botanical drafting rules: Clear unbroken single lines, no artistic shading or cross-hatching, stippling for cytoplasmic density, strict proportionality of tissue thicknesses, and horizontal parallel label lines with straight guide lines.",
        "Practical Examination Evaluation Scheme: University marking rubric: Quality and thinness of free-hand section (20%), Double staining contrast and slide mount cleanliness (25%), Scientific accuracy of labeled diagrams (25%), Practical journal record (15%), and Viva voce oral performance (15%).",
        "Core Viva Voce Question: Why are Pteridophytes Called Vascular Cryptogams: Explaining that they reproduce via hidden microscopic spores without seeds or flowers (cryptogams) yet possess fully developed xylem and phloem vascular systems.",
        "Core Viva Voce Question: Significance of Endophytic Algae in Cycas: Describing the mutualistic symbiosis where coralloid roots host Nostoc and Anabaena colonies inside the algal zone, fixing atmospheric nitrogen for the plant in exchange for carbohydrates.",
        "Core Viva Voce Question: Mechanism of Bordered Pit Function: Detailing how bordered pits in Pinus tracheids possess a central thickened torus supported by a porous margo membrane; Pressure changes aspirate the torus against the pit border, preventing cavitation embolism.",
        "Core Viva Voce Question: Why are Spores of Equisetum Equipped with Elaters: Explaining that four hygroscopic elaters uncoil and expand when dry, entangling neighboring spores to ensure they land together in clusters, fostering cross-fertilization of dioecious prothalli.",
        "Core Viva Voce Question: Distinction Between Leptosporangiate and Eusporangiate Ferns: Eusporangiate development arises from a group of initial cells producing a thick-walled sporangium with numerous spores; Leptosporangiate development arises from a single superficial cell producing a thin-walled stalked sporangium with fixed spore count.",
        "Core Viva Voce Question: Why Does Selaginella Exhibit Heterospory: Describing the production of smaller microspores yielding male gametes and large megaspores accumulating food reserves for female gametophytes, an indispensable prelude to seed evolution.",
        "Cleanliness and Laboratory Stewardship: Decontaminating slide preparation benches; Washing glassware in non-abrasive detergent; Triple rinsing staining pipettes with distilled water; Storing microscope lenses covered with dust hoods."
    ],
    [
        "Journal Layout: Classification reasons followed by ground plan, cellular diagram, and diagnostic points.",
        "Drawing Rules: Sharp pencil lines only; stippling for cytoplasm; no artistic pencil smudging.",
        "Viva Fact Vascular Cryptogam: Seedless plants possessing true vascular conducting tissues (xylem and phloem).",
        "Viva Fact Coralloid Roots: Negative geotropic roots housing nitrogen-fixing cyanobacteria.",
        "Viva Fact Equisetum Elaters: Hygroscopic ribbons that uncoil in dry air to disperse spore clusters.",
        "Viva Fact Leptosporangium: Develops from single initial cell, characteristic of modern higher ferns.",
        "Viva Fact Eusporangium: Develops from multiple initial cells, characteristic of primitive ferns and gymnosperms.",
        "Viva Fact Cavitation Protection: Torus-margo bordered pits seal off air embolisms in conifer wood.",
        "Viva Fact Circinate Vernation: Coiled watch-spring arrangement of young leaves protecting delicate apical meristems.",
        "Exam Tip: In the oral viva, when asked why gymnosperms are termed naked seeded, answer that their ovules are completely exposed on megasporophyll surfaces without any enclosing ovary wall, so fruits never form."
    ]
)
'''

content += part1

with open("scripts/build_bsc_sem2_life.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subjects 1 and 2 to build_bsc_sem2_life.py.")
