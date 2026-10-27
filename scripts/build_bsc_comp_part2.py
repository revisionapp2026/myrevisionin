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
# 3. DATABASE MANAGEMENT & SQL (B.Sc)
# =========================================================================
add("Database Management & SQL", 1, "ER Model", [
    "Foundational Scope of Database Management Systems: Evolution from file-processing systems to centralized DBMS; Data independence (logical vs physical), data redundancy elimination, and concurrent transaction consistency.",
    "Three-Schema ANSI/SPARC Database Architecture: External schema (user views), Conceptual schema (logical enterprise-wide structure), and Internal schema (physical disk storage and index layouts); Data definition language (DDL) mappings.",
    "Entity-Relationship (ER) Conceptual Modeling: Entities (distinguishable real-world objects), Entity Sets, and Entity Types; Strong entity sets (having an intrinsic primary key) vs Weak entity sets (dependent on identifying owner entity set).",
    "Attribute Types & Classification: Simple vs Composite attributes (e.g. `Address` subdivided into `Street, City, Zip`), Single-valued vs Multi-valued (double oval, e.g. `PhoneNumbers`), and Derived attributes (dashed oval, computed dynamically, e.g. `Age` from `DOB`).",
    "Relationship Types & Structural Constraints: Binary, ternary, and recursive self-referential relationships; Cardinality ratios: One-to-One (1:1), One-to-Many (1:N), and Many-to-Many (M:N); Participation constraints: Total participation (double line, existence dependency) vs Partial participation.",
    "Weak Entity Sets & Identifying Relationships: Identifying relationship (double diamond); Partial key / Discriminator (dashed underline); Primary key formation by combining owner primary key with discriminator attribute.",
    "Extended Entity-Relationship (EER) Concepts: Specialization (top-down entity division into subtypes) and Generalization (bottom-up synthesis into supertypes); Attribute inheritance across subtype hierarchies.",
    "EER Constraint Formulations: Disjointness constraints (Disjoint `d` vs Overlapping `o`) and Completeness constraints (Total specialization double line vs Partial specialization single line); Union types / categories.",
    "ER-to-Relational Schema Mapping Rules: Converting strong entities to relation tables; Mapping 1:N relationships via foreign keys; Converting M:N relationships into distinct associative junction tables with composite primary keys; Mapping multivalued attributes to separate tables.",
    "University Examination Strategy: Draw a comprehensive ER diagram for a Hospital or University system specifying cardinalities and participation, explain the 7-step ER-to-relational mapping algorithm, and compare specialization vs generalization."
], [
    "Three-Schema Data Independence: Logical data independence insulates external views from conceptual schema changes; Physical insulates from disk storage modifications.",
    "Weak Entity Identification: Weak entities possess no primary key of their own; identified via partial key plus owner entity's primary key.",
    "Cardinality Ratio Rule: Expresses the maximum number of relationship instances an entity can participate in (1:1, 1:N, M:N).",
    "Participation Constraint: Total participation requires every entity in the set to participate; partial does not.",
    "M:N Relationship Mapping: Many-to-Many relationships must be mapped to an independent junction table containing foreign keys of both participating entities.",
    "Multivalued Attribute Table: Mapped to a dedicated relation consisting of the attribute value plus the primary key of the enclosing entity.",
    "Disjoint Specialization: An entity instance can belong to at most one specialized subclass in the hierarchy.",
    "Overlapping Specialization: An entity instance may simultaneously belong to multiple specialized subclasses.",
    "Recursive Relationship: An entity set participates more than once in the same relationship type in distinct roles (e.g. employee-supervisor).",
    "Exam Gold Tip: Always underline primary key attributes with a solid line and partial keys/discriminators with a dashed line in ER diagrams."
])

add("Database Management & SQL", 2, "Relational Model", [
    "Relational Model Foundations: Edgar F. Codd (1970); Representation of enterprise data as two-dimensional relations (tables); Mathematical formulation as a subset of Cartesian product of attribute domains: $R \\subseteq D_1 \\times D_2 \\times \\dots \\times D_n$.",
    "Relational Terminology & Properties: Relation (table), Tuple (row), Attribute (column), Degree (number of attributes / columns), and Cardinality (number of tuples / rows); Atomic values assumption (First Normal Form requirement).",
    "Relational Keys & Uniqueness Constraints: Superkey (attribute set uniquely identifying any tuple), Candidate key (minimal superkey), Primary key (designated candidate key), Alternate keys, and Foreign keys (referential integrity references).",
    "Integrity Constraints Framework: Domain constraints (attribute values must belong to defined domain data types), Entity integrity constraint (primary key attributes cannot contain NULL values), and Referential integrity constraint.",
    "Referential Integrity & Foreign Key Mechanics: Foreign key $FK$ in relation $R_1$ must match primary key $PK$ of tuple in referenced relation $R_2$ or be wholly NULL; Cascading update/delete rules: `ON DELETE CASCADE`, `ON DELETE SET NULL`, `ON DELETE RESTRICT`.",
    "Relational Algebra Fundamental Operators: Unary operators: Selection ($\\sigma_{\\text{condition}}(R)$ filters tuples) and Projection ($\\pi_{\\text{attributes}}(R)$ extracts columns with duplicate elimination); Binary operators: Cartesian Product ($R \\times S$), Union ($R \\cup S$), Set Difference ($R - S$).",
    "Relational Algebra Derived Operators: Intersection ($R \\cap S = R - (R - S)$), Theta Join ($R \\bowtie_{\\theta} S = \\sigma_{\\theta}(R \\times S)$), Natural Join ($R \\bowtie S$ matching on common attributes), and Division ($R \\div S$).",
    "Outer Joins in Relational Algebra: Left Outer Join ($R \\ltimes S$ preserving all left tuples), Right Outer Join ($R \\rtimes S$), and Full Outer Join ($R \\mathbin{X\\mkern-14mu\\bowtie} S$ padding non-matching attributes with NULL).",
    "Relational Calculus Overview: Non-procedural declarative query languages; Tuple Relational Calculus (TRC: $\\{t \\mid P(t)\\}$) and Domain Relational Calculus (DRC); Codd's Equivalence Theorem: Relational completeness of Relational Algebra, TRC, and DRC.",
    "University Examination Strategy: Formulate queries in relational algebra using selection, projection, natural join, and division operators, state and explain the 3 core integrity constraints, and explain referential cascading actions."
], [
    "Relation Cardinality vs Degree: Cardinality is the total count of tuples (rows); Degree is the total count of attributes (columns).",
    "Entity Integrity Rule: No component attribute of any primary key can ever accept a NULL value.",
    "Referential Integrity Constraint: Foreign key value must either exist as a valid primary key in referenced table or be explicitly NULL.",
    "Candidate Key Minimality: A superkey is a candidate key if and only if removing any single attribute destroys its uniqueness property.",
    "Projection Duplicate Removal: Mathematical projection $\\pi$ automatically eliminates duplicate tuples from the resulting relation.",
    "Natural Join Equality: Equates attributes with identical names across relations and projects out the redundant duplicate column.",
    "Relational Division Operator: $R \\div S$ identifies tuples in $R$ associated with every single tuple present in relation $S$.",
    "Cascade Delete Action: Deleting a parent tuple automatically deletes all dependent child tuples referencing that parent's primary key.",
    "Codd's Completeness: A query language is relationally complete if it is at least as expressive as first-order relational algebra.",
    "Exam Scoring Tip: Never confuse Cartesian product ($N_1 \\times N_2$ rows) with Union ($N_1 + N_2$ max rows, requiring union compatibility)."
])

add("Database Management & SQL", 3, "SQL Queries", [
    "Structured Query Language (SQL) Architecture: Declarative relational language; Sublanguages: Data Definition Language (DDL: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`), Data Manipulation Language (DML: `SELECT`, `INSERT`, `UPDATE`, `DELETE`), Data Control Language (DCL: `GRANT`, `REVOKE`), and Transaction Control (TCL).",
    "Data Definition & Constraint Enforcement: Creating tables with table-level and column-level constraints: `PRIMARY KEY`, `FOREIGN KEY ... REFERENCES`, `UNIQUE`, `NOT NULL`, and `CHECK` constraints; Modifying schema using `ALTER TABLE ADD/DROP COLUMN`.",
    "Basic Query Formulation & Filtering: `SELECT [DISTINCT] column_list FROM table_name WHERE condition;` Comparison operators (`=, <>, <, >, <=, >=`), Logical operators (`AND, OR, NOT`), Range testing (`BETWEEN ... AND`), Set membership (`IN (...)`), Pattern matching (`LIKE '%pattern_'`).",
    "Aggregate Functions & Grouping Mechanics: Aggregate functions: `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`; Grouping rows via `GROUP BY`; Filtering aggregated groups using `HAVING` clause; Critical rule: `WHERE` filters rows before grouping, `HAVING` filters groups after aggregation.",
    "SQL Joins Implementation: Inner Join (`INNER JOIN ... ON`), Left Outer Join (`LEFT JOIN`), Right Outer Join (`RIGHT JOIN`), Full Outer Join (`FULL OUTER JOIN`), Cross Join (Cartesian product), and Self Join (joining table to itself using table aliases).",
    "Subqueries & Nested Query Processing: Scalar subqueries (returning single value), Multi-row subqueries utilizing `IN`, `ANY` / `SOME`, and `ALL` operators; Correlated subqueries (inner query referencing outer query attributes, evaluated per outer tuple); Testing existence with `EXISTS` and `NOT EXISTS`.",
    "Set Operations in SQL: Combining results of union-compatible queries: `UNION` (removes duplicates), `UNION ALL` (retains duplicates), `INTERSECT`, and `EXCEPT` / `MINUS`; Requiring identical number of columns with compatible data types.",
    "Database Views & Virtual Tables: Creating views (`CREATE VIEW view_name AS SELECT ...;`); Security through column/row restriction; Updatable views restrictions (views containing aggregations, `DISTINCT`, or multiple joined tables cannot be updated directly).",
    "SQL Analytical Window Functions: Performing calculations across row partitions without collapsing groups: `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LEAD()`, `LAG()`, `SUM(...) OVER (PARTITION BY dept_id ORDER BY salary DESC)`.",
    "University Examination Strategy: Write complex SQL queries involving multi-table joins, subqueries with `EXISTS`, `GROUP BY` with `HAVING`, and window functions; contrast `WHERE` vs `HAVING`, and explain `RANK()` vs `DENSE_RANK()`."
], [
    "WHERE vs HAVING Distinction: `WHERE` filters individual rows prior to aggregation; `HAVING` filters aggregated group records.",
    "EXISTS Operator Efficiency: Evaluates to true as soon as first matching row is found in subquery, terminating subquery scan immediately.",
    "RANK vs DENSE_RANK: `RANK()` leaves gaps in ranking numbers after duplicate ties; `DENSE_RANK()` assigns consecutive rank numbers without gaps.",
    "UNION vs UNION ALL: `UNION` executes sorting to eliminate duplicate rows ($O(N\\log N)$); `UNION ALL` appends rows directly ($O(N)$).",
    "Correlated Subquery Cost: Evaluated repeatedly once for every single row processed by the enclosing outer query ($O(M \\times N)$).",
    "NULL Three-Valued Logic: Comparisons involving NULL yield UNKNOWN; `WHERE col = NULL` always fails; must use `IS NULL` or `IS NOT NULL`.",
    "Self-Join Alias Requirement: Joining a table to itself strictly requires distinct table alias names (e.g. `FROM Employee e1 JOIN Employee e2`).",
    "Foreign Key Check Constraint: Enforces valid range limits or logical business conditions (e.g. `CHECK (age >= 18 AND salary > 0)`).",
    "Window Function Partitioning: `OVER (PARTITION BY ...)` computes aggregate stats per group while retaining individual row-level detail.",
    "Exam Gold Tip: In queries asking for 'second highest salary', use `LIMIT 1 OFFSET 1` with `ORDER BY salary DESC` or correlated subquery."
])

add("Database Management & SQL", 4, "Normalization", [
    "Relational Database Design Anomalies: Redundancy leading to update anomalies (inconsistent data updates), insertion anomalies (inability to insert data without dummy keys), and deletion anomalies (unintended loss of related information).",
    "Functional Dependencies (FD) Theory: Formal definition: $X \\to Y$ holds in relation $R$ if for all tuples $t_1, t_2$, $t_1[X] = t_2[X] \\implies t_1[Y] = t_2[Y]$; Determinant attribute set $X$; Trivial vs non-trivial dependencies.",
    "Armstrong's Axioms for Functional Dependencies: Sound and complete inference rules: Reflexivity ($Y \\subseteq X \\implies X \\to Y$), Augmentation ($X \\to Y \\implies XZ \\to YZ$), and Transitivity ($X \\to Y \\land Y \\to Z \\implies X \\to Z$); Secondary rules: Union, Decomposition, Pseudo-transitivity.",
    "Attribute Closure Algorithm: Attribute closure $X^+$: Set of all attributes functionally determined by $X$ under given FD set $F$; Computing $X^+$ in polynomial time; Using closure to test candidate keys and verify dependency validity.",
    "First Normal Form (1NF): Eliminating repeating groups and multivalued attributes; Enforcing that every attribute domain contains only atomic (indivisible) values and each row is unique.",
    "Second Normal Form (2NF): Relation must be in 1NF and contain zero partial functional dependencies; Partial dependency: A non-prime attribute depends on a proper subset of a composite candidate key.",
    "Third Normal Form (3NF): Relation must be in 2NF and contain zero transitive functional dependencies; Formal Codd rule: For every non-trivial $X \\to Y$, either $X$ is a superkey, or $Y$ is a prime attribute (part of some candidate key).",
    "Boyce-Codd Normal Form (BCNF): Stricter version of 3NF; For every non-trivial functional dependency $X \\to Y$, the determinant $X$ must be a superkey; Resolves anomalies when relation has multiple overlapping candidate keys.",
    "Decomposition Properties: Lossless-Join Decomposition (guaranteed recovery of original relation via natural join: $R_1 \\bowtie R_2 = R$; requires $(R_1 \\cap R_2) \\to R_1$ or $(R_1 \\cap R_2) \\to R_2$) and Dependency Preservation ($F' \\equiv F$).",
    "University Examination Strategy: Compute attribute closure $X^+$ to find candidate keys, decompose a given relation with FDs into 3NF and BCNF, test for lossless-join and dependency preservation, and explain why BCNF may fail to preserve dependencies."
], [
    "Functional Dependency Definition: $X \\to Y$ states that attribute set $X$ uniquely determines the values of attribute set $Y$.",
    "1NF Atomicity: Every field must hold a single scalar atomic value; no arrays, comma-separated lists, or nested relations.",
    "2NF Partial Dependency Rule: No non-prime attribute may depend on part of a composite primary key; fully functionally dependent.",
    "3NF Transitive Dependency Rule: For all $X \\to Y$, either $X$ is a superkey or $Y$ is a prime attribute; prevents non-key depending on non-key.",
    "BCNF Determinant Rule: For every non-trivial functional dependency $X \\to Y$, $X$ must be a superkey without exception.",
    "Lossless Join Test: Binary decomposition $(R_1, R_2)$ is lossless iff $R_1 \\cap R_2 \\to R_1$ or $R_1 \\cap R_2 \\to R_2$ holds.",
    "BCNF Tradeoff: BCNF completely eliminates redundancy from functional dependencies, but cannot always preserve all functional dependencies.",
    "Prime vs Non-Prime: An attribute is prime if it belongs to at least one candidate key; otherwise it is non-prime.",
    "Minimal Cover (Canonical Cover): An irreducible set of functional dependencies equivalent to $F$ with single RHS attributes and no extraneous attributes.",
    "Exam Scoring Tip: Always show the step-by-step computation of candidate keys via attribute closure before performing normalization decomposition."
])

add("Database Management & SQL", 5, "Transactions", [
    "Transaction Concept & The ACID Paradigm: Logical unit of database processing containing read/write operations; Atomicity (all-or-nothing execution), Consistency (preserves database integrity constraints), Isolation (concurrency transparency), Durability (committed updates persist).",
    "Transaction State Lifecycle Diagram: Active state (initial processing), Partially Committed (final statement executed, updates in buffer), Committed (all updates written to log/disk), Failed (abnormal abort), and Aborted (rolled back to initial state).",
    "Concurrent Execution Anomalies: Dirty Read ($W_1(A) \\dots R_2(A) \\dots \\text{Abort}_1$: reading uncommitted data), Non-Repeatable Read ($R_1(A) \\dots W_2(A) \\dots R_1(A)$: value changes between reads), Phantom Read (rows inserted matching range), Lost Update ($W_1(A) \\dots W_2(A)$ overwriting without seeing).",
    "Serializability Theory: Serial schedule (transactions execute sequentially without interleaving); Conflict Serializability: A schedule is conflict serializable if it can be transformed into a serial schedule via non-conflicting instruction swaps; Conflicting operations: Same data item, different transactions, at least one write.",
    "Precedence Graph (Serialization Graph) Algorithm: Directed graph $G = (V, E)$ where nodes represent transactions; Directed edge $T_i \\to T_j$ exists if an operation in $T_i$ conflicts with and precedes an operation in $T_j$; Schedule is conflict serializable iff graph has zero cycles.",
    "Lock-Based Concurrency Protocols: Shared locks ($S$-lock, for concurrent reads) and Exclusive locks ($X$-lock, for writes); Two-Phase Locking (2PL): Growing phase (locks acquired, none released) and Shrinking phase (locks released, none acquired); Guarantees conflict serializability.",
    "Strict & Rigorous 2PL Variations: Strict 2PL: All exclusive locks held until transaction commits or aborts (prevents cascading rollbacks); Rigorous 2PL: Both shared and exclusive locks held until commit/abort (guarantees strict serial order).",
    "Deadlock Detection & Prevention in DBMS: Wait-for graph (WFG) cycle detection; Deadlock prevention schemes: Wait-Die (older waits, younger dies) and Wound-Wait (older wounds/aborts younger, younger waits) based on transaction timestamps.",
    "Database Recovery & WAL Protocol: Write-Ahead Logging (WAL): Log records must be flushed to non-volatile disk before dirty database buffer blocks are written to disk; ARIES recovery algorithm (Analysis pass, Redo pass, Undo pass); Checkpointing minimizing recovery scan time.",
    "University Examination Strategy: Construct a precedence graph to determine conflict serializability of an interleaved schedule, explain 2PL protocol and prove it ensures serializability, and compare Wait-Die vs Wound-Wait deadlock prevention algorithms."
], [
    "ACID Responsibility: Atomicity & Durability handled by Recovery Manager; Consistency by Application/DBMS; Isolation by Concurrency Control.",
    "Conflicting Operations Criterion: Two operations conflict iff they belong to different transactions, access the same item, and at least one is a write.",
    "Conflict Serializability Test: A concurrent schedule is conflict serializable if and only if its precedence graph contains NO directed cycles.",
    "Two-Phase Locking (2PL) Rule: Once a transaction releases any lock, it can never acquire any additional new locks (Shrinking phase).",
    "Cascading Rollback Avoidance: Strict 2PL holds all exclusive locks until commit, ensuring no other transaction can read uncommitted dirty data.",
    "Write-Ahead Logging (WAL): Log record describing an update must reach persistent disk storage before the actual dirty data block is written.",
    "Wait-Die Scheme: Non-preemptive timestamp protocol: If older requests item held by younger, older waits; if younger requests, younger dies.",
    "Wound-Wait Scheme: Preemptive protocol: If older requests item held by younger, older preempts/wounds younger; if younger requests, younger waits.",
    "Checkpointing Benefit: Recovery scans only need to look back to the most recent checkpoint rather than scanning the entire log from the start.",
    "Exam Gold Tip: Always state that 2PL guarantees conflict serializability, but standard 2PL does NOT prevent deadlocks."
])

# =========================================================================
# 4. DBMS LAB (B.Sc)
# =========================================================================
add("DBMS Lab", 1, "DBMS: Laboratory Safety Protocols & Instrumentation", [
    "Database Laboratory Infrastructure & Security: Relational database management system (RDBMS) servers (PostgreSQL 15+, MySQL 8.0, Oracle 19c, SQLite 3); Client workbench tools (pgAdmin 4, MySQL Workbench, DBeaver, SQL*Plus); Server connectivity via TCP port 5432 / 3306.",
    "User Account Administration & Role-Based Access Control (RBAC): Creating database user accounts (`CREATE USER username WITH PASSWORD 'secret';`); Defining database roles; Granting and revoking privileges (`GRANT SELECT, INSERT ON employees TO dev_role;`, `REVOKE DELETE ON ...`).",
    "Database Backup & Cold/Hot Disaster Recovery: Automated logical backups via utility tools (`pg_dump dbname > backup.sql`, `mysqldump -u root -p dbname > dump.sql`); Restoring databases (`psql dbname < backup.sql`); Hot physical backups and Point-In-Time Recovery (PITR) using WAL archives.",
    "Database Server Configuration & Resource Allocation: Configuring memory buffer pools (`shared_buffers`, `work_mem`, `innodb_buffer_pool_size`); Setting maximum client connections (`max_connections`); Configuring transaction log file sizes (`max_wal_size`).",
    "SQL Client Command-Line Interface Operations: Mastering interactive CLI shells (`psql`, `mysql`); Terminal meta-commands: `\\l` (list databases), `\\dt` (list tables), `\\d tablename` (describe table schema), `\\c dbname` (connect), `\\timing` (benchmark query execution time).",
    "Data Privacy & Masking Protocols: Enforcing data masking of Sensitive Personally Identifiable Information (PII: Social Security, credit card numbers, passwords); Utilizing cryptographic hashing functions (`SHA256`, `bcrypt`) in user authentication tables.",
    "Database Connection Pooling & Resource Leak Prevention: Configuring client-side connection pools (HikariCP, Apache Commons DBCP); Minimum/maximum pool sizing; Ensuring application code closes database connections (`Connection.close()`) to prevent socket exhaustion.",
    "Benchmarking & Server Performance Monitoring: Monitoring active database connections (`SELECT * FROM pg_stat_activity;`); Measuring disk I/O, cache hit ratios (`pg_statio_user_tables`), and server CPU load during heavy transactional query workloads.",
    "Storage Engine Architectures in MySQL: InnoDB (ACID-compliant, row-level locking, foreign key support, crash recovery) vs MyISAM (non-transactional, table-level locking, faster read-only full-text search); Setting default storage engine to InnoDB.",
    "University Examination Strategy: Write the terminal commands to create a database user, grant specific DML privileges, execute a logical database dump, and explain the difference between logical and physical backups."
], [
    "Default RDBMS Ports: PostgreSQL operates on port 5432; MySQL operates on port 3306; Oracle on port 1521.",
    "pg_dump Logical Backup: Generates a text file containing SQL statements necessary to reconstruct the database schema and table rows.",
    "Privilege Principle of Least Privilege: Users are granted strictly the minimal set of privileges required to perform their operational tasks.",
    "InnoDB Row-Level Locking: Locks only individual rows being updated, permitting high concurrent throughput compared to table-locking MyISAM.",
    "Shared Buffers Cache: RDBMS memory area dedicated to caching database pages read from disk, maximizing cache hit ratios.",
    "Point-In-Time Recovery (PITR): Restores base backup and replays WAL transaction logs up to the exact millisecond prior to disaster.",
    "Data Masking Technique: Obscures sensitive data fields (e.g. `CONCAT('XXXX-XXXX-', SUBSTRING(card_num FROM 13))`) for test environments.",
    "Connection Pool Socket Exhaustion: Failing to close database connections exhausts available server socket handles, crashing applications.",
    "Psql Describe Command: `\\d table_name` displays full schema metadata: column names, data types, constraints, and index definitions.",
    "Lab Safety Rule: Never execute unconditional `DROP TABLE` or `DELETE FROM` without `WHERE` in production without an existing verified backup."
])

add("DBMS Lab", 2, "DBMS: Standard Preparations & Calibration Methods", [
    "Schema Initialization & DDL Script Engineering: Writing standardized SQL DDL scripts to create relational enterprise schemas (Company, University, E-commerce); Declaring integer, decimal, varchar, date, and timestamp data types with appropriate widths.",
    "Primary Key & Unique Constraint Declarations: Declaring single-attribute and composite primary keys (`PRIMARY KEY (course_id, sec_id, semester, year)`); Defining candidate key uniqueness with `UNIQUE` constraints to enforce non-duplicate business identifiers.",
    "Foreign Key Referential Constraints Formulation: Specifying foreign key relationships with appropriate referential trigger actions: `FOREIGN KEY (dept_name) REFERENCES department(dept_name) ON DELETE SET NULL ON UPDATE CASCADE`.",
    "Check & Domain Constraint Implementation: Enforcing business domain rules at schema level: `CHECK (salary >= 20000.0)`, `CHECK (gender IN ('M', 'F', 'O'))`, `CHECK (end_date >= start_date)`; Automatic validation upon insert/update.",
    "Synthetic Test Data Generation & Seeding: Generating large synthetic test datasets (10,000+ rows) for query benchmarking using set-generating functions (`generate_series(1, 100000)` in PostgreSQL); Populating realistic customer, order, and transactional data.",
    "B-Tree & Hash Index Calibration: Creating B-tree indexes on frequently searched columns (`CREATE INDEX idx_emp_salary ON employee(salary);`); Creating multi-column composite indexes; Hash indexes for strict equality lookups (`USING HASH`).",
    "Query Execution Plan Analysis (`EXPLAIN ANALYZE`): Utilizing `EXPLAIN ANALYZE SELECT ...` to inspect query optimizer execution plans; Interpreting Sequential Scans (`Seq Scan`), Index Scans (`Index Scan`), and Bitmap Heap Scans; Reading cost estimations and execution millisecond timings.",
    "Database Normalization Calibration Check: Verifying relational schemas against 3NF and BCNF standards; Identifying functional dependencies in experimental schemas; Splitting tables to eliminate update, insertion, and deletion anomalies.",
    "Database Migration & Version Control Tooling: Managing incremental schema changes using database migration frameworks (Flyway, Liquibase); Writing repeatable versioned migration scripts (`V1__initial_schema.sql`, `V2__add_index.sql`).",
    "University Examination Strategy: Write a comprehensive DDL script creating an Employee-Department relational schema with all 5 constraints, explain the output of `EXPLAIN ANALYZE` highlighting sequential vs index scans, and create a B-tree index."
], [
    "EXPLAIN ANALYZE Function: Executes the SQL query and displays actual runtime metrics and execution node costs alongside estimated planner costs.",
    "Sequential Scan Landmark: RDBMS reads every single page block sequentially from disk; occurs when no index exists or table is very small.",
    "Index Scan Advantage: Traverses balanced B-tree index ($O(\\log N)$) to directly locate pointer addresses of qualifying tuples.",
    "Composite Index Leftmost Prefix: Composite index on `(A, B)` can accelerate queries filtering on `A` alone, but not on `B` alone.",
    "B-Tree Balanced Fan-Out: Multi-way search tree with high branching factor (100+), ensuring maximum tree depth rarely exceeds 3 to 4 disk reads.",
    "Generate Series Utility: PostgreSQL function `generate_series(start, stop)` generates synthetic integer sequences for bulk test loading.",
    "Check Constraint Scope: Evaluated on every `INSERT` and `UPDATE`; transaction aborts if condition evaluates to FALSE (passes if TRUE or NULL).",
    "Cascade Update Rule: Updating a primary key value in parent table automatically cascades to update all corresponding foreign keys in child tables.",
    "Flyway Migration Versioning: Tracks executed schema migrations in `flyway_schema_history` metadata table to prevent redundant runs.",
    "Practical Exam Rule: Always insert parent table records first before child records, and delete child records first before parent records."
])

add("DBMS Lab", 3, "DBMS: Core Experimental Procedures & Synthesis", [
    "Laboratory Practical 1: Schema Creation & Constraint Validation: Creating University database (Student, Department, Course, Section, Takes, Teaches); Declaring primary, foreign, unique, and check constraints; Attempting invalid inserts to verify constraint rejections.",
    "Laboratory Practical 2: Complex SQL Queries & Aggregations: Formulating multi-table inner and outer joins; Grouping by department to calculate average salaries, headcount, and total budgets; Filtering groups using `HAVING COUNT(*) > 5`.",
    "Laboratory Practical 3: Nested & Correlated Subqueries: Identifying students who have taken all courses offered by the CS department (Relational Division in SQL); Finding employees earning higher than their department average salary using correlated subqueries.",
    "Laboratory Practical 4: Database Views & Materialized Views: Creating virtual security views restricting salary columns for general staff; Creating `MATERIALIZED VIEW` storing aggregated financial reports; Refreshing materialized views via `REFRESH MATERIALIZED VIEW`.",
    "Laboratory Practical 5: Database Triggers for Automated Auditing: Creating an audit trail table; Writing PL/SQL / PL/pgSQL trigger function; Attaching trigger `AFTER INSERT OR UPDATE OR DELETE ON employee FOR EACH ROW EXECUTE FUNCTION log_emp_changes()`.",
    "Laboratory Practical 6: Stored Procedures & User-Defined Functions: Writing stored procedures accepting input/output parameters (`CREATE PROCEDURE transfer_funds(src_acc, dest_acc, amount)`); Enclosing fund debit and credit inside transactional block with commit/rollback.",
    "Laboratory Practical 7: Database Cursors & Batch Processing: Explicit cursor declaration, opening, fetching row-by-row in a loop, and closing; Applying conditional salary hikes based on years of service; Assessing performance overhead of row-by-row cursor processing.",
    "Laboratory Practical 8: Transaction Concurrency & Isolation Levels: Demonstrating concurrent transaction isolation anomalies; Setting isolation levels (`READ COMMITTED`, `REPEATABLE READ`, `SERIALIZABLE`); Observing phantom reads and serialization failures in two terminal sessions.",
    "Laboratory Practical 9: Database Connectivity (JDBC / Python DB-API): Writing Java JDBC or Python `psycopg2` / `mysql-connector` application; Connecting to DBMS, preparing parameterized `PreparedStatement` to prevent SQL injection, executing queries, and iterating `ResultSet`.",
    "University Examination Strategy: Write the complete PL/pgSQL or PL/SQL code for an audit trigger logging employee deletions, implement a fund transfer stored procedure with transaction rollback, and write a parameterized JDBC query preventing SQL injection."
], [
    "SQL Injection Defense: Parameterized `PreparedStatement` compiles SQL template first, treating user input strictly as literal data rather than code.",
    "Database Trigger Trigger Timing: `BEFORE` triggers modify data values prior to insertion; `AFTER` triggers execute post-commit audit logging.",
    "Row-Level vs Statement Trigger: `FOR EACH ROW` fires once per affected tuple; Statement triggers fire once per SQL command regardless of row count.",
    "Materialized View Persistence: Unlike virtual views, materialized views persist physical query results on disk and require explicit refresh.",
    "Cursor Overhead: Procedural row-by-row cursor processing ('RBAR') is orders of magnitude slower than native declarative set-based SQL queries.",
    "Serializable Snapshot Isolation: PostgreSQL implementation of `SERIALIZABLE` detecting read-write conflicts without blocking concurrent reads.",
    "JDBC Connection Steps: Load driver, establish connection, create statement, execute query, iterate result set, close resources.",
    "Savepoint Mechanism: `SAVEPOINT savepoint_name` establishes intermediate rollback markers within a transaction without rolling back entirely.",
    "Relational Division with NOT EXISTS: Double `NOT EXISTS` subquery structure correctly tests universal quantification ('for all' conditions).",
    "Practical Exam Tip: Always wrap stored procedure banking transfers inside a single `BEGIN ... EXCEPTION ... ROLLBACK ... END` transactional block."
])

add("DBMS Lab", 4, "DBMS: Quantitative Data Verification & Error Analysis", [
    "Query Optimization & Execution Time Benchmarking: Comparing execution times of unindexed vs indexed queries across a 500,000-row table; Quantifying speedup factor (e.g. reduction from 450 ms sequential scan to 0.8 ms index scan).",
    "B-Tree vs Hash Index Performance Metrics: Measuring query execution times for point equality lookups (`WHERE id = 50000`) vs range queries (`WHERE salary BETWEEN 50000 AND 80000`); Demonstrating that Hash indexes fail completely on range queries.",
    "Index Maintenance Overhead on Write Operations: Measuring degradation in `INSERT`, `UPDATE`, and `DELETE` throughput as the number of indexes on a table increases (each additional index requires synchronous leaf node balance and disk write).",
    "Deadlock Reproduction & Log Analysis: Intentionally inducing a cyclic deadlock between two concurrent sessions (Session 1 locks row A then requests row B; Session 2 locks row B then requests row A); Inspecting DBMS error code (`40P01 deadlock detected`) and server logs.",
    "Database Normalization Redundancy Quantification: Quantifying storage reduction and anomaly elimination by decomposing an unnormalized denormalized table into 3NF relations; Calculating percentage disk storage saved and measuring zero update anomaly occurrences.",
    "Buffer Cache Hit Ratio Measurement: Formulated as: $\\text{Hit Ratio} = \\frac{\\text{Heap Buffer Reads}}{\\text{Heap Buffer Reads} + \\text{Disk Reads}}$; Maintaining cache hit ratio greater than 99 percent for high-throughput transactional OLTP systems.",
    "Connection Pool Latency Profiling: Benchmarking application response times with connection pooling (reusing pre-warmed sockets) vs opening fresh TCP database connections per HTTP request (eliminating 20-50 ms handshake overhead per query).",
    "Database Lock Contention & Bottleneck Profiling: Analyzing lock queues using `pg_locks` and `information_schema.innodb_locks`; Identifying long-running transactions blocking other sessions; Terminating rogue blocking queries (`pg_terminate_backend(pid)`).",
    "Data Integrity Audit & Constraint Verification: Automated validation scripts checking for orphan foreign keys, negative numerical values, malformed email patterns, and trailing whitespace in string columns.",
    "University Examination Strategy: Plot query execution time curves against database size for sequential vs index scans, analyze a deadlock log excerpt identifying the cyclic dependency, and calculate the database buffer cache hit ratio."
], [
    "Index Range Query Limitation: Hash indexes support only equality comparisons (`=`); Range queries (`<, >, BETWEEN`) strictly require B-tree indexes.",
    "Write Amplification from Indexes: Every table insert requires updating the primary table heap plus every single auxiliary index B-tree structure.",
    "Deadlock Victim Selection: The DBMS deadlock detector breaks cycles by aborting the transaction with the lowest cost or lowest undo logs.",
    "Cache Hit Ratio Target: High-performance production OLTP databases aim for a buffer cache hit ratio exceeding 99 percent in memory.",
    "TCP Handshake Cost: Establishing fresh database connections requires TCP 3-way handshake and authentication; pooling eliminates this latency.",
    "Orphan Record Hazard: Child rows left pointing to non-existent parent primary keys when foreign key constraints are mistakenly omitted.",
    "Sequential Scan Cross-Over Point: For small tables (under a few hundred rows), sequential scan is faster than index scan due to zero index overhead.",
    "Lock Contention Diagnosis: Querying `pg_stat_activity` identifies blocking queries holding locks requested by waiting backend processes.",
    "Bitmap Heap Scan Mechanics: Scans index to build bitmap of qualifying physical pages, then reads table heap blocks in physical disk order.",
    "Lab Viva Tip: Always emphasize that indexing is a trade-off: it accelerates read queries dramatically but adds overhead to all write operations."
])

add("DBMS Lab", 5, "DBMS: Comprehensive Practical Record & Viva Voce", [
    "Practical Laboratory Notebook Organization: Documentation standards: Problem definition, ER conceptual diagrams, relational schema specifications, DDL/DML script listings, input test cases, execution output screenshots, and performance analyses.",
    "Viva Voce High-Yield Questions on Data Models: What is data abstraction and what are its three levels? What is the difference between physical and logical data independence? What is an entity, entity set, and relationship set?",
    "Viva Voce Questions on Relational Concepts & Keys: Difference between primary key, candidate key, and superkey; Can a primary key contain NULL values? What is a foreign key and what is referential integrity? What happens during cascade delete?",
    "Viva Voce Questions on SQL Language: What is the difference between `DELETE`, `TRUNCATE`, and `DROP`? What is the difference between `WHERE` and `HAVING`? What is the difference between `UNION` and `UNION ALL`? What is a correlated subquery?",
    "Viva Voce Questions on Normalization: What are the update, insertion, and deletion anomalies? What is 1NF, 2NF, 3NF, and BCNF? What is a partial functional dependency? Why is BCNF stricter than 3NF?",
    "Viva Voce Questions on Transactions & ACID: What does each letter in ACID stand for? What is the difference between conflict serializability and view serializability? What is the Two-Phase Locking (2PL) protocol? How does 2PL ensure serializability?",
    "Viva Voce Questions on Indexing & Query Tuning: How does a B-tree index work? What is the difference between clustered and non-clustered indexes? What information does `EXPLAIN ANALYZE` provide?",
    "Viva Voce Questions on Programmable Objects: What is the difference between a stored procedure and a function? What is a database trigger and when is it executed? What is a database cursor?",
    "Database Administration & Security Principles: Role-based access control, principle of least privilege, database auditing, SQL injection defense mechanisms, and disaster recovery planning.",
    "University Examination Strategy: Review all viva questions on normalization rules, transaction serializability graphs, and indexing mechanics, ensure the lab record book is completely signed with all 10 experiments, and be prepared to write SQL queries on demand."
], [
    "Delete vs Truncate vs Drop: `DELETE` is logged DML (removes rows); `TRUNCATE` is fast DDL (deallocates pages); `DROP` removes table and schema.",
    "Clustered Index Architecture: Table rows are physically stored on disk in the exact sorted order of the clustered index key (one per table).",
    "Non-Clustered Index Structure: Separate search structure containing sorted index keys and pointers to the physical data heap blocks.",
    "Procedure vs Function: Functions must return a value and can be called inside SQL queries; Procedures do not require return and execute standalone.",
    "Trigger vs Procedure: Procedures are executed explicitly via `CALL`; Triggers fire automatically in response to underlying table DML events.",
    "Dirty Read Anomaly: Occurs when transaction $T_1$ reads modifications made by transaction $T_2$ that has not yet committed and later aborts.",
    "SQL Injection Exploitation: Attacker injects malicious SQL syntax via unescaped string concatenation (e.g. `' OR '1'='1`), bypassing auth.",
    "Superkey vs Candidate Key: A superkey uniquely identifies tuples; a candidate key is a minimal superkey containing no extraneous attributes.",
    "Union Compatibility Requirement: Both queries must return identical number of columns with matching or implicitly convertible data types.",
    "Exam Gold Tip: In viva voce, answer with structured definitions: state the ACID property, the problem it solves, and the DBMS subsystem responsible."
])

# Save to sem3_bsc_computing_math_data.json
with open('scripts/sem3_bsc_computing_math_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in computing_math dataset now: {len(data)}")
