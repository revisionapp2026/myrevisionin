"""
Digital Electronics & Digital Logic Design Units for B.Tech Semester 3.
"""

digital_units = {
    # 4 & 5. DIGITAL ELECTRONICS & DIGITAL LOGIC DESIGN
    "btech-de: logic gates": {
        "highlights": [
            "Binary Number Representations: Radix conversion between binary, octal, decimal, and hexadecimal; signed magnitude, 1's complement, and 2's complement arithmetic.",
            "Universal Logic Gates: NAND and NOR gates are universal gates because any arbitrary Boolean switching function can be realized using solely NAND or solely NOR gates.",
            "Boolean Algebra Theorems: Commutative, associative, distributive, and identity laws; Duality principle states that replacing AND with OR and 0 with 1 preserves theorem validity.",
            "De Morgan's Theorems: $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$ (NAND equivalent to Bubbled OR) and $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$ (NOR equivalent to Bubbled AND).",
            "Canonical SOP and POS Forms: Sum of Minterms (canonical SOP, denoted $\\sum m$) and Product of Maxterms (canonical POS, denoted $\\prod M$); dual relationships $m_i = \\bar{M}_i$.",
            "Logic Family Characteristics: TTL (Transistor-Transistor Logic), CMOS (Complementary MOS), and ECL (Emitter-Coupled Logic); evaluated by propagation delay, power dissipation, and noise margin.",
            "Fan-In & Fan-Out: Fan-in specifies maximum input lines a gate can handle; Fan-out specifies maximum standard load inputs a single gate output can reliably drive without voltage degradation.",
            "Noise Margins: High-level noise margin $NM_H = V_{OH} - V_{IH}$ and low-level noise margin $NM_L = V_{IL} - V_{OL}$; CMOS exhibits superior noise immunity ($\\approx 0.45 V_{DD}$).",
            "Propagation Delay & Power-Delay Product (PDP): Gate switching delay $t_{pd} = (t_{pHL} + t_{pLH})/2$; PDP $= t_{pd} \\times P_{diss}$ acts as the fundamental figure of merit for logic technologies.",
            "University Examination Strategy: Draw complete transistor-level CMOS inverter schematics and construct truth tables proving De Morgan's laws algebraically."
        ],
        "keyPoints": [
            "De Morgan's 1st Law: $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$; De Morgan's 2nd Law: $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$.",
            "NAND Universal Realization: Inverter $= A \\text{ NAND } A$; AND $= (A \\text{ NAND } B) \\text{ NAND } (A \\text{ NAND } B)$; OR $= (A \\text{ NAND } A) \\text{ NAND } (B \\text{ NAND } B)$.",
            "NOR Universal Realization: Requires 4 NOR gates for AND, 3 NOR gates for OR, and 1 NOR gate for NOT.",
            "Noise Margin Equations: $NM_H = V_{OH(min)} - V_{IH(min)}$ and $NM_L = V_{IL(max)} - V_{OL(max)}$.",
            "Gray Code Property: Cyclic reflected code where adjacent numbers differ by strictly ONE bit; eliminates spurious transition hazards in shaft encoders.",
            "CMOS Power Dissipation: Near-zero static power; dynamic dissipation dominates: $P_{dyn} = C_L V_{DD}^2 f_{clk}$.",
            "ECL Logic Advantage: Operates transistors in non-saturated mode, achieving ultra-fast sub-nanosecond switching speeds at the expense of high power dissipation.",
            "Minterm vs Maxterm: Minterm $m_3$ for 3 variables ($A, B, C$) is $A' B C$; Maxterm $M_3$ is $A + B' + C'$.",
            "Self-Dual Function Condition: $f(A_1, \\dots, A_n) = \\bar{f}(\\bar{A}_1, \\dots, \\bar{A}_n)$; a Boolean function of $n$ variables has $2^{2^{n-1}}$ self-dual functions.",
            "Exam Scoring Tip: In logic gate questions, always label gate inputs, intermediate inversion bubbles, and supply voltages ($V_{CC}$ / $V_{DD}$)."
        ]
    },
    "btech-de: combinational circuits": {
        "highlights": [
            "Combinational Logic Principles: Output state depends strictly and instantaneously on current inputs; contains zero memory elements, feedback loops, or internal state storage.",
            "Karnaugh Map (K-Map) Minimization: Graphical method mapping Gray-coded adjacent minterms for 2, 3, 4, and 5 variables; groups minterms into subcubes of powers of 2 ($1, 2, 4, 8, 16$) to eliminate variables.",
            "Implicants & Essential Prime Implicants (EPI): Prime Implicant (PI) is maximal grouping not contained in larger group; EPI contains at least one minterm covered by no other prime implicant.",
            "Don't Care Conditions: Unspecified input combinations denoted $d$ or $X$; strategically grouped as 1s to enlarge subcube size during SOP minimization or ignored if non-beneficial.",
            "Adders & Subtractors: Half Adder ($S = A \\oplus B, C = AB$), Full Adder ($S = A \\oplus B \\oplus C_{in}, C_{out} = AB + C_{in}(A \\oplus B)$); Half Subtractor ($D = A \\oplus B, B_{out} = \\bar{A}B$).",
            "Carry Look-Ahead Adder (CLA): Eliminates linear ripple propagation delay by generating carries in parallel via Generate $G_i = A_i B_i$ and Propagate $P_i = A_i \\oplus B_i$ in $O(1)$ gate delays.",
            "Multiplexers (MUX): Data selectors with $2^n$ data inputs, $n$ select lines, and 1 output ($Y = \\sum D_i \\cdot m_i$); acts as a universal function generator without external logic gates.",
            "Demultiplexers & Decoders: Demultiplexer routes single input to 1-of-$2^n$ outputs; Decoders (e.g. 3-to-8 line decoder with active-low enables) convert binary codes into distinct output lines.",
            "Priority Encoders & Comparators: Priority encoder outputs binary code of highest-order active input; Magnitude comparator compares $A$ and $B$, generating $A > B, A = B, A < B$ outputs.",
            "Static & Dynamic Hazards: Static 1-hazard (output momentarily glitches to 0 when it should remain 1) caused by unequal path delays; eliminated by including redundant consensus prime implicants."
        ],
        "keyPoints": [
            "Full Adder Equations: $\\text{Sum} = A \\oplus B \\oplus C_{in}$, $\\text{Carry} = A B + B C_{in} + A C_{in}$.",
            "Carry Look-Ahead Logic: $C_1 = G_0 + P_0 C_0$; $C_2 = G_1 + P_1 G_0 + P_1 P_0 C_0$; $C_3 = G_2 + P_2 G_1 + P_2 P_1 G_0 + P_2 P_1 P_0 C_0$.",
            "Multiplexer Function Realization: An $2^n:1$ MUX can implement any arbitrary Boolean function of $n+1$ variables without additional logic gates.",
            "K-Map Gray Code Ordering: Rows and columns must be ordered strictly as `00, 01, 11, 10` (adjacent cells differ by only 1 bit).",
            "Consensus Theorem: $A B + \\bar{A} C + B C = A B + \\bar{A} C$ (where $B C$ is the redundant consensus term that eliminates static-1 hazards).",
            "Full Adder from Half Adders: Requires exactly 2 Half Adders and 1 OR gate; Propagation delay is $2 t_{XOR} + t_{AND}$.",
            "Binary Comparator Equality: $A = B$ iff $(A_3 \\odot B_3)(A_2 \\odot B_2)(A_1 \\odot B_1)(A_0 \\odot B_0) = 1$ using XNOR gates.",
            "BCD to 7-Segment Decoder: Maps 4-bit BCD digit (0-9) to seven output segments ($a, b, c, d, e, f, g$) driving common anode or common cathode LED displays.",
            "Quine-McCluskey (Tabular) Method: Systematic algorithmic minimization method for functions with $> 5$ variables; ideal for computer-aided logic synthesis.",
            "Exam K-Map Checklist: Circle all groups, identify Essential Prime Implicants first, and ensure no redundant groups are included in the final minimal expression."
        ]
    },
    "btech-de: sequential circuits": {
        "highlights": [
            "Sequential Logic Foundations: Output depends on current inputs and historical sequence of past inputs; incorporates memory elements (latches or flip-flops) and feedback loops.",
            "Synchronous vs Asynchronous Circuits: Synchronous circuits change state strictly at discrete clock edges (rising or falling); Asynchronous circuits change state whenever inputs change (faster, risk of race conditions).",
            "SR Latch & Gated Latch: Cross-coupled NOR latch: $S=1, R=0 \\implies Q=1$; $S=0, R=1 \\implies Q=0$; $S=R=0 \\implies \\text{No Change}$; $S=R=1$ is strictly forbidden/invalid state.",
            "D Flip-Flop (Data / Delay): Eliminates undefined input state of SR latch by setting $R = \\bar{S}$; output transparently captures $D$ at clock active edge: $Q_{next} = D$.",
            "JK Flip-Flop & Race-Around Condition: Resolves SR forbidden state ($J=K=1 \\implies \\text{Toggle}$); Race-around condition occurs in level-triggered JK flip-flops when pulse width $t_p > t_{pd}$ of flip-flop.",
            "Master-Slave JK Flip-Flop: Eliminates race-around condition using two cascaded stages (Master enabled on clock high, Slave enabled on clock low); isolates inputs from outputs during switching.",
            "T Flip-Flop (Toggle): Created by tying $J$ and $K$ inputs together ($J=K=T$); characteristic equation $Q_{next} = T \\oplus Q$; fundamental building block for binary counters.",
            "Flip-Flop Timing Parameters: Setup Time ($t_{su}$, minimum time input data must remain stable before clock edge) and Hold Time ($t_h$, minimum time input data must remain stable after clock edge).",
            "Mealy vs Moore Finite State Machines (FSM): Moore machine outputs depend strictly on current state; Mealy machine outputs depend on current state AND current inputs (fewer states, asynchronous output glitches).",
            "State Reduction & State Assignment: Implication chart method eliminates equivalent states; binary state assignment assigns binary codes to symbolic states to minimize combinational excitation logic."
        ],
        "keyPoints": [
            "Characteristic Equations: SR: $Q_{next} = S + \\bar{R}Q$ ($SR=0$); JK: $Q_{next} = J\\bar{Q} + \\bar{K}Q$; D: $Q_{next} = D$; T: $Q_{next} = T \\oplus Q$.",
            "JK Excitation Table: $0 \\to 0$: $J=0, K=X$; $0 \\to 1$: $J=1, K=X$; $1 \\to 0$: $J=X, K=1$; $1 \\to 1$: $J=X, K=0$.",
            "D Flip-Flop Excitation Table: $Q \\to Q_{next} \\implies D = Q_{next}$ (direct correspondence).",
            "T Flip-Flop Excitation Table: $0 \\to 0$: $T=0$; $0 \\to 1$: $T=1$; $1 \\to 0$: $T=1$; $1 \\to 1$: $T=0$ ($T = Q \\oplus Q_{next}$).",
            "Race-Around Condition Criteria: Level-triggered JK flip-flop where clock pulse duration $t_w > \\Delta t$ (propagation delay) and $J=K=1$.",
            "Setup & Hold Time Violation: Causes metastability where flip-flop output oscillates between logic 0 and 1 for an indeterminate recovery time.",
            "Moore Machine Output Logic: Output depends strictly on current state flip-flops; outputs change synchronously with clock edges.",
            "Mealy Machine Output Logic: Output depends on current state AND inputs; outputs can change asynchronously mid-clock cycle.",
            "Edge-Triggering Mechanism: Capacitive differentiation or internal gate-delay steering converts slow clock edges into narrow trigger spikes.",
            "Exam FSM Design Procedure: (1) State Diagram $\\to$ (2) State Table $\\to$ (3) State Reduction $\\to$ (4) Flip-Flop Excitation Table $\\to$ (5) K-Map Minimization $\\to$ (6) Logic Circuit Schematic."
        ]
    },
    "btech-de: counters & registers": {
        "highlights": [
            "Register Architecture: Array of $n$ flip-flops sharing a common clock; stores an $n$-bit binary word with parallel load and clear capabilities.",
            "Shift Register Topologies: Serial-In Serial-Out (SISO, takes $n$ clocks to load and $n$ clocks to read), Serial-In Parallel-Out (SIPO), Parallel-In Serial-Out (PISO), and Parallel-In Parallel-Out (PIPO, instantaneous 1 clock).",
            "Universal Shift Register: Bi-directional register supporting hold, shift right, shift left, and parallel load controlled by a 4:1 multiplexer network (mode select $S_1, S_0$).",
            "Asynchronous (Ripple) Counters: Flip-flops triggered in cascade (output of stage $i$ clocks stage $i+1$); simple hardware but accumulates propagation delay $t_{delay} = n \\times t_{pd}$.",
            "Synchronous Counters: All flip-flops clocked simultaneously by a single central clock line; eliminates cumulative ripple delay, allowing high-frequency operation ($f_{max} = \\frac{1}{t_{pd} + t_{comb}}$).",
            "Modulus-N (Mod-N) Counters: Counter with $N$ distinct states, cycling from $0$ to $N-1$; requires $k = \\lceil \\log_2 N \\rceil$ flip-flops; reset triggered by decoding state $N$ using NAND gates.",
            "Decade (BCD) Counter: Mod-10 counter cycling through states $0000$ to $1001$; resets automatically to $0000$ upon reaching state $1010$ (10 in decimal).",
            "Ring Counter: Circular shift register circulating a single high bit ($1000 \\to 0100 \\to 0010 \\to 0001$); $n$ flip-flops yield exactly $n$ valid timing states without decoding logic.",
            "Johnson (Twisted Ring) Counter: Inverted serial output feedback ($\bar{Q}_n$ fed to $D_1$); $n$ flip-flops generate $2n$ distinct timing states, decoded using 2-input AND gates.",
            "Up/Down Counter Design: Synchronous counter capable of counting up or down based on control input $M$; controlled by routing $Q$ (for Up count) or $\bar{Q}$ (for Down count) into subsequent stage toggle logic."
        ],
        "keyPoints": [
            "Ripple Counter Delay: Total delay $T = n \\times t_{pd}$; Maximum operating frequency $f_{max} = \\frac{1}{n \\cdot t_{pd}}$.",
            "Synchronous Counter Maximum Frequency: $f_{max} = \\frac{1}{t_{pd} + t_{logic}}$, independent of the number of counter bits $n$.",
            "Ring Counter States: $n$ flip-flops provide $n$ distinct states; Modulus $= n$; highly inefficient flip-flop utilization.",
            "Johnson Counter States: $n$ flip-flops provide $2n$ distinct states; Modulus $= 2n$; requires simple decoding logic.",
            "Unused States & Lock-Out: In counters with $N < 2^k$ states, counter may enter unused states; must design self-correcting logic to steer back to valid count sequence.",
            "BCD Counter Reset Condition: Decodes $Q_3 Q_1 = 1$ (state $1010_2 = 10_{10}$) via a 2-input NAND gate connected directly to asynchronous clear inputs.",
            "Universal Shift Register Modes: $S_1 S_0 = 00$: Hold; $01$: Shift Right; $10$: Shift Left; $11$: Parallel Load.",
            "Linear Feedback Shift Register (LFSR): Shift register with XOR tap feedback producing pseudo-random binary sequences (PRBS) of maximum length $2^n - 1$.",
            "Glitches in Ripple Counters: Unequal flip-flop propagation delays produce transient invalid intermediate states that cause glitches in downstream decoding logic.",
            "Exam Counter Design Step: State count states $\\to$ write transition table $\\to$ extract flip-flop excitation values $\\to$ minimize expressions via K-Map $\\to$ draw circuit schematic."
        ]
    },
    "btech-de: memory & plds": {
        "highlights": [
            "Semiconductor Memory Classification: Random-Access Memory (RAM: volatile, read/write) and Read-Only Memory (ROM: non-volatile, mask-programmed or field-programmable).",
            "Static RAM (SRAM) Architecture: 6-transistor (6T) CMOS cross-coupled inverter bistable latch cell; fast access ($< 10\\text{ ns}$), low density, high power, used in CPU caches.",
            "Dynamic RAM (DRAM) Architecture: 1-transistor 1-capacitor (1T1C) cell; stores charge on capacitor $C_s$; high density, low cost, but requires periodic refresh cycles (every $\\approx 64\\text{ ms}$).",
            "ROM Variants: Mask ROM (hardwired at foundry), PROM (fuse/antifuse OTP), EPROM (UV light erasable with quartz window), and EEPROM / Flash memory (electrically erasable in blocks).",
            "Programmable Logic Devices (PLDs): Configurable hardware chips implementing arbitrary Boolean functions: Read-Only Memory (ROM), Programmable Array Logic (PAL), and Programmable Logic Array (PLA).",
            "ROM as a PLD: Fixed AND array (full decoder generating all $2^n$ minterms) and programmable OR array; implements any combinational function directly from truth table.",
            "Programmable Array Logic (PAL): Programmable AND array and fixed OR array; simpler architecture, faster propagation delay, widely used in glue logic.",
            "Programmable Logic Array (PLA): Both AND array and OR array are fully programmable; optimal chip area utilization, allows sharing of product terms across multiple outputs.",
            "Complex Programmable Logic Devices (CPLD): Multi-PAL architecture integrating multiple logic array blocks (LABs) interconnected by a central Programmable Interconnect Matrix (PIM).",
            "Field-Programmable Gate Arrays (FPGA): High-density architecture based on matrix of Configurable Logic Blocks (CLBs containing LUTs and flip-flops), routing interconnects, and I/O blocks (IOBs)."
        ],
        "keyPoints": [
            "PLD Comparison Summary: ROM: Fixed AND, Programmable OR; PAL: Programmable AND, Fixed OR; PLA: Programmable AND, Programmable OR.",
            "SRAM 6T Cell: Fast, non-destructive read, retains data as long as power is applied; zero refresh overhead.",
            "DRAM 1T1C Cell: Charge leakage requires periodic refresh; Destructive read requires automatic write-back cycle after access.",
            "Memory Capacity Calculation: Memory with $A$ address lines and $D$ data lines has capacity $2^A \\times D$ bits.",
            "Flash Memory Operating Mechanism: Employs floating-gate MOSFETs (FGMOS) where trapped electrons alter transistor threshold voltage $V_{th}$.",
            "Look-Up Table (LUT) in FPGAs: An $n$-input LUT is essentially a small $2^n \\times 1$ SRAM cell that implements any arbitrary $n$-variable Boolean truth table.",
            "PLA Product Term Sharing: If two output functions share a common product term (e.g. $AB$), PLA synthesizes the product term once and routes it to both OR gates.",
            "PAL Fixed OR Constraints: Each output function can only sum a fixed number of product terms (typically 2 to 8) determined by internal wiring.",
            "EPROM Erasure: Requires intense ultraviolet (UV) light exposure for 20-30 minutes through quartz window to discharge floating gates.",
            "Exam PLA Table Format: Construct PLA programming table with columns: Product Term No, Inputs ($A, B, C$ as 1, 0, or -), and Outputs ($F_1, F_2$ as 1 or -)."
        ]
    }
}

print("Digital Electronics & Logic Design units loaded.")
