import json, os

with open('scripts/sem3_bsc_computing_math_data.json', 'r', encoding='utf-8') as f:
    raw = json.load(f)

data = {}
for k, v in raw.items():
    sub, num = k.split(":::")
    data[(sub, int(num))] = v

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    data[(sub, num)] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 7. PROBLEM SOLVING (B.Sc)
# =========================================================================
add("Problem Solving", 1, "Problem Solving: Core Concepts & Principles", [
    "Cognitive Foundations of Problem Solving: Newell and Simon's problem space theory; Defining problem state, initial state, goal state, and intermediate state transitions; Decomposition of complex unstructured challenges into tractable sub-problems.",
    "Algorithmic Thinking vs Heuristic Strategies: Deterministic algorithms (guaranteed exact termination and optimal solution) vs Heuristics (rules of thumb, greedy choices, approximation algorithms trading optimality for computational feasibility).",
    "Computational Problem Representation: Formulating real-world problems as formal graph topologies, finite state automata, linear programming models, or decision trees; Identifying input boundaries and constraint invariants.",
    "Top-Down Stepwise Refinement: Structured programming methodology; Modular breakdown of high-level task specifications into progressively detailed sub-routines; Single-entry, single-exit control flows.",
    "Abstraction & Pattern Recognition: Abstracting extraneous details to isolate core mathematical invariants; Identifying isomorphic problems across disparate domains (e.g. mapping circuit network flow to bipartite matching).",
    "Flowcharts & Pseudocode Standardization: ISO flowchart symbols: Oval (terminator), Rectangle (process), Diamond (decision branch), Parallelogram (I/O); Structured pseudocode conventions ensuring unambiguous human and machine translation.",
    "Inductive & Deductive Reasoning: Inductive reasoning: Formulating general principles from empirical observations and pattern synthesis; Deductive reasoning: Deriving specific valid conclusions from established axioms and mathematical premises.",
    "Verification vs Validation: Verification: 'Are we solving the problem right?' (checking algorithmic correctness against formal specification); Validation: 'Are we solving the right problem?' (confirming algorithm satisfies true user enterprise requirements).",
    "Error Categories in Algorithmic Problem Solving: Conceptual formulation errors, logical boundary condition errors (off-by-one errors, infinite loops), numerical precision errors, and unexpected edge case inputs.",
    "University Examination Strategy: Draw a standardized ISO flowchart for a binary search or sorting algorithm, formulate an initial-to-goal state problem space representation, and compare algorithmic vs heuristic methodologies."
], [
    "Problem Space Topology: Defined formally by triple $(S_0, O, S_G)$ representing initial state, transition operators, and target goal states.",
    "Deterministic Algorithm Bound: Guarantees correct exact solution in finite execution steps for all valid inputs in domain.",
    "Heuristic Approximation: Employs domain knowledge to locate satisfactory near-optimal solutions rapidly without formal optimality proof.",
    "Stepwise Refinement Principle: Decomposes monolithic complex tasks hierarchically into progressively lower-level manageable modules.",
    "ISO Decision Diamond: Diverges into two or more alternative execution paths based on boolean condition evaluation.",
    "Off-By-One Bug (OBOE): Critical logic error occurring at boundary iteration limits (e.g. `<= n` instead of `< n`).",
    "Algorithmic Invariant: A logical property that remains strictly true before and after each iteration of a processing loop.",
    "Verification vs Validation: Verification checks adherence to technical specs; Validation assesses fulfillment of real-world needs.",
    "Isomorphic Equivalence: Translating a novel domain challenge into an established classical algorithm (e.g. shortest path).",
    "Exam Gold Tip: Always state the loop invariant explicitly when explaining the correctness of iterative algorithms in university exams."
])

add("Problem Solving", 2, "Problem Solving: Theoretical Formulations & Modeling", [
    "Formal Problem Formulation & State Spaces: Representing problems as state-space graphs $G = (V, E)$; Nodes representing discrete configurations, directed edges representing valid operator transitions with associated path costs $c(u, v)$.",
    "Uninformed (Blind) Search Strategies: Breadth-First Search (BFS: FIFO queue, complete, optimal for unweighted graphs, space $O(b^d)$) and Depth-First Search (DFS: LIFO stack, space $O(b m)$, incomplete on infinite graphs); Depth-Limited Search and Iterative Deepening (IDDFS).",
    "Informed (Heuristic) Search & A* Algorithm: Incorporating evaluation function $f(n) = g(n) + h(n)$; $g(n)$ is exact path cost from start to node $n$; $h(n)$ is heuristic estimate of cost from $n$ to goal; Admissibility criterion: $h(n) \\le h^*(n)$ (never overestimates).",
    "Consistency (Monotonicity) of Heuristics: Heuristic $h(n)$ is consistent if for every node $n$ and successor $n'$: $h(n) \\le c(n, a, n') + h(n')$ (triangle inequality); Consistency guarantees that $f(n)$ values along any path are monotonically non-decreasing, ensuring A* finds optimal path without reopening closed nodes.",
    "Adversarial Search & Minimax Theorem: Game theory formulation for two-player zero-sum deterministic games; Minimax value computation: Maximizer seeks highest payoff, Minimizer seeks lowest payoff; Alpha-Beta Pruning pruning branches that cannot influence final decision.",
    "Alpha-Beta Pruning Efficiency: Alpha ($\\alpha$): Best value Maximizer can guarantee so far; Beta ($\\beta$): Best value Minimizer can guarantee so far; Pruning condition: $\\beta \\le \\alpha$; Reduces effective branching factor from $b$ to $\\sqrt{b}$ in optimal move ordering.",
    "Constraint Satisfaction Problems (CSP): Formalism: Variables $X = \\{X_1, \\dots, X_n\\}$, Domains $D = \\{D_1, \\dots, D_n\\}$, and Constraints $C = \\{C_1, \\dots, C_m\\}$; Constraint graph representation; Backtracking search with Forward Checking.",
    "Arc Consistency & AC-3 Algorithm: Variable $X_i$ is arc-consistent with $X_j$ if for every value $x \\in D_i$, there exists allowed value $y \\in D_j$; AC-3 algorithm iteratively propagating domain reductions; Minimum Remaining Values (MRV) and Degree heuristic variable ordering.",
    "Mathematical Induction for Algorithmic Proofs: Proving algorithm correctness via induction: Base case $n = 1$, Inductive hypothesis assuming truth for $n = k$, and Inductive step establishing truth for $n = k + 1$; Proving correctness of recursive algorithms.",
    "University Examination Strategy: Execute A* search step-by-step on a given graph showing $f, g, h$ calculations, perform Alpha-Beta pruning on a game tree indicating pruned nodes, and solve a 4-Queens problem using CSP backtracking."
], [
    "A* Admissibility Rule: An admissible heuristic never overestimates the true cost to reach the goal, guaranteeing optimal solution in tree search.",
    "Heuristic Consistency: Monotonicity condition $h(n) \\le c(n, n') + h(n')$ guarantees optimal path discovery in graph search without reopening.",
    "Alpha-Beta Pruning Condition: Cutoff occurs whenever $\\beta \\le \\alpha$, eliminating redundant subtrees without altering minimax outcome.",
    "IDDFS Space-Time Balance: Combines minimal memory footprint of DFS ($O(bd)$) with completeness and shallow-path optimality of BFS.",
    "CSP Formulation: Consists of variables, discrete domains, and explicit relational constraints prohibiting invalid combinations.",
    "MRV Heuristic (Fail-First): Selects the variable with the fewest legal values remaining in its domain to fail quickly if unfeasible.",
    "Degree Heuristic: Selects the variable involved in the largest number of constraints with other unassigned variables to maximize pruning.",
    "AC-3 Time Complexity: Operates in $O(c d^3)$ worst-case time, where $c$ is the number of constraint arcs and $d$ is maximum domain size.",
    "Zero-Sum Game Property: Total utility across players is constant; one player's gain is exactly equal to the opposing player's loss.",
    "Exam Gold Tip: Always draw the open list (priority queue) and closed list (explored set) explicitly at each step of an A* execution."
])

add("Problem Solving", 3, "Problem Solving: Analytical & Computational Methods", [
    "Asymptotic Notations & Complexity Analysis: Formal definitions: Big-O ($f(n) = O(g(n)) \\iff f(n) \\le c \\cdot g(n)$ for $n \\ge n_0$; upper bound), Big-Omega ($\\Omega(g(n))$; lower bound), and Big-Theta ($\\Theta(g(n))$; tight asymptotic bound); Little-o and Little-omega.",
    "Recurrence Relations & Master Theorem: Formulating divide-and-conquer runtimes: $T(n) = a T(n/b) + f(n)$; Master Theorem cases: Case 1 ($f(n) = O(n^{\\log_b a - \\epsilon}) \\implies T(n) = \\Theta(n^{\\log_b a})$), Case 2 ($f(n) = \\Theta(n^{\\log_b a} \\log^k n) \\implies T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n)$), Case 3 ($f(n) = \\Omega(n^{\\log_b a + \\epsilon})$).",
    "Divide-and-Conquer Paradigm: Splitting problem into smaller non-overlapping subproblems, solving recursively, and combining solutions; Merge Sort ($T(n) = 2T(n/2) + O(n) \\implies \\Theta(n \\log n)$) and Quick Sort ($O(n \\log n)$ average, $O(n^2)$ worst case).",
    "Greedy Algorithmic Strategy: Making locally optimal choice at each step with hope of finding global optimum; Greedy-choice property and Optimal substructure property; Fractional Knapsack problem ($O(n \\log n)$), Huffman Coding, and Minimum Spanning Trees (Kruskal and Prim).",
    "Dynamic Programming (DP) Paradigm: Applicable when subproblems overlap and problem exhibits optimal substructure; Memoization (top-down with cache) vs Tabulation (bottom-up table fill); 0/1 Knapsack problem ($O(n W)$ pseudo-polynomial time), Longest Common Subsequence (LCS).",
    "Graph Traversal & Shortest Path Algorithms: Dijkstra's single-source shortest path algorithm (non-negative edge weights; $O((V + E) \\log V)$ using min-heap); Bellman-Ford algorithm (detects negative weight cycles; $O(V \\cdot E)$); Floyd-Warshall all-pairs shortest paths ($O(V^3)$ DP).",
    "Minimum Spanning Tree (MST) Algorithms: Kruskal's algorithm: Sorting edges by weight, adding greedily using Disjoint Set Union (DSU / Union-Find with path compression and union by rank; $O(E \\log E)$); Prim's algorithm: Growing tree from root via priority queue.",
    "String Matching Computational Algorithms: Naive string search ($O((N - M + 1) M)$); Knuth-Morris-Pratt (KMP) algorithm utilizing prefix function $\\pi$ table to eliminate backtrack ($O(N + M)$ time); Rabin-Karp algorithm using rolling polynomial hashing ($O(N + M)$ average).",
    "Computational Intractability & NP-Completeness: Classes P (polynomial time solvable) and NP (polynomial time verifiable); NP-Hard and NP-Complete definitions; Cook-Levin Theorem (SAT is NP-Complete); Polynomial-time reduction ($A \\le_p B$); Traveling Salesperson Problem (TSP).",
    "University Examination Strategy: Solve a recurrence relation using the Master Theorem, execute Dijkstra's algorithm step-by-step recording distance vectors, construct an optimal 0/1 knapsack DP matrix, and prove polynomial reduction of a known NP-Complete problem."
], [
    "Big-O Formal Definition: $f(n) \\le c \\cdot g(n)$ for all $n \\ge n_0$, characterizing asymptotic upper bound growth rate.",
    "Master Theorem Case 2: If $f(n) = \\Theta(n^{\\log_b a})$, then $T(n) = \\Theta(n^{\\log_b a} \\log n)$ (e.g. Merge Sort).",
    "Greedy Choice Property: A globally optimal solution can be reached by making a locally optimal choice without backtracking.",
    "DP Overlapping Subproblems: Solves each distinct subproblem exactly once and stores solution in lookup table to avoid exponential recomputation.",
    "0/1 Knapsack DP State: $dp[i][w] = \\max(dp[i-1][w], \\text{val}[i] + dp[i-1][w - \\text{wt}[i]])$, running in $O(n W)$ time.",
    "Dijkstra Negative Edge Trap: Fails when edges have negative weights because visited nodes are assumed finalized; requires Bellman-Ford.",
    "Union-Find Path Compression: Flattens tree structure during `find` queries, achieving near-constant amortized inverse Ackermann time $\\alpha(V)$.",
    "KMP Failure Function: $\\pi[q]$ stores length of longest proper prefix of pattern that is also a suffix, enabling linear scan of text.",
    "NP-Complete Criteria: A problem $X$ is NP-Complete iff $X \\in \\text{NP}$ and every problem $Y \\in \\text{NP}$ is polynomial-time reducible to $X$.",
    "Exam Gold Tip: Always explain the difference between polynomial time ($O(n^k)$) and pseudo-polynomial time ($O(n W)$ where $W$ is numerical magnitude)."
])

add("Problem Solving", 4, "Problem Solving: Practical Engineering & Industrial Applications", [
    "Industrial Resource Scheduling & Operations Research: Job-shop scheduling, machine loading, and assembly line balancing; Gantt chart modeling; Critical Path Method (CPM) and Program Evaluation and Review Technique (PERT); Earliest Start/Finish, Slack time, and critical path identification.",
    "Network Flow Optimization in Logistics: Maximum flow formulation: Directed network with source $s$, sink $t$, and edge capacities $c(u, v)$; Ford-Fulkerson method and Edmonds-Karp algorithm ($O(V E^2)$ utilizing BFS for shortest augmenting paths); Max-Flow Min-Cut Theorem.",
    "Supply Chain & Facility Location Modeling: Formulating capacitated facility location problem as mixed-integer linear programming (MILP); Vehicle Routing Problem (VRP) heuristics; Just-In-Time (JIT) inventory optimization and Economic Order Quantity (EOQ = $\\sqrt{2 D S / H}$).",
    "Database Query Optimization Engine: Relational algebraic query tree transformation; Pushing selection $\\sigma$ and projection $\\pi$ down the tree to minimize intermediate relation sizes; Join order selection using dynamic programming (System-R optimizer).",
    "Data Compression Engineering: Lossless compression: Shannon-Fano and Huffman coding (prefix-free variable length codes based on symbol probabilities; optimal entropy coding); Lempel-Ziv-Welch (LZW) dictionary-based compression in GIF and ZIP archives.",
    "Computer Network Routing Protocols: Link-State routing (Open Shortest Path First OSPF utilizing Dijkstra's algorithm across distributed topology databases); Distance-Vector routing (Routing Information Protocol RIP utilizing distributed Bellman-Ford; Count-to-Infinity problem and Split Horizon).",
    "Financial Risk Modeling & Portfolio Optimization: Harry Markowitz Modern Portfolio Theory; Mean-variance optimization: Minimizing portfolio risk $\\sigma_p^2 = w^T \\Sigma w$ subject to target return $w^T \\mu = R$; Efficient frontier; Value at Risk (VaR) Monte Carlo simulation.",
    "Robotics Kinematics & Motion Planning: Forward and inverse kinematics; Configuration space (C-space) obstacles; Path planning algorithms: Probabilistic Roadmaps (PRM) and Rapidly-exploring Random Trees (RRT) for high-dimensional collision-free navigation.",
    "Software Refactoring & Technical Debt Remediation: Identifying design code smells; Automated dependency analysis; Refactoring monolithic legacy enterprise architectures into microservices utilizing Domain-Driven Design (DDD) bounded contexts.",
    "University Examination Strategy: Calculate critical path and float times on a project network diagram, apply the Edmonds-Karp algorithm to find maximum flow and minimum cut, and construct an optimal Huffman coding tree."
], [
    "Critical Path Definition: The longest sequence of dependent activities through a project network; exhibits zero total slack/float time.",
    "Max-Flow Min-Cut Theorem: The maximum volume of flow from source to sink equals the minimum capacity among all cuts separating $s$ and $t$.",
    "Edmonds-Karp Augmentation: Employs BFS to select the augmenting path with fewest edges, guaranteeing termination in $O(V E^2)$ time.",
    "EOQ Mathematical Formula: $EOQ = \\sqrt{\\frac{2 D S}{H}}$, balancing annual order placement costs against inventory holding costs.",
    "Relational Pushdown Rule: Pushing selection operators below joins reduces Cartesian product tuples before costly join operations execute.",
    "Huffman Prefix-Free Rule: No encoded symbol bitstring is a prefix of any other code word, enabling instantaneous unambiguous decoding.",
    "OSPF Link-State Protocol: Each router floods local link states and independently constructs network topology to compute shortest paths.",
    "Markowitz Efficient Frontier: Set of optimal investment portfolios offering highest expected return for a given level of risk/variance.",
    "RRT Exploration Bias: Rapidly-exploring Random Trees grow towards unexplored regions of configuration space by sampling random coordinates.",
    "Industrial Exam Tip: In network flow problems, always verify flow conservation: total flow entering each intermediate node must equal total flow exiting."
])

add("Problem Solving", 5, "Problem Solving: Modern Trends, Case Studies & Problem Solving", [
    "Machine Learning Driven Problem Solving: Supervised learning (regression, classification), Unsupervised learning (clustering, dimensionality reduction), and Reinforcement Learning (Markov Decision Processes MDP, Q-learning, policy gradients); Shift from rule-based to data-driven paradigms.",
    "Scalable Distributed Big Data Processing: MapReduce programming paradigm (Google): Parallel `Map` step filtering/transforming data, distributed shuffle/sort, and `Reduce` step aggregating values; Apache Spark in-memory Resilient Distributed Datasets (RDDs).",
    "Bio-Inspired & Evolutionary Optimization: Genetic Algorithms (GAs): Population initialization, fitness evaluation, selection (roulette wheel, tournament), crossover (single-point, uniform), and mutation; Particle Swarm Optimization (PSO) and Ant Colony Optimization (ACO).",
    "Case Study: Urban Intelligent Traffic Routing: Sensor data ingestion (GPS, inductive loops); Dynamic graph weight updating; Real-time shortest path recalculation (A* with landmark heuristics / Contraction Hierarchies); Congestion avoidance.",
    "Case Study: Automated High-Frequency Algorithmic Trading: Ultra-low latency limit order book (LOB) matching; Market making and statistical arbitrage; Microsecond tick-to-trade execution using FPGAs and lock-free kernel-bypass network architectures.",
    "Case Study: Genomic Sequence Alignment at Petabyte Scale: Next-Generation Sequencing (NGS) read mapping; Burrows-Wheeler Transform (BWT) and FM-Index data structures enabling $O(m)$ exact substring search across human reference genome (3 billion base pairs).",
    "Case Study: Fault-Tolerant Distributed Consensus: Byzantine Generals Problem; Raft consensus algorithm: Leader election, log replication, and safety invariants; Paxos protocol; Ensuring state machine replication consistency across unreliable networks.",
    "Quantum Computing Problem Solving Frontiers: Qubits, superposition, and quantum entanglement; Quantum speedup: Shor's algorithm ($O((\\log N)^3)$ polynomial time integer factorization, threatening RSA encryption) and Grover's search algorithm ($O(\\sqrt{N})$ database search).",
    "Ethics, Fairness & Bias in Algorithmic Decision-Making: Algorithmic bias in credit scoring, facial recognition, and judicial sentencing; Algorithmic transparency and Explainable AI (XAI: SHAP, LIME); GDPR 'Right to Explanation' compliance.",
    "University Examination Strategy: Detail the MapReduce processing architecture with a WordCount example, trace the genetic operators in a Genetic Algorithm solving the TSP, and explain the Burrows-Wheeler Transform in genomic indexing."
], [
    "MapReduce Core Primitives: `Map: (k1, v1) -> list(k2, v2)` followed by framework shuffle, and `Reduce: (k2, list(v2)) -> list(k3, v3)`.",
    "Genetic Algorithm Mutation Role: Introduces fresh genetic diversity into chromosome population, preventing premature convergence to local optima.",
    "Contraction Hierarchies: Precomputes shortcut edges in road networks, accelerating shortest-path queries by several orders of magnitude.",
    "FM-Index BWT Compression: Compact index combining Burrows-Wheeler Transform with auxiliary suffix arrays for fast compressed search.",
    "Raft Leader Election: Split votes resolved via randomized election timeouts; leader must contain all committed log entries (Leader Completeness).",
    "Grover Quantum Speedup: Achieves quadratic speedup $O(\\sqrt{N})$ for searching unstructured databases compared to classical $O(N)$ brute-force.",
    "Shor Quantum Factorization: Solves prime factorization in polynomial time via quantum Fourier transform, breaking classical RSA cryptography.",
    "Q-Learning Temporal Difference: Off-policy RL update: $Q(s, a) \\leftarrow Q(s, a) + \\alpha [r + \\gamma \\max_{a'} Q(s', a') - Q(s, a)]$.",
    "Explainable AI (SHAP): Uses Shapley values from cooperative game theory to allocate fair credit to each feature in predictive models.",
    "Modern Exam Tip: When discussing distributed consensus, always cite the CAP theorem: a distributed system can guarantee at most two of Consistency, Availability, and Partition tolerance."
])

# =========================================================================
# 8. PYTHON PROGRAMMING (B.Sc)
# =========================================================================
add("Python Programming", 1, "Basics", [
    "Python Execution Model & Architecture: Interpreted, dynamic, high-level language; CPython implementation: Source code compiled into bytecode (`.pyc`), executed by Python Virtual Machine (PVM); Dynamic typing and reference counting memory management.",
    "Variable Assignment & Dynamic Typing Semantics: Variables as mutable/immutable pointer references to heap-allocated objects; `id()` function inspecting object memory addresses; `type()` introspection; Dynamic type rebinding (`x = 42; x = 'hello'`).",
    "Fundamental Scalar Data Types: Integers (arbitrary precision `int`), Floating-point numbers (IEEE 754 double precision `float`), Booleans (`bool` subclass of `int`: `True == 1`, `False == 0`), and Complex numbers (`complex`: `z = 3 + 4j`).",
    "Arithmetic & Bitwise Operators: Arithmetic operators (`+`, `-`, `*`, `/` float division, `//` floor division, `%` modulo, `**` exponentiation); Bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`); Augmented assignment operators (`+=`, `*=`).",
    "String Representation & Unicode Architecture: Immutable sequence of Unicode characters (`str`); String literals (single `'`, double `\"`, triple multiline `'''`); Raw strings (`r'C:\\path'`); Escape sequences (`\\n`, `\\t`).",
    "String Slicing & Sequence Operations: Extended indexing: `s[start:stop:step]`; Negative indexing (`s[-1]` accesses last character); Sequence concatenation (`+`), repetition (`*`), membership (`in`, `not in`), length (`len(s)`).",
    "String Methods & Formatting: Case manipulation (`upper()`, `lower()`, `title()`), search (`find()`, `index()`), validation (`isdigit()`, `isalpha()`), strip whitespace (`strip()`), splitting & joining (`split()`, `','.join(list)`); Modern string formatting: f-strings (`f'{var:.2f}'`), `str.format()`, and `%` operator.",
    "Console I/O & Type Casting: Reading user input via `input()` (always returns `str`); Explicit type casting functions: `int()`, `float()`, `str()`, `bool()`; Formatted printing via `print(*objects, sep=' ', end='\\n')`.",
    "Python Indentation & Lexical Grammar: Syntactic whitespace replacing braces `{}`; PEP 8 style guide standardizing 4-space indentation; Colon `:` introducing code suites; Multi-line statement continuation via parenthesis or backslash `\\`.",
    "University Examination Strategy: Explain Python's memory model with reference variables, demonstrate string slicing syntax with step parameters, compare floor division `//` vs true division `/`, and write an interactive script converting temperatures."
], [
    "CPython Bytecode Execution: Python source compiles to intermediate `.pyc` bytecode instructions before execution on the PVM.",
    "Reference Assignment Model: Assigning `b = a` binds variable `b` to the identical heap object reference without duplicating memory.",
    "Arbitrary Precision Int: Python integers possess unbounded precision, expanding dynamically to fit arbitrarily large numeric values.",
    "Division Semantics: True division `/` always returns a `float` (e.g. `4 / 2 = 2.0`); Floor division `//` truncates down to nearest integer.",
    "String Immutability: String content cannot be altered in-place; modifications create completely fresh string objects in memory.",
    "Negative Slicing Behavior: Negative indices count backwards from the terminus; `s[::-1]` reverses the entire sequence.",
    "F-String Performance: Formatted string literals (`f\"{val}\"`) are evaluated at runtime and execute faster than `str.format()` or `%`.",
    "Boolean Numeric Subclass: In Python, `isinstance(True, int)` evaluates to True; `True + True` produces integer `2`.",
    "PEP 8 Indentation Rule: Mandates 4 spaces per indentation level; mixing tabs and spaces raises a `TabError` in Python 3.",
    "Exam Gold Tip: Always remember that empty collections (`[]`, `{}`, `set()`, `\"\"`), `0`, `0.0`, and `None` evaluate to `False` in boolean contexts."
])

add("Python Programming", 2, "Control Flow", [
    "Conditional Branching & Truth Value Testing: `if`, `elif`, and `else` decision suites; Short-circuit logical evaluation of `and` and `or` operators; Chained comparison expressions (e.g. `10 < x <= 20`).",
    "Ternary Conditional Expression: Python inline conditional syntax: `x = true_val if condition else false_val`; Clean expression-level alternative to multi-line `if-else` blocks.",
    "Definite Iteration with `for` Loops: Iterating over iterable objects (lists, tuples, strings, ranges); `range([start], stop, [step])` generating arithmetic progression sequences without materializing full lists in memory (lazy generation).",
    "Indefinite Iteration with `while` Loops: Executing code block repeatedly while condition evaluates to `True`; Preventing infinite loops via explicit state progression; Compound condition checking.",
    "Loop Control Statements: `break` (terminates enclosing loop immediately), `continue` (skips remainder of current iteration and proceeds to next), and `pass` (null syntactic placeholder statement).",
    "The Unique `else` Clause on Loops: Python loops support an optional `else` block; Executes if and only if the loop terminates normally through exhaustion, and is completely bypassed if terminated by a `break` statement.",
    "Iterating with `enumerate()` & `zip()`: `enumerate(iterable, start=0)` yielding index-item tuples; `zip(*iterables)` pairing elements from multiple sequences in parallel; `itertools.zip_longest()` handling unequal sequence lengths.",
    "List & Dictionary Comprehensions: Expressive inline collection synthesis: `[expr for item in iterable if condition]`; Nested comprehensions; Dictionary comprehensions (`{k: v for k, v in items}`); Set comprehensions (`{x for x in seq}`).",
    "Structural Pattern Matching (Python 3.10+): `match-case` syntax; Pattern matching against literal values, sequence structures, class instances, and mapping patterns; Guard clauses (`case [x, y] if x > 0:`); Wildcard pattern `_`.",
    "University Examination Strategy: Write a Python program checking for prime numbers utilizing the `for-else` construct, demonstrate nested list comprehensions flattening a 2D matrix, and explain short-circuit evaluation."
], [
    "Short-Circuit Evaluation: `and` stops if first operand is falsy; `or` stops if first operand is truthy, returning the determining value.",
    "Range Memory Efficiency: In Python 3, `range()` is an immutable sequence object consuming constant $O(1)$ memory regardless of span.",
    "Loop `else` Block Rule: The `else` block attached to a loop executes only when the loop completes without encountering a `break`.",
    "Enumerate Tuple Unpacking: `for idx, val in enumerate(items):` cleanly captures both loop counter and element without manual indices.",
    "Parallel `zip` Truncation: Standard `zip()` terminates as soon as the shortest input iterable is completely exhausted.",
    "List Comprehension Speed: List comprehensions execute at C-level loop speeds inside the interpreter, running faster than explicit append loops.",
    "Walrus Assignment Operator: `:=` (Python 3.8+) assigns values to variables inside expressions: `while (line := file.readline()):`.",
    "Ternary Operator Semantics: Evaluates condition first, returning the expression before `if` if True, or after `else` if False.",
    "Pass Statement Utility: Serves as a syntactic placeholder when a code block is required syntactically but no execution is needed.",
    "Exam Scoring Tip: In questions on searching, show how using `for ... else` eliminates the need for separate boolean `found` flags."
])

add("Python Programming", 3, "Data Structures", [
    "Python Built-in Sequence Types: Lists (`list`: mutable, heterogeneous, dynamic array), Tuples (`tuple`: immutable sequence), and Strings (`str`: immutable Unicode characters); Range objects.",
    "List Operations & Dynamic Array Mechanics: Amortized $O(1)$ append and pop from end; In-place mutation methods (`insert()`, `remove()`, `pop()`, `clear()`, `sort()`, `reverse()`); Copying pitfalls: Shallow copy (`list.copy()`, `list[:]`) vs Deep copy (`copy.deepcopy()`).",
    "Tuples & Packing/Unpacking: Immutable ordered sequences; Syntax with parentheses `(1, 2, 3)` or trailing comma `(42,)`; Multiple variable assignment via tuple unpacking (`a, b = b, a`); Extended unpacking using starred expressions (`first, *middle, last = seq`).",
    "Sets & Mathematical Set Operations: Mutable unordered collections of unique, hashable elements (`set`); Set creation via `{1, 2, 3}` or `set()`; Hash table implementation ($O(1)$ lookup); Mathematical operations: Union (`|`), Intersection (`&`), Difference (`-`), Symmetric Difference (`^`).",
    "Frozenset Immutable Collections: `frozenset`: Immutable variant of set; Because it is immutable and hashable, frozensets can be used as dictionary keys or stored inside other sets.",
    "Dictionaries & Key-Value Mappings: `dict`: Hash table mapping keys to values; Fast $O(1)$ average insertion, lookup, and deletion; Insertion-order preservation (Python 3.7+); Dictionary views (`keys()`, `values()`, `items()`); Safe lookup using `get(key, default)`.",
    "Hashability & Object Requirements: An object is hashable if it has an immutable hash value (`__hash__()`) that never changes and can be compared (`__eq__()`); Immutable types (`int`, `str`, `tuple` of immutables) are hashable; Mutable types (`list`, `dict`, `set`) are unhashable.",
    "Collections Module Advanced Types: `collections.namedtuple` (readable tuple fields), `deque` (double-ended queue with $O(1)$ appends/pops from both ends), `Counter` (frequency tally dict), `defaultdict` (automatic missing key factory), and `OrderedDict`.",
    "Heap Queue Algorithm (`heapq`): Min-heap implementation on standard lists; `heapq.heappush(heap, item)`, `heapq.heappop(heap)` in $O(\\log N)$; Finding $k$ largest or smallest elements (`nlargest`, `nsmallest`).",
    "University Examination Strategy: Differentiate list vs tuple vs set vs dict with a comprehensive feature matrix, write code demonstrating deep vs shallow copying of nested lists, and utilize `defaultdict` to group anagrams."
], [
    "List Dynamic Over-Allocation: CPython lists allocate extra spare capacity during growth to ensure amortized $O(1)$ append operations.",
    "Tuple Immutability Benefit: Tuples are hashable (can serve as dictionary keys) and consume less memory overhead than lists.",
    "Single-Element Tuple Syntax: A single-element tuple must include a trailing comma: `t = (5,)`; `(5)` is merely an integer in parentheses.",
    "Dictionary Order Guarantee: Since Python 3.7, dictionaries are officially guaranteed to preserve key insertion order.",
    "Dict `get()` Safe Access: `d.get(key, default)` returns fallback default value instead of raising `KeyError` on missing keys.",
    "Set Hashing Requirement: Set elements and dictionary keys must be hashable; mutable types like lists or sets raise a `TypeError`.",
    "Deque $O(1)$ Left Pops: `collections.deque` performs both `appendleft()` and `popleft()` in $O(1)$ time, unlike lists ($O(N)$).",
    "Counter Frequency Map: `Counter(words)` automatically constructs frequency histogram mapping elements to their occurrence counts.",
    "Shallow vs Deep Copy: Shallow copy duplicates top-level container only; Deep copy recursively clones all nested objects.",
    "Exam Gold Tip: Never use `set = {}` to create an empty set; `{}` creates an empty dictionary; you must use `set()`."
])

add("Python Programming", 4, "Functions", [
    "Function Definition & First-Class Citizenry: Defining functions via `def func_name(params):`; Functions as first-class objects (assigned to variables, stored in data structures, passed as arguments, returned from other functions).",
    "Formal Parameters & Argument Passing: Positional arguments, keyword arguments (`func(name='Alice')`), and default parameter values (`def func(x=10):`); Critical rule: Positional arguments must precede keyword arguments.",
    "The Mutable Default Argument Trap: Default argument values are evaluated once at function definition time, NOT at each call; Using mutable defaults (`def f(x=[])`) causes shared state mutations across invocations; Idiomatic resolution: `def f(x=None): if x is None: x = []`.",
    "Variable-Length Arguments (*args & **kwargs): Arbitrary positional arguments captured as tuple `*args`; Arbitrary keyword arguments captured as dictionary `**kwargs`; Keyword-only arguments enforced by bare asterisk `def f(a, *, b):`.",
    "Variable Scope & LEGB Lookup Rule: Scope hierarchy: Local, Enclosing (nested functions), Global (module level), and Built-in; Modifying outer variables using `global` and `nonlocal` keywords.",
    "Anonymous Lambda Functions: Single-expression inline functions: `lambda arguments: expression`; Frequently passed to higher-order functions (`map()`, `filter()`, `sorted()`); Example: `sorted(data, key=lambda x: x[1])`.",
    "Functional Programming Built-ins: `map(func, iterable)` (transforms elements), `filter(pred, iterable)` (extracts matching elements), and `functools.reduce(func, iterable)` (accumulates running total); Replacing with list comprehensions.",
    "Closures & Factory Functions: A closure is a nested function that retains access to variables from its enclosing lexical scope even after the outer function has finished executing; Function factories generating customized functions.",
    "Function Decorators & Metaprogramming: Decorator syntax `@decorator_func`; Higher-order function taking target function and returning wrapper; Preserving metadata using `functools.wraps`; Decorators with arguments and chained decorators.",
    "University Examination Strategy: Explain the mutable default argument trap with code and fix, detail the LEGB variable lookup rule, and write a custom timing decorator measuring function execution duration using `@functools.wraps`."
], [
    "First-Class Function Property: Python functions can be passed as arguments, returned from other functions, and stored in variables.",
    "Mutable Default Trap: Default parameters are instantiated once at module load; mutable objects persist mutations across subsequent calls.",
    "LEGB Resolution Hierarchy: Python searches identifiers in order: Local -> Enclosing -> Global -> Built-in namespaces.",
    "Keyword-Only Parameter Syntax: Parameters declared after `*` or `*args` can only be supplied as explicit keyword arguments.",
    "Closure Lexical Binding: Inner function captures and encloses variables from outer enclosing scope via cell references.",
    "Decorator Wrapper Pattern: `@my_dec` before `def fn():` is syntactic sugar for reassigning `fn = my_dec(fn)`.",
    "`functools.wraps` Imperative: Copies docstrings, name, and module attributes from wrapped function to decorator wrapper.",
    "Nonlocal Scope Modifier: Rebinds variables in nearest enclosing non-global scope; `global` rebinds in module-level global namespace.",
    "Lambda Single Expression: Lambdas cannot contain statements (no `return`, `pass`, or assignment); return value is implicit.",
    "Exam Scoring Tip: In viva questions on decorators, always explain the execution flow: how the wrapper function intercepts calls to the original function."
])

add("Python Programming", 5, "File Handling", [
    "File System Operations & Storage Paradigms: Persistent storage interaction; File modes: Read (`'r'`), Write (`'w'`, truncates existing), Append (`'a'`), Exclusive create (`'x'`), Text mode (`'t'`), and Binary mode (`'b'`).",
    "The Built-in `open()` Function: Syntax: `file_obj = open(filename, mode='r', encoding='utf-8')`; Default mode `'rt'`; Standard file descriptors: `sys.stdin`, `sys.stdout`, `sys.stderr`.",
    "Context Managers & The `with` Statement: Ensuring deterministic resource cleanup; `with open(...) as f:` automatically invokes file object's `__enter__()` and `__exit__()` methods; Guarantees file handle is closed even upon exceptions.",
    "File Reading Methodologies: `f.read([size])` (reads entire content or $N$ characters/bytes), `f.readline()` (reads single line up to newline), `f.readlines()` (returns list of all lines); Memory-efficient line-by-line streaming: `for line in f:`.",
    "File Writing & Buffer Flushing: `f.write(string)` (writes string, returns character count; does not append automatic newline), `f.writelines(seq)`; Internal I/O buffering; Forcing immediate disk write via `f.flush()`.",
    "File Cursor Navigation: `f.tell()` (returns current byte offset position of file pointer), `f.seek(offset, whence)` (repositions cursor); `whence` values: `0` (absolute from start), `1` (relative to current), `2` (relative to end of file; binary mode only).",
    "Structured Data Processing: CSV Module: `import csv`; Reading via `csv.reader()` and `csv.DictReader()` (parses header row into dictionary keys); Writing via `csv.writer()` and `csv.DictWriter()`; Specifying delimiter and quoting characters.",
    "JSON Serialization & Deserialization: `import json`; Converting Python objects to JSON strings (`json.dumps()`) and writing to disk files (`json.dump()`); Parsing JSON strings (`json.loads()`) and reading from disk files (`json.load()`); Mapping Python types to JSON types.",
    "Object Serialization with Pickle: `import pickle`; Serializing arbitrary Python object hierarchies into binary byte streams (`pickle.dump()`, `pickle.load()`); Security hazard: Never unpickle untrusted data (remote code execution risk).",
    "University Examination Strategy: Write a Python program reading a large text file line-by-line and generating a word frequency dictionary, write a program converting CSV records to JSON, and explain the with-statement context manager protocol."
], [
    "Deterministic `with` Cleanup: `with` block guarantees file closure upon block exit, preventing OS file descriptor exhaustion.",
    "Line-by-Line Streaming: `for line in f:` iterates over file lazily using buffer caching, processing multi-gigabyte files in $O(1)$ memory.",
    "Write Mode Truncation Hazard: Opening a file with mode `'w'` immediately wipes and truncates existing content to 0 bytes.",
    "Seek Whence Constants: `os.SEEK_SET` (0, start), `os.SEEK_CUR` (1, current), `os.SEEK_END` (2, end); seeking from end requires binary mode `'rb'`.",
    "DictReader Column Mapping: `csv.DictReader` automatically uses first CSV row as dictionary keys, making column access robust to order changes.",
    "JSON vs Pickle Distinction: JSON is a human-readable cross-language standard; Pickle is Python-specific binary object serialization.",
    "Pickle Security Vulnerability: Unpickling untrusted byte streams can execute arbitrary malicious code via `__reduce__()` exploit.",
    "Explicit Encoding Best Practice: Always specify `encoding='utf-8'` in `open()` to prevent cross-platform encoding errors between Windows and Linux.",
    "Tell Byte Offset: `f.tell()` returns integer byte offset from start of file, not line count or character index.",
    "Exam Gold Tip: Always remember to strip trailing newline characters (`line.strip()`) when reading text lines in loop iterations."
])

# Save to sem3_bsc_computing_math_data.json
with open('scripts/sem3_bsc_computing_math_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in computing_math dataset now: {len(data)}")
