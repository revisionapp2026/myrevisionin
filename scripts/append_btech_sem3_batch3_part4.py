import json, os

with open('scripts/sem3_btech_batch3_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    data[f"{sub}:::{num}"] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 14. SENSORS & TRANSDUCERS (B.Tech)
# =========================================================================
add("Sensors & Transducers", 1, "Characteristics & Errors", [
    "Sensor and Transducer Taxonomies: Functional distinction: Sensor (detects physical stimulus and converts to measurable signal) vs Transducer (converts energy from one domain to another, typically electrical); Primary vs secondary transducers; Active (self-generating, e.g. thermocouple, piezoelectric) vs Passive (requires external excitation, e.g. strain gauge, LVDT); Analog vs digital transducers.",
    "Static Performance Characteristics: (1) Accuracy (closeness to true value) and Precision (repeatability / repeatability of measurements); (2) Sensitivity ($S = \\Delta q_o / \\Delta q_i$, slope of static calibration curve); (3) Linearity (maximum deviation from best-fit straight line); (4) Resolution (smallest detectable change in input); (5) Threshold; (6) Hysteresis (difference in output for ascending vs descending inputs); (7) Dead zone / Dead band; (8) Drift (zero drift, span drift, zonal drift).",
    "Dynamic Performance Characteristics: Response to time-varying inputs; Mathematical modeling via linear ordinary differential equations: $a_n \\frac{d^n q_o}{dt^n} + \\dots + a_1 \\frac{dq_o}{dt} + a_0 q_o = b_m \\frac{d^m q_i}{dt^m} + \\dots + b_0 q_i$; Operational classification: Zero-order, First-order, and Second-order instrument systems.",
    "Zero-Order Systems: Output is directly proportional to input at all frequencies with zero time lag: $q_o(t) = K q_i(t)$; Static sensitivity $K$; Ideal potentiometer displacement sensor.",
    "First-Order Systems: Governed by differential equation: $\\tau \\frac{dq_o}{dt} + q_o = K q_i$; Time constant $\\tau$; Step response: $q_o(t) = K Q_0 (1 - e^{-t/\\tau})$; Frequency response: $M(\\omega) = \\frac{K}{\\sqrt{1 + (\\omega\\tau)^2}}$, phase lag $\\phi(\\omega) = -\\tan^{-1}(\\omega\\tau)$; Dynamic error: $e(t) = q_i(t) - q_o(t)/K$; Mercury thermometer, bare thermocouple.",
    "Second-Order Systems: Governed by: $\\frac{1}{\\omega_n^2} \\frac{d^2 q_o}{dt^2} + \\frac{2\\zeta}{\\omega_n} \\frac{dq_o}{dt} + q_o = K q_i$; Undamped natural frequency $\\omega_n$ and Damping ratio $\\zeta$; Step response regimes (Overdamped $\\zeta > 1$, Critically damped $\\zeta = 1$, Underdamped $\\zeta < 1$); Dynamic specifications: Rise time $t_r$, Settling time $t_s$, Maximum peak overshoot $M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}}$; Accelerometers, pressure transducers.",
    "Measurement Errors and Classification: (1) Gross Errors (human blunders, improper instrument setup, parallax errors; eliminated by procedural discipline); (2) Systematic / Deterministic Errors (instrumental calibration offsets, environmental temperature/humidity effects, loading errors; corrected via calibration curves); (3) Random / Residual Errors (stochastic electrical thermal noise, structural vibrations; analyzed using statistical methods).",
    "Statistical Error Analysis: Sample mean $\\bar{x} = \\frac{1}{N}\\sum x_i$; Residual deviation $d_i = x_i - \\bar{x}$; Variance $s^2 = \\frac{1}{N-1}\\sum d_i^2$; Standard deviation $s$; Gaussian normal distribution curve; Probable error $r = 0.6745 s$; Chauvenet's criterion for rejecting statistical outlier data points.",
    "Uncertainty Propagation in Measurement Systems: Kline and McClintock method for multi-variable experimental uncertainty; Result $R = f(x_1, x_2, \\dots, x_n)$ with parameter uncertainties $w_1, w_2, \\dots, w_n$; Total root-sum-square uncertainty: $w_R = \\sqrt{\\left(\\frac{\\partial R}{\\partial x_1} w_1\\right)^2 + \\left(\\frac{\\partial R}{\\partial x_2} w_2\\right)^2 + \\dots + \\left(\\frac{\\partial R}{\\partial x_n} w_n\\right)^2}$.",
    "University Examination Strategy: Differentiate accuracy vs precision with target diagrams, derive the step and frequency response of first-order thermal sensors, calculate dynamic error and time lag, and apply uncertainty propagation formulas to compound electrical power measurements."
], [
    "Static Sensitivity Formula: $S = \\frac{d q_o}{d q_i}$.",
    "First-Order Step Response: $q_o(t) = K(1 - e^{-t/\\tau})$.",
    "First-Order Time Constant $\\tau$: Time required for output to reach $63.2\\%$ of its final steady-state value.",
    "Second-Order Damped Frequency: $\\omega_d = \\omega_n \\sqrt{1 - \\zeta^2}$.",
    "Optimal Instrument Damping: $\\zeta \\approx 0.6$ to $0.7$ for fastest response with minimal overshoot ($<5\\%$).",
    "Standard Deviation Formula: $s = \\sqrt{\\frac{\\sum_{i=1}^N (x_i - \\bar{x})^2}{N - 1}}$.",
    "Probable Error Relation: $r = 0.6745 \\times s$ for Gaussian distribution.",
    "RSS Uncertainty Propagation: $w_R = \\sqrt{\\sum \\left(\\frac{\\partial R}{\\partial x_i} w_i\\right)^2}$.",
    "Zero Drift vs Span Drift: Zero drift shifts baseline parallelly; span drift alters the slope of the calibration curve.",
    "Exam Gold Tip: Never confuse accuracy with precision: high precision means repeatable clustered readings, but they may be completely inaccurate if systematic zero error is present."
])

add("Sensors & Transducers", 2, "Resistive & Capacitive Transducers", [
    "Potentiometric Resistive Transducers: Translatory and rotary wire-wound, cermet, and conductive plastic potentiometers; Loading error analysis: output voltage under meter load resistance $R_L$: $\\frac{V_o}{V_s} = \\frac{k}{1 + \\frac{R_p}{R_L} k (1 - k)}$; Non-linearity minimized by requiring $R_L \\gg R_p$ ($R_L / R_p > 100$); Electrical noise and resolution limits.",
    "Strain Gauges & Piezoresistive Effect: Piezoresistive effect in metallic conductors and semiconductors; Electrical resistance change with axial strain: $\\frac{\\Delta R}{R} = \\frac{\\Delta L}{L} - \\frac{\\Delta A}{A} + \\frac{\\Delta \\rho}{\\rho} = \\epsilon (1 + 2\\nu) + \\frac{\\Delta \\rho / \\rho}{\\epsilon}$; Poisson's ratio $\\nu$; Gauge Factor $GF = \\frac{\\Delta R / R}{\\epsilon} = 1 + 2\\nu + \\frac{\\Delta \\rho / \\rho}{\\epsilon}$.",
    "Metallic vs Semiconductor Strain Gauges: Metallic bonded foil gauges ($GF \\approx 2.0-2.2$, low temperature coefficient, highly linear, low sensitivity); Semiconductor / Piezoresistive silicon gauges ($GF \\approx 100-200$, extreme sensitivity, pronounced non-linearity, high temperature drift requiring active compensation).",
    "Strain Gauge Bridge Topologies: Quarter-bridge (single active gauge, output $V_o = \\frac{V_s}{4} GF \\cdot \\epsilon$, vulnerable to lead wire and temperature drift); Half-bridge (two active gauges in push-pull tension-compression, doubles sensitivity, self-compensates temperature); Full-bridge (four active gauges, quadruples sensitivity $V_o = V_s GF \\cdot \\epsilon$, eliminates non-linearity and bending strains).",
    "Resistance Temperature Detectors (RTD): Positive temperature coefficient of metals; Callendar-Van Dusen equation: $R(T) = R_0 [1 + A T + B T^2 + C(T - 100) T^3]$; Industrial Platinum Pt100 ($100\\ \\Omega$ at $0^\\circ\\text{C}, \\alpha = 0.00385\\ \\Omega/\\Omega/^\\circ\\text{C}$); Two-wire, three-wire (lead compensation), and four-wire Kelvin bridge configurations.",
    "Thermistors (Thermally Sensitive Resistors): Sintered metal oxides (Mn, Ni, Co, Fe); Negative Temperature Coefficient (NTC) characteristics: $R(T) = R_0 e^{\\beta (1/T - 1/T_0)}$; High temperature sensitivity ($-3\\% \\text{ to } -5\\% / ^\\circ\\text{C}$), compact bead packaging, fast response; Linearization circuits; Positive Temperature Coefficient (PTC) switching thermistors.",
    "Capacitive Transducer Fundamentals: Parallel plate capacitance $C = \\frac{\\epsilon_0 \\epsilon_r A}{d}$; Three transduction modes: (1) Variation of plate separation $d$; (2) Variation of plate overlapping area $A$; (3) Variation of dielectric medium permittivity $\\epsilon_r$.",
    "Displacement Sensing via Variable Plate Separation: Capacitance inverse relation $C \\propto 1/d$ produces hyperbolic non-linearity; Sensitivity $S = \\frac{dC}{dd} = -\\frac{\\epsilon A}{d^2}$; Linearization via Differential / Push-Pull Capacitive Transducers: differential output $\\Delta C = C_1 - C_2 = 2 C_0 \\frac{\\Delta d}{d}$, perfectly linear for small displacements; High input impedance AC bridge readout.",
    "Displacement Sensing via Variable Area & Dielectric: Angular displacement rotary capacitor ($C \\propto \\theta$, linear); Liquid level sensing using coaxial cylindrical capacitor with rising dielectric liquid level ($C(h) = \\frac{2\\pi \\epsilon_0 [\\epsilon_{air}(L-h) + \\epsilon_{liquid} h]}{\\ln(r_2/r_1)}$).",
    "University Examination Strategy: Derive the gauge factor equation for metal strain gauges including Poisson's ratio, design temperature-compensated 3-wire RTD bridge circuits, derive the linearity of push-pull differential capacitive transducers, and calculate loading errors in potentiometers."
], [
    "Metallic Gauge Factor Formula: $GF = 1 + 2\\nu + \\frac{\\Delta\\rho/\\rho}{\\epsilon} \\approx 2.0$.",
    "Full-Bridge Strain Output: $V_o = V_{supply} \\times GF \\times \\epsilon$ (four active arms).",
    "Pt100 Alpha Coefficient: $\\alpha = 0.00385\\ ^\\circ\\text{C}^{-1}$ ($R_{100} = 138.5\\ \\Omega$).",
    "NTC Thermistor Characteristic: $R(T) = R_0 \\exp\\left[\\beta\\left(\\frac{1}{T} - \\frac{1}{T_0}\\right)\\right]$ (temperatures in Kelvin).",
    "Three-Wire RTD Advantage: Eliminates identical lead wire resistance drops in balanced Wheatstone bridges.",
    "Parallel Plate Capacitance: $C = \\frac{\\epsilon_0 \\epsilon_r A}{d}$.",
    "Differential Capacitance Linearity: $\\frac{C_1 - C_2}{C_1 + C_2} = \\frac{\\Delta d}{d_0}$ (strictly linear output).",
    "Capacitive Sensitivity: $S_d = -\\frac{\\epsilon A}{d^2}$ (diverges rapidly as air gap approaches zero).",
    "Liquid Level Capacitive Equation: $C(h) = C_0 + \\frac{2\\pi \\epsilon_0 (\\epsilon_r - 1) h}{\\ln(r_2/r_1)}$.",
    "Exam Gold Tip: Always specify temperatures in Kelvin ($K = ^\\circ\\text{C} + 273.15$) when applying thermistor exponential $\\beta$ equations."
])

add("Sensors & Transducers", 3, "Inductive & Piezoelectric Transducers", [
    "Inductive Transducer Operating Principles: Self-inductance variations ($L = \\frac{N^2}{\\mathcal{R}} = \\frac{N^2 \\mu A}{l}$); Mutual inductance variations ($M = k\\sqrt{L_1 L_2}$); Eddy current proximity sensors (high-frequency RF oscillator field induces eddy currents in conductive target, damping oscillations).",
    "Linear Variable Differential Transformer (LVDT): Primary coil excited by AC carrier ($1-10\\text{ kHz}, 3-15\\text{ V}$), two symmetrical secondary coils connected in series opposition; High-permeability nickel-iron ferromagnetic core moves axially inside non-magnetic bobbin.",
    "LVDT Output Mechanics & Null Voltage: At center null position, equal and opposite secondary EMFs cancel: $E_o = E_{s1} - E_{s2} = 0$; Axial displacement $\\pm x$ produces linearly proportional AC output voltage with phase indicating direction ($0^\\circ$ or $180^\\circ$ relative to primary); Residual Null Voltage phenomenon (caused by harmonic distortion in excitation and stray inter-winding capacitance; minimized by shielding and synchronous phase-sensitive demodulation).",
    "LVDT Performance Features: High linearity over operating range ($\\pm 0.25\\%$), infinite theoretical resolution, frictionless core movement (no mechanical contact or wear), extreme mechanical ruggedness, wide temperature capability; Rotary Variable Differential Transformer (RVDT) for angular measurements ($\\pm 40^\\circ$ linear span).",
    "Synchros and Resolvers: Synchro Transmitter (TX) and Control Transformer (CT); Three-phase spatial stator windings with single-phase rotor excitation; Error detection in angular servo tracking loops; Resolvers with two orthogonal quadrature stator windings providing sine and cosine angular shaft voltages.",
    "Piezoelectric Transducer Fundamentals: Non-centrosymmetric crystalline structures; Direct piezoelectric effect (applied mechanical stress produces electric surface charge $q = d \\cdot F$); Inverse piezoelectric effect (applied electric field causes physical mechanical deformation $\\Delta x = d \\cdot V$); Piezoelectric materials: Natural single crystals (Quartz, Tourmaline), Synthetic ferroelectric ceramics (Lead Zirconate Titanate PZT, Barium Titanate $\\text{BaTiO}_3$), Polymers (PVDF).",
    "Piezoelectric Coefficients: Charge sensitivity coefficient $d$ in $\\text{C/N}$; Voltage sensitivity coefficient $g = \\frac{d}{\\epsilon} = \\frac{V/t}{F/A}$ in $\\text{V}\\cdot\\text{m/N}$; Electromechanical coupling factor $k^2 = \\frac{\\text{Mechanical energy converted}}{\\text{Electrical energy input}}$.",
    "Equivalent Circuit of Piezoelectric Transducers: Modeled as charge generator $q = d F$ in parallel with internal capacitance $C_p = \\frac{\\epsilon A}{t}$ and leakage resistance $R_p$; Open-circuit output voltage $V_o = \\frac{q}{C_p} = \\frac{d F}{\\epsilon A / t} = g \\cdot \\sigma \\cdot t$; Inability to measure purely static forces due to charge dissipation through finite load impedance.",
    "Signal Conditioning for Piezoelectric Transducers: (1) Voltage Amplifier (high input impedance FET amplifier, output heavily attenuated by cable shunt capacitance $C_c$); (2) Charge Amplifier (inverting op-amp with feedback capacitor $C_f$, output voltage $V_o = -\\frac{q}{C_f} = -\\frac{d F}{C_f}$, completely independent of cable length and cable capacitance).",
    "University Examination Strategy: Explain LVDT construction, derive series-opposition secondary voltage equations, explain the causes and suppression of residual null voltage, derive piezoelectric voltage output $V_o = g \\sigma t$, and prove why charge amplifiers eliminate cable capacitance dependencies."
], [
    "LVDT Series Opposition Output: $e_o = e_{s1} - e_{s2}$.",
    "LVDT Phase Inversion: Output phase shifts by $180^\\circ$ when passing through physical null position.",
    "Residual Null Voltage Causes: Stray magnetic saturation harmonics and inter-winding parasitic capacitances.",
    "Direct Piezoelectric Charge: $q = d \\times F = d \\times (\\sigma A)$ Coulombs.",
    "Piezoelectric Voltage Sensitivity: $g = \\frac{d}{\\epsilon_0 \\epsilon_r}$ in $\\text{V}\\cdot\\text{m/N}$.",
    "Piezoelectric Open Circuit Voltage: $V_o = g \\times \\sigma \\times t$ Volts.",
    "Static Limitation of Piezoelectrics: Incapable of DC static measurement due to finite insulation leakage discharge.",
    "Charge Amplifier Output: $V_o = -\\frac{q}{C_f} = -\\frac{d \\cdot F}{C_f}$ (strictly independent of cable capacitance $C_c$).",
    "Curie Temperature Limit: Temperature above which piezoelectric ceramics lose spontaneous polarization permanently.",
    "Exam Gold Tip: Always recommend a charge amplifier over a voltage amplifier for piezoelectric sensors because cable length variations do not affect the calibration factor."
])

add("Sensors & Transducers", 4, "Optical & Thermal Sensors", [
    "Thermoelectric Effects & Thermocouples: Seebeck Effect: closed circuit of two dissimilar metals produces thermoelectric EMF when junctions are maintained at different temperatures; Peltier Effect (reversible absorption/liberation of heat at junction carrying current); Thomson Effect (absorption/evolution of heat along continuous conductor with temperature gradient); Thermoelectric laws: Law of Intermediate Metals, Law of Intermediate Temperatures.",
    "Thermocouple Types and Cold Junction Compensation: Standard ANSI calibrations: Type K (Chromel-Alumel, $-200\\text{ to }+1250^\\circ\\text{C}, 41\\ \\mu\\text{V}/^\\circ\\text{C}$), Type J (Iron-Constantan), Type T (Copper-Constantan), Type R/S (Platinum-Rhodium, up to $1600^\\circ\\text{C}$); Cold / Reference junction compensation using ice baths, thermistor bridges, or dedicated ICs (AD595); Extension and compensating leads.",
    "Radiation Pyrometers: Non-contact high-temperature measurement; Stefan-Boltzmann radiation law: $E = \\epsilon \\sigma T^4$ (total emissive power); Planck's radiation law and Wien's displacement law ($\\lambda_{max} T = 2898\\ \\mu\\text{m}\\cdot\\text{K}$); Total radiation pyrometer vs Optical disappearing filament pyrometer (monochromatic sensing at $\\lambda = 0.65\\ \\mu\\text{m}$); Emissivity correction errors.",
    "Photoconductive Cells (Light Dependent Resistors - LDR): Cadmium Sulfide (CdS) and Cadmium Selenide (CdSe); Incident photons with energy exceeding bandgap ($h\\nu \\ge E_g$) generate electron-hole pairs, reducing bulk resistance: $R = R_0 L^{-\\alpha}$ (resistance drops from $>1\\text{ M}\\Omega$ in dark to $<1\\text{ k}\\Omega$ in sunlight); Spectral response matched to human eye; Slow response time ($10-100\\text{ ms}$).",
    "Photodiodes and Phototransistors: Reverse-biased PN junction operating in photoconductive mode; Reverse dark saturation current $I_d$; Incident photon flux generates electron-hole pairs in depletion layer, producing proportional photocurrent: $I_{ph} = R_e \\cdot P_{opt} = \\frac{\\eta q \\lambda}{h c} P_{opt}$ ($R_e$ responsivity in A/W); PIN photodiodes (wide intrinsic layer, high speed, gigahertz bandwidth) and Avalanche Photodiodes (APD, internal avalanche multiplication gain $M \\approx 100-200$).",
    "Photovoltaic Cells: Unbiased large-area PN junctions converting radiant photon energy directly into electrical energy; Open-circuit voltage $V_{oc} = \\frac{k T}{q} \\ln\\left(\\frac{I_{sc}}{I_0} + 1\\right)$; Short-circuit current $I_{sc} \\propto$ illuminance; Solar cells, optical tachometers, and optical power meters.",
    "Optical Encoders for Position Sensing: Incremental encoders (ruled optical disc with alternate transparent/opaque slits, dual quadrature optical sensors $A$ and $B$ displaced by $90^\\circ$ for bidirectional motion tracking, index pulse $Z$ for home reference); Absolute encoders (concentric tracks generating unique binary or Gray code word for each angular sector, prevents loss of position after power interruption; Gray code prevents multi-bit transition ambiguity).",
    "Fiber Optic Sensors: Intrinsic (fiber acts as sensing medium) vs Extrinsic (fiber acts as light transmission pipe to external modulator); Sensing mechanisms: Intensity modulated, Phase modulated (Mach-Zehnder and Sagnac interferometers for fiber optic gyroscopes), Wavelength modulated (Fiber Bragg Grating FBG for structural strain/temperature monitoring); Immune to electromagnetic interference (EMI), chemically inert.",
    "Infrared (IR) and Pyroelectric Sensors: Passive Infrared (PIR) motion detectors; Pyroelectric crystals (Lithium Tantalate $\\text{LiTaO}_3$, TGS) generating electric charge in response to changing infrared thermal radiation ($dq/dt = p A \\frac{dT}{dt}$); Segmented Fresnel lenses focusing moving human infrared radiation.",
    "University Examination Strategy: State thermoelectric laws and derive cold junction compensation equations, compare LDR vs photodiode vs phototransistor, explain optical disappearing filament pyrometer operating mechanisms, and compare binary vs Gray code absolute optical encoders."
], [
    "Seebeck Thermoelectric Formula: $E_{AB} = \\alpha \\Delta T + \\frac{1}{2} \\beta (\\Delta T)^2$.",
    "Law of Intermediate Metals: Inserting a third metal into thermocouple circuit causes zero net EMF change if both new junctions are at identical temperatures.",
    "Stefan-Boltzmann Radiation Law: $E = \\epsilon \\sigma T^4$ (where $\\sigma = 5.67 \\times 10^{-8}\\text{ W/m}^2\\text{K}^4$).",
    "Wien's Displacement Law: $\\lambda_{max} T = 2898\\ \\mu\\text{m}\\cdot\\text{K}$.",
    "Photodiode Responsivity: $R_e = \\frac{\\eta q \\lambda}{h c}$ A/W.",
    "Solar Cell Open Circuit Voltage: $V_{oc} = \\frac{n k T}{q}\\ln\\left(\\frac{I_{ph}}{I_0} + 1\\right)$.",
    "Gray Code Advantage: Only a single binary bit changes state between adjacent angular positions, eliminating reading glitches.",
    "Incremental Encoder Quadrature: Channel A and Channel B are spaced $90^\\circ$ apart to resolve motion direction.",
    "Fiber Bragg Grating (FBG) Reflection: $\\lambda_B = 2 n_{eff} \\Lambda$ (shifts with strain and temperature).",
    "Exam Gold Tip: Standard binary encoders produce severe false transient reading spikes at boundaries where multiple bits flip simultaneously (e.g. 0111 to 1000); always specify Gray code for absolute encoders."
])

add("Sensors & Transducers", 5, "Signal Conditioning & Smart Sensors", [
    "Signal Conditioning Architectures: Functional role: amplifies, filters, linearizes, isolates, and converts raw sensor outputs into standardized industrial signals ($0-5\\text{ V}, 0-10\\text{ V}, 4-20\\text{ mA}$); Voltage dividers, bridge circuits, active filter topologies, and isolation barriers.",
    "Instrumentation Amplifiers (In-Amp): High input impedance ($\\sim 10^{10}\\ \\Omega$), extremely high Common Mode Rejection Ratio ($CMRR > 100\\text{ dB}$), low input offset voltage drift; Three-op-amp topology: input buffer stage (two non-inverting op-amps sharing gain resistor $R_G$) followed by differential difference stage; Overall closed-loop gain: $A_v = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\frac{R_3}{R_2}$; Single external resistor $R_G$ sets gain without compromising bridge balance.",
    "Carrier Frequency Amplifiers & Demodulators: Low-noise amplification of weak low-frequency sensor signals (LVDT, variable reluctance); Modulating sensor signal onto high-frequency carrier suppresses $1/f$ flicker noise; Synchronous Phase-Sensitive Demodulation (PSD / Lock-In Amplifier) recovering amplitude and phase polarity followed by lowpass filtering.",
    "Industrial 4-20 mA Current Loop Transmission: Two-wire current transmitter topology; Current loop advantages: immunity to lead wire resistance voltage drops, high noise immunity in hostile industrial plants, built-in 'live zero' ($4\\text{ mA}$ represents zero scale, permitting cable break / open circuit detection when current drops to $0\\text{ mA}$); Loop power supply ($24\\text{ V}$ DC).",
    "Galvanic Isolation Techniques: Preventing dangerous ground loops and protecting low-voltage acquisition electronics from high-voltage surges; Optocouplers (LED-phototransistor optical isolation), Isolation transformers, and Capacitive barrier isolators; Creepage and clearance safety distances.",
    "Analog-to-Digital Conversion (ADC) in Sensor Systems: Resolution (number of bits $N$, quantization step $q = V_{ref} / 2^N$), Conversion speed; Architectures: (1) Successive Approximation Register (SAR, $N$ clock cycles, balanced speed and resolution, general instrumentation); (2) Delta-Sigma ($\\Sigma-\\Delta$, oversampling, noise shaping, 16-24 bit extreme resolution, seismic and precision RTD sensing); (3) Dual-Slope Integrating (inherent $50/60\\text{ Hz}$ powerline noise rejection).",
    "Smart Sensor Systems & IEEE 1451 Standards: Integrated transducer comprising sensing element, analog signal conditioning, microcontroller, analog-to-digital converter, and digital communication interface; Transducer Electronic Data Sheet (TEDS / IEEE 1451.4) storing calibration coefficients, serial number, and dynamic ranges in onboard EEPROM; Self-calibration, self-testing, and automatic range shifting.",
    "Micro-Electro-Mechanical Systems (MEMS) Sensors: Silicon micro-machining (bulk and surface micromachining); Capacitive MEMS accelerometers (comb-finger structure detecting proof mass displacement under acceleration), MEMS gyroscopes (Coriolis acceleration sensing on vibrating proof masses), and MEMS piezoresistive pressure sensors.",
    "Digital Sensor Communication Protocols: I2C (Inter-Integrated Circuit: 2-wire serial bus, SDA/SCL, multi-master, pull-up resistors), SPI (Serial Peripheral Interface: 4-wire high-speed synchronous bus, MOSI/MISO/SCK/CS), CAN bus (Controller Area Network: differential two-wire balanced bus, highly robust, automotive and industrial automation), and HART protocol (Highway Addressable Remote Transducer: FSK digital signal superimposed onto standard 4-20 mA analog loop).",
    "University Examination Strategy: Derive the voltage gain equation for the 3-op-amp instrumentation amplifier, explain the operational merits of industrial 4-20 mA two-wire current loops, compare SAR vs Delta-Sigma ADCs for sensor interfacing, and detail smart sensor architecture according to IEEE 1451."
], [
    "Three-Op-Amp In-Amp Gain: $A_v = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$.",
    "In-Amp CMRR Metric: $\\text{CMRR} = 20\\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|$ dB.",
    "Live Zero 4-20 mA Purpose: $4\\text{ mA}$ indicates true $0\\%$ process variable; $0\\text{ mA}$ indicates an open-circuit loop fault.",
    "SAR Conversion Clock Cycles: Requires exactly $N$ clock cycles for an $N$-bit analog-to-digital conversion.",
    "Delta-Sigma ADC Advantage: Employs oversampling and noise shaping to achieve ultra-high 24-bit resolution.",
    "TEDS IEEE 1451 Definition: Transducer Electronic Data Sheet containing factory calibration matrix embedded in sensor EEPROM.",
    "Dual-Slope ADC Noise Rejection: Integrator run-down interval cancels $50\\text{ Hz}$ or $60\\text{ Hz}$ power line interference.",
    "MEMS Comb Finger Capacitance: $\\Delta C = \\frac{2 \\epsilon_0 N A}{d_0^2} \\times \\Delta x$.",
    "HART FSK Frequencies: Bell 202 tones of $1200\\text{ Hz}$ (binary 1) and $2200\\text{ Hz}$ (binary 0) overlaid on 4-20 mA loop.",
    "Exam Gold Tip: In a 3-op-amp instrumentation amplifier, changing gain via $R_G$ modifies only the differential gain without disturbing the high CMRR balance of the output difference stage."
])

# Save completed batch 3
with open('scripts/sem3_btech_batch3_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 3 COMPLETE: total units now: {len(data)}")
