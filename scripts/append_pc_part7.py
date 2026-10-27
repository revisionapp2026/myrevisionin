import json
import os

with open("scripts/build_bsc_sem2_physics_chem.py", "r", encoding="utf-8") as f:
    content = f.read()

part7 = r'''
# =========================================================================
# 8. CHEMISTRY LAB II (QUALITATIVE ANALYSIS) (B.Sc Life Sciences Sem 2)
# =========================================================================

add_unit(
    "bsc-chlab-qa: safety & instrumentation",
    [
        "Semi-Micro Analytical Safety Protocols: Personal protective equipment (PPE) requirements: chemical-resistant nitrile gloves, safety goggles, lab coats, and closed-toe footwear; Fume hood operations for volatile and toxic acid vapors.",
        "Chemical Hazard Management & Toxic Reagents: Toxic heavy metal ion handling (lead, mercury, cadmium, arsenic); Controlled disposal of heavy metal wastes into designated non-chlorinated hazardous waste collection carboys.",
        "Management of Hydrogen Sulfide Gas ($H_2S$): Hazards of toxic hydrogen sulfide; Traditional Kipp's apparatus generating gaseous $H_2S$ replaced by safer aqueous thioacetamide ($CH_3CSNH_2$) hydrolysis in hot acidic or alkaline solutions.",
        "Semi-Micro Glassware & Apparatus: Semi-micro test tubes ($75 \times 10\text{ mm}$), capillary droppers, centrifuge tubes, stirring glass rods, micro-spatulas, porcelain spot plates, and water baths.",
        "Centrifugation Technique in Qualitative Analysis: Separation of precipitate from supernatant solution using benchtop electrical angle centrifuge; Symmetric rotor tube balancing with equal-volume water counterweights.",
        "Precipitate Washing & Peptization Prevention: Washing centrifuged precipitate with small aliquots ($0.5\text{ mL}$) of dilute electrolyte washing solution rather than pure distilled water to avoid colloidal peptization.",
        "Reagent Dropper Delivery & Contamination Control: Proper vertical dropper alignment without touching inside wall of test tubes to prevent cross-contamination of analytical stock reagent bottles.",
        "Heating Protocols for Semi-Micro Tubes: Use of boiling water baths instead of direct open Bunsen burner flame to prevent hazardous thermal bumping and ejection of corrosive chemical reagents.",
        "Platinum Wire Maintenance & Flame Testing: Cleaning platinum flame test wire by repeated dipping into concentrated $HCl$ and heating in non-luminous Bunsen flame until no residual yellow sodium flame coloration persists.",
        "Emergency Neutralization Protocols: Eye-wash station and safety shower procedures; First-aid management of mineral acid spills (sodium bicarbonate slurry neutralization) and caustic alkali splashes (dilute boric acid rinse)."
    ],
    [
        "PPE Mandate: Eye goggles, lab coat, and chemical-resistant gloves compulsory at all times.",
        "Heavy Metal Waste Rule: Lead, mercury, and cadmium residues must never be dumped down laboratory sinks.",
        "Hydrogen Sulfide Alternative: Safe hydrolysis of thioacetamide replaces hazardous Kipp's $H_2S$ gas.",
        "Centrifuge Balancing: Opposing rotor tubes must be filled with identical liquid volumes.",
        "Peptization Prevention: Wash precipitates with dilute electrolyte rather than pure water.",
        "Dropper Hygiene: Reagent droppers must never contact test tube walls.",
        "Bumping Hazard Prevention: Always heat semi-micro reaction tubes in a boiling water bath.",
        "Flame Wire Cleaning Reagent: Concentrated hydrochloric acid ($HCl$) on platinum wire loop.",
        "Acid Spill Neutralizer: Saturated sodium bicarbonate ($NaHCO_3$) slurry.",
        "Exam Tip: In viva voce, explain that centrifuging reaction mixtures for 60 seconds replaces 15 minutes of slow gravity filtration, yielding compact precipitates with minimal loss."
    ]
)

add_unit(
    "bsc-chlab-qa: standard preparations",
    [
        "Preparation of Group I Reagents: Preparation and standardization of dilute hydrochloric acid ($2\text{ M } HCl$); Calculation of concentrated reagent dilution: $V_1 = (M_2 V_2)/M_1$ from $37\%\text{ w/w } HCl$ ($12\text{ M}$).",
        "Group II Reagent Solution: Saturated hydrogen sulfide aqueous solution or $0.5\text{ M}$ thioacetamide solution; Adjusting solution acidity to strictly $0.3\text{ M } H^+$ using methyl violet indicator.",
        "Group III Buffer Reagent Preparation: Preparation of solid ammonium chloride ($NH_4Cl$) and concentrated aqueous ammonia solution ($NH_4OH$, specific gravity $0.90$, $\approx 15\text{ M}$); Buffering at $\text{pH} \approx 9.2$.",
        "Group IV Reagents Formulation: Alkaline hydrogen sulfide medium established by adding $NH_4OH$ followed by thioacetamide or $H_2S$ gas in presence of $NH_4Cl$ buffer.",
        "Group V Carbonate Reagent Preparation: Preparation of saturated ammonium carbonate $((NH_4)_2CO_3)$ solution in dilute aqueous ammonia; Thermal instability requires cold storage below $20^\circ\text{C}$.",
        "Preparation of Specific Confirmatory Reagents: Dimethylglyoxime (DMG) $1\%\text{ w/v}$ solution in $95\%$ ethanol; Fresh preparation of Nessler's alkaline potassium tetraiodomercurate(II) reagent ($K_2[HgI_4]$ in $NaOH$).",
        "Preparation of Sodium Carbonate Extract (Soda Extract): Boiling water-insoluble salt mixture with excess anhydrous sodium carbonate ($Na_2CO_3$, $1:3$ ratio) to convert heavy metal cations into insoluble carbonates and anions into soluble sodium salts.",
        "Ammonium Molybdate Reagent Preparation: Dissolving ammonium heptamolybdate $((NH_4)_6Mo_7O_{24} \cdot 4H_2O)$ in dilute nitric acid ($HNO_3$); Freshly prepared for sensitive phosphate and silicate identification.",
        "Potassium Pyroantimonate Reagent Preparation: Boiling potassium pyroantimonate ($K_2H_2Sb_2O_7$) in distilled water to form clear reagent for selective precipitation of sodium ions as crystalline white $Na_2H_2Sb_2O_7$.",
        "Standard Shelf Life & Reagent Preservation: Storage of photo-sensitive reagents (silver nitrate $AgNO_3$, potassium ferrocyanide) in amber glass bottles away from direct sunlight; Fresh preparation of ferrous sulfate ($FeSO_4$) solution."
    ],
    [
        "Group I Reagent: Dilute $2\text{ M } HCl$.",
        "Group II Acidity Target: Strictly $0.3\text{ M } H^+$ (methyl violet indicator bluish-green).",
        "Group III Buffer: Solid $NH_4Cl$ followed by concentrated $NH_4OH$ ($\text{pH} \approx 9.2$).",
        "Group V Reagent: Ammonium carbonate in presence of $NH_4Cl$ and $NH_4OH$.",
        "DMG Reagent Composition: $1\%\text{ w/v}$ dimethylglyoxime in absolute or $95\%$ ethanol.",
        "Nessler's Reagent Composition: Alkaline solution of potassium tetraiodomercurate(II) ($K_2[HgI_4]$).",
        "Soda Extract Ratio: 1 part salt mixture to 3 parts anhydrous $Na_2CO_3$.",
        "Reagent Bottle Type: Amber colored glass bottles for light-sensitive $AgNO_3$ solutions.",
        "Fresh Preparation Mandate: Ferrous sulfate ($FeSO_4$) must be freshly prepared to prevent atmospheric oxidation to $Fe^{3+}$.",
        "Exam Tip: In viva, state that soda extract is prepared to eliminate interfering heavy metal cations that would otherwise precipitate with anion reagents and obscure confirmatory color tests."
    ]
)

add_unit(
    "bsc-chlab-qa: experimental procedures",
    [
        "Preliminary Dry Testing: Physical examination (color, crystalline state, odor); Dry heating in glass ignition tube (sublimation, gas evolution, decrepitation); Charcoal cavity reduction test with anhydrous $Na_2CO_3$ producing metallic beads.",
        "Flame Photometric Coloration Tests: Platinum loop flame tests: Persistent golden yellow ($\text{Na}^+$), lilac violet viewed through cobalt glass ($\text{K}^+$), brick red ($\text{Ca}^{2+}$), crimson red ($\text{Sr}^{2+}$), apple green ($\text{Ba}^{2+}$).",
        "Systematic Anion Wet Analysis: Testing with dilute $H_2SO_4$ (carbonate $\text{CO}_3^{2-}$ effervescence, nitrite $\text{NO}_2^-$, sulfide $\text{S}^{2-}$); Testing with concentrated $H_2SO_4$ (chloride $Cl^-$, bromide $Br^-$, iodide $I^-$, nitrate $\text{NO}_3^-$, oxalate $\text{C}_2\text{O}_4^{2-}$).",
        "Elimination of Interfering Anions: Removal of interfering anions (fluoride, borate, oxalate, phosphate) prior to Group III cation precipitation; Repeated evaporation to dryness with concentrated nitric acid ($HNO_3$) or ferric chloride treatment.",
        "Group I Cation Separation: Addition of dilute $HCl$ precipitates white chlorides: $AgCl$ (soluble in $NH_4OH$), $PbCl_2$ (soluble in hot water), and $Hg_2Cl_2$ (turns black with $NH_4OH$ forming mercury metal and amidomercuric chloride).",
        "Group II Cation Separation: Passing $H_2S$ into $0.3\text{ M } H^+$ acidic solution separates sulfides: Group IIA insoluble in yellow ammonium sulfide ($PbS, CuS, Bi_2S_3, CdS$); Group IIB soluble in yellow ammonium sulfide ($As_2S_3, Sb_2S_3, SnS_2$).",
        "Group III Cation Separation: Boiling filtrate from Group II to expel $H_2S$; Oxidation of $Fe^{2+}$ with concentrated $HNO_3$; Addition of excess solid $NH_4Cl$ and $NH_4OH$ precipitates hydroxides: $Fe(OH)_3$ (reddish-brown), $Al(OH)_3$ (gelatinous white), $Cr(OH)_3$ (greenish).",
        "Group IV Cation Separation: Passing $H_2S$ into ammoniacal Group III filtrate precipitates sulfides: $ZnS$ (white), $MnS$ (flesh pink), $NiS$ (black), $CoS$ (black); Dissolution and confirmatory analysis.",
        "Group V Cation Separation: Adding $(NH_4)_2CO_3$ to ammoniacal filtrate precipitates carbonates: $BaCO_3, SrCO_3, CaCO_3$; Separation by selective dissolution in acetic acid and fractional precipitation with potassium chromate ($K_2CrO_4$).",
        "Group VI Cation Identification: Testing residual filtrate for magnesium ($\text{Mg}^{2+}$) by precipitation as white crystalline magnesium ammonium phosphate ($MgNH_4PO_4 \cdot 6H_2O$) with disodium hydrogen phosphate ($Na_2HPO_4$)."
    ],
    [
        "Flame Test Sodium Color: Intense persistent golden yellow flame.",
        "Flame Test Potassium Color: Lilac/violet visible through blue cobalt glass.",
        "Flame Test Barium Color: Characteristic apple green flame.",
        "Group I Chloride Solubility: $PbCl_2$ is soluble in boiling hot water; $AgCl$ dissolves in $NH_4OH$.",
        "Group IIA Sulfides: Insoluble in yellow ammonium sulfide ($CuS, CdS, Bi_2S_3$).",
        "Group IIB Sulfides: Soluble in yellow ammonium sulfide ($As_2S_3, Sb_2S_3, SnS_2$).",
        "Group III Hydroxide Colors: $Fe(OH)_3$ reddish-brown, $Al(OH)_3$ white gelatinous, $Cr(OH)_3$ grayish-green.",
        "Group IV Sulfide Colors: $ZnS$ white, $MnS$ flesh-colored, $NiS$ and $CoS$ black.",
        "Group V Carbonate Separation: $BaCrO_4$ precipitates selectively upon adding potassium chromate in acetic acid.",
        "Exam Tip: In the Group III separation, boiling off all dissolved $H_2S$ gas completely before adding concentrated $HNO_3$ is crucial; failure to do so results in oxidation of sulfide to colloidal sulfur, masking hydroxide precipitates."
    ]
)

add_unit(
    "bsc-chlab-qa: data verification",
    [
        "Solubility Product ($K_{sp}$) Principles in Qualitative Separation: Selective precipitation dictated by ionic product exceeding $K_{sp}$; Low $K_{sp}$ of Group II sulfides ($CuS: 6 \times 10^{-36}$) allows precipitation at very low $[S^{2-}]$, while Group IV sulfides ($ZnS: 1.6 \times 10^{-24}$) remain dissolved.",
        "Common Ion Effect in Group Separation: In Group II, $0.3\text{ M } HCl$ provides excess $H^+$, suppressing $H_2S$ ionization: $[S^{2-}] = \frac{K_{a1} K_{a2} [H_2S]}{[H^+]^2} \approx 10^{-22}\text{ M}$, selectively precipitating only Group II cations.",
        "Group III Common Ion Suppression: Solid $NH_4Cl$ provides high $[NH_4^+]$, shifting $NH_4OH \rightleftharpoons NH_4^+ + OH^-$ to the left; Suppresses $[OH^-]$ to $\approx 10^{-5}\text{ M}$, precipitating trivalent hydroxides while keeping divalent $Mg(OH)_2$ and $Mn(OH)_2$ dissolved.",
        "Confirmatory Chemistry of Nickel: Addition of dimethylglyoxime (DMG) in ammoniacal medium forms voluminous scarlet-red bis(dimethylglyoximato)nickel(II) chelate $[Ni(C_4H_7N_2O_2)_2]$ stabilized by intramolecular hydrogen bonds.",
        "Confirmatory Chemistry of Iron: Reaction of ferric ions ($Fe^{3+}$) with potassium ferrocyanide ($K_4[Fe(CN)_6]$) produces intense Prussian blue precipitate: $4 Fe^{3+} + 3 [Fe(CN)_6]^{4-} \to Fe_4[Fe(CN)_6]_3$; Reaction with potassium thiocyanate ($KSCN$) yields blood-red $[Fe(SCN)(H_2O)_5]^{2+}$.",
        "Chromyl Chloride Test for Chloride Anions: Heating solid chloride salt with solid potassium dichromate ($K_2Cr_2O_7$) and concentrated $H_2SO_4$ generates deep reddish-brown vapors of chromyl chloride ($CrO_2Cl_2$); Vapors passed into $NaOH$ yield yellow sodium chromate, confirmed with lead acetate.",
        "Brown Ring Test for Nitrate Anions: Concentrated $H_2SO_4$ slowly poured along inner wall of test tube containing nitrate and freshly prepared $FeSO_4$; Forms brown ring of pentaaquanitrosyliron(II) sulfate $[Fe(H_2O)_5(NO)]SO_4$ at liquid interface.",
        "Ammonium Molybdate Test for Phosphate: Reaction of phosphate solution with excess ammonium molybdate in concentrated $HNO_3$ yields canary-yellow crystalline precipitate of ammonium phosphomolybdate: $(NH_4)_3[PMo_{12}O_{40}] \cdot xH_2O$.",
        "Confirmatory Test for Ammonium Ion ($\text{NH}_4^+$): Heating with aqueous $NaOH$ releases pungent ammonia gas ($NH_3$), turning moist red litmus blue; Addition of Nessler's reagent ($K_2[HgI_4]$) produces characteristic brown precipitate of iodide of Millon's base.",
        "Quality Control & Cross-Contamination Verification: Running procedural blank tests with deionized water; Verification of reagent purity; Systematic troubleshooting of false positive tests caused by trace cation cross-contamination."
    ],
    [
        "Group II vs IV Sulfide Principle: $K_{sp}$ of Group II is vastly lower than Group IV.",
        "Group II Sulfide Ion Concentration: $[S^{2-}] \approx 10^{-22}\text{ M}$ controlled by $0.3\text{ M } HCl$.",
        "Group III Hydroxide Control: $NH_4Cl$ suppresses $[OH^-]$ to prevent $Mg(OH)_2$ precipitation.",
        "Nickel DMG Complex Color: Brilliant scarlet-red coordination precipitate.",
        "Prussian Blue Formula: $Fe_4[Fe(CN)_6]_3$ formed by $Fe^{3+}$ and ferrocyanide.",
        "Iron Thiocyanate Color: Characteristic blood-red $[Fe(SCN)]^{2+}$ complex.",
        "Chromyl Chloride Formula: Volatile reddish-brown vapor $CrO_2Cl_2$.",
        "Brown Ring Complex Formula: $[Fe(H_2O)_5(NO)]^{2+}$.",
        "Phosphate Test Precipitate: Canary yellow ammonium phosphomolybdate $(NH_4)_3[PMo_{12}O_{40}]$.",
        "Exam Tip: In the brown ring test, make sure the test tube is held inclined at $45^\circ$ and concentrated $H_2SO_4$ is trickled slowly down the side without shaking, so it forms a distinct, undisturbed dense lower layer."
    ]
)

add_unit(
    "bsc-chlab-qa: record & viva",
    [
        "Standard Practical Record Format: Structured documentation: Date, Experiment Title, Qualitative Sample Code, Physical Examination, Systematic Dry Tests, Anion Analysis Tabular Scheme, Group Separation Table, Confirmatory Reactions, Final Reported Ions with Balanced Chemical Equations.",
        "Chemical Equations Integrity: Every observed identification and confirmatory test must be supported by stoichiometric, balanced ionic and molecular equations.",
        "Laboratory Evaluation Rubric: Practical examination marking scheme: Physical examination & dry tests ($15\%$), Anion systematic identification ($25\%$), Cation group separation & confirmation ($30\%$), Practical record journal ($15\%$), Viva voce performance ($15\%$).",
        "Core Viva Voce Concept: Role of $NH_4Cl$ in Group III: Explaining the common ion effect; Why $NH_4Cl$ must be added in substantial excess before $NH_4OH$ to suppress hydroxide concentration.",
        "Core Viva Voce Concept: Nitric Acid in Group III: Explaining why $Fe^{2+}$ must be oxidized to $Fe^{3+}$ with boiling concentrated $HNO_3$ ($K_{sp}$ of $Fe(OH)_3$ is $10^{-38}$, whereas $Fe(OH)_2$ is $10^{-15}$ and would not precipitate quantitatively).",
        "Core Viva Voce Concept: Failure of Chromyl Chloride Test: Bromides and iodides evolve elemental halogens ($Br_2, I_2$) instead of chromyl halides; Heavy metal chlorides like $HgCl_2, AgCl, PbCl_2$ are covalent or insoluble and do not react.",
        "Core Viva Voce Concept: Difference between Group IIA and IIB: Separation mechanism using yellow ammonium sulfide $(NH_4)_2S_x$; Group IIB elements ($As, Sb, Sn$) possess higher oxidation states and form soluble thio-salts (e.g. $(NH_4)_3AsS_4$).",
        "Core Viva Voce Concept: Mechanism of the Borax Bead Test: Thermal dehydration of borax $Na_2B_4O_7 \cdot 10H_2O$ to form glassy transparent bead of $NaBO_2 + B_2O_3$; Reaction with metal oxides forms colored metaborates (e.g. cobalt metaborate $Co(BO_2)_2$ deep blue).",
        "Core Viva Voce Concept: Nessler's Reaction Chemistry: Alkaline reaction with ammonium ion produces orange-brown precipitate of iodide of Millon's base: $2 K_2[HgI_4] + NH_3 + 3 KOH \to [HgO \cdot Hg(NH_2)]I \downarrow + 7 KI + 2 H_2O$.",
        "Good Laboratory Practice (GLP) & Waste Minimization: Microscale reaction volume implementation reducing hazardous chemical waste generation by $90\%$; Segregation of heavy metal precipitates from neutral aqueous washings."
    ],
    [
        "Report Structure: Dry tests $\to$ Anion analysis $\to$ Cation group separation $\to$ Confirmatory equations $\to$ Final result.",
        "Iron Oxidation Viva Fact: $K_{sp}$ of $Fe(OH)_3$ ($10^{-38}$) is 23 orders of magnitude lower than $Fe(OH)_2$ ($10^{-15}$).",
        "Borax Bead Composition: Anhydrous mixture of sodium metaborate ($NaBO_2$) and boric anhydride ($B_2O_3$).",
        "Cobalt Bead Color: Characteristic deep sapphire blue bead in both oxidizing and reducing flames.",
        "Copper Bead Color: Sky blue in oxidizing flame, opaque ruby red in reducing flame.",
        "Millon's Base Formula: $[HgO \cdot Hg(NH_2)]I$ (brown precipitate in Nessler's test).",
        "Chromyl Chloride Limitation: Fails with covalent and insoluble chlorides ($HgCl_2, AgCl, PbCl_2$).",
        "Group IIB Thio-Salts: Form soluble complexes like $(NH_4)_3AsS_4$ with yellow ammonium sulfide.",
        "Waste Minimization Strategy: Adoption of semi-micro techniques reduces chemical footprint tenfold.",
        "Exam Tip: In the oral viva, when asked why $HCl$ is used instead of $H_2SO_4$ to acidify the solution before $H_2S$ in Group II, answer that $H_2SO_4$ would cause premature precipitation of insoluble sulfates of Group V cations ($PbSO_4, BaSO_4, SrSO_4$)."
    ]
)

# =========================================================================
# 9. CHEMISTRY LAB II (B.Sc Biotech / Microbiology Sem 2)
# =========================================================================

add_unit(
    "bsc-chlab-bt: safety & instrumentation",
    [
        "Analytical Volumetric Laboratory Safety: Handling concentrated mineral acids ($H_2SO_4, HCl, HNO_3$) and corrosive alkaline titrants ($NaOH, KOH$); Eye protection, nitrile gloves, acid-resistant aprons, and immediate eyewash response.",
        "Chemical Hygiene for Strong Oxidizing Agents: Safety protocols for handling solid potassium permanganate ($KMnO_4$) and potassium dichromate ($K_2Cr_2O_7$); Carcinogenicity and environmental toxicity of hexavalent chromium ($\text{Cr}^{VI}$); Safe reduction of residual dichromate wastes to trivalent chromium ($\text{Cr}^{III}$) before neutralization and disposal.",
        "Analytical Balance Operation & Precision Weighing: Dual-range analytical electronic balances ($0.1\text{ mg} = 0.0001\text{ g}$ sensitivity); Draft shield closure, leveling bubble verification, zero tare calibration; Weighing by difference using glass weighing bottles; Temperature equilibration preventing convection buoyancy errors.",
        "Volumetric Glassware Calibration & Tolerances: Class A vs Class B volumetric glassware (burettes, volumetric pipettes, volumetric flasks); Reading meniscus: Bottom of concave meniscus for clear aqueous solutions, top of convex liquid boundary for intensely colored solutions ($KMnO_4$).",
        "Parallax Error Elimination in Titrimetry: Proper eye-level positioning perpendicular to graduated markings on burettes and pipettes to eliminate parallax viewing errors.",
        "Primary Standard Requirements in Quantitative Analysis: High chemical purity ($> 99.9\%$), known stoichiometry, stability in air (non-hygroscopic, non-efflorescent), high equivalent weight to minimize weighing errors; Examples: Anhydrous sodium carbonate ($Na_2CO_3$), potassium hydrogen phthalate (KHP), sodium oxalate ($Na_2C_2O_4$).",
        "Secondary Standards & Standardization Necessity: Solutions whose concentrations cannot be determined by direct weighing due to atmospheric absorption, volatilization, or instability; Examples: $NaOH$ (absorbs atmospheric $\text{CO}_2$ and moisture), $HCl$ (volatile gas), $KMnO_4$ (photochemical and auto-decomposition); Require periodic titration against primary standards.",
        "Cleaning & Degreasing of Volumetric Glassware: Cleaning glassware with chromic acid cleaning mixture ($K_2Cr_2O_7 + H_2SO_4$) or alkaline detergent solutions; Distilled water rinse testing for uniform water film drainage without droplet formation.",
        "Pipetting Safety & Automatic Pipette Fillers: Strict prohibition of mouth pipetting; Use of rubber bulb pipette fillers (three-valve Peleus bulbs) and calibrated mechanical pipettors.",
        "Instrumentation for Instrumental Titrations: Setup and electrode maintenance for pH meters (glass combination electrode calibration with standard $\text{pH } 4.01, 7.00, 9.21$ buffers) and conductivity meters (dip-type cell constant determination using standard $0.01\text{ M } KCl$)."
    ],
    [
        "Chromium Waste Treatment: Hexavalent $\text{Cr}^{VI}$ must be reduced to $\text{Cr}^{III}$ using sodium bisulfite before disposal.",
        "Analytical Balance Precision: Accuracy to four decimal places ($0.1\text{ mg} / 0.0001\text{ g}$).",
        "Meniscus Rule Clear Liquids: Read horizontal tangent to bottom of concave meniscus.",
        "Meniscus Rule Colored Liquids: Read upper liquid boundary line for opaque $KMnO_4$ solutions.",
        "Parallax Error Prevention: Eye must be strictly horizontal with calibration graduation line.",
        "Primary Standard Criterion: Exceptionally high purity, air stability, and high equivalent weight.",
        "Secondary Standard Trait: Variable concentration requiring standardization against primary standard.",
        "Mouth Pipetting Rule: Strictly prohibited under all circumstances; use mechanical bulb fillers.",
        "Clean Glassware Indicator: Continuous unbroken film of distilled water on interior glass walls.",
        "Exam Tip: In the viva, when asked why potassium permanganate ($KMnO_4$) cannot serve as a primary standard, explain that it always contains traces of manganese dioxide ($MnO_2$) impurity and undergoes slow photochemical decomposition."
    ]
)

add_unit(
    "bsc-chlab-bt: standard preparations",
    [
        "Preparation of Standard Primary Solutions: Weighing primary standard sodium oxalate ($Na_2C_2O_4$, molecular weight $134.00\text{ g/mol}$, equivalent weight $67.00\text{ g/mol}$) to prepare $0.1\text{ N}$ standard reducing solution; Weighing potassium dichromate ($K_2Cr_2O_7$, MW $294.18\text{ g/mol}$, EW $49.03\text{ g/mol}$) to prepare $0.1\text{ N}$ standard oxidant.",
        "Preparation of Primary Standard Hard Water: Dissolving accurately weighed analytical grade calcium carbonate ($CaCO_3$, MW $100.09\text{ g/mol}$) in minimum dilute $HCl$, evaporating to dryness to expel excess acid, and diluting to mark in volumetric flask to prepare $1\text{ mg/mL}$ standard ($1000\text{ ppm } CaCO_3$ equivalent).",
        "Preparation & Standardization of Permanganate Solution: Preparing approximate $0.02\text{ M}$ ($0.1\text{ N}$) $KMnO_4$; Boiling and filtering through sintered glass crucible to remove catalytic $MnO_2$ particles; Storing in dark amber bottle; Standardizing against hot ($70^\circ\text{C}$) acidified sodium oxalate solution.",
        "Preparation & Standardization of Sodium Thiosulfate: Preparing approximate $0.1\text{ N}$ sodium thiosulfate pentahydrate ($Na_2S_2O_3 \cdot 5H_2O$); Adding $0.1\text{ g/L}$ sodium carbonate ($Na_2CO_3$) as preservative to prevent bacterial decomposition; Standardizing against primary standard potassium dichromate in presence of excess $KI$ and dilute $HCl$.",
        "Preparation & Standardization of Disodium EDTA: Preparing approximate $0.01\text{ M}$ disodium ethylenediaminetetraacetate dihydrate ($Na_2H_2Y \cdot 2H_2O$, MW $372.24\text{ g/mol}$); Standardizing against standard $CaCO_3$ hard water solution in presence of ammonia-ammonium chloride buffer ($\text{pH } 10$).",
        "Formulation of Buffer Solutions for Titrimetry: Ammonia buffer solution ($\text{pH } 10.0$): Dissolving $67.5\text{ g}$ ammonium chloride ($NH_4Cl$) in $570\text{ mL}$ concentrated aqueous ammonia and diluting to $1000\text{ mL}$ with distilled water.",
        "Indicator Solution Preparations: Eriochrome Black T (EBT): $0.5\%\text{ w/w}$ ground mixture in solid sodium chloride ($NaCl$) to prevent aqueous degradation; Starch indicator solution: $1\%\text{ w/v}$ soluble starch paste prepared in boiling distilled water; Sodium diphenylamine sulfonate: $0.2\%\text{ w/v}$ solution in distilled water.",
        "Zimmermann-Reinhardt (Z-R) Reagent Preparation: Dissolving $50\text{ g}$ manganous sulfate tetrahydrate ($MnSO_4 \cdot 4H_2O$) in water, adding $100\text{ mL}$ concentrated $H_2SO_4$ and $100\text{ mL}$ concentrated phosphoric acid ($H_3PO_4$), diluting to $1000\text{ mL}$; Used to suppress chloride oxidation in iron permanganometry.",
        "Preparation of Standard Alkali and Acid Titrants: Preparing $0.1\text{ M } NaOH$ (standardized against primary standard potassium hydrogen phthalate KHP) and $0.1\text{ M } HCl$ (standardized against anhydrous $Na_2CO_3$ using methyl orange indicator).",
        "Shelf-Life Monitoring & Titrant Re-Standardization: Tracking normality changes over time; Re-standardizing volumetric titrants weekly to ensure analytical accuracy within $\pm 0.1\%$ relative error."
    ],
    [
        "Sodium Oxalate Equivalent Weight: $EW = MW/2 = 134.00 / 2 = 67.00\text{ g/equiv}$.",
        "Potassium Dichromate Equivalent Weight: $EW = MW/6 = 294.18 / 6 = 49.03\text{ g/equiv}$.",
        "Disodium EDTA Molecular Weight: $372.24\text{ g/mol}$ (dihydrate salt).",
        "Standard Hard Water Basis: $1.0\text{ mg } CaCO_3$ per $\text{mL}$ corresponds to $1000\text{ ppm}$ hardness.",
        "Thiosulfate Preservative: Sodium carbonate ($Na_2CO_3$) added to inhibit bacterial decomposition.",
        "Permanganate Filtration: Filtered through sintered glass crucible; filter paper must never be used.",
        "Ammonia Buffer pH: Maintained at exactly $\text{pH } 10.0$ for EDTA titrations.",
        "Solid Indicator Form: EBT ground in dry $NaCl$ salt matrix prevents solution auto-oxidation.",
        "Starch Indicator Freshness: Starch indicator paste must be freshly boiled and cooled before use.",
        "Exam Tip: In viva, state that filter paper cannot be used to filter $KMnO_4$ solutions because organic cellulose fibers reduce permanganate to manganese dioxide ($MnO_2$)."
    ]
)

add_unit(
    "bsc-chlab-bt: experimental procedures",
    [
        "Permanganometric Estimation of Ferrous Iron ($Fe^{2+}$): Acidifying ferrous ammonium sulfate (Mohr's salt) sample with dilute $H_2SO_4$; Titrating with standard $KMnO_4$ solution until pale permanent pink endpoint persists for 30 seconds; $KMnO_4$ acts as self-indicator: $MnO_4^- + 5 Fe^{2+} + 8 H^+ \to Mn^{2+} + 5 Fe^{3+} + 4 H_2O$.",
        "Permanganometric Titration of Oxalic Acid: Heating oxalic acid solution to $70\text{--}80^\circ\text{C}$ in dilute $H_2SO_4$; Reaction is slow initially, then auto-catalyzed by generated $Mn^{2+}$ ions: $2 MnO_4^- + 5 C_2O_4^{2-} + 16 H^+ \to 2 Mn^{2+} + 10 CO_2 \uparrow + 8 H_2O$.",
        "Dichromatometric Estimation of Ferrous Iron: Titrating acidified $Fe^{2+}$ solution against standard $K_2Cr_2O_7$ in presence of Zimmermann-Reinhardt reagent or dilute $H_2SO_4 + H_3PO_4$; Using sodium diphenylamine sulfonate indicator; Sharp color change from pale green to deep violet-blue.",
        "Role of Phosphoric Acid ($H_3PO_4$) in Dichromatometry: Phosphoric acid complexes ferric ions to form colorless $[Fe(PO_4)_2]^{3-}$; Lowers formal potential of $Fe^{3+}/Fe^{2+}$ system from $+0.77\text{ V}$ to $+0.61\text{ V}$, ensuring diphenylamine indicator ($E^\circ = +0.76\text{ V}$) oxidizes sharply at true equivalence point.",
        "Iodometric Estimation of Copper in Brass / Cupric Sulfate: Neutralizing cupric solution, adding excess potassium iodide ($KI$); Cuprous iodide precipitates, releasing equivalent iodine: $2 Cu^{2+} + 4 I^- \to 2 CuI \downarrow + I_2$; Titrating liberated $I_2$ against standard sodium thiosulfate ($Na_2S_2O_3$).",
        "Starch-Iodine Reaction & Potassium Thiocyanate Addition: Starch indicator added near endpoint when solution turns pale straw yellow; Adding potassium thiocyanate ($KSCN$) just before final endpoint releases strongly adsorbed iodine molecules from $CuI$ precipitate surface, yielding razor-sharp milk-white endpoint.",
        "Complexometric Determination of Total Hardness: Titrating water sample against standard $0.01\text{ M}$ EDTA at $\text{pH } 10$ (ammonia buffer) using Eriochrome Black T indicator; Color transition from wine-red ($Ca\text{--}EBT / Mg\text{--}EBT$ chelate) to pure sky-blue (free uncomplexed $EBT$ indicator).",
        "Determination of Permanent and Temporary Hardness: Boiling water sample for 15 minutes precipitates temporary hardness as carbonates: $Ca(HCO_3)_2 \xrightarrow{\Delta} CaCO_3 \downarrow + H_2O + CO_2 \uparrow$; Filtering, cooling, and titrating filtrate against EDTA yields permanent hardness; Temporary hardness calculated by difference: $\text{Total} - \text{Permanent}$.",
        "Conductometric Acid-Base Titrations: Titrating strong acid ($HCl$) with strong base ($NaOH$); Initial high conductance decreases sharply due to replacement of fast $H^+$ ($350\text{ S cm}^2/\text{mol}$) with slower $Na^+$ ($50\text{ S cm}^2/\text{mol}$); Minimum at equivalence point; Post-equivalence conductance rises sharply due to excess fast $OH^-$ ($198\text{ S cm}^2/\text{mol}$).",
        "Potentiometric Redox Titration ($Fe^{2+}$ with $K_2Cr_2O_7$): Platinum working electrode paired with saturated calomel reference electrode (SCE); Recording cell EMF after each titrant addition; Constructing first derivative curve $\frac{\Delta E}{\Delta V}$ vs $V$; Equivalence volume determined precisely at peak maximum."
    ],
    [
        "Permanganate Self-Indicator Endpoint: Permanent faint pink coloration persisting for $\ge 30\text{ seconds}$.",
        "Oxalate Heating Requirement: Heated to $70\text{--}80^\circ\text{C}$ to overcome high kinetic activation barrier.",
        "Auto-Catalysis in Permanganometry: Generated $Mn^{2+}$ ions catalyze subsequent reaction speed.",
        "Dichromate Indicator Transition: Colorless / green $\to$ permanent deep violet-blue.",
        "Phosphoric Acid Role: Complexes $Fe^{3+}$ to lower its redox potential and sharpen the endpoint.",
        "Iodometry Endpoint Transition: Dark blue starch-iodine complex $\to$ pure milk-white precipitate.",
        "Thiocyanate Addition Rationale: Displaces adsorbed iodine molecules from cuprous iodide ($CuI$).",
        "EDTA Hardness Endpoint: Wine-red to clear sky-blue at $\text{pH } 10.0$.",
        "Conductometric Strong Acid-Base V-Shape: Minimum conductance occurs exactly at neutral equivalence point.",
        "Exam Tip: In iodometric copper titrations, never add starch indicator at the beginning when iodine concentration is high; high iodine concentrations decompose starch irreversibly, ruining endpoint sharpness."
    ]
)

add_unit(
    "bsc-chlab-bt: data verification",
    [
        "Concordant Titre Verification: Titrations must be repeated until at least two consecutive runs yield identical titre volumes agreeing within $\pm 0.05\text{ mL}$; Eliminates random operational errors.",
        "Normality & Molarity Stoichiometric Calculations: Volumetric equivalency formula $N_1 V_1 = N_2 V_2$ for normalities; Molar stoichiometric relationship: $\frac{M_1 V_1}{n_1} = \frac{M_2 V_2}{n_2}$ where $n_1, n_2$ represent stoichiometric coefficients in balanced reaction.",
        "Calculation of Hardness in Parts Per Million (ppm): Total hardness expressed in $\text{mg/L}$ ($\text{ppm}$) of $CaCO_3$ equivalent: $\text{Hardness (ppm)} = \frac{V_{EDTA} \times M_{EDTA} \times 100.09 \times 1000}{V_{sample}}$; $1\text{ mL of } 0.01\text{ M EDTA} \equiv 1.0009\text{ mg } CaCO_3$.",
        "Metal-EDTA Chelate Stability Constants: 1:1 hexadentate chelate ring formation; Conditional formation constant $K'_{MY} = \alpha_{Y^{4-}} K_{MY}$; $\log K_{CaY} = 10.7$, $\log K_{MgY} = 8.7$; Calcium complexes preferentially over magnesium; Eriochrome Black T forms weaker complex ($K_{Mg-In} < K_{MgY}$), enabling displacement by EDTA.",
        "Calculation of Copper Content in Brass: Percentage copper in alloy: $\%Cu = \frac{V_{thiosulfate} \times N_{thiosulfate} \times 63.54 \times 100}{1000 \times \text{Weight of Brass Sample}}$; Verified against theoretical composition of brass ($60\text{--}70\% Cu, 30\text{--}40\% Zn$).",
        "Statistical Propagation of Measurement Errors: Cumulative error in volumetric analysis: Relative error $\frac{\delta V}{V} = \sqrt{\left(\frac{\delta V_{pipette}}{V_{pipette}}\right)^2 + \left(\frac{\delta V_{burette}}{V_{burette}}\right)^2 + \left(\frac{\delta m}{m}\right)^2}$; Calculation of standard deviation and $95\%$ confidence intervals.",
        "Conductometric Titration Curve Mathematical Analysis: Linear regression of pre-equivalence and post-equivalence data points; Equivalence point obtained mathematically by intersecting regression lines $y_1 = m_1 x + c_1$ and $y_2 = m_2 x + c_2$: $x_{eq} = \frac{c_2 - c_1}{m_1 - m_2}$.",
        "Potentiometric First and Second Derivative Methods: Identifying inflection point on titration curve: Maximum of first derivative $\left(\frac{\Delta E}{\Delta V}\right)_{max}$ or zero-crossing of second derivative $\frac{\Delta^2 E}{\Delta V^2} = 0$; Eliminates subjective visual endpoint bias.",
        "Blank Titration Determinations: Running solvent blank titrations (distilled water without analyte) to determine indicator blank correction volume; Subtracting blank volume $V_{blank}$ from raw titre volume $V_{raw}$.",
        "Quality Assurance & Traceability: Standard reference materials (SRM) comparison; Calibration verification with standard solutions traceable to national metrology standards."
    ],
    [
        "Concordance Standard: Consecutive titre volumes must match within $\pm 0.05\text{ mL}$.",
        "Equivalency Equation: $N_1 V_1 = N_2 V_2$.",
        "Hardness Formula: $\text{ppm Hardness} = \frac{V_{EDTA} \times M_{EDTA} \times 100.09 \times 1000}{V_{water}}$.",
        "EDTA Stoichiometry: Strictly 1:1 complexation regardless of metal cation valence.",
        "Copper Equivalent Weight: $63.54\text{ g/equiv}$ in iodometric redox titration.",
        "First Derivative Titration Peak: Maximum in $\Delta E / \Delta V$ corresponds to exact equivalence volume.",
        "Conductometric Intersection: Intersection of two linear conductivity trend lines defines endpoint.",
        "Indicator Blank Correction: $V_{corrected} = V_{observed} - V_{blank}$.",
        "Hexadentate Ligand: EDTA coordinates through 2 amine nitrogens and 4 carboxylate oxygens.",
        "Exam Tip: In water hardness calculations, always express the final result in terms of equivalent $\text{mg/L of } CaCO_3$ (molecular weight $100.09\text{ g/mol}$), which is defined universally as parts per million (ppm)."
    ]
)

add_unit(
    "bsc-chlab-bt: record & viva",
    [
        "Volumetric Practical Report Structure: Objective / Aim, Underlying Theoretical Principle, Chemical Reactions & Balanced Equations, Tabular Formats for Standardization and Titration, Concordant Value Selection, Step-by-Step Stoichiometric Calculations, Final Reported Result with SI Units and Uncertainty.",
        "Marking Rubric for Practical Examination: Procedural glassware handling & pipetting technique ($20\%$), Concordance & volumetric precision within $\pm 1\%$ of true value ($30\%$), Practical record journal & calculations ($20\%$), Viva voce oral examination ($30\%$).",
        "Core Viva Voce Concept: Why Hydrochloric Acid is Prohibited in Permanganometry: Hydrochloric acid ($HCl$) is oxidized by permanganate into chlorine gas ($2 MnO_4^- + 10 Cl^- + 16 H^+ \to 2 Mn^{2+} + 5 Cl_2 \uparrow + 8 H_2O$), consuming excess $KMnO_4$ and yielding falsely elevated results.",
        "Core Viva Voce Concept: Role of Zimmermann-Reinhardt Reagent: Explaining how $MnSO_4$ lowers the reduction potential of $MnO_4^-$, $H_3PO_4$ complexes $Fe^{3+}$, and $H_2SO_4$ maintains necessary acidity, preventing oxidation of $Cl^-$ in presence of iron.",
        "Core Viva Voce Concept: Starch Indicator Chemistry: Starch contains amylose (linear $\alpha\text{--}1,4\text{-glucan}$ helical polymer) that forms an intense deep blue charge-transfer inclusion complex with polyiodide ions ($I_3^-, I_5^-$); Triiodide slips inside the hydrophobic helical core.",
        "Core Viva Voce Concept: Action of Potassium Thiocyanate in Iodometry: Adsorption of iodine onto the surface of cuprous iodide ($CuI$) precipitate gives a premature diffuse endpoint; Thiocyanate ($SCN^-$) has higher affinity for $Cu^+$ and displaces the adsorbed iodine into solution, ensuring sharp endpoint.",
        "Core Viva Voce Concept: Why EDTA Titrations Require Buffer $\text{pH } 10$: Below $\text{pH } 10$, EDTA ($H_4Y$) is protonated into $HY^{3-}$ and $H_2Y^{2-}$, drastically lowering conditional stability constant; Above $\text{pH } 12$, magnesium and calcium precipitate out as insoluble hydroxides $Mg(OH)_2$ and $Ca(OH)_2$.",
        "Core Viva Voce Concept: Role of Magnesium in EDTA Endpoint Sharpening: $Ca\text{--}EBT$ complex is too weak to produce sharp endpoint; Traces of $Mg\text{--}EDTA$ added to buffer exchange with $Ca^{2+}$: $Ca^{2+} + MgY^{2-} \to CaY^{2-} + Mg^{2+}$; The liberated $Mg^{2+}$ binds $EBT$ forming wine-red complex, which EDTA titrates last, giving distinct wine-red to blue change.",
        "Core Viva Voce Concept: Principle of Conductometric Titrations: Electrical conductance is additive ($\kappa = \sum c_i \lambda_i$); Sharp inflection points arise from the vast difference between proton mobility ($\lambda_{H^+} = 350$) and metal cations ($\lambda_{Na^+} = 50$).",
        "Laboratory Cleanliness & Safe Chemical Disposal: Neutralizing waste acids and bases before drain disposal; Segregation of heavy metal titrates; Triple-rinsing volumetric glassware with deionized water before storage."
    ],
    [
        "Viva Question $HCl$ Permanganate: $KMnO_4$ oxidizes $HCl$ to chlorine gas, ruining accuracy.",
        "Viva Question Amylose Iodine: Starch amylose forms blue inclusion complex with triiodide ($I_3^-$).",
        "Viva Question Thiocyanate: Displaces adsorbed iodine from $CuI$ precipitate surface.",
        "Viva Question Buffer pH 10: Optimizes EDTA deprotonation without precipitating metal hydroxides.",
        "Viva Question Magnesium Spike: $Mg^{2+}$ ensures crisp wine-red to sky-blue EBT endpoint.",
        "Viva Question Proton Mobility: High mobility of $H^+$ ($350\text{ S cm}^2/\text{mol}$) drives conductometric V-curve.",
        "Permanganate Primary Standard Status: False; requires standardization against sodium oxalate.",
        "EDTA Chelate Ratio: Always 1:1 regardless of whether cation is $Ca^{2+}, Fe^{3+}$, or $Zr^{4+}$.",
        "Dichromate Primary Standard Status: True; stable, non-hygroscopic, $> 99.9\%$ pure.",
        "Exam Tip: In the viva, when asked why nitric acid ($HNO_3$) cannot be used to acidify solutions in permanganometry, explain that $HNO_3$ is itself an oxidizing agent that would compete with $KMnO_4$ and oxidize the reducing analyte."
    ]
)

# =========================================================================
# 10. MATHEMATICS II / BOTANY II (B.Sc Chemistry Sem 2)
# =========================================================================

add_unit(
    "bsc-chm: odes",
    [
        "Linear Ordinary Differential Equations with Constant Coefficients: General $n$-th order linear differential equation: $a_n \frac{d^n y}{dx^n} + a_{n-1}\frac{d^{n-1}y}{dx^{n-1}} + \dots + a_0 y = X(x)$; Operator notation $f(D)y = X$ where differential operator $D = \frac{d}{dx}$.",
        "Complementary Function (CF) & Auxiliary Equation: Auxiliary polynomial $f(m) = a_n m^n + \dots + a_0 = 0$; Real distinct roots ($m_1 \ne m_2 \implies c_1 e^{m_1 x} + c_2 e^{m_2 x}$); Repeated roots ($m_1 = m_2 \implies (c_1 + c_2 x)e^{m_1 x}$); Complex conjugate roots ($\alpha \pm i \beta \implies e^{\alpha x}(c_1 \cos \beta x + c_2 \sin \beta x)$).",
        "Particular Integral (PI) for Exponential Forcing Functions: For $X = e^{a x}$: $PI = \frac{1}{f(D)}e^{a x} = \frac{e^{a x}}{f(a)}$ provided $f(a) \ne 0$; Resonance case when $f(a) = 0$: $PI = x \frac{e^{a x}}{f'(a)}$.",
        "Particular Integral for Trigonometric Functions: For $X = \sin(a x)$ or $\cos(a x)$: $PI = \frac{1}{f(D^2)}\sin(a x) = \frac{\sin(a x)}{f(-a^2)}$ provided $f(-a^2) \ne 0$; Resonance case when $f(-a^2) = 0$: $PI = x \frac{\sin(a x)}{f'(-a^2)}$.",
        "Particular Integral for Polynomial Functions: For $X = x^m$: $PI = [f(D)]^{-1} x^m$; Expanding $[f(D)]^{-1}$ as ascending power series in $D$ via binomial theorem and operating successively on $x^m$ until $D^{m+1} x^m = 0$.",
        "Particular Integral for Product Forcing Functions: Exponential shift rule: $\frac{1}{f(D)} [e^{a x} V(x)] = e^{a x} \frac{1}{f(D + a)} V(x)$; Allows factorizing exponential term out of inverse operator.",
        "Cauchy-Euler Homogeneous Linear Differential Equations: Form $a_n x^n \frac{d^n y}{dx^n} + \dots + a_1 x \frac{dy}{dx} + a_0 y = X(x)$; Transformed to linear ODE with constant coefficients via substitution $x = e^z$ ($z = \ln x$) and $x D = \theta$, $x^2 D^2 = \theta(\theta - 1)$ where $\theta = \frac{d}{dz}$.",
        "Legendre's Linear Differential Equations: Generalized Cauchy equation: $a_n (a x + b)^n \frac{d^n y}{dx^n} + \dots + a_0 y = X(x)$; Transformed via substitution $a x + b = e^z$ ($z = \ln(a x + b)$) and $(a x + b)D = a \theta$.",
        "Method of Variation of Parameters: General method for non-homogeneous second-order ODE $y'' + P(x)y' + Q(x)y = R(x)$; Complementary function $y_c = c_1 y_1 + c_2 y_2$; Particular integral $y_p = u(x) y_1 + v(x) y_2$; Wronskian determinant $W = y_1 y_2' - y_2 y_1' \ne 0$; Formulas $u(x) = -\int \frac{y_2 R}{W} dx$ and $v(x) = \int \frac{y_1 R}{W} dx$.",
        "Chemical Kinetics Applications of Linear ODEs: Consecutive irreversible first-order reactions $A \xrightarrow{k_1} B \xrightarrow{k_2} C$; System of differential equations $\frac{d[A]}{dt} = -k_1 [A]$ and $\frac{d[B]}{dt} = k_1 [A] - k_2 [B]$; Solution for intermediate: $[B](t) = [A]_0 \frac{k_1}{k_2 - k_1}(e^{-k_1 t} - e^{-k_2 t})$."
    ],
    [
        "Auxiliary Equation: $f(m) = 0$ obtained by replacing $D \to m$.",
        "Exponential PI Rule: $\frac{1}{f(D)}e^{ax} = \frac{e^{ax}}{f(a)}$ if $f(a) \ne 0$.",
        "Trigonometric PI Substitution: Replace $D^2 \to -a^2$.",
        "Exponential Shift Formula: $\frac{1}{f(D)}[e^{ax} V] = e^{ax} \frac{1}{f(D+a)}V$.",
        "Cauchy-Euler Transformation: $x = e^z \implies x D = \theta, x^2 D^2 = \theta(\theta - 1)$.",
        "Wronskian Determinant: $W(y_1, y_2) = y_1 y_2' - y_2 y_1'$.",
        "Variation of Parameters PI: $y_p = -y_1 \int \frac{y_2 R}{W} dx + y_2 \int \frac{y_1 R}{W} dx$.",
        "Repeated Root Solution: $y = (c_1 + c_2 x)e^{mx}$.",
        "Complex Conjugate Solution: $y = e^{\alpha x}(c_1 \cos \beta x + c_2 \sin \beta x)$.",
        "Exam Tip: In variation of parameters, ensure the differential equation is normalized so the coefficient of $y''$ is strictly 1 before identifying the forcing function $R(x)$."
    ]
)

add_unit(
    "bsc-chm: laplace transforms",
    [
        "Definition of Laplace Transform & Existence Conditions: Unilateral Laplace transform $\mathcal{L}\{f(t)\} = F(s) = \int_0^\infty e^{-s t} f(t) dt$; Sufficient conditions for existence: $f(t)$ must be piecewise continuous on $[0, \infty)$ and of exponential order $\gamma$ ($|f(t)| \le M e^{\gamma t}$ for $t > T$).",
        "Linearity Property & Standard Elementary Transforms: Linearity: $\mathcal{L}\{a f(t) + b g(t)\} = a F(s) + b G(s)$; Standard transforms: $\mathcal{L}\{1\} = \frac{1}{s}$, $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$, $\mathcal{L}\{e^{a t}\} = \frac{1}{s - a}$, $\mathcal{L}\{\sin(a t)\} = \frac{a}{s^2 + a^2}$, $\mathcal{L}\{\cos(a t)\} = \frac{s}{s^2 + a^2}$, $\mathcal{L}\{\sinh(a t)\} = \frac{a}{s^2 - a^2}$, $\mathcal{L}\{\cosh(a t)\} = \frac{s}{s^2 - a^2}$.",
        "First Shifting Property (Frequency Translation): If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{e^{a t} f(t)\} = F(s - a)$; Transforms modulated sinusoids: $\mathcal{L}\{e^{a t} \sin(b t)\} = \frac{b}{(s - a)^2 + b^2}$, $\mathcal{L}\{e^{a t} \cos(b t)\} = \frac{s - a}{(s - a)^2 + b^2}$.",
        "Second Shifting Property (Time Delay & Heaviside Step Function): Unit step function $u(t - a) = 0$ for $t < a$, $1$ for $t \ge a$; If $\mathcal{L}\{f(t)\} = F(s)$, then $\mathcal{L}\{f(t - a) u(t - a)\} = e^{-a s} F(s)$; Modeling discontinuous chemical feed pulses and sudden heating.",
        "Laplace Transform of Derivatives: Transform of first derivative: $\mathcal{L}\{f'(t)\} = s F(s) - f(0)$; Second derivative: $\mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0) - f'(0)$; $n$-th derivative: $\mathcal{L}\{f^{(n)}(t)\} = s^n F(s) - \sum_{i=1}^n s^{n-i} f^{(i-1)}(0)$; Converts differential equations into algebraic equations.",
        "Transform of Integrals & Multiplication by $t$: Transform of definite integral: $\mathcal{L}\left\{\int_0^t f(\tau) d\tau\right\} = \frac{F(s)}{s}$; Multiplication by power of $t$: $\mathcal{L}\{t^n f(t)\} = (-1)^n \frac{d^n}{ds^n} F(s)$; Division by $t$: $\mathcal{L}\left\{\frac{f(t)}{t}\right\} = \int_s^\infty F(\sigma) d\sigma$ provided limit exists.",
        "Inverse Laplace Transforms via Partial Fractions: Linear operator $\mathcal{L}^{-1}\{F(s)\} = f(t)$; Decomposing rational transfer functions $F(s) = \frac{P(s)}{Q(s)}$ into partial fractions with linear factors $\frac{A}{s - a}$, repeated factors $\frac{B}{(s - a)^k}$, and irreducible quadratic factors $\frac{C s + D}{(s - a)^2 + b^2}$.",
        "Convolution Theorem: Convolution integral defined as $(f * g)(t) = \int_0^t f(\tau) g(t - \tau) d\tau$; Convolution property: $\mathcal{L}\{(f * g)(t)\} = F(s) G(s)$; Inverse transform formulation: $\mathcal{L}^{-1}\{F(s) G(s)\} = \int_0^t f(\tau) g(t - \tau) d\tau$.",
        "Dirac Delta Function & Impulse Responses: Unit impulse function $\delta(t - a)$; Sifting property $\int_0^\infty f(t) \delta(t - a) dt = f(a)$; Laplace transform: $\mathcal{L}\{\delta(t - a)\} = e^{-a s}$; $\mathcal{L}\{\delta(t)\} = 1$; Impulse response of chemical CSTR reactors to instantaneous tracer injection.",
        "Solving Initial Value Problems for ODEs: Complete algorithmic workflow: Apply Laplace transform to both sides of ODE incorporating initial conditions $y(0) = y_0, y'(0) = y_1$; Solve algebraically for $Y(s)$; Apply inverse Laplace transform to obtain unique time-domain analytical solution $y(t)$."
    ],
    [
        "Laplace Integral Definition: $\mathcal{L}\{f(t)\} = \int_0^\infty e^{-st} f(t) dt$.",
        "Standard Transform $t^n$: $\mathcal{L}\{t^n\} = \frac{n!}{s^{n+1}}$ (for positive integer $n$).",
        "First Shifting Theorem: $\mathcal{L}\{e^{at} f(t)\} = F(s - a)$.",
        "Second Shifting Theorem: $\mathcal{L}\{f(t-a) u(t-a)\} = e^{-as} F(s)$.",
        "First Derivative Transform: $\mathcal{L}\{f'(t)\} = s F(s) - f(0)$.",
        "Second Derivative Transform: $\mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0) - f'(0)$.",
        "Multiplication by $t$: $\mathcal{L}\{t f(t)\} = -\frac{d}{ds} F(s)$.",
        "Integral Transform: $\mathcal{L}\{\int_0^t f(\tau)d\tau\} = \frac{F(s)}{s}$.",
        "Convolution Theorem: $\mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t) = \int_0^t f(\tau)g(t-\tau)d\tau$.",
        "Exam Tip: In solving differential equations via Laplace transforms, remember that initial conditions $y(0)$ and $y'(0)$ are incorporated directly in the first algebraic step, eliminating the need to solve separately for arbitrary constants."
    ]
)

add_unit(
    "bsc-chm: 3d geometry",
    [
        "Direction Cosines & Direction Ratios: Directed line in 3D Euclidean space making angles $\alpha, \beta, \gamma$ with coordinate axes; Direction cosines $l = \cos\alpha, m = \cos\beta, n = \cos\gamma$; Fundamental identity: $l^2 + m^2 + n^2 = 1$; Direction ratios $a, b, c$ proportional to direction cosines: $l = \frac{a}{\sqrt{a^2 + b^2 + c^2}}$.",
        "Angle Between Two Directed Lines: Angle $\theta$ between lines with direction cosines $(l_1, m_1, n_1)$ and $(l_2, m_2, n_2)$: $\cos\theta = l_1 l_2 + m_1 m_2 + n_1 n_2$; Perpendicularity condition: $l_1 l_2 + m_1 m_2 + n_1 n_2 = 0$ ($a_1 a_2 + b_1 b_2 + c_1 c_2 = 0$); Parallelism condition: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$.",
        "Equations of a Plane in 3D Space: General linear equation $A x + B y + C z + D = 0$ with normal vector $(A, B, C)$; Normal form $l x + m y + n z = p$ where $p$ is perpendicular distance from origin; Intercept form $\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1$; Plane passing through $(x_1, y_1, z_1)$: $A(x - x_1) + B(y - y_1) + C(z - z_1) = 0$.",
        "Perpendicular Distance & Angle Between Planes: Distance from point $(x_1, y_1, z_1)$ to plane $A x + B y + C z + D = 0$: $d = \frac{|A x_1 + B y_1 + C z_1 + D|}{\sqrt{A^2 + B^2 + C^2}}$; Angle between two planes: $\cos\theta = \frac{A_1 A_2 + B_1 B_2 + C_1 C_2}{\sqrt{A_1^2 + B_1^2 + C_1^2}\sqrt{A_2^2 + B_2^2 + C_2^2}}$.",
        "Symmetrical Equations of a Straight Line: Straight line passing through point $(x_1, y_1, z_1)$ with direction cosines $(l, m, n)$: $\frac{x - x_1}{l} = \frac{y - y_1}{m} = \frac{z - z_1}{n} = r$; Any arbitrary point on line has parametric coordinates $(x_1 + l r, y_1 + m r, z_1 + n r)$.",
        "Two-Point Form & Non-Symmetrical Equations of a Line: Line passing through $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$: $\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1} = \frac{z - z_1}{z_2 - z_1}$; Line defined as intersection of two non-parallel planes: $A_1 x + B_1 y + C_1 z + D_1 = 0$ and $A_2 x + B_2 y + C_2 z + D_2 = 0$.",
        "Coplanarity of Two Straight Lines: Condition for lines $\frac{x - x_1}{l_1} = \frac{y - y_1}{m_1} = \frac{z - z_1}{n_1}$ and $\frac{x - x_2}{l_2} = \frac{y - y_2}{m_2} = \frac{z - z_2}{n_2}$ to be coplanar: Determinant $\begin{vmatrix} x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ l_1 & m_1 & n_1 \\ l_2 & m_2 & n_2 \end{vmatrix} = 0$.",
        "Shortest Distance Between Two Skew Lines: Non-parallel, non-intersecting lines in 3D; Shortest distance vector lies along common perpendicular: $SD = \frac{\begin{vmatrix} x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{vmatrix}}{\sqrt{(b_1 c_2 - b_2 c_1)^2 + (c_1 a_2 - c_2 a_1)^2 + (a_1 b_2 - a_2 b_1)^2}}$; In vector form: $SD = \frac{|(\vec{a}_2 - \vec{a}_1) \cdot (\vec{b}_1 \times \vec{b}_2)|}{|\vec{b}_1 \times \vec{b}_2|}$.",
        "General Equation of a Sphere in 3D Space: Second-degree equation $x^2 + y^2 + z^2 + 2 u x + 2 v y + 2 w z + d = 0$; Center at $(-u, -v, -w)$; Radius $R = \sqrt{u^2 + v^2 + w^2 - d}$; Real sphere condition: $u^2 + v^2 + w^2 - d > 0$; Point sphere when radius equals zero.",
        "Sphere-Plane Intersections & Tangent Planes: Intersection of sphere with plane yields a circle in 3D space; Tangent plane to sphere at point $(x_1, y_1, z_1)$: $x x_1 + y y_1 + z z_1 + u(x + x_1) + v(y + y_1) + w(z + z_1) + d = 0$; Condition of tangency: perpendicular distance from center to plane equals sphere radius $R$."
    ],
    [
        "Direction Cosine Sum: $l^2 + m^2 + n^2 = 1$.",
        "Perpendicularity Condition: $l_1 l_2 + m_1 m_2 + n_1 n_2 = 0$.",
        "Parallelism Condition: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$.",
        "Point-to-Plane Distance: $d = \frac{|A x_1 + B y_1 + C z_1 + D|}{\sqrt{A^2 + B^2 + C^2}}$.",
        "Symmetric Line Form: $\frac{x - x_1}{l} = \frac{y - y_1}{m} = \frac{z - z_1}{n} = r$.",
        "Coplanarity Condition: Vanishing $3 \times 3$ determinant of displacement and direction ratios.",
        "Skew Line Shortest Distance: $SD = \frac{|(\vec{a}_2 - \vec{a}_1) \cdot (\vec{b}_1 \times \vec{b}_2)|}{|\vec{b}_1 \times \vec{b}_2|}$.",
        "Sphere Center: Coordinates $(-u, -v, -w)$.",
        "Sphere Radius Formula: $R = \sqrt{u^2 + v^2 + w^2 - d}$.",
        "Exam Tip: In shortest distance calculations between skew lines, if the determinant in the numerator evaluates to zero, the two lines are coplanar and intersect at a single point."
    ]
)

add_unit(
    "bsc-chm: plant anatomy",
    [
        "Meristematic Tissues and Classification: Characteristics of meristematic cells: thin cellulosic walls, dense cytoplasm, prominent nuclei, no vacuole or small vacuoles, continuous active mitotic cell division; Classification by position: Apical meristems (terminal growth in length), Intercalary meristems (internode elongation in monocots), Lateral meristems (cambium, secondary growth in girth).",
        "Theories of Shoot and Root Apical Organization: Tunica-Corpus theory of Schmidt: Tunica (outer peripheral layers dividing anticlinally for surface growth) and Corpus (central core dividing in all planes for volume growth); Histogen theory of Hanstein: Dermatogen (epidermis), Periblem (cortex), and Plerome (stele and vascular system).",
        "Simple Permanent Tissues Structure and Function: Parenchyma: isodiametric, living thin-walled cells functioning in photosynthesis (chlorenchyma) and storage; Collenchyma: living cells with uneven pectin-cellulose wall thickenings at corners providing flexible tensile mechanical support; Sclerenchyma: dead cells with thick lignified secondary walls comprising elongated fibers and stone cells (sclereids).",
        "Complex Vascular Tissues (Xylem and Phloem): Xylem: water and mineral conduction comprising dead tracheids (imperforate tapering cells), vessels (perforated continuous tubular conduits), xylem parenchyma, and xylem fibers; Phloem: organic assimilate translocation comprising enucleated sieve tube elements, nucleated companion cells, phloem parenchyma, and phloem fibers (bast fibers).",
        "Classification of Vascular Bundles: Radial (xylem and phloem on separate alternating radii, found in roots); Conjoint collateral (xylem and phloem on same radius, phloem external); Conjoint bicollateral (phloem on both outer and inner sides of xylem separated by cambium bands, Cucurbitaceae); Concentric amphicribral (xylem surrounded by phloem, ferns) and amphivasal (phloem surrounded by xylem, Dracaena).",
        "Primary Anatomical Organization of Dicot and Monocot Organs: Dicot stem: epidermis with trichomes, multicellular hypodermis (collenchymatous), parenchymatous cortex, endodermis with starch sheath, pericycle, open vascular bundles arranged in broken ring around central pith; Monocot stem: sclerenchymatous hypodermis, ground tissue not differentiated into cortex and pith, closed vascular bundles scattered throughout ground tissue; Dicot root: radial bundles with exarch xylem (protoxylem towards periphery), few xylem strands (diarch to tetrarch); Monocot root: polyarch exarch xylem with large conspicuous central pith.",
        "Normal Secondary Growth in Dicotyledonous Stems: Initiation of vascular cambium: intra-fascicular cambium unites with newly dedifferentiated inter-fascicular cambium to form continuous meristematic ring; Cambium produces secondary xylem towards interior and secondary phloem towards exterior; Ray initials form uniseriate and multiseriate vascular rays for radial conduction.",
        "Wood Anatomy and Periderm Formation: Annual rings composed of early wood (spring wood: wide lumens, thin walls, rapid water conduction) and late wood (autumn wood: narrow lumens, thick walls); Heartwood (duramen: central non-functional dark wood plugged with tyloses and impregnated with tannins and resins) versus sapwood (alburnum: peripheral living functional wood); Cork cambium (phellogen) arising in cortex produces cork (phellem) outwards and secondary cortex (phelloderm) inwards; Periderm replaces broken epidermis; Lenticels provide aeration.",
        "Anomalous Secondary Growth in Dicot Stems: Variations from normal secondary growth: Formation of accessory or successive concentric rings of vascular cambium (Boerhavia, Achyranthes); Abnormal behavior of single normal cambium producing unequal amounts of secondary tissues or fissured xylem wedges (Bignonia); Presence of medullary vascular bundles in pith (Nyctanthes) or cortical bundles in cortex (Casuarina).",
        "Anomalous Secondary Growth in Monocotyledonous Stems: Monocots normally lack secondary growth due to closed bundles; Anomalous secondary thickening in arborescent monocots (Dracaena, Yucca, Aloe); Secondary cambium arises in outer cortex and produces secondary closed amphivasal vascular bundles embedded in lignified conjunctive ground parenchyma."
    ],
    [
        "Meristem Classification: Apical (length), Intercalary (internode), Lateral (girth).",
        "Schmidt Theory: Tunica (anticlinal divisions) and Corpus (multi-plane divisions).",
        "Collenchyma Wall Chemistry: Uneven thickening of cellulose, hemicellulose, and pectin at cell corners.",
        "Xylem Vessel Traits: Perforated end plates forming continuous tubes; dead at maturity.",
        "Phloem Sieve Elements: Living enucleated cells supported by nucleated companion cells.",
        "Bicollateral Bundle Pattern: Outer phloem, outer cambium, xylem, inner cambium, inner phloem.",
        "Exarch vs Endarch Xylem: Exarch (protoxylem outside, in roots); Endarch (protoxylem inside, in stems).",
        "Annual Ring Composition: One spring wood ring plus one autumn wood ring equals one year.",
        "Heartwood vs Sapwood: Heartwood is non-conducting, dark, durable; Sapwood conducts sap.",
        "Exam Tip: In plant anatomy viva, remember that monocot stems never undergo normal secondary growth because their vascular bundles are closed, lacking intra-fascicular cambium between xylem and phloem."
    ]
)

add_unit(
    "bsc-chm: physiology",
    [
        "Plant Water Relations and Water Potential: Diffusion, osmosis, and imbibition; Concept of water potential: thermodynamic chemical potential of water per unit volume; Water potential components: osmotic (solute) potential, pressure (turgor) potential, and matric potential; Water potential of pure water at atmospheric pressure equals zero; Addition of solutes strictly lowers water potential; Mechanism of plasmolysis and deplasmolysis.",
        "Absorption of Water and Ascent of Sap: Root hair water uptake via apoplastic (extracellular porous cell wall and intercellular spaces) and symplastic (intracellular cytoplasmic continuum via plasmodesmata) pathways; Casparian strip in endodermis blocks apoplast, forcing water across selective plasma membrane; Ascent of sap: Transpiration-Cohesion-Tension theory of Dixon and Joly: Evaporative water loss generates negative tension gradient pulled through continuous water column stabilized by high cohesive hydrogen bonding and adhesive xylem wall forces.",
        "Stomatal Physiology and Transpiration: Structure of stomatal apparatus: Guard cells with differential wall thickening and radial cellulose microfibrils surrounded by subsidiary cells; Mechanism of stomatal movement: Active proton extrusion by plasma membrane proton-ATPase generates electrical gradient driving inward potassium ion uptake and chloride/malate counter-ion accumulation; Elevated osmotic pressure causes water inflow, turgor expansion, and pore opening; Environmental factors affecting transpiration: light, atmospheric humidity, temperature, wind velocity, and carbon dioxide concentration; Guttation and hydathode structure.",
        "Mineral Nutrition and Ion Transport: Classification of essential elements into macronutrients (nitrogen, phosphorus, potassium, calcium, magnesium, sulfur) and micronutrients (iron, manganese, zinc, copper, boron, molybdenum, chlorine); Classical deficiency symptoms: chlorosis, necrosis, stunted growth, premature leaf fall; Ion uptake mechanisms: passive transport (diffusion, ion channels) and active transport (carrier proteins, proton-coupled secondary active symport and antiport).",
        "Photosynthetic Pigments and Photochemical Light Reactions: Chloroplast ultrastructure (thylakoids, grana stacks, stroma); Absorption spectrum and action spectrum; Red drop effect and Emerson enhancement effect demonstrating existence of two cooperating pigment systems: Photosystem I (reaction center P700) and Photosystem II (reaction center P680); Z-scheme non-cyclic electron transport from water to NADP+; Oxygen-evolving complex (manganese cluster photolysis of water); Cyclic photophosphorylation generating ATP without NADPH.",
        "Carbon Assimilation Dark Reactions (C3, C4, and CAM): Calvin cycle (C3 pathway) in stroma: Carboxylation of ribulose-1,5-bisphosphate (RuBP) by RuBisCO generating 3-phosphoglycerate, reduction to triose phosphates consuming ATP and NADPH, regeneration of RuBP; C4 pathway (Hatch-Slack) in plants with Kranz anatomy (mesophyll and bundle sheath cells): Primary carboxylation of phosphoenolpyruvate (PEP) by PEP carboxylase forming oxaloacetate, transport of C4 dicarboxylic acids, decarboxylation in bundle sheath elevating carbon dioxide around RuBisCO, eliminating photorespiration; Crassulacean Acid Metabolism (CAM): Nocturnal stomatal opening, nighttime carbon dioxide fixation into vacuolar malic acid, daytime decarboxylation and Calvin cycle with closed stomata to conserve water.",
        "Photorespiration (C2 Oxidative Photosynthetic Carbon Cycle): Oxygenase activity of RuBisCO at high temperatures or low carbon dioxide levels: Oxygenation of RuBP yields 3-phosphoglycerate and 2-phosphoglycolate; Coordinated salvage pathway traversing three organelles: Chloroplast (glycolate synthesis), Peroxisome (oxidation to glyoxylate and transamination to glycine), and Mitochondrion (two glycine molecules condense into serine, releasing carbon dioxide and ammonia); Consumes metabolic energy without producing ATP or NADPH.",
        "Nitrogen Metabolism and Biological Nitrogen Fixation: Biological nitrogen cycle; Symbiotic nitrogen fixation in legume root nodules (*Rhizobium*): Infection thread formation, bacteroids, nodule organogenesis, leghemoglobin acting as oxygen scavenger; Nitrogenase enzyme complex (dinitrogenase Fe-Mo protein and dinitrogenase reductase Fe protein); Reduction of atmospheric dinitrogen to ammonia requiring 16 ATP molecules per dinitrogen fixed; Ammonia assimilation via GS-GOGAT (glutamine synthetase and glutamate synthase) and glutamate dehydrogenase pathways.",
        "Plant Growth Regulators (Phytohormones): Biosynthesis, transport, physiological actions, and commercial agricultural applications of major hormones: Auxins (indole-3-acetic acid IAA: apical dominance, cell elongation, root initiation, parthenocarpy); Gibberellins (gibberellic acid GA3: stem bolting, internode elongation, seed germination via alpha-amylase synthesis, breaking dormancy); Cytokinins (kinetin, zeatin: cell division, shoot organogenesis, delay of leaf senescence by Richmond-Lang effect); Ethylene (gaseous hormone: fruit ripening, triple response, abscission); Abscisic acid (ABA: stress hormone, stomatal closure under drought stress, seed dormancy).",
        "Photoperiodism, Vernalization, and Senescence: Photoperiodic control of flowering: Classification into Short-Day Plants (SDP, require dark period exceeding critical night length), Long-Day Plants (LDP), and Day-Neutral Plants (DNP); Phytochrome pigment system: Interconvertible red light absorbing form (Pr, inactive) and far-red light absorbing form (Pfr, active form); Florigen concept (FT protein mobile flowering signal); Vernalization: Promotion of flowering by prolonged exposure to low chilling temperatures (1 to 7 degrees Celsius); Senescence and programmed cell death in plants."
    ],
    [
        "Water Potential Rule: Pure water has water potential of 0; Solute addition lowers water potential.",
        "Ascent of Sap Theory: Dixon and Joly Transpiration-Cohesion-Tension theory.",
        "Stomatal Opening Trigger: Influx of potassium ions driven by proton-ATPase pumps.",
        "Casparian Strip Barrier: Suberin band in endodermis forcing water into symplastic path.",
        "Primary C3 Carboxylation: RuBisCO catalyzes RuBP plus carbon dioxide to two molecules of 3-PGA.",
        "Primary C4 Carboxylation: PEP carboxylase fixes carbon dioxide into oxaloacetate in mesophyll cells.",
        "Kranz Anatomy Feature: Distinct wreath-like bundle sheath cells surrounding vascular bundles in C4 leaves.",
        "Nitrogenase Oxygen Sensitivity: Protected by leghemoglobin oxygen scavenger in legume nodules.",
        "Triple Response of Ethylene: Stem thickening, apical hook curvature, reduced elongation.",
        "Exam Tip: In plant physiology viva, emphasize that photorespiration is energetically wasteful because it consumes ATP and releases previously fixed carbon dioxide without generating any sugars or energy."
    ]
)
'''

content += part7

with open("scripts/build_bsc_sem2_physics_chem.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subjects 8, 9, and 10 to build_bsc_sem2_physics_chem.py.")
