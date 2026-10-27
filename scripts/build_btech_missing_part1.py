import json

# Dictionary of 12 B.Tech subjects, 5 units each, 10 highlights + 10 bookmarks
data = {}

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    data[(sub, num)] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 1. MATERIAL SCIENCE
# =========================================================================
add("Material Science", 1, "Crystal Structure", [
    "Crystallographic Space Lattices: 14 Bravais lattices grouped into 7 systems; Characterized by axial lengths $a, b, c$ and angles $\\alpha, \\beta, \\gamma$; Volume of unit cell $V = a b c \\sqrt{1 - \\cos^2\\alpha - \\cos^2\\beta - \\cos^2\\gamma + 2\\cos\\alpha\\cos\\beta\\cos\\gamma}$.",
    "Atomic Packing in Metallic Lattices: Simple cubic (APF = 0.52), Body-Centered Cubic (BCC, coordination number 8, $\\text{APF} = 0.68, a = 4R/\\sqrt{3}$), and Face-Centered Cubic (FCC, coordination 12, $\\text{APF} = 0.74, a = 2R\\sqrt{2}$).",
    "Hexagonal Close-Packed Structure: HCP lattice exhibits stacking sequence $ABABAB...$ with coordination number 12 and $\\text{APF} = 0.74$; Ideal axial ratio $c/a = \\sqrt{8/3} \\approx 1.633$.",
    "Miller Indices of Planes & Directions: Directions $[uvw]$ represent smallest integer vector components; Planes $(hkl)$ represent reciprocal axial intercepts; Interplanar spacing for cubic systems $d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$.",
    "Linear and Planar Densities: Linear atomic density $LD = \\frac{N_L}{L}$; Planar atomic density $PD = \\frac{N_A}{A}$; In FCC, $[110]$ direction and $(111)$ planes have maximum atomic packing density.",
    "Bragg's Law of X-Ray Diffraction: Constructive interference condition $n\\lambda = 2d_{hkl}\\sin\\theta$; Extinction rules: BCC reflects only when $h+k+l$ is even; FCC reflects only when $h, k, l$ are all unmixed.",
    "Point Defects in Crystals: Thermal equilibrium vacancy concentration $N_v = N \\exp(-Q_v / k_B T)$; Interstitial atoms, Schottky defects (neutral cation-anion vacancy pairs), and Frenkel defects.",
    "Dislocations in Plastic Slip: Edge dislocations (Burgers vector $\\vec{b} \\perp \\vec{t}$) and screw dislocations ($\\vec{b} \\parallel \\vec{t}$); Critical resolved shear stress $\\tau_{crss} = \\sigma_y \\cos\\phi \\cos\\lambda$ (Schmid's law).",
    "Planar & Interfacial Defects: Twin boundaries, low-angle grain boundaries, stacking faults in FCC ($ABCABABC$), and high-angle grain boundaries exhibiting high interfacial energy.",
    "University Examination Strategy: State definitions of unit cell, derive APF for BCC and FCC crystals from atomic radius $R$, calculate Miller indices, and index powder diffraction peaks."
], [
    "Atomic Packing Factor: $\\text{APF} = \\frac{N_{\\text{atoms}} \\cdot (4/3)\\pi R^3}{V_{\\text{cell}}}$.",
    "FCC Cell Parameter: $a = 2R\\sqrt{2}$, with $\\text{APF} = 0.74$.",
    "BCC Cell Parameter: $a = \\frac{4R}{\\sqrt{3}}$, with $\\text{APF} = 0.68$.",
    "Cubic Plane Spacing: $d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$.",
    "Bragg's Law: $n\\lambda = 2d\\sin\\theta$.",
    "BCC Reflection Rule: Reflected iff $h + k + l = 2n$ (even integer).",
    "FCC Reflection Rule: Reflected iff $h, k, l$ are all odd or all even.",
    "Schmid's Law: $\\tau_{rss} = \\sigma \\cos\\phi \\cos\\lambda$, yielding slip when $\\tau_{rss} \\ge \\tau_{crss}$.",
    "Thermal Vacancy Formula: $N_v = N e^{-Q_v / k_B T}$.",
    "Exam Scoring Tip: The Schmid factor $m = \\cos\\phi \\cos\\lambda$ reaches its theoretical maximum value of $0.5$ when $\\phi = \\lambda = 45^\\circ$."
])

add("Material Science", 2, "Metals & Alloys", [
    "Hume-Rothery Rules for Solid Solubility: (1) Crystal structure must match; (2) Atomic radii difference $<15\\%$; (3) Similar electronegativities; (4) Valency factor (metal dissolves solute of higher valency more readily).",
    "Substitutional vs Interstitial Solid Solutions: Substitutional (solute replaces solvent atoms in lattice, e.g. Cu-Ni); Interstitial (small solute atoms like C, N, H fit into interstitial voids of transition metals).",
    "Gibbs Phase Rule in Binary Systems: Degrees of freedom $F = C - P + 1$ at constant atmospheric pressure; Zero degrees of freedom ($F = 0$) at invariant eutectic, eutectoid, and peritectic points.",
    "Iron-Iron Carbide ($Fe-Fe_3C$) Phase Diagram: Allotropic forms: $\\alpha$-ferrite (BCC, up to $912^\\circ\\text{C}$, max $0.022\\%\\text{ C}$), $\\gamma$-austenite (FCC, $912-1394^\\circ\\text{C}$, max $2.14\\%\\text{ C}$), $\\delta$-ferrite (BCC), and cementite ($Fe_3C$, $6.67\\%\\text{ C}$).",
    "Invariant Reactions in Steel: Eutectic at $1147^\\circ\\text{C}$ ($4.3\\%\\text{ C}$, liquid to ledeburite); Eutectoid at $727^\\circ\\text{C}$ ($0.76\\%\\text{ C}$, $\\gamma \\to \\alpha + Fe_3C$ pearlite); Peritectic at $1495^\\circ\\text{C}$ ($0.17\\%\\text{ C}$).",
    "Lever Rule Phase Quantification: Mass fraction of liquid $W_L = \\frac{C_s - C_0}{C_s - C_L}$ and mass fraction of solid $W_s = \\frac{C_0 - C_L}{C_s - C_L}$ across two-phase tie-lines.",
    "Strengthening by Solid Solution: Solute atoms create local lattice strain fields (compressive or tensile) that pin dislocations, increasing yield strength $\\Delta\\sigma \\propto \\sqrt{c}$.",
    "Precipitation / Age Hardening: Quenching supersaturated solid solution followed by controlled reheating; Coherent precipitate clusters (Guinier-Preston zones) pin dislocation glide paths.",
    "Grain Boundary Strengthening (Hall-Petch): Grain boundaries act as dislocation barriers; Yield strength increases inversely with square root of grain diameter: $\\sigma_y = \\sigma_0 + k_y d^{-1/2}$.",
    "University Examination Strategy: Draw the complete $Fe-Fe_3C$ diagram with exact temperatures and compositions, apply the lever rule at $0.4\\%\\text{ C}$, and state Hume-Rothery rules."
], [
    "Hume-Rothery Size Factor: $\\Delta R = \\frac{|R_{\\text{solute}} - R_{\\text{solvent}}|}{R_{\\text{solvent}}} \\times 100 < 15\\%$.",
    "Condensed Phase Rule: $F = C - P + 1$.",
    "Lever Rule Liquid Fraction: $W_L = \\frac{C_\\alpha - C_0}{C_\\alpha - C_L}$.",
    "Eutectoid Pearlite Reaction: $\\gamma(0.76\\%\\text{ C}) \\rightleftharpoons \\alpha(0.022\\%\\text{ C}) + Fe_3C(6.67\\%\\text{ C})$ at $727^\\circ\\text{C}$.",
    "Hall-Petch Equation: $\\sigma_y = \\sigma_0 + k_y d^{-1/2}$.",
    "Cementite Stoichiometry: $Fe_3C$ contains strictly $6.67\\%\\text{ C}$ by weight.",
    "Austenite Maximum Carbon: $2.14\\%\\text{ C}$ at $1147^\\circ\\text{C}$.",
    "Ferrite Maximum Carbon: $0.022\\%\\text{ C}$ at $727^\\circ\\text{C}$.",
    "Strain Hardening Index: True stress $\\sigma_t = K \\varepsilon_t^n$ where $n$ is strain hardening exponent.",
    "Exam Scoring Tip: Eutectic transforms liquid into two solids simultaneously, while eutectoid transforms one solid into two different solid phases."
])

add("Material Science", 3, "Ceramics", [
    "Ceramic Crystal Structures: Governed by charge neutrality and radius ratio $r_{\\text{cation}}/r_{\\text{anion}}$; Rock salt ($NaCl$, octahedral CN 6), Cesium chloride ($CsCl$, cubic CN 8), Zinc blende ($ZnS$, tetrahedral CN 4), and Fluorite ($CaF_2$).",
    "Silicate Ceramic Frameworks: Basic structural unit is silica tetrahedron $[SiO_4]^{4-}$; Island silicates (orthosilicates), ring/chain silicates (pyroxenes), sheet silicates (clays, kaolinite), and 3D network silicates (quartz, feldspar).",
    "Defects in Ceramic Crystals: Schottky defects (simultaneous stoichiometric anion and cation vacancies) and Frenkel defects (cation vacancy and displaced interstitial cation); Non-stoichiometric defect structures in $Fe_{1-x}O$.",
    "Mechanical Brittleness of Ceramics: High covalent and ionic bond directional stiffness; Lack of dislocation mobility at room temperature; Theoretical tensile strength $\\sigma_{th} \\approx E/10$, but actual strength limited by Griffith microcracks.",
    "Griffith's Theory of Brittle Fracture: Fracture stress $\\sigma_f = \\sqrt{\\frac{2E\\gamma_s}{\\pi a}}$ for through-thickness crack of length $2a$, where $\\gamma_s$ is surface energy per unit area.",
    "Stress Intensity Factor & Fracture Toughness: Critical stress intensity factor $K_{IC} = Y \\sigma \\sqrt{\\pi a}$; Plane-strain fracture toughness $K_{IC}$ values: engineering ceramics ($1-5\\text{ MPa}\\sqrt{\\text{m}}$) vs structural metals ($50-150\\text{ MPa}\\sqrt{\\text{m}}$).",
    "Transformation Toughening in Zirconia ($ZrO_2$): Partially stabilized zirconia (PSZ); Metastable tetragonal precipitates transform to monoclinic phase ($t \\to m$) under crack-tip tensile stress, producing $3-5\\%$ volume dilation that clamps crack tip shut.",
    "Traditional vs Advanced Ceramics: Traditional (clay-based whiteware, porcelain, bricks, alumina refractories) vs Advanced technical ceramics ($Al_2O_3, SiC, Si_3N_4$, piezoelectric lead zirconate titanate PZT).",
    "Ceramic Processing & Sintering: Powder preparation, green body compaction (uniaxial pressing, cold isostatic pressing CIP), and elevated-temperature solid-state sintering; Solid-state diffusion reduces surface free energy and eliminates pore volume.",
    "University Examination Strategy: Calculate stable coordination numbers from radius ratio $r_c/r_a$, derive Griffith's fracture stress formula, and explain transformation toughening in partially stabilized zirconia."
], [
    "Octahedral Coordination Bound: $0.414 \\le r_{\\text{cation}} / r_{\\text{anion}} < 0.732$ (e.g. $NaCl$).",
    "Cubic Coordination Bound: $0.732 \\le r_{\\text{cation}} / r_{\\text{anion}} < 1.0$ (e.g. $CsCl$).",
    "Tetrahedral Coordination Bound: $0.225 \\le r_{\\text{cation}} / r_{\\text{anion}} < 0.414$ (e.g. $ZnS$).",
    "Griffith's Fracture Formula: $\\sigma_f = \\sqrt{\\frac{2E\\gamma_s}{\\pi a}}$.",
    "Fracture Toughness Equation: $K_{IC} = Y \\sigma_f \\sqrt{\\pi a}$.",
    "Silica Tetrahedral Anion: $[SiO_4]^{4-}$ with silicon in tetrahedral coordination.",
    "Schottky Defect Definition: Pair of cation and anion vacancies preserving electroneutrality.",
    "Frenkel Defect Definition: Cation vacancy paired with nearby interstitial cation.",
    "Zirconia Volume Expansion: $t \\to m$ martensitic transformation causes $3-5\\%$ volumetric expansion.",
    "Exam Scoring Tip: When evaluating radius ratio, always place the smaller cation radius in the numerator ($r_{\\text{cation}} / r_{\\text{anion}}$)."
])

add("Material Science", 4, "Polymers", [
    "Polymerization Chemistry: Addition (chain-growth) polymerization (initiation, propagation, termination without by-products, e.g. polyethylene) vs Condensation (step-growth) polymerization (eliminates small molecules like $H_2O, HCl$, e.g. Nylon, PET).",
    "Molecular Weight Distributions: Number-average molecular weight $\\bar{M}_n = \\sum x_i M_i = \\frac{\\sum N_i M_i}{\\sum N_i}$; Weight-average molecular weight $\\bar{M}_w = \\sum w_i M_i = \\frac{\\sum N_i M_i^2}{\\sum N_i M_i}$; Degree of polymerization $DP = \\bar{M}_n / m_0$.",
    "Polydispersity Index (PDI): Ratio $PDI = \\bar{M}_w / \\bar{M}_n \\ge 1.0$; $PDI = 1.0$ indicates monodisperse polymer (e.g. natural proteins), while synthetic polymers exhibit $PDI \\approx 1.5 - 5.0$.",
    "Polymer Architecture & Tacticity: Linear chains (high density HDPE), branched chains (low density LDPE), cross-linked networks (elastomers), and 3D network polymers (epoxies); Tacticity: isotactic (all pendants on one side), syndiotactic (alternating), atactic (random).",
    "Thermoplastics vs Thermosetting Polymers: Thermoplastics (linear/branched, secondary van der Waals intermolecular bonds, soften reversibly with heat, recyclable) vs Thermosets (covalently cross-linked networks, degrade irreversibly, rigid).",
    "Glass Transition Temperature ($T_g$): Reversible transition between hard, brittle glassy state and soft, flexible rubbery state; Free volume theory; $T_g$ increased by bulky side groups, polar interactions, and high chain cross-linking.",
    "Viscoelasticity in Polymers: Time-dependent strain response exhibiting both viscous fluid and elastic solid behavior; Maxwell model (spring and dashpot in series, stress relaxation $\\sigma(t) = \\sigma_0 e^{-t/\\tau}$) vs Kelvin-Voigt model (spring and dashpot in parallel, creep $\\varepsilon(t) = \\frac{\\sigma_0}{E}(1 - e^{-t/\\tau})$).",
    "Mechanical Properties of Polymers: S-shaped stress-strain curves; Elastic modulus ($0.1-4\\text{ GPa}$), cold drawing, neck propagation, and strain-induced chain alignment; Crazing phenomenon prior to brittle fracture.",
    "Elastomers & Rubber Elasticity: Cross-linked coiled chains; Low initial modulus, high recoverable stretch ($>500\\%$); Elastic retractive force is entropic in origin: $f = -T (\\partial S / \\partial L)_T$; Vulcanization with sulfur cross-links.",
    "University Examination Strategy: Differentiate addition vs condensation polymerization, derive Maxwell and Voigt viscoelastic differential equations, and calculate $\\bar{M}_n, \\bar{M}_w$, and $PDI$."
], [
    "Number-Average Weight: $\\bar{M}_n = \\frac{\\sum N_i M_i}{\\sum N_i}$.",
    "Weight-Average Weight: $\\bar{M}_w = \\frac{\\sum N_i M_i^2}{\\sum N_i M_i}$.",
    "Polydispersity Index: $PDI = \\frac{\\bar{M}_w}{\\bar{M}_n} \\ge 1$.",
    "Degree of Polymerization: $DP = \\frac{\\bar{M}_n}{m_0}$ ($m_0$ is monomer molecular weight).",
    "Maxwell Stress Relaxation: $\\sigma(t) = \\sigma_0 \\exp(-t / \\tau)$, where relaxation time $\\tau = \\eta / E$.",
    "Voigt Creep Strain: $\\varepsilon(t) = \\frac{\\sigma_0}{E} [1 - \\exp(-t / \\tau)]$, where retardation time $\\tau = \\eta / E$.",
    "Entropic Rubber Force: $f = -T \\left(\\frac{\\partial S}{\\partial L}\\right)_T = C T \\left(\\lambda - \\frac{1}{\\lambda^2}\\right)$.",
    "Isotactic Configuration: All substituent groups oriented on the identical side of the polymer backbone.",
    "Glass Transition Marker: Step change in specific heat $C_p$ and thermal expansion coefficient $\\alpha$ at $T_g$.",
    "Exam Scoring Tip: For all polydisperse polymers, $\\bar{M}_w$ is strictly greater than $\\bar{M}_n$ because heavier chains contribute proportionally more to weight fractions."
])

add("Material Science", 5, "Composites", [
    "Classification of Composite Materials: Continuous fiber-reinforced, short/chopped fiber, particulate composites, and laminar structural composites; Matrix categories: Polymer Matrix (PMC), Metal Matrix (MMC), Ceramic Matrix (CMC), and Carbon-Carbon composites.",
    "Reinforcement Fibers & Properties: Carbon fibers (high modulus PAN-based and pitch-based), E-glass and S-glass fibers (high strength, low cost), Aramid / Kevlar fibers (high toughness and impact absorption), and Boron monofilaments.",
    "Rule of Mixtures for Longitudinal Modulus: Iso-strain condition ($\\\\varepsilon_c = \\\\varepsilon_f = \\\\varepsilon_m$); Longitudinal composite elastic modulus $E_{cl} = E_f V_f + E_m V_m$, where $V_f + V_m = 1$.",
    "Inverse Rule of Mixtures for Transverse Modulus: Iso-stress condition ($\\\\sigma_c = \\\\sigma_f = \\\\sigma_m$); Transverse modulus $\\frac{1}{E_{ct}} = \\frac{V_f}{E_f} + \\frac{V_m}{E_m} \\implies E_{ct} = \\frac{E_f E_m}{V_f E_m + V_m E_f}$.",
    "Critical Fiber Length ($l_c$): Minimum fiber length required for fiber to attain its ultimate tensile strength $\\sigma_f^*$ under interfacial shear stress $\\tau_c$: $l_c = \\frac{\\sigma_f^* d}{2\\tau_c}$; Fibers with $l > 15 l_c$ act as continuous fibers.",
    "Stress Transfer at Fiber-Matrix Interface: Shear-lag model (Cox model); Tensile stress builds up from zero at fiber ends to peak at center; Interfacial shear stress $\\tau$ peaks at fiber tips and decays toward center.",
    "Manufacturing Methods for Polymer Composites: Hand lay-up, spray lay-up, vacuum bag autocalve molding, resin transfer molding (RTM), filament winding (for pressure vessels and pipes), and pultrusion (constant cross-section profiles).",
    "Ceramic Matrix Composites (CMC): Designed to enhance fracture toughness rather than strength; Crack deflection, fiber debonding, and fiber pull-out dissipate mechanical energy, increasing $K_{IC}$ up to $25\\text{ MPa}\\sqrt{\\text{m}}$.",
    "Laminated Composites & Laminate Theory: Symmetrical and balanced cross-ply ($[0/90]_s$) and quasi-isotropic ($[0/\\pm 45/90]_s$) layups; Eliminates coupling between in-plane stretching and out-of-plane bending/twisting.",
    "University Examination Strategy: Derive the longitudinal and transverse Rule of Mixtures expressions from first principles, derive the critical fiber length formula $l_c = \\frac{\\sigma_f^* d}{2\\tau_c}$, and classify composites by matrix."
], [
    "Longitudinal Modulus (Iso-Strain): $E_{cl} = E_f V_f + E_m V_m$.",
    "Transverse Modulus (Iso-Stress): $E_{ct} = \\frac{E_f E_m}{V_f E_m + V_m E_f}$.",
    "Critical Fiber Length: $l_c = \\frac{\\sigma_f^* d}{2\\tau_c}$.",
    "Fiber Volume Fraction: $V_f = \\frac{v_f}{v_f + v_m} = \\frac{w_f / \\rho_f}{w_f / \\rho_f + w_m / \\rho_m}$.",
    "Continuous Fiber Criterion: Fiber length $l \\ge 15 l_c$.",
    "Longitudinal Composite Tensile Strength: $\\sigma_{cu}^* = \\sigma_f^* V_f + \\sigma_m' (1 - V_f)$ (where $\\sigma_m'$ is matrix stress at fiber failure strain).",
    "Filament Winding Angle: Optimum hoop-to-axial pressure vessel winding angle $\\alpha = \\arctan(\\sqrt{2}) \\approx 54.7^\\circ$.",
    "Quasi-Isotropic Layup: Equal elastic properties in all in-plane directions (e.g. $[0/\\pm 45/90]_s$).",
    "PMC Matrix Systems: Epoxies (aerospace high-performance), Polyesters (marine/automotive commercial), and Bismaleimides (high temperature).",
    "Exam Scoring Tip: The longitudinal modulus is always dominated by the high fiber modulus ($E_{cl} \\approx E_f V_f$), whereas transverse modulus is dominated by the compliant matrix."
])

# Save partial build to file
with open('scripts/sem3_btech_missing_data.json', 'w', encoding='utf-8') as f:
    # Convert tuple keys to string for JSON serialization
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Added {len(data)} units so far!")
