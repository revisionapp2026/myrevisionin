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
# HUMAN ANATOMY & PHYSIOLOGY (Continued)
# =========================================================================
add("Human Anatomy & Physiology", 3, "Cardiovascular", [
    "Gross Anatomy of the Human Heart: Four-chambered muscular organ located in middle mediastinum; Atria (thin-walled receiving chambers) and Ventricles (thick-walled pumping chambers; left ventricular myocardium 3x thicker than right); Interventricular and interatrial septa; Pericardial sac (fibrous and serous pericardium).",
    "Heart Valves & Unidirectional Hemodynamics: Atrioventricular (AV) valves: Tricuspid valve (right side) and Bicuspid / Mitral valve (left side), anchored by chordae tendineae to papillary muscles to prevent systolic prolapse; Semilunar valves: Aortic and Pulmonary valves preventing diastolic regurgitation.",
    "Cardiac Conduction System & Pacemaker Potential: Sinoatrial (SA) node (primary intrinsic pacemaker, fires 60-100 action potentials per minute due to spontaneous funny current If sodium influx), Atrioventricular (AV) node (introduces crucial 0.1-second delay for ventricular filling), Bundle of His, Left/Right bundle branches, and Purkinje fibers.",
    "Cardiac Action Potential Phases: Ventricular myocyte fast response: Phase 0 (rapid depolarization via fast voltage-gated Na+ channels), Phase 1 (transient initial repolarization via Ito K+ channels), Phase 2 (prolonged plateau phase driven by L-type Ca2+ channel influx balancing K+ efflux), Phase 3 (rapid repolarization via delayed rectifier K+ channels), Phase 4 (resting potential).",
    "Cardiac Cycle Phases & Pressure-Volume Relationships: Ventricular systole (isovolumetric contraction followed by rapid and reduced ejection) and Ventricular diastole (isovolumetric relaxation, rapid filling, diastasis, and atrial kick); End-Diastolic Volume (EDV approx 120 mL), End-Systolic Volume (ESV approx 50 mL); Stroke Volume SV = EDV - ESV (approx 70 mL).",
    "Cardiac Output (CO) & Regulatory Determinants: Cardiac Output CO = Heart Rate (HR) * Stroke Volume (SV); Normal resting CO is 5.0 Liters per minute; Determinants: Preload (end-diastolic wall stress, governed by Frank-Starling law), Afterload (arterial impedance resisting ejection), and Myocardial Contractility (inotropic state mediated by sympathetic beta-1 adrenergic stimulation).",
    "Electrocardiogram (ECG / EKG) Waveforms: P wave (atrial depolarization), PR interval (AV conduction transit time, normal 0.12-0.20 seconds), QRS complex (ventricular depolarization, normal <0.10 seconds), ST segment (plateau phase of ventricular action potential), and T wave (ventricular repolarization).",
    "Hemodynamics & Poiseuille Flow: Blood flow Q = Delta P / R; Vascular resistance R = (8 * eta * L) / (pi * r to the fourth power); Arterioles are primary resistance vessels (small changes in radius r alter resistance by fourth power); Systemic vascular resistance and mean arterial pressure MAP = Diastolic BP + 1/3 (Pulse Pressure).",
    "Baroreceptor Reflex & Blood Pressure Homeostasis: High-pressure arterial baroreceptors in carotid sinus (cranial nerve IX glossopharyngeal) and aortic arch (cranial nerve X vagus); Acute pressure drop decreases baroreceptor firing, disinhibiting medullary vasomotor center, increasing sympathetic tone and heart rate while decreasing parasympathetic vagal output.",
    "University Examination Strategy: Draw a Wiggers diagram correlating left ventricular pressure, volume, ECG, and heart sounds throughout the cardiac cycle, derive the cardiac output equation, and describe the five phases of the ventricular action potential."
], [
    "Stroke Volume Formula: SV = EDV - ESV (approximately 70 mL at rest).",
    "Cardiac Output Formula: CO = Heart Rate * Stroke Volume (normal resting 5 L/min).",
    "Ejection Fraction Formula: EF = (SV / EDV) * 100 percent (normal 55 to 70 percent).",
    "Frank-Starling Law: Force of ventricular contraction is proportional to initial resting myocardial fiber length (preload).",
    "Mean Arterial Pressure: MAP = Diastolic Blood Pressure + 1/3 (Systolic BP - Diastolic BP).",
    "PR Interval Clinical Range: 0.12 to 0.20 seconds (prolonged PR indicates first-degree AV block).",
    "QRS Complex Duration: Less than 0.10 to 0.12 seconds (reflects rapid His-Purkinje conduction).",
    "First Heart Sound (S1): Caused by turbulence during closure of tricuspid and mitral AV valves at onset of systole.",
    "Second Heart Sound (S2): Caused by closure of aortic and pulmonary semilunar valves at onset of diastole.",
    "Exam Scoring Tip: The long plateau phase (Phase 2) of the cardiac action potential creates a prolonged refractory period, preventing tetanic contraction in cardiac muscle."
])

add("Human Anatomy & Physiology", 4, "Nervous System", [
    "Structural & Functional Divisions of the Nervous System: Central Nervous System (CNS: brain and spinal cord) vs Peripheral Nervous System (PNS: 12 pairs of cranial nerves, 31 pairs of spinal nerves); Functional division into Somatic (voluntary sensory and motor) and Autonomic (involuntary visceral).",
    "Resting Membrane Potential & Action Potential Genesis: Resting potential maintained by Na+/K+ ATPase and potassium leak channels (-70 mV inside relative to outside); Threshold depolarization (-55 mV) triggers all-or-none opening of voltage-gated Na+ channels (depolarization up to +30 mV); Inactivation of Na+ channels and opening of voltage-gated K+ channels drives repolarization.",
    "Saltatory Conduction in Myelinated Axons: Myelin sheath acts as electrical insulator; Voltage-gated Na+ channels concentrated densely at unmyelinated Nodes of Ranvier; Action potential jumps from node to node (saltatory propagation); Increases nerve conduction velocity up to 120 meters per second compared to 1 meter per second in unmyelinated C fibers.",
    "Chemical Synaptic Transmission: Action potential arrives at presynaptic terminal, triggering voltage-gated Ca2+ channel opening; Ca2+ influx drives SNARE-mediated fusion of neurotransmitter vesicles with presynaptic membrane; Exocytosis into synaptic cleft; Neurotransmitter binds post-synaptic receptors generating Excitatory (EPSP) or Inhibitory Post-Synaptic Potentials (IPSP).",
    "Neurotransmitters & Receptor Mechanisms: Acetylcholine (neuromuscular junction, cholinergic receptors: nicotinic ionotropic and muscarinic metabotropic), Biogenic amines (norepinephrine, dopamine, serotonin), Amino acids (Glutamate: primary excitatory; GABA and Glycine: primary inhibitory chloride channel activators).",
    "Gross Anatomy of the Brain: Cerebrum (frontal, parietal, temporal, and occipital lobes; cerebral cortex; primary motor and somatosensory cortices), Diencephalon (thalamus sensory relay, hypothalamus neuroendocrine control), Brainstem (midbrain, pons, medulla oblongata cardiac/respiratory centers), and Cerebellum (motor coordination, posture, balance).",
    "Spinal Cord Anatomy & Reflex Arc: Central H-shaped gray matter (dorsal sensory horns, ventral motor horns) surrounded by ascending sensory and descending motor white matter columns; Monosynaptic stretch reflex arc (receptor muscle spindle -> afferent sensory neuron -> monosynaptic connection in ventral horn -> efferent alpha motor neuron -> effector skeletal muscle).",
    "Autonomic Nervous System (Sympathetic vs Parasympathetic): Sympathetic division (thoracolumbar outflow T1-L2, short preganglionic and long postganglionic fibers, fight-or-flight response: tachycardia, bronchodilation, pupil mydriasis) vs Parasympathetic division (craniosacral outflow CN III, VII, IX, X and S2-S4, long preganglionic and short postganglionic, rest-and-digest).",
    "Meninges & Cerebrospinal Fluid (CSF) Dynamics: Three protective meningeal membranes: Dura mater, Arachnoid mater, and Pia mater; Subarachnoid space houses CSF; Produced by choroid plexuses in lateral, third, and fourth cerebral ventricles (approx 500 mL per day); Absorbed into superior sagittal venous sinus via arachnoid villi.",
    "University Examination Strategy: Draw a detailed diagram of a multipolar neuron labeling myelin sheath and Nodes of Ranvier, trace the chemical synaptic transmission cascade, and contrast sympathetic vs parasympathetic divisions in a functional table."
], [
    "Neuronal Threshold Potential: Approximately -55 mV required to trigger explosive regenerative all-or-none spike.",
    "Absolute Refractory Period: State where voltage-gated Na+ channels are inactivated; impossible to fire second action potential.",
    "Saltatory Conduction Speed: Reaches 70 to 120 meters per second in large myelinated A-alpha motor fibers.",
    "Neurotransmitter Release Trigger: Intracellular influx of calcium (Ca2+) through voltage-gated channels at axon terminal.",
    "Primary Excitatory Neurotransmitter: Glutamate (acts on AMPA and NMDA ionotropic receptors).",
    "Primary Inhibitory Neurotransmitter: GABA (Gamma-Aminobutyric Acid, hyperpolarizes post-synaptic membrane via Cl- influx).",
    "CSF Daily Production: Approximately 500 mL per day with constant circulating volume of 150 mL.",
    "Blood-Brain Barrier (BBB) Anatomical Core: Continuous capillary endothelial tight junctions surrounded by astrocyte end-feet.",
    "Vagus Nerve (Cranial Nerve X): Provides major parasympathetic innervation to heart, bronchi, and gastrointestinal tract.",
    "Exam Scoring Tip: Postganglionic sympathetic neurons release norepinephrine onto adrenergic receptors, except at sweat glands where they release acetylcholine onto muscarinic receptors."
])

add("Human Anatomy & Physiology", 5, "Respiratory & Renal", [
    "Functional Anatomy of the Respiratory Tract: Conducting zone (nasal cavity, pharynx, larynx, trachea with C-shaped cartilage rings, bronchi, terminal bronchioles) vs Respiratory zone (respiratory bronchioles, alveolar ducts, alveoli for gas exchange); Mucociliary escalator.",
    "Mechanics of Pulmonary Ventilation: Inhalation (active, diaphragm contracts and flattens, external intercostal muscles elevate ribs, intrapulmonic pressure drops below atmospheric, air flows in according to Boyle's law); Exhalation (passive at rest, elastic recoil of lung parenchyma; forced expiration uses internal intercostals and abdominal muscles).",
    "Surfactant & Alveolar Surface Tension: Laplace's law for spherical alveoli: P = 2T / r; Pulmonary surfactant (secreted by alveolar Type II pneumocytes, rich in dipalmitoylphosphatidylcholine DPPC); Reduces surface tension in smaller alveoli, preventing alveolar collapse (atelectasis) and reducing work of breathing.",
    "Pulmonary Volumes & Capacities: Tidal Volume (TV approx 500 mL), Inspiratory Reserve Volume (IRV 3000 mL), Expiratory Reserve Volume (ERV 1100 mL), Residual Volume (RV 1200 mL, cannot be exhaled); Vital Capacity VC = TV + IRV + ERV (approx 4600 mL); Total Lung Capacity TLC = VC + RV (approx 5800 mL).",
    "Gas Transport in Blood: Oxygen transport: 98.5 percent bound to hemoglobin as oxyhemoglobin, 1.5 percent dissolved in plasma; Sigmoidal oxygen-hemoglobin dissociation curve; Bohr effect: Right-shift (enhanced O2 unloading) caused by increased CO2, lower pH, elevated temperature, and 2,3-DPG; Carbon dioxide transport: 70 percent as bicarbonate ion, 23 percent carbaminohemoglobin, 7 percent dissolved.",
    "Functional Anatomy of the Kidney & Nephron: Renal cortex and renal medulla (pyramids); Nephron (functional unit, 1 million per kidney): Glomerulus and Bowman's capsule (renal corpuscle), Proximal Convoluted Tubule (PCT), Loop of Henle (descending and ascending limbs), Distal Convoluted Tubule (DCT), and Collecting Duct.",
    "Glomerular Filtration Mechanics: Glomerular Filtration Rate (GFR approx 125 mL/min or 180 Liters/day); Net Ultrafiltration Pressure NFP = Pgc - (Pbs + Pgc_pi); Pgc is glomerular capillary hydrostatic pressure (55 mmHg), Pbs is Bowman space hydrostatic pressure (15 mmHg), Pgc_pi is glomerular oncotic pressure (30 mmHg); NFP = 55 - (15 + 30) = 10 mmHg.",
    "Tubular Reabsorption & Countercurrent Multiplication: Proximal tubule reabsorbs 65 percent of filtered water, Na+, and 100 percent of glucose and amino acids; Descending limb of Henle is permeable to water but impermeable to NaCl; Thick ascending limb actively pumps Na+-K+-2Cl- without water permeability; Establishes hyperosmotic corticomedullary interstitial gradient (up to 1200 mOsm/L).",
    "Hormonal Regulation of Renal Function: Renin-Angiotensin-Aldosterone System (RAAS, juxtaglomerular apparatus releases renin in response to low renal perfusion, converting angiotensinogen to angiotensin I, cleaved to angiotensin II by ACE; Aldosterone promotes Na+ reabsorption and K+ excretion in DCT); Antidiuretic Hormone (ADH / Vasopressin, inserts aquaporin-2 channels in collecting duct to concentrate urine).",
    "University Examination Strategy: Draw the complete nephron showing tubular transport mechanisms in each segment, explain the Countercurrent Multiplier system in the Loop of Henle, and calculate Net Glomerular Ultrafiltration Pressure."
], [
    "Net Glomerular Filtration Pressure: NFP = Pgc - Pbs - Oncotic Pressure = 55 - 15 - 30 = 10 mmHg.",
    "Normal Glomerular Filtration Rate: Approximately 125 mL per minute (180 Liters per day in adult).",
    "Laplace Alveolar Formula: P = 2T / r (surfactant lowers T as radius r decreases, equalizing pressure).",
    "Type II Alveolar Cells Function: Synthesize and secrete pulmonary surfactant (DPPC).",
    "Vital Capacity Formula: VC = TV + IRV + ERV (approximately 4.5 to 5.0 Liters).",
    "Bohr Effect Triggers: Low pH, high PaCO2, elevated temperature, and high 2,3-DPG shift oxygen dissociation curve right.",
    "Chloride Shift (Hamburger Phenomenon): In red blood cells, HCO3- exits to plasma in exchange for Cl- influx.",
    "PCT Reabsorption Share: Reabsorbs 65 percent of filtered water and electrolytes, and 100 percent of glucose.",
    "Thick Ascending Limb Transporter: Na+-K+-2Cl- cotransporter (inhibited by loop diuretics like furosemide).",
    "Exam Scoring Tip: Antidiuretic hormone (ADH) acts exclusively on principal cells of the collecting duct to insert aquaporin-2 water channels, producing concentrated urine."
])

# =========================================================================
# 3. MICROBIOLOGY (B.Tech)
# =========================================================================
add("Microbiology", 1, "Microbial Basics", [
    "Historical Milestones in Microbiology: Antonie van Leeuwenhoek (first observation of living microorganisms / animalcules using single-lens microscope); Louis Pasteur (disproved spontaneous generation via swan-neck flask experiment, pasteurization, rabies vaccine); Robert Koch (germ theory of disease, Koch's postulates, solid agar media culturing).",
    "Koch's Postulates: (1) The suspected pathogen must be present in every case of the disease and absent from healthy individuals; (2) The pathogen must be isolated and grown in pure culture; (3) The cultured pathogen must cause the disease when inoculated into healthy susceptible host; (4) The pathogen must be re-isolated from the experimentally diseased host.",
    "Microbial Taxonomy & Three-Domain Tree of Life: Carl Woese 16S/18S ribosomal RNA sequence phylogenetics; Three domains: Bacteria (prokaryotic, peptidoglycan cell walls, ester-linked lipids), Archaea (prokaryotic, ether-linked branched isoprenoid lipids, extremophiles, lack peptidoglycan), and Eukarya (eukaryotic, membrane-bound nucleus).",
    "Microscopy Principles & Resolution Limit: Abbe's diffraction limit of resolution: d = lambda / (2 * NA), where lambda is wavelength and NA = n * sin(alpha) is numerical aperture; Brightfield, Darkfield, Phase-contrast (converts refractive index shifts into amplitude contrast in living unstained cells), Fluorescence, and Confocal laser scanning microscopy.",
    "Electron Microscopy Modalities: Transmission Electron Microscopy (TEM, uses accelerated electron beam, resolution <0.2 nanometers, internal cellular ultrastructure) vs Scanning Electron Microscopy (SEM, secondary electron emission reveals 3D external surface topography).",
    "Staining Techniques in Bacteriology: Simple staining (methylene blue, crystal violet); Differential staining: Gram stain (differentiates Gram-positive purple cells from Gram-negative pink cells based on cell wall peptidoglycan thickness) and Acid-fast stain (Ziehl-Neelsen, identifies Mycobacterium tuberculosis having waxy mycolic acid walls).",
    "Microbial Nutrition & Culture Media: Nutritional categories: Photoautotrophs, Chemoautotrophs, Photoheterotrophs, and Chemoheterotrophs; Culture media: Chemically defined synthetic media vs Complex nutrient media; Selective media (inhibits unwanted species, e.g. MacConkey agar for Gram-negative enteric bacilli) and Differential media (distinguishes metabolic phenotypes).",
    "Pure Culture Isolation & Preservation: Streak plate method, Pour plate, and Spread plate techniques for single colony isolation; Long-term microbial preservation: Cryopreservation in liquid nitrogen at -196 degrees Celsius with glycerol cryoprotectant, and Lyophilization (freeze-drying under vacuum).",
    "Sterilization vs Disinfection: Sterilization (complete elimination of all viable microorganisms including bacterial endospores); Physical sterilization: Autoclaving (saturated steam under pressure: 121 degrees Celsius at 15 psi for 15-20 minutes, kills Geobacillus stearothermophilus spores), Dry heat oven (160-170 degrees Celsius for 2 hours), Membrane filtration (0.22 micrometer pore filter for heat-labile liquids), and Gamma irradiation.",
    "University Examination Strategy: State Koch's postulates with modern molecular exceptions, derive the optical resolution limit formula d = lambda / (2 * NA), and outline the complete protocol for Gram staining."
], [
    "Abbe's Optical Resolution Limit: d = lambda / (2 * NA) = lambda / (2 * n * sin alpha).",
    "Autoclave Operating Standard: 121 degrees Celsius at 15 pounds per square inch pressure for 15-20 minutes.",
    "Biological Indicator for Autoclaves: Endospores of Geobacillus stearothermophilus.",
    "Sterilizing Membrane Filter Pore Size: 0.22 micrometers (effectively retains all vegetative bacteria).",
    "Gram Stain Primary Dye: Crystal violet (stains all bacterial cells purple initially).",
    "Gram Stain Decolorizer: 95 percent Ethanol or Acetone (extracts dye from thin Gram-negative walls).",
    "Gram Stain Counterstain: Safranin (stains decolorized Gram-negative bacteria pink).",
    "Acid-Fast Bacteria Hallmark: High cell wall content of waxy mycolic acids (retains carbolfuchsin dye).",
    "Domain Archaea Lipid Chemistry: Hydrocarbons attached to glycerol via ether linkages with branched phytanyl chains.",
    "Exam Scoring Tip: Darkfield microscopy uses a special darkfield condenser with central stop that reflects light away, illuminating only light scattered by the specimen against a black background."
])

add("Microbiology", 2, "Bacteria", [
    "Bacterial Morphology & Cellular Arrangements: Cocci (spherical: diplococci, streptococci chains, staphylococci clusters), Bacilli (rod-shaped: single, streptobacilli), Coccobacilli, Vibrio (comma-shaped curved rods, e.g. Vibrio cholerae), Spirilla (rigid spiral), and Spirochetes (flexible axial filament helix, e.g. Treponema pallidum).",
    "Bacterial Cell Wall Architecture: Peptidoglycan (murein) polymer backbone consisting of alternating N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) linked by beta-1,4-glycosidic bonds, cross-linked by tetrapeptide chains.",
    "Gram-Positive vs Gram-Negative Cell Envelope: Gram-positive: Thick multi-layered peptidoglycan (20-80 nm) containing teichoic acids and lipoteichoic acids, single inner cytoplasmic membrane; Gram-negative: Thin peptidoglycan (2-7 nm) located in periplasmic space between inner membrane and outer membrane containing lipopolysaccharide (LPS / endotoxin: Lipid A, core polysaccharide, O-antigen).",
    "Surface Appendages: Flagella (helical filament composed of flagellin protein driven by rotary motor proton-motive force; arrangements: monotrichous, lophotrichous, amphitrichous, peritrichous), Fimbriae / Pili (short hair-like adhesins for host tissue colonization; F-pilus mediates bacterial conjugation).",
    "Glycocalyx & Bacterial Biofilms: Capsule (organized, firmly attached polysaccharide or polypeptide layer resisting macrophage phagocytosis, e.g. Streptococcus pneumoniae) vs Slime layer (loose, unorganized); Biofilm formation mediated by quorum sensing autoinducers, encased in protective extracellular polymeric substance (EPS).",
    "Bacterial Endospores & Resistance: Highly resistant dormant survival structures produced by Bacillus and Clostridium during nutrient starvation; Spore layers: Core, inner membrane, germ cell wall, cortex (thick peptidoglycan), coat (cross-linked protein), and exosporium; Extreme heat/radiation resistance mediated by Calcium Dipicolinate (dipicolinic acid complex) and small acid-soluble proteins (SASPs).",
    "Bacterial Growth Curve Kinetics: Batch culture closed system: (1) Lag phase (physiological adaptation, enzyme synthesis); (2) Log / Exponential phase (constant maximum growth rate, balanced growth); (3) Stationary phase (nutrient depletion, toxic byproduct accumulation, growth rate equals death rate); (4) Death / Decline phase.",
    "Mathematical Formulations of Bacterial Growth: Mean generation time g = t / n; Exponential cell division: N_t = N_0 * (2 to the power n); Number of generations n = (log10(N_t) - log10(N_0)) / log10(2) = 3.32 * log10(N_t / N_0); Specific growth rate mu = ln(2) / g = 0.693 / g.",
    "Continuous Culture & Chemostat Operation: Steady-state open culture system; Fresh sterile medium added continuously while spent culture overflows at identical dilution rate D = F / V; Specific growth rate equals dilution rate (mu = D); Substrate concentration controlled by Monod model: mu = mu_max * [S] / (Ks + [S]).",
    "University Examination Strategy: Draw comparative diagrams of Gram-positive vs Gram-negative cell walls showing LPS and teichoic acids, plot the four phases of the bacterial batch growth curve, and derive generation time g = 0.693 / mu."
], [
    "Bacterial Peptidoglycan Glycosidic Linkage: Beta-1,4-glycosidic bond linking alternating NAG and NAM sugars.",
    "Gram-Negative Endotoxin Component: Lipid A moiety of the outer membrane Lipopolysaccharide (LPS).",
    "Endospore Heat Resistance Molecule: Calcium dipicolinate (dipicolinic acid chelating Ca2+ ions in spore core).",
    "Bacterial Flagellar Motor Power Source: Proton-motive force (inward flow of H+ or Na+ across Mot complexes).",
    "Bacterial Generation Time Formula: g = t / n = (t * log10 2) / (log10 N_t - log10 N_0).",
    "Specific Growth Rate Formula: mu = ln 2 / g = 0.693 / g per hour.",
    "Monod Bacterial Growth Equation: mu = mu_max * [S] / (Ks + [S]).",
    "Chemostat Steady-State Equilibrium: Specific growth rate equals dilution rate: mu = D = Flow Rate / Volume.",
    "Peritrichous Flagella Pattern: Flagella distributed uniformly over the entire cellular perimeter.",
    "Exam Scoring Tip: Penicillin antibiotics selectively target bacteria by inhibiting transpeptidase enzymes that cross-link peptidoglycan peptide side chains."
])

add("Microbiology", 3, "Viruses", [
    "General Properties of Viruses: Obligate intracellular parasites; Lack cellular structure, metabolic machinery, and ribosomes; Contain either DNA or RNA genome enclosed within a protein shell (capsid); Infectious extracellular particle called a virion.",
    "Viral Capsid Symmetry: Capsid constructed from protein subunits called capsomers; Morphological symmetries: Helical symmetry (rod-shaped, e.g. Tobacco Mosaic Virus TMV), Icosahedral symmetry (20 equilateral triangular faces, 12 vertices, 5-3-2 rotational symmetry, e.g. Adenovirus, Poliovirus), and Complex symmetry (e.g. T4 bacteriophage with icosahedral head and contractile helical tail).",
    "Enveloped vs Non-Enveloped (Naked) Viruses: Naked viruses possess only nucleocapsid, stable in environment, resistant to drying and detergents (e.g. Norovirus, Enteroviruses); Enveloped viruses acquire lipid bilayer membrane derived from host cell nuclear or plasma membrane during budding, decorated with viral glycoprotein spikes (e.g. Influenza, HIV, Coronaviruses); Sensitive to ether, alcohol, and bile salts.",
    "Baltimore Classification System: Seven groups based on genome type and replication mechanism: Group I (dsDNA, e.g. Herpesvirus), Group II (ssDNA, e.g. Parvovirus), Group III (dsRNA, e.g. Reovirus), Group IV (+ssRNA, genome serves directly as mRNA, e.g. Picornavirus, SARS-CoV-2), Group V (-ssRNA, requires viral RNA-dependent RNA polymerase, e.g. Rabies, Influenza), Group VI (ssRNA-RT retroviruses via DNA intermediate, e.g. HIV), Group VII (dsDNA-RT, e.g. Hepatitis B).",
    "Lytic Life Cycle of T4 Bacteriophage: Virulent phage infection: (1) Adsorption / Attachment (tail fibers bind LPS/OmpC surface receptors); (2) Penetration (tail sheath contracts, lysozyme digests peptidoglycan, viral DNA injected); (3) Biosynthesis (host DNA degraded, early viral mRNA and replisome synthesized, late structural proteins produced); (4) Assembly / Maturation (heads packaged with DNA, tails attached); (5) Lysis (endolysin and holin burst bacterial wall, releasing burst of 100-200 progeny).",
    "Lysogenic Cycle & Prophage Integration: Temperate phages (e.g. Lambda phage); Viral DNA integrates into bacterial chromosome as a dormant prophage; Replicated passively during bacterial binary fission; Repressed by cI lambda repressor; DNA damage (UV light) triggers RecA-mediated cleavage of cI, inducing prophage excision and lytic cycle.",
    "One-Step Growth Curve of Bacteriophages: Latent period (time from infection to appearance of first extracellular virions, includes eclipse period where no infectious virions exist inside or outside cell); Burst size (average number of progeny virions released per infected bacterial cell: Burst Size = Final titer / Initial infected cell count).",
    "Sub-Viral Infectious Agents: Viroids (small, circular, single-stranded non-coding infectious RNAs lacking protein coat, cause devastating plant diseases e.g. Potato spindle tuber viroid, replicate via rolling circle rolling transcription) vs Prions (proteinaceous infectious particles devoid of nucleic acids, misfolded PrP-Sc isoform catalyzes conversion of normal cellular PrP-C into insoluble amyloid plaques, causing transmissible spongiform encephalopathies e.g. Scrapie, Creutzfeldt-Jakob disease).",
    "Viral Cultivation & Plaque Assay: Obligate reliance on living host systems: embryonated chicken eggs (allantoic, chorioallantoic membrane inoculation), cell culture (primary, continuous cell lines e.g. HeLa); Plaque assay quantifies infectious bacteriophages/viruses as Plaque Forming Units per milliliter: PFU/mL = (Number of plaques) / (Dilution factor * Volume plated).",
    "University Examination Strategy: Detail the Baltimore classification system with genome replication pathways and viral examples for all 7 groups, trace the lytic vs lysogenic cycles of bacteriophage Lambda, and describe the structure and pathogenesis of prions."
], [
    "Baltimore Group I: Double-stranded DNA viruses (replicate in nucleus using host or viral DNA polymerase).",
    "Baltimore Group IV: Positive-sense single-stranded RNA (+ssRNA, genome functions directly as translation-ready mRNA).",
    "Baltimore Group V: Negative-sense single-stranded RNA (-ssRNA, must carry virion-associated RNA-dependent RNA polymerase).",
    "Baltimore Group VI (Retroviruses): Single-stranded RNA with reverse transcriptase synthesizing proviral DNA.",
    "Eclipse Period Definition: Interval between infection and the intracellular assembly of the first mature infectious virion.",
    "Bacteriophage Burst Size: Average count of viable progeny virions liberated per single lysed host bacterium.",
    "Plaque Forming Unit Formula: PFU/mL = (Count of Plaques) / (Dilution * Inoculum Volume in mL).",
    "Prion Pathology: Misfolded beta-sheet rich PrP-Sc converts normal alpha-helical PrP-C into neurotoxic aggregates.",
    "Viroid Composition: Infectious naked circular single-stranded RNA lacking any protein capsid envelope.",
    "Exam Scoring Tip: Enveloped viruses are less stable in the environment than naked non-enveloped viruses because desiccation or detergents disrupt the outer lipid membrane required for host binding."
])

add("Microbiology", 4, "Fungi", [
    "General Characteristics of Kingdom Fungi: Eukaryotic, non-photosynthetic heterotrophs; Absorptive nutrition via extracellular hydrolytic exoenzymes; Cell wall composed of chitin (polymer of beta-1,4-linked N-acetylglucosamine) and beta-glucans; Cell membrane contains ergosterol (target of antifungal drugs like amphotericin B and azoles); Storage carbohydrate is glycogen.",
    "Fungal Morphology: Yeasts (unicellular fungi, spherical/oval, reproduce asexually by budding or binary fission, e.g. Saccharomyces cerevisiae, Candida albicans) vs Molds (multicellular filamentous fungi, thread-like tubular filaments called hyphae, collectively forming mycelium); Dimorphic fungi (yeast at 37 degrees Celsius in tissue, mold at 25 degrees Celsius in environment, e.g. Histoplasma capsulatum).",
    "Hyphal Anatomy & Growth: Septate hyphae (divided into cellular compartments by perforated cross-walls / septa allowing organelle streaming, e.g. Aspergillus, Penicillium) vs Aseptate / Coenocytic hyphae (multinucleated continuous tubes lacking regular cross-walls, e.g. Rhizopus, Mucor); Apical extension at hyphal tip driven by Spitzenkorper vesicle supply center.",
    "Asexual Reproduction in Fungi: Sporangiospores (formed endogenously within sac-like sporangium on sporangiophore, e.g. Rhizopus), Conidia / Conidiospores (produced exogenously in chains or clusters on conidiophores, e.g. Aspergillus brush-like sterigmata, Penicillium), Arthrospores (fragmentation of hyphae), and Chlamydospores (thick-walled resting spores).",
    "Sexual Reproduction & Fungal Phyla: Plasmogamy (fusion of cytoplasm) -> Karyogamy (fusion of haploid nuclei to form diploid zygote) -> Meiosis (reduction division producing haploid sexual spores); Four major phyla: Zygomycota, Ascomycota, Basidiomycota, and Deuteromycota (Fungi Imperfecti).",
    "Phylum Ascomycota (Sac Fungi): Produces sexual ascospores (typically 8 ascospores) enclosed within microscopic sac called an ascus; Asci grouped within fruiting bodies called ascocarps (cleistothecium, perithecium, apothecium); Includes yeast, Penicillium, Aspergillus, Neurospora crassa, and edible truffles and morels.",
    "Phylum Basidiomycota (Club Fungi): Produces sexual basidiospores (typically 4) borne externally on microscopic club-shaped structures called basidia; Basidia aligned on gills/pores of macroscopic fruiting body (basidiocarp / mushroom, e.g. Agaricus bisporus); Bracket fungi, puffballs, and plant pathogens (rusts and smuts).",
    "Mycorrhizal Symbiosis: Mutualistic association between fungal mycelium and plant roots; Ectomycorrhizae (Hartig net between cortical cells, mantle sheath, Basidiomycota/Ascomycota on temperate forest trees) vs Endomycorrhizae / Arbuscular Mycorrhizal Fungi (AMF, Glomeromycota, penetrate root cortical cell walls forming branched arbuscules for phosphorus uptake).",
    "Medical & Industrial Significance of Fungi: Beneficial: Antibiotic production (penicillin from Penicillium chrysogenum, cyclosporine immunosuppressant from Tolypocladium inflatum), Baker's/Brewer's yeast, organic acid synthesis (citric acid from Aspergillus niger); Detrimental: Superficial and systemic mycoses, mycotoxins (aflatoxin B1 produced by Aspergillus flavus, potent hepatocarcinogen).",
    "University Examination Strategy: Draw and label the asexual and sexual reproductive structures of Ascomycota vs Basidiomycota, detail the cell wall and membrane targets of antifungal pharmaceuticals, and describe the stages of mycorrhizal symbiosis."
], [
    "Fungal Cell Wall Polymer: Chitin consisting of unbranched chains of beta-1,4-linked N-acetylglucosamine.",
    "Fungal Membrane Sterol: Ergosterol (selectively bound by polyenes and inhibited by azoles).",
    "Ascomycota Sexual Spore Count: Typically produces strictly 8 haploid ascospores per ascus.",
    "Basidiomycota Spore Count: Typically produces strictly 4 haploid basidiospores per basidium.",
    "Aflatoxin B1 Source: Toxic secondary metabolite synthesized by Aspergillus flavus and Aspergillus parasiticus.",
    "Coenocytic Hyphae Definition: Continuous multinucleated tubular hyphae devoid of internal cross-walls.",
    "Dimorphic Fungi Transition: Yeast phase at body temperature (37 degrees Celsius), Mold phase at room temperature (25 degrees).",
    "Spitzenkorper Role: Dense vesicle cluster at growing hyphal apex directing wall synthesis materials.",
    "Arbuscular Mycorrhiza Feature: Formation of highly branched intracellular fungal haustoria-like arbuscules.",
    "Exam Scoring Tip: Penicillium produces asexual conidiospores in distinct broom-like branching clusters (penicillus), whereas Aspergillus produces radial chains of conidia arising from a swollen central vesicle."
])

# Save updated dataset
with open('scripts/sem3_life_complete_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
