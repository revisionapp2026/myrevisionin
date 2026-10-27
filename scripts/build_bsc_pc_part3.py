import json, os

with open('scripts/sem3_bsc_physics_chem_data.json', 'r', encoding='utf-8') as f:
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
# 7. ORGANIC CHEMISTRY – III (B.Sc)
# =========================================================================
add("Organic Chemistry  III", 1, "Alcohols & Phenols", [
    "Classification & Nomenclature of Monohydric Alcohols: Primary ($1^\\circ$), secondary ($2^\\circ$), and tertiary ($3^\\circ$) alcohols; IUPAC naming protocols; Hydrogen bonding and elevated boiling points; Acidity comparison: Water > Primary > Secondary > Tertiary alcohols.",
    "Industrial & Synthetic Preparation of Alcohols: Hydration of alkenes (Markovnikov addition via carbocation intermediate); Hydroboration-Oxidation: Syn-addition yielding anti-Markovnikov alcohol ($R-\\text{CH}=\\text{CH}_2 \\xrightarrow{\\text{BH}_3\\cdot\\text{THF},\\,\\text{H}_2\\text{O}_2/\\text{OH}^-} R-\\text{CH}_2\\text{CH}_2\\text{OH}$); Oxymercuration-Demercuration: Markovnikov addition without carbocation rearrangement; Grignard synthesis using organomagnesium halides ($R\\text{MgX}$) with formaldehyde ($1^\\circ$), aldehydes ($2^\\circ$), and ketones ($3^\\circ$).",
    "Chemical Reactions & Distinction Tests of Alcohols: Lucas test: Anhydrous $\\text{ZnCl}_2$ in concentrated $\\text{HCl}$; Immediate turbidity ($3^\\circ$ alcohol), turbidity in 5 minutes ($2^\\circ$), no turbidity at room temperature ($1^\\circ$); Victor Meyer test: Nitrolic acid red color ($1^\\circ$), Pseudonitrol blue color ($2^\\circ$), colorless ($3^\\circ$); Oxidation using Jones reagent ($\text{CrO}_3 / \\text{H}_2\\text{SO}_4$) and Pyridinium Chlorochromate (PCC).",
    "Diols & Pinacol-Pinacolone Rearrangement: Vicinal diols (glycols); Synthesis via alkaline $\\text{KMnO}_4$ syn-dihydroxylation; Pinacol rearrangement: Acid-catalyzed dehydration of 1,2-diols to ketones ($(\\text{CH}_3)_2\\text{C(OH)}-\\text{C(OH)}(\\text{CH}_3)_2 \\xrightarrow{\\text{H}^+} \\text{CH}_3\\text{CO}-\\text{C}(\\text{CH}_3)_3 + \\text{H}_2\\text{O}$); Migratory aptitude of substituents: $p\\text{-anisyl} > p\\text{-tolyl} > \\text{phenyl} > \\text{alkyl}$.",
    "Triols & Periodic Acid Cleavage: Glycerol (propane-1,2,3-triol); Saponification of fats; Malaprade reaction: Quantitative oxidative cleavage of vicinal diols by Periodic Acid ($\\text{HIO}_4$), yielding corresponding aldehydes and formic acid.",
    "Structure, Acidity & Resonance Stabilization of Phenols: Phenol (carbolic acid, $\\text{C}_6\\text{H}_5\\text{OH}$); Acidity: Phenol is significantly more acidic than aliphatic alcohols ($pK_a \\approx 9.95$ vs $16$) due to resonance delocalization of negative charge in the phenoxide anion over ortho and para ring carbons.",
    "Substituent Effects on Phenol Acidity: Electron-withdrawing groups (EWG: $-\\text{NO}_2, -\\text{CN}, -\\text{Cl}$) stabilize phenoxide anion by dispersing negative charge, drastically increasing acidity (Picric acid: 2,4,6-trinitrophenol $pK_a = 0.38$); Electron-donating groups (EDG: $-\\text{CH}_3, -\\text{OCH}_3$) decrease acidity.",
    "Name Reactions of Phenols: Reimer-Tiemann & Kolbe-Schmitt: Reimer-Tiemann reaction: Phenol reacts with $\\text{CHCl}_3$ and aqueous $\\text{NaOH}$ via dichlorocarbene intermediate ($:\\text{CCl}_2$) to yield salicylaldehyde; Kolbe-Schmitt carboxylation: Sodium phenoxide reacts with $\\text{CO}_2$ at $125^\\circ\\text{C}$, 5 atm pressure to yield Salicylic acid (precursor to aspirin).",
    "Fries Rearrangement & Claisen Rearrangement: Fries rearrangement: Lewis acid ($\text{AlCl}_3$) catalyzed thermal isomerization of phenolic esters to ortho/para hydroxyacetophenones; Claisen rearrangement: [3,3]-sigmatropic pericyclic rearrangement of allyl phenyl ethers to ortho-allylphenols.",
    "University Examination Strategy: Detail the mechanism of the Pinacol-Pinacolone rearrangement with migratory aptitudes, explain the mechanism of the Reimer-Tiemann reaction with the dichlorocarbene intermediate, and compare Lucas vs Victor Meyer distinction tests."
], [
    "Hydroboration Stereochemistry: Proceeds via concerted 4-membered transition state, delivering syn-addition with anti-Markovnikov regioselectivity.",
    "Lucas Test Reagent: Equimolar anhydrous zinc chloride ($\text{ZnCl}_2$) in concentrated hydrochloric acid ($\text{HCl}$); tests carbocation stability.",
    "Pinacol Migratory Aptitude: Migratory order follows electron density: aryl groups with electron-donating groups migrate faster than alkyl groups.",
    "Phenoxide Resonance Stability: Negative charge delocalizes into the aromatic pi-electron cloud across ortho and para ring carbons.",
    "Picric Acid Acidity: 2,4,6-trinitrophenol is as acidic as mineral acids ($pK_a = 0.38$) due to extreme resonance pull of three nitro groups.",
    "Reimer-Tiemann Reactive Intermediate: Neutral electrophilic dichlorocarbene ($:\\text{CCl}_2$), generated via alpha-elimination of chloroform.",
    "Kolbe-Schmitt Carboxylation: High-pressure electrophilic attack of carbon dioxide on nucleophilic sodium phenolate generating salicylic acid.",
    "Claisen Rearrangement Symmetry: Suprafacial [3,3]-sigmatropic pericyclic rearrangement proceeding through a chair-like cyclic transition state.",
    "PCC Mild Oxidation Advantage: Pyridinium Chlorochromate oxidizes primary alcohols cleanly to aldehydes without over-oxidation to carboxylic acids.",
    "Exam Gold Tip: Always remember that periodic acid ($\text{HIO}_4$) cleaves only vicinal diols, alphahydroxy ketones, and 1,2-diketones."
])

add("Organic Chemistry  III", 2, "Aldehydes & Ketones", [
    "Carbonyl Group Structure & Electronic Polarization: Carbonyl carbon is $sp^2$ hybridized with trigonal planar geometry ($120^\\circ$ angles); Strong dipole moment due to high electronegativity of oxygen ($\text{C}^{\\delta+} = \\text{O}^{\\delta-}$); Carbonyl carbon acts as a hard electrophilic center prone to nucleophilic attack.",
    "Relative Reactivity: Aldehydes vs Ketones: Aldehydes are more reactive toward nucleophiles than ketones due to: (1) Steric factors (aldehydes have only one bulky alkyl group shielding carbon); (2) Electronic factors (two alkyl groups in ketones donate electron density via inductive $+I$ effect, reducing partial positive charge on carbon).",
    "Nucleophilic Addition Reactions Mechanisms: Addition of hydrogen cyanide ($\text{HCN}$) forming cyanohydrins; Addition of sodium bisulfite ($\text{NaHSO}_3$) forming crystalline bisulfite adducts (purification method); Addition of Grignard reagents ($R\\text{MgX}$) forming alcohols; Acetal and ketal formation via acid-catalyzed addition of alcohols.",
    "Nucleophilic Addition-Elimination with Ammonia Derivatives: Reaction with primary amines forming imines / Schiff bases ($-\\text{C}=\\text{N}-R$); Reaction with hydroxylamine forming oximes; Reaction with hydrazine forming hydrazones; Reaction with 2,4-dinitrophenylhydrazine (Brady's reagent) yielding orange-yellow 2,4-DNP precipitates.",
    "Aldol Condensation & Cross-Aldol Reactions: Base-catalyzed self-condensation of carbonyls containing alpha-hydrogens; Deprotonation forms resonance-stabilized enolate ion; Enolate nucleophilic attack on second carbonyl molecule forms beta-hydroxyaldehyde (aldol); Thermal dehydration yields alpha,beta-unsaturated carbonyls.",
    "Cannizzaro Reaction for Non-Enolizable Aldehydes: Base-catalyzed redox disproportionation of aldehydes lacking alpha-hydrogens (formaldehyde, benzaldehyde); One molecule is reduced to alcohol while the second is oxidized to carboxylate salt; Hydride transfer mechanism ($:\\text{H}^-$ transfer is the rate-determining step).",
    "Wittig Olefination Reaction: Stereoselective synthesis of alkenes from aldehydes/ketones and phosphorus ylides (phosphoranes: $\\text{Ph}_3\\text{P}^+-\\text{C}^-R_2$); Cyclic oxaphosphetane intermediate; High positional certainty of double bond without skeletal rearrangement.",
    "Carbonyl Reduction Methodologies: Catalytic hydrogenation; Complex metal hydrides: Sodium borohydride ($\text{NaBH}_4$, selective for aldehydes/ketones) and Lithium aluminum hydride ($\text{LiAlH}_4$, strong unselective reducer); Clemmensen reduction (amalgamated zinc $\text{Zn(Hg)}$ in concentrated $\text{HCl}$); Wolff-Kishner reduction (hydrazine $\text{NH}_2\\text{NH}_2$ and $\text{KOH}$ in ethylene glycol).",
    "Oxidation & Distinction Tests of Aldehydes: Tollens' silver mirror test: Aldehydes reduce ammoniacal silver nitrate $[\\text{Ag}(\\text{NH}_3)_2]^+$ to metallic silver; Fehling's test: Reduction of alkaline copper tartrate to red cuprous oxide ($\text{Cu}_2\\text{O}$); Haloform reaction: Carbonyls containing methyl ketone group ($-\\text{COCH}_3$) react with $\text{I}_2 / \\text{NaOH}$ to yield yellow iodoform ($\text{CHI}_3$).",
    "University Examination Strategy: Detail the step-by-step mechanism of the base-catalyzed Aldol condensation, explain the hydride transfer mechanism of the Cannizzaro reaction, and contrast Clemmensen vs Wolff-Kishner reductions."
], [
    "Carbonyl Electrophilic Nature: The $sp^2$ carbonyl carbon bears significant partial positive charge due to pi-electron polarization toward oxygen.",
    "Aldol Condensation Requirement: Strictly requires at least one acidic alpha-hydrogen atom ($pK_a \\approx 19-20$) to generate enolate nucleophile.",
    "Cannizzaro Hydride Transfer: Intermolecular hydride ($:\\text{H}^-$) ion transfer from tetrahedral dianion intermediate is the slow rate-determining step.",
    "Wittig Oxaphosphetane Ring: Reaction proceeds through four-membered oxaphosphetane intermediate driven by immensely stable $\\text{P}=\\text{O}$ bond formation.",
    "Clemmensen Acidic Reduction: Converts $C=O$ to $CH_2$ using $\\text{Zn(Hg)} / \\text{HCl}$; suited for acid-stable, base-sensitive substrates.",
    "Wolff-Kishner Basic Reduction: Converts $C=O$ to $CH_2$ using $\\text{NH}_2\\text{NH}_2 / \\text{KOH}$; suited for base-stable, acid-sensitive substrates.",
    "Tollens Reagent Complex: Ammoniacal silver nitrate $[\\text{Ag}(\\text{NH}_3)_2]\\text{OH}$; oxidized aldehydes form a specular metallic silver mirror.",
    "Iodoform Structural Criterion: Positive yellow $\\text{CHI}_3$ precipitate indicates presence of $\\text{CH}_3\\text{C}=\\text{O}$ or $\\text{CH}_3\\text{CH(OH)}-$ structural motifs.",
    "Schiff Base Formation: Reversible acid-catalyzed dehydration of carbinolamine intermediate formed by nucleophilic primary amine attack.",
    "Exam Gold Tip: Always note that ketones do NOT reduce Tollens or Fehling solutions, with the sole exception of alpha-hydroxy ketones."
])

add("Organic Chemistry  III", 3, "Carboxylic Acids", [
    "Structure, Nomenclature & Physical Properties: Carboxylic acid functional group ($-\\text{COOH}$); Planar carboxyl carbon; Strong intermolecular hydrogen bonding forming stable cyclic dimers in vapor and non-polar solvents; High boiling points exceeding comparable alcohols.",
    "Acidity & Resonance Stabilization of Carboxylate: Carboxylic acids are substantially more acidic than phenols ($pK_a \\approx 4-5$ vs $10$); Deprotonation forms symmetrical carboxylate anion ($-\\text{COO}^-$) where negative charge is distributed equally across two equivalent oxygen atoms (identical $\\text{C}-\\text{O}$ bond lengths $1.27\\text{ \\AA}$).",
    "Substituent Inductive & Field Effects on Acidity: Electron-withdrawing groups (EWG: $-\\text{F}, -\\text{Cl}, -\\text{NO}_2$) stabilize carboxylate via $-I$ effect, dramatically boosting acidity; Acidity order: Trichloroacetic ($pK_a = 0.65$) > Dichloroacetic ($1.29$) > Chloroacetic ($2.86$) > Acetic acid ($4.76$); Distance attenuation of inductive effect.",
    "Aromatic Carboxylic Acids & Ortho Effect: Benzoic acid ($pK_a = 4.20$); Ortho-substituted benzoic acids display abnormally high acidity regardless of whether the ortho-substituent is electron-withdrawing or electron-donating (the Ortho Effect: steric hindrance twists carboxyl plane out of ring resonance, preventing destabilizing conjugation).",
    "Methods of Preparation: Oxidation of primary alcohols and aldehydes via Jones reagent or alkaline $\\text{KMnO}_4$; Hydrolysis of nitriles ($R-\\text{CN} \\xrightarrow{\\text{H}_3\\text{O}^+} R-\\text{COOH} + \\text{NH}_4^+$); Carbonation of Grignard reagents ($R\\text{MgX} + \\text{CO}_2 \\to R-\\text{COOMgX} \\xrightarrow{\\text{H}^+} R-\\text{COOH}$).",
    "Nucleophilic Acyl Substitution Mechanisms: General pathway for carboxylic acid derivatives; Addition-elimination mechanism through tetrahedral intermediate; Relative leaving group ability determines reactivity order: Acyl halides > Acid anhydrides > Esters > Amides.",
    "Fischer Esterification Mechanism: Acid-catalyzed condensation of carboxylic acids with alcohols to form esters; Protonation of carbonyl oxygen, nucleophilic addition of alcohol, proton transfer, and elimination of water; Reversibility; Le Chatelier optimization via water removal or excess alcohol.",
    "Alpha-Halogenation: Hell-Volhard-Zelinsky (HVZ) Reaction: Halogenation of alpha-carbon of carboxylic acids containing alpha-hydrogens using $\\text{Br}_2$ or $\\text{Cl}_2$ in the presence of catalytic red phosphorus ($\text{P}_{\\text{red}}$); Generates alpha-halo carboxylic acids (precursors to alpha-amino acids).",
    "Dicarboxylic Acids & Decarboxylation Behavior: Oxalic, Malonic, Succinic, Glutaric, and Adipic acids (mnemonic: OMSGA); Thermal behavior: Oxalic and Malonic acids undergo thermal decarboxylation losing $\\text{CO}_2$ to yield monocarboxylic acids; Succinic and Glutaric acids dehydrate to form stable 5- and 6-membered cyclic anhydrides.",
    "University Examination Strategy: Detail the mechanism of Fischer esterification showing proton transfers, explain the mechanism of the Hell-Volhard-Zelinsky (HVZ) reaction, and explain the Ortho Effect on the acidity of substituted benzoic acids."
], [
    "Carboxylate Equivalence: Resonance delocalizes negative charge across two identical oxygen atoms, creating equal $1.27\\text{ \\AA}$ carbon-oxygen bonds.",
    "Inductive Attenuation: The $-I$ acid-strengthening effect drops off rapidly with distance, becoming negligible beyond three carbon bonds.",
    "Ortho Effect in Benzoic Acids: Any ortho-substituent forces carboxyl group out of aromatic ring coplanarity, boosting acidity via steric relief.",
    "Acyl Derivative Reactivity: Acyl chloride is most reactive because chloride ($Cl^-$) is a weak base and exceptional leaving group.",
    "Fischer Esterification Reversibility: Driven forward by Dean-Stark water removal trap or using the alcohol reactant as solvent.",
    "HVZ Catalytic Mechanism: Red phosphorus reacts with bromine to form $\\text{PBr}_3$, which converts acid to acyl bromide, enolizing rapidly for bromination.",
    "Malonic Decarboxylation: Malonic acid decarboxylates at $150^\\circ\\text{C}$ via a 6-membered cyclic transition state to form acetic acid and $\\text{CO}_2$.",
    "Carboxylic Cyclic Dimers: Strong intermolecular double hydrogen bonding pairs carboxyl molecules into stable eight-membered cyclic dimers.",
    "Amide Resistance to Hydrolysis: Amides are the least reactive acid derivatives due to strong resonance donation from nitrogen lone pair ($-\\text{C}=\\text{N}^+$).",
    "Exam Scoring Tip: In esterification mechanisms, clearly identify that the oxygen atom in the ester linkage originates from the alcohol, not the acid."
])

add("Organic Chemistry  III", 4, "Amines", [
    "Classification & Structural Geometry of Amines: Organic derivatives of ammonia ($\text{NH}_3$); Primary ($1^\\circ: R\\text{NH}_2$), secondary ($2^\\circ: R_2\\text{NH}$), and tertiary ($3^\\circ: R_3\\text{N}$) amines; Nitrogen atom is $sp^3$ hybridized with trigonal pyramidal geometry ($107^\\circ$ bond angles); Rapid pyramidal umbrella inversion (amine inversion).",
    "Basicity & Factors Influencing Amine Basicity: Amines act as Lewis bases due to lone pair on nitrogen; Basicity order in gas phase: $3^\\circ > 2^\\circ > 1^\\circ > \\text{NH}_3$ (governed purely by $+I$ inductive effect of alkyl groups); Basicity in aqueous solution: Complex interplay of inductive effect, steric hindrance, and hydration solvation energy.",
    "Aqueous Basicity Anomalies: Methyl-substituted amines in water: Secondary > Primary > Tertiary > Ammonia ($(\\text{CH}_3)_2\\text{NH} > \\text{CH}_3\\text{NH}_2 > (\\text{CH}_3)_3\\text{N} > \\text{NH}_3$); Ethyl-substituted amines: Secondary > Tertiary > Primary > Ammonia ($(\\text{C}_2\\text{H}_5)_2\\text{NH} > (\\text{C}_2\\text{H}_5)_3\\text{N} > \\text{C}_2\\text{H}_5\\text{NH}_2 > \\text{NH}_3$).",
    "Aromatic Amines & Resonance Basicity Suppression: Aniline ($\text{C}_6\\text{H}_5\\text{NH}_2$) is far weaker base than aliphatic amines ($pK_b \\approx 9.4$ vs $3.3$); Nitrogen lone pair delocalizes into aromatic pi-system over ortho and para positions; Anilinium ion has only two resonance structures, lacking resonance stabilization.",
    "Synthetic Preparation of Amines: Gabriel Phthalimide Synthesis: Selective synthesis of pure primary aliphatic amines without secondary/tertiary contamination; Phthalimide deprotonation by $\\text{KOH}$, $S_N2$ alkylation by alkyl halide, and alkaline/hydrazine cleavage; Inapplicable to aryl halides.",
    "Hofmann Bromamide Degradation Reaction: Conversion of primary carboxamides into primary amines with loss of one carbon atom ($R-\\text{CONH}_2 + \\text{Br}_2 + 4\\text{NaOH} \\to R-\\text{NH}_2 + \\text{Na}_2\\text{CO}_3 + 2\\text{NaBr} + 2\\text{H}_2\\text{O}$); Mechanistic pathway: $N$-bromamide, isocyanate ($R-\\text{N}=\\text{C}=\\text{O}$) intermediate, and carbamic acid decarboxylation.",
    "Chemical Separation Tests: Hinsberg & Carbylamine Reactions: Hinsberg test: Benzenesulfonyl chloride ($\text{C}_6\\text{H}_5\\text{SO}_2\\text{Cl}$); $1^\\circ$ amine forms sulfonamide soluble in alkali; $2^\\circ$ amine forms insoluble sulfonamide; $3^\\circ$ amine does not react; Carbylamine test: $1^\\circ$ amines react with $\\text{CHCl}_3 / \\text{KOH}$ to produce foul-smelling isocyanides ($R-\\text{NC}$).",
    "Diazotization of Primary Amines: Reaction with nitrous acid ($\\text{HNO}_2$, generated in situ from $\\text{NaNO}_2 + \\text{HCl}$ at $0-5^\\circ\\text{C}$); Primary aliphatic amines form unstable alkyldiazonium salts that instantly decompose into nitrogen gas and carbocation mixtures; Primary aromatic amines form resonance-stabilized benzenediazonium chloride ($[\\text{C}_6\\text{H}_5\\text{N}_2]^+\\text{Cl}^-$).",
    "Synthetic Utility of Arenediazonium Salts: Sandmeyer reaction (conversion to chlorobenzene, bromobenzene, benzonitrile using $\\text{CuCl}, \\text{CuBr}, \\text{CuCN}$); Gattermann reaction (using copper powder); Schiemann reaction (fluorination via $\\text{HBF}_4$); Azo coupling with phenols/aromatic amines yielding bright azo dyes (methyl orange).",
    "University Examination Strategy: Detail the mechanism of the Hofmann Bromamide degradation highlighting the isocyanate intermediate, explain the aqueous basicity order of methylamines, and describe the Hinsberg separation protocol for amine mixtures."
], [
    "Pyramidal Inversion Barrier: Low activation energy barrier ($\sim 25\\text{ kJ/mol}$) causes rapid nitrogen umbrella flipping, preventing resolution of chiral amines.",
    "Aqueous Amine Basicity Balance: Governed by three opposing factors: inductive electron push ($+I$), steric congestion, and aqueous hydration stabilization.",
    "Aniline Weak Basicity: Nitrogen lone pair participates in aromatic resonance delocalization, lowering electron availability for protonation.",
    "Gabriel Synthesis Selectivity: Generates exclusively pure primary amines; incapable of over-alkylation to secondary or tertiary amines.",
    "Hofmann Degradation Carbon Loss: The product primary amine contains precisely one fewer carbon atom than the starting carboxamide reactant.",
    "Hinsberg Reagent Specificity: Benzenesulfonyl chloride; primary sulfonamide contains acidic $N-H$ proton soluble in aqueous $\\text{NaOH}$.",
    "Carbylamine Test Specificity: Strictly specific to primary amines (both aliphatic and aromatic); yields foul-smelling isocyanide ($R-\\text{NC}$).",
    "Diazotization Low Temperature Rule: Maintained strictly between $0^\\circ\\text{C}$ and $5^\\circ\\text{C}$ to prevent explosive thermal hydrolysis of diazonium salts.",
    "Azo Dye Coupling: Electrophilic aromatic substitution where diazonium cation couples at para position of electron-rich phenolate or aniline.",
    "Exam Gold Tip: Always remember that tertiary amines react with nitrous acid to form soluble nitrite salts, but do NOT produce nitrogen gas or diazonium salts."
])

add("Organic Chemistry  III", 5, "Stereochemistry", [
    "Foundational Stereochemical Principles: Isomerism classification: Constitutional (structural) vs Stereoisomers (identical connectivity, distinct 3D spatial arrangement); Conformational isomers (rotational interconversion around single bonds) vs Configurational isomers (requiring bond cleavage).",
    "Chirality & Molecular Asymmetry: Chiral molecules lacking an alternating axis of symmetry ($S_n$), center of inversion ($i$), or plane of symmetry ($\\sigma$); Chiral / Asymmetric stereocenter (carbon bonded to four distinct substituents); Enantiomers (non-superimposable mirror images).",
    "Optical Activity & Polarimetry: Interaction with plane-polarized light; Dextrorotatory ($d$ or $(+)$ rotating light clockwise) vs Levorotatory ($l$ or $(-)$ rotating counterclockwise); Specific rotation formula: $[\\alpha]_\\lambda^T = \\frac{\\alpha}{l \\cdot c}$, where $\\alpha$ is observed angle, $l$ is path length in dm, and $c$ is concentration in g/mL.",
    "Cahn-Ingold-Prelog (CIP) Priority Rules: Systematic assignment of $(R)$ and $(S)$ absolute configurations: (1) Higher atomic number takes precedence ($-\\text{I} > -\\text{Br} > -\\text{Cl} > -\\text{OH} > -\\text{NH}_2 > -\\text{CH}_3 > -\\text{H}$); (2) Tie-breaker rules for subsequent atoms; (3) Multiple bonds treated as duplicated phantom atoms; Viewing along bond to lowest priority group (4) pointing away.",
    "Diastereomers & Meso Compounds: Diastereomers: Stereoisomers that are not mirror images of each other; Display distinct physical and chemical properties (melting points, solubilities, NMR shifts); Meso compounds: Molecules containing two or more stereocenters that possess an internal plane of symmetry ($\\sigma$), rendering them optically inactive.",
    "Fischer, Newman & Sawhorse Projections: Projection conventions: Fischer (horizontal bonds wedge toward viewer, vertical bonds dash away); Newman projection (viewing along carbon-carbon bond axis, front carbon vertex, rear carbon circle); Sawhorse spatial diagrams; Interconverting between projection formats.",
    "Conformational Analysis of Ethane & Butane: Torsional strain and steric hindrance; Ethane conformations: Staggered (lowest energy, dihedral angle $60^\\circ$) vs Eclipsed (energy maximum, $12.5\\text{ kJ/mol}$ torsional barrier); $n$-Butane: Anti-periplanar (global minimum), Gauche (local minimum, $3.8\\text{ kJ/mol}$ above anti), Eclipsed, and Fully Eclipsed (maximum steric strain $19\\text{ kJ/mol}$).",
    "Conformational Analysis of Cyclohexane: Bayer strain theory limitations; Puckered strain-free conformations: Chair conformation (zero angle strain, zero torsional strain), Boat conformation (flagpole interactions, torsional strain), and Twist-boat; Axial vs Equatorial positions; Chair-chair ring flip; 1,3-diaxial steric interactions in substituted cyclohexanes.",
    "Resolution of Racemic Modifications: Racemic mixture ($(\\pm)$ or $dl$: equimolar 50:50 mixture of enantiomers, optically inactive by external compensation); Chemical resolution: Reaction with enantiopure resolving agent forming diastereomeric salts with distinct solubilities; Chiral chromatography.",
    "University Examination Strategy: Assign (R) and (S) configurations to complex Fischer projections using CIP rules, draw the potential energy diagram for n-butane rotations labeling all conformers, and analyze 1,3-diaxial interactions in methylcyclohexane."
], [
    "Chirality Necessary Condition: Absence of improper rotation axis $S_n$; practically confirmed by lack of plane of symmetry and center of inversion.",
    "CIP Rule Priority Sequence: Atomic number dictates priority; higher isotope mass breaks ties ($^2\\text{H} > ^1\\text{H}$); multiple bonds duplicated.",
    "Fischer Projection Orientation: Horizontal lines represent bonds projecting toward the observer (wedges); vertical lines project away (dashes).",
    "Meso Optical Inactivity: Optically inactive through internal compensation; one half of the molecule cancels optical rotation of the other half.",
    "Specific Rotation Equation: $[\\alpha] = \\frac{\\alpha_{\\text{obs}}}{l \\cdot c}$; standardized optical rotation parameter independent of sample path and concentration.",
    "Ethane Torsional Barrier: Staggered conformation is $12.5\\text{ kJ/mol}$ more stable than eclipsed due to minimized electron cloud repulsion.",
    "Butane Gauche Interaction: Gauche conformation experiences $3.8\\text{ kJ/mol}$ steric repulsion between adjacent methyl groups at $60^\\circ$ dihedral.",
    "Cyclohexane Chair Supremacy: Chair conformation exhibits ideal $109.5^\\circ$ tetrahedral angles and fully staggered adjacent $\\text{C}-\\text{H}$ bonds.",
    "Equatorial Substituent Preference: Bulky substituents preferentially occupy equatorial positions to avoid severe 1,3-diaxial steric clashes.",
    "Exam Gold Tip: When viewing a Fischer projection with lowest priority group (4) on a horizontal line, reverse the apparent clockwise/counterclockwise outcome to get the true (R/S) configuration."
])

# =========================================================================
# 8. CHEMISTRY III / DATA STRUCTURES (B.Sc)
# =========================================================================
add("Chemistry III / Data Structures", 1, "Organic Reactions", [
    "Electrophilic Aromatic Substitution (EAS) Mechanism: General two-step mechanism for benzene and derivatives: Generation of electrophile ($E^+$), attack of aromatic pi-cloud to form resonance-stabilized arenium ion (sigma complex / Wheland intermediate), followed by fast proton loss restoring aromaticity.",
    "Arenium Ion Resonance & Aromaticity Restoration: Wheland intermediate resonance: Positive charge delocalized over three ring positions (two ortho and one para relative to point of electrophilic attack); Loss of resonance energy temporarily; Rapid deprotonation by base is highly exothermic.",
    "Electrophilic Halogenation of Benzene: Chlorination and bromination; Requirement of Lewis acid catalyst ($\text{FeBr}_3, \\text{AlCl}_3$); Lewis acid polarizes halogen molecule: $\\text{Br}_2 + \\text{FeBr}_3 \\to [\\text{Br}^{\\delta+} \\cdots \\text{Br} \\cdots \\text{FeBr}_3^{\\delta-}]$; Electrophilic delivery of $\\text{Br}^+$; Generation of halobenzene.",
    "Nitration & Sulfonation of Benzene: Nitration: Concentrated $\\text{HNO}_3$ and $\\text{H}_2\\text{SO}_4$ generating nitronium electrophile: $\\text{HNO}_3 + 2\\text{H}_2\\text{SO}_4 \\rightleftharpoons \\text{NO}_2^+ + \\text{H}_3\\text{O}^+ + 2\\text{HSO}_4^-$; Sulfonation: Fuming sulfuric acid (oleum) delivering electrophilic sulfur trioxide ($\text{SO}_3$); Reversibility of sulfonation.",
    "Friedel-Crafts Alkylation & Limitations: Reaction of aromatic ring with alkyl halide and $\\text{AlCl}_3$; Generation of carbocation electrophile ($R^+$); Severe industrial limitations: (1) Carbocation rearrangements leading to isomeric mixtures (e.g. 1-chloropropane yields isopropylbenzene); (2) Polyalkylation; (3) Inapplicable to deactivated rings.",
    "Friedel-Crafts Acylation & Synthetic Advantage: Reaction with acyl chlorides or acid anhydrides in the presence of $\\text{AlCl}_3$; Generation of resonance-stabilized linear acylium ion ($[R-\\text{C}\\equiv\\text{O}^+ \\leftrightarrow R-\\text{C}^+=\\text{O}]$); Zero carbocation rearrangement; Deactivates ring preventing polyacylation; Subsequent Clemmensen reduction yields linear alkylbenzenes.",
    "Substituent Activating & Deactivating Directing Effects: Activating ortho/para directors (electron donors via resonance or induction: $-\\text{OH}, -\\text{OCH}_3, -\\text{NH}_2, -\\text{CH}_3$); Deactivating meta directors (electron withdrawers: $-\\text{NO}_2, -\\text{CF}_3, -\\text{CN}, -\\text{COOH}$); Lowering or raising activation energy of arenium ion.",
    "The Halogen Anomaly in Aromatic Substitution: Halogens ($-\\text{F}, -\\text{Cl}, -\\text{Br}, -\\text{I}$) are deactivating yet ortho/para directing; Strong $-I$ inductive pull withdraws electron density, deactivating the ring overall; Lone pair $+R$ resonance donation selectively stabilizes ortho/para arenium ion intermediates.",
    "Nucleophilic Aromatic Substitution (NAS) Mechanisms: Addition-Elimination ($S_N\\text{Ar}$) mechanism: Requires strong electron-withdrawing nitro groups located ortho/para to leaving halogen; Formation of resonance-stabilized Meisenheimer complex; Elimination-Addition (Benzyne) mechanism: Reaction with strong base ($\text{NaNH}_2$) forming reactive benzyne intermediate.",
    "University Examination Strategy: Detail the step-by-step mechanism of Friedel-Crafts acylation showing acylium ion resonance, explain why halogens are ortho/para directing deactivators, and delineate the Meisenheimer intermediate in SNAr reactions."
], [
    "Wheland Intermediate Structure: Non-aromatic sp3 ring carbon with positive charge delocalized over ortho and para carbons.",
    "Nitronium Ion Generation: Sulfuric acid protonates nitric acid, triggering water loss to yield the linear electrophilic $\\text{NO}_2^+$ ion.",
    "Acylium Ion Stability: $[R-\\text{C}\\equiv\\text{O}^+ \\leftrightarrow R-\\text{C}^+=\\text{O}]$ possesses complete octets on all atoms, preventing skeletal rearrangement.",
    "Friedel-Crafts Rearrangement Flaw: Primary alkyl halides undergo 1,2-hydride or methide shifts to form more stable secondary/tertiary carbocations.",
    "Halogen Directional Duality: Deactivating due to dominant $-I$ inductive pull, but ortho/para directing due to $+R$ pi-lone pair donation.",
    "Meisenheimer Anionic Complex: Stable negatively charged cyclohexadienyl anion intermediate in nucleophilic aromatic substitution.",
    "Benzyne Intermediate Evidence: Strong base $\\text{NaNH}_2$ in liquid ammonia deprotonates adjacent carbon, forming reactive triple-bonded benzyne.",
    "Sulfonation Reversibility: Sulfonic acid groups ($-\\text{SO}_3\\text{H}$) are readily removed by boiling in dilute acid, acting as temporary blocking groups.",
    "Strongest Activating Group: Amino ($-\\text{NH}_2$) and hydroxy ($-\\text{OH}$) groups activate benzene so intensely that tribromination occurs without catalyst.",
    "Exam Gold Tip: Always remember that nitrobenzene is so strongly deactivated that it fails to undergo Friedel-Crafts alkylation or acylation entirely."
])

add("Chemistry III / Data Structures", 2, "Carbonyl Compounds", [
    "Enolization & Keto-Enol Tautomerism: Equilibrium between keto form ($-\\text{CH}_2-\\text{C}(=\\text{O})-$) and enol form ($-\\text{CH}=\\text{C}(\\text{OH})-$); Acid-catalyzed vs base-catalyzed enolization; Extreme enol stability in beta-dicarbonyl compounds (ethyl acetoacetate, acetylacetone) due to conjugated double bonds and intramolecular hydrogen bonding.",
    "Thermodynamic vs Kinetic Enolates: Asymmetric ketones (e.g. 2-methylcyclohexanone); Kinetic enolate: Formed rapidly using bulky strong base (Lithium Diisopropylamide LDA) at $-78^\\circ\\text{C}$ by deprotonating less hindered carbon; Thermodynamic enolate: Formed under equilibrium conditions (weaker base, room temp) yielding more substituted double bond.",
    "Michael Addition Conjugate Addition: Nucleophilic 1,4-addition of stabilized carbanion enolates (Michael donors: malonates, acetoacetates) to alpha,beta-unsaturated carbonyl compounds (Michael acceptors: methyl vinyl ketone, acrolein); Hard nucleophiles (Grignard) attack 1,2-carbonyl; Soft nucleophiles attack 1,4-beta-carbon.",
    "Robinson Annulation Ring Formation: Multi-step synthetic cascade constructing fused six-membered cyclohexenone rings: (1) Michael addition of enolate to methyl vinyl ketone; (2) Proton transfer; (3) Intramolecular aldol condensation of intermediate 1,5-diketone; Foundation for steroid synthesis.",
    "Benzoin Condensation Reaction: Cyanide-catalyzed self-condensation of aromatic aldehydes (benzaldehyde) to form alpha-hydroxy ketones (benzoin); Unique catalytic role of cyanide ion ($\text{CN}^-$): Acts as good nucleophile, enhances alpha-hydrogen acidity via resonance, and serves as an exceptional leaving group.",
    "Perkin Reaction for Cinnamic Acids: Condensation of aromatic aldehydes with aliphatic acid anhydrides in the presence of sodium salt of corresponding acid; Example: Benzaldehyde reacts with acetic anhydride and sodium acetate at $180^\\circ\\text{C}$ to yield Cinnamic acid ($Ar-\\text{CH}=\\text{CH}-\\text{COOH}$).",
    "Knoevenagel Condensation: Base-catalyzed condensation of aldehydes or ketones with active methylene compounds (diethyl malonate, ethyl cyanoacetate) using weak amine bases (piperidine, pyridine); Dehydration yields substituted alpha,beta-unsaturated esters.",
    "Reformatsky Reaction: Synthesis of beta-hydroxy esters from aldehydes/ketones and alpha-bromo esters using metallic zinc in anhydrous ether; Organozinc intermediate (Reformatsky reagent: $\\text{Br}-\\text{Zn}-\\text{CH}_2\\text{COOEt}$); Less reactive than Grignard reagents, avoiding ester addition.",
    "Stobbe Condensation: Base-catalyzed (potassium tert-butoxide) condensation of aromatic aldehydes/ketones with diethyl succinate; Involves cyclic lactone intermediate; Unique to succinic esters, generating alkylidene succinic acid monoesters.",
    "University Examination Strategy: Detail the catalytic mechanism of the Benzoin condensation highlighting the triple role of cyanide, diagram the step-by-step pathway of the Robinson Annulation, and compare kinetic vs thermodynamic enolate formation."
], [
    "Beta-Dicarbonyl Enol Stability: Acetylacetone exists $\sim 80\\%$ in enol form due to conjugated resonance and stable six-membered pseudo-ring hydrogen bond.",
    "LDA Kinetic Deprotonation: Lithium diisopropylamide is too sterically bulky to access crowded carbons, deprotonating the least hindered alpha-proton.",
    "1,4-Conjugate Addition Criterion: Soft nucleophiles (enolates, organocuprates) attack soft beta-carbon; hard organolithiums attack hard carbonyl carbon.",
    "Robinson Annulation Synergy: Combines intermolecular Michael conjugate addition with subsequent intramolecular aldol ring closure.",
    "Cyanide Tri-Fold Catalyst: Acts as nucleophile, stabilizes adjacent carbanion via nitrile resonance, and departs as leaving group in benzoin synthesis.",
    "Perkin Reaction Product: Synthesizes alpha,beta-unsaturated aromatic carboxylic acids (cinnamic acid) from benzaldehyde and acetic anhydride.",
    "Knoevenagel Weak Base Catalyst: Mild secondary amines (piperidine) selectively deprotonate active methylene compounds without side reactions.",
    "Reformatsky Zinc Advantage: Organozinc reagents react smoothly with aldehydes/ketones but are inert toward esters, preventing self-condensation.",
    "Active Methylene Carbon: Methylene group flanked by two electron-withdrawing groups ($-\\text{COCH}_2\\text{CO}-$) displays high acidity ($pK_a \\sim 9-11$).",
    "Exam Gold Tip: Always explain that in the Reformatsky reaction, magnesium cannot replace zinc because organomagnesium reagents would attack the ester group."
])

add("Chemistry III / Data Structures", 3, "Amines", [
    "Separation of Amine Mixtures via Hinsberg Method: Treating mixed primary, secondary, and tertiary amines with benzenesulfonyl chloride; $1^\\circ$ amine forms $N$-alkylbenzenesulfonamide containing an acidic hydrogen on nitrogen, dissolving completely in aqueous $\\text{NaOH}$; $2^\\circ$ amine lacks acidic hydrogen, precipitating as insoluble sulfonamide; $3^\\circ$ amine remains unreacted and distills off.",
    "Hofmann Exhaustive Methylation & Elimination: Treatment of amines with excess methyl iodide to form quaternary ammonium iodide salts; Conversion to quaternary ammonium hydroxide via moist silver oxide ($\text{Ag}_2\\text{O} / \\text{H}_2\\text{O}$); Thermal pyrolysis ($150^\\circ\\text{C}$) eliminates water and tertiary amine via $E2$ mechanism.",
    "Hofmann Elimination Regiochemistry: Unlike Zaitsev's rule (which yields the most substituted alkene), Hofmann elimination yields the least substituted, least stable alkene (Hofmann product); Root cause: Bulky trimethylammonium leaving group ($-N^+\\text{Me}_3$) causes extreme steric congestion, forcing base to abstract least hindered proton.",
    "Cope Elimination Reaction: Thermal decomposition of tertiary amine $N$-oxides ($R_3\\text{N}^+-\\text{O}^-$) at $100-150^\\circ\\text{C}$ to yield alkenes and dialkylhydroxylamines; Concerted intramolecular syn-elimination proceeding through a five-membered planar cyclic transition state; Clean formation of Hofmann-oriented alkenes.",
    "Quaternary Ammonium Salts as Phase-Transfer Catalysts: Structure of lipophilic quaternary ammonium salts (tetrabutylammonium bromide TBAB, benzyltriethylammonium chloride TEBA); Mechanism: Solubilizes inorganic nucleophilic anions ($\\text{CN}^-, \\text{MnO}_4^-, \\text{OH}^-$) into non-polar organic solvents, accelerating biphasic reaction rates.",
    "Ring Substitution Reactions of Aniline: Extreme activating power of $-\\text{NH}_2$ group; Bromination with bromine water yields instant white precipitate of 2,4,6-tribromoaniline without catalyst; Protecting amino group via acetylation with acetic anhydride ($\text{Ac}_2\\text{O}$) to form acetanilide before controlled mono-nitration.",
    "Sulfanilic Acid Synthesis & Zwitterionic Structure: Heating aniline with concentrated $\\text{H}_2\\text{SO}_4$ at $180^\\circ\\text{C}$ yields sulfanilic acid (4-aminobenzenesulfonic acid); Exists as an internal dipolar zwitterion ($H_3N^+-\\text{C}_6\\text{H}_4-\\text{SO}_3^-$); High melting point ($> 280^\\circ\\text{C}$) and insolubility in organic solvents.",
    "Azo Dyes & Diazonium Coupling Mechanisms: Electrophilic coupling of benzenediazonium chloride with activated aromatic substrates; Coupling with phenols carried out in mildly alkaline medium (pH 9-10, generating nucleophilic phenolate ion); Coupling with amines in mildly acidic medium (pH 4-5); Methyl orange and Congo red synthesis.",
    "Reductive Amination of Aldehydes & Ketones: Industrial conversion of carbonyls to amines; Condensation of aldehyde/ketone with ammonia or primary amine forms imine intermediate; In situ reduction using sodium cyanoborohydride ($\text{NaBH}_3\\text{CN}$, stable in acid, selective for imines over carbonyls) or catalytic hydrogenation.",
    "University Examination Strategy: Explain the mechanism and regiochemical outcome of the Hofmann elimination with Newman projections, detail the protection of aniline via acetylation during nitration, and outline the chemical separation of amines using the Hinsberg reagent."
], [
    "Hinsberg Separation Chemistry: Primary sulfonamide dissolves in $\\text{NaOH}$ due to acidic sulfonamide proton; secondary sulfonamide precipitates.",
    "Hofmann Elimination Product: Steric bulk of $-N^+(\\text{CH}_3)_3$ directs base deprotonation to least substituted beta-carbon, forming least substituted alkene.",
    "Cope Elimination Stereochemistry: Operates as concerted intramolecular syn-elimination through a five-membered cyclic transition state.",
    "Phase-Transfer Catalysis: Quaternary ammonium cations act as lipid shuttles, transporting inorganic anions into non-polar organic reaction phases.",
    "Acetanilide Protecting Strategy: Acetylation moderates nitrogen lone pair availability via resonance with carbonyl, preventing polybromination.",
    "Sulfanilic Acid Zwitterion: Exists as internal salt: basic amino group captures proton from acidic sulfonic acid group ($H_3N^+-\\text{Ar}-\\text{SO}_3^-$).",
    "Azo Coupling pH Dependence: Phenol coupling requires pH 9-10 (phenolate nucleophile); amine coupling requires pH 4-5 to avoid unreactive protonation.",
    "Sodium Cyanoborohydride Specificity: $\\text{NaBH}_3\\text{CN}$ reduces protonated iminium ions rapidly while leaving unreacted aldehydes/ketones intact.",
    "Tribromoaniline Precipitate: Aniline reacts with aqueous bromine water instantaneously without Lewis acid, precipitating 2,4,6-tribromoaniline.",
    "Exam Scoring Tip: In questions on Hofmann elimination, draw the Newman projection showing anti-periplanar alignment between the leaving group and beta-hydrogen."
])

add("Chemistry III / Data Structures", 4, "Stereochemistry", [
    "Geometrical Isomerism in Alkenes & Cyclic Compounds: Restricted rotation around carbon-carbon double bonds (pi-bond overlap barrier $\\sim 260\\text{ kJ/mol}$) and cyclic rings; Cis vs Trans isomerism in disubstituted alkenes; Physical properties comparison: Cis isomers typically display higher dipole moments and boiling points, Trans display higher melting points.",
    "The E/Z System of Nomenclature: IUPAC standard overcoming ambiguities of cis/trans in tri- and tetra-substituted alkenes; Applying Cahn-Ingold-Prelog (CIP) priority rules to both substituents on each double-bonded carbon; (E) configuration (Entgegen: high priority groups on opposite sides); (Z) configuration (Zusammen: high priority groups on same side).",
    "Geometrical Isomerism in Nitrogen Compounds (Oximes): Oximes derived from aldehydes and unsymmetrical ketones; Syn and Anti nomenclature: In aldoximes, Syn indicates $-H$ and $-OH$ on same side; Anti indicates opposite sides; Modern (E/Z) designation based on CIP rules.",
    "Beckmann Rearrangement of Oximes: Acid-catalyzed ($\text{H}_2\\text{SO}_4, \\text{PCl}_5$) rearrangement of ketoximes to substituted amides; Stereospecific intramolecular migration: The group located anti to the leaving hydroxyl group ($-OH$) migrates exclusively to nitrogen; Industrial synthesis of epsilon-Caprolactam (precursor to Nylon-6) from cyclohexanone oxime.",
    "Determination of Configuration of Geometrical Isomers: Chemical methods: Dehydration of dicarboxylic acids (Maleic acid forms cyclic anhydride at $140^\\circ\\text{C}$; Fumaric acid requires $300^\\circ\\text{C}$ after isomerization); Physical methods: Dipole moment measurements (trans often $\\mu \\approx 0$), melting point analysis, and infrared/NMR spectroscopy.",
    "Resolution of Racemic Modifications: Separating optical enantiomers from racemic $50:50$ mixtures; (1) Mechanical separation (Pasteur's crystal sorting); (2) Biochemical resolution using selective fungal enzymes (Penicillium glaucum); (3) Chemical method converting enantiomers into separable diastereomeric salts using chiral acids (tartaric acid) or chiral bases (brucine, cinchonine).",
    "Chiral Chromatography & Kinetic Resolution: Modern resolution technologies; High-Performance Liquid Chromatography (HPLC) utilizing Chiral Stationary Phases (CSP: cyclodextrins, polysaccharide derivatives); Kinetic resolution: Differential reaction rates of $(R)$ and $(S)$ enantiomers with a chiral catalyst (Sharpless asymmetric epoxidation).",
    "Asymmetric Synthesis & Chiral Auxiliaries: Stereoselective synthesis generating one enantiomer in excess; Enantiomeric Excess ($ee = \\frac{|R - S|}{R + S} \\times 100\\%$); Cram's Rule and Felkin-Anh model predicting nucleophilic addition to chiral carbonyls; Utilization of Evans chiral oxazolidinone auxiliaries.",
    "Stereospecific vs Stereoselective Reactions: Stereoselective: Reaction yields predominantly one stereoisomer when multiple are possible; Stereospecific: Stereochemical outcome of product is dictated strictly by stereochemistry of reactant (e.g. bromination of trans-2-butene yields meso-2,3-dibromobutane; cis-2-butene yields racemic pair).",
    "University Examination Strategy: Detail the mechanism of the Beckmann rearrangement proving anti-migration, assign E/Z configurations to complex polyenes using CIP priority rules, and compare chemical vs chromatographic resolution of racemic mixtures."
], [
    "E/Z CIP Assignment: Prioritize substituents on each $sp^2$ carbon independently; (Z) if high-priority groups share the same side; (E) if opposite.",
    "Beckmann Anti-Migration Rule: The alkyl or aryl group positioned strictly anti to the $-OH$ group migrates to nitrogen in a concerted step.",
    "Caprolactam Industrial Synthesis: Acid-catalyzed Beckmann rearrangement of cyclohexanone oxime produces caprolactam, polymerized to Nylon-6.",
    "Maleic vs Fumaric Anhydride: Maleic acid (cis) dehydrates readily at $140^\\circ\\text{C}$; Fumaric acid (trans) cannot form anhydride without prior isomerization.",
    "Diastereomeric Salt Resolution: Chiral $(R, S)$ acids react with enantiopure $(R)$-base to yield $(R, R)$ and $(S, R)$ salts possessing distinct solubilities.",
    "Enantiomeric Excess Equation: $ee = \\frac{[\\alpha]_{\\text{observed}}}{[\\alpha]_{\\text{pure}}} \\times 100\\%$; measures optical purity of asymmetric synthesis mixtures.",
    "Bromination Stereospecificity: Anti-addition of bromine across trans-2-butene via cyclic bromonium ion yields purely meso-2,3-dibromobutane.",
    "Cis-Trans Dipole Invariance: Trans-1,2-dichloroethene has opposing dipoles canceling to $\\mu = 0$; Cis isomer exhibits net permanent dipole moment.",
    "Felkin-Anh Model Trajectory: Nucleophile attacks carbonyl carbon at Bürgi-Dunitz angle ($107^\\circ$) opposite the largest perpendicular alpha-substituent.",
    "Exam Gold Tip: Always remember that stereospecific reactions are necessarily stereoselective, but stereoselective reactions are not necessarily stereospecific."
])

add("Chemistry III / Data Structures", 5, "Spectroscopy", [
    "Electromagnetic Spectrum & Molecular Energy Transitions: Regions of electromagnetic spectrum: Ultraviolet-Visible ($200-800\\text{ nm}$, electronic valence transitions), Infrared ($2.5-15\\,\\mu\\text{m}$, molecular bond vibrations), and Radiofrequency ($1-10\\text{ m}$, nuclear spin state flips in NMR).",
    "Ultraviolet-Visible (UV-Vis) Spectroscopy Foundations: Beer-Lambert Law: $A = \\epsilon \\cdot c \\cdot l$; Chromophores (covalent unsaturated groups responsible for absorption: $\\text{C}=\\text{C}, \\text{C}=\\text{O}, -\\text{NO}_2$) and Auxochromes (saturated groups with lone pairs shifting absorption: $-\\text{OH}, -\\text{NH}_2, -\\text{Cl}$); Bathochromic (red shift), Hypsochromic (blue shift), Hyperchromic (intensity increase), and Hypochromic shifts.",
    "Woodward-Fieser Empirical Rules for Dienes: Predicting absorption maximum ($\\lambda_{\\max}$) in conjugated systems: Base value for heteroannular diene ($214\\text{ nm}$) vs homoannular diene ($253\\text{ nm}$); Increments: Extended conjugation ($+30\\text{ nm}$), alkyl substituent / ring residue ($+5\\text{ nm}$), exocyclic double bond ($+5\\text{ nm}$).",
    "Infrared (IR) Spectroscopy Fundamentals: Hooke's Law approximation for diatomic molecular vibrations: Fundamental vibrational frequency: $\\bar{\\nu} = \\frac{1}{2\\pi c} \\sqrt{\\frac{k}{\\mu}}$ in $\\text{cm}^{-1}$, where $k$ is bond force constant and $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$ is reduced mass; Selection rule: Molecular vibration must produce a net change in dipole moment ($d\\mu / dq \\ne 0$).",
    "Vibrational Modes & Diagnostic Fingerprint Regions: Degrees of vibrational freedom: $3N - 6$ for non-linear molecules, $3N - 5$ for linear molecules; Stretching vibrations (symmetric, asymmetric) vs Bending vibrations (scissoring, rocking, wagging, twisting); Functional Group Region ($4000-1500\\text{ cm}^{-1}$) vs Fingerprint Region ($1500-400\\text{ cm}^{-1}$).",
    "Characteristic IR Absorption Frequencies: Hydroxyl group ($-OH$: broad $3200-3600\\text{ cm}^{-1}$ due to hydrogen bonding); Carbonyl group ($\\text{C}=\\text{O}$: sharp intense $1715\\text{ cm}^{-1}$ in ketones, $1735\\text{ cm}^{-1}$ in esters, $1680\\text{ cm}^{-1}$ in conjugated amides); Alkyne ($\\text{C}\\equiv\\text{C}$: $2200\\text{ cm}^{-1}$); Nitrile ($-\\text{C}\\equiv\\text{N}$: $2250\\text{ cm}^{-1}$).",
    "Proton Nuclear Magnetic Resonance (1H NMR) Spectroscopy: Nuclear spin quantum number ($I = 1/2$ for $^1\\text{H}, ^{13}\\text{C}$); Larmor precession frequency in magnetic field $B_0$: $\\nu = \\frac{\\gamma B_0}{2\\pi}$; Resonance condition; Reference standard: Tetramethylsilane (TMS: $\\text{Si}(\\text{CH}_3)_4$, assigned $\\delta = 0.0\\text{ ppm}$).",
    "Chemical Shift & Diamagnetic Shielding: Chemical shift scale: $\\delta = \\frac{\\nu_{\\text{sample}} - \\nu_{\\text{TMS}}}{\\text{Spectrometer Frequency in MHz}} \\times 10^6\\text{ ppm}$; Diamagnetic shielding by electron cloud; Deshielding caused by adjacent electronegative heteroatoms; Anisotropic shielding/deshielding in aromatic rings (ring current effect deshields aromatic protons to $\\delta 7-8\\text{ ppm}$).",
    "Spin-Spin Splitting & The (n + 1) Multiplet Rule: Magnetic interaction between neighboring non-equivalent protons mediated through bonding electrons; Peak splitting into multiplets: Multiplicity $= n + 1$, where $n$ is number of equivalent neighboring protons; Coupling constant ($J$ in Hz, independent of external field $B_0$); Pascal's triangle relative peak intensity ratios.",
    "University Examination Strategy: Calculate the $\\lambda_{\\max}$ of conjugated polyenes using Woodward-Fieser rules, deduce the molecular structure of an unknown compound from combined IR and 1H NMR spectral data, and explain the chemical shift anisotropy of benzene."
], [
    "Hooke's Law for Bond Vibration: $\\bar{\\nu} = \\frac{1}{2\\pi c} \\sqrt{\\frac{k}{\\mu}}$; stronger bonds (higher $k$) and lighter atoms vibrate at higher wavenumbers.",
    "IR Active Condition: Absorption occurs if and only if the molecular vibration induces a net periodic change in dipole moment ($d\\mu/dq \\ne 0$).",
    "Woodward-Fieser Base Values: Homoannular conjugated diene base equals $253\\text{ nm}$; Heteroannular diene base equals $214\\text{ nm}$.",
    "Carbonyl IR Frequency Benchmark: Saturated aliphatic ketone absorbs at $1715\\text{ cm}^{-1}$; conjugation with double bonds lowers frequency by $30\\text{ cm}^{-1}$.",
    "Larmor Precession Equation: $\\nu_0 = \\frac{\\gamma}{2\\pi} B_0$; resonance occurs when radiofrequency radiation matches nuclear precession speed.",
    "TMS Reference Superiority: Tetramethylsilane is inert, volatile (b.p. $27^\\circ\\text{C}$), and its 12 equivalent protons absorb far upfield at $\\delta = 0\\text{ ppm}$.",
    "Aromatic Ring Current Deshielding: Induced circulating pi-electron current creates magnetic field reinforcing external $B_0$ at periphery ($\delta 7.27\\text{ ppm}$).",
    "N+1 Splitting Rule: A proton coupled to $n$ chemically equivalent neighboring protons splits into $n+1$ peaks with Pascal intensity ratios.",
    "Coupling Constant Field Invariance: Coupling constant $J$ in Hz is an intrinsic molecular constant completely independent of external spectrometer magnet strength.",
    "Exam Gold Tip: In structure elucidation problems, use the Degree of Unsaturation formula: $\\text{DoU} = C + 1 - \\frac{H}{2} + \\frac{N}{2} - \\frac{X}{2}$ to identify rings and pi-bonds immediately."
])

# Save to sem3_bsc_physics_chem_data.json
with open('scripts/sem3_bsc_physics_chem_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in physics_chem dataset now: {len(data)}")
