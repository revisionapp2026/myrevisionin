import json, os

data = {}
if os.path.exists('scripts/sem3_bsc_computing_math_data.json'):
    with open('scripts/sem3_bsc_computing_math_data.json', 'r', encoding='utf-8') as f:
        raw = json.load(f)
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
# 1. OBJECT ORIENTED PROGRAMMING (JAVA/C++) (B.Sc)
# =========================================================================
add("Object Oriented Programming (Java/C++)", 1, "OOP Concepts", [
    "Core Paradigms of Object-Oriented Software: Shift from procedural decomposition to object abstraction; Encapsulation (data hiding), Abstraction (interface vs implementation), Inheritance (code reusability), and Polymorphism (dynamic method binding).",
    "Encapsulation & Information Hiding: Bundling of state variables and manipulating methods into discrete classes; Private member protection against unauthorized external mutation; Public accessor (getter) and mutator (setter) interfaces.",
    "Data Abstraction Mechanics: Hiding internal complexity while exposing high-level contracts; C++ abstract classes with pure virtual functions `virtual void draw() = 0;`; Java interfaces `interface Drawable { void draw(); }`.",
    "Class Hierarchies & Code Reusability: Subclass specialization extending base class capabilities; Single, multilevel, and hierarchical inheritance; Resolving multiple inheritance ambiguity via C++ virtual base classes or Java interface contracts.",
    "Polymorphism Foundations: Static / Compile-time polymorphism: Function overloading and operator overloading resolved at compile time; Dynamic / Runtime polymorphism: Virtual function dispatch via virtual method table (`vtable`).",
    "Memory Model Comparison (C++ vs Java): C++ explicit stack/heap allocation (`new`/`delete`), pointers, and manual lifecycle management; Java managed heap allocation via JVM, automatic garbage collection (tracing collectors), and reference semantics.",
    "Software Modularity & Maintainability: High cohesion within classes and loose coupling between subsystem modules; Open/Closed Principle (classes open for extension but closed for direct source modification).",
    "Message Passing & Object Communication: Inter-object interaction through method invocation; Parameter passing mechanisms (pass-by-value vs pass-by-reference); Thread safety in multi-object concurrent invocations.",
    "UML Structural Class Diagrams: Graphical modeling of OOP architectures; Class representations (attributes, methods, visibility access modifiers: `+` public, `-` private, `#` protected); Association, aggregation (hollow diamond), and composition (filled diamond).",
    "University Examination Strategy: Define the four core pillars of OOP with illustrative code snippets in Java or C++, draw a UML class diagram demonstrating inheritance, and contrast compile-time vs runtime polymorphism."
], [
    "Four Pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism form the architectural core.",
    "Encapsulation Goal: Restricts direct access to internal state, enforcing data integrity via controlled method gateways.",
    "C++ Pure Virtual Function: Declared as `virtual void fn() = 0;`, making the containing class strictly abstract.",
    "Java Interface Contract: Defines public method signatures that implementing concrete classes must fully supply.",
    "Dynamic Dispatch Mechanism: Runtime method resolution facilitated by compiler-generated virtual method table (`vtable`).",
    "Diamond Problem Resolution: C++ uses `virtual public Base` inheritance to ensure only one shared base subobject is instantiated.",
    "Java Memory Safety: Eliminates raw memory pointer arithmetic and dangling references via automatic garbage collection.",
    "Aggregation vs Composition: Aggregation represents a 'has-a' weak relationship; Composition represents strong lifecycle-dependent ownership.",
    "Loose Coupling Benefit: Reduces ripple effects across modules when internal implementation details undergo modification.",
    "Exam Scoring Tip: In questions comparing C++ and Java, emphasize that Java does not support operator overloading or multiple class inheritance."
])

add("Object Oriented Programming (Java/C++)", 2, "Classes & Objects", [
    "Class Definition & Object Instantiation: Class as an abstract user-defined blueprint; Objects as concrete heap-allocated or stack-allocated instances holding unique state; Syntax in C++ (`ClassName obj;` or `new ClassName()`) vs Java (`ClassName obj = new ClassName();`).",
    "Access Specifiers & Visibility Boundaries: `private` (accessible strictly within the declaring class), `public` (accessible universally), and `protected` (accessible within the class and derived child subclasses); Java package-private default visibility.",
    "Constructor Lifecycle & Initialization Lists: Default constructors, parameterized constructors, and copy constructors; C++ member initializer lists (`Point(int x): m_x(x) {}`) preventing redundant default construction; Java constructor chaining via `this()` and `super()`.",
    "Destructors & Object Teardown: C++ deterministic destructors (`~ClassName()`) releasing raw OS resources, file handles, and dynamic memory upon leaving scope; RAII (Resource Acquisition Is Initialization) pattern; Java finalizers deprecation and `try-with-resources` AutoCloseable.",
    "The Implicit `this` Pointer / Reference: Implicit parameter passed to non-static member functions pointing to the invoking instance; Disambiguating shadowed instance variables (`this->x = x;` or `this.x = x;`); Returning `*this` / `this` for fluent method chaining.",
    "Static Members & Class-Level State: `static` fields shared globally across all class instances without per-object duplication; `static` member methods executable without an instantiated object; Limitations: static methods cannot access instance variables or `this`.",
    "Constant Correctness & Immutability: C++ `const` member functions (`int getX() const;`) guaranteeing zero mutation of object state; `mutable` keyword overriding constness for caching; Java `final` fields enforcing one-time immutable initialization.",
    "Friend Functions & Classes in C++: The `friend` declaration granting external functions or classes privileged access to private/protected members; Useful in binary operator overloading (`std::ostream& operator<<(std::ostream&, const Point&)`); Absent in Java.",
    "Dynamic Memory Allocation for Objects: C++ `new` operator allocating heap bytes and calling constructor, `delete` calling destructor and freeing memory; Managing object arrays (`new[]`/`delete[]`); C++11 smart pointers (`std::unique_ptr`, `std::shared_ptr`).",
    "University Examination Strategy: Differentiate shallow copy vs deep copy in copy constructors with pointer member examples, write code demonstrating C++ constructor initializer lists, and explain static member usage in Java."
], [
    "Object vs Class: Class is the formal conceptual schema; Object is the active running instance with memory allocation.",
    "C++ Member Initializer List: Directly initializes member fields prior to executing constructor body, boosting execution efficiency.",
    "Copy Constructor Signature: C++ takes reference: `ClassName(const ClassName& other)` to prevent infinite recursive copying.",
    "RAII Resource Management: C++ binds external resource lifetimes strictly to the stack lifespan of enclosing wrapper objects.",
    "Static Variable Allocation: Static class fields reside in fixed global data memory rather than inside individual object heap records.",
    "Static Method Limitation: Cannot invoke non-static methods or access instance variables because no implicit `this` pointer is passed.",
    "Const Member Guarantee: Appending `const` to C++ member function signature informs compiler that member data will not be altered.",
    "Deep Copy Requirement: Classes containing dynamic pointer members must allocate fresh heap memory during copy construction to prevent double-free crashes.",
    "Java `final` Variable: Prevents reassignment after initial binding, establishing thread-safe immutability for reference values.",
    "Viva Question: What happens if a copy constructor takes an argument by value? It causes an infinite compilation recursion error."
])

add("Object Oriented Programming (Java/C++)", 3, "Inheritance & Polymorphism", [
    "Inheritance Types & Derivation Semantics: Single inheritance (Child extends Parent), Multilevel inheritance (Grandchild extends Child), Hierarchical (multiple siblings extend one parent); C++ public, private, and protected derivation modes affecting inherited member visibility.",
    "Method Overriding & Dynamic Binding: Redefining base class member functions in derived subclasses; Java `@Override` annotation enforcing compiler checks; Resolving polymorphic method calls at runtime based on actual object type rather than reference type.",
    "Virtual Functions & VTABLE Mechanism: C++ `virtual` keyword instructing compiler to generate Virtual Method Table (`vtable`) per class containing function pointers; Each object instance carries hidden virtual table pointer (`vptr`); Dynamic dispatch overhead (one pointer indirection).",
    "Virtual Destructors Critical Requirement: Declaring base class destructor `virtual (~Base() {})`; Deleting a derived object through a base class pointer without virtual destructor causes undefined behavior and severe derived resource leaks.",
    "Pure Virtual Functions & Interface Design: C++ pure virtual function `= 0` mandating subclass implementation; Pure abstract classes containing zero state; Java `interface` contracts allowing multiple interface inheritance (`class C implements A, B`).",
    "Superclass Construction Flow: Derived class constructors automatically invoke base class constructors first before executing their own body; Java `super(args)` explicit base constructor delegation; Explicit call ordering in C++ derivation list.",
    "Compile-Time Operator Overloading in C++: Overloading standard arithmetic and stream operators (`+`, `-`, `*`, `==`, `<<`) to provide intuitive mathematical syntax for user-defined types; Unary vs binary operator signatures; Prohibited in Java.",
    "Function Overloading & Ambiguity Resolution: Multiple methods in same scope sharing identical identifier with distinct parameter types/counts; Return type alone cannot disambiguate overloaded methods; Promotion rules in method resolution.",
    "Abstract Classes vs Interfaces in Java: Abstract classes can maintain instance variables, concrete methods, and constructors; Interfaces specify pure contracts, default methods (Java 8+), and static utility helpers without state.",
    "University Examination Strategy: Detail the internal mechanics of `vtable` and `vptr` with memory layout diagrams, explain why base class destructors must always be declared virtual, and provide a full code example of operator overloading."
], [
    "Dynamic Dispatch Mechanics: The `vptr` inside the object dereferences the class `vtable` to identify the appropriate runtime function pointer.",
    "Virtual Destructor Imperative: Deleting derived object via `Base*` requires `virtual ~Base()` to ensure derived destructor fires properly.",
    "Vtable Storage Location: A single shared `vtable` is stored in read-only program memory per polymorphic class type.",
    "Java Method Virtual by Default: All non-static, non-final member functions in Java are implicitly virtual and dynamically dispatched.",
    "Operator Overloading Restriction: C++ prohibits creating new custom operator symbols or altering operator precedence and arity.",
    "Method Signature Uniqueness: Function signature consists of method name and formal parameter type list; return type is excluded.",
    "C++ Slicing Problem: Passing a derived object by value to a base class parameter slices off derived member variables.",
    "Java Interface Default Methods: Java 8 introduced `default` implementations to allow interface evolution without breaking legacy implementers.",
    "Covariant Return Types: Overriding methods may return a narrower subtype of the return type declared in the parent method.",
    "Exam Gold Tip: Always explain that runtime polymorphism requires pointer or reference semantics in C++; value semantics causes object slicing."
])

add("Object Oriented Programming (Java/C++)", 4, "Exception Handling", [
    "Exception Handling Philosophy: Separating normal application logic from abnormal runtime error handling; Replacing brittle C-style error codes with structured exception propagation up the call stack.",
    "The Try-Catch-Finally / Try-Catch Blocks: Enclosing risky operations in `try` blocks; Catching specific exception types in sequential `catch` blocks; Java `finally` block guaranteed to execute regardless of whether an exception is thrown.",
    "Exception Throwing & Stack Unwinding: `throw` expression allocating an exception object and unwinding call frames; Automatic invocation of local stack object destructors during unwinding in C++ (preventing resource leaks).",
    "Exception Hierarchy in Java: Root `Throwable` class branching into `Error` (fatal JVM conditions: `OutOfMemoryError`, `StackOverflowError`) and `Exception`; Checked exceptions (mandated by compiler: `IOException`, `SQLException`) vs Unchecked runtime exceptions (`NullPointerException`, `ArrayIndexOutOfBoundsException`).",
    "Custom User-Defined Exception Classes: Deriving domain-specific exception types from `std::exception` (overriding `virtual const char* what() const noexcept;`) or extending Java `Exception` / `RuntimeException`.",
    "Resource Management & RAII vs Finally: C++ RAII guarantees automatic cleanup upon stack unwinding without finally blocks; Java 7+ `try-with-resources` construct automatically closing `AutoCloseable` streams.",
    "Exception Specifications & `noexcept`: C++11 `noexcept` specifier promising a function will not throw exceptions; Enables compiler optimizations (e.g. vector move operations); Calling `std::terminate()` if violation occurs; Java `throws` clause for checked exceptions.",
    "Rethrowing & Exception Chaining: Catching an exception, logging or transforming context, and rethrowing via `throw;` (C++) or wrapping as cause `throw new CustomException(\"detail\", e);` (Java).",
    "Anti-Patterns in Exception Handling: Catching raw `Exception` or `Throwable` indiscriminately, suppressing exceptions with empty catch blocks ('swallowing errors'), throwing exceptions across thread boundaries without promises, and using exceptions for normal loop control.",
    "University Examination Strategy: Contrast checked vs unchecked exceptions in Java with clear examples, explain the C++ stack unwinding process and its relationship to RAII, and write a complete custom exception class."
], [
    "Stack Unwinding Process: The runtime walks back up call frames destroying local stack objects until matching catch block is located.",
    "RAII Exception Safety: Destructors of fully constructed stack objects fire automatically during unwinding, preventing resource leaks.",
    "Checked vs Unchecked Java: Checked exceptions must be declared in method `throws` clause or handled; Unchecked (`RuntimeException`) need not.",
    "Catch Order Precedence: Subclass exception handlers must precede superclass catch blocks, or the compiler flags unreachable code.",
    "Java `finally` Execution: Executes under all paths (normal completion, caught exception, uncaught exception), except upon `System.exit()`.",
    "C++ `what()` Method: Virtual method in `std::exception` returning null-terminated explanatory C-string (`const char*`).",
    "Noexcept Performance Gain: `noexcept` allows `std::vector` to use fast move constructors instead of copy constructors during reallocation.",
    "Exception Slicing Hazard: In C++, catching exceptions by value causes slicing; always catch exceptions by const reference: `catch (const std::exception& e)`.",
    "Try-With-Resources Syntax: Closes declared resources automatically in reverse order of declaration upon block exit.",
    "Viva Question: What happens if an exception is thrown inside a C++ destructor during stack unwinding? `std::terminate()` is invoked immediately."
])

add("Object Oriented Programming (Java/C++)", 5, "Collections", [
    "Generic Programming & Parametric Polymorphism: Decoupling algorithms and data structures from concrete data types; C++ Templates (`template <typename T> class Vector`) expanding at compile time; Java Generics utilizing type erasure for backward compatibility.",
    "C++ Standard Template Library (STL) Architecture: Three foundational pillars: Containers (sequence, associative, unordered), Iterators (abstract generalized pointers), and Algorithms (reusable functions operating across iterator ranges).",
    "STL Sequence Containers: `std::vector` (dynamic contiguous array, amortized $O(1)$ push_back, cache-friendly), `std::deque` (double-ended queue, segmented buffers), `std::list` (doubly-linked list, $O(1)$ splice), `std::array` (fixed-size compile-time stack buffer).",
    "STL Associative & Unordered Containers: `std::set` and `std::map` (ordered self-balancing Red-Black trees, $O(\\log N)$ lookup, insertion, deletion); `std::unordered_set` and `std::unordered_map` (hash tables, $O(1)$ average lookup, buckets, load factor).",
    "Java Collections Framework (JCF) Core Interfaces: Root `Collection` interface; `List` (ordered sequence: `ArrayList`, `LinkedList`), `Set` (unique elements: `HashSet`, `TreeSet`), `Queue` / `Deque` (`ArrayDeque`, `PriorityQueue`), and separate `Map` hierarchy (`HashMap`, `TreeMap`).",
    "Java `HashMap` Internal Implementation: Array of hash buckets (`Node<K,V>[]`); Resolves collisions via separate chaining; Automatic conversion of linked lists to balanced Red-Black trees when bucket length exceeds threshold 8 and table capacity $\\ge 64$; Default load factor 0.75.",
    "Iterators & Iterator Invalidation: Iterator categories: Input, Output, Forward, Bidirectional, Random Access; Iterator invalidation rules: Vector reallocation invalidates all iterators; Modifying Java collections during iteration throws `ConcurrentModificationException` (fail-fast behavior).",
    "STL Standard Algorithms: Non-modifying algorithms (`std::find`, `std::count`), modifying algorithms (`std::transform`, `std::reverse`), and sorting algorithms (`std::sort` introsort combining quicksort, heapsort, and insertion sort, $O(N \\log N)$ worst-case).",
    "Java Comparators & Lambda Expressions: `Comparable<T>` interface (`compareTo()` for natural ordering) vs `Comparator<T>` interface (`compare()` for custom external ordering); Functional interfaces and Java 8 lambda syntax (`(a, b) -> a.val - b.val`).",
    "University Examination Strategy: Compare `std::vector` vs `std::list` in C++ with complexity tables, explain internal collision handling in Java `HashMap` including treeification, and write code sorting a custom object list using a comparator."
], [
    "Vector Amortized Insertion: Vector doubling strategy ensures appending $N$ elements takes $O(N)$ total time, yielding $O(1)$ amortized cost.",
    "Map vs Unordered Map: `std::map` uses balanced BST with $O(\\log N)$ guarantees; `std::unordered_map` uses hash table with $O(1)$ average time.",
    "Java Type Erasure: Java generics compile to raw types with casts; generic type parameters do not exist at JVM runtime.",
    "HashMap Treeification: Bins with $\\ge 8$ entries convert from linked list to red-black tree, reducing worst-case collision lookup to $O(\\log N)$.",
    "Fail-Fast Iterator Mechanism: Compares internal `modCount` with iterator's expected count; mismatch instantly triggers `ConcurrentModificationException`.",
    "Introsort Strategy: `std::sort` starts with quicksort, switches to heapsort if recursion depth exceeds $2\\log N$, and finishes with insertion sort.",
    "Random Access Iterators: Pointers and vector iterators support $O(1)$ arithmetic jumps (`it + n`, `it[n]`), unlike list iterators.",
    "Comparable vs Comparator: `Comparable` defines internal natural order in class; `Comparator` supplies external custom ordering logic.",
    "Set Key Uniqueness: `std::set` enforces uniqueness via strict weak ordering: `!(a < b) && !(b < a)`; `HashSet` via `hashCode()` and `equals()`.",
    "Exam Gold Tip: Always mention that `ArrayList` is backed by a contiguous array, making index-based get operations $O(1)$, but insertions $O(N)$."
])

# =========================================================================
# 2. OOP LAB (B.Sc)
# =========================================================================
add("OOP Lab", 1, "OOP: Laboratory Safety Protocols & Instrumentation", [
    "Computing Laboratory Electrical & Physical Safety: Grounded power outlets, uninterrupted power supply (UPS) backups, ergonomics (viewing distance, monitor glare filters, posture), and emergency main circuit breaker shutoff procedures.",
    "Integrated Development Environments (IDE) Setup: Installation and configuration of modern C++/Java environments: GCC/G++ toolchain, Clang, OpenJDK (Java 17/21 LTS), Visual Studio Code, IntelliJ IDEA, and Eclipse; Setting environment path variables (`JAVA_HOME`, `PATH`).",
    "Compilation Toolchains & Build Pipelines: C++ compilation pipeline: Preprocessor (`#include`, `#define`), Compiler (generates assembly `.s`), Assembler (generates object `.o`), and Linker (generates binary executable); Flags: `-Wall -Wextra -std=c++17 -O2`.",
    "Java Virtual Machine Compilation & Execution: Source file compilation via `javac Program.java` producing portable bytecode (`.class`); Bytecode execution via JVM `java Program`; Classpath resolution, Just-In-Time (JIT) compiler, and bytecode verifier.",
    "Version Control Systems in Computing Laboratories: Git version control workflow: `git init`, `git status`, staging (`git add`), committing (`git commit -m`), branching, and remote synchronization with GitHub/GitLab repositories.",
    "Debugging Tools & Breakpoint Analysis: Command-line debuggers (GDB for C++, JDB for Java) and GUI IDE debuggers; Setting line breakpoints, conditional breakpoints, step over (`n`), step into (`s`), inspecting stack frames, and watchpoints.",
    "Static Code Analysis & Linting: Utilizing static analyzers: Cppcheck, Clang-Tidy, and SonarLint; Detecting memory leaks, uninitialized variables, unreachable dead code, and style inconsistencies prior to execution.",
    "Memory Profiling & Leak Detection: C++ memory leak detection using Valgrind (`valgrind --leak-check=full ./exec`) and AddressSanitizer (`-fsanitize=address`); Java memory profiling using VisualVM and JConsole for heap dump analysis.",
    "File System Navigation & Terminal Operations: Command-line interface proficiency (Linux Bash / Windows PowerShell): Navigation (`cd`, `ls`/`dir`), file manipulation, I/O redirection (`>`, `<`), piping (`|`), and shell scripting for automated test batch execution.",
    "University Examination Strategy: Explain the 4 stages of C++ compilation from source to executable, write the step-by-step procedure to compile and run a Java package from terminal, and list essential GDB debugging commands."
], [
    "C++ Linker Role: Combines compiled object files and external libraries, resolving external symbol references into final machine binary.",
    "Java Bytecode Architecture: Platform-independent intermediate instruction set executed by any platform-specific Java Virtual Machine.",
    "JIT Optimization: Just-In-Time compiler translates frequently executed bytecode ('hot spots') directly into native CPU machine code.",
    "Valgrind Memcheck: Instruments heap allocations to pinpoint unreleased heap memory blocks and invalid pointer dereferences.",
    "AddressSanitizer Compiler Flag: Fast memory error detector compiled into binary using `-fsanitize=address -g`.",
    "GDB Breakpoint Command: `break file.cpp:line` sets halt point; `continue` resumes execution; `print var` inspects live values.",
    "Path Environment Variable: Informs OS shell where to locate binary executables (`javac`, `g++`, `git`) across directory trees.",
    "Git Staging Index: Intermediate buffer decoupling working directory edits from permanently committed repository snapshots.",
    "Ergonomic Screen Rule: Display positioned 50-70 cm from eyes with top of monitor at or slightly below eye level to prevent neck strain.",
    "Lab Viva Tip: Always know the difference between a compile-time syntax error and a runtime segmentation fault or exception."
])

add("OOP Lab", 2, "OOP: Standard Preparations & Calibration Methods", [
    "Test-Driven Development (TDD) Protocols: Writing automated unit tests prior to writing business logic; Red-Green-Refactor cycle; Unit testing frameworks: Google Test (GTest) for C++ and JUnit 5 for Java.",
    "JUnit 5 Test Framework Architecture: Core annotations: `@Test` (test case), `@BeforeEach` (test fixture setup), `@AfterEach` (teardown), `@BeforeAll`, `@ParameterizedTest`; Standard assertion library: `assertEquals`, `assertTrue`, `assertThrows`.",
    "Google Test (GTest) Framework Configuration: Assertions (`ASSERT_EQ` fatal failure halts test, `EXPECT_EQ` non-fatal failure records error and continues); Test fixtures using `::testing::Test` subclass with `SetUp()` and `TearDown()` methods.",
    "Automated Build Systems (Make & Maven): GNU Make: Writing `Makefile` with targets, prerequisites, and automated compilation rules; Apache Maven: `pom.xml` configuration, dependency management, and lifecycle phases (`compile`, `test`, `package`).",
    "Standardized Coding Conventions: Google C++ Style Guide and Oracle Java Code Conventions; PascalCase for class names, camelCase for method/variable identifiers, UPPER_CASE for constants, 4-space indentation, and comprehensive Javadoc / Doxygen comments.",
    "Mocking & Test Isolation: Decoupling unit tests from external dependencies (databases, network APIs); Mocking frameworks (Mockito for Java, Google Mock / GMock for C++); Creating mock objects, stubbing return values, and verifying method calls.",
    "Code Coverage Benchmarking: Measuring test effectiveness via statement coverage, branch coverage, and path coverage using tools like JaCoCo (Java Code Coverage) and gcov/lcov (C++); Enforcing minimum 80 percent branch coverage standard.",
    "Benchmark Harness Setup: Microbenchmarking execution time and throughput; Java Microbenchmark Harness (JMH) to prevent JIT dead-code elimination; High-resolution C++ timers (`std::chrono::high_resolution_clock`).",
    "Continuous Integration (CI) Scripting: Configuring automated test pipelines (GitHub Actions YAML workflows); Triggering clean builds, linting, unit test execution, and test report generation upon every repository push.",
    "University Examination Strategy: Write a complete JUnit 5 test class validating a bank account balance and exception handling, explain the difference between `ASSERT_EQ` and `EXPECT_EQ` in GTest, and write a simple GNU Makefile."
], [
    "Red-Green-Refactor Cycle: Write failing test first (Red), write minimal code to pass (Green), clean up design without altering behavior (Refactor).",
    "JUnit `@BeforeEach` Value: Re-initializes fresh test fixture objects before every single test method to guarantee test isolation.",
    "GTest Assert vs Expect: `ASSERT_*` aborts current test function immediately upon failure; `EXPECT_*` continues test to log further errors.",
    "Makefile Rule Structure: `target: prerequisites` followed by tab-indented shell recipe lines executed when prerequisites are newer.",
    "JaCoCo Coverage Metric: Measures bytecode branch execution to ensure both true and false paths of conditional statements are tested.",
    "Mockito Stubbing Syntax: `when(mockObject.method(args)).thenReturn(value);` configures simulated behavior without executing real code.",
    "JMH JIT Warmup: Executes warmup iterations before measurement iterations to ensure JIT compiler optimizes code before timing.",
    "Chrono High-Res Clock: C++ standard precision timer measuring duration between `now()` time-points in nanoseconds or microseconds.",
    "Javadoc Comment Syntax: Block comment starting with `/**` containing `@param`, `@return`, and `@throws` tags for automated HTML doc generation.",
    "Lab Practice Rule: Unit tests must be completely independent and deterministic; the execution order of individual tests must not matter."
])

add("OOP Lab", 3, "OOP: Core Experimental Procedures & Synthesis", [
    "Laboratory Practical 1: Complex Number Arithmetic Class: Designing C++ / Java `Complex` class with private real and imaginary double fields; Implementing constructors, getters, setters, addition, subtraction, multiplication; Overloading `+`, `-`, `*`, `<<`, `>>` operators in C++.",
    "Laboratory Practical 2: Banking Transaction System: Implementing `Account` base class and derived `SavingsAccount` (interest calculation) and `CurrentAccount` (overdraft limit); Encapsulating balance; Throwing custom `InsufficientFundsException` upon overdraw.",
    "Laboratory Practical 3: Geometric Shape Hierarchy: Abstract base class `Shape` with pure virtual / abstract methods `area()` and `perimeter()`; Concrete derived classes `Circle`, `Rectangle`, and `Triangle`; Demonstrating runtime polymorphic array processing.",
    "Laboratory Practical 4: Dynamic String Class Implementation: Building a custom `MyString` class in C++ with dynamic char array member; Implementing deep-copy copy constructor, copy assignment operator with self-assignment check, move constructor, and destructor (Rule of 5).",
    "Laboratory Practical 5: Generic Template Stack & Queue: Developing generic `Stack<T>` and `Queue<T>` classes using templates in C++ and generics in Java; Implementing push, pop, peek, and isEmpty operations; Throwing `StackUnderflowException` on empty pop.",
    "Laboratory Practical 6: Employee Payroll Polymorphic System: Base class `Employee` and derived `SalariedEmployee`, `HourlyEmployee`, and `CommissionEmployee`; Overriding `calculatePay()`; Processing company-wide payroll through polymorphic base pointers.",
    "Laboratory Practical 7: Student Record Management with Collections: Developing an interactive console application storing student records; Utilizing Java `ArrayList<Student>` and `HashMap<Integer, Student>`; Sorting by GPA using custom `Comparator`.",
    "Laboratory Practical 8: File I/O & Object Serialization: Serializing object graphs to binary disk files using Java `ObjectOutputStream` (`Serializable` interface) and deserializing via `ObjectInputStream`; Handling file not found and class not found exceptions.",
    "Laboratory Practical 9: Multi-threaded Producer-Consumer Queue: Implementing synchronized thread-safe bounded buffer using Java `wait()`, `notifyAll()`, and `synchronized` blocks or C++ `std::mutex`, `std::unique_lock`, and `std::condition_variable`.",
    "University Examination Strategy: Write the full source code for the Shape polymorphic hierarchy with dynamic dispatch in main, implement the custom Complex number class with operator overloading, and demonstrate the C++ Rule of Five in MyString."
], [
    "Rule of Five in C++: If a class defines destructor, copy constructor, or copy assignment, it must also define move constructor and move assignment.",
    "Self-Assignment Guard: In `operator=`, checking `if (this == &rhs) return *this;` prevents deleting own resources before copying.",
    "Move Constructor Semantics: `ClassName(ClassName&& other) noexcept` steals resources (pointers) from temporary rvalue, setting source to nullptr.",
    "Abstract Shape Array: Storing derived circle/rectangle pointers in `Shape* arr[]` invokes correct derived `area()` via dynamic binding.",
    "Custom Exception Structure: Inherit from `std::runtime_error` in C++ or `Exception` in Java, passing descriptive error message to super.",
    "Serializable Marker Interface: Empty Java interface flagging JVM reflection mechanism that class fields are safe to serialize into binary streams.",
    "Java Synchronized Lock: Acquires intrinsic monitor lock associated with the target object, ensuring mutual exclusion across threads.",
    "Condition Variable Wait: Releases associated mutex and suspends thread execution until signaled by another thread via notify/signal.",
    "Stream Insertion Overload: `std::ostream& operator<<(std::ostream& os, const MyClass& obj)` must be a non-member function (or friend).",
    "Practical Exam Checklist: Verify that every heap allocation via `new` has a corresponding `delete` in C++, or use smart pointers exclusively."
])

add("OOP Lab", 4, "OOP: Quantitative Data Verification & Error Analysis", [
    "Algorithmic Complexity Benchmarking of Collections: Empirically measuring runtime performance ($O(1)$ vs $O(N)$ vs $O(\\log N)$); Inserting 100,000 elements into `std::vector`, `std::list`, `std::set`, and `std::unordered_set`; Recording wall-clock time with microsecond timers.",
    "Memory Overhead Profiling in Data Structures: Quantifying memory consumption: Contiguous array (`std::vector`: minimal overhead per element) vs Node-based containers (`std::list`: 2 pointers (16 bytes) per element; `std::set`: 3 pointers plus color bit (32 bytes) per node).",
    "Cache Locality Impact Analysis: Demonstrating cache miss penalties; Comparing sequential array traversal (hardware prefetching, spatial locality) vs linked list pointer chasing across fragmented heap memory; Quantifying cache misses using Linux `perf` tool.",
    "Common OOP Design Pitfalls & Error Analysis: Tight coupling (breaking abstraction), God Object anti-pattern (classes exceeding 1000 lines violating SRP), inappropriate inheritance (violating Liskov Substitution Principle LSP), and circular dependencies.",
    "C++ Memory Corruption Diagnosis: Identifying common pointer bugs: Segmentation faults, dangling pointers (accessing memory after `delete`), memory leaks (failing to free heap blocks), double-free errors, and buffer overflows; Resolving with AddressSanitizer.",
    "Java Garbage Collection Tuning & Heap Analysis: Inspecting GC logs (`-Xlog:gc*`); Identifying memory leaks in Java (stale references retained in static collections); Analyzing heap dumps using Eclipse Memory Analyzer (MAT) to identify leak suspects.",
    "Thread Concurrency Bugs & Race Conditions: Simulating shared resource race conditions; Detecting data races using ThreadSanitizer (`-fsanitize=thread` in C++); Demonstrating deadlocks via circular mutex lock acquisition; Resolving deadlocks using `std::lock`.",
    "Code Smells & Refactoring Metrics: Measuring cyclomatic complexity, coupling between objects (CBO), and response for a class (RFC); Refactoring smelly code by extracting methods, replacing conditionals with polymorphism, and pulling up common fields.",
    "Software Quality Assurance Benchmarks: Establishing automated regression test suites; Enforcing zero-warning policy during compilation (`-Werror`); Verifying compliance with Clean Code standards prior to practical lab sign-off.",
    "University Examination Strategy: Plot performance benchmark curves comparing vector vs linked list insertions, analyze a buggy C++ code snippet containing dangling pointers and memory leaks, and explain the Liskov Substitution Principle."
], [
    "Spatial Cache Locality: Contiguous vector memory brings entire cache lines (64 bytes) into L1 cache, outperforming pointer-based linked lists 10x.",
    "Node Pointer Overhead: In a 64-bit architecture, each linked list node consumes 16 bytes solely for pointers plus allocator chunk metadata.",
    "Liskov Substitution Principle: Subtypes must be substitutable for their base types without altering program correctness or expectations.",
    "Single Responsibility Principle: A class should have one, and only one, reason to change; avoiding monolithic God Objects.",
    "Dangling Pointer Hazard: Pointer still references memory address after the allocated object has been deleted, leading to unpredictable crashes.",
    "Thread Data Race Condition: Occurs when two concurrent threads access the same memory location simultaneously without synchronization, and at least one access is a write.",
    "Deadlock Four Coffman Conditions: Mutual exclusion, hold-and-wait, no preemption, and circular wait must all hold concurrently for deadlock.",
    "Java Static Collection Leak: Adding objects to static collections prevents garbage collection because roots remain continuously reachable from GC roots.",
    "Introsort Worst-Case Bound: Switches to heapsort when quicksort recursion depth exceeds $2\\lfloor\\log_2 N\\rfloor$, ensuring strict $O(N\\log N)$ worst-case.",
    "Lab Viva Tip: Always define cyclomatic complexity: measures the number of linearly independent execution paths through a program's source code."
])

add("OOP Lab", 5, "OOP: Comprehensive Practical Record & Viva Voce", [
    "Practical Laboratory Notebook Organization: Standard structure: Problem statement, theoretical concepts, UML class and sequence diagrams, documented source code, input test vectors, execution console outputs, and complexity analysis.",
    "Viva Voce High-Yield Questions on Classes: Difference between class and struct in C++ (default visibility: struct is public, class is private); Purpose of constructor initializer lists; What is a copy constructor and when is it invoked?",
    "Viva Voce Questions on Inheritance & Polymorphism: What is dynamic dispatch and how does it differ from static binding? Why should a base class destructor be virtual? What is an abstract class and can an abstract class have constructors?",
    "Viva Voce Questions on C++ Specific Features: Explain the Rule of Three and Rule of Five; What is the difference between shallow copy and deep copy? What is a friend function and why does it violate encapsulation?",
    "Viva Voce Questions on Java Architecture: How does Java achieve platform independence? What is the difference between JVM, JRE, and JDK? What is the difference between `final`, `finally`, and `finalize`?",
    "Viva Voce Questions on Java Memory & Collections: How does `HashMap` work internally? What happens during hash collision? Why are immutable objects thread-safe? What is the difference between `ArrayList` and `Vector`?",
    "Viva Voce Questions on Exception Handling: What happens if an exception is thrown in a constructor? What is the difference between checked and unchecked exceptions? What is the purpose of `try-with-resources`?",
    "Design Patterns Overview: Creational patterns: Singleton (single instance with global access), Factory Method; Structural patterns: Adapter, Decorator; Behavioral patterns: Observer (publish-subscribe), Strategy.",
    "Professional Coding Standards Checklist: Descriptive naming conventions, single responsibility per method, elimination of magic numbers via constants, zero compiler warnings, and proper handling of all resource lifecycles.",
    "University Examination Strategy: Review all viva questions on vtables, virtual destructors, and memory management, ensure practical record book contains complete UML diagrams and test outputs for all 10 experiments, and be prepared to write code on the board."
], [
    "Struct vs Class Default: C++ struct members and inheritance default to `public`; class members and inheritance default to `private`.",
    "Singleton Thread Safety: Double-checked locking or Java enum / C++ Meyer's singleton (`static ClassName instance;`) ensures safe single allocation.",
    "Final vs Finally vs Finalize: `final` is a keyword/modifier; `finally` is a cleanup code block; `finalize` is a deprecated teardown method.",
    "JDK vs JRE vs JVM: JDK contains development tools (`javac`); JRE provides runtime libraries; JVM executes compiled bytecode instructions.",
    "Shallow vs Deep Copy: Shallow copy duplicates raw pointer addresses; Deep copy allocates distinct memory and copies underlying content.",
    "Factory Method Intent: Defines interface for object creation, letting subclasses decide which concrete class to instantiate.",
    "Observer Pattern Topology: Subject maintains observer list, notifying them automatically of state updates via uniform method call.",
    "Strategy Pattern Flexibility: Encapsulates interchangeable algorithm families inside separate classes, selecting strategies dynamically at runtime.",
    "Exception in Constructor: If an exception is thrown before constructor completes, the destructor will NOT be called for that object in C++.",
    "Exam Gold Tip: In viva voce, answer with immediate technical precision: give the definition, explain the underlying mechanism, and give a short syntax example."
])

# Save to sem3_bsc_computing_math_data.json
with open('scripts/sem3_bsc_computing_math_data.json', 'w', encoding='utf-8') as f:
    str_data = {f"{k[0]}:::{k[1]}": v for k, v in data.items()}
    json.dump(str_data, f, indent=2)

print(f"Total units in computing_math dataset now: {len(data)}")
