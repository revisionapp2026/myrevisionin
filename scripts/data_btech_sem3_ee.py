"""
B.Tech Semester 3: Electrical & Electronics Engineering
Covers:
- Sensors & Transducers
- Electrical Machines (Induction, Synchronous, DC testing, Special machines)
- Electromagnetic Waves
- Digital Logic Design (Number Systems, Boolean Algebra)
- Network Theory Elements
"""

btech_sem3_ee_units = {
    # -------------------------------------------------------------
    # SENSORS & TRANSDUCERS
    # -------------------------------------------------------------
    "btech-sensor: sensor fundamentals": {
        "highlights": [
            "Transducer Classification: Primary vs secondary transducers, active (self-generating, e.g. thermocouple, piezoelectric) vs passive (requiring external excitation, e.g. strain gauge, LVDT).",
            "Static Performance Characteristics: Accuracy, precision, resolution (minimum detectable change), sensitivity $S = \\frac{\\Delta q_o}{\\Delta q_i}$, linearity, hysteresis error, dead zone, and drift.",
            "Dynamic Characteristics: Zero-order system ($q_o = K q_i$, e.g. potentiometer), first-order system ($\\tau \\frac{dq_o}{dt} + q_o = K q_i$, time constant $\\tau$, e.g. RTD), second-order system ($m \\ddot{x} + c \\dot{x} + k x = F$, natural frequency $\\omega_n$, damping ratio $\\zeta$, e.g. accelerometer).",
            "Loading Effects in Measurement: Input impedance $Z_{in}$ must be substantially higher than source internal impedance $Z_s$ for voltage measurements to prevent signal attenuation: $V_m = V_s \\frac{Z_{in}}{Z_s + Z_{in}}$.",
            "Signal Conditioning Circuitry: Wheatstone bridge deflection: $\\Delta V_o = V_{in} \\left[\\frac{R_1 R_4 - R_2 R_3}{(R_1+R_2)(R_3+R_4)}\\right]$; Quarter, half, and full-bridge configurations for temperature compensation and sensitivity doubling.",
            "Instrumentation Amplifiers: Three-op-amp topology offering very high input impedance, high CMRR ($>100\\text{ dB}$), and single-resistor gain setting: $A_v = \\left(1 + \\frac{2R_1}{R_g}\\right)\\frac{R_3}{R_2}$.",
            "Noise Reduction and Shielding: Guard shielding, twisted pair differential wiring, active filtering (Butterworth, Chebyshev), and ground loop isolation.",
            "Calibration Standards and Traceability: Primary national standards (NIST, NPL), secondary transfer standards, and systematic calibration curve fitting.",
            "Dynamic Response to Step Input: First-order response $y(t) = K(1 - e^{-t/\\tau})$; Settling time to $98\\%$ of final value equals $4\\tau$.",
            "University Examination Strategy: Draw complete bridge and instrumentation amplifier circuit diagrams, label all component values and tolerances, and show algebraic derivation of transfer gain."
        ],
        "keyPoints": [
            "Active vs Passive: Active transducers generate EMF directly; Passive transducers require external excitation voltage.",
            "Static Sensitivity: $S = \\frac{\\text{Change in Output}}{\\text{Change in Input}} = \\frac{dq_o}{dq_i}$.",
            "Loading Error Formula: $\\text{Percentage Error} = \\left(1 - \\frac{Z_{in}}{Z_{in} + Z_s}\\right) \\times 100\\%$.",
            "First-Order Time Constant: Time required to achieve $63.2\\%$ of steady-state value under unit step excitation.",
            "Full Bridge Output: $\\Delta V_o = V_{in} \\cdot \\frac{\\Delta R}{R}$, four times more sensitive than quarter bridge.",
            "Instrumentation Amplifier Gain: $A_v = \\left(1 + \\frac{2R_1}{R_g}\\right) \\frac{R_3}{R_2}$.",
            "CMRR Definition: $\\text{CMRR} = 20\\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|$ in decibels.",
            "Resolution Limit: Smallest detectable increment of measurand input.",
            "Second-Order Damping: $\\zeta = 0.707$ (critically damped optimum) yields fast rise time with minimal overshoot ($4.3\\%$).",
            "Exam Scoring Tip: For bridge circuits, always state the initial balance condition $R_1 R_4 = R_2 R_3$ before deriving small-signal unbalance equations."
        ]
    },
    "btech-sensor: displacement sensors": {
        "highlights": [
            "Linear Variable Differential Transformer (LVDT): Mutual inductance displacement sensor with 1 primary and 2 symmetrically wound secondary coils in series opposition: $V_{net} = V_{s1} - V_{s2}$.",
            "LVDT Working Principle: At null position (core centered), $V_{s1} = V_{s2} \\implies V_{out} = 0$; Axial displacement of ferromagnetic core unbalances flux linkages, producing output amplitude proportional to displacement and phase indicating direction.",
            "LVDT Residual Voltage: Non-zero minimum output at null position caused by higher harmonic frequencies and stray capacitance coupling between windings.",
            "Phase Sensitive Demodulation: Multiplies LVDT AC output with reference carrier excitation followed by low-pass filtering, converting AC amplitude and phase into signed DC voltage.",
            "Capacitive Displacement Sensors: Variable gap separation ($C = \\frac{\\epsilon A}{d}$, hyperbolic response), variable overlapping area ($C = \\frac{\\epsilon w x}{d}$, linear response), and differential capacitive bridges eliminating non-linearity.",
            "Rotary Variable Differential Transformer (RVDT): Cam-shaped magnetic core provides rotational angular displacement measurement over $\\pm 40^\\circ$ with linearity better than $0.5\\%$.",
            "Linear and Rotary Optical Encoders: Incremental optical encoders using quadrature tracks ($A$ and $B$ channels $90^\\circ$ apart) for direction sensing and pulse counting; Index channel $Z$ for zero reference.",
            "Absolute Optical Encoders: Uses Gray code disk patterns where adjacent binary words differ by strictly 1 bit, completely eliminating false intermediate codes during fast shaft rotations.",
            "Potentiometric Displacement Transducers: Voltage divider principle $V_o = V_{in} \\frac{x}{L}$; Resolution limited by wire-wound wire diameter; Conductive plastic tracks provide continuous infinite resolution.",
            "University Examination Strategy: Draw neat construction cross-section of LVDT showing primary, secondary windings, core motion, and V-shaped output voltage characteristic with phase reversal across null."
        ],
        "keyPoints": [
            "LVDT Secondary Connection: Series opposition ($V_o = V_{s1} - V_{s2}$).",
            "LVDT Linearity Range: High linearity within specified stroke (typically $\\pm 1\\text{ mm}$ to $\\pm 250\\text{ mm}$).",
            "Residual Voltage Components: Harmonics in source oscillator and winding inter-capacitances.",
            "Capacitive Sensitivity (Variable Gap): $\\frac{dC}{dd} = -\\frac{\\epsilon A}{d^2}$ (non-linear sensitivity).",
            "Differential Capacitive Linearization: $\\frac{C_1 - C_2}{C_1 + C_2} = \\frac{\\Delta d}{d}$, perfectly linear output.",
            "Quadrature Decoding: Channel $A$ leads Channel $B$ by $90^\\circ$ for clockwise rotation, lags for counter-clockwise.",
            "Gray Code Advantage: Single-bit transition between consecutive positions prevents asynchronous multi-bit decoding glitches.",
            "Hall Effect Displacement: Output voltage $V_H = \\frac{R_H I B}{t}$, measuring displacement via varying magnetic field gradient.",
            "Eddy Current Sensors: High-frequency RF magnetic field induces eddy currents in conductive target, attenuating coil inductance non-contact.",
            "Exam Gold Tip: Always explain how phase change across null distinguishes positive from negative displacement in LVDT."
        ]
    },
    "btech-sensor: temperature sensors": {
        "highlights": [
            "Resistance Temperature Detectors (RTD): Positive temperature coefficient (PTC) metal sensor (Platinum PT100: $100\\,\\Omega$ at $0^\\circ\\text{C}$); Resistance modeled by Callendar-Van Dusen equation $R_T = R_0[1 + A T + B T^2]$.",
            "RTD Lead-Wire Compensation: 2-wire setup incurs lead resistance errors; 3-wire Callendar configuration places lead resistance in opposing bridge arms; 4-wire Kelvin connection provides true lead-independent measurement.",
            "Thermistors (NTC and PTC): Sintered semiconductor metal oxides exhibiting negative temperature coefficient (NTC); Steinhart-Hart exponential relation $R_T = R_0 e^{\\beta(1/T - 1/T_0)}$; Extremely high sensitivity ($-3$ to $-5\\%/^\\circ\\text{C}$).",
            "Thermocouple Thermoelectric Effects: Seebeck effect (temperature gradient produces open-circuit voltage $V = \\alpha_{AB} \\Delta T$), Peltier effect (current produces heat absorption/emission at junction), Thomson effect.",
            "Thermocouple Laws: Law of Intermediate Metals (inserting third metal does not alter net EMF if both ends at same temperature); Law of Intermediate Temperatures ($E_{T1}^{T3} = E_{T1}^{T2} + E_{T2}^{T3}$).",
            "Cold Junction Compensation (CJC): Reference junction must be maintained at $0^\\circ\\text{C}$ (ice bath) or compensated electronically using isothermal block with thermistor/RTD bridge.",
            "Standard Thermocouple Types: Type K (Chromel-Alumel, $-200$ to $+1250^\\circ\\text{C}$), Type J (Iron-Constantan), Type T (Copper-Constantan), Type S/R (Platinum-Rhodium for high temperature furnaces $>1500^\\circ\\text{C}$).",
            "Optical and Radiation Pyrometers: Non-contact high-temperature measurement based on Planck's radiation law and Stefan-Boltzmann total emissive power $E = \\epsilon \\sigma T^4$; Disappearing filament pyrometer matches optical brightness.",
            "Semiconductor Bandgap Temperature Sensors: Integrated IC sensors (e.g. LM35: $10\\text{ mV}/^\\circ\\text{C}$, AD590: $1\\,\\mu\\text{A}/\\text{K}$); Leverages base-emitter voltage differential $\\Delta V_{be} = \\frac{kT}{q}\\ln(I_1/I_2)$ proportional to absolute temperature (PTAT).",
            "University Examination Strategy: Draw 2-wire, 3-wire, and 4-wire RTD bridge schematics, compare RTD vs Thermistor vs Thermocouple in a summary matrix across temperature range, sensitivity, linearity, and cost."
        ],
        "keyPoints": [
            "PT100 Standard: Resistance equals exactly $100\\,\\Omega$ at $0^\\circ\\text{C}$ and $138.5\\,\\Omega$ at $100^\\circ\\text{C}$.",
            "Thermistor Exponential Law: $R(T) = R_0 \\exp\\left[\\beta \\left(\\frac{1}{T} - \\frac{1}{T_0}\\right)\\right]$ with absolute temperature in Kelvin.",
            "Seebeck Voltage: $V = \\alpha_{AB}(T_{\\text{hot}} - T_{\\text{cold}})$.",
            "Law of Intermediate Metals: Enables soldering thermocouple beads or connecting copper voltmeter leads without introducing false EMF.",
            "Stefan-Boltzmann Radiation Law: Total radiated power per unit area $E = \\epsilon \\sigma T^4$ where $\\sigma = 5.67 \\times 10^{-8}\\text{ W}/(\\text{m}^2\\text{K}^4)$.",
            "3-Wire RTD Connection: Cancels matched lead wire resistances $r_1 = r_2$ across opposing arms of Wheatstone bridge.",
            "Bimetallic Strips: Differential thermal expansion causes strip bending radius $r \\propto \\frac{t}{(\\alpha_2 - \\alpha_1)\\Delta T}$; Used in mechanical thermostats.",
            "Thermopile Construction: Series combination of multiple thermocouples to amplify small thermoelectric EMF.",
            "Self-Heating Error in RTD: Excitation current through RTD produces $I^2 R$ Joule heating; restricted below $1\\text{ mA}$ to prevent false temperature elevation.",
            "Exam Tip: In thermocouple formulas, always express temperatures in Celsius for thermoelectric tables or Kelvin for radiation pyrometry."
        ]
    },
    "btech-sensor: optical sensors": {
        "highlights": [
            "Photoelectric Transduction Modes: Photoconductive effect (bulk semiconductor resistance drops under illumination), Photovoltaic effect (internal electric field at p-n junction generates voltage), Photoemissive effect.",
            "Light Dependent Resistors (LDR / CdS): Cadmium sulfide bulk sensor; Dark resistance $>1\\text{ M}\\Omega$ drops to $<1\\text{ k}\\Omega$ under bright illumination; Slow response time ($20-50\\text{ ms}$).",
            "Photodiodes: P-N junction operated in reverse bias; Incident photons generate electron-hole pairs in depletion region; Reverse photocurrent $I_{ph} = R P_{opt}$ where responsivity $R = \\frac{\\eta q}{h \\nu}$.",
            "Photodiode Operational Modes: Photovoltaic mode (zero bias, low dark current and low noise, ideal for precision photometry) vs Photoconductive mode (reverse biased, wider depletion region, low junction capacitance, nanosecond response time).",
            "PIN Photodiodes & Avalanche Photodiodes (APD): PIN diode embeds intrinsic layer for high speed and wide bandwidth; APD operates under high reverse bias near breakdown, providing internal avalanche carrier multiplication gain ($M = 50-200$).",
            "Phototransistors: Bipolar junction transistor with exposed optical base region; Photocurrent generated in base-collector junction is amplified by transistor current gain $\\beta$, providing high responsivity ($I_c = \\beta I_{ph}$).",
            "Optocouplers and Optoisolators: Combines LED emitter (GaAs) with photodiode or phototransistor detector in sealed package; Provides high galvanic voltage isolation ($>5\\text{ kV}$) between low-voltage microcontrollers and high-voltage power electronics.",
            "Charge-Coupled Devices (CCD) & CMOS Image Sensors: Arrays of MOS capacitors capturing 2D spatial photon charge packets; CCD transfers charges sequentially along bucket-brigade registers; CMOS sensors provide pixel-level active amplifiers.",
            "Fiber Optic Sensors: Intrinsic (fiber acts as sensing medium via microbending or phase interference, e.g. fiber optic gyro) vs Extrinsic (fiber merely conveys light to external sensor head).",
            "University Examination Strategy: Draw reverse-bias photodiode I-V characteristics showing family of illuminated curves, and design transimpedance amplifier (TIA) circuit converting photocurrent to output voltage."
        ],
        "keyPoints": [
            "Photocurrent Equation: $I_{ph} = \\frac{\\eta q \\lambda}{h c} P_{opt} = R \\cdot P_{opt}$.",
            "Cutoff Wavelength: $\\lambda_c = \\frac{h c}{E_g} = \\frac{1.24}{E_g(\\text{eV})}\\;\\mu\\text{m}$.",
            "Dark Current: Small reverse leakage current flowing under complete absence of incident light.",
            "PIN Diode Advantage: Thick intrinsic region reduces junction capacitance $C_j = \\frac{\\epsilon A}{W}$, enabling gigahertz bandwidth.",
            "APD Gain Mechanism: Impact ionization in high electric field zone multiplies primary carriers.",
            "Transimpedance Amplifier (TIA): Op-amp circuit $V_{out} = -I_{ph} R_f$ converting nanoampere photocurrent to volts.",
            "Current Transfer Ratio (CTR): Optocoupler metric $\\text{CTR} = \\frac{I_c}{I_f} \\times 100\\%$.",
            "Phototransistor Trade-off: Much higher sensitivity than photodiode, but significantly slower switching response ($10-50\\,\\mu\\text{s}$).",
            "Interferometric Fiber Sensor: Mach-Zehnder interferometer splits light into reference and sensing arms, detecting sub-nanometer path shifts.",
            "Exam Scoring Tip: Draw the transimpedance amplifier with feedback resistor $R_f$ and small compensation capacitor $C_f$ in parallel to prevent high-frequency oscillation."
        ]
    },
    "btech-sensor: smart sensors": {
        "highlights": [
            "Smart Sensor Definition and Architecture: Monolithic integration of primary sensing element, analog signal conditioning, analog-to-digital converter (ADC), embedded microcontroller/DSP core, and standard communication interface.",
            "IEEE 1451 Standard for Smart Transducers: Standardizes plug-and-play transducer interoperability; Defines Transducer Electronic Data Sheet (TEDS) storing manufacturer details, calibration coefficients, serial numbers, and measurement ranges in non-volatile ROM.",
            "Self-Calibration & Auto-Zeroing: Embedded firmware algorithms automatically sample zero-offset voltages, calculate drift corrections, and apply polynomial multi-point curve linearization in real time.",
            "Self-Diagnosis & Fault Detection: Continuously monitors sensor bridge continuity, supply rail deviations, open-circuit/short-circuit conditions, and sensor degradation thresholds.",
            "Micro-Electro-Mechanical Systems (MEMS): Micro-machined sensors on silicon substrates using photolithography, bulk/surface etching, and wafer bonding; Examples include MEMS piezoresistive pressure sensors and capacitive comb-drive accelerometers.",
            "MEMS Capacitive Accelerometer: Proof mass suspended by silicon flexure springs with interdigitated capacitive fingers; Acceleration $a$ displaces mass ($x = m a/k$), creating differential capacitance unbalance $\\Delta C \\propto a$.",
            "MEMS Vibrating Ring Gyroscope: Operates via Coriolis acceleration $\\vec{a}_c = 2\\vec{v} \\times \\vec{\\Omega}$; Vibrating silicon structure driven into resonance transfers energy to orthogonal mode under angular rotation $\\vec{\\Omega}$.",
            "Digital Sensor Communication Protocols: I2C (two-wire open-drain: SDA, SCL with addressing), SPI (four-wire full duplex: MOSI, MISO, SCK, CS), and CAN bus (differential pair for automotive robustness).",
            "Wireless Sensor Networks (WSN) & IoT Nodes: Low-power distributed smart nodes incorporating RF transceivers (Zigbee, BLE, LoRaWAN), energy harvesting units, and sleep-mode duty cycling.",
            "University Examination Strategy: Draw the complete functional block diagram of a smart sensor node from sensing element to digital bus transceiver, explaining how TEDS enables plug-and-play field deployment."
        ],
        "keyPoints": [
            "Smart Sensor 4-Part Hierarchy: Sensing element $\\to$ Analog Front-End (AFE) $\\to$ Microcontroller $\\to$ Digital Bus Interface.",
            "IEEE 1451 TEDS: Transducer Electronic Data Sheet containing factory calibration matrix and operational parameters.",
            "Auto-Zeroing Technique: Periodic shorting of sensor terminals to store and subtract offset error voltage.",
            "MEMS Accelerometer Principle: Proof mass displacement governed by second-order equation $m \\ddot{x} + c \\dot{x} + k x = m a$.",
            "Coriolis Force Equation: $\\vec{F}_c = -2m(\\vec{\\omega} \\times \\vec{v})$; Basis of all vibrating structure MEMS gyroscopes.",
            "I2C Protocol Lines: Serial Data (SDA) and Serial Clock (SCL) pulled high by external pull-up resistors.",
            "SPI Protocol Advantage: Full-duplex synchronous transmission with dedicated Chip Select (CS) per peripheral.",
            "Energy Harvesting in WSN: Piezoelectric vibration scavengers, thermoelectric generators, and micro solar cells.",
            "Piezoresistive Gauge Factor: $G = 1 + 2\\nu + \\frac{\\Delta \\rho / \\rho}{\\epsilon}$; Silicon gauge factor ($G \\approx 100-150$) far exceeds metals ($G \\approx 2$).",
            "Exam Tip: In MEMS diagrams, clearly show fixed electrodes, movable proof mass fingers, and anchor points."
        ]
    },

    # -------------------------------------------------------------
    # ELECTRICAL MACHINES (INDUCTION, SYNCHRONOUS, DC TESTING)
    # -------------------------------------------------------------
    "btech-machines: induction machines": {
        "highlights": [
            "Production of Rotating Magnetic Field (RMF): Three-phase balanced currents displaced by $120^\\circ$ through spatial $120^\\circ$ stator windings generate constant magnitude magnetic field $B_{net} = \\frac{3}{2} B_m$ rotating at synchronous speed $N_s = \\frac{120 f}{P}$.",
            "Rotor Slip Concept: Rotor must rotate at speed $N_r < N_s$ to maintain flux cutting; Fractional slip $s = \\frac{N_s - N_r}{N_s}$; Rotor induced frequency $f_r = s f$; At standstill ($N_r = 0$), $s = 1$; At synchronous speed, $s = 0$ (zero torque).",
            "Rotor Equivalent Circuit: Rotor induced EMF $E_{2s} = s E_2$; Rotor leakage reactance $X_{2s} = s X_2$; Dividing rotor impedance by slip transforms rotor circuit to stator frequency with variable load resistance $R_2\\left(\\frac{1-s}{s}\\right)$ representing converted mechanical power.",
            "Torque-Slip Characteristic Equation: Electromagnetic torque $T = \\frac{3}{2\\pi N_s/60} \\frac{V_1^2 \\frac{R_2}{s}}{\\left(R_1 + \\frac{R_2}{s}\\right)^2 + (X_1 + X_2)^2}$; Low slip region is linear ($T \\propto s$), high slip region is inverse ($T \\propto 1/s$).",
            "Maximum Breakdown Torque: Occurs at critical slip $s_m = \\frac{R_2}{\\sqrt{R_1^2 + (X_1 + X_2)^2}} \\approx \\frac{R_2}{X_1 + X_2}$; Peak torque $T_{max} \\approx \\frac{3}{2\\omega_s} \\frac{V_1^2}{2(X_1 + X_2)}$ is independent of rotor resistance $R_2$, but slip at which peak occurs is directly proportional to $R_2$.",
            "Squirrel Cage vs Wound Rotor Motors: Squirrel cage has copper/aluminum bars shorted by end rings, rugged and maintenance-free; Slip ring wound rotor allows insertion of external external resistance for high starting torque and speed regulation.",
            "Starting Methods for Induction Motors: Direct-On-Line (DOL, high starting current $5-7 I_{fl}$), Star-Delta starter (reduces starting current and torque to $1/3$), Autotransformer starter, and modern Variable Frequency Drive (VFD) soft starters.",
            "Speed Control of Three-Phase Induction Motors: Stator voltage control ($T \\propto V^2$), Pole changing method, Rotor resistance control (wound rotor only), and $V/f$ control (maintains constant air-gap flux below base speed).",
            "Circle Diagram Evaluation: Graphical determination of motor performance (efficiency, power factor, slip, maximum torque) constructed from No-Load test and Blocked-Rotor test data.",
            "University Examination Strategy: Draw complete equivalent circuit referred to stator, derive condition for maximum torque by differentiating torque with respect to slip, and sketch complete torque-speed curve across motoring, generating ($s < 0$), and braking ($s > 1$) regions."
        ],
        "keyPoints": [
            "Synchronous Speed Formula: $N_s = \\frac{120 f}{P}$ RPM.",
            "Rotor Slip Formula: $s = \\frac{N_s - N}{N_s}$.",
            "Rotor Frequency: $f_r = s f$.",
            "Condition for Maximum Torque: $s_{max} = \\frac{R_2}{\\sqrt{R_1^2 + (X_1 + X_2)^2}}$.",
            "Maximum Torque Invariance: $T_{max}$ magnitude is strictly independent of rotor resistance $R_2$.",
            "Mechanical Power Developed: $P_m = 3 I_2^2 R_2 \\left(\\frac{1 - s}{s}\\right) = (1 - s) P_g$.",
            "Rotor Copper Loss: $P_{cu} = s P_g$; Fundamental ratio $P_g : P_{cu} : P_m = 1 : s : (1 - s)$.",
            "Star-Delta Current Reduction: $I_{\\text{start, Y}} = \\frac{1}{3} I_{\\text{start, }\\Delta}$.",
            "Constant V/f Ratio: Preserves maximum torque capacity without magnetic core saturation.",
            "Exam Scoring Tip: Always show the power flow diagram: Stator Input $\\to$ Stator Cu/Core Loss $\\to$ Air-gap Power $P_g \\to$ Rotor Cu Loss $s P_g \\to$ Mechanical Gross Power $(1-s)P_g \\to$ Friction Loss $\\to$ Shaft Output."
        ]
    },
    "btech-machines: synchronous machines": {
        "highlights": [
            "Synchronous Alternator Working Principle: Constant DC excitation on rotor field windings; Rotor rotated by prime mover at synchronous speed $N_s$; Cuts stationary three-phase armature stator windings, inducing balanced sinusoidal AC EMF.",
            "Generated EMF Equation: Induced phase voltage $E_{ph} = 4.44 \\cdot K_c \\cdot K_d \\cdot f \\cdot \\phi \\cdot T_{ph}$; Pitch factor $K_c = \\cos(\\alpha/2)$ accounts for short-pitch chording; Distribution factor $K_d = \\frac{\\sin(m\\beta/2)}{m\\sin(\\beta/2)}$ accounts for distributed slots.",
            "Armature Reaction in Alternators: Distortion and alteration of main field flux by armature current; Pure resistive load ($pf = 1$) produces cross-magnetizing effect; Pure inductive load ($pf = 0$ lagging) produces purely demagnetizing effect; Pure capacitive load ($pf = 0$ leading) produces purely magnetizing effect.",
            "Synchronous Impedance & Voltage Regulation: Synchronous impedance $Z_s = \\sqrt{R_a^2 + X_s^2}$ where synchronous reactance $X_s = X_l + X_a$; Voltage regulation $\\%VR = \\frac{|E_0| - |V|}{|V|} \\times 100\\%$; Positive for lagging PF, zero or negative for leading PF.",
            "Methods of Determining Voltage Regulation: Synchronous Impedance (EMF) method (pessimistic, yields high regulation), Ampere-Turn (MMF) method (optimistic), and Zero Power Factor (ZPF / Potier Triangle) method (most accurate, separates leakage reactance and armature reaction).",
            "Salient Pole vs Cylindrical Rotor Theory: Cylindrical rotor has uniform air gap (single $X_s$); Salient pole rotor has non-uniform air gap, modeled via Blondel's Two-Reaction Theory dividing armature current into direct-axis component $I_d$ and quadrature-axis component $I_q$ ($X_d > X_q$).",
            "Power-Angle Characteristic and Reluctance Torque: Power delivered $P = \\frac{E V}{X_d}\\sin\\delta + \\frac{V^2(X_d - X_q)}{2 X_d X_q}\\sin(2\\delta)$; Second term represents reluctance torque enabling operation even with excitation failure.",
            "Parallel Operation & Synchronization: Conditions for paralleling alternator to infinite bus: Voltage equality, frequency equality, and phase sequence matching; Verified via dark lamp method or rotary synchroscope.",
            "Synchronous Motor V-Curves & Inverted V-Curves: Plots armature current $I_a$ vs field excitation current $I_f$ at constant shaft load; Unity power factor occurs at minimum $I_a$; Over-excitation operates at leading power factor (Synchronous Condenser for grid PF correction).",
            "University Examination Strategy: Draw phasor diagrams for lagging, unity, and leading power factors, state the Potier triangle construction steps, and solve numerical problems on voltage regulation."
        ],
        "keyPoints": [
            "EMF Equation: $E_{ph} = 4.44 K_c K_d f \\phi T_{ph}$.",
            "Pitch Factor: $K_c = \\cos\\left(\\frac{\\alpha}{2}\\right)$, where $\\alpha$ is chording angle.",
            "Distribution Factor: $K_d = \\frac{\\sin(m\\beta/2)}{m\\sin(\\beta/2)}$, where $m$ is slots/pole/phase.",
            "Armature Reaction Summary: Lagging PF $\\to$ Demagnetizing; Leading PF $\\to$ Magnetizing; Unity PF $\\to$ Cross-magnetizing.",
            "Synchronous Impedance: $Z_s = \\left.\\frac{V_{oc}}{I_{sc}}\\right|_{I_f = \\text{constant}}$.",
            "Voltage Regulation Formula: $\\%VR = \\frac{E_0 - V}{V} \\times 100\\%$.",
            "Two-Reaction Power Formula: $P = \\frac{E V}{X_d}\\sin\\delta + \\frac{V^2(X_d - X_q)}{2 X_d X_q}\\sin(2\\delta)$.",
            "Synchronous Motor Starting: Synchronous motor has zero starting torque; Started via damper (amortisseur) windings acting as induction cage.",
            "Hunting Phenomenon: Oscillation of rotor magnetic axis around synchronous equilibrium under sudden load changes; Suppressed by damper windings.",
            "Exam Tip: In Potier triangle problems, the horizontal base of the triangle gives the armature reaction field current $F_{ar}$, while the vertical height gives Potier leakage reactance drop $I_a X_p$."
        ]
    },
    "btech-machines: dc machines testing": {
        "highlights": [
            "Losses in DC Machines: Copper losses ($I_a^2 R_a, I_{sh}^2 R_{sh}$), Magnetic core losses (hysteresis loss $P_h = \\eta B_m^{1.6} f V$ and eddy current loss $P_e = K_e B_m^2 f^2 t^2 V$), and Mechanical losses (brush friction, bearing friction, and windage).",
            "Swinburne's Test (No-Load Test): Indirect method for evaluating efficiency of DC shunt machines; Machine run as unloaded motor at rated speed and voltage; Constant losses $W_c = V I_0 - I_{a0}^2 R_a$; Efficiency at any arbitrary load current computed without physical loading.",
            "Hopkinson's Test (Back-to-Back Regenerative Test): Full-load regenerative testing requiring two identical mechanically coupled and electrically parallel DC shunt machines; One operates as motor driving the other as generator; Grid supplies only total system losses ($P_{grid} = \\text{Total Losses}$).",
            "Retardation (Running Down) Test: Evaluates stray rotational losses ($P_{rot}$) of DC machines; Machine brought to speed, supply disconnected, and kinetic energy dissipation rate measured: $P = J \\omega \\frac{d\\omega}{dt} = \\left(\\frac{2\\pi}{60}\\right)^2 J N \\frac{dN}{dt}$; Moment of inertia $J$ found via flywheel electrical test.",
            "Field's Test for Series Motors: Mechanical coupling of two identical DC series machines; One runs as motor, driving other as separately excited generator; Used because series motor cannot run unloaded without dangerous overspeeding.",
            "Brake Test (Direct Loading): Direct measurement of output torque via friction belt and spring balances: $T = (S_1 - S_2) R g$; Output power $P_{out} = \\frac{2\\pi N T}{60}$; Practical only for fractional horsepower machines due to severe heat dissipation.",
            "Condition for Maximum Efficiency: Differentiating efficiency $\\eta = \\frac{V I - I^2 R_a - W_c}{V I}$ yields condition that variable copper losses must equal constant losses: $I_a^2 R_a = W_c$.",
            "Armature Reaction & Commutation in DC Machines: Cross-magnetization distorts main flux and shifts magnetic neutral axis (MNA); Reactance voltage $L \\frac{di}{dt}$ causes sparking at brushes; Neutralized by interpoles (commutating poles) and compensating windings.",
            "Speed Control of DC Shunt Motors: Armature resistance control (rheostatic, below base speed, inefficient), Field flux control (rheostat in shunt field, above base speed, constant power mode), and Ward-Leonard system (smooth wide-range bidirectional control).",
            "University Examination Strategy: Draw complete connection diagrams for Swinburne's and Hopkinson's tests, show derivations for calculating motor and generator efficiencies, and list advantages of regenerative testing."
        ],
        "keyPoints": [
            "Condition for Maximum Efficiency: Variable Loss = Constant Loss ($I_a^2 R_a = W_c$).",
            "Load Current at Peak Efficiency: $I_{a, max} = \\sqrt{\\frac{W_c}{R_a}}$.",
            "Swinburne Constant Loss: $W_c = V I_0 - I_{a0}^2 R_a$.",
            "Hopkinson's Grid Power: Power drawn from supply equals strictly the total losses of both motor and generator.",
            "Retardation Power Equation: $P_{\\text{stray}} = \\frac{2\\pi^2}{900} J N \\frac{dN}{dt}$.",
            "Hysteresis Loss Formula: $P_h = \\eta B_m^{1.6} f V$ (Steinmetz formula).",
            "Eddy Current Loss: $P_e = K_e B_m^2 f^2 t^2 V$ (minimized by thin silicon steel laminations).",
            "Interpoles Connection: Connected strictly in series with armature so commutating flux is proportional to load current.",
            "Series Motor Danger: Running a DC series motor on no-load produces infinite theoretical speed ($N \\propto 1/\\phi \\to \\infty$), leading to catastrophic centrifugal destruction.",
            "Exam Scoring Tip: In Swinburne's test, note that stray load losses are neglected and field flux is assumed constant, so calculated efficiency is slightly higher than actual full-load value."
        ]
    },

    # -------------------------------------------------------------
    # ELECTROMAGNETIC WAVES & TRANSMISSION
    # -------------------------------------------------------------
    "btech-emf: wave propagation": {
        "highlights": [
            "Wave Equations Derived from Maxwell's Equations: Taking curl of Maxwell's curl equations: $\\nabla^2 \\vec{E} - \\mu\\epsilon \\frac{\\partial^2 \\vec{E}}{\\partial t^2} - \\mu\\sigma \\frac{\\partial \\vec{E}}{\\partial t} = 0$; In lossless dielectric ($\\sigma = 0$): $\\nabla^2 \\vec{E} = \\mu\\epsilon \\frac{\\partial^2 \\vec{E}}{\\partial t^2}$ with wave velocity $v = \\frac{1}{\\sqrt{\\mu\\epsilon}}$.",
            "Intrinsic Wave Impedance: Ratio of transverse electric to magnetic field: $\\eta = \\frac{E_x}{H_y} = \\sqrt{\\frac{j\\omega\\mu}{\\sigma + j\\omega\\epsilon}}$; In free space, $\\eta_0 = \\sqrt{\\frac{\\mu_0}{\\epsilon_0}} \\approx 377\\,\\Omega = 120\\pi\\,\\Omega$.",
            "Propagation Constant & Complex Parameters: $\\gamma = \\alpha + j\\beta = \\sqrt{j\\omega\\mu(\\sigma + j\\omega\\epsilon)}$; Attenuation constant $\\alpha$ (Nepers/m) dictates spatial signal decay; Phase constant $\\beta = \\frac{2\\pi}{\\lambda} = \\frac{\\omega}{v}$ (rad/m) dictates phase advance.",
            "EM Wave Propagation in Lossless Dielectrics: Conductivity $\\sigma = 0$; Attenuation $\\alpha = 0$; Phase constant $\\beta = \\omega\\sqrt{\\mu\\epsilon}$; Intrinsic impedance $\\eta = \\sqrt{\\mu/\\epsilon}$ is purely real; $\\vec{E}$ and $\\vec{H}$ oscillate strictly in phase.",
            "EM Wave Propagation in Good Conductors: Condition $\\frac{\\sigma}{\\omega\\epsilon} \\gg 1$; Attenuation and phase constants equal: $\\alpha = \\beta = \\sqrt{\\frac{\\omega\\mu\\sigma}{2}} = \\sqrt{\\pi f \\mu \\sigma}$; Magnetic field lags electric field by $45^\\circ$ ($\neta = \\sqrt{\\frac{\\omega\\mu}{\\sigma}} e^{j\\pi/4}$).",
            "Skin Depth (Depth of Penetration): Distance over which field amplitude decays to $1/e$ ($\\approx 36.8\\%$) of its surface value: $\\delta = \\frac{1}{\\alpha} = \\sqrt{\\frac{2}{\\omega\\mu\\sigma}} = \\frac{1}{\\sqrt{\\pi f \\mu \\sigma}}$; Decreases at high frequencies, confining currents to conductor perimeter.",
            "Poynting Vector & Energy Flow: Instantaneous Poynting vector $\\vec{S} = \\vec{E} \\times \\vec{H}$ ($\text{W/m}^2$); Time-average power flux density $\\vec{S}_{avg} = \\frac{1}{2}\\text{Re}[\\vec{E} \\times \\vec{H}^*] = \\frac{|E_0|^2}{2\\eta}\\hat{a}_k$.",
            "Plane Wave Reflection at Normal Incidence: Boundary boundary at $z = 0$; Reflection coefficient $\\Gamma = \\frac{\\eta_2 - \\eta_1}{\\eta_2 + \\eta_1}$; Transmission coefficient $\\tau = \\frac{2\\eta_2}{\\eta_2 + \\eta_1}$; Satisfies $1 + \\Gamma = \\tau$.",
            "Standing Wave Ratio (SWR): Standing wave formed by interference of incident and reflected waves: $S = \\frac{E_{max}}{E_{min}} = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$; For perfect reflection from conductor ($\\Gamma = -1$), $S = \\infty$.",
            "University Examination Strategy: State boundary conditions at interfaces ($E_{1t} = E_{2t}, H_{1t} = H_{2t}$ for dielectric), calculate skin depth and intrinsic impedance, and sketch standing wave envelopes."
        ],
        "keyPoints": [
            "Wave Velocity in Medium: $v = \\frac{c}{\\sqrt{\\mu_r \\epsilon_r}}$.",
            "Free Space Impedance: $\\eta_0 = \\sqrt{\\frac{\\mu_0}{\\epsilon_0}} \\approx 376.73\\,\\Omega \\approx 120\\pi\\,\\Omega$.",
            "Loss Tangent Metric: $\\tan\\theta = \\frac{\\sigma}{\\omega\\epsilon}$; Lossless if $\\ll 1$, Good conductor if $\\gg 1$.",
            "Skin Depth Formula: $\\delta = \\frac{1}{\\sqrt{\\pi f \\mu \\sigma}}$.",
            "Good Conductor Attenuation: $\\alpha = \\sqrt{\\pi f \\mu \\sigma} = \\frac{1}{\\delta}$.",
            "Poynting Vector: $\\vec{S}_{avg} = \\frac{1}{2}\\text{Re}[\\vec{E} \\times \\vec{H}^*]$.",
            "Reflection Coefficient: $\\Gamma = \\frac{\\eta_2 - \\eta_1}{\\eta_2 + \\eta_1}$.",
            "Transmission Coefficient: $\\tau = \\frac{2\\eta_2}{\\eta_2 + \\eta_1} = 1 + \\Gamma$.",
            "Voltage Standing Wave Ratio (VSWR): $S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$; Bounds: $1 \\le S \\le \\infty$.",
            "Exam Scoring Tip: For normal incidence on a perfect electric conductor (PEC, $\\eta_2 = 0$), $\\Gamma = -1$ and $\\tau = 0$, forming a pure standing wave with nodes on the conductor surface."
        ]
    },

    # -------------------------------------------------------------
    # DIGITAL LOGIC DESIGN (NUMBER SYSTEMS & BOOLEAN ALGEBRA)
    # -------------------------------------------------------------
    "btech-dld: number systems & codes": {
        "highlights": [
            "Positional Number Representation: Radix-$r$ representation $N = \\sum_{i=-m}^{n-1} d_i r^i$; Conversions between Binary ($r=2$), Octal ($r=8$), Decimal ($r=10$), and Hexadecimal ($r=16$) via powers of base and grouping (octal 3-bit, hex 4-bit).",
            "Complements of Radix: $(r-1)$'s complement and $r$'s complement; 1's complement formed by bit inversion; 2's complement formed by 1's complement $+ 1$; In 2's complement $n$-bit system, numbers span range $-2^{n-1}$ to $+2^{n-1} - 1$.",
            "Binary Arithmetic and Overflow: Addition and subtraction performed via 2's complement addition; Arithmetic overflow detected when carry into sign bit differs from carry out of sign bit ($V = C_{in} \\oplus C_{out}$).",
            "Binary Coded Decimal (BCD): 8421 BCD encodes each decimal digit into 4 bits; Invalid states 1010 to 1111 (10 to 15); BCD addition requires correction by adding binary $0110_2$ ($6_{10}$) whenever sum exceeds 9 or produces digit carry.",
            "Excess-3 Code and Self-Complementing Property: Formed by adding $0011_2$ ($3_{10}$) to BCD; Self-complementing because 9's complement of decimal digit corresponds directly to 1's complement of its Excess-3 code.",
            "Reflected Gray Code: Unit-distance code where successive codewords differ in strictly 1 bit position; Binary to Gray conversion: $G_n = B_n$ and $G_i = B_{i+1} \\oplus B_i$; Gray to Binary conversion: $B_n = G_n$ and $B_i = B_{i+1} \\oplus G_i$.",
            "Error-Detecting Parity Codes: Simple parity appends single bit to make total count of 1s even or odd; Detects all single-bit transmission errors but fails on double-bit errors.",
            "Hamming Error-Correcting Code: Inserts parity check bits at power-of-2 positions ($1, 2, 4, 8, \\dots$); Parity bit coverage defined by binary representation of bit positions; Single Error Correction (SEC) syndromic decoding identifies exact faulty bit position.",
            "Alpha-numeric Codes: ASCII (7-bit, 128 characters), Extended ASCII (8-bit), and Unicode UTF-8 (variable byte representation for global international character sets).",
            "University Examination Strategy: Perform signed 2's complement addition step-by-step, indicate carry out, evaluate overflow condition $V$, and construct Hamming code generation and syndrome correction tables."
        ],
        "keyPoints": [
            "2's Complement Range: For $n$ bits, range is $[-2^{n-1}, 2^{n-1} - 1]$.",
            "2's Complement Negation: Invert all bits and add 1 (or leave least significant 1 and trailing zeros unchanged, invert remaining bits).",
            "Overflow Flag Formula: $V = C_{n-1} \\oplus C_n$.",
            "BCD Correction Rule: Add $0110_2$ ($6$) if sum $> 1001_2$ ($9$) or if auxiliary carry $AC = 1$.",
            "Excess-3 Code Rule: $\\text{Excess-3} = \\text{BCD} + 0011_2$.",
            "Binary to Gray: $G_3 = B_3, \\; G_2 = B_3 \\oplus B_2, \\; G_1 = B_2 \\oplus B_1, \\; G_0 = B_1 \\oplus B_0$.",
            "Hamming Parity Bit Formula: Number of parity bits $p$ for $m$ data bits must satisfy $2^p \\ge m + p + 1$.",
            "Hamming Syndrome Evaluation: If syndrome bits $S_3 S_2 S_1 = 000$, no error; otherwise integer value indicates exact faulty bit index.",
            "Alphanumeric ASCII Range: '0'-'9' is $30_{16}-39_{16}$, 'A'-'Z' is $41_{16}-5A_{16}$, 'a'-'z' is $61_{16}-7A_{16}$.",
            "Exam Scoring Tip: In subtraction using 2's complement, end-around carry is discarded; its presence indicates the result is positive, while its absence indicates the result is negative and in 2's complement form."
        ]
    },
    "btech-dld: boolean algebra": {
        "highlights": [
            "Axiomatic Foundations of Boolean Algebra: Huntington's postulates: Closure, Commutativity ($A + B = B + A, A \\cdot B = B \\cdot A$), Associativity, Distributivity ($A(B + C) = AB + AC$ and $A + BC = (A + B)(A + C)$), Identity ($A + 0 = A, A \\cdot 1 = A$), Complementarity ($A + A' = 1, A \\cdot A' = 0$).",
            "Fundamental Theorems of Boolean Algebra: Idempotence ($A + A = A, A \\cdot A = A$), Boundedness ($A + 1 = 1, A \\cdot 0 = 0$), Involution ($(A')' = A$), Absorption laws ($A + AB = A, A(A + B) = A$), and Consensus theorem ($AB + A'C + BC = AB + A'C$).",
            "De Morgan's Laws: Duality between conjunction and disjunction: $(A + B)' = A' \\cdot B'$ and $(A \\cdot B)' = A' + B'$; Generalized to $n$ variables: $\\overline{\\sum X_i} = \\prod \\overline{X_i}$ and $\\overline{\\prod X_i} = \\sum \\overline{X_i}$.",
            "Duality Principle: Any valid Boolean identity remains valid if AND ($\\cdot$) and OR ($+$) operators are interchanged, and 0 and 1 are interchanged, preserving precedence.",
            "Canonical SOP and POS Forms: Sum of Minterms (Canonical SOP) where each minterm $m_i$ contains all literal variables in complemented or uncomplemented form; Product of Maxterms (Canonical POS) where each maxterm $M_i$ combines all literals.",
            "Karnaugh Map (K-Map) Minimization (2, 3, 4, and 5 Variables): Graphical minimization utilizing Gray code adjacency on grid; Cells group into power-of-two subcubes ($1, 2, 4, 8, 16$) to eliminate variables and determine Prime Implicants (PI).",
            "Essential Prime Implicants (EPI): Prime implicant containing at least one minterm (1-cell) not covered by any other prime implicant; All EPIs must appear in the minimal sum-of-products expression.",
            "Don't Care Conditions: Unspecified output states (denoted $d$ or $X$) corresponding to invalid input combinations (e.g. invalid BCD codes); Grouped as 1s during K-map optimization if they enlarge groupings, ignored otherwise.",
            "Universal Logic Gates (NAND and NOR): NAND and NOR gates can implement all three fundamental operations (NOT, AND, OR); Minimal gate implementations obtained by double inversion and applying De Morgan's theorem.",
            "University Examination Strategy: Plot 1s, 0s, and don't cares ($X$) clearly on K-map grid with Gray code coordinates ($00, 01, 11, 10$), circle all prime implicant groups with distinctive outlines, and identify essential prime implicants explicitly."
        ],
        "keyPoints": [
            "Boolean Distributive Law: $A + BC = (A + B)(A + C)$ (unique to Boolean algebra, invalid in ordinary algebra).",
            "Consensus Theorem: $AB + A'C + BC = AB + A'C$ ($BC$ is redundant consensus term).",
            "De Morgan's SOP Form: $\\overline{A B} = \\bar{A} + \\bar{B}$.",
            "De Morgan's POS Form: $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$.",
            "Minterm vs Maxterm Relation: $m_i = \\overline{M_i}$; Complement of $\\sum m(1, 2, 4)$ is $\\sum m(0, 3, 5, 6, 7) = \\prod M(1, 2, 4)$.",
            "K-Map Adjacency: Based on Gray code sequence $00 \\to 01 \\to 11 \\to 10$ so adjacent cells differ by strictly one variable.",
            "Universal NAND NOT: $\\bar{A} = (A \\text{ NAND } A)$.",
            "Universal NOR NOT: $\\bar{A} = (A \\text{ NOR } A)$.",
            "Quine-McCluskey Method: Tabular algorithmic minimization method ideal for $>5$ variables or automated computer synthesis.",
            "Exam Scoring Tip: Never leave duplicate or non-essential prime implicants in your final expression; verify that every minterm is covered by the minimal set."
        ]
    }
}
