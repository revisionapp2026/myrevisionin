import json

with open('scripts/sem3_btech_missing_data.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

data = {}
for k, v in raw.items():
    sub, num = k.split(":::")
    data[(sub, int(num))] = v

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    data[(sub, num)] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 5. BUILDING MATERIALS & CONSTRUCTION
# =========================================================================
add("Building Materials & Construction", 1, "Stones & Bricks", [
    "Building Stones Classification: Geological (Igneous: granite, basalt; Sedimentary: sandstone, limestone; Metamorphic: marble, slate, quartzite); Physical (stratified vs unstratified); Chemical (siliceous, argillaceous, calcareous).",
    "Engineering Properties & Testing of Stones: Compressive crushing strength ($>100\\text{ MPa}$ for granite, $>40\\text{ MPa}$ for sandstone); Water absorption test ($<5\\%$ for good building stone); Mohs hardness scale (1-talc to 10-diamond); Impact test (Toughness index) and Attrition test (Deval machine).",
    "Quarrying & Dressing of Stones: Blasting methods using gunpowder/dynamite; Wedging and channeling; Dressing (pitched face, hammer dressed, chisel drafted, ashlar fine dressed) to provide true bedding joints and remove quarry sap.",
    "Brick Earth Composition & Manufacture: Ideal brick clay: Silica ($50-60\\%$, prevents cracking/shrinkage), Alumina ($20-30\\%$, imparts plasticity), Lime ($<5\\%$, aids fusion), Iron oxide ($5-6\\%$, gives characteristic red color), Magnesia; Harmful ingredients: excess lime, iron pyrites, alkalis (cause efflorescence).",
    "Brick Manufacturing Process: Preparation of clay (unsoiling, digging, weathering, blending, tempering in pug mill), Molding (hand molding vs machine extrusion), Drying (hack drying under shade), and Burning.",
    "Brick Burning Kilns: Intermittent kilns (clamp burning, up-draught, down-draught) vs Continuous kilns (Bull's Trench kiln, Hoffman's kiln, tunnel kiln); Burning stages: water smoking ($100-400^\\circ\\text{C}$), dehydration ($400-650^\\circ\\text{C}$), oxidation ($650-900^\\circ\\text{C}$), and vitrification ($900-1100^\\circ\\text{C}$).",
    "Standard Brick Dimensions & Classification: Standard modular brick size $190 \\times 90 \\times 90\\text{ mm}$ (nominal size with mortar $200 \\times 100 \\times 100\\text{ mm}$); First class bricks (compressive strength $\\ge 10.5\\text{ MPa}$, water absorption $<20\\%$, metallic ringing sound on impact).",
    "Field & Laboratory Testing of Bricks: Compressive strength test (soaked in water 24 hours, frog filled with 1:3 cement mortar, tested in CTM); Water absorption test (cold water 24 hours or boiling 5 hours); Efflorescence test (submerged in distilled water, rated nil, slight, moderate, heavy, serious).",
    "Special Bricks & Ceramic Blocks: Refractory fireclay bricks (high alumina for furnaces $>1600^\\circ\\text{C}$), Perforated and hollow clay blocks (thermal and acoustic insulation, light dead load), Acid-resistant bricks, and Fly-ash lime gypsum (FaL-G) eco-bricks.",
    "University Examination Strategy: State constituents of good brick earth with their functions and defects caused by excess, compare Hoffman's continuous kiln with clamp burning, and calculate water absorption percentage."
], [
    "Modular Brick Dimensions: $190 \\times 90 \\times 90\\text{ mm}$ (Nominal with mortar: $200 \\times 100 \\times 100\\text{ mm}$).",
    "First Class Brick Strength: Minimum $10.5\\text{ MPa}$ ($105\\text{ kg/cm}^2$).",
    "Second Class Brick Strength: Minimum $7.0\\text{ MPa}$.",
    "First Class Water Absorption: Shall not exceed $20\\%$ of dry weight after 24-hour immersion.",
    "Stone Water Absorption Limit: Good building stone must absorb less than $5\\%$ water by weight.",
    "Brick Silica Function: $50-60\\%$ silica prevents cracking, shrinking, and warping.",
    "Brick Alumina Function: $20-30\\%$ alumina imparts plasticity necessary for molding.",
    "Efflorescence Cause: Soluble alkalis ($Na_2SO_4, K_2SO_4$) crystallizing as white powder on evaporation.",
    "Brick Frog Dimension: Indentation $10-20\\text{ mm}$ deep on top face to form mechanical shear key for mortar.",
    "Exam Scoring Tip: Granite is an intrusive unstratified siliceous igneous rock, whereas basalt is an extrusive volcanic igneous rock."
])

add("Building Materials & Construction", 2, "Cement & Concrete", [
    "Raw Materials of Portland Cement: Calcareous materials (limestone, chalk, $60-65\\%\\text{ CaO}$) and Argillaceous materials (clay, shale, $17-25\\%\\text{ SiO}_2, 3-8\\%\\text{ Al}_2\\text{O}_3, 0.5-6\\%\\text{ Fe}_2\\text{O}_3$); $2-3\\%$ gypsum ($CaSO_4 \\cdot 2H_2O$) interground to retard flash setting.",
    "Bogue's Compounds in Clinker: Tricalcium silicate ($C_3S$, alite, $45-60\\%$, early strength within 28 days), Dicalcium silicate ($C_2S$, belite, $15-30\\%$, progressive ultimate strength after 1 year), Tricalcium aluminate ($C_3A$, $6-10\\%$, initial flash set and high heat of hydration), and Tetracalcium aluminoferrite ($C_4AF$, $6-10\\%$, lowest strength).",
    "Hydration of Cement & Heat Evolution: Exothermic reaction; Hydration products: Calcium Silicate Hydrate (C-S-H gel / tobermorite gel, provides bonding and strength) and Calcium hydroxide ($Ca(OH)_2$, portlandite, basic pH $>12.5$ protecting steel reinforcement against corrosion).",
    "Ordinary Portland Cement (OPC) Grades: OPC 33, OPC 43, and OPC 53 conforming to IS specifications; Numbers indicate 28-day characteristic compressive strength in MPa; Initial setting time $\\ge 30\\text{ minutes}$; Final setting time $\\le 600\\text{ minutes}$ (10 hours).",
    "Special Cements & Applications: Rapid Hardening Cement (higher $C_3S$ and finer grinding), Low Heat Cement (low $C_3A$ and $C_3S$ for mass dam concrete), Portland Pozzolana Cement (PPC, uses fly ash/calcined clay, durable against sulfate attack), and Sulfate Resisting Cement ($C_3A < 5\\%$).",
    "Aggregates for Concrete: Fine aggregate (passing $4.75\\text{ mm}$ IS sieve, grading zones I to IV based on Fineness Modulus $2.2-3.2$) and Coarse aggregate ($10\\text{ mm}, 20\\text{ mm}, 40\\text{ mm}$); Flakiness and Elongation indices (must be $<15-20\\%$); Bulking of sand due to surface moisture.",
    "Workability of Concrete & Tests: Ease of placement, compaction, and finishing without segregation or bleeding; Tests: Slump test (true slump, shear slump, collapse slump), Compacting factor test (ratio of partially to fully compacted density), and Vee-Bee consistometer test.",
    "Water-Cement Ratio & Abram's Law: Compressive strength of concrete depends inversely on water-cement ratio: $f_c = \\frac{A}{B^{w/c}}$, provided full compaction is achieved; Lower $w/c$ ($0.40-0.45$) yields dense, impermeable, high-strength concrete.",
    "Concrete Curing Methods: Essential to maintain moisture and temperature for continuous C-S-H hydration; Water ponding on slabs, wet burlap covering, continuous water sprinkling, membrane curing compounds, and high-pressure steam curing for precast elements.",
    "University Examination Strategy: Calculate quantities of Bogue's compounds, explain the role of gypsum in preventing flash set, plot Abram's water-cement law curve, and describe the slump test procedure."
], [
    "Abram's Water-Cement Law: $f_c = \\frac{A}{B^{w/c}}$ (strength is governed primarily by $w/c$ ratio).",
    "OPC Initial Setting Time: Minimum 30 minutes (measured with Vicat needle $1\\text{ mm}^2$).",
    "OPC Final Setting Time: Maximum 600 minutes (10 hours, annular cutting ring fails to indent).",
    "Vicat Normal Consistency: Water percentage $P$ producing needle penetration of $33-35\\text{ mm}$ from top.",
    "Soundness Test (Le Chatelier): Expansion due to free lime must not exceed $10\\text{ mm}$.",
    "Autoclave Soundness: Magnesia expansion must not exceed $0.8\\%$.",
    "Bogue's Tricalcium Silicate ($C_3S$): Produces high early strength (first 7-28 days).",
    "Bogue's Dicalcium Silicate ($C_2S$): Produces long-term progressive strength beyond 28 days.",
    "Bogue's Tricalcium Aluminate ($C_3A$): Responsible for initial set and highest heat of hydration ($865\\text{ J/g}$).",
    "Exam Scoring Tip: Gypsum ($CaSO_4 \\cdot 2H_2O$) reacts with $C_3A$ to form insoluble calcium sulfoaluminate (ettringite), preventing catastrophic flash setting."
])

add("Building Materials & Construction", 3, "Timber & Steel", [
    "Structure of an Exogenous Tree: Macrostructure in transverse cross-section: Pith (central core), Heartwood (inactive, dark, mechanically strong), Sapwood (outer active sap-conducting rings), Cambium layer (living cellular layer), Inner bark (phloem), and Outer protective bark.",
    "Moisture in Timber & Fiber Saturation Point (FSP): Free water (in cell cavities) vs Bound water (within cell walls); Fiber Saturation Point ($FSP \\approx 25-30\\%$ moisture); Timber shrinks and swells only when moisture content changes below FSP.",
    "Seasoning of Timber: Reducing moisture content to equilibrium ($10-12\\%$); Natural air seasoning (slow, low cost) vs Artificial seasoning (kiln seasoning with controlled humidity/temperature, chemical seasoning, boiling, electrical seasoning); Prevents fungal decay and warping.",
    "Defects and Decay in Timber: Natural defects (knots: live/dead, shakes: heart/cup/star shakes, twisted fibers); Fungal diseases: Dry rot (Poria incrassata / Merulius lacrymans, converts wood into dry brown powder in damp unventilated areas) and Wet rot; Wood-boring beetles and termites.",
    "Preservation of Timber: Pressure impregnation with creosote oil (coal-tar distillate) or water-borne copper-chrome-arsenic (CCA / Ascu formulation); Surface painting with fire-retardant chemicals (sodium silicate, ammonium phosphate).",
    "Engineered Wood Products: Plywood (odd number of thin veneers glued with grain oriented at strictly $90^\\circ$ cross-angles, eliminates directional weakness), Laminated Veneer Lumber (LVL), Glued Laminated Timber (Glulam for long-span arches), Particle board, and Medium Density Fiberboard (MDF).",
    "Structural Steel in Construction: Hot-rolled structural sections: Indian Standard Joist (ISJB, ISMB, ISWB), Channel sections (ISMC), Angle sections (ISA equal/unequal), Tee sections (ISNT), and hollow structural sections (RHS/SHS).",
    "Reinforcing Steel Bars for Concrete: Mild steel bars (Grade Fe 250, distinct yield plateau $\\sigma_y = 250\\text{ MPa}$); High Yield Strength Deformed (HYSD) bars: Cold Twisted Deformed (CTD Fe 415) and Thermo-Mechanically Treated (TMT Fe 500, Fe 550D).",
    "Thermo-Mechanically Treated (TMT) Bar Technology: High-pressure water quenching of red-hot rolling bar forms hard outer tempered martensite rim, followed by self-tempering and slow air cooling to form ductile ferrite-pearlite core; High yield strength combined with high ductility ($>14.5\\%$ elongation).",
    "University Examination Strategy: Draw a neat labeled cross-section of an exogenous tree trunk, explain the significance of the Fiber Saturation Point (FSP), describe the mechanism of dry rot, and detail TMT bar metallurgy."
], [
    "Fiber Saturation Point (FSP): Moisture content $\\approx 28-30\\%$; Shrinkage begins only below FSP.",
    "Equilibrium Moisture Content (EMC): $10-12\\%$ for seasoned construction timber.",
    "Plywood Cross-Graining Rule: Odd number of plies ($3, 5, 7$) glued with grain perpendicular to adjacent plies.",
    "Ascu Wood Preservative: 1 part $As_2O_5 \\cdot 2H_2O$ + 3 parts $CuSO_4 \\cdot 5H_2O$ + 4 parts $K_2Cr_2O_7$.",
    "Dry Rot Fungus Cause: Lack of ventilation in damp, stagnant air causing wood to crumble into powder.",
    "TMT Steel Microstructure: Hard outer tempered martensite case with soft, ductile ferrite-pearlite core.",
    "Fe 415 Proof Stress: $0.2\\%$ offset yield strength is minimum $415\\text{ MPa}$.",
    "Fe 500D Ductile Steel: 'D' denotes high elongation ($\ge 16\\%$) required for seismic earthquake resistance.",
    "Structural Steel Modulus: Young's modulus $E = 2 \\times 10^5\\text{ MPa}$ ($200\\text{ GPa}$) for all grades.",
    "Exam Scoring Tip: Heartwood is darker, denser, and more decay-resistant than sapwood because cell cavities are plugged with tannins, resins, and gums."
])

add("Building Materials & Construction", 4, "Masonry", [
    "Brick Masonry Terms: Course (horizontal layer of bricks), Header (brick laid with short face $90 \\times 90\\text{ mm}$ exposed), Stretcher (brick laid with long face $190 \\times 90\\text{ mm}$ exposed), Closer (cut brick piece along length: queen closer, king closer), Bat (cut brick across width: half bat, three-quarter bat).",
    "English Bond: Alternative courses of headers and stretchers; Queen closer placed next to the corner header (quoin header) in header course to generate $1/4$ brick lap ($45\\text{ mm}$); Strongest and most widely used bond in heavy load-bearing walls.",
    "Flemish Bond: Each course consists of alternate headers and stretchers; Single Flemish bond (Flemish facing with English backing for walls $\ge 1.5$ bricks thick) vs Double Flemish bond (both faces show Flemish appearance); Better aesthetic appearance than English bond but slightly weaker.",
    "Stone Masonry Classifications: Rubble masonry (undressed or roughly dressed stones: random rubble uncoursed/coursed, square rubble, dry rubble without mortar) vs Ashlar masonry (accurately dressed stones with thin joints $<3\\text{ mm}$: Ashlar fine, Ashlar rough, Ashlar chamfered, Ashlar block-in-course).",
    "Bond Stones & Through Stones in Masonry: Through stones extend through full wall thickness at horizontal intervals of $1.5\\text{ m}$ to tie front and rear wythes together; In thick walls, overlapping header stones provide structural integrity.",
    "Cavity Walls & Damp Protection: Two masonry skins (inner load-bearing leaf and outer facing leaf) separated by continuous $50-75\\text{ mm}$ air space; Tied with stainless steel or galvanized wall ties ($4-5\\text{ ties/m}^2$); Prevents rain penetration, dampness, and provides high thermal insulation.",
    "Damp Proof Course (DPC): Continuous impermeable horizontal barrier ($25-40\\text{ mm}$ thick 1:2 cement mortar with waterproofing compound or asphalt mastic) laid at plinth level above ground to intercept capillary rise of subsoil moisture.",
    "Arches & Lintels: Lintel (horizontal flexural beam over opening: RCC, stone, steel) vs Arch (curved compression structure transmitting loads laterally to abutments); Arch components: Intrados (soffit), extrados, crown, keystone, voussoirs, springing line, impost, rise, and span.",
    "Partition Walls & Partition Systems: Non-load bearing interior dividing walls; Brick partitions ($100\\text{ mm}$ half-brick wall reinforced with hoop iron), hollow clay block partitions, lightweight aerated concrete blocks (AAC), and drywall gypsum plasterboard on light-gauge steel studs.",
    "University Examination Strategy: Draw front elevation and plan of alternate courses of 1-brick thick English bond and Double Flemish bond showing quoin headers and queen closers, detail the components of a cavity wall, and draw an arch schematic."
], [
    "Queen Closer Half Size: $190 \\times 45 \\times 90\\text{ mm}$ (cut longitudinally down center).",
    "King Closer Dimensions: Corner triangle cut from center of stretcher to center of header.",
    "English Bond Characteristic: Alternate complete courses of stretchers and headers; Strongest bond.",
    "Flemish Bond Characteristic: Alternating stretchers and headers in every single course.",
    "Cavity Wall Air Gap: Standard width $50\\text{ mm}$ to $75\\text{ mm}$.",
    "Cavity Wall Tie Density: Minimum 4 to 5 ties per square meter of wall area.",
    "Ashlar Joint Thickness: Precision joints not exceeding $3\\text{ mm}$ in thickness.",
    "DPC Placement Level: Installed horizontally across entire wall thickness at plinth level.",
    "Arch Keystone Function: Central wedge-shaped voussoir at crown locking all voussoirs in place.",
    "Exam Scoring Tip: The queen closer is never placed at the corner quoin; it is always placed immediately after the quoin header to maintain a half-lap staggered bond."
])

add("Building Materials & Construction", 5, "Foundations", [
    "Role & Objectives of Foundations: Substructure transferring all superstructure dead loads, live loads, and wind/seismic loads safely to bearing soil; Prevents structural shear failure of subsoil and limits total and differential settlement.",
    "Bearing Capacity of Soil (Terzaghi's Theory): Ultimate bearing capacity for shallow continuous strip footing: $q_{ult} = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_gamma$, where $N_c, N_q, N_\\gamma$ are dimensionless bearing capacity factors depending purely on internal friction angle $\\phi$.",
    "Safe Bearing Capacity (SBC): $q_{safe} = \\frac{q_{ult} - \\gamma D_f}{FOS} + \\gamma D_f$, where Factor of Safety $FOS$ is typically taken as $2.5$ to $3.0$.",
    "Shallow Foundations Classifications: Footing depth $D_f \\le B$ (footing width); Types: Isolated spread footing (pad/stepped for single column), Combined footing (rectangular or trapezoidal supporting two columns), Strip footing (continuous for load-bearing wall), Strap / Cantilever footing, and Raft / Mat foundation.",
    "Raft (Mat) Foundations: Continuous reinforced concrete slab covering entire building footprint; Used when soil has low bearing capacity or superstructure loads are heavy, or when individual footings occupy $>50\\%$ of plot area; Bridges weak soil pockets and minimizes differential settlement.",
    "Deep Foundations & Pile Classifications: Deep foundations ($D_f > B$); Classification by load transfer: End-bearing piles (rest on bedrock/hard stratum; $Q_u = q_b A_b$) vs Friction piles (develop resistance through shaft shear friction along pile length: $Q_u = f_s A_s$); Combined end-bearing and friction.",
    "Pile Types by Material & Installation: Driven precast concrete piles, Cast-in-situ bored concrete piles (using bentonite drilling mud slurry), Under-reamed piles (single or double enlarged bulb bulbs in expansive black cotton soils), and Steel H-piles.",
    "Under-Reamed Piles in Expansive Soils: Specially designed for black cotton soils exhibiting high swelling and shrinkage; Under-reamed bulbs ($2-2.5 \\times$ shaft diameter) anchored in stable, non-active soil zone below moisture fluctuation depth ($>2.5-3.5\\text{ m}$).",
    "Cofferdams & Caissons (Well Foundations): Cofferdams (temporary watertight enclosures for bridge pier construction in rivers) vs Caissons (permanent massive hollow box, open, or pneumatic well foundations sunk into riverbed to deep hard strata).",
    "University Examination Strategy: State Terzaghi's ultimate bearing capacity formula for strip, square, and circular footings, differentiate end-bearing piles from friction piles, and draw a detailed sketch of a double under-reamed pile."
], [
    "Terzaghi's Strip Footing Formula: $q_{ult} = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$.",
    "Terzaghi's Square Footing Formula: $q_{ult} = 1.3 c N_c + \\gamma D_f N_q + 0.4 \\gamma B N_\\gamma$.",
    "Terzaghi's Circular Footing Formula: $q_{ult} = 1.3 c N_c + \\gamma D_f N_q + 0.3 \\gamma B N_\\gamma$.",
    "Shallow Foundation Criterion: Depth of embedment $D_f \\le B$ (foundation width).",
    "Safe Bearing Capacity Formula: $q_{safe} = \\frac{q_{net, ult}}{FOS} + \\gamma D_f$ (with $FOS = 2.5 - 3.0$).",
    "End-Bearing Pile Capacity: $Q_u = q_p A_p$ (relies on point base resistance).",
    "Friction Pile Capacity: $Q_u = \\sum f_s A_s = \\alpha c_u A_s$ (relies on shaft adhesion).",
    "Under-Reamed Bulb Diameter: Typically $2.0$ to $2.5$ times the pile shaft diameter.",
    "Black Cotton Soil Threat: Montmorillonite clay mineral causes severe swelling when wet and deep cracking upon drying.",
    "Exam Scoring Tip: For purely cohesive clay soil under undrained conditions ($\\phi = 0$), Terzaghi's factors are $N_c = 5.7, N_q = 1.0, N_\\gamma = 0$."
])

# Save updated dataset
with open('scripts/sem3_btech_missing_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
