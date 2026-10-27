"""
Dedicated Unit Data for B.Tech Semester 3: Missing Core Subjects.
All units have authentic 10 Highlights + 10 Bookmarks with KaTeX formulas.
"""

btech_missing_data = {
    ('Material Science', 1): {
        "title": "Crystal Structure",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Material Science', 2): {
        "title": "Metals & Alloys",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Material Science', 3): {
        "title": "Ceramics",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Material Science', 4): {
        "title": "Polymers",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Material Science', 5): {
        "title": "Composites",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Aerospace Materials', 1): {
        "title": "Metals & Alloys",
        "highlights": [
                "Aerospace Material Selection Criteria: High strength-to-weight ratio (specific strength $\\sigma_y / \\rho$), high specific modulus ($E / \\rho$), fracture toughness ($K_{IC}$), fatigue crack growth resistance, and corrosion resistance under extreme atmospheric conditions.",
                "Aluminum-Lithium (Al-Li) Alloys: Addition of each $1\\text{ wt}\\%$ lithium reduces density by $3\\%$ and increases elastic modulus by $6\\%$; Third-generation Al-Cu-Li alloys (AA2195, AA2050) used extensively in launch vehicles (SpaceX Falcon 9, SLS) and aircraft wing skins.",
                "Titanium Alloys in Aerospace: Polymorphism: $\\alpha$ phase (HCP, stable $<882^\\circ\\text{C}$) and $\\beta$ phase (BCC, stable $>882^\\circ\\text{C}$); $\\alpha+\\beta$ alloy Ti-6Al-4V (Grade 5) provides excellent creep resistance and strength up to $400^\\circ\\text{C}$ in gas turbine compressor disks.",
                "Nickel-Based Superalloys: Inconel 718, Waspaloy, and Ren\u00e9 80; Microstructure consisting of coherent FCC $\\gamma'$ ($Ni_3(Al, Ti)$) and $\\gamma''$ ($Ni_3Nb$) precipitate phases resistant to dislocation shearing at temperatures $>1000^\\circ\\text{C}$.",
                "Single-Crystal Turbine Blade Technology: Directional solidification eliminating all transverse and longitudinal grain boundaries; Eliminates high-temperature grain boundary sliding and creep cavitation in modern turbofan high-pressure turbine stages.",
                "Thermal Barrier Coatings (TBC): Multi-layer system: Superalloy substrate + Metallic bond coat (MCrAlY) + Thermally grown oxide (TGO, $\\alpha-Al_2O_3$) + Yttria-stabilized zirconia (YSZ) ceramic top coat; Reduces metal temperature by $100-150^\\circ\\text{C}$.",
                "High-Strength Aerospace Steels: Maraging steels ($18\\text{ wt}\\%$ Ni, Co, Mo, Ti, $<0.03\\%\\text{ C}$) achieving yield strength $>2000\\text{ MPa}$ via intermetallic precipitation; Ultra-high strength 300M steel used for heavy landing gear assemblies.",
                "Environmental Degradation & Stress Corrosion Cracking (SCC): Synergistic failure under sustained tensile stress in corrosive marine chloride environments; Exfoliation corrosion in 7xxx series aluminum alloys and hot corrosion (sulfidation) in turbine stages.",
                "Beryllium & Magnesium Alloys: Beryllium exhibits exceptional specific modulus ($E/\\rho \\approx 6 \\times$ steel) for satellite optical benches; Magnesium alloys used in non-structural transmission casings despite flammability hazards.",
                "University Examination Strategy: Compare mechanical properties of Ti-6Al-4V vs Al 7075-T6, detail the microstructural hardening mechanism of $\\gamma'$ in nickel superalloys, and sketch the layered architecture of a Thermal Barrier Coating."
        ],
        "keyPoints": [
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
        ]
},
    ('Aerospace Materials', 2): {
        "title": "Composites",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Aerospace Materials', 3): {
        "title": "Ceramics",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Aerospace Materials', 4): {
        "title": "Fatigue & Fracture",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Aerospace Materials', 5): {
        "title": "Material Selection",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Manufacturing Technology — I', 1): {
        "title": "Casting Processes",
        "highlights": [
                "Sand Casting Fundamentals: Pouring molten metal into refractory sand mold cavity; Pattern allowances: shrinkage allowance ($1-2\\%$ for steel/aluminum), draft allowance ($1-2^\\circ$), machining allowance, distortion allowance, and shake allowance.",
                "Gating System Design & Hydraulics: Pouring basin, sprue, runner, and ingate; Choke area $A_c = \\frac{m}{\\rho t_p c_d \\sqrt{2 g h}}$; Pressurized gating ($A_s > A_r > A_g$, maintains full liquid stream, prevents aspiration) vs Unpressurized gating ($A_s < A_r < A_g$, minimizes turbulence and erosion).",
                "Chvorinov's Rule for Solidification: Total solidification time $t_s = B \\left(\\frac{V}{A}\\right)^n$, where $V/A$ is modulus (volume-to-surface-area ratio), $B$ is mold constant, and exponent $n \\approx 2.0$.",
                "Riser Design & Placement (Caine's & Modulus Methods): Riser must solidify after the casting ($t_{s,\\text{riser}} > t_{s,\\text{casting}} \\implies (V/A)_{riser} \\ge 1.2 (V/A)_{casting}$); Feeding distance of risers; Use of insulating sleeves and exothermic toppings.",
                "Specialized Casting Techniques: Shell molding (phenolic resin-bonded sand, high dimensional accuracy), Investment / Lost-Wax casting (ceramic slurry shell around wax pattern, net-shape gas turbine blades), and Die casting (high-pressure hot/cold chamber die casting).",
                "Centrifugal Casting: True centrifugal (rotating mold around horizontal/vertical axis, pipes without cores; G-factor $G = \\frac{\\omega^2 r}{g} \\approx 60-80$), Semi-centrifugal (wheels/pulleys), and Centrifuging.",
                "Casting Defects & Prevention: Gas porosity (pinholes, blowholes due to trapped air/steam, prevented by venting and dry sand), Shrinkage cavities (improper risering), Hot tears (restrained contraction at sharp corners), Cold shuts and Misruns (insufficient pouring temperature or fluidity).",
                "Melting Furnaces in Foundries: Cupola furnace (coke-fired for gray iron), Electric arc furnace (EAF, scrap steel melting), and Coreless induction furnace (precise metallurgical control and clean melting for non-ferrous alloys).",
                "Molding Sand Testing: Permeability test (gas venting rate under pressure), green compressive strength, dry strength, moisture content ($3-8\\%$), and clay content (determined by AFS clay wash test).",
                "University Examination Strategy: Derive Chvorinov's solidification equation, calculate choke area for a given mold filling time, and draw comparative sketches of pressurized vs unpressurized gating systems."
        ],
        "keyPoints": [
                "Chvorinov's Solidification Law: $t_s = B \\left(\\frac{V}{A}\\right)^2$.",
                "Choke Area Formula: $A_c = \\frac{W}{\\rho t_p C_d \\sqrt{2 g H}}$.",
                "Unpressurized Gating Ratio: $A_s : A_r : A_g = 1 : 2 : 2$ or $1 : 4 : 4$ (reduces stream velocity and turbulence).",
                "Pressurized Gating Ratio: $A_s : A_r : A_g = 4 : 2 : 1$ (choke located at the ingate).",
                "Riser Modulus Condition: $M_{\\text{riser}} \\ge 1.2 M_{\\text{casting}}$, where $M = V / A$.",
                "Centrifugal Casting G-Factor: $G = \\frac{v^2}{r g} = \\frac{r \\omega^2}{g} \\ge 60$.",
                "Hot Tear Cause: Non-uniform cooling and high mechanical restraint during solid contraction.",
                "Investment Casting Tolerance: Achieves $\\pm 0.05\\text{ mm}$ dimensional precision and $0.8\\,\\mu\\text{m}$ surface finish.",
                "Core Sand Binder: Sodium silicate ($Na_2SiO_3$) hardened instantly by gassing with $CO_2$.",
                "Exam Scoring Tip: The sprue must be designed as a downward-converging paraboloid or truncated cone to prevent atmospheric aspiration into the falling liquid."
        ]
},
    ('Manufacturing Technology — I', 2): {
        "title": "Welding",
        "highlights": [
                "Arc Welding Physics & V-I Characteristics: Power source linear characteristic: $V = V_{oc} - \\left(\\frac{V_{oc}}{I_{sc}}\\right) I$, where $V_{oc}$ is open-circuit voltage and $I_{sc}$ is short-circuit current; Arc characteristic: $V = a + b L$; Optimum arc power $P_{max} = \\frac{V_{oc} I_{sc}}{4}$.",
                "Shielded Metal Arc Welding (SMAW / Stick): Consumable coated electrode; Flux decomposition produces protective shielding gas ($CO_2, CO$), deoxidizers, and slag cover; Cellulosic, rutile, and basic low-hydrogen flux formulations.",
                "Gas Tungsten Arc Welding (GTAW / TIG): Non-consumable tungsten electrode (pure W, thoriated, or zirconiated) shielded by inert argon/helium; DCEN (straight polarity, $70\\%$ heat at workpiece, deep penetration), DCEP (reverse polarity, $70\\%$ at electrode, cathodic cleaning), and AC for aluminum.",
                "Gas Metal Arc Welding (GMAW / MIG/MAG): Continuous consumable wire spool; Shielding gas (Argon for non-ferrous, $Ar + CO_2$ for steels); Metal transfer modes: short-circuiting (dip transfer), globular, spray transfer (above transition current), and pulsed spray.",
                "Submerged Arc Welding (SAW): High-deposition arc submerged under blanket of granular fusible flux; Extremely high currents ($>1000\\text{ A}$); Deep penetration, high travel speed, zero spatter, and high deposition rate for thick plates.",
                "Resistance Welding (RSW / Seam / Projection): Heat generated by Joule effect: $H = I^2 R t$; Contact resistance between sheets dominates; Water-cooled copper alloy electrodes; Nugget diameter $d_n \\approx 5\\sqrt{t}$, where $t$ is sheet thickness.",
                "Oxy-Acetylene Gas Welding: Combustion stages: primary inner cone ($C_2H_2 + O_2 \\to 2CO + H_2$, $3100^\\circ\\text{C}$) and outer envelope ($2CO + H_2 + 1.5O_2 \\to 2CO_2 + H_2O$); Flame types: Neutral ($O_2:C_2H_2 = 1:1$), Oxidizing ($>1.1:1$, brass/bronze), and Carburizing ($<1:1$, hardfacing).",
                "Welding Heat Affected Zone (HAZ) & Solidification: Peak temperature distribution $T(r, t)$; Microstructural zones: fusion zone, grain growth zone (coarse grain HAZ), normalized zone, and intercritical zone; Hydrogen-induced cold cracking in hard martensitic HAZ.",
                "Solid-State Welding Processes: Friction welding, Friction Stir Welding (FSW, non-consumable rotating pin tool plasticizing joint without melting), Explosive welding, and Ultrasonic welding for electronic micro-wires.",
                "University Examination Strategy: Solve for optimum arc length and maximum power in electric arc welding, calculate heat generation in resistance spot welding, and sketch the microstructural zones of the HAZ."
        ],
        "keyPoints": [
                "Linear Power Source Equation: $V = V_{oc} - \\frac{V_{oc}}{I_{sc}} I$.",
                "Maximum Arc Power Formula: $P_{max} = \\frac{V_{oc} I_{sc}}{4}$ (occurs when $V = V_{oc}/2$ and $I = I_{sc}/2$).",
                "Resistance Spot Welding Heat: $H = I^2 R t$ Joules.",
                "Spot Weld Nugget Diameter: $d = 6\\sqrt{t}$ mm (or $5\\sqrt{t}$).",
                "Welding Heat Input per Unit Length: $H_{net} = \\eta \\frac{V I}{v}$ (where $\\eta$ is arc thermal efficiency and $v$ is welding speed).",
                "Neutral Flame Temperature: Peak temperature $3100-3200^\\circ\\text{C}$ at the tip of the inner white cone.",
                "DCEN Polarity Distribution: $70\\%$ heat generated at the anode (workpiece), producing deep, narrow penetration.",
                "DCEP Polarity Application: Provides cathodic cleaning action to blast refractory aluminum oxide ($Al_2O_3$) films.",
                "FSW Operating Mechanism: Non-consumable rotating tool generates frictional and plastic shear heating below melting point.",
                "Exam Scoring Tip: For resistance spot welding, the total resistance $R$ is the sum of bulk sheet resistances, electrode-sheet contact, and the dominant sheet-sheet interface resistance."
        ]
},
    ('Manufacturing Technology — I', 3): {
        "title": "Forming Processes",
        "highlights": [
                "Hot Working vs Cold Working: Hot working performed above recrystallization temperature ($T > 0.5 T_m$, low flow stress, dynamic recrystallization, no work hardening, poor surface finish); Cold working performed below ($T < 0.3 T_m$, high strength, strain hardening, close tolerances).",
                "True Stress & True Strain in Metal Forming: True stress $\\sigma_t = F/A$; True strain $\\varepsilon_t = \\ln(L/L_0) = \\ln(A_0/A)$; Plastic flow stress modeled via Hollomon law $\\sigma_f = K \\varepsilon^n$; Average flow stress $\\bar{\\sigma}_0 = \\frac{K \\varepsilon^n}{n + 1}$.",
                "Metal Rolling Fundamentals: Flat rolling of strip; Angle of bite $\\alpha$; Maximum draft per pass $\\Delta h_{max} = \\mu^2 R$, where $\\mu$ is coefficient of friction and $R$ is roll radius; Neutral point where strip velocity equals roll surface velocity ($v = v_r$).",
                "Rolling Mill Architectures: Two-high, three-high reversing, four-high (large backup rolls support small work rolls to reduce roll deflection), and cluster / Sendzimir mills for rolling ultra-thin foil.",
                "Forging Operations & Mechanics: Open-die forging (upsetting, drawing out), Closed-die / Impression-die forging with flash gutter (flash creates high hydrostatic pressure forcing metal into intricate cavity corners); Forging force $F = \\sigma_f A (1 + \\frac{2\\mu r}{3h})$.",
                "Extrusion Processes: Direct / Forward extrusion (billet moves in same direction as ram, high container friction) vs Indirect / Backward extrusion (billet stationary relative to container, zero wall friction, lower ram force); Hydrostatic extrusion.",
                "Wire & Tube Drawing: Pulling wire through converging carbide die; Reduction in area $r = 1 - (A_f / A_0)$; Drawing stress $\\sigma_d = \\bar{\\sigma}_0 \\ln\\left(\\frac{A_0}{A_f}\\right) \\left(1 + \\frac{\\mu}{\\alpha}\\right)$; Maximum theoretical reduction per pass for ideal plastic material is $63.2\\%$ ($r_{max} = 1 - 1/e$).",
                "Sheet Metal Forming Operations: Shearing, blanking (slug is part, die size = nominal, punch smaller by $2c$), punching/piercing (sheet is part, punch size = nominal), bending (bend allowance $BA = \\frac{\\pi}{180} R_b + K t$), and deep drawing.",
                "Deep Drawing & Limiting Drawing Ratio (LDR): Cup drawing using punch and blank holder; Limiting Drawing Ratio $LDR = D_{\\text{blank, max}} / d_{\\text{punch}} \\approx 2.0 - 2.2$; Defects: wrinkling in flange (insufficient blank holder force) and tearing at cup radius (excessive holder force).",
                "University Examination Strategy: Derive the maximum draft expression $\\Delta h_{max} = \\mu^2 R$ in flat rolling, calculate the drawing force for a wire reduction pass, and determine clearance allocation in blanking vs punching."
        ],
        "keyPoints": [
                "Maximum Rolling Draft: $\\Delta h_{max} = h_0 - h_f = \\mu^2 R$.",
                "Roll Bite Condition without Assistance: $\\tan\\alpha \\le \\mu$.",
                "Average Flow Stress Formula: $\\bar{\\sigma}_0 = \\frac{K \\varepsilon^n}{n + 1}$.",
                "Ideal Extrusion Pressure: $p = \\bar{\\sigma}_0 \\ln\\left(\\frac{A_0}{A_f}\\right)$.",
                "Maximum Single-Pass Wire Drawing Reduction: $r_{max} = 1 - e^{-1} = 63.2\\%$.",
                "Blanking Tool Clearance Allocation: Die opening equals blank diameter $D$; Punch diameter $d = D - 2c$.",
                "Punching Tool Clearance Allocation: Punch diameter equals hole diameter $d_h$; Die opening $D = d_h + 2c$.",
                "Blanking Force Formula: $F = P \\cdot t \\cdot \\tau_s = \\pi D t \\tau_s$.",
                "Limiting Drawing Ratio: $LDR = \\frac{D_0}{d_p} \\approx 2.0$.",
                "Exam Scoring Tip: For blanking, die size is exact and clearance is subtracted from punch; for punching, punch size is exact and clearance is added to die."
        ]
},
    ('Manufacturing Technology — I', 4): {
        "title": "Machining Basics",
        "highlights": [
                "Orthogonal vs Oblique Cutting: Orthogonal cutting (cutting edge perpendicular to tool feed direction, 2D chip flow) vs Oblique cutting (cutting edge inclined at inclination angle $i$, 3D helical chip flow).",
                "Merchant's Cutting Force Circle: Relations between cutting force $F_c$, thrust force $F_t$, shear force $F_s$, normal shear force $F_n$, friction force $F$, and normal force $N$; Shear angle equation: $\\phi = 45^\\circ + \\frac{\\alpha}{2} - \\frac{\\beta}{2}$, where $\\alpha$ is rake angle and $\\beta = \\arctan(\\mu)$ is friction angle.",
                "Chip Formation Mechanics: Primary shear zone (shear strain $\\gamma = \\cot\\phi + \\tan(\\phi - \\alpha)$), secondary shear zone along tool-chip interface, and tertiary friction zone at tool flank; Continuous chips (ductile metals, high speed), BUE chips (built-up edge at medium speeds), and Discontinuous chips (brittle metals, e.g. cast iron).",
                "Chip Thickness Ratio ($r$): $r = \\frac{t_1}{t_2} = \\frac{l_2}{l_1} = \\frac{\\sin\\phi}{\\cos(\\phi - \\alpha)}$; Since uncut chip thickness $t_1 < t_2$, chip ratio is strictly $r < 1$; Shear angle determined from chip ratio: $\\tan\\phi = \\frac{r\\cos\\alpha}{1 - r\\sin\\alpha}$.",
                "Tool Geometry (ASA & Orthogonal Rake Systems): American Standards Association (ASA) tool signature: Back rake, Side rake, End relief, Side relief, End cutting edge, Side cutting edge angles, and Nose radius ($R$ in mm/inches).",
                "Taylor's Tool Life Equation: $V T^n = C$, where $V$ is cutting speed (m/min), $T$ is tool life (min), $n$ is Taylor exponent ($n \\approx 0.1-0.15$ for HSS, $0.2-0.4$ for carbides, $0.4-0.6$ for ceramics), and $C$ is machining constant.",
                "Cutting Tool Materials Hierarchy: High Speed Steel (HSS 18-4-1: $18\\%\\text{ W}, 4\\%\\text{ Cr}, 1\\%\\text{ V}$), Tungsten Carbide (WC-Co cermets), Coated carbides ($TiN, TiCN, Al_2O_3$), Ceramic inserts ($Si_3N_4, Al_2O_3$), Cubic Boron Nitride (CBN), and Polycrystalline Diamond (PCD).",
                "Cutting Tool Wear Mechanisms: Flank wear (abrasive/adhesive rubbing against finished surface, measured by width $VB$ in mm; Taylor tool life criterion $VB = 0.3\\text{ mm}$) and Crater wear (chemical diffusion on rake face at point of maximum temperature).",
                "Cutting Fluids & Heat Dissipation: Heat generated: $Q_{\\text{shear}} (70-80\\%) + Q_{\\text{friction}} (15-20\\%) + Q_{\\text{flank}} (5\\%)$; Water-soluble emulsion oils (cooling), straight mineral oils (lubrication), and cryogenic Minimum Quantity Lubrication (MQL) using liquid nitrogen.",
                "University Examination Strategy: Construct Merchant's force circle from measured dynamometer forces ($F_c, F_t$), calculate shear strain and cutting power, and solve Taylor's tool life equations for varying speeds."
        ],
        "keyPoints": [
                "Merchant's Shear Angle Relation: $\\phi = 45^\\circ + \\frac{\\alpha}{2} - \\frac{\\beta}{2}$.",
                "Chip Thickness Ratio Formula: $r = \\frac{t_1}{t_2} = \\frac{\\sin\\phi}{\\cos(\\phi - \\alpha)}$.",
                "Shear Angle from Chip Ratio: $\\tan\\phi = \\frac{r\\cos\\alpha}{1 - r\\sin\\alpha}$.",
                "Shear Strain in Chip: $\\gamma = \\cot\\phi + \\tan(\\phi - \\alpha)$.",
                "Friction Force on Rake Face: $F = F_c\\sin\\alpha + F_t\\cos\\alpha$.",
                "Normal Force on Rake Face: $N = F_c\\cos\\alpha - F_t\\sin\\alpha$.",
                "Coefficient of Friction on Tool: $\\mu = \\tan\\beta = \\frac{F}{N} = \\frac{F_t + F_c\\tan\\alpha}{F_c - F_t\\tan\\alpha}$.",
                "Taylor's Tool Life Formula: $V T^n = C$.",
                "Cutting Power Consumption: $P_c = F_c \\times V$ Watts.",
                "Exam Scoring Tip: HSS tools lose hardness rapidly above $600^\\circ\\text{C}$ due to over-aging, whereas sintered carbide tools maintain red hardness up to $1000^\\circ\\text{C}$."
        ]
},
    ('Manufacturing Technology — I', 5): {
        "title": "Metrology",
        "highlights": [
                "Engineering Metrology & Inspection Principles: Precision (repeatability of measurement) vs Accuracy (closeness of measured value to true standard value); Systematic errors (controllable, calibration, environmental) vs Random errors (uncontrollable, statistical Gaussian distribution).",
                "Linear Measuring Instruments: Vernier caliper (least count $LC = 1\\text{ MSD} - 1\\text{ VSD} = 0.02\\text{ mm}$), Micrometer screw gauge ($LC = \\frac{\\text{Pitch}}{\\text{Number of circular divisions}} = 0.01\\text{ mm}$), and Slip gauges (gauge blocks, Grade 00, 0, I, II, joined via molecular wringing).",
                "Abbe's Principle of Alignment: Maximum measurement accuracy is attained only when the standard scale and the measured line of dimension are collinearly aligned on the same axis (satisfied by micrometer, violated by vernier caliper).",
                "Angular Metrology & Sine Bar: Angle measurement using precision rollers: $\\sin\\theta = \\frac{h}{L}$, where $h$ is slip gauge pack height and $L$ is distance between roller centers ($100\\text{ mm}$ or $200\\text{ mm}$); Errors become excessive for angles $\\theta > 45^\\circ$; Autocollimators and angle gauges.",
                "Limits, Fits & Tolerances (ISO & BIS Systems): Basic size, Upper deviation ($ES$), Lower deviation ($EI$), Fundamental tolerance ($IT$ grades $IT01$ to $IT16$, where tolerance unit $i = 0.45\\sqrt[3]{D} + 0.001 D$); Hole-basis system ($EI = 0$, 'H' hole) vs Shaft-basis system.",
                "Classification of Engineering Fits: Clearance fit (hole always larger than shaft, positive minimum clearance), Interference fit (shaft always larger than hole, negative maximum clearance), and Transition fit (tolerances overlap).",
                "Taylor's Principle of Limit Gauge Design: GO gauge must check maximum material condition (MMC) and all dimensions simultaneously; NO-GO gauge must check least material condition (LMC) and inspect only one dimension at a time.",
                "Surface Roughness & Texture Parameters: Surface profile $y(x)$; Center Line Average ($R_a = \\frac{1}{L}\\int_0^L |y| dx$), Root Mean Square roughness ($R_q = \\sqrt{\\frac{1}{L}\\int_0^L y^2 dx}$), and Ten-point height ($R_z$); Measured using stylus profilometers (Talysurf).",
                "Coordinate Measuring Machines (CMM): 3D touch-trigger and optical scanning probes moving along orthogonal $X, Y, Z$ guide ways; Software computes geometric features, circularity, flatness, parallelism, and true position tolerances.",
                "University Examination Strategy: Calculate tolerance unit $i$ and fundamental tolerance for a given diameter step, design GO and NO-GO plug gauges according to Taylor's principle, and solve sine bar angular setups."
        ],
        "keyPoints": [
                "Sine Bar Formula: $\\sin\\theta = \\frac{h}{L}$ (accurate strictly for $\\theta \\le 45^\\circ$).",
                "Tolerance Unit Formula: $i = 0.45 \\sqrt[3]{D} + 0.001 D$ $\\mu\\text{m}$ (where $D = \\sqrt{D_1 D_2}$).",
                "IT6 Grade Tolerance: $10 i$.",
                "IT7 Grade Tolerance: $16 i$.",
                "IT8 Grade Tolerance: $25 i$.",
                "Average Surface Roughness $R_a$: $R_a = \\frac{1}{L}\\int_0^L |y| dx \\approx \\frac{\\sum |y_i|}{N}$.",
                "Peak-to-Valley Roughness in Turning: $h_{\\text{max}} = \\frac{f^2}{8 R}$ (where $f$ is feed and $R$ is tool nose radius).",
                "Taylor's Gauge Rule: GO gauge checks MMC and multiple features; NO-GO gauge checks LMC and isolated elements.",
                "Hole Basis Standard: Lower deviation of basic hole 'H' is identically zero ($EI = 0$).",
                "Exam Scoring Tip: Abbe's alignment error is avoided in micrometers because the spindle axis coincides directly with the measured anvil axis."
        ]
},
    ('Machine Drawing', 1): {
        "title": "Drawing Standards",
        "highlights": [
                "Bureau of Indian Standards (BIS SP 46:2003): Standard engineering drawing sheets ($A0$ to $A4$, area ratio $1:\\sqrt{2}$ where $A0 = 1\\text{ m}^2$); Standard title block layout, projection symbols, and scale designations ($1:1, 1:2, 2:1$).",
                "Line Conventions & Precedence: Continuous thick (visible outlines), continuous thin (dimension, extension, leader lines), dashed thin (hidden features), chain thin (centerlines, axes of symmetry), chain thin with thick ends (cutting planes), and continuous freehand (short break lines).",
                "Dimensioning Principles & Rules: Aligned dimensioning (text parallel to and above dimension line) vs Unidirectional dimensioning (text horizontal and read from bottom); Chain, parallel, and coordinate dimensioning rules; Never dimension to hidden lines.",
                "Geometric Dimensioning and Tolerancing (GD&T): Feature control frame layout: [Geometric characteristic symbol | Tolerance value | Datum references]; Form tolerances (flatness, straightness, circularity, cylindricity) require no datum.",
                "Orientation and Location Tolerances: Orientation (perpendicularity, parallelism, angularity) requiring datum; Location (position, concentricity, symmetry); Runout (circular runout, total runout) measured using dial indicators.",
                "Material Condition Modifiers: Maximum Material Condition (MMC, symbol $\\text{M}$, gives bonus tolerance when feature departs from MMC) and Least Material Condition (LMC, symbol $\\text{L}$, critical for minimum wall thickness).",
                "Surface Finish Symbols: Basic triangle symbol; Value of roughness $R_a$ in $\\mu\\text{m}$ placed above triangle; Material removal allowance, machining method on horizontal line, and direction of lay symbols ($=, \\perp, X, M, C, R$).",
                "Screw Thread Representation: Metric ISO thread ($M20 \\times 2.5$); External thread (crest continuous thick line, root continuous thin line); Internal thread in section (minor diameter continuous thick, major diameter continuous thin).",
                "Keys, Cotters & Knuckle Joint Symbols: Sunk keys, feather keys, Woodruff keys; Cotter joint with spigot and socket; Knuckle joint for connecting rods under axial tension.",
                "University Examination Strategy: Draw the complete feature control frame for perpendicularity and position with MMC modifiers, construct standard line conventions, and annotate surface roughness symbols with lay directions."
        ],
        "keyPoints": [
                "Drawing Sheet Area Ratio: $x : y = 1 : \\sqrt{2}$, with $A0$ having area $1.0\\text{ m}^2$ ($841 \\times 1189\\text{ mm}$).",
                "Visible Line Standard: Continuous thick ($0.5-0.7\\text{ mm}$).",
                "Centerline Standard: Long dashed-dotted chain thin ($0.25\\text{ mm}$).",
                "Cutting Plane Line: Chain thin with thick ends and direction arrows.",
                "Feature Control Frame: Structured box indicating geometric tolerance, value, and datum references.",
                "Form Tolerances: Flatness, straightness, roundness; Never reference datums.",
                "Orientation Tolerances: Perpendicularity, parallelism; Always require datum planes.",
                "MMC Concept: Smallest hole diameter or largest shaft diameter.",
                "Thread Minor Diameter Representation: Drawn as continuous thin line spanning $3/4$ of circle in end view.",
                "Exam Scoring Tip: Projection symbol for First Angle has frustum cone with small end facing left and circular view on right."
        ]
},
    ('Machine Drawing', 2): {
        "title": "Orthographic Projections",
        "highlights": [
                "First Angle vs Third Angle Projection: First Angle (object placed in quadrant I between observer and plane, views projected behind object; Right side view drawn on left); Third Angle (plane between observer and object, views in front; Right view drawn on right).",
                "Six Principal Orthographic Views: Front elevation, top plan, left-side view, right-side view, rear view, and bottom view; Front view selected as most characteristic view showing primary functional shape.",
                "Auxiliary Views for Inclined Surfaces: Primary auxiliary view projected onto plane perpendicular to one principal plane and inclined to other two; Shows true shape, true size, and true inclination angle of slanted faces.",
                "Secondary Auxiliary Views: Projected from primary auxiliary view onto plane inclined to all three principal planes; Used to determine true clearance and true angle between skew lines.",
                "Line Views of Planes & Edge Views: A plane appears as a single straight edge line in any view where a line lying entirely on the plane appears in its true length.",
                "True Length of an Oblique Line: Determined by rotation method (rotating line parallel to horizontal or vertical plane) or auxiliary view method (projecting onto auxiliary plane parallel to line); $\\text{TL} = \\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$.",
                "Intersection of Curved Solids: Line of intersection between two intersecting cylinders; Determined by cutting plane method or sphere method; Elliptical or parabolic intersection curves.",
                "Development of Surfaces: Parallel line development (prisms, cylinders), Radial line development (pyramids, cones), and Triangulation development (transition pieces, hoppers, square-to-round ducts).",
                "Isometric Projection vs Isometric View: Isometric scale foreshortens all lengths to $\\sqrt{2/3} \\approx 0.816$ of true length; Isometric axes inclined at $120^\\circ$ to each other; Isometric view drawn using true scale.",
                "University Examination Strategy: Convert 3D pictorial views into First Angle orthographic projections (front, top, side), find true length and inclinations of skew lines, and develop surfaces of truncated cylinders."
        ],
        "keyPoints": [
                "First Angle Principle: Object lies between observer and projection plane (Right view drawn on left).",
                "Third Angle Principle: Projection plane lies between observer and object (Right view drawn on right).",
                "Isometric Scale Ratio: $\\frac{\\text{Isometric Length}}{\\text{True Length}} = \\frac{\\cos 45^\\circ}{\\cos 30^\\circ} = \\sqrt{\\frac{2}{3}} \\approx 0.816$.",
                "Isometric Axes Inclination: Spaced at strictly $120^\\circ$ to one another.",
                "Auxiliary Plane Rule: Placed parallel to inclined face to display its true shape.",
                "Sphere Method for Intersections: Applicable only when intersecting solids have common intersecting axes of revolution.",
                "Parallel Line Development: Used exclusively for right prisms and cylinders.",
                "Radial Line Development: Used exclusively for cones and pyramids.",
                "Non-Isometric Lines: Cannot be measured directly with isometric scale; Must be plotted via bounding box coordinates.",
                "Exam Scoring Tip: In First Angle projection, the top view is drawn directly below the front elevation view."
        ]
},
    ('Machine Drawing', 3): {
        "title": "Sectional Views",
        "highlights": [
                "Purpose of Sectioning: Reveals internal features, holes, webs, and cavities clearly without confusing clutter of hidden dashed lines.",
                "Cutting Plane Lines & Direction of Sight: Stepped or continuous cutting plane denoted by chain thin line with thickened ends and arrows pointing in viewing direction.",
                "Hatching & Section Lining Standards: Thin continuous lines drawn at $45^\\circ$ angle to centerline or main outline; Adjacent mating components hatched in opposite directions or with staggered spacing.",
                "Full Section vs Half Section Views: Full section (cutting plane passes entirely through object); Half section (cutting plane removes one quarter of symmetrical object, showing half internal section and half external view separated by centerline).",
                "Offset Sectioning: Cutting plane stepped at $90^\\circ$ right angles to pass through multiple offset internal features (e.g. holes, slots); Offsets not shown as lines on sectional drawing.",
                "Revolved & Removed Sections: Revolved section (cross-section rotated $90^\\circ$ in place directly on view, e.g. spoke, crane hook); Removed section (drawn adjacent to or offset from component with section identification labels A-A).",
                "Aligned Sections for Symmetrical Features: Features like radiating spokes, ribs, or bolt holes on pitch circle rotated into cutting plane to prevent misleading foreshortening.",
                "Components Never Sectioned Longitudinally: Shafts, bolts, nuts, washers, rivets, cotters, keys, pins, gear teeth, ball bearings, and thin structural webs/ribs cut longitudinally are drawn solid without hatching.",
                "Broken-Out / Local Sectioning: Small local section bounded by continuous irregular freehand line to expose interior of solid part without cutting entire object.",
                "University Examination Strategy: Draw full and half sectional views of mechanical assemblies, apply correct $45^\\circ$ hatching conventions for mating parts, and identify non-sectioned standard elements."
        ],
        "keyPoints": [
                "Hatching Angle Standard: Thin parallel lines oriented at $45^\\circ$ to component axis.",
                "Half Section Partition: Separated from exterior half strictly by a centerline (never a solid line).",
                "Non-Sectioned Elements: Shafts, bolts, nuts, keys, pins, rivets, and longitudinal ribs.",
                "Offset Section Transition: 90-degree step transitions are omitted from the sectional view.",
                "Hatching Spacing: Uniform spacing between $1.5\\text{ mm}$ and $3\\text{ mm}$ depending on view size.",
                "Mating Parts Hatching: Hatched in opposite $45^\\circ$ directions to distinguish boundaries.",
                "Thin Wall Sectioning: Sections thinner than $2\\text{ mm}$ shown completely black with white gaps.",
                "Revolved Section Line: Drawn with thin continuous outline when placed directly on view.",
                "Broken-Out Section Boundary: Thin continuous freehand line without touching existing lines.",
                "Exam Scoring Tip: Never draw hidden lines on a sectional view unless strictly required for dimensioning."
        ]
},
    ('Machine Drawing', 4): {
        "title": "Assembly Drawings",
        "highlights": [
                "Types of Assembly Drawings: Design assembly (conceptual layout), Working assembly (manufacturing blueprint with part list and tolerances), Exploded assembly (pictorial view showing disassembly sequence for maintenance).",
                "Bill of Materials (BOM) / Parts List: Structured tabular schedule listing: Item number, Part name, Quantity required, Material specification (e.g. CI, MS, Brass), and Drawing reference number.",
                "Plummer Block (Pedestal Bearing) Assembly: Cast iron base block, brass bush split into upper and lower halves with lubricating oil hole, cast iron cap, square-headed bolts, and nuts with lock nuts.",
                "Stuffing Box Assembly: Prevents fluid leakage along reciprocating piston rod of steam engine/pump; Comprises stuffing box body, gland bush, gland packing rings, and studs with nuts.",
                "Screw Jack Assembly: Heavy mechanical lifting jack; Cast steel body, bronze nut screwed into top body, square-threaded steel spindle, swivel head (bearing cup), and tommy bar for applying torque.",
                "Protected Flange Coupling: Connects collinear shafts; Keyed driving and driven flanges, cylindrical perimeter shroud protecting bolt heads and nuts, fitted bolts in reamed holes.",
                "Universal Coupling (Hooke's Joint): Transmits torque between two shafts intersecting at variable angle; Comprises two forked ends, central cross-pin (spider), and securing pins.",
                "Machine Vice Assembly: Clamping workpiece for milling/shaping; Fixed cast iron body with hardened steel jaw, movable jaw sliding on dovetail guides, square-threaded lead screw, and handle.",
                "Pipe Joints & Valves (Non-Return / Safety Valve): Flanged pipe joints with rubber gasket; Ramsbottom spring-loaded safety valve or lift check valve ensuring unidirectional fluid flow.",
                "University Examination Strategy: Assemble details of a Plummer block or Screw Jack into complete front elevation in half-section and top view, compile the Bill of Materials, and check fits and clearances."
        ],
        "keyPoints": [
                "Bill of Materials Sequence: Item Number, Part Name, Material, Quantity, Remarks.",
                "Plummer Block Brass Split: Split brass bushes allow replacement without disassembling the shaft.",
                "Screw Jack Spindle Thread: Square thread (high efficiency, zero radial bursting force on nut).",
                "Hooke's Joint Angular Limit: Operates effectively up to $\\approx 15-20^\\circ$ shaft inclination angle.",
                "Protected Flange Shroud: Outer rim prevents clothing from catching on rotating bolt heads.",
                "Stuffing Box Packing: Asbestos, graphite, or PTFE braided rings compressed by gland.",
                "Machine Vice Lead Screw: Transmits axial clamping thrust while movable jaw traverses.",
                "Assembly Drawing Tolerance: State limits and fits (e.g. $H7/g6$ for sliding, $H7/p6$ for press fit).",
                "Item Callout Balloon: Circle with item number linked to part by thin leader line with arrow or dot.",
                "Exam Scoring Tip: Double-check that centerlines match exactly across all assembled parts before drawing section lines."
        ]
},
    ('Machine Drawing', 5): {
        "title": "CAD Basics",
        "highlights": [
                "Computer-Aided Design (CAD) Systems Architecture: Graphics hardware, geometric modeling kernel (Parasolid, ACIS), database structure, and user interface; 2D drafting vs 3D solid modeling.",
                "Geometric Modeling Paradigms: Wireframe modeling (vertices and edges only, ambiguous surface representation), Surface modeling (B-rep, Bezier, B-spline, NURBS surfaces), and Solid modeling (unambiguous volumetric representation).",
                "Constructive Solid Geometry (CSG): Boolean operations (Union $A \\cup B$, Difference / Subtract $A - B$, Intersection $A \\cap B$) applied to basic geometric primitives (block, cylinder, sphere, cone, torus).",
                "Boundary Representation (B-Rep): Topological entities (vertices, edges, faces, loops) linked to underlying geometric definitions; Satisfies Euler-Poincar\u00e9 formula for closed solids: $V - E + F - (L - F) - 2(B - G) = 0$; For simple polyhedra: $V - E + F = 2$.",
                "Parametric & Feature-Based Solid Modeling: Dimension-driven geometry; Fully constrained sketches (geometric constraints: coincident, parallel, tangent, concentric; dimensional constraints); Feature tree history (Extrude, Revolve, Sweep, Loft, Fillet, Pattern).",
                "Direct Modeling vs History-Based Modeling: History-based models track sequential feature dependencies; Direct modeling enables dynamic pushing/pulling of geometric faces without parametric feature tree rebuild errors.",
                "CAD Data Exchange Standards: Initial Graphics Exchange Specification (IGES, surface-based), Standard for the Exchange of Product Model Data (STEP ISO 10303, comprehensive B-rep and PMI), and STL (stereolithography, triangulated mesh for 3D printing).",
                "Assembly Modeling in CAD: Bottom-up assembly (inserting pre-modeled components and applying mates: coincident, concentric, distance, gear) vs Top-down assembly (designing parts in-place within assembly context).",
                "Geometric Transformations in 2D/3D CAD: Homogeneous coordinate transformation matrices for translation, rotation, scaling, and reflection: $[x' \\; y' \\; z' \\; 1] = [x \\; y \\; z \\; 1] [T]$.",
                "University Examination Strategy: State the Euler-Poincar\u00e9 formula for solid modeling, perform 2D transformation matrix multiplications for rotation and scaling, and compare CSG vs B-Rep modeling."
        ],
        "keyPoints": [
                "Euler-Poincar\u00e9 Formula: $V - E + F = 2$ (for simple closed polyhedra).",
                "General Euler-Poincar\u00e9: $V - E + F - H = 2(B - G)$ (where $H$ is hole in face, $G$ is through-hole genus).",
                "2D Rotation Matrix (Angle $\\theta$): $\\begin{bmatrix} \\cos\\theta & \\sin\\theta & 0 \\\\ -\\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$.",
                "2D Translation Matrix: $\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ t_x & t_y & 1 \\end{bmatrix}$.",
                "CSG Primitives: Primitives combined via Boolean Union, Difference, and Intersection.",
                "B-Rep Topology Hierarchy: Solid $\\to$ Shell $\\to$ Face $\\to$ Loop $\\to$ Edge $\\to$ Vertex.",
                "NURBS Definition: Non-Uniform Rational B-Splines (exact representation of analytical and freeform surfaces).",
                "STEP Standard: ISO 10303 for complete engineering product data exchange.",
                "STL File Format: Approximates solid boundaries with unordered planar triangular facets.",
                "Exam Scoring Tip: In homogeneous coordinates, a point in 3D space is represented as a 4-element row vector $[x, y, z, 1]$."
        ]
},
    ('Building Materials & Construction', 1): {
        "title": "Stones & Bricks",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Building Materials & Construction', 2): {
        "title": "Cement & Concrete",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Building Materials & Construction', 3): {
        "title": "Timber & Steel",
        "highlights": [
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
        ],
        "keyPoints": [
                "Fiber Saturation Point (FSP): Moisture content $\\approx 28-30\\%$; Shrinkage begins only below FSP.",
                "Equilibrium Moisture Content (EMC): $10-12\\%$ for seasoned construction timber.",
                "Plywood Cross-Graining Rule: Odd number of plies ($3, 5, 7$) glued with grain perpendicular to adjacent plies.",
                "Ascu Wood Preservative: 1 part $As_2O_5 \\cdot 2H_2O$ + 3 parts $CuSO_4 \\cdot 5H_2O$ + 4 parts $K_2Cr_2O_7$.",
                "Dry Rot Fungus Cause: Lack of ventilation in damp, stagnant air causing wood to crumble into powder.",
                "TMT Steel Microstructure: Hard outer tempered martensite case with soft, ductile ferrite-pearlite core.",
                "Fe 415 Proof Stress: $0.2\\%$ offset yield strength is minimum $415\\text{ MPa}$.",
                "Fe 500D Ductile Steel: 'D' denotes high elongation ($\\ge 16\\%$) required for seismic earthquake resistance.",
                "Structural Steel Modulus: Young's modulus $E = 2 \\times 10^5\\text{ MPa}$ ($200\\text{ GPa}$) for all grades.",
                "Exam Scoring Tip: Heartwood is darker, denser, and more decay-resistant than sapwood because cell cavities are plugged with tannins, resins, and gums."
        ]
},
    ('Building Materials & Construction', 4): {
        "title": "Masonry",
        "highlights": [
                "Brick Masonry Terms: Course (horizontal layer of bricks), Header (brick laid with short face $90 \\times 90\\text{ mm}$ exposed), Stretcher (brick laid with long face $190 \\times 90\\text{ mm}$ exposed), Closer (cut brick piece along length: queen closer, king closer), Bat (cut brick across width: half bat, three-quarter bat).",
                "English Bond: Alternative courses of headers and stretchers; Queen closer placed next to the corner header (quoin header) in header course to generate $1/4$ brick lap ($45\\text{ mm}$); Strongest and most widely used bond in heavy load-bearing walls.",
                "Flemish Bond: Each course consists of alternate headers and stretchers; Single Flemish bond (Flemish facing with English backing for walls $\\ge 1.5$ bricks thick) vs Double Flemish bond (both faces show Flemish appearance); Better aesthetic appearance than English bond but slightly weaker.",
                "Stone Masonry Classifications: Rubble masonry (undressed or roughly dressed stones: random rubble uncoursed/coursed, square rubble, dry rubble without mortar) vs Ashlar masonry (accurately dressed stones with thin joints $<3\\text{ mm}$: Ashlar fine, Ashlar rough, Ashlar chamfered, Ashlar block-in-course).",
                "Bond Stones & Through Stones in Masonry: Through stones extend through full wall thickness at horizontal intervals of $1.5\\text{ m}$ to tie front and rear wythes together; In thick walls, overlapping header stones provide structural integrity.",
                "Cavity Walls & Damp Protection: Two masonry skins (inner load-bearing leaf and outer facing leaf) separated by continuous $50-75\\text{ mm}$ air space; Tied with stainless steel or galvanized wall ties ($4-5\\text{ ties/m}^2$); Prevents rain penetration, dampness, and provides high thermal insulation.",
                "Damp Proof Course (DPC): Continuous impermeable horizontal barrier ($25-40\\text{ mm}$ thick 1:2 cement mortar with waterproofing compound or asphalt mastic) laid at plinth level above ground to intercept capillary rise of subsoil moisture.",
                "Arches & Lintels: Lintel (horizontal flexural beam over opening: RCC, stone, steel) vs Arch (curved compression structure transmitting loads laterally to abutments); Arch components: Intrados (soffit), extrados, crown, keystone, voussoirs, springing line, impost, rise, and span.",
                "Partition Walls & Partition Systems: Non-load bearing interior dividing walls; Brick partitions ($100\\text{ mm}$ half-brick wall reinforced with hoop iron), hollow clay block partitions, lightweight aerated concrete blocks (AAC), and drywall gypsum plasterboard on light-gauge steel studs.",
                "University Examination Strategy: Draw front elevation and plan of alternate courses of 1-brick thick English bond and Double Flemish bond showing quoin headers and queen closers, detail the components of a cavity wall, and draw an arch schematic."
        ],
        "keyPoints": [
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
        ]
},
    ('Building Materials & Construction', 5): {
        "title": "Foundations",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Engineering Geology', 1): {
        "title": "Mineralogy",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Engineering Geology', 2): {
        "title": "Petrology",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Engineering Geology', 3): {
        "title": "Structural Geology",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Engineering Geology', 4): {
        "title": "Engineering Properties",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Engineering Geology', 5): {
        "title": "Geological Hazards",
        "highlights": [
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
        ],
        "keyPoints": [
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
        ]
},
    ('Fluid Mechanics (Momentum Transfer)', 1): {
        "title": "Fluid Properties",
        "highlights": [
                "Continuum Hypothesis in Chemical Engineering: Knudsen number criterion $Kn = \\lambda / L < 0.01$; Macroscopic fluid properties defined at a mathematical point as continuous field variables without statistical molecular fluctuations.",
                "Newton's Law of Viscosity & Momentum Flux: Molecular shear stress $\\tau_{yx} = -\\mu \\frac{dv_x}{dy}$, representing the negative molecular flux of $x$-momentum in the $y$-direction; Dynamic viscosity $\\mu$ in $\\text{Pa}\\cdot\\text{s}$ or Poise ($1\\text{ P} = 0.1\\text{ Pa}\\cdot\\text{s}$).",
                "Non-Newtonian Fluid Rheology: Ostwald-de Waele Power-Law model: $\\tau = K \\left|\\frac{dv}{dy}\\right|^{n-1} \\frac{dv}{dy}$; Pseudoplastic / shear-thinning ($n < 1$, polymer solutions, paint), Dilatant / shear-thickening ($n > 1$, cornstarch suspension), and Bingham plastics (yield stress $\\tau_0$, drilling muds, slurries).",
                "Time-Dependent Rheology: Thixotropic fluids (apparent viscosity decreases with sustained shearing time under constant shear rate, e.g. printing inks) vs Rheopectic fluids (viscosity increases with shearing time, e.g. gypsum pastes); Viscoelastic polymers exhibiting Weissenberg effect.",
                "Kinematic Viscosity & Momentum Diffusivity: $\\nu = \\mu / \\rho$ in $\\text{m}^2/\\text{s}$ or Stokes ($1\\text{ St} = 10^{-4}\\text{ m}^2/\\text{s}$); Represents molecular diffusivity of momentum in Navier-Stokes equations analogous to thermal diffusivity $\\alpha$ and mass diffusivity $D_{AB}$.",
                "Surface Tension & Capillary Phenomena: Interfacial free energy $\\sigma$ ($\\\\text{N/m}$); Young-Laplace equation for pressure difference across curved fluid interface: $\\Delta P = \\sigma \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$; Capillary rise in circular tubes: $h = \\frac{4\\sigma\\cos\\theta}{\\rho g d}$.",
                "Vapor Pressure & Cavitation in Chemical Process Equipment: Liquid boils when local absolute static pressure drops to saturation vapor pressure $P_v(T)$; Bubble collapse causes high-frequency pressure shocks ($>1000\\text{ MPa}$) eroding pump impellers and control valves.",
                "Fluid Compressibility & Bulk Modulus: Isothermal compressibility $\\beta_T = -\\frac{1}{V}\\left(\\frac{\\partial V}{\\partial P}\\right)_T$; Bulk modulus of elasticity $K = 1/\\beta = \\rho \\frac{dP}{d\\rho}$; Incompressible flow assumption valid when Mach number $Ma = v / c < 0.3$.",
                "Viscosity Temperature Dependency: Liquid viscosity decreases exponentially with temperature according to Andrade equation: $\\mu(T) = A e^{B/T}$; Gas viscosity increases with temperature according to Chapman-Enskog / Sutherland equation: $\\mu \\propto T^{3/2} / (T + S)$.",
                "University Examination Strategy: Derive the Young-Laplace equation across a spherical bubble, classify rheological curves on a shear stress vs shear rate plot, and calculate capillary rise in narrow vertical tubes."
        ],
        "keyPoints": [
                "Newton's Viscosity Law: $\\tau_{yx} = -\\mu \\frac{dv_x}{dy}$.",
                "Power Law Model: $\\tau = K \\dot{\\gamma}^n$ (Pseudoplastic for $n < 1$, Dilatant for $n > 1$).",
                "Bingham Plastic Equation: $\\tau = \\tau_0 + \\mu_p \\dot{\\gamma}$ (valid for $\\tau \\ge \\tau_0$).",
                "Kinematic Viscosity Definition: $\\nu = \\frac{\\mu}{\\rho}$ ($\\\\text{m}^2/\\text{s}$).",
                "Young-Laplace Bubble Formula: $\\Delta P = \\frac{4\\sigma}{R}$ (two air-liquid interfaces).",
                "Droplet Pressure Jump: $\\Delta P = \\frac{2\\sigma}{R}$.",
                "Capillary Rise Formula: $h = \\frac{4\\sigma\\cos\\theta}{\\rho g d}$.",
                "Bulk Modulus Formula: $K = -V \\frac{dP}{dV} = \\rho \\frac{dP}{d\\rho}$.",
                "Incompressible Flow Criterion: $Ma = \\frac{v}{c} < 0.3$.",
                "Exam Scoring Tip: Viscosity of liquids decreases with temperature due to weakening intermolecular cohesion, whereas gas viscosity increases due to greater molecular collision frequency."
        ]
},
    ('Fluid Mechanics (Momentum Transfer)', 2): {
        "title": "Fluid Statics",
        "highlights": [
                "Pascal's Law of Hydrostatic Pressure: Pressure at any point in a stationary fluid is equal in all directions: $P_x = P_y = P_z$; Foundation of hydraulic press mechanical advantage: $F_2 = F_1 (A_2 / A_1)$.",
                "Hydrostatic Equation in Differential Form: Balance of gravity and pressure gradient: $\\frac{dP}{dz} = -\\rho g$; For constant density liquid, linear pressure depth profile: $P = P_0 + \\rho g h$; Absolute vs gauge pressure: $P_{\\text{abs}} = P_{\\text{gauge}} + P_{\\text{atm}}$.",
                "Atmospheric Pressure Variation in Barometric Field: Isothermal ideal gas atmosphere: $P(z) = P_0 \\exp\\left(-\\frac{M g z}{R T}\\right)$; Adiabatic atmosphere with constant lapse rate: $T(z) = T_0 - \\Gamma z$.",
                "Manometry in Chemical Plants: U-tube manometer reading differential pressure: $\\Delta P = (\\rho_m - \\rho) g h$; Inverted U-tube manometers for liquid-liquid systems; Inclined manometers for high-sensitivity gas draft measurements ($\\\\Delta P = \\rho_m g L \\sin\\theta$).",
                "Hydrostatic Forces on Submerged Flat Surfaces: Resultant compressive force $F = \\rho g \\bar{h} A$; Line of action passes through Center of Pressure (CP): $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2\\theta}{A \\bar{h}}$, which always lies strictly below the centroid $\\bar{h}$.",
                "Hydrostatic Forces on Curved Surfaces: Decomposed into orthogonal components: Horizontal force $F_x = \\rho g \\bar{h} A_{\\text{proj}}$ acting on vertical projection; Vertical force $F_y = \\text{Weight of fluid column directly above curved surface}$; Resultant $F_R = \\sqrt{F_x^2 + F_y^2}$.",
                "Buoyancy & Archimedes Principle: Net upward buoyant force $F_b = \\rho_f g V_{\\text{disp}}$ equals weight of displaced fluid; Line of action passes through Center of Buoyancy $B$ (centroid of displaced fluid volume).",
                "Stability of Submerged & Floating Bodies: Submerged body: Stable iff center of buoyancy $B$ lies vertically above center of gravity $G$; Floating body: Rotational stability governed by Metacenter $M$; Stable iff Metacentric Height $GM = BM - BG > 0$, where $BM = I / V_{\\text{disp}}$.",
                "Fluids Under Rigid-Body Acceleration: Uniform linear acceleration $a_x, a_z$: Free surface tilts at angle $\\tan\\theta = -\\frac{a_x}{g + a_z}$; Rigid-body rotation around vertical axis: Free surface forms paraboloid of revolution: $z = \\frac{\\omega^2 r^2}{2g}$.",
                "University Examination Strategy: Derive the center of pressure formula $h_{cp} = \\bar{h} + \\frac{I_G\\sin^2\\theta}{A\\bar{h}}$, calculate metacentric height $GM$ for a floating industrial decanter, and solve differential manometer equations."
        ],
        "keyPoints": [
                "Hydrostatic Gradient: $\\frac{dP}{dz} = -\\rho g$.",
                "Linear Depth Pressure: $P = P_0 + \\rho g h$.",
                "Differential Manometer: $\\Delta P = (\\rho_m - \\rho) g h$.",
                "Center of Pressure on Inclined Plane: $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2\\theta}{A \\bar{h}}$.",
                "Archimedes Buoyant Force: $F_B = \\rho_f g V_{\\text{disp}}$.",
                "Metacentric Radius Formula: $BM = \\frac{I}{V_{\\text{disp}}}$.",
                "Metacentric Height Stability Criterion: Stable iff $GM = BM - BG > 0$.",
                "Linear Acceleration Surface Slope: $\\tan\\theta = -\\frac{a_x}{g + a_z}$.",
                "Rotating Fluid Paraboloid: $z(r) - z(0) = \\frac{\\omega^2 r^2}{2g}$.",
                "Exam Scoring Tip: The center of pressure always lies below the centroid because the hydrostatic pressure increases with depth."
        ]
},
    ('Fluid Mechanics (Momentum Transfer)', 3): {
        "title": "Fluid Dynamics",
        "highlights": [
                "Eulerian vs Lagrangian Flow Descriptions: Lagrangian tracks individual tagged fluid parcels $\\vec{x}(t)$; Eulerian observes velocity field $\\vec{v}(\\vec{x}, t)$ at fixed spatial coordinates; Material / Substantial derivative $\\frac{D}{Dt} = \\frac{\\partial}{\\partial t} + \\vec{v} \\cdot \\nabla$.",
                "Continuity Equation (Conservation of Mass): General differential continuity: $\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\vec{v}) = 0$; For incompressible fluid: $\\nabla \\cdot \\vec{v} = \\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} + \\frac{\\partial w}{\\partial z} = 0$; 1D pipe flow: $A_1 v_1 = A_2 v_2$.",
                "Navier-Stokes Equations (Conservation of Momentum): $\\rho \\frac{D\\vec{v}}{Dt} = -\\nabla P + \\mu \\nabla^2 \\vec{v} + \\rho \\vec{g}$; Balance of inertia, pressure gradient, viscous diffusion, and gravity body forces in incompressible Newtonian flow.",
                "Euler's Equation of Motion: Neglecting viscous friction ($\\mu = 0$ along streamline): $\\frac{dP}{\\rho} + v dv + g dz = 0$; Valid for frictionless inviscid streamlines.",
                "Bernoulli's Energy Theorem: Integrating Euler's equation along streamline for steady, incompressible, frictionless flow: $\\frac{P}{\\rho g} + \\frac{v^2}{2g} + z = \\text{Constant} = H$; Terms represent static pressure head, velocity / dynamic head, and datum potential head.",
                "Bernoulli Modifications for Real Viscous Flow: Engineering Bernoulli equation including frictional head loss $h_L$ and pump shaft work $w_p$: $\\frac{P_1}{\\rho g} + \\frac{\\alpha_1 v_1^2}{2g} + z_1 + h_p = \\frac{P_2}{\\rho g} + \\frac{\\alpha_2 v_2^2}{2g} + z_2 + h_L$; Kinetic energy correction factor $\\alpha = 2$ for laminar, $\\alpha \\approx 1.05$ for turbulent.",
                "Venturimeter & Flow Rate Metering: Converging inlet, cylindrical throat, and gradual diverging diffuser ($5-7^\\circ$ to prevent boundary layer separation); Theoretical flow rate $Q_{th} = \\frac{A_1 A_2}{\\sqrt{A_1^2 - A_2^2}} \\sqrt{\\frac{2\\Delta P}{\\rho}}$; Actual flow $Q = C_d Q_{th}$ with discharge coefficient $C_d \\approx 0.96 - 0.98$.",
                "Orifice Meter & Pitot Tube: Orifice meter ($C_d \\approx 0.60-0.65$, vena contracta formation, high permanent pressure loss); Pitot-static tube measuring stagnation pressure: $P_{\\text{stag}} = P_0 + \\frac{1}{2}\\rho v^2 \\implies v = \\sqrt{\\frac{2(P_{\\text{stag}} - P_0)}{\\rho}}$.",
                "Vorticity & Stream Functions: Vorticity vector $\\vec{\\omega} = \\nabla \\times \\vec{v}$; Irrotational flow condition $\\nabla \\times \\vec{v} = 0 \\implies \\vec{v} = \\nabla \\phi$; Stream function $\\psi(x, y)$ satisfies $u = \\frac{\\partial\\psi}{\\partial y}, v = -\\frac{\\partial\\psi}{\\partial x}$; Laplace equation $\\nabla^2 \\phi = \\nabla^2 \\psi = 0$.",
                "University Examination Strategy: Derive the Bernoulli equation by integrating Euler's equation along a streamline, calculate volumetric flow rate through a Venturimeter, and evaluate velocity potential $\\phi$ from stream function $\\psi$."
        ],
        "keyPoints": [
                "Material Derivative: $\\frac{Df}{Dt} = \\frac{\\partial f}{\\partial t} + u\\frac{\\partial f}{\\partial x} + v\\frac{\\partial f}{\\partial y} + w\\frac{\\partial f}{\\partial z}$.",
                "Incompressible Continuity Equation: $\\nabla \\cdot \\vec{v} = 0$.",
                "Navier-Stokes Equation (Vector): $\\rho \\left(\\frac{\\partial\\vec{v}}{\\partial t} + \\vec{v}\\cdot\\nabla\\vec{v}\\right) = -\\nabla P + \\mu \\nabla^2 \\vec{v} + \\rho\\vec{g}$.",
                "Bernoulli's Equation: $\\frac{P}{\\rho g} + \\frac{v^2}{2g} + z = H$ (Constant along streamline).",
                "Venturi Flow Formula: $Q = C_d \\frac{A_1 A_2}{\\sqrt{A_1^2 - A_2^2}} \\sqrt{\\frac{2\\Delta P}{\\rho}}$.",
                "Pitot Tube Velocity: $v = \\sqrt{\\frac{2\\Delta P}{\\rho}}$.",
                "Kinetic Energy Factor $\\alpha$: $\\alpha = 2.0$ for laminar pipe flow; $\\alpha \\approx 1.05$ for turbulent pipe flow.",
                "Stream Function Velocities: $u = \\frac{\\partial\\psi}{\\partial y}, \\quad v = -\\frac{\\partial\\psi}{\\partial x}$.",
                "Irrotational Flow Condition: $\\nabla \\times \\vec{v} = 0$.",
                "Exam Scoring Tip: The diverging cone of a Venturimeter is designed with a small angle ($5-7^\\circ$) over a longer length to prevent boundary layer separation and eddy head loss."
        ]
},
    ('Fluid Mechanics (Momentum Transfer)', 4): {
        "title": "Flow Through Pipes",
        "highlights": [
                "Reynolds Number & Flow Regimes: Dimensionless ratio of inertial to viscous forces: $Re = \\frac{\\rho v D}{\\mu} = \\frac{v D}{\\nu}$; Laminar flow ($Re < 2100$), Transition ($2100 < Re < 4000$), and Fully developed turbulent flow ($Re > 4000$).",
                "Hagen-Poiseuille Law for Laminar Flow: Fully developed laminar pipe flow; Parabolic velocity profile $v(r) = v_{max} \\left(1 - \\frac{r^2}{R^2}\\right)$, where $v_{max} = 2 v_{avg}$; Wall shear stress $\\tau_w = \\frac{\\Delta P \\cdot R}{2L}$; Pressure drop: $\\Delta P = \\frac{32 \\mu v L}{D^2} = \\frac{128 \\mu Q L}{\\pi D^4}$.",
                "Darcy-Weisbach Friction Equation: Head loss due to pipe friction: $h_f = f \\frac{L}{D} \\frac{v^2}{2g}$ (where $f$ is Darcy friction factor; Fanning friction factor $f_F = f / 4$); For laminar flow, $f = \\frac{64}{Re}$ ($f_F = \\frac{16}{Re}$).",
                "Turbulent Pipe Flow & Moody Diagram: Universal velocity profile: Viscous sublayer ($y^+ < 5, u^+ = y^+$), Buffer zone ($5 < y^+ < 30$), and Logarithmic overlap layer ($u^+ = \\frac{1}{\\kappa} \\ln y^+ + B$); Friction factor depends on $Re$ and relative surface roughness $\\varepsilon / D$ as plotted on the Moody chart.",
                "Colebrook-White & Haaland Equations: Implicit Colebrook equation: $\\frac{1}{\\sqrt{f}} = -2.0 \\log_{10}\\left(\\frac{\\varepsilon / D}{3.7} + \\frac{2.51}{Re \\sqrt{f}}\\right)$; Explicit Haaland approximation: $\\frac{1}{\\sqrt{f}} \\approx -1.8 \\log_{10}\\left[\\left(\\frac{\\varepsilon / D}{3.7}\\right)^{1.11} + \\frac{6.9}{Re}\\right]$.",
                "Hydrodynamic Entrance Length ($L_h$): Distance required for boundary layer to merge at pipe centerline: Laminar flow entrance length $L_h \\approx 0.05 Re \\cdot D$; Turbulent entrance length $L_h \\approx 10-50 D$ (much shorter due to rapid turbulent eddy diffusion).",
                "Minor Losses in Pipe Networks: Head losses in fittings, valves, contractions, and bends: $h_m = K_L \\frac{v^2}{2g}$; Sudden enlargement loss (Borda-Carnot formula): $h_e = \\frac{(v_1 - v_2)^2}{2g}$; Sudden contraction loss: $h_c = K_c \\frac{v_2^2}{2g} = \\left(\\frac{1}{C_c} - 1\\right)^2 \\frac{v_2^2}{2g}$.",
                "Pipes in Series & Parallel: Pipes in series: $Q = Q_1 = Q_2$ and $h_L = h_{L1} + h_{L2}$; Equivalent pipe length (Dupuit's equation): $\\frac{L_e}{D_e^5} = \\frac{L_1}{D_1^5} + \\frac{L_2}{D_2^5}$; Pipes in parallel: $h_L = h_{L1} = h_{L2}$ and total flow $Q = Q_1 + Q_2$.",
                "Flow Through Packed Beds (Ergun Equation): Flow through porous catalyst beds; Void fraction / porosity $\\varepsilon$; Ergun equation combines laminar Kozeny-Carman and turbulent Burke-Plummer terms: $\\frac{\\Delta P}{L} = 150 \\frac{\\mu v_0 (1 - \\varepsilon)^2}{d_p^2 \\varepsilon^3} + 1.75 \\frac{\\rho v_0^2 (1 - \\varepsilon)}{d_p \\varepsilon^3}$.",
                "University Examination Strategy: Derive Hagen-Poiseuille equation starting from cylindrical momentum shell balance, solve parallel pipe network discharge divisions, and calculate pressure drop across a packed bed using Ergun's equation."
        ],
        "keyPoints": [
                "Hagen-Poiseuille Pressure Drop: $\\Delta P = \\frac{32 \\mu v L}{D^2} = \\frac{128 \\mu Q L}{\\pi D^4}$.",
                "Darcy Friction Factor (Laminar): $f = \\frac{64}{Re}$.",
                "Fanning Friction Factor (Laminar): $f_F = \\frac{16}{Re}$.",
                "Darcy-Weisbach Equation: $h_f = f \\frac{L}{D} \\frac{v^2}{2g}$.",
                "Sudden Enlargement Head Loss: $h_e = \\frac{(v_1 - v_2)^2}{2g}$.",
                "Sudden Contraction Head Loss: $h_c = \\left(\\frac{1}{C_c} - 1\\right)^2 \\frac{v_2^2}{2g}$.",
                "Dupuit Equivalent Pipe Formula: $\\frac{L_e}{D_e^5} = \\sum_{i=1}^n \\frac{L_i}{D_i^5}$.",
                "Ergun Packed Bed Equation: $\\frac{\\Delta P}{L} = 150\\frac{\\mu v_0(1-\\varepsilon)^2}{d_p^2 \\varepsilon^3} + 1.75\\frac{\\rho v_0^2(1-\\varepsilon)}{d_p \\varepsilon^3}$.",
                "Kozeny-Carman Constant: Valid for laminar packed bed flow ($Re_p < 10$).",
                "Exam Scoring Tip: The friction factor $f$ in chemical engineering literature is often Fanning's ($f_F$), which is strictly one-fourth of the Darcy friction factor ($f = 4 f_F$)."
        ]
},
    ('Fluid Mechanics (Momentum Transfer)', 5): {
        "title": "Pumps & Compressors",
        "highlights": [
                "Classification of Fluid Machinery: Positive displacement pumps (reciprocating piston/plunger, rotary gear, lobe, screw, peristaltic; constant volume delivery independent of discharge pressure) vs Dynamic / Turbomachinery (centrifugal pumps, axial flow pumps; head decreases with flow rate).",
                "Centrifugal Pump Architecture & Velocity Triangles: Impeller vanes (backward-curved vanes $\\beta_2 < 90^\\circ$ yield stable drooping $H-Q$ curve), volute casing, and diffuser; Euler's pump equation: Theoretical head $H_e = \\frac{u_2 v_{w2} - u_1 v_{w1}}{g}$; For radial inlet ($v_{w1} = 0$), $H_e = \\frac{u_2 v_{w2}}{g}$.",
                "Centrifugal Pump Efficiencies: Manometric efficiency $\\eta_m = \\frac{g H_m}{u_2 v_{w2}}$; Volumetric efficiency $\\eta_v = \\frac{Q}{Q + q_L}$; Mechanical efficiency $\\eta_{mech} = \\frac{\\text{Hydraulic Power}}{\\text{Brake Power}}$; Overall efficiency $\\eta_o = \\eta_m \\times \\eta_v \\times \\eta_{mech} = \\frac{\\rho g Q H_m}{P_{\\text{shaft}}}$.",
                "Net Positive Suction Head (NPSH) & Cavitation Prevention: Available NPSH: $NPSH_A = \\frac{P_{atm}}{\\rho g} - h_s - h_{fs} - \\frac{P_v}{\\rho g}$; Required NPSH: $NPSH_R$ specified by pump manufacturer; Cavitation-free operation strictly requires $NPSH_A > NPSH_R + 0.5\\text{ m}$.",
                "Specific Speed ($N_s$) & Impeller Selection: $N_s = \\frac{N \\sqrt{Q}}{H^{3/4}}$ in rpm; Low $N_s$ ($500-1500$, narrow radial impellers for high head and low discharge); Medium $N_s$ ($1500-4000$, Francis type); High $N_s$ ($>4000$, axial flow propeller pumps for high flow and low head).",
                "Centrifugal Pump Operating Point & System Characteristic: System head curve: $H_{sys} = H_{stat} + K Q^2$; Operating duty point is the intersection of the pump manufacturer's $H-Q$ curve with the pipeline system curve; Throttling valve control vs Variable Frequency Drive (VFD).",
                "Pumps in Series & Parallel Configurations: Series (impellers on common shaft or multi-stage pumps): $Q = Q_1$, Total head $H = H_1 + H_2$; Parallel (multiple pumps discharging into common manifold): $H = H_1 = H_2$, Total flow $Q = Q_1 + Q_2$.",
                "Reciprocating Pumps & Indicator Diagrams: Double-acting piston pump discharge $Q_{th} = \\frac{2 A L N}{60}$; Slip $= \\frac{Q_{th} - Q_{act}}{Q_{th}}$; Negative slip occurs in long suction pipes at high speeds; Acceleration head $h_a = \\frac{l}{g}\\frac{A}{a}\\omega^2 r \\cos\\theta$; Air vessels installed near cylinder to equalize flow and eliminate inertia head.",
                "Gas Compressors & Multi-Stage Compression: Reciprocating vs Centrifugal compressors; Work of single-stage compression; Multi-stage compression with intercooling reduces work to minimum; Optimum interstage pressure for two-stage: $P_i = \\sqrt{P_1 P_2}$.",
                "University Examination Strategy: Construct inlet and outlet velocity triangles for a centrifugal pump with backward-curved vanes, calculate manometric head and overall efficiency, solve NPSH available problems, and prove optimum intercooling pressure $P_i = \\sqrt{P_1 P_2}$."
        ],
        "keyPoints": [
                "Euler's Pump Head Equation: $H_{e} = \\frac{u_2 v_{w2}}{g}$ (assuming radial entry $v_{w1} = 0$).",
                "Manometric Efficiency: $\\eta_m = \\frac{g H_m}{u_2 v_{w2}}$.",
                "Overall Pump Efficiency: $\\eta_o = \\frac{\\rho g Q H_m}{P_{\\text{brake}}}$.",
                "NPSH Available Formula: $NPSH_A = \\frac{P_0 - P_v}{\\rho g} - z_s - h_{fs}$.",
                "Cavitation Avoidance Criterion: $NPSH_A > NPSH_R$ (minimum margin $0.5\\text{ m}$).",
                "Pump Specific Speed: $N_s = \\frac{N \\sqrt{Q}}{H_m^{3/4}}$.",
                "Affinity Laws (Speed $N$ Variation): $\\frac{Q_1}{Q_2} = \\frac{N_1}{N_2}, \\quad \\frac{H_1}{H_2} = \\left(\\frac{N_1}{N_2}\\right)^2, \\quad \\frac{P_1}{P_2} = \\left(\\frac{N_1}{N_2}\\right)^3$.",
                "Two-Stage Compressor Optimum Interstage: $P_i = \\sqrt{P_1 P_2}$.",
                "Reciprocating Pump Slip: $\\%\\text{Slip} = \\frac{Q_{th} - Q_{act}}{Q_{th}} \\times 100\\%$.",
                "Exam Scoring Tip: Backward-curved vanes ($\\beta_2 < 90^\\circ$) are universally used in centrifugal pumps because they produce a self-limiting power curve and higher efficiency than forward vanes."
        ]
},
    ('Chemical Engineering Thermodynamics — I', 1): {
        "title": "Laws of Thermodynamics",
        "highlights": [
                "First Law of Thermodynamics for Closed Systems: Conservation of energy: $\\Delta U = Q - W$; State function internal energy $U$ depends only on initial and final thermodynamic equilibrium states; Reversible work $W = \\int P dV$.",
                "Open System First Law & Steady-State Flow Energy Equation (SFEE): Control volume energy balance: $\\Delta \\left[H + \\frac{v^2}{2} + g z\\right] = Q - W_s$; Enthalpy defined as $H = U + P V$; Shaft work $W_s$ and rate of heat transfer $Q$.",
                "Reversible vs Irreversible Processes: Reversible process (proceeds through continuous quasi-static equilibrium states without dissipation, yielding maximum work output $W_{rev}$); Irreversible processes involve finite temperature gradients, fluid turbulence, unresisted expansion, and chemical reactions.",
                "Heat Capacity Relations: Heat capacity at constant volume $C_v = \\left(\\frac{\\partial U}{\\partial T}\\right)_v$; Heat capacity at constant pressure $C_p = \\left(\\frac{\\partial H}{\\partial T}\\right)_p$; For ideal gas: $C_p - C_v = R$; Ratio of heat capacities $\\gamma = C_p / C_v$.",
                "Ideal Gas Reversible Processes: Isothermal ($T = C, W = R T \\ln(V_2 / V_1) = R T \\ln(P_1 / P_2), \\Delta U = 0$); Isobaric ($P = C, W = P \\Delta V, Q = \\Delta H$); Isochoric ($V = C, W = 0, Q = \\Delta U$); Adiabatic ($Q = 0, P V^\\gamma = C, W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$).",
                "Polytropic Process Analysis: General reversible expansion $P V^n = C$; Polytropic work $W = \\frac{P_1 V_1 - P_2 V_2}{n - 1}$; Polytropic heat capacity $C_n = C_v \\frac{n - \\gamma}{n - 1}$; Spans all standard thermodynamic paths ($n = 0$ isobaric, $n = 1$ isothermal, $n = \\gamma$ adiabatic, $n = \\infty$ isochoric).",
                "Joule-Thomson Expansion & Porous Plug Experiment: Isenthalpic throttling process ($H_1 = H_2$); Joule-Thomson coefficient $\\mu_{JT} = \\left(\\frac{\\partial T}{\\partial P}\\right)_H = \\frac{1}{C_p}\\left[T\\left(\\frac{\\partial V}{\\partial T}\\right)_P - V\\right]$; Inversion temperature where $\\mu_{JT} = 0$; For ideal gas, $\\mu_{JT} = 0$ identically.",
                "Compressibility Factor ($Z$): Departure from ideal gas behavior: $Z = \\frac{P V}{R T}$; $Z = 1$ for ideal gas; Theorem of corresponding states: $Z = f(P_r, T_r)$, where reduced parameters are $P_r = P / P_c$ and $T_r = T / T_c$.",
                "Second Law Formulations & Carnot Cycle: Kelvin-Planck statement (impossible to construct cyclic engine whose sole effect is absorption of heat from single reservoir and performance of equal work) vs Clausius statement (impossible to transfer heat from cold to hot body without external work); Carnot efficiency $\\eta_c = 1 - \\frac{T_C}{T_H}$.",
                "University Examination Strategy: Formulate the First Law SFEE for a nozzle and compressor, derive $C_p - C_v = R$ for an ideal gas, calculate work and heat in polytropic processes, and derive the Joule-Thomson coefficient."
        ],
        "keyPoints": [
                "First Law Differential: $dU = dQ - dW = dQ - P dV$.",
                "Enthalpy Definition: $H = U + P V$.",
                "SFEE Open System Equation: $\\Delta H + \\frac{\\Delta v^2}{2} + g \\Delta z = Q - W_s$.",
                "Ideal Gas Heat Capacity Difference: $C_p - C_v = R$.",
                "Reversible Isothermal Work: $W = R T \\ln\\left(\\frac{V_2}{V_1}\\right) = R T \\ln\\left(\\frac{P_1}{P_2}\\right)$.",
                "Reversible Adiabatic Work: $W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{R (T_1 - T_2)}{\\gamma - 1}$.",
                "Joule-Thomson Coefficient: $\\mu_{JT} = \\left(\\frac{\\partial T}{\\partial P}\\right)_H = \\frac{1}{C_p} \\left[T\\left(\\frac{\\partial V}{\\partial T}\\right)_P - V\\right]$.",
                "Carnot Thermal Efficiency: $\\eta = 1 - \\frac{T_L}{T_H}$.",
                "Compressibility Factor: $Z = \\frac{P V}{R T}$.",
                "Exam Scoring Tip: For an isenthalpic throttling expansion, a real gas cools only if initial temperature is below its maximum Joule-Thomson inversion temperature ($T < T_{inv}$)."
        ]
},
    ('Chemical Engineering Thermodynamics — I', 2): {
        "title": "PVT Behavior",
        "highlights": [
                "Equations of State (EOS) for Pure Fluids: Mathematical relations connecting state variables $P, V, T$; Ideal gas law $P V = R T$ valid only at low pressures ($P \\to 0$) and elevated temperatures ($T \\gg T_c$).",
                "Van der Waals Equation of State: $\\left(P + \\frac{a}{V^2}\\right)(V - b) = R T$; Accounts for intermolecular attractive forces (internal pressure correction $a/V^2$) and finite molecular co-volume ($b$); Cubic polynomial in molar volume $V$.",
                "Critical Point Conditions: Critical isotherm exhibits horizontal inflection point on $P-V$ diagram: $\\left(\\frac{\\partial P}{\\partial V}\\right)_{T_c} = 0$ and $\\left(\\frac{\\partial^2 P}{\\partial V^2}\\right)_{T_c} = 0$; Van der Waals parameters: $a = \\frac{27 R^2 T_c^2}{64 P_c}, b = \\frac{R T_c}{8 P_c}$; Critical compressibility $Z_c = \\frac{P_c V_c}{R T_c} = \\frac{3}{8} = 0.375$.",
                "Redlich-Kwong (RK) Equation of State: $P = \\frac{R T}{V - b} - \\frac{a}{\\sqrt{T} V (V + b)}$; Substantially improves vapor-phase density predictions; Critical parameters: $a = 0.42748 \\frac{R^2 T_c^{2.5}}{P_c}$ and $b = 0.08664 \\frac{R T_c}{P_c}$ with $Z_c = 1/3 = 0.333$.",
                "Soave-Redlich-Kwong (SRK) & Peng-Robinson (PR) EOS: Modern cubic EOS incorporating Pitzer's acentric factor $\\omega$; Peng-Robinson: $P = \\frac{R T}{V - b} - \\frac{a(T)}{V(V + b) + b(V - b)}$; Widely used in petrochemical simulation for vapor-liquid equilibria (VLE) of non-polar hydrocarbons ($Z_c = 0.307$).",
                "Virial Equation of State: Power series expansion in pressure or molar density: $Z = 1 + B' P + C' P^2 + \\dots = 1 + \\frac{B}{V} + \\frac{C}{V^2} + \\dots$; Second virial coefficient $B(T)$ accounts for two-body intermolecular interactions; Third coefficient $C(T)$ accounts for three-body interactions.",
                "Boyle Temperature ($T_B$): Temperature at which second virial coefficient vanishes ($B(T_B) = 0$); Fluid obeys ideal gas law over wide pressure range up to several atmospheres ($Z \\approx 1.0$).",
                "Generalized Compressibility Charts: Nelson-Obert charts expressing $Z$ as universal function of reduced pressure $P_r = P / P_c$ and reduced temperature $T_r = T / T_c$; Three-parameter corresponding states: $Z = Z^{(0)} + \\omega Z^{(1)}$.",
                "Acentric Factor ($\\omega$): Pitzer's metric for molecular non-sphericity: $\\omega = -\\log_{10}(P_r^{\\text{sat}})_{T_r = 0.7} - 1.000$; $\\omega = 0$ for noble gases (argon, krypton, xenon); Increases for complex, elongated, or polar molecules.",
                "University Examination Strategy: Derive Van der Waals constants $a, b$ and critical compressibility factor $Z_c = 3/8$ from critical inflection criteria, and calculate molar volume of real gas using the Virial equation."
        ],
        "keyPoints": [
                "Van der Waals EOS: $\\left(P + \\frac{a}{V^2}\\right)(V - b) = R T$.",
                "Critical Point Conditions: $\\left(\\frac{\\partial P}{\\partial V}\\right)_{T_c} = 0, \\quad \\left(\\frac{\\partial^2 P}{\\partial V^2}\\right)_{T_c} = 0$.",
                "Van der Waals Constant $a$: $a = \\frac{27 R^2 T_c^2}{64 P_c}$.",
                "Van der Waals Constant $b$: $b = \\frac{R T_c}{8 P_c}$.",
                "Van der Waals Critical Compressibility: $Z_c = \\frac{P_c V_c}{R T_c} = \\frac{3}{8} = 0.375$.",
                "Redlich-Kwong EOS: $P = \\frac{R T}{V - b} - \\frac{a}{\\sqrt{T} V (V + b)}$.",
                "Redlich-Kwong Critical Compressibility: $Z_c = \\frac{1}{3} \\approx 0.333$.",
                "Virial Expansion (Volume): $Z = 1 + \\frac{B(T)}{V} + \\frac{C(T)}{V^2} + \\dots$.",
                "Acentric Factor Formula: $\\omega = -\\log_{10}(P_r^{\\text{sat}})_{T_r = 0.7} - 1.000$.",
                "Exam Scoring Tip: Modern cubic equations of state (SRK, Peng-Robinson) replace the constant $a$ with a temperature-dependent parameter $a(T) = a_c \\alpha(T_r, \\omega)$ to match vapor pressures accurately."
        ]
},
    ('Chemical Engineering Thermodynamics — I', 3): {
        "title": "Heat Effects",
        "highlights": [
                "Sensible Heat Effects: Heat transferred causing temperature change without phase transformation; Molar heat capacity temperature dependency modeled via empirical polynomial: $C_p = A + B T + C T^2 + D T^{-2}$; Sensible heat $\\Delta H = \\int_{T_1}^{T_2} C_p dT$.",
                "Mean Heat Capacity ($C_{p,m}$): Defined such that $\\Delta H = C_{p,m} (T_2 - T_1)$; $C_{p,m} = \\frac{1}{T_2 - T_1} \\int_{T_1}^{T_2} C_p dT = A + \\frac{B}{2}(T_1 + T_2) + \\frac{C}{3}(T_1^2 + T_1 T_2 + T_2^2) + \\frac{D}{T_1 T_2}$.",
                "Latent Heat of Phase Transitions: Enthalpy change during constant-temperature phase change (fusion $\\Delta H_{fus}$, vaporization $\\Delta H_{vap}$, sublimation $\\Delta H_{sub}$); Clapeyron equation: $\\frac{dP^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{T \\Delta V}$.",
                "Clausius-Clapeyron Equation: Neglecting liquid volume ($V_L \\ll V_V$) and assuming ideal gas vapor ($V_V = R T / P^{\\text{sat}}$): $\\frac{d \\ln P^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{R T^2}$; Integrated form: $\\ln\\left(\\frac{P_2^{\\text{sat}}}{P_1^{\\text{sat}}}\\right) = -\\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.",
                "Trouton's & Riedel's Vaporization Rules: Trouton's rule: Entropy of vaporization at normal boiling point is approximately constant for non-polar liquids: $\\Delta S_{vap} = \\frac{\\Delta H_{vap}}{T_b} \\approx 88\\text{ J/(mol}\\cdot\\text{K)}$; Riedel's high-precision correlation incorporating critical properties.",
                "Standard Heat of Reaction ($\\Delta H_R^\\circ$): Enthalpy change when stoichiometric reactants in standard state ($1\\text{ bar}$, $298.15\\text{ K}$) convert completely to products in standard state: $\\Delta H_R^\\circ = \\sum \\nu_i \\Delta H_{f, i}^\\circ$, where $\\nu_i$ is stoichiometric coefficient ($+$ for products, $-$ for reactants).",
                "Hess's Law of Constant Heat Summation: Overall enthalpy change for chemical reaction sequence equals algebraic sum of enthalpy changes of individual reaction steps, independent of pathway.",
                "Kirchhoff's Law for Temperature Dependency: Variation of reaction enthalpy with temperature: $\\frac{d(\\Delta H_R^\\circ)}{dT} = \\Delta C_p^\\circ$; Integrated form: $\\Delta H_R^\\circ(T) = \\Delta H_R^\\circ(T_0) + \\int_{T_0}^T \\Delta C_p^\\circ dT$, where $\\Delta C_p^\\circ = \\sum \\nu_i C_{p, i}^\\circ$.",
                "Standard Heat of Combustion ($\\Delta H_c^\\circ$) & Heating Values: Higher Heating Value (HHV, liquid water product) vs Lower Heating Value (LHV, water vapor product); Adiabatic flame temperature $T_{ad}$ (maximum temperature attained in combustion chamber without heat loss, solved by $\\Delta H_R^\\circ(T_0) + \\int_{T_0}^{T_{ad}} \\sum n_{\\text{prod}} C_{p, \\text{prod}} dT = 0$).",
                "University Examination Strategy: Calculate standard enthalpy of reaction using standard heats of formation, integrate Kirchhoff's equation to find $\\Delta H_R$ at $800\\text{ K}$, and calculate the adiabatic flame temperature of a fuel gas."
        ],
        "keyPoints": [
                "Sensible Enthalpy Integral: $\\Delta H = \\int_{T_1}^{T_2} C_p dT$.",
                "Clapeyron Phase Boundary Equation: $\\frac{dP^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{T (V_V - V_L)}$.",
                "Clausius-Clapeyron Formula: $\\frac{d\\ln P^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{R T^2}$.",
                "Integrated Clausius-Clapeyron: $\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{vap}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.",
                "Trouton's Empirical Ratio: $\\frac{\\Delta H_{vap}}{T_b} \\approx 88\\text{ J/(mol}\\cdot\\text{K)}$.",
                "Standard Reaction Enthalpy: $\\Delta H_R^\\circ = \\sum \\nu_i \\Delta H_{f, i}^\\circ$.",
                "Kirchhoff's Law Differential: $\\frac{d(\\Delta H_R^\\circ)}{dT} = \\Delta C_p^\\circ = \\sum \\nu_i C_{p, i}^\\circ$.",
                "Integrated Kirchhoff Equation: $\\Delta H_R(T) = \\Delta H_R(T_0) + \\int_{T_0}^T \\Delta C_p dT$.",
                "Adiabatic Flame Temperature Balance: $\\Delta H_R(T_0) + \\int_{T_0}^{T_{ad}} \\sum n_p C_{p, p} dT = 0$.",
                "Exam Scoring Tip: In calculating adiabatic flame temperature, nitrogen present in air must be included in the product heat capacity integral even though it does not participate chemically."
        ]
},
    ('Chemical Engineering Thermodynamics — I', 4): {
        "title": "Entropy",
        "highlights": [
                "Mathematical Definition of Entropy ($S$): State variable defined by Clausius for reversible differential heat transfer: $dS = \\frac{\\delta Q_{rev}}{T}$; Unit $\\text{J/(mol}\\cdot\\text{K)}$; Line integral of $dS$ around any reversible closed cycle is identically zero: $\\oint \\frac{\\delta Q_{rev}}{T} = 0$.",
                "Clausius Inequality: For any real (irreversible) thermodynamic cycle: $\\oint \\frac{\\delta Q}{T} \\le 0$; Equality holds strictly for reversible cycles; Inequality holds for irreversible cycles.",
                "Principle of Entropy Generation / Increase of Entropy: For isolated system, total entropy change $\\Delta S_{\\text{total}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} = S_{gen} \\ge 0$; Entropy generation $S_{gen} > 0$ for all real spontaneous natural processes; $S_{gen} = 0$ for reversible processes.",
                "Entropy Changes for Ideal Gas: $dS = C_v \\frac{dT}{T} + R \\frac{dV}{V} = C_p \\frac{dT}{T} - R \\frac{dP}{P}$; Integrated expressions: $\\Delta S = C_p \\ln(T_2 / T_1) - R \\ln(P_2 / P_1) = C_v \\ln(T_2 / T_1) + R \\ln(V_2 / V_1)$.",
                "Entropy of Phase Transitions: Reversible isothermal phase transformation at constant temperature and pressure: $\\Delta S = \\frac{\\Delta H}{T}$; e.g. melting of ice $\\Delta S_{fus} = \\Delta H_{fus} / T_m$.",
                "Third Law of Thermodynamics & Absolute Entropy: Nernst Heat Theorem; The entropy of every pure crystalline substance in complete internal thermodynamic equilibrium is zero at absolute zero temperature ($S \\to 0$ as $T \\to 0\\text{ K}$); Enables determination of absolute entropy $S_T^\\circ = \\int_0^T \\frac{C_p}{T} dT$.",
                "Lost Work & Gouy-Stodola Theorem: Irreversibility and exergy destruction rate in steady-flow processes: $W_{\\text{lost}} = T_0 S_{gen} = T_0 \\Delta S_{\\text{total}}$, where $T_0$ is surroundings ambient temperature; Direct link between entropy generation and lost useful work.",
                "Isentropic Efficiencies in Industrial Turbomachinery: Compressor isentropic efficiency $\\eta_c = \\frac{W_s^{\\text{rev}}}{W_s^{\\text{actual}}} = \\frac{H_{2s} - H_1}{H_2 - H_1}$; Turbine isentropic efficiency $\\eta_t = \\frac{W_s^{\\text{actual}}}{W_s^{\\text{rev}}} = \\frac{H_1 - H_2}{H_1 - H_{2s}}$.",
                "Temperature-Entropy ($T-S$) Diagrams: Area under reversible process path represents heat transferred: $Q_{rev} = \\int T dS$; Carnot cycle appears as neat rectangle on $T-S$ plot.",
                "University Examination Strategy: Prove the Clausius inequality using an auxiliary Carnot engine, calculate entropy change for mixing two fluids at different temperatures, and determine lost work using the Gouy-Stodola theorem."
        ],
        "keyPoints": [
                "Entropy Differential Definition: $dS = \\frac{\\delta Q_{rev}}{T}$.",
                "Clausius Inequality: $\\oint \\frac{\\delta Q}{T} \\le 0$.",
                "Total Entropy Generation: $\\Delta S_{\\text{total}} = \\Delta S_{sys} + \\Delta S_{surr} = S_{gen} \\ge 0$.",
                "Ideal Gas Entropy ($T$ and $P$): $\\Delta S = C_p \\ln\\left(\\frac{T_2}{T_1}\\right) - R \\ln\\left(\\frac{P_2}{P_1}\\right)$.",
                "Ideal Gas Entropy ($T$ and $V$): $\\Delta S = C_v \\ln\\left(\\frac{T_2}{T_1}\\right) + R \\ln\\left(\\frac{V_2}{V_1}\\right)$.",
                "Phase Change Entropy: $\\Delta S_{tr} = \\frac{\\Delta H_{tr}}{T_{tr}}$.",
                "Third Law Axiom: $\\lim_{T \\to 0\\text{ K}} S = 0$ for perfect crystalline solids.",
                "Gouy-Stodola Lost Work: $W_{\\text{lost}} = T_0 S_{gen}$.",
                "Turbine Isentropic Efficiency: $\\eta_t = \\frac{H_1 - H_2}{H_1 - H_{2s}}$.",
                "Exam Scoring Tip: Heat addition to an isothermal reservoir alters surroundings entropy by $\\Delta S_{surr} = -Q / T_{surr}$ regardless of whether the internal system process was reversible or irreversible."
        ]
},
    ('Chemical Engineering Thermodynamics — I', 5): {
        "title": "Gibbs Free Energy",
        "highlights": [
                "Thermodynamic Potentials & Fundamental Property Relations: Internal energy $dU = T dS - P dV$; Enthalpy $dH = T dS + V dP$; Helmholtz free energy $A = U - T S \\implies dA = -S dT - P dV$; Gibbs free energy $G = H - T S \\implies dG = -S dT + V dP$.",
                "Maxwell's Thermodynamic Relations: Derived from exact differentials of $U, H, A, G$: (1) $\\left(\\frac{\\partial T}{\\partial V}\\right)_S = -\\left(\\frac{\\partial P}{\\partial S}\\right)_V$; (2) $\\left(\\frac{\\partial T}{\\partial P}\\right)_S = \\left(\\frac{\\partial V}{\\partial S}\\right)_P$; (3) $\\left(\\frac{\\partial P}{\\partial T}\\right)_V = \\left(\\frac{\\partial S}{\\partial V}\\right)_T$; (4) $\\left(\\frac{\\partial V}{\\partial T}\\right)_P = -\\left(\\frac{\\partial S}{\\partial P}\\right)_T$.",
                "Gibbs Energy as Spontaneity & Equilibrium Criterion: At constant temperature and pressure ($T, P$), differential $dG_{T, P} \\le 0$; $dG < 0$ denotes spontaneous natural process; $dG = 0$ defines thermodynamic equilibrium; Gibbs energy is minimized at equilibrium.",
                "Helmholtz Free Energy Criterion: At constant temperature and volume ($T, V$), differential $dA_{T, V} \\le 0$; Equilibrium attained when Helmholtz energy is minimized; $dA = -dW_{max}$ represents maximum work obtainable.",
                "Residual Properties ($M^R$): Difference between real fluid molar property and ideal gas property at same $T$ and $P$: $M^R(T, P) = M(T, P) - M^{ig}(T, P)$; Residual Gibbs energy $\\frac{G^R}{R T} = \\int_0^P (Z - 1) \\frac{dP}{P}$; Residual enthalpy $\\frac{H^R}{R T} = -T \\int_0^P \\left(\\frac{\\partial Z}{\\partial T}\\right)_P \\frac{dP}{P}$.",
                "Fugacity & Fugacity Coefficient of Pure Species: Fugacity $f$ has pressure units, replacing pressure in real fluids: $dG = R T d\\ln f$ at constant $T$; Fugacity coefficient $\\phi = f / P$; $\\lim_{P \\to 0} \\phi = 1.0$; Evaluated from equation of state: $\\ln\\phi = \\int_0^P (Z - 1) \\frac{dP}{P}$.",
                "Fugacity of Pure Liquids & Poynting Correction: At saturation vapor-liquid equilibrium: $f^L(T, P^{\\text{sat}}) = f^V(T, P^{\\text{sat}}) = \\phi^{\\text{sat}} P^{\\text{sat}}$; Compressed liquid fugacity at pressure $P > P^{\\text{sat}}$: $f^L(T, P) = \\phi^{\\text{sat}} P^{\\text{sat}} \\exp\\left[\\frac{V_L (P - P^{\\text{sat}})}{R T}\\right]$.",
                "Chemical Potential ($\\mu_i$): Partial molar Gibbs energy: $\\mu_i = \\left(\\frac{\\partial G}{\\partial n_i}\\right)_{T, P, n_{j \\ne i}}$; Fundamental criterion for phase equilibrium: chemical potential of each component must be identical across all coexisting phases: $\\mu_i^\\alpha = \\mu_i^\\beta = \\dots = \\mu_i^\\pi$.",
                "Gibbs-Helmholtz Equation: Temperature dependency of Gibbs free energy: $\\left[\\frac{\\partial(G/T)}{\\partial T}\\right]_P = -\\frac{H}{T^2}$ or $\\left[\\frac{\\partial(\\Delta G^\\circ / T)}{\\partial T}\\right]_P = -\\frac{\\Delta H^\\circ}{T^2}$; Links equilibrium constant temperature variation (van 't Hoff equation) to reaction enthalpy.",
                "University Examination Strategy: Derive the four Maxwell relations using cross-differentiation of state functions, calculate the fugacity coefficient using a given EOS, and formulate the Poynting correction factor."
        ],
        "keyPoints": [
                "Fundamental Property Relation for $G$: $dG = -S dT + V dP$.",
                "Fourth Maxwell Relation: $\\left(\\frac{\\partial V}{\\partial T}\\right)_P = -\\left(\\frac{\\partial S}{\\partial P}\\right)_T$.",
                "Third Maxwell Relation: $\\left(\\frac{\\partial P}{\\partial T}\\right)_V = \\left(\\frac{\\partial S}{\\partial V}\\right)_T$.",
                "Gibbs Spontaneity Criterion: $dG_{T, P} \\le 0$ ($dG = 0$ at equilibrium).",
                "Residual Gibbs Free Energy: $\\frac{G^R}{R T} = \\int_0^P (Z - 1) \\frac{dP}{P}$.",
                "Fugacity Coefficient Integral: $\\ln\\phi = \\int_0^P (Z - 1) \\frac{dP}{P}$.",
                "Poynting Correction Factor: $\\exp\\left[\\frac{V_L(P - P^{\\text{sat}})}{R T}\\right]$.",
                "Phase Equilibrium Criterion: $\\mu_i^\\alpha = \\mu_i^\\beta$ for all components $i$.",
                "Gibbs-Helmholtz Equation: $\\left[\\frac{\\partial(G/T)}{\\partial T}\\right]_P = -\\frac{H}{T^2}$.",
                "Exam Scoring Tip: The Poynting factor accounts for the effect of total pressure exceeding saturation pressure on liquid fugacity and is significant only at high pressures ($>20\\text{ bar}$)."
        ]
},
    ('Organic Chemistry', 1): {
        "title": "Reaction Mechanisms",
        "highlights": [
                "Types of Organic Reaction Intermediates: Carbocations ($sp^2$ hybridized, planar, stability order: tertiary > secondary > primary > methyl, stabilized by hyperconjugation and $+I$ inductive effect), Carbanions ($sp^3$ pyramidal, stability order: methyl > primary > secondary > tertiary), Carbon free radicals (neutral, planar), and Carbenes ($:CH_2$, singlet vs triplet).",
                "Nucleophilic Aliphatic Substitution ($S_N1$ vs $S_N2$): $S_N2$ (bimolecular, single-step concerted mechanism, backside attack, complete Walden inversion, rate $= k[RX][Nu^-]$, favored by primary halides and polar aprotic solvents); $S_N1$ (unimolecular, two-step via planar carbocation intermediate, partial racemization, rate $= k[RX]$, favored by tertiary halides and polar protic solvents).",
                "Elimination Reactions ($E1$ vs $E2$): $E2$ (bimolecular, concerted anti-periplanar geometry, rate $= k[RX][B^-]$); $E1$ (unimolecular, carbocation intermediate); Regioselectivity governed by Zaitsev's rule (predominance of more substituted, thermodynamically stable alkene) vs Hofmann rule (sterically hindered bases yield less substituted alkene).",
                "Electrophilic Aromatic Substitution (EAS): Benzene $\\pi$-electron cloud attacks electrophile $E^+$ forming resonance-stabilized arenium ion (Wheland intermediate / $\\sigma$-complex) followed by proton loss; Nitration ($HNO_3/H_2SO_4$, electrophile $NO_2^+$), Halogenation ($Br_2/FeBr_3$), Sulfonation ($SO_3/H_2SO_4$), and Friedel-Crafts alkylation and acylation.",
                "Directing Effects & Substituent Activation: Activating groups (ortho/para-directing, electron-donating via resonance $+M$ or induction $+I$, e.g. $-OH, -NH_2, -OCH_3, -CH_3$); Deactivating groups (meta-directing, electron-withdrawing via $-M$ or $-I$, e.g. $-NO_2, -CN, -COOH, -CHO$); Halogens are deactivating but ortho/para-directing due to competing induction vs resonance.",
                "Electrophilic Addition to Alkenes: Addition of hydrogen halides ($HX$); Markovnikov's rule (electrophilic proton adds to carbon with more hydrogen atoms to yield more stable carbocation intermediate); Anti-Markovnikov addition of $HBr$ under peroxide presence (Kharasch effect, free radical chain mechanism involving bromine radicals).",
                "Nucleophilic Addition to Carbonyl Groups: Polar carbonyl bond ($>C^{\\delta+} = O^{\\delta-}$); Addition of Grignard reagents ($RMgX$), hydrogen cyanide ($HCN$, forming cyanohydrins), sodium bisulfite, and alcohols (forming hemiacetals and acetals).",
                "Neighboring Group Participation (NGP) & Anchimeric Assistance: Internal nucleophile within substrate accelerates reaction rate via cyclic transition state, resulting in net retention of configuration rather than inversion.",
                "Pericyclic Reactions & Woodward-Hoffmann Rules: Concerted reactions occurring through cyclic transition states governed by orbital symmetry; Electrocyclic reactions, Cycloadditions (Diels-Alder $[4+2]$ cycloaddition between conjugated diene and dienophile), and Sigmatropic rearrangements (Cope and Claisen rearrangements).",
                "University Examination Strategy: Differentiate $S_N1$ vs $S_N2$ in a comparative table with energy profiles and stereochemical outcomes, state Zaitsev vs Hofmann elimination rules with examples, and draw resonance structures of the Wheland intermediate."
        ],
        "keyPoints": [
                "$S_N2$ Rate Law: Rate $= k[RX][Nu^-]$ (second-order, one-step concerted).",
                "$S_N1$ Rate Law: Rate $= k[RX]$ (first-order, carbocation rate-determining step).",
                "Walden Inversion: Complete stereochemical inversion of configuration during $S_N2$ backside displacement.",
                "Zaitsev's Elimination Rule: Base abstracts proton to yield the most highly substituted, stable alkene.",
                "Hofmann Elimination Rule: Bulky bases abstract least hindered proton, yielding less substituted terminal alkene.",
                "EAS Nitronium Electrophile: Generation: $HNO_3 + 2H_2SO_4 \\rightleftharpoons NO_2^+ + H_3O^+ + 2HSO_4^-$.",
                "Markovnikov's Addition Rule: Electrophile adds to form the more stable secondary or tertiary carbocation.",
                "Peroxide Effect Specificity: Operates strictly for $HBr$ (not $HCl$ or $HI$ due to unfavorable reaction energetics).",
                "Diels-Alder Reaction: $[4\\pi + 2\\pi]$ concerted cycloaddition yielding cyclohexene rings.",
                "Exam Scoring Tip: Halogens ($-F, -Cl, -Br, -I$) are deactivating due to strong $-I$ inductive pull, yet ortho/para-directing due to $+M$ resonance lone pair donation."
        ]
},
    ('Organic Chemistry', 2): {
        "title": "Functional Groups",
        "highlights": [
                "Alcohols, Phenols & Ethers: Alcohols (primary, secondary, tertiary; Lucas test using anhydrous $ZnCl_2/HCl$ to distinguish: tertiary clouds instantly, secondary in 5 minutes, primary remains clear); Phenols (more acidic than alcohols due to phenoxide resonance stabilization; react with neutral $FeCl_3$ to yield violet complex); Ethers (Williamson ether synthesis: $R-X + R'-O^- Na^+ \\to R-O-R' + NaX$).",
                "Aldehydes & Ketones: Characterized by carbonyl group ($>C=O$); Oxidation with Tollens' reagent (silver mirror test) and Fehling's solution (red $Cu_2O$ precipitate) distinguishes aldehydes from ketones; Haloform reaction ($I_2/NaOH$) detects methyl ketones ($-COCH_3$) via yellow iodoform ($CHI_3$).",
                "Aldol Condensation & Cannizzaro Reaction: Aldol condensation: Carbonyl compounds with $\\alpha$-hydrogen under dilute base form $\\beta$-hydroxyaldehydes/ketones which dehydrate to $\\alpha,\\beta$-unsaturated compounds; Cannizzaro reaction: Carbonyl compounds lacking $\\alpha$-hydrogen ($HCHO$, benzaldehyde) undergo base-catalyzed disproportionation into alcohol and carboxylate salt.",
                "Carboxylic Acids & Acidity Factors: Resonance stabilization of carboxylate anion ($-COO^-$); Acidity increased by electron-withdrawing substituents via inductive effect (e.g. $Cl_3CCOOH > Cl_2CHCOOH > ClCH_2COOH > CH_3COOH$); Hell-Volhard-Zelinsky (HVZ) $\\alpha$-halogenation reaction using $Br_2/P$.",
                "Carboxylic Acid Derivatives: Acyl chlorides ($-COCl$, most reactive), Acid anhydrides ($-(CO)_2O$), Esters ($-COOR$, sweet fruity odor, Fischer esterification), and Amides ($-CONH_2$, least reactive due to strong nitrogen resonance conjugation); Relative reactivity toward nucleophilic acyl substitution.",
                "Amines & Diazonium Salts: Classification (primary, secondary, tertiary); Basicity order in aqueous solution ($2^\\circ > 1^\\circ > 3^\\circ > NH_3$ for methyl amines); Hinsberg test with benzenesulfonyl chloride separates $1^\\circ, 2^\\circ, 3^\\circ$ amines; Primary aromatic amines react with $HNO_2$ at $0-5^\\circ\\text{C}$ to form stable arenediazonium salts ($Ar-N_2^+ Cl^-$).",
                "Synthetic Utility of Arenediazonium Salts: Sandmeyer reaction (conversion to chlorobenzene, bromobenzene, benzonitrile using $CuCl, CuBr, CuCN$); Schiemann reaction (fluorobenzene via $HBF_4$); Azo coupling with phenols and anilines at alkaline/acidic pH to form bright azo dyes.",
                "Nitro Compounds & Reduction Pathways: Nitrobenzene reduced by catalytic hydrogenation or $Sn/HCl$ to aniline; Selective reduction of $m$-dinitrobenzene to $m$-nitroaniline using ammonium sulfide (Zinin reduction).",
                "Grignard Reagents in Synthetic Transformations: Organomagnesium halides ($R-MgX$); Reaction with formaldehyde yields primary alcohol; with other aldehydes yields secondary alcohol; with ketones yields tertiary alcohol; with $CO_2$ yields carboxylic acid.",
                "University Examination Strategy: Differentiate primary, secondary, and tertiary alcohols using Lucas test, detail the mechanism of Aldol condensation vs Cannizzaro reaction, and outline synthetic steps starting from benzenediazonium chloride."
        ],
        "keyPoints": [
                "Lucas Reagent Composition: Equimolar anhydrous $ZnCl_2$ dissolved in concentrated hydrochloric acid ($HCl$).",
                "Tollens' Test Equation: $R-CHO + 2[Ag(NH_3)_2]^+ + 3OH^- \\to R-COO^- + 2Ag\\downarrow + 4NH_3 + 2H_2O$.",
                "Iodoform Positive Structural Unit: Requires terminal methyl carbonyl group ($CH_3-C=O$) or methyl carbinol ($CH_3-CH(OH)-$).",
                "Williamson Ether Synthesis: $R-O^- Na^+ + R'-X \\to R-O-R' + NaX$ ($S_N2$ mechanism, $R'-X$ must be unhindered).",
                "Cannizzaro Disproportionation: $2Ar-CHO + OH^- \\to Ar-COO^- + Ar-CH_2OH$ (requires zero $\\alpha$-hydrogens).",
                "Acid Halide Reactivity Order: Acyl chloride > Acid anhydride > Ester > Amide.",
                "Sandmeyer Halogenation: $Ar-N_2^+ Cl^- \\xrightarrow{CuCl/HCl} Ar-Cl + N_2\\uparrow$.",
                "Azo Coupling Reaction: $Ar-N_2^+ + C_6H_5OH \\xrightarrow{pH\\,9-10} Ar-N=N-C_6H_4-OH$ (p-hydroxyazobenzene orange dye).",
                "Grignard Reagent Formaldehyde Addition: $HCHO + RMgX \\to R-CH_2-OMgX \\xrightarrow{H_2O} R-CH_2OH$ (primary alcohol).",
                "Exam Scoring Tip: Amides are the least reactive acid derivatives because the nitrogen lone pair strongly donates into the carbonyl carbon, reducing its electrophilic character."
        ]
},
    ('Organic Chemistry', 3): {
        "title": "Stereochemistry",
        "highlights": [
                "Constitutional vs Stereoisomerism: Constitutional isomers (different atom connectivity: chain, positional, functional, metamerism, tautomerism); Stereoisomers (identical connectivity, different spatial arrangement: conformational vs configurational).",
                "Conformational Analysis of Acyclic Alkanes: Ethane (staggered vs eclipsed conformers, torsional strain $12\\text{ kJ/mol}$); n-Butane rotation around C2-C3 bond: Anti-periplanar (fully staggered, global energy minimum), Gauche (staggered, steric strain $3.8\\text{ kJ/mol}$), Eclipsed, and Fully eclipsed (syn-periplanar, maximum potential energy, $19\\text{ kJ/mol}$).",
                "Conformations of Cyclohexane: Planar ring angle strain ($120^\\circ$ vs ideal tetrahedral $109.5^\\circ$); Chair conformation (completely strain-free, zero angle and torsional strain); Boat conformation (flagpole interactions and eclipsed bonds); Half-chair and Twist-boat conformations.",
                "Equatorial vs Axial Substituted Cyclohexanes: Axial substituents experience 1,3-diaxial steric repulsions; Equatorial substituents orient outward into open space; Conformational free energy difference $\\Delta G^\\circ = -R T \\ln K$; Methylcyclohexane exists $95\\%$ in equatorial chair at equilibrium.",
                "Optical Activity & Chirality: Chiral molecule lacks plane of symmetry ($\\sigma$) and center of inversion ($i$); Rotates plane-polarized light measured by polarimeter; Specific optical rotation $[\u0007lpha]_\\lambda^T = \\frac{\\alpha}{l \\cdot c}$, where $\\alpha$ is observed rotation, $l$ is path length in dm, and $c$ is concentration in g/mL.",
                "Enantiomers vs Diastereomers: Enantiomers (non-superimposable mirror images, identical physical/chemical properties in achiral environment, equal and opposite optical rotation); Diastereomers (stereoisomers that are not mirror images, different melting points, boiling points, and chromatographic retention factors).",
                "Meso Compounds & Racemic Mixtures: Meso compound (contains internal plane of symmetry despite chiral centers, optically inactive by internal compensation, e.g. meso-tartaric acid); Racemic mixture ($(\\pm)$ or $dl$, equimolar mixture of enantiomers, optically inactive by external compensation).",
                "Cahn-Ingold-Prelog (CIP) Priority Rules & $R/S$ Nomenclature: Priorities assigned by atomic number directly attached to stereocenter; If tied, compare along chain; Multiple bonds treated by duplicating atoms; View with lowest priority group (4) oriented away from observer: Clockwise $1 \\to 2 \\to 3$ is $(R)$, counterclockwise is $(S)$.",
                "Geometric Isomerism ($E/Z$ System): Restricted rotation around double bonds or rings; CIP priorities applied to each end of double bond: $(Z)$ (zusammen, higher priority groups on same side) vs $(E)$ (entgegen, higher priority groups on opposite sides).",
                "University Examination Strategy: Draw the potential energy diagram for n-butane rotation labeling all 4 conformers, assign $(R)$ or $(S)$ configurations to Fischer projections of tartaric acid, and draw chair conformations of trans-1,4-dimethylcyclohexane."
        ],
        "keyPoints": [
                "Specific Optical Rotation Formula: $[\u0007lpha]_\\lambda^T = \\frac{\\alpha}{l \\cdot c}$ (with $l$ in dm, $c$ in g/mL).",
                "Total Number of Stereoisomers: $2^n$ for unsymmetrical molecules with $n$ chiral stereocenters.",
                "Tartaric Acid Meso Condition: $(2R, 3S)$-tartaric acid has internal mirror plane, rendering it optically inactive.",
                "Ethane Torsional Barrier: $12.5\\text{ kJ/mol}$ barrier separating staggered from eclipsed forms.",
                "n-Butane Gauche Strain: Steric repulsion between methyl groups contributes $3.8\\text{ kJ/mol}$.",
                "Cyclohexane Chair Angle: Exactly $109.5^\\circ$ tetrahedral bond angles throughout ring.",
                "1,3-Diaxial Repulsion: Equivalent to two gauche-butane interactions for axial methyl group ($7.5\\text{ kJ/mol}$).",
                "CIP Priority Rule 1: Higher atomic number takes precedence ($I > Br > Cl > S > F > O > N > C > H$).",
                "Geometric $E/Z$ Notation: $(Z)$ has priority groups on same side; $(E)$ has priority groups across double bond.",
                "Exam Scoring Tip: In Fischer projections, if lowest priority group (4) is on a horizontal bond, the apparent $(R/S)$ configuration must be reversed."
        ]
},
    ('Organic Chemistry', 4): {
        "title": "Polymer Formation",
        "highlights": [
                "Classification of Polymerization Mechanisms: Chain-growth (addition) polymerization vs Step-growth (condensation) polymerization; Monomer functionality (bifunctional monomers form linear chains, polyfunctional monomers form 3D cross-linked networks).",
                "Free Radical Addition Polymerization: Three fundamental steps: (1) Initiation (thermal/photochemical cleavage of initiator, e.g. benzoyl peroxide or AIBN to generate primary free radicals $R^\\bullet$, followed by radical addition to monomer); (2) Propagation (rapid successive chain growth); (3) Termination (by combination $R_n^\\bullet + R_m^\\bullet \\to P_{n+m}$ or disproportionation).",
                "Kinetics of Free Radical Polymerization: Steady-state approximation for radical intermediate concentration ($R_i = R_t$); Overall rate of polymerization $R_p = k_p [M] \\sqrt{\\frac{f k_d [I]}{k_t}}$; First-order in monomer concentration and half-order in initiator concentration.",
                "Ionic Chain Polymerization: Cationic polymerization (initiated by Lewis acids $BF_3, AlCl_3$ with traces of water, carbocation propagating active center, favored by electron-rich monomers e.g. isobutylene to make butyl rubber); Anionic polymerization (initiated by organolithium bases $n-BuLi$, carbanion active center, electron-withdrawing monomers e.g. styrene, acrylonitrile).",
                "Living Polymerization & Block Copolymers: Anionic polymerization conducted in absence of impurities exhibits zero spontaneous termination or chain transfer; Chains remain active indefinitely until more monomer is added; Yields narrow molecular weight distribution ($PDI \\to 1.0$) and monodisperse block copolymers.",
                "Coordination Polymerization & Ziegler-Natta Catalysts: Stereospecific polymerization of $\\alpha$-olefins; Heterogeneous catalyst system: Titanium tetrachloride ($TiCl_4$) and Triethylaluminum ($Al(C_2H_5)_3$); Produces linear high-density polyethylene (HDPE) and strictly isotactic polypropylene (i-PP) at low pressure.",
                "Step-Growth (Condensation) Polymerization: Reaction occurs between bifunctional monomers with elimination of small condensate ($H_2O, HCl, CH_3OH$); Monomers disappear early, forming dimers, trimers, oligomers; High molecular weight achieved only at very high conversion ($p > 99\\%$).",
                "Carothers' Equation for Step Polymerization: Number-average degree of polymerization $\\bar{X}_n = \\frac{1}{1 - p}$, where $p$ is fractional extent of reaction; Gel point in polyfunctional cross-linking systems: $p_c = \\frac{2}{f_{\\text{avg}}}$, where critical conversion $p_c$ marks onset of infinite network gelation.",
                "Industrial Synthesis of Key Polymers: Nylon 6,6 (hexamethylenediamine + adipic acid), Polyethylene terephthalate (PET, ethylene glycol + dimethyl terephthalate), Bakelite (phenol + formaldehyde step condensation resin via novolac and resole intermediates), and Polyurethanes.",
                "University Examination Strategy: Derive the kinetic rate expression for free radical polymerization $R_p \\propto [M][I]^{1/2}$, derive Carothers' equation $\\bar{X}_n = 1/(1-p)$, and explain the stereospecific mechanism of Ziegler-Natta catalysis."
        ],
        "keyPoints": [
                "Carothers' Polymerization Equation: $\\bar{X}_n = \\frac{1}{1 - p}$ (where $p$ is extent of reaction).",
                "Gel Point Conversion: $p_c = \\frac{2}{f_{\\text{avg}}}$ (marks transition to insoluble cross-linked gel).",
                "Free Radical Polymerization Rate: $R_p = k_p [M] \\sqrt{\\frac{f k_d [I]}{k_t}}$.",
                "Kinetic Chain Length: $\\nu = \\frac{R_p}{R_i} = \\frac{k_p [M]}{2 \\sqrt{f k_d k_t [I]}}$.",
                "Ziegler-Natta Catalyst System: $TiCl_4 + Al(C_2H_5)_3$ (organometallic coordination complex).",
                "Ziegler-Natta Advantage: Produces unbranched isotactic polypropylene without branching.",
                "Nylon 6,6 Monomers: Hexamethylenediamine ($H_2N-(CH_2)_6-NH_2$) and Adipic acid ($HOOC-(CH_2)_4-COOH$).",
                "PET Ester Linkage: Transesterification of Dimethyl terephthalate with Ethylene glycol.",
                "Bakelite Prepolymer: Novolac (acid-catalyzed linear chain) vs Resole (base-catalyzed cross-linkable network).",
                "Exam Scoring Tip: In free radical polymerization, increasing initiator concentration raises the polymerization rate $R_p$ but decreases the average polymer molecular weight $\\bar{X}_n$."
        ]
},
    ('Organic Chemistry', 5): {
        "title": "Industrial Organic Chemicals",
        "highlights": [
                "Petrochemical Feedstocks & Steam Cracking: Thermal pyrolysis of naphtha, ethane, and propane in tubular furnaces at $750-850^\\circ\\text{C}$ in presence of steam; Produces chemical building blocks: ethylene ($C_2H_4$), propylene ($C_3H_6$), butadiene ($C_4H_6$), and BTX aromatics (benzene, toluene, xylene).",
                "Industrial Ethylene Derivatives: Ethylene oxide (heterogeneous vapor-phase catalytic oxidation over silver catalyst $Ag/Al_2O_3$: $C_2H_4 + 0.5O_2 \\to C_2H_4O$), hydration to ethylene glycol (antifreeze, polyester fiber precursor), and oxychlorination to vinyl chloride monomer ($VCM$).",
                "Vinyl Chloride Monomer (VCM) & PVC Manufacture: Balanced vinyl chloride process: Direct chlorination ($C_2H_4 + Cl_2 \\to C_2H_4Cl_2$, ethylene dichloride EDC) and Oxychlorination ($C_2H_4 + 2HCl + 0.5O_2 \\xrightarrow{CuCl_2} C_2H_4Cl_2 + H_2O$); Thermal cracking of EDC at $500^\\circ\\text{C}$ produces $VCM + HCl$; Net zero byproduct $HCl$ consumption.",
                "Industrial Propylene Chemistry: Propylene oxide manufacture (chlorohydrin process vs hydroperoxide PO/TBA or PO/SM co-product processes); Acrylonitrile synthesis via SOHIO ammoxidation: $CH_2=CH-CH_3 + NH_3 + 1.5O_2 \\xrightarrow{\\text{Bi-Mo catalyst}} CH_2=CH-CN + 3H_2O$.",
                "Cumene Process for Phenol & Acetone Synthesis: Modern universal industrial route; Friedel-Crafts alkylation of benzene with propylene to cumene (isopropylbenzene), followed by auto-oxidation with air to cumene hydroperoxide (CHP), and acid-catalyzed cleavage ($H_2SO_4$) to yield stoichiometric phenol and acetone.",
                "Methanol Synthesis & C1 Chemistry: Steam reforming of natural gas to syngas ($CO + 2H_2$); High-pressure catalytic synthesis over $CuO/ZnO/Al_2O_3$ catalyst at $250^\\circ\\text{C}$ and $50-100\\text{ bar}$: $CO + 2H_2 \\rightleftharpoons CH_3OH$; Carbonylation of methanol to acetic acid (Monsanto and Cativa iridium processes).",
                "Industrial Styrene Monomer (SM) Production: Alkylation of benzene with ethylene to ethylbenzene over zeolite catalysts, followed by high-temperature vapor-phase catalytic dehydrogenation over iron oxide catalyst: $C_6H_5-CH_2CH_3 \\rightleftharpoons C_6H_5-CH=CH_2 + H_2$; Highly endothermic, fluidized steam injection.",
                "Phthalic & Maleic Anhydride Production: Vapor-phase catalytic partial oxidation of $o$-xylene or naphthalene over vanadium pentoxide ($V_2O_5$) catalyst to phthalic anhydride; Catalytic oxidation of $n$-butane or benzene over vanadium-phosphorus-oxide (VPO) catalyst to maleic anhydride.",
                "Green Chemistry Principles in Industrial Processes: Twelve Principles of Green Chemistry (Anastas & Warner); Atom economy ($AE = \\frac{\\text{MW of desired product}}{\\sum \\text{MW of all reactants}} \\times 100\\%$); Environmental factor ($E\\text{-factor} = \\frac{\\text{Total mass of waste}}{\\text{Mass of product}}$); Replacement of stoichiometric reagents with recyclable heterogeneous catalysts.",
                "University Examination Strategy: Draw the complete flow mechanism of the balanced VCM process from ethylene and chlorine, explain the industrial Cumene process for phenol and acetone synthesis, and calculate the atom economy of a chemical synthesis."
        ],
        "keyPoints": [
                "Cumene Phenol Reaction: $C_6H_5-CH(CH_3)_2 + O_2 \\to \\text{CHP} \\xrightarrow{H^+} C_6H_5OH + CH_3COCH_3$.",
                "SOHIO Acrylonitrile Synthesis: $C_3H_6 + NH_3 + 1.5O_2 \\to CH_2=CHCN + 3H_2O$ (bismuth-molybdate catalyst).",
                "Methanol Synthesis Reaction: $CO + 2H_2 \\rightleftharpoons CH_3OH$ ($\\\\Delta H = -90.7\\text{ kJ/mol}$, $Cu/ZnO/Al_2O_3$).",
                "Balanced VCM Stoichiometry: $2C_2H_4 + Cl_2 + 0.5O_2 \\to 2CH_2=CHCl + H_2O$ (zero net $HCl$ waste).",
                "Ethylene Oxide Catalyst: Supported silver catalyst ($Ag / \\alpha-Al_2O_3$) with trace chloride promoters.",
                "Styrene Dehydrogenation: $C_6H_5-C_2H_5 \\rightleftharpoons C_6H_5-CH=CH_2 + H_2$ ($Fe_2O_3$ catalyst, endothermic).",
                "Atom Economy Formula: $AE = \\frac{\\text{Molecular Weight of Desired Product}}{\\sum \\text{Molecular Weight of All Reactants}} \\times 100\\%$.",
                "Environmental Factor: $E\\text{-factor} = \\frac{\\text{Total Mass of Waste Generated}}{\\text{Mass of Product Isolated}}$.",
                "Monsanto Acetic Acid Catalyst: Rhodium complex $[Rh(CO)_2I_2]^-$ with methyl iodide promoter.",
                "Exam Scoring Tip: The Cumene process is economically dominant worldwide because both co-products (phenol for polycarbonates/epoxies and acetone for PMMA acrylics) are high-value commercial chemicals."
        ]
},
    ('Solar Energy', 1): {
        "title": "Solar Radiation",
        "highlights": [
                "Sun as Fusion Energy Source: Continuous proton-proton fusion reaction converting hydrogen into helium at core temperature $1.5 \\times 10^7\\text{ K}$; Effective blackbody surface temperature $T_{sun} \\approx 5778\\text{ K}$; Emits continuous electromagnetic spectrum governed by Planck's radiation law.",
                "Solar Constant ($I_{sc}$): Total extraterrestrial solar irradiance received on a plane normal to the sun rays at mean Earth-Sun distance; Standard value $I_{sc} = 1367\\text{ W/m}^2$ (World Radiation Center WRC standard).",
                "Extraterrestrial Radiation Variation: Variation due to Earth's elliptical orbit: $I_{on} = I_{sc} \\left[1 + 0.033 \\cos\\left(\\frac{360 n}{365}\\right)\\right]$, where $n$ is day of the year ($1 \\le n \\le 365$); Maximum at perihelion (January 3) and minimum at aphelion (July 4).",
                "Solar Angles & Astronomical Geometry: Declination angle ($\\delta = 23.45^\\circ \\sin\\left[\\frac{360}{365}(284 + n)\\right]$, varying from $-23.45^\\circ$ at winter solstice to $+23.45^\\circ$ at summer solstice); Latitude ($\\phi$), Hour angle ($\\\\omega = 15^\\circ (t_{solar} - 12)$); Solar altitude angle ($\\alpha$) and zenith angle ($\\theta_z = 90^\\circ - \\alpha$).",
                "Zenith Angle Formula: $\\cos\\theta_z = \\sin\\phi \\sin\\delta + \\cos\\phi \\cos\\delta \\cos\\omega$; Sunrise and sunset hour angles: $\\omega_s = \\arccos(-\\tan\\phi \\tan\\delta)$; Day length in hours: $S_0 = \\frac{2}{15} \\omega_s = \\frac{2}{15} \\arccos(-\\tan\\phi \\tan\\delta)$.",
                "Local Solar Time vs Standard Clock Time: Solar Time $= \\text{Standard Time} \\pm 4(L_{st} - L_{loc}) + EOT$, where $L_{st}$ is standard meridian, $L_{loc}$ is local longitude, and $EOT$ is Equation of Time (corrects for Earth orbital eccentricity and axial obliquity).",
                "Solar Radiation Components on Earth Surface: Beam / Direct radiation ($I_b$, arrives directly without atmospheric scattering), Diffuse radiation ($I_d$, scattered by air molecules and aerosols), and Albedo / Ground-reflected radiation ($I_r = \\rho_g I_g$); Global horizontal irradiance $I_g = I_b \\cos\\theta_z + I_d$.",
                "Air Mass (AM): Path length of direct solar beam through atmosphere relative to zenith path: $AM = \\frac{1}{\\cos\\theta_z}$; $AM0$ in outer space ($1367\\text{ W/m}^2$), $AM1$ at sea level with sun overhead, and $AM1.5$ standard testing condition for terrestrial solar panels (zenith angle $\\theta_z \\approx 48.2^\\circ, I \\approx 1000\\text{ W/m}^2$).",
                "Solar Radiation Measurement Instruments: Pyranometer (measures global and diffuse radiation over $2\\pi$ steradians hemisphere using thermopile sensor under double glass domes) and Pyrheliometer (measures direct beam radiation at normal incidence using collimating tube with $5.7^\\circ$ field of view on automated solar tracker).",
                "University Examination Strategy: Calculate solar declination $\\delta$, zenith angle $\\theta_z$, and sunrise hour angle $\\omega_s$ for a given city and calendar day, explain the Equation of Time (EOT), and derive total day length."
        ],
        "keyPoints": [
                "Solar Constant Standard Value: $I_{sc} = 1367\\text{ W/m}^2$.",
                "Solar Declination Formula: $\\delta = 23.45^\\circ \\sin\\left[\\frac{360}{365}(284 + n)\\right]$.",
                "Zenith Angle Equation: $\\cos\\theta_z = \\sin\\phi\\sin\\delta + \\cos\\phi\\cos\\delta\\cos\\omega$.",
                "Sunrise Hour Angle: $\\omega_s = \\arccos(-\\tan\\phi \\tan\\delta)$.",
                "Day Length Formula: $S_0 = \\frac{2}{15}\\arccos(-\\tan\\phi \\tan\\delta)$ hours.",
                "Hour Angle Rate: $\\omega = 15^\\circ \\times (t_{\\text{solar}} - 12)$ (degrees; $15^\\circ$ corresponds to 1 hour).",
                "Air Mass Formula: $AM = \\frac{1}{\\cos\\theta_z}$ (for $\\theta_z < 70^\\circ$).",
                "Standard PV Testing Condition: $AM1.5$ spectrum, $1000\\text{ W/m}^2$ irradiance, and $25^\\circ\\text{C}$ cell temperature.",
                "Global Radiation Balance: $I_{\\text{global}} = I_{\\text{beam}} \\cos\\theta_z + I_{\\text{diffuse}}$.",
                "Exam Scoring Tip: At solar noon, the hour angle $\\omega$ is identically zero, simplifying the zenith equation to $\\theta_z = |\\phi - \\delta|$."
        ]
},
    ('Solar Energy', 2): {
        "title": "Solar Thermal",
        "highlights": [
                "Flat Plate Collectors (FPC) Architecture: Glazing cover (low-iron tempered glass with high solar transmittance $\\tau \\approx 0.90$), metallic absorber plate (copper/aluminum with selective black coating, absorptance $\\alpha \\approx 0.95$, thermal emittance $\\varepsilon \\le 0.05$), riser and header tubes, bottom and edge thermal insulation, and weather-proof casing.",
                "Hottel-Whillier-Bliss (HWB) Governing Equation: Useful thermal energy gain: $Q_u = A_c F_R [I_t (\\tau\\alpha) - U_L (T_i - T_a)]$, where $A_c$ is collector area, $F_R$ is heat removal factor, $I_t$ is tilted solar irradiance, $(\\tau\\alpha)$ is transmittance-absorptance product, $U_L$ is overall heat loss coefficient, and $T_i, T_a$ are fluid inlet and ambient temperatures.",
                "Collector Overall Heat Loss Coefficient ($U_L$): Sum of top, bottom, and edge losses: $U_L = U_t + U_b + U_e$; Top loss $U_t$ accounts for radiative and convective exchange between absorber, glass covers, and sky; Klein's empirical correlation for $U_t$.",
                "Collector Efficiency Factor ($F'$) & Heat Removal Factor ($F_R$): $F'$ represents ratio of actual useful energy to energy collected if absorber plate were at local fluid temperature; $F_R = \\frac{\\dot{m} C_p}{A_c U_L} \\left[1 - \\exp\\left(-\\frac{A_c U_L F'}{\\dot{m} C_p}\\right)\\right]$; Instantaneous thermal efficiency $\\eta = \\frac{Q_u}{A_c I_t} = F_R (\\tau\\alpha) - F_R U_L \\left(\\frac{T_i - T_a}{I_t}\\right)$.",
                "Evacuated Tube Collectors (ETC): Parallel double-wall borosilicate glass tubes with vacuum envelope ($P < 10^{-3}\\text{ mbar}$); Eliminates all convective and conductive top heat losses; Features internal copper heat pipe containing evaporating working fluid (alcohol/water); Operates efficiently up to $150^\\circ\\text{C}$.",
                "Concentrating Solar Collectors Principles: Optical concentration ratio $CR = A_a / A_r$, where $A_a$ is collector aperture area and $A_r$ is absorber receiver area; High concentration reduces receiver area and heat losses, achieving elevated operating temperatures ($300-1000^\\circ\\text{C}$).",
                "Parabolic Trough Collectors (PTC): Linear imaging concentrators ($CR = 15-80$); Parabolic trough mirror reflects direct beam solar rays onto focal axis tube carrying synthetic heat transfer oil or molten salt; Single-axis solar tracking; Powers industrial solar thermal electric plants.",
                "Linear Fresnel Reflectors (LFR): Long, flat or slightly curved mirror strips positioned at ground level reflecting solar flux to elevated linear receiver; Lower capital and structural wind loading costs compared to parabolic troughs.",
                "Solar Central Receiver Towers (Heliostat Field): Thousands of dual-axis tracking flat mirrors (heliostats) reflecting solar flux to central receiver perched on high tower ($CR = 500-1500$, operating temperatures $>800^\\circ\\text{C}$); Utilizes molten nitrate salt ($60\\%\\text{ NaNO}_3 + 40\\%\\text{ KNO}_3$) as storage and heat transfer medium.",
                "University Examination Strategy: Derive the Hottel-Whillier-Bliss useful heat equation step-by-step, plot the collector thermal efficiency curve $\\eta$ vs $(T_i - T_a)/I_t$ finding intercept and slope, and compare FPC vs Evacuated Tube Collectors."
        ],
        "keyPoints": [
                "Hottel-Whillier-Bliss Equation: $Q_u = A_c F_R [S - U_L (T_i - T_a)]$.",
                "FPC Thermal Efficiency: $\\eta = F_R (\\tau\\alpha) - F_R U_L \\left(\\frac{T_i - T_a}{I_t}\\right)$.",
                "Heat Removal Factor $F_R$: $F_R = \\frac{\\dot{m} C_p}{A_c U_L} \\left[1 - \\exp\\left(-\\frac{A_c U_L F'}{\\dot{m} C_p}\\right)\\right]$.",
                "Optical Concentration Ratio: $CR = \\frac{\\text{Aperture Area } A_a}{\\text{Receiver Area } A_r}$.",
                "Maximum Theoretical Concentration (2D Linear): $CR_{\\text{max, 2D}} = \\frac{1}{\\sin\\theta_s} \\approx 216$.",
                "Maximum Theoretical Concentration (3D Point): $CR_{\\text{max, 3D}} = \\frac{1}{\\sin^2\\theta_s} \\approx 46000$.",
                "Selective Absorber Coating Criteria: Solar absorptance $\\alpha \\ge 0.95$ for $\\lambda < 2.5\\,\\mu\\text{m}$; Thermal emittance $\\varepsilon \\le 0.05$ for $\\lambda > 2.5\\,\\mu\\text{m}$.",
                "Stagnation Temperature: Temperature when useful gain $Q_u = 0 \\implies T_{stag} = T_a + \\frac{I_t(\\tau\\alpha)}{U_L}$.",
                "Molten Salt Storage Chemistry: Eutectic binary mixture of $60\\%\\text{ NaNO}_3$ and $40\\%\\text{ KNO}_3$ (liquid range $220-565^\\circ\\text{C}$).",
                "Exam Scoring Tip: On the standard efficiency plot of $\\eta$ vs $(T_i - T_a)/I_t$, the y-intercept is $F_R(\\tau\\alpha)$ and the negative slope equals $F_R U_L$."
        ]
},
    ('Solar Energy', 3): {
        "title": "Solar PV",
        "highlights": [
                "Photovoltaic Effect in Semiconductor P-N Junction: Absorption of incident photons with energy $h\\nu \\ge E_g$ excites electrons from valence to conduction band, generating electron-hole pairs; Built-in electric field across depletion region separates charges, establishing photovoltage and photocurrent.",
                "Solar Cell Equivalent Circuit (Single-Diode Model): Ideal photocurrent source $I_{ph}$ in parallel with diode $I_D$, parallel shunt resistance $R_{sh}$, and series resistance $R_s$; Current-voltage relationship: $I = I_{ph} - I_0 \\left[\\exp\\left(\\frac{q(V + I R_s)}{n k_B T}\\right) - 1\\right] - \\frac{V + I R_s}{R_{sh}}$.",
                "Key Photovoltaic Characteristic Parameters: Short-circuit current ($I_{sc} \\approx I_{ph}$), Open-circuit voltage ($V_{oc} = \\frac{n k_B T}{q} \\ln\\left(\\frac{I_{ph}}{I_0} + 1\\right)$), Maximum Power Point ($P_{max} = V_{mp} I_{mp}$), and Fill Factor ($FF = \\frac{V_{mp} I_{mp}}{V_{oc} I_{sc}}$); Standard solar cell efficiency $\\eta = \\frac{P_{max}}{A \\cdot I_{in}} = \\frac{V_{oc} I_{sc} FF}{A \\cdot I_{in}}$.",
                "Shockley-Queisser Detailed Balance Limit: Fundamental thermodynamic efficiency limit for single-junction solar cells under unconcentrated sunlight; Theoretical ceiling $\\approx 33.7\\%$ occurring at optimum semiconductor bandgap $E_g \\approx 1.34\\text{ eV}$ (close to silicon $1.12\\text{ eV}$ and GaAs $1.42\\text{ eV}$).",
                "Parasitic Loss Mechanisms: Thermalization loss (excess photon energy $h\\nu - E_g$ dissipated as lattice phonon heat), Sub-bandgap non-absorption (photons with $h\\nu < E_g$ transmit unabsorbed), Radiative recombination, and Surface/interface defect recombination.",
                "Silicon Photovoltaic Technologies: Monocrystalline silicon (Czochralski single crystal, high efficiency $22-26\\%$, dark uniform appearance), Polycrystalline / Multicrystalline silicon (cast ingot, grain boundaries, efficiency $17-20\\%$, speckled blue), and Passivated Emitter and Rear Cell (PERC) technology.",
                "Thin-Film Solar Cells: Reduced material thickness ($1-3\\,\\mu\\text{m}$); Cadmium Telluride (CdTe, direct bandgap $1.45\\text{ eV}$), Copper Indium Gallium Diselenide (CIGS, chalcopyrite, bandgap tunable $1.0-1.7\\text{ eV}$), and Hydrogenated Amorphous Silicon (a-Si:H, Staebler-Wronski photo-degradation).",
                "Emerging PV Technologies: Perovskite solar cells (organometallic halide crystal $ABX_3$, rapid rise to $>25\\%$ efficiency, moisture instability), Tandem / Multi-junction solar cells (stacking top high-bandgap perovskite or GaInP over bottom silicon cell to exceed Shockley-Queisser limit beyond $33\\%$), and Organic/Dye-sensitized solar cells.",
                "Temperature Effects on PV Performance: Increasing temperature narrows bandgap, slightly increasing $I_{sc}$ ($+0.05\\%/^\\circ\\text{C}$) but drastically increasing reverse saturation current $I_0$, causing severe drop in $V_{oc}$ ($-2.0\\text{ to } -2.3\\text{ mV}/^\\circ\\text{C}$); Overall power temperature coefficient $\\gamma \\approx -0.35\\text{ to } -0.45\\%/^\\circ\\text{C}$ for crystalline silicon.",
                "University Examination Strategy: Formulate the single-diode solar cell current-voltage equation, derive the open-circuit voltage $V_{oc}$, define the Fill Factor $FF$, and analyze the impact of series and shunt resistance on I-V curves."
        ],
        "keyPoints": [
                "Single-Diode PV Current Formula: $I = I_{ph} - I_0 \\left[\\exp\\left(\\frac{q(V + I R_s)}{n k_B T}\\right) - 1\\right] - \\frac{V + I R_s}{R_{sh}}$.",
                "Open-Circuit Voltage Equation: $V_{oc} = \\frac{n k_B T}{q} \\ln\\left(\\frac{I_{sc}}{I_0} + 1\\right)$.",
                "Fill Factor Definition: $FF = \\frac{P_{\\text{max}}}{V_{oc} I_{sc}} = \\frac{V_{mp} I_{mp}}{V_{oc} I_{sc}}$ (typical values $0.75 - 0.85$).",
                "Solar Cell Power Conversion Efficiency: $\\eta = \\frac{V_{oc} I_{sc} FF}{P_{\\text{in}} A}$.",
                "Shockley-Queisser Limit: Peak theoretical single-junction efficiency $\\approx 33.7\\%$ at $E_g = 1.34\\text{ eV}$.",
                "Silicon Bandgap Energy: $E_g = 1.12\\text{ eV}$ at room temperature ($300\\text{ K}$).",
                "Thermal Voltage Constant: $V_t = \\frac{k_B T}{q} \\approx 0.0259\\text{ V}$ at $300\\text{ K}$ ($25^\\circ\\text{C}$).",
                "Series Resistance Effect: Increases slope at $V_{oc}$, reducing Fill Factor without altering $V_{oc}$.",
                "Shunt Resistance Effect: Decreases slope at $I_{sc}$, drawing leakage current away from load.",
                "Exam Scoring Tip: The temperature coefficient of power for silicon is negative (roughly $-0.4\\%/^\\circ\\text{C}$); a solar module operating at $65^\\circ\\text{C}$ loses nearly $16\\%$ of its rated nameplate capacity."
        ]
},
    ('Solar Energy', 4): {
        "title": "Solar Systems",
        "highlights": [
                "Balance of System (BOS) Components: Inverters (converts DC power from PV string to synchronized AC grid power), Charge controllers (regulates battery charging, prevents overcharge/deep discharge), Mounting structures, Combiner boxes with DC disconnects, and Surge Protection Devices (SPD).",
                "Maximum Power Point Tracking (MPPT) Algorithms: Dynamically adjusts DC-DC converter duty cycle to operate array at maximum power point ($P_{max}$); Perturb and Observe (P&O, perturbs voltage and measures $\\Delta P / \\Delta V$), Incremental Conductance (IncCond, condition: $\\frac{dI}{dV} = -\\frac{I}{V}$ at peak), and Fractional Open-Circuit Voltage.",
                "Grid-Connected PV Systems: Grid-tied inverters with Anti-Islanding protection (IEEE 1547 / IEC 62116 standard, automatically disconnects PV system within 2 seconds of utility grid outage to safeguard maintenance utility linesmen); Net metering and feed-in tariff billing.",
                "Stand-Alone (Off-Grid) PV Systems: Battery energy storage sized for days of autonomy; System sizing procedure: (1) Determine daily watt-hour energy demand ($E_d$); (2) Size PV array accounting for peak sun hours (PSH) and system losses; (3) Size battery bank accounting for Depth of Discharge (DoD) and ambient temperature.",
                "Solar Inverter Topologies: Central inverters (large utility-scale installations $>1\\text{ MW}$), String inverters ($10-100\\text{ kW}$, multiple strings connected to single inverter), Multi-string inverters (independent MPPT per string), and Micro-inverters (module-level power electronics MLPE mounted on each panel).",
                "Energy Storage Technologies for Solar: Deep-cycle lead-acid batteries (flooded, AGM, gel; $50\\%$ DoD limitation), Lithium-ion batteries ($LiFePO_4$, NMC; high energy density, $80-90\\%$ DoD, $>4000$ cycle life, built-in Battery Management System BMS), and Vanadium redox flow batteries for multi-megawatt storage.",
                "Partial Shading & Bypass Diodes: Shaded cell in series string becomes reverse-biased, acts as resistive load, dissipates string power, and creates localized destructive thermal hot-spots; Bypass diodes connected across subgroups of 20-24 cells bypass current around shaded modules.",
                "PV Array Sizing Calculation: Required PV peak power: $P_{peak} = \\frac{E_{daily}}{\\text{PSH} \\times \\eta_{system}}$, where $\\text{PSH}$ is Peak Sun Hours (equivalent hours per day at $1000\\text{ W/m}^2$) and $\\eta_{system} \\approx 0.75 - 0.80$ accounts for dirt, inverter, thermal, and cable losses.",
                "Battery Bank Sizing Calculation: Required battery storage capacity: $C_{Ah} = \\frac{E_{daily} \\times N_{autonomy}}{V_{dc} \\times DoD \\times \\eta_{battery}}$, where $N_{autonomy}$ is number of cloudy days of autonomy (typically 2-4 days) and $DoD$ is maximum allowable Depth of Discharge.",
                "University Examination Strategy: Calculate PV array wattage and battery bank Ah capacity for a residential off-grid load profile, derive the Incremental Conductance MPPT condition $\\frac{dI}{dV} = -\\frac{I}{V}$, and explain anti-islanding protection."
        ],
        "keyPoints": [
                "Incremental Conductance MPPT Condition: $\\frac{dI}{dV} = -\\frac{I}{V}$ at Maximum Power Point.",
                "Off-Peak Condition (Left of MPP): $\\frac{dI}{dV} > -\\frac{I}{V}$.",
                "Off-Peak Condition (Right of MPP): $\\frac{dI}{dV} < -\\frac{I}{V}$.",
                "PV Array Sizing Formula: $P_{\\text{array}} = \\frac{E_{\\text{load}}}{\\text{PSH} \\times \\eta_{\\text{BOS}}}$.",
                "Battery Bank Capacity Formula: $C_{Ah} = \\frac{E_{\\text{load}} \\times N_{\\text{autonomy}}}{V_{\\text{system}} \\times DoD \\times \\eta_{\\text{bat}}}$.",
                "Peak Sun Hours (PSH): Daily solar insolation in $\\text{kWh/m}^2/\\text{day}$ divided by $1.0\\text{ kW/m}^2$.",
                "Anti-Islanding Disconnect Time: Must disconnect within strictly 2.0 seconds of grid blackout.",
                "Bypass Diode Function: Protects shaded solar cells from reverse-bias overheating and hot-spot failure.",
                "Lead-Acid Battery Max DoD: Limited to $50\\%$ Depth of Discharge to preserve cycle life.",
                "Exam Scoring Tip: Peak Sun Hours (PSH) is numerically equal to the daily global horizontal irradiation in $\\text{kWh/m}^2/\\text{day}$."
        ]
},
    ('Solar Energy', 5): {
        "title": "Applications",
        "highlights": [
                "Solar Water Pumping Systems: Solar PV array powering DC submersible brushless motor (BLDC) or AC induction motor via variable frequency inverter; Eliminates battery bank storage; Water stored directly in overhead reservoir tanks; Hydraulic energy: $E_h = \\rho g V H$; Daily pump discharge.",
                "Solar Desalination & Distillation: Passive solar stills (single-basin glass-covered solar still; evaporation from black basin and condensation on sloped glass underside; productivity $3-5\\text{ L/(m}^2\\cdot\\text{day)}$) and Active solar distillation (integrated with FPC or waste heat).",
                "Solar Drying of Agricultural Produce: Direct solar dryers (transparent cover over produce tray, UV degradation risk) vs Indirect solar dryers (separate solar air heating collector ducting warm air through shaded drying chamber; controls drying rate and preserves vitamins/color).",
                "Solar Refrigeration & Absorption Cooling: Thermal cooling using waste heat or solar thermal collectors; Single-effect water-lithium bromide ($H_2O-LiBr$) absorption chiller for air conditioning ($T_{generator} \\approx 80-95^\\circ\\text{C}, COP \\approx 0.7$); Ammonia-water ($NH_3-H_2O$) system for freezing ($COP \\approx 0.5$).",
                "Solar Cooking Technologies: Box-type solar cookers (insulated double-glass box with plane reflector mirror, attains $100-140^\\circ\\text{C}$ for boiling and slow stewing) and Parabolic concentrating dish cookers (attains $>250^\\circ\\text{C}$ for frying and baking).",
                "Building Integrated Photovoltaics (BIPV): Solar cells seamlessly integrated into building envelope: PV roof shingles, photovoltaic glass facades, semitransparent skylights, and shading louvers; Serves dual role as weatherproofing structural element and power generator.",
                "Agrivoltaics (Co-Location of Solar & Agriculture): Elevated mounting of solar arrays ($3-5\\text{ m}$ clearance) allowing farming machinery beneath; Dual land use; Microclimate shading reduces crop evapotranspiration, saves irrigation water, and lowers PV operating temperatures.",
                "Floating Photovoltaics (Floatovoltaics / FPV): Solar arrays mounted on modular buoyant pontoons anchored in reservoirs, quarry lakes, and wastewater treatment lagoons; Evaporation water cooling increases PV efficiency by $5-10\\%$; Reduces reservoir water loss by $80\\%$.",
                "Life Cycle Assessment (LCA) & Energy Payback Time (EPBT): Environmental footprint of solar technology; Energy Payback Time $EPBT = \\frac{E_{embodied}}{E_{annual\\_generation}}$; For modern silicon PV modules, $EPBT \\approx 1.0 - 1.5\\text{ years}$; Operating lifespan exceeds 25-30 years.",
                "University Examination Strategy: Design a solar water pumping system for a specified daily irrigation head and volume, calculate Energy Payback Time (EPBT), and explain the thermodynamic working cycle of a solar $H_2O-LiBr$ absorption chiller."
        ],
        "keyPoints": [
                "Hydraulic Pumping Energy: $E_h = \\rho g Q H = \\rho g V H$ Joules.",
                "Solar Pump Hydraulic Power: $P_h = \\frac{\\rho g Q H}{3600}$ Watts (with $Q$ in $\\text{m}^3/\\text{hr}$).",
                "Solar Still Daily Productivity: $M_w = \\frac{Q_{u}}{h_{fg}} = \\frac{\\eta_{still} A I_t}{h_{fg}}$ (typically $3-5\\text{ L/m}^2$).",
                "Energy Payback Time (EPBT): $EPBT = \\frac{E_{\\text{manufacturing}}}{E_{\\text{annual output}}}$ years.",
                "Energy Return on Investment: $EROI = \\frac{\\text{Lifetime Energy Output}}{E_{\\text{manufacturing}}} \\approx 15 - 25$.",
                "Single-Effect $LiBr-H_2O$ COP: Coefficient of Performance $COP = \\frac{Q_{\\text{evaporator}}}{Q_{\\text{generator}}} \\approx 0.65 - 0.75$.",
                "Floating PV Water Cooling Gain: Lowers panel temperature by $5-15^\\circ\\text{C}$, boosting energy yield by $5-10\\%$.",
                "Agrivoltaics Light Sharing: Transmits photosynthetically active radiation ($PAR$) while absorbing non-optimal wavelengths.",
                "BIPV Economic Advantage: Offsets building material facade cost while generating on-site renewable energy.",
                "Exam Scoring Tip: In solar absorption refrigeration with $LiBr-H_2O$, water serves as the refrigerant while lithium bromide salt solution serves as the absorbent."
        ]
},
    ('Python for Data Science', 1): {
        "title": "Python Basics",
        "highlights": [
                "Python Execution Model & Bytecode: Interpreted, dynamic, high-level language; Source code `.py` compiled by CPython into platform-independent bytecode `.pyc`, executed on Python Virtual Machine (PVM); Dynamic typing and automated reference counting garbage collection.",
                "Built-in Data Structures & Mutability: Immutable types (int, float, bool, str, tuple, frozenset) vs Mutable types (list, dict, set); Object identity checked via `id()` and `is` operator; Shallow copy (`copy.copy()`) vs Deep copy (`copy.deepcopy()`).",
                "List Comprehensions & Generator Expressions: List comprehension `[x**2 for x in seq if x % 2 == 0]` builds full list in memory; Generator expression `(x**2 for x in seq)` returns lazy iterator evaluated on demand using `yield`, minimizing memory footprint for big data.",
                "Functions, Lambda Expressions & Closures: First-class functions; Keyword arguments, `*args` (positional tuple unpacking), and `**kwargs` (keyword dictionary unpacking); Anonymous functions `lambda x, y: x + y`; Closures retain access to enclosing lexical scope.",
                "Decorators & Functional Programming Tools: Decorators wrap functions using `@decorator_name` syntax based on closures; Built-in functional primitives: `map()`, `filter()`, `reduce()` (from `functools`), and `zip()` for parallel sequence iteration.",
                "Object-Oriented Programming in Python: Classes and instances; Magic / Dunder methods (`__init__`, `__str__`, `__repr__`, `__call__`, `__getitem__`); Single and multiple inheritance; Method Resolution Order (MRO) evaluated via C3 Linearization algorithm.",
                "Exception Handling & Context Managers: Robust error handling using `try...except...else...finally` blocks; Custom exception classes inheriting from `Exception`; Context managers implementing `__enter__` and `__exit__` accessed via `with open(...) as f:` syntax.",
                "File I/O & Serialization: Reading/writing text and binary streams; JSON serialization (`json.dumps()`, `json.loads()`); Python object serialization via `pickle` module (security warnings with untrusted input); CSV file parsing using standard `csv` library.",
                "Standard Library Modules for Data Science: `math` and `cmath` for scientific computing, `os` and `sys` for environment manipulation, `random` for pseudo-random number generation, and `re` for regular expression pattern matching and tokenization.",
                "University Examination Strategy: Explain Method Resolution Order (MRO) in multiple inheritance using C3 linearization, demonstrate the performance and memory difference between list comprehensions and generators, and construct a custom context manager class."
        ],
        "keyPoints": [
                "Memory Id Operator: `a is b` tests whether `id(a) == id(b)` (identical memory addresses).",
                "List Comprehension Syntax: `[expr for item in iterable if condition]`.",
                "Lazy Generator Function: Uses `yield` keyword to return an iterable generator without memory allocation.",
                "Positional Unpacking: `*args` collects arbitrary extra positional arguments as a tuple.",
                "Keyword Unpacking: `**kwargs` collects arbitrary extra keyword arguments as a dictionary.",
                "C3 Linearization (MRO): Determines method lookup order in multiple inheritance (`Class.mro()`).",
                "Context Manager Protocol: Requires implementation of `__enter__()` and `__exit__()` dunder methods.",
                "Deep Copy Mechanism: `copy.deepcopy()` recursively duplicates nested compound objects.",
                "Lambda Function Limitation: Restricted syntactically to a single logical expression.",
                "Exam Scoring Tip: Default mutable arguments in Python functions (e.g. `def f(x=[])`) are evaluated once at function definition time, leading to shared state bugs."
        ]
},
    ('Python for Data Science', 2): {
        "title": "NumPy & Pandas",
        "highlights": [
                "NumPy N-Dimensional Array (`ndarray`): Homogeneous, contiguous memory buffer; Strides describe byte steps to traverse dimensions; Data types (`dtype`); Memory locality dramatically outperforms Python lists via vectorized SIMD operations.",
                "Array Creation & Dimensional Reshaping: `np.zeros()`, `np.ones()`, `np.arange()`, `np.linspace()`, `np.random.randn()`; Reshaping via `.reshape()` (returns view), `.flatten()` (returns deep copy), and `.ravel()` (returns contiguous flattened view).",
                "Vectorized Operations & Universal Functions (`ufunc`): Element-wise arithmetic operations performed at compiled C speed; Universal mathematical functions (`np.sin()`, `np.exp()`, `np.sqrt()`, `np.log()`) bypassing Python interpreter loops.",
                "NumPy Broadcasting Rules: Allows arithmetic between arrays of different shapes; Two dimensions are compatible when: (1) They are equal, or (2) One of them is 1; Arrays stretched along unit dimensions without physical memory replication.",
                "Indexing, Slicing & Boolean Masking: Multi-dimensional slicing `A[1:4, ::2]`; Fancy indexing using integer arrays; Boolean masking `A[A > 0]` for conditional element filtering and replacement.",
                "Linear Algebra Operations in NumPy (`np.linalg`): Matrix multiplication (`@` operator or `np.dot()`); Matrix inversion (`np.linalg.inv()`), determinant (`np.linalg.det()`), eigenvalues and eigenvectors (`np.linalg.eig()`), and Singular Value Decomposition (`np.linalg.svd()`).",
                "Pandas Series & DataFrame Architecture: Series (1D labeled homogeneous array) and DataFrame (2D tabular labeled heterogeneous data structure with row index and column names); Built on top of NumPy ndarrays.",
                "Data Selection in Pandas (`loc` vs `iloc`): Label-based indexing `df.loc[row_label, col_label]` (inclusive of endpoints) vs Purely integer position-based indexing `df.iloc[row_pos, col_pos]` (exclusive of upper endpoint).",
                "Aggregation & GroupBy Split-Apply-Combine: `df.groupby('col').agg({'val': ['mean', 'std', 'sum']})`; Pivot tables (`df.pivot_table()`), crosstabs, and melting (`pd.melt()`) for tidy data transformation.",
                "University Examination Strategy: Formulate NumPy broadcasting compatibility rules for contrasting array shapes, demonstrate DataFrame merging and grouping operations, and calculate matrix eigenvalues using `np.linalg.eig`."
        ],
        "keyPoints": [
                "NumPy Broadcasting Condition: Two dimensions are compatible iff $d_1 == d_2$ or either $d_1 == 1$ or $d_2 == 1$.",
                "Matrix Multiplication Operator: `@` operator (equivalent to `np.matmul(A, B)`).",
                "Pandas `loc` Rule: Selects by index/column labels; Slice `loc['a':'c']` includes end label `'c'`.",
                "Pandas `iloc` Rule: Selects by integer position; Slice `iloc[0:3]` includes rows 0, 1, 2.",
                "View vs Copy: Slicing NumPy arrays creates views; Slicing Python lists creates copies.",
                "Linear Algebra SVD: `U, S, Vh = np.linalg.svd(A)` (decomposes $A = U \\Sigma V^T$).",
                "DataFrame Merge Types: `pd.merge(df1, df2, on='key', how='inner'|'left'|'right'|'outer')`.",
                "Array Axis Convention: `axis=0` operates along columns (down rows); `axis=1` operates along rows (across columns).",
                "NaN Representation: Represented as IEEE 754 floating point constant `np.nan` (note: `np.nan != np.nan`).",
                "Exam Scoring Tip: To test for NaN in NumPy/Pandas, never use `x == np.nan`; always use `np.isnan(x)` or `df.isna()`."
        ]
},
    ('Python for Data Science', 3): {
        "title": "Data Visualization",
        "highlights": [
                "Matplotlib Architecture: Three-layer design: Backend layer (drawing to screen/file e.g. Agg, PDF), Artist layer (Figure, Axes, Axis, Line2D, Text), and Scripting layer (`matplotlib.pyplot` interface).",
                "Object-Oriented Matplotlib Interface: Creating figure and subplot grids: `fig, ax = plt.subplots(nrows=2, ncols=2, figsize=(10, 8))`; Manipulating individual axes objects directly: `ax.plot()`, `ax.set_title()`, `ax.set_xlabel()`, `ax.grid()`, and `fig.tight_layout()`; Superior to stateful procedural scripting.",
                "Common Statistical Chart Types: Scatter plots (variable correlation, `plt.scatter()`), Line plots (time-series trends), Bar charts (`plt.bar()` for categorical counts), Histograms (`plt.hist()` for probability density and skewness), and Box plots (`plt.boxplot()` for quartile dispersion).",
                "Box Plots & Outlier Detection: Five-number summary: Minimum, First Quartile ($Q_1$), Median ($Q_2$), Third Quartile ($Q_3$), and Maximum; Interquartile Range $IQR = Q_3 - Q_1$; Outlier bounds: values lying outside $[Q_1 - 1.5 IQR, Q_3 + 1.5 IQR]$.",
                "Seaborn Statistical Data Visualization: Built on top of Matplotlib with aesthetic defaults and direct Pandas DataFrame integration; Distribution plots (`sns.histplot()`, `sns.kdeplot()` for kernel density estimation), Categorical plots (`sns.boxplot()`, `sns.violinplot()`), and Regression plots (`sns.regplot()`).",
                "Multi-Plot Grids & Pairwise Relationships: `sns.pairplot(df, hue='target')` displays pairwise scatter plots on off-diagonals and univariate KDEs on diagonal; FacetGrid for multi-panel conditional subsets based on categorical factors.",
                "Correlation Heatmaps: `sns.heatmap(df.corr(), annot=True, cmap='coolwarm', vmin=-1, vmax=1)`; Displays Pearson correlation coefficients $r_{xy} = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum (x_i - \\bar{x})^2 \\sum (y_i - \\bar{y})^2}}$ to identify multicollinearity.",
                "Interactive Visualizations with Plotly: Web-based interactive charts rendered via D3.js and WebGL; Zooming, panning, tooltips on hover; Plotly Express (`px.scatter()`, `px.choropleth()`); Exportable as standalone interactive HTML.",
                "Principles of Effective Visual Design & Edward Tufte Guidelines: Maximize Data-to-Ink ratio; Avoid chart junk, misleading 3D perspectives, and truncated axes; Choose colorblind-friendly palettes (viridis, cividis) instead of rainbow colormaps.",
                "University Examination Strategy: Construct a 2x2 subplot layout using Matplotlib's object-oriented API, compute the five-number summary and IQR outlier thresholds for a boxplot, and interpret correlation heatmaps."
        ],
        "keyPoints": [
                "Interquartile Range: $IQR = Q_3 - Q_1$.",
                "Lower Outlier Threshold: $\\text{Lower Bound} = Q_1 - 1.5 \\times IQR$.",
                "Upper Outlier Threshold: $\\text{Upper Bound} = Q_3 + 1.5 \\times IQR$.",
                "Pearson Correlation Formula: $r = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sqrt{\\sum(x - \\bar{x})^2 \\sum(y - \\bar{y})^2}}$.",
                "Matplotlib OO Subplot: `fig, axes = plt.subplots(2, 2)` (returns Figure and 2D NumPy array of Axes).",
                "Data-to-Ink Ratio: $\\text{Ratio} = \\frac{\\text{Data-Ink}}{\\text{Total Ink used in Graphic}}$ (maximize for clarity).",
                "Violin Plot Advantage: Combines box plot quartiles with mirrored rotated Kernel Density Estimation curves.",
                "Seaborn Hue Parameter: Colors data points based on categorical variable for group comparison.",
                "Histogram Bin Selection: Freedman-Diaconis rule for bin width: $h = 2 \\times IQR \\times n^{-1/3}$.",
                "Exam Scoring Tip: In Matplotlib's object-oriented API, use `ax.set_title()` and `ax.set_xlabel()`, whereas in the pyplot scripting API you use `plt.title()` and `plt.xlabel()`."
        ]
},
    ('Python for Data Science', 4): {
        "title": "Data Cleaning",
        "highlights": [
                "Data Quality Dimensions: Completeness, consistency, validity, accuracy, and uniqueness; Garbage In, Garbage Out (GIGO) principle in machine learning pipelines.",
                "Missing Data Mechanisms (Rubin's Classification): Missing Completely at Random (MCAR, missingness independent of observed and unobserved data), Missing at Random (MAR, missingness depends on observed variables), and Missing Not at Random (MNAR, missingness depends on unobserved values).",
                "Missing Data Handling in Pandas: Detection (`df.isna().sum()`); Listwise deletion (`df.dropna(how='any')`, risks substantial sample size reduction and bias); Pairwise deletion; Fill methods (`df.fillna()`, forward-fill `ffill`, backward-fill `bfill`).",
                "Imputation Strategies: Univariate imputation (Mean/Median for continuous numerical skewed data, Mode for categorical); Multivariate imputation using IterativeImputer (MICE - Multivariate Imputation by Chained Equations) or K-Nearest Neighbors (`KNNImputer`).",
                "Handling Duplicate Records: Identification (`df.duplicated(subset=[...])`); Dropping duplicate rows (`df.drop_duplicates(keep='first'|'last')`) to prevent data leakage and inflated sample counts.",
                "Data Type Conversion & Formatting: Type casting (`df['col'].astype('float32')`, `astype('category')` for memory reduction); DateTime parsing (`pd.to_datetime()`, extracting year, month, day, dayofweek); String cleaning (`df['col'].str.strip().str.lower().str.replace()`).",
                "Outlier Detection & Treatment: Z-score method ($|z| = \\frac{|x - \\mu|}{\\sigma} > 3.0$, valid for normal Gaussian distributions); IQR method ($1.5 \\times IQR$ rule, non-parametric); Treatment: Trimming (removal), Winsorization (capping extreme values at 1st and 99th percentiles), or log transformation.",
                "Handling Inconsistent Categorical Data: String fuzzy matching (Levenshtein edit distance using `fuzzywuzzy` / `thefuzz`); Standardizing categorical levels; Encoding invalid domain values as NaN.",
                "Data Transformation & Feature Scaling: Min-Max Normalization ($x' = \\frac{x - x_{min}}{x_{max} - x_{min}} \\in [0, 1]$); Z-score Standardization ($z = \\frac{x - \\mu}{\\sigma}$, zero mean and unit variance); Logarithmic transformation ($y = \\ln(x + 1)$) and Box-Cox power transform to eliminate right-skewness.",
                "University Examination Strategy: Differentiate MCAR, MAR, and MNAR missing data mechanisms, apply Min-Max normalization and Z-score standardization formulas to a numerical vector, and explain Winsorization."
        ],
        "keyPoints": [
                "Min-Max Normalization Formula: $x' = \\frac{x - x_{\\text{min}}}{x_{\\text{max}} - x_{\\text{min}}} \\in [0, 1]$.",
                "Z-Score Standardization: $z = \\frac{x - \\mu}{\\sigma}$.",
                "Z-Score Outlier Bound: Flagged as outlier when $|z| > 3.0$.",
                "Log Transformation: $y = \\ln(x + 1)$ (stabilizes variance and converts multiplicative skewness to additive).",
                "Box-Cox Transformation: $y^{(\\lambda)} = \\frac{x^\\lambda - 1}{\\lambda}$ for $\\lambda \\ne 0$, and $\\ln x$ for $\\lambda = 0$.",
                "MCAR Property: Probability of missing data is completely unrelated to any attribute values.",
                "Winsorization Technique: Replaces extreme outlier values with predefined percentile caps (e.g. 5th and 95th).",
                "KNN Imputation: Replaces missing entry with weighted average of $k$ closest neighbors in Euclidean feature space.",
                "Pandas String Accessor: `.str` enables vectorized string operations across entire series.",
                "Exam Scoring Tip: Feature scaling parameters (mean, standard deviation, min, max) must be fitted strictly on training data and then applied to transform test data to prevent data leakage."
        ]
},
    ('Python for Data Science', 5): {
        "title": "EDA",
        "highlights": [
                "Exploratory Data Analysis (EDA) Philosophy: John Tukey's approach to data analysis; Uncovering underlying data structures, detecting anomalies, testing hypotheses, and selecting appropriate machine learning model architectures through statistical summaries and graphical displays.",
                "Univariate Analysis: Analyzing single variables; Numerical variables: Mean, median, mode, variance, standard deviation, skewness (Fisher-Pearson coefficient $g_1 = \\frac{m_3}{m_2^{3/2}}$), and kurtosis ($g_2 = \\frac{m_4}{m_2^2} - 3$); Categorical variables: Frequency tables, bar charts, and Pareto charts.",
                "Bivariate Analysis: Relationships between two variables: Continuous-Continuous (scatter plot, Pearson correlation $r$, Spearman rank correlation $\\rho$ for monotonic non-linear relations); Categorical-Continuous (grouped box plots, ANOVA F-test); Categorical-Categorical (cross-tabulation, Chi-square test of independence $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$).",
                "Multivariate Analysis: Relationships among $\\ge 3$ variables simultaneously; Correlation matrices, pair plots, 3D scatter plots, and dimensionality reduction projections; Parallel coordinates plots for multi-attribute clusters.",
                "Feature Engineering & Interaction Features: Constructing new domain-relevant features; Polynomial features ($x_1^2, x_1 x_2$), ratio features (e.g. debt-to-income), date-time feature extraction (hour, day of week, is_weekend), and binning/discretization (`pd.cut()`, `pd.qcut()`).",
                "Encoding Categorical Variables: One-Hot Encoding (`pd.get_dummies()`, `OneHotEncoder`, creates $k-1$ binary indicator columns to prevent dummy variable trap multicollinearity) vs Ordinal / Label Encoding (preserves intrinsic hierarchical ranking, e.g. low=1, medium=2, high=3) vs Target / Mean Encoding.",
                "Dimensionality Reduction via PCA (Principal Component Analysis): Unsupervised orthogonal linear transformation; Computes covariance matrix $\\Sigma = \\frac{1}{n} X^T X$; Solves eigenvalue problem $\\Sigma v = \\lambda v$; Principal components align along directions of maximum variance; Explained variance ratio $EVR_i = \\lambda_i / \\sum \\lambda_k$.",
                "Handling Class Imbalance in Datasets: Severe majority class dominance (e.g. 99:1 in fraud detection); Techniques: Random undersampling, Random oversampling, Synthetic Minority Over-sampling Technique (SMOTE, creates synthetic points along line segments connecting $k$-nearest minority neighbors), and Class-weighted loss functions.",
                "Automated EDA Libraries: Profiling tools generating comprehensive HTML analytical dashboards in single line of code: `ydata-profiling` (formerly `pandas-profiling`), `sweetviz`, and `dtale`.",
                "University Examination Strategy: Calculate the explained variance ratio from PCA eigenvalues, determine the Chi-square statistic for a 2x2 contingency table, and compare One-Hot vs Ordinal encoding trade-offs."
        ],
        "keyPoints": [
                "Sample Skewness Formula: $g_1 = \\frac{n}{(n-1)(n-2)} \\sum \\left(\\frac{x_i - \\bar{x}}{s}\\right)^3$ ($>0$ right-skewed, $<0$ left-skewed).",
                "Sample Excess Kurtosis: $g_2 = \\frac{m_4}{s^4} - 3$ ($g_2 > 0$ leptokurtic sharp peak, $g_2 < 0$ platykurtic flat).",
                "Chi-Square Test Statistic: $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$ (degrees of freedom $(r - 1)(c - 1)$).",
                "PCA Covariance Matrix: $\\Sigma = \\frac{1}{n-1} X^T X$ (assuming centered data $\\bar{X} = 0$).",
                "PCA Explained Variance Ratio: $EVR_k = \\frac{\\lambda_k}{\\sum_{i=1}^p \\lambda_i}$.",
                "Dummy Variable Trap Rule: For a categorical variable with $k$ unique levels, create strictly $k - 1$ indicator columns.",
                "Spearman Rank Correlation: $\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$ (measures monotonic association).",
                "SMOTE Interpolation Formula: $x_{\\text{new}} = x_i + \\lambda (x_{zi} - x_i)$, where $\\lambda \\in [0, 1]$.",
                "Pareto 80/20 Rule: Often $80\\%$ of outcomes derive from $20\\%$ of categorical causes.",
                "Exam Scoring Tip: Accuracy is an invalid performance metric for heavily imbalanced classification datasets; always evaluate Precision, Recall, F1-score, and Area Under ROC Curve (AUC-ROC)."
        ]
},
    ('Object Oriented Programming (Advanced)', 1): {
        "title": "Design Patterns",
        "highlights": [
                "Gang of Four (GoF) Design Pattern Taxonomy: 23 classical patterns categorized into Creational (object creation mechanisms), Structural (class and object composition), and Behavioral (algorithms and assignment of responsibilities between objects).",
                "Creational Patterns: Singleton (ensures a class has only one instance, global access point, thread-safe double-checked locking), Factory Method (defines interface for creating object but lets subclasses decide which class to instantiate), Abstract Factory (creates families of related objects), and Builder (constructs complex objects step-by-step).",
                "Structural Patterns: Adapter (converts interface of class into another interface clients expect, wrapper), Decorator (attaches additional responsibilities to object dynamically without subclassing), Composite (treats individual objects and compositions of objects uniformly as tree structure), and Facade (provides unified high-level interface to subsystem).",
                "Behavioral Patterns: Observer (one-to-many dependency where state change in subject automatically notifies and updates all dependent observers, event-driven architecture), Strategy (defines family of interchangeable algorithms encapsulated in separate classes), and Command (encapsulates request as object, enabling undo/redo queues).",
                "SOLID Object-Oriented Principles: S-Single Responsibility Principle (a class should have one, and only one, reason to change); O-Open/Closed Principle (software entities should be open for extension but closed for modification); L-Liskov Substitution Principle; I-Interface Segregation; D-Dependency Inversion.",
                "Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types without altering program correctness; Preconditions cannot be strengthened in subtype; Postconditions cannot be weakened; Classic violation: Rectangle vs Square inheritance.",
                "Dependency Inversion Principle (DIP) & Dependency Injection: High-level modules should not depend on low-level modules; both should depend on abstractions; Inversion of Control (IoC) containers inject dependencies via constructor, setter, or interface injection.",
                "Template Method Pattern: Defines the skeleton of an algorithm in a base class method, deferring concrete implementation of specific steps to derived subclasses without altering overall workflow structure.",
                "Anti-Patterns in Software Engineering: God Object / Blob (monolithic class doing everything), Spaghetti Code, Spoke-and-Wheel tight coupling, and Golden Hammer (overuse of favorite pattern regardless of suitability).",
                "University Examination Strategy: Formulate the Singleton pattern in Java/C++ with thread-safe double-checked locking, implement the Observer pattern using Subject and Observer interfaces, and explain all five SOLID design principles."
        ],
        "keyPoints": [
                "Double-Checked Locking Singleton: Uses `volatile` instance variable and `synchronized` block inside `getInstance()`.",
                "Open/Closed Principle: Open for extension (via polymorphism/interfaces), closed for modification (existing code intact).",
                "Liskov Substitution Principle: If $S$ is a subtype of $T$, objects of type $T$ may be replaced with objects of type $S$ without altering behavior.",
                "Interface Segregation Principle: Clients should not be forced to depend upon interfaces they do not use.",
                "Dependency Inversion: Depend upon abstractions (interfaces), not upon concrete implementations.",
                "Observer Pattern Topology: Subject maintains list of observers; Calls `update()` on all registered observers upon state change.",
                "Decorator Pattern Mechanism: Wraps component instance and delegates calls while adding preprocessing or postprocessing behavior.",
                "Factory Method Intent: Defines an interface for creating an object, but lets subclasses decide which class to instantiate.",
                "Strategy Pattern Intent: Encapsulates interchangeable algorithmic strategies behind a common interface.",
                "Exam Scoring Tip: The Singleton pattern constructor must be declared `private` to prevent external instantiation via the `new` keyword."
        ]
},
    ('Object Oriented Programming (Advanced)', 2): {
        "title": "GUI Programming",
        "highlights": [
                "Event-Driven Programming Paradigm: Program execution flow dictated by external events (user mouse clicks, key presses, sensor inputs, window resize messages); Event loop dispatches events to registered event listener / callback handlers.",
                "Java GUI Frameworks Evolution: Abstract Window Toolkit (AWT, heavyweight native peer components) $\\to$ Swing (lightweight, pure Java, pluggable look-and-feel, `JComponent` hierarchy) $\\to$ JavaFX (modern hardware-accelerated scene graph, FXML declarative UI, CSS styling).",
                "Java Swing Layout Managers: `BorderLayout` (divides container into five zones: North, South, East, West, Center), `FlowLayout` (arranges components left-to-right, wrapping to next row), `GridLayout` (rigid equal-sized rectangular grid), and `GridBagLayout` (flexible multi-cell grid alignment with constraints).",
                "Event Delegation Model: Event Source (GUI component generating event, e.g. `JButton`), Event Object (encapsulates event details, e.g. `ActionEvent`), and Event Listener (implements interface, e.g. `ActionListener` with `actionPerformed(ActionEvent e)`).",
                "Anonymous Inner Classes & Lambda Handlers: Registering listeners compactly: `btn.addActionListener(e -> handleButtonClick(e))` replacing verbose anonymous inner class declarations.",
                "Model-View-Controller (MVC) in GUI Systems: Model (business data and logic), View (UI visual presentation), Controller (processes user input and updates Model/View); Promotes separation of concerns and parallel frontend/backend development.",
                "Concurrency & Event Dispatch Thread (EDT): All Swing GUI updates must execute strictly on single Event Dispatch Thread to prevent race conditions; Long-running background computation on EDT freezes UI; Solved using `SwingWorker<T, V>` background threads.",
                "Python GUI with Tkinter & PyQt: Tkinter (`ttk` themed widgets, geometry managers: `pack()`, `grid()`, `place()`); PyQt / PySide (cross-platform Qt framework bindings, Signals and Slots event communication mechanism).",
                "Custom Drawing & Graphics 2D: Overriding `paintComponent(Graphics g)` in Swing; Casting to `Graphics2D`; Rendering shapes (`Rectangle2D`, `Ellipse2D`), gradients, affine transformations, and anti-aliasing rendering hints.",
                "University Examination Strategy: Write a complete Java Swing application implementing `BorderLayout` and `ActionListener` via lambda expression, explain the role of the Event Dispatch Thread (EDT), and detail the MVC architectural pattern."
        ],
        "keyPoints": [
                "Event Dispatch Thread Rule: Never perform long I/O or heavy computation on the EDT; use `SwingWorker` instead.",
                "BorderLayout Default Zone: Components added without specifying a region default to the `Center` region.",
                "Swing Invocation Helper: `SwingUtilities.invokeLater(() -> createAndShowGUI())` safely launches UI on EDT.",
                "ActionListener Method: `public void actionPerformed(ActionEvent e)`.",
                "AWT vs Swing Component Distinction: AWT components use heavy OS native peers; Swing components are lightweight and painted purely in Java.",
                "GridBagLayout Flexibility: Allows components to span multiple rows and columns using `gridwidth` and `gridheight`.",
                "Qt Signal and Slot: Type-safe callback mechanism connecting UI events (`clicked()`) to receiver slots.",
                "Paint Component Rule: Always call `super.paintComponent(g)` first to clear previous background artifacts.",
                "MVC Separation: View displays data from Model; Controller translates user gestures into Model modifications.",
                "Exam Scoring Tip: To close a Java Swing application when the user clicks the window close button, always invoke `frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)`."
        ]
},
    ('Object Oriented Programming (Advanced)', 3): {
        "title": "Database Connectivity",
        "highlights": [
                "Java Database Connectivity (JDBC) Architecture: API enabling uniform communication with relational databases; Layers: Application $\\to$ JDBC API (`java.sql`, `javax.sql`) $\\to$ JDBC Driver Manager $\\to$ JDBC Driver $\\to$ Database server.",
                "Four Types of JDBC Drivers: Type 1 (JDBC-ODBC Bridge, deprecated, platform dependent), Type 2 (Native-API Partly Java, requires client C/C++ DB library), Type 3 (Network Protocol All-Java, middleware server), and Type 4 (Thin Driver / Direct-to-Database All-Java, highest performance, connects directly via database network protocol).",
                "Standard JDBC Programming Workflow (7 Steps): (1) Import `java.sql.*`; (2) Load and register driver (`Class.forName('org.postgresql.Driver')`); (3) Establish connection (`DriverManager.getConnection(url, user, pass)`); (4) Create statement; (5) Execute query; (6) Process `ResultSet`; (7) Close resources in `try-with-resources`.",
                "Statement vs PreparedStatement vs CallableStatement: `Statement` (static SQL, recompiled on every execution, vulnerable to SQL injection attacks); `PreparedStatement` (precompiled parameterized SQL, parameterized `?` placeholders, immune to SQL injection, high performance); `CallableStatement` (invokes database stored procedures).",
                "SQL Injection Attack & Prevention: Malicious input manipulating dynamic SQL strings (e.g. `' OR '1'='1`); Prevented completely by using parameterized `PreparedStatement` where user input is treated strictly as literal data rather than executable SQL code.",
                "ResultSet Navigation & Scrollability: Default forward-only non-updatable `ResultSet`; Scroll-sensitive and scroll-insensitive result sets (`rs.next()`, `rs.previous()`, `rs.first()`, `rs.last()`, `rs.absolute(row)`); Updatable result sets allowing in-place row modifications.",
                "Transaction Management in JDBC: Transactions enabled by setting `conn.setAutoCommit(false)`; Explicitly committed via `conn.commit()` or rolled back via `conn.rollback()` upon exception; Savepoints for partial rollbacks (`conn.setSavepoint()`).",
                "Connection Pooling & DataSources: Establishing physical DB connections is computationally expensive (TCP handshake, authentication); Connection pools (HikariCP, Apache DBCP, C3P0) maintain pool of pre-established reusable connections, drastically increasing web application throughput.",
                "Object-Relational Mapping (ORM) & JPA: Impedance mismatch between relational tables and object hierarchies; Java Persistence API (JPA) / Hibernate; Entity mapping annotations (`@Entity`, `@Table`, `@Id`, `@GeneratedValue`, `@OneToMany`, `@ManyToOne`); Hibernate Query Language (HQL / JPQL).",
                "University Examination Strategy: Write complete JDBC code using `PreparedStatement` to insert and query student records inside a `try-with-resources` block, explain how `PreparedStatement` prevents SQL injection, and detail transaction commit/rollback."
        ],
        "keyPoints": [
                "JDBC Type 4 Driver: Pure Java Thin Driver communicating directly with database via proprietary network protocol.",
                "Disable Auto-Commit: `conn.setAutoCommit(false)` initiates manual multi-statement transaction management.",
                "PreparedStatement Placeholder: Uses `?` positional parameters set via `pstmt.setInt(1, val)`, `pstmt.setString(2, val)`.",
                "SQL Injection Defense: `PreparedStatement` precompiles SQL template and sanitizes input as literals.",
                "Try-With-Resources Rule: Automatically closes `Connection`, `Statement`, and `ResultSet` objects implementing `AutoCloseable`.",
                "Connection Pool Benchmark: HikariCP provides zero-overhead connection pooling for enterprise production applications.",
                "Stored Procedure Invocation: Uses `CallableStatement cstmt = conn.prepareCall(\"{call proc_name(?, ?)}\")`.",
                "ResultSet Metadata: `ResultSetMetaData rsmd = rs.getMetaData()` extracts column counts, names, and SQL data types.",
                "ORM Entity Annotation: `@Entity` designates a Java class as a mapped database table.",
                "Exam Scoring Tip: Always handle SQL exceptions and invoke `conn.rollback()` inside the `catch` block to ensure transactional integrity."
        ]
},
    ('Object Oriented Programming (Advanced)', 4): {
        "title": "Network Programming",
        "highlights": [
                "OSI & TCP/IP Network Models: Transport layer protocols: Transmission Control Protocol (TCP, connection-oriented, reliable byte stream, three-way handshake, error checking, flow/congestion control) vs User Datagram Protocol (UDP, connectionless, unreliable, low-latency packet delivery, no handshake).",
                "IP Addressing & Port Numbers: IPv4 (32-bit, dotted-decimal) vs IPv6 (128-bit); Port numbers ($0-65535$, well-known ports $0-1023$ e.g. HTTP 80, HTTPS 443, SSH 22); Socket represents endpoint for network communication: (IP Address, Port Number).",
                "TCP Socket Programming in Java: Server: `ServerSocket server = new ServerSocket(port)`, listens for connections via blocking `server.accept()`, returns client `Socket`; Client: `Socket client = new Socket(host, port)`; Data exchange via `InputStream` and `OutputStream` wrapped in `BufferedReader` and `PrintWriter`.",
                "Multithreaded Network Servers: Single-threaded servers block on client I/O; Multithreaded servers spawn separate worker thread (`new Thread(new ClientHandler(socket)).start()`) or use thread pools (`ExecutorService`) to handle thousands of concurrent clients simultaneously.",
                "UDP Datagram Sockets: `DatagramSocket` and `DatagramPacket`; Packets contain payload bytes, destination IP, and port number; Unconnected transmission; Used for DNS lookups, video streaming, and online multiplayer gaming where packet loss is preferable to latency spikes.",
                "URL & HTTP Client Programming in Java: `java.net.URI` and `java.net.URL`; `HttpURLConnection` for GET and POST HTTP requests; Modern `java.net.http.HttpClient` (Java 11+) supporting HTTP/2, asynchronous requests with `CompletableFuture`, and reactive streams.",
                "Non-Blocking I/O (Java NIO): Channel-based asynchronous I/O (`java.nio.channels.SocketChannel`, `ServerSocketChannel`); `Buffer` (ByteBuffer) and `Selector` multiplexer; Single selector thread monitors multiple network channels for ready I/O operations (`SelectionKey.OP_READ`, `OP_WRITE`).",
                "Remote Method Invocation (RMI): Allows Java object on one JVM to invoke methods on object running in remote JVM; Architecture: Remote Interface, Stub (client-side proxy), Skeleton (server-side dispatcher), and RMI Registry naming service (`rmiregistry` port 1099).",
                "Network Security & SSL/TLS Sockets: `SSLSocket` and `SSLServerSocket` providing encrypted, authenticated communication; Digital certificates (X.509), public-key cryptography, symmetric session encryption, and TLS handshake protocols.",
                "University Examination Strategy: Write a complete multi-client TCP chat server and client in Java using `ServerSocket` and threads, contrast TCP vs UDP characteristics, and describe the Java NIO Selector architecture."
        ],
        "keyPoints": [
                "TCP ServerSocket Accept: `Socket s = serverSocket.accept()` blocks until client connection request arrives.",
                "TCP 3-Way Handshake: SYN $\\to$ SYN-ACK $\\to$ ACK establishing reliable connection state.",
                "UDP Socket Class: `DatagramSocket` sends and receives standalone `DatagramPacket` objects.",
                "Thread Pool Execution: `ExecutorService pool = Executors.newFixedThreadPool(50)` limits server thread explosion.",
                "NIO Selector Multiplexing: Single thread monitors multiple `SocketChannel` instances for ready I/O events.",
                "RMI Remote Interface: Must extend `java.rmi.Remote` and all methods must declare `throws RemoteException`.",
                "RMI Registry Lookup: `Naming.lookup(\"rmi://localhost/ServiceName\")` retrieves remote client stub.",
                "Socket Stream Flush: Always call `writer.flush()` to force immediate packet transmission over TCP buffer.",
                "Ephemeral Port Range: Client sockets dynamically assigned ports from ephemeral range ($49152-65535$).",
                "Exam Scoring Tip: When closing network streams, closing the outer `BufferedReader` or `PrintWriter` automatically closes the underlying socket input/output stream."
        ]
},
    ('Object Oriented Programming (Advanced)', 5): {
        "title": "Software Testing Basics",
        "highlights": [
                "Software Testing Objectives & Levels: Verification (building product right) vs Validation (building right product); Testing hierarchy: Unit testing (isolated methods/classes), Integration testing (component interaction), System testing (full application behavior), and Acceptance testing (UAT).",
                "Black-Box vs White-Box Testing: Black-box (specification-based, zero knowledge of internal code structure) vs White-box (structural testing, examines internal logic paths, statements, branches, and conditions).",
                "Black-Box Testing Techniques: Equivalence Partitioning (divides input domain into valid and invalid equivalence classes; tests single representative value from each class) and Boundary Value Analysis (BVA, tests values at boundaries: $min, min+, nominal, max-, max$).",
                "White-Box Structural Coverage Metrics: Statement Coverage (percentage of executable statements executed), Branch / Decision Coverage (tests all True/False branches of conditional statements), Condition Coverage, and Multiple Condition Coverage (MCC).",
                "Cyclomatic Complexity (McCabe's Metric): Quantitative measure of structural complexity derived from control flow graph: $V(G) = E - N + 2 P$, where $E$ is edges, $N$ is nodes, and $P$ is connected components ($P=1$ for single program); Equivalently: $V(G) = P_d + 1$ (predicates + 1); Defines minimum number of linearly independent test paths.",
                "Unit Testing with JUnit 5: Jupiter testing framework; Annotations: `@Test`, `@BeforeEach`, `@AfterEach`, `@BeforeAll` (static), `@AfterAll`, `@DisplayName`, `@Disabled`; Assertions: `assertEquals()`, `assertTrue()`, `assertThrows()`, `assertTimeout()`, and `assertAll()`.",
                "Mocking & Test Doubles with Mockito: Types of test doubles: Dummy, Fake, Stub, Spy, and Mock; Mockito framework creates mock objects (`@Mock`, `Mockito.mock()`); Stubbing method return values: `when(service.getData()).thenReturn(mockData)`; Verifying method interactions: `verify(service, times(1)).save(any())`.",
                "Test-Driven Development (TDD): Red-Green-Refactor development cycle: (1) Red: Write failing unit test for new feature; (2) Green: Write minimal production code to pass test; (3) Refactor: Clean code and eliminate duplication while ensuring tests remain green.",
                "Regression Testing & Continuous Integration (CI): Re-running existing test suite after code modifications to ensure updates do not break existing functionality; Automated CI/CD pipelines (GitHub Actions, Jenkins) running automated unit tests on each commit pull request.",
                "University Examination Strategy: Calculate McCabe's Cyclomatic Complexity from a given control flow graph, derive test cases using Boundary Value Analysis and Equivalence Partitioning, and write a JUnit 5 test class with assertions and exception testing."
        ],
        "keyPoints": [
                "McCabe Cyclomatic Complexity: $V(G) = E - N + 2$ (or $V(G) = \\text{Predicate Nodes} + 1$).",
                "Boundary Value Analysis Range: For $[a, b]$, test values are $a, a+1, \\text{nominal}, b-1, b$.",
                "JUnit 5 Test Annotation: `@Test` designates a method as a test method.",
                "JUnit 5 Exception Assertion: `assertThrows(ExpectedException.class, () -> codeToRun())`.",
                "JUnit 5 BeforeAll Requirement: Must be declared `static` unless lifecycle is set to `PER_CLASS`.",
                "Mockito Stubbing Syntax: `when(mockObject.method(args)).thenReturn(returnValue)`.",
                "TDD Cycle Steps: Red (write failing test) $\\to$ Green (pass test) $\\to$ Refactor (clean code).",
                "Test Double Categories: Dummy (placeholder), Stub (canned answers), Mock (pre-programmed expectations), Spy (wrapper recording calls).",
                "Statement vs Branch Coverage: $100\\%$ branch coverage guarantees $100\\%$ statement coverage, but the converse is not true.",
                "Exam Scoring Tip: Cyclomatic complexity indicates the exact minimum number of test cases required to achieve complete branch/decision coverage of an algorithm."
        ]
},
}
