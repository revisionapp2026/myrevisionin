import json, os

with open('scripts/sem3_btech_batch1_data.json', 'r', encoding='utf-8') as f:
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
# 4. DIGITAL LOGIC DESIGN (B.Tech)
# =========================================================================
add("Digital Logic Design", 1, "Number Systems & Codes", [
    "Positional Number Systems: Radix / base $r$; Binary ($r=2$), Octal ($r=8$), Decimal ($r=10$), Hexadecimal ($r=16$); Fractional conversions via repeated multiplication; Radix complements: $(r-1)$'s complement and $r$'s complement.",
    "Binary Arithmetic in Complements: Unsigned subtraction using 1's and 2's complement; End-around carry in 1's complement vs discarding carry in 2's complement; Overflow detection: $V = C_{in} \\oplus C_{out}$ across MSB.",
    "Binary Codes & Classifications: Weighted codes (BCD 8421, 2421, 5421) vs Non-weighted codes (Excess-3, Gray code); BCD addition rules (adding $0110_2 = 6_{10}$ when intermediate sum $> 9$ or generates carry).",
    "Reflected Gray Code: Unit distance code (single bit changes between consecutive states); Binary to Gray conversion ($G_i = B_i \\oplus B_{i+1}$) and Gray to Binary conversion ($B_i = B_{i+1} \\oplus G_i$); Optical shaft encoders.",
    "Error Detection and Correction Codes: Parity bits (even and odd); Hamming Code $(7, 4)$ single error correction double error detection (SEC-DED); Parity check matrix $H$, Generator matrix $G$, Syndrome decoding $S = r H^T$.",
    "Alphanumeric Character Codes: 7-bit ASCII code, Extended 8-bit ASCII, EBCDIC, Unicode UTF-8 encoding standards; Baudot code historical context.",
    "Fixed-Point vs Floating-Point Representation: Signed magnitude, 1's complement, 2's complement numeric ranges; Precision vs dynamic range trade-offs.",
    "Binary Logic & Logic Voltage Levels: Positive logic (High = 1, Low = 0) vs Negative logic (High = 0, Low = 1); TTL noise margins ($V_{OH}, V_{OL}, V_{IH}, V_{IL}$); Fan-in and Fan-out constraints.",
    "Integrated Circuit Families: TTL (Transistor-Transistor Logic, 7400 series, high speed, bipolar), CMOS (Complementary MOS, 4000 series, ultra-low static power, wide voltage range), ECL (Emitter-Coupled Logic, highest speed, high power dissipation).",
    "University Examination Strategy: Convert fractional decimal numbers to octal/hex, solve 2's complement arithmetic with explicit overflow flag analysis, encode 4-bit data words into 7-bit Hamming SEC-DED codewords, and correct single-bit corrupted transmission vectors."
], [
    "r's Complement Formula: $(r^n - N)$ for integers, or $(r-1)$'s complement $+ 1$.",
    "BCD Correction Rule: Add 6 ($0110_2$) whenever nibble sum exceeds 9 or produces an auxiliary carry.",
    "Binary to Gray Conversion: $G_n = B_n$, and $G_i = B_i \\oplus B_{i+1}$ for $i < n$.",
    "Gray to Binary Conversion: $B_n = G_n$, and $B_i = B_{i+1} \\oplus G_i$ for $i < n$.",
    "Hamming Parity Bit Positions: Parity bits placed strictly at powers of 2 ($P_1$ at 1, $P_2$ at 2, $P_4$ at 4, $P_8$ at 8).",
    "Hamming Parity Bit Formula: $2^p \\ge m + p + 1$, where $m$ is message bits and $p$ is parity bits.",
    "Syndrome Decoding: Syndrome $S = 000$ indicates zero error; non-zero binary value gives exact erroneous bit index.",
    "TTL High Noise Margin: $NM_H = V_{OH} - V_{IH} = 2.4\\text{ V} - 2.0\\text{ V} = 0.4\\text{ V}$.",
    "TTL Low Noise Margin: $NM_L = V_{IL} - V_{OL} = 0.8\\text{ V} - 0.4\\text{ V} = 0.4\\text{ V}$.",
    "Exam Gold Tip: In BCD arithmetic, remember each decimal digit must be coded in a strictly separate 4-bit nibble."
])

add("Digital Logic Design", 2, "Boolean Algebra & Logic Gates", [
    "Boolean Algebra Postulates & Huntington's Axioms: Closure, Identity elements ($0$ for OR, $1$ for AND), Commutative laws, Distributive laws ($A + (B \\cdot C) = (A + B) \\cdot (A + C)$), Complement laws ($A + A' = 1, A \\cdot A' = 0$).",
    "Fundamental Boolean Theorems: Idempotent law ($A + A = A$), Boundedness / Dominance ($A + 1 = 1, A \\cdot 0 = 0$), Involution ($(A')' = A$), Absorption laws ($A + A B = A$, $A (A + B) = A$), De Morgan's Laws ($(A + B)' = A' B'$, $(A B)' = A' + B'$).",
    "Duality Principle: Any valid Boolean algebraic relation remains valid when AND and OR operators are interchanged, and 0 and 1 are interchanged, keeping literals unchanged.",
    "Canonical and Standard Forms: Minterms ($m_i$, product terms evaluating to 1 for single row) and Maxterms ($M_i$, sum terms evaluating to 0 for single row); Canonical Sum-of-Products (SOP: $\\sum m$) and Product-of-Sums (POS: $\\prod M$); Conversion between SOP and POS forms ($m_i' = M_i$).",
    "Standard Logic Gates: Basic gates: AND, OR, NOT (Inverter); Universal gates: NAND and NOR (can synthesize all fundamental logic operations); Derived gates: XOR (Odd parity checker: $A \\oplus B = A' B + A B'$) and XNOR (Equivalence detector: $(A \\oplus B)' = A B + A' B'$).",
    "Karnaugh Map (K-Map) Minimization: Graphical method using Gray code adjacent cells; 2, 3, 4, and 5-variable K-maps; Cell adjacency (toroidal wrap-around); Grouping subcubes of size $2^k$ (pairs, quads, octets); Prime Implicants (PI) and Essential Prime Implicants (EPI).",
    "Don't-Care Conditions in K-Maps: Incompletely specified functions; Don't-care minterms ($d$ or $X$); Included in groupings only when they help enlarge subcubes to simplify literal counts; Left ungrouped otherwise.",
    "Quine-McCluskey (Tabular) Minimization: Algorithmic minimization for large variable counts ($n \\ge 5$); Columnar grouping by number of 1s; Elimination of matching terms differing by single bit; Prime implicant chart; Petrick's method for cyclic prime implicant tables.",
    "NAND-NAND and NOR-NOR Multi-Level Synthesis: Two-level SOP realized directly with NAND-NAND logic; Two-level POS realized directly with NOR-NOR logic; Bubble pushing method (De Morgan's graphical equivalence).",
    "University Examination Strategy: Simplify complex 4-variable and 5-variable Boolean expressions using K-maps with don't-care terms, extract Essential Prime Implicants using prime implicant tables, and implement logic exclusively using two-input NAND gates."
], [
    "Distributive Law Formulation: $A + B C = (A + B)(A + C)$ (unique to Boolean algebra).",
    "De Morgan's SOP Inversion: $(A_1 + A_2 + \\dots + A_n)' = A_1' \\cdot A_2' \\cdot \\dots \\cdot A_n'$.",
    "Consensus Theorem: $A B + A' C + B C = A B + A' C$ (the term $B C$ is redundant).",
    "Minterm-Maxterm Complement Relation: $m_j' = M_j$, and $\\sum m(d_1, d_2) = \\prod M(\\text{remaining indices})$.",
    "Universal NAND Inverter: Connect both NAND inputs together: $(A \\cdot A)' = A'$.",
    "Universal NAND to OR: Apply De Morgan: $(A' \\cdot B')' = A + B$ (requires 3 NAND gates).",
    "K-Map Gray Code Sequence: Rows and columns must be labeled strictly as $00, 01, 11, 10$ to ensure unit Hamming distance.",
    "Essential Prime Implicant Criterion: A prime implicant that covers at least one minterm not covered by any other prime implicant.",
    "XOR Gate Parity Property: $A \\oplus B \\oplus C$ evaluates to 1 if and only if an odd number of variables are 1.",
    "Exam Gold Tip: Never include groups containing only don't-cares; don't-cares should only be enclosed to expand valid minterm groups."
])

add("Digital Logic Design", 3, "Combinational Circuits", [
    "Combinational Logic Principles: Output depends strictly on current inputs; No feedback loops, no internal memory states; Design procedure: Problem specification $\\to$ Truth table $\\to$ K-Map minimization $\\to$ Logic circuit diagram.",
    "Arithmetic Combinational Circuits: Half Adder ($S = A \\oplus B, C = A B$) and Full Adder ($S = A \\oplus B \\oplus C_{in}, C_{out} = A B + C_{in}(A \\oplus B)$); Half Subtractor and Full Subtractor; 4-bit Binary Parallel Adder (7483 RCA) and Adder-Subtractor using XOR mode control.",
    "Lookahead Carry Adders (CLA): Fast parallel addition; Carry generate $G_i = A_i B_i$, Carry propagate $P_i = A_i \\oplus B_i$; Unrolls carry recurrence to compute all carries simultaneously in two gate delays ($O(1)$ delay vs $O(n)$ in ripple carry).",
    "BCD Adder Architecture: Adds two 4-bit BCD numbers; Generates tentative binary sum; Correction detector circuit: $C_{corr} = K + S_3 S_2 + S_3 S_1$; Adds $0110_2$ via second 4-bit adder when $C_{corr} = 1$.",
    "Magnitude Comparators: Compares two $n$-bit binary words $A$ and $B$; Outputs: $A > B, A = B, A < B$; Bitwise equality $x_i = A_i B_i + A_i' B_i' = (A_i \\oplus B_i)'$; Equality condition: $A = B \\iff x_3 x_2 x_1 x_0 = 1$; Commercial 4-bit comparator IC 7485 cascadability.",
    "Decoders and Demultiplexers: $n$-to-$2^n$ line decoders; Active-high vs active-low enable inputs; 2-to-4 and 3-to-8 line decoders (74138); Full adder implementation using 3-to-8 decoder and OR gates; Demultiplexer as decoder with data on enable line.",
    "Encoders and Priority Encoders: $2^n$-to-$n$ line encoders; Limitations of simple encoders (undefined multiple inputs, all-zero ambiguous output); Priority Encoder (74147, 74148): selects highest order active input; Valid output flag $V$.",
    "Multiplexers (Data Selectors): $2^n$-to-1 multiplexers ($2:1, 4:1, 8:1, 16:1$); Function implementation: any Boolean function of $n$ variables can be synthesized using a $2^{n-1}$-to-1 MUX by connecting $n-1$ variables to select lines and remaining variable/constants to data inputs.",
    "Parity Circuits & Combinational Hazards: Even and odd parity generator/checker trees using XOR gates; Logic hazards: Static-1 hazard (momentary glitch to 0), Static-0 hazard, and Dynamic hazards; Hazard elimination by adding consensus redundant prime implicants across adjacent K-map subcubes.",
    "University Examination Strategy: Synthesize arbitrary 4-variable Boolean functions using single 8-to-1 MUX, design BCD adders with full correction logic, construct 4-to-16 decoders from 2-to-4 modules, and eliminate static-1 hazards using K-maps."
], [
    "Full Adder Carry Formula: $C_{out} = A B + B C_{in} + A C_{in} = A B + C_{in}(A \\oplus B)$.",
    "Full Subtractor Difference & Borrow: $D = A \\oplus B \\oplus B_{in}, \\quad B_{out} = A' B + B_{in}(A \\oplus B)'$.",
    "Adder-Subtractor Mode Control: Feed operand $B$ through XOR gates with mode line $M$; $M=0 \\implies \\text{Add}$, $M=1 \\implies \\text{Subtract}$.",
    "BCD Correction Formula: $Correction = C_{out} + S_3 S_2 + S_3 S_1$.",
    "Comparator Bit Equality: $x_i = A_i B_i + A_i' B_i' = (A_i \\oplus B_i)'$.",
    "Comparator A > B Condition: $A_3 B_3' + x_3 A_2 B_2' + x_3 x_2 A_1 B_1' + x_3 x_2 x_1 A_0 B_0'$.",
    "Decoder Expansion Rule: An $m$-to-$2^m$ decoder can be built from smaller decoders using tree hierarchy with enable pins.",
    "Multiplexer Equation (4:1 MUX): $Y = S_1' S_0' I_0 + S_1' S_0 I_1 + S_1 S_0' I_2 + S_1 S_0 I_3$.",
    "Static-1 Hazard Elimination: Enclose adjacent 1-cells in K-map that belong to separate implicants with a redundant bridging implicant.",
    "Exam Gold Tip: When implementing functions on a MUX, set select lines to the first $k$ variables and derive data inputs from truth table partition."
])

add("Digital Logic Design", 4, "Sequential Circuits (Flip-Flops, Counters)", [
    "Sequential Circuit Principles: Outputs depend on both present inputs and past history (internal memory state); Synchronous sequential circuits (clocked, state changes simultaneously on active clock edge) vs Asynchronous sequential circuits (unclocked, event-driven).",
    "Latches vs Flip-Flops: SR Latch with NOR gates (forbidden state $S=R=1$ leads to race condition) and NAND gates; Gated SR latch; Transparent D latch; Master-Slave flip-flop configuration eliminating race-around condition; Edge-triggered flip-flops.",
    "Flip-Flop Architectures & Conversions: D Flip-Flop (Delay: $Q_{next} = D$); T Flip-Flop (Toggle: $Q_{next} = T \\oplus Q$); JK Flip-Flop ($Q_{next} = J Q' + K' Q$); Race-around condition in level-triggered JK flip-flops when $J=K=1$ and pulse width $t_p > t_{pd}$; Conversion algorithms between arbitrary flip-flops.",
    "Flip-Flop Characteristic and Excitation Tables: Characteristic equations; Excitation tables (defining required inputs for state transitions $0 \\to 0, 0 \\to 1, 1 \\to 0, 1 \\to 1$); Essential tool for sequential counter and state machine synthesis.",
    "Sequential Circuit Analysis & State Models: State table, State diagram, State equations; Mealy Model (outputs depend on present state AND present inputs) vs Moore Model (outputs depend EXCLUSIVELY on present state); State minimization using row elimination and implication tables.",
    "State Assignment Techniques: Assigning binary codes to symbolic states; Binary, Gray, and One-Hot state assignments ($N$ flip-flops for $N$ states, simplifies next-state combinational logic).",
    "Synchronous Counter Design: Design algorithm: State diagram $\\to$ Excitation table $\\to$ K-Maps for flip-flop inputs $\\to$ Logic implementation; Modulo-$N$ counters, Up/Down counters, BCD decade counter (7490, 74160/74163); Handling unused states and lock-out prevention.",
    "Asynchronous (Ripple) Counters: Flip-flops connected in cascade, output of one drives clock of next; Propagation delay accumulation limits maximum operating frequency: $f_{max} = \\frac{1}{n \\cdot t_{pd}}$; Modulo truncation using asynchronous reset (`CLEAR`) gates.",
    "Shift Registers & Timing Ring Counters: Universal shift register (74194) supporting SISO, SIPO, PISO, PIPO modes; Ring counters ($N$ states for $N$ flip-flops) and Johnson twisted ring counters ($2N$ states with $50\\%$ duty cycle self-decoding timing sequences).",
    "University Examination Strategy: Convert JK flip-flop to D and T flip-flops using excitation tables, design synchronous Mod-6 and BCD decade counters using JK/T flip-flops with lock-out analysis, and synthesize Mealy sequence detectors."
], [
    "JK Characteristic Equation: $Q_{next} = J Q' + K' Q$.",
    "D Characteristic Equation: $Q_{next} = D$.",
    "T Characteristic Equation: $Q_{next} = T \\oplus Q = T Q' + T' Q$.",
    "JK Excitation Table: $0 \\to 0: (0, X); 0 \\to 1: (1, X); 1 \\to 0: (X, 1); 1 \\to 1: (X, 0)$.",
    "T Excitation Table: $0 \\to 0: 0; \\quad 0 \\to 1: 1; \\quad 1 \\to 0: 1; \\quad 1 \\to 1: 0$.",
    "D Excitation Table: $Q_{next} = D$ (input $D$ equals target next state).",
    "Race-Around Condition Criteria: Occurs in level-triggered JK flip-flops when $J=K=1$, clock pulse $t_p > t_{pd}$, and $t_p$ exceeds propagation delay.",
    "Moore Machine State Output: Output is associated directly with the state node and does not change until clock edge changes state.",
    "Johnson Counter Modulus: An $N$-stage Johnson counter generates $2N$ timing sequences with $50\\%$ duty cycle.",
    "Exam Gold Tip: In synchronous counter design, always check unused states to ensure counter does not enter a permanent dead-lock loop."
])

add("Digital Logic Design", 5, "Memory & Programmable Logic", [
    "Semiconductor Memory Hierarchy: Primary RAM (SRAM, DRAM) and ROM (Masked ROM, PROM, EPROM UV erasable, EEPROM electrical byte-erasable, Flash memory block-erasable); Memory capacity formulation: $2^k \\times n$ (where $k$ is address lines, $n$ is data bits).",
    "Random Access Memory Architecture: Internal decoder layout; 2D memory cell array ($2^k$ words of $n$ bits); Coincident decoding ($X-Y$ matrix decoders reducing line drivers from $2^k$ to $2^{k/2} + 2^{k/2}$); Read and write cycle timing diagrams.",
    "Memory Expansion Techniques: Word size expansion (combining memory chips in parallel to increase data bus width, e.g. two $1\\text{K} \\times 4$ to build $1\\text{K} \\times 8$); Word capacity expansion (combining chips using high-order address bits through a decoder to increase addressable words, e.g. two $1\\text{K} \\times 8$ to build $2\\text{K} \\times 8$).",
    "Programmable Logic Devices (PLD) Taxonomy: Read-Only Memory (ROM: fixed AND array, programmable OR array); Programmable Array Logic (PAL: programmable AND array, fixed OR array); Programmable Logic Array (PLA: programmable AND array, programmable OR array).",
    "Programmable Array Logic (PAL) Design: Commercial PAL architectures; Fixed OR gates summing fixed number of product terms (typically 2 to 4); Unused inputs tied to don't-care; Output logic macrocells (OLMC) providing registered/combinational programmable polarity.",
    "Programmable Logic Array (PLA) Design: High architectural flexibility; Both AND and OR arrays programmable; Shared product terms across multiple output functions; Program table specification (Product terms, AND inputs, OR outputs).",
    "CPLD & FPGA Architectures: CPLDs feature multiple PAL-like function blocks interconnected via central switch matrices (non-volatile, predictable delays); FPGAs feature large arrays of Configurable Logic Blocks (CLBs with 4/6-input LUTs, multiplexers, and flip-flops) surrounded by IOBs and programmable routing channels.",
    "FPGA Configurable Logic Block (CLB) Internal Datapath: Look-Up Tables (LUT, typically 4-input or 6-input implementing arbitrary truth tables), Wide multiplexers, Dedicated carry logic for fast arithmetic adders, Programmable D flip-flops.",
    "Hardware Description Languages (HDL): VHDL and Verilog fundamentals; Structural modeling (netlists of gates/modules), Dataflow modeling (Boolean concurrent assignments), Behavioral modeling (`always` blocks, process statements, state machines); Synthesis vs Simulation.",
    "University Examination Strategy: Design combinational functions using PLA program tables, expand memory chips to larger address and word sizes with chip-select decoding, implement logic on PAL architectures, and write Verilog code for a 4-bit synchronous counter."
], [
    "Memory Capacity Calculation: Address lines $k \\implies 2^k$ words; total bits $= 2^k \\times n$.",
    "ROM PLD Structure: Fixed full AND array (decoding all $2^n$ minterms) + Programmable OR array.",
    "PAL Structure: Programmable AND array + Fixed OR array (fastest, most widely deployed small PLD).",
    "PLA Structure: Programmable AND array + Programmable OR array (most flexible, allows product term sharing).",
    "LUT Principle in FPGA: An $n$-input LUT is an SRAM memory storing $2^n \\times 1$ bits, capable of synthesizing ANY $n$-variable logic function.",
    "Coincident Memory Decoding: Divides $k$ address lines into $k/2$ row and $k/2$ column decoders, drastically reducing gate counts.",
    "SRAM 6T Storage Cell: Composed of two cross-coupled CMOS inverters and two NMOS access pass transistors.",
    "DRAM 1T-1C Refresh Requirement: Charge stored on storage capacitor leaks via sub-threshold conduction; must be refreshed every 64 ms.",
    "Word Capacity Memory Expansion: High-order address bits are fed into an external decoder whose outputs drive active-low Chip Select ($\\overline{CS}$) lines.",
    "Exam Gold Tip: In PLA design tables, identify and reuse identical product terms across multiple outputs to minimize total AND gate count."
])

# Save updated batch 1
with open('scripts/sem3_btech_batch1_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 1 part 3 complete: total units now: {len(data)}")
