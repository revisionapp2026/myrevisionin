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
# 6. ENGINEERING GEOLOGY
# =========================================================================
add("Engineering Geology", 1, "Mineralogy", [
    "Definition & Physical Properties of Minerals: Naturally occurring inorganic solid with definite chemical composition and ordered atomic arrangement; Physical properties: Color, Streak (color of mineral powder on unglazed porcelain plate), Luster (metallic vs non-metallic: vitreous, adamantine, pearly, silky, earthy).",
    "Hardness & Mohs Hardness Scale: Relative resistance to scratching; 10 standard reference minerals: 1-Talc, 2-Gypsum, 3-Calcite, 4-Fluorite, 5-Apatite, 6-Orthoclase feldspar, 7-Quartz, 8-Topaz, 9-Corundum, 10-Diamond; Finger nail ($2.5$), copper coin ($3.5$), pocket knife ($5.5$), glass plate ($5.5$), steel file ($6.5$).",
    "Cleavage, Fracture & Tenacity: Cleavage (tendency to split along smooth crystallographic planes of weak atomic bonding: basal in mica, cubic in halite/galena, rhombohedral in calcite); Fracture (uneven, conchoidal in quartz, hackly); Tenacity (brittle, malleable, flexible, elastic).",
    "Specific Gravity & Density of Minerals: Measured by hydrostatic balance: $SG = \\frac{W_{\\text{air}}}{W_{\\text{air}} - W_{\\text{water}}}$; Light rock-forming minerals ($SG = 2.6 - 2.8$, quartz, feldspar) vs Ore minerals ($SG > 4.5$, galena, hematite, magnetite).",
    "Silicate Mineral Groups: Basic building block silica tetrahedron $[SiO_4]^{4-}$; Nesosilicates (isolated tetrahedra, olivine, garnet), Inosilicates (single chains: pyroxenes e.g. augite; double chains: amphiboles e.g. hornblende), Phyllosilicates (sheets: micas e.g. muscovite, biotite; clay minerals: kaolinite, montmorillonite), and Tectosilicates (3D network: quartz, plagioclase, orthoclase).",
    "Carbonate & Clay Minerals: Calcite ($CaCO_3$, effervesces vigorously with cold dilute $HCl$, rhombohedral cleavage, strong double refraction) and Dolomite ($CaMg(CO_3)_2$); Swelling smectite clay (montmorillonite) causing foundation instability.",
    "Oxide & Sulfide Ore Minerals: Hematite ($Fe_2O_3$, metallic luster, cherry-red streak), Magnetite ($Fe_3O_4$, strongly magnetic, black streak), Pyrite ($FeS_2$, fool's gold, brass-yellow, greenish-black streak), Chalcopyrite ($CuFeS_2$), and Galena ($PbS$, high density, perfect cubic cleavage).",
    "Optical Mineralogy Principles: Polarization microscope; Anisotropic vs isotropic minerals; Pleochroism (change in color under plane-polarized light upon stage rotation), Birefringence (double refraction, difference in principal refractive indices $\\Delta n = n_e - n_o$), Extinction angles (parallel, inclined, symmetrical).",
    "Feldspar Group Minerals: Most abundant rock-forming minerals in Earth's crust ($>50\\%$); Alkali feldspars (orthoclase $KAlSi_3O_8$, microcline) vs Plagioclase feldspar solid solution series (Albite $NaAlSi_3O_8$ to Anorthite $CaAl_2Si_2O_8$, polysynthetic albite twinning).",
    "University Examination Strategy: State Mohs hardness scale with chemical formulas of all 10 minerals, explain the diagnostic physical properties of quartz, calcite, and mica, and classify silicate structures based on oxygen sharing."
], [
    "Mohs Scale Order: Talc(1), Gypsum(2), Calcite(3), Fluorite(4), Apatite(5), Orthoclase(6), Quartz(7), Topaz(8), Corundum(9), Diamond(10).",
    "Streak Test Concept: Color of powdered mineral on streak plate; Much more reliable than external body color.",
    "Conchoidal Fracture: Smooth, curved, shell-like fracture surface characteristic of amorphous glass and quartz.",
    "Calcite Acid Reaction: $CaCO_3 + 2HCl \\to CaCl_2 + H_2O + CO_2\\uparrow$ (effervescence test).",
    "Specific Gravity Formula: $SG = \\frac{W_{\\text{air}}}{W_{\\text{air}} - W_{\\text{water}}}$.",
    "Silica Tetrahedral Anion: $[SiO_4]^{4-}$ unit with four shared or unshared corner oxygen atoms.",
    "Mica Basal Cleavage: Perfect one-directional sheet cleavage due to weak van der Waals bonds between silicate sheets.",
    "Pyrite Identification: Hardness $6-6.5$, brass-yellow metallic luster, and distinct greenish-black streak.",
    "Birefringence Formula: $\\Delta n = |n_1 - n_2|$, producing characteristic interference colors under crossed polars.",
    "Exam Scoring Tip: Quartz has hardness 7, no cleavage, conchoidal fracture, vitreous luster, and specific gravity 2.65."
])

add("Engineering Geology", 2, "Petrology", [
    "Rock Cycle & Genetic Classifications: Igneous rocks (crystallized from molten magma/lava), Sedimentary rocks (lithification of weathered mineral fragments or chemical precipitation), and Metamorphic rocks (solid-state recrystallization under elevated temperature and pressure).",
    "Igneous Rocks Petrology: Plutonic / Intrusive rocks (slow cooling at depth, coarse-grained phaneritic texture, e.g. granite, gabbro, diorite), Hypabyssal (medium depth, porphyritic texture, e.g. dolerite dykes), and Volcanic / Extrusive (rapid cooling on surface, fine-grained aphanitic or glassy texture, e.g. basalt, obsidian, pumice).",
    "Bowen's Reaction Series: Magmatic crystallization sequence: Discontinuous series (Olivine $\\to$ Pyroxene $\\to$ Amphibole $\\to$ Biotite) and Continuous series (Calcium-rich anorthite plagioclase $\\to$ Sodium-rich albite); Followed by Potassium feldspar, Muscovite, and Quartz at low temperatures.",
    "Forms of Igneous Intrusions: Concordant intrusions (parallel to bedding planes: sills, laccoliths, lopoliths, phacoliths) vs Discordant intrusions (cutting across bedding planes: dykes, volcanic necks, massive batholiths exceeding $100\\text{ km}^2$).",
    "Sedimentary Rocks Petrology: Weathering, erosion, transportation, deposition, compaction, and diagenetic cementation (calcite, silica, iron oxide binders); Clastic rocks (conglomerate, breccia, sandstone, shale/mudstone) vs Non-clastic rocks (limestone, coal, gypsum, rock salt).",
    "Primary Sedimentary Structures: Stratification and bedding planes, cross-bedding (indicates paleo-current direction), graded bedding (coarse grains at bottom, fine at top, turbidity currents), ripple marks, and mud cracks.",
    "Metamorphic Processes & Agents: Metamorphic agents: Heat ($200-800^\\circ\\text{C}$), Lithostatic/differential pressure, and chemically active hydrothermal fluids; Types: Thermal/contact metamorphism (adjacent to magma intrusions, hornfels), Dynamic/cataclastic (along shear faults, mylonite), and Regional metamorphism (orogenic mountain building).",
    "Metamorphic Textures & Structures: Foliation (planar alignment of platy mineral grains perpendicular to principal stress direction); Types: Slaty cleavage (slate), Schistosity (schist with visible micas), and Gneissic banding (alternating dark mafic and light felsic mineral bands in gneiss); Non-foliated: marble (from limestone), quartzite (from quartz sandstone).",
    "Engineering Quality of Rock Types: Granite, basalt, and quartzite exhibit high crushing strength ($>100\\text{ MPa}$), low porosity, and make excellent foundation rocks and aggregates; Shales, slates, and weathered schists are structurally weak and prone to sliding along cleavage planes.",
    "University Examination Strategy: Detail Bowen's Reaction Series with a clear flow diagram, compare Granite, Sandstone, and Marble across origin, texture, and engineering suitability, and differentiate dykes from sills."
], [
    "Bowen's Discontinuous Series: Olivine $\\to$ Augite (Pyroxene) $\\to$ Hornblende (Amphibole) $\\to$ Biotite.",
    "Bowen's Low-Temperature Residuals: Orthoclase feldspar, Muscovite mica, and Quartz (crystallizes last below $600^\\circ\\text{C}$).",
    "Sill Definition: Concordant, sheet-like igneous intrusion parallel to existing horizontal rock bedding.",
    "Dyke Definition: Discordant, tabular igneous intrusion cutting steeply across existing strata.",
    "Granite Composition: Felsic intrusive igneous rock composed of Quartz, Orthoclase feldspar, and Biotite/Muscovite.",
    "Basalt Composition: Mafic extrusive volcanic rock composed of Plagioclase feldspar and Pyroxene.",
    "Marble Origin: Metamorphic recrystallization of limestone ($CaCO_3$) under contact or regional metamorphism.",
    "Quartzite Origin: Metamorphic recrystallization of quartz sandstone, producing interlocking crystalline quartz.",
    "Gneissic Banding: Segregation of light quartz-feldspar bands and dark amphibole-biotite bands under high-grade metamorphism.",
    "Exam Scoring Tip: Granite possesses the highest compressive strength and durability, making it the premier choice for monumental masonry and massive dam foundations."
])

add("Engineering Geology", 3, "Structural Geology", [
    "Dip and Strike Principles: Strike (horizontal line representing intersection of inclined geological bed with horizontal plane, measured as compass bearing $0-360^\\circ$); True Dip (maximum angle of inclination of rock bed with horizontal plane, measured perpendicular to strike); Apparent Dip (inclination angle measured in any direction other than true dip, always less than true dip).",
    "Relation between True Dip and Apparent Dip: $\\tan\\alpha = \\tan\\theta \\cdot \\cos\\beta$, where $\\theta$ is true dip angle, $\\alpha$ is apparent dip angle, and $\\beta$ is horizontal angle between strike and direction of apparent dip.",
    "Rock Folds & Geometric Anatomy: Fold limbs, hinge line, axis of fold, axial plane, crest line, and trough line; Anticline (convex upward fold, oldest rocks in center/core) vs Syncline (convex downward fold, youngest rocks in core).",
    "Classification of Folds: Symmetrical fold (axial plane vertical), Asymmetrical fold (axial plane inclined), Overturned fold (both limbs dip in same direction at different angles), Recumbent fold (axial plane essentially horizontal), and Isoclinal fold (limbs dip at identical angles in same direction).",
    "Faults & Fault Mechanics: Fractures along which significant relative displacement has occurred; Hanging wall (block resting on inclined fault plane) vs Footwall (block lying underneath fault plane); Fault slip (true relative displacement vector), throw (vertical displacement), and heave (horizontal displacement).",
    "Classification of Faults by Movement: Normal fault (hanging wall moves downward relative to footwall under extensional tensional stress; creates grabens and horsts); Reverse fault (hanging wall moves upward under horizontal compressional stress); Thrust fault (low-angle reverse fault with dip $<45^\\circ$); Strike-slip / Transcurrent fault (horizontal shear displacement, e.g. San Andreas fault).",
    "Joints in Rock Masses: Fractures without perceptible relative shear displacement; Columnar jointing (hexagonal cooling contraction columns in basalt), sheet jointing (horizontal exfoliation joints in granite due to unloading), and orthogonal joint sets; Drastically reduce rock mass shear strength and increase hydraulic seepage.",
    "Unconformities in Stratigraphy: Buried surfaces of erosion or non-deposition separating younger strata from older underlying rocks; Disconformity (parallel beds separated by erosion surface), Angular unconformity (tilted older sedimentary beds overlain by horizontal younger beds), and Non-conformity (sedimentary strata deposited directly over eroded igneous/metamorphic basement).",
    "In-Situ Geological Mapping & Outcrops: Outcrop width $W = \\frac{t}{\\sin(\\theta \\pm \\sigma)}$; Three-point problems for determining strike and true dip from borehole depth data; Clinometer compass for field measurement.",
    "University Examination Strategy: Derive the relation $\\tan\\alpha = \\tan\\theta\\cos\\beta$, classify faults based on relative hanging wall movement with neat block diagrams, and explain the civil engineering implications of unconformities and joints."
], [
    "True Dip vs Apparent Dip Formula: $\\tan\\alpha = \\tan\\theta \\cos\\beta$.",
    "Strike-Dip Orthogonality: True dip direction is always oriented strictly at $90^\\circ$ to the strike line.",
    "Anticline Rule: Convex upward fold with oldest strata exposed at the central core.",
    "Syncline Rule: Concave downward trough with youngest strata preserved at the central core.",
    "Normal Fault Mechanics: Hanging wall moves downward relative to footwall under extensional tectonic stress.",
    "Reverse Fault Mechanics: Hanging wall moves upward relative to footwall under compressional tectonic stress.",
    "Thrust Fault Definition: Reverse fault having fault plane inclination $\\theta < 45^\\circ$ (often $<30^\\circ$).",
    "Fault Throw and Heave: Throw is the vertical component of displacement; Heave is the horizontal component.",
    "Angular Unconformity: Tilted or folded older strata truncated by erosion and capped by flat-lying younger strata.",
    "Exam Scoring Tip: Apparent dip is always strictly less than true dip; it becomes zero when measured directly along the strike direction."
])

add("Engineering Geology", 4, "Engineering Properties", [
    "Rock Mass vs Intact Rock: Intact rock (solid rock material free of structural discontinuities) vs Rock mass (in-situ rock volume traversed by joints, faults, bedding planes, and fissures; mechanical response dominated by discontinuities).",
    "Physical & Index Properties of Rocks: Apparent specific gravity ($SG = 2.5-3.0$), bulk density $\\rho$, dry density $\\rho_d = \\frac{\\rho}{1 + w}$, porosity $n = \\frac{V_v}{V} \\times 100\\%$ ($<1\\%$ in granite, $5-25\\%$ in sandstone), void ratio $e = \\frac{n}{1 - n}$, and water absorption.",
    "Uniaxial Compressive Strength (UCS): Standard cylindrical rock core ($L/D = 2.0 - 2.5$); $\\sigma_c = \\frac{P}{A}$; Rocks classified: Very high strength ($>200\\text{ MPa}$, basalt, quartzite), High strength ($100-200\\text{ MPa}$, fresh granite), Medium ($50-100\\text{ MPa}$), Low strength ($<25\\text{ MPa}$, shale, chalk).",
    "Tensile Strength of Rocks (Brazilian Test): Indirect diametral compression test on disc specimen of diameter $D$ and thickness $t$; Tensile splitting strength $\\sigma_t = \\frac{2P}{\\pi D t}$; Rocks are weak in tension ($\\sigma_t \\approx 5-10\\%$ of $\\sigma_c$).",
    "Shear Strength of Discontinuities (Mohr-Coulomb & Barton Models): Peak shear strength $\\tau = c + \\sigma_n \\tan\\phi$; Barton-Bandis non-linear empirical criterion for rock joints: $\\tau = \\sigma_n \\tan\\left[JRC \\log_{10}\\left(\\frac{JCS}{\\sigma_n}\\right) + \\phi_b\\right]$, where $JRC$ is joint roughness coefficient, $JCS$ is joint wall compressive strength, and $\\phi_b$ is basic friction angle.",
    "Rock Quality Designation (RQD): Modified core recovery percentage according to Deere: $RQD = \\frac{\\sum \\text{Length of sound core pieces } \\ge 10\\text{ cm}}{\\text{Total drill run length}} \\times 100\\%$; $RQD > 90\\%$ (excellent rock mass), $50-75\\%$ (fair), $<25\\%$ (very poor).",
    "Bieniawski's Rock Mass Rating (RMR System): Geomechanics classification summing six parameters: (1) Strength of intact rock; (2) RQD; (3) Spacing of discontinuities; (4) Condition of discontinuities; (5) Groundwater conditions; (6) Orientation adjustment for tunnels/dams; Total score $0-100$.",
    "Geological Considerations in Dam Foundations: Upstream dipping beds are most favorable for gravity dam stability (seepage path is elongated, resultant reservoir thrust acts perpendicular to bedding); Downstream dipping beds are dangerous (high risk of foundation sliding along bedding planes); Fault zones across dam axis require deep cut-off grouting curtains.",
    "Geological Considerations in Tunnel Alignment: Tunneling parallel to strike of steeply dipping beds causes asymmetric rock pressure; Tunneling perpendicular to strike across fold limbs is most stable; Tunneling through synclinal troughs poses severe water ingress and high hydrostatic pressures; Anticlinal crests exhibit tension fractures and roof collapse risks.",
    "University Examination Strategy: Calculate RQD from core recovery data, derive the Brazilian tensile strength formula $\\sigma_t = \\frac{2P}{\\pi D t}$, and evaluate geological suitability of upstream vs downstream dipping beds for dam foundations."
], [
    "Brazilian Tensile Strength: $\\sigma_t = \\frac{2P}{\\pi D t}$.",
    "Rock Quality Designation (RQD): $RQD = \\frac{\\sum L_{i (\\ge 10\\text{ cm})}}{L_{\\text{total}}} \\times 100\\%$.",
    "RMR Classification Range: Class I: Very Good ($81-100$); Class II: Good ($61-80$); Class III: Fair ($41-60$); Class IV: Poor ($21-40$); Class V: Very Poor ($<20$).",
    "Barton's Shear Strength Criterion: $\\tau = \\sigma_n \\tan\\left[JRC \\log_{10}\\left(\\frac{JCS}{\\sigma_n}\\right) + \\phi_b\\right]$.",
    "Rock Tensile-to-Compressive Ratio: Tensile strength is typically only $5\\%$ to $10\\%$ of uniaxial compressive strength.",
    "Standard UCS Core Ratio: Length-to-diameter ratio $L/D = 2.0$ to $2.5$.",
    "Ideal Dam Foundation Strata: Unweathered massive igneous rocks or horizontal/upstream-dipping sound sedimentary beds.",
    "Dangerous Dam Foundation Condition: Strata dipping downstream with strike parallel to dam axis (extreme sliding risk).",
    "Tunneling Hazard in Syncline: Acts as natural underground water reservoir causing catastrophic flooding during excavation.",
    "Exam Scoring Tip: In RQD calculation, only intact core pieces that are hard, sound, and at least $10\\text{ cm}$ ($100\\text{ mm}$) long are included in the numerator."
])

add("Engineering Geology", 5, "Geological Hazards", [
    "Earthquakes & Seismic Wave Physics: Sudden release of elastic strain energy along faults; Focus / Hypocenter (initial rupture point inside crust) vs Epicenter (point on Earth surface vertically above focus); Body waves: P-waves (primary, compressional longitudinal, fastest $v_p = \\sqrt{\\frac{K + 4/3 G}{\\rho}}$, propagate through solids and liquids) and S-waves (secondary, shear transverse, $v_s = \\sqrt{G/\\rho}$, cannot pass through liquid outer core).",
    "Surface Seismic Waves: Rayleigh waves (retrograde elliptical ground roll motion in vertical plane, causes catastrophic structural shaking) and Love waves (horizontal transverse surface shear waves, fastest surface wave).",
    "Earthquake Magnitude vs Intensity: Richter Magnitude Scale ($M_L = \\log_{10} A - \\log_{10} A_0$, logarithmic energy release: each unit increase represents $\\approx 31.6 \\times$ more energy); Moment Magnitude Scale ($M_w = \\frac{2}{3}\\log_{10} M_0 - 6.0$, where $M_0 = \\mu A D$ is seismic moment); Modified Mercalli Intensity Scale (MMI, qualitative observation of damage from I to XII).",
    "Soil Liquefaction Phenomenon: Saturated loose sandy and silty soils subjected to cyclic earthquake shear vibrations; Excess pore water pressure rises to equal overburden pressure: $\\sigma' = \\sigma - u = 0$; Soil loses all shear strength and behaves as viscous liquid, causing building tipping and sand boils.",
    "Landslides & Mass Wasting Classifications: Downslope movement of soil and rock under gravity; Classifications: Falls (rockfall from cliffs), Topples, Slides (rotational slump along curved slip surface in cohesive soil; translational slide along planar discontinuity in rock), and Flows (debris flows, mudflows, solifluction).",
    "Factor of Safety of Slopes: Ratio of resisting shear strength to driving shear stress: $FOS = \\frac{\\tau_f}{\\tau} = \\frac{c' + (\\gamma z \\cos^2\\beta - u)\\tan\\phi'}{\\gamma z \\sin\\beta \\cos\\beta}$; Slope fails when $FOS < 1.0$; Reduced by water saturation, rising pore pressure $u$, toe excavation, and seismic acceleration.",
    "Landslide Stabilization & Mitigation Measures: Surface drainage diversion ditches, subsurface perforated drain pipes (reduces pore water pressure $u$), flattening slope angle, benching, retaining walls with weep holes, rock bolting and prestressed ground anchors, shotcreting with wire mesh, and vegetation bio-engineering.",
    "Volcanic Hazards: Pyroclastic flows (high-speed superheated incandescent avalanches of gas and ash $>800^\\circ\\text{C}$), Lahars (volcanic mudflows of ash mixed with rain or melted snow), Lava flows, toxic gas emissions ($SO_2, CO_2$), and airborne tephra ash fall.",
    "Tsunamis & Coastal Hazards: Long-wavelength shallow-water ocean gravity waves generated by subsea megathrust earthquakes or submarine landslides; Propagation speed $v = \\sqrt{g d}$; Wavelength $>100\\text{ km}$; Open ocean amplitude $<1\\text{ m}$, but shoaling effect compresses wavelength and amplifies wave height to $>20-30\\text{ m}$ at shorelines.",
    "University Examination Strategy: Derive the seismic wave velocities $v_p$ and $v_s$, calculate the Factor of Safety for an infinite planar rock slope, and detail structural and drainage measures to mitigate landslides."
], [
    "P-Wave Velocity Formula: $v_p = \\sqrt{\\frac{K + \\frac{4}{3}G}{\\rho}}$.",
    "S-Wave Velocity Formula: $v_s = \\sqrt{\\frac{G}{\\rho}}$ (transverse shear wave; $v_s = 0$ in fluids where $G = 0$).",
    "Wave Speed Ratio in Rocks: $\\frac{v_p}{v_s} = \\sqrt{\\frac{2(1 - \\nu)}{1 - 2\\nu}} \\approx 1.73$ for Poisson's ratio $\\nu = 0.25$.",
    "Seismic Moment Formula: $M_0 = \\mu A D$ (shear modulus $\\times$ fault rupture area $\\times$ average slip).",
    "Earthquake Energy Scaling: $\\log_{10} E = 4.8 + 1.5 M$ (each unit increase multiplies energy by $10^{1.5} \\approx 31.6$).",
    "Infinite Slope Factor of Safety: $FOS = \\frac{c' + (\\sigma_n - u)\\tan\\phi'}{\\tau_{\\text{driving}}}$.",
    "Effective Stress Failure: Soil liquefies when pore pressure rises to equal total stress ($u = \\sigma \\implies \\sigma' = 0$).",
    "Tsunami Wave Velocity: $v = \\sqrt{g d}$ (behaves as shallow water wave across deep oceans).",
    "Translational Rock Slide Trigger: Occurs whenever rock joint daylight dip angle is less than slope face angle but greater than friction angle ($\\beta_{\\text{slope}} > \\theta_{\\text{joint}} > \\phi$).",
    "Exam Scoring Tip: P-waves arrive first on a seismograph because their velocity is nearly double that of S-waves."
])

# Save updated dataset
with open('scripts/sem3_btech_missing_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
