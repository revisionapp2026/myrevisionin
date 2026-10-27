import json
import os

with open("scripts/build_bsc_sem2_math_cs.py", "r", encoding="utf-8") as f:
    content = f.read()

part4 = '''
# =========================================================================
# 6. DATA STRUCTURES & ALGORITHMS (B.Sc DS-AI Sem 2)
# =========================================================================

add_unit(
    "bsc-dsa: lists & arrays",
    [
        "Dynamic Array Amortization Theory: Automatic resizing array strategy; When capacity $C$ is reached, allocate $2C$, copy elements, and deallocate old buffer; Amortized analysis proves $\\\\mathcal{O}(1)$ average append cost.",
        "The Potential Method in Amortized Analysis: Potential function $\\\\Phi(D_i) = 2i - 2^{\\\\lceil \\\\lg i \\\\rceil}$; Amortized cost $\\\\hat{c}_i = c_i + \\\\Phi(D_i) - \\\\Phi(D_{i-1}) = 3 = \\\\mathcal{O}(1)$ across any sequence of $n$ operations.",
        "Skip Lists Probabilistic Data Structure: Multi-level linked hierarchy providing logarithmic $\\\\mathcal{O}(\\\\log n)$ search, insert, and delete without complex tree rebalancing; Level promotion follows geometric coin flips with parameter $p = 1/2$.",
        "Cache-Oblivious Array Layouts: Van Emde Boas recursive layout of binary search trees in contiguous memory arrays; Minimizes cache line transfers to $\\\\mathcal{O}(\\\\log_B N)$ on two-level memory hierarchies.",
        "XOR Linked List Compact Memory Representation: Memory-efficient doubly linked list storing single pointer field $nptr = \\\\text{prev} \\\\oplus \\\\text{next}$; Traversal reconstructed via bitwise XOR operations: $\\\\text{next} = nptr \\\\oplus \\\\text{prev}$.",
        "Self-Organizing Lists & Heuristics: Dynamic linked list reorganizing on search to optimize for non-uniform access frequencies; Move-to-Front (MTF) heuristic is 2-competitive against offline optimal; Transpose heuristic.",
        "Static vs Dynamic Prefix Sums: Static array prefix sums $P[i] = \\\\sum_{k=0}^i A[k]$ answer range queries $\\\\sum_{k=l}^r A[k] = P[r] - P[l-1]$ in $\\\\mathcal{O}(1)$ time; Dynamic updates require Fenwick tree (Binary Indexed Tree).",
        "Fenwick Tree (Binary Indexed Tree): Array-based structure storing cumulative frequency sums; Queries and updates execute in $\\\\mathcal{O}(\\\\log n)$ using bitwise isolation of lowest set bit: `i & (-i)`.",
        "Segment Tree for Associative Range Queries: Complete binary tree answering range minimum/maximum/sum queries in $\\\\mathcal{O}(\\\\log n)$ and point updates in $\\\\mathcal{O}(\\\\log n)$; Lazy propagation enables $\\\\mathcal{O}(\\\\log n)$ range updates.",
        "Sparse Table for Static RMQ: Range Minimum Query table using dynamic programming: $M[i][j] = \\\\min(M[i][j-1], M[i + 2^{j-1}][j-1])$; Preprocessing in $\\\\mathcal{O}(n \\\\log n)$ answers RMQ queries in $\\\\mathcal{O}(1)$ time."
    ],
    [
        "Amortized Append Cost: $\\\\mathcal{O}(1)$ despite $\\\\mathcal{O}(n)$ occasional doubling reallocation.",
        "Potential Method Formula: $\\\\hat{c}_i = c_i + \\\\Phi(D_i) - \\\\Phi(D_{i-1})$.",
        "Skip List Height: Expected height is $\\\\mathcal{O}(\\\\log_{1/p} n)$.",
        "XOR Linked List Identity: $A \\\\oplus (A \\\\oplus B) = B$.",
        "Prefix Sum Range Query: $\\\\text{Sum}(l, r) = P[r] - P[l-1]$.",
        "Fenwick Index Navigation: Lowest set bit extracted via expression `i & (-i)`.",
        "Segment Tree Space Bound: Requires at most $4n$ array nodes for array of length $n$.",
        "Sparse Table RMQ: $\\\\mathcal{O}(1)$ query time for idempotent operators (minimum, maximum, GCD).",
        "Move-to-Front Competitiveness: MTF is 2-competitive with static optimal ordering.",
        "Exam Tip: In dynamic arrays, shrinking should occur at 1/4 capacity to 1/2 capacity (not at 1/2 capacity) to avoid rapid re-allocation thrashing."
    ]
)

add_unit(
    "bsc-dsa: stacks & queues",
    [
        "Monotonic Stack Paradigm: Stack maintaining elements in strictly increasing or decreasing order; Resolves Next Greater Element (NGE) and Previous Smaller Element for all $n$ array elements in linear $\\\\mathcal{O}(n)$ time.",
        "Largest Rectangle in Histogram: Monotonic increasing stack tracking indices; Pops bar when smaller bar is encountered, computing area width as $i - stack.top() - 1$; Total runtime $\\\\mathcal{O}(n)$.",
        "Monotonic Deque & Sliding Window Maximum: Double-ended queue maintaining indices of prospective maximum values in sliding window of size $k$; Amortized $\\\\mathcal{O}(1)$ per window slide, yielding global $\\\\mathcal{O}(n)$ time.",
        "Two-Stack Queue Implementation: Queue simulated using two stacks ($S_1$ for enqueue, $S_2$ for dequeue); Elements transferred only when $S_2$ is empty; Amortized cost per operation is $\\\\mathcal{O}(1)$.",
        "Circular Buffer Lock-Free Queues: Ring buffer using atomic head and tail pointers; Used extensively in high-frequency trading and Linux kernel ring buffers (`kfifo`) for single-producer single-consumer thread communication.",
        "Min-Stack / Max-Stack in $\\\\mathcal{O}(1)$: Auxiliary stack tracking running minimum, or storing difference values $2x - \\\\min$; Retrieves minimum element in constant $\\\\mathcal{O}(1)$ time and $\\\\mathcal{O}(n)$ extra space.",
        "Expression Syntax Parsing & Evaluation: Conversion between Infix, Prefix (Polish), and Postfix (Reverse Polish) representations; Abstract Syntax Tree (AST) construction via recursive descent or shunting-yard stack parsing.",
        "Parentheses & Bracket Balancing: Stack pushing opening brackets, popping on closing match; Failure modes: stack underflow on unmatched close, non-empty stack on completion, mismatched bracket types.",
        "Priority Deque & Double-Ended Priority Queue (DEPQ): Interval heap or min-max heap; Simultaneously retrieves both minimum and maximum elements in $\\\\mathcal{O}(1)$ and deletes in $\\\\mathcal{O}(\\\\log n)$ time.",
        "Queueing Discipline & Fair Queuing: FIFO vs LIFO vs Priority; Weighted Fair Queuing (WFQ) approximating Generalized Processor Sharing (GPS) in network packet schedulers."
    ],
    [
        "Monotonic Stack Complexity: Each element pushed once and popped at most once $\\\\implies \\\\mathcal{O}(n)$ total time.",
        "Sliding Window Maximum Time: $\\\\mathcal{O}(n)$ using monotonic deque.",
        "Two-Stack Queue Amortization: Amortized cost of `dequeue()` is $\\\\mathcal{O}(1)$.",
        "Min-Stack Property: `getMin()` executes in $\\\\mathcal{O}(1)$ time.",
        "Lock-Free Ring Buffer: Requires no mutual exclusion mutexes for single-producer single-consumer.",
        "Shunting-Yard Precedence: Operator of lower precedence forces higher precedence operators off the stack.",
        "Histogram Max Area Complexity: Solved in linear $\\\\mathcal{O}(n)$ time via monotonic stack.",
        "Bracket Match Invariant: Balanced string of length $n$ must have non-negative prefix balance and zero final balance.",
        "Min-Max Heap Property: Levels alternate between min-levels and max-levels.",
        "Exam Tip: In monotonic stack questions, trace the exact index bounds ($i$ and current top) to verify rectangle width calculations."
    ]
)

add_unit(
    "bsc-dsa: trees",
    [
        "Self-Balancing Binary Search Trees: Motivation: prevent degenerate $\\\\mathcal{O}(n)$ BST worst-case behavior; Invariant maintenance guarantees logarithmic height $h = \\\\mathcal{O}(\\\\log n)$ for all dynamic operations.",
        "AVL Trees & Balance Factors: For every node $X$, balance factor $BF(X) = \\\\text{height}(X.left) - \\\\text{height}(X.right) \\\\in \\\\{-1, 0, 1\\\\}$; Height bounded tightly by $h < 1.44 \\\\log_2(n + 2)$.",
        "AVL Rotations & Rebalancing: Four rebalancing cases following insertion: Left-Left (Single Right Rotation), Right-Right (Single Left Rotation), Left-Right (Double Rotation: Left then Right), Right-Left (Double Rotation: Right then Left); All rotations execute in $\\\\mathcal{O}(1)$ pointer operations.",
        "Red-Black Tree Structural Invariants: (1) Every node is red or black; (2) Root is black; (3) All leaf nodes (NIL) are black; (4) Red node cannot have red children (no two consecutive reds); (5) Black-height rule: every simple path from node to descendant leaf contains identical count of black nodes.",
        "Red-Black Tree Height Bound: Maximum tree height $h \\le 2 \\log_2(n + 1)$; Insertion requires at most 2 rotations; Deletion requires at most 3 rotations; Favored in standard library associative maps (`std::map`, Java `TreeMap`).",
        "Splay Trees & Self-Adjusting Heuristics: Binary search tree using amortized splaying heuristic; Every accessed node is rotated to root via zig, zig-zig, and zig-zag splay steps; Amortized complexity $\\\\mathcal{O}(\\\\log n)$ per operation without storing explicit balance metadata.",
        "B-Trees & Multi-Way Disk Search Trees: Balanced search tree designed for block-storage systems; Parameter $t$ (minimum degree); Every node except root contains between $t-1$ and $2t-1$ keys; All leaves reside at exact same depth; Height $h \\le \\\\log_t \\\\frac{n+1}{2}$.",
        "B+ Tree Architecture: B-tree modification where internal nodes act exclusively as index routers; All actual records/data pointers stored exclusively in leaves; Leaf nodes linked sequentially as doubly linked list for fast range scan queries.",
        "Trie (Prefix Tree) Data Structure: Multi-way tree storing strings where edges represent characters; Lookup and insertion run in $\\\\mathcal{O}(L)$ time where $L$ is string length, independent of total dictionary size $N$; Compressed Radix trie (Patricia tree).",
        "Fenwick Tree vs Segment Tree Comparison: Fenwick tree is simpler and more space-efficient ($n$ integers) for prefix sums; Segment tree is more versatile, supporting arbitrary non-invertible associative aggregations (minimum, GCD, matrix multiplication)."
    ],
    [
        "AVL Balance Factor Rule: $|h_L - h_R| \\le 1$ at every node.",
        "AVL Max Height Bound: $h \\approx 1.44 \\log_2 n$.",
        "AVL Rotation Time: Constant $\\\\mathcal{O}(1)$ time; at most 2 rotations per insertion.",
        "Red-Black Invariant 4: No two consecutive red nodes on any path.",
        "Red-Black Black Height Rule: All paths from root to NIL leaves contain identical black node count.",
        "Red-Black Max Height: $h \\le 2 \\log_2(n + 1)$.",
        "Splay Tree Amortization: Any sequence of $m$ operations takes $\\\\mathcal{O}(m \\log n)$ time.",
        "B-Tree Leaf Depth: All leaves are at the exact same depth (perfect balance).",
        "B+ Tree Range Advantage: Direct leaf-level horizontal linked list scan eliminates tree traversals.",
        "Exam Tip: When an insertion causes an AVL unbalance, identify the lowest unbalanced ancestor and determine whether it is an LL, RR, LR, or RL case."
    ]
)

add_unit(
    "bsc-dsa: sorting",
    [
        "Comparison Sort Information-Theoretic Lower Bound: Binary decision tree model; $n!$ possible permutations requires tree height $h \\ge \\log_2(n!) = \\Omega(n \\log n)$ comparisons in the worst case; Proves optimality of Merge sort and Heap sort.",
        "Merge Sort Divide-and-Conquer Analysis: Recurrence $T(n) = 2 T(n/2) + \\Theta(n)$; By Master Theorem case 2, $T(n) = \\Theta(n \\log n)$ across worst, average, and best cases; External sorting algorithm of choice for magnetic disks.",
        "Quicksort Probabilistic Analysis: Average-case recurrence $T(n) = \\frac{2}{n} \\sum_{k=1}^{n-1} T(k) + \\Theta(n) = 2 n \\ln n \\approx 1.386 n \\log_2 n$; Randomized pivot selection guarantees expected time $\\\\mathcal{O}(n \\log n)$ independent of input ordering.",
        "Heap Sort & Priority Queue Sorting: Binary heap array layout; `BuildMaxHeap` runs in linear time $\\\\mathcal{O}(n)$ (sum of series $\\\\sum \\frac{h}{2^h}$); Extraction of $n$ elements takes $n \\times \\\\mathcal{O}(\\\\log n)$, yielding total time $\\\\mathcal{O}(n \\log n)$ in-place.",
        "Counting Sort (Non-Comparison Linear Sort): Counts frequencies of keys in range $[0, k]$; Computes prefix sums to place elements into output array in stable order; Time complexity $\\\\mathcal{O}(n + k)$; Requires $\\\\mathcal{O}(n + k)$ auxiliary space.",
        "Radix Sort (LSD & MSD): Sorts keys digit-by-digit from least significant digit (LSD) to most significant using stable subroutine (Counting sort); Time complexity $\\\\mathcal{O}(d(n + k))$ where $d$ is number of digits; Linear $\\\\mathcal{O}(n)$ when $k = \\\\mathcal{O}(n)$.",
        "Bucket Sort: Assumes uniform distribution across interval $[0, 1)$; Partitions input into $n$ equal-sized buckets, sorts buckets individually via insertion sort; Expected running time $\\\\mathcal{O}(n)$.",
        "Timsort Hybrid Sorting Algorithm: Modern hybrid of Merge sort and Insertion sort; Identifies existing natural runs in input; Employs Galloping mode during merging; Standard default sorting algorithm in Python (`list.sort`) and Java (`Arrays.sort`).",
        "Quickselect Algorithm: Hoare's selection algorithm finding $k$-th smallest element; Partitions around pivot and recurses into single subproblem; Average running time is linear $\\\\mathcal{O}(n)$; Worst-case $\\\\mathcal{O}(n^2)$ avoided via Median-of-Medians (BFPRT) algorithm.",
        "Median-of-Medians Deterministic Selection: Divides $n$ elements into groups of 5; Finds median of each group; Recurrence $T(n) \\le T(n/5) + T(7n/10) + \\mathcal{O}(n)$; Guarantees deterministic worst-case linear time $\\\\mathcal{O}(n)$ selection."
    ],
    [
        "Comparison Sort Lower Bound: $\\\\Omega(n \\log n)$ comparisons required in worst case.",
        "Build-Max-Heap Complexity: Runs in strictly linear time $\\\\mathcal{O}(n)$ (not $\\\\mathcal{O}(n \\log n)$).",
        "Counting Sort Time: $\\\\mathcal{O}(n + k)$ where $k$ is the integer key range.",
        "Radix Sort Time: $\\\\mathcal{O}(d(n + k))$ using stable counting sort on each digit.",
        "Bucket Sort Assumption: Assumes input is generated by a uniform random distribution.",
        "Quickselect Average Time: Linear $\\\\mathcal{O}(n)$ time for finding order statistics.",
        "Median-of-Medians Recurrence: $T(n) = T(n/5) + T(7n/10) + \\\\mathcal{O}(n) \\implies \\\\mathcal{O}(n)$.",
        "Timsort Space Complexity: Requires $\\\\mathcal{O}(n)$ temporary buffer for merging runs.",
        "Randomized Quicksort Expectation: Expected comparison count is $2 n \\ln n$.",
        "Exam Tip: Counting sort is only efficient when range $k$ is not significantly larger than $n$ (i.e. $k = \\\\mathcal{O}(n)$)."
    ]
)

add_unit(
    "bsc-dsa: searching & hashing",
    [
        "Cuckoo Hashing & Constant Worst-Case Lookup: Employs two independent hash functions $h_1(k)$ and $h_2(k)$ with two separate tables; Key inserted into $h_1(k)$; If occupied, displaced key kicked to its alternate position $h_2(k')$; Lookup takes worst-case $\\\\mathcal{O}(1)$ time.",
        "Robin Hood Hashing: Open addressing collision resolution prioritizing elements based on displacement distance (probe count) from home slot; Rich keys give up slots to poorer keys; Minimizes variance of search times.",
        "Universal Hashing Framework: Family of hash functions $\\\\mathcal{H}$ such that for any pair of distinct keys $x \\ne y$, $P_{h \\in \\mathcal{H}}(h(x) = h(y)) \\le 1/m$; Linear congruential form $h_{a,b}(k) = ((a k + b) \\pmod p) \\pmod m$ guarantees expected search time $\\\\mathcal{O}(1)$.",
        "Perfect Hashing (Fredman-Komlos-Szemeredi FKS): Two-level hashing scheme for static sets; Level 1 hash table of size $m = n$; Level 2 table of size $s_i = n_i^2$ with zero collisions; Guarantees worst-case $\\\\mathcal{O}(1)$ lookup in $\\\\mathcal{O}(n)$ total space.",
        "Bloom Filters (Probabilistic Set Membership): Bit array of size $m$ with $k$ independent hash functions; Insertion sets $k$ hash bits to 1; Query returns 'possibly in set' or 'definitely not in set'; Zero false negatives ($0\\\\%$ false negative rate).",
        "Bloom Filter False Positive Derivation: Probability of false positive error: $p \\approx \\left(1 - e^{-k n / m}\\right)^k$; Optimal number of hash functions minimizing false positives is $k = \\frac{m}{n} \\ln 2 \\approx 0.693 \\frac{m}{n}$.",
        "Count-Min Sketch (Streaming Frequency Estimation): 2D array of counters with $d$ hash functions; Updates increment counters; Point query computes minimum counter value across $d$ rows, providing biased upper bound with provable $(\\\\varepsilon, \\\\delta)$ guarantees.",
        "HyperLogLog for Cardinality Estimation: Probabilistic streaming algorithm estimating number of distinct elements (cardinality) in massive datasets; Observes maximum number of leading zeros in hashed bitstream; Uses $\\\\mathcal{O}(\\\\log \\\\log N)$ space with typical standard error $1.04/\\\\sqrt{m}$.",
        "Consistent Hashing in Distributed Caching: Distributed hash ring $0$ to $2^{32}-1$; Servers and keys mapped to ring; Key assigned to first clockwise server; Adding or removing server affects only $K/N$ keys on average; Virtual nodes eliminate hotspots.",
        "Locality-Sensitive Hashing (LSH): Hash functions designed so that similar items collide with high probability; Used for nearest-neighbor search, duplicate image detection, and high-dimensional document cosine similarity."
    ],
    [
        "Cuckoo Lookup: Guaranteed worst-case $\\\\mathcal{O}(1)$ lookup (inspects at most 2 locations).",
        "Universal Hashing Collision Bound: $P(h(x) = h(y)) \\le 1/m$.",
        "FKS Perfect Hashing Space: Second level uses $s_i = n_i^2$ slots, total expected space is $\\\\mathcal{O}(n)$.",
        "Bloom Filter Invariant: Zero false negatives (if it says absent, it is definitely absent).",
        "Optimal Bloom Hash Count: $k = (m/n) \\ln 2$.",
        "HyperLogLog Memory Footprint: Requires only $\\\\mathcal{O}(\\\\log \\\\log N)$ memory bits.",
        "Consistent Hashing Benefit: Minimizes key re-distribution during cluster resizing.",
        "Count-Min Sketch Query: Returns $\\\\min_{1 \\le i \\le d} \\\\text{count}[i][h_i(x)]$.",
        "Robin Hood Rule: Displace existing key if its probe distance is smaller than current key\\'s probe distance.",
        "Exam Tip: In Bloom filter calculations, always verify that the optimal hash count $k$ is rounded to the nearest integer."
    ]
)

# =========================================================================
# 7. DATA STRUCTURES (B.Sc Math Sem 2)
# =========================================================================

add_unit(
    "bsc-dsm: arrays & lists",
    [
        "Combinatorial Inversions in Linear Sequences: An inversion is a pair $(i, j)$ such that $i < j$ and $A[i] > A[j]$; Measures permutation disorder; Maximum inversions in sequence of length $n$ is $\\\\frac{n(n-1)}{2}$ (reverse sorted order).",
        "Counting Inversions via Divide-and-Conquer: Modified merge sort algorithm; When copying element from right subarray, increment inversion counter by remaining elements in left subarray; Computes inversion count in $\\\\mathcal{O}(n \\\\log n)$ time.",
        "Matrix Representations of Sparse Systems: Sparse matrix where non-zero entries $k \\ll m \\times n$; Coordinate list format (COO: `row`, `col`, `val`); Compressed Sparse Row (CSR) format storing `values`, `column_indices`, and `row_pointers` of length $m+1$.",
        "Circular List Group Isomorphism: Circular list of length $n$ isomorphic to cyclic group $\\\\mathbb{Z}_n$ under pointer traversal operations; Shift operator acts as generator of the permutation group.",
        "Josephus Permutation Problem: $n$ people arranged in circle, eliminating every $k$-th person; Recurrence relation $J(n, k) = (J(n-1, k) + k) \\\\pmod n$ with base case $J(1, k) = 0$; Binary Josephus ($k=2$) closed form $J(2^m + l) = 2l + 1$.",
        "Array Rotation & Reversal Algorithm: Rotating array of size $n$ by $d$ positions; Algorithm: Reverse $A[0 \\dots d-1]$, reverse $A[d \\dots n-1]$, and reverse entire array $A[0 \\dots n-1]$; Linear time $\\\\mathcal{O}(n)$ using $\\\\mathcal{O}(1)$ space.",
        "Equivalence Relations on Disjoint Sets: Equivalence relation partitioning universe $U$ into disjoint equivalence classes; Modeled via Disjoint Set Union (DSU) forest.",
        "Disjoint Set Union (DSU / Union-Find): Operations `find(x)` and `union(x, y)`; Union by Rank / Size ensures tree height $\\\\mathcal{O}(\\\\log n)$; Path Compression flattens trees during lookups; Amortized time per operation $\\\\mathcal{O}(\\\\alpha(n))$ where $\\\\alpha$ is the Inverse Ackermann function.",
        "Ackermann Function & Inverse Ackermann: Ackermann function $A(m, n)$ grows faster than any primitive recursive function; Inverse Ackermann $\\\\alpha(n) < 5$ for all practical universe sizes ($n < 2^{65536}$), acting as practical constant time.",
        "Mathematical Memory Layout Analysis: Dimension mapping functions; Multi-dimensional index bijective projection $f: \\\\prod_{i=1}^d [0, N_i - 1] \\\\to [0, \\\\prod N_i - 1]$ ensuring zero collision across multi-index lattices."
    ],
    [
        "Max Inversion Count: $\\\\frac{n(n-1)}{2}$ in reverse sorted permutation.",
        "Inversion Merge Sort Time: Computes total inversions in $\\\\mathcal{O}(n \\\\log n)$ time.",
        "CSR Row Pointer Length: Array length is exactly $m + 1$ for matrix with $m$ rows.",
        "Josephus Binary Closed Form: For $n = 2^m + l$, survivor position is $2l + 1$ (1-indexed).",
        "Array Rotation via 3 Reversals: $\\\\mathcal{O}(n)$ time and $\\\\mathcal{O}(1)$ auxiliary space.",
        "Union by Rank Max Height: Tree height bounded by $\\\\lfloor \\\\log_2 n \\\\rfloor$.",
        "DSU Path Compression: Sets `parent[x] = find(parent[x])` during recursive unwind.",
        "Inverse Ackermann Bound: $\\\\alpha(n) \\le 4$ for all computable input sizes.",
        "Cyclic List Structure: Isomorphic to quotient ring $\\\\mathbb{Z}/n\\\\mathbb{Z}$.",
        "Exam Tip: In Josephus recurrence $J(n) = (J(n-1) + k) \\\\pmod n$, remember the formula is 0-indexed; add 1 if the problem asks for 1-indexed position."
    ]
)

add_unit(
    "bsc-dsm: stacks & queues",
    [
        "Combinatorics of Stack Permutations: Permutations reachable via stack push and pop operations; A permutation is stack-sortable iff it contains no 231-pattern (Knuth\\'s Stack Sortability Theorem).",
        "Catalan Number Formulation: Number of valid stack permutation sequences of length $2n$ ($n$ pushes, $n$ pops) equals the $n$-th Catalan number: $C_n = \\\\frac{1}{n+1} \\\\binom{2n}{n} = \\\\frac{(2n)!}{(n+1)! n!}$.",
        "Catalan Recurrence Relation: Fundamental convolution recurrence: $C_{n+1} = \\\\sum_{i=0}^n C_i C_{n-i}$ with initial condition $C_0 = 1$; Generates sequence $1, 1, 2, 5, 14, 42, 132, 429, \\\\dots$.",
        "Dyck Paths & Balanced Parentheses: Dyck path of length $2n$ from $(0, 0)$ to $(2n, 0)$ moving up $(1, 1)$ or down $(1, -1)$ without crossing below $x$-axis; Bijection to balanced strings of $n$ pairs of parentheses.",
        "Queueing Theory Fundamentals: Mathematical analysis of waiting lines; Kendall\\'s notation $A/S/c/K$ where $A$ is arrival process, $S$ is service distribution, $c$ is number of servers, $K$ is system capacity.",
        "$M/M/1$ Queue Mathematical Model: Poisson arrival rate $\\\\lambda$, exponential service rate $\\\\mu$; Traffic intensity $\\\\rho = \\\\lambda / \\\\mu < 1$ for system stability; Steady-state probability distribution $P_n = (1 - \\\\rho) \\\\rho^n$.",
        "Little\\'s Law in Queueing Systems: Fundamental queueing invariance theorem: $L = \\\\lambda W$ where $L$ is average number of items in system, $\\\\lambda$ is arrival rate, and $W$ is average waiting time; Holds universally regardless of arrival distribution.",
        "Mean Performance Metrics in $M/M/1$: Expected number in system $L = \\\\frac{\\\\rho}{1 - \\\\rho} = \\\\frac{\\\\lambda}{\\\\mu - \\\\lambda}$; Average time in system $W = \\\\frac{1}{\\\\mu - \\\\lambda}$; Mean queue length $L_q = \\\\frac{\\\\rho^2}{1 - \\\\rho}$.",
        "Priority Queue Mathematical Model: Discrete priority classes; Non-preemptive priority queueing analysis; Conservation law of waiting times $\\\\sum \\\\rho_i W_{q,i} = \\\\text{constant}$.",
        "Double-Ended Queue Graph Isomorphism: Deque operations isomorphic to symmetric random walks along 1D finite lattices with reflecting boundary conditions."
    ],
    [
        "Catalan Number Formula: $C_n = \\\\frac{1}{n+1} \\\\binom{2n}{n}$.",
        "Catalan Recurrence: $C_{n+1} = \\\\sum_{i=0}^n C_i C_{n-i}$.",
        "Stack Permutation Condition: A permutation is stack-sortable iff it contains no 231-pattern.",
        "Little\\'s Law Identity: $L = \\\\lambda W$.",
        "$M/M/1$ Stability Requirement: Traffic intensity $\\\\rho = \\\\lambda / \\\\mu < 1$.",
        "$M/M/1$ State Probability: $P_n = (1 - \\\\rho) \\\\rho^n$.",
        "Mean System Count: $L = \\\\frac{\\\\lambda}{\\\\mu - \\\\lambda}$.",
        "Mean Waiting Time: $W = \\\\frac{1}{\\\\mu - \\\\lambda}$.",
        "Dyck Path Total Count: Number of non-negative paths of length $2n$ is $C_n$.",
        "Exam Tip: In Catalan number problems, recognize isomorphic problems: balanced parentheses, triangulation of convex polygons, full binary trees, and mountain ranges."
    ]
)

add_unit(
    "bsc-dsm: trees",
    [
        "Graph-Theoretic Definition of Trees: A tree is a connected undirected graph containing no cycles; Equivalent properties for graph $G = (V, E)$ with $|V| = n$: (1) $G$ is connected and has $n-1$ edges; (2) $G$ is acyclic and has $n-1$ edges; (3) Unique simple path between every pair of vertices.",
        "Cayley\\'s Tree Enumeration Formula: Total number of distinct labeled trees on $n$ vertices is $n^{n-2}$; Proved bijectively via Prüfer sequences of length $n-2$.",
        "Prüfer Sequence Encoding & Decoding: Bijective algorithm converting labeled tree to sequence of $n-2$ integers from $[1, n]$; Repeatedly deletes leaf with smallest label and writes parent\\'s label; Decoded iteratively in $\\\\mathcal{O}(n \\\\log n)$ time.",
        "Binary Tree Enumeration via Catalan Numbers: Number of structurally distinct unlabeled binary trees with $n$ nodes is $C_n = \\\\frac{1}{n+1} \\\\binom{2n}{n}$; Number of labeled binary trees is $n! \\\\cdot C_n$.",
        "Kraft-McMillan Inequality for Prefix Trees: For any prefix code with codeword lengths $l_1, l_2, \\dots, l_n$ over $D$-ary alphabet: $\\\\sum_{i=1}^n D^{-l_i} \\le 1$; Guarantees existence of uniquely decodable prefix tree.",
        "Huffman Coding & Shannon\\'s Source Coding Theorem: Huffman code constructs tree with minimal external path length $\\\\sum p_i l_i$; Average length satisfies $H(X) \\le L_{avg} < H(X) + 1$ where $H(X) = -\\\\sum p_i \\\\log_2 p_i$ is Shannon entropy.",
        "Path Length Theorems in Binary Trees: Internal path length $I$ (sum of depths of internal nodes) and External path length $E$ (sum of depths of leaves); In any full binary tree with $n$ internal nodes: $E = I + 2n$.",
        "Tree Center and Diameter: Eccentricity $\\\\epsilon(v) = \\\\max_{u} d(v, u)$; Center is vertex minimizing eccentricity; Every tree has either 1 center or 2 adjacent centers; Diameter is length of longest path.",
        "Spanning Trees & Matrix Tree Theorem (Kirchhoff): Laplacian matrix $L = D - A$; Number of spanning trees of graph $G$ equals any cofactor of $L$: $\\\\tau(G) = \\\\det(L_{i, i})$.",
        "Tree Automorphisms & Isomorphism Testing: Canonical tree representations via AHU (Aho-Hopcroft-Ullman) algorithm; Assigns canonical integer tuples level-by-level, testing tree isomorphism in deterministic linear time $\\\\mathcal{O}(n)$."
    ],
    [
        "Tree Edge-Vertex Identity: $|E| = |V| - 1$ for every connected tree.",
        "Cayley\\'s Formula: $n^{n-2}$ labeled trees on $n$ vertices.",
        "Prüfer Sequence Length: Exactly $n - 2$ integers for tree with $n$ vertices.",
        "Kraft-McMillan Bound: $\\\\sum D^{-l_i} \\le 1$ for prefix codes.",
        "Path Length Theorem: $E = I + 2n$ for full binary tree with $n$ internal nodes.",
        "Unlabeled Binary Tree Count: $C_n = \\\\frac{1}{n+1} \\\\binom{2n}{n}$.",
        "Kirchhoff Matrix-Tree: Spanning trees count $\\\\tau(G) = \\\\text{cofactor}(L)$.",
        "Tree Center Count: A tree has either exactly 1 center or 2 adjacent centers.",
        "Shannon Entropy Bound: $H(X) \\le L_{Huffman} < H(X) + 1$.",
        "Exam Tip: To compute the Prüfer code, always locate the leaf with the SMALLEST numeric label, record its neighbor, remove that leaf, and repeat."
    ]
)

add_unit(
    "bsc-dsm: sorting",
    [
        "Information Theoretic Sorting Bounds: Minimum comparisons to sort $n$ items modeled as tree with $n!$ leaves; Height $h \\ge \\lceil \\log_2(n!) \\rceil$; Stirling\\'s approximation $\\\\ln(n!) \\approx n \\ln n - n + \\mathcal{O}(\\\\ln n) \\implies \\\\log_2(n!) = n \\log_2 n - 1.4426 n + \\mathcal{O}(\\\\log n)$.",
        "Sorting Networks & Comparator Models: Data-independent sorting networks built from two-item comparator wires $(i, j)$ computing $(\\\\min(x_i, x_j), \\\\max(x_i, x_j))$; Parallel time equals network depth.",
        "Zero-One Principle for Sorting Networks: If a sorting network sorts all $2^n$ possible input sequences of 0s and 1s correctly, it correctly sorts any arbitrary input sequence of real numbers.",
        "Batcher\\'s Bitonic Sorter Network: Bitonic sequence (first increases, then decreases); Bitonic merge network merges bitonic sequence in $\\\\mathcal{O}(\\\\log n)$ parallel depth; Complete Bitonic Sort network has depth $\\\\mathcal{O}(\\\\log^2 n)$ and $\\\\mathcal{O}(n \\\\log^2 n)$ comparators.",
        "Batcher\\'s Odd-Even Mergesort Network: Recursive network merging two sorted sequences by separately merging odd-indexed and even-indexed elements; Depth $\\\\mathcal{O}(\\\\log^2 n)$; Perfectly suited for hardware GPU implementation.",
        "Poset Sorting & Partially Ordered Sets: Sorting elements under partial order relation $\\\\le$; Topological sorting of Directed Acyclic Graph (DAG) via Kahn\\'s indegree algorithm or depth-first search in linear time $\\\\mathcal{O}(V + E)$.",
        "Linear Extensions of Posets: A linear extension is a total order compatible with partial order; Counting linear extensions is #P-complete; Algorithms generate linear extensions using backtracking generation.",
        "Entropy-Optimal Sorting: If input has known prior distribution with entropy $H$, minimum expected comparisons is $\\\\Omega(H)$; Information-theoretic optimality of adaptive sorting algorithms.",
        "Inversion Table & Permutation Recovery: Inversion vector $I = (d_1, d_2, \\dots, d_n)$ where $d_j$ is count of elements to the left of $j$ greater than $j$; Bijective correspondence between permutations and inversion tables.",
        "Permutation Parity & Transposition Count: Parity of permutation $\\\\text{sgn}(\\\\pi) = (-1)^k$ where $k$ is number of transpositions; Bubble sort executes parity-preserving adjacent swaps; Number of swaps equals total inversions."
    ],
    [
        "Stirling Lower Bound: $\\\\log_2(n!) = n \\\\log_2 n - n \\\\log_2 e + \\\\mathcal{O}(\\\\log n) \\\\approx n \\\\log_2 n - 1.44 n$.",
        "Zero-One Principle: Network sorting all $\\\\{0, 1\\\\}^n$ sequences sorts all real sequences.",
        "Bitonic Sorter Depth: Parallel depth is $\\\\frac{\\\\log_2 n (\\\\log_2 n + 1)}{2} = \\\\mathcal{O}(\\\\log^2 n)$.",
        "Topological Sort Time: Linear $\\\\mathcal{O}(V + E)$ on Directed Acyclic Graphs.",
        "Permutation Sign Formula: $\\\\text{sgn}(\\\\pi) = (-1)^{\\\\text{inversions}(\\\\pi)}$.",
        "Odd-Even Mergesort Depth: Parallel time $\\\\mathcal{O}(\\\\log^2 n)$.",
        "Comparator Unit: Takes inputs $(a, b)$, outputs $(\\\\min(a, b), \\\\max(a, b))$.",
        "Inversion Table Property: Each $d_k$ satisfies $0 \\le d_k \\le n - k$.",
        "Stable Sort Inversion Decrement: Every adjacent swap reduces total inversion count by exactly 1.",
        "Exam Tip: In the Zero-One Principle, remember that there are $2^n$ binary input combinations to consider for an $n$-wire sorting network."
    ]
)

add_unit(
    "bsc-dsm: searching",
    [
        "Information Theoretic Search Bounds: Searching for an item among $n$ sorted elements requires decision tree with at least $n+1$ outcomes (including element absent); Minimum comparisons in worst case is $\\\\lceil \\\\log_2(n+1) \\rceil$.",
        "Binary Search Trees & Optima (OBST): Optimal Binary Search Tree minimizing expected search cost $\\\\sum p_i (1 + \\\\text{depth}(k_i)) + \\\\sum q_i \\\\text{depth}(d_i)$; Solved via dynamic programming in $\\\\mathcal{O}(n^3)$ time (Knuth\\'s optimization reduces to $\\\\mathcal{O}(n^2)$).",
        "Knuth\\'s Monotonicity Optimization: In OBST dynamic programming recurrence $e[i, j] = \\\\min_{i \\le r \\le j} \\\\{e[i, r-1] + e[r+1, j] + w(i, j)\\\\}$, root index satisfies $R[i, j-1] \\le R[i, j] \\le R[i+1, j]$, reducing candidate root evaluations.",
        "Fibonacci Search Technique: Comparison search algorithm dividing search space using Fibonacci numbers $F_k = F_{k-1} + F_{k-2}$; Operates strictly using addition and subtraction without costly division or multiplication; Ideal for hardware architectures lacking integer division.",
        "Birthday Paradox Analysis in Hashing: Probability of at least one collision among $k$ items hashed into $m$ slots: $P(\\text{collision}) = 1 - \\prod_{i=1}^{k-1} \\left(1 - \\frac{i}{m}\\right) \\approx 1 - e^{-k^2 / (2m)}$; Collision probability reaches $50\\%$ when $k \\approx 1.177 \\sqrt{m}$.",
        "Poisson Approximation to Occupancy: Number of empty slots, singleton slots, and collisions modeled as Poisson processes in the asymptotic limit $n, m \\to \\infty$ with fixed ratio $\\alpha = n/m$; Expected empty slots $m e^{-\\alpha}$.",
        "Uniform Hashing Collision Expectations: Under Simple Uniform Hashing Assumption (SUHA), expected length of collision chain in separate chaining is exactly load factor $\\alpha = n/m$; Expected comparisons in unsuccessful search is $1 + \\alpha$.",
        "Open Addressing Mean Probe Lengths: Under uniform hashing: Unsuccessful search expected probes $\\frac{1}{1 - \\alpha}$; Successful search expected probes $\\frac{1}{\\alpha} \\ln\\frac{1}{1 - \\alpha}$; Proves performance collapses as $\\alpha \\to 1$.",
        "Random Walk Models of Probing: Modeling secondary clustering and linear probing chains as one-dimensional Markov chains with absorbing states.",
        "Saddlepoint Approximations in Search Trees: Analytical combinatorics deriving asymptotic distributions of tree depth, leaf count, and search path variances using generating functions $f(z) = \\sum a_n z^n$."
    ],
    [
        "Search Lower Bound: $\\lceil \\log_2(n+1) \\rceil$ comparisons required in worst case.",
        "Birthday Paradox Collision Threshold: $k \\approx \\sqrt{2 m \\ln 2} \\approx 1.177 \\sqrt{m}$ for $50\\%$ collision chance.",
        "Expected Empty Slots: $m e^{-n/m} = m e^{-\\alpha}$.",
        "Knuth OBST Speedup: Reduces DP complexity from $\\mathcal{O}(n^3)$ to $\\mathcal{O}(n^2)$.",
        "Unsuccessful Search in Open Addressing: Expected probes $= \\frac{1}{1 - \\alpha}$.",
        "Successful Search in Open Addressing: Expected probes $= \\frac{1}{\\alpha} \\ln\\frac{1}{1 - \\alpha}$.",
        "Fibonacci Search Operations: Uses only addition and subtraction operations.",
        "SUHA Search Cost: Unsuccessful search takes $1 + \\alpha$ expected operations.",
        "Markov Probing Absorption: Transition matrix computes absorption time into empty slot.",
        "Exam Tip: In birthday paradox questions, remember collision threshold scales with $\\sqrt{m}$ (e.g. for $m = 365$, $k \\approx 23$ people yields $>50\\%$ collision chance)."
    ]
)
'''

content += part4

with open("scripts/build_bsc_sem2_math_cs.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subjects 6 & 7.")
