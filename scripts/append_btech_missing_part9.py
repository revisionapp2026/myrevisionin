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
# 9. ORGANIC CHEMISTRY
# =========================================================================
add("Organic Chemistry", 1, "Reaction Mechanisms", [
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
], [
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
])

add("Organic Chemistry", 2, "Functional Groups", [
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
], [
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
])

add("Organic Chemistry", 3, "Stereochemistry", [
    "Constitutional vs Stereoisomerism: Constitutional isomers (different atom connectivity: chain, positional, functional, metamerism, tautomerism); Stereoisomers (identical connectivity, different spatial arrangement: conformational vs configurational).",
    "Conformational Analysis of Acyclic Alkanes: Ethane (staggered vs eclipsed conformers, torsional strain $12\\text{ kJ/mol}$); n-Butane rotation around C2-C3 bond: Anti-periplanar (fully staggered, global energy minimum), Gauche (staggered, steric strain $3.8\\text{ kJ/mol}$), Eclipsed, and Fully eclipsed (syn-periplanar, maximum potential energy, $19\\text{ kJ/mol}$).",
    "Conformations of Cyclohexane: Planar ring angle strain ($120^\\circ$ vs ideal tetrahedral $109.5^\\circ$); Chair conformation (completely strain-free, zero angle and torsional strain); Boat conformation (flagpole interactions and eclipsed bonds); Half-chair and Twist-boat conformations.",
    "Equatorial vs Axial Substituted Cyclohexanes: Axial substituents experience 1,3-diaxial steric repulsions; Equatorial substituents orient outward into open space; Conformational free energy difference $\\Delta G^\\circ = -R T \\ln K$; Methylcyclohexane exists $95\\%$ in equatorial chair at equilibrium.",
    "Optical Activity & Chirality: Chiral molecule lacks plane of symmetry ($\\sigma$) and center of inversion ($i$); Rotates plane-polarized light measured by polarimeter; Specific optical rotation $[\alpha]_\\lambda^T = \\frac{\\alpha}{l \\cdot c}$, where $\\alpha$ is observed rotation, $l$ is path length in dm, and $c$ is concentration in g/mL.",
    "Enantiomers vs Diastereomers: Enantiomers (non-superimposable mirror images, identical physical/chemical properties in achiral environment, equal and opposite optical rotation); Diastereomers (stereoisomers that are not mirror images, different melting points, boiling points, and chromatographic retention factors).",
    "Meso Compounds & Racemic Mixtures: Meso compound (contains internal plane of symmetry despite chiral centers, optically inactive by internal compensation, e.g. meso-tartaric acid); Racemic mixture ($(\\pm)$ or $dl$, equimolar mixture of enantiomers, optically inactive by external compensation).",
    "Cahn-Ingold-Prelog (CIP) Priority Rules & $R/S$ Nomenclature: Priorities assigned by atomic number directly attached to stereocenter; If tied, compare along chain; Multiple bonds treated by duplicating atoms; View with lowest priority group (4) oriented away from observer: Clockwise $1 \\to 2 \\to 3$ is $(R)$, counterclockwise is $(S)$.",
    "Geometric Isomerism ($E/Z$ System): Restricted rotation around double bonds or rings; CIP priorities applied to each end of double bond: $(Z)$ (zusammen, higher priority groups on same side) vs $(E)$ (entgegen, higher priority groups on opposite sides).",
    "University Examination Strategy: Draw the potential energy diagram for n-butane rotation labeling all 4 conformers, assign $(R)$ or $(S)$ configurations to Fischer projections of tartaric acid, and draw chair conformations of trans-1,4-dimethylcyclohexane."
], [
    "Specific Optical Rotation Formula: $[\alpha]_\\lambda^T = \\frac{\\alpha}{l \\cdot c}$ (with $l$ in dm, $c$ in g/mL).",
    "Total Number of Stereoisomers: $2^n$ for unsymmetrical molecules with $n$ chiral stereocenters.",
    "Tartaric Acid Meso Condition: $(2R, 3S)$-tartaric acid has internal mirror plane, rendering it optically inactive.",
    "Ethane Torsional Barrier: $12.5\\text{ kJ/mol}$ barrier separating staggered from eclipsed forms.",
    "n-Butane Gauche Strain: Steric repulsion between methyl groups contributes $3.8\\text{ kJ/mol}$.",
    "Cyclohexane Chair Angle: Exactly $109.5^\\circ$ tetrahedral bond angles throughout ring.",
    "1,3-Diaxial Repulsion: Equivalent to two gauche-butane interactions for axial methyl group ($7.5\\text{ kJ/mol}$).",
    "CIP Priority Rule 1: Higher atomic number takes precedence ($I > Br > Cl > S > F > O > N > C > H$).",
    "Geometric $E/Z$ Notation: $(Z)$ has priority groups on same side; $(E)$ has priority groups across double bond.",
    "Exam Scoring Tip: In Fischer projections, if lowest priority group (4) is on a horizontal bond, the apparent $(R/S)$ configuration must be reversed."
])

add("Organic Chemistry", 4, "Polymer Formation", [
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
], [
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
])

add("Organic Chemistry", 5, "Industrial Organic Chemicals", [
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
], [
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
])

# =========================================================================
# 10. SOLAR ENERGY
# =========================================================================
add("Solar Energy", 1, "Solar Radiation", [
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
], [
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
])

add("Solar Energy", 2, "Solar Thermal", [
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
], [
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
])

add("Solar Energy", 3, "Solar PV", [
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
], [
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
])

add("Solar Energy", 4, "Solar Systems", [
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
], [
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
])

add("Solar Energy", 5, "Applications", [
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
], [
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
])

# =========================================================================
# 11. PYTHON FOR DATA SCIENCE
# =========================================================================
add("Python for Data Science", 1, "Python Basics", [
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
], [
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
])

add("Python for Data Science", 2, "NumPy & Pandas", [
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
], [
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
])

add("Python for Data Science", 3, "Data Visualization", [
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
], [
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
])

add("Python for Data Science", 4, "Data Cleaning", [
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
], [
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
])

add("Python for Data Science", 5, "EDA", [
    "Exploratory Data Analysis (EDA) Philosophy: John Tukey's approach to data analysis; Uncovering underlying data structures, detecting anomalies, testing hypotheses, and selecting appropriate machine learning model architectures through statistical summaries and graphical displays.",
    "Univariate Analysis: Analyzing single variables; Numerical variables: Mean, median, mode, variance, standard deviation, skewness (Fisher-Pearson coefficient $g_1 = \\frac{m_3}{m_2^{3/2}}$), and kurtosis ($g_2 = \\frac{m_4}{m_2^2} - 3$); Categorical variables: Frequency tables, bar charts, and Pareto charts.",
    "Bivariate Analysis: Relationships between two variables: Continuous-Continuous (scatter plot, Pearson correlation $r$, Spearman rank correlation $\\rho$ for monotonic non-linear relations); Categorical-Continuous (grouped box plots, ANOVA F-test); Categorical-Categorical (cross-tabulation, Chi-square test of independence $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$).",
    "Multivariate Analysis: Relationships among $\ge 3$ variables simultaneously; Correlation matrices, pair plots, 3D scatter plots, and dimensionality reduction projections; Parallel coordinates plots for multi-attribute clusters.",
    "Feature Engineering & Interaction Features: Constructing new domain-relevant features; Polynomial features ($x_1^2, x_1 x_2$), ratio features (e.g. debt-to-income), date-time feature extraction (hour, day of week, is_weekend), and binning/discretization (`pd.cut()`, `pd.qcut()`).",
    "Encoding Categorical Variables: One-Hot Encoding (`pd.get_dummies()`, `OneHotEncoder`, creates $k-1$ binary indicator columns to prevent dummy variable trap multicollinearity) vs Ordinal / Label Encoding (preserves intrinsic hierarchical ranking, e.g. low=1, medium=2, high=3) vs Target / Mean Encoding.",
    "Dimensionality Reduction via PCA (Principal Component Analysis): Unsupervised orthogonal linear transformation; Computes covariance matrix $\\Sigma = \\frac{1}{n} X^T X$; Solves eigenvalue problem $\\Sigma v = \\lambda v$; Principal components align along directions of maximum variance; Explained variance ratio $EVR_i = \\lambda_i / \\sum \\lambda_k$.",
    "Handling Class Imbalance in Datasets: Severe majority class dominance (e.g. 99:1 in fraud detection); Techniques: Random undersampling, Random oversampling, Synthetic Minority Over-sampling Technique (SMOTE, creates synthetic points along line segments connecting $k$-nearest minority neighbors), and Class-weighted loss functions.",
    "Automated EDA Libraries: Profiling tools generating comprehensive HTML analytical dashboards in single line of code: `ydata-profiling` (formerly `pandas-profiling`), `sweetviz`, and `dtale`.",
    "University Examination Strategy: Calculate the explained variance ratio from PCA eigenvalues, determine the Chi-square statistic for a 2x2 contingency table, and compare One-Hot vs Ordinal encoding trade-offs."
], [
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
])

# =========================================================================
# 12. OBJECT ORIENTED PROGRAMMING (ADVANCED)
# =========================================================================
add("Object Oriented Programming (Advanced)", 1, "Design Patterns", [
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
], [
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
])

add("Object Oriented Programming (Advanced)", 2, "GUI Programming", [
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
], [
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
])

add("Object Oriented Programming (Advanced)", 3, "Database Connectivity", [
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
], [
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
])

add("Object Oriented Programming (Advanced)", 4, "Network Programming", [
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
], [
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
])

add("Object Oriented Programming (Advanced)", 5, "Software Testing Basics", [
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
], [
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
])

# Save updated dataset
with open('scripts/sem3_btech_missing_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
