"""
Generator for scripts/data_sem3_btech_missing.py
Writes dedicated, rich, authentic 10 Highlights + 10 Bookmarks for 13 B.Tech Semester 3 subjects (65 units).
"""

import sys, os

content = '''"""
B.Tech Semester 3: Missing Core Engineering Subjects
Contains dedicated, authentic 10 Highlights + 10 Key Points (Bookmarks) per unit.
All formulas are formatted for KaTeX rendering.
"""

btech_missing_data = {
    # -------------------------------------------------------------------------
    # 1. MATERIAL SCIENCE & ENGINEERING
    # -------------------------------------------------------------------------
    ("Material Science & Engineering", 1): {
        "title": "Crystal Structure",
        "highlights": [
            "Bravais Lattices & Unit Cell Geometry: 14 space lattices grouped into 7 crystal systems (cubic, tetragonal, orthorhombic, rhombohedral, hexagonal, monoclinic, triclinic); Defined by lattice parameters $a, b, c$ and interaxial angles $\\\\alpha, \\\\beta, \\\\gamma$.",
            "Cubic Packing Efficiencies: Simple Cubic (SC, coordination number 6, $\\\\text{APF} = 0.52$), Body-Centered Cubic (BCC, coordination 8, $\\\\text{APF} = 0.68, a = 4R/\\\\sqrt{3}$), and Face-Centered Cubic (FCC, coordination 12, $\\\\text{APF} = 0.74, a = 2R\\\\sqrt{2}$).",
            "Hexagonal Close-Packed (HCP) Lattice: Stacking sequence $ABABAB...$ with coordination number 12 and $\\\\text{APF} = 0.74$; Ideal axial ratio $c/a = \\\\sqrt{8/3} \\\\approx 1.633$ exemplified by Mg, Zn, and Ti.",
            "Miller Indices of Planes & Directions: Crystallographic directions $[uvw]$ represent vector components reduced to smallest integers; Planes $(hkl)$ defined by reciprocals of axial intercepts; Interplanar spacing for cubic systems $d_{hkl} = \\\\frac{a}{\\\\sqrt{h^2 + k^2 + l^2}}$.",
            "Linear & Planar Atomic Densities: Linear density $LD = \\\\frac{\\\\text{Number of atoms centered on vector}}{\\\\text{Length of vector}}$; Planar density $PD = \\\\frac{\\\\text{Number of atoms on plane}}{\\\\text{Area of plane}}$; Close-packed planes $(111)$ in FCC maximize slip.",
            "Bragg's Law of X-Ray Diffraction: Constructive interference condition $n\\\\lambda = 2d_{hkl}\\\\sin\\\\theta$; Systematic absences identify cubic lattices: SC (all peaks), BCC ($h+k+l$ must be even), FCC ($h, k, l$ unmixed, all even or all odd).",
            "Point Imperfections in Crystals: Vacancies ($N_v = N e^{-Q_v / k_B T}$), self-interstitials, Schottky defects (cation-anion vacancy pairs in ionic solids), and Frenkel defects (cation vacancy plus interstitial cation).",
            "Line Defects (Dislocations): Edge dislocation (extra half-plane of atoms, Burgers vector $\\\\vec{b}$ perpendicular to dislocation line) vs Screw dislocation ($\\\\vec{b}$ parallel to line); Mixed dislocations combine both characters.",
            "Planar Defects & Grain Boundaries: Low-angle tilt boundaries (arrays of edge dislocations), twist boundaries (screw dislocation grids), twin boundaries (mirror symmetrical lattice orientation), and stacking faults.",
            "University Examination Strategy: Derive $\\\\text{APF}$ for BCC and FCC step-by-step from atomic radius $R$, calculate Miller indices from plane intercepts, and index XRD powder diffraction peaks."
        ],
        "keyPoints": [
            "Atomic Packing Factor: $\\\\text{APF} = \\\\frac{N_{\\\\text{atoms}} \\\\times (4/3)\\\\pi R^3}{V_{\\\\text{unit cell}}}$.",
            "FCC Lattice Parameter: $a = 2R\\\\sqrt{2}$ with $\\\\text{APF} = 0.74$.",
            "BCC Lattice Parameter: $a = \\\\frac{4R}{\\\\sqrt{3}}$ with $\\\\text{APF} = 0.68$.",
            "Cubic Interplanar Spacing: $d_{hkl} = \\\\frac{a}{\\\\sqrt{h^2 + k^2 + l^2}}$.",
            "Bragg's Diffraction Law: $n\\\\lambda = 2d\\\\sin\\\\theta$.",
            "BCC Diffraction Selection Rule: Reflection occurs iff $h + k + l$ is even.",
            "FCC Diffraction Selection Rule: Reflection occurs iff $h, k, l$ are all odd or all even.",
            "Vacancy Concentration Equation: $N_v = N \\\\exp\\\\left(-\\\\frac{Q_v}{k_B T}\\\\right)$.",
            "Burgers Vector Orientation: $\\\\vec{b} \\\\perp \\\\vec{t}$ for edge dislocation; $\\\\vec{b} \\\\parallel \\\\vec{t}$ for screw dislocation.",
            "Exam Scoring Tip: For Miller indices, negative coordinates are denoted with a bar over the number (e.g. $[\\\\bar{1}10]$); never separate indices with commas."
        ]
    },
    ("Material Science & Engineering", 2): {
        "title": "Mechanical Properties",
        "highlights": [
            "Engineering vs True Stress and Strain: Engineering stress $\\\\sigma = F/A_0$ and strain $\\\\varepsilon = \\\\Delta L / L_0$; True stress $\\\\sigma_t = F/A = \\\\sigma(1 + \\\\varepsilon)$ and true strain $\\\\varepsilon_t = \\\\ln(L/L_0) = \\\\ln(1 + \\\\varepsilon)$ valid up to necking.",
            "Hooke's Law & Elastic Moduli: Linear elastic regime $\\\\sigma = E \\\\varepsilon$; Shear modulus $G = \\\\tau / \\\\gamma$; Bulk modulus $K = -V \\\\frac{\\\\Delta P}{\\\\Delta V}$; Elastic relations $E = 2G(1 + \\\\nu) = 3K(1 - 2\\\\nu)$ where $\\\\nu$ is Poisson's ratio.",
            "Tensile Yielding & Plastic Deformation: Proportional limit, yield strength ($0.2\\\\%$ offset yield criterion $\\\\sigma_{0.2}$), ultimate tensile strength (UTS), uniform elongation, and reduction in area; Luders bands in low-carbon steel.",
            "Hollomon Power-Law Work Hardening: True stress-true strain plastic curve modeled as $\\\\sigma_t = K \\\\varepsilon_t^n$, where $K$ is strength coefficient and $n$ is strain hardening exponent; Necking initiates when $\\\\varepsilon_t = n$.",
            "Hardness Testing Methodologies: Brinell hardness ($HBW$, hardened carbide sphere indenter under load $P$), Vickers hardness ($HV$, $136^\\\\circ$ diamond pyramid), and Rockwell hardness ($HRC$, $120^\\\\circ$ diamond Brale indenter measuring depth of penetration).",
            "Impact Toughness & Ductile-to-Brittle Transition: Charpy V-notch and Izod impact tests measuring absorbed energy; BCC metals (ferritic steels) exhibit marked Ductile-to-Brittle Transition Temperature (DBTT); FCC metals remain ductile at cryogenic temperatures.",
            "Fatigue Failure & S-N Curves: Cyclic stress amplitude $S$ vs cycles to failure $N$; Endurance limit $\\\\sigma_e$ below which steel never fails; Basquin relationship for high-cycle fatigue $S_a = \\\\sigma_f' (2N_f)^b$.",
            "Creep Deformation in Metals: Time-dependent deformation under constant elevated temperature ($T > 0.4 T_m$); Stages: primary (transient), secondary (steady-state creep rate $\\\\dot{\\\\varepsilon}_s = A \\\\sigma^m e^{-Q_c/RT}$), and tertiary (accelerating void coalescence).",
            "Strengthening Mechanisms: (1) Grain boundary refinement (Hall-Petch equation $\\\\sigma_y = \\\\sigma_0 + k_y d^{-1/2}$); (2) Solid solution hardening; (3) Strain hardening (dislocation forest entanglement); (4) Precipitation hardening (Orowan looping).",
            "University Examination Strategy: Sketch engineering vs true stress-strain curves showing necking onset, state the Hall-Petch equation, and calculate elastic constants from $E, G, \\\\nu$."
        ],
        "keyPoints": [
            "True Stress Relation: $\\\\sigma_t = \\\\sigma(1 + \\\\varepsilon)$.",
            "True Strain Relation: $\\\\varepsilon_t = \\\\ln(1 + \\\\varepsilon)$.",
            "Hollomon Strain Hardening Law: $\\\\sigma_t = K \\\\varepsilon_t^n$.",
            "Necking Instability Criterion: $d\\\\sigma_t / d\\\\varepsilon_t = \\\\sigma_t$, occurring at $\\\\varepsilon_t = n$.",
            "Elastic Moduli Linking Formula: $E = 2G(1 + \\\\nu) = 3K(1 - 2\\\\nu)$.",
            "Hall-Petch Strengthening Formula: $\\\\sigma_y = \\\\sigma_0 + k_y d^{-1/2}$.",
            "Steady-State Creep Power Law: $\\\\dot{\\\\varepsilon}_s = A \\\\sigma^m \\\\exp\\\\left(-\\\\frac{Q_c}{RT}\\\\right)$.",
            "Poisson's Ratio Constraint: Theoretical bounds for isotropic solids: $-1 \\\\le \\\\nu \\\\le 0.5$; Typical metals $\\\\nu \\\\approx 0.33$.",
            "Brinell Hardness Formula: $HB = \\\\frac{2P}{\\\\pi D (D - \\\\sqrt{D^2 - d^2})}$.",
            "Exam Scoring Tip: In impact testing, BCC materials show DBTT, whereas FCC materials like aluminum and austenitic stainless steel do not exhibit a DBTT curve."
        ]
    },
    ("Material Science & Engineering", 3): {
        "title": "Phase Diagrams",
        "highlights": [
            "Gibbs Phase Rule: Degrees of freedom $F = C - P + 2$ for general systems; At constant atmospheric pressure $P = 1\\\\text{ atm}$, condensed phase rule simplifies to $F = C - P + 1$.",
            "Isomorphous Binary Alloy Systems: Complete liquid and solid solubility (e.g. Cu-Ni system); Liquidus and solidus curves enclosing liquid + solid two-phase field.",
            "Lever Rule & Tie-Line Analysis: In two-phase field, tie-line gives phase compositions; Lever rule calculates phase mass fractions: $W_L = \\\\frac{C_\\\\alpha - C_0}{C_\\\\alpha - C_L}$ and $W_\\\\alpha = \\\\frac{C_0 - C_L}{C_\\\\alpha - C_L}$.",
            "Binary Eutectic Systems: Invariant eutectic reaction where liquid transforms into two intimate solid phases: $L \\\\rightleftharpoons \\\\alpha + \\\\beta$ at eutectic temperature and composition (e.g. Pb-Sn alloy system).",
            "Peritectic & Monotectic Invariant Reactions: Peritectic reaction: $L + \\\\alpha \\\\rightleftharpoons \\\\beta$ upon cooling; Monotectic reaction: $L_1 \\\\rightleftharpoons L_2 + \\\\alpha$ involving liquid miscibility gap.",
            "Solid-State Invariant Reactions: Eutectoid reaction: $\\\\gamma \\\\rightleftharpoons \\\\alpha + \\\\beta$ (e.g. Austenite to Pearlite in Fe-C); Peritectoid reaction: $\\\\alpha + \\\\beta \\\\rightleftharpoons \\\\gamma$.",
            "Iron-Iron Carbide ($Fe-Fe_3C$) Phase Diagram: Key phases: $\\\\alpha$-ferrite (BCC, max $0.022\\\\%\\\\text{ C}$), $\\\\gamma$-austenite (FCC, max $2.14\\\\%\\\\text{ C}$), $\\\\delta$-ferrite (BCC), and Cementite ($Fe_3C$, intermetallic compound, $6.67\\\\%\\\\text{ C}$).",
            "Fe-C Invariant Transformations: (1) Peritectic at $1495^\\\\circ\\\\text{C}$ ($0.17\\\\%\\\\text{ C}$); (2) Eutectic at $1147^\\\\circ\\\\text{C}$ ($4.3\\\\%\\\\text{ C}$, Ledeburite); (3) Eutectoid at $727^\\\\circ\\\\text{C}$ ($0.76\\\\%\\\\text{ C}$, Pearlite $\\\\alpha + Fe_3C$).",
            "Hypoeutectoid vs Hypereutectoid Steels: Hypoeutectoid ($< 0.76\\\\%\\\\text{ C}$) forms proeutectoid ferrite + pearlite; Hypereutectoid ($0.76\\\\% - 2.14\\\\%\\\\text{ C}$) forms proeutectoid cementite network + pearlite; Cast irons ($> 2.14\\\\%\\\\text{ C}$).",
            "University Examination Strategy: Draw complete $Fe-Fe_3C$ phase diagram with accurate temperatures ($727, 912, 1147, 1495, 1538^\\\\circ\\\\text{C}$), label all phases, and apply the lever rule at $0.4\\\\%\\\\text{ C}$."
        ],
        "keyPoints": [
            "Condensed Gibbs Phase Rule: $F = C - P + 1$.",
            "Lever Rule Formula for Liquid Fraction: $W_L = \\\\frac{C_\\\\alpha - C_0}{C_\\\\alpha - C_L}$.",
            "Lever Rule Formula for Solid Fraction: $W_\\\\alpha = \\\\frac{C_0 - C_L}{C_\\\\alpha - C_L}$.",
            "Eutectic Invariant Reaction: $L \\\\xrightarrow{\\\\text{cooling}} \\\\alpha + \\\\beta$.",
            "Eutectoid Invariant Reaction: $\\\\gamma \\\\xrightarrow{\\\\text{cooling}} \\\\alpha + Fe_3C$ (Pearlite at $727^\\\\circ\\\\text{C}, 0.76\\\\%\\\\text{ C}$).",
            "Peritectic Invariant Reaction: $L + \\\\delta \\\\xrightarrow{\\\\text{cooling}} \\\\gamma$ (at $1495^\\\\circ\\\\text{C}$).",
            "Cementite Stoichiometric Composition: $Fe_3C$ contains strictly $6.67\\\\%\\\\text{ C}$ by weight.",
            "Maximum Carbon Solubility in Austenite: $2.14\\\\%\\\\text{ C}$ at $1147^\\\\circ\\\\text{C}$ (FCC interstitial voids are larger than BCC).",
            "Maximum Carbon Solubility in Ferrite: $0.022\\\\%\\\\text{ C}$ at $727^\\\\circ\\\\text{C}$.",
            "Exam Scoring Tip: An invariant reaction has zero degrees of freedom ($F = 0$); temperature and compositions of all participating phases are fixed."
        ]
    },
    ("Material Science & Engineering", 4): {
        "title": "Heat Treatment",
        "highlights": [
            "Time-Temperature-Transformation (TTT) Diagrams: Isothermal transformation curves (C-curves); Depict start and finish times for austenite decomposition into pearlite, bainite, or martensite as function of temperature.",
            "Continuous Cooling Transformation (CCT) Diagrams: Reflects non-isothermal industrial cooling; Transformation noses shift downward and to the right compared to TTT diagrams; Critical Cooling Rate (CCR) is minimum rate to avoid pearlite/bainite and obtain $100\\\\%$ martensite.",
            "Martensitic Transformation Kinetics: Diffusionless, athermal shear transformation; Austenite (FCC) distorts into Body-Centered Tetragonal (BCT) martensite; Starts at $M_s$ and finishes at $M_f$; High hardness due to trapped supersaturated interstitial carbon atoms.",
            "Annealing Heat Treatments: Full annealing (austenitizing followed by slow furnace cooling, producing coarse, soft pearlite), Process annealing (subcritical recrystallization at $550-650^\\\\circ\\\\text{C}$ to relieve cold-work strain), and Spheroidizing (forming rounded carbide globules for maximum machinability).",
            "Normalizing Heat Treatment: Austenitizing $50^\\\\circ\\\\text{C}$ above $A_3/A_{cm}$ followed by still air cooling; Yields fine, uniform pearlite with higher tensile strength and yield point than annealed steel.",
            "Quenching Media & Severities: Quenching in water, oil, brine, or molten salt; Severity of quench factor $H$; Brine ($H \\\\approx 2.0$) > Water ($H = 1.0$) > Oil ($H \\\\approx 0.4$); High severity risks quench cracking and thermal distortion.",
            "Tempering of Quenched Steels: Subcritical reheating ($150-650^\\\\circ\\\\text{C}$) to transform brittle BCT martensite into tough tempered martensite (extremely fine ferrite matrix containing cementite nanoparticles); Stages: carbide precipitation, austenite breakdown, cementite coarsening.",
            "Austempering & Martempering: Austempering (quench into molten salt above $M_s$, hold isothermally to form $100\\\\%$ tough bainite without subsequent tempering); Martempering / Marquenching (quench to just above $M_s$, equalize temperature, then air cool to minimize residual stress).",
            "Hardenability & Jominy End-Quench Test: Hardenability is depth to which steel can form martensite; Standard $1\\\\text{-inch}$ cylindrical bar austenitized, placed in fixture, end-quenched by water jet; Hardness $HRC$ plotted against distance from quenched end.",
            "Case Hardening & Surface Treatments: Carburizing (gas, liquid pack diffusion at $900-950^\\\\circ\\\\text{C}$), Nitriding (nascent nitrogen diffusion at $500-550^\\\\circ\\\\text{C}$, yielding hard $Fe_4N$ without quenching), Carbonitriding, and Induction/Flame hardening."
        ],
        "keyPoints": [
            "Critical Cooling Rate (CCR): Minimum cooling slope tangent to pearlite nose: $CCR = (T_E - T_{\\\\text{nose}}) / t_{\\\\text{nose}}$.",
            "BCT Martensite Structure: Formed by diffusionless Bain distortion of FCC austenite lattice.",
            "Austempering Final Microstructure: Produces $100\\\\%$ Bainite with excellent impact toughness.",
            "Martempering Purpose: Equalizes thermal gradient across cross-section to eliminate quench cracking.",
            "Full Annealing Cooling Regimen: Slow furnace cooling ($10-30^\\\\circ\\\\text{C/hr}$).",
            "Normalizing Cooling Regimen: Continuous still air cooling.",
            "Jominy Distance Metric: Measured in sixteenths of an inch from the water-quenched tip ($J_{dist}$).",
            "Nitriding Advantage: Operates below eutectoid temperature ($500^\\\\circ\\\\text{C}$), eliminating dimensional distortion and post-quench cracking.",
            "Tempered Martensite Microstructure: Stable dispersion of submicroscopic cementite particles in an $\\\\alpha$-ferrite matrix.",
            "Exam Scoring Tip: Never confuse hardness (resistance to indentation) with hardenability (ease of forming martensite to deep interior locations)."
        ]
    },
    ("Material Science & Engineering", 5): {
        "title": "Engineering Materials",
        "highlights": [
            "Classification of Steels & Cast Irons: Low-carbon ($<0.25\\\\%\\\\text{ C}$), medium-carbon ($0.25-0.60\\\\%\\\\text{ C}$), high-carbon ($0.60-1.4\\\\%\\\\text{ C}$); Cast irons: Gray cast iron (graphite flakes, high vibration damping), Ductile/Nodular cast iron (magnesium inoculated, graphite spheroids), White cast iron (cementite, wear resistant), and Malleable iron.",
            "Stainless Steels Classification: Austenitic stainless steels ($18/8$ Cr-Ni, AISI 304/316, FCC, non-magnetic, superior corrosion resistance), Ferritic stainless steels ($12-17\\\\%\\\\text{ Cr}$, AISI 430, BCC), and Martensitic stainless steels ($11-17\\\\%\\\\text{ Cr} + 0.15-1.0\\\\%\\\\text{ C}$, AISI 410, hardenable by quenching).",
            "Aluminum Alloys & Age Hardening: Wrought vs cast Al alloys; Heat-treatable alloys (e.g. Al-Cu Duralumin 2024, Al-Zn 7075); Precipitation hardening sequence: Supersaturated solid solution (SSSS) $\\\\to$ GP zones $\\\\to \\\\theta'' \\\\to \\\\theta' \\\\to$ stable $\\\\theta$ ($CuAl_2$).",
            "Copper Alloys & Bronzes: Brasses (Cu-Zn alloys: Cartridge brass $70/30$, Muntz metal $60/40$); Bronzes (Cu-Sn phosphor bronze, aluminum bronze, silicon bronze); High thermal/electrical conductivity, corrosion resistance, and non-sparking properties.",
            "Titanium & Nickel Superalloys: Titanium alloys ($\\\\alpha$-Ti, $\\\\beta$-Ti, $\\\\alpha+\\\\beta$ Ti-6Al-4V) exhibiting high specific strength up to $500^\\\\circ\\\\text{C}$; Nickel-base superalloys (Inconel 718, Nimonic) utilizing $\\\\gamma'$ ($Ni_3(Al, Ti)$) precipitates for jet engine turbine blades up to $1000^\\\\circ\\\\text{C}$.",
            "Engineering Ceramics: Alumina ($Al_2O_3$), Silicon Carbide ($SiC$), Silicon Nitride ($Si_3N_4$), and Zirconia ($ZrO_2$, transformation toughening via tetragonal-to-monoclinic phase change under crack tip stress fields).",
            "Polymer Classifications: Thermoplastics (linear/branched chains, van der Waals bonds, recyclable by heating, e.g. PE, PP, PVC, PTFE) vs Thermosets (covalently cross-linked network, degrade upon heating, e.g. Epoxy, Phenolic, Polyurethane) and Elastomers (vulcanized rubber).",
            "Polymer Molecular Architecture & Crystallinity: Number-average molecular weight $\\\\bar{M}_n$ and weight-average $\\\\bar{M}_w$; Polydispersity index $PDI = \\\\bar{M}_w / \\\\bar{M}_n$; Glass transition temperature $T_g$ vs melting temperature $T_m$.",
            "Fiber-Reinforced Composites (FRP): Matrix phases (polymer, metal, ceramic) bound to reinforcing fibers (glass, carbon, aramid); Rule of mixtures for longitudinal elastic modulus $E_c = E_f V_f + E_m V_m$; Transverse modulus $1/E_c = V_f/E_f + V_m/E_m$.",
            "University Examination Strategy: State precipitation hardening stages in Al-Cu alloys with temperature-time curves, calculate composite longitudinal and transverse moduli, and classify stainless steel grades."
        ],
        "keyPoints": [
            "Rule of Mixtures (Longitudinal Modulus): $E_{cl} = E_f V_f + E_m V_m$.",
            "Inverse Rule of Mixtures (Transverse Modulus): $E_{ct} = \\\\frac{E_f E_m}{V_f E_m + V_m E_f}$.",
            "Composite Volume Fraction Sum: $V_f + V_m = 1$.",
            "Transformation Toughening in Zirconia: $t \\\\to m$ phase change induces $3-5\\\\%$ volume expansion, clamping crack tips shut.",
            "Polydispersity Index: $PDI = \\\\frac{\\\\bar{M}_w}{\\\\bar{M}_n} \\\\ge 1$.",
            "Austenitic Stainless Steel Formulation: Minimum $18\\\\%\\\\text{ Cr} + 8\\\\%\\\\text{ Ni}$ stabilizing FCC austenite at room temperature.",
            "Gray Cast Iron Microstructure: Flake graphite in pearlite or ferrite matrix; Excellent compressive strength and vibration damping.",
            "Ductile Iron Inoculant: Magnesium or Cerium additions spheroidize graphite during solidification.",
            "Al-Cu Hardening Precipitate: $\\\\theta$ phase is intermetallic $CuAl_2$.",
            "Exam Scoring Tip: Thermoplastics soften reversibly upon heating above $T_g$ or $T_m$, whereas thermosets decompose irreversibly due to covalent chemical cross-links."
        ]
    }
}
'''

# Now let's append remaining subjects:
# Material Science, Aerospace Materials, Manufacturing Tech, Machine Drawing, Building Materials, Engineering Geology,
# Momentum Transfer, Chem Thermo, Organic Chem, Solar, Python DS, Advanced OOP.

with open('scripts/data_sem3_btech_missing.py', 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved base scripts/data_sem3_btech_missing.py")
