import json

papers = {}

def add_paper(key, q_list):
    papers[key] = q_list

# =========================================================================
# 8. MICROBIAL DIVERSITY OF LOWER PLANTS – II (STRICTLY ZERO LATEX)
# =========================================================================
add_paper("microbial_div_set1", [
    {"id": "bsc-md-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What are lichens and what is the nature of their symbiotic association?",
     "answer_lines": ["Lichens are composite symbiotic organisms consisting of a photosynthetic partner (algae or cyanobacteria, photobiont) and a fungal partner (mycobiont, usually Ascomycete). The fungus provides structural anchorage, water, and minerals, while the photobiont synthesizes organic nutrients."]},
    {"id": "bsc-md-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Name two distinguishing characteristics of the division Bryophyta.",
     "answer_lines": ["1. Gametophyte is the dominant, independent, photosynthetic generation in the life cycle. 2. Lack true vascular tissues (xylem and phloem) and true roots, absorbing water through rhizoids."]},
    {"id": "bsc-md-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define stele and name the simplest primitive protostele type.",
     "answer_lines": ["The stele is the central vascular cylinder of vascular plants comprising xylem, phloem, and pericycle. The simplest type is the haplostele, featuring a central solid cylindrical xylem core surrounded by phloem (e.g., Rhynia)."]},
    {"id": "bsc-md-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is heterospory? Name one pteridophyte exhibiting heterospory.",
     "answer_lines": ["Heterospory is the production of two morphologically distinct types of spores: small microspores (forming male gametophytes) and larger megaspores (forming female gametophytes). Example: Selaginella."]},
    {"id": "bsc-md-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the economic significance of Sphagnum moss.",
     "answer_lines": ["Sphagnum (peat moss) has extraordinary water-retention capacity (absorbing up to 20 times its dry weight), making it vital for horticultural packaging. Accumulated compressed deposits form peat, utilized worldwide as renewable fuel and soil acidifier."]},
    {"id": "bsc-md-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe the internal structure and reproduction of Marchantia. Detail the morphological organization of the thallus and gemma cups.",
     "answer_lines": [
         "1. Thallus Morphology: Marchantia features a dorsiventrally flattened, prostrate, dichotomously branched thallus. Dorsal surface shows polygonal rhomboidal areas with central chimney-like air pores, while ventral surface bears multicellular scales and two types of rhizoids (smooth-walled and tuberculate).",
         "2. Internal Anatomy: Upper photosynthetic zone contains air chambers with branched chlorophyll-rich filaments. Lower storage zone comprises parenchymatous cells storing starch and mucilage.",
         "3. Asexual Reproduction: Vegetative propagation occurs via fragmentation and multicellular discoid gemmae produced inside crescent-rimmed gemma cups on the dorsal midrib.",
         "4. Sexual Reproduction: Dioecious plant with reproductive structures borne on upright stalks: peltate antheridiophores bearing flagellated antherozoids in antheridia, and umbrella-shaped archegoniophores with 9 drooping rays harboring flask-shaped archegonia containing a single egg cell."
     ]},
    {"id": "bsc-md-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain the life cycle of Selaginella. Detail the morphology, strobilar organization, heterospory, and its evolutionary significance towards the seed habit.",
     "answer_lines": [
         "1. Plant Morphology: Known as spike moss. Possesses creeping stems, microphyllous ligulate leaves arranged in four rows, and unique root-bearing cylindrical organs termed rhizophore.",
         "2. Strobilar Structure: Compact terminal cones consisting of spirally arranged microsporophylls (housing microsporangia) and megasporophylls (housing megasporangia).",
         "3. Heterospory and Gametophyte Development: Microsporangia produce numerous minute microspores; megasporangia produce four large megaspores. Development of both gametophytes is strictly endosporic, deriving nutrients from spore reserves rather than external soil.",
         "4. Precursor to Seed Habit: Retention of the female gametophyte within the megasporangium wall, internal fertilization via flagellated antherozoids, and embryonic development within maternal tissues represent key evolutionary milestones transitioning toward gymnosperm seed architecture."
     ]},
    {"id": "bsc-md-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe the anatomical features and reproductive cycle of Funaria (Moss). Detail the structure of the sporophyte capsule and peristome teeth mechanics.",
     "answer_lines": [
         "1. Gametophyte Structure: Starts from filamentous protonema bearing rhizoids and leafy upright gametophores with spirally arranged leaves.",
         "2. Sporophyte Capsule Anatomy: Differentiated into Foot, Seta, and pear-shaped Capsule. Capsule shows three distinct regions:",
         "• Apophysis: Basal photosynthetic region with stomata and spongy parenchyma.",
         "• Theca: Fertile central region containing central columella surrounded by spore sac and air trabeculae.",
         "• Operculum: Terminal lid covering the peristome.",
         "3. Peristome Teeth Mechanism: Two concentric rings of 16 outer teeth and 16 inner teeth. Outer teeth are hygroscopic; in dry weather, they curve outward, lifting the operculum and releasing spores gradually, while in humid weather they close tightly to protect spores from fungal rotting."
     ]},
    {"id": "bsc-md-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Stelar Evolution in Pteridophytes. Trace the evolutionary progression from Protostele to Siphonostele, Solenostele, and Dictyostele.",
     "answer_lines": [
         "1. Protostelic Stage (Primitive, non-medullated core):",
         "• Haplostele: Solid central circular xylem core enveloped by phloem (Rhynia).",
         "• Actinostele: Star-shaped lobed xylem core with phloem in alternating furrows (Psilotum).",
         "• Plectostele: Xylem plates alternating with parallel phloem plates (Lycopodium).",
         "2. Siphonostelic Stage (Medullated stele with central pith):",
         "• Ectophloic: Central pith surrounded by xylem, outer phloem, and pericycle (Osmunda).",
         "• Amphiphloic: Central pith surrounded by inner phloem, xylem ring, and outer phloem (Marsilea).",
         "3. Solenostelic and Dictyostelic Stages (Advanced vascular fragmentation):",
         "• Solenostele: Perforated by leaf gaps at branch points.",
         "• Dictyostele: Overlapping leaf gaps break vascular cylinder into multiple independent circular vascular bundles known as meristeles (Pteris, Dryopteris)."
     ]},
    {"id": "bsc-md-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe the thallus organization, ecological importance, and air pollution bio-indicator role of Lichens.",
     "answer_lines": [
         "1. Thallus Growth Forms: Crustose (flattened, firmly glued to rock substrates like Graphis), Foliose (leaf-like, lobed thalli attached via rhizines like Parmelia), and Fruticose (branched, shrubby pendant structures like Usnea).",
         "2. Ecological Pioneer Role: Lichens pioneer primary ecological succession on bare rocks. They secrete organic lichen acids (such as usnic acid) that weather hard siliceous minerals, creating nascent soil organic beds for bryophyte establishment.",
         "3. Bio-indicators of Air Pollution: Lichens lack stomata and waxy cuticles, absorbing moisture and atmospheric gases directly across their entire surface. They are exquisitely sensitive to sulfur dioxide (SO2) and heavy metal aerosols; absence of epiphytic lichens in urban zones indicates heavy industrial atmospheric pollution."
     ]}
])

add_paper("microbial_div_set2", [
    {"id": "bsc-md-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is an antheridium and an archegonium?",
     "answer_lines": ["Antheridium is the multicellular male sex organ producing biflagellate motile male gametes. Archegonium is the multicellular flask-shaped female sex organ containing a single non-motile egg in its swollen venter."]},
    {"id": "bsc-md-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define apospory and apogamy in lower plants.",
     "answer_lines": ["Apospory: Formation of a gametophyte directly from vegetative sporophyte cells without spore formation or meiosis. Apogamy: Formation of a sporophyte directly from gametophyte cells without gametic fusion."]},
    {"id": "bsc-md-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What are elaters and what is their functional role in liverworts?",
     "answer_lines": ["Elaters are elongated, spindle-shaped sterile cells with spirally thickened inner walls found in liverwort capsules (Marchantia). They are hygroscopic, twisting violently with humidity changes to facilitate spore dispersal."]},
    {"id": "bsc-md-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Name two living fossil pteridophytes.",
     "answer_lines": ["1. Psilotum (whisk fern, rootless and leafless living fossil). 2. Equisetum (horsetail, the sole surviving genus of the ancient Calamites lineage)."]},
    {"id": "bsc-md-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is circinate vernation?",
     "answer_lines": ["The coiled arrangement of young leaves (fronds) in ferns where the delicate apex is curled inwards in a spiral to protect growing meristematic tips from physical damage."]},
    {"id": "bsc-md-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe the anatomy of the stem and reproductive cone of Equisetum (Horsetail). Detail silica deposition and carinal-vallecular canals.",
     "answer_lines": [
         "1. Morphological Features: Jointed aerial stems with distinct nodes and hollow internodes, ribbed with ridges and grooves, and whorled scale leaves at nodes. Epidermis is heavily impregnated with abrasive silica grains.",
         "2. Internal Stem Anatomy: Characterized by three specialized canal systems:",
         "• Vallecular Canals: Large air cavities in cortex aligned beneath external grooves.",
         "• Carinal Canals: Water-conducting cavities formed by disintegration of protoxylem under each ridge.",
         "• Central Cavity: Large hollow lumen running through center of internodes.",
         "3. Reproductive Cone (Strobilus): Composed of a central axis bearing peltate hexagonal sporangiophores with dangling sac-like sporangia.",
         "4. Spore Mechanics: Spores possess four ribbon-like, hygroscopic elaters that uncoil in dry air, launching spores into turbulent convective breezes."
     ]},
    {"id": "bsc-md-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain the internal structure, vegetative reproduction, and alternation of generations in Anthoceros (Hornwort). Discuss pseudo-elaters and basal meristem.",
     "answer_lines": [
         "1. Gametophyte Features: Dark green, lobed, dorsiventral thallus lacking midrib, air chambers, and air pores. Lower surface bears Nostoc-containing mucilage cavities that fix atmospheric nitrogen.",
         "2. Sporophyte Architecture: Cylindrical horn-shaped sporophyte consisting of bulbous foot and long upright capsule. Notably lacks a seta, replaced by an intercalary basal meristem that continuously produces new spore tissue throughout its lifespan.",
         "3. Capsule Structure: Central sterile columella surrounded by sporogenous cylinder producing spores and multicellular pseudo-elaters. Dehiscence occurs longitudinally from tip downward along two vertical valves."
     ]},
    {"id": "bsc-md-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe the morphology, soral organization, and sporangium dehiscence in Pteris (Brake Fern). Detail the role of the annulus and stomium.",
     "answer_lines": [
         "1. Vegetative Morphology: Creeping underground rhizome covered with scales (ramentum), bearing pinnately compound fronds showing circinate vernation.",
         "2. Soral Organization: Coenosori form a continuous marginal band along the underside of fertile pinnules, protected by an inrolled false indusium formed by the reflexed leaf margin.",
         "3. Sporangium Anatomy: Biconvex stalked capsule with a vertical ring of 12 to 16 thick-walled indurated cells known as the annulus, interrupted by thin-walled stomium cells.",
         "4. Dehiscence Mechanism: Evaporation of water from annulus cells causes tension that ruptures the stomium, bending the annulus backward into a spring. When water cavitation breaks column tension, the annulus snaps forward explosively, catapulting mature spores into air currents."
     ]},
    {"id": "bsc-md-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain the Origin and Evolution of Land Plants from green algal ancestors (Charophycean algae). Discuss fossil evidence from Rhynia and Cooksonia.",
     "answer_lines": [
         "1. Ancestral Link: Biochemical and structural homologies demonstrate that land plants evolved from Charophycean green algae: presence of chlorophyll a and b, starch storage in plastids, cellulose synthase rosette complexes, and phragmoplast-mediated cytokinesis.",
         "2. Terrestrial Adaptations: Transition to land during the Silurian-Devonian epochs required overcoming desiccation (evolution of waxy cuticles and stomata), gravity (lignified xylem conduits), and gamete protection (multicellular sterile jacketed gametangia).",
         "3. Earliest Fossil Land Plants:",
         "• Cooksonia (Late Silurian): Oldest known vascular plant, featuring slender dichotomously branching leafless axes with terminal sporangia.",
         "• Rhynia (Early Devonian): Exceptionally preserved in chert deposits; simple leafless dichotomous axis with central haplostele, aerial cuticular stomata, and terminal fusiform sporangia."
     ]},
    {"id": "bsc-md-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Discuss the ecological and economic importance of Bryophytes and Pteridophytes. Detail their roles in soil conservation, water management, horticulture, and medicine.",
     "answer_lines": [
         "1. Soil Conservation and Ecology: Bryophyte carpets absorb heavy rainfall like biological sponges, preventing flash erosion and runoff. Pteridophyte rhizomes bind unstable hillside soils.",
         "2. Peat Moss (Sphagnum): Extracted worldwide as soil conditioning substrate for greenhouse crops; exhibits natural antiseptic properties historically utilized in battlefield wound dressings.",
         "3. Biofertilizers: The water fern Azolla harbors the symbiotic cyanobacterium Anabaena azollae, which fixes atmospheric nitrogen, widely applied in organic rice paddy agriculture.",
         "4. Medicinal and Ornamental Uses: Lycopodium spore powder (vegetable sulfur) used in pharmaceutical pill coatings; Dryopteris rhizomes yield filicin anthelmintic extracts; ferns cultivated extensively as landscape ornamentals."
     ]}
])

# =========================================================================
# 9. BIOLOGY OF CHORDATES, EMBRYOLOGY & ECOLOGY (STRICTLY ZERO LATEX)
# =========================================================================
add_paper("chordates_set1", [
    {"id": "bsc-cho-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the four primary defining diagnostic characteristics of the phylum Chordata.",
     "answer_lines": ["1. Presence of a dorsal flexible skeletal rod (Notochord). 2. Single dorsal hollow tubular nerve cord. 3. Pharyngeal gill slits in embryonic or adult stages. 4. Post-anal muscular tail."]},
    {"id": "bsc-cho-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is retrogressive metamorphosis? Give one classic example.",
     "answer_lines": ["A degenerative metamorphic process where an advanced, active, free-swimming larva possessing chordate hallmarks degenerates into a simplified, sessile, degenerate adult. Example: Ascidia (Urochordata)."]},
    {"id": "bsc-cho-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Differentiate between anamniotes and amniotes.",
     "answer_lines": ["Anamniotes lack extra-embryonic membranes (amnion, chorion, allantois) and lay eggs in water (fishes, amphibians). Amniotes develop protective fetal membranes enabling terrestrial reproduction (reptiles, birds, mammals)."]},
    {"id": "bsc-cho-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define the Ten Percent Law of energy transfer in ecological food chains.",
     "answer_lines": ["Formulated by Raymond Lindeman: During transfer of organic trophic energy from one trophic level to the next, only approximately 10 percent of energy is incorporated into biomass; 90 percent is lost as metabolic heat, respiration, and feces."]},
    {"id": "bsc-cho-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is cleavage in embryology and how does it differ from ordinary mitosis?",
     "answer_lines": ["Cleavage is the rapid series of mitotic divisions of a fertilized zygote without intervening cell growth phases (G1 and G2), converting the large single-cell zygote into a multicellular blastula of constant total volume."]},
    {"id": "bsc-cho-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe the circulatory system and aortic arches modification in vertebrates from fishes to mammals. Detail the evolutionary transition from single to double circulation.",
     "answer_lines": [
         "1. Basic Primitive Plan: Ancestral vertebrate plan contains 6 pairs of aortic arches connecting ventral aorta to paired dorsal aortae across pharyngeal slits.",
         "2. Fishes (Single Circulation): 2-chambered heart (one atrium, one ventricle). Venous blood is pumped directly to gill capillaries for oxygenation and distributed to body tissues without returning to heart (low arterial pressure).",
         "3. Amphibians (Incomplete Double Circulation): 3-chambered heart (two atria, single ventricle). Spiral valve in conus arteriosus partially separates oxygenated and deoxygenated blood; systemic and pulmocutaneous arches emerge from arches 3, 4, and 6.",
         "4. Reptiles: Ventricle partially divided by an incomplete septum (completely 4-chambered in crocodiles).",
         "5. Birds and Mammals (Complete Double Circulation): True 4-chambered heart with complete separation of pulmonary and systemic circuits. Systemic arch curves to right in birds (arch 4) and to left in mammals; arch 6 forms pulmonary arteries."
     ]},
    {"id": "bsc-cho-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain the process of Gastrulation in Amphioxus or Frog. Detail epiboly, invagination, involution, and the formation of the three primary germ layers.",
     "answer_lines": [
         "1. Definition and Significance: Morphogenetic phase transforming the hollow single-layered blastula into a three-layered gastrula establishing the definitive body plan and primitive gut (archenteron).",
         "2. Major Morphogenetic Cell Movements in Frog:",
         "• Invagination: Blastoporal pigment cells constrict to form bottle cells, creating a crescentic blastoporal lip beneath gray crescent.",
         "• Involution: Prospective mesoderm and endoderm roll over the dorsal lip into the blastocoel cavity.",
         "• Epiboly: Rapid mitotic division and spreading of pigmented animal pole ectoderm downward over vegetal hemisphere.",
         "3. Germ Layer Fates:",
         "• Ectoderm: Epidermis, nervous system, sensory organs.",
         "• Mesoderm: Notochord, skeletal muscles, circulatory system, urogenital organs, bone.",
         "• Endoderm: Epithelial lining of digestive tract, respiratory lungs, liver, pancreas."
     ]},
    {"id": "bsc-cho-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Extra-embryonic (Foetal) Membranes in Chick development. Detail the origin, structure, and functions of the Amnion, Chorion, Allantois, and Yolk Sac.",
     "answer_lines": [
         "1. Yolk Sac: Derived from splanchnopleure (endoderm and splanchnic mesoderm). Encloses yolk mass, developing vitelline vascular network that digests and absorbs nutrient reserves for embryonic growth.",
         "2. Amnion: Inner folds of somatopleure (ectoderm and somatic mesoderm) that fuse above embryo to form an enclosed fluid-filled amniotic sac. Functions as a protective aquatic shock absorber preventing mechanical shock and tissue desiccation.",
         "3. Chorion (Serosa): Outer somatopleure layer enveloping entire embryonic complex. Fuses with allantois to form chorioallantoic membrane.",
         "4. Allantois: Diverticulum of hindgut splanchnopleure extending into extra-embryonic coelom. Acts as a fetal urinary bladder storing uric acid waste, and heavily vascularized respiratory surface exchanging O2 and CO2 across porous eggshell."
     ]},
    {"id": "bsc-cho-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe Ecological Succession. Differentiate between primary and secondary succession and detail the sequential stages of a Hydrosere (freshwater succession).",
     "answer_lines": [
         "1. Concept of Succession: Orderly, predictable directional process of community change over time leading to a stable, self-perpetuating climax community.",
         "2. Primary vs. Secondary: Primary succession initiates on pristine lifeless sterile substrate (lava flow, sand dune). Secondary succession begins after disturbance (wildfire, flood) where organic soil seeds remain.",
         "3. Successional Stages of a Hydrosere:",
         "• Phytoplankton Stage: Pioneer diatoms and blue-green algae enrich silt organic matter.",
         "• Submerged Stage: Rooted submerged plants (Hydrilla, Vallisneria) trap sediment, raising pond floor.",
         "• Floating Stage: Broad-leaved floating flora (Nymphaea, Nelumbo) shade bottom, accelerating siltation.",
         "• Reed-Swamp Stage: Amphibious plants (Typha, Phragmites) produce dense emergent marshes.",
         "• Sedge-Meadow Stage: Grass-like sedges (Carex, Juncus) transpire moisture, drying wetland.",
         "• Woodland and Forest Climax: Shrubs and pioneer trees establish climax mesophytic forest."
     ]},
    {"id": "bsc-cho-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Population Ecology: growth models (exponential and logistic), carrying capacity, and density-dependent versus density-independent limiting factors.",
     "answer_lines": [
         "1. Exponential Growth Model (J-shaped): Occurs when resources are limitless. Population increases at maximum per capita intrinsic rate of natural increase (r). Characterized by exponential equation dN/dt = rN.",
         "2. Logistic Growth Model (S-shaped / Sigmoid): Real-world model where environmental resistance limits growth as population nears carrying capacity (K). Expressed by equation dN/dt = rN * (K - N) / K.",
         "3. Concept of Carrying Capacity (K): The maximum population density of a species that a given environment can sustainably support indefinitely without habitat degradation.",
         "4. Limiting Factors:",
         "• Density-Dependent: Intensity increases with crowd density: intraspecific competition for food and nesting sites, infectious disease transmission, and predator pressure.",
         "• Density-Independent: Abiotic environmental shocks impacting mortality regardless of population density: flash floods, droughts, volcanic eruptions, and severe freezing snaps."
     ]}
])

add_paper("chordates_set2", [
    {"id": "bsc-cho-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is the endostyle in protochordates and what is its homologous organ in vertebrates?",
     "answer_lines": ["The endostyle is a ciliated, glandular longitudinal groove in the pharyngeal floor of tunicates and cephalochordates that secretes mucus to trap food particles. It is the evolutionary precursor and homologous counterpart of the vertebrate thyroid gland."]},
    {"id": "bsc-cho-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Differentiate between holoblastic and meroblastic cleavage.",
     "answer_lines": ["Holoblastic: Complete furrow cuts through entire zygote (microlecithal/mesolecithal eggs like mammals and frogs). Meroblastic: Incomplete cleavage restricted to animal pole disc because dense yolk prevents cleavage furrow penetration (macrolecithal eggs like birds and reptiles)."]},
    {"id": "bsc-cho-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State Gause's Principle of Competitive Exclusion.",
     "answer_lines": ["Two closely related species competing for the exact same limiting ecological resources cannot coexist indefinitely in the same ecological niche; the species with even a slight reproductive advantage will outcompete and displace the other."]},
    {"id": "bsc-cho-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is embryonic induction? Name the primary embryonic organizer discovered by Spemann and Mangold.",
     "answer_lines": ["The process whereby one embryonic tissue (organizer) directs the developmental fate and differentiation of adjacent responsive cells. Spemann and Mangold identified the dorsal blastopore lip as the Primary Organizer directing neural tube induction."]},
    {"id": "bsc-cho-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define home range and territory in animal ecology.",
     "answer_lines": ["Home range is the total geographic area over which an animal roams in search of food and mates. Territory is the actively defended core portion of the home range from which conspecific competitors are aggressively excluded."]},
    {"id": "bsc-cho-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe the Structure, Affinities, and Systematic Position of Balanoglossus (Hemichordata). Discuss why Hemichordata is excluded from true chordates.",
     "answer_lines": [
         "1. Morphology: Solitary marine worm-like animal living in U-shaped burrows, divided into Proboscis, Collar, and elongated Trunk.",
         "2. Chordate Features: Possesses numerous pharyngeal gill slits for filter feeding and a short dorsal neurocord in the collar region.",
         "3. Non-Chordate Features: The so-called notochord is actually a hollow anterior diverticulum of the foregut termed stomochord, lacking mesodermal derivation or sheath.",
         "4. Tornaria Larva and Echinoderm Affinities: The tornaria larva is virtually identical to the dipleurula / bipinnaria larva of echinoderms in ciliated bands and enterocoelic coelom formation.",
         "5. Systematic Position: Modern phylogenetic taxonomy places Hemichordata as an independent non-chordate invertebrate phylum closely allied to Echinodermata (Ambulacraria clade)."
     ]},
    {"id": "bsc-cho-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Placentation in Mammals. Classify mammalian placenta based on morphological shape and histological tissue barriers.",
     "answer_lines": [
         "1. Definition: An intimate composite organ formed by the apposition or fusion of fetal extra-embryonic membranes and maternal uterine mucosa for physiological exchange.",
         "2. Morphological Classification (Distribution of Chorionic Villi):",
         "• Diffuse: Villi scattered uniformly across chorion (pig, horse).",
         "• Cotyledonary: Villi grouped in localized rosette patches known as cotyledons (cow, sheep).",
         "• Zonary: Villi form a broad girdle band around middle of chorionic sac (carnivores like cat, dog).",
         "• Discoidal: Villi restricted to one or two circular disc-shaped cakes (primates, humans, rodents).",
         "3. Histological Classification (Number of Maternal-Fetal Barriers, Grosser Scheme):",
         "• Epitheliochorial: All 6 layers intact (maternal endothelium, connective tissue, uterine epithelium; fetal trophoblast, mesenchyme, fetal endothelium; pig).",
         "• Syndesmochorial: Uterine epithelium lost (ruminants).",
         "• Endotheliochorial: Maternal connective tissue lost; fetal chorion touches maternal capillaries (carnivores).",
         "• Hemochorial: All 3 maternal layers eroded; fetal chorionic villi bathed directly in maternal blood pools (humans, monkeys).",
         "• Hemoendothelial: Only fetal capillary endothelium separates maternal blood from fetal blood (rabbit, guinea pig)."
     ]},
    {"id": "bsc-cho-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Describe Poison Apparatus and Biting Mechanism in Snakes. Differentiate between neurotoxic and hemotoxic snake venoms with clinical symptoms.",
     "answer_lines": [
         "1. Poison Apparatus: Comprises paired modified superior labial venom glands (parotid homologous), muscular capsule, venom ducts, and specialized grooved or hollow hypodermic fangs situated on movable maxillae.",
         "2. Biting Mechanism: Movement is controlled by a mobile skull linkage involving squamosal, quadrate, pterygoid, and ectopterygoid bones. Opening the lower jaw swings the quadrate forward, pushing the pterygoid-ectopterygoid strut forward to rotate the maxilla vertically through 90 degrees, erecting the fang to penetrate victim tissues while temporal muscles squeeze venom into the wound.",
         "3. Venom Types and Pathology:",
         "• Neurotoxic Venom (Elapidae: Cobra, Krait): Acts on peripheral neuromuscular junctions, blocking acetylcholine receptors. Induces flaccid muscle paralysis, ptosis, dyspnea, and respiratory arrest.",
         "• Hemotoxic Venom (Viperidae: Russell's Viper, Saw-scaled Viper): Destroys vascular endothelial linings and platelets, triggering disseminated intravascular coagulation (DIC), severe internal hemorrhaging, and tissue necrosis."
     ]},
    {"id": "bsc-cho-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Biogeochemical Cycles in Ecosystems. Detail the global Nitrogen Cycle and Carbon Cycle, highlighting microbial nitrogen fixation and denitrification.",
     "answer_lines": [
         "1. Carbon Cycle: Atmospheric carbon dioxide is incorporated into biosphere by autotrophic photosynthetic carbon fixation. Carbon returns to atmosphere through organismal cellular respiration, microbial decomposition of organic detritus, and industrial combustion of fossil fuels.",
         "2. Nitrogen Cycle Processes:",
         "• Biological Nitrogen Fixation: Atmospheric N2 reduced to ammonia by prokaryotic nitrogenase in free-living bacteria (Azotobacter, Clostridium) and root nodules (Rhizobium).",
         "• Nitrification: Two-step aerobic oxidation of ammonia to nitrite by Nitrosomonas, followed by oxidation of nitrite to nitrate by Nitrobacter.",
         "• Assimilation: Plants absorb soil nitrate to synthesize amino acids and nucleotides.",
         "• Ammonification: Heterotrophic bacteria and fungi deaminate organic nitrogenous waste back to ammonia.",
         "• Denitrification: Anaerobic reduction of soil nitrate back to gaseous N2 by Pseudomonas and Paracoccus, returning nitrogen to the atmosphere."
     ]},
    {"id": "bsc-cho-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Biodiversity Conservation Strategies: In-situ versus Ex-situ conservation, National Parks, Wildlife Sanctuaries, Biosphere Reserves, and Biodiversity Hotspots.",
     "answer_lines": [
         "1. In-Situ Conservation (On-site conservation within natural ecosystems):",
         "• National Parks: Strictly protected wilderness areas owned by government where forestry, grazing, and private human settlements are completely prohibited (e.g., Kaziranga, Corbett).",
         "• Wildlife Sanctuaries: Protected natural areas prioritizing target wildlife conservation; regulated human activities (fuelwood collection, sustainable grazing) permitted.",
         "• Biosphere Reserves: Large multi-purpose protected regions zoning core pristine ecosystem, buffer research zone, and transition community settlement zone (e.g., Nilgiri, Sundarbans).",
         "2. Ex-Situ Conservation (Off-site preservation away from natural habitat): Botanical gardens, zoological parks, cryopreservation of gametes, seed banks, and DNA repositories.",
         "3. Biodiversity Hotspots: Regions exhibiting exceptional species richness and high floral/faunal endemism undergoing severe habitat destruction (loss of at least 70 percent of primary vegetation). Examples: Western Ghats, Eastern Himalayas."
     ]}
])

with open("scripts/bsc_sem2_part5.json", "w", encoding="utf-8") as f:
    json.dump(papers, f, indent=2)

print("Part 5 written.")
