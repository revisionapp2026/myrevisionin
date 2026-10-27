import json

with open('scripts/sem3_btech_missing_data.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

# Reconstruct data dict
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
# 2. AEROSPACE MATERIALS
# =========================================================================
add("Aerospace Materials", 1, "Metals & Alloys", [
    "Aerospace Material Selection Criteria: High strength-to-weight ratio (specific strength $\\sigma_y / \\rho$), high specific modulus ($E / \\rho$), fracture toughness ($K_{IC}$), fatigue crack growth resistance, and corrosion resistance under extreme atmospheric conditions.",
    "Aluminum-Lithium (Al-Li) Alloys: Addition of each $1\\text{ wt}\\%$ lithium reduces density by $3\\%$ and increases elastic modulus by $6\\%$; Third-generation Al-Cu-Li alloys (AA2195, AA2050) used extensively in launch vehicles (SpaceX Falcon 9, SLS) and aircraft wing skins.",
    "Titanium Alloys in Aerospace: Polymorphism: $\\alpha$ phase (HCP, stable $<882^\\circ\\text{C}$) and $\\beta$ phase (BCC, stable $>882^\\circ\\text{C}$); $\\alpha+\\beta$ alloy Ti-6Al-4V (Grade 5) provides excellent creep resistance and strength up to $400^\\circ\\text{C}$ in gas turbine compressor disks.",
    "Nickel-Based Superalloys: Inconel 718, Waspaloy, and René 80; Microstructure consisting of coherent FCC $\\gamma'$ ($Ni_3(Al, Ti)$) and $\\gamma''$ ($Ni_3Nb$) precipitate phases resistant to dislocation shearing at temperatures $>1000^\\circ\\text{C}$.",
    "Single-Crystal Turbine Blade Technology: Directional solidification eliminating all transverse and longitudinal grain boundaries; Eliminates high-temperature grain boundary sliding and creep cavitation in modern turbofan high-pressure turbine stages.",
    "Thermal Barrier Coatings (TBC): Multi-layer system: Superalloy substrate + Metallic bond coat (MCrAlY) + Thermally grown oxide (TGO, $\\alpha-Al_2O_3$) + Yttria-stabilized zirconia (YSZ) ceramic top coat; Reduces metal temperature by $100-150^\\circ\\text{C}$.",
    "High-Strength Aerospace Steels: Maraging steels ($18\\text{ wt}\\%$ Ni, Co, Mo, Ti, $<0.03\\%\\text{ C}$) achieving yield strength $>2000\\text{ MPa}$ via intermetallic precipitation; Ultra-high strength 300M steel used for heavy landing gear assemblies.",
    "Environmental Degradation & Stress Corrosion Cracking (SCC): Synergistic failure under sustained tensile stress in corrosive marine chloride environments; Exfoliation corrosion in 7xxx series aluminum alloys and hot corrosion (sulfidation) in turbine stages.",
    "Beryllium & Magnesium Alloys: Beryllium exhibits exceptional specific modulus ($E/\\rho \\approx 6 \\times$ steel) for satellite optical benches; Magnesium alloys used in non-structural transmission casings despite flammability hazards.",
    "University Examination Strategy: Compare mechanical properties of Ti-6Al-4V vs Al 7075-T6, detail the microstructural hardening mechanism of $\\gamma'$ in nickel superalloys, and sketch the layered architecture of a Thermal Barrier Coating."
], [
    "Specific Strength Index: $\\frac{\\sigma_y}{\\rho}$ in $\\text{kN}\\cdot\\text{m/kg}$.",
    "Specific Modulus Index: $\\frac{E}{\\rho}$ (governs acoustic velocity and aeroelastic flutter stiffness).",
    "Ti-6Al-4V Phase Balance: $6\\%\\text{ Al}$ stabilizes $\\alpha$ phase; $4\\%\\text{ V}$ stabilizes $\\beta$ phase.",
    "Al-Li Density Benefit: $1\\%\\text{ Li}$ reduces density by $3\\%$ and raises modulus by $6\\%$.",
    "Superalloy $\\gamma'$ Hardening Phase: Coherent intermetallic compound $Ni_3(Al, Ti)$ (ordered $L1_2$ crystal structure).",
    "Superalloy $\\gamma''$ Hardening Phase: Body-Centered Tetragonal $Ni_3Nb$ ($D0_{22}$ structure in Inconel 718).",
    "Single Crystal Advantage: Eliminates grain boundaries entirely, preventing high-temperature creep void formation.",
    "YSZ Ceramic Composition: $7-8\\text{ wt}\\%$ $Y_2O_3$ stabilized Zirconia ($ZrO_2$) providing thermal insulation.",
    "Maraging Steel Carbon Content: Ultra-low carbon ($<0.03\\%\\text{ C}$); Hardening derives purely from intermetallic precipitation during aging.",
    "Exam Scoring Tip: Inconel 718 derives primary precipitation strength from $\\gamma''$ ($Ni_3Nb$) rather than $\\gamma'$."
])

add("Aerospace Materials", 2, "Composites", [
    "Carbon Fiber Reinforced Polymers (CFRP): Pre-impregnated tapes (prepregs) of PAN-based high-strength (T300, T800) or high-modulus (M40J) carbon fibers in toughened epoxy resin; Forms $>50\\%$ of modern airliner airframes (Boeing 787 Dreamliner, Airbus A350).",
    "Polymer Matrix Systems for Aerospace: Aerospace-grade diglycidyl ether of bisphenol A (DGEBA) and tetraglycidyl methylene dianiline (TGMDA) epoxies cured with diamines; High glass transition temperature ($T_g > 180^\\circ\\text{C}$); High-temperature bismaleimides ($T_g > 250^\\circ\\text{C}$).",
    "Anisotropic Elasticity & Classical Laminate Theory (CLT): Lamina stress-strain constitutive relation $\\{\\sigma\\} = [Q] \\{\\varepsilon\\}$; In-plane coordinate transformation matrix $[T]$; Laminate stiffness matrices $[A]$ (extensional), $[B]$ (coupling), and $[D]$ (bending).",
    "Laminate Stacking Sequence Design: Symmetric laminates eliminate extension-bending coupling ($[B] = [0]$); Balanced laminates eliminate extension-shear coupling ($A_{16} = A_{26} = 0$); Quasi-isotropic layups ($[0/\\pm 45/90]_s$) provide isotropic in-plane stiffness.",
    "Failure Criteria for Aerospace Composites: Maximum Stress, Maximum Strain, Tsai-Hill quadratic criterion, and Tsai-Wu tensor polynomial criterion $\\sum F_i \\sigma_i + \\sum F_{ij} \\sigma_i \\sigma_j \\le 1$; Hashin 3D criteria separating fiber and matrix failure modes.",
    "Damage Tolerance & Delamination Mechanics: Interlaminar fracture toughness: Mode I (opening, Double Cantilever Beam DCB test $G_{IC}$), Mode II (forward shear, End Notched Flexure ENF test $G_{IIC}$), and Mode III (anti-plane shear).",
    "Impact Resistance & Barely Visible Impact Damage (BVID): Low-velocity tool drop or bird strike causing subsurface internal delaminations without exterior surface puncture; Causes up to $60\\%$ reduction in Compression After Impact (CAI) strength.",
    "Sandwich Core Structures: Lightweight honeycomb cores (Nomex aramid paper, aluminum foil) and polymethacrylimide (PMI) Rohacell foam; High bending stiffness without added weight ($D \\propto h^3$); Debonding and core crushing failure modes.",
    "Aerospace Manufacturing Processes: Automated Tape Laying (ATL), Automated Fiber Placement (AFP), Autoclave curing under $7\\text{ bar}$ pressure and $180^\\circ\\text{C}$, and Out-of-Autoclave (OOA) vacuum bag resin infusion.",
    "University Examination Strategy: Formulate the $[A], [B], [D]$ matrices of Classical Laminate Theory, evaluate the Tsai-Hill failure criterion for an off-axis lamina, and describe the DCB Mode I test for $G_{IC}$."
], [
    "Tsai-Hill Failure Criterion: $\\frac{\\sigma_1^2}{X^2} - \\frac{\\sigma_1 \\sigma_2}{X^2} + \\frac{\\sigma_2^2}{Y^2} + \\frac{\\tau_{12}^2}{S^2} = 1$.",
    "Laminate Extensional Stiffness: $A_{ij} = \\sum_{k=1}^N (\\bar{Q}_{ij})_k (z_k - z_{k-1})$.",
    "Laminate Coupling Stiffness: $B_{ij} = \\frac{1}{2} \\sum_{k=1}^N (\\bar{Q}_{ij})_k (z_k^2 - z_{k-1}^2)$ ($B_{ij} = 0$ for symmetric layups).",
    "Laminate Bending Stiffness: $D_{ij} = \\frac{1}{3} \\sum_{k=1}^N (\\bar{Q}_{ij})_k (z_k^3 - z_{k-1}^3)$.",
    "Mode I Strain Energy Release Rate: $G_{IC} = \\frac{3 P \\delta}{2 b a}$ (DCB test formula).",
    "Quasi-Isotropic Fiber Orientation: Equal fiber proportions in $0^\\circ, +45^\\circ, -45^\\circ, 90^\\circ$ plies.",
    "Honeycomb Sandwich Bending Modulus: Increases cubically with core thickness ($I \\propto d^2 t_f$).",
    "Prepreg Storage Condition: Kept at $-18^\\circ\\text{C}$ freezer storage to prevent premature resin cross-linking.",
    "Autoclave Pressure Function: Compresses plies, eliminates volatile gas voids, and achieves $V_f \\approx 60\\%$.",
    "Exam Scoring Tip: Symmetric laminate stacking ensures the $[B]$ matrix is identically zero, preventing unwanted out-of-plane warping during temperature changes."
])

add("Aerospace Materials", 3, "Ceramics", [
    "Ultra-High Temperature Ceramics (UHTCs): Transition metal diborides, carbides, and nitrides ($ZrB_2, HfB_2, ZrC, HfC, TaC$); Melting temperatures exceeding $3000^\\circ\\text{C}$; Used for hypersonic atmospheric re-entry sharp leading edges and rocket throat inserts.",
    "Silicon Carbide (SiC) Continuous Fiber Composites: $SiC/SiC$ ceramic matrix composites manufactured by Chemical Vapor Infiltration (CVI) or Melt Infiltration (MI); Capable of uncooled operation at $1200-1300^\\circ\\text{C}$ in jet engine combustor liners and turbine shrouds.",
    "Oxidation Resistance & Passivation Mechanisms: Formation of protective self-healing silica ($SiO_2$) glass surface films in SiC and $ZrB_2-SiC$ composites; Active vs passive oxidation regimes dictated by local oxygen partial pressure $P_{O_2}$.",
    "Ceramic Radome Materials: Fused silica ($SiO_2$), pyroceram, and silicon nitride ($Si_3N_4$); High electromagnetic transparency, low dielectric constant ($\\varepsilon_r < 4$), low dielectric loss tangent ($\\tan\\delta < 0.001$), and thermal shock resistance.",
    "Thermal Shock Resistance ($R$ Parameters): Hasselman thermal shock resistance parameters: $R = \\frac{\\sigma_f (1 - \\nu)}{E \\alpha}$ (resistance to crack initiation) and $R'''' = \\frac{E \\gamma_wov}{\\sigma_f^2 (1 - \\nu)}$ (resistance to thermal crack propagation).",
    "Space Shuttle Thermal Protection Tiles: High-purity sintered porous silica fiber tiles (LI-900, $90\\%$ air void volume, density $144\\text{ kg/m}^3$); Surface coated with reaction-cured borosilicate glass (RCG) having emissivity $\\varepsilon > 0.85$.",
    "Carbon-Carbon (C/C) Composites: Carbon fibers embedded in pyrolyzed carbon matrix; Retains mechanical strength up to $2500^\\circ\\text{C}$ in non-oxidizing environments; Coated with SiC diffusion barriers for Space Shuttle wing leading edges.",
    "Environmental Barrier Coatings (EBC) for CMCs: SiC matrices degrade rapidly in combustion water vapor environments via volatile silica hydroxide formation: $SiO_2 + 2H_2O \\to Si(OH)_4(g)$; Multilayer EBC (Silicon bond coat + Mullite / Ytterbium disilicate $Yb_2Si_2O_7$) prevents surface recession.",
    "Ceramic Armor & Ballistic Protection: Boron Carbide ($B_4C$, extremely high hardness $30\\text{ GPa}$, density $2.52\\text{ g/cm}^3$) and Alumina tiles backed by Kevlar/UHMWPE; Blunts and fractures armor-piercing projectile tips upon impact.",
    "University Examination Strategy: Derive the first thermal shock resistance parameter $R = \\frac{\\sigma_f(1-\\nu)}{E\\alpha}$, explain the recession mechanism of SiC in steam, and discuss the microstructure of $ZrB_2-SiC$ hypersonic leading edges."
], [
    "Thermal Shock Parameter $R$: $R = \\frac{\\sigma_f (1 - \\nu)}{E \\alpha}$ (higher values withstand larger sudden temperature drops $\\Delta T_c$).",
    "Thermal Shock Crack Growth $R''''$: $R'''' = \\frac{E \\gamma_f}{\\sigma_f^2 (1 - \\nu)}$.",
    "UHTC Melting Benchmark: $HfC$ ($T_m = 3900^\\circ\\text{C}$), $TaC$ ($T_m = 3880^\\circ\\text{C}$).",
    "Silica Volatilization Reaction: $SiO_2(s) + 2H_2O(g) \\rightleftharpoons Si(OH)_4(g)$ (causes rapid surface recession in jet engines).",
    "Radome Permittivity Metric: Requires dielectric constant $\\varepsilon_r < 4$ and loss tangent $\\tan\\delta < 10^{-3}$.",
    "Space Shuttle Tile Void Ratio: $90\\%$ air porosity, conducting minimal heat during $1600^\\circ\\text{C}$ re-entry.",
    "Carbon-Carbon High-Temperature Limit: Strength actually increases with temperature up to $2200^\\circ\\text{C}$ in inert atmosphere.",
    "EBC Protective Top Coat: Rare-earth silicates such as Ytterbium disilicate ($Yb_2Si_2O_7$).",
    "Boron Carbide Advantage: Third hardest known material after diamond and CBN, blunting steel penetrators.",
    "Exam Scoring Tip: Active oxidation of SiC forms volatile $SiO(g)$ and erodes the ceramic, whereas passive oxidation forms protective solid $SiO_2(s)$."
])

add("Aerospace Materials", 4, "Fatigue & Fracture", [
    "Linear Elastic Fracture Mechanics (LEFM): Stress field near sharp crack tip under Mode I loading: $\\sigma_{ij} = \\frac{K_I}{\\sqrt{2\\pi r}} f_{ij}(\\theta)$; Stress intensity factor $K_I = Y \\sigma \\sqrt{\\pi a}$; Failure occurs when $K_I \\ge K_{IC}$.",
    "Plastic Zone Size Corrections: Irwin plastic zone radius at crack tip in plane stress $r_p = \\frac{1}{2\\pi}\\left(\\frac{K_I}{\\sigma_y}\\right)^2$; In plane strain, triaxial constraint reduces plastic zone to $r_p = \\frac{1}{6\\pi}\\left(\\frac{K_I}{\\sigma_y}\\right)^2$.",
    "Plane Stress vs Plane Strain Fracture Toughness: Thin sheets experience plane stress (higher apparent toughness due to shear lips); Thick plates experience plane strain constraint; Plane strain fracture toughness $K_{IC}$ is geometry-independent material constant.",
    "Minimum Thickness Specification for Valid $K_{IC}$: Specimen thickness, crack length, and ligament must satisfy $B, a, (W - a) \\ge 2.5 \\left(\\frac{K_{IC}}{\\sigma_y}\\right)^2$ according to ASTM E399 standard.",
    "Fatigue Crack Propagation & Paris Law: Stable crack growth rate governed by Paris-Erdogan power law: $\\frac{da}{dN} = C (\\Delta K)^m$, where stress intensity range $\\Delta K = K_{max} - K_{min} = Y \\Delta\\sigma \\sqrt{\\pi a}$.",
    "Three Stages of Fatigue Crack Growth: Stage I (sub-microscopic initiation along slip bands at $\\Delta K < \\Delta K_{th}$), Stage II (stable striation growth governed by Paris law), Stage III (rapid unstable acceleration to final fracture as $K_{max} \\to K_{IC}$).",
    "Fatigue Life Estimation by Integration: Number of cycles to grow crack from initial detected size $a_0$ to critical size $a_c$: $N_f = \\int_{a_0}^{a_c} \\frac{da}{C (Y \\Delta\\sigma \\sqrt{\\pi a})^m}$; For $m \\ne 2$, $N_f = \\frac{a_c^{1 - m/2} - a_0^{1 - m/2}}{C (Y \\Delta\\sigma \\sqrt{\\pi})^m (1 - m/2)}$.",
    "Stress Ratio ($R$) & Crack Closure: Stress ratio $R = \\sigma_{min} / \\sigma_{max}$; Elber's plasticity-induced crack closure: residual plastic wake behind crack tip causes crack faces to contact before minimum load is reached; Effective range $\\Delta K_{eff} = K_{max} - K_{open}$.",
    "Damage-Tolerant Aerospace Design Philosophy: Safe-life approach (retire component after calculated hours) vs Fail-safe / Damage-tolerant approach (assume initial defect of size $a_{detectable}$ exists; ensure residual strength until next inspection interval).",
    "University Examination Strategy: Calculate remaining fatigue life $N_f$ using Paris Law, check ASTM thickness criteria for valid $K_{IC}$, and compute the critical crack size $a_c$ at design stress."
], [
    "Stress Intensity Factor: $K_I = Y \\sigma \\sqrt{\\pi a}$.",
    "Irwin Plane Strain Plastic Zone: $r_p = \\frac{1}{6\\pi}\\left(\\frac{K_I}{\\sigma_y}\\right)^2$.",
    "Irwin Plane Stress Plastic Zone: $r_p = \\frac{1}{2\\pi}\\left(\\frac{K_I}{\\sigma_y}\\right)^2$.",
    "ASTM E399 Validity Criterion: $B \\ge 2.5 \\left(\\frac{K_{IC}}{\\sigma_y}\\right)^2$.",
    "Paris Crack Growth Law: $\\frac{da}{dN} = C (\\Delta K)^m$.",
    "Stress Intensity Range: $\\Delta K = Y (\\sigma_{max} - \\sigma_{min}) \\sqrt{\\pi a}$.",
    "Critical Crack Size Formula: $a_c = \\frac{1}{\\pi} \\left(\\frac{K_{IC}}{Y \\sigma_{max}}\\right)^2$.",
    "Stress Ratio Definition: $R = \\frac{\\sigma_{min}}{\\sigma_{max}} = \\frac{K_{min}}{K_{max}}$.",
    "Effective Stress Intensity: $\\Delta K_{eff} = K_{max} - K_{open}$.",
    "Exam Scoring Tip: The exponent $m$ in Paris law typically ranges between $2.5$ and $4.0$ for structural aerospace metals, and between $4$ and $10$ for ceramics and polymers."
])

add("Aerospace Materials", 5, "Material Selection", [
    "Ashby Material Selection Charts: Multi-dimensional property spaces (e.g. Young's modulus $E$ vs density $\\rho$, Strength $\\sigma_f$ vs density $\\rho$); Performance optimization indices derived from governing engineering equations.",
    "Material Performance Indices for Light Structures: Minimum mass design: Tie in tension ($M_1 = \\frac{\\sigma_y}{\\rho}$); Beam in bending stiffness ($M_2 = \\frac{E^{1/2}}{\\rho}$); Plate in bending stiffness ($M_3 = \\frac{E^{1/3}}{\\rho}$); Column buckling load ($M_4 = \\frac{E^{1/2}}{\\rho}$).",
    "Material Selection in Airframe Components: Fuselage skin (damage tolerance, fatigue crack growth, Al 2024-T3 or CFRP); Upper wing skin (compressive yield strength, buckling resistance, Al 7150-T77 or CFRP); Lower wing skin (tensile fatigue and damage tolerance, Al 2024-T351).",
    "Gas Turbine Material Distribution: Fan blades (Titanium Ti-6Al-4V or carbon fiber composites with titanium leading edge); Compressor stages (Ti alloys up to $450^\\circ\\text{C}$); Combustor and high-pressure turbine (Single-crystal Ni superalloys with TBC); Exhaust nozzle (Titanium aluminides TiAl).",
    "Spacecraft Re-Entry Materials Selection: Rocket nozzles (refractory metals, carbon-carbon composites); Nose cones (UHTCs like $ZrB_2-SiC$); Capsule heat shields (ablative PICA - Phenolic Impregnated Carbon Ablator, charring under high convective heat flux).",
    "Corrosion Prevention & Surface Engineering: Galvanic corrosion prevention between carbon fiber composites and aluminum structures (isolated via fiberglass isolation plies or titanium fasteners); Anodizing (chromic, sulfuric acid) and zinc chromate primers.",
    "Cost, Manufacturability & Buy-to-Fly Ratio: Buy-to-Fly ratio (mass of raw stock purchased divided by mass of finished flight component; e.g. machined forgings $10:1$ to $20:1$ vs near-net shape Additive Manufacturing $1.5:1$).",
    "Additive Manufacturing in Aerospace: Selective Laser Melting (SLM) and Electron Beam Melting (EBM) of Ti-6Al-4V, Scalmalloy (Al-Mg-Sc), and Inconel 718; Topological optimization and conformal internal cooling channels for rocket injectors.",
    "Lifecycle & Certification Protocols: FAA / EASA airworthiness certification; Building-block testing approach (coupons $\\to$ elements $\\to$ sub-components $\\to$ full-scale aircraft static and fatigue testing).",
    "University Examination Strategy: Derive the material performance index for a lightweight beam under bending $M = E^{1/2}/\\rho$, compare material selection between upper and lower aircraft wing surfaces, and explain the ablative mechanism of PICA."
], [
    "Tension Tie Minimum Mass Index: $M_1 = \\frac{\\sigma_y}{\\rho}$ (maximize for light tension members).",
    "Bending Beam Stiffness Index: $M_2 = \\frac{E^{1/2}}{\\rho}$ (maximize for light aerospace beams).",
    "Bending Plate Stiffness Index: $M_3 = \\frac{E^{1/3}}{\\rho}$ (maximize for aircraft wing skins).",
    "Column Buckling Resistance Index: $M_4 = \\frac{E^{1/2}}{\\rho}$.",
    "Buy-to-Fly Ratio: $BFR = \\frac{\\text{Weight of Raw Ingot Purchased}}{\\text{Weight of Finished Flight Component}}$.",
    "Galvanic Isolation Rule: Carbon fiber ($+0.2\\text{ V}$) coupled to Aluminum ($-0.8\\text{ V}$) causes aggressive galvanic corrosion; Requires dielectric glass ply barrier.",
    "Upper Wing Main Requirement: High compressive yield strength $\\sigma_y$ and modulus $E$ to resist aerodynamic compressive buckling.",
    "Lower Wing Main Requirement: High tensile fatigue life and fracture toughness $K_{IC}$ under cyclic aerodynamic lift loading.",
    "Ablative Heat Shield Mechanism: Heat absorbed by endothermic polymer pyrolysis and vapor boundary layer mass injection.",
    "Exam Scoring Tip: On log $E$ vs log $\\rho$ Ashby charts, selection lines for $M = E^{1/2}/\\rho$ have a slope of $2$, while lines for $M = E^{1/3}/\\rho$ have a slope of $3$."
])

# Save updated dataset
with open('scripts/sem3_btech_missing_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
