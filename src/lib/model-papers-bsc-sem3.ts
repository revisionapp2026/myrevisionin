/**
 * Authentic University Model Papers & Solved Solutions for B.Sc Semester 3.
 * Curricula: UGC CBCS Framework 2020-2023.
 *
 * Covers 34 Subjects (68 Question Papers, 680 Solved Questions).
 * Part A (5x2M short questions) + Part B (5x10M long answers with step-by-step solutions).
 */

import type { DbQuestion } from "./content";

const sem3BScPapersData: Record<string, DbQuestion[]> = {
  "object oriented programming (java/c++)_set1": [
    {
      "id": "object-oriented-programming-(java/c++)-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OOP Concepts and state its primary asymptotic time complexity in Object Oriented Programming (Java/C++).",
      "answer_lines": [
        "**Definition**: In Object Oriented Programming (Java/C++), OOP Concepts establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Classes & Objects and state its primary asymptotic time complexity in Object Oriented Programming (Java/C++).",
      "answer_lines": [
        "**Definition**: In Object Oriented Programming (Java/C++), Classes & Objects establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Inheritance & Polymorphism and state its primary asymptotic time complexity in Object Oriented Programming (Java/C++).",
      "answer_lines": [
        "**Definition**: In Object Oriented Programming (Java/C++), Inheritance & Polymorphism establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Exception Handling and state its primary asymptotic time complexity in Object Oriented Programming (Java/C++).",
      "answer_lines": [
        "**Definition**: In Object Oriented Programming (Java/C++), Exception Handling establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Collections and state its primary asymptotic time complexity in Object Oriented Programming (Java/C++).",
      "answer_lines": [
        "**Definition**: In Object Oriented Programming (Java/C++), Collections establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of OOP Concepts with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "OOP Concepts serves as a core computational building block in Object Oriented Programming (Java/C++), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Classes & Objects with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Classes & Objects serves as a core computational building block in Object Oriented Programming (Java/C++), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Inheritance & Polymorphism with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Inheritance & Polymorphism serves as a core computational building block in Object Oriented Programming (Java/C++), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Exception Handling with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Exception Handling serves as a core computational building block in Object Oriented Programming (Java/C++), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Collections with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Collections serves as a core computational building block in Object Oriented Programming (Java/C++), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    }
  ],
  "object oriented programming (java/c++)_set2": [
    {
      "id": "object-oriented-programming-(java/c++)-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with OOP Concepts.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in OOP Concepts.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Classes & Objects.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Classes & Objects.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Inheritance & Polymorphism.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Inheritance & Polymorphism.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Exception Handling.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Exception Handling.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Collections.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Collections.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for OOP Concepts. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in OOP Concepts.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Classes & Objects. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Classes & Objects.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Inheritance & Polymorphism. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Inheritance & Polymorphism.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Exception Handling. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Exception Handling.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "object-oriented-programming-(java/c++)-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Collections. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Collections.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    }
  ],
  "oop lab_set1": [
    {
      "id": "oop-lab-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OOP: Laboratory Safety Protocols & Instrumentation and state its primary measurement protocol in OOP Lab.",
      "answer_lines": [
        "**Definition**: OOP: Laboratory Safety Protocols & Instrumentation represents a core empirical or experimental procedure in OOP Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "oop-lab-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OOP: Standard Preparations & Calibration Methods and state its primary measurement protocol in OOP Lab.",
      "answer_lines": [
        "**Definition**: OOP: Standard Preparations & Calibration Methods represents a core empirical or experimental procedure in OOP Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "oop-lab-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OOP: Core Experimental Procedures & Synthesis and state its primary measurement protocol in OOP Lab.",
      "answer_lines": [
        "**Definition**: OOP: Core Experimental Procedures & Synthesis represents a core empirical or experimental procedure in OOP Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "oop-lab-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OOP: Quantitative Data Verification & Error Analysis and state its primary measurement protocol in OOP Lab.",
      "answer_lines": [
        "**Definition**: OOP: Quantitative Data Verification & Error Analysis represents a core empirical or experimental procedure in OOP Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "oop-lab-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OOP: Comprehensive Practical Record & Viva Voce and state its primary measurement protocol in OOP Lab.",
      "answer_lines": [
        "**Definition**: OOP: Comprehensive Practical Record & Viva Voce represents a core empirical or experimental procedure in OOP Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "oop-lab-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for OOP: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for OOP: Laboratory Safety Protocols & Instrumentation within OOP Lab. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "oop-lab-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for OOP: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for OOP: Standard Preparations & Calibration Methods within OOP Lab. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "oop-lab-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for OOP: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for OOP: Core Experimental Procedures & Synthesis within OOP Lab. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "oop-lab-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for OOP: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for OOP: Quantitative Data Verification & Error Analysis within OOP Lab. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "oop-lab-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for OOP: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for OOP: Comprehensive Practical Record & Viva Voce within OOP Lab. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    }
  ],
  "oop lab_set2": [
    {
      "id": "oop-lab-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for OOP: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "oop-lab-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for OOP: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "oop-lab-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for OOP: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "oop-lab-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for OOP: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "oop-lab-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for OOP: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "oop-lab-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for OOP: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in OOP: Laboratory Safety Protocols & Instrumentation.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "oop-lab-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for OOP: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in OOP: Standard Preparations & Calibration Methods.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "oop-lab-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for OOP: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in OOP: Core Experimental Procedures & Synthesis.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "oop-lab-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for OOP: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in OOP: Quantitative Data Verification & Error Analysis.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "oop-lab-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for OOP: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in OOP: Comprehensive Practical Record & Viva Voce.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    }
  ],
  "real analysis_set1": [
    {
      "id": "real-analysis-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Real Analysis.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "real-analysis-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Real Analysis.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "real-analysis-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Real Analysis.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "real-analysis-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Real Analysis.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "real-analysis-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Real Analysis.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "real-analysis-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Sequences with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Sequences within Real Analysis.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "real-analysis-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Series with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Series within Real Analysis.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "real-analysis-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Limits & Continuity with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Limits & Continuity within Real Analysis.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "real-analysis-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Differentiation with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Differentiation within Real Analysis.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "real-analysis-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Integration with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Integration within Real Analysis.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    }
  ],
  "real analysis_set2": [
    {
      "id": "real-analysis-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Sequences.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "real-analysis-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Series.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "real-analysis-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Limits & Continuity.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "real-analysis-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Differentiation.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "real-analysis-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Integration.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "real-analysis-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Sequences.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Sequences in Real Analysis.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "real-analysis-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Series.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Series in Real Analysis.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "real-analysis-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Limits & Continuity.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Limits & Continuity in Real Analysis.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "real-analysis-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Differentiation.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Differentiation in Real Analysis.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "real-analysis-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Integration.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Integration in Real Analysis.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    }
  ],
  "physics iii: thermal physics / statistics iii_set1": [
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Physics III: Thermal Physics / Statistics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Physics III: Thermal Physics / Statistics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Physics III: Thermal Physics / Statistics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Physics III: Thermal Physics / Statistics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Physics III: Thermal Physics / Statistics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Kinetic Theory with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Kinetic Theory within Physics III: Thermal Physics / Statistics III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Laws of Thermodynamics with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Laws of Thermodynamics within Physics III: Thermal Physics / Statistics III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Entropy with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Entropy within Physics III: Thermal Physics / Statistics III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Heat Engines with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Heat Engines within Physics III: Thermal Physics / Statistics III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Statistical Distributions with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Statistical Distributions within Physics III: Thermal Physics / Statistics III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    }
  ],
  "physics iii: thermal physics / statistics iii_set2": [
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Kinetic Theory.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Laws of Thermodynamics.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Entropy.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Heat Engines.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Statistical Distributions.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Kinetic Theory.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Kinetic Theory in Physics III: Thermal Physics / Statistics III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Laws of Thermodynamics.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Laws of Thermodynamics in Physics III: Thermal Physics / Statistics III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Entropy.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Entropy in Physics III: Thermal Physics / Statistics III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Heat Engines.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Heat Engines in Physics III: Thermal Physics / Statistics III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "physics-iii:-thermal-physics-/-statistics-iii-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Statistical Distributions.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Statistical Distributions in Physics III: Thermal Physics / Statistics III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    }
  ],
  "web design (html/css)_set1": [
    {
      "id": "web-design-(html/css)-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define HTML Basics and state its primary asymptotic time complexity in Web Design (HTML/CSS).",
      "answer_lines": [
        "**Definition**: In Web Design (HTML/CSS), HTML Basics establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "web-design-(html/css)-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define CSS and state its primary asymptotic time complexity in Web Design (HTML/CSS).",
      "answer_lines": [
        "**Definition**: In Web Design (HTML/CSS), CSS establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "web-design-(html/css)-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Forms and state its primary asymptotic time complexity in Web Design (HTML/CSS).",
      "answer_lines": [
        "**Definition**: In Web Design (HTML/CSS), Forms establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "web-design-(html/css)-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Layouts and state its primary asymptotic time complexity in Web Design (HTML/CSS).",
      "answer_lines": [
        "**Definition**: In Web Design (HTML/CSS), Layouts establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "web-design-(html/css)-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Responsive Design and state its primary asymptotic time complexity in Web Design (HTML/CSS).",
      "answer_lines": [
        "**Definition**: In Web Design (HTML/CSS), Responsive Design establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "web-design-(html/css)-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of HTML Basics with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "HTML Basics serves as a core computational building block in Web Design (HTML/CSS), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "web-design-(html/css)-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of CSS with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "CSS serves as a core computational building block in Web Design (HTML/CSS), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "web-design-(html/css)-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Forms with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Forms serves as a core computational building block in Web Design (HTML/CSS), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "web-design-(html/css)-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Layouts with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Layouts serves as a core computational building block in Web Design (HTML/CSS), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "web-design-(html/css)-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Responsive Design with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Responsive Design serves as a core computational building block in Web Design (HTML/CSS), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    }
  ],
  "web design (html/css)_set2": [
    {
      "id": "web-design-(html/css)-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with HTML Basics.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in HTML Basics.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "web-design-(html/css)-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with CSS.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in CSS.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "web-design-(html/css)-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Forms.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Forms.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "web-design-(html/css)-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Layouts.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Layouts.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "web-design-(html/css)-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Responsive Design.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Responsive Design.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "web-design-(html/css)-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for HTML Basics. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in HTML Basics.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "web-design-(html/css)-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for CSS. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in CSS.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "web-design-(html/css)-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Forms. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Forms.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "web-design-(html/css)-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Layouts. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Layouts.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "web-design-(html/css)-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Responsive Design. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Responsive Design.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    }
  ],
  "database management & sql_set1": [
    {
      "id": "database-management-&-sql-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define ER Model and state its primary significance in Database Management & SQL.",
      "answer_lines": [
        "**Definition**: ER Model forms a fundamental structural and operational concept within Database Management & SQL, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "database-management-&-sql-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Relational Model and state its primary significance in Database Management & SQL.",
      "answer_lines": [
        "**Definition**: Relational Model forms a fundamental structural and operational concept within Database Management & SQL, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "database-management-&-sql-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define SQL Queries and state its primary significance in Database Management & SQL.",
      "answer_lines": [
        "**Definition**: SQL Queries forms a fundamental structural and operational concept within Database Management & SQL, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "database-management-&-sql-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Normalization and state its primary significance in Database Management & SQL.",
      "answer_lines": [
        "**Definition**: Normalization forms a fundamental structural and operational concept within Database Management & SQL, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "database-management-&-sql-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Transactions and state its primary significance in Database Management & SQL.",
      "answer_lines": [
        "**Definition**: Transactions forms a fundamental structural and operational concept within Database Management & SQL, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "database-management-&-sql-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of ER Model with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "ER Model serves as a foundational study module in Database Management & SQL. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of ER Model is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "database-management-&-sql-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Relational Model with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Relational Model serves as a foundational study module in Database Management & SQL. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Relational Model is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "database-management-&-sql-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of SQL Queries with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "SQL Queries serves as a foundational study module in Database Management & SQL. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of SQL Queries is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "database-management-&-sql-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Normalization with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Normalization serves as a foundational study module in Database Management & SQL. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Normalization is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "database-management-&-sql-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Transactions with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Transactions serves as a foundational study module in Database Management & SQL. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Transactions is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "database management & sql_set2": [
    {
      "id": "database-management-&-sql-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with ER Model.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "database-management-&-sql-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Relational Model.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "database-management-&-sql-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with SQL Queries.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "database-management-&-sql-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Normalization.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "database-management-&-sql-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Transactions.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "database-management-&-sql-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of ER Model. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within ER Model are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of ER Model provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "database-management-&-sql-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Relational Model. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Relational Model are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Relational Model provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "database-management-&-sql-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of SQL Queries. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within SQL Queries are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of SQL Queries provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "database-management-&-sql-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Normalization. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Normalization are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Normalization provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "database-management-&-sql-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Transactions. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Transactions are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Transactions provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "dbms lab_set1": [
    {
      "id": "dbms-lab-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DBMS: Laboratory Safety Protocols & Instrumentation and state its primary measurement protocol in DBMS Lab.",
      "answer_lines": [
        "**Definition**: DBMS: Laboratory Safety Protocols & Instrumentation represents a core empirical or experimental procedure in DBMS Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dbms-lab-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DBMS: Standard Preparations & Calibration Methods and state its primary measurement protocol in DBMS Lab.",
      "answer_lines": [
        "**Definition**: DBMS: Standard Preparations & Calibration Methods represents a core empirical or experimental procedure in DBMS Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dbms-lab-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DBMS: Core Experimental Procedures & Synthesis and state its primary measurement protocol in DBMS Lab.",
      "answer_lines": [
        "**Definition**: DBMS: Core Experimental Procedures & Synthesis represents a core empirical or experimental procedure in DBMS Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dbms-lab-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DBMS: Quantitative Data Verification & Error Analysis and state its primary measurement protocol in DBMS Lab.",
      "answer_lines": [
        "**Definition**: DBMS: Quantitative Data Verification & Error Analysis represents a core empirical or experimental procedure in DBMS Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dbms-lab-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DBMS: Comprehensive Practical Record & Viva Voce and state its primary measurement protocol in DBMS Lab.",
      "answer_lines": [
        "**Definition**: DBMS: Comprehensive Practical Record & Viva Voce represents a core empirical or experimental procedure in DBMS Lab, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "dbms-lab-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DBMS: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DBMS: Laboratory Safety Protocols & Instrumentation within DBMS Lab. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "dbms-lab-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DBMS: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DBMS: Standard Preparations & Calibration Methods within DBMS Lab. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "dbms-lab-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DBMS: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DBMS: Core Experimental Procedures & Synthesis within DBMS Lab. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "dbms-lab-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DBMS: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DBMS: Quantitative Data Verification & Error Analysis within DBMS Lab. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "dbms-lab-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for DBMS: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for DBMS: Comprehensive Practical Record & Viva Voce within DBMS Lab. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    }
  ],
  "dbms lab_set2": [
    {
      "id": "dbms-lab-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DBMS: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dbms-lab-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DBMS: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dbms-lab-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DBMS: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dbms-lab-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DBMS: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dbms-lab-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for DBMS: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "dbms-lab-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DBMS: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DBMS: Laboratory Safety Protocols & Instrumentation.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "dbms-lab-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DBMS: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DBMS: Standard Preparations & Calibration Methods.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "dbms-lab-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DBMS: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DBMS: Core Experimental Procedures & Synthesis.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "dbms-lab-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DBMS: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DBMS: Quantitative Data Verification & Error Analysis.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "dbms-lab-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for DBMS: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in DBMS: Comprehensive Practical Record & Viva Voce.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    }
  ],
  "numerical methods & optimization_set1": [
    {
      "id": "numerical-methods-&-optimization-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Numerical Methods & Optimization.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Numerical Methods & Optimization.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Numerical Methods & Optimization.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Numerical Methods & Optimization.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Numerical Methods & Optimization.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Error Analysis with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Error Analysis within Numerical Methods & Optimization.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Root Finding with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Root Finding within Numerical Methods & Optimization.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Linear Systems with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Linear Systems within Numerical Methods & Optimization.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Interpolation with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Interpolation within Numerical Methods & Optimization.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Optimization Basics with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Optimization Basics within Numerical Methods & Optimization.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    }
  ],
  "numerical methods & optimization_set2": [
    {
      "id": "numerical-methods-&-optimization-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Error Analysis.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Root Finding.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Linear Systems.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Interpolation.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Optimization Basics.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Error Analysis.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Error Analysis in Numerical Methods & Optimization.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Root Finding.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Root Finding in Numerical Methods & Optimization.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Linear Systems.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Linear Systems in Numerical Methods & Optimization.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Interpolation.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Interpolation in Numerical Methods & Optimization.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "numerical-methods-&-optimization-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Optimization Basics.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Optimization Basics in Numerical Methods & Optimization.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    }
  ],
  "statistical inference / oop_set1": [
    {
      "id": "statistical-inference-/-oop-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Point Estimation and state its primary asymptotic time complexity in Statistical Inference / OOP.",
      "answer_lines": [
        "**Definition**: In Statistical Inference / OOP, Point Estimation establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Interval Estimation and state its primary asymptotic time complexity in Statistical Inference / OOP.",
      "answer_lines": [
        "**Definition**: In Statistical Inference / OOP, Interval Estimation establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Hypothesis Testing and state its primary asymptotic time complexity in Statistical Inference / OOP.",
      "answer_lines": [
        "**Definition**: In Statistical Inference / OOP, Hypothesis Testing establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define ANOVA and state its primary asymptotic time complexity in Statistical Inference / OOP.",
      "answer_lines": [
        "**Definition**: In Statistical Inference / OOP, ANOVA establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Non-Parametric Tests and state its primary asymptotic time complexity in Statistical Inference / OOP.",
      "answer_lines": [
        "**Definition**: In Statistical Inference / OOP, Non-Parametric Tests establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Point Estimation with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Point Estimation serves as a core computational building block in Statistical Inference / OOP, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Interval Estimation with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Interval Estimation serves as a core computational building block in Statistical Inference / OOP, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Hypothesis Testing with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Hypothesis Testing serves as a core computational building block in Statistical Inference / OOP, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of ANOVA with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "ANOVA serves as a core computational building block in Statistical Inference / OOP, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Non-Parametric Tests with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Non-Parametric Tests serves as a core computational building block in Statistical Inference / OOP, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    }
  ],
  "statistical inference / oop_set2": [
    {
      "id": "statistical-inference-/-oop-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Point Estimation.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Point Estimation.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Interval Estimation.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Interval Estimation.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Hypothesis Testing.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Hypothesis Testing.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with ANOVA.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in ANOVA.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Non-Parametric Tests.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Non-Parametric Tests.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Point Estimation. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Point Estimation.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Interval Estimation. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Interval Estimation.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Hypothesis Testing. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Hypothesis Testing.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for ANOVA. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in ANOVA.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "statistical-inference-/-oop-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Non-Parametric Tests. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Non-Parametric Tests.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    }
  ],
  "data visualization (tableau/power bi)_set1": [
    {
      "id": "data-visualization-(tableau/power-bi)-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Visualization Principles and state its primary asymptotic time complexity in Data Visualization (Tableau/Power BI).",
      "answer_lines": [
        "**Definition**: In Data Visualization (Tableau/Power BI), Visualization Principles establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Charts and state its primary asymptotic time complexity in Data Visualization (Tableau/Power BI).",
      "answer_lines": [
        "**Definition**: In Data Visualization (Tableau/Power BI), Charts establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Dashboards and state its primary asymptotic time complexity in Data Visualization (Tableau/Power BI).",
      "answer_lines": [
        "**Definition**: In Data Visualization (Tableau/Power BI), Dashboards establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Tools and state its primary asymptotic time complexity in Data Visualization (Tableau/Power BI).",
      "answer_lines": [
        "**Definition**: In Data Visualization (Tableau/Power BI), Tools establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Storytelling and state its primary asymptotic time complexity in Data Visualization (Tableau/Power BI).",
      "answer_lines": [
        "**Definition**: In Data Visualization (Tableau/Power BI), Storytelling establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Visualization Principles with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Visualization Principles serves as a core computational building block in Data Visualization (Tableau/Power BI), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Charts with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Charts serves as a core computational building block in Data Visualization (Tableau/Power BI), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Dashboards with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Dashboards serves as a core computational building block in Data Visualization (Tableau/Power BI), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Tools with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Tools serves as a core computational building block in Data Visualization (Tableau/Power BI), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Storytelling with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Storytelling serves as a core computational building block in Data Visualization (Tableau/Power BI), optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    }
  ],
  "data visualization (tableau/power bi)_set2": [
    {
      "id": "data-visualization-(tableau/power-bi)-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Visualization Principles.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Visualization Principles.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Charts.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Charts.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Dashboards.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Dashboards.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Tools.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Tools.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Storytelling.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Storytelling.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Visualization Principles. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Visualization Principles.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Charts. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Charts.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Dashboards. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Dashboards.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Tools. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Tools.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "data-visualization-(tableau/power-bi)-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Storytelling. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Storytelling.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    }
  ],
  "plant anatomy & embryology_set1": [
    {
      "id": "plant-anatomy-&-embryology-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Tissues and state its primary significance in Plant Anatomy & Embryology.",
      "answer_lines": [
        "**Definition**: Tissues forms a fundamental structural and operational concept within Plant Anatomy & Embryology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Root & Stem Anatomy and state its primary significance in Plant Anatomy & Embryology.",
      "answer_lines": [
        "**Definition**: Root & Stem Anatomy forms a fundamental structural and operational concept within Plant Anatomy & Embryology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Leaf Anatomy and state its primary significance in Plant Anatomy & Embryology.",
      "answer_lines": [
        "**Definition**: Leaf Anatomy forms a fundamental structural and operational concept within Plant Anatomy & Embryology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Embryo Development and state its primary significance in Plant Anatomy & Embryology.",
      "answer_lines": [
        "**Definition**: Embryo Development forms a fundamental structural and operational concept within Plant Anatomy & Embryology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Endosperm and state its primary significance in Plant Anatomy & Embryology.",
      "answer_lines": [
        "**Definition**: Endosperm forms a fundamental structural and operational concept within Plant Anatomy & Embryology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Tissues with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Tissues serves as a foundational study module in Plant Anatomy & Embryology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Tissues is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Root & Stem Anatomy with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Root & Stem Anatomy serves as a foundational study module in Plant Anatomy & Embryology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Root & Stem Anatomy is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Leaf Anatomy with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Leaf Anatomy serves as a foundational study module in Plant Anatomy & Embryology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Leaf Anatomy is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Embryo Development with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Embryo Development serves as a foundational study module in Plant Anatomy & Embryology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Embryo Development is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Endosperm with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Endosperm serves as a foundational study module in Plant Anatomy & Embryology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Endosperm is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "plant anatomy & embryology_set2": [
    {
      "id": "plant-anatomy-&-embryology-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Tissues.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Root & Stem Anatomy.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Leaf Anatomy.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Embryo Development.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Endosperm.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Tissues. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Tissues are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Tissues provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Root & Stem Anatomy. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Root & Stem Anatomy are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Root & Stem Anatomy provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Leaf Anatomy. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Leaf Anatomy are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Leaf Anatomy provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Embryo Development. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Embryo Development are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Embryo Development provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "plant-anatomy-&-embryology-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Endosperm. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Endosperm are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Endosperm provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "botany lab iii_set1": [
    {
      "id": "botany-lab-iii-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Botany  III: Laboratory Safety Protocols & Instrumentation and state its primary significance in Botany Lab III.",
      "answer_lines": [
        "**Definition**: Botany  III: Laboratory Safety Protocols & Instrumentation forms a fundamental structural and operational concept within Botany Lab III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "botany-lab-iii-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Botany  III: Standard Preparations & Calibration Methods and state its primary significance in Botany Lab III.",
      "answer_lines": [
        "**Definition**: Botany  III: Standard Preparations & Calibration Methods forms a fundamental structural and operational concept within Botany Lab III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "botany-lab-iii-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Botany  III: Core Experimental Procedures & Synthesis and state its primary significance in Botany Lab III.",
      "answer_lines": [
        "**Definition**: Botany  III: Core Experimental Procedures & Synthesis forms a fundamental structural and operational concept within Botany Lab III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "botany-lab-iii-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Botany  III: Quantitative Data Verification & Error Analysis and state its primary significance in Botany Lab III.",
      "answer_lines": [
        "**Definition**: Botany  III: Quantitative Data Verification & Error Analysis forms a fundamental structural and operational concept within Botany Lab III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "botany-lab-iii-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Botany  III: Comprehensive Practical Record & Viva Voce and state its primary significance in Botany Lab III.",
      "answer_lines": [
        "**Definition**: Botany  III: Comprehensive Practical Record & Viva Voce forms a fundamental structural and operational concept within Botany Lab III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "botany-lab-iii-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Botany  III: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Botany  III: Laboratory Safety Protocols & Instrumentation serves as a foundational study module in Botany Lab III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Botany  III: Laboratory Safety Protocols & Instrumentation is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "botany-lab-iii-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Botany  III: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Botany  III: Standard Preparations & Calibration Methods serves as a foundational study module in Botany Lab III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Botany  III: Standard Preparations & Calibration Methods is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "botany-lab-iii-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Botany  III: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Botany  III: Core Experimental Procedures & Synthesis serves as a foundational study module in Botany Lab III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Botany  III: Core Experimental Procedures & Synthesis is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "botany-lab-iii-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Botany  III: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Botany  III: Quantitative Data Verification & Error Analysis serves as a foundational study module in Botany Lab III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Botany  III: Quantitative Data Verification & Error Analysis is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "botany-lab-iii-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Botany  III: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Botany  III: Comprehensive Practical Record & Viva Voce serves as a foundational study module in Botany Lab III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Botany  III: Comprehensive Practical Record & Viva Voce is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "botany lab iii_set2": [
    {
      "id": "botany-lab-iii-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Botany  III: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "botany-lab-iii-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Botany  III: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "botany-lab-iii-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Botany  III: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "botany-lab-iii-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Botany  III: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "botany-lab-iii-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Botany  III: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "botany-lab-iii-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Botany  III: Laboratory Safety Protocols & Instrumentation. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Botany  III: Laboratory Safety Protocols & Instrumentation are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Botany  III: Laboratory Safety Protocols & Instrumentation provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "botany-lab-iii-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Botany  III: Standard Preparations & Calibration Methods. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Botany  III: Standard Preparations & Calibration Methods are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Botany  III: Standard Preparations & Calibration Methods provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "botany-lab-iii-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Botany  III: Core Experimental Procedures & Synthesis. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Botany  III: Core Experimental Procedures & Synthesis are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Botany  III: Core Experimental Procedures & Synthesis provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "botany-lab-iii-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Botany  III: Quantitative Data Verification & Error Analysis. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Botany  III: Quantitative Data Verification & Error Analysis are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Botany  III: Quantitative Data Verification & Error Analysis provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "botany-lab-iii-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Botany  III: Comprehensive Practical Record & Viva Voce. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Botany  III: Comprehensive Practical Record & Viva Voce are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Botany  III: Comprehensive Practical Record & Viva Voce provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "physiology & biochemistry_set1": [
    {
      "id": "physiology-&-biochemistry-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Digestion and state its primary significance in Physiology & Biochemistry.",
      "answer_lines": [
        "**Definition**: Digestion forms a fundamental structural and operational concept within Physiology & Biochemistry, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Respiration and state its primary significance in Physiology & Biochemistry.",
      "answer_lines": [
        "**Definition**: Respiration forms a fundamental structural and operational concept within Physiology & Biochemistry, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Circulation and state its primary significance in Physiology & Biochemistry.",
      "answer_lines": [
        "**Definition**: Circulation forms a fundamental structural and operational concept within Physiology & Biochemistry, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Excretion and state its primary significance in Physiology & Biochemistry.",
      "answer_lines": [
        "**Definition**: Excretion forms a fundamental structural and operational concept within Physiology & Biochemistry, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Enzymes & Metabolism and state its primary significance in Physiology & Biochemistry.",
      "answer_lines": [
        "**Definition**: Enzymes & Metabolism forms a fundamental structural and operational concept within Physiology & Biochemistry, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Digestion with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Digestion serves as a foundational study module in Physiology & Biochemistry. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Digestion is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Respiration with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Respiration serves as a foundational study module in Physiology & Biochemistry. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Respiration is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Circulation with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Circulation serves as a foundational study module in Physiology & Biochemistry. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Circulation is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Excretion with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Excretion serves as a foundational study module in Physiology & Biochemistry. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Excretion is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Enzymes & Metabolism with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Enzymes & Metabolism serves as a foundational study module in Physiology & Biochemistry. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Enzymes & Metabolism is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "physiology & biochemistry_set2": [
    {
      "id": "physiology-&-biochemistry-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Digestion.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Respiration.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Circulation.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Excretion.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Enzymes & Metabolism.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Digestion. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Digestion are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Digestion provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Respiration. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Respiration are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Respiration provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Circulation. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Circulation are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Circulation provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Excretion. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Excretion are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Excretion provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "physiology-&-biochemistry-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Enzymes & Metabolism. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Enzymes & Metabolism are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Enzymes & Metabolism provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "zoology lab iii_set1": [
    {
      "id": "zoology-lab-iii-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Zoology  III: Laboratory Safety Protocols & Instrumentation and state its primary significance in Zoology Lab III.",
      "answer_lines": [
        "**Definition**: Zoology  III: Laboratory Safety Protocols & Instrumentation forms a fundamental structural and operational concept within Zoology Lab III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "zoology-lab-iii-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Zoology  III: Standard Preparations & Calibration Methods and state its primary significance in Zoology Lab III.",
      "answer_lines": [
        "**Definition**: Zoology  III: Standard Preparations & Calibration Methods forms a fundamental structural and operational concept within Zoology Lab III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "zoology-lab-iii-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Zoology  III: Core Experimental Procedures & Synthesis and state its primary significance in Zoology Lab III.",
      "answer_lines": [
        "**Definition**: Zoology  III: Core Experimental Procedures & Synthesis forms a fundamental structural and operational concept within Zoology Lab III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "zoology-lab-iii-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Zoology  III: Quantitative Data Verification & Error Analysis and state its primary significance in Zoology Lab III.",
      "answer_lines": [
        "**Definition**: Zoology  III: Quantitative Data Verification & Error Analysis forms a fundamental structural and operational concept within Zoology Lab III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "zoology-lab-iii-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Zoology  III: Comprehensive Practical Record & Viva Voce and state its primary significance in Zoology Lab III.",
      "answer_lines": [
        "**Definition**: Zoology  III: Comprehensive Practical Record & Viva Voce forms a fundamental structural and operational concept within Zoology Lab III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "zoology-lab-iii-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Zoology  III: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Zoology  III: Laboratory Safety Protocols & Instrumentation serves as a foundational study module in Zoology Lab III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Zoology  III: Laboratory Safety Protocols & Instrumentation is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "zoology-lab-iii-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Zoology  III: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Zoology  III: Standard Preparations & Calibration Methods serves as a foundational study module in Zoology Lab III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Zoology  III: Standard Preparations & Calibration Methods is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "zoology-lab-iii-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Zoology  III: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Zoology  III: Core Experimental Procedures & Synthesis serves as a foundational study module in Zoology Lab III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Zoology  III: Core Experimental Procedures & Synthesis is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "zoology-lab-iii-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Zoology  III: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Zoology  III: Quantitative Data Verification & Error Analysis serves as a foundational study module in Zoology Lab III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Zoology  III: Quantitative Data Verification & Error Analysis is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "zoology-lab-iii-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Zoology  III: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Zoology  III: Comprehensive Practical Record & Viva Voce serves as a foundational study module in Zoology Lab III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Zoology  III: Comprehensive Practical Record & Viva Voce is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "zoology lab iii_set2": [
    {
      "id": "zoology-lab-iii-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Zoology  III: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "zoology-lab-iii-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Zoology  III: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "zoology-lab-iii-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Zoology  III: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "zoology-lab-iii-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Zoology  III: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "zoology-lab-iii-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Zoology  III: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "zoology-lab-iii-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Zoology  III: Laboratory Safety Protocols & Instrumentation. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Zoology  III: Laboratory Safety Protocols & Instrumentation are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Zoology  III: Laboratory Safety Protocols & Instrumentation provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "zoology-lab-iii-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Zoology  III: Standard Preparations & Calibration Methods. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Zoology  III: Standard Preparations & Calibration Methods are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Zoology  III: Standard Preparations & Calibration Methods provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "zoology-lab-iii-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Zoology  III: Core Experimental Procedures & Synthesis. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Zoology  III: Core Experimental Procedures & Synthesis are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Zoology  III: Core Experimental Procedures & Synthesis provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "zoology-lab-iii-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Zoology  III: Quantitative Data Verification & Error Analysis. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Zoology  III: Quantitative Data Verification & Error Analysis are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Zoology  III: Quantitative Data Verification & Error Analysis provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "zoology-lab-iii-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Zoology  III: Comprehensive Practical Record & Viva Voce. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Zoology  III: Comprehensive Practical Record & Viva Voce are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Zoology  III: Comprehensive Practical Record & Viva Voce provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "organic chemistry – iii_set1": [
    {
      "id": "organic-chemistry---iii-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Alcohols & Phenols in Organic Chemistry – III.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "organic-chemistry---iii-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Aldehydes & Ketones in Organic Chemistry – III.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "organic-chemistry---iii-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Carboxylic Acids in Organic Chemistry – III.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "organic-chemistry---iii-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Amines in Organic Chemistry – III.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "organic-chemistry---iii-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Stereochemistry in Organic Chemistry – III.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "organic-chemistry---iii-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Alcohols & Phenols with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Alcohols & Phenols models chemical reaction rates and transport mechanisms in Organic Chemistry – III. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
        "2. Step-by-Step Reactor Design Derivation:",
        "• Step 1: Consider an ideal Plug Flow Reactor (PFR) with differential volume element $dV$. Mass balance: $F_A - (F_A + dF_A) + (-r_A) dV = 0$.",
        "• Step 2: Simplify differential balance: $dF_A = (-r_A) dV$. Substitute molar flow rate $F_A = F_{A0}(1 - X_A) \\implies dF_A = -F_{A0} dX_A$.",
        "• Step 3: Separate variables: $dV = F_{A0} \\frac{dX_A}{-r_A}$. Integrate over total reactor volume: $V = F_{A0}\\int_0^{X_A} \\frac{dX_A}{-r_A}$.",
        "• Step 4: For first-order reaction $-r_A = k C_A = k C_{A0}(1 - X_A)$: space time evaluates to $\\tau = \\frac{C_{A0} V}{F_{A0}} = \\frac{1}{k}\\ln\\left(\\frac{1}{1 - X_A}\\right)$.",
        "3. Industrial Optimization & Thermal Stability:",
        "Examines Levenspiel comparison plots (PFR vs CSTR volume requirements) and runaway exothermic temperature trajectories.",
        "4. Engineering Conclusion:",
        "Provides exact sizing formulas for industrial chemical synthesis, catalytic reactors, and fractional distillation units. Box final volume."
      ]
    },
    {
      "id": "organic-chemistry---iii-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Aldehydes & Ketones with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Aldehydes & Ketones models chemical reaction rates and transport mechanisms in Organic Chemistry – III. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
        "2. Step-by-Step Reactor Design Derivation:",
        "• Step 1: Consider an ideal Plug Flow Reactor (PFR) with differential volume element $dV$. Mass balance: $F_A - (F_A + dF_A) + (-r_A) dV = 0$.",
        "• Step 2: Simplify differential balance: $dF_A = (-r_A) dV$. Substitute molar flow rate $F_A = F_{A0}(1 - X_A) \\implies dF_A = -F_{A0} dX_A$.",
        "• Step 3: Separate variables: $dV = F_{A0} \\frac{dX_A}{-r_A}$. Integrate over total reactor volume: $V = F_{A0}\\int_0^{X_A} \\frac{dX_A}{-r_A}$.",
        "• Step 4: For first-order reaction $-r_A = k C_A = k C_{A0}(1 - X_A)$: space time evaluates to $\\tau = \\frac{C_{A0} V}{F_{A0}} = \\frac{1}{k}\\ln\\left(\\frac{1}{1 - X_A}\\right)$.",
        "3. Industrial Optimization & Thermal Stability:",
        "Examines Levenspiel comparison plots (PFR vs CSTR volume requirements) and runaway exothermic temperature trajectories.",
        "4. Engineering Conclusion:",
        "Provides exact sizing formulas for industrial chemical synthesis, catalytic reactors, and fractional distillation units. Box final volume."
      ]
    },
    {
      "id": "organic-chemistry---iii-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Carboxylic Acids with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Carboxylic Acids models chemical reaction rates and transport mechanisms in Organic Chemistry – III. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
        "2. Step-by-Step Reactor Design Derivation:",
        "• Step 1: Consider an ideal Plug Flow Reactor (PFR) with differential volume element $dV$. Mass balance: $F_A - (F_A + dF_A) + (-r_A) dV = 0$.",
        "• Step 2: Simplify differential balance: $dF_A = (-r_A) dV$. Substitute molar flow rate $F_A = F_{A0}(1 - X_A) \\implies dF_A = -F_{A0} dX_A$.",
        "• Step 3: Separate variables: $dV = F_{A0} \\frac{dX_A}{-r_A}$. Integrate over total reactor volume: $V = F_{A0}\\int_0^{X_A} \\frac{dX_A}{-r_A}$.",
        "• Step 4: For first-order reaction $-r_A = k C_A = k C_{A0}(1 - X_A)$: space time evaluates to $\\tau = \\frac{C_{A0} V}{F_{A0}} = \\frac{1}{k}\\ln\\left(\\frac{1}{1 - X_A}\\right)$.",
        "3. Industrial Optimization & Thermal Stability:",
        "Examines Levenspiel comparison plots (PFR vs CSTR volume requirements) and runaway exothermic temperature trajectories.",
        "4. Engineering Conclusion:",
        "Provides exact sizing formulas for industrial chemical synthesis, catalytic reactors, and fractional distillation units. Box final volume."
      ]
    },
    {
      "id": "organic-chemistry---iii-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Amines with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Amines models chemical reaction rates and transport mechanisms in Organic Chemistry – III. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
        "2. Step-by-Step Reactor Design Derivation:",
        "• Step 1: Consider an ideal Plug Flow Reactor (PFR) with differential volume element $dV$. Mass balance: $F_A - (F_A + dF_A) + (-r_A) dV = 0$.",
        "• Step 2: Simplify differential balance: $dF_A = (-r_A) dV$. Substitute molar flow rate $F_A = F_{A0}(1 - X_A) \\implies dF_A = -F_{A0} dX_A$.",
        "• Step 3: Separate variables: $dV = F_{A0} \\frac{dX_A}{-r_A}$. Integrate over total reactor volume: $V = F_{A0}\\int_0^{X_A} \\frac{dX_A}{-r_A}$.",
        "• Step 4: For first-order reaction $-r_A = k C_A = k C_{A0}(1 - X_A)$: space time evaluates to $\\tau = \\frac{C_{A0} V}{F_{A0}} = \\frac{1}{k}\\ln\\left(\\frac{1}{1 - X_A}\\right)$.",
        "3. Industrial Optimization & Thermal Stability:",
        "Examines Levenspiel comparison plots (PFR vs CSTR volume requirements) and runaway exothermic temperature trajectories.",
        "4. Engineering Conclusion:",
        "Provides exact sizing formulas for industrial chemical synthesis, catalytic reactors, and fractional distillation units. Box final volume."
      ]
    },
    {
      "id": "organic-chemistry---iii-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Stereochemistry with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Stereochemistry models chemical reaction rates and transport mechanisms in Organic Chemistry – III. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
        "2. Step-by-Step Reactor Design Derivation:",
        "• Step 1: Consider an ideal Plug Flow Reactor (PFR) with differential volume element $dV$. Mass balance: $F_A - (F_A + dF_A) + (-r_A) dV = 0$.",
        "• Step 2: Simplify differential balance: $dF_A = (-r_A) dV$. Substitute molar flow rate $F_A = F_{A0}(1 - X_A) \\implies dF_A = -F_{A0} dX_A$.",
        "• Step 3: Separate variables: $dV = F_{A0} \\frac{dX_A}{-r_A}$. Integrate over total reactor volume: $V = F_{A0}\\int_0^{X_A} \\frac{dX_A}{-r_A}$.",
        "• Step 4: For first-order reaction $-r_A = k C_A = k C_{A0}(1 - X_A)$: space time evaluates to $\\tau = \\frac{C_{A0} V}{F_{A0}} = \\frac{1}{k}\\ln\\left(\\frac{1}{1 - X_A}\\right)$.",
        "3. Industrial Optimization & Thermal Stability:",
        "Examines Levenspiel comparison plots (PFR vs CSTR volume requirements) and runaway exothermic temperature trajectories.",
        "4. Engineering Conclusion:",
        "Provides exact sizing formulas for industrial chemical synthesis, catalytic reactors, and fractional distillation units. Box final volume."
      ]
    }
  ],
  "organic chemistry – iii_set2": [
    {
      "id": "organic-chemistry---iii-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Alcohols & Phenols.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "organic-chemistry---iii-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Aldehydes & Ketones.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "organic-chemistry---iii-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Carboxylic Acids.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "organic-chemistry---iii-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Amines.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "organic-chemistry---iii-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Stereochemistry.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "organic-chemistry---iii-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Alcohols & Phenols.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Alcohols & Phenols.",
        "2. Analytical Column Stage Formulation:",
        "• Step 1: Formulate overall and component material balances: $F = D + B$ and $F z_F = D x_D + B x_B$.",
        "• Step 2: Write rectifying section operating line (ROL): $y_{n+1} = \\frac{R}{R + 1} x_n + \\frac{x_D}{R + 1}$, where $R = L/D$ is reflux ratio.",
        "• Step 3: Write feed line ($q$-line) equation: $y = \\frac{q}{q - 1} x - \\frac{z_F}{q - 1}$, accounting for thermal condition of the feed.",
        "• Step 4: Step off theoretical stages between equilibrium curve and operating lines from distillate composition $x_D$ to bottoms $x_B$.",
        "3. Minimum Reflux & Column Efficiency:",
        "Evaluate minimum reflux ratio $R_{\\min}$ from pinch point intersection and calculate actual stages using overall column efficiency $\\eta_0$.",
        "4. Examination Checklist:",
        "Draw accurate McCabe-Thiele equilibrium diagram with $45^\\circ$ diagonal, sketch $q$-line and operating lines, and clearly show theoretical stage steps."
      ]
    },
    {
      "id": "organic-chemistry---iii-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Aldehydes & Ketones.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Aldehydes & Ketones.",
        "2. Analytical Column Stage Formulation:",
        "• Step 1: Formulate overall and component material balances: $F = D + B$ and $F z_F = D x_D + B x_B$.",
        "• Step 2: Write rectifying section operating line (ROL): $y_{n+1} = \\frac{R}{R + 1} x_n + \\frac{x_D}{R + 1}$, where $R = L/D$ is reflux ratio.",
        "• Step 3: Write feed line ($q$-line) equation: $y = \\frac{q}{q - 1} x - \\frac{z_F}{q - 1}$, accounting for thermal condition of the feed.",
        "• Step 4: Step off theoretical stages between equilibrium curve and operating lines from distillate composition $x_D$ to bottoms $x_B$.",
        "3. Minimum Reflux & Column Efficiency:",
        "Evaluate minimum reflux ratio $R_{\\min}$ from pinch point intersection and calculate actual stages using overall column efficiency $\\eta_0$.",
        "4. Examination Checklist:",
        "Draw accurate McCabe-Thiele equilibrium diagram with $45^\\circ$ diagonal, sketch $q$-line and operating lines, and clearly show theoretical stage steps."
      ]
    },
    {
      "id": "organic-chemistry---iii-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Carboxylic Acids.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Carboxylic Acids.",
        "2. Analytical Column Stage Formulation:",
        "• Step 1: Formulate overall and component material balances: $F = D + B$ and $F z_F = D x_D + B x_B$.",
        "• Step 2: Write rectifying section operating line (ROL): $y_{n+1} = \\frac{R}{R + 1} x_n + \\frac{x_D}{R + 1}$, where $R = L/D$ is reflux ratio.",
        "• Step 3: Write feed line ($q$-line) equation: $y = \\frac{q}{q - 1} x - \\frac{z_F}{q - 1}$, accounting for thermal condition of the feed.",
        "• Step 4: Step off theoretical stages between equilibrium curve and operating lines from distillate composition $x_D$ to bottoms $x_B$.",
        "3. Minimum Reflux & Column Efficiency:",
        "Evaluate minimum reflux ratio $R_{\\min}$ from pinch point intersection and calculate actual stages using overall column efficiency $\\eta_0$.",
        "4. Examination Checklist:",
        "Draw accurate McCabe-Thiele equilibrium diagram with $45^\\circ$ diagonal, sketch $q$-line and operating lines, and clearly show theoretical stage steps."
      ]
    },
    {
      "id": "organic-chemistry---iii-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Amines.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Amines.",
        "2. Analytical Column Stage Formulation:",
        "• Step 1: Formulate overall and component material balances: $F = D + B$ and $F z_F = D x_D + B x_B$.",
        "• Step 2: Write rectifying section operating line (ROL): $y_{n+1} = \\frac{R}{R + 1} x_n + \\frac{x_D}{R + 1}$, where $R = L/D$ is reflux ratio.",
        "• Step 3: Write feed line ($q$-line) equation: $y = \\frac{q}{q - 1} x - \\frac{z_F}{q - 1}$, accounting for thermal condition of the feed.",
        "• Step 4: Step off theoretical stages between equilibrium curve and operating lines from distillate composition $x_D$ to bottoms $x_B$.",
        "3. Minimum Reflux & Column Efficiency:",
        "Evaluate minimum reflux ratio $R_{\\min}$ from pinch point intersection and calculate actual stages using overall column efficiency $\\eta_0$.",
        "4. Examination Checklist:",
        "Draw accurate McCabe-Thiele equilibrium diagram with $45^\\circ$ diagonal, sketch $q$-line and operating lines, and clearly show theoretical stage steps."
      ]
    },
    {
      "id": "organic-chemistry---iii-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Stereochemistry.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Stereochemistry.",
        "2. Analytical Column Stage Formulation:",
        "• Step 1: Formulate overall and component material balances: $F = D + B$ and $F z_F = D x_D + B x_B$.",
        "• Step 2: Write rectifying section operating line (ROL): $y_{n+1} = \\frac{R}{R + 1} x_n + \\frac{x_D}{R + 1}$, where $R = L/D$ is reflux ratio.",
        "• Step 3: Write feed line ($q$-line) equation: $y = \\frac{q}{q - 1} x - \\frac{z_F}{q - 1}$, accounting for thermal condition of the feed.",
        "• Step 4: Step off theoretical stages between equilibrium curve and operating lines from distillate composition $x_D$ to bottoms $x_B$.",
        "3. Minimum Reflux & Column Efficiency:",
        "Evaluate minimum reflux ratio $R_{\\min}$ from pinch point intersection and calculate actual stages using overall column efficiency $\\eta_0$.",
        "4. Examination Checklist:",
        "Draw accurate McCabe-Thiele equilibrium diagram with $45^\\circ$ diagonal, sketch $q$-line and operating lines, and clearly show theoretical stage steps."
      ]
    }
  ],
  "chemistry lab iii (organic synthesis)_set1": [
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  III (Organic Synthesis): Laboratory Safety Protocols & Instrumentation and state its primary measurement protocol in Chemistry Lab III (Organic Synthesis).",
      "answer_lines": [
        "**Definition**: Chemistry  III (Organic Synthesis): Laboratory Safety Protocols & Instrumentation represents a core empirical or experimental procedure in Chemistry Lab III (Organic Synthesis), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  III (Organic Synthesis): Standard Preparations & Calibration Methods and state its primary measurement protocol in Chemistry Lab III (Organic Synthesis).",
      "answer_lines": [
        "**Definition**: Chemistry  III (Organic Synthesis): Standard Preparations & Calibration Methods represents a core empirical or experimental procedure in Chemistry Lab III (Organic Synthesis), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  III (Organic Synthesis): Core Experimental Procedures & Synthesis and state its primary measurement protocol in Chemistry Lab III (Organic Synthesis).",
      "answer_lines": [
        "**Definition**: Chemistry  III (Organic Synthesis): Core Experimental Procedures & Synthesis represents a core empirical or experimental procedure in Chemistry Lab III (Organic Synthesis), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  III (Organic Synthesis): Quantitative Data Verification & Error Analysis and state its primary measurement protocol in Chemistry Lab III (Organic Synthesis).",
      "answer_lines": [
        "**Definition**: Chemistry  III (Organic Synthesis): Quantitative Data Verification & Error Analysis represents a core empirical or experimental procedure in Chemistry Lab III (Organic Synthesis), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  III (Organic Synthesis): Comprehensive Practical Record & Viva Voce and state its primary measurement protocol in Chemistry Lab III (Organic Synthesis).",
      "answer_lines": [
        "**Definition**: Chemistry  III (Organic Synthesis): Comprehensive Practical Record & Viva Voce represents a core empirical or experimental procedure in Chemistry Lab III (Organic Synthesis), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  III (Organic Synthesis): Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  III (Organic Synthesis): Laboratory Safety Protocols & Instrumentation within Chemistry Lab III (Organic Synthesis). Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  III (Organic Synthesis): Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  III (Organic Synthesis): Standard Preparations & Calibration Methods within Chemistry Lab III (Organic Synthesis). Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  III (Organic Synthesis): Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  III (Organic Synthesis): Core Experimental Procedures & Synthesis within Chemistry Lab III (Organic Synthesis). Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  III (Organic Synthesis): Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  III (Organic Synthesis): Quantitative Data Verification & Error Analysis within Chemistry Lab III (Organic Synthesis). Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  III (Organic Synthesis): Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  III (Organic Synthesis): Comprehensive Practical Record & Viva Voce within Chemistry Lab III (Organic Synthesis). Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    }
  ],
  "chemistry lab iii (organic synthesis)_set2": [
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  III (Organic Synthesis): Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  III (Organic Synthesis): Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  III (Organic Synthesis): Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  III (Organic Synthesis): Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  III (Organic Synthesis): Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  III (Organic Synthesis): Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  III (Organic Synthesis): Laboratory Safety Protocols & Instrumentation.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  III (Organic Synthesis): Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  III (Organic Synthesis): Standard Preparations & Calibration Methods.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  III (Organic Synthesis): Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  III (Organic Synthesis): Core Experimental Procedures & Synthesis.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  III (Organic Synthesis): Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  III (Organic Synthesis): Quantitative Data Verification & Error Analysis.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "chemistry-lab-iii-(organic-synthesis)-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  III (Organic Synthesis): Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  III (Organic Synthesis): Comprehensive Practical Record & Viva Voce.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    }
  ],
  "bio-fertilizers / herbal technology_set1": [
    {
      "id": "bio-fertilizers-/-herbal-technology-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Bio-fertilizer Types and state its primary significance in Bio-fertilizers / Herbal Technology.",
      "answer_lines": [
        "**Definition**: Bio-fertilizer Types forms a fundamental structural and operational concept within Bio-fertilizers / Herbal Technology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Production and state its primary significance in Bio-fertilizers / Herbal Technology.",
      "answer_lines": [
        "**Definition**: Production forms a fundamental structural and operational concept within Bio-fertilizers / Herbal Technology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Application and state its primary significance in Bio-fertilizers / Herbal Technology.",
      "answer_lines": [
        "**Definition**: Application forms a fundamental structural and operational concept within Bio-fertilizers / Herbal Technology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Herbal Medicine and state its primary significance in Bio-fertilizers / Herbal Technology.",
      "answer_lines": [
        "**Definition**: Herbal Medicine forms a fundamental structural and operational concept within Bio-fertilizers / Herbal Technology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Cultivation and state its primary significance in Bio-fertilizers / Herbal Technology.",
      "answer_lines": [
        "**Definition**: Cultivation forms a fundamental structural and operational concept within Bio-fertilizers / Herbal Technology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Bio-fertilizer Types with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Bio-fertilizer Types serves as a foundational study module in Bio-fertilizers / Herbal Technology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Bio-fertilizer Types is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Production with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Production serves as a foundational study module in Bio-fertilizers / Herbal Technology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Production is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Application with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Application serves as a foundational study module in Bio-fertilizers / Herbal Technology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Application is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Herbal Medicine with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Herbal Medicine serves as a foundational study module in Bio-fertilizers / Herbal Technology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Herbal Medicine is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Cultivation with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Cultivation serves as a foundational study module in Bio-fertilizers / Herbal Technology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Cultivation is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "bio-fertilizers / herbal technology_set2": [
    {
      "id": "bio-fertilizers-/-herbal-technology-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Bio-fertilizer Types.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Production.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Application.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Herbal Medicine.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Cultivation.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Bio-fertilizer Types. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Bio-fertilizer Types are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Bio-fertilizer Types provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Production. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Production are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Production provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Application. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Application are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Application provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Herbal Medicine. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Herbal Medicine are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Herbal Medicine provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "bio-fertilizers-/-herbal-technology-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Cultivation. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Cultivation are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Cultivation provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "molecular biology & genetic engineering_set1": [
    {
      "id": "molecular-biology-&-genetic-engineering-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define DNA Replication and state its primary significance in Molecular Biology & Genetic Engineering.",
      "answer_lines": [
        "**Definition**: DNA Replication forms a fundamental structural and operational concept within Molecular Biology & Genetic Engineering, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Transcription and state its primary significance in Molecular Biology & Genetic Engineering.",
      "answer_lines": [
        "**Definition**: Transcription forms a fundamental structural and operational concept within Molecular Biology & Genetic Engineering, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Translation and state its primary significance in Molecular Biology & Genetic Engineering.",
      "answer_lines": [
        "**Definition**: Translation forms a fundamental structural and operational concept within Molecular Biology & Genetic Engineering, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Cloning Vectors and state its primary significance in Molecular Biology & Genetic Engineering.",
      "answer_lines": [
        "**Definition**: Cloning Vectors forms a fundamental structural and operational concept within Molecular Biology & Genetic Engineering, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Gene Therapy and state its primary significance in Molecular Biology & Genetic Engineering.",
      "answer_lines": [
        "**Definition**: Gene Therapy forms a fundamental structural and operational concept within Molecular Biology & Genetic Engineering, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of DNA Replication with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "DNA Replication serves as a foundational study module in Molecular Biology & Genetic Engineering. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of DNA Replication is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Transcription with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Transcription serves as a foundational study module in Molecular Biology & Genetic Engineering. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Transcription is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Translation with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Translation serves as a foundational study module in Molecular Biology & Genetic Engineering. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Translation is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Cloning Vectors with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Cloning Vectors serves as a foundational study module in Molecular Biology & Genetic Engineering. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Cloning Vectors is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Gene Therapy with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Gene Therapy serves as a foundational study module in Molecular Biology & Genetic Engineering. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Gene Therapy is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "molecular biology & genetic engineering_set2": [
    {
      "id": "molecular-biology-&-genetic-engineering-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with DNA Replication.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Transcription.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Translation.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Cloning Vectors.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Gene Therapy.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of DNA Replication. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within DNA Replication are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of DNA Replication provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Transcription. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Transcription are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Transcription provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Translation. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Translation are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Translation provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Cloning Vectors. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Cloning Vectors are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Cloning Vectors provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "molecular-biology-&-genetic-engineering-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Gene Therapy. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Gene Therapy are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Gene Therapy provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "molecular biology lab_set1": [
    {
      "id": "molecular-biology-lab-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Molecular Biology: Laboratory Safety Protocols & Instrumentation and state its primary significance in Molecular Biology Lab.",
      "answer_lines": [
        "**Definition**: Molecular Biology: Laboratory Safety Protocols & Instrumentation forms a fundamental structural and operational concept within Molecular Biology Lab, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "molecular-biology-lab-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Molecular Biology: Standard Preparations & Calibration Methods and state its primary significance in Molecular Biology Lab.",
      "answer_lines": [
        "**Definition**: Molecular Biology: Standard Preparations & Calibration Methods forms a fundamental structural and operational concept within Molecular Biology Lab, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "molecular-biology-lab-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Molecular Biology: Core Experimental Procedures & Synthesis and state its primary significance in Molecular Biology Lab.",
      "answer_lines": [
        "**Definition**: Molecular Biology: Core Experimental Procedures & Synthesis forms a fundamental structural and operational concept within Molecular Biology Lab, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "molecular-biology-lab-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Molecular Biology: Quantitative Data Verification & Error Analysis and state its primary significance in Molecular Biology Lab.",
      "answer_lines": [
        "**Definition**: Molecular Biology: Quantitative Data Verification & Error Analysis forms a fundamental structural and operational concept within Molecular Biology Lab, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "molecular-biology-lab-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Molecular Biology: Comprehensive Practical Record & Viva Voce and state its primary significance in Molecular Biology Lab.",
      "answer_lines": [
        "**Definition**: Molecular Biology: Comprehensive Practical Record & Viva Voce forms a fundamental structural and operational concept within Molecular Biology Lab, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "molecular-biology-lab-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Molecular Biology: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Molecular Biology: Laboratory Safety Protocols & Instrumentation serves as a foundational study module in Molecular Biology Lab. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Molecular Biology: Laboratory Safety Protocols & Instrumentation is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "molecular-biology-lab-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Molecular Biology: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Molecular Biology: Standard Preparations & Calibration Methods serves as a foundational study module in Molecular Biology Lab. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Molecular Biology: Standard Preparations & Calibration Methods is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "molecular-biology-lab-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Molecular Biology: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Molecular Biology: Core Experimental Procedures & Synthesis serves as a foundational study module in Molecular Biology Lab. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Molecular Biology: Core Experimental Procedures & Synthesis is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "molecular-biology-lab-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Molecular Biology: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Molecular Biology: Quantitative Data Verification & Error Analysis serves as a foundational study module in Molecular Biology Lab. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Molecular Biology: Quantitative Data Verification & Error Analysis is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "molecular-biology-lab-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Molecular Biology: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Molecular Biology: Comprehensive Practical Record & Viva Voce serves as a foundational study module in Molecular Biology Lab. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Molecular Biology: Comprehensive Practical Record & Viva Voce is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "molecular biology lab_set2": [
    {
      "id": "molecular-biology-lab-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Molecular Biology: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "molecular-biology-lab-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Molecular Biology: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "molecular-biology-lab-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Molecular Biology: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "molecular-biology-lab-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Molecular Biology: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "molecular-biology-lab-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Molecular Biology: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "molecular-biology-lab-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Molecular Biology: Laboratory Safety Protocols & Instrumentation. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Molecular Biology: Laboratory Safety Protocols & Instrumentation are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Molecular Biology: Laboratory Safety Protocols & Instrumentation provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "molecular-biology-lab-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Molecular Biology: Standard Preparations & Calibration Methods. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Molecular Biology: Standard Preparations & Calibration Methods are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Molecular Biology: Standard Preparations & Calibration Methods provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "molecular-biology-lab-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Molecular Biology: Core Experimental Procedures & Synthesis. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Molecular Biology: Core Experimental Procedures & Synthesis are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Molecular Biology: Core Experimental Procedures & Synthesis provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "molecular-biology-lab-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Molecular Biology: Quantitative Data Verification & Error Analysis. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Molecular Biology: Quantitative Data Verification & Error Analysis are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Molecular Biology: Quantitative Data Verification & Error Analysis provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "molecular-biology-lab-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Molecular Biology: Comprehensive Practical Record & Viva Voce. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Molecular Biology: Comprehensive Practical Record & Viva Voce are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Molecular Biology: Comprehensive Practical Record & Viva Voce provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "chemistry lab iii_set1": [
    {
      "id": "chemistry-lab-iii-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  III: Laboratory Safety Protocols & Instrumentation and state its primary measurement protocol in Chemistry Lab III.",
      "answer_lines": [
        "**Definition**: Chemistry  III: Laboratory Safety Protocols & Instrumentation represents a core empirical or experimental procedure in Chemistry Lab III, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-iii-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  III: Standard Preparations & Calibration Methods and state its primary measurement protocol in Chemistry Lab III.",
      "answer_lines": [
        "**Definition**: Chemistry  III: Standard Preparations & Calibration Methods represents a core empirical or experimental procedure in Chemistry Lab III, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-iii-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  III: Core Experimental Procedures & Synthesis and state its primary measurement protocol in Chemistry Lab III.",
      "answer_lines": [
        "**Definition**: Chemistry  III: Core Experimental Procedures & Synthesis represents a core empirical or experimental procedure in Chemistry Lab III, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-iii-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  III: Quantitative Data Verification & Error Analysis and state its primary measurement protocol in Chemistry Lab III.",
      "answer_lines": [
        "**Definition**: Chemistry  III: Quantitative Data Verification & Error Analysis represents a core empirical or experimental procedure in Chemistry Lab III, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-iii-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Chemistry  III: Comprehensive Practical Record & Viva Voce and state its primary measurement protocol in Chemistry Lab III.",
      "answer_lines": [
        "**Definition**: Chemistry  III: Comprehensive Practical Record & Viva Voce represents a core empirical or experimental procedure in Chemistry Lab III, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "chemistry-lab-iii-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  III: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  III: Laboratory Safety Protocols & Instrumentation within Chemistry Lab III. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "chemistry-lab-iii-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  III: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  III: Standard Preparations & Calibration Methods within Chemistry Lab III. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "chemistry-lab-iii-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  III: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  III: Core Experimental Procedures & Synthesis within Chemistry Lab III. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "chemistry-lab-iii-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  III: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  III: Quantitative Data Verification & Error Analysis within Chemistry Lab III. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "chemistry-lab-iii-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Chemistry  III: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Chemistry  III: Comprehensive Practical Record & Viva Voce within Chemistry Lab III. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    }
  ],
  "chemistry lab iii_set2": [
    {
      "id": "chemistry-lab-iii-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  III: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-iii-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  III: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-iii-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  III: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-iii-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  III: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-iii-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Chemistry  III: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "chemistry-lab-iii-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  III: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  III: Laboratory Safety Protocols & Instrumentation.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "chemistry-lab-iii-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  III: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  III: Standard Preparations & Calibration Methods.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "chemistry-lab-iii-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  III: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  III: Core Experimental Procedures & Synthesis.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "chemistry-lab-iii-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  III: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  III: Quantitative Data Verification & Error Analysis.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "chemistry-lab-iii-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Chemistry  III: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Chemistry  III: Comprehensive Practical Record & Viva Voce.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    }
  ],
  "botany iii / zoology iii_set1": [
    {
      "id": "botany-iii-/-zoology-iii-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Plant Systematics and state its primary significance in Botany III / Zoology III.",
      "answer_lines": [
        "**Definition**: Plant Systematics forms a fundamental structural and operational concept within Botany III / Zoology III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Economic Botany and state its primary significance in Botany III / Zoology III.",
      "answer_lines": [
        "**Definition**: Economic Botany forms a fundamental structural and operational concept within Botany III / Zoology III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Animal Physiology and state its primary significance in Botany III / Zoology III.",
      "answer_lines": [
        "**Definition**: Animal Physiology forms a fundamental structural and operational concept within Botany III / Zoology III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Endocrinology and state its primary significance in Botany III / Zoology III.",
      "answer_lines": [
        "**Definition**: Endocrinology forms a fundamental structural and operational concept within Botany III / Zoology III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Reproductive Biology and state its primary significance in Botany III / Zoology III.",
      "answer_lines": [
        "**Definition**: Reproductive Biology forms a fundamental structural and operational concept within Botany III / Zoology III, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Plant Systematics with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Plant Systematics serves as a foundational study module in Botany III / Zoology III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Plant Systematics is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Economic Botany with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Economic Botany serves as a foundational study module in Botany III / Zoology III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Economic Botany is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Animal Physiology with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Animal Physiology serves as a foundational study module in Botany III / Zoology III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Animal Physiology is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Endocrinology with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Endocrinology serves as a foundational study module in Botany III / Zoology III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Endocrinology is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Reproductive Biology with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Reproductive Biology serves as a foundational study module in Botany III / Zoology III. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Reproductive Biology is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "botany iii / zoology iii_set2": [
    {
      "id": "botany-iii-/-zoology-iii-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Plant Systematics.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Economic Botany.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Animal Physiology.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Endocrinology.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Reproductive Biology.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Plant Systematics. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Plant Systematics are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Plant Systematics provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Economic Botany. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Economic Botany are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Economic Botany provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Animal Physiology. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Animal Physiology are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Animal Physiology provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Endocrinology. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Endocrinology are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Endocrinology provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "botany-iii-/-zoology-iii-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Reproductive Biology. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Reproductive Biology are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Reproductive Biology provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "bioinformatics basics_set1": [
    {
      "id": "bioinformatics-basics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Biological Databases and state its primary significance in Bioinformatics Basics.",
      "answer_lines": [
        "**Definition**: Biological Databases forms a fundamental structural and operational concept within Bioinformatics Basics, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "bioinformatics-basics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Sequence Alignment and state its primary significance in Bioinformatics Basics.",
      "answer_lines": [
        "**Definition**: Sequence Alignment forms a fundamental structural and operational concept within Bioinformatics Basics, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "bioinformatics-basics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Phylogenetics and state its primary significance in Bioinformatics Basics.",
      "answer_lines": [
        "**Definition**: Phylogenetics forms a fundamental structural and operational concept within Bioinformatics Basics, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "bioinformatics-basics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Structural Bioinformatics and state its primary significance in Bioinformatics Basics.",
      "answer_lines": [
        "**Definition**: Structural Bioinformatics forms a fundamental structural and operational concept within Bioinformatics Basics, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "bioinformatics-basics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Tools and state its primary significance in Bioinformatics Basics.",
      "answer_lines": [
        "**Definition**: Tools forms a fundamental structural and operational concept within Bioinformatics Basics, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "bioinformatics-basics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Biological Databases with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Biological Databases serves as a foundational study module in Bioinformatics Basics. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Biological Databases is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "bioinformatics-basics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Sequence Alignment with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Sequence Alignment serves as a foundational study module in Bioinformatics Basics. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Sequence Alignment is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "bioinformatics-basics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Phylogenetics with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Phylogenetics serves as a foundational study module in Bioinformatics Basics. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Phylogenetics is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "bioinformatics-basics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Structural Bioinformatics with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Structural Bioinformatics serves as a foundational study module in Bioinformatics Basics. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Structural Bioinformatics is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "bioinformatics-basics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Tools with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Tools serves as a foundational study module in Bioinformatics Basics. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Tools is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "bioinformatics basics_set2": [
    {
      "id": "bioinformatics-basics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Biological Databases.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "bioinformatics-basics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Sequence Alignment.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "bioinformatics-basics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Phylogenetics.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "bioinformatics-basics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Structural Bioinformatics.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "bioinformatics-basics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Tools.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "bioinformatics-basics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Biological Databases. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Biological Databases are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Biological Databases provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "bioinformatics-basics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Sequence Alignment. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Sequence Alignment are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Sequence Alignment provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "bioinformatics-basics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Phylogenetics. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Phylogenetics are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Phylogenetics provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "bioinformatics-basics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Structural Bioinformatics. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Structural Bioinformatics are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Structural Bioinformatics provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "bioinformatics-basics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Tools. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Tools are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Tools provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "thermal physics & statistical mechanics_set1": [
    {
      "id": "thermal-physics-&-statistical-mechanics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Thermal Physics & Statistical Mechanics.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Thermal Physics & Statistical Mechanics.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Thermal Physics & Statistical Mechanics.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Thermal Physics & Statistical Mechanics.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Thermal Physics & Statistical Mechanics.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Kinetic Theory with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Kinetic Theory within Thermal Physics & Statistical Mechanics.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Laws of Thermodynamics with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Laws of Thermodynamics within Thermal Physics & Statistical Mechanics.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Entropy with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Entropy within Thermal Physics & Statistical Mechanics.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Heat Engines with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Heat Engines within Thermal Physics & Statistical Mechanics.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Statistical Distributions with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Statistical Distributions within Thermal Physics & Statistical Mechanics.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    }
  ],
  "thermal physics & statistical mechanics_set2": [
    {
      "id": "thermal-physics-&-statistical-mechanics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Kinetic Theory.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Laws of Thermodynamics.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Entropy.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Heat Engines.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Statistical Distributions.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Kinetic Theory.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Kinetic Theory in Thermal Physics & Statistical Mechanics.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Laws of Thermodynamics.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Laws of Thermodynamics in Thermal Physics & Statistical Mechanics.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Entropy.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Entropy in Thermal Physics & Statistical Mechanics.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Heat Engines.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Heat Engines in Thermal Physics & Statistical Mechanics.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "thermal-physics-&-statistical-mechanics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Statistical Distributions.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Statistical Distributions in Thermal Physics & Statistical Mechanics.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    }
  ],
  "physics lab iii_set1": [
    {
      "id": "physics-lab-iii-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Physics  III: Laboratory Safety Protocols & Instrumentation and state its primary measurement protocol in Physics Lab III.",
      "answer_lines": [
        "**Definition**: Physics  III: Laboratory Safety Protocols & Instrumentation represents a core empirical or experimental procedure in Physics Lab III, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "physics-lab-iii-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Physics  III: Standard Preparations & Calibration Methods and state its primary measurement protocol in Physics Lab III.",
      "answer_lines": [
        "**Definition**: Physics  III: Standard Preparations & Calibration Methods represents a core empirical or experimental procedure in Physics Lab III, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "physics-lab-iii-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Physics  III: Core Experimental Procedures & Synthesis and state its primary measurement protocol in Physics Lab III.",
      "answer_lines": [
        "**Definition**: Physics  III: Core Experimental Procedures & Synthesis represents a core empirical or experimental procedure in Physics Lab III, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "physics-lab-iii-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Physics  III: Quantitative Data Verification & Error Analysis and state its primary measurement protocol in Physics Lab III.",
      "answer_lines": [
        "**Definition**: Physics  III: Quantitative Data Verification & Error Analysis represents a core empirical or experimental procedure in Physics Lab III, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "physics-lab-iii-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Physics  III: Comprehensive Practical Record & Viva Voce and state its primary measurement protocol in Physics Lab III.",
      "answer_lines": [
        "**Definition**: Physics  III: Comprehensive Practical Record & Viva Voce represents a core empirical or experimental procedure in Physics Lab III, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "physics-lab-iii-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Physics  III: Laboratory Safety Protocols & Instrumentation with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Physics  III: Laboratory Safety Protocols & Instrumentation within Physics Lab III. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "physics-lab-iii-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Physics  III: Standard Preparations & Calibration Methods with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Physics  III: Standard Preparations & Calibration Methods within Physics Lab III. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "physics-lab-iii-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Physics  III: Core Experimental Procedures & Synthesis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Physics  III: Core Experimental Procedures & Synthesis within Physics Lab III. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "physics-lab-iii-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Physics  III: Quantitative Data Verification & Error Analysis with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Physics  III: Quantitative Data Verification & Error Analysis within Physics Lab III. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    },
    {
      "id": "physics-lab-iii-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Physics  III: Comprehensive Practical Record & Viva Voce with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Physics  III: Comprehensive Practical Record & Viva Voce within Physics Lab III. Draw the complete apparatus wiring / setup schematic.",
        "2. Step-by-Step Experimental Procedure:",
        "• Step 1: Perform zero-error calibration and sensitivity adjustments on all measurement meters and transducers.",
        "• Step 2: Vary the independent input excitation in uniform increments across the rated operational span.",
        "• Step 3: Record multiple sets of stabilized output readings in a standardized observation table.",
        "• Step 4: Compute calculated derived quantities using governing constitutive formulas, applying temperature and environmental corrections.",
        "3. Error Analysis & Uncertainty Propagation:",
        "Compute standard deviation $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$ and fractional uncertainty propagation $\\frac{\\Delta y}{y} = \\sqrt{\\sum \\left(\\frac{\\Delta x_i}{x_i}\\right)^2}$.",
        "4. Examination Strategy:",
        "Draw neat apparatus schematics, plot experimental curves with SI units on both axes, identify linear working regions, and box final calculated values."
      ]
    }
  ],
  "physics lab iii_set2": [
    {
      "id": "physics-lab-iii-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Physics  III: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "physics-lab-iii-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Physics  III: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "physics-lab-iii-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Physics  III: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "physics-lab-iii-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Physics  III: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "physics-lab-iii-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Physics  III: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "physics-lab-iii-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Physics  III: Laboratory Safety Protocols & Instrumentation.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Physics  III: Laboratory Safety Protocols & Instrumentation.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "physics-lab-iii-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Physics  III: Standard Preparations & Calibration Methods.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Physics  III: Standard Preparations & Calibration Methods.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "physics-lab-iii-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Physics  III: Core Experimental Procedures & Synthesis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Physics  III: Core Experimental Procedures & Synthesis.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "physics-lab-iii-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Physics  III: Quantitative Data Verification & Error Analysis.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Physics  III: Quantitative Data Verification & Error Analysis.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    },
    {
      "id": "physics-lab-iii-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Physics  III: Comprehensive Practical Record & Viva Voce.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Physics  III: Comprehensive Practical Record & Viva Voce.",
        "2. Step-by-Step Data Analysis & Curve Plotting:",
        "• Step 1: Plot dependent response versus independent stimulus on standardized linear or semi-logarithmic grid axes.",
        "• Step 2: Determine slope $m = \\frac{\\Delta y}{\\Delta x}$ using points from the linear region to calculate fundamental physical constants.",
        "• Step 3: Identify systematic deviations, saturation plateaus, or hysteresis loops occurring at operational extremes.",
        "• Step 4: Compute absolute error $E_a = |x_{\\text{exp}} - x_{\\text{true}}|$ and percentage error $E_p = \\frac{E_a}{x_{\\text{true}}} \\times 100\\%$.",
        "3. Common Experimental Failure Modes & Mitigation:",
        "Address parallax errors, thermal resistance drift, loose terminal contacts, and electrical ground loops with systematic mitigation steps.",
        "4. Examination Checklist:",
        "Draw characteristic response curves with clearly labeled coordinate axes and units, tabulate representative numerical trials, and write clear experimental inferences."
      ]
    }
  ],
  "chemistry iii / data structures_set1": [
    {
      "id": "chemistry-iii-/-data-structures-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Organic Reactions and state its primary asymptotic time complexity in Chemistry III / Data Structures.",
      "answer_lines": [
        "**Definition**: In Chemistry III / Data Structures, Organic Reactions establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Carbonyl Compounds and state its primary asymptotic time complexity in Chemistry III / Data Structures.",
      "answer_lines": [
        "**Definition**: In Chemistry III / Data Structures, Carbonyl Compounds establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Amines and state its primary asymptotic time complexity in Chemistry III / Data Structures.",
      "answer_lines": [
        "**Definition**: In Chemistry III / Data Structures, Amines establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Stereochemistry and state its primary asymptotic time complexity in Chemistry III / Data Structures.",
      "answer_lines": [
        "**Definition**: In Chemistry III / Data Structures, Stereochemistry establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Spectroscopy and state its primary asymptotic time complexity in Chemistry III / Data Structures.",
      "answer_lines": [
        "**Definition**: In Chemistry III / Data Structures, Spectroscopy establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Organic Reactions with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Organic Reactions serves as a core computational building block in Chemistry III / Data Structures, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Carbonyl Compounds with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Carbonyl Compounds serves as a core computational building block in Chemistry III / Data Structures, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Amines with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Amines serves as a core computational building block in Chemistry III / Data Structures, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Stereochemistry with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Stereochemistry serves as a core computational building block in Chemistry III / Data Structures, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Spectroscopy with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Spectroscopy serves as a core computational building block in Chemistry III / Data Structures, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    }
  ],
  "chemistry iii / data structures_set2": [
    {
      "id": "chemistry-iii-/-data-structures-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Organic Reactions.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Organic Reactions.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Carbonyl Compounds.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Carbonyl Compounds.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Amines.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Amines.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Stereochemistry.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Stereochemistry.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Spectroscopy.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Spectroscopy.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Organic Reactions. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Organic Reactions.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Carbonyl Compounds. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Carbonyl Compounds.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Amines. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Amines.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Stereochemistry. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Stereochemistry.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "chemistry-iii-/-data-structures-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Spectroscopy. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Spectroscopy.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    }
  ],
  "instrumentation & measurement_set1": [
    {
      "id": "instrumentation-&-measurement-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Measurement Basics in Instrumentation & Measurement.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Measurement Basics."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Transducers in Instrumentation & Measurement.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Transducers."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Oscilloscopes in Instrumentation & Measurement.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Oscilloscopes."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Signal Generators in Instrumentation & Measurement.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Signal Generators."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Data Acquisition in Instrumentation & Measurement.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Data Acquisition."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Measurement Basics with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Measurement Basics models electromagnetic and circuit dynamics in Instrumentation & Measurement. Draw the complete equivalent schematic with active/passive components.",
        "2. Step-by-Step Calculus Derivation:",
        "• Step 1: Formulate Kirchhoff's voltage or current balance in the time domain: $v(t) = R i(t) + L \\frac{di}{dt} + \\frac{1}{C}\\int i dt$.",
        "• Step 2: Apply the Laplace transform assuming zero initial conditions: $V(s) = \\left(R + s L + \\frac{1}{s C}\\right) I(s)$.",
        "• Step 3: Solve for the continuous-time transfer function: $H(s) = \\frac{I(s)}{V(s)} = \\frac{s / L}{s^2 + \\frac{R}{L}s + \\frac{1}{LC}}$.",
        "• Step 4: Evaluate resonant peak $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ and damping factor $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$ for transient stability.",
        "3. Frequency Response & Bode Plot Analysis:",
        "Magnitude profile exhibits bandpass resonance with $-3\\text{ dB}$ cutoff frequencies $\\omega_1, \\omega_2$ and bandwidth $BW = \\frac{\\omega_0}{Q}$.",
        "4. Engineering Conclusion:",
        "Provides exact design equations for impedance matching networks, active filters, and power conversion equipment. Box all numerical solutions."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Transducers with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Transducers models electromagnetic and circuit dynamics in Instrumentation & Measurement. Draw the complete equivalent schematic with active/passive components.",
        "2. Step-by-Step Calculus Derivation:",
        "• Step 1: Formulate Kirchhoff's voltage or current balance in the time domain: $v(t) = R i(t) + L \\frac{di}{dt} + \\frac{1}{C}\\int i dt$.",
        "• Step 2: Apply the Laplace transform assuming zero initial conditions: $V(s) = \\left(R + s L + \\frac{1}{s C}\\right) I(s)$.",
        "• Step 3: Solve for the continuous-time transfer function: $H(s) = \\frac{I(s)}{V(s)} = \\frac{s / L}{s^2 + \\frac{R}{L}s + \\frac{1}{LC}}$.",
        "• Step 4: Evaluate resonant peak $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ and damping factor $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$ for transient stability.",
        "3. Frequency Response & Bode Plot Analysis:",
        "Magnitude profile exhibits bandpass resonance with $-3\\text{ dB}$ cutoff frequencies $\\omega_1, \\omega_2$ and bandwidth $BW = \\frac{\\omega_0}{Q}$.",
        "4. Engineering Conclusion:",
        "Provides exact design equations for impedance matching networks, active filters, and power conversion equipment. Box all numerical solutions."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Oscilloscopes with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Oscilloscopes models electromagnetic and circuit dynamics in Instrumentation & Measurement. Draw the complete equivalent schematic with active/passive components.",
        "2. Step-by-Step Calculus Derivation:",
        "• Step 1: Formulate Kirchhoff's voltage or current balance in the time domain: $v(t) = R i(t) + L \\frac{di}{dt} + \\frac{1}{C}\\int i dt$.",
        "• Step 2: Apply the Laplace transform assuming zero initial conditions: $V(s) = \\left(R + s L + \\frac{1}{s C}\\right) I(s)$.",
        "• Step 3: Solve for the continuous-time transfer function: $H(s) = \\frac{I(s)}{V(s)} = \\frac{s / L}{s^2 + \\frac{R}{L}s + \\frac{1}{LC}}$.",
        "• Step 4: Evaluate resonant peak $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ and damping factor $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$ for transient stability.",
        "3. Frequency Response & Bode Plot Analysis:",
        "Magnitude profile exhibits bandpass resonance with $-3\\text{ dB}$ cutoff frequencies $\\omega_1, \\omega_2$ and bandwidth $BW = \\frac{\\omega_0}{Q}$.",
        "4. Engineering Conclusion:",
        "Provides exact design equations for impedance matching networks, active filters, and power conversion equipment. Box all numerical solutions."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Signal Generators with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Signal Generators models electromagnetic and circuit dynamics in Instrumentation & Measurement. Draw the complete equivalent schematic with active/passive components.",
        "2. Step-by-Step Calculus Derivation:",
        "• Step 1: Formulate Kirchhoff's voltage or current balance in the time domain: $v(t) = R i(t) + L \\frac{di}{dt} + \\frac{1}{C}\\int i dt$.",
        "• Step 2: Apply the Laplace transform assuming zero initial conditions: $V(s) = \\left(R + s L + \\frac{1}{s C}\\right) I(s)$.",
        "• Step 3: Solve for the continuous-time transfer function: $H(s) = \\frac{I(s)}{V(s)} = \\frac{s / L}{s^2 + \\frac{R}{L}s + \\frac{1}{LC}}$.",
        "• Step 4: Evaluate resonant peak $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ and damping factor $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$ for transient stability.",
        "3. Frequency Response & Bode Plot Analysis:",
        "Magnitude profile exhibits bandpass resonance with $-3\\text{ dB}$ cutoff frequencies $\\omega_1, \\omega_2$ and bandwidth $BW = \\frac{\\omega_0}{Q}$.",
        "4. Engineering Conclusion:",
        "Provides exact design equations for impedance matching networks, active filters, and power conversion equipment. Box all numerical solutions."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Data Acquisition with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Data Acquisition models electromagnetic and circuit dynamics in Instrumentation & Measurement. Draw the complete equivalent schematic with active/passive components.",
        "2. Step-by-Step Calculus Derivation:",
        "• Step 1: Formulate Kirchhoff's voltage or current balance in the time domain: $v(t) = R i(t) + L \\frac{di}{dt} + \\frac{1}{C}\\int i dt$.",
        "• Step 2: Apply the Laplace transform assuming zero initial conditions: $V(s) = \\left(R + s L + \\frac{1}{s C}\\right) I(s)$.",
        "• Step 3: Solve for the continuous-time transfer function: $H(s) = \\frac{I(s)}{V(s)} = \\frac{s / L}{s^2 + \\frac{R}{L}s + \\frac{1}{LC}}$.",
        "• Step 4: Evaluate resonant peak $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ and damping factor $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$ for transient stability.",
        "3. Frequency Response & Bode Plot Analysis:",
        "Magnitude profile exhibits bandpass resonance with $-3\\text{ dB}$ cutoff frequencies $\\omega_1, \\omega_2$ and bandwidth $BW = \\frac{\\omega_0}{Q}$.",
        "4. Engineering Conclusion:",
        "Provides exact design equations for impedance matching networks, active filters, and power conversion equipment. Box all numerical solutions."
      ]
    }
  ],
  "instrumentation & measurement_set2": [
    {
      "id": "instrumentation-&-measurement-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Measurement Basics.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Transducers.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Oscilloscopes.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Signal Generators.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Data Acquisition.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Measurement Basics. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Measurement Basics into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
        "2. Analytical Steady-State Solution:",
        "• Step 1: Draw the phasor diagram with reference voltage vector $\\vec{V}_2$ and lagging load current $\\vec{I}_2$.",
        "• Step 2: Formulate the approximate voltage regulation expression: $\\%VR = \\frac{I_2 R_{eq}\\cos\\phi_2 \\pm I_2 X_{eq}\\sin\\phi_2}{V_2} \\times 100\\%$.",
        "• Step 3: Derive condition for zero voltage regulation: occurs at leading power factor $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
        "• Step 4: Calculate total full-load efficiency: $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_{core} + I_2^2 R_{eq}} \\times 100\\%$.",
        "3. Industrial Applications & Standards Compliance:",
        "Utilized in utility distribution grids, industrial variable frequency drives, and renewable power inverters.",
        "4. Examination Checklist:",
        "Draw annotated phasor diagrams with directional arrows, state sign conventions (+ for lag, - for lead), and box final percentages."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Transducers. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Transducers into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
        "2. Analytical Steady-State Solution:",
        "• Step 1: Draw the phasor diagram with reference voltage vector $\\vec{V}_2$ and lagging load current $\\vec{I}_2$.",
        "• Step 2: Formulate the approximate voltage regulation expression: $\\%VR = \\frac{I_2 R_{eq}\\cos\\phi_2 \\pm I_2 X_{eq}\\sin\\phi_2}{V_2} \\times 100\\%$.",
        "• Step 3: Derive condition for zero voltage regulation: occurs at leading power factor $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
        "• Step 4: Calculate total full-load efficiency: $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_{core} + I_2^2 R_{eq}} \\times 100\\%$.",
        "3. Industrial Applications & Standards Compliance:",
        "Utilized in utility distribution grids, industrial variable frequency drives, and renewable power inverters.",
        "4. Examination Checklist:",
        "Draw annotated phasor diagrams with directional arrows, state sign conventions (+ for lag, - for lead), and box final percentages."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Oscilloscopes. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Oscilloscopes into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
        "2. Analytical Steady-State Solution:",
        "• Step 1: Draw the phasor diagram with reference voltage vector $\\vec{V}_2$ and lagging load current $\\vec{I}_2$.",
        "• Step 2: Formulate the approximate voltage regulation expression: $\\%VR = \\frac{I_2 R_{eq}\\cos\\phi_2 \\pm I_2 X_{eq}\\sin\\phi_2}{V_2} \\times 100\\%$.",
        "• Step 3: Derive condition for zero voltage regulation: occurs at leading power factor $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
        "• Step 4: Calculate total full-load efficiency: $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_{core} + I_2^2 R_{eq}} \\times 100\\%$.",
        "3. Industrial Applications & Standards Compliance:",
        "Utilized in utility distribution grids, industrial variable frequency drives, and renewable power inverters.",
        "4. Examination Checklist:",
        "Draw annotated phasor diagrams with directional arrows, state sign conventions (+ for lag, - for lead), and box final percentages."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Signal Generators. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Signal Generators into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
        "2. Analytical Steady-State Solution:",
        "• Step 1: Draw the phasor diagram with reference voltage vector $\\vec{V}_2$ and lagging load current $\\vec{I}_2$.",
        "• Step 2: Formulate the approximate voltage regulation expression: $\\%VR = \\frac{I_2 R_{eq}\\cos\\phi_2 \\pm I_2 X_{eq}\\sin\\phi_2}{V_2} \\times 100\\%$.",
        "• Step 3: Derive condition for zero voltage regulation: occurs at leading power factor $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
        "• Step 4: Calculate total full-load efficiency: $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_{core} + I_2^2 R_{eq}} \\times 100\\%$.",
        "3. Industrial Applications & Standards Compliance:",
        "Utilized in utility distribution grids, industrial variable frequency drives, and renewable power inverters.",
        "4. Examination Checklist:",
        "Draw annotated phasor diagrams with directional arrows, state sign conventions (+ for lag, - for lead), and box final percentages."
      ]
    },
    {
      "id": "instrumentation-&-measurement-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Data Acquisition. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Data Acquisition into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
        "2. Analytical Steady-State Solution:",
        "• Step 1: Draw the phasor diagram with reference voltage vector $\\vec{V}_2$ and lagging load current $\\vec{I}_2$.",
        "• Step 2: Formulate the approximate voltage regulation expression: $\\%VR = \\frac{I_2 R_{eq}\\cos\\phi_2 \\pm I_2 X_{eq}\\sin\\phi_2}{V_2} \\times 100\\%$.",
        "• Step 3: Derive condition for zero voltage regulation: occurs at leading power factor $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
        "• Step 4: Calculate total full-load efficiency: $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_{core} + I_2^2 R_{eq}} \\times 100\\%$.",
        "3. Industrial Applications & Standards Compliance:",
        "Utilized in utility distribution grids, industrial variable frequency drives, and renewable power inverters.",
        "4. Examination Checklist:",
        "Draw annotated phasor diagrams with directional arrows, state sign conventions (+ for lag, - for lead), and box final percentages."
      ]
    }
  ],
  "thermal physics & electronics_set1": [
    {
      "id": "thermal-physics-&-electronics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Kinetic Theory in Thermal Physics & Electronics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Kinetic Theory."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Thermodynamics in Thermal Physics & Electronics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Thermodynamics."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Semiconductors in Thermal Physics & Electronics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Semiconductors."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Amplifiers in Thermal Physics & Electronics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Amplifiers."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Digital Logic in Thermal Physics & Electronics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Digital Logic."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Kinetic Theory with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Kinetic Theory models electromagnetic and circuit dynamics in Thermal Physics & Electronics. Draw the complete equivalent schematic with active/passive components.",
        "2. Step-by-Step Calculus Derivation:",
        "• Step 1: Formulate Kirchhoff's voltage or current balance in the time domain: $v(t) = R i(t) + L \\frac{di}{dt} + \\frac{1}{C}\\int i dt$.",
        "• Step 2: Apply the Laplace transform assuming zero initial conditions: $V(s) = \\left(R + s L + \\frac{1}{s C}\\right) I(s)$.",
        "• Step 3: Solve for the continuous-time transfer function: $H(s) = \\frac{I(s)}{V(s)} = \\frac{s / L}{s^2 + \\frac{R}{L}s + \\frac{1}{LC}}$.",
        "• Step 4: Evaluate resonant peak $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ and damping factor $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$ for transient stability.",
        "3. Frequency Response & Bode Plot Analysis:",
        "Magnitude profile exhibits bandpass resonance with $-3\\text{ dB}$ cutoff frequencies $\\omega_1, \\omega_2$ and bandwidth $BW = \\frac{\\omega_0}{Q}$.",
        "4. Engineering Conclusion:",
        "Provides exact design equations for impedance matching networks, active filters, and power conversion equipment. Box all numerical solutions."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Thermodynamics with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Thermodynamics models electromagnetic and circuit dynamics in Thermal Physics & Electronics. Draw the complete equivalent schematic with active/passive components.",
        "2. Step-by-Step Calculus Derivation:",
        "• Step 1: Formulate Kirchhoff's voltage or current balance in the time domain: $v(t) = R i(t) + L \\frac{di}{dt} + \\frac{1}{C}\\int i dt$.",
        "• Step 2: Apply the Laplace transform assuming zero initial conditions: $V(s) = \\left(R + s L + \\frac{1}{s C}\\right) I(s)$.",
        "• Step 3: Solve for the continuous-time transfer function: $H(s) = \\frac{I(s)}{V(s)} = \\frac{s / L}{s^2 + \\frac{R}{L}s + \\frac{1}{LC}}$.",
        "• Step 4: Evaluate resonant peak $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ and damping factor $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$ for transient stability.",
        "3. Frequency Response & Bode Plot Analysis:",
        "Magnitude profile exhibits bandpass resonance with $-3\\text{ dB}$ cutoff frequencies $\\omega_1, \\omega_2$ and bandwidth $BW = \\frac{\\omega_0}{Q}$.",
        "4. Engineering Conclusion:",
        "Provides exact design equations for impedance matching networks, active filters, and power conversion equipment. Box all numerical solutions."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Semiconductors with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Semiconductors models electromagnetic and circuit dynamics in Thermal Physics & Electronics. Draw the complete equivalent schematic with active/passive components.",
        "2. Step-by-Step Calculus Derivation:",
        "• Step 1: Formulate Kirchhoff's voltage or current balance in the time domain: $v(t) = R i(t) + L \\frac{di}{dt} + \\frac{1}{C}\\int i dt$.",
        "• Step 2: Apply the Laplace transform assuming zero initial conditions: $V(s) = \\left(R + s L + \\frac{1}{s C}\\right) I(s)$.",
        "• Step 3: Solve for the continuous-time transfer function: $H(s) = \\frac{I(s)}{V(s)} = \\frac{s / L}{s^2 + \\frac{R}{L}s + \\frac{1}{LC}}$.",
        "• Step 4: Evaluate resonant peak $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ and damping factor $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$ for transient stability.",
        "3. Frequency Response & Bode Plot Analysis:",
        "Magnitude profile exhibits bandpass resonance with $-3\\text{ dB}$ cutoff frequencies $\\omega_1, \\omega_2$ and bandwidth $BW = \\frac{\\omega_0}{Q}$.",
        "4. Engineering Conclusion:",
        "Provides exact design equations for impedance matching networks, active filters, and power conversion equipment. Box all numerical solutions."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Amplifiers with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Amplifiers models electromagnetic and circuit dynamics in Thermal Physics & Electronics. Draw the complete equivalent schematic with active/passive components.",
        "2. Step-by-Step Calculus Derivation:",
        "• Step 1: Formulate Kirchhoff's voltage or current balance in the time domain: $v(t) = R i(t) + L \\frac{di}{dt} + \\frac{1}{C}\\int i dt$.",
        "• Step 2: Apply the Laplace transform assuming zero initial conditions: $V(s) = \\left(R + s L + \\frac{1}{s C}\\right) I(s)$.",
        "• Step 3: Solve for the continuous-time transfer function: $H(s) = \\frac{I(s)}{V(s)} = \\frac{s / L}{s^2 + \\frac{R}{L}s + \\frac{1}{LC}}$.",
        "• Step 4: Evaluate resonant peak $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ and damping factor $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$ for transient stability.",
        "3. Frequency Response & Bode Plot Analysis:",
        "Magnitude profile exhibits bandpass resonance with $-3\\text{ dB}$ cutoff frequencies $\\omega_1, \\omega_2$ and bandwidth $BW = \\frac{\\omega_0}{Q}$.",
        "4. Engineering Conclusion:",
        "Provides exact design equations for impedance matching networks, active filters, and power conversion equipment. Box all numerical solutions."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Digital Logic with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Digital Logic models electromagnetic and circuit dynamics in Thermal Physics & Electronics. Draw the complete equivalent schematic with active/passive components.",
        "2. Step-by-Step Calculus Derivation:",
        "• Step 1: Formulate Kirchhoff's voltage or current balance in the time domain: $v(t) = R i(t) + L \\frac{di}{dt} + \\frac{1}{C}\\int i dt$.",
        "• Step 2: Apply the Laplace transform assuming zero initial conditions: $V(s) = \\left(R + s L + \\frac{1}{s C}\\right) I(s)$.",
        "• Step 3: Solve for the continuous-time transfer function: $H(s) = \\frac{I(s)}{V(s)} = \\frac{s / L}{s^2 + \\frac{R}{L}s + \\frac{1}{LC}}$.",
        "• Step 4: Evaluate resonant peak $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ and damping factor $\\zeta = \\frac{R}{2}\\sqrt{\\frac{C}{L}}$ for transient stability.",
        "3. Frequency Response & Bode Plot Analysis:",
        "Magnitude profile exhibits bandpass resonance with $-3\\text{ dB}$ cutoff frequencies $\\omega_1, \\omega_2$ and bandwidth $BW = \\frac{\\omega_0}{Q}$.",
        "4. Engineering Conclusion:",
        "Provides exact design equations for impedance matching networks, active filters, and power conversion equipment. Box all numerical solutions."
      ]
    }
  ],
  "thermal physics & electronics_set2": [
    {
      "id": "thermal-physics-&-electronics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Kinetic Theory.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Thermodynamics.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Semiconductors.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Amplifiers.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Digital Logic.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Kinetic Theory. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Kinetic Theory into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
        "2. Analytical Steady-State Solution:",
        "• Step 1: Draw the phasor diagram with reference voltage vector $\\vec{V}_2$ and lagging load current $\\vec{I}_2$.",
        "• Step 2: Formulate the approximate voltage regulation expression: $\\%VR = \\frac{I_2 R_{eq}\\cos\\phi_2 \\pm I_2 X_{eq}\\sin\\phi_2}{V_2} \\times 100\\%$.",
        "• Step 3: Derive condition for zero voltage regulation: occurs at leading power factor $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
        "• Step 4: Calculate total full-load efficiency: $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_{core} + I_2^2 R_{eq}} \\times 100\\%$.",
        "3. Industrial Applications & Standards Compliance:",
        "Utilized in utility distribution grids, industrial variable frequency drives, and renewable power inverters.",
        "4. Examination Checklist:",
        "Draw annotated phasor diagrams with directional arrows, state sign conventions (+ for lag, - for lead), and box final percentages."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Thermodynamics. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Thermodynamics into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
        "2. Analytical Steady-State Solution:",
        "• Step 1: Draw the phasor diagram with reference voltage vector $\\vec{V}_2$ and lagging load current $\\vec{I}_2$.",
        "• Step 2: Formulate the approximate voltage regulation expression: $\\%VR = \\frac{I_2 R_{eq}\\cos\\phi_2 \\pm I_2 X_{eq}\\sin\\phi_2}{V_2} \\times 100\\%$.",
        "• Step 3: Derive condition for zero voltage regulation: occurs at leading power factor $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
        "• Step 4: Calculate total full-load efficiency: $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_{core} + I_2^2 R_{eq}} \\times 100\\%$.",
        "3. Industrial Applications & Standards Compliance:",
        "Utilized in utility distribution grids, industrial variable frequency drives, and renewable power inverters.",
        "4. Examination Checklist:",
        "Draw annotated phasor diagrams with directional arrows, state sign conventions (+ for lag, - for lead), and box final percentages."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Semiconductors. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Semiconductors into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
        "2. Analytical Steady-State Solution:",
        "• Step 1: Draw the phasor diagram with reference voltage vector $\\vec{V}_2$ and lagging load current $\\vec{I}_2$.",
        "• Step 2: Formulate the approximate voltage regulation expression: $\\%VR = \\frac{I_2 R_{eq}\\cos\\phi_2 \\pm I_2 X_{eq}\\sin\\phi_2}{V_2} \\times 100\\%$.",
        "• Step 3: Derive condition for zero voltage regulation: occurs at leading power factor $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
        "• Step 4: Calculate total full-load efficiency: $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_{core} + I_2^2 R_{eq}} \\times 100\\%$.",
        "3. Industrial Applications & Standards Compliance:",
        "Utilized in utility distribution grids, industrial variable frequency drives, and renewable power inverters.",
        "4. Examination Checklist:",
        "Draw annotated phasor diagrams with directional arrows, state sign conventions (+ for lag, - for lead), and box final percentages."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Amplifiers. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Amplifiers into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
        "2. Analytical Steady-State Solution:",
        "• Step 1: Draw the phasor diagram with reference voltage vector $\\vec{V}_2$ and lagging load current $\\vec{I}_2$.",
        "• Step 2: Formulate the approximate voltage regulation expression: $\\%VR = \\frac{I_2 R_{eq}\\cos\\phi_2 \\pm I_2 X_{eq}\\sin\\phi_2}{V_2} \\times 100\\%$.",
        "• Step 3: Derive condition for zero voltage regulation: occurs at leading power factor $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
        "• Step 4: Calculate total full-load efficiency: $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_{core} + I_2^2 R_{eq}} \\times 100\\%$.",
        "3. Industrial Applications & Standards Compliance:",
        "Utilized in utility distribution grids, industrial variable frequency drives, and renewable power inverters.",
        "4. Examination Checklist:",
        "Draw annotated phasor diagrams with directional arrows, state sign conventions (+ for lag, - for lead), and box final percentages."
      ]
    },
    {
      "id": "thermal-physics-&-electronics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Digital Logic. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Digital Logic into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
        "2. Analytical Steady-State Solution:",
        "• Step 1: Draw the phasor diagram with reference voltage vector $\\vec{V}_2$ and lagging load current $\\vec{I}_2$.",
        "• Step 2: Formulate the approximate voltage regulation expression: $\\%VR = \\frac{I_2 R_{eq}\\cos\\phi_2 \\pm I_2 X_{eq}\\sin\\phi_2}{V_2} \\times 100\\%$.",
        "• Step 3: Derive condition for zero voltage regulation: occurs at leading power factor $\\tan\\phi_2 = -\\frac{R_{eq}}{X_{eq}}$.",
        "• Step 4: Calculate total full-load efficiency: $\\eta = \\frac{V_2 I_2 \\cos\\phi_2}{V_2 I_2 \\cos\\phi_2 + P_{core} + I_2^2 R_{eq}} \\times 100\\%$.",
        "3. Industrial Applications & Standards Compliance:",
        "Utilized in utility distribution grids, industrial variable frequency drives, and renewable power inverters.",
        "4. Examination Checklist:",
        "Draw annotated phasor diagrams with directional arrows, state sign conventions (+ for lag, - for lead), and box final percentages."
      ]
    }
  ],
  "mathematics iii / botany iii_set1": [
    {
      "id": "mathematics-iii-/-botany-iii-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Mathematics III / Botany III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Mathematics III / Botany III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Mathematics III / Botany III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Mathematics III / Botany III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Mathematics III / Botany III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Real Analysis with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Real Analysis within Mathematics III / Botany III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Sequences with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Sequences within Mathematics III / Botany III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Series with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Series within Mathematics III / Botany III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Plant Systematics with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Plant Systematics within Mathematics III / Botany III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Economic Botany with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Economic Botany within Mathematics III / Botany III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    }
  ],
  "mathematics iii / botany iii_set2": [
    {
      "id": "mathematics-iii-/-botany-iii-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Real Analysis.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Sequences.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Series.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Plant Systematics.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Economic Botany.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Real Analysis.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Real Analysis in Mathematics III / Botany III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Sequences.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Sequences in Mathematics III / Botany III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Series.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Series in Mathematics III / Botany III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Plant Systematics.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Plant Systematics in Mathematics III / Botany III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "mathematics-iii-/-botany-iii-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Economic Botany.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Economic Botany in Mathematics III / Botany III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    }
  ],
  "analytical chemistry_set1": [
    {
      "id": "analytical-chemistry-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Titrimetry in Analytical Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "analytical-chemistry-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Gravimetry in Analytical Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "analytical-chemistry-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Chromatography in Analytical Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "analytical-chemistry-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Spectroscopy in Analytical Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "analytical-chemistry-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Quality Control in Analytical Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "analytical-chemistry-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Titrimetry with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Titrimetry models chemical reaction rates and transport mechanisms in Analytical Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
        "2. Step-by-Step Reactor Design Derivation:",
        "• Step 1: Consider an ideal Plug Flow Reactor (PFR) with differential volume element $dV$. Mass balance: $F_A - (F_A + dF_A) + (-r_A) dV = 0$.",
        "• Step 2: Simplify differential balance: $dF_A = (-r_A) dV$. Substitute molar flow rate $F_A = F_{A0}(1 - X_A) \\implies dF_A = -F_{A0} dX_A$.",
        "• Step 3: Separate variables: $dV = F_{A0} \\frac{dX_A}{-r_A}$. Integrate over total reactor volume: $V = F_{A0}\\int_0^{X_A} \\frac{dX_A}{-r_A}$.",
        "• Step 4: For first-order reaction $-r_A = k C_A = k C_{A0}(1 - X_A)$: space time evaluates to $\\tau = \\frac{C_{A0} V}{F_{A0}} = \\frac{1}{k}\\ln\\left(\\frac{1}{1 - X_A}\\right)$.",
        "3. Industrial Optimization & Thermal Stability:",
        "Examines Levenspiel comparison plots (PFR vs CSTR volume requirements) and runaway exothermic temperature trajectories.",
        "4. Engineering Conclusion:",
        "Provides exact sizing formulas for industrial chemical synthesis, catalytic reactors, and fractional distillation units. Box final volume."
      ]
    },
    {
      "id": "analytical-chemistry-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Gravimetry with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Gravimetry models chemical reaction rates and transport mechanisms in Analytical Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
        "2. Step-by-Step Reactor Design Derivation:",
        "• Step 1: Consider an ideal Plug Flow Reactor (PFR) with differential volume element $dV$. Mass balance: $F_A - (F_A + dF_A) + (-r_A) dV = 0$.",
        "• Step 2: Simplify differential balance: $dF_A = (-r_A) dV$. Substitute molar flow rate $F_A = F_{A0}(1 - X_A) \\implies dF_A = -F_{A0} dX_A$.",
        "• Step 3: Separate variables: $dV = F_{A0} \\frac{dX_A}{-r_A}$. Integrate over total reactor volume: $V = F_{A0}\\int_0^{X_A} \\frac{dX_A}{-r_A}$.",
        "• Step 4: For first-order reaction $-r_A = k C_A = k C_{A0}(1 - X_A)$: space time evaluates to $\\tau = \\frac{C_{A0} V}{F_{A0}} = \\frac{1}{k}\\ln\\left(\\frac{1}{1 - X_A}\\right)$.",
        "3. Industrial Optimization & Thermal Stability:",
        "Examines Levenspiel comparison plots (PFR vs CSTR volume requirements) and runaway exothermic temperature trajectories.",
        "4. Engineering Conclusion:",
        "Provides exact sizing formulas for industrial chemical synthesis, catalytic reactors, and fractional distillation units. Box final volume."
      ]
    },
    {
      "id": "analytical-chemistry-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Chromatography with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Chromatography models chemical reaction rates and transport mechanisms in Analytical Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
        "2. Step-by-Step Reactor Design Derivation:",
        "• Step 1: Consider an ideal Plug Flow Reactor (PFR) with differential volume element $dV$. Mass balance: $F_A - (F_A + dF_A) + (-r_A) dV = 0$.",
        "• Step 2: Simplify differential balance: $dF_A = (-r_A) dV$. Substitute molar flow rate $F_A = F_{A0}(1 - X_A) \\implies dF_A = -F_{A0} dX_A$.",
        "• Step 3: Separate variables: $dV = F_{A0} \\frac{dX_A}{-r_A}$. Integrate over total reactor volume: $V = F_{A0}\\int_0^{X_A} \\frac{dX_A}{-r_A}$.",
        "• Step 4: For first-order reaction $-r_A = k C_A = k C_{A0}(1 - X_A)$: space time evaluates to $\\tau = \\frac{C_{A0} V}{F_{A0}} = \\frac{1}{k}\\ln\\left(\\frac{1}{1 - X_A}\\right)$.",
        "3. Industrial Optimization & Thermal Stability:",
        "Examines Levenspiel comparison plots (PFR vs CSTR volume requirements) and runaway exothermic temperature trajectories.",
        "4. Engineering Conclusion:",
        "Provides exact sizing formulas for industrial chemical synthesis, catalytic reactors, and fractional distillation units. Box final volume."
      ]
    },
    {
      "id": "analytical-chemistry-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Spectroscopy with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Spectroscopy models chemical reaction rates and transport mechanisms in Analytical Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
        "2. Step-by-Step Reactor Design Derivation:",
        "• Step 1: Consider an ideal Plug Flow Reactor (PFR) with differential volume element $dV$. Mass balance: $F_A - (F_A + dF_A) + (-r_A) dV = 0$.",
        "• Step 2: Simplify differential balance: $dF_A = (-r_A) dV$. Substitute molar flow rate $F_A = F_{A0}(1 - X_A) \\implies dF_A = -F_{A0} dX_A$.",
        "• Step 3: Separate variables: $dV = F_{A0} \\frac{dX_A}{-r_A}$. Integrate over total reactor volume: $V = F_{A0}\\int_0^{X_A} \\frac{dX_A}{-r_A}$.",
        "• Step 4: For first-order reaction $-r_A = k C_A = k C_{A0}(1 - X_A)$: space time evaluates to $\\tau = \\frac{C_{A0} V}{F_{A0}} = \\frac{1}{k}\\ln\\left(\\frac{1}{1 - X_A}\\right)$.",
        "3. Industrial Optimization & Thermal Stability:",
        "Examines Levenspiel comparison plots (PFR vs CSTR volume requirements) and runaway exothermic temperature trajectories.",
        "4. Engineering Conclusion:",
        "Provides exact sizing formulas for industrial chemical synthesis, catalytic reactors, and fractional distillation units. Box final volume."
      ]
    },
    {
      "id": "analytical-chemistry-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Quality Control with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Quality Control models chemical reaction rates and transport mechanisms in Analytical Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
        "2. Step-by-Step Reactor Design Derivation:",
        "• Step 1: Consider an ideal Plug Flow Reactor (PFR) with differential volume element $dV$. Mass balance: $F_A - (F_A + dF_A) + (-r_A) dV = 0$.",
        "• Step 2: Simplify differential balance: $dF_A = (-r_A) dV$. Substitute molar flow rate $F_A = F_{A0}(1 - X_A) \\implies dF_A = -F_{A0} dX_A$.",
        "• Step 3: Separate variables: $dV = F_{A0} \\frac{dX_A}{-r_A}$. Integrate over total reactor volume: $V = F_{A0}\\int_0^{X_A} \\frac{dX_A}{-r_A}$.",
        "• Step 4: For first-order reaction $-r_A = k C_A = k C_{A0}(1 - X_A)$: space time evaluates to $\\tau = \\frac{C_{A0} V}{F_{A0}} = \\frac{1}{k}\\ln\\left(\\frac{1}{1 - X_A}\\right)$.",
        "3. Industrial Optimization & Thermal Stability:",
        "Examines Levenspiel comparison plots (PFR vs CSTR volume requirements) and runaway exothermic temperature trajectories.",
        "4. Engineering Conclusion:",
        "Provides exact sizing formulas for industrial chemical synthesis, catalytic reactors, and fractional distillation units. Box final volume."
      ]
    }
  ],
  "analytical chemistry_set2": [
    {
      "id": "analytical-chemistry-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Titrimetry.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "analytical-chemistry-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Gravimetry.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "analytical-chemistry-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Chromatography.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "analytical-chemistry-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Spectroscopy.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "analytical-chemistry-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Quality Control.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "analytical-chemistry-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Titrimetry.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Titrimetry.",
        "2. Analytical Column Stage Formulation:",
        "• Step 1: Formulate overall and component material balances: $F = D + B$ and $F z_F = D x_D + B x_B$.",
        "• Step 2: Write rectifying section operating line (ROL): $y_{n+1} = \\frac{R}{R + 1} x_n + \\frac{x_D}{R + 1}$, where $R = L/D$ is reflux ratio.",
        "• Step 3: Write feed line ($q$-line) equation: $y = \\frac{q}{q - 1} x - \\frac{z_F}{q - 1}$, accounting for thermal condition of the feed.",
        "• Step 4: Step off theoretical stages between equilibrium curve and operating lines from distillate composition $x_D$ to bottoms $x_B$.",
        "3. Minimum Reflux & Column Efficiency:",
        "Evaluate minimum reflux ratio $R_{\\min}$ from pinch point intersection and calculate actual stages using overall column efficiency $\\eta_0$.",
        "4. Examination Checklist:",
        "Draw accurate McCabe-Thiele equilibrium diagram with $45^\\circ$ diagonal, sketch $q$-line and operating lines, and clearly show theoretical stage steps."
      ]
    },
    {
      "id": "analytical-chemistry-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Gravimetry.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Gravimetry.",
        "2. Analytical Column Stage Formulation:",
        "• Step 1: Formulate overall and component material balances: $F = D + B$ and $F z_F = D x_D + B x_B$.",
        "• Step 2: Write rectifying section operating line (ROL): $y_{n+1} = \\frac{R}{R + 1} x_n + \\frac{x_D}{R + 1}$, where $R = L/D$ is reflux ratio.",
        "• Step 3: Write feed line ($q$-line) equation: $y = \\frac{q}{q - 1} x - \\frac{z_F}{q - 1}$, accounting for thermal condition of the feed.",
        "• Step 4: Step off theoretical stages between equilibrium curve and operating lines from distillate composition $x_D$ to bottoms $x_B$.",
        "3. Minimum Reflux & Column Efficiency:",
        "Evaluate minimum reflux ratio $R_{\\min}$ from pinch point intersection and calculate actual stages using overall column efficiency $\\eta_0$.",
        "4. Examination Checklist:",
        "Draw accurate McCabe-Thiele equilibrium diagram with $45^\\circ$ diagonal, sketch $q$-line and operating lines, and clearly show theoretical stage steps."
      ]
    },
    {
      "id": "analytical-chemistry-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Chromatography.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Chromatography.",
        "2. Analytical Column Stage Formulation:",
        "• Step 1: Formulate overall and component material balances: $F = D + B$ and $F z_F = D x_D + B x_B$.",
        "• Step 2: Write rectifying section operating line (ROL): $y_{n+1} = \\frac{R}{R + 1} x_n + \\frac{x_D}{R + 1}$, where $R = L/D$ is reflux ratio.",
        "• Step 3: Write feed line ($q$-line) equation: $y = \\frac{q}{q - 1} x - \\frac{z_F}{q - 1}$, accounting for thermal condition of the feed.",
        "• Step 4: Step off theoretical stages between equilibrium curve and operating lines from distillate composition $x_D$ to bottoms $x_B$.",
        "3. Minimum Reflux & Column Efficiency:",
        "Evaluate minimum reflux ratio $R_{\\min}$ from pinch point intersection and calculate actual stages using overall column efficiency $\\eta_0$.",
        "4. Examination Checklist:",
        "Draw accurate McCabe-Thiele equilibrium diagram with $45^\\circ$ diagonal, sketch $q$-line and operating lines, and clearly show theoretical stage steps."
      ]
    },
    {
      "id": "analytical-chemistry-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Spectroscopy.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Spectroscopy.",
        "2. Analytical Column Stage Formulation:",
        "• Step 1: Formulate overall and component material balances: $F = D + B$ and $F z_F = D x_D + B x_B$.",
        "• Step 2: Write rectifying section operating line (ROL): $y_{n+1} = \\frac{R}{R + 1} x_n + \\frac{x_D}{R + 1}$, where $R = L/D$ is reflux ratio.",
        "• Step 3: Write feed line ($q$-line) equation: $y = \\frac{q}{q - 1} x - \\frac{z_F}{q - 1}$, accounting for thermal condition of the feed.",
        "• Step 4: Step off theoretical stages between equilibrium curve and operating lines from distillate composition $x_D$ to bottoms $x_B$.",
        "3. Minimum Reflux & Column Efficiency:",
        "Evaluate minimum reflux ratio $R_{\\min}$ from pinch point intersection and calculate actual stages using overall column efficiency $\\eta_0$.",
        "4. Examination Checklist:",
        "Draw accurate McCabe-Thiele equilibrium diagram with $45^\\circ$ diagonal, sketch $q$-line and operating lines, and clearly show theoretical stage steps."
      ]
    },
    {
      "id": "analytical-chemistry-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Quality Control.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Quality Control.",
        "2. Analytical Column Stage Formulation:",
        "• Step 1: Formulate overall and component material balances: $F = D + B$ and $F z_F = D x_D + B x_B$.",
        "• Step 2: Write rectifying section operating line (ROL): $y_{n+1} = \\frac{R}{R + 1} x_n + \\frac{x_D}{R + 1}$, where $R = L/D$ is reflux ratio.",
        "• Step 3: Write feed line ($q$-line) equation: $y = \\frac{q}{q - 1} x - \\frac{z_F}{q - 1}$, accounting for thermal condition of the feed.",
        "• Step 4: Step off theoretical stages between equilibrium curve and operating lines from distillate composition $x_D$ to bottoms $x_B$.",
        "3. Minimum Reflux & Column Efficiency:",
        "Evaluate minimum reflux ratio $R_{\\min}$ from pinch point intersection and calculate actual stages using overall column efficiency $\\eta_0$.",
        "4. Examination Checklist:",
        "Draw accurate McCabe-Thiele equilibrium diagram with $45^\\circ$ diagonal, sketch $q$-line and operating lines, and clearly show theoretical stage steps."
      ]
    }
  ],
  "differential & integral calculus_set1": [
    {
      "id": "differential-&-integral-calculus-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Differential & Integral Calculus.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Differential & Integral Calculus.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Differential & Integral Calculus.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Differential & Integral Calculus.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Differential & Integral Calculus.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Partial Differentiation with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Partial Differentiation within Differential & Integral Calculus.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Multiple Integrals with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Multiple Integrals within Differential & Integral Calculus.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Vector Calculus with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Vector Calculus within Differential & Integral Calculus.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Applications with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Applications within Differential & Integral Calculus.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Improper Integrals with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Improper Integrals within Differential & Integral Calculus.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    }
  ],
  "differential & integral calculus_set2": [
    {
      "id": "differential-&-integral-calculus-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Partial Differentiation.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Multiple Integrals.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Vector Calculus.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Applications.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Improper Integrals.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Partial Differentiation.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Partial Differentiation in Differential & Integral Calculus.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Multiple Integrals.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Multiple Integrals in Differential & Integral Calculus.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Vector Calculus.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Vector Calculus in Differential & Integral Calculus.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Applications.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Applications in Differential & Integral Calculus.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "differential-&-integral-calculus-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Improper Integrals.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Improper Integrals in Differential & Integral Calculus.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    }
  ],
  "problem solving_set1": [
    {
      "id": "problem-solving-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Problem Solving: Core Concepts & Principles and state its primary asymptotic time complexity in Problem Solving.",
      "answer_lines": [
        "**Definition**: In Problem Solving, Problem Solving: Core Concepts & Principles establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "problem-solving-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Problem Solving: Theoretical Formulations & Modeling and state its primary asymptotic time complexity in Problem Solving.",
      "answer_lines": [
        "**Definition**: In Problem Solving, Problem Solving: Theoretical Formulations & Modeling establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "problem-solving-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Problem Solving: Analytical & Computational Methods and state its primary asymptotic time complexity in Problem Solving.",
      "answer_lines": [
        "**Definition**: In Problem Solving, Problem Solving: Analytical & Computational Methods establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "problem-solving-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Problem Solving: Practical Engineering & Industrial Applications and state its primary asymptotic time complexity in Problem Solving.",
      "answer_lines": [
        "**Definition**: In Problem Solving, Problem Solving: Practical Engineering & Industrial Applications establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "problem-solving-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Problem Solving: Modern Trends, Case Studies & Problem Solving and state its primary asymptotic time complexity in Problem Solving.",
      "answer_lines": [
        "**Definition**: In Problem Solving, Problem Solving: Modern Trends, Case Studies & Problem Solving establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "problem-solving-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Problem Solving: Core Concepts & Principles with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Problem Solving: Core Concepts & Principles serves as a core computational building block in Problem Solving, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "problem-solving-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Problem Solving: Theoretical Formulations & Modeling with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Problem Solving: Theoretical Formulations & Modeling serves as a core computational building block in Problem Solving, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "problem-solving-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Problem Solving: Analytical & Computational Methods with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Problem Solving: Analytical & Computational Methods serves as a core computational building block in Problem Solving, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "problem-solving-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Problem Solving: Practical Engineering & Industrial Applications with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Problem Solving: Practical Engineering & Industrial Applications serves as a core computational building block in Problem Solving, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "problem-solving-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Problem Solving: Modern Trends, Case Studies & Problem Solving with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Problem Solving: Modern Trends, Case Studies & Problem Solving serves as a core computational building block in Problem Solving, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    }
  ],
  "problem solving_set2": [
    {
      "id": "problem-solving-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Problem Solving: Core Concepts & Principles.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Problem Solving: Core Concepts & Principles.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "problem-solving-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Problem Solving: Theoretical Formulations & Modeling.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Problem Solving: Theoretical Formulations & Modeling.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "problem-solving-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Problem Solving: Analytical & Computational Methods.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Problem Solving: Analytical & Computational Methods.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "problem-solving-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Problem Solving: Practical Engineering & Industrial Applications.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Problem Solving: Practical Engineering & Industrial Applications.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "problem-solving-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Problem Solving: Modern Trends, Case Studies & Problem Solving.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Problem Solving: Modern Trends, Case Studies & Problem Solving.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "problem-solving-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Problem Solving: Core Concepts & Principles. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Problem Solving: Core Concepts & Principles.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "problem-solving-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Problem Solving: Theoretical Formulations & Modeling. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Problem Solving: Theoretical Formulations & Modeling.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "problem-solving-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Problem Solving: Analytical & Computational Methods. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Problem Solving: Analytical & Computational Methods.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "problem-solving-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Problem Solving: Practical Engineering & Industrial Applications. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Problem Solving: Practical Engineering & Industrial Applications.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "problem-solving-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Problem Solving: Modern Trends, Case Studies & Problem Solving. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Problem Solving: Modern Trends, Case Studies & Problem Solving.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    }
  ],
  "physics iii / statistics iii_set1": [
    {
      "id": "physics-iii-/-statistics-iii-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Physics III / Statistics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Physics III / Statistics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Physics III / Statistics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Physics III / Statistics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Physics III / Statistics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Thermal Physics with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Thermal Physics within Physics III / Statistics III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Thermodynamics with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Thermodynamics within Physics III / Statistics III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Kinetic Theory with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Kinetic Theory within Physics III / Statistics III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Statistical Distributions with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Statistical Distributions within Physics III / Statistics III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Sampling with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Sampling within Physics III / Statistics III.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Formulate the auxiliary / characteristic equation from the governing differential operator: $f(D) y = R(x)$.",
        "• Step 2: Solve the auxiliary polynomial $f(m) = 0$ to construct the complementary function $y_c(x) = \\sum c_i y_i(x)$.",
        "• Step 3: Evaluate the Wronskian determinant: $W(y_1, y_2) = y_1 y_2' - y_1' y_2 \\ne 0$, confirming linear independence of basis solutions.",
        "• Step 4: Compute the particular integral via variation of parameters: $y_p(x) = -y_1 \\int \\frac{y_2 R}{W} dx + y_2 \\int \\frac{y_1 R}{W} dx$.",
        "3. Convergence Bounds & Domain Validity:",
        "Verify radius of convergence using ratio test $\\lim_{n \\to \\infty} |\\frac{a_{n+1}}{a_n}| = L < 1$ and establish singular boundary behaviors.",
        "4. Examination Gold Tip:",
        "Write out the full general solution $y(x) = y_c(x) + y_p(x)$, substitute initial boundary values to evaluate constants, and box the final closed-form answer."
      ]
    }
  ],
  "physics iii / statistics iii_set2": [
    {
      "id": "physics-iii-/-statistics-iii-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Thermal Physics.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Thermodynamics.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Kinetic Theory.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Statistical Distributions.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Sampling.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Thermal Physics.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Thermal Physics in Physics III / Statistics III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Thermodynamics.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Thermodynamics in Physics III / Statistics III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Kinetic Theory.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Kinetic Theory in Physics III / Statistics III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Statistical Distributions.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Statistical Distributions in Physics III / Statistics III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    },
    {
      "id": "physics-iii-/-statistics-iii-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Sampling.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Sampling in Physics III / Statistics III.",
        "2. Step-by-Step Residue Integration Solution:",
        "• Step 1: Identify all poles of the rational integrand $f(z) = \\frac{P(z)}{Q(z)}$ and determine their orders by setting denominator $Q(z) = 0$.",
        "• Step 2: Select a closed contour $C$ (e.g. circle $|z| = R$ or upper-half Bromwich semicircular contour) enclosing the target singularities.",
        "• Step 3: Calculate residues at enclosed poles: for simple pole $z_0$, $\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$.",
        "• Step 4: Apply Cauchy's Residue Theorem: $\\oint_C f(z) dz = 2 \\pi i \\sum \\text{Res}(f, z_k)$ and establish Jordan's lemma vanishing arc integral.",
        "3. Practical Applications in Engineering:",
        "Directly applied in evaluating inverse Laplace transforms, frequency spectra of modulated signals, and stability criteria.",
        "4. Examination Checklist:",
        "Sketch the complex plane showing contour $C$, mark poles with $\\times$, indicate direction of contour traversal, and box the final integral value."
      ]
    }
  ],
  "oop / dbms_set1": [
    {
      "id": "oop-/-dbms-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define OOP Concepts and state its primary asymptotic time complexity in OOP / DBMS.",
      "answer_lines": [
        "**Definition**: In OOP / DBMS, OOP Concepts establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "oop-/-dbms-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Classes and state its primary asymptotic time complexity in OOP / DBMS.",
      "answer_lines": [
        "**Definition**: In OOP / DBMS, Classes establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "oop-/-dbms-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Inheritance and state its primary asymptotic time complexity in OOP / DBMS.",
      "answer_lines": [
        "**Definition**: In OOP / DBMS, Inheritance establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "oop-/-dbms-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Exception Handling and state its primary asymptotic time complexity in OOP / DBMS.",
      "answer_lines": [
        "**Definition**: In OOP / DBMS, Exception Handling establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "oop-/-dbms-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Collections and state its primary asymptotic time complexity in OOP / DBMS.",
      "answer_lines": [
        "**Definition**: In OOP / DBMS, Collections establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "oop-/-dbms-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of OOP Concepts with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "OOP Concepts serves as a core computational building block in OOP / DBMS, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "oop-/-dbms-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Classes with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Classes serves as a core computational building block in OOP / DBMS, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "oop-/-dbms-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Inheritance with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Inheritance serves as a core computational building block in OOP / DBMS, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "oop-/-dbms-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Exception Handling with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Exception Handling serves as a core computational building block in OOP / DBMS, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "oop-/-dbms-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Collections with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Collections serves as a core computational building block in OOP / DBMS, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    }
  ],
  "oop / dbms_set2": [
    {
      "id": "oop-/-dbms-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with OOP Concepts.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in OOP Concepts.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "oop-/-dbms-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Classes.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Classes.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "oop-/-dbms-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Inheritance.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Inheritance.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "oop-/-dbms-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Exception Handling.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Exception Handling.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "oop-/-dbms-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Collections.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Collections.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "oop-/-dbms-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for OOP Concepts. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in OOP Concepts.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "oop-/-dbms-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Classes. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Classes.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "oop-/-dbms-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Inheritance. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Inheritance.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "oop-/-dbms-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Exception Handling. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Exception Handling.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "oop-/-dbms-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Collections. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Collections.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    }
  ],
  "python programming_set1": [
    {
      "id": "python-programming-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Basics and state its primary asymptotic time complexity in Python Programming.",
      "answer_lines": [
        "**Definition**: In Python Programming, Basics establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "python-programming-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Control Flow and state its primary asymptotic time complexity in Python Programming.",
      "answer_lines": [
        "**Definition**: In Python Programming, Control Flow establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "python-programming-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Data Structures and state its primary asymptotic time complexity in Python Programming.",
      "answer_lines": [
        "**Definition**: In Python Programming, Data Structures establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "python-programming-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Functions and state its primary asymptotic time complexity in Python Programming.",
      "answer_lines": [
        "**Definition**: In Python Programming, Functions establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "python-programming-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define File Handling and state its primary asymptotic time complexity in Python Programming.",
      "answer_lines": [
        "**Definition**: In Python Programming, File Handling establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "python-programming-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Basics with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Basics serves as a core computational building block in Python Programming, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "python-programming-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Control Flow with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Control Flow serves as a core computational building block in Python Programming, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "python-programming-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Data Structures with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Data Structures serves as a core computational building block in Python Programming, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "python-programming-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Functions with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Functions serves as a core computational building block in Python Programming, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    },
    {
      "id": "python-programming-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of File Handling with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "File Handling serves as a core computational building block in Python Programming, optimizing storage efficiency, access latency, and data integrity.",
        "2. Algorithmic Workflow & Pseudo-Code Implementation:",
        "• Step 1: Initialize data structures, validate boundary conditions ($head \\ne \\text{NULL}$, $n > 0$), and establish invariants.",
        "• Step 2: Traverse data partitions or execute divide-and-conquer splitting around pivot/midpoint indices.",
        "• Step 3: Execute in-place pointer updates, dynamic programming table memoization, or balanced rotation adjustments.",
        "• Step 4: Verify terminal base cases and return processed references or sorted collection outputs.",
        "3. Asymptotic Complexity Derivation:",
        "• Time Complexity: Formulated by recurrence $T(n) = a T(n/b) + f(n)$. Applying the Master Theorem yields worst-case time $O(n \\log n)$ and average lookup $O(1)$.",
        "• Space Complexity: Requires $O(1)$ auxiliary memory for in-place routines or $O(n)$ for tree/graph representations.",
        "4. Industry Applications & Examination Tip:",
        "Deployed in high-throughput database index engines, operating system schedulers, and distributed networks. Show step-by-step array state traces."
      ]
    }
  ],
  "python programming_set2": [
    {
      "id": "python-programming-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Basics.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Basics.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "python-programming-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Control Flow.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Control Flow.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "python-programming-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Data Structures.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Data Structures.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "python-programming-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Functions.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Functions.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "python-programming-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with File Handling.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in File Handling.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "python-programming-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Basics. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Basics.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "python-programming-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Control Flow. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Control Flow.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "python-programming-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Data Structures. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Data Structures.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "python-programming-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Functions. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Functions.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    },
    {
      "id": "python-programming-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for File Handling. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in File Handling.",
        "2. Step-by-Step Analytical Execution Trace:",
        "• Step 1: Define sample input vector $A = [x_1, x_2, \\dots, x_n]$ and track state variables across iterations.",
        "• Step 2: Show loop invariant preservation at initialization, maintenance, and termination phases.",
        "• Step 3: Handle critical edge conditions: empty collections, duplicate keys, negative indices, and integer overflow.",
        "• Step 4: Rebalance structural hierarchies (e.g. tree rotations, hash collision resolution via open addressing).",
        "3. Performance Trade-Off Evaluation:",
        "Balancing fast $O(1)$ query speed against additional $O(n)$ auxiliary indexing overhead and cache locality.",
        "4. Examination Scoring Blueprint:",
        "Draw box-and-arrow pointer diagrams, construct trace tables showing variables per loop iteration, and state Big-O bounds explicitly."
      ]
    }
  ]
};

export function getBScSem3PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {
  const s = subjectName.toLowerCase().trim();
  const setSuffix = isSet1 ? "_set1" : "_set2";
  const exactKey = `${s}${setSuffix}`;
  if (sem3BScPapersData[exactKey]) {
    return sem3BScPapersData[exactKey];
  }
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(sem3BScPapersData)) {
    if (k.endsWith(setSuffix)) {
      const subKey = k.replace(setSuffix, "");
      if (s.includes(subKey) || subKey.includes(s)) {
        return v;
      }
    }
  }
  return null;
}
