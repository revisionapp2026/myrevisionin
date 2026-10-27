"""
DBMS and Digital Logic Units for B.Tech Semester 3.
"""

dbms_digital_units = {
    # 3. DATABASE MANAGEMENT SYSTEMS
    "btech-dbms: er model": {
        "highlights": [
            "Three-Schema Architecture: ANSI/SPARC framework separating physical level (storage allocation), logical/conceptual level (schema design), and external/view level (user views).",
            "Data Independence: Logical data independence insulates external schemas from conceptual changes; Physical data independence insulates conceptual schema from storage reorganizations.",
            "Entity-Relationship Modeling: High-level conceptual data model representing real-world entities, entity sets, attributes (simple, composite, multivalued, derived), and relationship sets.",
            "Key Constraints: Superkey uniquely identifies entity; Candidate key is minimal superkey; Primary key is selected candidate key; Foreign key establishes referential integrity.",
            "Relationship Cardinality Ratios: Mapping constraints: One-to-One (1:1), One-to-Many (1:N), Many-to-One (N:1), and Many-to-Many (M:N); participation constraints (total vs partial).",
            "Weak Entity Sets: Entities lacking sufficient primary key attributes; identified by owner entity primary key combined with partial key (discriminator) via identifying relationship.",
            "Extended ER (EER) Specialization & Generalization: Top-down specialization and bottom-up generalization hierarchies; disjointness constraints (disjoint vs overlapping) and completeness (total vs partial).",
            "Aggregation Modeling: Higher-level abstraction treating a relationship between entity sets as an aggregate entity, allowing it to participate in further relationships.",
            "ER-to-Relational Mapping: Strong entities map to relations; 1:N relationships map foreign key into $N$-side relation; M:N relationships require separate cross-reference junction table.",
            "University Examination Strategy: Draw clean ER diagrams with standard Chen notation: rectangles for entities, double rectangles for weak entities, diamonds for relationships, ovals for attributes."
        ],
        "keyPoints": [
            "Candidate Key Definition: A superkey $K$ such that no proper subset of $K$ is a superkey (strict minimality).",
            "Weak Entity Key: $\\text{Primary Key} = \\text{Owner Primary Key} + \\text{Discriminator (Partial Key)}$.",
            "M:N Relationship Mapping: Must create a new relation containing primary keys of both participating entities as composite foreign keys.",
            "Total Participation: In ER diagrams, represented by a double line connecting entity set to the relationship diamond.",
            "Derived Attributes: Represented by a dashed oval; calculated dynamically (e.g. `age` derived from `date_of_birth`).",
            "Multivalued Attributes: Represented by a double oval; mapped to a separate relation with foreign key back to owner.",
            "Referential Integrity Rule: Foreign key value must either match an existing primary key value in referenced table or be NULL.",
            "Generalization vs Specialization: Generalization extracts common features upward; Specialization subdivides entities downward.",
            "Physical Data Independence: Modifying disk storage access paths or indexes does not alter conceptual schema queries.",
            "Exam Scoring Tip: When mapping an ER diagram to relational tables, explicitly underline primary keys and use dotted underlines or arrows for foreign keys."
        ]
    },
    "btech-dbms: relational model & sql": {
        "highlights": [
            "Relational Model Formalism: Codd's relational model organizes data into relations (tables), tuples (rows), and attributes (columns); domain constraints enforce atomic attribute values.",
            "Relational Algebra Core Operators: Selection ($\\sigma_\\theta(R)$ filters tuples), Projection ($\\pi_L(R)$ selects columns and eliminates duplicates), Cartesian Product ($R \\times S$), Union ($R \\cup S$), and Set Difference ($R - S$).",
            "Relational Join Operations: Theta Join ($R \\bowtie_\\theta S$), Natural Join ($R \\bowtie S$ on common attributes), and Outer Joins (Left $\\mathbin{⟕}$, Right $\\mathbin{⟖}$, Full $\\mathbin{⟗}$ preserving unmatched tuples with NULLs).",
            "Relational Calculus: Non-procedural declarative query languages: Tuple Relational Calculus (TRC: $\{t \\mid P(t)\\}$) and Domain Relational Calculus (DRC); Codd's theorem proves equivalence with relational algebra.",
            "SQL DDL Commands: Data Definition Language: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, and integrity constraints (`PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`, `CHECK`).",
            "SQL DML & Query Processing: Data Manipulation Language: `SELECT`, `INSERT`, `UPDATE`, `DELETE`; execution order: `FROM` $\\to$ `WHERE` $\\to$ `GROUP BY` $\\to$ `HAVING` $\\to$ `SELECT` $\\to$ `ORDER BY`.",
            "SQL Aggregates & Grouping: Aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`); `WHERE` filters individual rows prior to grouping, whereas `HAVING` filters aggregated group sets.",
            "Nested Subqueries & Correlated Queries: Subqueries in `WHERE` and `FROM` clauses; correlated subqueries reference outer query attributes, executing once per outer tuple (e.g. `EXISTS`, `NOT EXISTS`).",
            "Database Views & Security: Virtual tables defined by stored queries (`CREATE VIEW`); simplifies complex queries, enforces row/column level security, and supports updatable view criteria.",
            "University Examination Strategy: Write clear SQL queries and equivalent relational algebra expressions side-by-side to demonstrate theoretical and practical mastery."
        ],
        "keyPoints": [
            "Relational Completeness: A query language is relationally complete if it can express any query formulable in basic relational algebra.",
            "Natural Join Equality: $R \\bowtie S = \\pi_{\\text{attributes}}(\\sigma_{R.A = S.A}(R \\times S))$.",
            "WHERE vs HAVING: `WHERE` filters rows before aggregation; `HAVING` filters groups after aggregation.",
            "Correlated Subquery: Evaluated repeatedly for every single row processed by the outer query loop.",
            "NULL Semantics in SQL: Three-valued logic: `TRUE`, `FALSE`, `UNKNOWN`; comparisons with NULL (`x = NULL`) yield `UNKNOWN`; must use `IS NULL`.",
            "DROP vs TRUNCATE: `DROP` destroys table schema and data; `TRUNCATE` rapidly deallocates data pages retaining table structure without logging individual row deletes.",
            "Cartesian Product Tuple Count: If relation $R$ has $n_1$ tuples and relation $S$ has $n_2$ tuples, $R \\times S$ yields exactly $n_1 \\times n_2$ tuples.",
            "Division Operator in Relational Algebra: $R \\div S$ finds tuples in $R$ associated with all tuples in $S$ (expresses queries with 'for all' semantics).",
            "Duplicate Elimination: Relational algebra projection $\\pi$ automatically removes duplicates; SQL `SELECT` retains duplicates unless `DISTINCT` is specified.",
            "Exam SQL Tip: Remember that non-aggregated columns in the `SELECT` list must strictly appear in the `GROUP BY` clause."
        ]
    },
    "btech-dbms: normalization": {
        "highlights": [
            "Database Anomalies: Poor relational schema design causes Insertion, Deletion, and Modification/Update anomalies due to unconstrained data redundancy.",
            "Functional Dependencies (FD): Constraint $\\alpha \\to \\beta$ asserts that whenever two tuples agree on attributes $\\alpha$, they must strictly agree on attributes $\\beta$.",
            "Armstrong's Inference Axioms: Sound and complete rules for deriving FD closure $F^+$: Reflexivity (if $\\beta \\subseteq \\alpha$, then $\\alpha \\to \\beta$), Augmentation, and Transitivity.",
            "Attribute Closure Algorithm: Attribute closure $\\alpha^+$ computes all attributes functionally determined by $\\alpha$ under $F$ in polynomial time; used to identify candidate keys.",
            "First Normal Form (1NF): Requires all domain values to be atomic (indivisible scalars); strictly prohibits composite attributes, multivalued attributes, and nested tables.",
            "Second Normal Form (2NF): Relation is in 1NF and contains zero partial dependencies (no non-prime attribute depends on a proper subset of any candidate key).",
            "Third Normal Form (3NF): Relation is in 2NF and contains zero transitive dependencies; for every non-trivial FD $\\alpha \\to \\beta$, either $\\alpha$ is a superkey or $\\beta$ is a prime attribute.",
            "Boyce-Codd Normal Form (BCNF): Stricter variant of 3NF; for every non-trivial FD $\\alpha \\to \\beta$, $\\alpha$ must be a superkey; eliminates all redundancy based on functional dependencies.",
            "Lossless Join Decomposition: Decomposition of $R$ into $R_1, R_2$ is lossless iff $R_1 \\cap R_2 \\to R_1$ or $R_1 \\cap R_2 \\to R_2$ (common attribute is superkey of at least one relation).",
            "Dependency Preservation: Decomposition preserves dependencies iff $(F_1 \\cup F_2)^+ = F^+$; 3NF always guarantees lossless join and dependency preservation, whereas BCNF may lose dependencies."
        ],
        "keyPoints": [
            "Prime Attribute: An attribute that is a member of at least one candidate key of the relation.",
            "Partial Dependency: Non-prime attribute determined by a proper subset of a candidate key; violates 2NF.",
            "Transitive Dependency: Non-prime attribute determined by another non-prime attribute ($X \\to Y$ and $Y \\to Z$); violates 3NF.",
            "3NF Condition: For every non-trivial $\\alpha \\to \\beta$: $\\alpha$ is superkey OR $\\beta$ is prime attribute.",
            "BCNF Condition: For every non-trivial $\\alpha \\to \\beta$: $\\alpha$ MUST be a superkey.",
            "Lossless Join Test: Decomposition $(R_1, R_2)$ is lossless iff $R_1 \\cap R_2 \\to R_1$ or $R_1 \\cap R_2 \\to R_2$.",
            "Minimal Cover of FDs: Canonical representation containing single-attribute right-hand sides, zero extraneous left-hand attributes, and zero redundant dependencies.",
            "Multi-Valued Dependency (MVD) & 4NF: MVD $\\alpha \\twoheadrightarrow \\beta$ asserts independence between multi-valued sets; 4NF eliminates non-trivial MVDs where $\\alpha$ is not superkey.",
            "BCNF vs 3NF Trade-Off: 3NF guarantees dependency preservation; BCNF eliminates all functional redundancy but may fail dependency preservation.",
            "Exam Normalization Steps: (1) Find candidate keys using attribute closure, (2) Classify prime/non-prime attributes, (3) Test each FD against 2NF, 3NF, BCNF rules sequentially."
        ]
    },
    "btech-dbms: transactions": {
        "highlights": [
            "Transaction ACID Properties: Atomicity (all-or-nothing execution), Consistency (preserves database integrity constraints), Isolation (concurrent execution serializable), and Durability (committed updates persist).",
            "Transaction State Machine: State transitions: Active $\\to$ Partially Committed (after final statement) $\\to$ Committed; or Active/Partially Committed $\\to$ Failed $\\to$ Aborted (rolled back).",
            "Concurrent Execution Anomalies: Dirty Read (reading uncommitted data from aborted transaction), Non-Repeatable Read (re-reading modified data), and Phantom Read (tuples inserted mid-transaction).",
            "Conflict Serializability: A concurrent schedule is conflict serializable if it can be transformed into a serial schedule by swapping non-conflicting adjacent operations.",
            "Conflict Precedence Graph: Directed graph with vertices as transactions and directed edge $T_i \\to T_j$ if conflicting operation in $T_i$ precedes operation in $T_j$; schedule is conflict serializable iff graph is acyclic.",
            "View Serializability: Weaker serializability condition based on initial read, write-read dependencies, and final writes; NP-complete to test in general.",
            "Two-Phase Locking (2PL) Protocol: Growing phase (locks acquired, no locks released) and Shrinking phase (locks released, no locks acquired); guarantees conflict serializability.",
            "Strict 2PL & Rigorous 2PL: Strict 2PL holds all exclusive locks until commit/abort (prevents cascading rollbacks); Rigorous 2PL holds all shared and exclusive locks until commit.",
            "Deadlock Management: Handled via Deadlock Prevention (Wait-Die non-preemptive vs Wound-Wait preemptive using timestamps) or Deadlock Detection (Wait-For Graph cycles and victim selection).",
            "Write-Ahead Logging (WAL): ARIES recovery algorithm mandates log records written to non-volatile storage before corresponding database dirty pages are flushed; supports UNDO/REDO."
        ],
        "keyPoints": [
            "Conflicting Operations: Two operations conflict iff they belong to different transactions, access the same data item, and at least one is a `WRITE`.",
            "Precedence Graph Serializability: Cycle in precedence graph $\\implies$ NOT conflict serializable; Topological sort of acyclic graph gives serial order.",
            "Recoverable Schedule: If $T_j$ reads data item written by $T_i$, then $T_i$ must commit before $T_j$ commits.",
            "Cascadeless Schedule: Transactions read only committed data; eliminates cascading abort chains.",
            "Two-Phase Locking Rule: Once a transaction releases its very first lock, it cannot acquire any new locks.",
            "Wait-Die Protocol (Timestamp $TS$): If older transaction ($TS(T_i) < TS(T_j)$) requests item held by younger $T_j$, $T_i$ waits; If younger requests older, younger dies (aborts).",
            "Wound-Wait Protocol: If older requests item held by younger, older wounds (preempts/aborts) younger; If younger requests older, younger waits.",
            "Checkpoints in WAL: Checkpoint records in log flush dirty pages to disk, bounding the recovery scan window during system restarts.",
            "ACID Responsibility: Atomicity & Durability managed by Recovery Manager; Isolation managed by Concurrency Control; Consistency enforced by application + constraints.",
            "Exam Trace Strategy: When testing schedule serializability, construct the Precedence Graph explicitly, draw directed edges, and state whether cycles exist."
        ]
    },
    "btech-dbms: indexing & storage": {
        "highlights": [
            "Physical Storage Hierarchy: Volatile fast cache and RAM; Non-volatile magnetic disk (cylinders, tracks, sectors) and Solid-State Drives (NAND flash pages and blocks).",
            "File Organization Schemes: Heap file (unordered insertion $O(1)$, search $O(n)$), Sequential sorted file (binary search $O(\\log n)$, expensive inserts), and Hash file organization.",
            "Primary vs Secondary Indexes: Primary index created on ordered key attribute (sparse index); Secondary index created on non-ordering attributes (dense index with bucket pointers).",
            "Dense vs Sparse Indexing: Dense index contains an index record for every search-key value in data file; Sparse index contains index records only for subset of blocks.",
            "B-Tree Data Structure: Balanced multi-way search tree of order $m$; every internal node has at least $\\lceil m/2 \\rceil$ children; stores keys and record pointers in both internal and leaf nodes.",
            "B+ Tree Architecture: Standard database indexing standard; keys duplicated in internal routing nodes, while all actual data pointers reside exclusively in linked leaf nodes.",
            "B+ Tree Height Bound: For file with $N$ records and fan-out $B$, tree height $h \\le \\lceil \\log_{\\lceil m/2 \\rceil}(N) \\rceil$, guaranteeing disk I/O cost $O(\\log_B N)$.",
            "B+ Tree Range Scans: Leaf nodes are doubly linked sequentially, enabling highly efficient range queries ($A \\le X \\le B$) without traversing upper index levels.",
            "Static vs Extendible Hashing: Static hashing degrades with collisions; Extendible Hashing uses a directory of global depth $d$ and local depth $p$, splitting only overflowing buckets.",
            "Query Optimization & Cost Estimation: Evaluates query execution plans using catalog metadata, disk block I/O cost estimations, selection cardinalities, and join algorithms (Nested-loop, Block nested-loop, Hash join)."
        ],
        "keyPoints": [
            "B+ Tree Invariant: All leaf nodes reside at the exact same depth level (perfect balance).",
            "B+ Tree Leaf Node Structure: Leaf nodes contain sorted keys and record pointers, terminated by a pointer to the next right-hand sibling leaf node.",
            "B+ Tree Node Capacity: Order $m$ internal node holds at most $m-1$ keys and $m$ child pointers; at least $\\lceil m/2 \\rceil - 1$ keys.",
            "Clustered Index: Determines physical sequential ordering of data records on disk; a table can possess at most ONE clustered index.",
            "Unclustered Index: Data records stored arbitrarily; index leaf pointers point to physical record addresses; multiple unclustered indexes permitted.",
            "Extendible Hashing Directory Doubling: Global depth increases by 1 ($d \\leftarrow d+1$) and directory doubles only when a bucket with local depth $p = d$ overflows.",
            "Block Transfer Cost: Database query cost is dominated by the number of disk block I/O transfers, rather than in-memory CPU comparison time.",
            "Hash Join Complexity: Partitions both relations using a hash function; optimal when smaller relation fits in available RAM buffer pages.",
            "Selection Cardinality Estimation: For condition $A = v$, estimated size is $n_R / V(A, R)$ where $V(A, R)$ is the number of distinct values of $A$.",
            "Exam B+ Tree Insertion Rule: When node overflows with $m$ keys, split into two nodes of $\\lceil (m-1)/2 \\rceil$ and copy/promote the median key to parent."
        ]
    }
}

print("DBMS units loaded.")
