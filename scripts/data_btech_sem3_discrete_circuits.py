"""
Discrete Mathematics, Circuit Analysis, Network Theory, and Signals & Systems Units for B.Tech Semester 3.
"""

discrete_circuits_units = {
    # 6. DISCRETE MATHEMATICS
    "btech-dm: set theory & logic": {
        "highlights": [
            "Set Theoretic Operations: Sets, subsets, power sets $|\\mathcal{P}(A)| = 2^n$, Cartesian products, set operations: union, intersection, difference, and symmetric difference $A \\oplus B = (A-B) \\cup (B-A)$.",
            "Propositional Logic & Connectives: Propositions with truth values; connectives: Negation ($\\neg$), Conjunction ($\\land$), Disjunction ($\\lor$), Implication ($p \\to q \\equiv \\neg p \\lor q$), and Biconditional ($p \\leftrightarrow q$).",
            "Tautology & Logical Equivalence: Tautology (always true), Contradiction (always false), Contingency; De Morgan's laws: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$ and $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$.",
            "Converse, Inverse & Contrapositive: For conditional $p \\to q$: Converse is $q \\to p$; Inverse is $\\neg p \\to \\neg q$; Contrapositive is $\\neg q \\to \\neg p$ ($p \\to q \\equiv \\neg q \\to \\neg p$).",
            "Predicate Calculus & Quantifiers: Predicates $P(x)$; Universal quantifier $(\\forall x P(x)$ is true if $P(x)$ holds for all elements) and Existential quantifier $(\\exists x P(x)$); negation: $\\neg(\\forall x P(x)) \\equiv \\exists x \\neg P(x)$.",
            "Rules of Inference: Valid logical deductive arguments: Modus Ponens ($p, p \\to q \\vdash q$), Modus Tollens ($\\neg q, p \\to q \\vdash \\neg p$), Hypothetical Syllogism, and Disjunctive Syllogism.",
            "Normal Forms in Logic: Disjunctive Normal Form (DNF, sum of products of literals) and Conjunctive Normal Form (CNF, product of sums of literals); automated resolution theorem proving.",
            "Mathematical Induction Principles: Principle of Mathematical Induction (Base step $P(1)$, Inductive step $P(k) \\implies P(k+1)$); Strong Induction assumes truth for all $i \\le k$.",
            "Well-Ordering Principle: Every non-empty set of positive integers contains a least element; logically equivalent to the principle of mathematical induction.",
            "University Examination Strategy: Prove logical equivalences using truth tables and algebraic laws side-by-side, and clearly state Base Case and Inductive Hypothesis in induction proofs."
        ],
        "keyPoints": [
            "Implication Equivalence: $p \\to q \\equiv \\neg p \\lor q$; Negation: $\\neg(p \\to q) \\equiv p \\land \\neg q$.",
            "Contrapositive Equivalence: A conditional statement is logically equivalent strictly to its contrapositive: $p \\to q \\equiv \\neg q \\to \\neg p$.",
            "Quantifier Negation: $\\neg(\\forall x P(x)) \\equiv \\exists x \\neg P(x)$ and $\\neg(\\exists x P(x)) \\equiv \\forall x \\neg P(x)$.",
            "Modus Ponens: From premises $p$ and $p \\to q$, infer conclusion $q$.",
            "Modus Tollens: From premises $\\neg q$ and $p \\to q$, infer conclusion $\\neg p$.",
            "Power Set Size: If set $S$ has cardinality $|S| = n$, its power set contains $|\\mathcal{P}(S)| = 2^n$ distinct elements.",
            "Resolution Rule: From clauses $(A \\lor B)$ and $(\\neg A \\lor C)$, infer resolvent $(B \\lor C)$.",
            "Principle of Inclusion-Exclusion: $|A \\cup B| = |A| + |B| - |A \\cap B|$; $|A \\cup B \\cup C| = \\sum |A| - \\sum |A \\cap B| + |A \\cap B \\cap C|$.",
            "Inductive Hypothesis: Assume $P(k)$ is true for arbitrary integer $k \\ge 1$, then prove $P(k+1)$ follows necessarily.",
            "Exam Logic Tip: When constructing truth tables, write intermediate sub-expressions systematically across separate columns."
        ]
    },
    "btech-dm: relations & functions": {
        "highlights": [
            "Binary Relations: A binary relation $R$ from set $A$ to $B$ is a subset of the Cartesian product $R \\subseteq A \\times B$; total number of binary relations on set with $n$ elements is $2^{n^2}$.",
            "Properties of Relations: Reflexive ($\\forall x, (x, x) \\in R$), Symmetric ($\\forall x, y, (x, y) \\in R \\implies (y, x) \\in R$), Antisymmetric ($\\forall x, y, (x, y) \\in R \\land (y, x) \\in R \\implies x = y$), and Transitive.",
            "Equivalence Relations & Partitions: A relation is an equivalence relation iff it is reflexive, symmetric, and transitive; fundamental theorem: equivalence classes partition set $A$ into disjoint subsets.",
            "Partial Order Relations (POSET): A relation is a partial order iff it is reflexive, antisymmetric, and transitive; denoted $(A, \\le)$; represented graphically via Hasse Diagrams.",
            "Hasse Diagrams & Extremal Elements: Directed acyclic reduction removing reflexive loops and transitive edges; Maximal/Minimal elements vs Greatest (top)/Least (bottom) elements.",
            "Lattice Theory: A poset $(L, \\le)$ is a lattice iff every pair of elements $a, b$ possesses a unique Least Upper Bound (join: $a \\lor b = \\sup\\{a, b\\}$) and Greatest Lower Bound (meet: $a \\land b = \\inf\\{a, b\\}$).",
            "Function Injective, Surjective & Bijective: Injection (one-to-one: $f(x)=f(y) \\implies x=y$), Surjection (onto: $\\text{range} = \\text{codomain}$), and Bijection (invertible with $f^{-1}$).",
            "Composition of Functions: $(g \\circ f)(x) = g(f(x))$; associative $(h \\circ (g \\circ f) = (h \\circ g) \\circ f)$; composition of two bijections is strictly a bijection.",
            "Pigeonhole Principle (PHP): If $n$ items are put into $m$ containers and $n > m$, then at least one container must contain at least $\\lceil n/m \\rceil$ items.",
            "University Examination Strategy: Draw clean Hasse diagrams with ascending vertical alignments, test lattice join/meet existence for every element pair, and prove bijection for inverses."
        ],
        "keyPoints": [
            "Equivalence Relation Criteria: Must satisfy Reflexive, Symmetric, AND Transitive properties simultaneously.",
            "Partial Order Criteria: Must satisfy Reflexive, Antisymmetric, AND Transitive properties simultaneously.",
            "Antisymmetric Property: If $(a, b) \\in R$ and $(b, a) \\in R$, then $a$ must equal $b$; relations can be both symmetric and antisymmetric.",
            "Equivalence Classes Disjointness: Two equivalence classes $[a]$ and $[b]$ are either completely identical or completely disjoint ($[a] \\cap [b] = \\emptyset$).",
            "Lattice Definition: Every pair of elements has a unique join (LUB) and meet (GLB).",
            "Distributive Lattice: Satisfies $a \\land (b \\lor c) = (a \\land b) \\lor (a \\land c)$; non-distributive lattices contain pentagon $N_5$ or diamond $M_3$ sublattices.",
            "Boolean Algebra Lattice: A complemented, distributive lattice; isomorphic to algebra of subsets under union and intersection.",
            "Generalized Pigeonhole Principle: If $N$ objects placed into $k$ boxes, at least one box contains $\\lceil N/k \\rceil$ objects.",
            "Number of Reflexive Relations: On a set with $n$ elements, there are exactly $2^{n(n-1)}$ distinct reflexive relations.",
            "Exam Scoring Tip: In Hasse diagrams, never draw horizontal edges; place lower elements strictly beneath higher elements and omit arrows."
        ]
    },
    "btech-dm: graph theory": {
        "highlights": [
            "Graph Definitions & Handshaking Lemma: Graph $G = (V, E)$; Handshaking Theorem states that $\\sum_{v \\in V} \\deg(v) = 2|E|$, implying that the number of vertices with odd degrees is always even.",
            "Graph Representations & Isomorphism: Represented via Adjacency Matrix ($A_{ij} = 1$ if edge exists) and Incidence Matrix; Graphs $G_1, G_2$ are isomorphic if there exists a bijection preserving edge adjacency.",
            "Paths, Cycles & Connectivity: Walk, trail (no repeated edges), path (no repeated vertices), cycle; Graph is connected if a path exists between every pair of vertices; Component is maximal connected subgraph.",
            "Eulerian Graphs & Euler's Theorem: An Euler trail visits every edge exactly once; Euler tour is a closed trail; Undirected graph has an Euler tour iff all vertices have even degrees.",
            "Hamiltonian Graphs: Contains a closed cycle visiting every vertex exactly once; Dirac's Theorem: If $\\deg(v) \\ge n/2$ for all $v$ in graph with $n \\ge 3$, then $G$ is Hamiltonian; Ore's Theorem: $\\deg(u) + \\deg(v) \\ge n$.",
            "Planar Graphs & Euler's Formula: Graph embeddable in a plane without intersecting edges; Euler's formula states $V - E + F = 2$ for connected planar graphs; implies $E \\le 3V - 6$ for $V \\ge 3$.",
            "Kuratowski's Theorem for Planarity: A finite graph is planar iff it contains no subgraph homeomorphic to $K_5$ (complete graph on 5 vertices) or $K_{3,3}$ (complete bipartite utility graph).",
            "Graph Coloring & Chromatic Number: Vertex coloring assigns colors so adjacent vertices receive different colors; Chromatic number $\\chi(G)$ is minimum colors required; Four Color Theorem: every planar graph has $\\chi(G) \\le 4$.",
            "Trees & Properties: Connected acyclic graph; a tree with $n$ vertices has exactly $n-1$ edges; unique path between every pair of vertices; removing any edge disconnects the tree.",
            "Bipartite Graphs: Vertices partitioned into two disjoint sets $V_1, V_2$ such that all edges link $V_1$ to $V_2$; A graph is bipartite iff it contains zero cycles of odd length."
        ],
        "keyPoints": [
            "Handshaking Theorem: $\\sum_{v \\in V} \\deg(v) = 2|E|$; sum of degrees is always twice the number of edges.",
            "Planar Graph Euler Formula: $V - E + F = 2$; Maximum edges: $E \\le 3V - 6$ (for simple connected planar graphs with $V \\ge 3$).",
            "Eulerian Graph Condition: Connected graph is Eulerian iff degree of every vertex is strictly even.",
            "Hamiltonian Graph Condition: Dirac's Theorem: $\\deg(v) \\ge n/2$; Ore's Theorem: $\\deg(u) + \\deg(v) \\ge n$ for all non-adjacent $u, v$.",
            "Non-Planar Kuratowski Subgraphs: $K_5$ (5 vertices, 10 edges) and $K_{3,3}$ (6 vertices, 9 edges) are the minimal non-planar graphs.",
            "Bipartite Graph Characterization: Graph $G$ is bipartite iff it contains NO odd-length cycles.",
            "Tree Edge Property: A tree with $n$ vertices has exactly $n - 1$ edges ($|E| = |V| - 1$).",
            "Bipartite Complete Graph Edges: $K_{m,n}$ has $m+n$ vertices and $m \\times n$ edges.",
            "Four Color Theorem: Every planar graph can be validly colored using at most 4 colors ($\\chi(G) \\le 4$).",
            "Exam Proof Strategy: When proving a graph is non-planar, show $E > 3V - 6$ or find a subgraph homeomorphic to $K_5$ or $K_{3,3}$."
        ]
    },
    "btech-dm: combinatorics": {
        "highlights": [
            "Fundamental Counting Principles: Rule of Sum (mutually exclusive choices add: $|A \\cup B| = |A| + |B|$) and Rule of Product (independent sequential choices multiply: $|A \\times B| = |A| \\times |B|$).",
            "Permutations & Combinations: Permutation $P(n, r) = \\frac{n!}{(n-r)!}$ (order matters); Combination $C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$ (selection without order); Pascal's identity $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$.",
            "Permutations with Repetitions: Arranging $n$ objects with $n_1$ identical of type 1, $n_2$ of type 2: $\\frac{n!}{n_1! n_2! \\dots n_k!}$; Circular permutations of $n$ distinct items: $(n-1)!$.",
            "Combinations with Repetition (Stars & Bars): Number of ways to choose $r$ elements from $n$ types with replacement equals $\\binom{n + r - 1}{r}$, equivalent to non-negative integer solutions to $x_1 + \\dots + x_n = r$.",
            "Binomial Theorem & Coefficients: $(x + y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k$; Multinomial theorem expands $(x_1 + \\dots + x_m)^n = \\sum \\frac{n!}{k_1! \\dots k_m!} x_1^{k_1} \\dots x_m^{k_m}$.",
            "Generating Functions: Ordinary Generating Function (OGF) $G(x) = \\sum_{n=0}^\\infty a_n x^n$ encodes sequence $\{a_n\}$ as power series; multiplication of generating functions corresponds to sequence convolution.",
            "Recurrence Relations: Formulates sequence terms from predecessor terms; First-order linear $a_n = c a_{n-1} + f(n)$; Second-order linear homogeneous $a_n + c_1 a_{n-1} + c_2 a_{n-2} = 0$.",
            "Characteristic Equation Method: Solves linear homogeneous recurrence via roots of characteristic polynomial $r^2 + c_1 r + c_2 = 0$: distinct real roots ($a_n = C_1 r_1^n + C_2 r_2^n$), repeated roots ($a_n = (C_1 + C_2 n) r_1^n$).",
            "Non-Homogeneous Recurrences: Total solution equals Homogeneous solution plus Particular solution $a_n = a_n^{(h)} + a_n^{(p)}$; particular solution guessed based on driving term $f(n)$.",
            "University Examination Strategy: Solve complete recurrence relations by finding roots of characteristic equation, determining particular solution, and evaluating initial condition constants."
        ],
        "keyPoints": [
            "Stars and Bars Formula: Non-negative integer solutions to $x_1 + x_2 + \\dots + x_n = r$ is $\\binom{n + r - 1}{r}$.",
            "Positive Integer Solutions: For $x_i \\ge 1$, substituting $y_i = x_i - 1$ gives solutions equal to $\\binom{r - 1}{n - 1}$.",
            "Pascal's Identity: $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$; forms the arithmetic foundation of Pascal's Triangle.",
            "Vandermonde's Identity: $\\sum_{k=0}^r \\binom{m}{k}\\binom{n}{r-k} = \\binom{m+n}{r}$.",
            "Derangements Formula: Permutations where no element appears in original position: $D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!} \\approx \\lfloor \\frac{n!}{e} + \\frac{1}{2} \\rfloor$.",
            "Generating Function for Geometric Sequence: $1 + x + x^2 + x^3 + \\dots = \\frac{1}{1-x}$ for $|x| < 1$.",
            "Fibonacci Recurrence: $F_n = F_{n-1} + F_{n-2}$ with $F_0=0, F_1=1$; roots of $r^2 - r - 1 = 0$ give Binet's formula: $F_n = \\frac{1}{\\sqrt{5}}(\\phi^n - \\psi^n)$.",
            "Inclusion-Exclusion Cardinality: $\\left|\\bigcup_{i=1}^n A_i\\right| = \\sum |A_i| - \\sum |A_i \\cap A_j| + \\dots + (-1)^{n-1} |A_1 \\cap \\dots \\cap A_n|$.",
            "Circular Permutations: $(n-1)!$ distinct arrangements around a circle; if clockwise and counter-clockwise are identical (necklaces): $\\frac{(n-1)!}{2}$.",
            "Exam Recurrence Tip: Never leave arbitrary constants $C_1, C_2$ in final answer; substitute initial conditions ($a_0, a_1$) to solve exact numerical values."
        ]
    },
    "btech-dm: algebraic structures": {
        "highlights": [
            "Algebraic Systems & Binary Operations: A set $S$ with binary operation $*$ denoted $(S, *)$; properties: Closure ($a * b \\in S$), Associativity ($a*(b*c) = (a*b)*c$), and Commutativity ($a*b = b*a$).",
            "Semigroups & Monoids: Semigroup is an algebraic system $(S, *)$ satisfying closure and associativity; Monoid is a semigroup possessing a unique identity element $e$ such that $a * e = e * a = a$.",
            "Group Theory Foundations: An algebraic system $(G, *)$ is a group iff it is a monoid and every element $a \\in G$ possesses a unique inverse $a^{-1} \\in G$ such that $a * a^{-1} = a^{-1} * a = e$.",
            "Abelian Groups: A group $(G, *)$ is an Abelian (commutative) group if the operation $*$ satisfies commutativity: $a * b = b * a$ for all $a, b \\in G$.",
            "Subgroups & Criteria: Non-empty subset $H \\subseteq G$ is a subgroup ($H \\le G$) iff $a * b^{-1} \\in H$ for all $a, b \\in H$ (one-step subgroup test).",
            "Cosets & Lagrange's Theorem: Left coset $aH = \\{a*h \\mid h \\in H\\}$; Lagrange's Theorem: If $G$ is a finite group and $H$ is a subgroup of $G$, then the order of $H$ divides the order of $G$ ($|G| = [G:H] \\times |H|$).",
            "Cyclic Groups & Generators: Group $G$ is cyclic if every element can be expressed as a power of a single generator $a$ ($G = \\langle a \\rangle$); every cyclic group is strictly Abelian.",
            "Group Homomorphism & Isomorphism: Homomorphism $f: (G, *) \\to (G', \\circ)$ preserves operation: $f(a * b) = f(a) \\circ f(b)$; Isomorphism is a bijective homomorphism ($G \\cong G'$).",
            "Kernel & Normal Subgroups: Kernel $\\ker(f) = \\{x \\in G \\mid f(x) = e'\\}$; $\\ker(f)$ is always a normal subgroup of $G$; Factor / Quotient group $G/N = \\{aN \\mid a \\in G\\}$.",
            "Rings, Integral Domains & Fields: Ring $(R, +, \\cdot)$ is abelian group under $+$ and semigroup under $\\cdot$; Field is a commutative division ring where every non-zero element has a multiplicative inverse (e.g. $\\mathbb{R}, \\mathbb{C}, \\mathbb{Z}_p$)."
        ],
        "keyPoints": [
            "Group Axioms: (1) Closure, (2) Associativity, (3) Identity element $e$, (4) Inverse element $a^{-1}$ for every $a \\in G$.",
            "Lagrange's Theorem: $|H|$ divides $|G|$; Corollary: The order of every element in a finite group divides the order of the group.",
            "Order of Prime Group: Any group of prime order $p$ is strictly a cyclic group, and hence strictly Abelian.",
            "Subgroup Criterion: $H \\subseteq G$ is a subgroup iff $\\forall a, b \\in H$, $a b^{-1} \\in H$.",
            "Fermat's Little Theorem (Group Theoretic): For any element $a \\in G$ in finite group of order $n$, $a^n = e$; in $\\mathbb{Z}_p$, $a^{p-1} \\equiv 1 \\pmod p$.",
            "Cyclic Group Generators: A finite cyclic group of order $n$ has exactly $\\phi(n)$ generators, where $\\phi$ is Euler's totient function.",
            "Normal Subgroup Definition: Subgroup $N$ is normal in $G$ ($N \\trianglelefteq G$) iff $g N g^{-1} = N$ for all $g \\in G$ (left cosets equal right cosets).",
            "First Isomorphism Theorem: For group homomorphism $f: G \\to G'$, the quotient group $G / \\ker(f)$ is isomorphic to the image: $G / \\ker(f) \\cong \\text{Im}(f)$.",
            "Field Definition: A ring $(F, +, \\cdot)$ where $(F, +)$ is abelian, $(F \\setminus \\{0\\}, \\cdot)$ is abelian, and multiplication distributes over addition.",
            "Exam Group Proof Strategy: To prove a set forms an abelian group under operation $*$, construct a Cayley Table (for finite sets) or prove all 5 axioms algebraically."
        ]
    },

    # 7 & 8. CIRCUIT ANALYSIS & SYNTHESIS / NETWORK THEORY
    "btech-circuits: network theorems": {
        "highlights": [
            "Independent & Dependent Sources: Independent voltage/current sources maintain rated output regardless of load; Dependent sources (VCVS, VCCS, CCVS, CCCS) controlled by branch variables.",
            "Kirchhoff's Laws (KCL & KVL): Kirchhoff's Current Law states net algebraic current entering any node is zero ($\\sum i = 0$, charge conservation); Kirchhoff's Voltage Law states net voltage drop around any closed loop is zero ($\\sum v = 0$, energy conservation).",
            "Nodal Analysis & Supernodes: Node voltage method formulating matrix $[G][V] = [I]$; Supernode formed by enclosing an ideal voltage source between two non-reference nodes, applying combined KCL.",
            "Mesh Analysis & Supermeshes: Mesh current method formulating matrix $[R][I] = [V]$; Supermesh formed by bypassing a current source shared between two adjacent meshes, applying combined KVL.",
            "Thevenin's Theorem: Any linear two-terminal circuit can be replaced by an equivalent circuit containing an ideal open-circuit voltage source $V_{th}$ in series with equivalent resistance $R_{th}$.",
            "Norton's Theorem: Dual of Thevenin's theorem; replaces circuit with an ideal short-circuit current source $I_n = V_{th} / R_{th}$ in parallel with equivalent Norton resistance $R_n = R_{th}$.",
            "Superposition Theorem: In a linear bilateral network with multiple independent sources, total branch response equals the algebraic sum of individual responses produced by each source acting alone (deactivating others).",
            "Maximum Power Transfer Theorem: DC circuit transfers maximum power to load when $R_L = R_{th}$, achieving maximum power $P_{max} = \\frac{V_{th}^2}{4 R_{th}}$ with exactly 50% power transfer efficiency.",
            "AC Maximum Power Transfer: For complex impedance load $Z_L = R_L + j X_L$, maximum power is transferred when load impedance is the complex conjugate of source impedance: $Z_L = Z_{th}^* = R_{th} - j X_{th}$.",
            "Tellegen's & Reciprocity Theorems: Tellegen's theorem proves total instantaneous power in any lumped network is identically zero ($\\sum v_k i_k = 0$); Reciprocity theorem establishes transfer ratio invariant upon swapping source and meter."
        ],
        "keyPoints": [
            "Thevenin Equivalent: $V_{th} = V_{oc}$ across open terminals; $R_{th} = \\frac{V_{oc}}{I_{sc}}$ when dependent sources are present.",
            "Deactivating Sources: Independent Voltage source $\\to$ Short Circuit ($V = 0$); Independent Current source $\\to$ Open Circuit ($I = 0$).",
            "Maximum Power Transfer (DC): $R_L = R_{th}$; $P_{max} = \\frac{V_{th}^2}{4 R_{th}}$; Transfer efficiency $\\eta = 50\\%$.",
            "Maximum Power Transfer (AC): $Z_L = Z_{th}^* = R_{th} - j X_{th}$; If load is pure resistor: $R_L = |Z_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}$.",
            "Tellegen's Theorem Invariant: $\\sum_{k=1}^b v_k i_k = 0$; holds universally for linear, non-linear, time-varying, and active circuits.",
            "Reciprocity Theorem Condition: Applies strictly to linear, bilateral, passive networks containing a single independent source.",
            "Millman's Theorem: Parallel voltage sources with series impedances combine into single equivalent voltage: $V_{eq} = \\frac{\\sum V_k Y_k}{\\sum Y_k}$.",
            "Source Transformation: Practical voltage source $(V_s, R_s)$ converts to practical current source with $I_s = V_s / R_s$ and parallel $R_s$.",
            "Superposition Constraint: Applies strictly to linear quantities (voltage and current); CANNOT be applied directly to calculate power ($P \\propto I^2$).",
            "Exam Calculation Tip: In circuits with dependent sources, never deactivate dependent sources; apply a $1\\text{ V}$ test voltage or $1\\text{ A}$ test current to find $R_{th}$."
        ]
    },
    "btech-circuits: transient analysis": {
        "highlights": [
            "Energy Storage Elements & Boundary Continuity: Inductors store magnetic energy ($W_L = \\frac{1}{2} L i^2$), maintaining current continuity ($i_L(0^-) = i_L(0^+)$); Capacitors store electric energy ($W_C = \\frac{1}{2} C v^2$), maintaining voltage continuity ($v_C(0^-) = v_C(0^+)$).",
            "First-Order RC Circuit Transient Response: Natural and step responses governed by differential equation $\\frac{dv}{dt} + \\frac{v}{RC} = \\frac{V_s}{RC}$; universal response formula: $v(t) = v(\\infty) + [v(0^+) - v(\\infty)] e^{-t/\\tau}$ where time constant $\\tau = RC$.",
            "First-Order RL Circuit Transient Response: Governed by $L \\frac{di}{dt} + R i = V_s$; current response: $i(t) = i(\\infty) + [i(0^+) - i(\\infty)] e^{-t/\\tau}$ with time constant $\\tau = L/R$; steady state reached after $\\approx 5\\tau$.",
            "Second-Order Series RLC Differential Equation: Characteristic equation $s^2 + \\frac{R}{L} s + \\frac{1}{LC} = 0$, expressed canonically as $s^2 + 2\\alpha s + \\omega_0^2 = 0$, where neper frequency $\\alpha = \\frac{R}{2L}$ and undamped resonant frequency $\\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
            "Damping Ratio ($\\zeta$) & Response Modes: Damping ratio $\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$; Overdamped ($\\zeta > 1$, two distinct negative real roots, slow exponential return); Critically damped ($\\zeta = 1$, fastest non-oscillatory return).",
            "Underdamped RLC Response: Underdamped ($\\zeta < 1$, complex conjugate roots $s_{1,2} = -\\alpha \\pm j\\omega_d$ where damped frequency $\\omega_d = \\omega_0 \\sqrt{1 - \\zeta^2}$); exhibits decaying sinusoidal oscillations with envelope $e^{-\\alpha t}$.",
            "Parallel RLC Circuit Damping: Neper frequency $\\alpha = \\frac{1}{2RC}$ and $\\omega_0 = \\frac{1}{\\sqrt{LC}}$; damping ratio $\\zeta = \\frac{1}{2R}\\sqrt{\\frac{L}{C}}$; behaves dual to series RLC configuration.",
            "Laplace Transform in Transient Analysis: Transforms differential equations into algebraic equations in $s$-domain; Inductor models as impedance $sL$ in series with initial voltage generator $L i(0^-)$; Capacitor models as impedance $1/sC$ in series with initial voltage $v(0^-)/s$.",
            "Initial & Final Value Theorems: Initial value $\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to \\infty} s F(s)$; Final value $\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s)$ provided all poles of $s F(s)$ lie strictly in the open left-half s-plane.",
            "University Examination Strategy: Solve initial conditions at $t=0^-$ and $t=0^+$ explicitly, formulate differential equation or s-domain equivalent, and sketch labeled transient response waveforms."
        ],
        "keyPoints": [
            "Universal 1st-Order Transient Formula: $x(t) = x(\\infty) + [x(0^+) - x(\\infty)] e^{-t/\\tau}$.",
            "Time Constants: Series RC: $\\tau = R_{th} C$; Series RL: $\\tau = \\frac{L}{R_{th}}$.",
            "Inductor Switching Boundary: At $t = 0^+$, inductor acts as an Open Circuit (if $i_L(0^-)=0$) or a current source $i_L(0^-)$; At $t = \\infty$, acts as a Short Circuit in DC.",
            "Capacitor Switching Boundary: At $t = 0^+$, capacitor acts as a Short Circuit (if $v_C(0^-)=0$) or a voltage source $v_C(0^-)$; At $t = \\infty$, acts as an Open Circuit in DC.",
            "Series RLC Characteristic Equation: $s^2 + 2\\zeta \\omega_0 s + \\omega_0^2 = 0$ with $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ and $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$.",
            "Underdamped Oscillatory Frequency: $\\omega_d = \\omega_0 \\sqrt{1 - \\zeta^2}$; response $x(t) = e^{-\\alpha t}(A_1 \\cos \\omega_d t + A_2 \\sin \\omega_d t)$.",
            "Critical Damping Value: $R_{crit} = 2\\sqrt{\\frac{L}{C}}$; achieves fastest settling time without overshoot.",
            "Laplace Inductor s-Domain Model: Impedance $Z(s) = sL$ with series impulse source $+ L i(0^-)$ or parallel source $i(0^-)/s$.",
            "Laplace Capacitor s-Domain Model: Impedance $Z(s) = \\frac{1}{sC}$ with series initial voltage source $+\\frac{v(0^-)}{s}$.",
            "Exam Pitfall: Never apply Final Value Theorem if $s F(s)$ has poles on the imaginary axis or in the right-half s-plane (e.g. sustained sinusoids)."
        ]
    },
    "btech-circuits: ac analysis & two-port networks": {
        "highlights": [
            "Sinusoidal Steady-State Phasors: Sinusoidal excitation $v(t) = V_m \\cos(\\omega t + \\phi)$ transformed to frequency-domain phasor $\\mathbf{V} = V_{rms} e^{j\\phi} = \\frac{V_m}{\\sqrt{2}} \\angle \\phi$; transforms derivatives to algebraic multiplications by $j\\omega$.",
            "Impedance & Admittance: Complex impedance $\\mathbf{Z} = R + j X$ where inductive reactance $X_L = \\omega L$ and capacitive reactance $X_C = -\\frac{1}{\\omega C}$; complex admittance $\\mathbf{Y} = \\frac{1}{\\mathbf{Z}} = G + j B$ (conductance $G$, susceptance $B$).",
            "Series Resonance Dynamics: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding minimum impedance $\\mathbf{Z} = R$; resonant frequency $\\omega_0 = \\frac{1}{\\sqrt{LC}}$, unity power factor, maximum current $I_0 = V / R$.",
            "Quality Factor & Bandwidth: Series resonance quality factor $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 R C} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$; Half-power bandwidth $BW = \\frac{\\omega_0}{Q} = \\frac{R}{L}$; magnification of inductor/capacitor voltages $V_L = V_C = Q V$.",
            "Parallel Resonance & Anti-Resonance: Parallel RLC network exhibits maximum dynamic impedance at resonance $Z_{dyn} = \\frac{L}{C R}$; quality factor $Q = R \\sqrt{\\frac{C}{L}}$; unity power factor with minimum line current.",
            "Two-Port Z-Parameters (Impedance): Open-circuit parameters formulating $\\mathbf{V}_1 = Z_{11}\\mathbf{I}_1 + Z_{12}\\mathbf{I}_2$ and $\\mathbf{V}_2 = Z_{21}\\mathbf{I}_1 + Z_{22}\\mathbf{I}_2$; evaluated by open-circuiting ports ($I_1 = 0$ or $I_2 = 0$).",
            "Two-Port Y-Parameters (Admittance): Short-circuit parameters formulating $\\mathbf{I}_1 = Y_{11}\\mathbf{V}_1 + Y_{12}\\mathbf{V}_2$ and $\\mathbf{I}_2 = Y_{21}\\mathbf{V}_1 + Y_{22}\\mathbf{V}_2$; evaluated by short-circuiting ports ($V_1 = 0$ or $V_2 = 0$).",
            "Transmission (ABCD) Parameters: Relates input port variables to output port variables: $\\mathbf{V}_1 = A \\mathbf{V}_2 - B \\mathbf{I}_2$ and $\\mathbf{I}_1 = C \\mathbf{V}_2 - D \\mathbf{I}_2$; ideal for cascading multiple two-port networks via matrix multiplication ($[T] = [T_A][T_B]$).",
            "Hybrid (h) Parameters: Formulates $\\mathbf{V}_1 = h_{11}\\mathbf{I}_1 + h_{12}\\mathbf{V}_2$ and $\\mathbf{I}_2 = h_{21}\\mathbf{I}_1 + h_{22}\\mathbf{V}_2$; widely employed in bipolar junction transistor (BJT) small-signal modeling.",
            "Reciprocity & Symmetry Conditions: Network is reciprocal iff $Z_{12} = Z_{21}$, $Y_{12} = Y_{21}$, $AD - BC = 1$, or $h_{12} = -h_{21}$; Symmetrical iff $Z_{11} = Z_{22}$, $Y_{11} = Y_{22}$, $A = D$, or $\\det(h) = 1$."
        ],
        "keyPoints": [
            "Series Resonant Frequency: $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ rad/s; $f_0 = \\frac{1}{2\\pi\\sqrt{LC}}$ Hz.",
            "Series Quality Factor: $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 R C} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.",
            "Bandwidth Relation: $BW = \\omega_2 - \\omega_1 = \\frac{\\omega_0}{Q} = \\frac{R}{L}$; Half-power frequencies $\\omega_{1,2} = \\omega_0 \\sqrt{1 + \\frac{1}{4Q^2}} \\mp \\frac{\\omega_0}{2Q}$.",
            "Z-Parameter Equations: $\\mathbf{V}_1 = Z_{11}\\mathbf{I}_1 + Z_{12}\\mathbf{I}_2$; $\\mathbf{V}_2 = Z_{21}\\mathbf{I}_1 + Z_{22}\\mathbf{I}_2$.",
            "ABCD Parameter Equations: $\\mathbf{V}_1 = A \\mathbf{V}_2 - B \\mathbf{I}_2$; $\\mathbf{I}_1 = C \\mathbf{V}_2 - D \\mathbf{I}_2$ (note negative sign on $I_2$).",
            "Reciprocity Conditions: $Z_{12} = Z_{21}$; $Y_{12} = Y_{21}$; $A D - B C = 1$; $h_{12} = -h_{21}$.",
            "Symmetry Conditions: $Z_{11} = Z_{22}$; $Y_{11} = Y_{22}$; $A = D$; $h_{11} h_{22} - h_{12} h_{21} = 1$.",
            "Cascaded Networks: Total transmission matrix $[T] = [T_1] \\times [T_2]$.",
            "Parallel-Parallel Interconnection: Overall admittance matrix $[Y] = [Y_1] + [Y_2]$.",
            "Exam Phasor Diagram Tip: In series RLC at resonance, sketch $V_L$ pointing upward ($+90^\\circ$) and $V_C$ pointing downward ($-90^\\circ$) with identical magnitudes canceling out."
        ]
    }
}

print("Discrete Math & Circuits units loaded.")
