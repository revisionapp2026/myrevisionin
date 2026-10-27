"""
Append Computer Organization & Architecture (COA) to build_btech_sem3_computing.py.
"""

# 2. COMPUTER ORGANIZATION & ARCHITECTURE
coa_units = {
    "btech-coa: basic computer organization": {
        "highlights": [
            "Von Neumann vs Harvard Architectures: Von Neumann shares bus and memory for instructions and data (subject to Von Neumann bottleneck); Harvard utilizes physically separate instruction and data memories.",
            "Functional CPU Components: Comprises Arithmetic Logic Unit (ALU), Control Unit (CU), and dedicated register sets: Program Counter (PC), Instruction Register (IR), Memory Address Register (MAR), and Memory Buffer Register (MBR).",
            "System Bus Organization: Tri-bus structure: Address bus (unidirectional, determines addressable memory $2^k$), Data bus (bidirectional, word size width), and Control bus (read, write, clock, interrupt signals).",
            "Instruction Cycle Execution: Continuous cycle of Fetch (PC $\\to$ MAR $\\to$ Memory $\\to$ MBR $\\to$ IR, PC incremented), Decode (opcode extraction by CU), Operand Fetch, Execute, and Interrupt Check.",
            "Microprogrammed vs Hardwired Control: Hardwired CU uses combinational logic and state flip-flops for maximum clock speed; Microprogrammed CU uses control memory (ROM) storing micro-routines, providing upgrade flexibility.",
            "Bus Arbitration Protocols: Manages shared bus access among multiple masters; centralized schemes use Daisy Chaining ($O(1)$ lines but priority-biased) or Independent Request-Grant ($2n$ lines, fair arbitration).",
            "Clock Cycle & Performance Metrics: CPU execution time $T = \\text{IC} \\times \\text{CPI} \\times \\tau$, where $\\text{IC}$ is instruction count, $\\text{CPI}$ is clock cycles per instruction, and $\\tau = 1/f$ is clock period.",
            "Memory-Mapped vs Isolated I/O: Memory-mapped I/O assigns identical address space and assembly instructions (`LOAD/STORE`) to ports and RAM; Isolated I/O uses dedicated `IN/OUT` opcodes and control lines.",
            "Interrupt Processing Sequence: Current PC saved on stack, interrupt vector table (IVT) looked up, Interrupt Service Routine (ISR) executed, and return instruction `RTI` restores previous processor state.",
            "University Examination Strategy: Draw clean functional block diagrams showing internal CPU buses, register linkages, control signals, and step-by-step fetch-decode register transfers."
        ],
        "keyPoints": [
            "CPU Performance Equation: $\\text{CPU Time} = \\text{Instruction Count} \\times \\text{CPI} \\times \\frac{1}{\\text{Clock Frequency}}$.",
            "Address Bus Capacity: $k$ address lines can directly address up to $2^k$ distinct byte locations.",
            "Program Counter (PC) Function: Always holds the memory address of the very next instruction waiting to be fetched.",
            "Instruction Register (IR): Holds the currently executing binary instruction while it is being decoded by the control unit.",
            "Hardwired Control: Fast execution, rigid combinational logic; difficult to modify or expand instruction sets.",
            "Microprogrammed Control: Slower access due to micro-ROM fetch, highly flexible and microcode upgradeable.",
            "Daisy Chain Bus Arbitration: Simple 1-line grant wire; device closest to arbiter has absolute highest priority.",
            "Memory-Mapped I/O: Reduces available RAM address space, but eliminates need for specialized I/O instructions.",
            "Interrupt Service Routine (ISR): Triggered by hardware interrupt pins; CPU automatically disables lower priority interrupts.",
            "Exam Scoring Tip: Write exact Register Transfer Language (RTL) notation: $T_0: \\text{MAR} \\leftarrow \\text{PC}$, $T_1: \\text{MBR} \\leftarrow M[\\text{MAR}], \\text{PC} \\leftarrow \\text{PC} + 1$, $T_2: \\text{IR} \\leftarrow \\text{MBR}$."
        ]
    },
    "btech-coa: instruction sets & addressing": {
        "highlights": [
            "Instruction Set Architecture (ISA): Boundary contract between hardware and software; defines opcodes, data types, registers, addressing modes, and exception mechanisms.",
            "CISC vs RISC Philosophy: CISC (x86) emphasizes variable-length complex instructions, multiple memory operands, and microcode; RISC (ARM, MIPS, RISC-V) enforces fixed-length single-cycle instructions and load/store design.",
            "Instruction Formats & Field Splitting: Zero-address (stack-based `ADD`), One-address (accumulator-based `ADD X`), Two-address (`ADD R1, R2`), and Three-address (`ADD R1, R2, R3`) instruction structures.",
            "Immediate & Direct Addressing Modes: Immediate mode embeds constant operand directly in instruction field; Direct (Absolute) mode embeds effective memory address $EA = A$.",
            "Indirect & Register Indirect Modes: Indirect mode uses address pointer $EA = M[A]$ requiring two memory lookups; Register Indirect uses register value as memory address $EA = [R_i]$.",
            "Displacement Addressing Modes: Combines register content with offset: Indexed ($EA = [R] + A$), Base-Register ($EA = [\\text{Base}] + A$ for relocation), and PC-Relative ($EA = [\\text{PC}] + A$ for branching).",
            "Auto-Increment & Auto-Decrement Modes: Automatically increments or decrements pointer register ($R_i$) by operand word size after or before memory access, ideal for stack and array operations.",
            "Orthogonality & Instruction Encoding: Orthogonal instruction set allows any addressing mode with any opcode; trade-off between instruction length, code density, and decoding complexity.",
            "Endianness Conventions: Big-Endian stores Most Significant Byte (MSB) at lowest memory address; Little-Endian stores Least Significant Byte (LSB) at lowest address.",
            "University Examination Strategy: Always write algebraic effective address expressions ($EA = \\dots$) and trace sample instruction execution through register states."
        ],
        "keyPoints": [
            "Effective Address (EA): The exact physical memory address of the target operand computed by CPU addressing logic.",
            "PC-Relative Addressing: $EA = \\text{PC} + \\text{Offset}$; essential for position-independent code and local branch jumps.",
            "Indexed Addressing: $EA = \\text{Index Register} + \\text{Base Address}$; ideal for iterating through sequential arrays.",
            "Register Indirect Addressing: $EA = [R_i]$; executes faster than direct memory addressing because register is inside CPU.",
            "Immediate Addressing: Operand is part of the instruction itself; fastest access requiring 0 additional memory references.",
            "RISC Load/Store Rule: Arithmetic and logic instructions operate strictly on CPU registers; only `LOAD` and `STORE` touch RAM.",
            "CISC Characteristics: Variable-length instructions (1 to 15 bytes in x86), multi-cycle execution, complex addressing modes.",
            "Stack-Based Zero-Address: Operands popped implicitly from top of evaluation stack: `ADD` $\\implies \\text{push}(\\text{pop}() + \\text{pop}())$.",
            "Little-Endian Storage: Integer `0x12345678` stored as byte sequence `78 56 34 12` in ascending memory addresses.",
            "Exam Distinction: Construct a clear comparison table contrasting RISC and CISC across 6 criteria (Instruction size, CPI, Registers, Pipelining, Memory access, Addressing modes)."
        ]
    },
    "btech-coa: arithmetic & logic unit": {
        "highlights": [
            "Fixed-Point Binary Addition & Subtraction: Full adder computes sum $S = A \\oplus B \\oplus C_{in}$ and carry $C_{out} = AB + C_{in}(A \\oplus B)$; subtraction achieved by adding 2's complement with carry-in $C_0 = 1$.",
            "Carry Look-Ahead Adder (CLA): Eliminates ripple carry propagation delay by computing Carry Generate $G_i = A_i B_i$ and Carry Propagate $P_i = A_i \\oplus B_i$, achieving $O(1)$ addition delay.",
            "Booth's Multiplication Algorithm: Multiplies signed 2's complement integers by scanning bit pairs $(Q_0, Q_{-1})$; performs subtraction on `10` ($A \\leftarrow A - M$), addition on `01` ($A \\leftarrow A + M$), and arithmetic right shift.",
            "Bit-Pair (Modified Booth) Recording: Scans triplets of bits, reducing required partial products by half from $n$ to $n/2$, speeding up hardware multipliers.",
            "Division Algorithms: Restoring division restores partial remainder by adding back divisor upon negative difference; Non-Restoring division skips restoration, correcting remainder in final cycle.",
            "Wallace Tree Multipliers: Fast parallel multiplier tree using Carry-Save Adders (CSA) to reduce $n$ partial products in $O(\\log n)$ gate delays.",
            "IEEE 754 Floating-Point Standard: Single precision (32-bit: 1 sign, 8 exponent with bias 127, 23 mantissa); Double precision (64-bit: 1 sign, 11 exponent with bias 1023, 52 mantissa).",
            "Normalized vs Subnormal Numbers: Normalized value $(-1)^s \\times 1.M \\times 2^{E - 127}$ with implicit leading 1; subnormal numbers handle gradual underflow with $E = 0$ and leading 0.",
            "Arithmetic Overflow Detection: In signed 2's complement addition, overflow occurs iff carry-in to sign bit does not equal carry-out from sign bit ($V = C_{in} \\oplus C_{out}$).",
            "University Examination Strategy: Solve complete step-by-step Booth's multiplication trace tables showing operation, registers $A, Q, Q_{-1}$, and shift steps."
        ],
        "keyPoints": [
            "Carry Generate & Propagate: $G_i = A_i B_i$ and $P_i = A_i \\oplus B_i$; CLA carry: $C_{i+1} = G_i + P_i C_i$.",
            "Booth's Bit Scan Rules: `00` or `11`: Arithmetic Shift Right (ASR); `01`: $A \\leftarrow A + M$, then ASR; `10`: $A \\leftarrow A - M$, then ASR.",
            "Arithmetic Shift Right (ASR): Shifts all bits right while duplicating the sign bit to preserve 2's complement sign.",
            "IEEE 754 Single Precision: Value $= (-1)^S \\times (1 + \\text{fraction}) \\times 2^{\\text{exponent} - 127}$.",
            "Special IEEE 754 Values: Exponent all 1s and mantissa 0 denotes $\\pm\\infty$; Exponent all 1s and non-zero mantissa denotes NaN (Not a Number).",
            "2's Complement Overflow Rule: Overflow $V = C_n \\oplus C_{n-1}$; occurs when two positive numbers sum to negative or two negative sum to positive.",
            "Carry-Save Adder (CSA): Adds 3 numbers simultaneously, producing sum and carry vectors without carry propagation delay.",
            "Non-Restoring Division Rule: If $A \\ge 0$, shift left and subtract $M$; If $A < 0$, shift left and add $M$; quotient bit set based on sign of $A$.",
            "Biased Exponent: Biasing maps signed exponents into positive integers, allowing straightforward integer magnitude comparisons.",
            "Exam Scoring Tip: In Booth's algorithm trace, clearly box the initial 2's complement of multiplicand ($-M$) before starting iterative steps."
        ]
    },
    "btech-coa: memory hierarchy": {
        "highlights": [
            "Memory Hierarchy Principles: Exploits Locality of Reference (Temporal locality: recently accessed data accessed soon; Spatial locality: nearby data accessed soon) across registers, cache, RAM, and disk.",
            "Average Memory Access Time (AMAT): Quantified by $\\text{AMAT} = T_{hit} + \\text{Miss Rate} \\times \\text{Miss Penalty}$; multi-level caches reduce miss penalty exponentially.",
            "Cache Memory Mapping Techniques: Direct Mapping (index determines single slot, high conflict misses), Fully Associative (block placed anywhere, requires expensive parallel CAM search), and $N$-Way Set Associative.",
            "Cache Address Decoding: Memory address decomposes into Tag ($T$), Set Index ($S = \\log_2(\\text{Sets})$), and Block Word Offset ($W = \\log_2(\\text{Block size})$).",
            "Cache Write Policies: Write-Through writes simultaneously to cache and lower memory (consistent but slow); Write-Back writes only to cache with a dirty bit, updating lower memory upon block eviction.",
            "Cache Replacement Algorithms: Least Recently Used (LRU tracks usage history), First-In First-Out (FIFO), Random, and Least Frequently Used (LFU).",
            "Virtual Memory & Paging: Translates logical addresses to physical frames via Page Tables; pages typically 4 KB; page fault triggers disk I/O interrupt.",
            "Translation Lookaside Buffer (TLB): High-speed associative cache inside CPU storing recent virtual-to-physical address mappings; minimizes page table walk latency.",
            "Multi-Level Paging & Inverted Tables: Multi-level page tables prevent allocating contiguous memory for sparse address spaces; Inverted page tables index by physical frame.",
            "University Examination Strategy: Solve numerical problems calculating Tag, Set, Word bits, AMAT, hit ratios, and memory address breakdown diagrams."
        ],
        "keyPoints": [
            "AMAT Formula: $\\text{AMAT} = T_{cache} + \\text{Miss Rate} \\times \\text{Miss Penalty}$.",
            "Cache Address Decomposition: Total address bits $= \\text{Tag bits} + \\text{Set Index bits} + \\text{Word Offset bits}$.",
            "Number of Sets in $k$-Way Cache: $\\text{Sets} = \\frac{\\text{Cache Size}}{\\text{Block Size} \\times k}$.",
            "Direct Mapped Cache: $k = 1$; each memory block maps to exactly one line: $\\text{Line} = \\text{Block} \\bmod \\text{Total Lines}$.",
            "Dirty Bit Function: In write-back cache, dirty bit indicates block was modified in cache and must be written to RAM upon eviction.",
            "TLB Hit Time vs Miss: On TLB hit, physical address available in 1 cycle; on TLB miss, CPU performs page table walk in RAM.",
            "Page Fault Penalty: Accessing mechanical disk or SSD incurs massive miss penalty ($10^5$ to $10^6$ CPU clock cycles).",
            "Cache 3Cs Classification: Compulsory misses (cold start), Capacity misses (cache too small), and Conflict misses (set collision).",
            "Effective Memory Access Time (EMAT): $\\text{EMAT} = p \\times T_{\\text{page fault}} + (1-p) \\times T_{\\text{RAM}}$ where $p$ is page fault rate.",
            "Exam Calculation Tip: Always convert capacities to powers of 2 (e.g. 64 KB $= 2^{16}$ bytes, 64-byte block $= 2^6$ bytes)."
        ]
    },
    "btech-coa: i/o organization & pipelining": {
        "highlights": [
            "I/O Data Transfer Modes: Programmed I/O (CPU continually polls status register, wastes CPU cycles), Interrupt-Driven I/O (device interrupts CPU when ready), and Direct Memory Access (DMA).",
            "Direct Memory Access (DMA) Architecture: DMA controller transfers data blocks directly between peripheral device and RAM without CPU intervention; uses cycle stealing or burst mode.",
            "Synchronous vs Asynchronous Bus Timing: Synchronous bus synchronizes all transactions to a central clock; Asynchronous bus uses handshaking signals (`Request` and `Acknowledge`).",
            "Instruction Pipeline Architecture: Decomposes instruction execution into overlapping stages: Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Write Back (WB).",
            "Pipeline Performance Speedup: Ideal speedup for $k$-stage pipeline processing $n$ instructions: $S_k = \\frac{n \\cdot k}{k + n - 1}$; approaches $S_k \\approx k$ as $n \\to \\infty$.",
            "Pipeline Hazards - Structural Hazards: Resource conflicts when multiple pipeline stages attempt to access the same hardware unit (e.g. single memory port for IF and MEM) simultaneously.",
            "Pipeline Hazards - Data Hazards: Instruction depends on the result of a previous instruction still in the pipeline; includes RAW (Read-After-Write, true dependency), WAR, and WAW hazards.",
            "Data Forwarding / Bypassing: Resolves RAW data hazards by routing ALU execution output directly from EX/MEM or MEM/WB pipeline registers back to ALU input, eliminating stall cycles.",
            "Control Hazards & Branch Prediction: Caused by conditional branches altering instruction stream; mitigated via branch prediction (static vs dynamic 2-bit saturating counters) and delayed branch slots.",
            "Superscalar & Instruction-Level Parallelism (ILP): Superscalar processors execute multiple instructions per clock cycle via multiple parallel execution units, out-of-order execution, and register renaming."
        ],
        "keyPoints": [
            "Ideal Pipeline Speedup: $S_k = \\frac{n \\cdot k}{k + n - 1} \\to k$ for large $n$.",
            "Pipeline Throughput: $\\text{Throughput} = \\frac{n}{(k + n - 1)\\tau}$, where $\\tau$ is pipeline stage clock period.",
            "RAW Data Hazard: Instruction $j$ tries to read a source register before instruction $i$ writes to it; solved by forwarding or stalls.",
            "Data Forwarding Hardware: Routes result from ALU output directly to ALU input of subsequent stage, bypassing register file write.",
            "Branch Penalty: Number of wasted clock cycles caused by flushing incorrect instructions from pipeline upon mispredicted branch.",
            "2-Bit Dynamic Branch Predictor: Uses 4 states (Strongly Taken, Weakly Taken, Weakly Not Taken, Strongly Not Taken); requires 2 mispredictions to change state.",
            "DMA Cycle Stealing: DMA controller steals one clock cycle from CPU per word transfer during memory bus idle phases.",
            "DMA Burst Mode: DMA controller locks system bus and transfers entire block of contiguous data without releasing bus to CPU.",
            "Structural Hazard Solution: Duplicate hardware resources (e.g. separate instruction and data caches in Harvard split architecture).",
            "Exam Space-Time Diagram: For pipeline questions, draw a 2D grid of Clock Cycles (horizontal) vs Instructions (vertical) showing stage progression."
        ]
    }
}

print("COA units prepared.")
