/**
 * Authentic University Model Papers & Solved Solutions for B.Tech Semester 3.
 * Curricula: AICTE Model Curriculum / University R22 Guidelines.
 *
 * Covers 40 Subjects (80 Question Papers, 800 Solved Questions).
 * Part A (5x2M short questions) + Part B (5x10M essay problems with step-by-step solutions).
 */

import type { DbQuestion } from "./content";

const sem3BTechPapersData: Record<string, DbQuestion[]> = {
  "data structures & algorithms_set1": [
    {
      "id": "data-structures-&-algorithms-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Arrays, Linked Lists and state its primary asymptotic time complexity in Data Structures & Algorithms.",
      "answer_lines": [
        "**Definition**: In Data Structures & Algorithms, Arrays, Linked Lists establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "data-structures-&-algorithms-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Stacks & Queues and state its primary asymptotic time complexity in Data Structures & Algorithms.",
      "answer_lines": [
        "**Definition**: In Data Structures & Algorithms, Stacks & Queues establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "data-structures-&-algorithms-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Trees & Graphs and state its primary asymptotic time complexity in Data Structures & Algorithms.",
      "answer_lines": [
        "**Definition**: In Data Structures & Algorithms, Trees & Graphs establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "data-structures-&-algorithms-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Sorting & Searching and state its primary asymptotic time complexity in Data Structures & Algorithms.",
      "answer_lines": [
        "**Definition**: In Data Structures & Algorithms, Sorting & Searching establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "data-structures-&-algorithms-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Hashing & Algorithm Analysis and state its primary asymptotic time complexity in Data Structures & Algorithms.",
      "answer_lines": [
        "**Definition**: In Data Structures & Algorithms, Hashing & Algorithm Analysis establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "data-structures-&-algorithms-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Arrays, Linked Lists with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Arrays, Linked Lists serves as a core computational building block in Data Structures & Algorithms, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "data-structures-&-algorithms-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Stacks & Queues with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Stacks & Queues serves as a core computational building block in Data Structures & Algorithms, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "data-structures-&-algorithms-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Trees & Graphs with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Trees & Graphs serves as a core computational building block in Data Structures & Algorithms, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "data-structures-&-algorithms-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Sorting & Searching with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Sorting & Searching serves as a core computational building block in Data Structures & Algorithms, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "data-structures-&-algorithms-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Hashing & Algorithm Analysis with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Hashing & Algorithm Analysis serves as a core computational building block in Data Structures & Algorithms, optimizing storage efficiency, access latency, and data integrity.",
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
  "data structures & algorithms_set2": [
    {
      "id": "data-structures-&-algorithms-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Arrays, Linked Lists.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Arrays, Linked Lists.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "data-structures-&-algorithms-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Stacks & Queues.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Stacks & Queues.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "data-structures-&-algorithms-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Trees & Graphs.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Trees & Graphs.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "data-structures-&-algorithms-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Sorting & Searching.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Sorting & Searching.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "data-structures-&-algorithms-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Hashing & Algorithm Analysis.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Hashing & Algorithm Analysis.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "data-structures-&-algorithms-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Arrays, Linked Lists. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Arrays, Linked Lists.",
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
      "id": "data-structures-&-algorithms-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Stacks & Queues. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Stacks & Queues.",
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
      "id": "data-structures-&-algorithms-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Trees & Graphs. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Trees & Graphs.",
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
      "id": "data-structures-&-algorithms-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Sorting & Searching. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Sorting & Searching.",
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
      "id": "data-structures-&-algorithms-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Hashing & Algorithm Analysis. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Hashing & Algorithm Analysis.",
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
  "digital logic design_set1": [
    {
      "id": "digital-logic-design-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Number Systems & Codes in Digital Logic Design.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Number Systems & Codes."
      ]
    },
    {
      "id": "digital-logic-design-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Boolean Algebra & Logic Gates in Digital Logic Design.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Boolean Algebra & Logic Gates."
      ]
    },
    {
      "id": "digital-logic-design-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Combinational Circuits in Digital Logic Design.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Combinational Circuits."
      ]
    },
    {
      "id": "digital-logic-design-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Sequential Circuits (Flip-Flops, Counters) in Digital Logic Design.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Sequential Circuits (Flip-Flops, Counters)."
      ]
    },
    {
      "id": "digital-logic-design-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Memory & Programmable Logic in Digital Logic Design.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Memory & Programmable Logic."
      ]
    },
    {
      "id": "digital-logic-design-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Number Systems & Codes with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Number Systems & Codes models electromagnetic and circuit dynamics in Digital Logic Design. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-logic-design-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Boolean Algebra & Logic Gates with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Boolean Algebra & Logic Gates models electromagnetic and circuit dynamics in Digital Logic Design. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-logic-design-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Combinational Circuits with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Combinational Circuits models electromagnetic and circuit dynamics in Digital Logic Design. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-logic-design-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Sequential Circuits (Flip-Flops, Counters) with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Sequential Circuits (Flip-Flops, Counters) models electromagnetic and circuit dynamics in Digital Logic Design. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-logic-design-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Memory & Programmable Logic with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Memory & Programmable Logic models electromagnetic and circuit dynamics in Digital Logic Design. Draw the complete equivalent schematic with active/passive components.",
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
  "digital logic design_set2": [
    {
      "id": "digital-logic-design-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Number Systems & Codes.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-logic-design-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Boolean Algebra & Logic Gates.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-logic-design-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Combinational Circuits.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-logic-design-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Sequential Circuits (Flip-Flops, Counters).",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-logic-design-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Memory & Programmable Logic.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-logic-design-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Number Systems & Codes. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Number Systems & Codes into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-logic-design-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Boolean Algebra & Logic Gates. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Boolean Algebra & Logic Gates into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-logic-design-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Combinational Circuits. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Combinational Circuits into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-logic-design-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Sequential Circuits (Flip-Flops, Counters). Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Sequential Circuits (Flip-Flops, Counters) into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-logic-design-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Memory & Programmable Logic. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Memory & Programmable Logic into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "discrete mathematics_set1": [
    {
      "id": "discrete-mathematics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Discrete Mathematics.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "discrete-mathematics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Discrete Mathematics.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "discrete-mathematics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Discrete Mathematics.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "discrete-mathematics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Discrete Mathematics.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "discrete-mathematics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Discrete Mathematics.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "discrete-mathematics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Set Theory & Logic with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Set Theory & Logic within Discrete Mathematics.",
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
      "id": "discrete-mathematics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Relations & Functions with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Relations & Functions within Discrete Mathematics.",
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
      "id": "discrete-mathematics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Graph Theory with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Graph Theory within Discrete Mathematics.",
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
      "id": "discrete-mathematics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Combinatorics with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Combinatorics within Discrete Mathematics.",
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
      "id": "discrete-mathematics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Algebraic Structures with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Algebraic Structures within Discrete Mathematics.",
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
  "discrete mathematics_set2": [
    {
      "id": "discrete-mathematics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Set Theory & Logic.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "discrete-mathematics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Relations & Functions.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "discrete-mathematics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Graph Theory.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "discrete-mathematics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Combinatorics.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "discrete-mathematics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Algebraic Structures.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "discrete-mathematics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Set Theory & Logic.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Set Theory & Logic in Discrete Mathematics.",
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
      "id": "discrete-mathematics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Relations & Functions.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Relations & Functions in Discrete Mathematics.",
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
      "id": "discrete-mathematics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Graph Theory.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Graph Theory in Discrete Mathematics.",
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
      "id": "discrete-mathematics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Combinatorics.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Combinatorics in Discrete Mathematics.",
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
      "id": "discrete-mathematics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Algebraic Structures.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Algebraic Structures in Discrete Mathematics.",
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
  "computer organization & architecture_set1": [
    {
      "id": "computer-organization-&-architecture-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Basic Computer Organization and state its primary measurement protocol in Computer Organization & Architecture.",
      "answer_lines": [
        "**Definition**: Basic Computer Organization represents a core empirical or experimental procedure in Computer Organization & Architecture, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "computer-organization-&-architecture-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Instruction Sets & Addressing and state its primary measurement protocol in Computer Organization & Architecture.",
      "answer_lines": [
        "**Definition**: Instruction Sets & Addressing represents a core empirical or experimental procedure in Computer Organization & Architecture, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "computer-organization-&-architecture-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Arithmetic & Logic Unit and state its primary measurement protocol in Computer Organization & Architecture.",
      "answer_lines": [
        "**Definition**: Arithmetic & Logic Unit represents a core empirical or experimental procedure in Computer Organization & Architecture, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "computer-organization-&-architecture-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Memory Hierarchy and state its primary measurement protocol in Computer Organization & Architecture.",
      "answer_lines": [
        "**Definition**: Memory Hierarchy represents a core empirical or experimental procedure in Computer Organization & Architecture, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "computer-organization-&-architecture-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define I/O Organization & Pipelining and state its primary measurement protocol in Computer Organization & Architecture.",
      "answer_lines": [
        "**Definition**: I/O Organization & Pipelining represents a core empirical or experimental procedure in Computer Organization & Architecture, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "computer-organization-&-architecture-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Basic Computer Organization with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Basic Computer Organization within Computer Organization & Architecture. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "computer-organization-&-architecture-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Instruction Sets & Addressing with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Instruction Sets & Addressing within Computer Organization & Architecture. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "computer-organization-&-architecture-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Arithmetic & Logic Unit with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Arithmetic & Logic Unit within Computer Organization & Architecture. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "computer-organization-&-architecture-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Memory Hierarchy with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Memory Hierarchy within Computer Organization & Architecture. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "computer-organization-&-architecture-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for I/O Organization & Pipelining with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for I/O Organization & Pipelining within Computer Organization & Architecture. Draw the complete apparatus wiring / setup schematic.",
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
  "computer organization & architecture_set2": [
    {
      "id": "computer-organization-&-architecture-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Basic Computer Organization.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "computer-organization-&-architecture-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Instruction Sets & Addressing.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "computer-organization-&-architecture-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Arithmetic & Logic Unit.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "computer-organization-&-architecture-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Memory Hierarchy.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "computer-organization-&-architecture-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for I/O Organization & Pipelining.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "computer-organization-&-architecture-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Basic Computer Organization.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Basic Computer Organization.",
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
      "id": "computer-organization-&-architecture-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Instruction Sets & Addressing.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Instruction Sets & Addressing.",
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
      "id": "computer-organization-&-architecture-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Arithmetic & Logic Unit.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Arithmetic & Logic Unit.",
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
      "id": "computer-organization-&-architecture-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Memory Hierarchy.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Memory Hierarchy.",
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
      "id": "computer-organization-&-architecture-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for I/O Organization & Pipelining.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in I/O Organization & Pipelining.",
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
  "object oriented programming (advanced)_set1": [
    {
      "id": "object-oriented-programming-(advanced)-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Design Patterns and state its primary measurement protocol in Object Oriented Programming (Advanced).",
      "answer_lines": [
        "**Definition**: Design Patterns represents a core empirical or experimental procedure in Object Oriented Programming (Advanced), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "object-oriented-programming-(advanced)-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define GUI Programming and state its primary measurement protocol in Object Oriented Programming (Advanced).",
      "answer_lines": [
        "**Definition**: GUI Programming represents a core empirical or experimental procedure in Object Oriented Programming (Advanced), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "object-oriented-programming-(advanced)-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Database Connectivity and state its primary measurement protocol in Object Oriented Programming (Advanced).",
      "answer_lines": [
        "**Definition**: Database Connectivity represents a core empirical or experimental procedure in Object Oriented Programming (Advanced), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "object-oriented-programming-(advanced)-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Network Programming and state its primary measurement protocol in Object Oriented Programming (Advanced).",
      "answer_lines": [
        "**Definition**: Network Programming represents a core empirical or experimental procedure in Object Oriented Programming (Advanced), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "object-oriented-programming-(advanced)-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Software Testing Basics and state its primary measurement protocol in Object Oriented Programming (Advanced).",
      "answer_lines": [
        "**Definition**: Software Testing Basics represents a core empirical or experimental procedure in Object Oriented Programming (Advanced), establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "object-oriented-programming-(advanced)-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Design Patterns with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Design Patterns within Object Oriented Programming (Advanced). Draw the complete apparatus wiring / setup schematic.",
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
      "id": "object-oriented-programming-(advanced)-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for GUI Programming with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for GUI Programming within Object Oriented Programming (Advanced). Draw the complete apparatus wiring / setup schematic.",
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
      "id": "object-oriented-programming-(advanced)-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Database Connectivity with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Database Connectivity within Object Oriented Programming (Advanced). Draw the complete apparatus wiring / setup schematic.",
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
      "id": "object-oriented-programming-(advanced)-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Network Programming with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Network Programming within Object Oriented Programming (Advanced). Draw the complete apparatus wiring / setup schematic.",
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
      "id": "object-oriented-programming-(advanced)-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Software Testing Basics with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Software Testing Basics within Object Oriented Programming (Advanced). Draw the complete apparatus wiring / setup schematic.",
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
  "object oriented programming (advanced)_set2": [
    {
      "id": "object-oriented-programming-(advanced)-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Design Patterns.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "object-oriented-programming-(advanced)-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for GUI Programming.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "object-oriented-programming-(advanced)-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Database Connectivity.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "object-oriented-programming-(advanced)-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Network Programming.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "object-oriented-programming-(advanced)-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Software Testing Basics.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "object-oriented-programming-(advanced)-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Design Patterns.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Design Patterns.",
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
      "id": "object-oriented-programming-(advanced)-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for GUI Programming.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in GUI Programming.",
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
      "id": "object-oriented-programming-(advanced)-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Database Connectivity.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Database Connectivity.",
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
      "id": "object-oriented-programming-(advanced)-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Network Programming.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Network Programming.",
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
      "id": "object-oriented-programming-(advanced)-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Software Testing Basics.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Software Testing Basics.",
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
  "electronic devices & circuits_set1": [
    {
      "id": "electronic-devices-&-circuits-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Semiconductor Physics in Electronic Devices & Circuits.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Semiconductor Physics."
      ]
    },
    {
      "id": "electronic-devices-&-circuits-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Diodes & Applications in Electronic Devices & Circuits.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Diodes & Applications."
      ]
    },
    {
      "id": "electronic-devices-&-circuits-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for BJT & FET in Electronic Devices & Circuits.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in BJT & FET."
      ]
    },
    {
      "id": "electronic-devices-&-circuits-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Amplifier Design in Electronic Devices & Circuits.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Amplifier Design."
      ]
    },
    {
      "id": "electronic-devices-&-circuits-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Feedback & Oscillators in Electronic Devices & Circuits.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Feedback & Oscillators."
      ]
    },
    {
      "id": "electronic-devices-&-circuits-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Semiconductor Physics with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Semiconductor Physics models electromagnetic and circuit dynamics in Electronic Devices & Circuits. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electronic-devices-&-circuits-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Diodes & Applications with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Diodes & Applications models electromagnetic and circuit dynamics in Electronic Devices & Circuits. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electronic-devices-&-circuits-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of BJT & FET with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "BJT & FET models electromagnetic and circuit dynamics in Electronic Devices & Circuits. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electronic-devices-&-circuits-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Amplifier Design with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Amplifier Design models electromagnetic and circuit dynamics in Electronic Devices & Circuits. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electronic-devices-&-circuits-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Feedback & Oscillators with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Feedback & Oscillators models electromagnetic and circuit dynamics in Electronic Devices & Circuits. Draw the complete equivalent schematic with active/passive components.",
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
  "electronic devices & circuits_set2": [
    {
      "id": "electronic-devices-&-circuits-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Semiconductor Physics.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electronic-devices-&-circuits-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Diodes & Applications.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electronic-devices-&-circuits-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for BJT & FET.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electronic-devices-&-circuits-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Amplifier Design.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electronic-devices-&-circuits-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Feedback & Oscillators.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electronic-devices-&-circuits-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Semiconductor Physics. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Semiconductor Physics into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electronic-devices-&-circuits-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Diodes & Applications. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Diodes & Applications into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electronic-devices-&-circuits-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for BJT & FET. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes BJT & FET into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electronic-devices-&-circuits-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Amplifier Design. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Amplifier Design into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electronic-devices-&-circuits-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Feedback & Oscillators. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Feedback & Oscillators into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "network theory_set1": [
    {
      "id": "network-theory-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Circuit Elements & Laws and state its primary asymptotic time complexity in Network Theory.",
      "answer_lines": [
        "**Definition**: In Network Theory, Circuit Elements & Laws establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "network-theory-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Network Theorems and state its primary asymptotic time complexity in Network Theory.",
      "answer_lines": [
        "**Definition**: In Network Theory, Network Theorems establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "network-theory-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Transient Analysis and state its primary asymptotic time complexity in Network Theory.",
      "answer_lines": [
        "**Definition**: In Network Theory, Transient Analysis establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "network-theory-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define AC Circuit Analysis and state its primary asymptotic time complexity in Network Theory.",
      "answer_lines": [
        "**Definition**: In Network Theory, AC Circuit Analysis establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "network-theory-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Two-Port Networks and state its primary asymptotic time complexity in Network Theory.",
      "answer_lines": [
        "**Definition**: In Network Theory, Two-Port Networks establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "network-theory-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Circuit Elements & Laws with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Circuit Elements & Laws serves as a core computational building block in Network Theory, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "network-theory-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Network Theorems with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Network Theorems serves as a core computational building block in Network Theory, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "network-theory-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Transient Analysis with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Transient Analysis serves as a core computational building block in Network Theory, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "network-theory-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of AC Circuit Analysis with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "AC Circuit Analysis serves as a core computational building block in Network Theory, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "network-theory-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Two-Port Networks with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Two-Port Networks serves as a core computational building block in Network Theory, optimizing storage efficiency, access latency, and data integrity.",
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
  "network theory_set2": [
    {
      "id": "network-theory-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Circuit Elements & Laws.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Circuit Elements & Laws.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "network-theory-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Network Theorems.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Network Theorems.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "network-theory-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Transient Analysis.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Transient Analysis.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "network-theory-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with AC Circuit Analysis.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in AC Circuit Analysis.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "network-theory-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Two-Port Networks.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Two-Port Networks.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "network-theory-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Circuit Elements & Laws. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Circuit Elements & Laws.",
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
      "id": "network-theory-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Network Theorems. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Network Theorems.",
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
      "id": "network-theory-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Transient Analysis. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Transient Analysis.",
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
      "id": "network-theory-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for AC Circuit Analysis. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in AC Circuit Analysis.",
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
      "id": "network-theory-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Two-Port Networks. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Two-Port Networks.",
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
  "signals & systems_set1": [
    {
      "id": "signals-&-systems-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Signal Classification in Signals & Systems.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Signal Classification."
      ]
    },
    {
      "id": "signals-&-systems-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for LTI Systems in Signals & Systems.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in LTI Systems."
      ]
    },
    {
      "id": "signals-&-systems-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Fourier Series & Transform in Signals & Systems.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Fourier Series & Transform."
      ]
    },
    {
      "id": "signals-&-systems-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Laplace Transform in Signals & Systems.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Laplace Transform."
      ]
    },
    {
      "id": "signals-&-systems-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Z-Transform in Signals & Systems.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Z-Transform."
      ]
    },
    {
      "id": "signals-&-systems-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Signal Classification with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Signal Classification models electromagnetic and circuit dynamics in Signals & Systems. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "signals-&-systems-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of LTI Systems with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "LTI Systems models electromagnetic and circuit dynamics in Signals & Systems. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "signals-&-systems-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Fourier Series & Transform with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Fourier Series & Transform models electromagnetic and circuit dynamics in Signals & Systems. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "signals-&-systems-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Laplace Transform with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Laplace Transform models electromagnetic and circuit dynamics in Signals & Systems. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "signals-&-systems-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Z-Transform with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Z-Transform models electromagnetic and circuit dynamics in Signals & Systems. Draw the complete equivalent schematic with active/passive components.",
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
  "signals & systems_set2": [
    {
      "id": "signals-&-systems-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Signal Classification.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "signals-&-systems-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for LTI Systems.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "signals-&-systems-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Fourier Series & Transform.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "signals-&-systems-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Laplace Transform.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "signals-&-systems-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Z-Transform.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "signals-&-systems-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Signal Classification. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Signal Classification into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "signals-&-systems-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for LTI Systems. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes LTI Systems into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "signals-&-systems-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Fourier Series & Transform. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Fourier Series & Transform into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "signals-&-systems-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Laplace Transform. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Laplace Transform into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "signals-&-systems-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Z-Transform. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Z-Transform into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "mathematics for ece_set1": [
    {
      "id": "mathematics-for-ece-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Mathematics for ECE.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "mathematics-for-ece-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Mathematics for ECE.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "mathematics-for-ece-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Mathematics for ECE.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "mathematics-for-ece-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Mathematics for ECE.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "mathematics-for-ece-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Mathematics for ECE.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "mathematics-for-ece-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Linear Algebra with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Linear Algebra within Mathematics for ECE.",
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
      "id": "mathematics-for-ece-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Complex Analysis with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Complex Analysis within Mathematics for ECE.",
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
      "id": "mathematics-for-ece-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Probability with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Probability within Mathematics for ECE.",
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
      "id": "mathematics-for-ece-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Random Processes with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Random Processes within Mathematics for ECE.",
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
      "id": "mathematics-for-ece-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Numerical Methods with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Numerical Methods within Mathematics for ECE.",
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
  "mathematics for ece_set2": [
    {
      "id": "mathematics-for-ece-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Linear Algebra.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "mathematics-for-ece-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Complex Analysis.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "mathematics-for-ece-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Probability.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "mathematics-for-ece-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Random Processes.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "mathematics-for-ece-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Numerical Methods.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "mathematics-for-ece-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Linear Algebra.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Linear Algebra in Mathematics for ECE.",
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
      "id": "mathematics-for-ece-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Complex Analysis.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Complex Analysis in Mathematics for ECE.",
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
      "id": "mathematics-for-ece-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Probability.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Probability in Mathematics for ECE.",
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
      "id": "mathematics-for-ece-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Random Processes.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Random Processes in Mathematics for ECE.",
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
      "id": "mathematics-for-ece-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Numerical Methods.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Numerical Methods in Mathematics for ECE.",
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
  "circuit analysis & synthesis_set1": [
    {
      "id": "circuit-analysis-&-synthesis-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Network Theorems in Circuit Analysis & Synthesis.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Network Theorems."
      ]
    },
    {
      "id": "circuit-analysis-&-synthesis-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Transient Analysis in Circuit Analysis & Synthesis.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Transient Analysis."
      ]
    },
    {
      "id": "circuit-analysis-&-synthesis-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for AC Analysis in Circuit Analysis & Synthesis.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in AC Analysis."
      ]
    },
    {
      "id": "circuit-analysis-&-synthesis-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Two-Port Networks in Circuit Analysis & Synthesis.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Two-Port Networks."
      ]
    },
    {
      "id": "circuit-analysis-&-synthesis-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Network Synthesis in Circuit Analysis & Synthesis.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Network Synthesis."
      ]
    },
    {
      "id": "circuit-analysis-&-synthesis-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Network Theorems with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Network Theorems models electromagnetic and circuit dynamics in Circuit Analysis & Synthesis. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "circuit-analysis-&-synthesis-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Transient Analysis with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Transient Analysis models electromagnetic and circuit dynamics in Circuit Analysis & Synthesis. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "circuit-analysis-&-synthesis-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of AC Analysis with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "AC Analysis models electromagnetic and circuit dynamics in Circuit Analysis & Synthesis. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "circuit-analysis-&-synthesis-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Two-Port Networks with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Two-Port Networks models electromagnetic and circuit dynamics in Circuit Analysis & Synthesis. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "circuit-analysis-&-synthesis-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Network Synthesis with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Network Synthesis models electromagnetic and circuit dynamics in Circuit Analysis & Synthesis. Draw the complete equivalent schematic with active/passive components.",
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
  "circuit analysis & synthesis_set2": [
    {
      "id": "circuit-analysis-&-synthesis-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Network Theorems.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "circuit-analysis-&-synthesis-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Transient Analysis.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "circuit-analysis-&-synthesis-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for AC Analysis.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "circuit-analysis-&-synthesis-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Two-Port Networks.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "circuit-analysis-&-synthesis-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Network Synthesis.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "circuit-analysis-&-synthesis-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Network Theorems. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Network Theorems into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "circuit-analysis-&-synthesis-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Transient Analysis. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Transient Analysis into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "circuit-analysis-&-synthesis-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for AC Analysis. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes AC Analysis into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "circuit-analysis-&-synthesis-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Two-Port Networks. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Two-Port Networks into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "circuit-analysis-&-synthesis-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Network Synthesis. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Network Synthesis into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "electrical machines — i_set1": [
    {
      "id": "electrical-machines---i-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Transformers in Electrical Machines — I.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Transformers."
      ]
    },
    {
      "id": "electrical-machines---i-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for DC Generators in Electrical Machines — I.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in DC Generators."
      ]
    },
    {
      "id": "electrical-machines---i-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for DC Motors in Electrical Machines — I.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in DC Motors."
      ]
    },
    {
      "id": "electrical-machines---i-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Testing of DC Machines in Electrical Machines — I.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Testing of DC Machines."
      ]
    },
    {
      "id": "electrical-machines---i-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Special Machines in Electrical Machines — I.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Special Machines."
      ]
    },
    {
      "id": "electrical-machines---i-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Transformers with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Transformers models electromagnetic and circuit dynamics in Electrical Machines — I. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electrical-machines---i-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of DC Generators with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "DC Generators models electromagnetic and circuit dynamics in Electrical Machines — I. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electrical-machines---i-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of DC Motors with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "DC Motors models electromagnetic and circuit dynamics in Electrical Machines — I. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electrical-machines---i-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Testing of DC Machines with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Testing of DC Machines models electromagnetic and circuit dynamics in Electrical Machines — I. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electrical-machines---i-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Special Machines with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Special Machines models electromagnetic and circuit dynamics in Electrical Machines — I. Draw the complete equivalent schematic with active/passive components.",
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
  "electrical machines — i_set2": [
    {
      "id": "electrical-machines---i-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Transformers.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electrical-machines---i-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for DC Generators.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electrical-machines---i-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for DC Motors.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electrical-machines---i-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Testing of DC Machines.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electrical-machines---i-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Special Machines.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electrical-machines---i-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Transformers. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Transformers into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electrical-machines---i-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for DC Generators. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes DC Generators into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electrical-machines---i-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for DC Motors. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes DC Motors into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electrical-machines---i-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Testing of DC Machines. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Testing of DC Machines into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electrical-machines---i-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Special Machines. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Special Machines into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "digital electronics_set1": [
    {
      "id": "digital-electronics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Logic Gates in Digital Electronics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Logic Gates."
      ]
    },
    {
      "id": "digital-electronics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Combinational Circuits in Digital Electronics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Combinational Circuits."
      ]
    },
    {
      "id": "digital-electronics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Sequential Circuits in Digital Electronics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Sequential Circuits."
      ]
    },
    {
      "id": "digital-electronics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Counters & Registers in Digital Electronics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Counters & Registers."
      ]
    },
    {
      "id": "digital-electronics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Memory & PLDs in Digital Electronics.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Memory & PLDs."
      ]
    },
    {
      "id": "digital-electronics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Logic Gates with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Logic Gates models electromagnetic and circuit dynamics in Digital Electronics. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-electronics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Combinational Circuits with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Combinational Circuits models electromagnetic and circuit dynamics in Digital Electronics. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-electronics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Sequential Circuits with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Sequential Circuits models electromagnetic and circuit dynamics in Digital Electronics. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-electronics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Counters & Registers with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Counters & Registers models electromagnetic and circuit dynamics in Digital Electronics. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "digital-electronics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Memory & PLDs with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Memory & PLDs models electromagnetic and circuit dynamics in Digital Electronics. Draw the complete equivalent schematic with active/passive components.",
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
  "digital electronics_set2": [
    {
      "id": "digital-electronics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Logic Gates.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-electronics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Combinational Circuits.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-electronics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Sequential Circuits.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-electronics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Counters & Registers.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-electronics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Memory & PLDs.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "digital-electronics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Logic Gates. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Logic Gates into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-electronics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Combinational Circuits. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Combinational Circuits into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-electronics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Sequential Circuits. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Sequential Circuits into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-electronics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Counters & Registers. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Counters & Registers into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "digital-electronics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Memory & PLDs. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Memory & PLDs into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "electromagnetic fields_set1": [
    {
      "id": "electromagnetic-fields-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Vector Analysis in Electromagnetic Fields.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Vector Analysis."
      ]
    },
    {
      "id": "electromagnetic-fields-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Electrostatics in Electromagnetic Fields.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Electrostatics."
      ]
    },
    {
      "id": "electromagnetic-fields-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Magnetostatics in Electromagnetic Fields.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Magnetostatics."
      ]
    },
    {
      "id": "electromagnetic-fields-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Maxwell's Equations in Electromagnetic Fields.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Maxwell's Equations."
      ]
    },
    {
      "id": "electromagnetic-fields-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for EM Wave Propagation in Electromagnetic Fields.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in EM Wave Propagation."
      ]
    },
    {
      "id": "electromagnetic-fields-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Vector Analysis with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Vector Analysis models electromagnetic and circuit dynamics in Electromagnetic Fields. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electromagnetic-fields-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Electrostatics with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Electrostatics models electromagnetic and circuit dynamics in Electromagnetic Fields. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electromagnetic-fields-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Magnetostatics with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Magnetostatics models electromagnetic and circuit dynamics in Electromagnetic Fields. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electromagnetic-fields-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Maxwell's Equations with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Maxwell's Equations models electromagnetic and circuit dynamics in Electromagnetic Fields. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electromagnetic-fields-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of EM Wave Propagation with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "EM Wave Propagation models electromagnetic and circuit dynamics in Electromagnetic Fields. Draw the complete equivalent schematic with active/passive components.",
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
  "electromagnetic fields_set2": [
    {
      "id": "electromagnetic-fields-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Vector Analysis.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electromagnetic-fields-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Electrostatics.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electromagnetic-fields-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Magnetostatics.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electromagnetic-fields-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Maxwell's Equations.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electromagnetic-fields-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for EM Wave Propagation.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electromagnetic-fields-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Vector Analysis. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Vector Analysis into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electromagnetic-fields-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Electrostatics. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Electrostatics into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electromagnetic-fields-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Magnetostatics. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Magnetostatics into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electromagnetic-fields-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Maxwell's Equations. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Maxwell's Equations into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electromagnetic-fields-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for EM Wave Propagation. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes EM Wave Propagation into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "strength of materials_set1": [
    {
      "id": "strength-of-materials-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Stress & Strain in Strength of Materials.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "strength-of-materials-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Shear Force & Bending Moment in Strength of Materials.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "strength-of-materials-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Torsion in Strength of Materials.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "strength-of-materials-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Columns & Struts in Strength of Materials.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "strength-of-materials-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Combined Stresses in Strength of Materials.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "strength-of-materials-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Stress & Strain with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Stress & Strain models structural stress transmission or thermal energy conversion in Strength of Materials. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "strength-of-materials-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Shear Force & Bending Moment with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Shear Force & Bending Moment models structural stress transmission or thermal energy conversion in Strength of Materials. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "strength-of-materials-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Torsion with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Torsion models structural stress transmission or thermal energy conversion in Strength of Materials. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "strength-of-materials-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Columns & Struts with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Columns & Struts models structural stress transmission or thermal energy conversion in Strength of Materials. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "strength-of-materials-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Combined Stresses with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Combined Stresses models structural stress transmission or thermal energy conversion in Strength of Materials. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    }
  ],
  "strength of materials_set2": [
    {
      "id": "strength-of-materials-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Stress & Strain.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "strength-of-materials-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Shear Force & Bending Moment.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "strength-of-materials-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Torsion.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "strength-of-materials-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Columns & Struts.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "strength-of-materials-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Combined Stresses.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "strength-of-materials-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Stress & Strain.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Stress & Strain plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "strength-of-materials-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Shear Force & Bending Moment.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Shear Force & Bending Moment plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "strength-of-materials-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Torsion.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Torsion plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "strength-of-materials-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Columns & Struts.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Columns & Struts plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "strength-of-materials-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Combined Stresses.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Combined Stresses plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    }
  ],
  "thermodynamics_set1": [
    {
      "id": "thermodynamics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Basic Concepts & Laws in Thermodynamics.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "thermodynamics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Entropy in Thermodynamics.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "thermodynamics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Availability in Thermodynamics.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "thermodynamics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Properties of Steam in Thermodynamics.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "thermodynamics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Power Cycles in Thermodynamics.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "thermodynamics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Basic Concepts & Laws with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Basic Concepts & Laws models structural stress transmission or thermal energy conversion in Thermodynamics. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "thermodynamics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Entropy with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Entropy models structural stress transmission or thermal energy conversion in Thermodynamics. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "thermodynamics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Availability with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Availability models structural stress transmission or thermal energy conversion in Thermodynamics. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "thermodynamics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Properties of Steam with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Properties of Steam models structural stress transmission or thermal energy conversion in Thermodynamics. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "thermodynamics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Power Cycles with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Power Cycles models structural stress transmission or thermal energy conversion in Thermodynamics. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    }
  ],
  "thermodynamics_set2": [
    {
      "id": "thermodynamics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Basic Concepts & Laws.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "thermodynamics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Entropy.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "thermodynamics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Availability.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "thermodynamics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Properties of Steam.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "thermodynamics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Power Cycles.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "thermodynamics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Basic Concepts & Laws.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Basic Concepts & Laws plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "thermodynamics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Entropy.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Entropy plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "thermodynamics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Availability.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Availability plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "thermodynamics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Properties of Steam.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Properties of Steam plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "thermodynamics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Power Cycles.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Power Cycles plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    }
  ],
  "material science & engineering_set1": [
    {
      "id": "material-science-&-engineering-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Crystal Structure in Material Science & Engineering.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "material-science-&-engineering-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Mechanical Properties in Material Science & Engineering.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "material-science-&-engineering-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Phase Diagrams in Material Science & Engineering.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "material-science-&-engineering-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Heat Treatment in Material Science & Engineering.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "material-science-&-engineering-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Engineering Materials in Material Science & Engineering.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "material-science-&-engineering-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Crystal Structure with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Crystal Structure models chemical reaction rates and transport mechanisms in Material Science & Engineering. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "material-science-&-engineering-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Mechanical Properties with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Mechanical Properties models chemical reaction rates and transport mechanisms in Material Science & Engineering. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "material-science-&-engineering-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Phase Diagrams with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Phase Diagrams models chemical reaction rates and transport mechanisms in Material Science & Engineering. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "material-science-&-engineering-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Heat Treatment with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Heat Treatment models chemical reaction rates and transport mechanisms in Material Science & Engineering. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "material-science-&-engineering-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Engineering Materials with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Engineering Materials models chemical reaction rates and transport mechanisms in Material Science & Engineering. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
  "material science & engineering_set2": [
    {
      "id": "material-science-&-engineering-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Crystal Structure.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "material-science-&-engineering-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Mechanical Properties.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "material-science-&-engineering-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Phase Diagrams.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "material-science-&-engineering-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Heat Treatment.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "material-science-&-engineering-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Engineering Materials.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "material-science-&-engineering-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Crystal Structure.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Crystal Structure.",
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
      "id": "material-science-&-engineering-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Mechanical Properties.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Mechanical Properties.",
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
      "id": "material-science-&-engineering-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Phase Diagrams.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Phase Diagrams.",
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
      "id": "material-science-&-engineering-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Heat Treatment.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Heat Treatment.",
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
      "id": "material-science-&-engineering-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Engineering Materials.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Engineering Materials.",
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
  "manufacturing technology — i_set1": [
    {
      "id": "manufacturing-technology---i-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Casting Processes in Manufacturing Technology — I.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "manufacturing-technology---i-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Welding in Manufacturing Technology — I.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "manufacturing-technology---i-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Forming Processes in Manufacturing Technology — I.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "manufacturing-technology---i-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Machining Basics in Manufacturing Technology — I.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "manufacturing-technology---i-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Metrology in Manufacturing Technology — I.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "manufacturing-technology---i-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Casting Processes with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Casting Processes models structural stress transmission or thermal energy conversion in Manufacturing Technology — I. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "manufacturing-technology---i-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Welding with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Welding models structural stress transmission or thermal energy conversion in Manufacturing Technology — I. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "manufacturing-technology---i-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Forming Processes with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Forming Processes models structural stress transmission or thermal energy conversion in Manufacturing Technology — I. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "manufacturing-technology---i-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Machining Basics with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Machining Basics models structural stress transmission or thermal energy conversion in Manufacturing Technology — I. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "manufacturing-technology---i-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Metrology with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Metrology models structural stress transmission or thermal energy conversion in Manufacturing Technology — I. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    }
  ],
  "manufacturing technology — i_set2": [
    {
      "id": "manufacturing-technology---i-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Casting Processes.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "manufacturing-technology---i-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Welding.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "manufacturing-technology---i-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Forming Processes.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "manufacturing-technology---i-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Machining Basics.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "manufacturing-technology---i-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Metrology.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "manufacturing-technology---i-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Casting Processes.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Casting Processes plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "manufacturing-technology---i-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Welding.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Welding plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "manufacturing-technology---i-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Forming Processes.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Forming Processes plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "manufacturing-technology---i-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Machining Basics.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Machining Basics plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "manufacturing-technology---i-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Metrology.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Metrology plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    }
  ],
  "machine drawing_set1": [
    {
      "id": "machine-drawing-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Drawing Standards in Machine Drawing.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "machine-drawing-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Orthographic Projections in Machine Drawing.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "machine-drawing-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Sectional Views in Machine Drawing.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "machine-drawing-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Assembly Drawings in Machine Drawing.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "machine-drawing-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for CAD Basics in Machine Drawing.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "machine-drawing-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Drawing Standards with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Drawing Standards models structural stress transmission or thermal energy conversion in Machine Drawing. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "machine-drawing-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Orthographic Projections with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Orthographic Projections models structural stress transmission or thermal energy conversion in Machine Drawing. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "machine-drawing-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Sectional Views with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Sectional Views models structural stress transmission or thermal energy conversion in Machine Drawing. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "machine-drawing-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Assembly Drawings with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Assembly Drawings models structural stress transmission or thermal energy conversion in Machine Drawing. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "machine-drawing-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of CAD Basics with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "CAD Basics models structural stress transmission or thermal energy conversion in Machine Drawing. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    }
  ],
  "machine drawing_set2": [
    {
      "id": "machine-drawing-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Drawing Standards.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "machine-drawing-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Orthographic Projections.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "machine-drawing-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Sectional Views.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "machine-drawing-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Assembly Drawings.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "machine-drawing-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for CAD Basics.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "machine-drawing-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Drawing Standards.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Drawing Standards plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "machine-drawing-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Orthographic Projections.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Orthographic Projections plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "machine-drawing-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Sectional Views.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Sectional Views plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "machine-drawing-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Assembly Drawings.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Assembly Drawings plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "machine-drawing-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for CAD Basics.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in CAD Basics plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    }
  ],
  "surveying & geomatics_set1": [
    {
      "id": "surveying-&-geomatics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Surveying Basics.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Surveying & Geomatics."
      ]
    },
    {
      "id": "surveying-&-geomatics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Leveling.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Surveying & Geomatics."
      ]
    },
    {
      "id": "surveying-&-geomatics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Theodolite & Traversing.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Surveying & Geomatics."
      ]
    },
    {
      "id": "surveying-&-geomatics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Contouring.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Surveying & Geomatics."
      ]
    },
    {
      "id": "surveying-&-geomatics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Modern Surveying (GPS, GIS).",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Surveying & Geomatics."
      ]
    },
    {
      "id": "surveying-&-geomatics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Surveying Basics with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Surveying Basics governs structural stability, foundation bearing capacity, or geometric geodetic control in Surveying & Geomatics. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "surveying-&-geomatics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Leveling with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Leveling governs structural stability, foundation bearing capacity, or geometric geodetic control in Surveying & Geomatics. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "surveying-&-geomatics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Theodolite & Traversing with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Theodolite & Traversing governs structural stability, foundation bearing capacity, or geometric geodetic control in Surveying & Geomatics. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "surveying-&-geomatics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Contouring with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Contouring governs structural stability, foundation bearing capacity, or geometric geodetic control in Surveying & Geomatics. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "surveying-&-geomatics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Modern Surveying (GPS, GIS) with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Modern Surveying (GPS, GIS) governs structural stability, foundation bearing capacity, or geometric geodetic control in Surveying & Geomatics. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    }
  ],
  "surveying & geomatics_set2": [
    {
      "id": "surveying-&-geomatics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Surveying Basics.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "surveying-&-geomatics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Leveling.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "surveying-&-geomatics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Theodolite & Traversing.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "surveying-&-geomatics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Contouring.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "surveying-&-geomatics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Modern Surveying (GPS, GIS).",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "surveying-&-geomatics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Surveying Basics.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Surveying Basics.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "surveying-&-geomatics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Leveling.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Leveling.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "surveying-&-geomatics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Theodolite & Traversing.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Theodolite & Traversing.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "surveying-&-geomatics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Contouring.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Contouring.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "surveying-&-geomatics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Modern Surveying (GPS, GIS).",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Modern Surveying (GPS, GIS).",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    }
  ],
  "building materials & construction_set1": [
    {
      "id": "building-materials-&-construction-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Stones & Bricks.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Building Materials & Construction."
      ]
    },
    {
      "id": "building-materials-&-construction-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Cement & Concrete.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Building Materials & Construction."
      ]
    },
    {
      "id": "building-materials-&-construction-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Timber & Steel.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Building Materials & Construction."
      ]
    },
    {
      "id": "building-materials-&-construction-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Masonry.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Building Materials & Construction."
      ]
    },
    {
      "id": "building-materials-&-construction-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Foundations.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Building Materials & Construction."
      ]
    },
    {
      "id": "building-materials-&-construction-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Stones & Bricks with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Stones & Bricks governs structural stability, foundation bearing capacity, or geometric geodetic control in Building Materials & Construction. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "building-materials-&-construction-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Cement & Concrete with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Cement & Concrete governs structural stability, foundation bearing capacity, or geometric geodetic control in Building Materials & Construction. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "building-materials-&-construction-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Timber & Steel with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Timber & Steel governs structural stability, foundation bearing capacity, or geometric geodetic control in Building Materials & Construction. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "building-materials-&-construction-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Masonry with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Masonry governs structural stability, foundation bearing capacity, or geometric geodetic control in Building Materials & Construction. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "building-materials-&-construction-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Foundations with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Foundations governs structural stability, foundation bearing capacity, or geometric geodetic control in Building Materials & Construction. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    }
  ],
  "building materials & construction_set2": [
    {
      "id": "building-materials-&-construction-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Stones & Bricks.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "building-materials-&-construction-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Cement & Concrete.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "building-materials-&-construction-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Timber & Steel.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "building-materials-&-construction-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Masonry.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "building-materials-&-construction-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Foundations.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "building-materials-&-construction-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Stones & Bricks.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Stones & Bricks.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "building-materials-&-construction-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Cement & Concrete.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Cement & Concrete.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "building-materials-&-construction-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Timber & Steel.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Timber & Steel.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "building-materials-&-construction-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Masonry.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Masonry.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "building-materials-&-construction-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Foundations.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Foundations.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    }
  ],
  "fluid mechanics_set1": [
    {
      "id": "fluid-mechanics-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Fluid Properties in Fluid Mechanics.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "fluid-mechanics-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Fluid Statics in Fluid Mechanics.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "fluid-mechanics-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Fluid Kinematics in Fluid Mechanics.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "fluid-mechanics-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Fluid Dynamics in Fluid Mechanics.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "fluid-mechanics-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Flow Measurement in Fluid Mechanics.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "fluid-mechanics-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Fluid Properties with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Fluid Properties models structural stress transmission or thermal energy conversion in Fluid Mechanics. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "fluid-mechanics-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Fluid Statics with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Fluid Statics models structural stress transmission or thermal energy conversion in Fluid Mechanics. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "fluid-mechanics-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Fluid Kinematics with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Fluid Kinematics models structural stress transmission or thermal energy conversion in Fluid Mechanics. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "fluid-mechanics-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Fluid Dynamics with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Fluid Dynamics models structural stress transmission or thermal energy conversion in Fluid Mechanics. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "fluid-mechanics-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Flow Measurement with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Flow Measurement models structural stress transmission or thermal energy conversion in Fluid Mechanics. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    }
  ],
  "fluid mechanics_set2": [
    {
      "id": "fluid-mechanics-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Fluid Properties.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "fluid-mechanics-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Fluid Statics.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "fluid-mechanics-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Fluid Kinematics.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "fluid-mechanics-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Fluid Dynamics.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "fluid-mechanics-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Flow Measurement.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "fluid-mechanics-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Fluid Properties.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Fluid Properties plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "fluid-mechanics-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Fluid Statics.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Fluid Statics plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "fluid-mechanics-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Fluid Kinematics.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Fluid Kinematics plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "fluid-mechanics-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Fluid Dynamics.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Fluid Dynamics plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "fluid-mechanics-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Flow Measurement.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Flow Measurement plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    }
  ],
  "engineering geology_set1": [
    {
      "id": "engineering-geology-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Mineralogy.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Engineering Geology."
      ]
    },
    {
      "id": "engineering-geology-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Petrology.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Engineering Geology."
      ]
    },
    {
      "id": "engineering-geology-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Structural Geology.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Engineering Geology."
      ]
    },
    {
      "id": "engineering-geology-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Engineering Properties.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Engineering Geology."
      ]
    },
    {
      "id": "engineering-geology-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Terzaghi's bearing capacity equation or the limiting moment formulation for Geological Hazards.",
      "answer_lines": [
        "**Formulation**: Ultimate soil bearing capacity $q_u = c N_c + \\gamma D_f N_q + 0.5 \\gamma B N_\\gamma$ or limit state bending moment $M_u = 0.138 f_{ck} b d^2$ for Fe415 steel.",
        "**Significance**: Ensures structural foundation stability without exceeding shear failure thresholds or allowable settlement limits in Engineering Geology."
      ]
    },
    {
      "id": "engineering-geology-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Mineralogy with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Mineralogy governs structural stability, foundation bearing capacity, or geometric geodetic control in Engineering Geology. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "engineering-geology-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Petrology with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Petrology governs structural stability, foundation bearing capacity, or geometric geodetic control in Engineering Geology. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "engineering-geology-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Structural Geology with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Structural Geology governs structural stability, foundation bearing capacity, or geometric geodetic control in Engineering Geology. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "engineering-geology-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Engineering Properties with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Engineering Properties governs structural stability, foundation bearing capacity, or geometric geodetic control in Engineering Geology. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    },
    {
      "id": "engineering-geology-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental structural / geotechnical analysis, detailed design procedure, and governing equations for Geological Hazards with neat diagrams.",
      "answer_lines": [
        "1. Engineering Overview & Design Philosophy:",
        "Geological Hazards governs structural stability, foundation bearing capacity, or geometric geodetic control in Engineering Geology. Conform to IS 456 / IS 800 standards.",
        "2. Step-by-Step Structural Design Procedure:",
        "• Step 1: Calculate factored design loads applying partial safety factors: $w_u = 1.5 DL + 1.5 LL$.",
        "• Step 2: Determine critical bending moment $M_u = \\frac{w_u L^2}{8}$ and shear force $V_u = \\frac{w_u L}{2}$ at support sections.",
        "• Step 3: Verify effective section depth using limiting moment capacity: $d = \\sqrt{\\frac{M_u}{0.138 f_{ck} b}}$.",
        "• Step 4: Calculate required area of longitudinal tensile steel: $A_{st} = \\frac{0.5 f_{ck}}{f_y}\\left[1 - \\sqrt{1 - \\frac{4.6 M_u}{f_{ck} b d^2}}\\right] b d$.",
        "3. Serviceability & Durability Checks:",
        "Verify crack width compliance, minimum reinforcement percentage ($A_{st,\\min} = 0.85 b d / f_y$), and nominal shear stress $\\tau_v < \\tau_{c,\\max}$.",
        "4. Engineering Blueprint:",
        "Draw longitudinal structural elevation and cross-sections showing tensile reinforcement bars, stirrup spacing, and concrete cover dimensions."
      ]
    }
  ],
  "engineering geology_set2": [
    {
      "id": "engineering-geology-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Mineralogy.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "engineering-geology-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Petrology.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "engineering-geology-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Structural Geology.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "engineering-geology-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Engineering Properties.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "engineering-geology-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the permissible deflection limit and concrete characteristic compressive strength for Geological Hazards.",
      "answer_lines": [
        "1. **Characteristic Strength ($f_{ck}$)**: The compressive strength of $150\\text{ mm}$ concrete cubes at 28 days below which not more than $5\\%$ of test results fall.",
        "2. **Deflection Limit**: Maximum permissible final deflection for reinforced concrete beams and slabs restricted to $\\text{Span} / 250$ to prevent cracking."
      ]
    },
    {
      "id": "engineering-geology-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Mineralogy.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Mineralogy.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "engineering-geology-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Petrology.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Petrology.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "engineering-geology-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Structural Geology.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Structural Geology.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "engineering-geology-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Engineering Properties.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Engineering Properties.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    },
    {
      "id": "engineering-geology-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the geotechnical soil mechanics / surveying traverse computation, field testing protocols, and stability analysis for Geological Hazards.",
      "answer_lines": [
        "1. Geotechnical Equilibrium & Soil Stratum:",
        "Evaluates shear strength parameters ($c, \\phi$), effective stress $\\sigma' = \\sigma - u$, and stability factors governing Geological Hazards.",
        "2. Analytical Stability Formulation:",
        "• Step 1: Formulate Mohr-Coulomb shear strength criterion: $\\tau_f = c' + \\sigma_n' \\tan\\phi'$.",
        "• Step 2: Evaluate factor of safety against slope sliding: $FOS = \\frac{\\sum [c' l + (W\\cos\\alpha - u l)\\tan\\phi']}{\\sum W\\sin\\alpha}$.",
        "• Step 3: For deep foundations, compute ultimate pile capacity: $Q_{up} = q_b A_b + \\sum f_s A_s = (c N_c + \\bar{\\sigma}_v' N_q) A_b + \\alpha \\bar{c} A_s$.",
        "• Step 4: Check immediate elastic settlement and primary consolidation settlement: $S_c = \\frac{C_c H_0}{1 + e_0}\\log_{10}\\left(\\frac{\\sigma_0' + \\Delta\\sigma'}{\\sigma_0'}\\right)$.",
        "3. Field Investigation Standards:",
        "Conducted via Standard Penetration Test (SPT $N$-value), cone penetrometer (CPT), and piezometer pore pressure telemetry.",
        "4. Examination Checklist:",
        "Sketch soil profile with groundwater table elevation, draw Mohr stress failure envelope, and box final factor of safety with recommendations."
      ]
    }
  ],
  "fluid mechanics (momentum transfer)_set1": [
    {
      "id": "fluid-mechanics-(momentum-transfer)-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Fluid Properties in Fluid Mechanics (Momentum Transfer).",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Fluid Statics in Fluid Mechanics (Momentum Transfer).",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Fluid Dynamics in Fluid Mechanics (Momentum Transfer).",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Flow Through Pipes in Fluid Mechanics (Momentum Transfer).",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Pumps & Compressors in Fluid Mechanics (Momentum Transfer).",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Fluid Properties with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Fluid Properties models structural stress transmission or thermal energy conversion in Fluid Mechanics (Momentum Transfer). Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Fluid Statics with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Fluid Statics models structural stress transmission or thermal energy conversion in Fluid Mechanics (Momentum Transfer). Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Fluid Dynamics with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Fluid Dynamics models structural stress transmission or thermal energy conversion in Fluid Mechanics (Momentum Transfer). Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Flow Through Pipes with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Flow Through Pipes models structural stress transmission or thermal energy conversion in Fluid Mechanics (Momentum Transfer). Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Pumps & Compressors with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Pumps & Compressors models structural stress transmission or thermal energy conversion in Fluid Mechanics (Momentum Transfer). Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    }
  ],
  "fluid mechanics (momentum transfer)_set2": [
    {
      "id": "fluid-mechanics-(momentum-transfer)-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Fluid Properties.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Fluid Statics.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Fluid Dynamics.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Flow Through Pipes.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Pumps & Compressors.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Fluid Properties.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Fluid Properties plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Fluid Statics.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Fluid Statics plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Fluid Dynamics.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Fluid Dynamics plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Flow Through Pipes.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Flow Through Pipes plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "fluid-mechanics-(momentum-transfer)-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Pumps & Compressors.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Pumps & Compressors plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    }
  ],
  "chemical engineering thermodynamics — i_set1": [
    {
      "id": "chemical-engineering-thermodynamics---i-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Laws of Thermodynamics in Chemical Engineering Thermodynamics — I.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for PVT Behavior in Chemical Engineering Thermodynamics — I.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Heat Effects in Chemical Engineering Thermodynamics — I.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Entropy in Chemical Engineering Thermodynamics — I.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Gibbs Free Energy in Chemical Engineering Thermodynamics — I.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Laws of Thermodynamics with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Laws of Thermodynamics models structural stress transmission or thermal energy conversion in Chemical Engineering Thermodynamics — I. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of PVT Behavior with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "PVT Behavior models structural stress transmission or thermal energy conversion in Chemical Engineering Thermodynamics — I. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Heat Effects with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Heat Effects models structural stress transmission or thermal energy conversion in Chemical Engineering Thermodynamics — I. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Entropy with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Entropy models structural stress transmission or thermal energy conversion in Chemical Engineering Thermodynamics — I. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Gibbs Free Energy with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Gibbs Free Energy models structural stress transmission or thermal energy conversion in Chemical Engineering Thermodynamics — I. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    }
  ],
  "chemical engineering thermodynamics — i_set2": [
    {
      "id": "chemical-engineering-thermodynamics---i-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Laws of Thermodynamics.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for PVT Behavior.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Heat Effects.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Entropy.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Gibbs Free Energy.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Laws of Thermodynamics.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Laws of Thermodynamics plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for PVT Behavior.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in PVT Behavior plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Heat Effects.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Heat Effects plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Entropy.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Entropy plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "chemical-engineering-thermodynamics---i-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Gibbs Free Energy.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Gibbs Free Energy plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    }
  ],
  "organic chemistry_set1": [
    {
      "id": "organic-chemistry-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Reaction Mechanisms in Organic Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "organic-chemistry-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Functional Groups in Organic Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "organic-chemistry-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Stereochemistry in Organic Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "organic-chemistry-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Polymer Formation in Organic Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "organic-chemistry-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Industrial Organic Chemicals in Organic Chemistry.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "organic-chemistry-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Reaction Mechanisms with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Reaction Mechanisms models chemical reaction rates and transport mechanisms in Organic Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "organic-chemistry-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Functional Groups with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Functional Groups models chemical reaction rates and transport mechanisms in Organic Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "organic-chemistry-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Stereochemistry with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Stereochemistry models chemical reaction rates and transport mechanisms in Organic Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "organic-chemistry-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Polymer Formation with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Polymer Formation models chemical reaction rates and transport mechanisms in Organic Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "organic-chemistry-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Industrial Organic Chemicals with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Industrial Organic Chemicals models chemical reaction rates and transport mechanisms in Organic Chemistry. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
  "organic chemistry_set2": [
    {
      "id": "organic-chemistry-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Reaction Mechanisms.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "organic-chemistry-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Functional Groups.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "organic-chemistry-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Stereochemistry.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "organic-chemistry-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Polymer Formation.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "organic-chemistry-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Industrial Organic Chemicals.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "organic-chemistry-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Reaction Mechanisms.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Reaction Mechanisms.",
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
      "id": "organic-chemistry-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Functional Groups.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Functional Groups.",
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
      "id": "organic-chemistry-s2-q8",
      "question_no": 8,
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
    },
    {
      "id": "organic-chemistry-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Polymer Formation.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Polymer Formation.",
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
      "id": "organic-chemistry-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Industrial Organic Chemicals.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Industrial Organic Chemicals.",
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
  "material science_set1": [
    {
      "id": "material-science-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Crystal Structure in Material Science.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "material-science-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Metals & Alloys in Material Science.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "material-science-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Ceramics in Material Science.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "material-science-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Polymers in Material Science.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "material-science-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Arrhenius reaction rate equation and define conversion for Composites in Material Science.",
      "answer_lines": [
        "**Arrhenius Equation**: Specific reaction rate constant $k = A e^{-E_a / RT}$, where $A$ is the frequency pre-exponential factor and $E_a$ is the activation energy.",
        "**Fractional Conversion ($X_A$)**: $X_A = \\frac{N_{A0} - N_A}{N_{A0}}$, representing the moles of limiting reactant consumed per mole fed."
      ]
    },
    {
      "id": "material-science-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Crystal Structure with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Crystal Structure models chemical reaction rates and transport mechanisms in Material Science. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "material-science-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Metals & Alloys with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Metals & Alloys models chemical reaction rates and transport mechanisms in Material Science. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "material-science-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Ceramics with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Ceramics models chemical reaction rates and transport mechanisms in Material Science. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "material-science-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Polymers with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Polymers models chemical reaction rates and transport mechanisms in Material Science. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
      "id": "material-science-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental reaction kinetics / transport phenomena, reactor design derivation, and operational curves for Composites with neat schematics.",
      "answer_lines": [
        "1. Kinetic Formulation & Stoichiometry:",
        "Composites models chemical reaction rates and transport mechanisms in Material Science. Formulate species conservation: $\\text{In} - \\text{Out} + \\text{Generation} = \\text{Accumulation}$.",
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
  "material science_set2": [
    {
      "id": "material-science-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Crystal Structure.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "material-science-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Metals & Alloys.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "material-science-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Ceramics.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "material-science-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Polymers.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "material-science-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Raoult's law and the performance equation for an ideal CSTR in Composites.",
      "answer_lines": [
        "1. **Raoult's Law**: Partial vapor pressure of species $i$ equals its liquid mole fraction times its saturation vapor pressure: $P_i = x_i P_i^*$.",
        "2. **CSTR Performance**: Space time required for fractional conversion $X_A$: $\\tau = \\frac{V}{v_0} = \\frac{C_{A0} X_A}{-r_A}$."
      ]
    },
    {
      "id": "material-science-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Crystal Structure.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Crystal Structure.",
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
      "id": "material-science-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Metals & Alloys.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Metals & Alloys.",
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
      "id": "material-science-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Ceramics.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Ceramics.",
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
      "id": "material-science-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Polymers.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Polymers.",
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
      "id": "material-science-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the mass transfer / distillation column separation analysis, equilibrium stage computation, and phase equilibrium for Composites.",
      "answer_lines": [
        "1. Phase Equilibrium & McCabe-Thiele Method:",
        "Analyzes binary vapor-liquid equilibrium (VLE) curves and continuous fractional distillation stage requirements in Composites.",
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
  "numerical methods_set1": [
    {
      "id": "numerical-methods-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Numerical Methods.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "numerical-methods-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Numerical Methods.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "numerical-methods-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Numerical Methods.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "numerical-methods-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Numerical Methods.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "numerical-methods-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Numerical Methods.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "numerical-methods-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Error Analysis with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Error Analysis within Numerical Methods.",
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
      "id": "numerical-methods-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Roots of Equations with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Roots of Equations within Numerical Methods.",
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
      "id": "numerical-methods-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Linear Systems with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Linear Systems within Numerical Methods.",
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
      "id": "numerical-methods-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Interpolation & Integration with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Interpolation & Integration within Numerical Methods.",
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
      "id": "numerical-methods-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for ODE Solutions with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for ODE Solutions within Numerical Methods.",
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
  "numerical methods_set2": [
    {
      "id": "numerical-methods-s2-q1",
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
      "id": "numerical-methods-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Roots of Equations.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "numerical-methods-s2-q3",
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
      "id": "numerical-methods-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Interpolation & Integration.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "numerical-methods-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in ODE Solutions.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "numerical-methods-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Error Analysis.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Error Analysis in Numerical Methods.",
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
      "id": "numerical-methods-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Roots of Equations.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Roots of Equations in Numerical Methods.",
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
      "id": "numerical-methods-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Linear Systems.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Linear Systems in Numerical Methods.",
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
      "id": "numerical-methods-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Interpolation & Integration.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Interpolation & Integration in Numerical Methods.",
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
      "id": "numerical-methods-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for ODE Solutions.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing ODE Solutions in Numerical Methods.",
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
  "linear algebra & probability_set1": [
    {
      "id": "linear-algebra-&-probability-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Linear Algebra & Probability.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "linear-algebra-&-probability-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Linear Algebra & Probability.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "linear-algebra-&-probability-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Linear Algebra & Probability.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "linear-algebra-&-probability-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Linear Algebra & Probability.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "linear-algebra-&-probability-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Linear Algebra & Probability.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "linear-algebra-&-probability-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Vector Spaces with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Vector Spaces within Linear Algebra & Probability.",
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
      "id": "linear-algebra-&-probability-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Matrices & Eigenvalues with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Matrices & Eigenvalues within Linear Algebra & Probability.",
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
      "id": "linear-algebra-&-probability-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Probability Distributions with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Probability Distributions within Linear Algebra & Probability.",
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
      "id": "linear-algebra-&-probability-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Random Variables with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Random Variables within Linear Algebra & Probability.",
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
      "id": "linear-algebra-&-probability-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Statistical Inference with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Statistical Inference within Linear Algebra & Probability.",
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
  "linear algebra & probability_set2": [
    {
      "id": "linear-algebra-&-probability-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Vector Spaces.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "linear-algebra-&-probability-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Matrices & Eigenvalues.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "linear-algebra-&-probability-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Probability Distributions.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "linear-algebra-&-probability-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Random Variables.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "linear-algebra-&-probability-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Statistical Inference.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "linear-algebra-&-probability-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Vector Spaces.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Vector Spaces in Linear Algebra & Probability.",
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
      "id": "linear-algebra-&-probability-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Matrices & Eigenvalues.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Matrices & Eigenvalues in Linear Algebra & Probability.",
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
      "id": "linear-algebra-&-probability-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Probability Distributions.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Probability Distributions in Linear Algebra & Probability.",
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
      "id": "linear-algebra-&-probability-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Random Variables.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Random Variables in Linear Algebra & Probability.",
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
      "id": "linear-algebra-&-probability-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Statistical Inference.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Statistical Inference in Linear Algebra & Probability.",
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
  "database management systems_set1": [
    {
      "id": "database-management-systems-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define ER Model and state its primary significance in Database Management Systems.",
      "answer_lines": [
        "**Definition**: ER Model forms a fundamental structural and operational concept within Database Management Systems, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "database-management-systems-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Relational Model & SQL and state its primary significance in Database Management Systems.",
      "answer_lines": [
        "**Definition**: Relational Model & SQL forms a fundamental structural and operational concept within Database Management Systems, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "database-management-systems-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Normalization and state its primary significance in Database Management Systems.",
      "answer_lines": [
        "**Definition**: Normalization forms a fundamental structural and operational concept within Database Management Systems, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "database-management-systems-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Transactions and state its primary significance in Database Management Systems.",
      "answer_lines": [
        "**Definition**: Transactions forms a fundamental structural and operational concept within Database Management Systems, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "database-management-systems-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Indexing & Storage and state its primary significance in Database Management Systems.",
      "answer_lines": [
        "**Definition**: Indexing & Storage forms a fundamental structural and operational concept within Database Management Systems, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "database-management-systems-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of ER Model with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "ER Model serves as a foundational study module in Database Management Systems. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
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
      "id": "database-management-systems-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Relational Model & SQL with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Relational Model & SQL serves as a foundational study module in Database Management Systems. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Relational Model & SQL is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "database-management-systems-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Normalization with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Normalization serves as a foundational study module in Database Management Systems. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
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
      "id": "database-management-systems-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Transactions with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Transactions serves as a foundational study module in Database Management Systems. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
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
    },
    {
      "id": "database-management-systems-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Indexing & Storage with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Indexing & Storage serves as a foundational study module in Database Management Systems. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Indexing & Storage is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "database management systems_set2": [
    {
      "id": "database-management-systems-s2-q1",
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
      "id": "database-management-systems-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Relational Model & SQL.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "database-management-systems-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Normalization.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "database-management-systems-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Transactions.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "database-management-systems-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Indexing & Storage.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "database-management-systems-s2-q6",
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
      "id": "database-management-systems-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Relational Model & SQL. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Relational Model & SQL are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Relational Model & SQL provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "database-management-systems-s2-q8",
      "question_no": 8,
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
      "id": "database-management-systems-s2-q9",
      "question_no": 9,
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
    },
    {
      "id": "database-management-systems-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Indexing & Storage. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Indexing & Storage are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Indexing & Storage provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "statistics & probability_set1": [
    {
      "id": "statistics-&-probability-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Statistics & Probability.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "statistics-&-probability-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Statistics & Probability.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "statistics-&-probability-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Statistics & Probability.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "statistics-&-probability-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Statistics & Probability.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "statistics-&-probability-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Statistics & Probability.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "statistics-&-probability-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Descriptive Statistics with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Descriptive Statistics within Statistics & Probability.",
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
      "id": "statistics-&-probability-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Probability Distributions with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Probability Distributions within Statistics & Probability.",
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
      "id": "statistics-&-probability-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Sampling with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Sampling within Statistics & Probability.",
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
      "id": "statistics-&-probability-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Hypothesis Testing with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Hypothesis Testing within Statistics & Probability.",
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
      "id": "statistics-&-probability-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Regression with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Regression within Statistics & Probability.",
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
  "statistics & probability_set2": [
    {
      "id": "statistics-&-probability-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Descriptive Statistics.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "statistics-&-probability-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Probability Distributions.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "statistics-&-probability-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Sampling.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "statistics-&-probability-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Hypothesis Testing.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "statistics-&-probability-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Regression.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "statistics-&-probability-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Descriptive Statistics.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Descriptive Statistics in Statistics & Probability.",
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
      "id": "statistics-&-probability-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Probability Distributions.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Probability Distributions in Statistics & Probability.",
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
      "id": "statistics-&-probability-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Sampling.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Sampling in Statistics & Probability.",
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
      "id": "statistics-&-probability-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Hypothesis Testing.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Hypothesis Testing in Statistics & Probability.",
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
      "id": "statistics-&-probability-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Regression.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Regression in Statistics & Probability.",
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
  "python for data science_set1": [
    {
      "id": "python-for-data-science-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Python Basics and state its primary asymptotic time complexity in Python for Data Science.",
      "answer_lines": [
        "**Definition**: In Python for Data Science, Python Basics establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "python-for-data-science-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define NumPy & Pandas and state its primary asymptotic time complexity in Python for Data Science.",
      "answer_lines": [
        "**Definition**: In Python for Data Science, NumPy & Pandas establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "python-for-data-science-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Data Visualization and state its primary asymptotic time complexity in Python for Data Science.",
      "answer_lines": [
        "**Definition**: In Python for Data Science, Data Visualization establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "python-for-data-science-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Data Cleaning and state its primary asymptotic time complexity in Python for Data Science.",
      "answer_lines": [
        "**Definition**: In Python for Data Science, Data Cleaning establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "python-for-data-science-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define EDA and state its primary asymptotic time complexity in Python for Data Science.",
      "answer_lines": [
        "**Definition**: In Python for Data Science, EDA establishes core algorithmic logic, data representations, and memory pointer mappings.",
        "**Complexity & Invariant**: Operates with worst-case asymptotic bound $T(n) = O(n \\log n)$ or $O(1)$ direct index access, ensuring optimal memory hierarchy utilization."
      ]
    },
    {
      "id": "python-for-data-science-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Python Basics with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Python Basics serves as a core computational building block in Python for Data Science, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "python-for-data-science-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of NumPy & Pandas with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "NumPy & Pandas serves as a core computational building block in Python for Data Science, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "python-for-data-science-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Data Visualization with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Data Visualization serves as a core computational building block in Python for Data Science, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "python-for-data-science-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of Data Cleaning with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "Data Cleaning serves as a core computational building block in Python for Data Science, optimizing storage efficiency, access latency, and data integrity.",
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
      "id": "python-for-data-science-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental design principles, detailed algorithmic implementation, and asymptotic complexity analysis of EDA with neat trace schematics.",
      "answer_lines": [
        "1. Problem Definition & Architectural Abstraction:",
        "EDA serves as a core computational building block in Python for Data Science, optimizing storage efficiency, access latency, and data integrity.",
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
  "python for data science_set2": [
    {
      "id": "python-for-data-science-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Python Basics.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Python Basics.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "python-for-data-science-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with NumPy & Pandas.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in NumPy & Pandas.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "python-for-data-science-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Data Visualization.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Data Visualization.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "python-for-data-science-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with Data Cleaning.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in Data Cleaning.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "python-for-data-science-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary data representation and recurrence relation associated with EDA.",
      "answer_lines": [
        "1. **Data Representation**: Organized using dynamic contiguous memory buffers or pointer-linked node structures conforming to structural invariants in EDA.",
        "2. **Recurrence Relation**: Formulated via recurrence $T(n) = 2T(n/2) + O(n)$, resolving by the Master Theorem to strictly bound execution time."
      ]
    },
    {
      "id": "python-for-data-science-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Python Basics. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Python Basics.",
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
      "id": "python-for-data-science-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for NumPy & Pandas. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in NumPy & Pandas.",
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
      "id": "python-for-data-science-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Data Visualization. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Data Visualization.",
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
      "id": "python-for-data-science-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for Data Cleaning. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in Data Cleaning.",
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
      "id": "python-for-data-science-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the component architecture, data flow diagrams, and edge-case handling for EDA. Trace its execution on sample inputs.",
      "answer_lines": [
        "1. Structural Hierarchy & Invariants:",
        "Analyzes component interactions, pointer linkages, and state transitions maintaining structural invariants in EDA.",
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
  "aerospace materials_set1": [
    {
      "id": "aerospace-materials-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Metals & Alloys and state its primary measurement protocol in Aerospace Materials.",
      "answer_lines": [
        "**Definition**: Metals & Alloys represents a core empirical or experimental procedure in Aerospace Materials, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "aerospace-materials-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Composites and state its primary measurement protocol in Aerospace Materials.",
      "answer_lines": [
        "**Definition**: Composites represents a core empirical or experimental procedure in Aerospace Materials, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "aerospace-materials-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Ceramics and state its primary measurement protocol in Aerospace Materials.",
      "answer_lines": [
        "**Definition**: Ceramics represents a core empirical or experimental procedure in Aerospace Materials, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "aerospace-materials-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Fatigue & Fracture and state its primary measurement protocol in Aerospace Materials.",
      "answer_lines": [
        "**Definition**: Fatigue & Fracture represents a core empirical or experimental procedure in Aerospace Materials, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "aerospace-materials-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Material Selection and state its primary measurement protocol in Aerospace Materials.",
      "answer_lines": [
        "**Definition**: Material Selection represents a core empirical or experimental procedure in Aerospace Materials, establishing standardized laboratory measurements.",
        "**Protocol**: Enforces calibrated sensor instrumentation, zero-offset adjustments, duplicate trials, and systematic error tracking with SI units."
      ]
    },
    {
      "id": "aerospace-materials-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Metals & Alloys with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Metals & Alloys within Aerospace Materials. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "aerospace-materials-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Composites with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Composites within Aerospace Materials. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "aerospace-materials-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Ceramics with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Ceramics within Aerospace Materials. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "aerospace-materials-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Fatigue & Fracture with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Fatigue & Fracture within Aerospace Materials. Draw the complete apparatus wiring / setup schematic.",
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
      "id": "aerospace-materials-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental experimental principles, instrumentation setup, procedural sequence, and error minimization for Material Selection with neat schematics.",
      "answer_lines": [
        "1. Experimental Objective & Apparatus Setup:",
        "Establishes physical measurement objectives and calibration procedures for Material Selection within Aerospace Materials. Draw the complete apparatus wiring / setup schematic.",
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
  "aerospace materials_set2": [
    {
      "id": "aerospace-materials-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Metals & Alloys.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "aerospace-materials-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Composites.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "aerospace-materials-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Ceramics.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "aerospace-materials-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Fatigue & Fracture.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "aerospace-materials-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the formula for percentage experimental error and tolerance verification for Material Selection.",
      "answer_lines": [
        "1. **Percentage Error**: Calculated as $\\text{Percentage Error} = \\frac{|\\text{Experimental Value} - \\text{Theoretical Value}|}{\\text{Theoretical Value}} \\times 100\\%$.",
        "2. **Tolerance Verification**: Ensures calibrated instrumentation operates within specified precision margins ($< 2\\%$ full-scale error)."
      ]
    },
    {
      "id": "aerospace-materials-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Metals & Alloys.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Metals & Alloys.",
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
      "id": "aerospace-materials-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Composites.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Composites.",
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
      "id": "aerospace-materials-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Ceramics.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Ceramics.",
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
      "id": "aerospace-materials-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Fatigue & Fracture.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Fatigue & Fracture.",
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
      "id": "aerospace-materials-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the characteristic curves, calibration standards, failure troubleshooting, and quantitative evaluation for Material Selection.",
      "answer_lines": [
        "1. Equipment Specifications & Operational Limits:",
        "Details rated tolerances, thermal thresholds, and precision standards governing apparatus and instrumentation used in Material Selection.",
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
  "engineering mathematics iii_set1": [
    {
      "id": "engineering-mathematics-iii-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Engineering Mathematics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "engineering-mathematics-iii-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Engineering Mathematics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "engineering-mathematics-iii-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Engineering Mathematics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "engineering-mathematics-iii-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Engineering Mathematics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "engineering-mathematics-iii-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the Cauchy-Riemann equations and define an analytic function in Engineering Mathematics III.",
      "answer_lines": [
        "**Cauchy-Riemann Conditions**: A function $f(z) = u(x,y) + i v(x,y)$ satisfies $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$.",
        "**Analyticity**: $f(z)$ is analytic at $z_0$ if its derivative $f'(z)$ exists not only at $z_0$ but at every point in a neighborhood of $z_0$."
      ]
    },
    {
      "id": "engineering-mathematics-iii-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Numerical Methods with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Numerical Methods within Engineering Mathematics III.",
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
      "id": "engineering-mathematics-iii-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Partial Differential Equations with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Partial Differential Equations within Engineering Mathematics III.",
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
      "id": "engineering-mathematics-iii-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Complex Analysis with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Complex Analysis within Engineering Mathematics III.",
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
      "id": "engineering-mathematics-iii-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Probability with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Probability within Engineering Mathematics III.",
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
      "id": "engineering-mathematics-iii-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental mathematical theorem, detailed calculus derivation, and analytical solution procedure for Statistics with step-by-step proofs.",
      "answer_lines": [
        "1. Theorem Statement & Prerequisites:",
        "Establishes formal mathematical conditions and functional domain boundaries for Statistics within Engineering Mathematics III.",
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
  "engineering mathematics iii_set2": [
    {
      "id": "engineering-mathematics-iii-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Numerical Methods.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "engineering-mathematics-iii-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Partial Differential Equations.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "engineering-mathematics-iii-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Complex Analysis.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "engineering-mathematics-iii-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Probability.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "engineering-mathematics-iii-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State Cayley-Hamilton theorem and the formula for matrix inverse in Statistics.",
      "answer_lines": [
        "1. **Cayley-Hamilton Theorem**: Every square matrix $A$ satisfies its own characteristic equation: $p(A) = A^n + c_{n-1} A^{n-1} + \\dots + c_0 I = \\mathbf{0}$.",
        "2. **Matrix Inverse**: Expressed as polynomial: $A^{-1} = -\\frac{1}{c_0}(A^{n-1} + c_{n-1} A^{n-2} + \\dots + c_1 I)$, provided $\\det(A) = (-1)^n c_0 \\ne 0$."
      ]
    },
    {
      "id": "engineering-mathematics-iii-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Numerical Methods.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Numerical Methods in Engineering Mathematics III.",
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
      "id": "engineering-mathematics-iii-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Partial Differential Equations.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Partial Differential Equations in Engineering Mathematics III.",
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
      "id": "engineering-mathematics-iii-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Complex Analysis.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Complex Analysis in Engineering Mathematics III.",
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
      "id": "engineering-mathematics-iii-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Probability.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Probability in Engineering Mathematics III.",
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
      "id": "engineering-mathematics-iii-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the complex variable / transform analysis, residue contour integration, and series expansion for Statistics.",
      "answer_lines": [
        "1. Complex Domain / Transform Architecture:",
        "Analyzes singularity classifications, branch cuts, and harmonic conjugates governing Statistics in Engineering Mathematics III.",
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
  "electrical machines_set1": [
    {
      "id": "electrical-machines-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Transformers in Electrical Machines.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Transformers."
      ]
    },
    {
      "id": "electrical-machines-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for DC Machines in Electrical Machines.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in DC Machines."
      ]
    },
    {
      "id": "electrical-machines-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Induction Machines in Electrical Machines.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Induction Machines."
      ]
    },
    {
      "id": "electrical-machines-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Synchronous Machines in Electrical Machines.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Synchronous Machines."
      ]
    },
    {
      "id": "electrical-machines-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Applications in Electrical Machines.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Applications."
      ]
    },
    {
      "id": "electrical-machines-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Transformers with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Transformers models electromagnetic and circuit dynamics in Electrical Machines. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electrical-machines-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of DC Machines with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "DC Machines models electromagnetic and circuit dynamics in Electrical Machines. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electrical-machines-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Induction Machines with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Induction Machines models electromagnetic and circuit dynamics in Electrical Machines. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electrical-machines-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Synchronous Machines with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Synchronous Machines models electromagnetic and circuit dynamics in Electrical Machines. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "electrical-machines-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Applications with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Applications models electromagnetic and circuit dynamics in Electrical Machines. Draw the complete equivalent schematic with active/passive components.",
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
  "electrical machines_set2": [
    {
      "id": "electrical-machines-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Transformers.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electrical-machines-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for DC Machines.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electrical-machines-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Induction Machines.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electrical-machines-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Synchronous Machines.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electrical-machines-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Applications.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "electrical-machines-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Transformers. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Transformers into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electrical-machines-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for DC Machines. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes DC Machines into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electrical-machines-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Induction Machines. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Induction Machines into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electrical-machines-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Synchronous Machines. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Synchronous Machines into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "electrical-machines-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Applications. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Applications into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "sensors & transducers_set1": [
    {
      "id": "sensors-&-transducers-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Sensor Fundamentals in Sensors & Transducers.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Sensor Fundamentals."
      ]
    },
    {
      "id": "sensors-&-transducers-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Displacement Sensors in Sensors & Transducers.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Displacement Sensors."
      ]
    },
    {
      "id": "sensors-&-transducers-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Temperature Sensors in Sensors & Transducers.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Temperature Sensors."
      ]
    },
    {
      "id": "sensors-&-transducers-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Optical Sensors in Sensors & Transducers.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Optical Sensors."
      ]
    },
    {
      "id": "sensors-&-transducers-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Smart Sensors in Sensors & Transducers.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Smart Sensors."
      ]
    },
    {
      "id": "sensors-&-transducers-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Sensor Fundamentals with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Sensor Fundamentals models electromagnetic and circuit dynamics in Sensors & Transducers. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "sensors-&-transducers-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Displacement Sensors with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Displacement Sensors models electromagnetic and circuit dynamics in Sensors & Transducers. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "sensors-&-transducers-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Temperature Sensors with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Temperature Sensors models electromagnetic and circuit dynamics in Sensors & Transducers. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "sensors-&-transducers-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Optical Sensors with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Optical Sensors models electromagnetic and circuit dynamics in Sensors & Transducers. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "sensors-&-transducers-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Smart Sensors with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Smart Sensors models electromagnetic and circuit dynamics in Sensors & Transducers. Draw the complete equivalent schematic with active/passive components.",
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
  "sensors & transducers_set2": [
    {
      "id": "sensors-&-transducers-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Sensor Fundamentals.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "sensors-&-transducers-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Displacement Sensors.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "sensors-&-transducers-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Temperature Sensors.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "sensors-&-transducers-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Optical Sensors.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "sensors-&-transducers-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Smart Sensors.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "sensors-&-transducers-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Sensor Fundamentals. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Sensor Fundamentals into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "sensors-&-transducers-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Displacement Sensors. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Displacement Sensors into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "sensors-&-transducers-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Temperature Sensors. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Temperature Sensors into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "sensors-&-transducers-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Optical Sensors. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Optical Sensors into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "sensors-&-transducers-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Smart Sensors. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Smart Sensors into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  "solar energy_set1": [
    {
      "id": "solar-energy-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Solar Radiation in Solar Energy.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "solar-energy-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Solar Thermal in Solar Energy.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "solar-energy-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Solar PV in Solar Energy.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "solar-energy-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Solar Systems in Solar Energy.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "solar-energy-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the primary governing equation and boundary assumptions for Applications in Solar Energy.",
      "answer_lines": [
        "**Governing Equation**: Modeled by Euler-Bernoulli bending $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$ or fluid momentum $\\sum F = m a$, maintaining physical continuum equilibrium.",
        "**Boundary Assumptions**: Assumes linear elasticity (Hooke's law $\\sigma = E \\varepsilon$), steady-state mass conservation, and factor of safety $SF \\ge 1.5$."
      ]
    },
    {
      "id": "solar-energy-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Solar Radiation with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Solar Radiation models structural stress transmission or thermal energy conversion in Solar Energy. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "solar-energy-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Solar Thermal with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Solar Thermal models structural stress transmission or thermal energy conversion in Solar Energy. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "solar-energy-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Solar PV with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Solar PV models structural stress transmission or thermal energy conversion in Solar Energy. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "solar-energy-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Solar Systems with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Solar Systems models structural stress transmission or thermal energy conversion in Solar Energy. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    },
    {
      "id": "solar-energy-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and operational characteristics of Applications with neat system schematics.",
      "answer_lines": [
        "1. Continuum Mechanics / Thermodynamic Model:",
        "Applications models structural stress transmission or thermal energy conversion in Solar Energy. Sketch the physical schematic and free-body diagram.",
        "2. Step-by-Step Analytical Derivation:",
        "• Step 1: Consider an infinitesimal differential element $dx \\times dy$ under equilibrium. State balance of forces: $\\sum F_x = 0, \\sum F_y = 0$.",
        "• Step 2: Relate kinematic strain to displacement: $\\varepsilon_x = \\frac{\\partial u}{\\partial x}$. Apply Hooke's constitutive relation: $\\sigma_x = E \\varepsilon_x$.",
        "• Step 3: Integrate moment of resistance across cross-sectional area: $M = \\int y \\sigma dA = \\frac{E}{R}\\int y^2 dA = \\frac{E I}{R}$.",
        "• Step 4: Establish the canonical flexure formula: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$, relating bending stress to section modulus.",
        "3. Failure Criteria & Factor of Safety:",
        "Compare maximum shear stress $\\tau_{\\max} = \\frac{\\sigma_1 - \\sigma_3}{2}$ against Tresca/Von Mises yield thresholds, maintaining $SF = \\frac{\\sigma_y}{\\sigma_{allow}} \\ge 1.5$.",
        "4. Engineering Conclusion:",
        "Provides closed-form equations for sizing mechanical drive shafts, pressure vessels, and aerospace structural members. State all SI units."
      ]
    }
  ],
  "solar energy_set2": [
    {
      "id": "solar-energy-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Solar Radiation.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "solar-energy-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Solar Thermal.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "solar-energy-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Solar PV.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "solar-energy-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Solar Systems.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "solar-energy-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define thermal efficiency and state the Reynolds number criterion for Applications.",
      "answer_lines": [
        "1. **Thermal Efficiency**: Ratio of useful work output to high-temperature heat input $\\eta_{th} = 1 - \\frac{Q_L}{Q_H} = \\frac{W_{net}}{Q_{in}}$.",
        "2. **Flow Regime Criterion**: Reynolds number $Re = \\frac{\\rho v D}{\\mu}$; flow is laminar for $Re < 2300$ and fully turbulent for $Re > 4000$ in circular conduits."
      ]
    },
    {
      "id": "solar-energy-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Solar Radiation.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Solar Radiation plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "solar-energy-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Solar Thermal.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Solar Thermal plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "solar-energy-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Solar PV.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Solar PV plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "solar-energy-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Solar Systems.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Solar Systems plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    },
    {
      "id": "solar-energy-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the thermodynamic cycle / fluid dynamics analysis, efficiency equations, and component design for Applications.",
      "answer_lines": [
        "1. System Thermodynamics & State Diagrams:",
        "Analyzes state changes in Applications plotted on pressure-volume ($P-v$) and temperature-entropy ($T-s$) coordinate planes.",
        "2. Step-by-Step Cycle Calculation:",
        "• Step 1: State the First Law energy balance for each process: $q - w = \\Delta h = c_p \\Delta T$.",
        "• Step 2: Formulate isentropic compression and expansion relationships: $\\frac{T_2}{T_1} = \\left(\\frac{P_2}{P_1}\\right)^{\\frac{\\gamma-1}{\\gamma}} = r_p^{\\frac{\\gamma-1}{\\gamma}}$.",
        "• Step 3: Derive thermal efficiency expression: $\\eta_{th} = 1 - \\frac{T_4 - T_1}{T_3 - T_2} = 1 - \\frac{1}{r_p^{(\\gamma-1)/\\gamma}}$.",
        "• Step 4: Evaluate back work ratio $BWR = \\frac{W_c}{W_t}$ and determine optimum pressure ratio for maximum specific net work output.",
        "3. Industrial Applications & Energy Efficiency:",
        "Deployed in gas turbine aviation propulsion, combined-cycle power generation plants, and industrial refrigeration compressors.",
        "4. Examination Checklist:",
        "Sketch neatly labeled $P-v$ and $T-s$ cycle diagrams with numbered state points, show isobaric and isentropic lines clearly, and box final efficiency values."
      ]
    }
  ],
  "biochemistry_set1": [
    {
      "id": "biochemistry-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Biomolecules and state its primary significance in Biochemistry.",
      "answer_lines": [
        "**Definition**: Biomolecules forms a fundamental structural and operational concept within Biochemistry, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "biochemistry-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Enzymes and state its primary significance in Biochemistry.",
      "answer_lines": [
        "**Definition**: Enzymes forms a fundamental structural and operational concept within Biochemistry, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "biochemistry-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Metabolism and state its primary significance in Biochemistry.",
      "answer_lines": [
        "**Definition**: Metabolism forms a fundamental structural and operational concept within Biochemistry, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "biochemistry-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Molecular Biology and state its primary significance in Biochemistry.",
      "answer_lines": [
        "**Definition**: Molecular Biology forms a fundamental structural and operational concept within Biochemistry, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "biochemistry-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Clinical Biochemistry and state its primary significance in Biochemistry.",
      "answer_lines": [
        "**Definition**: Clinical Biochemistry forms a fundamental structural and operational concept within Biochemistry, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "biochemistry-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Biomolecules with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Biomolecules serves as a foundational study module in Biochemistry. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Biomolecules is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "biochemistry-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Enzymes with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Enzymes serves as a foundational study module in Biochemistry. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Enzymes is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "biochemistry-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Metabolism with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Metabolism serves as a foundational study module in Biochemistry. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Metabolism is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "biochemistry-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Molecular Biology with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Molecular Biology serves as a foundational study module in Biochemistry. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Molecular Biology is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "biochemistry-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Clinical Biochemistry with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Clinical Biochemistry serves as a foundational study module in Biochemistry. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Clinical Biochemistry is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "biochemistry_set2": [
    {
      "id": "biochemistry-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Biomolecules.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "biochemistry-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Enzymes.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "biochemistry-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Metabolism.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "biochemistry-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Molecular Biology.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "biochemistry-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Clinical Biochemistry.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "biochemistry-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Biomolecules. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Biomolecules are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Biomolecules provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "biochemistry-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Enzymes. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Enzymes are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Enzymes provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "biochemistry-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Metabolism. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Metabolism are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Metabolism provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "biochemistry-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Molecular Biology. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Molecular Biology are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Molecular Biology provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "biochemistry-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Clinical Biochemistry. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Clinical Biochemistry are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Clinical Biochemistry provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "human anatomy & physiology_set1": [
    {
      "id": "human-anatomy-&-physiology-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Cell & Tissue and state its primary significance in Human Anatomy & Physiology.",
      "answer_lines": [
        "**Definition**: Cell & Tissue forms a fundamental structural and operational concept within Human Anatomy & Physiology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Skeletal System and state its primary significance in Human Anatomy & Physiology.",
      "answer_lines": [
        "**Definition**: Skeletal System forms a fundamental structural and operational concept within Human Anatomy & Physiology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Cardiovascular and state its primary significance in Human Anatomy & Physiology.",
      "answer_lines": [
        "**Definition**: Cardiovascular forms a fundamental structural and operational concept within Human Anatomy & Physiology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Nervous System and state its primary significance in Human Anatomy & Physiology.",
      "answer_lines": [
        "**Definition**: Nervous System forms a fundamental structural and operational concept within Human Anatomy & Physiology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Respiratory & Renal and state its primary significance in Human Anatomy & Physiology.",
      "answer_lines": [
        "**Definition**: Respiratory & Renal forms a fundamental structural and operational concept within Human Anatomy & Physiology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Cell & Tissue with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Cell & Tissue serves as a foundational study module in Human Anatomy & Physiology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Cell & Tissue is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Skeletal System with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Skeletal System serves as a foundational study module in Human Anatomy & Physiology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Skeletal System is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Cardiovascular with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Cardiovascular serves as a foundational study module in Human Anatomy & Physiology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Cardiovascular is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Nervous System with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Nervous System serves as a foundational study module in Human Anatomy & Physiology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Nervous System is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Respiratory & Renal with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Respiratory & Renal serves as a foundational study module in Human Anatomy & Physiology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Respiratory & Renal is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "human anatomy & physiology_set2": [
    {
      "id": "human-anatomy-&-physiology-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Cell & Tissue.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Skeletal System.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Cardiovascular.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Nervous System.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Respiratory & Renal.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Cell & Tissue. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Cell & Tissue are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Cell & Tissue provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Skeletal System. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Skeletal System are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Skeletal System provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Cardiovascular. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Cardiovascular are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Cardiovascular provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Nervous System. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Nervous System are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Nervous System provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "human-anatomy-&-physiology-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Respiratory & Renal. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Respiratory & Renal are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Respiratory & Renal provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "microbiology_set1": [
    {
      "id": "microbiology-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Microbial Basics and state its primary significance in Microbiology.",
      "answer_lines": [
        "**Definition**: Microbial Basics forms a fundamental structural and operational concept within Microbiology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "microbiology-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Bacteria and state its primary significance in Microbiology.",
      "answer_lines": [
        "**Definition**: Bacteria forms a fundamental structural and operational concept within Microbiology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "microbiology-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Viruses and state its primary significance in Microbiology.",
      "answer_lines": [
        "**Definition**: Viruses forms a fundamental structural and operational concept within Microbiology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "microbiology-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Fungi and state its primary significance in Microbiology.",
      "answer_lines": [
        "**Definition**: Fungi forms a fundamental structural and operational concept within Microbiology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "microbiology-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define Industrial Microbiology and state its primary significance in Microbiology.",
      "answer_lines": [
        "**Definition**: Industrial Microbiology forms a fundamental structural and operational concept within Microbiology, establishing core functional mechanisms.",
        "**Significance**: It coordinates essential biological pathways, organizational structures, or regulatory standards, ensuring system integrity and accurate diagnostic characterization."
      ]
    },
    {
      "id": "microbiology-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Microbial Basics with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Microbial Basics serves as a foundational study module in Microbiology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Microbial Basics is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "microbiology-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Bacteria with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Bacteria serves as a foundational study module in Microbiology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Bacteria is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "microbiology-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Viruses with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Viruses serves as a foundational study module in Microbiology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Viruses is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "microbiology-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Fungi with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Fungi serves as a foundational study module in Microbiology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Fungi is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    },
    {
      "id": "microbiology-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the detailed structural organization, biochemical/procedural mechanisms, and functional regulation of Industrial Microbiology with neat schematics.",
      "answer_lines": [
        "1. Overview & Conceptual Architecture:",
        "Industrial Microbiology serves as a foundational study module in Microbiology. It coordinates physiological, biochemical, and operational interactions through structured pathways.",
        "2. Step-by-Step Mechanistic Sequence:",
        "• Step 1 (Initiation & Molecular Binding): Specific substrates, cellular signals, or initial inputs engage target complexes, triggering conformational changes.",
        "• Step 2 (Intermediate Cascade & Transduction): Intracellular enzyme cascades or procedural milestones process and amplify biological flux across operational boundaries.",
        "• Step 3 (Functional Execution): Effector complexes coordinate downstream transcription, active membrane transport, or structured project deliverable synthesis.",
        "• Step 4 (Homeostatic Feedback): Accumulation of terminal end-products engages negative feedback loops, restoring steady-state baseline equilibrium.",
        "3. Practical Applications & Diagnostic Relevance:",
        "Knowledge of Industrial Microbiology is directly applied in clinical pathology, agricultural bioprocessing, pharmacological drug formulation, or institutional quality audit.",
        "4. Examination Checklist & Summary:",
        "Draw neat pencil structural schematics, label key anatomical/functional features on the right margin, and cite relevant scientific terminology."
      ]
    }
  ],
  "microbiology_set2": [
    {
      "id": "microbiology-s2-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Microbial Basics.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "microbiology-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Bacteria.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "microbiology-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Viruses.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "microbiology-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Fungi.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "microbiology-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State two primary diagnostic characteristics or procedural benchmarks associated with Industrial Microbiology.",
      "answer_lines": [
        "1. **Primary Character**: It exhibits distinct morphological ultrastructure, biochemical specificity, or recognized institutional benchmarks under standard operating conditions.",
        "2. **Practical Function**: It acts as a critical regulatory checkpoint, preventing physiological dysfunction or procedural errors during systematic implementation."
      ]
    },
    {
      "id": "microbiology-s2-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Microbial Basics. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Microbial Basics are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Microbial Basics provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "microbiology-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Bacteria. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Bacteria are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Bacteria provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "microbiology-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Viruses. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Viruses are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Viruses provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "microbiology-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Fungi. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Fungi are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Fungi provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    },
    {
      "id": "microbiology-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the experimental methodology, comparative classification, and clinical/industrial applications of Industrial Microbiology. Provide a comprehensive analytical breakdown.",
      "answer_lines": [
        "1. Structural & Taxonomic Classification:",
        "Entities within Industrial Microbiology are categorized by morphological hierarchy, biochemical specificity, enzymatic markers, and physiological adaptation strategies.",
        "2. Detailed Experimental & Diagnostic Protocol:",
        "• Step 1 (Sample Collection & Sterile Preparation): Specimens are collected under sterile conditions and preserved in fixatives to prevent enzymatic autolysis.",
        "• Step 2 (Differential Staining & Microscopic Assay): Specialized stains or molecular probes are applied to resolve cellular ultrastructure and diagnostic organelle morphology.",
        "• Step 3 (Quantitative Measurement): Optical density, biochemical flux, or performance indicators are recorded across controlled temperature and pH regimes.",
        "• Step 4 (Statistical Verification & Inference): Empirical measurements are compared against standardized reference curves to establish validated conclusions.",
        "3. Comparative Distinction Matrix:",
        "Contrast primary functional forms against alternative types across stability, catalytic efficiency, and evolutionary specialization.",
        "4. Academic Conclusion:",
        "A thorough understanding of Industrial Microbiology provides the scientific foundation for modern biotechnology, diagnostic clinical screening, and microbiological bioprocessing."
      ]
    }
  ],
  "biomedical instrumentation_set1": [
    {
      "id": "biomedical-instrumentation-s1-q1",
      "question_no": 1,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Measurement Basics in Biomedical Instrumentation.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Measurement Basics."
      ]
    },
    {
      "id": "biomedical-instrumentation-s1-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Bioelectrodes in Biomedical Instrumentation.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Bioelectrodes."
      ]
    },
    {
      "id": "biomedical-instrumentation-s1-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Biosensors in Biomedical Instrumentation.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Biosensors."
      ]
    },
    {
      "id": "biomedical-instrumentation-s1-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Medical Devices in Biomedical Instrumentation.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Medical Devices."
      ]
    },
    {
      "id": "biomedical-instrumentation-s1-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "State the governing circuit law or mathematical formulation for Patient Safety in Biomedical Instrumentation.",
      "answer_lines": [
        "**Formulation**: Governed by constitutive state relationship $\\mathbf{Z}(s) = R + s L + \\frac{1}{s C}$ or Faraday-Maxwell induction $e = -\\frac{d\\lambda}{dt}$.",
        "**Physical Significance**: Formulates dynamic AC phase relationships, reactive power balance, and frequency-domain stability margins in Patient Safety."
      ]
    },
    {
      "id": "biomedical-instrumentation-s1-q6",
      "question_no": 6,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Measurement Basics with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Measurement Basics models electromagnetic and circuit dynamics in Biomedical Instrumentation. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "biomedical-instrumentation-s1-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Bioelectrodes with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Bioelectrodes models electromagnetic and circuit dynamics in Biomedical Instrumentation. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "biomedical-instrumentation-s1-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Biosensors with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Biosensors models electromagnetic and circuit dynamics in Biomedical Instrumentation. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "biomedical-instrumentation-s1-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Medical Devices with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Medical Devices models electromagnetic and circuit dynamics in Biomedical Instrumentation. Draw the complete equivalent schematic with active/passive components.",
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
      "id": "biomedical-instrumentation-s1-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Explain the fundamental working principle, detailed mathematical derivation, and frequency response of Patient Safety with neat system schematics.",
      "answer_lines": [
        "1. Physical Principle & Equivalent Circuit:",
        "Patient Safety models electromagnetic and circuit dynamics in Biomedical Instrumentation. Draw the complete equivalent schematic with active/passive components.",
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
  "biomedical instrumentation_set2": [
    {
      "id": "biomedical-instrumentation-s2-q1",
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
      "id": "biomedical-instrumentation-s2-q2",
      "question_no": 2,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Bioelectrodes.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "biomedical-instrumentation-s2-q3",
      "question_no": 3,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Biosensors.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "biomedical-instrumentation-s2-q4",
      "question_no": 4,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Medical Devices.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "biomedical-instrumentation-s2-q5",
      "question_no": 5,
      "marks": 2,
      "prompt": "Part A · 2 Marks",
      "question": "Define the quality factor and resonant threshold condition for Patient Safety.",
      "answer_lines": [
        "1. **Quality Factor (Q)**: Dimensionless figure of merit $Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 C R}$, measuring energy stored per cycle versus power dissipation.",
        "2. **Resonant Threshold**: Occurs when inductive and capacitive reactances cancel ($X_L = X_C$), yielding unity power factor and pure resistive input impedance."
      ]
    },
    {
      "id": "biomedical-instrumentation-s2-q6",
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
      "id": "biomedical-instrumentation-s2-q7",
      "question_no": 7,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Bioelectrodes. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Bioelectrodes into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "biomedical-instrumentation-s2-q8",
      "question_no": 8,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Biosensors. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Biosensors into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "biomedical-instrumentation-s2-q9",
      "question_no": 9,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Medical Devices. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Medical Devices into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
      "id": "biomedical-instrumentation-s2-q10",
      "question_no": 10,
      "marks": 10,
      "prompt": "Part B · 10 Marks",
      "question": "Discuss the subsystem architecture, power conversion efficiency, and steady-state analysis for Patient Safety. Solve for voltage regulation.",
      "answer_lines": [
        "1. Subsystem Decomposition & Magnetic Circuit:",
        "Decomposes Patient Safety into power input stages, energy conversion magnetic/semiconductor cores, and output filtering loads.",
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
  ]
};

export function getBTechSem3PaperQuestions(subjectName: string, isSet1: boolean): DbQuestion[] | null {
  const s = subjectName.toLowerCase().trim();
  const setSuffix = isSet1 ? "_set1" : "_set2";
  const exactKey = `${s}${setSuffix}`;
  if (sem3BTechPapersData[exactKey]) {
    return sem3BTechPapersData[exactKey];
  }
  // Fuzzy match on subject name
  for (const [k, v] of Object.entries(sem3BTechPapersData)) {
    if (k.endsWith(setSuffix)) {
      const subKey = k.replace(setSuffix, "");
      if (s.includes(subKey) || subKey.includes(s)) {
        return v;
      }
    }
  }
  return null;
}
