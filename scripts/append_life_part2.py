import json
import os

with open("scripts/build_bsc_sem2_life.py", "r", encoding="utf-8") as f:
    content = f.read()

part2 = '''
# =========================================================================
# 3. BIOLOGY OF CHORDATES, EMBRYOLOGY & ECOLOGY (B.Sc Life Sciences Sem 2)
# =========================================================================

add_unit(
    "bsc-zoo-bce: protochordates",
    [
        "Fundamental Diagnostic Characteristics of Phylum Chordata: Four cardinal morphological attributes present at some life stage: Dorsal hollow tubular nerve cord derived from ectoderm, flexible longitudinal rod-like notochord derived from mesoderm, paired pharyngeal gill clefts, and post-anal tail for propulsion.",
        "Taxonomic Hierarchy of Protochordata: Acraniata (lower chordates lacking cranium and brain case): Divided into Subphylum Hemichordata (stomochord, proboscis, collar, trunk), Subphylum Urochordata (notochord restricted to larval tail), and Subphylum Cephalochordata (notochord extending from snout to tail).",
        "Morphology and Anatomy of Herdmania (Sea Squirt): Sessile marine urochordate enclosed within a leathery cuticular tunic (test) composed of tunicin (animal cellulose); Incurrent branchial siphon and excurrent atrial siphon; Extensive pharynx perforated by numerous stigmata.",
        "Digestive and Respiratory Systems of Herdmania: Ciliary filter-feeding mechanism; Ventral grooved endostyle secreting continuous mucus sheet; Mucus propelled dorsally across stigmata by cilia to entangle micro-plankton; Dorsal lamina guiding food cylinder into esophagus; Open vascular system with unique reversing heart flow.",
        "Retrogressive Metamorphosis in Urochordata: Highly active, free-swimming, bilaterally symmetrical ascidian tadpole larva possesses well-developed dorsal hollow nerve cord, sensory eyespot, statocyst, and contractile tail with notochord; Metamorphosis involves resorption of tail and notochord, reduction of nerve cord to single ganglion, rotation of siphons, and degeneration into sessile degenerate adult.",
        "Morphology and Body Plan of Branchiostoma (Amphioxus): Slender, laterally compressed, fish-like cephalochordate inhabiting shallow marine sands; Pointed snout with oral hood surrounded by sensory cirri; Metameric V-shaped muscle blocks (myotomes) separated by connective tissue myosepta.",
        "Filter Feeding and Ciliary Mechanism in Amphioxus: Water drawn into mouth by ciliary action of wheel organ (organ of Muller) inside buccal cavity; Velum with velar tentacles filtering particulate debris; Pharynx with over 100 pairs of gill slits; Epipharyngeal groove and ventral endostyle directing food stream into midgut diverticulum.",
        "Excretory and Circulatory Architecture of Cephalochordata: Specialized solenocytic protonephridia derived from ectoderm performing nitrogenous excretion (resembling invertebrate platyhelminth flame cells); Closed circulatory system completely devoid of heart; Blood propelled by contractile bulbils at bases of branchial vessels; Colorless blood lacking respiratory pigments.",
        "Phylogenetic Affinities of Protochordates: Evolutionary debates: Echinoderm-hemichordate affinities supported by dipleurula and tornaria larval similarities; Annelid-arthropod affinities refuted by inverted dorsoventral polarity; Modern molecular phylogenetics establishing urochordates as the closest extant sister group to craniates (vertebrates).",
        "Evolution of the Endostyle and Thyroid Homology: Comparative endocrinology: Ciliated, mucus-secreting endostylar groove of protochordates concentrates iodine and synthesizes iodinated tyrosines (mono- and di-iodotyrosine); Proven direct evolutionary precursor (homologue) of the vertebrate thyroid gland."
    ],
    [
        "Four Chordate Hallmarks: Notochord, dorsal hollow nerve cord, pharyngeal gill slits, post-anal tail.",
        "Tunicin Composition: Unique animal cellulose polysaccharide constituting the protective tunic of Urochordata.",
        "Retrogressive Metamorphosis: Progressive degeneration of an active advanced larva into a sessile, degenerate adult.",
        "Amphioxus Snout Character: Notochord extends persistently beyond the brain up to the anterior tip of the rostrum.",
        "Hatschek Pit Function: Mucus-secreting ciliated groove in Amphioxus considered homologous to vertebrate adenohypophysis.",
        "Amphioxus Excretory Organs: Ectodermal protonephridia equipped with specialized flame-bulb solenocytes.",
        "Endostyle Thyroid Homology: Iodine-accumulating groove in protochordate pharynx evolved into the vertebrate thyroid gland.",
        "Myotomes Structure: Metameric V-shaped skeletal muscle segments coordinating fish-like lateral undulations.",
        "Tornaria Larva: Free-swimming ciliated larva of Balanoglossus demonstrating close affinities with echinoderm larvae.",
        "Exam Tip: In viva voce, emphasize retrogressive metamorphosis as an evolutionary paradox where the larva is morphologically superior and more chordate-like than the adult."
    ]
)

add_unit(
    "bsc-zoo-bce: vertebrates",
    [
        "General Characteristics and Classification of Craniata: Vertebrates characterized by distinct cranium enclosing three-part brain, paired sensory organs, multi-chambered ventral heart, muscularized gut, and replacement of embryonic notochord by segmented vertebral column; Primary division into Agnatha (jawless) and Gnathostomata (jawed).",
        "Class Cyclostomata (Agnatha): Primitive jawless marine and freshwater vertebrates: Circular suctorial mouth without jaws, single median nostril, persistent unconstricted notochord, cartilaginous skeleton, and six to fifteen pairs of gill pouches; Lampreys (Petromyzon) and hagfishes (Myxine); Ammocoete larva of lamprey exhibiting basic chordate blueprint.",
        "Class Chondrichthyes (Cartilaginous Fishes): Marine predators with entirely cartilaginous endoskeleton, heterocercal caudal fin, placoid dermal scales (dermal denticles), ventral mouth, five to seven pairs of exposed gill slits without operculum, internal fertilization via male pelvic claspers, and high urea retention for osmoregulation; Shark (Scoliodon).",
        "Class Osteichthyes (Bony Fishes): Endoskeleton predominantly bony, homocercal caudal fin, cycloid or ctenoid scales, terminal mouth, four pairs of gill slits covered by bony operculum, hydrostatic swim bladder (air bladder) providing neutral buoyancy, and external fertilization; Morphological radiation into actinopterygians (ray-finned) and sarcopterygians (lobe-finned ancestor of tetrapods).",
        "Class Amphibia and the Tetrapod Transition: First terrestrial vertebrates returning to water for reproduction: Ectothermic, moist glandular skin lacking dermal scales, three-chambered heart (two atria, one ventricle), double circulation; Parental care adaptations; Neoteny and paedogenesis in Ambystoma tigrinum (Axolotl larva retaining larval gills and reproducing sexually).",
        "Class Reptilia and the Amniotic Egg: True terrestrial vertebrates possessing dry cornified epidermal scales or scutes, twelve pairs of cranial nerves, internal fertilization, and cleidoic (amniotic) eggs with protective shells and extra-embryonic membranes; Temporal skull roof classification: Anapsid (turtles), Synapsid (mammal ancestors), and Diapsid (lizards, snakes, crocodilians, dinosaurs).",
        "Ophidian Venom Apparatus and Biting Mechanism: Modified salivary venom glands, paired hollow or grooved fangs (solenoglyphous, proteroglyphous, opisthoglyphous); Rotational mechanics of maxillomandibular skull bones driving forward fang erection during strike; Neurotoxic venom (cobras, krait) vs hemotoxic venom (vipers).",
        "Class Aves (Avian Morphology and Flight Adaptations): Endothermic bipedal vertebrates with anterior forelimbs modified into feathered wings; Streamlined body, pneumatic light bones with internal air struts, keeled sternum for flight muscle insertion (pectoralis major and minor), toothless keratinized bill, four-chambered heart, high metabolic rate, and flow-through respiratory air sacs.",
        "Class Mammalia (Mammalian Diagnostics): Endothermic vertebrates with mammary glands producing milk for young nourishment, epidermal hair, sweat and sebaceous glands, seven cervical vertebrae, muscular diaphragm separating thoracic and abdominal cavities, non-nucleated biconcave erythrocytes, and three middle ear ossicles (malleus, incus, stapes).",
        "Mammalian Subclasses and Dentition: Subclass Prototheria (monotremes: oviparous egg-laying mammals like Platypus); Subclass Metatheria (marsupials: viviparous pouch-bearing mammals like Kangaroo); Subclass Eutheria (placental mammals); Mammalian dentition: Thecodont (teeth in bony sockets), heterodont (incisors, canines, premolars, molars), and diphyodont (deciduous and permanent sets)."
    ],
    [
        "Agnatha vs Gnathostomata: Agnatha lack true jaws; Gnathostomata possess upper and lower jaws derived from visceral arches.",
        "Ammocoete Larva: Filter-feeding freshwater larva of Petromyzon illustrating primitive vertebrate ancestral structure.",
        "Placoid Scales: Microscopic tooth-like scales composed of dentine capping a vascular pulp cavity.",
        "Axolotl Neoteny: Retention of juvenile features (external gills) in sexually mature adult due to low thyroid hormone levels.",
        "Amniotic Egg Milestone: Shell and fluid-filled membranes (amnion) freed vertebrate reproduction from external water.",
        "Snake Fang Types: Solenoglyphous (hinged hollow fangs in vipers); Proteroglyphous (fixed grooved fangs in cobras).",
        "Pneumatic Bones: Hollow, air-filled avian bones reducing skeleton mass without compromising mechanical strength.",
        "Avian Air Sacs: Nine interconnected respiratory sacs maintaining unidirectional airflow through rigid lungs.",
        "Mammalian Ear Ossicles: Malleus (articular), incus (quadrate), and stapes (hyomandibular) transmitting sound waves.",
        "Exam Tip: In vertebrate skull classification, identify Chelonia (turtles) as anapsid, mammals as synapsid, and modern reptiles and birds as diapsid."
    ]
)

add_unit(
    "bsc-zoo-bce: embryology",
    [
        "Gametogenesis in Animals: Formation of specialized haploid gametes: Spermatogenesis occurring in seminiferous tubules (spermatogonia, primary spermatocyte, secondary spermatocyte, spermatid, spermatozoa) with spermiogenesis producing flagellated sperm; Oogenesis occurring in ovaries (oogonia, primary oocyte with prolonged diplotene arrest, secondary oocyte and polar bodies).",
        "Classification of Animal Eggs: Categorized by yolk amount: Alecithal (negligible yolk, placental mammals), Microlecithal (scant yolk, Amphioxus), Mesolecithal (moderate yolk, amphibians), Macrolecithal (immense yolk, birds, reptiles); Categorized by yolk distribution: Isolecithal (uniform), Telolecithal (gradient toward vegetal pole), Centrolecithal (central yolk mass, insects).",
        "Fertilization Dynamics and Acrosome Reaction: Molecular interaction between sperm and egg: Chemotaxis, species-specific binding of sperm to egg envelope (zona pellucida or vitelline membrane); Acrosome reaction releasing hydrolytic enzymes (hyaluronidase, acrosin) to digest envelope coats; Activation of egg metabolism and completion of female meiosis II.",
        "Blocks to Polyspermy: Two coordinated physiological defense mechanisms preventing fertilization by multiple sperms: Fast block to polyspermy (transient electrical depolarization of egg plasma membrane from minus 70 mV to plus 20 mV via sodium ion influx within seconds); Slow block to polyspermy (cortical granule exocytosis releasing enzymes that harden vitelline envelope into fertilization membrane).",
        "Cleavage Patterns across Animal Phyla: Rapid mitotic division without cell growth: Holoblastic complete cleavage (equal in microlecithal eggs, unequal in mesolecithal amphibian eggs); Meroblastic incomplete cleavage (discoidal in telolecithal bird eggs, superficial in centrolecithal insect eggs); Radial cleavage (deuterostomes) vs spiral cleavage (protostomes).",
        "Blastulation Across Vertebrates: Formation of blastula enclosing fluid-filled blastocoel cavity: Coeloblastula (hollow spherical sphere with central blastocoel in Amphioxus); Amphiblastula (eccentric animal-pole blastocoel with yolk-laden macromeres in frog); Discoblastula (cellular blastoderm overlying uncleaved yolk in chick); Blastocyst with inner cell mass and trophoblast in mammals.",
        "Mechanisms of Morphogenetic Gastrulation: Dynamic rearrangement of blastomeres transforming single-layered blastula into trilaminar embryo (ectoderm, mesoderm, endoderm); Primary cell movements: Invagination (inward pocketing), involution (inward rolling over blastopore lip), epiboly (surface expansion of animal cells), ingression (individual cell migration), and delamination (splitting of sheets).",
        "Development and Fate of Extra-Embryonic Membranes: Four fetal membranes in cleidoic chick eggs and mammals: Amnion (fluid-filled sac cushioning embryo from mechanical shocks and desiccation); Chorion (outer protective membrane participating in gas exchange); Allantois (vascularized diverticulum storing nitrogenous uric acid waste and executing respiration); Yolk sac (enclosing nutrient yolk reserves).",
        "Types and Functions of the Mammalian Placenta: Temporary endocrine organ facilitating physiological exchange between maternal and fetal circulations; Classification by histological barriers: Epitheliochorial (pig), Syndesmochorial (ruminants), Endotheliochorial (carnivores), Hemochorial (humans, rodents), and Hemoendothelial (rabbits); Hormone secretion (hCG, progesterone, placental lactogen).",
        "Organogenesis and Primitive Streak in Chick: Avian gastrulation mediated by primitive streak: Primitive groove, primitive ridge, and anterior Hensen node; Inward migration of presumptive mesodermal and endodermal cells; Neurulation: Neural plate induction by notochord, neural fold elevation, neural groove closure forming neural tube, and neural crest cell migration."
    ],
    [
        "Acrosome Origin: Modified Golgi complex vesicle capping sperm nucleus containing lytic hydrolytic enzymes.",
        "Slow Block Mechanism: Cortical granule exocytosis cleaving sperm receptors and lifting fertilization membrane.",
        "Discoidal Cleavage: Cleavage restricted strictly to small circular cytoplasmic blastodisc on massive yolk in birds.",
        "Blastocyst Trophoblast: Outer epithelial cell layer giving rise to fetal placental membranes in mammals.",
        "Three Primary Germ Layers: Ectoderm (nervous system, skin), Mesoderm (muscle, skeleton, blood), Endoderm (gut lining).",
        "Hensen Node Function: Anterior organizer of the avian primitive streak homologous to amphibian Spemann organizer.",
        "Amnion Cushion: Fluid-filled cavity providing buoyancy and preventing embryonic adhesion to egg shell.",
        "Allantois Dual Function: Excretory reservoir for uric acid crystals and vascular surface for gas exchange.",
        "Hemochorial Placenta: Maternal blood directly bathes the fetal chorionic villi, maximizing nutrient diffusion.",
        "Exam Tip: In embryology viva, explain that cleavage is unique from normal mitosis because daughter blastomeres do not undergo G1 and G2 growth phases, causing cells to divide rapidly into smaller units without overall volume increase."
    ]
)

add_unit(
    "bsc-zoo-bce: ecology",
    [
        "Ecosystem Concept and Structural Components: Self-sustaining functional unit of biosphere: Abiotic environment (solar radiation, temperature, precipitation, soil chemistry, pH) interacting with biotic communities; Trophic levels: Primary producers (autotrophs), primary consumers (herbivores), secondary/tertiary consumers (carnivores), and saprotrophic decomposers (bacteria and fungi).",
        "Trophic Dynamics and Energy Flow: Unidirectional non-cyclic flow of solar energy through trophic levels; Governed by first and second laws of thermodynamics; Lindeman 10 percent law of trophic efficiency (approximately 90 percent of energy is lost as metabolic heat, respiration, and excretion at each trophic transfer step); Universal and Y-shaped energy flow models.",
        "Food Chains, Food Webs, and Ecological Pyramids: Grazing food chains (producer based) versus detritus food chains (decaying litter based); Complex food webs conferring stability; Eltonian pyramids: Pyramid of numbers (upright in grasslands, inverted in single tree ecosystems), Pyramid of biomass (upright on land, inverted in open oceans), and Pyramid of energy (strictly upright across all ecosystems).",
        "Biogeochemical Nutrient Cycles: Gaseous cycles (carbon cycle, nitrogen cycle with atmospheric reservoirs) versus sedimentary cycles (phosphorus cycle, sulfur cycle with lithospheric rock reservoirs); Microbial transformations in nitrogen cycle: Nitrogen fixation, nitrification (Nitrosomonas, Nitrobacter), assimilation, and denitrification (Pseudomonas).",
        "Population Ecology and Density Parameters: Population attributes: Size, absolute density, crude versus ecological density, age pyramids (expanding, stable, declining); Natality, mortality, immigration, and emigration; Survivorship curves: Type I (convex, high juvenile survival, humans), Type II (diagonal, constant mortality, birds), Type III (concave, immense early mortality, marine invertebrates).",
        "Mathematical Models of Population Growth: Exponential growth model in unlimited environments yielding J-shaped growth curve; Logistic growth model in resource-limited environments yielding sigmoid S-shaped curve governed by environmental carrying capacity (K); Biotic potential (intrinsic rate of natural increase r) versus environmental resistance.",
        "Community Ecology and Interspecific Interactions: Biological interactions: Positive interactions (mutualism, commensalism) and negative interactions (predation, parasitism, competition, amensalism); Gause competitive exclusion principle (two species competing for identical limiting resource cannot coexist indefinitely); Lotka-Volterra predator-prey cyclic oscillation models.",
        "Ecological Niche and Habitat Differentiation: Habitat defined as physical address; Ecological niche defined as functional profession and resource utilization hyperspace (Hutchinson multidimensional niche); Fundamental niche (potential physiological envelope without competition) versus realized niche (actual occupied niche in presence of interspecific competitors); Resource partitioning.",
        "Ecotone, Edge Effect, and Ecological Succession: Ecotone: Transition zone between two adjacent distinct ecological communities (e.g., mangrove marsh between terrestrial forest and marine water); Edge effect: Elevated species density and diversity within ecotone; Ecological succession: Primary vs secondary succession; Autogenic vs allogenic; Hydrosere stages (phytoplankton to forest) and Xerosere stages (crustose lichen to climax forest).",
        "Biodiversity Patterns and Island Biogeography: Latitudinal diversity gradient (highest species richness at equatorial tropics, decreasing toward polar regions); Species-area relationship (species richness scales with island surface area); MacArthur and Wilson equilibrium theory of island biogeography: Dynamic balance between colonization immigration rate and extinction rate."
    ],
    [
        "Lindeman Ten Percent Law: Only about ten percent of assimilated energy is transferred from one trophic level to the next.",
        "Inverted Ocean Biomass Pyramid: Rapid phytoplankton turnover yields smaller standing biomass supporting larger zooplankton mass.",
        "Pyramid of Energy Rule: Must always be upright because energy dissipation occurs irreversibly as heat at every trophic step.",
        "Type III Survivorship: Immense juvenile mortality where very few offspring survive to reproductive age.",
        "Carrying Capacity K: Maximum stable population size that an environment can sustain indefinitely without degradation.",
        "Gause Principle: Complete competitors cannot coexist; one will outcompete or displace the other.",
        "Ecotone Definition: Boundary zone between two adjacent ecosystems exhibiting high species diversity.",
        "Edge Effect Example: Songbird density is significantly higher along forest-meadow edges than deep within forest interior.",
        "Hydrosere Climax: Progressive succession from submerged aquatic vegetation to stable terrestrial climax forest.",
        "Exam Tip: In ecological questions, distinguish between fundamental niche (entire range of abiotic conditions a species can tolerate) and realized niche (narrower actual range occupied due to biotic competition and predation)."
    ]
)

add_unit(
    "bsc-zoo-bce: zoogeography",
    [
        "Foundations of Zoogeography and Historical Biogeography: Study of spatial geographical distribution of animal species over geological time; Interaction between ecological conditions, plate tectonics, continental drift, and evolutionary divergence; Major contributors: Alfred Russel Wallace and Philip Sclater.",
        "Major Zoogeographical Realms of the World: Sclater and Wallace division of terrestrial biosphere into six zoogeographical realms: Palearctic, Nearctic, Neotropical, Ethiopian (Afrotropical), Oriental (Indomalayan), and Australian realms; Characterized by distinct physiographic barriers and endemic animal taxa.",
        "Palearctic and Nearctic Realms (Holarctic Region): Palearctic realm: Entire Europe, Russia, North Africa, and northern Asia; Nearctic realm: North America up to Mexico; Connected via prehistoric Bering land bridge; Shared Holarctic fauna: Bison, brown bear, reindeer, elk, beaver; Endemic pronghorn antelope in Nearctic.",
        "Ethiopian (Afrotropical) Realm: Sub-Saharan Africa and Madagascar; Tropical savannas and rainforests; Richest mammalian fauna on Earth: African elephant, giraffes, hippopotamus, gorillas, chimpanzees, zebras, lions, aardvarks; Madagascar sub-region characterized by exceptional endemism (lemurs, tenrecs, chameleons).",
        "Oriental (Indomalayan) Realm: Indian subcontinent, southern China, Indochina, and Malaysian archipelago; Bounded to the north by the Himalayan mountain range; Characteristic tropical fauna: Royal Bengal tiger, Indian rhinoceros, Asian elephant, gibbons, orangutan, tapir, king cobra, and peafowl.",
        "Australian and Neotropical Realms: Australian realm: Australia, New Guinea, and Tasmania; Long geological isolation fostering unique primitive mammalian fauna dominated by monotremes (echidna, platypus) and marsupials (kangaroos, koala, wombat), with absence of native placental mammals; Neotropical realm: South America; Great diversity of endemic fauna: Sloths, anteaters, armadillos, New World monkeys with prehensile tails, toucans, anacondas.",
        "Wallace Line and Weber Line: Biogeographical transition boundaries in the Malay Archipelago: Wallace Line separating Oriental fauna (Borneo and Bali) from Australian-influenced fauna (Sulawesi and Lombok) across deep ocean trench; Weber Line marking equal faunal balance between Asian and Australasian taxa; Intermediate zone known as Wallacea.",
        "Discontinuous and Relict Faunal Distribution: Discontinuous (disjunct) distribution of related taxa separated by vast geographical barriers: Dipnoi lungfishes occurring exclusively in isolated southern continents (Protopterus in Africa, Lepidosiren in South America, Neoceratodus in Australia); Tapirs found only in Southeast Asia and South America; Relicts of once widespread Gondwanan distributions.",
        "Island Biogeography and Insular Fauna: Oceanic islands (volcanic peaks arising from deep ocean bed, never connected to continents, e.g., Galapagos, Hawaii) versus Continental islands (detached parts of continental shelves, e.g., Madagascar, British Isles, Sri Lanka); Insular ecological phenomena: Absence of large terrestrial predators, adaptive radiation (Darwin finches), flightlessness in birds (Dodo, kiwi), and island gigantism or dwarfism.",
        "Continental Drift and Mammalian Radiation: Alfred Wegener continental drift hypothesis and plate tectonics; Pangaea supercontinent splitting into Laurasia and Gondwana; Isolation of South America and Australia during Cretaceous allowed archaic marsupials to flourish before northern placental carnivore radiation occurred; Great American Biotic Interchange upon formation of Panama Isthmus."
    ],
    [
        "Six Wallace Realms: Palearctic, Nearctic, Ethiopian, Oriental, Australian, Neotropical.",
        "Wallace Line Location: Deep ocean trench between Bali and Lombok, separating Oriental and Australasian faunas.",
        "Australian Mammal Domination: Marsupials and monotremes dominate due to early Cretaceous continental isolation.",
        "Holarctic Connection: Bering land bridge facilitated faunal exchange between Palearctic and Nearctic realms.",
        "Lungfish Discontinuous Range: Protopterus (Africa), Lepidosiren (South America), Neoceratodus (Australia).",
        "Madagascar Endemism: Over 90 percent of native mammals, including all lemurs, are strictly endemic to Madagascar.",
        "Oceanic vs Continental Island: Continental islands possess continental rocks and native freshwater fishes and amphibians.",
        "Great American Interchange: Formation of Isthmus of Panama allowed northern placental mammals to invade South America.",
        "Neotropical Primates Feature: Platyrrhine monkeys possessing wide nasal septa and prehensile tails.",
        "Exam Tip: In zoogeography questions, cite the lungfishes (Dipnoi) and ratite flightless birds (ostrich, rhea, emu, kiwi) as textbook examples of Gondwanan continental drift disjunct distribution."
    ]
)

# =========================================================================
# 4. ZOOLOGY LAB II (B.Sc Life Sciences Sem 2)
# =========================================================================

add_unit(
    "bsc-zoolab: safety & instrumentation",
    [
        "Zoological Laboratory Safety and Biosafety: Laboratory hygiene protocols: Mandatory white laboratory coats, protective eyewear, nitrile gloves; Ethical standards in zoological education conforming to CPCSEA guidelines and UGC non-animal alternatives in undergraduate curricula.",
        "Safe Handling and Disposal of Preserved Museum Specimens: Chemical hazards of preservation fluids: Formalin (37% to 40% formaldehyde diluted to 4% to 10% solution); Preserved zoological specimens must be soaked and rinsed thoroughly in water before classroom handling to minimize toxic formaldehyde inhalation; Waste disposal in labeled chemical waste containers.",
        "Operation of Dissecting and Stereoscopic Microscopes: Optical setup of stereo microscopes: Paired eyepieces providing true stereoscopic three-dimensional depth perception; Top incident illumination for opaque structures and bottom transmitted illumination for transparent mounts; Examination of whole insects, embryological mounts, and bone surfaces.",
        "Compound Light Microscope Alignment for Histology: Critical optical centering of light path: Condenser height adjustment for maximum resolution, aperture diaphragm calibration matching objective numerical aperture; Use of immersion oil exclusively on 100x oil-immersion objective and immediate lens cleaning with soft lens tissue.",
        "Care and Maintenance of Permanent Zoological Slides: Handling glass slides by edges to prevent fingerprint grease on specimens; Inspection for bubble-free mounting; Slide box storage in horizontal trays away from dampness and direct sunlight to prevent fading of organic dye stains.",
        "Safe Handling of Chemical Reagents and Solvents: Precautions for handling organic clearing agents and mounting media: Xylene, toluene, DPX mountant, and Canada balsam; Operations involving xylene conducted under ventilation hoods due to neurotoxic solvent hazards.",
        "Water Quality Testing Instrumentation: Operation and calibration of laboratory environmental field meters: Digital pH meters calibrated with pH 4.0, 7.0, and 9.2 standard buffer solutions; Dissolved oxygen (DO) field probes; Portable conductivity and total dissolved solids (TDS) instruments.",
        "Micrometry in Zoological Preparations: Eyepiece micrometer reticle alignment; Superimposition on precision stage micrometer; Calculation of microscopic magnification factor for measuring protozoan parasites, nematode larvae, and histological tissue diameters.",
        "Disposal of Biological and Histological Wastes: Segregation of biological tissues from general municipal laboratory refuse; Chemical deactivation of biological wastewater samples using 1% sodium hypochlorite solution before municipal sewer disposal.",
        "First Aid Protocols in Zoological Laboratories: Management of chemical splash emergencies; Immediate flushing at eyewash fountain for minimum fifteen minutes; First aid treatment for minor glass cuts with sterile dressing and topical antiseptic application."
    ],
    [
        "Ethical Directive: Strict adherence to CPCSEA and UGC directives prioritizing virtual dissection software and non-harmful observation.",
        "Formalin Pre-Wash Rule: Preserved specimens must be thoroughly soaked in running water to remove irritating formaldehyde vapors.",
        "Stereo Microscope Advantage: Provides true 3D spatial depth perception for inspecting intact anatomical structures.",
        "Oil Immersion Care: Immersion oil must be wiped clean immediately after use with lens cleaning paper.",
        "Slide Storage Position: Permanent biological slides must be stored horizontally in slide boxes to prevent cover slip migration.",
        "DPX Mountant Composition: Distrene, plasticizer (tricresyl phosphate), and xylene synthetic mounting resin.",
        "Eyewash Protocol: Flush eyes continuously with clean water for at least 15 minutes following chemical contact.",
        "Digital pH Calibration: Calibration using two-point reference buffers (pH 7.0 neutral and pH 4.0 acidic).",
        "Sharps Management: Broken cover glasses and microscope slides disposed strictly in rigid sharps containers.",
        "Exam Tip: In practical viva, explain that formalin preserves animal tissues by creating covalent methylene cross-links between amino acid lysine groups, permanently denaturing autolytic enzymes."
    ]
)

add_unit(
    "bsc-zoolab: standard preparations",
    [
        "Preparation of Histological Fixatives: Formulation of Bouin fluid: 75 mL saturated aqueous picric acid, 25 mL 40% formalin, and 5 mL glacial acetic acid; Excellent penetration for embryological specimens, rapidly coagulating proteins and hardening delicate soft tissues.",
        "Preparation of Ehrlich Hematoxylin Stain: Progressive nuclear stain: Dissolving 2 grams hematoxylin in 100 mL absolute alcohol, adding 100 mL distilled water, 100 mL glycerol, 10 mL glacial acetic acid, and excess potassium alum; Ripened by oxidation; Stains cell nuclei and chromatin deep blue-black.",
        "Preparation of Eosin Yellowish Counterstain: Cytoplasmic stain: Dissolving 0.5 gram eosin Y powder in 100 mL 70% ethyl alcohol; Stains cytoplasm, collagen fibers, and red blood cells various shades of pink and orange.",
        "Preparation of Physiological Saline Solutions: Formulation of mammalian normal saline: 0.9% w/v sodium chloride in distilled water; Formulation of amphibian Ringer solution: 0.65 gram sodium chloride, 0.014 gram potassium chloride, 0.012 gram calcium chloride, and 0.02 gram sodium bicarbonate per 100 mL distilled water.",
        "Reagent Preparation for Dissolved Oxygen (Winkler Method): Preparation of Manganous Sulfate Reagent: Dissolving 480 grams MnSO4.4H2O in 1000 mL distilled water; Preparation of Alkaline Iodide-Azide Reagent: Dissolving 500 grams NaOH and 150 grams KI in distilled water, adding 10 grams sodium azide (NaN3) to eliminate nitrite interference, and diluting to 1000 mL.",
        "Preparation of Standard Sodium Thiosulfate Titrant: Preparing approximate 0.025 N sodium thiosulfate pentahydrate (Na2S2O3.5H2O); Standardizing against primary standard potassium dichromate using starch indicator; Addition of 0.1 gram sodium carbonate preservative.",
        "Preparation of Starch Indicator Solution: Soluble starch paste: Boiling 1 gram soluble starch in 100 mL distilled water until clear; Cooled and preserved with trace thymol crystal; Forms blue inclusion complex with triiodide in iodometric titrations.",
        "Preparation of Reagents for Free Carbon Dioxide Estimation: Preparing 0.05 N sodium hydroxide (NaOH) titrant; Preparing 0.5% w/v phenolphthalein indicator solution in 50% ethyl alcohol; Endpoint marks sharp transition to faint permanent pink.",
        "Routine Hematoxylin and Eosin (H&E) Staining Protocol: Step-by-step sequence: Deparaffinize sections in xylene, hydrate through graded alcohols (100%, 90%, 70%, 50%) to water, stain in hematoxylin for 5 minutes, blue in running tap water, counterstain in eosin for 1 minute, dehydrate through ascending alcohols, clear in xylene, and mount in DPX.",
        "Quality Control and Maintenance of Working Stains: Filtration of hematoxylin prior to daily laboratory use to remove surface oxidized scum; Storing dye stocks in dark glass bottles; Periodic verification of pH in buffer solutions."
    ],
    [
        "Bouin Fluid Formula: Picric acid, formalin, and glacial acetic acid; premier embryological fixative.",
        "Ehrlich Hematoxylin Role: Premier basic nuclear stain binding to acidic nucleic acids in chromatin.",
        "Eosin Y Role: Acidic cytoplasmic counterstain staining proteins and cytoplasm bright pink.",
        "Mammalian Saline Concentration: 0.9% sodium chloride, isotonic with mammalian blood plasma.",
        "Amphibian Saline Concentration: 0.65% sodium chloride, isotonic with amphibian tissues.",
        "Winkler Reagent A: Concentrated manganous sulfate solution.",
        "Winkler Reagent B: Alkaline iodide with sodium azide to inhibit interfering nitrites.",
        "Starch Indicator Freshness: Must be freshly prepared; decomposes on standing yielding dull endpoints.",
        "H&E Staining Contrast: Nuclei stain purple-blue; cytoplasm, muscle, and connective fibers stain pink.",
        "Exam Tip: In H&E staining, bluing of hematoxylin requires slightly alkaline water (such as tap water or ammoniated water), which converts the red hematoxylin-aluminum lake into an insoluble deep blue lake."
    ]
)

add_unit(
    "bsc-zoolab: experimental procedures",
    [
        "Microscopic Study of Protochordate Whole Mounts: Examination of permanent whole mounts and transverse sections: Branchiostoma (Amphioxus) T.S. through pharyngeal region demonstrating notochord, dorsal hollow nerve cord, epibranchial groove, endostyle, and gill slits; Examination of Herdmania test and calcareous spicules.",
        "Comparative Examination of Cyclostome and Fish Scales: Microscopic identification of vertebrate integumentary derivatives: Placoid scales of shark (Scoliodon) showing basal plate and backwardly curved spine; Cycloid scales of carp displaying concentric growth circuli and nucleus; Ctenoid scales of perch showing comb-like posterior teeth.",
        "Study of Amphibian Embryology Permanent Slides: Microscopic examination of developmental stages of frog (Rana): Unfertilized egg with animal and vegetal hemispheres; Cleavage stages (2-cell, 4-cell, 8-cell, 16-cell stages); Blastula showing blastocoel; Gastrula demonstrating yolk plug, crescentic blastopore lip, and gastrocoel.",
        "Study of Avian Embryological Whole Mounts: Examination of chick embryo development at incubation milestones: 18-hour chick embryo displaying primitive streak and Hensen node; 24-hour embryo displaying 4 to 5 pairs of somites and closing neural folds; 36-hour embryo showing primary brain vesicles (prosencephalon, mesencephalon, rhombencephalon) and optic vesicles; 48-hour embryo showing cranial flexure and heart loop; 72-hour embryo showing allantois and limb buds.",
        "Histological Study of Mammalian Tissues (Stomach and Intestine): Examination of transverse sections of mammalian duodenum: Outer serosa, longitudinal and circular muscularis layers, submucosa, and inner mucosa displaying finger-like villi, goblet cells, and crypts of Lieberkuhn; Distinguishing stomach by absence of villi and presence of gastric pits with chief and parietal cells.",
        "Histology of Mammalian Liver, Pancreas, and Kidney: Microscopic examination of liver lobules with central vein, radiating hepatic cords, and sinusoids; Pancreas showing exocrine acinar tissue and endocrine islets of Langerhans; Kidney cortex displaying glomeruli enclosed in Bowman capsules and proximal/distal convoluted tubules.",
        "Histology of Mammalian Endocrine Gonads (Testis and Ovary): Examination of mammalian testis section showing seminiferous tubules with progressive stages of spermatogenesis, Sertoli nurse cells, and interstitial Leydig cells; Ovary section demonstrating primordial follicles, developing secondary follicles, mature Graafian follicle with ovum and antrum, and corpus luteum.",
        "Determination of Dissolved Oxygen (Winkler Titration Method): Collecting water sample in 300 mL BOD glass bottle without aeration; Adding 2 mL MnSO4 followed by 2 mL alkaline iodide-azide reagent; Shaking to form brown manganic precipitate; Dissolving precipitate with 2 mL concentrated H2SO4 to liberate iodine; Titrating against 0.025 N sodium thiosulfate using starch indicator.",
        "Determination of Free Carbon Dioxide in Water Samples: Collecting water sample gently without splashing; Adding two drops of phenolphthalein indicator; Titrating uncolored acidic sample with standard 0.05 N sodium hydroxide until faint permanent pink color persists for 30 seconds; Calculating free CO2 in mg/L.",
        "Collection and Microscopic Enumeration of Plankton: Towing standard plankton net (mesh size 25 micrometers) through surface water; Preserving concentrated plankton sample with 4% formalin; Transferring 1 mL to Sedgwick-Rafter counting cell; Microscopic identification and counting of phytoplankton and zooplankton genera."
    ],
    [
        "Amphioxus Pharyngeal T.S.: Notochord lies directly ventral to dorsal nerve cord and dorsal to pharynx.",
        "Placoid Scale Diagnostics: Enamel-like vitrodentine covering dentine core with internal pulp cavity.",
        "Frog Yolk Plug Stage: Late gastrula where large yolk-laden endoderm cells plug the circular blastopore.",
        "Chick 24-Hour Landmark: Emergence of 4 to 5 pairs of mesodermal somites flanking the neural tube.",
        "Chick 48-Hour Landmark: Pronounced cranial flexure twisting the anterior embryo onto its left side.",
        "Intestinal Villi Purpose: Immensely expand mucosal absorptive surface area for nutrient uptake.",
        "Islets of Langerhans: Endocrine cell clusters in pancreas secreting insulin (beta cells) and glucagon (alpha cells).",
        "Graafian Follicle: Mature ovarian follicle featuring large fluid-filled antrum surrounding secondary oocyte.",
        "Winkler Iodine Liberation: Quantity of liberated iodine is strictly stoichiometric to dissolved oxygen content.",
        "Exam Tip: In chick embryology slide identification, count the number of somite pairs flanking the neural tube to determine the incubation age accurately (e.g., 4 to 5 pairs = 24 hours; 26 to 28 pairs = 48 hours)."
    ]
)

add_unit(
    "bsc-zoolab: data verification",
    [
        "Calculation of Dissolved Oxygen Concentration: Stoichiometric Winkler calculation formula: Dissolved Oxygen (mg/L or ppm) equals (Volume of 0.025 N thiosulfate in mL multiplied by Normality multiplied by 8000) divided by the Volume of sample titrated; Verifies aquatic health (unpolluted water DO > 6.0 mg/L; hypoxic water DO < 3.0 mg/L).",
        "Calculation of Free Carbon Dioxide in Water: Calculation formula: Free CO2 (mg/L) equals (Volume of 0.05 N NaOH in mL multiplied by Normality multiplied by 44000) divided by the Volume of water sample in mL; Excess CO2 (> 20 mg/L) indicates high organic decomposition and respiratory accumulation.",
        "Quantitative Microscopic Cell Dimension Measurements: Using calibrated ocular micrometer to measure diameter of seminiferous tubules, depth of intestinal villi, and thickness of Graafian follicle theca layers; Replicate sampling across five fields of view and calculation of mean values.",
        "Plankton Density Quantification via Sedgwick-Rafter Cell: Plankton density formula: Number of organisms per liter equals (Count in grid multiplied by Cell volume factor multiplied by Concentrated volume) divided by the Total volume of water sampled; Expressed as organisms per liter.",
        "Shannon-Wiener Biodiversity Index Calculation: Ecological species diversity quantified from sampling counts: H equals minus sum of (pi multiplied by natural logarithm of pi), where pi represents the proportion of total individuals belonging to the i-th species; High H indicates balanced ecosystem.",
        "Verification of Stoichiometric Equivalence in Winkler Reaction: Chemical verification: One mole of dissolved O2 oxidizes two moles of Mn(OH)2 to MnO(OH)2, which subsequently liberates two moles of I2 in acid, consuming four moles of sodium thiosulfate.",
        "Verification of Somite Number in Avian Embryos: Empirical correlation formula for chick embryo staging: Incubation age (hours) correlates with somite number: Number of somite pairs approximately equals (Incubation hours minus 20) multiplied by 1.25; Verifies developmental normalcy against Hamburger-Hamilton standards.",
        "Histological Verification of Mammalian Kidney Zones: High-power cellular differentiation between proximal convoluted tubules (simple cuboidal epithelium with dense brush border microvilli) and distal convoluted tubules (cuboidal epithelium lacking brush border, larger lumen).",
        "Determination of Sample Turbidity and Total Dissolved Solids: Verification of water sample physical quality: Measuring turbidity with Nephelometric Turbidity Meter (NTU); Correlation of electrical conductivity with total dissolved solids (TDS in ppm equals Conductivity in micro-Siemens/cm multiplied by 0.65).",
        "Procedural Replication and Error Analysis: Running duplicate titrations to achieve concordant titre readings within 0.1 mL; Evaluating procedural blanks to correct for reagent impurities; Statistical calculation of percentage relative standard deviation."
    ],
    [
        "Winkler DO Equation: DO (mg/L) equals (V thiosulfate multiplied by 0.025 multiplied by 8000) divided by V water.",
        "Free CO2 Equation: Free CO2 (mg/L) equals (V NaOH multiplied by 0.05 multiplied by 44000) divided by V water.",
        "Clean Water DO Threshold: Minimum 5.0 to 6.0 mg/L required to sustain healthy fish and invertebrate fauna.",
        "Shannon Index H Range: Typically ranges from 1.5 (low diversity) to 3.5 (high diversity in pristine ecosystems).",
        "Proximal Tubule Diagnostic: Dense apical brush border of microvilli fills the tubule lumen under high power.",
        "Distal Tubule Diagnostic: Clear, open lumen with prominent nuclei and no apical microvilli brush border.",
        "Sedgwick-Rafter Volume: Exactly 1.0 mL capacity chamber used for quantitative plankton enumeration.",
        "Winkler Stoichiometry: 1 mole O2 equivalent to 4 moles sodium thiosulfate titrant.",
        "Turbidity Standard Unit: Nephelometric Turbidity Units (NTU) measured using formazin calibration standards.",
        "Exam Tip: In dissolved oxygen viva, explain that sodium azide is included in the alkaline iodide reagent specifically to prevent nitrite ions (common in polluted waters) from releasing extra iodine and giving falsely elevated DO readings."
    ]
)

add_unit(
    "bsc-zoolab: record & viva",
    [
        "Zoological Practical Record Documentation: Scientific practical journal guidelines: Experiment Title, Date, Specimen Code, Taxonomic Hierarchy, Systematic Diagnostic Characters, Labeled Anatomical Diagrams, High-Power Cellular Sectors, Observations, and Inferences.",
        "Anatomical Drawing Conventions: Scientific illustration rules: Accurate proportional representation using sharp HB pencil, clear unbroken outlines, distinct stippling for tissue cellularity, no pencil shading or artistic coloring, and right-aligned horizontal label lines.",
        "University Practical Examination Marking Rubric: Practical exam evaluation components: Whole mount and permanent slide identification (25%), Water quality chemical titration experiment (25%), Scientific accuracy of labeled journal diagrams (20%), Practical record book (15%), and Oral viva voce (15%).",
        "Core Viva Voce Question: Why Does Amphioxus Lack a Heart: Explaining that Amphioxus has low metabolic demands and small dimensions; Blood is propelled through the closed circulatory system by rhythmic peristaltic contractions of the ventral aorta and bulbils at the bases of branchial vessels.",
        "Core Viva Voce Question: What is the Function of the Spiral Valve in Sharks: Describing the spiral valve (typhlosole) inside the short intestine of Scoliodon, which slows food passage and immensely increases the internal absorptive surface area.",
        "Core Viva Voce Question: Why are Mammalian Erythrocytes Non-Nucleated: Explaining that during maturation (erythropoiesis), mammalian red blood cells expel their nuclei and organelles to maximize internal space for hemoglobin, and assume a biconcave disc shape optimizing oxygen diffusion.",
        "Core Viva Voce Question: What is the Significance of Primitive Streak in Chick: Stating that the primitive streak establishes the anterior-posterior body axis of the avian embryo and represents the site where blastoderm cells migrate inwardly to form mesoderm and endoderm (gastrulation).",
        "Core Viva Voce Question: Distinguish Between Placoid, Cycloid, and Ctenoid Scales: Detailing that placoid scales (cartilaginous fish) possess a backwardly directed dentine spine; Cycloid scales (bony fish) have smooth circular margins; Ctenoid scales (bony fish) have comb-like spiny posterior margins.",
        "Core Viva Voce Question: Why Does Dissolved Oxygen Decrease in Warm Polluted Water: Explaining that gas solubility in water decreases as temperature rises, and that high loads of organic pollutants stimulate bacterial aerobic decomposition, which rapidly consumes dissolved oxygen.",
        "Laboratory Cleanliness and Specimen Stewardship: Re-capping chemical reagent bottles immediately; Cleaning glass titration flasks with deionized water; Washing and drying microscopic slides before returning to slide cabinets."
    ],
    [
        "Record Book Structure: Systematic classification, diagnostic features, labeled ground plan and cellular sketches.",
        "Viva Fact Amphioxus Heart: Truly absent; circulation driven by contractile muscular bulbils along ventral aorta.",
        "Viva Fact Shark Spiral Valve: Internal corkscrew fold in intestine maximizing nutrient absorption surface area.",
        "Viva Fact Red Blood Cell Enucleation: Expulsion of nucleus maximizes volume for packing 280 million hemoglobin molecules.",
        "Viva Fact Primitive Streak: Functional equivalent of amphibian blastopore lip mediating avian gastrulation.",
        "Viva Fact Placoid Scale Origin: Dermal-epidermal origin homologous in structure and development to mammalian teeth.",
        "Viva Fact Graafian Antrum: Fluid-filled cavity filled with liquor folliculi surrounding the cumulus oophorus.",
        "Viva Fact Leydig Cell Function: Interstitial cells residing between seminiferous tubules that synthesize testosterone.",
        "Viva Fact Hypoxia in Eutrophication: Massive algal blooms die and bacterial decomposition depletes dissolved oxygen.",
        "Exam Tip: In the viva, when asked why placoid scales feel rough when stroked from tail to head, answer that their hard enamel-tipped dentine spines are oriented pointing backward toward the tail to reduce swimming hydrodynamic drag."
    ]
)
'''

content += part2

with open("scripts/build_bsc_sem2_life.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subjects 3 and 4 to build_bsc_sem2_life.py.")
