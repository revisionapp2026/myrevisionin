"""
Semester 3 B.Tech Computing, Electrical & Electronics Subjects Generator.
Covers 15 subjects with authentic KaTeX equations and zero boilerplate.
"""

import json

subjects_data = {}

# 1. Data Structures & Algorithms
subjects_data["Data Structures & Algorithms"] = {
    1: {
        "title": "Arrays, Linked Lists",
        "highlights": [
            "Linear Data Structures: Arrays offer contiguous memory allocation with $O(1)$ random indexing through base address offset $\\text{Loc}(A[i]) = B + i \\times W$.",
            "Dynamic Sizing Trade-Offs: Contiguous arrays suffer from fixed capacity and expensive $O(n)$ worst-case insertions and deletions due to element shifting.",
            "Singly Linked Lists: Composed of nodes containing data and pointer $\\text{next}$; insertions at the head execute in $O(1)$ time while arbitrary search requires $O(n)$ linear traversal.",
            "Doubly Linked Lists: Contain $\\text{prev}$ and $\\text{next}$ pointers enabling bidirectional traversal; requires $2 \\times$ pointer storage overhead per node.",
            "Circular Linked Lists: Tail node links back to the head node ($\\text{tail}\\to\\text{next} = \\text{head}$); widely applied in OS round-robin CPU scheduling and circular buffers.",
            "Skip Lists: Probabilistic multi-level linked structures achieving $O(\\log n)$ search, insert, and delete operations via layered forward pointers.",
            "Memory Locality & Cache Performance: Arrays demonstrate high spatial locality exploiting CPU cache lines; linked lists suffer from pointer chasing and cache misses.",
            "Pointer Manipulation Edge Cases: Handling dangling pointers, memory leaks via free/delete, and circular reference tracking during node deletion.",
            "Sparse Matrix Representation: Stored efficiently using 3-tuple format $(row, col, value)$ or orthogonal linked lists, reducing space from $O(m \\times n)$ to $O(k)$ non-zero entries.",
            "University Examination Strategy: Always write clean pseudo-code with NULL-pointer boundary checks and draw clear memory layout diagrams."
        ],
        "keyPoints": [
            "Array Indexing Formula: $\\text{Address}(A[i]) = \\text{Base} + i \\times \\text{size}$; 2D row-major: $\\text{Base} + (i \\times C + j) \\times W$.",
            "Linked List Insertion at Head: Allocate new node, set $node\\to next = head$, update $head = node$; Time complexity $O(1)$.",
            "Doubly Linked List Deletion: $curr\\to prev\\to next = curr\\to next$ and $curr\\to next\\to prev = curr\\to prev$; Time complexity $O(1)$ when node is given.",
            "Cycle Detection Algorithm: Floyd's cycle-finding (Tortoise and Hare) uses slow ($1\\times$) and fast ($2\\times$) pointers; space $O(1)$, time $O(n)$.",
            "Array vs List Trade-Off: Arrays provide $O(1)$ random access but $O(n)$ insert/delete; Linked lists provide $O(1)$ insert/delete at pointer but $O(n)$ access.",
            "Header Linked List: Employs a dummy sentinel head node to eliminate special boundary conditional branching during insertions and deletions.",
            "Polynomial Addition via Lists: Traverse both sorted exponent lists, summing coefficients for identical powers in $O(n + m)$ linear time.",
            "Dynamic Array Resizing: Geometric doubling amortization ensures inserting $n$ elements takes $O(n)$ total work, yielding $O(1)$ amortized insert.",
            "Common Memory Pitfalls: Segmentation faults caused by dereferencing NULL pointers ($curr\\to next$ when $curr == NULL$).",
            "Exam Diagram Checklist: Draw neat box-and-arrow diagrams showing head pointer, data fields, links, and final NULL ground termination."
        ]
    },
    2: {
        "title": "Stacks & Queues",
        "highlights": [
            "Stack Abstract Data Type: Operates strictly under Last-In First-Out (LIFO) protocol with primitive operations $\\text{push}(x)$, $\\text{pop}()$, and $\\text{peek}()$ in $O(1)$ time.",
            "Stack Implementation Modes: Implemented via fixed-size arrays with top pointer ($\text{top} = -1$) or dynamically via singly linked lists at head.",
            "Expression Parsing & Conversion: Evaluates arithmetic notations: Infix ($A + B$), Prefix ($+ A B$), and Postfix ($A B +$) using operator precedence stacks.",
            "Shunting-Yard Algorithm: Dijkstra's operator-stack algorithm parses infix expressions into postfix Reverse Polish Notation (RPN) in $O(n)$ time.",
            "Function Call Stack & Recursion: Execution context frames store local variables, parameters, and return addresses; deep recursion risks stack overflow.",
            "Queue Abstract Data Type: Follows First-In First-Out (FIFO) principle with $\\text{enqueue}(x)$ at rear and $\\text{dequeue}()$ at front in $O(1)$ time.",
            "Circular Queue Dynamics: Overcomes linear queue false overflow using modulo arithmetic: $\\text{rear} = (\\text{rear} + 1) \\bmod N$.",
            "Double-Ended Queue (Deque): Allows insertion and deletion at both ends; serves as the underlying backbone for Python collections.deque and C++ std::deque.",
            "Priority Queue Implementations: Elements assigned priorities; implemented efficiently via binary heaps with $O(\\log n)$ push and extract-min.",
            "Industrial Applications: Stacks power browser history (Back/Forward) and undo buffers; queues manage printer spoolers and asynchronous message brokers."
        ],
        "keyPoints": [
            "Stack LIFO Discipline: All operations occur exclusively at the top index; overflow condition: $\\text{top} == \\text{MAX} - 1$.",
            "Postfix Evaluation Logic: Scan left-to-right; push operands; upon operator, pop 2 operands, compute $b \\text{ op } a$, push result back.",
            "Balanced Parentheses Checking: Push opening brackets `([{`; upon closing bracket, check top match and pop; valid if stack is empty at end.",
            "Circular Queue Full Condition: $(\\text{rear} + 1) \\bmod N == \\text{front}$; empty condition: $\\text{front} == -1$.",
            "Queue via Two Stacks: Stack 1 handles enqueues; Stack 2 handles dequeues; amortized cost per operation is $O(1)$.",
            "Monotonic Stack Pattern: Finds Next Greater Element (NGE) in $O(n)$ linear time by maintaining decreasing element indices.",
            "Recursion to Iteration: Any recursive subroutine can be converted to an iterative counterpart by explicitly managing an auxiliary stack.",
            "Breadth-First Search (BFS): Graph level-order traversal relies fundamentally on a FIFO queue to discover adjacent frontier vertices.",
            "Priority Queue Complexity: Array/List unsorted: insert $O(1)$, extract $O(n)$; Binary Heap: insert $O(\\log n)$, extract-min $O(\\log n)$.",
            "Exam Scoring Tip: For expression conversion questions, construct a step-by-step trace table showing Symbol, Stack State, and Output Expression."
        ]
    },
    3: {
        "title": "Trees & Graphs",
        "highlights": [
            "Binary Tree Architecture: Hierarchical non-linear structure where every node has at most two children; depth $d$ has at most $2^d$ nodes.",
            "Binary Search Tree (BST) Invariant: For every node $u$, all keys in $\\text{left}(u) < \\text{key}(u) < \\text{right}(u)$; average search time is $O(\\log n)$, degrading to $O(n)$ when skewed.",
            "Self-Balancing AVL Trees: Enforce balance factor $BF = |h_L - h_R| \\le 1$; restores equilibrium via single (LL, RR) and double (LR, RL) rotations in $O(\\log n)$.",
            "Red-Black Trees: Binary search trees with color invariants (root is black, no two adjacent red nodes) guaranteeing height $h \\le 2\\log_2(n+1)$.",
            "Tree Traversal Algorithms: Inorder (Left-Root-Right produces sorted BST keys), Preorder (Root-Left-Right), Postorder (Left-Right-Root), and Level-Order (BFS).",
            "Graph Representations: Adjacency Matrix uses $O(V^2)$ space with $O(1)$ edge checks; Adjacency List uses $O(V + E)$ space, ideal for sparse networks.",
            "Graph Traversal Protocols: Depth-First Search (DFS) uses recursion/stack with discovery/finish times; Breadth-First Search (BFS) uses queue to find shortest unweighted paths.",
            "Minimum Spanning Tree (MST): Connects all vertices with minimum total weight without cycles; Kruskal's uses Disjoint Set Union ($O(E \\log E)$), Prim's uses Priority Queue ($O(E \\log V)$).",
            "Single-Source Shortest Path: Dijkstra's algorithm solves non-negative weighted graphs in $O((V + E)\\log V)$; Bellman-Ford handles negative edge weights in $O(V \\cdot E)$.",
            "Topological Sorting & DAGs: Linear ordering of vertices in Directed Acyclic Graphs such that for every directed edge $(u, v)$, $u$ precedes $v$; solved via Kahn's BFS or DFS."
        ],
        "keyPoints": [
            "AVL Tree Height Bound: Maximum height $h < 1.44 \\log_2(n + 2)$; strictly balanced compared to Red-Black trees.",
            "AVL Rotations: LL rotation: right rotate child; RR rotation: left rotate child; LR rotation: left rotate left child then right rotate parent.",
            "BST Inorder Traversal Property: Inorder traversal of any valid binary search tree always yields strictly ascending sorted keys.",
            "Complete vs Full Binary Tree: Full tree: every node has 0 or 2 children; Complete tree: all levels filled except possibly the last, filled left-to-right.",
            "Dijkstra's Algorithm Greediness: Fails in the presence of negative weight cycles; requires non-negative edge weights $w(u, v) \\ge 0$.",
            "Bellman-Ford Dynamic Programming: Relaxes all $E$ edges $V - 1$ times; a further relaxation indicates a reachable negative-weight cycle.",
            "Kruskal's MST Greedy Step: Sort edges by weight; add edge if endpoints belong to different disjoint sets using `find` and `union`.",
            "Eulerian Path Condition: Connected undirected graph has an Euler path iff exactly 0 or 2 vertices have odd degrees.",
            "Floyd-Warshall Algorithm: All-pairs shortest path dynamic programming using distance matrix recurrence $D^{(k)}[i][j] = \\min(D^{(k-1)}[i][j], D^{(k-1)}[i][k] + D^{(k-1)}[k][j])$.",
            "Exam Drawing Tip: When constructing AVL trees from raw keys, clearly annotate balance factors ($BF$) after every insertion before rotating."
        ]
    },
    4: {
        "title": "Sorting & Searching",
        "highlights": [
            "Linear vs Binary Search: Linear search operates in $O(n)$ on arbitrary arrays; Binary search requires sorted array, halving space each iteration with $O(\\log n)$ complexity.",
            "Quadratic Comparison Sorts: Bubble Sort, Selection Sort, and Insertion Sort run in $O(n^2)$ worst-case; Insertion sort runs in $O(n)$ time on nearly sorted inputs.",
            "Merge Sort Divide-and-Conquer: Divides array into halves, recursively sorts, and merges in $O(n)$ time; stable with invariant $O(n \\log n)$ time and $O(n)$ auxiliary memory.",
            "Quick Sort Partitioning: Selects a pivot, partitions array via Lomuto or Hoare scheme; expected runtime is $O(n \\log n)$, worst-case $O(n^2)$ when pivot is extremal.",
            "Heap Sort Mechanism: Builds a max-heap in $O(n)$ time, repeatedly swaps root with last element and heapifies in $O(\\log n)$; in-place and non-stable $O(n \\log n)$.",
            "Comparison-Sort Lower Bound: Any deterministic comparison-based sorting algorithm requires at least $\\Omega(n \\log n)$ comparisons in the worst case via decision tree theorem.",
            "Linear Time Non-Comparison Sorts: Counting Sort ($O(n + k)$), Radix Sort ($O(d(n + k))$), and Bucket Sort exploit key digit structures to beat the comparison lower bound.",
            "Sorting Stability Definition: A sort is stable if elements with identical keys maintain their relative initial input order (e.g., Merge Sort, Insertion Sort).",
            "External Sorting Protocols: Used when data exceeds RAM capacity; multi-way merge sort divides files into runs, sorts in memory, and merges via loser trees.",
            "Engineering Applications: Database query index scans, graphics z-buffering, computational geometry nearest-neighbor search, and log processing pipelines."
        ],
        "keyPoints": [
            "Binary Search Recurrence: $T(n) = T(n/2) + O(1) \\implies T(n) = O(\\log n)$; mid calculated as $\\text{low} + (\\text{high} - \\text{low})/2$ to avoid integer overflow.",
            "Quick Sort Recurrence: Best/Average: $T(n) = 2T(n/2) + O(n) \\implies O(n \\log n)$; Worst-case: $T(n) = T(n-1) + O(n) \\implies O(n^2)$.",
            "Merge Sort Space Complexity: Requires $O(n)$ auxiliary array buffer during merge; linked list merge sort requires $O(1)$ extra space.",
            "Heapify Complexity: Sift-down takes $O(h)$ time; building heap takes $\\sum_{h=0}^{\\lfloor \\log n \\rfloor} \\frac{n}{2^{h+1}} O(h) = O(n)$ linear time.",
            "Sorting Stability Summary: Stable: Insertion Sort, Bubble Sort, Merge Sort, Counting Sort; Unstable: Quick Sort, Heap Sort, Selection Sort.",
            "Hoare vs Lomuto Partitioning: Hoare's scheme uses two pointers converging inward, doing $3\\times$ fewer swaps on average than Lomuto's scheme.",
            "Dutch National Flag Problem: 3-way partitioning by Edsger Dijkstra sorts arrays containing 0s, 1s, and 2s in a single pass with $O(n)$ time and $O(1)$ space.",
            "Radix Sort Constraint: Requires underlying digit sort to be strictly stable (typically Counting Sort) to preserve lower-significance order.",
            "In-Place Definition: An algorithm is in-place if it requires $O(1)$ or at most $O(\\log n)$ auxiliary stack memory beyond the input array.",
            "Exam Performance Matrix: Memorize the complete Big-O table (Best, Average, Worst Time, and Auxiliary Space) for all 7 major sorting algorithms."
        ]
    },
    5: {
        "title": "Hashing & Algorithm Analysis",
        "highlights": [
            "Direct Addressing vs Hashing: Direct address tables require huge key spaces; hash functions map huge universe $U$ into table of size $m$ via $h(k): U \\to \\{0, \\dots, m-1\\}$.",
            "Hash Function Criteria: Uniform distribution across buckets, deterministic output, minimal collision frequency, and fast $O(1)$ computational efficiency.",
            "Division & Multiplication Methods: Division method $h(k) = k \\bmod m$ (where $m$ is prime); Multiplication method $h(k) = \\lfloor m(k A \\bmod 1) \\rfloor$ with Knuth's constant $A \\approx 0.618033$.",
            "Collision Resolution by Separate Chaining: Each bucket holds a linked list of colliding records; average lookup time is $O(1 + \\alpha)$ where load factor $\\alpha = n/m$.",
            "Open Addressing Probing: All keys reside directly in table slots; Linear Probing ($h(k, i) = (h'(k) + i) \\bmod m$) suffers from primary clustering.",
            "Quadratic & Double Hashing: Quadratic probing eliminates primary clustering ($h(k, i) = (h'(k) + c_1 i + c_2 i^2) \\bmod m$); Double hashing uses two independent hash functions.",
            "Asymptotic Notations: Big-O ($O$, upper bound), Big-Omega ($\\Omega$, lower bound), Big-Theta ($\\Theta$, tight bound), Little-o ($o$), and Little-omega ($\\omega$).",
            "Master Theorem for Divide-and-Conquer: Solves recurrences $T(n) = a T(n/b) + f(n)$ by comparing $f(n)$ with critical polynomial $n^{\\log_b a}$.",
            "Amortized Complexity Analysis: Evaluates average cost per operation across worst-case sequence; methods include Aggregate method, Accounting method, and Potential function method.",
            "Industrial Hashing Systems: Cryptographic hashing (SHA-256), Bloom filters for probabilistic membership testing, and distributed consistent hashing in cloud clusters."
        ],
        "keyPoints": [
            "Load Factor Definition: $\\alpha = \\frac{n}{m}$; for separate chaining, $\\alpha$ can exceed 1; for open addressing, $\\alpha < 1$ must be strictly maintained.",
            "Linear Probing Full Cycle: Step size $c$ must be coprime to table size $m$ (typically $m$ is chosen as a prime number) to probe all slots.",
            "Double Hashing Formula: $h(k, i) = (h_1(k) + i \\cdot h_2(k)) \\bmod m$; $h_2(k)$ must produce values relatively prime to table size $m$.",
            "Master Theorem Case 1: If $f(n) = O(n^{\\log_b a - \\epsilon})$ for $\\epsilon > 0$, then $T(n) = \\Theta(n^{\\log_b a})$.",
            "Master Theorem Case 2: If $f(n) = \\Theta(n^{\\log_b a} \\log^k n)$ for $k \\ge 0$, then $T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)$.",
            "Master Theorem Case 3: If $f(n) = \\Omega(n^{\\log_b a + \\epsilon})$ and satisfies regularity condition $a f(n/b) \\le c f(n)$ for $c < 1$, then $T(n) = \\Theta(f(n))$.",
            "Re-hashing Protocol: When load factor $\\alpha$ exceeds threshold (e.g. 0.75), allocate new table of double prime size ($2m$) and re-hash all existing keys.",
            "Bloom Filter Property: Guarantees zero false negatives (if filter says item is absent, it is definitely absent); has controllable false positive rate.",
            "Universal Hashing Guarantee: Choosing random hash function from universal family ensures expected collisions between distinct keys is at most $1/m$.",
            "Exam Formula Check: Clearly state formal definitions of $O(g(n))$, $\\Omega(g(n))$, and $\\Theta(g(n))$ using constants $c, n_0 > 0$ with inequalities."
        ]
    }
}

print("Computing module part 1 ready.")
