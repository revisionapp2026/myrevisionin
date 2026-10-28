/**
 * Comprehensive B.Tech Engineering Revision Points for Semester 3.
 * AICTE Model Curriculum / University R22 Guidelines.
 *
 * Covers 40 Subjects, 200 Distinct Units.
 * Each unit provides exactly 10 Highlights + 10 Key Points (Bookmarks).
 * Strictly zero generic boilerplate; authentic KaTeX formulas for STEM.
 */

import type { TopicKnowledge } from "./content-bsc-sem1";

export const btechSem3Knowledge: Record<string, TopicKnowledge> = {
  "data structures & algorithms:::u1": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "data structures & algorithms:::u2": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "data structures & algorithms:::u3": {
    "highlights": [
      "Binary Trees & Structural Taxonomy: Definition, properties: maximum nodes at level $i$ is $2^i$; Maximum nodes in tree of height $h$ is $2^{h+1}-1$; Full, complete, perfect, degenerate, and balanced binary trees.",
      "Tree Traversal Algorithms: Depth-First Search (DFS): Preorder (Root-Left-Right), Inorder (Left-Root-Right), Postorder (Left-Right-Root); Iterative traversal using explicit stack; Breadth-First Search (BFS) / Level-order traversal using FIFO queue.",
      "Binary Search Tree (BST) Properties: For every node $X$, all keys in left subtree $< X.key$ and all keys in right subtree $> X.key$; Inorder traversal produces strictly ascending sorted order; Search, insertion, and deletion algorithms ($O(h)$ time where $h = O(\\log n)$ best, $h = O(n)$ worst).",
      "BST Deletion Mechanics: Case 1: Node is leaf (remove directly); Case 2: Node has one child (bypass node); Case 3: Node has two children (replace key with in-order successor or predecessor, recursively delete successor).",
      "Self-Balancing AVL Trees: Balance factor $BF(node) = \\text{height}(left) - \\text{height}(right) \\in \\{-1, 0, +1\\}$; Rotations for rebalancing: Left-Left (Single Right), Right-Right (Single Left), Left-Right (Double Left-Right), Right-Left (Double Right-Left); Height strictly bounded by $1.44\\log_2(n+2)$.",
      "Red-Black Trees & Multi-Way B-Trees: Red-Black invariants (root is black, no consecutive red nodes, equal black-height on all paths); B-Tree of order $m$ for external storage indexing: node keys bounded between $\\lceil m/2 \\rceil - 1$ and $m-1$.",
      "Graph Representations & Graph Traversal: Adjacency Matrix ($O(V^2)$ space, $O(1)$ edge query) vs Adjacency List ($O(V+E)$ space); Graph BFS (queue, shortest path in unweighted graph) and Graph DFS (recursion/stack, cycle detection, connected components).",
      "Topological Sorting & Directed Acyclic Graphs (DAG): Linear ordering of vertices such that for every directed edge $(u, v)$, $u$ precedes $v$; Kahn's algorithm using in-degree array and queue; DFS-based topological sort using finish times.",
      "Minimum Spanning Tree (MST) Algorithms: Prim's algorithm (greedy vertex-growing using min-priority queue, $O(E \\log V)$); Kruskal's algorithm (greedy edge-adding using Disjoint Set Union DSU with union-by-rank and path compression, $O(E \\log E)$).",
      "Shortest Path Algorithms: Dijkstra's algorithm for single-source shortest path with non-negative weights ($O((V+E)\\log V)$ using Fibonacci/binary heap); Bellman-Ford algorithm handling negative edge weights and detecting negative cycles ($O(V \\cdot E)$); Floyd-Warshall all-pairs shortest paths ($O(V^3)$ DP)."
    ],
    "keyPoints": [
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
    ]
  },
  "data structures & algorithms:::u4": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "data structures & algorithms:::u5": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "digital logic design:::u1": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "digital logic design:::u2": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "digital logic design:::u3": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "digital logic design:::u4": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "digital logic design:::u5": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "discrete mathematics:::u1": {
    "highlights": [
      "Set Theoretic Fundamentals: Sets, elements, subsets, power set $\\mathcal{P}(S)$ with cardinality $|\\mathcal{P}(S)| = 2^n$; Set operations (Union, Intersection, Set difference, Symmetric difference $A \\oplus B$); Cartesian products $A \\times B$; Venn diagrams and algebraic identities.",
      "Principle of Inclusion-Exclusion: Two sets: $|A \\cup B| = |A| + |B| - |A \\cap B|$; Three sets: $|A \\cup B \\cup C| = |A| + |B| + |C| - (|A \\cap B| + |B \\cap C| + |A \\cap C|) + |A \\cap B \\cap C|$; General formulation for $n$ finite sets; Applications in counting derangements $D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}$.",
      "Propositional Logic & Connectives: Propositions (declarative statements having truth value); Logical operators: Negation ($\\neg$), Conjunction ($\\land$), Disjunction ($\\lor$), Conditional / Implication ($p \\to q \\equiv \\neg p \\lor q$), Biconditional ($p \\leftrightarrow q$); Converse ($q \\to p$), Inverse ($\\neg p \\to \\neg q$), and Contrapositive ($\\neg q \\to \\neg p$).",
      "Truth Tables & Logical Equivalence: Construction of truth tables; Tautologies (always true), Contradictions (always false), Contingencies; Proving logical equivalences via algebraic laws (De Morgan's, Distributive, Absorption).",
      "Normal Forms in Propositional Logic: Conjunctive Normal Form (CNF, product of sum clauses) and Disjunctive Normal Form (DNF, sum of product clauses); Clause form; Satisfiability problem (SAT, Cook-Levin theorem).",
      "Rules of Inference & Formal Proofs: Modus Ponens ($p, p \\to q \\implies q$), Modus Tollens ($\\neg q, p \\to q \\implies \\neg p$), Hypothetical Syllogism ($p \\to q, q \\to r \\implies p \\to r$), Disjunctive Syllogism ($p \\lor q, \\neg p \\implies q$), Resolution principle.",
      "Predicate Logic & Quantifiers: Predicates $P(x)$, Universe of Discourse; Universal quantifier ($\\forall x P(x)$) and Existential quantifier ($\\exists x P(x)$); Negation of quantified statements: $\\neg(\\forall x P(x)) \\equiv \\exists x \\neg P(x)$ and $\\neg(\\exists x P(x)) \\equiv \\forall x \\neg P(x)$; Nested quantifiers.",
      "Mathematical Proof Methods: Direct proof ($p \\implies q$); Proof by Contraposition (assume $\\neg q$, prove $\\neg p$); Proof by Contradiction (Reductio ad absurdum: assume $p \\land \\neg q$, derive contradiction); Proof by Cases; Counterexamples.",
      "Mathematical Induction Principles: First Principle of Mathematical Induction (Weak Induction: base step $P(0)$ or $P(1)$, inductive hypothesis $P(k)$, inductive step $P(k) \\implies P(k+1)$); Second Principle of Induction (Strong Induction); Well-Ordering Principle of positive integers.",
      "University Examination Strategy: Prove logical equivalences without using truth tables using Boolean deduction rules, test argument validity via rules of inference, apply mathematical induction to summation and inequality proofs, and calculate derangements using inclusion-exclusion."
    ],
    "keyPoints": [
      "Power Set Cardinality: If $|S| = n$, then $|\\mathcal{P}(S)| = 2^n$.",
      "Symmetric Difference Definition: $A \\oplus B = (A - B) \\cup (B - A) = (A \\cup B) - (A \\cap B)$.",
      "Implication Equivalence: $p \\to q \\equiv \\neg p \\lor q$.",
      "Contrapositive Equivalence: $p \\to q \\equiv \\neg q \\to \\neg p$ (logically identical).",
      "Modus Ponens Inference: $[p \\land (p \\to q)] \\implies q$.",
      "Modus Tollens Inference: [\\neg q \\land (p \\to q)] \\implies \\neg p$.",
      "Quantifier De Morgan Negation: $\\neg(\\forall x P(x)) \\equiv \\exists x \\neg P(x)$.",
      "Derangement Formula (Inclusion-Exclusion): $D_n = n! \\left[ 1 - \\frac{1}{1!} + \\frac{1}{2!} - \\dots + \\frac{(-1)^n}{n!} \\right]$.",
      "Inclusion-Exclusion 3-Set Formula: $|A \\cup B \\cup C| = \\sum |A| - \\sum |A \\cap B| + |A \\cap B \\cap C|$.",
      "Exam Gold Tip: In mathematical induction proofs, clearly distinguish between the Inductive Hypothesis and the Inductive Step."
    ]
  },
  "discrete mathematics:::u2": {
    "highlights": [
      "Binary Relations Foundations: Binary relation $R \\subseteq A \\times B$; Domain, Codomain, Range; Inverse relation $R^{-1}$; Matrix representation $M_R$ (Boolean matrix) and Directed Graph (Digraph) representation.",
      "Properties of Binary Relations: (1) Reflexive ($\\forall a \\in A, (a, a) \\in R$); Irreflexive ($\\forall a, (a, a) \\notin R$); (2) Symmetric ($(a, b) \\in R \\implies (b, a) \\in R$); Antisymmetric ($(a, b) \\in R \\land (b, a) \\in R \\implies a = b$); Asymmetric; (3) Transitive ($(a, b) \\in R \\land (b, c) \\in R \\implies (a, c) \\in R$).",
      "Closures of Relations: Reflexive closure ($R \\cup \\Delta$); Symmetric closure ($R \\cup R^{-1}$); Transitive closure ($R^+ = \\bigcup_{i=1}^n R^i$); Warshall's Algorithm for transitive closure using Boolean matrix multiplication in $O(n^3)$ operations.",
      "Equivalence Relations & Partitions: Relation $R$ is an equivalence relation if and only if it is Reflexive, Symmetric, and Transitive; Equivalence classes $[a] = \\{ x \\in A \\mid (x, a) \\in R \\}$; Fundamental Theorem of Equivalence Relations (equivalence classes partition set $A$ into disjoint non-empty subsets).",
      "Partial Order Relations (Posets): Relation $R$ on set $P$ is a Partial Order if it is Reflexive, Antisymmetric, and Transitive; Poset denoted as $(P, \\le)$; Strict partial orders; Total / Linear orders (every pair of elements is comparable).",
      "Hasse Diagrams of Posets: Graphical representation of finite posets; Transitive and reflexive edges omitted; Elements drawn with directed edges pointing strictly upward; Maximal, Minimal, Greatest (Maximum), and Least (Minimum) elements of posets.",
      "Lattices as Posets: Poset $(L, \\le)$ is a Lattice if every two-element subset $\\{a, b\\}$ has a unique Least Upper Bound (LUB / Join: $a \\lor b$) and unique Greatest Lower Bound (GLB / Meet: $a \\land b$); Complete lattices, Bounded lattices ($0$ and $1$).",
      "Special Lattice Structures: Distributive lattices ($a \\land (b \\lor c) = (a \\land b) \\lor (a \\land c)$); Complemented lattices (every element $a$ has complement $a'$ such that $a \\lor a' = 1$ and $a \\land a' = 0$); Boolean Algebras (distributive and complemented lattices).",
      "Functions & Mappings: Definition of function $f: A \\to B$; Injective (One-to-One: $f(x_1) = f(x_2) \\implies x_1 = x_2$), Surjective (Onto: $\\forall y \\in B, \\exists x \\in A \\text{ s.t. } f(x) = y$), Bijective (One-to-One and Onto); Inverse functions $f^{-1}$; Composition of functions $(g \\circ f)(x) = g(f(x))$.",
      "University Examination Strategy: Test relations for equivalence and partial order properties, compute transitive closure using Warshall's algorithm step-by-step, draw Hasse diagrams for divisor posets ($D_n$), and verify lattice properties via GLB/LUB evaluation."
    ],
    "keyPoints": [
      "Equivalence Relation Axioms: Reflexive ($(a, a) \\in R$), Symmetric ($(a, b) \\in R \\implies (b, a) \\in R$), Transitive ($(a, b), (b, c) \\in R \\implies (a, c) \\in R$).",
      "Partial Order Relation Axioms: Reflexive, Antisymmetric ($(a, b), (b, a) \\in R \\implies a = b$), Transitive.",
      "Warshall's Algorithm Step: $W_k[i, j] = W_{k-1}[i, j] \\lor (W_{k-1}[i, k] \\land W_{k-1}[k, j])$.",
      "Greatest vs Maximal Element: A poset can have multiple maximal elements, but at most ONE greatest element.",
      "Least vs Minimal Element: A poset can have multiple minimal elements, but at most ONE least element.",
      "Lattice Definition: A poset where every pair of elements has a unique supremum (join) and infimum (meet).",
      "Distributive Lattice Characterization: A lattice is distributive $\\iff$ it contains no sublattice isomorphic to pentagon lattice $N_5$ or diamond lattice $M_3$.",
      "Boolean Algebra Cardinality: Any finite Boolean algebra has exactly $2^n$ elements for some positive integer $n$.",
      "Bijective Function Invertibility: A function $f: A \\to B$ possesses a unique inverse function $f^{-1}: B \\to A \\iff f$ is bijective.",
      "Exam Gold Tip: In Hasse diagrams, an element is maximal if no other element lies strictly above it connected by an edge."
    ]
  },
  "discrete mathematics:::u3": {
    "highlights": [
      "Graph Theoretic Terminology: Graph $G = (V, E)$; Vertices, Edges, Directed vs Undirected graphs; Simple graphs, Multigraphs, Pseudographs (loops); Degree of vertex $\\deg(v)$; In-degree $\\deg^-(v)$ and out-degree $\\deg^+(v)$ in digraphs.",
      "Handshaking Theorem: For any undirected graph, $\\sum_{v \\in V} \\deg(v) = 2 |E|$; Corollary: Every graph has an even number of vertices with odd degree; Directed graph degree sum: $\\sum \\deg^+(v) = \\sum \\deg^-(v) = |E|$.",
      "Special Graph Families: Complete graphs $K_n$ ($n(n-1)/2$ edges); Cycles $C_n$; Wheels $W_n$; Bipartite graphs (vertices partitioned into $V_1, V_2$ with edges strictly between sets); Complete bipartite graphs $K_{m, n}$ ($m n$ edges); Regular graphs ($k$-regular).",
      "Graph Isomorphism & Subgraphs: Two graphs $G_1, G_2$ are isomorphic if there exists a bijection $f: V_1 \\to V_2$ preserving adjacency; Isomorphism invariants (vertex count, edge count, degree sequence, cycle lengths); Induced subgraphs, Spanning subgraphs.",
      "Connectivity, Paths, and Cycles: Walks, Trails (distinct edges), Paths (distinct vertices); Connected components; Cut-vertices (articulation points) and Cut-edges (bridges); Vertex connectivity $\\kappa(G)$ and Edge connectivity $\\lambda(G)$; Whitney's inequality: $\\kappa(G) \\le \\lambda(G) \\le \\delta(G)$.",
      "Eulerian Graphs & Fleury's Algorithm: Euler Path (traverses every edge exactly once) and Euler Circuit (closed Euler path); Euler's Theorem: Connected undirected graph has an Euler circuit $\\iff$ every vertex has even degree; Has Euler path $\\iff$ exactly two vertices have odd degree.",
      "Hamiltonian Graphs: Hamiltonian Path (visits every vertex exactly once) and Hamiltonian Cycle; Dirac's Theorem (if $n \\ge 3$ and $\\deg(v) \\ge n/2$ for all $v$, then $G$ is Hamiltonian); Ore's Theorem (if $\\deg(u) + \\deg(v) \\ge n$ for all non-adjacent $u, v$, then $G$ is Hamiltonian); Traveling Salesperson Problem (NP-hard).",
      "Planar Graphs & Euler's Formula: Planar representation (edges cross only at vertices); Euler's planar formula: $V - E + F = 2$ for connected planar graphs; Corollaries: $E \\le 3V - 6$ (for $V \\ge 3$) and $E \\le 2V - 4$ (if bipartite/triangle-free); Kuratowski's Theorem: $G$ is planar $\\iff$ it contains no subgraph homeomorphic to $K_5$ or $K_{3, 3}$.",
      "Graph Coloring & Chromatic Number: Vertex coloring, proper coloring (adjacent vertices receive distinct colors); Chromatic number $\\chi(G)$; Four Color Theorem (every planar graph has $\\chi(G) \\le 4$); Chromatic polynomial $P(G, k)$; Dual graphs.",
      "Trees and Spanning Trees: Tree definitions (connected acyclic graph, unique simple path between any pair, $|E| = |V| - 1$); Rooted trees, binary trees; Spanning trees; Cayley's formula: number of labeled trees on $n$ vertices is $n^{n-2}$; Matrix Tree Theorem (Kirchhoff's theorem using Laplacian matrix)."
    ],
    "keyPoints": [
      "Handshaking Theorem Formulation: $\\sum_{v \\in V} \\deg(v) = 2 |E|$.",
      "Odd Degree Vertex Parity: Any graph must possess an even number of vertices of odd degree.",
      "Bipartite Graph Characterization: A graph is bipartite if and only if it contains NO odd-length cycles.",
      "Euler Circuit Condition: A connected graph is Eulerian $\\iff$ all vertex degrees are even numbers.",
      "Dirac's Hamiltonian Condition: If each vertex satisfies $\\deg(v) \\ge n/2$ for $n \\ge 3$, the graph is Hamiltonian.",
      "Euler's Planar Formula: $V - E + F = 2$ for any connected planar graph.",
      "Planar Edge Upper Bound: $E \\le 3V - 6$ for simple planar graphs with $V \\ge 3$.",
      "Kuratowski's Non-Planar Subgraphs: Complete graph $K_5$ and utility complete bipartite graph $K_{3, 3}$.",
      "Cayley's Tree Formula: There are $n^{n-2}$ distinct labeled trees on $n$ vertices.",
      "Exam Gold Tip: To prove a graph is non-planar, show that it violates $E \\le 3V - 6$ or find a topological minor homeomorphic to $K_5$ or $K_{3, 3}$."
    ]
  },
  "discrete mathematics:::u4": {
    "highlights": [
      "Basic Counting Principles: Rule of Sum (Addition Principle: disjoint events, $|A \\cup B| = |A| + |B|$) and Rule of Product (Multiplication Principle: sequential independent stages, $|A \\times B| = |A| \\times |B|$); Subtraction Principle; Division Principle.",
      "Permutations and Combinations: Linear permutations of $n$ distinct objects taken $r$ at a time: $P(n, r) = \\frac{n!}{(n-r)!}$; Combinations (unordered selections): $C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$; Pascal's Identity: $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$; Vandermonde's Identity: $\\binom{m+n}{r} = \\sum_{k=0}^r \\binom{m}{k}\\binom{n}{r-k}$.",
      "Permutations with Repetition & Indistinguishable Objects: Permutations of $n$ items with $n_1$ of type 1, $n_2$ of type 2: $\\frac{n!}{n_1! n_2! \\dots n_k!}$; Circular permutations ($(n-1)!$ for distinct, $(n-1)!/2$ for reversible beads/keychains).",
      "Combinations with Repetition (Stars and Bars): Selecting $r$ objects from $n$ distinct categories with replacement; Equivalent to non-negative integer solutions to $x_1 + x_2 + \\dots + x_n = r$; Formula: $\\binom{n + r - 1}{r}$; Positive integer solutions ($x_i \\ge 1$): $\\binom{r - 1}{n - 1}$.",
      "Pigeonhole Principle (PHP): Dirichlet's box principle; Basic PHP: if $n+1$ pigeons placed into $n$ holes, at least one hole contains $\\ge 2$ pigeons; Generalized Pigeonhole Principle: placing $N$ objects into $k$ boxes guarantees at least one box contains $\\lceil N / k \\rceil$ objects.",
      "Binomial Theorem & Multinomial Theorem: Binomial expansion: $(x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k$; Identities: $\\sum_{k=0}^n \\binom{n}{k} = 2^n$ and $\\sum_{k=0}^n (-1)^k \\binom{n}{k} = 0$; Multinomial expansion $(x_1 + x_2 + \\dots + x_m)^n = \\sum \\binom{n}{n_1, n_2, \\dots, n_m} x_1^{n_1} \\dots x_m^{n_m}$.",
      "Generating Functions in Combinatorics: Ordinary Generating Functions (OGF): $G(x) = \\sum_{n=0}^\\infty a_n x^n$; Formal power series manipulations; Modeling distribution problems with polynomial factor products; Exponential Generating Functions (EGF) for ordered structures.",
      "Recurrence Relations Formulation: Modeling recursive problems (Tower of Hanoi $T(n) = 2T(n-1) + 1$, Fibonacci numbers $F_n = F_{n-1} + F_{n-2}$); Order and degree of recurrence relations.",
      "Solving Linear Recurrence Relations: Characteristic equation method for homogeneous linear recurrences ($r^k - c_1 r^{k-1} - \\dots = 0$) handling distinct and repeated roots; Non-homogeneous recurrences solved by summing homogeneous and particular solutions using undetermined coefficients.",
      "University Examination Strategy: Solve integer partition problems using stars and bars, apply generalized Pigeonhole Principle to geometric and numeric guarantees, and solve second-order non-homogeneous recurrence relations with initial boundary conditions."
    ],
    "keyPoints": [
      "Stars and Bars Formula (Non-Negative): $\\binom{n + r - 1}{r} = \\binom{n + r - 1}{n - 1}$ for $x_1 + \\dots + x_n = r, x_i \\ge 0$.",
      "Stars and Bars Formula (Strictly Positive): $\\binom{r - 1}{n - 1}$ for $x_1 + \\dots + x_n = r, x_i \\ge 1$.",
      "Generalized Pigeonhole Formula: At least one container holds $\\lceil N / k \\rceil$ items.",
      "Pascal's Combinatorial Identity: $\\binom{n}{r} = \\binom{n-1}{r} + \\binom{n-1}{r-1}$.",
      "Binomial Coefficient Sum: $\\sum_{k=0}^n \\binom{n}{k} = 2^n$.",
      "Circular Permutations Formula: $(n - 1)!$ for directional arrangements; $\\frac{(n - 1)!}{2}$ for non-directional arrangements.",
      "Tower of Hanoi Closed Form: $T(n) = 2^n - 1$.",
      "Fibonacci Closed Binet's Formula: $F_n = \\frac{1}{\\sqrt{5}}\\left[ \\left(\\frac{1+\\sqrt{5}}{2}\\right)^n - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n \\right]$.",
      "Non-Homogeneous Recurrence Trial Form: If $f(n) = s^n$ and $s$ is a root of characteristic equation with multiplicity $m$, choose $a_n^{(p)} = C n^m s^n$.",
      "Exam Gold Tip: In Pigeonhole Principle proofs, clearly identify what represents the pigeons and what represents the pigeonholes."
    ]
  },
  "discrete mathematics:::u5": {
    "highlights": [
      "Binary Operations & Axiomatic Foundations: Binary operation $*: S \\times S \\to S$; Closure property; Associativity ($a * (b * c) = (a * b) * c$); Commutativity ($a * b = b * a$); Identity element $e$ ($a * e = e * a = a$, unique if exists); Inverse element $a^{-1}$ ($a * a^{-1} = a^{-1} * a = e$).",
      "Algebraic Structures Hierarchy: Algebraic System $(S, *)$; Semigroup (closed and associative); Monoid (semigroup with identity element $e$); Group (monoid where every element possesses an inverse); Abelian Group / Commutative Group ($a * b = b * a$).",
      "Finite Groups & Cayley Tables: Latin square property of Cayley operation tables; Order of group $|G|$; Order of an element $O(a)$ (smallest positive integer $k$ such that $a^k = e$); Cyclic groups: $G = \\langle a \\rangle = \\{ a^k \\mid k \\in \\mathbb{Z} \\}$; Generator properties.",
      "Subgroups & Lagrange's Theorem: Subgroup $H \\le G$ (subset forming group under induced operation); Two-step and one-step subgroup tests ($a b^{-1} \\in H$); Lagrange's Theorem: For any finite group $G$, the order of every subgroup $H$ divides the order of $G$ ($|G| = |H| \\cdot [G : H]$); Corollaries: Order of every element divides group order ($a^{|G|} = e$); Groups of prime order are strictly cyclic.",
      "Cosets and Normal Subgroups: Left coset $a H = \\{ a h \\mid h \\in H \\}$ and Right coset $H a = \\{ h a \\mid h \\in H \\}$; Properties: Cosets partition group $G$; Index $[G : H] = |G| / |H|$; Normal subgroup $N \\triangleleft G$ ($g N g^{-1} = N$ or $g N = N g$ for all $g \\in G$).",
      "Quotient Groups / Factor Groups: If $N \\triangleleft G$, the set of cosets $G / N = \\{ g N \\mid g \\in G \\}$ forms a group under coset multiplication $(a N)(b N) = (a b) N$; Order of quotient group $|G / N| = |G| / |N|$.",
      "Group Homomorphisms and Isomorphisms: Homomorphism $\\phi: (G, *) \\to (G', \\circ)$ satisfies $\\phi(a * b) = \\phi(a) \\circ \\phi(b)$; Properties: $\\phi(e_G) = e_{G'}$ and $\\phi(a^{-1}) = (\\phi(a))^{-1}$; Kernel of homomorphism $\\ker(\\phi) = \\{ g \\in G \\mid \\phi(g) = e_{G'} \\}$; Normalcy of kernel: $\\ker(\\phi) \\triangleleft G$; First Isomorphism Theorem: $G / \\ker(\\phi) \\cong \\text{Im}(\\phi)$.",
      "Rings and Fields Foundations: Ring $(R, +, \\cdot)$ (Abelian group under $+$, Semigroup under $\\cdot$, Left and right distributive laws); Commutative rings, Rings with identity; Zero divisors ($a \\cdot b = 0$ with $a \\ne 0, b \\ne 0$); Integral Domain (commutative ring with identity having NO zero divisors).",
      "Fields and Galois Fields: Field $(F, +, \\cdot)$ (Integral domain where every non-zero element has multiplicative inverse, forming Abelian group under $\\cdot$); Characteristic of ring/field; Finite fields $GF(p^n)$ (Galois Fields) of order $p^n$ where $p$ is prime; Applications in cryptography and error-correcting codes.",
      "University Examination Strategy: Prove whether algebraic sets form groups or Abelian groups using Cayley tables, verify subgroup criteria using the one-step test $a b^{-1} \\in H$, apply Lagrange's theorem to deduce element orders, and compute kernels of homomorphisms."
    ],
    "keyPoints": [
      "Semigroup Axioms: Closure + Associativity.",
      "Monoid Axioms: Closure + Associativity + Identity.",
      "Group Axioms: Closure + Associativity + Identity + Inverses.",
      "Abelian Group Axiom: Group + Commutativity.",
      "Lagrange's Theorem Formulation: $|G| = |H| \\times [G : H]$ (subgroup order divides group order).",
      "Prime Order Group Theorem: Any group of prime order is cyclic and hence Abelian.",
      "Normal Subgroup Criterion: $N \\triangleleft G \\iff \\forall g \\in G, \\forall n \\in N, g n g^{-1} \\in N$.",
      "First Isomorphism Theorem: $G / \\ker(\\phi) \\cong \\phi(G)$.",
      "Integral Domain Definition: Commutative ring with identity containing no zero divisors ($a b = 0 \\implies a=0$ or $b=0$).",
      "Exam Gold Tip: In group proofs, remember that the identity element is unique and each element has a unique inverse."
    ]
  },
  "computer organization & architecture:::u1": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "computer organization & architecture:::u2": {
    "highlights": [
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
    ],
    "keyPoints": [
      "Effective Address Formulation: PC-Relative: $EA = \\text{PC} + \\text{Offset}$; Base-Index: $EA = R_{\\text{base}} + R_{\\text{index}} + \\text{Disp}$.",
      "Signed Overflow Formula: $V = C_n \\oplus C_{n-1}$ (overflow occurs when carry into sign bit differs from carry out).",
      "Expanding Opcode Rule: Unused bit patterns in an $n$-bit opcode field are used as prefixes to expand subsequent operand bit lengths.",
      "Immediate Addressing Speed: Fastest access speed because operand is fetched simultaneously with the instruction itself.",
      "Indirect Addressing Overhead: Requires two sequential memory read cycles: first to fetch address pointer, second to fetch operand.",
      "Auto-Decrement Stack Push: Decrement stack pointer before write: $SP \\leftarrow SP - 1; M[SP] \\leftarrow R$.",
      "Auto-Increment Stack Pop: Read data before incrementing stack pointer: $R \\leftarrow M[SP]; SP \\leftarrow SP + 1$.",
      "Position-Independent Code (PIC): Relies on PC-relative addressing so code executes correctly at any loaded memory base address.",
      "RISC Design Philosophy: Large register file ($\\ge 32$ registers), fixed instruction format, single-cycle execution of simple instructions.",
      "Exam Gold Tip: Always distinguish between Carry ($C$, for unsigned overflow) and Overflow ($V$, for signed 2's complement overflow)."
    ]
  },
  "computer organization & architecture:::u3": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "computer organization & architecture:::u4": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "computer organization & architecture:::u5": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "object oriented programming (advanced):::u1": {
    "highlights": [
      "Gang of Four (GoF) Design Pattern Taxonomy: 23 classical patterns categorized into Creational (object creation mechanisms), Structural (class and object composition), and Behavioral (algorithms and assignment of responsibilities between objects).",
      "Creational Patterns: Singleton (ensures a class has only one instance, global access point, thread-safe double-checked locking), Factory Method (defines interface for creating object but lets subclasses decide which class to instantiate), Abstract Factory (creates families of related objects), and Builder (constructs complex objects step-by-step).",
      "Structural Patterns: Adapter (converts interface of class into another interface clients expect, wrapper), Decorator (attaches additional responsibilities to object dynamically without subclassing), Composite (treats individual objects and compositions of objects uniformly as tree structure), and Facade (provides unified high-level interface to subsystem).",
      "Behavioral Patterns: Observer (one-to-many dependency where state change in subject automatically notifies and updates all dependent observers, event-driven architecture), Strategy (defines family of interchangeable algorithms encapsulated in separate classes), and Command (encapsulates request as object, enabling undo/redo queues).",
      "SOLID Object-Oriented Principles: S-Single Responsibility Principle (a class should have one, and only one, reason to change); O-Open/Closed Principle (software entities should be open for extension but closed for modification); L-Liskov Substitution Principle; I-Interface Segregation; D-Dependency Inversion.",
      "Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types without altering program correctness; Preconditions cannot be strengthened in subtype; Postconditions cannot be weakened; Classic violation: Rectangle vs Square inheritance.",
      "Dependency Inversion Principle (DIP) & Dependency Injection: High-level modules should not depend on low-level modules; both should depend on abstractions; Inversion of Control (IoC) containers inject dependencies via constructor, setter, or interface injection.",
      "Template Method Pattern: Defines the skeleton of an algorithm in a base class method, deferring concrete implementation of specific steps to derived subclasses without altering overall workflow structure.",
      "Anti-Patterns in Software Engineering: God Object / Blob (monolithic class doing everything), Spaghetti Code, Spoke-and-Wheel tight coupling, and Golden Hammer (overuse of favorite pattern regardless of suitability).",
      "University Examination Strategy: Formulate the Singleton pattern in Java/C++ with thread-safe double-checked locking, implement the Observer pattern using Subject and Observer interfaces, and explain all five SOLID design principles."
    ],
    "keyPoints": [
      "Double-Checked Locking Singleton: Uses `volatile` instance variable and `synchronized` block inside `getInstance()`.",
      "Open/Closed Principle: Open for extension (via polymorphism/interfaces), closed for modification (existing code intact).",
      "Liskov Substitution Principle: If $S$ is a subtype of $T$, objects of type $T$ may be replaced with objects of type $S$ without altering behavior.",
      "Interface Segregation Principle: Clients should not be forced to depend upon interfaces they do not use.",
      "Dependency Inversion: Depend upon abstractions (interfaces), not upon concrete implementations.",
      "Observer Pattern Topology: Subject maintains list of observers; Calls `update()` on all registered observers upon state change.",
      "Decorator Pattern Mechanism: Wraps component instance and delegates calls while adding preprocessing or postprocessing behavior.",
      "Factory Method Intent: Defines an interface for creating an object, but lets subclasses decide which class to instantiate.",
      "Strategy Pattern Intent: Encapsulates interchangeable algorithmic strategies behind a common interface.",
      "Exam Scoring Tip: The Singleton pattern constructor must be declared `private` to prevent external instantiation via the `new` keyword."
    ]
  },
  "object oriented programming (advanced):::u2": {
    "highlights": [
      "Event-Driven Programming Paradigm: Program execution flow dictated by external events (user mouse clicks, key presses, sensor inputs, window resize messages); Event loop dispatches events to registered event listener / callback handlers.",
      "Java GUI Frameworks Evolution: Abstract Window Toolkit (AWT, heavyweight native peer components) $\\to$ Swing (lightweight, pure Java, pluggable look-and-feel, `JComponent` hierarchy) $\\to$ JavaFX (modern hardware-accelerated scene graph, FXML declarative UI, CSS styling).",
      "Java Swing Layout Managers: `BorderLayout` (divides container into five zones: North, South, East, West, Center), `FlowLayout` (arranges components left-to-right, wrapping to next row), `GridLayout` (rigid equal-sized rectangular grid), and `GridBagLayout` (flexible multi-cell grid alignment with constraints).",
      "Event Delegation Model: Event Source (GUI component generating event, e.g. `JButton`), Event Object (encapsulates event details, e.g. `ActionEvent`), and Event Listener (implements interface, e.g. `ActionListener` with `actionPerformed(ActionEvent e)`).",
      "Anonymous Inner Classes & Lambda Handlers: Registering listeners compactly: `btn.addActionListener(e -> handleButtonClick(e))` replacing verbose anonymous inner class declarations.",
      "Model-View-Controller (MVC) in GUI Systems: Model (business data and logic), View (UI visual presentation), Controller (processes user input and updates Model/View); Promotes separation of concerns and parallel frontend/backend development.",
      "Concurrency & Event Dispatch Thread (EDT): All Swing GUI updates must execute strictly on single Event Dispatch Thread to prevent race conditions; Long-running background computation on EDT freezes UI; Solved using `SwingWorker<T, V>` background threads.",
      "Python GUI with Tkinter & PyQt: Tkinter (`ttk` themed widgets, geometry managers: `pack()`, `grid()`, `place()`); PyQt / PySide (cross-platform Qt framework bindings, Signals and Slots event communication mechanism).",
      "Custom Drawing & Graphics 2D: Overriding `paintComponent(Graphics g)` in Swing; Casting to `Graphics2D`; Rendering shapes (`Rectangle2D`, `Ellipse2D`), gradients, affine transformations, and anti-aliasing rendering hints.",
      "University Examination Strategy: Write a complete Java Swing application implementing `BorderLayout` and `ActionListener` via lambda expression, explain the role of the Event Dispatch Thread (EDT), and detail the MVC architectural pattern."
    ],
    "keyPoints": [
      "Event Dispatch Thread Rule: Never perform long I/O or heavy computation on the EDT; use `SwingWorker` instead.",
      "BorderLayout Default Zone: Components added without specifying a region default to the `Center` region.",
      "Swing Invocation Helper: `SwingUtilities.invokeLater(() -> createAndShowGUI())` safely launches UI on EDT.",
      "ActionListener Method: `public void actionPerformed(ActionEvent e)`.",
      "AWT vs Swing Component Distinction: AWT components use heavy OS native peers; Swing components are lightweight and painted purely in Java.",
      "GridBagLayout Flexibility: Allows components to span multiple rows and columns using `gridwidth` and `gridheight`.",
      "Qt Signal and Slot: Type-safe callback mechanism connecting UI events (`clicked()`) to receiver slots.",
      "Paint Component Rule: Always call `super.paintComponent(g)` first to clear previous background artifacts.",
      "MVC Separation: View displays data from Model; Controller translates user gestures into Model modifications.",
      "Exam Scoring Tip: To close a Java Swing application when the user clicks the window close button, always invoke `frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)`."
    ]
  },
  "object oriented programming (advanced):::u3": {
    "highlights": [
      "Java Database Connectivity (JDBC) Architecture: API enabling uniform communication with relational databases; Layers: Application $\\to$ JDBC API (`java.sql`, `javax.sql`) $\\to$ JDBC Driver Manager $\\to$ JDBC Driver $\\to$ Database server.",
      "Four Types of JDBC Drivers: Type 1 (JDBC-ODBC Bridge, deprecated, platform dependent), Type 2 (Native-API Partly Java, requires client C/C++ DB library), Type 3 (Network Protocol All-Java, middleware server), and Type 4 (Thin Driver / Direct-to-Database All-Java, highest performance, connects directly via database network protocol).",
      "Standard JDBC Programming Workflow (7 Steps): (1) Import `java.sql.*`; (2) Load and register driver (`Class.forName('org.postgresql.Driver')`); (3) Establish connection (`DriverManager.getConnection(url, user, pass)`); (4) Create statement; (5) Execute query; (6) Process `ResultSet`; (7) Close resources in `try-with-resources`.",
      "Statement vs PreparedStatement vs CallableStatement: `Statement` (static SQL, recompiled on every execution, vulnerable to SQL injection attacks); `PreparedStatement` (precompiled parameterized SQL, parameterized `?` placeholders, immune to SQL injection, high performance); `CallableStatement` (invokes database stored procedures).",
      "SQL Injection Attack & Prevention: Malicious input manipulating dynamic SQL strings (e.g. `' OR '1'='1`); Prevented completely by using parameterized `PreparedStatement` where user input is treated strictly as literal data rather than executable SQL code.",
      "ResultSet Navigation & Scrollability: Default forward-only non-updatable `ResultSet`; Scroll-sensitive and scroll-insensitive result sets (`rs.next()`, `rs.previous()`, `rs.first()`, `rs.last()`, `rs.absolute(row)`); Updatable result sets allowing in-place row modifications.",
      "Transaction Management in JDBC: Transactions enabled by setting `conn.setAutoCommit(false)`; Explicitly committed via `conn.commit()` or rolled back via `conn.rollback()` upon exception; Savepoints for partial rollbacks (`conn.setSavepoint()`).",
      "Connection Pooling & DataSources: Establishing physical DB connections is computationally expensive (TCP handshake, authentication); Connection pools (HikariCP, Apache DBCP, C3P0) maintain pool of pre-established reusable connections, drastically increasing web application throughput.",
      "Object-Relational Mapping (ORM) & JPA: Impedance mismatch between relational tables and object hierarchies; Java Persistence API (JPA) / Hibernate; Entity mapping annotations (`@Entity`, `@Table`, `@Id`, `@GeneratedValue`, `@OneToMany`, `@ManyToOne`); Hibernate Query Language (HQL / JPQL).",
      "University Examination Strategy: Write complete JDBC code using `PreparedStatement` to insert and query student records inside a `try-with-resources` block, explain how `PreparedStatement` prevents SQL injection, and detail transaction commit/rollback."
    ],
    "keyPoints": [
      "JDBC Type 4 Driver: Pure Java Thin Driver communicating directly with database via proprietary network protocol.",
      "Disable Auto-Commit: `conn.setAutoCommit(false)` initiates manual multi-statement transaction management.",
      "PreparedStatement Placeholder: Uses `?` positional parameters set via `pstmt.setInt(1, val)`, `pstmt.setString(2, val)`.",
      "SQL Injection Defense: `PreparedStatement` precompiles SQL template and sanitizes input as literals.",
      "Try-With-Resources Rule: Automatically closes `Connection`, `Statement`, and `ResultSet` objects implementing `AutoCloseable`.",
      "Connection Pool Benchmark: HikariCP provides zero-overhead connection pooling for enterprise production applications.",
      "Stored Procedure Invocation: Uses `CallableStatement cstmt = conn.prepareCall(\"{call proc_name(?, ?)}\")`.",
      "ResultSet Metadata: `ResultSetMetaData rsmd = rs.getMetaData()` extracts column counts, names, and SQL data types.",
      "ORM Entity Annotation: `@Entity` designates a Java class as a mapped database table.",
      "Exam Scoring Tip: Always handle SQL exceptions and invoke `conn.rollback()` inside the `catch` block to ensure transactional integrity."
    ]
  },
  "object oriented programming (advanced):::u4": {
    "highlights": [
      "OSI & TCP/IP Network Models: Transport layer protocols: Transmission Control Protocol (TCP, connection-oriented, reliable byte stream, three-way handshake, error checking, flow/congestion control) vs User Datagram Protocol (UDP, connectionless, unreliable, low-latency packet delivery, no handshake).",
      "IP Addressing & Port Numbers: IPv4 (32-bit, dotted-decimal) vs IPv6 (128-bit); Port numbers ($0-65535$, well-known ports $0-1023$ e.g. HTTP 80, HTTPS 443, SSH 22); Socket represents endpoint for network communication: (IP Address, Port Number).",
      "TCP Socket Programming in Java: Server: `ServerSocket server = new ServerSocket(port)`, listens for connections via blocking `server.accept()`, returns client `Socket`; Client: `Socket client = new Socket(host, port)`; Data exchange via `InputStream` and `OutputStream` wrapped in `BufferedReader` and `PrintWriter`.",
      "Multithreaded Network Servers: Single-threaded servers block on client I/O; Multithreaded servers spawn separate worker thread (`new Thread(new ClientHandler(socket)).start()`) or use thread pools (`ExecutorService`) to handle thousands of concurrent clients simultaneously.",
      "UDP Datagram Sockets: `DatagramSocket` and `DatagramPacket`; Packets contain payload bytes, destination IP, and port number; Unconnected transmission; Used for DNS lookups, video streaming, and online multiplayer gaming where packet loss is preferable to latency spikes.",
      "URL & HTTP Client Programming in Java: `java.net.URI` and `java.net.URL`; `HttpURLConnection` for GET and POST HTTP requests; Modern `java.net.http.HttpClient` (Java 11+) supporting HTTP/2, asynchronous requests with `CompletableFuture`, and reactive streams.",
      "Non-Blocking I/O (Java NIO): Channel-based asynchronous I/O (`java.nio.channels.SocketChannel`, `ServerSocketChannel`); `Buffer` (ByteBuffer) and `Selector` multiplexer; Single selector thread monitors multiple network channels for ready I/O operations (`SelectionKey.OP_READ`, `OP_WRITE`).",
      "Remote Method Invocation (RMI): Allows Java object on one JVM to invoke methods on object running in remote JVM; Architecture: Remote Interface, Stub (client-side proxy), Skeleton (server-side dispatcher), and RMI Registry naming service (`rmiregistry` port 1099).",
      "Network Security & SSL/TLS Sockets: `SSLSocket` and `SSLServerSocket` providing encrypted, authenticated communication; Digital certificates (X.509), public-key cryptography, symmetric session encryption, and TLS handshake protocols.",
      "University Examination Strategy: Write a complete multi-client TCP chat server and client in Java using `ServerSocket` and threads, contrast TCP vs UDP characteristics, and describe the Java NIO Selector architecture."
    ],
    "keyPoints": [
      "TCP ServerSocket Accept: `Socket s = serverSocket.accept()` blocks until client connection request arrives.",
      "TCP 3-Way Handshake: SYN $\\to$ SYN-ACK $\\to$ ACK establishing reliable connection state.",
      "UDP Socket Class: `DatagramSocket` sends and receives standalone `DatagramPacket` objects.",
      "Thread Pool Execution: `ExecutorService pool = Executors.newFixedThreadPool(50)` limits server thread explosion.",
      "NIO Selector Multiplexing: Single thread monitors multiple `SocketChannel` instances for ready I/O events.",
      "RMI Remote Interface: Must extend `java.rmi.Remote` and all methods must declare `throws RemoteException`.",
      "RMI Registry Lookup: `Naming.lookup(\"rmi://localhost/ServiceName\")` retrieves remote client stub.",
      "Socket Stream Flush: Always call `writer.flush()` to force immediate packet transmission over TCP buffer.",
      "Ephemeral Port Range: Client sockets dynamically assigned ports from ephemeral range ($49152-65535$).",
      "Exam Scoring Tip: When closing network streams, closing the outer `BufferedReader` or `PrintWriter` automatically closes the underlying socket input/output stream."
    ]
  },
  "object oriented programming (advanced):::u5": {
    "highlights": [
      "Software Testing Objectives & Levels: Verification (building product right) vs Validation (building right product); Testing hierarchy: Unit testing (isolated methods/classes), Integration testing (component interaction), System testing (full application behavior), and Acceptance testing (UAT).",
      "Black-Box vs White-Box Testing: Black-box (specification-based, zero knowledge of internal code structure) vs White-box (structural testing, examines internal logic paths, statements, branches, and conditions).",
      "Black-Box Testing Techniques: Equivalence Partitioning (divides input domain into valid and invalid equivalence classes; tests single representative value from each class) and Boundary Value Analysis (BVA, tests values at boundaries: $min, min+, nominal, max-, max$).",
      "White-Box Structural Coverage Metrics: Statement Coverage (percentage of executable statements executed), Branch / Decision Coverage (tests all True/False branches of conditional statements), Condition Coverage, and Multiple Condition Coverage (MCC).",
      "Cyclomatic Complexity (McCabe's Metric): Quantitative measure of structural complexity derived from control flow graph: $V(G) = E - N + 2 P$, where $E$ is edges, $N$ is nodes, and $P$ is connected components ($P=1$ for single program); Equivalently: $V(G) = P_d + 1$ (predicates + 1); Defines minimum number of linearly independent test paths.",
      "Unit Testing with JUnit 5: Jupiter testing framework; Annotations: `@Test`, `@BeforeEach`, `@AfterEach`, `@BeforeAll` (static), `@AfterAll`, `@DisplayName`, `@Disabled`; Assertions: `assertEquals()`, `assertTrue()`, `assertThrows()`, `assertTimeout()`, and `assertAll()`.",
      "Mocking & Test Doubles with Mockito: Types of test doubles: Dummy, Fake, Stub, Spy, and Mock; Mockito framework creates mock objects (`@Mock`, `Mockito.mock()`); Stubbing method return values: `when(service.getData()).thenReturn(mockData)`; Verifying method interactions: `verify(service, times(1)).save(any())`.",
      "Test-Driven Development (TDD): Red-Green-Refactor development cycle: (1) Red: Write failing unit test for new feature; (2) Green: Write minimal production code to pass test; (3) Refactor: Clean code and eliminate duplication while ensuring tests remain green.",
      "Regression Testing & Continuous Integration (CI): Re-running existing test suite after code modifications to ensure updates do not break existing functionality; Automated CI/CD pipelines (GitHub Actions, Jenkins) running automated unit tests on each commit pull request.",
      "University Examination Strategy: Calculate McCabe's Cyclomatic Complexity from a given control flow graph, derive test cases using Boundary Value Analysis and Equivalence Partitioning, and write a JUnit 5 test class with assertions and exception testing."
    ],
    "keyPoints": [
      "McCabe Cyclomatic Complexity: $V(G) = E - N + 2$ (or $V(G) = \\text{Predicate Nodes} + 1$).",
      "Boundary Value Analysis Range: For $[a, b]$, test values are $a, a+1, \\text{nominal}, b-1, b$.",
      "JUnit 5 Test Annotation: `@Test` designates a method as a test method.",
      "JUnit 5 Exception Assertion: `assertThrows(ExpectedException.class, () -> codeToRun())`.",
      "JUnit 5 BeforeAll Requirement: Must be declared `static` unless lifecycle is set to `PER_CLASS`.",
      "Mockito Stubbing Syntax: `when(mockObject.method(args)).thenReturn(returnValue)`.",
      "TDD Cycle Steps: Red (write failing test) $\\to$ Green (pass test) $\\to$ Refactor (clean code).",
      "Test Double Categories: Dummy (placeholder), Stub (canned answers), Mock (pre-programmed expectations), Spy (wrapper recording calls).",
      "Statement vs Branch Coverage: $100\\%$ branch coverage guarantees $100\\%$ statement coverage, but the converse is not true.",
      "Exam Scoring Tip: Cyclomatic complexity indicates the exact minimum number of test cases required to achieve complete branch/decision coverage of an algorithm."
    ]
  },
  "electronic devices & circuits:::u1": {
    "highlights": [
      "Energy Band Theory in Solids: Valence band, Conduction band, and Forbidden energy gap ($E_g$); Insulators ($E_g > 5\\text{ eV}$), Semiconductors ($E_g \\approx 1.1\\text{ eV}$ for Si, $0.67\\text{ eV}$ for Ge), and Conductors ($E_g = 0\\text{ eV}$, overlapping bands); Direct vs Indirect bandgap semiconductors.",
      "Intrinsic Semiconductors: Pure tetravalent lattice; Thermal generation of electron-hole pairs; Intrinsic carrier concentration $n_i = \\sqrt{N_c N_v} e^{-E_g / (2 k_B T)}$; Law of Mass Action: $n \\cdot p = n_i^2$; Intrinsic Fermi level $E_{Fi}$ located near middle of bandgap.",
      "Extrinsic Semiconductors: Doping with pentavalent donors (P, As, Sb $\\implies$ n-type, $n \\approx N_D$) and trivalent acceptors (B, Al, Ga $\\implies$ p-type, $p \\approx N_A$); Temperature dependence of carrier concentration (freeze-out, extrinsic saturation, and intrinsic breakdown regimes).",
      "Fermi-Dirac Distribution & Fermi Level: Probability of electron occupancy $f(E) = \\frac{1}{1 + e^{(E - E_F) / (k_B T)}}$; Movement of Fermi level toward conduction band in n-type ($E_F - E_{Fi} = k_B T \\ln(N_D / n_i)$) and toward valence band in p-type ($E_{Fi} - E_F = k_B T \\ln(N_A / n_i)$).",
      "Carrier Transport Phenomena: (1) Drift current governed by electric field $\\mathcal{E}$: $J_{drift} = q (n \\mu_n + p \\mu_p) \\mathcal{E}$; Velocity saturation at high fields; (2) Diffusion current driven by carrier concentration gradients: $J_{diff} = q D_n \\frac{dn}{dx} - q D_p \\frac{dp}{dx}$.",
      "Einstein Relation: Fundamental thermodynamic linkage between carrier diffusivity and mobility: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = \\frac{k_B T}{q} = V_t$ (thermal voltage $V_t \\approx 25.9\\text{ mV}$ at $300\\text{ K}$).",
      "Continuity Equation & Carrier Lifetime: Conservation of charge carriers: $\\frac{\\partial p}{\\partial t} = -\\frac{1}{q} \\nabla \\cdot J_p + (G_p - R_p)$; Excess carrier lifetime $\\tau_p$; Minority carrier diffusion length $L_p = \\sqrt{D_p \\tau_p}$.",
      "Hall Effect in Semiconductors: Magnetic deflection of moving charge carriers in transverse magnetic field $B_z$; Hall voltage $V_H = \\frac{I B}{q n t} = \\frac{R_H I B}{t}$; Hall coefficient $R_H = -\\frac{1}{q n}$ (n-type) or $+\\frac{1}{q p}$ (p-type); Determination of carrier type, density, and mobility $\\mu_H = |R_H| \\sigma$.",
      "Degenerate Semiconductors: Very high doping levels ($N_D > 10^{19}\\text{ cm}^{-3}$) causing Fermi level to penetrate into conduction or valence band; Incomplete ionization and bandgap narrowing effects.",
      "University Examination Strategy: Derive the intrinsic carrier concentration formula, calculate Hall voltage and carrier mobility from experimental hall-probe data, and state the continuity equation under steady-state injection conditions."
    ],
    "keyPoints": [
      "Law of Mass Action: $n \\cdot p = n_i^2$ (independent of doping level under thermal equilibrium).",
      "Einstein Relation: $\\frac{D}{\\mu} = \\frac{k_B T}{q} = V_t$ (where $V_t = 25.86\\text{ mV}$ at room temperature).",
      "Total Current Density: $J_{total} = q(n \\mu_n + p \\mu_p) \\mathcal{E} + q D_n \\frac{dn}{dx} - q D_p \\frac{dp}{dx}$.",
      "Hall Coefficient Formula: $R_H = \\frac{1}{q p}$ (p-type) or $-\\frac{1}{q n}$ (n-type).",
      "Hall Voltage: $V_H = \\frac{R_H I B}{w}$, where $w$ is semiconductor sample thickness along magnetic field.",
      "Diffusion Length: $L_n = \\sqrt{D_n \\tau_n}$ and $L_p = \\sqrt{D_p \\tau_p}$.",
      "Intrinsic Fermi Level: $E_{Fi} = \\frac{E_c + E_v}{2} + \\frac{3}{4} k_B T \\ln\\left(\\frac{m_p^*}{m_n^*}\\right)$.",
      "Direct Bandgap Semiconductor: Minimum of conduction band aligns with maximum of valence band in $k$-space (e.g. GaAs, ideal for LEDs).",
      "Indirect Bandgap Semiconductor: Band extrema misaligned in $k$-space; recombination requires phonon emission (e.g. Si, Ge).",
      "Exam Gold Tip: Hall effect sign indicates semiconductor polarity: positive Hall coefficient indicates p-type, negative indicates n-type."
    ]
  },
  "electronic devices & circuits:::u2": {
    "highlights": [
      "p-n Junction in Equilibrium: Metallurgical junction; Space Charge Region (depletion width $W$); Built-in contact potential: $V_{bi} = V_t \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)$; Depletion width: $W = \\sqrt{\\frac{2 \\epsilon_s}{q} \\left(\\frac{1}{N_A} + \\frac{1}{N_D}\\right) V_{bi}}$.",
      "p-n Junction under Bias: Forward bias (decreases barrier height to $V_{bi} - V_a$, exponential minority carrier injection); Reverse bias (increases barrier to $V_{bi} + V_R$, widens depletion layer); Shockley Diode Equation: $I = I_s \\left( e^{V / (\\eta V_t)} - 1 \\right)$, where $\\eta = 1$ for Ge, $\\eta = 2$ for Si at low currents.",
      "Diode Capacitance: (1) Junction / Transition Capacitance $C_j = \\frac{\\epsilon A}{W} \\propto (V_{bi} + V_R)^{-1/2}$ (dominant in reverse bias); (2) Diffusion Capacitance $C_d = \\frac{\\tau_T I_D}{\\eta V_t}$ (proportional to forward current, dominant in forward bias).",
      "Reverse Breakdown Mechanisms: (1) Zener Breakdown (tunneling of electrons across ultra-thin depletion layer at high doping, $V_Z < 5.6\\text{ V}$, negative temperature coefficient); (2) Avalanche Breakdown (impact ionization in lightly doped junctions at high reverse field, $V_{BR} > 6\\text{ V}$, positive temperature coefficient).",
      "Rectifier Circuits: Half-Wave Rectifier ($V_{dc} = V_m / \\pi$, ripple factor $\\gamma = 1.21$, efficiency $\\eta = 40.6\\%$); Full-Wave Center-Tapped and Bridge Rectifiers ($V_{dc} = 2 V_m / \\pi$, ripple factor $\\gamma = 0.482$, efficiency $\\eta = 81.2\\%$, PIV $= 2 V_m$ for center-tapped, PIV $= V_m$ for bridge).",
      "Smoothing Filters for Rectifiers: Shunt Capacitor Filter (ripple factor $\\gamma = \\frac{1}{4\\sqrt{3} f C R_L}$), Series Inductor Filter ($\\gamma = \\frac{R_L}{3\\sqrt{2} \\omega L}$), L-section (Choke input) and $\\pi$-section (CLC) filters.",
      "Zener Diode Voltage Regulator: Operates in reverse breakdown; Load regulation and line regulation; Design equations: $R_s = \\frac{V_{in(min)} - V_Z}{I_{L(max)} + I_{Z(min)}}$; Minimum and maximum allowable load resistance.",
      "Diode Waveform Shaping Circuits: Clippers (positive, negative, biased clippers limiting signal excursions without distorting remaining wave); Clampers (dc restorers adding dc level to AC signal using capacitor and diode, $\\Delta V = V_m$).",
      "Special Purpose Diodes: Varactor diode (voltage-variable capacitor); Light Emitting Diode (LED, forward-biased electroluminescence in direct-gap GaAsP); Photodiode (reverse-biased optical photon detection); Solar cell (photovoltaic mode); Tunnel Diode (degenerate doping, negative differential resistance).",
      "University Examination Strategy: Derive rectifier ripple factor and efficiency expressions, design Zener shunt regulator resistor values under specified line/load variations, and trace clipper/clamper output waveforms step-by-step."
    ],
    "keyPoints": [
      "Built-in Potential Formula: $V_{bi} = \\frac{k_B T}{q} \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)$.",
      "Shockley Diode Current Equation: $I = I_0 \\left( e^{\\frac{V}{\\eta V_t}} - 1 \\right)$.",
      "Full-Wave Rectifier Ripple Factor: $\\gamma = \\sqrt{\\left(\\frac{V_{rms}}{V_{dc}}\\right)^2 - 1} = \\sqrt{\\left(\\frac{\\pi}{2\\sqrt{2}}\\right)^2 - 1} \\approx 0.482$.",
      "Capacitor Filter Ripple Formula: $\\gamma = \\frac{1}{4 \\sqrt{3} f C R_L}$ for full-wave rectifier.",
      "Zener Series Resistor Formula: $R_s = \\frac{V_{in,min} - V_Z}{I_{L,max} + I_{Z,min}}$.",
      "Transition Capacitance Relation: $C_T = \\frac{\\epsilon_s A}{W} \\propto (V_{bi} + V_R)^{-1/2}$.",
      "Diffusion Capacitance Formula: $C_D = \\left(\\frac{\\tau_T}{\\eta V_t}\\right) I_D$.",
      "PIV Comparison: Bridge Rectifier $\\text{PIV} = V_m$; Center-Tapped Full-Wave $\\text{PIV} = 2 V_m$.",
      "Tunnel Diode Negative Resistance: Occurs between peak point $(V_p, I_p)$ and valley point $(V_v, I_v)$ due to quantum mechanical tunneling.",
      "Exam Gold Tip: In clamper analysis, total peak-to-peak output swing ($2V_m$) is strictly preserved; only the dc baseline shifts."
    ]
  },
  "electronic devices & circuits:::u3": {
    "highlights": [
      "Bipolar Junction Transistor (BJT) Physics: NPN and PNP structures; Active, Saturation, Cutoff, and Inverted operating regions; Forward-active operation: forward-biased emitter-base junction injecting minority carriers into thin neutral base, reverse-biased collector-base junction sweeping carriers into collector.",
      "BJT Currents & Amplification Factors: Current components: $I_E = I_B + I_C$; Common Base current gain $\\alpha = I_C / I_E$; Common Emitter current gain $\\beta = I_C / I_B$; Exact relations: $\\beta = \\frac{\\alpha}{1 - \\alpha}$ and $\\alpha = \\frac{\\beta}{1 + \\beta}$; Collector reverse saturation currents: $I_{CEO} = (1 + \\beta) I_{CBO}$.",
      "BJT Configurations & Characteristics: Common Base (CB: low $R_{in}$, high $R_{out}$, voltage gain $>1$, current gain $\\alpha < 1$); Common Emitter (CE: moderate $R_{in}, R_{out}$, high voltage and current gain, $180^\\circ$ phase inversion); Common Collector (CC / Emitter Follower: high $R_{in}$, low $R_{out}$, unity voltage gain).",
      "Early Effect & Base-Width Modulation: Reverse bias on collector-base junction widens depletion region, narrowing neutral base width $W_B$; Collector current increases with $V_{CE}$; Output resistance $r_o = \\frac{V_A + V_{CE}}{I_C} \\approx \\frac{V_A}{I_C}$, where $V_A$ is the Early voltage.",
      "Junction Field-Effect Transistor (JFET): Structure (n-channel and p-channel); Operation governed by reverse-biased gate-channel depletion width; Pinch-off voltage $V_P$; Shockley's JFET Equation: $I_D = I_{DSS} \\left(1 - \\frac{V_{GS}}{V_P}\\right)^2$ in saturation region; Transconductance $g_m = \\frac{2 I_{DSS}}{|V_P|} \\left(1 - \\frac{V_{GS}}{V_P}\\right)$.",
      "Metal-Oxide-Semiconductor FET (MOSFET): Depletion MOSFET (normally-on, operates in depletion and enhancement modes) vs Enhancement MOSFET (normally-off, threshold voltage $V_{th}$); Drain current equations: Triode / Linear region ($V_{DS} < V_{GS} - V_{th}$): $I_D = \\mu_n C_{ox} \\frac{W}{L} \\left[(V_{GS} - V_{th})V_{DS} - \\frac{V_{DS}^2}{2}\\right]$; Saturation region ($V_{DS} \\ge V_{GS} - V_{th}$): $I_D = \\frac{1}{2} \\mu_n C_{ox} \\frac{W}{L} (V_{GS} - V_{th})^2 (1 + \\lambda V_{DS})$.",
      "MOSFET Channel-Length Modulation: Shortening of effective channel length in saturation due to pinch-off region expansion; Parameterized by channel-length modulation coefficient $\\lambda = 1 / V_A$; Small-signal output resistance $r_o = 1 / (\\lambda I_D)$.",
      "Comparison Between BJT and FET: BJT is bipolar, current-controlled ($I_C = \\beta I_B$), lower input impedance ($k\\Omega$), higher transconductance; FET is unipolar (majority carriers), voltage-controlled ($I_D = f(V_{GS})$), ultra-high input impedance ($10^{12} \\Omega$), lower noise figure.",
      "Sub-Threshold Conduction in MOSFETs: Weak inversion current flowing when $V_{GS} < V_{th}$; Exponential dependency on $V_{GS}$; Subthreshold swing $S = (\\ln 10) \\frac{k_B T}{q} \\left(1 + \\frac{C_{dep}}{C_{ox}}\\right) \\approx 60-90\\text{ mV/decade}$; Critical in low-power VLSI design.",
      "University Examination Strategy: Derive $\\beta = \\alpha / (1 - \\alpha)$, plot and analyze CE input and output characteristics with Early voltage extrapolation, derive JFET transconductance $g_m$, and compute operating point coordinates for MOSFET saturation."
    ],
    "keyPoints": [
      "BJT Alpha-Beta Relation: $\\beta = \\frac{\\alpha}{1 - \\alpha}, \\quad \\alpha = \\frac{\\beta}{1 + \\beta}$.",
      "Collector Saturation Leakage: $I_{CEO} = (\\beta + 1) I_{CBO}$.",
      "BJT Small-Signal Transconductance: $g_m = \\frac{I_C}{V_t}$.",
      "Early Effect Output Resistance: $r_o = \\frac{V_A}{I_C}$.",
      "JFET Shockley Drain Current: $I_D = I_{DSS} \\left( 1 - \\frac{V_{GS}}{V_P} \\right)^2$ for $V_{DS} \\ge V_{GS} - V_P$.",
      "JFET Transconductance Expression: $g_m = g_{m0} \\left( 1 - \\frac{V_{GS}}{V_P} \\right)$, where $g_{m0} = \\frac{2 I_{DSS}}{|V_P|}$.",
      "MOSFET Saturation Current: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{th})^2 (1 + \\lambda V_{DS})$.",
      "MOSFET Pinch-Off Boundary: $V_{DS,sat} = V_{GS} - V_{th}$.",
      "Emitter Follower Impedance: Exhibits high input impedance $R_{in} \\approx r_\\pi + (1 + \\beta) R_E$ and low output impedance.",
      "Exam Gold Tip: For MOSFET saturation, both conditions must hold: $V_{GS} > V_{th}$ (channel exists) and $V_{DS} \\ge V_{GS} - V_{th}$ (pinched off)."
    ]
  },
  "electronic devices & circuits:::u4": {
    "highlights": [
      "BJT Biasing & Q-Point Stability: Need for stable Operating Point ($Q$: $V_{CEQ}, I_{CQ}$); Thermal runaway ($T \\uparrow \\implies I_{CBO} \\uparrow \\implies I_C \\uparrow \\implies P_D \\uparrow \\implies T \\uparrow$); Stability factors: $S = \\frac{\\partial I_C}{\\partial I_{CBO}}$, $S' = \\frac{\\partial I_C}{\\partial V_{BE}}$, $S'' = \\frac{\\partial I_C}{\\partial \\beta}$.",
      "Biasing Circuits Comparison: Fixed bias ($S = 1 + \\beta$, poor thermal stability); Collector-to-base feedback bias; Voltage Divider Bias (Self-bias: $R_{th} = R_1 \\parallel R_2, V_{th} = V_{CC} \\frac{R_2}{R_1 + R_2}$, stability factor $S \\approx 1 + \\frac{R_{th}}{R_E}$, superior thermal stability independent of $\\beta$).",
      "DC and AC Load Lines: DC load line: $V_{CE} = V_{CC} - I_C(R_C + R_E)$; AC load line: $v_{ce} = -i_c (R_C \\parallel R_L)$; Q-point placement for symmetrical unclipped output voltage swing ($V_{CEQ} = I_{CQ} r_{ac}$).",
      "BJT Small-Signal Low-Frequency Models: (1) Hybrid $h$-parameter model ($h_{ie}, h_{re}, h_{fe}, h_{oe}$); (2) Hybrid-$\\pi$ model: transconductance $g_m = I_C / V_t$, input resistance $r_\\pi = \\beta / g_m$, output resistance $r_o = V_A / I_C$; $r_e$ model: $r_e = V_t / I_E$.",
      "Small-Signal Analysis of CE Amplifier: Voltage gain $A_v = -g_m (R_C \\parallel R_L \\parallel r_o)$; Input resistance $R_{in} = R_1 \\parallel R_2 \\parallel r_\\pi$; Output resistance $R_{out} = R_C \\parallel r_o$; Current gain $A_i$; Impact of unbypassed emitter resistor $R_E$ (gain reduction $A_v \\approx -R_C / R_E$, input resistance expansion $r_\\pi + (1+\\beta)R_E$).",
      "Small-Signal Analysis of CB and CC Amplifiers: Common Collector (Emitter Follower): $A_v \\approx \\frac{R_E}{r_e + R_E} \\approx 1$, $R_{in} \\approx R_1 \\parallel R_2 \\parallel [r_\\pi + (1+\\beta)(R_E \\parallel R_L)]$, $R_{out} \\approx R_E \\parallel \\left(r_e + \\frac{R_s \\parallel R_B}{1+\\beta}\\right)$; Common Base: $A_v = +g_m(R_C \\parallel R_L)$, $R_{in} \\approx r_e$ (non-inverting).",
      "FET Small-Signal Amplifiers: Common Source (CS) amplifier ($A_v = -g_m (R_D \\parallel R_L \\parallel r_o)$, $R_{in} = R_G$); Common Drain (CD / Source Follower) amplifier ($A_v = \\frac{g_m R_S}{1 + g_m R_S} \\approx 1$, low $R_{out}$); Common Gate (CG) amplifier.",
      "Frequency Response of Amplifiers: Bode magnitude and phase plots; Low-frequency response dominated by coupling capacitors ($C_C1, C_C2$) and emitter bypass capacitor ($C_E$); Lower cutoff frequency $f_L = \\frac{1}{2\\pi R_{eq} C}$; Mid-band gain $A_{mid}$; Bandwidth $BW = f_H - f_L \\approx f_H$.",
      "High-Frequency Response & Miller's Theorem: Internal junction capacitances: BJT ($C_\\pi, C_\\mu$), MOSFET ($C_{gs}, C_{gd}, C_{db}$); Miller's Theorem: bridging capacitance $C_f$ between inverting amplifier nodes with gain $-K$ transforms into input capacitance $C_{in(M)} = C_f (1 + K)$ and output capacitance $C_{out(M)} = C_f (1 + 1/K)$; Gain-Bandwidth Product (GBW) constancy.",
      "University Examination Strategy: Calculate Q-point and stability factor $S$ for voltage divider bias, derive small-signal voltage gain and input impedance for CE amplifier using hybrid-$\\pi$ model, and compute upper cutoff frequency $f_H$ using Miller approximation."
    ],
    "keyPoints": [
      "Voltage Divider Bias Stability Factor: $S = \\frac{1 + \\beta}{1 + \\beta \\frac{R_E}{R_E + R_{th}}}$.",
      "CE Voltage Gain Formula: $A_v = -\\frac{g_m (R_C \\parallel R_L)}{1 + g_m R_E}$ (for unbypassed $R_E$).",
      "Hybrid-$\\pi$ Input Resistance: $r_\\pi = \\frac{\\beta V_t}{I_C} = (\\beta + 1) r_e$.",
      "Miller Input Capacitance: $C_{M,in} = C_f (1 - A_v) = C_f (1 + |A_v|)$ for inverting amplifier.",
      "Miller Output Capacitance: $C_{M,out} = C_f \\left(1 - \\frac{1}{A_v}\\right) \\approx C_f$.",
      "Emitter Bypass Cutoff Frequency: $f_{L(E)} = \\frac{1}{2\\pi R_e' C_E}$, where $R_e' = R_E \\parallel \\left(r_e + \\frac{R_s \\parallel R_B}{\\beta + 1}\\right)$.",
      "Gain-Bandwidth Product Rule: $A_{v0} \\times BW = \\text{Constant} = f_T$ (unity gain bandwidth).",
      "Source Follower Gain: $A_v = \\frac{g_m (R_S \\parallel R_L)}{1 + g_m (R_S \\parallel R_L)} < 1$.",
      "AC Symmetrical Swing Placement: Optimum $V_{CEQ} = \\frac{V_{CC} + I_{CQ}(R_E - r_{ac})}{2}$.",
      "Exam Gold Tip: An unbypassed emitter resistor $R_E$ provides negative feedback, stabilizing gain against temperature variations at the expense of lower mid-band gain."
    ]
  },
  "electronic devices & circuits:::u5": {
    "highlights": [
      "Negative Feedback Concepts & Topologies: Closed-loop gain $A_f = \\frac{A}{1 + A \\beta}$; Feedback factor $\\beta$; Loop gain $T = A \\beta$; Desensitivity of gain: $\\frac{dA_f}{A_f} = \\frac{1}{1 + A \\beta} \\frac{dA}{A}$; Topologies: (1) Voltage-Series (Series-Shunt: increases $R_{in}$, decreases $R_{out}$); (2) Voltage-Shunt (Shunt-Shunt: decreases $R_{in}, R_{out}$); (3) Current-Series (Series-Series: increases $R_{in}, R_{out}$); (4) Current-Shunt (Shunt-Series: decreases $R_{in}$, increases $R_{out}$).",
      "Effects of Negative Feedback: Stabilizes gain, reduces non-linear harmonic distortion ($D_f = D / (1 + A \\beta)$), suppresses power supply noise, expands bandwidth ($BW_f = BW \\cdot (1 + A \\beta)$), modifies terminal impedances.",
      "Positive Feedback & Barkhausen Criterion for Oscillation: Closed-loop gain diverges when $1 - A \\beta = 0$; Barkhausen Conditions: (1) Magnitude condition: $|A \\beta| = 1$; (2) Phase condition: $\\angle A \\beta = 0^\\circ$ or $360^\\circ$ (total loop phase shift must be zero or integer multiple of $2\\pi$).",
      "RC Phase Shift Oscillator: Uses 3-section $RC$ ladder network; Each $RC$ section provides $60^\\circ$ phase shift, total feedback phase shift $180^\\circ$; Inverting CE/Op-Amp stage provides remaining $180^\\circ$; Frequency of oscillation $f_0 = \\frac{1}{2\\pi R C \\sqrt{6}}$; Minimum amplifier gain requirement: $|A| \\ge 29$ (BJT requires $h_{fe} \\ge 44.5$ or $56$).",
      "Wien Bridge Oscillator: Lead-lag $RC$ network; Zero phase shift at resonance; Resonance frequency $f_0 = \\frac{1}{2\\pi R C}$; Feedback attenuation $\\beta = 1/3$; Amplifier must provide non-inverting gain $A_v = 1 + \\frac{R_f}{R_1} \\ge 3$; Amplitude stabilization using thermistors or back-to-back Zener diodes.",
      "LC Tuned Oscillators: High-frequency sinusoidal signal generation; Tank circuit ($L-C$) resonance $f_0 \\approx \\frac{1}{2\\pi \\sqrt{L C}}$; (1) Hartley Oscillator: Tapped inductor ($L_1 + L_2 + 2M$), feedback ratio $\\beta = L_1 / L_2$, $f_0 = \\frac{1}{2\\pi \\sqrt{L_{eq} C}}$; (2) Colpitts Oscillator: Tapped capacitive divider ($C_1, C_2$), feedback ratio $\\beta = C_2 / C_1$, equivalent capacitance $C_{eq} = \\frac{C_1 C_2}{C_1 + C_2}$, $f_0 = \\frac{1}{2\\pi \\sqrt{L C_{eq}}}$.",
      "Clapp Oscillator: Modification of Colpitts oscillator; Adds small capacitor $C_3$ in series with inductor $L$ ($C_3 \\ll C_1, C_2$); Frequency determined primarily by $C_3$: $f_0 = \\frac{1}{2\\pi \\sqrt{L C_3}}$; Eliminates frequency drift caused by transistor stray junction capacitances.",
      "Crystal Oscillators: Piezoelectric quartz crystal; Equivalent electrical circuit: Series RLC arm ($R, L, C_s$) shunted by parallel mounting capacitance $C_p$; Extremely high Quality factor $Q > 10^4$; Series resonance frequency $f_s = \\frac{1}{2\\pi \\sqrt{L C_s}}$; Parallel anti-resonance frequency $f_p = \\frac{1}{2\\pi \\sqrt{L C_{eq}}}$ where $C_{eq} = \\frac{C_s C_p}{C_s + C_p}$; Pierce crystal oscillator.",
      "Multivibrators: Non-sinusoidal waveform generators; (1) Astable Multivibrator (free-running square wave generator, $T = 1.386 R C$); (2) Monostable Multivibrator (one stable state, generates fixed-width pulse upon trigger, $T = 0.693 R C$); (3) Bistable Multivibrator (two stable states, basic flip-flop memory element).",
      "University Examination Strategy: Derive the closed-loop gain and impedance relations for Voltage-Series feedback, derive the oscillation frequency and gain condition for the RC Phase Shift oscillator, and calculate component values for Hartley vs Colpitts oscillators."
    ],
    "keyPoints": [
      "Feedback Gain Formula: $A_f = \\frac{A}{1 + A \\beta}$.",
      "Gain Desensitivity: $\\frac{dA_f}{A_f} = \\frac{1}{1 + A \\beta} \\frac{dA}{A}$.",
      "Barkhausen Criteria: $|A \\beta| = 1$ and $\\angle A \\beta = 0^\\circ$ (or $2\\pi n$).",
      "RC Phase Shift Frequency: $f_0 = \\frac{1}{2\\pi R C \\sqrt{6}}$ with minimum required gain $|A_v| \\ge 29$.",
      "Wien Bridge Frequency & Gain: $f_0 = \\frac{1}{2\\pi R C}$ with non-inverting gain $A_v = 1 + \\frac{R_f}{R_1} \\ge 3$.",
      "Colpitts Equivalent Capacitance: $C_{eq} = \\frac{C_1 C_2}{C_1 + C_2}$ and $f_0 = \\frac{1}{2\\pi \\sqrt{L C_{eq}}}$.",
      "Hartley Equivalent Inductance: $L_{eq} = L_1 + L_2 + 2M$ and $f_0 = \\frac{1}{2\\pi \\sqrt{L_{eq} C}}$.",
      "Crystal Piezoelectric Resonance: Operates in inductive region between $f_s$ and $f_p$ ($f_s < f < f_p$).",
      "Voltage-Series Terminal Impedances: $R_{in,f} = R_{in}(1 + A\\beta)$ and $R_{out,f} = \\frac{R_{out}}{1 + A\\beta}$.",
      "Exam Gold Tip: Colpitts oscillators provide superior high-frequency spectral purity compared to Hartley oscillators because the split capacitors shunt high-frequency harmonics to ground."
    ]
  },
  "network theory:::u1": {
    "highlights": [
      "Ideal and Practical Circuit Elements: Independent and dependent voltage and current sources (VCVS, VCCS, CCVS, CCCS); Active vs passive components; Linear vs non-linear elements; Bilateral vs unilateral elements; Lumped vs distributed parameter networks.",
      "Kirchhoff's Laws in Systematic Analysis: Kirchhoff's Current Law (KCL: $\\sum i_k = 0$ at any node) based on conservation of electric charge; Kirchhoff's Voltage Law (KVL: $\\sum v_k = 0$ around any closed loop) based on conservation of energy; Matrix formulation.",
      "Graph Theoretic Topological Matrices: Connected linear graph $G$; Nodes $N$, Branches $B$; Oriented graphs; Complete incidence matrix $A_a$ and Reduced incidence matrix $A$ (rank $N-1$); Tree branches (twigs) and Co-tree chords (links $L = B - N + 1$).",
      "Fundamental Cut-Set and Tie-Set Matrices: Fundamental Cut-Set matrix $Q_f = [I_{N-1} \\mid Q_{12}]$ (each cutset contains exactly one tree branch); Fundamental Tie-Set / Loop matrix $B_f = [B_{11} \\mid I_L]$ (each loop contains exactly one link); Orthogonality relationship: $B_f Q_f^T = 0$ and $A B_f^T = 0$.",
      "Topological Equilibrium Equations: Branch voltage vector $\\mathbf{V}_b = A^T \\mathbf{V}_n$; Node admittance equation matrix: $A Y_b A^T \\mathbf{V}_n = -A (\\mathbf{I}_s - Y_b \\mathbf{V}_s)$; Loop impedance equation matrix: $B_f Z_b B_f^T \\mathbf{I}_l = -B_f (\\mathbf{V}_s - Z_b \\mathbf{I}_s)$.",
      "Source Transformation & Star-Delta Equivalence: Norton-Thevenin source transformations ($V_s = I_s R_s$); Delta-to-Wye ($\\Delta \\to Y$) transformation ($R_1 = \\frac{R_b R_c}{R_a + R_b + R_c}$) and Wye-to-Delta ($Y \\to \\Delta$) transformation ($R_a = R_1 + R_2 + \\frac{R_1 R_2}{R_3}$).",
      "Nodal Analysis with Supernodes: Treatment of ideal voltage sources connected between two non-reference nodes; Supernode boundary construction; Combining KCL node equations with internal constraint voltage equations.",
      "Mesh Analysis with Supermeshes: Treatment of ideal current sources shared between two adjacent meshes; Supermesh boundary construction by conceptually opening current source; Combining KVL loop equations with branch current constraint equations.",
      "Duality in Electrical Networks: Concept of dual networks; Dual pairs (Node $\\leftrightarrow$ Mesh, Tree $\\leftrightarrow$ Co-tree, Twig $\\leftrightarrow$ Link, Impedance $\\leftrightarrow$ Admittance, Series $\\leftrightarrow$ Parallel, KCL $\\leftrightarrow$ KVL); Geometric construction of dual graphs for planar networks.",
      "University Examination Strategy: Construct fundamental cutset and tieset matrices for 5-node 8-branch planar circuits, derive node equations in matrix format using graph matrices, and solve circuits containing multiple controlled sources using supernode techniques."
    ],
    "keyPoints": [
      "KCL Charge Conservation: $\\sum_{k} I_k = 0$ at every isolated topological boundary.",
      "KVL Energy Conservation: $\\sum_{k} V_k = 0$ around any closed loop.",
      "Number of Tree Twigs: Exactly $N - 1$, where $N$ is total node count.",
      "Number of Fundamental Loops: $L = B - N + 1$, where $B$ is total branch count.",
      "Orthogonality of Loops and Cutsets: $B_f Q_f^T = 0$ and $Q_f B_f^T = 0$.",
      "Branch Voltage from Node Voltage: $\\mathbf{V}_b = A^T \\mathbf{V}_n$.",
      "Delta-to-Star Conversion: $R_1 = \\frac{R_{12} R_{31}}{R_{12} + R_{23} + R_{31}}$.",
      "Star-to-Delta Conversion: $R_{12} = R_1 + R_2 + \\frac{R_1 R_2}{R_3}$.",
      "Dual Network Principle: A planar graph with $M$ meshes has a dual graph with $M+1$ nodes.",
      "Exam Gold Tip: When forming fundamental cut-sets, remember that each cut-set must contain strictly one tree branch and a unique set of links."
    ]
  },
  "network theory:::u2": {
    "highlights": [
      "Axiomatic Foundations of Network Theorems: Linear time-invariant (LTI) lumped parameter networks; Homogeneity and Additivity; S-domain representation of linear networks.",
      "Superposition Theorem in Multi-Source Networks: Branch current/voltage calculation by summing contributions from individual independent sources; Handling dependent sources (controlled sources remain connected and active throughout all calculation stages); Power non-linearity caveat (power cannot be found by superposition).",
      "Thevenin's Theorem with Dependent Sources: Equivalent voltage source $V_{th}$ (open-circuit voltage across terminals $A-B$); Equivalent resistance $R_{th}$: Method 1 (open-circuit/short-circuit ratio $R_{th} = V_{oc} / I_{sc}$), Method 2 (deactivate independent sources and apply 1 V test voltage or 1 A test current source: $R_{th} = V_{test} / I_{test}$).",
      "Norton's Theorem & Dual Formulations: Norton short-circuit current source $I_N = I_{sc}$; Norton equivalent conductance $G_N = 1 / R_{th}$; Equivalence and conversion between Thevenin and Norton representations.",
      "Maximum Power Transfer Theorem in Complex Networks: DC maximum power condition: $R_L = R_{th}$; AC maximum power transfer with variable load impedance: $Z_L = Z_{th}^*$ (complex conjugate match); Variable load resistance with fixed reactance: $R_L = \\sqrt{R_{th}^2 + (X_{th} + X_L)^2}$; Load angle adjustment.",
      "Reciprocity Theorem and S-Parameters: Verification of reciprocity in two-port passive networks: $Z_{12} = Z_{21}$ and $Y_{12} = Y_{21}$; Physical interpretation in terms of electromagnetic Lorentz reciprocity; Failure of reciprocity in the presence of controlled sources, gyrators, or magnetized ferrites.",
      "Millman's Network Reduction Theorem: Parallel voltage source branch reduction: $V_m = \\frac{\\sum_{k=1}^n V_k Y_k}{\\sum_{k=1}^n Y_k}$; Series current source branch reduction: $I_m = \\frac{\\sum_{k=1}^n I_k Z_k}{\\sum_{k=1}^n Z_k}$; Fast solution of three-phase unbalanced star-connected neutral displacement voltages.",
      "Tellegen's Generalized Theorem: Power conservation in topological networks: $\\sum_{k=1}^B v_k(t) i_k(t) = 0$; Quasi-Tellegen theorem: if two networks $N$ and $\\hat{N}$ have identical topological graphs, then $\\sum_{k=1}^B v_k \\hat{i}_k = 0$ and $\\sum_{k=1}^B \\hat{v}_k i_k = 0$; Proof of reciprocity and sensitivity analysis using adjoint networks.",
      "Compensation and Substitution Theorems: Compensation Theorem: change in branch impedance $\\Delta Z$ produces branch current changes identical to inserting an opposing series voltage generator $V_c = I \\Delta Z$; Substitution Theorem: any branch carrying known current and voltage may be replaced by an independent source.",
      "University Examination Strategy: Solve complex transistor biasing networks using Thevenin equivalent with dependent source test generators, apply Maximum Power Transfer theorem to AC transformer-coupled circuits, and verify Tellegen's theorem on multi-branch networks."
    ],
    "keyPoints": [
      "Thevenin Test Source Method: $R_{th} = \\frac{V_{test}}{I_{test}}$ with all independent sources killed.",
      "Norton Current Identity: $I_N = I_{sc} = \\frac{V_{oc}}{R_{th}}$.",
      "Max Power Pure Resistive Load: $R_L = |Z_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}$.",
      "Max Power Transfer Efficiency: Maximum power transfer yields strictly $50\\%$ efficiency.",
      "Reciprocity Parameter Test: $Z_{12} = Z_{21}$ and $Y_{12} = Y_{21}$ in linear bilateral passive networks.",
      "Millman Neutral Displacement: $V_{n'n} = \\frac{V_{an} Y_a + V_{bn} Y_b + V_{cn} Y_c}{Y_a + Y_b + Y_c}$.",
      "Tellegen Invariant Formula: $\\sum_{k=1}^B v_k(t) i_k(t) = 0$ (independent of linearity or time-invariance).",
      "Quasi-Tellegen Relation: $\\sum_{k=1}^B v_k \\hat{\\imath}_k = 0$ for networks sharing identical digraph topology.",
      "Compensation Voltage Generator: $V_c = -I \\Delta Z$ (series voltage source opposing original current).",
      "Exam Gold Tip: Superposition cannot be applied directly to calculate power ($P \\ne P_1 + P_2$); you must find total current or voltage first, then calculate $P = I^2 R$."
    ]
  },
  "network theory:::u3": {
    "highlights": [
      "Physical Mechanics of Switching Transients: Energy storage in magnetic fields ($E_L = \\frac{1}{2} L i^2$) and electric fields ($E_C = \\frac{1}{2} C v^2$); Mathematical justification of boundary continuity conditions: $i_L(0^+) = i_L(0^-)$ and $v_C(0^+) = v_C(0^-)$; Evaluation of higher derivatives $\\frac{di_L}{dt}(0^+), \\frac{dv_C}{dt}(0^+)$ via differential equations.",
      "Classical Differential Equation Transient Solutions: Homogeneous complementary function (transient / natural response) and particular integral (steady-state / forced response); Complete solution $x(t) = x_c(t) + x_p(t)$; Determination of arbitrary constants from boundary initial values.",
      "First-Order RL and RC Switching Responses: Step, pulse, and impulse excitation; Growth and decay of current in RL circuits ($i(t) = \\frac{V}{R}(1 - e^{-t/\\tau})$ where $\\tau = L/R$); Charging and discharging of capacitors ($v(t) = V(1 - e^{-t/\\tau})$ where $\\tau = R C$); Transient energy dissipation balance.",
      "Second-Order Series RLC Circuits: Characteristic equation $s^2 + \\frac{R}{L} s + \\frac{1}{LC} = 0$; Attenuation constant $\\alpha = R / (2L)$; Resonant undamped frequency $\\omega_0 = 1 / \\sqrt{LC}$; Damping ratio $\\zeta = \\alpha / \\omega_0 = \\frac{R}{2} \\sqrt{\\frac{C}{L}}$; Analysis of Overdamped, Critically Damped, and Underdamped waveforms.",
      "Second-Order Parallel RLC Circuits: Dual characteristic equation $s^2 + \\frac{1}{RC} s + \\frac{1}{LC} = 0$; Attenuation constant $\\alpha = 1 / (2RC)$; Quality factor $Q = \\omega_0 R C$; Damping ratio $\\zeta = 1 / (2\\omega_0 R C) = \\frac{1}{2R}\\sqrt{\\frac{L}{C}}$.",
      "Transients in Magnetically Coupled Circuits: Coupled differential equations with mutual inductance $M$; Reflected impedance transients; Current growth in primary and secondary coils under sudden DC step voltage switching.",
      "Laplace Transform in Network Transient Synthesis: S-domain equivalent circuit representations; Inductor model: series impedance $s L$ with initial flux source $L i_L(0^-)$; Capacitor model: impedance $1/(s C)$ with initial charge source $v_C(0^-)/s$; Systematic nodal and loop formulation in $s$-domain.",
      "State-Space Modeling of Dynamic Networks: Selection of independent state vector $\\mathbf{x}(t) = [v_C(t), i_L(t)]^T$; Standard matrix form: $\\mathbf{\\dot{x}} = A \\mathbf{x} + B \\mathbf{u}$; Output equation: $\\mathbf{y} = C \\mathbf{x} + D \\mathbf{u}$; System poles as eigenvalues of matrix $A$ ($\\det(s I - A) = 0$).",
      "State Transition Matrix and Closed-Form Solution: State transition matrix $\\Phi(t) = e^{A t} = \\mathcal{L}^{-1}\\{(s I - A)^{-1}\\}$; Cayley-Hamilton theorem method for matrix exponential evaluation; Complete state trajectory: $\\mathbf{x}(t) = \\Phi(t) \\mathbf{x}(0) + \\int_0^t \\Phi(t - \\tau) B \\mathbf{u}(\\tau) d\\tau$.",
      "University Examination Strategy: Calculate immediate post-switching derivatives $\\frac{d^2 i}{dt^2}(0^+)$ in multi-loop RLC networks, solve second-order RLC transient differential equations with non-zero initial energy storage, and compute state transition matrices using Cayley-Hamilton theorem."
    ],
    "keyPoints": [
      "Capacitor Voltage Continuity: $v_C(0^+) = v_C(0^-)$ (infinite current required to alter charge instantaneously).",
      "Inductor Current Continuity: $i_L(0^+) = i_L(0^-)$ (infinite voltage required to alter flux instantaneously).",
      "Series RLC Damping Factor: $\\alpha = \\frac{R}{2L}$, $\\omega_0 = \\frac{1}{\\sqrt{LC}}$, $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$.",
      "Parallel RLC Damping Factor: $\\alpha = \\frac{1}{2RC}$, $\\omega_0 = \\frac{1}{\\sqrt{LC}}$, $\\zeta = \\frac{1}{2R}\\sqrt{\\frac{L}{C}}$.",
      "Underdamped Oscillatory Frequency: $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$.",
      "Critically Damped Condition: $\\alpha = \\omega_0 \\implies R = 2\\sqrt{\\frac{L}{C}}$ (series RLC).",
      "S-Domain Inductor Model: $V(s) = s L I(s) - L i(0^-)$.",
      "S-Domain Capacitor Model: $I(s) = s C V(s) - C v(0^-)$.",
      "State-Space Standard Form: $\\mathbf{\\dot{x}}(t) = A \\mathbf{x}(t) + B \\mathbf{u}(t)$.",
      "Exam Gold Tip: In state variable formulation, the number of independent state variables equals the number of reactive elements ($L$ and $C$) that do not form all-capacitor loops or all-inductor cutsets."
    ]
  },
  "network theory:::u4": {
    "highlights": [
      "Sinusoidal Steady-State Phasor Analysis: Phasor domain transformations; Impedance and admittance triangles; Voltage and current divider rules in phasor notation; Steady-state AC nodal and mesh analysis.",
      "Resonance Phenomena in Complex Networks: Series resonance ($Z = R$, unity power factor, minimum impedance, maximum current); Parallel resonance ($Y = G$, anti-resonance, maximum impedance, minimum line current); Selectivity curve; Quality factor ($Q = 2\\pi \\frac{\\text{Max energy stored}}{\\text{Energy dissipated per cycle}}$); Half-power bandwidth $BW = f_0 / Q$.",
      "Magnetically Coupled Circuits: Faraday's and Lenz's laws; Coefficient of coupling $k = \\frac{M}{\\sqrt{L_1 L_2}}$ ($0 \\le k \\le 1$); Dot convention rules for establishing mutual voltage polarities; Mesh analysis of circuits containing air-core and iron-core coupled coils.",
      "Equivalent Conductive T and $\\pi$ Models of Coupled Coils: Conductive T-equivalent circuit for coupled inductor pair sharing common reference terminal: arms $L_1 - M, L_2 - M$, and shunt leg $M$; Ideal transformer relationships ($V_1/V_2 = N_1/N_2 = a, I_1/I_2 = 1/a$, impedance reflection $Z_{in} = a^2 Z_L$).",
      "Polyphase Balanced Three-Phase Systems: Generation of balanced 3-phase voltages ($120^\\circ$ phase separation); Phase sequence ($R-Y-B$ positive sequence vs $R-B-Y$ negative sequence); Star (Wye) connection: line voltage $V_L = \\sqrt{3} V_{ph} \\angle +30^\\circ$, line current $I_L = I_{ph}$; Delta (Mesh) connection: line voltage $V_L = V_{ph}$, line current $I_L = \\sqrt{3} I_{ph} \\angle -30^\\circ$.",
      "Power Measurement in Three-Phase Circuits: Total 3-phase active power $P = \\sqrt{3} V_L I_L \\cos\\theta$; Total reactive power $Q = \\sqrt{3} V_L I_L \\sin\\theta$; Total apparent power $S = \\sqrt{3} V_L I_L$; Three-wattmeter method for 4-wire unbalanced systems.",
      "Two-Wattmeter Method for 3-Phase Power Measurement: Applicable to balanced and unbalanced 3-wire star or delta loads; Wattmeter readings: $W_1 = V_L I_L \\cos(30^\\circ - \\theta)$, $W_2 = V_L I_L \\cos(30^\\circ + \\theta)$; Total active power $P = W_1 + W_2$; Total reactive power $Q = \\sqrt{3}(W_1 - W_2)$; Load power factor angle: $\\tan\\theta = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}$.",
      "Power Factor Cases in Two-Wattmeter Method: (1) Unity PF ($\\theta = 0^\\circ$): $W_1 = W_2 > 0$; (2) $\\text{PF} = 0.5$ lagging ($\\theta = 60^\\circ$): $W_2 = 0, W_1 = P$; (3) $\\text{PF} < 0.5$ ($\\theta > 60^\\circ$): $W_2$ reads negative (requires current-coil reversal); (4) Zero PF ($\\theta = 90^\\circ$): $W_1 = -W_2$.",
      "Unbalanced Three-Phase Load Analysis: Star-connected unbalanced load with floating neutral: Millman's neutral displacement voltage method $V_{n'n} = \\frac{\\sum V_k Y_k}{\\sum Y_k}$; Delta-connected unbalanced load: direct line voltage phase-by-phase application; Mesh current method for 3-wire unbalanced systems.",
      "University Examination Strategy: Solve coupled inductor mesh equations with exact dot polarity markings, calculate load power factor and reactive power from two-wattmeter readings including negative meter reading conditions, and compute neutral displacement voltage in unbalanced star loads."
    ],
    "keyPoints": [
      "Star Line-Phase Voltage: $V_L = \\sqrt{3} V_{ph} \\angle 30^\\circ$ with $I_L = I_{ph}$.",
      "Delta Line-Phase Current: $I_L = \\sqrt{3} I_{ph} \\angle -30^\\circ$ with $V_L = V_{ph}$.",
      "Total Three-Phase Power: $P_{3\\phi} = \\sqrt{3} V_L I_L \\cos\\theta = 3 V_{ph} I_{ph} \\cos\\theta$.",
      "Two-Wattmeter Sum: $W_1 + W_2 = \\sqrt{3} V_L I_L \\cos\\theta = P_{total}$.",
      "Two-Wattmeter Difference: $W_1 - W_2 = V_L I_L \\sin\\theta$.",
      "Two-Wattmeter Power Factor Angle: $\\tan\\theta = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}$.",
      "Two-Wattmeter PF = 0.5 Criterion: $W_2 = 0$ and $W_1 = P$ (one wattmeter reads zero).",
      "Two-Wattmeter PF < 0.5 Criterion: One wattmeter deflects backwards and yields a negative reading.",
      "Coupling Coefficient Formula: $k = \\frac{M}{\\sqrt{L_1 L_2}} \\le 1$.",
      "Exam Gold Tip: In the two-wattmeter method, if power factor is less than 0.5 lagging, the reading of the second wattmeter is negative; record it as $-W_2$ when summing total power."
    ]
  },
  "network theory:::u5": {
    "highlights": [
      "Two-Port Network Parameter Formulations: Port condition verification; Terminal relationships: Impedance parameters $[Z]$ ($V_1, V_2$ in terms of $I_1, I_2$); Admittance parameters $[Y]$ ($I_1, I_2$ in terms of $V_1, V_2$); Hybrid parameters $[h]$ ($V_1, I_2$ in terms of $I_1, V_2$); Inverse hybrid parameters $[g]$ ($I_1, V_2$ in terms of $V_1, I_2$).",
      "Transmission ABCD Parameters: Transmission parameters $[T]$: $\\begin{bmatrix} V_1 \\\\ I_1 \\end{bmatrix} = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} \\begin{bmatrix} V_2 \\\\ -I_2 \\end{bmatrix}$; Inverse transmission parameters $[T']$: $V_2 = A' V_1 - B' I_1, I_2 = C' V_1 - D' I_1$; Cascaded two-port networks.",
      "Conditions for Reciprocity and Symmetry: Reciprocity: $Z_{12} = Z_{21}$, $Y_{12} = Y_{21}$, $h_{12} = -h_{21}$, $g_{12} = -g_{21}$, $A D - B C = 1$; Symmetry: $Z_{11} = Z_{22}$, $Y_{11} = Y_{22}$, $h_{11} h_{22} - h_{12} h_{21} = 1$, $A = D$.",
      "Two-Port Parameter Matrix Conversions: Comprehensive inter-parameter formulas: $[Y] = [Z]^{-1}$; $A = Z_{11}/Z_{21}$, $B = \\Delta Z / Z_{21}$, $C = 1 / Z_{21}$, $D = Z_{22} / Z_{21}$; $h_{11} = \\Delta Z / Z_{22}$, $h_{12} = Z_{12} / Z_{22}$, $h_{21} = -Z_{21} / Z_{22}$, $h_{22} = 1 / Z_{22}$.",
      "Equivalent Networks (T and $\\pi$ Representations): Conversion of arbitrary reciprocal two-port network into equivalent T-network ($Z_a = Z_{11} - Z_{12}, Z_b = Z_{22} - Z_{12}, Z_c = Z_{12}$) and equivalent $\\pi$-network ($Y_a = Y_{11} + Y_{12}, Y_b = Y_{22} + Y_{12}, Y_c = -Y_{12}$).",
      "Interconnection of Two-Port Networks: (1) Series-series connection: $[Z] = [Z_1] + [Z_2]$; (2) Parallel-parallel connection: $[Y] = [Y_1] + [Y_2]$; (3) Series-parallel connection: $[h] = [h_1] + [h_2]$; (4) Parallel-series connection: $[g] = [g_1] + [g_2]$; (5) Cascade connection: $[T] = [T_1] [T_2]$; Brune's test for port condition validity.",
      "Lattice Networks and Bridge-T Networks: Symmetrical lattice network: series arms $Z_a$, diagonal cross arms $Z_b$; Open-circuit and short-circuit impedances: $Z_{11} = \\frac{Z_a + Z_b}{2}, Z_{12} = \\frac{Z_b - Z_a}{2}$; Bartlett's Bisection Theorem: bisection of symmetrical networks into half-circuits.",
      "Terminated Two-Port Network Transfer Functions: Operating with source impedance $Z_s$ and load impedance $Z_L$; Driving point input impedance $Z_{in} = \\frac{A Z_L + B}{C Z_L + D}$; Driving point output impedance $Z_{out} = \\frac{D Z_s + B}{C Z_s + A}$; Voltage transfer ratio $A_v = \\frac{V_2}{V_1} = \\frac{Z_L}{A Z_L + B}$; Current transfer ratio $A_i = \\frac{-I_2}{I_1} = \\frac{1}{C Z_L + D}$.",
      "Scattering ($S$) Parameters in High-Frequency Networks: Incident normalized power waves $a_1, a_2$ and reflected power waves $b_1, b_2$; Characteristic reference impedance $Z_0$; $S$-matrix: $b_1 = S_{11} a_1 + S_{12} a_2, b_2 = S_{21} a_1 + S_{22} a_2$; Return loss $RL = -20\\log_{10}|S_{11}|$; Insertion loss $IL = -20\\log_{10}|S_{21}|$; Unitary property of lossless networks ($S^H S = I$).",
      "University Examination Strategy: Determine $Z, Y$, and $ABCD$ parameters for symmetrical bridged-T networks, verify network reciprocity and symmetry from parameter definitions, evaluate cascade transmission matrices, and apply Bartlett's bisection theorem to convert ladder sections into equivalent lattices."
    ],
    "keyPoints": [
      "Z-Parameter Reciprocity: $Z_{12} = Z_{21}$; Symmetry: $Z_{11} = Z_{22}$.",
      "Y-Parameter Reciprocity: $Y_{12} = Y_{21}$; Symmetry: $Y_{11} = Y_{22}$.",
      "ABCD Reciprocity: $A D - B C = 1$; Symmetry: $A = D$.",
      "h-Parameter Reciprocity: $h_{12} = -h_{21}$; Symmetry: $\\Delta h = 1$.",
      "Series-Series Matrix Addition: $[Z]_{total} = [Z_A] + [Z_B]$.",
      "Parallel-Parallel Matrix Addition: $[Y]_{total} = [Y_A] + [Y_B]$.",
      "Cascade Chain Multiplication: $[T]_{total} = [T_A] [T_B]$.",
      "Symmetrical Lattice Z-Parameters: $Z_{11} = \\frac{Z_a + Z_b}{2}$, $Z_{12} = \\frac{Z_b - Z_a}{2}$.",
      "Terminated Two-Port Voltage Gain: $A_v = \\frac{Z_L}{A Z_L + B}$.",
      "Exam Gold Tip: For cascade connections, the overall transmission matrix is obtained by matrix multiplication in strictly left-to-right signal flow order: $[T]_{total} = [T_1] [T_2]$."
    ]
  },
  "signals & systems:::u1": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "signals & systems:::u2": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "signals & systems:::u3": {
    "highlights": [
      "Continuous-Time Fourier Series (CTFS): Representation of periodic signals $x(t) = \\sum_{k=-\\infty}^\\infty a_k e^{j k \\omega_0 t}$; Analysis equation $a_k = \\frac{1}{T} \\int_T x(t) e^{-j k \\omega_0 t} dt$; Trigonometric Fourier series ($a_0, a_n, b_n$) vs Exponential Fourier series; Dirichlet conditions for convergence.",
      "Properties of Fourier Series: Linearity, Time shifting ($x(t - t_0) \\leftrightarrow a_k e^{-j k \\omega_0 t_0}$), Time reversal ($x(-t) \\leftrightarrow a_{-k}$), Conjugation ($x^*(t) \\leftrightarrow a_{-k}^*$); Parseval's theorem for periodic signals: $P = \\frac{1}{T}\\int_T |x(t)|^2 dt = \\sum_{k=-\\infty}^\\infty |a_k|^2$.",
      "Continuous-Time Fourier Transform (CTFT): Extension of Fourier series to aperiodic signals as $T \\to \\infty$; Analysis equation $X(j\\omega) = \\int_{-\\infty}^\\infty x(t) e^{-j\\omega t} dt$; Synthesis / Inverse Fourier transform $x(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty X(j\\omega) e^{j\\omega t} d\\omega$.",
      "CTFT Transform Pairs of Common Signals: Impulse $\\delta(t) \\leftrightarrow 1$; DC signal $1 \\leftrightarrow 2\\pi \\delta(\\omega)$; Rectangular pulse $\\text{rect}(t/\\tau) \\leftrightarrow \\tau \\text{sinc}(\\omega \\tau / (2\\pi))$; Signum $\\text{sgn}(t) \\leftrightarrow \\frac{2}{j\\omega}$; Step $u(t) \\leftrightarrow \\frac{1}{j\\omega} + \\pi \\delta(\\omega)$; Complex exponential $e^{j \\omega_0 t} \\leftrightarrow 2\\pi \\delta(\\omega - \\omega_0)$.",
      "Key Properties of CTFT: Linearity, Time scaling ($x(a t) \\leftrightarrow \\frac{1}{|a|} X(j\\omega / a)$), Duality ($X(t) \\leftrightarrow 2\\pi x(-\\omega)$), Frequency shifting / Modulation ($x(t) e^{j \\omega_0 t} \\leftrightarrow X(j(\\omega - \\omega_0))$), Differentiation in time ($\\frac{dx(t)}{dt} \\leftrightarrow j\\omega X(j\\omega)$), Integration in time.",
      "Convolution and Multiplication Theorems: Time convolution maps to frequency multiplication ($x(t) * h(t) \\leftrightarrow X(j\\omega) H(j\\omega)$); Frequency convolution maps to time multiplication ($x(t) p(t) \\leftrightarrow \\frac{1}{2\\pi} [X(j\\omega) * P(j\\omega)]$); System frequency response $H(j\\omega) = Y(j\\omega) / X(j\\omega)$.",
      "Parseval's Energy Theorem: Total energy in time domain equals total energy in frequency domain: $E = \\int_{-\\infty}^\\infty |x(t)|^2 dt = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty |X(j\\omega)|^2 d\\omega$; Energy Spectral Density (ESD) $S_{xx}(\\omega) = |X(j\\omega)|^2$.",
      "Ideal Frequency-Selective Filters: Frequency response of ideal lowpass, highpass, bandpass, and bandstop filters; Non-causality of ideal brick-wall filters (sinc impulse response extending to $t = -\\infty$, violating Paley-Wiener criterion); Distortionless transmission requirements (constant magnitude gain $|H(\\omega)| = K$, linear phase $\\theta(\\omega) = -\\omega t_d$).",
      "Sampling Theorem and Aliasing: Nyquist-Shannon Sampling Theorem; Minimum sampling rate (Nyquist rate) $\\omega_s \\ge 2 \\omega_m$ ($f_s \\ge 2 f_m$); Nyquist interval $T_s = 1 / (2 f_m)$; Spectral replication $X_p(j\\omega) = \\frac{1}{T_s} \\sum_{k=-\\infty}^\\infty X(j(\\omega - k \\omega_s))$; Aliasing distortion when $f_s < 2 f_m$; Reconstruction via ideal lowpass interpolation filter with cutoff $\\omega_c = \\omega_s / 2$.",
      "University Examination Strategy: Compute exponential Fourier series coefficients for symmetrical square and sawtooth waveforms, evaluate CTFT using transform properties without direct integration, and calculate Nyquist sampling rates and intervals for composite multi-tone signals."
    ],
    "keyPoints": [
      "CTFS Exponential Analysis: $a_k = \\frac{1}{T_0} \\int_{T_0} x(t) e^{-j k \\omega_0 t} dt$.",
      "CTFT Forward Analysis: $X(j\\omega) = \\int_{-\\infty}^{\\infty} x(t) e^{-j\\omega t} dt$.",
      "Parseval's CTFT Energy Formula: $\\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi} \\int_{-\\infty}^{\\infty} |X(j\\omega)|^2 d\\omega$.",
      "CTFT Duality Property: If $x(t) \\leftrightarrow X(j\\omega)$, then $X(t) \\leftrightarrow 2\\pi x(-\\omega)$.",
      "Modulation (Frequency Shift): $x(t) e^{j\\omega_0 t} \\leftrightarrow X(j(\\omega - \\omega_0))$.",
      "Time Differentiation Property: $\\frac{d^n x(t)}{dt^n} \\leftrightarrow (j\\omega)^n X(j\\omega)$.",
      "Unit Step Fourier Transform: $\\mathcal{F}\\{u(t)\\} = \\frac{1}{j\\omega} + \\pi \\delta(\\omega)$.",
      "Distortionless Transmission Conditions: $|H(j\\omega)| = K$ (flat amplitude) and $\\angle H(j\\omega) = -\\omega t_d$ (linear phase).",
      "Nyquist Sampling Criterion: $f_s \\ge 2 f_{max}$ to ensure spectral copies do not overlap in frequency domain.",
      "Exam Gold Tip: For signals expressed as products (e.g. $m(t) \\cos(\\omega_c t)$), apply the modulation theorem: the spectrum splits into two halves shifted to $\\pm \\omega_c$."
    ]
  },
  "signals & systems:::u4": {
    "highlights": [
      "Unilateral and Bilateral Laplace Transform: Bilateral Laplace Transform $X(s) = \\int_{-\\infty}^\\infty x(t) e^{-s t} dt$ where complex frequency $s = \\sigma + j\\omega$; Unilateral Laplace Transform $X(s) = \\int_0^\\infty x(t) e^{-s t} dt$; Relationship to CTFT ($X(j\\omega) = X(s)|_{s = j\\omega}$ if ROC includes $j\\omega$-axis).",
      "Region of Convergence (ROC) Characteristics: Set of complex values of $s$ for which the Laplace integral converges; ROC consists of strips parallel to $j\\omega$-axis; ROC contains no poles; ROC of right-sided signal is $\\text{Re}(s) > \\sigma_{max}$; ROC of left-sided signal is $\\text{Re}(s) < \\sigma_{min}$; ROC of two-sided signal is a strip $\\sigma_1 < \\text{Re}(s) < \\sigma_2$.",
      "Properties of Laplace Transform: Linearity, Time shifting ($x(t - t_0) u(t - t_0) \\leftrightarrow e^{-s t_0} X(s)$), Frequency shifting ($e^{s_0 t} x(t) \\leftrightarrow X(s - s_0)$), Time scaling ($x(a t) \\leftrightarrow \\frac{1}{|a|} X(s/a)$), Time differentiation ($x'(t) \\leftrightarrow s X(s) - x(0^-)$ for unilateral transform), Time integration ($\\int_0^t x(\\tau) d\\tau \\leftrightarrow \\frac{1}{s} X(s)$).",
      "Convolution Property in s-Domain: Time-domain convolution transforms into s-domain algebraic multiplication: $x(t) * h(t) \\leftrightarrow X(s) H(s)$; System transfer function $H(s) = \\frac{Y(s)}{X(s)}$.",
      "Initial and Final Value Theorems: Initial Value Theorem: $\\lim_{t \\to 0^+} x(t) = \\lim_{s \\to \\infty} s X(s)$ (valid if $x(t)$ contains no impulse at $t=0$); Final Value Theorem: $\\lim_{t \\to \\infty} x(t) = \\lim_{s \\to 0} s X(s)$ (valid if and only if all poles of $s X(s)$ lie strictly in the open left-half s-plane).",
      "Inverse Laplace Transform: Computation via Partial Fraction Expansion (PFE); Simple poles, repeated poles of multiplicity $m$, complex conjugate pole pairs; Contour inversion integral (Bromwich integral).",
      "Poles and Zeros Analysis: Transfer function $H(s) = \\frac{N(s)}{D(s)}$; Pole-zero plot in complex s-plane; Geometric evaluation of frequency response magnitude and phase from pole-zero vectors.",
      "System Causality and Stability in s-Domain: LTI system is causal if and only if its ROC is a right-half plane to the right of the rightmost pole; LTI system is BIBO stable if and only if the ROC includes the $j\\omega$-axis (all poles lie strictly in open left-half plane $\\text{Re}(s) < 0$ for causal systems).",
      "Solution of LCCDE with Initial Conditions: Transforming $n$-th order linear differential equations with initial values $y(0^-), y'(0^-)$ using unilateral Laplace transform; Decomposition into Zero-Input Response (ZIR) and Zero-State Response (ZSR).",
      "University Examination Strategy: Determine ROC and sketch pole-zero constellation diagrams, compute inverse Laplace transforms using partial fraction decomposition, apply initial and final value theorems with validity checks, and solve second-order RLC circuit differential equations."
    ],
    "keyPoints": [
      "Bilateral Laplace Transform: $X(s) = \\int_{-\\infty}^{\\infty} x(t) e^{-s t} dt$.",
      "Unilateral Differentiation: $\\mathcal{L}\\left\\{\\frac{dx(t)}{dt}\\right\\} = s X(s) - x(0^-)$.",
      "Unilateral Second Derivative: $\\mathcal{L}\\left\\{\\frac{d^2 x(t)}{dt^2}\\right\\} = s^2 X(s) - s x(0^-) - x'(0^-)$.",
      "Initial Value Theorem: $\\lim_{t \\to 0^+} x(t) = \\lim_{s \\to \\infty} s X(s)$.",
      "Final Value Theorem: $\\lim_{t \\to \\infty} x(t) = \\lim_{s \\to 0} s X(s)$ (requires all poles of $s X(s)$ in left-half plane).",
      "Causal Stability Criterion: A causal LTI system is BIBO stable $\\iff$ all poles of $H(s)$ have negative real parts (LHP).",
      "ROC Right-Sided Rule: Right-sided signal $e^{-a t} u(t)$ has $\\text{ROC}: \\text{Re}(s) > -a$.",
      "ROC Left-Sided Rule: Left-sided signal $-e^{-a t} u(-t)$ has $\\text{ROC}: \\text{Re}(s) < -a$.",
      "Frequency Shift Relation: $\\mathcal{L}\\{e^{a t} x(t)\\} = X(s - a)$ with ROC shifted by $\\text{Re}(a)$.",
      "Exam Gold Tip: Always verify that all poles of $s X(s)$ reside strictly in the left half of the s-plane before invoking the Final Value Theorem."
    ]
  },
  "signals & systems:::u5": {
    "highlights": [
      "Discrete-Time Z-Transform: Bilateral Z-Transform $X(z) = \\sum_{n=-\\infty}^\\infty x[n] z^{-n}$ where complex variable $z = r e^{j\\Omega}$; Unilateral Z-Transform $X(z) = \\sum_{n=0}^\\infty x[n] z^{-n}$; Relationship to DTFT ($X(e^{j\\Omega}) = X(z)|_{z = e^{j\\Omega}}$ if ROC includes unit circle $|z|=1$).",
      "Region of Convergence (ROC) in Z-Domain: Annular ring in complex $z$-plane ($r_1 < |z| < r_2$); ROC contains no poles; ROC of finite-duration sequence is entire $z$-plane except possibly $z=0$ and/or $z=\\infty$; ROC of right-sided sequence is exterior of circle ($|z| > r_{max}$); ROC of left-sided sequence is interior of circle ($|z| < r_{min}$).",
      "Z-Transform Properties: Linearity, Time shifting ($x[n - k] \\leftrightarrow z^{-k} X(z)$ for bilateral; unilateral includes initial conditions), Scaling in z-domain ($a^n x[n] \\leftrightarrow X(z/a)$), Time reversal ($x[-n] \\leftrightarrow X(z^{-1})$), Differentiation in z-domain ($n x[n] \\leftrightarrow -z \\frac{dX(z)}{dz}$), Convolution in time ($x[n] * h[n] \\leftrightarrow X(z) H(z)$).",
      "Initial and Final Value Theorems for DT Signals: Initial Value Theorem: $x[0] = \\lim_{z \\to \\infty} X(z)$ for causal sequence; Final Value Theorem: $\\lim_{n \\to \\infty} x[n] = \\lim_{z \\to 1} (1 - z^{-1}) X(z)$ (valid if all poles of $(1 - z^{-1}) X(z)$ lie strictly inside the open unit disk $|z| < 1$).",
      "Inverse Z-Transform Methods: (1) Partial Fraction Expansion (expanding $X(z)/z$ in terms of simple poles); (2) Power Series / Long Division method (expanding in descending powers of $z$ for causal sequences); (3) Cauchy Contour Residue method: $x[n] = \\frac{1}{2\\pi j} \\oint_C X(z) z^{n-1} dz$.",
      "LTI System Analysis in Z-Domain: Transfer function $H(z) = \\frac{Y(z)}{X(z)} = \\frac{\\sum_{k=0}^M b_k z^{-k}}{\\sum_{k=0}^N a_k z^{-k}}$; Pole-zero constellations; Frequency response computation along the unit circle $z = e^{j\\Omega}$.",
      "Causality and Stability of Discrete LTI Systems: Discrete LTI system is causal if and only if ROC is the exterior of a circle including $z = \\infty$; Causal LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle ($|p_i| < 1$).",
      "Solution of Linear Difference Equations: Solving $N$-th order linear constant-coefficient difference equations with initial conditions $y[-1], y[-2]$ using unilateral Z-transform; Complete response partitioned into Zero-Input Response (ZIR) and Zero-State Response (ZSR).",
      "Interconnection of Discrete LTI Systems: Cascade connection ($H(z) = H_1(z) H_2(z)$), Parallel connection ($H(z) = H_1(z) + H_2(z)$), Feedback connection ($H(z) = \\frac{H_1(z)}{1 + H_1(z) H_2(z)}$); Direct Form I and Direct Form II realization structures.",
      "University Examination Strategy: Determine ROCs for right-sided, left-sided, and two-sided sequences from identical algebraic $X(z)$ expressions, compute inverse Z-transforms using $X(z)/z$ partial fractions, and solve difference equations representing digital filters."
    ],
    "keyPoints": [
      "Forward Z-Transform Definition: $X(z) = \\sum_{n=-\\infty}^{\\infty} x[n] z^{-n}$.",
      "Right-Sided Geometric Sequence: $\\mathcal{Z}\\{a^n u[n]\\} = \\frac{1}{1 - a z^{-1}} = \\frac{z}{z - a}$, with $\\text{ROC}: |z| > |a|$.",
      "Left-Sided Geometric Sequence: $\\mathcal{Z}\\{-a^n u[-n-1]\\} = \\frac{1}{1 - a z^{-1}}$, with $\\text{ROC}: |z| < |a|$.",
      "Time Shifting in Z-Domain: $\\mathcal{Z}\\{x[n - k]\\} = z^{-k} X(z)$.",
      "Z-Domain Differentiation Property: $\\mathcal{Z}\\{n x[n]\\} = -z \\frac{d X(z)}{dz}$.",
      "Initial Value Theorem (Discrete): $x[0] = \\lim_{z \\to \\infty} X(z)$ (for causal $x[n]$).",
      "Final Value Theorem (Discrete): $\\lim_{n \\to \\infty} x[n] = \\lim_{z \\to 1} (1 - z^{-1}) X(z)$ (poles inside $|z|<1$).",
      "Discrete Causal Stability Rule: A causal discrete-time system is BIBO stable $\\iff$ all poles of $H(z)$ lie strictly inside the unit circle ($|z| < 1$).",
      "Unit Circle Frequency Mapping: Setting $z = e^{j\\Omega}$ maps the unit circle to the DTFT discrete angular frequency $\\Omega \\in [-\\pi, \\pi]$.",
      "Exam Gold Tip: When calculating inverse Z-transform using partial fractions, always decompose $\\frac{X(z)}{z}$ rather than $X(z)$ directly."
    ]
  },
  "mathematics for ece:::u1": {
    "highlights": [
      "Vector Spaces and Matrix Decompositions in Communications: Linear vector spaces over complex field $\\mathbb{C}^n$, Inner product spaces, Cauchy-Schwarz inequality $|\\langle u, v \\rangle|^2 \\le \\langle u, u \\rangle \\langle v, v \\rangle$, and Gram-Schmidt orthonormalization generating unitary basis sets for orthogonal signal constellations.",
      "Eigenvalue Decomposition and Diagonalization: For square matrix $A \\in \\mathbb{C}^{n \\times n}$, characteristic equation $\\det(A - \\lambda I) = 0$; Diagonalization $A = V \\Lambda V^{-1}$ when $A$ possesses $n$ linearly independent eigenvectors; Application in finding powers of state-transition matrices $A^k = V \\Lambda^k V^{-1}$.",
      "Hermitian and Unitary Matrices: Hermitian matrices ($A = A^\\dagger = (A^*)^T$) exhibit strictly real eigenvalues and mutually orthogonal eigenvectors; Unitary matrices ($U^\\dagger U = I$) preserve inner products and signal energy, forming unitary beamforming matrices in wireless transmissions.",
      "Cayley-Hamilton Theorem & Matrix Inverses: Every square matrix satisfies its own characteristic polynomial equation $p(A) = 0$; Enables expressing higher-order powers $A^m$ and inverse $A^{-1} = -\\frac{1}{a_0} (A^{n-1} + a_{n-1} A^{n-2} + \\dots + a_1 I)$ as low-degree polynomials.",
      "Singular Value Decomposition (SVD): Factorization of arbitrary rectangular matrix $A \\in \\mathbb{C}^{m \\times n}$ as $A = U \\Sigma V^\\dagger$, where $U \\in \\mathbb{C}^{m \\times m}$ and $V \\in \\mathbb{C}^{n \\times n}$ are unitary matrices, and $\\Sigma$ is diagonal with non-negative real singular values $\\sigma_1 \\ge \\sigma_2 \\ge \\dots \\ge \\sigma_r > 0$.",
      "Application of SVD in MIMO Wireless Channels: Channel transfer matrix $H = U \\Sigma V^\\dagger$ decouples coupled multiple-input multiple-output antenna channels into $r$ parallel, non-interfering spatial sub-channels $\\tilde{y}_i = \\sigma_i \\tilde{x}_i + \\tilde{n}_i$, maximizing channel capacity via water-filling power allocation.",
      "Moore-Penrose Pseudoinverse & Zero-Forcing Receivers: Generalized pseudoinverse $A^+ = (A^\\dagger A)^{-1} A^\\dagger$ (for full column rank); Provides minimum norm least-squares solution to overdetermined linear systems $A x = b$; Direct application in Zero-Forcing (ZF) MIMO equalization filters $W_{ZF} = (H^\\dagger H)^{-1} H^\\dagger$.",
      "Quadratic Forms and Definiteness in Signal Processing: Scalar quadratic form $Q(x) = x^\\dagger A x$; Positive definite matrices ($x^\\dagger A x > 0$ for all $x \\ne 0$) govern covariance matrices $R_{xx} = E[x x^\\dagger]$; Sylvester's criterion: all leading principal minors must be strictly positive.",
      "Matrix Norms and Condition Numbers: Frobenius norm $\\|A\\|_F = \\sqrt{\\sum |a_{ij}|^2} = \\sqrt{\\text{Tr}(A^\\dagger A)}$; Spectral norm $\\|A\\|_2 = \\sigma_{\\max}$; Condition number $\\kappa(A) = \\sigma_{\\max} / \\sigma_{\\min}$; High condition numbers indicate ill-conditioned channel matrices prone to severe noise enhancement.",
      "University Examination Strategy: Solve characteristic polynomials to compute eigenvalues/eigenvectors, apply Cayley-Hamilton to find $A^{-1}$ and $A^4$, perform full Singular Value Decomposition on $2 \\times 2$ or $3 \\times 2$ matrices identifying singular values and singular vectors, and formulate MIMO spatial multiplexing channel decoupling equations."
    ],
    "keyPoints": [
      "Cauchy-Schwarz Inequality: $|\\langle u, v \\rangle|^2 \\le \\langle u, u \\rangle \\langle v, v \\rangle$.",
      "Matrix Diagonalization: $A = V \\Lambda V^{-1}$ (eigenvector matrix $V$).",
      "Hermitian Property: $A^\\dagger = (A^*)^T = A$ (real eigenvalues).",
      "Unitary Property: $U^\\dagger U = U U^\\dagger = I$.",
      "Singular Value Decomposition: $A = U \\Sigma V^\\dagger$.",
      "MIMO Channel Decoupling: $\\tilde{y}_i = \\sigma_i \\tilde{x}_i + \\tilde{n}_i$ ($r = \\text{rank}(H)$).",
      "Moore-Penrose Pseudoinverse: $A^+ = (A^\\dagger A)^{-1} A^\\dagger$.",
      "Zero-Forcing Filter: $W_{ZF} = (H^\\dagger H)^{-1} H^\\dagger$.",
      "Matrix Condition Number: $\\kappa(A) = \\frac{\\sigma_{\\max}}{\\sigma_{\\min}}$.",
      "Exam Gold Tip: For MIMO antenna channel $H$, the non-zero eigenvalues of $H H^\\dagger$ are precisely the squares of the singular values $\\lambda_i = \\sigma_i^2$, and total channel capacity is $C = \\sum_{i=1}^r \\log_2(1 + \\frac{P_i \\sigma_i^2}{N_0})$."
    ]
  },
  "mathematics for ece:::u2": {
    "highlights": [
      "Analytic Functions and Cauchy-Riemann Equations: Function $f(z) = u(x,y) + i v(x,y)$ is complex differentiable (analytic) in domain $D$ if and only if partial derivatives satisfy C-R conditions: $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$; Harmonic conjugate functions satisfy Laplace's equation $\\nabla^2 u = 0$.",
      "Milne-Thomson Method: Direct construction of analytic function $f(z)$ from known real part $u(x,y)$ or imaginary part $v(x,y)$ without calculating intermediate harmonic conjugates: $f'(z) = u_x(z, 0) - i u_y(z, 0)$, integrated directly with respect to $z$.",
      "Hilbert Transform in Communications: Quadrature phase shifter defined by linear convolution $\\hat{x}(t) = \\mathcal{H}\\{x(t)\\} = \\frac{1}{\\pi} \\text{p.v.} \\int_{-\\infty}^\\infty \\frac{x(\\tau)}{t - \\tau} d\\tau$; Frequency response $H(f) = -j \\text{ sgn}(f)$; Shifts positive frequency spectral components by $-90^\\circ$ and negative frequencies by $+90^\\circ$.",
      "Analytic Signal Representation: Pre-envelope $z(t) = x(t) + j \\hat{x}(t)$ possessing zero negative-frequency energy; Natural representation for single-sideband (SSB) modulated signals, instantaneous envelope $A(t) = \\sqrt{x^2(t) + \\hat{x}^2(t)}$, and instantaneous phase $\\phi(t) = \\arctan(\\hat{x}(t) / x(t))$.",
      "Conformal Mapping & Bilinear Transformations: Angle-preserving holomorphic mappings $w = f(z)$; Mobius / Bilinear transformation $w = \\frac{a z + b}{c z + d}$ ($ad - bc \\ne 0$) maps generalized circles/lines to circles/lines and preserves cross-ratios $\\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \\frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$; Basis of Smith Chart microwave impedance transformations.",
      "Cauchy's Integral Theorem & Formulas: For analytic $f(z)$ inside and on simple closed curve $C$: $\\oint_C f(z) dz = 0$; Cauchy's Integral Formula: $f(z_0) = \\frac{1}{2 \\pi i} \\oint_C \\frac{f(z)}{z - z_0} dz$; Higher derivatives formula: $f^{(n)}(z_0) = \\frac{n!}{2 \\pi i} \\oint_C \\frac{f(z)}{(z - z_0)^{n+1}} dz$.",
      "Laurent Series Expansions: Representation in annular region $r_1 < |z - z_0| < r_2$: $f(z) = \\sum_{n=0}^\\infty a_n (z - z_0)^n + \\sum_{n=1}^\\infty \\frac{b_n}{(z - z_0)^n}$; Principal part $\\sum \\frac{b_n}{(z - z_0)^n}$ determines singularity classification: removable ($b_n=0$), pole of order $m$ ($b_m \\ne 0, b_{k>m}=0$), or essential singularity (infinite terms).",
      "Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum_{k=1}^N \\text{Res}(f, z_k)$; Residue calculation at simple pole: $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$; Residue at multiple pole of order $m$: $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!} \\lim_{z \\to z_0} \\frac{d^{m-1}}{dz^{m-1}} [(z - z_0)^m f(z)]$.",
      "Bromwich Contour Integration for Inverse Transforms: Evaluation of inverse Laplace transforms $x(t) = \\frac{1}{2\\pi i} \\int_{\\gamma - i\\infty}^{\\gamma + i\\infty} X(s) e^{s t} ds$ and inverse z-transforms $x[n] = \\frac{1}{2\\pi i} \\oint_C X(z) z^{n-1} dz$ by closing contour and summing residues inside pole boundaries.",
      "University Examination Strategy: Verify analytic conditions using Cauchy-Riemann equations, determine harmonic conjugate functions $v(x,y)$, construct bilinear transformations mapping three given $z$-plane points to $w$-plane points, and evaluate contour integrals of rational functions using Cauchy's Residue Theorem."
    ],
    "keyPoints": [
      "Cauchy-Riemann Equations: $u_x = v_y$ and $u_y = -v_x$.",
      "Milne-Thomson Formula: $f'(z) = u_x(z, 0) - i u_y(z, 0)$.",
      "Hilbert Transform Frequency Response: $H(f) = -j \\text{ sgn}(f)$.",
      "Analytic Signal (Pre-envelope): $z(t) = x(t) + j \\hat{x}(t)$.",
      "Bilinear (Mobius) Transformation: $w = \\frac{a z + b}{c z + d}$ ($ad - bc \\ne 0$).",
      "Cross-Ratio Invariance: $\\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \\frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$.",
      "Cauchy's Integral Formula: $f^{(n)}(z_0) = \\frac{n!}{2 \\pi i} \\oint_C \\frac{f(z)}{(z - z_0)^{n+1}} dz$.",
      "Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}$.",
      "Residue at Simple Pole: $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
      "Exam Gold Tip: The Hilbert transform of $\\cos(\\omega_0 t)$ is $\\sin(\\omega_0 t)$, and its transfer function imparts a $-90^\\circ$ phase shift without altering the magnitude spectrum, preserving total signal power."
    ]
  },
  "mathematics for ece:::u3": {
    "highlights": [
      "Axiomatic Foundations & Conditional Probability: Probability space $(\\Omega, \\mathcal{F}, P)$; Axioms of Kolmogorov; Conditional probability $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$; Total Probability Theorem $P(A) = \\sum_{i=1}^n P(A|B_i) P(B_i)$ for mutually exclusive and exhaustive partition $\\{B_i\\}$.",
      "Bayes' Rule in Signal Detection: Posterior probability $P(H_i|y) = \\frac{P(y|H_i) P(H_i)}{\\sum_{k} P(y|H_k) P(H_k)}$; Forms theoretical foundation for Maximum A Posteriori (MAP) and Maximum Likelihood (ML) digital receiver decision rules.",
      "Bivariate Random Variables & Joint Distributions: Joint cumulative distribution function $F_{XY}(x,y) = P(X \\le x, Y \\le y)$; Joint probability density function $f_{XY}(x,y) = \\frac{\\partial^2 F_{XY}}{\\partial x \\partial y}$; Marginal distributions: $f_X(x) = \\int_{-\\infty}^\\infty f_{XY}(x,y) dy$; Conditional density: $f_{X|Y}(x|y) = \\frac{f_{XY}(x,y)}{f_Y(y)}$.",
      "Statistical Independence and Correlation: $X$ and $Y$ are statistically independent if and only if $f_{XY}(x,y) = f_X(x) f_Y(y)$; Covariance $\\text{Cov}(X,Y) = E[(X-\\mu_X)(Y-\\mu_Y)] = E[XY] - \\mu_X \\mu_Y$; Correlation coefficient $\\rho_{XY} = \\frac{\\text{Cov}(X,Y)}{\\sigma_X \\sigma_Y} \\in [-1, +1]$; Independence implies uncorrelatedness ($\\rho=0$), but converse holds only for joint Gaussian variables.",
      "Bivariate Gaussian (Normal) Distribution: Joint PDF defined by $f_{XY}(x,y) = \\frac{1}{2\\pi \\sigma_X \\sigma_Y \\sqrt{1-\\rho^2}} \\exp\\left( -\\frac{1}{2(1-\\rho^2)} \\left[ \\frac{(x-\\mu_X)^2}{\\sigma_X^2} - \\frac{2\\rho(x-\\mu_X)(y-\\mu_Y)}{\\sigma_X \\sigma_Y} + \\frac{(y-\\mu_Y)^2}{\\sigma_Y^2} \\right] \\right)$; Uncorrelated Gaussian variables are strictly independent.",
      "Transformations of Random Variables & Jacobian: For bivariate functions $U = g_1(X,Y)$ and $V = g_2(X,Y)$, joint density of transformed variables is $f_{UV}(u,v) = f_{XY}(x(u,v), y(u,v)) |J|^{-1}$, where Jacobian determinant is $J = \\det\\begin{bmatrix} \\frac{\\partial u}{\\partial x} & \\frac{\\partial u}{\\partial y} \\\\ \\frac{\\partial v}{\\partial x} & \\frac{\\partial v}{\\partial y} \\end{bmatrix}$.",
      "Generation of Rayleigh and Ricean Fading Distributions: Transformation from Cartesian I/Q Gaussian channel components ($X, Y \\sim \\mathcal{N}(0, \\sigma^2)$) to Polar coordinates ($R = \\sqrt{X^2+Y^2}, \\Theta = \\arctan(Y/X)$) yields Rayleigh envelope $f_R(r) = \\frac{r}{\\sigma^2} e^{-r^2 / 2\\sigma^2}$ and uniform phase $\\Theta \\sim U[0, 2\\pi)$ modeling wireless fading channels.",
      "Moment Generating and Characteristic Functions: Moment Generating Function $M_X(t) = E[e^{t X}]$; Characteristic function $\\Phi_X(\\omega) = E[e^{j \\omega X}] = \\int_{-\\infty}^\\infty f_X(x) e^{j \\omega x} dx$ (Fourier transform of PDF with sign reversal); Moments extracted via $E[X^n] = \\frac{1}{j^n} \\left. \\frac{d^n \\Phi_X(\\omega)}{d\\omega^n} \\right|_{\\omega=0}$.",
      "Central Limit Theorem (CLT) in Communications: Sum of $N$ independent, identically distributed random variables $S_N = \\sum_{i=1}^N X_i$ with mean $\\mu$ and variance $\\sigma^2$ converges in distribution to Gaussian $\\mathcal{N}(N\\mu, N\\sigma^2)$ as $N \\to \\infty$; Explains Gaussian nature of thermal noise accumulated from billions of random electron collisions.",
      "University Examination Strategy: Apply Bayes' rule to binary symmetric communication channel (BSC) error probabilities, evaluate joint marginal and conditional densities from 2D continuous functions, calculate covariance and correlation coefficient $\\rho$, apply Jacobian transformation to derive Rayleigh density, and use characteristic functions to sum independent random variables."
    ],
    "keyPoints": [
      "Bayes' Detection Formula: $P(H_i|y) = \\frac{P(y|H_i) P(H_i)}{\\sum P(y|H_k) P(H_k)}$.",
      "Joint Marginal Density: $f_X(x) = \\int_{-\\infty}^\\infty f_{XY}(x,y) dy$.",
      "Conditional Probability Density: $f_{X|Y}(x|y) = \\frac{f_{XY}(x,y)}{f_Y(y)}$.",
      "Covariance Formula: $\\text{Cov}(X,Y) = E[XY] - E[X] E[Y]$.",
      "Correlation Coefficient: $\\rho_{XY} = \\frac{\\text{Cov}(X,Y)}{\\sigma_X \\sigma_Y}$.",
      "Jacobian Transformation: $f_{UV}(u,v) = f_{XY}(x,y) |J|^{-1}$.",
      "Rayleigh Fading Distribution: $f_R(r) = \\frac{r}{\\sigma^2} \\exp\\left(-\\frac{r^2}{2\\sigma^2}\\right)$ ($r \\ge 0$).",
      "Characteristic Function: $\\Phi_X(\\omega) = E[e^{j \\omega X}]$.",
      "Central Limit Theorem: $\\frac{S_N - N\\mu}{\\sigma \\sqrt{N}} \\xrightarrow{d} \\mathcal{N}(0, 1)$.",
      "Exam Gold Tip: If two random variables are jointly Gaussian and their correlation coefficient $\\rho_{XY} = 0$, they are strictly statistically independent, a unique property that fails for non-Gaussian distributions."
    ]
  },
  "mathematics for ece:::u4": {
    "highlights": [
      "Definition and Classification of Random Processes: Random process $X(t, \\omega)$ is an indexed family of random variables parameterized by continuous or discrete time $t \\in T$; Ensemble realizations vs time-series sample paths; First-order and second-order cumulative distributions and probability densities.",
      "Stationarity Principles: Strict-Sense Stationary (SSS): statistical properties invariant to arbitrary time shift $t \\to t+\\tau$ for all orders; Wide-Sense Stationary (WSS): (1) Mean is constant independent of time $E[X(t)] = \\mu_X$; (2) Autocorrelation depends exclusively on time lag $\\tau$: $R_{XX}(t, t+\\tau) = R_{XX}(\\tau) = E[X(t) X(t+\\tau)]$.",
      "Properties of Autocorrelation Function $R_{XX}(\\tau)$: (1) Even symmetry $R_{XX}(-\\tau) = R_{XX}(\\tau)$; (2) Maximum value at origin $|R_{XX}(\tau)| \\le R_{XX}(0)$; (3) Origin equals total average power $R_{XX}(0) = E[X^2(t)]$; (4) As $\\tau \\to \\infty$, $R_{XX}(\\tau) \\to \\mu_X^2$ if no periodic components exist.",
      "Power Spectral Density (PSD) & Wiener-Khinchin Theorem: PSD $S_{XX}(f)$ characterizes frequency distribution of signal power; Wiener-Khinchin theorem: Autocorrelation function and Power Spectral Density form a Fourier transform pair: $S_{XX}(f) = \\int_{-\\infty}^\\infty R_{XX}(\\tau) e^{-j 2\\pi f \\tau} d\\tau$ and $R_{XX}(\\tau) = \\int_{-\\infty}^\\infty S_{XX}(f) e^{j 2\\pi f \\tau} df$.",
      "Properties of PSD: (1) Real and non-negative $S_{XX}(f) \\ge 0$; (2) Even symmetric for real processes $S_{XX}(-f) = S_{XX}(f)$; (3) Area under PSD equals total average power $P_{avg} = R_{XX}(0) = \\int_{-\\infty}^\\infty S_{XX}(f) df$; (4) Cross-PSD satisfies $S_{XY}(f) = S_{YX}^*(f)$.",
      "LTI System Response to Random Inputs: For Linear Time-Invariant system with impulse response $h(t)$ and transfer function $H(f)$: output process $Y(t) = X(t) * h(t)$ is WSS if $X(t)$ is WSS; Mean: $\\mu_Y = \\mu_X H(0)$; Cross-correlation: $R_{XY}(\\tau) = R_{XX}(\\tau) * h^*(-\\tau)$; Output PSD: $S_{YY}(f) = |H(f)|^2 S_{XX}(f)$; Output autocorrelation: $R_{YY}(\\tau) = R_{XX}(\\tau) * h(\\tau) * h^*(-\\tau)$.",
      "White Noise and Additive White Gaussian Noise (AWGN): Ideal white noise has flat power spectral density across all frequencies $S_{NN}(f) = \\frac{N_0}{2} \\text{ W/Hz}$; Autocorrelation is a Dirac delta function $R_{NN}(\\tau) = \\frac{N_0}{2} \\delta(\\tau)$; Strictly uncorrelated at non-zero lags; Thermal noise in resistors: $N_0 = k T_e$ ($k = 1.38 \\times 10^{-23} \\text{ J/K}$).",
      "Bandlimited White Noise: White noise passed through ideal lowpass filter of bandwidth $B$: $S_{YY}(f) = \\frac{N_0}{2}$ for $|f| \\le B$, and $0$ elsewhere; Resulting autocorrelation function is $R_{YY}(\\tau) = N_0 B \\text{sinc}(2 B \\tau)$; Exhibits zero correlation at discrete sampling intervals $\\tau = k / (2B)$.",
      "Ergodicity in Random Processes: Random process is ergodic if ensemble averages equal corresponding infinite-time averages for almost all realizations; Mean-ergodic: $\\lim_{T \\to \\infty} \\frac{1}{2T} \\int_{-T}^T X(t) dt = E[X(t)]$; Correlation-ergodic: enables estimating autocorrelation and spectrum from a single measured oscilloscope trace.",
      "University Examination Strategy: Test processes for wide-sense stationarity given $X(t) = A \\cos(\\omega_0 t + \\Theta)$ with uniform phase, verify autocorrelation properties, apply Wiener-Khinchin theorem to evaluate PSD from given $R_{XX}(\\tau) = e^{-\\alpha |\\tau|}$, compute output power and PSD through LTI filters with transfer function $H(f)$, and calculate equivalent noise bandwidth."
    ],
    "keyPoints": [
      "WSS Mean Condition: $E[X(t)] = \\mu_X = \\text{constant}$.",
      "WSS Autocorrelation: $R_{XX}(t, t+\\tau) = R_{XX}(\\tau) = E[X(t) X(t+\\tau)]$.",
      "Autocorrelation Symmetry: $R_{XX}(-\\tau) = R_{XX}(\\tau)$.",
      "Total Average Signal Power: $P_{avg} = R_{XX}(0) = E[X^2(t)]$.",
      "Wiener-Khinchin Theorem: $S_{XX}(f) = \\int_{-\\infty}^\\infty R_{XX}(\\tau) e^{-j 2\\pi f \\tau} d\\tau$.",
      "System Output PSD: $S_{YY}(f) = |H(f)|^2 S_{XX}(f)$.",
      "Output Mean Formula: $\\mu_Y = \\mu_X H(0) = \\mu_X \\int_{-\\infty}^\\infty h(t) dt$.",
      "AWGN Power Spectral Density: $S_{NN}(f) = \\frac{N_0}{2}$ ($-\\infty < f < \\infty$).",
      "AWGN Autocorrelation Function: $R_{NN}(\\tau) = \\frac{N_0}{2} \\delta(\\tau)$.",
      "Exam Gold Tip: For carrier modulated process $X(t) = A \\cos(\\omega_c t + \\Theta)$ where $\\Theta \\sim U[0, 2\\pi]$, the process is strictly WSS with $R_{XX}(\\tau) = \\frac{A^2}{2} \\cos(\\omega_c \\tau)$ and average power $P = R_{XX}(0) = A^2 / 2$."
    ]
  },
  "mathematics for ece:::u5": {
    "highlights": [
      "Numerical Solutions of Non-linear Semiconductor Equations: Finding root $V_D$ of transcendental diode circuit equation $I_s (e^{q V_D / k T} - 1) + \\frac{V_D - V_{DD}}{R} = 0$; Newton-Raphson iterative formulation $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ with quadratic order of convergence $\\epsilon_{n+1} \\propto \\epsilon_n^2$.",
      "Numerical Linear Algebra for Circuit Simulation: Formulation of Modified Nodal Analysis (MNA) equations $[G] [V] = [I]$; Direct solution via Gaussian elimination with partial pivoting (row swapping to minimize roundoff error) and LU decomposition (Crout's and Doolittle's algorithms).",
      "Iterative Methods for Large Sparse Network Equations: Gauss-Jacobi method $x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j \\ne i} a_{ij} x_j^{(k)} \\right)$; Gauss-Seidel method utilizing immediately updated components; Convergence guaranteed by strict diagonal dominance condition $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$.",
      "Successive Over-Relaxation (SOR): Accelerated iteration $x_i^{(k+1)} = (1-\\omega) x_i^{(k)} + \\frac{\\omega}{a_{ii}} \\left( b_i - \\sum_{j < i} a_{ij} x_j^{(k+1)} - \\sum_{j > i} a_{ij} x_j^{(k)} \\right)$; Optimal relaxation parameter $1 < \\omega < 2$ significantly speeds convergence in EM field finite difference grids.",
      "Interpolation in Signal Processing: Lagrange interpolating polynomial $P_n(x) = \\sum_{i=0}^n L_i(x) y_i$ where $L_i(x) = \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}$; Newton's divided difference interpolation for non-uniformly sampled sensor data; Error term $E(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} \\prod (x - x_i)$.",
      "Numerical Quadrature for Antenna Radiation Patterns: Numerical integration of complex radiation integrals; Trapezoidal rule $\\int_a^b f(x) dx \\approx \\frac{h}{2} [f_0 + 2\\sum f_i + f_n]$ with error $O(h^2)$; Simpson's 1/3rd Rule $\\int_a^b f(x) dx \\approx \\frac{h}{3} [f_0 + 4\\sum_{odd} f_i + 2\\sum_{even} f_i + f_n]$ with error $O(h^4)$.",
      "Gauss-Legendre Quadrature: Optimal numerical integration evaluating function at roots of Legendre polynomials $P_n(x)$; Achieves exact integration for polynomials of degree up to $2n-1$ using only $n$ evaluation points: $\\int_{-1}^1 f(x) dx = \\sum_{i=1}^n w_i f(x_i)$.",
      "Numerical Solutions of ODEs in Transient Circuit Analysis: Single-step Runge-Kutta 4th Order (RK4) method for initial value problems $\\frac{dy}{dt} = f(t,y)$: $y_{n+1} = y_n + \\frac{h}{6} (k_1 + 2 k_2 + 2 k_3 + k_4)$, where $k_1 = f(t_n, y_n)$, $k_2 = f(t_n + \\frac{h}{2}, y_n + \\frac{h}{2} k_1)$, $k_3 = f(t_n + \\frac{h}{2}, y_n + \\frac{h}{2} k_2)$, $k_4 = f(t_n + h, y_n + h k_3)$; Global truncation error $O(h^4)$.",
      "Finite Difference Method (FDM) in Electromagnetics: Discretization of 2D Laplace equation $\\nabla^2 V = \\frac{\\partial^2 V}{\\partial x^2} + \\frac{\\partial^2 V}{\\partial y^2} = 0$ on uniform grid: five-point finite difference stencil $V_{i,j} = \\frac{1}{4} [V_{i+1,j} + V_{i-1,j} + V_{i,j+1} + V_{i,j-1}]$; Solved iteratively to find electric potential in coaxial cables and microstrip lines.",
      "University Examination Strategy: Perform 3 iterations of Newton-Raphson method for non-linear equations, solve $3 \\times 3$ linear systems using Gauss-Seidel method, interpolate values using Lagrange formula, evaluate integrals using Simpson's $1/3$rd rule, compute transient ODE responses via RK4, and set up FDM grid equations for electrostatics."
    ],
    "keyPoints": [
      "Newton-Raphson Iteration: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$.",
      "Newton-Raphson Convergence: $\\epsilon_{n+1} \\approx \\frac{f''(\\alpha)}{2 f'(\\alpha)} \\epsilon_n^2$ (quadratic order 2).",
      "Gauss-Seidel Convergence Condition: Strict diagonal dominance $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$.",
      "Lagrange Basis Polynomial: $L_i(x) = \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}$.",
      "Trapezoidal Quadrature Formula: $\\int_a^b f(x) dx \\approx \\frac{h}{2} [f_0 + 2 \\sum_{i=1}^{n-1} f_i + f_n]$.",
      "Simpson's 1/3rd Rule Formula: $\\int_a^b f(x) dx \\approx \\frac{h}{3} [f_0 + 4\\sum f_{odd} + 2\\sum f_{even} + f_n]$.",
      "Simpson's 1/3rd Truncation Error: $E_S = -\\frac{(b-a) h^4}{180} f^{(4)}(\\xi) = O(h^4)$.",
      "RK4 Slope Formulation: $y_{n+1} = y_n + \\frac{h}{6} (k_1 + 2 k_2 + 2 k_3 + k_4)$.",
      "Five-Point FDM Laplace Stencil: $V_{i,j} = \\frac{1}{4} [V_{i+1,j} + V_{i-1,j} + V_{i,j+1} + V_{i,j-1}]$.",
      "Exam Gold Tip: Simpson's 1/3 rule requires an even number of subintervals (odd number of ordinates) and provides exact integration for cubic polynomials because the error term depends on the 4th derivative."
    ]
  },
  "circuit analysis & synthesis:::u1": {
    "highlights": [
      "Fundamental Network Concepts & Graph Theory: Graph, nodes ($n$), branches ($b$); Tree (contains all nodes, no loops, $n-1$ branches), Co-tree (links $l = b - n + 1$); Incidence matrix $A$, Fundamental cut-set matrix $Q_f$, Fundamental tie-set / loop matrix $B_f$; Orthogonality relations ($A B_f^T = 0, Q_f B_f^T = 0$); KCL and KVL formulation.",
      "Mesh and Nodal Analysis: Systematic node voltage method with matrix conductance formulation $[G][V] = [I]$; Supernode analysis for floating independent/dependent voltage sources; Systematic mesh current method $[R][I] = [V]$; Supermesh analysis for shared current sources.",
      "Superposition Theorem: In any linear bilateral active network containing multiple independent sources, the response in any branch is the algebraic sum of the responses caused by each independent source acting alone with all other independent sources deactivated (voltage sources shorted, current sources opened); Dependent sources must NEVER be deactivated.",
      "Thevenin's and Norton's Theorems: Any linear two-terminal active resistive network can be replaced by an equivalent circuit consisting of an open-circuit voltage source $V_{th}$ in series with equivalent resistance $R_{th}$, or a short-circuit current source $I_N$ in parallel with $R_N = R_{th}$; Evaluation of $R_{th}$ with dependent sources using test voltage/current source method ($V_{test} / I_{test}$).",
      "Maximum Power Transfer Theorem: Maximum power delivered to load resistor: $R_L = R_{th}$ for DC circuits ($P_{max} = V_{th}^2 / (4 R_{th})$, efficiency $\\eta = 50\\%$); For AC circuits with variable complex load: $Z_L = Z_{th}^* = R_{th} - j X_{th}$ (complex conjugate match, $P_{max} = \\frac{|V_{th}|^2}{4 R_{th}}$); Load with variable resistance only: $R_L = |Z_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}$.",
      "Reciprocity Theorem: In any linear bilateral passive network, the ratio of excitation to response is constant when positions of excitation and response are interchanged: $\\frac{I_2}{V_1} = \\frac{I_1}{V_2}$ (transfer admittance) or $\\frac{V_2}{I_1} = \\frac{V_1}{I_2}$ (transfer impedance); Invalid in circuits containing dependent sources.",
      "Millman's Theorem: Parallel combination of $n$ voltage sources with internal impedances ($V_1, Y_1; V_2, Y_2; \\dots$) reduces to single equivalent voltage source $V_{eq} = \\frac{\\sum V_k Y_k}{\\sum Y_k}$ in series with $Z_{eq} = 1 / \\sum Y_k$; Dual formulation for series current sources.",
      "Tellegen's Theorem: In any lumped network with arbitrary linear or non-linear, time-invariant or time-varying, passive or active elements, the algebraic sum of powers delivered to all branches is zero at every instant of time: $\\sum_{k=1}^b v_k(t) i_k(t) = 0$; Quasi-Tellegen theorem across two networks with identical topology.",
      "Substitution and Compensation Theorems: Substitution Theorem: Any branch in an active network carrying known current $I$ and voltage $V$ can be replaced by an independent source of value $V$ or $I$ without altering branch variables elsewhere; Compensation Theorem: If resistance of a branch changes by $\\Delta R$, change in current in any branch equals current produced by compensating voltage source $V_c = -I \\Delta R$.",
      "University Examination Strategy: Solve networks with multiple dependent sources using test-source method for $R_{th}$, calculate maximum power transferred to complex load impedances, apply Tellegen's theorem to verify conservation of energy, and formulate tie-set schedule matrices."
    ],
    "keyPoints": [
      "Network Tree Branch Count: Number of tree branches (twigs) is exactly $n - 1$, where $n$ is node count.",
      "Network Link Count: Number of chords (links) is $l = b - n + 1$, where $b$ is branch count.",
      "Thevenin Equivalent Resistance with Dependent Sources: $R_{th} = \\frac{V_{test}}{I_{test}}$ with all independent sources set to zero.",
      "Norton Current Formula: $I_N = I_{sc} = \\frac{V_{th}}{R_{th}}$.",
      "Maximum Power Transfer (Complex Conjugate): $Z_L = Z_{th}^* = R_{th} - j X_{th}$.",
      "Maximum Power Delivered: $P_{max} = \\frac{|V_{th}|^2}{4 R_{th}}$.",
      "Pure Resistive Load AC Match: $R_L = |Z_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}$.",
      "Tellegen's Theorem Invariant: $\\sum_{k=1}^b v_k i_k = 0$ (holds for ANY element types).",
      "Millman's Equivalent Voltage: $V_{eq} = \\frac{\\sum_{k=1}^m V_k G_k}{\\sum_{k=1}^m G_k}$.",
      "Exam Gold Tip: In Superposition theorem, never deactivate dependent sources; leave them fully intact while cycling through independent sources."
    ]
  },
  "circuit analysis & synthesis:::u2": {
    "highlights": [
      "Initial and Final Conditions in Circuit Elements: Continuity of state variables: Capacitor voltage cannot change instantaneously ($v_C(0^+) = v_C(0^-)$, equivalent to independent voltage source or short circuit at $t=0^+$ if uncharged); Inductor current cannot change instantaneously ($i_L(0^+) = i_L(0^-)$, equivalent to independent current source or open circuit at $t=0^+$ if uncharged); Steady-state DC behavior: capacitor acts as open circuit, inductor acts as short circuit.",
      "First-Order RC and RL Transients: Source-free natural response and step forced response; Time constant $\\tau$: for $RC$ circuits $\\tau = R_{eq} C$, for $RL$ circuits $\\tau = L / R_{eq}$; General transient response equation: $x(t) = x(\\infty) + [x(0^+) - x(\\infty)] e^{-t / \\tau}$; Rise time and settling time.",
      "Second-Order Series and Parallel RLC Circuits: Characteristic equation $s^2 + 2\\alpha s + \\omega_0^2 = 0$; Series RLC: attenuation $\\alpha = \\frac{R}{2L}$, undamped natural frequency $\\omega_0 = \\frac{1}{\\sqrt{LC}}$; Parallel RLC: $\\alpha = \\frac{1}{2RC}$, $\\omega_0 = \\frac{1}{\\sqrt{LC}}$; Damping ratio $\\zeta = \\frac{\\alpha}{\\omega_0}$.",
      "Transient Response Regimes in RLC Circuits: (1) Overdamped ($\\zeta > 1, \\alpha > \\omega_0$): two distinct negative real roots, sluggish exponential decay without oscillation; (2) Critically Damped ($\\zeta = 1, \\alpha = \\omega_0$): repeated real roots, fastest return to equilibrium without overshoot; (3) Underdamped ($\\zeta < 1, \\alpha < \\omega_0$): complex conjugate roots, decaying sinusoidal oscillation at damped frequency $\\omega_d = \\sqrt{\\omega_0^2 - \\alpha^2}$.",
      "Laplace Transform in Transient Circuit Analysis: Transformation of circuit elements into s-domain: Resistor ($R$), Inductor ($s L$ in series with initial condition voltage source $L i_L(0^-)$ or parallel current source $i_L(0^-)/s$), Capacitor ($1/(s C)$ in series with initial condition voltage source $v_C(0^-)/s$ or parallel current source $C v_C(0^-)$).",
      "Transient Solutions via s-Domain Impedances: Formulation of mesh and nodal algebraic equations directly in s-domain; Evaluation of complete response including initial conditions; Separation into zero-input response (ZIR) and zero-state response (ZSR).",
      "Impulse and Step Response of Second-Order Systems: Unit impulse response $h(t)$ as time derivative of step response; Transient specifications: Delay time $t_d$, Rise time $t_r = \\frac{\\pi - \\beta}{\\omega_d}$, Peak time $t_p = \\frac{\\pi}{\\omega_d}$, Maximum percentage overshoot $M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$, Settling time $t_s = \\frac{4}{\\alpha} = \\frac{4}{\\zeta \\omega_0}$ (2% tolerance band).",
      "State Variable Analysis of Electrical Networks: Selection of state variables (capacitor voltages and inductor currents); Formulation of standard state-space equations: $\\dot{x}(t) = A x(t) + B u(t)$, $y(t) = C x(t) + D u(t)$; State transition matrix $\\Phi(t) = e^{A t} = \\mathcal{L}^{-1}\\{(s I - A)^{-1}\\}$.",
      "Pulse and Periodic Waveform Excitation: Response of $RC$ and $RL$ circuits to rectangular pulses; Pulse integrator circuit condition ($R C \\gg T_p$) and differentiator circuit condition ($R C \\ll T_p$); Response to square, triangular, and periodic ramp inputs using Laplace transform.",
      "University Examination Strategy: Determine initial conditions $v_C(0^+), i_L(0^+), \\frac{dv_C}{dt}(0^+), \\frac{di_L}{dt}(0^+)$ across sudden switching operations, solve underdamped series RLC second-order differential equations, and evaluate state transition matrices $\\Phi(t)$."
    ],
    "keyPoints": [
      "Capacitor Instantaneous Invariant: $v_C(0^+) = v_C(0^-)$ (charge cannot jump without infinite current).",
      "Inductor Instantaneous Invariant: $i_L(0^+) = i_L(0^-)$ (flux linkage cannot jump without infinite voltage).",
      "Universal First-Order Formula: $x(t) = x(\\infty) + [x(0^+) - x(\\infty)] e^{-t/\\tau}$.",
      "Series RLC Characteristic Roots: $s_{1, 2} = -\\alpha \\pm \\sqrt{\\alpha^2 - \\omega_0^2}$, where $\\alpha = \\frac{R}{2L}, \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
      "Damped Natural Frequency: $\\omega_d = \\omega_0 \\sqrt{1 - \\zeta^2}$.",
      "Percentage Maximum Overshoot: $M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
      "Settling Time (2% Criterion): $t_s = \\frac{4}{\\zeta \\omega_0} = \\frac{4}{\\alpha}$.",
      "Inductor s-Domain Model: Impedance $s L$ with series opposing voltage source $L i_L(0^-)$.",
      "Capacitor s-Domain Model: Impedance $\\frac{1}{s C}$ with series aiding voltage source $\\frac{v_C(0^-)}{s}$.",
      "Exam Gold Tip: At $t = 0^+$, replace capacitors with dc voltage sources of value $v_C(0^-)$ and inductors with dc current sources of value $i_L(0^-)$ to solve immediate initial derivatives."
    ]
  },
  "circuit analysis & synthesis:::u3": {
    "highlights": [
      "Sinusoidal Steady-State Concepts & Phasors: Sinusoidal excitation $v(t) = V_m \\cos(\\omega t + \\phi)$; Phasor representation $\\mathbf{V} = V_{rms} \\angle \\phi$; Frequency domain circuit analysis; Impedance $\\mathbf{Z} = R + j X$ and Admittance $\\mathbf{Y} = G + j B$; Element phasor relationships: Resistor (in-phase), Inductor (current lags voltage by $90^\\circ$), Capacitor (current leads voltage by $90^\\circ$).",
      "AC Power Analysis: Instantaneous power $p(t) = v(t) i(t) = P [1 + \\cos(2\\omega t)] - Q \\sin(2\\omega t)$; Real / Active Power $P = V_{rms} I_{rms} \\cos\\theta$ in Watts ($W$); Reactive Power $Q = V_{rms} I_{rms} \\sin\\theta$ in Volt-Amperes Reactive ($VAR$); Apparent Power $S = V_{rms} I_{rms}$ in Volt-Amperes ($VA$); Complex Power $\\mathbf{S} = \\mathbf{V} \\mathbf{I}^* = P + j Q$.",
      "Power Factor & Power Factor Correction: Power Factor $PF = \\cos\\theta = P / S$ (lagging for inductive load, leading for capacitive load); Economic and operational consequences of low PF; Power factor improvement using parallel shunt capacitor banks: $Q_C = P [\\tan\\theta_1 - \\tan\\theta_2]$, $C = \\frac{P [\\tan\\theta_1 - \\tan\\theta_2]}{\\omega V_{rms}^2}$.",
      "Series Resonance: Condition of zero net reactance ($X_L = X_C$); Resonant frequency $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ ($f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$); Minimum impedance $\\mathbf{Z}(\\omega_0) = R$; Maximum current $I_0 = V / R$; Voltage magnification across $L$ and $C$: $V_L = V_C = Q V$; Quality factor $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.",
      "Series Resonance Selectivity & Bandwidth: Half-power frequencies $\\omega_1, \\omega_2 = \\omega_0 \\pm \\frac{R}{2L}$; Bandwidth $BW = \\Delta\\omega = \\omega_2 - \\omega_1 = \\frac{R}{L}$; Quality factor relation: $Q = \\frac{\\omega_0}{BW}$; Geometric symmetry: $\\omega_0 = \\sqrt{\\omega_1 \\omega_2}$.",
      "Parallel Resonance (Anti-Resonance): Practical tank circuit (inductor with winding resistance $R$ in parallel with ideal capacitor $C$); Resonant frequency $\\omega_r = \\sqrt{\\frac{1}{LC} - \\frac{R^2}{L^2}}$; Maximum dynamic impedance at resonance $Z_{dyn} = \\frac{L}{C R}$; Quality factor $Q_p = \\frac{\\omega_0 L}{R}$; Current magnification across reactive branches ($I_C = I_L \\approx Q I$).",
      "Coupled Circuits & Mutual Inductance: Self-inductance ($L_1, L_2$) and Mutual inductance ($M = k\\sqrt{L_1 L_2}$); Coupling coefficient $k$ ($0 \\le k \\le 1$); Dot convention rules for establishing mutual voltage polarity; Dot-rule: when currents enter dotted terminals of both coils, mutual voltage terms have positive sign aiding self-induced voltages.",
      "Analysis of Magnetically Coupled Coils: Series aiding ($L_{eq} = L_1 + L_2 + 2M$) and Series opposing ($L_{eq} = L_1 + L_2 - 2M$); Measurement of mutual inductance: $M = \\frac{L_{aiding} - L_{opposing}}{4}$; Parallel aiding and parallel opposing connections; Conductively coupled equivalent T-networks.",
      "Linear and Ideal Transformers: Reflected impedance from secondary to primary in linear transformer: $Z_{in} = Z_1 + \\frac{\\omega^2 M^2}{Z_2 + Z_L}$; Ideal transformer equations: $\\frac{V_2}{V_1} = \\frac{N_2}{N_1} = n$, $\\frac{I_1}{I_2} = \\frac{N_2}{N_1} = n$, input impedance $Z_{in} = \\frac{Z_L}{n^2}$.",
      "University Examination Strategy: Solve AC mesh circuits in phasor domain with coupled inductors using dot convention, design power factor correction capacitor values, and derive bandwidth and quality factor relations for series and practical parallel resonant circuits."
    ],
    "keyPoints": [
      "Complex Power Equation: $\\mathbf{S} = \\mathbf{V}_{rms} \\mathbf{I}_{rms}^* = P + j Q$.",
      "Power Factor Angle: $\\theta = \\phi_v - \\phi_i$; $PF = \\cos\\theta$.",
      "PF Correction Capacitance: $C = \\frac{P(\\tan\\theta_1 - \\tan\\theta_2)}{\\omega V_{rms}^2}$.",
      "Series Resonant Frequency: $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ rad/s.",
      "Series Quality Factor: $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.",
      "Series Resonant Bandwidth: $BW = \\frac{\\omega_0}{Q} = \\frac{R}{L}$ rad/s.",
      "Dynamic Impedance (Tank Circuit): $Z_{dyn} = \\frac{L}{C R}$ (purely resistive at resonance).",
      "Series Aiding vs Opposing Inductance: $L_{aid} = L_1 + L_2 + 2M$, $L_{opp} = L_1 + L_2 - 2M$.",
      "Mutual Inductance Determination: $M = \\frac{L_{aid} - L_{opp}}{4}$.",
      "Exam Gold Tip: In mutual inductance, if a current enters a dotted terminal of one coil, it induces an open-circuit voltage on the other coil that is positive at its dotted terminal."
    ]
  },
  "circuit analysis & synthesis:::u4": {
    "highlights": [
      "Two-Port Network Fundamentals: Port convention (Port 1: $V_1, I_1$ entering; Port 2: $V_2, I_2$ entering); Linear passive bilateral networks without internal independent sources; Four terminal vs two-port restrictions ($I_1 = I_1', I_2 = I_2'$).",
      "Impedance ($Z$) Parameters: Open-circuit parameters: $V_1 = Z_{11} I_1 + Z_{12} I_2$, $V_2 = Z_{21} I_1 + Z_{22} I_2$; Evaluation under open-circuit conditions ($I_2 = 0$ or $I_1 = 0$); Reciprocity condition: $Z_{12} = Z_{21}$; Symmetry condition: $Z_{11} = Z_{22}$; T-equivalent circuit representation.",
      "Admittance ($Y$) Parameters: Short-circuit parameters: $I_1 = Y_{11} V_1 + Y_{12} V_2$, $I_2 = Y_{21} V_1 + Y_{22} V_2$; Evaluation under short-circuit conditions ($V_2 = 0$ or $V_1 = 0$); Reciprocity condition: $Y_{12} = Y_{21}$; Symmetry condition: $Y_{11} = Y_{22}$; $\\pi$-equivalent circuit representation; Relationship: $[Y] = [Z]^{-1}$.",
      "Transmission ($ABCD$) Parameters: Cascade / Chain parameters relating input variables to inverted output variables: $V_1 = A V_2 - B I_2$, $I_1 = C V_2 - D I_2$; Evaluation: $A = \\left.\\frac{V_1}{V_2}\\right|_{I_2 = 0}$, $B = \\left.\\frac{-V_1}{I_2}\\right|_{V_2 = 0}$, $C = \\left.\\frac{I_1}{V_2}\\right|_{I_2 = 0}$, $D = \\left.\\frac{-I_1}{I_2}\\right|_{V_2 = 0}$; Reciprocity condition: $A D - B C = 1$; Symmetry condition: $A = D$.",
      "Hybrid ($h$) Parameters: Mixed terminal variables commonly used for transistors: $V_1 = h_{11} I_1 + h_{12} V_2$, $I_2 = h_{21} I_1 + h_{22} V_2$; Reciprocity condition: $h_{12} = -h_{21}$; Symmetry condition: $\\Delta h = h_{11} h_{22} - h_{12} h_{21} = 1$; Inverse hybrid ($g$) parameters.",
      "Inter-Parameter Conversions: Mathematical transformation matrix between $[Z], [Y], [ABCD]$, and $[h]$ parameter sets (e.g. $Z_{11} = A/C, Z_{12} = (AD - BC)/C, Z_{21} = 1/C, Z_{22} = D/C$).",
      "Interconnection of Two-Port Networks: (1) Series-Series connection: overall impedance matrix adds: $[Z] = [Z_A] + [Z_B]$; (2) Parallel-Parallel connection: overall admittance matrix adds: $[Y] = [Y_A] + [Y_B]$; (3) Cascade connection: overall transmission matrix multiplies: $[T] = [T_A] [T_B]$; Brune's test for validity of interconnections.",
      "Terminated Two-Port Networks: Input impedance with load $Z_L$: $Z_{in} = Z_{11} - \\frac{Z_{12} Z_{21}}{Z_{22} + Z_L} = \\frac{A Z_L + B}{C Z_L + D}$; Output impedance with source impedance $Z_s$: $Z_{out} = Z_{22} - \\frac{Z_{12} Z_{21}}{Z_{11} + Z_s} = \\frac{D Z_s + B}{C Z_s + A}$; Voltage gain $A_v = V_2 / V_1$; Current gain $A_i = -I_2 / I_1$.",
      "Image Parameters & Characteristic Impedance: Image impedances $Z_{i1}, Z_{i2}$ such that port is matched to input/output terminations; For symmetrical networks ($A=D$), characteristic impedance $Z_0 = \\sqrt{B / C} = \\sqrt{Z_{oc} Z_{sc}}$; Image propagation constant $\\gamma = \\alpha + j\\beta = \\cosh^{-1}\\sqrt{A D}$.",
      "University Examination Strategy: Determine $Z, Y, ABCD$, and $h$ parameters for resistive bridge and ladder networks, verify reciprocity ($Z_{12}=Z_{21}, AD-BC=1$), compute overall parameters for cascaded networks via matrix multiplication, and calculate input impedance of terminated networks."
    ],
    "keyPoints": [
      "Z-Parameter Equations: $V_1 = Z_{11} I_1 + Z_{12} I_2$ and $V_2 = Z_{21} I_1 + Z_{22} I_2$.",
      "Y-Parameter Equations: $I_1 = Y_{11} V_1 + Y_{12} V_2$ and $I_2 = Y_{21} V_1 + Y_{22} V_2$.",
      "ABCD Transmission Equations: $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
      "ABCD Reciprocity Condition: $A D - B C = 1$.",
      "ABCD Symmetry Condition: $A = D$.",
      "h-Parameter Reciprocity: $h_{12} = -h_{21}$.",
      "Cascade Connection Rule: $[T]_{total} = [T_A] \\times [T_B]$ (matrix multiplication).",
      "Terminated Input Impedance: $Z_{in} = \\frac{A Z_L + B}{C Z_L + D}$.",
      "Symmetrical Characteristic Impedance: $Z_0 = \\sqrt{Z_{oc} Z_{sc}} = \\sqrt{\\frac{B}{C}}$.",
      "Exam Gold Tip: In ABCD parameters, notice the negative sign in front of $I_2$, because $I_2$ is defined as leaving Port 2 into the load."
    ]
  },
  "circuit analysis & synthesis:::u5": {
    "highlights": [
      "Positive Real (PR) Functions: Definition: A complex function $F(s)$ is Positive Real if: (1) $F(s)$ is real when $s$ is real ($F(\\sigma) \\in \\mathbb{R}$); (2) $\\text{Re}\\{F(s)\\} \\ge 0$ whenever $\\text{Re}\\{s\\} \\ge 0$; Necessary and sufficient testing criteria: (a) $F(s)$ has no poles or zeros in right-half $s$-plane; (b) Poles on $j\\omega$-axis are simple with real and positive residues; (c) $\\text{Re}\\{F(j\\omega)\\} \\ge 0$ for all $\\omega \\in [0, \\infty)$.",
      "Hurwitz Polynomials: Polynomial $P(s)$ is Hurwitz if all its roots have negative real parts ($\\{s \\mid P(s)=0\\} \\subset \\text{LHP}$); Continued fraction expansion of $M(s)/N(s)$ (even and odd parts) must yield all positive quotient coefficients; Removal of common factors for strictly Hurwitz testing.",
      "Properties of LC Immittance Functions: Driving-point functions of lossless $LC$ networks; $Z(s)$ or $Y(s)$ is the ratio of odd-to-even or even-to-odd polynomials; All poles and zeros are simple, lie strictly on $j\\omega$-axis, and alternate (interlace property); $\\frac{dZ(j\\omega)}{d\\omega} > 0$ (Foster's Reactance Theorem: slope of reactance curve is strictly positive everywhere).",
      "LC Synthesis — Foster Forms: (1) Foster I Form: Partial fraction expansion of $Z_{LC}(s)$: $Z(s) = \\frac{k_0}{s} + \\sum \\frac{2 k_i s}{s^2 + \\omega_i^2} + k_\\infty s$, realized as series connection of capacitor $C_0 = 1/k_0$, inductor $L_\\infty = k_\\infty$, and parallel $L_i-C_i$ antiresonant tanks; (2) Foster II Form: Partial fraction expansion of $Y_{LC}(s)$, realized as parallel connection of inductor $L_0$, capacitor $C_\\infty$, and series $L_i-C_i$ resonant branches.",
      "LC Synthesis — Cauer Forms: Continued fraction expansion of $Z_{LC}(s)$; (1) Cauer I Form: Repeated removal of poles at $s = \\infty$ by dividing polynomials in descending powers of $s$; Ladder network of alternating series inductors and shunt capacitors; (2) Cauer II Form: Repeated removal of poles at $s = 0$ by dividing polynomials in ascending powers of $s$; Ladder network of series capacitors and shunt inductors.",
      "Properties of RC Impedance and RL Admittance Functions: Poles and zeros lie strictly on negative real axis, are simple, and alternate; For $Z_{RC}(s)$: singularity nearest origin is a pole, singularity nearest $-\\infty$ is a zero, $Z(0) > Z(\\infty)$; Residues of poles of $Z_{RC}(s)$ are real and positive.",
      "RC and RL Synthesis — Foster Forms: Foster I RC: Partial fraction expansion of $Z_{RC}(s) = \\frac{k_0}{s} + k_\\infty + \\sum \\frac{k_i}{s + \\sigma_i}$ (series combination of capacitor $C_0$, resistor $R_\\infty$, and parallel $R_i-C_i$ blocks); Foster II RC: Partial fraction expansion of $\\frac{Y_{RC}(s)}{s}$, realized as parallel combination of conductance $G_0$, capacitor $C_\\infty$, and series $R_i-C_i$ branches.",
      "RC and RL Synthesis — Cauer Forms: Cauer I RC: Continued fraction expansion in descending powers of $s$; Ladder network of alternating series resistors and shunt capacitors; Cauer II RC: Continued fraction expansion in ascending powers of $s$; Ladder network of alternating series capacitors and shunt resistors.",
      "Two-Port Network Synthesis Basics: Transfer function synthesis; Zeroes of transmission (ZOT); Synthesis of constant-resistance lattices and symmetrical bridged-T networks; Darlington's synthesis method (realizing arbitrary PR function as resistively terminated lossless LC two-port network).",
      "University Examination Strategy: Test whether rational functions are Positive Real, synthesize driving point immittances into Foster I, Foster II, Cauer I, and Cauer II canonical forms with exact component value labeling, and expand Hurwitz polynomials using continued fractions."
    ],
    "keyPoints": [
      "Positive Real Core Criterion: $\\text{Re}\\{F(s)\\} \\ge 0$ for all $\\text{Re}\\{s\\} \\ge 0$.",
      "Foster Reactance Theorem: $\\frac{dX(\\omega)}{d\\omega} > 0$ (reactance strictly increases with frequency).",
      "LC Singularity Alternation: Poles and zeros strictly alternate along the $j\\omega$-axis.",
      "Foster I LC Network: Series connection of $C_0$, $L_\\infty$, and parallel $L_i C_i$ tanks.",
      "Foster II LC Network: Parallel connection of $L_0$, $C_\\infty$, and series $L_i C_i$ branches.",
      "Cauer I Ladder: Continued fraction expansion around $s = \\infty$ (descending powers of $s$).",
      "Cauer II Ladder: Continued fraction expansion around $s = 0$ (ascending powers of $s$).",
      "RC Impedance Singularity Order: Origin $\\to$ Pole $\\to$ Zero $\\to$ Pole $\\to$ Zero $\\dots$ on negative real axis.",
      "RL Impedance Singularity Order: Origin $\\to$ Zero $\\to$ Pole $\\to$ Zero $\\to$ Pole $\\dots$ on negative real axis.",
      "Exam Gold Tip: For Cauer I synthesis, write polynomials in descending powers of $s$; for Cauer II, write polynomials in ascending powers of $s$."
    ]
  },
  "electrical machines — i:::u1": {
    "highlights": [
      "Operating Principle and EMF Derivation: Faraday's law of electromagnetic induction; Fleming's right-hand rule; Derivation of generated EMF: $E_g = \\frac{\\Phi Z N P}{60 A}$ (where $\\Phi$ is flux per pole, $Z$ total conductors, $N$ speed in rpm, $P$ poles, $A$ parallel paths: $A=2$ for wave, $A=P$ for lap winding).",
      "Armature Winding Architectures: Simplex Lap winding ($A = P$, high current, low voltage applications; equalizer rings for circulating current suppression) vs Simplex Wave winding ($A = 2$, high voltage, low current applications; dummy coils for mechanical dynamic balance).",
      "Armature Reaction: Distortion and weakening of main magnetic flux due to MMF produced by armature conductors; Cross-magnetizing effect (shifts Magnetic Neutral Axis MNA in direction of rotation) and Demagnetizing effect; Demagnetizing AT per pole: $AT_d = \\frac{Z I_a}{2 P} \\left(\\frac{2\\theta_m}{180^\\circ}\\right)$; Cross-magnetizing AT per pole: $AT_c = \\frac{Z I_a}{2 P} \\left(1 - \\frac{2\\theta_m}{180^\\circ}\\right)$.",
      "Commutation Process & Sparking Mitigation: Reversal of current in coil undergoing commutation during time $T_c$; Reactance voltage $V_r = L \\frac{di}{dt}$; Delayed / Under-commutation causing sparking at trailing brush edge; Mitigation techniques: (1) Resistance commutation (high-resistance carbon brushes); (2) Voltage commutation using Interpoles / Commutating poles in series with armature.",
      "Compensating Windings: Conductors embedded in main pole shoes carrying armature current in opposing direction; Neutralizes armature cross-magnetizing MMF directly under pole faces; Prevents flashover between adjacent commutator segments under severe load surges; Turns per pole $Z_{cw} = \\frac{Z}{2 P} \\left(\\frac{\\text{Pole arc}}{\\text{Pole pitch}}\\right)$.",
      "Types of DC Generators: Separately excited generators; Self-excited generators (Shunt, Series, Cumulative Compound, Differential Compound); Voltage build-up criteria in self-excited shunt generator: residual magnetism, critical field resistance ($R_c$), and critical speed ($N_c$).",
      "DC Generator Characteristics: Open-Circuit Characteristic (OCC / Magnetization curve: $E_0$ vs $I_f$ at constant speed); Internal characteristic ($E$ vs $I_a$); External characteristic ($V$ vs $I_L$); Voltage regulation: $VR = \\frac{V_{NL} - V_{FL}}{V_{FL}} \\times 100\\%$.",
      "Compound Generator Behavior: Level-compounded (flat terminal voltage from no-load to full-load), Over-compounded (terminal voltage rises with load to compensate line drop), and Under-compounded; Differential compound generator (drooping terminal voltage, used in arc welding).",
      "Parallel Operation of DC Generators: Conditions for parallel operation of shunt generators; Stable load sharing governed by drooping external characteristics; Parallel operation of compound generators: necessity of Equalizer Bar connecting series field windings to prevent hunting and motorization.",
      "University Examination Strategy: Derive the generated EMF equation with parallel paths distinction, calculate demagnetizing and cross-magnetizing ampere-turns per pole, analyze voltage build-up failure modes in shunt generators, and solve load-sharing problems for parallel generators."
    ],
    "keyPoints": [
      "DC Generator EMF Formula: $E_g = \\frac{\\Phi Z N P}{60 A}$ ($A=P$ lap, $A=2$ wave).",
      "Demagnetizing AT per Pole: $AT_d = \\frac{Z I_a}{2 P} \\left(\\frac{2\\theta_m}{180^\\circ}\\right)$.",
      "Cross-Magnetizing AT per Pole: $AT_c = \\frac{Z I_a}{2 P} \\left(1 - \\frac{2\\theta_m}{180^\\circ}\\right)$.",
      "Brush Shift Direction: Shift brushes forward in direction of rotation in generators to track shifted MNA.",
      "Reactance Voltage Formula: $V_r = L \\frac{2 I_c}{T_c}$ (for linear commutation).",
      "Compensating Windings Formula: $AT_{cw} = AT_a \\times \\left(\\frac{\\text{Pole Arc}}{\\text{Pole Pitch}}\\right)$.",
      "Voltage Build-up Condition: Shunt field resistance must be strictly LESS than critical field resistance ($R_f < R_c$).",
      "Equalizer Ring Purpose: Equalizes unequal induced EMFs in parallel paths of lap windings to prevent circulating currents.",
      "Equalizer Bar in Compound Generators: Low-resistance bus connecting series field inputs to enforce proportional load division.",
      "Exam Gold Tip: If a shunt generator fails to build up voltage, check for absence of residual magnetism, reversed field connections, or field resistance exceeding $R_c$."
    ]
  },
  "electrical machines — i:::u2": {
    "highlights": [
      "Motor Operating Principle & Back EMF: Lorentz force equation ($\\mathbf{F} = I (\\mathbf{L} \times \\mathbf{B})$); Fleming's left-hand rule; Back EMF / Counter EMF $E_b = \frac{\\Phi Z N P}{60 A}$; Voltage balance equation: $V = E_b + I_a R_a$; Back EMF acts as self-regulating governor controlling armature current $I_a = \frac{V - E_b}{R_a}$.",
      "Electromagnetic Torque Derivation: Power balance: $V I_a = E_b I_a + I_a^2 R_a$; Internal mechanical power developed $P_{mech} = E_b I_a = T_e \\omega_m$; Electromagnetic torque equation: $T_e = \frac{1}{2\\pi} \\left(\frac{P}{A}\right) \\Phi Z I_a = 0.159 \\Phi Z I_a \\left(\frac{P}{A}\right)$ N-m; Shaft torque $T_{sh} = \frac{P_{out}}{\\omega_m} = T_e - T_{lost}$.",
      "DC Motor Characteristics: (1) Torque vs Armature Current ($T_a$ vs $I_a$); (2) Speed vs Armature Current ($N$ vs $I_a$); (3) Speed vs Torque ($N$ vs $T_a$); Shunt motor: essentially constant speed ($\\Delta N \u0007pprox 5-8\\%$ drop from no load to full load); Series motor: high starting torque ($T_a \\propto I_a^2$), dangerous dangerously high speed at no load ($N \\propto 1/\\Phi \to \\infty$); Cumulative compound motor.",
      "Starting of DC Motors: High inrush starting current ($I_{start} = V / R_a$ since $E_b = 0$ at standstill); Necessity of external starting resistance; Three-Point Starter (schematic, No-Volt Coil NVC connected in series with shunt field, Over-Load Release OLR); Four-Point Starter (NVC connected directly across supply through protective resistor, overcoming field weakening tripping).",
      "Speed Control Methods of DC Motors: Fundamental speed equation: $N = \frac{V - I_a R_a}{k \\Phi}$; (1) Armature Resistance Control (rheostatic control in armature circuit, below rated speed, low energy efficiency); (2) Field Flux Control (field rheostat weakening flux $\\Phi$, above rated speed, constant power drive); (3) Armature Voltage Control (Ward-Leonard System: wide range, smooth bidirectional control from zero to full speed in both directions, high capital cost).",
      "Solid-State DC Motor Drives: Single-phase and three-phase thyristor phase-controlled converters for variable armature voltage; DC-DC Chopper drives (buck converters) for four-quadrant regenerative motoring and braking.",
      "Electric Braking of DC Motors: (1) Regenerative Braking ($E_b > V$, motor operates as generator feeding power back into AC/DC mains, energy conservation); (2) Dynamic / Rheostatic Braking (armature disconnected from mains and connected across external braking resistor $R_b$, kinetic energy dissipated as heat); (3) Plugging / Reverse Current Braking (armature terminal supply reversed, $I_a = \frac{V + E_b}{R_a + R_{ext}}$, rapid stop, high electrical stress).",
      "Losses and Efficiency in DC Machines: Copper losses ($I_a^2 R_a, I_f^2 R_f, I_{se}^2 R_{se}$, brush contact loss); Iron / Core losses (Hysteresis loss $P_h = \\eta B_{max}^{1.6} f V$ and Eddy current loss $P_e = K_e B_{max}^2 f^2 t^2 V$ in rotating armature core); Mechanical losses (friction and windage); Stray load losses ($1\\%$ of output); Condition for maximum efficiency: Constant losses = Variable losses ($W_c = I_a^2 R_a$).",
      "Testing of DC Machines — Direct & Indirect Methods: Brake test (direct loading, limited to small fractional HP motors); Swinburne's Test (indirect method, no-load test on shunt motor, calculates constant losses, predetermines efficiency at any load as generator or motor, cannot detect temperature rise under load).",
      "Regenerative Testing — Hopkinson's Test: Back-to-back regenerative test on two identical mechanically coupled and electrically interconnected shunt machines; One operates as motor driving second as generator feeding back power; Mains supply provides only lost power ($P_{mains} = \text{Total losses}$); Full-load temperature rise determination without enormous power dissipation; Field's test for series motors."
    ],
    "keyPoints": [
      "DC Motor Torque Expression: $T_e = \frac{P \\Phi Z I_a}{2\\pi A}$ N-m.",
      "Motor Speed Formulation: $N = \frac{V - I_a R_a}{k \\Phi}$ rpm.",
      "Series Motor Starting Danger: At no load, $I_a \\to 0 \\implies \\Phi \\to 0$, causing speed $N \\to \\infty$ (runaway dangerous overspeed).",
      "Max Efficiency Condition: $I_a^2 R_a = W_{constant}$ (variable copper loss equals constant rotational and iron loss).",
      "Armature Resistance Control Profile: Constant torque drive, operating exclusively below base speed with poor efficiency.",
      "Field Weakening Profile: Constant power drive, operating exclusively above base speed.",
      "Plugging Armature Voltage: At moment of plugging, total effective driving voltage is $V + E_b \\approx 2 V$.",
      "Swinburne's Constant Losses: $W_c = V I_0 - I_{a0}^2 R_a$, where $I_0$ is no-load supply current.",
      "Hopkinson's Test Power Drawn: Power from mains equals strictly the total combined electrical and mechanical losses of both machines.",
      "Exam Gold Tip: Never start a DC series motor on no-load or with belt drives that could break, because runaway speed can mechanically destroy the armature."
    ]
  },
  "electrical machines — i:::u3": {
    "highlights": [
      "Working Principle & Faraday's Law: Static electromagnetic device transferring AC electrical energy between circuits via mutual flux; Core type vs Shell type constructions; High-permeability Cold Rolled Grain Oriented (CRGO) silicon steel laminations ($0.27-0.35\\text{ mm}$ thickness) minimizing eddy currents.",
      "EMF Equation of a Transformer: Sinusoidal core flux $\\Phi(t) = \\Phi_m \\sin(\\omega t)$; Primary induced EMF $e_1 = -N_1 \\frac{d\\Phi}{dt} = -N_1 \\omega \\Phi_m \\cos(\\omega t)$; RMS induced EMF: $E_1 = 4.44 f N_1 \\Phi_m$ and $E_2 = 4.44 f N_2 \\Phi_m$; Transformation ratio $K = \\frac{E_2}{E_1} = \\frac{N_2}{N_1} = \\frac{I_1}{I_2}$.",
      "Ideal vs Practical Transformer: Ideal transformer (zero winding resistance, infinite core permeability $\\mu_r \\to \\infty$, zero leakage flux, zero iron loss); Practical transformer considerations (finite winding resistances $R_1, R_2$, leakage fluxes creating leakage reactances $X_1, X_2$, core hysteresis and eddy current losses).",
      "Transformer on No-Load & Magnetizing Inrush: No-load primary current $I_0 = \\sqrt{I_c^2 + I_m^2}$ ($3-5\\%$ of rated $I_1$); Core-loss component $I_c = I_0 \\cos\\phi_0$ (in phase with $V_1$), Magnetizing component $I_m = I_0 \\sin\\phi_0$ (in quadrature with $V_1$); Non-linear $B-H$ curve producing peaked magnetizing current with pronounced 3rd harmonic; Magnetizing inrush current phenomenon during sudden energization at voltage zero-crossing.",
      "Transformer on Load & Phasor Diagrams: Armature mmf balance: $N_1 I_1' = N_2 I_2$ where $I_1'$ is load component of primary current; Total primary current $\\mathbf{I}_1 = \\mathbf{I}_0 + \\mathbf{I}_1'$; Complete phasor diagrams for Unity, Lagging (inductive), and Leading (capacitive) power factor loads.",
      "Equivalent Circuit Modeling: Exact equivalent circuit containing primary parameters ($R_1, X_1$), core shunt parameters ($R_c, X_m$), and secondary parameters ($R_2, X_2$); Referring secondary parameters to primary: $R_2' = R_2 / K^2, X_2' = X_2 / K^2, V_2' = V_2 / K, I_2' = K I_2$; Approximate equivalent circuit shifting shunt branch to input terminals.",
      "Voltage Regulation of Transformer: Percentage voltage change from no-load to full-load: $VR = \\frac{E_2 - V_2}{E_2} \\times 100\\%$; Approximate regulation formula referred to secondary: $VR \\approx \\frac{I_2 (R_{eq2} \\cos\\phi_2 \\pm X_{eq2} \\sin\\phi_2)}{E_2} \\times 100\\%$ ($+$ for lagging, $-$ for leading); Zero voltage regulation condition: $\\tan\\phi_2 = -R_{eq2} / X_{eq2}$ (leading PF); Maximum voltage regulation condition: $\\tan\\phi_2 = X_{eq2} / R_{eq2}$ (lagging PF).",
      "Efficiency and Maximum Efficiency Condition: Efficiency $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_i + I_2^2 R_{eq2}}$; Core iron loss $P_i$ (constant) vs copper loss $P_{cu}$ (variable with load squared); Condition for maximum efficiency: $P_i = I_2^2 R_{eq2} = P_{cu}$; Fraction of full load for maximum efficiency: $x = \\sqrt{\\frac{P_i}{P_{cu(FL)}}}$.",
      "All-Day (Energy) Efficiency: Commercial distribution transformers energized 24 hours daily with fluctuating load cycles; All-Day Efficiency $\\eta_{all-day} = \\frac{\\text{Total Energy Output in } kWh \\text{ over 24 hours}}{\\text{Total Energy Input in } kWh \\text{ over 24 hours}}$; Design optimization: core loss minimized at expense of copper loss ($x \\approx 50-70\\%$ full load).",
      "University Examination Strategy: Derive the transformer EMF equation, construct complete phasor diagrams for lagging/leading loads, calculate primary and secondary equivalent circuit impedances, determine voltage regulation at specified power factors, and solve all-day energy efficiency problems."
    ],
    "keyPoints": [
      "Transformer EMF Formula: $E = 4.44 f N \\Phi_m = 4.44 f N B_m A_c$.",
      "Transformation Ratio: $K = \\frac{E_2}{E_1} = \\frac{N_2}{N_1} = \\frac{I_1}{I_2}$.",
      "No-Load Current Components: $I_c = I_0 \\cos\\phi_0$ and $I_m = I_0 \\sin\\phi_0$.",
      "Secondary Impedance Referred to Primary: $R_2' = R_2 / K^2$ and $X_2' = X_2 / K^2$.",
      "Voltage Regulation Formula: $VR \\approx \\frac{I_2(R_{eq2}\\cos\\phi_2 \\pm X_{eq2}\\sin\\phi_2)}{V_2} \\times 100\\%$.",
      "Condition for Zero Voltage Regulation: Occurs at leading power factor with $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
      "Condition for Maximum Voltage Regulation: Occurs at lagging power factor with $\\tan\\phi_2 = \\frac{X_{eq}}{R_{eq}}$.",
      "Max Efficiency Loading Fraction: $x = \\sqrt{\\frac{P_{iron}}{P_{cu,FL}}}$.",
      "All-Day Efficiency Definition: $\\eta_{energy} = \\frac{\\text{Output in kWh (24h)}}{\\text{Input in kWh (24h)}} \\times 100\\%$.",
      "Exam Gold Tip: For voltage regulation, use a positive sign ($+$) for lagging power factor loads and a negative sign ($-$) for leading power factor loads."
    ]
  },
  "electrical machines — i:::u4": {
    "highlights": [
      "Auto-Transformer Construction & Theory: Single continuous winding tapped at intermediate points, shared between primary and secondary circuits; Magnetic core; Conductive connection plus magnetic coupling between input and output.",
      "Step-Down and Step-Up Configurations: Step-down: full winding $N_1$ acts as primary, tapped section $N_2$ acts as secondary; Step-up: tapped section acts as primary, full winding acts as secondary; Turns ratio $k = V_2 / V_1 = N_2 / N_1$.",
      "Power Transfer Mechanism — Conductive vs Inductive: Total apparent power transferred $S_{total} = V_1 I_1 = V_2 I_2$; Inductively transferred power (transformed via core magnetic flux): $S_{ind} = V_1 I_1 (1 - k)$; Conductively transferred power (conducted directly via copper winding): $S_{cond} = V_1 I_1 k$; High efficiency when $k \\to 1$.",
      "Copper Saving in Auto-Transformers: Weight of copper is proportional to turns $\\times$ current ($W_{cu} \\propto N I$); Weight ratio: $\\frac{W_{auto}}{W_{2-winding}} = 1 - k$; Copper saved $= k \\times W_{2-winding}$; Maximum copper economy achieved when transformation ratio $k$ is close to unity (e.g. $k = 0.8-0.9$).",
      "Equivalent Circuit and Impedance Scaling: Internal leakage reactance and winding resistance of auto-transformer; Short-circuit impedance of auto-transformer is $(1 - k)$ times that of equivalent two-winding transformer; Higher short-circuit fault currents.",
      "Advantages and Operational Merits: Substantially higher efficiency (lower core and copper losses for identical kVA rating), superior voltage regulation (smaller internal percentage impedance drop), smaller physical footprint and weight, lower manufacturing capital cost.",
      "Disadvantages and Safety Hazards: Loss of electrical isolation between high-voltage (HV) and low-voltage (LV) systems; Direct hazard: an open circuit in common winding section subjects LV load terminals to full HV primary supply voltage; Higher fault current levels requiring high-breaking-capacity switchgear.",
      "Conversion Between Two-Winding and Auto-Transformer: Reconnecting standard two-winding transformer as an auto-transformer (Additive polarity vs Subtractive polarity); Significant increase in kVA rating: $kVA_{auto} = kVA_{2-wdg} \\times \\frac{1}{1 - k}$ (for additive step-up).",
      "Applications of Auto-Transformers: Variable AC voltage supply (Variac / Dimmerstat for laboratory voltage control); Induction motor starters (auto-transformer starting reducing starting current by factor $x^2$); Interconnecting transmission grids at similar voltage tiers (e.g. 400 kV to 220 kV); Booster transformers in electric railway traction.",
      "University Examination Strategy: Derive the copper saving ratio $1 - k$ step-by-step, calculate inductive and conductive power components for given ratings, and determine the enhanced kVA capacity and efficiency when reconnecting a two-winding transformer as an auto-transformer."
    ],
    "keyPoints": [
      "Auto-Transformer Copper Saving: $\\text{Copper Saved} = k \\times W_{2-winding}$.",
      "Weight of Copper Ratio: $\\frac{W_{auto}}{W_{2-winding}} = 1 - k$, where $k = \\frac{N_2}{N_1} < 1$.",
      "Conductively Transferred Power: $P_{cond} = k \\times P_{total}$.",
      "Inductively Transformed Power: $P_{ind} = (1 - k) \\times P_{total}$.",
      "Enhanced kVA Rating (Additive): $kVA_{auto} = \\frac{V_1 + V_2}{V_1} \\times kVA_{2-wdg}$.",
      "Internal Impedance Reduction: $Z_{eq(auto)} = (1 - k)^2 Z_{eq(2-wdg)}$.",
      "Auto-Transformer Regulation: Substantially smaller percentage voltage drop compared to equivalent 2-winding unit.",
      "Variac Operating Principle: Toroidal core with continuously adjustable carbon brush sliding along uninsulated copper turns.",
      "Safety Isolation Warning: Auto-transformers lack electrical galvanic isolation; neutral grounding must be strictly verified.",
      "Exam Gold Tip: The closer the voltage ratio $k$ is to 1, the greater the copper savings and the higher the proportion of power transferred conductively."
    ]
  },
  "electrical machines — i:::u5": {
    "highlights": [
      "Open-Circuit (OC) Test / No-Load Test: High-Voltage (HV) winding left open-circuited; Low-Voltage (LV) winding supplied at rated voltage $V_1$ and rated frequency; Instruments on LV side: Voltmeter ($V_1$), Ammeter ($I_0$), Wattmeter ($W_0$, Low Power Factor LPF wattmeter); Wattmeter reading measures core iron loss $P_i = W_0$ (copper loss negligibly small).",
      "OC Test Parameter Calculations: No-load power factor $\\cos\\phi_0 = \\frac{W_0}{V_1 I_0}$; Core loss component $I_c = I_0 \\cos\\phi_0$; Magnetizing component $I_m = I_0 \\sin\\phi_0 = \\sqrt{I_0^2 - I_c^2}$; Shunt core resistance $R_c = \\frac{V_1}{I_c}$; Shunt magnetizing reactance $X_m = \\frac{V_1}{I_m}$.",
      "Short-Circuit (SC) Test / Impedance Test: Low-Voltage (LV) winding short-circuited with thick copper strip; High-Voltage (HV) winding supplied with reduced variable voltage ($5-10\\%$ of rated $V_{HV}$) to circulate rated full-load current $I_{sc} = I_{FL}$; Instruments on HV side: Voltmeter ($V_{sc}$), Ammeter ($I_{sc}$), Wattmeter ($W_{sc}$, Normal/Unity PF wattmeter); Wattmeter reading measures full-load copper loss $P_{cu(FL)} = W_{sc}$ (iron loss negligibly small at low flux density).",
      "SC Test Parameter Calculations: Equivalent series resistance referred to HV: $R_{eq} = \\frac{W_{sc}}{I_{sc}^2}$; Equivalent series impedance $Z_{eq} = \\frac{V_{sc}}{I_{sc}}$; Equivalent series leakage reactance $X_{eq} = \\sqrt{Z_{eq}^2 - R_{eq}^2}$; Short-circuit power factor $\\cos\\phi_{sc} = \\frac{R_{eq}}{Z_{eq}}$.",
      "Pre-determination of Efficiency and Regulation: Combining OC and SC test results to predetermine efficiency at any fraction of full load $x$ and any power factor $\\cos\\phi$: $\\eta = \\frac{x S_{rated} \\cos\\phi}{x S_{rated} \\cos\\phi + W_0 + x^2 W_{sc}}$; Predetermining percentage voltage regulation without ever loading the machine physically.",
      "Sumpner's Test (Back-to-Back Test): Regenerative thermal testing of two identical transformers; Primaries connected in parallel across rated voltage supply (draws combined core loss $W_1 = 2 P_i$); Secondaries connected in phase opposition (series opposing, zero net circulating voltage) and excited via auxiliary booster transformer (draws combined full-load copper loss $W_2 = 2 P_{cu}$); Full-load temperature rise determination with minimal energy consumption.",
      "Polarity Test on Transformers: Additive vs Subtractive polarity; Standard polarity markings ($H_1, H_2$ for HV; $X_1, X_2$ for LV); Voltmeter method: connect $H_1$ to $X_1$, measure $V_{32}$ between $H_2$ and $X_2$; If $V_{32} = V_{HV} - V_{LV} \\implies$ Subtractive polarity (standard Indian/IEEE convention); If $V_{32} = V_{HV} + V_{LV} \\implies$ Additive polarity.",
      "Parallel Operation of Single-Phase Transformers: Conditions for successful parallel operation: (1) Mandatory: identical voltage ratings and transformation ratios, identical polarities (prevent massive circulating currents); (2) Desirable: identical per-unit impedances (for proportional load sharing: $S_A = S_{total} \\frac{Z_B}{Z_A + Z_B}$), identical $X/R$ ratios (prevents phase angle differences between currents).",
      "Circulating Currents in Parallel Transformers: Circulating current caused by unequal voltage ratios: $I_c = \\frac{E_A - E_B}{Z_A + Z_B}$; Circulates even at zero external load, causing unnecessary heating and overloading.",
      "University Examination Strategy: Calculate shunt branch parameters ($R_c, X_m$) and series branch parameters ($R_{eq}, X_{eq}$) from raw OC/SC test meter readings, calculate efficiency and regulation at 0.8 PF lagging, draw Sumpner's test circuit schematic, and solve parallel load-sharing problems."
    ],
    "keyPoints": [
      "OC Test Core Resistance: $R_c = \\frac{V_1^2}{W_0}$ (parameters on LV side).",
      "OC Test Magnetizing Reactance: $X_m = \\frac{V_1}{I_m} = \\frac{V_1}{\\sqrt{I_0^2 - (W_0/V_1)^2}}$.",
      "SC Test Series Resistance: $R_{eq} = \\frac{W_{sc}}{I_{sc}^2}$ (parameters on HV side).",
      "SC Test Series Reactance: $X_{eq} = \\sqrt{\\left(\\frac{V_{sc}}{I_{sc}}\\right)^2 - R_{eq}^2}$.",
      "Sumpner's Auxiliary Wattmeter Reading: $W_2 = 2 P_{cu(FL)}$ (total copper loss of both transformers).",
      "Sumpner's Main Wattmeter Reading: $W_1 = 2 P_i$ (total core iron loss of both transformers).",
      "Subtractive Polarity Test: $V = V_{HV} - V_{LV}$ (standard preferred convention).",
      "Parallel Load Sharing Formula: $S_A = S_{load} \\times \\frac{Z_B}{Z_A + Z_B}$.",
      "No-Load Circulating Current: $I_{circ} = \\frac{E_A - E_B}{Z_A + Z_B}$.",
      "Exam Gold Tip: Low-voltage side is chosen for OC test because rated LV voltage is safe and convenient; high-voltage side is chosen for SC test because rated HV current is smaller and easily measurable."
    ]
  },
  "digital electronics:::u1": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "digital electronics:::u2": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "digital electronics:::u3": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "digital electronics:::u4": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "digital electronics:::u5": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "electromagnetic fields:::u1": {
    "highlights": [
      "Vector Calculus in Coordinate Systems: Cartesian $(x,y,z)$, Cylindrical $(\\rho, \\phi, z)$, and Spherical $(r, \\theta, \\phi)$ coordinates; Differential length, surface, and volume elements; Del operator $\\nabla$; Gradient of scalar field ($\\nabla V$), Divergence of vector field ($\\nabla \\cdot \\mathbf{D}$), Curl of vector field ($\\nabla \\times \\mathbf{E}$); Divergence Theorem (Gauss-Ostrogradsky) and Stokes' Theorem.",
      "Coulomb's Law and Electric Field Intensity: Coulomb's inverse square law: $\\mathbf{F}_{12} = \\frac{q_1 q_2}{4\\pi \\epsilon_0 R^2} \\hat{\\mathbf{a}}_R$; Permittivity of free space $\\epsilon_0 \\approx 8.854 \\times 10^{-12}\\text{ F/m}$; Electric field intensity $\\mathbf{E} = \\mathbf{F}/q$; Field due to discrete point charges and continuous charge distributions (line charge $\\rho_L$, surface charge $\\rho_S$, volume charge $\\rho_v$).",
      "Electric Flux Density and Gauss's Law: Electric flux $\\Psi = Q$; Electric flux density vector $\\mathbf{D} = \\epsilon_0 \\mathbf{E}$; Gauss's Law in integral form: $\\oint_S \\mathbf{D} \\cdot d\\mathbf{S} = Q_{enclosed}$; Gauss's Law in point/differential form: $\\nabla \\cdot \\mathbf{D} = \\rho_v$ (Maxwell's First Equation for electrostatics).",
      "Applications of Gauss's Law: Analytical field determination for symmetric charge geometries: (1) Infinite line charge: $\\mathbf{E} = \\frac{\\rho_L}{2\\pi \\epsilon_0 \\rho} \\hat{\\mathbf{a}}_\\rho$; (2) Infinite planar surface charge: $\\mathbf{E} = \\frac{\\rho_S}{2 \\epsilon_0} \\hat{\\mathbf{a}}_n$; (3) Uniformly charged spherical shell and solid sphere.",
      "Electric Potential and Potential Gradient: Work done moving test charge against electric field: $W = -q \\int_A^B \\mathbf{E} \\cdot d\\mathbf{L}$; Electric potential $V = \\frac{q}{4\\pi \\epsilon_0 R}$; Conservative nature of electrostatic field: $\\oint \\mathbf{E} \\cdot d\\mathbf{L} = 0 \\implies \\nabla \\times \\mathbf{E} = 0$; Electric field as negative gradient of electric potential: $\\mathbf{E} = -\\nabla V$.",
      "Electric Dipole and Dipole Moment: Pair of equal and opposite charges $\\pm q$ separated by small distance $d$; Electric dipole moment $\\mathbf{p} = q \\mathbf{d}$; Dipole potential: $V = \\frac{\\mathbf{p} \\cdot \\hat{\\mathbf{a}}_r}{4\\pi \\epsilon_0 r^2} = \\frac{p \\cos\\theta}{4\\pi \\epsilon_0 r^2}$; Dipole electric field: $\\mathbf{E} = \\frac{p}{4\\pi \\epsilon_0 r^3} (2\\cos\\theta \\hat{\\mathbf{a}}_r + \\sin\\theta \\hat{\\mathbf{a}}_\\theta)$ ($1/r^3$ distance decay).",
      "Electrostatic Energy and Energy Density: Potential energy stored in discrete charge assembly: $W_E = \\frac{1}{2} \\sum_{i=1}^n q_i V_i$; Continuous electrostatic energy integral: $W_E = \\frac{1}{2} \\int_{vol} \\mathbf{D} \\cdot \\mathbf{E} dv = \\frac{1}{2} \\int_{vol} \\epsilon |\\mathbf{E}|^2 dv$; Electrostatic energy density: $w_E = \\frac{1}{2} \\mathbf{D} \\cdot \\mathbf{E} = \\frac{1}{2} \\epsilon E^2$ in Joules per cubic meter ($J/m^3$).",
      "Poisson's and Laplace's Equations: Derivation from Gauss's differential law and potential gradient: $\\nabla \\cdot (\\epsilon \\nabla V) = -\\rho_v$; Poisson's Equation: $\\nabla^2 V = -\\frac{\\rho_v}{\\epsilon}$; Laplace's Equation (in charge-free regions $\\rho_v = 0$): $\\nabla^2 V = 0$; Laplacian operator $\\nabla^2$ expressions across rectangular, cylindrical, and spherical coordinates.",
      "Uniqueness Theorem: Proof that any solution to Laplace's or Poisson's equation satisfying specified boundary conditions (Dirichlet, Neumann, or mixed boundary conditions) is the unique physical solution; Applications in electrostatic boundary value problem solutions.",
      "University Examination Strategy: Apply Gauss's law to evaluate $\\mathbf{D}$ and $\\mathbf{E}$ for cylindrical coaxial and spherical geometries, derive $\\mathbf{E} = -\\nabla V$ and prove $\\nabla \\times \\mathbf{E} = 0$, calculate electrostatic energy stored in capacitor configurations, and solve one-dimensional Laplace equations."
    ],
    "keyPoints": [
      "Coulomb's Force Law: $\\mathbf{F} = \\frac{q_1 q_2}{4\\pi \\epsilon_0 R^2} \\hat{\\mathbf{a}}_R$.",
      "Gauss's Law (Differential Form): $\\nabla \\cdot \\mathbf{D} = \\rho_v$.",
      "Gauss's Law (Integral Form): $\\oint_S \\mathbf{D} \\cdot d\\mathbf{S} = Q_{enc}$.",
      "Infinite Line Charge Field: $\\mathbf{E} = \\frac{\\rho_L}{2\\pi \\epsilon_0 \\rho} \\hat{\\mathbf{a}}_\\rho$.",
      "Infinite Sheet Charge Field: $\\mathbf{E} = \\frac{\\rho_S}{2 \\epsilon_0} \\hat{\\mathbf{a}}_n$.",
      "Electric Potential Gradient: $\\mathbf{E} = -\\nabla V$.",
      "Dipole Electric Field: $\\mathbf{E} = \\frac{p}{4\\pi \\epsilon_0 r^3}(2\\cos\\theta \\hat{\\mathbf{a}}_r + \\sin\\theta \\hat{\\mathbf{a}}_\\theta)$.",
      "Electrostatic Energy Density: $w_E = \\frac{1}{2} \\mathbf{D} \\cdot \\mathbf{E} = \\frac{1}{2} \\epsilon E^2$ $\\text{J/m}^3$.",
      "Poisson's Differential Equation: $\\nabla^2 V = -\\frac{\\rho_v}{\\epsilon}$.",
      "Exam Gold Tip: In electrostatic fields, the curl of $\\mathbf{E}$ is identically zero ($\\nabla \\times \\mathbf{E} = 0$), which proves the electrostatic field is strictly conservative."
    ]
  },
  "electromagnetic fields:::u2": {
    "highlights": [
      "Conductors in Electrostatic Fields: Conduction mechanisms; Drift velocity and Ohm's law in point form: $\\mathbf{J} = \\sigma \\mathbf{E}$; Internal electric field within static perfect conductor is identically zero ($\\mathbf{E} = 0$ inside conductor); Conductor surface is an equipotential surface; Excess charges reside exclusively on external conductor boundary.",
      "Dielectric Materials and Polarization: Non-polar vs polar dielectric molecules; Electric polarization vector $\\mathbf{P} = \\lim_{\\Delta v \\to 0} \\frac{\\sum \\mathbf{p}_i}{\\Delta v}$; Bound surface charge density $\\rho_{sb} = \\mathbf{P} \\cdot \\hat{\\mathbf{a}}_n$; Bound volume charge density $\\rho_{vb} = -\\nabla \\cdot \\mathbf{P}$; Total electric flux density: $\\mathbf{D} = \\epsilon_0 \\mathbf{E} + \\mathbf{P} = \\epsilon_0 (1 + \\chi_e) \\mathbf{E} = \\epsilon_0 \\epsilon_r \\mathbf{E}$.",
      "Dielectric Properties and Breakdown: Relative permittivity / dielectric constant $\\epsilon_r$; Electric susceptibility $\\chi_e = \\epsilon_r - 1$; Dielectric strength (critical electric field intensity causing avalanche dielectric breakdown, e.g. $3\\text{ MV/m}$ for air); Corona discharge and dielectric losses.",
      "Continuity Equation and Relaxation Time: Conservation of electric charge: $\\nabla \\cdot \\mathbf{J} = -\\frac{\\partial \\rho_v}{\\partial t}$; Combining with Ohm's law and Gauss's law yields: $\\frac{\\partial \\rho_v}{\\partial t} + \\frac{\\sigma}{\\epsilon} \\rho_v = 0$; Solution: $\\rho_v(t) = \\rho_{v0} e^{-t / T_r}$; Dielectric relaxation time constant $T_r = \\frac{\\epsilon}{\\sigma}$ (extremely small $\\sim 10^{-19}\\text{ s}$ for copper).",
      "Electrostatic Boundary Conditions: (1) Dielectric-Dielectric Interface: Tangential $\\mathbf{E}$ continuity: $E_{t1} = E_{t2}$ ($\\frac{D_{t1}}{\\epsilon_1} = \\frac{D_{t2}}{\\epsilon_2}$); Normal $\\mathbf{D}$ jump discontinuity: $D_{n1} - D_{n2} = \\rho_s$ (if interface is charge-free $\\rho_s = 0 \\implies D_{n1} = D_{n2}$); Law of Refraction of electric flux lines: $\\frac{\\tan\\theta_1}{\\tan\\theta_2} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}$.",
      "Conductor-Dielectric Boundary Conditions: Since $\\mathbf{E}=0$ inside conductor: Tangential electric field at surface is zero: $E_t = 0$; Normal flux density equals free surface charge density: $D_n = \\rho_s$ ($E_n = \\rho_s / \\epsilon$); Electric field lines always terminate perpendicular to conductor surfaces.",
      "Capacitance Derivation: Definition $C = Q / V$; Step-by-step capacitance derivation flow: Assume $Q \\to$ find $\\mathbf{E}$ via Gauss $\\to$ integrate potential $V = -\\int \\mathbf{E} \\cdot d\\mathbf{L} \\to$ evaluate ratio $C = Q / V$; Parallel-plate capacitor ($C = \\frac{\\epsilon A}{d}$); Coaxial cylindrical cable ($C = \\frac{2\\pi \\epsilon L}{\\ln(b/a)}$); Concentric spherical capacitor ($C = \\frac{4\\pi \\epsilon}{\\frac{1}{a} - \\frac{1}{b}}$); Isolated conducting sphere ($C = 4\\pi \\epsilon R$).",
      "Multi-Dielectric Capacitors: Capacitors with composite dielectric layers; Dielectrics in series (boundary parallel to plates: $C_{eq} = \\frac{C_1 C_2}{C_1 + C_2}$); Dielectrics in parallel (boundary perpendicular to plates: $C_{eq} = C_1 + C_2$).",
      "Method of Images: Solution of electrostatic boundary value problems without solving partial differential equations; Point charge $+q$ near infinite grounded conducting plane replaced by original charge $+q$ at $z=d$ and fictitious mirror image charge $-q$ at $z=-d$; Point charge near grounded conducting sphere; Line charge near grounded cylindrical conductor.",
      "University Examination Strategy: Derive boundary conditions across dielectric interfaces with complete pillbox and rectangular loop sketches, calculate capacitance of composite coaxial transmission lines, and solve method of images for point charges near planar conductors evaluating surface charge distribution."
    ],
    "keyPoints": [
      "Point Form Ohm's Law: $\\mathbf{J} = \\sigma \\mathbf{E}$.",
      "Dielectric Flux Density: $\\mathbf{D} = \\epsilon_0 \\mathbf{E} + \\mathbf{P} = \\epsilon_0 \\epsilon_r \\mathbf{E}$.",
      "Bound Surface Charge: $\\rho_{sb} = \\mathbf{P} \\cdot \\hat{\\mathbf{a}}_n$.",
      "Bound Volume Charge: $\\rho_{vb} = -\\nabla \\cdot \\mathbf{P}$.",
      "Dielectric Relaxation Time: $T_r = \\frac{\\epsilon}{\\sigma}$.",
      "Tangential Field Continuity: $E_{t1} = E_{t2}$.",
      "Normal Flux Discontinuity: $D_{n1} - D_{n2} = \\rho_s$ ($D_{n1} = D_{n2}$ if $\\rho_s = 0$).",
      "Refraction of Field Lines: $\\frac{\\tan\\theta_1}{\\tan\\theta_2} = \\frac{\\epsilon_1}{\\epsilon_2}$.",
      "Coaxial Cable Capacitance: $C = \\frac{2\\pi \\epsilon L}{\\ln(b/a)}$.",
      "Exam Gold Tip: Under electrostatic equilibrium, electric field lines must intersect any conducting surface at strictly right angles ($90^\\circ$)."
    ]
  },
  "electromagnetic fields:::u3": {
    "highlights": [
      "Biot-Savart Law: Magnetic field generated by steady electric current element: $d\\mathbf{B} = \\frac{\\mu_0 I d\\mathbf{L} \\times \\hat{\\mathbf{a}}_R}{4\\pi R^2} = \\frac{\\mu_0 I d\\mathbf{L} \\times \\mathbf{R}}{4\\pi R^3}$; Permeability of free space $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ H/m}$; Magnetic field intensity $\\mathbf{H} = \\mathbf{B} / \\mu_0$; Biot-Savart law for surface current $\\mathbf{K}$ and volume current $\\mathbf{J}$.",
      "Applications of Biot-Savart Law: (1) Straight filamentary current of finite length: $H = \\frac{I}{4\\pi \\rho} (\\sin\\alpha_2 - \\sin\\alpha_1)$; Infinite straight wire: $H = \\frac{I}{2\\pi \\rho} \\hat{\\mathbf{a}}_\\phi$; (2) Circular current loop on axis: $H_z = \\frac{I R^2}{2 (R^2 + z^2)^{3/2}}$; (3) Solenoid of finite length and infinite length ($H = n I$).",
      "Ampere's Circuital Law (ACL): Line integral of magnetic field intensity around any closed contour equals total enclosed conduction current: $\\oint_C \\mathbf{H} \\cdot d\\mathbf{L} = I_{enclosed} = \\int_S \\mathbf{J} \\cdot d\\mathbf{S}$; Differential / point form via Stokes' theorem: $\\nabla \\times \\mathbf{H} = \\mathbf{J}$ (Maxwell's Third Equation for magnetostatics).",
      "Applications of Ampere's Circuital Law: (1) Infinite coaxial cable carrying forward current $I$ in inner conductor and return current $I$ in outer cylindrical sheath (evaluation of $\\mathbf{H}$ across all 4 radial zones); (2) Infinite current sheet carrying surface current $\\mathbf{K} = K_y \\hat{\\mathbf{a}}_y \\implies \\mathbf{H} = \\pm \\frac{1}{2} K_y \\hat{\\mathbf{a}}_z$; (3) Toroidal coil with rectangular and circular cross-sections.",
      "Magnetic Flux and Gauss's Law for Magnetism: Total magnetic flux $\\Phi = \\int_S \\mathbf{B} \\cdot d\\mathbf{S}$ in Webers ($Wb$); Non-existence of isolated magnetic monopoles (magnetic flux lines are continuous closed loops); Integral form: $\\oint_S \\mathbf{B} \\cdot d\\mathbf{S} = 0$; Point / differential form via Divergence theorem: $\\nabla \\cdot \\mathbf{B} = 0$ (Maxwell's Second Equation).",
      "Magnetic Vector Potential (A): Since $\\nabla \\cdot \\mathbf{B} = 0$ and divergence of curl is identically zero, magnetic flux density can be defined as curl of vector potential: $\\mathbf{B} = \\nabla \\times \\mathbf{A}$; Units of $\\mathbf{A}$ in $\\text{Wb/m}$ or $\\text{V}\\cdot\\text{s/m}$; Vector Poisson's Equation: $\\nabla^2 \\mathbf{A} = -\\mu_0 \\mathbf{J}$ (under Coulomb gauge $\\nabla \\cdot \\mathbf{A} = 0$); Integral expression: $\\mathbf{A} = \\frac{\\mu_0}{4\\pi} \\int_{vol} \\frac{\\mathbf{J} dv}{R}$.",
      "Evaluation of Magnetic Flux via Vector Potential: Application of Stokes' Theorem: $\\Phi = \\int_S \\mathbf{B} \\cdot d\\mathbf{S} = \\int_S (\\nabla \\times \\mathbf{A}) \\cdot d\\mathbf{S} = \\oint_C \\mathbf{A} \\cdot d\\mathbf{L}$; Eliminates area surface integration in complex boundary problems.",
      "Magnetic Scalar Potential ($V_m$): Defined strictly in current-free regions where $\\mathbf{J} = 0$: $\\nabla \\times \\mathbf{H} = 0 \\implies \\mathbf{H} = -\\nabla V_m$; Satisfies Laplace's equation $\\nabla^2 V_m = 0$; Multi-valued nature when encircling closed paths enclosing currents.",
      "Magnetic Dipole and Dipole Moment: Small planar closed loop of area $S$ carrying current $I$; Magnetic dipole moment vector: $\\mathbf{m} = I S \\hat{\\mathbf{a}}_n$; Vector potential of dipole: $\\mathbf{A} = \\frac{\\mu_0 m \\sin\\theta}{4\\pi r^2} \\hat{\\mathbf{a}}_\\phi$; Magnetic flux density: $\\mathbf{B} = \\frac{\\mu_0 m}{4\\pi r^3} (2\\cos\\theta \\hat{\\mathbf{a}}_r + \\sin\\theta \\hat{\\mathbf{a}}_\\theta)$ (formal duality with electric dipole).",
      "University Examination Strategy: Apply Biot-Savart law to derive magnetic field intensity along the axis of circular current loops, use Ampere's circuital law to compute field distribution across coaxial transmission lines, verify $\\nabla \\cdot \\mathbf{B} = 0$, and evaluate vector potential $\\mathbf{A}$ for symmetrical currents."
    ],
    "keyPoints": [
      "Biot-Savart Differential Formula: $d\\mathbf{H} = \\frac{I d\\mathbf{L} \\times \\hat{\\mathbf{a}}_R}{4\\pi R^2}$.",
      "Ampere's Circuital Law (Integral): $\\oint_C \\mathbf{H} \\cdot d\\mathbf{L} = I_{enc}$.",
      "Ampere's Law (Point Form): $\\nabla \\times \\mathbf{H} = \\mathbf{J}$.",
      "Gauss's Law for Magnetism: $\\nabla \\cdot \\mathbf{B} = 0$ (no magnetic monopoles).",
      "Infinite Wire Magnetic Field: $H_\\phi = \\frac{I}{2\\pi \\rho}$.",
      "Solenoid Axial Magnetic Field: $H_z = n I = \\frac{N I}{L}$.",
      "Magnetic Vector Potential Definition: $\\mathbf{B} = \\nabla \\times \\mathbf{A}$.",
      "Vector Poisson Equation: $\\nabla^2 \\mathbf{A} = -\\mu \\mathbf{J}$ (under Coulomb gauge $\\nabla \\cdot \\mathbf{A} = 0$).",
      "Magnetic Flux via Line Integral: $\\Phi = \\oint_C \\mathbf{A} \\cdot d\\mathbf{L}$.",
      "Exam Gold Tip: Always specify the Coulomb gauge condition $\\nabla \\cdot \\mathbf{A} = 0$ when reducing the magnetic vector wave equation to Poisson's equation."
    ]
  },
  "electromagnetic fields:::u4": {
    "highlights": [
      "Lorentz Force Equation: Total electromagnetic force acting on moving charged particle: $\\mathbf{F} = q (\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})$; Magnetic force $\\mathbf{F}_m = q (\\mathbf{v} \\times \\mathbf{B})$ does zero mechanical work since $\\mathbf{F}_m \\perp \\mathbf{v}$; Causes circular cyclotron motion with radius $r = \\frac{m v}{q B}$ and cyclotron frequency $\\omega_c = \\frac{q B}{m}$.",
      "Magnetic Force on Current Elements: Force on differential line current: $d\\mathbf{F} = I d\\mathbf{L} \\times \\mathbf{B}$; Force on surface current: $d\\mathbf{F} = \\mathbf{K} \\times \\mathbf{B} dS$; Force on volume current: $d\\mathbf{F} = \\mathbf{J} \\times \\mathbf{B} dv$; Force between two parallel infinite current-carrying wires: $F/L = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$ (attractive for parallel currents, repulsive for anti-parallel currents; SI definition of Ampere).",
      "Magnetic Torque on Closed Planar Loops: Torque on planar current loop in uniform magnetic field: $\\mathbf{T} = \\mathbf{m} \\times \\mathbf{B}$ (where magnetic dipole moment $\\mathbf{m} = I A \\hat{\\mathbf{a}}_n$); Tends to align magnetic dipole with external magnetic field; Basis of galvanometer and electric motor operations.",
      "Magnetization in Materials: Atomic magnetic dipoles (orbital electron motion and electron spin); Magnetization vector $\\mathbf{M} = \\lim_{\\Delta v \\to 0} \\frac{\\sum \\mathbf{m}_i}{\\Delta v}$ in $\\text{A/m}$; Bound volume current density $\\mathbf{J}_b = \\nabla \\times \\mathbf{M}$; Bound surface current density $\\mathbf{K}_b = \\mathbf{M} \\times \\hat{\\mathbf{a}}_n$; Total magnetic flux density: $\\mathbf{B} = \\mu_0 (\\mathbf{H} + \\mathbf{M}) = \\mu_0 (1 + \\chi_m) \\mathbf{H} = \\mu_0 \\mu_r \\mathbf{H}$.",
      "Classification of Magnetic Materials: (1) Diamagnetic ($\\mu_r \\lesssim 1, \\chi_m < 0$, weak repulsion, e.g. Cu, Bi); (2) Paramagnetic ($\\mu_r \\gtrsim 1, \\chi_m > 0$, weak attraction, e.g. Al, Pt); (3) Ferromagnetic ($\\mu_r \\gg 1$, domain alignment, spontaneous magnetization, non-linear $B-H$ curve, Curie temperature $T_c$, e.g. Fe, Ni, Co); Antiferromagnetic and Ferrimagnetic (ferrites).",
      "Magnetic Boundary Conditions: (1) Normal components: continuity of magnetic flux density: $B_{n1} = B_{n2}$ ($\\mu_1 H_{n1} = \\mu_2 H_{n2}$); (2) Tangential components: jump discontinuity due to surface current: $(\\mathbf{H}_1 - \\mathbf{H}_2) \\times \\hat{\\mathbf{a}}_{n12} = \\mathbf{K}$ (if interface has no surface current $\\mathbf{K}=0 \\implies H_{t1} = H_{t2}$); Law of Refraction for magnetic field lines: $\\frac{\\tan\\theta_1}{\\tan\\theta_2} = \\frac{\\mu_{r1}}{\\mu_{r2}}$.",
      "Inductance and Mutual Inductance: Self-inductance $L = \\frac{\\Lambda}{I} = \\frac{N \\Phi}{I}$; Energy formulation: $L = \\frac{2 W_H}{I^2}$; Mutual inductance between two coupled circuits: $M_{12} = \\frac{\\Lambda_{12}}{I_2} = \\frac{N_1 \\Phi_{12}}{I_2}$; Neumann's formula: $M_{12} = \\frac{\\mu_0}{4\\pi} \\oint_{C1} \\oint_{C2} \\frac{d\\mathbf{L}_1 \\cdot d\\mathbf{L}_2}{R}$; Inductance of coaxial cable ($L = \\frac{\\mu L}{2\\pi}\\ln(b/a)$) and toroid.",
      "Magnetic Energy and Energy Density: Energy stored in magnetic field: $W_H = \\frac{1}{2} L I^2$; Continuous field formulation: $W_H = \\frac{1}{2} \\int_{vol} \\mathbf{B} \\cdot \\mathbf{H} dv = \\frac{1}{2} \\int_{vol} \\mu |\\mathbf{H}|^2 dv$; Magnetic energy density: $w_H = \\frac{1}{2} \\mathbf{B} \\cdot \\mathbf{H} = \\frac{1}{2} \\mu H^2$ in $\\text{J/m}^3$.",
      "Magnetic Circuits and Reluctance: Analogy between electric and magnetic circuits: MMF $\\mathcal{F} = N I$ (analogous to EMF $V$), Magnetic flux $\\Phi$ (analogous to current $I$), Reluctance $\\mathcal{R} = \\frac{l}{\\mu A}$ (analogous to resistance $R$); Hopkinson's Law: $\\mathcal{F} = \\Phi \\mathcal{R}$; Air gap reluctance and fringing effects; Lifting power of electromagnets: $F = \\frac{B^2 A}{2\\mu_0}$.",
      "University Examination Strategy: Calculate forces and torques on arbitrary loop conductors in uniform magnetic fields, derive magnetic boundary conditions across media interfaces, calculate self-inductance and stored magnetic energy of coaxial cables, and solve magnetic circuits with air gaps."
    ],
    "keyPoints": [
      "Lorentz Force Equation: $\\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})$.",
      "Magnetic Force on Conductor: $\\mathbf{F} = I \\int d\\mathbf{L} \\times \\mathbf{B}$.",
      "Parallel Wires Mutual Force: $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$ (attracts for parallel currents).",
      "Magnetic Dipole Torque: $\\mathbf{T} = \\mathbf{m} \\times \\mathbf{B}$, where $\\mathbf{m} = I S \\hat{\\mathbf{a}}_n$.",
      "Bound Surface Current: $\\mathbf{K}_b = \\mathbf{M} \\times \\hat{\\mathbf{a}}_n$.",
      "Bound Volume Current: $\\mathbf{J}_b = \\nabla \\times \\mathbf{M}$.",
      "Normal Magnetic Boundary: $B_{n1} = B_{n2}$.",
      "Tangential Magnetic Boundary: $H_{t1} - H_{t2} = K$ ($H_{t1} = H_{t2}$ if $K = 0$).",
      "Magnetic Energy Density: $w_H = \\frac{1}{2} \\mathbf{B} \\cdot \\mathbf{H} = \\frac{1}{2} \\mu H^2$ $\\text{J/m}^3$.",
      "Exam Gold Tip: Magnetic forces do zero work on moving point charges because magnetic force is always perpendicular to instantaneous velocity ($\\mathbf{F}_m \\cdot \\mathbf{v} = 0$)."
    ]
  },
  "electromagnetic fields:::u5": {
    "highlights": [
      "Faraday's Law of Electromagnetic Induction: Time-varying magnetic fields induce electric fields; Lenz's Law; Induced EMF in closed circuit: $\\mathcal{E} = -\\frac{d\\lambda}{dt} = -N \\frac{d\\Phi}{dt}$; Integral form: $\\oint_C \\mathbf{E} \\cdot d\\mathbf{L} = -\\int_S \\frac{\\partial \\mathbf{B}}{\\partial t} \\cdot d\\mathbf{S}$; Differential / point form: $\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}$.",
      "Transformer EMF and Motional EMF: Total induced EMF: $\\mathcal{E} = \\oint_C \\mathbf{E} \\cdot d\\mathbf{L} = -\\int_S \\frac{\\partial \\mathbf{B}}{\\partial t} \\cdot d\\mathbf{S} + \\oint_C (\\mathbf{v} \\times \\mathbf{B}) \\cdot d\\mathbf{L}$; Transformer EMF (stationary circuit in time-varying magnetic field); Motional / Generator EMF (moving conductor in static magnetic field); Combined EMF in rotating machine windings.",
      "Maxwell's Inconsistency & Displacement Current: Inadequacy of Ampere's circuital law $\\nabla \\times \\mathbf{H} = \\mathbf{J}$ for time-varying fields: divergence of curl is identically zero ($\\nabla \\cdot (\\nabla \\times \\mathbf{H}) = 0$), but continuity equation requires $\\nabla \\cdot \\mathbf{J} = -\\frac{\\partial \\rho_v}{\\partial t} \\ne 0$; Maxwell's resolution: addition of Displacement Current Density $\\mathbf{J}_d = \\frac{\\partial \\mathbf{D}}{\\partial t}$.",
      "Total Current Density in Ampere-Maxwell Law: $\\mathbf{J}_{total} = \\mathbf{J}_{c} + \\mathbf{J}_{d} = \\sigma \\mathbf{E} + \\frac{\\partial \\mathbf{D}}{\\partial t}$; Conduction current vs displacement current in parallel-plate capacitor dielectric; Displacement current ensures continuity of total current across capacitor plates.",
      "Maxwell's Four Equations: Complete formulation in Differential Form: (1) $\\nabla \\cdot \\mathbf{D} = \\rho_v$, (2) $\\nabla \\cdot \\mathbf{B} = 0$, (3) $\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}$, (4) $\\nabla \\times \\mathbf{H} = \\mathbf{J} + \\frac{\\partial \\mathbf{D}}{\\partial t}$; Integral Form via Divergence and Stokes' theorems; Time-harmonic phasor form ($\\partial / \\partial t \\to j\\omega$).",
      "Retarded Potentials and Wave Equations: Electromagnetic potentials in dynamic fields; Lorentz Gauge Condition: $\\nabla \\cdot \\mathbf{A} = -\\mu \\epsilon \\frac{\\partial V}{\\partial t}$; Decoupled Inhomogeneous Wave Equations: $\\nabla^2 V - \\mu \\epsilon \\frac{\\partial^2 V}{\\partial t^2} = -\\frac{\\rho_v}{\\epsilon}$ and $\\nabla^2 \\mathbf{A} - \\mu \\epsilon \\frac{\\partial^2 \\mathbf{A}}{\\partial t^2} = -\\mu \\mathbf{J}$; Retarded potential solutions accounting for propagation delay $t' = t - R/u$.",
      "Poynting's Theorem & Electromagnetic Power Flow: Derivation from Maxwell's curl equations: $-\\nabla \\cdot (\\mathbf{E} \\times \\mathbf{H}) = \\mathbf{J} \\cdot \\mathbf{E} + \\frac{\\partial}{\\partial t}\\left(\\frac{1}{2}\\epsilon E^2 + \\frac{1}{2}\\mu H^2\\right)$; Poynting Vector $\\mathbf{S} = \\mathbf{E} \\times \\mathbf{H}$ representing instantaneous directional power density in $\\text{W/m}^2$; Time-average Poynting vector: $\\mathbf{S}_{avg} = \\frac{1}{2} \\text{Re}\\{\\mathbf{E} \\times \\mathbf{H}^*\\}$.",
      "Electromagnetic Plane Waves in Lossless Media: Helmholtz wave equations in source-free lossless dielectric: $\\nabla^2 \\mathbf{E} - \\mu \\epsilon \\frac{\\partial^2 \\mathbf{E}}{\\partial t^2} = 0$; Uniform Plane Wave (UPW) propagating in $+z$ direction: $\\mathbf{E}(z,t) = E_0 \\cos(\\omega t - \\beta z) \\hat{\\mathbf{a}}_x$; Phase velocity $u_p = \\frac{1}{\\sqrt{\\mu \\epsilon}} = c / \\sqrt{\\mu_r \\epsilon_r}$; Phase constant $\\beta = \\omega \\sqrt{\\mu \\epsilon} = \\frac{2\\pi}{\\lambda}$; Intrinsic / Wave Impedance $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}}$ ($377\\ \\Omega$ in free space); Transverse Electromagnetic (TEM) wave nature ($\\mathbf{E} \\perp \\mathbf{H} \\perp \\hat{\\mathbf{a}}_k$).",
      "Wave Propagation in Lossy Media and Conductors: Complex permittivity and loss tangent $\\tan\\theta = \\frac{\\sigma}{\\omega \\epsilon}$; Propagation constant $\\gamma = \\alpha + j\\beta = \\sqrt{j\\omega\\mu(\\sigma + j\\omega\\epsilon)}$; Attenuation constant $\\alpha$ (nepers/m); Good dielectrics ($\\sigma \\ll \\omega \\epsilon$) vs Good conductors ($\\sigma \\gg \\omega \\epsilon$); Skin depth / penetration depth in conductors: $\\delta = \\sqrt{\\frac{2}{\\omega \\mu \\sigma}} = \\frac{1}{\\alpha}$; Surface resistance $R_s = \\frac{1}{\\sigma \\delta}$.",
      "University Examination Strategy: State and prove Maxwell's equations in both point and integral forms, derive the wave equation for electric and magnetic fields in dielectric media, compute displacement current density in capacitors, and calculate skin depth, wave impedance, and average power density."
    ],
    "keyPoints": [
      "Faraday's Law (Point Form): $\\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}$.",
      "Maxwell-Ampere Law: $\\nabla \\times \\mathbf{H} = \\mathbf{J} + \\frac{\\partial \\mathbf{D}}{\\partial t}$.",
      "Displacement Current Density: $\\mathbf{J}_d = \\frac{\\partial \\mathbf{D}}{\\partial t} = \\epsilon \\frac{\\partial \\mathbf{E}}{\\partial t}$.",
      "Lorentz Gauge Condition: $\\nabla \\cdot \\mathbf{A} = -\\mu \\epsilon \\frac{\\partial V}{\\partial t}$.",
      "Poynting Vector: $\\mathbf{S} = \\mathbf{E} \\times \\mathbf{H}$ (in $\\text{W/m}^2$).",
      "Average Poynting Vector: $\\mathbf{S}_{avg} = \\frac{1}{2} \\text{Re}\\{\\mathbf{E} \\times \\mathbf{H}^*\\}$.",
      "Free Space Intrinsic Impedance: $\\eta_0 = \\sqrt{\\frac{\\mu_0}{\\epsilon_0}} \\approx 120\\pi \\approx 377\\ \\Omega$.",
      "Speed of Light in Free Space: $c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} \\approx 3 \\times 10^8\\text{ m/s}$.",
      "Conductor Skin Depth: $\\delta = \\sqrt{\\frac{2}{\\omega \\mu \\sigma}} = \\frac{1}{\\sqrt{\\pi f \\mu \\sigma}}$.",
      "Exam Gold Tip: In a good conductor, the magnetic field lags the electric field by exactly $45^\\circ$ ($j\\omega\\mu/(\\sigma + j\\omega\\epsilon) \\approx \\sqrt{\\omega\\mu/\\sigma} \\angle 45^\\circ$)."
    ]
  },
  "strength of materials:::u1": {
    "highlights": [
      "Stress and Strain Concepts: Concept of stress as internal resistive force per unit area; Normal stress (tensile, compressive: $\\sigma = P/A$) and Shear stress ($\\tau = P_s/A$); Engineering strain vs True strain: $\\epsilon_{eng} = \\frac{\\Delta L}{L_0}$, $\\epsilon_{true} = \\ln\\left(1 + \\epsilon_{eng}\\right)$; Stress-strain diagram for mild steel (proportional limit, elastic limit, upper and lower yield points, plastic plateau, strain hardening, necking, ultimate tensile strength, fracture point).",
      "Generalized Hooke's Law & Elastic Constants: Hooke's law in 3D for isotropic materials; Modulus of Elasticity ($E$), Shear Modulus ($G$), Bulk Modulus ($K$), Poisson's ratio ($\\nu = -\\frac{\\epsilon_{lateral}}{\\epsilon_{axial}}$); Fundamental interrelationships: $E = 2G(1 + \\nu) = 3K(1 - 2\\nu) = \\frac{9KG}{3K + G}$; Limits of Poisson's ratio ($0 \\le \\nu \\le 0.5$ for isotropic materials, $\\nu = 0.5$ for incompressible materials).",
      "Axially Loaded Members & Stepped Bars: Elongation of prismatic bar: $\\delta = \\frac{P L}{A E}$; Compound and stepped bars subjected to multiple axial forces; Self-weight elongation: uniform prismatic bar hanging under gravity ($\\delta_{sw} = \\frac{\\rho g L^2}{2E} = \\frac{W L}{2 A E}$, exactly half the elongation caused by end load $W$); Bar of uniform strength (exponentially tapering cross-section $A(x) = A_0 e^{\\frac{\\rho g x}{\\sigma}}$).",
      "Statically Indeterminate Axially Loaded Structures: Degree of static indeterminacy; Compatibility of deformations; Bars connected in parallel (equal strain $\\delta_1 = \\delta_2$, load sharing $P = P_1 + P_2$); Bars connected in series between rigid fixed supports ($P_1 = P_2$, total elongation $\\delta_1 + \\delta_2 = 0$).",
      "Thermal Stresses & Temperature Effects: Free thermal strain $\\epsilon_{th} = \\alpha \\Delta T$; Thermal stress in fully constrained bar: $\\sigma_{th} = -E \\alpha \\Delta T$ (compressive on heating, tensile on cooling); Thermal stress in bar with yieldable support with gap $\\Delta$: $\\sigma_{th} = -E\\left(\\alpha \\Delta T - \\frac{\\Delta}{L}\\right)$; Thermal stresses in composite bars (differential thermal expansion).",
      "Strain Energy and Impact Loading: Strain energy stored in elastic deformation: $U = \\int_0^L \\frac{P^2 dx}{2 A E} = \\frac{1}{2} P \\delta = \\frac{\\sigma^2}{2E} \\times \\text{Volume}$; Modulus of resilience (maximum elastic strain energy density); Modulus of toughness (total energy absorption up to fracture); Impact loading and dynamic load factor: $n = 1 + \\sqrt{1 + \\frac{2 h}{\\delta_{st}}}$; Instantaneous maximum stress: $\\sigma_{max} = \\sigma_{st} \\left(1 + \\sqrt{1 + \\frac{2 h}{\\delta_{st}}}\\right)$.",
      "Two-Dimensional Plane Stress Analysis: Stresses on inclined plane oriented at angle $\\theta$ from vertical: Normal stress $\\sigma_\\theta = \\frac{\\sigma_x + \\sigma_y}{2} + \\frac{\\sigma_x - \\sigma_y}{2}\\cos(2\\theta) + \\tau_{xy}\\sin(2\\theta)$; Shear stress $\\tau_\\theta = -\\frac{\\sigma_x - \\sigma_y}{2}\\sin(2\\theta) + \\tau_{xy}\\cos(2\\theta)$; Maximum shear stress: $\\tau_{max} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.",
      "Principal Stresses and Principal Planes: Planes of zero shear stress; Principal plane orientation: $\\tan(2\\theta_p) = \\frac{2\\tau_{xy}}{\\sigma_x - \\sigma_y}$; Principal stresses: $\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$; Planes of maximum shear stress are inclined at $45^\\circ$ to principal planes.",
      "Mohr's Circle of Plane Stress: Graphical representation of 2D stress transformation; Center coordinates $(C, 0) = \\left(\\frac{\\sigma_x + \\sigma_y}{2}, 0\\right)$; Radius $R = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$; Graphical determination of principal stresses, principal directions, and stresses on arbitrary oblique planes; Mohr's circle for pure shear and hydrostatic stress.",
      "University Examination Strategy: Calculate composite bar load sharing and thermal stresses with yieldable supports, compute instantaneous dynamic stresses under falling impact loads, derive normal and shear transformation formulas for oblique planes, and construct Mohr's circle to determine principal stresses."
    ],
    "keyPoints": [
      "Hooke's Moduli Relationship: $E = 2G(1 + \\nu) = 3K(1 - 2\\nu) = \\frac{9KG}{3K + G}$.",
      "Bar Elongation Under Axial Load: $\\delta = \\frac{P L}{A E}$.",
      "Self-Weight Elongation of Bar: $\\delta_{sw} = \\frac{W L}{2 A E}$ (half that of equivalent end load).",
      "Thermal Stress in Constrained Bar: $\\sigma_{th} = E \\alpha \\Delta T$.",
      "Dynamic Impact Load Factor: $n = 1 + \\sqrt{1 + \\frac{2h}{\\delta_{st}}}$.",
      "Principal Stresses Equation: $\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.",
      "Principal Angle Formula: $\\tan(2\\theta_p) = \\frac{2\\tau_{xy}}{\\sigma_x - \\sigma_y}$.",
      "Max In-Plane Shear Stress: $\\tau_{max} = \\frac{\\sigma_1 - \\sigma_2}{2} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.",
      "Mohr's Circle Center and Radius: Center at $\\left(\\frac{\\sigma_x + \\sigma_y}{2}, 0\\right)$ and radius $R = \\tau_{max}$.",
      "Exam Gold Tip: On principal planes, the shear stress is identically zero; on planes of maximum shear stress, the normal stress is equal to the average normal stress $\\sigma_{avg} = (\\sigma_x + \\sigma_y)/2$."
    ]
  },
  "strength of materials:::u2": {
    "highlights": [
      "Classification of Beams and Supports: Structural beam types (Cantilever, Simply Supported, Overhanging, Fixed, Continuous); Support varieties (Roller: 1 reaction force normal to support; Pin/Hinge: 2 reaction forces $R_x, R_y$; Fixed/Built-in: 3 reactions $R_x, R_y, M_z$); Static determinacy criteria ($3$ equilibrium equations for 2D beams: $\\sum F_x = 0, \\sum F_y = 0, \\sum M = 0$).",
      "Types of Loading on Beams: Concentrated point loads, Uniformly Distributed Loads (UDL, $w\\text{ kN/m}$), Uniformly Varying Loads (UVL, triangular and trapezoidal loads), Applied concentrated couples / bending moments.",
      "Internal Force Resultants: Shear Force ($V$ or $F$): algebraic sum of all vertical external forces acting on either left or right portion of beam cut section; Bending Moment ($M$): algebraic sum of moments of all external forces acting about the section.",
      "Sign Conventions for SF and BM: Shear Force: positive when upward forces to the left or downward forces to the right create clockwise shearing couple; Bending Moment: positive sagging (concave upward, compression in top fiber, tension in bottom fiber) and negative hogging (convex upward, tension in top fiber, compression in bottom fiber).",
      "Fundamental Differential Relationships: Differential balance of beam element: $\\frac{dV}{dx} = -w(x)$ (slope of shear force diagram equals negative load intensity); $\\frac{dM}{dx} = V(x)$ (slope of bending moment diagram equals shear force); Integrating yields: $V(x_2) - V(x_1) = -\\int_{x_1}^{x_2} w(x) dx$ and $M(x_2) - M(x_1) = \\int_{x_1}^{x_2} V(x) dx$ (change in bending moment equals area under shear force diagram).",
      "Maximum Bending Moment Location: Since $\\frac{dM}{dx} = V$, bending moment reaches local mathematical extremum (maximum or minimum) at sections where shear force passes through zero ($V = 0$) or changes sign abruptly under a concentrated point load.",
      "Point of Contraflexure (Inflection Point): Section along beam where bending moment changes sign (passes through zero: $M = 0$); Physical transition point between sagging and hogging curvature; Crucial for positioning reinforcement lap splices in reinforced concrete structures.",
      "SFD and BMD for Standard Load Cases: (1) Cantilever with end point load: triangular SFD, triangular BMD; (2) Cantilever with full UDL: triangular SFD ($V_{max} = wL$), parabolic BMD ($M_{max} = -wL^2/2$); (3) Simply supported beam with central point load: rectangular SFD, triangular BMD ($M_{max} = PL/4$); (4) Simply supported beam with full UDL: linear SFD ($V_{max} = wL/2$), quadratic parabolic BMD ($M_{max} = wL^2/8$).",
      "Beams with Overhangs & UVL: Simply supported beam with overhangs subjected to combined UDL and concentrated loads; Occurrence of multiple points of contraflexure; Triangular UVL on simply supported beam: parabolic SFD, cubic parabolic BMD ($M_{max} = \\frac{w_0 L^2}{9\\sqrt{3}}$ at $x = L/\\sqrt{3}$).",
      "University Examination Strategy: Construct complete Shear Force and Bending Moment diagrams for overhanging beams with combined UDL, point loads, and applied concentrated couples, calculate the exact locations of maximum bending moments, and determine all points of contraflexure."
    ],
    "keyPoints": [
      "Load-Shear Differential Relation: $\\frac{dV}{dx} = -w(x)$.",
      "Shear-Moment Differential Relation: $\\frac{dM}{dx} = V(x)$.",
      "Moment Area Relation: $M(b) - M(a) = \\int_a^b V(x) dx$ (area under SFD).",
      "Max Bending Moment Criterion: Occurs where shear force is zero ($V = 0$) or crosses zero.",
      "Point of Contraflexure Definition: Section where bending moment changes sign ($M = 0$).",
      "Simply Supported UDL Max Moment: $M_{max} = \\frac{w L^2}{8}$ at midspan.",
      "Simply Supported Point Load Max Moment: $M_{max} = \\frac{P L}{4}$ at midspan.",
      "Cantilever End Load Max Moment: $M_{max} = -P L$ at fixed support.",
      "Cantilever UDL Max Moment: $M_{max} = -\\frac{w L^2}{2}$ at fixed support.",
      "Exam Gold Tip: A concentrated couple produces an abrupt vertical jump discontinuity in the bending moment diagram equal to the magnitude of the couple, without affecting the shear force diagram."
    ]
  },
  "strength of materials:::u3": {
    "highlights": [
      "Theory of Pure Bending (Euler-Bernoulli): Assumptions: beam is initially straight, transverse plane sections remain plane and normal to neutral axis after bending (Bernoulli hypothesis), material is homogeneous, isotropic, obeys Hooke's law, radius of curvature $R$ is large compared to cross-sectional dimensions, elastic modulus in tension equals that in compression.",
      "Bending Equation Derivation: Strain variation: $\\epsilon(y) = y / R$; Stress variation: $\\sigma(y) = E y / R$; Neutral axis passes through centroid of cross-section ($\\int y dA = 0$); Resisting moment: $M = \\int y \\sigma dA = \\frac{E}{R} \\int y^2 dA = \\frac{E I}{R}$; Unified Flexure Formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$.",
      "Section Modulus & Beam Economy: Section modulus $Z = I / y_{max}$; Maximum bending stress: $\\sigma_{max} = M / Z$; Rectangular section ($Z = b d^2 / 6$); Circular solid section ($Z = \\pi D^3 / 32$); Hollow circular tube ($Z = \\frac{\\pi(D^4 - d^4)}{32 D}$); I-section and wide-flange beams (flanges resist majority of bending moment, providing superior strength-to-weight ratio).",
      "Beams of Composite / Flitched Sections: Beams composed of two materials bonded together (e.g. timber flitched with steel plates); Strain compatibility at interface: $\\epsilon_1 = \\epsilon_2$; Modular ratio $m = E_1 / E_2$; Equivalent transformed section method: replacing material 1 with equivalent width $m b_1$ of material 2.",
      "Shear Stresses in Transverse Beams: Existence of horizontal shear stresses accompanying transverse shear force $V$; Derivation of shear stress formula: $\\tau = \\frac{V Q}{I b}$ where $Q = A \\bar{y}$ is first moment of area above the level of interest, $I$ moment of inertia of entire section, $b$ width of beam at that level.",
      "Shear Stress Distribution Across Cross-Sections: (1) Rectangular section: parabolic distribution, zero at top/bottom fibers, maximum at neutral axis: $\\tau_{max} = 1.5 \\tau_{avg} = \\frac{3 V}{2 A}$; (2) Circular solid section: parabolic distribution: $\\tau_{max} = \\frac{4}{3} \\tau_{avg} = \\frac{4 V}{3 A}$; (3) Triangular section: maximum shear stress occurs at mid-height $h/2$ ($\\tau_{max} = 1.5 \\tau_{avg}$), while stress at neutral axis $h/3$ is $\\tau_{NA} = \\frac{4}{3} \\tau_{avg}$.",
      "Shear Stress in Flanged Sections (I and T Beams): Flanges carry negligible shear stress (abrupt width expansion drops $\\tau$); Web carries almost entire transverse shear force ($>90\\%$); Parabolic distribution in web with steep step increase at flange-web junctions; Maximum shear stress occurs at neutral axis in web: $\\tau_{max} = \\frac{V}{I b_w} [Q_{flange} + Q_{web,half}]$.",
      "Shear Flow & Fastener Spacing: Shear flow $q = \\tau b = \\frac{V Q}{I}$ (shear force per unit length); Application in built-up beams (welded plates, glued timber, bolted girders); Pitch / spacing of bolts/rivets resisting horizontal shear: $p = \\frac{n F_v}{q} = \\frac{n F_v I}{V Q}$ (where $F_v$ is shear capacity per fastener, $n$ number of fasteners across section).",
      "Combined Direct and Bending Stresses: Short columns subjected to eccentric axial load $P$ with eccentricity $e$; Total stress: $\\sigma = \\frac{P}{A} \\pm \\frac{P e y}{I} = \\frac{P}{A}\\left(1 \\pm \\frac{e y}{r^2}\\right)$; Core / Kern of section: region within which axial load can be applied without causing tensile stress; Middle-third rule for rectangular sections ($e \\le d/6$); Middle-fourth rule for solid circular shafts ($e \\le D/8$).",
      "University Examination Strategy: Apply the bending equation $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ to compute maximum fiber stresses in flitched beams, sketch shear stress distributions across I and T sections calculating values at all junction interfaces, and determine the kern boundary for structural masonry piers."
    ],
    "keyPoints": [
      "Flexure Formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$.",
      "Section Modulus Definition: $Z = \\frac{I}{y_{max}}$ with $\\sigma_{max} = \\frac{M}{Z}$.",
      "Rectangular Beam Section Modulus: $Z = \\frac{b d^2}{6}$.",
      "Shear Stress in Beams: $\\tau = \\frac{V Q}{I b}$ where $Q = A \\bar{y}$.",
      "Rectangular Max Shear Stress: $\\tau_{max} = 1.5 \\tau_{avg} = \\frac{3V}{2bd}$ at neutral axis.",
      "Circular Max Shear Stress: $\\tau_{max} = \\frac{4}{3} \\tau_{avg} = \\frac{4V}{3\\pi R^2}$ at neutral axis.",
      "Shear Flow Equation: $q = \\tau b = \\frac{V Q}{I}$ N/m.",
      "Fastener Pitch Formula: $p = \\frac{n R_{shear} I}{V Q}$.",
      "Kern Middle-Third Rule: Rectangular column load must lie within middle third ($e_x \\le b/6, e_y \\le d/6$) to avoid tension.",
      "Exam Gold Tip: In I-beams, the flanges carry almost all of the bending moment (normal stress), while the thin web carries almost all of the transverse shear force (shear stress)."
    ]
  },
  "strength of materials:::u4": {
    "highlights": [
      "Governing Differential Equation of Elastic Curve: Curvature relation $\\frac{1}{R} \\approx \\frac{d^2 y}{dx^2}$; Combining with flexure formula yields: $E I \\frac{d^2 y}{dx^2} = M(x)$; Bending stiffness / Flexural rigidity $E I$; Sign conventions: upward deflection positive $+y$, counterclockwise slope positive $\\theta = \\frac{dy}{dx}$.",
      "Double Integration Method: Successive analytical integration of governing equation: $E I \\frac{dy}{dx} = \\int M(x) dx + C_1$; $E I y(x) = \\int\\left(\\int M(x) dx\\right) dx + C_1 x + C_2$; Determination of integration constants $C_1, C_2$ from kinematic boundary conditions (Simply supported: $y(0)=0, y(L)=0$; Cantilever: $y(0)=0, \\theta(0)=0$).",
      "Macaulay's Bracket Method: Discontinuous loading formulation using single comprehensive moment equation; Macaulay brackets $[x - a]^n$ evaluated as $(x - a)^n$ for $x > a$ and identically $0$ for $x \\le a$; Integration rule: $\\int [x - a]^n dx = \\frac{[x - a]^{n+1}}{n+1}$; Eliminates multiple piecewise constants of integration for multiple point loads, partial UDLs, and concentrated moments.",
      "Moment-Area Theorems (Mohr's Theorems): (1) Mohr's First Theorem: change in slope between two points $A$ and $B$ equals the area of the $M / (E I)$ diagram between them: $\\theta_B - \\theta_A = \\int_A^B \\frac{M}{E I} dx$; (2) Mohr's Second Theorem: vertical tangential deviation $t_{B/A}$ of point $B$ on elastic curve from tangent drawn at $A$ equals first moment of $M / (E I)$ area about point $B$: $t_{B/A} = \\int_A^B \\frac{M}{E I} x_B dx = \\frac{A \\bar{x}_B}{E I}$.",
      "Conjugate Beam Method: Imaginary beam of identical length; Principles: (1) Deflection in real beam = Bending moment in conjugate beam ($y = M_{conj}$); (2) Slope in real beam = Shear force in conjugate beam ($\\theta = V_{conj}$); Loading on conjugate beam is the real beam's $M / (E I)$ diagram; Conjugate support translations (Real Simple Pin $\\to$ Conjugate Pin; Real Fixed $\\to$ Conjugate Free; Real Free $\\to$ Conjugate Fixed; Real Internal Hinge $\\to$ Conjugate Internal Roller).",
      "Strain Energy & Castigliano's Theorem: Bending strain energy: $U = \\int_0^L \\frac{M^2(x) dx}{2 E I}$; Castigliano's First Theorem: $\\frac{\\partial U}{\\partial \\Delta_i} = P_i$; Castigliano's Second Theorem: deflection at point of applied concentrated force equals partial derivative of total strain energy with respect to that force: $\\Delta_i = \\frac{\\partial U}{\\partial P_i} = \\int_0^L \\frac{M(x)}{E I}\\left(\\frac{\\partial M}{\\partial P_i}\\right) dx$; Fictitious dummy load method.",
      "Principle of Virtual Work / Unit Load Method: External virtual work equals internal virtual strain energy: $1 \\cdot \\Delta = \\int_0^L \\frac{M(x) m(x)}{E I} dx$ where $M(x)$ is real bending moment and $m(x)$ is bending moment caused by unit virtual load applied at point of interest in direction of desired deflection.",
      "Standard Deflection and Slope Formulas: (1) Cantilever with end load $P$: $\\theta_{max} = \\frac{P L^2}{2 E I}, y_{max} = \\frac{P L^3}{3 E I}$; (2) Cantilever with full UDL $w$: $\\theta_{max} = \\frac{w L^3}{6 E I}, y_{max} = \\frac{w L^4}{8 E I}$; (3) Simply supported with central load $P$: $\\theta = \\frac{P L^2}{16 E I}, y_{max} = \\frac{P L^3}{48 E I}$; (4) Simply supported with full UDL $w$: $\\theta = \\frac{w L^3}{24 E I}, y_{max} = \\frac{5 w L^4}{384 E I}$.",
      "Deflections in Statically Indeterminate Beams: Propped cantilevers (fixed at one end, roller support at other end); Redundant reaction determination via deflection compatibility; Fixed-end beams: fixed-end moments $M_{FA} = M_{FB} = -wL^2/12$ under UDL, maximum midspan deflection $y_{max} = \\frac{w L^4}{384 E I}$ (one-fifth of simply supported deflection).",
      "University Examination Strategy: Solve beam slopes and midspan deflections using Macaulay's method for asymmetric loads, apply Mohr's moment-area theorems to stepped cross-section beams, and calculate propped cantilever redundant reactions using deflection compatibility."
    ],
    "keyPoints": [
      "Governing Differential Equation: $E I \\frac{d^2 y}{dx^2} = M(x)$.",
      "Mohr's First Theorem (Slope): $\\theta_{B/A} = \\text{Area of } \\frac{M}{EI} \\text{ diagram between } A \\text{ and } B$.",
      "Mohr's Second Theorem (Deflection): $t_{B/A} = \\frac{A \\bar{x}_B}{EI}$.",
      "Conjugate Beam Principles: Slope $\\theta = V_{conj}$, Deflection $y = M_{conj}$.",
      "Castigliano Deflection Theorem: $\\Delta_i = \\frac{\\partial U}{\\partial P_i} = \\int \\frac{M}{EI} \\frac{\\partial M}{\\partial P_i} dx$.",
      "Cantilever End Point Load Deflection: $y_{max} = \\frac{P L^3}{3 E I}$.",
      "Cantilever Full UDL Deflection: $y_{max} = \\frac{w L^4}{8 E I}$.",
      "Simply Supported Point Load Deflection: $y_{max} = \\frac{P L^3}{48 E I}$.",
      "Simply Supported Full UDL Deflection: $y_{max} = \\frac{5 w L^4}{384 E I}$.",
      "Exam Gold Tip: When using Macaulay's method, always extend partial UDLs to the extreme right end of the beam and add an equal and opposite upward UDL to maintain mathematical equilibrium."
    ]
  },
  "strength of materials:::u5": {
    "highlights": [
      "Theory of Pure Torsion in Circular Shafts: Assumptions: shaft is straight and uniform circular cross-section, plane cross-sections remain plane and do not warp, radii remain straight, material obeys Hooke's law in shear; Shear strain variation: $\\gamma(r) = r \\frac{\\theta}{L}$; Shear stress variation: $\\tau(r) = G \\gamma = \\frac{G r \\theta}{L}$.",
      "Torsion Equation Derivation: Internal torque $T = \\int r \\tau dA = \\frac{G \\theta}{L} \\int r^2 dA = \\frac{G \\theta}{L} J$ where $J$ is polar moment of inertia; Unified Torsion Formula: $\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G \\theta}{L}$; Polar section modulus $Z_p = J / R = \\pi D^3 / 16$ (solid shaft); Torsional rigidity $G J$; Torsional stiffness $k_t = G J / L$.",
      "Hollow Shafts vs Solid Shafts: Polar moment of inertia for hollow shaft: $J = \\frac{\\pi(D^4 - d^4)}{32}$; Weight and strength comparison: hollow shafts possess significantly higher torsional strength-to-weight ratio because material is positioned at large radii where shear stresses are highest; Percentage weight reduction.",
      "Power Transmission and Shaft Design: Power transmitted: $P = \\frac{2\\pi N T}{60}$ Watts ($T$ in N-m, $N$ in rpm); Design criteria: (1) Strength criterion (limiting maximum shear stress $\\tau_{max} \\le \\tau_{allow}$); (2) Rigidity criterion (limiting maximum angle of twist $\\theta \\le \\theta_{allow}$, typically $1^\\circ$ per meter length).",
      "Shafts in Series and Parallel: Series connection (equal torque $T_1 = T_2 = T$, total angle of twist $\\theta = \\theta_1 + \\theta_2$); Parallel connection (common angle of twist $\\theta_1 = \\theta_2 = \\theta$, load sharing $T = T_1 + T_2$); Statically indeterminate stepped shafts fixed at both ends.",
      "Combined Bending and Torsion: Circular shaft subjected simultaneously to bending moment $M$ and torque $T$; Principal stresses: $\\sigma_{1,2} = \\frac{16}{\\pi D^3} (M \\pm \\sqrt{M^2 + T^2})$; Equivalent Bending Moment: $M_e = \\frac{1}{2} (M + \\sqrt{M^2 + T^2})$; Equivalent Twisting Moment: $T_e = \\sqrt{M^2 + T^2}$; Maximum shear stress: $\\tau_{max} = \\frac{16 T_e}{\\pi D^3}$.",
      "Theory of Columns & Elastic Buckling: Columns subjected to axial compressive loads; Stable, neutral, and unstable equilibrium states; Buckling vs crushing failure; Slenderness ratio $\\lambda = L_e / k_{min}$ (where radius of gyration $k = \\sqrt{I / A}$).",
      "Euler's Buckling Theory: Differential equation of buckled column: $E I \\frac{d^2 y}{dx^2} = -P y$; Critical Euler Buckling Load: $P_{cr} = \\frac{\\pi^2 E I}{L_e^2}$; Critical buckling stress: $\\sigma_{cr} = \\frac{\\pi^2 E}{(L_e / k)^2} = \\frac{\\pi^2 E}{\\lambda^2}$; Limitations of Euler's formula: valid only for long slender columns where $\\sigma_{cr} \\le \\sigma_{yield}$ (slenderness ratio $\\lambda \\ge \\lambda_{critical}$).",
      "Effective Length ($L_e$) for Different End Conditions: (1) Both ends hinged/pinned: $L_e = L$ ($P_{cr} = \\frac{\\pi^2 E I}{L^2}$); (2) Both ends fixed: $L_e = L/2$ ($P_{cr} = \\frac{4\\pi^2 E I}{L^2}$); (3) One end fixed, other pinned: $L_e = L/\\sqrt{2} \\approx 0.707 L$ ($P_{cr} = \\frac{2\\pi^2 E I}{L^2}$); (4) One end fixed, other free: $L_e = 2L$ ($P_{cr} = \\frac{\\pi^2 E I}{4 L^2}$).",
      "Rankine-Gordon Empirical Formula: Unified formula for both short and intermediate columns: $\\frac{1}{P_R} = \\frac{1}{P_c} + \\frac{1}{P_E}$ (where $P_c = \\sigma_c A$ crushing load, $P_E$ Euler load); Rankine Buckling Load: $P_R = \\frac{\\sigma_c A}{1 + a (L_e / k)^2}$ where $a = \\frac{\\sigma_c}{\\pi^2 E}$ is Rankine's empirical constant."
    ],
    "keyPoints": [
      "Torsion Formula: $\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G \\theta}{L}$.",
      "Solid Shaft Polar Modulus: $Z_p = \\frac{\\pi D^3}{16}$.",
      "Power Transmitted by Shaft: $P = \\frac{2\\pi N T}{60}$ Watts.",
      "Equivalent Twisting Moment: $T_e = \\sqrt{M^2 + T^2}$.",
      "Equivalent Bending Moment: $M_e = \\frac{1}{2}(M + \\sqrt{M^2 + T^2})$.",
      "Euler Critical Buckling Load: $P_{cr} = \\frac{\\pi^2 E I}{L_e^2}$.",
      "Effective Length Conditions: Hinged-Hinged: $L$, Fixed-Fixed: $0.5L$, Fixed-Hinged: $0.707L$, Fixed-Free: $2L$.",
      "Column Slenderness Ratio: $\\lambda = \\frac{L_e}{k_{min}} = \\frac{L_e}{\\sqrt{I/A}}$.",
      "Rankine-Gordon Formula: $P_R = \\frac{\\sigma_c A}{1 + a(L_e/k)^2}$.",
      "Exam Gold Tip: Always calculate radius of gyration using the minimum moment of inertia ($I_{min}$), because a column will always buckle about its weakest principal axis."
    ]
  },
  "thermodynamics:::u1": {
    "highlights": [
      "Fundamental Definitions & System Taxonomies: System, surroundings, boundary (real, imaginary, fixed, movable); Closed system (control mass: mass fixed, energy transfers across boundary), Open system (control volume: mass and energy cross control surface), Isolated system (neither mass nor energy transfer, e.g. universe); Thermodynamic state, property (intensive: independent of mass e.g. $T, P, \\rho$; extensive: dependent on mass e.g. $m, V, U, H$).",
      "Thermodynamic Equilibrium & Zeroth Law: Thermodynamic equilibrium requires simultaneous thermal equilibrium (uniform $T$), mechanical equilibrium (uniform $P$), phase equilibrium, and chemical equilibrium; Zeroth Law of Thermodynamics: if two bodies are in thermal equilibrium with a third body, they are in thermal equilibrium with each other; Foundation of thermometry and temperature scales (Celsius, Kelvin, Fahrenheit).",
      "Quasi-Static Process & Work Transfer Modes: Reversible quasi-static process (infinitely slow succession of equilibrium states); Boundary work / Displacement work in closed systems: $W = \\int_{1}^{2} P dV$; Work as path-dependent function (inexact differential $\\delta W$); Work evaluation for standard processes: (1) Isobaric ($W = P(V_2 - V_1)$); (2) Isochoric ($W = 0$); (3) Isothermal ideal gas ($W = P_1 V_1 \\ln(V_2/V_1)$); (4) Polytropic $P V^n = C$ ($W = \\frac{P_1 V_1 - P_2 V_2}{n - 1}$); (5) Reversible adiabatic $P V^\\gamma = C$ ($W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$).",
      "First Law of Thermodynamics for Closed Cycles: Joule's experiments; Conservation of energy; For a closed system undergoing a cyclic process: $\\oint \\delta Q = \\oint \\delta W$ (net heat transfer equals net work transfer); Proves that it is impossible to construct a Perpetual Motion Machine of the First Kind (PMM-I, machine producing work without energy input).",
      "First Law for Non-Cyclic Change of State: Internal energy as a thermodynamic property: $d U = \\delta Q - \\delta W$ or $\\delta Q = d U + P dV$ (for reversible closed system); Proof that internal energy $U$ is a point function and state variable (exact differential $\\oint d U = 0$); Enthalpy definition: $H = U + P V$; Specific heats: $c_v = \\left(\\frac{\\partial u}{\\partial T}\\right)_v$, $c_p = \\left(\\frac{\\partial h}{\\partial T}\\right)_p$; Mayer's relation: $c_p - c_v = R$, ratio of specific heats $\\gamma = c_p / c_v$.",
      "First Law for Open Systems (Steady Flow Energy Equation - SFEE): Control volume mass balance: $\\sum \\dot{m}_{in} = \\sum \\dot{m}_{out}$; Energy rate balance under steady flow: $\\dot{Q} - \\dot{W}_s = \\sum \\dot{m}_{out} \\left(h_{out} + \\frac{V_{out}^2}{2} + g z_{out}\\right) - \\sum \\dot{m}_{in} \\left(h_{in} + \\frac{V_{in}^2}{2} + g z_{in}\\right)$.",
      "Engineering Applications of SFEE: (1) Nozzle and Diffuser ($w_s = 0, q = 0 \\implies V_2 = \\sqrt{2(h_1 - h_2) + V_1^2}$); (2) Turbine ($q \\approx 0, \\Delta ke, \\Delta pe \\approx 0 \\implies w_T = h_1 - h_2$); (3) Compressor and Pump ($w_C = h_2 - h_1$); (4) Throttling Valve / Porous Plug ($w = 0, q = 0, \\Delta ke \\approx 0 \\implies h_1 = h_2$, isenthalpic process); (5) Heat Exchangers / Condensers / Boilers.",
      "Unsteady Flow Processes (Transient Control Volumes): Uniform-State Uniform-Flow (USUF) processes; Filling and emptying of rigid pressure vessels; Conservation of mass: $m_2 - m_1 = m_i - m_e$; Conservation of energy: $Q - W + m_i\\left(h_i + \\frac{V_i^2}{2} + g z_i\\right) - m_e\\left(h_e + \\frac{V_e^2}{2} + g z_e\\right) = m_2 u_2 - m_1 u_1$; Rigid tank filling: final internal energy equals supply enthalpy $u_2 = h_i \\implies T_2 = \\gamma T_i$.",
      "Free Expansion / Unresisted Expansion: Adiabatic expansion of gas into evacuated chamber; Work done against vacuum is zero ($W = 0$); Heat transfer is zero ($Q = 0$); By First Law: $\\Delta U = 0$; For ideal gas: $T_1 = T_2$ (highly irreversible constant internal energy process).",
      "University Examination Strategy: Apply the First Law to non-cyclic closed processes calculating internal energy changes, derive the general Steady Flow Energy Equation (SFEE) step-by-step from control volume principles, apply SFEE to steam nozzles, gas turbines, and throttles, and solve transient tank-filling problems."
    ],
    "keyPoints": [
      "First Law for Cyclic Process: $\\oint \\delta Q = \\oint \\delta W$.",
      "First Law Differential Form: $\\delta Q = d U + \\delta W$.",
      "Polytropic Work Formula: $W = \\frac{P_1 V_1 - P_2 V_2}{n - 1} = \\frac{m R (T_1 - T_2)}{n - 1}$.",
      "Ideal Gas Specific Heat Ratio: $\\gamma = \\frac{c_p}{c_v}$ and Mayer's relation $c_p - c_v = R$.",
      "Steady Flow Energy Equation (SFEE): $h_1 + \\frac{V_1^2}{2} + g z_1 + q = h_2 + \\frac{V_2^2}{2} + g z_2 + w_s$.",
      "Nozzle Exit Velocity Formula: $V_2 = \\sqrt{2(h_1 - h_2)}$ (when $V_1 \\approx 0$, $h$ in J/kg).",
      "Throttling Process Invariant: $h_1 = h_2$ (strictly constant enthalpy).",
      "PMM-I Definition: Imaginary perpetual machine that creates work from nothing without absorbing energy.",
      "Adiabatic Tank Charging Temperature: $T_2 = \\gamma T_i$ (for initially evacuated rigid vessel).",
      "Exam Gold Tip: In the nozzle exit velocity formula $V_2 = \\sqrt{2 \\Delta h}$, remember to multiply $\\Delta h$ in kJ/kg by 1000 to convert to J/kg before taking the square root."
    ]
  },
  "thermodynamics:::u2": {
    "highlights": [
      "Limitations of First Law & Necessity of Second Law: First law establishes energy conservation and equivalence between heat and work but cannot predict the spontaneous direction of natural processes or feasibility of energy transformations; Quality of energy (high-grade work vs low-grade heat).",
      "Thermal Energy Reservoirs: Heat Source (infinite heat capacity reservoir supplying heat without temperature change) and Heat Sink (absorbs heat without temperature change); Heat Engine (cyclic device converting absorbed heat into network output: thermal efficiency $\\eta_{th} = \\frac{W_{net}}{Q_H} = 1 - \\frac{Q_L}{Q_H}$); Refrigerator and Heat Pump (reverse cycles transferring heat from low to high temperature: $COP_{Ref} = \\frac{Q_L}{W_{in}}$, $COP_{HP} = \\frac{Q_H}{W_{in}} = COP_{Ref} + 1$).",
      "Statements of Second Law of Thermodynamics: (1) Kelvin-Planck Statement: impossible to construct a cyclic heat engine whose sole effect is to absorb heat from a single thermal reservoir and deliver an equivalent amount of work; Impossibility of Perpetual Motion Machine of the Second Kind (PMM-II, $\\eta = 100\\%$); (2) Clausius Statement: impossible to construct a cyclic device whose sole effect is the transfer of heat from a lower-temperature body to a higher-temperature body without external work input.",
      "Equivalence of Kelvin-Planck and Clausius Statements: Rigorous thermodynamic proof showing that violation of Kelvin-Planck statement leads directly to violation of Clausius statement, and vice-versa, demonstrating their complete physical equivalence.",
      "Reversible vs Irreversible Processes: Reversible process (ideal process that can be reversed leaving zero trace on system or surroundings); Sources of irreversibility: friction, unrestrained expansion, heat transfer across finite temperature difference, mixing of dissimilar substances, inelastic deformation, chemical reactions; Internally vs externally reversible.",
      "Carnot Cycle and Carnot Principles: Carnot Cycle (ideal four-step reversible cycle: 1-2 reversible isothermal heat addition, 2-3 reversible adiabatic expansion, 3-4 reversible isothermal heat rejection, 4-1 reversible adiabatic compression); Carnot Principles: (1) No heat engine operating between two given thermal reservoirs can be more efficient than a reversible Carnot engine; (2) All reversible engines operating between identical reservoirs have identical efficiency; Carnot efficiency: $\\eta_{Carnot} = 1 - \\frac{T_L}{T_H}$; Absolute Thermodynamic Temperature Scale.",
      "Clausius Inequality: For any closed thermodynamic cycle: $\\oint \\frac{\\delta Q}{T} \\le 0$; Proof using Carnot auxiliary engine; Strict equality $\\oint \\frac{\\delta Q}{T} = 0$ holds for internally reversible cycles; Strict inequality $\\oint \\frac{\\delta Q}{T} < 0$ holds for irreversible cycles; Impossible cycle if $\\oint \\frac{\\delta Q}{T} > 0$.",
      "Entropy as a Thermodynamic Property: Since $\\oint \\left(\\frac{\\delta Q}{T}\\right)_{rev} = 0$, the quantity $\\left(\\frac{\\delta Q}{T}\\right)_{rev}$ represents an exact differential of a state property named Entropy: $d S = \\left(\\frac{\\delta Q}{T}\\right)_{rev}$; Entropy is a point function; $T-s$ diagram and physical meaning of area under reversible path: $Q_{rev} = \\int T ds$.",
      "Principle of Increase of Entropy: For any real process: $d S \\ge \\frac{\\delta Q}{T}$; For an isolated system ($\\delta Q = 0$): $\\Delta S_{isolated} \\ge 0$; Universe as an isolated system: $\\Delta S_{univ} = \\Delta S_{sys} + \\Delta S_{surr} = S_{gen} \\ge 0$ (Entropy of isolated systems always increases for irreversible processes and remains constant for reversible processes; entropy can never decrease globally).",
      "University Examination Strategy: State Kelvin-Planck and Clausius statements proving their logical equivalence, derive Carnot engine efficiency $\\eta = 1 - T_L/T_H$, prove Clausius inequality $\\oint \\frac{\\delta Q}{T} \\le 0$, and evaluate total entropy generation $\\Delta S_{univ}$ for finite heat exchange processes."
    ],
    "keyPoints": [
      "Heat Engine Thermal Efficiency: $\\eta_{th} = \\frac{W_{net}}{Q_H} = 1 - \\frac{Q_L}{Q_H}$.",
      "Refrigerator and Heat Pump COP: $COP_{HP} = COP_{Ref} + 1 = \\frac{Q_H}{W_{in}}$.",
      "Carnot Efficiency Maximum: $\\eta_{Carnot} = 1 - \\frac{T_L}{T_H}$ (temperatures in Kelvin).",
      "Carnot Refrigerator COP: $COP_{Ref,Carnot} = \\frac{T_L}{T_H - T_L}$.",
      "Clausius Inequality: $\\oint \\frac{\\delta Q}{T} \\le 0$ ($=0$ reversible, $<0$ irreversible).",
      "Differential Entropy Definition: $d S = \\left(\\frac{\\delta Q}{T}\\right)_{rev}$.",
      "Entropy Generation Principle: $S_{gen} = \\Delta S_{sys} + \\Delta S_{surr} \\ge 0$.",
      "Ideal Gas Entropy Change ($T, v$): $\\Delta s = c_v \\ln\\left(\\frac{T_2}{T_1}\\right) + R \\ln\\left(\\frac{v_2}{v_1}\\right)$.",
      "Ideal Gas Entropy Change ($T, P$): $\\Delta s = c_p \\ln\\left(\\frac{T_2}{T_1}\\right) - R \\ln\\left(\\frac{P_2}{P_1}\\right)$.",
      "Exam Gold Tip: Always remember that while system entropy can decrease during a process (e.g. freezing water), the entropy generation of the universe ($S_{gen} = \\Delta S_{sys} + \\Delta S_{surr}$) must always be strictly greater than or equal to zero."
    ]
  },
  "thermodynamics:::u3": {
    "highlights": [
      "Pure Substance & Phase Change Phases: Pure substance definition (homogeneous and invariable chemical composition across all phases); Solid, liquid, and vapor phases; Liquid-to-vapor phase change process at constant pressure: Subcooled / compressed liquid, Saturated liquid, Wet vapor mixture, Saturated vapor, Superheated vapor; Saturation temperature ($T_{sat}$) and Saturation pressure ($P_{sat}$).",
      "Phase Change Property Diagrams: $P-v$, $T-v$, and $P-T$ (phase) diagrams; Saturated liquid line and saturated vapor line meeting at Critical Point (for water: $T_c = 373.95^\\circ\\text{C}, P_c = 22.064\\text{ MPa}, v_c = 0.003106\\text{ m}^3/\\text{kg}$); Triple point line and triple point on $P-T$ diagram where solid, liquid, and vapor coexist in equilibrium (for water: $0.01^\\circ\\text{C}, 0.6117\\text{ kPa}$); Sublimation line, fusion line, vaporization line.",
      "Steam Property Tables & Quality (Dryness Fraction): Dryness fraction / Quality $x = \\frac{m_v}{m_{total}} = \\frac{m_v}{m_l + m_v}$ ($0 \\le x \\le 1$); Defined strictly within the wet two-phase vapor dome; Specific volume of wet mixture: $v = v_f + x v_{fg} = (1 - x) v_f + x v_g$; Specific internal energy: $u = u_f + x u_{fg}$; Specific enthalpy: $h = h_f + x h_{fg}$; Specific entropy: $s = s_f + x s_{fg}$; Latent heat of vaporization $h_{fg} = h_g - h_f$ (diminishes to zero at critical point).",
      "Enthalpy-Entropy ($h-s$) / Mollier Diagram: Axes: specific enthalpy $h$ vs specific entropy $s$; Constant pressure lines (straight divergent lines in wet region with slope $(\\partial h /\\partial s)_p = T$, curving upward in superheated region); Constant temperature lines; Constant dryness fraction lines; Mollier chart utility in steam turbine expansion analysis: vertical line represents ideal isentropic expansion ($s_1 = s_2$).",
      "Measurement of Steam Quality — Calorimeters: (1) Barrel / Tank Calorimeter (mass and energy balance, high heat loss error); (2) Separating Calorimeter (mechanical separation of moisture, measures $x_1$); (3) Throttling Calorimeter (isenthalpic throttling into superheated region $h_{wet1} = h_{sup2}$, limited to high initial dryness $x > 0.95$); (4) Combined Separating and Throttling Calorimeter (overcomes limitations, measures full range of dryness fraction).",
      "Equations of State for Gases: Ideal gas equation of state: $P v = R T$; Universal gas constant $\\bar{R} = 8.314\\text{ kJ/kmol}\\cdot\\text{K}$, characteristic gas constant $R = \\bar{R} / M$; Compressibility factor $Z = \\frac{P v}{R T}$ (quantifies deviation from ideal gas behavior; $Z = 1$ for ideal gas); Generalized Compressibility Chart based on Reduced Pressure $P_r = P / P_c$ and Reduced Temperature $T_r = T / T_c$ (Law of Corresponding States).",
      "Van der Waals Equation of State: Accounting for finite molecular volume and intermolecular attractive forces: $\\left(P + \\frac{a}{v^2}\\right)(v - b) = R T$; Determination of constants from critical point inflection conditions: $\\left(\\frac{\\partial P}{\\partial v}\\right)_{T_c} = 0$ and $\\left(\\frac{\\partial^2 P}{\\partial v^2}\\right)_{T_c} = 0$; Yields: $a = \\frac{27 R^2 T_c^2}{64 P_c}$, $b = \\frac{R T_c}{8 P_c}$, and critical compressibility factor $Z_c = \\frac{P_c v_c}{R T_c} = \\frac{3}{8} = 0.375$.",
      "Other Real Gas Equations: Redlich-Kwong equation: $P = \\frac{R T}{v - b} - \\frac{a}{\\sqrt{T} v (v + b)}$; Dieterici equation; Beattie-Bridgeman equation; Virial equation of state: $Z = 1 + \\frac{B(T)}{v} + \\frac{C(T)}{v^2} + \\dots$.",
      "Steam Power Rankine Cycle Fundamentals: Simple ideal Rankine cycle (1-2 isentropic pump work, 2-3 constant pressure heat addition in boiler, 3-4 isentropic turbine expansion, 4-5 constant pressure heat rejection in condenser); Thermal efficiency $\\eta = \\frac{w_T - w_P}{q_{in}} = \\frac{(h_3 - h_4) - (h_2 - h_1)}{h_3 - h_2}$.",
      "University Examination Strategy: Determine steam properties ($v, u, h, s$) using steam tables across subcooled, wet, and superheated states, solve throttling and separating calorimeter problems, derive Van der Waals constants $a, b$ from critical conditions, and calculate Rankine cycle thermal efficiency."
    ],
    "keyPoints": [
      "Dryness Fraction Formula: $x = \\frac{m_v}{m_l + m_v}$.",
      "Wet Mixture Enthalpy: $h = h_f + x h_{fg}$.",
      "Wet Mixture Entropy: $s = s_f + x s_{fg}$.",
      "Mollier Chart Isobar Slope: $\\left(\\frac{\\partial h}{\\partial s}\\right)_P = T$ (absolute temperature).",
      "Throttling Calorimeter Enthalpy Balance: $h_{f1} + x_1 h_{fg1} = h_{sup2}$.",
      "Compressibility Factor: $Z = \\frac{P v}{R T}$ ($Z=1$ for ideal gas).",
      "Van der Waals Equation: $\\left(P + \\frac{a}{v^2}\\right)(v - b) = R T$.",
      "Critical Compressibility Factor: $Z_c = \\frac{P_c v_c}{R T_c} = \\frac{3}{8} = 0.375$ (for Van der Waals gas).",
      "Ideal Rankine Cycle Efficiency: $\\eta_{th} = \\frac{(h_3 - h_4) - (h_2 - h_1)}{h_3 - h_2}$.",
      "Exam Gold Tip: For superheated steam, never use the wet mixture equation $h = h_f + x h_{fg}$; instead, read enthalpy directly from superheated steam tables using pressure and temperature."
    ]
  },
  "thermodynamics:::u4": {
    "highlights": [
      "Air Standard Assumptions: Working fluid is a fixed mass of air behaving as an ideal gas with constant specific heats evaluated at room temperature ($c_p = 1.005\\text{ kJ/kg}\\cdot\\text{K}, c_v = 0.718\\text{ kJ/kg}\\cdot\\text{K}, \\gamma = 1.4$); Combustion process replaced by external heat addition process; Exhaust replaced by constant-volume heat rejection restoring air to initial state; Friction and turbulence neglected.",
      "Engine Terminology & Metrics: Bore ($D$), Stroke ($L$); Clearance volume ($V_c$), Swept / Displacement volume ($V_s = \\frac{\\pi}{4} D^2 L$), Total volume ($V_t = V_c + V_s$); Compression ratio $r = \\frac{V_t}{V_c} = \\frac{V_c + V_s}{V_c}$; Mean Effective Pressure ($MEP$): fictitious constant pressure that, acting on piston during power stroke, produces net work equal to actual cycle work: $MEP = \\frac{W_{net}}{V_s} = \\frac{W_{net}}{V_1 - V_2}$.",
      "Otto Cycle (Constant Volume Heat Addition): Ideal thermodynamic cycle for spark-ignition (petrol) engines; Four reversible processes: 1-2 Isentropic compression ($P v^\\gamma = C$), 2-3 Constant volume heat addition ($q_{in} = c_v (T_3 - T_2)$), 3-4 Isentropic expansion ($P v^\\gamma = C$), 4-1 Constant volume heat rejection ($q_{out} = c_v (T_4 - T_1)$); Thermal efficiency derivation: $\\eta_{Otto} = 1 - \\frac{1}{r^{\\gamma - 1}}$; Efficiency depends strictly on compression ratio $r$; Knocking limit in petrol engines ($r \\approx 7-10$).",
      "Diesel Cycle (Constant Pressure Heat Addition): Ideal cycle for compression-ignition (diesel) engines; Fuel injected at end of high compression stroke; Four reversible processes: 1-2 Isentropic compression, 2-3 Constant pressure heat addition ($q_{in} = c_p (T_3 - T_2)$), 3-4 Isentropic expansion, 4-1 Constant volume heat rejection ($q_{out} = c_v (T_4 - T_1)$); Cut-off ratio $r_c = \\frac{V_3}{V_2}$; Thermal efficiency derivation: $\\eta_{Diesel} = 1 - \\frac{1}{r^{\\gamma - 1}} \\left[\\frac{r_c^\\gamma - 1}{\\gamma(r_c - 1)}\\right]$; For same compression ratio $r$, $\\eta_{Otto} > \\eta_{Diesel}$; In practice, diesel engines achieve higher efficiency due to much higher compression ratios ($r \\approx 15-22$).",
      "Dual Combustion Cycle (Limited Pressure / Sabathe Cycle): Realistic model of modern high-speed diesel engines; Heat addition split into two stages: Part at constant volume (2-3, pressure ratio $r_p = P_3 / P_2$) and part at constant pressure (3-4, cut-off ratio $r_c = V_4 / V_3$); Thermal efficiency derivation: $\\eta_{Dual} = 1 - \\frac{1}{r^{\\gamma - 1}} \\left[\\frac{r_p r_c^\\gamma - 1}{(r_p - 1) + \\gamma r_p (r_c - 1)}\\right]$; Reduces to Otto when $r_c = 1$, reduces to Diesel when $r_p = 1$.",
      "Comparison of Gas Power Cycles: (1) For Same Compression Ratio and Heat Input: $\\eta_{Otto} > \\eta_{Dual} > \\eta_{Diesel}$; (2) For Same Maximum Peak Pressure and Temperature: $\\eta_{Diesel} > \\eta_{Dual} > \\eta_{Otto}$ (diesel allows highest thermal efficiency under real metallurgical stress limits); (3) For Same Maximum Pressure and Heat Input: $\\eta_{Diesel} > \\eta_{Dual} > \\eta_{Otto}$.",
      "Brayton Cycle (Gas Turbine Cycle): Ideal cycle for gas turbine power plants and jet propulsion; Open and closed cycle configurations; Four reversible processes: 1-2 Isentropic compression in rotary compressor, 2-3 Constant pressure heat addition in combustor, 3-4 Isentropic expansion in turbine, 4-1 Constant pressure heat rejection; Pressure ratio $r_p = P_2 / P_1$; Thermal efficiency derivation: $\\eta_{Brayton} = 1 - \\frac{1}{r_p^{(\\gamma - 1)/\\gamma}}$.",
      "Work Ratio and Back Work Ratio in Gas Turbines: Turbine work $W_T = c_p (T_3 - T_4)$, Compressor work $W_C = c_p (T_2 - T_1)$; Back Work Ratio $BWR = \\frac{W_C}{W_T}$ (very high in gas turbines: $40-60\\%$ compared to $1-2\\%$ in Rankine steam plants); Optimum pressure ratio for maximum specific network: $r_{p,opt} = \\left(\\frac{T_3}{T_1}\\right)^{\\frac{\\gamma}{2(\\gamma - 1)}}$.",
      "Brayton Cycle Modifications for Enhanced Efficiency: (1) Regeneration: utilizing turbine hot exhaust gas to preheat compressor discharge air in regenerator / recuperator; Regenerator effectiveness $\\epsilon = \\frac{h_x - h_2}{h_4 - h_2}$; (2) Multi-stage compression with Intercooling (approaches isothermal compression, reduces $W_C$); (3) Multi-stage expansion with Reheating (approaches isothermal expansion, increases $W_T$); Ideal Ericsson cycle limit.",
      "University Examination Strategy: Derive the thermal efficiency and mean effective pressure expressions for Otto, Diesel, and Dual cycles, compare cycles under identical operational constraints, and calculate net work, efficiency, and optimum pressure ratio for regenerative Brayton cycles."
    ],
    "keyPoints": [
      "Otto Cycle Efficiency: $\\eta_{Otto} = 1 - \\frac{1}{r^{\\gamma - 1}}$.",
      "Diesel Cycle Efficiency: $\\eta_{Diesel} = 1 - \\frac{1}{r^{\\gamma - 1}} \\left[\\frac{r_c^\\gamma - 1}{\\gamma(r_c - 1)}\\right]$.",
      "Dual Cycle Efficiency: $\\eta_{Dual} = 1 - \\frac{1}{r^{\\gamma - 1}} \\left[\\frac{r_p r_c^\\gamma - 1}{(r_p - 1) + \\gamma r_p(r_c - 1)}\\right]$.",
      "Brayton Cycle Efficiency: $\\eta_{Brayton} = 1 - \\frac{1}{r_p^{(\\gamma - 1)/\\gamma}}$.",
      "Mean Effective Pressure Formula: $MEP = \\frac{W_{net}}{V_s} = \\frac{W_{net}}{V_1 - V_2}$.",
      "Brayton Optimum Pressure Ratio: $r_{p,opt} = \\left(\\frac{T_{max}}{T_{min}}\\right)^{\\frac{\\gamma}{2(\\gamma - 1)}}$.",
      "Back Work Ratio Definition: $BWR = \\frac{W_C}{W_T}$ ($40-60\\%$ in gas turbines).",
      "Efficiency Comparison at Same $r$: $\\eta_{Otto} > \\eta_{Dual} > \\eta_{Diesel}$.",
      "Efficiency Comparison at Same $P_{max}, T_{max}$: $\\eta_{Diesel} > \\eta_{Dual} > \\eta_{Otto}$.",
      "Exam Gold Tip: For identical compression ratio $r$, the Otto cycle is most efficient; but for identical maximum cylinder pressure $P_{max}$, the Diesel cycle is most efficient."
    ]
  },
  "thermodynamics:::u5": {
    "highlights": [
      "Helmholtz and Gibbs Functions: Helmholtz free energy function: $A = U - T S$ (measure of available work in closed system at constant $T$ and $V$); Gibbs free energy function: $G = H - T S$ (measure of chemical affinity and phase equilibrium at constant $T$ and $P$); Fundamental differential property relations: $d U = T dS - P dV$, $d H = T dS + V dP$, $d A = -S dT - P dV$, $d G = -S dT + V dP$.",
      "Maxwell's Thermodynamic Relations: Mathematical exact differential reciprocity condition: for $d z = M dx + N dy$, $\\left(\\frac{\\partial M}{\\partial y}\\right)_x = \\left(\\frac{\\partial N}{\\partial x}\\right)_y$; Maxwell's four relations: (1) $\\left(\\frac{\\partial T}{\\partial V}\\right)_s = -\\left(\\frac{\\partial P}{\\partial S}\\right)_v$; (2) $\\left(\\frac{\\partial T}{\\partial P}\\right)_s = \\left(\\frac{\\partial V}{\\partial S}\\right)_p$; (3) $\\left(\\frac{\\partial P}{\\partial T}\\right)_v = \\left(\\frac{\\partial S}{\\partial V}\\right)_t$; (4) $\\left(\\frac{\\partial V}{\\partial T}\\right)_p = -\\left(\\frac{\\partial S}{\\partial P}\\right)_t$.",
      "$T dS$ Equations and Specific Heat Differences: First $T dS$ equation: $T dS = c_v dT + T \\left(\\frac{\\partial P}{\\partial T}\\right)_v dV$; Second $T dS$ equation: $T dS = c_p dT - T \\left(\\frac{\\partial V}{\\partial T}\\right)_p dP$; Difference in specific heats derivation: $c_p - c_v = -T \\left(\\frac{\\partial V}{\\partial T}\\right)_p^2 \\left(\\frac{\\partial P}{\\partial V}\\right)_T = \\frac{T v \\beta^2}{\\kappa_T}$ where $\\beta$ is volume expansivity and $\\kappa_T$ is isothermal compressibility; Proves $c_p \\ge c_v$ always, and $c_p = c_v$ at absolute zero or when density is maximum (water at $4^\\circ\\text{C}$).",
      "Joule-Thomson Coefficient & Inversion Curve: Isenthalpic throttling process ($h = \\text{const}$); Joule-Thomson coefficient: $\\mu_{JT} = \\left(\\frac{\\partial T}{\\partial P}\\right)_h = \\frac{1}{c_p} \\left[T \\left(\\frac{\\partial V}{\\partial T}\\right)_p - V\\right]$; Physical significance: $\\mu_{JT} > 0 \\implies$ Cooling upon throttling; $\\mu_{JT} < 0 \\implies$ Heating upon throttling; $\\mu_{JT} = 0 \\implies$ Inversion temperature; Inversion curve separating heating and cooling regions on $T-P$ plane; For ideal gas: $T (\\partial V / \\partial T)_p - V = 0 \\implies \\mu_{JT} = 0$ (zero temperature change upon throttling).",
      "Clapeyron and Clausius-Clapeyron Equations: Phase transition relation along saturation boundary: $\\frac{dP}{dT} = \\frac{s_{fg}}{v_{fg}} = \\frac{h_{fg}}{T v_{fg}}$ (Clapeyron Equation); Clausius-Clapeyron equation for liquid-vapor transition: assuming ideal vapor ($v_g = R T / P$) and neglecting liquid volume ($v_f \\ll v_g \\implies v_{fg} \\approx v_g$): $\\frac{dP}{P} = \\frac{h_{fg}}{R T^2} dT \\implies \\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{h_{fg}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.",
      "Psychrometry and Atmospheric Air Properties: Dry air vs Atmospheric air (mixture of dry air and water vapor); Dalton's law of partial pressures: $P = P_a + P_v$; Dry Bulb Temperature (DBT: actual air temperature measured by thermometer); Wet Bulb Temperature (WBT: steady-state temperature reached when exposed to air stream while covered with water-saturated wick); Dew Point Temperature (DPT: temperature at which moisture condensation begins when air is cooled at constant pressure, corresponding to $T_{sat}$ at $P_v$).",
      "Psychrometric Parameters: (1) Specific Humidity / Humidity Ratio $\\omega = \\frac{m_v}{m_a} = 0.622 \\frac{P_v}{P - P_v}$ (kg water vapor per kg dry air); (2) Relative Humidity $\\phi = \\frac{P_v}{P_{sat}(T)} \\times 100\\%$ (degree of saturation); (3) Degree of Saturation $\\mu = \\frac{\\omega}{\\omega_s} = \\frac{P_v}{P_s} \\left(\\frac{P - P_s}{P - P_v}\\right) = \\phi \\left(\\frac{P - P_s}{P - P_v}\\right)$; (4) Enthalpy of moist air: $h = 1.005 T + \\omega (2501 + 1.88 T)\\text{ kJ/kg dry air}$.",
      "Psychrometric Chart: Graphic representation of moist air properties at standard barometric pressure ($101.325\\text{ kPa}$); Horizontal axis DBT, vertical axis specific humidity $\\omega$, curved saturation line ($100\\%$ RH), diagonal WBT and enthalpy lines, constant specific volume lines.",
      "Standard Psychrometric Conditioning Processes: (1) Sensible heating (horizontal rightward, $\\omega$ constant, RH decreases); (2) Sensible cooling (horizontal leftward, $\\omega$ constant, RH increases); (3) Humidification (vertical upward) and Dehumidification (vertical downward); (4) Heating and Humidification; (5) Cooling and Dehumidification (air cooled below DPT to precipitate water); (6) Evaporative / Adiabatic Cooling (follows constant WBT line); (7) Adiabatic Mixing of two moist airstreams: $\\frac{\\dot{m}_{a1}}{\\dot{m}_{a2}} = \\frac{\\omega_3 - \\omega_2}{\\omega_1 - \\omega_3} = \\frac{h_3 - h_2}{h_1 - h_3}$.",
      "University Examination Strategy: Derive Maxwell's four thermodynamic relations from characteristic energy equations, prove $c_p - c_v = \\frac{T v \\beta^2}{\\kappa_T}$, derive the Clausius-Clapeyron equation, and calculate specific humidity, relative humidity, and enthalpy of air-conditioning processes using psychrometric charts and equations."
    ],
    "keyPoints": [
      "Maxwell Relation 1: $\\left(\\frac{\\partial T}{\\partial V}\\right)_s = -\\left(\\frac{\\partial P}{\\partial S}\\right)_v$.",
      "Maxwell Relation 3: $\\left(\\frac{\\partial P}{\\partial T}\\right)_v = \\left(\\frac{\\partial S}{\\partial V}\\right)_t$.",
      "Maxwell Relation 4: $\\left(\\frac{\\partial V}{\\partial T}\\right)_p = -\\left(\\frac{\\partial S}{\\partial P}\\right)_t$.",
      "Specific Heat Difference: $c_p - c_v = -T \\left(\\frac{\\partial V}{\\partial T}\\right)_p^2 \\left(\\frac{\\partial P}{\\partial V}\\right)_T = \\frac{T v \\beta^2}{\\kappa_T}$.",
      "Joule-Thomson Coefficient: $\\mu_{JT} = \\left(\\frac{\\partial T}{\\partial P}\\right)_h = \\frac{1}{c_p}\\left[T\\left(\\frac{\\partial V}{\\partial T}\\right)_p - V\\right]$.",
      "Clapeyron Phase Equation: $\\frac{dP}{dT} = \\frac{h_{fg}}{T v_{fg}}$.",
      "Clausius-Clapeyron Equation: $\\ln\\left(\\frac{P_2}{P_1}\\right) = \\frac{h_{fg}}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$.",
      "Specific Humidity Formula: $\\omega = 0.622 \\frac{P_v}{P_{total} - P_v}$.",
      "Relative Humidity Definition: $\\phi = \\frac{P_v}{P_{sat}(T)} \\times 100\\%$.",
      "Exam Gold Tip: For an ideal gas, $\\mu_{JT} = 0$ at all temperatures and pressures, meaning throttling an ideal gas produces zero temperature change."
    ]
  },
  "material science & engineering:::u1": {
    "highlights": [
      "Crystalline vs Amorphous Solids: Long-range vs short-range atomic order; 14 Bravais space lattices in 7 crystal systems; Common metallic structures: FCC (Face-Centered Cubic: Al, Cu, Ni, Austenitic stainless steel; coordination number 12, APF = 0.74), BCC (Body-Centered Cubic: $\\alpha$-Fe, Cr, W, Mo; coordination number 8, APF = 0.68), HCP (Hexagonal Close-Packed: Mg, Zn, Ti; coordination number 12, APF = 0.74); Miller indices for crystal planes $(hkl)$ and directions $[uvw]$.",
      "Point Defects (Zero-Dimensional Imperfections): (1) Vacancies (missing lattice atoms, equilibrium vacancy concentration: $N_v = N \\exp(-Q_v / k_B T)$); (2) Self-interstitials (crowded lattice atoms); (3) Impurities: Substitutional solid solutions (Hume-Rothery rules: atomic size mismatch $<15\\%$, identical crystal structure, similar electronegativity, identical valence) and Interstitial solid solutions (small solute atoms like C, N, H in iron interstices); (4) Point defects in ionic crystals: Schottky defect (stoichiometric cation-anion vacancy pair) and Frenkel defect (cation vacancy-interstitial pair).",
      "Line Defects (One-Dimensional Imperfections / Dislocations): Dislocations as carriers of plastic slip; (1) Edge Dislocation: extra half-plane of atoms inserted into crystal lattice, Burgers vector $\\mathbf{b}$ is perpendicular to dislocation line ($\\mathbf{b} \\perp \\mathbf{l}$); (2) Screw Dislocation: ramp-like spiral atomic helical distortion, Burgers vector $\\mathbf{b}$ is parallel to dislocation line ($\\mathbf{b} \\parallel \\mathbf{l}$); (3) Mixed Dislocation.",
      "Dislocation Mechanics & Slip Systems: Slip plane (plane of highest planar atomic density) and Slip direction (direction of closest linear atomic packing); Combined Slip System (FCC has 12 slip systems: $\\{111\\}\\langle 110 \\rangle$, giving exceptional ductility; BCC has 48 slip systems $\\{110\\}\\langle 111 \\rangle$; HCP has 3 basal slip systems, brittle at room temperature); Peierls-Nabarro stress $\\tau_{PN} \\propto \\exp(-2\\pi w / b)$; Dislocation glide and climb (diffusion-assisted non-conservative motion).",
      "Interfacial and Volume Defects (2D and 3D Imperfections): (1) External surfaces (highest surface free energy); (2) Grain boundaries (narrow misoriented transition zones between adjacent crystal grains; small-angle tilt and twist boundaries formed by dislocation arrays; high-angle boundaries); (3) Twin boundaries (mirror-symmetric atomic arrangement across twin plane; deformation twinning in HCP, annealing twins in FCC); (4) Stacking faults; (5) Volume / 3D defects: pores, slag inclusions, cracks, voids.",
      "Atomic Diffusion Mechanisms: (1) Vacancy diffusion mechanism (interchange of atom with adjacent vacant lattice site, operates in self-diffusion and substitutional alloys); (2) Interstitial diffusion mechanism (motion of small interstitial atoms between interstitial voids, requires lower activation energy, much faster than vacancy diffusion, e.g. carbon carburization in iron).",
      "Fick's Laws of Diffusion: Fick's First Law (steady-state diffusion flux): $J = -D \\frac{dC}{dx}$ where $D$ is diffusion coefficient / diffusivity ($D = D_0 \\exp(-Q_d / R T)$); Fick's Second Law (transient / non-steady state diffusion): $\\frac{\\partial C}{\\partial t} = D \\frac{\\partial^2 C}{\\partial x^2}$.",
      "Error Function Solution to Fick's Second Law: Semi-infinite solid with constant surface concentration $C_s$: $\\frac{C(x,t) - C_0}{C_s - C_0} = 1 - \\text{erf}\\left(\\frac{x}{2\\sqrt{Dt}}\\right)$ (where $\\text{erf}(z)$ is Gaussian error function); Engineering application: predicting case depth and required holding time during industrial gas carburizing of steel gear surfaces.",
      "Factors Influencing Diffusion Kinetics: Temperature (Arrhenius exponential dependency, diffusion speeds up exponentially with temperature), Crystal structure (diffusion faster in more open BCC iron than close-packed FCC iron), Crystal defects (grain boundaries and dislocations act as rapid diffusion 'highways' or short-circuit diffusion paths), Solute concentration gradients.",
      "University Examination Strategy: Calculate Atomic Packing Factors (APF) for FCC and BCC crystals, apply Hume-Rothery rules to determine solid solubility, compare edge vs screw dislocations, and calculate required carburizing time and depth using Fick's second law error function solutions."
    ],
    "keyPoints": [
      "Equilibrium Vacancy Concentration: $N_v = N \\exp\\left(-\\frac{Q_v}{k_B T}\\right)$.",
      "FCC vs BCC Atomic Packing Factor: FCC $\\text{APF} = 0.74$; BCC $\\text{APF} = 0.68$.",
      "Edge Dislocation Burgers Vector: $\\mathbf{b} \\perp \\mathbf{l}$ (perpendicular to dislocation line).",
      "Screw Dislocation Burgers Vector: $\\mathbf{b} \\parallel \\mathbf{l}$ (parallel to dislocation line).",
      "Hume-Rothery Size Factor Rule: Atomic radius difference between solute and solvent must be $< 15\\%$.",
      "Fick's First Law: $J = -D \\frac{dC}{dx}$.",
      "Arrhenius Diffusivity Equation: $D = D_0 \\exp\\left(-\\frac{Q_d}{R T}\\right)$.",
      "Fick's Second Law Error Function Solution: $\\frac{C(x,t) - C_0}{C_s - C_0} = 1 - \\text{erf}\\left(\\frac{x}{2\\sqrt{Dt}}\\right)$.",
      "BCC vs FCC Diffusion Speed: Interstitial diffusion of carbon is much faster in BCC $\\alpha$-iron than in FCC $\\gamma$-iron due to lower packing density.",
      "Exam Gold Tip: Edge dislocations can climb only with the assistance of vacancy diffusion at elevated temperatures, whereas screw dislocations can cross-slip freely without atomic mass transport."
    ]
  },
  "material science & engineering:::u2": {
    "highlights": [
      "Gibbs Phase Rule: Thermodynamic foundation of equilibrium phase diagrams: $F = C - P + 2$ (where $F$ is degrees of freedom, $C$ number of components, $P$ number of equilibrium phases); For condensed metallurgical systems held at constant atmospheric pressure: $F = C - P + 1$.",
      "Binary Isomorphous Phase Systems: Complete liquid and solid mutual solubility (e.g. Copper-Nickel Cu-Ni system); Liquidus line (above which alloy is completely liquid) and Solidus line (below which alloy is completely solid); Lever Rule (determining phase compositions and phase mass fractions): $W_L = \\frac{C_\\alpha - C_0}{C_\\alpha - C_L}$ and $W_\\alpha = \\frac{C_0 - C_L}{C_\\alpha - C_L}$; Non-equilibrium cooling and Microsegregation / Coring (eliminated by homogenization annealing).",
      "Binary Invariant Reactions: Phase transformations occurring at fixed invariant temperature and composition ($F = 0$): (1) Eutectic Reaction ($L \\rightleftharpoons \\alpha + \\beta$, e.g. Lead-Tin Pb-Sn); (2) Eutectoid Reaction ($\\gamma \\rightleftharpoons \\alpha + \\beta$, solid-state transformation, e.g. Fe-C pearlite); (3) Peritectic Reaction ($L + \\alpha \\rightleftharpoons \\beta$); (4) Peritectoid Reaction ($\\alpha + \\beta \\rightleftharpoons \\gamma$); (5) Monotectic Reaction ($L_1 \\rightleftharpoons L_2 + \\alpha$).",
      "Allotropy of Pure Iron: Polymorphic transformations upon heating under atmospheric pressure: $\\alpha$-iron (Ferrite, BCC, stable up to $912^\\circ\\text{C}$, magnetic below Curie temperature $770^\\circ\\text{C}$); $\\gamma$-iron (Austenite, FCC, non-magnetic, stable from $912^\\circ\\text{C}$ to $1394^\\circ\\text{C}$); $\\delta$-iron (Delta ferrite, BCC, stable from $1394^\\circ\\text{C}$ to melting point $1538^\\circ\\text{C}$).",
      "Iron-Carbon (Fe-$\\text{Fe}_3\\text{C}$) Phase Diagram Microconstituents: (1) Ferrite ($\\alpha$-iron solid solution of carbon, BCC, maximum carbon solubility $0.022\\%$ at $727^\\circ\\text{C}$, soft and ductile); (2) Austenite ($\\gamma$-iron, FCC, maximum carbon solubility $2.14\\%$ at $1147^\\circ\\text{C}$, tough and ductile); (3) Cementite (Iron carbide $\\text{Fe}_3\\text{C}$, stoichiometric intermetallic compound containing $6.67\\%\\text{ C}$ by weight, orthorhombic, extremely hard and brittle); (4) Pearlite (lamellar alternating microconstituent of ferrite and cementite, $0.76\\%\\text{ C}$); (5) Ledeburite (eutectic cast iron mixture of austenite and cementite, $4.3\\%\\text{ C}$).",
      "Three Major Invariant Reactions in Fe-C Diagram: (1) Peritectic reaction at $1495^\\circ\\text{C}$: Liquid ($0.53\\%\\text{ C}$) + $\\delta$-ferrite ($0.09\\%\\text{ C}$) $\\rightleftharpoons$ Austenite ($0.17\\%\\text{ C}$); (2) Eutectic reaction at $1147^\\circ\\text{C}$: Liquid ($4.3\\%\\text{ C}$) $\\rightleftharpoons$ Ledeburite [Austenite ($2.14\\%\\text{ C}$) + Cementite ($6.67\\%\\text{ C}$)]; (3) Eutectoid reaction at $727^\\circ\\text{C}$: Austenite ($0.76\\%\\text{ C}$) $\\rightleftharpoons$ Pearlite [Ferrite ($0.022\\%\\text{ C}$) + Cementite ($6.67\\%\\text{ C}$)].",
      "Classification of Ferrous Alloys by Carbon Content: (1) Wrought Iron / Pure Iron ($<0.008\\%\\text{ C}$); (2) Steels ($0.008\\% \\text{ to } 2.14\\%\\text{ C}$): Hypo-eutectoid steels ($<0.76\\%\\text{ C}$, microstructure of proeutectoid ferrite + pearlite), Eutectoid steel ($0.76\\%\\text{ C}$, $100\\%$ pearlite), Hyper-eutectoid steels ($0.76\\% \\text{ to } 2.14\\%\\text{ C}$, microstructure of proeutectoid cementite network + pearlite); (3) Cast Irons ($2.14\\% \\text{ to } 6.67\\%\\text{ C}$).",
      "Cast Iron Metallurgical Varieties: (1) White Cast Iron (metastable Fe-$\\text{Fe}_3\\text{C}$, fast cooling, all carbon as hard brittle cementite, unmachinable, wear-resistant); (2) Gray Cast Iron (equilibrium Fe-Graphite, slow cooling with silicon inoculation, graphite flakes damp vibration, excellent machinability, self-lubricating); (3) Ductile / Nodular / Spheroidal Graphite (SG) Cast Iron (treated with magnesium or cerium, spherical graphite nodules, high tensile strength and ductility); (4) Malleable Cast Iron (produced by prolonged graphitization annealing of white cast iron, irregular temper carbon rosettes).",
      "Critical Temperature Lines in Steels: $A_1$ (lower critical temperature $727^\\circ\\text{C}$, eutectoid line); $A_3$ (upper critical temperature for hypo-eutectoid steels, ferrite starts precipitating from austenite on cooling); $A_{cm}$ (upper critical temperature for hyper-eutectoid steels, proeutectoid cementite precipitates on cooling); $A_2$ (magnetic Curie point of iron at $770^\\circ\\text{C}$).",
      "University Examination Strategy: State Gibbs condensed phase rule, apply the lever rule on tie-lines to compute microconstituent percentages, sketch the complete iron-carbon phase diagram labeling all temperatures, compositions, invariant points, and microstructural phases, and contrast gray cast iron vs ductile cast iron."
    ],
    "keyPoints": [
      "Condensed Phase Rule: $F = C - P + 1$ (at constant atmospheric pressure).",
      "Tie-Line Lever Rule: $W_\\alpha = \\frac{C_0 - C_L}{C_\\alpha - C_L}$ (opposite arm over total tie-line length).",
      "Fe-C Eutectoid Reaction: Austenite ($0.76\\%\\text{ C}$) $\\rightleftharpoons$ Ferrite ($0.022\\%\\text{ C}$) + Cementite ($6.67\\%\\text{ C}$) at $727^\\circ\\text{C}$.",
      "Fe-C Eutectic Reaction: Liquid ($4.3\\%\\text{ C}$) $\\rightleftharpoons$ Ledeburite (Austenite + Cementite) at $1147^\\circ\\text{C}$.",
      "Fe-C Peritectic Reaction: Liquid ($0.53\\%\\text{ C}$) + $\\delta$-ferrite ($0.09\\%\\text{ C}$) $\\rightleftharpoons$ Austenite ($0.17\\%\\text{ C}$) at $1495^\\circ\\text{C}$.",
      "Stoichiometric Cementite Carbon Content: $6.67\\%$ carbon by weight (formula $\\text{Fe}_3\\text{C}$).",
      "Eutectoid Steel Microstructure: $100\\%$ Pearlite (alternating lamellae of ferrite and cementite).",
      "Gray Cast Iron Microstructure: Flake graphite in pearlite/ferrite matrix (high vibration damping).",
      "SG Iron Inoculant: Magnesium ($\\text{Mg}$) or Cerium ($\\text{Ce}$) added to spheroidize graphite flakes into nodules.",
      "Exam Gold Tip: Remember that in the iron-carbon diagram, steels contain between $0.022\\%$ and $2.14\\%$ carbon, while cast irons contain greater than $2.14\\%$ carbon."
    ]
  },
  "material science & engineering:::u3": {
    "highlights": [
      "Principles of Steel Heat Treatment: Solid-state thermal processing involving heating to austenitic range, soaking at temperature, and controlled cooling to achieve tailored microstructure and mechanical properties; Transforming austenite into nonequilibrium phases.",
      "Isothermal Transformation (TTT / C-Curve / Bain Curve) Diagrams: Time-Temperature-Transformation diagram constructed by rapidly quenching small thin specimens from austenitic region to isothermal bath; Nose of the C-curve (minimum incubation time for pearlite transformation around $550^\\circ\\text{C}$); Transformation products: Coarse pearlite (formed just below $A_1$, thick lamellae, soft), Fine pearlite (formed near nose, thin lamellae, higher hardness), Upper Bainite (feather-like ferrite with interspersed cementite rods at $350-550^\\circ\\text{C}$), Lower Bainite (acicular plate ferrite with extremely fine internal carbide platelets at $250-350^\\circ\\text{C}$, high toughness and strength).",
      "Continuous Cooling Transformation (CCT) Diagrams: Practical industrial heat treatments involve continuous cooling rather than isothermal holding; CCT curves are shifted downward and to longer times (rightward) relative to TTT curves; Critical Cooling Rate ($CCR$): minimum cooling velocity required to suppress pearlite and bainite transformation and achieve $100\\%$ martensitic structure.",
      "Martensitic Transformation & Tetragonal Lattice: Diffusionless, athermal shear transformation; Austenite (FCC) shears cooperatively into Martensite (BCT - Body-Centered Tetragonal); Interstitial carbon atoms trapped in octahedral interstices distort cubic lattice into tetragonal; Start temperature $M_s$ and Finish temperature $M_f$ (dependent strictly on carbon content, independent of cooling rate); Martensite is extremely hard ($>65\\text{ HRC}$), brittle, and characterized by high internal residual stresses.",
      "Annealing Heat Treatments: (1) Full Annealing: heating hypo-eutectoid steel to $30-50^\\circ\\text{C}$ above $A_3$ (or hyper-eutectoid to $30-50^\\circ\\text{C}$ above $A_1$), slow furnace cooling ($10-30^\\circ\\text{C/hr}$); yields coarse pearlite, relieves stresses, maximizes ductility; (2) Process Annealing: subcritical heating ($550-650^\\circ\\text{C}$) to soften cold-worked low-carbon steel; (3) Spheroidizing Annealing: prolonged soaking ($>24\\text{ hrs}$) just below $A_1$ ($700^\\circ\\text{C}$) to convert cementite plates into spherical globules, providing optimal machinability in high-carbon tool steels; (4) Stress Relief Annealing.",
      "Normalizing Heat Treatment: Heating steel to $50-60^\\circ\\text{C}$ above $A_3$ (hypo) or $A_{cm}$ (hyper), followed by cooling in still air; Produces fine uniform pearlite, breaks up casting dendrites, refines grain size, and provides higher yield strength and hardness than full annealing.",
      "Hardening (Quenching) and Tempering of Steels: (1) Hardening: austenitizing followed by rapid quenching faster than Critical Cooling Rate (CCR) in brine, water, or oil to trap carbon and form 100% martensite; (2) Tempering: subcritical reheating of as-quenched martensite ($150-650^\\circ\text{C}$) to relieve internal quenching stresses and restore impact toughness by precipitating fine transition carbides and forming tempered martensite; Austempering (isothermal transformation to 100% bainite, eliminating quench cracks); Martempering / Marquenching (equalizing above $M_s$ before oil quench).",
      "Hardenability & Jominy End-Quench Test: Hardenability (ability of steel to form martensite to a given depth upon quenching, distinct from hardness); Jominy End-Quench Test (ASTM A255): standard 1-inch diameter cylindrical bar austenitized and quenched at bottom face with water jet; Hardness measured along length; Jominy distance where hardness drops to $50\\%$ martensite indicates hardenability; Alloying elements (Cr, Mo, Mn, Ni, B) shift TTT curves rightward, drastically increasing hardenability.",
      "Surface Hardening / Case Hardening Techniques: Producing wear-resistant hard exterior case over tough, ductile interior core: (1) Carburizing (pack, gas, liquid: diffusing carbon into low-carbon steel at $900-950^\\circ\\text{C}$); (2) Nitriding (diffusing nitrogen from ammonia gas at $500-550^\\circ\\text{C}$ without quenching, forms ultra-hard alloy nitrides, zero distortion); (3) Carbonitriding / Cyaniding; (4) Flame Hardening and Induction Hardening (rapid surface heating by oxy-acetylene torch or RF induction coil followed by water spray quench, applicable to medium-carbon steels $0.4-0.5\\%\\text{ C}$).",
      "University Examination Strategy: Construct TTT diagrams explaining transformations to pearlite, bainite, and martensite, compare full annealing vs normalizing in terms of heating temperature and cooling rate, explain the stages of tempering, and detail the Jominy end-quench hardenability test procedure."
    ],
    "keyPoints": [
      "Martensite Crystal Structure: Body-Centered Tetragonal (BCT) produced by diffusionless shear.",
      "Critical Cooling Rate (CCR): Minimum cooling rate required to avoid nose of TTT curve and achieve $100\\%$ martensite.",
      "Full Annealing Heating Range: $30-50^\\circ\\text{C}$ above $A_3$ followed by extremely slow furnace cooling.",
      "Normalizing Cooling Medium: Uniform cooling in still atmospheric air (produces fine pearlite).",
      "Spheroidizing Purpose: Transforms cementite plates into spheres for maximum machinability of tool steels.",
      "Austempering Final Microstructure: $100\\%$ Bainite (high toughness with zero quench cracking).",
      "Hardenability vs Hardness: Hardness is surface resistance to indentation; hardenability is the depth to which martensite forms.",
      "Jominy Specimen Dimensions: 1 inch ($25.4\\text{ mm}$) diameter by 4 inches ($101.6\\text{ mm}$) length.",
      "Nitriding Advantage: Operates at subcritical temperatures ($500-550^\\circ\\text{C}$) requiring zero quenching, eliminating dimensional distortion.",
      "Exam Gold Tip: Hyper-eutectoid steels are full-annealed by heating only $30-50^\\circ\\text{C}$ above $A_1$ (lower critical line) rather than above $A_{cm}$ to prevent forming a brittle continuous grain boundary cementite network upon slow cooling."
    ]
  },
  "material science & engineering:::u4": {
    "highlights": [
      "Tensile Testing and Stress-Strain Analysis: Standard ASTM tensile test on cylindrical specimen; Engineering stress $\\sigma = P / A_0$ and engineering strain $\\epsilon = \\Delta L / L_0$; True stress $\\sigma_t = \\sigma(1 + \\epsilon)$ and true strain $\\epsilon_t = \\ln(1 + \\epsilon)$ (valid up to necking); Hollomon's power law constitutive equation: $\\sigma_t = K \\epsilon_t^n$ (where $n$ is strain hardening exponent, $K$ strength coefficient); Yield strength (0.2% offset method for materials lacking distinct yield point); Ductility metrics (% elongation $\\frac{L_f - L_0}{L_0} \\times 100\\%$, % reduction in area $\\frac{A_0 - A_f}{A_0} \\times 100\\%$).",
      "Hardness Testing Methodologies: Resistance to localized surface plastic indentation; (1) Brinell Hardness Test (hardened steel or tungsten carbide ball indenter of diameter $D=10\\text{ mm}$, load $P=3000\\text{ kg}$, $BHN = \\frac{2P}{\\pi D (D - \\sqrt{D^2 - d^2})}$); (2) Rockwell Hardness Test (minor preload $10\\text{ kg}$, major load; Scale C with $120^\\circ$ diamond Brale cone indenter and $150\\text{ kg}$ load; Scale B with $1/16$-inch steel ball indenter and $100\\text{ kg}$ load; reads depth directly on dial); (3) Vickers Microhardness (diamond pyramid with $136^\\circ$ face angle, $VHN = \\frac{1.854 P}{d^2}$); (4) Knoop microhardness.",
      "Impact Testing and Ductile-to-Brittle Transition: Impact toughness (energy absorbed during high-strain-rate dynamic fracture); Charpy V-notch and Izod impact tests (swinging pendulum, absorbed energy $E = m g (h - h')$ in Joules); Ductile-to-Brittle Transition Temperature (DBTT): sharp decline in Charpy absorbed energy with decreasing temperature; Occurs in BCC metals (mild steel) and HCP metals, whereas FCC metals (aluminum, copper, austenitic stainless steel) remain ductile even at cryogenic temperatures.",
      "Fracture Mechanics & Modes: (1) Ductile fracture (extensive plastic deformation, stable crack propagation, cup-and-cone morphology, dimpled microvoid coalescence under SEM); (2) Brittle fracture (cleavage along crystallographic planes, rapid unstable crack propagation, flat faceted reflective surface, chevron markings pointing back to origin); Griffith's Theory of Brittle Fracture: critical fracture stress $\\sigma_c = \\sqrt{\\frac{2 E \\gamma_s}{\\pi a}}$; Stress Intensity Factor $K_I = Y \\sigma \\sqrt{\\pi a}$; Fracture Toughness $K_{IC}$ (plane-strain fracture toughness criterion $K_I \\ge K_{IC}$).",
      "Fatigue Failure and Fatigue Design: Progressive structural failure under cyclic dynamic loading; Responsible for $>90\\%$ of mechanical engineering failures; S-N curve (Wöhler curve) and Fatigue/Endurance Limit; Mean stress effects modeled by Goodman Diagram $\\frac{\\sigma_a}{S_e} + \\frac{\\sigma_m}{S_{ut}} = 1$ and conservative Soderberg Line $\\frac{\\sigma_a}{S_e} + \\frac{\\sigma_m}{S_y} = 1$; Surface shot peening inducing compressive residual stresses to retard crack nucleation.",
      "Creep Deformation at High Temperatures: Time-dependent permanent plastic deformation under constant load at elevated homologous temperatures ($T > 0.4 T_{melt}$); Standard creep curve: (1) Primary / Transient creep (strain rate decreases due to work hardening); (2) Secondary / Steady-state creep (constant minimum strain rate $\\dot{\\epsilon}_s = A \\sigma^n \\exp(-Q_c / R T)$, balance between strain hardening and thermal recovery); (3) Tertiary creep (accelerating strain rate leading to creep rupture); Larson-Miller Parameter for predicting long-term creep life: $LMP = T [\\log(t_r) + C]$.",
      "Strengthening Mechanisms in Metals: Basic physical principle: impeding the movement of dislocations makes the metal stronger and harder: (1) Grain Size Refinement (Hall-Petch Equation: $\\sigma_y = \\sigma_0 + \\frac{k_y}{\\sqrt{d}}$: smaller grains increase grain boundary area, blocking dislocation pile-ups; uniquely enhances BOTH yield strength and ductility); (2) Solid Solution Strengthening (substitutional and interstitial solute atoms create localized elastic lattice strain fields that pin dislocations).",
      "Precipitation Hardening (Age Hardening): Forming extremely fine, uniformly dispersed second-phase precipitate particles that block dislocation glide (e.g. Al-Cu Duralumin alloy 2024); Three sequential steps: (1) Solution heat treatment (heating into single $\\alpha$ phase region); (2) Rapid quenching (retaining supersaturated solid solution); (3) Aging (precipitation of coherent GP zones $\\to \\theta'' \\to \\theta'$ at room temperature or elevated aging temperature); Peak aging vs overaging (Orowan dislocation looping around coarsened incoherent particles).",
      "Strain Hardening (Work Hardening / Cold Working): Plastic deformation below recrystallization temperature; Multiplication of dislocation density (increases from $10^7\\text{ cm}^{-2}$ to $10^{12}\\text{ cm}^{-2}$); Entangled dislocation forests obstruct further slip; Restored by annealing through three stages: Recovery (dislocation rearrangement), Recrystallization (nucleation of strain-free equiaxed grains at $T_{rec} \\approx 0.4-0.5 T_m$), and Grain Growth.",
      "University Examination Strategy: Apply the Hall-Petch equation to calculate grain size strengthening, analyze Goodman and Soderberg equations for cyclic fatigue life under nonzero mean stresses, explain Charpy impact ductile-to-brittle transition behavior, and detail the three steps of precipitation hardening in aluminum-copper alloys."
    ],
    "keyPoints": [
      "Hollomon Power Law: $\\sigma_t = K \\epsilon_t^n$ (where $n$ is strain hardening exponent).",
      "Hall-Petch Equation: $\\sigma_y = \\sigma_0 + \\frac{k_y}{\\sqrt{d}}$ (strength increases as grain diameter $d$ decreases).",
      "Griffith's Critical Fracture Stress: $\\sigma_c = \\sqrt{\\frac{2 E \\gamma_s}{\\pi a}}$.",
      "Stress Intensity Factor: $K_I = Y \\sigma \\sqrt{\\pi a}$.",
      "Goodman Fatigue Relation: $\\frac{\\sigma_a}{S_e} + \\frac{\\sigma_m}{S_{ut}} = 1$.",
      "Soderberg Conservative Fatigue Relation: $\\frac{\\sigma_a}{S_e} + \\frac{\\sigma_m}{S_y} = 1$.",
      "Steady-State Creep Power Law: $\\dot{\\epsilon}_s = A \\sigma^n \\exp\\left(-\\frac{Q_c}{R T}\\right)$.",
      "Larson-Miller Creep Parameter: $LMP = T(\\log_{10} t_r + 20)$.",
      "Grain Size Strengthening Uniqueness: The ONLY strengthening mechanism that increases yield strength while simultaneously improving ductility.",
      "Exam Gold Tip: FCC metals like austenitic stainless steel and aluminum do NOT exhibit a ductile-to-brittle transition temperature (DBTT); they remain tough and ductile even down to liquid nitrogen cryogenic temperatures."
    ]
  },
  "material science & engineering:::u5": {
    "highlights": [
      "Alloy Steels and Stainless Steels: Role of alloying elements (Cr for corrosion resistance and hardenability, Ni for toughness and austenite stabilization, Mo for preventing temper embrittlement, V for grain refinement); Classification of Stainless Steels (minimum $10.5-12\\%\\text{ Cr}$ for passive $\\text{Cr}_2\\text{O}_3$ film): (1) Austenitic (18/8 grade 304, 316 with Mo; FCC, non-magnetic, highly formable and corrosion resistant); (2) Ferritic (grades 409, 430; BCC, magnetic, lower ductility); (3) Martensitic (grade 410, 420; high carbon, heat treatable, cutlery); (4) Duplex (mixed austenite + ferrite, high resistance to chloride stress corrosion cracking).",
      "Non-Ferrous Alloys — Aluminum, Copper, Titanium: (1) Aluminum Alloys: Wrought vs cast, heat-treatable (2xxx Al-Cu, 6xxx Al-Mg-Si, 7xxx Al-Zn-Mg aerospace alloys) vs work-hardening (3xxx Al-Mn, 5xxx Al-Mg marine alloys); (2) Copper Alloys: Brass (Cu-Zn alloys: Cartridge brass $70/30$, Muntz metal $60/40$) and Bronze (Cu-Sn phosphor bronze, aluminum bronze, silicon bronze); (3) Titanium Alloys: Ti-6Al-4V ($\u0007lpha+\beta$ alloy, exceptional strength-to-weight ratio, biocompatibility, service up to $450^\\circ\\text{C}$ in gas turbine fan blades).",
      "Superalloys for High-Temperature Service: Nickel-based superalloys (Inconel 718, Nimonic, Rene); Service at $>0.7 T_{melt}$ in jet engine combustion chambers and turbine blades; Solid solution strengthening (Mo, W) and precipitation strengthening by coherent gamma-prime phase $\\gamma'-\\text{Ni}_3(\\text{Al, Ti})$ with $L1_2$ ordered structure; Single-crystal (SX) turbine blades cast using directional solidification and grain selectors, completely eliminating creep-vulnerable grain boundaries.",
      "Engineering Ceramics: Ionic and covalent bonding, high melting point, high compressive strength, extreme hardness, chemical inertness, low fracture toughness; Structural ceramics: Alumina ($\\text{Al}_2\\text{O}_3$), Silicon Carbide ($\\text{SiC}$), Silicon Nitride ($\\text{Si}_3\\text{N}_4$); Transformation Toughening in Zirconia (PSZ / Y-TZP: stress-induced tetragonal-to-monoclinic phase transformation accompanied by $4\\%$ volume expansion, exerting compressive clamping stresses that arrest advancing crack tips).",
      "Engineering Polymers: Thermoplastics (linear and branched chains held by weak van der Waals forces, reversible softening on heating, recyclable: PE, PP, PVC, PTFE, Nylon, Polycarbonate) vs Thermosets (heavily cross-linked 3D networks, irreversible chemical degradation on heating: Epoxy, Phenol-formaldehyde Bakelite, Unsaturated polyester); Glass Transition Temperature ($T_g$); Elastomers (lightly cross-linked polymer coils with rubber elasticity: natural polyisoprene, vulcanized rubber).",
      "Composite Materials: Multiphase material engineered from reinforcement (fibers, particles) embedded in matrix phase (polymer, metal, ceramic); Fiber-reinforced composites: Carbon fiber reinforced polymers (CFRP), Glass fiber reinforced polymers (GFRP); Rule of Mixtures for Continuous Parallel Fibers: Longitudinal Elastic Modulus (Voigt isostrain model: $\\epsilon_c = \\epsilon_f = \\epsilon_m \\implies E_{cl} = E_f V_f + E_m V_m$); Transverse Elastic Modulus (Reuss isostress model: $\\sigma_c = \\sigma_f = \\sigma_m \\implies \\frac{1}{E_{ct}} = \\frac{V_f}{E_f} + \\frac{V_m}{E_m}$).",
      "Smart Materials & Shape Memory Alloys (SMA): Nitinol (equiatomic Ni-Ti alloy); Thermoelastic martensitic transformation between high-temperature Austenite (cubic B2) and low-temperature Martensite (monoclinic B19'); Shape Memory Effect (deformed in twinned martensite recovers original parent austenitic shape upon heating above $A_f$); Pseudoelasticity / Superelasticity (stress-induced martensite recovers completely upon unloading at $T > A_f$); Biomedical stents, vascular clamps, adaptive aircraft structures.",
      "Piezoelectric and Magnetostrictive Materials: Piezoelectric ceramics (PZT Lead Zirconate Titanate) converting mechanical stress to electrical voltage and vice versa; Magnetostrictive materials (Terfenol-D) exhibiting dimensional strain under external magnetic fields; High-frequency sonar transducers, active vibration dampers.",
      "Nanomaterials and Nanotechnology: Carbon allotropes: Carbon Nanotubes (single-walled SWCNT, multi-walled MWCNT; tensile strength $>50\\text{ GPa}$, ballistic electron transport) and Graphene (single 2D hexagonal atomic honeycomb sheet of $sp^2$-hybridized carbon atoms); High surface-to-volume ratio enhancing chemical and catalytic reactivity; Quantum confinement effects.",
      "University Examination Strategy: Derive the longitudinal and transverse elastic moduli for continuous fiber composites using the Rule of Mixtures, explain transformation toughening in zirconia ceramics, describe the shape memory mechanism in Nitinol SMAs, and contrast the microstructures and properties of austenitic vs ferritic stainless steels."
    ],
    "keyPoints": [
      "Stainless Steel Chromium Criterion: Minimum $10.5\\% \\text{ Cr}$ by weight to form self-healing $\\text{Cr}_2\\text{O}_3$ passive oxide film.",
      "Austenitic Stainless Steel Grade: 304 (18% Cr, 8% Ni, FCC, non-magnetic).",
      "Rule of Mixtures (Longitudinal Modulus): $E_{cl} = E_f V_f + E_m V_m$ (isostrain).",
      "Rule of Mixtures (Transverse Modulus): $\\frac{1}{E_{ct}} = \\frac{V_f}{E_f} + \\frac{V_m}{E_m}$ (isostress).",
      "Transformation Toughening in Zirconia: Tetragonal-to-monoclinic transition creates $4\\%$ volume expansion, clamping crack tips.",
      "Nickel Superalloy $\\gamma'$ Phase: Ordered $L1_2$ coherent precipitate $\\text{Ni}_3(\\text{Al, Ti})$.",
      "Shape Memory Alloy (Nitinol): Equiatomic Nickel-Titanium (NiTi) alloy utilizing thermoelastic martensitic transformations.",
      "Thermoplastic vs Thermoset: Thermoplastics melt reversibly upon heating; thermosets degrade and char permanently due to covalent cross-linking.",
      "Single Crystal Turbine Blades: Directional solidification eliminates grain boundaries, maximizing high-temperature creep resistance.",
      "Exam Gold Tip: Longitudinal composite modulus follows the parallel Voigt model ($E_{cl} = E_f V_f + E_m V_m$), which is always substantially stiffer than the series Reuss transverse modulus."
    ]
  },
  "manufacturing technology — i:::u1": {
    "highlights": [
      "Sand Casting Fundamentals: Pouring molten metal into refractory sand mold cavity; Pattern allowances: shrinkage allowance ($1-2\\%$ for steel/aluminum), draft allowance ($1-2^\\circ$), machining allowance, distortion allowance, and shake allowance.",
      "Gating System Design & Hydraulics: Pouring basin, sprue, runner, and ingate; Choke area $A_c = \\frac{m}{\\rho t_p c_d \\sqrt{2 g h}}$; Pressurized gating ($A_s > A_r > A_g$, maintains full liquid stream, prevents aspiration) vs Unpressurized gating ($A_s < A_r < A_g$, minimizes turbulence and erosion).",
      "Chvorinov's Rule for Solidification: Total solidification time $t_s = B \\left(\\frac{V}{A}\\right)^n$, where $V/A$ is modulus (volume-to-surface-area ratio), $B$ is mold constant, and exponent $n \\approx 2.0$.",
      "Riser Design & Placement (Caine's & Modulus Methods): Riser must solidify after the casting ($t_{s,\\text{riser}} > t_{s,\\text{casting}} \\implies (V/A)_{riser} \\ge 1.2 (V/A)_{casting}$); Feeding distance of risers; Use of insulating sleeves and exothermic toppings.",
      "Specialized Casting Techniques: Shell molding (phenolic resin-bonded sand, high dimensional accuracy), Investment / Lost-Wax casting (ceramic slurry shell around wax pattern, net-shape gas turbine blades), and Die casting (high-pressure hot/cold chamber die casting).",
      "Centrifugal Casting: True centrifugal (rotating mold around horizontal/vertical axis, pipes without cores; G-factor $G = \\frac{\\omega^2 r}{g} \\approx 60-80$), Semi-centrifugal (wheels/pulleys), and Centrifuging.",
      "Casting Defects & Prevention: Gas porosity (pinholes, blowholes due to trapped air/steam, prevented by venting and dry sand), Shrinkage cavities (improper risering), Hot tears (restrained contraction at sharp corners), Cold shuts and Misruns (insufficient pouring temperature or fluidity).",
      "Melting Furnaces in Foundries: Cupola furnace (coke-fired for gray iron), Electric arc furnace (EAF, scrap steel melting), and Coreless induction furnace (precise metallurgical control and clean melting for non-ferrous alloys).",
      "Molding Sand Testing: Permeability test (gas venting rate under pressure), green compressive strength, dry strength, moisture content ($3-8\\%$), and clay content (determined by AFS clay wash test).",
      "University Examination Strategy: Derive Chvorinov's solidification equation, calculate choke area for a given mold filling time, and draw comparative sketches of pressurized vs unpressurized gating systems."
    ],
    "keyPoints": [
      "Chvorinov's Solidification Law: $t_s = B \\left(\\frac{V}{A}\\right)^2$.",
      "Choke Area Formula: $A_c = \\frac{W}{\\rho t_p C_d \\sqrt{2 g H}}$.",
      "Unpressurized Gating Ratio: $A_s : A_r : A_g = 1 : 2 : 2$ or $1 : 4 : 4$ (reduces stream velocity and turbulence).",
      "Pressurized Gating Ratio: $A_s : A_r : A_g = 4 : 2 : 1$ (choke located at the ingate).",
      "Riser Modulus Condition: $M_{\\text{riser}} \\ge 1.2 M_{\\text{casting}}$, where $M = V / A$.",
      "Centrifugal Casting G-Factor: $G = \\frac{v^2}{r g} = \\frac{r \\omega^2}{g} \\ge 60$.",
      "Hot Tear Cause: Non-uniform cooling and high mechanical restraint during solid contraction.",
      "Investment Casting Tolerance: Achieves $\\pm 0.05\\text{ mm}$ dimensional precision and $0.8\\,\\mu\\text{m}$ surface finish.",
      "Core Sand Binder: Sodium silicate ($Na_2SiO_3$) hardened instantly by gassing with $CO_2$.",
      "Exam Scoring Tip: The sprue must be designed as a downward-converging paraboloid or truncated cone to prevent atmospheric aspiration into the falling liquid."
    ]
  },
  "manufacturing technology — i:::u2": {
    "highlights": [
      "Arc Welding Physics & V-I Characteristics: Power source linear characteristic: $V = V_{oc} - \\left(\\frac{V_{oc}}{I_{sc}}\\right) I$, where $V_{oc}$ is open-circuit voltage and $I_{sc}$ is short-circuit current; Arc characteristic: $V = a + b L$; Optimum arc power $P_{max} = \\frac{V_{oc} I_{sc}}{4}$.",
      "Shielded Metal Arc Welding (SMAW / Stick): Consumable coated electrode; Flux decomposition produces protective shielding gas ($CO_2, CO$), deoxidizers, and slag cover; Cellulosic, rutile, and basic low-hydrogen flux formulations.",
      "Gas Tungsten Arc Welding (GTAW / TIG): Non-consumable tungsten electrode (pure W, thoriated, or zirconiated) shielded by inert argon/helium; DCEN (straight polarity, $70\\%$ heat at workpiece, deep penetration), DCEP (reverse polarity, $70\\%$ at electrode, cathodic cleaning), and AC for aluminum.",
      "Gas Metal Arc Welding (GMAW / MIG/MAG): Continuous consumable wire spool; Shielding gas (Argon for non-ferrous, $Ar + CO_2$ for steels); Metal transfer modes: short-circuiting (dip transfer), globular, spray transfer (above transition current), and pulsed spray.",
      "Submerged Arc Welding (SAW): High-deposition arc submerged under blanket of granular fusible flux; Extremely high currents ($>1000\\text{ A}$); Deep penetration, high travel speed, zero spatter, and high deposition rate for thick plates.",
      "Resistance Welding (RSW / Seam / Projection): Heat generated by Joule effect: $H = I^2 R t$; Contact resistance between sheets dominates; Water-cooled copper alloy electrodes; Nugget diameter $d_n \\approx 5\\sqrt{t}$, where $t$ is sheet thickness.",
      "Oxy-Acetylene Gas Welding: Combustion stages: primary inner cone ($C_2H_2 + O_2 \\to 2CO + H_2$, $3100^\\circ\\text{C}$) and outer envelope ($2CO + H_2 + 1.5O_2 \\to 2CO_2 + H_2O$); Flame types: Neutral ($O_2:C_2H_2 = 1:1$), Oxidizing ($>1.1:1$, brass/bronze), and Carburizing ($<1:1$, hardfacing).",
      "Welding Heat Affected Zone (HAZ) & Solidification: Peak temperature distribution $T(r, t)$; Microstructural zones: fusion zone, grain growth zone (coarse grain HAZ), normalized zone, and intercritical zone; Hydrogen-induced cold cracking in hard martensitic HAZ.",
      "Solid-State Welding Processes: Friction welding, Friction Stir Welding (FSW, non-consumable rotating pin tool plasticizing joint without melting), Explosive welding, and Ultrasonic welding for electronic micro-wires.",
      "University Examination Strategy: Solve for optimum arc length and maximum power in electric arc welding, calculate heat generation in resistance spot welding, and sketch the microstructural zones of the HAZ."
    ],
    "keyPoints": [
      "Linear Power Source Equation: $V = V_{oc} - \\frac{V_{oc}}{I_{sc}} I$.",
      "Maximum Arc Power Formula: $P_{max} = \\frac{V_{oc} I_{sc}}{4}$ (occurs when $V = V_{oc}/2$ and $I = I_{sc}/2$).",
      "Resistance Spot Welding Heat: $H = I^2 R t$ Joules.",
      "Spot Weld Nugget Diameter: $d = 6\\sqrt{t}$ mm (or $5\\sqrt{t}$).",
      "Welding Heat Input per Unit Length: $H_{net} = \\eta \\frac{V I}{v}$ (where $\\eta$ is arc thermal efficiency and $v$ is welding speed).",
      "Neutral Flame Temperature: Peak temperature $3100-3200^\\circ\\text{C}$ at the tip of the inner white cone.",
      "DCEN Polarity Distribution: $70\\%$ heat generated at the anode (workpiece), producing deep, narrow penetration.",
      "DCEP Polarity Application: Provides cathodic cleaning action to blast refractory aluminum oxide ($Al_2O_3$) films.",
      "FSW Operating Mechanism: Non-consumable rotating tool generates frictional and plastic shear heating below melting point.",
      "Exam Scoring Tip: For resistance spot welding, the total resistance $R$ is the sum of bulk sheet resistances, electrode-sheet contact, and the dominant sheet-sheet interface resistance."
    ]
  },
  "manufacturing technology — i:::u3": {
    "highlights": [
      "Hot Working vs Cold Working: Hot working performed above recrystallization temperature ($T > 0.5 T_m$, low flow stress, dynamic recrystallization, no work hardening, poor surface finish); Cold working performed below ($T < 0.3 T_m$, high strength, strain hardening, close tolerances).",
      "True Stress & True Strain in Metal Forming: True stress $\\sigma_t = F/A$; True strain $\\varepsilon_t = \\ln(L/L_0) = \\ln(A_0/A)$; Plastic flow stress modeled via Hollomon law $\\sigma_f = K \\varepsilon^n$; Average flow stress $\\bar{\\sigma}_0 = \\frac{K \\varepsilon^n}{n + 1}$.",
      "Metal Rolling Fundamentals: Flat rolling of strip; Angle of bite $\\alpha$; Maximum draft per pass $\\Delta h_{max} = \\mu^2 R$, where $\\mu$ is coefficient of friction and $R$ is roll radius; Neutral point where strip velocity equals roll surface velocity ($v = v_r$).",
      "Rolling Mill Architectures: Two-high, three-high reversing, four-high (large backup rolls support small work rolls to reduce roll deflection), and cluster / Sendzimir mills for rolling ultra-thin foil.",
      "Forging Operations & Mechanics: Open-die forging (upsetting, drawing out), Closed-die / Impression-die forging with flash gutter (flash creates high hydrostatic pressure forcing metal into intricate cavity corners); Forging force $F = \\sigma_f A (1 + \\frac{2\\mu r}{3h})$.",
      "Extrusion Processes: Direct / Forward extrusion (billet moves in same direction as ram, high container friction) vs Indirect / Backward extrusion (billet stationary relative to container, zero wall friction, lower ram force); Hydrostatic extrusion.",
      "Wire & Tube Drawing: Pulling wire through converging carbide die; Reduction in area $r = 1 - (A_f / A_0)$; Drawing stress $\\sigma_d = \\bar{\\sigma}_0 \\ln\\left(\\frac{A_0}{A_f}\\right) \\left(1 + \\frac{\\mu}{\\alpha}\\right)$; Maximum theoretical reduction per pass for ideal plastic material is $63.2\\%$ ($r_{max} = 1 - 1/e$).",
      "Sheet Metal Forming Operations: Shearing, blanking (slug is part, die size = nominal, punch smaller by $2c$), punching/piercing (sheet is part, punch size = nominal), bending (bend allowance $BA = \\frac{\\pi}{180} R_b + K t$), and deep drawing.",
      "Deep Drawing & Limiting Drawing Ratio (LDR): Cup drawing using punch and blank holder; Limiting Drawing Ratio $LDR = D_{\\text{blank, max}} / d_{\\text{punch}} \\approx 2.0 - 2.2$; Defects: wrinkling in flange (insufficient blank holder force) and tearing at cup radius (excessive holder force).",
      "University Examination Strategy: Derive the maximum draft expression $\\Delta h_{max} = \\mu^2 R$ in flat rolling, calculate the drawing force for a wire reduction pass, and determine clearance allocation in blanking vs punching."
    ],
    "keyPoints": [
      "Maximum Rolling Draft: $\\Delta h_{max} = h_0 - h_f = \\mu^2 R$.",
      "Roll Bite Condition without Assistance: $\\tan\\alpha \\le \\mu$.",
      "Average Flow Stress Formula: $\\bar{\\sigma}_0 = \\frac{K \\varepsilon^n}{n + 1}$.",
      "Ideal Extrusion Pressure: $p = \\bar{\\sigma}_0 \\ln\\left(\\frac{A_0}{A_f}\\right)$.",
      "Maximum Single-Pass Wire Drawing Reduction: $r_{max} = 1 - e^{-1} = 63.2\\%$.",
      "Blanking Tool Clearance Allocation: Die opening equals blank diameter $D$; Punch diameter $d = D - 2c$.",
      "Punching Tool Clearance Allocation: Punch diameter equals hole diameter $d_h$; Die opening $D = d_h + 2c$.",
      "Blanking Force Formula: $F = P \\cdot t \\cdot \\tau_s = \\pi D t \\tau_s$.",
      "Limiting Drawing Ratio: $LDR = \\frac{D_0}{d_p} \\approx 2.0$.",
      "Exam Scoring Tip: For blanking, die size is exact and clearance is subtracted from punch; for punching, punch size is exact and clearance is added to die."
    ]
  },
  "manufacturing technology — i:::u4": {
    "highlights": [
      "Orthogonal vs Oblique Cutting: Orthogonal cutting (cutting edge perpendicular to tool feed direction, 2D chip flow) vs Oblique cutting (cutting edge inclined at inclination angle $i$, 3D helical chip flow).",
      "Merchant's Cutting Force Circle: Relations between cutting force $F_c$, thrust force $F_t$, shear force $F_s$, normal shear force $F_n$, friction force $F$, and normal force $N$; Shear angle equation: $\\phi = 45^\\circ + \\frac{\\alpha}{2} - \\frac{\\beta}{2}$, where $\\alpha$ is rake angle and $\\beta = \\arctan(\\mu)$ is friction angle.",
      "Chip Formation Mechanics: Primary shear zone (shear strain $\\gamma = \\cot\\phi + \\tan(\\phi - \\alpha)$), secondary shear zone along tool-chip interface, and tertiary friction zone at tool flank; Continuous chips (ductile metals, high speed), BUE chips (built-up edge at medium speeds), and Discontinuous chips (brittle metals, e.g. cast iron).",
      "Chip Thickness Ratio ($r$): $r = \\frac{t_1}{t_2} = \\frac{l_2}{l_1} = \\frac{\\sin\\phi}{\\cos(\\phi - \\alpha)}$; Since uncut chip thickness $t_1 < t_2$, chip ratio is strictly $r < 1$; Shear angle determined from chip ratio: $\\tan\\phi = \\frac{r\\cos\\alpha}{1 - r\\sin\\alpha}$.",
      "Tool Geometry (ASA & Orthogonal Rake Systems): American Standards Association (ASA) tool signature: Back rake, Side rake, End relief, Side relief, End cutting edge, Side cutting edge angles, and Nose radius ($R$ in mm/inches).",
      "Taylor's Tool Life Equation: $V T^n = C$, where $V$ is cutting speed (m/min), $T$ is tool life (min), $n$ is Taylor exponent ($n \\approx 0.1-0.15$ for HSS, $0.2-0.4$ for carbides, $0.4-0.6$ for ceramics), and $C$ is machining constant.",
      "Cutting Tool Materials Hierarchy: High Speed Steel (HSS 18-4-1: $18\\%\\text{ W}, 4\\%\\text{ Cr}, 1\\%\\text{ V}$), Tungsten Carbide (WC-Co cermets), Coated carbides ($TiN, TiCN, Al_2O_3$), Ceramic inserts ($Si_3N_4, Al_2O_3$), Cubic Boron Nitride (CBN), and Polycrystalline Diamond (PCD).",
      "Cutting Tool Wear Mechanisms: Flank wear (abrasive/adhesive rubbing against finished surface, measured by width $VB$ in mm; Taylor tool life criterion $VB = 0.3\\text{ mm}$) and Crater wear (chemical diffusion on rake face at point of maximum temperature).",
      "Cutting Fluids & Heat Dissipation: Heat generated: $Q_{\\text{shear}} (70-80\\%) + Q_{\\text{friction}} (15-20\\%) + Q_{\\text{flank}} (5\\%)$; Water-soluble emulsion oils (cooling), straight mineral oils (lubrication), and cryogenic Minimum Quantity Lubrication (MQL) using liquid nitrogen.",
      "University Examination Strategy: Construct Merchant's force circle from measured dynamometer forces ($F_c, F_t$), calculate shear strain and cutting power, and solve Taylor's tool life equations for varying speeds."
    ],
    "keyPoints": [
      "Merchant's Shear Angle Relation: $\\phi = 45^\\circ + \\frac{\\alpha}{2} - \\frac{\\beta}{2}$.",
      "Chip Thickness Ratio Formula: $r = \\frac{t_1}{t_2} = \\frac{\\sin\\phi}{\\cos(\\phi - \\alpha)}$.",
      "Shear Angle from Chip Ratio: $\\tan\\phi = \\frac{r\\cos\\alpha}{1 - r\\sin\\alpha}$.",
      "Shear Strain in Chip: $\\gamma = \\cot\\phi + \\tan(\\phi - \\alpha)$.",
      "Friction Force on Rake Face: $F = F_c\\sin\\alpha + F_t\\cos\\alpha$.",
      "Normal Force on Rake Face: $N = F_c\\cos\\alpha - F_t\\sin\\alpha$.",
      "Coefficient of Friction on Tool: $\\mu = \\tan\\beta = \\frac{F}{N} = \\frac{F_t + F_c\\tan\\alpha}{F_c - F_t\\tan\\alpha}$.",
      "Taylor's Tool Life Formula: $V T^n = C$.",
      "Cutting Power Consumption: $P_c = F_c \\times V$ Watts.",
      "Exam Scoring Tip: HSS tools lose hardness rapidly above $600^\\circ\\text{C}$ due to over-aging, whereas sintered carbide tools maintain red hardness up to $1000^\\circ\\text{C}$."
    ]
  },
  "manufacturing technology — i:::u5": {
    "highlights": [
      "Engineering Metrology & Inspection Principles: Precision (repeatability of measurement) vs Accuracy (closeness of measured value to true standard value); Systematic errors (controllable, calibration, environmental) vs Random errors (uncontrollable, statistical Gaussian distribution).",
      "Linear Measuring Instruments: Vernier caliper (least count $LC = 1\\text{ MSD} - 1\\text{ VSD} = 0.02\\text{ mm}$), Micrometer screw gauge ($LC = \\frac{\\text{Pitch}}{\\text{Number of circular divisions}} = 0.01\\text{ mm}$), and Slip gauges (gauge blocks, Grade 00, 0, I, II, joined via molecular wringing).",
      "Abbe's Principle of Alignment: Maximum measurement accuracy is attained only when the standard scale and the measured line of dimension are collinearly aligned on the same axis (satisfied by micrometer, violated by vernier caliper).",
      "Angular Metrology & Sine Bar: Angle measurement using precision rollers: $\\sin\\theta = \\frac{h}{L}$, where $h$ is slip gauge pack height and $L$ is distance between roller centers ($100\\text{ mm}$ or $200\\text{ mm}$); Errors become excessive for angles $\\theta > 45^\\circ$; Autocollimators and angle gauges.",
      "Limits, Fits & Tolerances (ISO & BIS Systems): Basic size, Upper deviation ($ES$), Lower deviation ($EI$), Fundamental tolerance ($IT$ grades $IT01$ to $IT16$, where tolerance unit $i = 0.45\\sqrt[3]{D} + 0.001 D$); Hole-basis system ($EI = 0$, 'H' hole) vs Shaft-basis system.",
      "Classification of Engineering Fits: Clearance fit (hole always larger than shaft, positive minimum clearance), Interference fit (shaft always larger than hole, negative maximum clearance), and Transition fit (tolerances overlap).",
      "Taylor's Principle of Limit Gauge Design: GO gauge must check maximum material condition (MMC) and all dimensions simultaneously; NO-GO gauge must check least material condition (LMC) and inspect only one dimension at a time.",
      "Surface Roughness & Texture Parameters: Surface profile $y(x)$; Center Line Average ($R_a = \\frac{1}{L}\\int_0^L |y| dx$), Root Mean Square roughness ($R_q = \\sqrt{\\frac{1}{L}\\int_0^L y^2 dx}$), and Ten-point height ($R_z$); Measured using stylus profilometers (Talysurf).",
      "Coordinate Measuring Machines (CMM): 3D touch-trigger and optical scanning probes moving along orthogonal $X, Y, Z$ guide ways; Software computes geometric features, circularity, flatness, parallelism, and true position tolerances.",
      "University Examination Strategy: Calculate tolerance unit $i$ and fundamental tolerance for a given diameter step, design GO and NO-GO plug gauges according to Taylor's principle, and solve sine bar angular setups."
    ],
    "keyPoints": [
      "Sine Bar Formula: $\\sin\\theta = \\frac{h}{L}$ (accurate strictly for $\\theta \\le 45^\\circ$).",
      "Tolerance Unit Formula: $i = 0.45 \\sqrt[3]{D} + 0.001 D$ $\\mu\\text{m}$ (where $D = \\sqrt{D_1 D_2}$).",
      "IT6 Grade Tolerance: $10 i$.",
      "IT7 Grade Tolerance: $16 i$.",
      "IT8 Grade Tolerance: $25 i$.",
      "Average Surface Roughness $R_a$: $R_a = \\frac{1}{L}\\int_0^L |y| dx \\approx \\frac{\\sum |y_i|}{N}$.",
      "Peak-to-Valley Roughness in Turning: $h_{\\text{max}} = \\frac{f^2}{8 R}$ (where $f$ is feed and $R$ is tool nose radius).",
      "Taylor's Gauge Rule: GO gauge checks MMC and multiple features; NO-GO gauge checks LMC and isolated elements.",
      "Hole Basis Standard: Lower deviation of basic hole 'H' is identically zero ($EI = 0$).",
      "Exam Scoring Tip: Abbe's alignment error is avoided in micrometers because the spindle axis coincides directly with the measured anvil axis."
    ]
  },
  "machine drawing:::u1": {
    "highlights": [
      "Bureau of Indian Standards (BIS SP 46:2003): Standard engineering drawing sheets ($A0$ to $A4$, area ratio $1:\\sqrt{2}$ where $A0 = 1\\text{ m}^2$); Standard title block layout, projection symbols, and scale designations ($1:1, 1:2, 2:1$).",
      "Line Conventions & Precedence: Continuous thick (visible outlines), continuous thin (dimension, extension, leader lines), dashed thin (hidden features), chain thin (centerlines, axes of symmetry), chain thin with thick ends (cutting planes), and continuous freehand (short break lines).",
      "Dimensioning Principles & Rules: Aligned dimensioning (text parallel to and above dimension line) vs Unidirectional dimensioning (text horizontal and read from bottom); Chain, parallel, and coordinate dimensioning rules; Never dimension to hidden lines.",
      "Geometric Dimensioning and Tolerancing (GD&T): Feature control frame layout: [Geometric characteristic symbol | Tolerance value | Datum references]; Form tolerances (flatness, straightness, circularity, cylindricity) require no datum.",
      "Orientation and Location Tolerances: Orientation (perpendicularity, parallelism, angularity) requiring datum; Location (position, concentricity, symmetry); Runout (circular runout, total runout) measured using dial indicators.",
      "Material Condition Modifiers: Maximum Material Condition (MMC, symbol $\\text{M}$, gives bonus tolerance when feature departs from MMC) and Least Material Condition (LMC, symbol $\\text{L}$, critical for minimum wall thickness).",
      "Surface Finish Symbols: Basic triangle symbol; Value of roughness $R_a$ in $\\mu\\text{m}$ placed above triangle; Material removal allowance, machining method on horizontal line, and direction of lay symbols ($=, \\perp, X, M, C, R$).",
      "Screw Thread Representation: Metric ISO thread ($M20 \\times 2.5$); External thread (crest continuous thick line, root continuous thin line); Internal thread in section (minor diameter continuous thick, major diameter continuous thin).",
      "Keys, Cotters & Knuckle Joint Symbols: Sunk keys, feather keys, Woodruff keys; Cotter joint with spigot and socket; Knuckle joint for connecting rods under axial tension.",
      "University Examination Strategy: Draw the complete feature control frame for perpendicularity and position with MMC modifiers, construct standard line conventions, and annotate surface roughness symbols with lay directions."
    ],
    "keyPoints": [
      "Drawing Sheet Area Ratio: $x : y = 1 : \\sqrt{2}$, with $A0$ having area $1.0\\text{ m}^2$ ($841 \\times 1189\\text{ mm}$).",
      "Visible Line Standard: Continuous thick ($0.5-0.7\\text{ mm}$).",
      "Centerline Standard: Long dashed-dotted chain thin ($0.25\\text{ mm}$).",
      "Cutting Plane Line: Chain thin with thick ends and direction arrows.",
      "Feature Control Frame: Structured box indicating geometric tolerance, value, and datum references.",
      "Form Tolerances: Flatness, straightness, roundness; Never reference datums.",
      "Orientation Tolerances: Perpendicularity, parallelism; Always require datum planes.",
      "MMC Concept: Smallest hole diameter or largest shaft diameter.",
      "Thread Minor Diameter Representation: Drawn as continuous thin line spanning $3/4$ of circle in end view.",
      "Exam Scoring Tip: Projection symbol for First Angle has frustum cone with small end facing left and circular view on right."
    ]
  },
  "machine drawing:::u2": {
    "highlights": [
      "First Angle vs Third Angle Projection: First Angle (object placed in quadrant I between observer and plane, views projected behind object; Right side view drawn on left); Third Angle (plane between observer and object, views in front; Right view drawn on right).",
      "Six Principal Orthographic Views: Front elevation, top plan, left-side view, right-side view, rear view, and bottom view; Front view selected as most characteristic view showing primary functional shape.",
      "Auxiliary Views for Inclined Surfaces: Primary auxiliary view projected onto plane perpendicular to one principal plane and inclined to other two; Shows true shape, true size, and true inclination angle of slanted faces.",
      "Secondary Auxiliary Views: Projected from primary auxiliary view onto plane inclined to all three principal planes; Used to determine true clearance and true angle between skew lines.",
      "Line Views of Planes & Edge Views: A plane appears as a single straight edge line in any view where a line lying entirely on the plane appears in its true length.",
      "True Length of an Oblique Line: Determined by rotation method (rotating line parallel to horizontal or vertical plane) or auxiliary view method (projecting onto auxiliary plane parallel to line); $\\text{TL} = \\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$.",
      "Intersection of Curved Solids: Line of intersection between two intersecting cylinders; Determined by cutting plane method or sphere method; Elliptical or parabolic intersection curves.",
      "Development of Surfaces: Parallel line development (prisms, cylinders), Radial line development (pyramids, cones), and Triangulation development (transition pieces, hoppers, square-to-round ducts).",
      "Isometric Projection vs Isometric View: Isometric scale foreshortens all lengths to $\\sqrt{2/3} \\approx 0.816$ of true length; Isometric axes inclined at $120^\\circ$ to each other; Isometric view drawn using true scale.",
      "University Examination Strategy: Convert 3D pictorial views into First Angle orthographic projections (front, top, side), find true length and inclinations of skew lines, and develop surfaces of truncated cylinders."
    ],
    "keyPoints": [
      "First Angle Principle: Object lies between observer and projection plane (Right view drawn on left).",
      "Third Angle Principle: Projection plane lies between observer and object (Right view drawn on right).",
      "Isometric Scale Ratio: $\\frac{\\text{Isometric Length}}{\\text{True Length}} = \\frac{\\cos 45^\\circ}{\\cos 30^\\circ} = \\sqrt{\\frac{2}{3}} \\approx 0.816$.",
      "Isometric Axes Inclination: Spaced at strictly $120^\\circ$ to one another.",
      "Auxiliary Plane Rule: Placed parallel to inclined face to display its true shape.",
      "Sphere Method for Intersections: Applicable only when intersecting solids have common intersecting axes of revolution.",
      "Parallel Line Development: Used exclusively for right prisms and cylinders.",
      "Radial Line Development: Used exclusively for cones and pyramids.",
      "Non-Isometric Lines: Cannot be measured directly with isometric scale; Must be plotted via bounding box coordinates.",
      "Exam Scoring Tip: In First Angle projection, the top view is drawn directly below the front elevation view."
    ]
  },
  "machine drawing:::u3": {
    "highlights": [
      "Purpose of Sectioning: Reveals internal features, holes, webs, and cavities clearly without confusing clutter of hidden dashed lines.",
      "Cutting Plane Lines & Direction of Sight: Stepped or continuous cutting plane denoted by chain thin line with thickened ends and arrows pointing in viewing direction.",
      "Hatching & Section Lining Standards: Thin continuous lines drawn at $45^\\circ$ angle to centerline or main outline; Adjacent mating components hatched in opposite directions or with staggered spacing.",
      "Full Section vs Half Section Views: Full section (cutting plane passes entirely through object); Half section (cutting plane removes one quarter of symmetrical object, showing half internal section and half external view separated by centerline).",
      "Offset Sectioning: Cutting plane stepped at $90^\\circ$ right angles to pass through multiple offset internal features (e.g. holes, slots); Offsets not shown as lines on sectional drawing.",
      "Revolved & Removed Sections: Revolved section (cross-section rotated $90^\\circ$ in place directly on view, e.g. spoke, crane hook); Removed section (drawn adjacent to or offset from component with section identification labels A-A).",
      "Aligned Sections for Symmetrical Features: Features like radiating spokes, ribs, or bolt holes on pitch circle rotated into cutting plane to prevent misleading foreshortening.",
      "Components Never Sectioned Longitudinally: Shafts, bolts, nuts, washers, rivets, cotters, keys, pins, gear teeth, ball bearings, and thin structural webs/ribs cut longitudinally are drawn solid without hatching.",
      "Broken-Out / Local Sectioning: Small local section bounded by continuous irregular freehand line to expose interior of solid part without cutting entire object.",
      "University Examination Strategy: Draw full and half sectional views of mechanical assemblies, apply correct $45^\\circ$ hatching conventions for mating parts, and identify non-sectioned standard elements."
    ],
    "keyPoints": [
      "Hatching Angle Standard: Thin parallel lines oriented at $45^\\circ$ to component axis.",
      "Half Section Partition: Separated from exterior half strictly by a centerline (never a solid line).",
      "Non-Sectioned Elements: Shafts, bolts, nuts, keys, pins, rivets, and longitudinal ribs.",
      "Offset Section Transition: 90-degree step transitions are omitted from the sectional view.",
      "Hatching Spacing: Uniform spacing between $1.5\\text{ mm}$ and $3\\text{ mm}$ depending on view size.",
      "Mating Parts Hatching: Hatched in opposite $45^\\circ$ directions to distinguish boundaries.",
      "Thin Wall Sectioning: Sections thinner than $2\\text{ mm}$ shown completely black with white gaps.",
      "Revolved Section Line: Drawn with thin continuous outline when placed directly on view.",
      "Broken-Out Section Boundary: Thin continuous freehand line without touching existing lines.",
      "Exam Scoring Tip: Never draw hidden lines on a sectional view unless strictly required for dimensioning."
    ]
  },
  "machine drawing:::u4": {
    "highlights": [
      "Types of Assembly Drawings: Design assembly (conceptual layout), Working assembly (manufacturing blueprint with part list and tolerances), Exploded assembly (pictorial view showing disassembly sequence for maintenance).",
      "Bill of Materials (BOM) / Parts List: Structured tabular schedule listing: Item number, Part name, Quantity required, Material specification (e.g. CI, MS, Brass), and Drawing reference number.",
      "Plummer Block (Pedestal Bearing) Assembly: Cast iron base block, brass bush split into upper and lower halves with lubricating oil hole, cast iron cap, square-headed bolts, and nuts with lock nuts.",
      "Stuffing Box Assembly: Prevents fluid leakage along reciprocating piston rod of steam engine/pump; Comprises stuffing box body, gland bush, gland packing rings, and studs with nuts.",
      "Screw Jack Assembly: Heavy mechanical lifting jack; Cast steel body, bronze nut screwed into top body, square-threaded steel spindle, swivel head (bearing cup), and tommy bar for applying torque.",
      "Protected Flange Coupling: Connects collinear shafts; Keyed driving and driven flanges, cylindrical perimeter shroud protecting bolt heads and nuts, fitted bolts in reamed holes.",
      "Universal Coupling (Hooke's Joint): Transmits torque between two shafts intersecting at variable angle; Comprises two forked ends, central cross-pin (spider), and securing pins.",
      "Machine Vice Assembly: Clamping workpiece for milling/shaping; Fixed cast iron body with hardened steel jaw, movable jaw sliding on dovetail guides, square-threaded lead screw, and handle.",
      "Pipe Joints & Valves (Non-Return / Safety Valve): Flanged pipe joints with rubber gasket; Ramsbottom spring-loaded safety valve or lift check valve ensuring unidirectional fluid flow.",
      "University Examination Strategy: Assemble details of a Plummer block or Screw Jack into complete front elevation in half-section and top view, compile the Bill of Materials, and check fits and clearances."
    ],
    "keyPoints": [
      "Bill of Materials Sequence: Item Number, Part Name, Material, Quantity, Remarks.",
      "Plummer Block Brass Split: Split brass bushes allow replacement without disassembling the shaft.",
      "Screw Jack Spindle Thread: Square thread (high efficiency, zero radial bursting force on nut).",
      "Hooke's Joint Angular Limit: Operates effectively up to $\\approx 15-20^\\circ$ shaft inclination angle.",
      "Protected Flange Shroud: Outer rim prevents clothing from catching on rotating bolt heads.",
      "Stuffing Box Packing: Asbestos, graphite, or PTFE braided rings compressed by gland.",
      "Machine Vice Lead Screw: Transmits axial clamping thrust while movable jaw traverses.",
      "Assembly Drawing Tolerance: State limits and fits (e.g. $H7/g6$ for sliding, $H7/p6$ for press fit).",
      "Item Callout Balloon: Circle with item number linked to part by thin leader line with arrow or dot.",
      "Exam Scoring Tip: Double-check that centerlines match exactly across all assembled parts before drawing section lines."
    ]
  },
  "machine drawing:::u5": {
    "highlights": [
      "Computer-Aided Design (CAD) Systems Architecture: Graphics hardware, geometric modeling kernel (Parasolid, ACIS), database structure, and user interface; 2D drafting vs 3D solid modeling.",
      "Geometric Modeling Paradigms: Wireframe modeling (vertices and edges only, ambiguous surface representation), Surface modeling (B-rep, Bezier, B-spline, NURBS surfaces), and Solid modeling (unambiguous volumetric representation).",
      "Constructive Solid Geometry (CSG): Boolean operations (Union $A \\cup B$, Difference / Subtract $A - B$, Intersection $A \\cap B$) applied to basic geometric primitives (block, cylinder, sphere, cone, torus).",
      "Boundary Representation (B-Rep): Topological entities (vertices, edges, faces, loops) linked to underlying geometric definitions; Satisfies Euler-Poincaré formula for closed solids: $V - E + F - (L - F) - 2(B - G) = 0$; For simple polyhedra: $V - E + F = 2$.",
      "Parametric & Feature-Based Solid Modeling: Dimension-driven geometry; Fully constrained sketches (geometric constraints: coincident, parallel, tangent, concentric; dimensional constraints); Feature tree history (Extrude, Revolve, Sweep, Loft, Fillet, Pattern).",
      "Direct Modeling vs History-Based Modeling: History-based models track sequential feature dependencies; Direct modeling enables dynamic pushing/pulling of geometric faces without parametric feature tree rebuild errors.",
      "CAD Data Exchange Standards: Initial Graphics Exchange Specification (IGES, surface-based), Standard for the Exchange of Product Model Data (STEP ISO 10303, comprehensive B-rep and PMI), and STL (stereolithography, triangulated mesh for 3D printing).",
      "Assembly Modeling in CAD: Bottom-up assembly (inserting pre-modeled components and applying mates: coincident, concentric, distance, gear) vs Top-down assembly (designing parts in-place within assembly context).",
      "Geometric Transformations in 2D/3D CAD: Homogeneous coordinate transformation matrices for translation, rotation, scaling, and reflection: $[x' \\; y' \\; z' \\; 1] = [x \\; y \\; z \\; 1] [T]$.",
      "University Examination Strategy: State the Euler-Poincaré formula for solid modeling, perform 2D transformation matrix multiplications for rotation and scaling, and compare CSG vs B-Rep modeling."
    ],
    "keyPoints": [
      "Euler-Poincaré Formula: $V - E + F = 2$ (for simple closed polyhedra).",
      "General Euler-Poincaré: $V - E + F - H = 2(B - G)$ (where $H$ is hole in face, $G$ is through-hole genus).",
      "2D Rotation Matrix (Angle $\\theta$): $\\begin{bmatrix} \\cos\\theta & \\sin\\theta & 0 \\\\ -\\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$.",
      "2D Translation Matrix: $\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ t_x & t_y & 1 \\end{bmatrix}$.",
      "CSG Primitives: Primitives combined via Boolean Union, Difference, and Intersection.",
      "B-Rep Topology Hierarchy: Solid $\\to$ Shell $\\to$ Face $\\to$ Loop $\\to$ Edge $\\to$ Vertex.",
      "NURBS Definition: Non-Uniform Rational B-Splines (exact representation of analytical and freeform surfaces).",
      "STEP Standard: ISO 10303 for complete engineering product data exchange.",
      "STL File Format: Approximates solid boundaries with unordered planar triangular facets.",
      "Exam Scoring Tip: In homogeneous coordinates, a point in 3D space is represented as a 4-element row vector $[x, y, z, 1]$."
    ]
  },
  "surveying & geomatics:::u1": {
    "highlights": [
      "Fundamental Principles of Surveying: (1) Working from whole to part (establishing accurate primary framework of control stations and filling in interior detail to prevent accumulation of local errors); (2) Locating new station point by at least two independent measurements (two distances, two angles, or one distance and one angle); Plane Surveying (curvature of earth neglected, valid for areas $<250\\text{ km}^2$) vs Geodetic Surveying (curvature of earth accounted for).",
      "Linear Measurements & Chain Surveying: Ranging and chaining survey lines; Chains (Metric chains 20 m and 30 m, Gunter's chain 66 ft, Engineer's chain 100 ft, Revenue chain 33 ft); Tapes (Cloth/metallic, Steel, Invar tape composed of $36\\%\\text{ Ni}$ and $64\\%\\text{ Fe}$ with negligible thermal expansion coefficient for primary geodetic base lines); Ranging rods, arrows, pegs, optical square, cross-staff.",
      "Tape and Chain Errors & Corrections: Instrumental and environmental corrections applied to measured base length: (1) Correction for Absolute Length: $C_a = L \\left(\\frac{l' - l}{l}\\right)$; (2) Correction for Temperature: $C_t = \\alpha (T_m - T_0) L$; (3) Correction for Pull / Tension: $C_p = \\frac{(P_m - P_0) L}{A E}$; (4) Correction for Sag: $C_s = -\\frac{w^2 L^3}{24 P^2} = -\\frac{W^2 L}{24 P^2}$ (always negative); (5) Slope Correction: $C_h = -\\frac{h^2}{2L}$ or $-L(1 - \\cos\\theta)$ (always negative).",
      "Obstacles in Chaining: Obstacles to ranging but not chaining (hillock or intervening high ground, solved by reciprocal ranging); Obstacles to chaining but not ranging (river, pond, solved by constructing right-angled triangles or similar triangles); Obstacles to both chaining and ranging (tall building, solved using parallel lines or optical squares).",
      "Compass Surveying & Earth's Magnetism: Magnetic Meridian (direction indicated by freely suspended balanced magnetic needle); True / Geographic Meridian (direction along line connecting true geographic North and South poles); Magnetic Declination (horizontal angle between true meridian and magnetic meridian at a place: East declination or West declination); Isogonic lines (joining points of equal declination) and Agonic lines (zero declination); Magnetic Dip (angle needle makes with horizontal plane; $0^\\circ$ at magnetic equator, $90^\\circ$ at magnetic poles).",
      "Bearings Systems & Conversions: (1) Whole Circle Bearing (WCB / Azimuth): angle measured clockwise from magnetic North from $0^\\circ$ to $360^\\circ$ (used in Prismatic Compass); (2) Quadrantal Bearing (QB / Reduced Bearing RB): angle measured from North or South toward East or West from $0^\\circ$ to $90^\\circ$ (used in Surveyor's Compass); Conversions: $QB = \\text{N } \\theta \\text{ E}$ for $0-90^\\circ$, $\\text{S } (180^\\circ - \\theta) \\text{ E}$ for $90-180^\\circ$, $\\text{S } (\\theta - 180^\\circ) \\text{ W}$ for $180-270^\\circ$, $\\text{N } (360^\\circ - \\theta) \\text{ W}$ for $270-360^\\circ$.",
      "Fore Bearing (FB) and Back Bearing (BB): Fore bearing (bearing of line in direction of progress of survey); Back bearing (bearing of line in opposite direction); Fundamental relationship: $BB = FB \\pm 180^\\circ$ (use $+180^\\circ$ if $FB < 180^\\circ$, use $-180^\\circ$ if $FB > 180^\\circ$); In QB system: numerical value remains unchanged, directions swap (e.g. $FB = \\text{N } 35^\\circ \\text{ E} \\implies BB = \\text{S } 35^\\circ \\text{ W}$).",
      "Prismatic Compass vs Surveyor's Compass: Prismatic Compass (WCB $0-360^\\circ$ engraved inverted on graduated ring attached to magnetic needle, broad needle, sighting and reading done simultaneously through prism, held in hand or tripod); Surveyor's Compass (QB system $0-90^\\circ$ engraved direct on fixed box ring, edge-bar needle swings freely, sighting and reading done separately, requires tripod).",
      "Local Attraction & Correction in Compass Traverses: Local attraction (distortion of magnetic needle caused by local magnetic bodies: steel structures, power lines, iron pipes, underground cables); Detection: difference between $FB$ and $BB$ of a line differs from exactly $180^\\circ$; Station free from local attraction identified when $|FB - BB| = 180^\\circ$; Two correction methods: (1) Method of Included Angles (interior angles computed from raw bearings are unaffected by local attraction, corrected bearings calculated forward from unaffected station); (2) Method of Successive Corrections at each station.",
      "University Examination Strategy: State the two primary surveying principles, apply all tape corrections (temperature, pull, sag, slope) to base line measurements, convert between WCB and QB systems, calculate interior angles of closed compass traverses, and eliminate local attraction errors."
    ],
    "keyPoints": [
      "Two Core Principles: (1) Work from whole to part; (2) Fix new station by at least two independent measurements.",
      "Invar Tape Composition: $36\\%\\text{ Nickel}$ and $64\\%\\text{ Iron}$ (extremely low thermal expansion).",
      "Tape Sag Correction Formula: $C_s = -\\frac{W^2 L}{24 P^2}$ (always strictly subtractive).",
      "Tape Slope Correction Formula: $C_h = -\\frac{h^2}{2L}$ (always strictly subtractive).",
      "True Bearing Equation: $\\text{True Bearing} = \\text{Magnetic Bearing} \\pm \\text{Declination}$ ($+$ for East, $-$ for West).",
      "Back Bearing Relationship: $BB = FB \\pm 180^\\circ$.",
      "Prismatic Compass Bearing System: Whole Circle Bearing ($0^\\circ$ to $360^\\circ$) read through reflecting prism.",
      "Surveyor's Compass Bearing System: Quadrantal Bearing ($0^\\circ$ to $90^\\circ$ in four quadrants).",
      "Local Attraction Verification: A survey line is free from local attraction if and only if $|FB - BB| = 180^\\circ$.",
      "Exam Gold Tip: Included angles between survey lines calculated from raw bearings are completely immune to local attraction because both forward and backward sights from the same station are rotated by identical magnetic deviation."
    ]
  },
  "surveying & geomatics:::u2": {
    "highlights": [
      "Definitions and Terminology in Leveling: Level surface (curved surface concentric with mean spheroid of earth, everywhere normal to gravity plumb line); Horizontal surface (tangent to level surface at a point); Datum (arbitrary reference level surface to which elevations are referred, e.g. Mean Sea Level MSL at Mumbai); Reduced Level (RL: elevation above or below datum); Benchmark (BM: permanent reference point of known fixed RL: GTS, Permanent, Arbitrary, Temporary BM).",
      "Leveling Operations & Sights: Backsight (BS: first staff reading taken after setting up instrument, taken on point of known RL); Foresight (FS: last staff reading taken before moving instrument to new station); Intersight (IS: staff reading taken on intermediate point between BS and FS); Change Point / Turning Point (CP: staff station where both FS and BS are taken to shift instrument position).",
      "Booking and Reducing Levels — Two Standard Methods: (1) Height of Instrument (HI) / Collimation Method: Plane of Collimation $HI = RL_{BM} + BS$; Reduced levels of subsequent stations $RL = HI - IS$ or $RL = HI - FS$; New $HI = RL_{CP} + BS_{new}$; Arithmetic check: $\\sum BS - \\sum FS = \\text{Last } RL - \\text{First } RL$; Faster for numerous intermediate sights; (2) Rise and Fall Method: Compares consecutive staff readings: Rise if previous reading $>$ current reading, Fall if previous reading $<$ current reading; $RL = \\text{Previous } RL + \\text{Rise}$ or $RL = \\text{Previous } RL - \\text{Fall}$; Arithmetic check: $\\sum BS - \\sum FS = \\sum \\text{Rise} - \\sum \\text{Fall} = \\text{Last } RL - \\text{First } RL$; More rigorous check providing complete verification of all intermediate sights.",
      "Earth's Curvature and Refraction Corrections: (1) Curvature Correction ($C_c$): due to spherical surface of earth falling away from horizontal line of sight: $C_c = -\\frac{d^2}{2R} = -0.0785 d^2$ meters (where $d$ is distance in km; always subtractive); (2) Refraction Correction ($C_r$): due to atmospheric density gradient bending light ray downward toward earth: $C_r = +\\frac{1}{7} C_c = +0.0112 d^2$ meters (always additive); (3) Combined Correction: $C = C_c + C_r = -0.0673 d^2$ meters (always subtractive); Distance to visible horizon: $d = \\sqrt{h / 0.0673} = 3.855 \\sqrt{h}$ km.",
      "Reciprocal Leveling: Precise leveling across wide rivers, ravines, or valleys where instrument cannot be set up midway; Eliminates: (1) Curvature error; (2) Refraction error; (3) Line of collimation error; True elevation difference: $h = \\frac{(h_a - h_b) + (h'_a - h'_b)}{2}$; Collimation error: $e = \\frac{(h_a - h_b) - (h'_a - h'_b)}{2}$.",
      "Types of Leveling Instruments & Tests: Dumpy Level (rigidly fixed telescope and vertical spindle), Tilting Level (micrometer tilting screw for horizontal line of sight, high precision), Auto-Level (internal optical pendulum compensator automatically levels line of sight); Two-Peg Test: standard test to detect and adjust collimation error in leveling instruments.",
      "Contouring Fundamentals: Contour Line (imaginary line on ground surface connecting points of equal reduced level); Contour Interval (vertical distance between consecutive contour lines, constant for a map); Horizontal Equivalent (horizontal distance between consecutive contour lines, varies with steepness of slope).",
      "Characteristics of Contours: (1) Contour lines close on themselves within or outside map boundaries; (2) Concentric closed contours with values increasing inward indicate a Hill; (3) Concentric closed contours with values decreasing inward indicate a Pond / Depression; (4) Closely spaced contours indicate steep slope, widely spaced contours indicate gentle slope, equally spaced parallel contours indicate uniform plane slope; (5) Contours cross watershed/ridge lines and valley lines at $90^\\circ$ (V-shapes point upstream in valleys, U-shapes point downhill on ridges); (6) Contours never cross or intersect except in rare case of an overhanging cliff; (7) Contours merge into a single line at a vertical cliff.",
      "Methods of Locating Contours: (1) Direct Method (tracing actual contour points on ground using level and staff, highly accurate but slow and tedious); (2) Indirect Method: Square / Grid method (spot levels at grid intersections for flat terrain), Cross-sections method (along center line of road/railway route), Radial lines / Tachometric method (for hilly terrain); Linear and graphical interpolation of contours.",
      "University Examination Strategy: Reduce leveling field books using both Height of Instrument and Rise & Fall methods applying complete arithmetic checks, calculate combined curvature-refraction corrections and horizon visibility distances, solve reciprocal leveling problems to find true elevation differences and collimation errors, and list key characteristics of contour lines."
    ],
    "keyPoints": [
      "Height of Instrument Formula: $HI = RL + BS$.",
      "Rise & Fall Leveling Check: $\\sum BS - \\sum FS = \\sum \\text{Rise} - \\sum \\text{Fall} = \\text{Last } RL - \\text{First } RL$.",
      "Curvature Correction Formula: $C_c = -0.0785 d^2$ meters ($d$ in km).",
      "Refraction Correction Formula: $C_r = +0.0112 d^2$ meters ($d$ in km).",
      "Combined Curvature & Refraction: $C = -0.0673 d^2$ meters (always subtractive).",
      "Visible Horizon Distance: $d = 3.855 \\sqrt{h}$ km (where $h$ is eye height in meters).",
      "Reciprocal Leveling True Difference: $h = \\frac{(h_a - h_b) + (h'_a - h'_b)}{2}$.",
      "Hill Contour Pattern: Concentric closed contours with elevations increasing inward toward center.",
      "Depression Contour Pattern: Concentric closed contours with elevations decreasing inward toward center.",
      "Exam Gold Tip: Reciprocal leveling completely eliminates all three major systematic errors simultaneously: earth's curvature, average atmospheric refraction, and instrument collimation line tilt."
    ]
  },
  "surveying & geomatics:::u3": {
    "highlights": [
      "Theodolite Components & Geometry: Precision instrument for measuring horizontal and vertical angles; Transit Theodolite (telescope can be rotated / transited through a complete $360^\\circ$ revolution in vertical plane about horizontal trunnion axis); Essential axes: Vertical axis, Horizontal / Trunnion axis, Line of Collimation (line connecting optical center of objective to reticle crosshairs), Axis of Plate Level, Axis of Altitude Bubble.",
      "Fundamental Geometric Relationships of Theodolite: (1) Axis of plate level must be perpendicular to vertical axis; (2) Line of collimation must be perpendicular to horizontal axis; (3) Horizontal axis must be perpendicular to vertical axis; (4) Axis of telescope bubble must be parallel to line of collimation; (5) Vertical circle vernier must read zero when line of collimation is horizontal.",
      "Measurement of Horizontal Angles: (1) Face Left (Telescope Normal / Direct: vertical circle is on observer's left) vs Face Right (Telescope Inverted / Reversed: vertical circle on observer's right); Taking mean of Face Left and Face Right readings eliminates collimation error, trunnion axis tilt error, and index error; (2) Repetition Method (successive mechanical accumulation of angle on graduated limb, used for single high-precision angle, divides instrumental vernier error by $n$); (3) Reiteration Method (observing several angles round the horizon from a single central station, closed horizon check to $360^\\circ$).",
      "Measurement of Vertical Angles: Zenith angle $Z$, Angle of Elevation ($+$, above horizon), Angle of Depression ($-$, below horizon); Index Error of vertical circle: eliminated by averaging Face Left and Face Right observations.",
      "Theodolite Traverse Surveying: Closed traverse (polygon starting and closing at same station or connecting two known control stations) vs Open traverse (linear unclosed route for road/canal, lacks self-checking capability); Gale's Traverse Table framework.",
      "Latitudes and Departures in Traverse Computation: Coordinate reference axes (True North-South as $Y$-axis, East-West as $X$-axis); Latitude of line $L$: projection onto North-South meridian: $L = l \\cos\\theta$ ($+L$ Northing, $-L$ Southing); Departure of line $D$: projection onto East-West reference: $D = l \\sin\\theta$ ($+D$ Easting, $-D$ Westing) where $l$ is measured length and $\\theta$ is whole circle bearing.",
      "Conditions of Traverse Closure: For mathematically closed geometric polygon: (1) $\\sum \\text{Interior Angles} = (2n - 4) \\times 90^\\circ$; (2) $\\sum \\text{Latitudes} = \\sum L = 0$; (3) $\\sum \\text{Departures} = \\sum D = 0$.",
      "Error of Closure & Precision Ratio: In practice due to measurement errors, $\\sum L = e_L \\ne 0$ and $\\sum D = e_D \\ne 0$; Linear Error of Closure: $e = \\sqrt{e_L^2 + e_D^2}$; Direction of error of closure: $\\tan\\theta = \\frac{e_D}{e_L}$; Relative Error / Precision of Closure: $\\frac{e}{P} = \\frac{\\sqrt{e_L^2 + e_D^2}}{\\sum l}$ (e.g. $1/5000$).",
      "Balancing of Traverses (Adjustment Methods): (1) Bowditch's Rule (Compass Rule: assumes angular and linear errors have equal precision and linear errors proportional to $\\sqrt{l}$): Correction to Latitude $c_L = -e_L \\left(\\frac{l}{\\sum l}\\right)$, Correction to Departure $c_D = -e_D \\left(\\frac{l}{\\sum l}\\right)$; (2) Transit Rule (assumes angular measurements are more precise than linear measurements): $c_L = -e_L \\left(\\frac{|L|}{\\sum |L|}\\right)$, $c_D = -e_D \\left(\\frac{|D|}{\\sum |D|}\\right)$; (3) Graphical adjustment method.",
      "University Examination Strategy: Explain the repetition and reiteration methods of horizontal angle measurement showing how instrumental errors are eliminated by face left/right observations, compute latitudes and departures for closed traverses, calculate linear error of closure and relative precision, and balance traverses using Bowditch's and Transit rules."
    ],
    "keyPoints": [
      "Telescope Transiting Definition: Rotating telescope through $180^\\circ$ in vertical plane about horizontal trunnion axis.",
      "Face Left & Face Right Elimination: Taking average of FL and FR cancels out line of collimation, trunnion axis tilt, and vertical index errors.",
      "Latitude Formula: $L = l \\cos\\theta$ ($+L$ Northing, $-L$ Southing).",
      "Departure Formula: $D = l \\sin\\theta$ ($+D$ Easting, $-D$ Westing).",
      "Closed Traverse Geometry: $\\sum L = 0$ and $\\sum D = 0$.",
      "Linear Error of Closure: $e = \\sqrt{(\\sum L)^2 + (\\sum D)^2}$.",
      "Direction of Closing Error: $\\tan\\theta = \\frac{\\sum D}{\\sum L}$.",
      "Bowditch Latitude Correction: $c_L = -(\\sum L) \\times \\frac{l}{\\sum l}$.",
      "Bowditch Departure Correction: $c_D = -(\\sum D) \\times \\frac{l}{\\sum l}$.",
      "Exam Gold Tip: Use Bowditch's rule when traverse sides were measured by chain/tape where linear and angular measurements have comparable precision; use the Transit rule when angles were measured with high-precision theodolites."
    ]
  },
  "surveying & geomatics:::u4": {
    "highlights": [
      "Classification of Alignment Curves: Horizontal curves (provided at changes in horizontal route direction: Circular curves, Transition curves) and Vertical curves (provided at gradient grade changes: Summit curves, Valley curves); Simple curve (single circular arc of radius $R$ connecting two straight tangents), Compound curve (two or more circular arcs of different radii curving in same direction), Reverse curve (two circular arcs curving in opposite directions with common tangent).",
      "Geometry of Simple Circular Curves: Point of Intersection ($PI$ / Apex $V$), Point of Curve ($PC$ / $T_1$, beginning of curve), Point of Tangency ($PT$ / $T_2$, end of curve); Tangent Length $T = R \\tan(\\Delta/2)$; Length of Curve $L = \\frac{\\pi R \\Delta}{180^\\circ}$; Long Chord $C = 2 R \\sin(\\Delta/2)$; External / Apex Distance $E = R [\\sec(\\Delta/2) - 1]$; Mid-ordinate / Versine $M = R [1 - \\cos(\\Delta/2)]$; Degree of Curve $D$: angle subtended at center by standard 30 m arc: $D = \\frac{1718.9}{R}$ degrees ($R = 1720 / D$).",
      "Linear Methods of Setting Out Simple Curves: Without angular instruments: (1) Offsets from Long Chord ($y = \\sqrt{R^2 - x^2} - (R - M)$); (2) Successive Bisection of Arcs; (3) Offsets from Tangents (perpendicular offsets $y = R - \\sqrt{R^2 - x^2} \\approx \\frac{x^2}{2R}$ or radial offsets); (4) Offsets from Chords Produced (first offset $O_1 = \\frac{C_1^2}{2R}$, general intermediate offset $O_n = \\frac{C_n (C_{n-1} + C_n)}{2R}$, last offset $O_k = \\frac{C_k (C_{n} + C_k)}{2R}$); Widely used in highway route location.",
      "Angular Method of Setting Out Simple Curves (Rankine's Deflection Angle Method): Most precise method using theodolite and steel tape; Deflection angle $\\delta$ between initial tangent and chord: $\\delta_n = \\frac{1718.9 C_n}{R}$ minutes; Total accumulated tangential deflection angle to point $n$: $\\Delta_n = \\delta_1 + \\delta_2 + \\dots + \\delta_n$; Checking condition: total deflection angle to $PT$ must equal $\\Delta/2$; Two-theodolite method (eliminates chaining across rough terrain).",
      "Transition Curves & Superelevation (Cant): Transition curve (curve of continuously varying radius from $\\infty$ at straight tangent to $R$ at circular curve junction); Purpose: (1) Introduce centrifugal acceleration gradually at constant rate of change $\\alpha$; (2) Introduce superelevation / cant $e = \\frac{V^2 B}{g R}$ uniformly; (3) Provide extra road widening; Ideal transition curve is the Clothoid / Euler Spiral ($l \\propto 1/r$, radius varies inversely with length from origin); Length of transition curve: $L = \\frac{v^3}{c R}$ (where $c$ is allowable rate of change of centrifugal acceleration, typically $0.3-0.75\\text{ m/s}^3$).",
      "Vertical Curves: Parabolic profile chosen due to constant rate of change of grade; (1) Summit / Crest Curve (convex upward, sight distance SSD and OSD govern length design); (2) Valley / Sag Curve (concave upward, headlight sight distance and passenger comfort govern length); Equation of vertical parabolic curve: $y = \\frac{(g_1 - g_2) x^2}{2 L} = \\frac{A x^2}{2 L}$.",
      "Tachometry Fundamentals & Horizontal Formulas: Rapid optical method of surveying where horizontal distances and vertical elevations are obtained without chaining by measuring intercepted staff intervals $s = S_{top} - S_{bottom}$; Telescope equipped with stadia diaphragm; Distance equation: $D = k \\cdot s + C = \\frac{f}{i} \\cdot s + (f + d)$ where $k = f/i = 100$ is multiplying constant, $C = (f+d)$ is additive constant; Anallatic Lens eliminates additive constant ($C = 0$), simplifying formula to $D = 100 s$.",
      "Tachometric Formulas for Inclined Sights: Angle of elevation or depression $\\theta$: (1) Staff Held Vertically: Horizontal distance $D = k \\cdot s \\cos^2\\theta + C \\cos\\theta$; Vertical elevation component $V = \\frac{1}{2} k \\cdot s \\sin(2\\theta) + C \\sin\\theta$; Reduced level of station $RL = RL_{inst} + HI \\pm V - h$ (where $h$ is central crosshair staff reading); (2) Staff Held Normal to Line of Sight.",
      "Tangential Tachometry: Utilized when ordinary staff without stadia crosshairs is used; Taking vertical angles $\\theta_1$ and $\\theta_2$ to two distinct targets spaced known vertical distance $s$ apart on staff: $D = \\frac{s}{\\tan\\theta_1 - \\tan\\theta_2}$ (both angles of elevation); Requires zero stadia intercept.",
      "University Examination Strategy: Calculate simple curve elements ($T, L, C, E, M$) and compute setting out deflection angles using Rankine's method, derive the length of transition spiral curves based on allowable rate of centrifugal acceleration, derive tachometric formulas for inclined sights with vertical staff showing $D = k s \\cos^2\\theta$, and calculate reduced levels of distant tachometric stations."
    ],
    "keyPoints": [
      "Curve Tangent Length: $T = R \\tan(\\Delta/2)$.",
      "Curve Arc Length: $L = \\frac{\\pi R \\Delta}{180^\\circ}$.",
      "Rankine Deflection Angle: $\\delta_n = \\frac{1718.9 C_n}{R}$ minutes.",
      "Offsets from Chords Produced: $O_n = \\frac{C_n (C_{n-1} + C_n)}{2R}$.",
      "Highway Superelevation Formula: $e = \\frac{v^2}{g R}$.",
      "Transition Curve Length: $L = \\frac{v^3}{c R}$ (rate of change of acceleration).",
      "Stadia Tachometry Distance (Horizontal): $D = k s + C = 100 s$ (with anallatic lens $C=0$).",
      "Stadia Inclined Sight Distance (Vertical Staff): $D = k s \\cos^2\\theta + C \\cos\\theta$.",
      "Stadia Vertical Elevation Component: $V = \\frac{1}{2} k s \\sin(2\\theta) + C \\sin\\theta$.",
      "Exam Gold Tip: An anallatic telescope uses an internal lens so that the vertex of the measuring angle coincides with the center of the instrument, making the additive constant $C = 0$ and reducing the distance formula to $D = 100 s \\cos^2\\theta$."
    ]
  },
  "surveying & geomatics:::u5": {
    "highlights": [
      "Total Station Architecture: Integrated electronic surveying instrument combining: (1) Electronic Theodolite (microprocessor-controlled digital angle measurement via optical rotary encoders); (2) Electronic Distance Meter (EDM: coaxial infrared or laser phase-shift / pulse measurement); (3) Onboard Microprocessor and Data Collector; (4) Dual-axis electronic tilt compensators; Liquid crystal graphical display and alphanumeric keypad.",
      "Electronic Distance Measurement (EDM) Principles: (1) Phase Shift Method: modulated infrared/microwave carrier wave transmitted to retroreflective prism; Phase delay $\\Delta\\phi$ between transmitted and returned signal measured: $D = \\frac{1}{2}\\left(n \\lambda + \\frac{\\Delta\\phi}{2\\pi}\\lambda\\right)$; Multi-frequency modulation solves integer ambiguity $n$; (2) Time-of-Flight / Pulse Method: high-power pulsed laser beam, distance calculated directly from round-trip propagation time: $D = \\frac{c \\cdot \\Delta t}{2 n_{ref}}$ (enables reflectorless measurement off natural rock/concrete surfaces up to 1000 m).",
      "Total Station Operations & Field Procedures: Instrument setup, electronic leveling, and centering using laser plummet; Orientation by Backsight (setting azimuth/bearing or known coordinates of reference benchmark); Field measuring programs: (1) Missing Line Measurement (MLM: calculates horizontal distance, slope distance, and gradient between any two target points); (2) Remote Elevation Measurement (REM: determines height of inaccessible points like high-voltage transmission lines); (3) Resection (calculating instrument station coordinates from sights to 2 or 3 known control points); (4) Coordinate layout / Stake-out.",
      "Global Positioning System (GPS / GNSS) Overview: Satellite-based radio navigation system developed by US DoD; Global Navigation Satellite System (GNSS) encompasses GPS (USA: 24+ satellites in 6 orbital planes at $20,200\\text{ km}$ altitude), GLONASS (Russia), Galileo (European Union), BeiDou (China), and NavIC (India: regional constellation of 7 geostationary/geosynchronous satellites).",
      "GPS Segments & Signal Structure: Three primary segments: (1) Space Segment (satellite constellation transmitting dual-frequency L-band carrier waves: L1 at $1575.42\\text{ MHz}$, L2 at $1227.60\\text{ MHz}$); (2) Control Segment (Master Control Station at Schriever AFB, tracking monitor stations, ground uplink antennas); (3) User Segment (GPS receivers and antennas); Ranging codes: Coarse/Acquisition (C/A code on L1) and Precision (P/Y encrypted code on L1 and L2).",
      "GPS Positioning Principles & Trilateration: 3D point positioning based on satellite resection / trilateration; Pseudorange equation: $\\rho_i = c \\cdot \\Delta t_i = \\sqrt{(x_i - X)^2 + (y_i - Y)^2 + (z_i - Z)^2} + c \\cdot \\Delta t_r$ where $(x_i, y_i, z_i)$ are known satellite coordinates, $(X, Y, Z)$ are unknown user receiver coordinates, and $\\Delta t_r$ is receiver clock bias; Minimum of four satellites required simultaneously to solve for four mathematical unknowns ($X, Y, Z, \\Delta t_r$); Geometric Dilution of Precision (GDOP / PDOP: satellite geometry quality indicator, PDOP $< 4$ excellent).",
      "Differential GPS (DGPS) & Real-Time Kinematic (RTK): (1) Differential GPS (DGPS): stationary base station at known benchmark computes pseudorange corrections and broadcasts them via radio link to mobile rover receivers, canceling out atmospheric ionospheric and tropospheric delays, achieving sub-meter accuracy ($0.5-1\\text{ m}$); (2) Real-Time Kinematic (RTK): carrier-phase differential positioning resolving carrier cycle ambiguity on the fly, delivering centimeter-level ($1-2\\text{ cm}$) real-time positioning for construction layout and machine guidance.",
      "Geographic Information Systems (GIS) Fundamentals: Computerized system for capturing, storing, querying, analyzing, and displaying geographically referenced spatial and attribute data; Four core components: Hardware, Software, Spatial Data, and Skilled Personnel; Coordinate systems and Map Projections (Universal Transverse Mercator UTM, WGS-84 reference ellipsoid).",
      "GIS Data Models — Vector vs Raster: (1) Vector Data Model: discrete real-world features represented by precise geometric coordinates: Points (0D: boreholes, lampposts), Lines / Polylines (1D: roads, streams, utility pipes), Polygons (2D: parcels, lakes, land-use zones); Topology (spatial relationships: connectivity, adjacency, containment); (2) Raster Data Model: continuous spatial surfaces represented by matrix of uniform grid cells/pixels with assigned attribute values: Digital Elevation Models (DEM), satellite multispectral imagery; Spatial resolution (cell pixel size).",
      "University Examination Strategy: Explain the operational components and internal EDM working principles of a Total Station, detail the three segments of GPS and explain why at least 4 satellites are required for 3D positioning, compare DGPS vs RTK positioning, and contrast Vector vs Raster GIS data models."
    ],
    "keyPoints": [
      "Total Station Components: Electronic theodolite + EDM + onboard microcomputer + memory recorder.",
      "EDM Phase Shift Distance: $D = \\frac{1}{2}\\left(n \\lambda + \\frac{\\Delta\\phi}{2\\pi}\\lambda\\right)$.",
      "Laser Pulse EDM Distance: $D = \\frac{c \\Delta t}{2 n_{ref}}$ (enables reflectorless range up to 1000 m).",
      "Four Satellite GPS Requirement: Solves 4 simultaneous equations for 4 unknowns: 3D position ($X, Y, Z$) and receiver clock offset ($\\Delta t_r$).",
      "GPS Carrier Frequencies: L1 = $1575.42\\text{ MHz}$ and L2 = $1227.60\\text{ MHz}$.",
      "PDOP Metric: Position Dilution of Precision; values below 4 represent optimal satellite geometric spread.",
      "RTK Accuracy: Real-Time Kinematic carrier-phase positioning delivers $1-2\\text{ cm}$ precision.",
      "Vector GIS Primitives: Points (0D), Lines (1D), and Polygons (2D) with topological connectivity.",
      "Raster GIS Structure: Regular rectangular grid of pixel cells (e.g. satellite images, DEM).",
      "Exam Gold Tip: Never state that 3 satellites are enough for GPS; exactly four satellites are required because consumer receivers use inexpensive quartz clocks that have an unknown clock bias error $\\Delta t_r$ that must be resolved alongside $X, Y, Z$."
    ]
  },
  "building materials & construction:::u1": {
    "highlights": [
      "Building Stones Classification: Geological (Igneous: granite, basalt; Sedimentary: sandstone, limestone; Metamorphic: marble, slate, quartzite); Physical (stratified vs unstratified); Chemical (siliceous, argillaceous, calcareous).",
      "Engineering Properties & Testing of Stones: Compressive crushing strength ($>100\\text{ MPa}$ for granite, $>40\\text{ MPa}$ for sandstone); Water absorption test ($<5\\%$ for good building stone); Mohs hardness scale (1-talc to 10-diamond); Impact test (Toughness index) and Attrition test (Deval machine).",
      "Quarrying & Dressing of Stones: Blasting methods using gunpowder/dynamite; Wedging and channeling; Dressing (pitched face, hammer dressed, chisel drafted, ashlar fine dressed) to provide true bedding joints and remove quarry sap.",
      "Brick Earth Composition & Manufacture: Ideal brick clay: Silica ($50-60\\%$, prevents cracking/shrinkage), Alumina ($20-30\\%$, imparts plasticity), Lime ($<5\\%$, aids fusion), Iron oxide ($5-6\\%$, gives characteristic red color), Magnesia; Harmful ingredients: excess lime, iron pyrites, alkalis (cause efflorescence).",
      "Brick Manufacturing Process: Preparation of clay (unsoiling, digging, weathering, blending, tempering in pug mill), Molding (hand molding vs machine extrusion), Drying (hack drying under shade), and Burning.",
      "Brick Burning Kilns: Intermittent kilns (clamp burning, up-draught, down-draught) vs Continuous kilns (Bull's Trench kiln, Hoffman's kiln, tunnel kiln); Burning stages: water smoking ($100-400^\\circ\\text{C}$), dehydration ($400-650^\\circ\\text{C}$), oxidation ($650-900^\\circ\\text{C}$), and vitrification ($900-1100^\\circ\\text{C}$).",
      "Standard Brick Dimensions & Classification: Standard modular brick size $190 \\times 90 \\times 90\\text{ mm}$ (nominal size with mortar $200 \\times 100 \\times 100\\text{ mm}$); First class bricks (compressive strength $\\ge 10.5\\text{ MPa}$, water absorption $<20\\%$, metallic ringing sound on impact).",
      "Field & Laboratory Testing of Bricks: Compressive strength test (soaked in water 24 hours, frog filled with 1:3 cement mortar, tested in CTM); Water absorption test (cold water 24 hours or boiling 5 hours); Efflorescence test (submerged in distilled water, rated nil, slight, moderate, heavy, serious).",
      "Special Bricks & Ceramic Blocks: Refractory fireclay bricks (high alumina for furnaces $>1600^\\circ\\text{C}$), Perforated and hollow clay blocks (thermal and acoustic insulation, light dead load), Acid-resistant bricks, and Fly-ash lime gypsum (FaL-G) eco-bricks.",
      "University Examination Strategy: State constituents of good brick earth with their functions and defects caused by excess, compare Hoffman's continuous kiln with clamp burning, and calculate water absorption percentage."
    ],
    "keyPoints": [
      "Modular Brick Dimensions: $190 \\times 90 \\times 90\\text{ mm}$ (Nominal with mortar: $200 \\times 100 \\times 100\\text{ mm}$).",
      "First Class Brick Strength: Minimum $10.5\\text{ MPa}$ ($105\\text{ kg/cm}^2$).",
      "Second Class Brick Strength: Minimum $7.0\\text{ MPa}$.",
      "First Class Water Absorption: Shall not exceed $20\\%$ of dry weight after 24-hour immersion.",
      "Stone Water Absorption Limit: Good building stone must absorb less than $5\\%$ water by weight.",
      "Brick Silica Function: $50-60\\%$ silica prevents cracking, shrinking, and warping.",
      "Brick Alumina Function: $20-30\\%$ alumina imparts plasticity necessary for molding.",
      "Efflorescence Cause: Soluble alkalis ($Na_2SO_4, K_2SO_4$) crystallizing as white powder on evaporation.",
      "Brick Frog Dimension: Indentation $10-20\\text{ mm}$ deep on top face to form mechanical shear key for mortar.",
      "Exam Scoring Tip: Granite is an intrusive unstratified siliceous igneous rock, whereas basalt is an extrusive volcanic igneous rock."
    ]
  },
  "building materials & construction:::u2": {
    "highlights": [
      "Raw Materials of Portland Cement: Calcareous materials (limestone, chalk, $60-65\\%\\text{ CaO}$) and Argillaceous materials (clay, shale, $17-25\\%\\text{ SiO}_2, 3-8\\%\\text{ Al}_2\\text{O}_3, 0.5-6\\%\\text{ Fe}_2\\text{O}_3$); $2-3\\%$ gypsum ($CaSO_4 \\cdot 2H_2O$) interground to retard flash setting.",
      "Bogue's Compounds in Clinker: Tricalcium silicate ($C_3S$, alite, $45-60\\%$, early strength within 28 days), Dicalcium silicate ($C_2S$, belite, $15-30\\%$, progressive ultimate strength after 1 year), Tricalcium aluminate ($C_3A$, $6-10\\%$, initial flash set and high heat of hydration), and Tetracalcium aluminoferrite ($C_4AF$, $6-10\\%$, lowest strength).",
      "Hydration of Cement & Heat Evolution: Exothermic reaction; Hydration products: Calcium Silicate Hydrate (C-S-H gel / tobermorite gel, provides bonding and strength) and Calcium hydroxide ($Ca(OH)_2$, portlandite, basic pH $>12.5$ protecting steel reinforcement against corrosion).",
      "Ordinary Portland Cement (OPC) Grades: OPC 33, OPC 43, and OPC 53 conforming to IS specifications; Numbers indicate 28-day characteristic compressive strength in MPa; Initial setting time $\\ge 30\\text{ minutes}$; Final setting time $\\le 600\\text{ minutes}$ (10 hours).",
      "Special Cements & Applications: Rapid Hardening Cement (higher $C_3S$ and finer grinding), Low Heat Cement (low $C_3A$ and $C_3S$ for mass dam concrete), Portland Pozzolana Cement (PPC, uses fly ash/calcined clay, durable against sulfate attack), and Sulfate Resisting Cement ($C_3A < 5\\%$).",
      "Aggregates for Concrete: Fine aggregate (passing $4.75\\text{ mm}$ IS sieve, grading zones I to IV based on Fineness Modulus $2.2-3.2$) and Coarse aggregate ($10\\text{ mm}, 20\\text{ mm}, 40\\text{ mm}$); Flakiness and Elongation indices (must be $<15-20\\%$); Bulking of sand due to surface moisture.",
      "Workability of Concrete & Tests: Ease of placement, compaction, and finishing without segregation or bleeding; Tests: Slump test (true slump, shear slump, collapse slump), Compacting factor test (ratio of partially to fully compacted density), and Vee-Bee consistometer test.",
      "Water-Cement Ratio & Abram's Law: Compressive strength of concrete depends inversely on water-cement ratio: $f_c = \\frac{A}{B^{w/c}}$, provided full compaction is achieved; Lower $w/c$ ($0.40-0.45$) yields dense, impermeable, high-strength concrete.",
      "Concrete Curing Methods: Essential to maintain moisture and temperature for continuous C-S-H hydration; Water ponding on slabs, wet burlap covering, continuous water sprinkling, membrane curing compounds, and high-pressure steam curing for precast elements.",
      "University Examination Strategy: Calculate quantities of Bogue's compounds, explain the role of gypsum in preventing flash set, plot Abram's water-cement law curve, and describe the slump test procedure."
    ],
    "keyPoints": [
      "Abram's Water-Cement Law: $f_c = \\frac{A}{B^{w/c}}$ (strength is governed primarily by $w/c$ ratio).",
      "OPC Initial Setting Time: Minimum 30 minutes (measured with Vicat needle $1\\text{ mm}^2$).",
      "OPC Final Setting Time: Maximum 600 minutes (10 hours, annular cutting ring fails to indent).",
      "Vicat Normal Consistency: Water percentage $P$ producing needle penetration of $33-35\\text{ mm}$ from top.",
      "Soundness Test (Le Chatelier): Expansion due to free lime must not exceed $10\\text{ mm}$.",
      "Autoclave Soundness: Magnesia expansion must not exceed $0.8\\%$.",
      "Bogue's Tricalcium Silicate ($C_3S$): Produces high early strength (first 7-28 days).",
      "Bogue's Dicalcium Silicate ($C_2S$): Produces long-term progressive strength beyond 28 days.",
      "Bogue's Tricalcium Aluminate ($C_3A$): Responsible for initial set and highest heat of hydration ($865\\text{ J/g}$).",
      "Exam Scoring Tip: Gypsum ($CaSO_4 \\cdot 2H_2O$) reacts with $C_3A$ to form insoluble calcium sulfoaluminate (ettringite), preventing catastrophic flash setting."
    ]
  },
  "building materials & construction:::u3": {
    "highlights": [
      "Structure of an Exogenous Tree: Macrostructure in transverse cross-section: Pith (central core), Heartwood (inactive, dark, mechanically strong), Sapwood (outer active sap-conducting rings), Cambium layer (living cellular layer), Inner bark (phloem), and Outer protective bark.",
      "Moisture in Timber & Fiber Saturation Point (FSP): Free water (in cell cavities) vs Bound water (within cell walls); Fiber Saturation Point ($FSP \\approx 25-30\\%$ moisture); Timber shrinks and swells only when moisture content changes below FSP.",
      "Seasoning of Timber: Reducing moisture content to equilibrium ($10-12\\%$); Natural air seasoning (slow, low cost) vs Artificial seasoning (kiln seasoning with controlled humidity/temperature, chemical seasoning, boiling, electrical seasoning); Prevents fungal decay and warping.",
      "Defects and Decay in Timber: Natural defects (knots: live/dead, shakes: heart/cup/star shakes, twisted fibers); Fungal diseases: Dry rot (Poria incrassata / Merulius lacrymans, converts wood into dry brown powder in damp unventilated areas) and Wet rot; Wood-boring beetles and termites.",
      "Preservation of Timber: Pressure impregnation with creosote oil (coal-tar distillate) or water-borne copper-chrome-arsenic (CCA / Ascu formulation); Surface painting with fire-retardant chemicals (sodium silicate, ammonium phosphate).",
      "Engineered Wood Products: Plywood (odd number of thin veneers glued with grain oriented at strictly $90^\\circ$ cross-angles, eliminates directional weakness), Laminated Veneer Lumber (LVL), Glued Laminated Timber (Glulam for long-span arches), Particle board, and Medium Density Fiberboard (MDF).",
      "Structural Steel in Construction: Hot-rolled structural sections: Indian Standard Joist (ISJB, ISMB, ISWB), Channel sections (ISMC), Angle sections (ISA equal/unequal), Tee sections (ISNT), and hollow structural sections (RHS/SHS).",
      "Reinforcing Steel Bars for Concrete: Mild steel bars (Grade Fe 250, distinct yield plateau $\\sigma_y = 250\\text{ MPa}$); High Yield Strength Deformed (HYSD) bars: Cold Twisted Deformed (CTD Fe 415) and Thermo-Mechanically Treated (TMT Fe 500, Fe 550D).",
      "Thermo-Mechanically Treated (TMT) Bar Technology: High-pressure water quenching of red-hot rolling bar forms hard outer tempered martensite rim, followed by self-tempering and slow air cooling to form ductile ferrite-pearlite core; High yield strength combined with high ductility ($>14.5\\%$ elongation).",
      "University Examination Strategy: Draw a neat labeled cross-section of an exogenous tree trunk, explain the significance of the Fiber Saturation Point (FSP), describe the mechanism of dry rot, and detail TMT bar metallurgy."
    ],
    "keyPoints": [
      "Fiber Saturation Point (FSP): Moisture content $\\approx 28-30\\%$; Shrinkage begins only below FSP.",
      "Equilibrium Moisture Content (EMC): $10-12\\%$ for seasoned construction timber.",
      "Plywood Cross-Graining Rule: Odd number of plies ($3, 5, 7$) glued with grain perpendicular to adjacent plies.",
      "Ascu Wood Preservative: 1 part $As_2O_5 \\cdot 2H_2O$ + 3 parts $CuSO_4 \\cdot 5H_2O$ + 4 parts $K_2Cr_2O_7$.",
      "Dry Rot Fungus Cause: Lack of ventilation in damp, stagnant air causing wood to crumble into powder.",
      "TMT Steel Microstructure: Hard outer tempered martensite case with soft, ductile ferrite-pearlite core.",
      "Fe 415 Proof Stress: $0.2\\%$ offset yield strength is minimum $415\\text{ MPa}$.",
      "Fe 500D Ductile Steel: 'D' denotes high elongation ($\\ge 16\\%$) required for seismic earthquake resistance.",
      "Structural Steel Modulus: Young's modulus $E = 2 \\times 10^5\\text{ MPa}$ ($200\\text{ GPa}$) for all grades.",
      "Exam Scoring Tip: Heartwood is darker, denser, and more decay-resistant than sapwood because cell cavities are plugged with tannins, resins, and gums."
    ]
  },
  "building materials & construction:::u4": {
    "highlights": [
      "Brick Masonry Terms: Course (horizontal layer of bricks), Header (brick laid with short face $90 \\times 90\\text{ mm}$ exposed), Stretcher (brick laid with long face $190 \\times 90\\text{ mm}$ exposed), Closer (cut brick piece along length: queen closer, king closer), Bat (cut brick across width: half bat, three-quarter bat).",
      "English Bond: Alternative courses of headers and stretchers; Queen closer placed next to the corner header (quoin header) in header course to generate $1/4$ brick lap ($45\\text{ mm}$); Strongest and most widely used bond in heavy load-bearing walls.",
      "Flemish Bond: Each course consists of alternate headers and stretchers; Single Flemish bond (Flemish facing with English backing for walls $\\ge 1.5$ bricks thick) vs Double Flemish bond (both faces show Flemish appearance); Better aesthetic appearance than English bond but slightly weaker.",
      "Stone Masonry Classifications: Rubble masonry (undressed or roughly dressed stones: random rubble uncoursed/coursed, square rubble, dry rubble without mortar) vs Ashlar masonry (accurately dressed stones with thin joints $<3\\text{ mm}$: Ashlar fine, Ashlar rough, Ashlar chamfered, Ashlar block-in-course).",
      "Bond Stones & Through Stones in Masonry: Through stones extend through full wall thickness at horizontal intervals of $1.5\\text{ m}$ to tie front and rear wythes together; In thick walls, overlapping header stones provide structural integrity.",
      "Cavity Walls & Damp Protection: Two masonry skins (inner load-bearing leaf and outer facing leaf) separated by continuous $50-75\\text{ mm}$ air space; Tied with stainless steel or galvanized wall ties ($4-5\\text{ ties/m}^2$); Prevents rain penetration, dampness, and provides high thermal insulation.",
      "Damp Proof Course (DPC): Continuous impermeable horizontal barrier ($25-40\\text{ mm}$ thick 1:2 cement mortar with waterproofing compound or asphalt mastic) laid at plinth level above ground to intercept capillary rise of subsoil moisture.",
      "Arches & Lintels: Lintel (horizontal flexural beam over opening: RCC, stone, steel) vs Arch (curved compression structure transmitting loads laterally to abutments); Arch components: Intrados (soffit), extrados, crown, keystone, voussoirs, springing line, impost, rise, and span.",
      "Partition Walls & Partition Systems: Non-load bearing interior dividing walls; Brick partitions ($100\\text{ mm}$ half-brick wall reinforced with hoop iron), hollow clay block partitions, lightweight aerated concrete blocks (AAC), and drywall gypsum plasterboard on light-gauge steel studs.",
      "University Examination Strategy: Draw front elevation and plan of alternate courses of 1-brick thick English bond and Double Flemish bond showing quoin headers and queen closers, detail the components of a cavity wall, and draw an arch schematic."
    ],
    "keyPoints": [
      "Queen Closer Half Size: $190 \\times 45 \\times 90\\text{ mm}$ (cut longitudinally down center).",
      "King Closer Dimensions: Corner triangle cut from center of stretcher to center of header.",
      "English Bond Characteristic: Alternate complete courses of stretchers and headers; Strongest bond.",
      "Flemish Bond Characteristic: Alternating stretchers and headers in every single course.",
      "Cavity Wall Air Gap: Standard width $50\\text{ mm}$ to $75\\text{ mm}$.",
      "Cavity Wall Tie Density: Minimum 4 to 5 ties per square meter of wall area.",
      "Ashlar Joint Thickness: Precision joints not exceeding $3\\text{ mm}$ in thickness.",
      "DPC Placement Level: Installed horizontally across entire wall thickness at plinth level.",
      "Arch Keystone Function: Central wedge-shaped voussoir at crown locking all voussoirs in place.",
      "Exam Scoring Tip: The queen closer is never placed at the corner quoin; it is always placed immediately after the quoin header to maintain a half-lap staggered bond."
    ]
  },
  "building materials & construction:::u5": {
    "highlights": [
      "Role & Objectives of Foundations: Substructure transferring all superstructure dead loads, live loads, and wind/seismic loads safely to bearing soil; Prevents structural shear failure of subsoil and limits total and differential settlement.",
      "Bearing Capacity of Soil (Terzaghi's Theory): Ultimate bearing capacity for shallow continuous strip footing: $q_{ult} = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_gamma$, where $N_c, N_q, N_\\gamma$ are dimensionless bearing capacity factors depending purely on internal friction angle $\\phi$.",
      "Safe Bearing Capacity (SBC): $q_{safe} = \\frac{q_{ult} - \\gamma D_f}{FOS} + \\gamma D_f$, where Factor of Safety $FOS$ is typically taken as $2.5$ to $3.0$.",
      "Shallow Foundations Classifications: Footing depth $D_f \\le B$ (footing width); Types: Isolated spread footing (pad/stepped for single column), Combined footing (rectangular or trapezoidal supporting two columns), Strip footing (continuous for load-bearing wall), Strap / Cantilever footing, and Raft / Mat foundation.",
      "Raft (Mat) Foundations: Continuous reinforced concrete slab covering entire building footprint; Used when soil has low bearing capacity or superstructure loads are heavy, or when individual footings occupy $>50\\%$ of plot area; Bridges weak soil pockets and minimizes differential settlement.",
      "Deep Foundations & Pile Classifications: Deep foundations ($D_f > B$); Classification by load transfer: End-bearing piles (rest on bedrock/hard stratum; $Q_u = q_b A_b$) vs Friction piles (develop resistance through shaft shear friction along pile length: $Q_u = f_s A_s$); Combined end-bearing and friction.",
      "Pile Types by Material & Installation: Driven precast concrete piles, Cast-in-situ bored concrete piles (using bentonite drilling mud slurry), Under-reamed piles (single or double enlarged bulb bulbs in expansive black cotton soils), and Steel H-piles.",
      "Under-Reamed Piles in Expansive Soils: Specially designed for black cotton soils exhibiting high swelling and shrinkage; Under-reamed bulbs ($2-2.5 \\times$ shaft diameter) anchored in stable, non-active soil zone below moisture fluctuation depth ($>2.5-3.5\\text{ m}$).",
      "Cofferdams & Caissons (Well Foundations): Cofferdams (temporary watertight enclosures for bridge pier construction in rivers) vs Caissons (permanent massive hollow box, open, or pneumatic well foundations sunk into riverbed to deep hard strata).",
      "University Examination Strategy: State Terzaghi's ultimate bearing capacity formula for strip, square, and circular footings, differentiate end-bearing piles from friction piles, and draw a detailed sketch of a double under-reamed pile."
    ],
    "keyPoints": [
      "Terzaghi's Strip Footing Formula: $q_{ult} = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$.",
      "Terzaghi's Square Footing Formula: $q_{ult} = 1.3 c N_c + \\gamma D_f N_q + 0.4 \\gamma B N_\\gamma$.",
      "Terzaghi's Circular Footing Formula: $q_{ult} = 1.3 c N_c + \\gamma D_f N_q + 0.3 \\gamma B N_\\gamma$.",
      "Shallow Foundation Criterion: Depth of embedment $D_f \\le B$ (foundation width).",
      "Safe Bearing Capacity Formula: $q_{safe} = \\frac{q_{net, ult}}{FOS} + \\gamma D_f$ (with $FOS = 2.5 - 3.0$).",
      "End-Bearing Pile Capacity: $Q_u = q_p A_p$ (relies on point base resistance).",
      "Friction Pile Capacity: $Q_u = \\sum f_s A_s = \\alpha c_u A_s$ (relies on shaft adhesion).",
      "Under-Reamed Bulb Diameter: Typically $2.0$ to $2.5$ times the pile shaft diameter.",
      "Black Cotton Soil Threat: Montmorillonite clay mineral causes severe swelling when wet and deep cracking upon drying.",
      "Exam Scoring Tip: For purely cohesive clay soil under undrained conditions ($\\phi = 0$), Terzaghi's factors are $N_c = 5.7, N_q = 1.0, N_\\gamma = 0$."
    ]
  },
  "fluid mechanics:::u1": {
    "highlights": [
      "Fluid Continuum & Physical Properties: Continuum hypothesis (Knudsen number $Kn < 0.01$); Mass density $\\rho$, Specific weight $\\gamma = \\rho g$, Specific gravity $SG = \\rho / \\rho_{water}$; Dynamic viscosity $\\mu$ (Newton's law of viscosity: $\\tau = \\mu \\frac{du}{dy}$); Kinematic viscosity $\\nu = \\mu / \\rho$; Newtonian vs Non-Newtonian fluids (Dilatant, Pseudoplastic/shear-thinning, Bingham plastic, Thixotropic); Surface tension $\\sigma$ and Capillarity ($h = \\frac{4\\sigma \\cos\\theta}{\\rho g d}$); Compressibility and Bulk Modulus $K = -v \\frac{dP}{dv}$.",
      "Fluid Statics & Hydrostatic Pressure Distribution: Pascal's Law (pressure at a point in fluid at rest is isotropic / equal in all directions); Hydrostatic differential equation: $\\frac{dP}{dz} = -\\rho g = -\\gamma$; Pressure head $h = P / (\\rho g)$; Absolute, gauge, and vacuum pressures ($P_{abs} = P_{atm} + P_{gauge}$); Manometry: Piezometer, U-tube manometer, Differential manometer, Inverted U-tube manometer.",
      "Hydrostatic Forces on Submerged Surfaces: (1) Total hydrostatic force on plane submerged surface: $F = \\rho g \\bar{h} A$ (acts through Center of Pressure $h_{cp}$); Center of Pressure formula via parallel axis theorem: $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2\\theta}{A \\bar{h}}$ (always lies vertically below centroid $\\bar{h}$); (2) Hydrostatic force on curved surfaces: Horizontal component $F_x = \\rho g \\bar{h} A_{proj}$ (force on vertical projection), Vertical component $F_y = \\text{weight of fluid column supported above curved surface}$.",
      "Buoyancy & Floatation (Archimedes' Principle): Upward buoyant force equals weight of fluid displaced: $F_B = \\rho_f g V_{disp}$; Acts vertically through Center of Buoyancy $B$ (centroid of displaced volume); Stability of Submerged Bodies: stable if Center of Gravity $G$ lies vertically below $B$ ($G$ below $B$); unstable if $G$ above $B$; neutral if $G$ coincides with $B$.",
      "Stability of Floating Bodies & Metacentric Height: Metacenter $M$: point of intersection of buoyant force line of action with original vertical body centerline under infinitesimal tilt $\\theta$; Metacentric Height $GM = BM - BG$; Analytical formula for metacentric radius: $BM = \\frac{I_{waterplane}}{V_{disp}}$ where $I_{waterplane}$ is second moment of area of waterline plane about tilt axis; Stability criterion: Stable if $GM > 0$ ($M$ above $G$), Unstable if $GM < 0$ ($M$ below $G$), Neutral if $GM = 0$ ($M$ coincides with $G$); Rolling period of ship: $T = 2\\pi \\sqrt{\\frac{k^2}{g \\cdot GM}}$.",
      "Fluid Kinematics & Velocity Fields: Lagrangian method (tracking individual fluid particles) vs Eulerian method (observing velocity vector field $\\mathbf{V}(x,y,z,t) = u \\hat{\\mathbf{i}} + v \\hat{\\mathbf{j}} + w \\hat{\\mathbf{k}}$ at fixed spatial coordinates); Material / Substantial Derivative: $\\frac{D}{Dt} = \\frac{\\partial}{\\partial t} + (\\mathbf{V} \\cdot \\nabla) = \\frac{\\partial}{\\partial t} + u\\frac{\\partial}{\\partial x} + v\\frac{\\partial}{\\partial y} + w\\frac{\\partial}{\\partial z}$; Local acceleration (unsteady term $\\partial \\mathbf{V}/\\partial t$) vs Convective acceleration ($(\\mathbf{V}\\cdot\\nabla)\\mathbf{V}$).",
      "Flow Visualization & Classification: Streamlines (curves everywhere tangent to instantaneous velocity vectors: $\\frac{dx}{u} = \\frac{dy}{v} = \\frac{dz}{w}$), Pathlines (trajectories traced by individual particles over time), Streaklines (instantaneous loci of all particles passing through a common release point); Streamtube; Steady vs Unsteady flow; Uniform vs Non-uniform flow; Laminar vs Turbulent flow; Rotational vs Irrotational flow.",
      "Conservation of Mass — Continuity Equation: Differential continuity equation in Cartesian coordinates: $\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\mathbf{V}) = 0$; For incompressible 3D flow ($\\rho = \\text{const}$): $\\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} + \\frac{\\partial w}{\\partial z} = 0$; 1D steady flow: $\\rho_1 A_1 V_1 = \\rho_2 A_2 V_2 = \\dot{m}$.",
      "Velocity Potential and Stream Function: (1) Velocity Potential Function $\\phi(x,y)$: defined for irrotational flows ($\\nabla \\times \\mathbf{V} = 0$): $u = -\\frac{\\partial \\phi}{\\partial x}, v = -\\frac{\\partial \\phi}{\\partial y}$; Satisfies Laplace's equation for incompressible flow: $\\nabla^2 \\phi = 0$; (2) Stream Function $\\psi(x,y)$: defined for 2D incompressible flows satisfying continuity: $u = -\\frac{\\partial \\psi}{\\partial y}, v = \\frac{\\partial \\psi}{\\partial x}$; Constant $\\psi$ lines are streamlines; Cauchy-Riemann equations linking $\\phi$ and $\\psi$; Orthogonality of equipotential lines and streamlines ($\\frac{dy}{dx}_{\\phi} \\times \\frac{dy}{dx}_{\\psi} = -1$).",
      "University Examination Strategy: Calculate hydrostatic forces and center of pressure on inclined and curved sluice gates, determine ship metacentric height $GM$ from tilt experiments, verify continuity for 3D velocity fields, and evaluate velocity potential $\\phi$ and stream function $\\psi$ for standard potential flow nets."
    ],
    "keyPoints": [
      "Newton's Viscosity Law: $\\tau = \\mu \\frac{du}{dy}$.",
      "Hydrostatic Equation: $\\frac{dP}{dz} = -\\rho g = -\\gamma$.",
      "Capillary Rise Formula: $h = \\frac{4\\sigma \\cos\\theta}{\\rho g d}$.",
      "Center of Pressure on Plane Surface: $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2\\theta}{A \\bar{h}}$.",
      "Metacentric Radius Formula: $BM = \\frac{I_{waterplane}}{V_{disp}}$.",
      "Floating Stability Criterion: Stable if $GM > 0$ ($M$ lies above $G$).",
      "Material Acceleration: $\\mathbf{a} = \\frac{\\partial \\mathbf{V}}{\\partial t} + (\\mathbf{V} \\cdot \\nabla)\\mathbf{V}$.",
      "3D Incompressible Continuity: $\\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} + \\frac{\\partial w}{\\partial z} = 0$.",
      "Cauchy-Riemann Flow Relations: $\\frac{\\partial \\phi}{\\partial x} = \\frac{\\partial \\psi}{\\partial y}$ and $\\frac{\\partial \\phi}{\\partial y} = -\\frac{\\partial \\psi}{\\partial x}$.",
      "Exam Gold Tip: Equipotential lines ($\\phi = \\text{const}$) and streamlines ($\\psi = \\text{const}$) always intersect at strictly $90^\\circ$ orthogonal angles."
    ]
  },
  "fluid mechanics:::u2": {
    "highlights": [
      "Forces Acting on Fluid Masses: Body forces (gravity, centrifugal) and Surface forces (pressure, shear, and normal viscous stresses); Euler's Equations of Motion: momentum equation for inviscid (frictionless, $\\mu = 0$) flow along streamline $s$: $\\rho \\left(V \\frac{\\partial V}{\\partial s}\\right) = -\\frac{\\partial P}{\\partial s} - \\rho g \\frac{\\partial z}{\\partial s} \\implies \\frac{dP}{\\rho} + V dV + g dz = 0$.",
      "Bernoulli's Equation Derivation: Integrating Euler's equation along streamline for steady, frictionless, incompressible fluid: $\\frac{P}{\\rho g} + \\frac{V^2}{2g} + z = \\text{Constant} = H_{total}$; Thermodynamic head components: Pressure Head $\\frac{P}{\\rho g}$, Velocity / Kinetic Head $\\frac{V^2}{2g}$, Datum / Potential Head $z$; Total Energy Head $H_{total}$; Energy grade line (EGL) and Hydraulic grade line (HGL: $EGL - \\frac{V^2}{2g} = \\frac{P}{\\rho g} + z$).",
      "Assumptions and Limitations of Bernoulli's Equation: (1) Steady flow; (2) Incompressible fluid ($\\rho = \\text{const}$); (3) Frictionless / inviscid fluid ($\\mu = 0$); (4) Flow along a streamline (holds across streamlines only if flow is irrotational $\\nabla \\times \\mathbf{V} = 0$); (5) No external shaft work or heat exchange.",
      "Venturimeter (Flow Measurement in Closed Pipes): Converging cone (prevents separation, angle $20-22^\\circ$), cylindrical Throat, and diverging cone (gradual expansion $5-7^\\circ$ to prevent boundary layer separation and eddy formation); Theoretical discharge: $Q_{th} = \\frac{A_1 A_2}{\\sqrt{A_1^2 - A_2^2}} \\sqrt{2 g h}$; Actual discharge: $Q_{act} = C_d Q_{th}$ where $C_d$ is coefficient of discharge ($0.96 - 0.98$); Differential head: $h = x\\left(\\frac{S_m}{S} - 1\\right)$ using U-tube manometer.",
      "Orifice Meter & Flow Nozzle: Orifice plate with concentric sharp-edged aperture; Vena Contracta: section downstream of orifice where streamlines converge to minimum cross-sectional area and maximum velocity; Coefficient of contraction $C_c = A_c / A_0 \\approx 0.62$; Coefficient of velocity $C_v = V_c / \\sqrt{2gh} \\approx 0.97$; Coefficient of discharge $C_d = C_c \\times C_v \\approx 0.60-0.65$; High permanent pressure loss compared to Venturimeter.",
      "Pitot Tube & Pitot-Static Probe: Stagnation point: point where fluid velocity is decelerated to zero ($V_{stag} = 0$); Stagnation / Total pressure: $P_{stag} = P_{static} + \\frac{1}{2}\\rho V^2$; Dynamic pressure $\\frac{1}{2}\\rho V^2$; Local velocity formula: $V = C_v \\sqrt{2 g h_{stag}} = C_v \\sqrt{\\frac{2(P_{stag} - P_{static})}{\\rho}}$ (where $C_v \\approx 0.98-1.00$); Measurement of aircraft airspeed and duct velocity profiles.",
      "Momentum Equation for Control Volumes: Reynolds Transport Theorem applied to linear momentum; Conservation of linear momentum: $\\sum \\mathbf{F}_{ext} = \\frac{d}{dt}\\int_{CV} \\rho \\mathbf{V} dv + \\int_{CS} \\rho \\mathbf{V} (\\mathbf{V} \\cdot d\\mathbf{A}) = \\sum \\dot{m}_{out} \\mathbf{V}_{out} - \\sum \\dot{m}_{in} \\mathbf{V}_{in}$; Momentum correction factor $\\beta = \\frac{1}{A V_{avg}^2}\\int u^2 dA$ ($\\beta = 1.33$ for laminar pipe flow, $\\beta \\approx 1.02$ for turbulent pipe flow).",
      "Hydrodynamic Force on Pipe Bends & Reducers: Vector momentum balance in $x$ and $y$ directions: $P_1 A_1 - P_2 A_2 \\cos\\theta + F_x = \\rho Q (V_2 \\cos\\theta - V_1)$ and $-P_2 A_2 \\sin\\theta + F_y = \\rho Q (V_2 \\sin\\theta)$; Anchor block design to resist resultant dynamic and hydrostatic thrust: $R = \\sqrt{F_x^2 + F_y^2}$.",
      "Moment of Momentum Equation: Conservation of angular momentum for rotating fluid machinery: $\\sum \\mathbf{T} = \\dot{m} (r_2 V_{\\theta 2} - r_1 V_{\\theta 1})$; Euler's Turbomachinery Equation: specific work transferred $w = U_2 V_{w2} - U_1 V_{w1}$; Basis of centrifugal pump and hydraulic turbine design.",
      "University Examination Strategy: State and prove Bernoulli's equation from Euler's equations of motion, derive Venturimeter discharge equation explaining diverging cone angle selection, calculate hydrodynamic anchor forces on reducing pipe bends, and evaluate stagnation velocity using Pitot-static tube measurements."
    ],
    "keyPoints": [
      "Euler's Streamline Equation: $\\frac{dP}{\\rho} + V dV + g dz = 0$.",
      "Bernoulli Equation: $\\frac{P}{\\rho g} + \\frac{V^2}{2g} + z = H_{total}$ (constant along streamline).",
      "Venturimeter Discharge Formula: $Q = C_d \\frac{A_1 A_2}{\\sqrt{A_1^2 - A_2^2}} \\sqrt{2 g h}$.",
      "Manometer Head Conversion: $h = x\\left(\\frac{S_m}{S} - 1\\right)$ (for heavier manometric fluid).",
      "Orifice Coefficients Relation: $C_d = C_c \\times C_v$.",
      "Pitot Tube Stagnation Velocity: $V = \\sqrt{\\frac{2(P_{stag} - P_{static})}{\\rho}} = \\sqrt{2 g h}$.",
      "Linear Momentum Control Volume: $\\sum \\mathbf{F} = \\dot{m}(\\mathbf{V}_{out} - \\mathbf{V}_{in})$.",
      "Momentum Correction Factor $\\beta$: $\\beta = 1.33$ for laminar flow; $\\beta \\approx 1.02$ for turbulent flow.",
      "Euler Turbomachine Specific Work: $w = U_2 V_{w2} - U_1 V_{w1}$.",
      "Exam Gold Tip: The diverging cone of a Venturimeter has a very small angle ($5-7^\\circ$) specifically to prevent boundary layer separation and cavitation eddies, keeping $C_d$ exceptionally high ($0.98$)."
    ]
  },
  "fluid mechanics:::u3": {
    "highlights": [
      "Reynolds Number & Flow Regimes: Osborne Reynolds dye-streak experiments; Reynolds number: $Re = \\frac{\\rho V D}{\\mu} = \\frac{V D}{\\nu}$ (ratio of inertia forces to viscous forces); Critical Reynolds number for internal pipe flow: $Re < 2000$ (strictly Laminar), $2000 \\le Re \\le 4000$ (Transition zone), $Re > 4000$ (fully Turbulent).",
      "Fully Developed Laminar Flow in Circular Pipes (Hagen-Poiseuille Flow): Force balance on cylindrical fluid element of radius $r$: shear stress distribution $\\tau(r) = -\\frac{r}{2} \\frac{dP}{dx}$ (linear variation, zero at centerline, maximum $\\tau_w = -\\frac{R}{2}\\frac{dP}{dx}$ at pipe wall); Integrating with no-slip boundary condition ($u(R) = 0$): Parabolic velocity profile $u(r) = u_{max}\\left(1 - \\frac{r^2}{R^2}\\right) = -\\frac{1}{4\\mu}\\frac{dP}{dx}(R^2 - r^2)$.",
      "Hagen-Poiseuille Discharge & Pressure Drop: Maximum velocity at centerline: $u_{max} = 2 V_{avg}$; Average velocity $V_{avg} = \\frac{u_{max}}{2} = -\\frac{R^2}{8\\mu}\\frac{dP}{dx}$; Volumetric discharge: $Q = \\frac{\\pi R^4}{8\\mu} \\left(-\\frac{dP}{dx}\\right) = \\frac{\\pi D^4 \\Delta P}{128 \\mu L}$; Pressure drop over length $L$: $\\Delta P = \\frac{128 \\mu Q L}{\\pi D^4} = \\frac{32 \\mu V_{avg} L}{D^2}$.",
      "Laminar Flow Between Parallel Plates (Couette and Poiseuille Flow): (1) Plain Poiseuille flow (stationary parallel plates under pressure gradient: parabolic velocity profile, $u_{max} = 1.5 V_{avg}$, $\\Delta P = \\frac{12 \\mu V L}{h^2}$); (2) Couette flow (one plate moving at velocity $U_0$ with zero pressure gradient: linear velocity profile $u(y) = U_0 y / h$); (3) Combined Couette-Poiseuille flow with sliding upper plate and adverse/favorable pressure gradient.",
      "Nature of Turbulent Flow: Random, stochastic velocity and pressure fluctuations superimposed on mean flow: $u = \\bar{u} + u'$, $v = \\bar{v} + v'$; Reynolds decomposition; Reynolds Stresses (apparent turbulent shear stresses): $\\tau_{turb} = -\\rho \\overline{u' v'}$; Total shear stress $\\tau = \\tau_{lam} + \\tau_{turb} = \\mu \\frac{d\\bar{u}}{dy} - \\rho \\overline{u' v'}$; Prandtl's Mixing Length hypothesis: $\\tau_{turb} = \\rho l^2 \\left|\\frac{d\\bar{u}}{dy}\\right| \\frac{d\\bar{u}}{dy}$ where mixing length $l = \\kappa y$ (von Karman constant $\\kappa \\approx 0.40$).",
      "Turbulent Velocity Profiles: Three distinct flow layers near smooth walls: (1) Viscous Sublayer ($y^+ = \\frac{y u_\\tau}{\\nu} < 5$: viscous stresses dominate, linear profile $u^+ = y^+$); (2) Buffer Layer ($5 < y^+ < 30$); (3) Logarithmic Overlap Layer ($y^+ > 30$: turbulent stresses dominate, log law $u^+ = \\frac{1}{\\kappa} \\ln y^+ + 5.5$); Empirical one-seventh power law: $\\frac{u}{u_{max}} = \\left(\\frac{y}{R}\\right)^{1/7}$; Turbulent profile is much flatter/blunter than laminar parabolic profile ($V_{avg} \\approx 0.82 u_{max}$).",
      "Friction Losses in Pipes — Darcy-Weisbach Equation: Head loss due to friction: $h_f = \\frac{4 f' L V^2}{2 g D} = \\frac{f L V^2}{2 g D}$ (where $f$ is Darcy friction factor, $f'$ Fanning friction factor, $f = 4 f'$); For laminar flow: equating Hagen-Poiseuille to Darcy-Weisbach yields $f = \\frac{64}{Re}$ ($f' = \\frac{16}{Re}$); Moody Chart based on Colebrook-White equation linking $f$, $Re$, and relative pipe roughness $\\epsilon/D$.",
      "Minor Losses in Pipe Networks: Head losses caused by local geometric flow disturbances: $h_m = K_L \\frac{V^2}{2g}$; (1) Sudden expansion: $h_L = \\frac{(V_1 - V_2)^2}{2g}$ (Borda-Carnot formula); (2) Sudden contraction: $h_L = \\frac{V_2^2}{2g}\\left(\\frac{1}{C_c} - 1\\right)^2 \\approx 0.5 \\frac{V_2^2}{2g}$; (3) Pipe entrance ($K_L = 0.5$ for sharp edge, $0.04$ for rounded bellmouth); (4) Pipe exit ($K_L = 1.0$); (5) Bends, elbows, and valves; Equivalent length method ($L_e$).",
      "Pipes in Series, Parallel, and Branched Networks: Pipes in series (identical discharge $Q$, total head loss $H = \\sum h_f + \\sum h_m$); Dupuit's equation for equivalent uniform pipe: $\\frac{L_{eq}}{D_{eq}^5} = \\sum \\frac{L_i}{D_i^5}$; Pipes in parallel (common head loss $h_{f1} = h_{f2}$, total discharge $Q = Q_1 + Q_2$); Hardy Cross iterative loop method for municipal distribution networks.",
      "University Examination Strategy: Derive the Hagen-Poiseuille equation for laminar flow in circular pipes showing $u_{max} = 2 V_{avg}$, derive the Borda-Carnot head loss formula for sudden pipe expansion, calculate equivalent lengths for pipes in series using Dupuit's equation, and solve parallel pipe discharge distributions using the Darcy-Weisbach formula."
    ],
    "keyPoints": [
      "Reynolds Number: $Re = \\frac{\\rho V D}{\\mu} = \\frac{V D}{\\nu}$ ($Re < 2000$ laminar, $> 4000$ turbulent).",
      "Hagen-Poiseuille Discharge: $Q = \\frac{\\pi D^4 \\Delta P}{128 \\mu L}$.",
      "Laminar Pipe Head Loss: $h_f = \\frac{32 \\mu V L}{\\rho g D^2}$.",
      "Laminar Friction Factor: $f = \\frac{64}{Re}$ (Darcy) and $f' = \\frac{16}{Re}$ (Fanning).",
      "Darcy-Weisbach Formula: $h_f = \\frac{f L V^2}{2 g D}$.",
      "Sudden Expansion Loss: $h_L = \\frac{(V_1 - V_2)^2}{2g}$ (Borda-Carnot).",
      "Sudden Contraction Loss: $h_L \\approx 0.5 \\frac{V_2^2}{2g}$.",
      "Prandtl Reynolds Stress: $\\tau_{turb} = \\rho l^2 \\left(\\frac{du}{dy}\\right)^2$.",
      "Dupuit Equivalent Pipe Formula: $\\frac{L_{eq}}{D_{eq}^5} = \\frac{L_1}{D_1^5} + \\frac{L_2}{D_2^5} + \\dots$.",
      "Exam Gold Tip: For laminar flow, the friction factor $f = 64/Re$ depends strictly on Reynolds number and is completely independent of surface roughness $\\epsilon/D$."
    ]
  },
  "fluid mechanics:::u4": {
    "highlights": [
      "Concept of Boundary Layer (Ludwig Prandtl): Distinction between thin boundary layer region adjacent to solid surface where viscous shear forces predominate, and outer potential flow region where viscosity can be neglected; Physical cause: no-slip condition ($u=0$ at $y=0$); Thickness growth along solid wall due to continuous viscous momentum diffusion.",
      "Boundary Layer Parameters: (1) Boundary Layer Thickness $\\delta(x)$: distance normal to surface where local velocity reaches $99\\%$ of freestream velocity ($u = 0.99 U_\\infty$); (2) Displacement Thickness $\\delta^*(x) = \\int_0^\\delta \\left(1 - \\frac{u}{U_\\infty}\\right) dy$ (distance outer streamlines are displaced outward by fluid retardation); (3) Momentum Thickness $\\theta(x) = \\int_0^\\delta \\frac{u}{U_\\infty}\\left(1 - \\frac{u}{U_\\infty}\\right) dy$ (measure of lost momentum flux due to wall friction); (4) Energy Thickness $\\delta^{**}(x) = \\int_0^\\delta \\frac{u}{U_\\infty}\\left(1 - \\frac{u^2}{U_\\infty^2}\\right) dy$; Shape factor $H = \\delta^* / \\theta$ ($H = 2.59$ for laminar Blasius profile, $H \\approx 1.3-1.4$ for turbulent profile).",
      "von Kármán Momentum Integral Equation: Integrating boundary layer Navier-Stokes equations across boundary layer thickness yields universal integral relation: $\\frac{\\tau_w}{\\rho U_\\infty^2} = \\frac{d\\theta}{dx} + (2\\theta + \\delta^*)\\frac{1}{U_\\infty}\\frac{dU_\\infty}{dx}$; For flow over flat plate with zero pressure gradient ($dU_\\infty/dx = 0$): $\\tau_w = \\rho U_\\infty^2 \\frac{d\\theta}{dx}$.",
      "Laminar Boundary Layer Analysis (Blasius Exact & Approximate Solutions): Flat plate at zero angle of incidence; Blasius similarity variable $\\eta = y \\sqrt{\\frac{U_\\infty}{\\nu x}}$; Blasius exact results: $\\delta = \\frac{5.0 x}{\\sqrt{Re_x}}$, skin friction coefficient $c_{fx} = \\frac{\\tau_w}{\\frac{1}{2}\\rho U_\\infty^2} = \\frac{0.664}{\\sqrt{Re_x}}$, total drag coefficient $C_D = \\frac{1.328}{\\sqrt{Re_L}}$; Approximate solutions using cubic and sinusoidal velocity profiles via von Karman integral equation.",
      "Turbulent Boundary Layer Over Flat Plates: Transition at critical length Reynolds number $Re_x \\approx 5 \\times 10^5$; Turbulent boundary layer grows much more rapidly due to intense cross-stream momentum mixing; Using $1/7$-th power law velocity profile: $\\delta(x) = \\frac{0.37 x}{Re_x^{1/5}}$, local skin friction coefficient $c_{fx} = \\frac{0.0592}{Re_x^{1/5}}$, total drag coefficient $C_D = \\frac{0.074}{Re_L^{1/5}}$ (for $5 \\times 10^5 < Re_L < 10^7$).",
      "Boundary Layer Separation Phenomenon: Fluid deceleration along solid curved boundary; Effect of pressure gradient: (1) Favorable pressure gradient ($dP/dx < 0$, converging flow): stabilizes boundary layer, accelerates fluid, prevents separation; (2) Zero pressure gradient ($dP/dx = 0$); (3) Adverse pressure gradient ($dP/dx > 0$, diverging flow): decelerates near-wall fluid with low kinetic energy, causing wall velocity gradient to vanish $\\left(\\frac{\\partial u}{\\partial y}\\right)_{y=0} = 0$ (Point of Separation); Downstream of separation, backflow / reverse flow occurs, producing large wake and intense vortex shedding.",
      "Methods of Boundary Layer Control: Preventing or delaying premature separation: (1) Streamlining body geometry (reducing adverse pressure gradient); (2) Suction of retarded near-wall boundary layer fluid through porous walls; (3) Blowing high-velocity fluid jets tangentially into boundary layer; (4) Boundary layer tripping (inducing early turbulence: turbulent boundary layers resist separation far better than laminar layers due to superior momentum mixing); (5) Vortex generators on aircraft wings.",
      "Drag and Lift Fundamentals: Total aerodynamic force decomposed into Drag $F_D$ (parallel to relative freestream velocity) and Lift $F_L$ (perpendicular to freestream velocity); Drag force: $F_D = C_D A \\frac{1}{2}\\rho U_\\infty^2$; Lift force: $F_L = C_L A \\frac{1}{2}\\rho U_\\infty^2$; Projected vs planform reference area $A$.",
      "Components of Drag: (1) Skin Friction Drag (frictional shear stresses along wetted area); (2) Pressure / Form Drag (imbalance of normal pressures between forward stagnation and rear separation wake regions); Total Profile Drag = Friction Drag + Pressure Drag; Bluff body (dominated by pressure drag, e.g. sphere, cylinder) vs Streamlined body (dominated by friction drag, e.g. thin airfoil); Induced Drag (drag resulting from lift generation and tip vortices).",
      "University Examination Strategy: Define boundary layer, displacement, momentum, and energy thicknesses, derive von Karman's momentum integral equation, evaluate boundary layer thickness and wall shear stress for given velocity profiles, explain physical mechanisms causing boundary layer separation under adverse pressure gradients, and compare bluff vs streamlined bodies."
    ],
    "keyPoints": [
      "Displacement Thickness: $\\delta^* = \\int_0^\\delta \\left(1 - \\frac{u}{U_\\infty}\\right) dy$.",
      "Momentum Thickness: $\\theta = \\int_0^\\delta \\frac{u}{U_\\infty}\\left(1 - \\frac{u}{U_\\infty}\\right) dy$.",
      "von Kármán Integral Equation (Flat Plate): $\\tau_w = \\rho U_\\infty^2 \\frac{d\\theta}{dx}$.",
      "Blasius Laminar Thickness: $\\delta = \\frac{5.0 x}{\\sqrt{Re_x}}$.",
      "Blasius Local Skin Friction: $c_{fx} = \\frac{0.664}{\\sqrt{Re_x}}$.",
      "Blasius Total Drag Coefficient: $C_D = \\frac{1.328}{\\sqrt{Re_L}}$.",
      "Turbulent Thickness ($1/7$-law): $\\delta = \\frac{0.37 x}{Re_x^{1/5}}$.",
      "Boundary Layer Separation Criterion: $\\left(\\frac{\\partial u}{\\partial y}\\right)_{y=0} = 0$ with $\\frac{dP}{dx} > 0$.",
      "Aerodynamic Drag Equation: $F_D = C_D A \\left(\\frac{1}{2}\\rho U^2\\right)$.",
      "Exam Gold Tip: Turbulent boundary layers resist separation far better than laminar layers because high-energy turbulent eddies continuously transfer momentum downward to the near-wall fluid."
    ]
  },
  "fluid mechanics:::u5": {
    "highlights": [
      "Dimensional Homogeneity: Principle stating that every additive term in an analytically valid physical equation must possess identical net dimensions; Fundamental primary dimensions in engineering: Mass $[M]$, Length $[L]$, Time $[T]$, and Temperature $[\\theta]$ (or Force $[F]$, Length $[L]$, Time $[T]$).",
      "Rayleigh's Method of Dimensional Analysis: Expressing dependent physical variable as power product of independent variables: $Y = C X_1^a X_2^b X_3^c \\dots$; Setting up dimensional equivalence equations for $[M]$, $[L]$, and $[T]$; Limitations: cumbersome when number of governing independent physical variables exceeds four.",
      "Buckingham's $\\pi$-Theorem: Fundamental theorem for complex multi-variable systems; States that if an equation involves $n$ physical variables containing $m$ fundamental dimensions, the system can be grouped into $(n - m)$ independent dimensionless parameters called $\\pi$-terms: $f(\\pi_1, \\pi_2, \\dots, \\pi_{n-m}) = 0$.",
      "Selection Rules for Repeating Variables: Selecting $m$ repeating variables that appear in all $\\pi$-groups: (1) Must together contain all $m$ fundamental dimensions; (2) Must not form a dimensionless group amongst themselves; (3) Typically chosen as: one geometric property (e.g. length $L$, diameter $D$), one fluid property (e.g. density $\\rho$, viscosity $\\mu$), and one kinematic/dynamic property (e.g. velocity $V$, pressure $P$); Dependent variable should never be chosen as a repeating variable.",
      "Dimensionless Numbers in Fluid Mechanics: (1) Reynolds Number: $Re = \\frac{\\rho V L}{\\mu}$ (Inertia force / Viscous force; pipe flows, submarines, aircraft); (2) Froude Number: $Fr = \\frac{V}{\\sqrt{g L}}$ (Inertia force / Gravity force; open channels, ship wave resistance, spillways); (3) Euler Number: $Eu = \\frac{P}{\\rho V^2}$ (Pressure force / Inertia force; cavitation, closed conduit flows); (4) Weber Number: $We = \\frac{\\rho V^2 L}{\\sigma}$ (Inertia force / Surface tension force; droplets, atomization, capillary waves); (5) Mach Number: $Ma = \\frac{V}{c} = \\frac{V}{\\sqrt{\\gamma R T}}$ (Inertia force / Elastic compressibility force; high-speed compressible flows).",
      "Model Testing and Similitude Principles: Experimental scale modeling in wind tunnels and towing tanks; Principle of Similitude: complete dynamic resemblance between prototype ($p$) and laboratory model ($m$); Requires simultaneous satisfaction of three similitude levels: Geometric Similitude, Kinematic Similitude, and Dynamic Similitude.",
      "Three Levels of Similitude: (1) Geometric Similitude (exact proportionality of all linear geometric dimensions: scale ratio $L_r = L_p / L_m$, area ratio $A_r = L_r^2$, volume ratio $V_r = L_r^3$); (2) Kinematic Similitude (similarity of motion: identical streamline patterns and velocity ratio $V_r = V_p / V_m$, acceleration ratio $a_r$ across all homologous points); (3) Dynamic Similitude (exact proportionality of all corresponding forces acting on fluid elements: force ratio $F_r = F_p / F_m$).",
      "Model Scaling Laws: (1) Reynolds Model Law (predominant viscous forces: $Re_m = Re_p \\implies \\frac{\\rho_m V_m L_m}{\\mu_m} = \\frac{\\rho_p V_p L_p}{\\mu_p}$; Velocity ratio $V_r = \\frac{\\nu_r}{L_r}$, Time ratio $T_r = \\frac{L_r^2}{\\nu_r}$, Discharge ratio $Q_r = \\nu_r L_r$, Force ratio $F_r = \\rho_r V_r^2 L_r^2$); (2) Froude Model Law (predominant gravity forces: $Fr_m = Fr_p \\implies \\frac{V_m}{\\sqrt{g_m L_m}} = \\frac{V_p}{\\sqrt{g_p L_p}}$; Velocity ratio $V_r = \\sqrt{L_r}$, Time ratio $T_r = \\sqrt{L_r}$, Discharge ratio $Q_r = L_r^{5/2}$, Force ratio $F_r = \\rho_r L_r^3$).",
      "Distorted vs Undistorted Models: Undistorted model (geometrically similar in horizontal and vertical scales: $L_x / L_y = 1$); Distorted models for large-scale open water bodies (rivers, estuaries, harbors) where vertical depths are negligible compared to horizontal expanses ($L_{hr} \\ne L_{vr}$); Prevents impractically shallow water depths causing surface tension errors and non-turbulent model flow.",
      "University Examination Strategy: Apply Buckingham's $\\pi$-theorem to derive functional dimensionless equations for fluid drag and pump performance, explain physical significance of five dimensionless numbers ($Re, Fr, Eu, We, Ma$), and solve Reynolds and Froude model scaling problems calculating prototype power and discharge."
    ],
    "keyPoints": [
      "Buckingham $\\pi$-Theorem Terms: Number of $\\pi$-groups $= n - m$ (variables minus primary dimensions).",
      "Reynolds Number: $Re = \\frac{\\rho V L}{\\mu} = \\frac{\\text{Inertia Force}}{\\text{Viscous Force}}$.",
      "Froude Number: $Fr = \\frac{V}{\\sqrt{g L}} = \\sqrt{\\frac{\\text{Inertia Force}}{\\text{Gravity Force}}}$.",
      "Euler Number: $Eu = \\frac{\\Delta P}{\\rho V^2} = \\frac{\\text{Pressure Force}}{\\text{Inertia Force}}$.",
      "Weber Number: $We = \\frac{\\rho V^2 L}{\\sigma} = \\frac{\\text{Inertia Force}}{\\text{Surface Tension Force}}$.",
      "Mach Number: $Ma = \\frac{V}{c} = \\sqrt{\\frac{\\text{Inertia Force}}{\\text{Elastic Force}}}$.",
      "Reynolds Scaling Velocity: $V_r = \\frac{\\nu_r}{L_r}$.",
      "Froude Scaling Velocity: $V_r = \\sqrt{L_r}$.",
      "Froude Scaling Discharge: $Q_r = L_r^{5/2}$.",
      "Exam Gold Tip: For spillways, open channels, and surface ships where gravity waves dominate, always design scale models using Froude's Model Law ($Fr_m = Fr_p$)."
    ]
  },
  "engineering geology:::u1": {
    "highlights": [
      "Definition & Physical Properties of Minerals: Naturally occurring inorganic solid with definite chemical composition and ordered atomic arrangement; Physical properties: Color, Streak (color of mineral powder on unglazed porcelain plate), Luster (metallic vs non-metallic: vitreous, adamantine, pearly, silky, earthy).",
      "Hardness & Mohs Hardness Scale: Relative resistance to scratching; 10 standard reference minerals: 1-Talc, 2-Gypsum, 3-Calcite, 4-Fluorite, 5-Apatite, 6-Orthoclase feldspar, 7-Quartz, 8-Topaz, 9-Corundum, 10-Diamond; Finger nail ($2.5$), copper coin ($3.5$), pocket knife ($5.5$), glass plate ($5.5$), steel file ($6.5$).",
      "Cleavage, Fracture & Tenacity: Cleavage (tendency to split along smooth crystallographic planes of weak atomic bonding: basal in mica, cubic in halite/galena, rhombohedral in calcite); Fracture (uneven, conchoidal in quartz, hackly); Tenacity (brittle, malleable, flexible, elastic).",
      "Specific Gravity & Density of Minerals: Measured by hydrostatic balance: $SG = \\frac{W_{\\text{air}}}{W_{\\text{air}} - W_{\\text{water}}}$; Light rock-forming minerals ($SG = 2.6 - 2.8$, quartz, feldspar) vs Ore minerals ($SG > 4.5$, galena, hematite, magnetite).",
      "Silicate Mineral Groups: Basic building block silica tetrahedron $[SiO_4]^{4-}$; Nesosilicates (isolated tetrahedra, olivine, garnet), Inosilicates (single chains: pyroxenes e.g. augite; double chains: amphiboles e.g. hornblende), Phyllosilicates (sheets: micas e.g. muscovite, biotite; clay minerals: kaolinite, montmorillonite), and Tectosilicates (3D network: quartz, plagioclase, orthoclase).",
      "Carbonate & Clay Minerals: Calcite ($CaCO_3$, effervesces vigorously with cold dilute $HCl$, rhombohedral cleavage, strong double refraction) and Dolomite ($CaMg(CO_3)_2$); Swelling smectite clay (montmorillonite) causing foundation instability.",
      "Oxide & Sulfide Ore Minerals: Hematite ($Fe_2O_3$, metallic luster, cherry-red streak), Magnetite ($Fe_3O_4$, strongly magnetic, black streak), Pyrite ($FeS_2$, fool's gold, brass-yellow, greenish-black streak), Chalcopyrite ($CuFeS_2$), and Galena ($PbS$, high density, perfect cubic cleavage).",
      "Optical Mineralogy Principles: Polarization microscope; Anisotropic vs isotropic minerals; Pleochroism (change in color under plane-polarized light upon stage rotation), Birefringence (double refraction, difference in principal refractive indices $\\Delta n = n_e - n_o$), Extinction angles (parallel, inclined, symmetrical).",
      "Feldspar Group Minerals: Most abundant rock-forming minerals in Earth's crust ($>50\\%$); Alkali feldspars (orthoclase $KAlSi_3O_8$, microcline) vs Plagioclase feldspar solid solution series (Albite $NaAlSi_3O_8$ to Anorthite $CaAl_2Si_2O_8$, polysynthetic albite twinning).",
      "University Examination Strategy: State Mohs hardness scale with chemical formulas of all 10 minerals, explain the diagnostic physical properties of quartz, calcite, and mica, and classify silicate structures based on oxygen sharing."
    ],
    "keyPoints": [
      "Mohs Scale Order: Talc(1), Gypsum(2), Calcite(3), Fluorite(4), Apatite(5), Orthoclase(6), Quartz(7), Topaz(8), Corundum(9), Diamond(10).",
      "Streak Test Concept: Color of powdered mineral on streak plate; Much more reliable than external body color.",
      "Conchoidal Fracture: Smooth, curved, shell-like fracture surface characteristic of amorphous glass and quartz.",
      "Calcite Acid Reaction: $CaCO_3 + 2HCl \\to CaCl_2 + H_2O + CO_2\\uparrow$ (effervescence test).",
      "Specific Gravity Formula: $SG = \\frac{W_{\\text{air}}}{W_{\\text{air}} - W_{\\text{water}}}$.",
      "Silica Tetrahedral Anion: $[SiO_4]^{4-}$ unit with four shared or unshared corner oxygen atoms.",
      "Mica Basal Cleavage: Perfect one-directional sheet cleavage due to weak van der Waals bonds between silicate sheets.",
      "Pyrite Identification: Hardness $6-6.5$, brass-yellow metallic luster, and distinct greenish-black streak.",
      "Birefringence Formula: $\\Delta n = |n_1 - n_2|$, producing characteristic interference colors under crossed polars.",
      "Exam Scoring Tip: Quartz has hardness 7, no cleavage, conchoidal fracture, vitreous luster, and specific gravity 2.65."
    ]
  },
  "engineering geology:::u2": {
    "highlights": [
      "Rock Cycle & Genetic Classifications: Igneous rocks (crystallized from molten magma/lava), Sedimentary rocks (lithification of weathered mineral fragments or chemical precipitation), and Metamorphic rocks (solid-state recrystallization under elevated temperature and pressure).",
      "Igneous Rocks Petrology: Plutonic / Intrusive rocks (slow cooling at depth, coarse-grained phaneritic texture, e.g. granite, gabbro, diorite), Hypabyssal (medium depth, porphyritic texture, e.g. dolerite dykes), and Volcanic / Extrusive (rapid cooling on surface, fine-grained aphanitic or glassy texture, e.g. basalt, obsidian, pumice).",
      "Bowen's Reaction Series: Magmatic crystallization sequence: Discontinuous series (Olivine $\\to$ Pyroxene $\\to$ Amphibole $\\to$ Biotite) and Continuous series (Calcium-rich anorthite plagioclase $\\to$ Sodium-rich albite); Followed by Potassium feldspar, Muscovite, and Quartz at low temperatures.",
      "Forms of Igneous Intrusions: Concordant intrusions (parallel to bedding planes: sills, laccoliths, lopoliths, phacoliths) vs Discordant intrusions (cutting across bedding planes: dykes, volcanic necks, massive batholiths exceeding $100\\text{ km}^2$).",
      "Sedimentary Rocks Petrology: Weathering, erosion, transportation, deposition, compaction, and diagenetic cementation (calcite, silica, iron oxide binders); Clastic rocks (conglomerate, breccia, sandstone, shale/mudstone) vs Non-clastic rocks (limestone, coal, gypsum, rock salt).",
      "Primary Sedimentary Structures: Stratification and bedding planes, cross-bedding (indicates paleo-current direction), graded bedding (coarse grains at bottom, fine at top, turbidity currents), ripple marks, and mud cracks.",
      "Metamorphic Processes & Agents: Metamorphic agents: Heat ($200-800^\\circ\\text{C}$), Lithostatic/differential pressure, and chemically active hydrothermal fluids; Types: Thermal/contact metamorphism (adjacent to magma intrusions, hornfels), Dynamic/cataclastic (along shear faults, mylonite), and Regional metamorphism (orogenic mountain building).",
      "Metamorphic Textures & Structures: Foliation (planar alignment of platy mineral grains perpendicular to principal stress direction); Types: Slaty cleavage (slate), Schistosity (schist with visible micas), and Gneissic banding (alternating dark mafic and light felsic mineral bands in gneiss); Non-foliated: marble (from limestone), quartzite (from quartz sandstone).",
      "Engineering Quality of Rock Types: Granite, basalt, and quartzite exhibit high crushing strength ($>100\\text{ MPa}$), low porosity, and make excellent foundation rocks and aggregates; Shales, slates, and weathered schists are structurally weak and prone to sliding along cleavage planes.",
      "University Examination Strategy: Detail Bowen's Reaction Series with a clear flow diagram, compare Granite, Sandstone, and Marble across origin, texture, and engineering suitability, and differentiate dykes from sills."
    ],
    "keyPoints": [
      "Bowen's Discontinuous Series: Olivine $\\to$ Augite (Pyroxene) $\\to$ Hornblende (Amphibole) $\\to$ Biotite.",
      "Bowen's Low-Temperature Residuals: Orthoclase feldspar, Muscovite mica, and Quartz (crystallizes last below $600^\\circ\\text{C}$).",
      "Sill Definition: Concordant, sheet-like igneous intrusion parallel to existing horizontal rock bedding.",
      "Dyke Definition: Discordant, tabular igneous intrusion cutting steeply across existing strata.",
      "Granite Composition: Felsic intrusive igneous rock composed of Quartz, Orthoclase feldspar, and Biotite/Muscovite.",
      "Basalt Composition: Mafic extrusive volcanic rock composed of Plagioclase feldspar and Pyroxene.",
      "Marble Origin: Metamorphic recrystallization of limestone ($CaCO_3$) under contact or regional metamorphism.",
      "Quartzite Origin: Metamorphic recrystallization of quartz sandstone, producing interlocking crystalline quartz.",
      "Gneissic Banding: Segregation of light quartz-feldspar bands and dark amphibole-biotite bands under high-grade metamorphism.",
      "Exam Scoring Tip: Granite possesses the highest compressive strength and durability, making it the premier choice for monumental masonry and massive dam foundations."
    ]
  },
  "engineering geology:::u3": {
    "highlights": [
      "Dip and Strike Principles: Strike (horizontal line representing intersection of inclined geological bed with horizontal plane, measured as compass bearing $0-360^\\circ$); True Dip (maximum angle of inclination of rock bed with horizontal plane, measured perpendicular to strike); Apparent Dip (inclination angle measured in any direction other than true dip, always less than true dip).",
      "Relation between True Dip and Apparent Dip: $\\tan\\alpha = \\tan\\theta \\cdot \\cos\\beta$, where $\\theta$ is true dip angle, $\\alpha$ is apparent dip angle, and $\\beta$ is horizontal angle between strike and direction of apparent dip.",
      "Rock Folds & Geometric Anatomy: Fold limbs, hinge line, axis of fold, axial plane, crest line, and trough line; Anticline (convex upward fold, oldest rocks in center/core) vs Syncline (convex downward fold, youngest rocks in core).",
      "Classification of Folds: Symmetrical fold (axial plane vertical), Asymmetrical fold (axial plane inclined), Overturned fold (both limbs dip in same direction at different angles), Recumbent fold (axial plane essentially horizontal), and Isoclinal fold (limbs dip at identical angles in same direction).",
      "Faults & Fault Mechanics: Fractures along which significant relative displacement has occurred; Hanging wall (block resting on inclined fault plane) vs Footwall (block lying underneath fault plane); Fault slip (true relative displacement vector), throw (vertical displacement), and heave (horizontal displacement).",
      "Classification of Faults by Movement: Normal fault (hanging wall moves downward relative to footwall under extensional tensional stress; creates grabens and horsts); Reverse fault (hanging wall moves upward under horizontal compressional stress); Thrust fault (low-angle reverse fault with dip $<45^\\circ$); Strike-slip / Transcurrent fault (horizontal shear displacement, e.g. San Andreas fault).",
      "Joints in Rock Masses: Fractures without perceptible relative shear displacement; Columnar jointing (hexagonal cooling contraction columns in basalt), sheet jointing (horizontal exfoliation joints in granite due to unloading), and orthogonal joint sets; Drastically reduce rock mass shear strength and increase hydraulic seepage.",
      "Unconformities in Stratigraphy: Buried surfaces of erosion or non-deposition separating younger strata from older underlying rocks; Disconformity (parallel beds separated by erosion surface), Angular unconformity (tilted older sedimentary beds overlain by horizontal younger beds), and Non-conformity (sedimentary strata deposited directly over eroded igneous/metamorphic basement).",
      "In-Situ Geological Mapping & Outcrops: Outcrop width $W = \\frac{t}{\\sin(\\theta \\pm \\sigma)}$; Three-point problems for determining strike and true dip from borehole depth data; Clinometer compass for field measurement.",
      "University Examination Strategy: Derive the relation $\\tan\\alpha = \\tan\\theta\\cos\\beta$, classify faults based on relative hanging wall movement with neat block diagrams, and explain the civil engineering implications of unconformities and joints."
    ],
    "keyPoints": [
      "True Dip vs Apparent Dip Formula: $\\tan\\alpha = \\tan\\theta \\cos\\beta$.",
      "Strike-Dip Orthogonality: True dip direction is always oriented strictly at $90^\\circ$ to the strike line.",
      "Anticline Rule: Convex upward fold with oldest strata exposed at the central core.",
      "Syncline Rule: Concave downward trough with youngest strata preserved at the central core.",
      "Normal Fault Mechanics: Hanging wall moves downward relative to footwall under extensional tectonic stress.",
      "Reverse Fault Mechanics: Hanging wall moves upward relative to footwall under compressional tectonic stress.",
      "Thrust Fault Definition: Reverse fault having fault plane inclination $\\theta < 45^\\circ$ (often $<30^\\circ$).",
      "Fault Throw and Heave: Throw is the vertical component of displacement; Heave is the horizontal component.",
      "Angular Unconformity: Tilted or folded older strata truncated by erosion and capped by flat-lying younger strata.",
      "Exam Scoring Tip: Apparent dip is always strictly less than true dip; it becomes zero when measured directly along the strike direction."
    ]
  },
  "engineering geology:::u4": {
    "highlights": [
      "Rock Mass vs Intact Rock: Intact rock (solid rock material free of structural discontinuities) vs Rock mass (in-situ rock volume traversed by joints, faults, bedding planes, and fissures; mechanical response dominated by discontinuities).",
      "Physical & Index Properties of Rocks: Apparent specific gravity ($SG = 2.5-3.0$), bulk density $\\rho$, dry density $\\rho_d = \\frac{\\rho}{1 + w}$, porosity $n = \\frac{V_v}{V} \\times 100\\%$ ($<1\\%$ in granite, $5-25\\%$ in sandstone), void ratio $e = \\frac{n}{1 - n}$, and water absorption.",
      "Uniaxial Compressive Strength (UCS): Standard cylindrical rock core ($L/D = 2.0 - 2.5$); $\\sigma_c = \\frac{P}{A}$; Rocks classified: Very high strength ($>200\\text{ MPa}$, basalt, quartzite), High strength ($100-200\\text{ MPa}$, fresh granite), Medium ($50-100\\text{ MPa}$), Low strength ($<25\\text{ MPa}$, shale, chalk).",
      "Tensile Strength of Rocks (Brazilian Test): Indirect diametral compression test on disc specimen of diameter $D$ and thickness $t$; Tensile splitting strength $\\sigma_t = \\frac{2P}{\\pi D t}$; Rocks are weak in tension ($\\sigma_t \\approx 5-10\\%$ of $\\sigma_c$).",
      "Shear Strength of Discontinuities (Mohr-Coulomb & Barton Models): Peak shear strength $\\tau = c + \\sigma_n \\tan\\phi$; Barton-Bandis non-linear empirical criterion for rock joints: $\\tau = \\sigma_n \\tan\\left[JRC \\log_{10}\\left(\\frac{JCS}{\\sigma_n}\\right) + \\phi_b\\right]$, where $JRC$ is joint roughness coefficient, $JCS$ is joint wall compressive strength, and $\\phi_b$ is basic friction angle.",
      "Rock Quality Designation (RQD): Modified core recovery percentage according to Deere: $RQD = \\frac{\\sum \\text{Length of sound core pieces } \\ge 10\\text{ cm}}{\\text{Total drill run length}} \\times 100\\%$; $RQD > 90\\%$ (excellent rock mass), $50-75\\%$ (fair), $<25\\%$ (very poor).",
      "Bieniawski's Rock Mass Rating (RMR System): Geomechanics classification summing six parameters: (1) Strength of intact rock; (2) RQD; (3) Spacing of discontinuities; (4) Condition of discontinuities; (5) Groundwater conditions; (6) Orientation adjustment for tunnels/dams; Total score $0-100$.",
      "Geological Considerations in Dam Foundations: Upstream dipping beds are most favorable for gravity dam stability (seepage path is elongated, resultant reservoir thrust acts perpendicular to bedding); Downstream dipping beds are dangerous (high risk of foundation sliding along bedding planes); Fault zones across dam axis require deep cut-off grouting curtains.",
      "Geological Considerations in Tunnel Alignment: Tunneling parallel to strike of steeply dipping beds causes asymmetric rock pressure; Tunneling perpendicular to strike across fold limbs is most stable; Tunneling through synclinal troughs poses severe water ingress and high hydrostatic pressures; Anticlinal crests exhibit tension fractures and roof collapse risks.",
      "University Examination Strategy: Calculate RQD from core recovery data, derive the Brazilian tensile strength formula $\\sigma_t = \\frac{2P}{\\pi D t}$, and evaluate geological suitability of upstream vs downstream dipping beds for dam foundations."
    ],
    "keyPoints": [
      "Brazilian Tensile Strength: $\\sigma_t = \\frac{2P}{\\pi D t}$.",
      "Rock Quality Designation (RQD): $RQD = \\frac{\\sum L_{i (\\ge 10\\text{ cm})}}{L_{\\text{total}}} \\times 100\\%$.",
      "RMR Classification Range: Class I: Very Good ($81-100$); Class II: Good ($61-80$); Class III: Fair ($41-60$); Class IV: Poor ($21-40$); Class V: Very Poor ($<20$).",
      "Barton's Shear Strength Criterion: $\\tau = \\sigma_n \\tan\\left[JRC \\log_{10}\\left(\\frac{JCS}{\\sigma_n}\\right) + \\phi_b\\right]$.",
      "Rock Tensile-to-Compressive Ratio: Tensile strength is typically only $5\\%$ to $10\\%$ of uniaxial compressive strength.",
      "Standard UCS Core Ratio: Length-to-diameter ratio $L/D = 2.0$ to $2.5$.",
      "Ideal Dam Foundation Strata: Unweathered massive igneous rocks or horizontal/upstream-dipping sound sedimentary beds.",
      "Dangerous Dam Foundation Condition: Strata dipping downstream with strike parallel to dam axis (extreme sliding risk).",
      "Tunneling Hazard in Syncline: Acts as natural underground water reservoir causing catastrophic flooding during excavation.",
      "Exam Scoring Tip: In RQD calculation, only intact core pieces that are hard, sound, and at least $10\\text{ cm}$ ($100\\text{ mm}$) long are included in the numerator."
    ]
  },
  "engineering geology:::u5": {
    "highlights": [
      "Earthquakes & Seismic Wave Physics: Sudden release of elastic strain energy along faults; Focus / Hypocenter (initial rupture point inside crust) vs Epicenter (point on Earth surface vertically above focus); Body waves: P-waves (primary, compressional longitudinal, fastest $v_p = \\sqrt{\\frac{K + 4/3 G}{\\rho}}$, propagate through solids and liquids) and S-waves (secondary, shear transverse, $v_s = \\sqrt{G/\\rho}$, cannot pass through liquid outer core).",
      "Surface Seismic Waves: Rayleigh waves (retrograde elliptical ground roll motion in vertical plane, causes catastrophic structural shaking) and Love waves (horizontal transverse surface shear waves, fastest surface wave).",
      "Earthquake Magnitude vs Intensity: Richter Magnitude Scale ($M_L = \\log_{10} A - \\log_{10} A_0$, logarithmic energy release: each unit increase represents $\\approx 31.6 \\times$ more energy); Moment Magnitude Scale ($M_w = \\frac{2}{3}\\log_{10} M_0 - 6.0$, where $M_0 = \\mu A D$ is seismic moment); Modified Mercalli Intensity Scale (MMI, qualitative observation of damage from I to XII).",
      "Soil Liquefaction Phenomenon: Saturated loose sandy and silty soils subjected to cyclic earthquake shear vibrations; Excess pore water pressure rises to equal overburden pressure: $\\sigma' = \\sigma - u = 0$; Soil loses all shear strength and behaves as viscous liquid, causing building tipping and sand boils.",
      "Landslides & Mass Wasting Classifications: Downslope movement of soil and rock under gravity; Classifications: Falls (rockfall from cliffs), Topples, Slides (rotational slump along curved slip surface in cohesive soil; translational slide along planar discontinuity in rock), and Flows (debris flows, mudflows, solifluction).",
      "Factor of Safety of Slopes: Ratio of resisting shear strength to driving shear stress: $FOS = \\frac{\\tau_f}{\\tau} = \\frac{c' + (\\gamma z \\cos^2\\beta - u)\\tan\\phi'}{\\gamma z \\sin\\beta \\cos\\beta}$; Slope fails when $FOS < 1.0$; Reduced by water saturation, rising pore pressure $u$, toe excavation, and seismic acceleration.",
      "Landslide Stabilization & Mitigation Measures: Surface drainage diversion ditches, subsurface perforated drain pipes (reduces pore water pressure $u$), flattening slope angle, benching, retaining walls with weep holes, rock bolting and prestressed ground anchors, shotcreting with wire mesh, and vegetation bio-engineering.",
      "Volcanic Hazards: Pyroclastic flows (high-speed superheated incandescent avalanches of gas and ash $>800^\\circ\\text{C}$), Lahars (volcanic mudflows of ash mixed with rain or melted snow), Lava flows, toxic gas emissions ($SO_2, CO_2$), and airborne tephra ash fall.",
      "Tsunamis & Coastal Hazards: Long-wavelength shallow-water ocean gravity waves generated by subsea megathrust earthquakes or submarine landslides; Propagation speed $v = \\sqrt{g d}$; Wavelength $>100\\text{ km}$; Open ocean amplitude $<1\\text{ m}$, but shoaling effect compresses wavelength and amplifies wave height to $>20-30\\text{ m}$ at shorelines.",
      "University Examination Strategy: Derive the seismic wave velocities $v_p$ and $v_s$, calculate the Factor of Safety for an infinite planar rock slope, and detail structural and drainage measures to mitigate landslides."
    ],
    "keyPoints": [
      "P-Wave Velocity Formula: $v_p = \\sqrt{\\frac{K + \\frac{4}{3}G}{\\rho}}$.",
      "S-Wave Velocity Formula: $v_s = \\sqrt{\\frac{G}{\\rho}}$ (transverse shear wave; $v_s = 0$ in fluids where $G = 0$).",
      "Wave Speed Ratio in Rocks: $\\frac{v_p}{v_s} = \\sqrt{\\frac{2(1 - \\nu)}{1 - 2\\nu}} \\approx 1.73$ for Poisson's ratio $\\nu = 0.25$.",
      "Seismic Moment Formula: $M_0 = \\mu A D$ (shear modulus $\\times$ fault rupture area $\\times$ average slip).",
      "Earthquake Energy Scaling: $\\log_{10} E = 4.8 + 1.5 M$ (each unit increase multiplies energy by $10^{1.5} \\approx 31.6$).",
      "Infinite Slope Factor of Safety: $FOS = \\frac{c' + (\\sigma_n - u)\\tan\\phi'}{\\tau_{\\text{driving}}}$.",
      "Effective Stress Failure: Soil liquefies when pore pressure rises to equal total stress ($u = \\sigma \\implies \\sigma' = 0$).",
      "Tsunami Wave Velocity: $v = \\sqrt{g d}$ (behaves as shallow water wave across deep oceans).",
      "Translational Rock Slide Trigger: Occurs whenever rock joint daylight dip angle is less than slope face angle but greater than friction angle ($\\beta_{\\text{slope}} > \\theta_{\\text{joint}} > \\phi$).",
      "Exam Scoring Tip: P-waves arrive first on a seismograph because their velocity is nearly double that of S-waves."
    ]
  },
  "fluid mechanics (momentum transfer):::u1": {
    "highlights": [
      "Continuum Hypothesis in Chemical Engineering: Knudsen number criterion $Kn = \\lambda / L < 0.01$; Macroscopic fluid properties defined at a mathematical point as continuous field variables without statistical molecular fluctuations.",
      "Newton's Law of Viscosity & Momentum Flux: Molecular shear stress $\\tau_{yx} = -\\mu \\frac{dv_x}{dy}$, representing the negative molecular flux of $x$-momentum in the $y$-direction; Dynamic viscosity $\\mu$ in $\\text{Pa}\\cdot\\text{s}$ or Poise ($1\\text{ P} = 0.1\\text{ Pa}\\cdot\\text{s}$).",
      "Non-Newtonian Fluid Rheology: Ostwald-de Waele Power-Law model: $\\tau = K \\left|\\frac{dv}{dy}\\right|^{n-1} \\frac{dv}{dy}$; Pseudoplastic / shear-thinning ($n < 1$, polymer solutions, paint), Dilatant / shear-thickening ($n > 1$, cornstarch suspension), and Bingham plastics (yield stress $\\tau_0$, drilling muds, slurries).",
      "Time-Dependent Rheology: Thixotropic fluids (apparent viscosity decreases with sustained shearing time under constant shear rate, e.g. printing inks) vs Rheopectic fluids (viscosity increases with shearing time, e.g. gypsum pastes); Viscoelastic polymers exhibiting Weissenberg effect.",
      "Kinematic Viscosity & Momentum Diffusivity: $\\nu = \\mu / \\rho$ in $\\text{m}^2/\\text{s}$ or Stokes ($1\\text{ St} = 10^{-4}\\text{ m}^2/\\text{s}$); Represents molecular diffusivity of momentum in Navier-Stokes equations analogous to thermal diffusivity $\\alpha$ and mass diffusivity $D_{AB}$.",
      "Surface Tension & Capillary Phenomena: Interfacial free energy $\\sigma$ ($\\\\text{N/m}$); Young-Laplace equation for pressure difference across curved fluid interface: $\\Delta P = \\sigma \\left(\\frac{1}{R_1} + \\frac{1}{R_2}\\right)$; Capillary rise in circular tubes: $h = \\frac{4\\sigma\\cos\\theta}{\\rho g d}$.",
      "Vapor Pressure & Cavitation in Chemical Process Equipment: Liquid boils when local absolute static pressure drops to saturation vapor pressure $P_v(T)$; Bubble collapse causes high-frequency pressure shocks ($>1000\\text{ MPa}$) eroding pump impellers and control valves.",
      "Fluid Compressibility & Bulk Modulus: Isothermal compressibility $\\beta_T = -\\frac{1}{V}\\left(\\frac{\\partial V}{\\partial P}\\right)_T$; Bulk modulus of elasticity $K = 1/\\beta = \\rho \\frac{dP}{d\\rho}$; Incompressible flow assumption valid when Mach number $Ma = v / c < 0.3$.",
      "Viscosity Temperature Dependency: Liquid viscosity decreases exponentially with temperature according to Andrade equation: $\\mu(T) = A e^{B/T}$; Gas viscosity increases with temperature according to Chapman-Enskog / Sutherland equation: $\\mu \\propto T^{3/2} / (T + S)$.",
      "University Examination Strategy: Derive the Young-Laplace equation across a spherical bubble, classify rheological curves on a shear stress vs shear rate plot, and calculate capillary rise in narrow vertical tubes."
    ],
    "keyPoints": [
      "Newton's Viscosity Law: $\\tau_{yx} = -\\mu \\frac{dv_x}{dy}$.",
      "Power Law Model: $\\tau = K \\dot{\\gamma}^n$ (Pseudoplastic for $n < 1$, Dilatant for $n > 1$).",
      "Bingham Plastic Equation: $\\tau = \\tau_0 + \\mu_p \\dot{\\gamma}$ (valid for $\\tau \\ge \\tau_0$).",
      "Kinematic Viscosity Definition: $\\nu = \\frac{\\mu}{\\rho}$ ($\\\\text{m}^2/\\text{s}$).",
      "Young-Laplace Bubble Formula: $\\Delta P = \\frac{4\\sigma}{R}$ (two air-liquid interfaces).",
      "Droplet Pressure Jump: $\\Delta P = \\frac{2\\sigma}{R}$.",
      "Capillary Rise Formula: $h = \\frac{4\\sigma\\cos\\theta}{\\rho g d}$.",
      "Bulk Modulus Formula: $K = -V \\frac{dP}{dV} = \\rho \\frac{dP}{d\\rho}$.",
      "Incompressible Flow Criterion: $Ma = \\frac{v}{c} < 0.3$.",
      "Exam Scoring Tip: Viscosity of liquids decreases with temperature due to weakening intermolecular cohesion, whereas gas viscosity increases due to greater molecular collision frequency."
    ]
  },
  "fluid mechanics (momentum transfer):::u2": {
    "highlights": [
      "Pascal's Law of Hydrostatic Pressure: Pressure at any point in a stationary fluid is equal in all directions: $P_x = P_y = P_z$; Foundation of hydraulic press mechanical advantage: $F_2 = F_1 (A_2 / A_1)$.",
      "Hydrostatic Equation in Differential Form: Balance of gravity and pressure gradient: $\\frac{dP}{dz} = -\\rho g$; For constant density liquid, linear pressure depth profile: $P = P_0 + \\rho g h$; Absolute vs gauge pressure: $P_{\\text{abs}} = P_{\\text{gauge}} + P_{\\text{atm}}$.",
      "Atmospheric Pressure Variation in Barometric Field: Isothermal ideal gas atmosphere: $P(z) = P_0 \\exp\\left(-\\frac{M g z}{R T}\\right)$; Adiabatic atmosphere with constant lapse rate: $T(z) = T_0 - \\Gamma z$.",
      "Manometry in Chemical Plants: U-tube manometer reading differential pressure: $\\Delta P = (\\rho_m - \\rho) g h$; Inverted U-tube manometers for liquid-liquid systems; Inclined manometers for high-sensitivity gas draft measurements ($\\\\Delta P = \\rho_m g L \\sin\\theta$).",
      "Hydrostatic Forces on Submerged Flat Surfaces: Resultant compressive force $F = \\rho g \\bar{h} A$; Line of action passes through Center of Pressure (CP): $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2\\theta}{A \\bar{h}}$, which always lies strictly below the centroid $\\bar{h}$.",
      "Hydrostatic Forces on Curved Surfaces: Decomposed into orthogonal components: Horizontal force $F_x = \\rho g \\bar{h} A_{\\text{proj}}$ acting on vertical projection; Vertical force $F_y = \\text{Weight of fluid column directly above curved surface}$; Resultant $F_R = \\sqrt{F_x^2 + F_y^2}$.",
      "Buoyancy & Archimedes Principle: Net upward buoyant force $F_b = \\rho_f g V_{\\text{disp}}$ equals weight of displaced fluid; Line of action passes through Center of Buoyancy $B$ (centroid of displaced fluid volume).",
      "Stability of Submerged & Floating Bodies: Submerged body: Stable iff center of buoyancy $B$ lies vertically above center of gravity $G$; Floating body: Rotational stability governed by Metacenter $M$; Stable iff Metacentric Height $GM = BM - BG > 0$, where $BM = I / V_{\\text{disp}}$.",
      "Fluids Under Rigid-Body Acceleration: Uniform linear acceleration $a_x, a_z$: Free surface tilts at angle $\\tan\\theta = -\\frac{a_x}{g + a_z}$; Rigid-body rotation around vertical axis: Free surface forms paraboloid of revolution: $z = \\frac{\\omega^2 r^2}{2g}$.",
      "University Examination Strategy: Derive the center of pressure formula $h_{cp} = \\bar{h} + \\frac{I_G\\sin^2\\theta}{A\\bar{h}}$, calculate metacentric height $GM$ for a floating industrial decanter, and solve differential manometer equations."
    ],
    "keyPoints": [
      "Hydrostatic Gradient: $\\frac{dP}{dz} = -\\rho g$.",
      "Linear Depth Pressure: $P = P_0 + \\rho g h$.",
      "Differential Manometer: $\\Delta P = (\\rho_m - \\rho) g h$.",
      "Center of Pressure on Inclined Plane: $h_{cp} = \\bar{h} + \\frac{I_G \\sin^2\\theta}{A \\bar{h}}$.",
      "Archimedes Buoyant Force: $F_B = \\rho_f g V_{\\text{disp}}$.",
      "Metacentric Radius Formula: $BM = \\frac{I}{V_{\\text{disp}}}$.",
      "Metacentric Height Stability Criterion: Stable iff $GM = BM - BG > 0$.",
      "Linear Acceleration Surface Slope: $\\tan\\theta = -\\frac{a_x}{g + a_z}$.",
      "Rotating Fluid Paraboloid: $z(r) - z(0) = \\frac{\\omega^2 r^2}{2g}$.",
      "Exam Scoring Tip: The center of pressure always lies below the centroid because the hydrostatic pressure increases with depth."
    ]
  },
  "fluid mechanics (momentum transfer):::u3": {
    "highlights": [
      "Eulerian vs Lagrangian Flow Descriptions: Lagrangian tracks individual tagged fluid parcels $\\vec{x}(t)$; Eulerian observes velocity field $\\vec{v}(\\vec{x}, t)$ at fixed spatial coordinates; Material / Substantial derivative $\\frac{D}{Dt} = \\frac{\\partial}{\\partial t} + \\vec{v} \\cdot \\nabla$.",
      "Continuity Equation (Conservation of Mass): General differential continuity: $\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\vec{v}) = 0$; For incompressible fluid: $\\nabla \\cdot \\vec{v} = \\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial y} + \\frac{\\partial w}{\\partial z} = 0$; 1D pipe flow: $A_1 v_1 = A_2 v_2$.",
      "Navier-Stokes Equations (Conservation of Momentum): $\\rho \\frac{D\\vec{v}}{Dt} = -\\nabla P + \\mu \\nabla^2 \\vec{v} + \\rho \\vec{g}$; Balance of inertia, pressure gradient, viscous diffusion, and gravity body forces in incompressible Newtonian flow.",
      "Euler's Equation of Motion: Neglecting viscous friction ($\\mu = 0$ along streamline): $\\frac{dP}{\\rho} + v dv + g dz = 0$; Valid for frictionless inviscid streamlines.",
      "Bernoulli's Energy Theorem: Integrating Euler's equation along streamline for steady, incompressible, frictionless flow: $\\frac{P}{\\rho g} + \\frac{v^2}{2g} + z = \\text{Constant} = H$; Terms represent static pressure head, velocity / dynamic head, and datum potential head.",
      "Bernoulli Modifications for Real Viscous Flow: Engineering Bernoulli equation including frictional head loss $h_L$ and pump shaft work $w_p$: $\\frac{P_1}{\\rho g} + \\frac{\\alpha_1 v_1^2}{2g} + z_1 + h_p = \\frac{P_2}{\\rho g} + \\frac{\\alpha_2 v_2^2}{2g} + z_2 + h_L$; Kinetic energy correction factor $\\alpha = 2$ for laminar, $\\alpha \\approx 1.05$ for turbulent.",
      "Venturimeter & Flow Rate Metering: Converging inlet, cylindrical throat, and gradual diverging diffuser ($5-7^\\circ$ to prevent boundary layer separation); Theoretical flow rate $Q_{th} = \\frac{A_1 A_2}{\\sqrt{A_1^2 - A_2^2}} \\sqrt{\\frac{2\\Delta P}{\\rho}}$; Actual flow $Q = C_d Q_{th}$ with discharge coefficient $C_d \\approx 0.96 - 0.98$.",
      "Orifice Meter & Pitot Tube: Orifice meter ($C_d \\approx 0.60-0.65$, vena contracta formation, high permanent pressure loss); Pitot-static tube measuring stagnation pressure: $P_{\\text{stag}} = P_0 + \\frac{1}{2}\\rho v^2 \\implies v = \\sqrt{\\frac{2(P_{\\text{stag}} - P_0)}{\\rho}}$.",
      "Vorticity & Stream Functions: Vorticity vector $\\vec{\\omega} = \\nabla \\times \\vec{v}$; Irrotational flow condition $\\nabla \\times \\vec{v} = 0 \\implies \\vec{v} = \\nabla \\phi$; Stream function $\\psi(x, y)$ satisfies $u = \\frac{\\partial\\psi}{\\partial y}, v = -\\frac{\\partial\\psi}{\\partial x}$; Laplace equation $\\nabla^2 \\phi = \\nabla^2 \\psi = 0$.",
      "University Examination Strategy: Derive the Bernoulli equation by integrating Euler's equation along a streamline, calculate volumetric flow rate through a Venturimeter, and evaluate velocity potential $\\phi$ from stream function $\\psi$."
    ],
    "keyPoints": [
      "Material Derivative: $\\frac{Df}{Dt} = \\frac{\\partial f}{\\partial t} + u\\frac{\\partial f}{\\partial x} + v\\frac{\\partial f}{\\partial y} + w\\frac{\\partial f}{\\partial z}$.",
      "Incompressible Continuity Equation: $\\nabla \\cdot \\vec{v} = 0$.",
      "Navier-Stokes Equation (Vector): $\\rho \\left(\\frac{\\partial\\vec{v}}{\\partial t} + \\vec{v}\\cdot\\nabla\\vec{v}\\right) = -\\nabla P + \\mu \\nabla^2 \\vec{v} + \\rho\\vec{g}$.",
      "Bernoulli's Equation: $\\frac{P}{\\rho g} + \\frac{v^2}{2g} + z = H$ (Constant along streamline).",
      "Venturi Flow Formula: $Q = C_d \\frac{A_1 A_2}{\\sqrt{A_1^2 - A_2^2}} \\sqrt{\\frac{2\\Delta P}{\\rho}}$.",
      "Pitot Tube Velocity: $v = \\sqrt{\\frac{2\\Delta P}{\\rho}}$.",
      "Kinetic Energy Factor $\\alpha$: $\\alpha = 2.0$ for laminar pipe flow; $\\alpha \\approx 1.05$ for turbulent pipe flow.",
      "Stream Function Velocities: $u = \\frac{\\partial\\psi}{\\partial y}, \\quad v = -\\frac{\\partial\\psi}{\\partial x}$.",
      "Irrotational Flow Condition: $\\nabla \\times \\vec{v} = 0$.",
      "Exam Scoring Tip: The diverging cone of a Venturimeter is designed with a small angle ($5-7^\\circ$) over a longer length to prevent boundary layer separation and eddy head loss."
    ]
  },
  "fluid mechanics (momentum transfer):::u4": {
    "highlights": [
      "Reynolds Number & Flow Regimes: Dimensionless ratio of inertial to viscous forces: $Re = \\frac{\\rho v D}{\\mu} = \\frac{v D}{\\nu}$; Laminar flow ($Re < 2100$), Transition ($2100 < Re < 4000$), and Fully developed turbulent flow ($Re > 4000$).",
      "Hagen-Poiseuille Law for Laminar Flow: Fully developed laminar pipe flow; Parabolic velocity profile $v(r) = v_{max} \\left(1 - \\frac{r^2}{R^2}\\right)$, where $v_{max} = 2 v_{avg}$; Wall shear stress $\\tau_w = \\frac{\\Delta P \\cdot R}{2L}$; Pressure drop: $\\Delta P = \\frac{32 \\mu v L}{D^2} = \\frac{128 \\mu Q L}{\\pi D^4}$.",
      "Darcy-Weisbach Friction Equation: Head loss due to pipe friction: $h_f = f \\frac{L}{D} \\frac{v^2}{2g}$ (where $f$ is Darcy friction factor; Fanning friction factor $f_F = f / 4$); For laminar flow, $f = \\frac{64}{Re}$ ($f_F = \\frac{16}{Re}$).",
      "Turbulent Pipe Flow & Moody Diagram: Universal velocity profile: Viscous sublayer ($y^+ < 5, u^+ = y^+$), Buffer zone ($5 < y^+ < 30$), and Logarithmic overlap layer ($u^+ = \\frac{1}{\\kappa} \\ln y^+ + B$); Friction factor depends on $Re$ and relative surface roughness $\\varepsilon / D$ as plotted on the Moody chart.",
      "Colebrook-White & Haaland Equations: Implicit Colebrook equation: $\\frac{1}{\\sqrt{f}} = -2.0 \\log_{10}\\left(\\frac{\\varepsilon / D}{3.7} + \\frac{2.51}{Re \\sqrt{f}}\\right)$; Explicit Haaland approximation: $\\frac{1}{\\sqrt{f}} \\approx -1.8 \\log_{10}\\left[\\left(\\frac{\\varepsilon / D}{3.7}\\right)^{1.11} + \\frac{6.9}{Re}\\right]$.",
      "Hydrodynamic Entrance Length ($L_h$): Distance required for boundary layer to merge at pipe centerline: Laminar flow entrance length $L_h \\approx 0.05 Re \\cdot D$; Turbulent entrance length $L_h \\approx 10-50 D$ (much shorter due to rapid turbulent eddy diffusion).",
      "Minor Losses in Pipe Networks: Head losses in fittings, valves, contractions, and bends: $h_m = K_L \\frac{v^2}{2g}$; Sudden enlargement loss (Borda-Carnot formula): $h_e = \\frac{(v_1 - v_2)^2}{2g}$; Sudden contraction loss: $h_c = K_c \\frac{v_2^2}{2g} = \\left(\\frac{1}{C_c} - 1\\right)^2 \\frac{v_2^2}{2g}$.",
      "Pipes in Series & Parallel: Pipes in series: $Q = Q_1 = Q_2$ and $h_L = h_{L1} + h_{L2}$; Equivalent pipe length (Dupuit's equation): $\\frac{L_e}{D_e^5} = \\frac{L_1}{D_1^5} + \\frac{L_2}{D_2^5}$; Pipes in parallel: $h_L = h_{L1} = h_{L2}$ and total flow $Q = Q_1 + Q_2$.",
      "Flow Through Packed Beds (Ergun Equation): Flow through porous catalyst beds; Void fraction / porosity $\\varepsilon$; Ergun equation combines laminar Kozeny-Carman and turbulent Burke-Plummer terms: $\\frac{\\Delta P}{L} = 150 \\frac{\\mu v_0 (1 - \\varepsilon)^2}{d_p^2 \\varepsilon^3} + 1.75 \\frac{\\rho v_0^2 (1 - \\varepsilon)}{d_p \\varepsilon^3}$.",
      "University Examination Strategy: Derive Hagen-Poiseuille equation starting from cylindrical momentum shell balance, solve parallel pipe network discharge divisions, and calculate pressure drop across a packed bed using Ergun's equation."
    ],
    "keyPoints": [
      "Hagen-Poiseuille Pressure Drop: $\\Delta P = \\frac{32 \\mu v L}{D^2} = \\frac{128 \\mu Q L}{\\pi D^4}$.",
      "Darcy Friction Factor (Laminar): $f = \\frac{64}{Re}$.",
      "Fanning Friction Factor (Laminar): $f_F = \\frac{16}{Re}$.",
      "Darcy-Weisbach Equation: $h_f = f \\frac{L}{D} \\frac{v^2}{2g}$.",
      "Sudden Enlargement Head Loss: $h_e = \\frac{(v_1 - v_2)^2}{2g}$.",
      "Sudden Contraction Head Loss: $h_c = \\left(\\frac{1}{C_c} - 1\\right)^2 \\frac{v_2^2}{2g}$.",
      "Dupuit Equivalent Pipe Formula: $\\frac{L_e}{D_e^5} = \\sum_{i=1}^n \\frac{L_i}{D_i^5}$.",
      "Ergun Packed Bed Equation: $\\frac{\\Delta P}{L} = 150\\frac{\\mu v_0(1-\\varepsilon)^2}{d_p^2 \\varepsilon^3} + 1.75\\frac{\\rho v_0^2(1-\\varepsilon)}{d_p \\varepsilon^3}$.",
      "Kozeny-Carman Constant: Valid for laminar packed bed flow ($Re_p < 10$).",
      "Exam Scoring Tip: The friction factor $f$ in chemical engineering literature is often Fanning's ($f_F$), which is strictly one-fourth of the Darcy friction factor ($f = 4 f_F$)."
    ]
  },
  "fluid mechanics (momentum transfer):::u5": {
    "highlights": [
      "Classification of Fluid Machinery: Positive displacement pumps (reciprocating piston/plunger, rotary gear, lobe, screw, peristaltic; constant volume delivery independent of discharge pressure) vs Dynamic / Turbomachinery (centrifugal pumps, axial flow pumps; head decreases with flow rate).",
      "Centrifugal Pump Architecture & Velocity Triangles: Impeller vanes (backward-curved vanes $\\beta_2 < 90^\\circ$ yield stable drooping $H-Q$ curve), volute casing, and diffuser; Euler's pump equation: Theoretical head $H_e = \\frac{u_2 v_{w2} - u_1 v_{w1}}{g}$; For radial inlet ($v_{w1} = 0$), $H_e = \\frac{u_2 v_{w2}}{g}$.",
      "Centrifugal Pump Efficiencies: Manometric efficiency $\\eta_m = \\frac{g H_m}{u_2 v_{w2}}$; Volumetric efficiency $\\eta_v = \\frac{Q}{Q + q_L}$; Mechanical efficiency $\\eta_{mech} = \\frac{\\text{Hydraulic Power}}{\\text{Brake Power}}$; Overall efficiency $\\eta_o = \\eta_m \\times \\eta_v \\times \\eta_{mech} = \\frac{\\rho g Q H_m}{P_{\\text{shaft}}}$.",
      "Net Positive Suction Head (NPSH) & Cavitation Prevention: Available NPSH: $NPSH_A = \\frac{P_{atm}}{\\rho g} - h_s - h_{fs} - \\frac{P_v}{\\rho g}$; Required NPSH: $NPSH_R$ specified by pump manufacturer; Cavitation-free operation strictly requires $NPSH_A > NPSH_R + 0.5\\text{ m}$.",
      "Specific Speed ($N_s$) & Impeller Selection: $N_s = \\frac{N \\sqrt{Q}}{H^{3/4}}$ in rpm; Low $N_s$ ($500-1500$, narrow radial impellers for high head and low discharge); Medium $N_s$ ($1500-4000$, Francis type); High $N_s$ ($>4000$, axial flow propeller pumps for high flow and low head).",
      "Centrifugal Pump Operating Point & System Characteristic: System head curve: $H_{sys} = H_{stat} + K Q^2$; Operating duty point is the intersection of the pump manufacturer's $H-Q$ curve with the pipeline system curve; Throttling valve control vs Variable Frequency Drive (VFD).",
      "Pumps in Series & Parallel Configurations: Series (impellers on common shaft or multi-stage pumps): $Q = Q_1$, Total head $H = H_1 + H_2$; Parallel (multiple pumps discharging into common manifold): $H = H_1 = H_2$, Total flow $Q = Q_1 + Q_2$.",
      "Reciprocating Pumps & Indicator Diagrams: Double-acting piston pump discharge $Q_{th} = \\frac{2 A L N}{60}$; Slip $= \\frac{Q_{th} - Q_{act}}{Q_{th}}$; Negative slip occurs in long suction pipes at high speeds; Acceleration head $h_a = \\frac{l}{g}\\frac{A}{a}\\omega^2 r \\cos\\theta$; Air vessels installed near cylinder to equalize flow and eliminate inertia head.",
      "Gas Compressors & Multi-Stage Compression: Reciprocating vs Centrifugal compressors; Work of single-stage compression; Multi-stage compression with intercooling reduces work to minimum; Optimum interstage pressure for two-stage: $P_i = \\sqrt{P_1 P_2}$.",
      "University Examination Strategy: Construct inlet and outlet velocity triangles for a centrifugal pump with backward-curved vanes, calculate manometric head and overall efficiency, solve NPSH available problems, and prove optimum intercooling pressure $P_i = \\sqrt{P_1 P_2}$."
    ],
    "keyPoints": [
      "Euler's Pump Head Equation: $H_{e} = \\frac{u_2 v_{w2}}{g}$ (assuming radial entry $v_{w1} = 0$).",
      "Manometric Efficiency: $\\eta_m = \\frac{g H_m}{u_2 v_{w2}}$.",
      "Overall Pump Efficiency: $\\eta_o = \\frac{\\rho g Q H_m}{P_{\\text{brake}}}$.",
      "NPSH Available Formula: $NPSH_A = \\frac{P_0 - P_v}{\\rho g} - z_s - h_{fs}$.",
      "Cavitation Avoidance Criterion: $NPSH_A > NPSH_R$ (minimum margin $0.5\\text{ m}$).",
      "Pump Specific Speed: $N_s = \\frac{N \\sqrt{Q}}{H_m^{3/4}}$.",
      "Affinity Laws (Speed $N$ Variation): $\\frac{Q_1}{Q_2} = \\frac{N_1}{N_2}, \\quad \\frac{H_1}{H_2} = \\left(\\frac{N_1}{N_2}\\right)^2, \\quad \\frac{P_1}{P_2} = \\left(\\frac{N_1}{N_2}\\right)^3$.",
      "Two-Stage Compressor Optimum Interstage: $P_i = \\sqrt{P_1 P_2}$.",
      "Reciprocating Pump Slip: $\\%\\text{Slip} = \\frac{Q_{th} - Q_{act}}{Q_{th}} \\times 100\\%$.",
      "Exam Scoring Tip: Backward-curved vanes ($\\beta_2 < 90^\\circ$) are universally used in centrifugal pumps because they produce a self-limiting power curve and higher efficiency than forward vanes."
    ]
  },
  "chemical engineering thermodynamics — i:::u1": {
    "highlights": [
      "First Law of Thermodynamics for Closed Systems: Conservation of energy: $\\Delta U = Q - W$; State function internal energy $U$ depends only on initial and final thermodynamic equilibrium states; Reversible work $W = \\int P dV$.",
      "Open System First Law & Steady-State Flow Energy Equation (SFEE): Control volume energy balance: $\\Delta \\left[H + \\frac{v^2}{2} + g z\\right] = Q - W_s$; Enthalpy defined as $H = U + P V$; Shaft work $W_s$ and rate of heat transfer $Q$.",
      "Reversible vs Irreversible Processes: Reversible process (proceeds through continuous quasi-static equilibrium states without dissipation, yielding maximum work output $W_{rev}$); Irreversible processes involve finite temperature gradients, fluid turbulence, unresisted expansion, and chemical reactions.",
      "Heat Capacity Relations: Heat capacity at constant volume $C_v = \\left(\\frac{\\partial U}{\\partial T}\\right)_v$; Heat capacity at constant pressure $C_p = \\left(\\frac{\\partial H}{\\partial T}\\right)_p$; For ideal gas: $C_p - C_v = R$; Ratio of heat capacities $\\gamma = C_p / C_v$.",
      "Ideal Gas Reversible Processes: Isothermal ($T = C, W = R T \\ln(V_2 / V_1) = R T \\ln(P_1 / P_2), \\Delta U = 0$); Isobaric ($P = C, W = P \\Delta V, Q = \\Delta H$); Isochoric ($V = C, W = 0, Q = \\Delta U$); Adiabatic ($Q = 0, P V^\\gamma = C, W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}$).",
      "Polytropic Process Analysis: General reversible expansion $P V^n = C$; Polytropic work $W = \\frac{P_1 V_1 - P_2 V_2}{n - 1}$; Polytropic heat capacity $C_n = C_v \\frac{n - \\gamma}{n - 1}$; Spans all standard thermodynamic paths ($n = 0$ isobaric, $n = 1$ isothermal, $n = \\gamma$ adiabatic, $n = \\infty$ isochoric).",
      "Joule-Thomson Expansion & Porous Plug Experiment: Isenthalpic throttling process ($H_1 = H_2$); Joule-Thomson coefficient $\\mu_{JT} = \\left(\\frac{\\partial T}{\\partial P}\\right)_H = \\frac{1}{C_p}\\left[T\\left(\\frac{\\partial V}{\\partial T}\\right)_P - V\\right]$; Inversion temperature where $\\mu_{JT} = 0$; For ideal gas, $\\mu_{JT} = 0$ identically.",
      "Compressibility Factor ($Z$): Departure from ideal gas behavior: $Z = \\frac{P V}{R T}$; $Z = 1$ for ideal gas; Theorem of corresponding states: $Z = f(P_r, T_r)$, where reduced parameters are $P_r = P / P_c$ and $T_r = T / T_c$.",
      "Second Law Formulations & Carnot Cycle: Kelvin-Planck statement (impossible to construct cyclic engine whose sole effect is absorption of heat from single reservoir and performance of equal work) vs Clausius statement (impossible to transfer heat from cold to hot body without external work); Carnot efficiency $\\eta_c = 1 - \\frac{T_C}{T_H}$.",
      "University Examination Strategy: Formulate the First Law SFEE for a nozzle and compressor, derive $C_p - C_v = R$ for an ideal gas, calculate work and heat in polytropic processes, and derive the Joule-Thomson coefficient."
    ],
    "keyPoints": [
      "First Law Differential: $dU = dQ - dW = dQ - P dV$.",
      "Enthalpy Definition: $H = U + P V$.",
      "SFEE Open System Equation: $\\Delta H + \\frac{\\Delta v^2}{2} + g \\Delta z = Q - W_s$.",
      "Ideal Gas Heat Capacity Difference: $C_p - C_v = R$.",
      "Reversible Isothermal Work: $W = R T \\ln\\left(\\frac{V_2}{V_1}\\right) = R T \\ln\\left(\\frac{P_1}{P_2}\\right)$.",
      "Reversible Adiabatic Work: $W = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1} = \\frac{R (T_1 - T_2)}{\\gamma - 1}$.",
      "Joule-Thomson Coefficient: $\\mu_{JT} = \\left(\\frac{\\partial T}{\\partial P}\\right)_H = \\frac{1}{C_p} \\left[T\\left(\\frac{\\partial V}{\\partial T}\\right)_P - V\\right]$.",
      "Carnot Thermal Efficiency: $\\eta = 1 - \\frac{T_L}{T_H}$.",
      "Compressibility Factor: $Z = \\frac{P V}{R T}$.",
      "Exam Scoring Tip: For an isenthalpic throttling expansion, a real gas cools only if initial temperature is below its maximum Joule-Thomson inversion temperature ($T < T_{inv}$)."
    ]
  },
  "chemical engineering thermodynamics — i:::u2": {
    "highlights": [
      "Equations of State (EOS) for Pure Fluids: Mathematical relations connecting state variables $P, V, T$; Ideal gas law $P V = R T$ valid only at low pressures ($P \\to 0$) and elevated temperatures ($T \\gg T_c$).",
      "Van der Waals Equation of State: $\\left(P + \\frac{a}{V^2}\\right)(V - b) = R T$; Accounts for intermolecular attractive forces (internal pressure correction $a/V^2$) and finite molecular co-volume ($b$); Cubic polynomial in molar volume $V$.",
      "Critical Point Conditions: Critical isotherm exhibits horizontal inflection point on $P-V$ diagram: $\\left(\\frac{\\partial P}{\\partial V}\\right)_{T_c} = 0$ and $\\left(\\frac{\\partial^2 P}{\\partial V^2}\\right)_{T_c} = 0$; Van der Waals parameters: $a = \\frac{27 R^2 T_c^2}{64 P_c}, b = \\frac{R T_c}{8 P_c}$; Critical compressibility $Z_c = \\frac{P_c V_c}{R T_c} = \\frac{3}{8} = 0.375$.",
      "Redlich-Kwong (RK) Equation of State: $P = \\frac{R T}{V - b} - \\frac{a}{\\sqrt{T} V (V + b)}$; Substantially improves vapor-phase density predictions; Critical parameters: $a = 0.42748 \\frac{R^2 T_c^{2.5}}{P_c}$ and $b = 0.08664 \\frac{R T_c}{P_c}$ with $Z_c = 1/3 = 0.333$.",
      "Soave-Redlich-Kwong (SRK) & Peng-Robinson (PR) EOS: Modern cubic EOS incorporating Pitzer's acentric factor $\\omega$; Peng-Robinson: $P = \\frac{R T}{V - b} - \\frac{a(T)}{V(V + b) + b(V - b)}$; Widely used in petrochemical simulation for vapor-liquid equilibria (VLE) of non-polar hydrocarbons ($Z_c = 0.307$).",
      "Virial Equation of State: Power series expansion in pressure or molar density: $Z = 1 + B' P + C' P^2 + \\dots = 1 + \\frac{B}{V} + \\frac{C}{V^2} + \\dots$; Second virial coefficient $B(T)$ accounts for two-body intermolecular interactions; Third coefficient $C(T)$ accounts for three-body interactions.",
      "Boyle Temperature ($T_B$): Temperature at which second virial coefficient vanishes ($B(T_B) = 0$); Fluid obeys ideal gas law over wide pressure range up to several atmospheres ($Z \\approx 1.0$).",
      "Generalized Compressibility Charts: Nelson-Obert charts expressing $Z$ as universal function of reduced pressure $P_r = P / P_c$ and reduced temperature $T_r = T / T_c$; Three-parameter corresponding states: $Z = Z^{(0)} + \\omega Z^{(1)}$.",
      "Acentric Factor ($\\omega$): Pitzer's metric for molecular non-sphericity: $\\omega = -\\log_{10}(P_r^{\\text{sat}})_{T_r = 0.7} - 1.000$; $\\omega = 0$ for noble gases (argon, krypton, xenon); Increases for complex, elongated, or polar molecules.",
      "University Examination Strategy: Derive Van der Waals constants $a, b$ and critical compressibility factor $Z_c = 3/8$ from critical inflection criteria, and calculate molar volume of real gas using the Virial equation."
    ],
    "keyPoints": [
      "Van der Waals EOS: $\\left(P + \\frac{a}{V^2}\\right)(V - b) = R T$.",
      "Critical Point Conditions: $\\left(\\frac{\\partial P}{\\partial V}\\right)_{T_c} = 0, \\quad \\left(\\frac{\\partial^2 P}{\\partial V^2}\\right)_{T_c} = 0$.",
      "Van der Waals Constant $a$: $a = \\frac{27 R^2 T_c^2}{64 P_c}$.",
      "Van der Waals Constant $b$: $b = \\frac{R T_c}{8 P_c}$.",
      "Van der Waals Critical Compressibility: $Z_c = \\frac{P_c V_c}{R T_c} = \\frac{3}{8} = 0.375$.",
      "Redlich-Kwong EOS: $P = \\frac{R T}{V - b} - \\frac{a}{\\sqrt{T} V (V + b)}$.",
      "Redlich-Kwong Critical Compressibility: $Z_c = \\frac{1}{3} \\approx 0.333$.",
      "Virial Expansion (Volume): $Z = 1 + \\frac{B(T)}{V} + \\frac{C(T)}{V^2} + \\dots$.",
      "Acentric Factor Formula: $\\omega = -\\log_{10}(P_r^{\\text{sat}})_{T_r = 0.7} - 1.000$.",
      "Exam Scoring Tip: Modern cubic equations of state (SRK, Peng-Robinson) replace the constant $a$ with a temperature-dependent parameter $a(T) = a_c \\alpha(T_r, \\omega)$ to match vapor pressures accurately."
    ]
  },
  "chemical engineering thermodynamics — i:::u3": {
    "highlights": [
      "Sensible Heat Effects: Heat transferred causing temperature change without phase transformation; Molar heat capacity temperature dependency modeled via empirical polynomial: $C_p = A + B T + C T^2 + D T^{-2}$; Sensible heat $\\Delta H = \\int_{T_1}^{T_2} C_p dT$.",
      "Mean Heat Capacity ($C_{p,m}$): Defined such that $\\Delta H = C_{p,m} (T_2 - T_1)$; $C_{p,m} = \\frac{1}{T_2 - T_1} \\int_{T_1}^{T_2} C_p dT = A + \\frac{B}{2}(T_1 + T_2) + \\frac{C}{3}(T_1^2 + T_1 T_2 + T_2^2) + \\frac{D}{T_1 T_2}$.",
      "Latent Heat of Phase Transitions: Enthalpy change during constant-temperature phase change (fusion $\\Delta H_{fus}$, vaporization $\\Delta H_{vap}$, sublimation $\\Delta H_{sub}$); Clapeyron equation: $\\frac{dP^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{T \\Delta V}$.",
      "Clausius-Clapeyron Equation: Neglecting liquid volume ($V_L \\ll V_V$) and assuming ideal gas vapor ($V_V = R T / P^{\\text{sat}}$): $\\frac{d \\ln P^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{R T^2}$; Integrated form: $\\ln\\left(\\frac{P_2^{\\text{sat}}}{P_1^{\\text{sat}}}\\right) = -\\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.",
      "Trouton's & Riedel's Vaporization Rules: Trouton's rule: Entropy of vaporization at normal boiling point is approximately constant for non-polar liquids: $\\Delta S_{vap} = \\frac{\\Delta H_{vap}}{T_b} \\approx 88\\text{ J/(mol}\\cdot\\text{K)}$; Riedel's high-precision correlation incorporating critical properties.",
      "Standard Heat of Reaction ($\\Delta H_R^\\circ$): Enthalpy change when stoichiometric reactants in standard state ($1\\text{ bar}$, $298.15\\text{ K}$) convert completely to products in standard state: $\\Delta H_R^\\circ = \\sum \\nu_i \\Delta H_{f, i}^\\circ$, where $\\nu_i$ is stoichiometric coefficient ($+$ for products, $-$ for reactants).",
      "Hess's Law of Constant Heat Summation: Overall enthalpy change for chemical reaction sequence equals algebraic sum of enthalpy changes of individual reaction steps, independent of pathway.",
      "Kirchhoff's Law for Temperature Dependency: Variation of reaction enthalpy with temperature: $\\frac{d(\\Delta H_R^\\circ)}{dT} = \\Delta C_p^\\circ$; Integrated form: $\\Delta H_R^\\circ(T) = \\Delta H_R^\\circ(T_0) + \\int_{T_0}^T \\Delta C_p^\\circ dT$, where $\\Delta C_p^\\circ = \\sum \\nu_i C_{p, i}^\\circ$.",
      "Standard Heat of Combustion ($\\Delta H_c^\\circ$) & Heating Values: Higher Heating Value (HHV, liquid water product) vs Lower Heating Value (LHV, water vapor product); Adiabatic flame temperature $T_{ad}$ (maximum temperature attained in combustion chamber without heat loss, solved by $\\Delta H_R^\\circ(T_0) + \\int_{T_0}^{T_{ad}} \\sum n_{\\text{prod}} C_{p, \\text{prod}} dT = 0$).",
      "University Examination Strategy: Calculate standard enthalpy of reaction using standard heats of formation, integrate Kirchhoff's equation to find $\\Delta H_R$ at $800\\text{ K}$, and calculate the adiabatic flame temperature of a fuel gas."
    ],
    "keyPoints": [
      "Sensible Enthalpy Integral: $\\Delta H = \\int_{T_1}^{T_2} C_p dT$.",
      "Clapeyron Phase Boundary Equation: $\\frac{dP^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{T (V_V - V_L)}$.",
      "Clausius-Clapeyron Formula: $\\frac{d\\ln P^{\\text{sat}}}{dT} = \\frac{\\Delta H_{vap}}{R T^2}$.",
      "Integrated Clausius-Clapeyron: $\\ln\\left(\\frac{P_2}{P_1}\\right) = -\\frac{\\Delta H_{vap}}{R} \\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$.",
      "Trouton's Empirical Ratio: $\\frac{\\Delta H_{vap}}{T_b} \\approx 88\\text{ J/(mol}\\cdot\\text{K)}$.",
      "Standard Reaction Enthalpy: $\\Delta H_R^\\circ = \\sum \\nu_i \\Delta H_{f, i}^\\circ$.",
      "Kirchhoff's Law Differential: $\\frac{d(\\Delta H_R^\\circ)}{dT} = \\Delta C_p^\\circ = \\sum \\nu_i C_{p, i}^\\circ$.",
      "Integrated Kirchhoff Equation: $\\Delta H_R(T) = \\Delta H_R(T_0) + \\int_{T_0}^T \\Delta C_p dT$.",
      "Adiabatic Flame Temperature Balance: $\\Delta H_R(T_0) + \\int_{T_0}^{T_{ad}} \\sum n_p C_{p, p} dT = 0$.",
      "Exam Scoring Tip: In calculating adiabatic flame temperature, nitrogen present in air must be included in the product heat capacity integral even though it does not participate chemically."
    ]
  },
  "chemical engineering thermodynamics — i:::u4": {
    "highlights": [
      "Mathematical Definition of Entropy ($S$): State variable defined by Clausius for reversible differential heat transfer: $dS = \\frac{\\delta Q_{rev}}{T}$; Unit $\\text{J/(mol}\\cdot\\text{K)}$; Line integral of $dS$ around any reversible closed cycle is identically zero: $\\oint \\frac{\\delta Q_{rev}}{T} = 0$.",
      "Clausius Inequality: For any real (irreversible) thermodynamic cycle: $\\oint \\frac{\\delta Q}{T} \\le 0$; Equality holds strictly for reversible cycles; Inequality holds for irreversible cycles.",
      "Principle of Entropy Generation / Increase of Entropy: For isolated system, total entropy change $\\Delta S_{\\text{total}} = \\Delta S_{\\text{system}} + \\Delta S_{\\text{surroundings}} = S_{gen} \\ge 0$; Entropy generation $S_{gen} > 0$ for all real spontaneous natural processes; $S_{gen} = 0$ for reversible processes.",
      "Entropy Changes for Ideal Gas: $dS = C_v \\frac{dT}{T} + R \\frac{dV}{V} = C_p \\frac{dT}{T} - R \\frac{dP}{P}$; Integrated expressions: $\\Delta S = C_p \\ln(T_2 / T_1) - R \\ln(P_2 / P_1) = C_v \\ln(T_2 / T_1) + R \\ln(V_2 / V_1)$.",
      "Entropy of Phase Transitions: Reversible isothermal phase transformation at constant temperature and pressure: $\\Delta S = \\frac{\\Delta H}{T}$; e.g. melting of ice $\\Delta S_{fus} = \\Delta H_{fus} / T_m$.",
      "Third Law of Thermodynamics & Absolute Entropy: Nernst Heat Theorem; The entropy of every pure crystalline substance in complete internal thermodynamic equilibrium is zero at absolute zero temperature ($S \\to 0$ as $T \\to 0\\text{ K}$); Enables determination of absolute entropy $S_T^\\circ = \\int_0^T \\frac{C_p}{T} dT$.",
      "Lost Work & Gouy-Stodola Theorem: Irreversibility and exergy destruction rate in steady-flow processes: $W_{\\text{lost}} = T_0 S_{gen} = T_0 \\Delta S_{\\text{total}}$, where $T_0$ is surroundings ambient temperature; Direct link between entropy generation and lost useful work.",
      "Isentropic Efficiencies in Industrial Turbomachinery: Compressor isentropic efficiency $\\eta_c = \\frac{W_s^{\\text{rev}}}{W_s^{\\text{actual}}} = \\frac{H_{2s} - H_1}{H_2 - H_1}$; Turbine isentropic efficiency $\\eta_t = \\frac{W_s^{\\text{actual}}}{W_s^{\\text{rev}}} = \\frac{H_1 - H_2}{H_1 - H_{2s}}$.",
      "Temperature-Entropy ($T-S$) Diagrams: Area under reversible process path represents heat transferred: $Q_{rev} = \\int T dS$; Carnot cycle appears as neat rectangle on $T-S$ plot.",
      "University Examination Strategy: Prove the Clausius inequality using an auxiliary Carnot engine, calculate entropy change for mixing two fluids at different temperatures, and determine lost work using the Gouy-Stodola theorem."
    ],
    "keyPoints": [
      "Entropy Differential Definition: $dS = \\frac{\\delta Q_{rev}}{T}$.",
      "Clausius Inequality: $\\oint \\frac{\\delta Q}{T} \\le 0$.",
      "Total Entropy Generation: $\\Delta S_{\\text{total}} = \\Delta S_{sys} + \\Delta S_{surr} = S_{gen} \\ge 0$.",
      "Ideal Gas Entropy ($T$ and $P$): $\\Delta S = C_p \\ln\\left(\\frac{T_2}{T_1}\\right) - R \\ln\\left(\\frac{P_2}{P_1}\\right)$.",
      "Ideal Gas Entropy ($T$ and $V$): $\\Delta S = C_v \\ln\\left(\\frac{T_2}{T_1}\\right) + R \\ln\\left(\\frac{V_2}{V_1}\\right)$.",
      "Phase Change Entropy: $\\Delta S_{tr} = \\frac{\\Delta H_{tr}}{T_{tr}}$.",
      "Third Law Axiom: $\\lim_{T \\to 0\\text{ K}} S = 0$ for perfect crystalline solids.",
      "Gouy-Stodola Lost Work: $W_{\\text{lost}} = T_0 S_{gen}$.",
      "Turbine Isentropic Efficiency: $\\eta_t = \\frac{H_1 - H_2}{H_1 - H_{2s}}$.",
      "Exam Scoring Tip: Heat addition to an isothermal reservoir alters surroundings entropy by $\\Delta S_{surr} = -Q / T_{surr}$ regardless of whether the internal system process was reversible or irreversible."
    ]
  },
  "chemical engineering thermodynamics — i:::u5": {
    "highlights": [
      "Thermodynamic Potentials & Fundamental Property Relations: Internal energy $dU = T dS - P dV$; Enthalpy $dH = T dS + V dP$; Helmholtz free energy $A = U - T S \\implies dA = -S dT - P dV$; Gibbs free energy $G = H - T S \\implies dG = -S dT + V dP$.",
      "Maxwell's Thermodynamic Relations: Derived from exact differentials of $U, H, A, G$: (1) $\\left(\\frac{\\partial T}{\\partial V}\\right)_S = -\\left(\\frac{\\partial P}{\\partial S}\\right)_V$; (2) $\\left(\\frac{\\partial T}{\\partial P}\\right)_S = \\left(\\frac{\\partial V}{\\partial S}\\right)_P$; (3) $\\left(\\frac{\\partial P}{\\partial T}\\right)_V = \\left(\\frac{\\partial S}{\\partial V}\\right)_T$; (4) $\\left(\\frac{\\partial V}{\\partial T}\\right)_P = -\\left(\\frac{\\partial S}{\\partial P}\\right)_T$.",
      "Gibbs Energy as Spontaneity & Equilibrium Criterion: At constant temperature and pressure ($T, P$), differential $dG_{T, P} \\le 0$; $dG < 0$ denotes spontaneous natural process; $dG = 0$ defines thermodynamic equilibrium; Gibbs energy is minimized at equilibrium.",
      "Helmholtz Free Energy Criterion: At constant temperature and volume ($T, V$), differential $dA_{T, V} \\le 0$; Equilibrium attained when Helmholtz energy is minimized; $dA = -dW_{max}$ represents maximum work obtainable.",
      "Residual Properties ($M^R$): Difference between real fluid molar property and ideal gas property at same $T$ and $P$: $M^R(T, P) = M(T, P) - M^{ig}(T, P)$; Residual Gibbs energy $\\frac{G^R}{R T} = \\int_0^P (Z - 1) \\frac{dP}{P}$; Residual enthalpy $\\frac{H^R}{R T} = -T \\int_0^P \\left(\\frac{\\partial Z}{\\partial T}\\right)_P \\frac{dP}{P}$.",
      "Fugacity & Fugacity Coefficient of Pure Species: Fugacity $f$ has pressure units, replacing pressure in real fluids: $dG = R T d\\ln f$ at constant $T$; Fugacity coefficient $\\phi = f / P$; $\\lim_{P \\to 0} \\phi = 1.0$; Evaluated from equation of state: $\\ln\\phi = \\int_0^P (Z - 1) \\frac{dP}{P}$.",
      "Fugacity of Pure Liquids & Poynting Correction: At saturation vapor-liquid equilibrium: $f^L(T, P^{\\text{sat}}) = f^V(T, P^{\\text{sat}}) = \\phi^{\\text{sat}} P^{\\text{sat}}$; Compressed liquid fugacity at pressure $P > P^{\\text{sat}}$: $f^L(T, P) = \\phi^{\\text{sat}} P^{\\text{sat}} \\exp\\left[\\frac{V_L (P - P^{\\text{sat}})}{R T}\\right]$.",
      "Chemical Potential ($\\mu_i$): Partial molar Gibbs energy: $\\mu_i = \\left(\\frac{\\partial G}{\\partial n_i}\\right)_{T, P, n_{j \\ne i}}$; Fundamental criterion for phase equilibrium: chemical potential of each component must be identical across all coexisting phases: $\\mu_i^\\alpha = \\mu_i^\\beta = \\dots = \\mu_i^\\pi$.",
      "Gibbs-Helmholtz Equation: Temperature dependency of Gibbs free energy: $\\left[\\frac{\\partial(G/T)}{\\partial T}\\right]_P = -\\frac{H}{T^2}$ or $\\left[\\frac{\\partial(\\Delta G^\\circ / T)}{\\partial T}\\right]_P = -\\frac{\\Delta H^\\circ}{T^2}$; Links equilibrium constant temperature variation (van 't Hoff equation) to reaction enthalpy.",
      "University Examination Strategy: Derive the four Maxwell relations using cross-differentiation of state functions, calculate the fugacity coefficient using a given EOS, and formulate the Poynting correction factor."
    ],
    "keyPoints": [
      "Fundamental Property Relation for $G$: $dG = -S dT + V dP$.",
      "Fourth Maxwell Relation: $\\left(\\frac{\\partial V}{\\partial T}\\right)_P = -\\left(\\frac{\\partial S}{\\partial P}\\right)_T$.",
      "Third Maxwell Relation: $\\left(\\frac{\\partial P}{\\partial T}\\right)_V = \\left(\\frac{\\partial S}{\\partial V}\\right)_T$.",
      "Gibbs Spontaneity Criterion: $dG_{T, P} \\le 0$ ($dG = 0$ at equilibrium).",
      "Residual Gibbs Free Energy: $\\frac{G^R}{R T} = \\int_0^P (Z - 1) \\frac{dP}{P}$.",
      "Fugacity Coefficient Integral: $\\ln\\phi = \\int_0^P (Z - 1) \\frac{dP}{P}$.",
      "Poynting Correction Factor: $\\exp\\left[\\frac{V_L(P - P^{\\text{sat}})}{R T}\\right]$.",
      "Phase Equilibrium Criterion: $\\mu_i^\\alpha = \\mu_i^\\beta$ for all components $i$.",
      "Gibbs-Helmholtz Equation: $\\left[\\frac{\\partial(G/T)}{\\partial T}\\right]_P = -\\frac{H}{T^2}$.",
      "Exam Scoring Tip: The Poynting factor accounts for the effect of total pressure exceeding saturation pressure on liquid fugacity and is significant only at high pressures ($>20\\text{ bar}$)."
    ]
  },
  "organic chemistry:::u1": {
    "highlights": [
      "Types of Organic Reaction Intermediates: Carbocations ($sp^2$ hybridized, planar, stability order: tertiary > secondary > primary > methyl, stabilized by hyperconjugation and $+I$ inductive effect), Carbanions ($sp^3$ pyramidal, stability order: methyl > primary > secondary > tertiary), Carbon free radicals (neutral, planar), and Carbenes ($:CH_2$, singlet vs triplet).",
      "Nucleophilic Aliphatic Substitution ($S_N1$ vs $S_N2$): $S_N2$ (bimolecular, single-step concerted mechanism, backside attack, complete Walden inversion, rate $= k[RX][Nu^-]$, favored by primary halides and polar aprotic solvents); $S_N1$ (unimolecular, two-step via planar carbocation intermediate, partial racemization, rate $= k[RX]$, favored by tertiary halides and polar protic solvents).",
      "Elimination Reactions ($E1$ vs $E2$): $E2$ (bimolecular, concerted anti-periplanar geometry, rate $= k[RX][B^-]$); $E1$ (unimolecular, carbocation intermediate); Regioselectivity governed by Zaitsev's rule (predominance of more substituted, thermodynamically stable alkene) vs Hofmann rule (sterically hindered bases yield less substituted alkene).",
      "Electrophilic Aromatic Substitution (EAS): Benzene $\\pi$-electron cloud attacks electrophile $E^+$ forming resonance-stabilized arenium ion (Wheland intermediate / $\\sigma$-complex) followed by proton loss; Nitration ($HNO_3/H_2SO_4$, electrophile $NO_2^+$), Halogenation ($Br_2/FeBr_3$), Sulfonation ($SO_3/H_2SO_4$), and Friedel-Crafts alkylation and acylation.",
      "Directing Effects & Substituent Activation: Activating groups (ortho/para-directing, electron-donating via resonance $+M$ or induction $+I$, e.g. $-OH, -NH_2, -OCH_3, -CH_3$); Deactivating groups (meta-directing, electron-withdrawing via $-M$ or $-I$, e.g. $-NO_2, -CN, -COOH, -CHO$); Halogens are deactivating but ortho/para-directing due to competing induction vs resonance.",
      "Electrophilic Addition to Alkenes: Addition of hydrogen halides ($HX$); Markovnikov's rule (electrophilic proton adds to carbon with more hydrogen atoms to yield more stable carbocation intermediate); Anti-Markovnikov addition of $HBr$ under peroxide presence (Kharasch effect, free radical chain mechanism involving bromine radicals).",
      "Nucleophilic Addition to Carbonyl Groups: Polar carbonyl bond ($>C^{\\delta+} = O^{\\delta-}$); Addition of Grignard reagents ($RMgX$), hydrogen cyanide ($HCN$, forming cyanohydrins), sodium bisulfite, and alcohols (forming hemiacetals and acetals).",
      "Neighboring Group Participation (NGP) & Anchimeric Assistance: Internal nucleophile within substrate accelerates reaction rate via cyclic transition state, resulting in net retention of configuration rather than inversion.",
      "Pericyclic Reactions & Woodward-Hoffmann Rules: Concerted reactions occurring through cyclic transition states governed by orbital symmetry; Electrocyclic reactions, Cycloadditions (Diels-Alder $[4+2]$ cycloaddition between conjugated diene and dienophile), and Sigmatropic rearrangements (Cope and Claisen rearrangements).",
      "University Examination Strategy: Differentiate $S_N1$ vs $S_N2$ in a comparative table with energy profiles and stereochemical outcomes, state Zaitsev vs Hofmann elimination rules with examples, and draw resonance structures of the Wheland intermediate."
    ],
    "keyPoints": [
      "$S_N2$ Rate Law: Rate $= k[RX][Nu^-]$ (second-order, one-step concerted).",
      "$S_N1$ Rate Law: Rate $= k[RX]$ (first-order, carbocation rate-determining step).",
      "Walden Inversion: Complete stereochemical inversion of configuration during $S_N2$ backside displacement.",
      "Zaitsev's Elimination Rule: Base abstracts proton to yield the most highly substituted, stable alkene.",
      "Hofmann Elimination Rule: Bulky bases abstract least hindered proton, yielding less substituted terminal alkene.",
      "EAS Nitronium Electrophile: Generation: $HNO_3 + 2H_2SO_4 \\rightleftharpoons NO_2^+ + H_3O^+ + 2HSO_4^-$.",
      "Markovnikov's Addition Rule: Electrophile adds to form the more stable secondary or tertiary carbocation.",
      "Peroxide Effect Specificity: Operates strictly for $HBr$ (not $HCl$ or $HI$ due to unfavorable reaction energetics).",
      "Diels-Alder Reaction: $[4\\pi + 2\\pi]$ concerted cycloaddition yielding cyclohexene rings.",
      "Exam Scoring Tip: Halogens ($-F, -Cl, -Br, -I$) are deactivating due to strong $-I$ inductive pull, yet ortho/para-directing due to $+M$ resonance lone pair donation."
    ]
  },
  "organic chemistry:::u2": {
    "highlights": [
      "Alcohols, Phenols & Ethers: Alcohols (primary, secondary, tertiary; Lucas test using anhydrous $ZnCl_2/HCl$ to distinguish: tertiary clouds instantly, secondary in 5 minutes, primary remains clear); Phenols (more acidic than alcohols due to phenoxide resonance stabilization; react with neutral $FeCl_3$ to yield violet complex); Ethers (Williamson ether synthesis: $R-X + R'-O^- Na^+ \\to R-O-R' + NaX$).",
      "Aldehydes & Ketones: Characterized by carbonyl group ($>C=O$); Oxidation with Tollens' reagent (silver mirror test) and Fehling's solution (red $Cu_2O$ precipitate) distinguishes aldehydes from ketones; Haloform reaction ($I_2/NaOH$) detects methyl ketones ($-COCH_3$) via yellow iodoform ($CHI_3$).",
      "Aldol Condensation & Cannizzaro Reaction: Aldol condensation: Carbonyl compounds with $\\alpha$-hydrogen under dilute base form $\\beta$-hydroxyaldehydes/ketones which dehydrate to $\\alpha,\\beta$-unsaturated compounds; Cannizzaro reaction: Carbonyl compounds lacking $\\alpha$-hydrogen ($HCHO$, benzaldehyde) undergo base-catalyzed disproportionation into alcohol and carboxylate salt.",
      "Carboxylic Acids & Acidity Factors: Resonance stabilization of carboxylate anion ($-COO^-$); Acidity increased by electron-withdrawing substituents via inductive effect (e.g. $Cl_3CCOOH > Cl_2CHCOOH > ClCH_2COOH > CH_3COOH$); Hell-Volhard-Zelinsky (HVZ) $\\alpha$-halogenation reaction using $Br_2/P$.",
      "Carboxylic Acid Derivatives: Acyl chlorides ($-COCl$, most reactive), Acid anhydrides ($-(CO)_2O$), Esters ($-COOR$, sweet fruity odor, Fischer esterification), and Amides ($-CONH_2$, least reactive due to strong nitrogen resonance conjugation); Relative reactivity toward nucleophilic acyl substitution.",
      "Amines & Diazonium Salts: Classification (primary, secondary, tertiary); Basicity order in aqueous solution ($2^\\circ > 1^\\circ > 3^\\circ > NH_3$ for methyl amines); Hinsberg test with benzenesulfonyl chloride separates $1^\\circ, 2^\\circ, 3^\\circ$ amines; Primary aromatic amines react with $HNO_2$ at $0-5^\\circ\\text{C}$ to form stable arenediazonium salts ($Ar-N_2^+ Cl^-$).",
      "Synthetic Utility of Arenediazonium Salts: Sandmeyer reaction (conversion to chlorobenzene, bromobenzene, benzonitrile using $CuCl, CuBr, CuCN$); Schiemann reaction (fluorobenzene via $HBF_4$); Azo coupling with phenols and anilines at alkaline/acidic pH to form bright azo dyes.",
      "Nitro Compounds & Reduction Pathways: Nitrobenzene reduced by catalytic hydrogenation or $Sn/HCl$ to aniline; Selective reduction of $m$-dinitrobenzene to $m$-nitroaniline using ammonium sulfide (Zinin reduction).",
      "Grignard Reagents in Synthetic Transformations: Organomagnesium halides ($R-MgX$); Reaction with formaldehyde yields primary alcohol; with other aldehydes yields secondary alcohol; with ketones yields tertiary alcohol; with $CO_2$ yields carboxylic acid.",
      "University Examination Strategy: Differentiate primary, secondary, and tertiary alcohols using Lucas test, detail the mechanism of Aldol condensation vs Cannizzaro reaction, and outline synthetic steps starting from benzenediazonium chloride."
    ],
    "keyPoints": [
      "Lucas Reagent Composition: Equimolar anhydrous $ZnCl_2$ dissolved in concentrated hydrochloric acid ($HCl$).",
      "Tollens' Test Equation: $R-CHO + 2[Ag(NH_3)_2]^+ + 3OH^- \\to R-COO^- + 2Ag\\downarrow + 4NH_3 + 2H_2O$.",
      "Iodoform Positive Structural Unit: Requires terminal methyl carbonyl group ($CH_3-C=O$) or methyl carbinol ($CH_3-CH(OH)-$).",
      "Williamson Ether Synthesis: $R-O^- Na^+ + R'-X \\to R-O-R' + NaX$ ($S_N2$ mechanism, $R'-X$ must be unhindered).",
      "Cannizzaro Disproportionation: $2Ar-CHO + OH^- \\to Ar-COO^- + Ar-CH_2OH$ (requires zero $\\alpha$-hydrogens).",
      "Acid Halide Reactivity Order: Acyl chloride > Acid anhydride > Ester > Amide.",
      "Sandmeyer Halogenation: $Ar-N_2^+ Cl^- \\xrightarrow{CuCl/HCl} Ar-Cl + N_2\\uparrow$.",
      "Azo Coupling Reaction: $Ar-N_2^+ + C_6H_5OH \\xrightarrow{pH\\,9-10} Ar-N=N-C_6H_4-OH$ (p-hydroxyazobenzene orange dye).",
      "Grignard Reagent Formaldehyde Addition: $HCHO + RMgX \\to R-CH_2-OMgX \\xrightarrow{H_2O} R-CH_2OH$ (primary alcohol).",
      "Exam Scoring Tip: Amides are the least reactive acid derivatives because the nitrogen lone pair strongly donates into the carbonyl carbon, reducing its electrophilic character."
    ]
  },
  "organic chemistry:::u3": {
    "highlights": [
      "Constitutional vs Stereoisomerism: Constitutional isomers (different atom connectivity: chain, positional, functional, metamerism, tautomerism); Stereoisomers (identical connectivity, different spatial arrangement: conformational vs configurational).",
      "Conformational Analysis of Acyclic Alkanes: Ethane (staggered vs eclipsed conformers, torsional strain $12\\text{ kJ/mol}$); n-Butane rotation around C2-C3 bond: Anti-periplanar (fully staggered, global energy minimum), Gauche (staggered, steric strain $3.8\\text{ kJ/mol}$), Eclipsed, and Fully eclipsed (syn-periplanar, maximum potential energy, $19\\text{ kJ/mol}$).",
      "Conformations of Cyclohexane: Planar ring angle strain ($120^\\circ$ vs ideal tetrahedral $109.5^\\circ$); Chair conformation (completely strain-free, zero angle and torsional strain); Boat conformation (flagpole interactions and eclipsed bonds); Half-chair and Twist-boat conformations.",
      "Equatorial vs Axial Substituted Cyclohexanes: Axial substituents experience 1,3-diaxial steric repulsions; Equatorial substituents orient outward into open space; Conformational free energy difference $\\Delta G^\\circ = -R T \\ln K$; Methylcyclohexane exists $95\\%$ in equatorial chair at equilibrium.",
      "Optical Activity & Chirality: Chiral molecule lacks plane of symmetry ($\\sigma$) and center of inversion ($i$); Rotates plane-polarized light measured by polarimeter; Specific optical rotation $[\u0007lpha]_\\lambda^T = \\frac{\\alpha}{l \\cdot c}$, where $\\alpha$ is observed rotation, $l$ is path length in dm, and $c$ is concentration in g/mL.",
      "Enantiomers vs Diastereomers: Enantiomers (non-superimposable mirror images, identical physical/chemical properties in achiral environment, equal and opposite optical rotation); Diastereomers (stereoisomers that are not mirror images, different melting points, boiling points, and chromatographic retention factors).",
      "Meso Compounds & Racemic Mixtures: Meso compound (contains internal plane of symmetry despite chiral centers, optically inactive by internal compensation, e.g. meso-tartaric acid); Racemic mixture ($(\\pm)$ or $dl$, equimolar mixture of enantiomers, optically inactive by external compensation).",
      "Cahn-Ingold-Prelog (CIP) Priority Rules & $R/S$ Nomenclature: Priorities assigned by atomic number directly attached to stereocenter; If tied, compare along chain; Multiple bonds treated by duplicating atoms; View with lowest priority group (4) oriented away from observer: Clockwise $1 \\to 2 \\to 3$ is $(R)$, counterclockwise is $(S)$.",
      "Geometric Isomerism ($E/Z$ System): Restricted rotation around double bonds or rings; CIP priorities applied to each end of double bond: $(Z)$ (zusammen, higher priority groups on same side) vs $(E)$ (entgegen, higher priority groups on opposite sides).",
      "University Examination Strategy: Draw the potential energy diagram for n-butane rotation labeling all 4 conformers, assign $(R)$ or $(S)$ configurations to Fischer projections of tartaric acid, and draw chair conformations of trans-1,4-dimethylcyclohexane."
    ],
    "keyPoints": [
      "Specific Optical Rotation Formula: $[\u0007lpha]_\\lambda^T = \\frac{\\alpha}{l \\cdot c}$ (with $l$ in dm, $c$ in g/mL).",
      "Total Number of Stereoisomers: $2^n$ for unsymmetrical molecules with $n$ chiral stereocenters.",
      "Tartaric Acid Meso Condition: $(2R, 3S)$-tartaric acid has internal mirror plane, rendering it optically inactive.",
      "Ethane Torsional Barrier: $12.5\\text{ kJ/mol}$ barrier separating staggered from eclipsed forms.",
      "n-Butane Gauche Strain: Steric repulsion between methyl groups contributes $3.8\\text{ kJ/mol}$.",
      "Cyclohexane Chair Angle: Exactly $109.5^\\circ$ tetrahedral bond angles throughout ring.",
      "1,3-Diaxial Repulsion: Equivalent to two gauche-butane interactions for axial methyl group ($7.5\\text{ kJ/mol}$).",
      "CIP Priority Rule 1: Higher atomic number takes precedence ($I > Br > Cl > S > F > O > N > C > H$).",
      "Geometric $E/Z$ Notation: $(Z)$ has priority groups on same side; $(E)$ has priority groups across double bond.",
      "Exam Scoring Tip: In Fischer projections, if lowest priority group (4) is on a horizontal bond, the apparent $(R/S)$ configuration must be reversed."
    ]
  },
  "organic chemistry:::u4": {
    "highlights": [
      "Classification of Polymerization Mechanisms: Chain-growth (addition) polymerization vs Step-growth (condensation) polymerization; Monomer functionality (bifunctional monomers form linear chains, polyfunctional monomers form 3D cross-linked networks).",
      "Free Radical Addition Polymerization: Three fundamental steps: (1) Initiation (thermal/photochemical cleavage of initiator, e.g. benzoyl peroxide or AIBN to generate primary free radicals $R^\\bullet$, followed by radical addition to monomer); (2) Propagation (rapid successive chain growth); (3) Termination (by combination $R_n^\\bullet + R_m^\\bullet \\to P_{n+m}$ or disproportionation).",
      "Kinetics of Free Radical Polymerization: Steady-state approximation for radical intermediate concentration ($R_i = R_t$); Overall rate of polymerization $R_p = k_p [M] \\sqrt{\\frac{f k_d [I]}{k_t}}$; First-order in monomer concentration and half-order in initiator concentration.",
      "Ionic Chain Polymerization: Cationic polymerization (initiated by Lewis acids $BF_3, AlCl_3$ with traces of water, carbocation propagating active center, favored by electron-rich monomers e.g. isobutylene to make butyl rubber); Anionic polymerization (initiated by organolithium bases $n-BuLi$, carbanion active center, electron-withdrawing monomers e.g. styrene, acrylonitrile).",
      "Living Polymerization & Block Copolymers: Anionic polymerization conducted in absence of impurities exhibits zero spontaneous termination or chain transfer; Chains remain active indefinitely until more monomer is added; Yields narrow molecular weight distribution ($PDI \\to 1.0$) and monodisperse block copolymers.",
      "Coordination Polymerization & Ziegler-Natta Catalysts: Stereospecific polymerization of $\\alpha$-olefins; Heterogeneous catalyst system: Titanium tetrachloride ($TiCl_4$) and Triethylaluminum ($Al(C_2H_5)_3$); Produces linear high-density polyethylene (HDPE) and strictly isotactic polypropylene (i-PP) at low pressure.",
      "Step-Growth (Condensation) Polymerization: Reaction occurs between bifunctional monomers with elimination of small condensate ($H_2O, HCl, CH_3OH$); Monomers disappear early, forming dimers, trimers, oligomers; High molecular weight achieved only at very high conversion ($p > 99\\%$).",
      "Carothers' Equation for Step Polymerization: Number-average degree of polymerization $\\bar{X}_n = \\frac{1}{1 - p}$, where $p$ is fractional extent of reaction; Gel point in polyfunctional cross-linking systems: $p_c = \\frac{2}{f_{\\text{avg}}}$, where critical conversion $p_c$ marks onset of infinite network gelation.",
      "Industrial Synthesis of Key Polymers: Nylon 6,6 (hexamethylenediamine + adipic acid), Polyethylene terephthalate (PET, ethylene glycol + dimethyl terephthalate), Bakelite (phenol + formaldehyde step condensation resin via novolac and resole intermediates), and Polyurethanes.",
      "University Examination Strategy: Derive the kinetic rate expression for free radical polymerization $R_p \\propto [M][I]^{1/2}$, derive Carothers' equation $\\bar{X}_n = 1/(1-p)$, and explain the stereospecific mechanism of Ziegler-Natta catalysis."
    ],
    "keyPoints": [
      "Carothers' Polymerization Equation: $\\bar{X}_n = \\frac{1}{1 - p}$ (where $p$ is extent of reaction).",
      "Gel Point Conversion: $p_c = \\frac{2}{f_{\\text{avg}}}$ (marks transition to insoluble cross-linked gel).",
      "Free Radical Polymerization Rate: $R_p = k_p [M] \\sqrt{\\frac{f k_d [I]}{k_t}}$.",
      "Kinetic Chain Length: $\\nu = \\frac{R_p}{R_i} = \\frac{k_p [M]}{2 \\sqrt{f k_d k_t [I]}}$.",
      "Ziegler-Natta Catalyst System: $TiCl_4 + Al(C_2H_5)_3$ (organometallic coordination complex).",
      "Ziegler-Natta Advantage: Produces unbranched isotactic polypropylene without branching.",
      "Nylon 6,6 Monomers: Hexamethylenediamine ($H_2N-(CH_2)_6-NH_2$) and Adipic acid ($HOOC-(CH_2)_4-COOH$).",
      "PET Ester Linkage: Transesterification of Dimethyl terephthalate with Ethylene glycol.",
      "Bakelite Prepolymer: Novolac (acid-catalyzed linear chain) vs Resole (base-catalyzed cross-linkable network).",
      "Exam Scoring Tip: In free radical polymerization, increasing initiator concentration raises the polymerization rate $R_p$ but decreases the average polymer molecular weight $\\bar{X}_n$."
    ]
  },
  "organic chemistry:::u5": {
    "highlights": [
      "Petrochemical Feedstocks & Steam Cracking: Thermal pyrolysis of naphtha, ethane, and propane in tubular furnaces at $750-850^\\circ\\text{C}$ in presence of steam; Produces chemical building blocks: ethylene ($C_2H_4$), propylene ($C_3H_6$), butadiene ($C_4H_6$), and BTX aromatics (benzene, toluene, xylene).",
      "Industrial Ethylene Derivatives: Ethylene oxide (heterogeneous vapor-phase catalytic oxidation over silver catalyst $Ag/Al_2O_3$: $C_2H_4 + 0.5O_2 \\to C_2H_4O$), hydration to ethylene glycol (antifreeze, polyester fiber precursor), and oxychlorination to vinyl chloride monomer ($VCM$).",
      "Vinyl Chloride Monomer (VCM) & PVC Manufacture: Balanced vinyl chloride process: Direct chlorination ($C_2H_4 + Cl_2 \\to C_2H_4Cl_2$, ethylene dichloride EDC) and Oxychlorination ($C_2H_4 + 2HCl + 0.5O_2 \\xrightarrow{CuCl_2} C_2H_4Cl_2 + H_2O$); Thermal cracking of EDC at $500^\\circ\\text{C}$ produces $VCM + HCl$; Net zero byproduct $HCl$ consumption.",
      "Industrial Propylene Chemistry: Propylene oxide manufacture (chlorohydrin process vs hydroperoxide PO/TBA or PO/SM co-product processes); Acrylonitrile synthesis via SOHIO ammoxidation: $CH_2=CH-CH_3 + NH_3 + 1.5O_2 \\xrightarrow{\\text{Bi-Mo catalyst}} CH_2=CH-CN + 3H_2O$.",
      "Cumene Process for Phenol & Acetone Synthesis: Modern universal industrial route; Friedel-Crafts alkylation of benzene with propylene to cumene (isopropylbenzene), followed by auto-oxidation with air to cumene hydroperoxide (CHP), and acid-catalyzed cleavage ($H_2SO_4$) to yield stoichiometric phenol and acetone.",
      "Methanol Synthesis & C1 Chemistry: Steam reforming of natural gas to syngas ($CO + 2H_2$); High-pressure catalytic synthesis over $CuO/ZnO/Al_2O_3$ catalyst at $250^\\circ\\text{C}$ and $50-100\\text{ bar}$: $CO + 2H_2 \\rightleftharpoons CH_3OH$; Carbonylation of methanol to acetic acid (Monsanto and Cativa iridium processes).",
      "Industrial Styrene Monomer (SM) Production: Alkylation of benzene with ethylene to ethylbenzene over zeolite catalysts, followed by high-temperature vapor-phase catalytic dehydrogenation over iron oxide catalyst: $C_6H_5-CH_2CH_3 \\rightleftharpoons C_6H_5-CH=CH_2 + H_2$; Highly endothermic, fluidized steam injection.",
      "Phthalic & Maleic Anhydride Production: Vapor-phase catalytic partial oxidation of $o$-xylene or naphthalene over vanadium pentoxide ($V_2O_5$) catalyst to phthalic anhydride; Catalytic oxidation of $n$-butane or benzene over vanadium-phosphorus-oxide (VPO) catalyst to maleic anhydride.",
      "Green Chemistry Principles in Industrial Processes: Twelve Principles of Green Chemistry (Anastas & Warner); Atom economy ($AE = \\frac{\\text{MW of desired product}}{\\sum \\text{MW of all reactants}} \\times 100\\%$); Environmental factor ($E\\text{-factor} = \\frac{\\text{Total mass of waste}}{\\text{Mass of product}}$); Replacement of stoichiometric reagents with recyclable heterogeneous catalysts.",
      "University Examination Strategy: Draw the complete flow mechanism of the balanced VCM process from ethylene and chlorine, explain the industrial Cumene process for phenol and acetone synthesis, and calculate the atom economy of a chemical synthesis."
    ],
    "keyPoints": [
      "Cumene Phenol Reaction: $C_6H_5-CH(CH_3)_2 + O_2 \\to \\text{CHP} \\xrightarrow{H^+} C_6H_5OH + CH_3COCH_3$.",
      "SOHIO Acrylonitrile Synthesis: $C_3H_6 + NH_3 + 1.5O_2 \\to CH_2=CHCN + 3H_2O$ (bismuth-molybdate catalyst).",
      "Methanol Synthesis Reaction: $CO + 2H_2 \\rightleftharpoons CH_3OH$ ($\\\\Delta H = -90.7\\text{ kJ/mol}$, $Cu/ZnO/Al_2O_3$).",
      "Balanced VCM Stoichiometry: $2C_2H_4 + Cl_2 + 0.5O_2 \\to 2CH_2=CHCl + H_2O$ (zero net $HCl$ waste).",
      "Ethylene Oxide Catalyst: Supported silver catalyst ($Ag / \\alpha-Al_2O_3$) with trace chloride promoters.",
      "Styrene Dehydrogenation: $C_6H_5-C_2H_5 \\rightleftharpoons C_6H_5-CH=CH_2 + H_2$ ($Fe_2O_3$ catalyst, endothermic).",
      "Atom Economy Formula: $AE = \\frac{\\text{Molecular Weight of Desired Product}}{\\sum \\text{Molecular Weight of All Reactants}} \\times 100\\%$.",
      "Environmental Factor: $E\\text{-factor} = \\frac{\\text{Total Mass of Waste Generated}}{\\text{Mass of Product Isolated}}$.",
      "Monsanto Acetic Acid Catalyst: Rhodium complex $[Rh(CO)_2I_2]^-$ with methyl iodide promoter.",
      "Exam Scoring Tip: The Cumene process is economically dominant worldwide because both co-products (phenol for polycarbonates/epoxies and acetone for PMMA acrylics) are high-value commercial chemicals."
    ]
  },
  "material science:::u1": {
    "highlights": [
      "Crystallographic Space Lattices: 14 Bravais lattices grouped into 7 systems; Characterized by axial lengths $a, b, c$ and angles $\\alpha, \\beta, \\gamma$; Volume of unit cell $V = a b c \\sqrt{1 - \\cos^2\\alpha - \\cos^2\\beta - \\cos^2\\gamma + 2\\cos\\alpha\\cos\\beta\\cos\\gamma}$.",
      "Atomic Packing in Metallic Lattices: Simple cubic (APF = 0.52), Body-Centered Cubic (BCC, coordination number 8, $\\text{APF} = 0.68, a = 4R/\\sqrt{3}$), and Face-Centered Cubic (FCC, coordination 12, $\\text{APF} = 0.74, a = 2R\\sqrt{2}$).",
      "Hexagonal Close-Packed Structure: HCP lattice exhibits stacking sequence $ABABAB...$ with coordination number 12 and $\\text{APF} = 0.74$; Ideal axial ratio $c/a = \\sqrt{8/3} \\approx 1.633$.",
      "Miller Indices of Planes & Directions: Directions $[uvw]$ represent smallest integer vector components; Planes $(hkl)$ represent reciprocal axial intercepts; Interplanar spacing for cubic systems $d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$.",
      "Linear and Planar Densities: Linear atomic density $LD = \\frac{N_L}{L}$; Planar atomic density $PD = \\frac{N_A}{A}$; In FCC, $[110]$ direction and $(111)$ planes have maximum atomic packing density.",
      "Bragg's Law of X-Ray Diffraction: Constructive interference condition $n\\lambda = 2d_{hkl}\\sin\\theta$; Extinction rules: BCC reflects only when $h+k+l$ is even; FCC reflects only when $h, k, l$ are all unmixed.",
      "Point Defects in Crystals: Thermal equilibrium vacancy concentration $N_v = N \\exp(-Q_v / k_B T)$; Interstitial atoms, Schottky defects (neutral cation-anion vacancy pairs), and Frenkel defects.",
      "Dislocations in Plastic Slip: Edge dislocations (Burgers vector $\\vec{b} \\perp \\vec{t}$) and screw dislocations ($\\vec{b} \\parallel \\vec{t}$); Critical resolved shear stress $\\tau_{crss} = \\sigma_y \\cos\\phi \\cos\\lambda$ (Schmid's law).",
      "Planar & Interfacial Defects: Twin boundaries, low-angle grain boundaries, stacking faults in FCC ($ABCABABC$), and high-angle grain boundaries exhibiting high interfacial energy.",
      "University Examination Strategy: State definitions of unit cell, derive APF for BCC and FCC crystals from atomic radius $R$, calculate Miller indices, and index powder diffraction peaks."
    ],
    "keyPoints": [
      "Atomic Packing Factor: $\\text{APF} = \\frac{N_{\\text{atoms}} \\cdot (4/3)\\pi R^3}{V_{\\text{cell}}}$.",
      "FCC Cell Parameter: $a = 2R\\sqrt{2}$, with $\\text{APF} = 0.74$.",
      "BCC Cell Parameter: $a = \\frac{4R}{\\sqrt{3}}$, with $\\text{APF} = 0.68$.",
      "Cubic Plane Spacing: $d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$.",
      "Bragg's Law: $n\\lambda = 2d\\sin\\theta$.",
      "BCC Reflection Rule: Reflected iff $h + k + l = 2n$ (even integer).",
      "FCC Reflection Rule: Reflected iff $h, k, l$ are all odd or all even.",
      "Schmid's Law: $\\tau_{rss} = \\sigma \\cos\\phi \\cos\\lambda$, yielding slip when $\\tau_{rss} \\ge \\tau_{crss}$.",
      "Thermal Vacancy Formula: $N_v = N e^{-Q_v / k_B T}$.",
      "Exam Scoring Tip: The Schmid factor $m = \\cos\\phi \\cos\\lambda$ reaches its theoretical maximum value of $0.5$ when $\\phi = \\lambda = 45^\\circ$."
    ]
  },
  "material science:::u2": {
    "highlights": [
      "Hume-Rothery Rules for Solid Solubility: (1) Crystal structure must match; (2) Atomic radii difference $<15\\%$; (3) Similar electronegativities; (4) Valency factor (metal dissolves solute of higher valency more readily).",
      "Substitutional vs Interstitial Solid Solutions: Substitutional (solute replaces solvent atoms in lattice, e.g. Cu-Ni); Interstitial (small solute atoms like C, N, H fit into interstitial voids of transition metals).",
      "Gibbs Phase Rule in Binary Systems: Degrees of freedom $F = C - P + 1$ at constant atmospheric pressure; Zero degrees of freedom ($F = 0$) at invariant eutectic, eutectoid, and peritectic points.",
      "Iron-Iron Carbide ($Fe-Fe_3C$) Phase Diagram: Allotropic forms: $\\alpha$-ferrite (BCC, up to $912^\\circ\\text{C}$, max $0.022\\%\\text{ C}$), $\\gamma$-austenite (FCC, $912-1394^\\circ\\text{C}$, max $2.14\\%\\text{ C}$), $\\delta$-ferrite (BCC), and cementite ($Fe_3C$, $6.67\\%\\text{ C}$).",
      "Invariant Reactions in Steel: Eutectic at $1147^\\circ\\text{C}$ ($4.3\\%\\text{ C}$, liquid to ledeburite); Eutectoid at $727^\\circ\\text{C}$ ($0.76\\%\\text{ C}$, $\\gamma \\to \\alpha + Fe_3C$ pearlite); Peritectic at $1495^\\circ\\text{C}$ ($0.17\\%\\text{ C}$).",
      "Lever Rule Phase Quantification: Mass fraction of liquid $W_L = \\frac{C_s - C_0}{C_s - C_L}$ and mass fraction of solid $W_s = \\frac{C_0 - C_L}{C_s - C_L}$ across two-phase tie-lines.",
      "Strengthening by Solid Solution: Solute atoms create local lattice strain fields (compressive or tensile) that pin dislocations, increasing yield strength $\\Delta\\sigma \\propto \\sqrt{c}$.",
      "Precipitation / Age Hardening: Quenching supersaturated solid solution followed by controlled reheating; Coherent precipitate clusters (Guinier-Preston zones) pin dislocation glide paths.",
      "Grain Boundary Strengthening (Hall-Petch): Grain boundaries act as dislocation barriers; Yield strength increases inversely with square root of grain diameter: $\\sigma_y = \\sigma_0 + k_y d^{-1/2}$.",
      "University Examination Strategy: Draw the complete $Fe-Fe_3C$ diagram with exact temperatures and compositions, apply the lever rule at $0.4\\%\\text{ C}$, and state Hume-Rothery rules."
    ],
    "keyPoints": [
      "Hume-Rothery Size Factor: $\\Delta R = \\frac{|R_{\\text{solute}} - R_{\\text{solvent}}|}{R_{\\text{solvent}}} \\times 100 < 15\\%$.",
      "Condensed Phase Rule: $F = C - P + 1$.",
      "Lever Rule Liquid Fraction: $W_L = \\frac{C_\\alpha - C_0}{C_\\alpha - C_L}$.",
      "Eutectoid Pearlite Reaction: $\\gamma(0.76\\%\\text{ C}) \\rightleftharpoons \\alpha(0.022\\%\\text{ C}) + Fe_3C(6.67\\%\\text{ C})$ at $727^\\circ\\text{C}$.",
      "Hall-Petch Equation: $\\sigma_y = \\sigma_0 + k_y d^{-1/2}$.",
      "Cementite Stoichiometry: $Fe_3C$ contains strictly $6.67\\%\\text{ C}$ by weight.",
      "Austenite Maximum Carbon: $2.14\\%\\text{ C}$ at $1147^\\circ\\text{C}$.",
      "Ferrite Maximum Carbon: $0.022\\%\\text{ C}$ at $727^\\circ\\text{C}$.",
      "Strain Hardening Index: True stress $\\sigma_t = K \\varepsilon_t^n$ where $n$ is strain hardening exponent.",
      "Exam Scoring Tip: Eutectic transforms liquid into two solids simultaneously, while eutectoid transforms one solid into two different solid phases."
    ]
  },
  "material science:::u3": {
    "highlights": [
      "Ceramic Crystal Structures: Governed by charge neutrality and radius ratio $r_{\\text{cation}}/r_{\\text{anion}}$; Rock salt ($NaCl$, octahedral CN 6), Cesium chloride ($CsCl$, cubic CN 8), Zinc blende ($ZnS$, tetrahedral CN 4), and Fluorite ($CaF_2$).",
      "Silicate Ceramic Frameworks: Basic structural unit is silica tetrahedron $[SiO_4]^{4-}$; Island silicates (orthosilicates), ring/chain silicates (pyroxenes), sheet silicates (clays, kaolinite), and 3D network silicates (quartz, feldspar).",
      "Defects in Ceramic Crystals: Schottky defects (simultaneous stoichiometric anion and cation vacancies) and Frenkel defects (cation vacancy and displaced interstitial cation); Non-stoichiometric defect structures in $Fe_{1-x}O$.",
      "Mechanical Brittleness of Ceramics: High covalent and ionic bond directional stiffness; Lack of dislocation mobility at room temperature; Theoretical tensile strength $\\sigma_{th} \\approx E/10$, but actual strength limited by Griffith microcracks.",
      "Griffith's Theory of Brittle Fracture: Fracture stress $\\sigma_f = \\sqrt{\\frac{2E\\gamma_s}{\\pi a}}$ for through-thickness crack of length $2a$, where $\\gamma_s$ is surface energy per unit area.",
      "Stress Intensity Factor & Fracture Toughness: Critical stress intensity factor $K_{IC} = Y \\sigma \\sqrt{\\pi a}$; Plane-strain fracture toughness $K_{IC}$ values: engineering ceramics ($1-5\\text{ MPa}\\sqrt{\\text{m}}$) vs structural metals ($50-150\\text{ MPa}\\sqrt{\\text{m}}$).",
      "Transformation Toughening in Zirconia ($ZrO_2$): Partially stabilized zirconia (PSZ); Metastable tetragonal precipitates transform to monoclinic phase ($t \\to m$) under crack-tip tensile stress, producing $3-5\\%$ volume dilation that clamps crack tip shut.",
      "Traditional vs Advanced Ceramics: Traditional (clay-based whiteware, porcelain, bricks, alumina refractories) vs Advanced technical ceramics ($Al_2O_3, SiC, Si_3N_4$, piezoelectric lead zirconate titanate PZT).",
      "Ceramic Processing & Sintering: Powder preparation, green body compaction (uniaxial pressing, cold isostatic pressing CIP), and elevated-temperature solid-state sintering; Solid-state diffusion reduces surface free energy and eliminates pore volume.",
      "University Examination Strategy: Calculate stable coordination numbers from radius ratio $r_c/r_a$, derive Griffith's fracture stress formula, and explain transformation toughening in partially stabilized zirconia."
    ],
    "keyPoints": [
      "Octahedral Coordination Bound: $0.414 \\le r_{\\text{cation}} / r_{\\text{anion}} < 0.732$ (e.g. $NaCl$).",
      "Cubic Coordination Bound: $0.732 \\le r_{\\text{cation}} / r_{\\text{anion}} < 1.0$ (e.g. $CsCl$).",
      "Tetrahedral Coordination Bound: $0.225 \\le r_{\\text{cation}} / r_{\\text{anion}} < 0.414$ (e.g. $ZnS$).",
      "Griffith's Fracture Formula: $\\sigma_f = \\sqrt{\\frac{2E\\gamma_s}{\\pi a}}$.",
      "Fracture Toughness Equation: $K_{IC} = Y \\sigma_f \\sqrt{\\pi a}$.",
      "Silica Tetrahedral Anion: $[SiO_4]^{4-}$ with silicon in tetrahedral coordination.",
      "Schottky Defect Definition: Pair of cation and anion vacancies preserving electroneutrality.",
      "Frenkel Defect Definition: Cation vacancy paired with nearby interstitial cation.",
      "Zirconia Volume Expansion: $t \\to m$ martensitic transformation causes $3-5\\%$ volumetric expansion.",
      "Exam Scoring Tip: When evaluating radius ratio, always place the smaller cation radius in the numerator ($r_{\\text{cation}} / r_{\\text{anion}}$)."
    ]
  },
  "material science:::u4": {
    "highlights": [
      "Polymerization Chemistry: Addition (chain-growth) polymerization (initiation, propagation, termination without by-products, e.g. polyethylene) vs Condensation (step-growth) polymerization (eliminates small molecules like $H_2O, HCl$, e.g. Nylon, PET).",
      "Molecular Weight Distributions: Number-average molecular weight $\\bar{M}_n = \\sum x_i M_i = \\frac{\\sum N_i M_i}{\\sum N_i}$; Weight-average molecular weight $\\bar{M}_w = \\sum w_i M_i = \\frac{\\sum N_i M_i^2}{\\sum N_i M_i}$; Degree of polymerization $DP = \\bar{M}_n / m_0$.",
      "Polydispersity Index (PDI): Ratio $PDI = \\bar{M}_w / \\bar{M}_n \\ge 1.0$; $PDI = 1.0$ indicates monodisperse polymer (e.g. natural proteins), while synthetic polymers exhibit $PDI \\approx 1.5 - 5.0$.",
      "Polymer Architecture & Tacticity: Linear chains (high density HDPE), branched chains (low density LDPE), cross-linked networks (elastomers), and 3D network polymers (epoxies); Tacticity: isotactic (all pendants on one side), syndiotactic (alternating), atactic (random).",
      "Thermoplastics vs Thermosetting Polymers: Thermoplastics (linear/branched, secondary van der Waals intermolecular bonds, soften reversibly with heat, recyclable) vs Thermosets (covalently cross-linked networks, degrade irreversibly, rigid).",
      "Glass Transition Temperature ($T_g$): Reversible transition between hard, brittle glassy state and soft, flexible rubbery state; Free volume theory; $T_g$ increased by bulky side groups, polar interactions, and high chain cross-linking.",
      "Viscoelasticity in Polymers: Time-dependent strain response exhibiting both viscous fluid and elastic solid behavior; Maxwell model (spring and dashpot in series, stress relaxation $\\sigma(t) = \\sigma_0 e^{-t/\\tau}$) vs Kelvin-Voigt model (spring and dashpot in parallel, creep $\\varepsilon(t) = \\frac{\\sigma_0}{E}(1 - e^{-t/\\tau})$).",
      "Mechanical Properties of Polymers: S-shaped stress-strain curves; Elastic modulus ($0.1-4\\text{ GPa}$), cold drawing, neck propagation, and strain-induced chain alignment; Crazing phenomenon prior to brittle fracture.",
      "Elastomers & Rubber Elasticity: Cross-linked coiled chains; Low initial modulus, high recoverable stretch ($>500\\%$); Elastic retractive force is entropic in origin: $f = -T (\\partial S / \\partial L)_T$; Vulcanization with sulfur cross-links.",
      "University Examination Strategy: Differentiate addition vs condensation polymerization, derive Maxwell and Voigt viscoelastic differential equations, and calculate $\\bar{M}_n, \\bar{M}_w$, and $PDI$."
    ],
    "keyPoints": [
      "Number-Average Weight: $\\bar{M}_n = \\frac{\\sum N_i M_i}{\\sum N_i}$.",
      "Weight-Average Weight: $\\bar{M}_w = \\frac{\\sum N_i M_i^2}{\\sum N_i M_i}$.",
      "Polydispersity Index: $PDI = \\frac{\\bar{M}_w}{\\bar{M}_n} \\ge 1$.",
      "Degree of Polymerization: $DP = \\frac{\\bar{M}_n}{m_0}$ ($m_0$ is monomer molecular weight).",
      "Maxwell Stress Relaxation: $\\sigma(t) = \\sigma_0 \\exp(-t / \\tau)$, where relaxation time $\\tau = \\eta / E$.",
      "Voigt Creep Strain: $\\varepsilon(t) = \\frac{\\sigma_0}{E} [1 - \\exp(-t / \\tau)]$, where retardation time $\\tau = \\eta / E$.",
      "Entropic Rubber Force: $f = -T \\left(\\frac{\\partial S}{\\partial L}\\right)_T = C T \\left(\\lambda - \\frac{1}{\\lambda^2}\\right)$.",
      "Isotactic Configuration: All substituent groups oriented on the identical side of the polymer backbone.",
      "Glass Transition Marker: Step change in specific heat $C_p$ and thermal expansion coefficient $\\alpha$ at $T_g$.",
      "Exam Scoring Tip: For all polydisperse polymers, $\\bar{M}_w$ is strictly greater than $\\bar{M}_n$ because heavier chains contribute proportionally more to weight fractions."
    ]
  },
  "material science:::u5": {
    "highlights": [
      "Classification of Composite Materials: Continuous fiber-reinforced, short/chopped fiber, particulate composites, and laminar structural composites; Matrix categories: Polymer Matrix (PMC), Metal Matrix (MMC), Ceramic Matrix (CMC), and Carbon-Carbon composites.",
      "Reinforcement Fibers & Properties: Carbon fibers (high modulus PAN-based and pitch-based), E-glass and S-glass fibers (high strength, low cost), Aramid / Kevlar fibers (high toughness and impact absorption), and Boron monofilaments.",
      "Rule of Mixtures for Longitudinal Modulus: Iso-strain condition ($\\\\varepsilon_c = \\\\varepsilon_f = \\\\varepsilon_m$); Longitudinal composite elastic modulus $E_{cl} = E_f V_f + E_m V_m$, where $V_f + V_m = 1$.",
      "Inverse Rule of Mixtures for Transverse Modulus: Iso-stress condition ($\\\\sigma_c = \\\\sigma_f = \\\\sigma_m$); Transverse modulus $\\frac{1}{E_{ct}} = \\frac{V_f}{E_f} + \\frac{V_m}{E_m} \\implies E_{ct} = \\frac{E_f E_m}{V_f E_m + V_m E_f}$.",
      "Critical Fiber Length ($l_c$): Minimum fiber length required for fiber to attain its ultimate tensile strength $\\sigma_f^*$ under interfacial shear stress $\\tau_c$: $l_c = \\frac{\\sigma_f^* d}{2\\tau_c}$; Fibers with $l > 15 l_c$ act as continuous fibers.",
      "Stress Transfer at Fiber-Matrix Interface: Shear-lag model (Cox model); Tensile stress builds up from zero at fiber ends to peak at center; Interfacial shear stress $\\tau$ peaks at fiber tips and decays toward center.",
      "Manufacturing Methods for Polymer Composites: Hand lay-up, spray lay-up, vacuum bag autocalve molding, resin transfer molding (RTM), filament winding (for pressure vessels and pipes), and pultrusion (constant cross-section profiles).",
      "Ceramic Matrix Composites (CMC): Designed to enhance fracture toughness rather than strength; Crack deflection, fiber debonding, and fiber pull-out dissipate mechanical energy, increasing $K_{IC}$ up to $25\\text{ MPa}\\sqrt{\\text{m}}$.",
      "Laminated Composites & Laminate Theory: Symmetrical and balanced cross-ply ($[0/90]_s$) and quasi-isotropic ($[0/\\pm 45/90]_s$) layups; Eliminates coupling between in-plane stretching and out-of-plane bending/twisting.",
      "University Examination Strategy: Derive the longitudinal and transverse Rule of Mixtures expressions from first principles, derive the critical fiber length formula $l_c = \\frac{\\sigma_f^* d}{2\\tau_c}$, and classify composites by matrix."
    ],
    "keyPoints": [
      "Longitudinal Modulus (Iso-Strain): $E_{cl} = E_f V_f + E_m V_m$.",
      "Transverse Modulus (Iso-Stress): $E_{ct} = \\frac{E_f E_m}{V_f E_m + V_m E_f}$.",
      "Critical Fiber Length: $l_c = \\frac{\\sigma_f^* d}{2\\tau_c}$.",
      "Fiber Volume Fraction: $V_f = \\frac{v_f}{v_f + v_m} = \\frac{w_f / \\rho_f}{w_f / \\rho_f + w_m / \\rho_m}$.",
      "Continuous Fiber Criterion: Fiber length $l \\ge 15 l_c$.",
      "Longitudinal Composite Tensile Strength: $\\sigma_{cu}^* = \\sigma_f^* V_f + \\sigma_m' (1 - V_f)$ (where $\\sigma_m'$ is matrix stress at fiber failure strain).",
      "Filament Winding Angle: Optimum hoop-to-axial pressure vessel winding angle $\\alpha = \\arctan(\\sqrt{2}) \\approx 54.7^\\circ$.",
      "Quasi-Isotropic Layup: Equal elastic properties in all in-plane directions (e.g. $[0/\\pm 45/90]_s$).",
      "PMC Matrix Systems: Epoxies (aerospace high-performance), Polyesters (marine/automotive commercial), and Bismaleimides (high temperature).",
      "Exam Scoring Tip: The longitudinal modulus is always dominated by the high fiber modulus ($E_{cl} \\approx E_f V_f$), whereas transverse modulus is dominated by the compliant matrix."
    ]
  },
  "numerical methods:::u1": {
    "highlights": [
      "Numbers and Floating-Point Representation: Real numbers stored in normalized floating-point form $x = \\pm (0.d_1 d_2 \\dots d_t) \\times \\beta^e$ in base $\\beta$ with $t$ mantissa digits; IEEE 754 standard for single (32-bit, 24-bit mantissa) and double precision (64-bit, 53-bit mantissa).",
      "Absolute, Relative, and Percentage Errors: Exact value $x$ and approximation $x^*$: Absolute error $E_a = |x - x^*|$; Relative error $E_r = \\frac{|x - x^*|}{|x|}$; Percentage error $E_p = E_r \\times 100\\%$; Number of significant digits determined by $E_r < \\frac{1}{2} \\times 10^{-k}$.",
      "Sources of Numerical Errors: (1) Inherent/Input errors in physical measurement; (2) Truncation errors arising from truncating infinite mathematical series to finite terms; (3) Round-off errors caused by finite word-length machine registers; Chopping vs rounding arithmetic.",
      "Taylor Series and Truncation Error: Function expansion $f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(x_0)}{k!} (x - x_0)^k + R_n(x)$; Lagrange remainder term $R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} (x - x_0)^{n+1}$ defining exact truncation error bound of order $O(h^{n+1})$.",
      "Propagation of Errors in Arithmetic Operations: Addition/Subtraction: $E_a(x \\pm y) \\approx E_a(x) + E_a(y)$; Multiplication: $E_r(x \\cdot y) \\approx E_r(x) + E_r(y)$; Division: $E_r(x / y) \\approx E_r(x) + E_r(y)$; Power: $E_r(x^n) \\approx n E_r(x)$.",
      "Catastrophic Cancellation & Loss of Significance: Subtraction of two nearly equal floating-point numbers ($x - y$) causes dramatic loss of significant digits; Remedied algebraically via rationalization (e.g., $\\sqrt{x+1} - \\sqrt{x} = \\frac{1}{\\sqrt{x+1} + \\sqrt{x}}$) or Taylor expansions.",
      "General Error Formula for Multivariable Functions: For $u = f(x_1, x_2, \\dots, x_n)$, maximum absolute error is $E_a(u) = \\sum_{i=1}^n \\left| \\frac{\\partial f}{\\partial x_i} \\right| E_a(x_i)$; Relative error $E_r(u) = \\sum_{i=1}^n \\left| \\frac{x_i}{f} \\frac{\\partial f}{\\partial x_i} \\right| E_r(x_i)$.",
      "Conditioning and Stability: Condition number of problem measures sensitivity of output to small perturbations in input: $\\text{cond}(f) = \\frac{|x f'(x)|}{|f(x)|}$; Ill-conditioned problems ($\\text{cond} \\gg 1$) produce unreliable outputs regardless of numerical algorithm; Algorithmic numerical stability ensures errors do not amplify across successive steps.",
      "Computer Arithmetic Hazards: Underflow (numbers smaller than machine minimum flushed to zero) and Overflow (numbers exceeding maximum causing execution halt or NaN/Inf); Machine epsilon $\\epsilon_{mach} = \\beta^{1-t}$ representing distance between $1.0$ and next representable float.",
      "University Examination Strategy: Calculate absolute, relative, and percentage errors for mathematical constants, prove significant digits conditions, apply general error propagation formulas to geometric shapes (volume of spheres, resistance formulas), and rewrite algebraic expressions to prevent catastrophic loss of significance."
    ],
    "keyPoints": [
      "Absolute Error: $E_a = |x - x^*|$.",
      "Relative Error: $E_r = \\frac{|x - x^*|}{|x|}$.",
      "Percentage Error: $E_p = \\frac{|x - x^*|}{|x|} \\times 100\\%$.",
      "Significant Digits Rule: $E_r < \\frac{1}{2} \\times 10^{-k}$ guarantees $k$ significant digits.",
      "Taylor Remainder Error: $R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} h^{n+1} = O(h^{n+1})$.",
      "Error Propagation in Product: $E_r(x y) \\approx E_r(x) + E_r(y)$.",
      "General Multivariable Error: $E_a(u) = \\sum \\left| \\frac{\\partial f}{\\partial x_i} \\right| E_a(x_i)$.",
      "Problem Condition Number: $\\text{cond}(f) = \\left| \\frac{x f'(x)}{f(x)} \\right|$.",
      "Machine Epsilon: $\\epsilon_{mach} = \\beta^{1-t}$ ($2^{-23}$ single, $2^{-52}$ double).",
      "Exam Gold Tip: In multi-variable error propagation $u = x^a y^b / z^c$, the relative error is simply $E_r(u) = |a| E_r(x) + |b| E_r(y) + |c| E_r(z)$, evaluated using absolute values of powers."
    ]
  },
  "numerical methods:::u2": {
    "highlights": [
      "Bisection Method (Bolzano's Method): Bracketing method based on Intermediate Value Theorem: if $f(a) \\cdot f(b) < 0$, root exists in $[a, b]$; Midpoint approximation $c = \\frac{a+b}{2}$; Guaranteed linear convergence with rate $\\frac{1}{2}$; Number of iterations required for tolerance $\\epsilon$: $n \\ge \\frac{\\log(b-a) - \\log\\epsilon}{\\log 2}$.",
      "Regula Falsi Method (False Position Method): Interpolates endpoints with secant line connecting $(a, f(a))$ and $(b, f(b))$; Next root estimate $c = \\frac{a f(b) - b f(a)}{f(b) - f(a)}$; Guarantees convergence like bisection while utilizing function values, though convergence remains linear and one endpoint can become stagnant.",
      "Fixed-Point Iteration Method: Rewriting algebraic equation $f(x) = 0$ into equivalent fixed-point form $x = g(x)$; Iteration scheme $x_{n+1} = g(x_n)$; Banach Fixed-Point Theorem: convergence to unique fixed point $\\alpha$ guaranteed if $|g'(x)| \\le k < 1$ for all $x$ in neighborhood of $\\alpha$; Convergence is linear.",
      "Newton-Raphson Method: Open method derived from linear Taylor expansion: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$; Geometrically represents tangent line intersection with x-axis; Requires single initial guess $x_0$; Fails when derivative vanishes $f'(x_n) \\approx 0$ or exhibits cycle oscillations.",
      "Order of Convergence of Newton-Raphson: Quadratic convergence (order $p = 2$); Error recurrence: $\\epsilon_{n+1} \\approx \\frac{f''(\\alpha)}{2 f'(\\alpha)} \\epsilon_n^2$; Number of accurate significant decimal digits roughly doubles with every single iteration near simple root $\\alpha$.",
      "Modified Newton-Raphson for Multiple Roots: For root of multiplicity $m > 1$ where $f(\\alpha) = f'(\\alpha) = \\dots = f^{(m-1)}(\\alpha) = 0$: standard N-R degrades to linear convergence; Modified scheme $x_{n+1} = x_n - m \\frac{f(x_n)}{f'(x_n)}$ restores quadratic convergence; Alternatively use $u(x) = \\frac{f(x)}{f'(x)}$.",
      "Secant Method: Quasi-Newton technique replacing analytic derivative with finite difference quotient: $x_{n+1} = x_n - f(x_n) \\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$; Requires two initial guesses but no derivative calculations; Superlinear order of convergence equal to golden ratio $p = \\frac{1+\\sqrt{5}}{2} \\approx 1.618$.",
      "Müller's Method for Complex Roots: Generalization of secant method that passes parabola through three consecutive points $(x_0, f_0), (x_1, f_1), (x_2, f_2)$; Intersects quadratic curve with x-axis using quadratic formula; Successfully locates real and complex roots of polynomials; Order of convergence $p \\approx 1.84$.",
      "Graeffe's Root-Squaring Method: Direct method for polynomial roots $P_n(x) = 0$ that squares roots repeatedly: $P(x) P(-x) = Q(x^2)$; After $k$ squarings, roots are separated by orders of magnitude, allowing magnitude estimation directly from polynomial coefficients without initial guesses.",
      "University Examination Strategy: Perform 3 to 4 iterations of Bisection and Regula Falsi methods to isolate roots to 3 decimal places, test $|g'(x)| < 1$ condition for fixed-point convergence, derive the quadratic order of convergence $\\epsilon_{n+1} \\propto \\epsilon_n^2$ for Newton-Raphson, and solve polynomial roots using Secant method."
    ],
    "keyPoints": [
      "Bisection Iteration Count: $n \\ge \\frac{\\log(b-a) - \\log\\epsilon}{\\log 2}$.",
      "Regula Falsi Formula: $c = \\frac{a f(b) - b f(a)}{f(b) - f(a)}$.",
      "Fixed-Point Convergence Condition: $|g'(x)| \\le k < 1$.",
      "Newton-Raphson Iteration: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$.",
      "Newton-Raphson Error Recurrence: $\\epsilon_{n+1} = \\frac{f''(\\alpha)}{2 f'(\\alpha)} \\epsilon_n^2$ (order 2).",
      "Secant Method Iteration: $x_{n+1} = x_n - f(x_n) \\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$.",
      "Secant Order of Convergence: $p = \\frac{1+\\sqrt{5}}{2} \\approx 1.618$.",
      "Modified N-R for Multiple Root $m$: $x_{n+1} = x_n - m \\frac{f(x_n)}{f'(x_n)}$.",
      "Newton-Raphson Reciprocal Algorithm: $x_{n+1} = x_n(2 - N x_n)$ for finding $1/N$ without division.",
      "Exam Gold Tip: To compute square root $\\sqrt{N}$ using Newton-Raphson, set $f(x) = x^2 - N = 0$, yielding the classic Babylonian iteration $x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{N}{x_n}\\right)$ with quadratic convergence."
    ]
  },
  "numerical methods:::u3": {
    "highlights": [
      "Formulation of Linear Systems: Matrix equation $A x = b$ where $A \\in \\mathbb{R}^{n \\times n}$, $x, b \\in \\mathbb{R}^n$; Existence and uniqueness governed by Rouché-Capelli theorem: system consistent iff $\\text{rank}(A) = \\text{rank}([A|b])$; Unique solution if $\\text{rank}(A) = n$, infinite solutions if $\\text{rank} < n$.",
      "Gaussian Elimination with Partial Pivoting: Forward elimination reduces augmented matrix $[A|b]$ to upper triangular form $U x = y$, followed by back-substitution; Partial pivoting swaps rows at step $k$ to locate pivot with maximum absolute magnitude $|a_{ik}| = \\max_{j \\ge k} |a_{jk}|$, suppressing round-off error propagation.",
      "Gauss-Jordan Elimination: Eliminates both lower and upper triangular coefficients simultaneously, transforming augmented matrix directly into $[I | A^{-1} b]$; Computes matrix inverse $A^{-1}$ by augmenting $A$ with identity matrix $[A | I] \\to [I | A^{-1}]$; Computational complexity $\\frac{n^3}{2}$ vs $\\frac{n^3}{3}$ for Gaussian elimination.",
      "LU Decomposition (Doolittle's and Crout's Methods): Factorization $A = L U$; Doolittle's algorithm specifies unit lower triangular matrix ($l_{ii} = 1$); Crout's algorithm specifies unit upper triangular matrix ($u_{ii} = 1$); Solves system in two $O(n^2)$ triangular sweeps: forward solve $L y = b$ and back solve $U x = y$.",
      "Cholesky Decomposition: Factorization for symmetric and positive-definite matrices ($A = A^T, x^T A x > 0$): $A = L L^T$ where $L$ is a real lower triangular matrix with strictly positive diagonal elements $l_{ii} = \\sqrt{a_{ii} - \\sum_{k=1}^{i-1} l_{ik}^2}$; Requires half the floating-point operations ($n^3/6$) and is unconditionally stable without pivoting.",
      "Thomas Algorithm for Tridiagonal Systems: Specialized Gaussian elimination for band matrices where non-zero entries exist only on main diagonal $b_i$, superdiagonal $c_i$, and subdiagonal $a_i$; Executes in optimal $O(n)$ time complexity and memory, essential in 1D heat equation finite difference modeling.",
      "Gauss-Jacobi Iterative Method: Decoupled iteration solving each equation for diagonal variable: $x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j \\ne i} a_{ij} x_j^{(k)} \\right)$; Requires storing full previous iteration vector; Strictly converges if coefficient matrix $A$ is strictly diagonally dominant: $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$.",
      "Gauss-Seidel Iterative Method: Successive replacement iteration using newly computed components immediately within the same iteration: $x_i^{(k+1)} = \\frac{1}{a_{ii}} \\left( b_i - \\sum_{j < i} a_{ij} x_j^{(k+1)} - \\sum_{j > i} a_{ij} x_j^{(k)} \\right)$; Converges roughly twice as fast as Jacobi method for diagonally dominant or symmetric positive-definite matrices.",
      "Power Method for Dominant Eigenvalue: Iterative algorithm computing dominant eigenvalue $\\lambda_1$ (largest magnitude) and corresponding eigenvector: $y_{k+1} = A x_k$, $\\lambda^{(k+1)} = \\max(y_{k+1})$, $x_{k+1} = y_{k+1} / \\lambda^{(k+1)}$; Rate of convergence governed by ratio $|\\lambda_2 / \\lambda_1|$; Inverse Power Method applied to $(A - q I)^{-1}$ finds eigenvalue nearest to shift $q$.",
      "University Examination Strategy: Solve $3 \\times 3$ linear systems using Gaussian elimination with partial pivoting, compute LU decomposition using Doolittle's method, solve symmetric systems via Cholesky method, execute 3 iterations of Gauss-Seidel method verifying diagonal dominance, and estimate dominant eigenvalue using Power method."
    ],
    "keyPoints": [
      "Doolittle's LU Factorization: $A = L U$ ($l_{ii} = 1$, unit lower).",
      "Crout's LU Factorization: $A = L U$ ($u_{ii} = 1$, unit upper).",
      "Cholesky Factorization: $A = L L^T$ ($A = A^T$, positive definite).",
      "Cholesky Diagonal Term: $l_{ii} = \\sqrt{a_{ii} - \\sum_{k=1}^{i-1} l_{ik}^2}$.",
      "Strict Diagonal Dominance: $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i$.",
      "Gauss-Jacobi Update: $x_i^{(k+1)} = \\frac{1}{a_{ii}} (b_i - \\sum_{j \\ne i} a_{ij} x_j^{(k)})$.",
      "Gauss-Seidel Update: $x_i^{(k+1)} = \\frac{1}{a_{ii}} (b_i - \\sum_{j < i} a_{ij} x_j^{(k+1)} - \\sum_{j > i} a_{ij} x_j^{(k)})$.",
      "Thomas Tridiagonal Complexity: $O(n)$ operations vs $O(n^3)$ general.",
      "Power Method Iteration: $x_{k+1} = \\frac{A x_k}{\\|A x_k\\|}$ ($\\|x\\|_\\infty$ normalization).",
      "Exam Gold Tip: If coefficient matrix $A$ is not diagonally dominant, interchange rows to ensure largest absolute elements lie along main diagonal before applying Gauss-Seidel iteration to guarantee rapid convergence."
    ]
  },
  "numerical methods:::u4": {
    "highlights": [
      "Finite Difference Calculus: Forward difference operator $\\Delta f_i = f_{i+1} - f_i$; Backward difference $\\nabla f_i = f_i - f_{i-1}$; Shift operator $E f_i = f_{i+1}$; Central difference $\\delta f_i = f_{i+1/2} - f_{i-1/2}$; Operator relations: $E = 1 + \\Delta = (1 - \\nabla)^{-1} = e^{h D}$ where $D = \\frac{d}{dx}$.",
      "Newton-Gregory Forward Difference Interpolation: For equispaced nodes $x_i = x_0 + i h$ with $u = \\frac{x - x_0}{h}$: $P_n(x) = y_0 + u \\Delta y_0 + \\frac{u(u-1)}{2!} \\Delta^2 y_0 + \\dots + \\frac{u(u-1)\\dots(u-n+1)}{n!} \\Delta^n y_0$; Ideal for interpolation near start of data table.",
      "Newton-Gregory Backward Difference Interpolation: For points near end of equispaced table with $v = \\frac{x - x_n}{h}$: $P_n(x) = y_n + v \\nabla y_n + \\frac{v(v+1)}{2!} \\nabla^2 y_n + \\dots + \\frac{v(v+1)\\dots(v+n-1)}{n!} \\nabla^n y_n$.",
      "Central Difference Interpolation Formulas: Stirling's formula (mean of Gauss forward and backward formulas) for points near table center ($-\\frac{1}{2} \\le u \\le \\frac{1}{2}$); Bessel's formula (ideal for $\\frac{1}{4} \\le u \\le \\frac{3}{4}$); Both provide superior accuracy by minimizing truncation error coefficients.",
      "Divided Differences for Unequally Spaced Nodes: Divided difference table $f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$; Higher orders: $f[x_0, \\dots, x_k] = \\frac{f[x_1, \\dots, x_k] - f[x_0, \\dots, x_{k-1}]}{x_k - x_0}$; Newton's Divided Difference polynomial: $P_n(x) = f(x_0) + (x-x_0)f[x_0, x_1] + \\dots + (x-x_0)\\dots(x-x_{n-1})f[x_0, \\dots, x_n]$.",
      "Newton-Cotes Closed Quadrature Formulas: Numerical integration $\\int_a^b f(x) dx \\approx \\sum_{i=0}^n w_i f(x_i)$ by integrating $n$-th degree interpolating polynomial over equispaced nodes $h = \\frac{b-a}{n}$; Includes Trapezoidal rule ($n=1$), Simpson's 1/3rd ($n=2$), and Simpson's 3/8th ($n=3$).",
      "Simpson's 3/8th Rule: Fitting cubic polynomial over three intervals ($n=3, 6, 9, \\dots$): $\\int_a^b f(x) dx \\approx \\frac{3h}{8} [f_0 + 3 f_1 + 3 f_2 + 2 f_3 + 3 f_4 + 3 f_5 + 2 f_6 + \\dots + f_n]$; Truncation error $E_T = -\\frac{3}{80} h^5 f^{(4)}(\\xi) = -\\frac{(b-a) h^4}{80} f^{(4)}(\\xi)$.",
      "Boole's Rule and Weddle's Rule: Boole's 5-point rule ($n=4$): $\\int_{x_0}^{x_4} f(x) dx \\approx \\frac{2h}{45} [7 f_0 + 32 f_1 + 12 f_2 + 32 f_3 + 7 f_4]$; Weddle's 7-point rule ($n=6$): $\\int_{x_0}^{x_6} f(x) dx \\approx \\frac{3h}{10} [f_0 + 5 f_1 + f_2 + 6 f_3 + f_4 + 5 f_5 + f_6]$ with truncation error $O(h^6)$.",
      "Romberg Integration and Richardson Extrapolation: Accelerating Trapezoidal approximations $T(h)$ and $T(h/2)$: Extrapolation formula $R_{k,j} = \\frac{4^j R_{k, j-1} - R_{k-1, j-1}}{4^j - 1}$; Eliminates successive higher-order terms ($h^2, h^4, h^6$) from Euler-Maclaurin expansion to obtain high-precision integrals with minimal function evaluations.",
      "University Examination Strategy: Construct forward/backward difference tables and interpolate values, formulate divided difference polynomials for unequally spaced points, apply Simpson's $1/3$rd and $3/8$th rules to evaluate definite integrals, and compute accelerated integral tables using Romberg integration."
    ],
    "keyPoints": [
      "Shift and Difference Operator Relation: $E = 1 + \\Delta = e^{h D}$.",
      "Newton Forward Interpolation: $P(x) = y_0 + u \\Delta y_0 + \\frac{u(u-1)}{2!} \\Delta^2 y_0 + \\dots$.",
      "Newton Backward Interpolation: $P(x) = y_n + v \\nabla y_n + \\frac{v(v+1)}{2!} \\nabla^2 y_n + \\dots$.",
      "Newton Divided Difference: $f[x_0, x_1] = \\frac{f(x_1) - f(x_0)}{x_1 - x_0}$.",
      "Trapezoidal Rule Error: $E_T = -\\frac{(b-a) h^2}{12} f''(\\xi) = O(h^2)$.",
      "Simpson's 1/3rd Rule Error: $E_S = -\\frac{(b-a) h^4}{180} f^{(4)}(\\xi) = O(h^4)$.",
      "Simpson's 3/8th Formula: $\\int_a^b f(x) dx \\approx \\frac{3h}{8} [f_0 + 3\\sum f_{not\\,div\\,3} + 2\\sum f_{div\\,3} + f_n]$.",
      "Weddle's Rule Weight Multipliers: $\\frac{3h}{10} [1, 5, 1, 6, 1, 5, 1]$.",
      "Richardson Extrapolation: $I \\approx \\frac{4 T(h/2) - T(h)}{3}$ (eliminates $O(h^2)$ error).",
      "Exam Gold Tip: Simpson's 3/8th rule requires the total number of subintervals $n$ to be a multiple of 3, whereas Simpson's 1/3rd rule requires $n$ to be even (multiple of 2)."
    ]
  },
  "numerical methods:::u5": {
    "highlights": [
      "Initial Value Problems for First-Order ODEs: Differential equation $\\frac{dy}{dx} = f(x, y)$ subject to initial condition $y(x_0) = y_0$; Picard's existence and uniqueness theorem: unique solution exists in domain if $f(x,y)$ satisfies Lipschitz condition $|f(x, y_1) - f(x, y_2)| \\le L |y_1 - y_2|$.",
      "Taylor Series Method: Direct series expansion $y(x_{n+1}) = y_n + h y'_n + \\frac{h^2}{2!} y''_n + \\frac{h^3}{3!} y'''_n + \\dots$; Successive derivatives evaluated analytically: $y' = f(x,y)$, $y'' = f_x + f f_y$; Highly accurate but computationally tedious for complex non-linear functions.",
      "Picard's Method of Successive Approximations: Integral formulation $y(x) = y_0 + \\int_{x_0}^x f(t, y(t)) dt$; Iteration scheme: $y^{(k+1)}(x) = y_0 + \\int_{x_0}^x f(t, y^{(k)}(t)) dt$ initialized with $y^{(0)}(x) = y_0$; Yields analytical polynomial approximations.",
      "Euler's and Modified Euler's Methods: Standard Euler (Explicit): $y_{n+1} = y_n + h f(x_n, y_n)$ with local error $O(h^2)$ and global error $O(h)$; Modified Euler (Heun's Predictor-Corrector): Predictor $y_{n+1}^{(p)} = y_n + h f(x_n, y_n)$, Corrector $y_{n+1} = y_n + \\frac{h}{2} [f(x_n, y_n) + f(x_{n+1}, y_{n+1}^{(p)})]$ with global error $O(h^2)$.",
      "Runge-Kutta Second-Order (RK2) Methods: General formulation $y_{n+1} = y_n + h (w_1 k_1 + w_2 k_2)$ matching Taylor series up to $h^2$; Includes Heun's method ($w_1 = w_2 = 1/2$), Midpoint method ($w_1 = 0, w_2 = 1$), and Ralston's method ($w_1 = 1/3, w_2 = 2/3$ minimizing truncation error).",
      "Runge-Kutta Fourth-Order (RK4) Method: Industry benchmark single-step method: $y_{n+1} = y_n + \\frac{h}{6} (k_1 + 2 k_2 + 2 k_3 + k_4)$ where $k_1 = f(x_n, y_n)$, $k_2 = f(x_n + \\frac{h}{2}, y_n + \\frac{h}{2} k_1)$, $k_3 = f(x_n + \\frac{h}{2}, y_n + \\frac{h}{2} k_2)$, and $k_4 = f(x_n + h, y_n + h k_3)$; Local truncation error $O(h^5)$, global error $O(h^4)$.",
      "Milne-Simpson Predictor-Corrector Method: Multi-step method requiring 4 prior starting values $(y_0, y_1, y_2, y_3)$ generated via RK4; Milne Predictor: $y_{n+1}^{(p)} = y_{n-3} + \\frac{4h}{3} [2 f_n - f_{n-1} + 2 f_{n-2}]$; Simpson Corrector: $y_{n+1}^{(c)} = y_{n-1} + \\frac{h}{3} [f_{n+1}^{(p)} + 4 f_n + f_{n-1}]$; Truncation error $O(h^5)$.",
      "Adams-Bashforth-Moulton Multi-Step Method: 4th-order Adams-Bashforth Predictor: $y_{n+1}^{(p)} = y_n + \\frac{h}{24} [55 f_n - 59 f_{n-1} + 37 f_{n-2} - 9 f_{n-3}]$; Adams-Moulton Corrector: $y_{n+1}^{(c)} = y_n + \\frac{h}{24} [9 f_{n+1}^{(p)} + 19 f_n - 5 f_{n-1} + f_{n-2}]$; Exhibits superior numerical stability compared to Milne's method.",
      "Higher-Order ODEs and Systems of First-Order ODEs: Second-order ODE $\\frac{d^2 y}{dx^2} = g(x, y, y')$ converted to equivalent system of two first-order ODEs: $\\frac{dy}{dx} = z$ and $\\frac{dz}{dx} = g(x, y, z)$; Solved concurrently using vector RK4 stepping.",
      "University Examination Strategy: Solve initial value problems up to 3 terms using Taylor series and Picard's method, execute 2 step iterations of Modified Euler, perform detailed RK4 calculations identifying individual $k_1, k_2, k_3, k_4$ slope values, and apply Milne's predictor-corrector formulas."
    ],
    "keyPoints": [
      "Picard Successive Approximation: $y^{(k+1)}(x) = y_0 + \\int_{x_0}^x f(t, y^{(k)}(t)) dt$.",
      "Euler's Forward Method: $y_{n+1} = y_n + h f(x_n, y_n)$ (global error $O(h)$).",
      "Modified Euler (Heun's) Formula: $y_{n+1} = y_n + \\frac{h}{2}[f_n + f(x_{n+1}, y_n + h f_n)]$.",
      "RK4 Weighted Step Formula: $y_{n+1} = y_n + \\frac{h}{6}(k_1 + 2 k_2 + 2 k_3 + k_4)$.",
      "RK4 Slope Components: $k_1=f_n, k_2=f(x_n+\\frac{h}{2}, y_n+\\frac{h}{2}k_1), k_3=f(x_n+\\frac{h}{2}, y_n+\\frac{h}{2}k_2), k_4=f(x_n+h, y_n+h k_3)$.",
      "Milne Predictor: $y_{n+1}^{(p)} = y_{n-3} + \\frac{4h}{3}[2 f_n - f_{n-1} + 2 f_{n-2}]$.",
      "Milne Corrector: $y_{n+1}^{(c)} = y_{n-1} + \\frac{h}{3}[f_{n+1} + 4 f_n + f_{n-1}]$.",
      "Adams-Bashforth 4th-Order Predictor: $y_{n+1}^{(p)} = y_n + \\frac{h}{24}[55 f_n - 59 f_{n-1} + 37 f_{n-2} - 9 f_{n-3}]$.",
      "Adams-Moulton 4th-Order Corrector: $y_{n+1}^{(c)} = y_n + \\frac{h}{24}[9 f_{n+1} + 19 f_n - 5 f_{n-1} + f_{n-2}]$.",
      "Exam Gold Tip: In Milne's Predictor-Corrector method, the error estimate is given by $E = \\frac{1}{29}|y_{n+1}^{(c)} - y_{n+1}^{(p)}|$, providing an immediate check on truncation error during exam computations."
    ]
  },
  "linear algebra & probability:::u1": {
    "highlights": [
      "Vector Spaces and Subspace Criteria: Vector space $V$ over real field $\\mathbb{R}$ satisfying 10 axioms (closure under addition and scalar multiplication, associativity, commutativity, identity, invertibility, distributivity); Subspace criterion: non-empty subset $W \\subseteq V$ is subspace iff $\\alpha u + \\beta v \\in W$ for all $\\alpha, \\beta \\in \\mathbb{R}$ and $u, v \\in W$.",
      "Linear Combinations and Span: Linear combination $v = \\sum_{i=1}^k c_i v_i$; Linear span $\\text{span}(S)$ is the smallest subspace containing subset $S$; Spanning set theorem: if vector in $S$ is linear combination of others, removing it leaves span unchanged.",
      "Linear Independence and Dependence: Set $\\{v_1, \\dots, v_k\\}$ is linearly independent iff $c_1 v_1 + \\dots + c_k v_k = 0$ implies $c_1 = c_2 = \\dots = c_k = 0$; Linearly dependent iff at least one vector can be expressed as linear combination of the remaining vectors; Wronskian determinant test for function spaces.",
      "Basis and Dimension: Subset $B$ is basis of $V$ iff (1) $B$ is linearly independent, and (2) $\\text{span}(B) = V$; Every basis of finite-dimensional space $V$ contains identical number of vectors, defined as dimension $\\dim(V)$; Dimension of $\\mathbb{R}^n$ is $n$; Dimension of matrix space $\\mathbb{R}^{m \\times n}$ is $m n$.",
      "Coordinates and Change of Basis: Unique coordinate vector $[v]_B = [c_1, \\dots, c_n]^T$ relative to basis $B = \\{b_1, \\dots, b_n\\}$; Transition (change-of-basis) matrix $P_{B \\to C} = [[b_1]_C \\; [b_2]_C \\; \\dots \\; [b_n]_C]$ satisfying $[v]_C = P_{B \\to C} [v]_B$; Inverse transition matrix $P_{C \\to B} = (P_{B \\to C})^{-1}$.",
      "Fundamental Subspaces of Matrix $A \\in \\mathbb{R}^{m \\times n}$: (1) Row space $\\text{Row}(A) \\subseteq \\mathbb{R}^n$; (2) Column space $\\text{Col}(A) \\subseteq \\mathbb{R}^m$; (3) Null space $\\text{Null}(A) = \\{x \\in \\mathbb{R}^n : A x = 0\\}$; (4) Left null space $\\text{Null}(A^T) \\subseteq \\mathbb{R}^m$.",
      "Rank-Nullity Theorem: Fundamental theorem of linear algebra: $\\dim(\\text{Col}(A)) = \\dim(\\text{Row}(A)) = \\text{rank}(A)$; Rank-Nullity equation: $\\text{rank}(A) + \\text{nullity}(A) = n$ (where $n$ is number of columns / dimension of domain).",
      "Orthogonality and Orthogonal Complements: Two vectors orthogonal if inner product $\\langle u, v \\rangle = u^T v = 0$; Orthogonal complement $W^\\perp = \\{v \\in V : \\langle v, w \\rangle = 0 \\;\\forall w \\in W\\}$; Fundamental orthogonal decomposition: $\\text{Row}(A)^\\perp = \\text{Null}(A)$ and $\\text{Col}(A)^\\perp = \\text{Null}(A^T)$.",
      "Gram-Schmidt Orthonormalization Process: Converts linearly independent basis $\\{v_1, \\dots, v_k\\}$ into orthonormal basis $\\{u_1, \\dots, u_k\\}$: $u_1 = \\frac{v_1}{\\|v_1\\|}$; Step $k$: $w_k = v_k - \\sum_{j=1}^{k-1} \\langle v_k, u_j \\rangle u_j$, followed by normalization $u_k = \\frac{w_k}{\\|w_k\\|}$.",
      "University Examination Strategy: Test given subsets for subspace criteria, determine whether vectors form linearly independent spanning sets, calculate bases and dimensions of row/column/null spaces, verify Rank-Nullity theorem for given rectangular matrices, and orthonormalize vectors using Gram-Schmidt."
    ],
    "keyPoints": [
      "Subspace Test: $W \\ne \\emptyset$, $u, v \\in W \\implies \\alpha u + \\beta v \\in W$.",
      "Linear Independence Condition: $\\sum c_i v_i = 0 \\implies c_i = 0$ for all $i$.",
      "Coordinate Transformation: $[v]_C = P_{B \\to C} [v]_B$.",
      "Rank-Nullity Theorem: $\\text{rank}(A) + \\text{nullity}(A) = n$.",
      "Column Space Dimension: $\\dim(\\text{Col}(A)) = \\text{rank}(A)$.",
      "Null Space Definition: $\\text{Null}(A) = \\{x : A x = 0\\}$.",
      "Fundamental Orthogonality: $\\text{Row}(A) \\perp \\text{Null}(A)$ in $\\mathbb{R}^n$.",
      "Gram-Schmidt Orthogonal Vector: $w_k = v_k - \\sum_{j=1}^{k-1} \\langle v_k, u_j \\rangle u_j$.",
      "Orthonormal Normalization: $u_k = \\frac{w_k}{\\|w_k\\|}$.",
      "Exam Gold Tip: The rank of matrix $A$ equals the number of non-zero pivot rows in its row-echelon form (REF), and nullity equals the number of free variables (columns without pivots)."
    ]
  },
  "linear algebra & probability:::u2": {
    "highlights": [
      "Linear Transformations and Representations: Mapping $T: V \\to W$ satisfying $T(\\alpha u + \\beta v) = \\alpha T(u) + \\beta T(v)$; Matrix representation $[T]_{B,C} = [[T(b_1)]_C \\; \\dots \\; [T(b_n)]_C]$; Kernel $\\ker(T) = \\{v \\in V : T(v) = 0\\}$ and Range $\\text{range}(T) = \\{T(v) : v \\in V\\}$; Rank-Nullity for transformations: $\\dim(\\ker(T)) + \\dim(\\text{range}(T)) = \\dim(V)$.",
      "Characteristic Equation and Eigenvalues: For square matrix $A \\in \\mathbb{R}^{n \\times n}$, scalar $\\lambda$ is eigenvalue with non-zero eigenvector $v$ iff $A v = \\lambda v \\iff (A - \\lambda I) v = 0$; Characteristic polynomial: $p(\\lambda) = \\det(A - \\lambda I) = 0$; Sum of eigenvalues equals trace $\\sum \\lambda_i = \\text{Tr}(A)$; Product of eigenvalues equals determinant $\\prod \\lambda_i = \\det(A)$.",
      "Algebraic vs Geometric Multiplicity: Algebraic multiplicity $m_a(\\lambda)$: multiplicity of $\\lambda$ as root of characteristic polynomial; Geometric multiplicity $m_g(\\lambda)$: dimension of eigenspace $E_\\lambda = \\text{Null}(A - \\lambda I)$; Inequality: $1 \\le m_g(\\lambda) \\le m_a(\\lambda)$; Defective matrix if $m_g(\\lambda) < m_a(\\lambda)$ for any eigenvalue.",
      "Diagonalization Theorem: Matrix $A$ is diagonalizable ($A = P D P^{-1}$ with diagonal $D$) iff $A$ has $n$ linearly independent eigenvectors iff $m_g(\\lambda) = m_a(\\lambda)$ for every eigenvalue; If $A$ has $n$ distinct eigenvalues, $A$ is guaranteed diagonalizable.",
      "Cayley-Hamilton Theorem & Minimal Polynomial: Every square matrix satisfies its characteristic equation: $p(A) = 0$; Minimal polynomial $m(\\lambda)$ is monic polynomial of lowest degree such that $m(A) = 0$; $A$ is diagonalizable iff its minimal polynomial has only non-repeated linear factors.",
      "Symmetric Matrices and Spectral Theorem: For real symmetric matrix $A = A^T$: (1) All eigenvalues are strictly real; (2) Eigenvectors corresponding to distinct eigenvalues are mutually orthogonal; (3) Orthogonally diagonalizable: $A = Q \\Lambda Q^T$ where $Q$ is orthogonal matrix ($Q^T Q = I$) of orthonormal eigenvectors.",
      "Quadratic Forms and Canonical Reduction: Quadratic form $Q(x) = x^T A x = \\sum_{i=1}^n \\sum_{j=1}^n a_{ij} x_i x_j$ with symmetric $A$; Orthogonal coordinate transformation $x = Q y$ reduces $Q(x)$ to canonical sum of squares: $Q(y) = \\lambda_1 y_1^2 + \\lambda_2 y_2^2 + \\dots + \\lambda_n y_n^2$.",
      "Classification of Quadratic Forms: (1) Positive definite: $Q(x) > 0$ for all $x \\ne 0$ (all $\\lambda_i > 0$); (2) Negative definite: $Q(x) < 0$ for all $x \\ne 0$ (all $\\lambda_i < 0$); (3) Positive/Negative semidefinite (eigenvalues $\\ge 0$ or $\\le 0$); (4) Indefinite: eigenvalues have mixed signs.",
      "Sylvester's Criterion of Definiteness: Symmetric matrix $A$ is positive definite iff all leading principal minors $\\Delta_k = \\det(A_{1..k, 1..k}) > 0$ for $k=1, 2, \\dots, n$; Negative definite iff leading principal minors alternate in signs: $(-1)^k \\Delta_k > 0$ ($\\Delta_1 < 0, \\Delta_2 > 0, \\Delta_3 < 0$).",
      "University Examination Strategy: Determine eigenvalues and eigenvectors of $3 \\times 3$ matrices, verify Cayley-Hamilton theorem and compute $A^{-1}$ and $A^3$, diagonalize matrices via modal matrix $P$, orthogonally reduce quadratic forms to canonical forms, and classify definiteness using Sylvester's criterion."
    ],
    "keyPoints": [
      "Characteristic Equation: $\\det(A - \\lambda I) = 0$.",
      "Eigenvalue Trace Relation: $\\sum \\lambda_i = \\text{Tr}(A)$.",
      "Eigenvalue Determinant Relation: $\\prod \\lambda_i = \\det(A)$.",
      "Matrix Diagonalization: $A = P D P^{-1}$ ($P$ columns are eigenvectors).",
      "Cayley-Hamilton Identity: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = 0$.",
      "Orthogonal Diagonalization: $A = Q \\Lambda Q^T$ ($Q^T = Q^{-1}$).",
      "Quadratic Form Canonical Form: $Q(y) = \\sum_{i=1}^n \\lambda_i y_i^2$.",
      "Sylvester's Positive Definite Test: $\\Delta_1 > 0, \\Delta_2 > 0, \\dots, \\Delta_n > 0$.",
      "Geometric Multiplicity: $m_g(\\lambda) = n - \\text{rank}(A - \\lambda I)$.",
      "Exam Gold Tip: If matrix $A$ is symmetric, its eigenvectors from different eigenvalues are automatically orthogonal; simply normalize them to form the orthogonal transformation matrix $Q$."
    ]
  },
  "linear algebra & probability:::u3": {
    "highlights": [
      "Probability Axioms and Sample Spaces: Sample space $S$; Kolmogorov axioms: (1) $P(A) \\ge 0$, (2) $P(S) = 1$, (3) For mutually exclusive events $P(\\bigcup A_i) = \\sum P(A_i)$; Conditional probability $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$; Multiplication rule $P(A \\cap B) = P(B) P(A|B)$.",
      "Total Probability and Bayes' Theorem: Partition $B_1, \\dots, B_k$ of sample space: $P(A) = \\sum P(B_i) P(A|B_i)$; Bayes' rule for posterior probability: $P(B_j|A) = \\frac{P(B_j) P(A|B_j)}{\\sum_{i=1}^k P(B_i) P(A|B_i)}$.",
      "Discrete Random Variables and Mass Functions: Random variable $X: S \\to \\mathbb{R}$; Probability mass function (PMF) $p(x) = P(X = x)$ satisfying $p(x) \\ge 0$ and $\\sum p(x) = 1$; Cumulative distribution function (CDF) $F(x) = P(X \\le x) = \\sum_{t \\le x} p(t)$; Step-function properties.",
      "Mathematical Expectation and Moments: Expected value $E[X] = \\sum x p(x)$; Variance $\\text{Var}(X) = E[(X-\\mu)^2] = E[X^2] - (E[X])^2$; Properties: $E[a X + b] = a E[X] + b$; $\\text{Var}(a X + b) = a^2 \\text{Var}(X)$; Standard deviation $\\sigma = \\sqrt{\\text{Var}(X)}$.",
      "Bernoulli and Binomial Distributions: Bernoulli trial with success probability $p$; Binomial distribution $X \\sim B(n, p)$ representing successes in $n$ independent trials: $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$; Mean $\\mu = n p$; Variance $\\sigma^2 = n p q$; MGF $M_X(t) = (q + p e^t)^n$.",
      "Poisson Distribution: Limiting form of Binomial as $n \\to \\infty, p \\to 0$ with $\\lambda = n p = \\text{constant}$; PMF: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ ($k = 0, 1, 2, \\dots$); Unique property: mean equals variance $E[X] = \\text{Var}(X) = \\lambda$; MGF $M_X(t) = e^{\\lambda(e^t - 1)}$.",
      "Geometric Distribution: Number of Bernoulli trials $X$ until first success occurs: $P(X = k) = (1-p)^{k-1} p$ ($k = 1, 2, \\dots$); Mean $E[X] = \\frac{1}{p}$; Variance $\\text{Var}(X) = \\frac{1-p}{p^2}$; Memoryless property: $P(X > s + t \\mid X > s) = P(X > t)$.",
      "Negative Binomial & Hypergeometric Distributions: Negative Binomial: trials until $r$-th success occurs: $P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}$; Hypergeometric distribution modeling sampling without replacement from population $N$ containing $K$ successes: $P(X = k) = \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}}$.",
      "Moment Generating Function (MGF) and Characteristic Function: MGF $M_X(t) = E[e^{t X}] = \\sum e^{t x} p(x)$; Generates raw moments via differentiation: $E[X^r] = \\left. \\frac{d^r M_X(t)}{dt^r} \\right|_{t=0}$; For independent variables $X, Y$: $M_{X+Y}(t) = M_X(t) M_Y(t)$.",
      "University Examination Strategy: Solve diagnostic and signal detection problems using Bayes' theorem, compute mean and variance from arbitrary discrete PMFs, calculate probabilities of defect rates using Binomial and Poisson formulas, apply memoryless property of Geometric distribution, and derive moments using MGF."
    ],
    "keyPoints": [
      "Bayes' Formula: $P(B_j|A) = \\frac{P(B_j) P(A|B_j)}{\\sum P(B_i) P(A|B_i)}$.",
      "Variance Formula: $\\text{Var}(X) = E[X^2] - (E[X])^2$.",
      "Linearity of Expectation: $E[a X + b] = a E[X] + b$.",
      "Binomial PMF: $P(X=k) = \\binom{n}{k} p^k q^{n-k}$.",
      "Binomial Parameters: $\\mu = n p$, $\\sigma^2 = n p q$.",
      "Poisson PMF: $P(X=k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}$.",
      "Poisson Identity: $E[X] = \\text{Var}(X) = \\lambda$.",
      "Geometric Distribution PMF: $P(X=k) = q^{k-1} p$ ($k=1, 2, \\dots$).",
      "Geometric Memoryless Property: $P(X > s+t \\mid X > s) = P(X > t)$.",
      "Exam Gold Tip: For Poisson distribution, $P(X = k+1) = \\frac{\\lambda}{k+1} P(X = k)$; use this recurrence relation to rapidly generate successive Poisson probabilities during exam calculations."
    ]
  },
  "linear algebra & probability:::u4": {
    "highlights": [
      "Continuous Random Variables and Density Functions: Continuous random variable $X$ taking uncountable continuum of values; Probability density function (PDF) $f(x)$ satisfying $f(x) \\ge 0$ and $\\int_{-\\infty}^\\infty f(x) dx = 1$; Probability defined over intervals: $P(a \\le X \\le b) = \\int_a^b f(x) dx$; Single point probability is identically zero $P(X = c) = 0$.",
      "Cumulative Distribution Function (CDF): $F(x) = P(X \\le x) = \\int_{-\\infty}^x f(t) dt$; Fundamental theorem of calculus links PDF and CDF: $f(x) = \\frac{d F(x)}{dx}$; Properties: non-decreasing, $\\lim_{x \\to -\\infty} F(x) = 0$, $\\lim_{x \\to +\\infty} F(x) = 1$, and $P(a < X \\le b) = F(b) - F(a)$.",
      "Continuous Expectation, Variance, and Moments: Mean $\\mu = E[X] = \\int_{-\\infty}^\\infty x f(x) dx$; Variance $\\sigma^2 = \\text{Var}(X) = \\int_{-\\infty}^\\infty (x - \\mu)^2 f(x) dx$; $n$-th raw moment $\\mu'_n = E[X^n]$; $n$-th central moment $\\mu_n = E[(X-\\mu)^n]$.",
      "Continuous Uniform Distribution: $X \\sim U(a, b)$ with constant PDF $f(x) = \\frac{1}{b-a}$ for $a \\le x \\le b$, and $0$ elsewhere; Mean $\\mu = \\frac{a+b}{2}$; Variance $\\sigma^2 = \\frac{(b-a)^2}{12}$; Cumulative distribution $F(x) = \\frac{x-a}{b-a}$; Models quantization noise in analog-to-digital converters.",
      "Exponential Distribution: $X \\sim \\text{Exp}(\\lambda)$ with PDF $f(x) = \\lambda e^{-\\lambda x}$ ($x \\ge 0$); Mean $\\mu = \\frac{1}{\\lambda}$; Variance $\\sigma^2 = \\frac{1}{\\lambda^2}$; CDF $F(x) = 1 - e^{-\\lambda x}$; Memoryless continuous distribution $P(X > s+t \\mid X > s) = P(X > t)$; Models component lifetime and time between Poisson events.",
      "Normal (Gaussian) Distribution: $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ with bell-shaped symmetric PDF $f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left( -\\frac{(x-\\mu)^2}{2\\sigma^2} \\right)$; Mean $\\mu$, variance $\\sigma^2$; Points of inflection at $x = \\mu \\pm \\sigma$; Skewness $\\beta_1 = 0$, Kurtosis $\\beta_2 = 3$.",
      "Standard Normal Variable and Z-Scores: Standard normal $Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$ with PDF $\\phi(z) = \\frac{1}{\\sqrt{2\\pi}} e^{-z^2 / 2}$; Standard CDF $\\Phi(z) = P(Z \\le z)$; Empirical rule: $P(\\mu-\\sigma \\le X \\le \\mu+\\sigma) \\approx 68.27\\%$, $P(\\mu-2\\sigma \\le X \\le \\mu+2\\sigma) \\approx 95.45\\%$, $P(\\mu-3\\sigma \\le X \\le \\mu+3\\sigma) \\approx 99.73\\%$.",
      "Probability Inequalities (Markov and Chebyshev): Markov's inequality for non-negative random variable $X$: $P(X \\ge a) \\le \\frac{E[X]}{a}$; Chebyshev's inequality: $P(|X - \\mu| \\ge k \\sigma) \\le \\frac{1}{k^2}$ or $P(|X - \\mu| < k \\sigma) \\ge 1 - \\frac{1}{k^2}$; Provides distribution-free bounds on probabilities.",
      "Laws of Large Numbers: Weak Law of Large Numbers (WLLN): for sequence of i.i.d. random variables with mean $\\mu$, sample mean $\\bar{X}_n = \\frac{1}{n} \\sum X_i$ converges in probability to $\\mu$: $\\lim_{n \\to \\infty} P(|\\bar{X}_n - \\mu| \\ge \\epsilon) = 0$; Strong Law of Large Numbers (SLLN): almost sure convergence $P(\\lim_{n \\to \\infty} \\bar{X}_n = \\mu) = 1$.",
      "University Examination Strategy: Normalize continuous PDF functions to evaluate unknown normalization constant $k$, calculate expectation and variance for piecewise continuous distributions, evaluate exponential lifetime probabilities, compute standard normal $Z$-score probabilities from statistical tables, and apply Chebyshev's inequality to establish minimum probability bounds."
    ],
    "keyPoints": [
      "PDF Normalization Axiom: $\\int_{-\\infty}^\\infty f(x) dx = 1$.",
      "CDF Derivative Link: $f(x) = \\frac{d F(x)}{dx}$.",
      "Uniform Distribution Variance: $\\sigma^2 = \\frac{(b-a)^2}{12}$.",
      "Exponential PDF: $f(x) = \\lambda e^{-\\lambda x}$ ($x \\ge 0$).",
      "Exponential CDF: $F(x) = 1 - e^{-\\lambda x}$.",
      "Gaussian PDF: $f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)$.",
      "Standard Normal Transform: $Z = \\frac{X - \\mu}{\\sigma}$.",
      "Markov's Inequality: $P(X \\ge a) \\le \\frac{E[X]}{a}$ ($X \\ge 0$).",
      "Chebyshev's Inequality: $P(|X - \\mu| \\ge k \\sigma) \\le \\frac{1}{k^2}$.",
      "Exam Gold Tip: For standard normal distribution $\\Phi(-z) = 1 - \\Phi(z)$ by bell curve symmetry; this allows evaluating probabilities for negative $Z$-values directly from positive $Z$ tables."
    ]
  },
  "linear algebra & probability:::u5": {
    "highlights": [
      "Population and Random Sampling: Target population with parameters (mean $\\mu$, variance $\\sigma^2$, proportion $p$); Random sample $X_1, X_2, \\dots, X_n$ of i.i.d. observations; Sample statistics: Sample mean $\\bar{X} = \\frac{1}{n} \\sum_{i=1}^n X_i$; Sample variance $S^2 = \\frac{1}{n-1} \\sum_{i=1}^n (X_i - \\bar{X})^2$ (Bessel's correction for unbiasedness).",
      "Sampling Distribution of Mean and Central Limit Theorem: Expectation $E[\\bar{X}] = \\mu$; Standard Error $SE(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}$; Central Limit Theorem (CLT): for sample size $n \\ge 30$, sample mean $\\bar{X}$ is approximately normally distributed $\\bar{X} \\sim \\mathcal{N}\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$ regardless of population shape.",
      "Point Estimation & Properties of Good Estimators: Estimator $\\hat{\\theta} = g(X_1, \\dots, X_n)$: (1) Unbiasedness: $E[\\hat{\\theta}] = \\theta$; (2) Consistency: $\\lim_{n \\to \\infty} P(|\\hat{\\theta} - \\theta| < \\epsilon) = 1$; (3) Efficiency: smallest variance among all unbiased estimators (Cramér-Rao lower bound); (4) Sufficiency: contains all sample information about $\\theta$.",
      "Method of Moments Estimation: Equating sample moments $m_k = \\frac{1}{n} \\sum X_i^k$ to theoretical population moments $\\mu'_k = E[X^k]$; Solving resulting system of algebraic equations for unknown distribution parameters (e.g., for Gamma, Beta, and Uniform distributions).",
      "Maximum Likelihood Estimation (MLE): Likelihood function $L(\\theta) = \\prod_{i=1}^n f(x_i; \\theta)$; Log-likelihood $\\ln L(\\theta) = \\sum_{i=1}^n \\ln f(x_i; \\theta)$; Score equation $\\frac{d \\ln L(\\theta)}{d\\theta} = 0$; Second derivative test $\\frac{d^2 \\ln L}{d\\theta^2} < 0$; Invariance property of MLE: if $\\hat{\\theta}$ is MLE, then $g(\\hat{\\theta})$ is MLE of $g(\\theta)$.",
      "Interval Estimation & Confidence Intervals: Interval $[\\hat{\\theta}_L, \\hat{\\theta}_U]$ capturing true parameter with confidence level $1 - \\alpha$; Two-sided $(1-\\alpha)100\\%$ confidence interval for mean $\\mu$ with known $\\sigma$: $\\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$; Critical values: $z_{0.025} = 1.96$ ($95\\%$), $z_{0.005} = 2.576$ ($99\\%$).",
      "Student's t-Distribution for Unknown Variance: For small samples ($n < 30$) from normal population with unknown $\\sigma$: statistic $T = \\frac{\\bar{X} - \\mu}{S / \\sqrt{n}}$ follows Student's $t$-distribution with $\\nu = n-1$ degrees of freedom; Confidence interval: $\\bar{x} \\pm t_{\\alpha/2, n-1} \\frac{S}{\\sqrt{n}}$; Heavier tails than normal distribution.",
      "Confidence Intervals for Population Proportion: For large sample from Bernoulli population: sample proportion $\\hat{p} = \\frac{X}{n}$; Standard error $SE(\\hat{p}) = \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$; $(1-\\alpha)100\\%$ confidence interval: $\\hat{p} \\pm z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$.",
      "Confidence Intervals for Population Variance: Chi-Square distribution: statistic $\\chi^2 = \\frac{(n-1)S^2}{\\sigma^2}$ follows $\\chi^2$ distribution with $\\nu = n-1$ degrees of freedom; $(1-\\alpha)100\\%$ confidence interval for $\\sigma^2$: $\\left[ \\frac{(n-1)S^2}{\\chi^2_{\\alpha/2, n-1}}, \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2, n-1}} \\right]$.",
      "University Examination Strategy: Apply Central Limit Theorem to compute sample mean probabilities, prove that sample variance $S^2$ is an unbiased estimator of $\\sigma^2$, derive MLE estimators for Poisson parameter $\\lambda$ and Normal parameters $(\\mu, \\sigma^2)$, and construct $95\\%$ and $99\\%$ confidence intervals for population means using $Z$ and $t$ tables."
    ],
    "keyPoints": [
      "Sample Mean Estimator: $\\bar{X} = \\frac{1}{n} \\sum X_i$ ($E[\\bar{X}] = \\mu$).",
      "Sample Variance Unbiased: $S^2 = \\frac{1}{n-1} \\sum (X_i - \\bar{X})^2$ ($E[S^2] = \\sigma^2$).",
      "Standard Error of Mean: $SE(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}$.",
      "Central Limit Theorem: $\\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0, 1)$.",
      "MLE Score Equation: $\\frac{d \\ln L(\\theta)}{d\\theta} = 0$.",
      "Confidence Interval Mean (Known $\\sigma$): $\\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$.",
      "Small Sample $t$-Statistic: $T = \\frac{\\bar{X} - \\mu}{S / \\sqrt{n}}$ ($df = n-1$).",
      "Confidence Interval Mean (Unknown $\\sigma$): $\\bar{x} \\pm t_{\\alpha/2, n-1} \\frac{S}{\\sqrt{n}}$.",
      "Confidence Interval for Proportion: $\\hat{p} \\pm z_{\\alpha/2} \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$.",
      "Exam Gold Tip: For $95\\%$ confidence interval with known variance, use $z = 1.96$; for $90\\%$ use $z = 1.645$; for $99\\%$ use $z = 2.576$."
    ]
  },
  "database management systems:::u1": {
    "highlights": [
      "Database System Architecture & Abstraction: Three-schema architecture (Internal/Physical level, Conceptual/Logical level, External/View level); Physical data independence vs Logical data independence; Data Definition Language (DDL) and Data Manipulation Language (DML).",
      "Entity-Relationship (ER) Modeling Concepts: Entity sets, Weak vs Strong entities (identifying relationship, partial discriminator key); Attributes (simple, composite, single-valued, multi-valued, derived); Domain constraints.",
      "Relationship Constraints & Cardinality: Mapping cardinality ratios ($1:1, 1:N, N:1, M:N$); Participation constraints (Total participation indicated by double lines vs Partial participation); Degree of relationship (binary, ternary, recursive).",
      "Enhanced ER (EER) Modeling Concepts: Specialization and Generalization; Attribute inheritance; Disjointness constraints (disjoint vs overlapping subclasses); Completeness constraints (total vs partial specialization); Category / Union types.",
      "Mapping ER Diagrams to Relational Tables: Strong entity mapping; Multi-valued attribute mapping to separate relation with foreign key; Weak entity mapping with identifying composite primary key; Binary $1:N$ mapping (foreign key in $N$-side relation); Binary $M:N$ mapping (junction table with composite primary key).",
      "Integrity Constraints in Relational Databases: Domain constraints, Key constraints (Superkey, Candidate key, Primary key), Entity integrity constraint (Primary key cannot be null), Referential integrity constraint (Foreign key must reference valid primary key or be null).",
      "Relational Algebra Core Operations: Selection ($\\sigma_{\\text{condition}}(R)$), Projection ($\\pi_{\\text{attributes}}(R)$), Cartesian Product ($R \\times S$), Set Union ($R \\cup S$), Set Difference ($R - S$), Rename ($\\rho$).",
      "Derived Relational Algebra Operations: Natural Join ($R \\bowtie S$), Theta Join ($R \\bowtie_\\theta S$), Equi-join, Set Intersection ($R \\cap S$), Division operator ($R \\div S$, representing universal 'for all' queries).",
      "Tuple Relational Calculus (TRC) & Domain Relational Calculus (DRC): Declarative query languages; Non-procedural query expressions $\\{ t \\mid P(t) \\}$; Safety of relational calculus queries; Codd's Equivalence Theorem.",
      "University Examination Strategy: Convert complex business narrative requirements into standard ER diagrams with explicit cardinality/participation constraints, convert ER schemas to normalized relational tables, and write relational algebra queries with selection/projection optimization."
    ],
    "keyPoints": [
      "Three-Schema Principle: Isolates internal storage structures from logical application views, enabling physical data independence.",
      "Weak Entity Identification: Primary key consists of partial discriminator combined with the owner entity's primary key.",
      "Total Participation Definition: Every entity in the entity set must participate in at least one relationship instance.",
      "ER to Table 1:N Rule: Place the primary key of the 1-side as a foreign key attribute inside the N-side table.",
      "ER to Table M:N Rule: Requires a separate bridge/junction table containing composite foreign keys referencing both participating entities.",
      "Entity Integrity Rule: No primary key component can take a NULL value ($PK \\ne \\text{NULL}$).",
      "Referential Integrity Rule: If foreign key $FK$ in relation $R_1$ references $PK$ in $R_2$, then $FK$ must equal an existing $PK$ or be NULL.",
      "Relational Division Operator: $R \\div S$ retrieves all tuples in $R$ that are associated with all tuples in relation $S$.",
      "Derived Attribute Notation: Represented as dashed/dotted ovals in Chen ER notation; computed dynamically from stored attributes.",
      "Exam Gold Tip: In ER mapping, remember to create a separate independent table for every multi-valued attribute."
    ]
  },
  "database management systems:::u2": {
    "highlights": [
      "Relational Model Foundations: Relations as mathematical tables; Tuples (rows), Attributes (columns); Cardinality (number of tuples) vs Degree/Arity (number of attributes); Atomic attribute value rule (First Normal Form requirement).",
      "SQL Data Definition Language (DDL): Statements: `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`, `TRUNCATE TABLE`; Table constraints: `PRIMARY KEY`, `FOREIGN KEY ... REFERENCES ... ON DELETE CASCADE / SET NULL`, `UNIQUE`, `NOT NULL`, `CHECK` constraints.",
      "SQL Data Manipulation Language (DML): Statements: `SELECT`, `INSERT INTO`, `UPDATE ... SET`, `DELETE FROM`; Set operators: `UNION`, `INTERSECT`, `EXCEPT` / `MINUS` (default duplicate elimination vs `UNION ALL`).",
      "SQL Aggregation & Grouping Semantics: Aggregate functions: `COUNT(*)`, `SUM()`, `AVG()`, `MIN()`, `MAX()`; `GROUP BY` clause mechanics; `HAVING` clause vs `WHERE` clause (filtering aggregated groups vs individual rows); Execution order: FROM $\\to$ WHERE $\\to$ GROUP BY $\\to$ HAVING $\\to$ SELECT $\\to$ ORDER BY.",
      "SQL Join Operations: Inner Join (`INNER JOIN`), Natural Join (`NATURAL JOIN`), Outer Joins: Left Outer Join (`LEFT JOIN`), Right Outer Join (`RIGHT JOIN`), Full Outer Join (`FULL OUTER JOIN`); Cross Join (Cartesian Product); Self Joins.",
      "Nested Subqueries & Correlated Subqueries: Scalar subqueries, subqueries returning sets; Set comparison operators: `IN`, `NOT IN`, `ANY` / `SOME`, `ALL`; Correlated subqueries evaluated row-by-row; Existence testing with `EXISTS` and `NOT EXISTS`.",
      "Views & View Update Rules: Virtual relations created via `CREATE VIEW`; Security, logical data independence; Updatable views criteria (single base table, includes primary key, no aggregation, no `GROUP BY` or `DISTINCT`).",
      "SQL Advanced Features: Common Table Expressions (CTE) with `WITH` clause; Recursive CTEs; Window analytic functions (`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `OVER (PARTITION BY ... ORDER BY ...)`).",
      "Triggers and Stored Procedures: Active database rules; Event-Condition-Action (ECA) model; `BEFORE` vs `AFTER` triggers; `FOR EACH ROW` vs `FOR EACH STATEMENT`; Stored procedures and PL/SQL cursors.",
      "University Examination Strategy: Write nested SQL queries using `EXISTS` and `GROUP BY ... HAVING`, solve outer join query output tracing problems, and write PL/SQL trigger procedures with integrity constraint validation."
    ],
    "keyPoints": [
      "SQL Execution Sequence: FROM $\\to$ JOIN $\\to$ WHERE $\\to$ GROUP BY $\\to$ HAVING $\\to$ SELECT $\\to$ DISTINCT $\\to$ ORDER BY $\\to$ LIMIT.",
      "WHERE vs HAVING Distinction: WHERE filters rows prior to aggregation; HAVING filters aggregated groups after GROUP BY.",
      "NOT IN with NULL Trap: If subquery returns a NULL value, `NOT IN` evaluates to UNKNOWN for all outer rows, returning empty set.",
      "EXISTS Optimization: Evaluates to TRUE as soon as the first matching tuple is found, avoiding full table scans.",
      "ON DELETE CASCADE Action: Automatically deletes child rows in referencing table when corresponding parent row is deleted.",
      "RANK vs DENSE_RANK: RANK skips subsequent rank numbers after ties (1, 1, 3); DENSE_RANK does not skip numbers (1, 1, 2).",
      "COUNT(*) vs COUNT(column): `COUNT(*)` counts all rows including NULLs; `COUNT(column)` ignores NULL values in that column.",
      "Correlated Subquery Mechanism: Re-evaluated once for each candidate tuple considered by the outer query.",
      "Updatable View Rule: View cannot be updated directly if it involves aggregate functions, `GROUP BY`, `UNION`, or `DISTINCT`.",
      "Exam Scoring Tip: In SQL query writing, always specify table aliases when joining multiple tables sharing common column names."
    ]
  },
  "database management systems:::u3": {
    "highlights": [
      "Relational Database Anomalies & Redundancy: Update anomalies, Insertion anomalies, Deletion anomalies caused by poorly designed schemas; Objective of normalization: eliminate redundancy while preserving functional dependencies and lossless joins.",
      "Functional Dependencies (FD): Formal definition: $X \\to Y$ holds if for any tuples $t_1, t_2$, $t_1[X] = t_2[X] \\implies t_1[Y] = t_2[Y]$; Trivial vs non-trivial FDs; Full functional dependency vs partial functional dependency; Transitive dependency.",
      "Armstrong's Axioms for FD Inference: Sound and complete inference rules: (1) Reflexivity: if $Y \\subseteq X$, then $X \\to Y$; (2) Augmentation: if $X \\to Y$, then $X Z \\to Y Z$; (3) Transitivity: if $X \\to Y$ and $Y \\to Z$, then $X \\to Z$; Derived rules: Union, Decomposition, Pseudo-transitivity.",
      "Attribute Closure Algorithm: Algorithm to compute $X^+$ under a set of FDs $F$; Used to test if $X$ is a superkey, test membership of an FD in $F^+$, and discover all candidate keys of a relation in polynomial time.",
      "First Normal Form (1NF) & Second Normal Form (2NF): 1NF: All attribute values must be atomic (no repeating groups or composite values); 2NF: Relation in 1NF and every non-prime attribute is fully functionally dependent on every candidate key (no partial dependencies).",
      "Third Normal Form (3NF): Relation in 2NF and for every non-trivial FD $X \\to Y$, either $X$ is a superkey or $Y$ is a prime attribute (part of some candidate key); Eliminates transitive dependencies for non-prime attributes.",
      "Boyce-Codd Normal Form (BCNF): Stricter than 3NF; For every non-trivial FD $X \\to Y$, $X$ must be a superkey; Resolves anomalies when candidate keys overlap; Every relation in BCNF is in 3NF, but converse is false.",
      "Decomposition Properties: (1) Lossless-Join Decomposition (guaranteed if $R_1 \\cap R_2 \\to R_1$ or $R_1 \\cap R_2 \\to R_2$); (2) Dependency Preservation (decomposition preserves all original FDs if $(F_1 \\cup F_2)^+ = F^+$); 3NF always achieves both; BCNF guarantees lossless-join but may not preserve dependencies.",
      "Higher Normal Forms: Multi-Valued Dependencies (MVD: $X \\twoheadrightarrow Y$) and Fourth Normal Form (4NF); Join Dependencies (JD) and Fifth Normal Form (5NF / Project-Join Normal Form).",
      "University Examination Strategy: Find all candidate keys of a relation using attribute closure, determine the highest normal form of a schema, decompose relations into 3NF and BCNF, and prove whether a decomposition is lossless and dependency preserving."
    ],
    "keyPoints": [
      "Functional Dependency Definition: $X \\to Y \\iff \\forall t_1, t_2 \\in R, t_1[X] = t_2[X] \\implies t_1[Y] = t_2[Y]$.",
      "Transitivity Axiom: $X \\to Y \\land Y \\to Z \\implies X \\to Z$.",
      "Superkey Criterion: $X$ is a superkey of relation $R$ if and only if $X^+ = R$.",
      "Candidate Key Definition: A minimal superkey (no proper subset of $X$ has closure equal to $R$).",
      "2NF Condition: No non-prime attribute may depend on a proper subset of any candidate key (no partial dependency).",
      "3NF Condition: For every non-trivial $X \\to Y$, $X$ is superkey OR $Y$ is a prime attribute.",
      "BCNF Condition: For every non-trivial $X \\to Y$, $X$ must be a superkey.",
      "Lossless Join Theorem: Decomposition of $R$ into $R_1, R_2$ is lossless $\\iff (R_1 \\cap R_2 \\to R_1) \\in F^+$ or $(R_1 \\cap R_2 \\to R_2) \\in F^+$.",
      "BCNF Dependency Trade-off: BCNF guarantees zero redundancy from functional dependencies but cannot always preserve dependencies.",
      "Exam Gold Tip: In 3NF checks, if the right-hand side attribute $Y$ is prime, the dependency automatically satisfies 3NF."
    ]
  },
  "database management systems:::u4": {
    "highlights": [
      "Transaction Concept & ACID Properties: Atomicity (all-or-nothing execution, ensured by recovery manager / undo logs); Consistency (preserves database integrity constraints); Isolation (concurrent transactions do not interfere, ensured by concurrency control); Durability (committed changes persist across crashes, ensured by redo logs).",
      "Transaction State Diagram: Active $\\to$ Partially Committed (after final operation executed) $\\to$ Committed; Active $\\to$ Failed (hardware/logic error) $\\to$ Aborted (rolled back) $\\to$ Terminated.",
      "Schedules & Serializability: Serial schedule (transactions execute sequentially, no concurrency); Concurrent schedules; Conflict serializability: two operations conflict if they belong to different transactions, access same data item, and at least one is a write ($W_i(X)$ and $R_j(X)$, $W_i(X)$ and $W_j(X)$).",
      "Precedence (Conflict) Graph Algorithm: Directed graph $G = (V, E)$ where nodes are transactions; Directed edge $T_i \\to T_j$ exists if an operation in $T_i$ conflicts with and precedes an operation in $T_j$; Schedule is conflict serializable if and only if precedence graph is acyclic (contains no directed cycles); Topological sort produces equivalent serial schedule.",
      "View Serializability & Blind Writes: Schedule is view serializable if view equivalent to some serial schedule (same initial reads, same updated-read pairs, same final writes); Every conflict serializable schedule is view serializable; Testing view serializability is NP-complete; Enabled by blind writes ($W(X)$ without preceding $R(X)$).",
      "Recoverability of Schedules: Recoverable schedule (if $T_j$ reads data written by $T_i$, $T_i$ commits before $T_j$ commits); Cascading rollback / Cascadeless schedule (transaction only reads committed data, preventing domino rollbacks); Strict schedule (transaction cannot read or write data until the previous writer commits/aborts).",
      "Concurrency Control Locking Protocols: Shared Lock ($S$, read-only) and Exclusive Lock ($X$, read-write); Lock compatibility matrix; Two-Phase Locking (2PL): Growing Phase (locks acquired, no locks released) and Shrinking Phase (locks released, no locks acquired); 2PL guarantees conflict serializability.",
      "Strict 2PL & Rigorous 2PL: Strict 2PL holds all Exclusive locks until transaction commit/abort (guarantees conflict serializability and cascadeless recovery); Rigorous 2PL holds all Shared and Exclusive locks until commit (easiest to implement).",
      "Deadlock Handling in Databases: Deadlock detection using Wait-For Graph (WFG, cycle indicates deadlock); Deadlock prevention: Wait-Die scheme (non-preemptive: older waits, younger dies) vs Wound-Wait scheme (preemptive: older wounds younger, younger waits).",
      "Database Recovery Techniques: Write-Ahead Logging (WAL: log record must reach non-volatile storage before corresponding database disk block is written); Undo/Redo recovery algorithms; Checkpointing (fuzzy checkpoints) to truncate log scan during crash recovery."
    ],
    "keyPoints": [
      "ACID Responsibility: Atomicity & Durability via Recovery Manager; Consistency via Application/DB constraints; Isolation via Concurrency Control.",
      "Conflict Operations Condition: Same data item, different transactions, at least one write operation.",
      "Conflict Serializability Test: A schedule is conflict serializable $\\iff$ its Precedence Graph has no cycles.",
      "2PL Basic Rule: Once a transaction releases any lock, it can never acquire any new locks (Growing $\\to$ Shrinking).",
      "Strict 2PL Benefit: Holding all $X$-locks until transaction end eliminates cascading aborts.",
      "Wait-Die Scheme: Older transaction requests lock held by younger: older waits; Younger requests older: younger dies.",
      "Wound-Wait Scheme: Older requests lock held by younger: older wounds (preempts) younger; Younger requests older: younger waits.",
      "Recoverable Schedule Rule: $T_j$ reads from $T_i \\implies Commit(T_i) < Commit(T_j)$.",
      "WAL Protocol Invariant: Log record for an update must be flushed to disk before the dirty database page is written to disk.",
      "Exam Gold Tip: To find conflict equivalent serial schedule, perform topological sort on the acyclic precedence graph."
    ]
  },
  "database management systems:::u5": {
    "highlights": [
      "Physical Storage Hierarchy & File Organization: Memory hierarchy in DBMS: Buffer pool in RAM, Disk pages / blocks on SSD/HDD; Slotted-page architecture for variable-length records; Heap file organization vs Sequential sorted file organization; Unclustered vs Clustered files.",
      "Indexing Foundations: Primary Index (built on primary key of ordered file, sparse index), Clustering Index (built on non-key ordering field, sparse), Secondary Index (built on non-ordering field, strictly dense index); Dense index (entry for every search key) vs Sparse index (entry for each data block).",
      "Multi-Level Indexing: Indexing the index file; Reduces disk block accesses from $O(B)$ to $O(\\log_b B)$; Motivates dynamic balanced tree indices.",
      "B-Tree Data Structure & Indexing: Balanced multi-way search tree; All leaf nodes at same depth; Node of order $m$: at most $m$ children and $m-1$ keys; Internal nodes have at least $\\lceil m/2 \\rceil$ children; Keys and record pointers stored in internal nodes as well as leaf nodes.",
      "B+ Tree Architecture & Indexing: Superior to B-Tree for DBMS; Data record pointers stored strictly in leaf nodes; Leaf nodes linked sequentially via doubly linked list pointers for high-performance range queries; Internal nodes store search keys and child pointers only, providing higher fan-out and lower tree height.",
      "B+ Tree Insertion and Deletion Mechanics: Insertion: split node when keys exceed $m-1$, push middle key up; Deletion: borrow key from sibling or merge with sibling when keys drop below $\\lceil m/2 \\rceil - 1$; Tree height typically $3-4$ levels even for billions of records; Search cost $O(\\log_B N)$.",
      "Static and Dynamic Hashing: Static hashing (bucket overflow handled by overflow chaining); Extendible Hashing (directory of pointers, global depth $d$ and local depth $d'$, bucket splits double directory only when $d' = d$); Linear Hashing (split pointer $p$ systematically rounds through buckets, avoids directory).",
      "Query Processing & Optimization: Query processing phases: Parsing & Translation $\\to$ Optimization $\\to$ Execution; Query execution plan / operator tree; Cost metric based on disk block transfers and seek time; Evaluation of selection algorithms (linear scan vs index scan) and join algorithms (nested-loop join, block nested-loop, index nested-loop, sort-merge join, hash join).",
      "Buffer Management & Replacement Policies: Buffer pool manager; Frame table, dirty bit, pin count; Buffer replacement strategies: LRU, Clock algorithm (Second Chance), Buffer pool hit ratio.",
      "University Examination Strategy: Calculate maximum keys, minimum keys, and order $m$ for B+ trees given disk block size and pointer lengths, trace B+ tree insertion and deletion splits step-by-step, and compute cost comparisons for Nested Loop vs Hash Join."
    ],
    "keyPoints": [
      "Dense vs Sparse Index Rule: Sparse index requires the data file to be physically sorted on the index search key.",
      "Secondary Index Constraint: Must always be a dense index because data file is not ordered by the secondary key.",
      "B+ Tree Fan-Out Formula: Fan-out $p$ satisfies: $p \\cdot P_{block} + (p - 1) \\cdot K \\le B_{size}$.",
      "B+ Tree Leaf Node Range: Every leaf node contains between $\\lceil(m-1)/2\\rceil$ and $m-1$ record pointers.",
      "B+ Tree Internal Node Range: Every internal node (except root) has between $\\lceil m/2 \\rceil$ and $m$ children.",
      "B+ Tree Range Query Advantage: Leaf nodes form a continuous linked chain, allowing range scans without traversing internal tree nodes.",
      "Extendible Hashing Directory Doubling: Occurs only when an overflowing bucket has local depth equal to global depth ($d' = d$).",
      "Block Nested-Loop Join Cost: $B(R) + \\frac{B(R)}{M - 2} \\times B(S)$ disk block I/Os, where $M$ is buffer frames.",
      "Hash Join Block Cost: $3 [B(R) + B(S)]$ I/Os for two-pass in-memory hash join.",
      "Exam Gold Tip: In B+ tree calculations, remember that the root node is an exception: it can have as few as 2 children."
    ]
  },
  "statistics & probability:::u1": {
    "highlights": [
      "Data Classification and Frequency Distributions: Raw data organization; Qualitative vs quantitative data; Discrete and continuous frequency distributions; Class boundaries, class intervals, and class midpoints; Cumulative frequency distributions (less-than and more-than ogives); Graphical representation via Histograms, Frequency Polygons, and Frequency Curves.",
      "Measures of Central Tendency (Averages): Arithmetic Mean: $\\bar{x} = \\frac{\\sum f_i x_i}{N}$; Median: middle value dividing ranked dataset into two equal halves (for grouped data: $M = L + \\frac{\\frac{N}{2} - F}{f} \\times h$); Mode: most frequently occurring value ($M_o = L + \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\times h$); Empirical relationship: $\\text{Mode} \\approx 3\\text{Median} - 2\\text{Mean}$.",
      "Geometric Mean and Harmonic Mean: Geometric Mean: $GM = \\left( \\prod x_i^{f_i} \\right)^{1/N}$ (used for percentage growth rates and index numbers); Harmonic Mean: $HM = \\frac{N}{\\sum \\frac{f_i}{x_i}}$ (used for average speeds and rates); Fundamental inequality: $AM \\ge GM \\ge HM$, equality holding only when all observations are identical.",
      "Measures of Dispersion (Spread): Range $R = x_{\\max} - x_{\\min}$; Quartile Deviation (Semi-Interquartile Range) $QD = \\frac{Q_3 - Q_1}{2}$; Mean Absolute Deviation $MAD = \\frac{\\sum f_i |x_i - \\bar{x}|}{N}$; Standard Deviation $\\sigma = \\sqrt{\\frac{\\sum f_i (x_i - \\bar{x})^2}{N}}$ and Variance $\\sigma^2$.",
      "Relative Measures of Dispersion & Coefficient of Variation: Coefficient of Variation $CV = \\frac{\\sigma}{\\bar{x}} \\times 100\\%$; Dimensionless measure used to compare consistency, stability, and variability across datasets with differing units or scales; Lower $CV$ indicates greater consistency and uniformity.",
      "Moments of a Frequency Distribution: $r$-th raw moment about origin: $\\mu'_r = \\frac{\\sum f_i x_i^r}{N}$; $r$-th central moment about mean: $\\mu_r = \\frac{\\sum f_i (x_i - \\bar{x})^r}{N}$; Moment relations: $\\mu_1 = 0$, $\\mu_2 = \\sigma^2 = \\mu'_2 - (\\mu'_1)^2$, $\\mu_3 = \\mu'_3 - 3 \\mu'_2 \\mu'_1 + 2 (\\mu'_1)^3$, $\\mu_4 = \\mu'_4 - 4 \\mu'_3 \\mu'_1 + 6 \\mu'_2 (\\mu'_1)^2 - 3 (\\mu'_1)^4$.",
      "Sheppard's Corrections for Grouping: For continuous grouped data, grouping introduces errors in moments; Corrected moments: $\\mu_2^{(corr)} = \\mu_2 - \\frac{h^2}{12}$, $\\mu_3^{(corr)} = \\mu_3$, $\\mu_4^{(corr)} = \\mu_4 - \\frac{1}{2} h^2 \\mu_2 + \\frac{7}{240} h^4$ (where $h$ is class interval width).",
      "Skewness and Asymmetry Measures: Skewness reflects lack of symmetry around mean; Karl Pearson's coefficient: $S_k = \\frac{\\text{Mean} - \\text{Mode}}{\\sigma} = \\frac{3(\\text{Mean} - \\text{Median})}{\\sigma} \\in [-3, +3]$; Bowley's quartile coefficient: $S_B = \\frac{Q_3 + Q_1 - 2 M}{Q_3 - Q_1}$; Moment-based skewness $\\beta_1 = \\frac{\\mu_3^2}{\\mu_2^3}$ and $\\gamma_1 = \\frac{\\mu_3}{\\sigma^3}$ (positive if right-tailed, negative if left-tailed).",
      "Kurtosis and Peakedness: Peakedness of distribution relative to normal distribution; Moment coefficient of kurtosis $\\beta_2 = \\frac{\\mu_4}{\\mu_2^2}$ and excess kurtosis $\\gamma_2 = \\beta_2 - 3$; Classification: Mesokurtic ($\\beta_2 = 3$, normal curve), Leptokurtic ($\\beta_2 > 3$, sharp peak, heavy tails), Platykurtic ($\\beta_2 < 3$, flat-topped).",
      "University Examination Strategy: Calculate Mean, Median, and Mode for grouped frequency tables, compute Standard Deviation and compare consistency via Coefficient of Variation, derive the first four central moments from raw moments, and evaluate coefficients of skewness and kurtosis to characterize distribution shape."
    ],
    "keyPoints": [
      "Grouped Median Formula: $M = L + \\frac{\\frac{N}{2} - F}{f} \\times h$.",
      "Empirical Mode-Mean-Median: $\\text{Mode} \\approx 3\\text{Median} - 2\\text{Mean}$.",
      "Pythagorean Means Inequality: $AM \\ge GM \\ge HM$.",
      "Coefficient of Variation: $CV = \\frac{\\sigma}{\\bar{x}} \\times 100\\%$.",
      "Second Central Moment (Variance): $\\mu_2 = \\mu'_2 - (\\mu'_1)^2$.",
      "Third Central Moment: $\\mu_3 = \\mu'_3 - 3 \\mu'_2 \\mu'_1 + 2 (\\mu'_1)^3$.",
      "Karl Pearson's Skewness: $S_k = \\frac{\\text{Mean} - \\text{Mode}}{\\sigma}$.",
      "Bowley's Quartile Skewness: $S_B = \\frac{Q_3 + Q_1 - 2 M}{Q_3 - Q_1}$.",
      "Kurtosis Coefficient: $\\beta_2 = \\frac{\\mu_4}{\\mu_2^2}$ (normal $= 3$).",
      "Exam Gold Tip: If a dataset is symmetric, the odd central moments are identically zero ($\\mu_1 = 0, \\mu_3 = 0$), so $\\text{Mean} = \\text{Median} = \\text{Mode}$ and skewness $S_k = 0$."
    ]
  },
  "statistics & probability:::u2": {
    "highlights": [
      "Random Variables and Axiomatic Foundations: Discrete vs continuous sample spaces; Cumulative distribution functions $F(x)$ and boundary conditions; Expectation of linear combinations $E[a X + b Y] = a E[X] + b E[Y]$; Variance of independent variables $\\text{Var}(X \\pm Y) = \\text{Var}(X) + \\text{Var}(Y)$.",
      "Binomial Probability Distribution: Probability mass function $P(X = x) = \\binom{n}{x} p^x q^{n-x}$ ($x = 0, 1, \\dots, n; q = 1-p$); Mean $\\mu = n p$; Variance $\\sigma^2 = n p q$; Standard deviation $\\sigma = \\sqrt{n p q}$; Skewness $\\beta_1 = \\frac{(q-p)^2}{n p q}$; Kurtosis $\\beta_2 = 3 + \\frac{1 - 6 p q}{n p q}$.",
      "Fitting a Binomial Distribution to Data: Expected frequencies calculated by $N \\times P(X = x)$; Initial parameter $p$ estimated from sample mean $\\bar{x} = n p \\implies p = \\bar{x} / n$; Recurrence relation for rapid frequency generation: $P(X = x+1) = \\frac{n - x}{x + 1} \\frac{p}{q} P(X = x)$.",
      "Poisson Probability Distribution: Model for rare events in large trials: $P(X = x) = \\frac{e^{-\\lambda} \\lambda^x}{x!}$ ($x = 0, 1, 2, \\dots$); Limiting distribution of Binomial as $n \\to \\infty, p \\to 0$ with $n p = \\lambda$; Mean and variance are identical $\\mu = \\sigma^2 = \\lambda$; Skewness $\\beta_1 = 1/\\lambda$; Kurtosis $\\beta_2 = 3 + 1/\\lambda$.",
      "Fitting a Poisson Distribution to Data: Expected frequencies $N \\times P(X = x)$ where $\\lambda$ is estimated by sample mean $\\bar{x}$; Recurrence formula: $P(X = x+1) = \\frac{\\lambda}{x + 1} P(X = x)$; Tested against observed counts using Chi-square goodness of fit.",
      "Normal Distribution Characteristics: Continuous bell-shaped distribution $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ with PDF $f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$; Total area under curve is 1; Symmetric around $x = \\mu$ with $\\text{Mean} = \\text{Median} = \\text{Mode} = \\mu$; Maximum ordinate at $x = \\mu$ equal to $\\frac{1}{\\sigma \\sqrt{2\\pi}}$; Inflection points at $\\mu \\pm \\sigma$.",
      "Standard Normal Curve Computations: Standard variable $Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$; Area property: $P(0 \\le Z \\le 1) \\approx 0.3413$, $P(0 \\le Z \\le 2) \\approx 0.4772$, $P(0 \\le Z \\le 3) \\approx 0.4987$; Normal approximation to Binomial with continuity correction factor of $\\pm 0.5$ when $n p \\ge 5$ and $n q \\ge 5$.",
      "Fitting a Normal Distribution to Grouped Data: Estimating parameters $\\hat{\\mu} = \\bar{x}$ and $\\hat{\\sigma} = s$; Converting class boundaries into standard $Z$-scores $z_i = \\frac{x_i - \\bar{x}}{s}$; Finding interval probabilities $\\Delta \\Phi(z) = \\Phi(z_{i+1}) - \\Phi(z_i)$; Multiplying by total frequency $N$ to yield expected theoretical frequencies.",
      "Exponential & Hypergeometric Distributions: Exponential distribution $f(t) = \\lambda e^{-\\lambda t}$ modeling waiting times between events with mean $1/\\lambda$; Hypergeometric distribution $P(X = k) = \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}}$ modeling quality control acceptance sampling without replacement.",
      "University Examination Strategy: Calculate Binomial probabilities for quality inspection pass/fail rates, fit Binomial distributions using recurrence relations, calculate Poisson probabilities for rare defects per unit area, fit Poisson distributions, convert raw scores to standard normal $Z$-scores, and evaluate normal tail probabilities using standard tables."
    ],
    "keyPoints": [
      "Binomial Distribution Variance: $\\sigma^2 = n p q$ ($q = 1-p$).",
      "Binomial Recurrence Relation: $P(x+1) = \\frac{n-x}{x+1} \\frac{p}{q} P(x)$.",
      "Poisson Mean and Variance Identity: $\\mu = \\sigma^2 = \\lambda$.",
      "Poisson Recurrence Relation: $P(x+1) = \\frac{\\lambda}{x+1} P(x)$.",
      "Poisson Zero-Event Probability: $P(0) = e^{-\\lambda}$.",
      "Normal Distribution PDF: $f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)$.",
      "Standard Normal Z-Transformation: $Z = \\frac{X - \\mu}{\\sigma}$.",
      "Continuity Correction: $P(X \\le k) \\approx P(X_{norm} \\le k + 0.5)$.",
      "Normal 95% Confidence Spread: $\\mu \\pm 1.96 \\sigma$.",
      "Exam Gold Tip: When approximating Binomial probabilities with Normal distribution, always apply continuity correction: replace discrete $X = k$ with interval $[k - 0.5, k + 0.5]$ before converting to $Z$."
    ]
  },
  "statistics & probability:::u3": {
    "highlights": [
      "Census vs Sample Survey: Complete enumeration (census) vs sample survey; Advantages of sampling: reduced cost, accelerated speed, greater scope, and higher operational accuracy; Destructive testing necessitates sampling (e.g., tensile strength, bulb life).",
      "Sampling and Non-Sampling Errors: Sampling error: error inherent in estimating population parameter from sample, decreases as sample size $n$ increases ($SE \\propto 1/\\sqrt{n}$); Non-sampling error: errors due to faulty questionnaire design, respondent bias, interviewer fraud, data entry errors; Can occur in both census and sample surveys.",
      "Probability Sampling Methods: (1) Simple Random Sampling with Replacement (SRSWR) and without Replacement (SRSWOR); (2) Stratified Random Sampling: population divided into non-overlapping homogeneous strata, samples drawn from each stratum proportionally ($n_i = n \\frac{N_i}{N}$); (3) Systematic Sampling: selecting every $k$-th item after random start; (4) Cluster Sampling: population divided into heterogeneous clusters, complete clusters sampled.",
      "Sampling Distribution and Standard Error: Sampling distribution is probability distribution of a sample statistic (mean, proportion, variance) across all possible samples of size $n$; Standard Error ($SE$) is standard deviation of sampling distribution; Measures precision of estimator: smaller $SE$ implies higher precision.",
      "Sampling Distribution of the Mean: Mean of sample means equals population mean: $E[\\bar{X}] = \\mu$; Standard error under SRSWOR: $SE(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}} \\sqrt{\\frac{N - n}{N - 1}}$; Finite Population Correction (FPC) factor $\\sqrt{\\frac{N - n}{N - 1}}$ applied when sample fraction $\\frac{n}{N} > 0.05$; As $N \\to \\infty$, FPC approaches $1$, yielding $SE = \\frac{\\sigma}{\\sqrt{n}}$.",
      "Central Limit Theorem (CLT) Application: If random samples of size $n \\ge 30$ drawn from any population with finite mean $\\mu$ and variance $\\sigma^2$, distribution of sample mean $\\bar{X}$ is approximately normal $\\mathcal{N}\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$; Enables statistical inference on non-normal populations.",
      "Sampling Distribution of Proportions: For sample proportion $p = \\frac{X}{n}$ drawn from population with proportion $P$: $E[p] = P$; Standard error: $SE(p) = \\sqrt{\\frac{P(1 - P)}{n}}$ for infinite population; For finite population: $SE(p) = \\sqrt{\\frac{P(1 - P)}{n}} \\sqrt{\\frac{N - n}{N - 1}}$.",
      "Sampling Distribution of Differences: (1) Difference between two independent sample means: $E[\\bar{X}_1 - \\bar{X}_2] = \\mu_1 - \\mu_2$, $SE(\\bar{X}_1 - \\bar{X}_2) = \\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}$; (2) Difference between two independent proportions: $E[p_1 - p_2] = P_1 - P_2$, $SE(p_1 - p_2) = \\sqrt{\\frac{P_1(1-P_1)}{n_1} + \\frac{P_2(1-P_2)}{n_2}}$.",
      "Sample Size Determination: Required sample size $n$ for estimating population mean within margin of error $E$ at $(1-\\alpha)$ confidence level: $n = \\left( \\frac{z_{\\alpha/2} \\sigma}{E} \\right)^2$; Required sample size for proportion: $n = \\frac{z_{\\alpha/2}^2 P(1-P)}{E^2}$ (taking $P = 0.5$ for most conservative maximum sample size).",
      "University Examination Strategy: Differentiate sampling vs non-sampling errors, compute standard errors for sample means with and without finite population correction factor, calculate probability of sample mean exceeding given thresholds using CLT, evaluate sample size requirements for given precision, and determine sampling errors for proportions."
    ],
    "keyPoints": [
      "Standard Error of Mean (Infinite): $SE(\\bar{X}) = \\frac{\\sigma}{\\sqrt{n}}$.",
      "Finite Population Correction (FPC): $\\sqrt{\\frac{N - n}{N - 1}}$.",
      "Standard Error of Proportion: $SE(p) = \\sqrt{\\frac{P(1 - P)}{n}}$.",
      "SE of Difference Between Means: $SE(\\bar{X}_1 - \\bar{X}_2) = \\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}$.",
      "SE of Difference Between Proportions: $SE(p_1 - p_2) = \\sqrt{\\frac{P_1 Q_1}{n_1} + \\frac{P_2 Q_2}{n_2}}$.",
      "Sample Size for Mean: $n = \\left(\\frac{z_{\\alpha/2} \\sigma}{E}\\right)^2$.",
      "Sample Size for Proportion (Conservative): $n = \\frac{z_{\\alpha/2}^2 (0.25)}{E^2}$.",
      "Stratified Proportional Allocation: $n_i = n \\frac{N_i}{N}$.",
      "Central Limit Cutoff: $n \\ge 30$ ensures asymptotic normality.",
      "Exam Gold Tip: Always check if sample fraction $n/N > 0.05$; if yes, multiply the standard error by the finite population correction factor $\\sqrt{\\frac{N-n}{N-1}}$, otherwise omit it."
    ]
  },
  "statistics & probability:::u4": {
    "highlights": [
      "Statistical Hypotheses and Decision Theory: Null hypothesis $H_0$ (statement of no effect, equality, or status quo) tested against Alternative hypothesis $H_1$ (statement of research interest); Two-tailed test ($H_1: \\theta \\ne \\theta_0$) vs One-tailed test (right-tailed $H_1: \\theta > \\theta_0$, left-tailed $H_1: \\theta < \\theta_0$).",
      "Errors in Hypothesis Testing: Type I error ($\\alpha$, significance level): rejecting true null hypothesis $H_0$ (producer's risk); Type II error ($\\beta$): failing to reject false null hypothesis $H_0$ (consumer's risk); Power of test: $1 - \\beta = P(\\text{Reject } H_0 \\mid H_0 \\text{ is false})$; Trade-off: decreasing $\\alpha$ increases $\\beta$ for fixed sample size $n$.",
      "Critical Regions and P-Value Approach: Critical value separates acceptance and rejection regions; Decision rule: reject $H_0$ if test statistic falls into critical region; P-value: probability of observing test statistic as extreme as, or more extreme than, sample value assuming $H_0$ true; Reject $H_0$ if $p\\text{-value} \\le \\alpha$.",
      "Large Sample Tests for Means (Z-Test): For $n \\ge 30$: (1) Single mean: $Z_{cal} = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}$ (use sample $s$ if $\\sigma$ unknown); (2) Difference of two means: $Z_{cal} = \\frac{(\\bar{x}_1 - \\bar{x}_2) - (\\mu_1 - \\mu_2)}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}$; Critical $Z$ at $5\\%$: $1.96$ (two-tailed), $1.645$ (one-tailed); at $1\\%$: $2.576$ (two-tailed), $2.33$ (one-tailed).",
      "Large Sample Tests for Proportions (Z-Test): (1) Single proportion: $Z_{cal} = \\frac{p - P_0}{\\sqrt{\\frac{P_0(1-P_0)}{n}}}$; (2) Difference of two proportions: $Z_{cal} = \\frac{p_1 - p_2}{\\sqrt{\\hat{P}\\hat{Q}\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}$ where pooled proportion $\\hat{P} = \\frac{n_1 p_1 + n_2 p_2}{n_1 + n_2}$.",
      "Small Sample Test for Mean (Student's t-Test): For normal population with unknown $\\sigma$ and $n < 30$: $t_{cal} = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}$ with degrees of freedom $\\nu = n-1$; Sample standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n-1}}$.",
      "Difference of Two Means (Two-Sample t-Test & Paired t-Test): (1) Independent samples: $t_{cal} = \\frac{\\bar{x}_1 - \\bar{x}_2}{s_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}}$ with $\\nu = n_1 + n_2 - 2$ and pooled variance $s_p^2 = \\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}$; (2) Paired $t$-test (dependent before-and-after samples): $t_{cal} = \\frac{\\bar{d}}{s_d / \\sqrt{n}}$ with $\\nu = n-1$ where $d_i = x_i - y_i$.",
      "Snedecor's F-Test for Equality of Two Variances: Testing $H_0: \\sigma_1^2 = \\sigma_2^2$ vs $H_1: \\sigma_1^2 \\ne \\sigma_2^2$; Test statistic $F_{cal} = \\frac{s_1^2}{s_2^2}$ (placing larger variance in numerator so $F \\ge 1$) with degrees of freedom $\\nu_1 = n_1 - 1, \\nu_2 = n_2 - 1$.",
      "Chi-Square Test ($\\chi^2$): (1) Goodness of fit: $\\chi^2 = \\sum_{i=1}^k \\frac{(O_i - E_i)^2}{E_i}$ with $\\nu = k - 1 - m$ (where $m$ is number of estimated parameters); (2) Contingency table test for independence of attributes: expected cell frequency $E_{ij} = \\frac{R_i \\times C_j}{N}$ with $\\nu = (r-1)(c-1)$; Condition: all $E_i \\ge 5$, apply Yates' continuity correction for $2 \\times 2$ table if needed.",
      "University Examination Strategy: Formulate formal $H_0$ and $H_1$ statements, select appropriate test based on sample size and parameter, execute large-sample $Z$-tests for means and proportions, apply two-sample and paired $t$-tests to clinical/engineering experiments, test variance equality via $F$-test, and perform $\\chi^2$ independence tests on contingency tables."
    ],
    "keyPoints": [
      "Type I & II Errors: $\\alpha = P(\\text{Reject } H_0 \\mid H_0 \\text{ true})$, $\\beta = P(\\text{Accept } H_0 \\mid H_0 \\text{ false})$.",
      "Power of Test: $\\text{Power} = 1 - \\beta$.",
      "Large Sample Single Mean Z: $Z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}$.",
      "Pooled Proportion Formula: $\\hat{P} = \\frac{n_1 p_1 + n_2 p_2}{n_1 + n_2}$.",
      "Small Sample Single Mean t: $t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}$ ($df = n-1$).",
      "Pooled Variance for t-Test: $s_p^2 = \\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}$.",
      "Paired t-Test Formula: $t = \\frac{\\bar{d}}{s_d / \\sqrt{n}}$ ($df = n-1$).",
      "F-Test Variance Ratio: $F = \\frac{s_1^2}{s_2^2}$ ($s_1^2 > s_2^2$).",
      "Chi-Square Statistic: $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$ ($df = (r-1)(c-1)$).",
      "Exam Gold Tip: For a $2 \\times 2$ contingency table with cells $a, b, c, d$, the Chi-Square statistic can be computed directly without expected cells using $\\chi^2 = \\frac{N(a d - b c)^2}{(a+b)(c+d)(a+c)(b+d)}$."
    ]
  },
  "statistics & probability:::u5": {
    "highlights": [
      "Bivariate Data and Correlation Concept: Bivariate data $(x_1, y_1), \\dots, (x_n, y_n)$; Correlation measures strength and direction of linear association between two quantitative variables; Types: positive, negative, zero, linear, and non-linear; Scatter plot visualization.",
      "Karl Pearson's Coefficient of Linear Correlation: Defined as $r = \\frac{\\text{Cov}(X,Y)}{\\sigma_x \\sigma_y} = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum (x_i - \\bar{x})^2 \\sum (y_i - \\bar{y})^2}}$; Computational formula: $r = \\frac{N \\sum x y - \\sum x \\sum y}{\\sqrt{[N \\sum x^2 - (\\sum x)^2][N \\sum y^2 - (\\sum y)^2]}}$.",
      "Properties of Pearson's Correlation Coefficient: (1) Strictly bounded $-1 \\le r \\le +1$; $r = +1$ (perfect positive linear association), $r = -1$ (perfect negative linear association), $r = 0$ (no linear correlation); (2) Independent of change of origin and scale: $u = \\frac{x - a}{h}, v = \\frac{y - b}{k} \\implies r_{uv} = r_{xy}$; (3) Symmetric: $r_{xy} = r_{yx}$.",
      "Spearman's Rank Correlation Coefficient: Non-parametric measure based on ranks: $\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$ where $d_i = R(x_i) - R(y_i)$ is difference between paired ranks; Tie correction factor: add $\\sum \\frac{m(m^2-1)}{12}$ to $\\sum d_i^2$ for tied rank groups of size $m$.",
      "Concept of Regression: Regression establishes quantitative mathematical functional relationship between independent (predictor) variable $X$ and dependent (response) variable $Y$; Enables estimation and forecasting of response given predictor values.",
      "Linear Regression Equations: Two distinct regression lines: (1) Regression line of $Y$ on $X$: $y - \\bar{y} = b_{yx} (x - \\bar{x})$; (2) Regression line of $X$ on $Y$: $x - \\bar{x} = b_{xy} (y - \\bar{y})$; Regression lines intersect precisely at point of sample means $(\\bar{x}, \\bar{y})$.",
      "Regression Coefficients and Properties: $b_{yx} = r \\frac{\\sigma_y}{\\sigma_x} = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sum (x - \\bar{x})^2}$; $b_{xy} = r \\frac{\\sigma_x}{\\sigma_y} = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sum (y - \\bar{y})^2}$; Properties: (1) Correlation coefficient is geometric mean of regression coefficients: $r = \\pm \\sqrt{b_{yx} b_{xy}}$; (2) Both coefficients and $r$ must share identical algebraic sign; (3) If one coefficient exceeds $1$, other must be less than $1$ ($|b_{yx} b_{xy}| = r^2 \\le 1$); (4) Arithmetic mean of regression coefficients is greater than or equal to correlation coefficient: $\\frac{b_{yx} + b_{xy}}{2} \\ge r$.",
      "Angle Between Two Regression Lines: Acute angle $\\theta$ between regression lines: $\\tan\\theta = \\left| \\frac{1 - r^2}{r} \\left( \\frac{\\sigma_x \\sigma_y}{\\sigma_x^2 + \\sigma_y^2} \\right) \\right|$; If $r = \\pm 1$, $\\tan\\theta = 0 \\implies \\theta = 0$ (lines coincide); If $r = 0$, $\\tan\\theta = \\infty \\implies \\theta = 90^\\circ$ (lines mutually perpendicular).",
      "Standard Error of Estimate and Coefficient of Determination: Standard error of estimate: $s_{yx} = \\sigma_y \\sqrt{1 - r^2}$ and $s_{xy} = \\sigma_x \\sqrt{1 - r^2}$; Measures scatter of observed points around regression line; Coefficient of determination $r^2$: proportion of total variance in dependent variable explained by linear relationship with independent variable ($r^2 = \\frac{SSR}{SST}$).",
      "University Examination Strategy: Calculate Karl Pearson's correlation coefficient from raw and grouped data, calculate Spearman's rank correlation for contest judges with and without ties, compute regression coefficients $b_{yx}$ and $b_{xy}$, construct both regression lines, estimate $y$ for given $x$, and evaluate the angle between regression lines."
    ],
    "keyPoints": [
      "Pearson Correlation Formula: $r = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sqrt{\\sum (x - \\bar{x})^2 \\sum (y - \\bar{y})^2}}$.",
      "Spearman Rank Correlation: $\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$.",
      "Regression Line of Y on X: $y - \\bar{y} = b_{yx} (x - \\bar{x})$.",
      "Regression Line of X on Y: $x - \\bar{x} = b_{xy} (y - \\bar{y})$.",
      "Regression Coefficient $b_{yx}$: $b_{yx} = r \\frac{\\sigma_y}{\\sigma_x}$.",
      "Regression Coefficient $b_{xy}$: $b_{xy} = r \\frac{\\sigma_x}{\\sigma_y}$.",
      "Correlation Geometric Mean Relation: $r = \\pm \\sqrt{b_{yx} b_{xy}}$.",
      "Regression Line Intersection: Always intersects at mean point $(\\bar{x}, \\bar{y})$.",
      "Angle Between Regression Lines: $\\tan\\theta = \\left| \\frac{1 - r^2}{r} \\left( \\frac{\\sigma_x \\sigma_y}{\\sigma_x^2 + \\sigma_y^2} \\right) \\right|$.",
      "Exam Gold Tip: Both regression coefficients $b_{yx}$ and $b_{xy}$ must always have the same sign as $r$; if exam calculations yield opposite signs, a sign error was made in covariance."
    ]
  },
  "python for data science:::u1": {
    "highlights": [
      "Python Execution Model & Bytecode: Interpreted, dynamic, high-level language; Source code `.py` compiled by CPython into platform-independent bytecode `.pyc`, executed on Python Virtual Machine (PVM); Dynamic typing and automated reference counting garbage collection.",
      "Built-in Data Structures & Mutability: Immutable types (int, float, bool, str, tuple, frozenset) vs Mutable types (list, dict, set); Object identity checked via `id()` and `is` operator; Shallow copy (`copy.copy()`) vs Deep copy (`copy.deepcopy()`).",
      "List Comprehensions & Generator Expressions: List comprehension `[x**2 for x in seq if x % 2 == 0]` builds full list in memory; Generator expression `(x**2 for x in seq)` returns lazy iterator evaluated on demand using `yield`, minimizing memory footprint for big data.",
      "Functions, Lambda Expressions & Closures: First-class functions; Keyword arguments, `*args` (positional tuple unpacking), and `**kwargs` (keyword dictionary unpacking); Anonymous functions `lambda x, y: x + y`; Closures retain access to enclosing lexical scope.",
      "Decorators & Functional Programming Tools: Decorators wrap functions using `@decorator_name` syntax based on closures; Built-in functional primitives: `map()`, `filter()`, `reduce()` (from `functools`), and `zip()` for parallel sequence iteration.",
      "Object-Oriented Programming in Python: Classes and instances; Magic / Dunder methods (`__init__`, `__str__`, `__repr__`, `__call__`, `__getitem__`); Single and multiple inheritance; Method Resolution Order (MRO) evaluated via C3 Linearization algorithm.",
      "Exception Handling & Context Managers: Robust error handling using `try...except...else...finally` blocks; Custom exception classes inheriting from `Exception`; Context managers implementing `__enter__` and `__exit__` accessed via `with open(...) as f:` syntax.",
      "File I/O & Serialization: Reading/writing text and binary streams; JSON serialization (`json.dumps()`, `json.loads()`); Python object serialization via `pickle` module (security warnings with untrusted input); CSV file parsing using standard `csv` library.",
      "Standard Library Modules for Data Science: `math` and `cmath` for scientific computing, `os` and `sys` for environment manipulation, `random` for pseudo-random number generation, and `re` for regular expression pattern matching and tokenization.",
      "University Examination Strategy: Explain Method Resolution Order (MRO) in multiple inheritance using C3 linearization, demonstrate the performance and memory difference between list comprehensions and generators, and construct a custom context manager class."
    ],
    "keyPoints": [
      "Memory Id Operator: `a is b` tests whether `id(a) == id(b)` (identical memory addresses).",
      "List Comprehension Syntax: `[expr for item in iterable if condition]`.",
      "Lazy Generator Function: Uses `yield` keyword to return an iterable generator without memory allocation.",
      "Positional Unpacking: `*args` collects arbitrary extra positional arguments as a tuple.",
      "Keyword Unpacking: `**kwargs` collects arbitrary extra keyword arguments as a dictionary.",
      "C3 Linearization (MRO): Determines method lookup order in multiple inheritance (`Class.mro()`).",
      "Context Manager Protocol: Requires implementation of `__enter__()` and `__exit__()` dunder methods.",
      "Deep Copy Mechanism: `copy.deepcopy()` recursively duplicates nested compound objects.",
      "Lambda Function Limitation: Restricted syntactically to a single logical expression.",
      "Exam Scoring Tip: Default mutable arguments in Python functions (e.g. `def f(x=[])`) are evaluated once at function definition time, leading to shared state bugs."
    ]
  },
  "python for data science:::u2": {
    "highlights": [
      "NumPy N-Dimensional Array (`ndarray`): Homogeneous, contiguous memory buffer; Strides describe byte steps to traverse dimensions; Data types (`dtype`); Memory locality dramatically outperforms Python lists via vectorized SIMD operations.",
      "Array Creation & Dimensional Reshaping: `np.zeros()`, `np.ones()`, `np.arange()`, `np.linspace()`, `np.random.randn()`; Reshaping via `.reshape()` (returns view), `.flatten()` (returns deep copy), and `.ravel()` (returns contiguous flattened view).",
      "Vectorized Operations & Universal Functions (`ufunc`): Element-wise arithmetic operations performed at compiled C speed; Universal mathematical functions (`np.sin()`, `np.exp()`, `np.sqrt()`, `np.log()`) bypassing Python interpreter loops.",
      "NumPy Broadcasting Rules: Allows arithmetic between arrays of different shapes; Two dimensions are compatible when: (1) They are equal, or (2) One of them is 1; Arrays stretched along unit dimensions without physical memory replication.",
      "Indexing, Slicing & Boolean Masking: Multi-dimensional slicing `A[1:4, ::2]`; Fancy indexing using integer arrays; Boolean masking `A[A > 0]` for conditional element filtering and replacement.",
      "Linear Algebra Operations in NumPy (`np.linalg`): Matrix multiplication (`@` operator or `np.dot()`); Matrix inversion (`np.linalg.inv()`), determinant (`np.linalg.det()`), eigenvalues and eigenvectors (`np.linalg.eig()`), and Singular Value Decomposition (`np.linalg.svd()`).",
      "Pandas Series & DataFrame Architecture: Series (1D labeled homogeneous array) and DataFrame (2D tabular labeled heterogeneous data structure with row index and column names); Built on top of NumPy ndarrays.",
      "Data Selection in Pandas (`loc` vs `iloc`): Label-based indexing `df.loc[row_label, col_label]` (inclusive of endpoints) vs Purely integer position-based indexing `df.iloc[row_pos, col_pos]` (exclusive of upper endpoint).",
      "Aggregation & GroupBy Split-Apply-Combine: `df.groupby('col').agg({'val': ['mean', 'std', 'sum']})`; Pivot tables (`df.pivot_table()`), crosstabs, and melting (`pd.melt()`) for tidy data transformation.",
      "University Examination Strategy: Formulate NumPy broadcasting compatibility rules for contrasting array shapes, demonstrate DataFrame merging and grouping operations, and calculate matrix eigenvalues using `np.linalg.eig`."
    ],
    "keyPoints": [
      "NumPy Broadcasting Condition: Two dimensions are compatible iff $d_1 == d_2$ or either $d_1 == 1$ or $d_2 == 1$.",
      "Matrix Multiplication Operator: `@` operator (equivalent to `np.matmul(A, B)`).",
      "Pandas `loc` Rule: Selects by index/column labels; Slice `loc['a':'c']` includes end label `'c'`.",
      "Pandas `iloc` Rule: Selects by integer position; Slice `iloc[0:3]` includes rows 0, 1, 2.",
      "View vs Copy: Slicing NumPy arrays creates views; Slicing Python lists creates copies.",
      "Linear Algebra SVD: `U, S, Vh = np.linalg.svd(A)` (decomposes $A = U \\Sigma V^T$).",
      "DataFrame Merge Types: `pd.merge(df1, df2, on='key', how='inner'|'left'|'right'|'outer')`.",
      "Array Axis Convention: `axis=0` operates along columns (down rows); `axis=1` operates along rows (across columns).",
      "NaN Representation: Represented as IEEE 754 floating point constant `np.nan` (note: `np.nan != np.nan`).",
      "Exam Scoring Tip: To test for NaN in NumPy/Pandas, never use `x == np.nan`; always use `np.isnan(x)` or `df.isna()`."
    ]
  },
  "python for data science:::u3": {
    "highlights": [
      "Matplotlib Architecture: Three-layer design: Backend layer (drawing to screen/file e.g. Agg, PDF), Artist layer (Figure, Axes, Axis, Line2D, Text), and Scripting layer (`matplotlib.pyplot` interface).",
      "Object-Oriented Matplotlib Interface: Creating figure and subplot grids: `fig, ax = plt.subplots(nrows=2, ncols=2, figsize=(10, 8))`; Manipulating individual axes objects directly: `ax.plot()`, `ax.set_title()`, `ax.set_xlabel()`, `ax.grid()`, and `fig.tight_layout()`; Superior to stateful procedural scripting.",
      "Common Statistical Chart Types: Scatter plots (variable correlation, `plt.scatter()`), Line plots (time-series trends), Bar charts (`plt.bar()` for categorical counts), Histograms (`plt.hist()` for probability density and skewness), and Box plots (`plt.boxplot()` for quartile dispersion).",
      "Box Plots & Outlier Detection: Five-number summary: Minimum, First Quartile ($Q_1$), Median ($Q_2$), Third Quartile ($Q_3$), and Maximum; Interquartile Range $IQR = Q_3 - Q_1$; Outlier bounds: values lying outside $[Q_1 - 1.5 IQR, Q_3 + 1.5 IQR]$.",
      "Seaborn Statistical Data Visualization: Built on top of Matplotlib with aesthetic defaults and direct Pandas DataFrame integration; Distribution plots (`sns.histplot()`, `sns.kdeplot()` for kernel density estimation), Categorical plots (`sns.boxplot()`, `sns.violinplot()`), and Regression plots (`sns.regplot()`).",
      "Multi-Plot Grids & Pairwise Relationships: `sns.pairplot(df, hue='target')` displays pairwise scatter plots on off-diagonals and univariate KDEs on diagonal; FacetGrid for multi-panel conditional subsets based on categorical factors.",
      "Correlation Heatmaps: `sns.heatmap(df.corr(), annot=True, cmap='coolwarm', vmin=-1, vmax=1)`; Displays Pearson correlation coefficients $r_{xy} = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum (x_i - \\bar{x})^2 \\sum (y_i - \\bar{y})^2}}$ to identify multicollinearity.",
      "Interactive Visualizations with Plotly: Web-based interactive charts rendered via D3.js and WebGL; Zooming, panning, tooltips on hover; Plotly Express (`px.scatter()`, `px.choropleth()`); Exportable as standalone interactive HTML.",
      "Principles of Effective Visual Design & Edward Tufte Guidelines: Maximize Data-to-Ink ratio; Avoid chart junk, misleading 3D perspectives, and truncated axes; Choose colorblind-friendly palettes (viridis, cividis) instead of rainbow colormaps.",
      "University Examination Strategy: Construct a 2x2 subplot layout using Matplotlib's object-oriented API, compute the five-number summary and IQR outlier thresholds for a boxplot, and interpret correlation heatmaps."
    ],
    "keyPoints": [
      "Interquartile Range: $IQR = Q_3 - Q_1$.",
      "Lower Outlier Threshold: $\\text{Lower Bound} = Q_1 - 1.5 \\times IQR$.",
      "Upper Outlier Threshold: $\\text{Upper Bound} = Q_3 + 1.5 \\times IQR$.",
      "Pearson Correlation Formula: $r = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sqrt{\\sum(x - \\bar{x})^2 \\sum(y - \\bar{y})^2}}$.",
      "Matplotlib OO Subplot: `fig, axes = plt.subplots(2, 2)` (returns Figure and 2D NumPy array of Axes).",
      "Data-to-Ink Ratio: $\\text{Ratio} = \\frac{\\text{Data-Ink}}{\\text{Total Ink used in Graphic}}$ (maximize for clarity).",
      "Violin Plot Advantage: Combines box plot quartiles with mirrored rotated Kernel Density Estimation curves.",
      "Seaborn Hue Parameter: Colors data points based on categorical variable for group comparison.",
      "Histogram Bin Selection: Freedman-Diaconis rule for bin width: $h = 2 \\times IQR \\times n^{-1/3}$.",
      "Exam Scoring Tip: In Matplotlib's object-oriented API, use `ax.set_title()` and `ax.set_xlabel()`, whereas in the pyplot scripting API you use `plt.title()` and `plt.xlabel()`."
    ]
  },
  "python for data science:::u4": {
    "highlights": [
      "Data Quality Dimensions: Completeness, consistency, validity, accuracy, and uniqueness; Garbage In, Garbage Out (GIGO) principle in machine learning pipelines.",
      "Missing Data Mechanisms (Rubin's Classification): Missing Completely at Random (MCAR, missingness independent of observed and unobserved data), Missing at Random (MAR, missingness depends on observed variables), and Missing Not at Random (MNAR, missingness depends on unobserved values).",
      "Missing Data Handling in Pandas: Detection (`df.isna().sum()`); Listwise deletion (`df.dropna(how='any')`, risks substantial sample size reduction and bias); Pairwise deletion; Fill methods (`df.fillna()`, forward-fill `ffill`, backward-fill `bfill`).",
      "Imputation Strategies: Univariate imputation (Mean/Median for continuous numerical skewed data, Mode for categorical); Multivariate imputation using IterativeImputer (MICE - Multivariate Imputation by Chained Equations) or K-Nearest Neighbors (`KNNImputer`).",
      "Handling Duplicate Records: Identification (`df.duplicated(subset=[...])`); Dropping duplicate rows (`df.drop_duplicates(keep='first'|'last')`) to prevent data leakage and inflated sample counts.",
      "Data Type Conversion & Formatting: Type casting (`df['col'].astype('float32')`, `astype('category')` for memory reduction); DateTime parsing (`pd.to_datetime()`, extracting year, month, day, dayofweek); String cleaning (`df['col'].str.strip().str.lower().str.replace()`).",
      "Outlier Detection & Treatment: Z-score method ($|z| = \\frac{|x - \\mu|}{\\sigma} > 3.0$, valid for normal Gaussian distributions); IQR method ($1.5 \\times IQR$ rule, non-parametric); Treatment: Trimming (removal), Winsorization (capping extreme values at 1st and 99th percentiles), or log transformation.",
      "Handling Inconsistent Categorical Data: String fuzzy matching (Levenshtein edit distance using `fuzzywuzzy` / `thefuzz`); Standardizing categorical levels; Encoding invalid domain values as NaN.",
      "Data Transformation & Feature Scaling: Min-Max Normalization ($x' = \\frac{x - x_{min}}{x_{max} - x_{min}} \\in [0, 1]$); Z-score Standardization ($z = \\frac{x - \\mu}{\\sigma}$, zero mean and unit variance); Logarithmic transformation ($y = \\ln(x + 1)$) and Box-Cox power transform to eliminate right-skewness.",
      "University Examination Strategy: Differentiate MCAR, MAR, and MNAR missing data mechanisms, apply Min-Max normalization and Z-score standardization formulas to a numerical vector, and explain Winsorization."
    ],
    "keyPoints": [
      "Min-Max Normalization Formula: $x' = \\frac{x - x_{\\text{min}}}{x_{\\text{max}} - x_{\\text{min}}} \\in [0, 1]$.",
      "Z-Score Standardization: $z = \\frac{x - \\mu}{\\sigma}$.",
      "Z-Score Outlier Bound: Flagged as outlier when $|z| > 3.0$.",
      "Log Transformation: $y = \\ln(x + 1)$ (stabilizes variance and converts multiplicative skewness to additive).",
      "Box-Cox Transformation: $y^{(\\lambda)} = \\frac{x^\\lambda - 1}{\\lambda}$ for $\\lambda \\ne 0$, and $\\ln x$ for $\\lambda = 0$.",
      "MCAR Property: Probability of missing data is completely unrelated to any attribute values.",
      "Winsorization Technique: Replaces extreme outlier values with predefined percentile caps (e.g. 5th and 95th).",
      "KNN Imputation: Replaces missing entry with weighted average of $k$ closest neighbors in Euclidean feature space.",
      "Pandas String Accessor: `.str` enables vectorized string operations across entire series.",
      "Exam Scoring Tip: Feature scaling parameters (mean, standard deviation, min, max) must be fitted strictly on training data and then applied to transform test data to prevent data leakage."
    ]
  },
  "python for data science:::u5": {
    "highlights": [
      "Exploratory Data Analysis (EDA) Philosophy: John Tukey's approach to data analysis; Uncovering underlying data structures, detecting anomalies, testing hypotheses, and selecting appropriate machine learning model architectures through statistical summaries and graphical displays.",
      "Univariate Analysis: Analyzing single variables; Numerical variables: Mean, median, mode, variance, standard deviation, skewness (Fisher-Pearson coefficient $g_1 = \\frac{m_3}{m_2^{3/2}}$), and kurtosis ($g_2 = \\frac{m_4}{m_2^2} - 3$); Categorical variables: Frequency tables, bar charts, and Pareto charts.",
      "Bivariate Analysis: Relationships between two variables: Continuous-Continuous (scatter plot, Pearson correlation $r$, Spearman rank correlation $\\rho$ for monotonic non-linear relations); Categorical-Continuous (grouped box plots, ANOVA F-test); Categorical-Categorical (cross-tabulation, Chi-square test of independence $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$).",
      "Multivariate Analysis: Relationships among $\\ge 3$ variables simultaneously; Correlation matrices, pair plots, 3D scatter plots, and dimensionality reduction projections; Parallel coordinates plots for multi-attribute clusters.",
      "Feature Engineering & Interaction Features: Constructing new domain-relevant features; Polynomial features ($x_1^2, x_1 x_2$), ratio features (e.g. debt-to-income), date-time feature extraction (hour, day of week, is_weekend), and binning/discretization (`pd.cut()`, `pd.qcut()`).",
      "Encoding Categorical Variables: One-Hot Encoding (`pd.get_dummies()`, `OneHotEncoder`, creates $k-1$ binary indicator columns to prevent dummy variable trap multicollinearity) vs Ordinal / Label Encoding (preserves intrinsic hierarchical ranking, e.g. low=1, medium=2, high=3) vs Target / Mean Encoding.",
      "Dimensionality Reduction via PCA (Principal Component Analysis): Unsupervised orthogonal linear transformation; Computes covariance matrix $\\Sigma = \\frac{1}{n} X^T X$; Solves eigenvalue problem $\\Sigma v = \\lambda v$; Principal components align along directions of maximum variance; Explained variance ratio $EVR_i = \\lambda_i / \\sum \\lambda_k$.",
      "Handling Class Imbalance in Datasets: Severe majority class dominance (e.g. 99:1 in fraud detection); Techniques: Random undersampling, Random oversampling, Synthetic Minority Over-sampling Technique (SMOTE, creates synthetic points along line segments connecting $k$-nearest minority neighbors), and Class-weighted loss functions.",
      "Automated EDA Libraries: Profiling tools generating comprehensive HTML analytical dashboards in single line of code: `ydata-profiling` (formerly `pandas-profiling`), `sweetviz`, and `dtale`.",
      "University Examination Strategy: Calculate the explained variance ratio from PCA eigenvalues, determine the Chi-square statistic for a 2x2 contingency table, and compare One-Hot vs Ordinal encoding trade-offs."
    ],
    "keyPoints": [
      "Sample Skewness Formula: $g_1 = \\frac{n}{(n-1)(n-2)} \\sum \\left(\\frac{x_i - \\bar{x}}{s}\\right)^3$ ($>0$ right-skewed, $<0$ left-skewed).",
      "Sample Excess Kurtosis: $g_2 = \\frac{m_4}{s^4} - 3$ ($g_2 > 0$ leptokurtic sharp peak, $g_2 < 0$ platykurtic flat).",
      "Chi-Square Test Statistic: $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$ (degrees of freedom $(r - 1)(c - 1)$).",
      "PCA Covariance Matrix: $\\Sigma = \\frac{1}{n-1} X^T X$ (assuming centered data $\\bar{X} = 0$).",
      "PCA Explained Variance Ratio: $EVR_k = \\frac{\\lambda_k}{\\sum_{i=1}^p \\lambda_i}$.",
      "Dummy Variable Trap Rule: For a categorical variable with $k$ unique levels, create strictly $k - 1$ indicator columns.",
      "Spearman Rank Correlation: $\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$ (measures monotonic association).",
      "SMOTE Interpolation Formula: $x_{\\text{new}} = x_i + \\lambda (x_{zi} - x_i)$, where $\\lambda \\in [0, 1]$.",
      "Pareto 80/20 Rule: Often $80\\%$ of outcomes derive from $20\\%$ of categorical causes.",
      "Exam Scoring Tip: Accuracy is an invalid performance metric for heavily imbalanced classification datasets; always evaluate Precision, Recall, F1-score, and Area Under ROC Curve (AUC-ROC)."
    ]
  },
  "aerospace materials:::u1": {
    "highlights": [
      "Aerospace Material Selection Criteria: High strength-to-weight ratio (specific strength $\\sigma_y / \\rho$), high specific modulus ($E / \\rho$), fracture toughness ($K_{IC}$), fatigue crack growth resistance, and corrosion resistance under extreme atmospheric conditions.",
      "Aluminum-Lithium (Al-Li) Alloys: Addition of each $1\\text{ wt}\\%$ lithium reduces density by $3\\%$ and increases elastic modulus by $6\\%$; Third-generation Al-Cu-Li alloys (AA2195, AA2050) used extensively in launch vehicles (SpaceX Falcon 9, SLS) and aircraft wing skins.",
      "Titanium Alloys in Aerospace: Polymorphism: $\\alpha$ phase (HCP, stable $<882^\\circ\\text{C}$) and $\\beta$ phase (BCC, stable $>882^\\circ\\text{C}$); $\\alpha+\\beta$ alloy Ti-6Al-4V (Grade 5) provides excellent creep resistance and strength up to $400^\\circ\\text{C}$ in gas turbine compressor disks.",
      "Nickel-Based Superalloys: Inconel 718, Waspaloy, and René 80; Microstructure consisting of coherent FCC $\\gamma'$ ($Ni_3(Al, Ti)$) and $\\gamma''$ ($Ni_3Nb$) precipitate phases resistant to dislocation shearing at temperatures $>1000^\\circ\\text{C}$.",
      "Single-Crystal Turbine Blade Technology: Directional solidification eliminating all transverse and longitudinal grain boundaries; Eliminates high-temperature grain boundary sliding and creep cavitation in modern turbofan high-pressure turbine stages.",
      "Thermal Barrier Coatings (TBC): Multi-layer system: Superalloy substrate + Metallic bond coat (MCrAlY) + Thermally grown oxide (TGO, $\\alpha-Al_2O_3$) + Yttria-stabilized zirconia (YSZ) ceramic top coat; Reduces metal temperature by $100-150^\\circ\\text{C}$.",
      "High-Strength Aerospace Steels: Maraging steels ($18\\text{ wt}\\%$ Ni, Co, Mo, Ti, $<0.03\\%\\text{ C}$) achieving yield strength $>2000\\text{ MPa}$ via intermetallic precipitation; Ultra-high strength 300M steel used for heavy landing gear assemblies.",
      "Environmental Degradation & Stress Corrosion Cracking (SCC): Synergistic failure under sustained tensile stress in corrosive marine chloride environments; Exfoliation corrosion in 7xxx series aluminum alloys and hot corrosion (sulfidation) in turbine stages.",
      "Beryllium & Magnesium Alloys: Beryllium exhibits exceptional specific modulus ($E/\\rho \\approx 6 \\times$ steel) for satellite optical benches; Magnesium alloys used in non-structural transmission casings despite flammability hazards.",
      "University Examination Strategy: Compare mechanical properties of Ti-6Al-4V vs Al 7075-T6, detail the microstructural hardening mechanism of $\\gamma'$ in nickel superalloys, and sketch the layered architecture of a Thermal Barrier Coating."
    ],
    "keyPoints": [
      "Specific Strength Index: $\\frac{\\sigma_y}{\\rho}$ in $\\text{kN}\\cdot\\text{m/kg}$.",
      "Specific Modulus Index: $\\frac{E}{\\rho}$ (governs acoustic velocity and aeroelastic flutter stiffness).",
      "Ti-6Al-4V Phase Balance: $6\\%\\text{ Al}$ stabilizes $\\alpha$ phase; $4\\%\\text{ V}$ stabilizes $\\beta$ phase.",
      "Al-Li Density Benefit: $1\\%\\text{ Li}$ reduces density by $3\\%$ and raises modulus by $6\\%$.",
      "Superalloy $\\gamma'$ Hardening Phase: Coherent intermetallic compound $Ni_3(Al, Ti)$ (ordered $L1_2$ crystal structure).",
      "Superalloy $\\gamma''$ Hardening Phase: Body-Centered Tetragonal $Ni_3Nb$ ($D0_{22}$ structure in Inconel 718).",
      "Single Crystal Advantage: Eliminates grain boundaries entirely, preventing high-temperature creep void formation.",
      "YSZ Ceramic Composition: $7-8\\text{ wt}\\%$ $Y_2O_3$ stabilized Zirconia ($ZrO_2$) providing thermal insulation.",
      "Maraging Steel Carbon Content: Ultra-low carbon ($<0.03\\%\\text{ C}$); Hardening derives purely from intermetallic precipitation during aging.",
      "Exam Scoring Tip: Inconel 718 derives primary precipitation strength from $\\gamma''$ ($Ni_3Nb$) rather than $\\gamma'$."
    ]
  },
  "aerospace materials:::u2": {
    "highlights": [
      "Carbon Fiber Reinforced Polymers (CFRP): Pre-impregnated tapes (prepregs) of PAN-based high-strength (T300, T800) or high-modulus (M40J) carbon fibers in toughened epoxy resin; Forms $>50\\%$ of modern airliner airframes (Boeing 787 Dreamliner, Airbus A350).",
      "Polymer Matrix Systems for Aerospace: Aerospace-grade diglycidyl ether of bisphenol A (DGEBA) and tetraglycidyl methylene dianiline (TGMDA) epoxies cured with diamines; High glass transition temperature ($T_g > 180^\\circ\\text{C}$); High-temperature bismaleimides ($T_g > 250^\\circ\\text{C}$).",
      "Anisotropic Elasticity & Classical Laminate Theory (CLT): Lamina stress-strain constitutive relation $\\{\\sigma\\} = [Q] \\{\\varepsilon\\}$; In-plane coordinate transformation matrix $[T]$; Laminate stiffness matrices $[A]$ (extensional), $[B]$ (coupling), and $[D]$ (bending).",
      "Laminate Stacking Sequence Design: Symmetric laminates eliminate extension-bending coupling ($[B] = [0]$); Balanced laminates eliminate extension-shear coupling ($A_{16} = A_{26} = 0$); Quasi-isotropic layups ($[0/\\pm 45/90]_s$) provide isotropic in-plane stiffness.",
      "Failure Criteria for Aerospace Composites: Maximum Stress, Maximum Strain, Tsai-Hill quadratic criterion, and Tsai-Wu tensor polynomial criterion $\\sum F_i \\sigma_i + \\sum F_{ij} \\sigma_i \\sigma_j \\le 1$; Hashin 3D criteria separating fiber and matrix failure modes.",
      "Damage Tolerance & Delamination Mechanics: Interlaminar fracture toughness: Mode I (opening, Double Cantilever Beam DCB test $G_{IC}$), Mode II (forward shear, End Notched Flexure ENF test $G_{IIC}$), and Mode III (anti-plane shear).",
      "Impact Resistance & Barely Visible Impact Damage (BVID): Low-velocity tool drop or bird strike causing subsurface internal delaminations without exterior surface puncture; Causes up to $60\\%$ reduction in Compression After Impact (CAI) strength.",
      "Sandwich Core Structures: Lightweight honeycomb cores (Nomex aramid paper, aluminum foil) and polymethacrylimide (PMI) Rohacell foam; High bending stiffness without added weight ($D \\propto h^3$); Debonding and core crushing failure modes.",
      "Aerospace Manufacturing Processes: Automated Tape Laying (ATL), Automated Fiber Placement (AFP), Autoclave curing under $7\\text{ bar}$ pressure and $180^\\circ\\text{C}$, and Out-of-Autoclave (OOA) vacuum bag resin infusion.",
      "University Examination Strategy: Formulate the $[A], [B], [D]$ matrices of Classical Laminate Theory, evaluate the Tsai-Hill failure criterion for an off-axis lamina, and describe the DCB Mode I test for $G_{IC}$."
    ],
    "keyPoints": [
      "Tsai-Hill Failure Criterion: $\\frac{\\sigma_1^2}{X^2} - \\frac{\\sigma_1 \\sigma_2}{X^2} + \\frac{\\sigma_2^2}{Y^2} + \\frac{\\tau_{12}^2}{S^2} = 1$.",
      "Laminate Extensional Stiffness: $A_{ij} = \\sum_{k=1}^N (\\bar{Q}_{ij})_k (z_k - z_{k-1})$.",
      "Laminate Coupling Stiffness: $B_{ij} = \\frac{1}{2} \\sum_{k=1}^N (\\bar{Q}_{ij})_k (z_k^2 - z_{k-1}^2)$ ($B_{ij} = 0$ for symmetric layups).",
      "Laminate Bending Stiffness: $D_{ij} = \\frac{1}{3} \\sum_{k=1}^N (\\bar{Q}_{ij})_k (z_k^3 - z_{k-1}^3)$.",
      "Mode I Strain Energy Release Rate: $G_{IC} = \\frac{3 P \\delta}{2 b a}$ (DCB test formula).",
      "Quasi-Isotropic Fiber Orientation: Equal fiber proportions in $0^\\circ, +45^\\circ, -45^\\circ, 90^\\circ$ plies.",
      "Honeycomb Sandwich Bending Modulus: Increases cubically with core thickness ($I \\propto d^2 t_f$).",
      "Prepreg Storage Condition: Kept at $-18^\\circ\\text{C}$ freezer storage to prevent premature resin cross-linking.",
      "Autoclave Pressure Function: Compresses plies, eliminates volatile gas voids, and achieves $V_f \\approx 60\\%$.",
      "Exam Scoring Tip: Symmetric laminate stacking ensures the $[B]$ matrix is identically zero, preventing unwanted out-of-plane warping during temperature changes."
    ]
  },
  "aerospace materials:::u3": {
    "highlights": [
      "Ultra-High Temperature Ceramics (UHTCs): Transition metal diborides, carbides, and nitrides ($ZrB_2, HfB_2, ZrC, HfC, TaC$); Melting temperatures exceeding $3000^\\circ\\text{C}$; Used for hypersonic atmospheric re-entry sharp leading edges and rocket throat inserts.",
      "Silicon Carbide (SiC) Continuous Fiber Composites: $SiC/SiC$ ceramic matrix composites manufactured by Chemical Vapor Infiltration (CVI) or Melt Infiltration (MI); Capable of uncooled operation at $1200-1300^\\circ\\text{C}$ in jet engine combustor liners and turbine shrouds.",
      "Oxidation Resistance & Passivation Mechanisms: Formation of protective self-healing silica ($SiO_2$) glass surface films in SiC and $ZrB_2-SiC$ composites; Active vs passive oxidation regimes dictated by local oxygen partial pressure $P_{O_2}$.",
      "Ceramic Radome Materials: Fused silica ($SiO_2$), pyroceram, and silicon nitride ($Si_3N_4$); High electromagnetic transparency, low dielectric constant ($\\varepsilon_r < 4$), low dielectric loss tangent ($\\tan\\delta < 0.001$), and thermal shock resistance.",
      "Thermal Shock Resistance ($R$ Parameters): Hasselman thermal shock resistance parameters: $R = \\frac{\\sigma_f (1 - \\nu)}{E \\alpha}$ (resistance to crack initiation) and $R'''' = \\frac{E \\gamma_wov}{\\sigma_f^2 (1 - \\nu)}$ (resistance to thermal crack propagation).",
      "Space Shuttle Thermal Protection Tiles: High-purity sintered porous silica fiber tiles (LI-900, $90\\%$ air void volume, density $144\\text{ kg/m}^3$); Surface coated with reaction-cured borosilicate glass (RCG) having emissivity $\\varepsilon > 0.85$.",
      "Carbon-Carbon (C/C) Composites: Carbon fibers embedded in pyrolyzed carbon matrix; Retains mechanical strength up to $2500^\\circ\\text{C}$ in non-oxidizing environments; Coated with SiC diffusion barriers for Space Shuttle wing leading edges.",
      "Environmental Barrier Coatings (EBC) for CMCs: SiC matrices degrade rapidly in combustion water vapor environments via volatile silica hydroxide formation: $SiO_2 + 2H_2O \\to Si(OH)_4(g)$; Multilayer EBC (Silicon bond coat + Mullite / Ytterbium disilicate $Yb_2Si_2O_7$) prevents surface recession.",
      "Ceramic Armor & Ballistic Protection: Boron Carbide ($B_4C$, extremely high hardness $30\\text{ GPa}$, density $2.52\\text{ g/cm}^3$) and Alumina tiles backed by Kevlar/UHMWPE; Blunts and fractures armor-piercing projectile tips upon impact.",
      "University Examination Strategy: Derive the first thermal shock resistance parameter $R = \\frac{\\sigma_f(1-\\nu)}{E\\alpha}$, explain the recession mechanism of SiC in steam, and discuss the microstructure of $ZrB_2-SiC$ hypersonic leading edges."
    ],
    "keyPoints": [
      "Thermal Shock Parameter $R$: $R = \\frac{\\sigma_f (1 - \\nu)}{E \\alpha}$ (higher values withstand larger sudden temperature drops $\\Delta T_c$).",
      "Thermal Shock Crack Growth $R''''$: $R'''' = \\frac{E \\gamma_f}{\\sigma_f^2 (1 - \\nu)}$.",
      "UHTC Melting Benchmark: $HfC$ ($T_m = 3900^\\circ\\text{C}$), $TaC$ ($T_m = 3880^\\circ\\text{C}$).",
      "Silica Volatilization Reaction: $SiO_2(s) + 2H_2O(g) \\rightleftharpoons Si(OH)_4(g)$ (causes rapid surface recession in jet engines).",
      "Radome Permittivity Metric: Requires dielectric constant $\\varepsilon_r < 4$ and loss tangent $\\tan\\delta < 10^{-3}$.",
      "Space Shuttle Tile Void Ratio: $90\\%$ air porosity, conducting minimal heat during $1600^\\circ\\text{C}$ re-entry.",
      "Carbon-Carbon High-Temperature Limit: Strength actually increases with temperature up to $2200^\\circ\\text{C}$ in inert atmosphere.",
      "EBC Protective Top Coat: Rare-earth silicates such as Ytterbium disilicate ($Yb_2Si_2O_7$).",
      "Boron Carbide Advantage: Third hardest known material after diamond and CBN, blunting steel penetrators.",
      "Exam Scoring Tip: Active oxidation of SiC forms volatile $SiO(g)$ and erodes the ceramic, whereas passive oxidation forms protective solid $SiO_2(s)$."
    ]
  },
  "aerospace materials:::u4": {
    "highlights": [
      "Linear Elastic Fracture Mechanics (LEFM): Stress field near sharp crack tip under Mode I loading: $\\sigma_{ij} = \\frac{K_I}{\\sqrt{2\\pi r}} f_{ij}(\\theta)$; Stress intensity factor $K_I = Y \\sigma \\sqrt{\\pi a}$; Failure occurs when $K_I \\ge K_{IC}$.",
      "Plastic Zone Size Corrections: Irwin plastic zone radius at crack tip in plane stress $r_p = \\frac{1}{2\\pi}\\left(\\frac{K_I}{\\sigma_y}\\right)^2$; In plane strain, triaxial constraint reduces plastic zone to $r_p = \\frac{1}{6\\pi}\\left(\\frac{K_I}{\\sigma_y}\\right)^2$.",
      "Plane Stress vs Plane Strain Fracture Toughness: Thin sheets experience plane stress (higher apparent toughness due to shear lips); Thick plates experience plane strain constraint; Plane strain fracture toughness $K_{IC}$ is geometry-independent material constant.",
      "Minimum Thickness Specification for Valid $K_{IC}$: Specimen thickness, crack length, and ligament must satisfy $B, a, (W - a) \\ge 2.5 \\left(\\frac{K_{IC}}{\\sigma_y}\\right)^2$ according to ASTM E399 standard.",
      "Fatigue Crack Propagation & Paris Law: Stable crack growth rate governed by Paris-Erdogan power law: $\\frac{da}{dN} = C (\\Delta K)^m$, where stress intensity range $\\Delta K = K_{max} - K_{min} = Y \\Delta\\sigma \\sqrt{\\pi a}$.",
      "Three Stages of Fatigue Crack Growth: Stage I (sub-microscopic initiation along slip bands at $\\Delta K < \\Delta K_{th}$), Stage II (stable striation growth governed by Paris law), Stage III (rapid unstable acceleration to final fracture as $K_{max} \\to K_{IC}$).",
      "Fatigue Life Estimation by Integration: Number of cycles to grow crack from initial detected size $a_0$ to critical size $a_c$: $N_f = \\int_{a_0}^{a_c} \\frac{da}{C (Y \\Delta\\sigma \\sqrt{\\pi a})^m}$; For $m \\ne 2$, $N_f = \\frac{a_c^{1 - m/2} - a_0^{1 - m/2}}{C (Y \\Delta\\sigma \\sqrt{\\pi})^m (1 - m/2)}$.",
      "Stress Ratio ($R$) & Crack Closure: Stress ratio $R = \\sigma_{min} / \\sigma_{max}$; Elber's plasticity-induced crack closure: residual plastic wake behind crack tip causes crack faces to contact before minimum load is reached; Effective range $\\Delta K_{eff} = K_{max} - K_{open}$.",
      "Damage-Tolerant Aerospace Design Philosophy: Safe-life approach (retire component after calculated hours) vs Fail-safe / Damage-tolerant approach (assume initial defect of size $a_{detectable}$ exists; ensure residual strength until next inspection interval).",
      "University Examination Strategy: Calculate remaining fatigue life $N_f$ using Paris Law, check ASTM thickness criteria for valid $K_{IC}$, and compute the critical crack size $a_c$ at design stress."
    ],
    "keyPoints": [
      "Stress Intensity Factor: $K_I = Y \\sigma \\sqrt{\\pi a}$.",
      "Irwin Plane Strain Plastic Zone: $r_p = \\frac{1}{6\\pi}\\left(\\frac{K_I}{\\sigma_y}\\right)^2$.",
      "Irwin Plane Stress Plastic Zone: $r_p = \\frac{1}{2\\pi}\\left(\\frac{K_I}{\\sigma_y}\\right)^2$.",
      "ASTM E399 Validity Criterion: $B \\ge 2.5 \\left(\\frac{K_{IC}}{\\sigma_y}\\right)^2$.",
      "Paris Crack Growth Law: $\\frac{da}{dN} = C (\\Delta K)^m$.",
      "Stress Intensity Range: $\\Delta K = Y (\\sigma_{max} - \\sigma_{min}) \\sqrt{\\pi a}$.",
      "Critical Crack Size Formula: $a_c = \\frac{1}{\\pi} \\left(\\frac{K_{IC}}{Y \\sigma_{max}}\\right)^2$.",
      "Stress Ratio Definition: $R = \\frac{\\sigma_{min}}{\\sigma_{max}} = \\frac{K_{min}}{K_{max}}$.",
      "Effective Stress Intensity: $\\Delta K_{eff} = K_{max} - K_{open}$.",
      "Exam Scoring Tip: The exponent $m$ in Paris law typically ranges between $2.5$ and $4.0$ for structural aerospace metals, and between $4$ and $10$ for ceramics and polymers."
    ]
  },
  "aerospace materials:::u5": {
    "highlights": [
      "Ashby Material Selection Charts: Multi-dimensional property spaces (e.g. Young's modulus $E$ vs density $\\rho$, Strength $\\sigma_f$ vs density $\\rho$); Performance optimization indices derived from governing engineering equations.",
      "Material Performance Indices for Light Structures: Minimum mass design: Tie in tension ($M_1 = \\frac{\\sigma_y}{\\rho}$); Beam in bending stiffness ($M_2 = \\frac{E^{1/2}}{\\rho}$); Plate in bending stiffness ($M_3 = \\frac{E^{1/3}}{\\rho}$); Column buckling load ($M_4 = \\frac{E^{1/2}}{\\rho}$).",
      "Material Selection in Airframe Components: Fuselage skin (damage tolerance, fatigue crack growth, Al 2024-T3 or CFRP); Upper wing skin (compressive yield strength, buckling resistance, Al 7150-T77 or CFRP); Lower wing skin (tensile fatigue and damage tolerance, Al 2024-T351).",
      "Gas Turbine Material Distribution: Fan blades (Titanium Ti-6Al-4V or carbon fiber composites with titanium leading edge); Compressor stages (Ti alloys up to $450^\\circ\\text{C}$); Combustor and high-pressure turbine (Single-crystal Ni superalloys with TBC); Exhaust nozzle (Titanium aluminides TiAl).",
      "Spacecraft Re-Entry Materials Selection: Rocket nozzles (refractory metals, carbon-carbon composites); Nose cones (UHTCs like $ZrB_2-SiC$); Capsule heat shields (ablative PICA - Phenolic Impregnated Carbon Ablator, charring under high convective heat flux).",
      "Corrosion Prevention & Surface Engineering: Galvanic corrosion prevention between carbon fiber composites and aluminum structures (isolated via fiberglass isolation plies or titanium fasteners); Anodizing (chromic, sulfuric acid) and zinc chromate primers.",
      "Cost, Manufacturability & Buy-to-Fly Ratio: Buy-to-Fly ratio (mass of raw stock purchased divided by mass of finished flight component; e.g. machined forgings $10:1$ to $20:1$ vs near-net shape Additive Manufacturing $1.5:1$).",
      "Additive Manufacturing in Aerospace: Selective Laser Melting (SLM) and Electron Beam Melting (EBM) of Ti-6Al-4V, Scalmalloy (Al-Mg-Sc), and Inconel 718; Topological optimization and conformal internal cooling channels for rocket injectors.",
      "Lifecycle & Certification Protocols: FAA / EASA airworthiness certification; Building-block testing approach (coupons $\\to$ elements $\\to$ sub-components $\\to$ full-scale aircraft static and fatigue testing).",
      "University Examination Strategy: Derive the material performance index for a lightweight beam under bending $M = E^{1/2}/\\rho$, compare material selection between upper and lower aircraft wing surfaces, and explain the ablative mechanism of PICA."
    ],
    "keyPoints": [
      "Tension Tie Minimum Mass Index: $M_1 = \\frac{\\sigma_y}{\\rho}$ (maximize for light tension members).",
      "Bending Beam Stiffness Index: $M_2 = \\frac{E^{1/2}}{\\rho}$ (maximize for light aerospace beams).",
      "Bending Plate Stiffness Index: $M_3 = \\frac{E^{1/3}}{\\rho}$ (maximize for aircraft wing skins).",
      "Column Buckling Resistance Index: $M_4 = \\frac{E^{1/2}}{\\rho}$.",
      "Buy-to-Fly Ratio: $BFR = \\frac{\\text{Weight of Raw Ingot Purchased}}{\\text{Weight of Finished Flight Component}}$.",
      "Galvanic Isolation Rule: Carbon fiber ($+0.2\\text{ V}$) coupled to Aluminum ($-0.8\\text{ V}$) causes aggressive galvanic corrosion; Requires dielectric glass ply barrier.",
      "Upper Wing Main Requirement: High compressive yield strength $\\sigma_y$ and modulus $E$ to resist aerodynamic compressive buckling.",
      "Lower Wing Main Requirement: High tensile fatigue life and fracture toughness $K_{IC}$ under cyclic aerodynamic lift loading.",
      "Ablative Heat Shield Mechanism: Heat absorbed by endothermic polymer pyrolysis and vapor boundary layer mass injection.",
      "Exam Scoring Tip: On log $E$ vs log $\\rho$ Ashby charts, selection lines for $M = E^{1/2}/\\rho$ have a slope of $2$, while lines for $M = E^{1/3}/\\rho$ have a slope of $3$."
    ]
  },
  "engineering mathematics iii:::u1": {
    "highlights": [
      "Difference Operators and Symbolic Relations: Forward difference $\\Delta$, Backward difference $\\nabla$, Shift operator $E$, Central difference $\\delta$, Averaging operator $\\mu$, Differential operator $D$; Operator identities: $E = 1 + \\Delta = e^{h D}$, $\\nabla = 1 - E^{-1}$, $\\delta = E^{1/2} - E^{-1/2}$, $\\mu = \\frac{1}{2}(E^{1/2} + E^{-1/2})$; Separation of symbols method for proving difference identities.",
      "Stirling's and Bessel's Central Difference Formulas: Central differences for values near table center ($x_0$); Stirling's formula (mean of Gauss forward and backward formulas): $y = y_0 + u \\frac{\\Delta y_0 + \\Delta y_{-1}}{2} + \\frac{u^2}{2!} \\Delta^2 y_{-1} + \\frac{u(u^2-1)}{3!} \\frac{\\Delta^3 y_{-1} + \\Delta^3 y_{-2}}{2} + \\dots$ for $-0.5 \\le u \\le 0.5$; Bessel's formula for $0.25 \\le u \\le 0.75$.",
      "Everett's and Hermite Interpolation Formulas: Everett's formula using only even central differences; Hermite interpolation polynomial matching both function values $f(x_i)$ and first derivatives $f'(x_i)$ at $n$ points: $H_{2n+1}(x) = \\sum_{i=0}^n h_i(x) f(x_i) + \\sum_{i=0}^n \\bar{h}_i(x) f'(x_i)$.",
      "Spline Interpolation: Cubic spline interpolation passing through $n+1$ points with continuous first and second derivatives ($C^2$ continuity) across entire interval; Natural spline boundary conditions: $S''(x_0) = S''(x_n) = 0$; Clamped spline conditions matching specified endpoint derivatives $S'(x_0) = f'_0, S'(x_n) = f'_n$.",
      "Numerical Differentiation: Derivatives derived from Newton-Gregory forward difference formula: $\\frac{dy}{dx} = \\frac{1}{h} \\left[ \\Delta y_0 - \\frac{1}{2} \\Delta^2 y_0 + \\frac{1}{3} \\Delta^3 y_0 - \\frac{1}{4} \\Delta^4 y_0 + \\dots \\right]$; Second derivative: $\\frac{d^2 y}{dx^2} = \\frac{1}{h^2} \\left[ \\Delta^2 y_0 - \\Delta^3 y_0 + \\frac{11}{12} \\Delta^4 y_0 - \\dots \\right]$.",
      "Numerical Solutions of Non-linear Transcendental Equations: Regula Falsi method and Newton-Raphson iteration $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ applied to engineering transcendental equations containing exponential and trigonometric combinations; Criteria for convergence.",
      "System of Non-Linear Equations via Multivariable Newton-Raphson: Solving simultaneous non-linear equations $f(x, y) = 0$ and $g(x, y) = 0$; Matrix iteration: $\\begin{bmatrix} x_{n+1} \\\\ y_{n+1} \\end{bmatrix} = \\begin{bmatrix} x_n \\\\ y_n \\end{bmatrix} - J^{-1} \\begin{bmatrix} f(x_n, y_n) \\\\ g(x_n, y_n) \\end{bmatrix}$ where Jacobian $J = \\begin{bmatrix} f_x & f_y \\\\ g_x & g_y \\end{bmatrix}$.",
      "Finite Difference Approximations for Boundary Value Problems: Discretization of ordinary differential equations $y'' + p(x) y' + q(x) y = r(x)$ on equispaced grid using central differences: $y''_i \\approx \\frac{y_{i+1} - 2 y_i + y_{i-1}}{h^2}$ and $y'_i \\approx \\frac{y_{i+1} - y_{i-1}}{2 h}$; Reduces boundary value problem to tridiagonal linear system.",
      "Numerical Solutions of Elliptic PDEs (Liebmann's Iteration): Discretization of 2D Poisson equation $\\nabla^2 u = u_{xx} + u_{yy} = f(x, y)$ on rectangular grid; Standard five-point finite difference formula: $u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4 u_{i,j} = h^2 f_{i,j}$; Solved via Liebmann's iterative method (Gauss-Seidel relaxation).",
      "University Examination Strategy: Establish algebraic operator relations between $E, \\Delta, \\nabla, \\delta, D$, apply Stirling's and Bessel's formulas to interpolate values at center of difference tables, evaluate first and second derivatives from tabulated data, execute multivariable Newton-Raphson iterations, and formulate finite difference equations for beam deflection BVPs."
    ],
    "keyPoints": [
      "Differential Shift Operator Link: $E = e^{h D} = 1 + \\Delta$.",
      "Central Difference Operator: $\\delta = E^{1/2} - E^{-1/2}$.",
      "Averaging Operator: $\\mu = \\frac{1}{2}(E^{1/2} + E^{-1/2})$.",
      "Stirling's Formula: $y = y_0 + u \\frac{\\Delta y_0 + \\Delta y_{-1}}{2} + \\frac{u^2}{2} \\Delta^2 y_{-1} + \\dots$.",
      "First Derivative from Forward Differences: $y'(x_0) = \\frac{1}{h}[\\Delta y_0 - \\frac{1}{2} \\Delta^2 y_0 + \\frac{1}{3} \\Delta^3 y_0 - \\dots]$.",
      "Second Derivative from Forward Differences: $y''(x_0) = \\frac{1}{h^2}[\\Delta^2 y_0 - \\Delta^3 y_0 + \\frac{11}{12} \\Delta^4 y_0 - \\dots]$.",
      "Multivariable Newton-Raphson: $\\Delta x = -J^{-1} F(x)$.",
      "Central Difference for $y''$: $y''_i = \\frac{y_{i+1} - 2 y_i + y_{i-1}}{h^2}$.",
      "Five-Point Poisson Stencil: $u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4 u_{i,j} = h^2 f_{i,j}$.",
      "Exam Gold Tip: For maximum accuracy in numerical differentiation, always choose the base point $x_0$ closest to the desired evaluation point; if it lies near the middle, use central difference differentiation formulas."
    ]
  },
  "engineering mathematics iii:::u2": {
    "highlights": [
      "Formation of Partial Differential Equations: Formation of PDEs by eliminating arbitrary constants $f(x, y, z, a, b) = 0$ (yielding order equal to number of constants); Formation by eliminating arbitrary functions $\\phi(u, v) = 0$ (yielding first-order or higher-order PDEs).",
      "First-Order Linear PDEs (Lagrange's Linear Equation): Standard form $P p + Q q = R$ where $p = \\frac{\\partial z}{\\partial x}, q = \\frac{\\partial z}{\\partial y}$; Lagrange's auxiliary equations: $\\frac{dx}{P} = \\frac{dy}{Q} = \\frac{dz}{R}$; Method of multipliers ($l P + m Q + n R = 0$) and method of grouping to find independent integrals $u(x, y, z) = c_1$ and $v(x, y, z) = c_2$; General solution: $\\Phi(u, v) = 0$.",
      "Non-Linear First-Order PDEs and Charpit's Method: Four standard forms: (1) $f(p, q) = 0$; (2) $f(z, p, q) = 0$; (3) $f(x, p) = g(y, q)$; (4) Clairaut's form $z = p x + q y + f(p, q)$ (complete integral $z = a x + b y + f(a, b)$); General method: Charpit's auxiliary equations $\\frac{dp}{f_x + p f_z} = \\frac{dq}{f_y + q f_z} = \\frac{dz}{-p f_p - q f_q} = \\frac{dx}{-f_p} = \\frac{dy}{-f_q}$.",
      "Classification of Second-Order Linear PDEs: General form $A \\frac{\\partial^2 u}{\\partial x^2} + B \\frac{\\partial^2 u}{\\partial x \\partial y} + C \\frac{\\partial^2 u}{\\partial y^2} + D \\frac{\\partial u}{\\partial x} + E \\frac{\\partial u}{\\partial y} + F u = G$; Discriminant $\\Delta = B^2 - 4 A C$: (1) Elliptic if $B^2 - 4 A C < 0$ (Laplace equation); (2) Parabolic if $B^2 - 4 A C = 0$ (Heat equation); (3) Hyperbolic if $B^2 - 4 A C > 0$ (Wave equation).",
      "Method of Separation of Variables: Assumption $u(x, t) = X(x) T(t)$; Decouples partial differential equation into two independent ordinary differential equations linked by separation constant $k$; Boundary conditions determine whether $k = 0, k = +\\lambda^2$, or $k = -\\lambda^2$ yields physically non-trivial solutions.",
      "One-Dimensional Wave Equation (Vibrating String): Governing hyperbolic PDE: $\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$ ($c^2 = T/\\rho$); Boundary conditions $u(0, t) = 0$ and $u(L, t) = 0$; Initial conditions $u(x, 0) = f(x)$ and $\\frac{\\partial u}{\\partial t}(x, 0) = g(x)$; Fourier series solution $u(x, t) = \\sum_{n=1}^\\infty \\left[ A_n \\cos\\left(\\frac{n \\pi c t}{L}\\right) + B_n \\sin\\left(\\frac{n \\pi c t}{L}\\right) \\right] \\sin\\left(\\frac{n \\pi x}{L}\\right)$.",
      "D'Alembert's Solution of Wave Equation: Solution for infinite string: $u(x, t) = \\phi(x - c t) + \\psi(x + c t)$ representing superposition of forward-traveling and backward-traveling waves; Initial conditions $u(x, 0) = f(x)$ and $u_t(x, 0) = g(x)$ yield explicit formula: $u(x, t) = \\frac{1}{2}[f(x - c t) + f(x + c t)] + \\frac{1}{2 c} \\int_{x - c t}^{x + c t} g(s) ds$.",
      "One-Dimensional Heat Conduction Equation: Governing parabolic PDE: $\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$ (thermal diffusivity $\\alpha = k / (\\rho c_p)$); Boundary conditions for ends at zero temperature $u(0, t) = u(L, t) = 0$; Separation of variables yields exponentially decaying Fourier modes: $u(x, t) = \\sum_{n=1}^\\infty b_n \\exp\\left( -\\alpha \\frac{n^2 \\pi^2 t}{L^2} \\right) \\sin\\left( \\frac{n \\pi x}{L} \\right)$ where $b_n = \\frac{2}{L} \\int_0^L f(x) \\sin\\left( \\frac{n \\pi x}{L} \\right) dx$.",
      "Two-Dimensional Laplace Equation (Steady-State Heat Flow): Governing elliptic PDE in rectangular plate: $\\nabla^2 u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$; Subject to Dirichlet boundary conditions: three edges kept at $0^\\circ\\text{C}$ and top edge at $u(x, b) = f(x)$; Product solution: $u(x, y) = \\sum_{n=1}^\\infty c_n \\sin\\left( \\frac{n \\pi x}{a} \\right) \\sinh\\left( \\frac{n \\pi y}{a} \\right)$.",
      "University Examination Strategy: Form PDEs by eliminating arbitrary functions $z = f(x^2 + y^2)$, solve Lagrange's equations $P p + Q q = R$ using algebraic multipliers, classify second-order PDEs into elliptic/parabolic/hyperbolic types, solve vibrating string wave equations for plucked and struck strings, and compute temperature distributions in heat-conducting rods."
    ],
    "keyPoints": [
      "Lagrange's Auxiliary Equations: $\\frac{dx}{P} = \\frac{dy}{Q} = \\frac{dz}{R}$.",
      "Clairaut's Form Solution: $z = p x + q y + f(p, q) \\implies z = a x + b y + f(a, b)$.",
      "PDE Discriminant: $\\Delta = B^2 - 4 A C$ ($<0$ Elliptic, $=0$ Parabolic, $>0$ Hyperbolic).",
      "Wave Equation: $\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$ (Hyperbolic).",
      "Heat Equation: $\\frac{\\partial u}{\\partial t} = \\alpha \\frac{\\partial^2 u}{\\partial x^2}$ (Parabolic).",
      "Laplace Equation: $\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$ (Elliptic).",
      "Vibrating String Normal Modes: $u_n(x,t) = \\sin\\left(\\frac{n \\pi x}{L}\\right) \\cos\\left(\\frac{n \\pi c t}{L}\\right)$.",
      "D'Alembert's Formula: $u(x,t) = \\frac{1}{2}[f(x-ct) + f(x+ct)] + \\frac{1}{2c} \\int_{x-ct}^{x+ct} g(s) ds$.",
      "Heat Equation Fourier Coefficient: $b_n = \\frac{2}{L} \\int_0^L f(x) \\sin\\left(\\frac{n \\pi x}{L}\\right) dx$.",
      "Exam Gold Tip: For one-dimensional heat conduction with insulated ends, the boundary conditions are zero derivatives $\\frac{\\partial u}{\\partial x}(0, t) = \\frac{\\partial u}{\\partial x}(L, t) = 0$, requiring Fourier cosine series solutions instead of sine series."
    ]
  },
  "engineering mathematics iii:::u3": {
    "highlights": [
      "Analytic Functions and Cauchy-Riemann Equations: Function $f(z) = u(x,y) + i v(x,y)$ of complex variable $z = x + i y$; Necessary conditions for differentiability: Cauchy-Riemann equations in Cartesian form $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$; Polar form: $\\frac{\\partial u}{\\partial r} = \\frac{1}{r} \\frac{\\partial v}{\\partial \\theta}$ and $\\frac{\\partial v}{\\partial r} = -\\frac{1}{r} \\frac{\\partial u}{\\partial \\theta}$; Continuity of partial derivatives provides sufficient condition.",
      "Harmonic Functions and Milne-Thomson Construction: Real and imaginary parts of analytic function satisfy 2D Laplace equation $\\nabla^2 u = u_{xx} + u_{yy} = 0$ and $\\nabla^2 v = 0$; $v(x,y)$ called harmonic conjugate of $u(x,y)$; Orthogonality of equipotential lines and stream lines: $\\nabla u \\cdot \\nabla v = 0$; Milne-Thomson method: constructs $f(z)$ directly without calculating $v(x,y)$: $f'(z) = u_x(z, 0) - i u_y(z, 0)$.",
      "Conformal Mapping and Standard Transformations: Mapping $w = f(z)$ preserves magnitude and sense of angles between intersecting curves wherever $f'(z) \\ne 0$ (critical points where $f'(z) = 0$); Standard elementary conformal maps: (1) Translation $w = z + c$; (2) Rotation and magnification $w = c z$; (3) Inversion $w = 1/z$; (4) Power $w = z^2$; (5) Exponential $w = e^z$.",
      "Bilinear (Möbius) Transformation: General linear fractional transformation $w = \\frac{a z + b}{c z + d}$ with $a d - b c \\ne 0$; Maps circles and straight lines in $z$-plane into circles and straight lines in $w$-plane; Invariance of cross-ratio: $\\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \\frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$ determines transformation mapping three specified points $z_1, z_2, z_3$ to $w_1, w_2, w_3$.",
      "Complex Line Integrals & Cauchy's Integral Theorem: Line integral $\\int_C f(z) dz = \\int_C (u dx - v dy) + i \\int_C (v dx + u dy)$; Cauchy-Goursat Theorem: if $f(z)$ is analytic within and on simple closed contour $C$, then $\\oint_C f(z) dz = 0$; Independence of path in simply connected domains.",
      "Cauchy's Integral Formula & Higher Derivatives: Value of analytic function inside closed contour: $f(z_0) = \\frac{1}{2 \\pi i} \\oint_C \\frac{f(z)}{z - z_0} dz$; Generalized formula for $n$-th derivative: $f^{(n)}(z_0) = \\frac{n!}{2 \\pi i} \\oint_C \\frac{f(z)}{(z - z_0)^{n+1}} dz$; Shows that analytic functions possess infinitely many continuous derivatives.",
      "Taylor's and Laurent's Series Expansions: Taylor's theorem: expansion inside disc $|z - z_0| < R$: $f(z) = \\sum_{n=0}^\\infty a_n (z - z_0)^n$ where $a_n = \\frac{f^{(n)}(z_0)}{n!}$; Laurent's theorem: expansion in annulus $r < |z - z_0| < R$: $f(z) = \\sum_{n=0}^\\infty a_n (z - z_0)^n + \\sum_{n=1}^\\infty \\frac{b_n}{(z - z_0)^n}$; Principal part $\\sum \\frac{b_n}{(z - z_0)^n}$ characterizes singularity.",
      "Classification of Singularities: Point $z_0$ where $f(z)$ fails to be analytic: (1) Removable singularity: all $b_n = 0$ (e.g., $\\frac{\\sin z}{z}$ at $z = 0$); (2) Pole of order $m$: $b_m \\ne 0$ and $b_{k>m} = 0$ (simple pole if $m=1$); (3) Essential singularity: infinitely many non-zero negative power terms (e.g., $e^{1/z}$ at $z=0$).",
      "Cauchy's Residue Theorem and Contour Integration: Residue at pole $z_0$: coefficient $b_1$ of $\\frac{1}{z - z_0}$ in Laurent series; For simple pole: $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$; For pole of order $m$: $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!} \\lim_{z \\to z_0} \\frac{d^{m-1}}{dz^{m-1}} [(z - z_0)^m f(z)]$; Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum_{k=1}^N \\text{Res}(f, z_k)$.",
      "University Examination Strategy: Test functions for analyticity using Cauchy-Riemann equations, construct analytic functions using Milne-Thomson method given $u(x,y)$, find bilinear transformations mapping three points, evaluate contour integrals using Cauchy's integral formula, and solve definite trigonometric integrals $\\int_0^{2\\pi} \\frac{d\\theta}{a + b \\cos\\theta}$ via residue theorem."
    ],
    "keyPoints": [
      "Cauchy-Riemann Equations (Cartesian): $u_x = v_y$ and $u_y = -v_x$.",
      "Cauchy-Riemann Equations (Polar): $u_r = \\frac{1}{r} v_\\theta$ and $v_r = -\\frac{1}{r} u_\\theta$.",
      "Milne-Thomson Formula: $f'(z) = u_x(z, 0) - i u_y(z, 0)$.",
      "Bilinear Cross-Ratio: $\\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \\frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$.",
      "Cauchy's Integral Theorem: $\\oint_C f(z) dz = 0$ (analytic inside and on $C$).",
      "Cauchy's Generalized Formula: $f^{(n)}(z_0) = \\frac{n!}{2\\pi i} \\oint_C \\frac{f(z)}{(z - z_0)^{n+1}} dz$.",
      "Residue at Simple Pole: $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
      "Residue at Multiple Pole: $\\text{Res}(f, z_0) = \\frac{1}{(m-1)!} \\lim_{z \\to z_0} \\frac{d^{m-1}}{dz^{m-1}} [(z - z_0)^m f(z)]$.",
      "Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}$.",
      "Exam Gold Tip: When evaluating real integrals $\\int_0^{2\\pi} f(\\cos\\theta, \\sin\\theta) d\\theta$, substitute $z = e^{i \\theta}$, $d\\theta = \\frac{dz}{i z}$, $\\cos\\theta = \\frac{z + z^{-1}}{2}$, $\\sin\\theta = \\frac{z - z^{-1}}{2 i}$, transforming the problem into a contour integral around unit circle $|z|=1$."
    ]
  },
  "engineering mathematics iii:::u4": {
    "highlights": [
      "Mathematical and Axiomatic Probability: Random experiments, sample spaces $\\Omega$, events; Mutually exclusive and exhaustive events; Classical, empirical, and axiomatic probability definitions; Addition theorem of probability: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$; Extension to three events: $P(A \\cup B \\cup C)$.",
      "Conditional Probability and Independence: Conditional probability $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ ($P(B) > 0$); Multiplication theorem: $P(A \\cap B) = P(A) P(B|A) = P(B) P(A|B)$; Independent events: $P(A \\cap B) = P(A) P(B)$; Pairwise vs mutual independence.",
      "Law of Total Probability & Bayes' Theorem: Partition $\\{E_1, E_2, \\dots, E_n\\}$ of sample space; Law of total probability: $P(A) = \\sum_{i=1}^n P(E_i) P(A|E_i)$; Bayes' theorem for posterior probability: $P(E_k|A) = \\frac{P(E_k) P(A|E_k)}{\\sum_{i=1}^n P(E_i) P(A|E_i)}$.",
      "Discrete Random Variables and Expectations: Discrete random variable $X$ with PMF $P(X = x_i) = p_i$; Mathematical expectation: $E[X] = \\sum x_i p_i$; Expectation of function: $E[g(X)] = \\sum g(x_i) p_i$; Variance: $\\sigma^2 = \\text{Var}(X) = E[X^2] - (E[X])^2$; Standard deviation $\\sigma = \\sqrt{\\text{Var}(X)}$.",
      "Binomial Probability Model: Independent Bernoulli trials with success parameter $p$ ($q = 1-p$); PMF: $P(X = r) = \\binom{n}{r} p^r q^{n-r}$ ($r = 0, 1, \\dots, n$); Mean $\\mu = n p$; Variance $\\sigma^2 = n p q$; Moment Generating Function $M_X(t) = (q + p e^t)^n$; Conditions for applicability.",
      "Poisson Probability Model: Model for rare events: $P(X = r) = \\frac{e^{-\\lambda} \\lambda^r}{r!}$ ($r = 0, 1, 2, \\dots$); Poisson parameter $\\lambda = n p$; Unique characteristic: mean equals variance $\\mu = \\sigma^2 = \\lambda$; Additive property of Poisson variables: if $X_1 \\sim P(\\lambda_1)$ and $X_2 \\sim P(\\lambda_2)$ are independent, then $X_1 + X_2 \\sim P(\\lambda_1 + \\lambda_2)$.",
      "Continuous Random Variables and Probability Density: Continuous random variable $X$ with PDF $f(x)$ satisfying $f(x) \\ge 0$ and $\\int_{-\\infty}^\\infty f(x) dx = 1$; CDF: $F(x) = P(X \\le x) = \\int_{-\\infty}^x f(t) dt$; Relationship: $f(x) = F'(x)$; Expectation: $E[X] = \\int_{-\\infty}^\\infty x f(x) dx$; Variance: $\\text{Var}(X) = \\int_{-\\infty}^\\infty x^2 f(x) dx - (E[X])^2$.",
      "Exponential Distribution Modeling: Continuous distribution with PDF $f(x) = \\lambda e^{-\\lambda x}$ for $x \\ge 0$, and $0$ elsewhere; CDF: $F(x) = 1 - e^{-\\lambda x}$; Mean $\\mu = 1/\\lambda$; Variance $\\sigma^2 = 1/\\lambda^2$; Memoryless property: $P(X > s + t \\mid X > s) = P(X > t)$; Widely applied in engineering reliability and queuing theory.",
      "Normal Distribution Theory: Continuous symmetrical distribution $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ with PDF $f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left( -\\frac{(x-\\mu)^2}{2\\sigma^2} \\right)$; Mean $\\mu$, variance $\\sigma^2$; Standard normal transformation $Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$; Area properties and computation of probabilities via standard normal distribution tables.",
      "University Examination Strategy: Apply Bayes' theorem to engineering factory defect classification problems, compute probabilities using Binomial expansion for quality inspections, evaluate Poisson probabilities for component breakdown rates, calculate probabilities for exponential waiting times, and determine normal distribution areas using standard $Z$-tables."
    ],
    "keyPoints": [
      "Addition Theorem: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
      "Bayes' Rule: $P(E_k|A) = \\frac{P(E_k) P(A|E_k)}{\\sum P(E_i) P(A|E_i)}$.",
      "Mathematical Expectation: $E[X] = \\sum x_i p_i$.",
      "Variance Formula: $\\text{Var}(X) = E[X^2] - (E[X])^2$.",
      "Binomial Mean and Variance: $\\mu = n p$, $\\sigma^2 = n p q$.",
      "Poisson PMF: $P(X = r) = \\frac{e^{-\\lambda} \\lambda^r}{r!}$.",
      "Poisson Additive Property: $X_1 + X_2 \\sim P(\\lambda_1 + \\lambda_2)$.",
      "Exponential CDF: $F(x) = 1 - e^{-\\lambda x}$ ($x \\ge 0$).",
      "Standard Normal Transform: $Z = \\frac{X - \\mu}{\\sigma}$.",
      "Exam Gold Tip: For Poisson distribution with parameter $\\lambda$, the probability of at least one occurrence is $P(X \\ge 1) = 1 - P(X = 0) = 1 - e^{-\\lambda}$."
    ]
  },
  "engineering mathematics iii:::u5": {
    "highlights": [
      "Method of Least Squares and Curve Fitting: Principle of least squares: minimizing sum of squared residuals $S = \\sum [y_i - f(x_i)]^2$; Fitting straight line $y = a + b x$: Normal equations $\\sum y = n a + b \\sum x$ and $\\sum x y = a \\sum x + b \\sum x^2$; Solving simultaneous normal equations for coefficients $a$ and $b$.",
      "Fitting Second-Degree Parabolas and Polynomials: Fitting parabola $y = a + b x + c x^2$: Normal equations: (1) $\\sum y = n a + b \\sum x + c \\sum x^2$; (2) $\\sum x y = a \\sum x + b \\sum x^2 + c \\sum x^3$; (3) $\\sum x^2 y = a \\sum x^2 + b \\sum x^3 + c \\sum x^4$; Simplification by shifting origin if $\\sum x = 0$.",
      "Fitting Non-Linear Exponential and Power Curves: (1) Exponential curve $y = a e^{b x}$: linearizing via natural logarithms $\\ln y = \\ln a + b x \\iff Y = A + B x$; (2) General exponential $y = a b^x$: $\\log y = \\log a + x \\log b$; (3) Power curve $y = a x^b$: $\\log y = \\log a + b \\log x \\iff Y = A + b X$.",
      "Correlation Analysis and Karl Pearson's Coefficient: Measure of linear association $r = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sqrt{\\sum (x - \\bar{x})^2 \\sum (y - \\bar{y})^2}} = \\frac{\\text{Cov}(X,Y)}{\\sigma_x \\sigma_y}$; Properties: bounded between $-1$ and $+1$; Independent of change of origin and scale; Interpretation: $r > 0$ positive, $r < 0$ negative, $r = 0$ uncorrelated.",
      "Spearman's Rank Correlation: Correlation between ranked variables: $\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$ where $d_i$ is difference between paired ranks; Used when characteristics cannot be measured quantitatively (intelligence, beauty, judgment); Correction for tied ranks: $\\frac{m(m^2-1)}{12}$.",
      "Linear Regression Analysis: Determining best-fit linear relationship to predict dependent variable; Line of regression of $y$ on $x$: $y - \\bar{y} = b_{yx} (x - \\bar{x})$ where regression coefficient $b_{yx} = r \\frac{\\sigma_y}{\\sigma_x} = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sum (x - \\bar{x})^2}$; Line of regression of $x$ on $y$: $x - \\bar{x} = b_{xy} (y - \\bar{y})$ where $b_{xy} = r \\frac{\\sigma_x}{\\sigma_y}$.",
      "Properties of Regression Coefficients: (1) Geometric mean property: $r = \\pm \\sqrt{b_{yx} b_{xy}}$; (2) Identical signs: $b_{yx}$, $b_{xy}$, and $r$ must all possess identical sign; (3) Magnitude constraint: if one regression coefficient is greater than unity, other must be less than unity; (4) Mean property: $\\frac{b_{yx} + b_{xy}}{2} \\ge r$.",
      "Angle Between Two Lines of Regression: Acute angle $\\theta$ between regression lines: $\\tan\\theta = \\left| \\frac{1 - r^2}{r} \\left( \\frac{\\sigma_x \\sigma_y}{\\sigma_x^2 + \\sigma_y^2} \\right) \\right|$; If $r = \\pm 1$, $\\tan\\theta = 0 \\implies \\theta = 0$ (perfect correlation, lines coincide); If $r = 0$, $\\tan\\theta = \\infty \\implies \\theta = \\pi/2$ (uncorrelated, lines perpendicular).",
      "Standard Error of Estimate and Explained Variance: Standard error of estimate measuring scatter around regression lines: $S_{yx} = \\sigma_y \\sqrt{1 - r^2}$ and $S_{xy} = \\sigma_x \\sqrt{1 - r^2}$; Coefficient of determination $r^2 = \\frac{\\text{Explained Variance}}{\\text{Total Variance}}$ indicating percentage of variation in $y$ attributable to linear relationship with $x$.",
      "University Examination Strategy: Fit straight lines and parabolas using method of least squares and solve normal equations, linearize and fit exponential curves $y = a e^{bx}$, compute Karl Pearson's correlation coefficient from experimental datasets, calculate Spearman's rank correlation with tied ranks, construct both lines of regression, and predict unknown variables."
    ],
    "keyPoints": [
      "Straight Line Normal Equations: $\\sum y = n a + b \\sum x$ and $\\sum x y = a \\sum x + b \\sum x^2$.",
      "Parabola Normal Equations: $\\sum y = n a + b \\sum x + c \\sum x^2$, etc.",
      "Linearization of $y = a e^{bx}$: $\\ln y = \\ln a + b x$.",
      "Linearization of $y = a x^b$: $\\log y = \\log a + b \\log x$.",
      "Pearson Correlation Formula: $r = \\frac{\\sum (x - \\bar{x})(y - \\bar{y})}{\\sqrt{\\sum (x - \\bar{x})^2 \\sum (y - \\bar{y})^2}}$.",
      "Spearman Rank Formula: $\\rho = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)}$.",
      "Regression Line of Y on X: $y - \\bar{y} = b_{yx} (x - \\bar{x})$.",
      "Regression Line of X on Y: $x - \\bar{x} = b_{xy} (y - \\bar{y})$.",
      "Regression Coefficients Product: $r = \\pm \\sqrt{b_{yx} b_{xy}}$.",
      "Exam Gold Tip: When fitting a straight line $y = a + bx$ to an odd number of equispaced data points, shift origin to middle year ($u = x - x_{mid}$) so $\\sum u = 0$, simplifying normal equations to $a = \\frac{\\sum y}{n}$ and $b = \\frac{\\sum u y}{\\sum u^2}$."
    ]
  },
  "electrical machines:::u1": {
    "highlights": [
      "Electromechanical Energy Conversion: Energy balance principle: $d W_{elec} = d W_{mech} + d W_{fld} + d W_{loss}$; Field energy and co-energy concepts in singly and doubly excited magnetic systems; Force and torque formulation from magnetic co-energy: $T_e = \\frac{\\partial W_f'(i, \\theta)}{\\partial \\theta}$.",
      "DC Machine Structural Datapath: Magnetic frame / Yoke (cast iron or cast steel flux return path), Pole cores and laminated pole shoes, Armature core (slotted silicon steel laminations), Commutator (hard-drawn copper segments insulated with mica), Carbon brushes with phosphor-bronze tension springs.",
      "Unified EMF and Torque Equations: Generated EMF: $E = \\frac{\\Phi Z N P}{60 A}$; Electromagnetic torque: $T = \\frac{\\Phi Z I_a P}{2\\pi A}$; Interrelationship: $E I_a = T \\omega_m$ (internal mechanical power developed).",
      "Operational Topologies of DC Machines: Shunt, Series, Compound (Long-shunt and Short-shunt configurations); Cumulative vs Differential compounding; Operating as generator vs operating as motor.",
      "Torque-Speed Operating Envelopes: Shunt motor: linear slight speed droop ($\\% N_{reg} = \\frac{N_{NL} - N_{FL}}{N_{FL}} \\times 100\\% < 8\\%$); Series motor: inverse hyperbola ($N \\propto 1/\\sqrt{T}$), massive starting torque for traction; Compound motor: tailored droop.",
      "Speed Control Architectures: Armature resistance rheostat method (below base speed, low efficiency); Field flux control (above base speed, constant horsepower drive); Ward-Leonard variable voltage system for crane and hoist drives.",
      "Starting Mechanisms for DC Motors: Starting resistance necessity ($I_{st} = V / R_a$); Three-point starter internal schematic (Hold-in electromagnet No-Volt Coil in series with shunt field, Over-load trip relay); Four-point starter overcoming high-speed field weakening nuisance trips.",
      "Losses and Efficiency Formulations: Copper losses ($I_a^2 R_a, I_{sh}^2 R_{sh}, I_{se}^2 R_{se}$), Core losses (Hysteresis loss $\\propto f B_m^{1.6}$, Eddy current loss $\\propto f^2 B_m^2 t^2$), Mechanical losses (bearing friction, brush friction, windage); Efficiency curves as function of load; Peak efficiency condition: Variable copper losses equal Constant rotational losses.",
      "Braking Modes in Industrial Drives: Regenerative braking (feeding power back into DC supply grid when overhauling load drives motor above no-load speed); Dynamic braking (dissipating armature kinetic energy across dynamic resistor bank); Plugging (reversing armature polarity, generating heavy stopping torque).",
      "University Examination Strategy: Derive electromechanical torque from co-energy formulations, compare three-point vs four-point starters with complete wiring schematics, and calculate full-load efficiency and speed regulation for DC shunt and series motors."
    ],
    "keyPoints": [
      "Co-Energy Torque Formula: $T_e = +\\left.\\frac{\\partial W_f'(i, \\theta)}{\\partial \\theta}\\right|_{i = \\text{const}}$.",
      "Unified DC Machine Torque: $T_e = \\frac{P \\Phi Z I_a}{2\\pi A}$ N-m.",
      "Internal Power Balance: $P_{mech} = E_b I_a = T_e \\omega_m$.",
      "Shunt Motor Speed Droop: Small speed drop ($5-8\\%$) with load due to low armature resistance $R_a$.",
      "Four-Point Starter Advantage: NVC current is independent of field rheostat adjustments, preventing unwanted trips.",
      "Core Loss Breakdown: Hysteresis loss $P_h = k_h f B_m^{1.6} V$ + Eddy current loss $P_e = k_e f^2 B_m^2 t^2 V$.",
      "Max Efficiency Loading Criterion: Occurs when $I_a^2 R_a = P_{constant}$.",
      "Traction Drive Choice: DC Series motor selected for electric trains due to extreme starting torque ($T \\propto I_a^2$).",
      "Plugging Current Surge: $I_{plug} = \\frac{V + E_b}{R_a + R_{ext}}$ (requires high external series resistance).",
      "Exam Gold Tip: Always remember that in DC motors, back EMF $E_b$ is always slightly smaller than terminal voltage $V$, whereas in DC generators, generated EMF $E_g$ is always slightly larger than terminal voltage $V$."
    ]
  },
  "electrical machines:::u2": {
    "highlights": [
      "Transformer Physics & Core Topologies: Magnetic circuit fundamentals; Magnetomotive force ($MMF = N I$), Reluctance ($\\mathcal{R} = l / (\\mu A)$); Core-type (two-legged core with concentric windings) vs Shell-type (three-legged core with sandwich / interleaved windings); Step-up, step-down, and isolation transformers.",
      "Faraday's Law & Unified EMF Formula: Sinusoidal core flux linkage; Primary and secondary induced voltages: $E_1 = 4.44 f N_1 \\Phi_m$, $E_2 = 4.44 f N_2 \\Phi_m$; Volts-per-turn equality: $\\frac{E_1}{N_1} = \\frac{E_2}{N_2} = 4.44 f \\Phi_m$; Flux density limits to prevent saturation ($B_m \\approx 1.5-1.7\\text{ T}$).",
      "Equivalent Circuit Representation: Primary resistance and leakage reactance ($R_1, X_1$); Shunt magnetizing branch ($R_c, X_m$); Referred secondary parameters ($R_2' = R_2 / K^2, X_2' = X_2 / K^2$); Phasor diagrams under resistive, inductive, and capacitive loading conditions.",
      "Performance Metrics — Regulation & Efficiency: Percentage voltage regulation: $VR = \\frac{V_{2,NL} - V_{2,FL}}{V_{2,FL}} \\times 100\\% \\approx \\frac{I_2(R_{eq2}\\cos\\phi_2 \\pm X_{eq2}\\sin\\phi_2)}{V_2} \\times 100\\%$; Efficiency calculation $\\eta = \\frac{\\text{Output}}{\\text{Output} + P_i + P_{cu}}$; Condition for maximum efficiency ($P_i = P_{cu}$).",
      "Open-Circuit & Short-Circuit Testing: OC test on LV side (measures no-load current $I_0$, core iron loss $P_i$, gives $R_c, X_m$); SC test on HV side (measures short-circuit current $I_{sc}$, full-load copper loss $P_{cu(FL)}$, gives $R_{eq}, X_{eq}$); Predetermination of performance curves.",
      "Three-Phase Transformer Connections: Three single-phase units vs Three-phase three-limb core unit; Standard connection topologies: Star-Star ($Y-Y$, neutral grounding), Delta-Delta ($\\Delta-\\Delta$, third harmonic circulation), Star-Delta ($Y-\\Delta$, step-down distribution), Delta-Star ($\\Delta-Y$, generation step-up and 4-wire distribution); Phase displacement and vector groups (Dyn11, Ynd1).",
      "Scott Connection (T-Connection): Conversion of three-phase to two-phase power using two single-phase transformers (Main transformer center-tapped at $50\\%$, Teaser transformer tapped at $86.6\\%$ / $\\frac{\\sqrt{3}}{2}$ of turns); Symmetrical balanced two-phase output under balanced three-phase input.",
      "Open-Delta ($V-V$) Connection: Operation of Delta-Delta bank with one single-phase transformer removed; Available bank capacity reduces to $\\frac{1}{\\sqrt{3}} = 57.7\\%$ of original delta bank rating (operates at $86.6\\%$ of combined rating of remaining two transformers).",
      "Auto-Transformer Comparisons: Operating mechanism combining conductive and inductive power transfer; Significant copper reduction: $\\text{Copper Saved} = k \\times W_{2-wdg}$; Increased kVA throughput; Lack of galvanic isolation limitation.",
      "University Examination Strategy: Calculate transformer equivalent circuit parameters from OC and SC test data, calculate voltage regulation and efficiency at various power factors, analyze phase shifts in three-phase vector groups, and solve Scott connection power delivery problems."
    ],
    "keyPoints": [
      "Volts Per Turn Invariant: $\\frac{E_1}{N_1} = \\frac{E_2}{N_2} = 4.44 f \\Phi_m$.",
      "Max Efficiency Loading Point: $S_{max\\,\\eta} = S_{rated} \\times \\sqrt{\\frac{P_i}{P_{cu(FL)}}}$.",
      "Zero Voltage Regulation Power Factor: Leading PF with $\\cos\\phi_2 = \\frac{X_{eq}}{\\sqrt{R_{eq}^2 + X_{eq}^2}}$.",
      "Max Voltage Regulation Power Factor: Lagging PF with $\\cos\\phi_2 = \\frac{R_{eq}}{\\sqrt{R_{eq}^2 + X_{eq}^2}}$.",
      "Star-Delta Line Voltage Ratio: $K_{line} = \\frac{V_{L2}}{V_{L1}} = \\frac{K_{ph}}{\\sqrt{3}}$ for $Y-\\Delta$.",
      "Delta-Star Line Voltage Ratio: $K_{line} = \\sqrt{3} K_{ph}$ for $\\Delta-Y$.",
      "Scott Connection Teaser Turns: Teaser winding turns $N_T = \\frac{\\sqrt{3}}{2} N_M \\approx 0.866 N_M$.",
      "Open-Delta ($V-V$) Capacity Ratio: $\\frac{kVA_{V-V}}{kVA_{\\Delta-\\Delta}} = \\frac{1}{\\sqrt{3}} \\approx 57.7\\%$.",
      "CRGO Core Lamination Benefit: Reduces hysteresis loss through grain orientation and eddy current loss via thin insulating coating.",
      "Exam Gold Tip: In Open-Delta connection, the two transformers operate at a power factor of $\\cos(30^\\circ \\pm \\theta)$, meaning they do not share load at the load's nominal power factor."
    ]
  },
  "electrical machines:::u3": {
    "highlights": [
      "Three-Phase Rotating Magnetic Field (RMF): Principle of rotating stator MMF generated by 3-phase balanced spatial windings displaced by $120^\\circ$ carrying balanced 3-phase currents displaced by $120^\\circ$ in time; Constant magnitude of resultant magnetic flux: $\\Phi_{resultant} = 1.5 \\Phi_m$; Synchronous speed: $N_s = \\frac{120 f}{P}$ rpm.",
      "Operating Principle of Induction Motor: Asynchronous operation; Relative speed between rotating stator flux and stationary rotor conductors induces rotor EMF and currents; Rotor accelerates in direction of stator field according to Lenz's law; Slip definition: $s = \\frac{N_s - N}{N_s}$; Rotor frequency: $f_r = s f$.",
      "Rotor Construction Varieties: (1) Squirrel-Cage Rotor (uninsulated copper or aluminum bars short-circuited by end rings, rugged, brushless, maintenance-free, skewed slots reducing cogging and crawling); (2) Wound Rotor / Slip-Ring Rotor (3-phase insulated winding brought out to external slip rings, allows insertion of external starting resistances).",
      "Equivalent Circuit Modeling of Induction Motor: Stator impedance ($R_1, X_1$); Shunt magnetizing branch ($R_c, X_m$); Rotor impedance referred to stator ($R_2'/s, X_2'$); Electrical representation of mechanical load: variable resistance $R_L' = R_2' \\left(\\frac{1 - s}{s}\\right)$; Power flow stages: Stator input $\\to$ Stator copper/iron loss $\\to$ Air-gap power $P_g \\to$ Rotor copper loss $s P_g \\to$ Gross mechanical power $(1-s)P_g \\to$ Friction/windage $\\to$ Shaft output.",
      "Torque-Slip and Torque-Speed Characteristics: Torque equation: $T_e = \\frac{3}{\\omega_s} \\frac{V_{th}^2 (R_2'/s)}{(R_{th} + R_2'/s)^2 + (X_{th} + X_2')^2}$; Motoring region ($0 < s < 1$), Generating region ($s < 0$), Braking / Plugging region ($s > 1$); Stable vs unstable operating regions on torque-slip curve.",
      "Maximum Breakdown Torque & Starting Torque: Slip at maximum torque: $s_{max} \\approx \\frac{R_2'}{X_2'}$; Maximum torque value: $T_{max} = \\frac{3}{2\\omega_s} \\frac{V^2}{2 X_2'}$ (independent of rotor resistance $R_2$); Effect of adding external rotor resistance in slip-ring motor: shifts peak torque toward standstill ($s = 1$) without altering $T_{max}$ magnitude.",
      "Starting Methods of Three-Phase Induction Motors: High inrush current ($5-7$ times $I_{FL}$); Starting methods: (1) Direct-On-Line (DOL, limited to $<5\\text{ kW}$); (2) Star-Delta Starter (starting phase voltage reduced to $1/\\sqrt{3}$, starting current and torque reduced to $1/3$); (3) Auto-Transformer Starter ($I_{st} = x^2 I_{sc}$, $T_{st} = x^2 T_{sc}$); (4) Rotor Resistance Starter (slip-ring motors, maintains high starting torque).",
      "Speed Control of Three-Phase Induction Motors: (1) Stator Voltage Control; (2) Variable Voltage Variable Frequency (V/f Control: constant air-gap flux up to base speed, flux weakening above base speed); (3) Pole Changing (Dahlander winding); (4) Rotor Resistance Control; (5) Slip Power Recovery Schemes (Kramer and Scherbius drives).",
      "Parasitic Phenomena — Cogging and Crawling: Cogging (magnetic locking occurring when stator slots equal rotor slots $S_s = S_r$, prevented by choosing $S_s \\ne S_r$ and skewing rotor slots); Crawling (motor runs steadily at sub-synchronous speed $N_s/7$ due to 7th space harmonic harmonic torque).",
      "University Examination Strategy: Prove that a 3-phase winding produces an RMF of constant magnitude $1.5 \\Phi_m$, derive induction motor torque-slip equation and maximum torque expression, calculate power flow distribution ($P_g : P_{cu,rotor} : P_{mech} = 1 : s : 1-s$), and compare starting methods."
    ],
    "keyPoints": [
      "Resultant RMF Amplitude: $\\Phi_{resultant} = \\frac{3}{2} \\Phi_m = 1.5 \\Phi_m$ (constant magnitude rotating at $N_s$).",
      "Synchronous Speed Equation: $N_s = \\frac{120 f}{P}$ rpm.",
      "Slip Frequency Relation: $f_r = s \\times f$.",
      "Power Flow Ratio: $P_g : P_{cu,rotor} : P_{mech} = 1 : s : (1 - s)$.",
      "Slip at Maximum Torque: $s_{mT} = \\frac{R_2'}{\\sqrt{R_{th}^2 + (X_{th} + X_2')^2}} \\approx \\frac{R_2'}{X_2'}$.",
      "Maximum Torque Invariant: $T_{max} \\propto \\frac{V^2}{2 X_{eq}}$ (strictly independent of rotor resistance $R_2$).",
      "Star-Delta Starter Reduction: Starting current and starting torque are both reduced to exactly $\\frac{1}{3}$ of DOL values.",
      "Auto-Transformer Starting Ratio: $T_{st} = x^2 T_{sc}$ and $I_{line,st} = x^2 I_{sc}$.",
      "Crawling Harmonic Speed: Motor crawls at $\\frac{1}{7} N_s$ caused by forward-rotating 7th stator space harmonic.",
      "Exam Gold Tip: Adding resistance to the rotor circuit increases starting torque and shifts the maximum torque point closer to $s=1$, but does NOT change the magnitude of maximum breakdown torque."
    ]
  },
  "electrical machines:::u4": {
    "highlights": [
      "Synchronous Generator (Alternator) Principle: Synchronous speed operation: rotor driven by prime mover at $N_s = \\frac{120 f}{P}$; Stationary armature 3-phase stator winding (eliminates heavy high-voltage slip rings), rotating DC-excited field electromagnet; Advantages of stationary armature design.",
      "Rotor Construction Varieties: (1) Salient-Pole Rotor (projecting poles, large diameter, short axial length, low-to-medium speed hydro-turbines $100-500\\text{ rpm}$, non-uniform air gap, damper windings in pole faces); (2) Cylindrical / Non-Salient Rotor (smooth round rotor, small diameter, long axial length, high-speed steam turbo-generators $1500-3000\\text{ rpm}$, uniform air gap).",
      "Alternator Induced EMF & Winding Factors: Pitch factor / Chording factor: $k_p = \\cos(\\alpha / 2)$ where $\\alpha$ is chording angle (eliminates specific slot harmonics, e.g. $\\alpha = 60^\\circ$ eliminates 3rd harmonic); Distribution / Breadth factor: $k_d = \\frac{\\sin(m \\beta / 2)}{m \\sin(\\beta / 2)}$; RMS generated EMF per phase: $E_{ph} = 4.44 k_p k_d f T_{ph} \\Phi$.",
      "Armature Reaction in Synchronous Machines: Effect of load power factor on main field flux: (1) Unity PF: purely cross-magnetizing (distorts field flux); (2) Zero PF lagging: purely demagnetizing (drastically reduces terminal voltage); (3) Zero PF leading: purely magnetizing (raises terminal voltage); Intermediate power factors produce combined cross and demagnetizing/magnetizing effects.",
      "Synchronous Impedance & Voltage Regulation: Synchronous impedance $Z_s = \\sqrt{R_a^2 + X_s^2}$ where synchronous reactance $X_s = X_l + X_a$ ($X_l$ leakage reactance, $X_a$ fictitious armature reaction reactance); Percentage Voltage Regulation: $VR = \\frac{E_0 - V}{V} \\times 100\\%$; Methods of predetermining regulation: (1) Synchronous Impedance / EMF method (pessimistic); (2) Ampere-Turn / MMF method (optimistic); (3) Zero Power Factor / Potier Triangle method (most accurate, separates $X_l$ and armature reaction MMF).",
      "Two-Reaction Theory of Salient-Pole Alternators: Blondel's two-reaction theory; Decomposition of armature MMF into direct axis ($d$-axis, minimum air-gap permeance) and quadrature axis ($q$-axis, maximum air-gap reluctance); Direct axis reactance $X_d$ and Quadrature axis reactance $X_q$ ($X_d > X_q$); Phasor diagram and power-angle relation: $P = \\frac{E V}{X_d} \\sin\\delta + \\frac{V^2}{2} \\left(\\frac{1}{X_q} - \\frac{1}{X_d}\\right) \\sin(2\\delta)$ (includes reluctance power component).",
      "Parallel Operation & Synchronization of Alternators: Conditions for paralleling: identical line voltage, identical frequency, identical phase sequence, phase coincidence; Synchronizing methods: Dark lamp method, Bright lamp method, Synchroscope; Synchronizing power and synchronizing torque coefficients.",
      "Synchronous Motor Operating Principle: Non-self-starting nature (stator field rotates at $N_s$, rotor inertia prevents instantaneous lock-on); Starting methods using amortisseur / damper windings as induction motor, or auxiliary pony motor; Pull-in torque and synchronous pull-out torque.",
      "V-Curves and Inverted V-Curves: Effect of varying DC field excitation at constant mechanical load; (1) Normal excitation ($\\text{PF} = 1$); (2) Under-excitation (draws lagging reactive power, operates at lagging PF); (3) Over-excitation (supplies reactive power, operates at leading PF); V-curves plot $I_a$ vs $I_f$; Inverted V-curves plot $\\cos\\phi$ vs $I_f$; Application as Synchronous Condenser (unloaded over-excited synchronous motor for power factor correction).",
      "University Examination Strategy: Calculate winding pitch and distribution factors, determine voltage regulation using EMF and Potier methods, derive the power-angle equation for salient-pole alternators showing reluctance power, and sketch synchronous motor V-curves indicating stability limits."
    ],
    "keyPoints": [
      "Pitch Factor Formula: $k_p = \\cos\\left(\\frac{\\alpha}{2}\\right)$.",
      "Distribution Factor Formula: $k_d = \\frac{\\sin(m \\beta / 2)}{m \\sin(\\beta / 2)}$.",
      "Alternator Induced EMF: $E_{ph} = 4.44 k_p k_d f T_{ph} \\Phi$.",
      "Synchronous Reactance Definition: $X_s = X_l + X_a$ (leakage + armature reaction reactances).",
      "Zero PF Lagging Armature Reaction: Purely demagnetizing effect on main field flux.",
      "Zero PF Leading Armature Reaction: Purely magnetizing effect, boosting internal field flux.",
      "Salient Pole Power-Angle Formula: $P = \\frac{E_0 V}{X_d} \\sin\\delta + \\frac{V^2(X_d - X_q)}{2 X_d X_q} \\sin(2\\delta)$.",
      "Reluctance Power Term: $\\frac{V^2(X_d - X_q)}{2 X_d X_q} \\sin(2\\delta)$ (operates even if field excitation $E_0 = 0$).",
      "Synchronous Condenser Operation: Over-excited synchronous motor running at no-load with leading power factor.",
      "Exam Gold Tip: In synchronous motors, increasing DC field excitation causes the power factor to become more leading; in alternators, increasing field excitation causes the power factor to become more lagging."
    ]
  },
  "electrical machines:::u5": {
    "highlights": [
      "Single-Phase Induction Motors Fundamentals: Inability to self-start on single-phase AC supply; Pulsating stator magnetic field; Double-Revolving Field Theory (pulsating field decomposed into two counter-rotating fields of equal magnitude $\\Phi_m/2$ rotating at $\\pm N_s$); Forward slip $s_f = s$ and backward slip $s_b = 2 - s$; Resultant starting torque is strictly zero.",
      "Split-Phase Induction Motor: Stator provided with two windings displaced by $90^\\circ$ electrical: Main winding (low resistance, high inductive reactance) and Auxiliary / Starting winding (high resistance, low inductive reactance); Phase split $\\alpha \\approx 30^\\circ$; Centrifugal switch disconnects auxiliary winding at $75-80\\%$ synchronous speed; Moderate starting torque ($1.5-2 \\times T_{FL}$).",
      "Capacitor-Start Induction Motor: High-value electrolytic capacitor connected in series with auxiliary winding; Phase angle displacement between main and auxiliary currents increases to nearly $90^\\circ$; High starting torque ($3-4.5 \\times T_{FL}$); Centrifugal switch disconnects starting winding after run-up; Applications in compressors, pumps, and refrigerators.",
      "Capacitor-Run & Permanent Split Capacitor (PSC) Motors: Paper/polypropylene continuous-duty capacitor permanently connected in series with auxiliary winding; Centrifugal switch eliminated; Smooth, quiet, vibration-free operation; High running power factor and efficiency; Ideal for ceiling fans and blowers.",
      "Shaded-Pole Induction Motor: Extremely simple construction; Salient stator poles with one portion surrounded by a low-resistance copper shading band (shading coil); Induced currents in shading ring delay flux through shaded portion; Produces weak shifting magnetic field sweeping from unshaded to shaded pole section; Very low starting torque ($50\\%$ of $T_{FL}$), low efficiency ($20-30\\%$); Small cooling fans, hair dryers.",
      "Universal Motor (AC Series Motor): Operates on either DC or single-phase AC supply; Series connected armature and field windings; Modifications for AC operation: laminated stator and rotor frames reducing eddy current heating, fewer field turns minimizing inductive reactance, compensating winding neutralizing armature reaction reactance; High speed ($3000-20000\\text{ rpm}$); Vacuum cleaners, food blenders, portable power drills.",
      "Stepper Motors: Precise discrete incremental angular motion per input electrical pulse; Step angle $\\beta = \\frac{N_s - N_r}{N_s N_r} \\times 360^\\circ$; Topologies: (1) Variable Reluctance (VR) stepper motor; (2) Permanent Magnet (PM) stepper motor; (3) Hybrid stepper motor (combines PM rotor with toothed steel poles, high torque, fine step angles e.g. $1.8^\\circ$); Microstepping techniques.",
      "Brushless DC (BLDC) Motors: Permanent magnet rotor with electronically commutated 3-phase stator winding; Hall effect sensors or sensorless back-EMF sensing for rotor position tracking; Inverter bridge switching replaces mechanical commutator and carbon brushes; High power density, high reliability, zero sparking; Drones, electric vehicles, computer cooling fans.",
      "Switched Reluctance Motors (SRM): Doubly salient construction (salient poles on both stator and rotor); Concentrated stator phase windings, rotor has no windings or permanent magnets; Operates on principle of minimum reluctance alignment; Fault-tolerant, high-temperature capability, rugged.",
      "University Examination Strategy: Explain single-phase induction motor operation using double revolving field theory with complete torque-slip curves, compare capacitor-start vs capacitor-run motors, derive stepper motor step angle relations, and explain BLDC electronic commutation."
    ],
    "keyPoints": [
      "Double Revolving Field Theorem: Pulsating field $\\Phi(t) = \\Phi_m \\cos(\\omega t)$ splits into two fields of magnitude $\\frac{\\Phi_m}{2}$ rotating in opposite directions.",
      "Backward Slip Formula: $s_b = 2 - s$ (where $s$ is forward slip).",
      "Capacitor Start Motor Phase Angle: Capacitor shifts auxiliary current phase leading main current by nearly $90^\\circ$.",
      "Shaded Pole Sweeping Flux: Flux shifts direction strictly from the unshaded segment toward the shaded segment.",
      "Universal Motor AC Speed: Runs faster on DC than AC for identical applied RMS voltage due to AC reactance drops.",
      "Stepper Motor Step Angle: $\\theta_s = \\frac{360^\\circ}{m N_r}$ where $m$ is phases and $N_r$ is rotor teeth.",
      "Hybrid Stepper Resolution: Standard hybrid stepper motor possesses 50 rotor teeth yielding $\\theta_s = 1.8^\\circ$ (200 steps/rev).",
      "BLDC Electronic Commutation: Employs 3 Hall sensors spaced at $120^\\circ$ to switch 6-transistor inverter bridge every $60^\\circ$ electrical.",
      "Centrifugal Switch Disconnect Speed: Trips open at approximately $75\\%$ to $80\\%$ of rated synchronous speed.",
      "Exam Gold Tip: Shaded-pole motors cannot have their direction of rotation reversed electrically because rotation direction is physically fixed from unshaded to shaded pole."
    ]
  },
  "sensors & transducers:::u1": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "sensors & transducers:::u2": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "sensors & transducers:::u3": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "sensors & transducers:::u4": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "sensors & transducers:::u5": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "solar energy:::u1": {
    "highlights": [
      "Sun as Fusion Energy Source: Continuous proton-proton fusion reaction converting hydrogen into helium at core temperature $1.5 \\times 10^7\\text{ K}$; Effective blackbody surface temperature $T_{sun} \\approx 5778\\text{ K}$; Emits continuous electromagnetic spectrum governed by Planck's radiation law.",
      "Solar Constant ($I_{sc}$): Total extraterrestrial solar irradiance received on a plane normal to the sun rays at mean Earth-Sun distance; Standard value $I_{sc} = 1367\\text{ W/m}^2$ (World Radiation Center WRC standard).",
      "Extraterrestrial Radiation Variation: Variation due to Earth's elliptical orbit: $I_{on} = I_{sc} \\left[1 + 0.033 \\cos\\left(\\frac{360 n}{365}\\right)\\right]$, where $n$ is day of the year ($1 \\le n \\le 365$); Maximum at perihelion (January 3) and minimum at aphelion (July 4).",
      "Solar Angles & Astronomical Geometry: Declination angle ($\\delta = 23.45^\\circ \\sin\\left[\\frac{360}{365}(284 + n)\\right]$, varying from $-23.45^\\circ$ at winter solstice to $+23.45^\\circ$ at summer solstice); Latitude ($\\phi$), Hour angle ($\\\\omega = 15^\\circ (t_{solar} - 12)$); Solar altitude angle ($\\alpha$) and zenith angle ($\\theta_z = 90^\\circ - \\alpha$).",
      "Zenith Angle Formula: $\\cos\\theta_z = \\sin\\phi \\sin\\delta + \\cos\\phi \\cos\\delta \\cos\\omega$; Sunrise and sunset hour angles: $\\omega_s = \\arccos(-\\tan\\phi \\tan\\delta)$; Day length in hours: $S_0 = \\frac{2}{15} \\omega_s = \\frac{2}{15} \\arccos(-\\tan\\phi \\tan\\delta)$.",
      "Local Solar Time vs Standard Clock Time: Solar Time $= \\text{Standard Time} \\pm 4(L_{st} - L_{loc}) + EOT$, where $L_{st}$ is standard meridian, $L_{loc}$ is local longitude, and $EOT$ is Equation of Time (corrects for Earth orbital eccentricity and axial obliquity).",
      "Solar Radiation Components on Earth Surface: Beam / Direct radiation ($I_b$, arrives directly without atmospheric scattering), Diffuse radiation ($I_d$, scattered by air molecules and aerosols), and Albedo / Ground-reflected radiation ($I_r = \\rho_g I_g$); Global horizontal irradiance $I_g = I_b \\cos\\theta_z + I_d$.",
      "Air Mass (AM): Path length of direct solar beam through atmosphere relative to zenith path: $AM = \\frac{1}{\\cos\\theta_z}$; $AM0$ in outer space ($1367\\text{ W/m}^2$), $AM1$ at sea level with sun overhead, and $AM1.5$ standard testing condition for terrestrial solar panels (zenith angle $\\theta_z \\approx 48.2^\\circ, I \\approx 1000\\text{ W/m}^2$).",
      "Solar Radiation Measurement Instruments: Pyranometer (measures global and diffuse radiation over $2\\pi$ steradians hemisphere using thermopile sensor under double glass domes) and Pyrheliometer (measures direct beam radiation at normal incidence using collimating tube with $5.7^\\circ$ field of view on automated solar tracker).",
      "University Examination Strategy: Calculate solar declination $\\delta$, zenith angle $\\theta_z$, and sunrise hour angle $\\omega_s$ for a given city and calendar day, explain the Equation of Time (EOT), and derive total day length."
    ],
    "keyPoints": [
      "Solar Constant Standard Value: $I_{sc} = 1367\\text{ W/m}^2$.",
      "Solar Declination Formula: $\\delta = 23.45^\\circ \\sin\\left[\\frac{360}{365}(284 + n)\\right]$.",
      "Zenith Angle Equation: $\\cos\\theta_z = \\sin\\phi\\sin\\delta + \\cos\\phi\\cos\\delta\\cos\\omega$.",
      "Sunrise Hour Angle: $\\omega_s = \\arccos(-\\tan\\phi \\tan\\delta)$.",
      "Day Length Formula: $S_0 = \\frac{2}{15}\\arccos(-\\tan\\phi \\tan\\delta)$ hours.",
      "Hour Angle Rate: $\\omega = 15^\\circ \\times (t_{\\text{solar}} - 12)$ (degrees; $15^\\circ$ corresponds to 1 hour).",
      "Air Mass Formula: $AM = \\frac{1}{\\cos\\theta_z}$ (for $\\theta_z < 70^\\circ$).",
      "Standard PV Testing Condition: $AM1.5$ spectrum, $1000\\text{ W/m}^2$ irradiance, and $25^\\circ\\text{C}$ cell temperature.",
      "Global Radiation Balance: $I_{\\text{global}} = I_{\\text{beam}} \\cos\\theta_z + I_{\\text{diffuse}}$.",
      "Exam Scoring Tip: At solar noon, the hour angle $\\omega$ is identically zero, simplifying the zenith equation to $\\theta_z = |\\phi - \\delta|$."
    ]
  },
  "solar energy:::u2": {
    "highlights": [
      "Flat Plate Collectors (FPC) Architecture: Glazing cover (low-iron tempered glass with high solar transmittance $\\tau \\approx 0.90$), metallic absorber plate (copper/aluminum with selective black coating, absorptance $\\alpha \\approx 0.95$, thermal emittance $\\varepsilon \\le 0.05$), riser and header tubes, bottom and edge thermal insulation, and weather-proof casing.",
      "Hottel-Whillier-Bliss (HWB) Governing Equation: Useful thermal energy gain: $Q_u = A_c F_R [I_t (\\tau\\alpha) - U_L (T_i - T_a)]$, where $A_c$ is collector area, $F_R$ is heat removal factor, $I_t$ is tilted solar irradiance, $(\\tau\\alpha)$ is transmittance-absorptance product, $U_L$ is overall heat loss coefficient, and $T_i, T_a$ are fluid inlet and ambient temperatures.",
      "Collector Overall Heat Loss Coefficient ($U_L$): Sum of top, bottom, and edge losses: $U_L = U_t + U_b + U_e$; Top loss $U_t$ accounts for radiative and convective exchange between absorber, glass covers, and sky; Klein's empirical correlation for $U_t$.",
      "Collector Efficiency Factor ($F'$) & Heat Removal Factor ($F_R$): $F'$ represents ratio of actual useful energy to energy collected if absorber plate were at local fluid temperature; $F_R = \\frac{\\dot{m} C_p}{A_c U_L} \\left[1 - \\exp\\left(-\\frac{A_c U_L F'}{\\dot{m} C_p}\\right)\\right]$; Instantaneous thermal efficiency $\\eta = \\frac{Q_u}{A_c I_t} = F_R (\\tau\\alpha) - F_R U_L \\left(\\frac{T_i - T_a}{I_t}\\right)$.",
      "Evacuated Tube Collectors (ETC): Parallel double-wall borosilicate glass tubes with vacuum envelope ($P < 10^{-3}\\text{ mbar}$); Eliminates all convective and conductive top heat losses; Features internal copper heat pipe containing evaporating working fluid (alcohol/water); Operates efficiently up to $150^\\circ\\text{C}$.",
      "Concentrating Solar Collectors Principles: Optical concentration ratio $CR = A_a / A_r$, where $A_a$ is collector aperture area and $A_r$ is absorber receiver area; High concentration reduces receiver area and heat losses, achieving elevated operating temperatures ($300-1000^\\circ\\text{C}$).",
      "Parabolic Trough Collectors (PTC): Linear imaging concentrators ($CR = 15-80$); Parabolic trough mirror reflects direct beam solar rays onto focal axis tube carrying synthetic heat transfer oil or molten salt; Single-axis solar tracking; Powers industrial solar thermal electric plants.",
      "Linear Fresnel Reflectors (LFR): Long, flat or slightly curved mirror strips positioned at ground level reflecting solar flux to elevated linear receiver; Lower capital and structural wind loading costs compared to parabolic troughs.",
      "Solar Central Receiver Towers (Heliostat Field): Thousands of dual-axis tracking flat mirrors (heliostats) reflecting solar flux to central receiver perched on high tower ($CR = 500-1500$, operating temperatures $>800^\\circ\\text{C}$); Utilizes molten nitrate salt ($60\\%\\text{ NaNO}_3 + 40\\%\\text{ KNO}_3$) as storage and heat transfer medium.",
      "University Examination Strategy: Derive the Hottel-Whillier-Bliss useful heat equation step-by-step, plot the collector thermal efficiency curve $\\eta$ vs $(T_i - T_a)/I_t$ finding intercept and slope, and compare FPC vs Evacuated Tube Collectors."
    ],
    "keyPoints": [
      "Hottel-Whillier-Bliss Equation: $Q_u = A_c F_R [S - U_L (T_i - T_a)]$.",
      "FPC Thermal Efficiency: $\\eta = F_R (\\tau\\alpha) - F_R U_L \\left(\\frac{T_i - T_a}{I_t}\\right)$.",
      "Heat Removal Factor $F_R$: $F_R = \\frac{\\dot{m} C_p}{A_c U_L} \\left[1 - \\exp\\left(-\\frac{A_c U_L F'}{\\dot{m} C_p}\\right)\\right]$.",
      "Optical Concentration Ratio: $CR = \\frac{\\text{Aperture Area } A_a}{\\text{Receiver Area } A_r}$.",
      "Maximum Theoretical Concentration (2D Linear): $CR_{\\text{max, 2D}} = \\frac{1}{\\sin\\theta_s} \\approx 216$.",
      "Maximum Theoretical Concentration (3D Point): $CR_{\\text{max, 3D}} = \\frac{1}{\\sin^2\\theta_s} \\approx 46000$.",
      "Selective Absorber Coating Criteria: Solar absorptance $\\alpha \\ge 0.95$ for $\\lambda < 2.5\\,\\mu\\text{m}$; Thermal emittance $\\varepsilon \\le 0.05$ for $\\lambda > 2.5\\,\\mu\\text{m}$.",
      "Stagnation Temperature: Temperature when useful gain $Q_u = 0 \\implies T_{stag} = T_a + \\frac{I_t(\\tau\\alpha)}{U_L}$.",
      "Molten Salt Storage Chemistry: Eutectic binary mixture of $60\\%\\text{ NaNO}_3$ and $40\\%\\text{ KNO}_3$ (liquid range $220-565^\\circ\\text{C}$).",
      "Exam Scoring Tip: On the standard efficiency plot of $\\eta$ vs $(T_i - T_a)/I_t$, the y-intercept is $F_R(\\tau\\alpha)$ and the negative slope equals $F_R U_L$."
    ]
  },
  "solar energy:::u3": {
    "highlights": [
      "Photovoltaic Effect in Semiconductor P-N Junction: Absorption of incident photons with energy $h\\nu \\ge E_g$ excites electrons from valence to conduction band, generating electron-hole pairs; Built-in electric field across depletion region separates charges, establishing photovoltage and photocurrent.",
      "Solar Cell Equivalent Circuit (Single-Diode Model): Ideal photocurrent source $I_{ph}$ in parallel with diode $I_D$, parallel shunt resistance $R_{sh}$, and series resistance $R_s$; Current-voltage relationship: $I = I_{ph} - I_0 \\left[\\exp\\left(\\frac{q(V + I R_s)}{n k_B T}\\right) - 1\\right] - \\frac{V + I R_s}{R_{sh}}$.",
      "Key Photovoltaic Characteristic Parameters: Short-circuit current ($I_{sc} \\approx I_{ph}$), Open-circuit voltage ($V_{oc} = \\frac{n k_B T}{q} \\ln\\left(\\frac{I_{ph}}{I_0} + 1\\right)$), Maximum Power Point ($P_{max} = V_{mp} I_{mp}$), and Fill Factor ($FF = \\frac{V_{mp} I_{mp}}{V_{oc} I_{sc}}$); Standard solar cell efficiency $\\eta = \\frac{P_{max}}{A \\cdot I_{in}} = \\frac{V_{oc} I_{sc} FF}{A \\cdot I_{in}}$.",
      "Shockley-Queisser Detailed Balance Limit: Fundamental thermodynamic efficiency limit for single-junction solar cells under unconcentrated sunlight; Theoretical ceiling $\\approx 33.7\\%$ occurring at optimum semiconductor bandgap $E_g \\approx 1.34\\text{ eV}$ (close to silicon $1.12\\text{ eV}$ and GaAs $1.42\\text{ eV}$).",
      "Parasitic Loss Mechanisms: Thermalization loss (excess photon energy $h\\nu - E_g$ dissipated as lattice phonon heat), Sub-bandgap non-absorption (photons with $h\\nu < E_g$ transmit unabsorbed), Radiative recombination, and Surface/interface defect recombination.",
      "Silicon Photovoltaic Technologies: Monocrystalline silicon (Czochralski single crystal, high efficiency $22-26\\%$, dark uniform appearance), Polycrystalline / Multicrystalline silicon (cast ingot, grain boundaries, efficiency $17-20\\%$, speckled blue), and Passivated Emitter and Rear Cell (PERC) technology.",
      "Thin-Film Solar Cells: Reduced material thickness ($1-3\\,\\mu\\text{m}$); Cadmium Telluride (CdTe, direct bandgap $1.45\\text{ eV}$), Copper Indium Gallium Diselenide (CIGS, chalcopyrite, bandgap tunable $1.0-1.7\\text{ eV}$), and Hydrogenated Amorphous Silicon (a-Si:H, Staebler-Wronski photo-degradation).",
      "Emerging PV Technologies: Perovskite solar cells (organometallic halide crystal $ABX_3$, rapid rise to $>25\\%$ efficiency, moisture instability), Tandem / Multi-junction solar cells (stacking top high-bandgap perovskite or GaInP over bottom silicon cell to exceed Shockley-Queisser limit beyond $33\\%$), and Organic/Dye-sensitized solar cells.",
      "Temperature Effects on PV Performance: Increasing temperature narrows bandgap, slightly increasing $I_{sc}$ ($+0.05\\%/^\\circ\\text{C}$) but drastically increasing reverse saturation current $I_0$, causing severe drop in $V_{oc}$ ($-2.0\\text{ to } -2.3\\text{ mV}/^\\circ\\text{C}$); Overall power temperature coefficient $\\gamma \\approx -0.35\\text{ to } -0.45\\%/^\\circ\\text{C}$ for crystalline silicon.",
      "University Examination Strategy: Formulate the single-diode solar cell current-voltage equation, derive the open-circuit voltage $V_{oc}$, define the Fill Factor $FF$, and analyze the impact of series and shunt resistance on I-V curves."
    ],
    "keyPoints": [
      "Single-Diode PV Current Formula: $I = I_{ph} - I_0 \\left[\\exp\\left(\\frac{q(V + I R_s)}{n k_B T}\\right) - 1\\right] - \\frac{V + I R_s}{R_{sh}}$.",
      "Open-Circuit Voltage Equation: $V_{oc} = \\frac{n k_B T}{q} \\ln\\left(\\frac{I_{sc}}{I_0} + 1\\right)$.",
      "Fill Factor Definition: $FF = \\frac{P_{\\text{max}}}{V_{oc} I_{sc}} = \\frac{V_{mp} I_{mp}}{V_{oc} I_{sc}}$ (typical values $0.75 - 0.85$).",
      "Solar Cell Power Conversion Efficiency: $\\eta = \\frac{V_{oc} I_{sc} FF}{P_{\\text{in}} A}$.",
      "Shockley-Queisser Limit: Peak theoretical single-junction efficiency $\\approx 33.7\\%$ at $E_g = 1.34\\text{ eV}$.",
      "Silicon Bandgap Energy: $E_g = 1.12\\text{ eV}$ at room temperature ($300\\text{ K}$).",
      "Thermal Voltage Constant: $V_t = \\frac{k_B T}{q} \\approx 0.0259\\text{ V}$ at $300\\text{ K}$ ($25^\\circ\\text{C}$).",
      "Series Resistance Effect: Increases slope at $V_{oc}$, reducing Fill Factor without altering $V_{oc}$.",
      "Shunt Resistance Effect: Decreases slope at $I_{sc}$, drawing leakage current away from load.",
      "Exam Scoring Tip: The temperature coefficient of power for silicon is negative (roughly $-0.4\\%/^\\circ\\text{C}$); a solar module operating at $65^\\circ\\text{C}$ loses nearly $16\\%$ of its rated nameplate capacity."
    ]
  },
  "solar energy:::u4": {
    "highlights": [
      "Balance of System (BOS) Components: Inverters (converts DC power from PV string to synchronized AC grid power), Charge controllers (regulates battery charging, prevents overcharge/deep discharge), Mounting structures, Combiner boxes with DC disconnects, and Surge Protection Devices (SPD).",
      "Maximum Power Point Tracking (MPPT) Algorithms: Dynamically adjusts DC-DC converter duty cycle to operate array at maximum power point ($P_{max}$); Perturb and Observe (P&O, perturbs voltage and measures $\\Delta P / \\Delta V$), Incremental Conductance (IncCond, condition: $\\frac{dI}{dV} = -\\frac{I}{V}$ at peak), and Fractional Open-Circuit Voltage.",
      "Grid-Connected PV Systems: Grid-tied inverters with Anti-Islanding protection (IEEE 1547 / IEC 62116 standard, automatically disconnects PV system within 2 seconds of utility grid outage to safeguard maintenance utility linesmen); Net metering and feed-in tariff billing.",
      "Stand-Alone (Off-Grid) PV Systems: Battery energy storage sized for days of autonomy; System sizing procedure: (1) Determine daily watt-hour energy demand ($E_d$); (2) Size PV array accounting for peak sun hours (PSH) and system losses; (3) Size battery bank accounting for Depth of Discharge (DoD) and ambient temperature.",
      "Solar Inverter Topologies: Central inverters (large utility-scale installations $>1\\text{ MW}$), String inverters ($10-100\\text{ kW}$, multiple strings connected to single inverter), Multi-string inverters (independent MPPT per string), and Micro-inverters (module-level power electronics MLPE mounted on each panel).",
      "Energy Storage Technologies for Solar: Deep-cycle lead-acid batteries (flooded, AGM, gel; $50\\%$ DoD limitation), Lithium-ion batteries ($LiFePO_4$, NMC; high energy density, $80-90\\%$ DoD, $>4000$ cycle life, built-in Battery Management System BMS), and Vanadium redox flow batteries for multi-megawatt storage.",
      "Partial Shading & Bypass Diodes: Shaded cell in series string becomes reverse-biased, acts as resistive load, dissipates string power, and creates localized destructive thermal hot-spots; Bypass diodes connected across subgroups of 20-24 cells bypass current around shaded modules.",
      "PV Array Sizing Calculation: Required PV peak power: $P_{peak} = \\frac{E_{daily}}{\\text{PSH} \\times \\eta_{system}}$, where $\\text{PSH}$ is Peak Sun Hours (equivalent hours per day at $1000\\text{ W/m}^2$) and $\\eta_{system} \\approx 0.75 - 0.80$ accounts for dirt, inverter, thermal, and cable losses.",
      "Battery Bank Sizing Calculation: Required battery storage capacity: $C_{Ah} = \\frac{E_{daily} \\times N_{autonomy}}{V_{dc} \\times DoD \\times \\eta_{battery}}$, where $N_{autonomy}$ is number of cloudy days of autonomy (typically 2-4 days) and $DoD$ is maximum allowable Depth of Discharge.",
      "University Examination Strategy: Calculate PV array wattage and battery bank Ah capacity for a residential off-grid load profile, derive the Incremental Conductance MPPT condition $\\frac{dI}{dV} = -\\frac{I}{V}$, and explain anti-islanding protection."
    ],
    "keyPoints": [
      "Incremental Conductance MPPT Condition: $\\frac{dI}{dV} = -\\frac{I}{V}$ at Maximum Power Point.",
      "Off-Peak Condition (Left of MPP): $\\frac{dI}{dV} > -\\frac{I}{V}$.",
      "Off-Peak Condition (Right of MPP): $\\frac{dI}{dV} < -\\frac{I}{V}$.",
      "PV Array Sizing Formula: $P_{\\text{array}} = \\frac{E_{\\text{load}}}{\\text{PSH} \\times \\eta_{\\text{BOS}}}$.",
      "Battery Bank Capacity Formula: $C_{Ah} = \\frac{E_{\\text{load}} \\times N_{\\text{autonomy}}}{V_{\\text{system}} \\times DoD \\times \\eta_{\\text{bat}}}$.",
      "Peak Sun Hours (PSH): Daily solar insolation in $\\text{kWh/m}^2/\\text{day}$ divided by $1.0\\text{ kW/m}^2$.",
      "Anti-Islanding Disconnect Time: Must disconnect within strictly 2.0 seconds of grid blackout.",
      "Bypass Diode Function: Protects shaded solar cells from reverse-bias overheating and hot-spot failure.",
      "Lead-Acid Battery Max DoD: Limited to $50\\%$ Depth of Discharge to preserve cycle life.",
      "Exam Scoring Tip: Peak Sun Hours (PSH) is numerically equal to the daily global horizontal irradiation in $\\text{kWh/m}^2/\\text{day}$."
    ]
  },
  "solar energy:::u5": {
    "highlights": [
      "Solar Water Pumping Systems: Solar PV array powering DC submersible brushless motor (BLDC) or AC induction motor via variable frequency inverter; Eliminates battery bank storage; Water stored directly in overhead reservoir tanks; Hydraulic energy: $E_h = \\rho g V H$; Daily pump discharge.",
      "Solar Desalination & Distillation: Passive solar stills (single-basin glass-covered solar still; evaporation from black basin and condensation on sloped glass underside; productivity $3-5\\text{ L/(m}^2\\cdot\\text{day)}$) and Active solar distillation (integrated with FPC or waste heat).",
      "Solar Drying of Agricultural Produce: Direct solar dryers (transparent cover over produce tray, UV degradation risk) vs Indirect solar dryers (separate solar air heating collector ducting warm air through shaded drying chamber; controls drying rate and preserves vitamins/color).",
      "Solar Refrigeration & Absorption Cooling: Thermal cooling using waste heat or solar thermal collectors; Single-effect water-lithium bromide ($H_2O-LiBr$) absorption chiller for air conditioning ($T_{generator} \\approx 80-95^\\circ\\text{C}, COP \\approx 0.7$); Ammonia-water ($NH_3-H_2O$) system for freezing ($COP \\approx 0.5$).",
      "Solar Cooking Technologies: Box-type solar cookers (insulated double-glass box with plane reflector mirror, attains $100-140^\\circ\\text{C}$ for boiling and slow stewing) and Parabolic concentrating dish cookers (attains $>250^\\circ\\text{C}$ for frying and baking).",
      "Building Integrated Photovoltaics (BIPV): Solar cells seamlessly integrated into building envelope: PV roof shingles, photovoltaic glass facades, semitransparent skylights, and shading louvers; Serves dual role as weatherproofing structural element and power generator.",
      "Agrivoltaics (Co-Location of Solar & Agriculture): Elevated mounting of solar arrays ($3-5\\text{ m}$ clearance) allowing farming machinery beneath; Dual land use; Microclimate shading reduces crop evapotranspiration, saves irrigation water, and lowers PV operating temperatures.",
      "Floating Photovoltaics (Floatovoltaics / FPV): Solar arrays mounted on modular buoyant pontoons anchored in reservoirs, quarry lakes, and wastewater treatment lagoons; Evaporation water cooling increases PV efficiency by $5-10\\%$; Reduces reservoir water loss by $80\\%$.",
      "Life Cycle Assessment (LCA) & Energy Payback Time (EPBT): Environmental footprint of solar technology; Energy Payback Time $EPBT = \\frac{E_{embodied}}{E_{annual\\_generation}}$; For modern silicon PV modules, $EPBT \\approx 1.0 - 1.5\\text{ years}$; Operating lifespan exceeds 25-30 years.",
      "University Examination Strategy: Design a solar water pumping system for a specified daily irrigation head and volume, calculate Energy Payback Time (EPBT), and explain the thermodynamic working cycle of a solar $H_2O-LiBr$ absorption chiller."
    ],
    "keyPoints": [
      "Hydraulic Pumping Energy: $E_h = \\rho g Q H = \\rho g V H$ Joules.",
      "Solar Pump Hydraulic Power: $P_h = \\frac{\\rho g Q H}{3600}$ Watts (with $Q$ in $\\text{m}^3/\\text{hr}$).",
      "Solar Still Daily Productivity: $M_w = \\frac{Q_{u}}{h_{fg}} = \\frac{\\eta_{still} A I_t}{h_{fg}}$ (typically $3-5\\text{ L/m}^2$).",
      "Energy Payback Time (EPBT): $EPBT = \\frac{E_{\\text{manufacturing}}}{E_{\\text{annual output}}}$ years.",
      "Energy Return on Investment: $EROI = \\frac{\\text{Lifetime Energy Output}}{E_{\\text{manufacturing}}} \\approx 15 - 25$.",
      "Single-Effect $LiBr-H_2O$ COP: Coefficient of Performance $COP = \\frac{Q_{\\text{evaporator}}}{Q_{\\text{generator}}} \\approx 0.65 - 0.75$.",
      "Floating PV Water Cooling Gain: Lowers panel temperature by $5-15^\\circ\\text{C}$, boosting energy yield by $5-10\\%$.",
      "Agrivoltaics Light Sharing: Transmits photosynthetically active radiation ($PAR$) while absorbing non-optimal wavelengths.",
      "BIPV Economic Advantage: Offsets building material facade cost while generating on-site renewable energy.",
      "Exam Scoring Tip: In solar absorption refrigeration with $LiBr-H_2O$, water serves as the refrigerant while lithium bromide salt solution serves as the absorbent."
    ]
  },
  "biochemistry:::u1": {
    "highlights": [
      "Carbohydrate Structural Classification: Monosaccharides (aldoses like glucose, ketoses like fructose), disaccharides with glycosidic bonds (maltose alpha-1,4, lactose beta-1,4, sucrose alpha-1,beta-2 non-reducing), and polysaccharides (starch amylose alpha-1,4 and amylopectin alpha-1,6 branches, glycogen, cellulose beta-1,4).",
      "Amino Acid Stereochemistry & Zwitterions: Standard proteinogenic amino acids with chiral alpha-carbon (except achiral glycine); Exist as dipolar zwitterions at physiological pH 7.4; Isoelectric point (pI) where net charge is zero: pI = (pK1 + pK2) / 2 for neutral amino acids.",
      "Protein Structural Hierarchy: Primary structure (covalent linear peptide bonds between alpha-amino and alpha-carboxyl groups); Secondary structure (alpha-helix with 3.6 residues per turn and beta-pleated sheets stabilized by intrachain hydrogen bonds); Tertiary 3D folded conformation; Quaternary multi-subunit oligomers (e.g. tetrameric hemoglobin).",
      "Lipids & Biological Membrane Architecture: Saponifiable lipids (triacylglycerols for energy storage, glycerophospholipids, sphingolipids); Amphipathic lipid bilayer driven by hydrophobic effect; Fluid mosaic model with integral and peripheral membrane proteins.",
      "Nucleic Acid Molecular Anatomy: Nucleotides comprising nitrogenous base (purines adenine/guanine, pyrimidines cytosine/thymine/uracil), pentose sugar (beta-D-ribose or 2-deoxyribose), and phosphate ester; Linked via 3-prime to 5-prime phosphodiester bonds.",
      "B-DNA Double Helix Geometry: Watson-Crick antiparallel right-handed double helix; Complementary base pairing via hydrogen bonds (A pairs with T through 2 bonds, G pairs with C through 3 bonds); Pitch is 3.4 nanometers with 10.5 base pairs per helical turn; Major and minor grooves facilitate protein recognition.",
      "RNA Diversity & Functions: Messenger RNA (encodes amino acid sequence), transfer RNA (cloverleaf secondary structure with anticodon loop and CCA-3-prime amino acid attachment stem), ribosomal RNA (catalytic peptidyl transferase ribozyme in ribosome), and small non-coding regulatory microRNAs.",
      "Forces Stabilizing Biomolecular Conformations: Hydrophobic interactions (clustering of non-polar side chains in core to maximize solvent entropy), electrostatic salt bridges between Lys/Arg and Asp/Glu, hydrogen bonds, and covalent disulfide cross-links (-S-S-) between cysteine residues.",
      "Biochemical Separation & Electrophoresis: Polyacrylamide gel electrophoresis (SDS-PAGE) separates denatured polypeptide chains strictly by molecular mass; Isoelectric focusing (IEF) separates proteins along continuous immobilized pH gradients; Combined 2D gel electrophoresis.",
      "University Examination Strategy: Draw the zwitterion form of alanine, compare B-DNA vs A-DNA and Z-DNA geometric parameters, and detail the four structural levels of proteins with stabilizing chemical bonds."
    ],
    "keyPoints": [
      "Isoelectric Point Formula: pI = (pKa1 + pKa2) / 2 for monoamino monocarboxylic amino acids.",
      "Peptide Bond Geometry: Rigid planar partial double bond character due to resonance delocalization.",
      "Alpha-Helix Parameters: 3.6 residues per complete helical turn with vertical rise of 0.54 nanometers.",
      "Watson-Crick Base Pairing: Adenine pairs with Thymine (2 H-bonds); Guanine pairs with Cytosine (3 H-bonds).",
      "Cellulose Linkage: Beta-1,4-glycosidic bonds forming linear rigid microfibrils resistant to human amylase.",
      "Reducing Sugar Criterion: Requires free anomeric hemiacetal or hemiketal hydroxyl group.",
      "Disulfide Bond Cross-link: Formed by oxidation of two cysteine thiol (-SH) side chains.",
      "SDS-PAGE Principle: Sodium dodecyl sulfate imparts uniform negative charge-to-mass ratio to proteins.",
      "DNA Denaturation (Tm): Melting temperature where 50 percent of double-stranded DNA unwinds to single strands.",
      "Exam Scoring Tip: Glycine is the only standard amino acid lacking an asymmetric chiral center and is therefore optically inactive."
    ]
  },
  "biochemistry:::u2": {
    "highlights": [
      "Enzymatic Catalysis Principles: Biocatalysts increase reaction rates by factors of 10 to the power 6 to 10 to the power 12 without altering overall thermodynamic chemical equilibrium; Lower Gibbs activation energy barrier (delta G double dagger) by stabilizing transition state complexes.",
      "Enzyme Active Site Architecture: Catalytic cleft lined by specific functional groups forming lock-and-key (Fischer) or induced-fit (Koshland) complementary binding with substrate; Catalytic mechanisms: acid-base catalysis, covalent catalysis, and metal ion cofactor catalysis.",
      "IUBMB Enzyme Nomenclature: Six systematic enzyme classes: 1-Oxidoreductases (redox transfers), 2-Transferases (functional group transfers), 3-Hydrolases (hydrolytic cleavage), 4-Lyases (non-hydrolytic addition/cleavage with double bonds), 5-Isomerases (structural rearrangements), 6-Ligases (condensation coupled to ATP hydrolysis).",
      "Michaelis-Menten Steady-State Kinetics: Rate of single-substrate reaction: v = (Vmax * [S]) / (Km + [S]), where Vmax is maximum catalytic velocity and Km is Michaelis constant; Km represents substrate concentration at half-maximal velocity (v = Vmax / 2) reflecting enzyme affinity.",
      "Lineweaver-Burk Double-Reciprocal Linearization: 1/v = (Km / Vmax) * (1/[S]) + (1 / Vmax); Plotted as 1/v vs 1/[S]; Slope equals Km/Vmax; Y-intercept equals 1/Vmax; X-intercept equals -1/Km.",
      "Catalytic Turnover Number (kcat): Catalytic constant kcat = Vmax / [E]total, representing maximum catalytic conversions per active site per second; Catalytic efficiency given by specificity constant kcat / Km, bounded by aqueous diffusion limit (10 to the power 8 to 10 to the power 9 per molar second).",
      "Competitive Enzyme Inhibition: Inhibitor structurally resembles substrate and binds reversibly to active site; Increases apparent Km without changing Vmax; Overcome by excess substrate; Lines in Lineweaver-Burk plot intersect at identical 1/Vmax on y-axis.",
      "Non-Competitive & Uncompetitive Inhibition: Non-competitive inhibition (inhibitor binds allosteric site on both free enzyme and ES complex, decreases Vmax while Km remains unchanged); Uncompetitive inhibition (inhibitor binds exclusively to ES complex, decreases both Vmax and Km proportionally, parallel Lineweaver-Burk lines).",
      "Allosteric Enzyme Regulation & Hill Equation: Non-Michaelis sigmoidal cooperative kinetics; Regulated by allosteric effectors binding regulatory subunits; Hill coefficient nH > 1 indicates positive cooperativity; Concerted (MWC) vs Sequential (KNF) allosteric transition models.",
      "University Examination Strategy: Derive the Michaelis-Menten rate equation using the Briggs-Haldane steady-state assumption, construct Lineweaver-Burk plots for competitive vs non-competitive inhibition, and define catalytic turnover kcat."
    ],
    "keyPoints": [
      "Michaelis-Menten Equation: v = (Vmax * [S]) / (Km + [S]).",
      "Lineweaver-Burk Equation: 1/v = (Km / Vmax) * (1 / [S]) + (1 / Vmax).",
      "Michaelis Constant Km Meaning: Substrate concentration at which initial reaction velocity equals half of Vmax.",
      "Catalytic Turnover Number: kcat = Vmax / [E]total (measured in reciprocal seconds).",
      "Catalytic Efficiency Metric: Ratio kcat / Km (measures enzyme specificity and speed).",
      "Competitive Inhibition Signature: Km increases, Vmax remains strictly constant.",
      "Non-Competitive Inhibition Signature: Km remains constant, Vmax decreases.",
      "Uncompetitive Inhibition Signature: Both Km and Vmax decrease by the exact same ratio.",
      "Enzyme Cofactor Classification: Coenzymes (organic carriers e.g. NAD+, FAD) vs Prosthetic groups (tightly bound e.g. heme).",
      "Exam Scoring Tip: The lower the Michaelis constant Km, the higher the affinity of the enzyme for its substrate."
    ]
  },
  "biochemistry:::u3": {
    "highlights": [
      "Bioenergetics & ATP High-Energy Bonds: Adenosine triphosphate (ATP) acts as universal biochemical energy currency; Standard Gibbs free energy of hydrolysis: ATP + H2O -> ADP + Pi yields delta G zero prime = -30.5 kilojoules per mole due to electrostatic charge repulsion and resonance stabilization of products.",
      "Glycolysis (Embden-Meyerhof-Parnas Pathway): Cytosolic catabolism of 1 mole glucose to 2 moles pyruvate; Preparatory energy-investment phase (2 ATP consumed, catalyzed by hexokinase and phosphofructokinase-1 PFK-1); Payoff phase (4 ATP generated via substrate-level phosphorylation, 2 NADH produced); Net yield: 2 ATP + 2 NADH per glucose.",
      "Pyruvate Dehydrogenase Multi-Enzyme Complex (PDH): Oxidative decarboxylation of pyruvate to acetyl-CoA in mitochondrial matrix: Pyruvate + CoA + NAD+ -> Acetyl-CoA + CO2 + NADH; Requires 5 cofactors: TPP, lipoate, FAD, NAD+, and CoA-SH; Irreversible link between glycolysis and TCA cycle.",
      "Citric Acid Cycle (Krebs / TCA Cycle): Mitochondrial cyclic oxidation of acetyl-CoA; 8 enzymatic steps; Condensation with oxaloacetate yields citrate; Generates 3 NADH, 1 FADH2, 1 GTP (ATP), and releases 2 CO2 per turn; Regulated by isocitrate dehydrogenase and alpha-ketoglutarate dehydrogenase.",
      "Mitochondrial Electron Transport Chain (ETC): Inner mitochondrial membrane multi-protein complexes: Complex I (NADH dehydrogenase), Complex II (succinate dehydrogenase), Complex III (cytochrome bc1 complex), and Complex IV (cytochrome c oxidase); Sequential electron transfer driven by standard reduction potentials toward terminal electron acceptor O2.",
      "Chemiosmotic Coupling & ATP Synthase: Mitchell's chemiosmotic hypothesis; Complexes I, III, and IV pump protons from matrix into intermembrane space, generating proton-motive force (delta p = delta psi + 59 * delta pH); Protons flow back into matrix through F0-F1 ATP synthase rotor, driving conformational rotation that synthesizes ATP.",
      "P/O Ratios & Net Cellular Respiration Yield: Oxidation of 1 NADH yields approximately 2.5 ATP; Oxidation of 1 FADH2 yields 1.5 ATP; Complete aerobic catabolism of 1 mole glucose yields 30 to 32 ATP depending on glycerol-3-phosphate or malate-aspartate shuttle.",
      "Gluconeogenesis & Cori Cycle: Biosynthesis of glucose from non-carbohydrate precursors (pyruvate, lactate, glycerol, amino acids); Bypasses irreversible glycolytic steps using pyruvate carboxylase, PEP carboxykinase, fructose-1,6-bisphosphatase, and glucose-6-phosphatase; Cori cycle cycles lactate between muscle and liver.",
      "Beta-Oxidation of Saturated Fatty Acids: Mitochondrial spiral degradation of acyl-CoA; Repetitive 4-step sequence: Oxidation (acyl-CoA dehydrogenase, FAD), Hydration (enoyl-CoA hydratase), Oxidation (hydroxyacyl-CoA dehydrogenase, NAD+), and Thiolysis (thiolase, CoA-SH); Palmitate (C16) yields 8 acetyl-CoA, 7 FADH2, 7 NADH (106 net ATP).",
      "University Examination Strategy: Detail the individual reactions of the citric acid cycle showing carbon counts and cofactors, explain Mitchell's chemiosmotic hypothesis for ATP synthesis, and calculate net ATP yield from palmitic acid."
    ],
    "keyPoints": [
      "ATP Hydrolysis Energy: Delta G zero prime equals -30.5 kilojoules per mole.",
      "Glycolysis Net Output: Glucose + 2 NAD+ + 2 ADP + 2 Pi -> 2 Pyruvate + 2 NADH + 2 ATP + 2 H2O.",
      "Key Glycolysis Committed Step: Phosphofructokinase-1 (PFK-1) converting Fructose-6-P to Fructose-1,6-BP.",
      "TCA Cycle One-Turn Yield: 3 NADH + 1 FADH2 + 1 GTP + 2 CO2 per molecule of acetyl-CoA.",
      "Chemiosmotic Proton Pumping: Complex I pumps 4 H+, Complex III pumps 4 H+, Complex IV pumps 2 H+ per electron pair.",
      "NADH ATP Equivalent: 1 NADH yields approximately 2.5 ATP molecules via oxidative phosphorylation.",
      "FADH2 ATP Equivalent: 1 FADH2 yields approximately 1.5 ATP molecules via Complex II.",
      "Palmitic Acid Net ATP: 16-carbon palmitate yields net 106 ATP upon complete aerobic oxidation.",
      "Cori Cycle Inter-organ Link: Transports muscle lactate to liver for gluconeogenesis and returns glucose to muscle.",
      "Exam Scoring Tip: In the electron transport chain, Complex II (succinate dehydrogenase) does not pump any protons across the inner mitochondrial membrane."
    ]
  },
  "biochemistry:::u4": {
    "highlights": [
      "Central Dogma of Molecular Biology: Directional flow of genetic information: DNA replication -> DNA transcription -> Messenger RNA translation -> Functional polypeptide protein; Exceptions include reverse transcription in retroviruses (RNA -> DNA via reverse transcriptase).",
      "Semi-Conservative DNA Replication: Meselson-Stahl experiment using 15-N isotope density gradient centrifugation confirmed semi-conservative replication; Bidirectional replication forks initiate at defined origin of replication (oriC in E. coli).",
      "Replication Fork Enzymes & Machinery: Helicase (unwinds parental duplex), Single-Strand DNA-Binding proteins (SSB, prevents reannealing), DNA topoisomerase / gyrase (relieves torsional supercoiling), Primase (synthesizes short RNA primers), and DNA Polymerase III (synthesizes nascent DNA strictly in 5-prime to 3-prime direction).",
      "Leading vs Lagging Strand Synthesis: Leading strand synthesized continuously toward moving replication fork; Lagging strand synthesized discontinuously away from fork as discrete Okazaki fragments (1000-2000 nucleotides in prokaryotes); DNA Polymerase I removes RNA primers via 5-prime to 3-prime exonuclease activity and fills gaps; DNA ligase seals phosphodiester nicks.",
      "Prokaryotic Transcription Mechanism: Catalyzed by DNA-dependent RNA polymerase; Core enzyme (alpha2-beta-beta_prime-omega) associates with sigma factor to form holoenzyme that recognizes -10 (Pribnow box TATAAT) and -35 promoter consensus sequences; Chain elongation in 5-prime to 3-prime direction; Termination via Rho-dependent or intrinsic Rho-independent (hairpin stem-loop) mechanisms.",
      "Eukaryotic Transcription & Pre-mRNA Processing: Three distinct RNA polymerases (Pol I for rRNA, Pol II for protein-encoding mRNA, Pol III for tRNA); Co-transcriptional mRNA processing: 5-prime 7-methylguanosine cap addition, 3-prime cleavage and polyadenylation (poly-A tail of 200-250 adenines), and spliceosomal removal of non-coding introns with exon ligation.",
      "Genetic Code Universal Properties: Triplet codon organization (64 codons); Degenerate / redundant (61 codons specify 20 standard amino acids, multiple codons for single amino acid); Non-overlapping, comma-less, and nearly universal; Start codon AUG (methionine); Stop nonsense codons: UAA (ochre), UAG (amber), UGA (opal).",
      "Crick's Wobble Hypothesis: Non-standard base pairing allowed at third 3-prime base position of mRNA codon and first 5-prime base position of tRNA anticodon; Inosine (I) at wobble position pairs with U, C, or A; Explains why 31 tRNA species suffice to read all 61 sense codons.",
      "Ribosomal Translation Stages: Activation of amino acids by aminoacyl-tRNA synthetases; Initiation (assembly of small and large ribosomal subunits around AUG with initiation factors and fMet-tRNA); Elongation (decoding at A-site, peptide bond synthesis at P-site by peptidyl transferase, translocation driven by EF-G); Termination (release factors bind stop codons, releasing polypeptide).",
      "University Examination Strategy: Draw a detailed diagram of the DNA replication fork labeling leading and lagging strands and Okazaki fragments, summarize the Meselson-Stahl experiment, and list the three post-transcriptional modifications of eukaryotic mRNA."
    ],
    "keyPoints": [
      "Meselson-Stahl Proof: Proved semi-conservative DNA replication using 15-N/14-N density gradient centrifugation.",
      "DNA Polymerase III Direction: Polymerizes dNTPs strictly in 5-prime to 3-prime direction.",
      "Okazaki Fragments Length: Discontinuous 1000 to 2000 nucleotide segments on lagging strand in bacteria.",
      "Prokaryotic Promoter Consensus: -10 Pribnow box (TATAAT) and -35 region (TTGACA).",
      "Stop Nonsense Codons: UAA, UAG, and UGA specify chain termination (no matching tRNAs).",
      "Start Initiation Codon: AUG codes for N-formylmethionine in prokaryotes and methionine in eukaryotes.",
      "Wobble Base Position: Non-standard pairing allowed at 3-prime end of codon and 5-prime end of anticodon.",
      "Eukaryotic Splicing Core: Spliceosome made of small nuclear ribonucleoproteins (snRNPs U1, U2, U4, U5, U6).",
      "Polyadenylation Function: Poly-A tail at 3-prime end protects mRNA from enzymatic exonucleolytic degradation.",
      "Exam Scoring Tip: DNA polymerase requires a pre-existing 3-prime hydroxyl (-OH) primer to initiate synthesis, whereas RNA polymerase can initiate de novo transcription without primers."
    ]
  },
  "biochemistry:::u5": {
    "highlights": [
      "Diagnostic Clinical Enzymology: Measurement of intracellular enzyme levels released into serum following tissue necrosis or altered membrane permeability; Key markers: Creatine Kinase (CK-MB for myocardial infarction), Aspartate Aminotransferase (AST / SGOT) and Alanine Aminotransferase (ALT / SGPT for liver parenchymal damage).",
      "Cardiac Biomarkers in Myocardial Infarction: Sequential elevation profiles: Cardiac troponins (cTnI and cTnT, highly sensitive gold standard, elevated within 3-6 hours, peaks at 24 hours, persists 10-14 days), CK-MB isoenzyme (peaks at 18-24 hours, returns to baseline by 48-72 hours, useful for detecting re-infarction), and Myoglobin (earliest non-specific marker).",
      "Liver Function Tests (LFT): Synthetic capacity markers (serum albumin, prothrombin time PT / INR); Excretory and cholestatic markers (Total and conjugated direct bilirubin, Alkaline Phosphatase ALP, Gamma-Glutamyl Transferase GGT); Hepatocellular necrosis markers (ALT, AST; De Ritis ratio AST/ALT > 2 indicates alcoholic liver disease).",
      "Kidney Function Tests (KFT) & Renal Clearance: Blood Urea Nitrogen (BUN), serum creatinine, and estimated Glomerular Filtration Rate (eGFR); Creatinine clearance test: Ccr = (Ucr * V) / Pcr; Jaffe reaction (creatinine reacts with alkaline picrate to form orange-red Janovski complex); Normal GFR 90 to 120 mL per minute.",
      "Blood Glucose Homeostasis & Diabetes Mellitus: Diagnostic criteria: Fasting plasma glucose (FPG >= 126 mg/dL), 2-hour post-load Oral Glucose Tolerance Test (OGTT >= 200 mg/dL), and Glycated Hemoglobin (HbA1c >= 6.5 percent); HbA1c reflects average retrospective glycemic control over preceding 8 to 12 weeks.",
      "Serum Lipid Profile & Cardiovascular Risk: Total cholesterol, High-Density Lipoprotein (HDL-C, protective anti-atherogenic), Low-Density Lipoprotein (LDL-C, primary atherogenic target), and Triacylglycerols; Friedewald calculation: LDL = Total Cholesterol - HDL - (Triglycerides / 5), valid for triglycerides < 400 mg/dL.",
      "Plasma Proteins & Serum Protein Electrophoresis (SPEP): Cellulose acetate or agarose electrophoresis separating serum into 5 distinct bands: Albumin (fastest, largest peak), Alpha-1, Alpha-2, Beta, and Gamma-globulins; Monoclonal gammopathy (paraprotein M-spike in multiple myeloma).",
      "Acid-Base Balance & Arterial Blood Gases (ABG): Henderson-Hasselbalch equation: pH = 6.1 + log([HCO3-] / (0.03 * PaCO2)); Normal arterial parameters: pH 7.35-7.45, PaCO2 35-45 mmHg, HCO3- 22-26 mEq/L; Classifications: Metabolic acidosis, Metabolic alkalosis, Respiratory acidosis, and Respiratory alkalosis.",
      "Urinalysis & Pathological Constituents: Physical (color, specific gravity 1.005-1.030, pH 4.5-8.0); Chemical Dipstick: Proteinuria (microalbuminuria in diabetic nephropathy), Glucosuria (exceeding renal glucose threshold 180 mg/dL), Ketonuria (diabetic ketoacidosis), and Bilirubin/Urobilinogen.",
      "University Examination Strategy: Construct a comparative time-course graph of cardiac biomarkers (Troponin, CK-MB, LDH) post-myocardial infarction, apply the Henderson-Hasselbalch equation to calculate blood pH, and state the diagnostic criteria for diabetes mellitus."
    ],
    "keyPoints": [
      "Henderson-Hasselbalch Blood Formula: pH = 6.1 + log([HCO3-] / [0.03 * PaCO2]).",
      "Creatinine Clearance Equation: Ccr = (Ucr * V) / (Pcr * 1440) in mL per minute.",
      "Friedewald LDL Equation: LDL = Total Cholesterol - HDL - (Triglycerides / 5).",
      "Normal Fasting Blood Glucose: 70 to 99 mg/dL (Diabetes diagnosed at >= 126 mg/dL).",
      "Diabetes HbA1c Benchmark: HbA1c >= 6.5 percent diagnostic of Diabetes Mellitus.",
      "Gold Standard Cardiac Marker: Cardiac Troponin I (cTnI) and Troponin T (cTnT).",
      "Renal Glucosuria Threshold: Blood glucose exceeding 180 mg/dL spills into urine.",
      "Jaffe Creatinine Reaction: Alkaline picrate reacts with creatinine producing yellow-orange color.",
      "De Ritis Ratio Diagnostic: AST / ALT ratio > 2.0 strongly indicates alcoholic hepatitis.",
      "Exam Scoring Tip: Glycated hemoglobin (HbA1c) requires no patient fasting and reflects erythrocyte glucose exposure over their 120-day mean lifespan."
    ]
  },
  "human anatomy & physiology:::u1": {
    "highlights": [
      "Structural Organization of the Human Body: Chemical level -> Cellular -> Tissue -> Organ -> Organ system -> Organism; Homeostasis: Dynamic maintenance of constant internal physiological environment (milieu interieur) via negative and positive biological feedback loops.",
      "Cellular Membrane & Transport Mechanics: Amphipathic lipid bilayer with embedded ion channels and carrier proteins; Simple passive diffusion (Fick's law), Facilitated diffusion via carrier permeases, Primary active transport (Na+/K+ ATPase electrogenic pump), Secondary active transport (symport and antiport), and Endocytosis/Exocytosis.",
      "Cellular Organelles & Functional Roles: Mitochondria (oxidative phosphorylation and apoptosis), Rough endoplasmic reticulum (ribosomal protein synthesis), Smooth ER (lipid/steroid synthesis and calcium sequestration), Golgi apparatus (post-translational sorting and packaging), Lysosomes, and Peroxisomes.",
      "Classification of Primary Human Tissues: Four fundamental tissue types: (1) Epithelial tissue; (2) Connective tissue; (3) Muscular tissue; (4) Nervous tissue.",
      "Epithelial Tissue Morphological Architecture: Classified by cell layers (simple vs stratified) and shape (squamous, cuboidal, columnar); Simple squamous epithelium (vascular endothelium, lung alveoli for diffusion); Stratified squamous keratinized epithelium (skin epidermis for abrasion barrier); Pseudostratified ciliated columnar (trachea).",
      "Intercellular Cell Junctions: Tight junctions (zonula occludens, impermeable barrier sealing epithelial sheets), Desmosomes (macula adherens, intermediate filament anchor resisting shear stress), Hemidesmosomes, and Gap junctions (connexon hexamers allowing direct metabolic and electrical ionic coupling).",
      "Connective Tissue Proper & Specialized Varieties: Composed of cells (fibroblasts, macrophages, mast cells) and extracellular matrix (collagen, elastin, proteoglycans); Loose areolar, Adipose (white and brown), Dense regular (tendons, ligaments); Specialized: Cartilage (hyaline, elastic, fibrocartilage), Bone (osseous), and Blood.",
      "Muscle Tissue Types: Skeletal muscle (striated, multinucleated, voluntary, somatic motor control), Cardiac muscle (striated, single central nucleus, involuntary, intercalated discs with gap junctions, autorhythmic pacemaker), and Smooth muscle (non-striated, spindle-shaped, single nucleus, involuntary, autonomic control in blood vessels and viscera).",
      "Nervous Tissue Anatomy: Neurons (excitable signaling cells: soma cell body, dendrites, axon hillock, myelin sheath, synaptic terminals) and Neuroglia / Glial cells: Astrocytes (blood-brain barrier, potassium buffering), Oligodendrocytes (CNS myelination), Schwann cells (PNS myelination), and Microglia (resident phagocytes).",
      "University Examination Strategy: Draw a high-magnification diagram of the four primary tissue classes with histological features, explain the working mechanism of the Na+/K+ ATPase pump, and contrast skeletal vs cardiac muscle."
    ],
    "keyPoints": [
      "Sodium-Potassium ATPase Stoichiometry: Pumps 3 Na+ out of cell and 2 K+ into cell per ATP hydrolyzed.",
      "Resting Membrane Potential: Approximately -70 mV in neurons and -90 mV in cardiac ventricular myocytes.",
      "Simple Squamous Site: Lines capillary walls and alveolar air sacs for minimal diffusion resistance.",
      "Dense Regular Connective Tissue: Parallel collagen bundles in tendons linking skeletal muscle to bone.",
      "Hyaline Cartilage Distribution: Articular joint surfaces, costal cartilage, tracheal rings, and embryonic skeleton.",
      "Intercalated Discs Component: Desmosomes for mechanical linkage plus gap junctions for electrical syncytium.",
      "Schwann Cell Function: Synthesizes lipid-rich myelin sheath surrounding peripheral nervous system axons.",
      "Oligodendrocyte Function: Myelinates multiple central nervous system axons in brain and spinal cord.",
      "Fick's Diffusion Law: Rate of diffusion is proportional to surface area and concentration gradient over membrane thickness.",
      "Exam Scoring Tip: Skeletal muscle fibers are true anatomical syncytia formed by embryonic fusion of hundreds of individual myoblast cells."
    ]
  },
  "human anatomy & physiology:::u2": {
    "highlights": [
      "Functions of the Skeletal Framework: Structural support, mechanical protection of vital organs (cranium, ribcage), dynamic lever system for locomotion, mineral homeostasis (calcium and phosphate reservoir), and hematopoiesis (blood cell generation in red bone marrow).",
      "Gross Bone Morphology & Classification: Long bones (femur, humerus; diaphysis tubular shaft, epiphysis expanded ends, metaphysis, epiphyseal growth plate), Short bones (carpals, tarsals), Flat bones (skull, sternum), Irregular bones (vertebrae), and Sesamoid bones (patella, embedded in quadriceps tendon).",
      "Microscopic Bone Anatomy (Haversian System / Osteon): Compact cortical bone structured into concentric cylindrical osteons; Central Haversian canal containing neurovascular bundle; Concentric lamellae; Lacunae housing osteocytes; Interconnecting canaliculi for nutrient diffusion; Volkmann's perforating transverse canals.",
      "Cellular Population of Bone: Osteoprogenitor cells (mesenchymal stem cells), Osteoblasts (bone-forming cells synthesizing organic osteoid matrix and alkaline phosphatase), Osteocytes (mature mechanosensory cells maintaining matrix), and Osteoclasts (multinucleated giant cells derived from monocyte lineage that resorb bone via acid and cathepsin K).",
      "Endochondral vs Intramembranous Ossification: Intramembranous ossification (direct mineralization of embryonic mesenchymal membrane; forms flat bones of cranial vault, clavicle); Endochondral ossification (hyaline cartilage model replaced by bone; forms long bones via primary diaphyseal and secondary epiphyseal ossification centers).",
      "Axial Skeleton Anatomy: 80 bones; Cranial and facial skull bones, vertebral column (7 cervical, 12 thoracic, 5 lumbar, 1 sacrum, 1 coccyx), sternum, and 12 pairs of ribs (true ribs 1-7, false ribs 8-10, floating ribs 11-12).",
      "Appendicular Skeleton Anatomy: 126 bones; Pectoral girdle (clavicle and scapula) and upper limbs (humerus, radius, ulna, carpals, metacarpals, phalanges); Pelvic girdle (os coxae: ilium, ischium, pubis) and lower limbs (femur, patella, tibia, fibula, tarsals, metatarsals, phalanges).",
      "Joint Classifications (Arthrology): Fibrous joints (synarthroses, immovable: cranial sutures, syndesmoses, gomphoses), Cartilaginous joints (amphiarthroses, slightly movable: synchondroses e.g. epiphyseal plate, symphyses e.g. pubic symphysis, intervertebral discs), and Synovial joints (diarthroses, freely movable).",
      "Synovial Joint Architecture: Articular hyaline cartilage, joint cavity filled with viscous synovial fluid (hyaluronic acid lubricant), fibrous articular capsule lined by inner synovial membrane, and reinforcing intracapsular/extracapsular ligaments; Types: Ball-and-socket, Hinge, Pivot, Condyloid, Saddle, and Gliding plane joints.",
      "University Examination Strategy: Draw a cross-section of compact bone detailing the Haversian osteon system, describe endochondral ossification stages from embryonic cartilage to adulthood, and classify synovial joints with anatomical examples."
    ],
    "keyPoints": [
      "Haversian System Component: Central canal surrounded by concentric lamellae, lacunae, and radiating canaliculi.",
      "Osteoblast Secretion: Type I collagen fibers and alkaline phosphatase for calcium hydroxyapatite deposition.",
      "Osteoclast Resorption: Secretes hydrochloric acid and cathepsin K to dissolve mineral and protein matrix.",
      "Bone Mineral Phase: Calcium hydroxyapatite crystal formula Ca10(PO4)6(OH)2.",
      "Vertebral Formula in Human: 7 Cervical, 12 Thoracic, 5 Lumbar, 5 Sacral (fused), 4 Coccygeal (fused).",
      "True Ribs Definition: Rib pairs 1 through 7 connect directly to the sternum via costal cartilages.",
      "Synovial Joint Hallmark: Presence of a fluid-filled joint cavity enclosed by an articular synovial capsule.",
      "Ball-and-Socket Joint Examples: Glenohumeral shoulder joint and acetabulofemoral hip joint (multiaxial triaxial motion).",
      "Hinge Joint Examples: Humeroulnar elbow joint and interphalangeal finger joints (uniaxial flexion-extension).",
      "Exam Scoring Tip: Blood calcium homeostasis is regulated by Parathyroid Hormone (PTH, stimulates osteoclasts to raise calcium) and Calcitonin (inhibits osteoclasts to lower calcium)."
    ]
  },
  "human anatomy & physiology:::u3": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "human anatomy & physiology:::u4": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "human anatomy & physiology:::u5": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "microbiology:::u1": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "microbiology:::u2": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "microbiology:::u3": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "microbiology:::u4": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "microbiology:::u5": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "biomedical instrumentation:::u1": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "biomedical instrumentation:::u2": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "biomedical instrumentation:::u3": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "biomedical instrumentation:::u4": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  },
  "biomedical instrumentation:::u5": {
    "highlights": [
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
    ],
    "keyPoints": [
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
    ]
  }
};

export function getBTechSem3UnitKnowledge(subjectName: string, unitNumber: number): TopicKnowledge | null {
  const s = subjectName.toLowerCase().trim();
  const key = `${s}:::u${unitNumber}`;
  if (btechSem3Knowledge[key]) {
    return btechSem3Knowledge[key];
  }
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(btechSem3Knowledge)) {
    const [subKey, uKey] = k.split(":::u");
    if (uKey === String(unitNumber) && (s.includes(subKey) || subKey.includes(s))) {
      return v;
    }
  }
  return null;
}
