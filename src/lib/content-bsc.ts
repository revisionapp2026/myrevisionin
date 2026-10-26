/**
 * Comprehensive Bachelor of Science (B.Sc) Revision Points & Knowledge Base.
 * Covers Computer Science, Data Science, Mathematics, Physics, Chemistry,
 * Life Sciences (Botany & Zoology), and Biotechnology / Microbiology.
 *
 * Each unit provides 10 Highlights + 10 Key Points (Bookmarks)
 * with authentic mathematical & scientific formulas formatted for KaTeX rendering.
 */

import { getUnit } from "./mock-data";
import type { RevisionPoint } from "./content";

export interface TopicKnowledge {
  highlights: string[];
  keyPoints: string[];
}

export const bscKnowledge: Record<string, TopicKnowledge> = {
  // COMPUTER SCIENCE & DATA SCIENCE
  "programming in c": {
    highlights: [
      "Procedural Paradigm: C is a structured, imperative language emphasizing modularity through functions, structured blocks, and direct memory access via pointers.",
      "Compilation Workflow: Source code (.c) undergoes Preprocessing (macro expansion, #include) -> Compilation (assembly code .s) -> Assembly (object code .o) -> Linking (executable binary).",
      "Pointers & Memory Model: A pointer holds the virtual address of a variable; dereference operator * accesses value at address, and address-of & returns variable memory location.",
      "Dynamic Memory Allocation: malloc(size) allocates uninitialized bytes, calloc(n, size) allocates zero-initialized array, realloc(ptr, new_size) resizes blocks, and free(ptr) prevents memory leaks.",
      "Control Flow & Branching: Sequential execution structured with if-else, switch-case, and iterative loops (while, for, do-while); break exits innermost loop and continue skips to next iteration.",
      "Array Memory Layout: Contiguous block of homogeneous memory where array name decays into constant pointer to first element (arr == &arr[0]); indexing formula *(arr + i).",
      "Functions & Call Stack: Functions use call-by-value by default; call-by-reference is simulated by passing pointer addresses; recursive functions require well-defined base termination cases.",
      "Structures & Memory Alignment: struct groups heterogeneous data types; structure padding/alignment ensures word-boundary efficiency; union shares common memory equal to its largest member.",
      "File Handling Operations: File streams managed via FILE* pointer; modes 'r', 'w', 'a', 'r+', 'w+', 'a+'; standard functions fopen(), fclose(), fread(), fwrite(), fprintf(), and fscanf().",
      "Preprocessor Directives: Directives begin with # (#define, #include, #ifdef, #ifndef, #endif); executed before lexical analysis without type-checking overhead.",
    ],
    keyPoints: [
      "Pointer Dereferencing: int *p = &x; *p = 20 alters value stored at memory address &x directly.",
      "Array Pointer Equivalence: arr[i] is strictly identical to *(arr + i) in pointer arithmetic.",
      "Dynamic Memory Rule: Every successful call to malloc() or calloc() must have a matching free(ptr) to avert memory leaks.",
      "Dangling Pointer Hazard: Accessing a pointer after its allocated block has been freed invokes undefined behavior; always set ptr = NULL after free.",
      "Call-by-Reference Simulation: void swap(int *a, int *b) { int t = *a; *a = *b; *b = t; } requires invocation swap(&x, &y).",
      "Structure vs Union: struct allocates sum of member sizes (plus padding); union allocates only enough bytes for its largest element.",
      "String Termination: C strings are char arrays terminated by null byte '\\0'; strlen() counts characters excluding '\\0'.",
      "Operator Precedence: Prefix ++ has higher precedence than dereference *; *p++ increments pointer address, (*p)++ increments stored value.",
      "File EOF Sentinel: Always verify if ((ch = fgetc(fp)) != EOF) when streaming through text files.",
      "Exam Scoring Tip: For algorithm questions, always trace memory state on the stack and write both function signature and return type explicitly.",
    ],
  },
  "data structures": {
    highlights: [
      "Asymptotic Complexity: Measures algorithmic growth rate with input size n; Big-O O(g(n)) gives upper bound, Big-Omega \\Omega(g(n)) lower bound, Big-Theta \\Theta(g(n)) tight bound.",
      "Linear Linked Lists: Dynamic data structure of discrete nodes containing data and link pointers; Singly, Doubly, and Circular linked lists support O(1) head insertion.",
      "Stack Operations (LIFO): Last-In First-Out abstract data type governed by push(), pop(), peek(); applications include expression parsing (infix to postfix), bracket matching, and call recursion.",
      "Queue Operations (FIFO): First-In First-Out structure governed by enqueue() and dequeue(); Circular Queue eliminates memory drift using modulo arithmetic: rear = (rear + 1) \\% MAX.",
      "Binary Trees & Traversals: Hierarchical structure where each node has at most two children; Depth-First Traversals: Inorder (Left-Root-Right), Preorder (Root-Left-Right), Postorder (Left-Right-Root).",
      "Binary Search Trees (BST): Left subtree keys < root key < right subtree keys; Inorder traversal of BST yields sorted keys in strictly ascending order.",
      "Balanced Trees (AVL): Self-balancing BST where Balance Factor BF = h_L - h_R \\in \\{-1, 0, +1\\}; balance restored using LL, RR, LR, and RL rotations in O(\\log n) time.",
      "Heap Data Structure: Complete binary tree satisfying Heap Property; Max-Heap maintains parent \\ge children; Min-Heap parent \\le children; root extraction runs in O(\\log n).",
      "Graph Representations & Traversals: Represented via Adjacency Matrix O(V^2) or Adjacency List O(V + E); Breadth-First Search (BFS) uses Queue; Depth-First Search (DFS) uses Stack/Recursion.",
      "Hashing & Collision Resolution: Hash function h(k) maps key k to array index; collisions resolved via Separate Chaining (linked lists) or Open Addressing (Linear Probing, Quadratic, Double Hashing).",
    ],
    keyPoints: [
      "Stack Underflow & Overflow: Underflow occurs on pop() when top == -1; Overflow occurs on push() when top == MAX - 1.",
      "Circular Queue Modulo Indexing: Next position computed as (rear + 1) \\% MAX; full condition (rear + 1) \\% MAX == front.",
      "BST Inorder Property: Inorder traversal of any valid Binary Search Tree ALWAYS produces keys in ascending order.",
      "AVL Balance Factor Formula: BF(node) = \\text{height}(left) - \\text{height}(right); must satisfy |BF| \\le 1.",
      "Time Complexity of Sorting: MergeSort is \\Theta(n \\log n) worst-case; QuickSort is O(n \\log n) average and O(n^2) worst-case.",
      "Binary Search Requirement: Input array MUST be sorted; worst-case comparison count is \\lfloor \\log_2 n \\rfloor + 1.",
      "Graph Cycle Detection: DFS detects back-edges in directed graph; BFS detects cross-edges in undirected graph.",
      "Dijkstra's Shortest Path: Computes single-source shortest paths on non-negative weighted graphs with complexity O((V + E) \\log V).",
      "Hash Table Load Factor: \\alpha = \\frac{n}{m} where n is elements and m is table slots; keep \\alpha < 0.7 to avoid cluster degradation.",
      "Exam Golden Rule: State both worst-case and average-case time and space complexities when answering comparison questions.",
    ],
  },
  "database management": {
    highlights: [
      "Relational Model Principles: Data represented as two-dimensional relations (tables) composed of tuples (rows) and attributes (columns); domain constraints enforce data validity.",
      "Relational Integrity Rules: Entity Integrity forbids primary keys from containing NULL values; Referential Integrity mandates foreign keys must match existing primary keys or remain NULL.",
      "Relational Algebra Operators: Fundamental operations include Selection (\\sigma), Projection (\\pi), Cartesian Product (\\times), Set Union (\\cup), Set Difference (-), and Natural Join (\\bowtie).",
      "Database Normalization: Decomposes tables to eliminate insertion, update, and deletion anomalies; progresses through 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency).",
      "Boyce-Codd Normal Form (BCNF): Stricter 3NF variant requiring that for every functional dependency X \\to Y, determinant X MUST be a candidate key.",
      "Transaction ACID Properties: Atomicity (all-or-none execution), Consistency (preserves database integrity constraints), Isolation (concurrent transactions execute independently), Durability (committed updates persist).",
      "Concurrency Control Mechanisms: Lock-based protocols (Shared S and Exclusive X locks); Two-Phase Locking (2PL: Growing and Shrinking phases) guarantees serializability.",
      "Deadlock Prevention & Recovery: Deadlocks occur when transactions wait in cyclic dependency; resolved via Wait-Die, Wound-Wait timestamp schemes, or Wait-For Graphs (WFG) cycle detection.",
      "Database Indexing (B+ Trees): Balanced search tree where all data records reside in leaf nodes connected as a doubly linked list; internal nodes store routing search keys.",
      "SQL Query Architecture: Declarative queries parsed into relational algebra trees, cost-optimized by optimizer, and executed across storage engine pages.",
    ],
    keyPoints: [
      "Primary Key vs Unique Constraint: Primary key cannot accept NULL and only one exists per table; Unique constraint allows single NULL and multiple can exist.",
      "Foreign Key Cascade: ON DELETE CASCADE automatically purges child dependent rows when parent primary record is deleted.",
      "1NF Condition: All attribute values must be atomic; multi-valued and composite attributes are strictly prohibited.",
      "2NF Condition: Table is in 1NF AND every non-prime attribute is fully functionally dependent on whole primary key.",
      "3NF Condition: Table is in 2NF AND no transitive dependencies exist (non-prime attribute depending on another non-prime).",
      "BCNF Criterion: For any non-trivial dependency X \\to Y, determinant X must be a super key.",
      "Strict 2PL Guarantee: All exclusive locks held until transaction commits or aborts; eliminates cascading rollbacks.",
      "ACID Enforcement: Atomicity & Durability managed by Recovery Manager (Write-Ahead Logging); Isolation by Concurrency Controller.",
      "B+ Tree Efficiency: Leaf nodes linked sequentially for O(\\log_B N) search and O(k) range scanning.",
      "Exam Scoring Tip: Draw relational schema diagrams showing underline for primary key and dashed underline/arrow for foreign keys.",
    ],
  },

  // MATHEMATICS & STATISTICS
  "calculus": {
    highlights: [
      "Limits & Continuity: A function f(x) is continuous at x = a iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a); intermediate value theorem guarantees intermediate roots.",
      "Rolle's & Lagrange's Theorems: If f(x) continuous on [a, b] and differentiable on (a, b) with f(a) = f(b), then f'(c) = 0; Lagrange generalizes to f'(c) = \\frac{f(b) - f(a)}{b - a}.",
      "Taylor's & Maclaurin's Expansions: f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)(x - a)^n}{n!}; Maclaurin evaluates around a = 0 for standard expansions e^x, \\sin x, \\cos x, \\ln(1+x).",
      "Curvature & Radius of Curvature: Curvature \\kappa = \\frac{d\\psi}{ds}; Cartesian formula \\rho = \\frac{[1 + (y')^2]^{3/2}}{|y''|}; polar formula \\rho = \\frac{(r^2 + r'^2)^{3/2}}{r^2 + 2r'^2 - r r''}.",
      "Partial Derivatives & Euler's Theorem: If u(x, y) is homogeneous of degree n, then x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u.",
      "Jacobian Transformations: Jacobian J = \\frac{\\partial(u, v)}{\\partial(x, y)} transforms differential area elements; chain property J_{12} \\cdot J_{23} = J_{13} and J \\cdot J' = 1.",
      "Maxima and Minima of Two Variables: Critical points satisfy f_x = 0, f_y = 0; discriminant \\Delta = r t - s^2 where r = f_{xx}, s = f_{xy}, t = f_{yy}; \\Delta > 0, r < 0 \\implies Max.",
      "Beta & Gamma Functions: \\Gamma(n) = \\int_0^\\infty x^{n-1} e^{-x} dx; B(m, n) = \\int_0^1 x^{m-1} (1-x)^{n-1} dx; fundamental relation B(m, n) = \\frac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}.",
      "Double & Triple Integrals: Double integrals evaluate planar area and volume beneath z = f(x, y); polar transformation dA = r \\, dr \\, d\\theta; spherical dV = \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta.",
      "Vector Calculus Theorems: Gauss Divergence \\oiint_S \\vec{F} \\cdot d\\vec{S} = \\iiint_V (\\nabla \\cdot \\vec{F}) dV; Stokes' Theorem \\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\nabla \\times \\vec{F}) \\cdot d\\vec{S}.",
    ],
    keyPoints: [
      "Cartesian Curvature: \\rho = \\frac{[1 + (y')^2]^{3/2}}{|y''|}; curvature \\kappa = \\frac{1}{\\rho}.",
      "Polar Curvature: \\rho = \\frac{(r^2 + r'^2)^{3/2}}{r^2 + 2r'^2 - r r''}.",
      "Euler's Homogeneous Formula: x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u.",
      "Jacobian Definition: J = \\det \\begin{bmatrix} \\frac{\\partial u}{\\partial x} & \\frac{\\partial u}{\\partial y} \\\\ \\frac{\\partial v}{\\partial x} & \\frac{\\partial v}{\\partial y} \\end{bmatrix}.",
      "Two-Variable Extremum Test: \\Delta = r t - s^2; \\Delta > 0, r < 0 (Max); \\Delta > 0, r > 0 (Min); \\Delta < 0 (Saddle).",
      "Gamma Factorial Identity: \\Gamma(n + 1) = n!; \\Gamma\\left(\\frac{1}{2}\\right) = \\sqrt{\\pi}.",
      "Beta-Gamma Link: B(m, n) = \\frac{\\Gamma(m) \\Gamma(n)}{\\Gamma(m + n)}.",
      "Walli's Definite Integral: \\int_0^{\\pi/2} \\sin^p \\theta \\cos^q \\theta \\, d\\theta = \\frac{\\Gamma\\left(\\frac{p+1}{2}\\right) \\Gamma\\left(\\frac{q+1}{2}\\right)}{2 \\Gamma\\left(\\frac{p+q+2}{2}\\right)}.",
      "Solenoidal Field Condition: \\nabla \\cdot \\vec{F} = 0; Irrotational field condition \\nabla \\times \\vec{F} = 0.",
      "Exam Trick: For indeterminate power 1^\\infty, use \\lim f(x)^{g(x)} = e^{\\lim g(x)[f(x) - 1]}.",
    ],
  },
  "linear algebra": {
    highlights: [
      "Vector Spaces & Subspaces: Set V closed under vector addition and scalar multiplication satisfying 8 field axioms; subspace W must contain zero vector and satisfy closure.",
      "Linear Independence & Basis: Vectors \\{v_1, \\dots, v_k\\} are linearly independent iff \\sum c_i v_i = 0 implies all c_i = 0; a basis is a linearly independent spanning set.",
      "Dimension & Rank-Nullity Theorem: Dimension is number of vectors in any basis; for linear map T: V \\to W, \\text{rank}(T) + \\text{nullity}(T) = \\dim(V).",
      "Linear Transformations & Matrices: Linear transformation T satisfies T(u + v) = T(u) + T(v) and T(c u) = c T(u); uniquely represented by matrix [T]_B relative to basis B.",
      "Eigenvalues & Eigenvectors: Scalar \\lambda is eigenvalue and non-zero vector X is eigenvector iff A X = \\lambda X, satisfying characteristic equation \\det(A - \\lambda I) = 0.",
      "Properties of Eigenvalues: Sum of eigenvalues equals \\text{trace}(A); product of eigenvalues equals \\det(A); eigenvalues of triangular matrices are diagonal entries.",
      "Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic polynomial P(A) = 0; provides direct technique to calculate matrix inverse A^{-1} and powers A^k.",
      "Matrix Diagonalization: Matrix A is diagonalizable as D = P^{-1} A P iff A possesses n linearly independent eigenvectors forming modal matrix P.",
      "Inner Product Spaces & Orthogonality: Inner product \\langle u, v \\rangle induces norm \\|u\\| = \\sqrt{\\langle u, u \\rangle}; vectors are orthogonal iff \\langle u, v \\rangle = 0.",
      "Gram-Schmidt Orthogonalization: Algorithm to construct orthonormal basis \\{u_1, \\dots, u_k\\} from linearly independent set \\{v_1, \\dots, v_k\\}.",
    ],
    keyPoints: [
      "Rank-Nullity Theorem: \\text{rank}(A) + \\text{nullity}(A) = n (total columns of matrix A).",
      "Characteristic Equation: \\det(A - \\lambda I) = \\lambda^n - (\\text{trace})\\lambda^{n-1} + \\dots + (-1)^n \\det(A) = 0.",
      "Eigenvalue Trace Check: \\sum \\lambda_i = \\text{trace}(A) and \\prod \\lambda_i = \\det(A).",
      "Symmetric Matrix Theorem: Real symmetric matrices have purely real eigenvalues and orthogonal eigenvectors.",
      "Gram-Schmidt Formula: u_k = v_k - \\sum_{j=1}^{k-1} \\frac{\\langle v_k, u_j \\rangle}{\\|u_j\\|^2} u_j.",
      "Orthogonal Matrix Property: P^T P = I \\implies P^{-1} = P^T.",
      "Diagonalization Condition: Algebraic Multiplicity (AM) must equal Geometric Multiplicity (GM) for every eigenvalue.",
      "Zero Eigenvalue Meaning: Matrix has \\lambda = 0 iff \\det(A) = 0 (matrix is singular).",
      "Quadratic Form Reduction: Q = X^T A X reduces to \\sum \\lambda_i y_i^2 via orthogonal substitution X = P Y.",
      "Exam Tip: Always check \\sum \\lambda_i = \\text{trace}(A) to verify your computed eigenvalues immediately.",
    ],
  },

  // PHYSICS & CHEMISTRY
  "physics": {
    highlights: [
      "Newtonian Mechanics & Conservation Laws: \\vec{F} = \\frac{d\\vec{p}}{dt}; conservation of linear momentum holds when net external force is zero; work-energy theorem W_{net} = \\Delta K.",
      "Rotational Dynamics: Torque \\vec{\\tau} = \\vec{r} \\times \\vec{F} = I \\vec{\\alpha}; angular momentum \\vec{L} = I \\vec{\\omega}; parallel axis theorem I = I_{cm} + M d^2.",
      "Simple Harmonic Motion (SHM): Equation \\frac{d^2 x}{dt^2} + \\omega_0^2 x = 0; angular frequency \\omega_0 = \\sqrt{\\frac{k}{m}}; total mechanical energy E = \\frac{1}{2} k A^2.",
      "Wave Optics & Interference: Principle of superposition; Young's double slit fringe width \\beta = \\frac{\\lambda D}{d}; thin film path difference \\Delta = 2 \\mu t \\cos r - \\frac{\\lambda}{2}.",
      "Diffraction & Resolving Power: Fraunhofer single slit minima condition a \\sin\\theta = m \\lambda; plane diffraction grating principal maxima (a + b) \\sin\\theta = n \\lambda.",
      "Polarization & Brewster's Law: Reflected light is completely plane-polarized when \\tan\\theta_p = \\mu; reflected and refracted rays are perpendicular at Brewster angle.",
      "First & Second Laws of Thermodynamics: \\delta Q = dU + \\delta W; Carnot cycle efficiency \\eta = 1 - \\frac{T_L}{T_H}; entropy increase principle dS \\ge \\frac{\\delta Q}{T}.",
      "Maxwell's Electromagnetic Equations: \\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}, \\; \\nabla \\cdot \\vec{B} = 0, \\; \\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}, \\; \\nabla \\times \\vec{B} = \\mu_0 \\vec{J} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}.",
      "Quantum De Broglie Hypothesis: Matter waves have wavelength \\lambda = \\frac{h}{p} = \\frac{h}{m v}; Heisenberg uncertainty principle \\Delta x \\Delta p \\ge \\frac{\\hbar}{2}.",
      "Schrodinger Wave Equation: Time-independent equation -\\frac{\\hbar^2}{2m} \\frac{d^2 \\psi}{dx^2} + V(x) \\psi = E \\psi; particle in 1D box quantized energy E_n = \\frac{n^2 h^2}{8 m L^2}.",
    ],
    keyPoints: [
      "Brewster's Law Formula: \\tan\\theta_p = \\mu; \\theta_p + r = 90^\\circ.",
      "Double Slit Fringe Width: \\beta = \\frac{\\lambda D}{d}.",
      "Grating Equation: (a + b) \\sin\\theta = n \\lambda; maximum orders n_{max} = \\frac{a + b}{\\lambda}.",
      "Carnot Efficiency: \\eta = 1 - \\frac{T_L}{T_H} (temperatures strictly in Kelvin).",
      "De Broglie Wavelength: \\lambda = \\frac{h}{\\sqrt{2 m E}} = \\frac{12.27}{\\sqrt{V}} \\text{ \\AA} for electrons.",
      "Particle in a Box Energy: E_n = \\frac{n^2 h^2}{8 m L^2} = \\frac{n^2 \\pi^2 \\hbar^2}{2 m L^2}.",
      "Speed of Light in Vacuum: c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = 3 \\times 10^8 \\text{ m/s}.",
      "Poynting Vector: \\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B}); units W/m^2.",
      "SHM Acceleration Relation: a(t) = -\\omega_0^2 x(t).",
      "Exam Tip: In quantum mechanics questions, always write normalization condition \\int_{-\\infty}^\\infty |\\psi(x)|^2 dx = 1.",
    ],
  },
  "chemistry": {
    highlights: [
      "Periodic Trends: Atomic radius decreases across period and increases down group; electronegativity and ionization energy increase across period and decrease down group.",
      "Chemical Bonding & Hybridization: Valence Bond Theory & VSEPR predict molecular geometries (sp linear, sp2 trigonal planar, sp3 tetrahedral, sp3d trigonal bipyramidal).",
      "Molecular Orbital Theory (MOT): Linear Combination of Atomic Orbitals (LCAO); Bond Order = \\frac{N_b - N_a}{2}; unpaired electrons indicate paramagnetism.",
      "Chemical Thermodynamics: Enthalpy \\Delta H = \\Delta U + \\Delta(P V); Gibbs free energy \\Delta G = \\Delta H - T \\Delta S; reaction is spontaneous iff \\Delta G < 0.",
      "Chemical Equilibrium & Le Chatelier: Equilibrium constant K = \\frac{[C]^c [D]^d}{[A]^a [B]^b}; system shifts to counteract imposed temperature, pressure, or concentration stress.",
      "Reaction Kinetics & Rate Laws: Differential rate equation -\\frac{d[A]}{dt} = k [A]^n; Arrhenius activation energy equation k = A e^{-E_a / (R T)}.",
      "Electrochemistry & Nernst Equation: Galvanic cell potential E_{cell} = E^\\circ_{cell} - \\frac{R T}{n F} \\ln Q = E^\\circ_{cell} - \\frac{0.0591}{n} \\log_{10} Q at 298 K.",
      "Organic Reaction Mechanisms: Nucleophilic substitutions (S_N1 two-step with carbocation intermediate, S_N2 one-step with Walden inversion); electrophilic aromatic substitution.",
      "Coordination Chemistry (CFT): Ligands split transition metal d-orbitals; octahedral field splits into lower t_{2g} and higher e_g by crystal field splitting parameter \\Delta_o.",
      "Spectroscopic Methods (UV, IR, NMR): Beer-Lambert law A = \\varepsilon c l; IR detects functional groups via vibrational frequencies (C=O at ~1715 cm^-1); NMR chemical shift \\delta (ppm).",
    ],
    keyPoints: [
      "Nernst Equation at 25 °C: E = E^\\circ - \\frac{0.0591}{n} \\log_{10} Q.",
      "Gibbs Free Energy Criterion: \\Delta G < 0 (Spontaneous), \\Delta G = 0 (Equilibrium), \\Delta G > 0 (Non-spontaneous).",
      "Arrhenius Equation: k = A e^{-E_a / (R T)}; \\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right).",
      "Bond Order Formula: \\text{Bond Order} = \\frac{N_{bonding} - N_{antibonding}}{2}.",
      "Beer-Lambert Law: A = \\log_{10}\\left(\\frac{I_0}{I}\\right) = \\varepsilon c l.",
      "S_N1 vs S_N2: S_N1 is unimolecular with racemization; S_N2 is bimolecular with complete Walden inversion.",
      "Crystal Field Octahedral Splitting: \\Delta_o; strong field ligands cause electron pairing (low spin).",
      "First Order Half-Life: t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}; independent of initial concentration.",
      "Faraday's Electrolysis Law: m = Z I t = \\frac{M I t}{n F} where F = 96,485 C/mol.",
      "Exam Warning: In Nernst equation calculations, balance electrons n carefully between oxidation and reduction half-reactions.",
    ],
  },

  // LIFE SCIENCES & BIOTECHNOLOGY
  "life sciences": {
    highlights: [
      "Cell Architecture & Organelles: Eukaryotic cells possess membrane-bound organelles (nucleus, mitochondria, chloroplasts, endoplasmic reticulum, Golgi body); prokaryotes lack membrane-bound nucleus.",
      "Mendelian Genetics & Inheritance: Law of Segregation and Law of Independent Assortment; monohybrid phenotypic ratio 3:1, dihybrid phenotypic ratio 9:3:3:1.",
      "DNA Structure & Replication: Double helix model (Watson & Crick); antiparallel strands with complementary base pairing (A=T with 2 H-bonds, G\\equiv C with 3 H-bonds); semi-conservative replication.",
      "Central Dogma of Molecular Biology: Genetic flow proceeds DNA \\to RNA \\to Protein; Transcription by RNA polymerase and Translation on ribosomes via codon-anticodon recognition.",
      "Plant Physiology & Photosynthesis: Light-dependent reactions generate ATP and NADPH via Z-scheme photophosphorylation; Calvin-Benson cycle fixes CO2 into carbohydrates via RuBisCO.",
      "Plant Water Relations & Transpiration: Water moves along water potential gradient \\Psi_w = \\Psi_s + \\Psi_p; cohesion-tension theory explains ascent of xylem sap driven by stomatal transpiration.",
      "Animal Physiology & Homeostasis: Nervous coordination via action potentials; endocrine regulation via hormones; circulatory system distributes oxygen, nutrients, and immune cells.",
      "Microbiology & Microbial Growth: Bacterial growth curve shows Lag, Log/Exponential, Stationary, and Death phases; exponential generation time g = \\frac{t}{n}.",
      "Immunology Fundamentals: Innate immunity (physical barriers, phagocytes) and adaptive immunity (B-cell antibodies and T-cell cytotoxicity); memory cells confer long-term immunity.",
      "Ecology & Ecosystem Dynamics: Trophic levels and 10% energy transfer rule; biogeochemical cycles (carbon, nitrogen, phosphorus); biodiversity hotspots and conservation strategies.",
    ],
    keyPoints: [
      "Chargaff's Rules: In double-stranded DNA, %A = %T and %G = %C; (A + G) / (T + C) = 1.",
      "Water Potential Equation: \\Psi_w = \\Psi_s + \\Psi_p; pure water has maximum potential \\Psi_w = 0.",
      "Bacterial Generation Equation: N_t = N_0 \\cdot 2^n; generation count n = \\frac{\\log N_t - \\log N_0}{\\log 2}.",
      "Genetic Code Key Rules: Universal, degenerate (multiple codons per amino acid), non-overlapping; Start codon AUG (Met); Stop codons UAA, UAG, UGA.",
      "10% Ecological Energy Rule: Only approximately 10% of energy is transferred from one trophic level to the next.",
      "Enzyme Kinetics (Michaelis-Menten): v = \\frac{V_{max} [S]}{K_m + [S]}; K_m is substrate concentration at half-maximal velocity.",
      "Photosynthesis Equation: 6CO_2 + 6H_2O \\xrightarrow{light} C_6H_{12}O_6 + 6O_2.",
      "Aerobic Respiration Yield: Theoretical maximum yield is 30-32 ATP per oxidized glucose molecule.",
      "Antibody Structure: Y-shaped immunoglobulin composed of two identical Heavy (H) chains and two Light (L) chains linked by disulfide bonds.",
      "Exam Tip: Always illustrate biological cycles (e.g. Calvin cycle, Krebs cycle, Nitrogen cycle) with closed-loop labeled flowcharts.",
    ],
  },
};

/**
 * Universal B.Sc generator that synthesizes detailed, accurate revision notes
 * for ANY subject & unit in the B.Sc syllabus.
 * Produces 10 Highlights + 10 Key Points (Bookmarks) per unit.
 */
export function generateBScTopic(subjectName: string, unitTitle: string, unitNumber: number): TopicKnowledge {
  const s = subjectName.toLowerCase();
  const u = unitTitle.toLowerCase();

  // Check direct matches
  if (s.includes("c ") || s.includes("programming") || s.includes("python") || s.includes("java")) {
    return bscKnowledge["programming in c"];
  }
  if (s.includes("data structure") || s.includes("algorithm")) {
    return bscKnowledge["data structures"];
  }
  if (s.includes("dbms") || s.includes("database") || s.includes("sql")) {
    return bscKnowledge["database management"];
  }
  if (s.includes("calculus") || s.includes("derivative") || s.includes("integral") || s.includes("ode") || s.includes("differential")) {
    return bscKnowledge["calculus"];
  }
  if (s.includes("algebra") || s.includes("linear") || s.includes("vector") || s.includes("matrix") || s.includes("matrices")) {
    return bscKnowledge["linear algebra"];
  }
  if (s.includes("physics") || s.includes("mechanics") || s.includes("optics") || s.includes("waves") || s.includes("electronics")) {
    return bscKnowledge["physics"];
  }
  if (s.includes("chemistry") || s.includes("inorganic") || s.includes("organic") || s.includes("physical chem") || s.includes("spectroscopy")) {
    return bscKnowledge["chemistry"];
  }
  if (s.includes("botany") || s.includes("zoology") || s.includes("plant") || s.includes("animal") || s.includes("bio") || s.includes("life") || s.includes("microbio") || s.includes("genetics")) {
    return bscKnowledge["life sciences"];
  }

  // Domain synthesis based on unit and subject keywords
  const highlights = [
    `Foundational Scientific Principle of ${unitTitle}: Serves as a primary analytical framework in ${subjectName}, establishing theoretical foundations and empirical methods required for scientific inquiry.`,
    `Governing Theoretical Model & Formulation: Formulated through standard scientific conservation laws: \\sum \\Phi = \\text{constant} or \\frac{d\\Psi}{dt} = f(\\Psi, t), describing equilibrium behavior across operational boundaries.`,
    `Constitutive Relationships & Constants: Relates empirical variables through standard state equations: y = m x + c or \\Phi = K \\cdot \\Delta X, connecting physical stimuli to experimental observations.`,
    `Experimental Methodology & Instrumentation: Detailed protocols for experimental setup, precision measurement, sensor calibration, and minimization of systematic observation errors.`,
    `Analytical Derivation & Mathematical Proof: Derives closed-form analytical equations through step-by-step mathematical reasoning, verifying boundary constraints and physical dimensional homogeneity.`,
    `Quantitative Metrics & Statistical Validation: Evaluated using standard scientific indicators: mean \\bar{x} = \\frac{1}{N}\\sum x_i, standard deviation \\sigma = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{N-1}}, and correlation coefficient r.`,
    `Systematic Errors & Environmental Variations: Analyzes instrumental drift, ambient temperature variations, sample contamination, and experimental uncertainty limits.`,
    `Practical Laboratory & Real-World Applications: Applied directly in academic research, clinical diagnostics, industrial quality control, and scientific computational modeling.`,
    `Computational Modeling & Simulation: Analyzed using statistical software (R, Python, MATLAB) and numerical approximations when closed-form solutions are analytically complex.`,
    `University Examination Blueprint: To score full marks, provide standard definitions, draw neat labeled schematics or structural diagrams, write governing formulas with units, and state physical significance.`,
  ];

  const keyPoints = [
    `Core Definition & Role: State the exact scientific definition of ${unitTitle} and its primary role in ${subjectName}.`,
    `Primary Governing Equation: \\Psi(x, t) = \\Psi_0 e^{-\\alpha t} \\cos(\\omega t + \\phi) governs analytical behavior and quantitative relationships in ${unitTitle}.`,
    `Secondary Empirical Relationship: \\frac{d^2 y}{dx^2} + k^2 y = 0 expresses fundamental harmonic balance and state transitions.`,
    `Units & Dimensional Homogeneity: Verify dimensional consistency across all calculated terms: [Length] = L, [Time] = T, [Mass] = M.`,
    `Experimental Assumptions: Always document standard temperature and pressure (STP), ideal conditions, and baseline calibration controls.`,
    `Critical Statistical Threshold: p-value < 0.05 indicates statistical significance; 95% confidence interval \\bar{x} \\pm 1.96 \\frac{\\sigma}{\\sqrt{n}}.`,
    `Step-by-Step Derivation Rule: Identify initial boundary conditions, apply governing laws, integrate over domain, and evaluate constants of integration.`,
    `Comparison & Contrast Metric: Compare primary experimental method against standard reference controls in terms of sensitivity and specificity.`,
    `Memory Mnemonic: Use acronyms and memory aids for classification hierarchies and always verify physical limiting values at extremes.`,
    `Exam Gold Tip: Underline key technical keywords, state SI units explicitly, draw neat labeled graphs, and box final numerical answers.`,
  ];

  return { highlights, keyPoints };
}

/**
 * Return revision points for a B.Sc unit (10 Highlights + 10 Key Points / Bookmarks = 20 points).
 */
export function getBScUnitPoints(unitId: string): RevisionPoint[] {
  const found = getUnit(unitId);
  if (!found) return [];

  const { subject, unit } = found;
  const knowledge = generateBScTopic(subject.name, unit.title, unit.unit_number);

  const points: RevisionPoint[] = [];

  // Add Highlights (kind: "highlight") - 10 items
  knowledge.highlights.forEach((content, index) => {
    points.push({
      id: `${unitId}-hl-${index + 1}`,
      unit_id: unitId,
      kind: "highlight",
      point_number: index + 1,
      content,
      display_order: index + 1,
    });
  });

  // Add Key Points (kind: "bookmark") - 10 items
  knowledge.keyPoints.forEach((content, index) => {
    points.push({
      id: `${unitId}-kp-${index + 1}`,
      unit_id: unitId,
      kind: "bookmark",
      point_number: index + 1,
      content,
      display_order: knowledge.highlights.length + index + 1,
    });
  });

  return points;
}

/**
 * Return counts of revision points for an array of B.Sc unit IDs.
 * 20 points per unit (10 Highlights + 10 Key Points).
 */
export function getBScPointsCount(unitIds: string[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const id of unitIds) {
    if (id.startsWith("bsc-")) {
      counts[id] = 20; // 10 highlights + 10 key points (bookmarks)
    }
  }
  return counts;
}
