import json, os

with open('scripts/sem3_btech_batch2_data.json', 'r', encoding='utf-8') as f:
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
# 7. DIGITAL ELECTRONICS (B.Tech)
# =========================================================================
add("Digital Electronics", 1, "Logic Gates", [
    "Digital Logic IC Families: Transistor-Transistor Logic (TTL: Standard 74, Low-power Schottky 74LS, Advanced Schottky 74AS), CMOS (Complementary MOS: 4000B, 74HC, 74HCT, 74LVC), Emitter-Coupled Logic (ECL: 10K, 100K); Interfacing TTL and CMOS drivers and loads.",
    "Electrical Characteristics of Logic Families: High-level input voltage ($V_{IH}$), Low-level input voltage ($V_{IL}$), High-level output voltage ($V_{OH}$), Low-level output voltage ($V_{OL}$); High noise margin $NM_H = V_{OH} - V_{IH}$; Low noise margin $NM_L = V_{IL} - V_{OL}$.",
    "Propagation Delay and Power Dissipation: Propagation delay low-to-high ($t_{PLH}$) and high-to-low ($t_{PHL}$); Average delay $t_{pd} = (t_{PLH} + t_{PHL}) / 2$; Static power dissipation $P_{static} = V_{DD} I_{leak}$; Dynamic power dissipation $P_{dyn} = C_L V_{DD}^2 f$; Speed-Power Product (SPP) figure of merit in picojoules ($pJ$).",
    "Fan-in and Fan-out Capabilities: Fan-out calculation for TTL: $\\min\\left(\\frac{I_{OH}}{I_{IH}}, \\frac{I_{OL}}{I_{IL}}\\right)$; Current sourcing vs current sinking; CMOS capacitive fan-out constraints limiting operating frequency.",
    "CMOS Inverter Hardware Datapath: Complementary pair (PMOS pull-up network PUN, NMOS pull-down network PDN); Voltage Transfer Characteristic (VTC: Regions A through E); Switching threshold voltage $V_M \\approx V_{DD}/2$ when $\\beta_n = \\beta_p$; Noise margins calculation via unity-gain slopes ($dV_{out}/dV_{in} = -1$).",
    "CMOS Static Logic Gate Synthesis: PUN constructed with PMOS (series connection implements NOR, parallel implements NAND); PDN constructed with dual NMOS (series connection implements NAND, parallel implements NOR); Euler path method for optimal stick diagram layout.",
    "TTL Internal Circuitry: Multi-emitter input transistor $Q_1$ performing AND operation; Phase-splitter transistor $Q_2$; Totem-pole output stage ($Q_3, Q_4, D_1$) providing active pull-up and fast capacitive load charging; Open-collector outputs and external pull-up resistors.",
    "Wired-AND and Tri-State Logic: Wired-AND connection using open-collector TTL or open-drain CMOS gates; Tri-State logic buffers (High, Low, High-Impedance $Z$ states) enabling shared bidirectional bus architecture without bus contention.",
    "Transmission Gates (TG) & Pass-Transistor Logic: Bilateral CMOS switch (parallel NMOS and PMOS controlled by complementary clocks); Full rail-to-rail voltage transmission ($0\\text{ V}$ to $V_{DD}$); Overcoming threshold voltage drops ($V_{DD} - V_{thn}$) of single NMOS pass transistors.",
    "University Examination Strategy: Plot and annotate the CMOS inverter VTC indicating noise margin critical points, calculate TTL fan-out from manufacturer datasheet current parameters, and synthesize static CMOS complex gates ($Y = \\overline{A B + C D}$) using dual PUN/PDN networks."
], [
    "Noise Margin High Formula: $NM_H = V_{OH} - V_{IH}$.",
    "Noise Margin Low Formula: $NM_L = V_{IL} - V_{OL}$.",
    "CMOS Dynamic Power: $P_{dyn} = C_L V_{DD}^2 f$ (proportional to switching frequency and voltage squared).",
    "Speed-Power Product: $SPP = t_{pd} \\times P_D$ (expressed in picojoules $pJ$).",
    "CMOS Inverter Threshold Condition: $V_M = \\frac{V_{DD} - |V_{tp}| + V_{tn} \\sqrt{\\beta_n / \\beta_p}}{1 + \\sqrt{\\beta_n / \\beta_p}}$.",
    "CMOS PUN-PDN Duality: Series connection in PDN corresponds strictly to parallel connection in PUN.",
    "TTL Totem-Pole Function: Provides low output impedance in both High and Low states, accelerating line capacitance charging.",
    "Open-Collector Pull-Up Resistor: $R_{pullup(max)} = \\frac{V_{CC} - V_{OH(min)}}{N I_{IH} + M I_{OH(leak)}}$.",
    "Tri-State Bus Isolation: High-impedance ($Z$) state disconnects output from system bus, preventing bus contention.",
    "Exam Gold Tip: Never tie totem-pole TTL outputs together directly; use open-collector gates with pull-up resistors for wired logic."
])

add("Digital Electronics", 2, "Combinational Circuits", [
    "Combinational Hardware Design Flow: Behavioral specifications $\\to$ Canonical truth tables $\\to$ Algebraic and topological minimization $\\to$ Gate netlist mapping; Path delays, critical path determination, and timing verification.",
    "High-Speed Parallel Adders: Ripple carry delay bottleneck ($2n$ gate delays); Carry Lookahead Adder (CLA) hardware generator circuits: $G_i = A_i B_i$, $P_i = A_i \\oplus B_i$, 4-bit carry lookahead generator IC 74182; Carry Skip and Carry Select adder tradeoffs.",
    "Hardware Multipliers: Combinational array multipliers using $n \\times m$ AND gates and full adder cells; Critical path delay $t_{delay} = [ (n-1) + (m-1) ] t_{FA}$; Braun multiplier for unsigned operands; Baugh-Wooley multiplier for two's complement signed operands.",
    "Advanced Decoders and Line Drivers: Active-low output decoders (74138); High-current open-collector display decoders (7447 BCD to 7-segment decoder/driver); Common anode vs common cathode LED display interfaces; Current-limiting series resistor calculations.",
    "Priority Encoders in Hardware: Priority resolution network; IC 74148 (8-to-3 line priority encoder) with Enable Input ($EI$), Enable Output ($EO$), and Group Select ($GS$) cascading pins; Interrupt request encoding in microprocessors.",
    "Multiplexer Trees & Data Routing: Modular expansion of multiplexers; Building 32-to-1 MUX using four 8-to-1 MUX modules and one 4-to-1 MUX combiner stage; Barrel shifter design using crossbar multiplexer arrays for single-cycle bit shifts.",
    "Magnitude Comparator Architectures: Bit-slice comparator cells; IC 7485 4-bit magnitude comparator; Cascading expansion pins ($I_{A>B}, I_{A=B}, I_{A<B}$) for 8-bit, 16-bit, and 32-bit word comparisons with carry lookahead techniques.",
    "Arithmetic Logic Unit (ALU) Hardware Architecture: IC 74181 4-bit arithmetic logic unit; Function select inputs ($S_3 S_2 S_1 S_0$) and mode input ($M$: arithmetic vs logic); Synthesizes 16 logic operations and 16 arithmetic operations with fast internal carry lookahead.",
    "Fault Detection in Combinational Networks: Stuck-at fault model (Stuck-at-0 $SA0$, Stuck-at-1 $SA1$); Test vector generation; D-Algorithm and Path Sensitization method (activate fault, propagate error D-difference to primary output); Redundant gates and undetectable faults.",
    "University Examination Strategy: Draw internal gate schematics for 4-bit Carry Lookahead Adders, design 16-to-1 multiplexers from hierarchical 4-to-1 building blocks, and generate sensitized test vectors for stuck-at faults."
], [
    "CLA Carry Propagation Delay: Computes all carries simultaneously in strictly 2 gate levels ($O(1)$ delay).",
    "Baugh-Wooley Multiplier Principle: Handles 2's complement signed multiplication by inverting specific partial product signs.",
    "7-Segment Display Resistor: $R_s = \\frac{V_{CC} - V_F - V_{OL}}{I_F}$ (typically $220\\,\\Omega$ to $330\\,\\Omega$).",
    "Common Anode Display Rule: Anodes tied to $+V_{CC}$; segments light up when driver outputs pull Low (active-low 7447).",
    "Common Cathode Display Rule: Cathodes tied to ground; segments light up when driver outputs pull High (active-high 7448).",
    "74148 Priority Group Select ($GS$): Asserts Low whenever at least one data input is active and encoder is enabled.",
    "Barrel Shifter Hardware: Operates in $O(1)$ clock cycles using $\\log_2 n$ stages of multiplexers.",
    "74181 ALU Mode Control: $M = 1$ selects 16 logic functions without carries; $M = 0$ selects 16 arithmetic operations with carries.",
    "Path Sensitization Rule: To propagate a fault signal $D$ through an AND/NAND gate, all other inputs must be held at 1.",
    "Exam Gold Tip: To detect a Stuck-At-0 ($SA0$) fault at a node, the applied test vector must stimulate that node to a logic 1."
])

add("Digital Electronics", 3, "Sequential Circuits", [
    "Bistable Multivibrator Hardware: Cross-coupled inverter pair as fundamental regenerative memory element; Static stability points; Metastability state (metastable equilibrium point on separatrix) and Mean Time Between Failures ($MTBF$).",
    "Clocking Disciplines & Timing Parameters: Setup time ($t_{setup}$: minimum time data must remain stable before active clock edge); Hold time ($t_{hold}$: minimum time data must remain stable after active clock edge); Clock-to-Q delay ($t_{cq}$); Maximum operating frequency: $f_{max} = \\frac{1}{t_{cq} + t_{comb} + t_{setup}}$.",
    "Timing Violations & Clock Skew: Setup time violation ($t_{clk} < t_{cq} + t_{comb} + t_{setup} - t_{skew}$); Hold time violation ($t_{cq} + t_{comb(min)} < t_{hold} + t_{skew}$); Clock skew (spatial difference in clock arrival times) and Clock jitter (temporal variation in clock edge).",
    "Edge-Triggered D Flip-Flop Circuitry: Master-Slave D flip-flop using transmission gates; Pulse-triggered vs edge-triggered architectures; Dynamic CMOS True Single-Phase Clocked (TSPC) flip-flops eliminating clock overlap skew.",
    "JK Flip-Flop Race Condition Mitigation: Race-around problem in level-sensitive JK flip-flops ($t_p > t_{pd}$); Elimination methods: (1) Master-slave JK flip-flop; (2) Edge-triggered flip-flop using capacitive steering or internal latch locks; (3) Propagation delay restriction $t_{pd} > t_p$.",
    "Asynchronous Inputs: Direct Set (`PRESET`) and Direct Clear (`CLEAR`); Overriding synchronous clock inputs; Active-low vs active-high implementations; Power-on reset circuit design using $RC$ networks.",
    "Finite State Machine (FSM) Synthesis: Algorithmic State Machine (ASM) charts: State boxes, Decision boxes, Conditional output boxes; State assignment techniques (Binary, Gray, One-hot); Derivation of next-state and output logic equations using excitation tables.",
    "State Machine Hazard Elimination: Dynamic hazards in asynchronous FSMs; Essential hazards caused by race between feedback state variable and clock transition; Elimination by inserting delay elements in feedback paths.",
    "Sequence Detectors and Pattern Recognizers: Overlapping vs Non-overlapping sequence detectors; State diagram construction; Mealy vs Moore state complexity (Moore machine typically requires one additional state compared to Mealy).",
    "University Examination Strategy: Calculate maximum clock frequency and verify setup/hold slack from timing specs, design Mealy sequence detector state machines detecting binary strings with overlapping sequences, and construct ASM charts."
], [
    "Maximum Clock Frequency Formula: $f_{max} = \\frac{1}{t_{cq} + t_{comb,max} + t_{setup}}$.",
    "Setup Time Slack: $\\text{Slack}_{setup} = T_{clk} - (t_{cq} + t_{comb,max} + t_{setup}) \\ge 0$.",
    "Hold Time Requirement: $t_{cq,min} + t_{comb,min} \\ge t_{hold}$ (independent of clock period $T_{clk}$).",
    "Clock Skew Setup Impact: Positive clock skew increases allowable combinational logic delay for setup checks.",
    "Clock Skew Hold Impact: Positive clock skew increases risk of hold time violations on fast short paths.",
    "Metastability MTBF Formula: $\\text{MTBF} = \\frac{e^{\\Delta t / \\tau}}{T_0 f_{clk} f_{data}}$.",
    "ASM Chart State Box: Rectangular box containing state name, state code, and Moore unconditional outputs.",
    "ASM Chart Decision Box: Diamond box testing single input variable to determine next branching path.",
    "One-Hot Encoding Hardware Cost: Requires $N$ flip-flops for $N$ states; simplifies combinational next-state decoders.",
    "Exam Gold Tip: Hold time violations cannot be fixed by slowing down the system clock frequency; they must be resolved by adding data path delay buffers."
])

add("Digital Electronics", 4, "Counters & Registers", [
    "Synchronous Binary Counters: Cascaded toggle flip-flops clocked simultaneously; Carry lookahead counter architecture (74161/74163 4-bit synchronous binary counter); Synchronous parallel load, enable inputs ($ENP, ENT$), ripple carry output ($RCO$).",
    "Up/Down Synchronous Counters: Steering logic controlling toggle inputs: Up count ($T_i = Q_{i-1} Q_{i-2} \\dots Q_0$), Down count ($T_i = Q_{i-1}' Q_{i-2}' \\dots Q_0'$); IC 74191 4-bit synchronous up/down counter with direction mode pin.",
    "Modulo-$N$ Counter Design: Modulo truncation of standard 4-bit counters; Synchronous clear method (counter rolls over on next clock pulse at state $N-1$) vs Asynchronous clear method (reset asserted immediately at transient state $N$); Spurious glitch hazards during asynchronous clearing.",
    "Decade (BCD) Counter IC 7490: Internal organization: independent divide-by-2 section and divide-by-5 section; Master reset ($R_1, R_2$) and Master set ($S_1, S_2$); Cascading configurations to build BCD decade counter and divide-by-10 symmetrical square wave generator (bi-quinary mode).",
    "Linear Feedback Shift Registers (LFSR): Shift register with XOR/XNOR feedback taps driven by primitive polynomials; Pseudo-Random Binary Sequence (PRBS) generation; Maximum length sequence $M = 2^n - 1$; Applications in built-in self-test (BIST) signature analysis and cryptography.",
    "Universal Shift Register IC 74194: 4-bit bidirectional universal shift register; Control mode inputs ($S_1 S_0$): $00 \\implies \\text{Hold}$, $01 \\implies \\text{Shift Right}$, $10 \\implies \\text{Shift Left}$, $11 \\implies \\text{Parallel Load}$; Parallel inputs and outputs; Serial inputs ($D_{SR}, D_{SL}$).",
    "Ring and Twisted Johnson Counters: Self-starting ring counters with feedback NOR gates; Unused state recovery logic; 4-bit Johnson counter sequence (8 timing states); Decoding gates for Johnson counter (two-input AND gates without hazard glitches).",
    "Prescaler and High-Frequency Dividers: High-speed dual-modulus prescalers ($P / P+1$, e.g. 64/65 prescaler); Frequency synthesis in phase-locked loops (PLL); Fractional-$N$ frequency division.",
    "Cascading Counters for Multi-Digit Systems: Cascading synchronous counters using Ripple Carry Output ($RCO$) tied to Enable Trickle ($ENT$) of subsequent stages; Eliminates ripple delay between stages up to 16 bits.",
    "University Examination Strategy: Design synchronous Mod-12 counter using 74163 with synchronous load and clear, configure 7490 for BCD vs bi-quinary counting modes, and derive maximal length LFSR feedback connections."
], [
    "74163 Synchronous Reset Rule: Clearing occurs strictly on the rising clock edge when $\\overline{CLR} = 0$.",
    "74161 Asynchronous Reset Rule: Clearing occurs immediately whenever $\\overline{CLR} = 0$ regardless of clock.",
    "LFSR Maximal Length Period: $N_{max} = 2^n - 1$ states (all-zero state is forbidden for XOR feedback).",
    "Bi-Quinary Counter Symmetrical Wave: Feed clock into divide-by-5 section, and take output through divide-by-2 section for 50% duty cycle.",
    "74194 Universal Modes: $S_1 S_0 = 00$ (Inhibit), $01$ (Shift Right), $10$ (Shift Left), $11$ (Load).",
    "Johnson Counter State Count: $2n$ states for $n$ flip-flops; decodable using simple 2-input AND gates.",
    "Ring Counter State Count: Exactly $n$ states for $n$ flip-flops; requires initialization to prevent invalid state cycles.",
    "Asynchronous Truncation Glitch: Transient state $N$ produces a sub-nanosecond narrow pulse on reset line before resetting to 0.",
    "Counter Ripple Carry Output ($RCO$): Asserts High when all counter stages reach logic 1 and $ENT$ is High.",
    "Exam Gold Tip: For synchronous modulo-$N$ counter design using synchronous load, preset the counter when it reaches count state $N-1$."
])

add("Digital Electronics", 5, "Memory & PLDs", [
    "Static RAM (SRAM) Cell Circuitry: 6-Transistor (6T) CMOS storage cell; Cross-coupled inverters, word-line access NMOS transistors; Read operation (precharge bit lines, word line asserts, bit line discharge $\\Delta V$, sense amplifier detects differential voltage); Write operation (overdrive bit lines to flip bistable latch).",
    "Dynamic RAM (DRAM) Cell Architecture: 1-Transistor 1-Capacitor (1T-1C) trench capacitor cell; Destructive read operation requiring automatic sense-amp write-back / restore cycle; Refresh cycles (RAS-only refresh, CAS-before-RAS CBR refresh, Hidden refresh).",
    "Non-Volatile Semiconductor Memory Technologies: Floating-Gate MOSFET (FAMOS); Fowler-Nordheim tunneling and Hot Carrier Injection (HCI); Flash memory architectures: NOR Flash (random access byte-read, high speed, code execution) vs NAND Flash (serial page-read, high density, block-erase, mass storage).",
    "Programmable Array Logic (PAL) Architectures: Programmable AND plane with fixed OR plane; Output Logic Macrocells (OLMC) in commercial devices (GAL22V10); Programmable output polarity (active-high or active-low), registered vs combinational feedback paths.",
    "Programmable Logic Array (PLA) Implementations: Both AND and OR arrays programmable; Product term sharing; Implementation of multi-output functions with common minterm subcubes; Program table representation.",
    "Complex Programmable Logic Devices (CPLD): Architecture: Multiple Macrocells organized into Logic Array Blocks (LABs); Programmable Interconnect Matrix (PIM); High-pin-count packaging; In-System Programmability (ISP) via JTAG IEEE 1149.1 boundary scan interface.",
    "Field Programmable Gate Array (FPGA) Architecture: Island-style architecture; Configurable Logic Blocks (CLBs) containing LUTs, flip-flops, and carry chains; Switch Boxes (S-Boxes) and Connection Boxes (C-Boxes); Distributed RAM vs Dedicated Block RAM (BRAM); DSP slices for hardware MAC operations.",
    "Static Timing Analysis (STA) in Digital Systems: Setup time paths, Hold time paths, Recovery and Removal times for asynchronous signals; False paths and Multi-cycle paths; Clock domain crossing (CDC) and dual-rank flip-flop synchronizers.",
    "Design for Testability (DFT): Scan chain architecture; Multiplexed scan flip-flops; Converting sequential circuits into combinational logic under test mode; Boundary Scan standard IEEE 1149.1 (TAP controller, TDI, TDO, TCK, TMS).",
    "University Examination Strategy: Draw internal schematic of 6T SRAM cell and explain read/write cycles with sense-amp waveforms, implement multi-output logic using PLA program tables, and explain FPGA CLB architecture with LUT lookup tables."
], [
    "SRAM 6T Read Stability Ratio: Pull-down NMOS must be stronger than access NMOS to prevent data flip during read ($W/L_{PD} > W/L_{access}$).",
    "SRAM 6T Writeability Ratio: Access NMOS must be stronger than pull-up PMOS to overdrive node during write ($W/L_{access} > W/L_{PU}$).",
    "DRAM Sense Amplifier Operation: Senses millivolt potential difference on precharged bit-line pair and restores full $V_{DD}$ rail.",
    "NAND Flash Memory Advantage: String of series MOSFETs yields smallest cell area ($4 F^2$) and highest bit density.",
    "NOR Flash Memory Advantage: Parallel cell arrangement allows fast random byte read access ($10 F^2$ area).",
    "GAL22V10 Macrocell: Features programmable D flip-flop, XOR polarity gate, and dynamic feedback selection multiplexer.",
    "JTAG Test Access Port (TAP): 4 mandatory pins: TCK (Clock), TMS (Mode Select), TDI (Data In), TDO (Data Out).",
    "Clock Domain Crossing (CDC) Rule: Pass asynchronous control signals through 2-stage flip-flop synchronizer to mitigate metastability.",
    "Scan Chain Testing Mode: When scan enable is High, flip-flops form a giant shift register for serialized test vector loading.",
    "Exam Gold Tip: In PLA design, factorizing common product terms across multiple outputs reduces total required AND gates."
])

# =========================================================================
# 8. SIGNALS & SYSTEMS (B.Tech)
# =========================================================================
add("Signals & Systems", 1, "Signal Classification", [
    "Continuous-Time (CT) vs Discrete-Time (DT) Signals: Mathematical definitions: $x(t)$ where $t \\in \\mathbb{R}$ vs $x[n]$ where $n \\in \\mathbb{Z}$; Graphical representations; Sampling relationship $x[n] = x(n T_s)$.",
    "Elementary Singularity and Benchmark Signals: (1) Unit Step function $u(t)$ and $u[n]$; (2) Dirac Delta / Unit Impulse function $\\delta(t) = \\frac{d}{dt}u(t)$, Sifting property $\\int_{-\\infty}^\\infty x(t) \\delta(t - t_0) dt = x(t_0)$, Scaling property $\\delta(a t) = \\frac{1}{|a|} \\delta(t)$; Unit impulse sequence $\\delta[n]$; (3) Unit Ramp $r(t) = t u(t)$; (4) Signum function $\\text{sgn}(t)$; (5) Sinc function $\\text{sinc}(t) = \\frac{\\sin(\\pi t)}{\\pi t}$.",
    "Signal Transformations: Time shifting ($x(t - t_0)$, delay if $t_0 > 0$, advance if $t_0 < 0$); Time reversal / reflection ($x(-t)$); Time scaling ($x(a t)$, compression if $|a| > 1$, expansion if $0 < |a| < 1$); Combined transformation rule: $x(a t - b) = x(a(t - b/a))$.",
    "Even and Odd Signal Decomposition: Even / symmetric signal: $x_e(t) = x_e(-t)$; Odd / anti-symmetric signal: $x_o(t) = -x_o(-t)$; Any arbitrary signal decomposes uniquely into: $x(t) = x_e(t) + x_o(t)$, where $x_e(t) = \\frac{x(t) + x(-t)}{2}$ and $x_o(t) = \\frac{x(t) - x(-t)}{2}$.",
    "Periodic vs Aperiodic Signals: Continuous periodic condition: $x(t + T) = x(t)$, fundamental period $T_0 = \\frac{2\\pi}{\\omega_0}$; Discrete periodic condition: $x[n + N] = x[n]$, requires $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N} \\in \\mathbb{Q}$ (rational ratio); Sum of periodic signals periodicity test.",
    "Energy and Power Signals: Total signal energy $E = \\int_{-\\infty}^\\infty |x(t)|^2 dt$ or $E = \\sum_{n=-\\infty}^\\infty |x[n]|^2$; Average signal power $P = \\lim_{T \\to \\infty} \\frac{1}{2T} \\int_{-T}^T |x(t)|^2 dt$; Energy signal: $0 < E < \\infty, P = 0$; Power signal: $0 < P < \\infty, E = \\infty$; Neither energy nor power signals (e.g. ramps).",
    "Deterministic vs Random Signals: Deterministic signals completely modeled by explicit mathematical functions; Random signals governed by probability distributions and statistical averages (mean, autocorrelation, power spectral density).",
    "Continuous vs Discrete Complex Exponentials: $x(t) = e^{s t} = e^{(\\sigma + j \\omega) t}$; Sinusoids with exponentially growing/decaying envelopes; Discrete harmonic signals $e^{j \\omega_0 n}$ are periodic with period $2\\pi$ in frequency $\\omega_0$.",
    "Basic System Properties & Classifications: System $y(t) = \\mathcal{T}\\{x(t)\\}$; (1) Memoryless / Static vs Dynamic with Memory; (2) Invertibility and Inverse Systems; (3) Causality ($y(t_0)$ depends only on $x(t)$ for $t \\le t_0$); (4) Stability (Bounded-Input Bounded-Output BIBO stability: $|x(t)| \\le M_x < \\infty \\implies |y(t)| \\le M_y < \\infty$).",
    "University Examination Strategy: Decompose complex signals into even and odd components, evaluate fundamental periods for sums of sinusoids, classify signals as energy or power with exact calculations, and test systems for linearity, causality, and stability."
], [
    "Impulse Sifting Property: $\\int_{-\\infty}^{\\infty} x(t) \\delta(t - t_0) dt = x(t_0)$.",
    "Impulse Scaling Property: $\\delta(a t) = \\frac{1}{|a|} \\delta(t)$.",
    "Even Component Formula: $x_e(t) = \\frac{1}{2}[x(t) + x(-t)]$.",
    "Odd Component Formula: $x_o(t) = \\frac{1}{2}[x(t) - x(-t)]$.",
    "Continuous Signal Energy: $E_\\infty = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
    "Continuous Average Power: $P_\\infty = \\lim_{T \\to \\infty} \\frac{1}{2T} \\int_{-T}^T |x(t)|^2 dt$.",
    "DT Periodicity Criterion: $x[n] = e^{j \\omega_0 n}$ is periodic $\\iff \\frac{\\omega_0}{2\\pi} = \\frac{m}{N} \\in \\mathbb{Q}$.",
    "Time Shift Precedence: In $x(a t - b)$, shift by $b/a$ after scaling by $a$: $x(a(t - b/a))$.",
    "BIBO Stability Integral: Continuous system is BIBO stable $\\iff \\int_{-\\infty}^\\infty |h(t)| dt < \\infty$.",
    "Exam Gold Tip: Discrete sinusoidal signals are NOT necessarily periodic; the angular frequency $\\omega_0$ must be a rational multiple of $2\\pi$."
])

add("Signals & Systems", 2, "LTI Systems", [
    "Linear Time-Invariant (LTI) Systems: Linearity (Superposition principle: Homogeneity and Additivity: $\\mathcal{T}\\{a x_1 + b x_2\\} = a \\mathcal{T}\\{x_1\\} + b \\mathcal{T}\\{x_2\\}$); Time-Invariance (Time shift in input yields identical time shift in output: $\\mathcal{T}\\{x(t - t_0)\\} = y(t - t_0)$).",
    "Impulse Response & Convolution Integral: Impulse response $h(t) = \\mathcal{T}\\{\\delta(t)\\}$; Representation of arbitrary input via sifting integral; Convolution Integral: $y(t) = x(t) * h(t) = \\int_{-\\infty}^\\infty x(\\tau) h(t - \\tau) d\\tau$; Graphical convolution procedure: Fold, Shift, Multiply, and Integrate.",
    "Discrete-Time Convolution Sum: Impulse response $h[n] = \\mathcal{T}\\{\\delta[n]\\}$; Convolution Sum: $y[n] = x[n] * h[n] = \\sum_{k=-\\infty}^\\infty x[k] h[n - k]$; Matrix and tabular methods for finite-length sequence convolution; Length of output sequence $L = N_1 + N_2 - 1$.",
    "Properties of Convolution: Commutative ($x * h = h * x$), Associative ($x * (h_1 * h_2) = (x * h_1) * h_2$), Distributive ($x * (h_1 + h_2) = x * h_1 + x * h_2$); Parallel LTI systems add impulse responses ($h_{eq} = h_1 + h_2$); Cascade / Series LTI systems convolve impulse responses ($h_{eq} = h_1 * h_2$).",
    "LTI System Properties in Terms of Impulse Response: (1) Memoryless: $h(t) = K \\delta(t)$ or $h[n] = K \\delta[n]$; (2) Causality: $h(t) = 0$ for $t < 0$, or $h[n] = 0$ for $n < 0$; (3) Invertibility: $h(t) * h_i(t) = \\delta(t)$.",
    "BIBO Stability Criteria for LTI Systems: Continuous-time system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^\\infty |h(t)| dt < \\infty$; Discrete-time system is BIBO stable if and only if impulse response is absolutely summable: $\\sum_{n=-\\infty}^\\infty |h[n]| < \\infty$.",
    "Eigenfunctions of LTI Systems: Complex exponentials $e^{s t}$ are eigenfunctions of continuous LTI systems: $\\mathcal{T}\\{e^{s t}\\} = H(s) e^{s t}$, where eigenvalue $H(s) = \\int_{-\\infty}^\\infty h(t) e^{-s t} dt$ is the transfer function; Discrete-time eigenvalue: $H(z) = \\sum_{n=-\\infty}^\\infty h[n] z^{-n}$.",
    "Step Response of LTI Systems: Step response $s(t) = \\mathcal{T}\\{u(t)\\} = \\int_{-\\infty}^t h(\\tau) d\\tau$; Differentiating step response recovers impulse response: $h(t) = \\frac{ds(t)}{dt}$; Discrete relationship: $h[n] = s[n] - s[n-1]$.",
    "Systems Described by Differential & Difference Equations: Linear constant-coefficient differential equations (LCCDE): $\\sum_{k=0}^N a_k \\frac{d^k y}{dt^k} = \\sum_{k=0}^M b_k \\frac{d^k x}{dt^k}$; Natural response (zero-input response) and Forced response (zero-state response); Initial rest condition enforcing linearity and time-invariance.",
    "University Examination Strategy: Perform graphical convolution step-by-step with clear interval sketches, test LTI systems for causality and BIBO stability using impulse response criteria, and solve linear constant-coefficient differential equations using classical complementary and particular solution techniques."
], [
    "Continuous Convolution Integral: $y(t) = \\int_{-\\infty}^{\\infty} x(\\tau) h(t - \\tau) d\\tau$.",
    "Discrete Convolution Sum: $y[n] = \\sum_{k=-\\infty}^{\\infty} x[k] h[n - k]$.",
    "Convolution Commutativity: $x(t) * h(t) = h(t) * x(t)$.",
    "Cascade Connection Equivalent: $h_{cascade}(t) = h_1(t) * h_2(t)$.",
    "Parallel Connection Equivalent: $h_{parallel}(t) = h_1(t) + h_2(t)$.",
    "LTI Causality Condition: $h(t) = 0$ for all $t < 0$ ($h[n] = 0$ for all $n < 0$).",
    "LTI BIBO Stability: Continuous: $\\int_{-\\infty}^\\infty |h(t)| dt < \\infty$; Discrete: $\\sum_{n=-\\infty}^\\infty |h[n]| < \\infty$.",
    "Impulse from Step Response: $h(t) = \\frac{d}{dt} s(t)$ and $h[n] = s[n] - s[n-1]$.",
    "Discrete Sequence Output Length: $L_y = L_x + L_h - 1$.",
    "Exam Gold Tip: If an impulse response contains $e^{+a t} u(t)$ with $a > 0$, the system is unstable because the impulse response diverges exponentially as $t \\to \\infty$."
])

# Save updated batch 2
with open('scripts/sem3_btech_batch2_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 2 part 2 complete: total units now: {len(data)}")
