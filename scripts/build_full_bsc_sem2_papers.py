import json

papers = {}

def add_paper(key, q_list):
    papers[key] = q_list

# =========================================================================
# 1. DATA STRUCTURES (CS, DS-AI, Math)
# =========================================================================
add_paper("ds_set1", [
    {"id": "bsc-ds-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define an Abstract Data Type (ADT) and give two examples.",
     "answer_lines": [
         "**Definition**: A mathematical model of a data structure that defines the data stored and the operations allowed, without specifying implementation.",
         "**Examples**: Stack ADT (`push`, `pop`, `peek`) and Queue ADT (`enqueue`, `dequeue`)."
     ]},
    {"id": "bsc-ds-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Differentiate between Singly and Doubly Linked Lists.",
     "answer_lines": [
         "**Singly Linked List**: Each node contains data and a single pointer (`next`); allows forward traversal only.",
         "**Doubly Linked List**: Each node contains data, `prev`, and `next` pointers; allows bidirectional traversal and $O(1)$ node deletion given node pointer."
     ]},
    {"id": "bsc-ds-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the conditions for Queue Overflow and Underflow in linear array implementation of size $N$.",
     "answer_lines": [
         "• **Overflow**: Occurs during enqueue when `rear == N - 1`.",
         "• **Underflow**: Occurs during dequeue when `front == -1` or `front > rear`."
     ]},
    {"id": "bsc-ds-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define height and depth of a node in a binary tree.",
     "answer_lines": [
         "**Depth**: Number of edges from the root down to the node (root depth $= 0$).",
         "**Height**: Number of edges on the longest path from the node down to a leaf (leaf height $= 0$)."
     ]},
    {"id": "bsc-ds-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the time complexity of QuickSort in best, average, and worst cases.",
     "answer_lines": [
         "• Best Case: $O(n \\log n)$, Average Case: $O(n \\log n)$, Worst Case: $O(n^2)$ (when array is already sorted and pivot is extreme)."
     ]},
    {"id": "bsc-ds-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Implement a Circular Queue using an array. Detail enqueue, dequeue, and full/empty checks with modulo indexing.",
     "answer_lines": [
         "**1. Circular Wrap-around**: Linear queues suffer from false overflow when rear reaches end while front has moved. Circular queue connects end to beginning: index wrap via `(rear + 1) % MAX`.",
         "**2. Conditions**:",
         "• Empty: `front == -1`.",
         "• Full: `(rear + 1) % MAX == front`.",
         "**3. C Implementation**:",
         "```c",
         "#define MAX 5",
         "int q[MAX], f = -1, r = -1;",
         "void enqueue(int val) {",
         "    if ((r + 1) % MAX == f) { printf(\"Overflow\\n\"); return; }",
         "    if (f == -1) f = r = 0;",
         "    else r = (r + 1) % MAX;",
         "    q[r] = val;",
         "}",
         "int dequeue() {",
         "    if (f == -1) { printf(\"Underflow\\n\"); return -1; }",
         "    int v = q[f];",
         "    if (f == r) f = r = -1;",
         "    else f = (f + 1) % MAX;",
         "    return v;",
         "}",
         "```"
     ]},
    {"id": "bsc-ds-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Infix to Postfix conversion using Stack. Trace: $(A + B) * C - (D - E) * (F + G)$.",
     "answer_lines": [
         "**1. Precedence**: `*`, `/` > `+`, `-`. Parentheses dictate immediate evaluation.",
         "**2. Trace**:",
         "• `(A + B)` evaluates to `A B +`.",
         "• Multiplied by `C` gives `A B + C *`.",
         "• `(D - E)` gives `D E -`.",
         "• `(F + G)` gives `F G +`.",
         "• Subtraction yields: `A B + C * D E - F G + * -`.",
         "Stack handles operator priorities and output sequencing deterministically."
     ]},
    {"id": "bsc-ds-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Construct a Binary Search Tree (BST) for keys $[45, 15, 79, 90, 10, 55, 12, 20, 50]$ and provide Inorder, Preorder, and Postorder traversals.",
     "answer_lines": [
         "**1. BST Construction**: Left child < Parent < Right child.",
         "• Root is 45. Left child is 15; right child is 79.",
         "• Left of 15 is 10 (with right child 12); right of 15 is 20.",
         "• Left of 79 is 55 (with left child 50); right of 79 is 90.",
         "**2. Traversals**:",
         "• **Inorder (Sorted)**: `10, 12, 15, 20, 45, 50, 55, 79, 90`.",
         "• **Preorder**: `45, 15, 10, 12, 20, 79, 55, 50, 90`.",
         "• **Postorder**: `12, 10, 20, 15, 50, 55, 90, 79, 45`."
     ]},
    {"id": "bsc-ds-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Compare Breadth-First Search (BFS) and Depth-First Search (DFS) for graph traversal.",
     "answer_lines": [
         "**BFS**: Uses FIFO queue. Explores neighbors level by level. Optimal for unweighted shortest paths. Space complexity $O(V)$.",
         "**DFS**: Uses LIFO stack / recursion. Explores along branch until dead end, then backtracks. Used in topological sorting, strongly connected components, cycle detection. Space complexity $O(h)$."
     ]},
    {"id": "bsc-ds-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Dijkstra's algorithm for finding single-source shortest paths in weighted directed graphs.",
     "answer_lines": [
         "**1. Greedy Selection**: In each step, pick unvisited vertex $u$ with minimum tentative distance $dist[u]$.",
         "**2. Relaxation**: For each neighbor $v$:",
         "$$\\text{if } dist[u] + w(u, v) < dist[v] \\implies dist[v] = dist[u] + w(u, v)$$",
         "**3. Complexity**: With adjacency list and Min-Heap priority queue, running time is $O((V + E) \\log V)$."
     ]}
])

add_paper("ds_set2", [
    {"id": "bsc-ds-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define balance factor of an AVL tree.",
     "answer_lines": ["$BF = \\text{height}(\\text{left subtree}) - \\text{height}(\\text{right subtree}) \\in \\{-1, 0, +1\\}$."]},
    {"id": "bsc-ds-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Differentiate between linear probing and quadratic probing.",
     "answer_lines": ["Linear probing uses step $i$: $h(k, i) = (h'(k) + i) \\bmod m$. Quadratic uses $h(k, i) = (h'(k) + c_1 i + c_2 i^2) \\bmod m$, avoiding primary clustering."]},
    {"id": "bsc-ds-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is the primary advantage of a circular linked list?",
     "answer_lines": ["Any node can be used as starting point to traverse the entire list; ideal for cyclic round-robin scheduling."]},
    {"id": "bsc-ds-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the Min-Heap property.",
     "answer_lines": ["In a complete binary tree, for every node $i$: $A[\\text{parent}(i)] \\le A[i]$. The minimum key is always at root $A[0]$."]},
    {"id": "bsc-ds-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "What is the time complexity of building a heap of $n$ elements?",
     "answer_lines": ["Using bottom-up `buildHeap`, time complexity is linear $O(n)$, not $O(n \\log n)$."]},
    {"id": "bsc-ds-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain AVL tree rotations (LL, RR, LR, RL) and trace insertion of keys $[10, 20, 30, 40, 50, 25]$.",
     "answer_lines": [
         "**Rotations**: Single rotations (LL right rotate, RR left rotate); Double rotations (LR left-then-right rotate, RL right-then-left rotate).",
         "**Trace**: Inserting 10, 20, 30 causes RR imbalance at 10 $\\to$ left rotate makes 20 root. Inserting 40, 50 causes RR at 30 $\\to$ left rotate makes 40 parent of 30, 50. Inserting 25 causes RL imbalance at 20 $\\to$ double rotation restores tree height to $O(\\log n)$."
     ]},
    {"id": "bsc-ds-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Merge Sort with divide-and-conquer analysis. Trace on $[38, 27, 43, 3, 9, 82, 10]$ and solve recurrence $T(n) = 2T(n/2) + O(n)$.",
     "answer_lines": [
         "**Divide**: Split array into two halves of size $n/2$.",
         "**Conquer**: Recursively sort both halves.",
         "**Combine**: Merge sorted subarrays in $O(n)$ time using two pointers.",
         "**Recurrence**: By Master Theorem Case 2: $a=2, b=2, k=1 \\implies T(n) = \\Theta(n \\log n)$ in all cases."
     ]},
    {"id": "bsc-ds-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Kruskal's algorithm for Minimum Spanning Tree using Disjoint Set Union (DSU) with union-by-rank and path compression.",
     "answer_lines": [
         "**1. Strategy**: Sort all edges in non-decreasing order of weight. Greedily add edges that connect different components without forming cycles.",
         "**2. DSU**: `find` with path compression flattens tree; `union` by rank attaches smaller tree under larger.",
         "**3. Complexity**: $O(E \\log V)$ for sorting, DSU operations run in almost $O(1)$ amortized time."
     ]},
    {"id": "bsc-ds-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Implement a Priority Queue using a Binary Min-Heap with `insert` and `extractMin` operations.",
     "answer_lines": [
         "**`insert(key)`**: Append key at index $n$, heapify-up while parent is larger: $O(\\log n)$.",
         "**`extractMin()`**: Save $A[0]$, replace root with last element $A[n-1]$, decrement size, heapify-down comparing with smaller child: $O(\\log n)$."
     ]},
    {"id": "bsc-ds-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Explain Hashing with Separate Chaining and Linear Probing. Insert keys $[23, 43, 13, 27, 39, 52]$ with $h(k) = k \\bmod 7$.",
     "answer_lines": [
         "• Hashes: $23 \\to 2, 43 \\to 1, 13 \\to 6, 27 \\to 6, 39 \\to 4, 52 \\to 3$.",
         "• Separate Chaining: Linked list at bucket 6 stores `13 -> 27`.",
         "• Linear Probing: 27 collides at index 6, wraps around to index 0. Final table: `[0: 27, 1: 43, 2: 23, 3: 52, 4: 39, 6: 13]`."
     ]}
])

# =========================================================================
# 2. REAL ANALYSIS (B.Sc Math)
# =========================================================================
add_paper("ra_set1", [
    {"id": "bsc-ra-s1-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the Completeness Axiom (Least Upper Bound Property) of $\\mathbb{R}$.",
     "answer_lines": ["Every non-empty subset $S \\subset \\mathbb{R}$ that is bounded above has a least upper bound (supremum) in $\\mathbb{R}$."]},
    {"id": "bsc-ra-s1-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the Bolzano-Weierstrass Theorem for bounded real sequences.",
     "answer_lines": ["Every bounded sequence of real numbers possesses at least one convergent subsequence."]},
    {"id": "bsc-ra-s1-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State Cauchy's convergence criterion for sequences.",
     "answer_lines": ["A sequence $(x_n)$ converges in $\\mathbb{R}$ if and only if for every $\\epsilon > 0$, there exists $N$ such that $|x_n - x_m| < \\epsilon$ for all $n, m \\ge N$."]},
    {"id": "bsc-ra-s1-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Define uniform continuity on an interval $I$.",
     "answer_lines": ["$f$ is uniformly continuous if for every $\\epsilon > 0$, there is $\\delta > 0$ such that $|f(x) - f(y)| < \\epsilon$ whenever $|x - y| < \\delta$ for all $x, y \\in I$."]},
    {"id": "bsc-ra-s1-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State Riemann's criterion of integrability.",
     "answer_lines": ["$f$ is Riemann integrable on $[a, b]$ if and only if for every $\\epsilon > 0$, there exists partition $P$ such that $U(P, f) - L(P, f) < \\epsilon$."]},
    {"id": "bsc-ra-s1-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Prove that every bounded monotonic increasing sequence converges. Find limit of $x_1 = \\sqrt{2}, x_{n+1} = \\sqrt{2 + x_n}$.",
     "answer_lines": [
         "**Proof**: Let $S = \\{x_n\\}$ be bounded above by $M$. By completeness, $L = \\sup S$ exists. For any $\\epsilon > 0$, $x_N > L - \\epsilon$. Since $(x_n)$ is increasing, $L - \\epsilon < x_n \\le L < L + \\epsilon$ for all $n \\ge N$, so $x_n \\to L$.",
         "**Limit**: Sequence is bounded by 2 and increasing. $L = \\sqrt{2 + L} \\implies L^2 - L - 2 = 0 \\implies L = 2$ (since $x_n > 0$)."
     ]},
    {"id": "bsc-ra-s1-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "State and prove Lagrange's Mean Value Theorem. Prove that $\\frac{x}{1+x} < \\ln(1+x) < x$ for all $x > 0$.",
     "answer_lines": [
         "**LMVT**: If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c \\in (a, b)$ with $f'(c) = \\frac{f(b) - f(a)}{b - a}$.",
         "**Proof**: Apply LMVT to $f(t) = \\ln(1 + t)$ on $[0, x]$: $\\frac{\\ln(1+x)}{x} = \\frac{1}{1+c}$ with $0 < c < x$. Since $1 < 1+c < 1+x$, taking reciprocals and multiplying by $x$ gives $\\frac{x}{1+x} < \\ln(1+x) < x$."
     ]},
    {"id": "bsc-ra-s1-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "State and prove the Fundamental Theorem of Calculus. Evaluate $\\frac{d}{dx}\\int_0^{x^2} \\sin(t^2) dt$.",
     "answer_lines": [
         "**FTC**: If $F(x) = \\int_a^x f(t) dt$ and $f$ is continuous at $x_0$, then $F'(x_0) = f(x_0)$.",
         "**Leibniz Rule**: $\\frac{d}{dx}\\int_0^{x^2} \\sin(t^2) dt = \\sin((x^2)^2) \\cdot \\frac{d}{dx}(x^2) = 2x \\sin(x^4)$."
     ]},
    {"id": "bsc-ra-s1-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "State and prove the Weierstrass M-Test. Test uniform convergence of $\\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}$ on $\\mathbb{R}$.",
     "answer_lines": [
         "**M-Test**: If $|f_n(x)| \\le M_n$ and $\\sum M_n$ converges, then $\\sum f_n(x)$ converges uniformly and absolutely.",
         "**Application**: $|\\frac{\\cos(nx)}{n^2}| \\le \\frac{1}{n^2} = M_n$. Since $\\sum \\frac{1}{n^2}$ converges ($p=2 > 1$), $\\sum \\frac{\\cos(nx)}{n^2}$ converges uniformly on $\\mathbb{R}$."
     ]},
    {"id": "bsc-ra-s1-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Prove that every continuous function on a closed bounded interval $[a, b]$ is Riemann integrable.",
     "answer_lines": [
         "Continuous function on compact $[a, b]$ is uniformly continuous: for $\\epsilon > 0$, $|f(x) - f(y)| < \\frac{\\epsilon}{b - a}$ when $|x - y| < \\delta$. Choosing partition with mesh $< \\delta$, $U(P, f) - L(P, f) = \\sum (M_i - m_i)\\Delta x_i < \\frac{\\epsilon}{b-a}(b-a) = \\epsilon$. Hence $f$ is Riemann integrable."
     ]}
])

add_paper("ra_set2", [
    {"id": "bsc-ra-s2-q1", "question_no": 1, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the Archimedean property of real numbers.",
     "answer_lines": ["If $x, y \\in \\mathbb{R}$ with $x > 0$, then there exists an integer $n \\in \\mathbb{N}$ such that $n x > y$."]},
    {"id": "bsc-ra-s2-q2", "question_no": 2, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Differentiate between Pointwise and Uniform convergence.",
     "answer_lines": ["Pointwise convergence depends on both $\\epsilon$ and $x$ ($N(\\epsilon, x)$); Uniform convergence has a single index $N(\\epsilon)$ valid across all $x \\in E$."]},
    {"id": "bsc-ra-s2-q3", "question_no": 3, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "Give an example of a bounded function on $[0, 1]$ that is not Riemann integrable.",
     "answer_lines": ["The Dirichlet function: $f(x) = 1$ for $x \\in \\mathbb{Q}$ and $0$ for $x \\notin \\mathbb{Q}$. $U(P) = 1$ and $L(P) = 0$ for all partitions."]},
    {"id": "bsc-ra-s2-q4", "question_no": 4, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State Taylor's Theorem with Lagrange's form of remainder.",
     "answer_lines": ["$f(b) = \\sum_{k=0}^{n-1}\\frac{f^{(k)}(a)}{k!}(b-a)^k + \\frac{f^{(n)}(c)}{n!}(b-a)^n$ for some $c \\in (a, b)$."]},
    {"id": "bsc-ra-s2-q5", "question_no": 5, "marks": 2, "prompt": "Part A · 2 Marks",
     "question": "State the Heine-Borel Theorem.",
     "answer_lines": ["A subset $K \\subset \\mathbb{R}$ is compact if and only if it is closed and bounded."]},
    {"id": "bsc-ra-s2-q6", "question_no": 6, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Prove the Extreme Value Theorem: A continuous function on a compact interval $[a, b]$ is bounded and attains its bounds.",
     "answer_lines": [
         "**Boundedness**: If unbounded, there exist $x_n$ with $|f(x_n)| > n$. By Bolzano-Weierstrass, a subsequence converges $x_{n_k} \\to x_0 \\in [a, b]$. Continuity gives $f(x_{n_k}) \\to f(x_0)$, contradicting $|f(x_{n_k})| > n_k \\to \\infty$.",
         "**Attainment**: If $M = \\sup f(x)$, there exist $y_n$ with $f(y_n) > M - 1/n$. A subsequence converges $y_{n_k} \\to c$, and by continuity $f(c) = M$."
     ]},
    {"id": "bsc-ra-s2-q7", "question_no": 7, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "State and prove D'Alembert's Ratio Test. Test convergence of $\\sum_{n=1}^\\infty \\frac{n!}{n^n}$.",
     "answer_lines": [
         "**Ratio Test**: If $\\lim \\frac{a_{n+1}}{a_n} = L < 1$, the series converges.",
         "**Application**: $\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(n+1)^{n+1}}\\frac{n^n}{n!} = \\left(\\frac{n}{n+1}\\right)^n = \\frac{1}{(1+1/n)^n} \\to \\frac{1}{e}$.",
         "Since $1/e \\approx 0.368 < 1$, the series $\\sum \\frac{n!}{n^n}$ converges."
     ]},
    {"id": "bsc-ra-s2-q8", "question_no": 8, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Compute Darboux upper and lower integrals for $f(x) = x^2$ on $[0, a]$ with partition $P_n = \\{0, a/n, 2a/n, \\dots, a\\}$.",
     "answer_lines": [
         "$U(P_n) = \\sum_{i=1}^n (ia/n)^2 (a/n) = \\frac{a^3}{n^3}\\frac{n(n+1)(2n+1)}{6} \\to \\frac{a^3}{3}$.",
         "$L(P_n) = \\sum_{i=1}^n ((i-1)a/n)^2 (a/n) = \\frac{a^3}{n^3}\\frac{(n-1)n(2n-1)}{6} \\to \\frac{a^3}{3}$.",
         "Since $\\lim U(P_n) = \\lim L(P_n) = \\frac{a^3}{3}$, the integral is $\\frac{a^3}{3}$."
     ]},
    {"id": "bsc-ra-s2-q9", "question_no": 9, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Test the convergence of improper integrals: (i) $\\int_1^\\infty \\frac{dx}{x^2 (1 + e^x)}$, (ii) $\\int_0^1 \\frac{dx}{\\sqrt{x(1-x)}}$.",
     "answer_lines": [
         "**(i)** For $x \\ge 1$, $\\frac{1}{x^2(1+e^x)} < \\frac{1}{x^2}$. Since $\\int_1^\\infty \\frac{dx}{x^2}$ converges ($p=2 > 1$), the integral converges by comparison.",
         "**(ii)** Endpoints $0$ and $1$ are singular points. Comparison with $\\frac{1}{x^{1/2}}$ at $0$ and $\\frac{1}{(1-x)^{1/2}}$ at $1$ shows convergence ($p = 1/2 < 1$)."
     ]},
    {"id": "bsc-ra-s2-q10", "question_no": 10, "marks": 10, "prompt": "Part B · 10 Marks",
     "question": "Prove that the limit of a uniformly convergent sequence of continuous functions is continuous (Uniform Limit Theorem).",
     "answer_lines": [
         "Let $f_n \\to f$ uniformly. For $\\epsilon > 0$, choose $N$ such that $|f_N(x) - f(x)| < \\epsilon/3$. By continuity of $f_N$, $|f_N(x) - f_N(x_0)| < \\epsilon/3$ for $|x - x_0| < \\delta$. Then $|f(x) - f(x_0)| \\le |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)| < \\epsilon/3 + \\epsilon/3 + \\epsilon/3 = \\epsilon$. Hence $f$ is continuous."
     ]}
])

with open("scripts/bsc_sem2_part1.json", "w", encoding="utf-8") as f:
    json.dump(papers, f, indent=2)

print("Part 1 written.")
