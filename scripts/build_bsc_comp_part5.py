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
# 9. OOP / DBMS (B.Sc)
# =========================================================================
add("OOP / DBMS", 1, "OOP Concepts", [
    "Object-Relational Conceptual Paradigms: The Object-Relational Impedance Mismatch; Bridging the conceptual divide between object graph navigation and relational set-based algebraic queries.",
    "Data Encapsulation in Data-Centric Software: Encapsulating database entities as domain models; Private identity fields and column mapping attributes; Enforcing entity business invariants through domain methods rather than naked setters.",
    "Domain Abstraction & Interface Gateways: Establishing clean repository interfaces (`UserRepository`, `OrderRepository`); Abstracting raw persistence mechanisms behind uniform domain contracts.",
    "Identity vs Equality in Object Persistence: Relational primary key identity vs runtime object reference equality (`==` vs `equals()`); Managing entity lifecycle across transient, persistent, and detached states.",
    "Polymorphic Entity Mapping Strategies: Mapping inheritance hierarchies to relational tables: Single Table per Hierarchy, Table per Concrete Class, and Joined Subclass table strategy with foreign keys.",
    "Active Record vs Data Mapper Patterns: Active Record (Martin Fowler: entity class bundles both business state and database CRUD operations) vs Data Mapper (strict separation: entities are pure domain objects, mapper handles persistence).",
    "Object-Relational Mapping (ORM) Frameworks: Architectural role of ORM layers (Hibernate, JPA, Entity Framework); Metadata annotations (`@Entity`, `@Table`, `@Id`, `@Column`); Automated SQL schema generation and query synthesis.",
    "Dirty Checking & Unit of Work Pattern: Tracking in-memory entity mutations during active transaction; Automatic change detection (dirty checking); Unit of Work coordinating batch SQL `INSERT`, `UPDATE`, `DELETE` operations upon commit.",
    "Lazy Loading vs Eager Fetching: Lazy loading proxies intercepting property accesses to execute on-demand database queries; Eager fetching via SQL joins; Resolving the notorious $N+1$ query performance pathology.",
    "University Examination Strategy: Explain the Object-Relational Impedance Mismatch in detail, compare the three relational inheritance mapping strategies, and contrast the Active Record vs Data Mapper design patterns."
], [
    "Impedance Mismatch Definition: The fundamental philosophical conflict between object-oriented modeling and relational tabular theory.",
    "Single Table Inheritance: Stores entire class hierarchy in one shared table with discriminator column; yields fast queries but nullable columns.",
    "Joined Table Strategy: Subclass attributes reside in distinct normalized tables joined to base table via shared foreign key.",
    "Active Record Pattern: Object wraps database row and encapsulates both domain state and direct SQL access methods.",
    "Data Mapper Pattern: Completely decouples in-memory domain entities from the relational database persistence engine.",
    "N+1 Query Problem: Executing one query for parent records followed by $N$ separate queries for child collections; resolved by join fetching.",
    "Unit of Work Goal: Maintains a list of objects affected by a business transaction and coordinates the writing of changes to disk.",
    "Transient Entity State: Newly instantiated object that has not yet been associated with a persistence context or database row.",
    "Proxy Interception: ORM creates bytecode dynamic proxy subclasses to intercept getter calls and trigger lazy database reads.",
    "Exam Gold Tip: Always explain that Hibernate/JPA uses first-level session cache to ensure a single database row maps to exactly one unique object instance."
])

add("OOP / DBMS", 2, "Classes", [
    "Persistent Entity Class Architecture: POJO / JavaBean conventions; No-argument default constructors required for reflection instantiation; Private primary key identifier with public accessors; Overriding `equals()` and `hashCode()` based on business keys.",
    "Entity Lifecycle Management in Persistence Contexts: Transient (newly created in memory), Managed / Persistent (attached to active session, tracked by dirty checking), Detached (session closed, state persists in memory), and Removed (scheduled for SQL deletion).",
    "Primary Key Generation Strategies: `@GeneratedValue`: `IDENTITY` (database auto-increment / serial column), `SEQUENCE` (database sequence object pre-allocating IDs via Hi/Lo algorithm), `TABLE` (emulated sequence table), and `AUTO`.",
    "Attribute Mapping & Custom Type Converters: Mapping basic scalar types; Handling enumerated types (`@Enumerated(EnumType.STRING)`); Mapping temporal dates (`@Temporal`); JPA AttributeConverter transforming complex domain values into database column representations.",
    "Composite Keys & Embedded Value Objects: Domain-Driven Design Value Objects (immutable objects without independent identity); Mapping composite primary keys using `@IdClass` or `@EmbeddedId`; Reusable embedded attributes via `@Embeddable` and `@Embedded`.",
    "Database Connection Management & Pooling: Connection lifecycle inside persistence sessions; HikariCP high-performance connection pool configuration; Auto-commit disablement during transactional object operations.",
    "Object Instantiation from Relational ResultSets: Manual mapping via JDBC `ResultSet`: extracting column values by name, instantiating domain objects, and constructing entity collections; Managing nullability conversions.",
    "Thread Safety & Persistence Context Scope: Persistence sessions (`EntityManager`, `Session`) are non-thread-safe; Thread-local session binding; Long-running conversations and detached entity merging (`merge()`).",
    "Optimistic Locking & Version Fields: Concurrency control without database row locks; Entity `@Version` integer/timestamp field; Automatic version increment upon update; Detecting concurrent modification via `OptimisticLockException`.",
    "University Examination Strategy: Diagram the four states of the entity lifecycle with transitions (`persist`, `merge`, `remove`, `detach`), explain the difference between `@EmbeddedId` and `@IdClass`, and write a JDBC row-to-object mapper."
], [
    "Default Constructor Rule: Reflection mechanisms in ORM engines require a public or protected no-arg constructor to instantiate entities.",
    "Entity Managed State: Any changes made to persistent entity fields are automatically synchronized to database upon transaction commit.",
    "Identity vs Sequence Strategy: `IDENTITY` requires immediate SQL insert to retrieve generated ID; `SEQUENCE` allows batched insert caching.",
    "Optimistic Locking Version: If database version exceeds entity version at update time, transaction aborts due to concurrent mutation.",
    "Detached Entity Re-Attachment: Calling `entityManager.merge(entity)` copies detached state onto a fresh managed persistence instance.",
    "Value Object Characteristics: Possesses zero identity of its own, is completely immutable, and is embedded inside parent entity table.",
    "Equals HashCode Contract: Persistent entities should compute `hashCode()` and `equals()` using immutable natural business keys, not generated IDs.",
    "Thread-Local Session: Each HTTP request / worker thread must operate on its own independent `EntityManager` to prevent data corruption.",
    "HikariCP Zero-Overhead: Uses byte-code generated micro-optimizations and specialized fast-list collections for minimal connection latency.",
    "Exam Scoring Tip: In questions on entity lifecycle, clearly indicate when SQL statements actually execute (flush/commit vs method invocation)."
])

add("OOP / DBMS", 3, "Inheritance", [
    "Relational Inheritance Mapping Architectures: Relational databases do not support object-oriented inheritance natively; Three standard JPA strategies: Single Table (`InheritanceType.SINGLE_TABLE`), Joined (`JOINED`), and Table per Class (`TABLE_PER_CLASS`).",
    "Single Table Strategy Mechanics: Default strategy; Entire class hierarchy mapped to one single relational table; Requires a Discriminator Column (`@DiscriminatorColumn(name=\"dtype\")`); Fast polymorphic queries (no joins required); Drawback: All subclass columns must be nullable.",
    "Joined Table Strategy Architecture: Base class mapped to root table; Each concrete subclass mapped to independent secondary table; Primary key of subclass table acts as foreign key to base table; Highly normalized; Querying subclasses requires SQL joins.",
    "Table per Class Strategy Formulation: Each concrete class mapped to completely independent table containing all base and derived columns; Eliminates nullable column requirements; Polymorphic root queries require costly SQL `UNION` operations across all tables.",
    "Mapped Superclass Design Pattern: `@MappedSuperclass`: Base class provides common persistent state fields (e.g. `id`, `createdAt`, `updatedAt`) and behavior to subclasses without being an entity itself; Has no separate database table.",
    "Association Mappings in Domain Models: `@OneToOne` (unique foreign key), `@OneToMany` and `@ManyToOne` (bidirectional parent-child), and `@ManyToMany` (junction join table); Specifying relationship ownership via `mappedBy` attribute.",
    "Cascading Operations & Ownership Invariants: Propagating entity state transitions across association boundaries: `CascadeType.PERSIST`, `CascadeType.MERGE`, `CascadeType.REMOVE`, `CascadeType.ALL`; Orphan removal (`orphanRemoval=true`).",
    "Polymorphic Association Queries: Executing polymorphic queries over abstract base entities in HQL / JPQL (`SELECT e FROM Employee e`); ORM automatically generates required outer joins or discriminator filters.",
    "Relationship Navigation vs Join Fetching: Navigating lazy associations outside active session causes `LazyInitializationException`; Resolving via JPQL `JOIN FETCH` queries or Entity Graphs (`@NamedEntityGraph`).",
    "University Examination Strategy: Compare the three inheritance mapping strategies with database schema diagrams and performance trade-offs, explain the function of the `mappedBy` attribute in bidirectional associations, and resolve LazyInitializationException."
], [
    "Single Table Strategy Advantage: Fastest query performance for polymorphic queries because zero SQL table joins are needed.",
    "Joined Table Normalization: Achieves full Third Normal Form by isolating subclass-specific attributes into separate dedicated tables.",
    "Table per Class Drawback: Querying polymorphic base entity generates complex, expensive SQL `UNION` statements across all subclass tables.",
    "MappedSuperclass Behavior: Inherits fields to child tables but cannot be queried directly as an entity type in JPQL.",
    "Relationship Owner Rule: The side of the association that contains the physical foreign key column must NOT have the `mappedBy` attribute.",
    "Orphan Removal Action: Setting `orphanRemoval=true` automatically deletes child database rows when removed from parent entity collection.",
    "LazyInitializationException Cause: Accessing uninitialized proxy collection after the database session / transaction has already closed.",
    "Join Fetch Solution: `SELECT p FROM Parent p JOIN FETCH p.children` loads parent and collection in a single unified SQL query.",
    "Cascade Remove Caution: `CascadeType.REMOVE` on Many-to-Many associations can inadvertently trigger catastrophic deletion of referenced shared entities.",
    "Exam Gold Tip: Always underline that `mappedBy` designates the non-owning (inverse) side of a bidirectional JPA relationship."
])

add("OOP / DBMS", 4, "Exception Handling", [
    "Exception Architecture in Data Persistence Applications: Translating low-level vendor-specific database error codes into structured domain exception hierarchies; Abstracting JDBC SQLExceptions behind Spring / Hibernate DataAccessExceptions.",
    "Checked vs Unchecked Persistence Exceptions: Raw JDBC uses checked `SQLException`, forcing verbose boilerplate; Modern persistence frameworks translate them into unchecked runtime exceptions (e.g. `DataAccessException`, `PersistenceException`).",
    "Classification of Relational Database Exceptions: Constraint violations (`DataIntegrityViolationException`, foreign key violation), Connection failures (`CannotGetJdbcConnectionException`), Concurrency conflicts (`OptimisticLockingFailureException`), and Bad SQL syntax (`BadSqlGrammarException`).",
    "Transaction Rollback Rules & Exception Boundaries: Declarative transaction management (`@Transactional`); By default, transactions roll back on unchecked exceptions (`RuntimeException` and `Error`), but commit on checked exceptions; Customizing via `rollbackFor = Exception.class`.",
    "Handling Optimistic Concurrency Collisions: Catching `OptimisticLockException`; Strategies for conflict resolution: Fail-fast reporting to user, automatic retry loop reloading fresh entity version, or three-way merging.",
    "Deadlock Handling & Automated Retry Patterns: Catching transient database deadlocks and serialization failures; Implementing exponential backoff retry algorithms; Circuit breaker patterns (Resilience4j) preventing database saturation during outages.",
    "Resource Cleanup & Connection Leak Defense: Ensuring database connections, statements, and result sets close reliably; `try-with-resources` construct closing `Connection` and `PreparedStatement` under all error paths.",
    "Data Validation at Domain vs Database Boundary: Failing early using Bean Validation (`@NotNull`, `@Size`, `@Pattern`) before SQL transmission; Catching `ConstraintViolationException` vs database-level `DataIntegrityViolationException`.",
    "Global Error Handling in Data-Driven APIs: Centralized exception handlers (`@ControllerAdvice`, `@ExceptionHandler`); Translating persistence errors into standardized HTTP JSON responses (RFC 7807 Problem Details: status 409 Conflict, 404 Not Found, 400 Bad Request).",
    "University Examination Strategy: Detail Spring's DataAccessException hierarchy, explain transaction rollback rules in relation to checked vs unchecked exceptions, and write a robust retry loop for handling database deadlocks."
], [
    "Exception Translation Benefit: Shielding enterprise business logic from proprietary vendor SQL error codes and driver differences.",
    "Transactional Rollback Default: Rollback occurs automatically for unchecked `RuntimeException`; checked exceptions commit unless overridden.",
    "RollbackFor Customization: `@Transactional(rollbackFor = Exception.class)` ensures rollback on all exceptions including checked ones.",
    "Optimistic Lock Recovery: Reloading fresh database row, reapplying domain mutation, and re-attempting transaction commit.",
    "Transient Data Exception: An exception that may succeed if retried immediately without code changes (e.g. lock acquisition timeout).",
    "Resource Leak Consequence: Leaking database connections starves the connection pool, stalling the entire application server.",
    "Bean Validation Timing: Intercepts entity operations in memory prior to generating SQL, avoiding round-trip database penalty.",
    "Problem Details RFC 7807: Standardized REST JSON payload formatting machine-readable error details, types, and error descriptions.",
    "SQL State 23505: Universal ANSI SQL standard state code indicating unique index constraint violation across relational engines.",
    "Exam Scoring Tip: In questions on database transactions, always specify that error handling must guarantee the Atomic rollback of all intermediate writes."
])

add("OOP / DBMS", 5, "Collections", [
    "Persistent Collection Types in ORM: Mapping Java collection interfaces to relational database structures: `java.util.Collection`, `Set`, `List`, and `Map`; Hibernate specialized collection wrappers.",
    "Mapping Unordered Sets (`@ElementCollection` & `@OneToMany`): `java.util.Set` backed by HashSet; Relational representation: foreign key association; Enforces uniqueness in memory; No duplicate elements permitted.",
    "Mapping Ordered Lists (`@OrderColumn` vs `@OrderBy`): `@OrderBy(\"lastName ASC\")`: Sorts collection in memory using SQL `ORDER BY` during fetch; `@OrderColumn(name=\"idx\")`: Maintains explicit integer position index in dedicated database column.",
    "Mapping Persistent Maps (`@MapKeyColumn` & `@MapKey`): Key-value pair associations; `@MapKeyColumn` specifies database column storing map keys; Entity or value-object values stored in associated or element tables.",
    "Collection Performance & Extra-Lazy Fetching: Standard lazy loading fetches entire collection into memory upon first element access; Hibernate `@LazyCollection(LazyCollectionOption.EXTRA)` performs SQL `COUNT()` or `EXISTS` without loading elements.",
    "Hibernate First-Level Session Cache: Mandatory per-session identity map cache; Deduplicates entity instances; Ensures multiple queries for same primary key within one transaction return identical in-memory object reference without hitting disk.",
    "Second-Level Shared Cache (L2): Optional process-wide or distributed cache (Ehcache, Hazelcast, Redis); Caches entity state, collections, and query results across multiple concurrent transactions; Cache concurrency strategies: Read-Only, Non-strict Read-Write, Read-Write.",
    "Query Cache Architecture: Caches primary key IDs of query results matching specific JPQL / SQL queries; Invalidation upon any modification to target entity tables; High invalidation sensitivity.",
    "Batch Fetching Optimization for Collections: Combines individual lazy collection fetches into batches using SQL `IN` predicate: `SELECT * FROM child WHERE parent_id IN (?, ?, ?, ?)`; Solves $N+1$ collection loading problem.",
    "University Examination Strategy: Compare the performance implications of `Set` vs `List` in JPA mappings, explain First-Level vs Second-Level cache architecture, and demonstrate batch fetching to resolve the N+1 problem."
], [
    "Collection Interface Rule: JPA entities must declare collections using interface types (`Set`, `List`), never concrete classes (`HashSet`).",
    "OrderColumn vs OrderBy: `@OrderBy` sorts dynamically on read; `@OrderColumn` persists explicit persistent array index column in table.",
    "First-Level Cache Scope: Bound to active `EntityManager` lifecycle; cannot be shared across concurrent threads or separate sessions.",
    "Second-Level Cache Scope: Shared globally across all sessions; stores dehydrated entity state arrays rather than live object graphs.",
    "Batch Fetching Solution: `@BatchSize(size = 25)` instructs ORM to load lazy collections in batches of 25 parent IDs via SQL `IN` clause.",
    "Bag Semantics in Hibernate: Unordered list permitting duplicates; least efficient collection because removing an element may rewrite entire table.",
    "Concurrent Read-Write Cache: Uses soft locks on cache entries during database updates to ensure transactional isolation consistency.",
    "Query Cache Dependency: Useless without second-level cache, as query cache stores only entity IDs requiring subsequent L2 lookup.",
    "ElementCollection Lifecycle: Elements in `@ElementCollection` are lifecycle-dependent on parent entity; deleted automatically with parent.",
    "Exam Gold Tip: Always explain that modifying a persistent collection modifies the relationship in memory, but the owning side must be updated for database persistence."
])

# =========================================================================
# 10. REAL ANALYSIS (B.Sc)
# =========================================================================
add("Real Analysis", 1, "Sequences", [
    "Axiomatic Foundations of Real Numbers: Field axioms, order axioms, and the Completeness Axiom (Least Upper Bound / Supremum Property): Every non-empty subset of $\\mathbb{R}$ bounded above has a least upper bound (supremum) in $\\mathbb{R}$; Archimedean Property: For any $x \\in \\mathbb{R}$, there exists $n \\in \\mathbb{N}$ such that $n > x$.",
    "Sequence Definition & Convergence Criterion: A sequence of real numbers is a function $a: \\mathbb{N} \\to \\mathbb{R}$, denoted $(a_n)_{n=1}^\\infty$; Formal $\\epsilon$-$N$ convergence definition: $a_n \\to L$ as $n \\to \\infty$ if for every $\\epsilon > 0$, there exists integer $N \\in \\mathbb{N}$ such that $|a_n - L| < \\epsilon$ for all $n \\ge N$; Uniqueness of limit.",
    "Boundedness & Limit Theorems: Every convergent sequence of real numbers is bounded; Algebraic limit laws: If $a_n \\to A$ and $b_n \\to B$, then $a_n + b_n \\to A + B$, $a_n b_n \\to A B$, and $a_n / b_n \\to A / B$ (for $B \\ne 0$); Squeeze (Sandwich) Theorem.",
    "Monotone Convergence Theorem (MCT): Fundamental convergence theorem: Every bounded monotonic sequence converges; If $(a_n)$ is monotonically increasing and bounded above, then $\\lim_{n \\to \\infty} a_n = \\sup\\{a_n : n \\in \\mathbb{N}\\}$; If decreasing and bounded below, it converges to its infimum.",
    "Subsequences & Bolzano-Weierstrass Theorem: Subsequence $(a_{n_k})$ where $n_1 < n_2 < \\dots$; Peak point lemma: Every sequence has a monotonic subsequence; Bolzano-Weierstrass Theorem: Every bounded sequence of real numbers contains at least one convergent subsequence.",
    "Cauchy Sequences & Metric Completeness of R: Definition: Sequence $(a_n)$ is a Cauchy sequence if for every $\\epsilon > 0$, there exists $N \\in \\mathbb{N}$ such that $|a_n - a_m| < \\epsilon$ for all $n, m \\ge N$; Cauchy Criterion: A sequence in $\\mathbb{R}$ converges if and only if it is a Cauchy sequence (completeness of $\\mathbb{R}$).",
    "Limit Superior & Limit Inferior: Limit superior: $\\limsup_{n \\to \\infty} a_n = \\lim_{n \\to \\infty} (\\sup_{k \\ge n} a_k) = \\inf_{n \\ge 1} (\\sup_{k \\ge n} a_k)$; Limit inferior: $\\liminf a_n$; Sequence converges to $L$ if and only if $\\limsup a_n = \\liminf a_n = L$.",
    "Contractive Sequences & Fixed Points: A sequence is contractive if $|a_{n+2} - a_{n+1}| \\le C |a_{n+1} - a_n|$ for some constant $C \\in (0, 1)$; Every contractive sequence is Cauchy and therefore converges in $\\mathbb{R}$.",
    "Divergence & Infinite Limits: Sequence diverges to $+\\infty$ ($a_n \\to +\\infty$) if for every $M > 0$, there exists $N \\in \\mathbb{N}$ such that $a_n > M$ for all $n \\ge N$; Oscillatory sequences (bounded vs unbounded oscillation, e.g. $(-1)^n$).",
    "University Examination Strategy: Prove convergence of a sequence using formal $\\epsilon$-$N$ definition, prove the Monotone Convergence Theorem using the Supremum property, and prove the Bolzano-Weierstrass Theorem."
], [
    "Completeness Axiom: Distinguishes $\\mathbb{R}$ from $\\mathbb{Q}$; every non-empty set of reals bounded above has a real supremum.",
    "Epsilon-N Limit Formulation: For all $\\epsilon > 0$, $\\exists N \\in \\mathbb{N}$ such that $n \\ge N \\implies |a_n - L| < \\epsilon$.",
    "Convergent Implies Bounded: Convergent sequence is strictly bounded, but bounded sequences may diverge (e.g. $(-1)^n$).",
    "Monotone Convergence Rule: Monotonicity plus boundedness guarantees convergence; eliminates need to know the limit beforehand.",
    "Bolzano-Weierstrass Theorem: Every bounded sequence in $\\mathbb{R}$ possesses a convergent subsequence.",
    "Cauchy Criterion Completeness: In $\\mathbb{R}$, Cauchy property is equivalent to convergence; sequence values cluster together.",
    "Squeeze Theorem: If $a_n \\le b_n \\le c_n$ for all $n \\ge N$ and $\\lim a_n = \\lim c_n = L$, then $\\lim b_n = L$.",
    "Contractive Sequence Convergence: Ratio $|a_{n+1}-a_n| / |a_n-a_{n-1}| \\le C < 1$ guarantees Cauchy convergence.",
    "Limsup and Liminf Equality: Sequence has a finite limit iff $\\limsup_{n \\to \\infty} a_n = \\liminf_{n \\to \\infty} a_n$.",
    "Exam Gold Tip: To find the limit of a recursively defined sequence, first prove it is bounded and monotonic by induction, then pass to the limit."
])

add("Real Analysis", 2, "Series", [
    "Infinite Series Foundations: Given sequence $(a_n)_{n=1}^\\infty$, infinite series denoted $\\sum_{n=1}^\\infty a_n$; Sequence of partial sums $S_k = \\sum_{n=1}^k a_n$; Series converges to sum $S$ if $\\lim_{k \\to \\infty} S_k = S$; Series diverges if sequence of partial sums diverges.",
    "Necessary Divergence Test (nth-Term Test): If series $\\sum a_n$ converges, then $\\lim_{n \\to \\infty} a_n = 0$; Contrapositive: If $\\lim_{n \\to \\infty} a_n \\ne 0$ or does not exist, then $\\sum a_n$ diverges; The converse is false (Harmonic series $\\sum \\frac{1}{n}$ diverges despite $1/n \\to 0$).",
    "Geometric Series & p-Series Benchmarks: Geometric series: $\\sum_{n=0}^\\infty r^n = \\frac{1}{1 - r}$ converges iff $|r| < 1$; $p$-Series (Hyperharmonic series): $\\sum_{n=1}^\\infty \\frac{1}{n^p}$ converges iff $p > 1$ and diverges for $p \\le 1$ (proved via Cauchy condensation test).",
    "Positive Term Series Tests: Direct Comparison Test: If $0 \\le a_n \\le b_n$, convergence of $\\sum b_n$ implies convergence of $\\sum a_n$; Limit Comparison Test: If $\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = L \\in (0, \\infty)$, both series either converge or diverge together.",
    "D'Alembert's Ratio Test & Cauchy's Root Test: Ratio test: $\\lim_{n \\to \\infty} |a_{n+1} / a_n| = L$; Root test: $\\lim_{n \\to \\infty} \\sqrt[n]{|a_n|} = L$; Converges absolutely if $L < 1$; Diverges if $L > 1$; Inconclusive if $L = 1$; Root test is strictly stronger than Ratio test.",
    "Cauchy Integral Test for Convergence: If $f(x)$ is continuous, positive, and monotonically decreasing on $[1, \\infty)$ with $f(n) = a_n$, then $\\sum_{n=1}^\\infty a_n$ converges if and only if improper integral $\\int_1^\\infty f(x) dx$ converges.",
    "Alternating Series & Leibniz's Theorem: Alternating series $\\sum_{n=1}^\\infty (-1)^{n-1} b_n$ with $b_n > 0$; Leibniz test: Converges if (1) sequence $(b_n)$ is monotonically decreasing ($b_{n+1} \\le b_n$) and (2) $\\lim_{n \\to \\infty} b_n = 0$; Error bound: $|S - S_k| \\le b_{k+1}$.",
    "Absolute vs Conditional Convergence: Absolute convergence: $\\sum |a_n|$ converges (implies $\\sum a_n$ converges); Conditional convergence: $\\sum a_n$ converges but $\\sum |a_n|$ diverges (e.g. alternating harmonic series $\\sum \\frac{(-1)^{n-1}}{n} = \\ln 2$).",
    "Riemann's Rearrangement Theorem & Dirichlet/Abel Tests: Riemann rearrangement: Conditionally convergent series can be rearranged to sum to any desired real number or $\\pm\\infty$; Dirichlet's test: $\\sum a_n b_n$ converges if partial sums of $a_n$ are bounded and $b_n \\searrow 0$.",
    "University Examination Strategy: Test convergence of given series using Limit Comparison, Ratio, and Root tests; prove the Leibniz alternating series test; and demonstrate the Riemann rearrangement theorem."
], [
    "Nth-Term Divergence Test: If $\\lim a_n \\ne 0$, series diverges immediately; $\\lim a_n = 0$ is necessary but NOT sufficient.",
    "Geometric Series Sum: Converges to $S = \\frac{a}{1 - r}$ if and only if $|r| < 1$.",
    "P-Series Convergence Criterion: $\\sum_{n=1}^\\infty \\frac{1}{n^p}$ converges iff $p > 1$; diverges for $p \\le 1$.",
    "Limit Comparison Quotient: If $\\lim \\frac{a_n}{b_n} = L > 0$, both series share identical convergence behavior.",
    "Ratio Test Threshold: $L = \\lim \\left| \\frac{a_{n+1}}{a_n} \\right|$; converges if $L < 1$, diverges if $L > 1$, fails if $L = 1$.",
    "Root Test Superiority: Whenever ratio test yields limit $L$, root test yields identical limit, but root test can succeed when ratio test fails.",
    "Leibniz Alternating Rule: Monotonically decreasing terms converging to zero guarantees convergence of alternating series.",
    "Alternating Remainder Bound: Truncation error after $k$ terms is bounded by the magnitude of the very next omitted term $b_{k+1}$.",
    "Absolute Implies Conditional: Absolute convergence $\\sum |a_n| < \\infty$ guarantees normal convergence without conditional instability.",
    "Exam Scoring Tip: For series with factorials ($n!$) or exponential powers ($a^n$), use the Ratio test; for powers of $n$ ($n^n$), use the Root test."
])

add("Real Analysis", 3, "Limits & Continuity", [
    "Functional Limits & Cauchy Epsilon-Delta Formulation: Let $f: D \\to \\mathbb{R}$ and $c$ be a limit point of $D$; $\\lim_{x \\to c} f(x) = L$ if for every $\\epsilon > 0$, there exists $\\delta > 0$ such that for all $x \\in D$, $0 < |x - c| < \\delta \\implies |f(x) - L| < \\epsilon$; Left-hand and right-hand limits.",
    "Sequential Criterion for Functional Limits: Heine's formulation: $\\lim_{x \\to c} f(x) = L$ if and only if for every sequence $(x_n)$ in $D \\setminus \\{c\\}$ converging to $c$, the sequence of functional values $f(x_n)$ converges to $L$; Proving divergence using two sequences.",
    "Continuous Functions Formal Definition: Function $f: D \\to \\mathbb{R}$ is continuous at $c \\in D$ if $\\lim_{x \\to c} f(x) = f(c)$; In $\\epsilon$-$\\delta$ notation: $\\forall \\epsilon > 0, \\exists \\delta > 0$ such that $|x - c| < \\delta \\implies |f(x) - f(c)| < \\epsilon$; Continuity on a set; Preservation of continuity under algebraic operations.",
    "Classification of Discontinuities: Removable discontinuity (limit exists but $\\lim f(x) \\ne f(c)$), Jump / First kind discontinuity (one-sided limits exist but $\\lim_{x \\to c^-} f(x) \\ne \\lim_{x \\to c^+} f(x)$), and Essential / Second kind discontinuity (at least one one-sided limit does not exist, e.g. $\\sin(1/x)$).",
    "Intermediate Value Theorem (IVT): Bolzano's Theorem: If $f: [a, b] \\to \\mathbb{R}$ is continuous and $f(a) \\cdot f(b) < 0$, there exists at least one $c \\in (a, b)$ such that $f(c) = 0$; General IVT: $f$ attains every intermediate value between $f(a)$ and $f(b)$; Preservation of intervals.",
    "Extreme Value Theorem (Weierstrass Theorem): If $f: [a, b] \\to \\mathbb{R}$ is continuous on a closed and bounded (compact) interval, then $f$ is bounded and attains its maximum and minimum values: $\\exists x_1, x_2 \\in [a, b]$ such that $f(x_1) \\le f(x) \\le f(x_2)$ for all $x \\in [a, b]$.",
    "Uniform Continuity Concept: Function $f: D \\to \\mathbb{R}$ is uniformly continuous on $D$ if for every $\\epsilon > 0$, there exists $\\delta > 0$ (depending only on $\\epsilon$, independent of $x$) such that $|x - y| < \\delta \\implies |f(x) - f(y)| < \\epsilon$ for all $x, y \\in D$.",
    "Heine-Cantor Theorem: Every continuous function defined on a closed and bounded (compact) interval $[a, b]$ is uniformly continuous on $[a, b]$; Failure on open intervals (e.g. $f(x) = 1/x$ is continuous on $(0, 1)$ but not uniformly continuous).",
    "Lipschitz Continuity & Contraction Mappings: Function satisfies Lipschitz condition if $|f(x) - f(y)| \\le K |x - y|$ for all $x, y \\in D$ with constant $K > 0$; Lipschitz continuity implies uniform continuity; Bounded derivatives imply Lipschitz continuity via MVT.",
    "University Examination Strategy: Prove a limit using formal $\\epsilon$-$\\delta$ definition, prove the Intermediate Value Theorem using the Supremum property or bisection, and determine whether a given function is uniformly continuous on a given domain."
], [
    "Epsilon-Delta Continuity: $\\forall \\epsilon > 0, \\exists \\delta > 0$ such that $|x - c| < \\delta \\implies |f(x) - f(c)| < \\epsilon$; delta can depend on both $\\epsilon$ and $c$.",
    "Sequential Criterion: Functional limit holds iff all sequences $x_n \\to c$ produce matching function limits $f(x_n) \\to L$.",
    "IVT Root Existence: Continuous function changing sign across $[a, b]$ must cross zero at least once at an interior point.",
    "Extreme Value Theorem: Continuity on compact interval $[a, b]$ guarantees existence of absolute maximum and minimum points.",
    "Uniform Continuity Independence: $\\delta$ depends strictly on $\\epsilon$ and applies uniformly across the entire domain.",
    "Heine-Cantor Theorem: Continuous function on closed, bounded interval $[a, b]$ is automatically uniformly continuous.",
    "Non-Uniform Counterexample: $f(x) = 1/x$ on $(0, 1)$ fails uniform continuity because slope approaches infinity near origin.",
    "Jump Discontinuity Metric: Jump magnitude equals $|\\lim_{x \\to c^+} f(x) - \\lim_{x \\to c^-} f(x)| > 0$.",
    "Lipschitz Implies Uniform: If $|f(x)-f(y)| \\le K|x-y|$, choosing $\\delta = \\epsilon / K$ satisfies uniform continuity.",
    "Exam Gold Tip: To show a function is NOT uniformly continuous on $D$, find two sequences $(x_n), (y_n)$ such that $|x_n - y_n| \\to 0$ but $|f(x_n) - f(y_n)| \\ge \\epsilon_0 > 0$."
])

add("Real Analysis", 4, "Differentiation", [
    "Derivative Formulation & Geometric Interpretation: Let $f: (a, b) \\to \\mathbb{R}$; Derivative at $c \\in (a, b)$ defined as limit of difference quotient: $f'(c) = \\lim_{x \\to c} \\frac{f(x) - f(c)}{x - c} = \\lim_{h \\to 0} \\frac{f(c + h) - f(c)}{h}$; Differentiability implies continuity (converse is false, e.g. $f(x) = |x|$ at $x = 0$).",
    "Algebraic Differentiation Rules: Linearity: $(f + g)' = f' + g'$; Product (Leibniz) Rule: $(f g)' = f' g + f g'$; Quotient Rule: $(f / g)' = \\frac{f' g - f g'}{g^2}$; Chain Rule for composite functions: $(g \\circ f)'(c) = g'(f(c)) \\cdot f'(c)$ via Carathéodory's theorem.",
    "Fermat's Theorem on Local Extrema: If $f: (a, b) \\to \\mathbb{R}$ attains a local interior maximum or minimum at $c \\in (a, b)$ and $f$ is differentiable at $c$, then $f'(c) = 0$; Critical points definition ($f'(c) = 0$ or derivative undefined).",
    "Darboux's Theorem (Intermediate Value Property of Derivatives): If $f$ is differentiable on $[a, b]$ and $k$ lies between $f'(a)$ and $f'(b)$, then there exists at least one $c \\in (a, b)$ such that $f'(c) = k$; Derivatives satisfy intermediate value property even if $f'$ is not continuous.",
    "Rolle's Theorem: If $f: [a, b] \\to \\mathbb{R}$ is (1) continuous on closed interval $[a, b]$, (2) differentiable on open interval $(a, b)$, and (3) $f(a) = f(b)$, then there exists at least one $c \\in (a, b)$ such that $f'(c) = 0$.",
    "Lagrange's Mean Value Theorem (MVT): If $f: [a, b] \\to \\mathbb{R}$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists $c \\in (a, b)$ such that $f'(c) = \\frac{f(b) - f(a)}{b - a}$; Geometric interpretation: Tangent line at $c$ is parallel to secant chord.",
    "Corollaries of Mean Value Theorem: (1) If $f'(x) = 0$ for all $x \\in (a, b)$, then $f$ is constant; (2) If $f'(x) > 0$ for all $x \\in (a, b)$, then $f$ is strictly increasing; (3) If two functions have identical derivatives, they differ by a constant.",
    "Cauchy's Extended Mean Value Theorem: If $f, g: [a, b] \\to \\mathbb{R}$ are continuous on $[a, b]$ and differentiable on $(a, b)$, and $g'(x) \\ne 0$, then there exists $c \\in (a, b)$ such that $\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$; Foundation of L'Hôpital's Rule.",
    "Taylor's Theorem with Remainder Forms: Expansion: $f(b) = \\sum_{k=0}^{n-1} \\frac{f^{(k)}(a)}{k!} (b - a)^k + R_n$; Lagrange form of remainder: $R_n = \\frac{f^{(n)}(\\xi)}{n!} (b - a)^n$ for some $\\xi \\in (a, b)$; Cauchy form of remainder: $R_n = \\frac{f^{(n)}(\\xi)}{(n-1)!} (b - \\xi)^{n-1} (b - a)$.",
    "University Examination Strategy: State and prove Rolle's Theorem and Lagrange's Mean Value Theorem, prove Darboux's Theorem, and express the remainder in Taylor's expansion in Lagrange and Cauchy forms."
], [
    "Differentiability Implies Continuity: If $f'(c)$ exists, then $f(x) - f(c) = \\frac{f(x)-f(c)}{x-c}(x-c) \\to f'(c) \\cdot 0 = 0$.",
    "Weierstrass Pathological Function: Continuous everywhere but differentiable nowhere, proving continuity does not guarantee differentiability.",
    "Fermat's Stationary Rule: At interior extrema of differentiable functions, the slope of the tangent vanishes: $f'(c) = 0$.",
    "Rolle's Theorem Hypotheses: Requires continuity on $[a, b]$, differentiability on $(a, b)$, and equal endpoints $f(a) = f(b)$.",
    "Lagrange MVT Secant Formula: $f'(c) = \\frac{f(b) - f(a)}{b - a}$, asserting instantaneous rate equals average rate at some point.",
    "Cauchy MVT Ratio Form: $\\frac{f'(c)}{g'(c)} = \\frac{f(b)-f(a)}{g(b)-g(a)}$, generalizing MVT to parametric curves.",
    "Darboux Derivative Property: A derivative function cannot have jump discontinuities; it must satisfy the intermediate value property.",
    "L'Hôpital Rigorous Proof: Derived directly from Cauchy MVT applied to difference quotients as $x \\to c$.",
    "Lagrange Remainder Term: $R_n = \\frac{f^{(n)}(\\xi)}{n!} (x - x_0)^n$, providing quantitative truncation error bounds for Taylor polynomials.",
    "Exam Scoring Tip: In proofs of MVT, construct the auxiliary function $\\phi(x) = f(x) - f(a) - \\frac{f(b)-f(a)}{b-a}(x-a)$ and apply Rolle's Theorem."
])

add("Real Analysis", 5, "Integration", [
    "Partitions & Darboux Upper and Lower Sums: Let $f: [a, b] \\to \\mathbb{R}$ be bounded; Partition $P = \\{a = x_0 < x_1 < \\dots < x_n = b\\}$; Subinterval length $\\Delta x_i = x_i - x_{i-1}$; Infill $m_i = \\inf_{x \\in [x_{i-1}, x_i]} f(x)$ and supremum $M_i = \\sup_{x \\in [x_{i-1}, x_i]} f(x)$; Lower Darboux sum $L(P, f) = \\sum m_i \\Delta x_i$; Upper sum $U(P, f) = \\sum M_i \\Delta x_i$.",
    "Refinement of Partitions: Partition $P^*$ is a refinement of $P$ if $P \\subseteq P^*$; Fundamental Darboux inequalities: $L(P, f) \\le L(P^*, f) \\le U(P^*, f) \\le U(P, f)$; Refinement increases lower sums and decreases upper sums.",
    "Darboux Integrals & Riemann Integrability: Lower Darboux integral: $\\underline{\\int_a^b} f dx = \\sup_P L(P, f)$; Upper Darboux integral: $\\overline{\\int_a^b} f dx = \\inf_P U(P, f)$; Always $\\underline{\\int} f dx \\le \\overline{\\int} f dx$; Function $f$ is Riemann integrable ($f \\in \\mathcal{R}[a, b]$) iff $\\underline{\\int_a^b} f dx = \\overline{\\int_a^b} f dx = \\int_a^b f dx$.",
    "Riemann's Integrability Criterion (Cauchy Condition): A bounded function $f$ is Riemann integrable on $[a, b]$ if and only if for every $\\epsilon > 0$, there exists a partition $P_\\epsilon$ such that $U(P_\\epsilon, f) - L(P_\\epsilon, f) < \\epsilon$.",
    "Classes of Integrable Functions: (1) Every continuous function on $[a, b]$ is Riemann integrable ($C[a, b] \\subset \\mathcal{R}[a, b]$ via uniform continuity); (2) Every monotonic function on $[a, b]$ is Riemann integrable (even if having countably infinite discontinuities).",
    "Lebesgue's Criterion for Riemann Integrability: A bounded function $f$ on $[a, b]$ is Riemann integrable if and only if its set of discontinuities has Lebesgue measure zero; Non-integrability of Dirichlet function ($f(x) = 1$ if $x \\in \\mathbb{Q}$, $0$ if $x \\notin \\mathbb{Q}$).",
    "Properties of the Riemann Integral: Linearity: $\\int (\\alpha f + \\beta g) = \\alpha \\int f + \\beta \\int g$; Domain additivity: $\\int_a^b f = \\int_a^c f + \\int_c^b f$; Monotonicity: $f \\le g \\implies \\int f \\le \\int g$; Triangle inequality: $|\\int_a^b f(x) dx| \\le \\int_a^b |f(x)| dx$.",
    "First Fundamental Theorem of Calculus (FTC I): Let $f \\in \\mathcal{R}[a, b]$; Define accumulation function $F(x) = \\int_a^x f(t) dt$ for $x \\in [a, b]$; Then $F$ is continuous on $[a, b]$; Furthermore, if $f$ is continuous at $c \\in [a, b]$, then $F$ is differentiable at $c$ and $F'(c) = f(c)$.",
    "Second Fundamental Theorem of Calculus (FTC II): If $f \\in \\mathcal{R}[a, b]$ and $f$ possesses an antiderivative $F$ on $[a, b]$ (so $F'(x) = f(x)$ for all $x \\in [a, b]$), then $\\int_a^b f(x) dx = F(b) - F(a)$; Mean Value Theorem for Integrals.",
    "University Examination Strategy: Prove that every continuous function on $[a, b]$ is Riemann integrable, prove the First Fundamental Theorem of Calculus, apply Riemann's criterion to test integrability, and prove the integral mean value theorem."
], [
    "Darboux Inequality: For any partitions $P_1, P_2$, lower sum never exceeds upper sum: $L(P_1, f) \\le U(P_2, f)$.",
    "Riemann Criterion: $f \\in \\mathcal{R}[a, b] \\iff \\forall \\epsilon > 0, \\exists P \\text{ such that } U(P, f) - L(P, f) < \\epsilon$.",
    "Monotone Integrability: Monotone function is integrable because $U(P)-L(P) = \\frac{b-a}{n}[f(b)-f(a)] < \\epsilon$ for large $n$.",
    "Continuous Integrability: Uniform continuity on compact $[a, b]$ bounds $M_i - m_i < \\frac{\\epsilon}{b-a}$, proving integrability.",
    "Measure Zero Discontinuities: Lebesgue criterion asserts $f \\in \\mathcal{R}[a, b]$ iff discontinuity set $D_f$ has measure zero.",
    "Dirichlet Non-Integrable Function: Lower integral equals 0 while upper integral equals 1, failing Riemann integrability.",
    "FTC Part 1 Derivative: $\\frac{d}{dx} \\left[ \\int_a^x f(t) dt \\right] = f(x)$, establishing that integration and differentiation are inverse processes.",
    "FTC Part 2 Evaluation: $\\int_a^b f(x) dx = F(b) - F(a)$, where $F'(x) = f(x)$ everywhere on $[a, b]$.",
    "Integral Mean Value Theorem: If $f$ is continuous on $[a, b]$, there exists $c \\in (a, b)$ such that $\\int_a^b f(x) dx = f(c)(b - a)$.",
    "Exam Gold Tip: Always state that the accumulation function $F(x) = \\int_a^x f(t)dt$ is continuous even if the integrand $f$ has jump discontinuities."
])

# Save to sem3_bsc_computing_math_data.json
with open('scripts/sem3_bsc_computing_math_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in computing_math dataset now: {len(data)}")
