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
# 3. DATABASE MANAGEMENT SYSTEMS (B.Tech)
# =========================================================================
add("Database Management Systems", 1, "ER Model", [
    "Database System Architecture & Abstraction: Three-schema architecture (Internal/Physical level, Conceptual/Logical level, External/View level); Physical data independence vs Logical data independence; Data Definition Language (DDL) and Data Manipulation Language (DML).",
    "Entity-Relationship (ER) Modeling Concepts: Entity sets, Weak vs Strong entities (identifying relationship, partial discriminator key); Attributes (simple, composite, single-valued, multi-valued, derived); Domain constraints.",
    "Relationship Constraints & Cardinality: Mapping cardinality ratios ($1:1, 1:N, N:1, M:N$); Participation constraints (Total participation indicated by double lines vs Partial participation); Degree of relationship (binary, ternary, recursive).",
    "Enhanced ER (EER) Modeling Concepts: Specialization and Generalization; Attribute inheritance; Disjointness constraints (disjoint vs overlapping subclasses); Completeness constraints (total vs partial specialization); Category / Union types.",
    "Mapping ER Diagrams to Relational Tables: Strong entity mapping; Multi-valued attribute mapping to separate relation with foreign key; Weak entity mapping with identifying composite primary key; Binary $1:N$ mapping (foreign key in $N$-side relation); Binary $M:N$ mapping (junction table with composite primary key).",
    "Integrity Constraints in Relational Databases: Domain constraints, Key constraints (Superkey, Candidate key, Primary key), Entity integrity constraint (Primary key cannot be null), Referential integrity constraint (Foreign key must reference valid primary key or be null).",
    "Relational Algebra Core Operations: Selection ($\\sigma_{\\text{condition}}(R)$), Projection ($\\pi_{\\text{attributes}}(R)$), Cartesian Product ($R \\times S$), Set Union ($R \\cup S$), Set Difference ($R - S$), Rename ($\\rho$).",
    "Derived Relational Algebra Operations: Natural Join ($R \\bowtie S$), Theta Join ($R \\bowtie_\\theta S$), Equi-join, Set Intersection ($R \\cap S$), Division operator ($R \\div S$, representing universal 'for all' queries).",
    "Tuple Relational Calculus (TRC) & Domain Relational Calculus (DRC): Declarative query languages; Non-procedural query expressions $\\{ t \\mid P(t) \\}$; Safety of relational calculus queries; Codd's Equivalence Theorem.",
    "University Examination Strategy: Convert complex business narrative requirements into standard ER diagrams with explicit cardinality/participation constraints, convert ER schemas to normalized relational tables, and write relational algebra queries with selection/projection optimization."
], [
    "Three-Schema Principle: Isolates internal storage structures from logical application views, enabling physical data independence.",
    "Weak Entity Identification: Primary key consists of partial discriminator combined with the owner entity's primary key.",
    "Total Participation Definition: Every entity in the entity set must participate in at least one relationship instance.",
    "ER to Table 1:N Rule: Place the primary key of the 1-side as a foreign key attribute inside the N-side table.",
    "ER to Table M:N Rule: Requires a separate bridge/junction table containing composite foreign keys referencing both participating entities.",
    "Entity Integrity Rule: No primary key component can take a NULL value ($PK \\ne \\text{NULL}$).",
    "Referential Integrity Rule: If foreign key $FK$ in relation $R_1$ references $PK$ in $R_2$, then $FK$ must equal an existing $PK$ or be NULL.",
    "Relational Division Operator: $R \\div S$ retrieves all tuples in $R$ that are associated with all tuples in relation $S$.",
    "Derived Attribute Notation: Represented as dashed/dotted ovals in Chen ER notation; computed dynamically from stored attributes.",
    "Exam Gold Tip: In ER mapping, remember to create a separate independent table for every multi-valued attribute."
])

add("Database Management Systems", 2, "Relational Model & SQL", [
    "Relational Model Foundations: Relations as mathematical tables; Tuples (rows), Attributes (columns); Cardinality (number of tuples) vs Degree/Arity (number of attributes); Atomic attribute value rule (First Normal Form requirement).",
    "SQL Data Definition Language (DDL): Statements: `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`, `TRUNCATE TABLE`; Table constraints: `PRIMARY KEY`, `FOREIGN KEY ... REFERENCES ... ON DELETE CASCADE / SET NULL`, `UNIQUE`, `NOT NULL`, `CHECK` constraints.",
    "SQL Data Manipulation Language (DML): Statements: `SELECT`, `INSERT INTO`, `UPDATE ... SET`, `DELETE FROM`; Set operators: `UNION`, `INTERSECT`, `EXCEPT` / `MINUS` (default duplicate elimination vs `UNION ALL`).",
    "SQL Aggregation & Grouping Semantics: Aggregate functions: `COUNT(*)`, `SUM()`, `AVG()`, `MIN()`, `MAX()`; `GROUP BY` clause mechanics; `HAVING` clause vs `WHERE` clause (filtering aggregated groups vs individual rows); Execution order: FROM $\\to$ WHERE $\\to$ GROUP BY $\\to$ HAVING $\\to$ SELECT $\\to$ ORDER BY.",
    "SQL Join Operations: Inner Join (`INNER JOIN`), Natural Join (`NATURAL JOIN`), Outer Joins: Left Outer Join (`LEFT JOIN`), Right Outer Join (`RIGHT JOIN`), Full Outer Join (`FULL OUTER JOIN`); Cross Join (Cartesian Product); Self Joins.",
    "Nested Subqueries & Correlated Subqueries: Scalar subqueries, subqueries returning sets; Set comparison operators: `IN`, `NOT IN`, `ANY` / `SOME`, `ALL`; Correlated subqueries evaluated row-by-row; Existence testing with `EXISTS` and `NOT EXISTS`.",
    "Views & View Update Rules: Virtual relations created via `CREATE VIEW`; Security, logical data independence; Updatable views criteria (single base table, includes primary key, no aggregation, no `GROUP BY` or `DISTINCT`).",
    "SQL Advanced Features: Common Table Expressions (CTE) with `WITH` clause; Recursive CTEs; Window analytic functions (`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `OVER (PARTITION BY ... ORDER BY ...)`).",
    "Triggers and Stored Procedures: Active database rules; Event-Condition-Action (ECA) model; `BEFORE` vs `AFTER` triggers; `FOR EACH ROW` vs `FOR EACH STATEMENT`; Stored procedures and PL/SQL cursors.",
    "University Examination Strategy: Write nested SQL queries using `EXISTS` and `GROUP BY ... HAVING`, solve outer join query output tracing problems, and write PL/SQL trigger procedures with integrity constraint validation."
], [
    "SQL Execution Sequence: FROM $\\to$ JOIN $\\to$ WHERE $\\to$ GROUP BY $\\to$ HAVING $\\to$ SELECT $\\to$ DISTINCT $\\to$ ORDER BY $\\to$ LIMIT.",
    "WHERE vs HAVING Distinction: WHERE filters rows prior to aggregation; HAVING filters aggregated groups after GROUP BY.",
    "NOT IN with NULL Trap: If subquery returns a NULL value, `NOT IN` evaluates to UNKNOWN for all outer rows, returning empty set.",
    "EXISTS Optimization: Evaluates to TRUE as soon as the first matching tuple is found, avoiding full table scans.",
    "ON DELETE CASCADE Action: Automatically deletes child rows in referencing table when corresponding parent row is deleted.",
    "RANK vs DENSE_RANK: RANK skips subsequent rank numbers after ties (1, 1, 3); DENSE_RANK does not skip numbers (1, 1, 2).",
    "COUNT(*) vs COUNT(column): `COUNT(*)` counts all rows including NULLs; `COUNT(column)` ignores NULL values in that column.",
    "Correlated Subquery Mechanism: Re-evaluated once for each candidate tuple considered by the outer query.",
    "Updatable View Rule: View cannot be updated directly if it involves aggregate functions, `GROUP BY`, `UNION`, or `DISTINCT`.",
    "Exam Scoring Tip: In SQL query writing, always specify table aliases when joining multiple tables sharing common column names."
])

add("Database Management Systems", 3, "Normalization", [
    "Relational Database Anomalies & Redundancy: Update anomalies, Insertion anomalies, Deletion anomalies caused by poorly designed schemas; Objective of normalization: eliminate redundancy while preserving functional dependencies and lossless joins.",
    "Functional Dependencies (FD): Formal definition: $X \\to Y$ holds if for any tuples $t_1, t_2$, $t_1[X] = t_2[X] \\implies t_1[Y] = t_2[Y]$; Trivial vs non-trivial FDs; Full functional dependency vs partial functional dependency; Transitive dependency.",
    "Armstrong's Axioms for FD Inference: Sound and complete inference rules: (1) Reflexivity: if $Y \\subseteq X$, then $X \\to Y$; (2) Augmentation: if $X \\to Y$, then $X Z \\to Y Z$; (3) Transitivity: if $X \\to Y$ and $Y \\to Z$, then $X \\to Z$; Derived rules: Union, Decomposition, Pseudo-transitivity.",
    "Attribute Closure Algorithm: Algorithm to compute $X^+$ under a set of FDs $F$; Used to test if $X$ is a superkey, test membership of an FD in $F^+$, and discover all candidate keys of a relation in polynomial time.",
    "First Normal Form (1NF) & Second Normal Form (2NF): 1NF: All attribute values must be atomic (no repeating groups or composite values); 2NF: Relation in 1NF and every non-prime attribute is fully functionally dependent on every candidate key (no partial dependencies).",
    "Third Normal Form (3NF): Relation in 2NF and for every non-trivial FD $X \\to Y$, either $X$ is a superkey or $Y$ is a prime attribute (part of some candidate key); Eliminates transitive dependencies for non-prime attributes.",
    "Boyce-Codd Normal Form (BCNF): Stricter than 3NF; For every non-trivial FD $X \\to Y$, $X$ must be a superkey; Resolves anomalies when candidate keys overlap; Every relation in BCNF is in 3NF, but converse is false.",
    "Decomposition Properties: (1) Lossless-Join Decomposition (guaranteed if $R_1 \\cap R_2 \\to R_1$ or $R_1 \\cap R_2 \\to R_2$); (2) Dependency Preservation (decomposition preserves all original FDs if $(F_1 \\cup F_2)^+ = F^+$); 3NF always achieves both; BCNF guarantees lossless-join but may not preserve dependencies.",
    "Higher Normal Forms: Multi-Valued Dependencies (MVD: $X \\twoheadrightarrow Y$) and Fourth Normal Form (4NF); Join Dependencies (JD) and Fifth Normal Form (5NF / Project-Join Normal Form).",
    "University Examination Strategy: Find all candidate keys of a relation using attribute closure, determine the highest normal form of a schema, decompose relations into 3NF and BCNF, and prove whether a decomposition is lossless and dependency preserving."
], [
    "Functional Dependency Definition: $X \\to Y \\iff \\forall t_1, t_2 \\in R, t_1[X] = t_2[X] \\implies t_1[Y] = t_2[Y]$.",
    "Transitivity Axiom: $X \\to Y \\land Y \\to Z \\implies X \\to Z$.",
    "Superkey Criterion: $X$ is a superkey of relation $R$ if and only if $X^+ = R$.",
    "Candidate Key Definition: A minimal superkey (no proper subset of $X$ has closure equal to $R$).",
    "2NF Condition: No non-prime attribute may depend on a proper subset of any candidate key (no partial dependency).",
    "3NF Condition: For every non-trivial $X \\to Y$, $X$ is superkey OR $Y$ is a prime attribute.",
    "BCNF Condition: For every non-trivial $X \\to Y$, $X$ must be a superkey.",
    "Lossless Join Theorem: Decomposition of $R$ into $R_1, R_2$ is lossless $\\iff (R_1 \\cap R_2 \\to R_1) \\in F^+$ or $(R_1 \\cap R_2 \\to R_2) \\in F^+$.",
    "BCNF Dependency Trade-off: BCNF guarantees zero redundancy from functional dependencies but cannot always preserve dependencies.",
    "Exam Gold Tip: In 3NF checks, if the right-hand side attribute $Y$ is prime, the dependency automatically satisfies 3NF."
])

add("Database Management Systems", 4, "Transactions", [
    "Transaction Concept & ACID Properties: Atomicity (all-or-nothing execution, ensured by recovery manager / undo logs); Consistency (preserves database integrity constraints); Isolation (concurrent transactions do not interfere, ensured by concurrency control); Durability (committed changes persist across crashes, ensured by redo logs).",
    "Transaction State Diagram: Active $\\to$ Partially Committed (after final operation executed) $\\to$ Committed; Active $\\to$ Failed (hardware/logic error) $\\to$ Aborted (rolled back) $\\to$ Terminated.",
    "Schedules & Serializability: Serial schedule (transactions execute sequentially, no concurrency); Concurrent schedules; Conflict serializability: two operations conflict if they belong to different transactions, access same data item, and at least one is a write ($W_i(X)$ and $R_j(X)$, $W_i(X)$ and $W_j(X)$).",
    "Precedence (Conflict) Graph Algorithm: Directed graph $G = (V, E)$ where nodes are transactions; Directed edge $T_i \\to T_j$ exists if an operation in $T_i$ conflicts with and precedes an operation in $T_j$; Schedule is conflict serializable if and only if precedence graph is acyclic (contains no directed cycles); Topological sort produces equivalent serial schedule.",
    "View Serializability & Blind Writes: Schedule is view serializable if view equivalent to some serial schedule (same initial reads, same updated-read pairs, same final writes); Every conflict serializable schedule is view serializable; Testing view serializability is NP-complete; Enabled by blind writes ($W(X)$ without preceding $R(X)$).",
    "Recoverability of Schedules: Recoverable schedule (if $T_j$ reads data written by $T_i$, $T_i$ commits before $T_j$ commits); Cascading rollback / Cascadeless schedule (transaction only reads committed data, preventing domino rollbacks); Strict schedule (transaction cannot read or write data until the previous writer commits/aborts).",
    "Concurrency Control Locking Protocols: Shared Lock ($S$, read-only) and Exclusive Lock ($X$, read-write); Lock compatibility matrix; Two-Phase Locking (2PL): Growing Phase (locks acquired, no locks released) and Shrinking Phase (locks released, no locks acquired); 2PL guarantees conflict serializability.",
    "Strict 2PL & Rigorous 2PL: Strict 2PL holds all Exclusive locks until transaction commit/abort (guarantees conflict serializability and cascadeless recovery); Rigorous 2PL holds all Shared and Exclusive locks until commit (easiest to implement).",
    "Deadlock Handling in Databases: Deadlock detection using Wait-For Graph (WFG, cycle indicates deadlock); Deadlock prevention: Wait-Die scheme (non-preemptive: older waits, younger dies) vs Wound-Wait scheme (preemptive: older wounds younger, younger waits).",
    "Database Recovery Techniques: Write-Ahead Logging (WAL: log record must reach non-volatile storage before corresponding database disk block is written); Undo/Redo recovery algorithms; Checkpointing (fuzzy checkpoints) to truncate log scan during crash recovery."
], [
    "ACID Responsibility: Atomicity & Durability via Recovery Manager; Consistency via Application/DB constraints; Isolation via Concurrency Control.",
    "Conflict Operations Condition: Same data item, different transactions, at least one write operation.",
    "Conflict Serializability Test: A schedule is conflict serializable $\\iff$ its Precedence Graph has no cycles.",
    "2PL Basic Rule: Once a transaction releases any lock, it can never acquire any new locks (Growing $\\to$ Shrinking).",
    "Strict 2PL Benefit: Holding all $X$-locks until transaction end eliminates cascading aborts.",
    "Wait-Die Scheme: Older transaction requests lock held by younger: older waits; Younger requests older: younger dies.",
    "Wound-Wait Scheme: Older requests lock held by younger: older wounds (preempts) younger; Younger requests older: younger waits.",
    "Recoverable Schedule Rule: $T_j$ reads from $T_i \\implies Commit(T_i) < Commit(T_j)$.",
    "WAL Protocol Invariant: Log record for an update must be flushed to disk before the dirty database page is written to disk.",
    "Exam Gold Tip: To find conflict equivalent serial schedule, perform topological sort on the acyclic precedence graph."
])

add("Database Management Systems", 5, "Indexing & Storage", [
    "Physical Storage Hierarchy & File Organization: Memory hierarchy in DBMS: Buffer pool in RAM, Disk pages / blocks on SSD/HDD; Slotted-page architecture for variable-length records; Heap file organization vs Sequential sorted file organization; Unclustered vs Clustered files.",
    "Indexing Foundations: Primary Index (built on primary key of ordered file, sparse index), Clustering Index (built on non-key ordering field, sparse), Secondary Index (built on non-ordering field, strictly dense index); Dense index (entry for every search key) vs Sparse index (entry for each data block).",
    "Multi-Level Indexing: Indexing the index file; Reduces disk block accesses from $O(B)$ to $O(\\log_b B)$; Motivates dynamic balanced tree indices.",
    "B-Tree Data Structure & Indexing: Balanced multi-way search tree; All leaf nodes at same depth; Node of order $m$: at most $m$ children and $m-1$ keys; Internal nodes have at least $\\lceil m/2 \\rceil$ children; Keys and record pointers stored in internal nodes as well as leaf nodes.",
    "B+ Tree Architecture & Indexing: Superior to B-Tree for DBMS; Data record pointers stored strictly in leaf nodes; Leaf nodes linked sequentially via doubly linked list pointers for high-performance range queries; Internal nodes store search keys and child pointers only, providing higher fan-out and lower tree height.",
    "B+ Tree Insertion and Deletion Mechanics: Insertion: split node when keys exceed $m-1$, push middle key up; Deletion: borrow key from sibling or merge with sibling when keys drop below $\\lceil m/2 \\rceil - 1$; Tree height typically $3-4$ levels even for billions of records; Search cost $O(\\log_B N)$.",
    "Static and Dynamic Hashing: Static hashing (bucket overflow handled by overflow chaining); Extendible Hashing (directory of pointers, global depth $d$ and local depth $d'$, bucket splits double directory only when $d' = d$); Linear Hashing (split pointer $p$ systematically rounds through buckets, avoids directory).",
    "Query Processing & Optimization: Query processing phases: Parsing & Translation $\\to$ Optimization $\\to$ Execution; Query execution plan / operator tree; Cost metric based on disk block transfers and seek time; Evaluation of selection algorithms (linear scan vs index scan) and join algorithms (nested-loop join, block nested-loop, index nested-loop, sort-merge join, hash join).",
    "Buffer Management & Replacement Policies: Buffer pool manager; Frame table, dirty bit, pin count; Buffer replacement strategies: LRU, Clock algorithm (Second Chance), Buffer pool hit ratio.",
    "University Examination Strategy: Calculate maximum keys, minimum keys, and order $m$ for B+ trees given disk block size and pointer lengths, trace B+ tree insertion and deletion splits step-by-step, and compute cost comparisons for Nested Loop vs Hash Join."
], [
    "Dense vs Sparse Index Rule: Sparse index requires the data file to be physically sorted on the index search key.",
    "Secondary Index Constraint: Must always be a dense index because data file is not ordered by the secondary key.",
    "B+ Tree Fan-Out Formula: Fan-out $p$ satisfies: $p \\cdot P_{block} + (p - 1) \\cdot K \\le B_{size}$.",
    "B+ Tree Leaf Node Range: Every leaf node contains between $\\lceil(m-1)/2\\rceil$ and $m-1$ record pointers.",
    "B+ Tree Internal Node Range: Every internal node (except root) has between $\\lceil m/2 \\rceil$ and $m$ children.",
    "B+ Tree Range Query Advantage: Leaf nodes form a continuous linked chain, allowing range scans without traversing internal tree nodes.",
    "Extendible Hashing Directory Doubling: Occurs only when an overflowing bucket has local depth equal to global depth ($d' = d$).",
    "Block Nested-Loop Join Cost: $B(R) + \\frac{B(R)}{M - 2} \\times B(S)$ disk block I/Os, where $M$ is buffer frames.",
    "Hash Join Block Cost: $3 [B(R) + B(S)]$ I/Os for two-pass in-memory hash join.",
    "Exam Gold Tip: In B+ tree calculations, remember that the root node is an exception: it can have as few as 2 children."
])

# Save updated batch 1
with open('scripts/sem3_btech_batch1_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Batch 1 part 2 complete: total units now: {len(data)}")
