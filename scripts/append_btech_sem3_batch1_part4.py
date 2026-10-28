import json, os

with open('scripts/sem3_btech_batch1_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def add(sub, num, title, hl, kp):
    assert len(hl) == 10, f"{sub} U{num} hl count {len(hl)}"
    assert len(kp) == 10, f"{sub} U{num} kp count {len(kp)}"
    data[f"{sub}:::{num}"] = {
        "title": title,
        "highlights": hl,
        "keyPoints": kp
    }

# =========================================================================
# 5. DISCRETE MATHEMATICS (B.Tech)
# =========================================================================
add("Discrete Mathematics", 1, "Set Theory & Logic", [
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
], [
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
])

add("Discrete Mathematics", 2, "Relations & Functions", [
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
], [
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
])

add("Discrete Mathematics", 3, "Graph Theory", [
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
], [
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
])

add("Discrete Mathematics", 4, "Combinatorics", [
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
], [
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
])

add("Discrete Mathematics", 5, "Algebraic Structures", [
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
], [
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
])

# Save completed batch 1
with open('scripts/sem3_btech_batch1_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 1 COMPLETE: total units now: {len(data)}")
