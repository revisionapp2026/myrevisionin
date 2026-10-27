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
# MICROBIOLOGY U5
# =========================================================================
add("Microbiology", 5, "Industrial Microbiology", [
    "Industrial Fermentation Principles: Large-scale cultivation of microorganisms for commercial production of pharmaceuticals, organic acids, enzymes, and biofuels; Strain improvement via chemical mutagenesis (EMS, UV) and recombinant DNA technology.",
    "Bioreactor / Fermenter Design: Cylindrical stainless steel vessel (grade 316L) equipped with mechanical agitation system (impeller, baffles to break vortex and promote gas dispersion), sparger for sterile aeration, cooling jacket for heat dissipation, and automated sensors (pH, dissolved oxygen DO, temperature, antifoam).",
    "Primary vs Secondary Metabolites: Primary metabolites (synthesized during active exponential trophophase, essential for growth, e.g. ethanol, lactic acid, amino acids like L-lysine and L-glutamic acid by Corynebacterium glutamicum); Secondary metabolites (synthesized during stationary idiophase, non-growth-associated, e.g. penicillin, streptomycin).",
    "Upstream Processing: Media formulation (carbon sources: molasses, corn steep liquor; nitrogen sources: soybean meal, ammonium salts), medium sterilization (continuous high-temperature short-time HTST vs batch sterilization), and inoculum preparation (multi-stage seed fermenters).",
    "Downstream Processing & Product Recovery: Separation of biomass from broth (centrifugation, rotary vacuum drum filtration), cell disruption (high-pressure homogenization, bead milling for intracellular products), concentration (ultrafiltration, vacuum evaporation), purification (chromatography: ion-exchange, affinity), and final crystallization / spray drying.",
    "Industrial Production of Penicillin: Submerged fed-batch fermentation using Penicillium chrysogenum; High aeration and controlled glucose/lactose feeding; Addition of precursor phenylacetic acid yields Penicillin G; Side chain cleaved by penicillin acylase to produce 6-aminopenicillanic acid (6-APA) for semi-synthetic penicillins.",
    "Industrial Organic Acid Production: Citric acid production by Aspergillus niger via surface or submerged fermentation using beet/cane molasses; High glucose concentration (14-20 percent) and strict trace iron limitation (Fe < 0.2 ppm) blocks aconitase, forcing overflow accumulation of citric acid.",
    "Industrial Enzyme Technology: Production of alpha-amylase and proteases (Bacillus subtilis, Bacillus licheniformis for detergents and textile desizing), pectinases, and glucose isomerase (converts glucose to high-fructose corn syrup HFCS); Enzyme immobilization via covalent binding, adsorption, and calcium alginate entrapment.",
    "Single Cell Protein (SCP) & Microbial Biofuels: Production of edible microbial biomass rich in protein (Spirulina cyanobacteria, Methylophilus methylotrophus, Fusarium venenatum mycoprotein); Bioethanol production from starch/sugarcane using Saccharomyces cerevisiae; Biodiesel from oleaginous microalgae.",
    "University Examination Strategy: Draw a detailed schematic of an industrial stirred-tank bioreactor labeling all components, compare primary vs secondary metabolites with growth-associated curves, and outline downstream processing stages."
], [
    "Trophophase vs Idiophase: Trophophase is the growth phase for primary metabolites; Idiophase is the stationary phase for secondary metabolites.",
    "Stirred Tank Impeller Types: Rushton turbine (radial flow for high gas dispersion) and marine propeller (axial flow).",
    "Continuous Medium Sterilization: HTST operating at 140 degrees Celsius for 30 to 120 seconds minimizes vitamin degradation.",
    "Penicillin Precursor: Phenylacetic acid added to fermentation medium to yield specifically Penicillin G (benzylpenicillin).",
    "Citric Acid Overproduction Trigger: Iron (Fe2+) limitation in Aspergillus niger represses the TCA cycle enzyme aconitase.",
    "6-APA Precursor Role: 6-Aminopenicillanic acid core used to synthesize ampicillin, amoxicillin, and methicillin.",
    "Enzyme Immobilization Carrier: Entrapment in cross-linked porous sodium alginate beads with calcium chloride.",
    "Industrial Glutamic Acid Producer: Corynebacterium glutamicum (triggered by biotin limitation to alter membrane permeability).",
    "Rotary Vacuum Drum Filter (RVDF): Continuous cake filtration for recovering filamentous fungal mycelium and actinomycetes.",
    "Exam Scoring Tip: Antifoam agents (silicones, polyglycols) reduce broth foam but must be monitored carefully because they lower the volumetric oxygen transfer coefficient (kLa)."
])

# =========================================================================
# 4. BIOMEDICAL INSTRUMENTATION (B.Tech)
# =========================================================================
add("Biomedical Instrumentation", 1, "Measurement Basics", [
    "Generalized Medical Instrumentation System: Physiological signal source (living human body) -> Transducer / Bioelectrode (converts physiological parameter into electrical signal) -> Signal conditioning unit (amplification, filtering, isolation) -> Output display / Recording unit / Feedback control.",
    "Unique Constraints of Biomedical Measurements: Dynamic biological variability, low signal amplitudes (microvolts to millivolts), high source impedance, electrical interference from 50/60 Hz power lines, movement artifacts, and patient safety constraints against microshock.",
    "Biopotential Origins & Electrophysiology: Generated by ionic movements across cell membranes during action potential discharge; Polarization (resting state, inside negative), Depolarization (Na+ or Ca2+ influx, inside positive), and Repolarization (K+ efflux restoring resting equilibrium).",
    "Volume Conductor Physics: Living tissues act as inhomogeneous, anisotropic conductive volume conductor media; Electric currents generated by excitable heart, brain, and muscle cells produce macroscopic field potentials on the body surface.",
    "Signal Conditioning & Instrumentation Amplifiers: High input impedance (Z_in > 10 to the power 9 ohms to prevent signal attenuation from high electrode skin impedance); Three-op-amp instrumentation amplifier topology; Differential gain A_d and common-mode gain A_c.",
    "Common Mode Rejection Ratio (CMRR): CMRR = 20 * log10(|A_d / A_c|) in decibels; High CMRR (>100 dB) is essential to reject 50 Hz power-line interference induced equally across both differential patient leads.",
    "Right Leg Drive (RLD) Circuit: Active ground circuit in ECG machines; Detects common-mode 50 Hz interference on patient body, inverts it, and drives it back through the right leg electrode; Effectively cancels common-mode voltage without compromising patient electrical isolation.",
    "Frequency Ranges & Amplitudes of Key Biopotentials: Electrocardiogram (ECG: 0.05-150 Hz, 1-5 mV); Electroencephalogram (EEG: 0.5-100 Hz, 10-100 microvolts); Electromyogram (EMG: 20-2000 Hz, 0.1-10 mV); Electrooculogram (EOG: DC to 50 Hz, 50-3500 microvolts).",
    "Static & Dynamic Characteristics of Medical Transducers: Static: Accuracy, precision, linearity, sensitivity, resolution, hysteresis, and drift; Dynamic: Zero-order, First-order (time constant tau, e.g. temperature probe), and Second-order (natural frequency fn and damping ratio zeta, e.g. catheter-manometer pressure sensors).",
    "University Examination Strategy: Draw the complete block diagram of a biomedical instrumentation system, derive the differential gain expression for a 3-op-amp instrumentation amplifier, and explain the working principle of the Right Leg Drive circuit."
], [
    "Instrumentation Amplifier Gain: A_d = [1 + (2 * R1 / Rg)] * (R3 / R2) using three operational amplifiers.",
    "Common Mode Rejection Ratio: CMRR = 20 * log10(A_d / A_c) decibels (must exceed 100 dB for medical ECG).",
    "Right Leg Drive (RLD) Purpose: Actively inverts and injects common-mode noise back to cancel 50 Hz interference.",
    "ECG Signal Specifications: Amplitude 0.5 to 4.0 millivolts with clinical diagnostic bandwidth 0.05 to 150 Hz.",
    "EEG Signal Specifications: Microvolt level (10 to 100 microvolts) requiring ultra-low noise preamplifiers.",
    "EMG Signal Specifications: Wide bandwidth 20 to 2000 Hz with amplitudes reaching 10 millivolts during full contraction.",
    "First-Order Sensor Time Constant: Response reaches 63.2 percent of final steady-state step input at t = tau.",
    "Catheter Dynamic Damping: Damping ratio zeta approximately 0.7 prevents underdamped resonant ringing in blood pressure.",
    "Input Impedance Requirement: Z_in must exceed 10 megohms to avoid loading high electrode-skin interface resistance.",
    "Exam Scoring Tip: Diagnostic ECG bandwidth requires lower cutoff of 0.05 Hz to accurately preserve the ST segment without phase distortion."
])

add("Biomedical Instrumentation", 2, "Bioelectrodes", [
    "Electrode-Electrolyte Interface & Transduction Physics: Bioelectrodes convert ionic conduction in tissue fluid (carried by Na+, K+, Cl- ions) into electronic conduction in metal lead wires (carried by electrons); Oxidation occurs at anode, reduction occurs at cathode.",
    "Half-Cell Potential & Nernst Equation: Voltage generated at metal-solution interface: E = E0 + (R * T / (n * F)) * ln(a_ion), where E0 is standard half-cell potential relative to Standard Hydrogen Electrode (SHE); Chemical equilibrium between metal dissolution and ion deposition.",
    "Polarizable vs Non-Polarizable Electrodes: Perfectly polarizable electrodes (no real charge crosses interface, behaves as pure capacitor, e.g. platinum/gold, prone to motion artifacts); Perfectly non-polarizable electrodes (current passes unhindered without overpotential, e.g. Silver/Silver Chloride Ag/AgCl).",
    "Silver/Silver Chloride (Ag/AgCl) Reference Electrode: Consists of metallic silver base coated with porous silver chloride layer in contact with chloride ion gel; Reversible oxidation-reduction: Ag + Cl- <-> AgCl + e-; Exhibits exceptionally stable, reproducible half-cell potential (approx +0.222 V) and minimal movement artifact noise.",
    "Equivalent Electrical Circuit of Bioelectrodes: Parallel combination of double-layer capacitance (C_dl) and charge-transfer resistance (R_ct), in series with electrolyte solution resistance (R_s) and half-cell potential source (E_hc); Impedance decreases with increasing signal frequency.",
    "Skin Anatomy & Skin-Electrode Impedance: Stratum corneum (outer non-vascular dead keratin layer, behaves as semi-permeable dielectric membrane with high electrical impedance); Reduced by skin abrasion, alcohol degreasing, and application of conductive electrolytic chloride gel.",
    "Clinical Surface Electrodes: Disposable pre-gelled Ag/AgCl snap electrodes for ECG monitoring; Suction cup electrodes for precordial chest leads; Reusable limb clamp electrodes; Floating electrodes (recessed electrode element isolated from skin by conductive paste, eliminating motion artifacts).",
    "Internal & Microelectrodes: Needle electrodes (concentric bipolar needle inserted into muscle for localized clinical electromyography EMG); Wire electrodes; Intracellular glass micropipettes (tip diameter <0.5 micrometers filled with 3M KCl for recording single-cell transmembrane potentials); Metal microelectrodes (etched tungsten/platinum).",
    "Motion Artifacts & Reduction Strategies: Relative mechanical displacement of double-layer charge distribution shifts half-cell potential, generating large low-frequency artifact voltages (up to tens of millivolts); Minimized by Ag/AgCl non-polarizable chemistry, skin abrasion, recessed floating designs, and elastic bandages.",
    "University Examination Strategy: Draw the equivalent electrical circuit model of an electrode-electrolyte interface, explain why Ag/AgCl is preferred for biopotential recordings, and describe the construction of an intracellular glass microelectrode."
], [
    "Nernst Half-Cell Equation: E = E0 + (R * T / [n * F]) * ln(a_metal_ion).",
    "Ag/AgCl Chemical Reaction: Ag + Cl- <-> AgCl + e- (completely reversible non-polarizable redox couple).",
    "Ag/AgCl Standard Potential: Approximately +0.222 Volts relative to standard hydrogen electrode at 25 degrees.",
    "Electrode Equivalent Circuit: Series combination of E_hc and R_s with parallel pair R_ct and C_dl.",
    "Double-Layer Capacitance: C_dl formed by Helmholtz and Gouy-Chapman ionic layers at metal-gel interface.",
    "Stratum Corneum Electrical Role: Behaves as high-impedance dielectric barrier requiring conductive gel coupling.",
    "Recessed Floating Design Advantage: Eliminates direct skin-metal contact, preventing mechanical disturbance of double layer.",
    "Glass Micropipette Tip Diameter: Less than 0.5 to 1.0 micrometer for atraumatic single-cell impalement.",
    "Concentric Needle EMG: Insulated central wire inside hollow hypodermic cannula acting as reference.",
    "Exam Scoring Tip: Polarizable metal electrodes (like stainless steel or platinum) develop massive motion artifacts because any physical movement alters their double-layer capacitance and shifts interfacial charge."
])

add("Biomedical Instrumentation", 3, "Biosensors", [
    "Biosensor Architecture & Working Principle: Analytical device combining a biological recognition element (bioreceptor) in direct spatial contact with a physical transducer, connected to signal processing electronics; Generates electrical output proportional to target analyte concentration.",
    "Bioreceptors (Biological Recognition Elements): Enzymes (substrate specificity, catalytic turnover), Antibodies (immunosensors, high affinity antigen-antibody binding), Nucleic acids (DNA hybridization probes, aptamers), Whole microbial cells, and Biomimetic molecularly imprinted polymers (MIPs).",
    "Electrochemical Biosensor Transduction Modes: (1) Amperometric (measures current generated at constant applied potential by oxidation/reduction of electroactive species); (2) Potentiometric (measures electromotive potential at zero current using ion-selective electrodes, governed by Nernst equation); (3) Conductometric / Impedimetric.",
    "Clark Oxygen Electrode: Amperometric sensor for dissolved oxygen (pO2); Platinum cathode polarized at -0.6 to -0.8 V relative to Ag/AgCl anode; Oxygen diffuses through gas-permeable Teflon membrane; Reduction: O2 + 4H+ + 4e- -> 2H2O; Limiting reduction current is directly proportional to oxygen partial pressure.",
    "Blood Glucose Biosensors (Amperometric Generations): First generation: Glucose oxidase (GOx) converts glucose + O2 to gluconolactone + H2O2; H2O2 oxidized at platinum anode (+0.6 V) generating current; Second generation: Uses artificial redox mediators (ferrocene derivatives, ferricyanide) replacing O2 to eliminate oxygen dependence; Third generation: Direct electron transfer between enzyme active site and electrode.",
    "Optical Biosensors & Surface Plasmon Resonance (SPR): Label-free optical detection; Polarized laser light reflects off thin gold film on glass prism at resonance angle; Creates evanescent electromagnetic wave exciting surface plasmons; Binding of biomolecules to gold surface shifts refractive index, altering resonance angle in real time.",
    "Thermal & Piezoelectric Biosensors: Calorimetric biosensors (thermistor measures reaction enthalpy delta H using immobilized enzymes, e.g. catalase); Piezoelectric Quartz Crystal Microbalance (QCM, Sauerbrey equation: frequency decrease Delta f is directly proportional to mass loading Delta m of bound biomolecules on quartz resonator).",
    "Field-Effect Transistor Biosensors (BioFET): Ion-Sensitive FET (ISFET); Metal gate replaced by reference electrode and chemically sensitive membrane (e.g. silicon nitride or immobilized enzyme layer EnFET); Binding of charged analytes modulates channel conductance and drain current.",
    "Performance Figures of Merit of Biosensors: Sensitivity (slope of calibration curve), Limit of Detection (LOD = 3 * sigma / slope), Dynamic linear range, Selectivity against interfering endogenous species (e.g. ascorbic acid, uric acid in blood), Response time, and Operating/storage shelf-life.",
    "University Examination Strategy: Draw a detailed diagram of the Clark oxygen electrode showing chemical reactions at both electrodes, detail the three generations of glucose biosensors, and derive the Sauerbrey equation for quartz crystal microbalance sensors."
], [
    "Clark Electrode Cathode Reaction: O2 + 4 H+ + 4 e- -> 2 H2O (polarized at -0.7 Volts vs Ag/AgCl).",
    "Glucose Oxidase Reaction: D-glucose + O2 + H2O -> D-glucono-1,5-lactone + H2O2.",
    "Hydrogen Peroxide Detection: H2O2 -> O2 + 2 H+ + 2 e- (oxidized at platinum anode at +0.65 V).",
    "Second-Generation Biosensor Mediator: Ferrocene or osmium bipyridyl complexes shuttling electrons to electrode.",
    "Sauerbrey QCM Mass Equation: Delta f = - (2 * f0 squared * Delta m) / (A * sqrt(rho_q * mu_q)).",
    "Surface Plasmon Resonance (SPR) Principle: Shift in reflected light minimum angle monitors real-time label-free binding.",
    "Potentiometric Sensor Law: Potential shift follows Nernst equation E = constant + (0.0592 / z) * log10(analyte).",
    "Enzyme Inhibition Biosensor: Toxic heavy metals or organophosphates quantified by degree of enzyme inhibition.",
    "Limit of Detection (LOD): Smallest analyte concentration reliably distinguished from baseline noise (3 * standard deviation).",
    "Exam Scoring Tip: First-generation glucose biosensors suffer from oxygen deficit in subcutaneous tissue, which was solved in second-generation designs by incorporating artificial synthetic electron mediators."
])

add("Biomedical Instrumentation", 4, "Medical Devices", [
    "Electrocardiograph (ECG) Architecture: 12-lead diagnostic ECG system (3 standard bipolar limb leads I, II, III; 3 augmented unipolar limb leads aVR, aVL, aVF; 6 precordial chest leads V1 to V6); Einthoven's triangle: Lead II = Lead I + Lead III; Driven right leg circuit; Isolation barrier using optocouplers or isolation transformers (>4 kV breakdown rating).",
    "Defibrillators & Cardiac Resuscitation: Delivers controlled therapeutic electric shock to terminate ventricular fibrillation (VF) and pulseless ventricular tachycardia; Monophasic damped sinusoidal shock (360 Joules) vs Modern biphasic truncated exponential shock (150-200 Joules, reverses polarity halfway, superior efficacy with less myocardial burn damage).",
    "Automated External Defibrillators (AED): Microprocessor algorithm analyzes ECG rhythm using wave pattern recognition; Automatically detects shockable rhythms (VF, rapid VT) vs non-shockable rhythms (asystole, pulseless electrical activity PEA); Prompts user voice commands and delivers biphasic discharge.",
    "Cardiac Pacemakers (Implantable & External): Delivers rhythmic electrical pacing pulses to myocardium when intrinsic SA/AV conduction fails; Asynchronous (fixed-rate) vs Demand (ventricular-inhibited VVI, dual-chamber DDD pacing); NBG pacemaker code: (1) Chamber paced, (2) Chamber sensed, (3) Response to sensing, (4) Programmability/Rate modulation.",
    "Hemodialysis Machines & Artificial Kidneys: Extracorporeal removal of metabolic wastes (urea, creatinine) and excess water in end-stage renal disease; Dialyzer (hollow-fiber cartridge containing semipermeable polysulfone membranes); Countercurrent flow of blood and bicarbonate dialysate; Ultrafiltration controlled by transmembrane pressure (TMP).",
    "Ventilators & Mechanical Respiration: Delivers conditioned oxygen-air mixture into lungs; Control variables: Volume-controlled ventilation (preset tidal volume delivered, variable airway pressure) vs Pressure-controlled ventilation (preset inspiratory pressure, variable tidal volume); Positive End-Expiratory Pressure (PEEP) maintains alveolar patency at end of expiration.",
    "Patient Monitoring Systems & Pulse Oximetry: Multi-parameter bedside monitors (ECG, non-invasive blood pressure NIBP, temperature, respiration rate); Pulse oximetry (SpO2): Photoplethysmography (PPG) measuring arterial oxygen saturation using differential optical absorption of red (660 nm) and infrared (940 nm) LEDs through vascular tissue bed.",
    "Surgical Electrosurgery Units (ESU / Diathermy): High-frequency alternating current (300 kHz to 3 MHz) for tissue cutting and coagulation; High frequency avoids neuromuscular stimulation and cardiac arrest; Monopolar mode (active pencil tip + large dispersive return patient pad) vs Bipolar mode (current flows strictly between tips of bipolar forceps).",
    "Infusion Pumps & Drug Delivery Systems: Volumetric peristaltic pumps and syringe drivers for micro-infusion of critical vasoactive drugs and anesthesia; Drop sensors, air-in-line ultrasonic detectors, and downstream occlusion pressure sensors.",
    "University Examination Strategy: Draw Einthoven's triangle and state the mathematical relationship between the 6 limb leads, explain the physiological advantage of biphasic over monophasic defibrillation, and describe the operating principle of dual-wavelength pulse oximetry."
], [
    "Einthoven's Law Equation: Lead II = Lead I + Lead III.",
    "Augmented Lead Calculation: aVR = - (Lead I + Lead II) / 2.",
    "Biphasic Defibrillator Energy: 150 to 200 Joules delivers higher first-shock success than 360 J monophasic.",
    "Demand Pacemaker (VVI): Paces ventricle, senses ventricle, and inhibits pacing pulse upon sensing intrinsic R wave.",
    "Dual-Chamber Pacemaker (DDD): Paces and senses both atria and ventricles, supporting physiological AV synchrony.",
    "Pulse Oximeter LED Wavelengths: Red light at 660 nanometers and Infrared light at 940 nanometers.",
    "Oxygenated Hemoglobin Absorption: Oxyhemoglobin (HbO2) absorbs more 940 nm infrared light than 660 nm red light.",
    "Deoxygenated Hemoglobin Absorption: Deoxyhemoglobin (RHb) absorbs significantly more 660 nm red light.",
    "Electrosurgery Frequency Range: 300 kHz to 3 MHz (above 10 kHz threshold, nerve/muscle excitation ceases).",
    "Exam Scoring Tip: The pulse oximeter algorithm computes the ratio of ratios R = (AC660 / DC660) / (AC940 / DC940) to determine arterial oxygen saturation (SpO2) independent of tissue thickness."
])

add("Biomedical Instrumentation", 5, "Patient Safety", [
    "Physiological Effects of Electric Current: Severity depends on current magnitude, pathway, duration, and frequency; 1 mA (threshold of perception), 5 mA (maximum harmless current), 10-20 mA (let-go threshold, sustained tetanic muscle contraction preventing victim from releasing conductor), 50-100 mA (respiratory arrest), 100-300 mA (ventricular fibrillation, fatal).",
    "Macroshock vs Microshock Hazards: Macroshock: Electric current flows through intact skin across body trunk from external conductors; High skin resistance (1000 to 100,000 ohms); Ventricular fibrillation threshold is 100-200 mA; Microshock: Electric current path enters directly into or near myocardium via invasive cardiac catheter, pacemaker lead, or intracardiac saline line; Lethal fibrillation threshold is only 10 to 50 microamperes.",
    "Chassis Leakage Current Mechanisms: Stray capacitance and insulation resistance between internal power wiring/components and metallic instrument chassis; Ungrounded chassis develops floating potential; If ground wire is broken, touching chassis directs entire leakage current through patient.",
    "Medical Equipment Electrical Classifications (IEC 60601-1): Class I (accessible metal chassis connected to protective earth ground wire in 3-pin plug); Class II (double-insulated or reinforced insulation, no ground required); Class III (powered by Safety Extra-Low Voltage SELV < 25 V AC).",
    "Applied Part Types in Medical Devices: Type B (no electrical patient contact, or non-conductive earth-referenced applied part, max leakage 100 microamperes); Type BF (floating applied part with F-type isolated patient circuit, e.g. ECG surface electrodes); Type CF (cardiac floating, highest safety grade for direct myocardial contact, e.g. intracardiac catheters, max leakage 10 microamperes).",
    "Isolated Power Distribution Systems: Used in critical hospital environments (operating rooms, intensive care units, cardiac cath labs); Isolates power lines from earth ground using ungrounded 1:1 isolation transformer; First ground fault does not trip power breaker or pass current through patient; Monitored continuously by Line Isolation Monitor (LIM).",
    "Ground Fault Circuit Interrupters (GFCI): Senses current imbalance between line (hot) and neutral conductors using differential toroid current transformer; Trips circuit within 25 milliseconds if leakage current exceeds 4-6 mA.",
    "Equipotential Grounding in Cardiac Care Areas: Dedicated heavy copper grounding bus tying all equipment chasses, metallic hospital beds, conductive floors, and metal fixtures to common central reference point; Prevents minute potential differences (a few millivolts) that could drive lethal microshock currents through catheterized patients.",
    "Electrical Safety Testing Protocols: Periodic safety verification using automated biomedical electrical safety analyzers; Tests: Ground bond resistance (<0.2 ohms), Chassis leakage current (<100 microamperes), Patient lead leakage current, and Patient auxiliary leakage under normal and single-fault conditions.",
    "University Examination Strategy: Differentiate macroshock vs microshock in a detailed comparative table showing lethal threshold currents and entry pathways, explain the working principle of an isolated power system with Line Isolation Monitor (LIM), and classify IEC Type B, BF, and CF medical devices."
], [
    "Macroshock Lethal Threshold: 100 to 200 milliamperes through trunk triggers ventricular fibrillation.",
    "Microshock Lethal Threshold: Strictly 10 to 50 microamperes applied directly to myocardium causes fatal fibrillation.",
    "Let-Go Current Threshold: 10 to 20 milliamperes at 50/60 Hz causes sustained involuntary muscle tetany.",
    "Maximum Earth Resistance: Protective earth ground wire resistance must be strictly less than 0.2 ohms.",
    "Type CF Leakage Current Limit: Maximum 10 microamperes under normal conditions for direct cardiac contact.",
    "Type BF Leakage Current Limit: Maximum 100 microamperes for surface-applied floating patient circuits.",
    "Line Isolation Monitor Alarm: LIM triggers visual/audible alarm when total hazard leakage current exceeds 2 to 5 mA.",
    "Isolated Power Transformer: 1:1 ungrounded isolation transformer eliminates direct shock path to earth ground.",
    "Single-Fault Condition Meaning: Tests safety with one protective barrier intentionally disabled (e.g. broken neutral or open ground).",
    "Exam Scoring Tip: An isolated power system does not shut off power when a first fault occurs; it merely alarms via the LIM, allowing critical life-support surgical procedures to proceed uninterrupted."
])

# Save updated dataset
with open('scripts/sem3_life_complete_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in dataset now: {len(data)}")
