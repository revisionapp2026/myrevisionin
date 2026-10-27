/**
 * Authentic University Model Papers & Solved Solutions for B.Sc Semester 2.
 * Curricula: UGC LOCF / CBCS Model Curriculum.
 *
 * Covers all 28 B.Sc Semester 2 Subjects across:
 * - Computer Science & Data Science
 * - Mathematics & Statistics
 * - Physics & Chemistry
 * - Life Sciences (Botany, Zoology, Microbiology) - Strictly ZERO LaTeX
 * - Environmental Science - Strictly ZERO LaTeX
 * - Practical Laboratories
 */

import type { DbQuestion } from "./content";

const sem2BscPapers: Record<string, DbQuestion[]> = {
  "ds_set1": [
    {
      "id": "bsc-ds-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define an Abstract Data Type (ADT) and give two examples.",
      "answer_lines": [
        "**Definition**: A mathematical model of a data structure that defines the data stored and the operations allowed, without specifying implementation.",
        "**Examples**: Stack ADT (`push`, `pop`, `peek`) and Queue ADT (`enqueue`, `dequeue`)."
      ]
    },
    {
      "id": "bsc-ds-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between Singly and Doubly Linked Lists.",
      "answer_lines": [
        "**Singly Linked List**: Each node contains data and a single pointer (`next`); allows forward traversal only.",
        "**Doubly Linked List**: Each node contains data, `prev`, and `next` pointers; allows bidirectional traversal and $O(1)$ node deletion given node pointer."
      ]
    },
    {
      "id": "bsc-ds-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the conditions for Queue Overflow and Underflow in linear array implementation of size $N$.",
      "answer_lines": [
        "\u2022 **Overflow**: Occurs during enqueue when `rear == N - 1`.",
        "\u2022 **Underflow**: Occurs during dequeue when `front == -1` or `front > rear`."
      ]
    },
    {
      "id": "bsc-ds-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define height and depth of a node in a binary tree.",
      "answer_lines": [
        "**Depth**: Number of edges from the root down to the node (root depth $= 0$).",
        "**Height**: Number of edges on the longest path from the node down to a leaf (leaf height $= 0$)."
      ]
    },
    {
      "id": "bsc-ds-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the time complexity of QuickSort in best, average, and worst cases.",
      "answer_lines": [
        "\u2022 Best Case: $O(n \\log n)$, Average Case: $O(n \\log n)$, Worst Case: $O(n^2)$ (when array is already sorted and pivot is extreme)."
      ]
    },
    {
      "id": "bsc-ds-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Implement a Circular Queue using an array. Detail enqueue, dequeue, and full/empty checks with modulo indexing.",
      "answer_lines": [
        "**1. Circular Wrap-around**: Linear queues suffer from false overflow when rear reaches end while front has moved. Circular queue connects end to beginning: index wrap via `(rear + 1) % MAX`.",
        "**2. Conditions**:",
        "\u2022 Empty: `front == -1`.",
        "\u2022 Full: `(rear + 1) % MAX == front`.",
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
      ]
    },
    {
      "id": "bsc-ds-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Infix to Postfix conversion using Stack. Trace: $(A + B) * C - (D - E) * (F + G)$.",
      "answer_lines": [
        "**1. Precedence**: `*`, `/` > `+`, `-`. Parentheses dictate immediate evaluation.",
        "**2. Trace**:",
        "\u2022 `(A + B)` evaluates to `A B +`.",
        "\u2022 Multiplied by `C` gives `A B + C *`.",
        "\u2022 `(D - E)` gives `D E -`.",
        "\u2022 `(F + G)` gives `F G +`.",
        "\u2022 Subtraction yields: `A B + C * D E - F G + * -`.",
        "Stack handles operator priorities and output sequencing deterministically."
      ]
    },
    {
      "id": "bsc-ds-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Construct a Binary Search Tree (BST) for keys $[45, 15, 79, 90, 10, 55, 12, 20, 50]$ and provide Inorder, Preorder, and Postorder traversals.",
      "answer_lines": [
        "**1. BST Construction**: Left child < Parent < Right child.",
        "\u2022 Root is 45. Left child is 15; right child is 79.",
        "\u2022 Left of 15 is 10 (with right child 12); right of 15 is 20.",
        "\u2022 Left of 79 is 55 (with left child 50); right of 79 is 90.",
        "**2. Traversals**:",
        "\u2022 **Inorder (Sorted)**: `10, 12, 15, 20, 45, 50, 55, 79, 90`.",
        "\u2022 **Preorder**: `45, 15, 10, 12, 20, 79, 55, 50, 90`.",
        "\u2022 **Postorder**: `12, 10, 20, 15, 50, 55, 90, 79, 45`."
      ]
    },
    {
      "id": "bsc-ds-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Compare Breadth-First Search (BFS) and Depth-First Search (DFS) for graph traversal.",
      "answer_lines": [
        "**BFS**: Uses FIFO queue. Explores neighbors level by level. Optimal for unweighted shortest paths. Space complexity $O(V)$.",
        "**DFS**: Uses LIFO stack / recursion. Explores along branch until dead end, then backtracks. Used in topological sorting, strongly connected components, cycle detection. Space complexity $O(h)$."
      ]
    },
    {
      "id": "bsc-ds-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Dijkstra's algorithm for finding single-source shortest paths in weighted directed graphs.",
      "answer_lines": [
        "**1. Greedy Selection**: In each step, pick unvisited vertex $u$ with minimum tentative distance $dist[u]$.",
        "**2. Relaxation**: For each neighbor $v$:",
        "$$\\text{if } dist[u] + w(u, v) < dist[v] \\implies dist[v] = dist[u] + w(u, v)$$",
        "**3. Complexity**: With adjacency list and Min-Heap priority queue, running time is $O((V + E) \\log V)$."
      ]
    }
  ],
  "ds_set2": [
    {
      "id": "bsc-ds-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define balance factor of an AVL tree.",
      "answer_lines": [
        "$BF = \\text{height}(\\text{left subtree}) - \\text{height}(\\text{right subtree}) \\in \\{-1, 0, +1\\}$."
      ]
    },
    {
      "id": "bsc-ds-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between linear probing and quadratic probing.",
      "answer_lines": [
        "Linear probing uses step $i$: $h(k, i) = (h'(k) + i) \\bmod m$. Quadratic uses $h(k, i) = (h'(k) + c_1 i + c_2 i^2) \\bmod m$, avoiding primary clustering."
      ]
    },
    {
      "id": "bsc-ds-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the primary advantage of a circular linked list?",
      "answer_lines": [
        "Any node can be used as starting point to traverse the entire list; ideal for cyclic round-robin scheduling."
      ]
    },
    {
      "id": "bsc-ds-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Min-Heap property.",
      "answer_lines": [
        "In a complete binary tree, for every node $i$: $A[\\text{parent}(i)] \\le A[i]$. The minimum key is always at root $A[0]$."
      ]
    },
    {
      "id": "bsc-ds-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the time complexity of building a heap of $n$ elements?",
      "answer_lines": [
        "Using bottom-up `buildHeap`, time complexity is linear $O(n)$, not $O(n \\log n)$."
      ]
    },
    {
      "id": "bsc-ds-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain AVL tree rotations (LL, RR, LR, RL) and trace insertion of keys $[10, 20, 30, 40, 50, 25]$.",
      "answer_lines": [
        "**Rotations**: Single rotations (LL right rotate, RR left rotate); Double rotations (LR left-then-right rotate, RL right-then-left rotate).",
        "**Trace**: Inserting 10, 20, 30 causes RR imbalance at 10 $\\to$ left rotate makes 20 root. Inserting 40, 50 causes RR at 30 $\\to$ left rotate makes 40 parent of 30, 50. Inserting 25 causes RL imbalance at 20 $\\to$ double rotation restores tree height to $O(\\log n)$."
      ]
    },
    {
      "id": "bsc-ds-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Merge Sort with divide-and-conquer analysis. Trace on $[38, 27, 43, 3, 9, 82, 10]$ and solve recurrence $T(n) = 2T(n/2) + O(n)$.",
      "answer_lines": [
        "**Divide**: Split array into two halves of size $n/2$.",
        "**Conquer**: Recursively sort both halves.",
        "**Combine**: Merge sorted subarrays in $O(n)$ time using two pointers.",
        "**Recurrence**: By Master Theorem Case 2: $a=2, b=2, k=1 \\implies T(n) = \\Theta(n \\log n)$ in all cases."
      ]
    },
    {
      "id": "bsc-ds-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Kruskal's algorithm for Minimum Spanning Tree using Disjoint Set Union (DSU) with union-by-rank and path compression.",
      "answer_lines": [
        "**1. Strategy**: Sort all edges in non-decreasing order of weight. Greedily add edges that connect different components without forming cycles.",
        "**2. DSU**: `find` with path compression flattens tree; `union` by rank attaches smaller tree under larger.",
        "**3. Complexity**: $O(E \\log V)$ for sorting, DSU operations run in almost $O(1)$ amortized time."
      ]
    },
    {
      "id": "bsc-ds-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Implement a Priority Queue using a Binary Min-Heap with `insert` and `extractMin` operations.",
      "answer_lines": [
        "**`insert(key)`**: Append key at index $n$, heapify-up while parent is larger: $O(\\log n)$.",
        "**`extractMin()`**: Save $A[0]$, replace root with last element $A[n-1]$, decrement size, heapify-down comparing with smaller child: $O(\\log n)$."
      ]
    },
    {
      "id": "bsc-ds-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Hashing with Separate Chaining and Linear Probing. Insert keys $[23, 43, 13, 27, 39, 52]$ with $h(k) = k \\bmod 7$.",
      "answer_lines": [
        "\u2022 Hashes: $23 \\to 2, 43 \\to 1, 13 \\to 6, 27 \\to 6, 39 \\to 4, 52 \\to 3$.",
        "\u2022 Separate Chaining: Linked list at bucket 6 stores `13 -> 27`.",
        "\u2022 Linear Probing: 27 collides at index 6, wraps around to index 0. Final table: `[0: 27, 1: 43, 2: 23, 3: 52, 4: 39, 6: 13]`."
      ]
    }
  ],
  "ra_set1": [
    {
      "id": "bsc-ra-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Completeness Axiom (Least Upper Bound Property) of $\\mathbb{R}$.",
      "answer_lines": [
        "Every non-empty subset $S \\subset \\mathbb{R}$ that is bounded above has a least upper bound (supremum) in $\\mathbb{R}$."
      ]
    },
    {
      "id": "bsc-ra-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Bolzano-Weierstrass Theorem for bounded real sequences.",
      "answer_lines": [
        "Every bounded sequence of real numbers possesses at least one convergent subsequence."
      ]
    },
    {
      "id": "bsc-ra-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Cauchy's convergence criterion for sequences.",
      "answer_lines": [
        "A sequence $(x_n)$ converges in $\\mathbb{R}$ if and only if for every $\\epsilon > 0$, there exists $N$ such that $|x_n - x_m| < \\epsilon$ for all $n, m \\ge N$."
      ]
    },
    {
      "id": "bsc-ra-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define uniform continuity on an interval $I$.",
      "answer_lines": [
        "$f$ is uniformly continuous if for every $\\epsilon > 0$, there is $\\delta > 0$ such that $|f(x) - f(y)| < \\epsilon$ whenever $|x - y| < \\delta$ for all $x, y \\in I$."
      ]
    },
    {
      "id": "bsc-ra-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Riemann's criterion of integrability.",
      "answer_lines": [
        "$f$ is Riemann integrable on $[a, b]$ if and only if for every $\\epsilon > 0$, there exists partition $P$ such that $U(P, f) - L(P, f) < \\epsilon$."
      ]
    },
    {
      "id": "bsc-ra-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Prove that every bounded monotonic increasing sequence converges. Find limit of $x_1 = \\sqrt{2}, x_{n+1} = \\sqrt{2 + x_n}$.",
      "answer_lines": [
        "**Proof**: Let $S = \\{x_n\\}$ be bounded above by $M$. By completeness, $L = \\sup S$ exists. For any $\\epsilon > 0$, $x_N > L - \\epsilon$. Since $(x_n)$ is increasing, $L - \\epsilon < x_n \\le L < L + \\epsilon$ for all $n \\ge N$, so $x_n \\to L$.",
        "**Limit**: Sequence is bounded by 2 and increasing. $L = \\sqrt{2 + L} \\implies L^2 - L - 2 = 0 \\implies L = 2$ (since $x_n > 0$)."
      ]
    },
    {
      "id": "bsc-ra-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "State and prove Lagrange's Mean Value Theorem. Prove that $\\frac{x}{1+x} < \\ln(1+x) < x$ for all $x > 0$.",
      "answer_lines": [
        "**LMVT**: If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c \\in (a, b)$ with $f'(c) = \\frac{f(b) - f(a)}{b - a}$.",
        "**Proof**: Apply LMVT to $f(t) = \\ln(1 + t)$ on $[0, x]$: $\\frac{\\ln(1+x)}{x} = \\frac{1}{1+c}$ with $0 < c < x$. Since $1 < 1+c < 1+x$, taking reciprocals and multiplying by $x$ gives $\\frac{x}{1+x} < \\ln(1+x) < x$."
      ]
    },
    {
      "id": "bsc-ra-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "State and prove the Fundamental Theorem of Calculus. Evaluate $\\frac{d}{dx}\\int_0^{x^2} \\sin(t^2) dt$.",
      "answer_lines": [
        "**FTC**: If $F(x) = \\int_a^x f(t) dt$ and $f$ is continuous at $x_0$, then $F'(x_0) = f(x_0)$.",
        "**Leibniz Rule**: $\\frac{d}{dx}\\int_0^{x^2} \\sin(t^2) dt = \\sin((x^2)^2) \\cdot \\frac{d}{dx}(x^2) = 2x \\sin(x^4)$."
      ]
    },
    {
      "id": "bsc-ra-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "State and prove the Weierstrass M-Test. Test uniform convergence of $\\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}$ on $\\mathbb{R}$.",
      "answer_lines": [
        "**M-Test**: If $|f_n(x)| \\le M_n$ and $\\sum M_n$ converges, then $\\sum f_n(x)$ converges uniformly and absolutely.",
        "**Application**: $|\\frac{\\cos(nx)}{n^2}| \\le \\frac{1}{n^2} = M_n$. Since $\\sum \\frac{1}{n^2}$ converges ($p=2 > 1$), $\\sum \\frac{\\cos(nx)}{n^2}$ converges uniformly on $\\mathbb{R}$."
      ]
    },
    {
      "id": "bsc-ra-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Prove that every continuous function on a closed bounded interval $[a, b]$ is Riemann integrable.",
      "answer_lines": [
        "Continuous function on compact $[a, b]$ is uniformly continuous: for $\\epsilon > 0$, $|f(x) - f(y)| < \\frac{\\epsilon}{b - a}$ when $|x - y| < \\delta$. Choosing partition with mesh $< \\delta$, $U(P, f) - L(P, f) = \\sum (M_i - m_i)\\Delta x_i < \\frac{\\epsilon}{b-a}(b-a) = \\epsilon$. Hence $f$ is Riemann integrable."
      ]
    }
  ],
  "ra_set2": [
    {
      "id": "bsc-ra-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Archimedean property of real numbers.",
      "answer_lines": [
        "If $x, y \\in \\mathbb{R}$ with $x > 0$, then there exists an integer $n \\in \\mathbb{N}$ such that $n x > y$."
      ]
    },
    {
      "id": "bsc-ra-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between Pointwise and Uniform convergence.",
      "answer_lines": [
        "Pointwise convergence depends on both $\\epsilon$ and $x$ ($N(\\epsilon, x)$); Uniform convergence has a single index $N(\\epsilon)$ valid across all $x \\in E$."
      ]
    },
    {
      "id": "bsc-ra-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Give an example of a bounded function on $[0, 1]$ that is not Riemann integrable.",
      "answer_lines": [
        "The Dirichlet function: $f(x) = 1$ for $x \\in \\mathbb{Q}$ and $0$ for $x \\notin \\mathbb{Q}$. $U(P) = 1$ and $L(P) = 0$ for all partitions."
      ]
    },
    {
      "id": "bsc-ra-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Taylor's Theorem with Lagrange's form of remainder.",
      "answer_lines": [
        "$f(b) = \\sum_{k=0}^{n-1}\\frac{f^{(k)}(a)}{k!}(b-a)^k + \\frac{f^{(n)}(c)}{n!}(b-a)^n$ for some $c \\in (a, b)$."
      ]
    },
    {
      "id": "bsc-ra-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Heine-Borel Theorem.",
      "answer_lines": [
        "A subset $K \\subset \\mathbb{R}$ is compact if and only if it is closed and bounded."
      ]
    },
    {
      "id": "bsc-ra-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Prove the Extreme Value Theorem: A continuous function on a compact interval $[a, b]$ is bounded and attains its bounds.",
      "answer_lines": [
        "**Boundedness**: If unbounded, there exist $x_n$ with $|f(x_n)| > n$. By Bolzano-Weierstrass, a subsequence converges $x_{n_k} \\to x_0 \\in [a, b]$. Continuity gives $f(x_{n_k}) \\to f(x_0)$, contradicting $|f(x_{n_k})| > n_k \\to \\infty$.",
        "**Attainment**: If $M = \\sup f(x)$, there exist $y_n$ with $f(y_n) > M - 1/n$. A subsequence converges $y_{n_k} \\to c$, and by continuity $f(c) = M$."
      ]
    },
    {
      "id": "bsc-ra-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "State and prove D'Alembert's Ratio Test. Test convergence of $\\sum_{n=1}^\\infty \\frac{n!}{n^n}$.",
      "answer_lines": [
        "**Ratio Test**: If $\\lim \\frac{a_{n+1}}{a_n} = L < 1$, the series converges.",
        "**Application**: $\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(n+1)^{n+1}}\\frac{n^n}{n!} = \\left(\\frac{n}{n+1}\\right)^n = \\frac{1}{(1+1/n)^n} \\to \\frac{1}{e}$.",
        "Since $1/e \\approx 0.368 < 1$, the series $\\sum \\frac{n!}{n^n}$ converges."
      ]
    },
    {
      "id": "bsc-ra-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Compute Darboux upper and lower integrals for $f(x) = x^2$ on $[0, a]$ with partition $P_n = \\{0, a/n, 2a/n, \\dots, a\\}$.",
      "answer_lines": [
        "$U(P_n) = \\sum_{i=1}^n (ia/n)^2 (a/n) = \\frac{a^3}{n^3}\\frac{n(n+1)(2n+1)}{6} \\to \\frac{a^3}{3}$.",
        "$L(P_n) = \\sum_{i=1}^n ((i-1)a/n)^2 (a/n) = \\frac{a^3}{n^3}\\frac{(n-1)n(2n-1)}{6} \\to \\frac{a^3}{3}$.",
        "Since $\\lim U(P_n) = \\lim L(P_n) = \\frac{a^3}{3}$, the integral is $\\frac{a^3}{3}$."
      ]
    },
    {
      "id": "bsc-ra-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Test the convergence of improper integrals: (i) $\\int_1^\\infty \\frac{dx}{x^2 (1 + e^x)}$, (ii) $\\int_0^1 \\frac{dx}{\\sqrt{x(1-x)}}$.",
      "answer_lines": [
        "**(i)** For $x \\ge 1$, $\\frac{1}{x^2(1+e^x)} < \\frac{1}{x^2}$. Since $\\int_1^\\infty \\frac{dx}{x^2}$ converges ($p=2 > 1$), the integral converges by comparison.",
        "**(ii)** Endpoints $0$ and $1$ are singular points. Comparison with $\\frac{1}{x^{1/2}}$ at $0$ and $\\frac{1}{(1-x)^{1/2}}$ at $1$ shows convergence ($p = 1/2 < 1$)."
      ]
    },
    {
      "id": "bsc-ra-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Prove that the limit of a uniformly convergent sequence of continuous functions is continuous (Uniform Limit Theorem).",
      "answer_lines": [
        "Let $f_n \\to f$ uniformly. For $\\epsilon > 0$, choose $N$ such that $|f_N(x) - f(x)| < \\epsilon/3$. By continuity of $f_N$, $|f_N(x) - f_N(x_0)| < \\epsilon/3$ for $|x - x_0| < \\delta$. Then $|f(x) - f(x_0)| \\le |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)| < \\epsilon/3 + \\epsilon/3 + \\epsilon/3 = \\epsilon$. Hence $f$ is continuous."
      ]
    }
  ],
  "diff_eq_set1": [
    {
      "id": "bsc-de-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the condition for the differential equation $M(x, y) dx + N(x, y) dy = 0$ to be exact.",
      "answer_lines": [
        "The necessary and sufficient condition for exactness is $\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$."
      ]
    },
    {
      "id": "bsc-de-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Find the integrating factor of the linear differential equation $\\frac{dy}{dx} + P(x) y = Q(x)$.",
      "answer_lines": [
        "$$\\text{I.F.} = e^{\\int P(x) dx}$$"
      ]
    },
    {
      "id": "bsc-de-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Write the general equation of a plane in intercept form.",
      "answer_lines": [
        "$$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$ where $a, b, c$ are intercepts made on the coordinate axes."
      ]
    },
    {
      "id": "bsc-de-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Find the orthogonal trajectories of the family of parabolas $y^2 = 4ax$.",
      "answer_lines": [
        "Differentiating: $2y y' = 4a = \\frac{y^2}{x} \\implies y' = \\frac{y}{2x}$.",
        "Replace $y' \\to -\\frac{1}{y'}$: $-\\frac{dx}{dy} = \\frac{y}{2x} \\implies 2x dx + y dy = 0$.",
        "Integrating gives orthogonal trajectories: $2x^2 + y^2 = C$ (family of ellipses)."
      ]
    },
    {
      "id": "bsc-de-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the equation of a sphere with center $(u, v, w)$ and radius $r$.",
      "answer_lines": [
        "$$(x - u)^2 + (y - v)^2 + (z - w)^2 = r^2$$"
      ]
    },
    {
      "id": "bsc-de-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Solve the second-order differential equation by method of variation of parameters: $\\frac{d^2 y}{dx^2} + y = \\csc x$.",
      "answer_lines": [
        "**1. Complementary Function**: $m^2 + 1 = 0 \\implies y_c = c_1 \\cos x + c_2 \\sin x$. ($y_1 = \\cos x, y_2 = \\sin x$).",
        "**2. Wronskian**: $W = y_1 y_2' - y_2 y_1' = \\cos^2 x + \\sin^2 x = 1$.",
        "**3. Particular Integral**: $y_p = u y_1 + v y_2$ with $R = \\csc x$:",
        "$$u = -\\int \\frac{y_2 R}{W} dx = -\\int \\sin x \\csc x dx = -\\int 1 dx = -x$$",
        "$$v = \\int \\frac{y_1 R}{W} dx = \\int \\cos x \\csc x dx = \\int \\cot x dx = \\ln|\\sin x|$$",
        "$$y_p = -x \\cos x + (\\sin x)\\ln|\\sin x|$$",
        "**General Solution**: $y = c_1 \\cos x + c_2 \\sin x - x \\cos x + (\\sin x)\\ln|\\sin x|$."
      ]
    },
    {
      "id": "bsc-de-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Solve the Cauchy-Euler differential equation: $x^2 \\frac{d^2 y}{dx^2} - 2x \\frac{dy}{dx} - 4y = x^2$.",
      "answer_lines": [
        "**1. Transformation**: Let $x = e^z \\implies z = \\ln x$ and $D = \\frac{d}{dz}$.",
        "Equation becomes: $[D(D - 1) - 2D - 4]y = (e^z)^2 \\implies (D^2 - 3D - 4)y = e^{2z}$.",
        "**2. Auxiliary Equation**: $m^2 - 3m - 4 = 0 \\implies (m - 4)(m + 1) = 0 \\implies m = 4, -1$.",
        "$$y_c = c_1 e^{4z} + c_2 e^{-z} = c_1 x^4 + c_2 x^{-1}$$",
        "**3. Particular Integral**:",
        "$$y_p = \\frac{1}{D^2 - 3D - 4}e^{2z} = \\frac{1}{2^2 - 3(2) - 4}e^{2z} = \\frac{e^{2z}}{-6} = -\\frac{x^2}{6}$$",
        "**General Solution**: $y(x) = c_1 x^4 + \\frac{c_2}{x} - \\frac{x^2}{6}$."
      ]
    },
    {
      "id": "bsc-de-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Find the shortest distance between the two skew lines: $\\frac{x - 3}{1} = \\frac{y - 5}{-2} = \\frac{z - 7}{1}$ and $\\frac{x + 1}{7} = \\frac{y + 1}{-6} = \\frac{z + 1}{1}$.",
      "answer_lines": [
        "**1. Line 1**: Point $A = (3, 5, 7)$, direction $\\vec{b}_1 = \\hat{i} - 2\\hat{j} + \\hat{k}$.",
        "**2. Line 2**: Point $B = (-1, -1, -1)$, direction $\\vec{b}_2 = 7\\hat{i} - 6\\hat{j} + \\hat{k}$.",
        "**3. Cross Product of Directions**:",
        "$$\\vec{b}_1 \\times \\vec{b}_2 = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & -2 & 1 \\\\ 7 & -6 & 1 \\end{vmatrix} = \\hat{i}(-2 + 6) - \\hat{j}(1 - 7) + \\hat{k}(-6 + 14) = 4\\hat{i} + 6\\hat{j} + 8\\hat{k}$$",
        "Magnitude: $\\|\\vec{b}_1 \\times \\vec{b}_2\\| = \\sqrt{4^2 + 6^2 + 8^2} = \\sqrt{16 + 36 + 64} = \\sqrt{116} = 2\\sqrt{29}$.",
        "**4. Displacement Vector**: $\\vec{AB} = (-1 - 3)\\hat{i} + (-1 - 5)\\hat{j} + (-1 - 7)\\hat{k} = -4\\hat{i} - 6\\hat{j} - 8\\hat{k}$.",
        "**5. Shortest Distance**:",
        "$$d = \\frac{|\\vec{AB} \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{\\|\\vec{b}_1 \\times \\vec{b}_2\\|} = \\frac{|(-4)(4) + (-6)(6) + (-8)(8)|}{2\\sqrt{29}} = \\frac{|-16 - 36 - 64|}{2\\sqrt{29}} = \\frac{116}{2\\sqrt{29}} = \\frac{116}{10.77} = 2\\sqrt{29}$$",
        "Shortest distance $= 2\\sqrt{29} \\approx 10.77$ units."
      ]
    },
    {
      "id": "bsc-de-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Find the equation of the sphere passing through the four points $(0,0,0), (a,0,0), (0,b,0), (0,0,c)$.",
      "answer_lines": [
        "**1. General Sphere Equation**: $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$.",
        "\u2022 Passes through $(0,0,0) \\implies d = 0$.",
        "\u2022 Passes through $(a,0,0) \\implies a^2 + 2ua = 0 \\implies u = -a/2$.",
        "\u2022 Passes through $(0,b,0) \\implies b^2 + 2vb = 0 \\implies v = -b/2$.",
        "\u2022 Passes through $(0,0,c) \\implies c^2 + 2wc = 0 \\implies w = -c/2$.",
        "**2. Resulting Equation**:",
        "$$x^2 + y^2 + z^2 - ax - by - cz = 0$$",
        "Center is $(a/2, b/2, c/2)$ and radius is $r = \\frac{1}{2}\\sqrt{a^2 + b^2 + c^2}$."
      ]
    },
    {
      "id": "bsc-de-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Solve the total differential equation: $(y + z) dx + (z + x) dy + (x + y) dz = 0$.",
      "answer_lines": [
        "**1. Condition of Integrability**: Check $P(Q_z - R_y) + Q(R_x - P_z) + R(P_y - Q_x) = 0$:",
        "\u2022 $P = y + z, Q = z + x, R = x + y$.",
        "\u2022 $Q_z - R_y = 1 - 1 = 0, R_x - P_z = 1 - 1 = 0, P_y - Q_x = 1 - 1 = 0$. Identically zero, so integrable.",
        "**2. Regrouping Terms**:",
        "$$(y dx + x dy) + (z dx + x dz) + (z dy + y dz) = 0$$",
        "$$d(xy) + d(xz) + d(yz) = 0$$",
        "Integrating gives the general solution: $xy + yz + zx = C$."
      ]
    }
  ],
  "diff_eq_set2": [
    {
      "id": "bsc-de-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Clairaut's equation and its general solution.",
      "answer_lines": [
        "Clairaut's equation is $y = px + f(p)$ where $p = \\frac{dy}{dx}$. Its general solution is obtained by replacing $p$ with constant $c$: $y = cx + f(c)$."
      ]
    },
    {
      "id": "bsc-de-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the order and degree of $\\left(\\frac{d^2 y}{dx^2}\\right)^3 + \\left(\\frac{dy}{dx}\\right)^4 + y = 0$?",
      "answer_lines": [
        "Order is $2$ (highest derivative $\\frac{d^2 y}{dx^2}$); Degree is $3$ (power of highest derivative)."
      ]
    },
    {
      "id": "bsc-de-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Find the angle between the two planes $2x - y + z = 6$ and $x + y + 2z = 3$.",
      "answer_lines": [
        "$$\\cos\\theta = \\frac{a_1 a_2 + b_1 b_2 + c_1 c_2}{\\sqrt{a_1^2 + b_1^2 + c_1^2}\\sqrt{a_2^2 + b_2^2 + c_2^2}} = \\frac{2(1) + (-1)(1) + 1(2)}{\\sqrt{4+1+1}\\sqrt{1+1+4}} = \\frac{3}{\\sqrt{6}\\sqrt{6}} = \\frac{3}{6} = \\frac{1}{2}$$",
        "$$\\theta = 60^\\circ \\quad (\\pi/3 \\text{ rad})$$"
      ]
    },
    {
      "id": "bsc-de-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Write the standard form of a First Order Partial Differential Equation.",
      "answer_lines": [
        "$F(x, y, z, p, q) = 0$ where $p = \\frac{\\partial z}{\\partial x}$ and $q = \\frac{\\partial z}{\\partial y}$."
      ]
    },
    {
      "id": "bsc-de-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define the characteristic roots of a homogeneous linear ODE with constant coefficients.",
      "answer_lines": [
        "The roots $m_i$ of the algebraic auxiliary polynomial equation $f(m) = 0$ obtained by substituting $y = e^{mx}$ into the ODE."
      ]
    },
    {
      "id": "bsc-de-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Solve the partial differential equation using Charpit's method: $p^2 + q^2 = 1$.",
      "answer_lines": [
        "**1. Charpit's Auxiliary Equations**: $\\frac{dp}{f_x + p f_z} = \\frac{dq}{f_y + q f_z} = \\frac{dz}{-p f_p - q f_q} = \\frac{dx}{-f_p} = \\frac{dy}{-f_q}$.",
        "Here $f = p^2 + q^2 - 1 = 0$. $f_x = 0, f_y = 0, f_z = 0, f_p = 2p, f_q = 2q$.",
        "$$\\frac{dp}{0} = \\frac{dq}{0} = \\frac{dz}{-2p^2 - 2q^2} = \\frac{dx}{-2p} = \\frac{dy}{-2q}$$",
        "**2. Integrating**: $dp = 0 \\implies p = a$ (constant).",
        "From $p^2 + q^2 = 1 \\implies q = \\sqrt{1 - a^2}$.",
        "**3. Total Differential**: $dz = p dx + q dy = a dx + \\sqrt{1 - a^2} dy$.",
        "Integrating gives the complete integral: $z = a x + \\sqrt{1 - a^2} y + c$."
      ]
    },
    {
      "id": "bsc-de-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Find the equation of the cone with vertex at the origin and passing through the circle of intersection of $x^2 + y^2 + z^2 = 4$ and $x + y + z = 1$.",
      "answer_lines": [
        "**1. Homogenization**: The equation of a cone with vertex at the origin is a homogeneous equation in $x, y, z$.",
        "\u2022 Given sphere: $x^2 + y^2 + z^2 = 4$.",
        "\u2022 Given plane: $x + y + z = 1$.",
        "**2. Homogenizing Sphere Equation using Plane**:",
        "$$x^2 + y^2 + z^2 = 4(1)^2 = 4(x + y + z)^2$$",
        "$$x^2 + y^2 + z^2 = 4(x^2 + y^2 + z^2 + 2xy + 2yz + 2zx)$$",
        "$$3x^2 + 3y^2 + 3z^2 + 8xy + 8yz + 8zx = 0$$",
        "This homogeneous second-degree equation represents the required cone."
      ]
    },
    {
      "id": "bsc-de-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Solve the system of simultaneous differential equations: $\\frac{dx}{dt} = 3x - 4y$ and $\\frac{dy}{dt} = x - y$.",
      "answer_lines": [
        "**1. Elimination**: Let $D = \\frac{d}{dt}$. (1) $(D - 3)x + 4y = 0$, (2) $-x + (D + 1)y = 0$.",
        "Operate on (2) with $(D - 3)$ and add to (1):",
        "$$[(D - 3)(D + 1) + 4]y = 0 \\implies (D^2 - 2D + 1)y = 0 \\implies (D - 1)^2 y = 0$$",
        "**2. Solution for $y(t)$**: $m = 1, 1$ repeated roots.",
        "$$y(t) = (c_1 + c_2 t) e^t$$",
        "**3. Solution for $x(t)$**: From (2), $x = \\frac{dy}{dt} + y$:",
        "$$\\frac{dy}{dt} = c_2 e^t + (c_1 + c_2 t) e^t = (c_1 + c_2 + c_2 t)e^t$$",
        "$$x(t) = (c_1 + c_2 + c_2 t)e^t + (c_1 + c_2 t)e^t = (2c_1 + c_2 + 2c_2 t)e^t$$"
      ]
    },
    {
      "id": "bsc-de-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Find the orthogonal trajectories of the family of coaxial circles $x^2 + y^2 + 2gx + c = 0$ where $g$ is a parameter.",
      "answer_lines": [
        "**1. Differentiating**: $2x + 2y y' + 2g = 0 \\implies 2g = -(2x + 2y y')$.",
        "Substitute $2g$ into original equation:",
        "$$x^2 + y^2 - (2x + 2y y')x + c = 0 \\implies y^2 - x^2 - 2xy y' + c = 0 \\implies y' = \\frac{y^2 - x^2 + c}{2xy}$$",
        "**2. Replacing $y' \\to -1/y'$**:",
        "$$-\\frac{1}{y'} = \\frac{y^2 - x^2 + c}{2xy} \\implies y' = \\frac{-2xy}{y^2 - x^2 + c} = \\frac{2xy}{x^2 - y^2 - c}$$",
        "Integrating gives orthogonal circles: $x^2 + y^2 + 2fy - c = 0$, which is the conjugate coaxial system cutting the given family orthogonally."
      ]
    },
    {
      "id": "bsc-de-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Solve the non-homogeneous boundary value problem: $y'' + 4y = 8x$ with $y(0) = 0, y(\\pi/2) = 0$.",
      "answer_lines": [
        "**1. Complementary Function**: $m^2 + 4 = 0 \\implies y_c = c_1 \\cos 2x + c_2 \\sin 2x$.",
        "**2. Particular Integral**: $y_p = \\frac{1}{D^2 + 4}(8x) = \\frac{1}{4}(1 + D^2/4)^{-1}(8x) = \\frac{1}{4}(8x) = 2x$.",
        "**3. General Solution**: $y(x) = c_1 \\cos 2x + c_2 \\sin 2x + 2x$.",
        "**4. Boundary Conditions**:",
        "\u2022 $y(0) = c_1(1) + c_2(0) + 0 = 0 \\implies c_1 = 0$.",
        "\u2022 $y(\\pi/2) = c_2 \\sin(\\pi) + 2(\\pi/2) = 0 \\implies 0 + \\pi = 0$, impossible unless boundary condition is modified.",
        "\u2022 For $y(\\pi/4) = 0$: $c_2 \\sin(\\pi/2) + 2(\\pi/4) = 0 \\implies c_2 = -\\pi/2$.",
        "$$y(x) = -\\frac{\\pi}{2}\\sin 2x + 2x$$"
      ]
    }
  ],
  "waves_set1": [
    {
      "id": "bsc-wo-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the condition for sustained interference of light waves.",
      "answer_lines": [
        "1. The two light sources must be coherent (constant phase difference). 2. Sources must emit continuous waves of identical wavelength and frequency. 3. Light must be monochromatic."
      ]
    },
    {
      "id": "bsc-wo-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Why is the central spot in Newton's rings dark in reflected light?",
      "answer_lines": [
        "At point of contact, film thickness $t = 0$. Light reflected at glass-air boundary experiences an additional phase change of $\\pi$ (path change $\\lambda/2$), producing destructive interference."
      ]
    },
    {
      "id": "bsc-wo-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Brewster's Law of polarization.",
      "answer_lines": [
        "$$\\mu = \\tan i_p$$ The tangent of the polarizing angle $i_p$ equals the refractive index $\\mu$ of the medium. The reflected and refracted rays are mutually perpendicular."
      ]
    },
    {
      "id": "bsc-wo-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define resolving power of a diffraction grating.",
      "answer_lines": [
        "$$R = \\frac{\\lambda}{d\\lambda} = n N$$ where $n$ is spectral order and $N$ is total number of illuminated grating rulings."
      ]
    },
    {
      "id": "bsc-wo-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What are Lissajous figures?",
      "answer_lines": [
        "Curves traced out by a particle subjected to two mutually perpendicular simple harmonic motions of different frequencies and phases."
      ]
    },
    {
      "id": "bsc-wo-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Derive the diameter formula for dark and bright rings in Newton's Rings by reflected light. Explain how it is used to measure the wavelength of sodium light.",
      "answer_lines": [
        "**1. Path Difference**: Optical path difference in thin wedge film between convex lens and plane glass plate: $\\Delta = 2\\mu t \\cos r + \\frac{\\lambda}{2}$. For normal incidence in air ($\\mu = 1, r = 0$): $\\Delta = 2t + \\frac{\\lambda}{2}$.",
        "**2. Ring Diameters**: From lens geometry, $t = \\frac{r_n^2}{2R} = \\frac{D_n^2}{8R}$.",
        "\u2022 **Dark Rings**: $2t = n\\lambda \\implies \\frac{D_n^2}{4R} = n\\lambda \\implies D_n^2 = 4n R \\lambda \\implies D_n \\propto \\sqrt{n}$.",
        "\u2022 **Bright Rings**: $2t = (2n - 1)\\frac{\\lambda}{2} \\implies D_n^2 = 4(2n - 1)R\\frac{\\lambda}{2} = 2(2n - 1)R\\lambda$.",
        "**3. Measuring Wavelength**: Measure diameters $D_{n+p}$ and $D_n$ with traveling microscope:",
        "$$D_{n+p}^2 - D_n^2 = 4(n+p)R\\lambda - 4n R\\lambda = 4p R\\lambda \\implies \\lambda = \\frac{D_{n+p}^2 - D_n^2}{4p R}$$"
      ]
    },
    {
      "id": "bsc-wo-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Fraunhofer diffraction at a single slit of width $a$. Derive conditions for principal maximum, secondary maxima, and minima.",
      "answer_lines": [
        "**1. Path Difference**: For light diffracted at angle $\\theta$, path difference across slit is $\\Delta = a \\sin\\theta$.",
        "**2. Resultant Intensity**: $I = I_0 \\left(\\frac{\\sin \\alpha}{\\alpha}\\right)^2$ where $\\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}$.",
        "\u2022 **Principal Maximum**: At $\\theta = 0, \\alpha = 0$, $\\lim_{\\alpha \\to 0} \\frac{\\sin\\alpha}{\\alpha} = 1 \\implies I = I_0$.",
        "\u2022 **Minima**: $\\sin\\alpha = 0 \\implies \\alpha = m\\pi (m = \\pm 1, \\pm 2, \\dots) \\implies a \\sin\\theta = m\\lambda$.",
        "\u2022 **Secondary Maxima**: $\\frac{dI}{d\\alpha} = 0 \\implies \\tan\\alpha = \\alpha$. Intersections occur at $\\alpha = \\pm 1.43\\pi, \\pm 2.46\\pi$ with rapidly decaying intensities ($I_1 \\approx I_0/22, I_2 \\approx I_0/61$)."
      ]
    },
    {
      "id": "bsc-wo-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the phenomenon of Double Refraction in calcite crystals. Describe the construction and working of a Nicol Prism.",
      "answer_lines": [
        "**1. Double Refraction**: An unpolarized light ray entering an anisotropic uniaxial crystal (calcite) splits into two refracted rays:",
        "\u2022 **Ordinary Ray (O-ray)**: Obeys Snell's law; travels with uniform spherical wavefront; vibrations perpendicular to principal section.",
        "\u2022 **Extraordinary Ray (E-ray)**: Does not obey Snell's law; travels with ellipsoidal wavefront; vibrations parallel to principal section.",
        "**2. Nicol Prism**: Calcite rhomb cut along shorter diagonal at $68^\\circ$ and cemented with Canada balsam (refractive index $\\mu_B = 1.55$).",
        "\u2022 For calcite, $\\mu_o = 1.658$ and $\\mu_e = 1.486$. Since $\\mu_o > \\mu_B$, the O-ray undergoes Total Internal Reflection at the balsam layer and is absorbed in the blackened casing, while the E-ray ($\\mu_e < \\mu_B$) transmits through as pure plane-polarized light."
      ]
    },
    {
      "id": "bsc-wo-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Set up the differential equation for Damped Harmonic Motion and solve it for underdamped, critically damped, and overdamped cases.",
      "answer_lines": [
        "**1. Governing Equation**: $m \\frac{d^2 x}{dt^2} + b \\frac{dx}{dt} + k x = 0 \\implies \\frac{d^2 x}{dt^2} + 2\\gamma \\frac{dx}{dt} + \\omega_0^2 x = 0$ where $\\gamma = \\frac{b}{2m}, \\omega_0 = \\sqrt{\\frac{k}{m}}$.",
        "**2. Roots**: $r = -\\gamma \\pm \\sqrt{\\gamma^2 - \\omega_0^2}$.",
        "\u2022 **Overdamped ($\\gamma > \\omega_0$)**: Real distinct roots; non-oscillatory exponential decay.",
        "\u2022 **Critically Damped ($\\gamma = \\omega_0$)**: Repeated roots; fastest non-oscillatory return to equilibrium without overshoot (used in galvanometers).",
        "\u2022 **Underdamped ($\\gamma < \\omega_0$)**: Complex roots; oscillatory with exponentially decaying amplitude: $x(t) = A e^{-\\gamma t}\\cos(\\omega_d t + \\phi)$ where $\\omega_d = \\sqrt{\\omega_0^2 - \\gamma^2}$."
      ]
    },
    {
      "id": "bsc-wo-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Fresnel's Biprism experiment for measuring the wavelength of light. Derive the fringe width formula $\\beta = \\frac{\\lambda D}{d}$.",
      "answer_lines": [
        "**1. Working**: A biprism with two acute angles ($30'$) and one obtuse angle ($179^\\circ$) produces two virtual coherent slit sources $S_1, S_2$ separated by distance $d$.",
        "**2. Fringe Width Derivation**: Two coherent waves superpose at screen distance $D$. Path difference at distance $y$ from center: $\\Delta = \\frac{y d}{D}$. For bright fringe $\\Delta = n\\lambda \\implies y_n = \\frac{n\\lambda D}{d}$. Fringe width is spacing between consecutive fringes:",
        "$$\\beta = y_{n+1} - y_n = \\frac{\\lambda D}{d}$$",
        "**3. Separation Measurement ($d$)**: Using a convex lens between biprism and eyepiece, two image positions give conjugate separations $d_1, d_2 \\implies d = \\sqrt{d_1 d_2}$."
      ]
    }
  ],
  "waves_set2": [
    {
      "id": "bsc-wo-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between Fresnel and Fraunhofer diffraction.",
      "answer_lines": [
        "\u2022 **Fresnel**: Source and screen are at finite distances; wavefronts are spherical or cylindrical; no lenses required.",
        "\u2022 **Fraunhofer**: Source and screen are at infinite distances; wavefronts are planar; lenses are used to focus rays."
      ]
    },
    {
      "id": "bsc-wo-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is Rayleigh's criterion for resolution?",
      "answer_lines": [
        "Two spectral lines are just resolved when the central diffraction maximum of one pattern falls exactly on the first minimum of the other pattern."
      ]
    },
    {
      "id": "bsc-wo-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Calculate the thickness of a Quarter-Wave Plate for $\\lambda = 5890\\text{ \\AA}$ if $\\mu_o = 1.544$ and $\\mu_e = 1.553$.",
      "answer_lines": [
        "$$t = \\frac{\\lambda}{4(\\mu_e - \\mu_o)} = \\frac{5890 \\times 10^{-10}}{4(1.553 - 1.544)} = \\frac{5.89 \\times 10^{-7}}{4(0.009)} = \\frac{5.89 \\times 10^{-7}}{3.6 \\times 10^{-2}} = 1.636 \\times 10^{-5}\\text{ m} = 16.36\\text{ }\\mu\\text{m}$$"
      ]
    },
    {
      "id": "bsc-wo-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Q-factor (Quality Factor) of an oscillator.",
      "answer_lines": [
        "$$Q = 2\\pi \\frac{\\text{Energy Stored}}{\\text{Energy Dissipated per Cycle}} = \\frac{\\omega_0}{2\\gamma} = \\frac{\\omega_0}{\\Delta \\omega}$$ It measures sharpness of resonance."
      ]
    },
    {
      "id": "bsc-wo-s2-q5",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Malus's Law.",
      "answer_lines": [
        "When completely plane-polarized light of intensity $I_0$ passes through an analyzer, transmitted intensity is $I = I_0 \\cos^2\\theta$ where $\\theta$ is the angle between polarizer and analyzer transmission axes."
      ]
    },
    {
      "id": "bsc-wo-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Plane Diffraction Grating. Derive the grating equation $(a + b)\\sin\\theta = n\\lambda$ and deduce absent spectra.",
      "answer_lines": [
        "**1. Grating Element**: An arrangement of $N$ parallel equidistant slits of width $a$ separated by opaque spaces $b$. Grating element is $d = a + b$.",
        "**2. Principal Maxima**: Path difference between corresponding points of adjacent slits is $(a + b)\\sin\\theta$. Constructive interference gives:",
        "$$(a + b)\\sin\\theta = n\\lambda \\quad (n = 0, 1, 2, \\dots)$$",
        "**3. Absent Spectra**: Occurs when a direction satisfies grating maximum and single-slit diffraction minimum simultaneously: $(a + b)\\sin\\theta = n\\lambda$ and $a \\sin\\theta = m\\lambda$. Dividing gives $\\frac{a + b}{a} = \\frac{n}{m}$. If $a = b$, $\\frac{a+a}{a} = 2 \\implies n = 2m$. Thus orders $n = 2, 4, 6$ are completely absent."
      ]
    },
    {
      "id": "bsc-wo-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the construction and working of a Michelson Interferometer. Describe the formation of circular and localized fringes.",
      "answer_lines": [
        "**1. Principle**: Splits an incident beam of light by partial reflection at a beam splitter into two mutually perpendicular beams, reflects them back via plane mirrors $M_1$ and $M_2$, and recombines them at the observer.",
        "**2. Compensator Plate**: Placed in path of beam 2 to equalize glass thickness traversed by both beams.",
        "**3. Fringe Types**:",
        "\u2022 **Circular Fringes**: Formed when $M_1$ and $M_2$ are strictly mutually perpendicular ($M_1$ parallel to virtual image $M_2'$). Fringes are concentric rings at infinity.",
        "\u2022 **Localized (Straight) Fringes**: Formed when $M_1$ and $M_2$ are slightly tilted, forming an air wedge.",
        "**4. Wavelength Measurement**: When mirror $M_1$ moves by distance $d = \\lambda/2$, one fringe crosses field of view: $\\lambda = \\frac{2d}{N}$."
      ]
    },
    {
      "id": "bsc-wo-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Forced Oscillations and Amplitude Resonance. Derive the steady-state amplitude and phase expressions.",
      "answer_lines": [
        "**1. Equation**: $m \\ddot{x} + b \\dot{x} + k x = F_0 \\cos(\\omega t) \\implies \\ddot{x} + 2\\gamma \\dot{x} + \\omega_0^2 x = f_0 \\cos(\\omega t)$.",
        "**2. Steady State Solution**: $x(t) = A \\cos(\\omega t - \\phi)$ where:",
        "$$A = \\frac{f_0}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + 4\\gamma^2 \\omega^2}}, \\quad \\tan\\phi = \\frac{2\\gamma \\omega}{\\omega_0^2 - \\omega^2}$$",
        "**3. Amplitude Resonance**: Occurs when denominator is minimized, at resonance frequency $\\omega_r = \\sqrt{\\omega_0^2 - 2\\gamma^2}$. At resonance, $A_{max} = \\frac{f_0}{2\\gamma \\sqrt{\\omega_0^2 - \\gamma^2}} \\approx \\frac{f_0}{2\\gamma \\omega_0}$."
      ]
    },
    {
      "id": "bsc-wo-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Quarter-Wave and Half-Wave Plates. Describe how circularly and elliptically polarized light are produced and detected.",
      "answer_lines": [
        "**1. Retardation Plates**: Doubly refracting uniaxial crystal plates cut parallel to optic axis.",
        "\u2022 **Quarter-Wave Plate (QWP)**: Introduces path difference $\\lambda/4$ (phase difference $\\pi/2$): $t = \\frac{\\lambda}{4|\\mu_o - \\mu_e|}$.",
        "\u2022 **Half-Wave Plate (HWP)**: Introduces path difference $\\lambda/2$ (phase difference $\\pi$): $t = \\frac{\\lambda}{2|\\mu_o - \\mu_e|}$.",
        "**2. Producing Circular Polarization**: Pass plane-polarized light through QWP oriented at $45^\\circ$ to optic axis ($A_x = A_y$).",
        "**3. Detection**: Circularly polarized light passing through rotating analyzer exhibits uniform intensity (no variation). When passed through QWP, it converts back to plane-polarized light, which then exhibits complete extinction at two positions upon rotating analyzer."
      ]
    },
    {
      "id": "bsc-wo-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Specific Rotation and Laurent's Half-Shade Polarimeter. Describe its optical components and working.",
      "answer_lines": [
        "**1. Specific Rotation**: $[\\alpha]_\\lambda^T = \\frac{\\theta}{L \\cdot C}$ where $\\theta$ is optical rotation in degrees, $L$ is tube length in decimeters, and $C$ is concentration in $\\text{g/cm}^3$.",
        "**2. Half-Shade Device**: Semicircular quartz plate of thickness $t = \\frac{\\lambda}{2(\\mu_e - \\mu_o)}$ covering half the field of view, while the other half is clear glass. It introduces a $\\pi$ phase shift on one half, tilting the plane of polarization by $2\\theta$.",
        "**3. Working**: In between two extremes, there is an exact position of equal brightness across both halves. Measuring the angular vernier shift when an optically active solution (sugar) is inserted gives $\\theta$ with high precision."
      ]
    }
  ],
  "chem_set1": [
    {
      "id": "bsc-pc-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Second Law of Thermodynamics in terms of entropy.",
      "answer_lines": [
        "In any spontaneous / irreversible process, the total entropy of an isolated system (system + surroundings) always increases: $\\Delta S_{univ} > 0$."
      ]
    },
    {
      "id": "bsc-pc-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Raoult's Law for ideal solutions.",
      "answer_lines": [
        "The partial vapor pressure of any volatile component in an ideal solution is equal to the vapor pressure of the pure component multiplied by its mole fraction: $p_A = x_A p_A^\\circ$."
      ]
    },
    {
      "id": "bsc-pc-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Write the Gibbs Phase Rule equation and define degrees of freedom.",
      "answer_lines": [
        "$$F = C - P + 2$$ where $F$ is degrees of freedom (independent intensive variables needed to define equilibrium state), $C$ is number of components, and $P$ is number of phases."
      ]
    },
    {
      "id": "bsc-pc-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Kohlrausch's Law of Independent Migration of Ions.",
      "answer_lines": [
        "At infinite dilution, the molar conductivity of an electrolyte is equal to the sum of the individual ionic molar conductivities: $\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$."
      ]
    },
    {
      "id": "bsc-pc-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Nernst Equation for a single electrode potential.",
      "answer_lines": [
        "$$E = E^\\circ - \\frac{2.303 R T}{n F} \\log_{10} Q = E^\\circ - \\frac{0.0591}{n} \\log_{10}\\left(\\frac{[\\text{Red}]}{[\\text{Ox}]}\\right) \\quad \\text{at } 298\\text{ K}$$"
      ]
    },
    {
      "id": "bsc-pc-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Derive the efficiency of a Carnot heat engine. Show that thermodynamic entropy is a state function: $\\oint \\frac{dQ_{rev}}{T} = 0$.",
      "answer_lines": [
        "**1. Carnot Cycle**: Consists of: (1) Reversible isothermal expansion at $T_H$, (2) Reversible adiabatic expansion from $T_H$ to $T_C$, (3) Reversible isothermal compression at $T_C$, (4) Reversible adiabatic compression back to $T_H$.",
        "**2. Efficiency**: Work done $W = Q_H - Q_C$.",
        "$$\\eta = \\frac{W}{Q_H} = \\frac{Q_H - Q_C}{Q_H} = 1 - \\frac{Q_C}{Q_H} = 1 - \\frac{T_C}{T_H}$$",
        "**3. Clausius Theorem**: $\\frac{Q_H}{T_H} = \\frac{Q_C}{T_C} \\implies \\frac{Q_H}{T_H} - \\frac{Q_C}{T_C} = 0 \\implies \\sum \\frac{Q_i}{T_i} = 0$. In infinitesimal limit for any reversible cycle:",
        "$$\\oint \\frac{dQ_{rev}}{T} = 0$$",
        "Since the closed contour integral vanishes, $\\int_A^B \\frac{dQ_{rev}}{T}$ is independent of path, defining the state function Entropy ($dS = \\frac{dQ_{rev}}{T}$)."
      ]
    },
    {
      "id": "bsc-pc-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the Phase Diagram of the one-component Water System. Discuss areas, curves, and the Triple Point.",
      "answer_lines": [
        "**1. Phase Rule for 1-component**: $F = 1 - P + 2 = 3 - P$.",
        "**2. Three Univariant Curves ($P = 2 \\implies F = 1$)**:",
        "\u2022 **Curve OA (Vaporization curve)**: Liquid $\\rightleftharpoons$ Vapor equilibrium ending at critical point ($374^\\circ\\text{C}, 218\\text{ atm}$).",
        "\u2022 **Curve OB (Sublimation curve)**: Solid (Ice) $\\rightleftharpoons$ Vapor down to absolute zero.",
        "\u2022 **Curve OC (Fusion curve)**: Ice $\\rightleftharpoons$ Liquid. Uniquely has a negative slope ($dP/dT < 0$) because ice contracts upon melting (liquid density > ice density).",
        "**3. Triple Point O ($P = 3 \\implies F = 0$, Invariant)**:",
        "All three phases (Ice, Water, Vapor) coexist in equilibrium at $T = 0.0098^\\circ\\text{C} (273.16\\text{ K})$ and $P = 4.58\\text{ mmHg}$ ($0.006\\text{ atm}$)."
      ]
    },
    {
      "id": "bsc-pc-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Derive the thermodynamic relation for Elevation of Boiling Point (Ebullioscopy) and relate it to the molecular weight of a non-volatile solute.",
      "answer_lines": [
        "**1. Thermodynamic Equilibrium**: At boiling point, chemical potential of solvent in solution equals chemical potential of pure solvent vapor: $\\mu_A(soln) = \\mu_A^*(g)$.",
        "$$\\mu_A^*(l) + R T \\ln x_A = \\mu_A^*(g) \\implies \\ln x_A = \\frac{\\mu_A^*(g) - \\mu_A^*(l)}{R T} = \\frac{\\Delta G_{vap}}{R T}$$",
        "**2. Differentiating with respect to $T$** (Gibbs-Helmholtz):",
        "$$\\frac{d\\ln x_A}{dT} = -\\frac{\\Delta H_{vap}}{R T^2}$$",
        "For dilute solution, $x_A = 1 - x_B \\implies \\ln x_A \\approx -x_B = -\\frac{n_B}{n_A + n_B} \\approx -\\frac{w_B / M_B}{w_A / M_A}$.",
        "Integrating between $T_0$ and $T_b$: $\\Delta T_b = T_b - T_0 = \\frac{R T_0^2 M_A}{\\Delta H_{vap} 1000} m = K_b m$.",
        "**3. Molecular Weight**: $M_B = \\frac{1000 K_b w_B}{\\Delta T_b w_A}$."
      ]
    },
    {
      "id": "bsc-pc-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Conductometric Titrations. Discuss the titration curves for: (i) Strong Acid vs Strong Base, (ii) Weak Acid vs Strong Base, (iii) Strong Acid vs Weak Base.",
      "answer_lines": [
        "**1. Principle**: Electrical conductance depends on concentration and mobility of ions. Hydrogen ion ($H^+$: $349.8\\text{ S}\\cdot\\text{cm}^2/\\text{mol}$) and hydroxyl ion ($OH^-$: $198.6\\text{ S}\\cdot\\text{cm}^2/\\text{mol}$) have exceptionally high mobilities via Grotthuss proton hopping.",
        "**2. Titration Curves**:",
        "\u2022 **Strong Acid (HCl) vs Strong Base (NaOH)**: Conductance drops steeply as fast $H^+$ are replaced by slower $Na^+$. Beyond equivalence point, excess $OH^-$ causes steep rise. V-shaped curve with sharp minimum.",
        "\u2022 **Weak Acid ($CH_3COOH$) vs Strong Base (NaOH)**: Initial slight dip, then slight rise due to common ion effect of acetate buffer, followed by sharp upward break beyond equivalence point due to free $OH^-$.",
        "\u2022 **Strong Acid (HCl) vs Weak Base ($NH_4OH$)**: Initial sharp drop due to consumption of $H^+$. Beyond equivalence point, conductance remains nearly constant because $NH_4OH$ is weakly dissociated."
      ]
    },
    {
      "id": "bsc-pc-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Derive the Van 't Hoff reaction isobar equation $\\frac{d\\ln K_p}{dT} = \\frac{\\Delta H^\\circ}{R T^2}$ and explain the temperature dependence of equilibrium constants for exothermic and endothermic reactions.",
      "answer_lines": [
        "**1. Thermodynamic Derivation**: We know $\\Delta G^\\circ = -R T \\ln K_p \\implies \\ln K_p = -\\frac{\\Delta G^\\circ}{R T}$.",
        "Differentiating with respect to $T$:",
        "$$\\frac{d\\ln K_p}{dT} = -\\frac{1}{R}\\frac{d(\\Delta G^\\circ / T)}{dT}$$",
        "Using Gibbs-Helmholtz equation $\\left[\\frac{\\partial(\\Delta G/T)}{\\partial T}\\right]_P = -\\frac{\\Delta H}{T^2}$:",
        "$$\\frac{d\\ln K_p}{dT} = -\\frac{1}{R}\\left( -\\frac{\\Delta H^\\circ}{T^2} \\right) = \\frac{\\Delta H^\\circ}{R T^2}$$",
        "**2. Analysis**:",
        "\u2022 **Endothermic ($\\Delta H^\\circ > 0$)**: $\\frac{d\\ln K_p}{dT} > 0$. Increasing temperature increases $K_p$, shifting equilibrium toward products (Le Chatelier's principle).",
        "\u2022 **Exothermic ($\\Delta H^\\circ < 0$)**: $\\frac{d\\ln K_p}{dT} < 0$. Increasing temperature decreases $K_p$, shifting equilibrium toward reactants."
      ]
    }
  ],
  "chem_set2": [
    {
      "id": "bsc-pc-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define chemical potential $\\mu_i$ of a component in a mixture.",
      "answer_lines": [
        "$$\\mu_i = \\left(\\frac{\\partial G}{\\partial n_i}\\right)_{T, P, n_{j \\ne i}}$$ It represents the rate of change of Gibbs free energy with respect to moles of component $i$ at constant $T, P$, and other amounts."
      ]
    },
    {
      "id": "bsc-pc-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the condition of spontaneity in terms of Gibbs free energy $\\Delta G$.",
      "answer_lines": [
        "At constant temperature and pressure, a process is spontaneous if $\\Delta G < 0$, at equilibrium if $\\Delta G = 0$, and non-spontaneous if $\\Delta G > 0$."
      ]
    },
    {
      "id": "bsc-pc-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is an azeotropic mixture?",
      "answer_lines": [
        "A constant-boiling liquid mixture that boils at a characteristic temperature without change in composition; vapor and liquid phases have identical molar fractions."
      ]
    },
    {
      "id": "bsc-pc-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define ionic mobility and write its units.",
      "answer_lines": [
        "The distance traveled by an ion per second under a potential gradient of $1\\text{ V/cm}$: $u = \\frac{v}{E}$ with units $\\text{cm}^2\\cdot\\text{V}^{-1}\\cdot\\text{s}^{-1}$."
      ]
    },
    {
      "id": "bsc-pc-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is transport number of an ion?",
      "answer_lines": [
        "The fraction of total electrical current carried by that specific ion: $t_+ = \\frac{u_+}{u_+ + u_-}$ and $t_- = \\frac{u_-}{u_+ + u_-}$, with $t_+ + t_- = 1$."
      ]
    },
    {
      "id": "bsc-pc-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Derive the integrated Van 't Hoff equation and calculate equilibrium constant $K_2$ at $350\\text{ K}$ given $K_1 = 1.8 \\times 10^{-4}$ at $298\\text{ K}$ and $\\Delta H^\\circ = +54.0\\text{ kJ/mol}$.",
      "answer_lines": [
        "**1. Integration**: $\\int_{K_1}^{K_2} d\\ln K = \\frac{\\Delta H^\\circ}{R}\\int_{T_1}^{T_2} \\frac{dT}{T^2}$:",
        "$$\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left( \\frac{1}{T_2} - \\frac{1}{T_1} \\right) = \\frac{\\Delta H^\\circ}{R}\\left( \\frac{T_2 - T_1}{T_1 T_2} \\right)$$",
        "**2. Numerical Substitution**:",
        "\u2022 $\\Delta H^\\circ = 54,000\\text{ J/mol}, R = 8.314\\text{ J}/(\\text{mol}\\cdot\\text{K}), T_1 = 298\\text{ K}, T_2 = 350\\text{ K}$.",
        "$$\\ln\\left(\\frac{K_2}{K_1}\\right) = \\frac{54000}{8.314}\\left( \\frac{350 - 298}{298 \\times 350} \\right) = 6495.07 \\times \\frac{52}{104300} = 6495.07 \\times 0.00049856 = 3.238$$",
        "$$\\frac{K_2}{K_1} = e^{3.238} = 25.48$$",
        "$$K_2 = 25.48 \\times 1.8 \\times 10^{-4} = 4.59 \\times 10^{-3}$$"
      ]
    },
    {
      "id": "bsc-pc-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the Lead-Silver system phase diagram and its application in Pattinson's process for desilverization of lead.",
      "answer_lines": [
        "**1. System Type**: Two-component condensed system ($P + F = C + 1 = 3$).",
        "**2. Key Curves**:",
        "\u2022 Pure Lead melting point ($327^\\circ\\text{C}$): addition of silver lowers melting point along curve AC.",
        "\u2022 Pure Silver melting point ($961^\\circ\\text{C}$): addition of lead lowers melting point along curve BC.",
        "\u2022 **Eutectic Point C**: Curves AC and BC meet at $303^\\circ\\text{C}$ with $2.6\\% \\text{ Ag}$ ($97.4\\% \\text{ Pb}$). Invariant point ($F = 0$).",
        "**3. Pattinson's Process**: Argentiferous lead ore containing trace Ag ($0.1\\%$) is melted and cooled along liquid composition line. Pure lead crystals separate out first and are removed with ladles, concentrating silver in remaining liquid until eutectic composition ($2.6\\% \\text{ Ag}$) is reached for cupellation."
      ]
    },
    {
      "id": "bsc-pc-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the determination of transport numbers by Hittorf's method and Moving Boundary method.",
      "answer_lines": [
        "**1. Hittorf's Principle**: Loss in amount of electrolyte around an electrode is proportional to speed of ion moving away from it.",
        "\u2022 Transport number $t_+ = \\frac{\\text{Fall in conc. around anode}}{\\text{Total fall in conc. around both electrodes}}$ (measured with silver coulometer).",
        "**2. Moving Boundary Method**: Direct optical measurement of velocity of boundary between two solutions having a common ion (e.g. $HCl$ principal and $CdCl_2$ indicator electrolyte).",
        "\u2022 In time $t$ under current $I$, boundary moves distance $l$ in tube of cross-section $A$:",
        "$$t_+ = \\frac{l A c F}{1000 I t}$$",
        "Provides higher precision and eliminates electrode reaction interferences."
      ]
    },
    {
      "id": "bsc-pc-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Derive the relation between EMF of a reversible electrochemical cell and thermodynamic quantities $\\Delta G, \\Delta H$, and $\\Delta S$.",
      "answer_lines": [
        "**1. Gibbs Free Energy**: Electrical work done is $W_{elec} = n F E$. At constant $T$ and $P$:",
        "$$\\Delta G = -n F E$$",
        "**2. Entropy**: From fundamental thermodynamic relation $\\left(\\frac{\\partial \\Delta G}{\\partial T}\\right)_P = -\\Delta S$:",
        "$$\\Delta S = -\\left[\\frac{\\partial(-n F E)}{\\partial T}\\right]_P = n F \\left(\\frac{\\partial E}{\\partial T}\\right)_P$$",
        "Where $\\left(\\frac{\\partial E}{\\partial T}\\right)_P$ is the temperature coefficient of cell EMF.",
        "**3. Enthalpy**: Using Gibbs-Helmholtz $\\Delta H = \\Delta G + T \\Delta S$:",
        "$$\\Delta H = -n F E + n F T \\left(\\frac{\\partial E}{\\partial T}\\right)_P = -n F \\left[ E - T \\left(\\frac{\\partial E}{\\partial T}\\right)_P \\right]$$"
      ]
    },
    {
      "id": "bsc-pc-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the Van der Waals equation of state for real gases: $\\left(P + \\frac{a n^2}{V^2}\\right)(V - n b) = n R T$. Discuss critical constants $P_c, V_c, T_c$.",
      "answer_lines": [
        "**1. Corrections**: (1) Volume correction: Molecules occupy finite volume $b$ ($V_{eff} = V - b$). (2) Pressure correction: Intermolecular attractive forces reduce wall pressure by internal pressure $P_{int} = \\frac{a}{V^2}$.",
        "**2. Critical Constants**: At the critical point, the isotherm has an inflection point: $\\left(\\frac{\\partial P}{\\partial V}\\right)_{T_c} = 0$ and $\\left(\\frac{\\partial^2 P}{\\partial V^2}\\right)_{T_c} = 0$.",
        "Solving cubic in $V$: $(V - V_c)^3 = V^3 - 3V_c V^2 + 3V_c^2 V - V_c^3 = 0$.",
        "Comparing with Van der Waals equation gives:",
        "$$V_c = 3b, \\quad P_c = \\frac{a}{27b^2}, \\quad T_c = \\frac{8a}{27Rb}$$",
        "Critical compressibility factor: $Z_c = \\frac{P_c V_c}{R T_c} = \\frac{3}{8} = 0.375$."
      ]
    }
  ],
  "stat_db_set1": [
    {
      "id": "bsc-sdb-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Karl Pearson's correlation coefficient $r$ and state its limits.",
      "answer_lines": [
        "$$r = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} = \\frac{\\sum (X - \\bar{X})(Y - \\bar{Y})}{\\sqrt{\\sum(X - \\bar{X})^2 \\sum(Y - \\bar{Y})^2}}$$ Limits: $-1 \\le r \\le +1$."
      ]
    },
    {
      "id": "bsc-sdb-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the angle between two regression lines when $r = 0$ and $r = \\pm 1$?",
      "answer_lines": [
        "When $r = 0$, lines are mutually perpendicular ($\\theta = 90^\\circ$). When $r = \\pm 1$, lines coincide ($\\theta = 0^\\circ$)."
      ]
    },
    {
      "id": "bsc-sdb-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Primary Key and Foreign Key in relational databases.",
      "answer_lines": [
        "**Primary Key**: A column or minimal set of columns uniquely identifying each tuple in a table (non-null).",
        "**Foreign Key**: An attribute referencing the primary key of another table, enforcing referential integrity."
      ]
    },
    {
      "id": "bsc-sdb-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the condition for a relation to be in Third Normal Form (3NF).",
      "answer_lines": [
        "A relation is in 3NF if it is in 2NF and no non-prime attribute is transitively dependent on any candidate key (for $X \\to Y$, $X$ is a superkey or $Y$ is a prime attribute)."
      ]
    },
    {
      "id": "bsc-sdb-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between `WHERE` and `HAVING` clauses in SQL.",
      "answer_lines": [
        "`WHERE` filters rows before grouping occurs; `HAVING` filters aggregated groups produced by `GROUP BY`."
      ]
    },
    {
      "id": "bsc-sdb-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Calculate the coefficient of correlation $r$ between variables $X$ and $Y$ given data: $X = [1, 2, 3, 4, 5], Y = [2, 5, 3, 8, 7]$. Find the regression line of $Y$ on $X$.",
      "answer_lines": [
        "**1. Summary Stats**: $n = 5, \\sum X = 15, \\bar{X} = 3.0, \\sum Y = 25, \\bar{Y} = 5.0$.",
        "\u2022 $\\sum X^2 = 1 + 4 + 9 + 16 + 25 = 55$. $\\sum (X - \\bar{X})^2 = 55 - 5(9) = 10$.",
        "\u2022 $\\sum Y^2 = 4 + 25 + 9 + 64 + 49 = 151$. $\\sum (Y - \\bar{Y})^2 = 151 - 5(25) = 26$.",
        "\u2022 $\\sum XY = 2 + 10 + 9 + 32 + 35 = 88$. $\\sum (X - \\bar{X})(Y - \\bar{Y}) = 88 - 5(3)(5) = 13$.",
        "**2. Correlation Coefficient**:",
        "$$r = \\frac{13}{\\sqrt{10 \\times 26}} = \\frac{13}{\\sqrt{260}} = \\frac{13}{16.1245} \\approx 0.806$$",
        "**3. Regression Line of $Y$ on $X$**:",
        "Slope $b_{yx} = \\frac{13}{10} = 1.3$.",
        "$$Y - \\bar{Y} = b_{yx}(X - \\bar{X}) \\implies Y - 5 = 1.3(X - 3) \\implies Y = 1.3X + 1.1$$"
      ]
    },
    {
      "id": "bsc-sdb-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Database Normalization from 1NF to BCNF with functional dependencies and anomaly prevention.",
      "answer_lines": [
        "**1NF**: Disallow multi-valued or composite attributes; all domain values must be atomic.",
        "**2NF**: In 1NF and no partial dependencies (every non-prime attribute must depend on the whole candidate key).",
        "**3NF**: In 2NF and no transitive dependencies ($X \\to Y \\implies X$ is superkey or $Y$ is prime).",
        "**BCNF**: For every non-trivial functional dependency $X \\to Y$, $X$ must be a superkey. Eliminates all functional dependency redundancy."
      ]
    },
    {
      "id": "bsc-sdb-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain ACID Properties of Transactions in DBMS. Describe conflict serializability and precedence graphs.",
      "answer_lines": [
        "**ACID**: Atomicity (all-or-nothing), Consistency (preserves database integrity constraints), Isolation (concurrent transactions execute as if serial), Durability (committed changes persist across crashes).",
        "**Conflict Serializability**: A schedule is conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting concurrent operations. Precedence graph is acyclic if and only if schedule is conflict serializable."
      ]
    },
    {
      "id": "bsc-sdb-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Write SQL queries for relational schema: `Student(id, name, dept)`, `Course(cid, title, credits)`, `Enroll(id, cid, grade)`.",
      "answer_lines": [
        "**(i) Find names of students enrolled in CS courses**:",
        "`SELECT DISTINCT s.name FROM Student s JOIN Enroll e ON s.id = e.id JOIN Course c ON e.cid = c.cid WHERE c.dept = 'CS';`",
        "**(ii) Find average grade per department having > 5 students**:",
        "`SELECT s.dept, AVG(e.grade) FROM Student s JOIN Enroll e ON s.id = e.id GROUP BY s.dept HAVING COUNT(DISTINCT s.id) > 5;`",
        "**(iii) Find students not enrolled in any course**:",
        "`SELECT name FROM Student WHERE id NOT IN (SELECT id FROM Enroll);`"
      ]
    },
    {
      "id": "bsc-sdb-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Binomial and Normal distributions with their parameters, probability mass/density functions, and properties.",
      "answer_lines": [
        "**Binomial Distribution**: Discrete distribution with parameters $n$ trials and probability of success $p$. $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$. Mean $= n p$, Variance $= n p (1 - p)$.",
        "**Normal Distribution**: Continuous bell-shaped distribution with mean $\\mu$ and variance $\\sigma^2$. PDF $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-(x-\\mu)^2/(2\\sigma^2)}$. 68.27% of values lie within $\\mu \\pm \\sigma$, 95.45% within $\\mu \\pm 2\\sigma$."
      ]
    }
  ],
  "stat_db_set2": [
    {
      "id": "bsc-sdb-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the relationship between regression coefficients $b_{yx}, b_{xy}$ and correlation coefficient $r$.",
      "answer_lines": [
        "$$r = \\pm \\sqrt{b_{yx} \\times b_{xy}}$$ Both regression coefficients and $r$ must have identical signs."
      ]
    },
    {
      "id": "bsc-sdb-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Null Hypothesis and Alternative Hypothesis.",
      "answer_lines": [
        "**Null Hypothesis ($H_0$)**: A hypothesis of no difference or no effect under test.",
        "**Alternative Hypothesis ($H_1$)**: The statement accepted when $H_0$ is rejected based on sample evidence."
      ]
    },
    {
      "id": "bsc-sdb-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is an Entity-Relationship (ER) model?",
      "answer_lines": [
        "A conceptual data model representing real-world objects as entities with attributes, and associations between entities as relationships."
      ]
    },
    {
      "id": "bsc-sdb-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between inner join and outer join in SQL.",
      "answer_lines": [
        "Inner join returns only matching records from both tables. Outer join (LEFT, RIGHT, FULL) returns matching rows plus unmatched rows padded with NULLs."
      ]
    },
    {
      "id": "bsc-sdb-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is a deadlock in transaction processing?",
      "answer_lines": [
        "A state where two or more transactions are waiting indefinitely for locks held by each other, forming a cyclic dependency."
      ]
    },
    {
      "id": "bsc-sdb-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Student's $t$-test for difference of means of two independent small samples. State assumptions and critical region.",
      "answer_lines": [
        "**1. Assumptions**: Populations are normally distributed with equal unknown variances $\\sigma_1^2 = \\sigma_2^2 = \\sigma^2$. Samples are drawn independently.",
        "**2. Test Statistic**:",
        "$$t = \\frac{\\bar{X}_1 - \\bar{X}_2}{S_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}} \\quad \\text{with degrees of freedom } df = n_1 + n_2 - 2$$",
        "Where pooled variance is $S_p^2 = \\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$.",
        "**3. Decision**: Reject $H_0$ if $|t| > t_{\\alpha/2, df}$."
      ]
    },
    {
      "id": "bsc-sdb-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Chi-Square Test of Independence of Attributes. Detail calculation of expected frequencies and contingency table degrees of freedom.",
      "answer_lines": [
        "**1. Test Statistic**:",
        "$$\\chi^2 = \\sum \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}$$",
        "**2. Expected Frequency**: $E_{ij} = \\frac{R_i \\times C_j}{N}$ where $R_i$ is row total and $C_j$ is column total.",
        "**3. Degrees of Freedom**: For an $r \\times c$ contingency table, $df = (r - 1)(c - 1)$.",
        "If calculated $\\chi^2 > \\chi_{\\alpha, df}^2$, the hypothesis of independence is rejected."
      ]
    },
    {
      "id": "bsc-sdb-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Design an ER Diagram for a Hospital Management System. Convert the ER diagram into relational schemas with primary and foreign keys.",
      "answer_lines": [
        "**Entities**: `Patient` (P_ID, Name, Phone, Age), `Doctor` (D_ID, Name, Specialty), `Appointment` (Appt_ID, Date, Time), `Room` (Room_No, Type).",
        "**Relationships**: Patient schedules Appointment (1:M); Doctor conducts Appointment (1:M); Patient admitted to Room (M:1).",
        "**Schemas**: `Patient(P_ID PK, ...)`, `Doctor(D_ID PK, ...)`, `Appointment(Appt_ID PK, P_ID FK, D_ID FK, Date, Time)`, `Admission(Adm_ID PK, P_ID FK, Room_No FK, Admit_Date)`."
      ]
    },
    {
      "id": "bsc-sdb-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Two-Phase Locking (2PL) Protocol for concurrency control. Differentiate between Strict 2PL and Rigorous 2PL.",
      "answer_lines": [
        "**1. 2PL Rule**: A transaction cannot request any lock after releasing any lock.",
        "\u2022 Growing Phase: Locks acquired; no locks released.",
        "\u2022 Shrinking Phase: Locks released; no locks acquired.",
        "**2. Variations**:",
        "\u2022 **Strict 2PL**: Holds all exclusive (write) locks until commit/abort. Prevents cascading rollbacks.",
        "\u2022 **Rigorous 2PL**: Holds all shared and exclusive locks until commit/abort, guaranteeing serializability and easy crash recovery."
      ]
    },
    {
      "id": "bsc-sdb-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain SQL Views and Triggers with examples and performance trade-offs.",
      "answer_lines": [
        "**Views**: Virtual tables defined by a query (`CREATE VIEW TopStudents AS SELECT * FROM Student WHERE gpa > 3.8;`). Provide data security and simplify complex queries.",
        "**Triggers**: Stored procedures executed automatically in response to DML events (`BEFORE INSERT`, `AFTER UPDATE`). Used for audit logging, enforcing complex business rules, and maintaining derived balances."
      ]
    }
  ],
  "ps_set1": [
    {
      "id": "bsc-ps-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Big-O notation and write its formal mathematical definition.",
      "answer_lines": [
        "$f(n) = O(g(n))$ if there exist positive constants $c$ and $n_0$ such that $0 \\le f(n) \\le c g(n)$ for all $n \\ge n_0$. It represents the asymptotic upper bound."
      ]
    },
    {
      "id": "bsc-ps-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between Recursion and Iteration.",
      "answer_lines": [
        "Iteration uses looping constructs (`for`, `while`) with constant memory overhead $O(1)$. Recursion uses function self-calls consuming call-stack memory $O(d)$ where $d$ is recursion depth."
      ]
    },
    {
      "id": "bsc-ps-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the pre-condition required for Binary Search algorithm.",
      "answer_lines": [
        "The array or collection must be sorted in monotonic order (ascending or descending) with random access capability ($O(1)$ indexing)."
      ]
    },
    {
      "id": "bsc-ps-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the Greedy Choice Property in algorithm design?",
      "answer_lines": [
        "A globally optimal solution can be achieved by making locally optimal (greedy) choices at each step without ever reconsidering past choices."
      ]
    },
    {
      "id": "bsc-ps-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the difference between Divide-and-Conquer and Dynamic Programming.",
      "answer_lines": [
        "Divide-and-Conquer solves independent subproblems (Merge Sort). Dynamic Programming solves overlapping subproblems by memoizing solutions to avoid recomputation."
      ]
    },
    {
      "id": "bsc-ps-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Binary Search algorithm. Write iterative and recursive implementations and prove its $O(\\log n)$ time complexity.",
      "answer_lines": [
        "**1. Algorithm**: Compare search key with middle element `mid = low + (high - low)/2`. If equal, return `mid`. If key < `arr[mid]`, search left half `high = mid - 1`. If key > `arr[mid]`, search right half `low = mid + 1`.",
        "**2. Time Complexity Proof**: At each iteration, the search interval is halved: $n \\to n/2 \\to n/4 \\to \\dots \\to n/2^k = 1$.",
        "$$2^k = n \\implies k = \\log_2 n$$",
        "Hence at most $\\lceil \\log_2 n \\rceil$ comparisons are required. Running time is $O(\\log n)$."
      ]
    },
    {
      "id": "bsc-ps-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the 0/1 Knapsack Problem using Dynamic Programming. Compute max profit for weights $[2, 3, 4, 5]$, values $[3, 4, 5, 6]$, and capacity $W = 5$.",
      "answer_lines": [
        "**1. Recurrence**: Let $dp[i][w]$ be max value with first $i$ items and capacity $w$:",
        "$$dp[i][w] = \\max(dp[i-1][w], \\text{val}[i-1] + dp[i-1][w - \\text{wt}[i-1]]) \\quad (\\text{if } w \\ge \\text{wt}[i-1])$$",
        "**2. DP Table Computation for $W = 5$**:",
        "\u2022 Item 1 (wt 2, val 3): $dp[1][2..5] = 3$.",
        "\u2022 Item 2 (wt 3, val 4): at $w=3: 4$, at $w=5: 3+4 = 7$.",
        "\u2022 Item 3 (wt 4, val 5): at $w=4: 5$, at $w=5: \\max(7, 5) = 7$.",
        "\u2022 Item 4 (wt 5, val 6): at $w=5: \\max(7, 6) = 7$.",
        "**Max Profit**: 7 (by selecting Item 1 and Item 2, total weight $2 + 3 = 5$)."
      ]
    },
    {
      "id": "bsc-ps-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Fractional Knapsack Problem using Greedy Strategy. Detail sorting criteria and compare with 0/1 Knapsack.",
      "answer_lines": [
        "**1. Greedy Criterion**: Sort items in decreasing order of value-to-weight ratio ($v_i / w_i$). Greedily take whole items as long as capacity permits; when capacity is insufficient, take the fractional portion $\\frac{W_{rem}}{w_i}$ of the next item.",
        "**2. Optimality**: Fractional knapsack possesses the greedy choice property; 0/1 knapsack does not because taking a high-ratio item may leave empty capacity that cannot be filled efficiently."
      ]
    },
    {
      "id": "bsc-ps-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Tower of Hanoi problem. Write recursive algorithm and derive recurrence relation for number of moves $T(n) = 2^n - 1$.",
      "answer_lines": [
        "**1. Algorithm**: Move $n-1$ disks from Source to Auxiliary peg. Move $n$-th disk from Source to Destination peg. Move $n-1$ disks from Auxiliary to Destination peg.",
        "**2. Recurrence**: $T(n) = 2 T(n-1) + 1$ with $T(1) = 1$.",
        "$$T(n) = 2(2 T(n-2) + 1) + 1 = 2^2 T(n-2) + 2 + 1 = \\dots = 2^{n-1} T(1) + \\sum_{k=0}^{n-2} 2^k = \\sum_{k=0}^{n-1} 2^k = 2^n - 1$$",
        "Time complexity is exponential $O(2^n)$."
      ]
    },
    {
      "id": "bsc-ps-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Backtracking algorithm paradigm. Detail the N-Queens problem on a $4 \\times 4$ chessboard.",
      "answer_lines": [
        "**1. Paradigm**: Systematically searches solution space by building candidate solutions incrementally. If candidate cannot possibly be completed to a valid solution, it abandons (backtracks) to prior decision point.",
        "**2. 4-Queens**: Place 4 queens on $4 \\times 4$ board such that no two queens attack each other (same row, column, or diagonal).",
        "Valid solution: Queen 1 at (Row 1, Col 2), Queen 2 at (Row 2, Col 4), Queen 3 at (Row 3, Col 1), Queen 4 at (Row 4, Col 3)."
      ]
    }
  ],
  "ps_set2": [
    {
      "id": "bsc-ps-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define space complexity of an algorithm.",
      "answer_lines": [
        "The total amount of memory space required by the algorithm to execute to completion as a function of the input size $n$ (fixed space + variable space)."
      ]
    },
    {
      "id": "bsc-ps-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the Master Theorem for divide-and-conquer recurrences.",
      "answer_lines": [
        "For $T(n) = a T(n/b) + O(n^d)$: Case 1 ($d < \\log_b a$): $O(n^{\\log_b a})$; Case 2 ($d = \\log_b a$): $O(n^d \\log n)$; Case 3 ($d > \\log_b a$): $O(n^d)$."
      ]
    },
    {
      "id": "bsc-ps-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is an in-place sorting algorithm?",
      "answer_lines": [
        "An algorithm that transforms input using only a small, constant amount of additional memory space $O(1)$ beyond the input array (e.g., QuickSort, InsertionSort)."
      ]
    },
    {
      "id": "bsc-ps-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is memoization in Dynamic Programming?",
      "answer_lines": [
        "A top-down optimization technique that caches the results of expensive function calls and returns the cached result when identical inputs occur again."
      ]
    },
    {
      "id": "bsc-ps-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the time complexity of linear search vs binary search.",
      "answer_lines": [
        "Linear search is $O(n)$ in worst case; Binary search is $O(\\log n)$ in worst case."
      ]
    },
    {
      "id": "bsc-ps-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain QuickSort algorithm with partition mechanics. Trace QuickSort on array $[10, 80, 30, 90, 40, 50, 70]$ using Lomuto partition scheme.",
      "answer_lines": [
        "**1. Partitioning**: Choose last element as pivot. Maintain index $i$; scan with $j$. If $A[j] \\le \\text{pivot}$, increment $i$ and swap $A[i]$ with $A[j]$. Finally swap pivot with $A[i+1]$.",
        "**2. Trace on $[10, 80, 30, 90, 40, 50, 70]$ (Pivot = 70)**:",
        "\u2022 10 <= 70: swap with itself.",
        "\u2022 30 <= 70: swap with 80 $\\to [10, 30, 80, 90, 40, 50, 70]$.",
        "\u2022 40 <= 70: swap with 80 $\\to [10, 30, 40, 90, 80, 50, 70]$.",
        "\u2022 50 <= 70: swap with 90 $\\to [10, 30, 40, 50, 80, 90, 70]$.",
        "\u2022 Pivot 70 placed at index 4: $[10, 30, 40, 50, 70, 90, 80]$.",
        "Recurse on left $[10, 30, 40, 50]$ and right $[90, 80]$."
      ]
    },
    {
      "id": "bsc-ps-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Longest Common Subsequence (LCS) problem using Dynamic Programming. Find LCS of strings $X = \\text{\"ABCBDAB\"}$ and $Y = \\text{\"BDCABA\"}$.",
      "answer_lines": [
        "**1. Recurrence**: If $X[i] == Y[j]$, $dp[i][j] = 1 + dp[i-1][j-1]$; else $dp[i][j] = \\max(dp[i-1][j], dp[i][j-1])$.",
        "**2. Trace**: Filling $7 \\times 6$ table yields max length 4.",
        "Backtracking gives LCS: **\"BCBA\"** (or \"BDAB\"). Length is 4."
      ]
    },
    {
      "id": "bsc-ps-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Prim's algorithm for Minimum Spanning Tree. Detail vertex cut property and comparison with Kruskal's algorithm.",
      "answer_lines": [
        "**1. Strategy**: Starts from arbitrary vertex and grows single tree by adding minimum weight edge connecting a visited vertex to an unvisited vertex.",
        "**2. Comparison**: Prim's runs in $O(E + V \\log V)$ using Fibonacci Heap, superior on dense graphs ($E \\approx V^2$); Kruskal's is $O(E \\log V)$, superior on sparse graphs."
      ]
    },
    {
      "id": "bsc-ps-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Job Sequencing with Deadlines using Greedy Strategy. Maximize profit for jobs $J_1(p:100, d:2), J_2(p:19, d:1), J_3(p:27, d:2), J_4(p:25, d:1), J_5(p:15, d:3)$.",
      "answer_lines": [
        "**1. Sort by Profit**: $J_1(100, 2), J_3(27, 2), J_4(25, 1), J_2(19, 1), J_5(15, 3)$.",
        "**2. Schedule in Latest Available Slots**:",
        "\u2022 $J_1$: slot [1-2].",
        "\u2022 $J_3$: slot 2 taken; schedule in slot [0-1].",
        "\u2022 $J_4$: slot [0-1] taken, discarded.",
        "\u2022 $J_5$: schedule in slot [2-3].",
        "**Optimal Sequence**: $J_3, J_1, J_5$ with total maximum profit $= 27 + 100 + 15 = 142$."
      ]
    },
    {
      "id": "bsc-ps-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Huffman Coding for lossless data compression. Construct Huffman Tree and derive prefix codes for characters with frequencies: $a:45, b:13, c:12, d:16, e:9, f:5$.",
      "answer_lines": [
        "**1. Greedy Build**: Repeatedly merge two nodes with lowest frequencies.",
        "\u2022 Merge $f(5) + e(9) = 14$.",
        "\u2022 Merge $c(12) + b(13) = 25$.",
        "\u2022 Merge $14 + d(16) = 30$.",
        "\u2022 Merge $25 + 30 = 55$.",
        "\u2022 Merge $a(45) + 55 = 100$.",
        "**2. Prefix Codes**: $a = 0, c = 100, b = 101, f = 1100, e = 1101, d = 111$. Guarantees unambiguous instantaneous decoding."
      ]
    }
  ],
  "microbial_div_set1": [
    {
      "id": "bsc-md-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What are lichens and what is the nature of their symbiotic association?",
      "answer_lines": [
        "Lichens are composite symbiotic organisms consisting of a photosynthetic partner (algae or cyanobacteria, photobiont) and a fungal partner (mycobiont, usually Ascomycete). The fungus provides structural anchorage, water, and minerals, while the photobiont synthesizes organic nutrients."
      ]
    },
    {
      "id": "bsc-md-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Name two distinguishing characteristics of the division Bryophyta.",
      "answer_lines": [
        "1. Gametophyte is the dominant, independent, photosynthetic generation in the life cycle. 2. Lack true vascular tissues (xylem and phloem) and true roots, absorbing water through rhizoids."
      ]
    },
    {
      "id": "bsc-md-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define stele and name the simplest primitive protostele type.",
      "answer_lines": [
        "The stele is the central vascular cylinder of vascular plants comprising xylem, phloem, and pericycle. The simplest type is the haplostele, featuring a central solid cylindrical xylem core surrounded by phloem (e.g., Rhynia)."
      ]
    },
    {
      "id": "bsc-md-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is heterospory? Name one pteridophyte exhibiting heterospory.",
      "answer_lines": [
        "Heterospory is the production of two morphologically distinct types of spores: small microspores (forming male gametophytes) and larger megaspores (forming female gametophytes). Example: Selaginella."
      ]
    },
    {
      "id": "bsc-md-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the economic significance of Sphagnum moss.",
      "answer_lines": [
        "Sphagnum (peat moss) has extraordinary water-retention capacity (absorbing up to 20 times its dry weight), making it vital for horticultural packaging. Accumulated compressed deposits form peat, utilized worldwide as renewable fuel and soil acidifier."
      ]
    },
    {
      "id": "bsc-md-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the internal structure and reproduction of Marchantia. Detail the morphological organization of the thallus and gemma cups.",
      "answer_lines": [
        "1. Thallus Morphology: Marchantia features a dorsiventrally flattened, prostrate, dichotomously branched thallus. Dorsal surface shows polygonal rhomboidal areas with central chimney-like air pores, while ventral surface bears multicellular scales and two types of rhizoids (smooth-walled and tuberculate).",
        "2. Internal Anatomy: Upper photosynthetic zone contains air chambers with branched chlorophyll-rich filaments. Lower storage zone comprises parenchymatous cells storing starch and mucilage.",
        "3. Asexual Reproduction: Vegetative propagation occurs via fragmentation and multicellular discoid gemmae produced inside crescent-rimmed gemma cups on the dorsal midrib.",
        "4. Sexual Reproduction: Dioecious plant with reproductive structures borne on upright stalks: peltate antheridiophores bearing flagellated antherozoids in antheridia, and umbrella-shaped archegoniophores with 9 drooping rays harboring flask-shaped archegonia containing a single egg cell."
      ]
    },
    {
      "id": "bsc-md-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the life cycle of Selaginella. Detail the morphology, strobilar organization, heterospory, and its evolutionary significance towards the seed habit.",
      "answer_lines": [
        "1. Plant Morphology: Known as spike moss. Possesses creeping stems, microphyllous ligulate leaves arranged in four rows, and unique root-bearing cylindrical organs termed rhizophore.",
        "2. Strobilar Structure: Compact terminal cones consisting of spirally arranged microsporophylls (housing microsporangia) and megasporophylls (housing megasporangia).",
        "3. Heterospory and Gametophyte Development: Microsporangia produce numerous minute microspores; megasporangia produce four large megaspores. Development of both gametophytes is strictly endosporic, deriving nutrients from spore reserves rather than external soil.",
        "4. Precursor to Seed Habit: Retention of the female gametophyte within the megasporangium wall, internal fertilization via flagellated antherozoids, and embryonic development within maternal tissues represent key evolutionary milestones transitioning toward gymnosperm seed architecture."
      ]
    },
    {
      "id": "bsc-md-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the anatomical features and reproductive cycle of Funaria (Moss). Detail the structure of the sporophyte capsule and peristome teeth mechanics.",
      "answer_lines": [
        "1. Gametophyte Structure: Starts from filamentous protonema bearing rhizoids and leafy upright gametophores with spirally arranged leaves.",
        "2. Sporophyte Capsule Anatomy: Differentiated into Foot, Seta, and pear-shaped Capsule. Capsule shows three distinct regions:",
        "\u2022 Apophysis: Basal photosynthetic region with stomata and spongy parenchyma.",
        "\u2022 Theca: Fertile central region containing central columella surrounded by spore sac and air trabeculae.",
        "\u2022 Operculum: Terminal lid covering the peristome.",
        "3. Peristome Teeth Mechanism: Two concentric rings of 16 outer teeth and 16 inner teeth. Outer teeth are hygroscopic; in dry weather, they curve outward, lifting the operculum and releasing spores gradually, while in humid weather they close tightly to protect spores from fungal rotting."
      ]
    },
    {
      "id": "bsc-md-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Stelar Evolution in Pteridophytes. Trace the evolutionary progression from Protostele to Siphonostele, Solenostele, and Dictyostele.",
      "answer_lines": [
        "1. Protostelic Stage (Primitive, non-medullated core):",
        "\u2022 Haplostele: Solid central circular xylem core enveloped by phloem (Rhynia).",
        "\u2022 Actinostele: Star-shaped lobed xylem core with phloem in alternating furrows (Psilotum).",
        "\u2022 Plectostele: Xylem plates alternating with parallel phloem plates (Lycopodium).",
        "2. Siphonostelic Stage (Medullated stele with central pith):",
        "\u2022 Ectophloic: Central pith surrounded by xylem, outer phloem, and pericycle (Osmunda).",
        "\u2022 Amphiphloic: Central pith surrounded by inner phloem, xylem ring, and outer phloem (Marsilea).",
        "3. Solenostelic and Dictyostelic Stages (Advanced vascular fragmentation):",
        "\u2022 Solenostele: Perforated by leaf gaps at branch points.",
        "\u2022 Dictyostele: Overlapping leaf gaps break vascular cylinder into multiple independent circular vascular bundles known as meristeles (Pteris, Dryopteris)."
      ]
    },
    {
      "id": "bsc-md-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the thallus organization, ecological importance, and air pollution bio-indicator role of Lichens.",
      "answer_lines": [
        "1. Thallus Growth Forms: Crustose (flattened, firmly glued to rock substrates like Graphis), Foliose (leaf-like, lobed thalli attached via rhizines like Parmelia), and Fruticose (branched, shrubby pendant structures like Usnea).",
        "2. Ecological Pioneer Role: Lichens pioneer primary ecological succession on bare rocks. They secrete organic lichen acids (such as usnic acid) that weather hard siliceous minerals, creating nascent soil organic beds for bryophyte establishment.",
        "3. Bio-indicators of Air Pollution: Lichens lack stomata and waxy cuticles, absorbing moisture and atmospheric gases directly across their entire surface. They are exquisitely sensitive to sulfur dioxide (SO2) and heavy metal aerosols; absence of epiphytic lichens in urban zones indicates heavy industrial atmospheric pollution."
      ]
    }
  ],
  "microbial_div_set2": [
    {
      "id": "bsc-md-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is an antheridium and an archegonium?",
      "answer_lines": [
        "Antheridium is the multicellular male sex organ producing biflagellate motile male gametes. Archegonium is the multicellular flask-shaped female sex organ containing a single non-motile egg in its swollen venter."
      ]
    },
    {
      "id": "bsc-md-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define apospory and apogamy in lower plants.",
      "answer_lines": [
        "Apospory: Formation of a gametophyte directly from vegetative sporophyte cells without spore formation or meiosis. Apogamy: Formation of a sporophyte directly from gametophyte cells without gametic fusion."
      ]
    },
    {
      "id": "bsc-md-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What are elaters and what is their functional role in liverworts?",
      "answer_lines": [
        "Elaters are elongated, spindle-shaped sterile cells with spirally thickened inner walls found in liverwort capsules (Marchantia). They are hygroscopic, twisting violently with humidity changes to facilitate spore dispersal."
      ]
    },
    {
      "id": "bsc-md-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Name two living fossil pteridophytes.",
      "answer_lines": [
        "1. Psilotum (whisk fern, rootless and leafless living fossil). 2. Equisetum (horsetail, the sole surviving genus of the ancient Calamites lineage)."
      ]
    },
    {
      "id": "bsc-md-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is circinate vernation?",
      "answer_lines": [
        "The coiled arrangement of young leaves (fronds) in ferns where the delicate apex is curled inwards in a spiral to protect growing meristematic tips from physical damage."
      ]
    },
    {
      "id": "bsc-md-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the anatomy of the stem and reproductive cone of Equisetum (Horsetail). Detail silica deposition and carinal-vallecular canals.",
      "answer_lines": [
        "1. Morphological Features: Jointed aerial stems with distinct nodes and hollow internodes, ribbed with ridges and grooves, and whorled scale leaves at nodes. Epidermis is heavily impregnated with abrasive silica grains.",
        "2. Internal Stem Anatomy: Characterized by three specialized canal systems:",
        "\u2022 Vallecular Canals: Large air cavities in cortex aligned beneath external grooves.",
        "\u2022 Carinal Canals: Water-conducting cavities formed by disintegration of protoxylem under each ridge.",
        "\u2022 Central Cavity: Large hollow lumen running through center of internodes.",
        "3. Reproductive Cone (Strobilus): Composed of a central axis bearing peltate hexagonal sporangiophores with dangling sac-like sporangia.",
        "4. Spore Mechanics: Spores possess four ribbon-like, hygroscopic elaters that uncoil in dry air, launching spores into turbulent convective breezes."
      ]
    },
    {
      "id": "bsc-md-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the internal structure, vegetative reproduction, and alternation of generations in Anthoceros (Hornwort). Discuss pseudo-elaters and basal meristem.",
      "answer_lines": [
        "1. Gametophyte Features: Dark green, lobed, dorsiventral thallus lacking midrib, air chambers, and air pores. Lower surface bears Nostoc-containing mucilage cavities that fix atmospheric nitrogen.",
        "2. Sporophyte Architecture: Cylindrical horn-shaped sporophyte consisting of bulbous foot and long upright capsule. Notably lacks a seta, replaced by an intercalary basal meristem that continuously produces new spore tissue throughout its lifespan.",
        "3. Capsule Structure: Central sterile columella surrounded by sporogenous cylinder producing spores and multicellular pseudo-elaters. Dehiscence occurs longitudinally from tip downward along two vertical valves."
      ]
    },
    {
      "id": "bsc-md-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the morphology, soral organization, and sporangium dehiscence in Pteris (Brake Fern). Detail the role of the annulus and stomium.",
      "answer_lines": [
        "1. Vegetative Morphology: Creeping underground rhizome covered with scales (ramentum), bearing pinnately compound fronds showing circinate vernation.",
        "2. Soral Organization: Coenosori form a continuous marginal band along the underside of fertile pinnules, protected by an inrolled false indusium formed by the reflexed leaf margin.",
        "3. Sporangium Anatomy: Biconvex stalked capsule with a vertical ring of 12 to 16 thick-walled indurated cells known as the annulus, interrupted by thin-walled stomium cells.",
        "4. Dehiscence Mechanism: Evaporation of water from annulus cells causes tension that ruptures the stomium, bending the annulus backward into a spring. When water cavitation breaks column tension, the annulus snaps forward explosively, catapulting mature spores into air currents."
      ]
    },
    {
      "id": "bsc-md-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the Origin and Evolution of Land Plants from green algal ancestors (Charophycean algae). Discuss fossil evidence from Rhynia and Cooksonia.",
      "answer_lines": [
        "1. Ancestral Link: Biochemical and structural homologies demonstrate that land plants evolved from Charophycean green algae: presence of chlorophyll a and b, starch storage in plastids, cellulose synthase rosette complexes, and phragmoplast-mediated cytokinesis.",
        "2. Terrestrial Adaptations: Transition to land during the Silurian-Devonian epochs required overcoming desiccation (evolution of waxy cuticles and stomata), gravity (lignified xylem conduits), and gamete protection (multicellular sterile jacketed gametangia).",
        "3. Earliest Fossil Land Plants:",
        "\u2022 Cooksonia (Late Silurian): Oldest known vascular plant, featuring slender dichotomously branching leafless axes with terminal sporangia.",
        "\u2022 Rhynia (Early Devonian): Exceptionally preserved in chert deposits; simple leafless dichotomous axis with central haplostele, aerial cuticular stomata, and terminal fusiform sporangia."
      ]
    },
    {
      "id": "bsc-md-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Discuss the ecological and economic importance of Bryophytes and Pteridophytes. Detail their roles in soil conservation, water management, horticulture, and medicine.",
      "answer_lines": [
        "1. Soil Conservation and Ecology: Bryophyte carpets absorb heavy rainfall like biological sponges, preventing flash erosion and runoff. Pteridophyte rhizomes bind unstable hillside soils.",
        "2. Peat Moss (Sphagnum): Extracted worldwide as soil conditioning substrate for greenhouse crops; exhibits natural antiseptic properties historically utilized in battlefield wound dressings.",
        "3. Biofertilizers: The water fern Azolla harbors the symbiotic cyanobacterium Anabaena azollae, which fixes atmospheric nitrogen, widely applied in organic rice paddy agriculture.",
        "4. Medicinal and Ornamental Uses: Lycopodium spore powder (vegetable sulfur) used in pharmaceutical pill coatings; Dryopteris rhizomes yield filicin anthelmintic extracts; ferns cultivated extensively as landscape ornamentals."
      ]
    }
  ],
  "chordates_set1": [
    {
      "id": "bsc-cho-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the four primary defining diagnostic characteristics of the phylum Chordata.",
      "answer_lines": [
        "1. Presence of a dorsal flexible skeletal rod (Notochord). 2. Single dorsal hollow tubular nerve cord. 3. Pharyngeal gill slits in embryonic or adult stages. 4. Post-anal muscular tail."
      ]
    },
    {
      "id": "bsc-cho-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is retrogressive metamorphosis? Give one classic example.",
      "answer_lines": [
        "A degenerative metamorphic process where an advanced, active, free-swimming larva possessing chordate hallmarks degenerates into a simplified, sessile, degenerate adult. Example: Ascidia (Urochordata)."
      ]
    },
    {
      "id": "bsc-cho-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between anamniotes and amniotes.",
      "answer_lines": [
        "Anamniotes lack extra-embryonic membranes (amnion, chorion, allantois) and lay eggs in water (fishes, amphibians). Amniotes develop protective fetal membranes enabling terrestrial reproduction (reptiles, birds, mammals)."
      ]
    },
    {
      "id": "bsc-cho-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define the Ten Percent Law of energy transfer in ecological food chains.",
      "answer_lines": [
        "Formulated by Raymond Lindeman: During transfer of organic trophic energy from one trophic level to the next, only approximately 10 percent of energy is incorporated into biomass; 90 percent is lost as metabolic heat, respiration, and feces."
      ]
    },
    {
      "id": "bsc-cho-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is cleavage in embryology and how does it differ from ordinary mitosis?",
      "answer_lines": [
        "Cleavage is the rapid series of mitotic divisions of a fertilized zygote without intervening cell growth phases (G1 and G2), converting the large single-cell zygote into a multicellular blastula of constant total volume."
      ]
    },
    {
      "id": "bsc-cho-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the circulatory system and aortic arches modification in vertebrates from fishes to mammals. Detail the evolutionary transition from single to double circulation.",
      "answer_lines": [
        "1. Basic Primitive Plan: Ancestral vertebrate plan contains 6 pairs of aortic arches connecting ventral aorta to paired dorsal aortae across pharyngeal slits.",
        "2. Fishes (Single Circulation): 2-chambered heart (one atrium, one ventricle). Venous blood is pumped directly to gill capillaries for oxygenation and distributed to body tissues without returning to heart (low arterial pressure).",
        "3. Amphibians (Incomplete Double Circulation): 3-chambered heart (two atria, single ventricle). Spiral valve in conus arteriosus partially separates oxygenated and deoxygenated blood; systemic and pulmocutaneous arches emerge from arches 3, 4, and 6.",
        "4. Reptiles: Ventricle partially divided by an incomplete septum (completely 4-chambered in crocodiles).",
        "5. Birds and Mammals (Complete Double Circulation): True 4-chambered heart with complete separation of pulmonary and systemic circuits. Systemic arch curves to right in birds (arch 4) and to left in mammals; arch 6 forms pulmonary arteries."
      ]
    },
    {
      "id": "bsc-cho-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the process of Gastrulation in Amphioxus or Frog. Detail epiboly, invagination, involution, and the formation of the three primary germ layers.",
      "answer_lines": [
        "1. Definition and Significance: Morphogenetic phase transforming the hollow single-layered blastula into a three-layered gastrula establishing the definitive body plan and primitive gut (archenteron).",
        "2. Major Morphogenetic Cell Movements in Frog:",
        "\u2022 Invagination: Blastoporal pigment cells constrict to form bottle cells, creating a crescentic blastoporal lip beneath gray crescent.",
        "\u2022 Involution: Prospective mesoderm and endoderm roll over the dorsal lip into the blastocoel cavity.",
        "\u2022 Epiboly: Rapid mitotic division and spreading of pigmented animal pole ectoderm downward over vegetal hemisphere.",
        "3. Germ Layer Fates:",
        "\u2022 Ectoderm: Epidermis, nervous system, sensory organs.",
        "\u2022 Mesoderm: Notochord, skeletal muscles, circulatory system, urogenital organs, bone.",
        "\u2022 Endoderm: Epithelial lining of digestive tract, respiratory lungs, liver, pancreas."
      ]
    },
    {
      "id": "bsc-cho-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Extra-embryonic (Foetal) Membranes in Chick development. Detail the origin, structure, and functions of the Amnion, Chorion, Allantois, and Yolk Sac.",
      "answer_lines": [
        "1. Yolk Sac: Derived from splanchnopleure (endoderm and splanchnic mesoderm). Encloses yolk mass, developing vitelline vascular network that digests and absorbs nutrient reserves for embryonic growth.",
        "2. Amnion: Inner folds of somatopleure (ectoderm and somatic mesoderm) that fuse above embryo to form an enclosed fluid-filled amniotic sac. Functions as a protective aquatic shock absorber preventing mechanical shock and tissue desiccation.",
        "3. Chorion (Serosa): Outer somatopleure layer enveloping entire embryonic complex. Fuses with allantois to form chorioallantoic membrane.",
        "4. Allantois: Diverticulum of hindgut splanchnopleure extending into extra-embryonic coelom. Acts as a fetal urinary bladder storing uric acid waste, and heavily vascularized respiratory surface exchanging O2 and CO2 across porous eggshell."
      ]
    },
    {
      "id": "bsc-cho-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe Ecological Succession. Differentiate between primary and secondary succession and detail the sequential stages of a Hydrosere (freshwater succession).",
      "answer_lines": [
        "1. Concept of Succession: Orderly, predictable directional process of community change over time leading to a stable, self-perpetuating climax community.",
        "2. Primary vs. Secondary: Primary succession initiates on pristine lifeless sterile substrate (lava flow, sand dune). Secondary succession begins after disturbance (wildfire, flood) where organic soil seeds remain.",
        "3. Successional Stages of a Hydrosere:",
        "\u2022 Phytoplankton Stage: Pioneer diatoms and blue-green algae enrich silt organic matter.",
        "\u2022 Submerged Stage: Rooted submerged plants (Hydrilla, Vallisneria) trap sediment, raising pond floor.",
        "\u2022 Floating Stage: Broad-leaved floating flora (Nymphaea, Nelumbo) shade bottom, accelerating siltation.",
        "\u2022 Reed-Swamp Stage: Amphibious plants (Typha, Phragmites) produce dense emergent marshes.",
        "\u2022 Sedge-Meadow Stage: Grass-like sedges (Carex, Juncus) transpire moisture, drying wetland.",
        "\u2022 Woodland and Forest Climax: Shrubs and pioneer trees establish climax mesophytic forest."
      ]
    },
    {
      "id": "bsc-cho-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Population Ecology: growth models (exponential and logistic), carrying capacity, and density-dependent versus density-independent limiting factors.",
      "answer_lines": [
        "1. Exponential Growth Model (J-shaped): Occurs when resources are limitless. Population increases at maximum per capita intrinsic rate of natural increase (r). Characterized by exponential equation dN/dt = rN.",
        "2. Logistic Growth Model (S-shaped / Sigmoid): Real-world model where environmental resistance limits growth as population nears carrying capacity (K). Expressed by equation dN/dt = rN * (K - N) / K.",
        "3. Concept of Carrying Capacity (K): The maximum population density of a species that a given environment can sustainably support indefinitely without habitat degradation.",
        "4. Limiting Factors:",
        "\u2022 Density-Dependent: Intensity increases with crowd density: intraspecific competition for food and nesting sites, infectious disease transmission, and predator pressure.",
        "\u2022 Density-Independent: Abiotic environmental shocks impacting mortality regardless of population density: flash floods, droughts, volcanic eruptions, and severe freezing snaps."
      ]
    }
  ],
  "chordates_set2": [
    {
      "id": "bsc-cho-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the endostyle in protochordates and what is its homologous organ in vertebrates?",
      "answer_lines": [
        "The endostyle is a ciliated, glandular longitudinal groove in the pharyngeal floor of tunicates and cephalochordates that secretes mucus to trap food particles. It is the evolutionary precursor and homologous counterpart of the vertebrate thyroid gland."
      ]
    },
    {
      "id": "bsc-cho-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between holoblastic and meroblastic cleavage.",
      "answer_lines": [
        "Holoblastic: Complete furrow cuts through entire zygote (microlecithal/mesolecithal eggs like mammals and frogs). Meroblastic: Incomplete cleavage restricted to animal pole disc because dense yolk prevents cleavage furrow penetration (macrolecithal eggs like birds and reptiles)."
      ]
    },
    {
      "id": "bsc-cho-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State Gause's Principle of Competitive Exclusion.",
      "answer_lines": [
        "Two closely related species competing for the exact same limiting ecological resources cannot coexist indefinitely in the same ecological niche; the species with even a slight reproductive advantage will outcompete and displace the other."
      ]
    },
    {
      "id": "bsc-cho-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is embryonic induction? Name the primary embryonic organizer discovered by Spemann and Mangold.",
      "answer_lines": [
        "The process whereby one embryonic tissue (organizer) directs the developmental fate and differentiation of adjacent responsive cells. Spemann and Mangold identified the dorsal blastopore lip as the Primary Organizer directing neural tube induction."
      ]
    },
    {
      "id": "bsc-cho-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define home range and territory in animal ecology.",
      "answer_lines": [
        "Home range is the total geographic area over which an animal roams in search of food and mates. Territory is the actively defended core portion of the home range from which conspecific competitors are aggressively excluded."
      ]
    },
    {
      "id": "bsc-cho-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Structure, Affinities, and Systematic Position of Balanoglossus (Hemichordata). Discuss why Hemichordata is excluded from true chordates.",
      "answer_lines": [
        "1. Morphology: Solitary marine worm-like animal living in U-shaped burrows, divided into Proboscis, Collar, and elongated Trunk.",
        "2. Chordate Features: Possesses numerous pharyngeal gill slits for filter feeding and a short dorsal neurocord in the collar region.",
        "3. Non-Chordate Features: The so-called notochord is actually a hollow anterior diverticulum of the foregut termed stomochord, lacking mesodermal derivation or sheath.",
        "4. Tornaria Larva and Echinoderm Affinities: The tornaria larva is virtually identical to the dipleurula / bipinnaria larva of echinoderms in ciliated bands and enterocoelic coelom formation.",
        "5. Systematic Position: Modern phylogenetic taxonomy places Hemichordata as an independent non-chordate invertebrate phylum closely allied to Echinodermata (Ambulacraria clade)."
      ]
    },
    {
      "id": "bsc-cho-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Placentation in Mammals. Classify mammalian placenta based on morphological shape and histological tissue barriers.",
      "answer_lines": [
        "1. Definition: An intimate composite organ formed by the apposition or fusion of fetal extra-embryonic membranes and maternal uterine mucosa for physiological exchange.",
        "2. Morphological Classification (Distribution of Chorionic Villi):",
        "\u2022 Diffuse: Villi scattered uniformly across chorion (pig, horse).",
        "\u2022 Cotyledonary: Villi grouped in localized rosette patches known as cotyledons (cow, sheep).",
        "\u2022 Zonary: Villi form a broad girdle band around middle of chorionic sac (carnivores like cat, dog).",
        "\u2022 Discoidal: Villi restricted to one or two circular disc-shaped cakes (primates, humans, rodents).",
        "3. Histological Classification (Number of Maternal-Fetal Barriers, Grosser Scheme):",
        "\u2022 Epitheliochorial: All 6 layers intact (maternal endothelium, connective tissue, uterine epithelium; fetal trophoblast, mesenchyme, fetal endothelium; pig).",
        "\u2022 Syndesmochorial: Uterine epithelium lost (ruminants).",
        "\u2022 Endotheliochorial: Maternal connective tissue lost; fetal chorion touches maternal capillaries (carnivores).",
        "\u2022 Hemochorial: All 3 maternal layers eroded; fetal chorionic villi bathed directly in maternal blood pools (humans, monkeys).",
        "\u2022 Hemoendothelial: Only fetal capillary endothelium separates maternal blood from fetal blood (rabbit, guinea pig)."
      ]
    },
    {
      "id": "bsc-cho-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe Poison Apparatus and Biting Mechanism in Snakes. Differentiate between neurotoxic and hemotoxic snake venoms with clinical symptoms.",
      "answer_lines": [
        "1. Poison Apparatus: Comprises paired modified superior labial venom glands (parotid homologous), muscular capsule, venom ducts, and specialized grooved or hollow hypodermic fangs situated on movable maxillae.",
        "2. Biting Mechanism: Movement is controlled by a mobile skull linkage involving squamosal, quadrate, pterygoid, and ectopterygoid bones. Opening the lower jaw swings the quadrate forward, pushing the pterygoid-ectopterygoid strut forward to rotate the maxilla vertically through 90 degrees, erecting the fang to penetrate victim tissues while temporal muscles squeeze venom into the wound.",
        "3. Venom Types and Pathology:",
        "\u2022 Neurotoxic Venom (Elapidae: Cobra, Krait): Acts on peripheral neuromuscular junctions, blocking acetylcholine receptors. Induces flaccid muscle paralysis, ptosis, dyspnea, and respiratory arrest.",
        "\u2022 Hemotoxic Venom (Viperidae: Russell's Viper, Saw-scaled Viper): Destroys vascular endothelial linings and platelets, triggering disseminated intravascular coagulation (DIC), severe internal hemorrhaging, and tissue necrosis."
      ]
    },
    {
      "id": "bsc-cho-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Biogeochemical Cycles in Ecosystems. Detail the global Nitrogen Cycle and Carbon Cycle, highlighting microbial nitrogen fixation and denitrification.",
      "answer_lines": [
        "1. Carbon Cycle: Atmospheric carbon dioxide is incorporated into biosphere by autotrophic photosynthetic carbon fixation. Carbon returns to atmosphere through organismal cellular respiration, microbial decomposition of organic detritus, and industrial combustion of fossil fuels.",
        "2. Nitrogen Cycle Processes:",
        "\u2022 Biological Nitrogen Fixation: Atmospheric N2 reduced to ammonia by prokaryotic nitrogenase in free-living bacteria (Azotobacter, Clostridium) and root nodules (Rhizobium).",
        "\u2022 Nitrification: Two-step aerobic oxidation of ammonia to nitrite by Nitrosomonas, followed by oxidation of nitrite to nitrate by Nitrobacter.",
        "\u2022 Assimilation: Plants absorb soil nitrate to synthesize amino acids and nucleotides.",
        "\u2022 Ammonification: Heterotrophic bacteria and fungi deaminate organic nitrogenous waste back to ammonia.",
        "\u2022 Denitrification: Anaerobic reduction of soil nitrate back to gaseous N2 by Pseudomonas and Paracoccus, returning nitrogen to the atmosphere."
      ]
    },
    {
      "id": "bsc-cho-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Biodiversity Conservation Strategies: In-situ versus Ex-situ conservation, National Parks, Wildlife Sanctuaries, Biosphere Reserves, and Biodiversity Hotspots.",
      "answer_lines": [
        "1. In-Situ Conservation (On-site conservation within natural ecosystems):",
        "\u2022 National Parks: Strictly protected wilderness areas owned by government where forestry, grazing, and private human settlements are completely prohibited (e.g., Kaziranga, Corbett).",
        "\u2022 Wildlife Sanctuaries: Protected natural areas prioritizing target wildlife conservation; regulated human activities (fuelwood collection, sustainable grazing) permitted.",
        "\u2022 Biosphere Reserves: Large multi-purpose protected regions zoning core pristine ecosystem, buffer research zone, and transition community settlement zone (e.g., Nilgiri, Sundarbans).",
        "2. Ex-Situ Conservation (Off-site preservation away from natural habitat): Botanical gardens, zoological parks, cryopreservation of gametes, seed banks, and DNA repositories.",
        "3. Biodiversity Hotspots: Regions exhibiting exceptional species richness and high floral/faunal endemism undergoing severe habitat destruction (loss of at least 70 percent of primary vegetation). Examples: Western Ghats, Eastern Himalayas."
      ]
    }
  ],
  "micro_physio_set1": [
    {
      "id": "bsc-mpg-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between phototrophs and chemotrophs based on energy source.",
      "answer_lines": [
        "Phototrophs utilize solar light radiant energy to drive biochemical synthesis (cyanobacteria, purple sulfur bacteria). Chemotrophs oxidize organic or inorganic chemical compounds to acquire cellular energy (heterotrophic and chemolithotrophic bacteria)."
      ]
    },
    {
      "id": "bsc-mpg-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the role of an F-plasmid in bacterial conjugation?",
      "answer_lines": [
        "The F-plasmid (fertility factor) encodes the synthesis of sex pili and conjugation machinery, facilitating directional horizontal transfer of genetic material from an F+ donor bacterium to an F- recipient cell."
      ]
    },
    {
      "id": "bsc-mpg-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define the four distinct phases of a bacterial batch growth curve.",
      "answer_lines": [
        "1. Lag phase (physiochemical adaptation). 2. Exponential or Log phase (balanced logarithmic multiplication). 3. Stationary phase (growth rate equals death rate). 4. Death or Decline phase (exponential cell lysis due to toxic accumulation)."
      ]
    },
    {
      "id": "bsc-mpg-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is diauxic growth in microorganisms?",
      "answer_lines": [
        "A biphasic growth pattern observed when bacteria are cultured in the presence of two sugars (such as glucose and lactose). The preferred substrate (glucose) is consumed first; following a short diauxic lag to induce new operon enzymes, the second sugar is utilized."
      ]
    },
    {
      "id": "bsc-mpg-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define transformation in bacterial genetics.",
      "answer_lines": [
        "The uptake and stable genetic incorporation of exogenous naked foreign DNA fragments from the surrounding aqueous environment by competent bacterial cells."
      ]
    },
    {
      "id": "bsc-mpg-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Bacterial Recombination mechanisms: Conjugation, Transformation, and Transduction. Detail the Griffith and Avery-MacLeod-McCarty experiments.",
      "answer_lines": [
        "1. Transformation: Demonstrated by Frederick Griffith (1928) using Streptococcus pneumoniae in mice (heat-killed virulent smooth S-strain transformed non-virulent rough R-strain into live deadly S-strain). Avery, MacLeod, and McCarty (1944) proved that only deoxyribonuclease (DNase) abolished transforming activity, establishing DNA as the chemical transforming agent.",
        "2. Conjugation: Unidirectional parasexual transfer of DNA mediated by physical cell-to-cell contact via conjugative sex pilus. Discovered by Lederberg and Tatum; integration of F plasmid into bacterial chromosome yields High Frequency of Recombination (Hfr) strains capable of transferring chromosomal markers in linear map order.",
        "3. Transduction: Bacteriophage-mediated horizontal gene transfer discovered by Zinder and Lederberg. Generalized transduction (lytic phages packaging random host chromosomal fragments) versus Specialized transduction (temperate phages like lambda carrying specific adjacent genes like gal or bio due to imprecise prophage excision)."
      ]
    },
    {
      "id": "bsc-mpg-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe Microbial Transport Mechanisms across bacterial cytoplasmic membranes: Simple Diffusion, Facilitated Diffusion, Active Transport, and Group Translocation.",
      "answer_lines": [
        "1. Passive Transport Mechanisms:",
        "\u2022 Simple Diffusion: Non-specific movement of small nonpolar molecules (O2, CO2, H2O) down a concentration gradient without transporter assistance.",
        "\u2022 Facilitated Diffusion: Protein carrier or channel-mediated movement down a concentration gradient without metabolic energy expenditure (e.g., glycerol uptake in Escherichia coli).",
        "2. Active Transport (Against Concentration Gradient):",
        "\u2022 Primary Active Transport (ABC Transporters): ATP-Binding Cassette systems using direct ATP hydrolysis to power periplasmic substrate capture and transmembrane translocation (histidine, maltose).",
        "\u2022 Secondary Active Transport: Driven by proton motive force or sodium ion gradients (Symport: lactose permease co-transporting lactose with H+; Antiport: sodium-proton exchangers).",
        "3. Group Translocation (Phosphotransferase System, PTS):",
        "Substrate is chemically modified (phosphorylated) as it is transported across membrane, preventing back-leakage. Phosphate cascade transfers high-energy phosphate from phosphoenolpyruvate (PEP) through Enzyme I, HPr, and Enzyme II complexes to glucose, yielding glucose-6-phosphate inside cytoplasm."
      ]
    },
    {
      "id": "bsc-mpg-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Chemolithotrophy and anaerobic respiration in bacteria. Detail microbial pathways for iron oxidation, sulfur oxidation, and methanogenesis.",
      "answer_lines": [
        "1. Concept of Chemolithotrophy: Acquisition of metabolic energy from the oxidation of reduced inorganic electron donors (H2, H2S, Fe2+, NH3) coupled to electron transport phosphorylation and autotrophic carbon dioxide fixation via the Calvin cycle or reverse TCA cycle.",
        "2. Iron-Oxidizing Bacteria (Acidithiobacillus ferrooxidans): Oxidize ferrous iron (Fe2+) to ferric iron (Fe3+) in extremely acidic mine drainage habitats (pH 1.5 to 2.5), generating proton gradients for ATP synthesis across the rusticyanin respiratory chain.",
        "3. Sulfur-Oxidizing Bacteria (Thiobacillus, Beggiatoa): Oxidize hydrogen sulfide (H2S), thiosulfate, and elemental sulfur to sulfuric acid, generating metabolic ATP and massive proton accumulation.",
        "4. Methanogenesis: Strictly anaerobic respiratory pathway carried out exclusively by Archaea (Methanobrevibacter, Methanosarcina). Carbon dioxide or acetate acts as terminal electron acceptor, reduced with hydrogen gas to methane (CH4) using unique coenzymes (Coenzyme M, Methanofuran, Coenzyme F420)."
      ]
    },
    {
      "id": "bsc-mpg-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Transposable Elements (Transposons) in bacteria. Differentiate between Insertion Sequences (IS), Composite Transposons, and Non-Composite Transposons.",
      "answer_lines": [
        "1. Definition: Discrete segments of mobile DNA that can jump from one genomic site to another within the same chromosome, plasmid, or phage genome, discovered by Barbara McClintock.",
        "2. Structural Classes in Bacteria:",
        "\u2022 Insertion Sequences (IS Elements): Simplest transposable elements (750 to 1500 base pairs). Consist of a central gene encoding Transposase flanked by short Inverted Terminal Repeats (ITRs).",
        "\u2022 Composite Transposons (e.g., Tn10, Tn5): Contain central structural genes conferring antibiotic resistance (tetracycline, kanamycin) flanked on both sides by two identical or related IS modules providing transposase machinery.",
        "\u2022 Non-Composite (Complex) Transposons (e.g., Tn3): Do not possess terminal IS elements; encode their own transposase and resolvase enzymes along with antibiotic resistance genes (such as beta-lactamase for ampicillin resistance).",
        "3. Medical Significance: Transposons drive the rapid dissemination of multi-drug resistance (MDR) plasmids across clinical bacterial pathogens."
      ]
    },
    {
      "id": "bsc-mpg-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain DNA Repair Mechanisms in bacteria: Photoreactivation, Nucleotide Excision Repair, Mismatch Repair, and the SOS Response.",
      "answer_lines": [
        "1. Photoreactivation (Light Repair): Photolyase enzyme binds to ultraviolet-induced cyclobutane pyrimidine dimers (thymine dimers). Absorption of blue light energy splits cyclobutane rings, restoring native monomeric nucleotides in situ.",
        "2. Nucleotide Excision Repair (Dark Repair, UvrABC Endonuclease): UvrA2B complex scans DNA for helix distortions; UvrC endonuclease cuts damaged strand 8 nucleotides upstream and 4-5 nucleotides downstream; UvrD helicase releases damaged 12-mer oligonucleotide; DNA Polymerase I fills gap and DNA Ligase seals nick.",
        "3. Methyl-Directed Mismatch Repair (MutS, MutL, MutH): Distinguishes parental template strand from nascent daughter strand based on adenine methylation at GATC sites by Dam methylase, removing mispaired bases from unmethylated daughter strand.",
        "4. SOS Response (Error-Prone Global Emergency Repair): Induced by severe widespread DNA damage. RecA protein becomes activated by single-stranded DNA, stimulating autocatalytic cleavage of LexA repressor protein, derepressing over 40 SOS repair genes including low-fidelity translesion DNA polymerases (DinB, UmuDC) that replicate across lesions with high mutagenesis."
      ]
    }
  ],
  "micro_physio_set2": [
    {
      "id": "bsc-mpg-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define continuous culture and state the working principle of a chemostat.",
      "answer_lines": [
        "Continuous culture maintains microorganisms in steady-state exponential growth indefinitely by continuously pumping in fresh nutrient medium containing a limiting nutrient at a constant dilution rate while simultaneously removing spent culture effluent."
      ]
    },
    {
      "id": "bsc-mpg-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the function of the sigma factor in bacterial RNA polymerase?",
      "answer_lines": [
        "The sigma factor confers promoter recognition specificity upon the RNA polymerase core enzyme, directing the holoenzyme to bind specifically to -10 (Pribnow box) and -35 promoter consensus sequences to initiate transcription."
      ]
    },
    {
      "id": "bsc-mpg-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is catabolite repression?",
      "answer_lines": [
        "A global regulatory mechanism in bacteria where the presence of a preferred rapidly metabolizable carbon source (glucose) represses the transcription of operons encoding enzymes for alternative secondary sugars (lactose, maltose)."
      ]
    },
    {
      "id": "bsc-mpg-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Ames test and state its primary mutagenicity testing principle.",
      "answer_lines": [
        "A biological assay utilizing a mutant histidine-auxotrophic strain of Salmonella typhimurium to determine whether a chemical compound is a mutagen/carcinogen by measuring the frequency of reverse mutations back to histidine prototrophy."
      ]
    },
    {
      "id": "bsc-mpg-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is an auxotroph and a prototroph?",
      "answer_lines": [
        "Prototroph: Wild-type strain capable of synthesizing all essential organic compounds from minimal media. Auxotroph: Nutritional mutant that has lost the biochemical capacity to synthesize a specific nutrient and requires its dietary supplementation."
      ]
    },
    {
      "id": "bsc-mpg-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain the Molecular Architecture and Regulation of the Tryptophan (trp) Operon in Escherichia coli. Detail the Attenuation Mechanism.",
      "answer_lines": [
        "1. Operon Organization: A repressible operon comprising regulatory gene trpR, promoter, operator, leader region (trpL) containing an attenuator, and five structural genes (trpE, trpD, trpC, trpB, trpA) synthesizing tryptophan biosynthetic enzymes.",
        "2. Repressor Control: When intracellular tryptophan is abundant, tryptophan acts as a corepressor, binding to inactive TrpR aporepressor to form an active complex that binds the operator, blocking transcription initiation.",
        "3. Attenuation Control (Fine-tuning via RNA Secondary Structure):",
        "\u2022 Leader mRNA has four complementary segments capable of forming alternative hairpin stems: 1-2 stem, 2-3 stem (antiterminator), and 3-4 stem (Rho-independent transcription terminator).",
        "\u2022 Low Tryptophan: Ribosome stalls at tandem tryptophan codons in leader peptide because charged tRNATrp is scarce. Segment 2 pairs with segment 3 to form the 2-3 antiterminator loop, allowing RNA polymerase to continue transcription of structural genes.",
        "\u2022 High Tryptophan: Ribosome translates leader rapidly without stalling, covering segment 2. Segment 3 pairs with segment 4, forming the 3-4 attenuator terminator hairpin followed by poly-U tract, which knocks RNA polymerase off the DNA template, prematurely aborting transcription."
      ]
    },
    {
      "id": "bsc-mpg-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Life Cycle of Bacteriophage Lambda. Detail the molecular genetic switch between the Lytic Cycle and Lysogenic Cycle.",
      "answer_lines": [
        "1. Structural Morphology: A temperate double-stranded DNA phage with an icosahedral capsid head and flexible non-contractile tail terminating in a single tail fiber.",
        "2. Circularization and Decision: Phage infects E. coli, injecting linear DNA; cohesive end sites (cos sites) circularize inside host cytoplasm.",
        "3. Molecular Genetic Switch:",
        "\u2022 CI Repressor Protein: Encoded by cI gene; dimers bind cooperatively to right operator (OR1, OR2, OR3), repressing lytic promoter PR while activating its own promoter PRM, maintaining the stable integrated Prophage state (Lysogeny).",
        "\u2022 Cro Protein: Product of lytic transcription; binds preferentially to OR3, repressing cI expression and driving lytic cascade (Lysis).",
        "4. Environmental Induction: Host cellular DNA damage activates RecA, stimulating CI repressor self-cleavage, derepressing lytic promoters to produce infectious virion progeny and host cell lysis."
      ]
    },
    {
      "id": "bsc-mpg-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Biological Nitrogen Fixation in detail. Describe Nitrogenase enzyme structure, sensitivity to oxygen, and protection mechanisms.",
      "answer_lines": [
        "1. Overall Biochemical Reaction: Reduction of atmospheric nitrogen gas to ammonia catalyzed by the multi-subunit enzyme complex nitrogenase:",
        "Nitrogen gas + 8 electrons + 8 protons + 16 ATP yields 2 ammonia + hydrogen gas + 16 ADP + 16 inorganic phosphate.",
        "2. Nitrogenase Enzyme Complex:",
        "\u2022 Dinitrogenase Reductase (Fe-protein): Homodimer containing a 4Fe-4S cluster that binds ATP and transfers high-potential electrons.",
        "\u2022 Dinitrogenase (MoFe-protein): Alpha-2-beta-2 tetramer harboring iron-molybdenum cofactors (FeMo-co) where N2 binds and is reduced.",
        "3. Oxygen Inactivation and Protective Adaptations:",
        "Nitrogenase is irreversibly destroyed by free molecular oxygen.",
        "\u2022 Leghemoglobin in Legume Nodules: Scavenges free oxygen, delivering it at high flux but vanishingly low free concentration to bacteroid respiration.",
        "\u2022 Heterocysts in Cyanobacteria (Anabaena): Specialized thick-walled cells lacking oxygen-evolving Photosystem II, containing active nitrogenase."
      ]
    },
    {
      "id": "bsc-mpg-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe Bacterial Cell Division and Peptidoglycan Cell Wall Biosynthesis. Detail the roles of FtsZ, Bactoprenol, Transglycosylase, and Transpeptidase.",
      "answer_lines": [
        "1. Divisome Assembly and FtsZ Ring: Tubulin homolog FtsZ polymerizes at midcell to form a contractile Z-ring guided by the MinCDE oscillatory system, coordinating invagination of the septum.",
        "2. Peptidoglycan Monomer Synthesis in Cytoplasm: UDP-N-acetylglucosamine (UDP-GlcNAc) and UDP-N-acetylmuramic acid (UDP-MurNAc) pentapeptide are synthesized in cytoplasm.",
        "3. Lipid Carrier Translocation (Bactoprenol / Undecaprenyl Phosphate): MurNAc-pentapeptide-GlcNAc disaccharide unit is linked to membrane lipid carrier bactoprenol (Lipid II) and flipped across inner membrane to periplasm.",
        "4. Transglycosylation and Transpeptidation:",
        "\u2022 Transglycosylase incorporates disaccharide units into growing linear glycan strands.",
        "\u2022 Transpeptidase (Penicillin-Binding Protein, PBP) catalyzes peptide cross-linking between adjacent stem peptides, conferring rigid mechanical tensile strength.",
        "\u2022 Beta-lactam antibiotics (penicillin) act as structural analogs of D-alanyl-D-alanine, irreversibly inactivating transpeptidases and causing osmotic bacterial lysis."
      ]
    },
    {
      "id": "bsc-mpg-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Spontaneous vs. Induced Mutations. Describe the molecular mechanisms of Base Analogs, Alkylating Agents, Intercalating Agents, and UV Radiation.",
      "answer_lines": [
        "1. Spontaneous Mutations: Arise from endogenous cellular processes, including DNA replication polymerase slippage errors, spontaneous deamination of cytosine to uracil, and rare tautomeric shifts (amino-imino, keto-enol) causing transition mispairings.",
        "2. Chemical Mutagens:",
        "\u2022 Base Analogs (5-Bromouracil, 2-Aminopurine): 5-BU resembles thymine but readily tautomerizes to enol form, mispairing with guanine, causing AT to GC transitions.",
        "\u2022 Alkylating Agents (Ethyl Methanesulfonate, EMS): Adds ethyl/methyl groups to guanine (forming O-6-ethylguanine), which mispairs with thymine.",
        "\u2022 Intercalating Dyes (Ethidium Bromide, Acridine Orange): Flat aromatic planar molecules that slip between stacked base pairs, distorting the helix and causing single base pair insertions or deletions (frameshift mutations).",
        "3. Physical Mutagens (UV Light and Ionizing Radiations): Non-ionizing UV light (260 nm) induces cross-linking between adjacent pyrimidines, creating cyclobutane pyrimidine dimers that halt replication."
      ]
    }
  ],
  "env_sci_set1": [
    {
      "id": "bsc-es-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define an Ecosystem and name its two primary structural components.",
      "answer_lines": [
        "An ecosystem is a self-sustaining ecological unit comprising biotic community components (producers, consumers, decomposers) interacting dynamically with abiotic physical-chemical environmental factors (sunlight, temperature, soil, water)."
      ]
    },
    {
      "id": "bsc-es-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is Biomagnification? Name one persistent pollutant that bioaccumulates.",
      "answer_lines": [
        "The progressive increase in the concentration of persistent, non-biodegradable, fat-soluble chemical toxins at successively higher trophic levels of a food web. Example: Dichlorodiphenyltrichloroethane (DDT) or polychlorinated biphenyls (PCBs)."
      ]
    },
    {
      "id": "bsc-es-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the primary chemical causes of Acid Rain.",
      "answer_lines": [
        "Atmospheric emissions of sulfur dioxide (SO2) and nitrogen oxides (NOx) resulting from coal combustion and vehicle exhaust, which hydrolyze with rain moisture to form sulfuric acid (H2SO4) and nitric acid (HNO3), lowering rain pH below 5.6."
      ]
    },
    {
      "id": "bsc-es-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the difference between renewable and non-renewable energy resources?",
      "answer_lines": [
        "Renewable: Naturally replenished on a human timescale (solar, wind, hydroelectric, geothermal). Non-renewable: Finite geological reserves depleted permanently by consumption (coal, petroleum, natural gas, uranium)."
      ]
    },
    {
      "id": "bsc-es-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define Eutrophication in aquatic freshwater bodies.",
      "answer_lines": [
        "Nutrient enrichment of water bodies by agricultural runoff of nitrogen and phosphorus fertilizers, triggering explosive algal blooms followed by microbial decomposition that severely depletes dissolved oxygen (hypoxia), suffocating fish fauna."
      ]
    },
    {
      "id": "bsc-es-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Air Pollution. Detail criteria air pollutants, photochemical smog formation, health hazards, and electrostatic precipitators.",
      "answer_lines": [
        "1. Criteria Pollutants: Particulate matter (PM2.5 and PM10), sulfur dioxide, carbon monoxide, nitrogen dioxide, ground-level ozone, and lead.",
        "2. Photochemical Smog (Los Angeles Smog): Formed on warm sunny days through complex photochemical reactions between vehicle exhaust nitrogen oxides (NOx) and volatile organic compounds (VOCs). Solar UV radiation splits NO2 into NO and reactive atomic oxygen, which combines with O2 to form tropospheric ozone (O3) and peroxyacetyl nitrate (PAN), causing severe respiratory irritation, bronchial damage, and eye stinging.",
        "3. Industrial Control Equipment:",
        "\u2022 Electrostatic Precipitators (ESP): High-voltage ionization wires (-50 kV) discharge electrons to impart negative electrical charges onto passing dust particulates; grounded collecting plates attract and capture particles with over 99 percent removal efficiency.",
        "\u2022 Wet Scrubbers: Spray lime slurry into flue gas streams to neutralize acid gases (SO2), precipitating calcium sulfate sludge."
      ]
    },
    {
      "id": "bsc-es-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe Municipal Solid Waste Management (MSWM). Detail the hierarchy of waste reduction, composting, sanitary landfill engineering, and incineration.",
      "answer_lines": [
        "1. Waste Management Hierarchy: Source Reduction and Reuse > Recycling > Energy Recovery (Waste-to-Energy) > Treatment > Sanitary Landfilling.",
        "2. Sanitary Landfill Engineering: Engineered burial site lined with an impermeable composite barrier (compacted clay layer and high-density polyethylene HDPE geomembrane). Equipped with leachate collection pipes draining to wastewater treatment facilities, and vertical gas extraction wells capturing landfill methane for power generation, preventing groundwater pollution.",
        "3. Composting: Aerobic biological decomposition of segregated organic solid waste (food scraps, yard trimmings) by thermophilic bacteria and actinomycetes, converting organic matter into stabilized nutrient-rich humus fertilizer.",
        "4. Incineration (Waste-to-Energy): Controlled high-temperature combustion (850 to 1100 degrees Celsius) of dry combustible municipal solid waste, reducing volume by 90 percent while generating high-pressure steam for electrical turbine generation; equipped with baghouse filters to capture toxic dioxins."
      ]
    },
    {
      "id": "bsc-es-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Global Climate Change and the Greenhouse Effect. Detail greenhouse gases, global warming potentials, oceanic acidification, and sea-level rise.",
      "answer_lines": [
        "1. Mechanism of the Greenhouse Effect: Solar shortwave radiation passes through the atmosphere and warms the Earth's surface. The terrestrial surface re-radiates energy as longwave infrared thermal radiation. Greenhouse gases absorb and re-emit this thermal infrared radiation back to the surface, maintaining a habitable global average temperature of 15 degrees Celsius.",
        "2. Major Anthropogenic Greenhouse Gases:",
        "\u2022 Carbon Dioxide (CO2): Primary driver from fossil fuel combustion and tropical deforestation; baseline reference with Global Warming Potential (GWP) of 1.",
        "\u2022 Methane (CH4): Released from ruminant livestock enteric fermentation, flooded rice paddies, and natural gas leaks (GWP of 28 over 100 years).",
        "\u2022 Nitrous Oxide (N2O): Agricultural fertilizer application (GWP of 265).",
        "\u2022 Fluorinated Gases (HFCs, SF6): Industrial refrigerants and insulators (GWP up to 23,000).",
        "3. Environmental Consequences: Melting of polar ice sheets and thermal expansion of seawater driving global sea-level rise; elevated oceanic absorption of CO2 forming carbonic acid, driving ocean acidification that dissolves aragonite calcium carbonate shells of corals and shellfish."
      ]
    },
    {
      "id": "bsc-es-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Environmental Impact Assessment (EIA) process. Detail screening, scoping, baseline data collection, impact prediction, public hearing, and EMP.",
      "answer_lines": [
        "1. Purpose of EIA: A systematic anticipatory planning tool to identify, predict, and evaluate environmental and social impacts of proposed developmental projects prior to regulatory clearance.",
        "2. Sequential Stages of EIA:",
        "\u2022 Screening: Determines whether a project requires full comprehensive EIA, rapid EIA, or environmental exemption based on statutory project categories.",
        "\u2022 Scoping: Defines spatial boundaries, key issues, terms of reference (ToR), and significant environmental parameters to be analyzed.",
        "\u2022 Baseline Data Collection: Comprehensive monitoring of ambient air quality, water resources, noise levels, soil chemistry, terrestrial biodiversity, and socioeconomic profiles.",
        "\u2022 Impact Prediction and Evaluation: Modeling future environmental degradation during construction and operational phases.",
        "\u2022 Public Consultation and Hearing: Engaging local project-affected communities to voice grievances, socio-ecological concerns, and rehabilitation demands.",
        "\u2022 Environmental Management Plan (EMP): Outlines binding mitigation measures, effluent treatment targets, compensatory afforestation, and post-clearance compliance monitoring."
      ]
    },
    {
      "id": "bsc-es-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Discuss Water Pollution and its abatement. Detail physical, chemical, and biological water quality parameters (BOD, COD, DO), and industrial wastewater treatment.",
      "answer_lines": [
        "1. Water Quality Parameters:",
        "\u2022 Dissolved Oxygen (DO): Healthy freshwater supports 6 to 8 mg/L. Drop below 4 mg/L causes extensive fish mortality.",
        "\u2022 Biochemical Oxygen Demand (BOD): Milligrams of oxygen consumed per liter by aerobic microorganisms decomposing organic matter over 5 days at 20 degrees Celsius.",
        "\u2022 Chemical Oxygen Demand (COD): Milligrams of oxygen required to chemically oxidize all organic compounds using boiling potassium dichromate in acid; COD is always greater than BOD.",
        "2. Industrial Effluent Treatment Plant (ETP) Architecture:",
        "\u2022 Primary: Bar screens for solids, grit chambers, equalization tanks, and flash flocculation with alum/polyacrylamide.",
        "\u2022 Secondary Biological: Aerated activated sludge tanks or moving bed biofilm reactors (MBBR) where heterotrophic microbes degrade dissolved organic carbon.",
        "\u2022 Tertiary Advanced: Sand filtration, activated carbon adsorption to remove toxic color/phenols, and reverse osmosis for Zero Liquid Discharge (ZLD)."
      ]
    }
  ],
  "env_sci_set2": [
    {
      "id": "bsc-es-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the Montreal Protocol and what was its global environmental achievement?",
      "answer_lines": [
        "An international treaty adopted in 1987 that successfully phased out the production and consumption of ozone-depleting substances (chlorofluorocarbons, halons), enabling the progressive recovery of the stratospheric ozone layer."
      ]
    },
    {
      "id": "bsc-es-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define carbon footprint and carbon offset.",
      "answer_lines": [
        "Carbon footprint is the total greenhouse gas emissions (in CO2 equivalents) caused directly and indirectly by an individual, organization, or product. Carbon offset is a reduction in emissions made elsewhere (reforestation, wind farms) to compensate for a footprint."
      ]
    },
    {
      "id": "bsc-es-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What are Ramsar Sites?",
      "answer_lines": [
        "Wetlands of international ecological significance designated under the Ramsar Convention on Wetlands (1971) to ensure the conservation and sustainable utilization of aquatic habitats."
      ]
    },
    {
      "id": "bsc-es-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between point source and non-point source water pollution.",
      "answer_lines": [
        "Point source pollution enters water bodies from a single, identifiable, localized pipe or discharge outlet (industrial effluent pipe). Non-point source pollution enters diffusely over widespread geographic areas (agricultural pesticide and fertilizer runoff)."
      ]
    },
    {
      "id": "bsc-es-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the primary objectives of the Water (Prevention and Control of Pollution) Act, 1974.",
      "answer_lines": [
        "To prevent and control water pollution, maintain or restore the wholesomeness of water bodies, and establish Central and State Pollution Control Boards with statutory enforcement powers."
      ]
    },
    {
      "id": "bsc-es-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Solar Energy Technologies. Differentiate between Photovoltaic (PV) solar cells and Concentrated Solar Power (CSP) systems, and discuss energy storage.",
      "answer_lines": [
        "1. Solar Photovoltaic (PV) Technology: Exploits the photovoltaic effect in semiconductor silicon p-n junctions. Photons with energy greater than the bandgap excite valence electrons to the conduction band, generating electron-hole pairs separated by the built-in electric field, producing direct current (DC) electricity.",
        "2. Concentrated Solar Power (CSP): Utilizes parabolic trough mirrors or central receiver heliostat towers to focus direct beam sunlight onto a heat-absorbing fluid (synthetic oil or molten salts), generating high-temperature steam (400 to 600 degrees Celsius) that drives a conventional Rankine steam turbine generator.",
        "3. Thermal and Battery Energy Storage: Molten salt tanks (binary mixture of sodium and potassium nitrates) store high-temperature sensible heat during daylight hours, allowing CSP plants to dispatch electricity through nighttime peak demand hours; Lithium-ion battery packs provide rapid frequency stabilization."
      ]
    },
    {
      "id": "bsc-es-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe Electronic Waste (E-Waste) management. Detail hazardous heavy metal constituents, informal recycling hazards, and Extended Producer Responsibility (EPR).",
      "answer_lines": [
        "1. Composition of E-Waste: Discarded electronic devices containing valuable precious metals (gold, silver, copper, platinum) along with severe hazardous toxins: lead in CRT funnel glass and solder, mercury in cold-cathode fluorescent backlights, cadmium in rechargeable batteries, and brominated flame retardants (BFRs) in circuit boards.",
        "2. Informal Recycling Hazards: Unregulated crude recycling practices (acid chemical leaching over open fires, primitive solder desoldering, open burning of insulated copper wiring) release toxic polycyclic aromatic hydrocarbons, airborne lead fumes, and dioxins into surrounding air and soils.",
        "3. Extended Producer Responsibility (EPR): Environmental policy approach making electronic manufacturers legally and financially responsible for the post-consumer lifecycle collection, channelization, recycling, and safe disposal of their end-of-life electronic hardware."
      ]
    },
    {
      "id": "bsc-es-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Noise Pollution. Define decibel scale, noise limits in residential/industrial zones, physiological and psychological health impacts, and mitigation engineering.",
      "answer_lines": [
        "1. Decibel (dB) Scale: Logarithmic measurement of sound pressure level relative to the human hearing threshold of 20 micropascals: SPL = 20 * log10(P / P0).",
        "2. Permissible Ambient Noise Standards (CPCB India):",
        "\u2022 Industrial Area: 75 dB(A) daytime, 70 dB(A) nighttime.",
        "\u2022 Commercial Area: 65 dB(A) daytime, 55 dB(A) nighttime.",
        "\u2022 Residential Area: 55 dB(A) daytime, 45 dB(A) nighttime.",
        "\u2022 Silence Zone (around hospitals, schools): 50 dB(A) daytime, 40 dB(A) nighttime.",
        "3. Health Effects: Chronic exposure above 85 dB causes irreversible acoustic trauma, permanent sensorineural hearing loss, hypertension, cardiovascular vasoconstriction, sleep fragmentation, and elevated cortisol stress hormones.",
        "4. Mitigation Engineering: Acoustic dampening enclosures for industrial compressor generators, roadside vegetative green belt screens (planting dense foliage trees like neem and ashoka), and airport acoustic flight zoning."
      ]
    },
    {
      "id": "bsc-es-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Sustainable Development Goals (SDGs). Detail the concept of Circular Economy and resource recovery versus linear 'take-make-dispose' models.",
      "answer_lines": [
        "1. United Nations Sustainable Development Goals (SDGs): A collection of 17 global interlinked goals adopted in 2015 to be achieved by 2030, balancing socioeconomic prosperity with environmental protection (including SDG 6: Clean Water, SDG 7: Clean Energy, SDG 12: Responsible Consumption, SDG 13: Climate Action).",
        "2. Linear vs. Circular Economy Models:",
        "\u2022 Linear Economy ('Take-Make-Dispose'): Natural resources extracted, transformed into single-use consumer products, and dumped as toxic waste in landfills.",
        "\u2022 Circular Economy: Industrial restorative model engineered by design. Restructures material flows into closed-loop cycles where waste from one production process becomes feedstock for another.",
        "3. Core Principles of Circular Economy: Design out waste and toxic pollution; keep biological and technical materials in circulation at highest value through remanufacturing, refurbishing, and recycling; and regenerate living natural environmental systems."
      ]
    },
    {
      "id": "bsc-es-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Wildlife Protection Act, 1972 and the Forest Conservation Act, 1980 in India. Detail protected species schedules and forest land diversion regulations.",
      "answer_lines": [
        "1. Wildlife Protection Act, 1972: Primary statutory legislation for biodiversity conservation in India. Establishes legal framework for declaring National Parks and Wildlife Sanctuaries; regulates hunting, trade, and commercial possession of wild fauna and flora.",
        "\u2022 Scheduled Protection: Schedules I and II provide absolute statutory protection with stringent criminal penal sanctions for poaching (e.g., tiger, elephant, rhinoceros, blackbuck).",
        "2. Forest Conservation Act, 1980: Enacted to arrest widespread indiscriminate deforestation and diversion of pristine forest lands for non-forestry agricultural or commercial industrial projects.",
        "\u2022 Statutory Mandate: Strictly mandates that no State Government or local authority can de-reserve reserved forests or divert forest land for mining, hydro-dams, or highways without prior statutory clearance from the Central Ministry of Environment, Forest and Climate Change (MoEFCC), enforcing mandatory Compensatory Afforestation Fund (CAMPA) payments."
      ]
    }
  ],
  "botany_zoology_set1": [
    {
      "id": "bsc-bz-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the function of the casparian strip in plant root endodermis?",
      "answer_lines": [
        "A hydrophobic band of suberin and lignin deposited in the radial and transverse walls of root endodermal cells that blocks apoplastic water transport, forcing water and dissolved minerals to enter the symplast for selective membrane filtration."
      ]
    },
    {
      "id": "bsc-bz-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between open and closed vascular bundles in plant anatomy.",
      "answer_lines": [
        "Open vascular bundles possess an active layer of intrafascicular cambium between xylem and phloem, enabling secondary growth (dicot stems). Closed vascular bundles lack cambium and cannot undergo secondary growth (monocot stems)."
      ]
    },
    {
      "id": "bsc-bz-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the anatomical difference between myelinated and unmyelinated nerve fibers.",
      "answer_lines": [
        "Myelinated nerve fibers are insulated by concentric layers of myelin sheath formed by Schwann cells or oligodendrocytes, interrupted by Nodes of Ranvier for rapid saltatory conduction. Unmyelinated fibers lack thick myelin sheaths and conduct impulses much more slowly."
      ]
    },
    {
      "id": "bsc-bz-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is Kranz anatomy and in which photosynthetic plants is it found?",
      "answer_lines": [
        "A specialized leaf anatomical arrangement found in C4 plants (maize, sugarcane) where vascular bundles are surrounded by a concentric wreath of large chloroplast-rich bundle sheath cells enclosed by radiating mesophyll cells, spatially separating initial carbon fixation from the Calvin cycle."
      ]
    },
    {
      "id": "bsc-bz-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define homeothermy and poikilothermy.",
      "answer_lines": [
        "Homeotherms (endotherms: birds, mammals) maintain a stable core body temperature via internal metabolic heat generation regardless of ambient environment. Poikilotherms (ectotherms: fish, amphibians, reptiles) have body temperatures fluctuating with ambient environmental temperatures."
      ]
    },
    {
      "id": "bsc-bz-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe Secondary Growth in a Typical Dicot Stem. Detail the formation of vascular cambium, secondary xylem, secondary phloem, cork cambium (phellogen), and bark.",
      "answer_lines": [
        "1. Cambial Ring Formation: Intrafascicular cambium within vascular bundles unites with interfascicular cambium developed from medullary ray parenchyma, forming a continuous circular vascular cambium ring.",
        "2. Activity of Vascular Cambium: Cambial cells divide tangentially, cutting off secondary xylem (wood) toward the interior and secondary phloem toward the exterior. Xylem is produced at a rate 4 to 8 times faster than phloem, causing radial expansion.",
        "3. Annual Rings: Cambial activity varies seasonally; spring wood (early wood) with wide vessels and thin walls forms during spring, while autumn wood (late wood) with dense narrow vessels forms during autumn, creating distinct annual growth rings.",
        "4. Periderm and Bark Formation: Epidermis ruptures under internal expanding pressure. Sub-epidermal cortical cells dedifferentiate into cork cambium (phellogen), which cuts off dead suberized cork cells (phellem) outward and secondary cortex (phelloderm) inward. Bark comprises all tissues exterior to the vascular cambium."
      ]
    },
    {
      "id": "bsc-bz-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Histology and Contraction Mechanics of Skeletal Muscle. Detail the sarcomere structure, actin and myosin filaments, and the Sliding Filament Theory.",
      "answer_lines": [
        "1. Microscopic Architecture: Skeletal muscle consists of multinucleated cylindrical muscle fibers packed with parallel myofibrils displaying alternating isotropic (I) bands and anisotropic (A) bands.",
        "2. Sarcomere Anatomy: The functional contractile unit bounded by two Z-discs. Contains thick filaments (composed of motor protein myosin) centered at the M-line in the A-band, and thin filaments (actin, tropomyosin, troponin complex) anchored to Z-discs.",
        "3. Sliding Filament Theory (Huxley and Hanson):",
        "\u2022 Action potential triggers depolarization of sarcolemma, releasing calcium ions from sarcoplasmic reticulum into sarcoplasm.",
        "\u2022 Calcium binds to troponin C, shifting tropomyosin away from myosin-binding sites on actin.",
        "\u2022 Myosin heads hydrolyze ATP, bind to actin forming cross-bridges, and perform the power stroke, pulling thin filaments toward the center of the sarcomere.",
        "\u2022 ATP binding releases myosin head from actin; repeating cycles narrow the H-zone and I-bands, producing gross muscle contraction without filament shortening."
      ]
    },
    {
      "id": "bsc-bz-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Physiology of Urine Formation in the mammalian Nephron. Detail ultrafiltration, selective tubular reabsorption, tubular secretion, and counter-current multiplier.",
      "answer_lines": [
        "1. Glomerular Ultrafiltration: Blood enters glomerulus under high hydrostatic pressure (60 mmHg) via wide afferent arteriole. Water and small solutes filter across fenestrated endothelium, basement membrane, and podocyte slit diaphragms into Bowman's capsule, forming protein-free glomerular filtrate (180 L/day).",
        "2. Selective Tubular Reabsorption in Proximal Convoluted Tubule (PCT): Brush-border microvilli reabsorb 65 to 70 percent of filtrate: 100 percent of glucose and amino acids by sodium co-transport, along with major fractions of sodium, potassium, water, and bicarbonate.",
        "3. Counter-Current Multiplier in the Loop of Henle: Descending limb is permeable to water but impermeable to sodium chloride; ascending limb is impermeable to water and actively pumps out sodium and chloride into medullary interstitium, creating an osmotic medullary gradient up to 1200 mOsm/kg.",
        "4. Distal Tubule and Collecting Duct Regulation: Regulated by antidiuretic hormone (ADH / vasopressin, inserting aquaporin channels to concentrate urine) and aldosterone (promoting sodium reabsorption and potassium excretion)."
      ]
    },
    {
      "id": "bsc-bz-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Phloem Translocation in plants. Detail Munch's Pressure-Flow (Mass-Flow) Hypothesis and phloem loading and unloading mechanisms.",
      "answer_lines": [
        "1. Pathway of Organic Transport: Sieve tube elements accompanied by companion cells transport photosynthetically fixed sucrose from sources (mature leaves) to sinks (growing roots, fruits, tubers).",
        "2. Phloem Loading at Source: Sucrose synthesized in mesophyll cells is loaded into companion cells and sieve tubes via proton-sucrose symport transporters (requiring ATP), creating high solute concentration and lowering osmotic water potential.",
        "3. Mass Flow Generation: Water diffuses from adjacent xylem conduits into sieve tubes by osmosis, generating high turgor hydrostatic pressure at the source.",
        "4. Phloem Unloading at Sink: Sucrose is actively unloaded into sink cells and metabolized or converted into insoluble starch; water moves back into xylem, lowering hydrostatic pressure. The resulting pressure gradient drives bulk mass flow of sap from source to sink."
      ]
    },
    {
      "id": "bsc-bz-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Endocrine Regulation of Digestion in vertebrates. Detail the hormones gastrin, secretin, cholecystokinin (CCK), and gastric inhibitory peptide (GIP).",
      "answer_lines": [
        "1. Gastrin: Secreted by G-cells in pyloric stomach antrum in response to food peptides and vagal stimulation. Stimulates parietal cells to secrete hydrochloric acid (HCl) and promotes gastric motility.",
        "2. Secretin: Secreted by S-cells in duodenal mucosa upon entry of acidic chyme (pH below 4.5). Stimulates pancreatic ductal cells to secrete watery bicarbonate-rich juice, neutralizing gastric acid in duodenum.",
        "3. Cholecystokinin (CCK): Secreted by I-cells in upper small intestine triggered by fatty acids and peptides. Stimulates contraction of gallbladder to release bile into duodenum and stimulates pancreatic acinar cells to secrete digestive enzymes (amylase, lipase, trypsinogen).",
        "4. Gastric Inhibitory Peptide (GIP): Secreted by duodenal K-cells; inhibits gastric acid secretion and motility, while stimulating insulin release from pancreatic beta cells (incretin effect)."
      ]
    }
  ],
  "botany_zoology_set2": [
    {
      "id": "bsc-bz-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define stomatal index and state its botanical utility.",
      "answer_lines": [
        "The percentage proportion of stomata relative to total epidermal cells plus stomata: Stomatal Index = (S / (E + S)) * 100. It remains constant for a species regardless of leaf size, serving as a key diagnostic parameter in pharmacognosy."
      ]
    },
    {
      "id": "bsc-bz-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the function of the Juxtaglomerular Apparatus (JGA) in the kidney?",
      "answer_lines": [
        "A specialized microscopic structure composed of macula densa cells and juxtaglomerular cells that senses systemic arterial blood pressure and sodium chloride delivery, secreting Renin to activate the Renin-Angiotensin-Aldosterone System (RAAS)."
      ]
    },
    {
      "id": "bsc-bz-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What are tyloses and how do they impact wood durability?",
      "answer_lines": [
        "Balloon-like outgrowths of xylem axial parenchyma cells that penetrate into lumen cavities of inactive vessels through pits, blocking them and depositing tannins and resins, converting sapwood into decay-resistant heartwood."
      ]
    },
    {
      "id": "bsc-bz-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Differentiate between rod cells and cone cells in vertebrate retina.",
      "answer_lines": [
        "Rods contain rhodopsin pigment, operate in low light (scotopic vision), and lack color discrimination. Cones operate in bright daylight (photopic vision), contain photopsins (iodopsin), and mediate high-acuity color vision."
      ]
    },
    {
      "id": "bsc-bz-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the difference between xylem tracheids and vessels.",
      "answer_lines": [
        "Tracheids are elongated dead cells with tapering closed ends; water passes through bordered pits (found in all vascular plants). Vessels are cylindrical pipes formed by vertical fusion of vessel elements with perforated end plates (found in angiosperms)."
      ]
    },
    {
      "id": "bsc-bz-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Anomalous Secondary Growth in Plants. Detail adaptive anomalous structures in Bignonia, Boerhaavia, and Dracaena.",
      "answer_lines": [
        "1. Concept of Anomalous Growth: Variations from standard dicot secondary growth caused by unusual cambial activity or position, providing flexible tensile strength or storage capacity.",
        "2. Bignonia Stem (Fissured Xylem Cylinder): Normal cambium ring exhibits anomalous functioning; four localized arcs produce excessive phloem inward and deficient xylem, resulting in four wedge-shaped phloem furrows penetrating the secondary xylem cylinder.",
        "3. Boerhaavia Stem (Concentric Accessory Cambia): Medullary vascular bundles persist. Successive anomalous secondary cambial rings arise in the pericycle/cortex, each producing a ring of embedded vascular bundles separated by conjunctive parenchyma.",
        "4. Dracaena (Monocot Secondary Growth): Monocots generally lack secondary growth. In arborescent Dracaena, an extrastelar secondary cambium arises in outer cortex, producing secondary ground tissue externally and closed amphivasal concentric vascular bundles internally."
      ]
    },
    {
      "id": "bsc-bz-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Nerve Impulse Conduction along an axon and Transmission across a Chemical Synapse. Detail action potential phases, ion channels, and neurotransmitter exocytosis.",
      "answer_lines": [
        "1. Resting Membrane Potential: Interior of axon is negative (-70 mV) relative to extracellular fluid, maintained by sodium-potassium ATPase pump (3 Na+ pumped out, 2 K+ pumped in) and resting potassium leak channels.",
        "2. Generation of Action Potential:",
        "\u2022 Depolarization: Stimulus exceeding threshold (-55 mV) opens voltage-gated sodium channels, causing massive inward Na+ influx, driving membrane potential to +30 mV.",
        "\u2022 Repolarization: Voltage-gated sodium channels inactivate; voltage-gated potassium channels open, allowing rapid K+ efflux.",
        "\u2022 Hyperpolarization and Refractory Period: Slow closing of K+ channels temporarily dips potential below -70 mV before resting state is restored.",
        "3. Synaptic Transmission at Chemical Synapse: Arrival of action potential depolarizes axon terminal, opening voltage-gated calcium channels. Calcium influx triggers synaptic vesicles to fuse with presynaptic membrane, releasing neurotransmitter (acetylcholine) into synaptic cleft. Binding to ligand-gated postsynaptic receptors opens ion channels, propagating impulse."
      ]
    },
    {
      "id": "bsc-bz-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Cardiac Cycle and its Electrical Regulation in the mammalian heart. Detail atrial/ventricular systole, diastole, ECG wave complexes, and cardiac output.",
      "answer_lines": [
        "1. Sequential Phases of the Cardiac Cycle (Duration approximately 0.8 seconds at 72 bpm):",
        "\u2022 Joint Diastole (0.4 s): Atria and ventricles relaxed; AV valves open, blood flows passively into ventricles (70 percent filling).",
        "\u2022 Atrial Systole (0.1 s): SA node fires, atria contract, pumping remaining 30 percent of blood into ventricles.",
        "\u2022 Ventricular Systole (0.3 s): Isovolumetric contraction closes AV valves (first heart sound 'lub'); ventricular pressure exceeds aortic pressure, opening semilunar valves for rapid ejection.",
        "\u2022 Ventricular Diastole: Semilunar valves snap shut (second heart sound 'dub'), followed by isovolumetric relaxation.",
        "2. Electrocardiogram (ECG) Waves:",
        "\u2022 P wave: Atrial depolarization.",
        "\u2022 QRS complex: Rapid ventricular depolarization (masking atrial repolarization).",
        "\u2022 T wave: Ventricular repolarization.",
        "3. Cardiac Output: Stroke volume (70 mL) multiplied by heart rate (72 bpm) equals approximately 5.0 L/min."
      ]
    },
    {
      "id": "bsc-bz-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Explain Photosynthetic Light Reactions in plants: Cyclic and Non-Cyclic Photophosphorylation (Z-Scheme) and ATP synthesis by Chemiosmosis.",
      "answer_lines": [
        "1. Non-Cyclic Photophosphorylation (Z-Scheme): Involves Photosystem II (P680) and Photosystem I (P700).",
        "\u2022 Water-Splitting (Photolysis) at PSII oxygen-evolving complex generates protons, electrons, and molecular oxygen.",
        "\u2022 Excited electrons pass from P680 through pheophytin, plastoquinone (PQ), cytochrome b6f complex, and plastocyanin (PC) to PSI.",
        "\u2022 Cytochrome b6f pumps protons into the thylakoid lumen.",
        "\u2022 Light absorption at PSI excites electrons to ferredoxin; ferredoxin-NADP+ reductase reduces NADP+ to NADPH.",
        "2. Cyclic Photophosphorylation: Electrons from PSI ferredoxin loop back through cytochrome b6f to PSI, generating ATP without NADPH or O2 production.",
        "3. Chemiosmotic ATP Synthesis (Mitchell Hypothesis): Proton accumulation in thylakoid lumen drives protons through CF0-CF1 ATP synthase into the stroma, phosphorylating ADP to ATP."
      ]
    },
    {
      "id": "bsc-bz-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Physiology of Respiration and Gas Transport in mammalian blood. Detail oxygen-hemoglobin dissociation curves, Bohr effect, and carbon dioxide transport forms.",
      "answer_lines": [
        "1. Oxygen Transport: Over 98 percent transported bound to hemoglobin as oxyhemoglobin; each heme iron binds one O2 molecule cooperatively.",
        "2. Oxygen-Hemoglobin Dissociation Curve: Sigmoidal curve reflecting positive allosteric cooperativity.",
        "\u2022 Bohr Effect: Elevated partial pressure of CO2, high temperature, and acidic pH (high H+) shift the curve to the right, decreasing hemoglobin oxygen affinity and promoting oxygen unloading at active respiring tissues.",
        "3. Carbon Dioxide Transport (Three Modes):",
        "\u2022 Dissolved in plasma: 7 percent.",
        "\u2022 Carbaminohemoglobin: 23 percent bound to amino termini of globin chains.",
        "\u2022 Bicarbonate Ions (HCO3-): 70 percent. In erythrocyte cytoplasm, carbonic anhydrase converts CO2 and H2O into carbonic acid, which dissociates into H+ and HCO3-. Bicarbonate diffuses into plasma, coupled with inward chloride influx to maintain electrical neutrality (Chloride Shift / Hamburger Phenomenon)."
      ]
    }
  ],
  "ds_lab_set1": [
    {
      "id": "bsc-dsl-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Write a C function to initialize a singly linked list node.",
      "answer_lines": [
        "`struct Node* createNode(int val) { struct Node* n = (struct Node*)malloc(sizeof(struct Node)); n->data = val; n->next = NULL; return n; }`"
      ]
    },
    {
      "id": "bsc-dsl-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the condition to check if a singly linked list is circular.",
      "answer_lines": [
        "Traverse pointers; if any node's `next` equals `head`, it is circular; if a `NULL` pointer is encountered, it is linear."
      ]
    },
    {
      "id": "bsc-dsl-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Write the C syntax to push an element onto a dynamically allocated stack.",
      "answer_lines": [
        "`void push(int x) { struct Node* t = createNode(x); t->next = top; top = t; }`"
      ]
    },
    {
      "id": "bsc-dsl-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "How do you count the total number of nodes in a binary tree recursively?",
      "answer_lines": [
        "`int count(struct Node* root) { return (root == NULL) ? 0 : 1 + count(root->left) + count(root->right); }`"
      ]
    },
    {
      "id": "bsc-dsl-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the worst-case space complexity of recursive DFS.",
      "answer_lines": [
        "$O(V)$ in the worst case of a skewed linear graph where call stack holds all vertices."
      ]
    },
    {
      "id": "bsc-dsl-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Write a complete C program to implement a Singly Linked List with operations: insert at beginning, insert at end, delete node by key, and display list.",
      "answer_lines": [
        "Full C code allocating dynamic memory using `malloc`, updating pointers, handling empty list edge cases, freeing deleted node memory, and traversing list in linear time."
      ]
    },
    {
      "id": "bsc-dsl-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Write a complete C program to evaluate a Postfix mathematical expression using a Stack. Test with expression `5 3 + 8 2 - *`.",
      "answer_lines": [
        "Program parses string tokens: if operand, pushes onto integer stack; if operator, pops two operands, computes result (`op1 operator op2`), and pushes back. Evaluation of `5 3 + 8 2 - *` yields: `(5 + 3) * (8 - 2) = 8 * 6 = 48`."
      ]
    },
    {
      "id": "bsc-dsl-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Write a C program to implement Binary Search Tree (BST) insertion, search, and Inorder traversal.",
      "answer_lines": [
        "Complete C program showing recursive BST insertion: comparisons guide placement into left or right child. Search function returns pointer or NULL. Inorder traversal prints nodes in sorted non-decreasing order."
      ]
    },
    {
      "id": "bsc-dsl-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Write a C program to implement QuickSort on an array of integers and display number of swaps performed.",
      "answer_lines": [
        "C implementation of recursive QuickSort using middle or end pivot, Lomuto partitioning, tracking swap counts, and demonstrating $O(n \\log n)$ average sorting."
      ]
    },
    {
      "id": "bsc-dsl-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Write a C program to represent a graph using an Adjacency Matrix and implement Breadth-First Search (BFS) starting from vertex 0.",
      "answer_lines": [
        "Complete C program with queue ADT, visited boolean array, adjacency matrix scanning, and level-order traversal printing visited vertices."
      ]
    }
  ],
  "physics_lab_set1": [
    {
      "id": "bsc-pl-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the optical function of the glass plate tilted at $45^\\circ$ in Newton's rings experiment?",
      "answer_lines": [
        "It reflects light from the extended source downward to strike the air film at normal incidence ($90^\\circ$), while allowing reflected rays from the film to transmit upward into the microscope."
      ]
    },
    {
      "id": "bsc-pl-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the formula for refractive index of liquid using Newton's rings.",
      "answer_lines": [
        "$$\\mu = \\frac{(D_{n+p}^2 - D_n^2)_{air}}{(D_{n+p}^2 - D_n^2)_{liquid}}$$"
      ]
    },
    {
      "id": "bsc-pl-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Why is a sodium vapor lamp used in spectrometer experiments?",
      "answer_lines": [
        "It emits intense, virtually monochromatic yellow doublet light ($D_1 = 5896\\text{ \\AA}, D_2 = 5890\\text{ \\AA}$), producing sharp interference and diffraction patterns."
      ]
    },
    {
      "id": "bsc-pl-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define grating element in a diffraction experiment.",
      "answer_lines": [
        "The distance between centers of two consecutive transparent slits: $d = a + b = \\frac{2.54\\text{ cm}}{N}$ where $N$ is lines per inch."
      ]
    },
    {
      "id": "bsc-pl-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the purpose of Schuster's method in spectrometer adjustments?",
      "answer_lines": [
        "An optical focusing technique to focus the collimator and telescope for parallel light simultaneously without moving the spectrometer outside the laboratory."
      ]
    },
    {
      "id": "bsc-pl-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental determination of the wavelength of sodium light using Newton's Rings. Detail apparatus setup, formula, observations, and error calculation.",
      "answer_lines": [
        "Complete laboratory procedure: cleaning glass plate and plano-convex lens, focusing traveling microscope, recording ring diameters $D_{n+p}$ and $D_n$, plotting $D_n^2$ vs $n$, measuring radius of curvature $R$ via spherometer, and computing $\\lambda = \\frac{\\text{Slope}}{4R}$."
      ]
    },
    {
      "id": "bsc-pl-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental determination of the grating element and wavelength of light using a Diffraction Grating and Spectrometer in normal incidence.",
      "answer_lines": [
        "Laboratory procedure: leveling spectrometer prism table, setting grating for normal incidence using Schuster's method and Gauss eyepiece, measuring diffraction angles $\\theta$ for spectral orders on left and right verniers, calculating $\\lambda = \\frac{(a+b)\\sin\\theta}{n}$."
      ]
    },
    {
      "id": "bsc-pl-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experiment to determine the Cauchy constants $A$ and $B$ of a glass prism using a spectrometer: $\\mu = A + \\frac{B}{\\lambda^2}$.",
      "answer_lines": [
        "Procedure: measure angle of prism $A$ and angle of minimum deviation $D_m$ for distinct spectral lines (mercury source: violet, green, yellow), compute refractive indices $\\mu = \\frac{\\sin((A+D_m)/2)}{\\sin(A/2)}$, plot $\\mu$ vs $1/\\lambda^2$ to find intercept $A$ and slope $B$."
      ]
    },
    {
      "id": "bsc-pl-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the determination of specific rotation of sugar solution using a Laurent's Half-Shade Polarimeter.",
      "answer_lines": [
        "Procedure: zero-calibration with pure distilled water for equal illumination field, preparing sugar solutions of known concentrations (5%, 10%, 15%), measuring optical rotation angles $\\theta$, plotting $\\theta$ vs $C$, and calculating specific rotation $[\\alpha] = \\frac{\\theta}{L \\cdot C}$."
      ]
    },
    {
      "id": "bsc-pl-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the determination of the frequency of an electrically maintained tuning fork using Melde's experiment in transverse and longitudinal modes.",
      "answer_lines": [
        "Procedure: setting string under tension $T = M g$, adjusting length $L$ for resonant stationary wave loops $p$, applying formula $n = \\frac{p}{2L}\\sqrt{\\frac{T}{m}}$ (transverse) and $n = \\frac{p}{L}\\sqrt{\\frac{T}{m}}$ (longitudinal), calculating linear mass density $m$ and fork frequency."
      ]
    }
  ],
  "chem_lab_set1": [
    {
      "id": "bsc-cl-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define cell constant of a conductivity cell and write its formula.",
      "answer_lines": [
        "$$\\text{Cell Constant} = \\frac{l}{A} = \\kappa \\times R$$ where $l$ is distance between electrodes, $A$ is electrode area, $\\kappa$ is specific conductance, and $R$ is measured resistance."
      ]
    },
    {
      "id": "bsc-cl-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Why is AC current used instead of DC current in conductometric measurements?",
      "answer_lines": [
        "DC current causes electrolysis and electrode polarization (accumulation of gas bubbles and concentration gradients). High-frequency AC current alternates polarity, preventing polarization."
      ]
    },
    {
      "id": "bsc-cl-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the primary standard solution used to calibrate conductivity meters?",
      "answer_lines": [
        "Standard potassium chloride ($KCl$) solutions of precisely known concentration (typically $0.1\\text{ M}$ or $0.01\\text{ M}$) with certified specific conductance at $25^\\circ\\text{C}$."
      ]
    },
    {
      "id": "bsc-cl-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the eutectic temperature of the ice-salt freezing mixture?",
      "answer_lines": [
        "$-21.1^\\circ\\text{C}$ at $23.3\\text{ wt}\\%$ sodium chloride."
      ]
    },
    {
      "id": "bsc-cl-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the principle of CST (Critical Solution Temperature) determination for phenol-water system.",
      "answer_lines": [
        "Phenol and water are partially miscible liquids whose mutual solubility increases with temperature until a single homogeneous phase forms at the Upper Critical Solution Temperature ($66.8^\\circ\\text{C}$ at $34\\% \\text{ phenol}$)."
      ]
    },
    {
      "id": "bsc-cl-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Conductometric Titration of a mixture of Strong Acid (HCl) and Weak Acid (CH3COOH) against Strong Base (NaOH).",
      "answer_lines": [
        "Complete laboratory procedure: cell calibration with $KCl$, titration steps with standardized $0.1\\text{ M NaOH}$, plotting conductance vs volume of base. First break point indicates neutralization of $HCl$; second break point indicates complete neutralization of $CH_3COOH$."
      ]
    },
    {
      "id": "bsc-cl-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental determination of the heat of neutralization of Strong Acid (HCl) with Strong Base (NaOH) using a Dewar flask calorimeter.",
      "answer_lines": [
        "Procedure: determining water equivalent of calorimeter, mixing equal volumes of $1\\text{ N HCl}$ and $1\\text{ N NaOH}$ at initial temperature $T_1$, recording maximum temperature $T_2$, calculating heat released $Q = (m + W) C_p (T_2 - T_1)$, yielding enthalpy of neutralization $\\Delta H_{neut} \\approx -57.3\\text{ kJ/equivalent}$."
      ]
    },
    {
      "id": "bsc-cl-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental determination of the CST (Critical Solution Temperature) curve for the Phenol-Water partially miscible system.",
      "answer_lines": [
        "Procedure: preparing mixtures of varying weight fractions of phenol in water, heating in water bath until turbidity clears (miscibility temperature), cooling slowly until cloudiness reappears, plotting miscibility temperature vs composition to obtain binodal solubility curve and determine UCST."
      ]
    },
    {
      "id": "bsc-cl-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental determination of the partition (distribution) coefficient of Iodine between Carbon Tetrachloride (CCl4) and Water.",
      "answer_lines": [
        "Procedure: equilibrating iodine in two immiscible liquid layers in separating funnel, separating layers, titrating aliquots of organic layer and aqueous layer against standardized sodium thiosulfate solution using starch indicator, calculating partition coefficient $K_D = \\frac{C_{CCl_4}}{C_{H_2O}}$."
      ]
    },
    {
      "id": "bsc-cl-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the systematic qualitative analysis of a simple inorganic salt mixture containing two cations and two anions (excluding interfering radicals).",
      "answer_lines": [
        "Systematic laboratory procedure: preliminary tests (flame test, borax bead test), wet tests for acid radicals (anions: carbonate, chloride, sulfate, nitrate), group separation of basic radicals (cations: Groups I through VI using group reagents $HCl, H_2S, NH_4OH, (NH_4)_2CO_3$), and confirmatory tests."
      ]
    }
  ],
  "life_labs_set1": [
    {
      "id": "bsc-ll-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the principle of Gram Staining in microbiology.",
      "answer_lines": [
        "Differentiates bacteria based on cell wall peptidoglycan thickness: Gram-positive cells with thick peptidoglycan retain crystal violet-iodine complex (purple); Gram-negative cells with thin peptidoglycan and lipid outer membrane are decolorized by alcohol and counterstained pink by safranin."
      ]
    },
    {
      "id": "bsc-ll-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is an ocular micrometer and how is it calibrated?",
      "answer_lines": [
        "A glass disc etched with arbitrary divisions inserted into microscope eyepiece, calibrated against a stage micrometer having known precise millimeter divisions (1 division = 0.01 mm = 10 micrometers)."
      ]
    },
    {
      "id": "bsc-ll-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Name two common histological stains used in botanical sectioning.",
      "answer_lines": [
        "1. Safranin (stains lignified and suberized xylem cell walls brilliant red). 2. Fast Green (counterstains cellulosic non-lignified parenchyma cell walls green)."
      ]
    },
    {
      "id": "bsc-ll-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the clinical significance of counting White Blood Cells (Total Leukocyte Count) using a hemocytometer?",
      "answer_lines": [
        "Assesses immune and hematological status: elevated counts (leukocytosis) indicate acute bacterial infections, inflammation, or leukemia; reduced counts (leukopenia) indicate viral infections or bone marrow depression."
      ]
    },
    {
      "id": "bsc-ll-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the function of a laminar air flow chamber in sterile microbiological culture.",
      "answer_lines": [
        "Provides a sterile aseptic working workspace by passing room air through High-Efficiency Particulate Air (HEPA) filters (trapping 99.97% of particles above 0.3 micrometers) in unidirectional laminar streamlines."
      ]
    },
    {
      "id": "bsc-ll-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Step-by-Step Procedure for Gram Staining of Bacterial Smears. Detail reagents, exposure times, wash steps, and microscopic interpretation.",
      "answer_lines": [
        "1. Smear Preparation: Prepare thin bacterial smear on clean grease-free glass slide, air dry, and heat-fix by passing slide through Bunsen flame 2-3 times.",
        "2. Primary Stain: Flood smear with Crystal Violet for 1 minute; wash gently with tap water.",
        "3. Mordant: Flood with Gram's Iodine (mordant) for 1 minute to form insoluble crystal violet-iodine complex; wash gently.",
        "4. Decolorization (Critical Step): Wash with 95 percent ethanol or acetone-alcohol dropwise for 10-15 seconds until color ceases to run; rinse immediately with water.",
        "5. Counterstain: Flood with Safranin for 45 seconds; wash, blot dry with bibulous paper.",
        "6. Oil Immersion Microscopic Examination (100x): Gram-positive bacteria appear purple/violet (e.g., Staphylococcus aureus, Bacillus subtilis); Gram-negative bacteria appear pink/red (e.g., Escherichia coli)."
      ]
    },
    {
      "id": "bsc-ll-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the anatomical procedure for preparing a double-stained transverse section (T.S.) of a dicot stem (Helianthus annuus). Detail staining protocol, mounting, and tissue identification.",
      "answer_lines": [
        "1. Sectioning: Cut razor-thin transverse sections of sunflower stem using a sharp safety razor blade in water.",
        "2. Staining Sequence: Transfer thin sections into watch glass containing 1 percent Safranin for 2-3 minutes. Wash excess stain with water. Counterstain with Fast Green for 30 seconds. Dehydrate through ascending alcohol grades.",
        "3. Mounting: Mount flat section in drop of pure glycerin or DPX mountant under clean coverslip avoiding air bubbles.",
        "4. Microscopic Anatomical Identification:",
        "\u2022 Epidermis with cuticular layer and multicellular trichomes.",
        "\u2022 Collenchymatous hypodermis (angular thickening for mechanical flexural strength).",
        "\u2022 Sclerenchymatous bundle caps (hard bast) over each vascular bundle.",
        "\u2022 Open, conjoint, collateral vascular bundles arranged in a regular ring.",
        "\u2022 Large central parenchymatous pith with radiating medullary rays."
      ]
    },
    {
      "id": "bsc-ll-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental procedure for counting Red Blood Cells (RBCs) using a Hemocytometer (Neubauer Chamber). Detail dilution pipette, calculation formula, and clinical reference ranges.",
      "answer_lines": [
        "1. Blood Dilution: Draw finger-prick capillary blood up to 0.5 mark in red-bead RBC pipette. Draw Hayem's diluting fluid up to 101 mark (dilution 1:200). Mix thoroughly by rotating pipette horizontally.",
        "2. Chamber Charging: Discard first few drops. Place polished coverslip over Neubauer counting grid. Touch pipette tip to chamber edge, allowing fluid to charge grid by capillary action without flooding moats.",
        "3. Cell Counting: Allow cells to settle for 3 minutes. Under 40x objective, count erythrocyte counts across 5 medium squares (80 small squares) of the central 1 mm2 grid (four corner squares plus center square).",
        "4. Calculation Formula: Total RBCs per cubic millimeter = (Number of cells counted * Dilution factor * Chamber depth factor) / (Number of small squares counted * Volume of 1 small square) = (N * 200 * 10) / (80 * (1/400)) = N * 10,000.",
        "Normal Reference: 4.5 to 5.5 million cells/mm3 in adult males, 4.0 to 5.0 million cells/mm3 in adult females."
      ]
    },
    {
      "id": "bsc-ll-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the isolation of pure bacterial cultures using the Streak Plate Technique. Detail quadrant streaking, flaming between streaks, and colony morphology evaluation.",
      "answer_lines": [
        "1. Principle: Progressive dilution of microbial inoculum across agar surface to deposit individual isolated single bacterial cells that multiply into discrete clonal macroscopic colonies.",
        "2. Quadrant Streaking Procedure: Sterilize nichrome inoculation loop in Bunsen flame until red hot; cool in air. Dip loop into bacterial broth culture. Streak back and forth closely across Quadrant 1 on nutrient agar plate. Flame loop and cool. Rotate plate 90 degrees; drag loop 2-3 times through Quadrant 1 and streak out across Quadrant 2. Repeat for Quadrants 3 and 4 without overlapping initial streaks.",
        "3. Incubation: Incubate inverted agar plate at 37 degrees Celsius for 24 hours.",
        "4. Colony Morphology Characterization: Evaluate isolated single colonies for Size (punctiform, small, large), Shape (circular, irregular), Elevation (flat, convex, pulvinate), Margin (entire, undulate, lobate), and Pigmentation."
      ]
    },
    {
      "id": "bsc-ll-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental estimation of Dissolved Oxygen (DO) in a water sample using the Winkler Iodometric Titration Method.",
      "answer_lines": [
        "1. Principle: Dissolved oxygen oxidizes manganese(II) to higher-valent manganese hydroxide in alkaline iodide medium. Upon acidification, oxidized manganese oxidizes iodide to free iodine equivalent to original DO, which is titrated against standard sodium thiosulfate.",
        "2. Chemical Reactions and Procedure:",
        "\u2022 Collection in 300 mL BOD glass bottle without aeration bubbles.",
        "\u2022 Add 2 mL manganous sulfate and 2 mL alkali-iodide-azide reagent beneath surface.",
        "\u2022 Stopper and invert; brown precipitate indicates presence of dissolved oxygen.",
        "\u2022 Add 2 mL concentrated sulfuric acid and invert; precipitate dissolves releasing iodine.",
        "\u2022 Titrate 200 mL acidified solution against 0.025 N sodium thiosulfate until pale straw yellow; add 1 mL starch indicator (turns deep blue); titrate until colorless.",
        "3. Calculation: DO in mg/L = (Volume of thiosulfate in mL * Normality * 8 * 1000) / Volume of sample titrated."
      ]
    }
  ],
  "ds_lab_set2": [
    {
      "id": "bsc-dsl-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Write a C function to initialize a singly linked list node.",
      "answer_lines": [
        "`struct Node* createNode(int val) { struct Node* n = (struct Node*)malloc(sizeof(struct Node)); n->data = val; n->next = NULL; return n; }`"
      ]
    },
    {
      "id": "bsc-dsl-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the condition to check if a singly linked list is circular.",
      "answer_lines": [
        "Traverse pointers; if any node's `next` equals `head`, it is circular; if a `NULL` pointer is encountered, it is linear."
      ]
    },
    {
      "id": "bsc-dsl-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Write the C syntax to push an element onto a dynamically allocated stack.",
      "answer_lines": [
        "`void push(int x) { struct Node* t = createNode(x); t->next = top; top = t; }`"
      ]
    },
    {
      "id": "bsc-dsl-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "How do you count the total number of nodes in a binary tree recursively?",
      "answer_lines": [
        "`int count(struct Node* root) { return (root == NULL) ? 0 : 1 + count(root->left) + count(root->right); }`"
      ]
    },
    {
      "id": "bsc-dsl-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the worst-case space complexity of recursive DFS.",
      "answer_lines": [
        "$O(V)$ in the worst case of a skewed linear graph where call stack holds all vertices."
      ]
    },
    {
      "id": "bsc-dsl-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Write a complete C program to implement a Singly Linked List with operations: insert at beginning, insert at end, delete node by key, and display list.",
      "answer_lines": [
        "Full C code allocating dynamic memory using `malloc`, updating pointers, handling empty list edge cases, freeing deleted node memory, and traversing list in linear time."
      ]
    },
    {
      "id": "bsc-dsl-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Write a complete C program to evaluate a Postfix mathematical expression using a Stack. Test with expression `5 3 + 8 2 - *`.",
      "answer_lines": [
        "Program parses string tokens: if operand, pushes onto integer stack; if operator, pops two operands, computes result (`op1 operator op2`), and pushes back. Evaluation of `5 3 + 8 2 - *` yields: `(5 + 3) * (8 - 2) = 8 * 6 = 48`."
      ]
    },
    {
      "id": "bsc-dsl-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Write a C program to implement Binary Search Tree (BST) insertion, search, and Inorder traversal.",
      "answer_lines": [
        "Complete C program showing recursive BST insertion: comparisons guide placement into left or right child. Search function returns pointer or NULL. Inorder traversal prints nodes in sorted non-decreasing order."
      ]
    },
    {
      "id": "bsc-dsl-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Write a C program to implement QuickSort on an array of integers and display number of swaps performed.",
      "answer_lines": [
        "C implementation of recursive QuickSort using middle or end pivot, Lomuto partitioning, tracking swap counts, and demonstrating $O(n \\log n)$ average sorting."
      ]
    },
    {
      "id": "bsc-dsl-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Write a C program to represent a graph using an Adjacency Matrix and implement Breadth-First Search (BFS) starting from vertex 0.",
      "answer_lines": [
        "Complete C program with queue ADT, visited boolean array, adjacency matrix scanning, and level-order traversal printing visited vertices."
      ]
    }
  ],
  "physics_lab_set2": [
    {
      "id": "bsc-pl-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the optical function of the glass plate tilted at $45^\\circ$ in Newton's rings experiment?",
      "answer_lines": [
        "It reflects light from the extended source downward to strike the air film at normal incidence ($90^\\circ$), while allowing reflected rays from the film to transmit upward into the microscope."
      ]
    },
    {
      "id": "bsc-pl-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the formula for refractive index of liquid using Newton's rings.",
      "answer_lines": [
        "$$\\mu = \\frac{(D_{n+p}^2 - D_n^2)_{air}}{(D_{n+p}^2 - D_n^2)_{liquid}}$$"
      ]
    },
    {
      "id": "bsc-pl-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Why is a sodium vapor lamp used in spectrometer experiments?",
      "answer_lines": [
        "It emits intense, virtually monochromatic yellow doublet light ($D_1 = 5896\\text{ \\AA}, D_2 = 5890\\text{ \\AA}$), producing sharp interference and diffraction patterns."
      ]
    },
    {
      "id": "bsc-pl-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define grating element in a diffraction experiment.",
      "answer_lines": [
        "The distance between centers of two consecutive transparent slits: $d = a + b = \\frac{2.54\\text{ cm}}{N}$ where $N$ is lines per inch."
      ]
    },
    {
      "id": "bsc-pl-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the purpose of Schuster's method in spectrometer adjustments?",
      "answer_lines": [
        "An optical focusing technique to focus the collimator and telescope for parallel light simultaneously without moving the spectrometer outside the laboratory."
      ]
    },
    {
      "id": "bsc-pl-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental determination of the wavelength of sodium light using Newton's Rings. Detail apparatus setup, formula, observations, and error calculation.",
      "answer_lines": [
        "Complete laboratory procedure: cleaning glass plate and plano-convex lens, focusing traveling microscope, recording ring diameters $D_{n+p}$ and $D_n$, plotting $D_n^2$ vs $n$, measuring radius of curvature $R$ via spherometer, and computing $\\lambda = \\frac{\\text{Slope}}{4R}$."
      ]
    },
    {
      "id": "bsc-pl-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental determination of the grating element and wavelength of light using a Diffraction Grating and Spectrometer in normal incidence.",
      "answer_lines": [
        "Laboratory procedure: leveling spectrometer prism table, setting grating for normal incidence using Schuster's method and Gauss eyepiece, measuring diffraction angles $\\theta$ for spectral orders on left and right verniers, calculating $\\lambda = \\frac{(a+b)\\sin\\theta}{n}$."
      ]
    },
    {
      "id": "bsc-pl-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experiment to determine the Cauchy constants $A$ and $B$ of a glass prism using a spectrometer: $\\mu = A + \\frac{B}{\\lambda^2}$.",
      "answer_lines": [
        "Procedure: measure angle of prism $A$ and angle of minimum deviation $D_m$ for distinct spectral lines (mercury source: violet, green, yellow), compute refractive indices $\\mu = \\frac{\\sin((A+D_m)/2)}{\\sin(A/2)}$, plot $\\mu$ vs $1/\\lambda^2$ to find intercept $A$ and slope $B$."
      ]
    },
    {
      "id": "bsc-pl-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the determination of specific rotation of sugar solution using a Laurent's Half-Shade Polarimeter.",
      "answer_lines": [
        "Procedure: zero-calibration with pure distilled water for equal illumination field, preparing sugar solutions of known concentrations (5%, 10%, 15%), measuring optical rotation angles $\\theta$, plotting $\\theta$ vs $C$, and calculating specific rotation $[\\alpha] = \\frac{\\theta}{L \\cdot C}$."
      ]
    },
    {
      "id": "bsc-pl-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the determination of the frequency of an electrically maintained tuning fork using Melde's experiment in transverse and longitudinal modes.",
      "answer_lines": [
        "Procedure: setting string under tension $T = M g$, adjusting length $L$ for resonant stationary wave loops $p$, applying formula $n = \\frac{p}{2L}\\sqrt{\\frac{T}{m}}$ (transverse) and $n = \\frac{p}{L}\\sqrt{\\frac{T}{m}}$ (longitudinal), calculating linear mass density $m$ and fork frequency."
      ]
    }
  ],
  "chem_lab_set2": [
    {
      "id": "bsc-cl-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Define cell constant of a conductivity cell and write its formula.",
      "answer_lines": [
        "$$\\text{Cell Constant} = \\frac{l}{A} = \\kappa \\times R$$ where $l$ is distance between electrodes, $A$ is electrode area, $\\kappa$ is specific conductance, and $R$ is measured resistance."
      ]
    },
    {
      "id": "bsc-cl-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Why is AC current used instead of DC current in conductometric measurements?",
      "answer_lines": [
        "DC current causes electrolysis and electrode polarization (accumulation of gas bubbles and concentration gradients). High-frequency AC current alternates polarity, preventing polarization."
      ]
    },
    {
      "id": "bsc-cl-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the primary standard solution used to calibrate conductivity meters?",
      "answer_lines": [
        "Standard potassium chloride ($KCl$) solutions of precisely known concentration (typically $0.1\\text{ M}$ or $0.01\\text{ M}$) with certified specific conductance at $25^\\circ\\text{C}$."
      ]
    },
    {
      "id": "bsc-cl-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the eutectic temperature of the ice-salt freezing mixture?",
      "answer_lines": [
        "$-21.1^\\circ\\text{C}$ at $23.3\\text{ wt}\\%$ sodium chloride."
      ]
    },
    {
      "id": "bsc-cl-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the principle of CST (Critical Solution Temperature) determination for phenol-water system.",
      "answer_lines": [
        "Phenol and water are partially miscible liquids whose mutual solubility increases with temperature until a single homogeneous phase forms at the Upper Critical Solution Temperature ($66.8^\\circ\\text{C}$ at $34\\% \\text{ phenol}$)."
      ]
    },
    {
      "id": "bsc-cl-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Conductometric Titration of a mixture of Strong Acid (HCl) and Weak Acid (CH3COOH) against Strong Base (NaOH).",
      "answer_lines": [
        "Complete laboratory procedure: cell calibration with $KCl$, titration steps with standardized $0.1\\text{ M NaOH}$, plotting conductance vs volume of base. First break point indicates neutralization of $HCl$; second break point indicates complete neutralization of $CH_3COOH$."
      ]
    },
    {
      "id": "bsc-cl-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental determination of the heat of neutralization of Strong Acid (HCl) with Strong Base (NaOH) using a Dewar flask calorimeter.",
      "answer_lines": [
        "Procedure: determining water equivalent of calorimeter, mixing equal volumes of $1\\text{ N HCl}$ and $1\\text{ N NaOH}$ at initial temperature $T_1$, recording maximum temperature $T_2$, calculating heat released $Q = (m + W) C_p (T_2 - T_1)$, yielding enthalpy of neutralization $\\Delta H_{neut} \\approx -57.3\\text{ kJ/equivalent}$."
      ]
    },
    {
      "id": "bsc-cl-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental determination of the CST (Critical Solution Temperature) curve for the Phenol-Water partially miscible system.",
      "answer_lines": [
        "Procedure: preparing mixtures of varying weight fractions of phenol in water, heating in water bath until turbidity clears (miscibility temperature), cooling slowly until cloudiness reappears, plotting miscibility temperature vs composition to obtain binodal solubility curve and determine UCST."
      ]
    },
    {
      "id": "bsc-cl-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental determination of the partition (distribution) coefficient of Iodine between Carbon Tetrachloride (CCl4) and Water.",
      "answer_lines": [
        "Procedure: equilibrating iodine in two immiscible liquid layers in separating funnel, separating layers, titrating aliquots of organic layer and aqueous layer against standardized sodium thiosulfate solution using starch indicator, calculating partition coefficient $K_D = \\frac{C_{CCl_4}}{C_{H_2O}}$."
      ]
    },
    {
      "id": "bsc-cl-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the systematic qualitative analysis of a simple inorganic salt mixture containing two cations and two anions (excluding interfering radicals).",
      "answer_lines": [
        "Systematic laboratory procedure: preliminary tests (flame test, borax bead test), wet tests for acid radicals (anions: carbonate, chloride, sulfate, nitrate), group separation of basic radicals (cations: Groups I through VI using group reagents $HCl, H_2S, NH_4OH, (NH_4)_2CO_3$), and confirmatory tests."
      ]
    }
  ],
  "life_labs_set2": [
    {
      "id": "bsc-ll-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the principle of Gram Staining in microbiology.",
      "answer_lines": [
        "Differentiates bacteria based on cell wall peptidoglycan thickness: Gram-positive cells with thick peptidoglycan retain crystal violet-iodine complex (purple); Gram-negative cells with thin peptidoglycan and lipid outer membrane are decolorized by alcohol and counterstained pink by safranin."
      ]
    },
    {
      "id": "bsc-ll-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is an ocular micrometer and how is it calibrated?",
      "answer_lines": [
        "A glass disc etched with arbitrary divisions inserted into microscope eyepiece, calibrated against a stage micrometer having known precise millimeter divisions (1 division = 0.01 mm = 10 micrometers)."
      ]
    },
    {
      "id": "bsc-ll-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "Name two common histological stains used in botanical sectioning.",
      "answer_lines": [
        "1. Safranin (stains lignified and suberized xylem cell walls brilliant red). 2. Fast Green (counterstains cellulosic non-lignified parenchyma cell walls green)."
      ]
    },
    {
      "id": "bsc-ll-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "What is the clinical significance of counting White Blood Cells (Total Leukocyte Count) using a hemocytometer?",
      "answer_lines": [
        "Assesses immune and hematological status: elevated counts (leukocytosis) indicate acute bacterial infections, inflammation, or leukemia; reduced counts (leukopenia) indicate viral infections or bone marrow depression."
      ]
    },
    {
      "id": "bsc-ll-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A \u00b7 2 Marks",
      "question": "State the function of a laminar air flow chamber in sterile microbiological culture.",
      "answer_lines": [
        "Provides a sterile aseptic working workspace by passing room air through High-Efficiency Particulate Air (HEPA) filters (trapping 99.97% of particles above 0.3 micrometers) in unidirectional laminar streamlines."
      ]
    },
    {
      "id": "bsc-ll-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the Step-by-Step Procedure for Gram Staining of Bacterial Smears. Detail reagents, exposure times, wash steps, and microscopic interpretation.",
      "answer_lines": [
        "1. Smear Preparation: Prepare thin bacterial smear on clean grease-free glass slide, air dry, and heat-fix by passing slide through Bunsen flame 2-3 times.",
        "2. Primary Stain: Flood smear with Crystal Violet for 1 minute; wash gently with tap water.",
        "3. Mordant: Flood with Gram's Iodine (mordant) for 1 minute to form insoluble crystal violet-iodine complex; wash gently.",
        "4. Decolorization (Critical Step): Wash with 95 percent ethanol or acetone-alcohol dropwise for 10-15 seconds until color ceases to run; rinse immediately with water.",
        "5. Counterstain: Flood with Safranin for 45 seconds; wash, blot dry with bibulous paper.",
        "6. Oil Immersion Microscopic Examination (100x): Gram-positive bacteria appear purple/violet (e.g., Staphylococcus aureus, Bacillus subtilis); Gram-negative bacteria appear pink/red (e.g., Escherichia coli)."
      ]
    },
    {
      "id": "bsc-ll-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the anatomical procedure for preparing a double-stained transverse section (T.S.) of a dicot stem (Helianthus annuus). Detail staining protocol, mounting, and tissue identification.",
      "answer_lines": [
        "1. Sectioning: Cut razor-thin transverse sections of sunflower stem using a sharp safety razor blade in water.",
        "2. Staining Sequence: Transfer thin sections into watch glass containing 1 percent Safranin for 2-3 minutes. Wash excess stain with water. Counterstain with Fast Green for 30 seconds. Dehydrate through ascending alcohol grades.",
        "3. Mounting: Mount flat section in drop of pure glycerin or DPX mountant under clean coverslip avoiding air bubbles.",
        "4. Microscopic Anatomical Identification:",
        "\u2022 Epidermis with cuticular layer and multicellular trichomes.",
        "\u2022 Collenchymatous hypodermis (angular thickening for mechanical flexural strength).",
        "\u2022 Sclerenchymatous bundle caps (hard bast) over each vascular bundle.",
        "\u2022 Open, conjoint, collateral vascular bundles arranged in a regular ring.",
        "\u2022 Large central parenchymatous pith with radiating medullary rays."
      ]
    },
    {
      "id": "bsc-ll-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental procedure for counting Red Blood Cells (RBCs) using a Hemocytometer (Neubauer Chamber). Detail dilution pipette, calculation formula, and clinical reference ranges.",
      "answer_lines": [
        "1. Blood Dilution: Draw finger-prick capillary blood up to 0.5 mark in red-bead RBC pipette. Draw Hayem's diluting fluid up to 101 mark (dilution 1:200). Mix thoroughly by rotating pipette horizontally.",
        "2. Chamber Charging: Discard first few drops. Place polished coverslip over Neubauer counting grid. Touch pipette tip to chamber edge, allowing fluid to charge grid by capillary action without flooding moats.",
        "3. Cell Counting: Allow cells to settle for 3 minutes. Under 40x objective, count erythrocyte counts across 5 medium squares (80 small squares) of the central 1 mm2 grid (four corner squares plus center square).",
        "4. Calculation Formula: Total RBCs per cubic millimeter = (Number of cells counted * Dilution factor * Chamber depth factor) / (Number of small squares counted * Volume of 1 small square) = (N * 200 * 10) / (80 * (1/400)) = N * 10,000.",
        "Normal Reference: 4.5 to 5.5 million cells/mm3 in adult males, 4.0 to 5.0 million cells/mm3 in adult females."
      ]
    },
    {
      "id": "bsc-ll-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the isolation of pure bacterial cultures using the Streak Plate Technique. Detail quadrant streaking, flaming between streaks, and colony morphology evaluation.",
      "answer_lines": [
        "1. Principle: Progressive dilution of microbial inoculum across agar surface to deposit individual isolated single bacterial cells that multiply into discrete clonal macroscopic colonies.",
        "2. Quadrant Streaking Procedure: Sterilize nichrome inoculation loop in Bunsen flame until red hot; cool in air. Dip loop into bacterial broth culture. Streak back and forth closely across Quadrant 1 on nutrient agar plate. Flame loop and cool. Rotate plate 90 degrees; drag loop 2-3 times through Quadrant 1 and streak out across Quadrant 2. Repeat for Quadrants 3 and 4 without overlapping initial streaks.",
        "3. Incubation: Incubate inverted agar plate at 37 degrees Celsius for 24 hours.",
        "4. Colony Morphology Characterization: Evaluate isolated single colonies for Size (punctiform, small, large), Shape (circular, irregular), Elevation (flat, convex, pulvinate), Margin (entire, undulate, lobate), and Pigmentation."
      ]
    },
    {
      "id": "bsc-ll-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B \u00b7 10 Marks",
      "question": "Describe the experimental estimation of Dissolved Oxygen (DO) in a water sample using the Winkler Iodometric Titration Method.",
      "answer_lines": [
        "1. Principle: Dissolved oxygen oxidizes manganese(II) to higher-valent manganese hydroxide in alkaline iodide medium. Upon acidification, oxidized manganese oxidizes iodide to free iodine equivalent to original DO, which is titrated against standard sodium thiosulfate.",
        "2. Chemical Reactions and Procedure:",
        "\u2022 Collection in 300 mL BOD glass bottle without aeration bubbles.",
        "\u2022 Add 2 mL manganous sulfate and 2 mL alkali-iodide-azide reagent beneath surface.",
        "\u2022 Stopper and invert; brown precipitate indicates presence of dissolved oxygen.",
        "\u2022 Add 2 mL concentrated sulfuric acid and invert; precipitate dissolves releasing iodine.",
        "\u2022 Titrate 200 mL acidified solution against 0.025 N sodium thiosulfate until pale straw yellow; add 1 mL starch indicator (turns deep blue); titrate until colorless.",
        "3. Calculation: DO in mg/L = (Volume of thiosulfate in mL * Normality * 8 * 1000) / Volume of sample titrated."
      ]
    }
  ]
};

export function getBScSem2PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {
  const s = subjectName.toLowerCase();
  const setSuffix = isSet1 ? "_set1" : "_set2";

  // 1. Data Structures (Theory & Lab)
  if (s.includes("data structure") || s.includes("dsa")) {
    if (s.includes("lab")) {
      return sem2BscPapers["ds_lab" + setSuffix] || sem2BscPapers["ds_lab_set1"] || null;
    }
    return sem2BscPapers["ds" + setSuffix] || null;
  }

  // 2. Real Analysis
  if (s.includes("real analysis")) {
    return sem2BscPapers["ra" + setSuffix] || null;
  }

  // 3. Problem Solving
  if (s.includes("problem solving")) {
    return sem2BscPapers["ps" + setSuffix] || null;
  }

  // 4. Differential Equations & Geometry / Probability / Math II
  if (s.includes("differential equation") || (s.includes("mathematics") && !s.includes("botany"))) {
    return sem2BscPapers["diff_eq" + setSuffix] || null;
  }

  // 5. Mathematics II / Botany II (Hybrid: Math paper)
  if (s.includes("mathematics ii") || (s.includes("mathematics") && s.includes("botany"))) {
    return sem2BscPapers["diff_eq" + setSuffix] || null;
  }

  // 6. Statistics / Database Basics
  if (s.includes("database") || s.includes("statistics ii")) {
    return sem2BscPapers["stat_db" + setSuffix] || null;
  }

  // 7. Waves & Optics / Physics II
  if (s.includes("waves") || s.includes("optics") || (s.includes("physics ii") && !s.includes("lab"))) {
    return sem2BscPapers["waves" + setSuffix] || null;
  }
  if (s.includes("physics") && s.includes("lab")) {
    return sem2BscPapers["physics_lab" + setSuffix] || sem2BscPapers["physics_lab_set1"] || null;
  }

  // 8. Physical Chemistry II / Chemistry II
  if (s.includes("physical chemistry") || s.includes("physical & general chemistry") || (s.includes("chemistry ii") && !s.includes("lab"))) {
    return sem2BscPapers["chem" + setSuffix] || null;
  }
  if (s.includes("chemistry") && s.includes("lab")) {
    return sem2BscPapers["chem_lab" + setSuffix] || sem2BscPapers["chem_lab_set1"] || null;
  }

  // 9. Environmental Science (Strictly ZERO LaTeX)
  if (s.includes("environmental")) {
    return sem2BscPapers["env_sci" + setSuffix] || null;
  }

  // 10. Microbial Diversity of Lower Plants II (Strictly ZERO LaTeX)
  if (s.includes("microbial diversity")) {
    return sem2BscPapers["microbial_div" + setSuffix] || null;
  }

  // 11. Microbial Physiology & Genetics (Strictly ZERO LaTeX)
  if (s.includes("microbial physiology") || s.includes("physiology & genetics")) {
    return sem2BscPapers["micro_physio" + setSuffix] || null;
  }

  // 12. Biology of Chordates, Embryology & Ecology (Strictly ZERO LaTeX)
  if (s.includes("chordates") || s.includes("embryology") || s.includes("ecology")) {
    return sem2BscPapers["chordates" + setSuffix] || null;
  }

  // 13. Botany II / Zoology II (Strictly ZERO LaTeX)
  if (s.includes("botany ii") || s.includes("zoology ii")) {
    return sem2BscPapers["botany_zoology" + setSuffix] || null;
  }

  // 14. Life Science Labs (Strictly ZERO LaTeX)
  if (s.includes("botany lab") || s.includes("zoology lab") || s.includes("microbiology lab")) {
    return sem2BscPapers["life_labs" + setSuffix] || sem2BscPapers["life_labs_set1"] || null;
  }

  return null;
}
