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
# 7. PHYSIOLOGY & BIOCHEMISTRY (B.Sc)
# =========================================================================
add("Physiology & Biochemistry", 1, "Digestion", [
    "Digestive Tract Functional Architecture: Alimentary canal histological wall layers: Mucosa (epithelium, lamina propria, muscularis mucosae), Submucosa (Meissner's submucosal plexus controlling secretions), Muscularis externa (circular and longitudinal smooth muscle, Auerbach's myenteric plexus controlling motility), and Serosa / Adventitia.",
    "Mechanical & Enzymatic Digestion in Oral Cavity: Mastication and bolus formation; Saliva secretion (parotid, submandibular, sublingual salivary glands; 1.0-1.5 L/day; pH 6.8); Salivary alpha-amylase (ptyalin, cleaves starch alpha-1,4 bonds into maltose and dextrins), Lingual lipase, lysozyme, and secretory IgA.",
    "Gastric Digestion & Acid Secretion Mechanics: Gastric juice (pH 1.5-2.0); Parietal / Oxyntic cells secrete Hydrochloric Acid (HCl) via H+/K+ ATPase proton pump and Intrinsic Factor (essential for ileal Vitamin B12 absorption); Chief cells secrete inactive Pepsinogen (activated by HCl to endopeptidase Pepsin, optimal pH 1.8-2.0); Enterochromaffin-like cells secrete Histamine; G-cells secrete Gastrin.",
    "Pancreatic Exocrine Secretion: Alkaline pancreatic juice (pH 8.0-8.3 rich in HCO3- to neutralize acidic gastric chyme); Secreted by acinar and ductal cells; Proteolytic zymogens: Trypsinogen (activated by brush border enterokinase to active Trypsin, which autocatalytically activates chymotrypsinogen, procarboxypeptidase, and proelastase); Pancreatic amylase, Pancreatic lipase with colipase, and nucleases.",
    "Bile Secretion & Lipid Emulsification: Hepatic bile stored and concentrated in gallbladder; Bile salts (sodium glycocholate and sodium taurocholate derived from cholesterol) act as biological detergents; Emulsifies large dietary fat globules into microscopic droplets (micelles), vastly expanding surface area for pancreatic lipase.",
    "Small Intestinal Brush Border Enzymes: Enterocytes of duodenal and jejunal villi; Disaccharidases: Maltase (cleaves maltose to 2 glucose), Sucrase (sucrose to glucose + fructose), Lactase (lactose to glucose + galactose); Aminopeptidases, dipeptidases, and alkaline phosphatase.",
    "Nutrient Absorption Mechanisms: Monosaccharides: Glucose and galactose absorbed via secondary active transport with Na+ across apical membrane (SGLT-1), exit via facilitated diffusion (GLUT-2); Fructose absorbed by facilitated diffusion (GLUT-5); Amino acids absorbed via Na+-dependent symporters; Di/tripeptides via H+-dependent PepT1.",
    "Lipid Absorption & Chylomicron Synthesis: Free fatty acids and 2-monoacylglycerols diffuse passively from mixed micelles across apical membrane into enterocyte; Re-esterified to triacylglycerols in smooth ER; Packaged with apolipoprotein B-48, phospholipids, and cholesterol into Chylomicrons; Exocytosed into central lymphatic lacteals.",
    "Hormonal Regulation of Digestion: Gastrin (stimulates gastric acid secretion and mucosal growth), Cholecystokinin (CCK, stimulated by fatty acids and peptides in duodenum; stimulates gallbladder contraction and pancreatic enzyme secretion; relaxes sphincter of Oddi), and Secretin (stimulated by duodenal acid; stimulates copious bicarbonate-rich pancreatic and biliary secretion).",
    "University Examination Strategy: Explain the biochemical mechanism of gastric HCl secretion by parietal cells with proton pump details, trace the cascade of pancreatic zymogen activation by enterokinase, and describe lipid digestion and chylomicron formation."
], [
    "Gastric Proton Pump: H+/K+ ATPase in parietal cells pumps H+ into gastric lumen against huge gradient.",
    "Intrinsic Factor Source: Secreted by gastric parietal cells; essential for terminal ileal absorption of Vitamin B12.",
    "Pancreatic Zymogen Trigger: Enterokinase (enteropeptidase) on duodenal brush border activates trypsinogen to trypsin.",
    "Trypsin Cascade Role: Active trypsin cleaves and activates chymotrypsinogen, procarboxypeptidase, and proelastase.",
    "Bile Salts Detergent Function: Decreases surface tension of fat droplets, forming mixed micelles for lipase digestion.",
    "Glucose Apical Transporter: SGLT-1 (Sodium-Glucose Luminal Transporter-1, driven by Na+ gradient).",
    "Fructose Transport Mode: Facilitated diffusion across brush border via GLUT-5 transporter.",
    "Chylomicron Transport Path: Absorbed into central lymphatic lacteals of villi, bypassing hepatic portal vein.",
    "Secretin Primary Function: Stimulates pancreatic ductal cells to secrete copious alkaline bicarbonate (HCO3-).",
    "Exam Scoring Tip: Pancreatic lipase requires the protein cofactor colipase to displace inhibitory bile salts from the oil-water interface."
])

add("Physiology & Biochemistry", 2, "Respiration", [
    "Physiological Divisions of External & Internal Respiration: Pulmonary ventilation (bulk air movement) -> External respiration (alveolar gas diffusion across respiratory membrane) -> Gas transport in circulatory blood -> Internal respiration (tissue capillary systemic gas diffusion) -> Cellular respiration (mitochondrial oxidative phosphorylation).",
    "Respiratory Membrane Ultrastructure: Alveolocapillary diffusion barrier (ultra-thin thickness 0.2 to 0.5 micrometers): Alveolar surfactant fluid layer -> Alveolar Type I squamous epithelium -> Epithelial basement membrane -> Interstitial space -> Capillary basement membrane -> Capillary endothelial cell; Diffusion rate governed by Fick's law: V_gas = (A * D * Delta P) / T.",
    "Partial Pressures of Respiratory Gases: Alveolar air: pO2 = 104 mmHg, pCO2 = 40 mmHg; Deoxygenated pulmonary arterial blood: pO2 = 40 mmHg, pCO2 = 46 mmHg; Diffusion gradient drives rapid O2 uptake and CO2 release within 0.25 seconds (one-third of capillary transit time).",
    "Hemoglobin Oxygen Binding Cooperativity: Tetrameric allosteric metalloprotein (two alpha and two beta chains, each containing iron-protoporphyrin IX heme); Cooperative oxygen binding yields sigmoidal Oxygen-Hemoglobin Dissociation Curve (OHDC); Tense (T) deoxygenated state converts to Relaxed (R) oxygenated state upon binding initial O2 molecule.",
    "Factors Modulating Hemoglobin Affinity (Bohr Effect): P50 value (pO2 required for 50 percent hemoglobin oxygen saturation, normal 26.6 mmHg); Right-shift of curve (increased P50, lower O2 affinity, facilitated tissue oxygen unloading) caused by: (1) Decreased pH / increased H+; (2) Increased pCO2; (3) Elevated temperature; (4) Increased 2,3-bisphosphoglycerate (2,3-BPG).",
    "Carbon Dioxide Transport Modalities: Transported in blood via three mechanisms: (1) Dissolved CO2 in plasma (7 percent); (2) Carbamino compounds (23 percent, bound to terminal amino groups of deoxygenated hemoglobin); (3) Bicarbonate ions HCO3- in plasma (70 percent, synthesized in red blood cells by Carbonic Anhydrase: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-).",
    "Chloride Shift (Hamburger Phenomenon) & Haldane Effect: Bicarbonate (HCO3-) generated in erythrocytes exits into plasma via Band 3 anion exchanger in exchange for chloride (Cl-) influx; Haldane effect: Deoxygenation of hemoglobin in tissue capillaries increases its affinity for CO2 and H+ buffering.",
    "Neural Control of Breathing: Medullary respiratory rhythmicity center: Dorsal Respiratory Group (DRG, inspiratory neurons generating baseline quiet breathing rhythm via phrenic nerve to diaphragm) and Ventral Respiratory Group (VRG, active during forced expiration); Pontine centers: Pneumotaxic center (switches off inspiration, limits tidal volume) and Apneustic center.",
    "Chemical Regulation of Respiration: Central chemoreceptors (located on ventrolateral surface of medulla oblongata, sense H+ ions in CSF generated by dissolved CO2 crossing blood-brain barrier; primary driver of minute ventilation) vs Peripheral chemoreceptors (carotid and aortic bodies, sense severe arterial hypoxemia pO2 < 60 mmHg, hypercapnia, and acidosis).",
    "University Examination Strategy: Draw and label the sigmoidal oxygen-hemoglobin dissociation curve showing factors causing right and left shifts (Bohr effect), explain the Carbonic Anhydrase reaction and Chloride Shift, and describe the central vs peripheral chemoreceptor reflexes."
], [
    "Fick's Respiratory Diffusion Law: Gas Diffusion Rate = (Surface Area * Diffusion Constant * Pressure Gradient) / Membrane Thickness.",
    "Normal Hemoglobin P50 Value: 26.6 mmHg (partial pressure of O2 at 50 percent saturation).",
    "Bohr Effect Physiological Consequence: Promotes oxygen unloading at metabolically active, acidic working tissues.",
    "Carbonic Anhydrase Catalyzed Step: Reversible hydration of carbon dioxide: CO2 + H2O <-> H2CO3.",
    "Chloride Shift Carrier: Band 3 anion exchange protein in red blood cell membrane swapping HCO3- for Cl-.",
    "Haldane Effect Principle: Deoxygenated venous hemoglobin binds significantly more CO2 than oxyhemoglobin.",
    "Central Chemoreceptors True Trigger: Hydrogen ion (H+) concentration in cerebral extracellular fluid / CSF.",
    "Peripheral Chemoreceptors Oxygen Threshold: Stimulated vigorously only when arterial pO2 drops below 60 mmHg.",
    "Pneumotaxic Center Action: Antagonizes apneustic center to shorten inspiration and regulate respiratory frequency.",
    "Exam Scoring Tip: Carbon monoxide (CO) binds to hemoglobin with an affinity 200 to 250 times greater than oxygen, forming carboxyhemoglobin and shifting the remaining curve drastically to the left."
])

add("Physiology & Biochemistry", 3, "Circulation", [
    "Blood Composition & Physical Properties: Fluid connective tissue; Whole blood comprises 55 percent liquid Plasma and 45 percent Formed elements (Erythrocytes, Leukocytes, Platelets / Thrombocytes); Hematocrit / Packed Cell Volume (PCV, 40-45 percent in females, 45-50 percent in males); Plasma proteins: Albumin (colloid oncotic pressure 25 mmHg), Globulins, and Fibrinogen.",
    "Erythropoiesis & Red Blood Cell Lifespan: Production of biconcave, anucleated erythrocytes in red bone marrow; Regulated by hormone Erythropoietin (EPO, secreted by renal peritubular interstitial cells in response to hypoxia); Requires Vitamin B12, folic acid, and iron; Normal lifespan 120 days; Senescent RBCs phagocytosed in spleen and liver reticuloendothelial system.",
    "Leukocyte Classifications & Defense Roles: Granulocytes: Neutrophils (60-70 percent, primary acute phagocytes, multi-lobed nucleus), Eosinophils (1-4 percent, anti-parasitic and allergic response), Basophils (0.5-1 percent, release histamine and heparin); Agranulocytes: Lymphocytes (20-30 percent, B cells, T cells, NK cells) and Monocytes (3-8 percent, transform into tissue macrophages).",
    "Hemostasis & Blood Coagulation Cascade: Three sequential phases: (1) Vascular spasm (immediate vasoconstriction); (2) Platelet plug formation (von Willebrand factor mediates adhesion to exposed subendothelial collagen, ADP and thromboxane A2 trigger aggregation); (3) Blood coagulation cascade yielding insoluble fibrin meshwork.",
    "Intrinsic, Extrinsic & Common Clotting Pathways: Extrinsic pathway (rapid, initiated by Tissue Factor / Thromboplastin Factor III + Factor VIIa); Intrinsic pathway (contact activation of Factor XII by collagen, followed by XI, IX, VIII); Common pathway: Factor X activated to Xa (converts Prothrombin Factor II to Thrombin IIa, which cleaves soluble Fibrinogen Factor I into insoluble Fibrin Ia; Factor XIIIa cross-links clot).",
    "Fibrinolysis & Clot Dissolution: Plasminogen incorporated into fibrin clot during coagulation; Tissue Plasminogen Activator (tPA) converts inactive plasminogen into active serine protease Plasmin; Plasmin digests fibrin mesh into soluble Fibrin Degradation Products (FDPs, D-dimer marker).",
    "Human Blood Group Systems (ABO & Rh): Landsteiner's rule: Individual possesses matching agglutinogen on RBC surface and reciprocal agglutinin antibodies in serum; Type A (A antigen, anti-B antibody), Type B (B antigen, anti-A), Type AB (both antigens, universal recipient), Type O (neither antigen, universal donor); Rh system: D-antigen present (Rh+) or absent (Rh-).",
    "Erythroblastosis Fetalis (Hemolytic Disease of Newborn): Develops when Rh-negative mother carries Rh-positive fetus; Fetal Rh+ RBCs enter maternal circulation during initial delivery, immunizing mother to produce IgG anti-D antibodies; Subsequent Rh+ pregnancy results in transplacental IgG passage, causing massive fetal hemolysis, severe anemia, and hydrops fetalis; Prevented by administering anti-D immunoglobulin (RhoGAM).",
    "Lymphatic System & Interstitial Fluid Circulation: Lymph capillaries, vessels, and lymph nodes; Drains excess interstitial fluid (2-3 L/day) filtered across capillaries back into venous circulation via thoracic duct and right lymphatic duct; Transports dietary chylomicron lipids from intestinal lacteals; Immune surveillance in lymph nodes.",
    "University Examination Strategy: Detail the enzymatic cascade of the blood coagulation common pathway from Factor X to cross-linked fibrin, explain the immunological mechanism and clinical prevention of Erythroblastosis Fetalis, and summarize ABO blood group cross-matching."
], [
    "Normal Blood Hematocrit Range: 42 to 52 percent in healthy males, 37 to 47 percent in healthy females.",
    "Erythropoietin Production Site: Interstitial fibroblasts in renal cortex responding to cellular hypoxia.",
    "Red Blood Cell Mean Lifespan: Strictly 120 days in peripheral circulation before splenic clearance.",
    "Platelet Plug Primary Activators: Adenosine diphosphate (ADP) and Thromboxane A2 (TXA2).",
    "Coagulation Factor Calcium: Factor IV represents ionic Calcium (Ca2+), required at nearly all enzymatic steps.",
    "Common Pathway Initiation: Activation of Factor X to Factor Xa by tenase complexes.",
    "Thrombin Dual Enzymatic Action: Cleaves fibrinogen into fibrin monomers and activates Factor XIII transglutaminase.",
    "Fibrinolytic Enzyme: Plasmin degrades cross-linked fibrin polymer into soluble D-dimers.",
    "RhoGAM Prophylaxis Timing: Administered to Rh-negative mothers at 28 weeks gestation and within 72 hours of delivering Rh+ infant.",
    "Exam Scoring Tip: The intrinsic pathway is clinically monitored using the Activated Partial Thromboplastin Time (aPTT), whereas the extrinsic pathway is evaluated using the Prothrombin Time (PT / INR)."
])

add("Physiology & Biochemistry", 4, "Excretion", [
    "Excretory System Functional Overview: Maintenance of water-electrolyte balance, osmolarity, acid-base homeostasis, and nitrogenous waste elimination; Paired kidneys, ureters, urinary bladder, and urethra; Renal blood flow receives 20-25 percent of total cardiac output (approx 1200 mL/min).",
    "Nitrogenous Excretion Modes Across Animal Kingdom: Ammonotelism (excretion of highly toxic ammonia requiring immense water dilution, aquatic invertebrates, teleost fish); Ureotelism (conversion of ammonia to less toxic urea in liver via urea cycle, mammals, amphibians, cartilaginous fish); Uricotelism (conversion to insoluble uric acid paste conserving water, birds, reptiles, insects).",
    "Urea Cycle (Ornithine Cycle / Krebs-Henseleit Cycle): Five-step hepatic metabolic pathway converting toxic ammonium ions and bicarbonate into non-toxic urea: (1) Carbamoyl phosphate synthetase I (mitochondrial, rate-limiting, requires N-acetylglutamate); (2) Ornithine transcarbamoylase (forms citrulline); (3) Argininosuccinate synthetase; (4) Argininosuccinase; (5) Arginase (cytosolic, cleaves arginine to urea and regenerates ornithine).",
    "Tubular Transport in the Proximal Convoluted Tubule: Obligatory reabsorption of 65 percent of filtered Na+, K+, Cl-, and water; Secondary active transport via apical Na+/glucose cotransporter (SGLT-2) and Na+/amino acid symporters; Na+/H+ antiporter (NHE3) drives bicarbonate reabsorption via carbonic anhydrase; Secretion of organic acids and bases (urate, creatinine, penicillin).",
    "Concentration of Urine & Countercurrent Mechanism: Juxtamedullary nephrons with long loops of Henle penetrating deep into renal medulla; Countercurrent multiplier (loop of Henle) establishes hypertonic interstitial gradient; Countercurrent exchanger (vasa recta blood vessels) passively preserves medullary osmotic gradient without washing away solutes; Urea recycling from medullary collecting duct.",
    "Distal Convoluted Tubule & Collecting Duct Processing: Facultative water and electrolyte reabsorption; Early DCT: Na+-Cl- cotransporter (inhibited by thiazide diuretics); Late DCT and collecting duct: Principal cells (reabsorb Na+ through ENaC channels and secrete K+ under Aldosterone control; reabsorb water via aquaporin-2 under ADH control); Intercalated cells (Type A secrete H+ to combat acidosis; Type B secrete HCO3-).",
    "Acid-Base Balance Regulation by Kidneys: Long-term arterial pH compensation; Reabsorption of filtered bicarbonate in PCT; Generation of new bicarbonate via excretion of titratable acids (dihydrogen phosphate H2PO4-) and excretion of ammonium ions (NH4+ derived from glutamine deamination in tubular cells).",
    "Renin-Angiotensin-Aldosterone System (RAAS): Juxtaglomerular apparatus (macula densa senses low tubular NaCl, juxtaglomerular granular cells release Renin); Renin cleaves hepatic angiotensinogen to Angiotensin I; Angiotensin Converting Enzyme (ACE) in pulmonary endothelium converts it to Angiotensin II (potent systemic vasoconstrictor, stimulates thirst, and triggers adrenal cortex aldosterone release).",
    "Micturition Reflex & Neurological Bladder Control: Bladder wall detrusor smooth muscle, internal urethral sphincter (involuntary, sympathetic L1-L2 relaxation and parasympathetic S2-S4 contraction), and external urethral sphincter (voluntary somatic pudendal nerve S2-S4 control); Bladder stretch receptors initiate autonomic micturition reflex when volume reaches 300-400 mL, modulated by pontine micturition center.",
    "University Examination Strategy: Detail the enzymatic steps and compartmentalization (mitochondria vs cytosol) of the Urea Cycle, describe the Countercurrent Multiplier and Exchanger in the Loop of Henle and Vasa Recta, and outline the RAAS pathway."
], [
    "Urea Cycle Rate-Limiting Enzyme: Carbamoyl Phosphate Synthetase I (CPS-I, activated obligatorily by N-acetylglutamate).",
    "Urea Synthesis Organ Location: Hepatocytes in liver (first two steps mitochondrial, remaining three steps cytosolic).",
    "Medullary Interstitial Hypertonicity: Reaches maximum concentration of 1200 mOsm/L at the hairpin loop tip.",
    "Vasa Recta Passive Exchange: Functions as countercurrent exchanger to maintain medullary osmotic gradient without dissipation.",
    "Aldosterone Target Cells: Principal cells of late distal convoluted tubule and collecting duct.",
    "Aldosterone Transport Action: Upregulates apical ENaC sodium channels and basolateral Na+/K+ pumps.",
    "Renal Bicarbonate Synthesis: Glutamine metabolism in proximal tubules yields two NH4+ ions and two new HCO3- molecules.",
    "Thiazide Diuretic Site: Inhibits Na+-Cl- cotransporter in the early distal convoluted tubule.",
    "Juxtaglomerular Cell Stimulus: Decreased renal perfusion pressure, sympathetic beta-1 activation, or low NaCl delivery.",
    "Exam Scoring Tip: The descending limb of the loop of Henle is permeable only to water, while the thick ascending limb is permeable only to solutes (Na+, K+, Cl-), which is the physical basis of the countercurrent multiplier."
])

add("Physiology & Biochemistry", 5, "Enzymes & Metabolism", [
    "Enzyme Thermodynamics & Activation Energy: Enzymes accelerate biochemical reaction rates without shifting the final equilibrium constant K_eq; Catalytic acceleration achieved by lowering the standard Gibbs free energy of activation (Delta G double dagger); Transition state theory.",
    "Active Site Chemical Catalysis Mechanisms: Nucleophilic and electrophilic amino acid side chains at catalytic cleft: General acid-base catalysis (imidazole group of Histidine acting as reversible proton donor/acceptor at neutral pH), Covalent catalysis (nucleophilic attack forming transient covalent intermediate, e.g. Serine in chymotrypsin catalytic triad Ser-His-Asp), and Metal ion catalysis (stabilizing negative charges, e.g. Zn2+ in carbonic anhydrase).",
    "Enzyme Kinetics & Briggs-Haldane Steady-State Model: Formation of enzyme-substrate complex: E + S <-> ES -> E + P; Assumption that [ES] reaches rapid steady-state equilibrium (d[ES]/dt = 0); Derivation of Michaelis-Menten hyperbolic rate curve: v0 = (Vmax * [S]) / (Km + [S]).",
    "Diagnostic Lineweaver-Burk Kinetic Parameters: Reciprocal transformation yielding linear diagnostic plot: 1/v0 = (Km / Vmax) * (1 / [S]) + (1 / Vmax); Km represents substrate affinity; Vmax reflects maximum catalytic capacity at saturating substrate; Direct evaluation of competitive, non-competitive, and uncompetitive inhibitor mechanisms.",
    "Allosteric Enzyme Regulation & Feedback Control: Multi-subunit regulatory enzymes displaying sigmoidal kinetics; Cooperativity mediated by positive and negative allosteric effectors; Feedback end-product inhibition (e.g. CTP allosterically inhibits aspartate transcarbamoylase ATCase in pyrimidine synthesis); Reversible covalent modification (phosphorylation by protein kinases, dephosphorylation by phosphatases).",
    "Integration of Carbohydrate, Lipid & Protein Metabolism: Central metabolic hub Acetyl-CoA; Glucose converted to pyruvate via glycolysis, entering mitochondria as acetyl-CoA; Fatty acids degraded via beta-oxidation to acetyl-CoA; Glucogenic and ketogenic amino acid carbon skeletons entering TCA cycle intermediates; Amphibolic nature of Citric Acid Cycle.",
    "Glycogen Metabolism & Reciprocal Hormonal Regulation: Glycogenesis (glycogen synthase builds alpha-1,4 chains, branching enzyme adds alpha-1,6 branches) vs Glycogenolysis (glycogen phosphorylase cleaves glucose-1-phosphate using Pi, debranching enzyme); Reciprocal phosphorylation control: Glucagon and Epinephrine activate protein kinase A, activating phosphorylase while inactivating glycogen synthase; Insulin drives dephosphorylation, promoting glycogen storage.",
    "Lipid Metabolism & Ketogenesis: Lipolysis in adipose tissue (hormone-sensitive lipase releases free fatty acids); Liver mitochondrial ketogenesis occurs during prolonged fasting or untreated diabetes mellitus: Excess acetyl-CoA converted to ketone bodies (Acetoacetate, Beta-hydroxybutyrate, and Acetone); Ketone bodies utilized as fuel by heart, skeletal muscle, and brain.",
    "Amino Acid Catabolism & Transamination: Transamination: Transfer of amino group from amino acid to alpha-ketoglutarate, forming L-glutamate and corresponding alpha-keto acid; Catalyzed by aminotransferases (ALT, AST) requiring Pyridoxal Phosphate (PLP / Vitamin B6 cofactor); Oxidative deamination of glutamate by mitochondrial glutamate dehydrogenase releases free ammonium for urea cycle.",
    "University Examination Strategy: Formulate the catalytic triad mechanism of chymotrypsin (Ser-His-Asp), draw the reciprocal regulation cascade of glycogen synthase vs glycogen phosphorylase, and detail the biochemical pathway of ketogenesis from acetyl-CoA."
], [
    "Chymotrypsin Catalytic Triad: Serine 195, Histidine 57, and Aspartate 102 working cooperatively.",
    "Histidine Buffering Residue: pKa of imidazole ring is approximately 6.0, allowing reversible proton donation and acceptance at pH 7.4.",
    "Michaelis-Menten Steady State: Assumes rate of ES formation equals rate of ES breakdown: k1[E][S] = (k_minus1 + k2)[ES].",
    "Aspartate Transcarbamoylase Regulation: CTP acts as negative allosteric feedback inhibitor; ATP acts as positive activator.",
    "Glycogen Phosphorylase Activation: Phosphorylated by phosphorylase kinase to active 'a' form during fasting/exercise.",
    "Glycogen Synthase Inactivation: Phosphorylation by Protein Kinase A and GSK-3 converts it to inactive 'b' form.",
    "Ketone Bodies Three Species: Acetoacetate, Beta-hydroxybutyrate, and volatile Acetone.",
    "Transamination Essential Coenzyme: Pyridoxal Phosphate (PLP), active coenzyme form of Vitamin B6.",
    "Hormone-Sensitive Lipase Trigger: Activated by cAMP-dependent PKA in response to epinephrine and glucagon.",
    "Exam Scoring Tip: The brain cannot utilize circulating free fatty acids because they do not cross the blood-brain barrier; during starvation, the brain adapts to utilize water-soluble ketone bodies for up to 70 percent of its energy."
])

# Save updated dataset
with open('scripts/sem3_life_complete_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
