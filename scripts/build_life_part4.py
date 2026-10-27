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
# 5. PLANT ANATOMY & EMBRYOLOGY (B.Sc)
# =========================================================================
add("Plant Anatomy & Embryology", 1, "Tissues", [
    "Classification of Plant Tissues: Meristematic tissues (actively dividing cells, thin cellulosic walls, dense cytoplasm, prominent nucleus, no vacuoles) vs Permanent tissues (differentiated cells that have lost proliferative capacity).",
    "Meristem Classifications: By position: Apical meristems (root and shoot apices, drive primary longitudinal growth), Intercalary meristems (internode bases in monocots, leaf elongation), and Lateral meristems (vascular cambium and cork cambium/phellogen, drive secondary radial girth expansion).",
    "Theories of Shoot Apical Meristem (SAM) Organization: Apical cell theory (Nageli, single tetrahedral cell in cryptogams); Histogen theory (Hanstein: dermatogen forms epidermis, periblem forms cortex, plerome forms central stele); Tunica-Corpus theory (Schmidt: outer Tunica dividing anticlinally for surface growth, inner Corpus dividing in all planes for volume).",
    "Root Apical Meristem (RAM) & Quiescent Center: Covered and protected by root cap (calyptra); Clowes' Quiescent Center concept: Hemispherical central zone of low mitotic activity, low RNA/protein synthesis, acting as resistant stem cell reservoir for rebuilding damaged initials.",
    "Simple Permanent Tissues: Parenchyma (living, isodiametric, thin primary cellulosic walls, storage, photosynthesis chlorenchyma, buoyancy aerenchyma); Collenchyma (living, elongated, uneven corner cell wall pectin and cellulose thickening, flexible tensile support in growing stems and petioles); Sclerenchyma (dead at maturity, lignified thick secondary walls, provides rigid mechanical support).",
    "Sclerenchyma Sub-types: Fibers (elongated, slender, tapering cells, e.g. bast fibers in flax, jute, hemp) vs Sclereids / Stone cells (short, isodiametric or branched: brachysclereids in pear flesh, macrosclereids in legume seed coats, astrosclereids in water lilies).",
    "Complex Permanent Tissues (Xylem): Water and mineral conducting vascular tissue; Elements: Tracheids (elongated, tapering imperforate cells with pitted walls in gymnosperms/pteridophytes), Vessel elements (perforated end plates forming continuous tubes in angiosperms), Xylem fibers, and Xylem parenchyma (living, radial storage).",
    "Complex Permanent Tissues (Phloem): Translocation of photosynthates (sucrose, amino acids); Elements: Sieve tube elements (enucleated living cells with perforated sieve plates in angiosperms) paired with Companion cells (derived from same mother cell, retain nucleus, load/unload sugars via plasmodesmata), Phloem parenchyma, and Phloem fibers (bast).",
    "Secretory Tissues & Glandular Structures: External secretory structures: Glandular trichomes, hydathodes (guttation water pores), and floral/extrafloral nectaries; Internal secretory structures: Schizogenous resin ducts in conifers, lysigenous oil glands in citrus peel, and articulated/non-articulated laticifers producing natural rubber latex.",
    "University Examination Strategy: Draw comparative diagrams of parenchyma, collenchyma, and sclerenchyma tissues, explain Schmidt's Tunica-Corpus theory with cell division planes, and contrast xylem vessel elements with tracheids."
], [
    "Tunica Division Plane: Divides strictly anticlinally (perpendicular to surface) to expand surface area.",
    "Corpus Division Plane: Divides periclinally and anticlinally in all planes to build internal bulk.",
    "Quiescent Center Feature: Mitotically inactive central core of root apical meristem acting as reserve.",
    "Collenchyma Wall Chemistry: Uneven localized deposition of cellulose, hemicellulose, and pectin at cell corners.",
    "Sclerenchyma Defining Feature: Lignified thick secondary walls with pit canals; dead at functional maturity.",
    "Xylem Vessel Hallmark: Perforated end-plates forming open continuous conduits exclusive to angiosperms.",
    "Sieve Tube Anucleate State: Mature sieve tube elements lack a nucleus, relying on companion cells.",
    "Phellogen (Cork Cambium): Secondary lateral meristem producing outer phellem (cork) and inner phelloderm.",
    "Hydathode Function: Discharges liquid water droplets through guttation at leaf margins via epithem tissue.",
    "Exam Scoring Tip: Gymnosperms have tracheids for water conduction and sieve cells for translocation, lacking true xylem vessels and companion cells (possessing albuminous cells instead)."
])

add("Plant Anatomy & Embryology", 2, "Root & Stem Anatomy", [
    "Primary Internal Anatomy of Dicot Root (e.g. Sunflower): Epiblema / Rhizodermis with unicellular root hairs; Broad homogeneous parenchymatous cortex; Distinct Endodermis with Casparian strips (radial and transverse suberin thickenings blocking apoplastic water flow, forcing symplastic passage); Uniseriate Pericycle; Diarch to hexarch radial vascular bundles with exarch xylem (protoxylem points outward toward pericycle).",
    "Primary Internal Anatomy of Monocot Root (e.g. Maize): Polyarch radial vascular bundles (more than 8 xylem bundles alternating with phloem); Exarch xylem; Large, conspicuous parenchymatous central pith; Sclerenchymatous pericycle; Does not undergo secondary growth.",
    "Primary Internal Anatomy of Dicot Stem (e.g. Sunflower): Epidermis with multicellular hairs and cuticle; Collenchymatous hypodermis; Endodermis functioning as starch sheath; Sclerenchymatous pericycle forming bundle caps; Eustele organization: Conjoint, collateral, open vascular bundles arranged in broken ring around large central pith; Endarch xylem (protoxylem points inward toward pith).",
    "Primary Internal Anatomy of Monocot Stem (e.g. Maize): Atactostele organization: Numerous conjoint, collateral, closed (no cambium) vascular bundles scattered throughout ground tissue; Peripheral bundles smaller and more densely packed than central ones; Sclerenchymatous bundle sheath enclosing each bundle; Y-shaped protoxylem cavity (lysigenous cavity); No distinct pith or cortex.",
    "Secondary Growth in Dicot Stems: Formation of continuous ring of vascular cambium from fascicular cambium (intrafascicular) and interfascicular cambium (derived from medullary rays); Cambium divides periclinally to produce Secondary Xylem (wood) internally and Secondary Phloem externally; Produces 8-10 times more secondary xylem than phloem.",
    "Wood Anatomy & Growth Rings: Annual rings composed of Spring / Early wood (wide vessels, thin walls, rapid growth) and Autumn / Late wood (narrow vessels, thick walls); Dendrochronology (dating historical tree age via annual rings); Sapwood (alburnum, outer light, active water conducting) vs Heartwood (duramen, central dark, plugged with tyloses, resins, tannins, durable, mechanically strong).",
    "Periderm Formation & Bark Anatomy: Phellogen (cork cambium) arises in outer cortex; Divides to form Phellem (cork cells with suberized impermeable walls) outward and Phelloderm (secondary cortex) inward; Periderm = Phellem + Phellogen + Phelloderm; Lenticels (aerating pores filled with loose complementary cells for gas exchange); Rhytidome (outer dead bark shed periodically).",
    "Secondary Growth in Dicot Roots: Vascular cambium originates as wavy ribbon from parenchymatous tissue below phloem and pericycle outside protoxylem; Becomes circular cylinder; Produces secondary xylem internally and secondary phloem externally; Pericycle gives rise to cork cambium.",
    "Anomalous Secondary Growth in Angiosperms: Departures from normal cambial activity: (1) Abnormal behavior of normal cambium (e.g. Bignonia showing 4 wedged phloem furrows in xylem); (2) Successive rings of accessory concentric cambia (e.g. Boerhavia with included phloem islands, Bougainvillea); (3) Secondary growth in arborescent monocots (Dracaena, accessory cambium in cortex producing secondary bundles).",
    "University Examination Strategy: Draw comparative ground plans and sectorial details of Dicot Stem vs Monocot Stem, explain the origin and activity of vascular cambium during secondary thickening, and describe anomalous secondary growth in Bignonia."
], [
    "Casparian Strip Composition: Suberin and lignin bands on radial and transverse walls of endodermal cells.",
    "Exarch Xylem Arrangement: Protoxylem directed toward the outside (periphery), characteristic of all roots.",
    "Endarch Xylem Arrangement: Protoxylem directed toward the inside (center), characteristic of all stems.",
    "Monocot Stem Vascular Type: Conjoint, collateral, closed (lacks vascular cambium, no secondary growth).",
    "Protoxylem Cavity in Monocot: Water-containing lysigenous cavity formed by dissolution of early protoxylem elements.",
    "Heartwood (Duramen) Characteristics: Inactive, dark, dense, non-conducting wood plugged with balloon-like tyloses.",
    "Periderm Three Components: Phellem (outer cork), Phellogen (cork cambium), and Phelloderm (secondary cortex).",
    "Lenticel Function: Raised lens-shaped cortical pore facilitating gas exchange across suberized periderm.",
    "Bignonia Anomalous Feature: Cambium develops four localized indentations producing four deep phloem wedges in wood.",
    "Exam Scoring Tip: Monocot roots have a large, well-developed central parenchymatous pith and polyarch xylem (>8 bundles), whereas dicot roots have a tiny or absent pith and 2 to 6 xylem bundles."
])

add("Plant Anatomy & Embryology", 3, "Leaf Anatomy", [
    "General Morphological Plan of Foliar Organs: Epidermis (upper adaxial and lower abaxial, covered by hydrophobic cuticular wax), Mesophyll ground tissue, and Vascular bundles (veins).",
    "Dorsiventral (Bifacial) Leaf Anatomy (Dicot Leaf, e.g. Mango, Sunflower): Held horizontally with distinct upper and lower surfaces; Mesophyll differentiated into two zones: (1) Upper Palisade parenchyma (elongated columnar cells perpendicular to upper epidermis, tightly packed with rich chloroplasts for light harvesting); (2) Lower Spongy parenchyma (loosely arranged, irregular cells with prominent intercellular air spaces for gas exchange).",
    "Isobilateral Leaf Anatomy (Monocot Leaf, e.g. Maize, Grasses): Held vertically receiving equal sunlight on both surfaces; Mesophyll undifferentiated into palisade and spongy layers (composed of uniform chlorenchyma cells throughout); Bulliform / Motor cells in upper epidermis.",
    "Bulliform Cells & Leaf Rolling Mechanism: Large, bubble-shaped, thin-walled, highly vacuolated epidermal cells on upper leaf surface of grasses; Under water stress and drought, bulliform cells lose turgor, flaccidly collapse, and cause the leaf blade to roll inward, dramatically reducing transpiration surface area.",
    "Stomatal Complex Anatomy: Stomatal aperture (pore) flanked by pair of specialized crescent-shaped Guard cells, surrounded by Subsidiary / Accessory cells; Stomatal complex = Stoma + Guard cells + Subsidiary cells; Hypostomatic leaf (stomata restricted to lower surface, common in dicots) vs Amphistomatic (stomata on both surfaces, grasses) vs Epistomatic (floating aquatic plants, e.g. Nymphaea).",
    "Stomatal Movement Biophysics (Proton-K+ Pump Hypothesis): Stomatal opening in light: Phototropin activates plasma membrane H+-ATPase, pumping protons out of guard cells; Hyperpolarization drives massive K+ influx through inward rectifying channels and Cl- uptake; Malate2- synthesized from starch; Intracellular osmotic pressure rises, water enters by osmosis, turgid guard cells bend outward along thin outer walls, opening pore; Abscisic acid (ABA) closes pore during drought.",
    "Structural Types of Stomata in Dicotyledons: Metcalfe and Chalk classification: (1) Anomocytic (ranunculaceous, irregular subsidiary cells, e.g. Ranunculus); (2) Anisocytic (cruciferous, three unequal subsidiary cells, one distinctly smaller, e.g. Mustard); (3) Diacytic (caryophyllaceous, two subsidiary cells with common wall perpendicular to pore, e.g. Dianthus); (4) Paracytic (rubiaceous, two subsidiary cells parallel to pore axis, e.g. Ixora).",
    "Kranz Anatomy in C4 Plants (e.g. Maize, Sugarcane): Specialized foliar dimorphism: Prominent concentric Bundle Sheath cells tightly surrounding vascular bundles with large, thick-walled, agranal chloroplasts; Outer radial Mesophyll cells containing normal granal chloroplasts; Spatial segregation of initial atmospheric CO2 fixation (PEP carboxylase in mesophyll) from Calvin cycle (RuBisCO in bundle sheath), completely suppressing photorespiration.",
    "Foliar Xeromorphic Adaptations: Sunken stomata in deep crypts lined with epidermal trichomes (e.g. Nerium), thick multilayered epidermis, multiple cuticular wax layers, and hypodermal sclerenchyma to minimize transpirational water loss in arid environments.",
    "University Examination Strategy: Draw and label detailed cross-sections of a Dicot (Dorsiventral) Leaf vs a Monocot (Isobilateral) Leaf, explain the Proton-K+ pump mechanism of stomatal regulation, and detail Kranz anatomy in C4 plants."
], [
    "Dicot Leaf Mesophyll Differentiation: Divided into upper palisade chlorenchyma and lower spongy aerenchyma.",
    "Bulliform Cells Role: Large turgor-sensitive epidermal cells in grasses driving inward foliar rolling under drought.",
    "Stomatal Opening Osmotic Driver: Massive accumulation of potassium (K+) and malate ions inside guard cell vacuoles.",
    "Guard Cell Wall Anisotropy: Inner concave wall is thick and inelastic, while outer convex wall is thin and stretchable.",
    "Kranz Anatomy Feature: Wreath-like concentric bundle sheath cells containing agranal chloroplasts in C4 plants.",
    "Anisocytic Stomata Hallmark: Stoma surrounded by three subsidiary cells with one distinctly smaller than other two.",
    "Diacytic Stomata Hallmark: Two subsidiary cells whose common contact wall is oriented at 90 degrees to pore axis.",
    "Paracytic Stomata Hallmark: Two subsidiary cells lying parallel to the longitudinal axis of the stoma pore.",
    "Nerium Leaf Xeromorphy: Stomata located in deep hairy invaginations called stomatal crypts on abaxial surface.",
    "Exam Scoring Tip: C4 plants with Kranz anatomy operate at zero photorespiration because RuBisCO in the bundle sheath cells is shielded from atmospheric oxygen and continuously saturated with carbon dioxide."
])

add("Plant Anatomy & Embryology", 4, "Embryo Development", [
    "Microsporogenesis & Male Gametophyte Development: Anther structure with four microsporangia; Wall layers: Epidermis, Endothecium (hygroscopic alpha-cellulose fibrous bands for dehiscence), Middle layers, and Tapetum (innermost nutritive tissue, secretory or amoeboid, synthesizes callase, exine precursors called sporopollenin, and pollen coat / pollenkitt); Microspore mother cells undergo meiosis to yield tetrahedral tetrads.",
    "Pollen Grain Ultrastructure: Exine (outer resistant layer made of oxidative carotenoid polymer sporopollenin, with germ pores) and Intine (inner pectocellulosic wall); Two-celled stage shed in 60 percent angiosperms: large Vegetative / Tube cell and small lenticular Generative cell (divides mitotically to form two non-motile male gametes).",
    "Megasporogenesis & Ovule Morphological Anatomy: Ovule / Megasporangium attached to placenta by funiculus; Parts: Nucellus (central tissue), Integuments (inner and outer), Micropyle (apical opening), Chalaza (basal region), and Hilum; Ovule types: Anatropous (inverted 180 degrees, most common, micropyle close to funiculus), Orthotropous (straight erect), Campylotropous, Amphitropous, and Circinotropous.",
    "Megasporogenesis & Polygonum-Type Megagametogenesis: Megaspore mother cell in nucellus undergoes meiosis to form linear tetrad of four haploid megaspores; Three micropylar megaspores degenerate; Functional chalazal megaspore undergoes three rounds of free-nuclear mitosis to form monosporic 8-nucleate, 7-celled mature female gametophyte (embryo sac).",
    "Mature Embryo Sac (Female Gametophyte) Architecture: Egg apparatus at micropylar pole: central Egg cell flanked by two Synergids (bearing finger-like filiform apparatus for guiding pollen tube entry); Three Antipodal cells at chalazal pole; Central cell containing two polar nuclei that fuse into diploid secondary nucleus.",
    "Double Fertilization & Triple Fusion: S.G. Nawaschin discovery; Pollen tube enters ovule (porogamy via micropyle, chalazogamy, or mesogamy); Discharges two male gametes into degenerate synergid; Syngamy (first male gamete fuses with haploid egg nucleus to form diploid 2n Zygote); Triple Fusion (second male gamete fuses with diploid central cell secondary nucleus to form triploid 3n Primary Endosperm Nucleus PEN).",
    "Early Embryogeny in Dicotyledons (Capsella bursa-pastoris): Zygote divides transversely into basal suspensor cell and terminal embryonal cell; Suspensor forms filamentous chain anchoring embryo; Stages: Proembryo -> Octant -> Globular embryo -> Heart-shaped embryo (cotyledonary primordia emerge) -> Torpedo stage -> Mature embryo with two cotyledons, plumule, radicle, and hypocotyl.",
    "Monocot Embryo Anatomy (Grass / Maize): Single shield-shaped cotyledon called Scutellum specialized for absorbing nutrients from endosperm; Plumule enclosed in protective sheath called Coleoptile; Radicle and root cap enclosed in protective sheath called Coleorhiza; Epiblast represents rudimentary second cotyledon.",
    "Apomixis & Polyembryony: Apomixis (asexual seed formation bypassing meiosis and syngamy; Agamospermy: recurrent vs non-recurrent, adventive embryony where embryos arise directly from nucellar or integumentary diploid cells e.g. Citrus, Mango); Polyembryony (presence of more than one embryo inside single seed, discovered by Leeuwenhoek in orange seeds).",
    "University Examination Strategy: Draw and label the 7-celled 8-nucleate Polygonum-type embryo sac, describe the process of double fertilization and triple fusion with ploidy levels, and trace the developmental stages of a dicot embryo from zygote to heart stage."
], [
    "Polygonum Embryo Sac Composition: 7-celled, 8-nucleate organization (3 antipodals, 2 synergids, 1 egg, 1 binucleate central cell).",
    "Filiform Apparatus Function: Thickened synergid finger-like wall projections that chemically guide pollen tube entry.",
    "Tapetum Essential Function: Nutritive layer feeding microspores and synthesizing sporopollenin and pollenkitt.",
    "Sporopollenin Resistance: Extremely resistant biological polymer preserving fossil pollen grains against acid and alkali.",
    "Syngamy Fusion Equation: Male Gamete (n) + Egg (n) -> Zygote (2n), giving rise to the diploid plant embryo.",
    "Triple Fusion Equation: Male Gamete (n) + 2 Polar Nuclei (2n) -> Primary Endosperm Nucleus (3n).",
    "Anatropous Ovule Geometry: Body inverted completely through 180 degrees so micropyle lies adjacent to funiculus.",
    "Monocot Scutellum Identity: Modified single large shield-shaped cotyledon adapted for nutrient mobilization.",
    "Adventive Polyembryony Example: Diploid nucellar cells bud into embryo sac in Citrus seeds forming multiple embryos.",
    "Exam Scoring Tip: In double fertilization, the product of syngamy is diploid (2n embryo), while the product of triple fusion is triploid (3n endosperm)."
])

add("Plant Anatomy & Embryology", 5, "Endosperm", [
    "Origin & Physiological Role of Endosperm: Formed by mitotic division of the triploid (3n) Primary Endosperm Nucleus (PEN) following triple fusion; Acts as rich physiological nutritive tissue supplying carbohydrates, proteins, and growth regulators to the developing embryo; Absent in Orchidaceae, Podostemaceae, and Trapaceae.",
    "Nuclear Endosperm Development: Most common type in angiosperms (approx 56 percent of families, e.g. Cotton, Maize, Coconut water); Primary endosperm nucleus undergoes repeated free-nuclear mitotic divisions without wall formation; Central vacuole pushes thousands of free nuclei to peripheral cytoplasm; Centripetal cellularization occurs later from periphery toward center.",
    "Liquid Endosperm in Coconut (Cocos nucifera): Free-nuclear endosperm represents fluid coconut water containing thousands of free suspended nuclei and cell-free nutrients; Centripetal wall formation deposits solid white cellular endosperm meat (copra) lining internal endocarp wall.",
    "Cellular Endosperm Development: Every nuclear division of the primary endosperm nucleus is accompanied immediately by cytokinesis (cell wall formation); Entire tissue is cellular right from initial mitotic division; Common in advanced sympetalous dicots (approx 25 percent of families, e.g. Datura, Petunia, Utricularia).",
    "Helobial Endosperm Development: Intermediate mode between nuclear and cellular types, characteristic of order Helobiae (monocots); First division of PEN is followed by transverse wall, partitioning embryo sac into large micropylar chamber and small chalazal chamber; Subsequent divisions in micropylar chamber are free-nuclear, while chalazal chamber exhibits limited divisions or remains coenocytic.",
    "Endosperm Haustoria: Specialized absorptive hypha-like outgrowths developing from micropylar or chalazal poles of cellular or nuclear endosperm; Penetrates aggressively into nucellar and maternal integumentary tissues to absorb and mobilize nutrients for embryo nourishment.",
    "Ruminate Endosperm: Endosperm exhibiting wrinkled, uneven, furrowed or folded appearance; Caused by irregular ingrowths or infoldings of the surrounding seed coat / integument (e.g. Areca catechu / betel nut, Annona squamosa / custard apple, Myristica / nutmeg).",
    "Mosaic Endosperm: Endosperm tissue displaying patches of contrasting colors or genetic traits (e.g. red and white patches in Indian corn / Zea mays kernels); Arises due to somatic mutations, aberrant chromosomal behavior, or independent fertilization by multiple sperm nuclei during development.",
    "Albuminous (Endospermic) vs Exalbuminous (Non-Endospermic) Seeds: Endospermic seeds retain massive persistent endosperm in mature seed as primary food storage organ (e.g. Castor, Wheat, Maize, Barley, Onion); Non-endospermic seeds consume endosperm completely during embryo development, storing reserve food in fleshy cotyledons (e.g. Pea, Gram, Bean, Groundnut).",
    "University Examination Strategy: Compare Nuclear, Cellular, and Helobial endosperm types with developmental diagrams, explain the nature of coconut water and copra, and differentiate endospermic vs non-endospermic seeds."
], [
    "Primary Endosperm Ploidy: Triploid (3n) in standard monosporic Polygonum-type diploid angiosperms.",
    "Nuclear Endosperm Hallmark: Initial nuclear divisions proceed without cell wall formation, creating coenocytic fluid.",
    "Coconut Water Identity: Free-nuclear liquid endosperm containing suspended free nuclei and phytohormones.",
    "Coconut Copra Identity: Cellularized peripheral endosperm formed by centripetal cell wall deposition.",
    "Cellular Endosperm Hallmark: Transverse and longitudinal cell wall formation accompanies every nuclear division.",
    "Helobial Endosperm Partition: Initial division creates unequal large micropylar and small chalazal chambers.",
    "Ruminate Endosperm Examples: Betel nut (Areca catechu) and custard apple (Annona squamosa).",
    "Non-Endospermic Seed Examples: Legume seeds (Pea, Bean, Gram) where cotyledons absorb entire endosperm.",
    "Endospermic Dicot Seed Example: Castor (Ricinus communis), possessing massive oily endosperm and caruncle.",
    "Exam Scoring Tip: Gymnosperms have a haploid (1n) endosperm formed before fertilization, which represents the female gametophyte, unlike the triploid (3n) post-fertilization endosperm of angiosperms."
])

# Save updated dataset
with open('scripts/sem3_life_complete_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
