import json, os

data = {}

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    data[f"{sub}:::{num}"] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 1. DATA STRUCTURES & ALGORITHMS (B.Tech)
# =========================================================================
add("Data Structures & Algorithms", 1, "Arrays, Linked Lists", [
    "Array Data Structures & Memory Addressing: Contiguous memory allocation, Row-major vs Column-major 2D array address translation: $\\text{Loc}(A[i][j]) = \\text{Base} + [(i - \\text{LB}_1) \\times C + (j - \\text{LB}_2)] \\times w$; Static vs dynamic arrays; Amortized analysis of dynamic resizing ($O(1)$ amortized insertion).",
    "Linear vs Non-Linear Structures: Abstract Data Types (ADT); Trade-offs between spatial locality in cache lines and insertion/deletion flexibility in dynamic memory.",
    "Singly Linked List Implementation & Algorithms: Node pointer structure; Traversal, head/tail insertion, deletion; Time complexities: insertion at head $O(1)$, insertion at tail $O(n)$ without tail pointer, arbitrary search $O(n)$.",
    "Doubly Linked Lists & Sentinel Nodes: Bidirectional pointer traversal (`prev` and `next`); Symmetric deletion in $O(1)$ given node pointer; Doubly linked dummy header and trailer sentinels simplifying edge cases.",
    "Circular Linked Lists: Tail node pointing back to head; Applications in round-robin process scheduling in operating systems; Josephus problem simulation.",
    "Skip Lists & Probabilistic Indexing: Multi-level linked list hierarchy with randomized geometric distribution forward pointers; Search, insert, delete in expected $O(\\log n)$ time; Space complexity $O(n)$.",
    "Pointer Manipulation & Memory Hazards: Dangling pointers, memory leaks in unmanaged languages (C/C++), double-free bugs; Pointer reversal algorithm for in-place linked list reversal.",
    "Linked List Cycle Detection Algorithms: Floyd's cycle-finding tortoise and hare algorithm ($O(n)$ time, $O(1)$ space); Brent's cycle detection algorithm; Finding the cycle start node via synchronized pointer advancement from head and collision point.",
    "Sparse Matrix Representation via Orthogonal Linked Lists: Triplet format $(row, col, value)$ vs multi-linked orthogonal lists with cross-pointers for rows and columns; Compressed Sparse Row (CSR) array format.",
    "University Examination Strategy: Solve complete address calculation numericals for 2D/3D arrays, write bug-free C code for reversing singly and doubly linked lists, and trace Floyd's cycle detection algorithm mathematically."
], [
    "Row-Major 2D Address: $\\text{Loc}(A[i][j]) = \\text{Base} + w [i \\cdot N + j]$.",
    "Column-Major 2D Address: $\\text{Loc}(A[i][j]) = \\text{Base} + w [j \\cdot M + i]$.",
    "Dynamic Array Amortization: Doubling capacity upon saturation yields $O(1)$ amortized insert cost.",
    "Singly Linked List Inversion: Uses three sliding pointers: `prev = NULL`, `curr = head`, `next = NULL`.",
    "Doubly Linked Node Deletion: `node->prev->next = node->next; node->next->prev = node->prev;` in $O(1)$ time.",
    "Floyd Cycle Detection Phase 1: Slow pointer advances 1 step, fast advances 2 steps; collision inside loop confirms cycle.",
    "Floyd Cycle Detection Phase 2: Reset slow pointer to head, advance slow and fast by 1 step each; intersection is loop start.",
    "Circular List Sentry: Insertion at head requires updating the final tail node's `next` pointer or using tail-only reference.",
    "Skip List Height Probabilities: Probability of node reaching level $k$ is $p^k = (1/2)^k$, yielding $O(\\log n)$ average levels.",
    "Exam Scoring Tip: In array address calculations, always explicitly identify whether 0-based or 1-based indexing applies."
])

add("Data Structures & Algorithms", 2, "Stacks & Queues", [
    "Stack Abstract Data Type & LIFO Discipline: Fundamental operations `push`, `pop`, `peek`/`top`, `isEmpty`, `isFull`; Array-based static implementation vs linked-list dynamic implementation; Stack overflow and underflow conditions.",
    "Expression Parsing & Notations: Infix ($A + B$), Prefix ($+ A B$), and Postfix ($A B +$); Operator precedence and associativity tables; Infix to postfix conversion algorithm using operator stack and shunting-yard logic.",
    "Postfix Expression Evaluation Algorithm: Single-pass scan from left to right; Operands pushed onto evaluation stack; Operators pop two operands, compute $op_1 \\text{ op } op_2$, and push intermediate result back; Time complexity $O(n)$, space $O(n)$.",
    "Recursion Architecture & System Call Stack: Activation records / stack frames (local variables, parameters, return address, saved registers); Recursive depth limits; Eliminating tail recursion into iterative loops.",
    "Queue Abstract Data Type & FIFO Discipline: Fundamental operations `enqueue` and `dequeue`; Linear queue array limitation (false overflow due to front drift); Circular queue utilizing modulo arithmetic (`rear = (rear + 1) % MAX`).",
    "Double-Ended Queue (Deque): Insertions and deletions supported at both front and rear ends; Input-restricted deque vs output-restricted deque; Implementation of Sliding Window Maximum algorithm using monotonic decreasing deque in $O(n)$ time.",
    "Priority Queues & Binary Heap Implementation: Min-heap and Max-heap structures; Complete binary tree array mapping; Array indices: parent $\\lfloor(i-1)/2\\rfloor$, left child $2i+1$, right child $2i+2$; `heapify-up` ($O(\\log n)$) and `heapify-down` ($O(\\log n)$); Linear-time heap construction (`build-heap` in $O(n)$).",
    "Queue Simulation with Two Stacks: Enqueue in $O(1)$ on Stack 1; Dequeue pops from Stack 2, transferring all elements from Stack 1 when Stack 2 is empty ($O(1)$ amortized dequeue time).",
    "Industrial Applications of Stacks & Queues: Browser back-forward navigation cache, undo-redo edit buffers in IDEs; CPU scheduling run-queues, network router packet buffer management.",
    "University Examination Strategy: Convert complex infix expressions containing parentheses and exponents to postfix, evaluate postfix traces in tabular format, and implement circular queue array logic with exact boundary conditions."
], [
    "Circular Queue Empty Condition: `front == rear` (or `count == 0`).",
    "Circular Queue Full Condition: `(rear + 1) % MAX == front`.",
    "Infix to Postfix Operator Rule: Higher or equal precedence operator on top of stack is popped before pushing incoming operator.",
    "Right-Associative Operators: Exponentiation ($^$) is evaluated right-to-left; not popped on equal precedence.",
    "Monotonic Deque Window Maximum: Pops elements from rear smaller than incoming element to maintain descending order.",
    "Binary Heap Parent-Child Indices: Parent $\\lfloor(i-1)/2\\rfloor$, Left $2i+1$, Right $2i+2$ in 0-indexed arrays.",
    "Heap Property Formulation: Max-Heap: $A[parent(i)] \\ge A[i]$; Min-Heap: $A[parent(i)] \\le A[i]$.",
    "Build-Heap Linear Complexity: $\\sum_{h=0}^{\\lfloor\\log n\\rfloor} \\frac{n}{2^{h+1}} O(h) = O(n)$.",
    "Queue Using Stacks Invariant: Elements must only be transferred from Stack 1 to Stack 2 when Stack 2 is completely empty.",
    "Exam Gold Rule: In parenthesized expression validation, check that stack is completely empty after consuming the final token."
])

add("Data Structures & Algorithms", 3, "Trees & Graphs", [
    "Binary Trees & Structural Taxonomy: Definition, properties: maximum nodes at level $i$ is $2^i$; Maximum nodes in tree of height $h$ is $2^{h+1}-1$; Full, complete, perfect, degenerate, and balanced binary trees.",
    "Tree Traversal Algorithms: Depth-First Search (DFS): Preorder (Root-Left-Right), Inorder (Left-Root-Right), Postorder (Left-Right-Root); Iterative traversal using explicit stack; Breadth-First Search (BFS) / Level-order traversal using FIFO queue.",
    "Binary Search Tree (BST) Properties: For every node $X$, all keys in left subtree $< X.key$ and all keys in right subtree $> X.key$; Inorder traversal produces strictly ascending sorted order; Search, insertion, and deletion algorithms ($O(h)$ time where $h = O(\\log n)$ best, $h = O(n)$ worst).",
    "BST Deletion Mechanics: Case 1: Node is leaf (remove directly); Case 2: Node has one child (bypass node); Case 3: Node has two children (replace key with in-order successor or predecessor, recursively delete successor).",
    "Self-Balancing AVL Trees: Balance factor $BF(node) = \\text{height}(left) - \\text{height}(right) \\in \\{-1, 0, +1\\}$; Rotations for rebalancing: Left-Left (Single Right), Right-Right (Single Left), Left-Right (Double Left-Right), Right-Left (Double Right-Left); Height strictly bounded by $1.44\\log_2(n+2)$.",
    "Red-Black Trees & Multi-Way B-Trees: Red-Black invariants (root is black, no consecutive red nodes, equal black-height on all paths); B-Tree of order $m$ for external storage indexing: node keys bounded between $\\lceil m/2 \\rceil - 1$ and $m-1$.",
    "Graph Representations & Graph Traversal: Adjacency Matrix ($O(V^2)$ space, $O(1)$ edge query) vs Adjacency List ($O(V+E)$ space); Graph BFS (queue, shortest path in unweighted graph) and Graph DFS (recursion/stack, cycle detection, connected components).",
    "Topological Sorting & Directed Acyclic Graphs (DAG): Linear ordering of vertices such that for every directed edge $(u, v)$, $u$ precedes $v$; Kahn's algorithm using in-degree array and queue; DFS-based topological sort using finish times.",
    "Minimum Spanning Tree (MST) Algorithms: Prim's algorithm (greedy vertex-growing using min-priority queue, $O(E \\log V)$); Kruskal's algorithm (greedy edge-adding using Disjoint Set Union DSU with union-by-rank and path compression, $O(E \\log E)$).",
    "Shortest Path Algorithms: Dijkstra's algorithm for single-source shortest path with non-negative weights ($O((V+E)\\log V)$ using Fibonacci/binary heap); Bellman-Ford algorithm handling negative edge weights and detecting negative cycles ($O(V \\cdot E)$); Floyd-Warshall all-pairs shortest paths ($O(V^3)$ DP).",
], [
    "AVL Balance Factor Constraint: $|BF| = |h_L - h_R| \\le 1$ for every node.",
    "AVL Height Bound: Maximum height $h < 1.4404 \\log_2(N+2) - 0.328$.",
    "Red-Black Black-Height Rule: Every simple path from node to descendant leaf contains same number of black nodes.",
    "Kruskal DSU Complexity: Ackermann inverse $\\alpha(V)$ yields nearly linear $O(E \\alpha(V))$ amortized disjoint-set operations.",
    "Dijkstra Non-Negative Constraint: Fails on graphs with negative edge weights due to greedy relaxation finality.",
    "Bellman-Ford Cycle Criterion: If distance reduces on the $V$-th iteration, a negative-weight cycle exists.",
    "Floyd-Warshall Recurrence: $D^{(k)}[i][j] = \\min(D^{(k-1)}[i][j], D^{(k-1)}[i][k] + D^{(k-1)}[k][j])$.",
    "Kahn Algorithm In-Degree Tracking: Vertices with in-degree 0 are queued; processed vertices decrement neighbor in-degrees.",
    "B-Tree Key Capacity: Internal nodes contain at most $m-1$ keys and at least $\\lceil m/2 \\rceil - 1$ keys.",
    "Exam Scoring Tip: When constructing binary trees from traversals, unique reconstruction requires Inorder combined with either Preorder or Postorder."
])

add("Data Structures & Algorithms", 4, "Sorting & Searching", [
    "Comparison-Based Sorting Lower Bound: Information-theoretic decision tree model; $n!$ possible permutations require minimum decision tree height $h \\ge \\log_2(n!) = \\Omega(n \\log n)$; No comparison-based sort can beat $O(n \\log n)$ in the worst case.",
    "Elementary Sorting Algorithms: Bubble Sort (pairwise adjacent swaps, $O(n^2)$ worst, $O(n)$ best with swapped flag); Selection Sort (find minimum, swap to current slot, strictly $O(n^2)$ comparisons, minimum data movement $O(n)$ swaps); Insertion Sort (shift elements to insert, $O(n^2)$ worst, $O(n)$ best on nearly sorted arrays, stable).",
    "Merge Sort & Divide-and-Conquer: Recurrence relation $T(n) = 2T(n/2) + O(n)$; Master Theorem case 2 yields $T(n) = \\Theta(n \\log n)$ in all cases; Two-way merge subroutine requiring $O(n)$ auxiliary memory; Stability preservation.",
    "Quick Sort Partitioning Strategies: Lomuto partition scheme (single tracking index, more swaps) vs Hoare partition scheme (two converging pointers, fewer swaps); Recurrence $T(n) = T(k) + T(n-k-1) + O(n)$; Worst case $O(n^2)$ on sorted arrays with naive pivot; Randomized pivot selection achieving expected $O(n \\log n)$; Median-of-three pivot.",
    "Heap Sort Architecture: Phase 1: Build max-heap in $O(n)$ time; Phase 2: Repeatedly swap root with last unsorted leaf and call `heapify` on root ($n-1$ times, each taking $O(\\log n)$); Overall time $\\Theta(n \\log n)$, in-place $O(1)$ auxiliary space, unstable.",
    "Non-Comparison Sorting in Linear Time: Counting Sort (integer keys in range $[0, k]$, $O(n+k)$ time, requires auxiliary count array); Radix Sort (LSD vs MSD sorting digit-by-digit using stable counting sort subroutine, $O(d(n+k))$ time); Bucket Sort (distribute into buckets, sort uniformly distributed floating-point numbers in expected $O(n)$ time).",
    "External Sorting for Big Data: Multi-way external merge sort; Run generation, replacement selection using tournament trees (losers tree), polyphase merge to minimize secondary disk I/O head seeks.",
    "Searching Algorithms: Linear Search ($O(n)$ time); Binary Search on sorted arrays (iterative vs recursive, recurrence $T(n) = T(n/2) + O(1)$, time $O(\\log n)$, space $O(1)$); Interpolation Search for uniformly distributed keys ($O(\\log\\log n)$ average, $O(n)$ worst).",
    "Binary Search Variations & Bound Calculations: Finding lower bound (`std::lower_bound`: first element $\\ge target$) and upper bound (`std::upper_bound`: first element $> target$); Peak finding, rotated sorted array search.",
    "University Examination Strategy: State the Master Theorem derivation for Merge Sort, trace Hoare vs Lomuto Quick Sort partitions on arrays with duplicate keys, and demonstrate Radix Sort passes on multi-digit integer lists."
], [
    "Comparison Sort Lower Bound: $\\log_2(n!) \\approx n \\log_2 n - n \\log_2 e = \\Omega(n \\log n)$.",
    "Merge Sort Recurrence: $T(n) = 2T(n/2) + c n \\implies T(n) = O(n \\log n)$ guaranteed in all cases.",
    "Quick Sort Worst-Case Trigger: Occurs when pivot is consistently extreme minimum or maximum ($T(n) = T(n-1) + O(n) = O(n^2)$).",
    "Hoare Partition Swapping: Two indices converge from left and right, swapping inverted pairs; does not guarantee pivot at final index.",
    "Heap Sort Memory Efficiency: Achieves optimal $O(n \\log n)$ time while requiring strictly $O(1)$ auxiliary memory.",
    "Counting Sort Stability: Elements must be placed into output array by traversing input array in reverse order.",
    "Radix Sort LSD Constraint: Subordinate sorting algorithm applied at each digit stage must be strictly stable.",
    "Binary Search Midpoint Overflow: Calculate `mid = low + (high - low) / 2` instead of `(low + high) / 2` to prevent 32-bit integer overflow.",
    "Interpolation Search Formula: $pos = low + \\left[ \\frac{target - A[low]}{A[high] - A[low]} \\right] (high - low)$.",
    "Exam Gold Tip: Always state whether each sorting algorithm is stable (preserves relative order of equal keys) and in-place."
])

add("Data Structures & Algorithms", 5, "Hashing & Algorithm Analysis", [
    "Hashing Foundations & Direct Addressing: Direct Address Table (DAT) limitations; Hash function mapping universe of keys $U$ into hash table buckets $[0, m-1]$; Criteria for ideal hash functions (uniform distribution, deterministic, fast computation).",
    "Hash Functions & Compression Maps: Division method ($h(k) = k \\bmod m$, where $m$ is prime not close to power of 2); Multiplication method ($h(k) = \\lfloor m (k A \\bmod 1) \\rfloor$ with Knuth's golden ratio $A = (\\sqrt{5}-1)/2$); Mid-square method and Universal Hashing.",
    "Collision Resolution by Chaining: Each bucket stores a linked list of collided keys; Load factor $\\alpha = n / m$; Under Simple Uniform Hashing Assumption (SUHA), expected search time is $\\Theta(1 + \\alpha)$; Worst-case search $O(n)$ when all keys hash to single bucket.",
    "Open Addressing Schemes: Linear Probing ($h(k, i) = (h'(k) + i) \\bmod m$, suffers from primary clustering); Quadratic Probing ($h(k, i) = (h'(k) + c_1 i + c_2 i^2) \\bmod m$, suffers from secondary clustering); Double Hashing ($h(k, i) = (h_1(k) + i \\cdot h_2(k)) \\bmod m$, where $h_2(k)$ must be coprime to $m$).",
    "Open Addressing Performance Bounds: Under uniform hashing, expected probes in unsuccessful search $\\frac{1}{1 - \\alpha}$; Expected probes in successful search $\\frac{1}{\\alpha} \\ln\\frac{1}{1 - \\alpha}$; Requires $\\alpha < 1$; Table resizing and rehashing when $\\alpha > 0.75$.",
    "Asymptotic Notations & Complexity Classes: Big-O ($O$, asymptotic upper bound), Big-Omega ($\\Omega$, asymptotic lower bound), Big-Theta ($\\Theta$, asymptotically tight bound); Little-o and little-omega; Formal limit definitions.",
    "Mathematical Recurrence Resolution: Substitution method (mathematical induction); Recursion Tree method; Master Theorem: $T(n) = a T(n/b) + f(n)$ with three cases comparing $f(n)$ to $n^{\\log_b a}$; Akra-Bazzi method for irregular recurrences.",
    "Dynamic Programming vs Greedy Paradigms: Optimal substructure and overlapping subproblems (DP, memoization top-down vs tabulation bottom-up); Greedy-choice property (locally optimal choices lead to globally optimal solution; fractional knapsack vs 0/1 knapsack).",
    "String Matching & Pattern Search: Naive string matching ($O((n-m+1)m)$); Knuth-Morris-Pratt (KMP) algorithm using Longest Prefix which is also Suffix (LPS) array ($O(n+m)$ time); Rabin-Karp algorithm using rolling hash.",
    "University Examination Strategy: Solve Master Theorem recurrence problems across all three cases, compute exact probing sequences for linear vs double hashing, and write KMP prefix table generation algorithms."
], [
    "Load Factor Definition: $\\alpha = n / m$, where $n$ is number of stored keys and $m$ is table capacity.",
    "Double Hashing Coprime Rule: $h_2(k)$ must produce a value relatively prime to $m$ so all $m$ slots are probed.",
    "Open Addressing Search Bound: Unsuccessful search probes average $\\frac{1}{1 - \\alpha}$; successful search averages $\\frac{1}{\\alpha} \\ln\\frac{1}{1 - \\alpha}$.",
    "Master Theorem Case 1: If $f(n) = O(n^{\\log_b a - \\epsilon})$, then $T(n) = \\Theta(n^{\\log_b a})$.",
    "Master Theorem Case 2: If $f(n) = \\Theta(n^{\\log_b a} \\log^k n)$, then $T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)$.",
    "Master Theorem Case 3: If $f(n) = \\Omega(n^{\\log_b a + \\epsilon})$ and regularity holds, then $T(n) = \\Theta(f(n))$.",
    "Big-O Formal Definition: $f(n) = O(g(n)) \\iff \\exists c > 0, n_0 \\ge 0 \\text{ s.t. } 0 \\le f(n) \\le c \\cdot g(n), \\forall n \\ge n_0$.",
    "KMP LPS Array Meaning: `lps[i]` stores length of longest proper prefix of `pattern[0..i]` that is also a suffix of `pattern[0..i]`.",
    "0/1 Knapsack Complexity: Solved via dynamic programming in pseudo-polynomial time $O(n W)$ and space $O(W)$.",
    "Exam Scoring Tip: In Master Theorem analysis, always verify the regularity condition $a f(n/b) \\le c f(n)$ for case 3."
])

# =========================================================================
# 2. COMPUTER ORGANIZATION & ARCHITECTURE (B.Tech)
# =========================================================================
add("Computer Organization & Architecture", 1, "Basic Computer Organization", [
    "Von Neumann Architecture vs Harvard Architecture: Stored-program concept; Shared memory for instructions and data (Von Neumann bottleneck) vs separate physical memories/buses for instructions and data (Harvard); Functional units: CPU, memory, I/O devices.",
    "Central Processing Unit (CPU) Internal Bus Structure: Program Counter (PC), Instruction Register (IR), Memory Address Register (MAR), Memory Data Register (MDR), Accumulator (AC), General Purpose Registers (GPRs); System bus architecture (Data bus, Address bus, Control bus).",
    "Instruction Cycle Phases: Fetch cycle (MAR $\\leftarrow$ PC, Memory read, MDR $\\leftarrow$ Data, IR $\\leftarrow$ MDR, PC $\\leftarrow$ PC + 1); Indirect cycle (fetch effective address); Execute cycle; Interrupt cycle (save PC onto stack, load interrupt service routine address).",
    "Micro-Operations & Register Transfer Language (RTL): Basic register transfer $R_2 \\leftarrow R_1$; Arithmetic micro-operations (addition, subtraction via 2's complement, increment); Logic micro-operations (AND, OR, XOR, NOT); Shift micro-operations (logical, arithmetic, circular).",
    "Hardwired Control Unit Design: Fixed logic gates, flip-flops, decoders, and counter circuits; High-speed execution, rigid design, difficult to modify or expand instruction set; State-table and delay-element methods.",
    "Microprogrammed Control Unit Design: Control memory (ROM) storing microinstructions; Control Address Register (CAR), Control Data Register (CDR), Next-Address Generator (sequencer); Horizontal microprogramming (wide control word, unencoded, high parallelism) vs Vertical microprogramming (narrow control word, highly encoded, requires decoder).",
    "Bus Arbitration & Bus Timing: Master-slave bus protocols; Centralized arbitration (Daisy chaining, Polling, Independent request lines) vs Distributed arbitration; Synchronous bus (common clock pulse) vs Asynchronous bus (handshake control lines: `req` and `ack`).",
    "System Performance Metrics: CPU Execution Time = $\\text{Instruction Count} \\times \\text{CPI} \\times \\text{Clock Cycle Time}$; MIPS (Million Instructions Per Second) and MFLOPS; Amdahl's Law for speedup: $S = \\frac{1}{(1 - f) + \\frac{f}{k}}$.",
    "Instruction Format Types: Zero-address instructions (stack-based), One-address instructions (accumulator-based), Two-address instructions, Three-address instructions (register-to-register architectures like RISC).",
    "University Examination Strategy: Draw complete block schematics of Von Neumann architecture with bus interconnections, trace RTL micro-operations for instruction fetch and execute, and contrast Hardwired vs Microprogrammed control units in tabular format."
], [
    "CPU Execution Time Formula: $T = \\text{IC} \\times \\text{CPI} \\times T_{clk} = \\frac{\\text{IC} \\times \\text{CPI}}{\\text{Frequency}}$.",
    "Amdahl's Law Speedup: $S = \\frac{1}{(1 - f) + f / k}$, where $f$ is parallelizable fraction and $k$ is speedup factor.",
    "Fetch Cycle RTL Sequence: $T_0: \\text{MAR} \\leftarrow \\text{PC}; T_1: \\text{MDR} \\leftarrow M[\\text{MAR}], \\text{PC} \\leftarrow \\text{PC} + 1; T_2: \\text{IR} \\leftarrow \\text{MDR}$.",
    "Horizontal vs Vertical Microcode: Horizontal requires no decoding and enables maximum concurrency; Vertical minimizes ROM storage width.",
    "Daisy Chaining Arbitration: Priority determined by physical distance from bus arbiter; lowest priority devices suffer starvation.",
    "Asynchronous Handshaking: Non-clocked data transfer using bidirectional `strobe` or two-way request/acknowledge signals.",
    "Von Neumann Bottleneck: CPU throughput constrained because instruction fetch and data read share the same physical bus.",
    "Arithmetic Shift Left: Multiplies signed 2's complement binary integer by 2; overflow occurs if sign bit flips.",
    "Arithmetic Shift Right: Divides signed integer by 2; sign bit is replicated into most significant position.",
    "Exam Scoring Tip: In bus bandwidth problems, calculate bandwidth as $\\text{Data Bus Width (bytes)} \\times \\text{Bus Frequency (Hz)}$."
])

add("Computer Organization & Architecture", 2, "Instruction Sets & Addressing", [
    "Instruction Set Architecture (ISA) Taxonomy: Contract between hardware and software; CISC (Complex Instruction Set Computer: variable length, memory-to-memory ops, complex addressing, microcoded, e.g. x86) vs RISC (Reduced Instruction Set Computer: fixed length 32-bit, load-store architecture, single-cycle execution, hardwired, e.g. ARM, MIPS, RISC-V).",
    "Instruction Formats & Field Decomposition: Opcode field, register specifiers, immediate operand field, displacement/address field; Opcode expansion techniques to support variable-length operand specifications.",
    "Addressing Modes: Immediate Mode (operand in instruction), Direct / Absolute Mode ($EA = A$), Indirect Mode ($EA = M[A]$), Register Direct Mode ($EA = R$), Register Indirect Mode ($EA = M[R]$).",
    "Displacement Addressing Modes: Relative Addressing / PC-Relative ($EA = \\text{PC} + A$, used for local branches and position-independent code); Base-Register Addressing ($EA = R_{\\text{base}} + A$, used for relocation); Index Addressing ($EA = R_{\\text{index}} + A$, used for array traversal).",
    "Auto-Increment and Auto-Decrement Modes: $EA = R$, followed by $R \\leftarrow R + d$ or preceding $R \\leftarrow R - d$; Useful for implementing runtime software stacks and string processing loops.",
    "Data Transfer & Manipulation Instructions: Load, Store, Move, Push, Pop; Arithmetic (Add, Sub, Mul, Div); Logical (And, Or, Xor, Not); Shift/Rotate (ROL, ROR, RCR, RCL).",
    "Program Control & Branching: Unconditional jump (`JMP`), Conditional branch based on condition code flags ($Z, N, C, V$); Subroutine call (`CALL`) and return (`RET`); Parameter passing mechanisms (registers, call stack).",
    "Status Register / Condition Code Flags: Zero flag ($Z = 1$ if result is zero); Negative flag ($N = 1$ if MSB is 1); Carry flag ($C = 1$ if unsigned arithmetic generated carry/borrow); Overflow flag ($V = 1$ if signed 2's complement overflow occurred: $V = C_{in} \\oplus C_{out}$).",
    "RISC Load-Store Architecture Principle: Only dedicated `LOAD` and `STORE` instructions access main memory; all computational instructions operate exclusively on registers.",
    "University Examination Strategy: Solve effective address calculation problems across diverse addressing modes, design an expanding opcode scheme for a given instruction set specification, and compare RISC vs CISC architectures."
], [
    "Effective Address Formulation: PC-Relative: $EA = \\text{PC} + \\text{Offset}$; Base-Index: $EA = R_{\\text{base}} + R_{\\text{index}} + \\text{Disp}$.",
    "Signed Overflow Formula: $V = C_n \\oplus C_{n-1}$ (overflow occurs when carry into sign bit differs from carry out).",
    "Expanding Opcode Rule: Unused bit patterns in an $n$-bit opcode field are used as prefixes to expand subsequent operand bit lengths.",
    "Immediate Addressing Speed: Fastest access speed because operand is fetched simultaneously with the instruction itself.",
    "Indirect Addressing Overhead: Requires two sequential memory read cycles: first to fetch address pointer, second to fetch operand.",
    "Auto-Decrement Stack Push: Decrement stack pointer before write: $SP \\leftarrow SP - 1; M[SP] \\leftarrow R$.",
    "Auto-Increment Stack Pop: Read data before incrementing stack pointer: $R \\leftarrow M[SP]; SP \\leftarrow SP + 1$.",
    "Position-Independent Code (PIC): Relies on PC-relative addressing so code executes correctly at any loaded memory base address.",
    "RISC Design Philosophy: Large register file ($\ge 32$ registers), fixed instruction format, single-cycle execution of simple instructions.",
    "Exam Gold Tip: Always distinguish between Carry ($C$, for unsigned overflow) and Overflow ($V$, for signed 2's complement overflow)."
])

add("Computer Organization & Architecture", 3, "Arithmetic & Logic Unit", [
    "Binary Arithmetic in Signed Number Systems: Signed magnitude, 1's complement, and 2's complement representations; 2's complement range for $n$ bits: $[-2^{n-1}, 2^{n-1}-1]$; Addition and subtraction using 2's complement parallel adders.",
    "Adder Architectures: Half Adder and Full Adder; Ripple Carry Adder (RCA): propagation delay $t = 2n \\Delta t$; Carry Lookahead Adder (CLA): Generate term $G_i = A_i B_i$, Propagate term $P_i = A_i \\oplus B_i$; Carry recurrence $C_{i+1} = G_i + P_i C_i$; Constant delay $O(1)$ independent of word size; Carry Select and Carry Skip Adders.",
    "Multiplication of Unsigned Numbers: Sequential shift-and-add multiplier; Datapath incorporating multiplicand register, multiplier register, accumulator, and control sequencer; Total execution time $n$ clock cycles.",
    "Booth's Multiplication Algorithm for Signed Numbers: Encodes multiplier bit pairs $(Q_i, Q_{i-1})$: $00 \\implies \\text{no op}$, $11 \\implies \\text{no op}$, $01 \\implies A \\leftarrow A + M$, $10 \\implies A \\leftarrow A - M$; Followed by arithmetic shift right $[A, Q]$; Accelerates runs of consecutive 1s.",
    "Modified Booth's Multiplication (Radix-4): Examines overlapping triplets of bits $(Q_{2i+1}, Q_{2i}, Q_{2i-1})$; Reduces partial products from $n$ to $n/2$, doubling multiplication speed; Operations: $\\{0, \\pm M, \\pm 2M\\}$.",
    "Array Multipliers & Wallace Tree: Combinational multiplication; Carry Save Adder (CSA) arrays reducing partial products; Wallace Tree multiplier summing $n$ partial products in $O(\\log n)$ levels using full adders as $3:2$ compressors.",
    "Division Algorithms: Restoring Division (subtract divisor, if remainder negative restore by adding divisor back and set quotient bit 0; else set 1); Non-Restoring Division (if remainder positive, shift left and subtract; if negative, shift left and add; eliminates restoration step).",
    "Fast Division Schemes: SRT Division (lookup tables, redundant digit sets); Newton-Raphson reciprocal approximation and Goldschmidt multiplicative division.",
    "IEEE 754 Floating-Point Standard: Single precision (32-bit: 1 sign, 8 exponent with bias 127, 23 mantissa/fraction with implicit leading 1); Double precision (64-bit: 1 sign, 11 exponent with bias 1023, 52 fraction); Value: $(-1)^S \\times 1.M \\times 2^{E - \\text{bias}}$; Special values: $\\pm 0, \\pm \\infty$, NaN, Denormalized numbers.",
    "University Examination Strategy: Multiply positive and negative signed integers using Booth's algorithm step-by-step, trace Non-Restoring division with register tables, and convert decimal numbers to IEEE 754 32-bit single-precision hex."
], [
    "2's Complement Range: For $n$ bits: $-2^{n-1} \\le X \\le 2^{n-1}-1$.",
    "Carry Lookahead Expressions: $C_1 = G_0 + P_0 C_0, \\quad C_2 = G_1 + P_1 G_0 + P_1 P_0 C_0$.",
    "Booth Recoding Table: $00 \\to \\text{Shift}$, $01 \\to \\text{Add } M + \\text{Shift}$, $10 \\to \\text{Sub } M + \\text{Shift}$, $11 \\to \\text{Shift}$.",
    "Radix-4 Partial Product Reduction: Triplet recoding cuts the total number of partial product additions by exactly 50%.",
    "Wallace Tree Reduction Ratio: Uses full adders as $3:2$ compressors, reducing partial product matrix height by factor of $1.5$ per stage.",
    "Non-Restoring Division Rule: If $A \\ge 0$, shift left and subtract divisor; if $A < 0$, shift left and add divisor.",
    "IEEE 754 Single-Precision Format: Bit 31 = Sign, Bits 30-23 = Exponent (bias 127), Bits 22-0 = Normalized Mantissa.",
    "IEEE 754 Zero and Infinity: All 0s in exponent and mantissa represents $\\pm 0$; all 1s exponent with 0 mantissa represents $\\pm \\infty$.",
    "IEEE 754 NaN Definition: Exponent all 1s and non-zero mantissa represents Not-a-Number (NaN) produced by invalid operations (e.g. $0/0$).",
    "Exam Gold Tip: In IEEE 754 single precision conversion, remember to add 127 to the real exponent before converting to binary."
])

add("Computer Organization & Architecture", 4, "Memory Hierarchy", [
    "Memory Hierarchy Taxonomy & Trade-offs: Hierarchy levels: Registers $\\to$ L1/L2/L3 Cache $\\to$ Main Memory (DRAM) $\\to$ Secondary Storage (SSD/HDD); Cost, speed, and capacity trade-offs; Principle of Locality: Temporal locality (recently referenced items reused soon) vs Spatial locality (nearby memory items accessed soon).",
    "Main Memory Technology: SRAM (Static RAM: 6-transistor bistable latch, fast, no refresh, high power, used in cache) vs DRAM (Dynamic RAM: 1-transistor 1-capacitor cell, periodic capacitor refresh required, high density, low cost); Synchronous DRAM (SDRAM), DDR4/DDR5 burst transfers.",
    "Cache Memory Organization: Cache line / block size; Cache mapping functions: (1) Direct Mapping ($Index = Block \\bmod NumberOfLines$); (2) Fully Associative Mapping (block placed in any cache line, tag compared in parallel); (3) Set-Associative Mapping ($Set = Block \\bmod NumberOfSets$, $k$-way set associative).",
    "Cache Address Decomposition: Address split into Tag, Set/Index, and Word/Byte Offset fields; Size formulas: Offset bits = $\\log_2(\\text{block size})$, Index bits = $\\log_2(\\text{number of sets})$, Tag bits = $\\text{Address bits} - \\text{Index} - \\text{Offset}$.",
    "Cache Write Policies: Write-Through (write to cache and main memory simultaneously, consistent memory, slower, mitigated by write buffers) vs Write-Back (write only to cache, mark dirty bit, update main memory only upon block eviction); Write Allocation: Write-Allocate (fetch on write miss, paired with write-back) vs No-Write-Allocate (write around, paired with write-through).",
    "Cache Replacement Algorithms: Least Recently Used (LRU, hardware age counters / matrix), First-In First-Out (FIFO), Least Frequently Used (LFU), Random; Optimal replacement (Belady's min algorithm as theoretical upper bound).",
    "Average Memory Access Time (AMAT): Formula: $\\text{AMAT} = \\text{Hit Time} + \\text{Miss Rate} \\times \\text{Miss Penalty}$; Multi-level cache AMAT: $\\text{AMAT} = T_{h1} + M_1 (T_{h2} + M_2 \\times T_{mem})$; The 3 C's of cache misses: Compulsory (cold start), Capacity (cache size limits), Conflict (collision in mapping).",
    "Virtual Memory Concepts: Paged virtual memory; Virtual address space mapped to physical frames; Page Table, Page Table Entry (PTE: frame number, valid/invalid bit, dirty bit, protection bits); Translation Lookaside Buffer (TLB: high-speed associative hardware cache for page table translations).",
    "Effective Memory Access Time (EMAT) with TLB: $\\text{EMAT} = \\text{TLB hit ratio} \\times (T_{TLB} + T_m) + (1 - \\text{hit ratio}) \\times (T_{TLB} + 2 T_m)$ for single-level page tables; Multi-level page tables for large 64-bit address spaces.",
    "University Examination Strategy: Calculate Tag, Index, and Offset bit allocations for Direct and $k$-way Set-Associative caches, compute multi-level cache AMAT, and solve EMAT numericals involving TLB hit rates and page faults."
], [
    "AMAT Governing Formula: $\\text{AMAT} = \\text{Hit Time} + \\text{Miss Rate} \\times \\text{Miss Penalty}$.",
    "Two-Level Cache AMAT: $\\text{AMAT} = T_{L1} + M_{L1} [T_{L2} + M_{L2} \\cdot T_{\\text{DRAM}}]$.",
    "Direct Mapped Cache Index Bits: $\\text{Index Bits} = \\log_2(\\text{Number of Cache Lines})$.",
    "Set Associative Index Bits: $\\text{Index Bits} = \\log_2(\\text{Lines} / k) = \\log_2(\\text{Sets})$.",
    "Offset Bits Formula: $\\text{Offset Bits} = \\log_2(\\text{Block Size in Bytes})$.",
    "Tag Bits Calculation: $\\text{Tag} = \\text{Physical Address Bits} - \\text{Index Bits} - \\text{Offset Bits}$.",
    "Dirty Bit Function: In write-back caches, dirty bit = 1 signifies modified line requiring memory write-back upon replacement.",
    "Compulsory Miss Elimination: Cannot be avoided by increasing cache size; only mitigated by prefetching larger blocks.",
    "TLB EMAT Formula: $\\text{EMAT} = h_{TLB}(t_{TLB} + t_m) + (1 - h_{TLB})(t_{TLB} + 2 t_m)$.",
    "Exam Gold Tip: Always pay attention to whether the memory is byte-addressable or word-addressable when determining offset bits."
])

add("Computer Organization & Architecture", 5, "I/O Organization & Pipelining", [
    "I/O Addressing Schemes: Memory-Mapped I/O (I/O ports share same address space and load/store instructions with memory, larger address decoded) vs Isolated / Port-Mapped I/O (separate address space, dedicated `IN` and `OUT` machine instructions, separate control lines `IOR` and `IOW`).",
    "I/O Data Transfer Modes: (1) Programmed I/O (CPU continuously polls device status register, waste of CPU clock cycles); (2) Interrupt-Driven I/O (device interrupts CPU when ready, eliminates busy waiting); (3) Direct Memory Access (DMA).",
    "Interrupt Architecture & Handling: Vectored interrupts (device supplies vector address pointing to Interrupt Service Routine ISR) vs Non-vectored interrupts (fixed ISR address, software polls devices); Hardware interrupt priority: Daisy chain priority, Priority interrupt controller (PIC 8259).",
    "Direct Memory Access (DMA) Mechanics: DMA Controller (DMAC) takes control of system buses to transfer data blocks directly between I/O device and main memory without passing through CPU; Bus request (`BR`) and Bus grant (`BG`); Transfer modes: Burst transfer (entire block), Cycle stealing (one word per CPU cycle), Transparent mode.",
    "Instruction Pipelining Fundamentals: Concept of overlapping instruction execution; Classic 5-stage RISC pipeline: IF (Instruction Fetch), ID (Instruction Decode / Register Read), EX (Execute / ALU), MEM (Memory Access), WB (Write Back); Pipeline speedup: $S = \\frac{n \\cdot k}{k + n - 1} \\xrightarrow{n \\to \\infty} k$.",
    "Pipeline Structural Hazards: Hardware resource conflict when two stages attempt to use same functional unit simultaneously (e.g. simultaneous memory access in IF and MEM); Resolved by separate instruction/data caches (Harvard architecture) or inserting pipeline bubbles (stalls).",
    "Pipeline Data Hazards & RAW/WAR/WAW: Read-After-Write (RAW, true dependency), Write-After-Read (WAR, anti-dependency), Write-After-Write (WAW, output dependency); Solutions to RAW: Hardware data forwarding / bypassing (forwarding result directly from EX/MEM or MEM/WB to ALU input), Compiler instruction scheduling, Pipeline interlocks (stalls).",
    "Pipeline Control / Branch Hazards: Arises from branch instructions where next PC is unknown until ID or EX stage; Solutions: Branch penalty stalls, Branch prediction (static: predict never taken, predict taken; dynamic: 1-bit, 2-bit saturating branch history state machine, Branch Target Buffer BTB), Delayed branching with branch delay slots.",
    "Advanced Superscalar & Dynamic Execution: Multiple instruction issue per cycle; In-order issue with out-of-order completion; Tomasulo's algorithm (reservation stations, Common Data Bus CDB, register renaming eliminating WAR and WAW hazards); Reorder Buffer (ROB) ensuring precise interrupts.",
    "University Examination Strategy: Draw space-time reservation diagrams for 5-stage pipelines, compute theoretical vs actual speedup and efficiency with stalls, resolve data hazards via operand forwarding paths, and explain DMA controller operation."
], [
    "Ideal Pipeline Speedup: $S_k = \\frac{n \\cdot k \\cdot \\tau}{(k + n - 1) \\tau} \\approx k$ as number of instructions $n \\gg k$.",
    "Pipeline Efficiency: $\\eta = \\frac{\\text{Actual Speedup}}{k} = \\frac{n}{k + n - 1}$.",
    "Pipeline Throughput: $\\text{Throughput} = \\frac{n}{(k + n - 1) \\tau}$.",
    "5-Stage RISC Datapath: IF (Fetch) $\\to$ ID (Decode/Reg) $\\to$ EX (ALU/Branch) $\\to$ MEM (Load/Store) $\\to$ WB (Register Write).",
    "Data Forwarding Elimination: Bypasses result of ALU operation in EX stage directly to ALU input of subsequent instruction without memory wait.",
    "Load-Use Stall Requirement: Forwarding cannot eliminate a 1-cycle stall when a load instruction is immediately followed by an instruction using that register.",
    "2-Bit Dynamic Branch Predictor: Requires two consecutive mispredictions to change prediction state (Strongly Taken $\\leftrightarrow$ Weakly Taken $\\leftrightarrow$ Weakly Not Taken $\\leftrightarrow$ Strongly Not Taken).",
    "Cycle Stealing DMA: DMAC steals single bus cycles from CPU during internal instruction execution phases.",
    "Precise Interrupts via ROB: Speculative out-of-order execution instructions commit architectural state in strict in-order program sequence.",
    "Exam Gold Tip: In branch penalty calculations, branch cost in lost cycles equals the stage where branch target is computed minus 1."
])

# Save batch 1 to json
with open('scripts/sem3_btech_batch1_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 1 generated successfully: {len(data)} units.")
