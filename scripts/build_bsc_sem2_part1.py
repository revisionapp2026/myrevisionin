import json

subjects_data = {}

def add_paper(sub_key, set_num, q_list):
    key = f"{sub_key}_set{set_num}"
    subjects_data[key] = q_list

# =========================================================================
# 1. DATA STRUCTURES (B.Sc CS / DS-AI / Math)
# =========================================================================
add_paper("data_structures", 1, [
    {
        "id": "bsc-ds-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define an Abstract Data Type (ADT) and provide two examples.",
        "answer_lines": [
            "**Definition**: A mathematical model for data types where the data type is defined by its behavior (operations and semantics) from the point of view of a user, independent of implementation details.",
            "**Examples**: Stack ADT (`push`, `pop`, `peek`) and Queue ADT (`enqueue`, `dequeue`)."
        ]
    },
    {
        "id": "bsc-ds-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between Singly Linked Lists and Doubly Linked Lists.",
        "answer_lines": [
            "**Singly Linked List**: Each node contains data and a single pointer (`next`) referencing the successor; allows unidirectional traversal ($O(n)$ backwards search).",
            "**Doubly Linked List**: Each node contains data and two pointers (`prev` and `next`); enables bidirectional traversal and $O(1)$ deletion given node pointer, at the expense of extra memory."
        ]
    },
    {
        "id": "bsc-ds-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the boundary conditions for Stack Overflow and Stack Underflow in an array of size $N$.",
        "answer_lines": [
            "• **Stack Overflow**: Occurs during `push` when `top == N - 1`.",
            "• **Stack Underflow**: Occurs during `pop` when `top == -1`."
        ]
    },
    {
        "id": "bsc-ds-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define height and depth of a node in a binary tree.",
        "answer_lines": [
            "**Depth**: The number of edges along the unique path from the root node down to that specific node (root depth $= 0$).",
            "**Height**: The number of edges on the longest downward path from that node to a leaf node (leaf height $= 0$)."
        ]
    },
    {
        "id": "bsc-ds-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the best, average, and worst-case time complexities of QuickSort.",
        "answer_lines": [
            "• **Best Case**: $O(n \\log n)$ (balanced partitions).",
            "• **Average Case**: $O(n \\log n)$.",
            "• **Worst Case**: $O(n^2)$ (pivot is always extreme element in sorted/reverse array)."
        ]
    },
    {
        "id": "bsc-ds-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Circular Queue using an array. Implement `enqueue` and `dequeue` operations with full/empty condition checking.",
        "answer_lines": [
            "**1. Concept**: A linear queue suffers from false overflow when rear reaches end while front has advanced. A circular queue connects the last position back to the first position using modulo arithmetic.",
            "**2. Conditions**:",
            "• Empty condition: `front == -1`.",
            "• Full condition: `(rear + 1) % MAX == front`.",
            "**3. Algorithm / C Code**:",
            "```c",
            "#define MAX 5",
            "int queue[MAX], front = -1, rear = -1;",
            "",
            "void enqueue(int val) {",
            "    if ((rear + 1) % MAX == front) {",
            "        printf(\"Queue Overflow\\n\"); return;",
            "    }",
            "    if (front == -1) front = rear = 0;",
            "    else rear = (rear + 1) % MAX;",
            "    queue[rear] = val;",
            "}",
            "",
            "int dequeue() {",
            "    if (front == -1) {",
            "        printf(\"Queue Underflow\\n\"); return -1;",
            "    }",
            "    int data = queue[front];",
            "    if (front == rear) front = rear = -1; // Reset when empty",
            "    else front = (front + 1) % MAX;",
            "    return data;",
            "}",
            "```",
            "**4. Complexity**: Both `enqueue` and `dequeue` run in strictly $O(1)$ time."
        ]
    },
    {
        "id": "bsc-ds-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain the algorithm to convert an Infix expression to Postfix using a Stack. Trace the conversion for: $(A + B) * C - (D - E) * (F + G)$.",
        "answer_lines": [
            "**1. Algorithm Rules**:",
            "• Operands are appended directly to the postfix output string.",
            "• `(` is pushed onto stack. `)` pops and outputs operators until `(` is encountered.",
            "• Operators: Pop operators from stack with greater than or equal precedence, then push current operator.",
            "• Finally, pop all remaining operators onto the output.",
            "**2. Step-by-Step Trace** for `(A + B) * C - (D - E) * (F + G)`:",
            "• `(`: Stack: `[`(`]`, Output: ``",
            "• `A`: Stack: `[`(`]`, Output: `A`",
            "• `+`: Stack: `[`(`, `+`]`",
            "• `B`: Stack: `[`(`, `+`]`, Output: `A B`",
            "• `)`: Pop `+` $\\to$ Output: `A B +`, Stack: empty",
            "• `*`: Stack: `[`*`]`",
            "• `C`: Output: `A B + C`",
            "• `-`: Precedence of `-` is less than `*`. Pop `*`. Push `-`. Stack: `[`-`]`, Output: `A B + C *`",
            "• `(`: Stack: `[`-`, `(`]`",
            "• `D - E`: Output: `A B + C * D E -`, Stack: `[`-`]`",
            "• `*`: Stack: `[`-`, `*`]`",
            "• `(F + G)`: Output: `A B + C * D E - F G +`, Stack: `[`-`, `*`]`",
            "• End: Pop `*`, then `-`.",
            "**Final Postfix Expression**: `A B + C * D E - F G + * -`."
        ]
    },
    {
        "id": "bsc-ds-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Construct a Binary Search Tree (BST) for keys: $[45, 15, 79, 90, 10, 55, 12, 20, 50]$. Write Inorder, Preorder, and Postorder traversals, and explain node deletion.",
        "answer_lines": [
            "**1. BST Construction**:",
            "• Insert 45 (Root).",
            "• 15 < 45 $\\to$ Left of 45.",
            "• 79 > 45 $\\to$ Right of 45.",
            "• 90 > 45, > 79 $\\to$ Right of 79.",
            "• 10 < 45, < 15 $\\to$ Left of 15.",
            "• 55 > 45, < 79 $\\to$ Left of 79.",
            "• 12 < 45, < 15, > 10 $\\to$ Right of 10.",
            "• 20 < 45, > 15 $\\to$ Right of 15.",
            "• 50 > 45, < 79, < 55 $\\to$ Left of 55.",
            "**2. Tree Traversals**:",
            "• **Inorder (Sorted order)**: `10, 12, 15, 20, 45, 50, 55, 79, 90`.",
            "• **Preorder (Root-Left-Right)**: `45, 15, 10, 12, 20, 79, 55, 50, 90`.",
            "• **Postorder (Left-Right-Root)**: `12, 10, 20, 15, 50, 55, 90, 79, 45`.",
            "**3. Deletion of Node with Two Children (Delete 15)**:",
            "• Find Inorder Successor (smallest in right subtree $= 20$) or Inorder Predecessor ($12$).",
            "• Replace 15's value with 20, then delete original node 20 from leaf position."
        ]
    },
    {
        "id": "bsc-ds-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Compare Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms for graph traversal. Detail their data structures, time/space complexities, and cycle detection.",
        "answer_lines": [
            "**1. Algorithmic Principles**:",
            "• **BFS (Level-Order)**: Explores all neighbor nodes at current depth prior to moving deeper. Implemented using a **FIFO Queue**.",
            "• **DFS (Branch-Deep)**: Explores as deep as possible along each branch before backtracking. Implemented using a **LIFO Stack** (or recursion).",
            "**2. Complexity Comparison**:",
            "• Time Complexity for both: $O(V + E)$ where $V$ is vertices and $E$ is edges (using adjacency list).",
            "• Space Complexity: BFS is $O(V)$ (queue can hold entire breadth of tree); DFS is $O(h)$ where $h$ is maximum path height.",
            "**3. Cycle Detection**:",
            "• In undirected graph: A back-edge to an already visited vertex that is not the parent indicates a cycle.",
            "• In directed graph: A back-edge to a vertex currently in the active recursion call stack (`in_stack[] == true`) indicates a directed cycle."
        ]
    },
    {
        "id": "bsc-ds-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Dijkstra's Single Source Shortest Path Algorithm. Describe its greedy choice property, edge relaxation step, and time complexity.",
        "answer_lines": [
            "**1. Problem Statement**: Given a directed/undirected graph with non-negative edge weights $w(u, v) \\ge 0$ and source $s$, find the shortest distance from $s$ to all other vertices.",
            "**2. Relaxation Step**: For edge $(u, v)$ with weight $w(u, v)$:",
            "$$\\text{if } dist[u] + w(u, v) < dist[v] \\implies dist[v] = dist[u] + w(u, v)$$",
            "**3. Algorithmic Steps**:",
            "• Initialize $dist[s] = 0$ and $dist[v] = \\infty$ for all $v \\ne s$. Visited set $S = \\emptyset$.",
            "• In each iteration, select unvisited vertex $u \\notin S$ with minimum $dist[u]$.",
            "• Add $u$ to $S$. For all neighbors $v$ of $u$, perform relaxation.",
            "• Repeat until all reachable vertices are processed.",
            "**4. Complexity**: Using adjacency list and Min-Heap (priority queue), time complexity is $O((V + E) \\log V)$."
        ]
    }
])

add_paper("data_structures", 2, [
    {
        "id": "bsc-ds-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define an AVL Tree and write its balance factor formula.",
        "answer_lines": [
            "**Definition**: A self-balancing Binary Search Tree where the heights of the two child subtrees of any node differ by at most one.",
            "**Balance Factor**: $BF(node) = \\text{height}(left) - \\text{height}(right) \\in \\{-1, 0, +1\\}$."
        ]
    },
    {
        "id": "bsc-ds-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between Linear Probing and Quadratic Probing in open-address hash tables.",
        "answer_lines": [
            "• **Linear Probing**: Resolves collisions with step size $1$: $h(k, i) = (h'(k) + i) \\bmod m$. Causes primary clustering.",
            "• **Quadratic Probing**: Resolves collisions with quadratic step: $h(k, i) = (h'(k) + c_1 i + c_2 i^2) \\bmod m$. Eliminates primary clustering."
        ]
    },
    {
        "id": "bsc-ds-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "What is a circular linked list and what is its primary advantage?",
        "answer_lines": [
            "A linked list where the `next` pointer of the last node points back to the first node instead of `NULL`. It allows continuous cyclic traversal from any node without resetting pointers (ideal for round-robin scheduling)."
        ]
    },
    {
        "id": "bsc-ds-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the minimum number of nodes in an AVL tree of height $h$.",
        "answer_lines": [
            "$$N(h) = N(h - 1) + N(h - 2) + 1 \\quad \\text{with } N(0) = 1, N(1) = 2$$",
            "This Fibonacci-like recurrence ensures height $h < 1.44 \\log_2(n)$."
        ]
    },
    {
        "id": "bsc-ds-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define a Min-Heap and state the heap-order property.",
        "answer_lines": [
            "A complete binary tree where the key at every node is less than or equal to the keys of its children: $A[parent(i)] \\le A[i]$. The minimum key is always stored at root $A[0]$."
        ]
    },
    {
        "id": "bsc-ds-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain AVL Tree rotations (LL, RR, LR, RL). Insert the keys $[10, 20, 30, 40, 50, 25]$ into an empty AVL tree and demonstrate rebalancing after each insertion.",
        "answer_lines": [
            "**1. Four Rotations**:",
            "• **LL Rotation**: Applied when node is inserted into left subtree of left child. Fixed by Single Right Rotation.",
            "• **RR Rotation**: Applied when node is inserted into right subtree of right child. Fixed by Single Left Rotation.",
            "• **LR Rotation**: Left child's right subtree insertion. Fixed by Left Rotation on child, then Right Rotation on node.",
            "• **RL Rotation**: Right child's left subtree insertion. Fixed by Right Rotation on child, then Left Rotation on node.",
            "**2. Step-by-Step Insertion**:",
            "• Insert 10, then 20 (balanced).",
            "• Insert 30: Nodes 10-20-30 form RR imbalance at 10. Left rotation at 10 $\\to$ 20 becomes root with children 10 and 30.",
            "• Insert 40 (right of 30, balanced).",
            "• Insert 50: 30-40-50 form RR imbalance at 30. Left rotation at 30 $\\to$ 40 has children 30 and 50.",
            "• Insert 25: Inserted right of 20, left of 40, left of 30 $\\to$ RL imbalance at 20. Double rotation restores balance.",
            "**Result**: Height remains logarithmic $O(\\log n)$."
        ]
    },
    {
        "id": "bsc-ds-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Merge Sort using Divide-and-Conquer. Trace Merge Sort on array $[38, 27, 43, 3, 9, 82, 10]$ and solve its recurrence relation using the Master Theorem.",
        "answer_lines": [
            "**1. Divide and Conquer Mechanism**:",
            "• Divide: Split array into two halves of size $n/2$.",
            "• Conquer: Recursively sort each subarray until single-element base cases.",
            "• Combine: Merge two sorted subarrays in linear $O(n)$ time using two pointers.",
            "**2. Trace on $[38, 27, 43, 3, 9, 82, 10]$**:",
            "• Split: $[38, 27, 43, 3]$ and $[9, 82, 10]$.",
            "• Left branch sorted: $[38, 27] \\to [27, 38]$; $[43, 3] \\to [3, 43]$; Merged: $[3, 27, 38, 43]$.",
            "• Right branch sorted: $[9, 82]$ and $[10]$; Merged: $[9, 10, 82]$.",
            "• Final Merge: $[3, 27, 38, 43]$ and $[9, 10, 82] \\implies [3, 9, 10, 27, 38, 43, 82]$.",
            "**3. Recurrence Relation**:",
            "$$T(n) = 2T(n/2) + O(n)$$",
            "Here $a = 2, b = 2, f(n) = n^1$. Since $\\log_b a = \\log_2 2 = 1 = k$:",
            "By Case 2 of Master Theorem: $T(n) = \\Theta(n^{\\log_b a} \\log n) = \\Theta(n \\log n)$."
        ]
    },
    {
        "id": "bsc-ds-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Kruskal's Minimum Spanning Tree (MST) Algorithm. Describe Disjoint Set Union (DSU) with union by rank and path compression.",
        "answer_lines": [
            "**1. Kruskal's Greedy Strategy**: Sort all $E$ edges in non-decreasing order of weight. Iterate through sorted edges, adding an edge to the MST if and only if it does not form a cycle with already selected edges. Terminate when $V - 1$ edges are added.",
            "**2. Cycle Detection via DSU**:",
            "• `find(x)`: Returns representative root of set containing $x$.",
            "• **Path Compression**: Flattens tree during find: `parent[x] = find(parent[x])`.",
            "• **Union by Rank**: Attaches shallower tree under root of deeper tree to keep height small.",
            "**3. Complexity Analysis**:",
            "• Sorting edges: $O(E \\log E) = O(E \\log V)$.",
            "• DSU operations: $O(E \\alpha(V))$ where $\\alpha$ is the nearly constant inverse Ackermann function.",
            "• Total Time: $O(E \\log V)$."
        ]
    },
    {
        "id": "bsc-ds-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Implement a Priority Queue using a Binary Min-Heap. Detail the algorithms for `insert()` (heapify-up) and `extractMin()` (heapify-down).",
        "answer_lines": [
            "**1. Array Representation**: For a node at index $i$ ($0$-based):",
            "• Parent: $\\lfloor (i - 1)/2 \\rfloor$, Left child: $2i + 1$, Right child: $2i + 2$.",
            "**2. `insert(key)` (Heapify-Up)**:",
            "• Append `key` to end of array at index `size`. Increment `size`.",
            "• While `i > 0` and `A[parent(i)] > A[i]`, swap `A[i]` with parent and set `i = parent(i)`.",
            "• Time Complexity: $O(\\log n)$ along tree height.",
            "**3. `extractMin()` (Heapify-Down)**:",
            "• Store root minimum `min = A[0]`. Move last element to root: `A[0] = A[size - 1]`, decrement `size`.",
            "• While left child exists: compare node with both children; if larger than smallest child, swap with smallest child and descend.",
            "• Time Complexity: $O(\\log n)$."
        ]
    },
    {
        "id": "bsc-ds-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Explain Hashing with Separate Chaining and Linear Probing. Insert keys $[23, 43, 13, 27, 39, 52]$ into hash table of size $m = 7$ with $h(k) = k \\bmod 7$.",
        "answer_lines": [
            "**1. Hash Values ($k \\bmod 7$)**:",
            "• $23 \\bmod 7 = 2$.",
            "• $43 \\bmod 7 = 1$.",
            "• $13 \\bmod 7 = 6$.",
            "• $27 \\bmod 7 = 6$ (Collision with 13).",
            "• $39 \\bmod 7 = 4$.",
            "• $52 \\bmod 7 = 3$.",
            "**2. Separate Chaining** (Linked lists at each bucket):",
            "• Bucket 0: Empty.",
            "• Bucket 1: $[43]$.",
            "• Bucket 2: $[23]$.",
            "• Bucket 3: $[52]$.",
            "• Bucket 4: $[39]$.",
            "• Bucket 5: Empty.",
            "• Bucket 6: $[13] \\to [27]$.",
            "**3. Linear Probing** (Array collision resolution):",
            "• Index 1: 43.",
            "• Index 2: 23.",
            "• Index 6: 13.",
            "• 27 hashes to 6 (occupied) $\\to$ wraps to index 0: 27.",
            "• Index 4: 39.",
            "• Index 3: 52.",
            "Final table array: `[0: 27, 1: 43, 2: 23, 3: 52, 4: 39, 5: empty, 6: 13]`."
        ]
    }
])

# =========================================================================
# 2. REAL ANALYSIS (B.Sc Mathematics)
# =========================================================================
add_paper("real_analysis", 1, [
    {
        "id": "bsc-ra-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the Completeness Axiom (Least Upper Bound Property) of the real number system $\\mathbb{R}$.",
        "answer_lines": [
            "**Statement**: Every non-empty subset $S \\subset \\mathbb{R}$ that is bounded above has a least upper bound (supremum) in $\\mathbb{R}$: $\\sup S \\in \\mathbb{R}$."
        ]
    },
    {
        "id": "bsc-ra-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the Bolzano-Weierstrass Theorem for real sequences.",
        "answer_lines": [
            "**Theorem**: Every bounded sequence of real numbers has at least one convergent subsequence."
        ]
    },
    {
        "id": "bsc-ra-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Cauchy's General Principle of Convergence for sequences.",
        "answer_lines": [
            "A sequence $(x_n)$ converges in $\\mathbb{R}$ if and only if it is a Cauchy sequence: for every $\\epsilon > 0$, there exists $N \\in \\mathbb{N}$ such that $|x_n - x_m| < \\epsilon$ for all $n, m \\ge N$."
        ]
    },
    {
        "id": "bsc-ra-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Define uniform continuity of a function $f$ on an interval $I$.",
        "answer_lines": [
            "A function $f: I \\to \\mathbb{R}$ is uniformly continuous on $I$ if for every $\\epsilon > 0$, there exists $\\delta > 0$ (depending only on $\\epsilon$, not on $x$) such that $|f(x) - f(y)| < \\epsilon$ whenever $|x - y| < \\delta$ for all $x, y \\in I$."
        ]
    },
    {
        "id": "bsc-ra-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the condition for a bounded function $f$ to be Riemann integrable on $[a, b]$.",
        "answer_lines": [
            "**Riemann's Criterion**: $f$ is Riemann integrable on $[a, b]$ if and only if for every $\\epsilon > 0$, there exists a partition $P$ of $[a, b]$ such that $U(P, f) - L(P, f) < \\epsilon$."
        ]
    },
    {
        "id": "bsc-ra-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Prove that every bounded monotonic increasing sequence is convergent. Find the limit of the sequence $x_1 = \\sqrt{2}, x_{n+1} = \\sqrt{2 + x_n}$.",
        "answer_lines": [
            "**1. Proof of Monotone Convergence Theorem**:",
            "• Let $(x_n)$ be monotonic increasing ($x_n \\le x_{n+1}$) and bounded above by $M$.",
            "• Let $S = \\{x_n : n \\in \\mathbb{N}\\}$. By Completeness Axiom, $S$ has a supremum $L = \\sup S$.",
            "• For any $\\epsilon > 0$, $L - \\epsilon$ is not an upper bound of $S$. Thus there exists $N$ such that $x_N > L - \\epsilon$.",
            "• Since $(x_n)$ is increasing, for all $n \\ge N$: $L - \\epsilon < x_N \\le x_n \\le L < L + \\epsilon$.",
            "• Thus $|x_n - L| < \\epsilon$ for all $n \\ge N$, proving $\\lim_{n \\to \\infty} x_n = L = \\sup S$.",
            "**2. Limit Calculation for $x_{n+1} = \\sqrt{2 + x_n}$**:",
            "• By mathematical induction, $x_n < 2$ for all $n$: $x_1 = \\sqrt{2} < 2$. If $x_k < 2$, $x_{k+1} = \\sqrt{2 + x_k} < \\sqrt{2 + 2} = 2$.",
            "• Monotonicity: $x_{n+1}^2 - x_n^2 = (2 + x_n) - x_n^2 = (2 - x_n)(1 + x_n) > 0 \\implies x_{n+1} > x_n$.",
            "• Since sequence is increasing and bounded above by 2, it converges to limit $L$:",
            "$$L = \\sqrt{2 + L} \\implies L^2 - L - 2 = 0 \\implies (L - 2)(L + 1) = 0$$",
            "Since $x_n > 0$, $L = 2$. Limit is $2$."
        ]
    },
    {
        "id": "bsc-ra-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "State and prove Lagrange's Mean Value Theorem. Use it to prove that $\\frac{x}{1+x} < \\ln(1+x) < x$ for all $x > 0$.",
        "answer_lines": [
            "**1. Statement**: If $f: [a, b] \\to \\mathbb{R}$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c \\in (a, b)$ such that $f'(c) = \\frac{f(b) - f(a)}{b - a}$.",
            "**2. Proof**: Construct auxiliary function $\\phi(x) = f(x) - A x$ where $A = \\frac{f(b) - f(a)}{b - a}$. $\\phi$ satisfies Rolle's theorem on $[a, b]$ ($\\%(a) = \\phi(b)$), so $\\phi'(c) = f'(c) - A = 0 \\implies f'(c) = A$.",
            "**3. Inequality Proof**:",
            "• Let $f(t) = \\ln(1 + t)$ on $[0, x]$. $f'(t) = \\frac{1}{1 + t}$.",
            "• By LMVT on $[0, x]$, there exists $c \\in (0, x)$ such that:",
            "$$\\frac{\\ln(1 + x) - \\ln(1)}{x - 0} = f'(c) = \\frac{1}{1 + c} \\implies \\ln(1 + x) = \\frac{x}{1 + c}$$",
            "• Since $0 < c < x$, we have $1 < 1 + c < 1 + x \\implies \\frac{1}{1 + x} < \\frac{1}{1 + c} < 1$.",
            "• Multiplying by $x > 0$: $\\frac{x}{1 + x} < \\frac{x}{1 + c} < x \\implies \\frac{x}{1 + x} < \\ln(1 + x) < x$."
        ]
    },
    {
        "id": "bsc-ra-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "State and prove the Fundamental Theorem of Calculus. Evaluate $\\frac{d}{dx}\\int_0^{x^2} \\sin(t^2) dt$ using Leibniz's Integral Rule.",
        "answer_lines": [
            "**1. First Fundamental Theorem**: If $f$ is Riemann integrable on $[a, b]$ and $F(x) = \\int_a^x f(t) dt$, then $F$ is continuous on $[a, b]$, and at any point $x_0$ where $f$ is continuous, $F$ is differentiable with $F'(x_0) = f(x_0)$.",
            "**Proof**: For $h > 0$, $\\frac{F(x_0 + h) - F(x_0)}{h} - f(x_0) = \\frac{1}{h}\\int_{x_0}^{x_0+h} [f(t) - f(x_0)] dt$. By continuity, $|f(t) - f(x_0)| < \\epsilon$, so difference is bounded by $\\epsilon$.",
            "**2. Evaluation via Leibniz Rule**:",
            "Leibniz formula for $\\frac{d}{dx}\\int_{u(x)}^{v(x)} f(t) dt = f(v(x)) v'(x) - f(u(x)) u'(x)$.",
            "Here $v(x) = x^2, u(x) = 0, f(t) = \\sin(t^2)$:",
            "$$\\frac{d}{dx}\\int_0^{x^2} \\sin(t^2) dt = \\sin((x^2)^2) \\cdot (2x) - 0 = 2x \\sin(x^4)$$"
        ]
    },
    {
        "id": "bsc-ra-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "State and prove the Weierstrass M-Test for uniform convergence of series of functions. Test the uniform convergence of $\\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}$ on $\\mathbb{R}$.",
        "answer_lines": [
            "**1. Statement**: Let $\\sum f_n(x)$ be a series of functions on $E$. If there exists a convergent series of positive constants $\\sum M_n$ such that $|f_n(x)| \\le M_n$ for all $x \\in E$ and $n \\in \\mathbb{N}$, then $\\sum f_n(x)$ converges uniformly and absolutely on $E$.",
            "**2. Proof**: By Cauchy's criterion for real series, $\\sum_{k=n+1}^m M_k < \\epsilon$. By triangle inequality:",
            "$$\\left| \\sum_{k=n+1}^m f_k(x) \\right| \\le \\sum_{k=n+1}^m |f_k(x)| \\le \\sum_{k=n+1}^m M_k < \\epsilon$$",
            "By Cauchy's criterion for uniform convergence of functions, $\\sum f_n$ converges uniformly on $E$.",
            "**3. Application to $\\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}$**:",
            "For all $x \\in \\mathbb{R}$: $|\\cos(nx)| \\le 1 \\implies \\left|\\frac{\\cos(nx)}{n^2}\\right| \\le \\frac{1}{n^2} = M_n$.",
            "The numerical series $\\sum_{n=1}^\\infty \\frac{1}{n^2}$ converges by $p$-series test ($p = 2 > 1$).",
            "By Weierstrass M-Test, $\\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}$ converges uniformly on all of $\\mathbb{R}$."
        ]
    },
    {
        "id": "bsc-ra-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Define Lower and Upper Darboux Sums. Prove that a continuous function $f$ on $[a, b]$ is Riemann integrable.",
        "answer_lines": [
            "**1. Definitions**: For partition $P = \\{x_0, x_1, \\dots, x_n\\}$ of $[a, b]$, let $m_i = \\inf_{x \\in [x_{i-1}, x_i]} f(x)$ and $M_i = \\sup_{x \\in [x_{i-1}, x_i]} f(x)$.",
            "• Lower Darboux sum: $L(P, f) = \\sum_{i=1}^n m_i \\Delta x_i$.",
            "• Upper Darboux sum: $U(P, f) = \\sum_{i=1}^n M_i \\Delta x_i$.",
            "**2. Integrability Proof**:",
            "• Since $f$ is continuous on compact interval $[a, b]$, $f$ is uniformly continuous on $[a, b]$.",
            "• For any $\\epsilon > 0$, there exists $\\delta > 0$ such that $|f(x) - f(y)| < \\frac{\\epsilon}{b - a}$ whenever $|x - y| < \\delta$.",
            "• Choose partition $P$ with mesh $\\|P\\| < \\delta$. Then on each subinterval, $M_i - m_i \\le \\frac{\\epsilon}{b - a}$.",
            "$$U(P, f) - L(P, f) = \\sum_{i=1}^n (M_i - m_i) \\Delta x_i < \\frac{\\epsilon}{b - a} \\sum_{i=1}^n \\Delta x_i = \\frac{\\epsilon}{b - a} (b - a) = \\epsilon$$",
            "By Riemann's Criterion, $f$ is Riemann integrable on $[a, b]$."
        ]
    }
])

add_paper("real_analysis", 2, [
    {
        "id": "bsc-ra-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the Archimedean property of the real numbers.",
        "answer_lines": [
            "If $x, y \\in \\mathbb{R}$ with $x > 0$, then there exists an integer $n \\in \\mathbb{N}$ such that $n x > y$."
        ]
    },
    {
        "id": "bsc-ra-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Differentiate between Pointwise Convergence and Uniform Convergence for a sequence of functions $(f_n)$.",
        "answer_lines": [
            "**Pointwise**: $\\lim_{n \\to \\infty} f_n(x) = f(x)$ for each fixed $x$; choice of $N(\\epsilon, x)$ depends on both $\\epsilon$ and $x$.",
            "**Uniform**: $\\sup_{x \\in E} |f_n(x) - f(x)| \\to 0$; a single $N(\\epsilon)$ works uniformly across all $x \\in E$."
        ]
    },
    {
        "id": "bsc-ra-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "Give an example of a bounded function on $[0, 1]$ that is not Riemann integrable.",
        "answer_lines": [
            "The Dirichlet function: $f(x) = 1$ if $x \\in \\mathbb{Q}$ and $f(x) = 0$ if $x \\notin \\mathbb{Q}$. On any interval, $M_i = 1$ and $m_i = 0$, giving $U(P) = 1$ and $L(P) = 0$, so upper and lower integrals never coincide."
        ]
    },
    {
        "id": "bsc-ra-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State Taylor's Theorem with Lagrange's form of remainder.",
        "answer_lines": [
            "$$f(b) = \\sum_{k=0}^{n-1} \\frac{f^{(k)}(a)}{k!}(b - a)^k + \\frac{f^{(n)}(c)}{n!}(b - a)^n \\quad \\text{for some } c \\in (a, b)$$"
        ]
    },
    {
        "id": "bsc-ra-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
        "question": "State the Heine-Borel Theorem.",
        "answer_lines": [
            "A subset $K \\subset \\mathbb{R}^n$ is compact if and only if it is both closed and bounded."
        ]
    },
    {
        "id": "bsc-ra-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "State and prove the Extreme Value Theorem: A continuous function $f$ on a compact interval $[a, b]$ is bounded and attains its maximum and minimum values.",
        "answer_lines": [
            "**1. Boundedness Proof**:",
            "• Suppose $f$ is unbounded on $[a, b]$. For each $n \\in \\mathbb{N}$, choose $x_n \\in [a, b]$ such that $|f(x_n)| > n$.",
            "• Since $(x_n)$ is bounded in $[a, b]$, by Bolzano-Weierstrass there is a convergent subsequence $(x_{n_k}) \\to x_0 \\in [a, b]$.",
            "• Since $f$ is continuous at $x_0$, $\\lim f(x_{n_k}) = f(x_0)$. But $|f(x_{n_k})| > n_k \\to \\infty$, a contradiction. Thus $f$ is bounded.",
            "**2. Attainment of Bounds**:",
            "• Let $M = \\sup_{x \\in [a, b]} f(x)$. For each $n$, there exists $y_n \\in [a, b]$ with $M - 1/n < f(y_n) \\le M$.",
            "• Passing to a convergent subsequence $y_{n_k} \\to c \\in [a, b]$, continuity gives $f(c) = \\lim f(y_{n_k}) = M$.",
            "• Thus $f$ attains its supremum $M$ at point $c \\in [a, b]$. Similarly it attains its infimum."
        ]
    },
    {
        "id": "bsc-ra-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "State and prove the D'Alembert Ratio Test for positive term series. Test convergence of $\\sum_{n=1}^\\infty \\frac{n!}{n^n}$.",
        "answer_lines": [
            "**1. Statement**: Let $\\sum a_n$ be a series of positive terms and let $\\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = L$.",
            "• If $L < 1$, the series converges.",
            "• If $L > 1$, the series diverges.",
            "• If $L = 1$, the test is inconclusive.",
            "**2. Proof for $L < 1$**:",
            "Choose $r$ such that $L < r < 1$. There exists $N$ such that $\\frac{a_{n+1}}{a_n} < r$ for all $n \\ge N$.",
            "Inductively, $a_{N+k} < a_N r^k$. Since $\\sum r^k$ is a convergent geometric series ($r < 1$), $\\sum a_n$ converges by Comparison Test.",
            "**3. Convergence of $\\sum \\frac{n!}{n^n}$**:",
            "$$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(n+1)^{n+1}} \\frac{n^n}{n!} = \\frac{(n+1) n^n}{(n+1)(n+1)^n} = \\left(\\frac{n}{n+1}\\right)^n = \\frac{1}{(1 + 1/n)^n}$$",
            "$$\\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = \\lim_{n \\to \\infty} \\frac{1}{(1 + 1/n)^n} = \\frac{1}{e}$$",
            "Since $e \\approx 2.718 > 1$, $L = \\frac{1}{e} < 1$. By Ratio Test, $\\sum_{n=1}^\\infty \\frac{n!}{n^n}$ converges."
        ]
    },
    {
        "id": "bsc-ra-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Compute the Darboux upper and lower integrals for $f(x) = x^2$ on $[0, a]$ with equal partitions $P_n = \\{0, a/n, 2a/n, \\dots, a\\}$ and prove $\\int_0^a x^2 dx = \\frac{a^3}{3}$.",
        "answer_lines": [
            "**1. Subinterval Construction**: Width $\\Delta x_i = \\frac{a}{n}$, $x_i = \\frac{i a}{n}$.",
            "Since $f(x) = x^2$ is strictly increasing on $[0, a]$:",
            "• $m_i = f(x_{i-1}) = \\left(\\frac{(i-1)a}{n}\\right)^2$, $M_i = f(x_i) = \\left(\\frac{ia}{n}\\right)^2$.",
            "**2. Upper Sum**:",
            "$$U(P_n, f) = \\sum_{i=1}^n \\left(\\frac{ia}{n}\\right)^2 \\frac{a}{n} = \\frac{a^3}{n^3}\\sum_{i=1}^n i^2 = \\frac{a^3}{n^3}\\frac{n(n+1)(2n+1)}{6} = \\frac{a^3}{6}\\left(1 + \\frac{1}{n}\\right)\\left(2 + \\frac{1}{n}\\right)$$",
            "$$\\lim_{n \\to \\infty} U(P_n, f) = \\frac{a^3}{6}(1)(2) = \\frac{a^3}{3}$$",
            "**3. Lower Sum**:",
            "$$L(P_n, f) = \\sum_{i=1}^n \\left(\\frac{(i-1)a}{n}\\right)^2 \\frac{a}{n} = \\frac{a^3}{n^3}\\frac{(n-1)n(2n-1)}{6} = \\frac{a^3}{6}\\left(1 - \\frac{1}{n}\\right)\\left(2 - \\frac{1}{n}\\right)$$",
            "$$\\lim_{n \\to \\infty} L(P_n, f) = \\frac{a^3}{3}$$",
            "**Conclusion**: Since $\\lim U(P_n) = \\lim L(P_n) = \\frac{a^3}{3}$, $f$ is Riemann integrable with $\\int_0^a x^2 dx = \\frac{a^3}{3}$."
        ]
    },
    {
        "id": "bsc-ra-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Examine the convergence of the improper integrals: (i) $\\int_1^\\infty \\frac{dx}{x^2 (1 + e^x)}$, (ii) $\\int_0^1 \\frac{dx}{\\sqrt{x(1 - x)}}$.",
        "answer_lines": [
            "**Part (i): $\\int_1^\\infty \\frac{dx}{x^2(1 + e^x)}$**:",
            "• Integrand $f(x) = \\frac{1}{x^2(1 + e^x)}$. For $x \\ge 1$, $1 + e^x > 1$, hence $f(x) < \\frac{1}{x^2}$.",
            "• Comparison integral $\\int_1^\\infty \\frac{dx}{x^2}$ converges by $p$-test ($p = 2 > 1$).",
            "• By Direct Comparison Test, $\\int_1^\\infty \\frac{dx}{x^2(1 + e^x)}$ converges.",
            "**Part (ii): $\\int_0^1 \\frac{dx}{\\sqrt{x(1 - x)}}$**:",
            "• Singularities exist at both endpoints $x = 0$ and $x = 1$. Split integral at $1/2$:",
            "$$I_1 = \\int_0^{1/2} \\frac{dx}{\\sqrt{x}\\sqrt{1-x}}, \\quad I_2 = \\int_{1/2}^1 \\frac{dx}{\\sqrt{x}\\sqrt{1-x}}$$",
            "• At $x = 0$: $g(x) = \\frac{1}{x^{1/2}}$. $\\lim_{x \\to 0} \\frac{f(x)}{g(x)} = \\lim_{x \\to 0}\\frac{1}{\\sqrt{1-x}} = 1$. Since $\\int_0^{1/2}\\frac{dx}{x^{1/2}}$ converges ($p = 1/2 < 1$), $I_1$ converges.",
            "• By symmetry, $I_2$ converges. Total integral converges (in fact, equals $\\pi$ via substitution $x = \\sin^2\\theta$)."
        ]
    },
    {
        "id": "bsc-ra-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
        "question": "Prove that the limit of a uniformly convergent sequence of continuous functions is continuous (Uniform Limit Theorem).",
        "answer_lines": [
            "**1. Theorem Statement**: Let $f_n: E \\to \\mathbb{R}$ be a sequence of continuous functions converging uniformly to $f$ on $E$. Then $f$ is continuous on $E$.",
            "**2. $\\epsilon/3$ Proof**:",
            "• Let $x_0 \\in E$ and $\\epsilon > 0$. By uniform convergence, there exists $N$ such that:",
            "$$|f_n(x) - f(x)| < \\frac{\\epsilon}{3} \\quad \\text{for all } x \\in E \\text{ and } n \\ge N$$",
            "• Fix $n = N$. Since $f_N$ is continuous at $x_0$, there exists $\\delta > 0$ such that:",
            "$$|f_N(x) - f_N(x_0)| < \\frac{\\epsilon}{3} \\quad \\text{whenever } |x - x_0| < \\delta, x \\in E$$",
            "• Applying triangle inequality for any $|x - x_0| < \\delta$:",
            "$$|f(x) - f(x_0)| = |(f(x) - f_N(x)) + (f_N(x) - f_N(x_0)) + (f_N(x_0) - f(x_0))|$$",
            "$$\\le |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)| < \\frac{\\epsilon}{3} + \\frac{\\epsilon}{3} + \\frac{\\epsilon}{3} = \\epsilon$$",
            "Hence $f$ is continuous at $x_0$."
        ]
    }
])

with open("scripts/bsc_sem2_part1.json", "w", encoding="utf-8") as f:
    json.dump(subjects_data, f, indent=2)

print("B.Sc Sem 2 Part 1 written successfully.")
