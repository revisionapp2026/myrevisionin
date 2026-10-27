import json
import os
import sys

# Append the next subjects to build_bsc_sem2_math_cs.py

with open("scripts/build_bsc_sem2_math_cs.py", "r", encoding="utf-8") as f:
    content = f.read()

# Remove the trailing print
if 'print(f"Total units built so far: {len(data)}")' in content:
    content = content.replace('print(f"Total units built so far: {len(data)}")', "")

part2 = '''
# =========================================================================
# 4. PROBLEM SOLVING (B.Sc Math Sem 2)
# =========================================================================

add_unit(
    "bsc-ps: core concepts & principles",
    [
        "Problem Solving Algorithmic Paradigms: Structured decomposition of computational tasks; Problem definition, inputs/outputs specification, invariant identification, and state-space formulation.",
        "Asymptotic Complexity & Big-O Notation: Mathematical bounds $f(n) = \\mathcal{O}(g(n))$ iff $\\exists c > 0, n_0$ such that $0 \\le f(n) \\le c g(n)$ for all $n \\ge n_0$; Lower bound $\\Omega(g(n))$, tight bound $\\Theta(g(n))$.",
        "Divide and Conquer Framework: Decomposition into subproblems, recursive conquest, and optimal recombination; Modeled via recurrence relation $T(n) = a T(n/b) + f(n)$.",
        "Master Theorem for Divide & Conquer: Three fundamental cases comparing $f(n)$ to $n^{\\log_b a}$: Case 1 ($f(n) = \\mathcal{O}(n^{\\log_b a - \\varepsilon}) \\implies \\Theta(n^{\\log_b a})$); Case 2 ($f(n) = \\Theta(n^{\\log_b a}) \\implies \\Theta(n^{\\log_b a} \\log n)$); Case 3 ($f(n) = \\Omega(n^{\\log_b a + \\varepsilon}) \\implies \\Theta(f(n))$).",
        "Greedy Choice Property & Optimal Substructure: Locally optimal choices yielding globally optimal solutions; Proof of correctness via exchange argument (e.g. Huffman coding, Fractional Knapsack).",
        "Dynamic Programming (DP) Paradigm: Overlapping subproblems and optimal substructure; Memoization (top-down caching) vs Tabulation (bottom-up table filling); Resolves exponential recursion $\\mathcal{O}(2^n) \\to \\mathcal{O}(n)$.",
        "Backtracking & State Space Tree Exploration: Systematic depth-first traversal of decision state trees with bounding functions; Pruning infeasible branches (e.g. $N$-Queens, Subset Sum).",
        "Branch and Bound Methodology: Breadth-first or best-first state exploration utilizing heuristic lower/upper bounding functions for combinatorial optimization (e.g. Traveling Salesperson Problem).",
        "Heuristic Search & A* Algorithm: Path evaluation function $f(n) = g(n) + h(n)$ where $g(n)$ is path cost and $h(n)$ is admissible heuristic ($h(n) \\le h^*(n)$ never overestimating true cost).",
        "Correctness & Loop Invariants: Formal verification: (1) Initialization (true prior to first iteration); (2) Maintenance (if true before step $k$, remains true before $k+1$); (3) Termination (provides useful property upon loop completion)."
    ],
    [
        "Big-O Formal Definition: $|f(n)| \\le c |g(n)|$ for all $n \\ge n_0$.",
        "Master Theorem Formula: Solves $T(n) = a T(n/b) + \\mathcal{O}(n^d)$; if $d < \\log_b a \\implies \\mathcal{O}(n^{\\log_b a})$.",
        "Dynamic Programming Criteria: Requires overlapping subproblems + optimal substructure.",
        "Greedy Paradigm Requirement: Greedy choice property + optimal substructure without backtracking.",
        "Loop Invariant Three Stages: Initialization, Maintenance, Termination.",
        "Admissible Heuristic: $h(n) \\le h^*(n)$ guarantees A* optimality.",
        "Memoization vs Tabulation: Top-down recursion with cache vs bottom-up iterative table.",
        "Space-Time Trade-off: Hashing uses $\\mathcal{O}(n)$ extra space to achieve $\\mathcal{O}(1)$ average access.",
        "Recursion Tree Depth: For $T(n) = 2 T(n/2) + c n$, tree height is $\\log_2 n$, total work is $\\mathcal{O}(n \\log n)$.",
        "Exam Tip: In Master Theorem applications, always state values of $a, b, d$ and compute critical exponent $\\log_b a$ explicitly."
    ]
)

add_unit(
    "bsc-ps: theoretical formulations & modeling",
    [
        "Mathematical Modeling of Computational Problems: Translating informal human constraints into formal objective functions $\\min f(x)$ or $\\max f(x)$ subject to linear inequalities $A x \\le b, x \\ge 0$.",
        "Graph Theoretic Formulations: System modeling using graphs $G = (V, E)$; Adjacency matrix $A \\in \\{0, 1\\}^{|V| \\times |V|}$ vs adjacency list; Degree sum formula $\\sum_{v \\in V} \\deg(v) = 2 |E|$ (Handshaking Lemma).",
        "Shortest Path Formulations: Bellman-Ford recurrence: $d^{(k)}(v) = \\min(d^{(k-1)}(v), \\min_u(d^{(k-1)}(u) + w(u, v)))$; Detects negative weight cycles in $\\mathcal{O}(V E)$ time.",
        "All-Pairs Shortest Paths (Floyd-Warshall): Dynamic programming recurrence $D_{i j}^{(k)} = \\min(D_{i j}^{(k-1)}, D_{i k}^{(k-1)} + D_{k j}^{(k-1)})$ running in $\\mathcal{O}(V^3)$ time using intermediate vertex sets.",
        "Minimum Spanning Trees (MST): Cut property and Cycle property; Kruskal's algorithm ($\\\\mathcal{O}(E \\log E)$ using Disjoint Set Union-Find) vs Prim's algorithm ($\\\\mathcal{O}(E + V \\log V)$ using Fibonacci heap).",
        "Network Flow & Ford-Fulkerson Method: Flow conservation $\\sum f(u, v) = 0$ and capacity constraints $0 \\le f(u, v) \\le c(u, v)$; Max-Flow Min-Cut Theorem: Maximum network flow equals capacity of minimum cut $(S, T)$.",
        "Integer Linear Programming (ILP): Formulating NP-hard combinatorial choices via binary indicator variables $x_i \\in \\{0, 1\\}$; Linear programming relaxation provides fractional bounds.",
        "String Matching Models: Knuth-Morris-Pratt (KMP) failure function $\\pi[q]$ preprocessing pattern in $\\mathcal{O}(m)$ time to achieve deterministic linear search $\\mathcal{O}(n)$ without backward pointer resets.",
        "Probabilistic & Randomized Algorithms: Las Vegas algorithms (always correct, randomized runtime, e.g. Randomized Quicksort) vs Monte Carlo algorithms (deterministic runtime, bounded error probability, e.g. Miller-Rabin primality test).",
        "NP-Completeness & Reduction Proofs: Classes P, NP, NP-Complete, and NP-Hard; Cook-Levin Theorem proving SAT is NP-Complete; Polynomial-time Karp reduction $A \\le_P B$ proving computational intractability."
    ],
    [
        "Handshaking Lemma: $\\sum_{v \\in V} \\text{deg}(v) = 2 |E|$.",
        "Floyd-Warshall Recurrence: $D_{ij}^{(k)} = \\min(D_{ij}^{(k-1)}, D_{ik}^{(k-1)} + D_{kj}^{(k-1)})$.",
        "Max-Flow Min-Cut Equality: Value of max flow equals capacity of minimum $(S, T)$ cut.",
        "Kruskal Time Complexity: $\\mathcal{O}(E \\log E) = \\mathcal{O}(E \\log V)$ using disjoint set union with path compression.",
        "Dijkstra Condition: Requires non-negative edge weights $w(u, v) \\ge 0$.",
        "Bellman-Ford Utility: Handles negative edge weights and flags negative weight cycles.",
        "KMP Prefix Function: Computes longest proper prefix that is also a suffix: $\\pi[q] = \\max \\{k < q : P_k \\sqsupset P_q\\}$.",
        "Polynomial Reduction Rule: If $A \\le_P B$ and $A$ is NP-hard, then $B$ is NP-hard.",
        "Las Vegas vs Monte Carlo: Las Vegas guarantees correctness; Monte Carlo guarantees execution time.",
        "Exam Tip: In DP shortest path problems, define the state variable $D[i][j]$ clearly before writing the recursive minimization equation."
    ]
)

add_unit(
    "bsc-ps: analytical & computational methods",
    [
        "Numerical Root Finding Methods: Bisection method (linear convergence, error halves $\\varepsilon_{n+1} = \\varepsilon_n/2$); Regula Falsi (False Position) using linear chord interpolation.",
        "Newton-Raphson Method: Quadratic convergence scheme $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$; Error relation $\\varepsilon_{n+1} \\approx \\frac{f''(r)}{2 f'(r)} \\varepsilon_n^2$; Fails when $f'(x_n) \\approx 0$ or oscillation occurs around inflection points.",
        "Secant Method: Quasi-Newton approximation replacing analytic derivative with finite difference: $x_{n+1} = x_n - f(x_n) \\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$; Superlinear convergence order $\\alpha = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$.",
        "Iterative Linear Solvers: Gauss-Jacobi vs Gauss-Seidel relaxation for $A x = b$; Strictly diagonally dominant matrix condition $|a_{i i}| > \\sum_{j \\ne i} |a_{i j}|$ guarantees global convergence independent of initial vector.",
        "Numerical Interpolation Polynomials: Lagrange interpolating polynomial $P_n(x) = \\sum_{i=0}^n y_i L_i(x)$ where $L_i(x) = \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}$; Newton's forward and backward divided difference formulations.",
        "Numerical Quadrature Rules: Trapezoidal rule: $\\int_a^b f(x) dx \\approx \\frac{h}{2}[y_0 + 2 \\sum y_i + y_n]$ with error $\\mathcal{O}(h^2)$; Simpson's 1/3 rule: $\\frac{h}{3}[y_0 + 4 y_{odd} + 2 y_{even} + y_n]$ with error $\\mathcal{O}(h^4)$ exact for cubics.",
        "Simpson's 3/8 Rule & Romberg Integration: $\\int f dx \\approx \\frac{3h}{8}[y_0 + 3(y_1 + y_2) + 2 y_3 + \\dots + y_n]$; Romberg integration employs Richardson extrapolation to cancel lower-order discretization truncation errors.",
        "Numerical Ordinary Differential Equations: Single-step Runge-Kutta 4th order (RK4): $y_{n+1} = y_n + \\frac{h}{6}(k_1 + 2 k_2 + 2 k_3 + k_4)$ with local truncation error $\\mathcal{O}(h^5)$ and global error $\\mathcal{O}(h^4)$.",
        "Predictor-Corrector Multi-Step Schemes: Milne-Simpson and Adams-Bashforth-Moulton methods; Computes provisional predictor value before refining iteratively with implicit corrector equations.",
        "Monte Carlo Numerical Integration: Approximating multidimensional integrals $I = \\int_\\Omega f(x) dx \\approx \\text{Vol}(\\Omega) \\frac{1}{N} \\sum_{i=1}^N f(X_i)$; Error decays at rate $\\mathcal{O}(1/\\sqrt{N})$ independent of spatial dimension."
    ],
    [
        "Newton-Raphson Formula: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$; Order of convergence is 2.",
        "Secant Method Formula: Replaces $f'$ with slope between $(x_{n-1}, x_n)$; Convergence order $\\approx 1.618$.",
        "Diagonal Dominance: $|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ ensures Gauss-Seidel converges.",
        "Trapezoidal Rule: $\\int_a^b f(x) dx = \\frac{h}{2}[y_0 + 2(y_1 + \\dots + y_{n-1}) + y_n]$.",
        "Simpson 1/3 Rule: $\\frac{h}{3}[\\text{Ends} + 4(\\text{Odd}) + 2(\\text{Even})]$; requires even number of intervals.",
        "Simpson 3/8 Rule: Requires number of subintervals to be a multiple of 3.",
        "RK4 Slopes: $k_1 = f(x_n, y_n)$, $k_2 = f(x_n + h/2, y_n + h k_1/2)$, $k_3 = f(x_n + h/2, y_n + h k_2/2)$, $k_4 = f(x_n + h, y_n + h k_3)$.",
        "Lagrange Cardinal Basis: $L_i(x_j) = 1$ if $i = j$, and $0$ if $i \\ne j$.",
        "Monte Carlo Convergence: Rate is $\\mathcal{O}(1/\\sqrt{N})$; immune to curse of dimensionality.",
        "Exam Tip: In Simpson's 1/3 rule, always verify that $n$ (the number of subintervals) is strictly even; if $n$ is odd, the formula cannot be used."
    ]
)

add_unit(
    "bsc-ps: practical engineering & industrial applications",
    [
        "Resource Scheduling & Allocation: Task assignment models, bipartite matching, Kuhn-Munkres (Hungarian) algorithm running in $\\mathcal{O}(n^3)$ for minimum cost bipartite matching.",
        "Critical Path Method (CPM) & PERT: Project network scheduling; Earliest Start (ES), Latest Finish (LF), and Total Float $TF = LF - ES - t$; Critical path is longest path with zero total float.",
        "Inventory Optimization & EOQ Model: Economic Order Quantity formula $Q^* = \\sqrt{\\frac{2 D S}{H}}$ balancing ordering costs $S$ against unit holding costs $H$; Safety stock modeling under lead-time demand variability.",
        "Supply Chain Network Optimization: Multi-echelon transportation linear programming; Initial basic feasible solutions via Vogel's Approximation Method (VAM), optimal testing via MODI (Modified Distribution) method.",
        "Database Indexing & B+ Trees: Disk-based indexing balancing search $T = \\mathcal{O}(\\log_B N)$; B+ tree keeps all records in leaves linked sequentially for efficient range queries.",
        "Cache Replacement Algorithms: Least Recently Used (LRU) implemented via doubly linked list + hash map in $\\mathcal{O}(1)$ time; Belady's optimal caching benchmark and Belady's anomaly in FIFO.",
        "Fast Fourier Transform (FFT) in Signal Processing: Cooley-Tukey radix-2 divide-and-conquer algorithm reducing Discrete Fourier Transform complexity from $\\mathcal{O}(N^2)$ to $\\mathcal{O}(N \\log N)$.",
        "Data Compression & Huffman Coding: Prefix-free variable length character encoding; Construction of optimal binary trie via min-priority queue yielding entropy-approaching compression.",
        "Cryptography & RSA Key Generation: Modular arithmetic, Fermat's Little Theorem $a^{p-1} \\equiv 1 \\pmod p$, Euler's totient function $\\phi(n) = (p-1)(q-1)$, public key exponent $e$, private decryption key $d \\equiv e^{-1} \\pmod{\\phi(n)}$.",
        "PageRank Matrix Eigenvector Algorithm: Random walk model of web hyperlink graph; Stationary probability distribution solved via Power Iteration: $p^{(k+1)} = d M p^{(k)} + \\frac{1-d}{N} \\mathbf{1}$."
    ],
    [
        "EOQ Equation: $Q^* = \\sqrt{\\frac{2 D S}{H}}$.",
        "Critical Path Definition: Longest duration sequence through activity network; zero slack/float.",
        "Hungarian Algorithm Complexity: $\\mathcal{O}(V^3)$ for optimal bipartite assignment.",
        "LRU Implementation: Doubly linked list for order + hash map for $\\mathcal{O}(1)$ lookup and splice.",
        "Cooley-Tukey FFT Speedup: Reduces complexity from $\\mathcal{O}(N^2)$ to $\\mathcal{O}(N \\log N)$.",
        "Huffman Code Property: Prefix-free; no code word is a prefix of another code word.",
        "RSA Key Math: $e \\cdot d \\equiv 1 \\pmod{\\phi(n)}$ where $\\phi(n) = (p-1)(q-1)$.",
        "PageRank Formula: $R(u) = \\frac{1-d}{N} + d \\sum_{v \\in B_u} \\frac{R(v)}{L(v)}$ (damping factor $d \\approx 0.85$).",
        "Vogel Approximation: Computes row/column penalties to construct initial transportation basis.",
        "Exam Tip: In CPM problems, forward pass computes Earliest Start (ES) using $\\max$, and backward pass computes Latest Finish (LF) using $\\min$."
    ]
)

add_unit(
    "bsc-ps: modern trends, case studies & problem solving",
    [
        "Machine Learning Optimization Algorithms: Gradient descent updates $\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)$; Stochastic Gradient Descent (SGD), Momentum, and Adam adaptive moment estimation ($m_t, v_t$).",
        "Distributed MapReduce Computing Paradigm: Distributed data processing primitives: Map $(k_1, v_1) \\to \\text{list}(k_2, v_2)$, Shuffle/Sort by key, and Reduce $(k_2, \\text{list}(v_2)) \\to \\text{list}(v_3)$; Scalable over commodity clusters.",
        "MapReduce Matrix Multiplication: Two-phase MapReduce formulating dense matrix product $C = A B$ over petabyte datasets without single-node memory saturation.",
        "Consistent Hashing in Distributed Key-Value Stores: Distributed hash ring mapping keys and server nodes to circle $[0, 2^{32}-1]$; Node joins/leaves relocate only $K/N$ keys on average, preventing cache stampedes.",
        "Blockchain Consensus & Distributed Ledger Proof-of-Work: Nakamoto consensus requiring partial hash collision $H(\\text{block} \\parallel \\text{nonce}) < \\text{Target}$; Byzantine Fault Tolerance under asynchronous networks.",
        "Deep Learning Backpropagation Algorithm: Efficient reverse-mode automatic differentiation applying chain rule across computational graphs to compute $\\frac{\\partial L}{\\partial W^{[l]}}$.",
        "Natural Language Processing & Attention Mechanism: Scaled Dot-Product Attention: $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$; Foundation of modern Transformer neural architectures.",
        "Reinforcement Learning Bellman Optimality: State-value recurrence $V^*(s) = \\max_a \\left[R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) V^*(s')\\right]$; Q-learning off-policy temporal difference updates.",
        "Genetic Algorithms & Evolutionary Optimization: Metaheuristic population optimization: selection (roulette wheel, tournament), crossover (single-point, uniform), mutation, and elitist survival strategies.",
        "Case Study Synthesis & Exam Strategy: Answer case study questions by defining objective functions, explaining algorithmic trade-offs (space vs time vs scalability), and providing concrete pseudo-code."
    ],
    [
        "Gradient Descent Step: $\\theta_{t+1} = \\theta_t - \\eta \\nabla J(\\theta_t)$.",
        "MapReduce Pipeline: Map $\\to$ Shuffle & Sort $\\to$ Reduce.",
        "Consistent Hashing Benefit: Only $1/N$ keys remapped when adding/removing a cluster node.",
        "Scaled Dot-Product Attention: $\\text{Softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$.",
        "Bellman Optimality Equation: $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s'|s, a) \\max_{a'} Q^*(s', a')$.",
        "Adam Optimizer Core: Tracks first moment (mean) and second moment (uncentered variance) of gradients.",
        "Proof-of-Work Condition: $\\text{SHA256}(\\text{Block} + \\text{Nonce}) < \\text{Target}$.",
        "Backpropagation Mechanism: Reverse topological evaluation of partial derivatives via chain rule.",
        "Exploration vs Exploitation: $\\varepsilon$-greedy policy balances random search against current best action.",
        "Exam Tip: In transformer attention questions, explain that scaling factor $\\sqrt{d_k}$ prevents gradient vanishing in softmax for large dimensions."
    ]
)
'''

content += part2

with open("scripts/build_bsc_sem2_math_cs.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Appended Subject 4 (Problem Solving).")
